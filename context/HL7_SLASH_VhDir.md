File: repos/HL7_SLASH_VhDir/sushi-config.yaml

# ╭────────────────────────────────────────────────────────────────────────────────────────────────╮
# │  ACTION REQUIRED: REVIEW AND EDIT THIS FILE TO ENSURE IT ACCURATELY REFLECTS YOUR PROJECT!     │
# │                                                                                                │
# │  This file was generated from your existing project files and will be used for SUSHI           │
# │  configuration from now on. You may delete your package.json as it is no longer needed.        │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯

# ╭──────────────────ImplementationGuide-hl7.fhir.us.subscriptions-backport.json───────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see:                                                                    │
# │  http://build.fhir.org/ig/HL7/fhir-shorthand/branches/beta/sushi.html#ig-development           │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.uv.vhdir
canonical: "http://hl7.org/fhir/uv/vhdir"
version: 1.0.0
name: ValidatedHealthcareDirectory
title: Validated Healthcare Directory
status: active
publisher:
  name: HL7 International / Patient Administration
  url: 'http://www.hl7.org/Special/committees/pafm'
  email: pafm@lists.HL7.org
jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#001 "World"
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: pa
definition:
  extension:
    - url: http://hl7.org/fhir/tools/StructureDefinition/ig-link-dependency
      valueCode: ihe.formatcode.fhir#1.1.0
copyright: >-
  Used by permission of HL7 International all rights reserved Creative Commons License

description: This is a Healthedata1 sandbox for creation of resources and examples
license: CC0-1.0
date: '2022-02-15'
fhirVersion: 4.0.1

dependencies:
  hl7.fhir.uv.bulkdata: 2.0.0
  hl7.fhir.uv.smart-app-launch: 2.1.0

pages:
  index.md:
    title: Home
  guidance.md:
    general-guidance.md:
    technical-guidance.md:
    bulk-data.md:
      title: Bulk Data and Subscriptions
  security.md:
  downloads.md:
  change-notes.md:

parameters:
  path-output: output #docs
  path-resource:
    - input/resources
    - input/examples
    - fsh-generated/resources
  path-pages:
    - input/pages
    - input/intro-notes
    - fsh-generated/includes
  active-tables: 'false'
  apply-contact: 'true'
  apply-jurisdiction: 'true'
  apply-publisher: 'true'
  apply-version: 'true'
  show-inherited-invariants: false
  usage-stats-opt-out: 'true'
  # excludexml: 'false'
  # excludejson: 'false'
  # excludettl: 'true'
  # excludemap: 'true'
  generate:
    - xml
    - json
copyrightyear: '2022+'
releaseLabel: STU1

resources:
  CareTeam/cardiologycareteam1:
    name: CareTeam/cardiologycareteam1
    description: Founding Fathers Heart and Vascular Institute Cardiology Care Team
    exampleBoolean: true

  Endpoint/direct321:
    name: Endpoint/direct321
    description: Founding Fathers Memorial Hospital Heart and Vascular Institute Direct address
    exampleBoolean: true

  VerificationResult/example-license:
    name: VerificationResult/example-license
    description: Demonstrate the details of a practitioner's license having been validated and failing
    exampleBoolean: true

  HealthcareService/ffcardiology:
    name: HealthcareService/ffcardiology
    description: Founding Fathers Memorial Hospital Heart and Vascular Services
    exampleBoolean: true

  Organization/foundingfathers:
    name: Organization/foundingfathers
    description: Founding Fathers Memorial Hospital
    exampleBoolean: true

  HealthcareService/hcs-ws:
    name: HealthcareService/hcs-ws
    description: This is an example of a Women's shelter to demonstrate how to restrict multiple contents
    exampleBoolean: true

  Organization/homeland:
    name: Organization/homeland
    description: Homeland Health Insurance
    exampleBoolean: true

  Organization/independencerehab:
    name: Organization/independencerehab
    description: Independence Rehabilitation Services, Inc.
    exampleBoolean: true

  HealthcareService/independencerehab1:
    name: HealthcareService/independencerehab1
    description: Independence Rehab - Inpatient rehabilitation services
    exampleBoolean: true

  HealthcareService/independencerehab2:
    name: HealthcareService/independencerehab2
    description: Independence Rehab - Outpatient rehabilitation services
    exampleBoolean: true

  InsurancePlan/insuranceplan1:
    name: InsurancePlan/insuranceplan1
    description: Patriot PPO Standard (Patriot Plus) Bronze Plan provided by Homeland Health Insurance in the Washington DC Metro area
    exampleBoolean: true

  Location/loc-ws:
    name: Location/loc-ws
    description: The W Womens Shelter - an example of a resource with a restricted address
    exampleBoolean: true

  Location/loc-ffmh:
    name: Location/loc-ffmh
    description: Founding Fathers Memorial Hospital
    exampleBoolean: true

  Location/loc-ffmh-hvi:
    name: Location/loc-ffmh-hvi
    description: Founding Fathers Memorial Hospital Heart and Vascular Institute
    exampleBoolean: true

  Organization/monumentHIE:
    name: Organization/monumentHIE
    description: Monument Health Information Exchange (HIE)
    exampleBoolean: true

  Organization/mtvernon:
    name: Organization/mtvernon
    description: Mount Vernon Health System
    exampleBoolean: true

  OrganizationAffiliation/orgrole1:
    name: OrganizationAffiliation/orgrole1
    description: Founding Fathers Memorial Hospital receiving rehabilitation services from Independence Rehabilitation Services, Inc. as part of the Patriot Preferred Provider Network
    exampleBoolean: true

  OrganizationAffiliation/orgrole2:
    name: OrganizationAffiliation/orgrole2
    description: Founding Fathers Memorial Hospital is a member of the Monument Health Information Exchange (as a hospital) - also has an endpoint reference
    exampleBoolean: true

  Organization/patriotdental:
    name: Organization/patriotdental
    description: Patriot Dental Provider Network - part of the Homeland Health Insurance organization
    exampleBoolean: true

  Organization/patriotppo:
    name: Organization/patriotppo
    description: Patriot Preferred Provider Network
    exampleBoolean: true

  Practitioner/practitioner1:
    name: Practitioner/practitioner1
    description: George Washington - a practitioner with several qualifications
    exampleBoolean: true

  PractitionerRole/practitionerrole1:
    name: PractitionerRole/practitionerrole1
    description: Geroge Washington as a practitioner working for Founding Fathers Memorial Hospital as a cardiologist in the Heart and Vascular Institute
    exampleBoolean: true

  Location/wash-dc-metro:
    name: Location/wash-dc-metro
    description: Washington, DC metro area - example of a region
    exampleBoolean: true

  Bundle/womens-shelter:
    name: Bundle/womens-shelter
    description: A collection with a Location and HealthcareService with contained restrictions (Consent) indicating which properties require additional access control when used.
    exampleBoolean: true


# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To use a provided ig-data/input/includes/menu.xml file, delete the "menu" property below.     │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  Guidance:
    General Guidance: general-guidance.html
    Technical Guidance: technical-guidance.html
    Bulk Data and Subscriptions: bulk-data.html
  FHIR Artifacts:
      CapabilityStatements: artifacts.html#1
      #Operations: artifacts.html#2
      SearchParameters: artifacts.html#2
      Profiles: artifacts.html#3
      Extensions: artifacts.html#4
      Value Sets: artifacts.html#5
      Code Systems: artifacts.html#6
      Concept Maps: artifacts.html#7
      Examples: artifacts.html#8
  Security: security.html
  Downloads: downloads.html
  Change Notes: change-notes.html


---

// File: input/includes/conformance.md

## Validated Healthcare Directory Conformance Requirements
{:.no_toc}

This section outlines conformance requirements for the Validated Healthcare Directory and Client applications, identifying the specific profiles that need to be supported, the specific RESTful operations that need to be supported, and the search parameters that need to be supported. 

---

<!-- TOC  the css styling for this is \pages\assets\css\project.css under 'markdown-toc'-->
**Contents**

* Do not remove this line (it will not be displayed)
{:toc}

---

<!-- end TOC -->


### Conformance requirements for the Validated Healthcare Directory

Source Resource: [XML](CapabilityStatement-server.xml.html)/[JSON](CapabilityStatement-server.json.html)

1. FHIR Version: 4.0
1. Supported formats: xml, json
1. Published: Draft
1. Published by: Health Level Seven International the Patient Administration Workgroup and the HL7 US Realm Steering Committee.

This section describes the expected capabilities of the Validated Healthcare Directory actor that is responsible for providing responses to the queries submitted by the Validated Healthcare Directory Requestors. The complete list of FHIR profiles, RESTful operations, and search parameters supported by Validated Healthcare Directory are defined. 

#### Behavior

Description:

The Validated Healthcare Directory responder **SHALL**: 

1. Support the Validated Healthcare Directory resource profiles.
1. Implement the RESTful behavior according to the FHIR specification.
1. Return the following response classes:
   - (Status 200): successful operation
   - (Status 400): invalid parameter
   - (Status 401/4xx): unauthorized request
   - (Status 403): insufficient scope
   - (Status 404): unknown resource
   - (Status 410): deleted resource.
1. Support *json* resource formats for all Validated Healthcare Directory interactions.
1. Declare a CapabilityStatement identifying the list of profiles, operations, search parameter supported.

The Validated Healthcare Directory responder **SHOULD**:

1. Support *xml* resource formats for all Validated Healthcare Directory interactions.
1. Identify the Validated Healthcare Directory profiles supported as part of the FHIR `meta.profile` attribute for each instance.

#### Security:

The Validated Healthcare Directorys responder **SHALL**:

1. Implement the [security requirements](security.html) documented in the this IG.
1. A server has ensured that every API request includes a valid Authorization token, supplied via: `Authorization: Bearer {server-specific-token-here}`
1. A server has rejected any unauthorized requests by returning an `HTTP 401` Unauthorized response code.

#### Profile Interaction Summary:

