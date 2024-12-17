File: repos/HL7_SLASH_US-Core/sushi-config.yaml

# ╭──────────────────────────────────────ImplementationGuide───────────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see: https://fshschool.org/sushi/configuration/                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.us.core
canonical: 'http://hl7.org/fhir/us/core'
name: USCore
title: US Core Implementation Guide
status: active
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg  #<<< must include a http://hl7.org/fhir/StructureDefinition/structuredefinition-wg extension that identifies the workgroup responsible for the IG. This is the authoritative element.
    valueCode: cgp  # <<< The value must be the code for the workgroup
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    valueCode: trial-use
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm  #<<<<< this to to inform the publisher of the default FMM level for the artifacts in this IG
    valueInteger: 3
definition:
  extension:
    - url: http://hl7.org/fhir/tools/StructureDefinition/ig-link-dependency  #<<<<< these are to inform the publisher link checker that links to this IG mostly in the change log are valid
      valueCode: hl7.fhir.us.core#7.0.0
    - url: http://hl7.org/fhir/tools/StructureDefinition/ig-link-dependency
      valueCode: hl7.fhir.us.core#7.0.0-ballot
    - url: http://hl7.org/fhir/tools/StructureDefinition/ig-link-dependency
      valueCode: hl7.fhir.us.core#6.1.0
    - url: http://hl7.org/fhir/tools/StructureDefinition/ig-link-dependency
      valueCode: hl7.fhir.us.core#6.0.0
    - url: http://hl7.org/fhir/tools/StructureDefinition/ig-link-dependency
      valueCode: hl7.fhir.us.core#6.0.0-ballot
    - url: http://hl7.org/fhir/tools/StructureDefinition/ig-link-dependency
      valueCode: hl7.fhir.us.core#5.0.1
    - url: http://hl7.org/fhir/tools/StructureDefinition/ig-link-dependency
      valueCode: hl7.fhir.us.core#5.0.0
    - url: http://hl7.org/fhir/tools/StructureDefinition/ig-link-dependency
      valueCode: hl7.fhir.us.core#4.1.0
    - url: http://hl7.org/fhir/tools/StructureDefinition/ig-link-dependency
      valueCode: hl7.fhir.us.core#4.0.0
    - url: http://hl7.org/fhir/tools/StructureDefinition/ig-link-dependency
      valueCode: hl7.fhir.us.core#3.2.0
    - url: http://hl7.org/fhir/tools/StructureDefinition/ig-link-dependency
      valueCode: hl7.fhir.us.core#3.1.1

publisher:
  name: HL7 International / Cross-Group Projects # <<< The stated publisher must be "HL7 International / {wg-name"} where the wg-name is the display value for the code
  url: 'http://www.hl7.org/Special/committees/cgp'  # <<< the contacts for the resource must include the link to the group found in the definition
  email: cgp@lists.HL7.org
jurisdiction: 'urn:iso:std:iso:3166#US'
copyright: >-
  Used by permission of HL7 International, all rights reserved Creative Commons License
description: >-
  The US Core Implementation Guide is based on FHIR Version R4 and defines the minimum conformance requirements for accessing patient data. The Argonaut pilot implementations, ONC 2015 Edition Common Clinical Data Set (CCDS), and ONC U.S. Core Data for Interoperability (USCDI) v1 provided the requirements for this guide. The prior Argonaut search and vocabulary requirements, based on FHIR DSTU2, are updated in this guide to support FHIR Version R4. This guide was used as the basis for further testing and guidance by the Argonaut Project Team to provide additional content and guidance specific to Data Query Access for purpose of ONC Certification testing. These profiles are the foundation for future US Realm FHIR implementation guides. In addition to Argonaut, they are used by DAF-Research, QI-Core, and CIMI. Under the guidance of HL7 and the HL7 US Realm Steering Committee, the content will expand in future versions to meet the needs specific to the US Realm.

  These requirements were originally developed, balloted, and published in FHIR DSTU2 as part of the Office of the National Coordinator for Health Information Technology (ONC) sponsored Data Access Framework (DAF) project. For more information on how DAF became US Core see the US Core change notes.

license: CC0-1.0
date: 2024-10-09
version: '8.0.0-ballot'
fhirVersion: 4.0.1
dependencies:
  # hl7.fhir.uv.bulkdata: 2.0.0
  hl7.fhir.uv.smart-app-launch: 2.0.0
  us.nlm.vsac:
    uri: 'http://fhir.org/packages/us.nlm.vsac/ImplementationGuide/us.nlm.vsac'
    version: 0.21.0
    id: vsac
  hl7.fhir.uv.sdc: 3.0.0
  # hl7.fhir.us.sdoh-clinicalcare: 1.0.0
  us.cdc.phinvads:
    id: uscdcphinvads
    uri: 'http://fhir.org/packages/us.cdc.phinvads/ImplementationGuide/us.cdc.phinvads'
    version: 0.12.0
  # ihe.formatcode.fhir: 1.2.0
  hl7.fhir.uv.extensions.r4: 5.1.0 #hl7.fhir.uv.extensions: 5.1.0 #5.1.0-cibuild #5.1.0-ballot1  # <<<< If your WG is not in the older list, you need to add an explicit dependency to the current version of the extensions pack
pages:
  index.md:
    # extension:
    # - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    #   valueCode: trial-use
    title: Home
  conformance.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: trial-use
    general-requirements.md:
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
    must-support.md:
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
      observation-summary.md:
        title: Observation Summary Table
    scopes.md:
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
      title: SMART on FHIR Obligations and Capabilities
  guidance.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: trial-use
    uscdi.md:
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
      title: USCDI
    general-guidance.md:
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
    clinical-notes.md:
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
    medication-list.md:
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
    basic-provenance.md:
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
      element-level-provenance.md:
        extension:
        - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
          valueCode: informative
        title: Using Provenance To Target Resource Elements
    screening-and-assessments.md:
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
      title:  Screening and Assessments
    changes-between-versions.md:
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
    future-of-US-core.md:
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
      title: Future of US Core
      vitals-write.md:
        extension:
        - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
          valueCode: informative
        title: Writing Vital Signs
  profiles-and-extensions.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: informative
  capability-statements.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: informative
  search-parameters-and-operations.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: trial-use
  terminology.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: trial-use
  security.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: trial-use
  examples.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: informative
  downloads.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: informative
  changes.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: informative
    title: Change Log
  ImplementationGuide-hl7.fhir.us.core.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: informative
    title: US Core ImplementationGuide Resource
parameters:  # see https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
  path-resource:
    - input/resources
    - fsh-generated/resources
  path-pages:
    - input/pagecontent
    - input/intro-notes
    - fsh-generated/includes
    #- input/summaries
  path-expansion-params: '../../input/_resources/exp-params.json'  # for using US ed of SNOMED
  active-tables: false
  apply-contact: true
  apply-jurisdiction: true
  apply-publisher: true
  apply-version: true
  show-inherited-invariants: false
  usage-stats-opt-out: true
  # excludexml: false
  # excludejson: false
  # excludettl: true
  # excludemap: true
  suppressed-ids: DocumentReference/discharge-summary
  tabbed-snapshots: false
  # generate: #what does this do - todo: remove and see4
  #   - xml
  #   - json
  no-narrative:
    # - Patient/example-targeted-provenance
    # - Provenance/example-targeted-provenance
    - DocumentReference/discharge-summary
    - Bundle/docref-example-1
    - Bundle/docref-example-2
  # no-validate:
  #   - '*/*'  # does not seems to work
  #   - 'StructureDefinition/*'
  version-comparison-master: 7.0.0
  version-comparison:
    - 7.0.0
    - 6.1.0
    - 5.0.1
    - 4.0.0
    - 3.1.1
  html-exempt:  # These pages are generated by the cli validator for comparison between Argo and US Core
    - comparison-argo/vs-observation-status-us-core-observation-smoking-status-status.html
    - comparison-argo/sd-argo-diagnosticreport-us-core-diagnosticreport-note.html
    - comparison-argo/vs-c80-doc-typecodes-us-core-documentreference-type.html
    - comparison-argo/sd-argo-procedure-us-core-procedure.html
    - comparison-argo/vs-medication-codes-2.16.840.1.113762.1.4.1010.4.html
    - comparison-argo/vs-condition-category-condition-category.html
    - comparison-argo/index.html
    - comparison-argo/sd-argo-patient-us-core-patient.html
    - comparison-argo/vs-observation-ccdavitalsignresult-us-core-vital-signs.html
    - comparison-argo/sd-argo-goal-us-core-goal.html
    - comparison-argo/vs-device-kind-device-kind.html
    - comparison-argo/sd-argo-medication-us-core-medication.html
    - comparison-argo/sd-argo-vitalsigns-us-core-vital-signs.html
    - comparison-argo/sd-argo-allergyintolerance-us-core-allergyintolerance.html
    - comparison-argo/sd-argo-condition-us-core-condition-encounter-diagnosis.html
    - comparison-argo/sd-argo-observationresults-us-core-observation-clinical-result.html
    - comparison-argo/sd-argo-documentreference-us-core-documentreference.html
    - comparison-argo/sd-argo-birthsex-us-core-birthsex.html
    - comparison-argo/sd-argo-smokingstatus-us-core-smokingstatus.html
    - comparison-argo/sd-argo-immunization-us-core-immunization.html
    - comparison-argo/sd-argo-diagnosticreport-us-core-diagnosticreport-lab.html
    - comparison-argo/vs-observation-codes-us-core-smoking-status-observation-codes.html
    - comparison-argo/vs-report-codes-us-core-diagnosticreport-report-and-note-codes.html
    - comparison-argo/sd-argo-condition-us-core-condition-problems-health-concerns.html
    - comparison-argo/sd-argo-device-us-core-implantable-device.html
    - comparison-argo/sd-argo-race-us-core-race.html
    - comparison-argo/vs-observation-codes-us-core-laboratory-test-codes.html
    - comparison-argo/vs-procedure-type-us-core-procedure-code.html
    - comparison-argo/sd-argo-careplan-us-core-careplan.html
    - comparison-argo/vs-languages-simple-language.html
    - comparison-argo/vs-report-codes-us-core-laboratory-test-codes.html
    - comparison-argo/vs-vacc-status-immunization-status.html
    - comparison-argo/sd-argo-observationresults-us-core-observation-lab.html
    - comparison-argo/sd-argo-ethnicity-us-core-ethnicity.html
    - comparison-argo/vs-narrative-status-us-core-narrative-status.html

  # ipa-comparison: 
  #   - '{current}'
  logging:
    - tx #tx: Messages describing the use of the terminology server (for debugging)
    - html #html: Log when validating an html page (troubleshooting only - leave off)
    - generate #generate: Log when producing an individual resource (troubleshooting only - leave off)
    - init #init: Messages describing the start up process (for debugging)
    - progress #progress: Overall progress messages
  auto-oid-root: 2.16.840.1.113883.4.642.40.2
copyrightyear: '2024+'
# releaselabel: CI Build
# releaselabel: STU7
releaselabel: STU8 Ballot

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To use a provided ig-data/input/includes/menu.xml file, delete the "menu" property below.     │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  Conformance: #conformance.html
      General Requirements: general-requirements.html
      Must Support: must-support.html
      SMART on FHIR Obligations and Capabilities: scopes.html
  Guidance: #guidance.html
      USCDI: uscdi.html
      General Guidance: general-guidance.html
      Clinical Notes: clinical-notes.html
      Medication List: medication-list.html
      Basic Provenance: basic-provenance.html
      Screening and Assessments: screening-and-assessments.html
      Changes Between Versions: changes-between-versions.html
      Future of US Core: future-of-US-core.html
  FHIR Artifacts: #artifact.html
      Profiles: profiles-and-extensions.html#profiles
      Extensions: profiles-and-extensions.html#extensions
      Search Parameters: search-parameters-and-operations.html#search-parameters
      Operations: search-parameters-and-operations.html#operations
      Terminology: terminology.html
      Capability Statements: capability-statements.html
  Security: security.html
  Examples: examples.html
  Downloads: downloads.html
  Change Log: changes.html


---

// File: input/pagecontent/basic-provenance.md


### Provenance in US Core
<div class="bg-success" markdown="1">

The FHIR [Provenance] Resource tracks information about the activity about a version of a resource, describing the entities and agents involved. FHIR resources also contain elements that represent "small-p provenance" information about how the resource was obtained which overlap with the functionality of the Provenance resource.

​This page is divided into two section documenting how the [US Core Provenance Profile] records changes at the *organizational level*, and how the US Core Profiles' "small-p provenance" elements record changes at the *individual level*. The US Core Provenance Profile asserts where the data came from at an organizational or system level.  Because systems typically do not use the Provenance Resource to represent this information at an *individual level* (in other words, activities by the patient or provider), various FHIR resource elements are identified that track the "small p provenance" information at the individual level. The baseline rules and guidance here do not preclude more advanced use cases such as [Using Provenance To Target Resource Elements].

</div><!-- new-content -->

### <span class="bg-success" markdown="1">Organizational Level</span><!-- new-content --> Provenance

<span class="bg-success" markdown="1">The [US Core Provenance Profile] focuses on a key subset of elements, the "last hop", and specific use cases used to assert changes to the record at the organizational level.</span><!-- new-content --> Full Provenance of a Resource requires details from the original resource creator and all intermediary actors that updated the Resource. Members of the Argonaut community and the HL7 security working group discussed the current sharing approaches and end-user display. They agreed the most important information is the last organization making a meaningful clinical update to the data and the prior system providing it - the 'last hop'. Participants didn't dispute the potential need to recreate the entire chain but didn't see this as relevant to the immediate end-user.


#### Key Provenance Elements

The guidance for Provenance in US Core focuses on six key elements: Timestamp, the Target Resource, Author, Author Organization, Transmitter, and Transmitter Organization. The Timestamp is the date and time the author created, updated, or deleted the data. The Target Resource is the Resource the Provenance record supports. The Author represents the person(s) responsible for the information. The Author Organization defines the organization the author is associated with when they created, updated, or deleted the data. The Transmitter represents the system responsible for transmitting the information. Finally, the Transmitter Organization defines the organization responsible for the transmission.

**Key Provenance elements:**

Element | Required | Must Support |Optional| FHIR Element|
---|---|---|---|---
Target | Resource Provenance <br>record supports | | | `Provenance.target`
Timestamp | Date | | Time with timezone offset | `Provenance.recorded`
Author | | Name<br>Identifier | NPI recommended, additional identifiers allowed| `Provenance.agent.who`
Author Organization | | Name<br>Identifier  | NPI recommended, additional identifiers allowed |`Provenance.agent.onBehalfOf`
Transmitter | | Name<br>Identifier | NPI recommended, additional identifiers allowed| `Provenance.agent.who`
Transmitter Organization | | Name<br>Identifier  | NPI recommended, additional identifiers allowed |`Provenance.agent.onBehalfOf`
{: .grid}

### Use Cases

The HL7 Basic Provenance Informative implementation guide outlines four use cases: Fax, Health Information Exchange (HIE) redistribution, HIE transformation, and Clinical Information Reconciliation and Incorporation (CIRI). While these use cases may have FHIR implications in the future, CIRI and HIE are the key use cases and are covered in detail here.

#### Clinical Information Reconciliation and Incorporation

[<span class="bg-success" markdown="1">[Clinical Information Reconciliation and
Incorporation (CIRI)] allows clinicians to reconcile and incorporate patient
health information sent in from external sources to maintain a more accurate
and up-to-date patient records. Consolidated Clinical Document Architecture
(C-CDA) documents are often used to share clinical information with clinicians
from external sources like hospitals, Health Information Exchanges (HIEs), or
other clinicians, and allows the clinician to import and reconcile health care
information into their own patient record.</span><!-- new-content --> Figure 1
represents information from Good Health and Sunshine Health Organization. Dr.
Reconciled reviews the data in Figure 1, updates the reaction to hives, and
stores it in the Future Health Organization system. When a mobile app requests
the information, it receives Dr. Reconciled as the Author and Future Health as
the organization. This type of authorship change is only relevant for data
suitable for reconciliation, such as medications, allergies, and problems. If
Dr. Accepted had saved other clinical content into his EHR that is not
reconciled but stored, such as clinical notes, that content must retain its
original author.

The Figure below represents information from two different organizations to a clinician for reconciliation:

{% include img.html img="Provenance_Recon_Workflow_Step2.svg" caption="Figure 1: Clinical Information Reconciliation and Incorporation (CIRI) from two Organizations" %}

 Dr. Reconciled is the latest author after updating the reaction on 5/15/2019 and accepting it to the local data store. By accepting the information, Dr. Reconciled is taking over the responsibility.

 `GET /AllergyIntolerance?patient=[ID]&_revinclude=Provenance:target`

Good Health Organization Provenance
{% include examplebutton_default.html example="get-all-allergy-provenance-good-health" b_title = "Click Here to See 'Get Allergy Information for a Patient at Good Health' Example" %}

Sunshine Health Organization Provenance
{% include examplebutton_default.html example="get-all-allergy-provenance-sunshine-health" b_title = "Click Here to See 'Get Allergy Information for a Patient at Sunshine Health' Example" %}

After reconciliation, the Future Health Organization Provenance contains the latest information.
{% include examplebutton_default.html example="get-all-allergy-provenance-future-health" b_title = "Click Here to See 'Get Allergy Information for a Patient at Future Health' Example" %}

#### Accepting information from a single site

The Figure below represents information after a provider accepted data from a single site:

{% include img.html img="Provenance_Recon_Single_Organization.svg" caption="Figure 2: CIRI After Accepting Reconciliation, No Changes" %}

Dr. Accepted is the latest author after verifying the problem on 5/2018 and accepting the problem data into their local data store since it went through an interactive reconciliation process.

#### HIE Redistribution

A Health Information Exchange (HIE) is an organization and technology that facilitates information exchange between one and many partners. In specific HIE scenarios, they only redistribute information, while in others, they store, transform, and redistribute information. The HIE must maintain the clinical content fidelity (original author, author organization, and timestamp). In addition, the HIE must keep track of who sent them the information for auditing; however, they are not required to include the original transmitter when redistributing content.

{% include img.html img="Provenance_HIE_Single_Org_Device.svg" caption="Figure 3: HIE Redistribution - No clinical content transformation" %}

Since no clinical content is changed in the HIE redistribution, the best scenario is a Provenance Record with:
- `Provenance.agent.type` = author
  - `Provenance.agent.who` set to the practitioner who authored the content (i.e., not the HIE)
  - `Provenance.agent.onBehalfOf` set to the organization that the author acted on behalf of before sharing with the HIE
- `Provenance.agent.type` = transmitter
  - `Provenance.agent.who` set to the HIE organization

 The timestamp and pointer (i.e., target) to the appropriate Resource are required in all cases and must be included. This IG would note these as **SHALL** constraints if systems always had the Author and Author Organizations available. Participants in the development of this guide reported that the Author information provided to HIEs needs to be more consistent and reliable.  


#### HIE Transformation

Unlike Use Case 3 - HIE Redistribution, Use Case 4 includes data transformation. Information is received (e.g., v2 lab, other CDs), transformed by a HIE, stored, and passed in a new format (e.g., CCD or FHIR).

{% include img.html img="Provenance_HIE_Multi_Org_Device.svg" caption="Figure 4: HIE Transformation - Clinical content is transformed" %}

Transformation of data from one format to another **MAY** change the authorship of the information, where the HIE is the author/author organization. The HIE must maintain the original data source. An `agent.type`="assembler", `agent.type`="transmitter", or other agents from [Provenance Agent Type] value set **MAY** also be included. Due to insufficient implementer guidance, the Basic Provenance guidance here does not specify how to assign authorship for this use case. HL7 plans to gather additional input and include it in the HL7 Basic Provenance Informative guide for C-CDA and FHIR.

### <span class="bg-success" markdown="1">Individual Level Provenance</span><!-- new-content -->

<div class="bg-success" markdown="1">

The functionality of the Provenance resource discussed above. The table below lists the US Core elements that communicate the author and author roles corresponding to the *[U.S. Core Data for Interoperability (USCDI)] Provenance Author and Author Role Data Elements requirements for individuals*. They are also documented on each US Core Profile page's "Profile Specific Implementation Guidance" section. The author is communicated by the elements and the author's role by the referenced target resource (for example, Patient, Practitioner/PractitionerRole, RelatedPerson, Device). Details about the author's role are contained in the target resource's contents. Many of these elements are labeled [Must Support] or [Additional USCDI Requirements]. However, all of these elements and target resources **SHOULD** be supported in the profiles if the system captures the data.

##### Author and Author Role Data Elements

The elements and target resources listed in bold asterisked text indicate that they are *Must Support* or *Additional USCDI Requirements*.
The following US Core Profiles were omitted because they are typically not associated with individual authorship:

- US Core Encounter
- US Core Location
- US Core Organization
- US Core Practitioner
- US Core PractitionerRole
- US Core RelatedPerson
- US Core Medication
- US Core Provenance
- US Core CareTeam
- US Core Coverage
- US Core Specimen
 
This table is also available as a [csv](tables/provenance-elements.csv) or [excel](tables/provenance-elements.xlsx) file:

{% include provenance-source-table-generator.md %}

\* US Core *Must Support* or *Additional USCDI* element

\** US Core *Must Support* Target Resource Type
</div><!-- new-content -->

{% include link-list.md %}


---

// File: input/pagecontent/capability-statements.md


<div markdown="1">
{% include list-capabilitystatements.xhtml %}
<div>
<br />


---

// File: input/pagecontent/changes-between-versions.md


### Introduction

With each major version of FHIR, the core data models have changed.  The FHIR core specification provides a [base resource differential] to help implementers navigate version changes.  However, there are additional considerations for the user and developer experience when transitioning from [FHIR Version DSTU2] to FHIR R4.   Similarly, US Core undergoes annual updates, which are documented on the [Future of US Core] page. Each update to a new version of US Core changes the US Core Profiles and conformance expectations. The following guidance on this page is provided to ensure a smoother upgrade path. It reflects non-normative best practices established at the time of publication.

### Versioning of US Core

US Core undergoes annual updates with new guidance, requirements, profiles, and changes to existing content. The [Directory of published versions] lists the publication history with links to each version of US Core.  The [Change Log] documents the changes across the versions of US Core. The [Argonaut Data Query] guide was published separately and is not included in the directory or change log.

Work is underway to identify corrections in subsequent versions as "patches" to prior versions for ONC Certification.

### Cross Version Comparisons

The table below summarizes the different profiles and resource types between Argonaut Data Query and major releases of US Core :

{% include dstu2-r4-table2.md %}

Detailed comparisons between the FHIR artifacts in this current {{site.data.fhir.igVer}} version of US Core and each previous major release are provided in the links below:

Detailed comparisons between the FHIR artifacts in this current {{site.data.fhir.igVer}} version of US Core and each previous major release are provided in the links below:

- [Comparison with version 7.0.0](comparison-v7.0.0/index.html)
- [Comparison with version 6.1.0](comparison-v6.1.0/index.html)
- [Comparison with version 5.0.1](comparison-v5.0.1/index.html)
- [Comparison with version 4.0.0](comparison-v4.0.0/index.html)
- [Comparison with version 3.1.1](comparison-v3.1.1/index.html)
- [(Partial) Comparison with Argonaut Data Query IG](comparison-argo/index.html)   <!--  using the FHIR validator to compare and the script /Users/ehaas/Documents/Python/Jupyter/MyNotebooks/Validator_Tools/IG-Profile_Comparer.ipynb with the source file input/images-source/ArgoDQ-USCore-ProfileMap.csv. See the script file for instructions -->

### Endpoint Discoverability

A Server may support Version DSTU2 and Argonaut Data Query or FHIR R4 and US Core ver 3.1.1+ or both. A Server may make explicit which version of Argo/US Core is on their FHIR endpoint (e.g., "DSTU2" or "R4" path component or separate files based on version). However, the best practice is to inspect the [endpoint metadata](http://hl7.org/fhir/R4/http.html) on each endpoint to discover the information about a Server's capabilities, including the FHIR version and the US Core Profile version that is supported:

`GET [base]/metadata{?mode=[mode]} {&_format=[mime-type]}`

### No Guarantee that Resource IDs are Preserved

In some FHIR Servers, the identifier of the underlying clinical data is not maintained across FHIR versions. Therefore, Client applications must plan on deduplication methods that rely on something other than a common identifier across FHIR versions.

* Servers **SHOULD** maintain a stable common identifier for a resource across versions.

### Expectation that FHIR DSTU2 Data is Preserved in FHIR R4

In an upgraded R4 endpoint, any data in FHIR DSTU2 **SHOULD** be in FHIR R4. However, not all data in R4 may be available in DSTU2 because some profiles and data classes, like Clinical Notes and pediatric observations, are not part of DSTU2.

* The FHIR RESTful resource types supported in a DSTU2 implementation **SHOULD** be supported in a R4 implementation
  - Exceptions
    - MedicationStatement may be deprecated, and the data **SHOULD** be mapped to MedicationRequest.  
       - See the guidance on the [Medication List] page for how to access a patient's medications
    - Care teams as represented by CarePlan in DSTU2 **SHOULD** be replaced by and the data mapped to CareTeam in R4

* Servers **SHOULD** make available the same information in DSTU2 and R4 where the more recent standard allows.  (e.g., patient Rhonda Jones is available on both)
  - Exceptions
    - MedicationStatement data mapped to MedicationRequest
    - care teams, as represented by CarePlan, **SHOULD** be mapped to CareTeam in R4
* Data **SHOULD** be maintained between versions (i.e., not be degraded).
* When updating between versions, Clients **SHOULD** consider the impact of any changes to data visualization on the usability for the end user and the maintenance of data integrity.


### Authorization Across Versions

- Separate authorization is required
   - There is no expectation that DSTU2 authorizations will work on R4 endpoints, and reauthorization is required when migrating between versions.
      - Maintaining the same auth Server for both endpoints so that the refresh token is valid for both DSTU2 and the R4 endpoint may be possible but not in scope.
- The new endpoint will bring additional/changed resource types and added scopes

{% include link-list.md %}

---

// File: input/pagecontent/changes.md

### Version = 8.0.0 - ballot
- url: <https://hl7.org/fhir/us/core/2025Jan/>
- Based on FHIR version : 4.0.1


#### The January 2025 Ballot

The January 2025 ballot addresses the following:

{% include whats-new-v8-ballot.md %}

#### Changes:

- Implementers submitted over 60 trackers since the publication of US Core ver 8.0.0. We have addressed them and applied over 50 changes listed below:

**Tracker Status**: **(Change Category)** **Summary** **[Jira Issue](#)** **[Link to Updated Content](#)**


1. **Resolved - change required:** (Enhancement) Fix the US Core History Page [FHIR-42950](https://jira.hl7.org/browse/FHIR-42950) and [FHIR-46749](https://jira.hl7.org/browse/FHIR-46749) [See Changes Here](https://hl7.org/fhir/us/core/history.html)
1. **Applied:** (Enhancement) Make Must Support Reference Table more visible [FHIR-44977](https://jira.hl7.org/browse/FHIR-44977) See Changes Here:
    - [Must Support - Resource References](must-support.html#must-support---resource-references)
    - [Must Support Elements](must-support.html#must-support-elements)
    - [FHIR RESTful Capabilities](CapabilityStatement-us-core-server.html#behavior)
2. **Applied:** (Correction) Update Condition.code ICD9 value set link and add STU Note [FHIR-45136](https://jira.hl7.org/browse/FHIR-45136) [See Changes Here](ValueSet-us-core-condition-code.html)
3. **Applied:** (Clarification) Clarify definition of Clinical Information Reconciliation and Incorporation (CIRI) [FHIR-45267](https://jira.hl7.org/browse/FHIR-45267) [See Changes Here](basic-provenance.html#clinical-information-reconciliation-and-incorporation)
4. **Applied:** (Enhancement) Remove dated footnote from Provenance page. [FHIR-45283](https://jira.hl7.org/browse/FHIR-45283)
5. **Applied** (Enhancement) Add SNOMED NUCC Mapping link to US Core PractitionerRole Profile guidance[FHIR-45286](https://jira.hl7.org/browse/FHIR-45286) [See Changes Here](StructureDefinition-us-core-practitionerrole.html)
6. {:#fhir-45319}**Applied:** (Clarification) Clarify Observation Screening Assessment category Must Support requirements [FHIR-45319](https://jira.hl7.org/browse/FHIR-45319) and [FHIR-46052](https://jira.hl7.org/browse/FHIR-46052) See Changes Here:
    - [Screening and Assessments](screening-and-assessments.html#terminology)
    - [US Core Observation Screening Assessment Profile ](StructureDefinition-us-core-observation-screening-assessment.html)
    - [US Core Screening Assessment Observation Maximum Category](ValueSet-us-core-screening-assessment-observation-maximum-category.html)
    - [US Core Simple Observation Profile](StructureDefinition-us-core-simple-observation.html)
    - [US Core Condition Problems and Health Concerns Profile](StructureDefinition-us-core-condition-problems-health-concerns.html)
    - [US Core Screening Assessment Condition Category](ValueSet-us-core-screening-assessment-condition-category.html)
1. **Applied:** (Clarification) Clarify Must Support requirements for requestors [FHIR-45448](https://jira.hl7.org/browse/FHIR-45448) [See Changes Here](must-support.html#must-support-elements)
2.  **Applied:** (Correction) Move "time-period" from Must Support to Must Have section in introduction. [FHIR-45726](https://jira.hl7.org/browse/FHIR-45726) [See Changes Here](StructureDefinition-us-core-average-blood-pressure.html)
3.  **Applied:** (Clarification) Align the Sig description in the medication profile introductions. [FHIR-45951](https://jira.hl7.org/browse/FHIR-45951) See Changes Here:
    - [US Core MedicationDispense Profile](StructureDefinition-us-core-medicationdispense.html)
    - [US Core MedicationRequest Profile](StructureDefinition-us-core-medicationrequest.html)
4.  **Applied:** (Clarification) Clarify Role and use of US Core SearchParameters vs FHIR standard SearchParameters [FHIR-46036](https://jira.hl7.org/browse/FHIR-46036) See Changes Here:
    - [US Core Search Parameters](search-parameters-and-operations.html#search-parameters)
    - [SearchParameter: USCoreAllergyintoleranceClinicalStatus](SearchParameter-us-core-allergyintolerance-clinical-status.html)
    - [US Core Server CapabilityStatement - FHIR RESTful Capabilities](CapabilityStatement-us-core-server.html#behavior)
5.  **Applied:** (Correction) Procedure.code should be Procedure.performed [FHIR-46037](https://jira.hl7.org/browse/FHIR-46037) [See Changes Here](StructureDefinition-us-core-procedure.html)
6.  **Applied:** (Correction) Correct Examples [FHIR-46099](https://jira.hl7.org/browse/FHIR-46099) See Changes Here:
    - [10 Minute Apgar Score Panel Example](Observation-10-minute-apgar-score-panel.html)
    - [Hvs Item Example 88122-7](Observation-HVS-item-example-88122-7.html)
    - [Hvs Item Example 88123-5](Observation-HVS-item-example-88123-5.html)
    - [HVSPanel Example 88121-9](Observation-HVS-panel-example-88121-9.html)
7.  **Applied:** (Clarification) Remove the Must Support on DiagnosticReport (Report and Notes) `media.link` [FHIR-46240](https://jira.hl7.org/browse/FHIR-46240) [See Changes Here](StructureDefinition-us-core-diagnosticreport-note.html)
8.  **Applied:** (Clarification) Clarify the level of granular scopes server shall support [FHIR-46277](https://jira.hl7.org/browse/FHIR-46277) [See Changes Here](scopes.html#additional-us-core-requirements)
9.  **Applied:** (Enhancement) Reference specific version of USCDI for each version of USCore [FHIR-46466](https://jira.hl7.org/browse/FHIR-46466)  See Changes Here:
    - [USCDI](uscdi.html)
    - [Publication (Version) History](https://hl7.org/fhir/us/core/history.html)
    - [Change Log](changes.html)
    - [Future of US Core](future-of-US-core.html)
10. **Applied:** (Correction) Change page status from "Informative" to "Trial-use" where appropriate [FHIR-46514](https://jira.hl7.org/browse/FHIR-46514) (See the tracker comments for a list of changes)
11. **Applied:** (Clarification) Clarify conformance requirements for structured assessments [FHIR-47139](https://jira.hl7.org/browse/FHIR-47139) [See Changes Here](screening-and-assessments.html#structured-screening-and-assessments)
12. **Applied:** (Enhancement) Replace US Core Discharge Disposition Value Set with equivalent [HL7 Terminology (THO)] Value Set [FHIR-47416](https://jira.hl7.org/browse/FHIR-47416) and [FHIR-46194](https://jira.hl7.org/browse/FHIR-46194)
  - [US Core Encounter Profile](StructureDefinition-us-core-encounter.html)
  - [Encounter 1036 Example](Encounter-1036.html)
13. **Applied:** (Enhancement) Tighten constraint on name.use to support better patient matching [FHIR-48416](https://jira.hl7.org/browse/FHIR-48416) [See Changes Here](StructureDefinition-us-core-patient.html)
14. **Applied:** (Correction)Change "status" to "active flag" in US Core RelatedPerson introduction[FHIR-48439](https://jira.hl7.org/browse/FHIR-48439) [See Changes Here](StructureDefinition-us-core-relatedperson.html)
15. **Applied:** (Clarification) Remove resolves declaration from US Core CapabilityStatements [FHIR-48446](https://jira.hl7.org/browse/FHIR-48446)  See Changes Here:
    - [US Core Server CapabilityStatement - FHIR RESTful Capabilities](CapabilityStatement-us-core-client.html)
    - [US Core Client CapabilityStatement - FHIR RESTful Capabilities](CapabilityStatement-us-core-server.html)
html#additional-uscdi-requirements)
1.  **Applied:** (Enhancement) Add section on client best practices for search [FHIR-45179](https://jira.hl7.org/browse/FHIR-45179) [See Changes Here](general-guidance.html#client-best-practices-for-search)
2.  **Applied:** (Clarification) Clarify the '_revinclude` expections for Provenance [FHIR-46077](https://jira.hl7.org/browse/FHIR-46077) See Changes Here:
    - [US Core Provenance Profile](StructureDefinition-us-core-provenance.html#mandatory-search-parameters)
    - [AllergyIntolerance Provenance Example 1](Bundle-allergyintolerance-provenance-example1.html)
    - [AllergyIntolerance Provenance Example 2](Bundle-allergyintolerance-provenance-example2.html)
3.  **Applied:** (Enhancement) Continue to harmonize/share value sets used in US Core and C-CDA in the US Core 8.0 ballot and C-CDA 4.0 ballot [FHIR-46181](https://jira.hl7.org/browse/FHIR-46181) (See Changes Listed in introduction above)
4.  **Applied:** (Enhancement) Updates and Corrections to Medication Clinical Drug VSAC Valueset used by US Core Medication, MedicationDispense Profile, and MedicationRequest Profiles [FHIR-46255](https://jira.hl7.org/browse/FHIR-46255) [See Changes Here](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1010.4/expansion/Latest)
5.  **Applied:** (Enhancement) Replace US Core Pregnancy Status Codes Value Set with equivalent [Value Set Authority Center (VSAC)] Value Set [FHIR-46257](https://jira.hl7.org/browse/FHIR-46257) [See Changes Here](StructureDefinition-us-core-observation-pregnancystatus.html)
6.  **Applied:** (Enhancement) Allow CMS Place of Service codes for 'location.type' in US Core Location Profile [FHIR-46258](https://jira.hl7.org/browse/FHIR-46258) See Changes Here:
    - [US Core Location Profile](StructureDefinition-us-core-location.html)
    - [US Core Location Type ValueSet](ValueSet-us-core-location-type.html)
7.  **Applied:** (Enhancement) Replace US Core Pregnancy Intent Codes Value Set with equivalent [Value Set Authority Center (VSAC)] Value Set [FHIR-46263](https://jira.hl7.org/browse/FHIR-46263) [See Changes Here](StructureDefinition-us-core-observation-pregnancyintent.html)
8.  **Applied:** (Enhancement) Add SDOH Goals value set as "Additional Binding" in Goal Profile [FHIR-46266](https://jira.hl7.org/browse/FHIR-46266) [See Changes Here](StructureDefinition-us-core-goal.html)
9.  **Applied:** (Correction) Specify SMART App Launch Version [FHIR-46279](https://jira.hl7.org/browse/FHIR-46279) Here:
    - [Security](security.html)
    - [US Core Server CapabilityStatement](CapabilityStatement-us-core-server.html)
10. **Applied:** (Enhancement) Replace US Core Survey Codes Value Set with [Value Set Authority Center (VSAC)] Value Set and remove Laboratory LOINCs [FHIR-46347](https://jira.hl7.org/browse/FHIR-46347) [See Changes Here](StructureDefinition-us-core-observation-screening-assessment.html)
11. **Applied:** (Clarification) Clarify when granular scopes overlap [FHIR-46748](https://jira.hl7.org/browse/FHIR-46748) [See Changes Here](scopes.html)
12. **Applied:** (Enhancement) Add USCDI v5 Data Elements to US Core [FHIR-48443](https://jira.hl7.org/browse/FHIR-48443) See Changes Listed in the [8.0.0-Ballot Introduction](changes.html#the-january-2025-ballot) above.
13. **Applied:** (Correction) Update US Core Clinical Note Type Valueset to align with Clinical Note Guidance [FHIR-48607](https://jira.hl7.org/browse/FHIR-48607)  Here:
    - [US Core Clinical Note Type](ValueSet-us-core-clinical-note-type.html)
    - [Clinical Notes](clinical-notes.html)
14. **Applied:** (Correction) Change Average Blood Pressure Profile `Observation.subject` minimum from 0 to 1 [FHIR-45724](https://jira.hl7.org/browse/FHIR-45724) [See Changes Here](StructureDefinition-us-core-average-blood-pressure.html)
15. **Applied:** (Enhancement) Align Encounter Type between C-CDA and FHIR US Core and Replace US Core Encounter Type Value Set with equivalent Value Set Authority Center (VSAC) Value Set [FHIR-46259](https://jira.hl7.org/browse/FHIR-46259) [See Changes Here](StructureDefinition-us-core-encounter.html)
16. **Applied:** (Clarification) Update Must Support page when no reference targets labeled Must Support and update must support labels for Observation.performer targets [FHIR-48442](https://jira.hl7.org/browse/FHIR-48442) See Changes Here:
   - [Must Support - Resource References](must-support.html#must-support---resource-references)
   - [US Core Simple Observation Profile](StructureDefinition-us-core-simple-observation.html)
   - [US Core Observation Screening Assessment Profile](StructureDefinition-us-core-observation-screening-assessment.html)
17. **Applied:** (Enhancement) Update Guidance on Sex and Gender in USCore [FHIR-44115](https://jira.hl7.org/browse/FHIR-44115) [See Changes Here](StructureDefinition-us-core-patient.html#mandatory-and-must-support-data-elements)
18. **Applied:** (Correction) Spelling errors in US Core Server Capability Statement [FHIR-45451](https://jira.hl7.org/browse/FHIR-45451)[See Changes Here](CapabilityStatement-us-core-server.html)
19. **Applied:** (Correction) Fix broken PHINVADS links [FHIR-45494](https://jira.hl7.org/browse/FHIR-45494) [See Changes Here](terminology.html)
20. **Applied:** (Correction) Typo in Condition's granular scope [FHIR-45961](https://jira.hl7.org/browse/FHIR-45961) [See Changes Here](StructureDefinition-us-core-condition-encounter-diagnosis.html#us-core-scopes)
21. **Applied:** (Clarification) Clarify expectations for US@ for health systems [FHIR-46020](https://jira.hl7.org/browse/FHIR-46020) [See Changes Here](StructureDefinition-us-core-patient.html#mandatory-and-must-support-data-elements)
22. **Pre-Applied:** (Clarification) Clarify how "Additional USCDI" is applied for complex elements [FHIR-46028](https://jira.hl7.org/browse/FHIR-46028) [See Changes Here](must-support.html)
23. **Applied:** (Enhancement) Create SCT Specimen Condition value set to include SNOMED CT [FHIR-47061](https://jira.hl7.org/browse/FHIR-47061) See Changes Here:
    - [US Core Specimen Profile](StructureDefinition-us-core-specimen.html)
    - [US Core Specimen Condition ValueSet](ValueSet-us-core-specimen-condition.html)
    - [Lipemic Serum Specimen Example](Specimen-example-serum-lipemic.html)
24. **Applied:** (Clarification) Remove Meta.lastUpdated STU comments [FHIR-48542](https://jira.hl7.org/browse/FHIR-48542)
25. **Applied:** (Correction) Update link to UDI Specification [FHIR-48688](https://jira.hl7.org/browse/FHIR-48688) [See Changes Here](StructureDefinition-us-core-implantable-device.html)
26. **Applied:** (Correction) add MS=False flag to QuestionnaireResponse.authored target [FHIR-48847](https://jira.hl7.org/browse/FHIR-48847) [See Changes Here](StructureDefinition-us-core-questionnaireresponse.profile.json.html)
27. **Applied:** (Correction) add MS=False flags to Procedure.basedOn targets [FHIR-48848](https://jira.hl7.org/browse/FHIR-48848) [See Changes Here](StructureDefinition-us-core-procedure.profile.json.html)
28. **Applied ** (Correction) US Core Survey Codes expansion error [FHIR-46272](https://jira.hl7.org/browse/FHIR-46272) [See Changes Here](https://hl7.org/fhir/us/core/STU7/ValueSet-us-core-survey-codes.html)

The application of the following trackers are pending and will not be completed by the ballot date.

1. **Resolved - change required:** (Enhancement) Create a tracker to THO to add codes from US Core Category to the Observation Category Codesystem [FHIR-43541](https://jira.hl7.org/browse/FHIR-43541)
2. **Triaged:** (Correction) US Core Coverage Profile [FHIR-44122](https://jira.hl7.org/browse/FHIR-44122)
3. **Triaged:** (Correction) US Core Coverage.Type Code Link Update  [FHIR-44124](https://jira.hl7.org/browse/FHIR-44124)
4. **Triaged:** (Correction) US Core Terminology Reference List # 62 [FHIR-44138](https://jira.hl7.org/browse/FHIR-44138)
5. **Resolved - change required:** (Correction) NAIC Code Number Identifier system not registered in THO [FHIR-46185](https://jira.hl7.org/browse/FHIR-46185)

The following trackers have been identified as publishing issues and we are working with HL7 publishing to resolve them.

1. **Publishing:** (Clarification) Confusing for commercial vendor.  Reads very confusing. [FHIR-30783](https://jira.hl7.org/browse/FHIR-30783)
2. **Publishing:** (Correction) AllergyIntolerance does not show constraint [FHIR-34636](https://jira.hl7.org/browse/FHIR-34636)
3. **Publishing:** (Correction) Override built-in examples for address elements [FHIR-43054](https://jira.hl7.org/browse/FHIR-43054)
5. **Publishing:** (Correction) US Core detailed ethnicity expansion error [FHIR-46638](https://jira.hl7.org/browse/FHIR-46638) See STU Notes:
   - [Detailed ethnicity](ValueSet-detailed-ethnicity.html)
   - [Detailed race](ValueSet-detailed-race.html)
6. **Publishing:** (Enhancement) Deprecate every version before 3.1.1  [FHIR-46065](https://jira.hl7.org/browse/FHIR-46065) See Changes Here:
   - [Change Log](changes.html)
   - [History Page](https://hl7.org/fhir/us/core/history.html)

### Version = 7.0.0 (Meets USCDI v4 Requirements)
- url: <https://hl7.org/fhir/us/core/STU7/>
- Based on FHIR version: 4.0.1

The changes in this annual update to US Core have been reviewed and commented upon by the public through the January 2024 HL7 balloting process. The HL7 International Cross-Group Projects work group members have agreed to and voted on the resolution of the community comments.
#### What's new in Version 7.0.0 of US Core:

Each update to a new version of US Core changes the US Core Profiles and conformance expectations. Implementers can find detailed comparisons between the FHIR artifacts in this 7.0.0 version of US Core and each previous major release on [Changes Between Versions] page. Below is an overview of significant changes in Version 7.0.0 of US Core.

- [SMART on FHIR Obligations and Capabilities](https://hl7.org/fhir/us/core/STU7/scopes.html): We rewrote the SMART scopes guidance page to clarify the granular scope requirement in [HTI-1 final rule](https://www.federalregister.gov/documents/2023/04/18/2023-07229/health-data-technology-and-interoperability-certification-program-updates-algorithm-transparency-and), and expanded the guidance to include SMART on FHIR capabilities, token introspection, and `/.well-known/smart-configuration`.
- {: #last-updated }`Meta.lastUpdated` and `_lastUpdated`: We added the `Meta.lastUpdated` element as Must Support and recommend using the `_lastUpdated` search parameter for the US Core Profiles listed below. The General Guidance page documents how to use them to represent and search for resources whose content has changed. We also updated the guidance on the deletion of records.
  - [US Core Laboratory Result Observation Profile](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-observation-lab.html)
  - [US Core DiagnosticReport Profile for Laboratory Results Reporting](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-diagnosticreport-lab.html)
  - [US Core Condition Problems and Health Concerns Profile](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-condition-problems-health-concerns.html)
  - [US Core Encounter Profile](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-encounter.html)
  - [Searching Using lastUpdated](https://hl7.org/fhir/us/core/STU7/general-guidance.html#searching-using-lastupdated)
  - [Representing Deleted Information](https://hl7.org/fhir/us/core/STU7/general-guidance.html#representing-deleted-information)
- [US Core Medication Adherence Extension](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-medication-adherence.html): In the previous ballot version, we added support for Medication Adherence as an *Additional USCDI Requirement* using the new US Core Medication Adherence Extension. In this version, we simplified the adherence codes and changed the information source from a FHIR Reference to actor codes.
- [US Core Average Blood Pressure Profile](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-average-blood-pressure.html): In the previous ballot version, we added the US Core Average Blood Pressure Profile to support the USCDI Average Blood Pressure data element. It was rewritten, and the guidance was updated in this version. Notably, it is based upon the FHIR Observation and not the US Core Vital Signs Profile.
- [US Core Smoking Status Observation Profile](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-smokingstatus.html). This Profile and its terminology were updated to accommodate more smoking-related observations.
- We continue our efforts to link terminology directly to the FHIR® Terminology Service for VSAC Resources (Value Set Authority Center (VSAC)) where applicable and, as a result, align terminology between US Core and [HL7 C-CDA]. In this version, the following value sets have been added or moved to VSAC:

   |Pre 7.0.0  US Core ValueSet|7.0.0 VSAC ValueSet|
   |---|---|
   [US Core Smoking Status Observation Codes](https://hl7.org/fhir/us/core/STU6.1/ValueSet-us-core-smoking-status-observation-codes.html)|[Smoking status type](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1267.6/expansion)
   [Smoking Status](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.11.20.9.38/expansion)|[Smoking status comprehensive](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1267.3/expansion)
   [UsCoreVitalSigns](https://hl7.org/fhir/us/core/STU6.1/ValueSet-us-core-vital-signs.html)|[VitalSignResultType](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.88.12.80.62/expansion)
   [BirthSex](https://hl7.org/fhir/us/core/STU6.1/ValueSet-birthsex.html)|[Birth Sex](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1021.24/expansion)
   {: #vsac-7-0-0 .grid}

#### Changes:

The ballot-related comments resulted in over 80 changes to this specification, which are listed below:

**Tracker Status**: **(Change Category)** **Summary** **[Jira Issue](#)** **[Link to Updated Content](#)**


1. **Applied:** (Enhancement) Updated Gender Identity binding to align with C-CDA [FHIR-43052](https://jira.hl7.org/browse/FHIR-43052) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-genderIdentity.html)
2. **Applied:** (Clarification) Rename fhir-write to vitals-write [FHIR-43400](https://jira.hl7.org/browse/FHIR-43400) [See Changes Here](https://hl7.org/fhir/us/core/STU7/vitals-write.html)
3. **Applied:** (Clarification) Clarify that the Average Blood Pressure profile is protocol agnostic. [FHIR-43402](https://jira.hl7.org/browse/FHIR-43402) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-average-blood-pressure.html)
4. **Applied:** (Clarification) Add example to Must Support - Complex Elements section [FHIR-43430](https://jira.hl7.org/browse/FHIR-43430) [See Changes Here](https://hl7.org/fhir/us/core/STU7/must-support.html#must-support---complex-elements)
5. **Applied:** (Clarification) Clarify that only `Patient.deceasedDateTime` is "Additional USCDI Requirement" [FHIR-43431](https://jira.hl7.org/browse/FHIR-43431) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-patient.html)
6.  **Applied:** (Correction) Fix table rendering to remove duplicates [FHIR-43432](https://jira.hl7.org/browse/FHIR-43432) [See Changes Here](https://hl7.org/fhir/us/core/STU7/screening-and-assessments.html#uscdi-health-assessments-data-element-category)
7.  **Applied:** (Enhancement) Change Medication Adherence Information Source from Reference to Code [FHIR-43466](https://jira.hl7.org/browse/FHIR-43466) and [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-medication-adherence.html) and [Here](https://hl7.org/fhir/us/core/STU7/MedicationRequest-medicationrequest-coded-oral-axid.html)
8.  **Applied:** (Enhancement) References specific extension for measurement protocol [FHIR-43536](https://jira.hl7.org/browse/FHIR-43536) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-average-blood-pressure.html) and [Here](https://hl7.org/fhir/us/core/STU7/Observation-average-blood-pressure.html)
9.  **Applied:** (Clarification) Clarify reference to average BP panel [FHIR-43537](https://jira.hl7.org/browse/FHIR-43537) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-average-blood-pressure.html)
10. **Applied:** (Clarification) Derive Average Blood Pressure directly from Observation [FHIR-43538](https://jira.hl7.org/browse/FHIR-43538) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-average-blood-pressure.html) and [Here](https://hl7.org/fhir/us/core/STU7/Observation-average-blood-pressure.html)
11. **Applied:** (Clarification) Constrain Average Blood Pressure Profile Observation.value to max = 0 [FHIR-43539](https://jira.hl7.org/browse/FHIR-43539) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-average-blood-pressure.html)
12. **Applied:** (Clarification) Broaden Profile Purpose Statement [FHIR-43540](https://jira.hl7.org/browse/FHIR-43540) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-care-experience-preference.html)
13. **Applied:** (Enhancement) Add reference in the profile description to the base resource for scope and usage definitions. [FHIR-43543](https://jira.hl7.org/browse/FHIR-43543) For example [See Change Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-goal.html)
14. **Applied:** (Clarification) Remove note to balloters regarding the terminology [FHIR-43547](https://jira.hl7.org/browse/FHIR-43547) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-care-experience-preference.html) and [Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-treatment-intervention-preference.html)
15. **Applied:** (Enhancement) Add guidance how to express conditional Goals [FHIR-43552](https://jira.hl7.org/browse/FHIR-43552) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-care-experience-preference.html) and [Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-treatment-intervention-preference.html)
16. **Applied:** (Clarification) Clarify Specimen Condition definition [FHIR-43567](https://jira.hl7.org/browse/FHIR-43567) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-specimen.html)
17. **Applied:** (Clarification) Updates to Care Experience Preference Profile and Treatment Intervention Preference Profiles introduction [FHIR-43568](https://jira.hl7.org/browse/FHIR-43568) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-care-experience-preference.html) and [Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-treatment-intervention-preference.html)
18. **Applied:** (Enhancement) Add choice of must support for Specimen.accessionIdentifier vs Specimen.identifier [FHIR-43585](https://jira.hl7.org/browse/FHIR-43585) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-specimen.html)
19. **Applied** (Clarification) Clarify location extension to use when not in Encounter [FHIR-43587](https://jira.hl7.org/browse/FHIR-43587) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-encounter.html)
20. **Applied:** (Clarification) Reason for Referral Clarification/Correction [FHIR-43588](https://jira.hl7.org/browse/FHIR-43588) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-procedure.html) and [Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-servicerequest.html)
21. **Applied:** (Enhancement) Update the terminology bindings and allow effectivePeriod for Smoking Status [FHIR-43589](https://jira.hl7.org/browse/FHIR-43589) and [FHIR-43355](https://jira.hl7.org/browse/FHIR-43355) See Changes Here:
   - [US Core Smoking Status Observation Profile](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-smokingstatus.html)
   - [Smoking Status Type ValueSet](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1267.6/expansion)
   - [Smoking Status Comprehensive](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1267.3/expansion)
   - [Some Day Smoker Example](https://hl7.org/fhir/us/core/STU7/Observation-some-day-smoker.html)
   - [Cigarette Pack-Years Example](https://hl7.org/fhir/us/core/STU7/Observation-pack-years-example.html)
22. **Applied:** (Clarification) Clarify that not all US Core extensions are used in US Core Profiles [FHIR-43590](https://jira.hl7.org/browse/FHIR-43590) [See Changes Here](https://hl7.org/fhir/us/core/STU7/profiles-and-extensions.html#extensions)
23. **Applied:** (Correction) Fixed scopes formats [FHIR-43616](https://jira.hl7.org/browse/FHIR-43616) [See Changes Here](https://hl7.org/fhir/us/core/STU7/scopes.html)
24. **Applied:** (Clarification) Document that multiple races and ethnicities are supported in the extension [FHIR-43624](https://jira.hl7.org/browse/FHIR-43624) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-patient.html)
25. **Applied:** (Enhancement) Move US Core Vital Signs ValueSet to VSAC [FHIR-43633](https://jira.hl7.org/browse/FHIR-43633) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-vital-signs.html) and [Here](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.88.12.80.62/expansion)
26. **Applied:** (Clarification) Added guidance for using NDC codes[FHIR-43641](https://jira.hl7.org/browse/FHIR-43641) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-medicationdispense.html#mandatory-and-must-support-data-elements)
27. **Resolved - change required:** (Enhancement) Add _lastUpdated search parameter guidance [FHIR-43659](https://jira.hl7.org/browse/FHIR-43659) The changes are listed [above](#last-updated)
28. **Applied:** (Enhancement) Edit Medication Adherence codes and provide examples [FHIR-43757](https://jira.hl7.org/browse/FHIR-43757) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-medication-adherence.html)
29. **Applied** (Enhancement) Update and clarify US Core Scopes requirements [FHIR-43761](https://jira.hl7.org/browse/FHIR-43761) [See Changes Here](https://hl7.org/fhir/us/core/STU7/scopes.html) and [Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-allergyintolerance.html#us-core-scopes)
30. **Applied:** (Correction) Fix Rendering in granular scope tables [FHIR-43770](https://jira.hl7.org/browse/FHIR-43770) [See Changes Here](https://hl7.org/fhir/us/core/STU7/scopes.html#us-core-scopes)
31. **Applied:** (Correction) Fix format error [FHIR-43773](https://jira.hl7.org/browse/FHIR-43773) [See Changes Here](https://hl7.org/fhir/us/core/STU7/general-requirements.html#missing-data)
32. **Applied:** (Clarification) Restore the FHIR Core resource definitions and comments [FHIR-43800](https://jira.hl7.org/browse/FHIR-43800) For example [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-allergyintolerance.html)
33. **Applied** (Enhancement) Clarify the use of USCDI Health Assessment Value Sets [FHIR-43922](https://jira.hl7.org/browse/FHIR-43922) [See Changes Here](https://hl7.org/fhir/us/core/STU7/screening-and-assessments.html#terminology)
34. **Applied:** (Clarification) Add Note to Vital Signs Profile regarding known validation errors[FHIR-43928](https://jira.hl7.org/browse/FHIR-43928) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-vital-signs.html)
35. **Applied** (Clarification)Clarify reason for referral options [FHIR-43929](https://jira.hl7.org/browse/FHIR-43929) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-procedure.html)
36. **Applied:** (Correction) Change Quantity to SimpleQuantity MedicationRequest and MedicationDispense profiles [FHIR-43932](https://jira.hl7.org/browse/FHIR-43932) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-medicationdispense.html) and [Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-medicationrequest.html)
37. **Applied:** (Correction) Move elements from "must have" to "must support" in Immunization profile introduction [FHIR-43934](https://jira.hl7.org/browse/FHIR-43934) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-immunization.html)
38. **Applied:** (Clarification) Race extension cardinality / documentation does not match value set [FHIR-43937](https://jira.hl7.org/browse/FHIR-43937) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-race.html)
39. **Applied:** (Correction) Update diagram in Section 3.6.4.3 [FHIR-43938](https://jira.hl7.org/browse/FHIR-43938) [See Changes Here](https://hl7.org/fhir/us/core/STU7/screening-and-assessments.html#codes-for-problemshealthconcerns-goals-service-requests-and-procedures)
40. **Applied:** (Correction) Undo copy/paste error to US Simple Observation Profile description [FHIR-43954](https://jira.hl7.org/browse/FHIR-43954) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-simple-observation.html)
41. **Applied:** (Correction) change "treatment-intervention" to "treatment-intervention-profile" [FHIR-44008](https://jira.hl7.org/browse/FHIR-44008) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-treatment-intervention-preference.html#mandatory-and-must-support-data-elements)
42. **Applied:** (Correction) Add hyperlink [FHIR-44009](https://jira.hl7.org/browse/FHIR-44009) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-location.html#mandatory-and-must-support-data-elements)
43. **Applied:** (Correction) Restore the missing graphics [FHIR-44010](https://jira.hl7.org/browse/FHIR-44010)  and [FHIR-44011](https://jira.hl7.org/browse/FHIR-44011) [See Changes Here](https://hl7.org/fhir/us/core/STU7/screening-and-assessments.html#us-core-observation-screening-assessment-profile) and [Here](https://hl7.org/fhir/us/core/STU7/screening-and-assessments.html#us-core-observation-screening-assessment-profile)
44. **Applied:** (Correction) Restore the missing example [FHIR-44012](https://jira.hl7.org/browse/FHIR-44012) [See Changes Here](https://hl7.org/fhir/us/core/STU7/screening-and-assessments.html#searching-for-screening-and-assessment-data)
45. **Applied:** (Correction) Fix table formatting on Screening & assessments page - [FHIR-44014](https://jira.hl7.org/browse/FHIR-44014) [See Changes Here](https://hl7.org/fhir/us/core/STU7/screening-and-assessments.html#uscdi-health-assessments-data-element-category)
46. **Applied:** (Clarification) Add guidance for goals in Screening & Assessments page [FHIR-44015](https://jira.hl7.org/browse/FHIR-44015) [See Changes Here](https://hl7.org/fhir/us/core/STU7/screening-and-assessments.html#uscdi-health-assessments-data-element-category)
47. **Applied:** (Correction) Change "US Core Laboratory Result Observation Profile." to "US Core Observation Clinical Result Profile." [FHIR-44016](https://jira.hl7.org/browse/FHIR-44016) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-observation-lab.html#mandatory-and-must-support-data-elements)
48. **Applied:** (Correction) Where superfluous, Remove references to versions of USCDI [FHIR-44017](https://jira.hl7.org/browse/FHIR-44017) For example [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-medicationrequest.html)
49. **Applied:** (Correction) Remove erroneous text [FHIR-44018](https://jira.hl7.org/browse/FHIR-44018) and [FHIR-44022](https://jira.hl7.org/browse/FHIR-44022) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-care-experience-preference.html#mandatory-and-must-support-data-elements) and [Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-treatment-intervention-preference.html#mandatory-and-must-support-data-elements)
50. **Applied:** (Enhancement) Add guidance/constraints for use of UCUM for reference range in Laboratory Result Observation Profile [FHIR-44023](https://jira.hl7.org/browse/FHIR-44023) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-observation-lab.html) and [Here](https://hl7.org/fhir/us/core/STU7/general-guidance.html#using-ucum-codes-in-the-quantity-datatype)
51. **Applied:** (Correction) Correct "e.g." and "i.e." to "e.g.," "i.e.," throughout guide [FHIR-44053](https://jira.hl7.org/browse/FHIR-44053)
52. **Applied:** (Clarification) Updated to specific link text instead generic "Here" for bulleted list of changes [FHIR-44055](https://jira.hl7.org/browse/FHIR-44055) [See Changes Here](https://hl7.org/fhir/us/core/STU7/changes.html)
53. **Applied:** (Clarification) Clarify encounter in DiagnosticReport [FHIR-44056](https://jira.hl7.org/browse/FHIR-44056) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-diagnosticreport-note.html))
54. **Applied:** (Clarification) Change "may" to "can" to avoid conformance verbs [FHIR-44060](https://jira.hl7.org/browse/FHIR-44060) [See Changes Here](https://hl7.org/fhir/us/core/STU7/general-guidance.html#narrative) and [Here](https://hl7.org/fhir/us/core/STU7/screening-and-assessments.html#category-codes)
55. **Applied:** (Correction) Clarify Medication Adherence Extension definitions [FHIR-44076](https://jira.hl7.org/browse/FHIR-44076) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-medication-adherence.html)
56. **Applied:** (Correction) Remove redundant sentence from Server CapabilityStatement description [FHIR-44112](https://jira.hl7.org/browse/FHIR-44112) [See Changes Here](https://hl7.org/fhir/us/core/STU7/capability-statements.html)
57. **Applied:** (Clarification) Clarify the use of UCUM for Quantity datatypes in Lab Observations [FHIR-44117](https://jira.hl7.org/browse/FHIR-44117) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-observation-lab.html) and [Here](https://hl7.org/fhir/us/core/STU7/general-guidance.html#using-ucum-codes-in-the-quantity-datatype)
58. **Applied:** (Correction) Remove US Core from CapabilityStatement.instantiates [FHIR-44121](https://jira.hl7.org/browse/FHIR-44121) [See Changes Here](https://hl7.org/fhir/us/core/STU7/CapabilityStatement-us-core-client.html)
59. **Applied:** (Clarification) Include FHIR R6 Sex and Gender content in Patient Profile Introduction [FHIR-44123](https://jira.hl7.org/browse/FHIR-44123) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-patient.html)
60. **Applied:** (Enhancement) Remove ASKU from value sets and use DAR concept instead [FHIR-44127](https://jira.hl7.org/browse/FHIR-44127) and [FHIR-41571](https://jira.hl7.org/browse/FHIR-41571) See Changes:
   - [US Core Gender Identity Extension](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-genderIdentity.html)
   - [US Core Birth Sex Extension](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-birthsex.html)
   - [US Core Observation Sexual Orientation Profile](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-observation-sexual-orientation.html)
61. **Applied:** (Enhancement) Add non-binary to gender identity value set [FHIR-44132](https://jira.hl7.org/browse/FHIR-44132) [See Changes Here](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1021.32/expansion)
62. **Applied:** (Correction) Correct reference to USCDI Average Blood Pressure element from "data class" to "data element" in change log [FHIR-44405](https://jira.hl7.org/browse/FHIR-44405) [See Changes Here](https://hl7.org/fhir/us/core/STU7/changes.html#the-january-2024-ballot) 
63. **Applied:** (Correction) bold text "SHALL NOT" [FHIR-44507](https://jira.hl7.org/browse/FHIR-44507) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-documentreference.html)
64. **Applied:** (Enhancement) Continue US Core and C-CDA value set alignment initiatives [FHIR-44522](https://jira.hl7.org/browse/FHIR-44522) The Value sets are listed [above](#vsac-7-0-0)
65. **Applied:** (Clarification) Update Treatment Intervention Observation.code to LOINC [FHIR-44019](https://jira.hl7.org/browse/FHIR-44019) and [FHIR-44539](https://jira.hl7.org/browse/FHIR-44539) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-treatment-intervention-preference.html)
66. **Applied:** (Correction) Add Social Determinants of Health Screening Assessments And Questions to Screening and Assessments Page [FHIR-44545](https://jira.hl7.org/browse/FHIR-44545) [See Changes Here](https://hl7.org/fhir/us/core/STU7/screening-and-assessments.html#codes-for-problemshealthconcerns-goals-service-requests-and-procedures)
67. **Applied:** (Correction) fix codes in US Core Average Blood Pressure Profile search examples [FHIR-44623](https://jira.hl7.org/browse/FHIR-44623) For example, [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-average-blood-pressure.html#mandatory-search-parameters)
68. **Applied:** (Clarification) Update guidance for servers not supporting PractitionerRole [FHIR-44624](https://jira.hl7.org/browse/FHIR-44624) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-practitioner.html)
69. **Applied:** (Correction) change "resources" to "resources types" [FHIR-44650](https://jira.hl7.org/browse/FHIR-44650) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-provenance.html)
70. **Applied:** (Correction) Update average blood pressure example to be more realistic [FHIR-44668](https://jira.hl7.org/browse/FHIR-44668) [See Changes Here](https://hl7.org/fhir/us/core/STU7/Observation-average-blood-pressure.html)
71. **Applied:** (Clarification) Clarify Must Support requirements for Practitioner.address [FHIR-44693](https://jira.hl7.org/browse/FHIR-44693) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-practitioner.html) and [Here](https://hl7.org/fhir/us/core/STU7/future-of-US-core.html)
72. **Applied:** (Clarification) Update Goal introduction to match profile [FHIR-44694](https://jira.hl7.org/browse/FHIR-44694) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-goal.html)
73. **Applied:** (Enhancement) Sex Extension's value set is too restrictive [FHIR-44710](https://jira.hl7.org/browse/FHIR-44710) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-sex.html)
74. **Applied:** (Enhancement) Update Condition.code and Procedure.code from extensible to current [FHIR-44715](https://jira.hl7.org/browse/FHIR-44715) See Changes Here:
  - [US Core Condition Encounter Diagnosis Profile](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-condition-encounter-diagnosis.html)
  - [US Core Condition Problems and Health Concerns Profile](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-condition-problems-health-concerns.html)
  - [US Core Procedure Profile](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-procedure.html)
  - [General Requirements](https://hl7.org/fhir/us/core/STU7/general-requirements.html#extensible-binding-for-coded-elements)
75. **Applied:** (Clarification) Update guidance on Referencing US Core Profiles [FHIR-44759](https://jira.hl7.org/browse/FHIR-44759) [See Changes Here](https://hl7.org/fhir/us/core/STU7/general-guidance.html#referencing-us-core-profiles)
76. **Applied:** (Enhancement) Relax Sex binding to "extensible" [FHIR-44764](https://jira.hl7.org/browse/FHIR-44764) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-sex.html)
77. **Applied:** (Enhancement) Combine the tables of Must Support references andAdditional USCDI references [FHIR-44946](https://jira.hl7.org/browse/FHIR-44946) [See Changes Here](https://hl7.org/fhir/us/core/STU7/CapabilityStatement-us-core-server.html#ms-ref-table)
78. **Applied:** (Correction) QA Error: specify version of http://terminology.hl7.org/CodeSystem/provenance-participant-type [FHIR-44967](https://jira.hl7.org/browse/FHIR-44967) [See Changes Here](https://hl7.org/fhir/us/core/STU7/ValueSet-us-core-provenance-participant-type.html#logical-definition-cld)
79. **Applied:** (Clarification) Align category term with community understanding [FHIR-45002](https://jira.hl7.org/browse/FHIR-45002) [See Changes Here](https://hl7.org/fhir/us/core/STU7/CodeSystem-condition-category.html)
80. **Applied:** (Enhancement) Add Guidance on meeting the definition of 'X' [FHIR-45177](https://jira.hl7.org/browse/FHIR-45177) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-sex.html)
81. **Applied:** (Clarification) Clarify 𝗔𝗗𝗗𝗜𝗧𝗜𝗢𝗡𝗔𝗟 𝗨𝗦𝗖𝗗𝗜 requirements for Reference datatype [FHIR-45204](https://jira.hl7.org/browse/FHIR-45204) See Changes Here:
  - [US Core Procedure Profile](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-procedure.html#mandatory-and-must-support-data-elements)
  - [US Core ServiceRequest Profile](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-servicerequest.html#mandatory-and-must-support-data-elements)
  - [US Core MedicationRequest Profile](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-medicationrequest.html#mandatory-and-must-support-data-elements)
82. **Applied:** (Correction) Update DocumentReference.content.format binding [FHIR-45302](https://jira.hl7.org/browse/FHIR-45302) [See Changes Here](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-documentreference.html#terminology-bindings-differential)
83. **Applied:** (Correction) Update code system URL in US Core Discharge Disposition [FHIR-45303](https://jira.hl7.org/browse/FHIR-45303) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/ValueSet-us-core-discharge-disposition.html)

The application of the following tracker is pending and will not be completed by the publication date.

1.  **Resolved - change required:** (Enhancement) Create a tracker to THO to add codes from US Core Category to the Observation Category Codesystem [FHIR-43541](https://jira.hl7.org/browse/FHIR-43541)

The following trackers have been identified as publishing issues and we are working with HL7 publishing to resolve them.

1. **Publishing::** (Clarification) Confusing for commercial vendor.  Reads very confusing. [FHIR-30783](https://jira.hl7.org/browse/FHIR-30783)
2. **Publishing::** (Correction) AllergyIntolerance does not show constraint [FHIR-34636](https://jira.hl7.org/browse/FHIR-34636)
3. **Publishing:** (Correction) Override built-in examples for address elements [FHIR-43054](https://jira.hl7.org/browse/FHIR-43054)


### Version = 7.0.0 - ballot
- url: <https://hl7.org/fhir/us/core/2024Jan/>
- Based on FHIR version : 4.0.1

#### The January 2024 Ballot

This ballot addresses the following:

- We have updated US Core to include the new [U.S. Core Data for Interoperability (USCDI) v4] Data Elements and Classes that the Office of the National Coordinator (ONC) published in July of 2023:
  
  - For the USCDI Allergies and Intolerances Substance (Non-Medication) data element, no change was needed for the [US Core AllergyIntolerance Profile] because the existing `code` element binding to [Common substances for allergy and intolerance documentation including refutations](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1186.8/expansion) already includes "Non-pharmacologic agent"
  
  - For the USCDI Encounter Identifier data element, no changes were needed because the [US Core Encounter Profile] already supports `Encounter.identifier` as a *Must Support* element.
  
  - For the USCDI Facility Information data class and elements, the [US Core Location Profile] already supports Facility Name and has been updated to support Facility Identifier and Type.  The [US Core Immunization Profile] has been updated to reference the US Core Location resource directly as a *Must Support* element, and the following US Core Profiles have been updated to *indirectly* reference the location/facility via [US Core Encounter Profile] as a *Must Support* element:
    - [US Core DiagnosticReport Profile for Laboratory Results Reporting](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-diagnosticreport-lab.html)
    - [US Core Immunization Profile](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-immunization.html)
    - [US Core MedicationDispense Profile](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-medicationdispense.html)
    - [US Core Observation Clinical Result Profile](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-observation-clinical-result.html)
    - [US Core Procedure Profile](https://hl7.org/fhir/us/core/2024Jan/profiles-and-extensions.html#procedure)
    - [US Core ServiceRequest Profile](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-servicerequest.html)
  
  - For the USCDI Time of Procedure data element, no changes were needed because:
    - the [US Core Procedure Profile](https://hl7.org/fhir/us/core/2024Jan/profiles-and-extensions.html#procedure) already supports `Procedure.performed[x]` as a *Must Support* element.
    - the [US Core DiagnosticReport Profile for Report and Note Exchange](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-diagnosticreport-note.html) already supports `DiagnosticReport.performed[x]` as a *Must Support* element.
    - the [US Core Immunization Profile](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-immunization.html) already supports `Immunization.occurrence[x]` as a *Must Support* element.
  
  - For the USCDI Average Blood Pressure data element, the new [US Core Average Blood Pressure Profile](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-average-blood-pressure.html) has been added to US Core. It is based on the [US Core Blood Pressure Profile](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-blood-pressure.html) and uses the [Vital Signs with Qualifying Elements: Average Blood Pressure Profile] as a blueprint.
  
  - For the USCDI Medications data class and elements, the [US Core MedicationRequest Profile](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-medicationrequest.html) already supports Medication Instructions and has been updated to support Medication Adherence as an *Additional USCDI Requirement* using the new [US Core Medication Adherence Extension].

  - For the USCDI Laboratory data class and elements, the [US Core Laboratory Result Observation Profile](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-observation-lab.html) already supports Result Unit of Measure data element for using UCUM for coded quantity units and has been updated to support Result Reference Range and Result Interpretation as *Must Support* elements. The [US Core Specimen Profile](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-specimen.html) has been updated to support Specimen Identifier as a *Must Support* element, and Specimen Source Site and Specimen Condition Acceptability as *Additional USCDI Requirements*.

  - For the USCDI Goals and Preferences data class Treatment Intervention Preference and Care Experience Preference data elements, [US Core Treatment Intervention Preference Profile](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-treatment-intervention-preference.html) and [US Core Care Experience Preference Profile](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-care-experience-preference.html) have been added to US Core and use the PACIO Advance Directive Interoperability Implementation Guide's Care Experience Preference Profile and Personal Intervention Preference Profile as blueprints.

  - For the USCDI Health Status Assessments data class, including the data elements Physical Activity, Substance Use, and Alcohol Use, US Core's [Screening and Assessments](https://hl7.org/fhir/us/core/2024Jan/screening-and-assessments.html) Guidance is used.  To enhance interoperability, an extensible "starter set" of concepts constrains each Screening and Assessments domain.  These value sets are summarized [here](https://hl7.org/fhir/us/core/2024Jan/screening-and-assessments.html#terminology).

- Clarify USCDI Requirements: We updated our documentation and approach on the relationship between USCDI and US Core how we identify [Must Support vs Additional USCDI Requirements](https://hl7.org/fhir/us/core/2024Jan/must-support.html#additional-uscdi-requirements). See examples of this and association documentation:
   - [US Core Patient Profile](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-patient.html#profile)
   - [US Core Conformance Artifacts](https://hl7.org/fhir/us/core/2024Jan/general-requirements.html#us-core-conformance-artifacts)
   - [Additional USCDI Requirements](https://hl7.org/fhir/us/core/2024Jan/must-support.html#additional-uscdi-requirements)
   - [USCDI](https://hl7.org/fhir/us/core/2024Jan/uscdi.html)
   - [Summary of Additional USCDI Requirement References](https://hl7.org/fhir/us/core/2024Jan/CapabilityStatement-us-core-server.html#summary-of-additional-uscdi-requirement-references)


- We continue our efforts to link terminology directly to the FHIR® Terminology Service for VSAC Resources ([Value Set Authority Center (VSAC)] where applicable and, as a result, align terminology between US Core and [HL7 C-CDA]. The following value sets have been moved:
  
   |Pre 7.0.0-Ballot US Core ValueSet|7.0.0-Ballot VSAC ValueSet|
   |---|---|
   [US Core Sexual Orientation](https://hl7.org/fhir/us/core/STU6.1/ValueSet-us-core-sexual-orientation.html)|[Sexual Orientation](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1240.11/expansion)
   {:.grid}

- Added Procedure.reasonCode and Procedure.reasonReference as *Additional USCDI Requirements* to meet the USCDI Data Element,Reason for Referral when a ServiceRequest is not used to request a procedure. See these changes: 
   - [US Core Procedure](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-procedure.html)
   - [US Core ServiceRequest](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-servicerequest.html)
   - [Procedure Example](https://hl7.org/fhir/us/core/2024Jan/Procedure-defib-implant.html)
   - [USCDI](https://hl7.org/fhir/us/core/2024Jan/uscdi.html)

- Scopes: To meet the ONC’s granular scope requirement in [HTI-1 proposed rule](https://www.federalregister.gov/d/2023-07229/p-991+), we added required support for granular scopes as defined in Version 2.0.0 of [SMART App Launch] and moved the SMART scopes guidance from Future of US Core to a [Conformance Page](https://hl7.org/fhir/us/core/2024Jan/scopes.html) and updated requirements for each profile.
  
- FHIR Write: Add Argonaut Write Guidance for Vital Sign Observations to Record or Update Data section on the Future of US Core Page. [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/future-of-US-core.html#record-or-update-data) and [Here](https://hl7.org/fhir/us/core/2024Jan/fhir-write.html)
  
- Based on the feedback from the US Core variance request process, we updated several profiles to permit implementers can references to other `subject` entities as defined in the base standard.  This is in addition to the Must Support reference to US Core Patient. We are interested in comments on what the impact on client applications will be. For an example of this change [Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-observation-clinical-result.html#profile))
  
- Implementers submitted over 60 trackers since the publication of US Core ver 6.0.0 and 6.1.0 We have addressed them and applied over 50 changes listed below:

 **Tracker Status**: **Summary** **Jira Issue** **Link to Updated Content**
1. **APPLIED:** Update CarePlan text status element's short description to reflect the status values [FHIR-43015](https://jira.hl7.org/browse/FHIR-43015) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-careplan.html#profile)
2. **APPLIED:** Update Smoking Status status element's short description to reflect the status values [FHIR-43118](https://jira.hl7.org/browse/FHIR-43118) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-smokingstatus.html#profile)
3. **APPLIED:** Correct invalid invariants us-core-3 and us-core-4 [FHIR-41523](https://jira.hl7.org/browse/FHIR-41523) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-observation-screening-assessment.html) and [Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-observation-clinical-result.html) and [Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-smokingstatus.html)
4. **APPLIED:** Correct invalid invariants pd-1 and us-core-13 [FHIR-41586](https://jira.hl7.org/browse/FHIR-41586) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-practitionerrole.html)
5. **APPLIED:** Correct invalid invariant us-core-1 [FHIR-41670](https://jira.hl7.org/browse/FHIR-41670) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-observation-screening-assessment.html) and [Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-observation-clinical-result.html)
6. **APPLIED:** Correct invalid SearchParameter expression for USCoreConditionAssertedDate [FHIR-41673](https://jira.hl7.org/browse/FHIR-41673) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/SearchParameter-us-core-condition-asserted-date.html)
7. **APPLIED:** Fix Typo in Tribal Extension [FHIR-41739](https://jira.hl7.org/browse/FHIR-41739) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-tribal-affiliation.profile.json.html)
8. **APPLIED:** Fix Missing Data Example [FHIR-42805](https://jira.hl7.org/browse/FHIR-42805) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/general-requirements.html#missing-data)
9. **APPLIED:**  Update introduction to USCDI table[FHIR-42801](https://jira.hl7.org/browse/FHIR-42801) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/uscdi.html)
10. **APPLIED:** Fix us-core-5 invariant [FHIR-42814](https://jira.hl7.org/browse/FHIR-42814) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-immunization.html#constraints)
1.  **APPLIED:**  Update guidance on referencing PractitionerRole [FHIR-42906](https://jira.hl7.org/browse/FHIR-42906) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/CapabilityStatement-us-core-server.html#practitionerrole) and [Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-practitionerrole.html#mandatory-and-must-support-data-elements)
2.  **APPLIED:** Add Project US@ Requirements [FHIR-43025](https://jira.hl7.org/browse/FHIR-43025) See Changes:
    -  [US Core Patient](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-patient.html#mandatory-and-must-support-data-elements)
    -  [Patient Example](https://hl7.org/fhir/us/core/2024Jan/Patient-example.html)
    -  [US Core RelatedPerson](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-relatedperson.html#mandatory-and-must-support-data-elements)
    -  [US Core Organization](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-organization.html#mandatory-and-must-support-data-elements)
    -  [US Core Practitioner](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-practitioner.html#mandatory-and-must-support-data-elements)
    -  [US Core Location](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-location.html#mandatory-and-must-support-data-elements)
3.  **APPLIED:**  Fix Typo: Change ServiceRequest.reasonReference to Observation.derivedFrom [FHIR-43045](https://jira.hl7.org/browse/FHIR-43045) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-simple-observation.html#mandatory-and-must-support-data-elements)
4.  **APPLIED:**  Add link in history page to approved patches [FHIR-42950](https://jira.hl7.org/browse/FHIR-42950) [See Changes Here](https://hl7.org/fhir/us/core/history.html)
5.  **APPLIED:** Medication Adherence Scope Clarification [FHIR-42845](https://jira.hl7.org/browse/FHIR-42845) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-medicationrequest.html#mandatory-and-must-support-data-elements) and [Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-medication-adherence.html)
6.  **APPLIED:** Update profile + interaction requirements [FHIR-42789](https://jira.hl7.org/browse/FHIR-42789) and [FHIR-42847](https://jira.hl7.org/browse/FHIR-42847) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/general-requirements.html#conforming-to-us-core)
7.  **APPLIED:** Provide guidance on NAHDO SOP codes for Medicare Part A,B,C,and D [FHIR-42793](https://jira.hl7.org/browse/FHIR-42793) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-coverage.html#mandatory-and-must-support-data-elements)
8.  **APPLIED:** Correct description of Occupation Profile [FHIR-42867](https://jira.hl7.org/browse/FHIR-42867) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-observation-occupation.html)
9.  **APPLIED:** Move the SMART scopes guidance from Future of US Core to a Conformance Page [FHIR-42864](https://jira.hl7.org/browse/FHIR-42864) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/scopes.html) and [Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-allergyintolerance.html#mandatory-search-parameters) 
10. **APPLIED:** Add Argonaut Write Guidance for Vital Sign Observations to Record or Update Data section on the Future of US Core Page [FHIR-42863](https://jira.hl7.org/browse/FHIR-42863) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/future-of-US-core.html#record-or-update-data) and [Here](https://hl7.org/fhir/us/core/2024Jan/fhir-write.html)
11. **APPLIED:** Migrate US Core Terminology to VSAC [FHIR-42846](https://jira.hl7.org/browse/FHIR-42846) See this version's introduction
12. **APPLIED:**  Clarify note in Search Parameters and Operations page [FHIR-42783](https://jira.hl7.org/browse/FHIR-42783) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/search-parameters-and-operations.html)
13. **APPLIED:**  Fix errors in USCDI mapping table [FHIR-42862](https://jira.hl7.org/browse/FHIR-42862) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/uscdi.html)
14. **APPLIED:** Clarify Coverage status [FHIR-42777](https://jira.hl7.org/browse/FHIR-42777) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-coverage.html#mandatory-and-must-support-data-elements)
15. **APPLIED:**  Permit Subject element to references to other entities besides Patient [FHIR-42759](https://jira.hl7.org/browse/FHIR-42759) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-observation-clinical-result.html#profile)
16. **APPLIED:** Correct Regex for us-core-1 XPath invariant [FHIR-42738](https://jira.hl7.org/browse/FHIR-42738) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-observation-clinical-result.html#constraints))
17. **APPLIED:**  Add USCDI Version 4 Data Elements to US Core [FHIR-42161](https://jira.hl7.org/browse/FHIR-42161) See the Introduction to this version above and Changes [Here](https://hl7.org/fhir/us/core/2024Jan/uscdi.html)
18. **APPLIED:**  Remove guidance to identify version of SNOMED in an instance [FHIR-42160](https://jira.hl7.org/browse/FHIR-42160) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/general-guidance.html#snomed-ct-united-states-edition)
19. **APPLIED:** Add Procedure.reasonCode and Procedure.reasonReference as Reason for Referral [FHIR-42136](https://jira.hl7.org/browse/FHIR-42136) and [FHIR-41761](https://jira.hl7.org/browse/FHIR-41761) See Changes:
   -  [US Core Procedure](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-procedure.html)
   -  [US Core ServiceRequest](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-servicerequest.html)
   -  [Procedre Example](https://hl7.org/fhir/us/core/2024Jan/Procedure-defib-implant.html)
   -  [USCDI](https://hl7.org/fhir/us/core/2024Jan/uscdi.html)
20. **APPLIED:**  USCDI - FHIR US Core Relationship Clarification [FHIR-42130](https://jira.hl7.org/browse/FHIR-42130) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/uscdi.html)
21. **APPLIED:** Typo [FHIR-42069](https://jira.hl7.org/browse/FHIR-42069) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-blood-pressure.html#mandatory-and-must-support-data-elements)
22. **APPLIED:**  Clarify when to include multiple attachments as part of a clinical note [FHIR-41902](https://jira.hl7.org/browse/FHIR-41902) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-documentreference.html)
23. **APPLIED:**  Limit context for jurisdiction extension [FHIR-41867](https://jira.hl7.org/browse/FHIR-41867) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-jurisdiction.html)
24. **APPLIED:**  Add VSAC Value Sets to Terminology Page [FHIR-41681](https://jira.hl7.org/browse/FHIR-41681) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/terminology.html)
25. **APPLIED:**  APGAR should be Apgar [FHIR-41666](https://jira.hl7.org/browse/FHIR-41666) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/screening-and-assessments.html#structured-screening-and-assessments)
26. **APPLIED:** Correct invalid invariants pd-1 and us-core-13 [FHIR-41586](https://jira.hl7.org/browse/FHIR-41586) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-practitionerrole.html#constraints)
27. **APPLIED:** Clarify Additional USCDI Requirements [FHIR-41572](https://jira.hl7.org/browse/FHIR-41572) See Changes:
   - [US Core Patient Profile](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-patient.html#profile)
   - [US Core Conformance Artifacts](https://hl7.org/fhir/us/core/2024Jan/general-requirements.html#us-core-conformance-artifacts)
   - [Additional USCDI Requirements](https://hl7.org/fhir/us/core/2024Jan/must-support.html#additional-uscdi-requirements)
   - [USCDI](https://hl7.org/fhir/us/core/2024Jan/uscdi.html)
   - [Summary of Additional USCDI Requirement References](https://hl7.org/fhir/us/core/2024Jan/CapabilityStatement-us-core-server.html#summary-of-additional-uscdi-requirement-references)
28. **APPLIED:**  Change ASKU in value set to asked-declined [FHIR-41571](https://jira.hl7.org/browse/FHIR-41571) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-observation-sexual-orientation.html#terminology-bindings-differential) and [Here](https://hl7.org/fhir/us/core/2024Jan/Observation-sexual-orientation-example.html)
29. **APPLIED:**  update canonical urls in examples and capability statements to include the version [FHIR-41256](https://jira.hl7.org/browse/FHIR-41256) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/AllergyIntolerance-example.html) and [Here](https://hl7.org/fhir/us/core/2024Jan/CapabilityStatement-us-core-server.json.html)
30. **APPLIED:**  Add Preferred Language guidance [FHIR-40773](https://jira.hl7.org/browse/FHIR-40773) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/StructureDefinition-us-core-patient.html#mandatory-and-must-support-data-elements)
31. **APPLIED:**  Update UCUM guidance [FHIR-40604](https://jira.hl7.org/browse/FHIR-40604) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/general-guidance.html#using-ucum-codes-in-the-quantity-datatype)
32. **APPLIED:**  Added interpretation to laboratory result examples [FHIR-40297](https://jira.hl7.org/browse/FHIR-40297) [See Changes Here](https://hl7.org/fhir/us/core/2024Jan/Observation-cbc-mchc.html)


The following trackers have been identified as publishing issues and we will work with HL7 publishing to resolve them.

1. **APPLIED** Excel downloads missing header row [FHIR-41709](https://jira.hl7.org/browse/FHIR-41709)
2. **PUBLISHING** Condition profile descriptions are not appearing in IG Detailed Description Snapshot View (other places) [FHIR-40813](https://jira.hl7.org/browse/FHIR-40813)
3. **PUBLISHING** RelatedPerson relationshiptype should have binding to FHIR value set RelatedPerson-relationshiptype [FHIR-34755](https://jira.hl7.org/browse/FHIR-34755)
4. **PUBLISHING:** AllergyIntolerance does not show constraint [FHIR-34636](https://jira.hl7.org/browse/FHIR-34636)
5. **PUBLISHING** Confusing for commercial vendor.  Reads very confusing. [FHIR-30783](https://jira.hl7.org/browse/FHIR-30783)
6. **PUBLISHING** In most of the data elements – “Binding is from base FHIR and US Core Vital Signs”  Need this to be one single combined listing [FHIR-30780](https://jira.hl7.org/browse/FHIR-30780)
7. **PUBLISHING** valueset-simple-language.xml QA Error [FHIR-30107](https://jira.hl7.org/browse/FHIR-30107)
8. **APPLIED** Patient Examples QA Errors: CDCREC code system in VSAC [FHIR-30105](https://jira.hl7.org/browse/FHIR-30105)

### Version = 6.1.0 (Meets USCDI v3 Requirements)
- url: <https://hl7.org/fhir/us/core/STU6.1/>
- Based on FHIR version : 4.0.1

The changes in this STU Update to US Core 6.0.0 have been reviewed by the public through the HL7 STU update process. The resolution of the community comments has been agreed to and voted on by the members of the HL7 International Cross-Group Projects work group.
#### What's new in Version 6.1.0 of US Core:

To meet the [U.S. Core Data for Interoperability (USCDI) v3] &quot;sex&quot; data element, US Core added the [US Core Sex Extension] as a [USCDI Requirement](https://hl7.org/fhir/us/core/STU6/must-support.html#uscdi-requirements)(). The [US Core Birth Sex Extension] is no longer a *USCDI Requirement*.

#### Updates and Corrected Errata in Version 6.1.0 of US Core:

**Tracker Status**: **Summary** **Jira Issue** **Link to Updated Content**

1. **Applied**: Add Sex extension necessary to satisfy USCDI v3 [FHIR-41301](https://jira.hl7.org/browse/FHIR-41301) and [FHIR-41352](https://jira.hl7.org/browse/FHIR-41352) See Changes [Here](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-sex.html), [Here](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-patient.html), and [Here](https://hl7.org/fhir/us/core/STU6.1/uscdi.html)
2. **Applied**: Update link to CDC Race and Ethnicity Code Set [FHIR-41277](https://jira.hl7.org/browse/FHIR-41277) See Changes [Here](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-race.html)
3.  **Applied**: Typo change `Condition.onsetDate` to `Condition.onsetDateTime`  [FHIR-41239](https://jira.hl7.org/browse/FHIR-41239) See Changes [Here](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-condition-encounter-diagnosis.html)
4.  **Applied**: Clarify US Core USCDI Requirement Extension not intended for implementers [FHIR-41238](https://jira.hl7.org/browse/FHIR-41238) See Changes [Here](https://hl7.org/fhir/us/core/STU6.1/profiles-and-extensions.html)
5.  **Applied**: Correct Provenance Example [FHIR-41316](https://jira.hl7.org/browse/FHIR-41316) See Changes [Here](https://hl7.org/fhir/us/core/STU6.1/Provenance-example-targeted-provenance.json.html)
6.  **Applied**: Update Changes between versions table [FHIR-41434](https://jira.hl7.org/browse/FHIR-41434) See Changes [Here](https://hl7.org/fhir/us/core/STU6.1/changes-between-versions.html#cross-version-comparisons)
7.  **Applied**: update us-core-3 and us-core-4 [FHIR-41454](https://jira.hl7.org/browse/FHIR-41454) See Changes [Here](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-observation-clinical-result.html)

### Version = 6.0.0
- url: <https://hl7.org/fhir/us/core/STU6/>
- Based on FHIR version : 4.0.1

The changes in this annual update to US Core have been reviewed and commented upon by the public through the January 2023 HL7 balloting process. The resolution of the community comments has been agreed to and voted on by the members of the HL7 International Cross-Group Projects work group.
#### What's new in Version 6.0.0 of US Core:

 
Each update to a new version of US Core changes the US Core Profiles and conformance expectations. Implementers can find detailed comparisons between the FHIR artifacts in this 6.0.0 version of US Core and each previous major release on [Changes Between Versions] page. This section provides an overview of the significant changes in Version 6.0.0 of US Core.

- New and updated resources to meet the [U.S. Core Data for Interoperability (USCDI) v3] new Data Elements and Classes that the Office of the National Coordinator (ONC) published in July of 2022. [This table](https://hl7.org/fhir/us/core/STU6/uscdi.html) summarizes the USCDI Data Classes and Data Elements and the corresponding US Core Profile(s).
  - The *new* [US Core Coverage Profile] represent and access data related to an individual's health insurance coverage for health care.
  - The profiles from version 5.0.1 have been renamed and re-scoped in this version to accommodate the USCDI Health Status/Assessments Data Classes.  
    -  The [US Core Observation Screening Assessment Profile] replaces the *US Core Observation Survey Profile* and *US Core Observation SDOH Assessment Profile*, and the [US Core Simple Observation Profile] replaces the *US Core Observation Social History Profile*.  See the Cross Version Comparisons Table on the [Changes Between Versions] page for a summary of profile revisions between versions.
    - The SDOH Assessments documentation has been rewritten and renamed to [Screening and Assessments], reflecting its expanded coverage of Health Status/Assessments Data Elements including: *Functional Status*, *Disability Status*, and *Mental/Cognitive Status* in addition to *SDOH Assessments*.
  - The *new* [US Core Observation Pregnancy Status Profile] and [US Core Observation Pregnancy Intent Profile] have been added to communicate pregnancy status.
  - The [US Core Laboratory Result Observation Profile] supports the result status and terminology requirements for coded and numeric results.
  - The *new* [US Core Specimen Profile] has been added to support Specimen Type.  
  - The [US Core MedicationRequest Profile] was updated to support Dose, Dose Unit of Measure, Indication,.
  - The *new* [US Core MedicationDispense Profile] has been added to support Fill Status.
  - Updated Patient Demographics/Information:
      - To support Date of Death [US Core Patient Profile] was updated
      - The *new* [US Core Tribal Affiliation Extension] has been added to support Tribal Affiliation
      - The [US Core Birth Sex Extension] meets the patient sex requirement (*NOTE: US Core 6.1.0 added the [US Core Sex Extension] as a [USCDI Requirement](https://hl7.org/fhir/us/core/STU6/must-support.html#uscdi-requirements). The US Core Birth Sex Extension is no longer a USCDI Requirement*.)
      - To support Related Person's Name and Related Person's Relationship [US Core RelatedPerson Profile] was updated
      - The *new* [US Core Observation Occupation Profile] supports a patient's Occupation and Occupation Industry
  - Reason for Referral is supported by an updated [US Core ServiceRequest Profile] and [US Core Procedure Profile]

- The [US Core Observation Clinical Result Profile] supersedes version 5.0.1  *US Core Observation Clinical Test Result Profile* and *US Core Observation Imaging Result Profile*. In addition, it is the base for the [US Core Laboratory Result Observation Profile]. The Cross Version Comparisons Table on the [Changes Between Versions] page summarized these significant revisions.

- Document the [USCDI Requirement](https://hl7.org/fhir/us/core/STU6/must-support.html#uscdi-requirements) conformance category: Besides Mandatory and Must Support elements, the US Core Profile elements consist of USCDI Requirements elements for ONC Health IT Certification. This version [clarifies the meaning](https://hl7.org/fhir/us/core/STU6/general-requirements.html#us-core-conformance-artifacts) and [documents](https://hl7.org/fhir/us/core/STU6/must-support.html#uscdi-requirements) how it is communicated in the StructureDefinitions and on the profile pages

- Expanded CapabilityStatement Narrative: Each  US Core Profile contains references to other resources that it depends on or is related to. The CapabilityStatements narrative provides a table summarizing the [Must Support references for US Core Profiles](https://hl7.org/fhir/us/core/STU6/CapabilityStatement-us-core-server.html#summary-of-must-support-references-between-profiles) to help implementers understand their required capabilities.

- Expanded documentation on the Terminology page: In addition to detailing the Code Systems unique to this guide, links [all the Code Systems](https://hl7.org/fhir/us/core/STU6/terminology.html#code-systems) used in US Core are listed.

- Introduce [US Core SMART Scopes] as a candidate requirements under consideration, and provide example for each Profile.

- We continue our efforts to link terminology directly to the FHIR® Terminology Service for VSAC Resources ([Value Set Authority Center (VSAC)] where applicable and, as a result, align terminology between US Core and [HL7 C-CDA].

#### Changes:

These changes are a result of over 150 January 2023 Ballot related trackers which are listed below:

 **Tracker Status**: **Summary** **Jira Issue** **Link to Updated Content**

1. **Applied:** Remove html entities from examples [FHIR-37474](https://jira.hl7.org/browse/FHIR-37474) 
2. **Applied:** Change Condition patient + category search to SHALL support [FHIR-37918](https://jira.hl7.org/browse/FHIR-37918) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-condition-encounter-diagnosis.html#mandatory-search-parameters)
3. **Applied:** Diagnostic Report Laboratory Codes LOINC CLASSTYPE value should be "1" [FHIR-37933](https://jira.hl7.org/browse/FHIR-37933) [See Changes Here](https://hl7.org/fhir/us/core/STU6/ValueSet-us-core-laboratory-test-codes.html)
4.  **Applied:** Additional guidance for accessing imaging studies [FHIR-38808](https://jira.hl7.org/browse/FHIR-38808) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-diagnosticreport-note.html#mandatory-and-must-support-data-elements)
5.  **Applied:** Allow multiple NPIs for Organizations and Practitioners [FHIR-39382](https://jira.hl7.org/browse/FHIR-39382) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-practitioner.html#profile)
6.  **Applied:** Keep QuestionnaireResponse and Update Screening and Assessments page [FHIR-39495](https://jira.hl7.org/browse/FHIR-39495) See Changes: 
   - [Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html)
   - [Here](https://hl7.org/fhir/us/core/STU6/Questionnaire-phq-9-example.html)
   - [Here](https://hl7.org/fhir/us/core/STU6/Questionnaire-prapare-example.html)
   - [Here](https://hl7.org/fhir/us/core/STU6/Questionnaire-hunger-vital-sign-example.html)
   - [Here](https://hl7.org/fhir/us/core/STU6/QuestionnaireResponse-phq-9-example.html)
   - [Here](https://hl7.org/fhir/us/core/STU6/CapabilityStatement-us-core-server.html#questionnaire)
   - [Here](https://hl7.org/fhir/us/core/STU6/CapabilityStatement-us-core-server.html#questionnaireresponse)
7.  **Applied:** Fix slicing in Observation.component:industry[FHIR-39608](https://jira.hl7.org/browse/FHIR-39608) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-occupation.html#profile)
8.  **Applied:** Add support for Condition search that include patient + category + status [FHIR-39610](https://jira.hl7.org/browse/FHIR-39610) [See Changes Here](https://hl7.org/fhir/us/core/STU6/CapabilityStatement-us-core-server.html#condition)
9.  **Applied:** Reference only reason for using MedicationDispense [FHIR-39611](https://jira.hl7.org/browse/FHIR-39611) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-medicationdispense.html)
10. **Applied:** Revert to simplegenderIdentify extension [FHIR-39615](https://jira.hl7.org/browse/FHIR-39615) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-genderIdentity.html)
11. **Applied:** Duplicated words [FHIR-39637](https://jira.hl7.org/browse/FHIR-39637) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-condition-problems-health-concerns.html#optional-search-parameters)
12. **Applied:** Missing comma [FHIR-39638](https://jira.hl7.org/browse/FHIR-39638) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-patient.html#mandatory-and-must-support-data-elements)
13. **Applied:** Clarify that Observation.specimen is a MustSupport [FHIR-39639](https://jira.hl7.org/browse/FHIR-39639) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-lab.html#mandatory-and-must-support-data-elements)
14. **Applied:** Clarify and  updates examples to use SNOMED CT US Edition [FHIR-39640](https://jira.hl7.org/browse/FHIR-39640) [See Changes Here](https://hl7.org/fhir/us/core/STU6/general-guidance.html#snomed-ct-united-states-edition) and [Here](https://hl7.org/fhir/us/core/STU6/AllergyIntolerance-example.html)
15. **Applied:** Add NDC codes to the Medication Guidance [FHIR-39641](https://jira.hl7.org/browse/FHIR-39641) [See Changes Here](https://hl7.org/fhir/us/core/STU6/medication-list.html#options-for-representing-medication)
16. **Applied:** Extra trailing parenthesis [FHIR-39643](https://jira.hl7.org/browse/FHIR-39643) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html)
17. **Applied:** Clinical Judgement Profile does not exist [FHIR-39650](https://jira.hl7.org/browse/FHIR-39650) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html)
18. **Applied:** Clarify the difference between Simple Observation and Screening Assessment [FHIR-39652](https://jira.hl7.org/browse/FHIR-39652) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-clinical-result.html#profile) and [Here](https://hl7.org/fhir/us/core/STU6/ValueSet-us-core-clinical-result-observation-category.html)
19. **Applied:** uscore or us-core [FHIR-39653](https://jira.hl7.org/browse/FHIR-39653)
20. **Applied:** Fix $docref examples [FHIR-39658](https://jira.hl7.org/browse/FHIR-39658) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-documentreference.html#mandatory-operation)
21. **Applied:** Resolve conflicting guidance in Observation Blood Pressure  [FHIR-39659](https://jira.hl7.org/browse/FHIR-39659) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-blood-pressure.html#mandatory-and-must-support-data-elements)
22. **Applied:** Clarify how profiles are defined [FHIR-39703](https://jira.hl7.org/browse/FHIR-39703) [See Changes Here](https://hl7.org/fhir/us/core/STU6/general-requirements.html#us-core-conformance-artifacts) and  [Here](https://hl7.org/fhir/us/core/STU6/index.html#introduction) and [Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-allergyintolerance.html)
23. **Applied:** Clarify where the US Core Profile FHIR Restful transactions are defined? [FHIR-39704](https://jira.hl7.org/browse/FHIR-39704) [See Changes Here](https://hl7.org/fhir/us/core/STU6/general-requirements.html#profile-support--interaction-support)
24. **Applied:** Use ValueSet and not value set when a FHIR ValueSet is intended [FHIR-39705](https://jira.hl7.org/browse/FHIR-39705) [See Changes Here](https://hl7.org/fhir/us/core/STU6/general-requirements.html)
25. **Applied:** Use uppercase "Must Support" and not lowercase "must suppor"t [FHIR-39706](https://jira.hl7.org/browse/FHIR-39706)
26. **Applied:** Document Must Support and Modifier Elements [FHIR-39707](https://jira.hl7.org/browse/FHIR-39707) [See Changes Here](https://hl7.org/fhir/us/core/STU6/general-requirements.html#modifier-elements)
27. **Applied:** Common format for Resources and Resource fields [FHIR-39708](https://jira.hl7.org/browse/FHIR-39708)
28. **Applied:** Use of mandatory text [FHIR-39709](https://jira.hl7.org/browse/FHIR-39709)
29. **Applied:** Add reference to FHIR section on language support [FHIR-39710](https://jira.hl7.org/browse/FHIR-39710) [See Changes Here](https://hl7.org/fhir/us/core/STU6/general-guidance.html#language-support)
30. **Applied:** Refer to FHIR specification as base definition for RESTful operations [FHIR-39711](https://jira.hl7.org/browse/FHIR-39711) [See Changes Here](https://hl7.org/fhir/us/core/STU6/general-guidance.html#read-fetch-syntax)
31. **Applied:** POST based searches [FHIR-39712](https://jira.hl7.org/browse/FHIR-39712) [See Changes Here](https://hl7.org/fhir/us/core/STU6/general-requirements.html#fhir-restful-search-api-requirements)
32. **Applied:** Clarify compartment based search [FHIR-39713](https://jira.hl7.org/browse/FHIR-39713) [See Changes Here](https://hl7.org/fhir/us/core/STU6/general-guidance.html#compartment-based-search)
33. **Applied:** Updated CapabilityStatement to list un-profiled required resources [FHIR-39714](https://jira.hl7.org/browse/FHIR-39714) [See Changes Here](https://hl7.org/fhir/us/core/STU6/CapabilityStatement-us-core-server.html#summary-of-must-support-references-between-profiles)
34. **Applied:** Change "Systems" to "Servers" [FHIR-39716](https://jira.hl7.org/browse/FHIR-39716) [See Changes Here](https://hl7.org/fhir/us/core/STU6/clinical-notes.html)
35. **Applied:** Update "Clinical Note Server" to "FHIR Server" [FHIR-39717](https://jira.hl7.org/browse/FHIR-39717) [See Changes Here](https://hl7.org/fhir/us/core/STU6/clinical-notes.html) and [Here](https://hl7.org/fhir/us/core/STU6/general-requirements.html)
36. **Applied:** DocumentReference, DiagnosticReport and embedded documents [FHIR-39718](https://jira.hl7.org/browse/FHIR-39718) [See Changes Here](https://hl7.org/fhir/us/core/STU6/clinical-notes.html)
37. **Applied:** Correction and clarify use of $expand [FHIR-39719](https://jira.hl7.org/browse/FHIR-39719) [See Changes Here](https://hl7.org/fhir/us/core/STU6/clinical-notes.html#using-expand) and [Here](https://hl7.org/fhir/us/core/STU6/CapabilityStatement-us-core-server.html#valueset)
38. **Applied:** Clarify MedicationAdministration and MedicationStatement support. [FHIR-39720](https://jira.hl7.org/browse/FHIR-39720) [See Changes Here](https://hl7.org/fhir/us/core/STU6/medication-list.html#pharmacy-fhir-resources)
39. **Applied:** The use of Observations where QuestionnaireReponse is more applicable [FHIR-39722](https://jira.hl7.org/browse/FHIR-39722) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html)
40. **Applied:** Updated CapabilityStatement to list required referenced profiles and resources [FHIR-39723](https://jira.hl7.org/browse/FHIR-39723) [See Changes Here](https://hl7.org/fhir/us/core/STU6/CapabilityStatement-us-core-server.html#summary-of-must-support-references-between-profiles)
41. **Applied:** External link is missing [FHIR-39725](https://jira.hl7.org/browse/FHIR-39725) [See Changes Here](https://hl7.org/fhir/us/core/STU6/general-guidance.html#search-syntax)
42. **Applied:** Change whenHandedOver from min =1 to min =0 [FHIR-39732](https://jira.hl7.org/browse/FHIR-39732) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-medicationdispense.html)
43. **Applied:** Wrong resource referenced [FHIR-39733](https://jira.hl7.org/browse/FHIR-39733) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-coverage.html)
44. **Applied:** plural/singular mismatch [FHIR-39734](https://jira.hl7.org/browse/FHIR-39734) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-coverage.html)
45. **Applied:** Screening and Assessment typo [FHIR-39735](https://jira.hl7.org/browse/FHIR-39735) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html)
46. **Applied:** Missing Hyperlinks [FHIR-39736](https://jira.hl7.org/browse/FHIR-39736) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-pregnancystatus.html)
47. **Applied:** Clarify period of pregnancy intent [FHIR-39737](https://jira.hl7.org/browse/FHIR-39737) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-pregnancyintent.html)
48. **Applied:** Missing Hyperlinks [FHIR-39738](https://jira.hl7.org/browse/FHIR-39738) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-pregnancyintent.html) and [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-pregnancystatus.html)
49. **Applied:** Add a "memberId" slice to Coverage.identifier and add guidance[FHIR-39743](https://jira.hl7.org/browse/FHIR-39743) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-coverage.html)
50. **Applied:** Change RelatedPerson search to combination of Patient + Name [FHIR-39791](https://jira.hl7.org/browse/FHIR-39791) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-relatedperson.html#optional-search-parameters)
51. **Applied:** RelatedPerson uses text from Observation Laboratory profile [FHIR-39792](https://jira.hl7.org/browse/FHIR-39792) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-relatedperson.html)
52. **Applied:** Reference only reason for using MedicationDispense [FHIR-39856](https://jira.hl7.org/browse/FHIR-39856) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-medicationdispense.html)
53. **Applied:** Adjust USCDI Mapping references to MedicationRequest Profile [FHIR-39857](https://jira.hl7.org/browse/FHIR-39857) [See Changes Here](https://hl7.org/fhir/us/core/STU6/uscdi.html)
54. **Applied:** Adjust USCDI Mapping references to DiagnosticReport Profile [FHIR-39858](https://jira.hl7.org/browse/FHIR-39858) [See Changes Here](https://hl7.org/fhir/us/core/STU6/uscdi.html)
55. **Applied:** Add USCDI Mapping references for Disability Status and Mental/Cognitive Status [FHIR-39859](https://jira.hl7.org/browse/FHIR-39859) [See Changes Here](https://hl7.org/fhir/us/core/STU6/uscdi.html)
56. **Applied:** Adjust USCDI Mapping references to Patient Profile [FHIR-39860](https://jira.hl7.org/browse/FHIR-39860) [See Changes Here](https://hl7.org/fhir/us/core/STU6/uscdi.html)
57. **Applied:** Fix Value set expansion [FHIR-39861](https://jira.hl7.org/browse/FHIR-39861) [See Changes Here](https://hl7.org/fhir/us/core/STU6/ValueSet-us-core-pregnancy-status.html)
58. **Applied:** Extensions - context of use [FHIR-39863](https://jira.hl7.org/browse/FHIR-39863) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-race.html)
59. **Applied:** Add more Lab Result examples [FHIR-39868](https://jira.hl7.org/browse/FHIR-39868) [See Changes Here](https://hl7.org/fhir/us/core/STU6/Observation-at-home-in-vitro-test.html)
60. **Applied:** MedicationRequest - Change prescriber to 0..1 this information is not known for patient reported medications. [FHIR-39869](https://jira.hl7.org/browse/FHIR-39869) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-medicationrequest.html)
61. **Applied:** Update Profile Formal Views labels [FHIR-39873](https://jira.hl7.org/browse/FHIR-39873)
62. **Applied:** Provide guidance for Prescriptions Sent by Mail [FHIR-39878](https://jira.hl7.org/browse/FHIR-39878) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-medicationdispense.html)
63. **Applied:** Change CarePlan.text from Mandatory min = 1 to Must Support min = 0 [FHIR-39902](https://jira.hl7.org/browse/FHIR-39902) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-careplan.html)
64. **Applied:** Using SNOMED CT United States Edition Typo [FHIR-39903](https://jira.hl7.org/browse/FHIR-39903) [See Changes Here](https://hl7.org/fhir/us/core/STU6/general-guidance.html#snomed-ct-united-states-edition)
65. **Applied:** Update the Change log [FHIR-39923](https://jira.hl7.org/browse/FHIR-39923) [See Changes Here](https://hl7.org/fhir/us/core/STU6/changes.html#whats-new-in-version-600-of-us-core)
66. **Applied:** Define the term Screening and Assessment [FHIR-39938](https://jira.hl7.org/browse/FHIR-39938) See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html#introduction)
67. **Applied:** Clarify that Simple Observation Profile captures any sort of “simple” observations [FHIR-39940](https://jira.hl7.org/browse/FHIR-39940) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-simple-observation.html)
68. **Applied:** Correct the description of the Simple Observation Profile [FHIR-39942](https://jira.hl7.org/browse/FHIR-39942) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html#clinical-judgments)
69. **Applied:** Provide further guidance on use of US Core vs other domain specific IGs [FHIR-39943](https://jira.hl7.org/browse/FHIR-39943) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html#introduction)
70. **Applied:** Reframe Screening and Assessments Page [FHIR-39944](https://jira.hl7.org/browse/FHIR-39944) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html#introduction)
71. **Applied:** Update the Screening and Assessment Activities diagram [FHIR-39945](https://jira.hl7.org/browse/FHIR-39945) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html#related-activities-in-clinical-care)
72. **Applied:** Update the “Screening and Assessment Activities” diagram with proper profile name [FHIR-39946](https://jira.hl7.org/browse/FHIR-39946) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html)
73. **Applied:** Update Screening and Assessments” title and content [FHIR-39947](https://jira.hl7.org/browse/FHIR-39947) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html#screening-and-assessments)
74. **Applied:** Correct title[FHIR-39948](https://jira.hl7.org/browse/FHIR-39948) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html)
75. **Aoplied:** Update description of Screening Assessments Profile [FHIR-39949](https://jira.hl7.org/browse/FHIR-39949) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html)
76. **Applied:** Change Header [FHIR-39950](https://jira.hl7.org/browse/FHIR-39950) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html#us-core-observation-screening-assessment-profile)
77. **Applied:** Correct title of section 3.6.2.2 US Core Observation Simple Observation Profile [FHIR-39951](https://jira.hl7.org/browse/FHIR-39951) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html)
78. **Applied:** Require US Core Server to support the Simple Observation profile for simple assessments [FHIR-39953](https://jira.hl7.org/browse/FHIR-39953) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html#clinical-judgments)
79. **Applied:** Correct the link and sentence for assessment category codes [FHIR-39954](https://jira.hl7.org/browse/FHIR-39954) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html#category-codes)
80. **Applied:** Describe the purpose and intent of “Grouping” and update the diagram [FHIR-39955](https://jira.hl7.org/browse/FHIR-39955) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html#codes-for-problemshealthconcerns-goals-service-requests-and-procedures)
81. **Applied:** Remove US Core Common SDOH Assessments ValueSet [FHIR-39956](https://jira.hl7.org/browse/FHIR-39956)
82. **Applied:** Fix link text [FHIR-39958](https://jira.hl7.org/browse/FHIR-39958) [See Changes Here](https://hl7.org/fhir/us/core/STU6/changes.html)
83. **Applied:** Remove MS from Observation Screening Assessment Observation.performer Practitioner Reference [FHIR-39964](https://jira.hl7.org/browse/FHIR-39964) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-screening-assessment.html#profile)
84. **Applied:** Revert references the US Core QuestionnaireResponse Profile  [FHIR-39965](https://jira.hl7.org/browse/FHIR-39965) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-screening-assessment.html)
85. **Applied:** Correct link issue in “Profile specific implementation guidance section” of the ServiceRequest Profile [FHIR-39966](https://jira.hl7.org/browse/FHIR-39966) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-servicerequest.html)
86. **Applied:** Coverage.type binding clarification [FHIR-39982](https://jira.hl7.org/browse/FHIR-39982) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-coverage.html#mandatory-and-must-support-data-elements)
87. **Applied:** Rename US Core Observation Category Value Set [FHIR-40034](https://jira.hl7.org/browse/FHIR-40034) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-screening-assessment.html)
88. **Applied:** Extra ) in Screening and Assessments [FHIR-40041](https://jira.hl7.org/browse/FHIR-40041) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html)
89. **Applied:** Fix the link. [FHIR-40043](https://jira.hl7.org/browse/FHIR-40043) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html#category-codes)
90. **Applied:** Fix Pregnancy status codes  [FHIR-40045](https://jira.hl7.org/browse/FHIR-40045) [See Changes Here](https://hl7.org/fhir/us/core/STU6/ValueSet-us-core-pregnancy-status.html)
91. **Applied:** RelatedPerson profile text contains Observation content [FHIR-40048](https://jira.hl7.org/browse/FHIR-40048) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-relatedperson.html)
92. **Applied:** 2 typos in history page [FHIR-40069](https://jira.hl7.org/browse/FHIR-40069) [See Changes Here](https://hl7.org/fhir/us/core/history.html)
93. **Applied:** Reword a Quick Start example [FHIR-40072](https://jira.hl7.org/browse/FHIR-40072) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-patient.html#mandatory-search-parameters)
94. **Applied:** Consider alternative answer choices for pregnancy intect codes [FHIR-40084](https://jira.hl7.org/browse/FHIR-40084) [See Changes Here](https://hl7.org/fhir/us/core/STU6/ValueSet-us-core-pregnancy-intent.html)
95.  **Applied:** Improve Screening Assessment Observation.hasMember short description [FHIR-40085](https://jira.hl7.org/browse/FHIR-40085) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-screening-assessment.html)
96.  **Applied** Update the “bindings when slicing by value sets” figure  [FHIR-40086](https://jira.hl7.org/browse/FHIR-40086) [See Changes Here](https://hl7.org/fhir/us/core/STU6/general-requirements.html#required-bindings-when-slicing-by-valuesets)
97.  **Applied:** Update Condition category slices to align with Observation/ServiceRequest[FHIR-40087](https://jira.hl7.org/browse/FHIR-40087) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-condition-problems-health-concerns.html)
98.  **Applied:** Add guidance to the Procedure profile to express sdoh category [FHIR-40088](https://jira.hl7.org/browse/FHIR-40088) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html) and 
99.  **Applied:** Improve language as to the expectations of clinicalStatus when category is problem list [FHIR-40089](https://jira.hl7.org/browse/FHIR-40089) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-condition-problems-health-concerns.html)
100. **Applied:** Align with FHIR DS4P IG [FHIR-40090](https://jira.hl7.org/browse/FHIR-40090) [See Changes Here](https://hl7.org/fhir/us/core/STU6/general-guidance.html#suppressed-data)
101. **Applied:** Remove AHC HRSN screening tool examples [FHIR-40091](https://jira.hl7.org/browse/FHIR-40091)
102. **Applied:** Add guidance show collection method and performer can be captured using Provenance [FHIR-40092](https://jira.hl7.org/browse/FHIR-40092) [See Changes Here](https://hl7.org/fhir/us/core/STU6/basic-provenance.html#element-level-provenance) and [Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-patient.html#mandatory-and-must-support-data-elements)
103. **Applied:** Remove MustSupport from DocumentReference.category requiring clinical-note [FHIR-40102](https://jira.hl7.org/browse/FHIR-40102) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-documentreference.html)
104. **Applied:** Add Goal.startDate as 0..1 MS with choice of supporting this or Goal.target.dueDate [FHIR-40103](https://jira.hl7.org/browse/FHIR-40103) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-goal.html)
105. **Applied:** Clarify that other category codes are permitted and Remove MS from Observation.performer Practitioner Reference [FHIR-40104](https://jira.hl7.org/browse/FHIR-40104) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-simple-observation.html)
106. **Applied:** Add to the code systems chart [FHIR-40124](https://jira.hl7.org/browse/FHIR-40124) [See Changes Here](https://hl7.org/fhir/us/core/STU6/terminology.html#code-system-uris-used-in-us-core)
107. **Applied:** Make Specimen.subject must support [FHIR-40136](https://jira.hl7.org/browse/FHIR-40136) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-specimen.html)
108. **Applied:** Clarify use of unknown for occupation. [FHIR-40137](https://jira.hl7.org/browse/FHIR-40137) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-occupation.html), [Here](https://hl7.org/fhir/us/core/STU6/Observation-observation-occupation-industry-unknown.html) and [Here](https://hl7.org/fhir/us/core/STU6/Observation-observation-occupation-unknown.html)
109. **Applied:** Clarify applicability of DiagnosticReport in USCDI Mapping [FHIR-40138](https://jira.hl7.org/browse/FHIR-40138) [See Changes Here](https://hl7.org/fhir/us/core/STU6/clinical-notes.html)
110. **Applied:** Remove the word "status" from introductory text [FHIR-40149](https://jira.hl7.org/browse/FHIR-40149) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-occupation.html)
111. **Applied:** Incorrect link for "record or update" and additional examples [FHIR-40151](https://jira.hl7.org/browse/FHIR-40151) [See Changes Here](https://hl7.org/fhir/us/core/STU6/future-of-US-core.html#future-candidate-requirements-under-consideration)
112. **Applied:** Incorrect Resource noted in the introductory paragraph [FHIR-40155](https://jira.hl7.org/browse/FHIR-40155) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-coverage.html)
113. **Applied:** Define Job[FHIR-40158](https://jira.hl7.org/browse/FHIR-40158) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-occupation.html)
114. **Applied:** Member or subscriber id is must have but the element cardinality is 0..* [FHIR-40160](https://jira.hl7.org/browse/FHIR-40160) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-coverage.html)
115. **Applied:** Modify comment regarding Screening and Assessments [FHIR-40161](https://jira.hl7.org/browse/FHIR-40161) [See Changes Here](https://hl7.org/fhir/us/core/STU6/screening-and-assessments.html#us-core-observation-screening-assessment-profile)
116. **Applied:** Modify Examples/ValueSet for Language Codes [FHIR-40165](https://jira.hl7.org/browse/FHIR-40165) [See Changes Here](https://hl7.org/fhir/us/core/STU6/ValueSet-simple-language.html)
117. **Applied:** Add Guidance for more advanced Occupation detail.[FHIR-40166](https://jira.hl7.org/browse/FHIR-40166) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-occupation.html#profile)
118. **Applied:** Add implementer guidance [FHIR-40170](https://jira.hl7.org/browse/FHIR-40170) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-occupation.html)
119. **Applied:** Add guidance for current job [FHIR-40172](https://jira.hl7.org/browse/FHIR-40172) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-occupation.html)
120. **Applied:** Add guidance to clarify multiple codings can be used [FHIR-40178](https://jira.hl7.org/browse/FHIR-40178) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-occupation.html)
121. **Applied:** Add _include guidance for Specimen [FHIR-40180](https://jira.hl7.org/browse/FHIR-40180) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-specimen.html#notes)
122. **Applied:** Update Industry NAICS Detail (ODH) to extensible. [FHIR-40181](https://jira.hl7.org/browse/FHIR-40181) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-occupation.html)
123. **Applied:** Remove duplicate of Notes: Quick Start intro bullets [FHIR-40182](https://jira.hl7.org/browse/FHIR-40182) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-occupation.html#profile)
124. **Applied:** Add search guidance [FHIR-40183](https://jira.hl7.org/browse/FHIR-40183) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-occupation.html#mandatory-and-must-support-data-elements)
125. **Applied:** Update profile description to state the profile represents a patient's  'Past or Present Job' [FHIR-40187](https://jira.hl7.org/browse/FHIR-40187) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-occupation.html)
126. **Applied:** Give guidance on SMART v2 scopes [FHIR-40192](https://jira.hl7.org/browse/FHIR-40192) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-condition-encounter-diagnosis.html#notes) and [Here](https://hl7.org/fhir/us/core/STU6/future-of-US-core.html#us-core-smart-scopes)
127. **Applied:** Remove the SFCU extension, and retain the birth-sex extension to meet USCDI Patient Sex. [FHIR-40197](https://jira.hl7.org/browse/FHIR-40197) [See Changes Here](https://hl7.org/fhir/us/core/STU6/uscdi.html)
128. **Applied:** Clarify guidance [FHIR-40199](https://jira.hl7.org/browse/FHIR-40199) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-medicationrequest.html#mandatory-and-must-support-data-elements)
129. **Applied:** Document expectations for Additional USCDI Requirements [FHIR-40200](https://jira.hl7.org/browse/FHIR-40200) [See Changes Here](https://hl7.org/fhir/us/core/STU6/general-requirements.html#us-core-conformance-artifacts) and [Here](https://hl7.org/fhir/us/core/STU6/must-support.html)
130. **Applied:** ServiceRequest Profile Implementation Specific Guidance - incorrect reference to ServiceRequest.reasonCode [FHIR-40202](https://jira.hl7.org/browse/FHIR-40202) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-servicerequest.html)
131. **Applied:** Tribal Affiliation Extension - add guidance to that extension:isEnrolled is an optional extension [FHIR-40203](https://jira.hl7.org/browse/FHIR-40203) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-tribal-affiliation.html)
132. **Applied:** Change Observation Occupation binding strength extensible [FHIR-40204](https://jira.hl7.org/browse/FHIR-40204) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-occupation.html)
133. **Applied:** Change whenHandedOver cardinality 0..1 [FHIR-40205](https://jira.hl7.org/browse/FHIR-40205) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-medicationdispense.html)
134. **Applied:** MedicationRequest.reasonCodeableConcept does not exist [FHIR-40235](https://jira.hl7.org/browse/FHIR-40235) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-medicationrequest.html)
135. **Applied:** Clarify patient previous name and previous address [FHIR-40299](https://jira.hl7.org/browse/FHIR-40299) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-patient.html)
136. **Applied:** Update PractitionerRole.role binding [FHIR-40372](https://jira.hl7.org/browse/FHIR-40372) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-practitionerrole.html)
137. **Applied:** Remove MS from Patient on CareTeam.participant.member [FHIR-40415](https://jira.hl7.org/browse/FHIR-40415) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-careteam.html)
138. **Applied:** Update laboratory results example  [FHIR-40427](https://jira.hl7.org/browse/FHIR-40427) [See Changes Here](https://hl7.org/fhir/us/core/STU6/Observation-serum-glucose.html)
139. **Applied:** Update laboratory results example [FHIR-40428](https://jira.hl7.org/browse/FHIR-40428) [See Changes Here](https://hl7.org/fhir/us/core/STU6/Observation-serum-glucose.html)
140. **Applied:** Add Specimen to BUN example [FHIR-40429](https://jira.hl7.org/browse/FHIR-40429) [See Changes Here](https://hl7.org/fhir/us/core/STU6/Observation-serum-bun.html)
141. **Applied:** Additional guidance for accessing imaging studies [FHIR-40514](https://jira.hl7.org/browse/FHIR-40514) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-diagnosticreport-note.html#mandatory-and-must-support-data-elements)
142. **Applied:** Update example to follow 58410-2 CBC panel [FHIR-40521](https://jira.hl7.org/browse/FHIR-40521) [See Changes Here](https://hl7.org/fhir/us/core/STU6/DiagnosticReport-cbc.html)
143. **Applied:** Flag additional USCDI requirements in a computable way [FHIR-40553](https://jira.hl7.org/browse/FHIR-40553) [See Changes Here](https://hl7.org/fhir/us/core/STU6/must-support.html#uscdi-requirements)
144. **Applied:** Corrected expression in Condition asserted-date search parameter [FHIR-40573](https://jira.hl7.org/browse/FHIR-40573) [See Changes Here](https://hl7.org/fhir/us/core/STU6/SearchParameter-us-core-condition-asserted-date.html)
145. **Applied:** List only base profiles for reasonReference. [FHIR-40656](https://jira.hl7.org/browse/FHIR-40656) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-servicerequest.html#profile) and [Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-medicationrequest.html#profile)
146. **Applied:** Remove US Core QuestionnaireResponse Tag Element [FHIR-40742](https://jira.hl7.org/browse/FHIR-40742) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-questionnaireresponse.html) and [Here](https://hl7.org/fhir/us/core/STU6/Questionnaire-prapare-example.html)
147. **Applied:** Clarify Direct address options [FHIR-40583](https://jira.hl7.org/browse/FHIR-40583) [See Changes Here](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-practitionerrole.html#mandatory-and-must-support-data-elements)


### Version = 6.0.0 - ballot
- url: <https://hl7.org/fhir/us/core/2023Jan/>
- Based on FHIR version : 4.0.1


#### The January 2023 Ballot

This ballot addresses the following:

- We have updated US Core to include the [U.S. Core Data for Interoperability (USCDI) v3] Data Elements and Classes that the Office of the National Coordinator (ONC) published in July of 2022:

  - **Applied**: [Health Insurance Information](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-coverage.html) Using US Core to represent and access data related to an individual's insurance coverage for health care.
  - **Applied**: The SDOH Assessments documentation has been rewritten and renamed to [Screening and Assessments](https://hl7.org/fhir/us/core/2023Jan/screening-and-assessments.html), reflecting its expanded coverage of Health Status/Assessments Data Elements. It documents how to use [US Core Observation Screening Assessment Profile] and the [US Core Simple Observation Profile] to represent and access health status and assessments, including: *Functional Status*, *Disability Status*, and *Mental/Cognitive Status* in addition to *SDOH Assessments*.
  - **Applied**: [US Core Observation Pregnancy Status Profile](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-observation-pregnancystatus.html) and [US Core Observation Pregnancy Intent Profile](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-observation-pregnancyintent.html) have been added to specifically address pregnancy status.
  - **Applied**: **Laboratory:** The [US Core Laboratory Observation Profile](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-observation-lab.html) already supports the result status and terminology requirements for coded and numeric results. The [US Core Specimen Profile](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-specimen.html) has been added to support Specimen Type.  
  - **Applied**: **Medications:** Updates to the [US Core MedicationRequest Profile](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-medicationrequest.html) to support Dose, Dose Unit of Measure, Indication and the [US Core MedicationDispense Profile](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-medicationdispense.html) has been added to support Fill Status.
  - **Applied**: **Patient Demographics/Information**
      - Date of Death [See Change Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-patient.html)
      - Tribal Affiliation [See Change Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-patient.html) 
      - Sex (for clinical use)[See Change Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-sex-for-clinical-use.html) 
        - Note that the [US Core BirthSex Extension](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-birthsex.html) will not be deprecated.
      - Related Person's Name and Related Person's Relationship [See](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-relatedperson.html)
      - Occupation and Occupation Industry [See Change Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-observation-occupation.html)
  - **Applied**: **Procedures:** Reason for Referral [See Change Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-servicerequest.html) and [See Change Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-procedure.html)

- Several profiles from version 5.0.1 have been *retired* or *renamed* and *rescoped* in this version to accommodate the USCDI Health Status/Assessments Data Classes and as a result of implementer feedback. The [Cross Version Comparisions Table](https://hl7.org/fhir/us/core/2023Jan/changes-between-versions.html#cross-version-comparisons) summarized these significant revisions.
- We continue our efforts to link terminology directly to the FHIR® Terminology Service for VSAC Resources ([Value Set Authority Center (VSAC) - NIH](https://vsac.nlm.nih.gov/)) where applicable and, as a result, align terminology between US Core and [HL7 C-CDA].
- Implementers submitted over 70 trackers since the publication of US Core ver 5.0.0 and 5.0.1. We have addressed them and applied over 50 changes listed below:

 **Tracker Status**: **Summary** **Jira Issue** **Link to Updated Content**
1. **Applied:** US Core: Require Provenance Resource for Create/Update/Delete Events, AuditEvent for Read [FHIR-14388](https://jira.hl7.org/browse/FHIR-14388) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/basic-provenance.html) and [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-provenance.html)
2. **Applied:** Add recommended search combination of patient + status [FHIR-19803](https://jira.hl7.org/browse/FHIR-19803) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-implantable-device.html#notes)
3. **Applied:** Consider adding years since quite smoking [FHIR-20131](https://jira.hl7.org/browse/FHIR-20131) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-smokingstatus.html)
4. **Applied:** Create a US Core extension to communicate the state jurisdiction for an element [FHIR-26943](https://jira.hl7.org/browse/FHIR-26943) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-jurisdiction.html)
5.  **Applied:** Update missing data for coded data examples [FHIR-31381](https://jira.hl7.org/browse/FHIR-31381) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/general-requirements.html#missing-data)
6.  **Applied:** Clarify the purpose of Clinical Test Observation Profile [FHIR-35114](https://jira.hl7.org/browse/FHIR-35114) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-observation-clinical-result.html)
7.  **Applied:** Clarify how to read Profile Page [FHIR-36083](https://jira.hl7.org/browse/FHIR-36083) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/index.html#how-to-read-this-guide)
8.  **Applied:** Clarify organization responsible for the DocumentReference [FHIR-36654](https://jira.hl7.org/browse/FHIR-36654) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-documentreference.html#mandatory-and-must-support-data-elements)
9.  **Applied:** Clarify Device UDI-PI requirements [FHIR-36657](https://jira.hl7.org/browse/FHIR-36657) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-implantable-device.html#mandatory-and-must-support-data-elements)
10. **Applied:** Add 'problem-list-item' condition example [FHIR-36759](https://jira.hl7.org/browse/FHIR-36759) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/Condition-condition-duodenal-ulcer.html)
11. **Applied:** Fix LOINC LP code links [FHIR-36763](https://jira.hl7.org/browse/FHIR-36763) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/ValueSet-us-core-diagnosticreport-category.html)
12. **Applied:** Fix Link to "Direct Secure Messaging" [FHIR-36764](https://jira.hl7.org/browse/FHIR-36764) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-direct.html)
13. **Applied:** Update US Core Practitioner to clarify work related contact information [FHIR-36765](https://jira.hl7.org/browse/FHIR-36765) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-practitioner.html)
14. **Applied:** CLD for US Core Non Laboratory Codes value set is not computable [FHIR-36789](https://jira.hl7.org/browse/FHIR-36789) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/ValueSet-us-core-diagnosticreport-report-and-note-codes.html)
15. **Applied:** US Core Organization slice for CLIA does not list an HTA/THO approved external identifier system [FHIR-36926](https://jira.hl7.org/browse/FHIR-36926) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-organization.html)
16. **Applied:** Remove effectiveDateTime invariant from Sexual Orientation and Simple Observation (aka Social History) Profiles [FHIR-36932](https://jira.hl7.org/browse/FHIR-36932) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-observation-sexual-orientation.html) and [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-simple-observation.html)
17. **Applied:** Correct code system URI for HCPCS [FHIR-37336](https://jira.hl7.org/browse/FHIR-37336) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/ValueSet-us-core-procedure-code.html)
18. **Applied** change 'resources' to 'profiles' [FHIR-37343](https://jira.hl7.org/browse/FHIR-37343) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-provenance.html#mandatory-and-must-support-data-elements)
19. **Applied:** Clarify Expectations for Observation.value[x] in blood pressure and pulse oximetry profiles [FHIR-37358](https://jira.hl7.org/browse/FHIR-37358) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-blood-pressure.html#mandatory-and-must-support-data-elements) and [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-pulse-oximetry.html#mandatory-and-must-support-data-elements)
20. **Applied:** Clarify vaccineCode code system URI [FHIR-37400](https://jira.hl7.org/browse/FHIR-37400) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-immunization.html#mandatory-and-must-support-data-elements)
21. **Applied:** Typos on SDOH Guidance Page [FHIR-37469](https://jira.hl7.org/browse/FHIR-37469) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/screening-and-assessments.html)
22. **Applied** Add Constraint to validate NPI [FHIR-37498](https://jira.hl7.org/browse/FHIR-37498) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-practitioner.html) and [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-organization.html)
23. **Applied:** Remove extra instance or the word "resource" in Lab observation narrative profile [FHIR-37507](https://jira.hl7.org/browse/FHIR-37507) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-observation-lab.html)
24. **Applied:** Allow multiple Gender Identities and associated dates. [FHIR-37509](https://jira.hl7.org/browse/FHIR-37509) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-genderIdentity.html)
25. **Applied:** Typos on Patient and Practitioner "Name" SearchParameter pages [FHIR-37541](https://jira.hl7.org/browse/FHIR-37541) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/SearchParameter-us-core-patient-name.html) and [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/SearchParameter-us-core-practitioner-name.html)
26. **Applied:** Add Guidance on DocumentReference.category [FHIR-37592](https://jira.hl7.org/browse/FHIR-37592) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-documentreference.html#mandatory-and-must-support-data-elements)
27. **Applied:** Correct us-core-6 invariant expression [FHIR-37704](https://jira.hl7.org/browse/FHIR-37704) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-patient.html#constraints)
28. **Applied:**  Change Immunization.primarySource to must support and update definition [FHIR-37723](https://jira.hl7.org/browse/FHIR-37723) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-immunization.html)
29. **Applied:** Added supportedProfiles to US Core CapabilityStatements[FHIR-37766](https://jira.hl7.org/browse/FHIR-37766) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/CapabilityStatement-us-core-server.html#encounter)
30. **Applied:** Clarify how to use categories vis a vis codes in US Core Diagnostic Report Category element [FHIR-37770](https://jira.hl7.org/browse/FHIR-37770) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-diagnosticreport-note.html)
31. **Applied:** Clarify that US Core requires any version of SMART? [FHIR-37813](https://jira.hl7.org/browse/FHIR-37813) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/security.html)
32. **Applied:** Typo of "DiagnostisReport" in Clinical Notes Guidance [FHIR-37819](https://jira.hl7.org/browse/FHIR-37819) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/clinical-notes.html)
33. **Applied:** Update $docref type input to multiple Codings [FHIR-37894](https://jira.hl7.org/browse/FHIR-37894) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/OperationDefinition-docref.html) and [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-documentreference.html#mandatory-operation)
34. **Applied:** Add Conformance expectation of SHOULD to resolve for server Capability [FHIR-37901](https://jira.hl7.org/browse/FHIR-37901) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/CapabilityStatement-us-core-server.html)
35. **Applied:** Change Condition patient + category search to SHALL support [FHIR-37918](https://jira.hl7.org/browse/FHIR-37918) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-condition-encounter-diagnosis.html#notes)
36. **Applied:** Typo in Observation SDOH profile [FHIR-37928](https://jira.hl7.org/browse/FHIR-37928) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-observation-screening-assessment.html)
37. **Applied:** Typo in Condition Problems and Health Concerns search example [FHIR-37929](https://jira.hl7.org/browse/FHIR-37929) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-condition-problems-health-concerns.html)
38. **Applied:** Update Laboratory Loinc Valueset description [FHIR-37933](https://jira.hl7.org/browse/FHIR-37933) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/ValueSet-us-core-laboratory-test-codes.html)
39. **Applied:** Clarify that guide uses US Edition of SNOMED and update links to it  [FHIR-38190](https://jira.hl7.org/browse/FHIR-38190) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/general-guidance.html#snomed-ct-united-states-edition)
40. **Applied:** Update QuickStart to include all the search requirements by type. [FHIR-38629](https://jira.hl7.org/browse/FHIR-38629) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-observation-sexual-orientation.html)
41. **Applied:** Specify $docref's operates on DocumentReference endpoint [FHIR-38658](https://jira.hl7.org/browse/FHIR-38658) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/OperationDefinition-docref.html)
42. **Applied:** Remove comment in $docref [FHIR-38686](https://jira.hl7.org/browse/FHIR-38686) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/OperationDefinition-docref.html)
43. **Applied:** Add USCDI V3 Requirements [FHIR-38702](https://jira.hl7.org/browse/FHIR-38702) See Changes Listed in introduction above.
44. **Applied:** Correct documentation on Procedure.performed attribute [FHIR-38737](https://jira.hl7.org/browse/FHIR-38737) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-procedure.html#mandatory-and-must-support-data-elements)
45. **Applied:** Improve docref documentation [FHIR-38746](https://jira.hl7.org/browse/FHIR-38746) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/OperationDefinition-docref.html)
46. **Applied:** Fix title for US Core Pediatric Head Occipital Frontal Circumference Observation Profile [FHIR-38794](https://jira.hl7.org/browse/FHIR-38794) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-head-occipital-frontal-circumference-percentile.html)
47. **Applied:** Add Refill and Quantity to MedRequest [FHIR-39343](https://jira.hl7.org/browse/FHIR-39343) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-medicationrequest.html)
48. **Applied:** Fix Quick Start Rendering [FHIR-39367](https://jira.hl7.org/browse/FHIR-39367) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-patient.html#notes)
49. **Applied:** Remove Bulk Dependency  [FHIR-39377](https://jira.hl7.org/browse/FHIR-39377) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/CapabilityStatement-us-core-server.html#should_igs)
50. **Applied:** Fix Cross Version Comparisons section [FHIR-39417](https://jira.hl7.org/browse/FHIR-39417) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/changes-between-versions.html#cross-version-comparisons)
51. **Applied:** Add Ballot Comment to CarePlan for community feedback [FHIR-32949](https://jira.hl7.org/browse/FHIR-32949) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-careplan.html)
52. **Applied:** Change ServiceRequest.category to min=0 [FHIR-39493](https://jira.hl7.org/browse/FHIR-39493) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-servicerequest.html)
53. **Applied:** Fix provenance-1 [FHIR-39518](https://jira.hl7.org/browse/FHIR-39518) [See Changes Here](https://hl7.org/fhir/us/core/2023Jan/StructureDefinition-us-core-provenance.html)

### Version = 5.0.1 (Meets USCDI v2 Requirements)
- url: <https://hl7.org/fhir/us/core/STU5.0.1/>
- Based on FHIR version : 4.0.1


The changes in this errata to version 5.0.0 of US Core have been reviewed by the public through the HL7 errata process. The resolution of the community comments has been agreed to and voted on by the members of the HL7 International Cross-Group Projects work group.
#### Corrected Errata in Version 5.0.1 of US Core:

**Tracker Status**: **Summary** **Jira Issue** **Link to Updated Content**

1. **Applied**: Typos in Condition Profile URls  [FHIR-37585](https://jira.hl7.org/browse/FHIR-37585) See Changes:
   - [Here](https://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-condition-encounter-diagnosis.html)
   - [Here](https://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-condition-problems-health-concerns.html)
2. **Applied**: Update VSAC dependency package version and remove STU Notes where expansion now supported by publisher  [FHIR-37586](https://jira.hl7.org/browse/FHIR-37586)
3. **Applied**: Correct misapplied tracker - for `agent.who` remove MS from reference Practitioner and add to Organization [FHIR-28517](https://jira.hl7.org/browse/FHIR-28517) [See Change Here](https://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-provenance.html)


### Version = 5.0.0
- url: <https://hl7.org/fhir/us/core/STU5/>
- Based on FHIR version : 4.0.1

The changes in this annual update to US Core have been reviewed and commented upon by the public through the January 2022 HL7 balloting process. The resolution of the community comments has been agreed to and voted on by the members of the HL7 International Cross-Group Projects work group.
#### What's new in Version 5.0.0 of US Core:

- New and updated resources to meet the [U.S. Core Data for Interoperability (USCDI) v2] new Data Elements and Classes that the Office of the National Coordinator (ONC) published in July of 2021:
  -  A Social Determinants Of Health ([SDOH](https://hl7.org/fhir/us/core/STU5/sdoh.html)) guidance page on using US Core to represent and access SDOH Assessments, Goals, Interventions, and Problems/Health Concerns.
  - [US Core Observation Survey Profile](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-survey.html), [US Core Observation SDOH Assessment Profile](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-sdoh-assessment.html), and [US Core QuestionnaireResponse Profile](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-questionnaireresponse.html) to represent SDOH Assessments
  - [US Core ServiceRequest Profile](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-servicerequest.html) to represent SDOH Interventions
  - [US Core Observation Clinical Result Profile](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-clinical-test.html) to represent Clinical Test Results
  - [US Core Observation Clinical Result Profile](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-imaging.html) to represent Imaging Results
  - [US Core Gender Identity Extension](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-genderIdentity.html) for patient demographics
  - [US Core Observation Sexual Orientation Profile](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-sexual-orientation.html) for patient demographics
  - [US Core RelatedPerson Profile](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-relatedperson.html) to represent care member such as a caretaker.
  - Updates to [US Core CareTeam Profile](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-careteam.html)
  - Updates to [US Core Encounter Profile](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-encounter.html)
  - US Core Condition has been split into:
      - [US Core Condition Encounter Diagnosis Profile](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-condition-encounter-diagnosis.html) to represent encounter diagnosis
      - [US Core Condition Problems and Health Concerns Profile](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-condition-problems-health-concerns.html) to represent problems and health concerns included SDOH health concerns.
- New pages and headers:
   - [Change Log](https://hl7.org/fhir/us/core/STU5/changes.html) new header and page. content migrated from the [Directory of published versions] page to create this page
   - [Conformance](https://hl7.org/fhir/us/core/STU5/conformance.html) new Header that contains these pages:
       - [General Requirements] content migrated from version 4.0.0 *General Requirements* and *Conformance Expectation* pages
       - [Must Support] renamed and edited from version 4.0.0 *Conformance Expectation* pages
   - [USCDI](https://hl7.org/fhir/us/core/STU5/uscdi.html) content migrated from version 4.0.0 *General Requirements* Page
   - [Changes Between Versions] rewritten and renamed from version 4.0.0 *DSTU2 to R4 Conversion* page
- Link more terminology directly to the [FHIR Terminology Service for VSAC Resources] and align terminology between US Core and [HL7 C-CDA].

#### Changes:

These changes are a result of over 100 January 2022 Ballot related trackers which are listed below:

**Tracker Status**: **Summary** **Jira Issue** **Link to Updated Content**

1. **Applied**: Remove requirement for component SDOH Assessment's Observations [FHIR-34384](https://jira.hl7.org/browse/FHIR-34384) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-survey.html)
1. **Applied**: Clarify clinicalStatus invariant [FHIR-34468](https://jira.hl7.org/browse/FHIR-34468) [See Change Here](https://hl7.org/fhir/us/core/STU5/general-requirements.html#missing-data)
1. **Applied**: Fix Ethnicity ValueSet description [FHIR-34488](https://jira.hl7.org/browse/FHIR-34488) [See Change Here](https://hl7.org/fhir/us/core/STU5/ValueSet-omb-ethnicity-category.html)
1. **Applied**: Remove MS from ServiceRequest.occurrenceDateTime add MS to ServiceRequest.occurrencePeriod [FHIR-34493](https://jira.hl7.org/browse/FHIR-34493) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-servicerequest.html)
1. **Applied**: Change Goal.description search requirement from SHALL to SHOULD [FHIR-34546](https://jira.hl7.org/browse/FHIR-34546) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-goal.html#notes)
1. **Applied**: Warn client that categorization is fuzzy for SDOH [FHIR-34550](https://jira.hl7.org/browse/FHIR-34550) [See Change Here](https://hl7.org/fhir/us/core/STU5/sdoh.html#category-codes)
1. **Applied**: Split US Core Condition into two profile: Encounter Diagnosis and Problems/Health Concerns [FHIR-34553](https://jira.hl7.org/browse/FHIR-34553) See Change:
    - [Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-condition-problems-health-concerns.html)
    - [Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-condition-encounter-diagnosis.html)
1. **Applied**: Update narrative on abatement date [FHIR-34554](https://jira.hl7.org/browse/FHIR-34554) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-condition-problems-health-concerns.html)
1. **Applied**: Change Clinical Tests Observations category to "clinical-test" and add guidance [FHIR-34555](https://jira.hl7.org/browse/FHIR-34555) See Changes:
   - [Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-clinical-test.html)
   - [Here](https://hl7.org/fhir/us/core/STU5/ValueSet-us-core-observation-category.html)
   - [Here](https://hl7.org/fhir/us/core/STU5/CodeSystem-us-core-observation-category.html)
   - [Here](https://hl7.org/fhir/us/core/STU5/ValueSet-us-core-clinical-test-codes.html)
1. **Applied**: Update all occurrences of U.S. Core Data for Interoperability (USCDI) v1 to v2 or removed specific references to version. [FHIR-34613](https://jira.hl7.org/browse/FHIR-34613) [For Example, See Change Here](https://hl7.org/fhir/us/core/STU5/index.html)
1. **Applied**: Referencing US Core Profiles [FHIR-34623](https://jira.hl7.org/browse/FHIR-34623) [See Change Here](https://hl7.org/fhir/us/core/STU5/general-guidance.html#referencing-us-core-profiles)
1. **Applied**: Correct code system in example snippet[FHIR-34624](https://jira.hl7.org/browse/FHIR-34624) [See Change Here](https://hl7.org/fhir/us/core/STU5/general-requirements.html#missing-data)
1. **Applied**: Add further clarification between slicing a binding (4.1.0) vs using extensible binding (4.0.0) [FHIR-34626](https://jira.hl7.org/browse/FHIR-34626) [See Change Here](https://hl7.org/fhir/us/core/STU5/general-requirements.html#required-bindings-when-slicing-by-valuesets)
1. **Applied**: Fix typo [FHIR-34627](https://jira.hl7.org/browse/FHIR-34627)
1. **Applied**: Clarify reported guidance on how secondary sourced MedicationRequest information can be represented. [FHIR-34628](https://jira.hl7.org/browse/FHIR-34628) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-medicationrequest.html#mandatory-and-must-support-data-elements)
1. **Applied**: Fix contextDirection in Example 1[FHIR-34629](https://jira.hl7.org/browse/FHIR-34629) [See Change Here](https://hl7.org/fhir/us/core/STU5/clinical-notes.html#discovering-note-and-report-types)
1. **Applied**: Fix Medication List Examples [FHIR-34630](https://jira.hl7.org/browse/FHIR-34630) [See Change Here](https://hl7.org/fhir/us/core/STU5/medication-list.html#fetching-all-medications-active-medications-and-all-medications-for-an-encounter)
1. **Applied**: Correct Careteam Narrative errors (remove reference to Organization) [FHIR-34637](https://jira.hl7.org/browse/FHIR-34637) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-careteam.html#mandatory-and-must-support-data-elements)
1. **Applied**: Fix typo [FHIR-34638](https://jira.hl7.org/browse/FHIR-34638)
1. **Applied**: Added missing search query parameter values [FHIR-34642](https://jira.hl7.org/browse/FHIR-34642) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-imaging.html#notes)
1. **Applied**: Inconsistent on conditional required element [FHIR-34643](https://jira.hl7.org/browse/FHIR-34643) See Change:
  - [Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-diagnosticreport-lab.html)
  - [Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-diagnosticreport-note.html)
1. **Applied**: ServiceRequest.category:us-core should be required? [FHIR-34645](https://jira.hl7.org/browse/FHIR-34645) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-servicerequest.html#mandatory-and-must-support-data-elements)
1. **Applied**: Remove Condition.category "us-core-1"  (due to [FHIR-34553](https://jira.hl7.org/browse/FHIR-34553)) and change Immunization.vaccineCode "us-core-1" to "us-core-5", Patient.name.family "us-core-8" to "us-core-6 " to remove duplicate invariant id, is now ['us-core-1', 'us-core-2', 'us-core-3', 'us-core-4', 'us-core-5', 'us-core-6', 'us-core-7', 'us-core-8', 'us-core-9','us-core-10','us-core-13', 'us-core-14',] [FHIR-34646](https://jira.hl7.org/browse/FHIR-34646) See Change:
   - [Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-immunization.html)
   - [Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-patient.html)
1. **Applied**: Clarify that SDOH data elements does not include work information (see ODH) [FHIR-34701](https://jira.hl7.org/browse/FHIR-34701) See Change:
  -  [Here](https://hl7.org/fhir/us/core/STU5/sdoh.html)
  -  [Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-sdoh-assessment.html)
1. **Applied**: Add 386053000 "Evaluation procedure" ,410606002 "Social service procedure" to the ServiceRequest Category Code [FHIR-34747](https://jira.hl7.org/browse/FHIR-34747) [See Change Here](https://hl7.org/fhir/us/core/STU5/ValueSet-us-core-servicerequest-category.html)
1. **Applied**: Broaden Common SDOH assessment concepts and clarify is a starter set [FHIR-34752](https://jira.hl7.org/browse/FHIR-34752) See Change:
   - [Here](https://hl7.org/fhir/us/core/STU5/sdoh.html#assessment-codes)
   - [Here](https://hl7.org/fhir/us/core/STU5/ValueSet-us-core-common-sdoh-assessments.html)
   - [Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-sdoh-assessment.html)
1. **Applied**: Clinical Test Result Observation Profile Must Have needs to address the 3 slices for procedure, exam, and activity in the explanatory text [FHIR-34753](https://jira.hl7.org/browse/FHIR-34753) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-clinical-test.html)
1. **Applied**: Clarify guidance for use of Patient.genderIdentity, Patient.birthsex, and pre-existing Patient.gender [FHIR-34754](https://jira.hl7.org/browse/FHIR-34754) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-patient.html)
1. **Resolved - change required**: List profiles by type and create table comparing Observation Profiles [FHIR-34890](https://jira.hl7.org/browse/FHIR-34890) See Changes:
 - [Here](https://hl7.org/fhir/us/core/STU5/profiles-and-extensions.html)
 - [Here](https://hl7.org/fhir/us/core/STU5/index.html#us-core-profiles)
 - [Here](https://hl7.org/fhir/us/core/STU5/downloads.html)
1. **Applied**: Lab Result and Specimen Information for RBC Observation is Missing [FHIR-34910](https://jira.hl7.org/browse/FHIR-34910) See Change
   - [Here](https://hl7.org/fhir/us/core/STU5/index.html#how-to-read-this-guide)
   - [Here](https://hl7.org/fhir/us/core/STU5/examples.html)
   - [Here](https://hl7.org/fhir/us/core/STU5/Observation-blood-glucose.html)
1. **Applied**: Added guidance on Observation.category limitations [FHIR-34949](https://jira.hl7.org/browse/FHIR-34949) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-lab.html#mandatory-and-must-support-data-elements)
1. **Applied**: Add guidance on Imaging DiagnosticReport ontology [FHIR-34958](https://jira.hl7.org/browse/FHIR-34958) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-imaging.html)
1. **Applied**: Clarify that the profile guidance is not limited to profiled elements [FHIR-34971](https://jira.hl7.org/browse/FHIR-34971) [See Change Here](https://hl7.org/fhir/us/core/STU5/index.html#how-to-read-this-guide)
1. **Applied**: Fix asterisk notation in profiles [FHIR-34972](https://jira.hl7.org/browse/FHIR-34972) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-imaging.html)
1. **Applied**: Clarify "time" elements used in the DiagnosticReport profiles [FHIR-34973](https://jira.hl7.org/browse/FHIR-34973) See Change:
   - [Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-diagnosticreport-lab.html)
   - [Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-diagnosticreport-note.html)
1. **Applied**: Change the query parameter value to be consistent with previous statement [FHIR-35047](https://jira.hl7.org/browse/FHIR-35047) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-clinical-test.html#notes)
1. **Applied**: Re-ordered sections in *Downloads* page and provide a zip file of schematrons [FHIR-35064](https://jira.hl7.org/browse/FHIR-35064) [See Change Here](https://hl7.org/fhir/us/core/STU5/downloads.html)
1. **Applied**:  Split General Guidance page into 1) USCDI  3)General Guidance. Split Conformance Expectations into General Requirements and Must Support. Move General Guidance to General Requirements [FHIR-35065](https://jira.hl7.org/browse/FHIR-35065) See Changes:
  - [Here](https://hl7.org/fhir/us/core/STU5/uscdi.html)
  - [Here](https://hl7.org/fhir/us/core/STU5/general-requirements.html)
  - [Here](https://hl7.org/fhir/us/core/STU5/general-guidance.html)
  - [Here](https://hl7.org/fhir/us/core/STU5/must-support.html)
1. **Applied**: Clarify expectations for supporting multiple versions of US Core.[FHIR-35067](https://jira.hl7.org/browse/FHIR-35067) [See Change Here](https://hl7.org/fhir/us/core/STU5/changes-between-versions.html)
1. **Applied**: Clarify that Changes Between Versions (né DSTU2 to R4 Conversion) page documents a set of best practices [FHIR-35068](https://jira.hl7.org/browse/FHIR-35068) [See Change Here](https://hl7.org/fhir/us/core/STU5/changes-between-versions.html)
1. **Applied**: Typo in Category Codes section [FHIR-35072](https://jira.hl7.org/browse/FHIR-35072) [See Change Here](https://hl7.org/fhir/us/core/STU5/sdoh.html)
1. **Applied:** Typo [FHIR-35115](https://jira.hl7.org/browse/FHIR-35115)
1. **Applied**: Provide guidance when specific code systems are to be used in ServiceRequest [FHIR-35122](https://jira.hl7.org/browse/FHIR-35122) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-servicerequest.html)
1. **Applied**: Clarify description for effective time. [FHIR-35125](https://jira.hl7.org/browse/FHIR-35125) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-diagnosticreport-lab.html)
1. **Applied**: Fix CareTeam example's participant.role value [FHIR-35152](https://jira.hl7.org/browse/FHIR-35152) [See Change Here](https://hl7.org/fhir/us/core/STU5/CareTeam-example.html)
1. **Applied**: US Core Condition profile "status" is ambiguous; clarify to be clinicalStatus [FHIR-35280](https://jira.hl7.org/browse/FHIR-35280) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-condition-problems-health-concerns.html)
1. **Applied**: Align Observation category for SDOH assessments [FHIR-35282](https://jira.hl7.org/browse/FHIR-35282) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-social-history.html)
1. **Applied**: Add effective[x] 0..1 MS to US Core Observation Social History Profile [FHIR-35283](https://jira.hl7.org/browse/FHIR-35283) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-social-history.html)
1. **Applied**:  Clarify Condition.clinicalStatus requirements and searching using clinical-status [FHIR-35318](https://jira.hl7.org/browse/FHIR-35318) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-condition-problems-health-concerns.html)
1. **Applied**: Fix link [FHIR-35362](https://jira.hl7.org/browse/FHIR-35362)
1. **Applied**: Modify example usage text in all profile pages  [FHIR-35363](https://jira.hl7.org/browse/FHIR-35363) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-survey.html)
1. **Applied**: Clarify modeling of SDOH screening using Observations, Add QuestionnaireResponse profile as alternative screening instrument [FHIR-35364](https://jira.hl7.org/browse/FHIR-35364) See Changes:
  - [Here](https://hl7.org/fhir/us/core/STU5/sdoh.html)
  - [Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-survey.html)
  - [Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-sdoh-assessment.html)
  - [Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-questionnaireresponse.html)
1. **Applied**: Clarify $docref operation expectations [FHIR-35380](https://jira.hl7.org/browse/FHIR-35380) [See Change Here](https://hl7.org/fhir/us/core/STU5/CapabilityStatement-us-core-server.html#documentreference)
1. **Applied**: Typo [FHIR-35388](https://jira.hl7.org/browse/FHIR-35388)
1. **Applied**: Duplicate sections in US Core RelatedPerson Profile profile [FHIR-35452](https://jira.hl7.org/browse/FHIR-35452)
1. **Applied**: Updated guidance on changes between versions [FHIR-35576](https://jira.hl7.org/browse/FHIR-35576) [See Change Here](https://hl7.org/fhir/us/core/STU5/changes-between-versions.html)
1. **Applied**: Split section on "deleted" from "entered in error" [FHIR-35622](https://jira.hl7.org/browse/FHIR-35622) [See Change Here](https://hl7.org/fhir/us/core/STU5/general-guidance.html#representing-entered-in-error-information)
1. **Applied**: Use "sdoh" instead of "LG41762-2" for SDOH Categories and Tags [FHIR-35644](https://jira.hl7.org/browse/FHIR-35644) See Changes:
   - [Here](https://hl7.org/fhir/us/core/STU5/CodeSystem-us-core-tags.html)
   - [Here](https://hl7.org/fhir/us/core/STU5/ValueSet-us-core-tags.html)
   - [Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-sdoh-assessment.html)
1. **Applied**: Update Gender Identity Value set[FHIR-35677](https://jira.hl7.org/browse/FHIR-35677) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-genderIdentity.html)
1. **Applied**: Remove "OTH" from OMB Race Category valueSet [FHIR-35694](https://jira.hl7.org/browse/FHIR-35694) [See Change Here](https://hl7.org/fhir/us/core/STU5/ValueSet-omb-race-category.html)
1. **Applied**:Add basic introduction to the FHIR RESTful Search interaction in the home page [FHIR-35755](https://jira.hl7.org/browse/FHIR-35755) [See Change Here](https://hl7.org/fhir/us/core/STU5/index.html#us-core-fhir-restful-interactions)
1. **Applied**: Remove MS from DiagnosticReport.imagingStudy [FHIR-35759](https://jira.hl7.org/browse/FHIR-35759) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-diagnosticreport-note.html)
1. **Applied**: Media example data value fails regex [FHIR-35790](https://jira.hl7.org/browse/FHIR-35790) [See Change Here](https://hl7.org/fhir/us/core/STU5/Media-ekg-strip.json.html)
1. **Applied**: Typo [FHIR-35844](https://jira.hl7.org/browse/FHIR-35844)
1. **Applied**: Typo [FHIR-35851](https://jira.hl7.org/browse/FHIR-35851)
1. **Applied**: Change fixed category slice to max=1 [FHIR-35854](https://jira.hl7.org/browse/FHIR-35854) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-imaging.html)
1. **Applied**: Clarify narrative of status "active" element.  [FHIR-35870](https://jira.hl7.org/browse/FHIR-35870) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-organization.html)
1. **Applied**: allow ethnicity extension in FamilyMemberHistory [FHIR-35997](https://jira.hl7.org/browse/FHIR-35997) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-ethnicity.html)
1. **Applied**: allow race extension in FamilyMemberHistory [FHIR-35998](https://jira.hl7.org/browse/FHIR-35998) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-race.html)
1. **Applied**: Update Condition Implementation Guidance to reflect current USCDI terminology standards [FHIR-36056](https://jira.hl7.org/browse/FHIR-36056) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-condition-encounter-diagnosis.html)
1. **Applied**: Clarify expectations for reader [FHIR-36057](https://jira.hl7.org/browse/FHIR-36057) See Changes:
   - [Here](https://hl7.org/fhir/us/core/STU5/index.html)
   - [Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-observation-lab.html)
1. **Applied**: Update US Core Yearly Updates [FHIR-36058](https://jira.hl7.org/browse/FHIR-36058) [See Change Here](https://hl7.org/fhir/us/core/STU5/future-of-US-core.html)
1. **Applied**: Remove "Cause of death" from Condition.category and remove US Core Condition Category Codes ValueSet [FHIR-36104](https://jira.hl7.org/browse/FHIR-36104)
1. **Applied**: Add OTH to sexual orientation ValueSet [FHIR-36166](https://jira.hl7.org/browse/FHIR-36166) [See Change Here](https://hl7.org/fhir/us/core/STU5/ValueSet-us-core-sexual-orientation.html)
1. **Applied**: Updated coding `system` in Missing Data documentation [FHIR-36177](https://jira.hl7.org/browse/FHIR-36177) [See Change Here](https://hl7.org/fhir/us/core/STU5/general-requirements.html#missing-data)
1. **Applied**: Add "Other Race" to OMB Race Categories [FHIR-36247](https://jira.hl7.org/browse/FHIR-36247) [See Change Here](https://hl7.org/fhir/us/core/STU5/ValueSet-omb-race-category.html)
1. **Applied**: Add MS to Device.distinctIdentifier to correct editorial error [FHIR-36303](https://jira.hl7.org/browse/FHIR-36303) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-implantable-device.html)
1. **Applied**: Fix provenance-1 invariant [FHIR-36328](https://jira.hl7.org/browse/FHIR-36328) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-provenance.html)
1. **Applied**: Correct _targetProfile element in Provenance StructureDefinition [FHIR-36344](https://jira.hl7.org/browse/FHIR-36344) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-provenance.html)
1. **Applied**: Correct guidance on accessing VSAC Valuesets [FHIR-36639](https://jira.hl7.org/browse/FHIR-36639) [See Change Here](https://hl7.org/fhir/us/core/STU5/terminology.html#using-value-set-authority-center-vsac)
1. **Applied**: Move change log from version history to new change log  page in IG [FHIR-36703](https://jira.hl7.org/browse/FHIR-36703) [See Change Here](https://hl7.org/fhir/us/core/STU5/changes.html)
1. **Applied**: Remove redundant example sections [FHIR-36728](https://jira.hl7.org/browse/FHIR-36728)
1. **Applied**: Realign ids names and titles for all new profiles for consistency [FHIR-36766](https://jira.hl7.org/browse/FHIR-36766) [See Change Here](https://hl7.org/fhir/us/core/STU5/profiles-and-extensions.html)
1. **Applied**: Move profile page introduction into StructureDefinition description [FHIR-36824](https://jira.hl7.org/browse/FHIR-36824) [See Change Here](https://hl7.org/fhir/us/core/STU5/profiles-and-extensions.html)
1. **Applied**: Fixed profile, Added STU Note, Updated FHIR Core Vitals Profile binding in FHIR R4B. [FHIR-27845](https://jira.hl7.org/browse/FHIR-27845) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-pulse-oximetry.html)
1. **Applied**: Change Encounter.reasonReference from 0..1 to 0..* [FHIR-36862](https://jira.hl7.org/browse/FHIR-36862) [See Change Here](https://hl7.org/fhir/us/core/STU5/StructureDefinition-us-core-encounter.html)
1. **Applied**: Change URL for CDT from http://ada.org/cdt to http://www.ada.org/cdt. [FHIR-36861](https://jira.hl7.org/browse/FHIR-36861) [See Change Here](https://hl7.org/fhir/us/core/STU5/ValueSet-us-core-procedure-code.html)

#### The Following Trackers Will be Applied in Future Version

Due external dependencies and publication tooling limitations, the application of these resolutions have been deferred.

##### Working with HL7 publishing to resolve these publishing issues:

**Tracker Status**: **Summary** **Jira Issue** Application Status

1. **Resolved - change required**: Patient Examples QA Errors: CDCREC code system in VSAC [FHIR-30105](https://jira.hl7.org/browse/FHIR-30105) Manual code expansion and STU Note Present.  Working with HL7 publishing to fix integration with VSAC.
1. **Resolved - change required**: valueset-simple-language.xml QA Error [FHIR-30107](https://jira.hl7.org/browse/FHIR-30107) Working with HL7 publishing to fix.
1. **Resolved - change required**: Extensions used that are not defined in the scope [FHIR-35775](https://jira.hl7.org/browse/FHIR-35775)


##### Working with HL7 IG Authoring project to address these issues on IG readability:

**Tracker Status**: **Summary** **Jira Issue** Application Status

1. **Resolved - change required**: In most of the data elements – “Binding is from base FHIR and US Core Vital Signs” Need this to be one single combined listing [FHIR-30780](https://jira.hl7.org/browse/FHIR-30780)
1. **Resolved - change required**: AllergyIntolerance does not show constraint [FHIR-34636](https://jira.hl7.org/browse/FHIR-34636)
1. **Resolved - change required**: RelatedPerson relationshiptype should have binding to FHIR value set RelatedPerson-relationshiptype [FHIR-34755](https://jira.hl7.org/browse/FHIR-34755)


---

### Version = 4.1.0
- Publication Date: 2021-11-30
- url: <https://hl7.org/fhir/us/core/2022Jan>
- Based on FHIR version : 4.0.1

#### Changes:
 **The January 2022 Ballot**

This Ballot addresses the following issues:
- Adds [United States Core Data for Interoperability (USCDI) V2](https://www.healthit.gov/sites/default/files/page/2021-07/Standards_Bulletin_2021-3.pdf) updates that the Office of the National Coordinator (ONC) published in July of 2021 with these new Data Elements and Classes:
  - **Applied**: [A Social Determinants Of Health (SDOH) Guidance page](https://hl7.org/fhir/us/core/2022Jan/sdoh.html) to document and provide guidance on using US Core to represent and access [SDOH Assessments](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-observation-screening-response.html) and [Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-observation-social-history-assessment.html), [Goals](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-goal.html), Interventions represented by [ServiceRequest](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-servicerequest.html) + [Procedure](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-procedure.html), and [Problems/Health Concerns](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-condition.html)
  - **Applied**: [Clinical Tests](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-observation-clinical-test.html) and [Diagnostic Imaging](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-observation-imaging.html) [also see Changes Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-diagnosticreport-note.html)
  - **Applied**: [Patient Gender Identity](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-patient.html) and [Sexual Identity](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-observation-sexual-orientation.html#)
  - **Applied**: **Care Team Member:** Name, Identifier, Location, Telecom and Role [See Change Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-careteam.html) and [Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-practitioner.html) and [Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-relatedperson.html)
  - **Applied**: **Encounter:** Diagnosis, Disposition, Location, Time, Type [See Change Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-encounter.html)
  - **Applied**: **Problems:** Date of Diagnosis and Date of Resolution [See Change Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-condition.html)
- Continued efforts to link terminology directly to the FHIR® Terminology Service for VSAC Resources ([Value Set Authority Center (VSAC) - NIH](https://vsac.nlm.nih.gov/)) where applicable and as a result align terminology between US Core and [HL7 C-CDA].
- [Updated uscdii table](https://hl7.org/fhir/us/core/2022Jan/general-guidance.html) for easier browsing.
- Addition of consolidated [CSV and Excel File representations](https://hl7.org/fhir/us/core/2022Jan/downloads.html) of Profiles to  enable testers and analysts to review elements properties across profiles in a single table
- Addressed and applied over 30 trackers submitted by implementers since the previous STU2 ballot for US Core ver 4.0.0:

 **Tracker Status**: **Summary** **Jira Issue** **Link to Updated Content**
  1. **Applied**: Make values in direct and birth sex extensions min=1 [FHIR-26459](https://jira.hl7.org/browse/FHIR-26459) See Change:
     - [Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-birthsex.html)
     - [Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-direct.html)
  2. **Applied**: FIX imm-1.json NDC/CVX codes QA Error [FHIR-30104](https://jira.hl7.org/browse/FHIR-30104) See Change:
     - [Here](https://hl7.org/fhir/us/core/2022Jan/Immunization-imm-1.html)
     - [Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-immunization.html)
  3. **Applied**: Fix patient search parameter definitions to only target Patient  [FHIR-32305](https://jira.hl7.org/browse/FHIR-32305) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/SearchParameter-us-core-allergyintolerance-patient.json.html)
  4. **Applied**: Provide a caution to the user that a query of MedicationRequest does not provide complete information. [FHIR-32720](https://jira.hl7.org/browse/FHIR-32720) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-medicationrequest.html#mandatory-and-must-support-data-elements)
  5. **Applied**: Make Condition.encounter 0..1 MS [FHIR-32844](https://jira.hl7.org/browse/FHIR-32844) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-condition.html)
  6. **Applied**: Correction on USCoreCarePlanProfile Binding [FHIR-32846](https://jira.hl7.org/browse/FHIR-32846) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-careplan.html)
  7. **Applied**: Fix title for BMI Profile [FHIR-32847](https://jira.hl7.org/browse/FHIR-32847) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-bmi.html)
  8. **Applied**: Remove unchanged elements from Differentials [FHIR-32848](https://jira.hl7.org/browse/FHIR-32848) [For example change see](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-diagnosticreport-lab.profile.json.html)
  9. **Applied**: Create US Core slices for category elements [FHIR-32857](https://jira.hl7.org/browse/FHIR-32857) See Change:
     -  [Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-documentreference.html)
     -  [Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-medicationrequest.html)
     -  [Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-servicerequest.html)
     -  [Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-condition.html)
  10. **Applied**: Change drug class value set for allergens to align with C-CDA [FHIR-32953](https://jira.hl7.org/browse/FHIR-32953) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-allergyintolerance.html)
  11. **Applied**: Referencing incorrect figure [FHIR-32961](https://jira.hl7.org/browse/FHIR-32961) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/basic-provenance.html#clinical-information-reconciliation-and-incorporation)
  12. **Applied**: Clarify Guidance for missing data for Coding data type element [FHIR-33048](https://jira.hl7.org/browse/FHIR-33048) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/general-guidance.html#missing-data)
  13. **Applied**: Fix us-core-1 Invariant for Observation [FHIR-33052](https://jira.hl7.org/browse/FHIR-33052) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-observation-lab.html#constraints)
  14. **Applied**: Remove requirement to use only 401 from capabiltystatement [FHIR-33069](https://jira.hl7.org/browse/FHIR-33069) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/CapabilityStatement-us-core-server.html#behavior)
  15. **Applied**: US Core to USCDI guidance page -- add patient email [FHIR-33079](https://jira.hl7.org/browse/FHIR-33079) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-patient.html)
  16. **Applied**: Utilize "use" field for patient previous name and previous address [FHIR-33080](https://jira.hl7.org/browse/FHIR-33080) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-patient.html)
  17. **Applied**: Fix search parameter list [FHIR-33123](https://jira.hl7.org/browse/FHIR-33123) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/search-parameters-and-operations.html)
  18. **Applied**: Clarify requirement on date searches without prefix [FHIR-33156](https://jira.hl7.org/browse/FHIR-33156) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/general-guidance.html#search-syntax.html)
  19. **Applied**: Clarify distinction between repeated search params and "composite" params [FHIR-33159](https://jira.hl7.org/browse/FHIR-33159) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-observation-lab.html#notes)
  20. **Applied**: Add content as mandatory element in narrative for documentreference [FHIR-33160](https://jira.hl7.org/browse/FHIR-33160) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-documentreference.html)
  21. **Applied**: Fix invalid elements in extensions [FHIR-33233](https://jira.hl7.org/browse/FHIR-33233) See Change:
     - [Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-race.html)
     - [Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-birthsex.html)
     - [Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-direct.html)
  22. **Applied**: Make Procedure.performed conditionally mandatory [FHIR-33243](https://jira.hl7.org/browse/FHIR-33243) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-procedure.html)
  23. **Applied**: add same Null options to Race and Ethnicity [FHIR-34036](https://jira.hl7.org/browse/FHIR-34036) See Change
     - [Here](https://hl7.org/fhir/us/core/2022Jan/ValueSet-omb-ethnicity-category.html)
     - [Here](https://hl7.org/fhir/us/core/2022Jan/ValueSet-detailed-ethnicity.html)
     - [Here](https://hl7.org/fhir/us/core/2022Jan/ValueSet-omb-race-category.html)
     - [Here](https://hl7.org/fhir/us/core/2022Jan/ValueSet-detailed-race.html)
  24. **Applied**: Clarify MustSupport for Observation.component.value[x] vs dataAbsentReason [FHIR-34061](https://jira.hl7.org/browse/FHIR-34061) See Change:
     - [Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-blood-pressure.html#mandatory-and-must-support-data-elements)
     - [Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-vital-signs.html#mandatory-and-must-support-data-elements)
  25. **Applied**: Add  Null options to US Core Birth Sex Extension [FHIR-34133](https://jira.hl7.org/browse/FHIR-34133) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/ValueSet-birthsex.html)
  26. **Applied**: USCDI v2 update [FHIR-34231](https://jira.hl7.org/browse/FHIR-34231) SEE SECTION ABOVE
  27. **Applied**: Fix Observation Examples using `appliesTo` [FHIR-34286](https://jira.hl7.org/browse/FHIR-34286) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/Observation-serum-calcium.html)
  28. **Applied**: Correct CapabilityStatement SMART IG reference [FHIR-34281](https://jira.hl7.org/browse/FHIR-34281) [See Change Here](https://hl7.org/fhir/us/core/2022Jan/CapabilityStatement-us-core-server.html#should_igs)
  29. **Applied**: Make DiagnosticReport.effective and DiagnosticReport.issued conditionally mandatory [FHIR-34330](https://jira.hl7.org/browse/FHIR-34330) See Change:
      - [Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-diagnosticreport-lab.html)
      - [Here](https://hl7.org/fhir/us/core/2022Jan/StructureDefinition-us-core-diagnosticreport-note.html)
  30. **Applied**: fix URL[See Change Here](https://hl7.org/fhir/us/core/2022Jan/search-parameters-and-operations.html#operations)
  31. **Applied**: US Core search page is not working [FHIR-34028](https://jira.hl7.org/browse/FHIR-34028) - Coordination with HL7 IG publishing team to Correct

  **The Following Trackers Will be Applied Following this Ballot**

  Due external dependencies and publication tooling limitations, the application of these resolutions have been deferred.

  **Tracker Status**: **Summary** **Jira Issue** **Link to Updated Content**
  
  1. **Resolved - change required**: US Core Pulse Oximetry Profile noncomformant UCUM Unit for Oxygen Concentration [FHIR-27845](https://jira.hl7.org/browse/FHIR-27845) -  Awaiting FHIR-4b updates to update base FHIR Vitals Profile, STU Note Present
  2. **Resolved - change required**: Patient Examples QA Errors: CDCREC code system in VSAC [FHIR-30105](https://jira.hl7.org/browse/FHIR-30105) - Coordination with VSAC and IG publishing team to Correct and align Code System OIDS between FHIR, CCDA, and VSAC, Note To Balloters Present
  3. **Resolved - change required**: valueset-simple-language.xml QA Error [FHIR-30107](https://jira.hl7.org/browse/FHIR-30107) - Coordination with IG publishing team to Correct - Note To Balloters present
  4. **Resolved - change required**: Display only differential invariants and terminology tables in Differential View [FHIR-30780](https://jira.hl7.org/browse/FHIR-30780) - Coordination with HL7 IG publishing team to Correct
  5. **Resolved - change required**: Confusing to reads invariants and terminology tables in Differential View [FHIR-30783](https://jira.hl7.org/browse/FHIR-30783) - Coordination with HL7 IG publishing team to Correct
  6. **Resolved - change required**: Wrong link to IG homepage from package manifest [FHIR-33132](https://jira.hl7.org/browse/FHIR-33132) - Coordination with HL7 IG publishing team to Correct


---

### Version = 4.0.0 (Meets USCDI v1 Requirements)
- Publication Date: 2021-06-28
- url: <https://hl7.org/fhir/us/core/STU4>
- Based on FHIR version : 4.0.1

#### Changes:
 The changes in this annual update to US Core have been reviewed and commented upon by the public through the January 2021 HL7 balloting process.  The resolution of the community comments has been agreed to and voted on by the members of the sponsoring work group [HL7 International Cross-Group Projects](http://www.hl7.org/Special/committees/cgp/index.cfm).

The key changes are summarized below:

1. New *Conformance Expectations* page
  - Defining different ways to implement and conform to US Core.
  - Clarification of the Must Support definitions as it relates to various FHIR elements such a choice datatype and references.
2. Publishing a set US Core Vital Signs independent of the FHIR core profile upon which it is based
  - *US Core Vital Signs Profile*
    - *US Core Blood Pressure Profile*
    - *US Core BMI Profile*
    - *US Core Head Circumference Profile*
    - *US Core Body Height Profile*
    - *US Core Body Weight Profile*
    - *US Core Body Temperature Profile*
    - *US Core Heart Rate Profile*
    - *US Core Respiratory Rate Profile*
3. Linking terminology directly to the FHIR® Terminology Service for VSAC Resources ([Value Set Authority Center (VSAC) - NIH](https://vsac.nlm.nih.gov/)) where applicable:
**US Core Value Set, VSAC Value Set, VSAC OID, extensional?** 1. Detailed ethnicity, Detailed Ethnicity, 2.16.840.1.114222.4.11.877, No 1. OMB Ethnicity Categories, Ethnicity, 2.16.840.1.114222.4.11.837, Yes 1. US Core CareTeam Provider Roles, Care Team Member Function, 2.16.840.1.113762.1.4.1099.30, Yes 1. US Core Medication Codes (RxNorm), Medication Clinical Drug, 2.16.840.1.113762.1.4.1010.4, Yes 1. US Core Provider Specialty (NUCC), Healthcare Provider Taxonomy, 2.16.840.1.114222.4.11.1066, No 1. US Core Smoking Status, Smoking Status, 2.16.840.1.113883.11.20.9.38, Yes 1. US Core Vaccine Administered Value Set (CVX), CVX Vaccines Administered Vaccine Set, 2.16.840.1.113762.1.4.1010.6, Yes 1. US Core Common substances for allergy and intolerance documentation including refutations, Common substances for allergy and intolerance documentation including refutations, 2.16.840.1.113762.1.4.1186.8, No
4. Migrating to the standard set of HL7 FHIR IG templates for publishing. Although we strove to minimize the differences between this version and the previous versions of US Core, these changes are notable:
   - Additional Features include:
        - Addition of vocabulary and constraint tables to the profile pages
        - Addition of a summary table and to the profile page introduction
        - Addition of "Snapshot Table (Must Support)" Tab to profile views
   - Due to restrictions on customizable content, the full narrative text summaries of profiles is no longer available.

5. Addressing over 90 January 2021 Ballot related trackers resulting in the followed detailed changes.

Listed below are the resolved trackers for this version:

**Status**: **Summary**:(**Jira Issue**) **Link to Change**
1. **Applied**:Update PractitionerRole.practitioner to )..1 MS ([FHIR-29681](https://jira.hl7.org/browse/FHIR-29681)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-practitionerrole.html#profile)
1. **Applied**:Change CareTeam `status` search parameter compositeOR expectation to SHOULD ([FHIR-29768](https://jira.hl7.org/browse/FHIR-29768)) [See Change Here](https://hl7.org/fhir/us/core/STU4/SearchParameter-us-core-careteam-status.html)
1. **Applied**:Provide guidance on the population of narrative ([FHIR-29777](https://jira.hl7.org/browse/FHIR-29777)) [See Change Here](https://hl7.org/fhir/us/core/STU4/general-guidance.html#narrative)
1. **Applied**: Change $docref start and end input parameter types from `date` to `dateTime` ([FHIR-29825](https://jira.hl7.org/browse/FHIR-29825)) [See Change Here](https://hl7.org/fhir/us/core/STU4/OperationDefinition-docref.html)
1. **Applied**: The history file markdown rendering of the table ([FHIR-30100](https://jira.hl7.org/browse/FHIR-30100)) [See Change Here](https://hl7.org/fhir/us/core/history.html)
1. **Applied**:footnote rendering - pre-applied ([FHIR-30101](https://jira.hl7.org/browse/FHIR-30101)) [See Change Here](https://hl7.org/fhir/us/core/STU4/general-guidance.html#guidance-on-limiting-the-number-of-search-results)
1. **Applied**:Random Section Numbering (Reminder for tooling issue) ([FHIR-30102](https://jira.hl7.org/browse/FHIR-30102)) [See Change Here](https://hl7.org/fhir/us/core/STU4/toc.html)
1. **Applied**:Move section 1.5 US Core Conformance Requirements ([FHIR-30103](https://jira.hl7.org/browse/FHIR-30103)) [See Change Here](https://hl7.org/fhir/us/core/STU4/conformance-expectations.html)
1. **Applied**:Make custodian optional on document reference ([FHIR-30108](https://jira.hl7.org/browse/FHIR-30108)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-documentreference.html)
1. **Applied**:Remove required binding on procedure and condition ([FHIR-30109](https://jira.hl7.org/browse/FHIR-30109)) See Changes:
   - [Here](https://hl7.org/fhir/us/core/STU4/conformance-expectations.html#extensible-binding-for-codeableconcept-datatype)
   - [Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-condition.html#profile)
   - [Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-procedure.html#profile)

1. **Applied**:Update DocumentReference CCD operation ([FHIR-30110](https://jira.hl7.org/browse/FHIR-30110)) [See Change Here](https://hl7.org/fhir/us/core/STU4/OperationDefinition-docref.html)
1. **Applied**:Update DocumentReference MustSupport to choice of data or url ([FHIR-30111](https://jira.hl7.org/browse/FHIR-30111)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-documentreference.html#mandatory-and-must-support-data-elements)
1. **Applied**:Reference to 3 new document types - addressing corresponding metadat ([FHIR-30112](https://jira.hl7.org/browse/FHIR-30112)) [See Change Here](https://hl7.org/fhir/us/core/STU4/clinical-notes-guidance.html#clinical-notes) AND [See Change Here](https://hl7.org/fhir/us/core/STU4/clinical-notes-guidance.html#support-requirements)
1. **Applied**:Typo ([FHIR-30113](https://jira.hl7.org/browse/FHIR-30113))
1. **Applied**:Clarify Must Support of Complex elements ([FHIR-30321](https://jira.hl7.org/browse/FHIR-30321)) [See Change Here](https://hl7.org/fhir/us/core/STU4/conformance-expectations.html#must-support---complex-elements)
1. **Applied**:Clarify that VSAC FHIR API only retrieves a definition ([FHIR-30344](https://jira.hl7.org/browse/FHIR-30344)) [See Change Here](https://hl7.org/fhir/us/core/STU4/terminology.html#using-value-set-authority-center-vsac)
1. **Applied**:Allergy Intolerance example for UNKNOWN allergy status does not use unknown ([FHIR-30345](https://jira.hl7.org/browse/FHIR-30345)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-allergyintolerance.html#mandatory-and-must-support-data-elements)
1. **Applied**:Corrected allergy intolerance example SNOMED CT code ([FHIR-30346](https://jira.hl7.org/browse/FHIR-30346)) [See Change Here](https://hl7.org/fhir/us/core/STU4/AllergyIntolerance-example.html)
1. **Applied**:Allergy codes updated to snomed product hierarchy in VSAC([FHIR-30347](https://jira.hl7.org/browse/FHIR-30347)) [See Change Here](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1186.8/expansion)
1. **Applied**:Clarify plans to align with Gender Harmony([FHIR-30350](https://jira.hl7.org/browse/FHIR-30350)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-patient.html#mandatory-and-must-support-data-elements)
1. **Applied**:Typos on Conformance Expectations Page ([FHIR-30353](https://jira.hl7.org/browse/FHIR-30353)) [See Change Here](https://hl7.org/fhir/us/core/STU4/conformance-expectations.html)
1. **Applied**:clarify use of additional codings ([FHIR-30354](https://jira.hl7.org/browse/FHIR-30354)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-vital-signs.html#mandatory-and-must-support-data-elements)
1. **Applied**:Clarify server requirements for Choice of Profile Elements scenario ([FHIR-30355](https://jira.hl7.org/browse/FHIR-30355)) [See Change Here](https://hl7.org/fhir/us/core/STU4/conformance-expectations.html#must-support---choice-of-profile-elements)
1. **Applied**:Add all options to Procedure.performed[x] ([FHIR-30391](https://jira.hl7.org/browse/FHIR-30391)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-procedure.html#profile)
1. **Applied**:Updated MedicationRequest.authoredOn from mandatory to must support([FHIR-30430](https://jira.hl7.org/browse/FHIR-30430)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-medicationrequest.html#mandatory-and-must-support-data-elements)
1. **Applied**:Typo ([FHIR-30460](https://jira.hl7.org/browse/FHIR-30460)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-vital-signs.html#mandatory-and-must-support-data-elements)
1. **Applied**: Update Encounter Type CPT Description ([FHIR-30470](https://jira.hl7.org/browse/FHIR-30470)) [See Change Here](https://hl7.org/fhir/us/core/STU4/ValueSet-us-core-encounter-type.html)
1. **Applied**: Clarify Missing Data language for coded data elements with required binding strength ([FHIR-30630](https://jira.hl7.org/browse/FHIR-30630)) [See Change Here](https://hl7.org/fhir/us/core/STU4/general-guidance.html#missing-data)
1. **Applied**:Note re language codes([FHIR-30654](https://jira.hl7.org/browse/FHIR-30654)) [See Change Here](https://hl7.org/fhir/us/core/STU4/ValueSet-simple-language.html#notes)
1. **Applied**:Change URL for Healthcare Common Procedure Coding System (HCPCS) level II alphanumeric codes([FHIR-30655](https://jira.hl7.org/browse/FHIR-30655)) See Changes [Here](https://hl7.org/fhir/us/core/STU4/terminology.html#using-value-set-authority-center-vsac) and [Here](https://hl7.org/fhir/us/core/STU4/ValueSet-us-core-procedure-code.html)
1. **Applied**:Typo ([FHIR-30656](https://jira.hl7.org/browse/FHIR-30656))
1. **Applied**: Explain the relationship between US CORE and an evolving USCDI. ([FHIR-30657](https://jira.hl7.org/browse/FHIR-30657)) [See Change Here](https://hl7.org/fhir/us/core/STU4/index.html)
1. **Applied**:Correct 2 bullet points in section 1.2. ([FHIR-30658](https://jira.hl7.org/browse/FHIR-30658)) [See Change Here](https://hl7.org/fhir/us/core/STU4/index.html)
1. **Applied**:Clarify actors ([FHIR-30659](https://jira.hl7.org/browse/FHIR-30659)) [See Change Here](https://hl7.org/fhir/us/core/STU4/index.html#us-core-actors)
1. **Applied**:Edit basic provenance ([FHIR-30660](https://jira.hl7.org/browse/FHIR-30660)) [See Change Here](https://hl7.org/fhir/us/core/STU4/basic-provenance.html#clinical-information-reconciliation-and-incorporation)
1. **Applied**:Clarify the duplication requirement for scanned documents in DocumentReference and DiagnosticReport. ([FHIR-30662](https://jira.hl7.org/browse/FHIR-30662)) [See Change Here](https://hl7.org/fhir/us/core/STU4/clinical-notes-guidance.html#fhir-resources-to-exchange-clinical-notes)
1. **Applied**:Clarify that clients should retain data visualization between DSTU2 to R4 upgrades. ([FHIR-30665](https://jira.hl7.org/browse/FHIR-30665)) [See Change Here](https://hl7.org/fhir/us/core/STU4/DSTU2-to-R4-conversion.html#expectation-that-fhir-dstu2-data-is-preserved-in-fhir-r4)
1. **Applied**:Add provenance to writing/updating guidance? ([FHIR-30666](https://jira.hl7.org/browse/FHIR-30666)) [See Change Here](https://hl7.org/fhir/us/core/STU4/future-of-US-core.html)
1. **Applied**:Clarify Code System section and update codesystem table ([FHIR-30667](https://jira.hl7.org/browse/FHIR-30667)) [See Change Here](https://hl7.org/fhir/us/core/STU4/terminology.html#code-systems)
1. **Applied**: Clarify guidance on implantable medical devices. ([FHIR-30669](https://jira.hl7.org/browse/FHIR-30669)) [[See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-implantable-device.html#mandatory-and-must-support-data-elements)
1. **Applied**: Make udi_HRF a *Must Support* element. ([FHIR-30670](https://jira.hl7.org/browse/FHIR-30670)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-implantable-device.html#mandatory-and-must-support-data-elements)
1. **Applied**: Clarify UDI information. ([FHIR-30672](https://jira.hl7.org/browse/FHIR-30672)) See Changes:
    - [Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-implantable-device.html#mandatory-and-must-support-data-elements)
    - [Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-implantable-device.html#profile)
1. **Applied**:Clarify text ([FHIR-30673](https://jira.hl7.org/browse/FHIR-30673)) [See Change Here](https://hl7.org/fhir/us/core/STU4/conformance-expectations.html#conformance-expectations)
1. **Applied**:Typos ([FHIR-30674](https://jira.hl7.org/browse/FHIR-30674))
1. **Applied**:Clarify prohibition on using contained resources. ([FHIR-30677](https://jira.hl7.org/browse/FHIR-30677)) [See Change Here](https://hl7.org/fhir/us/core/STU4/general-guidance.html#contained-resources)
1. **Applied**:Add guidance on suppressed data. ([FHIR-30678](https://jira.hl7.org/browse/FHIR-30678)) [See Change Here](https://hl7.org/fhir/us/core/STU4/general-guidance.html#suppressed-data)
1. **Applied**:Clarify what is meant by "support the other elements." ([FHIR-30680](https://jira.hl7.org/browse/FHIR-30680)) [See Change Here](https://hl7.org/fhir/us/core/STU4/conformance-expectations.html#must-support---choice-of-data-types)
1. **Applied**:Typo([FHIR-30681](https://jira.hl7.org/browse/FHIR-30681))
1. **Applied**:Fix typos ([FHIR-30683](https://jira.hl7.org/browse/FHIR-30683)) Various Changes
1. **Applied**:Update on Guidance on DataAbsentReason for Observations ([FHIR-30685](https://jira.hl7.org/browse/FHIR-30685)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-observation-lab.html#mandatory-and-must-support-data-elements)
1. **Applied**:Clarify use of qualifier LOINCs ([FHIR-30690](https://jira.hl7.org/browse/FHIR-30690)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-vital-signs.html#mandatory-and-must-support-data-elements)
1. **Applied**: Fix Typo ([FHIR-30695](https://jira.hl7.org/browse/FHIR-30695)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-immunization-definitions.html)
1. **Applied**: Update on Guidance on DataAbsentReason for Observations ([FHIR-30699](https://jira.hl7.org/browse/FHIR-30699)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-observation-lab.html#mandatory-and-must-support-data-elements)
1. **Applied**: Clarify what is intended with "additional observations"([FHIR-30772](https://jira.hl7.org/browse/FHIR-30772)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-vital-signs.html#mandatory-and-must-support-data-elements)
1. **Applied**: Add statement about clinical safety to the security page ([FHIR-30776](https://jira.hl7.org/browse/FHIR-30776)) [See Change Here](https://hl7.org/fhir/us/core/STU4/security.html)
1. **Applied**: Added clarification to vitals profile regarding use of additional codings and component observations. ([FHIR-30778](https://jira.hl7.org/browse/FHIR-30778)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-blood-pressure.html#mandatory-and-must-support-data-elements)
2. **Applied**: Typo ([FHIR-30782](https://jira.hl7.org/browse/FHIR-30782)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-vital-signs.html#mandatory-and-must-support-data-elements)
3. **Applied**: Clarify resource search requirements CapabilityStatements and provide guidance on search for multiple patients using Bulk data ([FHIR-30787](https://jira.hl7.org/browse/FHIR-30787)) See Changes:
   - [Here](https://hl7.org/fhir/us/core/STU4/general-guidance.html#searching-multiple-patients)
   - [Here](https://hl7.org/fhir/us/core/STU4/CapabilityStatement-us-core-server.html#condition)
4. **Applied**: Add MedicationAdministration to the Future Page. ([FHIR-30788](https://jira.hl7.org/browse/FHIR-30788)) [See Change Here](https://hl7.org/fhir/us/core/STU4/future-of-US-core.html#future-candidate-requirements-under-consideration)
5. **Applied**: Fix text in $docref description ([FHIR-30810](https://jira.hl7.org/browse/FHIR-30810)) [See Change Here](https://hl7.org/fhir/us/core/STU4/OperationDefinition-docref.html)
6. **Applied**: Mandate that CapabilityStatement.instantiates refer to US Core ([FHIR-30889](https://jira.hl7.org/browse/FHIR-30889)) [See Change Here](https://hl7.org/fhir/us/core/STU4/CapabilityStatement-us-core-server.html#shall_css)
7. **Applied**: Add binding so Vitals will render it in differential view ([FHIR-31391](https://jira.hl7.org/browse/FHIR-31391)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-vital-signs.html#profile)
8. **Applied**: Update to URI from OID for CDT in Procedure Code ValueSet ([FHIR-31556](https://jira.hl7.org/browse/FHIR-31556)) [See Change Here](https://hl7.org/fhir/us/core/STU4/ValueSet-us-core-procedure-code.html)
9. **Applied**: Add DocumentReference.content is under "must have" list ([FHIR-31364](https://jira.hl7.org/browse/FHIR-31364)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-documentreference.html#mandatory-and-must-support-data-elements)
10. **Applied**: Update Must Support Bullet regarding missing data ([FHIR-31507](https://jira.hl7.org/browse/FHIR-31507)) [See Change Here](https://hl7.org/fhir/us/core/STU4/conformance-expectations.html#must-support-elements)
11. **Applied**: Update use context for Race and Ethnicity extensions ([FHIR-31008](https://jira.hl7.org/browse/FHIR-31008)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-race.html)
12. **Applied**: Add guidance on "POST based search" ([FHIR-31585](https://jira.hl7.org/browse/FHIR-31585)) See Changes:
   - [Here](https://hl7.org/fhir/us/core/STU4/general-guidance.html#search-syntax)
   - [Here](https://hl7.org/fhir/us/core/STU4/CapabilityStatement-us-core-server.html#behavior)
13. **Applied**: Add reference to Mapping from LOINC scale type to FHIR data type ([FHIR-31084](https://jira.hl7.org/browse/FHIR-31084)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-observation-lab.html#mandatory-and-must-support-data-elements)
14. **Applied**: Update Observation.value[x] definition ([FHIR-31083](https://jira.hl7.org/browse/FHIR-31083)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-observation-lab-definitions.html#Observation.value[x])
15. **Applied**: Add LOINC to procedure codes ([FHIR-31514](https://jira.hl7.org/browse/FHIR-31514)) [See Change Here](https://hl7.org/fhir/us/core/STU4/ValueSet-us-core-procedure-code.html)
16. **Applied**: Make PractitionerRole.organization must support and add invariant ([FHIR-29680](https://jira.hl7.org/browse/FHIR-29680)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-practitionerrole.html)
17. **Applied**: Fix FHIRPath constraint for provenance-1([FHIR-31020](https://jira.hl7.org/browse/FHIR-31020)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-provenance.html)
18. **Applied**: Add guidance to BMI Profile([FHIR-32658](https://jira.hl7.org/browse/FHIR-32658)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-bmi.html)
19. **Applied**: Write usage note for non-vaccination CVX codes([FHIR-31899](https://jira.hl7.org/browse/FHIR-31899)) [See Change Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-immunization.html#mandatory-and-must-support-data-elements)
20. **Applied**: Clarify that Extensible binding can always provide a mapped code([FHIR-32010](https://jira.hl7.org/browse/FHIR-32010)) [See Change Here](https://hl7.org/fhir/us/core/STU4/conformance-expectations.html#extensible-binding-for-codeableconcept-datatype)
21. **Applied**: Clarify RESTFul requirements([FHIR-31490](https://jira.hl7.org/browse/FHIR-31490)) See Changes:
   - [Here](https://hl7.org/fhir/us/core/STU4/index.html#introduction)
   - [Here](https://hl7.org/fhir/us/core/STU4/index.html#how-to-read-this-guide)
   - [Here](https://hl7.org/fhir/us/core/STU4/conformance-expectations.html#conformance-expectations)
   - [Here](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-allergyintolerance.html#notes)
22. **Applied**: fix Procedure Example error ([FHIR-30106](https://jira.hl7.org/browse/FHIR-30106)) [See Change Here](https://hl7.org/fhir/us/core/STU4/Procedure-rehab.html)

**Known issues:**

We are working to fix these issues that may come up when using US CORE.  We will correct them in a future version of the guide

Publishing

- [ ] **Resolved - change required**:Confusing for commercial vendor. Reads very confusing. ([FHIR-30783](https://jira.hl7.org/browse/FHIR-30783)) proposal is to make the differential tab the default view, see publishing plans [here](https://github.com/HL7/ig-template-base/issues/161)  timeline unknown.
- [ ] **Resolved - change required**:In most of the data elements – “Binding is from base FHIR and US Core Vital Signs”  Need this to be one single combined listing ([FHIR-30780](https://jira.hl7.org/browse/FHIR-30780)) proposal is to limit the terminology and invariants to view shown. see [Zulip chat](https://chat.fhir.org/#narrow/stream/179252-IG-creation/topic/Different.20views.20for.20tables.20and.20invariants) timeline unknown.
- [ ] **Resolved - change required**:Why are there separate codes for USCoreVitalSigns and the Systolic.value and the diastolic value? ([FHIR-30779](https://jira.hl7.org/browse/FHIR-30779)) proposal is to work with publishing to "clean up" terminology and invariants to view shown. see: see [Zulip chat](https://chat.fhir.org/#narrow/stream/179252-IG-creation/topic/Different.20views.20for.20tables.20and.20invariants) timeline unknown.

Terminology

- [ ] **Resolved - change required**: valueset-simple-language.xml QA error "Error from server: Language valuesets cannot be expanded as they are based on a grammar" ([FHIR-30107](https://jira.hl7.org/browse/FHIR-30107)) this error is still extant from prior version of US Core and has yet to be resolved. Work with publishing to fix and created [STU note](https://hl7.org/fhir/us/core/STU4/ValueSet-simple-language.html#notes). see [Zulip chat](https://chat.fhir.org/#narrow/stream/179252-IG-creation/topic/language.20valueset.20expansion.20error)
- [ ] **Resolved - change required**: Patient Examples QA Errors: CDCREC code system in VSAC Patient ([FHIR-30105](https://jira.hl7.org/browse/FHIR-30105)) CDCREC codes and code system value not aligned with VSAC. Workaround is to publish the [CDCREC code system and valuesets in USCore](https://hl7.org/fhir/us/core/STU4/terminology.html) until this content is moved to [HL7 Terminology](https://terminology.hl7.org/) Add an STU Note. [Zulip chat1](https://chat.fhir.org/#narrow/stream/179252-IG-creation/topic/cdcrec.20code.20errors.20in.20US.20Core) and [Zulip chat2](https://chat.fhir.org/#narrow/stream/179252-IG-creation/topic/Race.20Code.20System) and [Zulip chat3](https://chat.fhir.org/#narrow/stream/179202-terminology/topic/US.20CDCREC.20codessystems.20in.20HTA)
- [ ] **Resolved - change required**:imm-1.json NDC/CVX codes QA Error ([FHIR-30104](https://jira.hl7.org/browse/FHIR-30104)) Work with terminology server team to correct. see [Zulip chat](https://chat.fhir.org/#narrow/stream/179252-IG-creation/topic/CVX.20and.20NDC.20warnings.20in.20US.20Core)
- [ ] **Resolved - change required**:Pulse Ox Example: observation-satO2-fiO2 ([FHIR-27845](https://jira.hl7.org/browse/FHIR-27845)) Proposed Jira ticket to resolve in base made an [STU note](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-pulse-oximetry.html#mandatory-and-must-support-data-elements) that is technically not conformant with the base FHIR vital profile. See [Zulip chat](https://chat.fhir.org/#narrow/stream/179252-IG-creation/topic/US.20Core.20QA.20Issue.20.233-.20nasty.20profiling.20error)

---

### Version = 3.2.0
- Publication Date: 2021-1-30
- url: <https://hl7.org/fhir/us/core/2021Jan>
- Based on FHIR version : 4.0.1


#### Changes:
 The changes in this version have been voted on by the members of the sponsoring work group [HL7 International Cross-Group Projects](http://www.hl7.org/Special/committees/cgp/index.cfm).  This version addresses the following key issues:

1. Clarification of the Must Support definitions as it relates to:
  - Polymorphic datatypes, which of the possible types must be supported
  - Reference datatype (Reference, canonical) which of the target types must be supported
  - The vital signs profile in the Core Specification which profiles must be supported
  - New [Conformance Expectations](https://hl7.org/fhir/us/core/2021Jan/conformance-expectations.html) page
  (see individual trackers below for details)
1. Publishing a set US Core Vital Signs independent of the FHIR core profile upon which it is based (see individual trackers below for details)
  - [US Core Vital Signs Profile](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-vital-signs.html)
    - [US Core Blood Pressure Profile](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-blood-pressure.html)
    - [US Core BMI Profile](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-bmi.html)
    - [US Core Head Circumference Profile](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-head-circumference.html)
    - [US Core Body Height Profile](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-body-height.html)
    - [US Core Body Weight Profile](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-body-weight.html)
    - [US Core Body Temperature Profile](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-body-temperature.html)
    - [US Core Heart Rate Profile](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-heart-rate.html)
    - [US Core Respiratory Rate Profile](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-respiratory-rate.html)
1. Linking terminology directly to the FHIR® Terminology Service for VSAC Resources ([Value Set Authority Center (VSAC) - NIH](https://vsac.nlm.nih.gov/)) where applicable

  - We are seeking to resolve several technical and policy glitches when using VSAC directly prior to publishing which include the requirement to log in using your own UMLS API Key requiring a current UMLS account to view the value sets. [VSAC UMLS Licensing information](https://www.nlm.nih.gov/vsac/support/usingvsac/requestumlslicense.html).
  - To view the VSAC value set, use the link `https://vsac.nlm.nih.gov/valueset/{OID}/expansion` in your browser replacing the {OID} with the OID from the table below.
  - Enumerated (extensional) value sets can also be downloaded as a FHIR ValueSet resource. To do this, use the link `https://cts.nlm.nih.gov/fhir/ValueSet/{OID}` in your browser replacing the {OID} with the OID from the table below.
  - **NOTE that the Code System value used in FHIR® Terminology Service for VSAC Resources for Race and Ethnicity (CDCREC) concepts *does not* align with historical and current usage of OIDs in C-CDA and US Core. This issue has not been resolved in time for publication of the ballot version of this guide. As a result validation errors may occur when validating against this version of the US Core Patient Profile. Feedback on which code system value to use is welcome.**

    1. **US Core Value Set, VSAC Value Set, VSAC OID, extensional?**
    1. Detailed ethnicity, Detailed Ethnicity, 2.16.840.1.114222.4.11.877, No
    1. Detailed Race, Race, 2.16.840.1.113883.1.11.14914, No
    1. OMB Ethnicity Categories, Ethnicity, 2.16.840.1.114222.4.11.837, Yes
    1. US Core CareTeam Provider Roles, Care Team Member Function, 2.16.840.1.113762.1.4.1099.30, Yes
    1. US Core Medication Codes (RxNorm), Medication Clinical Drug, 2.16.840.1.113762.1.4.1010.4, Yes
    1. US Core Provider Specialty (NUCC), Healthcare Provider Taxonomy, 2.16.840.1.114222.4.11.1066, No
    1. US Core Smoking Status, Smoking Status, 2.16.840.1.113883.11.20.9.38, Yes
    1. US Core Vaccine Administered Value Set (CVX), CVX Vaccines Administered Vaccine Set, 2.16.840.1.113762.1.4.1010.6, Yes
    1. US Core Common substances for allergy and intolerance documentation including refutations, Common substances for allergy and intolerance documentation including refutations, 2.16.840.1.113762.1.4.1186.8, No

4. Migrating to the standard set of HL7 FHIR IG templates for publishing. Although we strove to minimize the differences between this version and the previous versions of US Core, these changes are notable:
   - Additional Features include:
        - Addition of vocabulary and constraint tables to the profile pages
        - Addition of a summary table and to the profile page introduction
        - Addition of "Snapshot Table (Must Support)" Tab to profile views
   - Due to restrictions on customizable content, the following features of prior versions are no longer available:
       - Full narrative text summaries of profiles  **NOTE: We are seeking feedback on whether to retain these full narrative text summaries for this guide (an example can be seen [here](https://hl7.org/fhir/us/core/StructureDefinition-us-core-allergyintolerance.html#formal-views-of-profile-content) by clicking on the "Text Summary" tab)***

5. Addressing over 95 outstanding trackers.


**Trackers items and links to the updated content**
listed below are the resolved trackers for this version:

1. Must Support Over Interpreted ([FHIR-28375](https://jira.hl7.org/browse/FHIR-28375)) Changes throughout the profiles -- added conformance page [See Change Here](https://hl7.org/fhir/us/core/2021Jan/conformance-expectations.html)

1. Replace the US Core Update Allergy substances value set with VSAC reference ([FHIR-29322](https://jira.hl7.org/browse/FHIR-29322)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-allergyintolerance.html)

1. Update Organization Quick Start Example Search. ([FHIR-29269](https://jira.hl7.org/browse/FHIR-29269)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-organization.html#quick-start)

1. birthsex binding applied to the wrong element in US Core Patient StructuredDefinition/differential ([FHIR-29262](https://jira.hl7.org/browse/FHIR-29262)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-patient.profile.json.html)

1. us-core-12 invariant interpretation ([FHIR-28942](https://jira.hl7.org/browse/FHIR-28942)) [See Changes Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-implantable-device.html#FHIR-28942)

1. Incorrect Description Observation.component (Pulse Ox) ([FHIR-28934](https://jira.hl7.org/browse/FHIR-28934)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-pulse-oximetry.html)

1. References should be constrained to use `reference` not `identifier` ([FHIR-28573](https://jira.hl7.org/browse/FHIR-28573)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/general-guidance.html#FHIR-28573)

1. Update USCorePatientName search description for consistency ([FHIR-28540](https://jira.hl7.org/browse/FHIR-28540)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-patient.html#quick-start)

1. Make Provenance.author optional ([FHIR-28517](https://jira.hl7.org/browse/FHIR-28517)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-provenance.html#FHIR-28516)

1. Add must support type choices for US Core Goal.target.due[x]. ([FHIR-28477](https://jira.hl7.org/browse/FHIR-28477)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-goal.html)

1. Immunization Profile Mandatory and Must Support Intro is missing attributes ([FHIR-28452](https://jira.hl7.org/browse/FHIR-28452)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-immunization.html#FHIR-28452)

1. DiagnosticReport-cardiology-report JSON and XML samples contain invalid hashes ([FHIR-28408](https://jira.hl7.org/browse/FHIR-28408)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/DiagnosticReport-cardiology-report.json.html)

1. MedicationRequest.medication[x] ([FHIR-28395](https://jira.hl7.org/browse/FHIR-28395)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-medicationrequest.html#FHIR-28395)

1. Fix MedicationRequest.encounter reference ([FHIR-28258](https://jira.hl7.org/browse/FHIR-28258)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-medicationrequest.html)

1. Fix typo: "an another" -> "another" ([FHIR-28227](https://jira.hl7.org/browse/FHIR-28227)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-practitioner.html)

1. Declare mustSupport on Organization telecom children ([FHIR-28216](https://jira.hl7.org/browse/FHIR-28216)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-organization.html)

1. Resolve remaining discrepancies with FHIR R4 Search Parameters ([FHIR-28181](https://jira.hl7.org/browse/FHIR-28181)) See Changes Here:
    - [1 SearchParameter-us-core-condition-onset-date](https://hl7.org/fhir/us/core/2021Jan/SearchParameter-us-core-condition-onset-date.html)
    - [2 SearchParameter-us-core-organization-name](https://hl7.org/fhir/us/core/2021Jan/SearchParameter-us-core-organization-name.html)
    - [3 SearchParameter-us-core-location-name](https://hl7.org/fhir/us/core/2021Jan/SearchParameter-us-core-location-name.html)

1. Provenance without activity is not very useful ([FHIR-28179](https://jira.hl7.org/browse/FHIR-28179)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-provenance.html#FHIR-28179)

1. Make Provenance.target.reference mandatory ([FHIR-28165](https://jira.hl7.org/browse/FHIR-28165)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-provenance.html)

1. Missing narrative Element ([FHIR-28159](https://jira.hl7.org/browse/FHIR-28159)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/Patient-example.html)

1. "Updated guidance regarding gender and sex." ([FHIR-28138](https://jira.hl7.org/browse/FHIR-28138)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-patient.html#FHIR-28138)

1. Replace the US Core Smoking Status with VSAC reference ([FHIR-28123](https://jira.hl7.org/browse/FHIR-28123),[FHIR-26059](https://jira.hl7.org/browse/FHIR-26059)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-smokingstatus.html)

1. Timing association for smoking status changed from `issued` to `effectiveDateTime` ([FHIR-28090](https://jira.hl7.org/browse/FHIR-28090)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-smokingstatus.html)

1. Remove Must Support from Patient.telecom ([FHIR-27731](https://jira.hl7.org/browse/FHIR-27731)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-patient.html#FHIR-27731)

1. Remove Must Support from Patient.communication.language ([FHIR-27730](https://jira.hl7.org/browse/FHIR-27730)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-patient.html#FHIR-27731)

1. Remove Must Support from us-core-birthsex extension ([FHIR-27729](https://jira.hl7.org/browse/FHIR-27729)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-patient.html#FHIR-27731)

1. Remove Must Support from  us-core-ethnicity extension ([FHIR-27728](https://jira.hl7.org/browse/FHIR-27728)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-patient.html#FHIR-27731)

1. Remove Must Support from  us-core-race extension ([FHIR-27727](https://jira.hl7.org/browse/FHIR-27727)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-patient.html#FHIR-27731)

1. Expand US Core state value set to include US Military codes ([FHIR-26833](https://jira.hl7.org/browse/FHIR-26833)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/ValueSet-us-core-usps-state.html)

1. Fixed Value Set Expansion Operation examples ([FHIR-26625](https://jira.hl7.org/browse/FHIR-26625)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/clinical-notes-guidance.html#FHIR-26625)

1. Add must support reference type choices for US Core laboratory DiagnosticReport.performer ([FHIR-25120](https://jira.hl7.org/browse/FHIR-25120)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-diagnosticreport-lab.html)

1. Fix US-Core-1 constraint on Observation.effectivePeriod ([FHIR-29658](https://jira.hl7.org/browse/FHIR-29658)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-observation-lab.html)

1. Change bindings from extensible to required for Condition.code value set: US Core Condition Category Codes Procedure.code value set: US Core Procedure Codes ([FHIR-29563](https://jira.hl7.org/browse/FHIR-29563)) See Changes Here:
      - [1 StructureDefinition-us-core-condition-definitions](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-condition.html)
      - [2 StructureDefinition-us-core-procedure-definitions](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-procedure.html)

1. Remove text "an author responsible for the update". Keep author organization ([FHIR-28516](https://jira.hl7.org/browse/FHIR-28516)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-provenance.html#FHIR-28516)

1. "Clarify expectations when accessing "other endpoint" for DocumentReference.content.attachment.url" ([FHIR-28472](https://jira.hl7.org/browse/FHIR-28472)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-documentreference.html#FHIR-28472)

1. Add a required category to smoking status ([FHIR-28436](https://jira.hl7.org/browse/FHIR-28436)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-smokingstatus.html#FHIR-28436)

1. Use of US Core Profile when not explicitly referenced when using Contained resources ([FHIR-28396](https://jira.hl7.org/browse/FHIR-28396)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/general-guidance.html#FHIR-28396)

1. DocumentReference.custodian to be Optional ([FHIR-28393](https://jira.hl7.org/browse/FHIR-28393)) [See *Proposed* Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-documentreference.html#FHIR-28393)

1. Encounter.serviceProvider Must Support and Encounter.location.location Optional ([FHIR-28392](https://jira.hl7.org/browse/FHIR-28392)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-encounter.html#FHIR-28392)

1. Observation.hasMember Vital Signs Panel Profile Reference Choice ([FHIR-28391](https://jira.hl7.org/browse/FHIR-28391)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/profiles-and-extensions.html#FHIR-28391)

1. Add must support type choices for Observation.value[x] for Lab Observation Profile ([FHIR-28390](https://jira.hl7.org/browse/FHIR-28390)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-observation-lab.html)

1. Add must support type choices for Observation.effective[x] for Lab Observation Profile ([FHIR-28389](https://jira.hl7.org/browse/FHIR-28389)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-observation-lab.html)

1. Add must support type choices for Immunization.occurrence[x] ([FHIR-28388](https://jira.hl7.org/browse/FHIR-28388)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-immunization.html)

1. Add must support type choices for DiagnosticReport.effective[x] for Note Data ([FHIR-28387](https://jira.hl7.org/browse/FHIR-28387)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-diagnosticreport-note.html)

1. Add must support type choices for DiagnosticReport.effective[x] for Lab Data Type ([FHIR-28385](https://jira.hl7.org/browse/FHIR-28385)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-diagnosticreport-lab.html)

1. Add must support reference type choices for Provenance.agent.who Reference ([FHIR-28383](https://jira.hl7.org/browse/FHIR-28383)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-provenance.html)

1. Add must support reference type choices for MedicationRequest.requester Reference ([FHIR-28382](https://jira.hl7.org/browse/FHIR-28382)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-medicationrequest.html)

1. Add must support reference type choices for MedicationRequest.reported Choice ([FHIR-28381](https://jira.hl7.org/browse/FHIR-28381)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-medicationrequest.html#FHIR-28381)

1. Add must support reference type choices for  DocumentReference.author Reference ([FHIR-28380](https://jira.hl7.org/browse/FHIR-28380)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-documentreference.html)

1. Add must support reference type choices for DiagnosticReport.performer for Note ([FHIR-28379](https://jira.hl7.org/browse/FHIR-28379)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-diagnosticreport-note.html)

1. Add must support reference type choices for DiagnosticReport.performer for Lab ([FHIR-28378](https://jira.hl7.org/browse/FHIR-28378)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-diagnosticreport-lab.html)

1. Add must support reference type choices for CareTeam.participant.member Reference ([FHIR-28376](https://jira.hl7.org/browse/FHIR-28376)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-careteam.html)

1. Add choice for and type choices for Encounter.reasonReference ([FHIR-27951](https://jira.hl7.org/browse/FHIR-27951)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-encounter.html#FHIR-27951)

1. Add choice for Procedure.performed[x] ([FHIR-29695](https://jira.hl7.org/browse/FHIR-29695)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-procedure.html)

1. Clarify deleted resources requirements and guidance ([FHIR-28091](https://jira.hl7.org/browse/FHIR-28091)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/general-guidance.html#FHIR-28091)

1. Clarify search by date precision conformance expectations ([FHIR-27906](https://jira.hl7.org/browse/FHIR-27906)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/general-guidance.html#FHIR-27906)
   - [General Guidance](https://hl7.org/fhir/us/core/2021Jan/general-guidance.html#FHIR-27906)
   - [Example in QuickStart](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-careplan.html#optional-search-parameters)
   - [Example in CapabilityStatement](https://hl7.org/fhir/us/core/2021Jan/CapabilityStatement-us-core-server.html#careplan)

1. Clarify search by reference conformance expectations ([FHIR-27905](https://jira.hl7.org/browse/FHIR-27905)) See Changes Here:
   - [General Guidance](https://hl7.org/fhir/us/core/2021Jan/general-guidance.html#FHIR-27905)
   - [Example in QuickStart](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-careplan.html#optional-search-parameters)
   - [Example in CapabilityStatement](https://hl7.org/fhir/us/core/2021Jan/CapabilityStatement-us-core-server.html#careplan)

1. Add "Cause of Death" to category codes to meet the Public Health Use Case for VRDR ([FHIR-27904](https://jira.hl7.org/browse/FHIR-27904)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/ValueSet-us-core-condition-category.html)

1. Address non-implantable device and how to document usage ([FHIR-27896](https://jira.hl7.org/browse/FHIR-27896), [FHIR-23715](https://jira.hl7.org/browse/FHIR-23715), [FHIR-23715](https://jira.hl7.org/browse/FHIR-23715)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/future-of-US-core.html#FHIR-27896)

1. Resource constraints based on Jurisdiction which are not well documented ([FHIR-27810](https://jira.hl7.org/browse/FHIR-27810)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-implantable-device.html#FHIR-27810)

1. Updated CPT copyright to current year ([FHIR-27770](https://jira.hl7.org/browse/FHIR-27770)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/ValueSet-us-core-encounter-type.html)

1. Change binding for CareTeam.participant.role from NUCC to Care Team Member Function, replace the US Core Careteam Provider Roles Value Set with VSAC reference ([FHIR-27769](https://jira.hl7.org/browse/FHIR-27769)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-careteam.html)

1. Remove US Core Server Capability Statement *requires* support for HTTP status 410-deleted ([FHIR-26597](https://jira.hl7.org/browse/FHIR-26597)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/CapabilityStatement-us-core-server.html#behavior)

1. Change US Core Condition Codes Value Set Logical Definition ([FHIR-26060](https://jira.hl7.org/browse/FHIR-26060)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/ValueSet-us-core-condition-code.html)

1. Recommend against using SSN for Patient.identifier ([FHIR-24903](https://jira.hl7.org/browse/FHIR-24903)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-patient.html#FHIR-24903)

1. Remove identifier (OID) from ValueSet: US Core Encounter Type ([FHIR-29691](https://jira.hl7.org/browse/FHIR-29691)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/ValueSet-us-core-encounter-type.html)

1. Review vocabulary to align with CCDA and use VSAC valueset where possible ([FHIR-22488](https://jira.hl7.org/browse/FHIR-22488)) See Changes Here:
    - [Detailed ethnicity --> Detailed Ethnicity](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-ethnicity.html#profile)
    - [Detailed Race --> Race](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-race.html#profile)
    - [OMB Ethnicity --> Categories\|Ethnicity](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-ethnicity.html#profile)
    - [US Core Medication Codes (RxNorm) --> Medication Clinical Drug](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-medicationrequest.html) and [here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-medication.html#Medication.code)
    - [US Core Provider Specialty (NUCC) --> Healthcare Provider Taxonomy](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-practitionerrole.html)
    - [US Core Vaccine Administered Value Set (CVX) --> CVX Vaccines Administered Vaccine Set](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-immunization.html)

1. Remove CVX-NDC mapping table ([FHIR-29745](https://jira.hl7.org/browse/FHIR-29745)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-immunization.html#FHIR-29745)

1. Since CarePlan.text.div is min== 1 add must support == true element to be consistent with US Core design ([FHIR-29765](https://jira.hl7.org/browse/FHIR-29765)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/StructureDefinition-us-core-careplan.html)

1. Remove unused US Core ICD-10-PCS Procedure Codes valueset ([FHIR-29822](https://jira.hl7.org/browse/FHIR-29822))

1. Remove Clinical Notes Guidance References to ONC 2019 NPRM and move requirements to main body ([FHIR-29824](https://jira.hl7.org/browse/FHIR-29824)) [See Change Here](https://hl7.org/fhir/us/core/2021Jan/clinical-notes-guidance.html)

---

### Version = 3.1.1 (Meets USCDI V1 requirements)
- Publication Date: 2020-6-30
- url: <https://hl7.org/fhir/us/core/STU3.1.1>
- Based on FHIR version : 4.0.1

#### Changes:
 This update addresses several technical corrections and errata and clarifications. They have been reviewed and voted on by the members of the [HL7 International Cross-Group Projects WorkGroup](http://www.hl7.org/Special/committees/cgp/index.cfm) who is sponsoring this errata release and reconciliation of the comments.:
1. Add guidance for representing patient name suffix and previous patient name to the [US Core Patient Profile](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient.html#mandatory-and-must-support-data-elements) ([FHIR-28129](https://jira.hl7.org/browse/FHIR-28129))
1. Correct copy/paste error in [Goal Profile](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-goal-definitions.html#Goal.lifecycleStatus) ([FHIR-28109](https://jira.hl7.org/browse/FHIR-28109))
1. Correct [US Core Provider Specialty (NUCC) ValueSet ](https://hl7.org/fhir/us/core/STU3.1.1/ValueSet-us-core-provider-specialty.html) to hide abstract grouping codes ([FHIR-27975](https://jira.hl7.org/browse/FHIR-27975))
1. Added example of US Core Direct Extension to [Practitioner-2 Example](https://hl7.org/fhir/us/core/STU3.1.1/Practitioner-practitioner-2.html) ([FHIR-27947](https://jira.hl7.org/browse/FHIR-27947))
1. Corrected technical errors in [pediatric profiles StructureDefinitions](https://hl7.org/fhir/us/core/STU3.1.1/profiles.html#profiles) ([FHIR-27946](https://jira.hl7.org/browse/FHIR-27946))
1. Corrected errors in [DiagnosticReport Cardiology Example](https://hl7.org/fhir/us/core/STU3.1.1/DiagnosticReport-cardiology-report.html) ([FHIR-27913](https://jira.hl7.org/browse/FHIR-27913))
1. Update [Federal Register link](https://hl7.org/fhir/us/core/STU3.1.1/ValueSet-omb-race-category.html) for OMB race and ethnicity category classifications. ([FHIR-27907](https://jira.hl7.org/browse/FHIR-27907))
1. Clarified [token search syntax](https://hl7.org/fhir/us/core/STU3.1.1/general-guidance.html#search-syntax) ([FHIR-27897](https://jira.hl7.org/browse/FHIR-27897)).
1. Corrected [US Core DocumentReference Profile](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-documentreference-definitions.html#DocumentReference.content) to support multiple attachments ([FHIR-25778](https://jira.hl7.org/browse/FHIR-25778)).
1. Fix FHIRPath Expression in [USCoreGoalTargetDate](https://hl7.org/fhir/us/core/STU3.1.1/SearchParameter-us-core-goal-target-date.html) ([FHIR-27892](https://jira.hl7.org/browse/FHIR-27892)).
1. Fix FHIRPath Expression in [USCoreProcedureDate](https://hl7.org/fhir/us/core/STU3.1.1/SearchParameter-us-core-procedure-date.html)([FHIR-27887](https://jira.hl7.org/browse/FHIR-27887)).
1. Add omitted ["ge" comparators to SearchParameters](https://hl7.org/fhir/us/core/STU3.1.1/SearchParameter-us-core-goal-target-date.html) ([FHIR-27893](https://jira.hl7.org/browse/FHIR-27893)).
1. [Remove Must Support References](https://hl7.org/fhir/us/core/STU3.1.1/general-guidance.html#referencing-us-core-profiles) to non US Core Profiles ([FHIR-27876](https://jira.hl7.org/browse/FHIR-27876))
1. Add missing [reaction](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-allergyintolerance-definitions.html#AllergyIntolerance.reaction) to the US Core AllergyIntolerance Profile ([FHIR-27867](https://jira.hl7.org/browse/FHIR-27867)).
1. Clarify [reference to US Core Patient](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-pediatric-bmi-for-age.html#mandatory-and-must-support-data-elements) in Vitals Signs Profiles ([FHIR-27857](https://jira.hl7.org/browse/FHIR-27857)).
1. Corrected [US Core Pulse Oximetry Profile](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-pulse-oximetry.html#formal-views-of-profile-content) component.valueQuantity.code and component.valueQuantity.unit min from 0 to 1 to be consistent with the valueQuantity constraints within US Core ([FHIR-27846](https://jira.hl7.org/browse/FHIR-27846))
1. Correct UCUM Unit in [US Core Pulse Oximetry Profile Text Summary](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-pulse-oximetry.html#summary-of-the-must-support-requirements) ([FHIR-27845](https://jira.hl7.org/browse/FHIR-27845))
1. Update [Procedure Codes Value Set](https://hl7.org/fhir/us/core/STU3.1.1/ValueSet-us-core-procedure-code.html) to include ICD-10 PCS codes ([FHIR-27836](https://jira.hl7.org/browse/FHIR-27836))
1. Update [Procedure Codes Value Set](https://hl7.org/fhir/us/core/STU3.1.1/ValueSet-us-core-procedure-code.html) to include CDT codes ([FHIR-27737](https://jira.hl7.org/browse/FHIR-27737))
1. Clarify that pediatric vital sign percentile Observations should [reference growth chart](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-pediatric-bmi-for-age.html#mandatory-and-must-support-data-elements) ([FHIR-27549](https://jira.hl7.org/browse/FHIR-27549)),
1. Added Missing [US core Head Occipital-frontal Circumference Percentile Profile](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-head-occipital-frontal-circumference-percentile.html) ([FHIR-27542](https://jira.hl7.org/browse/FHIR-27542)).
1. Correct requirements for supporting [CLIA identifiers](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-organization.html#mandatory-and-must-support-data-elements) ([FHIR-27158](https://jira.hl7.org/browse/FHIR-27158))
1. Change Description of [ICD-10-PCS Value Set](https://hl7.org/fhir/us/core/STU3.1.1/ValueSet-us-core-procedure-icd10pcs.html) ([FHIR-27116](https://jira.hl7.org/browse/FHIR-27116))
1. Correct [AllergyIntolerance guidance](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-allergyintolerance.html#mandatory-and-must-support-data-elements) for verificationStatus ([FHIR-27096](https://jira.hl7.org/browse/FHIR-27096))
1. Fix example [US Core heart-rate example](https://hl7.org/fhir/us/core/STU3.1.1/Observation-heart-rate.html) ([FHIR-27086](https://jira.hl7.org/browse/FHIR-27086))
1. **review period comments** Update [smoking status codes](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-smokingstatus-definitions.html#Observation.value[x]:valueCodeableConcept) to align with USCDI ([FHIR-27082](https://jira.hl7.org/browse/FHIR-27082)).
1. Fix invariant [provenance-1](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-provenance-definitions.html#who) ([FHIR-27065](https://jira.hl7.org/browse/FHIR-27065))
1. Fix invalid [json snippet](https://hl7.org/fhir/us/core/STU3.1.1/general-guidance.html#missing-data) ([FHIR-27001](https://jira.hl7.org/browse/FHIR-27001))
1. **review period comments** Remove Provenance requirement from Medication, Location, Practitioner, PractitionerRole, and Organization and correct copy and paste error to Medication and Provenance searchType support in [CapabilityStatement](https://hl7.org/fhir/us/core/STU3.1.1/CapabilityStatement-us-core-server.html#resource--details) ([FHIR-26840](https://jira.hl7.org/browse/FHIR-26840), [FHIR-28161](https://jira.hl7.org/browse/FHIR-28161)).
1. Correction on [USCDI Table](https://hl7.org/fhir/us/core/STU3.1.1/general-guidance.html#us-core-data-for-interoperability-and-2015-edition-common-clinical-data-set) change "MedicationStatement" to "MedicationRequest" and remove references to MedicationStatement in the Medication Profile and CapabilityStatements ([FHIR-26840](https://jira.hl7.org/browse/FHIR-26840)).
1. Clarify that US Core Location/PractitionerRole are [not being referenced](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-encounter.html#mandatory-and-must-support-data-elements) by other resources ([FHIR-26840](https://jira.hl7.org/browse/FHIR-26840)).
1. Correct editing error restoring Write and Operation capability guidance into [DocumentReference QuickStart](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-documentreference.html#quick-start) ([FHIR-26840](https://jira.hl7.org/browse/FHIR-26840)).
1. Clarify [guidance](https://hl7.org/fhir/us/core/STU3.1.1/general-guidance.html#search-for-servers-requiring-status) that servers SHALL support search with status if status required ([FHIR-26840](https://jira.hl7.org/browse/FHIR-26840)).
1. Correct canonical url for ImplementationGuide ([FHIR-26686](https://jira.hl7.org/browse/FHIR-26686)).
1. Correct system URI for [ICD-10 procedure codes](https://hl7.org/fhir/us/core/STU3.1.1/ValueSet-us-core-procedure-icd10pcs.html) ([FHIR-26679](https://jira.hl7.org/browse/FHIR-26679)).
1. Fix invariant [us-core-1](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-condition-definitions.html#Condition) ([FHIR-26605](https://jira.hl7.org/browse/FHIR-26605)).
1. Change valueCode min from 0 to 1 for [US Core Birth Sex Extension](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-birthsex-definitions.html#Extension.valueCode) and valueBoolean min from 0 to 1 for[US Core Direct email Extension](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-direct-definitions.html#Extension.valueBoolean) ([FHIR-26459](https://jira.hl7.org/browse/FHIR-26459)).
1. Change valueQuantity min from 1 to 0 for [US Core Pediatric BMI for Age Observation Profile](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-pediatric-bmi-for-age-definitions.html#Observation.valueQuantity) and [US Core Pediatric Weight for Height Observation Profile](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-pediatric-weight-for-height-definitions.html#Observation.valueQuantity) ([FHIR-26363](https://jira.hl7.org/browse/FHIR-26363)).
1. Add page contents to [Clinical Notes Guidance](https://hl7.org/fhir/us/core/STU3.1.1/clinical-notes-guidance.html) and [Basic Provenance](https://hl7.org/fhir/us/core/STU3.1.1/basic-provenance.html) pages ([FHIR-25785](https://jira.hl7.org/browse/FHIR-25785)).
1. Fix duplicate URL causing validation failure. ([FHIR-25536](https://jira.hl7.org/browse/FHIR-25536)).
1. Fix Invariant [us-core-8](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient-definitions.html#Patient.name) ([FHIR-25459](https://jira.hl7.org/browse/FHIR-25459)).
1. Corrected the wording "should support" to "shall support" in [Clinical Notes Guidance](https://hl7.org/fhir/us/core/STU3.1.1/clinical-notes-guidance.html#clinical-notes) ([FHIR-25455](https://jira.hl7.org/browse/FHIR-25455)).
1. Fix Invariant [us-core-8](https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient-definitions.html#Patient.name) to allow for Data Absent Reason Extension on Patient name.([FHIR-25249](https://jira.hl7.org/browse/FHIR-25249)).
1. Fix Link to LOINC LP29708-2 ([FHIR-25213](https://jira.hl7.org/browse/FHIR-25213)).
1. Corrected [guidance](https://hl7.org/fhir/us/core/STU3.1.1/all-meds.html#fetching-all-medications-active-medications-and-all-medications-for-an-encounter) for conveying "Patient-Reported medications" ([FHIR-25035](https://jira.hl7.org/browse/FHIR-25035))

---

<div class="bg-success" markdown="1">
To review changes to US Core versions earlier than 3.1.1, refer to the [USCore 7.0.0 Change Log](https://hl7.org/fhir/us/core/STU7/changes.html).
</div><!-- new-content -->

{% include link-list.md %}

---

// File: input/pagecontent/clinical-notes.md


​This section provides implementers with important definitions, requirements, and guidance on creating, using, and sharing Clinical Notes.

### Clinical Notes

Clinical notes are a key component in communicating a patient's current status. In the context of this implementation guide, the term "clinical notes" refers to the wide variety of documents generated on behalf of a patient in many care activities. They include notes to support transitions of care, care planning, quality reporting, billing, and even handwritten notes by providers. This implementation guide does not define new note types or set content requirements per note type. Instead, this implementation guide focuses on exposing clinical notes stored in existing systems.

This implementation guide defines how systems exchange <span class="bg-success" markdown="1">ten</span><!-- new-content --> "Common Clinical Notes" and three DiagnosticReport categories.

Servers **SHALL** support, at *minimum*, these <span class="bg-success" markdown="1">ten</span><!-- new-content --> "Common Clinical Notes":

  1. [Consultation Note (11488-4)]
  1. [Discharge Summary (18842-5)]
  1. [History & Physical Note (34117-2)]
  1. [Procedures Note (28570-0)] 
  1. [Progress Note (11506-3)]
  1. [Imaging Narrative (18748-4)]
  1. [Laboratory Report Narrative (11502-2)]
  1. [Pathology Report Narrative (11526-1)]
  1. <span class="bg-success" markdown="1">[Surgical Operation Note (11504-8)]</span><!-- new-content -->
  1. <span class="bg-success" markdown="1">[Emergency Department Note (34111-5)]</span><!-- new-content -->

Servers **SHALL** support, at *minimum*, these three DiagnosticReport categories:

  1. [Cardiology (LP29708-2)]
  1. [Pathology (LP7839-6)]
  1. [Radiology (LP29684-5)]

A DiagnosticReport category query allows a Client to retrieve multiple documents in a single query (see [Support Requirements](#support-requirements)).

The Argonaut project team provided this initial list to HL7 after surveying the Argonaut and the US Veterans Administration (VA) participants. They represent the *minimum* set a system must support to claim conformance to this guide. In addition, systems are encouraged to support other common notes types, such as:

* [Referral Note (57133-1)]
* [Surgical Operation Note (11504-8)]
* [Nurse Note (34746-8)]

The complete list of note (document) types is available in the [US Core DocumentReference Type Value Set].

### FHIR Resources to Exchange Clinical Notes

The [US Core DocumentReference Profile] and [US Core DiagnosticReport Profile for Report and Note exchange] support the exchange of clinical notes. (See  [Resource Selection](#resource-selection) for a complete discussion on the decision to use these resources.)

DocumentReference is the best choice when the narrative is broader than a specific order or report, such as a Progress Note or Discharge Summary Note. For example, the DocumentReference Resource can point to a short 2-3 sentence status of the patient or reference a complex CDA or Composition document, which can include *both* a narrative and discrete information.

DiagnosticReport is the best choice when a system needs to share discrete information or coded interpretations. The `DiagnosticReport.result` element supports the discrete data, and the `DiagnosticReport.presentedForm` element can represent the entire narrative report.

There is no single best practice for representing a scanned or narrative-only report due to the overlapping scope of the underlying resources and variability in system implementation. Reports may be represented by either a DocumentReference or a DiagnosticReport, as demonstrated by the green area in Figure 1. For example, some systems consider any scanned report or note a DocumentReference. Other systems allow users to categorize the scanned report as Lab and store it as DiagnosticReport.[^1]

{% include img-portrait.html img="DiagnosticReport_DocumentReference_Resource_Overlap.png" caption="Figure 1: DiagnosticReport and DocumentReference Report Overlap" %}

To enable consistent access to scanned DiagnosticReport clinical reports, the FHIR Server **SHALL** expose these overlapping scanned or narrative-only reports through *both* DiagnosticReport and DocumentReference by representing the same attachment URL using the corresponding elements listed below.[^2]  Exposing the content in this manner guarantees the Client will receive all the clinical information available for a patient and can easily identify duplicate data.

* `DocumentReference.content.attachment.url`
* `DiagnosticReport.presentedForm.url`

For example, when `DiagnosticReport.presentedForm.url` references a Scan (PDF), that Attachment **SHALL** also be accessible through `DocumentReference.content.attachment.url`.(See Figure 2) This guide requires servers to implement the duplicate reference to allow Clients to find Pathology reports or other Diagnostic Reports in either resource. If servers properly categorized scanned reports and used the correct resource per report type (e.g., Pathology scan in DiagnosticReport), this wouldn't be required. However, at the time of this IG's development, this duplication requirement is necessary due to a lack of consistency in the proper use of these resources.

{% include img.html img="both-url.jpg" caption="Figure 2: Expose a PDF Report Through Both DiagnosticReport and DocumentReference" %}

**Example JSON Snippets Referencing Common Binary in DocumentReference and DiagnosticReport**

DocumentReference:
```
{
  ...snip...
    "content": [
        {
            "attachment": {
                "contentType": "application/xhtml",
                "url": "http://example.org/fhir/Binary/1e404af3-077f-4bee-b7a6-a9be97e1ce32",
                "creation": "2005-12-24"
            }
        }
    ]
}
```
DiagnosticReport:
```
{
  ...snip...
   "presentedForm": [
        {
            "contentType": "application/xhtml",
            "url": "http://example.org/fhir/Binary/1e404af3-077f-4bee-b7a6-a9be97e1ce32",
            "creation": "2005-12-24"
        }
    ]
}
```


Not all scanned information stored through DocumentReference will be exposed through DiagnosticReport since DocumentReference stores other non-clinical information. For example, DocumentReference can point to an insurance card.

#### Support Requirements

This guide requires systems to implement the [US Core DocumentReference Profile] and to support a *minimum* of all <span class="bg-success" markdown="1">ten</span><!-- new-content -->  Common Clinical Notes listed above. Systems may extend their capabilities to the complete [US Core DocumentReference Type Value Set]. This requirement is necessary because some systems scan lab reports and don't store them in the DiagnosticReport resource. See [FHIR Resources to Exchange Clinical Notes](#fhir-resources-to-exchange-clinical-notes) for more detail.

This guide requires systems to implement the [US Core DiagnosticReport Profile for Report and Note exchange] and to support a *minimum* of the three report categories:

* [Cardiology (LP29708-2)]
* [Pathology (LP7839-6)]
* [Radiology (LP29684-5)]

Systems may support other categories as well.

The vendors that participated in developing this guide did not differentiate between the Diagnostic Report categories of Imaging and Radiology in their servers. Therefore, Client applications that query with category code of [Radiology (LP29684-5)] will receive Radiology and other imaging reports.

The following **SHOULD** be exposed via DiagnosticReport
* Imaging Narrative
* Laboratory Report Narrative
* Pathology Report Narrative
* Procedure Note

Servers that support DiagnosticReport will include the clinical note narrative content in `DiagnosticReport.presentedForm`.

A method for discovering the types of notes and reports that a server supports is described in the [Determining Server Note Type](#using-expand) section below.

Note that this guide focuses on exposing existing information, not how systems allow users to capture data. The contents of the notes or reports, even using standard LOINC concepts, may vary widely by the health system or location. For example, CT Spleen WO contrast (LOINC 30621-7) may include individual sections for history, impressions, conclusions, or just an impressions section. In addition, discharge Summaries may have different facility or regulatory content requirements.

#### Search

The standard FHIR [search] API retrieves clinical notes and reports. In this guide, the US Core [CapabilityStatement] and the *Quick Start* sections for the US Core Clinical Notes and Diagnostic Report and US Core DocumentReference Profiles define the required search parameters and describe how they are used.

Common Client search scenarios include:

1. A Client interested in all Radiology reports can use the following query:

   `GET [base]/DiagnosticReport?patient=[id]&category=http://loinc.org|LP29684-5`

1. A Client interested in all Clinical Notes can use the following query:

   `GET [base]/DocumentReference?patient=[id]&category=clinical-note`

1. A Client interested in all Discharge Summary Notes can use the following query:

  `GET [base]/DocumentReference?patient=[id]&type=http://loinc.org|18842-5`

<br/>

### Determining Server Note Type
{: #using-expand}

In addition to inspecting a server CapabilityStatement, a Client can determine the note and report types supported by a server by invoking the standard FHIR Value Set Expansion ([$expand]) operation defined in the **FHIR R4 specification**. Because servers may support different read and write formats, it is also used to determine the formats (for example, text, pdf) the server supports read and write transactions. Therefore, a FHIR server claiming support to this guide **SHOULD** support the $expand operation.

#### Discovering Note and Report Types

The note and report types for a particular server are discovered by invoking the #expand operation as follows:

`GET [base]/ValueSet/$expand?context=[context]&contextDirection=[contextDirection]`


Where:
- [contextDirection] = `incoming` for write operations and `outgoing` for read operations.
- [context] = 
   - `http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note#DiagnosticReport.category` for DiagnosticReport report category discovery
   -  `http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note#DiagnosticReport.code` for DiagnosticReport report type discovery
   - `http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference#DocumentReference.category` for DocumentReference note category discovery
   -  `http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference#DocumentReference.type` for DocumentReference note type discovery

**Examples**


{% include examplebutton.html example="note-and-report-types-scenario1" b_title = "Click on Here To See Scenario 1 Example" %}

{% include examplebutton.html example="note-and-report-types-scenario2" b_title = "Click on Here To See Scenario 2 Example" %}

{% include examplebutton.html example="note-and-report-types-scenario3" b_title = "Click on Here To See Scenario 3 Example" %}
{% include examplebutton.html example="note-and-report-types-scenario4" b_title = "Click on Here To See Scenario 4 Example" %}

#### Discovering Server Read and Write Formats

The read and write formats for a particular server are discovered by invoking the #expand operation as follows:

`GET [base]/ValueSet/$expand?context=[context]&contextDirection=[contextDirection]`

Where:
- [contextDirection] = `incoming` for write operations and `outgoing` for read operations.
 - [context] =
   - `http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note#DiagnosticReport.presentedForm.contentType` for DiagnosticReport report content type discovery.
   - `http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference#DocumentReference.content.attachment.contentType` for DocumentReference note content type discovery


 **Examples**

 {% include examplebutton.html example="read-and-write-format-scenario1" b_title = "Click on Here To See Scenario 1 Example" %}
 {% include examplebutton.html example="read-and-write-format-scenario2" b_title = "Click on Here To See Scenario 2 Example" %}

### Resource Selection

When reviewing the minimal number of elements required for each Resource, the [FHIR Version {{site.data.fhir.version}}]({{site.data.fhir.path}}index.html) specification includes several appropriate places to include clinical notes such as Composition, ClinicalImpression, DocumentReference, DiagnosticReport, etc.  The developers of this guide also considered creating a new ClinicalNotes resource.   They evaluated the following characteristics to differentiate which FHIR resource was most appropriate:

* Discrete result information
* Note types
* Consistent Client access to scanned or narrative-only reports

While several resources work well for a specific use case, they don't solve the question "find all Clinical Notes for a patient?", especially considering the variability of Note formats. For example, systems use text, XHTML, PDF, and CDA to capture clinical notes. This variability led the designers to select the DocumentReference and DiagnosticReport resources as index mechanisms to the underlying content. In other words, a Client can query one of these resources, and it will return a pointer to a specific resource or the underlying binary content.

For example, consider the following situation for a Discharge Summary Note:

* System A supports the Discharge Summary as a Composition resource
* System B supports the Discharge Summary as a CDA Document
* System C supports the Discharge Summary as a PDF Document

The following single query into DocumentReference supports all three scenarios:

  GET [base]/DocumentReference?patient=[id]&type=http://loinc.org|18842-5

The server returns either a pointer to the Composition or the Binary resource. If other more specific resources are developed for Clinical Notes, systems can update their pointers to the new resource.  

#### Clinical Notes vs ClinicalImpression

[ClinicalImpression] resource supports the record of a clinical assessment.

>
A record of a clinical assessment performed to determine what problem(s) may affect the patient before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation or encounter, but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score
>

However, in existing EHRs, the clinical impression is often contained within a broader note construct, and the Argonauts did not find the boundary between a clinical note and ClinicalImpression clear enough to leverage the resources to share clinical notes.

---

Footnotes

[^1]: Storing scanned reports as a DiagnosticReport, with appropriate categorization, enables Clients to access the scanned reports along with DiagnosticReports containing discrete information. For example, a Client can request all `DiagnosticReport.category`="LAB" and receive reports with discrete information and any scanned reports. However, not all systems store and categorize laboratory reports with DiagnosticReport.

[^2]: The developers of this guide considered requiring Clients to query *both* DocumentReference and DiagnosticReport to get all the information for a patient. However, the requirement to query two places is potentially dangerous if a Client doesn't understand or follow this requirement and queries only one resource type, potentially missing vital information from the other type.

{% include link-list.md %}


---

// File: input/pagecontent/conformance.md


- [General Requirements]
- [Must Support]
- [SMART on FHIR Obligations and Capabilities]

{% include link-list.md %}


---

// File: input/pagecontent/downloads.md

### Package File

The following package file includes an NPM package file used by many of the FHIR tools. It contains all the value sets, profiles, extensions, list of pages and URLs in the IG, etc., defined as part of this version of the Implementation Guides. This file **SHOULD** be the first choice whenever generating any implementation artifacts since it contains all the rules about what makes the profiles valid. Implementers must still be familiar with the specification content and profiles that apply to create a conformant implementation. See the [validating profiles and resources] documentation in FHIR for more information.

- [Package(compressed folder)](package.tgz){::download="true"}

### Downloadable Copy of Specification

A downloadable version of this IG is available so it can be hosted locally:

- [Downloadable Copy(compressed folder)](full-ig.zip)

### Examples

All the examples in this Implementation Guide are available for download:

- [XML(compressed folder)](examples.xml.zip)
- [JSON(compressed folder)](examples.json.zip)

### Consolidated CSV and Excel File Representations of Profiles

All the profile information for the {{site.data.fhir.ig.title}} in a single CSV or Excel file, which may be helpful to testers and analysts to review element properties across profiles in a single table:

- [CSV(compressed folder)](csvs.zip)
- [Excel(compressed folder)](excels.zip)

A table comparing all the Observation Profiles in US Core is also available for download:

- [Excel](observations-summary.xlsx)

### Schematrons

Schematrons are also available for download:

- [Schematrons(compressed folder)](schematrons.zip)

### Implementation Guide Details

The following link to the [ImplementationGuide] resource defines the technical details of this publication, including dependencies and  publishing parameters:

- [US Core ImplementationGuide Resource]

{% include link-list.md %}

---

// File: input/pagecontent/element-level-provenance.md

<!-- Using Provenance To Target Resource Elements input/pagecontent/element-level-provenence.md-->

<div class="stu-note" markdown="1">
This section is informative and not a requirement for systems conforming to the US Core Provenance Profile.
</div><!-- stu-note -->

Provenance typically communicates a single activity about one or more target resources identified via `Provenance.target`. However, it can focus on one or more resource *elements* using the FHIR [Target Element] extension on `Provenance.target` and identifying the target elements using [element ids]. For example, to document how and who supplied patient demographic data such as race and ethnicity, gender identity, and sexual orientation.

Example:

In the following [US Core Patient Profile] example, the patient demographic data such as race,ethnicity, etc.have *individual element ids* within a resource for internal and external referencing:

<!-- {% raw %} {% include examplebutton_default.html example="Patient-example-targeted-provenance.json" b_title = "Click Here to See Individual Element Ids Within a Patient Resource Example" %} {% endraw %} The ig-publisher does not render version specific examples see chat: https://chat.fhir.org/#narrow/channel/179252-IG-creation/topic/Version-specific.20examples -->

~~~
{
    "resourceType": "Patient",
    "id": "example-targeted-provenance/_history/1",
    "meta": {
        "versionId": "1",
        "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
        ]
    },
    "extension": [
        {
            "id": "race",
            "extension": [
                {
                    "url": "ombCategory",
                    "valueCoding": {
                        "system": "urn:oid:2.16.840.1.113883.6.238",
                        "code": "2106-3",
                        "display": "White"
                    }
                },
                {
                    "url": "text",
                    "valueString": "Mixed"
                }
            ],
            "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
        },
        {
            "id": "ethnicity",
            "extension": [
                {
                    "url": "ombCategory",
                    "valueCoding": {
                        "system": "urn:oid:2.16.840.1.113883.6.238",
                        "code": "2135-2",
                        "display": "Hispanic or Latino"
                    }
                },
                {
                    "url": "text",
                    "valueString": "Hispanic or Latino"
                }
            ],
            "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
        },
        {
            "id": "birthsex",
            "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
            "valueCode": "F"
        },
        {
            "id": "sex",
            "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-sex",
            "valueCode": "248152002"
        },
        {
            "id": "genderIdentity",
            "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-genderIdentity",
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
                        "code": "UNK"
                    }
                ]
            }
        }
    ],
    "identifier": [
        {
            "system": "http://hospital.smarthealthit.org",
            "value": "1032702"
        }
    ],
    "active": true,
    "name": [
        {
            "family": "Shaw",
            "given": [
                "Amy",
                "V."
            ]
        }
    ],
    "telecom": [
        {
            "system": "phone",
            "value": "555-555-5555"
        }
    ],
    "gender": "female",
    "_gender": {
        "id": "gender"
    },
    "birthDate": "1987-02-20",
    "address": [
        {
            "line": [
                "183 MOUNTAIN VIEW ST"
            ],
            "city": "MOUNDS",
            "state": "OK",
            "postalCode": "74048"
        }
    ]
}

~~~

The following  [US Core Provenance Profile] resource communicates who, how, and when elements such as Race and Ethnicity (R/E), gender identity, etc., were collected. Note that the [Target Element] Extension references the element id "race" within the Patient resource:

<!-- {% raw %} {% include examplebutton_default.html example="Provenance-example-targeted-provenance.json" b_title = "Click Here to See an Element Level Provenance Example" %} {% endraw %}
The ig-publisher does not render version specific examples see chat: https://chat.fhir.org/#narrow/channel/179252-IG-creation/topic/Version-specific.20examples 
-->

~~~
{
    "resourceType": "Provenance",
    "id": "example-targeted-provenance",
    "meta": {
        "versionId": "1",
        "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-provenance"
        ]
    },
    "target": [
        {
            "reference": "Patient/example-targeted-provenance/_history/1",
            "extension": [
                {
                    "url": "http://hl7.org/fhir/StructureDefinition/targetElement",
                    "valueUri": "race"
                }
            ]
        }
    ],
    "recorded": "2023-02-28T15:26:23.217+00:00",
    "agent": [
        {
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
                        "code": "informant",
                        "display": "Informant"
                    }
                ]
            },
            "who": {
                "reference": "Patient/example-targeted-provenance"
            }
        }
    ],
    "entity": [
        {
            "role": "source",
            "what": {
                "display": "admission form"
            }
        }
    ]
}
~~~

{% include link-list.md %}


---

// File: input/pagecontent/future-of-US-core.md


The US Core FHIR Profiles are designed to be the base set of requirements for FHIR implementation in the US. All US Realm implementation guides **SHALL** use the US Core Profiles or **SHALL** explicitly state why they are unable to use them. Throughout the development of US Core, implementers, the government, and the clinical community have brought forward additional requirements. This section outlines the approach to growth and a place for items that may be added to US Core.

### US Core Yearly Updates

<div class="bg-success" markdown="1">

Yearly US Core updates reflect [U.S. Core Data for Interoperability (USCDI)] changes and requests from the US Realm FHIR community.

The following table shows the relationship between each USCDI and US Core Version.
The USCDI version links to its respective ONC Standards Bulletin, which provides background and the new data classes and elements for the version.

{% include uscdi-uscore-version-table.md %}

Our yearly road map is outlined in the figure below:

</div><!-- new-content -->

{% include img.html img="yearly-updates.png" caption="Figure 1: US Core Yearly Updates" %}


### FHIR Version Support

US Core has been based on [FHIR Version R4] since US Core version 3.0.0. FHIR Version R4 was released on Dec 27, 2018, and was the first version with [Normative] content. HL7's [US Realm Steering Committee (USRSC)] directs US Realm activities, including this guide. In January 2024, the USRSC decided that the next version of FHIR that US Core will be based on will be the upcoming FHIR Version R6. As of the publication date, there is no timeline for this update. When we update to FHIR Version R6, these breaking updates to US Core are under consideration.

- Addition of MedicationStatement
- Mandate supporting PractionerRole


### Growth Path of US Core

The US Core Implementation Guide will grow following these steps:

{% include img.html img="US_Core_Growth_Path.jpg" caption="Figure 1: Growth Path of US Core" %}

1. Declare candidacy - this step can be completed by presenting a Project Proposal to the US Realm Steering Committee.
1. Get published - Develop a formal profile, an implementation guide, or get requirements directly published in  FHIR Core. The initial publication could be an outside consortium or vendor publication.
1. Pilot—Coordinate an in-person or virtual connectathon with three or more implementers. Testing and piloting are ways to identify issues with the new proposal.
1. Propose candidate for US Core to US Realm Steering Committee - receive formal approval from the US Realm SC to add.
1. Submit formal STU comments or propose through a ballot

A new US Regulatory requirement may skip some of these steps. However, regulators SHOULD be encouraged to complete pilot testing. Pilot testing makes it easier to understand how a change will affect real-world implementation.


### Future Candidate Requirements Under Consideration

Past Balloters, STU commenters, and Accelerator Project teams submitted the following items for consideration for adding US Core. Additional requirements gathering is required before testing may occur on these items:

#### Additional pilot Testing of UDI elements
In the January ballot 2019, we tested this process with the FDA, requesting that US Core include all the parts of UDI. In prior efforts, the FDA had successfully enhanced the base FHIR specification to include the UDI components.

#### [Device]
The US Core Implantable Device Profile is intended only for implantable devices. Please submit your successful implementation of a general non-implantable Device Profile (for example, software or crutches) for consideration in a future update of US Core.

#### [MedicationAdministration]
The US Core design assumes that access to the Active Medication List is through searching MedicationRequest. (See: https://build.fhir.org/ig/HL7/US-Core/medication-list-guidance.html.)  The orders (MedicationRequest) capture all the medications and whether they have been fulfilled. Medication Administration can be used as well, but systems will need to be careful to link to the appropriate MedicationRequest. Future versions of US Core may test and add MedicationAdministration.

#### Searching for Multiple Patients
Searching for multiple patients has been called out in the ONC Health IT Certification Program. Defining capabilities for multiple patient access would focus on querying real-time data for a user-facing provider app across patients. Examples of the type of queries that would be addressed include searching for all of a provider's patients:

- with recent lab results  
- currently in the Emergency Department
- with an Allergy to X
- being seen by a provider for the day

#### Timezones and Time Offsets
Clients face challenges displaying the source data's times and timezone regardless of the end user's current timezone. A solution is to define requirements and best practices for servers to preserve and represent time offsets and time zones.  

>A *timezone* is a geographical region in which residents observe the same standard time. A *time offset* is an amount of time subtracted from or added to Coordinated Universal Time (UTC) time to get the current civil time, whether it is standard time or daylight saving time (DST).[^1]

A common practice is to preserve the source data time offsets as the original offset or convert them to Coordinated Universal Time (UTC) time. Making this a requirement is one consideration. Another is adding server best practices for preserving source timezones using the FHIR standard [timezone extension]. A third is providing a Client algorithm for resolving time offsets and time zones.

#### Record or Update Data


Systems may use operations that create and update resources for any of the profiles in this IG. However, more guidance is needed on writing and updating data in the context of US Core Profiles to support consistency between implementations. Multiple issues will need to be considered when defining expected behavior by the various actors to support updates and writes to the data, including:

  - Defining the overall approach
    -  direct updates to a particular resource via FHIR RESTful transactions
    - new Profiles to represent the context and issue and request
  - Write failure scenarios (e.g., insufficient data to create)
  - Recording and updating data in the context of the Must Support fields
  - Indicating the source of the update


The Argonaut project has defined [Writing Vital Signs](vitals-write.html) for creating and updating vital sign Observations resources from patient-facing and provider-facing applications and expects to develop similar guidance for other Observation categories and resource types. After adequate testing by implementers, we will assess the feasibility of incorporating this guidance into the US Core API.


------------------------------------------------------------------------
Footnotes

[^1]: https://en.wikipedia.org/w/index.php?title=UTC_offset#Time_zones_and_time_offsets


{% include link-list.md %}


---

// File: input/pagecontent/general-guidance.md


### Referencing US Core Profiles

The search expectations and US Core Profiles have been developed and tested using *logical FHIR ids*.  Therefore, a [reference] to a US Core resource **SHOULD** include a logical id (`Reference.reference`), not an identifier (`Reference.identifier`).


FHIR resource elements of the [Reference] datatype reference other FHIR resources. For all references, US Core Responders **SHOULD** return resources that conform to a US Core profile if a US Core profile exists for the resource type. In some cases, US Core profiles explicitly constrain these references to point to the relevant US Core profile because the element is typically a *Must Support* or *Additional USCDI Requirements* element. For example, `CareTeam.subject` in [US Core CareTeam Profile] references the [US Core Patient Profile]. In other cases, referencing elements point to the base FHIR resource because they are not a *Must Support* or *Additional USCDI Requirements* element and, therefore, are unconstrained by US Core. (This is an editorial decision to simplify and improve the readability of the Profile rendering in this guide.) For example, although US Core does not constrain `Condition.asserter`, its reference to Patient or Practitioner **SHOULD** be a valid [US Core Patient Profile] or [US Core Practitioner Profile].


### Contained Resources

When responding to a query, Servers **SHOULD** not use inline [contained] resources to represent the returned data. A contained resource can only be used when the source data exists within the context of the FHIR transaction. For example, the guidance in the [Medication List] page describes how a contained Medication in MedicationRequest is used to represent the medication. In addition, if referencing a contained resource in a US Core Profile, the contained resource **SHOULD** be a US Core Profile if a US Core Profile exists for the resource type.  Further guidance about the general use case for contained can be found in the base FHIR specification.  


###  Suppressed Data

In situations where the specific piece of data is hidden for security or privacy reasons, using a code from the [DataAbsentReason Code System] such as `masked` may exceed the data receiver's access rights to know. However, masking data **SHOULD** be handled based on implemented policies. For elements with a minimum cardinality = 0 (including elements labeled **Must Support**), the element **SHOULD** be omitted from the resource. For *Mandatory* elements (in other words, where the minimum cardinality is > 0), use the code "unknown" following the guidance on [Missing Data] in the Conformance Sections.



### SNOMED CT United States Edition

[SNOMED CT] (Systematized Nomenclature of Medicine -- Clinical Terms) is a comprehensive clinical terminology widely used in healthcare to support the electronic exchange of clinical health information. US Core uses the US Edition of SNOMED CT, a standalone release that combines the content of the US Extension and the International releases of SNOMED CT. It is used extensively in US CORE for various clinical concepts, including problems, procedures, allergies, and laboratory results. When using SNOMED codes in US Core Profiles, implementers **MAY** use the default system URI, which refers to an unspecified edition/version, as shown in option one below. However, for terminology Servers to be able to validate US Edition-only codes, implementers  **SHOULD**  provide the accompanying system URI to describe the edition as shown in option two.

#### SNOMED CT Edition and Version Options

1. Using only the system `http://snomed.info/sct` refers to an unspecified edition/version. For example:
   
    ~~~
    "code": {
            "coding": [
                {
                    "system": "http://snomed.info/sct,
                    "code": "763875007",
                    "display": "Product containing sulfonamide (product)"
                }
            ],
            "text": "sulfonamide antibacterial"
        },
    ~~~

2. Using the system  *plus* the unspecified version US Edition URI `http://snomed.info/sct/731000124108`. For example:

    ~~~
    "code": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "version": "http://snomed.info/sct/731000124108",
                    "code": "763875007",
                    "display": "Product containing sulfonamide (product)"
                }
            ],
            "text": "sulfonamide antibacterial"
        },
    ~~~

  For more details, see [Using SNOMED CT with FHIR]. 


###  Using UCUM codes in the [Quantity] datatype

Some US Core Profiles bind the `Quantity.code` element in the Quantity datatype to the [UCUM] code system. For example, in the [US Core Laboratory Result Observation Profile], `Observation.valueQuantity`, `Observation.referenceRange.low`, and `Observation.referenceRange.high` are bound to UCUM. Systems should also use UCUM for the optional `valueRange` and `valueRatio` datatypes (which are complex datatypes with Quantity elements). A FHIR [UCUM Codes ValueSet] that defines all UCUM codes is in the FHIR specification. This guidance specifies how to represent the Quantity datatype when the correct UCUM units are missing or when the units are missing, which will likely occur in the real world.  

**UCUM code provided**

```
 "valueQuantity": {
    "value": 26.0,
    "unit": "g/mL",
   "system": "http://unitsofmeasure.org",
   "code": "g/mL"
  }
```

**free text units only**:
- If UCUM units are unavailable, represent units in the `unit` element.

```
 "valueQuantity": {
    "value": 26.0,
    "unit": "RR",
     }
```

**no units**

```
 "valueQuantity": {
    "value": 26.0
 }
```



### Representing Deleted Information

A FHIR Server **SHOULD** not delete records. A FHIR Server **SHOULD** update the appropriate resource status to `entered-in-error` or `inactive` (refer to the next section). If a system supports the deletion of records, they **SHOULD** refer to the [Deletion Safety Checks] in the FHIR specification.

### Representing Entered in Error Information

Clinical information entered in error in the patient's record needs to be represented by the FHIR Server so that Clients can expose the corrected information to their end users.

**Server Recommendations:**
- A FHIR Server **SHOULD** not delete resources.
- A FHIR Server **SHOULD** update the appropriate resource status to `entered-in-error` or `inactive`.
- A FHIR Server **SHOULD** allow these resources to be searchable by Client applications.
- If the FHIR Server has updated the resource status to `entered-in-error`:
    -  For *patient facing* applications, A FHIR Server **SHOULD** remove the resource's contents, leaving only an id and status.   Note that this typically will not conform to the US Core or FHIR StructureDefinitions.
    - For *provider-facing* applications,  the content may be supplied with content and additional detail (such as the reason for the status change) that the patient viewing system would typically not have access to.



### Narrative

The [US Core CarePlan Profile] requires a narrative summary of the patient assessment and plan of treatment. However, *any* US Core Profile can include a human-readable narrative containing a summary of the resource and may be used to represent the resource's content to a human.  For further guidance, refer to the [Narrative documentation] in the FHIR Specification.

### Language Support

There is a basic need to access records in your language, and the data provider **SHOULD** do their best to translate (safely) to the requested language. Understand that this will be variably complete depending on the nature of the record. For example, translating the following elements is relatively straightforward:

- `Coding.display`
- Generated narrative
- `Attachment.title`

The following guidelines outline requesting and returning a resource in the requested language.

* Clients MAY request language/locale using the http [`Accept-Language`] header.
* Servers **SHOULD** make reasonable efforts to translate what can be safely translated.
* Servers **SHOULD** populate the Resource's `language` element with a code based on the underlying language of record, *not* the requested language.
    * Using the [Human Language] Extension when the language of a display, etc, is known to differ from the stated (or inferred) language.

      Example
      ~~~
          <?xml version="1.0" encoding="UTF-8"?>
          <Patient xmlns="http://hl7.org/fhir">
              <id value="language-example-1"/>
              <meta>
              [...snip...]
              </meta>
              <language value=" es"/>
              <!--0..1 Language of the resource content, in this case, Spanish-->
              <text>
              [...snip...]
              </text>
              <extension url="http://hl7.org/fhir/us/core/StructureDefinition/us-core-race">
                  <extension url="ombCategory">
                      <valueCoding>
                          <system value="urn:oid:2.16.840.1.113883.6.238"/>
                          <code value=" 2106-3"/>
                          <display value="White">
                              <!--Human Language extension-->
                              <extension url="http://hl7.org/fhir/StructureDefinition/language">
                                  <valueCode value=" en"/>
                                  <!--English is different from stated language-->
                              </extension>
                          </display>
                      </valueCoding>
                  </extension>
              [...snip...]
      ~~~

* Using the [Translation] Extension when the Server provides additional translations by its own choice or in response to a different `Accept-Language` than what the resource is stored in.

    Example
    ~~~
        <?xml version="1.0" encoding="UTF-8"?>
        <Patient xmlns="http://hl7.org/fhir">
            <id value="language-example-2"/>
            <meta>
            [...snip...]
            </meta>
            <language value=" en"/>
            <!--0..1 Language of the resource content: English-->
            <text>
            [...snip...]
            </text>
            <extension url="http://hl7.org/fhir/us/core/StructureDefinition/us-core-race">
                <extension url="ombCategory">
                    <valueCoding>
                        <system value="urn:oid:2.16.840.1.113883.6.238"/>
                        <code value=" 2106-3"/>
                        <display value="White">
                        <!-- Translation -->
                        <extension
                             url="http://hl7.org/fhir/StructureDefinition/translation" >
                         <extension url="lang"> <!-- 1..1 Code for Language -->
                          <valueCode value="es"/><!-- 0..1 Value of extension -->
                         </extension>
                         <extension url="content"> <!-- 1..1 Content in other Language -->
                          <valueString value="Blanca">
                         </extension>
                        </extension>
                        </display>
                    </valueCoding>
                </extension>
                [...snip...]
    ~~~

* Servers **SHOULD** make it known what languages are supported in their CapabilityStatement(s) using this extension[^1]:

    `http://hl7.org/fhir/5.0/StructureDefinition/extension-CapablilityStatement.acceptLanguage`

For further guidance on language and locale for the generation of the resource narrative, see [Multi-Language support in FHIR (Localization/Internationalization)] in the core specification.

### Read (Fetch) Syntax

Fetching resource interactions are defined by the [FHIR RESTful API]. Guidance is included on the US core Profile pages for conformance and informative purposes:

 **`GET [base]/[Resource-type]/[id] {parameters}`**

-   GET is the HTTP verb used for fetching a resource
-   Content surrounded by \[\] is mandatory *for the Client* to supply and will be replaced by the string literal identified.
    -   base: The Service Root URL (e.g., "<https://fhir-open-api-dstu2.smarthealthit.org>”)
    -   Resource-type: The name of a resource type (e.g., "Patient")
    -   id: The Logical Id of a resource(e.g., "24342")
-   Content surrounded by {} is optional *for the Client* to supply and will be replaced by the string literal identified.
    -   parameters: URL parameters as defined for the particular interaction (e.g., "?\_format=xml"}

For more information, see the [FHIR RESTful API]

### Search Syntax

Searching resources is defined by the [FHIR RESTful API] and included here for informative purposes. The [US Core FHIR RESTful Search API] Section documents the Server and Client rules for the RESTful interactions described in this guide.

All the search interactions in this guide use the `GET` command with the following syntax:

 **`GET [base]/[Resource-type]?[parameter1]{:m1|m2|...}={c1|c2|...}[value1{,value2,...}]{&[parameter2]{:m1|m2|...}={c1|c2|...}[value1{,value2,...}]&...}`**

-   GET is the HTTP verb used for fetching a resource
-   Variables surrounded by "\[\]" are mandatory *for the Client* to supply and will be replaced by the string literal identified.
-   Variables surrounded by "\{\}" are optional *for the Client* to supply and will be replaced by the string literal identified.
    -   base: The Service Root URL (e.g., "<https://fhir-open-api-dstu2.smarthealthit.org>”)
    -  Resource-type: The name of a resource type (e.g., "Patient")
    -  parameter: the search parameters as defined for the particular interaction (e.g.,"?patient=Patient/123")
    -  value: the search parameter value for a particular search
       - When searching using the `token` type searchparameter [(how to search by token)], the syntax `{system|}[code]` means that the system value is optional *for the Client* to supply.:
       - When searching using the `reference` type SearchParameter [(how to search by reference)], the syntax `{Type/}[id]` means that the Type value is optional *for the Client* to supply:
       - When searching using the `date` type SearchParameter [(how to search by date)], the syntax `data={gt|lt|ge|le}[date]` means the date comparators "gt", "lt", "ge", and "le" are optional.   Date type searches without a comparator prefix are equivalent to searches with the "eq" comparator *even if* a Server does not support the comparator.
    - \{:m1|m2|...}: The list of supported search parameter modifiers
    - {c1|c2|...}: The list of supported search parameter comparators
    - {,value2,...}: Optional multiple 'OR' Values
    - {&parameter2={:m1|m2|...}={c1|c2|...}[value1{,value2,...}&...}: Optional multiple 'AND' search parameters


In the simplest case, a search is executed by performing a GET operation in the RESTful framework:

`GET [base]/[Resource-type]?name=value&...`

For this RESTful search, the parameters are a series of name=\[value\] pairs encoded in the URL. The search parameter names are defined for each resource. For example, the Observation resource has the name "code" for searching on the LOINC code.  For more information, see the [FHIR RESTful Search API].

Note that when the patient is *implicit* in the context of some implementations (e.g., using SMART), the patient parameter can be omitted:

`GET [base]/[Resource-type]{?other-parameters}`

### Searching Multiple Patients

Currently, most EHRs permit queries that provide a single patient resource id but do not support the comma-separated query or a query where the patient parameter is omitted, as described in the standard FHIR REST API. Instead, a user-facing app can perform multiple "parallel" queries on a list of patient ids.  Alternatively, the [FHIR Bulk Data Access (Flat FHIR)] specification can be used to perform a "back end" system-level query to access large volumes of information on a group of individuals. It can also be used to identify and query against an unknown population, such as when looking for population-based research data or population-level queries for public health surveillance.

However, neither specification defines how a user-facing provider app can seek real-time "operational" data on multiple patients (such as all patients with recent lab results). Opportunities to add this capability to this guide are discussed in [Future of US Core].



### Searching Using lastUpdated

Servers **SHOULD** support the [`_lastUpdated`] search parameter for US Core Profiles and **SHOULD** populate [`Meta.lastUpdated`] for US Core Profiles as accurately as possible. Servers **SHALL** document in `CapabilityStatement.rest.resource.searchParam.documentation` the types of changes that can be detected using the `_lastUpdated` search parameter (see example snippet below).

Example CapabilityStatement snippet for a Server supporting the `_lastUpdated` search parameter for US Core Laboratory Result Observation Profile 

~~~
{
"resourceType": "CapabilityStatement",
    ...
    "rest": {
      {
        "mode": "Server",
        ...
        "resource": [
            {
              "type": "Observation",
              "supportedProfile": [
                  "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
                  ...
                ],
                 ...
              "searchParam": [
                  {
                  "name": "_lastUpdated",
                  "definition": "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated",
                  "type": "date",
                  "documentation": "This parameter is supported for Observations with the category
                  \"laboratory\" and allows searching for Observations that have been created or the 
                  status updated since the specified date."
                  },
                  ...
                ]
            }
        ]
    }
}
~~~

<div class="stu-note" markdown="1">

Many Servers are unable to accurately populate the `Meta.lastUpdated` element. 

**Note to Clients:**
- Updates to `Meta.lastUpdated` may not reflect a change in the resource and resource updates may not result in updates to `Meta.lastUpdated`.
- `_lastUpdated` search results may not reflect changes Clients can access and all updates to a resource may not be returned using the `_lastUpdated` search. (in other words, false negatives and false positives `_lastUpdated` search results are possible).
- Updates to `Meta.lastUpdated` may reflect changes a Client can not access. (for example, the Client may not be authorized to see the changed data).
- Supporting `Meta.lastUpdated` in a resource does not imply support for searches using the `_lastUpdated` search parameter.
- Support for searches using the `_lastUpdated` search parameter does not require Servers to support `Meta.lastUpdated`; Servers can use an alternative method to track changes to an instance.

**Note to Servers:**
- Updating the timestamp too frequently is better than missing updates.

Work is in progress to enable [FHIR Topic-Based Subscription] for notifications on relevant events as an alternative to search polling.
</div><!-- stu-note -->

### Compartment Based Search

US Core Servers are not required to support patient [compartment] based searches.

### Across Platform Searches

US Core Servers are not required to resolve absolute URLs external to their environment.

### Limiting The Number Of Search Results

Servers can choose to return the results in a series of pages to manage the number of search results returned. The search result set contains the URLs used to request additional pages from the search set. For a simple RESTful search, the page links are included in the returned bundle as links. See the [managing returned resources] in the FHIR specification for more information.
<div class="bg-success" markdown="1">

### Client Best Practices for Search:

To reduce API volume and ensure reliable use when implementing FHIR RESTful searches:

1. When the Server supports it, Clients **SHOULD** use the _include search parameter to retrieve referenced content instead of searching for a resource and then performing a separate search for other references (for example, Patient, Encounter, and Location) in the result set.

2. If the Server does not support the `_include`  search parameter, Clients **SHOULD** consolidate duplicate searches before searching for referenced resources in the result set

3. The [HTTP Cache-Control](https://httpwg.org/specs/rfc9111.html) response header stores a response associated with a request and reuses the stored response for subsequent requests. If Cache-Control is present in the Server response headers, the Clients **SHOULD NOT** search the same data within the time stated in `Cache-Control` headers.
</div><!-- new-content -->

------------------------------------------------------------------------
<!--
[^1]: https://en.wikipedia.org/w/index.php?title=UTC_offset#Time_zones_and_time_offsets
-->
Footnotes:

[^1]: This extension is [converted from a new element] in a future version of CapabilityStatement.

[^2]: For example, the base Location resource is referenced by the US Core Encounter and US Core PractitionerRole resources.

{% include link-list.md %}


---

// File: input/pagecontent/general-requirements.md


This page documents requirements common to all US Core actors in this guide. The conformance verbs - **SHALL**, **SHOULD**, **MAY** - used in this guide are defined in [FHIR Conformance Rules].

<!-- This page defines how CapabilityStatements are used and the expectations for mandatory and Must Support elements in the US Core Profiles. It provides guidance on how a system may support *only* the resources as profiled by US Core to represent clinical information (Profile Support) versus a system claiming conformance to *both* the US Core Profile content structure *and* the RESTful interactions defined for it (Profile Support + Interaction Support).  Note that the conformance verbs - **SHALL**, **SHOULD**, **MAY** - used in this guide are defined in [FHIR Conformance Rules]. -->


### US Core Conformance Artifacts

The [Profiles and Extensions] page lists the US Core Profiles defined for this implementation guide.  US Core Profile [StructureDefinitions] define the *minimum* elements, extensions, vocabularies, and ValueSets that **SHALL** be present and constrains how the elements are used when using the profile. Each US Core Profile page has a "Quick Start" guide to the supported FHIR RESTfUL transactions for each profile.

The US Core Profile elements include *Mandatory*, *Must Support*, and *Additional USCDI Requirements*.  Mandatory elements are required and have a minimum cardinality of 1 (min=1). Must Support element Server and Client expectations are defined by US Core. Additional USCDI Requirements elements are neither Mandatory nor Must Support but designated USCDI Requirements for ONC Health IT Certification and, for certified systems, are equivalent to Must Support elements. All Mandatory, Must Support, or Additional USCDI Requirements are in scope for [ONC Health IT Certification] (g(10) certification) testing. The [Must Support] page defines the Server and Client expectations for processing these different element requirements and illustrates how they are displayed and documented.

The [Capability Statements] page outlines conformance requirements and expectations for the US Core Servers and Client applications. In addition, the [US Core Server CapabilityStatement] and [US Core Client CapabilityStatement] identify the specific profiles and RESTful transactions that need support. The US Core Profiles identify the structural constraints, terminology bindings, and invariants.  Similarly, each US Core SearchParameter and Operation resource specify how the Server understands them. However, implementers must refer to the CapabilityStatement for details on the RESTful transactions, specific profiles, and the search parameters applicable to each US Core actor.

### Conforming to US Core

There are two different ways to implement US Core:

1. Profile Only Support:  Systems may support *only* the US Core Profiles to represent clinical information.
1. Profile Support + Interaction Support: Systems may support *both* the US Core Profile content structure *and* the RESTful interactions defined for a resource.

#### Profile Only Support

Systems may deploy and support one or more US Core Profiles to represent clinical information. They use the profile's content model without any expectations to implement the US Core interactions.

An example scenario would be a Server using only the [FHIR Bulk Data Access (Flat FHIR)] approach to export the US Core Data for Interoperability resources.  For this Server, the US Core interactions are unnecessary.

To support a US Core Profile, a Server:

- **SHALL** Be able to populate all profile data elements that are mandatory and flagged as Must Support as defined by that profile's StructureDefinition.
- **SHOULD** declare support for a US Core Profile by including its official URL in the Server's `CapabilityStatement.rest.resource.supportedProfile` element.
    - The US Core Profile's official or "canonical" URL is located on each US Core Profile page

      example CapabilityStatement snippet for a Server supporting the US Core Patient Profile:
      ~~~
      {
        "resourceType": "CapabilityStatement",
        ...
        "rest": [
          {
            "mode": "Server",
            ...
            "resource": [
              ...
              {
                "type": "Patient",
                "supportedProfile": [
                  "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
                ],
                ...
              }
            ]
          }
        ]
      }
      ~~~

#### Profile Support + Interaction Support

Servers may deploy and support one or more US Core Profiles to represent clinical information *and* one or more of the following US Core interactions: 

- "Quick Start" defined for each Profile
- [Clinical Notes]
- [Medication List]
- [Basic Provenance]
- [Screening and Assessments]

Servers implementing both can claim conformance to the US Core Profile content structure and the RESTful interactions defined by implementing all or parts of the US Core CapabilityStatement into their capabilities as described below.
A Server that certifies to the [21st Century Cures Act for accessing patient data] must implement all components in the USCDI and the US Core CapabilityStatement.

##### Claiming conformance to a US Core Profile

 A conformant Server:


- **SHALL** Be able to populate all profile data elements that are mandatory and/or flagged as Must Support as defined by that profile's StructureDefinition.
- **SHOULD** declare conformance with the [US Core Server CapabilityStatement] by including its official URL in the Server's `CapabilityStatement.instantiates` element: `http://hl7.org/fhir/us/core/CapabilityStatement/us-core-Server`

- **SHALL** specify the full capability details from the US Core CapabilityStatement it claims to implement.
    - Declare support for the US Core Profile by including its official URL in the Server's `CapabilityStatement.rest.resource.supportedProfile` element.
      - the US Core Profile's official or "canonical" URL is located on each US Core Profile page.
    - Declare support for the US Core Profile's FHIR RESTful transactions.
      - The restful transactions for the US Core Profiles are documented in the "Quick Start" section on every profile page.
 

    Example CapabilityStatement snippet for a Server conforming to the US Core Patient Profile:

    {% include examplebutton_default.html example="conform-patient" b_title = "Click Here for an example CapabilityStatement snippet for a Server conforming to the US Core Patient Profile:" %}

### Using Codes in US Core Profiles

The following rules summarize the requirements defined by [FHIR Terminology] for coded elements (CodeableConcept, Coding, and code datatypes).

#### Required Bindings For Coded Elements

[Required binding] to a ValueSet definition means that one of the codes from the specified ValueSet **SHALL** be used. For `CodeableConcept`, which permits multiple codings and a text element, this rule applies to *at least* one of the codings, and only text is *not* valid.

For example, the [US Core AllergyIntolerance Profile] `clinicalStatus` element has a required binding to the AllergyIntoleranceClinicalStatusCodes ValueSet. Therefore, when claiming conformance to this profile:

- US Core Responders **SHALL** provide a code *exclusively* from this ValueSet in  `AllergyIntolerance.clinicalStatus.code`.
- US Core Requestors **SHALL** be capable of processing the code in `AllergyIntolerance.clinicalStatus.code`.

  {% include img.html img="Must_Support_AllergyIntolerance_clinicalStatus.png" caption="Figure 1: US Core AllergyIntolerance.clinicalStatus" %}

#### Required Bindings When Slicing by ValueSets

Because of the  FHIR conformance rule:

> If an extensible binding is applied to an element with maximum cardinality > 1, the binding applies to all the elements. ([Terminology Binding Extensible])

FHIR profiles use [slicing] when a coded element is a repeating element, and a particular ValueSet is desired for at least one of the repeats. This is a special case where a *required* ValueSet binding is used to differentiate the repeat.  In this guide, the minimum cardinality for these 'slices' is set to 0 so that other codes are allowed when no suitable code exists in the ValueSet (equivalent to  Extensible Binding below). *Note that slicing by valueset does not affect the over the wire structure or validation of instances of these resources.*  The example in Figure 2 below illustrates this structure for the repeating `DocumentReference.category` element:

- This structure allows 0..\* concept(s) from the *required* ValueSet.
- By being 0..\*, thie structure permits Servers to send concepts not in the required ValueSet.


  {% include img.html img="Must_Support_DocumentReference_category.png" caption="Figure 2: US Core DocumentReference.category" %}

#### Extensible Binding for Coded Elements

[Extensible Binding]  means that one of the codes from the specified ValueSet **SHALL** be used if an applicable concept is present.  If no suitable code exists in the ValueSet, alternate code(s) may be provided.  For `CodeableConcept`, which permits multiple codings and a text element, this rule applies to *at least* one of the codings. If only text is available and it has no conceptual overlap with the bound coded values, then just text may be used.

The [US Core AllergyIntolerance Profile] illustrates the extensible binding rules for the CodeableConcept datatype.  The `AllergyIntolerance.code` element has an extensible binding to the VSAC ValueSet "Common substances for allergy and intolerance documentation including refutations" Allergy. When claiming conformance to this profile:

- US Core Responders **SHALL** provide:
  - A code from this valueset in `AllergyIntolerance.code.code` *if the concept exists* in the ValueSet
  - Or an alternative code *if the concept does not exist* in the ValueSet
  - Or text in `AllergyIntolerance.code. text' if only text is available.
- US Core Requestors **SHALL** be capable of processing the code in `AllergyIntolerance.code.code` or text in `AllergyIntolerance.code.text`

  {% include img.html img="Must_Support_AllergyIntolerance_code.png" caption="Figure 3: US Core AllergyIntolerance.code" %}



#### Current Binding for Coded Elements

The FHIR rules for extensible bindings state that *all conceptual overlaps*, including free text, should be mapped to the coded values in the bindings. US Core adopts the [current] additional binding from FHIR R5 for more flexibility in exchanging legacy and text-only data. The current binding requires newly recorded, non-legacy data to be drawn from the value set.

For example, the [US Core Procedure Codes] and  [US Core Condition Codes] ValueSets cover the entire domain. For data not captured by fine-grained code, it is possible to provide a high-level abstract code, such as SNOMED CT "Procedure". Therefore, instead of requiring systems to map all legacy and text data to standard codes, the value set uses a "current" binding
 
<div class="stu-note" markdown="1">

The "current" binding corresponds to the US Core's interpretation of extensible bindings US Core version 6.1.0 and earlier.
</div><!-- stu-note -->

  {% include img.html img="Must_Support_Condition_code.png" caption="Figure 4: US Core Condition.code" %}



### Using multiple codes with CodeableConcept Datatype
{:.no_toc #translations}

Alternate codes may be provided in addition to the standard codes defined in required or extensible ValueSets. These alternate codes are called "translations". They may be equivalent to or narrower in meaning than the standard concept code.

Example of multiple translations for Body Weight concept code.

~~~
    "code": {
        "coding": [
         {
            "system": "http://loinc.org",  //NOTE: this is the standard concept defined in the ValueSet//
            "code": "29463-7",
            "display": "Body Weight"
          },
    //NOTE: this is a translation to a more specific concept
         {
            "system": "http://loinc.org",
            "code": "3141-9",
            "display": "Body Weight Measured"
          },
    //NOTE: this is a translation to a different code system (Snomed CT)
         {
            "system": "http://snomed.info/sct",
            "code": "364589006",
            "display": "Body Weight"
          }
    //NOTE: this is a translation to a locally defined code
         {
            "system": "http://AcmeHealthCare.org",
            "code": "BWT",
            "display": "Body Weight"
          }
        ],
        "text": "weight"
      },
~~~

Example of translation of CVX vaccine code to NDC code.

~~~
    "vaccineCode": {
        "coding": [
          {
            "system" : "{{site.data.fhir.path}}sid/cvx",
            "code": "158",
            "display": "influenza, injectable, quadrivalent"
          },
          {
            "system" : "{{site.data.fhir.path}}sid/ndc",
            "code": "49281-0623-78",
            "display" : "FLUZONE QUADRIVALENT"
          }
        ]
      },
~~~

### Modifier Elements

A FHIR [modifier element] is an element that modifies the meaning of a resource element. Although Servers and Clients **SHALL** be able to process  [Mandatory] or [Must Support] elements, not all modifier elements are  Mandatory or Must Support, and there is no requirement for supporting them. Therefore, FHIR Clients need to be aware of unexpected modifier elements in the data they receive because they can alter the meaning of the data and can potentially lead to errors or even security risks if not properly handled. In addition, modifiers can be introduced when the data is created, edited, or transmitted, so it is crucial to ensure that all modifiers are understood and handled correctly.

In addition to declaring which US Core profiles they support, Servers **MAY** communicate a system-wide profile in their CapabilityStatement to identify which additional elements, including modifier elements, they support. However, systems are free to include other data elements - and receivers **SHOULD** accept instances that even contain unexpected data elements *except* when those elements are modifier elements. Unless a Client determines they can process it safely, rejection is typically the only safe action if unexpected modifier elements are present. For example, an app or system may process modifier elements nested inside an ignored element or in a resource only for human review.

Some examples of modifiers that are not Must Support elements in US Core Profiles include:

- `implicitRules` element common to all profiles
- `modifierExtension` element common to all profiles
- `Observation.value[x].comparator`
- `Practitioner.identifier.use`
- `Patient.active`

Implementers **SHOULD** review the "Key Elements Tab" on the US Core profile pages. This view lists all the Must Support and modifier elements for a profile, as demonstrated in the figure below.

 {% include img.html img="modifier-element-view.png" caption="Figure 5: Modifier Elements Listed in Key Element View" %}

### Missing Data

There are situations when information on a particular data element is missing, and the source system does not know the reason for the absence of data. If the source system does not have data for an element with a minimum cardinality = 0 (including elements labeled *Must Support*), the data element **SHALL** be omitted from the resource. However, if the data element is a *Mandatory* element (in other words, where the minimum cardinality is > 0), it **SHALL** be present *even if* the source system does not have data. The core specification guides what to do in this situation, which is summarized below:

1.  For *non-coded* data elements, use the [DataAbsentReason Extension] in the data type
  - Use the code `unknown` - The value is expected to exist but is not known.

    Example: Patient resource where the patient name is not available.

    ~~~
    {
      "resourceType": "Patient",
           ...
           "name": [
             {
               "extension": [
                 {
                   "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                   "valueCode": "unknown"
                 }
               ]
             }
           ]
            "telecom":
            ...
         }
    ~~~

1. For *coded* data elements:
   - *example*, *preferred*, or *extensible* binding strengths (CodeableConcept or Coding datatypes):
      - If the source system has text but no coded data, only the `text` element is used.
          - For Coding datatypes, the text-only data is represented as a `display` element.
      - If there is neither text nor coded data:
        - Use the appropriate "unknown" concept code from the ValueSet if available.
        - If the ValueSet does not have the appropriate "unknown" concept code, use `unknown` from the [DataAbsentReason Code System].

      

        Example: CareTeam resource where the mandatory `CareTeam.participant.role` value is unknown.
        ~~~
        ...
        "participant": [
            {
                "role": [
                    {
                        "coding": [
                            {
                                "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                                "code": "unknown",
                                "display": "unknown"
                            }
                        ]
                    }
                ],
                "member": {
                    "reference": "Practitioner/practitioner-1",
                    "display": "Ronald Bone, MD"
                }
            },
        ...
        ~~~


   - *required* binding strength (CodeableConcept or code datatypes):
      - use the appropriate "unknown" concept code from the ValueSet if available
      - if the ValueSet does not have the appropriate "unknown" concept code, you must use a concept from the ValueSet. Otherwise, the instance will not be conformant

        - For the US Core profiles, the following mandatory or conditionally mandatory* status elements with required binding have no appropriate "unknown" concept code:
          - `AllergyIntolerance.clinicalStatus`*
          - `Condition.clinicalStatus`*
          - `DocumentReference.status`
          - `Immunization.status`
          - `Goal.lifecycleStatus`

        *The `clinicalStatus` element is conditionally mandatory based on resource-specific constraints.

        If any of these status codes is missing, a `404` HTTP error code and an OperationOutcome **SHALL** be returned in response to a read transaction on the resource. If returning a response to a search, the problematic resource **SHALL** be excluded from the search set, and a *warning* OperationOutcome **SHOULD** be included indicating that other search results were found but could not be compliantly expressed and have been suppressed.

### FHIR RESTful Search API Requirements

The [FHIR RESTful Search API] requires that Servers that support search **SHALL** support the HTTP `POST`-based search. For all the supported search interactions in this guide, Servers **SHALL** also support the `GET`-based search.

- When searching using the `token` type searchparameter  [(how to search by token)]
    - The Client **SHALL** provide at least a code value and **MAY** provide both the system and code values.
    - The Server **SHALL** support both.
- When searching using the `reference` type searchparameter  [(how to search by reference)]
    - The Client **SHALL** provide at least an id value and **MAY** provide both the Type and id values.
    - The Server **SHALL** support both.
- When searching using the `date` type searchparameter [(how to search by date)]:
    - The Client **SHALL** provide values precise to the *day* for elements of datatype `date` and to the *second + time offset* for elements of datatype `dateTime`.
    - The Server **SHALL** support values precise to the *day* for elements of datatype `date` and  to the *second + time offset* for elements of datatype `dateTime`.

    The table below summarizes the date precision:

    |SearchParameter|Element Datatype|Minimum Date Precision|Example|
    |---|----|---|---|
    |date|date|day|`GET [base]/Patient?family=Shaw&birthdate=2007-03-20`|
    |date|dateTime, Period|second + time offset|`GET [base]Observation?patient=555580&category=laboratory&date=ge2018-03-14T00:00:00-08:00`|
    {:.grid}

### Search for Servers Requiring Status

Servers are *strongly* encouraged to support a query for resources *without* requiring a status parameter.  However, if business requirements prohibit this, they **SHALL** follow the guidelines here.
{: .highlight-note}

For searches where the Client does not supply a status parameter, an implementation's business rules may override the FHIR RESTful search expectations and require a status parameter to be provided.  These systems are allowed to reject such requests as follows:

- **SHALL** return an HTTP `400` status
- **SHALL** return an [OperationOutcome] specifying that status(es) must be present.
- **SHALL** support search with status if status required
- **SHALL NOT** restrict search results ( i.e., apply 'hidden' filters) when a Client includes status parameters in the query.
  - If a system doesn't support a specific status code value that is queried, it  **SHOULD** return an HTTP `200` status with a search bundle. The search bundle **SHOULD** contain resources matching the search criteria *and* an OperationOutcome warning the Client which status code value is not supported.

   - For example, in a query enumerating all the `AllergyIntolerance.verificationStatus` statuses to a system that supports concepts `unconfirmed`, `confirmed`, and `entered-in-error` but not the concept `refuted`, the search parameter refers to an unsupported code since `refuted` is not known to the Server.

     {% include examplebutton_default.html example="missing-status" b_title = "Click Here to See a Rejected Search Due to Missing Status Example" %}

- **SHALL** document this behavior in its CapabilityStatement for the "search-type" interaction in `CapabilityStatement.rest.resource.interaction.documentation`.
- For "entered-in-error" status, see the [representing entered in error information](general-guidance.html#representing-entered-in-error-information) section.

<br />

{% include link-list.md %}


---

// File: input/pagecontent/guidance.md


- [USCDI]
- [General Guidance]
- [Clinical Notes]
- [Medication List]
- [Basic Provenance]
- [Social Determinants of Health (SDOH)]
- [Changes Between Versions]
- [Future of US Core]
   - [Writing Vital Signs]

{% include link-list.md %}


---

// File: input/pagecontent/ImplementationGuide-hl7.fhir.us.core.md


|||
|---|---|
|*Official URL*: {{ site.data.ig.url }}|*Version*: {{ site.data.ig.version }}|
|*NPM package name*: {{ site.data.ig.packageId }}|*ComputableName*: {{ site.data.ig.name }}|
|*Copyright/Legal*: Used by permission of HL7 International, all rights reserved Creative Commons License|
{:.grid}

{{ site.data.ig.description }}

- [XML](ImplementationGuide-{{site.data.ig.id}}.xml)
- [JSON](ImplementationGuide-{{site.data.ig.id}}.json)

### Cross Version Analysis

{% capture cross-version-analysis %}{% include cross-version-analysis.xhtml %}{% endcapture %}{{ cross-version-analysis | remove: '<p>' | remove: '</p>'}}

### IG Dependencies

This IG Contains the following dependencies on other IGs.

{% include dependency-table.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### Copyrights

{% capture ip-statement %}{% include ip-statements.xhtml %}{% endcapture %}

{{ ip-statement | remove: '<p>' | remove: '</p>'}}


### Parameter Settings

The following [IG Parameters](https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters) are set for this Implementation Guide:

{% for p in site.data.ig.definition.parameter -%}
- code: {{p.code}}<br/>value: {{p.value }}
{% endfor %}


---

// File: input/pagecontent/index.md

<div class="note-to-balloters" markdown="1">

**The January 2025 ballot addresses the following**

{% include whats-new-v8-ballot.md %}

</div><!-- note-to-balloters -->

Where possible, new and updated pre-publishing content is highlighted with green text and background- **This highlighting will be removed prior to publication.**
{:.new-content}

Key updates and detailed changes between this and prior versions are available on the US Core [Change Log] and [Changes Between Versions] pages.
{:.stu-note}

### Introduction

This guide and the US Core profiles have become the foundation for US Realm FHIR implementation guides. This annual release reflects changes to [U.S. Core Data for Interoperability (USCDI)] and comments and requests from the US Realm FHIR community. (The [Future of US Core] page outlines this approach to yearly updates.)  US Core has benefitted from testing and guidance by the Argonaut Project Team. Their feedback continues to lay the groundwork for documenting the US Core Profile design, interactions, requirements, and guidelines for patient data access and ONC Certification testing. Under the guidance of HL7 and the HL7 US Realm Steering Committee, the content will expand in future versions to meet the needs specific to the US Realm.

The US Core Implementation Guide is based on [FHIR Version R4]. It defines the minimum constraints on the FHIR resources to create the US Core Profiles. The elements, extensions, vocabularies, and value sets that SHALL be present are identified, and how they are used is defined.  It also documents the minimum FHIR RESTful interactions for each US Core Profiles to access patient data. Establishing the "floor" of standards to promote interoperability and adoption through common implementation allows for further standards development evolution for specific use cases. There are two different ways to implement US Core:
1. Profile Only Support: Systems may support *only* the US Core Profiles to represent clinical information.
2. Profile Support + Interaction Support: Systems may support *both* the US Core Profile content structure *and* the RESTful interactions defined for a resource.

For a detailed description of these different usages of US Core, see the [Conformance Requirements] page.

### Background

The US Core requirements were initially developed, balloted, and published in FHIR DSTU2 as part of the [Office of the National Coordinator for Health Information Technology (ONC)] sponsored Data Access Framework (DAF) project. The Argonaut Data Query Implementation Guide superseded DAF and documented security and authorization and the querying of the [2015 Edition Common Clinical Data Set (CCDS)] and static documents. US Core descended directly from the Argonaut guide to support FHIR Version STU3 and eventually FHIR R4 and The ONC [U.S. Core Data for Interoperability (USCDI)].

### How To Read This Guide

This Guide is divided into several pages, which are listed at the top of each page in the menu bar.

- [Home]\: The home page provides the introduction and background for US Core.
- [Conformance]\: These pages describe the set of rules to claim conformance to this guide
  - [General Requirements]\: This page defines requirements common to all actors and profiles used in this guide, including how CapabilityStatements are used to claim conformance.
  - [Must Support]\: This page defines the expectations for mandatory and Must Support elements in the US Core Profiles.
- [Guidance]\: The Guidance pages document best practices and how to use the profiles and transactions defined in this guide.
  - [USCDI]\: This page maps the US Core Profiles to the (USCDI) data classes and data elements.
  - [General Guidance]\: This page provides guidance, definitions, and requirements common to all actors and profiles used in this guide.
  - [Clinical Notes]\: This page provides guidance on the interactions between Consumers and Producers of clinical notes.
  - [Medication List]\: This page provides guidance on how a patient or provider can access a patient's medications.
  - [Basic Provenance]\: This page provides implementers with important definitions to create and share the Provenance Resource.
  - [Screening and Assessments]\: This page documents how US Core Profiles are used to represent screenings and assessments for patient health status
  - [Changes Between Versions]\: This page considers the user and developer experience when transitioning between versions of US Core and documents the changes between versions.
  - [Future of US Core]\: This page outlines the approach to adding new content to US Core.
- [FHIR Artifacts]\: These pages provide detailed descriptions and formal definitions for all the FHIR objects defined in this guide.
  - [Profiles and Extensions]\: This page lists the US Core Profiles and Extensions defined in this guide to exchange quality data.
    - Each US Core Profile page includes a narrative description that lists all the [Mandatory] and [Must Support] data elements, profile-specific implementation guidance, and formal definitions. A "Quick Start" guide summarizes the supported search transactions for each profile. Although the guidance typically focuses on the profiled elements, it also may cover un-profiled elements to aid with implementation and certification.
  - [Search Parameters and Operations]\: This page lists the defined US Core Operations and Search Parameters used in US Core transactions.
  - [Terminology]\: This page lists the US Core ValueSets, and CodeSystems defined for the profiles.
  - [Capability Statements]\: These pages define the expected FHIR capabilities of the US Core Servers and Clients.
- [Security]\: This page documents the general security requirements and recommendations for actors.
- [Examples]\: This page lists all the examples used in this guide. {% include nonnormative-example-boilerplate.md -%}
- [Downloads]\: This page provides links to downloadable artifacts.
- [Change Log]\: This page documents the changes across the versions of US Core

### US Core Actors

The following actors are part of the US Core IG:

#### US Core Requestor
A US Core Requester is an application that initiates a data access request to retrieve patient data. The US Core Requestor is the Client in a Client-Server interaction. The terms "US Core Requestor" and "Client" are used interchangeably throughout this guide and are not meant to limit this actor to only patient and provider apps. For example, payers and other users can use the same technology. These terms are a short-hand notation for "user application".

#### US Core Responder
A US Core Responder is a system that responds to the data access request providing patient data. The US Core responder is the Server in a Client-Server interaction. The terms "US Core Responder", "Server", and "EHR" are used interchangeably throughout this guide and are not meant to limit this actor to electronic health record systems. For example, HIEs, care coordination platforms, population health systems, etc., can use the same technology. These terms are a short-hand notation for "interoperable healthcare platform".

### US Core Profiles

Below is the list of US Core Profiles. Each profile identifies which core elements, extensions, vocabularies, and ValueSets **SHALL** be present in the resource when using this profile. Together, they promote interoperability and adoption through common implementation and provide the floor for standards development for specific use cases. See the [USCDI] page, for a mapping to the U.S. Core Data for Interoperability (USCDI).

A simple narrative summary gives each profile's requirements and guidance. A formal hierarchical table presents a [logical view] of the content in both a differential and snapshot view, and provides references to appropriate terminologies and examples.

<!-- ================================================ -->
<!--  use this line to include an autogenerated list of all profiles
 remove it if you would like to hand generate it -->

{% include sd-list-generator.md %}

<!-- ================================================ -->

### US Core FHIR RESTful interactions

For systems that support the US Core Profile content structure and the RESTful interactions defined for a resource, the requirements are formally defined in the US Core CapabilityStatements. In addition, each profile page has a *Quick Start* Section that documents the required FHIR RESTful search and read operations. These sections demonstrate how to access a patient's clinical and administrative data:

{% include img-med.html img="basic_fhir_restful_interaction.svg" caption="Example of a simple FHIR RESTful Search Transaction" %}

See the FHIR specification for details on [FHIR RESTful Search API] and the [SMART App Launch] for how an application gets access to a patient record.

---

Primary Authors: Brett Marquard, Eric Haas, Gay Dolin

{% include link-list.md %}

---

// File: input/pagecontent/medication-list.md


The guidance below addresses how a patient or a provider can access a patient's active, historical, and future (planned) medications list. This use case adopts the use cases defined as part of the Argonaut Project and US Core, specifically within the scope of accessing medication information prescribed in the ONC U.S. Core Data for Interoperability (USCDI).
This section provides specific guidance on accessing "all medications" and "all active medications" for a patient using a query on *MedicationRequest*. Note that a query on *MedicationStatement* was required in prior versions of this guide. Because of underlying changes in the FHIR Release 4 pharmacy resources, this guide doesn't require the use of *MedicationStatement* since an "active" medication list can be obtained using only MedicationRequest.[^1]

### Background on the FHIR Medications resources

#### Pharmacy FHIR Resources
{:.no_toc}

The FHIR specification defines five FHIR pharmacy resources concerned with the ordering, dispensing, administering, and recording of medications. This guide documents accessing a patient's medications using the following three resources:

  - [Medication]\:  Represents the medication itself
  - [MedicationRequest]\: An order or request for the supply of the medication and the instructions for administration of the medication to a patient, and patient reported medications.
  - [MedicationDispense]\: Provision a medication with regards to dispensing in response to a prescription

The following two medication resources are not profiled by US Core, and systems that support US Core are permitted to use them.   They are introduced here to provide background and define the relationships between the pharmacy resources. **However, as documented in the section below, the US Core Guidance for accessing a patient's medications does not use them:** 

  - [MedicationAdministration]
  - [MedicationStatement]

The FHIR specification details each resource. The FHIR [Medications Module] and the [Guide to Resources] Sections describe the interaction between these resources in general.

#### Relationships Between the Pharmacy FHIR Resources
{:.no_toc}

This IG focuses on access to a patient's medications. Therefore, it is essential to understand the relationships between these resources. Figure 1 illustrates the workflow relationship between the medication order and the fulfillment represented by the FHIR medication resources. Note that in the outpatient setting, the patient does the administration.

{% include img.html img="ArgoR4Meds_1.svg" caption="Figure 1: FHIR Medication Order and Fulfillment" %}

#### Sources of a MedicationRequest

 Several sources may be used to create a MedicationRequest, as is shown in Figure 2 below. The information may be captured directly by a system's medication order or reported by a provider. A patient or related person may also report the information (or provide some record), including "self-prescribed" orders. For example, the patient is often the *only* source of information when the patient reports Cannabis or OTC medication use.

{% include img.html img="ArgoR4Meds_3.svg" caption="Figure 2: MedicationRequest Information Sources" %}

#### Options for Representing Medication

 This guide supports representing a medication using a code or a reference to a Medication resource. Typically, a code will be for a branded (for example, Crestor 10mg tablet) or a generic (for example, Rosuvastatin 10mg tablet) medication. When using a code, the code  **SHALL** follow the [extensible] binding rules to [Medication Clinical Drug (RxNorm)] - i.e., unless RxNorm does not cover the concept, the RxNorm code **SHALL** be used. USCDI recommends the [National Drug Codes (NDC)] as an optional medication terminology. They can be supplied as an additional coding element. More information about using codes can be found in the [General Guidance] and the [FHIR Terminology] sections. A medication resource is typically used when information not included in the RxNorm code is required. For example, the Medication resource is the only way to represent compounded correctly or extemporaneously prepared medication. When referencing the Medication resource, the resource may be included in the returned bundle, as an external resource, or as a [contained] resource if it can't stand alone. These options are shown in Figure 3 below. The Server application **MAY** choose any combination of these methods, but if an external reference to Medication is used, the Server **SHALL** support the [`_include`] parameter for searching this element. The Client application **MUST** support all methods. The [MedicationRequest examples] show these different methods. Additional guidance is provided below and in the [US Core Server CapabilityStatement] section.

{% include img.html img="ArgoR4Meds_4.svg" caption="Figure 3: Ways to Represent the Medication" %}

### Fetching All Medications, Active Medications, and All Medications for an Encounter

**Definitions**

- "Medication" is defined in this IG to include all prescribed and "self-prescribed" medications directly ordered by a provider or reported by the provider, patient, or related person. It includes ethical drugs, over-the-counter (OTC) medication, and other substances taken for medical and recreational use.
- "All medications" is defined in this IG to include all historical, active, and future prescribed medications and medications entered in error and whose status is unknown.
- "Active medications" is defined in this IG as including all medications with an active status. Active medications do not include past, future, unknown status, and entered-in-error medications.

*Note that these definitions do not convey compliance  -  i.e., the list is a statement of what is prescribed (or self-prescribed) and not what is consumed by the patient.*

**Requirements to access "all medications" and "all *active* medications" for a patient:**

A MedicationRequest resource query:

  1. **SHALL** be all that is required.
     1. See the General Guidance section for additional rules and expectations for [Servers Requiring Status].
  1. **SHALL** include all MedicationRequest resources with an `intent` = "order" representing authorized medication orders directly derived from the system's orders.
  1. **SHALL** include all prescribed and "self-prescribed" MedicationRequest resources with an `intent` = "plan" representing *reported* medications
     1. **SHALL** use the `reported[x]` element to indicate that the MedicationRequest record was captured as a secondary "reported" record rather than an original primary source-of-truth record. It may also indicate the source of the report.
     1. When recording "self-prescribed" medication, **SHOULD** use the `requester` element to indicate the Patient or RelatedPerson as the prescriber.

1. The `encounter` element **SHOULD** be supported. Searching by context (i.e., for a given inpatient encounter) will return all medications ordered during that encounter, including medications administered in hospital and prescribed or discharge medications intended to be taken at home.
1. The `category` and `encounter`  elements **MAY** be used together to get the intersection of medications for a given encounter (i.e., the context) that were administered during as an inpatient (i.e., the category).

#### Get All Medications

1. Get all medications for a patient by querying MedicationRequest using the `patient` search parameter and `intent` search parameter = "order,plan". See [MedicationRequest Quick Start] for further details.

   `GET /MedicationRequest?patient=[id]&intent=order,plan{&_include=MedicationRequest:medication}`

      {% include examplebutton_default.html example="get-all-meds" b_title = "Click Here to See 'Get All Medications' Example" %}

#### Get All *Active* Medications

1. Get all *active* medications for a patient by querying MedicationRequest using the `patient`,  and `intent` = "order,plan" `status` = "active" search parameters. See [MedicationRequest Quick Start] for further details. Note that the Client should also consider MedicationRequests with a status of "unknown" and whether to query those as well.

   `GET /MedicationRequest?patient=[id]&intent=order,plan&status=active{&_include=MedicationRequest:medication}`

     {% include examplebutton_default.html example="get-all-active-meds" b_title = "Click Here to See 'Get All *Active* Medications' Example" %}

#### Get All Medications for an Encounter

1. Get "all medications" for an encounter by querying MedicationRequest using the `patient`, `encounter`, `intent` = "order,plan" search parameters. See [MedicationRequest Quick Start] for further details.

   `GET /MedicationRequest?patient=[id]&intent=order,plan&encounter=[id]{&_include=MedicationRequest:medication}`

      {% include examplebutton_default.html example="get-all-enc-meds" b_title = "Click Here to See 'Get All Medications for an Encounter' Example" %}

See the [US Core Server CapabilityStatement] for a complete list of supported RESTful operations and search parameters for this IG.

#### De-duplication of Data

Medications may be duplicated in a medication list when multiple sources of data are used to generate the list. To provide a list of a patient's medications, it may be necessary to "de-duplicate" them. The de-duplication activity **MAY** be supplied by the Server, but **SHOULD** be provided by the Client.

This specification does not specify de-duplication best practices; however, systems can consider the following approaches:

* Compare the` MedicationRequest.identifier`. The `identifier` element is an external business identifier systems include to help indicate that the resources are related.
* Compare the generic or brand name included in the medication resource. The system will require access to terminology capabilities to identify equivalence.
* Finally, in the de-duplication process, systems must exercise caution in marking things as equivalent only if they are certain.

---

Footnotes

[^1]: Future versions of FHIR are anticipated to include further changes to the medication resources, which may lead to changes in our guidance for fetching patient medications in future versions of this guide.

{% include link-list.md %}


---

// File: input/pagecontent/must-support.md



The Profile elements consist of *Mandatory*, *Must Support*, and *Additional USCDI Requirements* elements. The sections below define the Server and Client expectations for processing these elements and illustrate how they are displayed and documented.



### Mandatory Elements

*Mandatory* elements have a minimum cardinality of 1 (min=1). When an element is Mandatory, the data is expected always to be present. However, very rarely it may be missing, and the [Missing Data] section and the next section provide guidance when the data is missing. The convention in this guide is to mark all min=1 elements as Must Support unless they are nested under an optional element. An example of this is [`CarePlan.status`].

### Must Support Elements

For querying and reading US Core Profiles, *Must Support* on any profile data element **SHALL** be interpreted as follows (see the [Future of US Core] page for writing and updating US Core Profiles):

* US Core Responders **SHALL** be capable of populating all data elements as part of the query results specified by the [US Core Server CapabilityStatement].
* US Core Requestors **SHALL** be capable of processing resource instances containing the data elements without generating an error or causing the application to fail. <span class="bg-success" markdown="1">This processing may result in a determination not to use the resource if the resource content does not meet business requirements.</span><!-- new-content -->
* When information on a particular data element is not present, and the reason for absence is unknown, US Core Responders **SHALL NOT** include the data elements in the resource instance returned as part of the query results.
* When querying US Core Responders, US Core Requestors **SHALL** interpret missing data elements within resource instances as data not present in the US Core Responder's system.
* When information on a particular data element is missing or suppressed, refer to the guidance for [Missing Data] and [Suppressed Data]. In cases where information on a specific data element is missing, *and* the US Core Responder knows the precise reason for the absence of data (other than suppressed data), US Core Responders **SHOULD** send the reason for the missing information. This is done by following the same methodology outlined in the [Missing Data] section but using the appropriate reason code instead of `unknown`.
* US Core Requestors **SHALL** be able to process resource instances containing data elements asserting missing information.

The terms *US Core Responder* Actor and *US Core Requestor Actor* are used throughout the guide and typically refer to a Server or a Client.

Readers are advised to understand [FHIR Terminology] requirements, [FHIR RESTful API] based on the HTTP protocol, [FHIR Data Types], [FHIR Search], and [FHIR Resource] formats before implementing US Core requirements.

<div class="bg-success" markdown="1">
#### US Core Must Support Summaries

The following summary tables  may be useful to testers and analysts to review the *Must Support* and *Mandatory* elements across profiles.

- All the profile information for the {{site.data.fhir.ig.title}} is represented in a single CSV or Excel file. 
  - [CSV](all-profiles.csv)
  - [Excel](all-profiles.xlsx)
- The [Observation Summary Table] compares *Must Support* Elements across all the US Core Observation Profiles. 
- the [Must Support - Resource References](#must-support---resource-references) section below lists all the *Must Support* references to other US Core Profiles and FHIR resources for each US Core Profile.

</div><!-- new-content -->

### Additional USCDI Requirements 
<div class="bg-success" markdown="1">

The US Core Profiles include requirements from the [U.S. Core Data for Interoperability (USCDI)]. See the [USCDI] page for more information about the US Core and USCDI relationship and a mapping between US Core Profiles and the USCDI Data Classes and Elements. Some US Core Profile elements needed to represent USCDI Data Elements for [ONC Health IT Certification] (g(10) certification) are not *Mandatory* or *Must Support* because many non-certifying implementers do not need them for their use cases. US Core designates these elements as *Additional USCDI Requirements*.

Implementers seeking ONC certification (Certifying Systems) **SHALL** interpret *Additional USCDI Requirements* as *Must Support* elements as documented above and below; otherwise, they are considered optional. All *Mandatory*, *Must Support*, or *Additional USCDI Requirements* are within the scope of ONC Health IT Certification. Only simple and complex data elements are defined as *Additional USCDI Requirements*. The *Must Support* sections below document how the conformance rules are displayed and applied.

</div><!-- new-content -->

The table below lists the *Additional USCDI Requirements* and their corresponding Profiles and FHIR elements.

{% include additional-uscdi-requirements.md %}

#### Communicating Additional USCDI Requirements

To communicate when *Additional USCDI Requirements* elements are in a US Core profile:

1. The profiles page includes an "Additional USCDI Requirements" listing the elements under the "Mandatory and *Must Support* Data Elements" section. 
2. The computable [US Core USCDI Requirement Extension] is added to each element in the profile's [StructureDefinition].
3. The formal view of the profile content displays "**ADDITIONAL USCDI:**" in the element's short description (see below for examples).



### Presentation of Must Support, Mandatory, and USCDI Requirement Elements in the Formal Profile Views

On each profile page, several different formal views of the US Core Profile contents are displayed in a tree format under tabs labeled "Differential Table", "Snapshot Table", and "Key Elements Table". Several examples below illustrate the presentation of *Must Support* elements and their rules. <span class="bg-success" markdown="1">
Except where noted, the same rules apply for the *Additional USCDI Requirements* for Certifying Systems.
</span><!-- new-content -->

#### Differential Table View

Elements with a cardinality starting with "1"  under the column header, "Card." (e.g., 1..1) are *Mandatory* elements. Elements labeled *Must Support* in the "Differential Table" view are flagged with an <span style="padding-left: 3px; padding-right: 3px; color: white; background-color: red" title="This element must be supported">S</span>. Elements with the label "**ADDITIONAL USCDI:**" under the header "Description and Constraints" are *Additional USCDI Requirements*. Figure 1 illustrates an example of this:

  {% include img.html img="Must_Support_Differential_View.png" caption="Figure 1: Differential Table View" %}

#### Key Elements Table View
 
The "Key Elements Table" view consists of:
1. All the *Mandatory*, *Must Support*, and *Additional USCDI Requirements* elements in the differential view
2. Any *Mandatory*, *Must Support*, and *Additional USCDI Requirements* elements inherited from a US Core Profile or other profile from which it is derived. (e.g., the [US Core Body Height Profile] is based on the [US Core Vital Signs Profile], and the [US Core QuestionnaireResponse Profile] is based on the [Structured Data Capture (SDC) Questionnaire Response Profile])
3. any *Mandatory* or [modifier elements] not in 1. or 2.

This view includes the same flags and labels described in Differential Table View:

{% include img.html img="Must_Support_Key_View.png" caption="Figure 2: Snapshot Table (Must Support) View" %}

#### Snapshot Table View

The "Snapshot Table" view in Figure 3 view consists of:
1.  all the *Mandatory*, *Must Support*, and *Additional USCDI Requirements* elements in the differential view
2. any inherited *Mandatory*, *Must Support*, and *Additional USCDI Requirements* elements from a US Core or other profile upon which it is based. (e.g.,  [US Core Body Height Profile] based on [Vital Signs Profile] or [US Core QuestionnaireResponse Profile] based on [Structured Data Capture (SDC) Questionnaire Response Profile])
3. any base FHIR elements not in 1. or 2.

This view includes the same flags and labels as described in Differential Table View:

{% include img.html img="Must_Support_Snapshot_View.png" caption="Figure 3: Snapshot Table View" %}

#### Defined Pattern Elements

The StructureDefinitions define the US Core Profiles and the [ElementDefinition.pattern], used almost exclusively for the CodeableConcept and Coding datatypes. If an element is marked as *Must Support* and defined by a pattern, then the pattern defines the elements *and* element values that the Server **SHALL** be capable of providing. <span class="bg-success" markdown="1">If an element is marked as *Additional USCDI* and defined by a pattern, then the pattern defines the elements *and* element values that the Certifying System **SHALL** be capable of providing.</span><!-- new-content -->


For example, the [US Core DiagnosticReport Profile for Laboratory Results Reporting] category element is defined with a pattern requiring fixed values in `DiagnosticReport.category.coding.system`  and `DiagnosticReport.category.coding.code` for a Coding element. When claiming conformance to this profile:

- US Core Responders **SHALL** provide these values in a `DiagnosticReport.category`
- US Core Requestors **SHALL** be capable of processing these values in `DiagnosticReport.category`

{% include img.html img="Must_Support_DiagnosticReport_category.png" caption="Figure 4: US Core DiagnosticReport.category" %}

#### Must Support - Primitive Element

Primitive elements are single elements with a primitive value. If they are marked as *Must Support*, then the Server **SHALL** be capable of providing the element value to meet the *Must Support* requirement. <span class="bg-success" markdown="1">If they are marked as *Additional USCDI*, then the Certifying System **SHALL** be capable of providing the element value to meet the *Additional USCDI* requirement.</span><!-- new-content -->

For example, the [US Core DiagnosticReport Profile for Laboratory Results Reporting] issued element is a primitive `instant` datatype. Therefore, when claiming conformance to this profile:

- US Core Responders **SHALL** be capable of providing a value in a `DiagnosticReport.issued`
- US Core Requestors **SHALL** be capable of processing the value in `DiagnosticReport.issued`

{% include img.html img="Must_Support_DiagnosticReport_issued.png" caption="Figure 5: US Core DiagnosticReport.issued" %}

#### Must Support - Complex Elements

Complex elements are composed of primitive and other complex elements.   Note that coded elements (`CodeableConcept`, `Coding`, and `code` datatypes) also have additional binding rules documented in the [Coded Elements] section.

For any complex element marked as *Must Support*, the Server **SHALL** be capable of providing at least one of the sub-element values. If any sub-element is marked as *Must Support*, it must also meet the *Must Support* requirements and satisfy the *Must Support* requirements for the parent element.
<div class="bg-success" markdown="1">

For any complex element marked as *Additional USCDI*, the Certifying System **SHALL** be capable of providing at least one of the sub-element values. If any sub-element is marked as *Additional USCDI*, it must also meet the *Additional USCDI* requirements and satisfy the *Additional USCDI* requirements for the parent element.
</div><!-- new-content -->

For example, the [US Core DiagnosticReport Profile for Report and Note exchange] `presentedForm` element is labeled *Must Support* and has no *Must Support* sub-elements. When claiming conformance to this profile:

- US Core Responders **SHALL** be capable of providing a value in `DiagnosticReport.presentedForm` sub-element.
- US Core Requestors **SHALL** be capable of processing the value in `DiagnosticReport.presentedForm`.

{% include img.html img="Must_Support_DiagnosticReport_presentedForm.png" caption="Figure 6: US Core DiagnosticReport.presentedForm" %}

For example, the [US Core Patient Profile] `name` element is labeled *Must Support* and has *Must Support* sub-elements "family" and "given". When claiming conformance to this profile:

- US Core Responders **SHALL** be capable of providing a value in `Patient.name.family` and `Patient.name.given`.
- US Core Requestors **SHALL** be capable of processing the value in `Patient.name.family` and `Patient.name.given`.

{% include img.html img="Must_Support_Patient_name.png" caption="Figure 7: US Core Patient.name" %}

On the other hand, if any sub-element is marked as *Must Support* or  *Additional USCDI* and the parent element is not, there is *no expectation* that you must support the parent. However, if the parent element is represented in the structure, <span class="bg-success" markdown="1">Servers **SHALL** support the sub-element(s) marked as *Must Support* and Certifying System  **SHALL** the sub-elements labeled as *Additional USCDI*.</span><!-- new-content -->


For example, the [US Core Patient Profile] `telecom` element is not labeled *Must Support*, but `telecom.system`, `telecom.value`, `telecom.use` are. When claiming conformance to this profile:

- *If* US Core Responders support `Patient.telecom`, they **SHALL** be capable of providing values in `Patient.telecom.system` , `Patient.telecom.value`, and `Patient.telecom.use`.
- US Core Requestors **SHALL** be capable of processing the values in `Patient.telecom`.

{% include img.html img="Must_Support_Patient_telecom.png" caption="Figure 8: US Core Patient.telecom" %}


Systems can support the other elements, but this is not a requirement of US Core. The [U.S. Core Data for Interoperability (USCDI)] may require additional elements such as `Patient.suffix`.

#### Must Support - Resource References

This section documents additional *Must Support* requirements for the [Reference] type element.

<div class="bg-success" markdown="1">

##### Must Support Targets for US Core Profiles

When a Reference type element is labeled as *Must Support*  has a single target profile referenced, the target profile **SHALL** be supported. When a Reference type element is labeled as *Additional USCDI* has a single target profile referenced, the target profile **SHALL** be supported for Certifying Systems.

For example, the [US Core AllergyIntolerance Profile] patient is labeled *Must Support*. When claiming conformance to this profile:

* US Core Responders **SHALL** be capable of providing an `AllergyIntolerance.patient` with a valid reference to a US Core Patient Profile.
* US Core Requestors **SHALL** be capable of processing an `AllergyIntolerance.patient` with a valid reference to a US Core Patient Profile.

{% include img.html img="Must_Support_AllergyIntolerance.png" caption="Figure 10: US Core AllergyIntolerance.patient" %}

When a Reference type element is labeled as *Must Support*, has multiple target profiles referenced, and specific targets are labeled as *Must Support*, the *Must Support* target profile(s) **SHALL** be supported. When a Reference type element labeled as *Additional USCDI*, has multiple target profiles referenced, and specific targets are labeled as *Must Support*, the *Must Support* target profile(s) **SHALL** be supported by Certifying Systems.

For example, the US Core DocumentReference Profile `DocumentReference.author` is a *Must Support* element, and six target profiles are displayed with only the US Core Practitioner Profile labeled *Must Support*. When claiming conformance to this profile:

* US Core Responders **SHALL** be capable of providing a DocumentReference.author with a valid reference to a US Core Practitioner Profile.
* US Core Requestors **SHALL** be capable of processing a DocumentReference.author with a valid reference to a US Core Practitioner Profile.

Systems can support other references, but this is not a requirement of US Core.

{% include img.html img="Must_Support_DocumentReference.png" caption="Figure 9: US Core DocumentReference.author" %}

The tables below list the *Must Support* target US Core Profiles and FHIR Resources for each US Core Profile.

*Must Support* Targets for *Must Support* US Core Elements

{% include ms-target-table-generator.md file="ms_refs" %}

Additional *Must Support* Targets for Certifying Systems supporting *Additional USCDI* US Core Elements as *Must Support* (see [Additional USCDI Requirements](#additional-uscdi-requirements) above).

{% include ms-target-table-generator.md file="addl_uscdi_refs" %}

##### Choice of At Least One Targets for US Core Profiles

When a Reference element is labeled as *Must Support* has multiple target profiles referenced, but none are labeled as *Must Support*, *at least one* target profile **SHALL** be supported. When a Reference element is labeled as *Additional USCDI* has multiple target profiles referenced, but none are labeled as *Must Support*, *at least one* target profile **SHALL** be supported by Certifying Systems.

For example, the US Core Vital Signs Profile  `Observation.performer` is a *Must Support* element, and there are six target profiles displayed with none labeled as *Must Support*. When claiming conformance to this profile:

* US Core Responders **SHALL** be capable of supporting `Observation.performer` with a valid reference to *at least one* target profile.
* US Core Requestors **SHALL** be capable of processing `Observation.performer` with a valid reference to *any* target profile.

{% include img.html img="Must_Support_vital_signs.performer.png" caption="Figure 11: US Core Vital Signs Profile `Observation.performer`" %}

The tables below list the *at least one* candidate target US Core Profiles and FHIR Resources for each US Core Profile.  Note that these targets may overlap with the *Must Support* Targets listed above.

Choice of Targets for *Must Support* US Core Elements

{% include ms-target-table-generator.md file="ms_choice_refs" %}

Choice of Targets for *Additional USCDI* US Core Elements

{% include ms-target-table-generator.md file="addl_uscdi_choice_refs" %}

{% include link-list.md %}

</div><!-- new-content -->

#### Must Support - Choice of Data Types

<span class="bg-success" markdown="1">If a *Must Support* element has a choice of datatypes for its content, the datatypes the Server **SHALL** support are labeled as *Must Support*.  If an *Additional USCDI* element has a choice of datatypes for its content, the datatypes the Certifying System **SHALL** support are labeled as *Must Support*.</span><!-- new-content -->

For example, the [US Core Observation Clinical Result Profile] effectiveDateTime is labeled *Must Support*. When claiming conformance to this profile:

* US Core Responders **SHALL** be capable of populating `Observation.effectiveDateTime`.
* US Core Requestors **SHALL** be capable of processing `Observation.effectiveDateTime`.

Systems **MAY** support populating and processing other choice elements (such as Observation.effectivePeriod), but this is not a requirement of US Core.

{% include img.html img="Must_Support_Observation.effective.png" caption="Figure : US Core Observation.effectiveDateTime" %}

For the [US Core Observation Clinical Result Profile] value element, multiple elements are labeled *Must Support*. When claiming conformance to this profile:

* US Core Responders **SHALL** be capable of populating `Observation.valueQuantity`, `Observation.valueCodeableConcept`, and `Observation.valueString`.
* US Core Requestors **SHALL** be capable of processing `Observation.valueQuantity`, `Observation.valueCodeableConcept`, and `Observation.valueString`.

Systems can support the other elements, but this is not a requirement of US Core.

{% include img.html img="Must_Support_Observation.value.png" caption="Figure 12: US Core `Observation.value[x]`" %}


#### Must Support - Choice of Profile Elements

There are several instances in this Guide where there is a choice of supporting one or another profile element to meet the *Must Support* <span class="bg-success" markdown="1">or *Additional USCDI*</span><!-- new-content --> requirements. In such cases, the Server <span class="bg-success" markdown="1">or Certifying System</span><!-- new-content --> **SHALL** support at least one element, and the Client application **SHALL** support all elements. Unfortunately, there is no way to define this in a computable way, but these instances are documented in the *Profile specific implementation guidance* sections.

For example:
<div class="bg-success" markdown="1">

* [US Core MedicationRequest Profile] can represent that information is from a secondary source using a boolean flag in `MedicationRequest.reportedBoolean` or a reference using `MedicationRequest.reportedReference`. 
   *  Although both are marked as *Must Support*, the Server system is not required to support both, but **SHALL** support at least one of these elements.
   *  The Client application **SHALL** support both elements.

{% include img.html img="Must_Support_MedicationRequest.reported.png" caption="Figure 13: US Core `MedicationRequest.reported[x]`" %}

</div><!-- new-content -->

{% include link-list.md %}

---

// File: input/pagecontent/observation-summary.md

This table compares *Must Support* Elements across all the US Core Observation Profiles.

{% include summary-observations.xhtml %}

This table is also available as an [Excel](observations-summary.xlsx) file.


---

// File: input/pagecontent/profiles-and-extensions.md

### Profiles

The following profiles have been defined for this implementation guide.

<!-- ================================================ -->
<!--  use this line to include an autogenerated list of all profiles and highlight new ones using the input/data/new_stuff.yml list. Remove it if you would like to hand generate it -->

{% include sd-list-generator.md %}
<!-- ================================================ -->

<br />

### Extensions

The following [Extensions] have been defined as part of the US Core Implementation Guide. A [registry of standard extensions] can be found in the FHIR specification, and additional extensions may be registered on the HL7 FHIR registry at <http://hl7.org/fhir/registry>.

 <!-- string parameters passed in from the page used to define the extension for each section -->
 <!-- In future, made need to convert to data file as csv if gets bigger -->
{% assign ig_only = "USCDIRequirement" %}
{% assign realm_only = "USCoreDirectEmailExtension,USCoreJurisdictionExtension" %}

#### US Core Profile Extensions
The following extensions are used in US Core Profiles.

{% include ext-list-generator.md use="profile" %}

#### Other US Realm Specific Extension
The following extensions are not used in any US Core Profile. They are provided to assist implementers who may find them relevant to their specific use cases.

{% include ext-list-generator.md use="realm" %}

#### US Core Profile StructureDefinition Extensions
The following extensions are only used in the US Core Implementation Guide to create US Core Profiles. They are used in the context of StructureDefinition elements.

{% include ext-list-generator.md use="ig" %}


{% include link-list.md %}

<br />


---

// File: input/pagecontent/scopes.md


This page is updated content for version 7.0.0


 SMART App Launch Implementation Guide Release 2.0.0 describes a set of foundational patterns based on OAuth 2.0 for Client applications to authorize, authenticate, and integrate with FHIR-based data systems. This page documents the SMART on FHIR obligations and capabilities for US Core Servers supporting User-Facing Applications and Backend Services. 

### *Capability Sets* for US Core Servers Supporting User-Facing Applications and Backend Services
{: #capability-sets}

To promote interoperability, SMART on FHIR defines a set of core capabilities. An individual SMART Server will publish a granular list of its capabilities, and a set of these capabilities is combined to support a specific use, a *Capability Set*. See SMART App Launch's [FHIR OAuth authorization Endpoints and Capabilities] for more details. Servers **MAY** support the other SMART on FHIR *Capability Sets* and capabilities than those listed below.

#### *Capabilities* for Implementations Supporting User-Facing Applications

At least one of the following SMART on FHIR *Capability Sets* **SHOULD** be supported for US Core Servers that support User-Facing Applications. For certified systems, both **SHALL** be supported:

- [Patient Access for Standalone Apps]
- [Clinician Access for EHR Launch]

#### *Capabilities* for Implementations Supporting Backend Services

Implementations supporting Backend Services -- for example, to meet US EHR certification requirements - **SHALL** include support for the `Client-confidential-asymmetric` capability and `system/scopes`.

### US Core Servers SHALL Support Token Introspection

US Core Server **SHALL** support token introspection defined by the SMART App Launch Guide. For more details and additional consideration, see SMART App Launch's [Token Introspection].

### SMART Scopes

SMART's scopes, defined in Version 2.0.0 of the [SMART App Launch] implementation guide, allow access permissions to be delegated to a Client application. The US Core API requires Servers to support [resource level scopes] and [granular scopes], allowing access to specific data about a single patient. US Core's required scopes (**SHALL**) are based on community-based consensus that the scope meets a system requirement, clinical need, or federal regulation. Similarly, US Core's recommended scopes (**SHOULD**) rely on community-based consensus that the scope meets a system requirement or clinical need as a best practice. 

The US Core required scopes listed below are named in the [HTI-1 final rule], which requires support for the Condition and Observation category scopes. (Note that although mentioned in HTI-1 final rule, there is no "Clinical Test" category for Observation in US Core.) The recommended granular scope listed below is of particular interest to patients and health systems. Implementations meeting US EHR certification requirements must support all US Core's required scopes. Other systems only need to support scopes for the US Core APIs they support. 

Each US Core Profile page includes a "Quick Start" section summarizing each profile's supported search transactions and scopes. Servers **MAY** support other scopes in addition to those listed below and in the Quick Start sections. US Core Clients should follow the [principle of least privilege] and access only the necessary resources. In other words, if a Client needs only vital sign observations, it should request access only to Observations with a category of "vital-signs". <span class="bg-success" markdown="1">Note that a granular scope grants access to all resources matching that granular scope *regardless of whether other categories* are present.</span><!-- new-content -->

##### Scopes Format
 SMART App Launch Version 2.0.0 introduced a scope syntax of: `<patient|user|system> / <fhir-resource>. <c | r | u | d |s> [?param=value]`

For example, to limit read and search access to a specific patient's laboratory observations but not other observations, the Server grants the following patient-specific scope:

`patient/Observation.rs?category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory`.

This example uses a `patient/` prefix, but implementers may support `system/` and `user/`.

#### US Core Scopes

The table below summarizes the US Core scope requirements (**SHALL**) and best practice recommendations (**SHOULD**) for resource-level and granular scopes. This information can be found for each US Core Profile in the profile page's "Quick Start" section.

 For "User-Facing Applications", a system's support for patient-level (`patient`) or user-level (`user`) scopes depends on its published list of SMART on FHIR capabilities (see the [capability sets](#capability-sets) above).  For example, if a Server lists `permission-patient` and `permission-user` in its capabilities, it **SHALL** support both patient-level and user-level required scopes and **SHOULD** support both patient-level and user-level recommended best-practice scopes.

 For "Backend-Services", System-level scopes (`system`) describe data that a Client system is directly authorized to access. Systems that support system-level (`system`) scopes **SHALL** support the required US Core scopes and **SHOULD** support the recommended US Core scopes.

##### The Following Resource Level Scopes **SHALL** Be Supported


{% include resource-scopes-table.md conformance="SHALL" crud='rs'%}

<table class="grid">
<thead>
<tr>
<th>Resource Type</th>
<th>Resource Level Scope</th>
</tr>
</thead>
<tbody>
{% for resource_scope in resource_scopes -%}
<tr>
<td>{{resource_scope}}</td>
<td><code>{{ resource_scope | prepend: '<patient|user|system>/' | append: '.rs' }}</code></td>
</tr>
{% endfor %}
</tbody>
</table>

##### The Following Resource Level Scopes **MAY** Be Supported

{% include resource-scopes-table.md conformance="MAY" crud='rs' %}

<table class="grid">
<thead>
<tr>
<th>Resource Type</th>
<th>Resource Level Scope</th>
</tr>
</thead>
<tbody>
{% for resource_scope in resource_scopes -%}
<tr>
<td>{{resource_scope}}</td>
<td><code>{{ resource_scope | prepend: '<patient|user|system>/' | append: '.rs' }}</code></td>
</tr>
{% endfor %}
</tbody>
</table>

##### The Following Granular Scopes **SHALL** Be Supported

{% include granular-scopes-table.md conformance="SHALL" crud='rs' %}

<table class="grid">
<thead>
<tr>
<th>Resource Type</th>
<th>Granular Scope</th>
</tr>
</thead>
<tbody>
{% for granular_scope in granular_scopes -%}
<tr>
<td>{{granular_scope | split: '.' | first }}</td>
<td><code>{{ granular_scope | prepend: '<patient|user|system>/' }}</code></td>
</tr>
{% endfor %}
</tbody>
</table>


##### The Following Granular Scopes **SHOULD** Be Supported

{% include granular-scopes-table.md conformance="SHOULD" crud ='rs' %}

<table class="grid">
<thead>
<tr>
<th>Resource Type</th>
<th>Granular Scope</th>
</tr>
</thead>
<tbody>
{% for granular_scope in granular_scopes -%}
<tr>
<td>{{granular_scope | split: '.' | first }}</td>
<td><code>{{ granular_scope | prepend: '<patient|user|system>/' }}</code></td>
</tr>
{% endfor %}
</tbody>
</table>

### Servers SHALL support the following metadata in their `/.well-known/smart-configuration`

In addition to the capabilities defined in the Server's CapabilityStatement, Servers **SHALL** document their SMART capabilities in their [Well-Known Uniform Resource Identifiers (URIs)] JSON file.

#### Required SMART App Launch Metadata

The SMART App Launch guide requires the following JSON file metadata:

- `issuer` (conditional)
- `jwks_uri` (conditional)
- `authorization_endpoint`
- `grant_types_supported`
- `token_endpoint`
- `capabilities`
- `code_challenge_methods_supported`

#### Additional US Core Requirements

US Core requires following additional metadata:

- `scopes_supported`: Array of scopes a Client may request.
    - <span class="bg-success" markdown="1">The Server **SHALL** list all the required US Core Scopes from the table above for the US Core Profiles they support in the `scopes_supported` array; additional scopes **MAY** be supported (so Clients should not consider this array an exhaustive list). 
</span><!-- new-content -->
    - Servers **MAY** limit Clients' scopes to those configured at registration time. Servers **SHALL** allow users to select a subset of the requested scopes at the approval time. The app **SHOULD** inspect the returned scopes and accommodate the differences from the scopes it asked for and registered.
- `introspection_endpoint`: The URL to a Server's introspection endpoint, which can be used to validate a token. 
  - Servers **SHALL** document this endpoint in the file

#### Example `.well-known/smart-configuration` File

This example `.well-known/smart-configuration` file shows all the required and recommended metadata listed in SMART App Launch for a certified system supporting User-Facing Applications and Backend Services. The Server lists all the required and recommended US Core scopes for both `patient/`, `user/`, and  `system/` in the `scopes_supported` metadata array.  See the [SMART App Launch] Implementation Guide for more examples and details.

~~~http
HTTP/1.1 200 OK
Content-Type: application/json
~~~

{% include granular-scopes-table.md %}
{% include resource-scopes-table.md conformance="SHALL" %}

~~~json
{
  "issuer": "https://ehr.example.com",
  "jwks_uri": "https://ehr.example.com/.well-known/jwks.json",
  "authorization_endpoint": "https://ehr.example.com/auth/authorize",
  "token_endpoint": "https://ehr.example.com/auth/token",
  "token_endpoint_auth_methods_supported": [
    "Client_secret_basic",
    "private_key_jwt"
  ],
  "grant_types_supported": [
    "authorization_code",
    "Client_credentials"
  ],
  "registration_endpoint": "https://ehr.example.com/auth/register",
  "scopes_supported": [
    "openid",
    "profile",
    "launch",
    "launch/patient",
    "offline_access",
{% for resource_scope in resource_scopes -%}
    {{ resource_scope | prepend: '    "patient/'| append: '.rs' }}",
{{ resource_scope | prepend: '    "user/'| append: '.rs' }}",
{{ resource_scope | prepend: '    "system/'| append: '.rs' }}",
{% endfor -%}
{% for granular_scope in granular_scopes -%}
    {{ granular_scope | prepend: '    "patient/'}}",
{{ granular_scope | prepend: '    "user/'}}",
{{ granular_scope | prepend: '    "system/'}}"{% unless forloop.last %},{% endunless %}
{% endfor -%}
  ],
  "response_types_supported": ["code"],
  "management_endpoint": "https://ehr.example.com/user/manage",
  "introspection_endpoint": "https://ehr.example.com/user/introspect",
  "revocation_endpoint": "https://ehr.example.com/user/revoke",
  "code_challenge_methods_supported": ["S256"],
  "capabilities": [
    "launch-ehr",
    "permission-patient",
    "permission-user",
    "permission-v2",
    "Client-public",
    "Client-confidential-symmetric",
    "Client-confidential-asymmetric",
    "context-ehr-patient",
    "sso-openid-connect"
  ]
}
~~~
 
{% include link-list.md %}

---

// File: input/pagecontent/screening-and-assessments.md


### Introduction

Clinicians use various terms such as *assessments*, *scales*, *surveys*, and *screenings* to describe the tools and processes to collect health-related information for assessing a patient's health-related matter. US Cores uses the term *Screening and Assessments* for recording responses and capturing assertions/determinations resulting from this process and these tools. This page documents how Screening and Assessments are used to identify various problems or health concerns and how US Core Profiles record Screenings and Assessments ranging from simple observations to complex structured evaluations.

With the addition of the USCDI Health Status Assessments data elements, US Core  expanded the guidance from Social Determinant of Health (SDOH)-only focus to a general framework of Screenings and Assessments for all domains, including the USCDI Data Elements:

- Social Determinant of Health (SDOH)
- Functional Status
- Disability Status
- Mental/Cognitive Status
- Physical Activity
- Alcohol Use
- Substance Use

However, implementers **SHOULD** consider more constrained, domain-specific profiles derived from the US Core Profiles to meet the needs of their respective use cases.

The [Gravity Project] and its [SDOH Clinical Care] HL7 Implementation Guide address the screening process and related interventions to address Social Determinant of Health (SDOH). Those efforts helped guide US Core 5.0.1 updates to meet the [USCDI] SDOH data elements for Assessments, Goals, Interventions, and Problems/Health Concerns.

### Related Activities in Clinical Care

The figure below shows how screening and assessments lead to providing services for a patient.

- **Screening and Assessments**: [Screening and Assessment](#screening-and-assessments) are used to identify problems before delivering appropriate clinical care. The following US Core Profiles support capturing their responses:
    - [US Core Simple Observation Profile]
    - The [US Core Observation Screening Assessment Profile]
    - The [SDC Base Questionnaire]/[US Core QuestionnaireResponse Profile]
- **Problems/Health Concerns**: The identified health-related conditions (for example, homelessness or disability) are represented by:
  - [US Core Simple Observation Profile]
  - [US Core Condition Problems and Health Concerns Profile].
- **Interventions**:  The [US Core ServiceRequest Profile] communicates services offered to patients to address problems/health concerns. The [US Core Procedure Profile] can also record a completed service or intervention.
- **Goals**: Identifying and defining a future desired condition or change in condition (for example, "Has adequate quality meals and snacks") is represented by [US Core Goal Profile].


{% include img.html img="screening_and_assessments.svg" caption="Screening and Assessment Activities" %}


### Screening and Assessments

Screening and Assessments are used to identify various problems or health concerns. Their complexity ranges from simple observations to complex structured evaluations: 


- Clinician makes a simple observation - (for example, the patient states they are homeless)
- Clinician administers a survey to gather information (for example, the [Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences (PRAPARE) Survey])
- Clinician makes a "clinical judgment" based on an assessment tool. (for example, based on the PRAPARE survey, the patient has a lack of access to transportation)

The following guidance was developed after reviewing several functional status, disability status, mental/cognitive status, and SDOH screening and assessment tools.


#### Clinical Judgments

Whether based on simple observations or detailed assessments, clinicians may record clinical judgments as either:
- a problem or health concern
- as observation

Local policies guide what is appropriate for the problem list and what is appropriate for an observation. For example, some clinics may consider social needs sensitive information inappropriate for the problem list. Observations can contribute to the identification of future problems or health concerns and support service requests and procedures.

Every Server that supports the USDCI Data Class "Health Status/Assessments":

-  **SHALL** support representing clinical judgments using [US Core Condition Problems and Health Concerns Profile] or [US Core Simple Observation Profile].  
-  When a *Simple Observation* or *Problem or Health Concern* is recorded based on a structured screening and assessment (see below), the *US Core Simple Observation Profile* **SHOULD** reference it using the `derivedFrom` element and the *US Core Condition Problems and Health Concerns Profile* using the `evidence.detail` element,


#### Structured Screening and Assessments
<div class="bg-success" markdown="1">

Screening and Assessments can be structured survey instruments consisting of questions with various responses, including true/false, coded, textual, and multiple choice. Examples include PRAPARE, [Apgar score], and [PHQ-9]. US Core defines two ways to represent the questions and responses to these screening and assessment instruments:

- Observation: [US Core Observation Screening Assessment Profile]
- Questionnaire/QuestionnaireResponse: [SDC Base Questionnaire]/[US Core QuestionnaireResponse Profile]

Servers that support the USCDI Health Status/Assessments Data Class **SHALL** support the US Core Observation Screening Assessment Profile and **SHOULD** support the SDC Base Questionnaire and the US Core QuestionnaireResponse Profile.

</div><!-- new-content -->
The sections below provide additional guidance on when Observations and Questionnaire/QuestionnaireResponse can be used to represent the structured screenings and assessments.

##### US Core Observation Screening Assessment Profile


[US Core Observation Screening Assessment Profile] is defined to record observations from responses to screening tools and assessments used for any context (e.g., SDOH, functional status, etc.). Although systems can represent most questions and answers in healthcare assessments as FHIR Observations, it is only sometimes necessary and appropriate to represent all of them as Observations. Only relevant responses should be extracted as Observations. For example, depending on the use case and focus of the Assessment or Survey, patient demographic information may be recorded in the Patient resource instead of Observations. The observations can be grouped and nested to preserve the structure of screening or assessment instruments. The figure below illustrates the relationship between the Observation screening and assessments "panel" and the individual screening and assessment "item" Observations. Each box represents an Observation:


{% include img-med.html img="uscore-observation-assessment-structure.svg" caption="Relationship Between Screening Assessment Observations" %}


Note that the panels can be nested to create additional groupings of responses. See the [US Core Observation Screening Assessment Profile] page for detailed documentation on how the observations are linked, examples, and search requirements.

###### Searching for Screening and Assessment Data

Unlike QuestionnaireResponse, When Observations are used to record a set of Screening and Assessments responses, Clients can query individual responses using the standard FHIR RESTful API search parameters. The example below is a FHIR RESTful search transaction on Observation to access a patient's SDOH assessment:


{% include examplebutton.html example="SDOH_search_transaction" b_title = "Click on Here To See Search Example" %}


##### SDC Base Questionnaire/US Core QuestionnaireResponse Profile

Screening and assessment instruments may be represented as questionnaires, including FHIR Questionnaires. The [Structured Data Capture (SDC)] specification documents the workflow for the creation, discovery, retrieval, and data extraction of FHIR Questionnaire and QuestionnaireResponse. The [US Core QuestionnaireResponse Profile] is based on the [Structured Data Capture (SDC) Questionnaire Response Profile]) and is used to capture, exchange, and persist the response data. QuestionnaireResponse can be considered a snapshot of the filled-out answer forms to the screening and assessment questions in the [SDC Base Questionnaire]. It is ordered and grouped according to the FHIR Questionnaire and can be consulted when a complete and accurate record of the responses is required. Refer to the [US Core QuestionnaireResponse Profile] page for detailed documentation, examples, and search requirements.

###### Extracting US Core Observation Screening Assessment from US Core QuestionnaireResponse

US Core Observation Screening Assessment can be extracted from US Core QuestionnaireResponse.  Although QuestionnaireResponse can be searched using the standard FHIR RESTful API search parameters, individual responses are not directly searchable in QuestionnaireResponse. To search directly for individual responses, the QuestionnaireResponse must be "parsed" into a searchable form - i.e., to a local FHIR or non-FHIR data store such as a database or FHIR Observations. Both SDC and the [SDOH Clinical Care] implementation guide define how data captured in a QuestionnaireResponse can be extracted and used to create or update Observations or other FHIR resources.



#### Choosing Between QuestionnaireResponse and Observation

For API developers using US Core, it's important to understand when to use the QuestionnaireResponse versus Observation to represent structured assessments and surveys. Here are some guidelines to help choose the appropriate profile:

- Observations represent specific point-in-time facts that need to be searched, trended, the subject of statistical analysis, and directly referenced in support of other actions. Not all answers in a form will necessarily be appropriate to surface as an Observation. However, anything that meets one of the preceding criteria must be surfaced as an Observation.
- QuestionnaireResponses represent the source-of-truth of a completed form. QuestionnaireResponse shows how the question was phrased, what answer text was seen or typed, the order in which the survey or assessment was completed, etc. For FHIR implementers, it is important to note that QuestionnaireResponse references a specific version of a form, whether it was represented as a FHIR Questionnaire or not. (however, it may be challenging to determine canonical URLs and linkIds consistently across systems without using a FHIR Questionnaire.) This reference provides the context of exactly what options were available, what logic was used to calculate answers, and what questions were asked. It is important to note that QuestionnaireResponse cannot be used for searching based on individual responses but to capture higher-level information such as what form was filled out, by whom, and when.

In many cases, data might be represented using both mechanisms - the initial raw assessment retained for audit or detailed review stored as a QuestionnaireResponse, and the detailed key answers surfaced as Observations for easy search and analysis.


### Terminology

<div class="bg-success" markdown="1">

#### Category Codes

API consumers can query by category when accessing patient information. Each profile's *Quick Start* section shows searches by category if the category element is defined in the profile. US Core defined these USCDI Health Assessments Data Elements category codes:

{% include assessment-category-table-generator.html %}

For the US Core Simple Observation Profile and US Core Observation Screening Assessment Profiles, Servers **SHALL** support all the category codes listed above.

For the US Core Condition Problems and Health Concerns Profile, Servers **SHALL** support the code ,"sdoh", and **SHOULD** support the other category codes listed above.

For the US Core ServiceRequest Profile, Servers **SHOULD** support all the above category codes.

The category element is optional in US Core Procedure and US Core Goal, but implementers can categorize them using one of the above category codes or infer the context by inspecting the referenced ServiceRequest if available. Similarly, they can review the Questionnaire resource's metadata to determine the context of the US Core QuestionnaireResponse. 

</div><!-- new-content -->

 <span class= "bg-warning" markdown= "1">Clients need to understand that data categorization is somewhat subjective. The categorization applied by the source may not align with the Client's expectations. Clients may find it more beneficial to use queries based on a specific code or set of codes or to perform additional Client-side filtering of query results.</span><!-- bg-warning -->

#### Screening and Assessment Codes

The US Core Observation Screening Assessment Profile, SDC Base Questionnaire, and US Core Simple Observation Profiles have [preferred] or [example] bindings to broadly defined LOINC value sets. These value sets contain concepts that span many use cases and are not bound to any USCDI Health Assessments Data Element.  

##### USCDI Health Assessments Data Element Value Sets

The following sections and table below identify the associated value sets for each USCDI Health Status Assessments Data Element. This guidance intends to promote interoperability by introducing "starter" value sets *where available* for the USCDI Data Elements covered by Screenings and Assessments. These value sets are divided into clinical judgment codes, structured screening and assessment panel codes, and structured screening and assessment panel item codes. Note that a suitable value set has yet to be identified in several instances. Implementers **SHOULD** treat these value sets as having an [extensible] binding. In other words, the *Clinical Judgement Codes* code sets are extensibly bound to the US Core Condition Problems and Health Concerns Profile and the US Core Simple Observation Profile when representing clinical judgments. Similarly, *Panel Codes* and *Panel Item Codes* are extensibly bound to the US Core Observation Screening Assessment Profile and SDC Base Questionnaire/US Core QuestionnaireResponse Profile when representing structured screening and assessments. Because the value sets in this table are not formally bound to a US Core Profile in the StructureDefinitions, "automatic" validation (confirmation) that a code is a member of a value set will not occur using the standard validation tools.

###### SDOH value sets

- The Gravity project created and maintains the [Social Determinants of Health Screening Assessments And Questions](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.206/expansion) value set for the SDOH USCDI Health Assessments Data Element. This value set contains both panel and panel item codes.

   In addition to these concepts, implementers should consider using several SDOH value sets maintained and updated in VSAC by [Multiple Chronic Condition (MCC) Care Plan Implementation Guide] and the HL7 Patent Care work group with support from the National Institute of Health. These are panel item codes that may be part of a LOINC panel.
   
{% include mcc-valueset-list-generator.html %}

###### Functional Status

- The [Functional Status Related Questionnaire Panel Codes](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1586/expansion) contains LOINC panel codes that represent functional status questionnaire LOINC panel code, such as CMS Assessment.

###### Mental and Cognitive Health

- The [Cognitive Health Related Questionnaire Panel Codes](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.979/expansion) contains LOINC panel codes that represent Mental or Cognitive health screening assessments, such as FACIT, PROMIS, and MoCA.

- The [Cognitive Function Clinician Interpretation](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.979/expansion) represents clinical judgment codes such as "Cognitive Function Interpretation".

- The [Mental Status Observation](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1240.1/expansion) value set contains SNOMED CT clinical judgment codes related to mental status observations that can come from a broad range of subjective and objective information such as Assessment and Screening tools. In many cases, the value (answer) at `Observation.value` may be boolean true \| false.

###### Disability Status

- The [Disability Status Assessment](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1099.49/expansion) contains LOINC panel item codes that represent detailed patient questions about functional status, such as difficulty dressing or bathing.

###### Physical Activity

- The [Physical Activity Observation Questions](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1240.9/expansion) are panel item codes taken from the [Physical Activity Implementation Guide], sponsored by the [American Heart Association] and the [Physical Activity Alliance]. In addition to contributing to the terminology for the USCDI Health Assessments Physical Activity Data Element, the guide documents a standardized way of measuring and sharing a patient's physical activity.

   In addition to these concepts, implementers should consider using   [Physical Activity Level](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1068/expansion) referenced in the SDOH section above. It represents simple question-and-answer assessment questions such as, "Kinds of physical activity you usually performed while on the job this last year" or "Days per week of moderate to vigorous physical activity".

###### Substance Use (Including Alcohol Use)

- The [Substance Use](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1015/expansion) contain LOINC panel item codes such as, "How often do you have a drink containing alcohol" or "How often have you used any prescription medications just for the feeling, more than prescribed or that were not prescribed for you in past 12 months (TAPS)"

- The [Alcohol Use Related Questionnaire Panel Codes](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1585/expansion) contains the LOINC Panel Codes for Alcohol Use Disorder Identification Test - Consumption AUDIT-C and PROMIS short form - alcohol use 7a - version 1.0.

- The [Drug Misuse](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.707/expansion) values set contains SNOMED CT clinical judgment codes
to represent conclusions or diagnoses about drug misuse or abuse. In many cases, the value (answer) at `Observation.value` may be boolean true \| false.

{% include assessment-valueset-table-generator.html %}

This information is also available as a [csv](tables/assessments-valuesets.csv) or [excel](tables/assessments-valuesets.xlsx) file:


#### Codes for Problems/HealthConcerns, Goals, Service Requests, and Procedures

US Core uses broadly defined value sets that contain concepts used across use cases, including SDOH. For the SDOH Clinical Care HL7 Implementation Guide, the Gravity Project has defined "Grouped Value Sets" across specific social risk factor domains for problems/health concerns, goals, procedures, and service requests. Value sets for each SDOH domain are bundled together to create the groupings. The links below are to these Gravity Project-managed value sets in the [Value Set Authority Center (VSAC)]. In VSAC, clicking "Grouping Members" within the Value Set Details tab will present the many individual value sets in the group representing the various SDOH domains. These grouped value sets are narrower subsets of the value sets allowed in the respective US Core Profiles. However, when recording SDOH data US Core Profiles, Servers **SHOULD** use them.

* [Social Determinants of Health Conditions Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.788/expansion)
* [Social Determinants of Health Procedures Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.789/expansion)
* [Social Determinants of Health Goals Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.71/expansion)
* [Social Determinants of Health Service Requests Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.790/expansion)

 The figure below illustrates how the Gravity value sets are grouped for use in the US Core Condition Problems and Health Concerns Profile and how the grouped value set is compatible with the broader US Core Problem code value set.
 


{% include img-med.html img="sdoh_condition.svg" caption="SDOH Grouped Value Set Reuse in US Core" %}



### Examples

These examples show what Screening and Assessments data produced and consumed by systems conforming with this implementation guide might look like.

{% include assessment_examples.md %}


{% include link-list.md %}


---

// File: input/pagecontent/search-parameters-and-operations.md

### Operations

The following operation has been defined for the US Core Implementation Guide. For more information on [FHIR RESTful operations], see the FHIR specification.

  {% include list-simple-operationdefinitions.xhtml %}

<br />

### Search Parameters
<div class="bg-success" markdown="1">

The following search parameters have been defined for the US Core Implementation Guide. The FHIR specification provides more information on the [FHIR RESTful search API] and the standard [Search Parameter Registry].

**SEE IMPLEMENTER NOTES BELOW**

</div><!-- new-content -->

#### Optional Search Parameters
<div class="bg-success" markdown="1">

The following search parameters have been defined as optional search parameters for search.  US Core does not define any Server or Client expectations for their use.
</div><!-- new-content -->

- [race]
- [ethnicity]
- [gender-identity]

#### Search Parameters defined by this Implementation Guide
<div class="bg-success" markdown="1">

The following search parameters have been defined by US Core. They are defined to be used for search and to document Server and Client expectations. Unlike the search parameter in the next section, they are not derived from the standard FHIR SearchParameters.
</div><!-- new-content -->

##### CareTeam
- [role]

##### Condition
- [asserted-date]

##### Encounter
- [discharge-disposition]

##### Goal
- [description]

##### Patient

#### Search Parameters derived from the Base FHIR Specification
<div class="bg-success" markdown="1">

These SearchParameter are used solely to document Server and Client expectations. Their definitions are derived from the standard FHIR SearchParameter and define additional expectations for the following SearchParameter elements:

- `multipleAnd`
- `multipleOr`
- `comparator`
- `modifier`
- `chain`

They **SHALL NOT** be interpreted as search parameters for search. Servers and Clients **SHOULD** use the standard FHIR SearchParameters.

</div><!-- new-content -->
{% include uscore_sp_list.md %}

{% include link-list.md %}


---

// File: input/pagecontent/security.md


### Patient Privacy and Security

US Core transactions often use patient-specific information, which could be exploited by malicious actors resulting in the exposure of patient data. For this reason, all US Core transactions must be secured appropriately with access to limited authorized individuals, data protected in transit, and appropriate audit measures taken.

Implementers **SHOULD** be aware of these [security considerations] associated with FHIR transactions, particularly those related to:

-   [Communications]
-   [Authentication]
-   [Authorization/Access Control]
-   [Audit Logging]
-   [Digital Signatures]
-   [Security Labels]
-   [Narrative]

For US Core, security conformance requirements are as follows:


- Systems **SHALL** establish a risk analysis and management regime that conforms with HIPAA security regulatory requirements. In addition, US Federal systems **SHOULD** conform with the risk management and mitigation requirements defined in NIST 800 series documents. This **SHOULD** include security category assignment following NIST 800-60 vol. 2 Appendix D.14. The coordination of risk management and the related security and privacy controls – policies, administrative practices, and technical controls – **SHOULD** be defined in the Business Associate Agreement when available.
- Systems **SHALL** reference a single time source to establish a common time base for security auditing and clinical data records among computing systems. The selected time service **SHOULD** be documented in the Business Associate Agreement when available.
- Systems **SHALL** keep audit logs of the various transactions.
-   Systems **SHALL** use TLS version 1.2 or higher for all transmissions not taking place over a secure network connection.
     (Using TLS even within a secured network environment is still encouraged to provide defense in depth.) US Federal systems **SHOULD** conform with FIPS PUB 140-2.
-   Systems **SHALL** conform to [FHIR Communications Security] requirements.
-   For Authentication and Authorization, Systems **SHALL** support <span class="bg-success" markdown="1">[SMART App Launch] Version 2.0.0</span><!-- new-content --> for Client <-> Server interactions. NOTE: The SMART App Launch specifications include the required OAuth 2.0 scopes for enabling security decisions.
-   Systems **SHALL** implement consent requirements per their state, local, and institutional policies. The Business Associate Agreements **SHOULD** document systems' mutual consent requirements.
-   Systems **SHOULD** provide Provenance statements using the [US Core Provenance Profile] resource and associated requirements.
-   Systems **MAY** implement the [FHIR Digital Signatures] and provide feedback on its appropriateness for US Core transactions.
-   Systems **MAY** protect the confidentiality of data at rest via encryption and associated access controls. The policies and methods used are outside the scope of this specification.

### Clinical Safety

When implementing FHIR and US Core, implementers need to be aware of the risks and tradeoffs and are encouraged to review the [clinical safety] section in the core specification.

{% include link-list.md %}


---

// File: input/pagecontent/terminology.md


This page lists all the ValueSets, CodeSystems, and ConceptMaps defined as part of the US Core Implementation Guide. For more information on using codes in US Core, see the [FHIR Terminology] section in the FHIR specification and the [Coded Elements] section in this guide.

### Value Sets

Most value sets used in this guide are defined in the base FHIR specification, [HL7 Terminology (THO)], or Value Set Authority Center (VSAC)]. However, the following value sets have been defined for this implementation guide and are not listed elsewhere.

<!-- ================================================ -->
<!--  use this line to include an autogenerated list of all profiles and highlight new ones using the input/data/new_stuff.yml list. Remove it if you would like to hand generate it -->

{% include res-list-generator.md type="ValueSet" %}

<!-- ================================================ -->





#### Value Sets Used in US Core

The following table lists all the Value sets used in US Core and where they can be found. This information is also available as a [csv](tables/valueset-ref-all-list.csv) or [excel](tables/valueset-ref-all-list.xlsx) file. 

{% include valueset-ref-all-table-generator.html %}


### Code Systems

See the [FHIR terminology section]({{site.data.fhir.path}}terminologies-systems.html) for a complete discussion on code systems and a list of code system names used in FHIR. Most code systems used in this guide are defined in the base FHIR specification. However, the following code systems are unique to this guide and not listed in the base FHIR specification. If a URI is listed here, it **SHALL** be used in the US Core profiles to identify the code system in preference to any other code system URI.


#### Code systems published in this IG*- Includes US Core defined code systems and externally defined code systems

<!-- ================================================ -->
<!--  use this line to include an autogenerated list of all profiles and highlight new ones using the input/data/new_stuff.yml list. Remove it if you would like to hand generate it -->

{% include res-list-generator.md type="CodeSystem" %}

<!-- ================================================ -->

<br />

#### Externally Published code systems

|URI|Source|Comment|OID (for non-FHIR systems)|
|---|---|---|---|
|`https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets`|[CMS](https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets)|*Healthcare Common Procedure Coding System (HCPCS) Level II alphanumeric codes*|2.16.840.1.113883.6.285|
|`http://www.cms.gov/Medicare/Coding/ICD10`|[CMS](http://www.cms.gov/Medicare/Coding/ICD10/)|*International Classification of Diseases, 10th Revision, Procedure Coding System (ICD-10-PCS)* -  See [ICD-10 PCS Codes](http://www.icd10data.com/icd10pcs) for online access to codes for general information purposes. |2.16.840.1.113883.6.4|
|`http://www.ada.org/cdt`|[ADA](http://www.ada.org/en/publications/cdt)|*Code on Dental Procedures and Nomenclature*|2.16.840.1.113883.6.13|
|`https://www.usps.com`|[USPS](http://pe.usps.com/text/pub28/28apb.htm)|*United States Postal Service Two–Letter State and Possession Abbreviations*|2.16.840.1.113883.6.92|
{:.grid}



#### Code System Used in US Core

The following table lists all the CodeSystems used in US Core and where they can be found. This information is also available as a [csv](tables/codesystem-ref-all-list.csv) or [excel](tables/codesystem-ref-all-list.xlsx) file. 

{% include codesystem-ref-all-table-generator.html %}


### The Value Set Authority Center (VSAC)

This guide links terminology directly to the FHIR® Terminology Service for VSAC Resources ([Value Set Authority Center (VSAC)]), where applicable, using a RESTful API service to access the VSAC value sets and supported code systems. See the table above for a list of value sets used in US Core that VSAC defines.


####   How to Acess Value Sets in VSAC


  -  VSAC requires login using your own *UMLS API Key* to view the value sets. [VSAC UMLS Licensing information](https://www.nlm.nih.gov/vsac/support/usingvsac/requestumlslicense.html). (See the screenshots below)
  - The value sets in VSAC are specified using a VSAC value set OID.  
  - To view the value set expansion in the VSAC user interface, use:

      `GET https://vsac.nlm.nih.gov/ValueSet/[VSAC OID]/expansion`

    An example of this is shown in the screenshots below.  

  - To fetch the FHIR ValueSet resource (in other words, the value set definition), use:

       `GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID]`

  - To fetch the FHIR ValueSet resource expansion, use the FHIR `$expand` operation:

       `GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID]/$expand`

For more information, refer to the [FHIR Terminology Service for VSAC Resources](https://www.nlm.nih.gov/vsac/support/usingvsac/vsacfhirapi.html)


For example, the [US Core Smoking Status Observation Profile] `valueCodeableConcept` element has a preferred binding to the Smoking Status value set. To access it in VSAC, click on the link to `https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.11.20.9.38/expansion`:

 {% include img.html img="vsac-1.png" caption="Figure 1: VSAC link" %}

The reader is redirected to the VSAC login page to enter an API Key (only one login is required per session):

 {% include img.html img="vsac-2.png" caption="Figure 2: VSAC API-Key Login" %}

After successfully entering the API Key, the value set can be inspected, downloaded, etc., using the VSAC User interface, as shown in the figure below. This FHIR ValueSet resource can also be fetched using the URL `https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.11.20.9.38`, and the FHIR ValueSet expansion using the URL `https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.11.20.9.38/$expand`.

 {% include img.html img="vsac-3.png" caption="Figure 3: VSAC Smoking Status ValueSet" %}


{% include link-list.md %}


---

// File: input/pagecontent/uscdi.md

<!-- {% raw %} to make the USCDI table

need 

source CSV file = `input/data/uscdi-table.csv`
markdown page file = `input/pagecontent/uscdi.md`
liquid template files = `input/includes/uscdi-uscore-map.html`,`input/includes/sd_link.html`
icons (png files) = `input/images/<"kebab case" USCDI class names>.png`

1. create the source CSV file with all the same column names
    - FHIRPath column is not used for rendering so can replace with template name or whatever
    - this file lives in the `input/data` folder
    - It is copied to the `input/images` folder as both a csv and convert to excel file using a bash/python script.
2. The pagecontent/uscdi.md page is where the table is rendered
3. the liquid template tag "{% include uscdi-uscore-map.html %}" references `includes/uscdi-uscore-map.html` which does the rendering
   - this file depends on another liquid template {% include sd_link.html title = title  %} which refererence `includes/sd_link.html` to get the profile page link.
   1. icons (png images) are in the `input/images` are named using the "kebab case" USCDI class names.{% endraw %} -->

<div class="bg-success" markdown="1">

The US Core Profiles were initially designed to meet the 2015 Edition certification criterion for Patient Selection 170.315(g)(7) and Application Access – Data Category Request 170.315(g)(8). US Core Editors have updated the guide annually to meet subsequent [U.S. Core Data for Interoperability (USCDI)] requirements: 

{% include uscdi-uscore-version-table.md %}

</div><!-- new-content -->
ONC's USCDI and FHIR US Core are complementary initiatives, with USCDI defining high-level data requirements and FHIR US Core providing detailed FHIR-based profiles for meeting those requirements. Mapping between them is necessary for achieving interoperability and consistency in healthcare data exchange within the United States. However, to make USCDI implementable in FHIR, an interpretation of USCDI is necessary. For information about what US Core Profile elements and US Core transactions are in scope for ONC Health IT Certification, see the US Core [Conformance] pages.

Note that:
-  USCDI Data Classes and Element names may differ from the FHIR US Core resource names and element names.
-  Not every USCDI Data Class and Element is mapped to a single profile.
-  Many US Core Profile elements do not map to a USCDI Data Classes and Element because US Core's usage is broader than certification and because additional US Core elements are required to make FHIR implementable.

Updates to US Core depend upon community input, and we encourage our audience to submit questions and feedback to US Core specifications by clicking on the *Propose a change* link in the footer of every page. In addition, we encourage our audience to request any necessary clarifications to USCDI through the [USCDI ONDEC process] that will help inform future updates to FHIR US Core.

The table below defines the relationship between the USCDI Data Classes and Elements and USCore profiles. It lists the US Core Profile used for the corresponding Data Classes and Elements. This information and [FHIRPath] expressions to USCDI Data Classes and Elements are available as a [csv](tables/uscdi-table.csv) or [excel](tables/uscdi-table.xlsx) file:

{% include uscdi-uscore-map.html %}

{% include link-list.md %}





   


---

// File: input/pagecontent/vitals-write.md


### Examples

Patient-facing
- A provider creates an order in an EHR for patient home monitoring. Then, the patient's blood pressure cuff sends data to an app on their phone that writes it into their record. The EHR automatically associates the blood pressure data with the appropriate order.
- A patient uses an app to retrieve their vital signs from the EHR, which were recorded during a specialist visit, and they write them to the EHR used by their primary care provider. The provider can review the vital signs within the EHR and incorporate them into the record.

Provider-facing
- A blood pressure cuff sends readings to an app on a practice tablet that a clinical user uses to write the data to a patient's record in the EHR.
- A patient app saves data to a repository controlled by the app developer. Then, the patient uses a "share with provider" function to enable the provider to access this data with an app installed in the provider's EHR. The provider writes some or all of the observations into the patient's record in the EHR.


### Configuration
Servers **SHALL** document support for writing Observation resources in their Capability Statements by including a `CapabilityStatement.rest.resource[type=Observation].interaction` with a `code` of `create`. Servers that support the ability to update Observation resources **SHALL** also include an `interaction` with a `code` of `update`.


### SMART Scopes

#### Patient-facing apps

Servers providing the ability to write FHIR vital sign Observation resources from patient-facing apps **SHALL** support the registration and authorization of apps with the `patient/Observation.c?category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs` SMART scope or a broader version of this scope such as `patient/Observation.c`. Note that `read` and `search` capabilities are already implied by [US Core Vital Signs profile](http://build.fhir.org/ig/HL7/US-Core/StructureDefinition-us-core-vital-signs.html).

Servers providing the ability to write FHIR vital sign Observation resources from patient-facing apps **SHOULD** also support the registration and authorization of apps with the `patient/Observation.u?category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs` SMART scope or a broader version of this scope such as `patient/Observation.u`. Note that systems can support only limited [update](#updating-previously-submitted-observations) capabilities. 

When offering a patient write capability, health systems may choose to enable or disable this capability based on factors such as the provider, patient, payer, app, and vital type, or may choose to enable the capability broadly. If patients and apps attempting to write data are not enabled, and this can be discerned during the authorization process, the Server **SHALL** omit these unsupported scopes from the resulting access token. If an app uses an access token without the required scopes to submit an `Observation` or the patient is not enabled to write data, the Server **SHALL** return an error and **SHOULD** include an `OperationOutcome` in the response body.

#### Provider-facing apps

Servers providing the ability to write FHIR vital sign Observation resources from provider-facing apps **SHALL** support the registration and authorization of apps with the `user/Observation.c?category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs` and `system/Observation.c?category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs` SMART scopes or broader versions of these scopes such as `user/Observation.c` and `system/Observation.c`. Note that `read` and `search` capabilities are already implied by [US Core Vital Signs profile](http://build.fhir.org/ig/HL7/US-Core/StructureDefinition-us-core-vital-signs.html).

Servers providing the ability to write FHIR vital sign Observation resources from provider-facing apps **SHOULD** also support the registration and authorization of apps with either `user/Observation.u?category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs` and `system/Observation.u?category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs` SMART scopes, or broader versions of these scopes such as `user/Observation.u` and `system/Observation.u`. Note that systems can support only limited [update](#updating-previously-submitted-observations) capabilities. 

#### Configuration
Servers **SHALL** document supported scopes in the `scopes_supported` section of a `.well-known/smart-configuration` [capabilities array](https://build.fhir.org/ig/HL7/smart-app-launch/conformance.html#launch-context-for-standalone-launch).


### Resource Submission

Servers **SHALL** support the submission of Observation resources that _are not_ the result of a calculation and validate against a [US Core Vital Sign Profile](https://build.fhir.org/ig/HL7/US-Core/profiles-and-extensions.html#observation) that corresponds to a version used by the Server for vital sign Observation read requests.

Servers **MAY** support the submission of Observation resources that _are_ the result of a calculation (such as the "US Core Pediatric BMI for Age Observation Profile") and validate against a [US Core Vital Sign Profile](https://build.fhir.org/ig/HL7/US-Core/profiles-and-extensions.html#observation) that corresponds to a version used by the Server for vital sign Observation read requests.

Servers **SHALL** respond to supported and valid vital sign Observation creation requests with a status code of `200 OK` and a content location header, or with a status code of `202 Accepted`. If a content location header is provided, the resources **SHALL** be visible in subsequent read API calls and accessible within the system in the same manner as other patient-submitted data. If a content location header is not provided, and the Server does not subsequently make the resource accessible in read API calls, the Server **SHALL** have a documented and discoverable reason why it was discarded (e.g., a log entry describing rejection during a review workflow or the applicability of a condition in the "Discarding" section below).

Servers **SHALL** support the creation of a single vital sign through a FHIR `create` operation, and **MAY** support the creation of multiple vital signs by submitting a FHIR `Batch` bundle. When batch creation is supported, Clients **MAY** use this approach to indicate that a set of Observation resources should be reviewed as a group, and systems **MAY** use this information when sending notifications or displaying the data.

Systems may choose to segregate data that originated from a patient from other vital sign data for the patient (for example, showing it on a separate patient flow sheet).

The workflow for submitted Observations is the responsibility of the receiving system and is out of scope for this version of the guide (e.g., requiring provider review for patient-submitted resources before fully integrating them in the chart).

#### Observation Elements

`meta.tag` 
- Client - When writing patient-mediated data into the Server, provider-facing apps **SHALL** include a `Meta.tag` with a system of `http://hl7.org/fhir/us/core/CodeSystem/us-core-tags` and a value of `patient-supplied` to indicate that the data was supplied by a patient or patient designee (such as a parent or spouse) rather than by a healthcare provider.
- Server - Systems **SHALL** associate the `patient-supplied` tag with vital signs provided by a patient written through this API, and **MAY** associate the tag with vital signs supplied by a patient regardless of how they arrive in the system. Provider-facing apps writing data supplied by a patient **SHALL** include this tag in the submitted Observation resources. The Server **MAY** subsequently dissociate the tag from the data through an explicit reconciliation process.

<div class="stu-note" markdown="1">
An alternate way to tag any patient-generated data would be to use the  code "PATAST" in the `meta.security` element of the resource:

  > PATAST | patient asserted: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability. was asserted by a patient.)
  
We are seeking feedback from the community on whether this more compact approach from the FHIR standard could be adopted and supported.
</div><!-- stu-note --> 

`encounter` 
- Client - If populating this element, apps **SHALL** use a reference to an Encounter resource in the Server, and **MAY** use the value returned by the `launch/encounter` SMART scope. 
- Server - Systems **SHOULD** document whether the `encounter` element is required to create a vital sign. When not required, Servers **MAY** determine this value based on context if it is omitted.

`subject` 
- Client - Apps **SHALL** populate the `subject` reference with a reference to a Patient resource in the Server. Patient-facing apps **SHOULD** populate this element based on the value returned as part of the `launch/patient` SMART scope.
 
`device` 
- Client - Apps **MAY** populate the `device` reference with a reference to the Device resource in the Server or a contained Device resource within the Observation. This is the device used to measure the vital sign (e.g., a BP cuff), not the device used to transmit the data (e.g., a phone). Contained device resources **SHALL** populate at least one `deviceName` element. 
- Server - When this value is populated with a reference to a Device resource on the Server, Servers **SHALL** return this reference in subsequent reads operations of the resource that was created. When this value is populated with a reference to a valid contained Device resource, Servers **MAY** ignore the contained Device, return the contained Device as part of subsequent read operations, or create a Device resource in the system and return a reference to it in subsequent read operations. Servers **SHALL** not return an error due to the presence of a valid contained Device resource. Servers **SHOULD** document their behavior with regard to contained Device resources.

`performer` 
- Client - Apps **SHOULD** populate the `performer` element with a reference to a resource in the Server when the resource exists, or the app can create it. For patient-facing apps, if the app knows that a patient collected this data, the app **SHALL** set the `performer` to a reference to the patient based on the SMART launch context (this should also match the `Observation.subject`). If the relevant resource does not exist and the app cannot create it, the app **SHOULD** populate `performer.display`.
- Server - When this value is populated in a successful create operation, systems **SHALL** return it in subsequent read operations of the resource that was created. Note that `performer` is not currently required in the US Core vital signs profile.


### Discarding Observations

For a given vital sign type, if many Observations are submitted with `effectiveDateTime` or `effectivePeriod` values that are close in time, a Server **MAY** choose to discard a portion of these Observations or **MAY** reject submitted Observations with an appropriate OperationOutcome. Systems **SHALL** clearly document this behavior or the ways in which health systems may customize this behavior in the API documentation.

If a Server determines that a vital sign is a duplicate of one it has already stored, the Server **MAY** ignore the Observation or **MAY** reject the submitted Observation with an appropriate OperationOutcome. Systems **SHALL** clearly document this behavior or the ways in which health systems may customize this behavior in the API documentation.

### Updating Previously Submitted Observations

Servers **SHOULD** support the ability for patients-facing apps to update the `status` element of a vital sign resource the user previously wrote to the system from any app to `entered-in-error` through an `update` interaction. This capability **SHOULD** only be used by apps to address data mistakes in data submission. 

### Including Provenance Information

Servers **MAY** ignore contained Provenance resources in an Observation being submitted but **SHALL** not return an error due to their presence.

#### Resource retrieved from an external organization

{% include img.html img= "fhir-write1.svg" caption= "Figure 1: Resources retrieved from an external organization" %}

When writing an Observation that was retrieved from an external organization (e.g., a health system's EHR or a device manufacturer's cloud data store):

- Apps **SHALL** pass through any Provenance resources received from the source system, unaltered (except for references, as described below), as contained resources on the Observation. A source system compliant with the US Core FHIR profiles **SHOULD** include a Provenance resource with `agent.type = author` that the app can pass through. The app **SHALL** also pass through resources referenced in elements that are labeled as "Must Support" in the USCDI Provenance profile and populated in the Provenance resources, including them as contained resources in the Observation and updating the references to them.
- When a Provenance resource with `agent.type = author` is not received from the source system, apps **SHALL** generate a contained Provenance resource with:
  - `recorded` set to date and time recorded
  - `agent.type = author` that has `agent.who` set to the organization/provider that authored the content, with at least the `who.display` element populated.
    - When available, a `who.identifier.value` should be set to the URL where that data was retrieved, and `who.identifier.system` should be set to `urn:ietf:rfc:3986`
- Apps **MAY** include a Provenance resource with `agent.type = transmitter` with information on the entity that submitted the data. Systems **MAY** store and display this information and **MAY** populate this information based on the SMART context associated with the write.

Example:
```js
{
  "resourceType": "Observation",
  "contained": [{
    "resourceType": "Provenance",
    "id": "contained_1",
    "target": [{"reference": "#"}],
    "recorded": "2019-07-09T15:26:23.217+00:00",
    "agent": [{
      "type": {
        "coding": [{
          "system": "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
          "code": "author",
          "display": "Author"
        }]
      },
      "who": {
        "display": "Saint Luke \'s Hospital of Kansas City",
        // identifier could be a URL, as in Patient Access Brands
        "identifier": {
          "system": "urn:ietf:rfc:3986",
          "value": "https://stlukes.example.org"
        }  
      }
    },{
      "type": {
        "coding": [{
          "system": "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
          "code": "transmitter",
          "display": "Transmitter"
        }]
      },
      "who": {
        //this is the user submitting the data
        //can be populated by the EHR based on the SMART context if omitted
        "reference": "Patient/123"
      }
    }]
  }]
  // ... other Observation elements
}
```

#### Resources not retrieved from an external organization

{% include img.html img= "fhir-write2.svg" caption= "Figure 2: Resources not retrieved from an external organization" %}

When writing an Observation that was not retrieved from an external organization (e.g., transmitted by a home blood pressure cuff or manually entered by a patient):

   - Apps **MAY** include a contained Provenance resource with `agent.type = author` containing information on the party that wrote the data. Systems **MAY** store and display this information and **MAY** populate it based on the SMART context associated with the write.
  - Apps **MAY** include one or more contained Provenance resources with `agent.type = composer` and `agent.type = assembler` with information on the device, app, or apps that captured or passed along the data.


Example:
```js
[{
  "resourceType": "Provenance",
  "target": [{"reference": "#"}],
  "recorded": "2019-07-08",
  "agent": [{
    "type": {
      "coding": [{
        "system": "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
        "code": "composer",
        "display": "Composer"
      }]
    },
    "who": {
      //this is the app that provided the original data
      "display": "OMRON for iOS"
    }
  },{
    "type": {
      "coding": [{
        "system": "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
        "code": "author",
        "display": "Author"
      }]
    },
    "who": {
      "reference": "Patient/123"
    }
  }]
},{
  "resourceType": "Provenance",
  "target": [{"reference": "#"}],
  "recorded": "2019-07-09T10:26:23.217+00:00",
  "agent": [{
    "type": {
      "coding": [{
        "system": "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
        "code": "assembler",
        "display": "Assembler"
      }]
    },
    "who": {
      //this is the app that transmits the data
      "display": "Healthkit" 
    }
  }]
}]
```

---

// File: input/_resources/README.md

This folder contains 'private' resources used for publishing and hidden from the reader.  Won't show up in the IG.


---

// File: input/data/README.md

This folder contains project specific data file for use as site variables.  see https://jekyllrb.com/docs/datafiles/


---

// File: input/images-source/USCore USCDI Table HowTo fix links.md

when loading the ppt file to google slides: 

https://docs.google.com/presentation/d/1dABTWwUuHP2vkg9Lxxx37AI1T3wsy7CELMP7ekD45aQ/edit?usp=sharing

1. resize to 10" x 28"  ( file/page setup)
1. ressize all icons to max size as close to .34 " as possible
1. set default font color for links to white in master file


download as svg file to _input/includes/USCDI_v2_table_links.svg

regex to find and replace bad links generated by Google Slides

1. replace structuredefinition with StructureDefinition

1. replace using regex:

~~~

<a xlink:href="https://www.google.com/url\?q=http://(.*?)\.html.*?>

~~~

with

~~~
<a xlink:href="$1.html">

~~~


1. replace

 structureoccipital-frontal-circumference-percentile.html

 StructureDefinition-head-occipital-frontal-circumference-percentile.html

---

// File: input/images/README.md

This folder contains binary files such as images (including source files such as powerpoint slided), scv, pdf etc.  which are used as static files in Jekyll:  see https://jekyllrb.com/docs/static-files/


---

// File: input/includes/additional-codings.md

- Additional codes that translate or map to the Observation code or category codes are allowed.  For example:
   -  providing both a local code and a LOINC code
   -  providing a more specific code{% if include.example1 %}{{ include.example1 }}{% endif %}, a [SNOMED CT] concept, or a system-specific code

---

// File: input/includes/additional-requirements-intro.md

<!--format of include file 
include parameters:
type (required): resource type (e.g, Patient)
plural (optional): any text (e.g, 'true') if present multiple additional requirements = true, if not present single requirement
up to three LOINCs (1 or 3 required)
for example
{% raw %} {% include additional-requirements-intro.md type="Patient" plural="true" %} or {% include additional-requirements-intro.md type="DocumentReference" %} {% endraw %}
-->


**Additional USCDI Requirements:**

{% if include.plural %}These [Additional USCDI Requirements] elements are{% else %}This [Additional USCDI Requirements] element is{% endif %} not Mandatory or Must Support but {% if include.plural %}are{% else %}is{% endif %} required for ONC Health IT certification testing and {% if include.plural %}are{% else %}is{% endif %} included in the formal definition of the profile and the {{include.type}} examples.


---

// File: input/includes/additional-uscdi-requirements.md


<!--  liquid script for creating a markdown table from a csv file in the input/data folder source file = input/data/additional-uscdi-requirements.csv. columns:
 'IsNew' - new element for highlighting
'AddlUSCDI:  USCDI DE
'Profile': Profile name using markdown link brackets
'FHIRElement': FHIR element that is add'l USCDI
 -->

{% assign rows = site.data.additional-uscdi-requirements %}
{% for item in rows -%}
{% if forloop.first -%}
| Additional USCDI Requirements | Profile | FHIR Element |
|---|---|---|
{% else -%}
{% if item.Is_New == "True" %}|<span class="bg-success" markdown="1">{{item.Addl_USCDI}}</span><!-- new-content -->|<span class="bg-success" markdown="1">[{{item.Profile}}]</span><!-- new-content -->|<span class="bg-success" markdown="1">`{{item.FHIR_Element}}`</span><!-- new-content -->|{% else %}|{{item.Addl_USCDI}}|{{item.Profile}}|`{{item.FHIR_Element}}`|{% endif %}
{% endif -%}
{% if forloop.last %}{:.grid}{% endif -%}
{% endfor %}







---

// File: input/includes/assessment_examples.md

{% assign assessments = "SDOH,Functional,Disability,Mental,PE,Booze,Drugs" %}
{% for group in site.data.uscdi-examples.groups %}
{%- if assessments contains group[0] -%}
#### {{ group[1].description }}

{% for example in group[1].resources -%}
- {% include example_link.md example=example %}
{% endfor -%}
{%- endif -%}
{% endfor %}

---

// File: input/includes/boilerplate-clia-warning.md

*This example may lack required data for laboratory results transmitted by a laboratory certified to perform testing on human specimens under the [Clinical Laboratory Improvement Amendments (CLIA)](http://www.cdc.gov/clia/).


---

// File: input/includes/ccds_table.md


USCDI Data Element | US Core Profile | FHIR Resource
---|---|---
(1) |  Patient Name | [US Core Patient Profile] | Patient
(2) |  Sex | [US Core Patient Profile] | Patient
(3) |  Date of birth | [US Core Patient Profile] | Patient
(4) |  Race | [US Core Patient Profile] | Patient
(5) |  Ethnicity | [US Core Patient Profile] | Patient
(6) |  Preferred language | [US Core Patient Profile] | Patient
(7) |  Smoking status | [US Core Smoking Status Observation Profile] | Observation
(8) |  Problems | [US Core Condition Problems and Health Concerns Profile] | Condition
(9) |  Medications | [US Core Medication Profile], [US Core Medication Statement Profile], [US Core Medication Request Profile] | Medication, MedicationStatement, MedicationRequest
(10) |  Medication allergies | [US Core Allergies Profile] | AllergyIntolerance
(11) |  Laboratory test(s) | [US Core Laboratory Result Observation Profile], [US Core DiagnosticReport Profile for Laboratory Results Reporting]| Observation, DiagnosticReport
(12) |  Laboratory value(s)/result(s) |  [US Core Laboratory Result Observation Profile], [US Core DiagnosticReport Profile for Laboratory Results Reporting] | Observation, DiagnosticReport
(13) |  Vital signs | [Vital Signs Profile] (From FHIR Core Profiles for Observation) | Observation
(14) |  (no longer required) | -
(15) |  Procedures | [US Core Procedure Profile] | Procedure
(16) |  Care team member(s) | [US Core CareTeam Profile] | CareTeam
(17) |  Immunizations | [US Core Immunization Profile] | Immunization
(18) |  Unique device identifier(s) for a patient's implantable device(s) | [US Core Implantable Device Profile] | Device
(19) |  Assessment and plan of treatment | [US Core CarePlan Profile] | CarePlan
(20) |  Goals | [US Core Goal Profile] | Goal
(21) |  Health concerns | [US Core Condition Problems and Health Concerns Profile] | Condition
(21) |  Health concerns | [US Core Condition Problems and Health Concerns Profile] | Condition
(21) |  Health concerns | [US Core Condition Problems and Health Concerns Profile] | Condition
{: .grid #grid}


---

// File: input/includes/conditional-goals-guidance.md

- The context or precondition of a patient's preference SHOULD be supplied in:
  - the `Observation.valueString` (for example, "If this [health scenario] were to occur, ...”) or
  - an extension such as the PACIO Advance Directive Interoperability Implementation Guide's [Enclosed Precondition Extension].

---

// File: input/includes/conform-patient.md


~~~
{
  "resourceType": "CapabilityStatement",
  ...
  "instantiates": [
    "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-Server"
  ],
  ...
  "rest": [
    {
      "mode": "Server",
      ...
      "resource": [
        ...
        {
          [
            {
              "extension": [
                  {
                    "url": "required",
                    "valueString": "birthdate"
                  },
                  {
                    "url": "required",
                    "valueString": "name"
                  }
                  ],
                  "url": "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
                },
                {
                  "extension": [
                    {
                      "url": "required",
                      "valueString": "family"
                    },
                    {
                      "url": "required",
                      "valueString": "gender"
                    }
                  ],
                  "url": "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
                },
                {
                    {
                      "url": "required",
                      "valueString": "birthdate"
                    },
                    {
                      "url": "required",
                      "valueString": "family"
                    }
                  ],
                  "url": "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
                },
                {
                  "extension": [
                    {
                      "url": "required",
                      "valueString": "gender"
                    },
                    {
                      "url": "required",
                      "valueString": "name"
                    }
                  ],
                  "url": "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
                }
              ]
            }
          ]
          "type": "Patient",
          "supportedProfile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
          ],
          "interaction": [
            {
              "code": "create"
            },
            {
              "code": "search-type"
            },
            {
              "code": "read"
            }
          ],
          "referencePolicy": [
            "resolves"
          ],
          "searchRevInclude": [
            "Provenance:target"
          ],
          "searchParam": [
            {
              "name": "_id",
              "definition": "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-id",
              "type": "token"
            },
            {
              "name": "identifier",
              "definition": "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-identifier",
              "type": "token",
              "documentation": "The Client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe Server **SHALL** support both."
            },
            {
              "name": "name",
              "definition": "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-name",
              "type": "string"
            }

          ],
          ...
        }
      ]
    }
  ]
}
~~~


---

// File: input/includes/DAR-exception.md

- \*An Observation without a value, **SHALL** include a reason why the data is absent *unless* there are 1) component observations, or 2) reporting panel observations using `Observation.hasMember`.
  - For further guidance, see the [Observation Grouping] section in FHIR Specification.
  - Systems that never provide an observation without a value are not required to support `Observation.dataAbsentReason`.
- \*An `Observation.component` without a value, **SHALL** include a reason why the data is absent.
  - Systems that never provide a component observation without a component value are not required to support `Observation.component.dataAbsentReason`.


---

// File: input/includes/diagnosticreport-clinical-note-post.md


An example to demonstrate writing a note to the Server.

**Clinical Note**

~~~

{
  "resourceType": "DiagnosticReport",
  "id": "chest-xray-report",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note"
    ]
  },
  "status": "final",
  "category": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "LP29684-5",
        "display": "Radiology"
      }
    ],
    "text": "Radiology"
  },
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "30746-2",
        "display": "Portable XR Chest Views"
      }
    ],
    "text": "Portable XR Chest Views"
  },
  "subject": {
    "reference": "Patient/example"
  },
  "effectiveDateTime": "2019-02-03T19:43:30.000Z",
  "presentedForm": [\

      "contentType": "application/xhtml",
      "data": "PCFET0NUWVBFIGh0bWwgUFVCTElDICItLy9XM0MvL0RURCBYSFRNTCAxLjAgVHJhbnNpdGlvbmFsLy9FTiIgIkRURC94aHRtbDEtdHJhbnNpdGlvbmFsLmR0ZCI+CgkJPGh0bWwgeG1sOmxhbmc9ImVuIiBsYW5nPSJlbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiPgkJCiAgPGhlYWQ+CiAgICA8dGl0bGU+Q2hlc3QgUG9ydGFibGU8L3RpdGxlPgogIDwvaGVhZD4KICA8Ym9keT4KICAgIDxwPlJlc3VsdDwvcD4KICAgIDxici8+Q2hlc3QgUG9ydGFibGUgCiAgICAgIAogICAgICA8cD5JTkRJQ0FUSU9OL0NMSU5JQ0FMIFFVRVNUSU9OOiBGZXZlciAvIFBuZXVtb25pYTwvcD4KICAgICAgCiAgICAgIDxwPkNPTVBBUklTT046IE5vbmUuPC9wPgogICAgICAKICAgICAgPHA+RklORElOR1M6PC9wPgogICAgICAKICAgICAgPHA+TElORVMgQU5EIFRVQkVTOiBOb25lLjwvcD4KICAgICAgCiAgICAgIDxwPkxVTkdTIEFORCBQTEVVUkE6PC9wPgogICAgICA8YnIvPkNsZWFyIGx1bmdzLiBOb3JtYWwgcHVsbW9uYXJ5IHZhc2N1bGFyaXR5LgogICAgICA8YnIvPk5vIHBsZXVyYWwgZWZmdXNpb24uCiAgICAgIDxici8+Tm8gcG5ldW1vdGhvcmF4LgogICAgICAKICAgICAgPHA+SEVBUlQsIE1FRElBU1RJTlVNIEFORCBISUxBOjwvcD4KICAgICAgPGJyLz5IZWFydCBpcyBub3JtYWwgaW4gc2l6ZS4KICAgICAgPGJyLz5Ob3JtYWwgbWVkaWFzdGluYWwgYW5kIGhpbGFyIGNvbnRvdXIuCiAgICAgIAogICAgICA8cD5CT05FUyBBTkQgU09GVCBUSVNTVUVTOjwvcD4KICAgICAgPGJyLz5ObyBhY3V0ZSBhYm5vcm1hbGl0eS4KICAgICAgCiAgICAgIDxwPklNUFJFU1NJT046PC9wPgogICAgICA8YnIvPk5vIGFjdXRlIGFibm9ybWFsaXR5LgogICAgICAKICAgICAgPHA+V1NOOiBPMTlJQy1TQy0wMjExPC9wPgogICAgICAKICAgICAgPHA+RGljdGF0ZWQgQnk6IEN1cmUgTUQsIENocmlzdGluZSBKCiAgICAgICAgRGljdGF0ZWQgRGF0ZS9UaW1lOiAwMi8wMy8xOSA3OjQ0IHBtCiAgICAgICAgUmV2aWV3ZWQgQnk6IEN1cmUgTUQsIENocmlzdGluZSBKCiAgICAgICAgU2lnbmVkIEJ5OiBDdXJlIE1ELCBDaHJpc3RpbmUgSgogICAgICAgIFNpZ25lZCBEYXRlL1RpbWU6IDAyLzAzLzE5IDc6NDQgcG0KICAgICAgICBUcmFuc2NyaWJlZCBCeTogQ1NCCiAgICAgICAgVHJhbnNjcmliZWQgRGF0ZS9UaW1lOiAwMi8wMy8xOSA3OjQzIHBtPC9wPgogICAgICAKICAgICAgCiAgPC9ib2R5Pgo8L2h0bWw+Cg=="
    }
  ]
}

~~~

**Note Content**

The content is Base64 encoded xhtml dictation of a portable chest radiograph study findings.


---

// File: input/includes/diff-display-note.md


<!-- {% raw %}
parameter:
parent_profile (required) Title of US Core Profile from which this profile inherits
example usage:
 {% include diff-display-note.md parent_profile='US Core Laboratory Result Observation Profile' %} {% endraw %} -->
Note that the "Differential Table" displays elements unique to this profile and the "Key Elements Table” displays a combined view of elements for this profile and the {{include.parent_profile |default: "parent profiles"}}.

---

// File: input/includes/docref-example1.md


<!-- includes/docref-example1.md -->
<!-- Example 1 : Request the latest CCD -->

**Request the latest CCD for a patient using `GET` syntax**

`GET [base]/DocumentReference/$docref?patient=123`

**Request the latest CCD for a patient using `POST` syntax**

`POST [base]/DocumentReference/$docref}`

**POST request body:**

~~~
    {
      "resourceType": "Parameters",
      "id": "get-ccd123",
      "parameter": [
        {
          "name": "patient",
          "valueId" : "123"
        }
      ]
    }
~~~

**Response**

~~~
HTTP/1.1 200 OK
[other headers]
~~~

**Response body**

~~~

{% include_relative Bundle-docref-example-1.json %}

~~~


---

// File: input/includes/docref-example2.md


<!-- includes/docref-example2 -->
<!-- Example 2: Request Procedure Notes and Discharge Summaries for 2019 -->


**Request Procedure Notes and Discharge Summaries for 2019 using `POST` syntax**

`POST [base]/DocumentReference/$docref}`

**POST request body:**

~~~
{
    "resourceType": "Parameters",
    "id": "get-docs",
    "parameter": [
        {
            "name": "patient",
            "valueId": "123"
        },
        {
            "name": "start",
            "valueDateTime": "2019-01-01"
        },
        {
            "name": "end",
            "valueDateTime": "2019-12-31"
        },
        {
            "name": "type",
            "valueCoding": {
                "system": "http://terminology.hl7.org/CodeSystem/c80-doc-typecodes",
                "code": "18842-5",
                "display": "Discharge summary"
            }
        },
        {
            "name": "type",
            "valueCoding": {
                "system": "http://terminology.hl7.org/CodeSystem/c80-doc-typecodes",
                "code": "28570-0",
                "display": "Procedures Note"
            }
        },
        {
            "name": "on-demand",
            "valueBoolean": true
        }
    ]
}
~~~

**Response**

~~~
HTTP/1.1 200 OK
[other headers]
~~~

**Response body**

~~~

{% include_relative Bundle-docref-example-2.json %}

~~~


---

// File: input/includes/docref.md


source: docref.md file

    This is the  markdown file that gets inserted into the op.html template.


---

// File: input/includes/documentreference-clinical-note-post.md


An example to demonstrate writing a note to the Server.

**Clinical Note**

~~~

{% include_relative DocumentReference-discharge-summary.json %}

~~~~

**Note Content**

The content is Base64 encoded and states:
 "No activity restriction, regular diet, follow up in two to three weeks with primary care provider."


---

// File: input/includes/dstu2-r4-table2.md


<!--  liquid script for creating a markdown table from a csv file in the input/data folder source file = input/data/dstu2-r4-table.csv  -->

{% assign rows = site.data.dstu2-r4-table %}
{% for row in rows -%}
{% if forloop.first -%}
| {% for pair in row %}{{ pair[0] }} | {% endfor %}
| {% for pair in row %} --- |{% endfor %}
{% else -%}
| {% for pair in row %}{{ pair[1] }}|{% endfor %}
{% endif -%}
{% if forloop.last %}{:.grid}{% endif -%}
{% endfor %}







---

// File: input/includes/encounter-location.md

* The following US Core Profiles *indirectly* reference the location/facility through references to US Core Encounter:
    - [US Core DiagnosticReport Profile for Laboratory Results Reporting]
    - [US Core Immunization Profile]
    - [US Core MedicationDispense Profile]
    - [US Core Observation Clinical Result Profile]
    - [US Core Procedure Profile]
    - [US Core ServiceRequest Profile]

  If the event facility/location differs from the `Encounter.location`, systems **SHOULD** reference it directly:
    - Systems **SHALL** use the `location` element for all resources where the element is available.
    - Systems **MAY** use the standard [Event Location Extension] for US Core DiagnosticReport Profile for Laboratory Results Reporting and US Core Observation Clinical Result Profile.

---

// File: input/includes/ext-list-generator.md

<!-- Use for sorted flat list  Extension allows for highlighting new stuff using include parameter -->
{% assign profile_extensions = "" %}
{%- for sd_hash in site.data.structuredefinitions -%}
  {%- assign sd = sd_hash[1] -%}
  {%- if sd.type == "Extension" -%}
{%- unless ig_only contains sd.name or realm_only contains sd.name -%}
    {% assign profile_extensions = profile_extensions | append: "," | append: sd.name %}
{%- endunless -%}
  {%- endif -%}
{% endfor %}
{%- if include.use == "ig" -%}{% assign my_array = ig_only | split: "," %}
{%- elsif include.use == "realm" -%}{% assign my_array = realm_only | split: "," %}
{%- else -%}{% assign my_array = profile_extensions | split: "," %} <!-- include.use == "profile" -->
{%- endif -%}
{% assign my_array = my_array | sort | uniq %}
<ul>
  {% for i in my_array %}
    {%- for sd_hash in site.data.structuredefinitions -%}
      {%- assign sd = sd_hash[1] -%}
      {%- if sd.name == i %}
        {%- assign new = false -%}
        {%- for new_stuff in site.data.new_stuff -%}
          {%- if new_stuff == i -%}
            {%- assign new = true -%}
            {%- break -%}
          {%- endif -%}
        {%- endfor -%}
        {%- if new -%}
          <li>
            <a href="{{sd.path}}">
              <span class="bg-success" markdown="1">{{ sd.title }}</span><!-- new-content --></a>
          </li>
        {% else %}
          <li>
            <a href="{{sd.path}}">{{ sd.title }}</a>
          </li>
        {% endif %}
      {% endif %}
    {% endfor %}
  {% endfor %}
</ul>

---

// File: input/includes/get-all-active-meds-searchbundle.md

{
    "resourceType": "Bundle",
    "id": "1f8a772f-1a54-4ef7-8bf6-7e27325ca4",
    "meta": {
        "lastUpdated": "2022-04-12T01:01:49.419Z"
    },
    "type": "searchset",
    "total": 3,
    "link": [
        {
            "relation": "self",
            "url": "http://test.fhir.org/r4/MedicationRequest?_format=application/fhir+json&search-id=667926e8-efa6-427e-b801-73c66b1789&&patient=test2&intent=order,plan&status=active&_sort=_id"
        }
    ],
    "entry": [
        {
            "fullUrl": "http://test.fhir.org/r4/MedicationRequest/269",
            "resource": {
                "resourceType": "MedicationRequest",
                "id": "269",
                "meta": {
                    "versionId": "3",
                    "lastUpdated": "2022-04-12T01:01:29.279Z",
                    "profile": [
                        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest"
                    ],
                    "tag": [
                        {
                            "code": "US_Core_5"
                        },
                        {
                            "code": "US_Core_5_Example"
                        }
                    ]
                },
                "status": "active",
                "intent": "order",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                                "code": "outpatient",
                                "display": "Outpatient"
                            }
                        ],
                        "text": "Outpatient"
                    }
                ],
                "reportedBoolean": false,
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                            "code": "104491",
                            "display": "Simvastatin 20 MG Oral Tablet [Zocor]"
                        }
                    ],
                    "text": "Zocor (simvastatin) 20mg Tablet"
                },
                "subject": {
                    "reference": "Patient/test2",
                    "display": "Brian Z"
                },
                "encounter": {
                    "reference": "Encounter/outpatien-Example-1"
                },
                "authoredOn": "2016-01-15",
                "requester": {
                    "reference": "Practitioner/practitioner-drcayr",
                    "display": "Dr Cayr"
                },
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "13644009",
                                "display": "Hypercholesterolemia (disorder)"
                            }
                        ]
                    }
                ],
                "dosageInstruction": [
                    {
                        "sequence": 1,
                        "text": "40mg by mouth once daily",
                        "asNeededBoolean": false,
                        "route": {
                            "coding": [
                                {
                                    "system": "http://ncimeta.nci.nih.gov",
                                    "code": "C38288",
                                    "display": "ORAL"
                                }
                            ]
                        }
                    }
                ],
                "dispenseRequest": {
                    "numberOfRepeatsAllowed": 11,
                    "quantity": {
                        "value": 60,
                        "unit": "tablets",
                        "system": "http://hl7.org/fhir/v3/orderableDrugForm",
                        "code": "TAB"
                    }
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://test.fhir.org/r4/MedicationRequest/270",
            "resource": {
                "resourceType": "MedicationRequest",
                "id": "270",
                "meta": {
                    "versionId": "2",
                    "lastUpdated": "2022-04-12T01:01:29.498Z",
                    "profile": [
                        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest"
                    ],
                    "tag": [
                        {
                            "code": "US_Core_5"
                        }
                    ]
                },
                "status": "active",
                "intent": "order",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                                "code": "outpatient",
                                "display": "Outpatient"
                            }
                        ],
                        "text": "Outpatient"
                    }
                ],
                "reportedBoolean": false,
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                            "code": "311036",
                            "display": "Humulin R (insulin regular, human) U100  100units/ml inj solution"
                        }
                    ],
                    "text": "Humulin R (insulin regular, human) U100  100units/ml inj solution"
                },
                "subject": {
                    "reference": "Patient/test2",
                    "display": "Brian Z"
                },
                "encounter": {
                    "reference": "Encounter/outpatient-example-2"
                },
                "authoredOn": "2015-07-01",
                "requester": {
                    "reference": "Practitioner/practitioner-drcayr",
                    "display": "Dr Cayr"
                },
                "dosageInstruction": [
                    {
                        "sequence": 1,
                        "text": "10U every AM, 5U every PM, 5U at bedtime",
                        "asNeededBoolean": false,
                        "route": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "34206005",
                                    "display": "Subcutaneous route (qualifier value)"
                                }
                            ]
                        }
                    }
                ],
                "dispenseRequest": {
                    "numberOfRepeatsAllowed": 11,
                    "quantity": {
                        "value": 40,
                        "unit": "ml",
                        "system": "http://unitsofmeasure.org",
                        "code": "mL"
                    }
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://test.fhir.org/r4/MedicationRequest/271",
            "resource": {
                "resourceType": "MedicationRequest",
                "id": "271",
                "meta": {
                    "versionId": "2",
                    "lastUpdated": "2022-04-12T01:01:29.795Z",
                    "profile": [
                        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest"
                    ],
                    "tag": [
                        {
                            "code": "US_Core_5"
                        }
                    ]
                },

                "status": "active",
                "intent": "plan",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                                "code": "outpatient",
                                "display": "Outpatient"
                            }
                        ],
                        "text": "Outpatient"
                    }
                ],
                "reportedBoolean": false,
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                            "code": "835829",
                            "display": "testosterone cypionate 100 MG/ML Injectable Solution"
                        }
                    ],
                    "text": "testosterone cypionate 100mg/ml inj"
                },
                "subject": {
                    "reference": "Patient/test2",
                    "display": "Brian Z"
                },
                "encounter": {
                    "reference": "Encounter/outpatient-example-3"
                },
                "authoredOn": "2016-09-12",
                "requester": {
                    "reference": "Practitioner/practitioner-drcryn",
                    "display": "Dr Cryn"
                },
                "reasonCode": [
                    {
                        "text": "Taking for energy level and drive."
                    }
                ],
                "dosageInstruction": [
                    {
                        "sequence": 1,
                        "text": "1ml intramuscularly every 3 weeks"
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        }
    ]
}


---

// File: input/includes/get-all-active-meds.md


**Storyboard for this example**

This example is based upon the following scenario:

Patient Brian Z uses an App to request all his medications from a single provider, Dr Cayr. This test scenario exercises a mix of routine meds, unusual schedule meds and as-needed meds. All meds are in the outpatient setting only.

Provider A's (Dr Cayr) medication records for Patient Brian Z. Note that three of these are active, the other two are completed.

Item|Date|Script|Source|Notes
---|---|---|---|---
1 | 9/12/2016 | testosterone cypionate 100mg/ml inj  1ml intramuscularly every 3 weeks | Reported by Patient |  Get at doctor's office every third Friday. Taking for energy level and drive.
2 | 9/1/2016 | testosterone cypionate 100mg/ml inj  1ml intramuscularly  | Reported by Dr Cryn | completed
3 | 1/15/2016 | Zocor (simvastatin) 40mg by mouth once daily | Dr. Cayr Order: BMC |patient med status: taking
4 | 7/1/2015 | Humulin R (insulin regular, human) U100 10U every AM, 5U every PM, 5U at bedtime. |Dr.Cayr Order:BMC | patient med status: taking
5 | 6/12/2015  | simvastatin 30mg by mouth once daily  | Dr. Cayr Order: BMC  | patient med status: completed
{: .grid}

**Request:**

Get “all active medications” for a patient by querying MedicationRequest using the patient and status= "active" search parameters.


    GET [base]/MedicationRequest?patient=test2&intent=order,plan&status=active

**Response:**

A Server returns a search Bundle resource containing all the MedicationRequests with a status of "active" for the patient Brian Z


    HTTP/1.1 200 OK
    [other headers]

~~~
{% include get-all-active-meds-searchbundle.md %}
~~~


---

// File: input/includes/get-all-allergy-provenance-future-health.md


**Request:**

Get “all allergies” for a patient and all corresponding Provenance records.


    GET [base]/AllergyIntolerance?patient=123459988&_revinclude=Provenance:target

**Response:**

A Server returns a search Bundle resource containing all the Allergies for the patient and corresponding Provenance records.


    HTTP/1.1 200 OK
    [other headers]

    {
    "resourceType": "Bundle",
    "id": "94d5d5ac-6645-41dc-8282-1870b71e840a",
    "meta": {
        "lastUpdated": "2019-07-20T18:49:01.235+00:00"
    },
    "type": "searchset",
    "total": 1,
    "link": [
        {
            "relation": "self",
            "url": "http://hapi.fhir.org/baseR4/AllergyIntolerance?patient=Examples9988&_revinclude=Provenance:target"
        }
    ],
    "entry": [
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/AllergyIntolerance/796139988",
            "resource": {
                "resourceType": "AllergyIntolerance",
                "id": "796139988",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2019-07-09T15:26:23.217+00:00",
                    "profile": [
                       "http://hl7.org/fhir/us/core/StructureDefinition/us-core-allergyintolerance"
                    ]
                },
                "clinicalStatus": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
                            "code": "active",
                            "display": "Active"
                        }
                    ]
                },
                "verificationStatus": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
                            "code": "confirmed",
                            "display": "Confirmed"
                        }
                    ]
                },
                "code": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "762952008",
                            "display": "Peanuts"
                        }
                    ],
                    "text": "Peanuts"
                },
                "category": [
                    "medication"
                ],
                "criticality": "high",
                "patient": {
                    "reference": "Patient/example"
                },
                "onsetDateTime": "2017-09",
                "reaction": [
                    {
                        "manifestation": [
                            {
                                "coding": [
                                    {
                                        "system": "http://snomed.info/sct",
                                        "code": "247472004",
                                        "display": "Hives"
                                    }
                                ]
                            }
                        ],
                        "onset": "2017-09"
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Provenance/796149988",
            "resource": {
                "resourceType": "Provenance",
                "id": "796149988",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2019-07-09T15:26:23.217+00:00",
                    "profile": [
                       "http://hl7.org/fhir/us/core/StructureDefinition/us-core-provenance"
                    ]
                },
                "target": [
                     {
                        "reference": "AllergyIntolerance/796139988"
                    }
                ],
             "recorded": "2019-05-15T15:26:23.217+00:00",
             "agent": [
                    {
                        "type": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
                                        "code": "author",
                                        "display": "Author"
                                    }
                                ]
                            }
                        ],
                        "who": {
                                "reference": "Practitioner/dr-reconciled-123459988"
                        },
                        "onBehalfOf": {
                                "reference": "Organization/future-health-543219988"
                        }
                    }
                ]},
            "search": {
                "mode": "include"
            }
        }
    ]
}


---

// File: input/includes/get-all-allergy-provenance-good-health.md


**Request:**

Get “all allergies” for a patient and all corresponding Provenance records.


    GET [base]/AllergyIntolerance?patient=12345&_revinclude=Provenance:target

**Response:**

A Server returns a search Bundle resource containing all the Allergies for the patient and corresponding Provenance records.


    HTTP/1.1 200 OK
    [other headers]

    {
    "resourceType": "Bundle",
    "id": "c887e62f-6166-419f-8268-b5ecd6c7b901",
    "meta": {
        "lastUpdated": "2019-07-09T18:49:01.235+00:00"
    },
    "type": "searchset",
    "total": 1,
    "link": [
        {
            "relation": "self",
            "url": "http://hapi.fhir.org/baseR4/AllergyIntolerance?patient=Examples&_revinclude=Provenance:target"
        }
    ],
    "entry": [
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/AllergyIntolerance/79613",
            "resource": {
                "resourceType": "AllergyIntolerance",
                "id": "79613",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2019-07-09T15:26:23.217+00:00",
                    "profile": [
                       "http://hl7.org/fhir/us/core/StructureDefinition/us-core-allergyintolerance"
                    ]
                },
                "clinicalStatus": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
                            "code": "active",
                            "display": "Active"
                        }
                    ]
                },
                "verificationStatus": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
                            "code": "confirmed",
                            "display": "Confirmed"
                        }
                    ]
                },
                "code": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "762952008",
                            "display": "Peanuts"
                        }
                    ],
                    "text": "Peanuts"
                },
                "category": [
                    "medication"
                ],
                "criticality": "high",
                "patient": {
                    "reference": "Patient/example"
                },
                "onsetDateTime": "2018-01",
                "reaction": [
                    {
                        "manifestation": [
                            {
                                "coding": [
                                    {
                                        "system": "http://snomed.info/sct",
                                        "code": "247472004",
                                        "display": "Hives"
                                    }
                                ]
                            }
                        ],
                        "onset": "2018-01"
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Provenance/79614",
            "resource": {
                "resourceType": "Provenance",
                "id": "79614",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2019-07-09T15:26:23.217+00:00",
                    "profile": [
                       "http://hl7.org/fhir/us/core/StructureDefinition/us-core-provenance"
                    ]
                },
                "target": [
                     {
                        "reference": "AllergyIntolerance/79613"
                    }
                ],
             "recorded": "2018-02T15:26:23.217+00:00",
             "agent": [
                    {
                        "type": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
                                        "code": "author",
                                        "display": "Author"
                                    }
                                ]
                            }
                        ],
                        "who": {
                                "reference": "Practitioner/Dr-Jones-12345"
                        },
                        "onBehalfOf": {
                                "reference": "Organization/good-health-54321"
                        }
                    }
                ]},
            "search": {
                "mode": "include"
            }
        }
    ]
}


---

// File: input/includes/get-all-allergy-provenance-sunshine-health.md


**Request:**

Get “all allergies” for a patient and all corresponding Provenance records.


    GET [base]/AllergyIntolerance?patient=1234599&_revinclude=Provenance:target

**Response:**

A Server returns a search Bundle resource containing all the Allergies for the patient and corresponding Provenance records.


    HTTP/1.1 200 OK
    [other headers]

    {
    "resourceType": "Bundle",
    "id": "c887e62f-6166-419f-8268-b5ecd6c7b901",
    "meta": {
        "lastUpdated": "2019-07-09T18:49:01.235+00:00"
    },
    "type": "searchset",
    "total": 1,
    "link": [
        {
            "relation": "self",
            "url": "http://hapi.fhir.org/baseR4/AllergyIntolerance?patient=Examples99&_revinclude=Provenance:target"
        }
    ],
    "entry": [
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/AllergyIntolerance/7961399",
            "resource": {
                "resourceType": "AllergyIntolerance",
                "id": "7961399",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2019-07-09T15:26:23.217+00:00",
                    "profile": [
                       "http://hl7.org/fhir/us/core/StructureDefinition/us-core-allergyintolerance"
                    ]
                },
                "clinicalStatus": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
                            "code": "active",
                            "display": "Active"
                        }
                    ]
                },
                "verificationStatus": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
                            "code": "confirmed",
                            "display": "Confirmed"
                        }
                    ]
                },
                "code": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "762952008",
                            "display": "Peanuts"
                        }
                    ],
                    "text": "Peanuts"
                },
                "category": [
                    "medication"
                ],
                "criticality": "high",
                "patient": {
                    "reference": "Patient/example"
                },
                "onsetDateTime": "2017-09",
                "reaction": [
                    {
                        "manifestation": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
                                        "code": "UNK",
                                        "display": "Unknown"
                                    }
                                ]
                            }
                        ],
                        "onset": "2017-09"
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Provenance/7961499",
            "resource": {
                "resourceType": "Provenance",
                "id": "7961499",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2019-07-09T15:26:23.217+00:00",
                    "profile": [
                       "http://hl7.org/fhir/us/core/StructureDefinition/us-core-provenance"
                    ]
                },
                "target": [
                     {
                        "reference": "AllergyIntolerance/7961399"
                    }
                ],
             "recorded": "2017-09T15:26:23.217+00:00",
             "agent": [
                    {
                        "type": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
                                        "code": "author",
                                        "display": "Author"
                                    }
                                ]
                            }
                        ],
                        "who": {
                                "reference": "Practitioner/Dr-Smith-1234599"
                        },
                        "onBehalfOf": {
                                "reference": "Organization/sunshine-health-5432199"
                        }
                    }
                ]},
            "search": {
                "mode": "include"
            }
        }
    ]
}


---

