File: repos/HL7_SLASH_fhir-us-ndh/sushi-config.yaml

# ╭─────────────────────────Commonly Used ImplementationGuide Properties───────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. The most commonly   │
# │  used properties are included. For a list of all supported properties and their functions,     │
# │  see: https://fshschool.org/docs/sushi/configuration/.                                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.us.ndh
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: pa
canonical: http://hl7.org/fhir/us/ndh
name: NationalDirectoryHealthcare
title: National Directory of Healthcare Providers & Services (NDH) Implementation Guide
# description: Example Implementation Guide for getting started with SUSHI
status: active # draft | active | retired | unknown
version: 1.0.0-ballot
fhirVersion: 4.0.1 # https://www.hl7.org/fhir/valueset-FHIR-version.html
copyrightYear: 2023+
releaseLabel: ballot # ci-build | draft | qa-preview | ballot | trial-use | release | update | normative+trial-use
license: CC0-1.0 # https://www.hl7.org/fhir/valueset-spdx-license.html
jurisdiction: urn:iso:std:iso:3166#US "United States of America" # https://www.hl7.org/fhir/valueset-jurisdiction.html
publisher:
  name: HL7 International / Patient Administration
  #rl: http://hl7.org/Special/committees/pafm
  url: http://www.hl7.org/Special/committees/pafm
  email: pafm@lists.hl7.org

# The dependencies property corresponds to IG.dependsOn. The key is the
# package id and the value is the version (or dev/current). For advanced
# use cases, the value can be an object with keys for id, uri, and version.
#
dependencies:
  #hl7.fhir.us.core: 5.0.1
  hl7.fhir.us.core: 6.1.0
  #hl7.fhir.us.core: 7.0.0
  hl7.fhir.us.udap-security: 1.0.0
  hl7.fhir.uv.extensions.r4: 1.0.0
  #hl7.fhir.uv.subscriptions-backport: 0.1.0
  hl7.fhir.uv.subscriptions-backport.r4: 1.1.0
  hl7.fhir.uv.bulkdata: 2.0.0
  #hl7.terminology.r4: 3.1.0
  #hl7.teminology.r4: 6.1.0
  ihe.iti.mcsd:
    id: iheitimcsd
    uri: https://profiles.ihe.net/ITI/mCSD/ImplementationGuide/ihe.iti.mcsd
    version: 3.8.x



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
  base-artifacts.md:
    title: Base Artifacts
  ndapi-use-cases.md:
    title: National Directory API Use Cases
  #ndapi-flow-diagrams.md:
    #title: National Directory API Flow Diagrams
  ndapi-ig.md:
    title: National Directory API Implementation Guidance
  ndapi-artifacts.md:
    title: National Directory API Artifacts
  ndapi-capability.md:
    title: National Directory API Capability Satement
  ndapi-examples.md:
    title: National Directory API Examples

  attestation-use-cases.md:
    title: Attestation Use Cases
  attestation-flow-diagrams.md:
    title: Attestation Flow Diagrams
  attestation-ig.md:
    title: Attestation Implementation Guidance
  attestation-artifacts.md:
    title: Attestation Artifacts 
  attestation-capability.md:
    title: Attestation CapabilityStatement
  #attestation-examples.md:
    #title: Attestation Examples

  verification-use-cases.md:
    title: Validation & Verification Use Cases
  verification-flow-diagrams.md:
    title: Validation & Verification Flow Diagrams
  verification-ig.md:
    title: Validation & Verification Implementation Guidance
  verification-artifacts.md:
    title: Validation & Verification Artifacts 
  verification-capability.md:
    title: Validation & Verification CapabilityStatement
  #verification-examples.md:
    #title: Validation & Verification Examples

  ldapi-use-cases.md:
    title: Local Directory API Use Cases
  #query-flow-diagrams.md:
    #title: Distributed Query Flow Diagrams
  ldapi-ig.md:
    title: Local Directory API Implementation Guidance
  ldapi-artifacts.md:
    title: Local Directory API Artifacts 
  ldapi-capability.md:
    title: Local Directory API CapabilityStatement
  ldapi-examples.md:
    title: Local Directory API Examples
  downloads.md:
    title: Download Specification
  other.md:
    title: other
  change-log.md:
    title: Release Notes



#
# The parameters property represents IG.definition.parameter. Rather
# than a list of code/value pairs (as in the Implementation Guide
# resource), the code is the YAML key. If a parameter allows repeating
# values, the value in the YAML should be a sequence/array. For a
# partial list of allowed parameters see:
# https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
#
parameters:
  show-inherited-invariants: false
  version-comparison: n/a
  path-liquid: "liquid"
  path-expansion-params: 'Parameters-parameters-snomed-us.json'
  #shownaves: true
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
  Base Artifacts: base-artifacts.html

  National Directory API Standard:
    National Directory API Implementation Guidance: ndapi-ig.html
    National Directory API Artifacts: ndapi-artifacts.html
    National Directory API CapabilityStatement: ndapi-capability.html
    #National Directory API Flow Diagrams: ndapi-flow-diagrams.html 
    National Directory API Use Cases: ndapi-use-cases.html
    National Directory API Examples: ndapi-examples.html

  Attestation Standard:
    Attestation Implementation Guidance: attestation-ig.html
    Attestation Artifacts: attestation-artifacts.html
    Attestation CapabilityStatement: attestation-capability.html
    Attestation Flow Diagrams: attestation-flow-diagrams.html
    Attestation Use Cases: attestation-use-cases.html
    
    # Attestation Examples: attestation-examples.html

  Validation & Verification Standard:
    Validation & Verification Implementation Guidance: verification-ig.html
    Validation & Verification Artifacts: verification-artifacts.html
    Validation & Verification CapabilityStatement: verification-capability.html
    Validation & Verification Flow Diagrams: verification-flow-diagrams.html
    Validation & Verification Use Cases: verification-use-cases.html
    #Validation & Verification Examples: verification-examples.html

  Local Directory API Standard:
    Local Directory API Implementation Guidance: ldapi-ig.html
    Local Directory API Artifacts: ldapi-artifacts.html
    Local Directory API CapabilityStatement: ldapi-capability.html
    Local Directory API Use Cases: ldapi-use-cases.html
    #Distributed Query ation Flow Diagrams: query-flow-diagrams.html
    Local Directory API Examples: ldapi-examples.html

  Release Notes: change-log.html
  
  More:
    Artifacts: artifacts.html
    Downloads: downloads.html
    Other: other.html

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
# groups:
#   GroupA:
#     name: Group A
#     description: The Alpha Group
#     resources:
#     - StructureDefinition/animal-patient
#     - StructureDefinition/arm-procedure
#   GroupB:
#     name: Group B
#     description: The Beta Group
#     resources:
#     - StructureDefinition/bark-control
#     - StructureDefinition/bee-sting
#
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

// File: input/pagecontent/actors-workflow.md

actors-workflow

### Actor definitions
### Overall workflow

---

// File: input/pagecontent/attestation-artifacts.md

### Attestation Profiles

Transmit attested information about an individual, organization, or group from an authorized individual using the Portal or Application. The RESTful FHIR API intended for sending data to the NDH **SHOULD** utilize at least the NDH base profiles, considering that the attested data could pertain to a range of information and originate from diverse entities.

* [Base CareTeam]
* [Base Endpoint]
* [Base HealthcareService]
* [Base InsurancePlan]
* [Base Location]
* [Base Network]
* [Base Organization]
* [Base OrganizationAffiliation]
* [Base Practitioner]
* [Base PractitionerRole]


To accept the data and aid in verification and facilitating the NDH exchange, the NDH exchange profiles **SHALL** be used. It should have the NDH server side capability to support POST, PUT, and GET HTTP methods.   

**[NDH Exchange Profiles](ndapi-artifacts.html#national-directory-api-profiles-1)**


{% include markdown-link-references.md %}

---

// File: input/pagecontent/attestation-capability.md

### Capability Statements
The attestation server receives attested information on behalf of the NDH, and provides the necessary NDH information to attestators when required. As a result, the attestation server SHALL support the GET, PUT, and POST methods.

### Capability Statement Summary

<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

|Profile/Capability         | [Attestation]
|**CareTeam**               |  SHALL                      
|**Endpoint**               |  SHALL             
|**HealthcareService**      |  SHALL             
|**InsurancePlan**          |  SHALL             
|**Location**               |  SHALL             
|**Network**                |  SHALL             
|**Organization**           |  SHALL             
|**OrganizationAffiliation**|  SHALL             
|**Practitioner**           |  SHALL             
|**PractitionerRole**       |  SHALL                          
|**Validation**             |  SHALL             



{% include markdown-link-references.md %}

---

// File: input/pagecontent/attestation-examples.md

Attestation Examples

---

// File: input/pagecontent/attestation-flow-diagrams.md

### Initial Attestation Workflow

![IntialAttestationWorkflow](Attestation1.drawio.png)  

**Descriptions**
1. Initiate a one-time process to upload unverified data from different directories, such as the CMS National Plan and Provider Enumeration System (NPPES), the Medicare Provider Enrollment, Chain, and Ownership System (PECOS), etc.

2. Transfer reference data from the main source into the NDH (Network Data Hub).

3. Receive attested details about oneself, an organization or a group from an authorized individual via the Portal or Application. This information might contrast with the unattested data or reference data.

4. Upon full verification of the data, store it in the NDH and mark its resource verification status as complete.

5. For data that still requires verification or has unresolved items, take the following steps: If the data is awaiting verification from the primary source, place it in the pending verification queue and store it in the NDH, marking its resource verification status as incomplete. If it's waiting for mutual attestation, place it in the provisional relationship resource queue, also storing it in the NDH with an incomplete verification status. Upon resolution of all pending verification items, the resource verification status will be updated to complete in the NDH.


### Ongoing Attestation/Update Workflow

![OngoingAttestationWorkflow](Attestation2.drawio.png)  

**Descriptions**
1. Receive updated attested details about oneself, an organization or a group from an authorized individual via the Portal or Application or pull the reference data from primary sources stored in the NDH server. 

2. The NDH should assess and compare newly entered data with the existing dataset to establish if it's new, modified, or the same. If the data is unchanged, no further action is required; if it's new or has been altered, it needs to go through the same verification process as in the initial attestation. After this, steps 4 and 5 in the Initial Attestation workflow should be repeated.


### Who has the right to Attest/Create Resources

<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

**FHIR Resource** | **Practitioner** | **Organization** | **Payer**| **HIE/HIO** |
CareTeam | Attest | Create by one or more Organizations | | |
Endpoint | Attest | Attest/Create | Attest/Create | Create |
HealthcareService | Create | Attest/Create | | |
InsurancePlan | | | Create | |
Location | Attest | Create | | |
Network | Attest | Attest/Create | Create | |
Organization | | Create | | |
OrganizationAffiliation | | Create by one or more Organizations | | |
Practitioner | Create | | | |
PractitionerRole | Attest/Create | Attest/Create | Attest/Create | |

- Organizations Create a Careteam Resources to provide Healthcare Services, and HealthcareService Resources
- Organizations Create Location Resources where they provide Healthcare Servicess.
- Organizations May create Endpoint Resources
- Organizations Create Organization Resources, OrganizationAffiliation Resources
- Organization May create Nework Resource for Social service
- HIE/HIO Create Endpoint Resources
- Payer Create InsurancePlans Resources, Network Resources
- Practitioners Create Practitioner Resources, HealthcareService Resources
- A Practitioner, Organization, or Payer can establish a provisional PractitionerRole Resources through attestation, but the verification process is not considered complete until all associated relationships have also been mutually attested
- The verification process for OrganizationAffiliation is not complete until all of the associated relationships have been mutually verified



---

// File: input/pagecontent/attestation-ig.md

### Attestation

#### Introduction
Attestation describes the process by which authorized entities submit information about themselves, their roles, their relationships, etc. for inclusion in the National Directory of Healthcare Providers & Services (NDH).

Guidance in this section is primarily intended to describe expectations for implementers using a FHIR API to manage attestation. An implementer’s unique implementation context, including local business needs, applicable laws/regulations/policies, usability considerations, etc. will determine an implementer’s approach to many of the attestation considerations described in this section. As we do not anticipate every implementer will use the same approach to attestation, we have not provided a set of attestation profiles or defined an attestation API. Implementers **SHALL** make any attestation requirements, including but not limited to profiles and/or API documentation, available to any stakeholders involved in the attestation process.

We acknowledge that implementers may use processes other than a FHIR API, such as paper-based forms, to obtain attested data. Such processes are considered out of scope for this guide.

##### attestation scenarios
- Individual providers attesting to their information
- Authorized representative attesting to an individual provider’s information
- Authorized representative attesting to an organization’s information
- Authorized representative attesting to a payer organization’s information
- Submission of attested data by an authorized intermediary (e.g., another system that maintains attested data)
- Submission of primary data (e.g., license, network, ...)
    - network contains the organizations which have completed on boarding process with the network, and have assigned relationships within the network

Each of these scenarios may encompass different sets of “permitted” data. For example, an individual provider attesting to her own information may not have the right to also attest to information about an organization she works for. These “rights” are assigned by the implementation of the NDH, and can help prevent the submission of duplicate records. In general:

- An individual (or authorized representative) may attest to his or her own demographic information (e.g., name, birthdate, gender, etc.) and information about his or her relationships with organizations, locations, services, care teams, and health insurance provider networks.
    - Information represented using the Practitioner, PractitionerRole, HealthcareService, Endpoint, and CareTeam profiles

- An organization (through an authorized representative) may attest to its own demographic information (e.g., name, address, contact info, etc.), services, locations, care teams and other organizations it owns/manages, and its relationships with other organizations, individuals, and health insurance provider networks
    - Information represented using the Organization, PractitionerRole, OrganizationAffiliation, HealthcareService, CareTeam, Location, and Endpoint profiles.
    - In cases where individual practitioners operate as solo practitioners without a relationship to a legal organization, implementers should consider representing the individual using both a Practitioner and Organization resource and assigning the “organization” rights to the individual.

- A payer organization (through an authorized representative) may attest to its own demographic information (e.g., name, address, contact info, etc.), services, locations, care teams, other organizations, health insurance provider networks and plans it owns/manages, and its relationships with other organizations and providers.
    - Information represented as Organization, OrganizationAffiliation, HealthcareService, CareTeam, Location, Endpoint, Network, and InsurancePlan profiles.

- A network (through an authorized representative) may attest to its own demographic information (e.g., name, address, contact info, etc.), services, locations, care teams and other organizations it owns/manages, and its relationships with other organizations, individuals, and other networks
    - Information represented using the Organization, PractitionerRole, OrganizationAffiliation, HealthcareService, CareTeam, Location, and Endpoint profiles.
    - In cases where individual practitioners operate as solo practitioners without a relationship to a legal organization, implementers should consider representing the individual using both a Practitioner and Organization resource and assigning the “organization” rights to the individual.

- An authorized intermediary may submit attested data on behalf of any of the previously described stakeholders. An intermediary should not submit data that has not been attested to, such as data that has been “scraped” from public sources. An example of an intermediary could be a state directory that collects information from providers in its jurisdiction, and then passes that information to the national directory.

##### Data sources for attestation
- data from CMS (e.g., data extracted from the Medicare Provider Enrollment, Chain, and Ownership System (PECOS), the CMS National Plan and Provider Enumeration System (NPPES) ...)
- data by a relationship (e.g., visiting privileges, network participation)
- data from Primary source (e.g., state license board)
- data from commercial payers (e.g., UnitedHealth Group, Kaiser Permanente ...)
- data uploaded by permitted individual
- manually entered data

##### Methods of attestation
The methods of attestation could be via a third part application, a centralized portal host by the NDH, or from bulk exchange. 

Additionally, implementers may set requirements for the minimum amount of data different groups of stakeholders must attest to. For example, a US implementation might require all licensed providers to attest to their National Provider Identifier (NPI). In general, implementers might specify different minimum attestation requirements across three classes of stakeholders:

- Licensed billing providers (e.g., doctors, nurses)
- Non-licensed billing providers (e.g., medical equipment suppliers)
- Ancillary personnel (e.g., administrative staff)

We expect stakeholders will typically use a [SMART on FHIR application](http://www.hl7.org/fhir/smart-app-launch/backend-services.html) to help attesters manage the attestation process (i.e. to submit attested data in the form of FHIR resources via a RESTful API). Such an application may be offered by an entity maintaining a verified healthcare directory, an application authorized by the verified healthcare directory or owned by the stakeholder(s) submitting attested data.

Before accepting attested data, the NDH should have policies to ensure:

- Any attester application has successfully registered and integrated with the verified healthcare directory.
- Attesters have successfully completed any identity proofing requirements.
- Any credentials or digital certificates that must be exchanged have been exchanged, validated, and are functional.
- The verified healthcare directory has set and made available any permissions/rights that govern the scope of data an attester may submit.
- Any representatives/intermediaries submitting data on behalf of an individual/entity have been appropriately authorized.

For example. a similar system like [the CMS identity & Access Management System](https://nppes.cms.hhs.gov/IAWeb/) could be used to gain the access for attestation. 

##### Attestation workflow
Once these preconditions have been met, a typical attestation workflow might involve:

- An attester application is pre-populated with data about the individual making the attestation, such as any known demographic information.
    - For example, the attester application may be pre-populated with data from the attester’s EHR system.
    - The attester application may query the verified healthcare directory for existing resources about the attester, which can be updated or used to pre-populate data in the application.
- The application user enters the appropriate information and submits their attestation.
    - Submission of attested information may require some form of digital signature.
    - The attester application should perform a validation process to check the general structure, content, etc. of the submission.
- The attester application POSTs or PUTs the submitted data as FHIR resources to the verified healthcare directory’s attestation API.
- The verified healthcare directory performs a validation process to check the general structure, content, etc. of the submission (e.g., checking consistency w/data type, required elements are present, references to existing resources are correct, codes are from appropriate value set etc.).
    - If there are no errors, the verfied healthcare directory system assigns an ID to the posted resources and returns the appropriate HTTP status code as well as the url/id of each resource.
    - If there are errors, the verified healthcare directory system rejects the operation and returns the appropriate HTTP status code and an OperationOutcome resource describing the error(s).

The FHIR specification describes multiple approaches for managing interactions over an API, including:

- Resources may be created, updated, patched, or deleted individually using the appropriate HTTP method (i.e. POST, PUT, PATCH, DELETE).
- Resources may be created, updated, patched, or deleted as a collection using a Bundle. A Bundle can include a set of actions to perform on a server in a single HTTP request/response.
    - A Bundle of type “batch” requires that there **SHALL** be no interdependencies between the different entries in the Bundle”, but failure of any one interaction does not cause the whole collection to fail.
    - A Bundle of type “transaction” is processed as a single atomic unit, and the whole collection will fail if any of the interactions defined in the Bundle fail. Additionally, the FHIR specification provides support for asynchronous interactions, which may be necessary to facilitate processing of large amounts of data.

This implementation guide is not prescriptive about which approach(es) a verified healthcare directory should use to manage attestation. However, as any attestation will likely involve the submission of multiple FHIR resources representing information about one or more attesters, transaction Bundles can alleviate the need for more complex logic to manage referential integrity in attested information.

Implementations relying on individual API interactions or batch Bundles may have to specify an “order of operations” to ensure attested data can be successfully submitted to the verified healthcare directory server. For example, as a general guideline, resources may need to be submitted in the order of:

1. Organization
2. Endpoint
3. Practitioner
4. Location
5. Network
6. InsurancePlan
7. HealthcareService
8. OrganizationAffiliation
9. PractitionerRole
10. CareTeam

Depending on the context of implementation, the entity maintaining a verified healthcare directory may have to manage record collision or duplication (i.e. multiple attesters attempting to simultaneously submit updates to the same record, or multiple attesters attempting to attest about the same set of information).

The FHIR specification provides some guidance on managing collisions using a combination of the ETag and If-Match header in an HTTP interaction. We recommend verified healthcare directory implementers use this approach.

To manage duplicate records, we generally recommend that verified healthcare directory implementers define a robust verification process with policies for identifying and resolving duplicates. Any additional technical capabilities are beyond the scope of this implementation guide.

#### Attestation Data Restriction
Restrictions **SHALL** be based on National Directory decisions enforced by Data Use Agreements (DUAs) with distributed directories that want access to restricted information. Attesters **SHALL NOT** be able to make independent decisions regarding which information is considered restricted.

The NDH should adhere to the risk management and mitigation guidelines outlined in the NIST 800 series documents, which are specifically designed for safeguarding access to PII (Personally Identifiable Information).

These guidelines emphasize the importance of coordinating relevant risk management practices and the corresponding security and privacy controls, encompassing policies, administrative procedures, and technical safeguards. This coordination should be clearly defined within the Data Use Agreements.

The NDH should not disclose the providers' personal sensitive information. To ensure the safety of a facility or service, restrictions may be imposed on certain information, such as the locations of women's shelters. These restrictions should be dictated by the Data Use Agreements and should not be subject to the discretion of attesters.



---

// File: input/pagecontent/attestation-use-cases.md

### Attestation Use Cases
The actors:
1. The NDH attestation portal or application, we call them as the NDH client
2. The NDH server

#### Attest to individual information using unattested data
1. Practitioners access the NDH client with their assigned ID.
2. If the individual has an NPI number from NPPES, the NDH client may display their information for attestation.
3. The individual can accept, reject, or modify the information present. 
4. After the individual submits the attested information, the NDH client will convert the information into FHIR resources and POST them into the NDH server.
5. The NDH server performs validation checks on the received FHIR resources and sends a response to the NDH client. In cases where the resources do not pass validation, an error message is returned to the NDH client. It is then incumbent upon the NDH client to address these issues appropriately, such as by rectifying the problems and/or alerting the attestor.

#### Attest to organizational information using unattested data
1. Organization representatives access the NDH client with their assigned ID.
2. If the Organization has an NPI number from the CMS National Plan and Provider Enumeration System (NPPES), the NDH client may display their information for attestation.
3. The representatives can accept, reject, or modify the information present. 
4. After the representatives submit the attested information, the NDH attestation client will convert the information into FHIR resources and POST them into the NDH server.
5. The NDH server performs validation checks on the received FHIR resources and sends a response to the NDH client. In cases where the resources do not pass validation, an error message is returned to the NDH client. It is then incumbent upon the NDH client to address these issues appropriately, such as by rectifying the problems and/or alerting the attestor.


#### Attest to multiple individuals using a CSV file or JSON upload
1. Authorized third party representatives access the NDH client with their unique identifiers.
2. Upload practitioners, organizations, healthcare services, care teams data into the NDH client using json, xml, or cvs files. 
3. Upon the uploading, the NDH client converts the upload file into FHIR resources and POST into the NDH server.
4. The NDH server performs validation checks on the received FHIR resources and sends a response to the NDH client. In cases where the resources do not pass validation, an error message is returned to the NDH client. It is then incumbent upon the NDH client to address these issues appropriately, such as by rectifying the problems and/or alerting the attestor.

#### Attest to Payer network
1. Authorized representatives from third-party or payer network entities gain access to the NDH client using their distinct identifiers.
2. These representatives have the option to either directly input data or upload networks and/or insurance plan information into the NDH client, utilizing formats such as JSON, XML, or CSV files. 
3. Upon the uploading, the NDH client converts the upload file into FHIR resources and POST into the NDH server.
4. The NDH server performs validation checks on the received FHIR resources and sends a response to the NDH client. In cases where the resources do not pass validation, an error message is returned to the NDH client. It is then incumbent upon the NDH client to address these issues appropriately, such as by rectifying the problems and/or alerting the attestor.

#### Attest to endpoints
The ownership of FHIR endpoints often lies with the healthcare organizations, such as hospitals, health systems, and EHR (Electronic Health Record) vendors, that implement them. However, it's also possible that third-party organizations providing interoperability services or software-as-a-service (SaaS) healthcare platforms could own and manage FHIR endpoints.
Therefore, attestation of endpoints is the responsibility of the organization that owns them.




{% include markdown-link-references.md %}


<!--
<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| Data Item | Data | Confirm | Updates |
| --------- | ---- | ------- | ------- |
| First Name | Joe | Yes | |
| Last Name | Smith | Yes | |
| NPI | 1245319599 | Yes | |
| Home Address | 501 Echo Lake Chicago, IL 60661 | Yes | |
| Work Address | 400 Lee Rd Chicago, IL 60662 | Yes | |
| Home Telecom | 555-123-4444 | No | 555-123-6666 |
| Work Telecom | 555-123-1234 | Yes | |
| qualification | Internal Medicine Physician | Yes | |

**Step-3**
The NDH creates the Practitioner resource for Joe Smith along with associated VerificationResult and Usage Restrication Resorces  
See the Resources:  

* [Practitioner/JoeSmith]
* [VerificationResult/Verify-JoeSmith]


1. Locate questionnaire (Q) to use for given context (Forms for Practitioner, Organization, ...)
2. load/render Q (pre-populate Q with data)
3. User enters data (local validation may occure during data entry)
4. Questionnaire Response (QR) is validated by server
    - errors, warnings, issure reported to the user
5. QR is saved to the target server 
    - data extracted into other resources

Q resource 
QR resource
Other: extensions, operation, profiles(normally do not it, just define the Q), IG
Q:
- Metadata
- items (nested)
    - LinkId
    - Text
    - Item Type (group, display, string, text, open-choice)
    - Repeats
    - Data rules 
    - Formatting hint

QR: 
    - Context
    - Items (nested)
        -LinkId
        -Text
LinkId must match

Interaction with terminologies
item types choice, open choice
Valueset reference item.answerValueSet
Control selection 
    - radio buttons, comboboxes, checkboxes autocomplet

Dynamic behavious - enable when, enableBehavior (all, any)

Extensions to the core definitions
- advanced redering
- advanced form behavious
- adaptive forms
- import data into forms
- extraction of data from forms

Form filler
1. Form Manager (populate Q; read Valueset)
2. Form Response Manager (query, create, update, extract QR )
3. Form Receiver (process QR)
4. Form Archiver (create QR)

initialExpression for the launchContext extension and itemPopulationContext extension to populate Q elements based on information from outside QR


-->



---

// File: input/pagecontent/base-artifacts.md

### The National Directory of Healthcare Providers & Services (NDH) Base Profiles
The following presents the list of base NDH profiles. Each profile defines the minimum mandatory elements, extensions, and terminology requirements that are required to be present (MUST support). For every profile, there is a simple summary of  requirements and guidance, the usage and scope of the profile, and the boundaries and relationship with other profiles. A structured table presents a [logical view](https://hl7.org/fhir/R4/formats.html#table) of the content in both a differential and snapshot view. This is complemented with references to relevant terminologies, search parameters, and examples.

* [Base CareTeam]
* [Base Endpoint]
* [Base HealthcareService]
* [Base InsurancePlan]
* [Base Location]
* [Base Network]
* [Base Organization]
* [Base OrganizationAffiliation]
* [Base Practitioner]
* [Base PractitionerRole]
* [Base Restriction]
* [Base Verification]

### The NDH Extensions And Their Relationship With The NDH Base Profiles
To address the particular use case requirements of the NDH, a set extension is defined. The subsequent table demonstrates where these extensions are incorporated within the profiles.
<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

Extension/Profile|[Base CareTeam]|[Base Endpoint]|[Base HealthcareService]|[Base InsurancePlan]|[Base Location]|[Base Network]|[Base Organization]|[Base OrganizationAffiliation]|[Base Practitioner]|[Base PractitionerRole]|[Base Restriction]
*[NDH Accessibility]*                            |     |     |     |     | Yes |     |     |     | Yes |     |     
*[NDH Associated Servers]*                       |     | Yes |     |     |     |     |     |     |     |     |        
*[NDH Communication Proficiency]*                |     |     |     |     |     |     |     |     | Yes |     |     
*[NDH Contactpoint Availabletime]*               | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |     
*[NDH Delivery Method]*                          |     |     | Yes |     |     |     |     |     |     |     |     
*[NDH Digital Certificate]*                      |     |     |     |     |     |     | Yes |     | Yes | Yes |     
*[NDH Dynamic Registration]*                     |     | Yes |     |     |     |     |     |     |     |     |     
*[NDH Endpoint Access Control Mechanism]*        |     | Yes |     |     |     |     |     |     |     |     |     
*[NDH Endpoint Connection Type]*                 |     | Yes |     |     |     |     |     |     |     |     |     
*[NDH Endpoint Connection Type Version]*         |     | Yes |     |     |     |     |     |     |     |     |     
*[NDH Endpoint IHE Specific Connection Type]*    |     | Yes |     |     |     |     |     |     |     |     |     
*[NDH Endpoint Rank]*                            |     | Yes |     |     |     |     |     |     |     |     |     
*[NDH Endpoint Reference]*                       | Yes |     |     |     |     |     |     |     | Yes |     |     
*[NDH Endpoint Usecase]*                         |     | Yes |     |     |     |     |     |     |     |     |     
*[NDH Endpoint Non FHIR Usecase]*                |     | Yes |     |     |     |     |     |     |     |     |   
*[NDH Endpoint Testing Certification]*           |     | Yes |     |     |     |     |     |     |     |     |
*[NDH Funding Source]*                           |     |     | Yes |     |     |     | Yes |     |     |     |     
*[NDH Healthcareservice Reference]*              | Yes |     |     |     |     |     |     |     |     |     |     
*[NDH HealthcareService or Program Requirement]* |     |     | Yes |     |     |     |     |     |     |     |     
*[NDH FHIR IG]*                                  |     | Yes |     |     |     |     |     |     |     |     |     
*[NDH Identifier Status]*                        | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |     
*[NDH InsurancePlan Reference]*                  |     |     |     |     |     |     | Yes |     |     |     |     
*[NDH Language Speak]*                           |     |     | Yes |     | Yes |     | Yes |     |     |     |     
*[NDH Location Reference]*                       | Yes |     |     |     |     | Yes |     |     |     |     |     
*[NDH Logo]*                                     |     |     | Yes |     |     |     | Yes | Yes |     |     |     
*[NDH Network Reference]*                        |     |     | Yes |     |     |     |     |     |     | Yes |     
*[NDH NewPatients]*                              |     |     | Yes |     | Yes |     |     |     |     | Yes |     
*[NDH Orginization Alias Period]*                |     |     |     |     |     |     | Yes |     |     |     |     
*[NDH Orgnization Alias Type]*                   |     |     |     |     |     |     | Yes |     |     |     |     
*[NDH Org Description]*                          |     |     |     |     |     |     | Yes |     |     |     |     
*[NDH Payment Accepted]*                         |     |     | Yes |     |     |     | Yes |     |     |     |     
*[NDH Practitioner Qualification]*               |     |     |     |     |     |     |     |     | Yes |     |     
*[NDH Qualification]*                            |     |     |     |     |     |     | Yes | Yes |     | Yes |     
*[NDH Rating]*                                   |     |     | Yes |     |     |     | Yes |     | Yes | Yes |     
*[NDH Required Document]*                        |     |     | Yes |     |     |     |     |     |     |     |     
*[NDH Secure Exchange Artifacts]*                |     | Yes |     |     |     |     |     |     |     |     |     
*[NDH Trust Framework]*                          |     | Yes |     |     |     |     |     |     |     |     |     
*[NDH Usage Restriction]*                        | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |     
*[NDH usage restriction fhir path]*              |     |     |     |     |     |     |     |     |     |     | Yes 
*[NDH Verification Status]*                      | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |     
*[NDH Via Intermediary]*                         | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |     
*[NDH Endpoint EnvironmentType]*                 |     | Yes |     |     |     |     |     |     |     |     |


### NDH Base Search Parameters
To facilitate efficient data retrieval and standardized querying from the NDH, a series of search parameters has been established. The associated set of search parameters for each profile can be found in the subsequent list.

* [CareTeam Search Parameters]
* [Endpoint Search Parameters]
* [HealthcareService Search Parameters]
* [InsurancePlan Search Parameters]
* [Location Search Parameters]
* [Network Search Parameters]
* [Organization Search Parameters]
* [OrganizationAffiliation Search Parameters]
* [Practitioner Search Parameters]
* [PractitionerRole Search Parameters]
* [Verification Search Parameters]

### NDH Base Code Systems
Due to the unavailability of certain required concepts in existing code systems, a distinct set of code systems has been defined within the NDH. You can view this list via the link provided below:
* [NDH Base Code System]


### NDH Base Value Sets
The use cases within NDH require specific values not found in the existing value sets. As such, the NDH has defined a set of value sets, which are listed via the link provided below:
* [NDH Base Value Set]




{% include markdown-link-references.md %}

---

// File: input/pagecontent/change-log.md

The NDH is develped under the [FHIR at Scale Taskforce Project](https://confluence.hl7.org/display/FAST)

### CMS-2024-Connectathon Build
### Version 1.0.0
### STU1 ballot Technical Correction
<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>
| Jira Tickets FHIR- | Appllied |
| [41815](https://jira.hl7.org/browse/FHIR-41815) | Fix Section 27.86.1.4.1 table formatting |
| [41876](https://jira.hl7.org/browse/FHIR-41876) | Fix Section 27.350.1 Section typo |
| [41878](https://jira.hl7.org/browse/FHIR-41878) | Rename it as Direct Secure Messaging |
| [41881](https://jira.hl7.org/browse/FHIR-41881) | Clean up "Distributed Query Implementation Guidance" image |
| [41882](https://jira.hl7.org/browse/FHIR-41882) | Fix typo in Section 26 |
| [41884](https://jira.hl7.org/browse/FHIR-41884) | Fix UDAP hyperlink |
| [41916](https://jira.hl7.org/browse/FHIR-41916) | Fix Providers&Services should be 2 words in section 1.1 |
| [41940](https://jira.hl7.org/browse/FHIR-41940) | Remove the cursor from the image |
| [41941](https://jira.hl7.org/browse/FHIR-41941) | Clean the border lines and remove the Figure 2 mark |
| [41942](https://jira.hl7.org/browse/FHIR-41942) | Fix typo |
| [41943](https://jira.hl7.org/browse/FHIR-41943) | Fix the inconsistency in the capitalization of the title/headers |
| [41944](https://jira.hl7.org/browse/FHIR-41944) | Fix Section 3.3 and 3.4 numbering |
| [41945](https://jira.hl7.org/browse/FHIR-41945) | Bold SHALL, SHOULD and MAY in section 5.1.1 |
| [41946](https://jira.hl7.org/browse/FHIR-41946) | Remove section 5.1.2 Figure 1 mark |
| [41947](https://jira.hl7.org/browse/FHIR-41947) | Renumber Section 7 |
| [41948](https://jira.hl7.org/browse/FHIR-41948) | Renumber Section 11|
| [42076](https://jira.hl7.org/browse/FHIR-42076) | Fix typo |
| [42654](https://jira.hl7.org/browse/FHIR-42654) | Fix typo in Section 7.2 |
| [42645](https://jira.hl7.org/browse/FHIR-42645) | Remove </code> in Section 5.4.8|
| [42610](https://jira.hl7.org/browse/FHIR-42610) | Add missing "," in search parameter in Section 3.3.1 |
| [42674](https://jira.hl7.org/browse/FHIR-42674) | Fix typo in Section 3.1.2 Query 5 |
| [42675](https://jira.hl7.org/browse/FHIR-42675) | Fix missing O in _typeFilter=rganization_typeFilter=rganization |
| [42682](https://jira.hl7.org/browse/FHIR-42682) | Fix typo |


### STU1 ballot change applied
<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>
| Jira Tickets FHIR- | Appllied |
| [41767](https://jira.hl7.org/browse/FHIR-41767) | Change value of capabillityStatement.rest.resource.versioning from versioned-update to versioned for all resource behaviors in the capability statements |
| [41768](https://jira.hl7.org/browse/FHIR-41768) | or endpoint resource remove duplicate Location-endpoint in capability statement revinclude for all capability statements where it appears. |
| [41769](https://jira.hl7.org/browse/FHIR-41769) | Add Location endpoint search parameter into capability statement. |
| [41770](https://jira.hl7.org/browse/FHIR-41770) | Create CareTeam endpoint search parameter |
| [41771](https://jira.hl7.org/browse/FHIR-41771) | Include the Network profile as a supported profile under organization in the capability statements as a SHALL for Exchange and a SHOULD for Exchange Base and Exchange Expanded. |
| [41773](https://jira.hl7.org/browse/FHIR-41773) | Add a search parameter for Practitioner.endpoint; update the capability statements. |
| [41774](https://jira.hl7.org/browse/FHIR-41774) | Add the $export operation to the National Directory API capability statement. Define both server and client conformance. |
| [41812](https://jira.hl7.org/browse/FHIR-41812) | Fix the inconsistent cardinality in Section 1.12.4 Practitioner Role relationship diagram, add the information why PractitionerRole.network cardinality is 0..1 See more information on [FHIR-40262](https://jira.hl7.org/browse/FHIR-40262) |
| [41841](https://jira.hl7.org/browse/FHIR-41841) | Remove multipleOr and multipleAnd from SearchParameter endpoint-access-control-mechanism, since the cardinality of the Endpoint.access-control-mechaniam is 0..1 |
| [41879](https://jira.hl7.org/browse/FHIR-41879) | Move the Guidance tab as the first one at the drop down for V&V Standard Tab |
| [41880](https://jira.hl7.org/browse/FHIR-41880) | Move the Guidance tab as the first one at the drop down for DQ Standard Tab |
| [41883](https://jira.hl7.org/browse/FHIR-41883) | Remove words "or Tiered-OAUTH" in section 1.13 NDH security |
| [41886](https://jira.hl7.org/browse/FHIR-41886) | Move the Guidance tab as the first one at the drop down for Exchange Standard Tab |
| [41887](https://jira.hl7.org/browse/FHIR-41887) | Move the Guidance tab as the first one at the drop down for Attestation Standard Tab |
| [41893](https://jira.hl7.org/browse/FHIR-41893) | Add NdhNetwork, NdhExNetwork, NdhPnQryNetwork profiles to associated Organization capability statement(s). Add a note for the network-coverage-area parameter, the organization.type = ntwk is needed. |
| [41905](https://jira.hl7.org/browse/FHIR-41905) | Remove include for organization.identifier.assigner from the capability statement(s) |
| [41906](https://jira.hl7.org/browse/FHIR-41906) | For each of the includes and revincludes, make the conformance (SHOULD,SHALL,MAY) the same in the search requirements as the capability statement. |
| [41913](https://jira.hl7.org/browse/FHIR-41913) | Remove organization reverse include for endpoint.identifier.assigner from the capability statement(s) |
| [41914](https://jira.hl7.org/browse/FHIR-41914) | Change NdhExHealthcareService network extension from NdhNetwork to NdhExNetwork |
| [41915](https://jira.hl7.org/browse/FHIR-41915) | Remove revers include Practitioner-identifier-assigner from the capability statement(s) |
| [41963](https://jira.hl7.org/browse/FHIR-41963) | add more guidance regarding the use of point coordinates (longitude, latitude) as an input to a search on the geojson shape for a location. |
| [42007](https://jira.hl7.org/browse/FHIR-42007) | Add a comment to NetworkCoverageAreaSearchParameter indicating that this search parameter is exclusively for the Network Profile resource.|
| [42020](https://jira.hl7.org/browse/FHIR-42020) | Add clarification regarding the resource ownership for the PractitionerRol |
| [42021](https://jira.hl7.org/browse/FHIR-42021) | Add clarification on Relationships Between Different Resources section 1.12.1 All Resource Relationships 1 |
| [42022](https://jira.hl7.org/browse/FHIR-42022) | Add clarification regarding the relationship between InsurancePlan and Networks. |
| [42024](https://jira.hl7.org/browse/FHIR-42024) | The NDH IG already indicates that a payer may establish a "provisional" practitionerRole in the documentation for section 10.3 |
| [42609](https://jira.hl7.org/browse/FHIR-42609) | Revise Section 1.2, titled "Background," to incorporate a narrative and a diagram that elucidate the relationship between the NDH IG and the Plan-Net IG. |
| [42611](https://jira.hl7.org/browse/FHIR-42611) | Add the Bulk Data Requirements for client and server in the Section 5.4.1 titled "National Directory API Bulk Data Conformance Requirements". |
| [42612](https://jira.hl7.org/browse/FHIR-42612) | Update Section 5.4.1, titled "National Directory API Bulk Data Conformance Requirements" to indicate that ndjson is the only format allowed for the _outputFormat parameter. |
| [42644](https://jira.hl7.org/browse/FHIR-42644) | Update Section 3.7 and Section 3.9 |
| [42646](https://jira.hl7.org/browse/FHIR-42646) | Update Section 26.106.1.3 and Section 26.169.1 |
| [42648](https://jira.hl7.org/browse/FHIR-42648) | Update Section 26.166.1.1 |
| [42649](https://jira.hl7.org/browse/FHIR-42649) | Update Section 26.106.1.3 and Section 26.135.1 |
| [42650](https://jira.hl7.org/browse/FHIR-42650) | Update Section 26.129.1 |
| [42651](https://jira.hl7.org/browse/FHIR-42651) | Update Section 26.106.1.3 and Section 26.182.1 |
| [42652](https://jira.hl7.org/browse/FHIR-42652) | Add ihe.iti.mcsd dependence |
| [42653](https://jira.hl7.org/browse/FHIR-42653) | Applied the wording suggested in the ticket in the NDH-Security section. |
| [42657](https://jira.hl7.org/browse/FHIR-42657) | Replace NDH EndpointCommonMimeType Code System with Code System urn:ietf:bcp:13 |
| [42672](https://jira.hl7.org/browse/FHIR-42672) | Add [FHIR Communication Security Link](http://hl7.org/fhir/R4/security.html#http) as clarification |
| [42673](https://jira.hl7.org/browse/FHIR-42673) | Create the Endpoint.environmentType extension element to pre-adopt R5 Endpoint.environmentType element |
| [42676](https://jira.hl7.org/browse/FHIR-42676) | Reword the last paragraph of Section 1.13 titled "NDH Security" |
| [42677](https://jira.hl7.org/browse/FHIR-42677) | Add a description outlining the intended capabilities of the National Directory API Base. |
| [42276](https://jira.hl7.org/browse/FHIR-42276) | Using codes from [employmentStatus](http://terminology.hl7.org/CodeSystem/v2-0066) |
| [42277](https://jira.hl7.org/browse/FHIR-42277) | Using the codes from urn:ietf:bcp:13 build the EndpointCommonMimeTypeVS Value set |
| [42679](https://jira.hl7.org/browse/FHIR-42679) | Remove the restriction profile from the Attestation Capability Statement; change the Validation profile's conformance from MAY to SHALL in the Attestation Capability Statement. |
| [42681](https://jira.hl7.org/browse/FHIR-42681) | Rewrite the wording in the first item of Section 3.1.1 "Users and Actors" |
| [42683](https://jira.hl7.org/browse/FHIR-42683) | Add commercial payers to the list of data sources in Section 11.1.1.2 "Data sources for attestation" |
| [42685](https://jira.hl7.org/browse/FHIR-42685) | Remove modifier below from practitioner-qualification-issuer search parameter |
| [42684](https://jira.hl7.org/browse/FHIR-42684) | Add Clarify in section 11.1.2. "Attestation Data Restriction" |
| [42687](https://jira.hl7.org/browse/FHIR-42687) | Add multipleOr to SearchParameter healthcareservice-new-patient, and practitionerrole-new-patient  |
| [42688](https://jira.hl7.org/browse/FHIR-42688) | Add $export operation to exchange capability statements. |
| [42689](https://jira.hl7.org/browse/FHIR-42689) | Add unique id "scheduleId" for the specific request |
| [42121](https://jira.hl7.org/browse/FHIR-42121) | Remove resource prefix from search parameter code; update the capabality statements, and examples accordingly |
| [42129](https://jira.hl7.org/browse/FHIR-42129) | Add Location.partof search parameter to the capability statements. |
| [42131](https://jira.hl7.org/browse/FHIR-42131) | For each of the includes and revincludes, make the conformance (SHOULD,SHALL,MAY) the same in the search requirements as the capability statement. |
| [42132](https://jira.hl7.org/browse/FHIR-42132) | Add special search parameter _filter for handling complex combination queries | 
| [42133](https://jira.hl7.org/browse/FHIR-42133) | Add multipleOr to SearchParameter location-new-patient |
| [42279](https://jira.hl7.org/browse/FHIR-42279) | Rename Exchange to National Directory API; Distributed Query to Local Directory API |
| [42339](https://jira.hl7.org/browse/FHIR-42339) | Replace the Introduction 1.1 with the text in the ticket. |
| [42646](https://jira.hl7.org/browse/FHIR-42646) | Add description to the structure definition regarding use of the extensions and a note to describe potential uses of the trust framework extension |
| [42647](https://jira.hl7.org/browse/FHIR-42647) | Add HTTP 4XX as an allowed return with an appropriate explanation as to its use
| [42648](https://jira.hl7.org/browse/FHIR-42648) | Add guidance that this extension should only be used when the standard for exchange requires the discovery of a public key. |
| [42658](https://jira.hl7.org/browse/FHIR-42658) | The structure of the Payer Provider Network Query Profiles is the same as the NDH base profiles. However, the "Must Support" conformances are derived from the corresponding DaVinci PDex Plan Net profiles. |
| [42661](https://jira.hl7.org/browse/FHIR-42661) | Make the National Directory API profile resource.meta as must support. |
| [42672](https://jira.hl7.org/browse/FHIR-42672) | Remove the referenced bullet point in Section 1.13 – NDH actors SHALL conform to FHIR Communications requirements, as other items in the security section already define appropriate communication requirements.
| [42676](https://jira.hl7.org/browse/FHIR-42676) | Change to: "NDH implementers in the US Federal systems SHOULD conform with the risk management and mitigation requirements defined in NIST 800 series documents associated with providing access to PII.  The coordination of relevant risk management and the related security and privacy controls - policies, administrative practices, and technical controls - SHOULD be defined in the Data Use Agreements." |
| [42681](https://jira.hl7.org/browse/FHIR-42681) | Update provider definition to: "Any individual or entity that provides services or goods directly, or in support of, healthcare and/or social care delivery"
| [42683](https://jira.hl7.org/browse/FHIR-42683) | Add commercial payers to the list of data source. "data from commercial payers (e.g., UnitedHealth Group, Kaiser Permanente ...)" |
| [42686](https://jira.hl7.org/browse/FHIR-42686) | Remove multipleOr and multipleAnd from SearchParameter practitionerrole-network, since the cardinality of the PractitionerRole.network is 0..1 |
| [42690](https://jira.hl7.org/browse/FHIR-42690) | remove Section 5.4.8 titled "Using List defined resource subsets to be exported" |
| [42837](https://jira.hl7.org/browse/FHIR-42837) | Add Location identifier, endpoint, name, near, and partof search parameter to the CababilityStatements |
| [42838](https://jira.hl7.org/browse/FHIR-42838) | Update this search parameter name to CareTeamNameSearchParameter. Replaced the local Careteam-alais extension with FHIR Extension Pack extension |
| [42839](https://jira.hl7.org/browse/FHIR-42839) | Update this search parameter name to CareTeamNameSearchParameter. Replaced the local Careteam-alais extension with FHIR Extension Pack extension |
| [42877](https://jira.hl7.org/browse/FHIR-42877) | Add MultipleOr modifier to HealthcareServiceNewPatientSearchParameter |
| [42880](https://jira.hl7.org/browse/FHIR-42880) | Add special search parameter _filter for handling complex combination queries | 
| [42881](https://jira.hl7.org/browse/FHIR-42881) | Add special search parameter _filter for handling complex combination queries | 
| [42882](https://jira.hl7.org/browse/FHIR-42882) | Update associated search parameters. |
| [42883](https://jira.hl7.org/browse/FHIR-42883) | Remove "text" modifier from search parameters HealthcareServiceProgramRequirementVaStatusSearchParameter HealthcareServiceSocialServiceVaStatusSearchParameter |
| [42884](https://jira.hl7.org/browse/FHIR-42884) | Remove "text" modifier from search parameter HealthcareServiceSocialServiceBirthsexSearchParameter |
| [42902](https://jira.hl7.org/browse/FHIR-42902) | Add HIEInitiator as the value for the OraganizationAffiliation.code in the diagram of "TEFCA -CareQuality -Health Information Exchange" |
| [42903](https://jira.hl7.org/browse/FHIR-42903) | Add DocShare-federate-in and DocShare-federate-ext as the values for the OraganizationAffiliation.code in the diagram of "TEFCA -CareQuality -Health Information Exchange" |
| [42904](https://jira.hl7.org/browse/FHIR-42904) | Add the modifiers "above" and "below" to the location and organization search parameters for HealthcareService and PractitionerRole profiles. Also, add the modifiers "above" and "below" to the location, primary-organization, and participating-organization search parameters for the OrganizationAffiliation profile. |
| [42925](https://jira.hl7.org/browse/FHIR-42925) | See 41771 |
| [42926](https://jira.hl7.org/browse/FHIR-42926) | change the code of the Search parmeter Location-contains to contains from location-contains, to support the chaining. |
| [42927](https://jira.hl7.org/browse/FHIR-42927) | Remove multipleAnd modifier from all profile verification-status search parameter. |
| [43036](https://jira.hl7.org/browse/FHIR-43036) | Remove meta version from capability statement, Add Concent search parameters |
| [43037](https://jira.hl7.org/browse/FHIR-43037) | Add guidance that will point to 7.1 for details on conformance expectations depending on which Exchange standard a directory claims conformance |
| [42965](https://jira.hl7.org/browse/FHIR-42965) | See 41771 |
| [42966](https://jira.hl7.org/browse/FHIR-42966) | Add guidance on which qualifications should occur at the organization or organizationaffiliation level or possibly both. Expand relevant valuesets to include organization relevant qualifications. |
| [43069](https://jira.hl7.org/browse/FHIR-43069) | See FHIR-42121 |
| [43071](https://jira.hl7.org/browse/FHIR-43071) | Remove modifier multipleAnd from VerificationResultStatusSearchParameter.|
| [43388](https://jira.hl7.org/browse/FHIR-43388) | Rebase the NDH to US Core 6.1.0 |
| [44725](https://jira.hl7.org/browse/FHIR-44725) | Change the cardinality of InsurancePlan.ownedBy and InsurancePlan.administeredBy in the NDH Base InsurancePlan profile from 1..1 to 0..1. |
| [44773](https://jira.hl7.org/browse/FHIR-44773) | Add PractitionerRole endpoint search parameter. |
| [44799](https://jira.hl7.org/browse/FHIR-44799) | Remove the network research parameters from Organization Profile. |
| [44800](https://jira.hl7.org/browse/FHIR-44800) | Update the Organization Search Parameter link on the Base Artifacts page. |
| [44801](https://jira.hl7.org/browse/FHIR-44801) | Remove the duplicated InsurancePlan:plan-network from Organization _revinclude. |
| [44802](https://jira.hl7.org/browse/FHIR-44802) | Add the missing verification-status search parameter to the CapabilityStatements. |
| [44908](https://jira.hl7.org/browse/FHIR-44908) | Update the _revinclude for location to CareTeam:location. |
| [44934](https://jira.hl7.org/browse/FHIR-44934) | Remove _include Practitioner:verification-attestation-who |
| [44966](https://jira.hl7.org/browse/FHIR-44966) | Remove _include InsurancePlan:plan-coverage-area from CapabilityStatements. |
| [44986](https://jira.hl7.org/browse/FHIR-44986) | Remove VerificationResult attestation-who should not set multipleAnd |
| [45340](https://jira.hl7.org/browse/FHIR-45340) | Update the dependencies to  hl7.fhir.uv.subscriptions-backport.r4: 1.1.0 |
| [45341](https://jira.hl7.org/browse/FHIR-45341) | Add backport-subscription-status operations and Subscription to the National Directory API CapabilityStatements |
| [45362](https://jira.hl7.org/browse/FHIR-45362) | Add backport-subscription-status operations and Subscription to the National Directory API CapabilityStatements |
| [45350](https://jira.hl7.org/browse/FHIR-45350) | Change the WebSocket channel conformance to MAY. |


### STU1 ballot change applied for terminology issues
<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>
| Jira Tickets FHIR- | Appllied |
| [42240](https://jira.hl7.org/browse/FHIR-42240) | Using codes from CodeSystem-v2-0066 |
| [42241](https://jira.hl7.org/browse/FHIR-42241) | Using urn:ietf:bcp:13 codes in the NDH local value set EndpointcommonMineTypeVS remove this NDH local EndpointCommonMineTypeCS Code System. |
| [42243](https://jira.hl7.org/browse/FHIR-42243) | Using the codes from [MCSD Endpoint Types](https://profiles.ihe.net/ITI/mCSD/CodeSystem/MCSDEndpointTypes) for the NDH Local Value set, remove this NDG local code system add dependency with ihe.iti.mcsd |
| [42244](https://jira.hl7.org/browse/FHIR-42244) | See the details in [UP-505] Add "Not Applicable" to THO "Endpoint Payload Type" Code System - Jira (hl7.org). Using not-applicable code from http://terminology.hl7.org/CodeSystem/data-absent-reason Code System. Remove this NDH local code system|
| [42245](https://jira.hl7.org/browse/FHIR-42245) | No longer needed. |
| [42247](https://jira.hl7.org/browse/FHIR-42247) | Using the codes from http://terminology.hl7.org/CodeSystem/service-type  Remove this  NDH local Code System. |
| [42248](https://jira.hl7.org/browse/FHIR-42248) | See details in [UP-503](https://jira.hl7.org/browse/UP-503). Keep using NDH local ConsentCategory Code system. |
| [42249](https://jira.hl7.org/browse/FHIR-42249) | In R5, directory-related consent will be introduced. For now, the NDH IG will use its local code system. Eventually, the NDH will transition to the R5 code system and phase out the NDH IG code system. |
| [42254](https://jira.hl7.org/browse/FHIR-42254) | Adopt the practitionerRole code from US 6.1 (SNOMED) and provide a slice to align with codeset used by PlanNet. |
| [42260](https://jira.hl7.org/browse/FHIR-42260) | Developed a local code system containing those codes and incorporated them into this value set. |
| [42261](https://jira.hl7.org/browse/FHIR-42261) | Using the codes from urn:ietf:bcp:13. |
| [42262](https://jira.hl7.org/browse/FHIR-42262) | See details in [UP-505](https://jira.hl7.org/browse/UP-505)Use the code from the Data Absent Reason Code System instead of the code from the NDH IG local code system. |
| [42263](https://jira.hl7.org/browse/FHIR-42263) | The NDH IG no longer profile the value set of the healthcare service program codes. |
| [42264](https://jira.hl7.org/browse/FHIR-42264) | See details in [UP-486](https://jira.hl7.org/browse/UP-486). No longer profile the Healthcare Service Referral Method. | 
| [42265](https://jira.hl7.org/browse/FHIR-42265) | Update the HealthcareServiceType Value Set with the codes from THO Code system instead of from NDH IG local Code System. |
| [42267](https://jira.hl7.org/browse/FHIR-42267) | See details in [UP-504](https://jira.hl7.org/browse/UP-504). Keep using NDH local Consent Scope Value Set. |
| [42270](https://jira.hl7.org/browse/FHIR-42270) | Using THO verificationresult-communication-method code system |
| [42251](https://jira.hl7.org/browse/FHIR-42251) | Using THO verificationresult-communication-method value set |
| [42250](https://jira.hl7.org/browse/FHIR-42250) |  See details in [UP-504](https://jira.hl7.org/browse/UP-504). Keep using NDH local Consent Scope Code System. |
| [42656](https://jira.hl7.org/browse/FHIR-42656) | Update age range, Children Age range 3-12 years, Teens Age range 13-19 years |
| [UP-497](https://jira.hl7.org/browse/UP-497)    | Replace Ndh local language proficiency code system and value set with THO code system and value set |
| [UP-494](https://jira.hl7.org/browse/UP-494)    | Replace Ndh local credential status code system and value set with THO code system and value set |
| [UP-495](https://jira.hl7.org/browse/UP-495)    | Replace Ndh local delivery methods code system and value set with THO code system and value set |
| [UP-520](https://jira.hl7.org/browse/UP-520)    | Replace Ndh local Insurance Coverage Type local system and value set with THO code system and value set |
| [UP-501](https://jira.hl7.org/browse/UP-501)    | Replace Ndh local InsurancePlan plan type code system and value set with THO code system and value set |
| [UP-500](https://jira.hl7.org/browse/UP-500)    | Replace Ndh local Insurance Product Type code system and value set with THO code system and value set |



---

// File: input/pagecontent/downloads.md

* [Full Specification (zip)](full-ig.zip)
* [Package (tgz)](package.tgz)
* [JSON Definitions (zip)](definitions.json.zip)
* [JSON Examples (zip)](examples.json.zip)
* [XML Definitions (zip)](definitions.xml.zip)
* [XML Examples (zip)](examples.ttl.zip)
* [Turtle Definitions](definitions.ttl.zip)


---

// File: input/pagecontent/index.md

### Introduction
The National Directory of Healthcare Providers & Services (NDH) Implementation Guide (IG) provides standards and guidance for a national directory infrastructure in the US. The IG envisions a national source of truth for information about providers, health organizations, and related services, their relationships, and technical connectivity details (i.e., electronic endpoints). Content maintained by the national directory would be made available to downstream local directories using FHIR APIs. Local directories could also use FHIR APIs to make content available to their users. FHIR APIs could also serve as an entry point to the national directory, i.e., providers and organizations contribute information to the national directory over a FHIR API. Finally, the national directory may leverage FHIR APIs to facilitate verification of directory content for accuracy.

The sections of this IG provide guidance and/or standards for each of these capabilities:

- Base artifacts - provides a variety of FHIR artifacts including profiles, extensions, search parameters, and terminologies that comprise a robust directory data model. These artifacts are generally loosely constrained; additional conformance expectations and constraints are provided in other sections of the IG.
- National Directory API artifacts - constrains the Base artifacts and defines multiple methods for exchanging national directory information with a local directory.  Methods include a FHIR API, a scheduled exchange operation including subscriptions and bulk data export.
- National Directory Attestation - provides guidance describing the processes by which data is contributed to a national directory from individuals and organizations.
- National Directory Verification - provides guidance describing the processes by which attested data is verified for truthfulness and accuracy.
- Local Directory API artifacts - constrains the Base artifacts and defines a suite of optional capability statements describing APIs for various use cases local directories may support. Local directories may declare conformance to one or more of these capability statements.

### Background
The National Directory of Healthcare Providers & Services (NDH) Implementation Guide has been developed from a series of foundational guides. It originated from the STU 1.0.0 ballot version of the National Healthcare Directory IGs, which included the Exchange IG, Query IG, and Attestation and Verification IG. These Directory IGs themselves were derived from both the Validated Healthcare Directory IG (International) and the PDex Plan Net IG (Payer Network) (US Realm). The PDex Plan Net IG, in turn, evolved from the Validated Healthcare Directory IG (International).

<figure>
    {% include Evolution.svg %}
    <figcaption></figcaption>
</figure>  

Initially, the National Directory Implementation Guide (IG) comprised three separate IGs. However, during the STU 1.0.0 ballot process, the community provided feedback advocating for the unification of these guides. This led to the creation of the NDH IG, a combined implementation guide. The NDH IG effectively integrates pertinent ballot ticket resolutions from the original three IGs where necessary, forming a more comprehensive and streamlined guide.

**The Original National Directory Implementation Guides:**
1.	[National Healthcare Directory Exchange](http://hl7.org/fhir/us/directory-exchange/2022Sep/) 1.0.0 ballot
2.	[National Healthcare Directory Query](http://hl7.org/fhir/us/directory-query/2022Sep/) 1.0.0-ballot
3.	[National Healthcare Directory Attestation and Verification](http://hl7.org/fhir/us/directory-attestation/2022Sep/) 1.0.0-ballot

Healthcare directories play a critical role in enabling identification of individual providers and service organizations, as well as characteristics about them, their relationships, and the means by which to access and exchange patient information among them electronically. Healthcare directories support a variety of use cases, including:

- Electronic endpoint discovery
- Referrals and transitions of care
- Health plan enrollment
- Provider selection
- Service selection
- Provider credentialing/privileging

Today, many health and social care organizations maintain directories, including ones for providers, payers, health information exchange organizations (HIEs/HIOs), health information service providers (HISPs), social services organizations, government agencies, and credentialing organizations. However, despite their importance, health and social care directory activities remain scattered, uncoordinated, and are often not interoperable. As a result, the industry collectively spends significant time and resources registering and validating demographic information for individual and organizational providers for purposes such as information exchange, referrals, licensure, credentialing, certification, and payment.

Providers and service organizations often have to submit and manage information about themselves and their relationships to a variety of stakeholders. In the US healthcare sector, providers often contract with ten or more health plans, and are required to regularly submit similar information to each plan for inclusion in a given provider network and directory. Likewise, provider credentialing and hospital privileging processes require similar documentation. The Council for Affordable Quality Healthcare [estimated](https://www.caqh.org/explorations/white-paper-defining-provider-data-dilemma) that just maintaining provider databases costs the US healthcare industry at least $2 billion annually.

Due to the high cost of acquiring and maintaining provider, organization and service information, existing healthcare directories often contain information that is inaccurate, out of date, or not validated.


### FHIR At Scale Taskforce Effort
The purpose of the FHIR at Scale Taskforce (FAST) is to augment and support recent HL7® Fast Healthcare Interoperability Resources (FHIR®) efforts focused on ecosystem issues that, if mitigated, can accelerate adoption. A number of regulatory and technical barriers, as well as required core capabilities, have been identified related to Directory, Versioning, and Scale. This Implementation Guide includes the work from FAST with regard to a national endpoint directory. FAST Directory work is focused on defining the issues related to making electronic endpoints available . Since these endpoints are associated with providers, organizations, and services, prior work on [Validated Healthcare Directory FHIR IG](http://build.fhir.org/ig/HL7/VhDir/) and [DaVinci PDEX Plan Net](http://hl7.org/fhir/us/davinci-pdex-plan-net/STU1.1/) was used as the foundation data model. The FHIR endpoint resource provides the structure on which this national directory effort can make endpoints discoverable in the context of the specific providers, organizations and services and their relationships.

For more information on the FAST Directory effort see the [FAST Accelerator](https://confluence.hl7.org/display/FAST) pages on Confluence.

### Overview

#### NDH Concept
**The diagram below represents the conceptual structure of the NDH ecosystem as presented by CMS at HIMSS 2023**

![ndhEcosystem](NDH-Ecosystem.png)

**This National Directory Architecture and Flow diagram below depicts the high-level conceptual design of a central source of NDH data.**

![concetDiagram](NDH Architectures and Workflow.png)


In this diagram, RESTful FHIR APIs facilitate the movement of data into and out of NDH at different points, including:

- Attestation Actor: Individuals and organizations (via an authorized representative) attest to information about themselves, their relationships, and services for inclusion in the NDH. 
See more information about [attestation](attestation-ig.html). 
- Validation & Verification Actor: Validation part of this actor validates attested data against the underlying standards defined. Verification part of this actor verifies healthcare directory 
(not shown in the diagram) may verify  attested data against primary sources, thereby verifying the truthfulness and accuracy of the attested data. For example, an implementer might verify 
a provider’s medical license against records maintained by a state licensure board. Verification may occur initially, when attested data is first submitted, and/or on a regular basis as determined 
by the National Directory implementer and/or applicable laws, regulations, or policies. See more information about [validation & verification](verification-ig.html).
- National Directory API Actor: NDH would make validated/verified directory data available to local workflow environments and user applications to support various business needs. Local workflow 
environments include, but are not limited to, payer organizations, provider organizations, health information exchanges (HIEs), health information service providers (HISPs), Community Information 
Exchanges (CIEs), government agencies, and any other entities that maintain a healthcare directory and/or have a need for verified provider data. See more information 
about [National Directory API](ndapi-ig.html).
- Local Directory API Actor: A local or network directory may choose to be compliant with one or more of the Local Directory API Conformance statements to indicate the standard Queries 
and response information provided to their users. See more information about [Local Directory API](ldapi-ig.html).

### NDH API

This diagram depicts the high-level NDH Restful FHIR APIs.

![apiDiagram](NDH API.png)  
  

In this diagram, RESTful FHIR APIs facilitate interface between the NDH Server and Clients. 
- National Directory Required APIs are supported by NDH Server.
- National Directory Optional APIs are available to different NDH Clients, such as Distributed Access/Workflow directories, Commercial Payer Directories, or the Medicare Provider Enrollment, Chain, and Ownership System (PECOS) 2.0 Medicare/Medicaid to obtain data from NDH. Each of the clients has an option to only use part of the NDH API functions. 
- Query Optional APIs might be adapted by Distributed Access/Workflow directories to utilize NDH content in a standardized way. 
- A/V Required/Optional APIs are used to receive the Attest Information; verify attested information through the Primary Sources.

### NDH Reference Implementation (RI) Architecture
![NDHRI](NDH_RI.png)

In this diagram, the NDH production environment contains four components:
1. NDH component - handles all RESTful FHIR APIs communication between the NDH Server and Clients; validates, verifies, populates, and stores the NDH data contents;
handles the subscription/notification for any critical data changes; support the bulk export and ndhschExport operation
2. Un-Attested information component - stores and processes un-attested information from the CMS National Plan and Provider Enumeration System (NPPES), the Medicare Provider Enrollment, Chain, and Ownership System (PECOS)
3. Updates and corrections component - store and processes the update and correction data for the data entered from the Clients
4. Attested information component - store and process the attested information


### NDH Use Cases
To determine which resources to profile, extensions to create, etc. we reviewed a number of use cases supported by healthcare directories today:
- Basic Information Exchange
    - A1. Enable electronic exchange (e.g., discovery of electronic endpoints such as IHE/EHR endpoints, FHIR server URLs, Direct addresses) - enables the electronic exchange of health information by supporting the ability to discover electronic service information including electronic endpoints or electronic addresses
    - A2. Find an individual and/or organization (even if no electronic endpoint is available) - enables users to find contact and other identifying information about healthcare organizations and individual healthcare providers
- Patient/Payer focused
    - B1. Find provider accessibility information (specialty, office hours, languages spoken, taking patients) - enables individuals and consumers to find contact and other accessibility information for individual healthcare providers and/or healthcare organizations
    - B2. Relationship between provider and insurance plan (insurance accepted) or plan and provider (network) - enables individual healthcare providers, organizations, and payers to discover the relationships between providers, organizations, and payers, as well as additional details about the relationships and entities involved
    - B3. Plan selection and enrollment - enables individuals and consumers to find information about health plans for the purposes of enrollment, including information about the health care providers and organizations that participate in a particular payer network, plan, or product and other information that can help the consumer make an informed choice about choosing the plan that best meets their health care needs
    - B4. Claims management (adjudication, prior authorization, payment) - enables entities to discover information about providers to support claims processing, adjudication, prior authorization, and other reimbursement/payment related activities
- Care Delivery / Value Based Care
    - C1. Provider relationship with a patient (e.g., for alerts) - supports discovery of provider-patient relationships to enable cross-organization workflows and processes for care coordination
    - C2. Provider relationship with other providers in context of a patient (e.g., care team communications) - enables individual providers/organizations/care team members to identify each other, communicate and exchange information, expand the care team (e.g., referrals), and coordinate care within and across organizational boundaries
- Other
    - D1. Provider credentialing - supports the process of establishing and evaluating the qualifications of a health care provider by verifying the provider’s experience, expertise, interests, and willingness to provide medical care
    - D2. Quality or regulatory reporting (e.g., aggregate data, plan networks) - enables providers and health plans to consolidate and standardize the electronic exchange of quality-related data and performance results in addition to helping providers use their own information consistently to “report once”
    - D3. Detection of fraud; inappropriate approval of services and/or payment for services - enables discovery of provider information for evaluating or responding to suspected cases of fraud or improper approval/payment for healthcare services

For each use case, we described the general information requirements necessary to support the use case. We then specified the general information requirements as discrete data elements using FHIR resources. Therefore, this implementation guide covers a broad set of data elements supporting a range of use cases that may reasonably be collected, validated, and exchanged from a central source of validated provider data.

### NDH Resources
The NDH IG contains the following resources, which are based on FHIR R4 base 4.0.1 and US Core 6.1.0. 
- CareTeam: Planned participants in the coordination and delivery of healthcare
- Endpoint: The technical details of an endpoint that can be used for electronic services
- HealthcareService: The details of a healthcare service
- InsurancePlan: Details of a Health Insurance product/plan provided by an organization
- Location: Details and position information for a physical place
- Network (based on Organization): A healthcare provider insurance network
- Organization: An organization is a formal or informal grouping of people or organizations with a common purpose
- OrganizationAffiliation: Details of relationships between two or more organizations
- Practitioner: A practitioner is a person who is directly or indirectly involved in the provisioning of healthcare
- PractitionerRole: Describes the relationship between a practitioner and an organization. A practitioner provides services to the organization at a location. Practitioners also participate in healthcare provider insurance networks through their role at an organization
- Restriction (based on Consent): Restriction on use/release of exchanged information
- Verification (based on VerificationResult): Provide information on which verification process was performed, what was verified, when the verification took place, who performed the verification, and how it was verified for a given instance of a resource

### NDH Profiles
The NDH outlines three profile categories for the mentioned Resources above, each predicated on the specific functionalities inherent to the NDH. 
1. [Base Profiles](base-artifacts.html#the-national-directory-of-healthcare-providers--services-ndh-base-profiles) - the basic data-structure definition for the NDH
2. [National Directory API Profiles](ndapi-artifacts.html#national-directory-api-artifacts) - build on the base profiles with additional constrains for the National Directory API
3. [Payer Provider Network Local Directory API Profiles](ldapi-artifacts.html#payer-provider-network-local-directory-api-profiles) - build on the base profile with additional constrains for the Payer Provider Network

Refer to the following table to understand where each profile set is applied within the NDH architecture.
<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>
| Profile Set | National Directory API Actor | Attestation Actor | Validation & Verification Actor | Local Directory API Actor |
| ----------- | -------------- | ----------------- | ------------------------------- | ----------------------- |
| [Base Profiles](base-artifacts.html#the-national-directory-of-healthcare-providers--services-ndh-base-profiles) | | Yes(1) | Yes(1) | Yes(2) |
| [National Directory API Profiles](ndapi-artifacts.html#national-directory-api-artifacts) | Yes(2) | Yes(2) | Yes(1) | |
| [Payer Provider Network Local Directory API Profiles](ldapi-artifacts.html#payer-provider-network-local-directory-api-profiles) | | | | Yes(2) | 

footnote:
- (1): Those profiles are utilized on Client side
- (2): Those profiles are utilized on Server side

### Conformance
This IG addresses the conformance by
1.	Profile Mandatory element
2.	Profile Must Support element
3.	The Capability Statement 
 
#### Mandatory Elements
Mandatory elements are elements with a minimum cardinality of 1 (min=1). When an element is Mandatory, the data is expected to be present.

#### Must Support
When querying and reading the National Directory Profiles defined in this IG, Must Support on any profile data element **SHALL** be interpreted as follows:  

1. **National Directory API Requirements**
- National Directory API actors **SHALL** be capable of capturing and populating all Must Support data elements as part of the query results.
- In situations where information on a particular Must Support data element is not present and the minimum cardinality is 0, the National Directory API actor **SHALL NOT** include the data elements in the resource instance returned as part of the query results.
- In situations where information on a particular data element is not present and the minimum cardinality is >0 SHALL send the reason for the missing information using values (such as nullFlavors) from the value set where they exist or use the dataAbsentReason extension.

2. **Local Directory API Requirements**
- Distributed directory actors **SHALL** be capable of processing resource instances containing the Must Support data elements without generating an error or causing the application to fail.
- Distributed directory actors **SHALL** be capable of displaying data elements maintained by the distributed directory for human use or storing the information for other purposes.
- When querying the National Directory API actor, Distributed directory actors **SHALL** interpret missing Must Support data elements within resource instances as data do not present in the National Directory API actor’s system.

3. **Application Requirements**
- Application actors **SHALL** be capable of processing resource instances containing the Must Support data elements without generating an error or causing the application to fail.
- Application actors **SHOULD** be capable of displaying the data elements relevant to the applications use case(s) for human use or storing the information for other purposes.
- When querying National Directory API actors, Consumer Application actors **SHALL** interpret missing Must Support data elements within resource instances as data not present in the National Directory API actor’s system.

### Relation to US Core 
This implementation guide was written for a US audience and profiles resources from US Core STU 6.1.0, where available (Practitioner, PractionerRole,Organization, and Location), and otherwise from R4.0.1 (CareTeam, Consent, Endpoint, HealthCareService, InsurancePlan, OrganizationAffiliation, VerificationResult). The Network profile is based on USCore Organization, since there was no contradiction between the USCore profile and the NDH requirements. However, the NPI and CLIA identifier types, which are Must-Support, are clearly intended for provider organizations only and are not expected to be populated for other organization types. Restriction profile is based on the R4.0.1 Consent profile.

### Denpendency
{% include dependency-table-short.xhtml %}

<br />
### Overview of NDH - Resource Relationships
Note: the following diagrams provide a high-level view of the relationships between resources used in this IG. They do not necessarily reflect all of the relationships/references between resources.

#### All Resource Relationships 1
A high-level view of the relationships between resources. 
In the NDH resource profiles, there is no inherent relationships. Both Organizations and OrganizationAffiliations can declare a network relationship. Consider a scenario where an OrganizationAffiliation, which is part of a Network, is associated with a PractitionerRole through the Organization. This relationship is not automatically inherited by the PractitionerRole. The PractitionerRole must have its own direct link to the Network. Likewise, any network affiliation declared by a PractitionerRole is not automatically inherited by the organization.

<figure>
    {% include RelResource.svg %}
    <figcaption></figcaption>
</figure>  
<br />

#### All Resource Relationships 2  
All resources reference the Endpoint resource.
<figure>
    {% include RelResource2.svg %}
    <figcaption></figcaption>
</figure>  
<br />

#### All Resource Relationships 3  
All resources reference the Restriction resource, which allows the usage of restriction down to the resource element level. The Restriction resource **SHALL** contained in the resource which has the elements need to be restricted. 
<figure>
    {% include RelResource3.svg %}
    <figcaption></figcaption>
</figure>
<br />

#### Practitioner Role Relationships  
PractionerRole describes the relationship between a practitioner and an organization. A practitioner provides services to the organization at a location. Practitioners also participate in healthcare provider insurance networks through their role at an organization.
<figure>
    {% include RelPractitionerRole.svg %}
    <figcaption></figcaption>
</figure>
<br />

#### Organization Affiliation Relationships  
Similar to PractitionerRole, OrganizationAffiliation describes relationships between organizations. For example: 
1. The relationship between an organization and an association it is a member of (e.g., hospitals in a hospital association)
2. An organization that provides services to another organization, such as an organization contracted to provide mental health care for another organization as part of a healthcare provider insurance network
3. Distinct organizations forming a partnership to provide services (e.g., a cancer center)
<figure>
    {% include RelOrganizationAffiliation.svg %}
    <figcaption></figcaption>
</figure>
<br />

#### Network / Insurance Plan Relationships  
A network is a group of practitioners and organizations that provide healthcare services for individuals enrolled in a health insurance product/plan (typically on behalf of a payer).
<figure>
    {% include RelNetworkInsurancePlan.svg %}
    <figcaption></figcaption>
</figure>
<br />

#### CareTeam Relationships
<figure>
    {% include RelCareTeam.svg %}
    <figcaption></figcaption>
</figure>
<br />

### NDH Security
The following are the NDH security considerations that implementers should follow:

- All implementers of FHIR servers and clients should pay attention to [FHIR Security](http://hl7.org/fhir/R4/security.html) considerations.
- In addition to the [FHIR Security](http://hl7.org/fhir/R4/security.html) considerations, the NDH requests need to contain specific information about NDH client identity and organization information.
- Providing this information using FHIR Search APIs is very cumbersome and is not necessary. This kind of information can be collected by the NDH Authorization Server during application registration and avoid repeating the information on each request.
- These mechanisms are outlined in detail in the [SMART Backend Services Authorization Guide](http://www.hl7.org/fhir/smart-app-launch/backend-services.html).

The following are security conformance requirements for NDH actors:

- NDH servers **SHALL** support the [SMART Backend Services Authorization Guide](http://www.hl7.org/fhir/smart-app-launch/backend-services.html) to collect the necessary requestor information appropriate for making the NDH data request.
- NDH servers **SHALL** support [UDAP](http://hl7.org/fhir/us/udap-security/STU1/).
- NDH servers **SHALL** reference a single time source to establish a common time base for security auditing across the system.
- NDH servers **SHALL** support the AuditEvent resource to capture audit logs of the various transactions. NDH actors SHOULD capture as many AuditEvent resource data elements as appropriate based on requirements of FHIR Audit Logging and local policies.
- NDH transactions **SHALL** support TLS version 1.2 or higher to secure the transmission channel unless the transmission is taking place over a more secure network.(Using TLS even within a secured network environment is still encouraged to provide defense in depth.) US Federal systems implementing NDH actors **SHOULD** conform with FIPS PUB 140-2.
- NDH servers **SHOULD** retain Provenance information using the FHIR Provenance resource.
- NDH clients **SHALL** support the SMART Backend Services Authorization Guide, the HL7 UDAP Guide, or both
- NDH clients **MAY** choose which OAuth profile to use in a particular exchange workflow. 


The following are security conformance requirements for the overall program/system:

- NDH implementers in the US Federal systems SHOULD conform with the risk management and mitigation requirements defined in NIST 800 series documents associated with providing access to PII.  The coordination of relevant risk management and the related security and privacy controls - policies, administrative practices, and technical controls - SHOULD be defined in the Data Use Agreements.
- The time service used for auditing SHOULD be documented in the Business Associate Agreements.

### Intellectual Property Considerations
{% include ip-statements.xhtml %}

### Authors and Contributors

<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **Role** | **Name** | **Organization** |
| Subject Matter Expert and Use Case Lead | Robert Dieterle | EnableCare, LLC |
| Author | Ming Dunajick | Lantana Consulting Group |
| Contributor | Sean Mahoney | The MITRE Corporation |


We extend our heartfelt appreciation to the numerous users and facilitators who have actively participated in conference calls, provided reviews, shared feedback, offered sample data, and played a pivotal role in the development and testing of reference implementations...

Special mentions go to
- Alix Goss, Dana Marcelonis, Michele Galioto (Point of Care Partners)
- Joseph M. Lamy, Rick Lisseveld (AEGIS)
- David Pyke (HL7 FAST Accelerator )
- Alex Kontur (ONC)
- Matthew Bishop (Open City Labs)
- Corey Spears (Lantana Consulting Group)
- Errol Blake, Isaac Nooli, Kenneth Crawford, and Vignesh Rajan (Newwave.io)

We could not have done this without the support from Lantana Consulting Group, and CMS. 

If we have inadvertently left out anyone from this acknowledgment, we sincerely apologize.


{% include markdown-link-references.md %}

---

// File: input/pagecontent/ldapi-artifacts.md

### Local Directory API Profiles

#### Payer Provider Network Local Directory API Profiles
The structure of the Payer Provider Network Local Directory API Profiles is the same as the NDH base profiles. However, the "Must Support" conformances are derived from the corresponding [DaVinci PDex Plan Net](http://hl7.org/fhir/us/davinci-pdex-plan-net) profiles.

* [Payer Provider Network Local Directory API Endpoint]
* [Payer Provider Network Local Directory API HealthcareService]
* [Payer Provider Network Local Directory API InsurancePlan]
* [Payer Provider Network Local Directory API Location]
* [Payer Provider Network Local Directory API Network]
* [Payer Provider Network Local Directory API Organization]
* [Payer Provider Network Local Directory API OrganizationAffiliation]
* [Payer Provider Network Local Directory API Practitioner]
* [Payer Provider Network Local Directory API PractitionerRole]


#### Local Directory API Profiles
Local Directory API Profiles are the same as the NDH Base Profiles  

* [Base CareTeam]
* [Base Endpoint]
* [Base HealthcareService]
* [Base InsurancePlan]
* [Base Location]
* [Base Network]
* [Base Organization]
* [Base OrganizationAffiliation]
* [Base Practitioner]
* [Base PractitionerRole]
* [Base Restriction]
* [Base Verification]




{% include markdown-link-references.md %}

---

// File: input/pagecontent/ldapi-capability.md

### Capability Statements
This Implementation Guide (IG) summarizes the Local Directory APIs into the following types:
- **Endpoint directories** - Includes at a minimum Endpoint and Organization resources, and possibly other resources as well.
- **Health and Human Service directories** - Includes at a minimum Endpoint, Organization, Location, Network, Proactitioner, PractitionerRole resources, and possibly other resource as well for Health and Human Services
- **Human Service directories** - Includes at a minimum Endpoint, HealthcareService, Location, Organization, and possibly other resources as well for Human Services
- **Provider directories** - Includes at a minimum Endpoint, Location, Organization, Practitioner, PractitionerRole, and possibly other resources as well for Providers

For each type of the directory, the IG provides two FHIR Restful API guidance:
- **Basic**: Should include APIs that at the very least support resources.
- **Extended**: Beyond the basic inclusion, it could encompass additional APIs for other resources.

This IG also provides the FHIR Restful API guidance for the **Payer Provider Network Local Directories**. 

The following table enumerates the recommended CapabilityStatements for a range of Local directories:
<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

### Local Directory API Capability Statement Summary

<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

|Profile/Capability| [Endpoint Basic] | [Endpoint Expanded] | [Health and Human Service Basic] | [Health and Human Service Expanded] | [Human Service Basic] | [Human Service Expanded] | [Provider Basic] | [Provider Expanded] | [Payer Provider Network]
| ---------------- | :---: | :------------: | :----------------------: | :-------------------------------: | :-----------: | :--------------------: | :------: | :---------------: |
|**CareTeam**               |  MAY   | MAY   | MAY   | SHOULD | MAY   | MAY   | MAY   | MAY   |       |
|**Endpoint**               |  SHALL | SHALL | SHALL | SHALL  | SHALL | SHALL | SHALL | SHALL | SHALL |
|**HealthcareService**      |  MAY   | SHALL | MAY   | SHALL  | SHALL | SHALL | SHOULD| SHALL | SHALL |
|**InsurancePlan**          |  MAY   | MAY   | MAY   | SHALL  | MAY   | SHALL | MAY   | SHOULD| SHALL |
|**Location**               |  SHOULD| SHALL | SHALL | SHALL  | SHALL | SHALL | SHALL | SHALL | SHALL |
|**Network**                |  MAY   | MAY   | SHALL | SHALL  | SHOULD| SHALL | MAY   | SHOULD| SHALL |
|**Organization**           |  SHALL | SHALL | SHALL | SHALL  | SHALL | SHALL | SHALL | SHALL | SHALL |
|**OrganizationAffiliation**|  MAY   | MAY   | MAY   | SHALL  | SHOULD| SHALL | SHOULD| SHALL | SHALL |
|**Practitioner**           |  SHOULD| SHALL | SHALL | SHALL  | MAY   | MAY   | SHALL | SHALL | SHALL |
|**PractitionerRole**       |  SHOULD| SHALL | SHOULD| SHALL  | SHOULD| SHALL | SHALL | SHALL | SHALL |
|**Restriction**            |  MAY   | MAY   | MAY   | MAY    | MAY   | MAY   | MAY   | MAY   |       |
|**Validation**             |  MAY   | MAY   | MAY   | MAY    | MAY   | MAY   | MAY   | MAY   |       |

Notes:
1. Payer Provider Network Local Directory Capabilities are based on the Payer Provider Network Local Directory API Profiles 
2. All other Capabilities are based on the base Profiles



{% include markdown-link-references.md %}


---

// File: input/pagecontent/ldapi-examples.md

### Look up endpoint by Organization
1. Endpoints for a given Orgnization Name:
```
GET [base]/Organization?name=ABC&_include=Organization:endpoint
```

2. Endpoints for a given State payer Orgnization:
```
GET [base]/Organization?address-state=FL&_include=Organization:endpoint
```

### Discover a specific social service by healthcareService
1. Get Healthcare Service by category
```
Get [base]/HealthcareService?category=food
```
```
Get [base]/HealthcareService?=category=group
```

### Discover practitioner qualifications
1.  Search for providers who possess qualifications in internal medicine and reside in the state of Connecticut.
```
GET [base]/Practitioner?qualification-code=207R00000X&address-state=CT
```

### Discover practitioner location and office hours
1. Search for all practitioners in internal medicine who have a role in practice.
```
GET [base]/PractitionerRole?specialty=207R00000X
```
2. Search for all practitioners of internal medicine in the state of Connecticut who hold a role in practice.
```
GET [base]/PractitionerRole?specialty=207R00000X&location.address-state=CT
```

3. Search for all internal medicine practitioners in Connecticut who are accepting new patients.
```
GET [base]/PractitionerRole?specialty=207R00000X&location.address-state=CT&new-patient=newpt
```
4. Search for a particular internal medicine practitioner in Connecticut with his NPI number
```
GET [base]/PractitionerRole?specialty=207R00000X&location.address-state=CT&practitioner.identifier=1235539892
```

---

// File: input/pagecontent/ldapi-flow-diagrams.md

Distributed Query Flow Diagrams

---

// File: input/pagecontent/ldapi-ig.md

### Local Directory APIs

Today, a variety of health and social care organizations maintain directories, encompassing providers, payers, health information exchange organizations (HIEs/HIOs), health information service providers (HISPs), social services organizations, government agencies, and credentialing organizations. Despite their crucial role, activities associated with health and social care directories are often dispersed, uncoordinated, and lack interoperability. Consequently, the industry invests considerable time and resources to register and validate demographic information for individual and organizational providers for various purposes, including information exchange, referrals, licensure, credentialing, certification, and payment.

The underlying concept of this guide is to illustrate the information flow from the NDH data source to distributed workflow directories (Local Directories). We visualize the NDH operating as a "source of truth" for an extensive range of provider data, designed to support local business requirements and use cases. A local environment could conveniently access all or a selected portion of the data it requires from the NDH, assuring the information's accuracy. If needed, a local environment could supplement NDH data with additional data sourced or maintained locally. For instance, a local environment managing provider credentialing might depend on the NDH for demographic information about a provider (e.g., name, address, educational history, license information, etc.), but might also request supplementary information from the provider, such as work history, liability insurance coverage, or military experience. Similarly, we envisage the NDH sharing information with other systems, individual end users, or the public.

This guide does not enforce any mandates on distributed workflow directories (Local Directories) in terms of their overarching design, technical framework, or competencies. Rather, it presents a suite of standard Restful FHIR APIs that these directories may opt to use for revealing the information they've gathered from the NDH for their distinct use cases. The adoption of these standard Restful FHIR APIs is entirely optional and it's up to each distributed workflow directory's discretion to incorporate them as needed. The Distributed Workflow Directory (Local Directories) Restful FHIR APIs is shown in the as red call out in the diagram below.

![DWDAPI](Distributed-Workflow-Directory-API.png)



---

// File: input/pagecontent/ldapi-standard.md

Distributed query standard

---

// File: input/pagecontent/ldapi-use-cases.md

### Local Directory API Use Cases
#### Look up endpoint by Organization (all capability statements)
[See Example](ldapi-examples.html#look-up-endpoint-by-organization)
#### Discover a specific social service by healthcareService (Human Service and Health/Human Service)
[See Example](ldapi-examples.html#discover-a-specific-social-service-by-healthcareservice)
#### Discover practitioner qualifications (e.g., look for providers with internal medicine qualifications living in Conneticut) (all except endpoint and human services)
[See Example](ldapi-examples.html#discover-practitioner-qualifications)
#### Discover practitioner location and office hours (Health and Human Services)
[See Example](ldapi-examples.html#discover-practitioner-location-and-office-hours)


---

// File: input/pagecontent/ndapi-artifacts.md

### National Directory API Profiles

National Directory API profiles have their conformance based on [Validated Healthcare Directory Implementation Guide](https://build.fhir.org/ig/HL7/VhDir).


#### National Directory API Profiles
The following presents the list of National Directory API profiles. National Directory API profiles are based on the base NDH profile, with additional constrains (i.e., more elements are require to be present). Each profile defines the minimum mandatory elements, extensions, and terminology requirements that are required to be present (**MUST** support). For every profile, there is a simple summary of  requirements and guidance, the usage and scope of the profile, and the boundaries and relationship with other profiles. A structured table presents a [logical view](https://hl7.org/fhir/R4/formats.html#table) of the content in both a differential and snapshot view. This is complemented with references to relevant terminologies, search parameters, and examples.

* [National Directory API CareTeam]
* [National Directory API Endpoint]
* [National Directory API HealthcareService]
* [National Directory API InsurancePlan]
* [National Directory API Location]
* [National Directory API Network]
* [National Directory API Organization]
* [National Directory API OrganizationAffiliation]
* [National Directory API Practitioner]
* [National Directory API PractitionerRole]


{% include markdown-link-references.md %}


---

// File: input/pagecontent/ndapi-capability.md

### National Directory API Capability Statements
<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

|Profile/Capability         | [National Directory API]   | [National Directory API Base Expanded] | [National Directory API Base] |
|**CareTeam**               |  SHALL | SHOULD | SHOULD |
|**Endpoint**               |  SHALL | SHALL  | SHALL  | 
|**HealthcareService**      |  SHALL | SHALL  | SHOULD | 
|**InsurancePlan**          |  SHALL | SHOULD | SHOULD | 
|**Location**               |  SHALL | SHALL  | SHALL  | 
|**Network**                |  SHALL | SHOULD | SHOULD | 
|**Organization**           |  SHALL | SHALL  | SHALL  | 
|**OrganizationAffiliation**|  SHALL | SHALL  | SHOULD | 
|**Practitioner**           |  SHALL | SHALL  | SHALL  | 
|**PractitionerRole**       |  SHALL | SHALL  | SHALL  | 
|**Restriction**            |  SHALL | SHALL  | SHOULD | 
|**Validation**             |  SHALL | SHALL  | SHOULD | 


### Conformance Requirements
The primary focus of this implementation guide is a RESTful API for obtaining data from a FHIR-enabled API from a National Directory of Healthcare Providers & Services (NDH). This API supports a unidirectional flow of information from a FHIR-enabled National Directory to Local Directories and/or Applications. (e.g., supports GET but not PUT or POST)

The capability statement for NDH requires support of all of the associated resources defined for the NDH.  However, to facilitate the use of the NDH IG by local environments that may act, in their sphere of influence as reference directories, this IG supports two less restrictive National Directory API capability statements:

1. National Directory API Base Expanded requires that all resources be supported, indicated by **SHALL**, except for CareTeam, InsurancePlan, and Network, which are designated as **SHOULD support**.
2. National Directory API Base limits the required support, denoted by **SHALL**, to the following resources: Endpoint, Location, Organization, Practitioner, and PractitionerRole, primarily focusing on providing endpoint location services such as DirectTrust. The remaining resources are designated as **SHOULD** support.










{% include markdown-link-references.md %}



---

// File: input/pagecontent/ndapi-examples.md

### Exchange Examples

#### Social Service


##### Social Service diagram for example
<figure>
    {% include UseCaseCBO.svg %}
    <figcaption></figcaption>
</figure>

- [HealthcareService/HealthcareService-Social-Hope-CBO]
- [HealthcareService/HealthcareService-Social-Towson-Food]
- [Location/Location-Social-Hope-CBO]
- [Location/Location-Social-Towson-Food]
- [Organization/Organization-Social-Hope-CBO]
- [Organization/Organization-Social-Towson-Food]

#### PractitionerRole
PractionerRole describes the relationship between a practitioner and an organization. A practitioner provides services to the organization at a location. Practitioners also participate in healthcare provider insurance networks through their role at an organization.

##### Examples associated with this PractiontionerRole
Dr. Hans Solo operates a private practice within the Hans Solo Clinic, offering primary healthcare services. He is an active participant in the Blue Cross Blue Shield Connecticut PPO network, which is covered by the Blue Cross Blue Shield Connecticut Insurance Plan. 

Patients can effortlessly locate Dr. Solo by searching his name, specialty, or location. The search results provide comprehensive information, including the location and type of service offered, the clinic's working hours, acceptance of new patients, types of insurance honored, and an electronic link to access patient medical records. 

Other healthcare organizations also have the ability to access Dr. Solo's practice endpoint, providing a secure route to patient medical records or to transmit referral details. 

Moreover, the Blue Cross Blue Shield PPO Network can utilize Dr. Solo's practice endpoint to retrieve patient medical data for claim processing and pre-authorization procedures.

<figure>
    {% include PratitionerRoleSolo.svg %}
    <figcaption></figcaption>
</figure>
  
- [PractitionerRole/HansSoloRole]
- [Practitioner/HansSolo]
- [Location/HansSoloClinic]
- [HealthcareService/HansSoloService]
- [Organization/BlueCrossBlueShield-CT-PPO]
- [Organization/BlueCrossBlueShield-CT-ORG]
- [InsurancePlan/BlueCrossBlueShield-CT]
- [Endpoint/HansSoloDirectTrustEndpointReferrals]
- [Endpoint/HansSoloPatientAccessEndpoint]

##### Practitioner and Networks.
Practitioners have the flexibility to engage in multiple insurance networks concurrently. They are also afforded the liberty to disengage from a network or integrate into a new one. The NDH has established infrastructure, utilizing PractitionerRole, to facilitate these transitions.

In the duration from June 1, 2023, to December 31, 2023, a practitioner, referred to as Network1andNetwork2 PractitionerOne, is actively involved in both the Network1 and Network2, under the administration of OMPN, an organization responsible for managing payer networks.

However, by the end of 2023, the practitioner plans to withdraw from Network1. Meanwhile, the practitioner commenced their affiliation with Network2 on June 1, 2023.


<figure>
    {% include UsecaseRel.svg %}
    <figcaption></figcaption>
</figure>  

- [Network1]
- [Network2]
- [OrgManageNetwork]
- [PractitionerOneWithNetwork1AndNetwork2]
- [PractitionerOneNetwork1Role]
- [PractitionerOneNetwork2Role]
- [MedicareAdvantageHMO]
- [MedicareAdvantage]


##### OrganizationAffliliation and Networks.
Organizations could participate in several insurance networks simultaneously. They possess the freedom to disconnect from an existing network or assimilate into a new one. The NDH has crafted an infrastructure, through OrganizationAffiliation, to streamline such transitions.

From June 1, 2023, through December 31, 2023, an organization named OrgOneWithNetwork1AndNetwork2 is actively engaged with both the Network1 and Network2 networks. This participation is supervised by OMPN, an entity tasked with overseeing payer networks.

Nevertheless, by the close of 2023, the organization anticipates severing its ties with the Network1 network. Concurrently, the organization initiated its association with the Network2 network starting on June 1, 2023.

<figure>
    {% include UsecaseRel2.svg %}
    <figcaption></figcaption>
</figure>  

- [Network1]
- [Network2]
- [OrgManageNetwork]
- [OrgOneNetwork1Affiliation]
- [OrgOneNetwork2Affiliation]
- [OrgOneWithNetwork1AndNetwork2]
- [MedicareAdvantageHMO]
- [MedicareAdvantage]

##### HealthcareService and Networks without InsurancePlan
Typically, healthcare service networks are tied to insurance plans. However, in the realm of social services, the delivery or subscription of services often occurs through a hub. This hub embodies a similar concept to a network, but without an insurance plan attached. To simplify the process of locating such hubs (networks), NDH offers a connection from the healthcare server to the network. For instance, the Welcome Home organization provides housing services at the Welcome Home location. This service is subscribed to through the Social Service Housing Network.

<figure>
    {% include UsecaseRel3.svg %}
    <figcaption></figcaption>
</figure>  

- [HealthcareServiceHomelessAssistance]
- [OrgHousingAssistanceHubManagement]
- [OrganizationWelcomeHome]
- [LocationWelcomeHome]
- [SocialServiceHousingNetwork]


#### OrganizationAffiliation
Similar to PractitionerRole, OrganizationAffiliation describes relationships between organizations.

##### OrganizationAffiliation among clinic, hospital, network, and insurance plan

###### OrganizationAffiliation relationship diagram for example
<figure>
    {% include OrganizationAffiliation.svg %}
    <figcaption></figcaption>
</figure>

###### Examples associated with this OrganizationAffiliation
* ***[OrganizationAffiliation/BurrClinicAffil]***
* ***[Organization/BurrClinic]***
* ***[Organization/AcmeofCTStdNet]***
* ***[Organization/Acme]***
* ***[Organization/Hospital]***
* ***[Organization/AcmeofCTPremNet]***
* ***[Location/HospLoc1]***
* ***[Location/HospLoc2]***
* ***[Location/StateOfCTLocation]***
* ***[HealthcareService/BurrClinicServices]***
* ***[InsurancePlan/AcmeQHPGold]***
* ***[Endpoint/AcmeOfCTPortalEndpoint]***


##### OrganizationAffiliation among pharmacy chain

###### Pharmacy chain OrganizationAffiliation relationship diagram for example
<figure>
    {% include OrganizationAffiliationPharm.svg %}
    <figcaption></figcaption>
</figure>

###### Examples associated with this OrganiztionAffiliation
* ***[OrganizationAffiliation/PharmChainAffil1]***
* ***[Organization/PharmChain]***
* ***[Organization/AcmeofCTStdNet]***
* ***[Organization/BigBox]***
* ***[Organization/Acme]***
* ***[Location/PharmLoc1]***
* ***[Location/PharmLoc2]***
* ***[Location/PharmLoc3]***
* ***[Location/PharmLoc4]***
* ***[HealthcareService/PharmChainRetailService]***

{% include markdown-link-references.md %}

---

// File: input/pagecontent/ndapi-flow-diagrams.md


### NDH Export Operation Workflow
#### NDH Scheduled Export Operation
[OperationDefinition-NdhschExport]
#### Roles
There are two primary roles involved in a NDH export transaction:
1. Data provider
2. Data receiver

<figure>
    {% include ndh-export.svg %}
    <figcaption>Sequence diagram of Bulk Data </figcaption>
</figure>  

#### Description  
**Setup Account**
1. A Local Directory sends a request to the NDH to create an account for establishing authentication and authorization.
2. The NDH evaluates the application submitted by the Local Directory for the creation of a new account and decides whether to grant or reject the account creation. Upon approving the request, the NDH assigns a distinct account identifier to the new account. Additionally, a specific data content location is allocated for the purpose of future data retrieval. This designated location is structured to accommodate various scheduled data exports and is equipped with adequate storage capacity to handle the volume of data expected to be extracted.
3. The NDH communicates the outcome of the request back to the Local Directory.

**Request $ndhschExport from Portal or Application**
1. Possessing the assigned account ID, the Local directory is then able to access the National Directory. This can be achieved through various secure login methods such as UDAP, SMART, or other authentication processes established by the implementer of the National Directory.
2. Begin a process like $ndhschExport by submitting a request that includes all necessary parameters. To conduct multiple scheduled exports, each request must have a distinct schedule ID. For example, this might entail setting up a weekly extraction schedule for specific resources from all organizations and practitioners in the state of Maryland, and a monthly schedule for all InsurancePlan data in the state of Maryland.
3. The NDH evaluates the request and generates a corresponding response.
4. If the request is approved by the NDH, a 202 (Accept) response will be returned, indicating that the NDH will proceed with the $ndhschExport operation as requested. In case of any errors in the request, the NDH will reject it and respond with a 4xx or 5xx status code.

**Actions in the National Directory server could be once or repeatedly**
1. The National Directory server processes queries from the $ndhschExport requests, generating data based on specified search criteria. This data is then stored in a designated repository for each account according to a pre-set schedule. Multiple scheduled exports can be set up by each account, each with a unique scheduled ID provided in the Local Directory's $ndhschExport request. The National Directory is advised to include this information in the file names of each extraction to differentiate between requests. These files are produced based on the scheduled start times and frequencies. To distinguish files generated at different times, each file will contain a timestamp reflecting the start time and frequency, indicating the date and time the data was extracted. Since data extraction takes time, a corresponding status file is created for each extraction. This file follows the same naming convention as the extracted file but includes a status indicator. The status file contains information such as 'completed ready for download', 'pending', or 'error contact the administrator'.

2. Each time the $ndhschExport operation is executed within the National Directory, it results in the generation of a new set of files in the repository. If the Local Directory's request includes the input parameter 'keep file flag' set to false, this new data extraction will lead to the deletion of the old set of files that were generated previously. Conversely, if the 'keep file flag' is set to true, the previously extracted files will be retained. Regarding ndjson format data, a file containing a list of ndjson links is provided. This allows users to access each file through the HTTP POST method using the provided links. The filename for this list will follow the established naming convention but will specifically indicate that it contains links for ndjson files.

For a weekly extraction schedule targeting specific resources from all organizations and practitioners in the state of Maryland, and a monthly schedule for all InsurancePlan data in Maryland, the generated files follow this format:
{scheduled id}-{resource type}-{date and time of extraction}.{file type}
For example:
- 1234-organization-2024-01-01-23-59-59.ndjson
- 1234-practitioner-2024-01-01-23-59-59.ndjson
- 1234-status-2024-01-01-23-59-59.txt
- 1234-ndjson-links-2024-01-01-23-59-59.txt

- 1234-organization-2024-02-01-23-59-59.ndjson
- 1234-practitioner-2024-02-01-23-59-59.ndjson
- 1234-status-2024-02-01-23-59-59.txt
- 1234-ndjson-links-2024-02-01-23-59-59.txt

- 5678-insuranceplan-2024-01-01-23-59-59.ndjson
- 5678-status-2024-01-01-23-59-59.txt
- 5678-ndjson-links-2024-01-01-23-59-59.txt
- 5678-insuranceplan-2024-01-07-23-59-59.ndjson
- 5678-status-2024-01-07-23-59-59.txt
- 5678-ndjson-links-2024-01-07-23-59-59.txt


**Actions taken by the Local Directory could be once or repeatedly via using FHIR REST API**
1. With the assigned account ID in hand, the Local directory gains access to the National Directory. This access is secured through various authentication methods such as UDAP, SMART, or other protocols specified by the National Directory's implementer.
2. To retrieve the extracted data, begin by reading the status file. If the status indicates 'completed, ready for download,' proceed to the next step.
3. For FHIR endpoints containing data in ndjson format, initially obtain the ndjson links from the ndjson-links file. Then, access each file by employing the HTTP POST method with the URLs provided in the list.

**Actions taken by the Local Directory could be once or repeatedly via other method (e.g., SFTP)**
1. With the assigned account ID, the Local directory gains the ability to access the National Directory. Access is facilitated through a variety of secure login methods like UDAP, SMART, or other authentication processes that are established by the National Directory's implementer.
2. To retrieve files, use the SFTP protocol. Start by reading the status file; if the status indicates 'completed and ready for retrieval', proceed to transfer the files using SFTP.

**Cancel $ndhschExport operation**
1. Equipped with the assigned account ID, the Local directory is enabled to access the National Directory. This access is secured through various login methods such as UDAP, SMART, or other authentication protocols set up by the National Directory's implementer.
2. The Local Directory has the option to cancel the $ndhschExport operation at any time. This can be done by executing the $ndhschExport operation with the _cancel parameter set to true, along with providing the account and the scheduled ID for that account.
3. Upon receiving the request, the National Directory evaluates it.
4. The National Directory then communicates its response to the Local Directory, which could be a 200 OK status or an error status in the range of 4XX or 5XX.
5. If the operation is to proceed, the National Directory executes the $ndhschExport operation, resulting in the deletion of the previously scheduled operation. This deletion impacts only future and upcoming data retrievals.


### Bulk Data Export Operation Request Workflow
<br />

#### Roles
There are two primary roles involved in a Bulk data transaction:
1. Bulk Data Provider
    - FHIR Authorization Server - server that issues access tokens in response to valid token requests from a client
    - NDH Resource Server - server that accepts kick-off requests and provides job status and completion manifest.
    - Output File Server - server that returns Directory Data in response to urls in the completion manifest. This may be built into NDH Resource Server or
    may be independently hosted.
2. Bulk Data Client (Distributed Directory) - system that requests and receives access tokens and NDH Data files

<figure>
    {% include bulk-flow.svg %}
    <figcaption>Sequence diagram of Bulk Data </figcaption>
</figure>


{% include markdown-link-references.md %}

---

// File: input/pagecontent/ndapi-ig.md

### National Directory API

#### Introduction

The primary focus of the National Directory API actor implementation guide is a RESTful API for providing data from the National Directory of Healthcare Providers & Services (NDH). The National Directory API only supports a one-directional flow of information from NDH into Distributed Access/Workflow Directories (i.e., HTTP GETs).

NDH National Directory API actor IG conformant implementation:

The conformance criteria for the National Directory API are specified within its [Capability Statements](ndapi-capability.html#national-directory-api-capability-statements), in accordance with IG (Implementation Guide) standards.

In profiles, the "Must Support" flag indicates if data exists for the specific property, then it must be represented as defined in the National Directory API actor IG. If the element is not available from a system, this is not required, and may be omitted.

Conceptually, this guide was written to describe the flow of information from a central source of verified healthcare directory data to local workflow environments. We envisioned NDH which functioned as a “source of truth” for a broad set of provider data available to support local business needs and use cases. A local environment could readily obtain all or a subset of the data it needed from NDH and have confidence that the information was accurate. If necessary, a local environment could supplement NDH data with additional data sourced and/or maintained locally. For example, a local environment doing provider credentialing might rely on NDH for demographic information about a provider (e.g., name, address, educational history, license information, etc.), but also ask the provider for supplementary information such as their work history, liability insurance coverage, or military experience. Likewise, we envisioned that NDH would primarily share information with other systems, rather than individual end users or the public.

The content of this guide, however, does not preclude it from being implemented for smaller “local” directories, or accessed by the public. Generally, conformance requirements throughout the guide are less tightly constrained to support a wider variety of possible implementations. We did not want to set strict requirements about the overall design, technical architecture, capabilities, etc. of a verified national directory that might prevent adoption of this standard. For example, although we would expect a verified national directory to gather and share information about healthcare provider insurance networks and health plans, implementations are not required to do so to be considered conformant.

The NDH may contain a large amount of data that will not be relevant to all use cases or local needs. Therefore, the National Directory API defines a number of search parameters to enable users to express the scope of a subset of data they care to access. For example, implementations are required to support searches for Organizations based on address, endpoint, identifier, name/alias, and relationship to a parent organization. In general, parameters for selecting resources based on a business identifier, status, type, or relationship (i.e., reference) are required for all implementations. Most parameters may be used in combination with other parameters and support more “advanced” capabilities like modifiers and chains.

The National Directory API currently supports more than one method for accessing directory data.  First, a real-time GET of a set of information. However, stakeholders may need other capabilities to support different business needs. For instance, stakeholders may need access to large amounts of data in a single session to either initially seed or refresh their local data repositories. Depending on the scope of data a stakeholder is trying to access, a real-time pull may not be the most effective method for acquiring large data sets. The FHIR specification provides support for [asynchronous interactions](https://hl7.org/fhir/uv/bulkdata/), using the Bulk Data standard, which may be necessary for implementers to facilitate processing of large amounts of data.

NDH implementation should also consider providing capabilities for users to subscribe to receive updates about the data they care about. A subscribe/publish model can help alleviate the need for stakeholders to periodically query for new data and/or changes to data they have already obtained.Restricted Content 

We envision NDH as a public or semi-public utility and make a significant portion of the information openly available. However, NDH may include sensitive data that is not publicly accessible or accessible to every verified healthcare directory stakeholder. For example, an implementer might not want to make data about military personnel, emergency responders/volunteers, or domestic violence shelters available to everyone with access to the verified national directory, or to users in a local environment who have access to data obtained from NDH.

We expect that NDH operational policies and legal agreements will clearly delineate which data stakeholders can access, and if necessary, require stakeholders to protect the privacy/confidentiality of sensitive information in downstream local environments. As such, we have included a Restriction profile based on the Consent resource to convey any restrictions associated with a data element, collection of elements, or resource obtained from a verified national directory.

#### National Directory API

![NationalDirectoryApiDiagram](NDH Exchange.png)

### National Directory API Capabilities
The NDH supports the FHIR Search mechanism for Distributed Workflow Directory to query data from the NDH. The supported search paramters are defined in the National Directory API capability statement. 
***[National Directory API CapabilityStatement]***

### National Directory API Subscription
#### When to use Subscription
FHIR subscription is a powerful feature that allows a system to receive real-time notifications when data is created, updated, or deleted on a FHIR server. Therefore, distributed Access/Workflow Directories can receive notifications when data changes on the National Directory API server through a subscription. This is an active notification system, where the National Directory API server proactively sends notifications to the directories as data changes occur.

#### Subscriptions
In the FHIR (DSTU2 - R4) system, subscriptions are query-based. Clients can dynamically define subscriptions by posting a Subscription resource with a criteria string. The FHIR server then executes a query against those criteria and tracks the query result-set for each subscription request. Whenever a change is made to the server's data, the server must re-run the query and send notifications to clients if their result-set changes, such as when a new entry is added or removed.

Query-based subscriptions may encounter challenges in handling the following scenarios:
1. Implementing server-side logic at a scale can be difficult, especially for large datasets and many clients.
2. The discovery process can be opaque, as servers with query restrictions have no means of advertising them.
3. There may be a lack of granularity in events, making it unclear why something was removed from a dataset.
4. Notifications cannot be bundled, so servers must send a separate notification for each discrete event.
5. Clients are required to re-query after receiving a notification, which can be inefficient.

To address these challenges, Subscription Topics were introduced in FHIR R5 and later backported to FHIR R4. 

Subscription Topics provide documentation for the concepts they represent and are based on resource interactions. This includes the resource type (e.g., Practitioner, Organization) and the specific interaction of interest (e.g., create, update, delete).

To use topic-based subscription support in FHIR R4, NDH will use FHIR artifacts (e.g., Operations, Extensions, Profiles, etc.) defined in the [Subscriptions R5 Backport IG](http://hl7.org/fhir/uv/subscriptions-backport/STU1.1/index.html). 

#### Profiles used for the National Directory API Topic-Based Subscription
1. [R4/B Topic-Based Subscription](http://hl7.org/fhir/uv/subscriptions-backport/STU1.1/StructureDefinition-backport-subscription.html)
2. [R4 Topic-Based Subscription Notification Bundle](http://hl7.org/fhir/uv/subscriptions-backport/STU1.1/StructureDefinition-backport-subscription-notification-r4.html)
3. [R4 Backported R5 Subscription Status](http://hl7.org/fhir/uv/subscriptions-backport/STU1.1/StructureDefinition-backport-subscription-status-r4.html)

#### Operations used for the National Directory API Topic-Based Subscription
1. [Subscription Events Operation](https://hl7.org/fhir/uv/subscriptions-backport/STU1.1/OperationDefinition-backport-subscription-events.html)
2. [Subscription Get WS Binding Token Operation](https://hl7.org/fhir/uv/subscriptions-backport/STU1.1/OperationDefinition-backport-subscription-get-ws-binding-token.html)
3. [Subscription Status Operation](https://hl7.org/fhir/uv/subscriptions-backport/STU1.1/StructureDefinition-backport-subscription-status-r4.html)


#### The National Directory API Subscription Topic

<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

Subscription Topic | CapabilityStatement SubscriptionTopic Canonical value | Related Resource will be included in the Notification
Endpoint created or deleted | http://ndh.org/topic/endpoint-create-or-delete | Endpoint, CareTeam, HealthcareService, InsurancePlan, Location, Network, Organization, OrganizationAffiliation, Practitioner, PracticionerRole 
HealthcareService created or deleted | http://ndh.org/topic/healthcareservice-create-or-delete | HealthcareService, CareTeam, Location, PractionerRole, Organization, OrganizationAffiliation
InsurancePlan created or deleted | http://ndh.org/topic/insuranceplan-create-or-delete | InsurancePlan, Network, Organization, Location
Location created or deleted | http://ndh.org/topic/location-create-or-delete | Location, CareTeam, HealthcareService, InsurancePlan, Organization, OrganizationAffiliation
Network created or deleted | http://ndh.org/topic/network-create-or-delete | Network, InsurancePlan, Organization, OrganizationAffiliation, PractitionerRole 
Practitioner created or deleted | http://ndh.org/topic/practitioner-create-or-delete | Practitioner, PractitionerRole, 
Organization created or deleted | http://ndh.org/topic/organization-create-or-delete | Organization, CareTeam, Endpoint HealthcareService, InsurancePlan Location, Network OrganizationAffiliation, PractitionerRole
Practitioner's qualification created, modified, or deleted | http://ndh.org/topic/practitioner-qualification-create-modified-or-delete |Practitioner, PractitionerRole, 
Organization's qualification created, modified, or deleted | http://ndh.org/topic/organization-qualification-create-modified-or-delete | Organization, CareTeam, Endpoint HealthcareService, InsurancePlan Location, Network, PractitionerRole

##### Filter the content of topic subscription by subscriber
Distributed workflow directories could set its own criteria when using the subscription, such as PractitionerRole?practitioner=Practitioner/123

##### Channel of the Notification for the Subscription
1. The National Directory API **SHALL** support rest-hook
2. The National Directory API **MAY** support websocket

#### Operation of the topic subscription
1. The National Directory API **SHALL** support $status operation on the subscription resource. 
2. The National Directory API **MAY** support $events operation for return notification that have been previously triggered by a topic subscription. 
3. The National Directory API **MAY** supoort $get-ws-binding-token for get a token for a websocket client to use in order to bind to one or more subscriptions.

##### Shape of the notification 
All notifications are enclosed in a `Bundle` with the type of `history`. The first `entry` of the `bundle` **SHALL** be the `SubscriptionStatus` information, encoded as a `Parameter` resource using the `Backport SubscriptionStatus Profile` in FHIR R4.
The National Directory API **SHALL** support
- id-only notification bundle
- full-resource notification bundle
- error notification bundle - in the event of of processing error on the NDH server
- handshake notification bundle
- heartbeat notification bundle

### Bulk Data Export of the National Directory
Providers, organizations, and local directories often require efficient methods to access large volumes of information about groups of providers, organizations, healthcare services, and insurance plans. For instance, a state's local directory might periodically need to retrieve and update provider and healthcare service data from the National Directory. The FHIR Bulk Data export operation offers a standardized solution for these needs. The National Directory will utilize the FHIR Bulk Data System Level export as outlined in the Bulk Data Access IG ([$export](https://build.fhir.org/ig/HL7/bulk-data/OperationDefinition-export.html)). To cater to various business use cases, the National Directory specifies conformance requirements for both the server and client. Regarding [security](https://build.fhir.org/ig/HL7/bulk-data/export.html#privacy-and-security-considerations), adherence to the guidelines stated in the FHIR Bulk Data Access IG. Additionally, the National Directory server should establish extra security guidance in accordance with regulatory policies and rules.

#### National Directory's Bulk Data Export Process
There are two primary roles involved in a Bulk data transaction:
1. Bulk Data Provider
    - FHIR Authorization Server - server that issues access tokens in response to valid token requests from a client
    - The National Directory Resource Server - server that accepts kick-off requests and provides job status and completion manifest.
    - Output File Server - server that returns Directory Data in response to urls in the completion manifest. This may be built into the National Directory Resource Server or
    may be independently hosted.
2. Bulk Data Client (Local Directory) - system that requests and receives access tokens and the National Directory Data files

<figure>
    {% include bulk-flow.svg %}
    <figcaption>Sequence diagram of Bulk Data </figcaption>
</figure>

#### Conformance Requirements for Bulk Data in the National Directory
The National Directory exclusively uses the FHIR Bulk Data System Level export, and as a result, has its own specific Bulk data conformance requirements. The Bulk Data Access IG CapabilityStatement is not suitable for the NDH Bulk data use cases.

<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

**Parameter** | **Server Conformance** | **Client Conformance** | **Type** | **Description** |
_outputFormat | **SHALL**             | **SHOULD**              | String   | By default, the server uses the format application/fhir+ndjson. It is required to support Newline Delimited JSON, and it may also support other additional output formats. The server must accept the complete content type of application/fhir+ndjson, as well as the abbreviated forms application/ndjson and ndjson. If the client submits requests in other output formats, the NDH will respond with a 200 OK status. However, the response will include a FHIR OperationOutcome resource in Json format, indicating that the NDH supports only the ndjson format and requesting the client to resubmit using this format.|
_type         | **SHALL**             | **SHOULD**             | string of comma-delimited FHIR resource types | The response SHALL be filtered to only include resources of the specified resource types(s). If the client explicitly asks for export of resources that the Bulk Data server doesn't support, the server SHOULD return details via a FHIR OperationOutcome resource in an error response to the request. |
_typeFilter   | **SHALL** | **SHOULD** | string of comma delimited FHIR REST queries | The NDH server with _type parameter and requested _typeFilter search queries SHALL filter the data in the response to only include resources that meet the specified criteria. if the client explicitly asks for export of resources that the NDH server doesn't support, the server SHOULD return details via a FHIR OperationOutcome resource so the client can re-submit a request that omits those queries. |
_since | **SHALL** | **SHOULD** | FHIR instant | Only resources that were last updated on or after the given time will be included |

#### Response - OK
If the value of _outputFormat is not application/fhir+ndjson, or ndjson
- HTTP status Code of `200` OK
- FHIR `OperationOutcome` resource in the body in Json format indicate the NDH only suport ndjson format, ask the client to resubmit

#### Response - Success
- HTTP Status Code of `202 Accepted`
- `Content-Location` header with the absolute URL of an endpoint for subsequent status requests (polling location)
- Optionally, a FHIR `OperationOutcome` resource in the body in JSON format

#### Response - Error (e.g., unsupported search parameter)
- HTTP Status Code of `4XX` or `5XX`
- The body **SHALL** be a FHIR `OperationOutcome` resource in JSON format

#### Updating the Local Directory Using Bulk Data
When retrieving National Directory data through bulk $export operation for local directories, the data is stored in ndjson files containing FHIR resources. Each line in the ndjson file represents a single FHIR resource, whose unique identifier (resource.id) is controlled by the server. To identify a specific resource across different servers, resource.identifier is used instead. In the case of the National Directory, each resource stored in it has a unique resource.id, which is also used to populate the resource.identifier as identifier.system = national directory system and identifier.value = resource.id.

After performing bulk $export, it's important not to directly enter the retrieved data into the local directory, as the local server may have a different set of resource.ids for the same resources. To avoid duplication, a mapping should be performed based on the resource.identifier. This involves modifying the resource.id in the ndjson file with the local resource.id, and then importing the modified file using $import operation. If $import operation is not supported by your server, you can convert the modified ndjson file, with the resources having your local resource.id, to a FHIR transition Bundle and load it into your local server using a PUT request.

If the local directory already has the National Directory content and wishes to update it with the latest changes from the National Directory, the bulk $export operation can be used. However, there are a few things to consider:

1. Before exporting, ensure that the server's configuration supports versioning of resources. This will allow for tracking of changes made to resources over time.
2. To filter only the resources that have been updated since the last export, use the _since parameter. Be sure to check the server documentation to understand the implications if the _since parameter is not provided. Some servers will return longer period data than you wish to have, while others may only return last 24 hours data. For example, HAPI Server will only export the past 24 hours resources which were created or updated, if the _since parameter is absent.
3. Be aware of any dependencies between resources. For example, if a resource is deleted or modified, it may affect other resources that reference it.
4. After the export is completed, perform a mapping of the resource identifiers as described earlier to avoid duplicating resources in the local directory.

By following these steps, the local directory can efficiently update its content with the latest changes from the National Directory while maintaining data integrity and avoiding duplication.


#### The scope of data selection
For the directory bulk data extraction, to request an entire copy of all content in the directory, the scope selection can be defined at the top level specifying that it would like to retrieve all content for the specified resource types from the base of the FHIR server.

```
POST [base]/$export?_type=Organization,Location,Practitioner,PractitionerRole,HealthcareService,VerificationResult, ...
```

A local directory may curate such an extract on a nightly process, and simply return results without needing to scan the live system.  In the result, the value returned in the `transactionTime` in the result should contain the timestamp at which the extract was generated (including timezone information) and should be used in a subsequent call to retrieve changes since this point in time.

Once a system has a complete set of data, it is usually more efficient to ask for changes from a specific point in time. In which case the request should use the value above (`transactionTime`) to update the local directory.

```
POST [base]/$export?_type=Organization,Location,Practitioner, ... &_since=[transactionTime]&_outputFormat=application/fhir+ndjson
```

This behaves the same as the initial request, with the exception of the content.

It is expected that this request is more likely to return current information, rather than a pre-generated snapshot, as the transactionTime could be anything.

> **Note:** The current bulk data handling specification does not handle deleted items. The recommendation is that periodically a complete download should be performed to check for "gaps" to reconcile the deletions (which could be due to security changes). However, content should not usually be "deleted"; it should be marked as inactive, or end dated.
>
> **Proposal:** Include a deletions bundle(s) for each resource type to report the deletions (when using the _since parameter). As demonstrated in the status tracking output section below, these bundles would be included in the process output as a new property "deletions". This bundle would have a type of "collection", and each entry would be indicated as a deleted item in the history.

```xml
<entry>
   <!-- no resource included for a delete -->
   <request>
     <method value="DELETE"/>
     <url value="PractitionerRole/[id]"/>
   </request>
   <!-- response carries the instant the server processed the delete -->
   <response>
     <lastModified value="2014-08-20T11:05:34.174Z"/>
   </response>
</entry>
```

> The total in the bundle will be the count of deletions in the file, the total in the operation result will indicate the number of deletion bundles in the ndjson (same as the other types).
>
> If the caller doesn't want to use the deletions, they can ignore the files in the output, and not download those specific files.

#### Narrowing the Scope of the Exported Resource

```
POST [base]/$export?_type=Organization
&_since=[transactionTime]
&_typeFilter=Organization?identifier=https://vs.directtrust.org/identifier/organization&_outputFormat=application/fhir+ndjson
```
To export specific resources, you can utilize the _typeFilter option. In this instance, you can limit the exported data to organizations with the identifier system set as https://vs.directtrust.org/identifier/organization.

```
POST [base]/$export?_type=Organization,Practitioner
&_since=[transactionTime]
&_typeFilter=Organization?address-state=CA, Practitioner?address-state=CA
&_outputFormat=application/fhir+ndjson

```
To export Practitioners and Organizations for only a given state.

#### Arbitrary Subsets of Data

The current bulk data export operations use the Group resource to define the set of data related to a Patient. At present there is no definition for this to be done in the directory space, unless it is at the resource level. This is possible with search and subscriptions (which leverage search) by using search parameters on the resource types and setting the parameters of interest.

When defining a subset of data, consideration should be given to what happens when data is changed to the extent that it is no longer within the context of the conditions.

One possible method would be to use a bundle of searches where each type has its own search parameters. Another way is to use a <a href="http://hl7.org/fhir/r4/graphdefinition.html" class="external-link" rel="nofollow">GraphDefinition</a> resource.

This functionality should be the subject of a connectathon to determine practical solutions.

One possibility could be to leverage the List functionality described above to maintain a state of what <em>was</em> included in previous content. However, this incurs additional overhead on the part of the server and for many systems, especially those at scale like a national system, this is likely not practical.

#### Format of the Dulk Data Extract

The bulk extract format is always an nd-json file (new-line delimited json). Each file can only contain 1 resource type in it, but can be spread across multiple files, with either a size limit or count limit imposed by the extracting system, not the requestor.

The list of these files will be returned in the Complete status output, as described in the standard Bulk Data documentation.

#### Starting the Extract

There are 2 options for starting the extract. The first option is a single operation specifying all the content, and the other option is for a specific type only. These were both covered above in the "selecting the scope" section.

Here one will only document the use of global export, as an initial request.

The initial request:

```
POST [base]/$export?_type=Organization,Location,Practitioner,PractitionerRole,HealthcareService
```
With headers:
```
Accept: application/fhir+json
Authentication: Bearer [bearer token]
Prefer: respond-async
```

This will return either:
* HTTP status code of <code>4XX</code> or <code>5XX</code> with an <code>OperationOutcome</code> resource body if the request fails, or a
* HTTP status code of <code>202 Accepted</code> when successful. Which will include a <code>Content-Location</code> header with an absolute URI for subsequent status requests and optionally, an <code>OperationOutcome</code> in the resource body

Example Content-Location: <a class="external-link" style="text-decoration: underline;text-align: left;" rel="nofollow" href="http://example.org/status-tracking/request-123">http://example.org/status-tracking/request-123</a> (note that this is not necessarily a FHIR endpoint, and is not a true FHIR resource)

#### Tracking the Status of the Extract

After a bulk data request has been started, the client MAY poll the URI provided in the <code>Content-Location</code> header.

```
GET http://example.org/status-tracking/request-123
```

This will return one of the following codes:

* HTTP status code of <code>202 Accepted</code> when still in progress (and no body has been returned)

* HTTP status code of <code>4XX</code> or <code>5XX</code> when a fatal error occurs, with an <code>OperationOutcome</code> in json format for the body detailing of the error
_(Note this is a fatal error in processing, not some error encountered while processing files - a complete extract can contain errors)_
* HTTP status code of <code>200 OK</code> when the processing is complete, and the result is a json object as noted in the specification (an example included below)

Refer to the build data specification for details of the completion event:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[https://github.com/smart-on-fhir/fhir-bulk-data-docs/blob/master/export.md#response---complete-status](https://github.com/smart-on-fhir/fhir-bulk-data-docs/blob/master/export.md#response---complete-status)

```javascript
{
    "transactionTime": "[instant]",
    "request": "[base]/$export?_type=Organization,Location,Practitioner,PractitionerRole,HealthcareService",
    "requiresAccessToken": true,
    "output": [
        {
            "type": "Practitioner",
            "url": "http://serverpath2/practitioner_file_1.ndjson",
            "count": 10000
        },
        {
            "type": "Practitioner",
            "url": "http://serverpath2/practitioner_file_2.ndjson",
            "count": 3017
        },
        {
            "type": "Location",
            "url": "http://serverpath2/location_file_1.ndjson",
            "count": 4182
        }
    ],
    // Note that this deletions property is a proposal, not part of the bulk data spec.
    "deletions": [
        {
            "type": "PractitionerRole",
            "url": "http://serverpath2/practitionerrole_deletions_1.ndjson", // the bundle will include the total number of deletions in the file
            "count": 23 // this is the number of bundles in the file, not the number of resources deleted
        }
    ],
    "error": [
        {
            "type": "OperationOutcome",
            "url": "http://serverpath2/err_file_1.ndjson",
            "count": 439
        }
    ]
}
```

#### Retrieving the Complete Extract

Once the tracking of the extract returns a <code>200 OK</code> completed status, the body of the result will include the list of prepared files that can be downloaded.

Then each of these URLs can be downloaded by a simple get, ensuring to pass the Bearer token if the result indicates <code>requiresAccessToken = true</code>

While downloading, it is also recommended to include the header <code>Accept-Encoding: gzip</code> to compress the content as it comes down.

```
GET http://serverpath2/location_file_1.ndjson
```

(Note: our implementation will probably always gzip encode the content - as we are likely to store the processing files gzip encoded to save space in the storage system)

Once all the needed files are downloaded, one should tell the server to clean_up, as detailed in the next section.

#### Finishing the Extract

This is the simplest step in the process. To finish the extract, one will call <code>DELETE</code> on the status tracking URL.

```
DELETE http://example.org/status-tracking/request-123
```

Calling <code>DELETE</code> tells the server that we are all finished with the data, and it can be deleted/cleaned up. The server may also include some time based limits where it may only keep the data for a set period of time before it automatically cleans it up.

### National Directory Scheduled Bulk Data Export Operation
If a local directory needs to retrieve information from the National Directory on a scheduled basis, there are two approaches available:
1. A client-side solution: A job scheduler script is written on the client side to execute the Bulk Data Export $export operation. This allows the client to control the export process and retrieve the data as needed.
2. A server-side solution: It is to utilize the National Directory Scheduled Bulk Data Export $ndhschExport operation, which is a service-side solution available to all registered clients. Once the client has registered with the National Directory, they only need to apply the $ndhschExport operation once. From then on, the system automatically exports the data to the specified file storage location based on the defined schedule, making it convenient for the client to retrieve the data.

#### Definition of the Scheduled Export Operation
[OperationDefinition-NdhschExport]

#### National Directory's Scheduled Bulk Data Export Process
<figure>
    {% include ndh-export.svg %}
    <figcaption>Sequence diagram of Bulk Data </figcaption>
</figure>  

**Process Description**
**Setup Account**
1. A Local Directory sends a request to the NDH to create an account for establishing authentication and authorization.
2. The NDH evaluates the application submitted by the Local Directory for the creation of a new account and decides whether to grant or reject the account creation. Upon approving the request, the NDH assigns a distinct account identifier to the new account. Additionally, a specific data content location is allocated for the purpose of future data retrieval. This designated location is structured to accommodate various scheduled data exports and is equipped with adequate storage capacity to handle the volume of data expected to be extracted.
3. The NDH communicates the outcome of the request back to the Local Directory.

**Request $ndhschExport from Portal or Application**
1. Possessing the assigned account ID, the Local directory is then able to access the National Directory. This can be achieved through various secure login methods such as UDAP, SMART, or other authentication processes established by the implementer of the National Directory.
2. Begin a process like $ndhschExport by submitting a request that includes all necessary parameters. To conduct multiple scheduled exports, each request must have a distinct schedule ID. For example, this might entail setting up a weekly extraction schedule for specific resources from all organizations and practitioners in the state of Maryland, and a monthly schedule for all InsurancePlan data in the state of Maryland.
3. The NDH evaluates the request and generates a corresponding response.
4. The $ndhschExport adheres to the asynchronous request pattern as outlined in [RFC 7240](https://datatracker.ietf.org/doc/html/rfc7240#section-4.1), catering to this use case due to the significant server-side processing required. Upon approval of the $ndhschExport by the NDH, a 202 (Accepted) response will be issued, signifying that the NDH will proceed with the requested $ndhschExport operation. If any errors are present in the request, the NDH will reject it, responding with either a 4XX or 5XX status code and including a FHIR OperationOutcome in the response body.

**Actions in the National Directory server could be once or repeatedly**
1. The National Directory server processes queries from the $ndhschExport requests, generating data based on specified search criteria. This data is then stored in a designated repository for each account according to a pre-set schedule. Multiple scheduled exports can be set up by each account, each with a unique scheduled ID provided in the Local Directory's $ndhschExport request. The National Directory is advised to include this information in the file names of each extraction to differentiate between requests. These files are produced based on the scheduled start times and frequencies. To distinguish files generated at different times, each file will contain a timestamp reflecting the start time and frequency, indicating the starting date and time the data was extracted. Since data extraction takes time, a corresponding status file is created for each extraction. This file follows the same naming convention as the extracted file but includes a status indicator. The status file contains information such as 'completed ready for download', 'pending', or 'error contact the administrator'.

2. Each time the $ndhschExport operation is executed within the National Directory, it results in the generation of a new set of files in the repository. If the Local Directory's request includes the input parameter 'keep file flag' set to false, this new data extraction will lead to the deletion of the old set of files that were generated previously. Conversely, if the 'keep file flag' is set to true, the previously extracted files will be retained. Regarding ndjson format data, a file containing a list of ndjson links is provided. This allows users to access each file through the HTTP POST method using the provided links. The filename for this list will follow the established naming convention but will specifically indicate that it contains links for ndjson files.

For a weekly extraction schedule targeting specific resources from all organizations and practitioners in the state of Maryland, and a monthly schedule for all InsurancePlan data in Maryland.
```
POST [base]/$ndhschExport
?_type=Organization,Practitioner
&_typeFilter=Organization?address-state=MD,_include=*,revinclude=*
&_outputFormat=application/fhir_ndjson
&_startdate=2023-12-01
&_frequency=1|mo
&_account=example-1
&_scheduledId=1234
&_action=create
```

```
POST [base]/$ndhschExport
?_type=InsurancePlan
&_typeFilter=InsurancePlan?address-state=MD,_include=*,revinclude=*
&_outputFormat=application/fhir_ndjson
&_startdate=2023-12-01
&_frequency=1|wk
&_account=example-1
&_schedlued_id=5678
&_action=create
```
The generated files follow this format:
{scheduled id}-{resource type}-{date and time of start extraction}.{file type}  
**Based on the examples provided above, the extracted files will be:**
- 1234-organization-2024-01-01-23-59-59.ndjson
- 1234-practitioner-2024-01-01-23-59-59.ndjson
- 1234-status-2024-01-01-23-59-59.txt
- 1234-ndjson-links-2024-01-01-23-59-59.txt

- 1234-organization-2024-02-01-23-59-59.ndjson
- 1234-practitioner-2024-02-01-23-59-59.ndjson
- 1234-status-2024-02-01-23-59-59.txt
- 1234-ndjson-links-2024-02-01-23-59-59.txt

- 5678-insuranceplan-2024-01-01-23-59-59.ndjson
- 5678-status-2024-01-01-23-59-59.txt
- 5678-ndjson-links-2024-01-01-23-59-59.txt
- 5678-insuranceplan-2024-01-07-23-59-59.ndjson
- 5678-status-2024-01-07-23-59-59.txt
- 5678-ndjson-links-2024-01-07-23-59-59.txt


**Actions taken by the Local Directory could be once or repeatedly via using FHIR REST API**
1. With the assigned account ID in hand, the Local directory gains access to the National Directory. This access is secured through various authentication methods such as UDAP, SMART, or other protocols specified by the National Directory's implementer.
2. To retrieve the extracted data, begin by reading the status file. If the status indicates 'completed, ready for download,' proceed to the next step.
3. For FHIR endpoints containing data in ndjson format, initially obtain the ndjson links from the ndjson-links file. Then, access each file by employing the HTTP GET method with the URLs provided in the list.

**Actions taken by the Local Directory could be once or repeatedly via other method (e.g., SFTP)**
1. With the assigned account ID, the Local directory gains the ability to access the National Directory. Access is facilitated through a variety of secure login methods like UDAP, SMART, or other authentication processes that are established by the National Directory's implementer.
2. To retrieve files, use the SFTP protocol. Start by reading the status file; if the status indicates 'completed and ready for retrieval', proceed to transfer the files using SFTP.

**Cancel $ndhschExport operation**
1. Equipped with the assigned account ID, the Local directory is enabled to access the National Directory. This access is secured through various login methods such as UDAP, SMART, or other authentication protocols set up by the National Directory's implementer.
2. The Local Directory has the option to cancel the $ndhschExport operation at any time. This can be done by executing the $ndhschExport operation with the _cancel parameter set to true, along with providing the account and the scheduled ID for that account.
3. Upon receiving the request, the National Directory evaluates it.
4. The National Directory then communicates its response to the Local Directory, which could be a 202 Accepted status or an error status in the range of 4XX or 5XX.
5. If the operation is to proceed, the National Directory executes the $ndhschExport operation, resulting in the deletion of the previously scheduled operation. This deletion impacts only future and upcoming data retrievals.

#### Conformance Requirements for the National Directory's Scheduled Bulk Data Export
<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

**Parameter** | **Server Conformance** | **Client Conformance** | **Type** | **Description** |
_account      | **SHALL**              | **SHALL**              | String   | This parameter is used to specify the user account. Will be used to cancel the request in the future |
_scheduledId | **SHALL**              | **SHALL**              | id       | This parameter is used to specify the request identifier. Will be used to cancel the request in the future. |
_type         | **SHALL**              | **SHOULD**             | string    | The response SHALL be filtered to only include resources of the specified resource types(s). If the client explicitly asks for export of resources that the Natioanl Directory server doesn't support, the server SHOULD return details via a FHIR OperationOutcome resource in an error response to the request. A string of comma-delimited following resource types: CareTeam,Endpoint, HealthcareService, InsurancePlan, Location, Network, Organization OrganizationAffiliation, Practitioner, PractitionerRole, and Verification. The response SHALL be filtered to only include resources of the specified resource types(s). If this parameter is omitted, the National Directory server SHALL return all supported resources within the scope of the client authorization |
_typeFilter   | **SHALL**              | **SHOULD**             | string    | When provided, a server with support for the parameter and requested search queries SHALL filter the data in the response to only include resources that meet the specified criteria |
_outputFormat | **SHALL**              | **SHOULD**             | String   | The format for the requested ndhschexport data file to be generated default to application/fhir+ndjson. The NDH server MAY support additional formats, such as application/csv |
_startdate    | **SHALL**              | **SHOULD**             | datetime | For export requests, clients **SHALL** supply this parameter. For canceling the export, this parameter may be omitted.
_frequency    | **SHALL**              | **SHOULD**             | Duration   | For export requests, clients **SHALL** supply this parameter. For canceling the export, this parameter may be omitted.
_cancle       | **SHALL**              | **SHOULD**             | boolean  | For export request, this parameter may be omitted. For cancelling the export, this parameter **SHALL** be set as true |
_keepFile     | **SHALL**              | **SHOULD**             | boolean  | If this parameter is absent, the server will delete previously extracted files and only provide the current extraction. |

#### Response - ACCEPTED
- HTTP status Code of 202 ACCEPTED

#### Response - Error (e.g., unsupported search parameter)
- HTTP Status Code of 4XX or 5XX
- The body SHALL be a FHIR OperationOutcome resource in JSON format


### Restricted Content
Our vision for NDH is that it will function as a public or semi-public utility, with a substantial amount of its information being made openly available. However, certain data included in NDH may be sensitive, and not accessible to all NDH stakeholders or the public. For instance, an implementer may choose to restrict data related to military personnel, emergency responders/volunteers, or domestic violence shelters from being accessible to anyone who has access to NDH, or to users in a local environment who have obtained data from NDH.

It is our expectation that NDH operational policies and legal agreements will provide a clear understanding of which data stakeholders can access. If necessary, these policies will require stakeholders to maintain the privacy and confidentiality of any sensitive information within downstream local environments. To facilitate this, we have incorporated a Restriction profile based on the Consent resource. This profile is designed to convey any restrictions associated with a data element, collection of elements, or resource that has been obtained from a verified healthcare directory.




{% include markdown-link-references.md %}

---

// File: input/pagecontent/ndapi-use-cases.md

### Support discovery of electronic service information to enable the electronic exchange of information. 
Electronic Service Information can be discovered by using any combination of data elements in a NDH entry using a fully qualified query to discover zero or more resulting records.  These data elements in a query can include demographic data, geographic data, individual provider data, specialty data, National Provider Identity (NPI), organization, Tax Identification Number (TIN), etc.  The results may include no records, one record, or multiple records

#### Use Case Actors
This diagram illustrates the interactions of various actors with the National Directory for Healthcare (NDH).

<figure>
    {% include Ndh-usecase-actor.svg %}
    <figcaption></figcaption>
</figure>
<br />

#### Information Flow
This diagram shows the information flow for this Use Case including the major senders and receivers (Actors) involved and the type(s) of information shared.

<figure>
    {% include Query-Information-flow.svg %}
    <figcaption></figcaption>
</figure>
<br />

An Actor seeking Electronic Service Information sends a fully qualified query to the NDH. The query may include any combination of data elements, and may also include relative constructs such as “within 20 miles.” Queries may include partial values and may include inexact matches. The NDH processes the query and returns zero or more results to the Actor that sent the query. The results returned can include all or part of the record. The NDH should support queries including in the table below, but not necessarily limited to:

<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| Query | Query Name | Query Description | Examples |
| 1     | Find Individual | Request a list of individuals by specifying one or more individual attributes | Find a practitioner by Name <br /> ```GET [base]/Practitioner?name=Hans Solo``` |
| 2     | Find Unique Individual | Request a specific individual by specifying an individual unique reference ID | Find a practitioner by NPI <br />```GET [base]/Practitioner?identifier=http://hl7.org/fhir/sid/use-npi|1003357849```|
| 3     | Find Organization | Request a list of organizations and relationships to other organizations by specifying one or more organization attributes | ```GET [base]/Organization?identifier=http://hl7.org/fhir/sid/use-npi|1518575422&_revinclude=OrganizationAffiliation:participating-organization```|
| 4     | Find Unique Organization | Request a specific organization and relationships to other organizations by specifying an organization unique reference ID | ```GET [base]/OrganizationAffiliation?primary-organization.identifier=http://hl7.org/fhir/sid/use-npi|1518575422&_include=OrganizationAffiliation:primary-organization&include=OrganizationAffiliation:participating-organization```|
| 5     | Find Organizations for Unique Individual | Request a specific individual and related organizations by specifying an individual unique reference ID and one or more attributes of organizations; organizations and relationships to the specified individual are returned when the organization matches the organization attributes and has a relationship to the individual specified;  attributes on the relationship between the individual and organization can also be specified in this query and further constrain which organizations and relationships are returned | 1. Since a practitioner could provide the service to multiple organizations. Those organizations are not limited to one hospital system. <br /> ```GET [base]/Practitioner/?identifier=http://hl7.org/fhir/sid/us-npi|1003357849&_revinclude=PractitionerRole:practitioner``` <br /><br /> 2. A practitioner in the city of Boston related to multiple organization <br />  ```GET [base]/PractionerRole?practitioner.identifier=http://hl7.org/fhir/sid/use-npi|1003357849&organization.address-city=Boston&_include=PractitionerRole:practitioner&include=PractitionerRole:organization``` |
| 6     | Find Individuals for Unique Organization | Request a specific organization and related individuals by specifying an organization unique reference ID and one or more attributes of individuals; individuals and relationships to the specified organization are returned when the individual matches the individual attributes and has a relationship to the organization specified; attributes on the relationship between the individual and organization can also be specified in this query and further constrain which individuals and relationships are returned | ```GET [base]/PractitionerRole?organization.identifiery=http://hl7.org/fhir/sid/use-npi|1518575422&_include=PractitionerRole:practitioner```|
| 7     | Find Individuals and Organizations | Request a list of individuals, organizations and relationships between (individuals/organization or organization/organization) based on attributes of individuals, organizations and individual/organization relationships;  response includes all objects (whether individual, organization or relationship) where the individuals match all of the individual attributes specified, the organizations match all of the organization attributes and where a relationship exists between each individual and one or more organizations returned. In the event the query includes one or more attributes regarding the relationship, then each relationship returned must match all the attributes specified; for each organization returned, all its relationships, as parent or child, with other organizations are returned | 1. Practitioners and associated Organizations <br />```GET [base]/PractitionerRole?practitioner.address-state=FL&_include=PractionerRole:practitioner&_include=PractitionerRole:organization``` <br /><br /> 2. Organizations with Organizations <br /> ```GET [base]/OrganizationAffiliation?organization.address-state=FL&_include=OrganizationAffiliation:primary-organization&_include=OrganizationAffiliation:participant-organization``` <br /><br />3. Find all providers have relationship in the state of CT <br /> ```GET [base]/PractitionerRole/?location.address-state=CT&include=*_revinclude=*``` <br /><br /> 4. Query all Endocrinology, Diabetes & Metabolism Physician in the city of Bridgeport, CT accept new patient <br />```GET [base]/PractitionerRole/?specialty=http://nucc.org/provider-taxonomy|207RE0101X&new-patient=newpt&location.address-city=Bridgeport&location.address-state=CT&_include=*&_revinclude=* ``` |



### The NDH Consumer application help patients seeking healthcare providers

#### Use case: A patient seeks orthopedic services by using the NDH consumer application online
This scenario involves an individual looking for an orthopedic surgeon associated with the Hartford Orthopedics Group, which provides orthopedic care as part of the Acme of CT network HMO insurance plan at Hartford General Hospital. Hartford Orthopedics has two distinct locations, each with specific criteria for accepting new patients. The individual aims to select the facility that best matches the individual specific needs and availability. Additionally, the individual is interested in finding out the service hours of the location he choose.

<figure>
    {% include Condition-flow-Patient.svg %}
    <figcaption></figcaption>
</figure>

The FHIR Resources are used to support this use case:
- PractitionerRole
- InsurancePlan
- Organization
- Location
- Network

Begin the search by identifying the practitionerRole for both the practitioner and the organization; next, locate the network associated with this role that corresponds with the insurance plan's network. Then, identify the locations linked to this practitionerRole, and determine if these locations are accepting new patients and what their operating hours are.

<figure>
    {% include Condition-flow-resources.svg %}
    <figcaption></figcaption>
</figure>

### Utilize the NDH to locate endpoints for payer-to-payer API interactions
For the successful implementation of a Payer-to-Payer API, it is essential to establish and maintain a rigorous procedure for endpoint verification. This procedure ensures that access to and interaction with the API is restricted to authenticated healthcare organizations. The national directory provides a listing of payer information and their connections.

In the National Directory, a payer is identified as an organization classified under the type "payer." A unique identifier is assigned to a payer when it attests to the National Directory. The National Directory confirms the accuracy of the payer's details directly from the primary source. To verify the accuracy of the data, the payer's resource includes an element that indicates its verification status. Each payer may have multiple endpoints to support the functionality of the Payer-to-Payer API. Through a member matching process, a new payer can locate an existing payer in the National Directory and discover its associated endpoints. For endpoints that use mutual TLS (mTLS), the endpoint contains the mutual TLS public certificate which is shared to facilitate mutual TLS connections. Additionally, the payer's endpoint could be the UDAP well known endpoint if the payer organization supports UDAP.

The resources employed for these scenarios include:
- Endpoint
- Organization

<figure>
    {% include PayerToPay-endpoints.svg %}
    <figcaption></figcaption>
</figure>

To find a payer organization and associate endpoints:
```
GET [base]/Organization?type=payer&name=Florida Blue&_include:Organization:endpoint
```

### Utilize the NDH to verify the legitimacy of requesting providers for Provider API interactions
To facilitate the Provider API, it's crucial to verify the legitimacy of requesting providers once a payer has confirmed their member relationship with a provider. This verification should take place during the provider's initial attempt to connect to the payer's API endpoint. Before granting access, the payer might require certain information and impose specific conditions for connectivity to ensure that only legitimate, legally authorized organizations can access the endpoint. Establishing a systematic process for endpoint connectivity is essential for Provider Access interactions. Payers can manage this process in-house or delegate it to a chosen vendor. While each payer might maintain its own directory, essential verification data, such as the provider's identity, service locations, and EHR data access endpoints, should be obtainable from the National Directory.

Providers may affiliate with multiple organizations (such as several hospitals) and practice at various locations within the same organization. The National Directory provides accurate details of a provider's relationships, including their practice locations, affiliated organizations, network status with health plans, and endpoints for information exchange.

The resources employed for these scenarios include:
- Practitioner
- PractitionerRole
- Organization
- Network
- InsurancePlan
- Location
- Endpoint

An endpoint for a provider could be supplied by the associated organization (hospital), a specific endpoint for a given role, or an endpoint at the location where the practitioner provides the service.

<figure>
    {% include Provider-api.svg %}
    <figcaption></figcaption>
</figure>

### Utilize the NDH to find a practitioner practice with multiple organizations
A practitioner who works across various hospitals can engage in the CMS Merit-based Incentive Payment System (MIPS) for quality measures. The process involves gathering and submitting data from numerous locations. The National Directory of Health (NDH) catalogues every association the practitioner holds with the hospitals they serve. This comprehensive listing aids third parties in locating all necessary endpoints to aggregate the data efficiently.

The resources employed for these scenarios include:
- Practitioner
- PractitionerRole
- Organization

<figure>
    {% include Multiple-practitionerRoles.svg %}
    <figcaption></figcaption>
</figure>

### Utilize the NDH to find a practitioner and the practitioner's endpoint for payer
Payers may need to locate an in-network provider and the endpoint of that provider. A provider could operate across multiple locations, being an in-network provider at one location but not at another. Here is an example illustrating this situation.

A practitioner is affiliated with an organization that has two locations. One location falls within the coverage area of an insurance plan, while the other is outside of it. This insurance plan is managed by an insurance network. To accommodate this situation, two distinct practitioner roles have been established. One role is linked to the insurance network, whereas the other is not. The PractitionerRole resource connects the practitioner, organization, network, location, and endpoint. This diagram aims to help payers in identifying both the provider and the provider's endpoint accurately.

<figure>
    {% include Provider-in-out-network.svg %}
    <figcaption></figcaption>
</figure>

### Use cases for supporting IHE networks
NDH adopts the approach proposed in the IHE White Paper "Document Sharing Across Network Topologies" by utilizing the NDH OrganizationAffiliation resource to accommodate the various scenarios for federated, multi-hop, and proxied Endpoints. Specifically, we address how to represent the structure in the National Directory and ensure the successful execution of federated transactions, such as sending an XDR (Cross-Enterprise Document Reliable Interchange) push to a Document Recipient, intended for one or more recipients. 
The approach also includes implementing specific mechanisms to solve particular problems,  allowing each environment to only adopt the mechanisms it requires. For instance, 
if a directory can declare that all Organization.partOf relationships imply the flow of federated data, the OrganizationAffiliation profile may not be necessary. It is essential 
to ensure that all mechanisms work seamlessly together within the National Directory, taking into account multiple networks and perspectives.

The National Directory provides multiple perspectives based on access, without relying on selective visibility. This means that all consumers, regardless of their perspective, can view all details in the National Directory. Here is an Example from IHE  "Document Sharing Across Network Topologies" White Paper. 
- Valley Region HIE has joined a nationwide health information exchange, Big Health Exchange.
- Big Health Exchange doesn't have any central service endpoints; it operates on a peer to peer model. 
- New Hope Medical Partners has joined Big Health Exchange and now has access to the desired organizations participating in Valley Region HIE through the Big Health Exchange. New Hope Medical Partners will access these organizations via the "Valley BigHx Responding Gateway" endpoints, which are associated with OrganizationAffiliation5.
- Valley Region HIE retains its internal service endpoints for PDQ (Patient Demographics Query) and XDS (Cross-Enterprise Document Sharing) for its members. Additionally, it has introduced initiating gateway endpoints to enable its members to access the Big Health Exchange and aggregate internal data.
- Async endpoints and their response endpoints show that even though members of Valley HIE utilize central services, they need individual async endpoints to receive responses.

This example provides answers to the following questions: 
1. It id possible to locate the endpoint in the National Directory.
2. The endpoints can be accessed by members of the organization. 
3. It is appropriate to use the endpoint for the task at hand. 

[More infromation in the White Paper](https://profiles.ihe.net/ITI/papers/Topologies/index.html#518-document-access-putting-it-all-together)

<figure>
    {% include OrganizationAffiliationIHE3.svg %}
    <figcaption> </figcaption>
</figure>

### Push-based Referral Use Case
Dr. Suwati from New Hope Medical Partners referred a patient to Dr. Santos at University Health. New Hope Medical Partners is a member of Big Health Exchange, while University Health participates in Valley Region HIE, which in turn is part of Big Health Exchange. Big Health Exchange operates without any central service endpoints, functioning on a peer-to-peer model.

The sequence diagram looks like:

<figure>
    {% include ITI-Comprehensive-multi-seq.svg %}
    <figcaption> </figcaption>
</figure>


The diagram illustrating the utilization of resources and their interconnections

<figure>
    {% include ITI-Comprehensive-multi-perspective.svg %}
    <figcaption> </figcaption>
</figure>


###  Discovery a HIE endpoint via the NDH
#### Use case:  Discovery of SutterHealth TEFCA endpoint
Actors:
- Health Information System (HIS)
- NDH (National Directory of Healthcare Providers & Services)

Preconditions:
- SutterHealth is a known participating organization in the Healthcare Organization.
- SutterHealth is participating in both the TEFCA-QHIN (eHealth Exchange) and CareQuality Health Information Exchange (HIE) networks.

Main Flow:
1. The user (in this case a software agent of system) queries NDH to find the SutterHealth Organization
2. The user queries NDH for the OrganizationAffiliation resource instance with the code for 'HIEResponder' and 'TEFCA-Organization' to find an affiliation related to SutterHealth.
3. NDH returns the OrganizationAffiliation resource instance
4. The endpoint contained in the OrganizationAffiliation resource instance is the SutterHealth TEFCA Endpoint

#### FHIR resources relationship diagram for the use case above
<figure>
    {% include OrganizationAffiliationIHE4.svg %}
    <figcaption></figcaption>
</figure>

### Associate an organization with an insurance plan that operates without any network.
A State InsurancePlan Entity may contract directly with a provider organization which provides the HealthcareService. A logical Network could be used to link an InsurancePlan and an Organization which provides the HealthcareService for the InsurancePlan via an OrganizationAffiliation.
<figure>
    {% include insranceplanPayByService.svg %}
    <figcaption> </figcaption>
</figure>

### Relationship use cases
#### Relationship between networks and participants
An entity, whether it be an organization or a practitioner, might be part of multiple networks. There may be occasions when a specific network becomes unavailable or when a member decides to withdraw from an active network. To manage these potential changes - one originating from the network itself and the other from the participant's side - the recommendation is to ensure that each PractitionerRole or OrganizationAffiliation resource instance only includes a single network.

The PractitionerRole is designated for practitioners, whereas the OrganizationAffiliation is geared towards organizations. Both these resources, PractitionerRole and OrganizationAffiliation, contain a period element. This element signifies the valid timeframe of a network's relationship with its participants. In the event of a change in this relationship, a new instance would be created, encompassing the updated period.

This method allows for the efficient management of transitions, avoiding the creation of a more intricate system that would involve tracking expiration dates across multiple resources and relationships.

[See Example](ndapi-examples.html#practitioner-and-networks)


###  Subscribe to receive real-time notifications when data is created, updated, or deleted on the NDH server

#### Subscribe to changes in practitioner qualification for providers in the state of Maryland
A change in a practitioner's qualifications doesn't only impact the practitioner, but also any associated organizations and services. By subscribing to the "practitioner-qualification-change" topic, subscribers will receive notifications about these changes.

In this scenario, a subscriber wishes to be alerted whenever a practitioner in Maryland undergoes a qualification change. They also want notifications to include the resource identifier for all affected resources.

Here is the example of the subscription:
[Topicbased-Subscription-Practitioner-Qualification-Change]


### Bulk export to access large volumes information on demand
**Bulk extract of all information for organizations, individuals, and services in the state of Maryland from the NDH**
```
GET [base]/$export?_type=Organization,OrganizationAffiliation,Practitioner,PractitionerRole,HealthcareService,Location,InsurancePlan
&_since=[transactionTime]
&_typeFilter=Organization?address-state=MD,
Organization?type=ntwk&address-state=MD,
OrganizationAffiliation?location.address-state=MD,
OrganizationAffiliation?service.location.address-state=MD,
Practitioner?address-state=MD,
PractitionerRole?location.address-state=MD,
PractitionerRole?service.location.address-state=MD,
PractitionerRole?network.type=ntwk&network.address-state=MD,
HealthcareService?location.address-state=MD,
Location?address-state=MD,
InsurancePlan?plan.coverageArea.address-state=MD,
&_outputFormat=application/fhir+ndjson
```
**Note:**
Bulk Data Export _typeFilter does not support _include and _revinclude search parameters.

### National Directory Scheduled Bulk Data Export
If a local directory needs to retrieve information from the National Directory on a scheduled basis, there are two approaches available.  
The first approach is a client-side solution, where a job scheduler script is written on the client side to execute the Bulk Data $export operation. This allows the client to control the export process and retrieve the data as needed.  
Alternatively, the second approach is to utilize the National Directory Scheduled Bulk Data $ndhschExport operation, which is a service-side solution available to all registered clients. Once the client has registered with the NDH, they only need to apply the $ndhschExport operation once. From then on, the system automatically exports the data to the specified file storage location based on the defined schedule, making it convenient for the client to retrieve the data.

[NdhschExport-operation-flow-diagram]

**Schedule extracts of specific resources for all organization and individuals in MD weekly**  

[OperationDefinition-NdhschExport]
```
GET [base]/$ndhschExport
?_type=Organization,OrganizationAffiliation,Practitioner,PractitionerRole,HealthcareService,Location,InsurancePlan
&_typeFilter=Organization?address-state=MD,_include=*,revinclude=*
&_outputFormat=application/fhir_ndjson
&_startdate=2023-06-01
&_frequency=weekly
&_account=example-1
&_action=create
```


{% include markdown-link-references.md %}


---

// File: input/pagecontent/other.md

### Others
#### Intellectual Property
{% include ip-statements.xhtml %}

#### Cross Version Analysis
{% include cross-version-analysis.xhtml %}

#### Dependencies
{% include dependency-table.xhtml %}

#### Globals
{% include globals-table.xhtml %}


---

// File: input/pagecontent/verification-artifacts.md

### NDH Validation & Verification Actor Profiles

To accept the data and aid in facilitating the NDH exchange, the NDH Validation & Verification Actor utilize the NDH exchange profiles. It **SHOULD** have the NDH server-side capability to support the POST, PUT, and GET HTTP methods.   

**[NDH Exchange Profiles](ndapi-artifacts.html#national-directory-api-artifacts)**

The NDH might delegate the verification of attested data to a third party. In such cases, the third party **SHOULD** at least adhere to the NDH base profiles.

**[NDH Base Profiles](base-artifacts.html#the-national-directory-of-healthcare-providers--services-ndh-base-profiles)**

{% include markdown-link-references.md %}


---

// File: input/pagecontent/verification-capability.md

### Capability Statements
The purpose of the Verification capability statement is to enable the verification of resource items against primary sources. This includes various aspects for individual providers, such as education and training, licenses and registrations, board and other certifications, facility affiliations, and practice locations. For organizations, it involves facility information (name, address, taxonomy code, etc.), contact information (NPI, address, etc.), and licensure.

### Capability Statement Summary

<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

|Profile/Capability         | [Verification]                     
|**Endpoint**               |  SHALL             
|**Location**               |  SHOULD            
|**Organization**           |  SHALL             
|**Practitioner**           |  SHALL             
|**PractitionerRole**       |  SHOULD            


{% include markdown-link-references.md %}

---

// File: input/pagecontent/verification-examples.md

Verification Examples

---

// File: input/pagecontent/verification-flow-diagrams.md

### Validation and Verification Flow
#### Verification Flow

![VerificationWorkflow](VerificationFlow.png)  
The NDH implementer may acquire primary source reference data from an external primary source by functioning as a client, provided that the external primary source has a server enabling NDH access. The external primary source always serves as a client to the NDH to PUT or POST data into the NDH. Such a client could use the NDH base profiles and ensure that the data PUT or POST into the NDH is comprehensive and specific to its primary source, for instance, in the case of a license, it should contain information such as the nature of the license, issuance date, issuer, and so on.
 
**Descriptions**
1. Verification against the reference data from primary sources stored in the NDH
    1. Get the data from the reference data 
    2. Evaluate the verification outcome
        1. In case of success:
            1. update each verification resource instance to indicate when, what, is verified
            2. After all elements of a specific resource instance have been verified, update its verification status value to 'completed'.

        2. In case of failure:
            1. update verification resource instance to indicate when, what, and how the verification has failed
            2. update the verification status value of the resource instance to `incompleted`

2. Verification against external primary source
    1. The potential strategies for conducting verification with an external primary source
        1. Verify via external primary source API. The NDH operates as a client to an external primary source's server, utilizing the GET method to procure verification
        2. The NDH can acquire the verification from the primary source through phone, fax, or US postal service
        3. The NDH can also secure verification through Direct Secure Messaging to confirm a Direct Address provided by a DirectTrust-accredited Trust Anchor Organization.
   2. Evaluate the verification outcome
        1. In case of success:
            1. update each verification resource instance to indicate when, what, is verified
            2. After all elements of a specific resource instance have been verified, update its verification status value to 'completed'

        2. In case of failure:
            1. update verification resource instance to indicate when, what, the verification has failed
            2. update the verification status value of the resource instance to `incompleted`



---

// File: input/pagecontent/verification-ig.md

### Validation and Verification

#### Validation

The National Directory of Healthcare Providers & Service (NDH) performs a validation process to check the general structure, content, etc. of the submission (e.g., checking consistency w/data type, required elements are present, references to existing resources are correct, codes are from appropriate value set etc.). Validation is critical for ensuring that users of a healthcare directory can rely upon the data in the directory. Validation can refer to separate but related processes: validation of FHIR resources (e.g., checking consistency w/data type, required elements are present, references to existing resources are correct, codes are from appropriate value set etc.).  Validation includes (but is not limited to) testing conformance to:

- FHIR R4.0.1
- US Core 6.1.0 (where applicable)
- National Directory Exchange IG technical specifications
- Conformance includes compliance to
  - Data Types
  - Cardinality
  - Value Sets
  - Invariants
  - References
  - Extensions

#### Verification

Verification is critical for ensuring that users of a healthcare directory can rely upon the data in the directory as being accurate, not just meeting a technical specification. The specifics regarding what data should be verified against a primary source is dictated by a policy, which falls outside the purview of this Implementation Guide (IG). However, this IG does provide guidance on the methodology for performing such verification.

The NDH comprises three data categories: 
1. Unattested data sourced from other attested data pools like the CMS National Plan and Provider Enumeration System (NPPES) and the Medicare Provider Enrollment, Chain, and Ownership System (PECOS) 
2. Updated and changed data specific to individuals or organizations 
3. Attested and/or verified data

Only the third category data is accessible to distributed workflow directories, whereas the first and second category data are not. Each resource instance in the third category has an attested or verification status indicating whether it has been completely verified, incompletely verified, or does not require verification.

A complete verified resource instance means that all its elements have been factually verified through primary sources, such as a medical license that has been verified by the state medicine board. It can also mean that the mutual relationship between the parties has been attested by both the practitioner and the organization. To learn more about complete verification, you can refer to the associated verification resource instance for more information. 

An incomplete verified resource instance refers to information that has not yet been verified, is currently being verified but not yet completed, or the verification has expired and needs to be reverified. To learn more about the incomplete verification resource instance, you can refer to the associated verification resource instance for details. 

Resource instances with a "not required" status are not required to be verified, but have been attested. They also have a verification resource instance associated with them, which indicates that no further verification or mutual attestation is needed.

Incomplete verified data can be valuable for distributed workflow directories. For example, a distributed workflow directory may want to have information about a physician who has recently obtained their license to practice medicine, even if the information has not yet been fully verified. Similarly, a hospital may want to list a physician on their roster of individuals with admitting privileges, even if the physician's attestation to the hospital is still pending.

Although incomplete verification instances may have some information pending verification, they can still be valuable to a distributed workflow directory. The directory can examine the data to identify the resource instances that have not yet been fully verified, and then request the verification resource instance for further details. This approach can provide useful insights, rather than simply disregarding incomplete verification instances. For completely verified resources, the verification resource provides details of the verification process and its outcome.

Implementers will typically determine how primary source verification occurs operationally, based in part on the capabilities of the primary sources used for verification. For example, a primary source may already offer a mechanism like an API for verification content against its records. In other cases, an implementer may want to define an API that the primary source can access to push and/or pull content related to verification. Implementers may also consider less technical approaches, such as manual verification, or more stringent requirements, such as mailing a postcard to confirm an address.

Certain types of data may have different verification requirements. For example, verification of a relationship might require confirmation from each stakeholder participating in the relationship. Some data may have to be verified more frequently (e.g., license status), while other data can be verified once (e.g., education history) or not at all (e.g., a provider’s spoken language proficiency).

As with attestation, we expect National Directory implementers may use different approaches to verification. This guide provides profiles for a small number of suggested verification APIs. Implementers SHALL make any verification requirements, including but not limited to profiles and/or API documentation, available to any stakeholders involved in the verification process.

This implementation guide includes a profile for the VerificationResult resource for representing information about validation and verification. The VerificationResult resource includes a number of data elements designed to record information pertaining to the verification processes defined by implementers, as well as the outcome of verification for a specific data element/set of elements/resource. The verification profile includes data elements describing:

- The verification process, including the frequency of verification/reverification, verification status, verification date, and what it means if verification was unsuccessful
- The primary source against which data was verified, including the identity of the primary source, how a verification communicates with the primary source, and whether the primary source can push updates about the data being validated
- The source of the data being verified (i.e., the attester), including the identity of the attesting individual, organization, and/or authorized representative and when the information was attested
- The entity conducting verification, including its identity and when it verifies the data
- The outcome of verification for the targeted data

Verification may occur on the total contents of a resource, a collection of elements in a resource, or a single element. Any entity with access to a data element in a verified healthcare directory SHOULD also have access to any verification information pertaining to that element.

Verification Methods

- Verify data against a primary source (e.g., verifying an address using Post Office records) Primary source – “authoritative” source  [who is responsible for issuing the data], assertions that cannot be easily verified, set of assertions that are mutually verified (relationships) 
  - Primary source verification methods, typically based on the capabilities of the primary source:
    - a mechanism like an API for verification of content against its records,
    - define an API that the primary source can access to push and/or pull content related to verification,
    - less technical approaches, such as manual verification, or 
    - more stringent requirements, such as mailing a postcard to confirm an address.
- Verify relationships against “partner” (e.g., declaring relationship between two organizations or an organization and an individual)


#### Redundancy & Ambiguity Across Resources
Although FHIR resources define discrete business objects, related resources may have similar data elements. For example, the HealthcareService, PractitionerRole, and Location resources all include data elements describing availability. In some circumstances, values in these common data elements may not align across resources, potentially creating ambiguity. For example, in this IG, a Location resource might indicate that the location no longer accepts patients. However, a PractitionerRole resource for a provider working at the location might indicate that the provider is accepting patients (e.g., by referral only). In some cases, these inconsistencies are valid representations of the complexities of healthcare systems. In others, data might have been entered in error, outdated, or otherwise inaccurate.

The FHIR specification does not provide guidance on managing common elements across resources to reduce redundancy or ambiguity. Likewise, this implementation guide does not provide additional guidance. Implementations should consider further constraining profiles, creating invariants, or requiring data sources (e.g., attesters) to contribute data in a consistent format. Some resources include elements for describing exceptions, such as the AvailabilityExceptions field on HealthcareService, Location, and PractitionerRole. Additionally, verification processes may help discover and address inconsistencies across resources.

---

// File: input/pagecontent/verification-use-cases.md

### Validation/Verification Use Cases
#### Validation of uploaded information
Following the receipt of attested information by the NDH, the FHIR validator will be employed to verify this information against the profiles, value sets, rules outlined in the NDH Implementation Guide. The objectives of this validation process are:
- To ascertain the data's integrity. This is accomplished by examining its adherence to the structure and norms defined in the NDH Implementation Guide, thereby reducing the likelihood of inaccuracies and inconsistencies.
- To foster interoperability. By validating the resources, we ensure they can be appropriately interpreted and handled by any system adhering to the FHIR standard.

#### Verification for a physician
 Joe Smith, MD submitted his personal, educational, licensing, and address details to the NDH. In turn, the NDH carries out verification of his educational credentials, licenses, and address information, cross-checking them against primary sources. Given a particular resource, it may hold multiple Verification Result instances, as certain verifications need to be performed periodically (like licenses) while others are only done once (such as education history).
 See the details on how the verification resource displays the outcomes of the checks, which encompass the verification of state licensure, physical address, and formal education.
- [VerificationResult 1 for Joe Smith MD]
- [VerificationResult 2 for Joe Smith MD]
- [Practitioner/JoeSmith]

#### Verification for an Organization
Hartford General Hospital attests itself with the NDH by providing its provider identifier, location, and area of expertise. Subsequently, the NDH takes responsibility for verifying their qualifications, licensing, and location data, cross-referencing these with primary sources.
To understand the process better, refer to the verification result example bellow. The scope of the checks includes the validation of state licensure, physical address, and provider ID.
- [VerificationResult 1 for Hartford General Hospital]
- [VerificationResult 2 for Hartford General Hospital]
- [Organization/Hospital]

#### Mutual attestation
Joe Smith, MD attested he is an Attending Provider at Hartford General Hospital. Hartford General Hospital also attested Joe Smith, MD is an Attending prorvider at the hospital. The NDH verify the information which is attested from both parties and records the result in the Verification Result resource instance. See the detail below:
- [VerificationResult for JoeSmithHospitalRole]
- [Practitioner/JoeSmith]
- [Organization/Hospital]

{% include markdown-link-references.md %}

---

// File: input/includes/markdown-link-references.md


<!-- NDH Code System -->
[AcceptingPatientsCS]: CodeSystem-AcceptingPatientsCS.html
[AccessibilityCS]: CodeSystem-AccessibilityCS.html
[EndpointConnectionTypeCS]: CodeSystem-EndpointConnectionTypeCS.html
[EndpointPayloadTypeCS]: CodeSystem-EndpointPayloadTypeCS.html
[HealthcareServiceCategoryCS]: CodeSystem-HealthcareServiceCategoryCS.html
[OrgAliasTypeCS]: CodeSystem-OrgAliasTypeCS.html
[OrganizationAffiliationRoleCS]: CodeSystem-OrganizationAffiliationRoleCS.html
[OrgTypeCS]: CodeSystem-OrgTypeCS.html
[PractitionerRoleCS]: CodeSystem-PractitionerRoleCS.html
[QualificationStatusCS]: CodeSystem-QualificationStatusCS.html
[TrustFrameworkTypeCS]: CodeSystem-TrustFrameworkTypeCS.html
<!--[ValidationTypeCS]: CodeSystem-ValidationTypeCS.html -->

<!--NDH ValueSet -->
[AcceptingPatientsVS]: ValueSet-AcceptingPatientsVS.html
[AccessibilityVS]: ValueSet-AccessibilityVS.html
[EndpointConnectionTypeVS]: ValueSet-EndpointConnectionTypeVS.html
[EndpointPayloadTypeVS]: ValueSet-EndpointPayloadTypeVS.html
[HealthcareServiceCategoryVS]: ValueSet-HealthcareServiceCategoryVS.html
[HealthcareServiceTypeVS]: ValueSet-HealthcareServiceTypeVS.html
[IdentifierStatusVS]: ValueSet-IdentifierStatusVS.html
[IndividualSpecialtyAndDegreeLicenseCertificateVS]: ValueSet-IndividualSpecialtyAndDegreeLicenseCertificateVS.html
[NetworkTypeVS]: ValueSet-NetworkTypeVS.html
[OrgTypeVS]: ValueSet-OrgTypeVS.html
[OrgAliasTypeVS]: ValueSet-OrgAliasTypeVS.html
[OrganizationAffiliationRoleVS]: ValueSet-OrganizationAffiliationRoleVS.html
[PractitionerRoleVS]: ValueSet-PractitionerRoleVS.html
[QualificationStatusVS]: ValueSet-QualificationStatusVS.html
[SpecialtiesVS]: ValueSet-SpecialtiesVS.html
[SpecialtyAndDegreeLicenseCertificateVS]: ValueSet-SpecialtyAndDegreeLicenseCertificateVS.html
[TrustFrameworkTypeVS]: ValueSet-TrustFrameworkTypeVS.html
[VirtualModalitiesVS]: ValueSet-VirtualModalitiesVS.html


<!--Extensions -->
[NDH Accessibility]: StructureDefinition-base-ext-accessibility.html
[NDH Associated Servers]: StructureDefinition-base-ext-associatedServers.html
[NDH Careteam Alias]: StructureDefinition-base-ext-careteam-alias.html
[NDH Communication Proficiency]: StructureDefinition-base-ext-communication-proficiency.html
[NDH ContactPoint AvailableTime]: StructureDefinition-base-ext-contactpoint-availabletime.html
[NDH Delivery Method]: StructureDefinition-base-ext-delivery-method.html
[NDH Digital Certificate]: StructureDefinition-base-ext-digitalcertificate.html
[NDH Dynamic Registration]: StructureDefinition-base-ext-dynamicRegistration.html
[NDH Endpoint Access Control Mechanism]: StructureDefinition-base-ext-endpointAccessControlMechanism.html
[NDH Endpoint Connection Type]: StructureDefinition-base-ext-endpoint-connection-type-version.html
[NDH Endpoint Connection Type Version]: StructureDefinition-base-ext-endpoint-connection-type-version.html
[NDH Endpoint IHE Specific Connection Type]: StructureDefinition-base-ext-endpoint-ihe-specific-connection-type.html
[NDH Endpoint Rank]: StructureDefinition-base-ext-endpoint-rank.html
[NDH Endpoint Reference]: StructureDefinition-base-ext-endpoint-reference.html
[NDH Endpoint Usecase]: StructureDefinition-base-ext-endpoint-usecase.html
[NDH Endpoint Non FHIR Usecase]: StructureDefinition-base-ext-endpoint-non-fhir-usecase.html
[NDH Funding Source]: StructureDefinition-base-ext-fundingSource.html
[NDH Endpoint Testing Certification]: StructureDefinition-base-ext-endpoint-testing-certification.html
[NDH HealthcareService Reference]: StructureDefinition-base-ext-healthcareservice-reference.html
[NDH HealthcareService or Program Requirement]: StructureDefinition-base-ext-service-or-program-requirement.html

[NDH FHIR IG]: StructureDefinition-base-ext-fhir-ig.html
[NDH Identifier Status]: StructureDefinition-base-ext-identifier-status.html
[NDH InsurancePlan Reference]: StructureDefinition-base-ext-insuranceplan-reference.html
[NDH Language Speak]: StructureDefinition-base-ext-language-speak.html
[NDH Location Reference]: StructureDefinition-base-ext-location-reference.html
[NDH Logo]: StructureDefinition-base-ext-logo.html
[NDH Network Reference]: StructureDefinition-base-ext-network-reference.html
[NDH NewPatients]: StructureDefinition-base-ext-newpatients.html
[NDH Orginization Alias Period]: StructureDefinition-base-ext-org-alias-period.html
[NDH Orgnization Alias Type]: StructureDefinition-base-ext-org-alias-type.html
[NDH Org Description]: StructureDefinition-base-ext-org-description.html
[NDH Payment Accepted]: StructureDefinition-base-ext-paymentAccepted.html
[NDH Practitioner Qualification]: StructureDefinition-base-ext-practitioner-qualification.html
[NDH Qualification]: StructureDefinition-base-ext-qualification.html
[NDH Rating]: StructureDefinition-base-ext-rating.html
[NDH Required Document]: StructureDefinition-base-ext-requiredDocument.html
[NDH Secure Exchange Artifacts]: StructureDefinition-base-ext-secureExchangeArtifacts.html
[NDH Trust Framework]: StructureDefinition-base-ext-trustFramework.html
[NDH Usage Restriction]: StructureDefinition-base-ext-usage-restriction.html
[NDH usage restriction fhir path]: StructureDefinition-base-ext-restrictFhirPath.html
[NDH Verification Status]: StructureDefinition-base-ext-verification-status.html
[NDH Via Intermediary]: StructureDefinition-base-ext-via-intermediary.html
[NDH Endpoint EnvironmentType]: StructureDefinition-base-ext-endpoint-environment-type.html

<!-- base Search Parameters for NDH base profiles -->
[CareTeam Search Parameters]: StructureDefinition-ndh-CareTeam.html#search-parameters
[Endpoint Search Parameters]: StructureDefinition-ndh-Endpoint.html#search-parameters
[HealthcareService Search Parameters]: StructureDefinition-ndh-HealthcareService.html#search-parameters
[InsurancePlan Search Parameters]: StructureDefinition-ndh-InsurancePlan.html#search-parameters
[Location Search Parameters]: StructureDefinition-ndh-Location.html#search-parameters
[Network Search Parameters]: StructureDefinition-ndh-Network.html#search-parameters
[Organization Search Parameters]: StructureDefinition-ndh-Organization.html#search-parameters
[OrganizationAffiliation Search Parameters]: StructureDefinition-ndh-OrganizationAffiliation.html#search-parameters
[Practitioner Search Parameters]: StructureDefinition-ndh-Practitioner.html#search-parameters
[PractitionerRole Search Parameters]: StructureDefinition-ndh-PractitionerRole.html#search-parameters
[Verification Search Parameters]: https://github.com/HL7/fhir-us-ndh/tree/nested-extension

[NDH Base Value Set]: artifacts.html#terminology-value-sets
[NDH Base Code System]: artifacts.html#terminology-code-systems



[endpoint-usecase-type]: SearchParameter-endpoint-usecase-type.html
[careteam-location]: SearchParameter-careteam-location.html
[careteam-name]: SearchParameter-careteam-name.html
[careteam-organization]: SearchParameter-careteam-organization.html
[careteam-service]: SearchParameter-careteam-service.html


[healthcareservice-eligibility]: SearchParameter-healthcareservice-eligibility.html
[healthcareservice-new-patient]: SearchParameter-healthcareservice-new-patient.html
[healthcareservice-new-patient-from-network]: SearchParameter-healthcareservice-new-patient-from-network.html

[insuranceplan-coverage-area]: SearchParameter-insuranceplan-coverage-area.html
[insuranceplan-coverage-benefit-type]: SearchParameter-insuranceplan-coverage-benefit-type.html
[insuranceplan-coverage-type]: SearchParameter-insuranceplan-coverage-type.html
[insuranceplan-coverage-network]: SearchParameter-insuranceplan-coverage-network.html
[insuranceplan-network]: SearchParameter-insuranceplan-network.html
[insuranceplan-plan-network]: SearchParameter-insuranceplan-plan-network.html
[insuranceplan-plan-type]: SearchParameter-insuranceplan-plan-type.html

[location-accessibility]: SearchParameter-location-accessibility.html
[location-contains]: SearchParameter-location-contains.html
[location-new-patient]: SearchParameter-location-new-patient.html
[location-new-patient-from-network]: SearchParameter-location-new-patient-from-network.html

[network-coverage-area]: SearchParameter-network-coverage-area.html

[practitioner-qualification-code]: SearchParameter-practitioner-qualification-code.html
[practitioner-qualification-issuer]: SearchParameter-practitioner-qualification-issuer.html


[practitionerrole-network]: SearchParameter-practitionerrole-network.html
[practitionerrole-new-patient]: SearchParameter-practitionerrole-new-patient.html
[practitionerrole-new-patient-from-network]: SearchParameter-practitionerrole-new-patient-from-network.html

[verificationresult-attestation-who]: SearchParameter-verificationresult-attestation-who.html
[verificationresult-primarysource-validation-status]: SearchParameter-verificationresult-primarysource-validation-status.html
[verificationresult-primarysource-type]: SearchParameter-verificationresult-primarysource-type.html
[verificationresult-primarysource-who]: SearchParameter-verificationresult-primarysource-who.html
[verificationresult-status]: SearchParameter-verificationresult-status.html
[verificationresult-target]: SearchParameter-verificationresult-target.html


<!--Base Profiles -->
[Base CareTeam]: StructureDefinition-ndh-CareTeam.html
[Base Endpoint]: StructureDefinition-ndh-Endpoint.html
[Base HealthcareService]: StructureDefinition-ndh-HealthcareService.html
[Base InsurancePlan]: StructureDefinition-ndh-InsurancePlan.html
[Base Location]: StructureDefinition-ndh-Location.html
[Base Network]: StructureDefinition-ndh-Network.html
[Base Organization]: StructureDefinition-ndh-Organization.html
[Base OrganizationAffiliation]: StructureDefinition-ndh-OrganizationAffiliation.html
[Base Practitioner]: StructureDefinition-ndh-Practitioner.html
[Base PractitionerRole]: StructureDefinition-ndh-PractitionerRole.html
[Base Restriction]: StructureDefinition-ndh-Restriction.html
[Base Verification]: StructureDefinition-ndh-Verification.html


<!--Exchange Profiles -->
[National Directory API CareTeam]: StructureDefinition-ndh-ndapi-CareTeam.html
[National Directory API Endpoint]: StructureDefinition-ndh-ndapi-Endpoint.html
[National Directory API HealthcareService]: StructureDefinition-ndh-ndapi-HealthcareService.html
[National Directory API InsurancePlan]: StructureDefinition-ndh-ndapi-InsurancePlan.html
[National Directory API Location]: StructureDefinition-ndh-ndapi-Location.html
[National Directory API Network]: StructureDefinition-ndh-ndapi-Network.html
[National Directory API Organization]: StructureDefinition-ndh-ndapi-Organization.html
[National Directory API OrganizationAffiliation]: StructureDefinition-ndh-ndapi-OrganizationAffiliation.html
[National Directory API Practitioner]: StructureDefinition-ndh-ndapi-Practitioner.html
[National Directory API PractitionerRole]: StructureDefinition-ndh-ndapi-PractitionerRole.html
[National Directory API Restriction]: StructureDefinition-ndh-ndapi-Restriction.html

<!--Query Profiles -->
[Payer Provider Network Local Directory API Endpoint]: StructureDefinition-ndhPn-ldapi-Endpoint.html
[Payer Provider Network Local Directory API HealthcareService]: StructureDefinition-ndhPn-ldapi-HealthcareService.html
[Payer Provider Network Local Directory API InsurancePlan]: StructureDefinition-ndhPn-ldapi-InsurancePlan.html
[Payer Provider Network Local Directory API Location]: StructureDefinition-ndhPn-ldapi-Location.html
[Payer Provider Network Local Directory API Network]: StructureDefinition-ndhPn-ldapi-Network.html
[Payer Provider Network Local Directory API Organization]: StructureDefinition-ndhPn-ldapi-Organization.html
[Payer Provider Network Local Directory API OrganizationAffiliation]: StructureDefinition-ndhPn-ldapi-OrganizationAffiliation.html
[Payer Provider Network Local Directory API Practitioner]: StructureDefinition-ndhPn-ldapi-Practitioner.html
[Payer Provider Network Local Directory API PractitionerRole]: StructureDefinition-ndhPn-ldapi-PractitionerRole.html

<!-- Query Capability Statement -->
[wds-Endpoint-Basic-Query-CapabilityStatement]: CapabilityStatement-wds-endpoint-basic-query-server.html
[wds-Payer-Provider-Network-Query-CapabilityStatement]: CapabilityStatement-wds-payer-provider-network-query-server.html
[national-directory-api-CapabilityStatement]: CapabilityStatement-national-directory-api-server.html
[ndh-Attestation-Server-CapabilityStatement]: CapabilityStatement-ndh-attestation-server.html


<!-- Examples -->
[CareTeam/CareTeam1]: CareTeam-CareTeam1.html
[Endpoint/AcmeOfCTPortalEndpoint]: Endpoint-AcmeOfCTPortalEndpoint.html
[Endpoint/CoordinationOfCareEndpoint]: Endpoint-CoordinationOfCareEndpoint.html
[Endpoint/HansSoloDirectTrustEndpointReferrals]: Endpoint-HansSoloDirectTrustEndpointReferrals.html
[Endpoint/HansSoloPatientAccessEndpoint]: Endpoint-HansSoloPatientAccessEndpoint.html

[HealthcareService/BurrClinicServices]: HealthcareService-BurrClinicServices.html
[HealthcareService/HansSoloService]: HealthcareService-HansSoloService.html
[HealthcareService/HartfordOrthopedicServices]: HealthcareService-HartfordOrthopedicServices.html
[HealthcareService/PharmChainRetailService]: HealthcareService-PharmChainRetailService.html
[HealthcareService/HansSoloService]: HealthcareService-HansSoloService.html

[InsurancePlan/AcmeQHPGold]: InsurancePlan-AcmeQHPGold.html
[InsurancePlan/AcmeQHPBronze]: InsurancePlan-AcmeQHPBronze.html
[InsurancePlan/BlueCrossBlueShield-CT]: InsurancePlan-BlueCrossBlueShield-CT.html


[Location/HansSoloClinic]: Location-HansSoloClinic.html
[Location/HospLoc1]: Location-HospLoc1.html
[Location/HospLoc2]: Location-HospLoc2.html
[Location/PharmLoc1]: Location-PharmLoc1.html
[Location/PharmLoc2]: Location-PharmLoc2.html
[Location/PharmLoc3]: Location-PharmLoc3.html
[Location/PharmLoc4]: Location-PharmLoc4.html
[Location/StateOfCTLocation]: Location-StateOfCTLocation.html

[Organization/Acme]: Organization-Acme.html
[Organization/AcmeofCTPremNet]: Organization-AcmeofCTPremNet.html
[Organization/AcmeofCTStdNet]: Organization-AcmeofCTStdNet.html
[Organization/BigBox]: Organization-BigBox.html
[Organization/BurrClinic]: Organization-BurrClinic.html
[Organization/HartfordOrthopedics]: Organization-HartfordOrthopedics.html
[Organization/Hospital]: Organization-Hospital.html
[Organization/HamiltonClinic]: Organization-HamiltonClinic.html
[Organization/PharmChain]: Organization-PharmChain.html
[Organization/BlueCrossBlueShield-CT-ORG]: Organization-BlueCrossBlueShield-CT-ORG.html
[Organization/BlueCrossBlueShield-CT-PPO]: Organization-BlueCrossBlueShield-CT-PPO.html

[OrganizationAffiliation/BurrClinicAffil]: OrganizationAffiliation-BurrClinicAffil.html
[OrganizationAffiliation/PharmChainAffil1]: OrganizationAffiliation-PharmChainAffil1.html

[Practitioner/HansSolo]: Practitioner-HansSolo.html
[Practitioner/JoeSmith]: Practitioner-JoeSmith.html
[VerificationResult 1 for Joe Smith MD]: VerificationResult-Verify-JoeSmith.html
[VerificationResult 2 for Joe Smith MD]: VerificationResult-Verify-JoeSmith-2.html
[VerificationResult 1 for Hartford General Hospital]: VerificationResult-Verify-Hospital.html
[VerificationResult 2 for Hartford General Hospital]: VerificationResult-Verify-Hospital-2.html
[VerificationResult for JoeSmithHospitalRole]: VerificationResult-Verify-JoeSmithHospitalRole.html

[PractitionerRole/HansSoloRole]: PractitionerRole-HansSoloRole.html
[PractitionerRole/JoeSmithRole2]: PractitionerRole-JoeSmithRole2.html

[HealthcareService/HealthcareService-Social-Hope-CBO]: HealthcareService-HealthcareService-Social-Hope-CBO.html
[HealthcareService/HealthcareService-Social-Towson-Food]: HealthcareService-HealthcareService-Social-Towson-Food.html
[Location/Location-Social-Hope-CBO]: Location-Location-Social-Hope-CBO.html
[Location/Location-Social-Towson-Food]: Location-Location-Social-Towson-Food.html
[Organization/Organization-Social-Hope-CBO]: Organization-Organization-Social-Hope-CBO.html
[Organization/Organization-Social-Towson-Food]: Organization-Organization-Social-Towson-Food.html

[Attestation]: CapabilityStatement-ndh-attestation-server.html
[National Directory API CapabilityStatement]: ndapi-capability.html
[National Directory API Base Expanded]: CapabilityStatement-national-directory-api-base-expanded-server.html
[National Directory API Base]: CapabilityStatement-national-directory-api-base-server.html
[National Directory API]: CapabilityStatement-national-directory-api-server.html
[Endpoint Expanded]: CapabilityStatement-wds-endpoint-expanded-query-server.html
[Endpoint Basic]: CapabilityStatement-wds-endpoint-basic-query-server.html
[Health and Human Service Basic]: CapabilityStatement-wds-health-and-human-service-basic-query-server.html
[Health and Human Service Expanded]: CapabilityStatement-wds-health-and-human-service-expanded-query-server.html
[Human Service Basic]: CapabilityStatement-wds-human-service-basic-query-server.html
[Human Service Expanded]: CapabilityStatement-wds-human-service-expanded-query-server.html
[Provider Basic]: CapabilityStatement-wds-provider-basic-query-server.html
[Provider Expanded]: CapabilityStatement-wds-provider-expanded-query-server.html
[Payer Provider Network]: CapabilityStatement-wds-payer-provider-network-query-server.html
[Verification]: CapabilityStatement-ndh-verification-server.html



[OperationDefinition-Ndhschexport]: OperationDefinition-ndhschexport.html
[NdhSchexport-operation-flow-diagram]: ndapi-ig.html#national-directorys-scheduled-bulk-data-export-process


[HealthcareService/HealthcareServiceWomenShelterAll]: HealthcareService-HealthcareServiceWomenShelterAll.html
[HealthcareService/HealthcareServiceWomenShelter]: HealthcareService-HealthcareServiceWomenShelter.html

[Network1]: Organization-Network1.html
[Network2]: Organization-Network2.html
[OrgManageNetwork]: Organization-OrgManageNetwork.html
[PractitionerOneWithNetwork1AndNetwork2]: Practitioner-PractitionerOneWithNetwork1AndNetwork2.html
[PractitionerTwoWithNetwork1ForFirstSixMonths]: Practitioner-PractitionerTwoWithNetwork1LeftAfterSixMonths.html
[PractitionerOneNetwork1Role]: PractitionerRole-PractitionerOneNetwork1Role.html
[PractitionerOneNetwork2Role]: PractitionerRole-PractitionerOneNetwork2Role.html
[PractitionerTwoNetwork1LeftAfterSixMonthRole]: PractitionerRole-PractitionerTwoNetwork1LeftAfterSixMonthRole.html
[MedicareAdvantageHMO]: InsurancePlan-MedicareAdvantageHMO.html
[MedicareAdvantage]: InsurancePlan-MedicareAdvantage.html
[OrgOneNetwork1Affiliation]: OrganizationAffiliation-OrgOneNetwork1Affiliation.html
[OrgOneNetwork2Affiliation]: OrganizationAffiliation-OrgOneNetwork2Affiliation.html
[OrgOneWithNetwork1AndNetwork2]: Organization-OrgOneWithNetwork1AndNetwork2.html

[HealthcareServiceHomelessAssistance]: HealthcareService-HealthcareServiceHomelessAssistance.html
[OrgHousingAssistanceHubManagement]: Organization-OrgHousingAssistanceHubManagement.html
[OrganizationWelcomeHome]: Organization-OrganizationWelcomeHome.html
[LocationWelcomeHome]: Location-LocationWelcomeHome.html
[SocialServiceHousingNetwork]: Organization-SocialServiceHousingNetwork.html














---

// File: input/intro-notes/OperationDefinition-ndhexport-intro.md

#### Headers for ndhschExport operation requst
Header Prefer = respond-async indicate the response is async.
```
Prefer: respond-async
```

#### Response of the ndhschExport operatation request 
The response will include a return code of 202, indicating that the NDH server has accepted the request.
```
HTTP/1.1 202 Accepted
```


---

// File: input/intro-notes/StructureDefinition-base-ext-secureExchangeArtifacts-intro.md



---

// File: input/intro-notes/StructureDefinition-base-ext-secureExchangeArtifacts-notes.md

In a point-to-point security connection, such as payer-to-payer data exchange via Mutual TLS (mTLS), possessing a public certificate is essential to establish the mTLS connection.

---

// File: input/intro-notes/StructureDefinition-base-ext-trustFramework-notes.md

A trust framework is a structured set of rules, policies, protocols, and standards that define how trust is established, managed, and maintained between different entities (such as organizations, systems, or users) involved in the exchange of healthcare information. It provides the guidelines and technical specifications to ensure secure, interoperable, and reliable data exchange. SMART, UDAP, and DirectTrust are examples of trust frameworks.

Sometimes, people refer to CareQuality, CommonWell, or TEFCA as trust frameworks, although they are actually trust communities. These communities agree to follow a trust framework to securely exchange health information. In practice, different communities may use the same trust framework with some additional rules. As a result, implementers may use the terms trust framework and trust community interchangeably.

---

// File: input/intro-notes/StructureDefinition-base-ext-verification-status-intro.md

<!-- no content for now -->


---

// File: input/intro-notes/StructureDefinition-ndh-CareTeam-intro.md

### Background & Scope

A care team consists of the providers and/or organizations responsible for effectively delivering coordinated care. Care teams are conventionally associated with a specific patient. For example, a patient with diabetes may have a care team that consists of a physician, nurse, dietitian, certified diabetes educator, etc. Data about patients/caregivers, however, is out of scope for the National Directory of Healthcare Providers & Services (NDH). Therefore, this care team profile constrains out elements which reference or describe patient-level data. In general, the NDH is more likely to represent administrative teams, or teams that are relevant beyond the direct clinical care of specific patients.

Individuals participating on the NDH CareTeam SHALL be represented through an associated role. Therefore, this profile removes references to the Practitioner resource in CareTeam.participant.member. For example, Dr. Smith (an individual) does not participate on a care team. Rather, Dr. Smith in his role as a provider at Acme Hospital participates on a care team.

A care team may be functionally “empty,” i.e., the roles on the care team are not filled by individuals. For example, a care team may be comprised of a primary care provider role, care coordinator role, and specialist role without indicating the individuals filling those roles (i.e., by referencing a PractitionerRole resource that does not reference a Practitioner resource). This enables entities to describe existing care teams while masking the identity of the individuals/organizations that are involved, or to represent standing care teams that are filled by individuals on an ad hoc basis in response to a condition/event.

For all reasons above, this IG is using CareTeam Base profile, instead of US Core CareTeam profile. See [variance Request ticket](https://jira.hl7.org/browse/FHIR-37832)



---

// File: input/intro-notes/StructureDefinition-ndh-CareTeam-notes.md

### Search Parameters
#### Search Parameter defined by the NDH IG
<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **SearchParameter Name** | **Type** | **Example** | 
|------------------------- |----------|-------------|
| [endpoint](SearchParameter-careteam-endpoint.html)  | reference | `GET [base]/CareTeam?endpoint.indentifier=1234567` |
| [location](SearchParameter-careteam-location.html)  | reference | `GET [base]/CareTeam?location.addr-state=MD` |
| [name](SearchParameter-careteam-name.html) | string | `GET [base]/CareTeame?name=VA-Oncology` |
| [organization](SearchParameter-careteam-organization.html) | reference | `GET [base]/CareTeam?organization.name=Hartford General Hospital` |
| [service](SearchParameter-careteam-service.html) | reference | `GET [base]/CareTeame?service.active=true` |
| [verification-status](SearchParameter-careteam-verification-status.html) | token | `GET [base]/CareTeame?verification-status=complete` |

#### Search Parameter defined by FHIR Search Parameter Registry and used by the NDH IG 
Since there is no direct individual url for each Search Parameter defined by FHIR Serach Parameter Registry, we have provided the following links for you to access more information about them.

- [Search Parameter Registry](https://hl7.org/fhir/R4/searchparameter-registry.html)  
- [CareTeam Search Parameter from Registry](https://hl7.org/fhir/R4/careteam.html#search)

<style>
    
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

|**SearchParameter Name** | **Type** | **Example** |
|-------------------------|----------|-------------|
| category | token | `GET [base]/CareTeam?category=behav` |
| identifier | token | `GET [base]/CareTeam?identifier=http://hl7.org/fhir/R4/v2/0203/index.html|SB` |
| participant | reference | `GET [base]/CareTeam?participant.name=Hamilton Clinic` |
| status | token | `GET [base]/CareTeam?status=active` |

#### _include Search Parameter
<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **_include** | **Example** |
|--------------|-------------|
| CareTeam:location | `GET [base]/CareTeam?_include=CareTeam:location` |
| CareTeam:organization | `GET [base]/CareTeam?_include=CareTeam:organization` |
| CareTeam:participant | `GET [base]/CareTeam?_include=&CareTeam:participant` |


#### _revinclude Search parameter
<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **_revinclude** | **Example** |
|-----------------|-------------|
| VerifcationResult:target | `GET [base]/CareTeam?_revinclude=VerifcationResult:target.type=CareTeam` |

#### Special Search Parameters
The search parameters outlined above are straightforward for basic scenarios but have limitations in handling complex combination queries. To enhance these capabilities, employing the special search parameters [_filter](https://hl7.org/fhir/R5/search_filter.html#3.2.3) is recommended.




---

// File: input/intro-notes/StructureDefinition-ndh-Endpoint-intro.md

### Scope and Usage
The endpoint resource provides technical specifications for connecting to a specific location to transmit and retrieve information securely and accurately, according to the requirements of the endpoint owner. Unlike the CapabilityStatement, which describes the current system, the endpoint resource pertains to another system, potentially external to the current one. The endpoint could refer to locally hosted, regional, or national services.

Endpoint resources can be used to identify the location of endpoint details for various purposes, including referral requests to Organizations, OrganizationAffiliation, Locations, Practitioners, PractitionerRole or HealthcareServices. These resources can provide information on where to direct the referral request for efficient and effective care coordination.

Endpoint resources can also be useful for other purposes, such as facilitating preauthorization between insurance plans, network, and providers. They can be used to exchange information between care team members, allowing for seamless collaboration and communication among different healthcare providers involved in a patient's care. By utilizing endpoint resources, relevant information can be shared securely and efficiently, helping to improve the quality of care and patient outcomes.

### Boundaries and Relationships
#### CapabilityStatement vs Endpoint
The CapabilityStatement and the endpoint resource serve distinct purposes. While the CapabilityStatement describes the complete capability of a server, including the metadata of a specific server, the endpoint resource outlines the technical specifications for establishing connections and the intended purposes of such connections. The endpoint resource may only represent a small fraction of the server's capabilities, and it may not even function as a FHIR endpoint.


---

// File: input/intro-notes/StructureDefinition-ndh-Endpoint-notes.md

### Search Parameters
#### Search Parameter defined by the NDH IG
<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **SearchParameter Name** | **Type** | **Example** |
|--------------------------|----------|-------------|
| [access-control-mechanism](SearchParameter-endpoint-access-control-mechanism.html) | token |`GET [base]/Endpoint?endpoint-access-control-mechanism=mutual-tls` |
| [connection-type-version](SearchParameter-endpoint-connection-type-version.html) | token |`GET [base]/Endpoint?connection-type-version=4.0.1` |
| [dynamic-registration-trust-profile](SearchParameter-endpoint-dynamic-registration-trust-profile.html) | token |`GET [base]/Endpoint?dynamic-registration-trust-profile=udap`|
| [ihe-connection-type](SearchParameter-endpoint-ihe-connection-type.html) | token |`GET [base]/Endpoint?ihe-connection-type=XCPD-InitGateway-PatientDiscovery-AsyncResponse`|
| [nonfhir-usecase-type](SearchParameter-endpoint-nonfhir-usecase-type.html) | token |`GET [base]/Endpoint?nonfhir-usecase-type=patient-access` |
| [trust-framework-type](SearchParameter-endpoint-trust-framework-type.html) | token |`GET [base]/Endpoin?trust-framework-type=DirectTrust` |
| [usecase-type](SearchParameter-endpoint-usecase-type.html) | token | `GET [base]/Endpoint?usecase-type=payerTopayer` |
| [verification-status](SearchParameter-endpoint-verification-status.html) | token |`GET [base]/Endpoint?verification-status=complete` |

#### Search Parameter defined by FHIR Search Parameter Registry and used by the NDH IG 
Since there is no direct individual url for each Search Parameter defined by FHIR Serach Parameter Registry, we have provided the following links for you to access more information about them.

- [Search Parameter Registry](https://hl7.org/fhir/R4/searchparameter-registry.html)
- [Endpoint Search Parameter from Registry](https://hl7.org/fhir/R4/endpoint.html#search)

<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **SearchParameter Name** | **Type** | **Example** |
|--------------------------|----------|-------------|
| connection-type | token |`GET [base]/Endpoint?connection-type=hl7-fhir-rest` |
| identifier | token |`GET [base]/Endpoint?identifier={system}|{value}`|
| organization | reference |`GET [base]/Endpoint?organization.name=Hartford General Hospital`|
| status | token |`GET [base]/Endpoint?status=active` |


#### _include Search Parameter

<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **_include** | **Example** |
|--------------|-------------|
| Endpoint:organization | `GET [base]/CareTeam?_include=Endpoint:organization`



#### _revinclude Search parameter
<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **_revinclude** |
|-----------------|
| CareTeam:endpoint |
| HealthcareService:endpoint |
| InsurancePlan:endpoint |
| Location:endpoint |
| Organization:endpoint |
| OrganizationAffiliation:endpoint |
| Practitioner: endpoint |
| PractitionerRole:endpoint | 
| VerifcationResult:target |

#### Special Search Parameters
The search parameters outlined above are straightforward for basic scenarios but have limitations in handling complex combination queries. To enhance these capabilities, employing the special search parameters [_filter](https://hl7.org/fhir/R5/search_filter.html#3.2.3) is recommended.






---

// File: input/intro-notes/StructureDefinition-ndh-HealthcareService-intro.md



---

// File: input/intro-notes/StructureDefinition-ndh-HealthcareService-notes.md

#### Search Parameters
##### Search Parameter defined by the NDH IG
<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **SearchParameter Name** |**Type**| **Example** |
| [eligibility](SearchParameter-healthcareservice-eligibility.html) | token |`GET [base]/HealthcareService?eligibility=2403008` |
| [new-patient](SearchParameter-healthcareservice-new-patient.html) | token |`GET [base]/HealthcareService?new-patient=newpt` |
| [new-patient-from-network](SearchParameter-healthcareservice-new-patient-from-network.html) | reference |`GET [base]/HealthcareService?new-patient-from-network.type=ntwk&new-patient-from-network.address-state=CT` |
| [verification-status](SearchParameter-healthcareservice-verification-status.html) | token |`GET [base]/HealthcareService?verification-status=complete` |
| [network](SearchParameter-healthcareservice-network.html) | reference |`GET [base]/HealthcareService?network.type=ntwk&network.address-state=CT` |
| [social-service-age-group](SearchParameter-healthcareservice-social-service-age-group.html) | token |`GET [base]/HealthcareService?social-service-age-group=teens&program=42` |
| [social-service-birthsex](SearchParameter-healthcareservice-social-service-birthsex.html) | token |`GET [base]/HealthcareService?social-service-birthsex=F` |
| [social-service-employment-status](SearchParameter-healthcareservice-social-service-employment-status.html) | token |`GET [base]/HealthcareService?social-service-employment-status=unemployed`	 |
| [social-service-gender-identity](SearchParameter-healthcareservice-social-service-gender-identity.html) | token |`GET [base]/HealthcareService?social-service-gender-identity=OTH` |
| [social-service-insurance-status](SearchParameter-healthcareservice-social-service-insurance-status.html) | token |`GET [base]/HealthcareService?social-service-insurance-status=uninsured` |
| [social-service-preferred-language](SearchParameter-healthcareservice-social-service-preferred-language.html) | token |`GET [base]/HealthcareService?social-service-preferred-language=en` |
| [social-service-va-status](SearchParameter-healthcareservice-social-service-va-status.html) | token |`GET [base]/HealthcareService?social-service-va-status=true` |
| [program-requirement-age-group](SearchParameter-healthcareservice-program-requirement-age-group.html) | token |`GET [base]/HealthcareService?program-requirement-age-group=teens` |
| [program-requirement-birthsex](SearchParameter-healthcareservice-program-requirement-birthsex.html) | token |`GET [base]/HealthcareService?program-requirement-birthsex=M` |
| [program-requirement-employment-status](SearchParameter-healthcareservice-program-requirement-employment-status.html) | token |`GET [base]/HealthcareService?program-requirement-employment-status=employed` |
| [program-requirement-gender-identity](SearchParameter-healthcareservice-program-requirement-gender-identity.html) | token |`GET [base]/HealthcareService?program-requirement-gender-identity=ASKU` |
| [program-requirement-insurance-status](SearchParameter-healthcareservice-program-requirement-insurance-status.html) | token |`GET [base]/HealthcareService?program-requirement-insurance-status=uninsured` |
| [program-requirement-preferred-language](SearchParameter-healthcareservice-program-requirement-preferred-language.html) | token |`GET [base]/HealthcareService?program-requirement-preferred-language=sp` |
| [program-requirement-va-status](SearchParameter-healthcareservice-program-requirement-va-status.html) | token |`GET [base]/HealthcareService?program-requirement-va-status=false` |
| [location](SearchParameter-healthcareservice-location.html) | reference |`GET [base]/HealthcareService?location.address-state=CT` |
| [organization](SearchParameter-healthcareservice-organization.html) | reference |`GET [base]/HealthcareService?organization.name=HOPE INC` |
| [verification-status](SearchParameter-healthcareservice-verification-status.html) | token | `GET [base]/HealthcareService?verification-status=complete` |



##### Search Parameter defined by FHIR Search Parameter Registry and used by the NDH IG 
Since there is no direct individual url for each Search Parameter defined by FHIR Serach Parameter Registry, we have provided the following links for you to access more information about them.

- [Search Parameter Registry](https://hl7.org/fhir/R4/searchparameter-registry.html)
- [Healthcareservice Search Parameter from Registry](https://hl7.org/fhir/R4/healthcareservice.html#search)

<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **SearchParameter Name** | **Type** | **Example** |
|--------------------------|----------|-------------|
| active | token |`GET [base]/HealthcareService?active=true` |
| coverage-area | reference |`GET [base]/HealthcareService?coverage-area.address-state=CT` |
| endpoint | reference |`GET [base]/HealthcareService?endpoint.connection-type=hl7-fhir-rest` |
| identifier | token |`GET [base]/HealthcareService?identifier=1234567` |
| name | string |`GET [base]/HealthcareService?name=HOPE INC` |
| program | token |`GET [base]/HealthcareService?prgram=6` |
| service-category | token |`GET [base]/HealthcareService?service-category=behav` |
| service-type | token |`GET [base]/HealthcareService?service-type=230` |
| specialty | token |`GET [base]/HealthcareService?specialty=101YS0200X` |

##### _include Search Parameter
<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **_include** | **Example** |
|--------------|-------------|
| HealthcareService:coverage-area |`GET [base]/HealthcareService?_include=HealthcareService:coverage-area` |
| HealthcareService:endpoint |`GET [base]/HealthcareService?_include=HealthcareService:endpoint` |
| HealthcareService:location | `GET [base]/HealthcareService?_id=BurrClinicServices&_include=HealthcareService:location` |
| HealthcareService:new-patient-from-network |`GET [base]/HealthcareService?_include=HealthcareService:new-patient-from-network` |
| HealthcareService:organization | `GET [base]/HealthcareService?_id=BurrClinicServices&_include=HealthcareService:organization`|

##### _revinclude Search parameter
<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **_revinclude** |
|-----------------|
| CareTeam:service |
| OrganizationAffiliation:service |
| PractitionerRole:service |

#### Special Search Parameters
The search parameters outlined above are straightforward for basic scenarios but have limitations in handling complex combination queries. To enhance these capabilities, employing the special search parameters [_filter](https://hl7.org/fhir/R5/search_filter.html#3.2.3) is recommended.

##### Search use cases
###### Search for all organizations and locations provide a given HealthcareService
If you run the search below for the HealthcareService called `BurrClinicServices`, it should return a search bundle that includes the `BurrClinicServices` resource, as well as the associated `BurrClinic` Organization resource and the `HospLoc1` Location resource. This indicates that the `BurrClinic` organization provides the `BurrClinicServices` healthcare service at the `HospLoc1` location.

`GET [base]/HealthcareService?_id=BurrClinicServices&_include=HealthcareService:organization&_include=HealthcareService:location`

or 
`GET [base]/OrganizationAffiliation?service:HealthcareService._id=BurrClinicServices`

To search for a specific OrganizationAffiliation and its associated resources, you can use the following query:  

`GET [base]/OrganizationAffiliation?_id=BurrClinicAffil&_include=OrganizationAffiliation:service&_include=OrganizationAffiliation:location&_include=OrganizationAffiliation:participating-organization&_include=OrganizationAffiliation:network`

#### Usage
##### Network extension
The primary intention for the network extension of the HealthcareService is to cater to services related to social services. Typically, healthcare service networks are tied to insurance plans. However, in the realm of social services, the delivery or subscription of services often occurs through a hub. This hub embodies a similar concept to a network, but without an insurance plan attached. To simplify the process of locating such hubs (networks), NDH offers a connection from the healthcare server to the network. For instance, the Welcome Home organization provides housing services at the Welcome Home location. This service is subscribed to through the Social Service Housing Network.

##### Healthcare Service and Program Requirement extensions
The extension for Healthcare Service or Program Requirement is applied at both the Service and Program levels. Each Service or Program can have multiple requirements, and each requirement can have several constraints. For instance, one service could be specifically for teens, another for females, or even one designed exclusively for teenage girls. Restrictions should be utilized only when there are particular limitations, such as services solely for females or veterans.

##### Language Speak extension
If a service supports multiple languages, up to six for example, it's unlikely that these would be restricted within this extension. Instead, the languages spoken should be documented under the "healthcareService.communication" field.

##### User requests a healthcare service delivered by an organization at a location
The recommended approach for a user requesting a healthcare service provided by an organization at a location is to use the healthcare service resource. This depends on whether the nature of the service is offered at a single location or across multiple locations.

If a healthcare service is available at multiple locations, each location may have unique endpoints, operating hours, and telecom. The specific data for each location concerning endpoints, operating hours, and telecom (HealthcareService.location => Location.endpoint, Location.hoursOfOperation, Location.telecom ...) will supersede the general data provided at the healthcare service resource instance level (HealthcareService.endpoint, HealthcareService.availabeTime, HealthcareService.telecom ...). This approach provides flexibility: it permits the use of unified endpoints, operating hours, and telephones for the healthcare service when the information is consistent across all locations, while also allowing for differences in endpoints and operating hours at various locations.


---

// File: input/intro-notes/StructureDefinition-ndh-InsurancePlan-intro.md

### Background & scope
Each insurancePlan has a type which describe the product. An insurancePlan may offer its coverage benefits under a particular network. If an insurancePlan does not have a network, each plan of the insurancePlan must define a distinct plan type (InsurancePlace.plan.type). 

InsurancePlan describes a health insurance offering comprised of a list of covered benefits (i.e. the product), costs associated with those benefits (i.e. the insurance plan), and additional information about the offering, such as who own it, who administer it, coverage area, contact information, etc. 

To change a network in an insurance plan, adjust the insurancePlan.period and genderate a fresh new insurance plan. 



---

// File: input/intro-notes/StructureDefinition-ndh-InsurancePlan-notes.md

### Search Parameters
#### Search Parameter defined by the NDH IG
<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **SearchParameter Name** | **Type** | **Example** |
|---------------------------|----------|-------------|
| [coverage-area](SearchParameter-insuranceplan-coverage-area.html) |	reference | `GET [base]/InsurancePlan?coverage-area.contains=41.809006\|-71.41177` |
| [coverage-benefit-type](SearchParameter-insuranceplan-coverage-benefit-type.html) |	token |`GET [base]/InsurancePlan?coverage-benefit-type=pcpov` |
| [coverage-type](SearchParameter-insuranceplan-coverage-type.html) | token |`GET [base]/InsurancePlan?coverage-type=medical` |
| [coverage-network](SearchParameter-insuranceplan-coverage-network.html) | reference |`GET [base]/InsurancePlan?coverage-network.type=ntwk&coverage-network.address-state=CT` |
| [network](SearchParameter-insuranceplan-network.html) | reference |`GET [base]/InsurancePlan?network.type=ntwk&network.address-state=CT` |
| [plan-network](SearchParameter-insuranceplan-plan-network.html) | reference |`GET [base]/InsurancePlan?plan-network.type=ntwk&plan-network.address-state=CT |
| [plan-type](SearchParameter-insuranceplan-plan-type.html)	| token |`GET [base]/InsurancePlan?plan-type=gold |
| [verification-status](SearchParameter-insuranceplan-verification-status.html) |	token |`GET [base]/InsurancePlan?verification-status=complete` |


#### Search Parameter defined by FHIR Search Parameter Registry and used by the NDH IG 
Since there is no direct individual url for each Search Parameter defined by FHIR Serach Parameter Registry, we have provided the following links for you to access more information about them.

- [Search Parameter Registry](https://hl7.org/fhir/R4/searchparameter-registry.html)  
- [InsurancePlan Search Parameter from Registry](https://hl7.org/fhir/R4/insuranceplan.html#search)

<style>
    
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **SearchParameter Name** | **Type** | **Example** |
|--------------------------|----------|-------------|
| address | string |`GET [base]/InsurancePlan?address=456 Main Street` |
| address-city | string |`GET [base]/InsurancePlan?address-city=Norwalk` | 
| address-country | string |`GET [base]/InsurancePlan?address-country=USA` |
| address-postalcode | string |`GET [base]/InsurancePlan?address-postalcode=34997` |
| address-state | string |`GET [base]/InsurancePlan?address-state=FL` |
| administered-by | reference |`GET [base]/InsurancePlan?administered-by.name=HOPE INC` |
| endpoint | reference |`GET [base]/InsurancePlan?endpoint.connection-type=hl7-fhir-rest` |
| identifier | token |`GET [base]/InsurancePlan?identifier=12345` |
| name | string |`GET [base]/InsurancePlan?name=Florida Blue` |
| owned-by | reference |`GET [base]/InsurancePlan?owned-by.name=Florida Blue` |
| status | token |`GET [base]/InsurancePlan?status=active` |
| type | token |`GET [base]/InsurancePlan?type=commppo` |


#### _include Search Parameter
<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **_include** | **Example** |
|--------------|-------------|
| InsurancePlan:administered-by |`GET [base]/InsurancePlan?_include=InsurancePlan:administered-by` |
| InsurancePlan:endpoint |`GET [base]/InsurancePlan?_include=InsurancePlan:endpoint` |
| InsurancePlan:owned-by |`GET [base]/InsurancePlan?_include=InsurancePlan:owned-by` |
| InsurancePlan:coverage-area |`GET [base]/InsurancePlan?_include=InsurancePlan:coverage-area` |
| InsurancePlan:coverage-network | `GET [base]/InsurancePlan?_include=InsurancePlan:coverage-network`|
| InsurancePlan:plan-network | `GET [base]/InsurancePlan?_include=InsurancePlan:plan-network` |
| InsurancePlan:network | `GET [base]/InsurancePlan?_include=InsurancePlan:network` |


If you only want to search for networks associated with an InsurancePlan, you can use the following approach:
The primary resource in this context is the Organization, while the InsurancePlan resources serve as references to it. To accomplish this, the _revinclude feature is utilized. As the Network resource profile is derived from the Organization resource, the type=ntwk parameter must be included in your search.

`GET [base]/Organization?type=ntwk&_revinclude=InsurancePlan:network`

The relationship between InsurancePlans and Networks is many-to-many. A plan may be associated with multipe networks. The NDH model is having InsurancePlan reference networks.  

#### Special Search Parameters
The search parameters outlined above are straightforward for basic scenarios but have limitations in handling complex combination queries. To enhance these capabilities, employing the special search parameters [_filter](https://hl7.org/fhir/R5/search_filter.html#3.2.3) is recommended.


### InsurancePlan and Network relationship
The Insurance Plan resource defines three levels of networks: the base level network, the coverage level network, and the plan level network. The base level network is intended to apply to all coverage and plans when appropriate. For example, if dental services are included in the base level network and are covered at the coverage level, they would apply. Networks at the coverage level are specific to that coverage and are in addition to the base level network. Networks at the plan level are specific to the particular plan and incorporate any networks defined at both the base level and the coverage level. For instance, in a Platinum plan, the network may include more expensive venues that are not covered in lower-priced plans.

### InsurancePlan type, network diagram
A payer’s products typically differ by network type and/or covered benefits. A insurance plan pairs a product’s covered benefits with the particular cost sharing structure offered to a consumer. A given payer’s product may comprise multiple insurance plans (i.e. each insurance plan offers different cost sharing requirements for the same set of covered benefits). 

<figure>
    {% include insuranceplan.svg %}
    <figcaption> </figcaption>
</figure>

---

// File: input/intro-notes/StructureDefinition-ndh-Location-intro.md

### Background & Scope
Traditionally, a location refers to the physical place where healthcare services are provided, practitioners are employed, and organizations are based. This information is captured by the position element. For the National Directory, there is a need to address insurance plan coverage areas and insurance provider network coverage areas. This information is defined by the location-boundary-geojson extension element.

---

// File: input/intro-notes/StructureDefinition-ndh-Location-notes.md

### Search Parameters
#### Search Parameter defined by the NDH IG
<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **SearchParameter Name** | **Type** | **Example** |
|---------------------------|----------|-------------|
| [accessibility](SearchParameter-location-accessibility.html) | token | `GET [base]/Location?accessibility=cultcomp`|
| [contains](SearchParameter-location-contains.html) | special |`GET [base]/Location?contains=41.809006\|-71.41177`|
| [new-patient-from-network](SearchParameter-location-new-patient-from-network.html) | reference |`GET [base]/Location?new-patient-from-network=newpt` |
| [new-patient](SearchParameter-location-new-patient.html) | token |`GET [base]/Location?=new-patient=newpt` |
| [verification-status](SearchParameter-location-verification-status.html) | token | `GET [base]/Location?verification-status=complete` |

	
#### Search Parameter defined by FHIR Search Parameter Registry and used by the NDH IG 
Since there is no direct individual url for each Search Parameter defined by FHIR Serach Parameter Registry, we have provided the following links for you to access more information about them.

- [Search Parameter Registry](https://hl7.org/fhir/R4/searchparameter-registry.html)  
- [Location Search Parameter from Registry](https://hl7.org/fhir/R4/location.html#search)

<style>
    
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>


| **SearchParameter Name** | **Type** | **Example** |
|--------------------------|----------|-------------|
| address | string |`GET [base]/Location?address=123 Ravissant ST` |
| address-city | string |`GET [base]/Location?address-city=Coconut Creek` |
| address-country | string |`GET [base]/Location?address-country=USA` |
| address-postalcode | string |`GET [base]/Location?address-postalcode=34997` |
| address-state | string |`GET [base]/Location?address-state=FL` |
| address-use | token |`GET [base]/Location?address-use=work` |
| organization | reference |`GET [base]/Location?organization.address-state=FL` |
| type |token |`GET [base]/Location?type=RH` |


#### _include Search Parameter
<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **_include** | **Example** |
|--------------|-------------|
| Location:endpoint |`GET [base]/Location?_include=Location:endpoint` |
| Location:new-patient-from-network |`GET [base]/Location?_include=Location:new-patient-from-network` |
| Location:organization |`GET [base]/Location?_include=Location:organization` |
| Location:partof |`GET [base]/Location?_include=Location:partof` |


#### _revinclude Search Parameter
<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **_revinclude** |
|-----------------|
| CareTeam:careteam-location |
| HealthcareService:coverage-area |
| HealthcareService:location |
| InsurancePlan:coverage-area |
| OrganizationAffiliation:location |
| PractitionerRole:location |

#### Special Search Parameters
The search parameters outlined above are straightforward for basic scenarios but have limitations in handling complex combination queries. To enhance these capabilities, employing the special search parameters [_filter](https://hl7.org/fhir/R5/search_filter.html#3.2.3) is recommended.


#### Search for locations with managing organization
The FHIR path for the managing organization is `Location.managingOrganization`, but the search parameter is `organization`. For example, to search for all locations assoicated with an managingOrganization has ID `Hospital` should write as:

`GET [base]/Location?organization=Organization/Hospital`

You can also search for locations associated with the managing organizations by name or other criteria. For example, to search for all locations associated with an organization with the name of `Hartford General Hospital`:

`GET [base]/Location?organization:Organization.name=Hartford General Hospital`

You can add additional search criteria to further narrow down your search results. For example, to search for all locations associated with the `Hartford General Hospital` organization that have a status of `active`:

`GET [base]/Location?organization:Organization.name=Hartford General Hospital&status=active`

#### Including other resources in search result
You can search for all Locations and their associated related resources (in this case, organization) which are managering some of locations. The _include parameter to indicate that the managingOrganization resources be included in the result. 

`GET [base]//Location?_include=Location:organization`

#### Search location-boundary-geojson
GeoJSON encodes spatial data structures, including points, lines, polygons, and multi-part collections of these types. It is a common format for representing simple geographic features along with their non-spatial attributes. For example, a polygon area for Washington, D.C. is represented as:
```json
{
  "type"": ""Feature",
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [-77.119759, 38.934343],
        [-77.041697, 38.99511],
        [-76.910535, 38.892912],
        [-77.038088, 38.791015],
        [-77.119759, 38.934343]
      ]
    ]
  },
  "properties": {
    "name"": "Washington, D.C."
  }
}
```
##### How to populate the location-boundary-geojson data in Location resource
The data type of the location-boundary-geojson is Attachment, with the contentType set to application/geo+json and the data formatted as base64Binary. To represent a polygon area for Washington, D.C., you can use a JSON to Base64 converter to transform the JSON data into base64Binary format, which will look like this:
```json
{
  "resourceType" : "Location",
  "id" : "wash-dc-metro",
  "meta" : {
    "profile" : ["http://hl7.org/fhir/uv/vhdir/StructureDefinition/vhdir-location"]
  },
  "text" : {
    "status" : "extensions",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Location</b><a name=\"wash-dc-metro\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Location &quot;wash-dc-metro&quot; </p><p style=\"margin-bottom: 0px\">Profile: <code>http://hl7.org/fhir/uv/vhdir/StructureDefinition/vhdir-location</code></p></div><p><b>Location Boundary (GeoJSON)</b>: </p><p><b>status</b>: active</p><p><b>name</b>: <span title=\"  this record is active  \">Washington, DC metro area</span></p><p><b>form</b>: Area <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-location-physical-type.html\">Location type</a>#area)</span></p></div>"
  },
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/location-boundary-geojson",
    "valueAttachment" : {
      "contentType" : "application/geo+json",
      "data" : "VGhlbWU6IA0KUmF3UGFyc2VkDQp7InR5cGUiOiJGZWF0dXJlQ29sbGVjdGlvbiIsInByb3BlcnRpZXMiOnsia2luZCI6InN0YXRlIiwic3RhdGUiOiJEQyJ9LCJmZWF0dXJlcyI6Ww0KeyJ0eXBlIjoiRmVhdHVyZSIsInByb3BlcnRpZXMiOnsia2luZCI6ImNvdW50eSIsIm5hbWUiOiJEaXN0cmljdCBvZiBDb2x1bWJpYSIsInN0YXRlIjoiREMifSwiZ2VvbWV0cnkiOnsidHlwZSI6Ik11bHRpUG9seWdvbiIsImNvb3JkaW5hdGVzIjpbW1tbLTc3LjAzNTMsMzguOTkzOV0sWy03Ny4wMDI0LDM4Ljk2NjVdLFstNzYuOTA5MywzOC44OTUzXSxbLTc3LjA0MDcsMzguNzkxMl0sWy03Ny4wNDYyLDM4Ljg0MDVdLFstNzcuMDQwNywzOC44NzM0XSxbLTc3LjExNzQsMzguOTMzNl1dXV19fQ0KXX0=",
      "url" : "https://github.com/OpenDataDE/State-zip-code-GeoJSON/raw/master/dc_district_of_columbia_zip_codes_geo.min.json",
      "size" : "389"
    }
  }],
  "status" : "active",
  "name" : "Washington, DC metro area",
  "form" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/location-physical-type",
      "code" : "area",
      "display" : "Area"
    }]
  }
}
```
##### How to search location-boundary-geojson
The special contains search parameter tests whether the provided geocoded point(s) (expressed as [latitude]|[longitude] using the WGS84 datum) are within the defined boundary. Support for multiple points can also be provided using the , syntax, which is interpreted as the location returned in the search containing at least one of the provided coordinates. For example, for the Washington, D.C. polygon area:

`GET [base]/Location?contains=-77.119759|38.934343,-77.041697|38.99511,-76.910535|38.892912,-77.038088|38.791015,-77.119759|38.934343`

---

// File: input/intro-notes/StructureDefinition-ndh-Network-intro.md

### Scope and Usage
- In The National Directory of Healthcare Providers & Services (NDH) IG,  individuals and organizations are represented as participants in a Network through the practitionerRole and organizationAffiliation resources, respectively.

- The Network profile is based on USCore Organization Profile. However, the NPI and CLIA identifier types, which are Must-Support, are clearly intended for provider organizations only and are not expected to be populated for other organization types.

- The NDH Network and Organization profiles are both based on the Organization profile. To selectively query only Network profiles, search for type = 'ntwk'. To selectively query only Organization profiles, the type parameter is optional. However, you can provide any value defined in the [Organization Type Value Set](ValueSet-OrgTypeVS.html).

- When the contact is a department name, rather than a human (e.g., patient help line), include a blank family and given name, and provide the department name in contact.name.text.

- Note that the relationship between InsurancePlans and Networks is many-to-many. A plan may be associated with multiple networks, and a network may be associated with many plans. In this IG, this is modeled by having InsurancePlans reference networks (directionality of relationship supports this).

- To use the location-reference extension to indicate a network coverage area, the preferred form of reference is to create a Location instance with the State or region specified, and possibly provide a GeoJSON.  







---

// File: input/intro-notes/StructureDefinition-ndh-Network-notes.md

### Search Parameters
#### Search Parameter defined by the NDH IG

In order to obtain information related to the Network resource, which is a derivative of the Organization resource, it is necessary to include the **type=ntwk** parameter in your search query.

<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **SearchParameter Name** | **Type** | **Example** |
|---------------------------|----------|-------------|
| [coverage-area](SearchParameter-network-coverage-area.html) |	reference | `GET [base]/Organization?type=ntwk&coverage-area.address-state=CT`|
| [verification-status](SearchParameter-organization-verification-status.html) | token | `GET [base]/Organization?type=ntwk&verification-status=complete` |

This search returns networks have coverage in the State of CT. 

#### Search Parameter defined by FHIR Search Parameter Registry and used by the NDH IG 
Since there is no direct individual url for each Search Parameter defined by FHIR Serach Parameter Registry, we have provided the following links for you to access more information about them.

- [Search Parameter Registry](https://hl7.org/fhir/R4/searchparameter-registry.html)  
- [Network Search Parameter from Registry](https://hl7.org/fhir/R4/organization.html#search)


<style>
    
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>


| **SearchParameter Name** | **Type** | **Example** |
|--------------------------|----------|-------------|
| active | token |`GET [base]/Organization?type=ntwk&active=true` |
| address | string |`GET [base]/Organization?type=ntwk&address=123 Ravissant Dr` |
| address-city | string |`GET [base]/Organization?type=ntwk&address-city=Coconut Creek` |
| address-country | string |`GET [base]/Organization?type=ntwk&address-country=USA` |
| address-postalcode | string |`GET [base]/Organization?type=ntwk&address-postcode=12345` |
| address-state | string |`GET [base]/Organization?type=ntwk&address-state=FL` |
| address-use | token |`GET [base]/Organization?type=ntwk&address-use=work` |
| endpoint | reference |`GET [base]/Organization?type=ntwk&endpoint.connection-type=hl7-fhir-rest` |
| identifier | token |`GET [base]/Organization?type=ntwk&identifier=12345` |
| name | string |`GET [base]/Organization?type=ntwk&name=Florida Blue` |
| partof | reference |`GET [base]/Organization?type=ntwk&partof.name=Florida Blue` |
| type	token |`GET [base]/Organization?type=ntwk` |


#### _include Search Parameter
<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **include** | **Example** |
|-----------------|-------------|
| Organization:coverage-area |`GET [base]/Organization?type=ntwk&_include=Organization:coverage-area` |

#### _revinclude Search Parameter
<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **_revinclude** | **Example** |
|--------------|------------------|
| HealthcareService:network |`GET [base]/Organization?type=ntwk&_revinclude=HealthcareService:network`|
| HealthcareService:new-patient-from-network |`GET [base]/Organization?type=ntwk&_revinclude=HealthcareService:new-patient-from-network` |
| InsurancePlan:coverage-network |`GET [base]/Organization?type=ntwk&_revinclude=InsurancePlan:coverage-network` |
| InsurancePlan:plan-network |`GET [base]/Organization?type=ntwk&_revinclude=InsurancePlan:plan-network` |
| InsurancePlan:network |`GET [base]/Organization?type=ntwk&_revinclude=InsurancePlan:network` |
| Location:new-patient-from-network |`GET [base]/Organization?type=ntwk&_revinclude=Location:new-patient-from-network` |
| OrganizationAffiliation:network |`GET [base]/Organization?type=ntwk&_revinclude=OrganizationAffiliation:network` |
| PractitionerRole:network |`GET [base]/Organization?type=ntwk&_revinclude=PractitionerRole:network` |
| PractitionerRole:new-patient-from-network |`GET [base]/Organization?type=ntwk&_revinclude=PractitionerRole:new-patient-from-network` |


---

// File: input/intro-notes/StructureDefinition-ndh-Organization-intro.md

### Boundraries and Relationships
The Organization resource is commonly structured as a hierarchy of organization resources, where the part-of property is used to indicate the relationship between child and parent organizations. This hierarchy serves to convey the conceptual structure of the organization. Organization has following key attributes:
1. A unique logical identifier that identifies the organization as an entity.
2. The name of the organization as known to humans.
3. Telecommunication identifiers that can be used to reach the organization.
4. Information about any large organizations that the organization might be part of.
5. One or more endpoints for electronic communication and data exchange.

Note:  The NDH Organization and Network profiles are both based on the Organization profile. To selectively query only Network profiles, search for type = 'ntwk'. To selectively query only Organization profiles, the type parameter is optional. However, you can provide any value defined in the [Organization Type Value Set](ValueSet-OrgTypeVS.html).



---

// File: input/intro-notes/StructureDefinition-ndh-Organization-notes.md

### Search Parameters
#### Search Parameter defined by the NDH IG


<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **SearchParameter Name** | **Type** | **Example** |
|---------------------------|----------|-------------|
| [verification-status](SearchParameter-organization-verification-status.html) | token | `GET [base]/Organization?verification-status=complete` |

#### Search Parameter defined by FHIR Search Parameter Registry and used by the NDH IG 
Since there is no direct individual url for each Search Parameter defined by FHIR Serach Parameter Registry, we have provided the following links for you to access more information about them.

- [Search Parameter Registry](https://hl7.org/fhir/R4/searchparameter-registry.html)  
- [Organization Search Parameter from Registry](https://hl7.org/fhir/R4/organization.html#search)

<style>
    
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>


| **SearchParameter Name** | **Type** | **Example** |
|--------------------------|----------|-------------|
| active | token |`GET [base]/Organization?active=true` |
| address | string |`GET [base]/Organization?address=123 Ravissant Dr` |
| address-city | string |`GET [base]/Organization?address-city=Coconut Creek` |
| address-country | string |`GET [base]/Organization?address-country=USA` |
| address-postalcode | string |`GET [base]/Organization?address-postcode=12345` |
| address-state | string |`GET [base]/Organization?address-state=FL` |
| address-use | token |`GET [base]/Organization?address-use=work` |
| endpoint | reference |`GET [base]/Organization?endpoint.connection-type=hl7-fhir-rest` |
| identifier | token |`GET [base]/Organization?identifier=12345` |
| name | string |`GET [base]/Organization?name=Florida Blue` |
| partof | reference |`GET [base]/Organization?partof.name=Florida Blue` |

#### _include Search Parameter
<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **include** | **Example** |
|-----------------|-------------|
| Organization:endpoint |`GET [base]/Organization?_include=Organization:endpoint` |
| Organization:partof |`GET [base]/Organization?_include=Organization:partof` |

#### _revinclude Search Parameter
<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **_revinclude** | **Notes** |
|-----------------------|--------------------|
| CareTeam:organization | |
| Endpoint:organization | |
| HealthcareService:organization | HealthcareService.providedBy |
| InsurancePlan:administered-by | |
| InsurancePlan:owned-by | |
| Location:organization | |
| OrganizationAffiliation:participating-organization | |
| OrganizationAffiliation:primary-organization | |
| Practitioner:qualification-issuer |
| PractitionerRole:organization | |

#### Special Search Parameters
The search parameters outlined above are straightforward for basic scenarios but have limitations in handling complex combination queries. To enhance these capabilities, employing the special search parameters [_filter](https://hl7.org/fhir/R5/search_filter.html#3.2.3) is recommended.







---

// File: input/intro-notes/StructureDefinition-ndh-OrganizationAffiliation-intro.md

### Background & Scope
OrganizationAffiliation resource is designed to outline connections between multiple organizations. This includes details on the services provided by one organization to another, the location(s) where services are available, the electronic endpoints used, and other relevant information.

OrganizationAffiliation is useful for defining relationships between organizations that do not have a hierarchical structure. For instance:

- One organization may provide services to another organization
- Two or more organizations may collaborate in a partnership or joint venture
- An organization may be a member of another organization, without being owned by it (for example, a hospital can be a member of the American Hospital Association or a health information exchange network).

OrganizationAffiliation and practitionerRole share a similar structure. However, while practitionerRole references both practitioner and organization, OrganizationAffiliation involves references to a participatingOrg and an organization. The participating organization provides "services" to the primary organization, just as a practitioner provides services to an organization. To illustrate this, here are examples for the three cases mentioned earlier:

The participating organization provides services to the primary organization.
In a joint venture, the joint venture itself is the primary organization, while partners within the joint venture are considered participating organizations. This requires two instances of the OrganizationAffiliation resource.
In an association, the association is the primary organization, and its members are participating organizations.
Additionally, OrganizationAffiliation is used to indicate when an organization provides services for a health insurance provider network.

Each instance has its own time period and can optionally include links to specific related services or locations that are accessible. These referenced locations or services should be associated with the participating organization and may available to the primary organization.

An OrganizationAffiliation role could encompass various healthcare services at multiple locations. When different locations provide distinct services, it is recommended to employ multiple OrganizationAffiliation resources and to separate them by location.

To associate an organization to an active network, it could be achieved by modifying the OrganizationAffiliation.period or for the organization. To change a network, it is necessary to create a new OrganizationAffiliation. 

An organization has the capability to be affiliated with multiple networks. However, to ensure clarity and avoid confusion, it is recommended that each OrganizationAffiliation corresponds to only one network, even if the affiliations occur at different times.


---

// File: input/intro-notes/StructureDefinition-ndh-OrganizationAffiliation-notes.md

### Search Parameters
#### Search Parameter defined by the NDH IG
<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **SearchParameter Name** |**Type**| **Example** |
| [location](SearchParameter-organizationaffiliation-location.html) | reference |`GET [base]/OrganizationAffiliation?location.address-state=CT` |
| [participating-organization](SearchParameter-organizationaffiliation-participating-organization.html) | reference |`GET [base]/OrganizationAffiliation?participating-organization.address-state=FL`|
| [primary-organization](SearchParameter-organizationaffiliation-primary-organization.html) | reference |`GET [base]/OrganizationAffiliation?primary-organization.address-state=FL` |
| [verification-status](SearchParameter-organizationaffiliation-verification-status.html) | token | `GET [base]/OrganizationAffiliation?verification-status=complete` |

#### Search Parameter defined by FHIR Search Parameter Registry and used by the NDH IG 
Since there is no direct individual url for each Search Parameter defined by FHIR Serach Parameter Registry, we have provided the following links for you to access more information about them.

- [Search Parameter Registry](https://hl7.org/fhir/R4/searchparameter-registry.html)  
- [OrganizationAffiliation Search Parameter from Registry](https://hl7.org/fhir/R4/organizationaffiliation.html#search)

<style>
    
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>


| **SearchParameter Name** | **Type** | **Example** |
|--------------------------|----------|-------------|
| endpoint | reference |`GET [base]/OrganizationAffiliation?endpoint.connection-type=hl7-fhir-rest` |
| identifier | token |`GET [base]/OrganizationAffiliation?identifier=123456` |
| network |  reference |`GET [base]/OrganizationAffiliation?network.type=ntwk&network.address-state=FL` |
| role | token |`GET [base]/OrganizationAffiliation?role=group` |
| service | reference |`GET [base]/OrganizationAffiliation?service.address-state=FL` |
| specialty | token |`GET [base]/OrganizationAffiliation?specialty=103T00000X` |


#### _include Search Parameter
<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **_include** | **Example** |
|--------------|-------------|
| OrganizationAffiliation:network |`GET [base]/OrganizationAffiliation?_include=OrganizationAffiliation:network` |
| OrganizationAffiliation:participating-organization |`GET [base]/OrganizationAffiliation?_include=OrganizationAffiliation:participating-organization` |
| OrganizationAffiliation:primary-organization |`GET [base]/OrganizationAffiliation?_include=OrganizationAffiliation:primary-organization` |

#### _revinclude Search Parameter
None

#### Special Search Parameters
The search parameters outlined above are straightforward for basic scenarios but have limitations in handling complex combination queries. To enhance these capabilities, employing the special search parameters [_filter](https://hl7.org/fhir/R5/search_filter.html#3.2.3) is recommended.

#### Why is the Qualification Extension Needed in Organization Affiliation?
The qualification extension in the OrganizationAffiliation Resource is significant as it offers a valid use case in real-world practice. For instance, an oncology group seeking privileges to practice in a hospital setting typically requires various approvals and certifications. This includes each physician in the group being licensed to practice medicine in the state where the hospital is located. Additionally, each physician must apply for and be granted the privilege to practice at the specific hospital. Furthermore, the oncology practice itself may also seek accreditation from organizations such as the Commission on Cancer (CoC) or the Quality Oncology Practice Initiative (QOPI), which can bolster its reputation and demonstrate a commitment to quality care. The qualifications of the oncology practice reflect its specific credential to the hospital where they practice. Although these qualifications can be documented in the oncology practice organization resource, an organization may have several qualifications, of which only certain ones are relevant to a specific practice setting. Therefore, it is necessary for both the OrganizationAffiliation Resource and the Organization Resource to include a qualification extension that serves different functions across various contexts.


#### Search 
Search OrganizationAffiliation resource based on the role of the participatingOrganization:
Get [base]/OrganizationAffiliation?code=HieInitiator  

<br/>
Search OrganizationAffiliation resources which have participatingOrganization present:
Get [base]/OrganizationAffiliation?_include=OrganizationAffiliation:participatingOrganization  

<br/>
Search Organization resource which associate with OrganizationAffiliation:
Get [base]/Organization?_revinclude=OrganizationAffiliation:participatingOrganization

---

// File: input/intro-notes/StructureDefinition-ndh-Practitioner-notes.md

### Search Parameters
#### Search Parameter defined by the NDH IG
<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **SearchParameter Name** | **Type** | **Example** |
|---------------------------|----------|-------------|
| [qualification-issuer](SearchParameter-practitioner-qualification-issuer.html) | reference |`GET [base]/Practitioner?qualification-issuer.name=Florida License Board`|
| [qualification-code](SearchParameter-practitioner-qualification-code.html) | token |`GET [base]/Practitioner?qualification-code=MD` |
| [endpoint](SearchParameter-practitioner-endpoint.html) | reference | `GET [base]/Practitioner?endpoint.identifier={system}|{value}` |
| [verification-status](SearchParameter-practitioner-verification-status.html) | token | `GET [base]/Practitioner?verification-status=complete` |


#### Search Parameter defined by FHIR Search Parameter Registry and used by the NDH IG 
- [Search Parameter Registry](https://hl7.org/fhir/R4/searchparameter-registry.html)  
- [Practitioner Search Parameter from Registry](https://hl7.org/fhir/R4/practitioner.html#search)

<style>
    
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>


| **SearchParameter Name** | **Type** | **Example** |
|--------------------------|----------|-------------|
| active |	token |`GET [base]/Practitioner?active=true` |
| name | string |`GET [base]/Practitioner?name=Joe Smith` |
| gender | token |`GET [base]/Practitioner?gender=male` |
| identifier | token |`GET [base]/Practitioner?identifier=12345678` |



#### _include Search Parameter
<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **_include** | **Example** |
|--------------|-------------|
| Practitioner:endpoint |`GET [base]/Practitioner?_include= Practitioner:endpoint` |
| Practitioner:qualification-issuer |`GET [base]/Practitioner?_include=Practitioner:qualification-issuer` |

#### _revinclude Search Parameter
<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **_revinclude** |
|-----------------|
| PractitionerRole:practitioner |



---

// File: input/intro-notes/StructureDefinition-ndh-PractitionerRole-notes.md

### Search Parameters
#### Search Parameter defined by the NDH IG
<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **SearchParameter Name** | **Type** | **Example** |
|---------------------------|----------|-------------|
| [location](SearchParameter-practitionerrole-location.html) | reference | `GET [base]/PractitionerRole?location.address-state=FL`  |
| [network](SearchParameter-practitionerrole-network.html)  | reference |`GET [base]/PractitionerRole?network.type=ntwk$network.name=Florida Blue` |
| [new-patient](SearchParameter-practitionerrole-new-patient.html) | token |`GET [base]/PractitionerRole?new-patient=newpt`  |
| [new-patient-from-network](SearchParameter-practitionerrole-new-patient-from-network.html) | reference |`GET [base]/PractitionerRole?new-patient-from-network=newpt`  |
| [organization](SearchParameter-practitionerrole-organization.html) | reference | `GET [base]/PractitionerRole?organization.name=Florida Blue`  |
| [verification-status](SearchParameter-practitionerrole-verification-status.html) | token | `GET [base]/PractitionerRole?verification-status=complete` |

#### Search Parameter defined by FHIR Search Parameter Registry and used by the NDH IG 
Since there is no direct individual url for each Search Parameter defined by FHIR Serach Parameter Registry, we have provided the following links for you to access more information about them.

- [Search Parameter Registry](https://hl7.org/fhir/R4/searchparameter-registry.html)  
- [PractitionerRole Search Parameter from Registry](https://hl7.org/fhir/R4/practitionerrole.html#search)

<style>
    
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>


| **SearchParameter Name** | **Type** | **Example** |
|--------------------------|----------|-------------|
| active | token |`GET [base]/PractitionerRole?active=true`  |
| endpoint | reference | `GET [base]/PractitionerRole?endpoint.status=active` |
| identifier | token |`GET [base]/PractitionerRole?identifier=1234567`  |
| practitioner | reference |`GET [base]/PractitionerRole?practitoner.name=Joe Smith`  |
| role | token |`GET [base]/PractitionerRole?role=att`  |
| service | reference |`GET [base]/PractitionerRole?service.address-state=FL`  |
| specialty | token |`GET [base]/PractitionerRole?specialty=103TF0000X`  |

#### _include Search Parameter
<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **_include** | **Example** |
|--------------|-------------|
 PractitionerRole:endpoint |`GET [base]/PractitionerRole?_include=PractitionerRole:endpoint` |
| PractitionerRole:location |`GET [base]/PractitionerRole?_include=PractitionerRole:location` |
| PractitionerRole:network |`GET [base]/PractitionerRole?_include=PractitionerRole:network` |
| PractitionerRole:new-patient-from-network |`GET [base]/PractitionerRole?_include= PractitionerRole:new-patient-from-network` |
| PractitionerRole:organization |`GET [base]/PractitionerRole?_include=PractitionerRole:organization` |
| PractitionerRole:practitioner |`GET [base]/PractitionerRole?_include=PractitionerRole:practitioner` |
| PractitionerRole:service |`GET [base]/PractitionerRole?_include=PractitionerRole:service` |

#### _revinclude Search Parameter
None

#### Special Search Parameters
The search parameters outlined above are straightforward for basic scenarios but have limitations in handling complex combination queries. To enhance these capabilities, employing the special search parameters [_filter](https://hl7.org/fhir/R5/search_filter.html#3.2.3) is recommended.

#### The reason the cardinality of PractitionerRole.network is 0..1
The network cardinality sets to 0..1 is to meet the requirements of linking PractitionerRole with a specific time period. The duration a practitioner spends in a network often differs across networks, and it's unusual for these periods to coincide. When a Practitioner is incorporated into a new network, the relevant time frame adheres to that specific network's agreement or contract with the practitioner. The same principle applies when the practitioner departs from the network.

### How resource ownership functions when multiple entities can provide information for the same resource
Assuming that the Practitioner "owns" the practitionerRole, the practitioner must attest to the information related to their participation in a specific network. If there is no existing network declaration associated with that practitionerRole, the practitioner should update the practitionerRole accordingly. However, if a network declaration already exists for that role, the practitioner should create a new practitionerRole and include the network information in this role. This process is also applicable to other individuals who have ownership responsibilities for the practitionerRole.

#### PractitionerRole.availabeTime and PractitionerRole.notAvailable
Given that both 'availableTime' and 'notAvailable' time are optional elements, they can be excluded for intricate or often changing schedules. These fundamental elements are designed for use where providers have fairly stable schedules (such as clinic schedules that need to be communicated clearly as part of the directory resources), as opposed to an on-call practitioner's schedule.

#### PractitionerRole, Location, Address
The address for a practitionerRole should be located on the Location reference.  There is no address on the practitionerRole base resource since the location reference of practitionerRole has an address that should be used by the practitioner as part of their role. Each practitionerRole can support multiple locations. If two practitioners work at the same facility and each of them has their own non-service delivery locations, in addition to the common service delivery location. The guidance descripted in the diagram below:

<figure>
    {% include PractitionerRolePractitioner2Address.svg %}
    <figcaption> </figcaption>
</figure>

---

// File: input/intro-notes/StructureDefinition-ndh-Restriction-intro.md

### Background & Scope
The FHIR specification contains a security meta tag which can be used to inform systems of the sensitivity of resources. The tag can be used by access control mechanisms to ensure content isn’t exposed inappropriately. However, the security meta tag can only indicate sensitivity at the resource level, and provides relatively little context about the restriction.

We anticipate that the operational policies and legal agreements of NDH will offer clarity regarding the data stakeholders can access. These policies, if needed, will mandate stakeholders to preserve the privacy and confidentiality of any sensitive data within local downstream environments. In order to ensure this, we have integrated this 'Restriction' profile, which is based on the 'Consent' resource. The purpose of this profile is to communicate any limitations associated with an entire specific resource instance, or certain elements of a specific resource instance for the purpose of resource instance collection or acquisition. A resource instance that contains restricted elements will **always have the relevant restriction resource(s) as contained resources**.  However, restriction resource(s) can be queried independently of a resource instance. For instance:

The entirety of a particular women's shelter HealthcareService resource instance can be restricted. See the example below:
***[HealthcareService/HealthcareServiceWomenShelterAll]***

The location and phone number of a specific women's shelter HealthcareService resource instance can be restricted. See the example below:
***[HealthcareService/HealthcareServiceWomenShelter]***



{% include markdown-link-references.md %}



---

// File: input/intro-notes/StructureDefinition-ndh-Restriction-notes.md

#### Search Parameter defined by FHIR Search Parameter Registry and used by the NDH IG 
Since there is no direct individual url for each Search Parameter defined by FHIR Serach Parameter Registry, we have provided the following links for you to access more information about them.

- [Search Parameter Registry](https://hl7.org/fhir/R4/searchparameter-registry.html)  
- [Concent Search Parameter from Registry](https://hl7.org/fhir/R4/consent.html#search)

<style>
    
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>


| **SearchParameter Name** | **Type** |
|--------------------------|----------|
| action | token |
| actor | reference |
| categary | token |
| purpose | token |
| security-lable | token |
| scope | token | 
| status | token |


---

// File: input/intro-notes/StructureDefinition-ndh-Verification-intro.md

This profile sets minimum expectations for searching and/or fetching information associated with verification. It identifies which core elements, extensions, vocabularies and value sets SHALL be present in the VerificationResult resource when using this profile.

### Scope and Usage
Verification is critical for ensuring that users of a healthcare directory can rely upon the data in the directory as being accurate, not just meeting a technical specification. This Profile was developed to support the need for attested and/or verified provider data in many different healthcare workflows. It profiles the verificationResult resource to convey information about the attestation and/or verification status of any data in the National Directory of Healthcare Providers & Services (NDH), including how it was attested/verified, who attested/verified it, and where the data came from.

The Verification Resource Instance is created in two ways: either at the time of verification in the NDH or generated from the internal log files upon a request from the distributed work directories. For a given resource instance, it may be associated with multiple Verification resource instances. A given Verification resource instance may contain multiple target resources, which are related and are verified together at a given date time. 

### Relationship between VerificationResult Profile and Verification status Extension
The verification status extension is utilized in all NDH resource profiles, except for Restriction and Verification. Its purpose is to indicate the verification status of a given instance of an NDH resource.

The VerificationResult resource instances provide information on which verification process was performed, what was verified, when the verification took place, who performed the verification, and how it was verified for a given instance of a resource.

It is important to note that even if a resource instance has a verification status of "not-required," there shall still be a VerificationResult resource instance associated with it. The VerificationResult would provide details on why the verification was not required, how it was determined that verification was not required, and any other relevant information related to the verification process.

<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

**Verification** | **Value**
.target | Location/123
.need | none
.status | attested
.statusDate | 2023/04/04
.validationType | nothing
.validationProcess | in-context
.failureAction | none
.attestation.who | Organization/123
.attestation.communicationMetod | manual, portal
.attestation.date | 2023/04/04





---

// File: input/intro-notes/StructureDefinition-ndh-Verification-notes.md

### Search Parameters
#### Search Parameter defined by the NDH IG
<style>
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **SearchParameter Name** | **Type** | **Example** |
|---------------------------|----------|-------------|
| [attestation-who](SearchParameter-verificationresult-attestation-who.html) | reference | `GET [base]/VerificationResult?attestation-who=[id]`|
| [primarysource-validation-status](SearchParameter-verificationresult-primarysource-validation-status.html) | token |`GET [base]/VerificationResult?primarysource-validation-status=[code]` |
| [primarysource-type](SearchParameter-verificationresult-primarysource-type.html) | token | `GET [base]/VerificationResult?primarysource-type=[code]`|
| [status](SearchParameter-verificationresult-status.html) | token | `GET [base]/VerificationResult?status=[code]`|
| [target](SearchParameter-verificationresult-target.html) | reference | `GET [base]/VerificationResult?target=[id]`|

#### Search Parameter defined by FHIR Search Parameter Registry and used by the NDH IG 
None

#### _include Search Parameter
<style>  
    th{border: solid 2px lightgrey;}
    td{border: solid 2px lightgrey;}
</style>

| **_include** | **Example** |
|--------------|-------------|
| VerificationResult:verificationresult-target | `GET [base]/VerificationResult?_include=VerificationResult:target` |
| VerificationResult:verificationresult-attestation-who | `GET [base]/VerificationResult?_include=VerificationResult:attestation-who` |

#### _revInclude Search Parameter
None





---

// File: input/fsh/All-Aliases.fsh



//US Core
Alias:   $USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias:   $USCoreOrganization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias:   $USCoreLocation = http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
Alias:   $USCorePractitionerRole = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole
Alias:   $USCareTeam = http://hl7.org/fhir/us/core/StructureDefinition/us-core-careteam

//Alias:  $US-core-provider-role-vs = http://hl7.org/fhir/us/core/ValueSet/us-core-provider-role
//Alias:  $US-core-provider-specialty-vs = http://hl7.org/fhir/us/core/ValueSet/us-core-provider-specialty


//Alias: $digitalcertificatetype = http://hl7.org/fhir/uv/vhdir/ValueSet/digitalcertificatetype
//Alias: $digitalcertificatetype = http://hl7.org/fhir/uv/vhdir/StructureDefinition/digitalcertificate
//Alias: $digitalcertificateuse = http://hl7.org/fhir/uv/vhdir/ValueSet/digitalcertificateuse
//Alias: $digitalcertificatestandard = http://hl7.org/fhir/uv/vhdir/ValueSet/digitalcertificatestandard
//Alias: $digitalcertificatetrustframework = http://hl7.org/fhir/uv/vhdir/ValueSet/digitalcertificatetrustframework


Alias:   $GeolocationExtension = http://hl7.org/fhir/StructureDefinition/geolocation  //defined in 4.3B
Alias:   $R4GeoJSONExtension = http://hl7.org/fhir/StructureDefinition/location-boundary-geojson
Alias:   $LocationStatus = http://hl7.org/fhir/location-status 

Alias:   $IgFormatCodeVS = http://hl7.org/fhir/ValueSet/formatcodes //defined in 4.3B

Alias:   $HL7PractitionerRoleCS = http://terminology.hl7.org/CodeSystem/practitioner-role
Alias:   $HL7OrganizationRoleCS = http://hl7.org/fhir/organization-role

Alias:  $NUCCProviderTaxonomy = http://nucc.org/provider-taxonomy
Alias:  $NUCCProviderTaxonomyCS = http://terminology.hl7.org/CodeSystem/v3-nuccProviderCodes

Alias:   $ServiceTypeCS = http://terminology.hl7.org/CodeSystem/service-type 

Alias:  $V2table0360CS = http://terminology.hl7.org/CodeSystem/v2-0360 
Alias:  $V3ActReason = http://terminology.hl7.org/CodeSystem/v3-ActReason

Alias: $FHIRVersionCS = http://hl7.org/fhir/FHIR-version
Alias: $FHIRVersionVS = http://hl7.org/fhir/ValueSet/FHIR-version

Alias: $OrganizationPeriodExt = http://hl7.org/fhir/StructureDefinition/organization-period


Alias: $DaysOfWeekVS  = http://hl7.org/fhir/ValueSet/days-of-week
Alias: $paymentTypeVS = http://terminology.hl7.org/ValueSet/v2-0570

Alias: $VerificationTypeCS = http://terminology.hl7.org/CodeSystem/validation-type
//Alias: $verificationresult-primary-source-type = http://hl7.org/fhir/ValueSet/verificationresult-primary-source-type
//Alias: $verificationresult-communication-method_1 = http://hl7.org/fhir/ValueSet/verificationresult-communication-method
Alias: $verificationresult-validation-type = http://hl7.org/fhir/ValueSet/verificationresult-validation-type
Alias: $VerificationFailureActionCS = http://terminology.hl7.org/CodeSystem/failure-action
Alias: $ValidationProcessCS = http://terminology.hl7.org/CodeSystem/validation-process
Alias: $VerificationResultNeedCS = http://terminology.hl7.org/CodeSystem/need
Alias: $VerificationResultStatusCS = http://hl7.org/fhir/CodeSystem/status


//from Plan net ????
Alias: $QualificationStatusCS = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/QualificationStatusCS



//???Alias: $MinValueSet =  http://hl7.org/fhir/us/ndh/ValueSet/EndpointConnectionTypeVS

//NDH Alias
Alias: $NdhCareTeam = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-CareTeam
Alias: $NdhEndpoint = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-Endpoint
Alias: $NdhHealthcareService = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-HealthcareService
Alias: $NdhInsurancePlan = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-InsurancePlan
Alias: $NdhLocation = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-Location
Alias: $NdhNetwork = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-Network
Alias: $NdhOrganization = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-Organization
Alias: $NdhOrganizationAffiliation = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-OrganizationAffiliation
Alias: $NdhPractitioner = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-Practitioner
Alias: $NdhPractitionerRole = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-PractitionerRole


Alias: $NdhAcceptingPatientsCS = http://hl7.org/fhir/us/ndh/CodeSystem/AcceptingPatientsCS
Alias: $NdhAccessibilityCS = http://hl7.org/fhir/us/ndh/CodeSystem/AccessibilityCS
Alias: $NdhEndpointConnectionTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/EndpointConnectionTypeCS
Alias: $NdhEndpointPayloadTypeCS   = http://hl7.org/fhir/us/ndh/CodeSystem/EndpointPayloadTypeCS  
Alias: $NdhHealthcareServiceCategoryCS = http://hl7.org/fhir/us/ndh/CodeSystem/HealthcareServiceCategoryCS
//Alias: $NdhInsuranceProductTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/InsuranceProductTypeCS
Alias: $NdhInsurancePlanTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/InsurancePlanTypeCS
Alias: $NdhOrgTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/OrgTypeCS
Alias: $NdhOrgAliasTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/OrgAliasTypeCS
Alias: $NdhOrganizationAffiliationRoleCS = http://hl7.org/fhir/us/ndh/CodeSystem/OrganizationAffiliationRoleCS
Alias: $NdhOrganizationAffiliationRoleForHieCS = http://hl7.org/fhir/us/ndh/CodeSystem/OrganizationAffiliationRoleForHieCS
Alias: $NdhPractitionerRoleCS = http://hl7.org/fhir/us/ndh/CodeSystem/PractitionerRoleCS
Alias: $NdhQualificationStatusCS = http://hl7.org/fhir/us/ndh/CodeSystem/QualificationStatusCS
//Alias: $NdhValidationTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/ValidationTypeCS
Alias: $NdhVirtualModalitiesCS = http://hl7.org/fhir/us/ndh/CodeSystem/VirtualModalitiesCS
Alias: $NdhTrustFrameworkTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/TrustFrameworkTypeCS
Alias: $NdhPayerCharacteristicsCS = http://hl7.org/fhir/us/ndh/CodeSystem/NdhPayerCharacteristicsCS
Alias: $NdhSecureExchangeArtifactsCS = http://hl7.org/fhir/us/ndh/CodeSystem/NdhSecureExchangeArtifactsCS
Alias: $NdhAssociatedServersTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/NdhAssociatedServersTypeCS

//Other Alias
Alias:   $USPSStateCS = https://www.usps.com/
Alias:   $USPSState = http://hl7.org/fhir/us/core/ValueSet/us-core-usps-state
Alias:   $BCP47 = urn:ietf:bcp:47
Alias:   $BCP13 = urn:ietf:bcp:13
Alias:   $V3MimeCS = https://terminology.hl7.org/CodeSystem-v3-mime
Alias:   $NPICS = http://hl7.org/fhir/sid/us-npi
Alias:   $V3RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias:   $ConnectionTypeCS = http://terminology.hl7.org/CodeSystem/endpoint-connection-type
Alias:   $loinc = http://loinc.org
Alias:   $paymentTypeVS = http://terminology.hl7.org/ValueSet/v2-0570
Alias:   $paymentTypeCS = http://terminology.hl7.org/CodeSystem/v2-0570
Alias:   $ConsentScopeCS = http://terminology.hl7.org/CodeSystem/consentscope
Alias:   $ConsentStateCS = http://hl7.org/fhir/consent-state-codes
Alias:   $ConsentPolicyCS = http://terminology.hl7.org/CodeSystem/consentpolicycodes
Alias:   $EndpointPayloadTypeVS = http://hl7.org/fhir/ValueSet/endpoint-payload-type
Alias:   $MiMeTypeVS = http://hl7.org/fhir/ValueSet/mimetypes
Alias:   $V3HL7FormatCodesVS = http://terminology.hl7.org/ValueSet/v3-HL7FormatCodes
Alias:   $HL7V3ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias:   $HL7ConsentCategoryVS = http://hl7.org/fhir/ValueSet/consent-category
Alias:   $IHEFormatCodeCS = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode
Alias:   $HL7DocumentFormatCodesCS = http://terminology.hl7.org/CodeSystem/v3-HL7DocumentFormatCodes
Alias:   $CareTeamCategoryVS = http://hl7.org/fhir/ValueSet/care-team-category
Alias:   $ServiceProvisionConditionsVS = http://hl7.org/fhir/ValueSet/service-provision-conditions
Alias:   $ConditionCode = http://hl7.org/fhir/ValueSet/condition-code //based on SNOMED CT
Alias:   $ProcedureCode = http://hl7.org/fhir/ValueSet/procedure-code //based on SNOMED CT
//Alias:   $ProgramVS = http://hl7.org/fhir/ValueSet/program
Alias:   $ServiceReferralMethodVS = http://hl7.org/fhir/ValueSet/service-referral-method
Alias:   $ConsentActionVS = http://hl7.org/fhir/ValueSet/consent-action
Alias:   $VerificationresultPrimarySourceTypeVS = http://hl7.org/fhir/ValueSet/verificationresult-primary-source-type
Alias:   $LanguagesVS = http://hl7.org/fhir/ValueSet/languages
Alias:   $VerificationresultPrimarySourceTypeCS = http://terminology.hl7.org/CodeSystem/primary-source-type
Alias:   $ValidationstatusCS = http://terminology.hl7.org/CodeSystem/validation-status
Alias:   $V3ParticipationType = http://terminology.hl7.org/CodeSystem/v3-ParticipationType


Alias:   $practitionerQualificationTopic = http://ndh.org/topic/practitioner-qualification-create-modified-or-delete
Alias:   $webHookEndpoint = http://ndh.org/endpoint/webhook

Alias:   $ContactEntityType = http://terminology.hl7.org/CodeSystem/contactentity-type

Alias:   $IheMCSDEndpointTypesCS = https://profiles.ihe.net/ITI/mCSD/CodeSystem/MCSDEndpointTypes
Alias:   $ProgramCS = http://terminology.hl7.org/CodeSystem/program
Alias:   $ProgramVS = http://hl7.org/fhir/ValueSet/program
Alias:   $VerificationCommunicationMethodCS = http://terminology.hl7.org/CodeSystem/verificationresult-communication-method
Alias:   $VerificationresultCommunicationMethodVS = http://terminology.hl7.org/ValueSet/verificationresult-communication-method

Alias: $HealthcareProviderTaxonmyVS = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.114222.4.11.1066
Alias: $V3ActCredentialedCareCodeVS = http://terminology.hl7.org/ValueSet/v3-ActCredentialedCareCode
Alias: $HL7VS-degreeLicenseCertificate = http://terminology.hl7.org/ValueSet/v2-0360

Alias: $V3AdministrativeGender = http://terminology.hl7.org/CodeSystem/v3-AdministrativeGender
Alias: $V20066EmploymentStatusCS = http://terminology.hl7.org/CodeSystem/v2-0066

Alias: $DataAbsentReasonCS = http://terminology.hl7.org/CodeSystem/data-absent-reason

Alias: $ILRSpeakingScaleCS = http://terminology.hl7.org/CodeSystem/ILRSpeakingSkillScale
Alias: $ILRReadingScaleVS = http://terminology.hl7.org/ValueSet/ILRSpeakingSkillScale
Alias: $CredentialStatusCS = http://terminology.hl7.org/CodeSystem/professional-credential-status
Alias: $IdentifierStatusVS = http://terminology.hl7.org/ValueSet/professional-credential-status
Alias: $DeliveryMethodVS = http://terminology.hl7.org/ValueSet/service-delivery-method
Alias: $DeliveryMethodCS = http://terminology.hl7.org/CodeSystem/service-delivery-method
Alias: $InsuranceCoverageTypeCS = http://terminology.hl7.org/CodeSystem/insurance-coverage-type
Alias: $InsuranceCoverageTypeVS = http://terminology.hl7.org/ValueSet/insurance-coverage-type
Alias: $InsurancePlanTypeCS = http://terminology.hl7.org/CodeSystem/insuranceplan-plan-type
Alias: $InsurancePlanTypeVS = http://terminology.hl7.org/ValueSet/insuranceplan-plan-type
Alias: $InsuranceProductTypeCS = http://terminology.hl7.org/CodeSystem/insurance-product-type
Alias: $InsuranceProductTypeVS = http://terminology.hl7.org/ValueSet/insurance-product-type


---

// File: input/fsh/All-CapabilityStatement-Rules.fsh

// @Name:CapabilityStatement Rules
// @Description: Rules to populate a CapabilityStatement

Alias: $conf = http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation

RuleSet:       CapabilityCommon
* jurisdiction        = http://unstats.un.org/unsd/methods/m49/m49.htm#001
* status              = #active
* date                = "2022-11-01"
* publisher           = "HL7 International - Patient Administration Work Group"
* contact[0].telecom[0].system = #url
* contact[0].telecom[0].value  = "http://hl7.org/Special/committees/pafm"
* kind                = #requirements
* fhirVersion         = #4.0.1
* format[+]           = #xml
* format[+]           = #json
* meta.profile = "http://hl7.org/fhir/StructureDefinition/CapabilityStatement"


RuleSet: SupportedProfile(profile, conf)
* supportedProfile[+] = Canonical({profile})
  * extension[$conf].valueCode = {conf}

RuleSet: Interaction(code, conf, doc)
* interaction[+]
  * extension[$conf].valueCode = {conf}
  * code  = {code}
  * documentation = {doc}

RuleSet: SearchParam(name, def, type, conf, doc)
* searchParam[+]
  * extension[$conf].valueCode = {conf}
  * name = {name}
  * definition = "http://hl7.org/fhir/SearchParameter/{def}"
  * type = {type}
  * documentation = {doc}

RuleSet: SearchParamNdh(name, def, type, conf, doc)
* searchParam[+]
  * extension[$conf].valueCode = {conf}
  * name = {name}
  * definition = "http://hl7.org/fhir/us/ndh/SearchParameter/{def}"
  * type = {type}
  * documentation = {doc}

RuleSet: SearchInclude(include, conf)
* searchInclude[+] = {include}
  * extension[$conf].valueCode = {conf}

RuleSet: SearchRevInclude(revinclude, conf)
* searchRevInclude[+] = {revinclude}
  * extension[$conf].valueCode = {conf}

RuleSet: Operation(name, def, conf)
* operation[+]
  * extension[$conf].valueCode = {conf}
  * name = "{name}"
  * definition = "{def}"

/*

RuleSet: SupportResource (resource, expectation)
* rest.resource[+].type = #{resource}
* rest.resource[=].extension[0].url = $exp
* rest.resource[=].extension[0].valueCode = {expectation}

RuleSet: SupportProfile (profile, expectation)
// This rule set must follow a SupportResource rule set, and applies to that resource.
* rest.resource[=].supportedProfile[+] = "{profile}"
* rest.resource[=].supportedProfile[=].extension[0].url = $exp
* rest.resource[=].supportedProfile[=].extension[0].valueCode = {expectation}


RuleSet: SupportInteraction (interaction, expectation)
// This rule set must follow a SupportResource rule set, and applies to that resource.
* rest.resource[=].interaction[+].code = {interaction}
* rest.resource[=].interaction[=].extension[0].url = $exp
* rest.resource[=].interaction[=].extension[0].valueCode = {expectation}
*/





---

// File: input/fsh/Base-CS.fsh

CodeSystem: AcceptingPatientsCS
Title: "Accepting Patients Codes Code System"
Description: "Codes to identify if the practice is accepting new patients"
* ^experimental = false
* #nopt	"Not Accepting" "Not accepting patients"
* #newpt "Accepting" "Accepting patients"
* #existptonly "Accepting existing patients" "Accepting existing patients"
* #existptfam "Accepting existing patients and their families" "Accepting existing patients and members of their families"
* ^caseSensitive = true

CodeSystem: AccessibilityCS
Title: "Accessibility Code System"
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

/*
CodeSystem: CredentialStatusCS
Title: "Credential Status Code System"
Description: "This code system contains codes for indicating the status of a credential, such as an identifier or qualification."
* ^experimental = false
* #active	"active"	"The credential may be considered valid for use."
* #inactive "inactive"	"The credential may not be considered valid for use."
* #issued-in-error	"issued in error"	"The credential was mistakenly assigned and should not be considered valid for use."
* #revoked	"revoked"	"The credential was revoked by the issuing organization and should not be considered valid for use."
* #pending	"pending"	"The credential has not been officially assigned. It may or may not be considered valid for use."
* #unknown	"unknown"	"The status of this credential is unknown. It may or may not be considered valid for use."
* ^caseSensitive = true
*/

CodeSystem: ConsentScopeNdhCS
Title: "NDH ConsentScopeCodes Code System"
Description:  "This code system includes the Consent scope codes for National Healthcare Directory"
* ^experimental = false
* #directory-privacy "Directory Privacy Consent" "Global Use Agreement to access, use or disclose (share) information."
* ^caseSensitive = true

CodeSystem: ConsentPolicyRulesCS
Title: "National Healthcare Directory ConsentPolicyRules Code System"
Description:  "This code system includes Policy Rule codes."
* ^experimental = false
* #ndh-restriction "NDH Restriction" "NDH Agreement to access, use or disclose(share) information"
* #distributed-directory-restriction "Distributed Directory Restriction" "Distributed Directory Agreement to collect, access, use or disclose (share) information"
* ^caseSensitive = true

CodeSystem: ConsentCategoryNdhCS
Title: "National Healthcare Directory Consent Category Code System"
Description:  "This code system includes Directory Consent Category codes."
* ^experimental = false
* #DRC "Directory Restriction" "Directory Global Use Agreement to access, use or disclose (share) information"
* ^caseSensitive = true



CodeSystem: DigitalcertificateUseCS
Title: "Digitalcertificate Use Code System"
Description: "This code System includes the choice of use digital certification"
* ^experimental = false
* #signing "Signing" "A certificate issued for the purpose of digitally signing information to confirm the author and guarantee that the content has not been altered or corrupted since it was signed by use of a cryptographic hash."
* #encrypt "Encryption" "A certificate containing a public key that can encrypt or decrypt electronic messages, files, documents, or data transmissions, or establish or exchange a session key for these same purposes."
* #auth "Authentication" "A certificate which can be used to obtain assurance of the accuracy of the claimed identity of an entity."
* ^caseSensitive = true

/*
CodeSystem: DeliveryMethodCS
Title: "Delivery Methods Code System"
Description: "Categories of healthcare service delivery methods."
* ^experimental = false
* #virtual	"Virtual" "Delivery not requiring provider and patient to be physically co-located, such as tele-medicine"
* #physical	"Physical" "Traditional delivery requiring provider and patient to be physically co-located."
* ^caseSensitive = true
*/

/*
CodeSystem: EmploymentStatusCS
Title: "Employment Status Code System"
Description: "This code system includes codes for indicating the status of a person's employment."
* ^experimental = false
* ^caseSensitive = true
* #employed	"employed"	"The person is currently employed."
* #unemployed	"unemployed"	"The person is currently unemployed."
*/

CodeSystem: AgeGroupCS
Title: "Age Range Code System"
Description: "This code system includes codes for indicating the age range of a person."
* ^experimental = false
* ^caseSensitive = true
* #infants  "Infants"	"Infants Age range 0-2 years"
* #children "Children"	"Children Age range 3-12 years"
* #teens "Teens"	"Teens Age range 13-19 years"
* #adults "Adults"	"Adults Age range 20-65 years"
* #seniors "Seniors"	"Seniors Age range 65+ years"

CodeSystem: InsuranceStatusCS
Title: "Insurance Status Code System"
Description: "This code system includes codes for indicating the status of a person's insurance coverage."
* ^experimental = false
* ^caseSensitive = true
* #insured	"insured"	"The person is currently insured."
* #uninsured	"uninsured"	"The person is currently uninsured."
* #underinsured	"underinsured"	"The person is currently underinsured."


//web-server sercurity (username token, x.509 certificate, saml assertion, kerberos ticket)
CodeSystem: EndpointAccessControlMechanismCS
Title: "Endpoint Access Control Mechanism Code System"
Description: "Endpoint Access Control Mechanism"
* ^experimental = false
* ^caseSensitive = true
* #public  "Public" "Public access without any specific access control."
* #opaque-access-token "Opaque Access Token" "Uses an opaque token for access control, which is a token whose structure is not visible or meaningful to the client."
* #jwt-access-token "JWT Access Token" "Uses a JSON Web Token (JWT) for access control, which is a compact, URL-safe means of representing claims to be transferred between two parties."
* #mutual-tls "Mutual TLS" "Uses mutual Transport Layer Security (TLS) where both client and server authenticate each other using certificates."
* #wss-saml-token "WSS SAML Token" "Uses a Security Assertion Markup Language (SAML) token within the Web Services Security (WSS) framework for access control."
* #wss-username-token "WSS User Name Token" "Uses a username token within the WSS framework for access control."
* #wss-kerberos-token "WSS Kerberos Token" "Uses a Kerberos token within the WSS framework for access control."
* #wss-x509-token "WSS X509 Token" "Uses an X.509 certificate token within the WSS framework for access control."
* #wss-custom-token "WSS Custom Token" "Uses a custom token within the WSS framework for access control."

/*
CodeSystem: EndpointX509PublicKeyUsageFlagCS
Title: "`Endpoint X509 Public Key Usage Flag Code System"
Description: "Endpoint X509 Public Key Usage Flag"
* ^experimental = false
* ^caseSensitive = true
* #digital-signature "Digital Signature" "indicates that the public key in the certificate can be used for digital signatures"
* #non-repudiation "Non Repudiation" "indicates that the public key in the certificate can be used for non-repudiation, which is the ability to prove that a message was sent by a particular sender"
* #key-encipherment "Key Encipherment" "indicates that the public key in the certificate can be used for key encipherment, which is the process of encrypting other keys"
* #data-encipherment "Data Encipherment" "indicates that the public key in the certificate can be used for data encipherment, which is the process of encrypting data"
* #key-agreement "Key Agreement" "indicates that the public key in the certificate can be used for key agreement, which is the process of agreeing on a shared secret key between two parties"
* #certificate-signing "Certificate Signing" "indicates that the public key in the certificate can be used for signing other certificates"
*/

/*
// FHIR-39478 to remove EndpointTypeCS +++++
CodeSystem: EndpointTypeCS
Title: "Endpoint Type Code System"
Description: "Endpoint Type"
* ^experimental = false
* #FHIR	"FHIR Server"
* #OpEndpoint "Operation Endpoint"
* #CDS "CDS Hooks"
* ^caseSensitive = true
*/

/*
CodeSystem: EndpointHieSpecificConnectionTypeCS
Title: "Endpoint IHE Specific Connection Type Code System"
Description: "Endpoint IHE Specific Connection Type"
* ^experimental = false
* #XCPD-InitGateway-PatientDiscovery-AsyncResponse "XCPD-InitGateway-PatientDiscovery-AsyncResponse" "XCPD InitiatingGateway ITI-55 Cross Gateway Patient Discovery Asynchronous Response"
* #XCPD-RespGateway-PatientDiscovery "XCPD-RespGateway-PatientDiscovery" "XCPD RespondingGateway ITI-55 Cross Gateway Patient Discovery Synchronous"
* #XCPD-RespGateway-PatientDiscovery-Async "XCPD-RespGateway-PatientDiscovery-Async" "XCPD RespondingGateway ITI-55 Cross Gateway Patient Discovery Asynchronous"
* #XCA-InitGateway-Query "XCA-InitGateway-Query" "XCA InitiatingGateway ITI-18 Registry Stored Query Synchronous"
* #XCA-InitGateway-Retrieve "XCA-InitGateway-Retrieve" "XCA InitiatingGateway ITI-43 Retrieve Document Set Synchronous"
* #XCA-InitGateway-Query-Async "XCA-InitGateway-Query-Async" "XCA InitiatingGateway ITI-18 Registry Stored Query Asynchronous"
* #XCA-InitGateway-Retrieve-Async "XCA-InitGateway-Retrieve-Async" "XCA InitiatingGateway ITI-43 Retrieve Document Set Asynchronous"
* #XCA-InitGateway-Query-AsyncResponse "XCA-InitGateway-Query-AsyncResponse" "XCA InitiatingGateway ITI-38 Cross Gateway Query Asynchronous Response"
* #XCA-InitGateway-Retrieve-AsyncResponse "XCA-InitGateway-Retrieve-AsyncResponse" "XCA InitiatingGateway ITI-39 Cross Gateway Retrieve Asynchronous Response"
* #XCA-RespGateway-Query "XCA-RespGateway-Query" "XCA RespondingGateway ITI-38 Cross Gateway Query Synchronous"
* #XCA-RespGateway-Retrieve "XCA-RespGateway-Retrieve" "XCA RespondingGateway ITI-39 Cross Gateway Retrieve Synchronous"
* #XCA-RespGateway-Query-Async "XCA-RespGateway-Query-Async" "XCA RespondingGateway ITI-38 Cross Gateway Query Asynchronous"
* #XCA-RespGateway-Retrieve-Async "XCA-RespGateway-Retrieve-Async" "XCA RespondingGateway ITI-39 Cross Gateway Retrieve Asynchronous"
* #XDS-Registry-Feed "XDS-Registry-Feed" "XDS Registry ITI-8 Patient Identity Feed Synchronous"
* #XDS-Registry-Feed-v3 "XDS-Registry-Feed-v3" "XDS Registry ITI-44 Patient Identity Feed HL7v3 Synchronous"
* #XDS-Registry-Register "XDS-Registry-Register" "XDS Registry ITI-42 Register Document Set-b Synchronous"
* #XDS-Registry-Query "XDS-Registry-Query" "XDS Registry ITI-18 Registry Stored Query Synchronous"
* #XDS-Registry-RegOnDemand "XDS-Registry-RegOnDemand" "XDS Registry ITI-61 Register On-Demand Document Entry Synchronous"
* #XDS-Registry-Register-Async "XDS-Registry-Register-Async" "XDS Registry ITI-42 Register Document Set-b Asynchronous"
* #XDS-Registry-Query-Async "XDS-Registry-Query-Async" "XDS Registry ITI-18 Registry Stored Query Asynchronous"
* #XDS-Registry-RegOnDemand-Async "XDS-Registry-RegOnDemand-Async" "XDS Registry ITI-61 Register On-Demand Document Entry Asynchronous"
* #XDS-Repository-ProvideReg "XDS-Repository-ProvideReg" "XDS Repository ITI-41 Provide&Register Document Set-b Synchronous"
* #XDS-Repository-Retrieve "XDS-Repository-Retrieve" "XDS Repository/IntegratedSourceRepository ITI-43 Retrieve Document Set Synchronous"
* #XDS-Repository-ProvideReg-Async "XDS-Repository-ProvideReg-Async" "XDS Repository ITI-41 Provide&Register Document Set-b Asynchronous"
* #XDS-Repository-Retrieve-Async "XDS-Repository-Retrieve-Async" "XDS Repository/IntegratedSourceRepository ITI-43 Retrieve Document Set Asynchronous"
* #XDS-Repository-Register-AsyncResponse "XDS-Repository-Register-AsyncResponse" "XDS Repository/IntegratedSourceRepository ITI-42 Register Document Set-b Asynchronous Response"
* #XDS-OnDemandSource-Retrieve "XDS-OnDemandSource-Retrieve" "XDS OnDemandSource ITI-43 Retrieve Document Set Synchronous"
* #XDS-OnDemandSource-Retrieve-Async "XDS-OnDemandSource-Retrieve-Async" "XDS OnDemandSource ITI-43 Retrieve Document Set Asynchronous"
* #XDS-OnDemandSource-RegOnDemand-AsyncResponse "XDS-OnDemandSource-RegOnDemand-AsyncResponse" "XDS OnDemandSource ITI-61 Register On-Demand Document Entry Asynchronous Response"
* #XDS-Source-ProvideReg-AsyncResponse "XDS-Source-ProvideReg-AsyncResponse" "XDS Document Source ITI-41 Provide&Register Document Set-b Asynchronous Response"
* #XDS-Consumer-Query-AsyncResponse "XDS-Consumer-Query-AsyncResponse" "XDS Document Consumer ITI-18 Registry Stored Query Asynchronous Response"
* #XDS-Consumer-Retrieve-AsyncResponse "XDS-Consumer-Retrieve-AsyncResponse" "XDS Document Consumer ITI-43 Retrieve Document Set Asynchronous Response"
* #PDQ-Supplier-Query "PDQ-Supplier-Query" "PDQ Patient Demographics Supplier ITI-21 Patient Demographics Query Synchronous"
* #PDQ-Supplier-VisitQuery "PDQ-Supplier-VisitQuery" "PDQ Patient Demographics Supplier ITI-22 Patient Demographics and Visit Query Synchronous"
* #PIX-Xmanager-Feed "PIX-Xmanager-Feed" "PIX Patient Identity Cross-Reference Manager ITI-8 Patient Identity Feed Synchronous"
* #PIX-Xmanager-Feed-v3 "PIX-Xmanager-Feed-v3" "PIX Patient Identity Cross-Reference Manager ITI-30 Patient Identity Management Synchronous"
* #PIX-Xmanager-Query "PIX-Xmanager-Query" "PIX Patient Identity Cross-Reference Manager ITI-9 PIX Query Synchronous"
* #PIX-Consumer "PIX-Consumer" "PIX Patient Identifier Cross-reference Consumer ITI-10 PIX Update Notification Synchronous"
* #XDR-Recipient-ProvideReg "XDR-Recipient-ProvideReg" "XDR Document Recipient ITI-41 Provide and Register Document Set-B Synchronous"
* #MHD-Recipient-ProvideReg "MHD-Recipient-ProvideReg" "MHD Document Recipient ITI-65 Provide Document Bundle"
* ^caseSensitive = true
*/

CodeSystem:  EndpointConnectionTypeCS
  Title: "Endpoint Connection Types (additional) Code System"
  Description:  "Extension codes for http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
* ^experimental = false
* #hl7-fhir-opn "HL7 FHIR Operation" "Interact with a FHIR server interface using FHIR's RESTful interface using an operation other than messaging. For details on its version/capabilities you should connect the value in Endpoint.address and retrieve the FHIR CapabilityStatement."
* #rest-non-fhir "REST (not FHIR)" "Interact with a server using HTTP/REST but not FHIR.  Should be used for web portals."
* #ihe-xcpd "IHE XCPD" "IHE Cross Community Patient Discovery Profile (XCPD) - http://wiki.ihe.net/index.php/Cross-Community_Patient_Discovery"
* #ihe-xca "IHE XCA" "IHE Cross Community Access Profile (XCA) - http://wiki.ihe.net/index.php/Cross-Community_Access"
* #ihe-xdr "IHE XDR" "IHE Cross-Enterprise Document Reliable Exchange (XDR) - http://wiki.ihe.net/index.php/Cross-enterprise_Document_Reliable_Interchange"
* #ihe-xds "IHE XDS" "IHE Cross-Enterprise Document Sharing (XDS) - http://wiki.ihe.net/index.php/Cross-Enterprise_Document_Sharing"
* #ihe-iid "IHE IID" "IHE Invoke Image Display (IID) - http://wiki.ihe.net/index.php/Invoke_Image_Display"
* #ihe-pdq "IHE PDQ" "IHE Patient Demographics Query (PDQ) - http://wiki.ihe.net/index.php/Patient_Demographics_Query"
* #ihe-pix "IHE PIX" "IHE Patient Identity Feed (PIX) - http://wiki.ihe.net/index.php/Patient_Identity_Feed"
* #ihe-mhd "IHE MHD" "IHE Mobile Healthcare (MHD) - http://wiki.ihe.net/index.php/Mobile_Healthcare"
* ^caseSensitive = true

//since our Ig fhir base is 4.0.1, http://hl7.org/fhir/FHIR-version will not contain the version beyond 4.0.1
//Therefore we have to define this value set to indicate the endpont beyond 4.0.1
/*
CodeSystem: EndpointConnectionTypeVersionCS
Title: "Endpoint Connection Type Version Code System"
Description: "Endpoint Connection Type Version"
* ^experimental = false
* #4.3.0 "4.3.0" "FHIR Release 4B"
* ^caseSensitive = true
*/

CodeSystem: EndpointTestingMethodCS
Title: "Endpoint Testing Method Code System"
Description: "Endpoint Testing Method"
* ^experimental = false
* ^caseSensitive = true
* #self-test "Self Test" "Self Test"
* #procter "Procter" "Procter"
* #attestation "Attestation" "Attestation"

/*
CodeSystem: EndpointFhirMimeTypeCS
Title: "Endpoint FHIR MimeType Code System"
Description: "Endpoint FHIR MimeType"
* ^experimental = false
* ^caseSensitive = true
* #application/fhir+json "fhr+json"
* #application/fhir+xml "fhir+xml"
* #application/fhir+turtle "fhir+turtle"
*/

/*
CodeSystem: EndpointCommonMimeTypeCS
Title: "Endpoint Common MimeType Code System"
Description: "Endpoint Common MimeType"
* ^experimental = false
* ^caseSensitive = true
* #audio/aac  ".aac"  "AAC audio"
* #application/x-abiword  ".abw"  "AbiWord document"
* #application/x-freearc  ".arc"  "Archive document (multiple files embedded)"
* #image/avif  ".avif"  "AVIF image"
* #video/x-msvideo  ".avi"  "AVI: Audio Video Interleave"
* #application/vnd.amazon.ebook  ".azw"  "Amazon Kindle eBook format"
* #application/octet-stream  ".bin"  "Any kind of binary data"
* #image/bmp  ".bmp"  "Windows OS/2 Bitmap Graphics"
* #application/x-bzip  ".bz"  "BZip archive"
* #application/x-bzip2  ".bz2"  "BZip2 archive"
* #application/x-cdf  ".cda"  "CD audio"
* #application/x-csh  ".csh"  "C-Shell script"
* #text/css  ".css"  "Cascading Style Sheets (CSS)"
* #text/csv  ".csv"  "Comma-separated values (CSV)"
* #application/msword  ".doc"  "Microsoft Word"
* #application/vnd.openxmlformats-officedocument.wordprocessingml.document  ".docx"  "Microsoft Word (OpenXML)"
* #application/vnd.ms-fontobject  ".eot"  "MS Embedded OpenType fonts"
* #application/epub+zip  ".epub"  "Electronic publication (EPUB)"
* #application/gzip  ".gz"  "GZip Compressed Archive"
* #image/gif  ".gif"  "Graphics Interchange Format (GIF)"
* #text/html  ".htm, .html"  "HyperText Markup Language (HTML)"
* #image/vnd.microsoft.icon  ".ico"  "Icon format"
* #text/calendar  ".ics"  "iCalendar format"
* #application/java-archive  ".jar"  "Java Archive (JAR)"
* #image/jpeg  ".jpeg, .jpg"  "JPEG images"
* #text/javascript  ".js, .mjs"  "JavaScript"
* #application/json  ".json"  "JSON format"
* #application/ld+json  ".jsonld"  "JSON-LD format"
* #audio/midi  ".mid"  "Musical Instrument Digital Interface (MIDI)"
* #audio/x-midi  ".midi"  "Musical Instrument Digital Interface (MIDI)"
* #audio/mpeg  ".mp3"  "MP3 audio"
* #video/mp4  ".mp4"  "MP4 video"
* #video/mpeg  ".mpeg"  "MPEG Video"
* #application/vnd.apple.installer+xml  ".mpkg"  "Apple Installer Package"
* #application/vnd.oasis.opendocument.presentation  ".odp"  "OpenDocument presentation document"
* #application/vnd.oasis.opendocument.spreadsheet  ".ods"  "OpenDocument spreadsheet document"
* #application/vnd.oasis.opendocument.text  ".odt"  "OpenDocument text document"
* #audio/ogg  ".oga"  "OGG audio"
* #video/ogg  ".ogv"  "OGG video"
* #application/ogg  ".ogx"  "OGG"
* #audio/opus  ".opus"  "Opus audio"
* #font/otf  ".otf"  "OpenType font"
* #image/png  ".png"  "Portable Network Graphics"
* #application/pdf  ".pdf"  "Adobe Portable Document Format (PDF)"
* #application/x-httpd-php  ".php"  "Hypertext Preprocessor (Personal Home Page)"
* #application/vnd.ms-powerpoint  ".ppt"  "Microsoft PowerPoint"
* #application/vnd.openxmlformats-officedocument.presentationml.presentation  ".pptx"  "Microsoft PowerPoint (OpenXML)"
* #application/vnd.rar  ".rar"  "RAR archive"
* #application/rtf  ".rtf"  "Rich Text Format (RTF)"
* #application/x-sh  ".sh"  "Bourne shell script"
* #image/svg+xml  ".svg"  "Scalable Vector Graphics (SVG)"
* #application/x-tar  ".tar"  "Tape Archive (TAR)"
* #image/tiff  ".tif, .tiff"  "Tagged Image File Format (TIFF)"
* #video/mp2t  ".ts"  "MPEG transport stream"
* #font/ttf  ".ttf"  "TrueType Font"
* #text/plain  ".txt"  "Text, (generally ASCII or ISO 8859-n)"
* #application/vnd.visio  ".vsd"  "Microsoft Visio"
* #audio/wav  ".wav"  "Waveform Audio Format"
* #audio/webm  ".weba"  "WEBM audio"
* #video/webm  ".webm"  "WEBM video"
* #image/webp  ".webp"  "WEBP image"
* #font/woff  ".woff"  "Web Open Font Format (WOFF)"
* #font/woff2  ".woff2"  "Web Open Font Format (WOFF)"
* #application/xhtml+xml  ".xhtml"  "XHTML"
* #application/vnd.ms-excel  ".xls"  "Microsoft Excel"
* #application/vnd.openxmlformats-officedocument.spreadsheetml.sheet  ".xlsx"  "Microsoft Excel (OpenXML)"
* #application/xml  ".xml"  "XML"
* #text/xml  ".xml"  "XML"
* #application/atom+xml  ".xml"  "XML"
* #application/vnd.mozilla.xul+xml  ".xul"  "XUL"
* #application/zip  ".zip"  "ZIP archive"
* #video/3gpp  ".3gp"  "3GPP audio/video container"
* #audio/3gpp  ".3gp"  "3GPP audio/video container if it does not contain video"
* #video/3gpp2  ".3g2"  "3GPP2 audio/video container"
* #audio/3gpp2  ".3g2"  "3GPP2 audio/video container  if it doesn't contain video"
* #application/x-7z-compressed  ".7z"  "7-zip archive"
* #text/hl7v2 "hl7v2"  "HL7 v2.x message"
* #text/rtf "rtf"  "Rich Text Format (RTF)"
* #application/cda+xml "cda"  "Clinical Document Architecture (CDA) XML"
* #application/fhir+json "fhir"  "FHIR JSON"
* #application/fhir+xml "fhir"  "FHIR XML"
*/


 
/*
CodeSystem:  EndpointPayloadTypeCS
  Title: "Endpoint Payload Types Code System"
  Description:  "Endpoint Payload Types are constrained to NA (Not Applicable) as part of this IG"
* ^experimental = false
* #NA "Not Applicable" "Not Applicable"
* ^caseSensitive = true
*/
 
CodeSystem: HealthcareServiceCategoryCS
 Title: "Healthcare Service Category Code System"
 Description: "Broad categories of healthcare services being performed or delivered"
* ^experimental = false
* #behav "Behavioral Health" "Services related to the promotion of mental health, resilience and wellbeing; the treatment of mental and substance use disorders; 
and the support of those who experience and/or are in recovery from these conditions, along with their families and communities."
* #dent "Dental" "Services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the mouth."
* #dme "DME/Medical Supplies" "Health care consumables or equipments supplied to patients"
* #emerg "Emergency care" "Health care services rendered within a designated emergency care facility, for point-in-time evaluation and/or treatment any medical condition 
such that a prudent layperson possessing an average knowledge of medicine and health, believes that immediate unscheduled medical care is required."
* #group "Medical Group" "Health care services rendered by a group of people, e.g. a group of Physicians."
* #home "Home Health"	"Health care services delivered to patients within their residence rather than a clinical setting; usually provided by nurses, home health aides, 
and other professionals on a regularly scheduled visit."
* #hosp "Hospital" "Health care services rendered within a hospital or other inpatient setting providng patient treatment with specialzed medical and nursing staff and 
medical equipment."
* #lab "Laboratory" "Pathology and laboratory testing on clinical specimenst to obtain informaion about the health of a paeint to aid in diagnosis, 
treatment and prevention of disease."
* #other "Other" "Other"
* #outpat "Clinic or Outpatient Facility" "Health care services rendered in an outpatient facility, e.g. medical procedures, surgeries, etc."
* #prov "Medical Provider"  "Health care services rendered by a person, e.g. Physician."
* #pharm "Pharmacy" "Services related to the storage, compounding, dispensing and sale of drugs."
* #trans "Transportation" "Services related to the transportation of patients to and from a healthcare facility, or programs related to transportation insecurity."
* #urg "Urgent Care" "Unscheduled health care services which provide for point-in-time evaluation or treatment of a non-life-threatening medical condition."
* #vis "Vision" "Services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the eyes."
* #education "Education" "Services or programs related to education, including health literacy, health education, and health promotion (stress management, smoking cessation, etc.)"
* #employment "Employment" "Services or programs related to employment assistance"
* #financial "Financial" "Services or programs related to financial insecurity, material hardship, or medical cost burden"
* #food "Food" "Services or programs related to food insecurity or inadequate nutrition"
* #housing "Housing" "Services or programs related to housing instability, inadequate housing, or homelessness"
* #personal-safety "Personal Safety" "Services or programs related to personal safety, including intimate partner violence, elder abuse, sexual violence, and child abuse and neglect"
* #social-connection "Social Connection" "Services or programs related to social isolation or social connection"
* ^caseSensitive = true

/*
CodeSystem: HealthcareServiceRatingTypeCS
Title: "Healthcare Service Rating Type Code System"
Description: "Types of ratings for a healthcare service"
* ^experimental = false
* ^caseSensitive = true
//* #quality-of-care "Quality of Care" "Quality ratings consider factors like the success rate of surgeries, patient outcomes, error rates, adherence to best practices, and compliance with safety standards."
//* #patient-satisfaction "Patient Satisfaction" "Patient satisfaction ratings  assessed through patient surveys. Patients may be asked to rate their overall satisfaction with the care they received, as well as specific aspects like the friendliness of staff, the cleanliness of facilities, the wait time, and the communication skills of healthcare professionals."
//* #value-of-money "Value of Money" "Value ratings compares the cost of services to their quality. It can be quite complex, as it often involves considering both the immediate cost of care and the long-term financial impact of health outcomes."
//* #accessibility "Accessibility" "Accessibility ratings consider factors like the availability of appointments, the ease of scheduling urgent appointments, the availability of after-hours care, and the availability of electronic communication with healthcare professionals."
//* #efficiency "Efficiency" "Efficiency ratings  evaluates how effectively a healthcare provider uses resources to deliver care. It might consider factors like the average length of hospital stays, the use of testing and procedures, and the readmission rate."
//* #clinical-outcomes "Clinical Outcomes" "Clinical outcomes ratings  assess the health outcomes of patients who received care from a particular healthcare provider. They might consider factors like the mortality rate, the rate of complications, and the rate of hospital readmission."
//* #patient-safety "Patient Safety" "Patient safety ratings  assess the safety of care provided by a healthcare provider. They might consider factors like the rate of hospital-acquired infections, the rate of surgical complications, and the rate of medication errors."
//* #experience-of-care "Experience of Care" "Experience of care ratings  assess the experience of patients who received care from a particular healthcare provider. They might consider factors like the friendliness of staff, the cleanliness of facilities, the wait time, and the communication skills of healthcare professionals."
//* #equity "Equity" "Equity ratings evaluates whether healthcare services are provided fairly to all patients, regardless of their race, ethnicity, gender, socioeconomic status, or other demographic factors."
* #hospital-compare "Hospital Compare" "This is a consumer-oriented website created by the Centers for Medicare & Medicaid Services (CMS). It provides data on how well hospitals provide recommended care to their patients. This can be used to compare the quality of care at over 4,000 Medicare-certified hospitals."
* #hedis "HEDIS" "The Healthcare Effectiveness Data and Information Set (HEDIS) is a tool used by more than 90 percent of America's health plans to measure performance on important dimensions of care and service. This tool is maintained by National Committee for Quality Assurance (NCQA)."
* #hcahps "HCAHPS" "The HCAHPS (Hospital Consumer Assessment of Healthcare Providers and Systems) Survey, also known as Hospital CAHPS, is a standardized survey instrument and data collection methodology for measuring patients' perspectives on hospital care. This tool is maintained by Centers for Medicare & Medicaid Services (CMS)."
* #healthgrades "Healthgrades" "Healthgrades is a website that provides information about physicians, hospitals and health care providers. Healthgrades collects data and other information regarding hospitals, physicians, long-term care facilities and other providers of healthcare services from a variety of sources."
* #joint-commission-quality-check "Joint Commission Quality Check" "A consumer-oriented website created by the Centers for Medicare & Medicaid Services (CMS). It provides data on how well hospitals provide recommended care to their patients. This can be used to compare the quality of care at over 4,000 Medicare-certified hospitals."
* #leapfrog "Leapfrog" "The Leapfrog Hospital Survey is the gold standard for comparing hospitals' performance on the national standards of safety, quality, and efficiency that are most relevant to consumers and purchasers of care. This tool is maintained by The Leapfrog Group."
* #usnews "US News" "U.S. News & World Report is an American media company that publishes news, opinion, consumer advice, rankings, and analysis. Founded as a newsweekly magazine in 1933, U.S. News transitioned to primarily web-based publishing in 2010. This tool is maintained by U.S. News & World Report."
* #vitals "Vitals" "Vitals is an online resource for patients to find doctors and medical facilities. It provides information about the doctor's education, training, board certification, and malpractice and disciplinary history. This tool is maintained by Vitals."
* #yelp "Yelp" "Yelp is an American public company headquartered in San Francisco, California. The company develops, hosts, and markets the Yelp.com website and the Yelp mobile app, which publish crowd-sourced reviews about businesses. This tool is maintained by Yelp."
*/

/*
CodeSystem: HealthcareServiceReferralMethodCS
Title: "Healthcare Service Referral Method Code System"
Description: "Methods of referral"
* ^experimental = false
* ^caseSensitive = true
* #ccda "CCDA" "CCDA with endpoints"
* #elec "Secure Messaging" "Referrals may be accepted via a secure messaging system. To determine the types of secure messaging systems supported, 
refer to the identifiers collection. Callers will need to understand the specific identifier system used to know that they are able to transmit messages."
* #electronic-referral "Electronic Referral" "Referrals may be accepted via Electronic Referral endpoints"
* #electronic-scheduling "Electronic Scheduling" "Referrals may be accepted via Electronic Scheduling endpoints"
* #fax "Fax" "Referrals may be accepted by fax."
* #phone "Phone" "Referrals may be accepted over the phone from a practitioner."
* #mail "Mail" "Referrals may be accepted via regular postage or hand delivered."
* #semail "Secure Email" "Referrals may be accepted via a secure email. To send please encrypt with the services public key."
*/

CodeSystem: IgActorCS
Title: "IG Actor Code System"
Description: "IG Actor"
* ^experimental = false
* #client	"client"  "client"
* #server	"server"  "server"
* #sender "sender" "sender"
* #recipient "recipient" "recipient"
* #requester "requester" "requester"
* ^caseSensitive = true

/*
CodeSystem: IgTypeCS
Title: "IG Type Code System"
Description: "IG Type"
* ^experimental = false
* #FHIR	"FHIR"
* #direct "Direct"
* ^caseSensitive = true
*/

CodeSystem: NdhEndpointEnvironmentCS
Title: "NDH Endpoint Environment Code System"
Description: "NDH Endpoint Environment"
* ^experimental = false
* ^caseSensitive = true
* #prod "Production" "Production environment and is expected to contain real data and should be protected appropriately"
* #staging "Staging" "Staging environment typically used while preparing for a release to production"
* #dev "Development" "Development environment used while building systems"
* #test "Test" "Test environment, it is not intended for production usage."
* #train "Training" "Training environment, it is not intended for production usage and typically contains data specifically prepared for training usage."

//for now, it will be added to https://terminology.hl7.org/4.0.0/ValueSet-v3-HL7FormatCodes.html
CodeSystem: NdhDirectTrustPayloadTypeCS
Title: "NDH Direct Trust Payload Type Code System"
Description: "NDH Direct Trust Payload Type"
* ^experimental = false
* ^caseSensitive = true
* #urn:dt-org:dsm:adt-en:SMTP+CIG+V2:1.0 "urn:dt-org:dsm:adt-en:SMTP+CIG+V2:1.0" "urn:dt-org:dsm:adt-en:SMTP+CIG+V2:1.0"
* #urn:dt-org:dsm:adt-en:SMTP+XDM:1.0 "urn:dt-org:dsm:adt-en:SMTP+XDM:1.0" "urn:dt-org:dsm:adt-en:SMTP+XDM:1.0"
* #urn:dt-org:dsm:ix4hs-ref:SMTP+CDA+FHIR:1.0 "urn:dt-org:dsm:ix4hs-ref:SMTP+CDA+FHIR:1.0" "urn:dt-org:dsm:ix4hs-ref:SMTP+CDA+FHIR:1.0"

CodeSystem: NdhFhirEndpointUseCaseCS
Title: "NDH FHIR Endpoint Use Case Code System"
Description: "NDH FHIR Endpoint Use Case"
* ^experimental = false
* ^caseSensitive = true
* #cdex "CDex" "Clinical Data Exchange"
* #patientAccess "Patient Access" "Patient Access"
* #pasOperation "PAS Operation" "PAS Operation"
* #payerAttachment "Payer Attachment" "Payer Attachment"
* #payerToPayer "Payer to Payer" "Payer to Payer"
* #providerApi "Provider API" "Provider API" //FHIR-41273

//for now it will be added
CodeSystem: NdhDirectTrustEndpointUsecaseCS
Title: "NDH Direct Trust Endpoint Usecase Code System"
Description: "NDH Direct Trust Endpoint Usecase"
* ^experimental = false
* ^caseSensitive = true
*  #payer-payer-data-exchange  "information exchange between payers" "information exchange between payers"
*  #payer-provider-data-exchange  "information exchange between payers and providers" "information exchange between payers and providers"
*  #payer-patient-data-exchange  "information exchange between payers and patients" "information exchange between payers and patients"
*  #provider-provider-data-exchange  "information exchange between providers" "information exchange between providers"
*  #provider-payer-data-exchange  "information exchange between providers and payers" "information exchange between providers and payers"
*  #provider-to-patient-data-exchange  "information exchange between providers and patients" "information exchange between providers and patients"
*  #patient-payer-data-exchange  "information exchange between patients and payers" "information exchange between patients and payers"
*  #patient-provider-data-exchange  "information exchange between patients and providers" "information exchange between patients and providers"
*  #patient-public-health-data-exchange  "information exchange between patients and public health" "information exchange between patients and public health"
*  #patient-research-data-exchange  "information exchange between patients and research" "information exchange between patients and research"
*  #public-health-patient-data-exchange  "information exchange between public health and patients" "information exchange between public health and patients"
*  #research-patient-data-exchange  "information exchange between research and patients" "information exchange between research and patients"
*  #patient-access  "information exchange for patients" "information exchange for patients"
*  #care-case-manager  "information exchange with a care or case managers" "information exchange with a care or case managers"
*  #care-coordination  "information exchange for care coordination across the entire patient care team" "information exchange for care coordination across the entire patient care team"
*  #advanced-eob  "information exchange for advanced eobs" "information exchange for advanced eobs"
*  #coverage-requirements-discovery-crd  "information exchange for discovering coverage requirements" "information exchange for discovering coverage requirements"
*  #documentation-templates-rules-dtr  "information exchange for documentation templates and rules" "information exchange for documentation templates and rules"
*  #prior-authorization  "information exchange for prior authorization" "information exchange for prior authorization"
*  #formulary  "information exchange for drug formulary" "information exchange for drug formulary"
*  #prescriptions  "information exchange for prescriptions" "information exchange for prescriptions"
*  #item-service-price-transparency  "information exchange for item or service price transparency" "information exchange for item or service price transparency"
*  #patient-cost-transparency-gfe  "information exchange for making patient costs transparent" "information exchange for making patient costs transparent"
*  #quality-measure-reporting  "information exchange for quality measure reporting" "information exchange for quality measure reporting"
*  #adverse-event-reporting  "information exchange for adverse event reporting" "information exchange for adverse event reporting"
*  #notifications  "information exchange for notifications" "information exchange for notifications"
*  #adt-notifications  "information exchange for ADT notifications" "information exchange for ADT notifications"
*  #scheduling  "information exchange for scheduling" "information exchange for scheduling"
*  #release-of-information  "information exchange for release of information" "information exchange for release of information"
*  #medical-records  "information exchange for medical records" "information exchange for medical records"
*  #administrative  "information exchange for administrative activities" "information exchange for administrative activities"
*  #support  "information exchange for technical or customer support activities" "information exchange for technical or customer support activities"
*  #billing  "information exchange for billing" "information exchange for billing"
*  #referrals  "information exchange for referrals" "information exchange for referrals"
*  #transfer-transition-of-care  "information exchange for transfers and transitions of care" "information exchange for transfers and transitions of care"
*  #provider-directory  "information exchange for directory maintenance and quality" "information exchange for directory maintenance and quality"
*  #care-plans-review-or-approval  "information exchange to support care plan review and approval" "information exchange to support care plan review and approval"
*  #public-health-reporting  "information exchange for public health reporting" "information exchange for public health reporting"
*  #payers-and-payments  "information exchange for billing" "information exchange for billing"
*  #break-the-glass  "information exchange that requires break the glass" "information exchange that requires break the glass"
*  #individual-practitioner  "information exchange with an individual provider" "information exchange with an individual provider"
*  #individual-patient-member-consumer  "information exchange with an individual patient-member-client-consumer" "information exchange with an individual patient-member-client-consumer"
*  #location  "information exchange with a treating facility" "information exchange with a treating facility"
*  #group  "information exchange with a provider group" "information exchange with a provider group"
*  #department  "information exchange with a provider department" "information exchange with a provider department"
*  #no-reply  "endpoint does not accept information for exchange" "endpoint does not accept information for exchange"
*  #any-all  "endpoint that accepts any and all types of information exchange possible for its endpoint type" "endpoint that accepts any and all types of information exchange possible for its endpoint type"




/*
CodeSystem: InsuranceProductTypeCS
Title: "Insurance Product Type Code System"
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
*/

/*
CodeSystem: InsurancePlanTypeCS
Title: "Insurance Plan Type Code System"
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
*/

/*
CodeSystem:  LanguageProficiencyCS
Title: "Language Proficiency Code System"
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
*/

CodeSystem:  OrgTypeCS
  Title: "Organization Type Code System"
  Description:  "Categories of organizations based on criteria in provider directories."
* ^experimental = false
* ^caseSensitive = true
* #fac "Facility" "A physical healthcare facility."
* #prvgrp "Provider Group" "A healthcare provider entity"
* #payer "Payer" "A healthcare payer."
* #atyprv "Atypical Provider" "Providers that do not provide healthcare"
* #bus "Non-Healthcare Business" "An organization that does not meet the definitions of a Healthcare or Atypical Provider, and is not a payer or healthcare facility"
* #ntwk "Network" "A healthcare provider insurance network"
* #gov "Government" "A government agency for social services"
* #comm "Community" "A community based organization for social services"
* #edu "Education" "An educational institution or organization"
* #reli "Religious" "A religious organization for social services"



CodeSystem: OrgAliasTypeCS
Title: "Organization Alias Type Code System"
Description: "The state indicating if an Organization has an alias."
* ^experimental = false
* #legalalternative "Legal Alternative" "A pseudonym used by an organization to perform their business under a name that differs from the registered, legal name of the business, also known as a trade name, business name, or 'doing business as' (d.b.a.)."
* #historical "Historical" "Any previously used legal or trade names used by an organization since the creation of the business. Could include names used by independent organizations before a merger or other reorganization."
* #common "Common" "common name, i.e. SNAF, Rehab, etc."
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

CodeSystem: OrganizationAffiliationRoleForHieCS
Title: "NDH Organization Affiliation Role for HIE"
Description: "Codes For Organization Affiliation Role for HIE"
* ^experimental = false
* #HieInitiator "HIE Initiator" "This code indicates that the organization referenced in .participatingOrganization is a member of the network led by the organization 
mentioned in .organization. It has both the permission and the intention to request data from other members of the network. In this context, OrganizationAffiliation.endpoint 
refers to the endpoint utilized by .participatingOrganization to make requests to the Initiating Gateway, acting under the authority of .organization."
* #HieResponder "HIE Responder" "This code indicates that the organization linked in .participatingOrganization is a member of the network overseen by the organization 
in .organization. It possesses an Endpoint capable of receiving requests from other network members that maintain an HIEInitiator relationship with the network's governing 
organization. In this context, OrganizationAffiliation.endpoint includes endpoints utilized by other network members to transmit requests to .participatingOrganization. 
This Endpoint may also serve Initiating and Responding gateways operated by .organization."
* #PartnerConnectivity "Partner Connectivity" "This code indicates that .participatingOrganization should be able to directly contact .organization via .Endpoint. 
It does not assert the availability of connectivity for any organizations other than those two directly linked through the OrganizationAffiliation Resource. 
It's important to note that many document-sharing networks might opt to distribute the information required to establish these connections out of band, 
rather than through the directory."
* #DocShareFederateInt "Document Sharing Federated Internal" "This code indicates that documents from .participatingOrganization are accessible to organizations within 
the network through communication with the network's Initiating Gateway, which is operated by .organization. In this context, 'within the network' refers to organizations 
that maintain an HIEInitiator relationship with .organization. This code is analogous to the DocShare-federate code in mCSD (Mobile Care Services Directory), 
but its scope is confined to organizations internal to the network."
* #DocShareFederateExt "Document Sharing Federated External" "This code indicates that documents from .participatingOrganization are accessible to organizations outside the network 
through communication with the network's Responding Gateway, operated by .organization. Here, 'outside the network' refers to organizations that do not have a child relationship 
with .organization, yet possess upper-level network or peer connectivity with that organization. This code is analogous to the DocShare-federate code in 
mCSD (Mobile Care Services Directory), but its scope is restricted to organizations external to the network."
* ^caseSensitive = true
  

CodeSystem: PractitionerRoleCS
Title: "Practitioner Role Codes Code System"
Description: "A capability that an individual, group, or organization is acknowledged to have in a payer network."
* ^experimental = false
// These are Payer Roles from Gail
* #ap "Admitting Privileges" "Practitioner has admitting privileges at hospital (organization)"
* #apn "Advanced Practice Nursing Providers" "Advanced Practice Nursing Providers"
* #at "Athletic Trainer" "Athletic Trainer"
* #att "Attending Provider" "Attending Provider"
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
* #ml "Medical Learner" "Medical Learner e.g., student, intern, resident, fellow, etc."
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
* #doctor "Doctor" "Doctor"
* #nurse "Nurse" "Nurse"
* #pharmacist "Pharmacist" "Pharmacist"
* #researcher "Researcher" "Researcher"
* #teacher "Teacher" "Teacher"
* #ict "Information and Communication Technology" "Information and Communication Technology"
* ^caseSensitive = true


CodeSystem: QualificationStatusCS
Title: "Qualification Status Code System"
Description: "The state indicating if a qualification is currently valid."
* ^experimental = false
* #active "active" "The credential may be considered valid for use."
* #inactive "inactive" "The credential may not be considered valid for use."
* #issiner "issued in error" "The credential was mistakenly assigned and should not be considered valid for use."
* #revoked "revoked" "The credential was revoked by the issuing organization and should not be considered valid for use."
* #pending "pending" "The credential has not been officially assigned. It may or may not be considered valid for use."
* #unknown "unknown" "The status of this credential is unknown. It may or may not be considered valid for use."
* ^caseSensitive = true



/*
CodeSystem: ValidationTypeCS
Title: "Validation Type Code System"
Description: "This code system contains codes for documenting the attributes of the FHIR resource Validation to reflect the business process of validating information in a Healthcare Directory.."
* ^experimental = false
* #noneneeded "None needed" "No validation needed/planned for this resource or element."
* #initial "Initial"    "Validation is only needed after initial attestation. For elements that typically do not change such as 'medical school attended and graduation date'."
* #periodic	"Periodic"	"Validation is needed after initial attestation and on a periodic basis. E.g. elements that expire or may change such as licensure."
* #attested	"Attested"	"Indicates the element or resource has only been attested."
* #validated "Validated"	"Indicates the element or resource has been successfully validated."
* #inprocess "Inprocess"	"Indicates the element or resource is currently being validated."
* #reqreval	"Required revalidation"	"Indicates the element or resource has passed an expiration date and requires revalidation."
* #valfailed "Valiation failed"	"Indicates validation was attepted on an element or resource and that validation failed."
* #nothing	"Nothing"	"No external validation is required."
* #single	"Single"	"Indicates the element or resource is validated against a single source."
* #multiple	"Multiple"	"Indicates the element or resource may require validation against multiple sources, e.g. a practitioner participating in an insurance network."
* #editcheck "Edit check"	"Indicates the element or resource is validated for format, range, presence, or other similar properties."
* #valueset	"Valueset"	"Indicates the element or resource is validated against a value set."
* #extsource "External source"	"Indicates the element or resource is validated against an external source."
* #standalone "Stand alone"	"Indicates the element or resource is validated by itself and is unrelated to other elements or resources."
* #incontext "In context"	"Indicates the element or resource is validated by the existence or value of another related element or resource."
* #fatal "Fatal"	"A failure that is likely relevant to local workflow environments, considered sufficient to suspend the resource/element and one or more action has been taken."
* #warning	"Warning"	"A failure that may be relevant to some local workflow environments, but in and of itself is not consider sufficient to suspend the resource/element. E.g. validating membership in an organization."
* #recordonly	"Record only"	"A failure that may be relevant to some local workflow environments and will be documented but not result in notification or publication of the error."
* #noaction	"No action"	"A failure that is unlikely to be relevant to any local workflow environment."
* #manual	"Manual"	"The resource or element is validated manually."
* #portal	"Portal"	"The resource or element is validated via a portal into a source of valid data."
* #push	"Push"	"Data is sent (i.e. pushed) from a source of valid data to the Healthcare Directory."
* #pull	"Pull"	"Data is retrieved (i.e. pulled) from a source of valid data into the Healthcare Directory"
* #successful	"Successful"	"The validation process is complete and a determination made that the the attested data is true and accurate."
* #failed	"Failed"	"The validation process is complete and a determination made that the the attested data is not true or accurate."
* #undetermined	"Undetermined"	"The validation process is complete and a determination could not be made that the the attested data is, or is not, true and accurate."
* #pushyes	"Yes"	"The primary source validation can be achieved via a push of data from the source of that information."
* #pushno	"No"	"The primary source validation cannot be achieved via a push of data from the source of that information."
* #pushundetermined	"Undetermined"	"It is if undetermined if primary source validation can be achieved via a push of data from the source of that information."
* #specific	"Specific requested changes"	"The sender will send specific changes to the healthcare directory as determined by agreement."
* #any	"Any changes"	"The sender will send all changes to the healthcare directory."
* #sourcedef	"As defined by the source/sender"	"The sender will only send changes they have determined to be significant."
* #owner	"Owner"	"Indicates the element or resource was attested to by the individual who owned the data."
* #authrep	"Authorized representative"	"Indicates the element or resource was attested to by an individual who was designated to attest by the owner of the data."
* #authint	"Authorized intermediary"	"Indicates the element or resource was attested to by a system (intermediary) that was designated to attest by the owner of the data."
* #non-auth-src	"Non-authorized source"	"Indicates the element or resource was attested to by an individual or system that was not designated to attest by the owner of the data."
* #licenseboard	"License Board"	"License Board"
* #primaryed	"Primary Education"	"Primary Education"
* #continuinged	"Continuing Education"	"Continuing Education"
* #postalservice	"Postal Service"	"Postal Service"
* #relowner	"Relationship owner"	"Relationship owner"
* #regauth	"Registration Authority"	"Registration Authority"
* #legalsource	"Legal source"	"Legal source"
* #issuingsource	"Issuing source"	"Issuing source"
* #attester	"Attester"	"Attester"
* ^caseSensitive = true
*/

CodeSystem: VirtualModalitiesCS
Title: "Virtual Modalities Code System"
Description: "Categories of virtual service delivery modalities."
* ^experimental = false
* #phone	"phone" "Voice Telephone"
* #video	"video chat" "Video Chat"
* #tdd	"TDD" "Telecommunications Device for the Deaf"
* #sms	"SMS" "SMS Text Messaging"
* #app  "App" "Mobile Application"
* #web  "Website" "Website accessed through browser"
* ^caseSensitive = true

CodeSystem: NdhSecureExchangeArtifactsCS
Title: "NDH Secure Exchange Artifacts Code System"
Description: "NDH Secure Exchange Artifacts"
* ^experimental = false
* ^caseSensitive = true
* #x509-ssl-tls-certificates "X509 SSL/TLS certificates" "SSL/TLS certificates"
* #x509-mtls-certificate "X509 MTLS certificate" "MTLS certificate"
* #x509-identity-certificate "X509 identity certificate" "X509 identity certificate"
* #x509-signing-certificate "X509 signing certificate" "X509 signing certificate"
* #x509-encryption-certificate "X509 encryption certificate" "X509 encryption certificate"
//* #x-509-certificates "X.509 certificates" "X.509 certificates"
//* #open-pgp-certificates "OpenPGP certificates" "OpenPGP certificates"
//* #kerberos-certificates "Kerberos certificates" "Kerberos certificates"
//* #saml-certificates "SAML certificates" "SAML certificates"
//* #self-signed-certificates "Self-signed certificates" "Self-signed certificates"
//* #authorization-server-certificate "Authorization server certificate" "Authorization server certificate"
//* #token-endpoint-certificate "Token endpoint certificate" "Token endpoint certificate"
//* #jwks-endpoint-certificate "JWKS endpoint certificate" "JWKS endpoint certificate"
//* #userinfo-endpoint-certificate "Userinfo endpoint certificate" "Userinfo endpoint certificate"
//* #revocation-endpoint-certificate "Revocation endpoint certificate" "Revocation endpoint certificate"
//* #introspection-endpoint-certificate "Introspection endpoint certificate" "Introspection endpoint certificate"
//* #registration-endpoint-certificate "Registration endpoint certificate" "Registration endpoint certificate"
//* #management-endpoint-certificate "Management endpoint certificate" "Management endpoint certificate"


CodeSystem: NdhAssociatedServersTypeCS
Title: "NDH Associated Servers Type Code System"
Description: "NDH Associated Servers Type"
* ^experimental = false
//* #fhir "FHIR" "FHIR"
* #proxy-server "Proxy Server" "Proxy Server"
* #testing-proxy-server "Testing Proxy Server" "Testing Proxy Server"
//* #paticipant-gateway-server "Participant Gateway Server"   "Participant Gateway Server"
//* #service-prvider-server "Service Provider Server" "Service Provider Server"
* #indentity-provider-server "Identity Provider Server" "Identity Provider Server"
* #record-locator-service-server "Record Locator Service Server"  "Record Locator Service Server"
//* #consent-managment-service-server "Consent Management Service Server" "Consent Management Service Server" 
//* #audit-logging-server "Audit Logging Server"   "Audit Logging Server"
//* #payer-gateway-server "Payer Gateway Server" "Payer Gateway Server"
//* #data-requestor-server "Data Requestor Server"  "Data Requestor Server"
//* #data-provider-server "Data Provider Server" "Data Provider Server"
* #master-patient-index-server "Master Patient Index (MPI) Server" "Master Patient Index (MPI) Server"
* #authorization-authentication-server "Authorization/Authentication Server" "Authorization/Authentication Server"
//* #authorizartion-registration-server "Authorization/Registration Server" "Authorization/Registration Server"
//* #query-broker-server "Query Broker Server" "Query Broker Server"
//* #data-source-server "Data Source Server" "Data Source Server"
//* #hie-gateway-server "HIE Gateway Server"  "HIE Gateway Server"
//* #provider-directory-server "Provider Directory Server" "Provider Directory Server"
//* #patient-identity-matching-server "Patient Identity Matching Server" "Patient Identity Matching Server"
//* #query-health-service-server "Query Health Service Server" "Query Health Service Server"
//* #certificate-authority-server "Certificate Authority Server" "Certificate Authority Server"
//* #trust-anchor-bundle-server "Trust Anchor Bundle Server" "Trust Anchor Bundle Server"
//* #direct-service-server "Direct Service Server" "Direct Service Server"
* ^caseSensitive = true

CodeSystem: TrustProfileCS
Title: "Trust Profile Code System"
Description: "Trust Profile"
* ^experimental = false
* ^caseSensitive = true
* #udap "UDAP" "UDAP"
* #smart "SMART" "SMART"


CodeSystem: TrustFrameworkTypeCS
Title: "Trust FrameworkType Code System"
Description: "Trust Framework Type"
* ^experimental = false
* #DirectTrust "Direct Trust"
* #CareQuality "Carequality"
* #Commonwell "Commonwell"
* #TEFCA "TEFCA"
* #PayerToPayer	"Payer to Payer Trust Network"
* #Exchange	"Exchange Required by Federal Regulations"
* #PCDH "Patient Centered Data Home"
* ^caseSensitive = true

/*
CodeSystem: NdhVerificationCommunicationMethodCS
Title: "NDH Verification Communication Method Code System"
Description: "NDH Verification Communication Method"
* ^experimental = false
* ^caseSensitive = true
* #manual "Manual" "Manual"
* #portal "Portal" "Portal"
* #pull "Pull" "Pull"
* #push "Push" "Push"
*/

CodeSystem: NdhVerificationProcessCS
Title: "NDH Verification Process Code System"
Description: "NDH Verification Process"
* ^experimental = false
* ^caseSensitive = true
* #primary "Primary source" "Primary source"
* #multi "Multiple source" "Multiple source"
* #manual "Manual" "Manual"
* #in-context "In-context" "element or resource is verified by existence or value of another related element or resource"
* #attester "Attester" "Attester"
* #editcheck "Edit check" "element or resource is verified for format, range, presence, or other similar properties"
* #valueset "Value set" "element or resource is verified against a value set"
* #extsource "External source" "element or resource is verified against an external source"
* #standalone "Standalone" "element or resource is verified by itself and is releated to other elements or resources"

CodeSystem: NdhVerificationStatusCS
Title: "NDH Resource Instance Verification Status Code System"
Description: "NDH Resource Instance Verification Status"
* ^experimental = false
* ^caseSensitive = true
* #complete "Complete" "Complete"
* #incomplete "Incomplete" "Incomplete"
* #not-required "Not Required" "Not Required"


CodeSystem: NdhPayerCharacteristicsCS
Title: "NDH Payer Characteristics Code System"
Description: "NDH Payer Characteristics"
* ^experimental = false
* ^caseSensitive = true
* #medical   "Medical"   "Medical insurance coverage."
* #dental   "Dental"   "Dental insurance coverage."
* #menthlth   "Mental Health"   "Mental health insurance coverage."
* #substanceabuse   "Substance Abuse"   "Substance abuse services insurance coverage."
* #vision   "Vision"   "Vision insurance coverage."
* #drug   "Drug"   "Prescription drug coverage."
* #stc   "Short Term Care"   "Short term care."
* #ltc   "Long Term Care"   "Long term care."
* #hospice   "Hospice"   "Hospice insurance coverage."
* #homehealth   "Home Health"   "Home health services insurance coverage."
* #dmepos   "DMEPOS"   "Durable Medical Equipment, Prosthetics/Orthotics and Supplies."
* #imagingadv   "Advanced Imaging (CT/PET Scans, MRIs)"   "Advances imaging techniques services (CT/PET Scans, MRIs) coverage."
* #rehab   "Rehabilitation"   "Rehabilitation."
* #pcpov   "Primary Care Visit to Treat an Injury or Illness"   "Benefit plan covers services rendered by a primary care physician during an office visit with the purpose to treat injury or illness, except for preventive care services."
* #specialistov   "Specialist Office Visit"   "Covered healthcare service rendered to a patient by a specialty provider."
* #mlpov   "Other Practitioner Office Visit (Nurse, Physician Assistant) - Mid Level Professional"   "Benefit plan covers covered health related services rendered by a practioner other than MD or DO and referred to as other practitioner."
* #outpatient   "Outpatient Facility Fee (e.g., Ambulatory Surgery Center)"   "Benefit plan covers health related services rendered to patient at an outpatient facility, outside of a facility that requires a patient admission."
* #outpatstx   "Outpatient Surgery Physician/Surgical Services"   "Benefit plan covers surgical services rendered to patient outside of a facility admission, referred to as outpatient."
* #hospserv   "Hospice Services"   "Benefit plan covers hospice services."
* #routinedental   "Routine Dental Services (Adult)"   "Benefit plan covers routine dental services."
* #infertilitytx   "Infertility Treatment"   "Benefit plan covers eligible infertility treatment services."
* #ltnhc   "Long-Term/Custodial Nursing Home Care"   "Long-Term/Custodial Nursing Home Care."
* #privatenurse   "Private-Duty Nursing"   "Private-Duty Nursing."
* #routineeye   "Routine Eye Exam (Adult)"   "Routine Eye Exam (Adult)."
* #ucservice   "Urgent Care Centers or Facilities"   "Urgent Care Centers or Facilities."
* #erservice   "Emergency Room Services"   "Emergency Room Services."
* #ambulance   "Emergency Room Services"   "Emergency Room Services."
* #inpatienthospital   "Inpatient Hospital Services (e.g., Hospital Stay)"   "A person who is hospitalized for at least one night to receive treatment or participate in a study."
* #inpatientprovider   "Inpatient Physician and Surgical Services"   "A healthcare provider who is delivering healthcare services in a hospital environment."
* #bariatricsurg   "Bariatric Surgery"   "Bariatric surgery service Skilled nursing service (qualifier value)."
* #cosmeticsurg   "Cosmetic Surgery"   "Cosmetic surgery service Skilled nursing service (qualifier value)."
* #skillednursing   "Skilled Nursing Facility"   "Skilled nursing service (qualifier value)."
* #ppnatalcare   "Prenatal and Postnatal Care"   "Prenatal and Postnatal services."
* #maternitycare   "Delivery and All Inpatient Services for Maternity Care"   "All maternity care services."
* #menthlthoutp   "Mental/Behavioral Health Outpatient Services"   "Mental health service delivered in an outpatient setting."
* #menthlthinp   "Mental/Behavioral Health Inpatient Services"   "Mental health service delivered in an hospital or inpatient facility setting."
* #sadoutp   "Substance Abuse Disorder Outpatient Services"   "Substance abuse related services delivered in a outpatient setting."
* #sadinp   "Substance Abuse Disorder Inpatient Services"   "Substance abuse related services delivered in a inpatient setting."
* #drggenric   "Generic Drugs"   "Generic drugs eligible benefits."
* #drgbrand   "Preferred Brand Drugs"   "Preferred brand drugs eligible benefits."
* #drgnonpreferred   "Non-Preferred Brand Drugs"   "Non-Preferred drugs brands eligible benefits."
* #drgspecialty   "Specialty Drugs"   "Benefit plan covers specialty drugs."
* #rehaboutp   "Outpatient Rehabilitation Services"   "Benefit plan covers outpatient rehabilitation services."
* #servicehablitation   "Habilitation Services"   "Habilitation Services."
* #chiro   "Chiropractic Care"   "Benefit plan covers chiropractor eligible benefits."
* #dme   "Durable Medical Equipment"   "Benefit plan covers Durable medical equipment eligible benefits."
* #hearingaids   "Hearing Aids"   "Benefit plan covers hearing aids."
* #imgctpetmri   "Imaging (CT/PET Scans, MRIs)"   "Benefit plan covers advances imaging techniques services (CT/PET Scans, MRIs) eligible services."
* #prev   "Preventive Care/Screening/Immunization"   "Routine healthcare services to prevent health related problems eligible benefits."
* #rtnpod   "Routine Foot Care"   "Routine Foot Care."
* #acupuncture   "Acupuncture"   "Benefit plan covers acupuncture treatment."
* #weightloss   "Weight Loss Programs"   "Benefit plan covers weight loss services eligible benefits."
* #rtneyechld   "Routine Eye Exam for Children"   "Routine eye exam for children eligible benefits."
* #glasseschld   "Eye Glasses for Children"   "Eye glasses children eligible benefits."
* #rtndntlchld   "Dental Check-Up for Children"   "Dental Check-Up for Children."
* #speachthpy   "Rehabilitative Speech Therapy"   "Benefit plan covers rehabilitative speech therapy eligible benefits."
* #rehaboccandpt   "Rehabilitative Occupational and Rehabilitative Physical Therapy"   "Benefit plan covers rehabilitative occupational and rehabilitative physical eligible benefits."
* #wellbaby   "Well Baby Visits and Care"   "Regularly scheduled, preventive care services, including immunizations, provided to children up to an age as specified by a health insurance company or mandated by a government agency."
* #laboutp   "Laboratory Outpatient and Professional Services"   "Benefit plan covers laboratory testing and related professional services received as outpatient."
* #imagingdx   "X-rays and Diagnostic Imaging"   "Benefit plan covers diagnostic imaging procedures that produce images of internal structures of the human body and uses radiation to diagnose and treat diseases."
* #dntlbaschld   "Basic Dental Care - Child"   "Benefit plan covers diagnostic basic dental care."
* #orthochld   "Orthodontia - Child"   "Benefit plan covers orthodontia for children."
* #dntlmajchld   "Major Dental Care - Child"   "Benefit plan covers major dental care for children."
* #dntlbasadlt   "Basic Dental Care - Adult"   "Benefit plan covers basic dental care for adults."
* #orthodadlt   "Orthodontia - Adult"   "Benefits plan covers services provided that are required for orthodontic purposes for an adult."
* #dntlmajadlt   "Major Dental Care - Adult"   "Benefit plan covers major dental care for adult."
* #abortion   "Abortion for Which Public Funding is Prohibited"   "Benefit plan covers services for abortion for which public funding is prohibited."
* #transplant   "Transplant"   "Benefit plan covers transplant related services."
* #accdntl   "Accidental Dental"   "Benefit plan covers dental care services related to an accident."
* #dialysis   "Dialysis"   "The plan benefit covers services used to treat end stage renal disease."
* #testallrgy   "Allergy Testing"   "The plan benefits covers services for diagnostic procedures ordered or performed to evaluate whether a sensitivity to a substance is present. This test may be associated with specimen collection and/or substance administration challenge activities."
* #chemotherapy   "Chemotherapy"   "The plan benefits cover services the use of drugs and approved chemicals to treat disease."
* #radiation   "Radiation"   "The plan benefits cover services the use radiation to treat disease."
* #edudiab   "Diabetes Education"   "The plan benefits cover services related to instruction or training that encourages behaviors most likely to optimize health potentials through information about diabetes; facilitates the prevention of diabetes."
* #prosthetic   "Prosthetic Devices"   "Plan benefit covers services related to prosthesis devices."
* #infusiontx   "Infusion Therapy"   "Plan benefit covers services related to infusion therapy."
* #tmjtx   "Treatment for Temporomandibular Joint Disorders"   "Plan benefit covers services related to treatment of Temporomandibular Joint disorder."
* #nutrition   "Nutritional Counseling"   "Nutritional Counseling."
* #reconsurg   "Reconstructive Surgery"   "Plan benefit covers services related to reconstructive surgery."
* #days   "Days"   "Measure of service covered by the plan benefit expressed in a definite number of days."
* #visit   "Visits"   "Measure of service covered by the plan benefit expressed in a definite number of visits."
* #procedure   "Procedures"   "Measure of service covered by the plan benefit expressed in a set of actions covered."
* #admission   "Admissions"   "Measure of services covered by the benefit plan expressed in relation to patient's acceptance for medical and nursing care in a hospital or other health care institution."
* #visithrs   "Hours per visit"   "Measure expresses how many hours per visit are covered by the insurance benefit plan."
* #weekhrs   "Hours per week"   "Measure expresses how many hours per week are covered by the insurance benefit plan."
* #mthhrs   "Hours per month"   "Measure expressed how many hours per month are covered by the insurance benefit plan."
* #yrhrs   "Hours per year"   "Measure expreses how many hours per year are covered by the insurance benfit plan."
* #daysperwk   "Days per week"   "Measure of service covered by the plan benefit expressed in a how many days are covered in a week."
* #dayspermth   "Days per month"   "Measure of service covered by the plan benefit expressed in a how many days are covered in a month."
* #daysperyr   "Days per year"   "Measure of service covered by the plan benefit expressed in a how many days are covered in a year."
* #mthsperyr   "Months per year"   "Measure of service covered by the plan benefit expressed in a how many month are covered in a year."
* #visitsperday   "Visits per day"   "Measure of service covered by the plan benefit expressed in a definite number of visits covered per day."
* #visitsperweek   "Visits per week"   "Measure of service covered by the plan benefit expressed in a definite number of visits covered per week."
* #visitspermth   "Visits per month"   "Measure of service covered by the plan benefit expressed in a definite number of visits covered per month."
* #visitsperyr   "Visits per year"   "Measure of service covered by the plan benefit expressed in a definite number of visits covered per year."
* #lifetimevisits   "Lifetime visits"   "Measure of service covered by the plan benefit expressed in a definite number of visits covered through lifetime."
* #txperweek   "Treatments per week"   "Measure of service covered by the plan benefit expressed in a definite number of treatment actions covered in a week."
* #txpermnth   "Treatments per month"   "Measure of service covered by the plan benefit expressed in a definite number of treatment actions covered in a month."
* #txlifetime   "Lifetime treatments"   "Measure of service covered by the plan benefit expressed in a definite number of treatment actions covered in a lifetime."
* #admitslifetime   "Lifetime admissions"   "Measure of service covered by the plan benefit expressed in a definite number admission actions covered through lifetime."
* #procperwk   "Procedures per week"   "Measure of service covered by the plan benefit expressed in a definite number procedure covered per week."
* #procpermnth   "Procedures per month"   "Measure of service covered by the plan benefit expressed in a definite number procedure covered per month."
* #procperyr   "Procedures per year"   "Measure of service covered by the plan benefit expressed in a definite number procedure covered per year."
* #proclifetime   "Lifetime procedures"   "Measure of service covered by the plan benefit expressed in a definite number procedure covered per lifetime."
* #daysperadmission   "Days per admission"   "Measure of service covered by the plan benefit expressed in a definite number of days covered for each individual admission."
* #procperepi   "Procedures per episode"   "Measure of service covered by the plan benefit expressed in a definite number of procedures covered for each individual treatment episode."
* #cat   "Catastrophic"   "'Catastrophic' health insurance plans have low monthly premiums and very high deductibles. They may cover worst-case scenarios, like getting seriously sick or injured. Patient pays most routine medical expenses."
* #bronze   "Bronze"   "'Bronze' type plan defines the estimated split costs of the plan, where patient is responsible for 40% of their healthcare cost while 60% is covered by the plan."
* #bronzeexp   "Expanded Bronze"   "The 'extended bronze' plan is an addition to the bronze metal level which establishes the de minimis variation range for the actuarial value (AV) level of coverage to allow variation in the AV to -4/+2 percentage points."
* #silver   "Silver"   "'Silver' type plan defines the estimated split costs of the plan, where patient is responsible for 30% of their healthcare cost while 70% is covered by the plan."
* #gold   "Gold"   "'Gold' type plan defines the estimated split costs of the plan, where patient is responsible for 20% of their healthcare cost while 80% is covered by the plan."
* #platinum   "Platinum"   "'Platinum' type plan defines the estimated split costs of the plan, where patient is responsible for 10% of their healthcare cost while 90% is covered by the plan."
* #lowded   "Low deductible"   "A health insurance plan with higher premiums and lower out of pocket cost than a traditional health plan."
* #highded   "High deductible"   "A health insurance plan with lower premiums and higher out of pocket cost than a traditional health plan."

//FHIR-35965 service-category and service-type code systems are erroneously defined as 'example'
/*
CodeSystem: HealthcareServiceTypeCS
Title: "HealthcareServiceTypeCS"
Description: "The type of healthcare service"
* ^experimental = false
* ^caseSensitive = true
* #1  "Adoption/Permanent Care Info/Support"   "Adoption/Permanent Care Information and Support"
* #3	"Aged Care Information/Referral"   "Aged Care Information and Referral"
* #8	"Home Care/Housekeeping Assistance"	"Home care/housekeeping assistance"
* #9	"Home Maintenance and Repair"	"Home maintenance and repair"
* #10	"Personal Alarms/Alerts"  "Personal alarms/alerts"
* #11	"Personal Care for Older Persons"	"Personal care for older persons"
* #21	"Hydrotherapy" "Hydrotherapy"
* #26 "Meditation" "Meditation"
* #31 "Relaxation Therapy" "Relaxation Therapy"
* #33 "Western Herbal Medicine" "Western Herbal Medicine"
* #34 "Family Day care" "Family Day care"
* #36 "Kindergarten Inclusion Support" "Kindergarten Inclusion Support"
* #42 "Parenting/Family Support/Education" "Parenting/Family Support/Education"
* #51 "Blood Donation" "Blood Donation"
* #55 "Health Advocacy/Liaison Service" "Health Advocacy/Liaison Service" 
* #67 "Sexual Health" "Sexual Health"
* #68 "Speech Pathology/Therapy" "Speech Pathology/Therapy"
* #69 "Bereavement Counselling" "Bereavement Counselling"
* #70 "Crisis Counselling" "Crisis Counselling"
* #71 "Family Counselling/Therapy" "Family Counselling/Therapy"
* #72 "Family Violence Counselling" "Family Violence Counselling"
* #75 "Genetic Counselling" "Genetic Counselling"
* #76 "Health Counselling" "Health Counselling"
* #78 "Problem Gambling Counselling" "Problem Gambling Counselling"
* #79 "Relationship Counselling" "Relationship Counselling" 
* #80 "Sexual Assault Counselling" "Sexual Assault Counselling"
* #81 "Trauma Counselling" "Trauma Counselling"
* #82 "Victims of Crime Counselling" "Victims of Crime Counselling"
* #96 "Disability Advocacy" "Disability Advocacy"
* #97 "Disability Aids & Equipment" "Disability Aids & Equipment"
* #99 "Disability Day Programs/Activities" "Disability Day Programs/Activities"
* #102 "Disability Supported Accommodation" "Disability Supported Accommodation"
* #103 "Early Childhood Intervention" "Early Childhood Intervention"
* #105 "Drug and/or Alcohol Counselling" "Drug and/or Alcohol Counselling"
* #106 "Drug/Alcohol Information/Referral" "Drug/Alcohol Information/Referral"
* #107 "Needle & Syringe Exchange" "Needle & Syringe Exchange"
* #108 "Non-resid. Alcohol/Drug Treatment" "Non-resid. Alcohol/Drug Treatment"
* #111 "Residential Alcohol/Drug Treatment" "Residential Alcohol/Drug Treatment"
* #118 "Employment Placement and/or Support" "Employment Placement and/or Support"
* #119 "Vocational Rehabilitation" "Vocational Rehabilitation"
* #126 "Crisis/Emergency Accommodation" "Crisis/Emergency Accommodation"
* #127 "Homelessness Support" "Homelessness Support"
* #128 "Housing Information/Referral" "Housing Information/Referral"
* #130 "Interpreting/Multilingual Service" "Interpreting/Multilingual Service"
* #134 "Mental Health Advocacy" "Mental Health Advocacy"
* #146 "Physical Activity Programs" "Physical Activity Programs"
* #147 "Physical Fitness Testing" "Physical Fitness Testing"
* #224 "Support Groups" "Support Groups"
* #230 "Patient Transport" "Patient Transport"
* #233 "Abuse" "Abuse"
* #238 "Adult Day Programs" "Adult Day Programs"
* #245 "Aids" 
* #275 "Cancer Support" "Cancer Support"
* #284 "Child Care" "Child Care"
* #296 "Companion Visiting" "Companion Visiting"
* #301 "Contraception Inform" "Contraception Information"
* #308 "Crisis Assessment And Treatment" "Crisis Assessment And Treatment"
* #309 "Crisis Assistance" "Crisis Assistance"
* #310 "Crisis Refuge" "Crisis Refuge"
* #316 "Depression" "Depression"
* #317 "Detoxification" "Detoxification"
* #323 "Divorce" "Divorce"
* #328 "Eating Disorder" "Eating Disorder"
* #331 "Employment And Train" "Employment And Training"
* #344 "Food" "Food"
* #345 "Food Vouchers" "Food Vouchers"
* #352 "Grief Counselling" "Grief Counselling"
* #366 "Household Items" "Household Items"
* #400 "Pain" "Pain"
* #409 "Postnatal" "Postnatal"
* #411 "Pregnancy Tests" "Pregnancy Tests"
* #427 "Rent Assistance" "Rent Assistance"
* #429 "Residential Respite" "Residential Respite"
* #440 "Sexual Issues" "Sexual Issues"
* #446 "Speech Therapist" "Speech Therapist"
* #459 "Tenancy Advice" "Tenancy Advice"
* #468 "Vocational Guidance" "Vocational Guidance"
* #470 "Welfare Assistance" "Welfare Assistance"
* #488 "Diabetes Educator" "Diabetes Educator"
* #494 "Youth Services" "Youth Services"
* #495 "Youth Health" "Youth Health"
* #501 "Cancer Services" "Cancer Services"
* #513 "Cancer Support Groups" "Cancer Support Groups"
* #530 "Disability Care Transport" "Disability Care Transport"
* #531 "Aged Care Transport" "Aged Care Transport"
* #532 "Diabetes Education Service" "Diabetes Education services"
* #534 "Young Adult Diabetes" "Young Adult Diabetes"
* #535 "Pulmonary Rehabilita" "Pulmonary Rehabilitation"
* #537 "Medication Reviews" "Medication Reviews"
* #539 "Telephone Help Line" "Telephone Help Line"
* #546 "Veterans Services" "Veterans Services"
* #548 "Food Relief/Food/Meals" "Food Relief/Food/Meals"
* #552 "Drug and/or Alcohol Support Groups" "Drug and/or Alcohol Support Groups"
* #554 "Chronic Disease Management" "Chronic Disease Management"
* #559 "Women Health" "Women Health"
* #560 "Men Health" "Men Health"
* #565 "Youth Drop In/Assistance/Support" "Youth Drop In/Assistance/Support"
* #569 "Migrant Health Clinic" "Migrant Health Clinic"
* #570 "Refugee Health Clinic" "Refugee Health Clinic"
* #571 "Aboriginal Health Clinic" "Aboriginal Health Clinic"
* #614 "Development-Life Skills" "Development-Life Skills"
* #628 "Vehicle modifications" "Vehicle modifications"
*/

/*
CodeSystem: HealthcareServiceProgramCS
Title: "Healthcare Program"
Description: "Healthcare Program"
* ^experimental = false
* ^caseSensitive = true
* #1 "Acquired Brain Injury (ABI) Program" "Acquired Brain Injury (ABI) Program"
* #2 "ABI Slow To Recover (ABI STR) Program" "ABI Slow To Recover (ABI STR) Program"
* #3 "Access Programs" "Access Programs"
* #4 "Adult and Further Education (ACFE) Program" "Adult and Further Education (ACFE) Program"
* #5 "Adult Day Activity and Support Services (ADASS) Program" "Adult Day Activity and Support Services (ADASS) Program"
* #6 "Adult Day Care Program" "Adult Day Care Program"
* #7 "ATSS (Adult Training Support Service)" "ATSS (Adult Training Support Service)"
* #8 "Community Aged Care Packages (CACP)" "Community Aged Care Packages (CACP)"
* #9 "Care Coordination & Supplementary Services (CCSS)" "Care Coordination & Supplementary Services (CCSS)"
* #10 "Cognitive Dementia Memory Service (CDAMS)" "Cognitive Dementia Memory Service (CDAMS)"
* #11 "ChildFIRST" "ChildFIRST"
* #12 "Children Contact Services" "Children Contact Services"
* #13 "Community Visitors Scheme" "Community Visitors Scheme"
* #14 "CPP (Community Partners Program)" "CPP (Community Partners Program)"
* #15 "Closing the Gap (CTG)" "Closing the Gap (CTG)"
* #16 "Coordinated Veterans' Care (CVC) Program" "Coordinated Veterans' Care (CVC) Program"
* #17 "Day Program" "Day Program"
* #18 "Drop In Program" "Drop In Program"
* #19 "Early Years Program" "Early Years Program"
* #20 "Employee Assistance Program" "Employee Assistance Program"
* #21 "Home And Community Care (HACC)" "Home And Community Care (HACC)"
* #22 "Hospital Admission Risk Program (HARP)" "Hospital Admission Risk Program (HARP)"
* #23 "Hospital in the Home (HITH) Program" "Hospital in the Home (HITH) Program"
* #24 "ICTP (Intensive Community Treatment Program)" "ICTP (Intensive Community Treatment Program)"
* #25 "IFSS (Intensive Family Support Program)" "IFSS (Intensive Family Support Program)"
* #26 "JPET (Job Placement, Education and Training)" "JPET (Job Placement, Education and Training)"
* #27 "Koori Juvenile Justice Program" "Koori Juvenile Justice Program"
* #28 "Language Literacy and Numeracy Program" "Language Literacy and Numeracy Program"
* #29 "Life Skills Program" "Life Skills Program"
* #30 "LMP (Lifestyle Modification Program)" "LMP (Lifestyle Modification Program)"
* #31 "MedsCheck Program" "MedsCheck Program"
* #32 "Methadone/Buprenorphine Program" "Methadone/Buprenorphine Program"
* #33 "National Disabilities Insurance Scheme (NDIS)" "National Disabilities Insurance Scheme (NDIS)"
* #34 "National Diabetes Services Scheme (NDSS)" "National Diabetes Services Scheme (NDSS)"
* #35 "Needle/Syringe Program" "Needle/Syringe Program"
* #36 "nPEP Program" "nPEP Program"
* #37 "Personal Support Program" "Personal Support Program"
* #38 "Partners in Recovery (PIR) Program" "Partners in Recovery (PIR) Program"
* #39 "Pre-employment Program" "Pre-employment Program"
* #40 "Reconnect Program" "Reconnect Program"
* #41 "Sexual Abuse Counselling and Prevention Program (SACPP)" "Sexual Abuse Counselling and Prevention Program (SACPP)"
* #42 "Social Support Programs" "Social Support Programs"
* #43 "Supported Residential Service (SRS)" "Supported Residential Service (SRS)"
* #44 "Tasmanian Aboriginal Centre (TAC)" "Tasmanian Aboriginal Centre (TAC)"
* #45 "Victim Assistance Program" "Victim Assistance Program"
*/





---

// File: input/fsh/Base-Extensions.fsh


Extension: Accessibility
Id: base-ext-accessibility
Title: "NDH Accessibility"
Description: "An extension to describe accessibility options offered by a practitioner or at a location."
* ^context[+].type = #element
* ^context[=].expression = "Practitioner"
* ^context[+].type = #element
* ^context[=].expression = "Location"
* value[x] 1..1 MS
* value[x] only CodeableConcept 
* value[x] from AccessibilityVS (extensible)

Extension: AssociatedServers
Id: base-ext-associatedServers
Title: "NDH Associated Servers"
Description: "This extension is designed to store information about servers that may be associated with the current endpoint. It defines a set of servers that 
could be linked to this endpoint. If a server is associated, the server's type and URL will be included. For example, if your system features two types of endpoints: 
a standard endpoint and a proxy endpoint associated with the server. For example, the proxy endpoint can be configured to interface with AEGIS software, 
allowing the software to record transactions and ensure compliance with pertinent standards or regulations. Implementing such a configuration in a production
environment would offer the flexibility to switch between standard and proxy modes (associated server) as necessary. Consequently, it is essential to have both
standard and proxy endpoints readily available for seamless transitions as required."
* ^context.type = #element
* ^context.expression = "Endpoint"
* extension contains
   associatedServersType  1..1 MS and
   serverURL 0..1 MS 
* extension[associatedServersType].value[x] only CodeableConcept
* extension[associatedServersType] ^short = "Associated Server Type"
* extension[associatedServersType].value[x] 1..1
* extension[associatedServersType].value[x] from NdhAssociatedServersTypeVS (extensible)  
* extension[serverURL].value[x] only string
* extension[serverURL] ^short = "Binary"
* extension[serverURL].value[x] 1..1

/*
Extension: CareteamAlias
Id: base-ext-careteam-alias
Title: "NDH Careteam Alias"
Description: "Alternate names by which the team is known"
* ^context.expression = "CareTeam"
* ^context.type = #element
* ^date = "2017-11-16T15:42:31.192-05:00"
* . ^short = "Alias"
* . ^definition = "Alternate names by which the team is also known"
* valueString 1.. MS
* valueString only string
* valueString ^sliceName = "valueString"
* valueString ^label = "alias"
* valueString ^short = "Alias"
* valueString ^definition = "Alternate names by which the team is also known"
*/

Extension: CommunicationProficiency
Id: base-ext-communication-proficiency
Title: "NDH Communication Proficiency"
Description: "An extension to express a practitioner’s spoken proficiency with the language indicated in practitioner.communication."
* ^context.type = #fhirpath
* ^context.expression = "descendants()"
* value[x] 1..1 
* value[x] only CodeableConcept 
* value[x] from $ILRReadingScaleVS (extensible)

Extension: EndpointConnectionTypeVersion
Id: base-ext-endpoint-connection-type-version
Title: "NDH Endpoint Connection Type Version"
Description: "An extension for endpoint connection type version"
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 0..1 MS
* value[x] only CodeableConcept
* value[x] from $FHIRVersionVS (extensible)
//* value[x] from EndpointConnectionTypeVersionVS (extensible)

Extension: EndpointTestingCertification   
Id: base-ext-endpoint-testing-certification
Title: "NDH Endpoint Testing Certification"
Description: "An extension for endpoint testing certification"
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 0..0
* extension contains
   testBy 0..1 and
   element 0..* and
   when 0..1 and
   testName 0..* and
   method 0..* and 
   certificate 0..1 and
   expirationDate 0..1 and 
   lastUpdated 0..1
* extension[testBy].value[x] only Reference(NdhOrganization)
* extension[testBy] ^short = "Organization conducting or providing the testing"
* extension[element].value[x] only Expression
* extension[element] ^short = "FHIRPath expression to the element being tested/verified"
* extension[when].value[x] only dateTime
* extension[when] ^short = "Date and time the test was performed"
* extension[testName].value[x] only string
* extension[testName] ^short = "Name of the test"
* extension[method].value[x] only CodeableConcept
* extension[method] ^short = "Method used to perform the test"
* extension[method].value[x] from EndpointTestingMethodVS (extensible)
* extension[certificate].value[x] only base64Binary
* extension[certificate] ^short = "X509 V3 identity Certificate issued and signed by Testing/Certification entity"
* extension[expirationDate].value[x] only date
* extension[expirationDate] ^short = "Expiration date of the certificate"
* extension[lastUpdated].value[x] only dateTime
* extension[lastUpdated] ^short = "Timestamp of the last update for the Endpoint instance during certificate testing"

Extension: ContactPointAvailableTime
Id: base-ext-contactpoint-availabletime
Title: "NDH Contactpoint Availabletime"
Description: "An extension representing the days and times a contact point is available"
* ^context.type = #fhirpath
* ^context.expression = "descendants()"
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
Id: base-ext-delivery-method
Title: "NDH Delivery Method"
Description: "An extension describing the service delivery method. If service delivery is virtual, one or more delivery modalities should be specified."
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* value[x] 0..0
* extension contains
   deliveryMethodtype 1..1 and
   virtualModalities 0..* MS 
* extension[deliveryMethodtype].value[x] only CodeableConcept 
* extension[deliveryMethodtype].value[x] from $DeliveryMethodVS (required)
* extension[deliveryMethodtype] ^short = "Physical or Virtual Service Delivery"
* extension[deliveryMethodtype].value[x] 1..1
* extension[virtualModalities].value[x] only CodeableConcept 
* extension[virtualModalities].value[x] from VirtualModalitiesVS (extensible)
* extension[virtualModalities].value[x] 1..1
* extension[virtualModalities] ^short = "Modalities of Virtual Delivery"



Extension: Digitalcertificate
Id: base-ext-digitalcertificate
Title: "NDH Digitalcertificate"
Description: "A digital certificate, used to identify a user or group of users, or for encrypted communications"
* ^context[+].type = #element
* ^context[=].expression = "Practitioner"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* value[x] 0..0
* extension contains
   use 0..1 and
   certificate 1..1 and
   expirationDate 1..1
* extension[use] ^short = "Use"
* extension[use].value[x] 1..1
* extension[use].value[x] only Coding
* extension[use].value[x] from DigitalcertificateUseVS (example)
* extension[certificate] ^short = "Certificate"
* extension[certificate].value[x] only string or uri
* extension[certificate].value[x] 1..1
* extension[expirationDate] ^short = "Expiration Date"
* extension[expirationDate].value[x] 1..1
* extension[expirationDate].value[x] only date


Extension: DynamicRegistration
Id: base-ext-dynamicRegistration
Title: "NDH Dynamic Registration"
Description: "Dynamic registration within a trust framework refers to a process where clients can register with a server or service provider 
dynamically and securely at runtime, rather than being pre-registered manually. This approach is often used in environments where scalability, flexibility, 
and security are crucial.  Currently, dynamic registration is used in SMART and UDAP."
* ^context.type = #element
* ^context.expression = "Endpoint"
* extension contains
   trustProfile 0..1 and
   version  0..1 MS
   //binary 1..1 MS 
* extension[trustProfile].value[x] only CodeableConcept
* extension[trustProfile].value[x] from TrustProfileVS (extensible)
* extension[version].value[x] only string
* extension[version] ^short = "Trust Profile Version"
* extension[version].value[x] 0..1

/*
Extension: Ehr
Id: base-ext-ehr
Title: "NDH EHR"
Description: "Information about the EHR system/module used at a location"
* value[x] 0..0
* extension contains
   developer 0..1 MS and
   product 0..1 MS and
   version 0..1 MS and
   certificationEdition 0..1 MS and
   patientAccess 0..* MS and
   certificationID 0..1 MS
* extension[developer].value[x] 1..1
* extension[developer].value[x] only string 
* extension[developer] ^definition = "Developer"
* extension[developer] ^short = "Developer"
* extension[product].value[x] 1..1
* extension[product].value[x] only string
* extension[product] ^definition = "Product"
* extension[product] ^short = "Product"
* extension[version].value[x] 1..1
* extension[version].value[x] only string
* extension[version] ^definition = "Version"
* extension[version] ^short = "Version"
* extension[certificationEdition].value[x] 1..1
* extension[certificationEdition].value[x] only Coding
* extension[certificationEdition] ^definition = "Certification edition"
* extension[certificationEdition] ^short = "Certification edition"
* extension[patientAccess].value[x] 1..1
* extension[patientAccess].value[x] only CodeableConcept
* extension[patientAccess] ^definition = "Patient access"
* extension[patientAccess] ^short = "Patient access"
* extension[certificationID].value[x] 1..1
* extension[certificationID].value[x] only string
* extension[certificationID] ^definition = "Certification ID"
* extension[certificationID] ^short = "Certification ID"
*/

Extension: EndpointRank
Id: base-ext-endpoint-rank
Title: "NDH Endpoint Rank"
Description: "Order established by a Role, Organization… for Endpoints capable of transferring the same content"
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 1..1
* value[x] only positiveInt
//* valuePositiveInt 1..1


Extension: EndpointReference
Id: base-ext-endpoint-reference
Title: "NDH Endpoint Reference"
Description: "The technical details of an endpoint that can be used for electronic services"
//do this way creat slice inside of extension
//* value[x] only Reference
//* valueReference 1..1
//* valueReference only Reference(NdhEndpoint)
//do this way no slice created inside of extension
* ^context[+].type = #element
* ^context[=].expression = "CareTeam"
* ^context[+].type = #element
* ^context[=].expression = "Practitioner"
* value[x] only Reference(NdhEndpoint) 
* value[x] 1..1 

Extension: EndpointenvironmentType
Id: base-ext-endpoint-environment-type
Title: "NDH Endpoint EnvironmentType"
Description: "Endpoint Environment Type"
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 0..1
* value[x] only CodeableConcept
* value[x] from NdhEndpointEnvironmentVS (extensible)

Extension: EndpointIheSpecificConnectionType
Id: base-ext-endpoint-ihe-specific-connection-type
Title: "NDH Endpoint IHE Specific Connection Type"
Description: "Endpoint IHE Specific Connection Type"
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 0..1
* value[x] only CodeableConcept
//* value[x] from EndpointHieSpecificConnectionTypeVS (preferred)
* value[x] from EndpointIheSpecificConnectionTypeVS (preferred)

Extension: EndpointUsecase
Id: base-ext-endpoint-usecase
Title: "NDH Endpoint Usecase"
Description: "EndpointUseCase is an enumeration of the specific use cases (service descriptions) supported by the endpoint"
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 0..0
* extension contains
   endpointUsecasetype 1..1 MS and
   standard 0..1 MS 
* extension[endpointUsecasetype] ^short = "An indication of the type of services supported by the endpoint"
* extension[endpointUsecasetype].value[x] only  CodeableConcept 
* extension[endpointUsecasetype].value[x]  1..1
* extension[endpointUsecasetype].value[x] from NdhFhirEndpointUseCaseVS (extensible)
* extension[standard] ^short = "A URI to a published standard describing the services supported by the endpoint (e.g. an HL7 implementation guide)"
* extension[standard].value[x] only uri 
* extension[standard].value[x] 1..1


Extension: FhirIg
Id: base-ext-fhir-ig
Title: "NDH FHIR IG"
Description: "FHIR IG"
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 0..0
* extension contains
   ig-publication 0..1 and
   ig-name 0..1 and
   ig-version 0..1
* extension[ig-publication].value[x] only uri
* extension[ig-publication] ^short = "IG Publication"
* extension[ig-name] ^short = "IG Name"
* extension[ig-name].value[x] only string
* extension[ig-name].value[x] 1..1
* extension[ig-version].value[x] only string
* extension[ig-version] ^short = "IG Version"
* extension[ig-version].value[x] 1..1

Extension: CombinedPayloadAndMimeType
Id: base-ext-combined-payload-and-mimetype
Title: "NDH Combined Payload And MimeType"
Description: "Combined Payload And MimeType"
//* ^context.type = #element
* ^context[+].type = #extension
* ^context[=].expression = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-supported-ig-actor"
* value[x] 0..0
* extension contains
   payload 0..1 and
   mimeType 0..*
* extension[payload].value[x] only CodeableConcept
* extension[payload].value[x] from NdhDirectTrustPayloadTypeVS (extensible)
* extension[payload].value[x] 1..1
* extension[payload] ^short = "payload type"
* extension[mimeType].value[x] only code
* extension[mimeType].value[x] 1..1
* extension[mimeType] ^short = "mimeType for the payload type"
* extension[mimeType].value[x] from EndpointCommonMimeTypeVS (extensible)

Extension: SupportedIGActor
Id: base-ext-supported-ig-actor
Title: "NDH Supported IG Actor"
Description: "Supported IG Actor"
//* ^context[+].type = #element
* ^context[+].type = #extension
* ^context[=].expression = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-ig-supported"
* value[x] 0..0
* extension contains
   ig-actor-name 0..1 and
   ig-actor 0..1 and
   CombinedPayloadAndMimeType named payload-and-mimetype 0..*
* extension[ig-actor-name].value[x] only string
* extension[ig-actor-name].value[x] 1..1
* extension[ig-actor-name] ^short = "IG Actor Name"
* extension[ig-actor].value[x] only CodeableConcept
* extension[ig-actor].value[x] from IgActorVS (extensible)
* extension[ig-actor].value[x] 1..1
* extension[ig-actor] ^short = "IG Actor"
* extension[payload-and-mimetype] ^short = "Payload and MimeType"


Extension: IgSupported
Id: base-ext-ig-supported
Title: "NDH Supported IG"
Description: "Supported IG"
//* ^context.type = #element
* ^context[+].type = #extension
* ^context[=].expression = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-endpoint-non-fhir-usecase"
* value[x] 0..0
* extension contains
   ig-publication 0..1 and
   ig-name 0..1 and
   ig-version 0..1 and
   SupportedIGActor named supported-ig-actor 0..*
* extension[ig-publication].value[x] only uri
* extension[ig-publication] ^short = "IG Publication"
* extension[ig-name] ^short = "IG Name"
* extension[ig-name].value[x] only string
* extension[ig-name].value[x] 1..1
* extension[ig-version].value[x] only string
* extension[ig-version] ^short = "IG Version"
* extension[ig-version].value[x] 1..1

Extension: EndpointNonFhirUsecase
Id: base-ext-endpoint-non-fhir-usecase
Title: "NDH Endpoint Non FHIR Usecase"
Description: "NonEndpointUseCase is an enumeration of the specific use cases (service descriptions) supported by the endpoint"
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 0..0
* extension contains
   endpointUsecasetype 0..1 and
   IgSupported named ig-supported 0..*
* extension[endpointUsecasetype] ^short = "An indication of the type of services supported by the endpoint"
* extension[endpointUsecasetype].value[x] only  CodeableConcept 
* extension[endpointUsecasetype].value[x]  0..1
* extension[endpointUsecasetype].value[x] from NdhDirectTrustEndpointUsecaseVS (extensible)
* extension[ig-supported] ^short = "IG supported"

Extension: FundingSource
Id: base-ext-fundingSource
Title: "NDH Funding Source"
Description: "The sources of funding for a service or organization"
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* extension contains
    fundingSourceId 0..1 MS and
    fundingOrganization 0..* and
    fundingSource 1..1 MS
* extension[fundingSourceId].value[x] only string
* extension[fundingSource].value[x] only string
* extension[fundingOrganization].value[x] only Reference(NdhOrganization)

Extension: HealthcareServiceReference
Id: base-ext-healthcareservice-reference
Title: "NDH Healthcareservice Reference"
Description: "Reference to healthcareservice resource"
* ^context.type = #element
* ^context.expression = "CareTeam"
* value[x] only Reference(NdhHealthcareService) 
* value[x] 1..1 MS 

Extension: IdentifierStatus
Id: base-ext-identifier-status
Title: "NDH Identifier Status"
Description: "Describes the status of an identifier"
* ^context.expression = "Identifier"
* ^context.type = #element
* ^date = "2017-11-20T11:33:43.51-05:00"
* value[x] 1..1 MS
* value[x] only code
* value[x] from $IdentifierStatusVS (required)
* value[x] ^short = "active|inactive|issued-in-error|expired|revoked|pending|provisional|unknown"

Extension: InsurancePlanReference
Id: base-ext-insuranceplan-reference
Title: "NDH InsurancePlan Reference"
Description: "Reference to insuranceplan resource"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* value[x] only Reference(NdhInsurancePlan)
* value[x] 1..1 MS

Extension: LocationReference
Id: base-ext-location-reference
Title: "NDH Location Reference"
Description: "A reference to a Location resource (NDH-Location) defining the coverage area of a health insurance provider network"
* ^context[+].type = #element
* ^context[=].expression = "CareTeam"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* value[x] only Reference (NdhLocation)
* value[x] 1..1 MS 

Extension: NewPatientsCharacteristics
Id: base-ext-newpatients-characteristics
Title: "NDH New Patients Characteristics"
Description: "Characteristics of accepted patients"
* ^context[+].type = #extension
* ^context[=].expression = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients"
* value[x] 1..1
* value[x] only string
* value[x] ^short = "Characteristics of accepted patients"

Extension: NewPatients
Id: base-ext-newpatients
Title: "NDH New Patients"
Description: "New Patients indicates whether new patients are being accepted in general, or from a specific network.   
              This extension is included in the PractitionerRole, HealthcareService, and Location profiles.  
              This provides needed flexibility for specifying whether a provider accepts new patients by location and network."
* obeys new-patients-characteristics
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* ^context[+].type = #element
* ^context[=].expression = "Location"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* value[x] 0..0
* extension contains
   acceptingPatients  1..1 MS and
   fromNetwork 0..1 MS  and
   NewPatientsCharacteristics named characteristics 0..* MS 
* extension[acceptingPatients].value[x] only CodeableConcept
* extension[acceptingPatients] ^short = "Accepting Patients"
* extension[acceptingPatients].value[x] 1..1
* extension[acceptingPatients].value[x] from AcceptingPatientsVS (required)
* extension[fromNetwork].value[x] only Reference(NdhNetwork)
* extension[fromNetwork].value[x] 1..1
* extension[fromNetwork] ^short = "From Network"
//* extension[characteristics].value[x] only string
//* extension[characteristics].value[x] 1..1
* extension[characteristics] ^short = "Characteristics of accepted patients"

Extension: NetworkReference
Id: base-ext-network-reference
Title: "NDH Network Reference"
Description: "A reference to the healthcare provider insurance networks (NdhNetwork) the practitioner participates in through their role"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* value[x] only Reference(NdhNetwork) 
* value[x] 1..1 MS 

Extension: OrgAliasType
Id: base-ext-org-alias-type
Title: "NDH Organization Alias Type"
Description: "Type of organization alias (legal alternative, historical)"
* ^context.type = #fhirpath
* ^context.expression = "descendants()"
* value[x] 0..1
* value[x] ^short = "Alias Type"
* value[x] only CodeableConcept
* value[x] 1..1 MS
* value[x] from OrgAliasTypeVS (example)

Extension: OrgAliasPeriod
Id: base-ext-org-alias-period
Title: "NDH Organization Alias Period"
Description: "The period of time the organization alias was actively used"
* ^context.type = #fhirpath
* ^context.expression = "descendants()"
* value[x] 0..1 
* value[x] ^short = "Alias Period"
* value[x] only Period
* value[x] 1..1 MS

Extension: OrgDescription
Id: base-ext-org-description
Title: "NDH Org Description"
Description: "An extension to provide a human-readable description of an organization"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* value[x] 1..1 MS
* value[x] only string

Extension: PaymentAccepted
Id: base-ext-paymentAccepted
Title: "NDH Payment Accepted"
Description: "Methods of payment that can be used for a healthcare service"
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* value[x] 0..1 
* value[x] only CodeableConcept 
* value[x] from $paymentTypeVS (required)

Extension: VerificationStatus
Id: base-ext-verification-status
Title: "NDH Verification Status"
Description: "Indicates a resource instance verification status"
* ^context[+].type = #element
* ^context[=].expression = "CareTeam"
* ^context[+].type = #element
* ^context[=].expression = "Endpoint"
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* ^context[+].type = #element
* ^context[=].expression = "InsurancePlan"
* ^context[+].type = #element
* ^context[=].expression = "Location"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* ^context[+].type = #element
* ^context[=].expression = "OrganizationAffiliation"
* ^context[+].type = #element
* ^context[=].expression = "Practitioner"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* value[x] 0..1
* value[x] only CodeableConcept
* value[x] from NdhVerificationStatusVS (extensible)


Extension: PractitionerQualification
Id: base-ext-practitioner-qualification
Title: "NDH Practitioner Qualification"
Description: "An extension to add status and whereValid elements to a practitioner’s qualifications."
* ^context.type = #fhirpath
* ^context.expression = "descendants()"
* value[x] 0..0
* extension contains
   status 1..1 MS and
   whereValid 0..* MS 
* extension[status] ^short = "Status"
* extension[status].value[x] only  code 
* extension[status].value[x] 1..1
* extension[status].value[x] from QualificationStatusVS (required)
* extension[status].value[x] =  $QualificationStatusCS#active (exactly)
* extension[whereValid] ^short = "Where the qualification is valid"
//* extension[whereValid].value[x] only CodeableConcept or Reference(NdhLocation)
* extension[whereValid].value[x] only CodeableConcept
* extension[whereValid].value[x] from $USPSState (required)
//* extension[whereValid].value[x] 1..1

Extension: Qualification
Id: base-ext-qualification
Title: "NDH Qualification"
Description: "An extension to add qualifications for an organization (e.g. accreditation) or practitionerRole 
(e.g. registered to prescribe controlled substances)."
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* ^context[+].type = #element
* ^context[=].expression = "OrganizationAffiliation"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* value[x] 0..0
* extension contains
   identifier 0..* MS and
   code 1..1 MS and
   issuer 0..1 MS and
   status 1..1 MS and
   period 0..1 MS and
   whereValid 0..* MS
* extension[identifier] ^short = "Identifier"
* extension[identifier].value[x] 1..1
* extension[identifier].value[x] only Identifier
* extension[code] ^short = "Code"
* extension[code].value[x] 1..1
* extension[code].value[x] only CodeableConcept
* extension[code].value[x] from SpecialtyAndDegreeLicenseCertificateVS (extensible)
* extension[issuer] ^short = "Issuer"
* extension[issuer].value[x] 1..1
* extension[issuer].value[x] only Reference(NdhOrganization or NdhNdApiOrganization)
* extension[issuer] ^short = "Reference to NdhOrganization, NdhNdApiOrganization"
* extension[status] ^short = "Status"
* extension[status].value[x] 1..1
* extension[status].value[x] only  code 
* extension[status].value[x] from QualificationStatusVS (required)
* extension[status].value[x] =  $QualificationStatusCS#active (exactly)
* extension[period] ^short = "Period"
* extension[period].value[x] 1..1
* extension[period].value[x] only Period
* extension[whereValid] ^short = "Where the qualification is valid"
* extension[whereValid].value[x] 1..1
* extension[whereValid].value[x] only CodeableConcept or Reference(NdhLocation)
* extension[whereValid].value[x] from $USPSState (required)

Extension: RatingDetails
Id: base-ext-rating-details
Title: "NDH Rating Details"
Description: "Rating Details"
* ^context[+].type = #extension
* ^context[=].expression = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-rating"
* extension contains
   ratingSystem  0..1 and
   ratingType 0..1 and
   ratingValue 0..1
* extension[ratingSystem].value[x] only url
* extension[ratingSystem] ^short = "URL to a specific rating system"
* extension[ratingSystem].value[x] 0..1
* extension[ratingType].value[x] only url
* extension[ratingType] ^short = "URL to a specific rating type"
* extension[ratingType].value[x] 0..1
* extension[ratingValue].value[x] only string or Quantity
* extension[ratingValue] ^short = "Rating Value either Text or Number"
* extension[ratingValue].value[x] 0..1

Extension: Rating
Id: base-ext-rating
Title: "NDH Rating"
Description: "Rating"
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* ^context[+].type = #element
* ^context[=].expression = "Practitioner"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* extension contains
   ratingType  0..1 and
   ratingValue 0..1 and
   RatingDetails named rating-details 0..*
* extension[ratingType] ^short = "Rating type"
* extension[ratingType].value[x] only CodeableConcept
* extension[ratingType].value[x] ^short = "Rating type value set will be defined by the implementer"
* extension[ratingValue].value[x] 1..1
* extension[ratingValue].value[x] only string or Quantity
* extension[ratingValue] ^short = "Rating Value either Text or Number"

Extension: RequiredDocument
Id: base-ext-requiredDocument
Title: "NDH Required Document"
Description: "Documents that are required in order to access or use services (eg. Gov't issued ID, passport)"
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* extension contains
   requiredDocumentId 1..* and 
   document  1..*  
* extension[requiredDocumentId].value[x] only string
* extension[document].value[x] only string

Extension: EndpointAccessControlMechanism
Id: base-ext-endpointAccessControlMechanism
Title: "NDH Endpoint Access Control Mechanism"
Description: "Endpoint access control mechanisms protect and manage access to healthcare endpoints, ensuring secure data exchange between systems. 
They standardize methods to secure endpoints, ensuring interoperability and security.  
In certain use cases requiring system scalability and flexibility, different profiles may be utilized based on the chosen access control mechanism. For example, 
the Unified Data Access Profile (UDAP) uses JWT access tokens."
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from EndpointAccessControlMechanismVS (extensible)

Extension: LanguageSpeak
Id: base-ext-language-speak
Title: "NDH Language Speak"
Description: "Language Speak"
* ^context.type = #fhirpath
* ^context.expression = "descendants()"
* value[x] 1..1
* value[x] only code
* value[x] from $LanguagesVS (extensible)

Extension: Logo
Id: base-ext-logo
Title: "NDH Logo"
Description: "Logo"
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* ^context[+].type = #element
* ^context[=].expression = "OrganizationAffiliation"
* value[x] 1..1
* value[x] only Attachment

/*
Extension: MalpracticePayment
Id: base-ext-malpractice-payment
Title: "NDH Malpractice Payment"
Description: "Malpractice Payment"
* ^context[+].type = #extension
* ^context[=].expression = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-malpractice-coverage-payment"
* extension contains
   amount  0..1 and
   date 0..1 and
   payee 0..1 and
   recipient 0..1
* extension[amount].value[x] only Money
* extension[date].value[x] only dateTime
* extension[payee].value[x] only Reference(NdhOrganization)
* extension[recipient].value[x] only Reference(NdhPractitioner or NdhPractitionerRole or NdhOrganization or NdhOrganizationAffiliation) 

Extension: MalpracticeCoveragePayment
Id: base-ext-malpractice-coverage-payment
Title: "NDH Malpractice Coverage Payment"
Description: "Malpractice Coverage Payment"
* ^context[+].type = #element
* ^context[=].expression = "Practitioner"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* ^context[+].type = #element
* ^context[=].expression = "OrganizationAffiliation"
* extension contains
   MalpracticePayment named payment 0..*
* extension[payment] ^short = "Malpractice Payment"

Extension: DisciplinaryAction
Id: base-ext-disciplinary-action
Title: "NDH Disciplinary Action"
Description: "Disciplinary Action"
* ^context[+].type = #element
* ^context[=].expression = "Practitioner"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* ^context[+].type = #element
* ^context[=].expression = "OrganizationAffiliation"
* extension contains
   actionOn  0..1 and
   actionType  0..1 and
   actionPeriod 0..1 and
   actionStatus 0..1
* extension[actionOn].value[x] only CodeableConcept
* extension[actionOn] ^short = "Action On a particular liecnse or certification"
* extension[actionType].value[x] only CodeableConcept
* extension[actionType] ^short = "Action Type: sanction, excluded"
* extension[actionPeriod].value[x] only Period
* extension[actionPeriod] ^short = "Action start and end date"
* extension[actionStatus].value[x] only CodeableConcept
* extension[actionStatus] ^short = "Action Status: 1830 - recommentation to sanction, 1840 - withdrawal of recomendation to sanction"

*/


Extension: SecureExchangeArtifacts
Id: base-ext-secureExchangeArtifacts
Title: "NDH Secure Exchange Artifacts"
Description: "This extension is designed to store information about the type of public certificate, the public certificate itself, and the expiration date of the 
certificate. Public certificates, issued by Certificate Authorities, are intended for sharing and inspection by others as part of the trust and verification process 
in digital communications. Each certificate includes an expiration date, which is a crucial piece of information easily accessible to anyone examining the certificate. 
The expiration date plays a significant role in validating the certificate's current validity and in maintaining security within digital communications. 
This extension should be used when the standard for exchange requires the discovery of the public key."
* ^context[+].type = #element
* ^context[=].expression = "Endpoint"
* extension contains
   secureExchangeArtifactsType  1..1 MS and
   certificate 0..1 MS and
   expirationDate 0..1
* extension[secureExchangeArtifactsType].value[x] only CodeableConcept
* extension[secureExchangeArtifactsType] ^short = "Secure Artifact Type"
* extension[secureExchangeArtifactsType].value[x] 1..1 
* extension[secureExchangeArtifactsType].value[x] from NdhSecureExchangeArtifactsVS (extensible)
* extension[certificate].value[x] only base64Binary
* extension[certificate].value[x] 1..1
* extension[certificate] ^short = "Certificate"
* extension[expirationDate].value[x] only dateTime
* extension[expirationDate].value[x] 1..1
* extension[expirationDate] ^short = "Expiration Date"

Extension: RestrictFhirPath
Id: base-ext-restrictFhirPath
Title: "NDH usage restriction fhir path"
Description: "NDH usage restriction to resource element level"
* ^context[+].type = #element
* ^context[=].expression = "Consent"
* value[x] 1..1
* value[x] only Expression
* value[x].language = #text/fhirpath


Extension: TrustFramework
Id: base-ext-trustFramework
Title: "NDH Trust Framework"
Description: "A trust framework typically requires the use of signed artifacts and public certificates to ensure security, integrity, and trust in digital communications 
and transactions. For trust frameworks that use private PKI there is no need to use this extension unless the goals is to provide access to endpoints via the endpoint 
reference on any of the relevant resources (e.g., careteam, healthcareService)."
* ^context[+].type = #element
* ^context[=].expression = "Endpoint"
* extension contains
   trustFrameworkType  1..1 MS and
   qualifier 0..1 MS and
   signedArtifact 0..1 and
   publicCertificate 0..1 
* extension[trustFrameworkType].value[x] only CodeableConcept
* extension[trustFrameworkType] ^short = "Trust Framework Type"
* extension[trustFrameworkType].value[x] from TrustFrameworkTypeVS (extensible)
* extension[qualifier].value[x] only string
* extension[qualifier] ^short = "A qualifier associates with an endpoint to provide additional context or information about that endpoint in a trust framework community. 
Qualifiers are used to help other members of the community understand the capabilities, compliance status, or other relevant characteristics of an endpoint."
* extension[qualifier].value[x] 1..1
* extension[signedArtifact].value[x] only base64Binary
* extension[signedArtifact] ^short = "By utilizing a signed artifact, you can identify which Certificate Authority has issued the certificate for the entity that 
signed the artifact. Verifying the issuing Certificate Authority is crucial because it adds an additional layer of trust and security, ensuring that the entity involved 
in the data exchange is legitimate and that their digital identity has been properly validated."
* extension[signedArtifact].value[x] 1..1
* extension[publicCertificate].value[x] only base64Binary
* extension[publicCertificate] ^short = "Public certificates help in affirming that an entity is indeed who they claim to be. These certificates are used to establish 
secure connections via the Mutual TLS (Transport Layer Security) protocol. Public certificates issued by Certificate Authorities are fundamental in establishing a 
secure and trustworthy digital environment. They enable secure communication, ensure data integrity, and facilitate authentication and trust across a wide range of 
online interactions."
* extension[publicCertificate].value[x] 1..1

Extension: UsageRestriction
Id: base-ext-usage-restriction
Title: "NDH Usage Restriction"
Description: """The FHIR specification contains a security meta tag which can be used to inform systems of the sensitivity of resources, as well as by access control 
mechanisms to ensure content isn't exposed that shouldn't be. This mechanism only goes to the resource level, this reference to a usage-restriction (consent) extends 
this further into the resource, and can be applied to any element, and may apply to all properties beneath the element (e.g. If applied to an identifier on a practitioner, 
then all the properties of the identifier should not be exposed unless it is understood) This will be expected to be used as a modifier extension."""
* ^date = "2017-10-20T10:59:36.931+11:00"
* . ^short = "Restriction"
* . ^definition = "Identifies and conveys information about restrictions on the use or release of exchanged information, e.g. information that can only be shared 
under particular condition, such as a signed data use agreement between parties"
* ^context[+].type = #element
* ^context[=].expression = "CareTeam"
* ^context[+].type = #element
* ^context[=].expression = "Endpoint"
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* ^context[+].type = #element
* ^context[=].expression = "InsurancePlan"
* ^context[+].type = #element
* ^context[=].expression = "Location"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* ^context[+].type = #element
* ^context[=].expression = "OrganizationAffiliation"
* ^context[+].type = #element
* ^context[=].expression = "Practitioner"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* value[x] only Reference(NdhRestriction)
* value[x] 1..1
* value[x] ^type.aggregation = #contained
* value[x] ^short = "Reference"
//* value[x].identifier ..0
* value[x] ^definition = "Reference to the restriction resource (consent)"
* value[x] ^comment = "This is anticipated to usually be a reference to a contained resource (this eases distribution, and permits the same consent applying 
to multiple properties in the same resource)"


Extension: ViaIntermediary
Id: base-ext-via-intermediary
Title: "NDH Via Intermediary"
Description: "A reference to an alternative point of contact (NdhPractitionerRole, NdhOrganization, NdhOrganizationAffiliation, or NdhLocation) for this organization"
* ^context.type = #fhirpath
* ^context.expression = "descendants()"
//* ^context.expression = "descendants()"
* value[x] only Reference(NdhPractitionerRole or NdhOrganizationAffiliation or NdhLocation or NdhOrganization) 
* value[x] 1..1 MS

Extension: NdhAgeRange
Id: base-ext-ndh-age-range
Title: "NDH Age Range"
Description: "Age Range"
* ^context[+].type = #extension
* ^context[=].expression = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-service-or-program-requirement"
* value[x] 1..1
* value[x] only Range
* value[x] ^short = "Age Range"

Extension: NdhAgeGroup
Id: base-ext-ndh-age-group
Title: "NDH Age Group"
Description: "Age Group"
* ^context[+].type = #extension
* ^context[=].expression = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-service-or-program-requirement"
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] ^short = "Age Group"
* value[x] from AgeGroupVS (extensible)

Extension: ServiceOrProgramRequirement
Id: base-ext-service-or-program-requirement
Title: "NDH HealthcareService or Program Requirement"
Description: "Service or Program requirement indicates whether the program is available to anyone, or only to those meeting certain criteria." 
* obeys agerange-or-agegroup 
//* ^context[+].type = #fhir
//* ^context[=].expression = "descendants()"
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* value[x] 0..0
* extension contains
   NdhAgeRange named age-range 0..1 and
   NdhAgeGroup named age-group 0..1 and
   birthsex 0..1 and
   gender-identity 0..1 and
   employment-status 0..1 and
   insurance-status 0..1 and
   va-status 0..1 and
   preferred-language 0..1
//* extension[age-range].value[x] only Range
* extension[age-range] ^short = "Age Range"
//* extension[age-range].value[x] 1..1
//* extension[age-group].value[x] only CodeableConcept
* extension[age-group] ^short = "Age Group"
//* extension[age-group].value[x] 1..1
//* extension[age-group].value[x] from AgeGroupVS (extensible)
* extension[birthsex].value[x] only code
* extension[birthsex] ^short = "Birth Sex"
* extension[birthsex].value[x] 1..1
* extension[birthsex].valueCode from http://hl7.org/fhir/us/core/ValueSet/birthsex
* extension[gender-identity].value[x] only CodeableConcept
* extension[gender-identity] ^short = "Gender Identity"
* extension[gender-identity].value[x] 1..1
* extension[gender-identity].valueCodeableConcept from http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1021.32 (extensible)
* extension[employment-status].value[x] only CodeableConcept
* extension[employment-status] ^short = "Employment Status"
* extension[employment-status].value[x] 1..1
* extension[employment-status].value[x] from EmploymentStatusVS (extensible)
* extension[insurance-status].value[x] only CodeableConcept
* extension[insurance-status] ^short = "Insurance Status"
* extension[insurance-status].value[x] 1..1
* extension[insurance-status].value[x] from InsuranceStatusVS (extensible)
* extension[va-status].value[x] only boolean
* extension[va-status] ^short = "Veteran Status"
* extension[va-status].value[x] 1..1
* extension[preferred-language].value[x] only CodeableConcept
* extension[preferred-language].value[x] from $LanguagesVS (extensible)




---

// File: input/fsh/Base-Invariant.fsh


Invariant:  network-or-NatlDirwork 
Description: "If an insuranceplan does not define a network, then each plan must define one"
//Expression: "network.exists() or plan.network.exists.allTrue()"
Expression: "network.exists() or coverage.network.exists() or plan.network.exists()"
Severity:   #error

Invariant:  agerange-or-agegroup
Description: "a service or program only allow to have either age-range or age-group but not both"
//Expression: "extension('age-range').empty() or extension('age-group').empty() or (extension('age-range').empty() and extension('age-group').empty())"
Expression: "extension('http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-ndh-age-range').empty() or extension('http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-ndh-age-group').empty() or (extension('http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-ndh-age-range').empty() and extension('http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-ndh-age-group').empty())"
Severity:   #error

Invariant:  new-patients-characteristics 
Description: "If no new patients are accepted, no characteristics are allowed"
//Expression: "extension('acceptingPatients').value.coding.exists(code = 'nopt') implies extension('characteristics').empty()"
Expression: "extension('http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients').value.coding.exists(code = 'nopt') implies extension('http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients-characteristics').empty()"
Severity:   #error

Invariant:  organization-or-participatingOrganization 
Description: "NdhOrganizationAffiliation.organization or  NdhOrganizationAffiliation.participatingOrganization"
Expression: "organization.exists() or participatingOrganization.exists()"
Severity:   #error

Invariant: plan-type-is-distinct
Description: "Each InsurancePlan.plan should have a distinct plan.type."
Expression: "plan.type.coding.code.isDistinct()"
Severity:   #error


Invariant:  practitioner-or-organization-or-healthcareservice-or-location 
Description: "If NdhPractitionerRole.practitioner is absent  ( NdhPractitionerRole.organization, NdhPractitionerRole.healthcareservice, NdhPractitionerRole.location) 
must be present"
Expression: "practitioner.exists() or (organization.exists() or healthcareService.exists() or location.exists())"
Severity:   #error

/*
Invariant:  endpoint-fhir-payloadtype
Description: "For non-fhir endpoint, non-fhir-payloadtype extension should be used"
Expression: "connectionType.coding.exists(code = 'hl7-fhir-rest' or code = 'hl7-fhir-msg') implies extension('non-fhir-payloadtype').empty()"
Severity:   #error

Invariant: endpoint-fhir-payloadmimetype 
Description: "For fhir endpoint, payloadMimetype fhir/json, fhir/xml, or fhir/turtl should be used"
Expression: "connectionType.coding.exists(code = 'hl7-fhir-rest' or code = 'hl7-fhir-msg') implies payloadMintype(code='application/fhir+json' or code='appliation/fhir+xml' or code='application/fhir+turtle')"
Severity: #error
*/

---

// File: input/fsh/Base-Profiles.fsh

//The reason could not use uscore is uscore .subject 1..1
Profile: NdhCareTeam
Parent: CareTeam
Id: ndh-CareTeam
Title: "NDH Base CareTeam Profile"
Description: "Defines the basic constraints and extensions on the CareTeam resource for use in a National Directory of Healthcare Providers & Service (NDH)"
* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
* ^status = #active
//* contained only NdhRestriction
//* contained ^short = "NdhRestriction resource instances indicate whether disclosure of any data associated with a care team is restricted."
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.discriminator.type = #value
* extension ^slicing.rules = #open
* extension ^mustSupport = false
* extension contains
    //CareteamAlias named careteam-alias 0..*  and
    careteam-alias named careteam-alias 0..*  and
    LocationReference named location 0..*  and
    HealthcareServiceReference named healthcareservice 0..* and
    EndpointReference named endpoint 0..* and
    UsageRestriction named usage-restriction 0..* and 
    VerificationStatus named verification-status 0..1
* extension[careteam-alias] ^short = "Alternate names by which the care team is also known"
//* extension[careteam-alias] ^definition = "Alternate names by which the team is also known"
* extension[location] ^short = "The location(s) at which the care team operates or delivers services"
//* extension[location] ^definition = "An extension to indicate the location(s) at which the care team operates"
* extension[healthcareservice] ^short = "Services provided by the care team"
//* extension[healthcareservice] ^definition = "An extension to describe the healthcare services provided by the care team"
* extension[endpoint] ^short = "Endpoints for the care team"
//* extension[endpoint] ^definition = "An extensions indicating endpoints for the care team"
//* extension[endpoint].valueReference only Reference(NdhEndpoint)
* extension[usage-restriction] ^short = "Usage Restriction"
* extension[verification-status] ^short = "Indicate care team resource instance verifcation status."
* identifier MS
* identifier.extension ^slicing.discriminator.path = "url"
* identifier.extension ^slicing.discriminator.type = #value
* identifier.extension ^slicing.rules = #open
* identifier.extension ^mustSupport = false
* identifier.extension contains IdentifierStatus named identifier-status 0..1 
* identifier.extension[identifier-status] ^short = "Status"
* identifier.extension[identifier-status] ^definition = "Describes the status of an identifier"
//* identifier.use 
//* identifier.type 
//* identifier.system 
//* identifier.value 
//* identifier.period 
* identifier.assigner only Reference(NdhOrganization)
//* identifier.assigner 
* status 1.. 
* category 1..* MS
* category from NDHCareTeamCategoryVS (extensible) 
* name MS
* subject 0..0 
* encounter 0..0
//* period 
//* participant 
* participant.role from IndividualAndGroupSpecialtiesVS (extensible)
* participant.member only Reference(NdhCareTeam or NdhPractitionerRole or NdhOrganization)
//* participant.member 
* participant.member ^definition = "The role associated with the specific person or organization who is participating/expected to participate in the care team."
* participant.onBehalfOf ..0 
//* participant.period 
* reasonCode ..0 
* reasonReference ..0 
* managingOrganization ..1 
* managingOrganization only Reference(NdhOrganization)
//* telecom 
* telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..* and
       ViaIntermediary named via-intermediary 0..1
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
//* telecom.system 
//* telecom.value 
//* note 
* note.author[x] only string or Reference(NdhPractitioner or NdhOrganization)
//* note.author[x] 
//* note.time 
//* note.text 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:        NdhEndpoint
Parent:         Endpoint
Id:             ndh-Endpoint
Title:          "NDH Base Endpoint Profile"
Description:    "The technical details of an endpoint that can be used for electronic services, such as a portal or FHIR REST services, messaging or operations, or DIRECT messaging."
* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International" 
//* contained only NdhRestriction
//* contained ^short = "Usage restriction may apply to the elements of this resource."
* extension contains 
    EndpointUsecase named endpoint-usecase 0..* and
    EndpointNonFhirUsecase named endpoint-nonfhir-usecase 0..* and
    FhirIg named fhir-ig 0..* and
    SecureExchangeArtifacts named secure-exchange-artifacts 0..*  and
    TrustFramework named trust-framework 0..*  and 
    DynamicRegistration named dynamic-registration 0..*  and
    AssociatedServers named associated-servers 0..* and
    EndpointAccessControlMechanism named access-control-mechanism 0..1 and
    EndpointConnectionTypeVersion named connection-type-version 0..* and
    EndpointRank named endpoint-rank 0..1 and
    EndpointIheSpecificConnectionType named ihe-specific-connection-type 0..* and
    UsageRestriction named usage-restriction 0..* and 
    VerificationStatus named verification-status 0..1 and
    EndpointTestingCertification named testing-certification 0..* and
    EndpointenvironmentType named environmentType 0..*
* extension[endpoint-usecase] ^short = "Endpoint Usecase"
* extension[endpoint-nonfhir-usecase] ^short = "Non FHIR Endpoint Usecase"
* extension[fhir-ig] ^short = "IGs supported"
* extension[secure-exchange-artifacts] ^short = "Secure Exchange Artifacts store information about the type of public certificate, the certificate itself, 
and its expiration date. Issued by Certificate Authorities, public certificates are meant for sharing and verification in digital communications. Each certificate 
includes an expiration date, essential for validating its current validity and maintaining security. This extension is used when the exchange standard requires the discovery of the public key."
* extension[trust-framework] ^short = "A trust framework is a structured set of rules, policies, protocols, and standards that define how trust is established, managed, 
and maintained between different entities (such as organizations, systems, or users) involved in the exchange of healthcare information. It provides the guidelines and 
technical specifications that ensure secure, interoperable, and reliable data exchange."
* extension[dynamic-registration] ^short = "Dynamic registration within a trust framework refers to a process where clients can register with a server or service provider 
dynamically and securely at runtime, rather than being pre-registered manually. This approach is often used in environments where scalability, flexibility, and security 
are crucial. Currently, dynamic registration is used in SMART and UDAP."
* extension[associated-servers] ^short = "Store information about servers that may be associated with the current endpoint. It defines a set of servers that could be linked 
to this endpoint. If a server is associated, its type and URL will be included"
* extension[access-control-mechanism] ^short = "Access control mechanisms are designed to protect and manage access to healthcare endpoints, ensuring that data exchange 
between systems adheres to specific security protocols when needed."
* extension[connection-type-version] ^short = "Connection Type Version"
* extension[endpoint-rank] ^short = "Preferred order for connecting to the endpoint"
* extension[ihe-specific-connection-type] ^short = "IHE Specific Connection Type"
* extension[verification-status] ^short = "Verification Status"
* extension[usage-restriction] ^short = "Usage Restriction"
* extension[testing-certification] ^short = "Endpoint Testing Certification"
* extension[environmentType] ^short = "The type of environment exposed at this endpoint"
* identifier MS
* identifier.extension contains
    IdentifierStatus named identifier-status 0..1
* identifier.assigner only Reference(NdhOrganization)
* status MS 
* status = #active (exactly)  
* connectionType MS  
* connectionType from EndpointConnectionTypeVS (extensible)
* name MS
* managingOrganization only Reference(NdhOrganization)
* managingOrganization MS
//* contact MS
//* contact.value MS 
//* contact.system MS
* contact.extension contains
    ContactPointAvailableTime named contactpoint-availabletime 0..* and
    ViaIntermediary named via-intermediary 0..1
* contact.extension[via-intermediary] ^short = "Via Intermediary"
* payloadType 1..1
//* payloadType MS 
* payloadType from EndpointPayloadTypeVS (extensible) 
* payloadMimeType from EndpointFhirMimeTypeVS (required)
* payloadMimeType MS
//* address MS

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:        NdhHealthcareService
Parent:         HealthcareService
Id:             ndh-HealthcareService
Title:          "NDH Base HealthcareService Profile"
Description:    "The HealthCareService resource typically describes services offered by an organization/practitioner at a location. 
The resource may be used to encompass a variety of services covering the entire healthcare spectrum, including promotion, prevention, diagnostics, pharmacy, 
hospital and ambulatory care, home care, long-term care, and other health-related and community services."
* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
* extension contains
    Rating named rating 0..*  and
    NewPatients named newpatients 0..* and
    DeliveryMethod named deliverymethod 0..* and
    PaymentAccepted named paymentaccepted  0..* and
    RequiredDocument named requiredDocument 0..* and
    FundingSource named fundingSource 0..* and
    UsageRestriction named usage-restriction 0..* and
    VerificationStatus named verification-status 0..1 and
    NetworkReference named network 0..* and
    ServiceOrProgramRequirement named social-service-requirement 0..* and
    Logo named logo 0..1
* extension[Rating] ^short = "Evaluations or reviews for the service."
* extension[newpatients] ^short = "Is the service currently accepting new patients?"
* extension[deliverymethod] ^short = "Method of providing the service."
* extension[paymentaccepted] ^short = "Forms of payment accepted."
* extension[requiredDocument] ^short = "Documents required for the service."
* extension[fundingSource] ^short = "Funding source for the service."
* extension[usage-restriction] ^short = "Usage Restriction"
* extension[verification-status] ^short = "Verification Status"
* extension[network] ^short = "Network associated with social service."
* extension[social-service-requirement] ^short = "Social Service Requirement"
* extension[logo] ^short = "Service Logo"
* identifier.extension contains
    IdentifierStatus named identifier-status 0..1
* identifier.extension[identifier-status] ^short = "Identifier Status"
* identifier.assigner only Reference(NdhOrganization)
* active 1..1 MS
* active = true 
* providedBy only Reference(NdhOrganization) 
* providedBy MS
* category 1..* MS 
* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category ^slicing.description = "NDH HealthcareService Category"
* category ^slicing.ordered = false
* category contains HSC 0..1 MS
* category[HSC] ^short = "NDH HealthcareService Category"
* category[HSC] only CodeableConcept
* category[HSC] from HealthcareServiceCategoryVS (required)
* type MS
* type from HealthcareServiceTypeVS (extensible)
* specialty MS
//* specialty from SpecialtiesVS (extensible)
* specialty from $HealthcareProviderTaxonmyVS (extensible)
* location only Reference(NdhLocation)
* location MS
* name MS
* telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..* and
       ViaIntermediary named via-intermediary 0..1 and
       LanguageSpeak named language-speak 0..*
* telecom.extension[ContactPointAvailableTime] ^short = "Availability Hours for the Contact Point"
* telecom.extension[language-speak] ^short = "Language Speak"
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* coverageArea only Reference(NdhLocation)
* coverageArea MS
* serviceProvisionCode from $ServiceProvisionConditionsVS (extensible)
* eligibility.code from HealthcareServiceEligibilityCodeVS (extensible) 
* program from $ProgramVS (extensible)
* program.extension contains
    ServiceOrProgramRequirement named program-requirement 0..*
* program.extension[program-requirement] ^short = "Program Requirement"
//_* referralMethod from HealthcareServiceReferralMethodVS (extensible)
* endpoint only Reference(NdhEndpoint)
* endpoint MS

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:        NdhInsurancePlan
Parent:         InsurancePlan
Id:             ndh-InsurancePlan
Title:          "NDH Base InsurancePlan Profile"
Description:    "An InsurancePlan is a discrete package of health insurance coverage benefits that are offered under a particular network type. A given payer’s products 
typically differ by network type and/or covered benefits. A plan pairs a product’s covered benefits with the particular cost sharing structure offered to a consumer. 
A given product may comprise multiple plans (i.e. each plan offers different cost sharing requirements for the same set of covered benefits).
InsurancePlan describes a health insurance offering comprised of a list of covered benefits (i.e. the product), costs associated with those benefits (i.e. the plan), 
and additional information about the offering, such as who it is owned and administered by, a coverage area, contact information, etc."
* obeys network-or-NatlDirwork 
* obeys plan-type-is-distinct
* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
//* contained only NdhRestriction
//* contained ^short = "Usage restriction may apply to the elements of this resource."
* extension contains
    UsageRestriction named usage-restriction 0..* and
    VerificationStatus named verification-status 0..1
* extension[usage-restriction] ^short = "Usage Restriction"
* identifier MS
* identifier.extension contains
    IdentifierStatus named identifier-status 0..1
* identifier.assigner only Reference(NdhOrganization)
//* identifier.type MS
//* identifier.value MS
//* identifier.assigner MS
* status 1..1 MS
* status = #active  (exactly) 
* type 1..1  MS
* type from $InsuranceProductTypeVS (extensible)
* type ^short = "Product Type"
* name MS 
//* alias MS
//* period MS
//* ownedBy 1..1 MS
* ownedBy only Reference(NdhOrganization)
//* administeredBy 1..1 MS
* administeredBy only Reference(NdhOrganization)
* coverageArea only Reference(NdhLocation)
* coverageArea MS
//* contact MS
//* contact.name MS
//* contact.name.text MS
//* contact.telecom MS
* contact.telecom.extension contains
    ContactPointAvailableTime named contactpoint-availabletime 0..*  and
    ViaIntermediary named via-intermediary 0..1 
* contact.telecom.extension[via-intermediary] ^short = "Via Intermediary"
//* contact.telecom.system MS
//* contact.telecom.value MS
//* contact.telecom.use
//* contact.telecom.rank
//* contact.telecom.period
* endpoint only Reference(NdhEndpoint)
//* endpoint  MS
* network only Reference(NdhNetwork)
* network  MS
* coverage.type from $InsuranceCoverageTypeVS (extensible)
* coverage.network MS
* coverage.network only Reference(NdhNetwork)
* coverage.benefit.type from NdhBenefitTypeVS (extensible)
//* coverage.benefit.type 1..1 MS
* plan ^short = "Cost sharing details for the plan"
* plan.type from $InsurancePlanTypeVS (extensible)
//* plan.type  MS
* plan.type ^short = "Categorization of the cost sharing for the plan"
* plan.coverageArea only Reference(NdhLocation)
* plan.identifier.extension contains
    IdentifierStatus named identifier-status 0..1
* plan.identifier.assigner only Reference(NdhOrganization)
//* plan.coverageArea MS
* plan.network only Reference(NdhNetwork)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:        NdhLocation
Parent:         $USCoreLocation
Id:             ndh-Location
Title:          "NDH Base Location Profile"
Description:    "A Location is the physical place where healthcare services are provided, practitioners are employed, 
                 organizations are based, etc. Locations can range in scope from a room in a building to a geographic region/area."
* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
//* contained only NdhRestriction
//* contained ^short = "Usage restriction may apply to the elements of this resource."
* extension contains
    $R4GeoJSONExtension named location-boundary-geojson 0..1 and
    Accessibility named accessibility 0..* and
    //Ehr named ehr 0..* and
    NewPatients named newpatients 0..* and
    UsageRestriction named usage-restriction 0..* and
    VerificationStatus named verification-status 0..1
* extension[location-boundary-geojson] ^short = "Associated Region (GeoJSON)"
* extension[newpatients] ^short = "New Patients"
* extension[accessibility] ^short = "Accessibility"
//* extension[usage-restriction] ^short = "Usage Restriction"
//* extension[usage-restriction] only Reference(NdhRestriction)
* identifier.extension contains
    IdentifierStatus named identifier-status 0..1
//* identifier.use MS
//* identifier.type MS
//* identifier.system MS
//* identifier.value MS
//* identifier.period MS
//* identifier.assigner 0..1 MS
* identifier.assigner only Reference(NdhOrganization)
* status 1..1 MS
* status = $LocationStatus#active  (exactly) 
//* mode 0..0 
* name 1..1 MS
//* alias MS
//* description MS
* type MS
* telecom MS
* telecom.extension contains
        ContactPointAvailableTime named contactpoint-availabletime 0..* and
        ViaIntermediary named via-intermediary 0..1 and
        LanguageSpeak named language-speak 0..*
* telecom.extension[language-speak] ^short = "Language Speak"
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
//* telecom.system MS
//* telecom.value MS
* address MS
* address.line 0..4 MS
* address.city MS
* address.state MS
* address.postalCode MS
* address.country MS
//* physicalType MS
//* position MS
* managingOrganization 0..1 MS
* managingOrganization only Reference(NdhOrganization)
* partOf 0..1 MS
* partOf only Reference(NdhLocation)
//* hoursOfOperation MS
//* hoursOfOperation.daysOfWeek MS
//* hoursOfOperation.allDay MS
//* hoursOfOperation.openingTime MS
//* hoursOfOperation.closingTime MS
//* availabilityExceptions MS
* endpoint MS
* endpoint only Reference(NdhEndpoint)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:        NdhNetwork
Parent:         $USCoreOrganization
Id:             ndh-Network
Title:          "NDH Base Network Profile"
Description:    "A Network refers to a healthcare provider insurance network. A healthcare provider insurance network is an aggregation of organizations and individuals 
that deliver a set of services across a geography through health insurance products/plans. In the NDH IG, individuals and organizations are represented as participants 
in a National Directory Exchange Network through the practitionerRole and National Directory Exchange-organizationAffiliation resources, respectively."
* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
//* contained only NdhRestriction
//* contained ^short = "Usage restriction may apply to the elements of this resource."
* extension contains
    LocationReference named location 0..* and
    $OrganizationPeriodExt named organization-period 0..1 and
    UsageRestriction named usage-restriction 0..* and
    VerificationStatus named verification-status 0..1
* extension[location] ^short = "Network coverage area"
* extension[organization-period] ^short = "Valid time period for this Network"
* extension[usage-restriction] ^short = "Usage Restriction"
//* contained 0..1
//* contained only Consent
* contained only NdhRestriction
* identifier MS
* identifier.extension contains
    IdentifierStatus named identifier-status 0..1
//* identifier.type MS
//* identifier.system MS
//* identifier.value MS
//* identifier.assigner MS
* identifier.assigner only Reference(NdhOrganization)
* identifier[NPI] 0..0
* identifier[CLIA] 0..0
//* identifier[NPI].assigner only Reference(NdhOrganization)
//* identifier[CLIA].assigner only Reference(NdhOrganization)
* active 1..1 MS
* active = true (exactly)
* type from NetworkTypeVS (required)
* type 1..1 MS
* name 1..1 MS
//* address
* address.line 0..4 MS
* address.city MS
* address.state MS
* address.postalCode MS
* address.country MS
* partOf 1..1 MS
* partOf only Reference(NdhOrganization)
* partOf ^short = "The organization that manages this network"
//* contact MS
//* contact.name MS
//* contact.telecom MS
* contact.telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..*  and
       ViaIntermediary named via-intermediary 0..1
* contact.telecom.extension[via-intermediary] ^short = "Via Intermediary"
//* contact.telecom.value  MS
//* contact.telecom.system  MS
* endpoint only Reference(NdhEndpoint)
* endpoint MS 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:        NdhOrganization
Parent:         $USCoreOrganization
Id:             ndh-Organization
Title:          "NDH Base Organization Profile"
Description:    "An organization is a formal or informal grouping of people or organizations with a common purpose, such as a company, institution, corporation, 
community group, or healthcare practice. Guidance: When the contact is a department name, rather than a human (e.g., patient help line), include a blank family 
and given name, and provide the department name in contact.name.text"
* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
//* contained only NdhRestriction
//* contained ^short = "Usage restriction may apply to the elements of this resource."
* extension contains
    Rating named rating 0..*  and
    PaymentAccepted named paymentaccepted  0..* and
    FundingSource named fundingSource 0..* and
    OrgDescription named org-description  0..1 and
    Digitalcertificate named digitalcertificate 0..* and
    Qualification named qualification 0..* and
    UsageRestriction named usage-restriction 0..* and
    //UsageRestrictionElementContext named usage-restriction-element-context 0..* and
    InsurancePlanReference named insuranceplan 0..* and
    VerificationStatus named verification-status 0..1 and
    Logo named logo 0..1
* extension[org-description] ^short = "Organization Description"
* extension[digitalcertificate] ^short = "Digital Certificate"
* extension[qualification] ^short = "Qualification"
* extension[usage-restriction] ^short = "Usage Restriction"
* extension[insuranceplan] ^short = "Insurance plan(s) offered to the organization's employees"
* identifier contains 
    TID 0..1
* identifier[TID] ^short = "Tax Identifier"
* identifier[TID] ^patternIdentifier.system = "http://hl7.org.fhir/sid/us-ssn"
//* identifier[TID].assigner only Reference(NdhOrganization)
//* identifier[TID] ^mustSupport = false
//* identifier[TID] ^mapping[0].identifier = "servd"
//* identifier[TID] ^mapping[=].map = "n/a"
* identifier.extension contains
    IdentifierStatus named identifier-status 0..1
* identifier.type
* identifier.value MS
* identifier.system MS
//* identifier.assigner 0..1 MS
* identifier.assigner only Reference(NdhOrganization)
//* identifier[NPI].assigner only Reference(NdhOrganization)
//* identifier[CLIA].assigner only Reference(NdhOrganization)
* active 1..1 MS
* active = true
* type 1..* MS
* type from OrgTypeVS (extensible)
* name 1..1 MS
* alias MS
* alias.extension contains
    OrgAliasType named org-alias-type 0..1 and
    OrgAliasPeriod named org-alias-period 0..1
* alias.extension[OrgAliasType] ^short = "Organization Alias Type"
* alias.extension[OrgAliasPeriod] ^short = "Organization Alias Period"
* telecom MS
* telecom.extension contains
        ContactPointAvailableTime named contactpoint-availabletime 0..*  and
        ViaIntermediary named via-intermediary 0..1 and
        LanguageSpeak named language-speak 0..*
* telecom.extension[language-speak] ^short = "Language Speak"
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* telecom.system MS
* telecom.value MS
//* telecom.rank
* address 0..* MS
* address.extension contains $GeolocationExtension named geolocation 0..1
//* address.type
* address.line 0..4 MS
* address.city MS
* address.state MS
* address.postalCode MS
* address.country MS
* partOf
* partOf only Reference(NdhOrganization)
* contact
* contact.telecom
* contact.telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..* and
       ViaIntermediary named via-intermediary 0..1
* contact.telecom.extension[via-intermediary] ^short = "Via Intermediary"
//* contact.telecom.value
//* contact.telecom.system
//* contact.telecom.use
* endpoint only Reference(NdhEndpoint)
* endpoint MS



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:        NdhOrganizationAffiliation
Parent:         OrganizationAffiliation
Id:             ndh-OrganizationAffiliation
Title:          "NDH Base OrganizationAffiliation Profile"
Description:    "The OrganizationAffiliation resource describes relationships between two or more organizations, including the services one organization provides another, 
the location(s) where they provide services, the availability of those services, electronic endpoints, and other relevant information."
* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
* obeys organization-or-participatingOrganization
//* contained only NdhRestriction
//* contained ^short = "Usage restriction may apply to the elements of this resource."
* extension contains
    Qualification named qualification 0..* and
    UsageRestriction named usage-restriction 0..* and
    VerificationStatus named verification-status 0..1 and
    Logo named logo 0..1
* extension[qualification] ^short = "Qualification"
* extension[UsageRestriction] ^short = "Usage Restriction"
* identifier MS
* identifier.extension contains
    IdentifierStatus named identifier-status 0..1
//* identifier.type MS
//* identifier.value MS
//* identifier.assigner MS
* identifier.assigner only Reference(NdhOrganization)
* active 1..1
* active = true 
* period MS
* organization  MS
* organization only Reference (NdhOrganization)
* participatingOrganization  MS
* participatingOrganization only Reference (NdhOrganization)
//* network  MS
* network only Reference (NdhNetwork)
//* code MS
* code from OrganizationAffiliationRoleVS  (extensible)
//* specialty MS
//* specialty from SpecialtiesVS (extensible)
* specialty from $HealthcareProviderTaxonmyVS (extensible)
* location  MS
* location only Reference (NdhLocation)
//* healthcareService MS
* healthcareService only Reference (NdhHealthcareService)
//* telecom MS
* telecom.extension contains
    ContactPointAvailableTime named contactpoint-availabletime 0..*  and
    ViaIntermediary named via-intermediary 0..1
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
//* telecom.system MS
//* telecom.value MS
//* telecom.rank MS
* endpoint MS
* endpoint only Reference (NdhEndpoint)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:        NdhPractitioner
Parent:         $USCorePractitioner
Id:             ndh-Practitioner
Title:          "NDH Base Practitioner Profile"
Description:    "Practitioner is a person who is directly or indirectly involved in the provisioning of healthcare."
* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
//* contained only NdhRestriction
//* contained ^short = "Usage restriction may apply to the elements of this resource."
* extension contains
    USCoreRaceExtension named us-core-race 0..1 and
    USCoreEthnicityExtension named us-core-ethnicity 0..1 and
    //USCoreGenderIdentityExtension named us-core-genderIdentity 0..* and
    PGenderIdentity named individual-genderIdentity 0..* and
    PPronouns named individual-pronouns 0..* and
    RecordedSexOrGender named individual-recordedSexOrGender 0..* and
    UsageRestriction named usage-restriction 0..* and
    EndpointReference named endpoint 0..* and
    Accessibility named accessibility 0..* and
    Digitalcertificate named digitalcertificate 0..* and
    Rating named rating 0..* and
    VerificationStatus named verification-status 0..1
* extension[usage-restriction] ^short = "Usage Restriction"
//* extension[usage-restriction] ^type.aggregation = "contained"
* extension[endpoint] ^short = "Endpoint Reference"
* extension[accessibility] ^short = "Accessibility"
* extension[digitalcertificate] ^short = "Digital Certificate"
* extension[rating] ^short = "Rating"
* identifier MS
* identifier.extension contains
    IdentifierStatus named identifier-status 0..1
//* identifier.type MS
* identifier.system MS
* identifier.value MS
//* identifier.assigner MS
* identifier.assigner only Reference(NdhOrganization)
//* identifier[NPI].assigner only Reference(NdhOrganization)
* active 1..1
* active = true 
* name 1..* MS
* name.text MS
* name.family 1..1 MS
//* name.given
//* telecom MS
* telecom.extension contains
    ContactPointAvailableTime named contactpoint-availabletime 0..*  and
    ViaIntermediary named via-intermediary 0..1
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
//* address MS
* address.extension contains 
    $GeolocationExtension named geolocation 0..1 MS
* qualification  MS
* qualification.extension contains 
    PractitionerQualification named practitioner-qualification 0..1
//* qualification.identifier MS 
* qualification.identifier.extension contains
    IdentifierStatus named identifier-status 0..1 
* qualification.identifier.assigner only Reference(NdhOrganization)
* qualification.code 1..1
* qualification.code from IndividualSpecialtyAndDegreeLicenseCertificateVS (extensible)
* qualification.period
* qualification.issuer MS
* qualification.issuer only Reference(NdhOrganization)
//* communication MS
* communication.extension contains
   //PatProficiency named communication-proficiency 0..1
   CommunicationProficiency named communication-proficiency 0..1


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:        NdhPractitionerRole
//Parent:         PractitionerRole //organization is based on US Core, do not use us core cause warning
Parent:         $USCorePractitionerRole //US Core require to have contact infor or endpoint
Id:             ndh-PractitionerRole
Title:          "NDH Base PractitionerRole"
Description:    "PractitionerRole typically describes details about a provider. When the provider is a practitioner, there may be a relationship to an organization. 
A provider renders services at a location. Practitioner participation in healthcare provider insurance networks may be direct or through their role at an organization. 
PractitionerRole involves either the actual or potential (hence the optionality on Practitioner) of an individual to play this role on behalf of or under the auspices of 
an organization. The absence of a Practitioner resource does not imply that the Organization itself is playing the role of a Practitioner, instead it implies that role 
has been established by the Organization and MAY apply that to a specific Practitioner."

* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
* obeys practitioner-or-organization-or-healthcareservice-or-location 
//* contained only NdhRestriction
//* contained ^short = "Usage restriction may apply to the elements of this resource."
* extension contains
   Rating named rating 0..* and 
   NewPatients named newpatients 0..* and
   NetworkReference named network 0..1 and
   UsageRestriction named usage-restriction 0..* and
   Digitalcertificate named digitalcertificate 0..* and
   //PractitionerQualification named practitioner-qualification 0..* and
   Qualification named qualification 0..* and
   VerificationStatus named verification-status 0..1
* extension[newpatients] ^short = "New Patients"
* extension[network] ^short = "NetworkReference"
* extension[usage-restriction] ^short = "Usage Restriction"
* extension[digitalcertificate] ^short = "Digital Certificate"
//* extension[practitioner-qualification] ^short = "Practitioner Qualification"
* extension[qualification] ^short = "Qualification"
* identifier MS
//* identifier.type MS
//* identifier.system MS
//* identifier.value MS
* identifier.extension contains
    IdentifierStatus named identifier-status 0..1
* identifier.assigner only Reference(NdhOrganization)
* active 1..1
* active = true
//* period MS
//* practitioner MS
* practitioner only Reference(NdhPractitioner)
//* organization MS
* organization only Reference(NdhOrganization)
* organization ^short = "Organization where the role is available"
* organization ^definition = "The organization where this role is available"
* organization ^comment = "Some relationships (represented as PractitionerRoles) that may exist between practitioners and organizations include:
 - A practitioner may act as a pediatrician when associated with an organization that runs a family clinic.  PractitionerRole.organization would represent the family clinic.
 - The same practitioner may act as a physician when providing physicals for an athletics department at a school.  PractitionerRole.organization would represent the school.
 - A practitioner may perform coumadin anticoagulation services for a clinic run by a health system.   PractitionerRole.organization would represent the coumadin clinic.
 - A practitioner may act as an inpatient pharmacist reviewing and dispensing medications.  PractitionerRole.organization would represent the hospital pharmacy.
 - A practitioner may perform medication management and adherence services for an internal medicine clinic.  PractitionerRole.organization would represent the internal medicine clinic.
 - A practitioner is part of a payer's network such as a preferred provider organization (PPO), or health maintenance organizations (HMO)).  
PractitionerRole.organization would represent the payer's network.
Each of the examples above, would be represented as different PractitionerRole instances, each with a different values for PractitionerRole.organization."
//* code MS
//* code from PractitionerRoleVS (extensible)
//* specialty MS
* code 0..*
* code ^slicing.discriminator.type = #pattern
* code ^slicing.discriminator.path = "$this"
* code ^slicing.rules = #open
* code ^slicing.description = "NDH PractitionerRole Code"
* code ^slicing.ordered = false
* code contains NDHPractitionerRoleCode 0..*
* code[NDHPractitionerRoleCode] ^short = "NDH PractitionerRole Code"
* code[NDHPractitionerRoleCode] only CodeableConcept
* code[NDHPractitionerRoleCode] from PractitionerRoleVS (required)
//* code from PractitionerRoleVS (extensible)
//* specialty MS
* specialty from IndividualAndGroupSpecialtiesVS (extensible)
//* specialty from $HealthcareProviderTaxonmyVS (extensible)
//* location MS
* location only Reference(NdhLocation)
* healthcareService MS
* healthcareService only Reference(NdhHealthcareService)
//* telecom MS
* telecom.extension contains
    ContactPointAvailableTime named contactpoint-availabletime 0..*  and
    ViaIntermediary named via-intermediary 0..1
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
//* telecom.system 1..1 MS
//* telecom.value 1..1 MS
//* telecom.rank MS
//* availableTime MS
//* availableTime.daysOfWeek MS
//* availableTime.allDay MS
//* availableTime.availableStartTime MS
//* availableTime.availableEndTime MS
//* notAvailable MS
//* notAvailable.description MS
//* notAvailable.during MS
//* endpoint MS
* endpoint only Reference(NdhEndpoint) 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//identifier will have an IG build error on snapshot table. it is know issue for fhir 4.0.1 is fixed in 4.3.0
// The purpose of use: Privacy Consent Directive: Agreement, Restriction, Prohibtion to collect, access, use or disclose
// (share) information
// Usage of the Provenance resource may be the best way to manage the tracking of the changes to Consent. 
// The Contract resource can be updated and attached to the Consent.
// Consent resource provides two different mechanisms for recording computable rules:
// 1. the provision structure which provides a simple structure for capturing most common privacy rules
// 2. policyBasis attribute which provides a more flexible mechanism to reference a policy coded in a policy language of choice.
// The restriction resource should be inline with the resource instance. You could access it alone. So the identifier has no meaning. 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile: NdhRestriction
Parent: Consent
Id: ndh-Restriction
Title: "NDH Base Restriction"
Description: "his profile sets minimum expectations for searching for and fetching information associated with a restriction. 
It identifies which elements, extensions, vocabularies and value sets SHALL be restricted in the Consent resource when using this profile."
//* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
* extension contains base-ext-restrictFhirPath named restrictFhirPath 0..*
* ^status = #active
* ^date = "2023-01-22T01:01:31.325+11:00"
//* . ^short = "A policy may permit or deny recipients or roles to perform actions for specific purposes and periods of time"
//* . ^alias = "Restriction"
* identifier ..0 
* status MS
* status ^short = "Indicates the current state of this restriction"
* status ^comment = "This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the restriction as not currently valid."
* scope MS
* scope from ConsentScopeNdhVS (extensible) 
//* scope ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
//* scope ^binding.extension.valueString = "ConsentScope"
* category MS
//* category ^label = "Type"
* category ^short = "describes the type of restriction (e.g. the data may be further disclosed by the downstream workflow environment 
per the terms of a Data Use Agreement)"
//* category ^definition = "Type of restriction (conditional release (per DUA); requires flowdown agreement (for redisclosure); internal use only; 
//release defined by access rights (as specified by the national source))"
* category from ConsentCategoryNdhVS (extensible)
* patient ..0
* dateTime MS
* dateTime ^label = "last updated"
* dateTime ^short = "indicates when the restriction was last updated"
//* dateTime ^definition = "When this Restriction was issued / created / indexed."
* performer ..0
* organization ..0
* source[x] ..0
* policy MS
* policy.authority ..0
* policy.uri MS
* policy.uri ^short = "Specific policy covered by this restriction"
* policyRule  MS
* policyRule from ConsentPolicyRulesVS (extensible)
* verification ..0
* verification.verified MS
* verification.verifiedWith MS
* verification.verificationDate MS
* provision MS
* provision ^short = "defines access rights for restricted content"
//* provision.type = #permit (exactly)
* provision.type MS
* provision.period ..0
* provision.actor 1.. MS
* provision.actor.role MS
* provision.actor.reference MS
* provision.actor.reference ^short = "definedUserOrGroup"
* provision.actor.reference only Reference(NdhCareTeam or NdhOrganization or NdhPractitioner or NdhPractitionerRole)
* provision.action ..1 MS
* provision.action ^short = "reasonType"
* provision.action ^definition = "Describes how the reference is related to the restriction (contributes to; reason for; existance of; specific value)"
* provision.action from $ConsentActionVS (extensible)
* provision.securityLabel MS
* provision.securityLabel ^short = "userType"
* provision.purpose MS
* provision.purpose ^short = "reasonName"
* provision.purpose ^definition = "Name assigned to the restriction condition"
* provision.class ..0
* provision.code ..0
* provision.dataPeriod ..0
* provision.data ..0 MS
* provision.data.meaning MS
* provision.data.reference MS
* provision.provision ..0


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile: NdhVerification
Parent: VerificationResult
Id: ndh-Verification
Title: "NDH Base Verification"
Description: "Describes Verification requirements, source(s), status and dates for one or more elements"
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
* ^date = "2023-01-22T12:42:47.483-05:00"
* ^status = #active
* . ^short = "Verification"
* . ^definition = "Describes Verification requirements, source(s), status and dates for one or more elements"
* target 1..* MS
* target ^short = "The resource instance was verified or attested"
* targetLocation MS
* targetLocation ^short = "The fhirpath location(s) within the resource instance that was verified or attested"
* need 1..1 MS
* status MS
* statusDate 1..1 MS
* validationType 1..1 MS
* validationType from $verificationresult-validation-type
* validationType ^short = "Whether the target was verified against primary source(s), mutually attested between resource(s), or nothing"
//* validationType ^definition = "What the target is validated against (nothing|single source|multiple sources)"
* validationProcess 1..* MS
* validationProcess from NdhVerificationProcessVS (extensible)
* validationProcess ^short = "The process(es) by which the target was verified"
//* validationProcess ^definition = "The process(es) by which the target is validated"
* frequency MS
* frequency ^short = "Frequency of verification"
* lastPerformed MS
* lastPerformed ^short = "The date/time verification was last completed (including failed verifications)"
* nextScheduled MS
* nextScheduled ^short = "The date when target is next verified, if appropriate"
* failureAction 1..1 MS
* primarySource MS
* primarySource.who MS
* primarySource.who only Reference(NdhOrganization or NdhPractitioner or NdhPractitionerRole)
* primarySource.type 1..* MS
* primarySource.type from $VerificationresultPrimarySourceTypeVS (extensible)
//* primarySource.type ^short = "Type of primary source"
* primarySource.type ^definition = "Type of primary source"
* primarySource.communicationMethod 0..* MS
//* primarySource.communicationMethod from NdhVerificationCommunicationMethodVS (extensible)
* primarySource.communicationMethod from $VerificationresultCommunicationMethodVS (extensible)
* primarySource.validationStatus MS
* primarySource.validationDate MS
* primarySource.canPushUpdates MS
* primarySource.pushTypeAvailable MS
* attestation 1..1 MS
* attestation.who 1..1 MS
* attestation.who only Reference(NdhOrganization or NdhPractitioner or NdhPractitionerRole)
* attestation.onBehalfOf MS
* attestation.onBehalfOf only Reference(NdhOrganization or NdhPractitioner or NdhPractitionerRole)
* attestation.communicationMethod 1..1 MS
* attestation.communicationMethod only CodeableConcept
//* attestation.communicationMethod from NdhVerificationCommunicationMethodVS (extensible)
* attestation.communicationMethod from $VerificationresultCommunicationMethodVS (extensible)
* attestation.date 1..1 MS
* attestation.sourceIdentityCertificate MS
* attestation.proxyIdentityCertificate MS
* attestation.proxySignature MS
* attestation.sourceSignature MS
* validator MS
* validator.organization MS
* validator.organization only Reference(NdhOrganization)
* validator.identityCertificate MS
* validator.attestationSignature MS







---