1. All servers **SHALL** make available the [read](http://hl7.org/fhir/STU3/http.html#read) and [search](http://hl7.org/fhir/STU3/http.html#search) interactions for all the Profiles.
1. All servers **SHOULD** make available the [vread](http://hl7.org/fhir/STU3/http.html#vread) and [history-instance](http://hl7.org/fhir/STU3/http.html#history) interactions for all the Profiles.

#### Summary of Validated Healthcare Directory search criteria:

Specific server search capabilities are under analysis. 

#### Resource  Details:

{:.no_toc}

Supported Profiles:  Specific profile support requirements are under analysis.

<p></p>


---

// File: input/includes/link-list.md

[code]: {{site.data.fhir.path}}/datatypes.html#code "FHIR code definition"
[string]: {{site.data.fhir.path}}/datatypes.html#string "FHIR string definition"
[dateTime]: {{site.data.fhir.path}}/datatypes.html#dateTime "FHIR dateTime definition"
[instant]: {{site.data.fhir.path}}/datatypes.html#instant "FHIR instant definition"
[date]: {{site.data.fhir.path}}/datatypes.html#date "FHIR date definition"
[Quantity]: {{site.data.fhir.path}}/datatypes.html#quantity "FHIR Quantity definition"
[Range]: {{site.data.fhir.path}}/datatypes.html#range "FHIR Range definition"
[Ratio]: {{site.data.fhir.path}}/datatypes.html#ratio "FHIR Ratio definition"
[Timing]: {{site.data.fhir.path}}/datatypes.html#timing "FHIR Timing definition"
[Medication]:{{site.data.fhir.path}}/medication.html "FHIR Medication definition"
[MedicationRequest]:{{site.data.fhir.path}}/medicationrequest.html "FHIR MedicationRequest definition"
[MedicationStatement]:{{site.data.fhir.path}}/medicationstatement.html "FHIR MedicationStatement definition"
[MedicationDispense]:{{site.data.fhir.path}}/medicationdispense.html "FHIR MedicationDispense definition"
[Observation]:{{site.data.fhir.path}}/observation.html "FHIR Observation definition"
[MedicationDispense]:{{site.data.fhir.path}}/MedicationDispense.html "FHIR MedicationDispense definition"
[Location]:{{site.data.fhir.path}}/location.html "FHIR Location definition"
[todo]: todo.html "still under construction"
[Pattern]: {{site.data.fhir.path}}/#ElementDefinition.pattern_x_ "FHIR pattern definition"
[required]: {{site.data.fhir.path}}/terminologies.html#required
[extensible]: {{site.data.fhir.path}}/terminologies.html#extensible
[Smart on FHIR Launch]: (http://docs.smarthealthit.org/authorization/) "SMART App Authorization Guide"
 [FHIR search API]: ({{site.data.fhir.path}}/search.html) "FHIR search API documentation"
 [DocumentReference]: ({{site.data.fhir.path}}/documentreference.html) "FHIR DocumentReference Resource documentation"
 [Binary]: ({{site.data.fhir.path}}/binary.html) "FHIR Binary Resource documentation"
[FHIR API for Binary data]: ({{site.data.fhir.path}}/binary.html#rest) "FServing Binary Resources using the RESTful API"
[Postman Collection]: :https://www.getpostman.com/collections/0a54cd0197a5f2fc98d4
[contained]: ({{site.data.fhir.path}}/references#contained.html) "FHIR contained resource documentation"
[General Guidance](general-guidance.html)
[Technical Guidance](technical-guidance.html)
[Bulk Data and Subscriptions](bulk-data.html)


---

// File: input/includes/schematron-list-generator.md

{% for p in site.static_files %}
  {% if p.name contains '.sch' %}
  {% assign title = p.name | remove: '.sch' | split: '-' %}
- [{% for word in title  %}{{ word | capitalize }} {% endfor %}]({{ p.path | remove: '/' }})
  {% endif %}
{% endfor %}


---

// File: input/includes/sp_list.md


**CareTeam**

- [endpoint](SearchParameter-careteam-endpoint.html)
- [identifier](SearchParameter-careteam-identifier.html)
- [identifier-assigner](SearchParameter-careteam-identifier-assigner.html)
- [location](SearchParameter-careteam-location.html)
- [name](SearchParameter-careteam-name.html)
- [organization](SearchParameter-careteam-organization.html)
- [service](SearchParameter-careteam-service.html)
- [status](SearchParameter-careteam-status.html)
- [via-intermediary](SearchParameter-careteam-via-intermediary.html)
- [category](SearchParameter-careteam-category.html)
- [participant](SearchParameter-careteam-participant.html)

**Endpoint**

- [connection-type](SearchParameter-endpoint-connection-type.html)
- [identifier](SearchParameter-endpoint-identifier.html)
- [identifier-assigner](SearchParameter-endpoint-identifier-assigner.html)
- [mime-type](SearchParameter-endpoint-mime-type.html)
- [organization](SearchParameter-endpoint-organization.html)
- [payload-type](SearchParameter-endpoint-payload-type.html)
- [status](SearchParameter-endpoint-status.html)
- [usecase-standard](SearchParameter-endpoint-usecase-standard.html)
- [usecase-type](SearchParameter-endpoint-usecase-type.html)
- [via-intermediary](SearchParameter-endpoint-via-intermediary.html)

**HealthcareService**

- active `http://hl7.org/fhir/SearchParameter/HealthcareService-active`
- [service-category](SearchParameter-healthcareservice-service-category.html)
- [characteristic](SearchParameter-healthcareservice-characteristic.html)
- [coverage-area](SearchParameter-healthcareservice-coverage-area.html)
- [eligibility](SearchParameter-healthcareservice-eligibility.html)
- [endpoint](SearchParameter-healthcareservice-endpoint.html)
- [identifier](SearchParameter-healthcareservice-identifier.html)
- [identifier-assigner](SearchParameter-healthcareservice-identifier-assigner.html)
- [location](SearchParameter-healthcareservice-location.html)
- [name](SearchParameter-healthcareservice-name.html)
- [new-patient](SearchParameter-healthcareservice-new-patient.html)
- [new-patient-network](SearchParameter-healthcareservice-new-patient-network.html)
- [organization](SearchParameter-healthcareservice-organization.html)
- [specialty](SearchParameter-healthcareservice-specialty.html)
- [service-type](SearchParameter-healthcareservice-service-type.html)
- [via-intermediary](SearchParameter-healthcareservice-via-intermediary.html)

**Location**

- [accessibility](SearchParameter-location-accessibility.html)
- [address](SearchParameter-location-address.html)
- [endpoint](SearchParameter-location-endpoint.html)
- [identifier](SearchParameter-location-identifier.html)
- [identifier-assigner](SearchParameter-location-identifier-assigner.html)
- [new-patient](SearchParameter-location-new-patient.html)
- [new-patient-network](SearchParameter-location-new-patient-network.html)
- [organization](SearchParameter-location-organization.html)
- [partof](SearchParameter-location-partof.html)
- [near](http://hl7.org/fhir/location.html#positional) `http://hl7.org/fhir/SearchParameter/Location-near`
- [contains](SearchParameter-location-contains.html)
- [status](SearchParameter-location-status.html)
- [type](SearchParameter-location-type.html)
- [via-intermediary](SearchParameter-location-via-intermediary.html)

**Organization**

- active `http://hl7.org/fhir/SearchParameter/Organization-active`
- address-use `http://hl7.org/fhir/SearchParameter/Organization-address-use`
- [address](SearchParameter-organization-address.html)
- [address-city](SearchParameter-organization-address-city.html)
- [address-country](SearchParameter-organization-address-country.html)
- [address-postalcode](SearchParameter-organization-address-postalcode.html)
- [address-state](SearchParameter-organization-address-state.html)
- [endpoint](SearchParameter-organization-endpoint.html)
- [identifier](SearchParameter-organization-identifier.html)
- [identifier-assigner](SearchParameter-organization-identifier-assigner.html)
- [name](SearchParameter-organization-name.html)
- [partof](SearchParameter-organization-partof.html)
- [via-intermediary](SearchParameter-organization-via-intermediary.html)
- [qualification-code](SearchParameter-organization-qualification-code.html)
- [qualification-issuer](SearchParameter-organization-qualification-issuer.html)
- [qualification-status](SearchParameter-organization-qualification-status.html)
- [qualification-wherevalid-code](SearchParameter-organization-qualification-wherevalid-code.html)
- [qualification-wherevalid-location](SearchParameter-organization-qualification-wherevalid-location.html)

**Network**

- active `http://hl7.org/fhir/SearchParameter/Organization-active`
- address-use `http://hl7.org/fhir/SearchParameter/Organization-address-use`
- [coverage-area](SearchParameter-organization-coverage-area.html)
- [address](SearchParameter-organization-address.html)
- [address-city](SearchParameter-organization-address-city.html)
- [address-country](SearchParameter-organization-address-country.html)
- [address-postalcode](SearchParameter-organization-address-postalcode.html)
- [address-state](SearchParameter-organization-address-state.html)
- [endpoint](SearchParameter-organization-endpoint.html)
- [identifier](SearchParameter-organization-identifier.html)
- [identifier-assigner](SearchParameter-organization-identifier-assigner.html)
- [name](SearchParameter-organization-name.html)
- [partof](SearchParameter-organization-partof.html)
- [via-intermediary](SearchParameter-organization-via-intermediary.html)

**OrganizationAffiliation**

- active `http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-active`
- [endpoint](SearchParameter-organizationaffiliation-endpoint.html)
- [identifier](SearchParameter-organizationaffiliation-identifier.html)
- [identifier-assigner](SearchParameter-organizationaffiliation-identifier-assigner.html)
- [location](SearchParameter-organizationaffiliation-location.html)
- [network](SearchParameter-organizationaffiliation-network.html)
- [participating-organization](SearchParameter-organizationaffiliation-participating-organization.html)
- [primary-organization](SearchParameter-organizationaffiliation-primary-organization.html)
- [role](SearchParameter-organizationaffiliation-role.html)
- [service](SearchParameter-organizationaffiliation-service.html)
- [specialty](SearchParameter-organizationaffiliation-specialty.html)
- [via-intermediary](SearchParameter-organizationaffiliation-via-intermediary.html)

**Practitioner**

- active `http://hl7.org/fhir/SearchParameter/Practitioner-active`
- [endpoint](SearchParameter-practitioner-endpoint.html)
- [name](SearchParameter-practitioner-name.html)
- [family](SearchParameter-practitioner-family-name.html)
- [given](SearchParameter-practitioner-given-name.html)
- [phonetic](SearchParameter-practitioner-phonetic.html)
- [identifier](SearchParameter-practitioner-identifier.html)
- [identifier-assigner](SearchParameter-practitioner-identifier-assigner.html)
- [via-intermediary](SearchParameter-practitioner-via-intermediary.html)
- [qualification-code](SearchParameter-practitioner-qualification-code.html)
- [qualification-issuer](SearchParameter-practitioner-qualification-issuer.html)
- [qualification-period](SearchParameter-practitioner-qualification-period.html)
- [qualification-status](SearchParameter-practitioner-qualification-status.html)
- [qualification-wherevalid-code](SearchParameter-practitioner-qualification-wherevalid-code.html)
- [qualification-wherevalid-location](SearchParameter-practitioner-qualification-wherevalid-location.html)

**PractitionerRole**

- active `http://hl7.org/fhir/SearchParameter/PractitionerRole-active`
- [endpoint](SearchParameter-practitionerrole-endpoint.html)
- [identifier](SearchParameter-practitionerrole-identifier.html)
- [identifier-assigner](SearchParameter-practitionerrole-identifier-assigner.html)
- [location](SearchParameter-practitionerrole-location.html)
- [network](SearchParameter-practitionerrole-network.html)
- [new-patient](SearchParameter-practitionerrole-new-patient.html)
- [new-patient-network](SearchParameter-practitionerrole-new-patient-network.html)
- [organization](SearchParameter-practitionerrole-organization.html)
- [practitioner](SearchParameter-practitionerrole-practitioner.html)
- [role](SearchParameter-practitionerrole-role.html)
- [service](SearchParameter-practitionerrole-service.html)
- [specialty](SearchParameter-practitionerrole-specialty.html)
- [via-intermediary](SearchParameter-practitionerrole-via-intermediary.html)
- [qualification-code](SearchParameter-practitionerrole-qualification-code.html)
- [qualification-issuer](SearchParameter-practitionerrole-qualification-issuer.html)
- [qualification-status](SearchParameter-practitionerrole-qualification-status.html)
- [qualification-wherevalid-code](SearchParameter-practitionerrole-qualification-wherevalid-code.html)
- [qualification-wherevalid-location](SearchParameter-practitionerrole-qualification-wherevalid-location.html)

**InsurancePlan**

- [coverage-area](SearchParameter-insuranceplan-coverage-area.html)
- [administered-by](SearchParameter-insuranceplan-administered-by.html)
- [coverage-benefit-type](SearchParameter-insuranceplan-coverage-benefit-type.html)
- [coverage-limit-value](SearchParameter-insuranceplan-coverage-limit-value.html)
- [coverage-network](SearchParameter-insuranceplan-coverage-network.html)
- [coverage-type](SearchParameter-insuranceplan-coverage-type.html)
- [identifier](SearchParameter-insuranceplan-identifier.html)
- [network](SearchParameter-insuranceplan-network.html)
- [type](SearchParameter-insuranceplan-type.html)
- [status](SearchParameter-insuranceplan-status.html)
- [endpoint](SearchParameter-insuranceplan-endpoint.html)
- [general-cost-groupsize](SearchParameter-insuranceplan-general-cost-groupsize.html)
- [general-cost-type](SearchParameter-insuranceplan-general-cost-type.html)
- [general-cost-value](SearchParameter-insuranceplan-general-cost-value.html)
- [name](SearchParameter-insuranceplan-name.html)
- [owned-by](SearchParameter-insuranceplan-owned-by.html)
- [specific-cost-benefit-type](SearchParameter-insuranceplan-specific-cost-benefit-type.html)
- [specific-cost-category](SearchParameter-insuranceplan-specific-cost-category.html)
- [specific-cost-cost-type](SearchParameter-insuranceplan-specific-cost-cost-type.html)
- [specific-cost-value](SearchParameter-insuranceplan-specific-cost-value.html)
- [plan-coverage-area](SearchParameter-insuranceplan-plan-coverage-area.html)
- [plan-identifier](SearchParameter-insuranceplan-plan-identifier.html)
- [plan-network](SearchParameter-insuranceplan-plan-network.html)
- [plan-type](SearchParameter-insuranceplan-plan-type.html)

**VerificationResult**

- [attestation-who](SearchParameter-verificationresult-attestation-who.html)
- [attestation-method](SearchParameter-verificationresult-attestation-method.html)
- [attestation-onbehalfof](SearchParameter-verificationresult-attestation-onbehalfof.html)
- [primarysource-date](SearchParameter-verificationresult-primarysource-date.html)
- [primarysource-who](SearchParameter-verificationresult-primarysource-who.html)
- [primarysource-type](SearchParameter-verificationresult-primarysource-type.html)
- [status-date](SearchParameter-verificationresult-status-date.html)
- [target](SearchParameter-verificationresult-target.html)
- [validation-status](SearchParameter-verificationresult-validation-status.html)
- [validator-organization](SearchParameter-verificationresult-validator-organization.html)


---

// File: input/includes/toc-generator.md

{% for p in site.data.pages %}
{% assign pagepath = p[0] %}
{% unless pagepath contains 'ttl' or pagepath contains 'json' or  pagepath contains 'xml' or  pagepath contains 'definitions' or pagepath contains 'mappings' %}
{% assign pagelabel = site.data.pages[pagepath].label | remove: ".0" %}
{% assign pagetitle = site.data.pages[pagepath].title %}
{% assign depth = pagelabel | split: '.' %}
  {%- for i in depth -%}
  &nbsp;&nbsp;
  {%- endfor -%}
{{ pagelabel | plus: 1 }}&nbsp;-&nbsp;[{{ pagetitle | remove: ".html" }}]({{ pagepath }})
{% endunless %}
{% endfor %}


---

// File: input/includes/toc.md

<!-- TOC  the css styling for this is \pages\assets\css\project.css under 'markdown-toc'-->
**Contents**

* Do not remove this line (it will not be displayed)
{:toc}

---

<!-- end TOC -->


---

// File: input/intro-notes/StructureDefinition-accessibility-intro.md

An extension to describe accessibility options offered by a practitioner or at a location. 

Accessibility refers to the design of services and environments to support people with disabilities, hardships, or other factors that might limit their access to health care. 
For example, a location may provide signage, lifts, ramps, handrails, etc. A practitioner may be culturally competent.

---

// File: input/intro-notes/StructureDefinition-accessibility-notes.md

**No Search criteria for accessibility extension.**


---

// File: input/intro-notes/StructureDefinition-accessibility-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include a coded and/or text value indicating the type of accessibility options offered.


---

// File: input/intro-notes/StructureDefinition-careteam-alias-intro.md

An extension to describe an alternate name by which a care team is known.


---

// File: input/intro-notes/StructureDefinition-careteam-alias-notes.md

**No Search criteria for careTeam-alias extension.**


---

// File: input/intro-notes/StructureDefinition-careteam-alias-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include a text value indicating the name of the alias.



---

// File: input/intro-notes/StructureDefinition-communication-proficiency-intro.md

An extension to express a practitioner's spoken proficiency with the language indicated in `practitioner.communication`.

---

// File: input/intro-notes/StructureDefinition-communication-proficiency-notes.md

**No Search criteria for communication-proficiency extension.**

---

// File: input/intro-notes/StructureDefinition-communication-proficiency-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include a coded value and/or text representation of spoken language proficiency.

---

// File: input/intro-notes/StructureDefinition-contactpoint-availabletime-intro.md

An extension representing the times a contact point is available

---

// File: input/intro-notes/StructureDefinition-contactpoint-availabletime-notes.md

**No Search criteria for contactPoint-availableTime extension.**

---

// File: input/intro-notes/StructureDefinition-contactpoint-availabletime-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL have a value in at least one of daysOfWeek, allDay, availableStartTime, or availableEndTime

---

// File: input/intro-notes/StructureDefinition-contactpoint-viaintermediary-intro.md

An extension representing an external point of contact responsible for handling communications with an entity. 
For example, a practice group may share a single point of contact responsible for handling communications for each of the individual practices.
Consists of a reference to a PractitionerRole, Organization, OrganizationAffiliation, or Location resource with a contact point responsible for handling communications.

---

// File: input/intro-notes/StructureDefinition-contactpoint-viaintermediary-notes.md

**No Search criteria for contactPoint-viaIntermediary extension.**

---

// File: input/intro-notes/StructureDefinition-contactpoint-viaintermediary-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include a reference to an Organization, OrganizationAffiliation, PractitionerRole, or Location with a contact point.

---

// File: input/intro-notes/StructureDefinition-digitalcertificate-intro.md

An extension to describe digital certificates.

Consists of:
* `digitalCertificate.type` - indicates the type of digital certificate
* `digitalCertificate.use` - indicates the purpose of the digital certificate
* `digitalCertificate.certificateStandard` - indicates the certificate standard (currently only x.509v3 certificates are supported)
* `digitalCertificate.certificate` - a string representation of a PEM format certificate, or a URI for locating the certificate
* `digitalCertificate.expirationDate` - indicates when the certificate expires
* `digitalCertificate.trustFramework` - indicates any trust frameworks supported by the certificate

digitalCertificate is an extension to the practitioner, organization, practitionerRole, and endpoint resources.

---

// File: input/intro-notes/StructureDefinition-digitalcertificate-notes.md

**No Search criteria for digitalCertificate extension.**

---

// File: input/intro-notes/StructureDefinition-digitalcertificate-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include:

1.  One type in `digitalCertificate.type`
1.  One PEM format certificate (as a string), or a URI indicating where to find the certificate in `digitalCertificate.certificate`
1.  One date in `digitalCertificate.expirationDate`

---

// File: input/intro-notes/StructureDefinition-ehr-intro.md

An extension to describe the electronic health record (EHR) product(s) in use at a location.

Consists of:
* `ehr.developer` - indicates the developer of the EHR product
* `ehr.product` - indicates the name of the EHR product
* `ehr.version` - indicates the version of the EHR product
* `ehr.certificationEdition` - indicates whether the product has been certified, and to which certification edition
* `ehr.patientAccess` - indicates whether the EHR product provides capabilities to support patient engagement
* `ehr.certificationID` - A unique ID assigned by the ONC-authorized certification body (ONC-ACB) certifying the EHR product

Users should refer to the [ONC Certified Health IT Product List (CHPL)](https://chpl.healthit.gov/#/search) for further guidance on describing the developer, product, and version of an EHR.

---

// File: input/intro-notes/StructureDefinition-ehr-notes.md

**No Search criteria for ehr extension.**

---

// File: input/intro-notes/StructureDefinition-ehr-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include a value in at least one of developer, product, certificationEdition, patientAccess, or certificationID

---

// File: input/intro-notes/StructureDefinition-endpoint-rank-intro.md

An extension to indicate the order in which endpoints should be used, for endpoints associated with the same entity and capable of transferring the same content.
Rank will be determined by the owner of the endpoint (1 = highest).

---

// File: input/intro-notes/StructureDefinition-endpoint-rank-notes.md

**No Search criteria for the endpoint-rank extension.**

---

// File: input/intro-notes/StructureDefinition-endpoint-rank-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include a positive integer indicating the preferred order of use.

---

// File: input/intro-notes/StructureDefinition-endpoint-reference-intro.md

An extension to support the addition of a reference to an endpoint for the practitioner and careTeam resources.

An individual may have an electronic endpoint independent of their role (e.g. a personal Direct address).

A care team may have an electronic endpoint independent of the members of the care team, location where the care team operates, services it provides, etc.



---

// File: input/intro-notes/StructureDefinition-endpoint-reference-notes.md

**No Search criteria for endpoint extension.**


---

// File: input/intro-notes/StructureDefinition-endpoint-reference-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include a reference to an endpoint resource.

---

// File: input/intro-notes/StructureDefinition-endpoint-usecase-intro.md

An extension to indicate the specific use cases/services supported by an endpoint, e.g. "I support this implementation guide at this endpoint"

Consists of:
*  `useCase.type` - an indication of the type of services supported by the endpoint
*  `useCase.standard` - a URI to a published standard describing the services supported by the endpoint (e.g. an HL7 implementation guide)

---

// File: input/intro-notes/StructureDefinition-endpoint-usecase-notes.md

**No Search criteria for the endpoint-useCase extension.**

---

// File: input/intro-notes/StructureDefinition-endpoint-usecase-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include one type of use case/service in `useCase.type`

---

// File: input/intro-notes/StructureDefinition-example-list-generator.md

{% for p in site.html_pages %}
{% unless p.name contains 'ttl' or p.name contains 'json' or  p.name contains 'xml' or  p.name contains 'definitions' or p.name contains 'mappings'%}
    {% assign title = p.name | remove: ".html" | remove: ".md" | split: '-' %}
    {% for e in site.example_types %}
      {% if title contains e %}
- [{% for word in title %}{{ word | capitalize }} {% endfor %}]({{ p.path }})
      {% endif %}
    {% endfor %}
  {% endunless %}
{% endfor %}


---

// File: input/intro-notes/StructureDefinition-healthcareservice-reference-intro.md

An extension to support the addition of a reference to a HealthcareService resource. Used by the the CareTeam resource.

---

// File: input/intro-notes/StructureDefinition-healthcareservice-reference-notes.md

**No Search criteria for healthcareService-reference extension.**

---

// File: input/intro-notes/StructureDefinition-healthcareservice-reference-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include a reference to a HealthcareService resource.

---

// File: input/intro-notes/StructureDefinition-identifier-status-intro.md

An extension indicating the status of an identifier. Appropriate codes include: active, inactive, issued in error, revoked, pending, or unknown

---

// File: input/intro-notes/StructureDefinition-identifier-status-notes.md

**No Search criteria for identifier-status extension.**

---

// File: input/intro-notes/StructureDefinition-identifier-status-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include a code for active, inactive, issued in error, revoked, pending, or unknown

---

// File: input/intro-notes/StructureDefinition-insuranceplan-reference-intro.md

An extension to support the addition of a reference to a InsurancePlan for the Organization resource.

Use of this extension indicates the health insurance products that an employer offers its employees.



---

// File: input/intro-notes/StructureDefinition-insuranceplan-reference-notes.md

**No Search criteria for insuranceplan extension.**


---

// File: input/intro-notes/StructureDefinition-insuranceplan-reference-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include a reference to an InsurancePlan resource.

---

// File: input/intro-notes/StructureDefinition-location-availability-intro.md

An extension to describe the general availability of a location. Similar to the availability attributes found in the practitionerRole resource.

Consists of:
* availableTime - indicates the times the location is available
  * availableTime.daysOfWeek - indicates the day(s) of the week the location is available
  * availableTime.allDay - indicates whether location is always available 
  * availableTime.availableStartTime - indicates when the location opens
  * availableTime.availableEndTime - indicates when the location closes
* notAvailable - indicates why a location is not available at a particular time
  * notAvailable.description - describes the reason the location is not available
  * notAvailable.during - indicates a period for which the location is not available
* availabilityExceptions - describes any exceptions to when this location is typically available



---

// File: input/intro-notes/StructureDefinition-location-availability-notes.md

**No Search criteria for location-availability extension.**


---

// File: input/intro-notes/StructureDefinition-location-availability-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used it SHALL include:

1.  A value for at least one of availableTime, notAvailable, or availabilityExceptions.
1.  If using `notAvailable`, it SHALL include a text description in `notAvailable.description`.


---

// File: input/intro-notes/StructureDefinition-location-reference-intro.md

An extension to support the addition of a reference to a location for the careTeam resource.

---

// File: input/intro-notes/StructureDefinition-location-reference-notes.md

**No Search criteria for location-reference extension.**

---

// File: input/intro-notes/StructureDefinition-location-reference-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include a reference to a Location resource.

---

// File: input/intro-notes/StructureDefinition-network-reference-intro.md

An extension to support the addition of a reference to a health insurance provider network.

Used in:
*  PractitionerRole
*  OrganizationAffiliation

Indicates the health insurance provider network that a practitioner or organization participates in.


---

// File: input/intro-notes/StructureDefinition-network-reference-notes.md

**No Search criteria for network-reference extension.**


---

// File: input/intro-notes/StructureDefinition-network-reference-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include a reference to a Network resource


---

// File: input/intro-notes/StructureDefinition-newpatientprofile-intro.md

An extension to provide information about the types of new patients a practitioner (through a role) or location accepts.

For example, a pediatric provider may only accept children up to a certain age.

---

// File: input/intro-notes/StructureDefinition-newpatientprofile-notes.md

**No Search criteria for newPatientProfile extension.**

---

// File: input/intro-notes/StructureDefinition-newpatientprofile-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include a text description about the new patients a practitioner/service/location accepts.

---

// File: input/intro-notes/StructureDefinition-newpatients-intro.md

An extension to indicate whether a practitioner (through a role), service, or location is accepting new patients.

Consists of:
* `newPatients.acceptingPatients` - a boolean indicating whether the entity is accepting new patients
* `newPatients.network` - a reference to a healthcare provider insurance network for which the entity is/isn't accepting new patients



---

// File: input/intro-notes/StructureDefinition-newpatients-notes.md

**No Search criteria for newPatients extension.**

---

// File: input/intro-notes/StructureDefinition-newpatients-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used it SHALL include a boolean value in `newPatients.acceptingPatients`


---

// File: input/intro-notes/StructureDefinition-org-alias-period-intro.md

An extension to describe the period of time an organization's alias was in use.



---

// File: input/intro-notes/StructureDefinition-org-alias-period-notes.md

**No Search criteria for org-alias-period extension.**


---

// File: input/intro-notes/StructureDefinition-org-alias-period-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL have at least one start or end date/time.


---

// File: input/intro-notes/StructureDefinition-org-alias-type-intro.md

An extension to specify the type of alias an organization used.


---

// File: input/intro-notes/StructureDefinition-org-alias-type-notes.md

**No Search criteria for org-alias-type extension.**


---

// File: input/intro-notes/StructureDefinition-org-alias-type-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include a code from [Alias Type](http://hl7.org/fhir/uv/vhdir/ValueSet/aliastype)

---

// File: input/intro-notes/StructureDefinition-org-description-intro.md

An extension to provide a human-readable description of an organization.

---

// File: input/intro-notes/StructureDefinition-org-description-notes.md

**No Search criteria for org-description extension.**


---

// File: input/intro-notes/StructureDefinition-org-description-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include a text description.

---

// File: input/intro-notes/StructureDefinition-practitioner-qualification-intro.md

An extension to add additional elements about a practitioner's qualifications. 

Consists of:
*  `qualification.status` - indicates the current status of the qualification
*  `qualification.whereValid` - indicates where the qualification is valid
*  `qualification.history` - describes the history of the qualification through changes in the status of the qualification, e.g. if the qualification was ever revoked or suspended


---

// File: input/intro-notes/StructureDefinition-practitioner-qualification-notes.md

**No Search criteria for practitioner-qualification extension.**


---

// File: input/intro-notes/StructureDefinition-practitioner-qualification-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include a value for at least one of status, whereValid, or history. Each representation of the history of the qualification SHALL include a coded status in `qualification.history.status` and period of time for which that status applied in `qualification.history.status`

---

// File: input/intro-notes/StructureDefinition-qualification-intro.md

An extension to add qualifications for an organization (e.g. accreditation) or practitionerRole (e.g. registered to prescribe controlled substances). The extension includes:

*  `qualification.identifier` provides an identifier for the qualification
*  `qualification.code` indicates the type of qualification
*  `qualificaton.issuer` includes a reference to the organization that issued the qualification
*  `qualification.status` describes the current status of the qualification (i.e. active, inactive, issued in error, revoked, pending, unknown)
*  `qualification.period` indicates a period of time during which the current status applies
*  `qualification.whereValid` indicates where the qualification is valid. Users may select any number of specific locations, classes of locations, or combination thereof
*  `qualification.history` presents a series of historical statuses for the qualification and the period of time associated with each status

---

// File: input/intro-notes/StructureDefinition-qualification-notes.md

**No Search criteria for qualification extension.**


---

// File: input/intro-notes/StructureDefinition-qualification-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include:
1.  A coded representation of the qualification in `qualification.code`
1.  A reference to the organization that issued the qualification in `qualification.issuer`
1.  For each representation of the history of the qualification, a coded status in `qualification.history.status` and period of time for which that status applied in `qualification.history.status`

---

// File: input/intro-notes/StructureDefinition-usage-restriction-intro.md

## Background and Context ##

The FHIR specification contains a security meta tag which can be used to inform systems of the sensitivity of resources. The tag can be used by access control mechanisms to ensure content isn't exposed inappropriately. However, the security meta tag can only indicate sensitivity at the resource level, and provides relatively little context about the restriction. 

This implementation guide profiles the Consent resource to provide additional details about the nature of restricted content. This extension provides a reference to the VhDir Consent profile. It is available to all other profiles in this implementation guide. 

This extension is typically expected to function as a reference to a [contained resource](https://www.hl7.org/fhir/references.html#contained).


---

// File: input/intro-notes/StructureDefinition-usage-restriction-notes.md



---

// File: input/intro-notes/StructureDefinition-usage-restriction-summary.md

####  Summary of the Mandatory Requirements and Key properties

This extension is optional. If used, it SHALL include a reference to a consent resource (typically contained)


---

// File: input/intro-notes/StructureDefinition-vhdir-careteam-intro.md

This profile sets minimum expectations for searching for and fetching information associated with a care team. It identifies which core elements, extensions, vocabularies and value sets **SHALL** be present in the CareTeam resource when using this profile.

**Background & Scope**

A care team consists of the providers and/or organizations responsible for effectively delivering coordinated care. Care teams are conventionally associated with a specific patient. For example, a patient with diabetes may have a care team that consists of a physician, nurse, dietitian, certified diabetes educator, etc. Data about patients/caregivers, however, is out of scope for a Validated Healthcare Directory. Therefore, this care team profile constrains out elements which reference or describe patient-level data. In general, a Validated Healthcare Directory is more likely to represent administrative teams, or teams that are relevant beyond the direct clinical care of specific patients.

Individuals participating on a VHDir CareTeam SHALL be represented through an associated role. Therefore, this profile removes references to the Practitioner resource in `CareTeam.participant.member`. For example, Dr. Smith (an individual) does not participate on a care team. Rather, Dr. Smith in his role as a provider at Acme Hospital participates on a care team.

A care team may be functionally "empty," i.e. the roles on the care team are not filled by individuals. For example, a care team may be comprised of a primary care provider role, care coordinator role, and specialist role without indicating the individuals filling those roles (i.e., by referencing a PractitionerRole resource that does not reference a Practitioner resource). This enables entities to describe existing care teams while masking the identity of the individuals/organizations that are involved, or to represent standing care teams that are filled by individuals on an ad hoc basis in response to a condition/event.

This profile modifies the base CareTeam resource in the following manner:

*  Constrains the cardinality of `careTeam.status` (1..1), `careTeam.category` (1..*), `careTeam.context` (0..0), `careTeam.subject` (0..0), `careTeam.participant.onBehalfOf` (0..0), `careTeam.managingOrganization` (0..1), `careTeam.reasonCode` (0..0), `careTeam.reasonReference` (0..0), `careTeam.telecom.system` (1..1), and `careTeam.telecom.value` (1..1)

*   Modifies the data type of careTeam.note.author (removes references to Patient and RelatedPerson resources)

*   Modifies the data type of CareTeam.participant.member (removes references to Patient, RelatedPerson, and Practitioner resources)

*  All references SHALL conform to the appropriate Validated Healthcare Directory Implementation Guide profile

*  Adds extensions:

1.  [Identifier status](StructureDefinition-identifier-status.html) (1..1) - indicates the status of a care team's identifier
1.  [Via intermediary](StructureDefinition-contactpoint-viaintermediary.html) (0..1) - a reference to an alternative point of contact for this care team
1.  [Available time](StructureDefinition-contactpoint-availabletime.html) (0..*) - indicates when a care team is available for contact
1.  [Alias](StructureDefinition-careteam-alias.html) (0..*) - indicates alternate names by which the care team is known
1.  [Location](StructureDefinition-location-reference.html) (0..*) - reference(s) to the location resource, indicating the location(s) at which the care team operates or delivers services
1.  [Service](StructureDefinition-healthcareservice-reference.html) (0..*) - reference(s) to the healthcareService resource, indicating the services offered by the care team
1.  [Endpoint](StructureDefinition-endpoint-reference.html) (0..*) - reference(s) to the endpoint resource, indicating technical endpoints for the care team independent of its members, affiliated organizations, etc.
1.  [Restriction](StructureDefinition-usage-restriction.html) (0..*) - indicates whether disclosure of any data associated with a care team is restricted




**Examples:**

The following are example uses for the vhdir-careteam profile:

-  [A cardiology care team at Founding Fathers Memorial Hospital](CareTeam-cardiologycareteam1.html)


**Mandatory Data Elements**

The following data-elements are mandatory (i.e data MUST be present). These are presented below in a simple human-readable explanation. The [**Formal Profile Definition**](#profile) below provides the  formal summary, definitions, and  terminology requirements.  

Each CareTeam must have:

1.  One status code in `careTeam.status`
1.  At least one type of care team in `careTeam.category`


---

// File: input/intro-notes/StructureDefinition-vhdir-careteam-notes.md

#### Supported Searches

1. `GET [base]/CareTeam?category=[code]`

      *Support:* MAY support search by the [`category`](SearchParameter-careteam-category.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/CareTeam?endpoint=[id]`

      *Support:* SHOULD support search by the [`endpoint`](SearchParameter-careteam-endpoint.html) parameter
   - with a target type:  `Endpoint`   
   - including these search paramaters which may be chained:  `endpoint.identifier`, `endpoint.connection-type`, `endpoint.organization`
<hr />
1. `GET [base]/CareTeam?identifier=[code]`

      *Support:* SHALL support search by the [`identifier`](SearchParameter-careteam-identifier.html) parameter  
   - including the modifiers:  `text`, `ofType`   
<hr />
1. `GET [base]/CareTeam?identifier-assigner=[id]`

      *Support:* MAY support search by the [`identifier-assigner`](SearchParameter-careteam-identifier-assigner.html) parameter
   - with a target type:  `Organization`
   - including the modifiers:  `below`  
   - including these search paramaters which may be chained:  `identifier-assigner.identifier`, `identifier-assigner.name`
<hr />
1. `GET [base]/CareTeam?location=[id]`

      *Support:* SHALL support search by the [`location`](SearchParameter-careteam-location.html) parameter
   - with a target type:  `Location`
   - including the modifiers:  `above`, `below`  
   - including these search paramaters which may be chained:  `location.identifier`, `location.type`, `location.address`, `location.organization`
<hr />
1. `GET [base]/CareTeam?participant=[id]`

      *Support:* SHALL support search by the [`participant`](SearchParameter-careteam-participant.html) parameter
   - with a target type:  `PractitionerRole`, `Organization`, `CareTeam`
   - including the modifier:  `type`  
   - including these search paramaters which may be chained:  `participant.identifier`, `participant.location`, `participant.practitioner`, `participant.organization`, `participant.role`, `participant.address`, `participant.name`, `participant.partof`
<hr />
1. `GET [base]/CareTeam?name=[string]`

      *Support:* SHOULD support search by the [`name`](SearchParameter-careteam-name.html) parameter  
   - including the modifiers:  `exact`, `contains`   
<hr />
1. `GET [base]/CareTeam?organization=[id]`

      *Support:* SHALL support search by the [`organization`](SearchParameter-careteam-organization.html) parameter
   - with a target type:  `Organization`
   - including the modifiers:  `above`, `below`  
   - including these search paramaters which may be chained:  `organization.identifier`, `organization.name`, `organization.address`, `organization.partof`, `organization.type`
<hr />
1. `GET [base]/CareTeam?service=[id]`

      *Support:* SHOULD support search by the [`service`](SearchParameter-careteam-service.html) parameter
   - with a target type:  `HealthcareService`   
   - including these search paramaters which may be chained:  `service.identifier`, `service.service-category`, `service.organization`, `service.location`
<hr />
1. `GET [base]/CareTeam?status=[code]`

      *Support:* SHALL support search by the [`status`](SearchParameter-careteam-status.html) parameter
<hr />
1. `GET [base]/CareTeam?via-intermediary=[id]`

      *Support:* MAY support search by the [`via-intermediary`](SearchParameter-careteam-via-intermediary.html) parameter
   - with a target type:  `PractitionerRole`, `Organization`, `OrganizationAffiliation`, `Location`    
<hr />


---

// File: input/intro-notes/StructureDefinition-vhdir-careteam-summary.md

#### Complete Summary of the Mandatory Requirements

1.  One status code in `careTeam.status`
1.  At least one type of care team in `careTeam.category`


---

// File: input/intro-notes/StructureDefinition-vhdir-endpoint-intro.md

This profile sets minimum expectations for searching for and fetching information associated with an electronic endpoint. It identifies which core elements, extensions, vocabularies and value sets **SHALL** be present in the Endpoint resource when using this profile.

**Background & Scope**

An endpoint describes the technical details of a location that can be connected to for the delivery/retrieval of information.

This profile modifies the base Endpoint resource in the following manner:

*  Constrains the cardinality of `endpoint.contact` (0..1), `endpoint.contact.system` (1..1), and `endpoint.contact.value` (1..1)

*  All references SHALL conform to the appropriate Validated Healthcare Directory Implementation Guide profile

*  Adds extensions:

1.  [Identifier status](StructureDefinition-identifier-status.html) (1..1) - indicates the status of an endpoint's identifier
1.  [Via intermediary](StructureDefinition-contactpoint-viaintermediary.html) (0..1) - a reference to an alternative point of contact for this endpoint
1.  [Available time](StructureDefinition-contactpoint-availabletime.html) (0..*) - indicates when the point of contact for an endpoint is available
1.  [UseCase](StructureDefinition-endpoint-usecase.html) (0..*) - an enumeration of the specific use cases (service descriptions) supported by the endpoint
1.  [Rank](StructureDefinition-endpoint-rank.html) (0..1) - an indication of the preferred order for connecting to an endpoint when multiple endpoints capable of transferring the same content are listed
1.  [DigitalCertificate](StructureDefinition-digitalcertificate.html) (0..*) - a digital certificate associated with the endpoint
1.  [Restriction](StructureDefinition-usage-restriction.html) (0..*) - indicates whether disclosure of any data associated with an endpoint is restricted

<!-- *  Adds new value sets/updates value set bindings:

TBD -->

**Examples:**

The following are example uses for the vhdir-endpoint profile:

-  [A Direct address used by cardiologists at the Founding Fathers Memorial Hospital Heart and Vascular Institute](Endpoint-direct321.html)


**Mandatory Data Elements**

The following data-elements are mandatory (i.e data MUST be present). These are presented below in a simple human-readable explanation. The [**Formal Profile Definition**](#profile) below provides the  formal summary, definitions, and  terminology requirements.  

Each endpoint must have:

1.  A status code in `endpoint.status`
1.  A connectionType code in `endpoint.connectionType`
1.  At least one indication of the type of content the endpoint supports in `endpoint.payloadType`
1.  One technical address for connecting to the endpoint in `endpoint.address`


<!--**Profile specific implementation guidance:**

- TBD -->


---

// File: input/intro-notes/StructureDefinition-vhdir-endpoint-notes.md

#### Supported Searches

1. `GET [base]/Endpoint?connection-type=[code]`

      *Support:* SHALL support search by the [`connection-type`](SearchParameter-endpoint-connection-type.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/Endpoint?identifier=[code]`

      *Support:* SHALL support search by the [`identifier`](SearchParameter-endpoint-identifier.html) parameter  
   - including the modifiers:  `text`, `ofType`   
<hr />
1. `GET [base]/Endpoint?identifier-assigner=[id]`

      *Support:* MAY support search by the [`identifier-assigner`](SearchParameter-endpoint-identifier-assigner.html) parameter
   - with a target type:  `Organization`
   - including the modifiers:  `below`  
   - including these search paramaters which may be chained:  `organization-identifier`, `organization-name`
<hr />
1. `GET [base]/Endpoint?mime-type=[code]`

      *Support:* MAY support search by the [`mime-type`](SearchParameter-endpoint-mime-type.html) parameter     
<hr />
1. `GET [base]/Endpoint?organization=[id]`

      *Support:* SHALL support search by the [`organization`](SearchParameter-endpoint-organization.html) parameter
   - with a target type:  `Organization`
   - including the modifiers:  `above`, `below`  
   - including these search paramaters which may be chained:  `organization.identifier`, `organization.name`, `organization.address`, `organization.partof`, `organization-type`
<hr />
1. `GET [base]/Endpoint?payload-type=[code]`

      *Support:* SHOULD support search by the [`payload-type`](SearchParameter-endpoint-payload-type.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/Endpoint?status=[code]`

      *Support:* SHALL support search by the [`status`](SearchParameter-endpoint-status.html) parameter
<hr />
1. `GET [base]/Endpoint?usecase-standard=[uri]`

      *Support:* SHOULD support search by the [`usecase-standard`](SearchParameter-endpoint-usecase-standard.html) parameter  
   - including the modifiers:  `below`   
<hr />
1. `GET [base]/Endpoint?usecase-type=[code]`

      *Support:* SHOULD support search by the [`usecase-type`](SearchParameter-endpoint-usecase-type.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/Endpoint?via-intermediary=[id]`

      *Support:* MAY support search by the [`via-intermediary`](SearchParameter-endpoint-via-intermediary.html) parameter
   - with a target type:  `PractitionerRole`, `Organization`, `OrganizationAffiliation`, `Location`    
<hr />


---

// File: input/intro-notes/StructureDefinition-vhdir-endpoint-summary.md

#### Complete Summary of the Mandatory Requirements

1.  A status code in `endpoint.status`
1.  A connectionType code in `endpoint.connectionType`
1.  At least one indication of the type of content the endpoint supports in `endpoint.payloadType`
1.  One technical address for connecting to the endpoint in `endpoint.address`

---

// File: input/intro-notes/StructureDefinition-vhdir-healthcareservice-intro.md

This profile sets minimum expectations for searching for and fetching information associated with a healthcare service. It identifies which core elements, extensions, vocabularies and value sets **SHALL** be present in the HealthcareService resource when using this profile.

**Background & Scope**

The HealthcareService resource typically describes services offered by an organization/practitioner at a location. The resource may be used to encompass a variety of services covering the entire healthcare spectrum, including promotion, prevention, diagnstics, hospital and ambulatory care, home care, long-term care, and other health-related and community services.

This profile modifies the base HealthcareService resource in the following manner:

*  Constrains the cardinality of `healthcareService.active` (1..1), `healthcareService.telecom.system` (1..1), and `healthcareService.telecom.value` (1..1)

*  All references SHALL conform to the appropriate Validated Healthcare Directory Implementation Guide profile

*  Adds extensions:

1.  [Identifier status](StructureDefinition-identifier-status.html) (1..1) - indicates the status of a service's identifier
1.  [Via intermediary](StructureDefinition-contactpoint-viaintermediary.html) (0..1) - a reference to an alternative point of contact for this service
1.  [Available time](StructureDefinition-contactpoint-availabletime.html) (0..*) - indicates when a service is available for contact
1.  [NewPatients](StructureDefinition-newpatients.html) (0..*) - indicates whether the service is accepting new patients
1.  [Restriction](StructureDefinition-usage-restriction.html) (0..*) - indicates whether disclosure of any data associated with a service is restricted



**Examples:**

The following are example uses for the vhdir-healthcareservice profile:

-  [Cardiology Services](HealthcareService-ffcardiology.html)


**Mandatory Data Elements**

The following data-elements are mandatory (i.e data MUST be present). These are presented below in a simple human-readable explanation. The [**Formal Profile Definition**](#profile) below provides the  formal summary, definitions, and  terminology requirements.   


1.  A boolean value in `healthcareService.active`

<!--
**Profile specific implementation guidance:**

- TBD -->


---

// File: input/intro-notes/StructureDefinition-vhdir-healthcareservice-notes.md

#### Supported Searches

1. `GET [base]/HealthcareService?active=[code]`

      *Support:* SHALL support search by the `active` parameter: `http://hl7.org/fhir/SearchParameter/HealthcareService-active`
<hr />
1. `GET [base]/HealthcareService?service-category=[code]`

      *Support:* SHALL support search by the [`service-category`](SearchParameter-healthcareservice-service-category.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/HealthcareService?characteristic=[code]`

      *Support:* MAY support search by the [`characteristic`](SearchParameter-healthcareservice-characteristic.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/HealthcareService?coverage-area=[id]`

      *Support:* SHOULD support search by the [`coverage-area`](SearchParameter-healthcareservice-coverage-area.html) parameter
   - with a target type:  `Location`   
   - including these search paramaters which may be chained:  `coverage-area.identifier`, `coverage-area.contains`
<hr />
1. `GET [base]/HealthcareService?eligibility=[code]`

      *Support:* SHOULD support search by the [`eligibility`](SearchParameter-healthcareservice-eligibility.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/HealthcareService?endpoint=[id]`

      *Support:* SHOULD support search by the [`endpoint`](SearchParameter-healthcareservice-endpoint.html) parameter
   - with a target type:  `Endpoint`   
   - including these search paramaters which may be chained:  `endpoint.identifier`, `endpoint.connection-type`, `endpoint.organization`
<hr />
1. `GET [base]/HealthcareService?identifier=[code]`

      *Support:* SHALL support search by the [`identifier`](SearchParameter-healthcareservice-identifier.html) parameter  
   - including the modifiers:  `text`, `ofType`   
<hr />
1. `GET [base]/HealthcareService?identifier-assigner=[id]`

      *Support:* MAY support search by the [`identifier-assigner`](SearchParameter-healthcareservice-identifier-assigner.html) parameter
   - with a target type:  `Organization`
   - including the modifiers:  `below`  
   - including these search paramaters which may be chained:  `identifier-assigner.identifier`, `identifier-assigner.name`
<hr />
1. `GET [base]/HealthcareService?location=[id]`

      *Support:* SHALL support search by the [`location`](SearchParameter-healthcareservice-location.html) parameter
   - with a target type:  `Location`
   - including the modifiers:  `above`, `below`  
   - including these search paramaters which may be chained:  `location.identifier`, `location.type`, `location.address`, `location.organization`
<hr />
1. `GET [base]/HealthcareService?name=[string]`

      *Support:* SHOULD support search by the [`name`](SearchParameter-healthcareservice-name.html) parameter  
   - including the modifiers:  `exact`, `contains`   
<hr />
1. `GET [base]/HealthcareService?new-patient=[code]`

      *Support:* SHOULD support search by the [`new-patient`](SearchParameter-healthcareservice-new-patient.html) parameter     
<hr />
1. `GET [base]/HealthcareService?new-patient-network=[id]`

      *Support:* SHOULD support search by the [`new-patient-network`](SearchParameter-healthcareservice-new-patient-network.html) parameter
   - with a target type:  `Organization`   
   - including these search paramaters which may be chained:  `new-patient-network.identifier`, `new-patient-network.name`, `new-patient-network.partof`
<hr />
1. `GET [base]/HealthcareService?organization=[id]`

      *Support:* SHALL support search by the [`organization`](SearchParameter-healthcareservice-organization.html) parameter
   - with a target type:  `Organization`
   - including the modifiers:  `above`, `below`  
   - including these search paramaters which may be chained:  `organization.identifier`, `organization.name`, `organization.address`, `organization.partof`, `organization-type`
<hr />
1. `GET [base]/HealthcareService?specialty=[code]`

      *Support:* SHOULD support search by the [`specialty`](SearchParameter-healthcareservice-specialty.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/HealthcareService?service-type=[code]`

      *Support:* SHOULD support search by the [`service-type`](SearchParameter-healthcareservice-service-type.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/HealthcareService?via-intermediary=[id]`


      *Support:* MAY support search by the [`via-intermediary`](SearchParameter-healthcareservice-via-intermediary.html) parameter
   - with a target type:  `PractitionerRole`, `Organization`, `OrganizationAffiliation`, `Location`    
<hr />


---

// File: input/intro-notes/StructureDefinition-vhdir-healthcareservice-summary.md

#### Complete Summary of the Mandatory Requirements

1.  A boolean value in `healthcareService.active`


---

// File: input/intro-notes/StructureDefinition-vhdir-insuranceplan-intro.md

This profile sets minimum expectations for searching for and fetching information associated with a health insurance product/plan. It identifies which core elements, extensions, vocabularies and value sets **SHALL** be present in the InsurancePlan resource when using this profile.

**Background & Scope**

A product is a discrete package of health insurance coverage benefits that are offered under a particular network type. A given payer's products typically differ by network type and/or covered benefits. A plan pairs a product's covered benefits with the particular cost sharing structure offered to a consumer. A given product may comprise multiple plans (i.e. each plan offers different cost sharing requirements for the same set of covered benefits). 

InsurancePlan describes a health insurance offering comprised of a list of covered benefits (i.e. the product), costs associated with those benefits (i.e. the plan), and additional information about the offering, such as who it is owned and administered by, a coverage area, contact information, etc.

This profile modifies the base InsurancePlan resource in the following manner:

*  Constrains the cardinality of `InsurancePlan.status` (1..1), `InsurancePlan.ownedBy` (1..1), `InsurancePlan.administeredBy` (1..1), `InsurancePlan.contact.name.family` (1..1), `InsurancePlan.contact.name.given` (1..*), `InsurancePlan.contact.telecom.system` (1..1), and `InsurancePlan.contact.telecom.value` (1..1)

*  All references SHALL conform to the appropriate Validated Healthcare Directory Implementation Guide profile

*  Adds extensions:

1.  [Identifier status](StructureDefinition-identifier-status.html) (1..1) - indicates the status of a product or plan's identifier
1.  [Via intermediary](StructureDefinition-contactpoint-viaintermediary.html) (0..1) - a reference to an alternative point of contact for this InsurancePlan
1.  [Available time](StructureDefinition-contactpoint-availabletime.html) (0..*) - indicates when the point of contact for an InsurancePlan is available
1.  [Restriction](StructureDefinition-usage-restriction.html) (0..*) - indicates whether disclosure of any data associated with a service is restricted

<!--- *  Adds new value sets/updates value set bindings:

TBD --->

**Examples:**

The following are example uses for the vhdir-insuranceplan profile:

-  [Patriot PPO Standard](InsurancePlan-insuranceplan1.html)


**Mandatory Data Elements**

The following data-elements are mandatory (i.e data MUST be present). These are presented below in a simple human-readable explanation. The [**Formal Profile Definition**](#profile) below provides the  formal summary, definitions, and  terminology requirements.   

Each insurancePlan resource must have:

1.  A coded value in `InsurancePlan.status`
1.  A reference to an organization that issues the product/plan in `InsurancePlan.ownedBy`
1.  A reference to an organization that administers the product/plan in `InsurancePlan.administeredBy`
1.  For each set of coverage details, one coded type of coverage in `InsurancePlan.coverage.type`
1.  For each set of coverage details, at least one covered benefit in `InsurancePlan.coverage.benefit`, including a coded type of benefit in `InsurancePlan.coverage.benefit.type`
1.  For each set of specific costs associated with a Plan, a coded value indicating the general category of benefit the cost applies to in `InsurancePlan.plan.specificCost.category`
1.  For each set specific costs associated with a covered benefit, a coded type of benefit in `InsurancePlan.plan.specificCost.benefit.type`
1.  For each set of specific costs associated with covered benefits, a coded type of cost in `InsurancePlan.plan.specificCost.benefit.cost.type`


---

// File: input/intro-notes/StructureDefinition-vhdir-insuranceplan-notes.md

#### Supported Searches

1. `GET [base]/InsurancePlan?administered-by=[id]`

      *Support:* SHOULD support search by the [`administered-by`](SearchParameter-insuranceplan-administered-by.html) parameter
   - with a target type:  `Organization`
   - including the modifiers:  `above`, `below`
   - including these search paramaters which may be chained:  `administered-by.identifier`, `administered-by.name`, `administered-by.partof`
<hr />
1. `GET [base]/InsurancePlan?coverage-benefit-type=[code]`

      *Support:* SHALL support search by the [`coverage-benefit-type`](SearchParameter-insuranceplan-coverage-benefit-type.html) parameter
   - including the modifiers:  `text`
<hr />
1. `GET [base]/InsurancePlan?coverage-limit-value=[prefix][number]|[system]|[code]`

      *Support:* MAY support search by the [`coverage-limit-value`](SearchParameter-insuranceplan-coverage-limit-value.html) parameter   
   - including the comparators:  `eq`, `gt`, `lt`, `ge`, `le`, `sa`, `eb`  
<hr />
1. `GET [base]/InsurancePlan?coverage-network=[id]`

      *Support:* SHALL support search by the [`coverage-network`](SearchParameter-insuranceplan-coverage-network.html) parameter
   - with a target type:  `Organization`   
   - including these search paramaters which may be chained:  `coverage-network.identifier`, `coverage-network.name`, `coverage-network.partof`
<hr />
1. `GET [base]/InsurancePlan?coverage-type=[code]`

      *Support:* SHALL support search by the [`coverage-type`](SearchParameter-insuranceplan-coverage-type.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/InsurancePlan?endpoint=[id]`

      *Support:* SHOULD support search by the [`endpoint`](SearchParameter-insuranceplan-endpoint.html) parameter
   - with a target type:  `Endpoint`   
   - including these search paramaters which may be chained:  `endpoint.identifier`, `endpoint.connection-type`, `endpoint.organization`
<hr />
1. `GET [base]/InsurancePlan?general-cost-groupsize=[number]`

      *Support:* MAY support search by the [`general-cost-groupsize`](SearchParameter-insuranceplan-general-cost-groupsize.html) parameter   
   - including the comparators:  `eq`, `gt`, `lt`, `ge`, `le`, `sa`, `eb`  
<hr />
1. `GET [base]/InsurancePlan?general-cost-type=[code]`

      *Support:* MAY support search by the [`general-cost-type`](SearchParameter-insuranceplan-general-cost-type.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/InsurancePlan?general-cost-value=[prefix][number]|[system]|[code]`

      *Support:* MAY support search by the [`general-cost-value`](SearchParameter-insuranceplan-general-cost-value.html) parameter   
   - including the comparators:  `eq`, `gt`, `lt`, `ge`, `le`, `sa`, `eb`  
<hr />
1. `GET [base]/InsurancePlan?name=[string]`

      *Support:* SHOULD support search by the [`name`](SearchParameter-insuranceplan-name.html) parameter  
   - including the modifiers:  `exact`, `contains`   
<hr />
1. `GET [base]/InsurancePlan?owned-by=[id]`

      *Support:* SHALL support search by the [`owned-by`](SearchParameter-insuranceplan-owned-by.html) parameter
   - with a target type:  `Organization`
   - including the modifiers:  `above`, `below`  
   - including these search paramaters which may be chained:  `owned-by.identifier`, `owned-by.name`, `owned-by.partof`
<hr />
1. `GET [base]/InsurancePlan?plan-coverage-area=[id]`

      *Support:* SHOULD support search by the [`plan-coverage-area`](SearchParameter-insuranceplan-plan-coverage-area.html) parameter
   - with a target type:  `Location`   
   - including these search paramaters which may be chained:  `plan-coverage-area.identifier`, `plan-coverage-area.contains`
<hr />
1. `GET [base]/InsurancePlan?plan-identifier=[code]`

      *Support:* SHALL support search by the [`plan-identifier`](SearchParameter-insuranceplan-plan-identifier.html) parameter  
   - including the modifiers:  `text`, `ofType`   
<hr />
1. `GET [base]/InsurancePlan?plan-network=[id]`

      *Support:* SHALL support search by the [`plan-network`](SearchParameter-insuranceplan-plan-network.html) parameter
   - with a target type:  `Organization`   
   - including these search paramaters which may be chained:  `plan-network.identifier`, `plan-network.name`, `plan-network.partof`
<hr />
1. `GET [base]/InsurancePlan?plan-type=[code]`

      *Support:* SHALL support search by the [`plan-type`](SearchParameter-insuranceplan-plan-type.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/InsurancePlan?coverage-area=[id]`

      *Support:* SHOULD support search by the [`coverage-area`](SearchParameter-insuranceplan-coverage-area.html) parameter
   - with a target type:  `Location`   
   - including these search paramaters which may be chained:  `coverage-area.identifier`, `coverage-area.contains`
<hr />
1. `GET [base]/InsurancePlan?identifier=[code]

      *Support:* SHALL support search by the [`identifier`](SearchParameter-insuranceplan-identifier.html) parameter
<hr />
1. `GET [base]/InsurancePlan?network=[id]`

      *Support:* SHALL support search by the [`network`](SearchParameter-insuranceplan-network.html) parameter
   - with a target type:  `Organization`
   - including these search paramaters which may be chained:  `network.identifier`, `network.name`, `network.partof`
<hr />
1. `GET [base]/InsurancePlan?type=[code]`

      *Support:* SHALL support search by the [`type`](SearchParameter-insuranceplan-type.html) parameter
   - including the modifiers:  `text`
<hr />
1. `GET [base]/InsurancePlan?specific-cost-benefit-type=[code]`

      *Support:* SHOULD support search by the [`specific-cost-benefit-type`](SearchParameter-insuranceplan-specific-cost-benefit-type.html) parameter
   - including the modifiers:  `text`
<hr />
1. `GET [base]/InsurancePlan?specific-cost-category=[code]`

      *Support:* SHOULD support search by the [`specific-cost-category`](SearchParameter-insuranceplan-specific-cost-category.html) parameter
   - including the modifiers:  `text`
<hr />
1. `GET [base]/InsurancePlan?specific-cost-cost-type=[code]`

      *Support:* MAY support search by the [`specific-cost-cost-type`](SearchParameter-insuranceplan-specific-cost-cost-type.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/InsurancePlan?specific-cost-value=[prefix][number]|[system]|[code]`

      *Support:* MAY support search by the [`specific-cost-value`](SearchParameter-insuranceplan-specific-cost-value.html) parameter   
   - including the comparators:  `eq`, `gt`, `lt`, `ge`, `le`, `sa`, `eb`  
<hr />
1. `GET [base]/InsurancePlan?status=[code]`

      *Support:* SHALL support search by the [`status`](SearchParameter-insuranceplan-status.html) parameter

<hr />


---

// File: input/intro-notes/StructureDefinition-vhdir-insuranceplan-summary.md

#### Complete Summary of the Mandatory Requirements

1.  A coded value in `InsurancePlan.status`
1.  A reference to an organization that issues the product/plan in `InsurancePlan.ownedBy`
1.  A reference to an organization that administers the product/plan in `InsurancePlan.administeredBy`
1.  For each set of coverage details, one coded type of coverage in `InsurancePlan.coverage.type`
1.  For each set of coverage details, at least one covered benefit in `InsurancePlan.coverage.benefit`, including a coded type of benefit in `InsurancePlan.coverage.benefit.type`
1.  For each set of specific costs associated with a Plan, a coded value indicating the general category of benefit the cost applies to in `InsurancePlan.plan.specificCost.category`
1.  For each set specific costs associated with a covered benefit, a coded type of benefit in `InsurancePlan.plan.specificCost.benefit.type`
1.  For each set of specific costs associated with covered benefits, a coded type of cost in `InsurancePlan.plan.specificCost.benefit.cost.type`

---

// File: input/intro-notes/StructureDefinition-vhdir-location-intro.md

This profile sets minimum expectations for searching for and fetching information associated with a location. It identifies which core elements, extensions, vocabularies and value sets **SHALL** be present in the Location resource when using this profile.

**Background & Scope**

A location is the physical place where healthcare services are provided, practitioners are employed, organizations are based, etc. Locations can range in scope from a room in a building to a geographic region/area.

This profile modifies the base Practitioner resource in the following manner:

*  Constrains the cardinality of `location.status` (1..1), `location.operationalStatus` (0..0), `location.mode` (0..0), `location.telecom.system` (1..1), and `location.telecom.value` (1..1),

*  All references SHALL conform to the appropriate Validated Healthcare Directory Implementation Guide profile

*  Adds extensions:

1.  [Identifier status](StructureDefinition-identifier-status.html) (1..1) - indicates the status of a location's identifier
1.  [Via intermediary](StructureDefinition-contactpoint-viaintermediary.html) (0..1) - a reference to an alternative point of contact for this location
1.  [Available time](StructureDefinition-contactpoint-availabletime.html) (0..*) - indicates when a location is available for contact
1.  [Boundary-geojson](http://hl7.org/fhir/StructureDefinition/location-boundary-geojson) (0..*) - indicates a region/area for the location
1.  [Accessibility](StructureDefinition-accessibility.html) (0..*) - indicates accessibility options available at the location (e.g. handicap accessibility)
1.  [EHR](StructureDefinition-ehr.html) (0..*) - provides information about the EHR product(s) used at the location
1.  [NewPatients](StructureDefinition-newpatients.html) (0..*) - indicates whether the location is accepting new patients
1.  [NewPatientProfile](StructureDefinition-newpatientprofile.html) (0..*) - a description of the type of patients the location accepts (e.g. pediatric only)
1.  [Restriction](StructureDefinition-usage-restriction.html) (0..*) - indicates whether disclosure of any data associated with a location is restricted

<!--- *  Adds new value sets/updates value set bindings:

TBD --->


**Examples:**

The following are example uses for the vhdir-location profile:

-  [Founding Fathers Memorial Hospital, Main Campus](Location-loc-ffmh.html)


**Mandatory Data Elements**

The following data-elements are mandatory (i.e data MUST be present). These are presented below in a simple human-readable explanation. The [**Formal Profile Definition**](#profile) below provides the  formal summary, definitions, and  terminology requirements.

Each Location must have:

1.  One coded value in `location.status`

<!--- **Profile specific implementation guidance:**

- TBD --->


---

// File: input/intro-notes/StructureDefinition-vhdir-location-notes.md

#### Supported Searches

`GET [base]/Location?accessibility=[code]`

*Support:* MAY support search by the [`accessibility`](SearchParameter-location-accessibility.html) parameter
   - including the modifiers:  `text`
<hr />
`GET [base]/Location?address=[string]`

*Support:* SHALL support search by the [`address`](SearchParameter-location-address.html) parameter  
   - including the modifiers:  `contains`, `exact`
<hr />
`GET [base]/Location?endpoint=[id]`

*Support:* SHOULD support search by the [`endpoint`](SearchParameter-location-endpoint.html) parameter
   - with a target type:  `Endpoint`
   - including these search paramaters which may be chained:  `endpoint.identifier`, `endpoint.connection-type`, `endpoint.organization`
<hr />
`GET [base]/Location?identifier=[code]`

*Support:* SHALL support search by the [`identifier`](SearchParameter-location-identifier.html) parameter  
   - including the modifiers:  `text`, `ofType`
<hr />
`GET [base]/Location?identifier-assigner=[id]`

*Support:* MAY support search by the [`identifier-assigner`](SearchParameter-location-identifier-assigner.html) parameter
   - with a target type:  `Organization`
   - including the modifiers:  `below`  
   - including these search paramaters which may be chained:  `identifier-assigner.identifier`, `identifier-assigner.name`
<hr />
`GET [base]/Location?new-patient=[code]`

*Support:* SHOULD support search by the [`new-patient`](SearchParameter-location-new-patient.html) parameter     
<hr />
`GET [base]/Location?new-patient-network=[id]`

*Support:* SHOULD support search by the [`new-patient-network`](SearchParameter-location-new-patient-network.html) parameter
   - with a target type:  `Organization`   
   - including these search paramaters which may be chained:  `new-patient-network.identifier`, `new-patient-network.name`, `new-patient-network.partof`
<hr />
`GET [base]/Location?organization=[id]`

*Support:* SHALL support search by the [`organization`](SearchParameter-location-organization.html) parameter
   - with a target type:  `Organization`
   - including the modifiers:  `above`, `below`  
   - including these search paramaters which may be chained:  `organization.identifier`, `organization.name`, `organization.address`, `organization.partof`, `organization-type`
<hr />
`GET [base]/Location?partof=[id]`

*Support:* SHOULD support search by the [`partof`](SearchParameter-location-partof.html) parameter
   - with a target type:  `Location`
   - including the modifiers:  `above`, `below`  
   - including these search paramaters which may be chained:  `identifier`, `type`, `address`, `organization`
<hr />
`GET [base]/Location?contains=-83.694810|42.256500`

*Support:* MAY support search by the [`contains`](SearchParameter-location-contains.html) parameter   

This is a special search parameter which might leverage a systems geo-spatial
features to test that the geocoded point provided 
(expressed as [latitude]|[longitude] using the WGS84 datum)
is contained by the boundary stored in the standard extension `boundary-geojson`

Support for multiple points can also be provided using the `,` syntax which
is interpretted as the location returned in the search contains at least 1 of the
provided co-ordinates.

<hr />
`GET [base]/Location?status=[code]`

*Support:* SHALL support search by the [`status`](SearchParameter-location-status.html) parameter
<hr />
`GET [base]/Location?type=[code]`

*Support:* SHALL support search by the [`type`](SearchParameter-location-type.html) parameter  
   - including the modifiers:  `text`   
<hr />
`GET [base]/Location?via-intermediary=[id]`

*Support:* MAY support search by the [`via-intermediary`](SearchParameter-location-via-intermediary.html) parameter
   - with a target type:  `PractitionerRole`, `Organization`, `OrganizationAffiliation`, `Location`    

<hr />
`GET [base]/Location?near=-83.694810|42.256500|11.20|km`

*Support:* MAY support search by the [`near`](http://hl7.org/fhir/location.html#positional) parameter


---

// File: input/intro-notes/StructureDefinition-vhdir-location-summary.md

#### Complete Summary of the Mandatory Requirements

1.  One coded value in `location.status`


---

// File: input/intro-notes/StructureDefinition-vhdir-network-intro.md

This profile sets minimum expectations for searching for and fetching information associated with a healthcare provider insurance network. It identifies which core elements, extensions, vocabularies and value sets **SHALL** be present in the Organization resource when using this profile.

**Background & Scope**

A Network refers to a healthcare provider insurance network. A healthcare provider insurance network is an aggregation of organizations and individuals that deliver a set of services across a geography through health insurance products/plans. A network is typically owned by a payer.

In the VHDir IG, individuals and organizations are represented as participants in a Network through the practitionerRole and organizationAffiliation resources, respectively.

Network is a profile on the Organization resource. This profile modifies the base Organization resource in the following manner:

*  Constrains the cardinality of `organization.active` (1..1), `organization.telecom` (0..0), `organization.partOf` (1..1), `organization.contact.name.family` (1..1), `organization.contact.name.given` (1..*), `organization.contact.telecom.system` (1..1), and `organization.contact.telecom.value` (1..1)

*  All references SHALL conform to the appropriate Validated Healthcare Directory Implementation Guide profile

*  Adds extensions:

1.  [Identifier status](StructureDefinition-identifier-status.html) (1..1) - indicates the status of an organization's identifier
1.  [Via intermediary](StructureDefinition-contactpoint-viaintermediary.html) (0..1) - a reference to an alternative point of contact for this organization
1.  [Available time](StructureDefinition-contactpoint-availabletime.html) (0..*) - indicates when an organization is available for contact
1.  [Period](http://hl7.org/fhir/StructureDefinition/organization-period) (0..1) - Represents a time period for the network
1.  [Coverage area](StructureDefinition-location-reference.html) (0..*) - Indicates a coverage area for the network
1.  [Restriction](StructureDefinition-usage-restriction.html) (0..*) - indicates whether disclosure of any data associated with a network is restricted




**Examples:**

The following are example uses for the vhdir-network profile:

-  [Patriot Preferred Provider Network](Organization-patriotppo.html)
-  [Patriot Dental Provider Network](Organization-patriotdental.html)


**Mandatory Data Elements**

The following data-elements are mandatory (i.e data MUST be present). These are presented below in a simple human-readable explanation. The [**Formal Profile Definition**](#profile) below provides the  formal summary, definitions, and  terminology requirements.  

Each network must have:

1.  A coded value in `organization.active`
1.  A reference to an organization or organizationaffiliation resource indicating the owner of the network in `organization.partOf`


**Profile specific implementation guidance:**

- PractitionerRole and OrganizationAffiliation are used to indicate a Practitioner and Organization's participation in a Network, respectively


---

// File: input/intro-notes/StructureDefinition-vhdir-network-notes.md

#### Supported Searches

1. `GET [base]/Organization?active=[code]`

      *Support:* SHALL support search by the `active` parameter: `http://hl7.org/fhir/SearchParameter/Organization-active`
<hr />
1. `GET [base]/Organization?address-use=[code]`

      *Support:* MAY support search by the `address-use` parameter: `http://hl7.org/fhir/SearchParameter/Organization-address-use`
<hr />
1. `GET [base]/Organization?coverage-area=[id]`

      *Support:* SHOULD support search by the network's [`coverage-area`](SearchParameter-organization-coverage-area.html) parameter 
   - with a target type:  `Location`   
   - including these search paramaters which may be chained:  `coverage-area.identifier`, `coverage-area.contains` 
<hr />
1. `GET [base]/Organization?address=[string]`

      *Support:* SHALL support search by the [`address`](SearchParameter-organization-address.html) parameter  
   - including the modifiers:  `contains`, `exact`   
<hr />
1. `GET [base]/Organization?address-city=[string]`

      *Support:* SHOULD support search by the [`address-city`](SearchParameter-organization-address-city.html) parameter  
   - including the modifiers:  `exact`   
<hr />
1. `GET [base]/Organization?address-country=[string]`

      *Support:* SHOULD support search by the [`address-country`](SearchParameter-organization-address-country.html) parameter  
   - including the modifiers:  `exact`   
<hr />
1. `GET [base]/Organization?address-postalcode=[string]`

      *Support:* SHOULD support search by the [`address-postalcode`](SearchParameter-organization-address-postalcode.html) parameter
   - including the modifiers:  `exact`   
<hr />
1. `GET [base]/Organization?address-state=[string]`

      *Support:* SHOULD support search by the [`address-state`](SearchParameter-organization-address-state.html) parameter  
   - including the modifiers:  `exact`   
<hr />
1. `GET [base]/Organization?endpoint=[id]`

      *Support:* SHALL support search by the [`endpoint`](SearchParameter-organization-endpoint.html) parameter 
   - with a target type:  `Endpoint`   
   - including these search paramaters which may be chained:  `endpoint.identifier`, `endpoint.connection-type`, `endpoint.organization` 
<hr />
1. `GET [base]/Organization?identifier=[code]`

      *Support:* SHALL support search by the [`identifier`](SearchParameter-organization-identifier.html) parameter  
   - including the modifiers:  `text`, `ofType`   
<hr />
1. `GET [base]/Organization?identifier-assigner=[id]`

      *Support:* MAY support search by the [`identifier-assigner`](SearchParameter-organization-identifier-assigner.html) parameter 
   - with a target type:  `Organization` 
   - including the modifiers:  `below`  
   - including these search paramaters which may be chained:  `identifier-assigner.identifier`, `identifier-assigner.name` 
<hr />
1. `GET [base]/Organization?name=[string]`

      *Support:* SHALL support search by the [`name`](SearchParameter-organization-name.html) parameter  
   - including the modifiers:  `exact`, `contains`   
<hr />
1. `GET [base]/Organization?partof=[id]`

      *Support:* SHALL support search by the [`partof`](SearchParameter-organization-partof.html) parameter 
   - with a target type:  `Organization` 
   - including the modifiers:  `above`, `below`  
   - including these search paramaters which may be chained:  `partof.identifier`, `partof.name`, `partof.address`, `partof.type` 
<hr />

---

// File: input/intro-notes/StructureDefinition-vhdir-network-summary.md

#### Complete Summary of the Mandatory Requirements

1.  A coded value in `organization.active`
1.  A reference to an organization or organizationaffiliation resource indicating the owner of the network in `organization.partOf`


---

// File: input/intro-notes/StructureDefinition-vhdir-organization-intro.md

This profile sets minimum expectations for searching for and fetching information associated with an organization. It identifies which core elements, extensions, vocabularies and value sets **SHALL** be present in the Organization resource when using this profile.

**Background & Scope**

An organization is a formal or informal grouping of people or organizations with a common purpose, such as a company, institution, corporation, community group, or healthcare practice. 

This profile modifies the base Organization resource in the following manner:

*  Constrains the cardinality of `organization.active` (1..1), `organization.type` (1..*), `organization.name` (1..1), `organization.telecom.system` (1..1), `organization.telecom.value` (1..1), `organization.contact.name.family` (1..1), `organization.contact.name.given` (1..*), `organization.contact.telecom.system` (1..1), and `organization.contact.telecom.value` (1..1)

*  All references SHALL conform to the appropriate Validated Healthcare Directory Implementation Guide profile

*  Adds extensions:

1.  [Identifier status](StructureDefinition-identifier-status.html) (1..1) - indicates the status of an organization's identifier
1.  [Via intermediary](StructureDefinition-contactpoint-viaintermediary.html) (0..1) - a reference to an alternative point of contact for this organization
1.  [Available time](StructureDefinition-contactpoint-availabletime.html) (0..*) - indicates when an organization is available for contact
1.  [Geolocation](http://hl7.org/fhir/StructureDefinition/geolocation) (0..1) - indicates the absolute geographic location of an organization's address
1.  [Alias type](StructureDefinition-org-alias-type.html) (0..1) - indicates whether an organization's alias is a historical name or legal alternative name
1.  [Alias period](StructureDefinition-org-alias-period.html) (0..1) - indicates a period of time for which an organization used an alias
1.  [Description](StructureDefinition-org-description.html) (0..1) - a friendly description of the organization
1.  [Qualification](StructureDefinition-qualification.html) (0..*) - indicates whether the organization has any formal qualifications 
1.  [DigitalCertificate](StructureDefinition-digitalcertificate.html) (0..*) - a digital certificate associated with the organization
1.  [InsurancePlan](StructureDefinition-insuranceplan-reference.html) (0..*) - indicates the health insurance products the organization offers to its employees
1.  [Restriction](StructureDefinition-usage-restriction.html) (0..*) - indicates whether disclosure of any data associated with an organization is restricted

<!--- *  Adds new value sets/updates value set bindings:

TBD --->

**Examples:**

The following are example uses for the vhdir-organization profile:

-  [Founding Fathers Memorial Hospital](Organization-foundingfathers.html)


**Mandatory Data Elements**

The following data-elements are mandatory (i.e data MUST be present). These are presented below in a simple human-readable explanation. The [**Formal Profile Definition**](#profile) below provides the  formal summary, definitions, and  terminology requirements.  

Each organization must have:

1.  A boolean value in `organization.active`
1.  A name in `organization.name`
1.  A type in `organization.type`


<!--- **Profile specific implementation guidance:**

- TBD --->

---

// File: input/intro-notes/StructureDefinition-vhdir-organization-notes.md

#### Supported Searches

1. `GET [base]/Organization?active=[code]`

      *Support:* SHALL support search by the `active` parameter: `http://hl7.org/fhir/SearchParameter/Organization-active`
<hr />
1. `GET [base]/Organization?address-use=[code]`

      *Support:* MAY support search by the `address-use` parameter: `http://hl7.org/fhir/SearchParameter/Organization-address-use`
<hr />
1. `GET [base]/Organization?address=[string]`

      *Support:* SHALL support search by the [`address`](SearchParameter-organization-address.html) parameter  
   - including the modifiers:  `contains`, `exact`   
<hr />
1. `GET [base]/Organization?organiztion-address-city=[string]`

      *Support:* SHOULD support search by the [`address-city`](SearchParameter-organization-address-city.html) parameter  
   - including the modifiers:  `exact`   
<hr />
1. `GET [base]/Organization?address-country=[string]`

      *Support:* SHOULD support search by the [`address-country`](SearchParameter-organization-address-country.html) parameter  
   - including the modifiers:  `exact`   
<hr />
1. `GET [base]/Organization?address-postalcode=[string]`

      *Support:* SHOULD support search by the [`address-postalcode`](SearchParameter-organization-address-postalcode.html) parameter
   - including the modifiers:  `exact`   
<hr />
1. `GET [base]/Organization?address-state=[string]`

      *Support:* SHOULD support search by the [`address-state`](SearchParameter-organization-address-state.html) parameter  
   - including the modifiers:  `exact`   
<hr />
1. `GET [base]/Organization?endpoint=[id]`

      *Support:* SHALL support search by the [`endpoint`](SearchParameter-organization-endpoint.html) parameter 
   - with a target type:  `Endpoint`   
   - including these search paramaters which may be chained:  `endpoint.identifier`, `endpoint.connection-type`, `endpoint.organization` 
<hr />
1. `GET [base]/Organization?identifier=[code]`

      *Support:* SHALL support search by the [`identifier`](SearchParameter-organization-identifier.html) parameter  
   - including the modifiers:  `text`, `ofType`   
<hr />
1. `GET [base]/Organization?identifier-assigner=[id]`

      *Support:* MAY support search by the [`identifier-assigner`](SearchParameter-organization-identifier-assigner.html) parameter 
   - with a target type:  `Organization` 
   - including the modifiers:  `below`  
   - including these search paramaters which may be chained:  `identifier-assigner.identifier`, `identifier-assigner.name` 
<hr />
1. `GET [base]/Organization?name=[string]`

      *Support:* SHALL support search by the [`name`](SearchParameter-organization-name.html) parameter  
   - including the modifiers:  `exact`, `contains`   
<hr />
1. `GET [base]/Organization?partof=[id]`

      *Support:* SHALL support search by the [`partof`](SearchParameter-organization-partof.html) parameter 
   - with a target type:  `Organization` 
   - including the modifiers:  `above`, `below`  
   - including these search paramaters which may be chained:  `partof.identifier`, `partof.name`, `partof.address`, `partof.type` 
<hr />
1. `GET [base]/Organization?qualification-code=[code]`

      *Support:* SHOULD support search by the [`qualification-code`](SearchParameter-organization-qualification-code.html) parameter
   - including the modifiers:  `text`
<hr />
1. `GET [base]/Organization?qualification-issuer=[id]`

      *Support:* MAY support search by the [`qualification-issuer`](SearchParameter-organization-qualification-issuer.html) parameter 
   - with a target type:  `Organization` 
   - including the modifiers:  `below`  
   - including these search paramaters which may be chained:  `qualification-issuer.identifier`, `qualification-issuer.name` 
<hr />
1. `GET [base]/Organization?qualification-status=[code]`

      *Support:* SHOULD support search by the [`qualification-status`](SearchParameter-organization-qualification-status.html) parameter     
<hr />
1. `GET [base]/Organization?qualification-wherevalid-code=[code]`

      *Support:* SHOULD support search by the [`qualification-wherevalid-code`](SearchParameter-organization-qualification-wherevalid-code.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/Organization?qualification-wherevalid-location=[id]`

      *Support:* SHOULD support search by the [`qualification-wherevalid-location`](SearchParameter-organization-qualification-wherevalid-location.html) parameter 
   - with a target type:  `Location` 
   - including the modifiers:  `above`, `below`  
   - including these search paramaters which may be chained:  `qualification-wherevalid-location.identifier`, `qualification-wherevalid-location.organization` 
<hr />
1. `GET [base]/Organization?type=[code]`

      *Support:* SHALL support search by the [`type`](SearchParameter-organization-type.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/Organization?via-intermediary=[id]`

      *Support:* MAY support search by the [`via-intermediary`](SearchParameter-organization-via-intermediary.html) parameter 
   - with a target type:  `PractitionerRole`, `Organization`, `OrganizationAffiliation`, `Location`    
<hr />

---

// File: input/intro-notes/StructureDefinition-vhdir-organization-summary.md

#### Complete Summary of the Mandatory Requirements

1.  A boolean value in `organization.active`
1.  A name in `organization.name`
1.  A type in `organization.type`


---

// File: input/intro-notes/StructureDefinition-vhdir-organizationaffiliation-intro.md

This profile sets minimum expectations for searching for and fetching information associated with an organization role. It identifies which core elements, extensions, vocabularies and value sets **SHALL** be present in the OrganizationAffiliation resource when using this profile.

**Background & Scope**

The OrganizationAffiliation resource describes relationships between two or more organizations, including the services one organization provides another, the location(s) where they provide services, the availability of those services, electronic endpoints, and other relevant information.

OrganizationAffiliation addresses the need to define a non-hierarchical relationship between two or more organizations. For example:
*  One organization may provide services to another organization
*  Two or more organizations may form a partnership or joint venture
*  An organization may be a member of another organization, but not owned by it (e.g. a hospital is a member the American Hospital Association, a hospital is a member of a health information exchange network)

OrganizationAffiliation is similar in structure to practitionerRole. Instead of references to practitioner and organization (as in practitionerRole), organizationaffiliation includes references to a participatingOrg and an organization. The participating organization provides "services" to the primary organization (much like a practitioner provides services to an organization). Using the three examples above:
*  The participating organization provides services to the primary organization
*  The joint venture is considered the primary organization, and partners within the joint venture are considered participating organizations (requires two organizationaffiliation resource instances)
*  An association is the primary organization, and its members are participating organizations.

OrganizationAffiliation is also used to indicate when an organization provides services for a health insurance provider network.

--

This profile modifies the base OrganizationAffiliation resource in the following manner:

*  Constrains the cardinality of `OrganizationAffiliation.active` (1..1), `OrganizationAffiliation.telecom.system` (1..1), and `OrganizationAffiliation.telecom.value` (1..1)

*  All references SHALL conform to the appropriate Validated Healthcare Directory Implementation Guide profile

*  Adds extensions:

1.  [Identifier status](StructureDefinition-identifier-status.html) (1..1) - indicates the status of an identifier for the role
1.  [Via intermediary](StructureDefinition-contactpoint-viaintermediary.html) (0..1) - a reference to an alternative point of contact for this role
1.  [Available time](StructureDefinition-contactpoint-availabletime.html) (0..*) - indicates when the point of contact for this role is available
1.  [Restriction](StructureDefinition-usage-restriction.html) (0..*) - indicates whether disclosure of any data associated with this role is restricted

<!--- *  Adds new value sets/updates value set bindings:

TBD --->
**Examples:**

The following are example uses for the vhdir-organizationaffiliation profile:

-  [Independence Rehabilitation provides rehab services to Founding Fathers Memorial Hospital](OrganizationAffiliation-orgrole1.html)
-  [Founding Fathers Memorial Hospital is a member of Monument HIE](OrganizationAffiliation-orgrole2.html)


**Mandatory Data Elements**

The following data-elements are mandatory (i.e data MUST be present). These are presented below in a simple human-readable explanation. The [**Formal Profile Definition**](#profile) below provides the  formal summary, definitions, and  terminology requirements.  

Each OrganizationAffiliation must have:

1.  A boolean value in `OrganizationAffiliation.active`

<!--- **Profile specific implementation guidance:**

- TBD --->

---

// File: input/intro-notes/StructureDefinition-vhdir-organizationaffiliation-notes.md

#### Supported Searches

1. `GET [base]/OrganizationAffiliation?active=[code]`

      *Support:* SHALL support search by the `active` parameter: `http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-active`
<hr />
1. `GET [base]/OrganizationAffiliation?endpoint=[id]`

      *Support:* SHOULD support search by the [`endpoint`](SearchParameter-organizationaffiliation-endpoint.html) parameter
   - with a target type:  `Endpoint`   
   - including these search paramaters which may be chained:  `endpoint.identifier`, `endpoint.connection-type`, `endpoint.organization`
<hr />
1. `GET [base]/OrganizationAffiliation?identifier=[code]`

      *Support:* SHALL support search by the [`identifier`](SearchParameter-organizationaffiliation-identifier.html) parameter
   - including the modifiers:  `text`, `ofType`   
<hr />
1. `GET [base]/Organization?identifier-assigner=[id]`

      *Support:* MAY support search by the [`identifier-assigner`](SearchParameter-organizationaffiliation-identifier-assigner.html) parameter
   - with a target type:  `Organization`
   - including the modifiers:  `below`  
   - including these search paramaters which may be chained:  `identifier-assigner.identifier`, `identifier-assigner.name`
<hr />
1. `GET [base]/OrganizationAffiliation?location=[id]`

      *Support:* SHALL support search by the [`location`](SearchParameter-organizationaffiliation-location.html) parameter
   - with a target type:  `Location`
   - including the modifiers:  `above`, `below`  
   - including these search paramaters which may be chained:  `location.identifier`, `location.type`, `location.address`, `location.organization`
<hr />
1. `GET [base]/OrganizationAffiliation?network=[id]`

      *Support:* SHOULD support search by the [`network`](SearchParameter-organizationaffiliation-network.html) parameter
   - with a target type:  `Organization`   
   - including these search paramaters which may be chained:  `network.identifier`, `network.name`, `network.partof`
<hr />
1. `GET [base]/OrganizationAffiliation?participating-organization=[id]`

      *Support:* SHALL support search by the [`participating-organization`](SearchParameter-organizationaffiliation-participating-organization.html) parameter
   - with a target type:  `Organization`
   - including the modifiers:  `above`, `below`  
   - including these search paramaters which may be chained:  `participating-organization.identifier`, `participating-organization.name`, `participating-organization.address`, `participating-organization.partof`, `participating-organization.type`
<hr />
1. `GET [base]/OrganizationAffiliation?primary-organization=[id]`

      *Support:* SHALL support search by the [`primary-organization`](SearchParameter-organizationaffiliation-primary-organization.html) parameter
   - with a target type:  `Organization`
   - including the modifiers:  `above`, `below`  
   - including these search paramaters which may be chained:  `primary-organization.identifier`, `primary-organization.type`, `primary-organization.address`, `primary-organization.name`, `primary-organization.partof`
<hr />
1. `GET [base]/OrganizationAffiliation?role=[code]`

      *Support:* SHALL support search by the [`role`](SearchParameter-organizationaffiliation-role.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/OrganizationAffiliation?service=[id]`

      *Support:* SHOULD support search by the [`service`](SearchParameter-organizationaffiliation-service.html) parameter
   - with a target type:  `HealthcareService`   
   - including these search paramaters which may be chained:  `service.identifier`, `service.service-category`, `service.organization`, `service.location`
<hr />
1. `GET [base]/OrganizationAffiliation?specialty=[code]`

      *Support:* SHOULD support search by the [`specialty`](SearchParameter-organizationaffiliation-specialty.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/Organization?via-intermediary=[id]`

      *Support:* MAY support search by the [`via-intermediary`](SearchParameter-organizationaffiliation-via-intermediary.html) parameter
   - with a target type:  `PractitionerRole`, `Organization`, `OrganizationAffiliation`, `Location`    
<hr />


---

// File: input/intro-notes/StructureDefinition-vhdir-organizationaffiliation-summary.md

#### Complete Summary of the Mandatory Requirements

1.  A boolean value in `organizationaffiliation.active`

---

// File: input/intro-notes/StructureDefinition-vhdir-practitioner-intro.md

This profile sets minimum expectations for searching for and fetching information associated with a practitioner. It identifies which core elements, extensions, vocabularies and value sets **SHALL** be present in the Practitioner resource when using this profile.

**Background & Scope**

A practitioner is a person who is directly or indirectly involved in providing healthcare.

This profile modifies the base Practitioner resource in the following manner:

*  Constrains the cardinality of `practitioner.active` (1..1), `practitioner.name` (1..1), `practitioner.name.family` (1..1), `practitioner.name.given` (1..*), `practitioner.telecom.system` (1..1), `practitioner.telecom.value` (1..1), `practitioner.photo` (0..1), and `practitioner.qualification.issuer` (1..1)

*  All references SHALL conform to the appropriate Validated Healthcare Directory Implementation Guide profile

*  Adds extensions:

1.  [Identifier status](StructureDefinition-identifier-status.html) (1..1) - indicates the status of a practitioner's identifier
1.  [Via intermediary](StructureDefinition-contactpoint-viaintermediary.html) (0..1) - a reference to an alternative point of contact for this practitioner
1.  [Available time](StructureDefinition-contactpoint-availabletime.html) (0..*) - indicates when a practitioner is available for contact
1.  [Geolocation](http://hl7.org/fhir/StructureDefinition/geolocation) (0..1) - indicates the absolute geographic location of a practitioner's address
1.  [Endpoint](StructureDefinition-endpoint-reference.html) (0..*) - reference(s) to the endpoint resource, indicating technical endpoints for the practitioner independent of their role at an organization (such as a personal Direct address)
1.  [Accessibility](StructureDefinition-accessibility.html) (0..*) - indicates accessibility options offered by the practitioner (e.g. cultural competence)
1.  [Proficiency](StructureDefinition-communication-proficiency.html) (0..1) - indicates a practitioner's level of spoken proficiency with the language(s) specified in `practitioner.communication`
1.  [DigitalCertificate](StructureDefinition-digitalcertificate.html) (0..*) - a digital certificate associated with the practitioner
1.  [Qualification](StructureDefinition-practitioner-qualification.html) (0..1) - provides additional information about a practitioner's qualifications, including where they are valid and the current/historical status
1.  [Restriction](StructureDefinition-usage-restriction.html) (0..*) - indicates whether disclosure of any data associated with a practitioner is restricted

<!--- *  Adds new value sets/updates value set bindings:

TBD --->

**Examples:**

The following are example uses for the vhdir-practitioner profile:

-  [George Washington MD, a cardiologist](Practitioner-practitioner1.html)


**Mandatory Data Elements**

The following data-elements are mandatory (i.e data MUST be present). These are presented below in a simple human-readable explanation. The [**Formal Profile Definition**](#profile) below provides the  formal summary, definitions, and  terminology requirements.  

Each practitioner must have:

1.  A boolean value in `practitioner.active`
1.  One name in `practitioner.name`
    1.  One family name in `practitioner.name.family`
    1.  At least one given name in `practitioner.name.given`


<!--- **Profile specific implementation guidance:**

- TBD --->

---

// File: input/intro-notes/StructureDefinition-vhdir-practitioner-notes.md

#### Supported Searches

1. `GET [base]/Practitioner?active=[code]`

      *Support:* SHALL support search by the `active` parameter: `http://hl7.org/fhir/SearchParameter/Practitioner-active`
<hr />
1. `GET [base]/Practitioner?endpoint=[id]`

      *Support:* MAY support search by the [`endpoint`](SearchParameter-practitioner-endpoint.html) parameter
   - with a target type:  `Endpoint`
   - including these search paramaters which may be chained:  `endpoint.identifier`
<hr />
1. `GET [Base]/Practitioner?family=[string]`

      *Support:* SHOULD support search by the [`family`](SearchParameter-practitioner-family-name.html) parameter  
   - including the modifiers:  `exact`
<hr />
1. `GET [Base]/Practitioner?given=[string]`

      *Support:* SHOULD support search by the [`given`](SearchParameter-practitioner-given-name.html) parameter  
   - including the modifiers:  `exact`
<hr />
1. `GET [base]/Practitioner?identifier=[code]`

      *Support:* SHALL support search by the [`identifier`](SearchParameter-practitioner-identifier.html) parameter  
   - including the modifiers:  `text`, `ofType`
<hr />
1. `GET [base]/Practitioner?identifier-assigner=[id]`

      *Support:* MAY support search by the [`identifier-assigner`](SearchParameter-practitioner-identifier-assigner.html) parameter
   - with a target type:  `Organization`
   - including the modifiers:  `below`  
   - including these search paramaters which may be chained:  `identifier-assigner.identifier`, `identifier-assigner.name`
<hr />
1. `GET [base]/Practitioner?name=[string]`

      *Support:* SHALL support search by the [`name`](SearchParameter-practitioner-name.html) parameter  
   - including the modifiers:  `contains`, `exact`   
<hr />
1. `GET [base]/Practitioner?phonetic=[string]`

      *Support:* MAY support search by the [`phonetic`](SearchParameter-practitioner-phonetic.html) parameter
<hr />
1. `GET [base]/Practitioner?qualification-code=[code]`

      *Support:* SHOULD support search by the [`qualification-code`](SearchParameter-practitioner-qualification-code.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/Practitioner?qualification-issuer=[id]`

      *Support:* MAY support search by the [`qualification-issuer`](SearchParameter-practitioner-qualification-issuer.html) parameter
   - with a target type:  `Organization`
   - including the modifiers:  `below`  
   - including these search paramaters which may be chained:  `qualification-issuer.identifier`, `qualification-issuer.name`
<hr />
1. `GET [base]/Practitioner?qualification-status=[code]`

      *Support:* SHOULD support search by the [`qualification-status`](SearchParameter-practitioner-qualification-status.html) parameter     
<hr />
1. `GET [base]/Practitioner?qualification-wherevalid-code=[code]`

      *Support:* SHOULD support search by the [`qualification-wherevalid-code`](SearchParameter-practitioner-qualification-wherevalid-code.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/Practitioner?qualification-wherevalid-location=[id]`

      *Support:* SHOULD support search by the [`qualification-wherevalid-location`](SearchParameter-practitioner-qualification-wherevalid-location.html) parameter
   - with a target type:  `Location`
   - including the modifiers:  `above`, `below`  
   - including these search paramaters which may be chained:  `qualification-wherevalid-location.identifier`, `qualification-wherevalid-location.address`, `qualification-wherevalid-location.organization`
<hr />
1. `GET [base]/Practitioner?via-intermediary=[id]`

      *Support:* MAY support search by the [`via-intermediary`](SearchParameter-practitioner-via-intermediary.html) parameter
   - with a target type:  `PractitionerRole`, `Organization`, `OrganizationAffiliation`, `Location`    
<hr />
1. `GET [base]/Practitioner?qualification-period=[string]`

      *Support:* SHALL support search by the [`qualification-period`](SearchParameter-practitioner-qualification-period.html) parameter  
   - including the modifiers:  `exact`, `contains`   
<hr />


---

// File: input/intro-notes/StructureDefinition-vhdir-practitioner-summary.md

#### Complete Summary of the Mandatory Requirements

1.  A boolean value in `practitioner.active`
1.  One name in `practitioner.name`
    1.  One family name in `practitioner.name.family`
    1.  At least one given name in `practitioner.name.given`


---

// File: input/intro-notes/StructureDefinition-vhdir-practitionerrole-intro.md

This profile sets minimum expectations for searching for and fetching information associated with a practitioner role. It identifies which core elements, extensions, vocabularies and value sets **SHALL** be present in the PractitionerRole resource when using this profile.

**Background & Scope**

PractitionerRole describes the role a practitioner plays at an organization, including the services they provide, the location(s) where they work, and their availability, electronic endpoints, and other relevant information.

This profile modifies the base PractitionerRole resource in the following manner:

*  Constrains the cardinality of `practitionerRole.active` (1..1) and `practitionerRole.code` (1..*)

*  All references SHALL conform to the appropriate Validated Healthcare Directory Implementation Guide profile

*  Adds extensions:

1.  [Identifier status](StructureDefinition-identifier-status.html) (1..1) - indicates the status of a practitionerRole's identifier
1.  [Via intermediary](StructureDefinition-contactpoint-viaintermediary.html) (0..1) - a reference to an alternative point of contact for a practitioner in a role
1.  [Available time](StructureDefinition-contactpoint-availabletime.html) (0..*) - indicates when the contact point for a practitioner in a role is available
1.  [Network](StructureDefinition-network-reference.html) (0..*) - a reference to the healthcare provider insurance networks the practitioner participates in through their role
1.  [NewPatients](StructureDefinition-newpatients.html) (0..*) - indicates whether the practitioner is accepting new patients in their role
1.  [NewPatientProfile](StructureDefinition-newpatientprofile.html) (0..*) - a description of the type of new patients a practitioner accepts in their role (e.g. pediatric only)
1.  [Qualification](StructureDefinition-qualification.html) (0..*) - indicates qualifications the practitioner has through their role (e.g. registered to prescribe controlled substances)
1.  [DigitalCertificate](StructureDefinition-digitalcertificate.html) (0..*) - a digital certificate associated with the practitioner in their role
1.  [Restriction](StructureDefinition-usage-restriction.html) (0..*) - indicates whether disclosure of any data associated with a practitionerRole is restricted

*  Adds new value sets/updates value set bindings:

TBD


**Examples:**

The following are example uses for the vhdir-practitionerrole profile:

-  [George Washington practices at Founding Fathers Memorial Hospital](PractitionerRole-practitionerrole1.html)


**Mandatory Data Elements**

The following data-elements are mandatory (i.e data MUST be present). These are presented below in a simple human-readable explanation. The [**Formal Profile Definition**](#profile) below provides the  formal summary, definitions, and  terminology requirements.  

Each practitionerRole must have:

1.  A boolean value in `practitionerRole.active`
1.  At least one value describing the role the practitioner performs in `practitionerRole.code`


**Profile specific implementation guidance:**

- TBD


---

// File: input/intro-notes/StructureDefinition-vhdir-practitionerrole-notes.md

#### Supported Searches

1. `GET [base]/PractitionerRole?active=[code]`

      *Support:* SHALL support search by the `active` parameter: `http://hl7.org/fhir/SearchParameter/PractitionerRole-active`
<hr />
1. `GET [base]/PractitionerRole?endpoint=[id]`

      *Support:* SHOULD support search by the [`endpoint`](SearchParameter-practitionerrole-endpoint.html) parameter
   - with a target type:  `Endpoint`   
   - including these search paramaters which may be chained:  `endpoint.identifier`, `endpoint.connection-type`, `endpoint.organization`
<hr />
1. `GET [base]/PractitionerRole?identifier=[code]`

      *Support:* SHALL support search by the [`identifier`](SearchParameter-practitionerrole-identifier.html) parameter  
   - including the modifiers:  `text`, `ofType`   
<hr />
1. `GET [base]/PractitionerRole?identifier-assigner=[id]`

      *Support:* MAY support search by the [`identifier-assigner`](SearchParameter-practitionerrole-identifier-assigner.html) parameter
   - with a target type:  `Organization`
   - including the modifiers:  `below`  
   - including these search paramaters which may be chained:  `identifier-assigner.identifier`, `identifier-assigner.name`
<hr />
1. `GET [base]/PractitionerRole?location=[id]`

      *Support:* SHALL support search by the [`location`](SearchParameter-practitionerrole-location.html) parameter
   - with a target type:  `Location`
   - including the modifiers:  `above`, `below`  
   - including these search paramaters which may be chained:  `location.identifier`, `location.type`, `location.address`, `location.organization`
<hr />
1. `GET [base]/PractitionerRole?network=[id]`

      *Support:* SHOULD support search by the [`network`](SearchParameter-practitionerrole-network.html) parameter
   - with a target type:  `Organization`   
   - including these search paramaters which may be chained:  `network.identifier`, `network.name`, `network.partof`
<hr />
1. `GET [base]/PractitionerRole?new-patient=[code]`

      *Support:* SHOULD support search by the [`new-patient`](SearchParameter-practitionerrole-new-patient.html) parameter     
<hr />
1. `GET [base]/PractitionerRole?new-patient-network=[id]`

      *Support:* SHOULD support search by the [`new-patient-network`](SearchParameter-practitionerrole-new-patient-network.html) parameter
   - with a target type:  `Organization`   
   - including these search paramaters which may be chained:  `new-patient-network.identifier`, `new-patient-network.name`, `new-patient-network.partof`
<hr />
1. `GET [base]/PractitionerRole?organization=[id]`

      *Support:* SHALL support search by the [`organization`](SearchParameter-practitionerrole-organization.html) parameter
   - with a target type:  `Organization`
   - including the modifiers:  `above`, `below`  
   - including these search paramaters which may be chained:  `organization.identifier`, `organization.name`, `organization.address`, `organization.partof`, `organization-type`
<hr />
1. `GET [base]/PractitionerRole?practitioner=[id]`

      *Support:* SHALL support search by the [`practitioner`](SearchParameter-practitionerrole-practitioner.html) parameter
   - with a target type:  `Practitioner`   
   - including these search paramaters which may be chained:  `practitioner.identifier`, `practitioner.name`
<hr />
1. `GET [base]/PractitionerRole?qualification-code=[code]`

      *Support:* SHOULD support search by the [`qualification-code`](SearchParameter-practitionerrole-qualification-code.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/PractitionerRole?qualification-issuer=[id]`

      *Support:* MAY support search by the [`qualification-issuer`](SearchParameter-practitionerrole-qualification-issuer.html) parameter
   - with a target type:  `Organization`
   - including the modifiers:  `below`  
   - including these search paramaters which may be chained:  `qualification-issuer.identifier`, `qualification-issuer.name`
<hr />
1. `GET [base]/PractitionerRole?qualification-status=[code]`

      *Support:* SHOULD support search by the [`qualification-status`](SearchParameter-practitionerrole-qualification-status.html) parameter     
<hr />
1. `GET [base]/PractitionerRole?qualification-wherevalid-code=[code]`

      *Support:* SHOULD support search by the [`qualification-wherevalid-code`](SearchParameter-practitionerrole-qualification-wherevalid-code.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/PractitionerRole?qualification-wherevalid-location=[id]`

      *Support:* SHOULD support search by the [`qualification-wherevalid-location`](SearchParameter-practitionerrole-qualification-wherevalid-location.html) parameter
   - with a target type:  `Location`
   - including the modifiers:  `above`, `below`  
   - including these search paramaters which may be chained:  `qualification-wherevalid-location.identifier`, `qualification-wherevalid-location.address`, `qualification-wherevalid-location.organization`
<hr />
1. `GET [base]/PractitionerRole?role=[code]`

      *Support:* SHALL support search by the [`role`](SearchParameter-practitionerrole-role.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/PractitionerRole?service=[id]`

      *Support:* SHOULD support search by the [`service`](SearchParameter-practitionerrole-service.html) parameter
   - with a target type:  `HealthcareService`   
   - including these search paramaters which may be chained:  `service.identifier`, `service.service-category`, `service.organization`, `service.location`
<hr />
1. `GET [base]/PractitionerRole?specialty=[code]`

      *Support:* SHOULD support search by the [`specialty`](SearchParameter-practitionerrole-specialty.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/PractitionerRole?via-intermediary=[id]`

      *Support:* MAY support search by the [`via-intermediary`](SearchParameter-practitionerrole-via-intermediary.html) parameter
   - with a target type:  `PractitionerRole`, `Organization`, `OrganizationAffiliation`, `Location`    
<hr />


---

// File: input/intro-notes/StructureDefinition-vhdir-practitionerrole-summary.md

#### Complete Summary of the Mandatory Requirements

1.  A boolean value in `practitionerRole.active`
1.  At least one value describing the role the practitioner performs in `practitionerRole.code`

---

// File: input/intro-notes/StructureDefinition-vhdir-restriction-intro.md

This profile sets minimum expectations for searching for and fetching information associated with a restriction. It identifies which core elements, extensions, vocabularies and value sets **SHALL** be present in the Consent resource when using this profile.

## Background and Context ##

The FHIR specification contains a security meta tag which can be used to inform systems of the sensitivity of resources. The tag can be used by access control mechanisms to ensure content isn't exposed inappropriately. However, the security meta tag can only indicate sensitivity at the resource level, and provides relatively little context about the restriction.

This implementation guide profiles the Consent resource to provide additional details about the nature of restrictions on content passed from the validated healthcare directory to downstream workflow environments. 



The restriction profile consists of the following elements:

*  `consent.status` indicates whether the restriction is active
*  `consent.category` describes the type of restriction (e.g. the data may be further disclosed by the downstream workflow environment per the terms of a Data Use Agreement)
*  `consent.dateTime` indicates when the restriction was last updated
*  `consent.policy` references a policy or policies defining the restriction
*  `consent.provision` defines access rights for restricted content


**Examples:**

The following are example uses for the vhdir-restriction profile:

-  [Restricted address for a women's shelter](Location-loc-ws.html)
-  [Restricted contact details for services provided by a women's shelter](HealthcareService-hcs-ws.html)


**Mandatory Data Elements**

The following data-elements are mandatory (i.e data MUST be present). These are presented below in a simple human-readable explanation. The [**Formal Profile Definition**](#profile) below provides the  formal summary, definitions, and  terminology requirements.  

Each Consent resource must have:

1.  A coded value representing the status of the restriction in `consent.status`
1.  At least one coded and/or text value describing the type of restriction in `consent.category`
1.  At least one `actor` when describing access rights via `consent.provision`. Each actor must include a `reference` to a practitioner, organization, care team, or group. The `role` of each actor is fixed to code "IRCP" (information recipient) from the code system defined at <http://hl7.org/fhir/v3/ParticipationType>


**Profile specific implementation guidance:**

This resource is expected to be a [contained resource](https://www.hl7.org/fhir/references.html#contained) in the resources whose content is restricted by it. Therefore, there are no restful interactions defined for this resource type.


**Terminology**

TBD

---

// File: input/intro-notes/StructureDefinition-vhdir-restriction-notes.md

Because this resource is expected to be a [contained resource](https://www.hl7.org/fhir/references.html#contained) in the resources whose content is restricted, there are no RESTful interactions defined for this profile.

---

// File: input/intro-notes/StructureDefinition-vhdir-restriction-summary.md

####  Summary of the Mandatory Requirements and Key properties

1.  A coded value representing the status of the restriction in `consent.status`
1.  At least one coded and/or text value describing the type of restriction in `consent.category`
1.  At least one `actor` when describing access rights via `consent.provision`. Each actor must include a `reference` to a practitioner, organization, care team, or group. The `role` of each actor is fixed to code "IRCP" (information recipient) from the code system defined at <http://hl7.org/fhir/v3/ParticipationType>


---

// File: input/intro-notes/StructureDefinition-vhdir-validation-intro.md

This profile sets minimum expectations for searching for and fetching information associated with validation. It identifies which core elements, extensions, vocabularies and value sets **SHALL** be present in the VerificationResult resource when using this profile.

**Background & Scope**

This implementation guide was developed to support the need for validated provider data in many different healthcare workflows. It profiles the verificationResult resource to convey information about the validation status of any data in a validated healthcare directory, including how it was validated, who validated it, and where the data came from.

This profile modifies the base VerificationResult resource in the following manner:

*  Constrains the cardinality of `VerificationResult.target` (1..*), `verificationResult.need` (1..1), `verificationResult.statusDate` (1..1), `verificationResult.validationType` (1..1), `verificationResult.validationProcess` (1..*), `verificationResult.failureAction` (1..1), `verificationResult.primarySource.type` (1..*), `verificationResult.attestation.communicatonMethod` (1..1), `verificationResult.attestation.date` (1..1)

*  All references SHALL conform to the appropriate Validated Healthcare Directory Implementation Guide profile


**Examples:**

The following are example uses for the vhdir-validation profile:

-  [Validation of a practitioner's medical license](VerificationResult-example-license.html)


**Mandatory Data Elements**

The following data-elements are mandatory (i.e data MUST be present). These are presented below in a simple human-readable explanation. The [**Formal Profile Definition**](#profile) below provides the  formal summary, definitions, and  terminology requirements.  

Each VerificationResult resource must have:
1.  At least one target in `verificationResult.target`
1.  A coded representation of how often the target is validated in `verificationResult.need`
1.  A coded representation of the target's current validation status in `verificationResult.status`
1.  A date/time when the target's validation status was last updated in `verificationResult.statusDate`
1.  A coded representation of whether the target is validated against a primary source(s) in `verificationResult.validationType`
1.  At least one coded/text representation of the process by which the target was validated in `verificationResult.validationProcess`
1.  A coded representation of what happens if validation of the target fails in `verificationResult.failureAction`
1.  For each primary source described:
    1.  At least one coded/text representation of the type of primary source in `verificationResult.primarySource.type`
1.  Information about the source of the attested information in `VerificationResult.attestation`, including a reference to a Practitioner, PractitionerRole, or Organization resource representing the source of the information in `VerificationResult.attestation.who`
1.  For each validator described:
    1.  One reference to the Organization resource for the validator in `verificationResult.validator.organization`


**Profile specific implementation guidance:**

The core of the verificationResult resource includes basic information about how data was validated:

*  `verificationResult.target` and `verificationResult.targetLocation` provide a means to describe the specific data that has been validated. The target is a reference to any resource, and the targetLocation is a FHIRpath expression indicating which specific element(s) in that resource have been validated.
*  `verificationResult.need` and `verificationResult.frequency` describe when the target should be validated, and how often it must be revalidated
*  `verificationResult.status` describes the current status of validation for the target. `verificationResult.statusDate` indicates when the validation status was last updated.
*  `verificationResult.validationType` describes what the target is validated against (i.e. whether it is validated against a single primary source, whether it is validated against multiple sources, or whether it wasn't validated because attested information is sufficient)
*  `verificationResult.validationProcess` describes the validation processes for validating the target
*  `verificationResult.lastPerformed` and `verificationResult.nextScheduled` describe the last completed and next scheduled dates of validation for the target
*  `verificationResult.failureAction` describes what happens if validation of the target fails

The resource also provides information about entities involved in the validation process:

`verificationResult.primarySource` provides information about the primary source(s) the target was validated against
*  `who` identifies the primary source, and `type` indicates what the primary source is
*  `communicationMethod` indicates how an entity can communicate with the primary source
*  `validationStatus`, and `validationDate` describe the status of the validation of the target against the primary source
*  `canPushUpdates` and `pushTypeAvailable` indicate whether a primary source can push updates or alerts (e.g. alerting the validated healthcare directory if a license board suspends a practitioner's license)

`verificationResult.attestation` provides information about who attested to the information being validated
*  `who` identifies the source of the attested information (a practitioner, practitionerRole, or organization), `onBehalfOf` identifies an entity the "who" is attesting on behalf of.
*  `communicationMethod` indicates how attested information is submitted/retrieved
*  `date` indicates when the information was attested to
*  `sourceIdentityCertificate` and `proxyIdentityCertificate` assert the identity of the individual attesting to information and any proxy providing attested information on their behalf. 
*  `sourceSignature` and `proxySignature` assert that information was attested to/provided by the entity with the right to do so.
`verificationResult.validator` provides information about the entity performing the validation of the target
*  `organization` identifies the validating organization, and `identityCertificate` asserts their identity
*  `attestationSignature` asserts that the validator has validated the target



---

// File: input/intro-notes/StructureDefinition-vhdir-validation-notes.md

#### Supported Searches

1. `GET [base]/VerificationResult?attestation-who=[id]`

      *Support:* SHALL support search by the [`attestation-who`](SearchParameter-verificationresult-attestation-who.html) parameter
   - with a target type:  `Practitioner`, `Organization`, `PractitionerRole`
   - including the modifiers:  `type`
   - including these search paramaters which may be chained:  `attestation-who.identifier`, `attestation-who.address`, `attestation-who.name`, `attestation-who.partof`, `attestation-who.location`, `attestation-who.organization`, `attestation-who.practitioner`
<hr />
1. `GET [base]/VerificationResult?attestation-method=[code]`

      *Support:* SHOULD support search by the [`attestation-method`](SearchParameter-verificationresult-attestation-method.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/VerificationResult?attestation-onbehalfof=[id]`

      *Support:* SHALL support search by the [`attestation-onbehalfof`](SearchParameter-verificationresult-attestation-onbehalfof.html) parameter
   - with a target type:  `Practitioner`, `Organization`, `PractitionerRole`
   - including the modifiers:  `type`
   - including these search paramaters which may be chained:  `attestation-onbehalfof.identifier`, `attestation-onbehalfof.address`, `attestation-onbehalfof.name`, `attestation-onbehalfof.partof`, `attestation-onbehalfof.location`, `attestation-onbehalfof.organization`, `attestation-onbehalfof.practitioner`
<hr />
1. `GET [base]/VerificationResult?primarysource-date=[dateTime]`

      *Support:* SHOULD support search by the [`primarysource-date`](SearchParameter-verificationresult-primarysource-date.html) parameter   
   - including the comparators:  `eq`, `gt`, `lt`, `ge`, `le`, `sa`, `eb`  
<hr />
1. `GET [base]/VerificationResult?primarysource-who=[id]`

      *Support:* SHALL support search by the [`primarysource-who`](SearchParameter-verificationresult-primarysource-who.html) parameter
   - with a target type:  `Practitioner`, `Organization`, `PractitionerRole`
   - including the modifiers:  `type`
   - including these search paramaters which may be chained:  `primarysource-who.identifier`, `primarysource-who.address`, `primarysource-who.name`, `primarysource-who.partof`, `primarysource-who.location`, `primarysource-who.organization`, `primarysource-who.practitioner`
<hr />
1. `GET [base]/VerificationResult?primarysource-type=[code]`

      *Support:* SHOULD support search by the [`primarysource-type`](SearchParameter-verificationresult-primarysource-type.html) parameter  
   - including the modifiers:  `text`   
<hr />
1. `GET [base]/VerificationResult?status-date=[dateTime]`

      *Support:* SHOULD support search by the [`status-date`](SearchParameter-verificationresult-status-date.html) parameter   
   - including the comparators:  `eq`, `gt`, `lt`, `ge`, `le`, `sa`, `eb`  
<hr />
1. `GET [base]/VerificationResult?target=[id]`

      *Support:* SHALL support search by the [`target`](SearchParameter-verificationresult-target.html) parameter
   - with a target type:  `Any`
   - including the modifier: `type`
<hr />
1. `GET [base]/VerificationResult?status=[code]`

      *Support:* SHALL support search by the [`validation-status`](SearchParameter-verificationresult-validation-status.html) parameter     
<hr />
1. `GET [base]/VerificationResult?validator-organization=[id]`

      *Support:* SHALL support search by the [`validator-organization`](SearchParameter-verificationresult-validator-organization.html) parameter
   - with a target type:  `Organization`
   - including the modifiers:  `above`, `below`  
   - including these search paramaters which may be chained:  `validator-organization.identifier`, `validator-organization.name`
<hr />


---

// File: input/intro-notes/StructureDefinition-vhdir-validation-summary.md

#### Complete Summary of the Mandatory Requirements

1.  At least one target in `verificationResult.target`
1.  A coded representation of how often the target is validated in `verificationResult.need`
1.  A coded representation of the target's current validation status in `verificationResult.status`
1.  A date/time when the target's validation status was last updated in `verificationResult.statusDate`
1.  A coded representation of whether the target is validated against a primary source(s) in `verificationResult.validationType`
1.  At least one coded/text representation of the process by which the target was validated in `verificationResult.validationProcess`
1.  A coded representation of what happens if validation of the target fails in `verificationResult.failureAction`
1.  For each primary source described:
    1.  At least one coded/text representation of the type of primary source in `verificationResult.primarySource.type`
1.  Information about the source of the attested information in `VerificationResult.attestation`, including a reference to a Practitioner or Organization resource representing the source of the information in `VerificationResult.attestation.source`
1.  For each validator described:
    1.  One reference to the Organization resource for the validator in `verificationResult.validator.organization`


---

// File: input/pages/bulk-data.md

<!-- ---
title: Bulk Data and Subscriptions
layout: default
active: bulk-data
topofpage: true
sectionnumbering: true
F: http://build.fhir.org/

--- -->

<p class="note-to-balloters">
<b>Informative only:</b> was not a part of the September 2018 ballotted content.<br/>
It will be updated based on the Bulk Data ballot outcome, and further implementation experience.
</p>
<br/>

## Background


Bulk data is a recent addition to the FHIR related specifications and has many uses. Primarily its for out of band data extraction for distribution.

There are several basic parts to FHIR's bulk data extract

* The scope of data selection
* The format of the bulk data extract (nd-json) *
* The async operation request and status tracking (as these processes may take significant processing time) *
* Retrieval of the completed export
* Closing/cleanup of the completed export *

<em>(The items marked with * can be considered quite mature, and unlikely to change from this point)</em>

The bulk data had been balloted and was still being reconciled and at the time of publication of this guide, the current development version can be found here:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[http://hl7.org/fhir/us/bulkdata/2019May/index.html](http://hl7.org/fhir/us/bulkdata/2019May/index.html)

The community discussions and questions around this draft specification are here:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[https://chat.fhir.org/#narrow/stream/179250-bulk-data](https://chat.fhir.org/#narrow/stream/179250-bulk-data)

## Healthcare Directory Bulk Data Specifics
### The scope of the data selection

For the directory bulk data extraction, to request an entire copy of all content in the directory, the scope selection can be defined at the top level, and just specifying that we would like to retrieve all content for the specified resource types from the base of the FHIR server.
```
GET [base]/$export?_type=Organization,Location,Practitioner,PractitionerRole,HealthcareService,VerificationResult, ...
```

A healthcare directory may curate such an extract on a nightly process, and just return this without needing to scan the live system, and the value returned in the <code>transactionTime</code> in the result should contain the timestamp at which this was generated (including timezone information), and that should be used in a subsequent call to retrieve changes since this point in time.

Once a system has a complete set of data, it is usually more efficient to ask for changes since a point in time, in which case the request should use the value above (<code>transactionTime</code>) to update the local directory.

```
GET [base]/$export?_type=Organization,Location,Practitioner, ... &_since=[transactionTime]
```

This behaves just the same as the initial request, with the exception of the content.

We would expect that this is more likely to return the current information, rather than from a pre-generated snapshot, as the transactionTime could be anything.

> <strong>Note:</strong> The current bulk data handling specification does not handle deleted items, and the recommendation is that periodically a complete download should be done to check for "gaps" to reconcile the deletions (which could also be due to security changes), however content shouldn't usually be "deleted" it should be marked as inactive, or end dated.
>
><strong>Proposal:</strong> Include deletions bundle(s) for each resource type to report the deletions (when using the _since parameter) which would be in a new property "deletions" in the process output, as demonstrated in the status tracking output section below. This bundle would have a type of "collection", and each entry would be as per a deleted item in a history.

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

> The total in the bundle will just be the count of deletions in the file, the total in the operation result will indicate the number of deletion bundles in the ndjson (same as the other types).
>
> If the caller doesn't want to use the deletions, they can just ignore the files in the output, and not download those specific files.


### List defined subsets

The previous sections are all that is defined by the FHIR Bulk Data extract specification, however we may choose to implement an additional parameter to this operation to permit the selection to also filter to resources that are included in a specified list resource. The approach is similar to the same capability defined by FHIR [http://hl7.org/fhir/search.html#list](http://hl7.org/fhir/search.html#list)

This could be used by client applications such as a Primary Care System that wanted to only periodically update using this technique, but only with resources that they currently have loaded in their "local directory" - internal black book, which were cached there from previous searches to the system.

```
GET [base]/$export?_type=Organization,Location,Practitioner,PractitionerRole,HealthcareService&_list=List/45
```

In this example the Primary Care System would be responsible for keeping <code>List/45</code> up to date with what it is tracking, and a national service may decide that permitting this List resource management is too much overhead, however local enterprise directories may support this type of functionality.

### Arbitrary subsets of data

The current bulk data export operations use the Group resource to define the set of data related to a Patient, and at present there is no definition for this to be done in the directory space, apart from at the resource type level. This is possible with search and subscriptions (which leverage search) by using search parameters on the resource types and setting the parameters of interest.

When defining a subset of data, consideration should be given to what happens when data is changed such that it no longer is within the context of the conditions.

One possibility would be to use a bundle of searches where each type has it's own search parameters, another is to use a <a href="http://hl7.org/fhir/r4/graphdefinition.html" class="external-link" rel="nofollow">GraphDefinition</a> resource.

This functionality should be the subject of a connectathon to determine practical solutions.

One possibility could be to leverage the List functionality described above to maintain a state of what <em>was</em> included in a previous content, however this obviously incurs additional overhead on the part of the server, and for many systems - especially those at scale like a national system - this is likely not practical.

### Format of the bulk data extract

The bulk extract format is always an nd-json file (new-line delimited json), and each file can only contain 1 resource type in it, but can be spread across multiple files, with either a size limit or count limit imposed by the extracting system, not the requestor.

The list of these files will be returned in the Complete status output, as described in the standard Bulk Data documentation.

### Starting the extract

There are 2 options for starting the extract, one that is a single operation specifying all the content, and the other to be for a specific type only. These were both covered in the selecting the scope section above.

Here I will only document the use of the global export, as an initial request.

The initial request:

```
GET [base]/$export?_type=Organization,Location,Practitioner,PractitionerRole,HealthcareService
```
with headers:
```
Accept: application/fhir+json</code>
Authentication: Bearer [bearer token]</code>
Prefer: respond-async</code>
```

This will return either:
* HTTP status code of <code>4XX</code> or <code>5XX</code> with an <code>OperationOutcome</code> resource body if the request fails,
* HTTP status code of <code>202 Accepted</code> when successful, with a <code>Content-Location</code> header with an absolute URI for subsequent status requests, and optionally an <code>OperationOutcome</code> in the resource body if desired

Example Content-Location: <a class="external-link" style="text-decoration: underline;text-align: left;" rel="nofollow" href="http://example.org/status-tracking/request-123">http://example.org/status-tracking/request-123</a> (note that this is not necessarily a FHIR endpoint, and isn't a true FHIR resource)

### Tracking the status of the extract

After a bulk data request has been started, the client MAY poll the URI provided in the <code>Content-Location</code> header.

```
GET http://example.org/status-tracking/request-123
```

This will return:

* HTTP status code of <code>202 Accepted</code> when still in progress (and no body returned)

* HTTP status code of <code>5XX</code> when a fatal error occurs, and an <code>OperationOutcome</code> in json format for the body with the detail of the error
_(Note this is a fatal error in processing, not some error encountered while processing files - a complete extract can contain errors)_
* HTTP status code of <code>200 OK</code> when the processing is complete, and the result is a json object as noted in the specification (and an example included below)

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

### Retrieving the complete extract

Once the tracking of the extract returns a <code>200 OK</code> completed status, the body of the result will include the list of prepared files that you can download.

Then each of these URLs can be downloaded by a simple get, ensuring to pass the Bearer token if the result indicates <code>requiresAccessToken = true</code>

While downloading, also recommend including the header <code>Accept-Encoding: gzip</code> to compress the content as it comes down.

```
GET http://serverpath2/location_file_1.ndjson
```

(Note: our implementation will probably always gzip encode the content - as we are likely to store the processing files gzip encoded to save space in the storage system)

Once you have downloaded all the files you need, you should tell the server to cleanup, which is detailed next.

### Finishing the extract

This is the simplest part of the process, and that is just calling <code>DELETE</code> on the status tracking URL.

```
DELETE http://example.org/status-tracking/request-123
```

This then tells the server that we are all finished with the data, and it can be deleted/cleaned up. The server may also include some time based limits where it may only keep it for a set period of time before it automatically cleans it up.


## Subscriptions
A close relative to the bulk data extract is the subscriptions content - and how these will work in the context of Bulk Directory exchanges needs further experimentation and connectathon experiences.

These could be setup to monitor the directory for realtime changes to resources of interest, and are defined through the use of search parameters.

The "urgent notifications" channel is yet to be defined, but should enable specific actions such as license suspensions/revocations.


~~~json
   ...TODO edit this ...
~~~

The FHIR Subscription API allows directories to (push) data to multiple local directories based on a set of criteria in the form of a FHIR query which defined by the subscriber.  For example:

-  All the updated data for a particular jurisdiction or region
-  All the providers whose certification has been revoked or is expired or about to expire.

Any newly created or updated resources that meet the criteria triggers the  Server to notify the subscriber and "forward" the results of the search criteria (e.g., the updated Practitioner, PractitionerRole and Endpoint resource - to a specified target endpoint).  Note that an alternate workflow is a Server notification without a payload and then the subscriber would fetch the data through the REST API from a predetermined endpoint - typically a "middleman" server.

Below is an example subscription to push all new and updated Practitioners, PractiyionerRoles, and  Endpoints from the 'vhdir-demo' server to the 'local-dir':

~~~json
{
   "resourceType":"Bundle",
   "id":"VhDir-subscription-bundle",
   "meta":{
      "lastUpdated":"2017-01-24T01:43:30Z"
   },
   "type":"transaction",
   "entry":[
      {
         "fullUrl":"urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a",
         "resource":{
            "resourceType":"Subscription",
            "id":"vhdir-connectathon-scenario-12p",
            "status":"requested",
            "contact":[
               {
                  "system":"phone",
                  "value":"ext 4123"
               }
            ],
            "end":"2020-01-01T00:00:00Z",
            "reason":"(push) healthcare directory data to multiple local directories",
            "criteria":"Practitioner?address-postalcode:contains=02108, 02109, 02110, 02111, 02113, 02114, 02115, 02116, 02118, 02119, 02120, 02121, 02122, 02124, 02125, 02126, 02127, 02128, 02129, 02130, 02131, 02132, 02134, 02135, 02136, 02151, 02152, 02163, 02199, 02203, 02210, 02215, 02467",
            "channel":{
               "type":"rest-hook",
               "endpoint":"https://local-dir/fhir",
               "payload":"application/fhir+json",
               "header":[
                  "Authorization: Bearer secret-token-abc-123"
               ]
            }
         },
         "request":{
            "method":"POST",
            "url":"Subscription"
         }
      },
      {
         "fullUrl":"urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a",
         "resource":{
            "resourceType":"Subscription",
            "id":"vhdir-connectathon-scenario-12pr",
            "status":"requested",
            "contact":[
               {
                  "system":"phone",
                  "value":"ext 4123"
               }
            ],
            "end":"2020-01-01T00:00:00Z",
            "reason":"(push) healthcare directory data to multiple local directories",
            "criteria":"PractitionerRole?practitioner.address-postalcode:contains=02108, 02109, 02110, 02111, 02113, 02114, 02115, 02116, 02118, 02119, 02120, 02121, 02122, 02124, 02125, 02126, 02127, 02128, 02129, 02130, 02131, 02132, 02134, 02135, 02136, 02151, 02152, 02163, 02199, 02203, 02210, 02215, 02467",
            "channel":{
               "type":"rest-hook",
               "endpoint":"https://local-dir/fhir",
               "payload":"application/fhir+json",
               "header":[
                  "Authorization: Bearer secret-token-abc-123"
               ]
            }
         },
         "request":{
            "method":"POST",
            "url":"Subscription"
         }
      },
      {
         "fullUrl":"urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a",
         "resource":{
            "resourceType":"Subscription",
            "id":"vhdir-connectathon-scenario-12pe",
            "status":"requested",
            "contact":[
               {
                  "system":"phone",
                  "value":"ext 4123"
               }
            ],
            "end":"2020-01-01T00:00:00Z",
            "reason":"(push) healthcare directory data to multiple local directories",
            "criteria":"Endpoint?_has:PractitionerRole:endpoint:practitioner.address-postalcode:contains=02108, 02109, 02110, 02111, 02113, 02114, 02115, 02116, 02118, 02119, 02120, 02121, 02122, 02124, 02125, 02126, 02127, 02128, 02129, 02130, 02131, 02132, 02134, 02135, 02136, 02151, 02152, 02163, 02199, 02203, 02210, 02215, 02467",
            "channel":{
               "type":"rest-hook",
               "endpoint":"https://local-dir/fhir",
               "payload":"application/fhir+json",
               "header":[
                  "Authorization: Bearer secret-token-abc-123"
               ]
            }
         },
         "request":{
            "method":"POST",
            "url":"Subscription"
         }
      }
   ]
}
~~~


---

// File: input/pages/change-notes.md

<!-- ---
title: Change Notes
layout: default
active: change notes
topofpage: true
sectionnumbering: true
F: http://build.fhir.org/
--- -->

The Validated Healthcare Directory Implementation guide was developed under the [ONC Healthcare Directory Initiative (HcDir)](https://oncprojectracking.healthit.gov/wiki/display/TechLabSC/Healthcare+Directory). HcDir was a US initiative sponsored by the Office of the National Coordinator (ONC) and Federal Health Architecture (FHA) which aimed to create FHIR profiles for access to a national validated dataset of healthcare directory data.

This implementation guide was was initially developed under FHIR Release 3 (STU) and ported into FHIR Release 4 (STU), and considered the Provider Directory resources created under [The Argonaut Project](http://argonautwiki.hl7.org/index.php?title=Main_Page).

Changes Since the January 2018 for comment ballot:

* Inclusion of many guidance pages
* Refinement of profiles based on ballot feedback
* Alignment with R4 core updates
  * OrganizationRole -> OrganizationAffiliation
  * ProductPlan -> InsurancePlan
  * Location boundaries using R4 standard extension
* Inclusion of many missing valuesets
* Completion of unfinished definitions

A future iteration of this guide will align with the US Core R4 build, and provide tight bindings for US usage, along with the current international profile bindings.


---

// File: input/pages/downloads.md

<!-- ---
title: Downloads
layout: default
active: downloads
--- -->

### Package File

The following package file includes an NPM package file used by many of the FHIR tools.  It contains all the value sets, profiles, extensions, list of pages and urls in the IG, etc defined as part of the this version of the Implementation Guides. This file should be the first choice whenever generating any implementation artifacts since it contains all of the rules about what makes the profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply in order to make a conformant implementation. See the overview on validating [FHIR profiles and resources]({{site.data.fhir.path}}validation.html):

- [Package](package.tgz){::download="true"}

### Schematrons

Schematrons are also available for download and listed below:

<!-- ================================================ -->
<!--  use this line to include an autogenerated list of all examples from the remove it if you would like to hand generate it -->

{% include schematron-list-generator.md %}
<!-- ================================================ -->

### Examples

all the examples that are used in this Implementation Guide available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)

### Downloadable Copy of Entire Specification

A downloadable version of this IG is available so it can be hosted locally:

- [Downloadable Copy](full-ig.zip)


---

// File: input/pages/general-guidance.md

<!-- ---
title: General Guidance and Background Information
layout: default
active: guidance
topofpage: true
sectionnumbering: true
F: http://build.fhir.org/
--- -->

##  Background

Healthcare directories play a critical role in enabling identification of individual providers and provider organizations, as well as characteristics about them, their relationships, and the means by which to access and exchange health information among them electronically. Healthcare directories support a variety of use cases, including:

* Electronic endpoint discovery
* Referrals and transitions of care
* Health plan enrollment
* Provider selection
* Provider credentialing/privileging

Today, many healthcare organizations maintain directories, including providers, payers, health information exchange organizations (HIEs/HIOs), health information service providers (HISPs), government agencies, and credentialing organizations. However, despite their importance, healthcare directory activities remain scattered, uncoordinated, and are often not interoperable. As a result, the healthcare industry collectively spends significant time and resources registering and validating demographic information for individual and organizational providers for purposes such as licensure, credentialing, certification, and payment.

Providers often have to submit and manage information about themselves and their places of employment to a variety of stakeholders. In the US, providers often contract with ten or more health plans, and are required to regularly submit similar information to each plan for inclusion in a provider directory. Likewise, provider credentialing and hospital privileging processes require similar documentation. The Council for Affordable Quality Healthcare [has estimated](https://www.caqh.org/explorations/white-paper-defining-provider-data-dilemma) that maintaining provider databases costs the US healthcare industry at least $2 billion annually.

Due to the high cost of acquiring and maintaining provider information and keeping it current, existing healthcare directories often contain information that is inaccurate, out of date, or not validated.

## Healthcare Directory vs. Provider Directory

This implementation guide uses the term ‘healthcare directory’ instead of ‘provider directory’ because it encompasses all individuals and entities that provide services which may impact an individual’s health and well-being. We did not limit the definition of a directory to include only those individuals/entities that are licensed to practice medicine and/or bill for healthcare services. Rather, a validated healthcare directory may include data about community/social service entities and non-licensed administrative/support staff, among others.

Patient/caregiver information, however, is considered out of scope for a VHDir.

## ONC/FHA Healthcare Directory Effort

On April 5th and 6th, 2016, the Office of the National Coordinator for Health Information Technology (ONC) and the Federal Health Architecture (FHA) jointly hosted a Provider Directory Workshop to convene public and private stakeholders to review challenges, share successes, and generate new ideas around provider directory standards and solutions. Although participants described different use cases for healthcare directories, they agreed that provider data quality is a persistent challenge across the industry.

To address concerns about data quality, reduce administrative burden, and improve consumer satisfaction, ONC and FHA launched a new healthcare directory effort in July 2016. The project sought to: (1) define the architecture of a central source of validated healthcare directory data, and (2) develop a Fast Healthcare Interoperability Resources (FHIR) Implementation Guide describing the exchange of information between a central source of validated healthcare directory data and local environments (e.g. provider organizations, payers, HIEs).

Such a central source would include a broad set of provider data to support a variety of healthcare directory use cases. Data would be validated against primary sources (e.g. state licensing boards for licensure information) and available to local environments through a national FHIR-based exchange standard. Instead of submitting the same information to each payer and provider organization they worked with, providers would only have to attest to the majority of their information to the central source.

For more information on the ONC and FHA effort see the [ONC Techlab Healthcare Directory Project](https://oncprojectracking.healthit.gov/wiki/display/TechLabSC/Healthcare+Directory)

## Relation to US Core and other IGs

This implementation guide was written for an international audience. We expect different jurisdictions considering implementing a VHDir will design their implementations in accordance with jurisdictional requirements, such as national profiles/IGs. In the United States, for example, we expect a VHDir would align with an R4 version of the US Core IG once it becomes available.

## The Validated Healthcare Directory Data Model

To determine which resources to profile, extensions to create, etc. we reviewed a number of use cases supported by healthcare directories today:

* Basic Information Exchange
  * A1. Enable electronic exchange (e.g. discovery of electronic endpoints such as IHE/EHR endpoints, FHIR server URLs, Direct addresses) - enables the electronic exchange of health information by supporting the ability to discover electronic service information including electronic endpoints or electronic addresses
  * A2. Find an individual and/or organization (even if no electronic endpoint is available) - enables users to find  contact and other identifying information about healthcare organizations and individual healthcare providers
* Patient/Payer focused
  * B1. Find provider accessibility information (specialty, office hours, languages spoken, taking patients) - enables individuals and consumers to find contact and other accessibility information for individual healthcare providers and/or healthcare organizations
  * B2. Relationship between provider and insurance plan (insurance accepted) or plan and provider (network) - enables individual healthcare providers, organizations, and payers to discover the relationships between providers, organizations, and payers, as well as additional details about the relationships and entities involved
  * B3. Plan selection and enrollment - enables individuals and consumers to find information about health plans for the purposes of enrollment, including information about the  health care providers and organizations that participate in a particular payer network, plan, or product and other information that can help the consumer make an informed choice about choosing the plan that best meets their health care needs
  * B4. Claims management (adjudication, prior authorization, payment) - enables entities to discover information about providers to support claims processing, adjudication, prior authorization, and other reimbursement/payment related activities
* Care Delivery / Value Based Care
  * C1. Provider relationship with a patient (e.g. for alerts) - supports discovery of provider-patient relationships to enable cross-organization workflows and processes for care coordination
  * C2. Provider relationship with other providers in context of a patient (e.g. care team communications) - enables individual providers/organizations/care team members to identify each other, communicate and exchange information, expand the care team (e.g. referrals), and coordinate care within and across organizational boundaries
* Other
  * D1. Provider credentialing -  supports the process of establishing and evaluating the qualifications of a health care provider by verifying the provider’s experience, expertise, interests, and willingness to provide medical care
  * D2. Quality or regulatory reporting (e.g. aggregate data, plan networks) - enables providers and health plans to consolidate and standardize the electronic exchange of quality-related data and performance results in addition to helping providers use their own information consistently to "report once"
  * D3. Detection of fraud; inappropriate approval of services and/or payment for services - enables discovery of provider information for evaluating or responding to suspected cases of fraud or improper approval/payment for healthcare services

For each use case, we described the general information requirements necessary to support the use case. We then specified the general information requirements as discrete data elements using FHIR resources. Therefore, this implementation guide covers a broad set of data elements supporting a range of use cases that may reasonably be collected, validated, and exchanged from a central source of validated provider data.

## Overview of Validated Healthcare Directory - Resource Relationships

Note: the following diagrams provide a high-level view of the relationships between resources used in this IG. They do not necessarily reflect all of the relationships/references between resources.

### Practitioner

A practitioner is a person who is directly or indirectly involved in the provisioning of healthcare.

### Practitioner Role

PractionerRole describes the relationship between a practitioner and an organization. A practitioner provides services to the organization at a location.  Practitioners also participate in healthcare provider insurance networks through their role at an organization.

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 1: PractionerRole </strong></figcaption>
  <img src="diagram1.jpg" class="figure-img img-responsive img-rounded center-block" alt="Diagram1.jpg" />
</figure>

### Organization Affiliation

Similar to PractitionerRole, OrganizationAffiliation describes relationships between organizations. For example: 1) the relationship between an organization and an association it is a member of (e.g. hospitals in a hospital association),  2) an organization that provides services to another organization, such as an organization contracted to provide mental health care for another organization as part of a healthcare provider insurance network, and 3) distinct organizations forming a partnership to provide services (e.g. a cancer center).

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 2: OrganizationAffiliation </strong></figcaption>
  <img src="diagram2.jpg" class="figure-img img-responsive img-rounded center-block" alt="Diagram2.jpg" />
</figure>

### Network / Insurance Plan

A network is a group of practitioners and organizations that provide healthcare services for individuals enrolled in a health insurance product/plan (typically on behalf of a payer).

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 3: Network / Insurance Plan </strong></figcaption>
  <img src="diagram3.jpg" class="figure-img img-responsive img-rounded center-block" alt="Diagram3.jpg" />
</figure>


------------------------------------------------------------------------


---

// File: input/pages/guidance.md

<!-- ---
title: Guidance
layout: default
active: guidance
topofpage: true
--- -->

- [General Guidance](general-guidance.html)
- [Technical Guidance](technical-guidance.html)
- [Bulk Data and Subscriptions](bulk-data.html)


---

// File: input/pages/index.md

<!-- ---
title: Validated Healthcare Directory Implementation Guide HomePage
layout: default
active: home
topofpage: true
sectionnumbering: true
F: http://build.fhir.org/
--- -->

### Introduction

The Validated Healthcare Directory Implementation Guide (VHDir IG) is based on [FHIR Version 4.0](http://build.fhir.org/). It was developed in cooperation with the [Office of the National Coordinator for Health Information Technology (ONC)](http://www.healthit.gov/newsroom/about-onc) and [Federal Health Architecture (FHA)](https://www.healthit.gov/policy-researchers-implementers/federal-health-architecture-fha) with guidance from HL7 International, the Patient Administration Workgroup, and the HL7 US Realm Steering Committee.

It describes the architectural considerations for attesting to, validating, and exchanging data from a central source of validated provider data (i.e. a Validated Healthcare Directory or VHDir), as well as a RESTful FHIR API for accessing data from a VHDir.

Although we developed this guide from the conceptual starting point of a national source of validated provider data, we recognize that implementers may have different business needs, contexts, or use cases. Therefore, we have strived to make this guide as broadly applicable as possible. Every implementation may not use all of the content in this guide. It serves as a “floor” for the exchange of validated provider data, while describing additional data elements and capabilities that support more robust implementations.

Likewise, we provide general guidance about the technical architecture and capabilities of a central source of validated provider data, but are not prescriptive about what an implementation must include.  

For more information on the history of Validated Healthcare Directory see the [Validated Healthcare Directory change notes](change-notes.html).

----

Primary Authors: Dan Chaput, Alex Kontur, Brian Postlethwaite, Bob Dieterle


### Validated Healthcare Directory Profiles

The list of Validated Healthcare Directory Profiles is shown below.  Each profile defines the minimum mandatory elements, extensions and terminology requirements that **MUST** be present. For each profile, requirements and guidance are given in a simple narrative summary. A formal hierarchical table that presents a [logical view] of the content in both a differential and snapshot view is also provided along with references to appropriate terminologies and examples.  In addition each profile has a "Quick Start" section which is intended as an implementer friendly overview of the required search and read operations.

{% include list-simple-profiles.xhtml %}

#### Globals Profiles

{% include globals-table.xhtml %}

#### Package Dependencies

{% include dependency-table.xhtml %}

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

### Validated Healthcare Directory Conformance Requirements

The [Capability Statements Section](artifacts.html#1) outlines conformance requirements for Validated Healthcare Directory Servers and Client applications, identifying the specific profiles, RESTful operations and search parameters that need to be supported.

Note: The individual Validated Healthcare Directory profiles identify the structural constraints, terminology bindings and invariants, however, implementers must refer to the conformance requirements for details on the RESTful operations, specific profiles and the search parameters applicable to each of the Validated Healthcare Directory actors.



### Intellectual Property Considerations

{% include ip-statements.xhtml %}

[Argonaut]: http://argonautwiki.hl7.org/index.php?title=Main_Page
[Validated Healthcare Directory Security]: US Core-security.html
[Office of the National Coordinator for Health Information Technology (ONC)]: http://www.healthit.gov/newsroom/about-onc
[Data Access Framework]: http://wiki.siframework.org/Data+Access+Framework+Homepage
[profiles]: http://hl7.org/fhir/STU3/profiling.html
[logical view]: http://hl7.org/fhir/STU3/formats.html#table
[StructureDefinitions]: http://hl7.org/fhir/STU3/structuredefinition.html
[Value sets]: http://hl7.org/fhir/STU3/valueset.html
[CodeSystem]: http://hl7.org/fhir/STU3/codesystem.html
[ConceptMap]: http://hl7.org/fhir/STU3/conceptmap.html
[NamingSystem]: http://hl7.org/fhir/STU3/namingsystem.html
[FHIR Conformance Rules]: http://hl7.org/fhir/STU3/CapabilityStatement-rules.html
[dataAbsentReason]: http://hl7.org/fhir/STU3/extension-data-absent-reason.html
[FHIR Terminology]: http://hl7.org/fhir/STU3/terminologies.html
[FHIR RESTful API]: http://hl7.org/fhir/STU3/http.html
[HTTP]: http://hl7.org/fhir/STU3/http.html
[FHIR Data Types]: http://hl7.org/fhir/STU3/datatypes.html
[FHIR Search]: http://hl7.org/fhir/STU3/search.html
[FHIR Resource]: http://hl7.org/fhir/STU3/formats.html
[2015 Edition Common Clinical Data Set]: guidance.html#edition-common-clinical-data-set


---

// File: input/pages/security.md

<!-- ---
title: General Security Considerations
layout: default
active: security
topofpage: true
sectionnumbering: true
F: http://build.fhir.org/
--- -->

The following are the VhDir security considerations that implementers should follow:
* All implementers of FHIR servers and clients should pay attention to [FHIR Security](http://hl7.org/fhir/security.html) considerations.
* In addition to the [FHIR Security](http://hl7.org/fhir/security.html) considerations, the VhDir requests need to contain specific information about VhDir client identity and organization information.
* Providing this information using FHIR Search APIs is very cumbersome and is not necessary. This kind of information can be collected by the VhDir Authorization Server during application registration and avoid repeating the information on each request.
* These mechanisms are outlined in detail in the [SMART Backend Services Authorization Guide](http://docs.smarthealthit.org/authorization/backend-services/).


The following are security conformance requirements for VhDir actors:
* VhDir actors *SHALL* use the [SMART Backend Services Authorization Guide] to collect the necessary requestor information appropriate for making the VhDir data request.
* VhDir actors *SHALL* reference a single time source to establish a common time base for security auditing across the system.
* VhDir actors *SHALL* use the [AuditEvent] resource to capture audit logs of the various transactions. VhDir actors *SHOULD* capture as many AuditEvent resource data elements as appropriate based on requirements of FHIR [Audit Logging] and local policies.
* VhDir transactions *SHALL* use TLS version 1.2 or higher to secure the transmission channel unless the transmission is taking place over a more secure network.(Using TLS even within a secured network environment is still encouraged to provide defense in depth.) US Federal systems implementing VhDir actors *SHOULD* conform with FIPS PUB 140-2.
* VhDir actors *SHALL* conform to [FHIR Communications] requirements.
* VhDir actors *SHOULD* retain Provenance information using the [FHIR Provenance] resource.


The following are security conformance requirements for the overall program/system:

* VhDir implementers *SHOULD* establish a risk analysis and management regime that conforms with HIPAA security regulatory requirements. In addition, implementers in the US Federal systems *SHOULD* conform with the risk management and mitigation requirements defined in NIST 800 series documents. This *SHOULD* include security category assignment in accordance with NIST 800-60 vol. 2 Appendix D.14. The coordination of risk management and the related security and privacy controls – policies, administrative practices, and technical controls – *SHOULD* be defined in the Business Associate Agreements.
* The time service used for auditing *SHOULD* be documented in the Business Associate Agreements.



  [FHIR Communications]: http://hl7.org/fhir/STU3/security.html#http
  [Smart On FHIR]: http://fhir-docs.smarthealthit.org/argonaut-dev/authorization/backend-services/
  [FHIR Security Labels]: http://hl7.org/fhir/STU3/security-labels.html
  [General Security Considerations]: #general-security-considerations
  [FHIR Provenance]: http://hl7.org/fhir/STU3/provenance.html
  [FHIR Digital Signatures]: http://hl7.org/fhir/STU3/security.html#digital%20signatures
  [SMART Backend Services Authorization Guide]:http://docs.smarthealthit.org/authorization/backend-services/

  [security considerations]: http://hl7.org/fhir/STU3/security.html
  [Communications]: http://hl7.org/fhir/STU3/security.html#http
  [Authentication]: http://hl7.org/fhir/STU3/security.html#authentication
  [Authorization/Access Control]: http://hl7.org/fhir/STU3/security.html#authorization/access%20control
  [Audit Logging]: http://hl7.org/fhir/STU3/security.html#audit%20logging
  [Digital Signatures]: http://hl7.org/fhir/STU3/security.html#digital%20signatures
  [Security Labels]: http://hl7.org/fhir/STU3/security-labels.html
  [Narrative]: http://hl7.org/fhir/STU3/security.html#narrative
  [AuditEvent]: http://hl7.org/fhir/STU3/auditevent.html
  [Audit Logging]: http://hl7.org/fhir/STU3/security.html#audit
  [Consent]: http://hl7.org/fhir/STU3/consent.html


---

// File: input/pages/technical-guidance.md

<!-- ---
title: Technical Guidance for VHDir Implementations
layout: default
active: technical-guidance
topofpage: true
sectionnumbering: true
F: http://build.fhir.org/

--- -->

## Validated Healthcare Directory Concept Diagram


This diagram depicts the high-level conceptual design of a central source of validated healthcare directory data.

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 1: Validated Healthcare Directory Concept Diagram</strong></figcaption>
  <img src="diagram5.jpg" class="figure-img img-responsive img-rounded center-block" alt="conceptDiagram" />
</figure>

In this diagram, RESTful FHIR APIs facilitate the movement data into and out of a validated healthcare directory (VHDir) at different points, including:
* Attestation: Individuals and organizations (via an authorized representative) attest to information about themselves for inclusion in the VHDir. See [below](#attestation) for more information about attestation.
* Validation: An implementer of a VHDir (not shown in the diagram) may validate attested data against primary sources, thereby verifying the truthfulness and accuracy of the attested data. For example, an implementer might validate a provider’s medical license against records maintained by a state licensure board. Validation may occur initially, when attested data is first submitted, and/or on a regular basis as determined by the VHDir implementer and/or applicable laws, regulations, or policies. See [below](#validation) for more information about validation.
* Exchange: A VHDir would make validated healthcare directory data available to local workflow environments to support various business needs. Local workflow environments include, but are not limited to, payer organizations, provider organizations, health information exchanges (HIEs), health information service providers (HISPs), government agencies, and any other entities that maintain a healthcare directory and/or have a need for validated provider data. See [below](#exchange) for more information about exchange.

## Attestation

Attestation describes the process by which authorized entities submit information about themselves, their roles, their relationships, etc. for inclusion in a healthcare directory.

Guidance in this section is primarily intended to describe expectations for implementers using a FHIR API to manage attestation. An implementer’s unique implementation context, including local business needs, applicable laws/regulations/policies, usability considerations, etc. will determine an implementer’s approach to many of the attestation considerations described in this section. As we do not anticipate every implementer will use the same approach to attestation, we have not provided a set of attestation profiles or defined an attestation API. Implementers SHALL make any attestation requirements, including but not limited to profiles and/or API documentation, available to any stakeholders involved in the attestation process.

We acknowledge that implementers may use processes other than a FHIR API, such as paper-based forms, to obtain attested data. Such processes are considered out of scope for this guide.

This guide covers multiple attestation scenarios:
* Individual provider attesting to their information
* Authorized representative attesting to an individual provider’s information
* Authorized representative attesting to an organization’s information
* Authorized representative attesting to a payer organization’s information
* Submission of attested data by an authorized intermediary (e.g. another system that maintains attested data)

Each of these scenarios may encompass different sets of “permitted” data. For example, an individual provider attesting to her own information may not have the right to also attest to information about an organization she works for. These “rights” are assigned by each implementation of a validated healthcare directory, and can help prevent the submission of duplicate records. In general:
* An individual practitioner (or authorized representative) may attest to their own demographic information (e.g. name, birthdate, gender, etc.) and information about their relationships with organizations, locations, services, care teams, and health insurance provider networks.
  * Information represented using the Practitioner, PractitionerRole, Endpoint, and CareTeam profiles
* A provider organization (through an authorized representative) may attest to its own demographic information (e.g. name, address, contact info, etc.), services, locations, care teams and other organizations it owns/manages, and its relationships with other organizations, providers, and health insurance provider networks
  * Information represented using the Organization, PractitionerRole, OrganizationAffiliation, HealthcareService, CareTeam, Location, and Endpoint profiles
  * In cases where individual practitioners operate as solo practitioners without a relationship to a legal organization, implementers should consider representing the individual using both a Practitioner and Organization resource and assigning the “organization” rights to the individual.
* A payer organization (through an authorized representative) may attest to its own demographic information (e.g. name, address, contact info, etc.), services, locations, care teams, other organizations, health insurance provider networks and plans it owns/manages, and its relationships with other organizations and providers.
  * Information represented as Organization, OrganizationAffiliation, HealthcareService, CareTeam, Location, Endpoint, Network, and InsurancePlan profiles
* An authorized intermediary may submit attested data on behalf of any of the previously described stakeholders. An intermediary should not submit data that has not been attested to, such as data that has been “scraped” from public sources. An example of an intermediary could be a state directory that collects information from providers in its jurisdiction, and then passes that information to a national directory.

Additionally, implementers may set requirements for the minimum amount of data different groups of stakeholders must attest to. For example, a US implementation might require all licensed providers to attest to their National Provider Identifier (NPI). In general, implementers might specify different minimum attestation requirements across three classes of stakeholders:
* Licensed billing providers (e.g. doctors, nurses)
* Non-licensed billing providers (e.g. medical equipment suppliers)
* Ancillary personnel (e.g. administrative staff)

We expect stakeholders will typically use a [SMART on FHIR application](https://smarthealthit.org/) to help attesters manage the attestation process (i.e. to submit attested data in the form of FHIR resources via a RESTful API). Such an application may be offered by an entity maintaining a validated healthcare directory or owned by the stakeholder(s) submitting attested data.

Before accepting attested data, a validated healthcare directory should have policies to ensure:
* Any attester application has successfully registered and integrated with the validated healthcare directory.
* Attesters have successfully completed any identify proofing requirements.
* Any credentials or digital certificates that must be exchanged have been exchanged, validated, and are functional.
* The validated healthcare directory has set and made available any permissions/rights that govern the scope of data an attester may submit.
* Any representatives/intermediaries submitting data on behalf of an individual/entity have been appropriately authorized.

Once these preconditions have been met, a typical attestation workflow might involve:
* An attester application is pre-populated with data about the individual making the attestation, such as any known demographic information.
  * For example, the attester application may be pre-populated with data from the attester’s EHR system.
  * The attester application may query the validated healthcare directory for existing resources about the attester, which can be updated or used to pre-populate data in the application.
* The application user enters the appropriate information and submits their attestation.
  * Submission of attested information may require some form of digital signature.
  * The attester application may perform a validation process to check the general structure, content, etc. of the submission.
* The attester application POSTs or PUTs the submitted data as FHIR resources to the validated healthcare directory’s attestation API.
* The validated healthcare directory performs a validation process to check the general structure, content, etc. of the submission (e.g. checking consistency w/data type, required elements are present, references to existing resources are correct, codes are from appropriate value set etc.).
  * If there are no errors, the validated healthcare directory system assigns an ID to the posted resources and returns the appropriate HTTP status code as well as the url/id of each resource.
  * If there are errors, validated healthcare directory system rejects the operation and returns the appropriate HTTP status code and an OperationOutcome resource describing the error(s).

The FHIR specification [describes multiple approaches](http://build.fhir.org/http.html) for managing interactions over an API, including:
* Resources may be created, updated, patched, or deleted individually using the appropriate HTTP method (i.e. POST, PUT, PATCH, DELETE).
* Resources may be created, updated, patched, or deleted as a collection using a Bundle. A Bundle can include a set of actions to perform on a server in a single HTTP request/response.
  * A Bundle of type “batch” requires that there “SHALL be no interdependencies between the different entries in the Bundle”, but failure of any one interaction does not cause the whole collection to fail.
  * A Bundle of type “transaction” is processed as a single atomic unit, and the whole collection will fail if any of the interactions defined in the Bundle fail.
Additionally, the FHIR specification provides support for [asynchronous interactions](http://build.fhir.org/async.html), which may be necessary to facilitate processing of large amounts of data.

This implementation guide is not prescriptive about which approach(es) a validated healthcare directory should use to manage attestation. However, as any attestation will likely involve the submission of multiple FHIR resources representing information about one or more attesters, transaction Bundles can alleviate the need for more complex logic to manage referential integrity in attested information.

Implementations relying on individual API interactions or batch Bundles may have to specify an “order of operations” to ensure attested data can be successfully submitted to the validated healthcare directory server. For example, as a general guideline, resources may need to be submitted in the order of:

1.	Organization
2.	Endpoint
3.	Practitioner
4.	Location
5.	Network
6.	InsurancePlan
7.	HealthcareService
8.	OrganizationAffiliation
9.	PractitionerRole
10.	CareTeam

Depending on the context of implementation, entities maintaining a validated healthcare directory may have to manage record collision or duplication (i.e. multiple attesters attempting to simultaneously submit updates to the same record, or multiple attesters attempting to attest about the same set of information).

The FHIR specification provides some [guidance](http://build.fhir.org/http.html#concurrency) on managing collisions using a combination of the ETag and If-Match header in an HTTP interaction. We recommend validated healthcare directory implementers use this approach.

To manage duplicate records, we generally recommend that validated healthcare directory implementers define a robust validation process with policies for identifying and resolving duplicates. Any additional technical capabilities are beyond the scope of this implementation guide.

## Validation

Validation is critical for ensuring that users of a healthcare directory can rely upon the data in the directory. Validation can refer to separate but related processes: validation of FHIR resources (e.g. checking consistency w/data type, required elements are present, references to existing resources are correct, codes are from appropriate value set etc.), and validation of data against a primary source (e.g. verifying an address using Post Office records). This section describes the latter.

Implementers will typically determine how primary source validation occurs operationally, based in part on the capabilities of the primary sources used for validation. For example, a primary source may already offer a mechanism like an API for validating content against its records. In other cases, an implementer may want to define an API that the primary source can access to push and/or pull content related to validation. Implementers may also consider less technical approaches, such as manual validation, or more stringent requirements, such as mailing a postcard to confirm an address.

Certain types of data may have different validation requirements. For example, validating a relationship might require confirmation from each stakeholder participating in the relationship. Some data may have to be validated more frequently (e.g. license status), while other data can be validated once (e.g. education history) or not at all (e.g. a provider’s spoken language proficiency).

As with attestation, we expect VHDir implementers may use different approaches to validation. Therefore, we have not defined specific validation requirements or a validation API. Implementers SHALL make any validation requirements, including but not limited to profiles and/or API documentation, available to any stakeholders involved in the validation process.

This implementation guide includes a Validation profile for the VerificationResult resource for representing information about validation. The VerificationResult resource includes a number of data elements designed to record information pertaining to the validation processes defined by implementers, as well as the outcome of validation for a specific data element/set of elements/resource. The Validation profile includes data elements describing:
* The validation process, including the frequency of validation/revalidation, validation status, validation date, and what it means if validation was unsuccessful
* The primary source against which data was validated, including the identity of the primary source, how a validator communicates with the primary source, and whether the primary source can push updates about the data being validated
* The source of the data being validated (i.e. the attester), including the identity of the attesting individual, organization, and/or authorized representative and when the information was attested
* The entity conducting validation, including its identity and when it validated the data
* The outcome of validation for the targeted data

Validation may occur on the total contents of a resource, a collection of elements in a resource, or a single element. Any entity with access to a data element in a validated healthcare directory SHALL also have access to any validation information pertaining to that element.

## Exchange

The primary focus of this implementation guide is a RESTful API for obtaining data from a Validated Healthcare Directory. The exchange API only supports a one-directional flow of information from a Validated Healthcare Directory into local environments (i.e. HTTP GETs).

Any Validated Healthcare Directory IG conformant implementation:

*  SHALL support profiles: Organization, Practitioner, Location, PractitionerRole, Endpoint, Validation
*  SHOULD support profiles: HealthcareService, CareTeam, Network, ProductPlan, Restriction, OrganizationAffilliation

In profiles, the "Must Support" flag indicates if data exists for the specific property, then it must be represented as defined in the VHDir IG. If the element is not available from a system, this is not required, and may be ommitted.

Conceptually, this guide was written to describe the flow of information from a central source of validated healthcare directory data to local workflow environments. We envisioned a national VHDir which functioned as a “source of truth” for a broad set of provider data available to support local business needs and use cases. A local environment could readily obtain all or a subset of the data it needed from the national VHDir and have confidence that the information was accurate. If necessary, a local environment could supplement VHDir data with additional data sourced and/or maintained locally. For example, a local environment doing provider credentialing might rely on a national VHDir for demographic information about a provider (e.g. name, address, educational history, license information, etc.), but also ask the provider for supplementary information such as their work history, liability insurance coverage, or military experience. Likewise, we envisioned that a VHDir would primarily share information with other systems, rather than individual end users or the general public.

The content of this guide, however, does not preclude it from being implemented for smaller “local” directories, or accessed by the general public. Generally, conformance requirements throughout the guide are less tightly constrained so as to support a wider variety of possible implementations. We did not want to set strict requirements about the overall design, technical architecture, capabilities, etc. of a Validated Healthcare Directory that might prevent adoption of this standard. For example, although we would expect a national directory to gather and share information about healthcare provider insurance networks and health plans, implementations are not required to do so to be considered conformant.

We acknowledge that this decision has the potential to impact the interoperability of healthcare directory data and lead to variable implementations. However, we believe this risk is balanced by the potential for greater standardization of healthcare directory data enabled by this IG. We expect jurisdictions (e.g. countries) to further constrain this IG to meet their unique needs and publish the results openly and transparently.

Especially with larger-scale implementations, healthcare directories may contain a large amount of data that will not be relevant to all use cases or local needs. Therefore, the exchange API defines a number of search parameters to enable users to express the scope of a subset of data they care to access. For example, implementations are required to support searches for Organizations based on address, endpoint, identifier, name/alias, and relationship to a parent organization. In general, parameters for selecting resources based on a business identifier, status, type, or relationship (i.e. reference) are required for all implementations. Most parameters may be used in combination with other parameters and support more “advanced” capabilities like modifiers and chains.

The VHDir API currently supports one method for accessing directory data, a real-time pull. However, stakeholders may need other capabilities to support different business needs. For instance, stakeholders may need access to large amounts of VHDir data in a single session to either initially seed or refresh their local data repositories. Depending on the scope of data a stakeholder is trying to access, a real-time pull may not be the most effective method for acquiring large data sets. The FHIR specification provides support for [asynchronous interactions](http://build.fhir.org/async.html), which may be necessary for implementers to facilitate processing of large amounts of data.

VHDir implementations should also consider providing capabilities for users to subscribe to receive updates about the data they care about. A subscribe/publish model can help alleviate the need for stakeholders to periodically query a VHDir for new data and/or changes to data they have already obtained.

Likewise, implementers should consider supporting a mechanism to push urgent updates or changes to data that may impact business decisions or safety. For example, a VHDir might push updates about a practitioner’s record if their medical license is suspended or revoked.

## Restricted Content

We envision VHDir as a public or semi-public utility. Stakeholders who agree to abide by the VHDir’s policies and procedures, signed a data use agreement, etc. would generally have access to VHDir data (note: we consider specific operational policies and legal agreements out of scope for this IG). However, in some implementations, a VHDir may include sensitive data that is not publicly accessible or accessible to every VHDir stakeholder. For example, an implementer might not want to make data about military personnel, emergency responders/volunteers, or domestic violence shelters available to everyone with access to a VHDir, or to users in a local environment who have access to data obtained from a VHDir.

We expect that a VHDir’s operational policies and legal agreements will clearly delineate which data stakeholders can access, and if necessary, require stakeholders to protect the privacy/confidentiality of sensitive information in downstream local environments. As such, we have included a Restriction profile based on the Consent resource to convey any restrictions associated with a data element, collection of elements, or resource obtained from a VHDir.

## Redundancy & Ambiguity Across Resources

Although FHIR resources define discrete business objects, related resources may have similar data elements. For example, the HealthcareService, PractitionerRole, and Location resources all include data elements describing availability. In some circumstances, values in these common data elements may not align across resources, potentially creating ambiguity. For example, in this IG, a Location resource might indicate that the location no longer accepts patients. However, a PractitionerRole resource for a provider working at the location might indicate that the provider is accepting patients (e.g., by referral only). In some cases, these inconsistencies are valid representations of the complexities of healthcare systems. In others, data might have been entered in error, outdated, or otherwise inaccurate.

The FHIR specification does not provide guidance on managing common elements across resources to reduce redundancy or ambiguity. Likewise, this implementation guide does not provide additional guidance. Implementations should consider further constraining profiles, creating invariants, or requiring data sources (e.g. attesters) to contribute data in a consistent format. Some resources include elements for describing exceptions, such as the availabilityExceptions field on HealthcareService, Location, and PractitionerRole. Additionally, validation processes may help discover and address inconsistencies across resources.

------------------------------------------------------------------------


---

// File: input/pages/todo.md

<!-- ---
title: Implemenation Guide Todo List
layout: default
active: todo
--- -->

     ...todo...


---

