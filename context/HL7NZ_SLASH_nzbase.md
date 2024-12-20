File: repos/HL7NZ_SLASH_nzbase/sushi-config.yaml


id: fhir.org.nz.ig.base
#id: hl7.fhir.nz.base
### experimental!!!  changing the canonical url to match the 
# this is the original   canonical: http://fhir.org.nz/ig/base

canonical: http://hl7.org.nz/fhir

version: 3.1.0
name: HL7FHIRNewZealandBaseImplementationGuide
title: HL7® FHIR® New Zealand Base Implementation Guide
status: active
publisher:
  name: HL7 New Zealand
  email: mailto:admin@hl7.org.nz
description: New Zealand base profiles
license: CC0-1.0
fhirVersion: 4.0.1
copyrightYear: 2021+
# releaseLabel: Release
releaseLabel: Draft


# ╭───────────────────────────────────────package-list.json────────────────────────────────────────╮
# │  To use a provided ig-data/package-list.json file, delete the "history" property below.        │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯


# ╭─────────────────────────────────────────────ig.ini─────────────────────────────────────────────╮
# │  To control the ig.ini using this config, uncomment and set the "template" property.           │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
# template: nzBaseTemplate

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To control the menu.xml using this config, uncomment and set the "menu" property.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  IG Home: index.html
  Extensions: extensions.html
  Profiles: profiles.html
  Terminology: terminology.html
  Identifiers: namingSystems.html
  # Table of Contents: toc.html
  Artifact Index: artifacts.html
  Support:
    Download IG: full-ig.zip
    FHIR Spec: http://hl7.org/fhir/R4/index.html
    Artifacts (Json): definitions.json.zip
    Artifacts (Xml): definitions.xml.zip
  # Terminology Audit: termaudit.html

parameters:
  show-inherited-invariants: false
  apply-version: false
  # default-version: true
  special-url: 
    - 'https://standards.digital.health.nz/ns/nz-ethnic-group-codes'

---

// File: input/pagecontent/index.md


## New Zealand base FHIR Implementation Guide

This is the base Implementation Guide (IG) for New Zealand and contains the common extensions that most NZ FHIR Implementations will need, along with any terminology 
artifacts referenced by them (ie coded elements).

<!--
# Must Support

Many of the elements in profiles are marked as 'Must Support'. This means that clients using these profiles must understand what the elements mean, and have a strategy for dealing them - such as storing them in local repositories or displaying them to the user. They should not be ignored if present.

Note that 'Must Support' does not mean the same as 'Required', as they may be absent.

-->

### Macron support for Te reo Māori
By default, FHIR supports macrons (and all diacritics) as commonly used by Te Reo Māori to indicate long vowels. 

Macrons are supported as FHIR uses UTF-8 for all encoding formats (JSON, XML, and RDF), and macrons are explicitly allowed by the relevant FHIR datatypes where macrons could appear.

## Overview of IG Sections

The following tabs are available from the navbar at the top.

### Extensions

This tab lists all the extensions defined in this guide, where an extension is an additional element that can be recorded in a resource. The extension definition describes the purpose of the extension, its name and [dataType/s](http://hl7.org/fhir/datatypes.html).

Clicking on the link in the 'id' column will display the detail page for that extension. Extensions can have a single value, or can be composed of multiple 'child' elements - an example is the [funded programme](StructureDefinition-funded-programme.html) extension. The snapshot tab in the details page (about halfway down) lists all the parts of the extension - including a link to the ValueSet if the element is coded.

### Terminology

This tab lists the terminology artifacts defined in this guide. There are 2 artifacts that will be found here:

* [ValueSets](http://hl7.org/fhir/valueset.html) are sets of codes, drawn from one or more code systems, intended for use in coded data elements in Resources, as defined by a particular conformance rule - such as an Extension or Profile. The ValueSets in this Guide are 'recommended' values, but it may be possible for implementers to use additional concepts if the rules defined by a particular Extension or Profile permit this.
* [CodeSystem](http://hl7.org/fhir/codesystem.html) resources are used to declare the existence of and describe a code system, its key properties, and optionally define a part or all of its content. Wherever possible, the use of international terminologies, such as [SNOMED CT](https://www.snomed.org/), is recommended; however, a number of New Zealand-specific code systems are included in this Guide to meet unique, local requirements.

These resources can be used by Terminology Servers (like [Terminz](https://terminz-itp.azurewebsites.net/) or [Ontoserver](https://aehrc.com/ontoserver/) ) to provide terminology [operations](http://hl7.org/fhir/operations.html) of use to implementers, such as the ValueSet [$expand](http://hl7.org/fhir/valueset-operation-expand.html) operation.

There is a lot more detail on terminology in the [FHIR specification](http://hl7.org/fhir/terminology-module.html). The section on [Terminology Services](http://hl7.org/fhir/terminology-service.html) is also useful.

### Identifiers

Identifiers are used to unambiguously identify something. Examples in New Zealand are the NHI (National Health Identifier) or HPI (Health Practitioner index). Each type of identifier has a url that uniquely identifies it - for example the value for the NHI is https://standards.digital.health.nz/ns/nhi-id. This url will be present in the 'system' value in a resource instance. Note that the url will not necessarily 'resolve' - entering it into a web browser will not result in anything. 

### Artifact Index

This is a tab automatically generated during the build of the Implementation Guide, and lists all the FHIR artifacts defined by the guide with a link to the details.

### Support

Contains links to the main FHIR specification, as well downloads for the full IG or the artifacts defined in the guide (Extension Definitions, ValueSets and CodeSystems.)

If you would like to make any feedback on this Implementation Guide, email admin@hl7.org.nz


---

// File: input/pagecontent/namingSystems.md

<!-- Generated by the makeNamingSystemSummary script -->
### Identifiers

<div>
These are identifiers defined in this IG. They are defined using <a href='http://hl7.org/fhir/namingsystem.html'>NamingSystem</a> resources.
</div>

<table class='table table-bordered table-condensed'>
<tr><th>Description</th><th>Url</th><th>Other identifiers</th><th>Responsible</th></tr>
<tr><td>ACC 45 number</td><td><div>https://standards.digital.health.nz/ns/acc-45-number</div></td><td></td><td>HISO</td></tr>
<tr><td>Chiropractic Board Register number</td><td><div>https://standards.digital.health.nz/ns/chiropractic-board-id</div></td><td><ul><li>2.16.840.1.113883.2.18.70.1 (oid) </li></ul></td><td>HISO</td></tr>
<tr><td>Dental Council Register Number</td><td><div>https://standards.digital.health.nz/ns/dental-council-id</div></td><td><ul><li>2.16.840.1.113883.2.18.70.2 (oid) </li></ul></td><td>HISO</td></tr>
<tr><td>Dietitians Board Register Number</td><td><div>https://standards.digital.health.nz/ns/dietitians-board-id</div></td><td><ul><li>2.16.840.1.113883.2.18.70.3 (oid) </li></ul></td><td>HISO</td></tr>
<tr><td>HPI PractitionerRole id</td><td><div>https://standards.digital.health.nz/ns/hpi-practitionerrole-id</div></td><td></td><td>HISO</td></tr>
<tr><td>HPI facilities</td><td><div>https://standards.digital.health.nz/ns/hpi-facility-id</div></td><td><ul><li>https://standards.digital.health.nz/ns/moh-facility-id (uri) </li><li>https://standards.digital.health.nz/id/hpi-facility (uri) Deprecated</li><li>2.16.840.1.113883.2.18.3.2 (oid) </li><li>https://standards.digital.health.nz/ns/nzhis-facility-id (uri) </li></ul></td><td>HISO</td></tr>
<tr><td>HPI organizations</td><td><div>https://standards.digital.health.nz/ns/hpi-organisation-id</div></td><td><ul><li>https://standards.digital.health.nz/ns/moh-agency-id (uri) NZHIS Agency code. Deprecated</li><li>https://standards.digital.health.nz/id/hpi-organisation (uri) Deprecated</li><li>2.16.840.1.113883.2.18.3.3 (oid) </li><li>https://standards.digital.health.nz/ns/nzhis-agency-id (uri) Deprecated</li></ul></td><td>HISO</td></tr>
<tr><td>HPI providers</td><td><div>https://standards.digital.health.nz/ns/hpi-person-id</div></td><td><ul><li>https://standards.digital.health.nz/id/hpi-person (uri) Deprecated</li><li>2.16.840.1.113883.2.18.3.1 (oid) </li></ul></td><td>HISO</td></tr>
<tr><td>Identifier assigned by the Rheumatic Fever Care Coordination System, used on CarePlan, Condition, CareTeam, and Observation resources.</td><td><div>https://standards.digital.health.nz/ns/rf-ccs-id</div></td><td></td><td>New Zealand Health Information Standards Organisation (HISO)</td></tr>
<tr><td>Medical Council of New Zealand Register Number</td><td><div>https://standards.digital.health.nz/ns/medical-council-id</div></td><td><ul><li>2.16.840.1.113883.2.18.41 (oid) </li></ul></td><td>HISO</td></tr>
<tr><td>Medical Radiation Technologists Board Register Number</td><td><div>https://standards.digital.health.nz/ns/medical-radiation-technologists-board-id</div></td><td></td><td>HISO</td></tr>
<tr><td>Medical Sciences Council Register Number</td><td><div>https://standards.digital.health.nz/ns/medical-sciences-council-id</div></td><td></td><td>HISO</td></tr>
<tr><td>Midwifery Council Register Number</td><td><div>https://standards.digital.health.nz/ns/midwifery-council-id</div></td><td><ul><li>2.16.840.1.113883.2.18.70.5 (oid) </li></ul></td><td>HISO</td></tr>
<tr><td>NHI number</td><td><div>https://standards.digital.health.nz/ns/nhi-id</div></td><td><ul><li>https://standards.digital.health.nz/id/nhi (uri) Deprecated</li><li>2.16.840.1.113883.2.18.2 (oid) </li></ul></td><td>HISO</td></tr>
<tr><td>New Zealand Business Number</td><td><div>https://standards.digital.health.nz/ns/hpi-nzbn</div></td><td></td><td>HISO</td></tr>
<tr><td>New Zealand Street Address Mapping Identifier</td><td><div>https://standards.digital.health.nz/ns/nz-address-id</div></td><td></td><td>New Zealand Health Information Standards Organisation (HISO)</td></tr>
<tr><td>Nursing Council of New Zealand Register Number</td><td><div>https://standards.digital.health.nz/ns/nursing-council-id</div></td><td><ul><li>2.16.840.1.113883.2.18.42 (oid) </li></ul></td><td>HISO</td></tr>
<tr><td>Occupational Therapy Board Register Number</td><td><div>https://standards.digital.health.nz/ns/occupational-therapy-board-id</div></td><td><ul><li>2.16.840.1.113883.2.18.70.13 (oid) </li></ul></td><td>HISO</td></tr>
<tr><td>Optometrists & Dispensing Opticians Board Register Number</td><td><div>https://standards.digital.health.nz/ns/optometrists-dispensing-opticians-board-id</div></td><td><ul><li>2.16.840.1.113883.2.18.70.12 (oid) </li></ul></td><td>HISO</td></tr>
<tr><td>Osteopathic Council Register Number</td><td><div>https://standards.digital.health.nz/ns/osteopathic-council-id</div></td><td><ul><li>2.16.840.1.113883.2.18.70.6 (oid) </li></ul></td><td>HISO</td></tr>
<tr><td>Paramedic Council Register Number</td><td><div>https://standards.digital.health.nz/ns/paramedic-council-id</div></td><td></td><td>HISO</td></tr>
<tr><td>Pharmacy Council of New Zealand Register Number</td><td><div>https://standards.digital.health.nz/ns/pharmacy-council-id</div></td><td><ul><li>2.16.840.1.113883.2.18.68 (oid) </li><li>2.16.840.1.113883.2.18.9 (oid) </li></ul></td><td>HISO</td></tr>
<tr><td>Physiotherapy Board Register Number</td><td><div>https://standards.digital.health.nz/ns/physiotherapy-board-id</div></td><td><ul><li>2.16.840.1.113883.2.18.70.7 (oid) </li></ul></td><td>HISO</td></tr>
<tr><td>Podiatrists Board Register Number</td><td><div>https://standards.digital.health.nz/ns/podiatrists-board-id</div></td><td><ul><li>2.16.840.1.113883.2.18.70.8 (oid) </li></ul></td><td>HISO</td></tr>
<tr><td>Psychologists Board Register Number</td><td><div>https://standards.digital.health.nz/ns/psychologists-board-id</div></td><td><ul><li>2.16.840.1.113883.2.18.70.9 (oid) </li></ul></td><td>HISO</td></tr>
<tr><td>Psychotherapists Board register Number</td><td><div>https://standards.digital.health.nz/ns/psychotherapists-board-id</div></td><td><ul><li>2.16.840.1.113883.2.18.70.7 (oid) </li></ul></td><td>HISO</td></tr>
<tr><td>This identifier, known as the 'MoE Number' or 'School Number', is used by the education sector to identify an NZ education institution. These identifiers can be looked up at the \[[educationcounts.govt.nz](http://educationcounts.govt.nz)\]([https://www.educationcounts.govt.nz/directories/list-of-nz-schools](https://www.educationcounts.govt.nz/directories/list-of-nz-schools)) website.</td><td><div>https://standards.digital.health.nz/ns/moe-facility-id</div></td><td></td><td>New Zealand Health Information Standards Organisation (HISO)</td></tr>
</table>
<br/><br/>

---

// File: input/pagecontent/StructureDefinition-additional-authorisation-intro.md


**Example of extension**

```

  <qualification>
    <extension url="http://hl7.org.nz/fhir/StructureDefinition/additional-authorisation">
      <extension url="code">
        <valueCodeableConcept>
          <coding>
            <system value="https://standards.digital.health.nz/ns/practitioner-additional-authorisation-code"/>
            <code value="IMMU"/>
            <display value="Immunisation"/>
          </coding>
        </valueCodeableConcept>
      </extension>
      <extension url="period">
        <valuePeriod>
          <start value="2022-01-01"/>
        </valuePeriod>
      </extension>
    </extension>
    <code>
      <coding>
        <system value="http://terminology.hl7.org/CodeSystem/v2-0360"/>
        <code value="BS"/>
      </coding>
    </code>
  </qualification>

```

**Example instances**

[Practitioner with additional authorisation](Practitioner-practitioner-additional-authorisation.html)

---

// File: input/pagecontent/StructureDefinition-alias-type-intro.md


**Example of extension**

```

  <alias value="Best health">
    <extension url="http://hl7.org.nz/fhir/StructureDefinition/alias-type">
      <valueCodeableConcept>
        <coding>
          <system value="https://standards.digital.health.nz/ns/alias-type-code"/>
          <code value="short"/>
          <display value="Local name"/>
        </coding>
      </valueCodeableConcept>
    </extension>
  </alias>

```

**Example instances**

[Location with alias type](Location-location-alias-type.html)

---

// File: input/pagecontent/StructureDefinition-building-name-intro.md


**Example of extension**

```

  <address>
    <extension url="http://hl7.org.nz/fhir/StructureDefinition/building-name">
      <valueString value="Big blue building"/>
    </extension>
    <line value="23 thule st"/>
    <city value="Waipu"/>
  </address>

```

**Example instances**

[Address with building name](Patient-patient-building-name.html)

---

// File: input/pagecontent/StructureDefinition-condition-on-practice-intro.md


**Example of extension**

```

  <qualification>
    <extension url="http://hl7.org.nz/fhir/StructureDefinition/condition-on-practice">
      <extension url="description">
        <valueString value="Must be supervised"/>
      </extension>
      <extension url="period">
        <valuePeriod>
          <start value="2020-01-01"/>
          <end value="2020-12-31"/>
        </valuePeriod>
      </extension>
    </extension>
    <code>
      <coding>
        <system value="http://terminology.hl7.org/CodeSystem/v2-0360"/>
        <code value="BS"/>
      </coding>
    </code>
  </qualification>

```

**Example instances**

[Practitioner with Condition on practice](Practitioner-practitioner-condition-on-practice.html)

---

// File: input/pagecontent/StructureDefinition-coverage-intro.md


**Trial use**

The use of this resource to represent GMS and ACC numbers is being trialled
in this release of the IG. An alternative could be a specific extension, but
the thinking is that Coverage is more flexible and could used for other
purposes such as Health Insurance

**Example instances**

todo - both GMS and ACC


---

// File: input/pagecontent/StructureDefinition-death-date-intro.md


**Example of extension**

```

<extension url="http://hl7.org.nz/fhir/StructureDefinition/death-date">
    <extension url="date">
      <valueDateTime value="2021-01-01"/>
    </extension>
    <extension url="source">
      <valueCodeableConcept>
        <coding>
          <system value="https://standards.digital.health.nz/ns/information-source-code"/>
          <code value="DREG"/>
        </coding>
      </valueCodeableConcept>
    </extension>
  </extension>

```

**Example instances**

[Practitioner with death date recorded](Practitioner-practitioner-death-date.html)

---

// File: input/pagecontent/StructureDefinition-dhb-intro.md


**Example of extension**

```

  <extension url="http://hl7.org.nz/fhir/StructureDefinition/dhb">
    <valueCodeableConcept>
      <coding>
        <system value="https://standards.digital.health.nz/ns/dhb-code"/>
        <code value="G00026-A"/>
        <display value="Northland"/>
      </coding>
    </valueCodeableConcept>
  </extension>

```

**Example instances**

[Patient with DHB](Patient-patient-dhb.html)

---

// File: input/pagecontent/StructureDefinition-domicile-code-intro.md


**Example of extension**

```

 
  <extension url="http://hl7.org.nz/fhir/StructureDefinition/domicile-code">
    <valueCodeableConcept>
      <coding>
        <system value="https://standards.digital.health.nz/ns/domicile-code"/>
        <code value="0040"/>
        <display value="Waipu"/>
      </coding>
    </valueCodeableConcept>
  </extension>

```

**Example instances**

[Patient with domicile code](Patient-patient-domicile-code.html)

---

// File: input/pagecontent/StructureDefinition-edi-address-intro.md



  This extension has been deprecated, and the [Messaging Address](StructureDefinition-messaging-address.html) extension should be used instead. The status will be changed to 'retired' in the next version of this guide.


This extension allows an EDI address to be added to the ContactPoint.system element.

As the FHIR specification has a [required](http://hl7.org/fhir/terminologies.html#required) binding for this element, it is necessary to
provide a value from the defined set (eg 'other') then place the extension on that value.

The actual value of the edi address is the .value element.

In the example below, the extension (on telecom.system) indicates that this is an EDI address supplied
by HealthLink. The actual value of the EDI address (on telecom.value) is 001a

**Example of extension**

```

  <telecom>
    <system value="other">
      <extension url="http://hl7.org.nz/fhir/StructureDefinition/edi-address">
        <valueString value="healthlink"/>
      </extension>
    </system>
    <value value="001a"/>
  </telecom>

```

**Example instances**

[Patient with EDI Address](Practitioner-practitioner-edi-address.html)

---

// File: input/pagecontent/StructureDefinition-educational-qualification-intro.md


**Example of extension**

```
  ...
  <qualification>
    <extension url="http://hl7.org.nz/fhir/StructureDefinition/educational-qualification">
      <extension url="fullname">
        <valueString value="Fellow of the Royal Australian and New Zealand College of Psychiatrists qualification"/>
      </extension>
      <extension url="shortname">
        <valueString value="Psychiatrist fellow"/>
      </extension>
      <extension url="year">
        <valueDate value="1995"/>
      </extension>
      <extension url="institution">
        <valueString value="Royal Australian and New Zealand College of Psychiatrists"/>
      </extension>
      <extension url="city">
        <valueString value="Wellington"/>
      </extension>
      <extension url="country">
        <valueString value="NZ"/>
      </extension>
      <extension url="country-name">
        <valueString value="New Zealand"/>
      </extension>
    </extension>
    ...
  </qualification>
  ...

```

**Example instances**

[Practitioner with educational qualification](Practitioner-practitioner-educational-qualification.html)

---

// File: input/pagecontent/StructureDefinition-established-intro.md


**Example of extension**

```

<Location xmlns="http://hl7.org/fhir">
 ...
  <extension url="http://hl7.org.nz/fhir/StructureDefinition/established">
    <valuePeriod>
      <start value="2010-01-01"/>
    </valuePeriod>
  </extension>
  <name value="Daves health centre"/>
  <alias value="Best health"/>
  ...
</Location>

```

**Example instances**

[Location with established](Location-location-established.html)

---

// File: input/pagecontent/StructureDefinition-funded-programme-intro.md


**Example of extension**

```
  <extension url="http://hl7.org.nz/fhir/StructureDefinition/funded-programme">
    <extension url="fundedProgramme">
      <valueCodeableConcept>
        <coding>
          <system
                  value="https://standards.digital.health.nz/ns/funded-programme-code"/>
          <code value="DENTAL_CHILD"/>
          <display value="Dental Care - Children up to age 13"/>
        </coding>
      </valueCodeableConcept>
    </extension>
    <extension url="currentAvailability">
      <valueBoolean value="true"/>
    </extension>
    <extension url="notes">
      <valueString
                   value="Dental care is only free on referral. Your child’s care will normally be managed by the Auckland Regional Dental Services (ARDs)."/>
    </extension>
  </extension>
```

**Example instances**

[Organization with funded programme](Organization-organization-funded-programme.html)

---

// File: input/pagecontent/StructureDefinition-information-source-intro.md


**Example of extension**

```

  <name>
    <extension url="http://hl7.org.nz/fhir/StructureDefinition/information-source">
      <valueCodeableConcept>
        <coding>
          <system value="https://standards.digital.health.nz/ns/information-source-code"/>
          <code value="BRCT"/>
          <display value="Birth Certificate"/>
        </coding>
      </valueCodeableConcept>
    </extension>
    <text value="John Doe"/>
    <family value="Doe"/>
    <given value="John"/>
  </name>

```

**Example instances**

[Patient with information source for name](Patient-patient-information-source.html)

---

// File: input/pagecontent/StructureDefinition-long-term-condition-intro.md


**Example of extension**

```
  ...
  <extension url="http://hl7.org.nz/fhir/StructureDefinition/long-term-condition">
    <valueBoolean value="true"/>
  </extension>
  ...

```

**Example instances**

[Condition with Long term indicator set](Condition-condition-long-term-condition.html)

---

// File: input/pagecontent/StructureDefinition-messaging-address-intro.md


**Example of extension**

```

 <extension url="http://hl7.org.nz/fhir/StructureDefinition/messaging-address">
    <extension url="provider">
      <valueString value="healthLink"/>
    </extension>
    <extension url="value">
      <valueString value="abc123"/>
    </extension>
  </extension>

```

**Example instances**

[PractitionerRole with messaging address](PractitionerRole-practitionerRole-messaging-address.html)

---

// File: input/pagecontent/StructureDefinition-nz-citizenship-intro.md


**Example of extension**

```
  ...
  <extension url="http://hl7.org.nz/fhir/StructureDefinition/nz-citizenship">
    <extension url="status">
      <valueCodeableConcept>
        <coding>
          <system value="https://standards.digital.health.nz/ns/nz-citizenship-status-code"/>
          <code value="yes"/>
          <display value="Yes"/>
        </coding>
      </valueCodeableConcept>
    </extension>
    <extension url="source">
      <valueCodeableConcept>
        <coding>
          <system value="https://standards.digital.health.nz/ns/information-source-code"/>
          <code value="BREG"/>
          <display value="Birth Register"/>
        </coding>
      </valueCodeableConcept>
    </extension>
  </extension>
  ...

```

**Example instances**

[Patient with nz-citizenship indicated](Patient-patient-nz-citizenship.html)

---

// File: input/pagecontent/StructureDefinition-nz-ethnicity-intro.md



**Example of extension**

```

  <extension url="http://hl7.org.nz/fhir/StructureDefinition/nz-ethnicity">
    <valueCodeableConcept>
      <coding>
        <system value="https://standards.digital.health.nz/ns/ethnic-group-level-4-code"/>
        <code value="21111"/>
        <display value="Maori"/>
      </coding>
    </valueCodeableConcept>
  </extension>

```

Codes to record a person's ethnicity, drawn from Level 4 of the Ethnicity code system described [here](http://aria.stats.govt.nz/aria/#ClassificationView:uri=http://stats.govt.nz/cms/ClassificationVersion/YVqOcFHSlguKkT17)

**Example instances**

[Patient with ethnicity](Patient-patient-nz-ethnicity.html)



---

// File: input/pagecontent/StructureDefinition-nz-geocode-intro.md


**Example of extension**

```
<extension url = http://hl7.org.nz/fhir/StructureDefinition/nz-geocode>
     <extension url= "latitude">
      <valueDecimal value="-35.99">
    </extension>
    <extension url= "longitude">
      <valueDecimal value="174.47">
    </extension>
    <extension url="datumCode">
      <valueCodeableConcept>
        <coding>
          <system value="https://standards.digital.health.nz/ns/nz-datum-code"/>
          <code value="NZGD2000"/>
          <display value="Nz official datum, used by MoH address service"/>
        </coding>
      </valueCodeableConcept>
    </extension>
</extension>
```

**Example instances**

[Patient with geocoded address](Patient-patient-nz-geocode.html)

---

// File: input/pagecontent/StructureDefinition-nz-residency-status-intro.md


NZ Residency status indicates that a person holds a New Zealand residence class visa.
A residence class visa' includes both a resident visa and a permanent resident visa.

'Residence class visa' is the wording used in Section B3(1) of the 
[Eligibility Direction](https://www.health.govt.nz/system/files/documents/pages/eligibility-direction-2011.pdf)

"A person who holds a residence class visa is eligible to receive services funded under the Act”.


**Example of extension**

```
  ...
  <extension url="http://hl7.org.nz/fhir/StructureDefinition/nz-residency-status">
    <extension url="status">
      <valueCodeableConcept>
        <coding>
          <system value="https://standards.digital.health.nz/ns/nz-residency-status-code"/>
          <code value="yes"/>
          <display value="Yes"/>
        </coding>
      </valueCodeableConcept>
    </extension>
    <extension url="source">
      <valueCodeableConcept>
        <coding>
          <system value="https://standards.digital.health.nz/ns/information-source-code"/>
          <code value="BREG"/>
          <display value="Birth Register"/>
        </coding>
      </valueCodeableConcept>
    </extension>
  </extension>
  ...

```

**Example instances**

[Patient with nz-residency indicated](Patient-patient-nz-residency-status.html)

---

// File: input/pagecontent/StructureDefinition-nzeps-long-term-medication-intro.md


**Example of extension**

```
  ...
  <extension url="http://hl7.org.nz/fhir/StructureDefinition/nzeps-long-term-medication">
    <valueBoolean value="true"/>
  </extension>
  ...

```

**Example instances**

[MedicationRequest with long term medication indicated](MedicationRequest-medicationrequest-nzeps-long-term-medication.html)

---

// File: input/pagecontent/StructureDefinition-nzeps-supply-period-reason-intro.md


**Example of extension**

```
  ...
  <extension url="http://hl7.org.nz/fhir/StructureDefinition/nzeps-supply-period-reason">
    <valueString value="Going overseas"/>
  </extension>
  ...

```

**Example instances**

[MedicationRequest with supply reason](MedicationRequest-medicationrequest-nzeps-supply-period-reason.html)

---

// File: input/pagecontent/StructureDefinition-nzeps-unusual-dose-quantity-intro.md


**Example of extension**

```
  ...
  <extension url="http://hl7.org.nz/fhir/StructureDefinition/nzeps-unusual-dose-quantity">
    <valueBoolean value="true"/>
  </extension>
  ...

```

**Example instances**

[MedicationRequest with unusual dose quantity](MedicationRequest-medicationrequest-nzeps-unusual-dose-quantity.html)

---

// File: input/pagecontent/StructureDefinition-nzpatient-summary.md


This is the summary for the Patient

---

// File: input/pagecontent/StructureDefinition-pho-intro.md


**Example of extension**

```

<extension url="http://hl7.org.nz/fhir/StructureDefinition/pho">
    <valueCodeableConcept>
        <coding>
            <system value="https://standards.digital.health.nz/ns/pho-code"/>
            <version value="1.0"/>
            <code value="G05533-K"/>
            <display value="Procare Networks Ltd"/>
        </coding>
    </valueCodeableConcept>
</extension>

```

**Example instances**

[Patient with PHO](Patient-patient-pho.html)

---

// File: input/pagecontent/StructureDefinition-practitionerRole-creator-intro.md


**Example of extension**

```
  ...
  <extension url="http://hl7.org.nz/fhir/StructureDefinition/practitionerRole-creator">
    <extension url="person">
      <valueReference>
        <reference value="#administrator"/>
      </valueReference>
    </extension>
    <extension url="organization">
      <valueReference>
        <reference value="#mmh"/>
      </valueReference>
    </extension>
  </extension>
  ...

```

**Example instances**

[PractitionerRole with creator](PractitionerRole-practitionerRole-creator.html)

---

// File: input/pagecontent/StructureDefinition-practitionerRole-status-reason-intro.md


**Example of extension**

```

  <extension url="http://hl7.org.nz/fhir/StructureDefinition/practitionerRole-status-reason">
    <valueCodeableConcept>
      <coding>
        <system value="https://standards.digital.health.nz/ns/hpi-practitioner-role-status-reason-code"/>
        <code value="duplicate"/>
        <display value="duplicate"/>
      </coding>
    </valueCodeableConcept>
  </extension>

```

**Example instances**

[PractitionerRole with inactive reason](PractitionerRole-practitionerRole-status-reason.html)

---

// File: input/pagecontent/StructureDefinition-registration-initial-date-intro.md


**Example of extension**

```
<extension url="http://hl7.co.nz/fhir/StructureDefinition/registration-initial-date">
   <valueDateTime value="2020-06-30T00:00:00+00:00" />
</extension>
```

_Note that this is applied to the qualification element, not the resource root. See the full example below._


**Example instances**

[Practitioner with initial date](Practitioner-practitioner-registration-initial-date.html)





---

// File: input/pagecontent/StructureDefinition-registration-status-code-intro.md


**Example of extension**

```
    <extension
               url="http://hl7.org.nz/fhir/StructureDefinition/registration-status-code">
      <extension url="status">
        <valueCodeableConcept>
          <coding>
            <system
                    value="https://standards.digital.health.nz/ns/practitioner-registration-status-code"/>
            <code value="current"/>
            <display
                     value="A provider who holds or is deemed to hold a current practising certificate."/>
          </coding>
        </valueCodeableConcept>
      </extension>
      <extension url="period">
        <valuePeriod>
          <start value="2021-01-01"/>
          <end value="2021-12-31"/>
        </valuePeriod>
      </extension>
    </extension>
```

_Note that this is applied to the qualification element, not the resource root. See the full example below._


**Example instances**

[Practitioner with Scope of Practice](Practitioner-practitioner-registration-status-code.html)


---

// File: input/pagecontent/StructureDefinition-scope-of-practice-intro.md


**Example of extension**

```
    <extension
               url="http://hl7.org.nz/fhir/StructureDefinition/scope-of-practice">
      <extension url="code">
        <valueCodeableConcept>
          <coding>
            <system
                    value="https://standards.digital.health.nz/ns/practitioner-scope-of-practice-code"/>
            <code value="CHIR"/>
            <display value="Chiropractor"/>
          </coding>
        </valueCodeableConcept>
      </extension>
      <extension url="period">
        <valuePeriod>
          <start value="2020-01-01"/>
          <end value="2020-12-31"/>
        </valuePeriod>
      </extension>
    </extension>
```

_Note that this is applied to the qualification element, not the resource root. See the full example below._


**Example instances**

[Practitioner with scope of practice](Practitioner-practitioner-scope-of-practice.html)

---

// File: input/pagecontent/StructureDefinition-sex-at-birth-intro.md


**Example of extension**

```
  ...
  <extension url="http://hl7.org.nz/fhir/StructureDefinition/sex-at-birth">
    <valueCodeableConcept>
      <coding>
        <system value="http://hl7.org/fhir/administrative-gender"/>
        <code value="female"/>
      </coding>
    </valueCodeableConcept>
  </extension>
  ...

```

**Example instances**

[Patient with sex at birth set](Patient-patient-sex-at-birth.html)

---

// File: input/pagecontent/StructureDefinition-suburb-intro.md


**Example of extension**

```
  <address>
    <extension url="http://hl7.org.nz/fhir/StructureDefinition/suburb">
      <valueString value="Cove"/>
    </extension>
    <line value="23 thule st"/>
    <city value="Waipu"/>
  </address>
```

**Example instances**

[Patient with address suburb](Patient-patient-suburb.html)

---

// File: input/pagecontent/terminology.md

### ValueSets

These are ValueSets that have been defined in this guide for coded elements. 

Each ValueSet resource has a globally unique url (the [Canonical](http://hl7.org/fhir/references.html#canonical) url) that is used to unambiguously identify it. 
This url generally should resolve to the to the FHIR ValueSet resource, though the infrastructure 
to support this is not yet in place. There's a [specific note](http://hl7.org/fhir/valueset.html#ident) in the spec on ValueSet identification.

The [FHIR spec](http://hl7.org/fhir/terminology-module.html) has much more detail on the use of Terminology in FHIR.


<table class='table table-bordered table-condensed'>
<tr><th>ValueSet</th><th>Purpose</th><th>Canonical url</th></tr>
<tr><td width='20%'><a href='ValueSet-acc-patient-occupation-valueset.html'>ACC Patient Occupation</a></td><td><p>ValueSet of codes for classifying patient occupations, drawn from the ACC codeset</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/acc-patient-occupation-code</td></tr>
<tr><td width='20%'><a href='ValueSet-practitioner-additional-authorisation-code.html'>Additional Practitioner authorisations</a></td><td><p>A coded type for additional authorisations</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/practitioner-additional-authorisation-code</td></tr>
<tr><td width='20%'><a href='ValueSet-location-alias-type.html'>Alias types</a></td><td><p>The complete set of alias types that apply to Locations and Organizations</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/alias-type-code</td></tr>
<tr><td width='20%'><a href='ValueSet-contact-point-purpose.html'>ContactPoint purpose</a></td><td><p>The purpose of a ContactPoint - what it is used for.</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/contact-point-purpose-code</td></tr>
<tr><td width='20%'><a href='ValueSet-coverage-category.html'>Coverage Category</a></td><td><p>New Zealand codes for Coverage category types</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/coverage-category-code</td></tr>
<tr><td width='20%'><a href='ValueSet-coverage-type.html'>Coverage Type</a></td><td><p>New Zealand codes for Coverage Types</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/coverage-type-code</td></tr>
<tr><td width='20%'><a href='ValueSet-datumCode.html'>Datum code</a></td><td><p>Datum codes used</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/nz-datum-code</td></tr>
<tr><td width='20%'><a href='ValueSet-dod-information-source.html'>Death date Information Source</a></td><td><p>The source from where the date of death was sourced</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/dod-information-source-code</td></tr>
<tr><td width='20%'><a href='ValueSet-dhb.html'>District Health Board Identifer</a></td><td><p>District Health Board Identifer. Assigned by the HPI.</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/dhb-code</td></tr>
<tr><td width='20%'><a href='ValueSet-domicile-code.html'>Domicile Code</a></td><td><p>Domicile Code</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/domicile-code</td></tr>
<tr><td width='20%'><a href='ValueSet-ethnicity.html'>Ethnicity of a person (L4)</a></td><td><p>Codes to record a person&#39;s ethnicity, drawn from <a href="http://aria.stats.govt.nz/aria/#ClassificationView:uri=http://stats.govt.nz/cms/ClassificationVersion/YVqOcFHSlguKkT17">Level 4 of the Ethnicity code system</a></p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/ethnic-group-level-4-code</td></tr>
<tr><td width='20%'><a href='ValueSet-ethnicityfull.html'>Ethnicity of a person (full)</a></td><td><p>Ethnicity New Zealand Standard Classification 2005. Ethnicity is the ethnic group or groups that people identify with or feel they belong to.</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/nz-ethnic-group-code</td></tr>
<tr><td width='20%'><a href='ValueSet-funded-programme.html'>Funded Programme</a></td><td><p>Codes to describe NZ-specific types of funded programmes.</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/funded-programme-code</td></tr>
<tr><td width='20%'><a href='ValueSet-information-source.html'>Information Source</a></td><td><p>The source from where the value of this item was sourced</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/information-source-code</td></tr>
<tr><td width='20%'><a href='ValueSet-iwi.html'>Iwi</a></td><td><p>New Zealand iwi codes.  The 2 digit codes are abstract codes and provided in the expansion for navigational purposes. A user should not select an abstract code directly as a proper value.</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/iwi-code</td></tr>
<tr><td width='20%'><a href='ValueSet-maori-descent-valueset.html'>Māori Descent</a></td><td><p>A code indicating whether a person is of Māori descent</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/maori-descent</td></tr>
<tr><td width='20%'><a href='ValueSet-citizenship-status.html'>NZ Citizenship status</a></td><td><p>Citizenship status</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/nz-citizenship-status-code</td></tr>
<tr><td width='20%'><a href='ValueSet-nz-residency.html'>NZ Residency status</a></td><td><p>Is the person a NZ resident</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/nz-residency-code</td></tr>
<tr><td width='20%'><a href='ValueSet-pho.html'>PHO</a></td><td><p>Primary Healthcare Organization</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/pho-code</td></tr>
<tr><td width='20%'><a href='ValueSet-hpi-practitionerrole-status-reason.html'>PractitionerRole status reason</a></td><td><p>The reason for the change in status of PractitionerRole</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/hpi-practitioner-role-status-reason-code</td></tr>
<tr><td width='20%'><a href='ValueSet-practitioner-registration-status-code.html'>Registration Status of Practitioners</a></td><td><p>The code list represents the current practicing status of the Provider Person as per their registration with an RA.</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/practitioner-registration-status-code</td></tr>
<tr><td width='20%'><a href='ValueSet-practitioner-scope-of-practice.html'>Scope of practice</a></td><td><p>A coded type for professional scope of practice.</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/practitioner-scope-of-practice-code</td></tr>
<tr><td width='20%'><a href='ValueSet-nhi-use.html'>Valid use values for NHI</a></td><td><p>NHI Use codes</p></td><td>https://nzhts.digital.health.nz/fhir/ValueSet/nhi-use-code</td></tr>
</table>
<br/><br/>
### CodeSystems

These are code systems that have been defined in this guide. They define specific concepts that are included in ValueSets. It is preferable to use an international code system such as SNOMED, ICD or LOINC - but this is not always possible.

Each CodeSystem resource has a globally unique url (the canonical url) that is used to unambiguously identify it. The url generally refers to a description of the codesystem, rather than to the FHIR CodeSystem resource.

The [FHIR spec](http://hl7.org/fhir/terminology-module.html) has much more detail on the use of Terminology in FHIR

<table class='table table-bordered table-condensed'>
<tr><th>CodeSystem</th><th>Purpose</th><th>Canonical Url</th></tr>
<tr><td width='20%'><a href='CodeSystem-acc-patient-occupation-codesystem.html'>ACC Patient Occupation CodeSystem</a></td><td><p>Codes for classifying patient occupations, drawn from the ACC codeset</p></td><td>https://standards.digital.health.nz/ns/acc-patient-occupation-code</td></tr>
<tr><td width='20%'><a href='CodeSystem-practitioner-additional-authorisation.html'>Additional Authorisation</a></td><td><p>Additional authorisations that a practitioner is authorised to practice or prescribe.</p></td><td>https://standards.digital.health.nz/ns/practitioner-additional-authorisation-code</td></tr>
<tr><td width='20%'><a href='CodeSystem-contact-point-purpose.html'>ContactPoint purpose</a></td><td><p>The purpose of a ContactPoint - what it is used for.</p></td><td>https://standards.digital.health.nz/ns/contact-point-purpose-code</td></tr>
<tr><td width='20%'><a href='CodeSystem-coverage-category.html'>Coverage category</a></td><td><p>New Zealand codes for Coverage category types</p></td><td>https://standards.digital.health.nz/ns/coverage-category-code</td></tr>
<tr><td width='20%'><a href='CodeSystem-coverage-type.html'>Coverage type</a></td><td><p>New Zealand codes for Coverage Types</p></td><td>https://standards.digital.health.nz/ns/coverage-type-code</td></tr>
<tr><td width='20%'><a href='CodeSystem-datum-code.html'>Datum codes</a></td><td><p>Possible datum codes</p></td><td>https://standards.digital.health.nz/ns/nz-datum-code</td></tr>
<tr><td width='20%'><a href='CodeSystem-domicile-code.html'>Domicile Code</a></td><td><p>Domicile Code</p></td><td>https://standards.digital.health.nz/ns/domicile-code</td></tr>
<tr><td width='20%'><a href='CodeSystem-funded-programme.html'>Funded Programme</a></td><td><p>Codes to describe NZ-specific types of funded programmes.</p></td><td>https://standards.digital.health.nz/ns/funded-programme-code</td></tr>
<tr><td width='20%'><a href='CodeSystem-information-source.html'>Information Source</a></td><td><p>All possible sources of information</p></td><td>https://standards.digital.health.nz/ns/information-source-code</td></tr>
<tr><td width='20%'><a href='CodeSystem-ethnicityL4.html'>Level 4 ethnicity codes</a></td><td><p>Codes to record a person’s ethnicity, drawn from Level 4 of the Ethnicity code system 
described <a href="http://aria.stats.govt.nz/aria/#ClassificationView:uri=http://stats.govt.nz/cms/ClassificationVersion/YVqOcFHSlguKkT17">here</a></p></td><td>https://standards.digital.health.nz/ns/ethnic-group-level-4-code</td></tr>
<tr><td width='20%'><a href='CodeSystem-maori-descent-codesystem.html'>Māori Descent</a></td><td><p>Codes for classifying Māori descent. Defined by Stats NZ - Māori descent v1.0.0</p></td><td>https://standards.digital.health.nz/ns/maori-descent-code</td></tr>
<tr><td width='20%'><a href='CodeSystem-citizenship-status.html'>NZ Citizenship status</a></td><td><p>Is this person a NZ Citizen</p></td><td>https://standards.digital.health.nz/ns/nz-citizenship-status-code</td></tr>
<tr><td width='20%'><a href='CodeSystem-dhb-code.html'>NZ DHB</a></td><td><p>NZ District Health Board (HPI-ORG) Codes</p></td><td>https://standards.digital.health.nz/ns/dhb-code</td></tr>
<tr><td width='20%'><a href='CodeSystem-iwi-code.html'>NZ Iwi</a></td><td><p>NZ Iwi Statistical Standard</p></td><td>https://standards.digital.health.nz/ns/iwi-code</td></tr>
<tr><td width='20%'><a href='CodeSystem-nz-residency.html'>NZ Residency status</a></td><td><p>NZ Residency status</p></td><td>https://standards.digital.health.nz/ns/nz-residency-code</td></tr>
<tr><td width='20%'><a href='CodeSystem-Ethnicity.html'>NZ ethnic group codes</a></td><td><p>Ethnicity New Zealand Standard Classification 2005. Ethnicity is the ethnic group or groups that people identify with or feel they belong to.</p></td><td>https://standards.digital.health.nz/ns/nz-ethnic-group-codes</td></tr>
<tr><td width='20%'><a href='CodeSystem-pho-status.html'>PHO</a></td><td><p>Primary Healthcare Organization</p></td><td>https://standards.digital.health.nz/ns/pho-code</td></tr>
<tr><td width='20%'><a href='CodeSystem-hpi-practitionerRole-status-reason.html'>PractitionerRole status reason</a></td><td><p>The reason for the change in status of PractitionerRole</p></td><td>https://standards.digital.health.nz/ns/hpi-practitioner-role-status-reason-code</td></tr>
<tr><td width='20%'><a href='CodeSystem-practitioner-registration-status-code.html'>Registration Status of Practitioners</a></td><td><p>The code list represents the current practicing status of the Provider Person as per their registration with an RA.</p></td><td>https://standards.digital.health.nz/ns/practitioner-registration-status-code</td></tr>
<tr><td width='20%'><a href='CodeSystem-scopeOfPractice.html'>Scope of practice</a></td><td><p>A classification of the type or range of health services that a practitioner is authorised to provide, as determined by the Responsible Authority or other statutory authority (e.g. PHARMAC), that is, what the practitioner can or cannot do. It includes Scope of Practice as defined by the Health Practitioners Competence Assurance Act 2003, any special authorisations granted, and any conditions or limitations imposed by the Responsible Authority.</p></td><td>https://standards.digital.health.nz/ns/practitioner-scope-of-practice-code</td></tr>
<tr><td width='20%'><a href='CodeSystem-alias-type.html'>Type of Alias</a></td><td><p>Used in Organization and Location to indicate what is the type of Alias</p></td><td>https://standards.digital.health.nz/ns/alias-type-code</td></tr>
</table>

---

// File: input/fsh/extensions/acc-patient-occupation.fsh

Extension: AccPatientOccupation
Id: acc-patient-occupation
Description: "Codes to describe a patient's occupation, using ACC's patient occupation codeset. 

Note that the current ValueSet binding contains codes from NZSC099. ACC are planning to update this ValueSet to base the codes on ANZSCO at the request of Stats NZ (Timing TBC), so the binding strength has been left as 'example'."

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/acc-patient-occupation"
// * ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^version = "1.0.0"
* ^status = #active
* ^context[0].type = #element
* ^context[0].expression = "Patient"
* extension 0..0
* value[x] only CodeableConcept
* valueCodeableConcept from https://nzhts.digital.health.nz/fhir/ValueSet/acc-patient-occupation-code (example)

---

// File: input/fsh/extensions/additional-authorisation.fsh

Extension: AdditionalAuthorisation
Id: additional-authorisation
Description: "Additional authorisations that a practitioner is authorised to perform in addition to their registration and scope of practice. Examples include:
* Prescribing authorisation for a nurse practitioner
* Authorisation to administer immunisations"

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/additional-authorisation"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^version = "1.0.0"
* ^status = #active

* ^context.type = #element
* ^context.expression = "Practitioner.qualification"

* extension contains
    code 0..1 and
    period 0..1

// definitions of sub-extensions
* extension[code].url = "code" (exactly)
* extension[code] ^definition = "A code identifying the additional authorisations that a practitioner is authorised to perform"
* extension[code].value[x] only CodeableConcept
* extension[code].valueCodeableConcept from https://nzhts.digital.health.nz/fhir/ValueSet/practitioner-additional-authorisation-code (preferred)

* extension[period].url = "period" (exactly)
* extension[period] ^definition = "The period the additional authorisation is effective"
* extension[period].value[x] only Period


---

// File: input/fsh/extensions/alias-type.fsh

Extension: AliasType
Id: alias-type
Description: "Used to indicate what sort of alias is being used in a Location or Organization - eg that it is a legal name."

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/alias-type"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^version = "1.0.0"
* ^status = #active

* ^context[+].type = #element
* ^context[=].expression = "Location.alias"

* ^context[+].type = #element
* ^context[=].expression = "Organization.alias"

* extension 0..0

//The dataype is fixed to CodeableConcept, and bound to the full set of alias types
// but the organization and location profiles in the HPI profiles restrict each to a sub-set of aliases...
* value[x] only CodeableConcept
* valueCodeableConcept from $alias-type-vs (preferred)



---

// File: input/fsh/extensions/building-name.fsh

Extension: Building_name
Id: building-name
Title: "Building Name"
Description: "The name of a building cited in an address."
* ^url = "http://hl7.org.nz/fhir/StructureDefinition/building-name"
* ^version = "0.1.0"
* ^status = #active
* ^date = "2020-07-20"
* ^publisher = "HL7 New Zealand"
* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work
* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ
* ^copyright = "HL7 New Zealand© 2020+; Licensed Under Creative Commons No Rights Reserved."
* ^context[0].type = #element
* ^context[0].expression = "Address"
* value[x] only string

---

// File: input/fsh/extensions/condition-on-practice.fsh

Extension: ConditionOnPractice
Id: condition-on-practice
Description: "A full description of the conditions the health practitioner is subject to in relation to their scope of practice."

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/condition-on-practice"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^version = "1.0.0"
* ^context.type = #element
* ^context.expression = "Practitioner.qualification"

* extension contains
    description 0..1 and
    period 0..1

* ^status = #active

// definitions of sub-extensions
* extension[description].url = "description" (exactly)
* extension[description] ^definition = "The condition on practice as text"
* extension[description].value[x] only string

* extension[period].url = "period" (exactly)
* extension[period] ^definition = "The period the conditions on practice are effective"
* extension[period].value[x] only Period


---

// File: input/fsh/extensions/contact-purpose.fsh

Extension: Contactpoint_purpose
Id: contactpoint-purpose
Title: "A specific purpose for which this ContactPoint dataType would be used"
Description: "A specific purpose for which this ContactPoint dataType would be used. An example would be to indicate that this ContactPoint is used for video conferencing."

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/contactpoint-purpose"

* ^version = "1.0"
* ^status = #active
* ^date = "2020-07-20"
* ^publisher = "HL7 New Zealand"
* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work
* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ
* ^copyright = "HL7 New Zealand© 2020+; Licensed Under Creative Commons No Rights Reserved."

* ^context[0].type = #element
* ^context[0].expression = "ContactPoint"

* value[x] only CodeableConcept
* valueCodeableConcept from $contact-point-purpose-vs (preferred)


---

// File: input/fsh/extensions/country-name.fsh

Extension: Country_name
Id: country-name
Title: "Country Name"
Description: "The display name for a country in an address."
* ^url = "http://hl7.org.nz/fhir/StructureDefinition/country-name"
* ^version = "0.1.0"
* ^status = #draft
* ^date = "2023-05-20"
* ^publisher = "HL7 New Zealand"
* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work
* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ
* ^copyright = "HL7 New Zealand© 2020+; Licensed Under Creative Commons No Rights Reserved."
* ^context[0].type = #element
* ^context[0].expression = "Address"
* value[x] only string

---

// File: input/fsh/extensions/death-date.fsh

Extension: Death_date
Id: death-date
Title: "Date of death"
Description: "The date of death of the individual, plus the source of that information"
* ^url = "http://hl7.org.nz/fhir/StructureDefinition/death-date"

* ^version = "0.1.0"
* ^status = #active
* ^date = "2020-07-20"
* ^publisher = "HL7 New Zealand"

* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work

* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ

* ^copyright = "HL7 New Zealand© 2020+; Licensed Under Creative Commons No Rights Reserved."

* ^context[+].type = #element
* ^context[=].expression = "Practitioner"

* extension contains
    date 0..1 and
    source 0..1 



// definitions of sub-extensions
* extension[date].url = "date" (exactly)
* extension[date] ^definition = "The date of death"
* extension[date] ^short = "The date of death"
* extension[date].value[x] only dateTime

* extension[source].url = "source" (exactly)
* extension[source] ^definition = "The source of information"
* extension[source] ^short = "The source of information"
* extension[source].value[x] only CodeableConcept
* extension[source].valueCodeableConcept from $dod-information-source-vs (preferred)



---

// File: input/fsh/extensions/dhb.fsh

Extension: Dhb
Id: dhb
Title: "District Health Board linked to a NZ Healthcare Service, Location or Patient"
Description: "District Health Board relating to a NZ Healthcare Service, Location (Facility) or Patient (primary, physical home address)."

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/dhb"

* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm"
* ^extension.valueInteger = 3
* ^status = #active
* ^version = "1.0"
* ^date = "2020-07-31"
* ^publisher = "HL7 New Zealand"
* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work

* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ

* ^purpose = "Administrative - to allow NZ HealthcareService, Location (Facility) or Patient Resources to include the related District Health Board."
* ^copyright = "HL7 New Zealand© 2020+; Licensed Under Creative Commons No Rights Reserved."
* ^context[0].type = #element
* ^context[0].expression = "HealthcareService"
* ^context[1].type = #element
* ^context[1].expression = "Location"
* ^context[2].type = #element
* ^context[2].expression = "Patient"

* value[x] only CodeableConcept
* value[x] from $dhb-code-vs (extensible)

* value[x] ^label = "DHB Code"
* value[x] ^short = "NZ District Health Boards"
* value[x] ^definition = "NZ District Health Boards as defined in the NZ Health Provider Index Listing published by the NZ Ministry of Health each month."
* value[x] ^requirements = "The NzDHB ValueSet should be used as this provides the correct NZ HPI-ORG ID for each of the 20 District Health Boards.The binding strength is extensible as this is the most suitable option for a Codeable Concept data type."

* value[x] ^example[0].label = "Waikato DHB"
* value[x] ^example[0].valueCodeableConcept.coding[0].version = "1.0"
* value[x] ^example[0].valueCodeableConcept.coding[0] = $dhb-code-cs#G00027-C "Waikato District Health Board"
* value[x] ^isModifier = false
* value[x] ^binding.description = "NZ HPI-ORG Values for DHBs"

---

// File: input/fsh/extensions/domicile-code.fsh

Extension: Domicile_code
Id: domicile-code
Title: "NZ Domicile Code"
Description: "NZ Domicile Code. Derived from a patient's primary physical, home address."
* ^url = "http://hl7.org.nz/fhir/StructureDefinition/domicile-code"

* ^version = "0.1.0"
* ^status = #active
* ^date = "2020-07-20"
* ^publisher = "HL7 New Zealand"
* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work
* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ
* ^copyright = "HL7 New Zealand© 2020+; Licensed Under Creative Commons No Rights Reserved."

* ^context[+].type = #element
* ^context[=].expression = "Patient"

* ^context[+].type = #element
* ^context[=].expression = "Address"

* value[x] only CodeableConcept
* valueCodeableConcept 0..1
* valueCodeableConcept from $domicile-code-vs (preferred)

---

// File: input/fsh/extensions/edi-address.fsh

Extension: Edi_address
Id: edi-address
Title: "EDI Address"
Description: "Represents an Electronic Data Interchange (EDI) address. It is intended as an extension on ContactPoint.system, with the system value being 'other'. The value of the extension is the EDI supplier, the actual EDI address is the value element. Note that a new extension 'messaging address' is preferred."



* ^url = "http://hl7.org.nz/fhir/StructureDefinition/edi-address"

* ^version = "0.1.0"
* ^status = #active
* ^date = "2020-07-20"
* ^publisher = "HL7 New Zealand"
* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work
* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ
* ^copyright = "HL7 New Zealand© 2020+; Licensed Under Creative Commons No Rights Reserved."

* ^context[+].type = #element
* ^context[=].expression = "ContactPoint.system"



* value[x] only string

---

// File: input/fsh/extensions/educational-qualification.fsh

Extension: EducationalQualification
Id: educational-qualification
Description: "Educational qualifications a practitioner has. These may or may not be related to registration information."

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/educational-qualification"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^version = "1.0.0"
* ^context[0].type = #element
* ^context[0].expression = "Practitioner"

//* ^context.type = #element
//* ^context.expression = "Practitioner"

* extension contains
    fullname 0..1 and
    shortname 0..1 and
    year 0..1 and
    institution 0..1 and
    city 0..1 and
    country 0..1 and 
    country-name 0..1
* ^status = #active

// definitions of sub-extensions
* extension[fullname].url = "fullname" (exactly)
* extension[fullname] ^definition = "The full name of the educational qualification"
* extension[fullname] ^short = "The full name of the educational qualification"
* extension[fullname].value[x] only string

* extension[shortname].url = "shortname" (exactly)
* extension[shortname] ^definition = "A short name of the educational qualification for when space is limited"
* extension[shortname] ^short = "A short name of the educational qualification for when space is limited"
* extension[shortname].value[x] only string

* extension[year].url = "year" (exactly)
* extension[year] ^definition = "The year in which the qualification was granted"
* extension[year] ^short = "The year in which the qualification was granted"
* extension[year].value[x] only date

* extension[institution].url = "institution" (exactly)
* extension[institution] ^definition = "The institution that granted the qualification"
* extension[institution] ^short = "The institution that granted the qualification"
* extension[institution].value[x] only string

* extension[city].url = "city" (exactly)
* extension[city] ^definition = "The city where the institution is located"
* extension[city] ^short = "The city where the institution is located"
* extension[city].value[x] only string

* extension[country].url = "country" (exactly)
* extension[country] ^definition = "The country (as iso country code) where the institution is located"
* extension[country] ^short = "The country (as iso country code) where the institution is located"
* extension[country].value[x] only string

* extension[country-name].url = "country-name" (exactly)
* extension[country-name] ^definition = "The country name (as text) where the institution is located"
* extension[country-name] ^short = "The country name (as text) where the institution is located"
* extension[country-name].value[x] only string

---

// File: input/fsh/extensions/established.fsh

Extension: Established
Id: established
Description: "The period over which the location or Organization is open"
* ^url = "http://hl7.org.nz/fhir/StructureDefinition/established"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^version = "1.0.0"
* ^context[+].type = #element
* ^context[=].expression = "Location"

* ^context[+].type = #element
* ^context[=].expression = "Organization"

* ^status = #active


* extension 0..0
* value[x] only Period

---

// File: input/fsh/extensions/funded-programme.fsh

Extension: Funded_programme
Id: funded-programme
Title: "Funded Healthcare Programme"
Description: "Funded NZ Healthcare Programmes"

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/funded-programme"

* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm"
* ^extension.valueInteger = 1
* ^version = "1.0"
* ^status = #active
* ^date = "2021-02-08"
* ^publisher = "HL7 New Zealand"
* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work
* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ
* ^purpose = "Details of a NZ Healthcare Funded Programme relevant to its implementation status at an individual organisation, facility or service."
* ^copyright = "HL7 New Zealand© 2021+; Licensed Under Creative Commons No Rights Reserved."

* ^context[0].type = #element
* ^context[0].expression = "Location"

* ^context[1].type = #element
* ^context[1].expression = "Organization"

* ^context[2].type = #element
* ^context[2].expression = "HealthcareService"
* extension contains 
    fundedProgramme 0..1 and
    currentAvailability 0..1 and 
    notes 0..1


* extension[fundedProgramme] ^definition = "The type of healthcare programme"
* extension[fundedProgramme].url = "fundedProgramme" (exactly)
* extension[fundedProgramme].value[x] only CodeableConcept
* extension[fundedProgramme].valueCodeableConcept from $funded-programme-vs (required)


* extension[currentAvailability] ^definition = "The current status"
* extension[currentAvailability].url = "currentAvailability" (exactly)
* extension[currentAvailability].value[x] only boolean

* extension[notes].value[x] only string
* extension[notes] ^definition = "Further details about the programme and status."
* extension[notes].url = "notes" (exactly)



---

// File: input/fsh/extensions/gender-original-text.fsh

Extension: GenderOriginalText
Id: gender-original-text
Description: "Text provided by the person with the choice of 'Another gender' (The FHIR AdministrativeGender CodeSystem codes this as '[other](http://hl7.org/fhir/R4B/codesystem-administrative-gender.html)')."

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/gender-original-text"
//* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^version = "1.0.0"
* ^context.type = #element
* ^context.expression = "Patient.gender"

* extension 0..0
* value[x] only string

---

// File: input/fsh/extensions/Information-source.fsh

Extension: Information_source
Id: information-source
Title: "Information Source"
Description: "The official source of information held about a patient."
* ^url = "http://hl7.org.nz/fhir/StructureDefinition/information-source"

* ^version = "0.1.0"
* ^status = #active
* ^date = "2020-07-20"
* ^publisher = "HL7 New Zealand"

* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work

* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ

* ^copyright = "HL7 New Zealand© 2020+; Licensed Under Creative Commons No Rights Reserved."

* ^context[+].type = #element
* ^context[=].expression = "Patient.name"

* ^context[+].type = #element
* ^context[=].expression = "Patient.birthDate"

//* ^context[+].type = #element
//* ^context[=].expression = "Patient.deceasedDateTime"

* ^context[+].type = #element
* ^context[=].expression = "Patient.deceased.ofType(dateTime)"


* value[x] only CodeableConcept
* valueCodeableConcept 0..1
* valueCodeableConcept from $information-source-vs (preferred)

---

// File: input/fsh/extensions/long-term-condition.fsh

Extension: Long_term_condition
Id: long-term-condition
Title: "Long Term Condition Indicator"
Description: "Long Term Condition Indicator. A long term condition can be defined as any ongoing, long term or recurring conditions that can have a significant impact on people’s lives."
* ^url = "http://hl7.org.nz/fhir/StructureDefinition/long-term-condition"

* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm"
* ^extension.valueInteger = 1

* ^version = "1.0"
* ^status = #active
* ^date = "2020-08-20"
* ^publisher = "HL7 New Zealand"

* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work
* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ

* ^purpose = "For more info see [https://www.tewhatuora.govt.nz/for-the-health-sector/health-sector-guidance/diseases-and-conditions/long-term-conditions](https://www.tewhatuora.govt.nz/for-the-health-sector/health-sector-guidance/diseases-and-conditions/long-term-conditions)."
* ^copyright = "HL7 New Zealand© 2020+; Licensed Under Creative Commons No Rights Reserved."
//* ^kind = #primitive-type

* ^context[0].type = #element
* ^context[0].expression = "Condition"

* value[x] only boolean
* value[x] ^label = "long-term-condition"
* value[x] ^short = "Long Term Condition"
* value[x] ^definition = "Long Term Condition Indicator"
* value[x] ^isModifier = false

---

// File: input/fsh/extensions/maori-descent.fsh

Extension: MaoriDescent
Id: maori-descent
Description: "Code indicating whether the person is of Māori descent"
* ^url = "http://hl7.org.nz/fhir/StructureDefinition/maori-descent"
* ^version = "1.0.0"
* ^context.type = #element
* ^context.expression = "Patient"
* value[x] only CodeableConcept
* valueCodeableConcept from https://nzhts.digital.health.nz/fhir/ValueSet/maori-descent (preferred)



---

// File: input/fsh/extensions/messaging-address.fsh

Extension: Messaging_address
Id: messaging-address
Title: "Messaging Address"
Description: "The address to where electronic communications might be sent. For historical reasons, there is an overlap with edi-address."

* ^url = $messagingAddress

* ^version = "0.1.0"
* ^status = #active
* ^date = "2022-07-20"
* ^publisher = "HL7 New Zealand"

* ^context[+].type = #element
* ^context[=].expression = "Patient"

* ^context[+].type = #element
* ^context[=].expression = "Location"

* ^context[+].type = #element
* ^context[=].expression = "Organization"

* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"

* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"

* ^context[+].type = #element
* ^context[=].expression = "Practitioner"

* extension contains
    provider 1..1 and
    value 1..1 

* extension[provider] ^definition = "The messaging provider"
* extension[provider].value[x] only string  //could be code, but need a vs

* extension[value] ^definition = "The identifier supplied by the provider"
* extension[value].value[x] only string



//-- complex with provider (code) value (string)

/*
* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work
* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ
* ^copyright = "HL7 New Zealand© 2020+; Licensed Under Creative Commons No Rights Reserved."

* ^context[+].type = #element
* ^context[=].expression = "ContactPoint.system"



* value[x] only string
*/

---

// File: input/fsh/extensions/nz-citizenship.fsh

Extension: Nz_citizenship
Id: nz-citizenship
Title: "NZ Citizenship"
Description: "New Zealand citizenship"
* ^url = "http://hl7.org.nz/fhir/StructureDefinition/nz-citizenship"

* ^version = "1.1.0"
* ^status = #active
* ^date = "2020-07-20"
* ^publisher = "HL7 New Zealand"
* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work
* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ
* ^copyright = "HL7 New Zealand© 2020+; Licensed Under Creative Commons No Rights Reserved."
* ^context[0].type = #element
* ^context[0].expression = "Patient"

* extension contains
    status 0..1 and
    source 0..1

* extension[status] ^definition = "No description"
* extension[status].value[x] only CodeableConcept
//* extension[status].valueCodeableConcept 0..1
* extension[status].valueCodeableConcept from $citizenship-status-vs (preferred)

* extension[source] ^definition = "No description"
* extension[source].value[x] only CodeableConcept
//* extension[source].valueCodeableConcept 0..1
* extension[source].valueCodeableConcept from $information-source-vs (preferred)

---

// File: input/fsh/extensions/nz-ethnicity.fsh

Extension: Nz_ethnicity
Id: nz-ethnicity
Title: "NZ Ethnicity"
Description: """
The ethnic group or groups that a person identifies with or feels they belong to.  Ethnicity is a measure of cultural affiliation as opposed to race, ancestry, nationality or citizen.  Ethnicity is self-perceived and a person can belong to more than one group.

The Stats New Zealand standard can be found [here](http://aria.stats.govt.nz/aria/#ClassificationView:uri=http://stats.govt.nz/cms/ClassificationVersion/YVqOcFHSlguKkT17).
"""
//The Stats New Zealand standard can be found [here](http://aria.stats.govt.nz/aria/#StandardView:uri=http://stats.govt.nz/cms/StatisticalStandard/vv0ovwUoTSSVDhpt).

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/nz-ethnicity"

* ^version = "0.1.0"
* ^status = #active
* ^date = "2020-07-20"
* ^publisher = "HL7 New Zealand"
* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work
* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ
* ^copyright = "HL7 New Zealand© 2020+; Licensed Under Creative Commons No Rights Reserved."
* ^context[0].type = #element
* ^context[0].expression = "Patient"
* ^context[1].type = #element
* ^context[1].expression = "Practitioner"
* ^context[2].type = #element
* ^context[2].expression = "RelatedPerson"

* value[x] only CodeableConcept
* valueCodeableConcept 1..1
* valueCodeableConcept from $ethnicity-code-vs (preferred)

---

// File: input/fsh/extensions/nz-geocode.fsh

Extension: Nz_geocode
Id: nz-geocode
Title: "NZ Geocode"
Description: "New Zealand Geocode. This uses a different datum from that defined in the HL7 FHIR specification for a Geocode."
* ^url = "http://hl7.org.nz/fhir/StructureDefinition/nz-geocode"

* ^version = "0.1.0"
* ^status = #active
* ^date = "2020-07-20"
* ^publisher = "HL7 New Zealand"

* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work

* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ
* ^copyright = "HL7 New Zealand© 2020+; Licensed Under Creative Commons No Rights Reserved."

* ^context[0].type = #element
* ^context[0].expression = "Address"

* extension contains
    latitude 1..1 and
    longitude 1..1 and 
    datumCode 0..1

* extension[latitude] ^definition = "The latitude of the geocode"
* extension[latitude].value[x] only decimal

* extension[longitude] ^definition = "The longitude of the geocode"
* extension[longitude].value[x] only decimal

* extension[datumCode] ^definition = "The datum used for the lat/long"
* extension[datumCode].value[x] only CodeableConcept
* extension[datumCode].valueCodeableConcept from $datum-code-vs (preferred)

ValueSet: DatumCode
Id: datumCode
Title: "Datum code"
Description: "Datum codes used"

* ^version = "1.0.0"
* ^url = $datum-code-vs
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ

* codes from system $datum-code-cs


CodeSystem: DatumCode
Id: datum-code
Title: "Datum codes"
Description: "Possible datum codes"

* ^version = "1.0.0"
* ^url = $datum-code-cs
* ^caseSensitive = true
//* status = #draft
//* content = #complete

* #WGS84 "WGS84" "global datum, used by google maps"
* #NZGD2000 "NZGD2000" "Nz official datum, used by MoH address service"

---

// File: input/fsh/extensions/nz-iwi.fsh

Extension: Nz_iwi
Id: nz-iwi
Description: "Persons Iwi affiliation"

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/nz-iwi"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^version = "1.0.0"
* ^status = #active
* ^context[0].type = #element
* ^context[0].expression = "Patient"
* ^context[+].type = #element
* ^context[=].expression = "Practitioner"
* ^context[+].type = #element
* ^context[=].expression = "RelatedPerson"

* extension 0..0
* value[x] only CodeableConcept
* valueCodeableConcept from $iwi-vs (preferred)

---

// File: input/fsh/extensions/nz-residency.fsh

Extension: NZResidency
Id: nz-residency
Description: "NZ Residency status"

/*
Description: """
NZ Residency status indicates that a person holds a New Zealand residence class visa.
A residence class visa' includes both a resident visa and a permanent resident visa.

'Residence class visa' is the wording used in Section B3(1) of the 
[Eligibility Direction](https://www.health.govt.nz/system/files/documents/pages/eligibility-direction-2011.pdf)

A person who holds a residence class visa is eligible to receive services funded under the Act”.

"""

*/


* ^url = $nzResidency
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^version = "1.0.0"
* ^status = #active
* ^context.type = #element
* ^context.expression = "Patient"

* extension contains
    status 0..1 and
    source 0..1     

* extension[status] ^definition = "Residency Status"
* extension[status].value[x] only CodeableConcept
* extension[status].valueCodeableConcept from $nz-residency-vs (preferred)

* extension[source] ^definition = "The source of information concerning the residency"
* extension[source].value[x] only CodeableConcept
* extension[source].valueCodeableConcept from $information-source-vs (preferred)



---

// File: input/fsh/extensions/nzeps-long_term-medication.fsh

Extension: Nzeps_long_term_medication
Id: nzeps-long-term-medication
Title: "NZePS Long Term Medication Indicator"
Description: "NZePS Long Term Medication Indicator"
* ^url = "http://hl7.org.nz/fhir/StructureDefinition/nzeps-long-term-medication"

* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm"
* ^extension.valueInteger = 2
* ^version = "1.0"
* ^status = #active
* ^date = "2020-08-20"
* ^publisher = "HL7 New Zealand"
* ^purpose = "This has specific uses in NZ Pharmacy and GP systems for funding and clinical purposes. It is also part of the HISO 10041.1 standard for Medication Lists."
* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work
* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ

* ^copyright = "HL7 New Zealand© 2020+; Licensed Under Creative Commons No Rights Reserved."
//* ^kind = #primitive-type
* ^context[+].type = #element
* ^context[=].expression = "MedicationRequest"

* ^context[+].type = #element
* ^context[=].expression = "MedicationStatement"


* value[x] only boolean
* value[x] ^label = "NZePS-long-term-medication"
* value[x] ^short = "NZePS Long Term Medication"
* value[x] ^definition = "NZePS Long Term Medication Indicator"
* value[x] ^isModifier = false

---

// File: input/fsh/extensions/nzeps-supply-period-reason.fsh

Extension: Nzeps_supply_period_reason
Id: nzeps-supply-period-reason
Title: "NZePS Supply Period Reason"
Description: "The reason for a non-standard Supply Period."
* ^url = "http://hl7.org.nz/fhir/StructureDefinition/nzeps-supply-period-reason"

* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm"
* ^extension.valueInteger = 1
* ^status = #active
* ^version = "1.0"
* ^date = "2020-07-20"
* ^publisher = "HL7 New Zealand"

* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work
* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ

* ^purpose = "The reason for a non-standard supply period, e.g. the patient going abroad."
* ^copyright = "HL7 New Zealand© 2020+; Licensed Under Creative Commons No Rights Reserved."
//* ^kind = #primitive-type

* ^context[0].type = #element
* ^context[0].expression = "MedicationRequest"

* value[x] only string
* value[x] ^label = "NZePS-supply-period-reason"
* value[x] ^short = "NZePS Supply Period Reason"
* value[x] ^definition = "The reason for a non-standard supply period."
* value[x] ^isModifier = false

---

// File: input/fsh/extensions/nzeps-unusual-dose-quantity.fsh

Extension: Nzeps_unusual_dose_quantity
Id: nzeps-unusual-dose-quantity
Title: "NZePS Unusual Dose Quantity Indicator"
Description: "NZePS Unusual Dose Quantity Indicator"
* ^url = "http://hl7.org.nz/fhir/StructureDefinition/nzeps-unusual-dose-quantity"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm"
* ^extension.valueInteger = 1
* ^status = #active
* ^version = "1.0"
* ^date = "2020-07-20"
* ^publisher = "HL7 New Zealand"

* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work

* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ
* ^purpose = "Indicates if an unusual dose quantity has been prescribed deliberately."
* ^copyright = "HL7 New Zealand© 2020+; Licensed Under Creative Commons No Rights Reserved."
//* ^kind = #primitive-type

* ^context[0].type = #element
* ^context[0].expression = "MedicationRequest"

* value[x] only boolean
* value[x] ^label = "NZePS-unusual-dose-quantity"
* value[x] ^short = "NZePS Unusual Dose Quantity Indicator"
* value[x] ^definition = "Indicates if an unusual dose quantity has been prescribed deliberately."
* value[x] ^isModifier = false

---

// File: input/fsh/extensions/nzf-atc.fsh

Extension: Nzf_atc
Id: nzf-atc
Description: "Anatomical Therapeutic Chemical (ATC) Classification - see https://www.who.int/tools/atc-ddd-toolkit/atc-classification"
* ^url = "http://hl7.org.nz/fhir/StructureDefinition/nzf-atc"
* ^version = "0.1.0"
* ^status = #active
* ^date = "2022-08-25T23:28:05+00:00"
* ^publisher = "New Zealand Medicines Formulary LP"
* ^contact.name = "New Zealand Medicines Formulary LP"
* ^contact.telecom.system = #email
* ^contact.telecom.value = "mailto:reuben@illuminsoftware.com"
* ^jurisdiction = urn:iso:std:iso:3166#NZ
* ^context.type = #element
* ^context.expression = "Medication"
* . ^definition = "Anatomical Therapeutic Chemical (ATC) Classification - see https://www.who.int/tools/atc-ddd-toolkit/atc-classification"
* value[x] only CodeableConcept
* value[x] from $atc-code (required)

---

// File: input/fsh/extensions/nzf-nzmt-type.fsh

Extension: Nzf_nzmt_type
Id: nzf-nzmt-type
Description: "The NZ Medicines Terminology (NZMT) Data Class – MP (Medicinal Product), MPUU (Medicinal Product Unit of Use), MPP (Medicinal Product Pack), TP (Trade Product), TPUU (Trade Product Unit of Use), TPP (Trade Product Pack) or CTPP (Containered Trade Product Pack) – that the Medication is a member of."
* ^url = "http://hl7.org.nz/fhir/StructureDefinition/nzf-nzmt-type"
* ^version = "0.1.0"
* ^status = #draft
* ^date = "2022-08-25T23:28:05+00:00"
* ^publisher = "New Zealand Medicines Formulary LP"
* ^contact.name = "New Zealand Medicines Formulary LP"
* ^contact.telecom.system = #email
* ^contact.telecom.value = "mailto:reuben@illuminsoftware.com"
* ^jurisdiction = urn:iso:std:iso:3166#NZ
* ^context.type = #element
* ^context.expression = "Medication"
* . ^definition = "Type of NZMT record (e.g. MP, MPUU)"
* url = "http://hl7.org.nz/fhir/StructureDefinition/nzf-nzmt-type" (exactly)
* value[x] only CodeableConcept
* valueCodeableConcept 0..1
* valueCodeableConcept from $nzmt-type (required)

---

// File: input/fsh/extensions/pho.fsh

Extension: Pho
Id: pho
Title: "Primary Healthcare Organisation"
Description: "Primary Healthcare Organisation associated with a General Practice linked to a NZ Healthcare Service, Location (Facility) or Patient (GP)."
* ^url = "http://hl7.org.nz/fhir/StructureDefinition/pho"

* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm"
* ^extension.valueInteger = 1
* ^status = #active
* ^version = "1.0"
* ^date = "2020-11-06"
* ^publisher = "HL7 New Zealand"

* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work

* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ

* ^purpose = "Administrative - to allow NZ HealthcareService, Location (Facility) or Patient Resources to include the related Primary Healthcare Organisation."
* ^copyright = "HL7 New Zealand© 2020+; Licensed Under Creative Commons No Rights Reserved."

* ^context[0].type = #element
* ^context[0].expression = "HealthcareService"
* ^context[1].type = #element
* ^context[1].expression = "Location"
* ^context[2].type = #element
* ^context[2].expression = "Patient"

* value[x] only CodeableConcept
* value[x] from $pho-code-vs (extensible)
* value[x] ^label = "pho Code"
* value[x] ^short = "NZ Primary Healthcare Organisations"
* value[x] ^definition = "NZ Primary Healthcare Organisations as defined in the NZ Health Provider Index Listing published by the NZ Ministry of Health each month."
* value[x] ^requirements = "The Nzpho ValueSet should be used as this provides the correct NZ HPI-ORG ID for each of the 30 Primary Healthcare Organisations.The binding strength is extensible as this is the most suitable option for a Codeable Concept data type."

* value[x] ^example[0].label = "Procare Networks Ltd"
* value[x] ^example[0].valueCodeableConcept.coding[0].version = "1.0"
* value[x] ^example[0].valueCodeableConcept.coding[0] = $pho-code-cs#G05533-K "Procare Networks Limited"
* value[x] ^isModifier = false
* value[x] ^binding.description = "NZ HPI-ORG Values for PHOs"

---

// File: input/fsh/extensions/practitionerRole-creator.fsh

Extension: PractitionerRoleCreator
Id: practitionerRole-creator
Description: "The organisation and person that created this role"

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/practitionerRole-creator"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^version = "1.0.0"
* ^context.type = #element
* ^context.expression = "PractitionerRole"

* ^status = #active

* extension contains
    person 1..1 and
    organization 0..1

// definitions of sub-extensions
* extension[person].url = "person" (exactly)
* extension[person] ^definition = "The person who created the role"
* extension[person].value[x] only Reference (Practitioner)

* extension[organization].url = "organization" (exactly)
* extension[organization] ^definition = "The organization where the person was working (acting on behalf of?)"
* extension[organization].value[x] only Reference (Organization)


---

// File: input/fsh/extensions/practitionerRole-status-reason.fsh

Extension: PractitionerRoleStatusReason
Id: practitionerRole-status-reason
Description: "The reason for the status. Generally only used for inactive resources."

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/practitionerRole-status-reason"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^version = "1.0.0"
* ^context.type = #element
* ^context.expression = "PractitionerRole"

* ^status = #active

* value[x] only CodeableConcept
* valueCodeableConcept from https://nzhts.digital.health.nz/fhir/ValueSet/hpi-practitioner-role-status-reason-code (preferred)


/*
* extension contains
    active 0..1 and
    reason 0..1

// Is it active
* extension[active].url = "active" (exactly)
* extension[active] ^definition = "True if the role is active at the time it was returned"
* extension[active].value[x] only boolean

//the reason if the status is false
* extension[reason].url = "reason" (exactly)
* extension[reason] ^definition = "The reason for the current status if it is not active"
* extension[reason].value[x] only CodeableConcept
* extension[reason].valueCodeableConcept from https://nzhts.digital.health.nz/fhir/ValueSet/hpi-practitioner-role-status-reason-code (preferred)
*/

---

// File: input/fsh/extensions/registration-initial-date.fsh

Extension: RegistrationInitialDate
Id: registration-initial-date
Description: "The date the practitioner first became registered with the Responsible Authority or professional body"

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/registration-initial-date"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^status = #active
* ^version = "1.0.0"
* ^context.type = #element
* ^context.expression = "Practitioner.qualification"

* extension 0..0
* value[x] only date

---

// File: input/fsh/extensions/registration-status-code.fsh

Extension: RegistrationStatusCode
Id: registration-status-code
Description: "An indicator of the practicing status of the practitioner as supplied by their Responsible Authority or professional body."

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/registration-status-code"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^version = "1.0.0"
* ^context.type = #element
* ^context.expression = "Practitioner.qualification"

* extension contains
    status 0..1 and
    period 0..1
* ^status = #active
* extension[status].url = "status" (exactly)
* extension[status] ^definition = "The status of this registration"
* extension[status].value[x] only CodeableConcept
* extension[status].valueCodeableConcept from $practitioner-reg-status (preferred)

* extension[period].url = "period" (exactly)
* extension[period] ^definition = "The period over which this status is valid"
* extension[period].value[x] only Period




---

// File: input/fsh/extensions/scope-of-practice.fsh

Extension: ScopeOfPractice
Id: scope-of-practice
Description: "The type or range of health services a practitioner is authorised to perform, as determined by the Responsible Authority or professional body."

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/scope-of-practice"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^version = "1.0.0"
* ^context.type = #element
* ^context.expression = "Practitioner.qualification"

* extension contains
    code 0..1 and
    period 0..1
* ^status = #active

// definitions of sub-extensions
* extension[code].url = "code" (exactly)
* extension[code] ^definition = "A code identifying the services that the practitioner is permitted to perform"
* extension[code].value[x] only CodeableConcept
* extension[code].valueCodeableConcept from $practitioner-scope-practice (preferred)
/*
* extension[description].url = "description" (exactly)
* extension[description] ^definition = "A full description of the health services that a health practitioner with this scope is permitted to perform"
* extension[description].value[x] only string
*/
* extension[period].url = "period" (exactly)
* extension[period] ^definition = "The period the scope of practice is effective"
* extension[period].value[x] only Period


---

// File: input/fsh/extensions/sex-at-birth.fsh


//note argonaut extension: https://www.fhir.org/guides/argonaut/r2/StructureDefinition-argo-birthsex.html
//has a required binding

Extension: Sex_at_birth
Id: sex-at-birth
Title: "Sex At Birth"
Description: "A person’s sex at the time of their birth (considered to be immutable)."
* ^url = "http://hl7.org.nz/fhir/StructureDefinition/sex-at-birth"

* ^version = "0.2.0"
* ^status = #active
* ^date = "2020-07-20"
* ^publisher = "HL7 New Zealand"
* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work

* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ

* ^copyright = "HL7 New Zealand© 2020+; Licensed Under Creative Commons No Rights Reserved."
* ^context[0].type = #element
* ^context[0].expression = "Patient"

* value[x] only CodeableConcept
* valueCodeableConcept 0..1
* valueCodeableConcept from AdministrativeGender (required)

---

// File: input/fsh/extensions/suburb.fsh

Extension: Suburb
Id: suburb
Title: "NZ Suburb"
Description: "Suburb element of a NZ Address."

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/suburb"

* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm"
* ^extension.valueInteger = 1
* ^status = #active
* ^version = "1.0"
* ^date = "2020-07-20"
* ^publisher = "HL7 New Zealand"

* ^contact[0].telecom[0].system = #email
* ^contact[0].telecom[0].value = "admin@hl7.org.nz"
* ^contact[0].telecom[0].use = #work


* ^jurisdiction[0] = urn:iso:std:iso:3166#NZ
* ^purpose = "Required as FHIR Base Address Type does not contain an element for Suburb (only District or State which, in population terms, are both broader than City - whereas Suburb is narrower)."
* ^copyright = "HL7 New Zealand© 2020+; Licensed Under Creative Commons No Rights Reserved."
//* ^kind = #primitive-type

* ^context[0].type = #element
* ^context[0].expression = "Address"

* value[x] only string

* value[x] ^label = "NZ Suburb"
* value[x] ^short = "NZSuburb"
* value[x] ^definition = "NZ Suburbs"
* value[x] ^comment = "NZ Suburbs are defined in the NZ Electronic Street Address Mapping (eSAM) standard."
* value[x] ^example[0].label = "Rototuna"
* value[x] ^example[0].valueString = "Rototuna"
* value[x] ^isModifier = false

---

// File: input/fsh/profiles/Condition.fsh

Profile:        NzCondition
Parent:         Condition
Id:             NzCondition
Title:          "Condition resource for use in NZ"
Description:    "This profile adds the Long-Term Condition extension to the base Condition resource"

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/NzCondition"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^status = #draft
* ^version = "1.0.0"

* extension contains
    $long-term-condition named long-term-condition 0..1

---

// File: input/fsh/profiles/Coverage.fsh

Profile:        NzCoverage
Parent:         Coverage
Id:             NzCoverage
Title:          "Coverage resource for use in NZ (Trial use)"
Description:    "Coverage resource for use in NZ (Trial use)"

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/NzCoverage"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^status = #draft
* ^version = "1.0.0"

//* ^extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
//* ^extension[=].valueCode = #trial-use

* ^purpose = "Trial use profile on Coverage for NZ use. Primarily changing the type valueset. Inclusion of the profile in future IG versions will depend on Implementer feedback.  "
* ^text.status = #additional
* ^text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>NZ Coverage profile</div>"

//* type TU
* type from $coverage-type-vs (extensible)
* class.type from $coverage-category-vs (extensible)

//todo - decide if must support elements - aussies don't use it


---

// File: input/fsh/profiles/HealthcareService.fsh

Profile:        NzHealthcareService
Parent:         HealthcareService
Id:             NzHealthcareService
Title:          "HealthcareService resource for use in NZ"
Description:    "HealthcareService resource for use in NZ"

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/NzHealthcareService"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^status = #draft
* ^version = "1.0.0"

* extension contains
    $dhb named dhb 0..1 and
    $funded-programme named funded-programme 0..* and
    $pho named pho 0..1 and
    $messagingAddress named messaging-address 0..* 

---

// File: input/fsh/profiles/Location.fsh

Profile:        NzLocation
Parent:         Location
Id:             NzLocation
Title:          "Location resource for use in NZ"
Description:    "Location resource for use in NZ"

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/NzLocation"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^status = #draft
* ^version = "1.0.0"

* extension contains
    //$alias-type named alias-type 0..1 and
    $dhb named dhb 0..1 and
    $established named established 0..1 and
    $funded-programme named funded-programme 0..1 and 
    $pho named pho 0..1 and
    $messagingAddress named messaging-address 0..* 
    

* alias.extension contains
  $alias-type named alias-type 0..1

---

// File: input/fsh/profiles/MedicationRequest.fsh

Profile:        NzMedicationRequest
Parent:         MedicationRequest
Id:             NzMedicationRequest
Title:          "MedicationRequest resource for use in NZ"
Description:    "MedicationRequest resource for use in NZ"

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/NzMedicationRequest"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^status = #draft
* ^version = "1.0.0"

* medicationCodeableConcept only CodeableConcept

* medicationCodeableConcept from http://nzmt.org.nz/vs (preferred)

* extension contains
    $nzeps-long-term-medication named nzeps-long-term-medication 0..1 and
    $nzeps-supply-period-reason named nzeps-supply-period-reason 0..1 and
    $nzeps-unusual-dose-quantity named nzeps-unusual-dose-quantity 0..1



---

// File: input/fsh/profiles/MedicationStatement.fsh

Profile:        NzMedicationStatement
Parent:         MedicationStatement
Id:             NzMedicationStatement
Title:          "MedicationStatement resource for use in NZ"
Description:    "MedicationStatement resource for use in NZ"

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/NzMedicationStatement"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^status = #draft
* ^version = "1.0.0"

* medicationCodeableConcept only CodeableConcept

* medicationCodeableConcept from http://nzmt.org.nz/vs (preferred)

* extension contains
    $nzeps-long-term-medication named nzeps-long-term-medication 0..1 



---

// File: input/fsh/profiles/NzMedication.fsh

Profile:        NzMedication
Parent:         Medication
Id:             NzMedication
Title:          "Medication resource for use in NZ"
Description:    "Medication resource for use in NZ"

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/NzMedication"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^status = #draft
* ^version = "1.0.0"

* extension contains
    $nzf-atc named nzf-atc 0..* and 
    $nzf-nzmt-type named nzf-nzmt-type 0..1 
    //$nzf-prescribe-by-brand named nzf-prescribe-by-brand 0..1 and
    //$nzf-related-medication named nzf-related-medication 0..*

* code only CodeableConcept
* code from http://nzmt.org.nz/vs (preferred)

---

// File: input/fsh/profiles/NzMedicationDispense.fsh

Profile:        NzMedicationDispense
Parent:         MedicationDispense
Id:             NzMedicationDispense
Title:          "Medication Dispense resource for use in NZ"
Description:    "Medication Dispense resource for use in NZ"

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/NzMedicationDispense"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^status = #draft
* ^version = "1.0.0"

* medicationCodeableConcept only CodeableConcept

* medicationCodeableConcept from http://nzmt.org.nz/vs (preferred)


---

// File: input/fsh/profiles/Organization.fsh

Profile:        NzOrganization
Parent:         Organization
Id:             NzOrganization
Title:          "Organization resource for use in NZ"
Description:    "Organization resource for use in NZ"

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/NzOrganization"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^status = #draft
* ^version = "1.0.0"

* extension contains
    $established named established 0..1 and
    $funded-programme named funded-programme 0..* and
    $messagingAddress named messaging-address 0..* 

* alias.extension contains
    $alias-type named alias-type 0..1 

---

// File: input/fsh/profiles/Patient.fsh

//Extension urls defined in this IG...
/*
Alias: $dhb = http://hl7.org.nz/fhir/StructureDefinition/dhb
Alias: $ethnicity = http://hl7.org.nz/fhir/StructureDefinition/nz-ethnicity
Alias: $preferred = http://hl7.org/fhir/StructureDefinition/iso21090-preferred
Alias: $information-source = http://hl7.org.nz/fhir/StructureDefinition/information-source
Alias: $nzCitizen = http://hl7.org.nz/fhir/StructureDefinition/nz-citizenship
Alias: $building-name = http://hl7.org.nz/fhir/StructureDefinition/building-name
Alias: $domicile-code = http://hl7.org.nz/fhir/StructureDefinition/domicile-code
Alias: $nz-geocode = http://hl7.org.nz/fhir/StructureDefinition/nz-geocode
Alias: $pho = http://hl7.org.nz/fhir/StructureDefinition/pho
Alias: $sex-at-birth = http://hl7.org.nz/fhir/StructureDefinition/sex-at-birth
Alias: $suburb = http://hl7.org.nz/fhir/StructureDefinition/suburb
Alias: $accPatientOccupation = http://hl7.org.nz/fhir/StructureDefinition/acc-patient-occupation
*/

Profile:        NzPatient
Parent:         Patient
Id:             NzPatient
Title:          "NZ Patient"
Description:    "The base New Zealand Patient profile"

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/NzPatient"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^version = "1.0.0"

* ^purpose = "Describe the Base New Zealand Patient resource profileI"
* ^text.status = #additional
* ^text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>NZ Patient profile</div>"

//todo - decide if must support elements - aussies don't use it

* address only NzAddress
* telecom only NzContactPoint

* gender.extension contains
    $genderOriginalText named genderOriginalText 0..1

* extension contains 
    $ethnicity named ethnicity 0..* and
    $nzCitizen named nzCitizen 0..1 and 
    $dhb named dhb 0..1 and 
    $domicile-code named domicile-code 0..1 and 
    $pho named pho 0..1 and 
    $sex-at-birth named sex-at-birth 0..1 and
    $iwi named iwi 0..* and
    $accPatientOccupation named acc-patient-occupation 0..1 and
    $messagingAddress named messaging-address 0..* and
    $nzResidency named nz-residency 0..1 and
    http://hl7.org/fhir/StructureDefinition/patient-interpreterRequired named interpreter-required 0..1

* deceasedDateTime.extension contains
    $information-source named information-source 0..1

* name.extension contains
    $information-source named information-source 0..1

* birthDate.extension contains
    $information-source named information-source 0..1

* extension[nzCitizen] ^short = "Is this person a New Zealand citizen"

/* Using 'pure' slicing

//slicing for NHI
//using the pattern rather than value as the discrimitator type to allow other components
//of an identifier to be included (eg period or type) which other users of identifier may wish to use.
//'value' is very restrictive in what it allows - eg using period / type would cause it to fail validation... 
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "system"


* identifier ^slicing.discriminator[1].type = #value
* identifier ^slicing.discriminator[1].path = "use"
* identifier ^slicing.rules = #open

* identifier contains 
    NHI 0..1 MS   and    // allow no more than one  active NHIs
    dormant 0..* MS      // allow many dormant NHIs
// because it is an open slice, identifiers with other system identifiers and uses are also allowed
    
* identifier[NHI].system = "https://standards.digital.health.nz/ns/nhi-id" (exactly)
* identifier[NHI].use = #offical (exactly)
* identifier[NHI].use ^short = "fixed to official"
* identifier[NHI] ^short = "The currently active NHI "
* identifier[NHI] ^definition = "The NHI number is a unique number for all New Zealanders, assigned at birth"


* identifier[dormant].system = "https://standards.digital.health.nz/ns/nhi-id" (exactly)
* identifier[dormant].use = #old (exactly)
* identifier[dormant].use ^short = "fixed to old"
* identifier[dormant] ^short = "NHI identifiers that have been deprecated for this Person"
* identifier[dormant] ^definition = "An NHI of the person that is no longer in use.   An NHI becomes dormant when it is discovered that 2 NHIs exist for the same person. The NHIs are linked, one becomes ‘live’ the other ‘dormant’."

*/

//using VS & invariants
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "system"

* identifier ^slicing.rules = #open

* identifier contains 
    NHI 0..* 


* identifier[NHI].system = "https://standards.digital.health.nz/ns/nhi-id" (exactly)
* identifier[NHI].use from nhi-use

* obeys nz-pat-1

Invariant: nz-pat-1
Expression: "Patient.identifier.where(system='https://standards.digital.health.nz/ns/nhi-id' and use='official').count() < 2"
Severity: #error
Description: "only a single official NHI"


ValueSet : NHIUse
Id: nhi-use
Title: "Valid use values for NHI"
Description:  "NHI Use codes"

* ^url = $nhi-use-vs
* ^version = "1.0.0"
* http://hl7.org/fhir/identifier-use#official
* http://hl7.org/fhir/identifier-use#old

//* codes from system $nhi-use-cs

/*

CodeSystem:  Nhi-use
Id: nhi-use
Title: "NZ Citizenship status"
Description:  "Is this person a NZ Citizen"

* ^url = $nhi-use-cs

* #yes "Yes" "This patient is a citizen."
* #no "No" "This patient is not a citizen."
* #unknown "The citizenship status is unknown"

*/

---

// File: input/fsh/profiles/Practitioner.fsh

Profile:        NzPractitioner
Parent:         Practitioner
Id:             NzPractitioner
Title:          "Practitioner resource for use in NZ"
Description:    "Practitioner resource for use in NZ"

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/NzPractitioner"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^status = #draft
* ^version = "1.0.0"

* extension contains
    $death-date named death-date 0..1 and
    $educational-qualification named educational-qualification 0..* and
    $ethnicity named ethnicity 0..* and
    $iwi named iwi 0..* and
    $messagingAddress named messaging-address 0..* 

* qualification.extension contains
    $additional-authorisation named additional-authorisation 0..* and
    $condition-on-practice named condition-on-practice 0..* and
 //   $educational-qualification named educational-qualification 0..1 and
    $registration-initial-date named registration-initial-date 0..1 and
    $registration-status-code named registration-status-code 0..1 and
    $scope-of-practice named scope-of-practice 0..*




---

// File: input/fsh/profiles/PractitionerRole.fsh

Profile:        NzPractitionerRole
Parent:         PractitionerRole
Id:             NzPractitionerRole
Title:          "PractitionerRole resource for use in NZ"
Description:    "PractitionerRole resource for use in NZ"

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/NzPractitionerRole"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^status = #draft
* ^version = "1.0.0"

* extension contains
    $practitionerRole-creator named practitionerRole-creator 0..1 and
    $practitionerRole-status-reason named practitionerRole-status-reason 0..1 and
    $messagingAddress named messaging-address 0..* 

---

// File: input/fsh/profiles/profile-nzAddress.fsh



Alias: $nzGeocode = http://hl7.org.nz/fhir/StructureDefinition/nz-geocode
Alias: $suburb = http://hl7.org.nz/fhir/StructureDefinition/suburb
Alias: $buildingName = http://hl7.org.nz/fhir/StructureDefinition/building-name
Alias: $domicileCode = http://hl7.org.nz/fhir/StructureDefinition/domicile-code

Alias: $countryName = http://hl7.org.nz/fhir/StructureDefinition/country-name

Profile:        NzAddress
Parent:         Address
Id:             NzAddress
Title:          "Common NZ Address datatype"
Description:    "Adds building name, suburb, domicile code and geocode to the Address datatype"

* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^url = "http://hl7.org.nz/fhir/StructureDefinition/NzAddress"
* ^version = "1.0.0"

* ^text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>NZ Address datatype profile</div>"
* ^text.status = #additional

//* district 0..0
//* state 0..0

//* status = #active

* country ^short = "Should be the ISO 3166 code"

//Needs to be a different geocode as uses a different datum
* extension contains
    $nzGeocode named nz-geocode 0..1 and
    $suburb named suburb 0..1 and
    $buildingName named building-name 0..1 and 
    $domicileCode named domicile-code 0..1 and 
    $countryName named country-name 0..1
    
* extension[nz-geocode] ^short = "A geocode using the NZ specific datum (reference point)"
* extension[nz-geocode].url = "http://hl7.org.nz/fhir/StructureDefinition/nz-geocode" (exactly)
* extension[suburb] ^short = "The suburb part of the address"
* extension[building-name] ^short = "The name of the building"
* extension[domicile-code] ^short = "The domicile code associated with this address"
* extension[country-name] ^short = "The name of the country. The ISO code should be in the country property"

---

// File: input/fsh/profiles/profile-nzContactPoint.fsh


Profile:        NzContactPoint
Parent:         ContactPoint
Id:             NzContactPoint
Title:          "Common NZ ContactPoint datatype"
Description:    "This profile adds the Contact Point Purpose and EDI address extensions to the standard data type"

* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^url = "http://hl7.org.nz/fhir/StructureDefinition/NzContactpoint"
* ^version = "1.0.0"

* ^text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>NZ ContactPoint datatype profile</div>"
* ^text.status = #additional


//Needs to be a different geocode as uses a different datum
* extension contains
    $cpPurpose named cp-purpose 0..1 

* extension[cp-purpose] ^short = "The business reason this ContactPoint is being used"
* extension[cp-purpose].url = $cpPurpose (exactly)

/*

* system.extension contains
    $cpEdi named cp-edi 0..*

    
* system.extension[cp-edi] ^short = "Represents an EDI contact"
* system.extension[cp-edi].url = $cpEdi (exactly)

*/

---

// File: input/fsh/profiles/RelatedPerson.fsh

Profile:        NzRelatedPerson
Parent:         RelatedPerson
Id:             NzRelatedPerson
Title:          "NZ RelatedPerson"
Description:    "The base New Zealand RelatedPerson profile"

* ^url = "http://hl7.org.nz/fhir/StructureDefinition/NzRelatedPerson"
* ^jurisdiction.coding = urn:iso:std:iso:3166#NZ
* ^version = "1.0.0"

* ^purpose = "Describe the Base New Zealand RelatedPerson resource profile"
* ^text.status = #additional
* ^text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>NZ RelatedPerson profile</div>"

---

// File: input/fsh/vocabulary/acc-patient-ocupation.fsh

// ACC Patient Occupation ValueSet

ValueSet: AccPatientOccupationValueSet
Id: acc-patient-occupation-valueset
Title: "ACC Patient Occupation"
Description: "ValueSet of codes for classifying patient occupations, drawn from the ACC codeset"
* ^url = $acc-occupation-code-vs
* codes from system $acc-occupation-code-cs
* ^version = "1.0.0"

// ACC Patient Occupation CodeSystem

CodeSystem: AccPatientOccupationCodeSystem
Id: acc-patient-occupation-codesystem
Title: "ACC Patient Occupation CodeSystem"
Description: "Codes for classifying patient occupations, drawn from the ACC codeset"
* ^url = $acc-occupation-code-cs
* ^version = "1.0.0"
* ^status = #active
* ^publisher = "ACC"
* ^caseSensitive = false
* ^valueSet = $acc-occupation-code-vs

* #1111 "Legislator" "Legislator"
* #1121 "Senior Government Administrator" "Senior Government Administrator"
* #1131 "Senior Business Administrator" "Senior Business Administrator"
* #1141 "Special-interest Org.administrator" "Special-interest Org.administrator"
* #1211 "Corporate Mgr Or Managing Director" "Corporate Mgr Or Managing Director"
* #1221 "Production & Operation Manager" "Production & Operation Manager"
* #1222 "Finance & Administration Manager" "Finance & Administration Manager"
* #1223 "Human Resources Manager" "Human Resources Manager"
* #1224 "Sales & Marketing Manager" "Sales & Marketing Manager"
* #1225 "Advertising & Public Relations Mgr" "Advertising & Public Relations Mgr"
* #1226 "Supply & Distribution Manager" "Supply & Distribution Manager"
* #1227 "Computing Services Manager" "Computing Services Manager"
* #1228 "Research & Development Manager" "Research & Development Manager"
* #1229 "Other Specialised Manager" "Other Specialised Manager"
* #2111 "Physicist, Astronomer" "Physicist, Astronomer"
* #2112 "Meteorologist" "Meteorologist"
* #2113 "Chemist" "Chemist"
* #2114 "Geologist, Geophysicist" "Geologist, Geophysicist"
* #2121 "Mathematician, Statistician" "Mathematician, Statistician"
* #2131 "Computing Professional" "Computing Professional"
* #2141 "Architect,town Or Traffic Planner" "Architect,town Or Traffic Planner"
* #2142 "Civil Engineer" "Civil Engineer"
* #2143 "Electrical Engineer" "Electrical Engineer"
* #2144 "Electronic & Telecomm. Engineer" "Electronic & Telecomm. Engineer"
* #2145 "Mechanical Engineer" "Mechanical Engineer"
* #2146 "Chemical Engineer" "Chemical Engineer"
* #2147 "Mining Engineer, Metallurgist" "Mining Engineer, Metallurgist"
* #2148 "Cartographer, Surveyor" "Cartographer, Surveyor"
* #2211 "Biologist, Botanist, Zoologist" "Biologist, Botanist, Zoologist"
* #2212 "Microbiologist Or Related Prof" "Microbiologist Or Related Prof"
* #2213 "Agricultural Scientist" "Agricultural Scientist"
* #2221 "Medical Doctor" "Medical Doctor"
* #2222 "Dentist" "Dentist"
* #2223 "Veterinarian" "Veterinarian"
* #2224 "Pharmacist" "Pharmacist"
* #2225 "Dietitian, Pub.health Nutritionist" "Dietitian, Pub.health Nutritionist"
* #2226 "Other Health Professional" "Other Health Professional"
* #2231 "Nursing & Midwifery Professional" "Nursing & Midwifery Professional"
* #2311 "Tertiary Teaching Professional" "Tertiary Teaching Professional"
* #2321 "Secondary Teaching Professional" "Secondary Teaching Professional"
* #2331 "Primary Teaching Professional" "Primary Teaching Professional"
* #2332 "Early Childhood Teaching Prof" "Early Childhood Teaching Prof"
* #2341 "Special Education Teaching Prof" "Special Education Teaching Prof"
* #2351 "Education Advisor" "Education Advisor"
* #2352 "Education Reviewer" "Education Reviewer"
* #2411 "Accountant" "Accountant"
* #2412 "Personnel Professional" "Personnel Professional"
* #2413 "Other Business Professional" "Other Business Professional"
* #2421 "Barrister & Solicitor" "Barrister & Solicitor"
* #2422 "Judge" "Judge"
* #2423 "Other Legal Professional" "Other Legal Professional"
* #2431 "Archivist, Curator" "Archivist, Curator"
* #2432 "Librarian Or Related Info Prof" "Librarian Or Related Info Prof"
* #2441 "Economist" "Economist"
* #2442 "Social Scientist" "Social Scientist"
* #2443 "Philologist,translator,interpreter" "Philologist,translator,interpreter"
* #2444 "Psychologist" "Psychologist"
* #2445 "Counsellor" "Counsellor"
* #2446 "Other Government Professional" "Other Government Professional"
* #2451 "Religious Professional" "Religious Professional"
* #3111 "Physical Science Technician" "Physical Science Technician"
* #3112 "Civil Engineering Technician" "Civil Engineering Technician"
* #3113 "Electrical Engineering Technician" "Electrical Engineering Technician"
* #3114 "Electronic Engineering Technician" "Electronic Engineering Technician"
* #3115 "Mechanical Engineering Technician" "Mechanical Engineering Technician"
* #3116 "Chemical Engineering Technician" "Chemical Engineering Technician"
* #3117 "Mining & Metallurgical Technician" "Mining & Metallurgical Technician"
* #3118 "Draughting Technician" "Draughting Technician"
* #3119 "Other Engineering Technician" "Other Engineering Technician"
* #3121 "Computer Equipment Controller" "Computer Equipment Controller"
* #3131 "Photographr & Recordng Equip Cntrl" "Photographr & Recordng Equip Cntrl"
* #3132 "Broadcasting Equip. Controller" "Broadcasting Equip. Controller"
* #3133 "Medical Equipment Controller" "Medical Equipment Controller"
* #3141 "Ships Engineer" "Ships Engineer"
* #3142 "Ships Deck Officer & Pilot" "Ships Deck Officer & Pilot"
* #3143 "Aircraft Pilot Or Related Worker" "Aircraft Pilot Or Related Worker"
* #3144 "Air Traffic Controller" "Air Traffic Controller"
* #3151 "Safety & Health Inspector" "Safety & Health Inspector"
* #3211 "Life Science Technician" "Life Science Technician"
* #3212 "Agricultral Technician" "Agricultral Technician"
* #3221 "Optician" "Optician"
* #3222 "Dental Assistant" "Dental Assistant"
* #3223 "Physiotherapist" "Physiotherapist"
* #3224 "Veterinary Assistant" "Veterinary Assistant"
* #3225 "Pharmaceutical Assistant" "Pharmaceutical Assistant"
* #3226 "Other Health Associate Professionl" "Other Health Associate Professionl"
* #3231 "Nursing Associate Professional" "Nursing Associate Professional"
* #3311 "Securities & Finance Dealer,broker" "Securities & Finance Dealer,broker"
* #3312 "Insurance Representative" "Insurance Representative"
* #3313 "Real Estate Agent" "Real Estate Agent"
* #3314 "Travel Consultant, Organiser" "Travel Consultant, Organiser"
* #3315 "Technical & Commercial Sales Rep" "Technical & Commercial Sales Rep"
* #3316 "Buyer" "Buyer"
* #3317 "Appraiser, Valuer" "Appraiser, Valuer"
* #3318 "Auctioneer" "Auctioneer"
* #3319 "Other Finance,sales Associate Prof" "Other Finance,sales Associate Prof"
* #3321 "Admin Or Related Associate Prof" "Admin Or Related Associate Prof"
* #3322 "Legal Or Rel. Business Assoc. Prof" "Legal Or Rel. Business Assoc. Prof"
* #3323 "Bookkeeper" "Bookkeeper"
* #3324 "Statistical,mathematical Ass. Prof" "Statistical,mathematical Ass. Prof"
* #3331 "Customs & Border Inspector" "Customs & Border Inspector"
* #3341 "Social Work Associate Professional" "Social Work Associate Professional"
* #3342 "Education Associate Professional" "Education Associate Professional"
* #3351 "Careers & Employment Advisor" "Careers & Employment Advisor"
* #3361 "Author,journalist Or Other Writer" "Author,journalist Or Other Writer"
* #3362 "Sculptor,painter Or Related Artist" "Sculptor,painter Or Related Artist"
* #3363 "Decorator, Commercial Designer" "Decorator, Commercial Designer"
* #3364 "Composer, Musician, Singer" "Composer, Musician, Singer"
* #3365 "Choreographer, Dancer" "Choreographer, Dancer"
* #3366 "Film,stage Or Rel.actor Or Directr" "Film,stage Or Rel.actor Or Directr"
* #3367 "Radio,television,other Announcer" "Radio,television,other Announcer"
* #3368 "Clown, Magician Or Rel. Worker" "Clown, Magician Or Rel. Worker"
* #3369 "Athlete Or Related Worker" "Athlete Or Related Worker"
* #3371 "Non-ordained Religious Assoc. Prof" "Non-ordained Religious Assoc. Prof"
* #3381 "Environment Protection Assoc. Prof" "Environment Protection Assoc. Prof"
* #4111 "Typist Or Word Processor Operator" "Typist Or Word Processor Operator"
* #4112 "Data Entry Operator" "Data Entry Operator"
* #4114 "Secretary" "Secretary"
* #4121 "Accounting, Bookkeeping Clerk" "Accounting, Bookkeeping Clerk"
* #4122 "Statistical, Finance Clerk" "Statistical, Finance Clerk"
* #4131 "Stock Clerk" "Stock Clerk"
* #4132 "Production Clerk" "Production Clerk"
* #4133 "Transport Clerk" "Transport Clerk"
* #4141 "Library, Filing Clerk" "Library, Filing Clerk"
* #4142 "Mail Carrier, Sorting Clerk" "Mail Carrier, Sorting Clerk"
* #4143 "Coding,proof Reading Or Rel. Clerk" "Coding,proof Reading Or Rel. Clerk"
* #4144 "Office Clerk" "Office Clerk"
* #4211 "Cashier, Ticket Issuer" "Cashier, Ticket Issuer"
* #4212 "Teller Or Other Counter Clerk" "Teller Or Other Counter Clerk"
* #4213 "Croupier" "Croupier"
* #4215 "Bill,debt Or Rel. Cash Collector" "Bill,debt Or Rel. Cash Collector"
* #4221 "Receptionist, Information Clerk" "Receptionist, Information Clerk"
* #4222 "Telephone Switchboard Operator" "Telephone Switchboard Operator"
* #5111 "Travel Attendant" "Travel Attendant"
* #5112 "Travel Guide" "Travel Guide"
* #5121 "Housekeeper" "Housekeeper"
* #5122 "Cook" "Cook"
* #5123 "Waiter, Bartender" "Waiter, Bartender"
* #5131 "Personal Care Worker" "Personal Care Worker"
* #5141 "Hairdressr,beautician Or Rel.workr" "Hairdressr,beautician Or Rel.workr"
* #5142 "Child Care Worker" "Child Care Worker"
* #5143 "Undertaker, Embalmer" "Undertaker, Embalmer"
* #5151 "Fire Fighter" "Fire Fighter"
* #5152 "Police" "Police"
* #5153 "Prison Guard" "Prison Guard"
* #5154 "Other Protective Service Worker" "Other Protective Service Worker"
* #5155 "Armed Forces" "Armed Forces"
* #5211 "Salesperson, Demonstrator" "Salesperson, Demonstrator"
* #5221 "Street Vendor" "Street Vendor"
* #5231 "Fashion Or Other Model" "Fashion Or Other Model"
* #6111 "Field Crop, Vegetable Grower" "Field Crop, Vegetable Grower"
* #6112 "Fruit Grower" "Fruit Grower"
* #6113 "Gardener, Nursery Grower" "Gardener, Nursery Grower"
* #6121 "Livestock Producer" "Livestock Producer"
* #6122 "Mixed Livestock Producer" "Mixed Livestock Producer"
* #6123 "Poultry Producer" "Poultry Producer"
* #6124 "Apiarist" "Apiarist"
* #6125 "Crop & Livestock Producer" "Crop & Livestock Producer"
* #6126 "Other Agricultural Worker" "Other Agricultural Worker"
* #6131 "Forestry Worker, Logger" "Forestry Worker, Logger"
* #6141 "Fishery Worker" "Fishery Worker"
* #6142 "Aquatic Life Cultivation Worker" "Aquatic Life Cultivation Worker"
* #6143 "Hunter, Trapper" "Hunter, Trapper"
* #6144 "Animal Welfare Worker" "Animal Welfare Worker"
* #7111 "Bricklayer, Stonemason" "Bricklayer, Stonemason"
* #7112 "Carpenter & Joiner" "Carpenter & Joiner"
* #7121 "Plasterer" "Plasterer"
* #7122 "Glazier" "Glazier"
* #7123 "Plumber" "Plumber"
* #7124 "Painter & Paperhanger" "Painter & Paperhanger"
* #7131 "Electrician" "Electrician"
* #7211 "Metal Moulder" "Metal Moulder"
* #7212 "Sheet-metal Worker" "Sheet-metal Worker"
* #7221 "Blacksmith" "Blacksmith"
* #7222 "Tool Or Pattern Maker,metal Marker" "Tool Or Pattern Maker,metal Marker"
* #7223 "Fitter & Turner" "Fitter & Turner"
* #7224 "Saw Doctor" "Saw Doctor"
* #7231 "Machinery Mechanic & Fitter" "Machinery Mechanic & Fitter"
* #7241 "Electrical Mechanic & Fitter" "Electrical Mechanic & Fitter"
* #7242 "Electronics Fitter & Servicer" "Electronics Fitter & Servicer"
* #7243 "Radio & Television Servicer" "Radio & Television Servicer"
* #7311 "Precision Inst. Maker & Repairer" "Precision Inst. Maker & Repairer"
* #7312 "Musical Instrument Maker, Tuner" "Musical Instrument Maker, Tuner"
* #7313 "Jeweller,precious Met.trade Worker" "Jeweller,precious Met.trade Worker"
* #7321 "Glass Cutter & Finisher" "Glass Cutter & Finisher"
* #7331 "Printing Trades Worker" "Printing Trades Worker"
* #7332 "Binding Trades Worker" "Binding Trades Worker"
* #7333 "Printing Engraver & Etcher" "Printing Engraver & Etcher"
* #7411 "Butcher" "Butcher"
* #7412 "Baker" "Baker"
* #7421 "Cabinet Maker Or Related Worker" "Cabinet Maker Or Related Worker"
* #7431 "Tailor & Dressmaker" "Tailor & Dressmaker"
* #7432 "Upholsterer Or Related Worker" "Upholsterer Or Related Worker"
* #7433 "Floor Covering Layer" "Floor Covering Layer"
* #7441 "Leather Goods Maker" "Leather Goods Maker"
* #8111 "Mining Plant Operator" "Mining Plant Operator"
* #8112 "Mineral Ore, Stone Treat Plant Op" "Mineral Ore, Stone Treat Plant Op"
* #8113 "Well Driller, Borer & Rel. Worker" "Well Driller, Borer & Rel. Worker"
* #8121 "Ore Smelting & Refining Furnace Op" "Ore Smelting & Refining Furnace Op"
* #8122 "Metal Melter, Caster" "Metal Melter, Caster"
* #8123 "Metal Welder" "Metal Welder"
* #8124 "Metal Drawer & Extruder" "Metal Drawer & Extruder"
* #8131 "Glass & Ceramics Kiln Operator" "Glass & Ceramics Kiln Operator"
* #8132 "Other Glass & Ceramics Worker" "Other Glass & Ceramics Worker"
* #8141 "Sawmill Or Rel. Wood Processing Op" "Sawmill Or Rel. Wood Processing Op"
* #8142 "Paper Pulp Preparation Plant Op" "Paper Pulp Preparation Plant Op"
* #8143 "Papermaking Plant Operator" "Papermaking Plant Operator"
* #8151 "Crushing,grinding,mixing Equip. Op" "Crushing,grinding,mixing Equip. Op"
* #8152 "Filtering & Separating Equip. Op" "Filtering & Separating Equip. Op"
* #8153 "Still & Reactor Operator" "Still & Reactor Operator"
* #8154 "Other Chemical Processing Plant Op" "Other Chemical Processing Plant Op"
* #8161 "Power Generating Plant Operator" "Power Generating Plant Operator"
* #8211 "Machine Tool Operator" "Machine Tool Operator"
* #8212 "Cement & Other Processing Mach Op" "Cement & Other Processing Mach Op"
* #8221 "Pharmaceutical Products Mach Op" "Pharmaceutical Products Mach Op"
* #8222 "Metal Finisher, Plater, Coater" "Metal Finisher, Plater, Coater"
* #8223 "Photographic Products Machine Op" "Photographic Products Machine Op"
* #8231 "Tyre Making Vulcanising Mach Op" "Tyre Making Vulcanising Mach Op"
* #8232 "Other Rubber, Plastic Prod Mach Op" "Other Rubber, Plastic Prod Mach Op"
* #8241 "Wood Products Machine Operator" "Wood Products Machine Operator"
* #8242 "Wood Treater" "Wood Treater"
* #8251 "Paper & Paper Products Mach Op" "Paper & Paper Products Mach Op"
* #8261 "Spinning, Winding Machine Operator" "Spinning, Winding Machine Operator"
* #8262 "Weaving, Knitting Machine Operator" "Weaving, Knitting Machine Operator"
* #8263 "Sewing, Embroidering Mach. Op" "Sewing, Embroidering Mach. Op"
* #8264 "Textile Dyeing, Cleaning Mach Op" "Textile Dyeing, Cleaning Mach Op"
* #8265 "Other Textile Products Machine Op" "Other Textile Products Machine Op"
* #8271 "Meat, Fish Processing Machine Op" "Meat, Fish Processing Machine Op"
* #8272 "Dairy Products Machine Operator" "Dairy Products Machine Operator"
* #8273 "Grain Milling Machine Operator" "Grain Milling Machine Operator"
* #8274 "Baked Goods, Cereals Prod Mach Op" "Baked Goods, Cereals Prod Mach Op"
* #8275 "Fruit,vege,nut Process. Mach Op" "Fruit,vege,nut Process. Mach Op"
* #8276 "Sugar Process, Refining Mach Op" "Sugar Process, Refining Mach Op"
* #8277 "Tea,coffee,cocoa Machine Operator" "Tea,coffee,cocoa Machine Operator"
* #8278 "Tobacco Prods Process. Mach Op" "Tobacco Prods Process. Mach Op"
* #8279 "Brewer, Wine & Beverage Mach Op" "Brewer, Wine & Beverage Mach Op"
* #8281 "Leather & Rel. Products Processor" "Leather & Rel. Products Processor"
* #8291 "Mechanical Machinery Assembler" "Mechanical Machinery Assembler"
* #8292 "Electrical Machinery Assembler" "Electrical Machinery Assembler"
* #8293 "Metal,rubber &plastic Prods Assemb" "Metal,rubber &plastic Prods Assemb"
* #8294 "Wood &rel Material Prods Assemblr" "Wood &rel Material Prods Assemblr"
* #8295 "Leather Goods Assembler" "Leather Goods Assembler"
* #8311 "Railway Engine Driver" "Railway Engine Driver"
* #8321 "Car, Taxi, Light Van Driver" "Car, Taxi, Light Van Driver"
* #8322 "Bus Driver" "Bus Driver"
* #8323 "Heavy Truck Driver" "Heavy Truck Driver"
* #8331 "Motorised Farm Machinery Operator" "Motorised Farm Machinery Operator"
* #8332 "Earthmoving Or Rel. Machinery Op" "Earthmoving Or Rel. Machinery Op"
* #8333 "Crane Operator" "Crane Operator"
* #8334 "Lifting-truck Operator" "Lifting-truck Operator"
* #8341 "Ships Deck Crew Or Rel. Worker" "Ships Deck Crew Or Rel. Worker"
* #8411 "Building Or Related Worker" "Building Or Related Worker"
* #8412 "Underwater Worker" "Underwater Worker"
* #9111 "Caretaker, Cleaner" "Caretaker, Cleaner"
* #9121 "Messenger, Doorkeeper" "Messenger, Doorkeeper"
* #9131 "Refuse Collector Or Rel. Labourer" "Refuse Collector Or Rel. Labourer"
* #9141 "Packer, Freight Handler" "Packer, Freight Handler"
* #9151 "Labourer" "Labourer"
* #9970 "Occupation Unidentified/inadequate" "Occupation Unidentified/inadequate"
* #9980 "Workers Not Reporting Any Descrip" "Workers Not Reporting Any Descrip"
* #9991 "Housewife \\ Househusband" "Housewife \\ Househusband"
* #9992 "Sickness Beneficiary" "Sickness Beneficiary"
* #9993 "Retired" "Retired"
* #9994 "Student" "Student"
* #9995 "Overseas Visitor" "Overseas Visitor"
* #9996 "Unemployed" "Unemployed"
* #9997 "Pre-school Child" "Pre-school Child"
* #9998 "Prison Inmate" "Prison Inmate"
* #9999 "Not Obtainable" "Not Obtainable"
* #1111.001 "Cabinet Minister" "Cabinet Minister"
* #1111.002 "Central Government Politician" "Central Government Politician"
* #1111.003 "City Council Chairman" "City Council Chairman"
* #1111.004 "City Councillor" "City Councillor"
* #1111.005 "Councillor" "Councillor"
* #1111.006 "Government Minister" "Government Minister"
* #1111.007 "Local Government Legislator" "Local Government Legislator"
* #1111.008 "Mayor" "Mayor"
* #1111.009 "Member of Parliament" "Member of Parliament"
* #1111.010 "Minister of the Crown" "Minister of the Crown"
* #1111.011 "Parliamentary Representative" "Parliamentary Representative"
* #1111.012 "Regional Councillor" "Regional Councillor"
* #1121.001 "Ambassador" "Ambassador"
* #1121.002 "Censor" "Censor"
* #1121.003 "Central Government Administrator" "Central Government Administrator"
* #1121.004 "Charge daffaires" "Charge daffaires"
* #1121.005 "Chief Executive - Central Government" "Chief Executive - Central Government"
* #1121.006 "Chief Executive - Local Government" "Chief Executive - Local Government"
* #1121.007 "City Administrator" "City Administrator"
* #1121.008 "Civil Defence Officer" "Civil Defence Officer"
* #1121.009 "Commissioner of Inland Revenue" "Commissioner of Inland Revenue"
* #1121.010 "Consul General" "Consul General"
* #1121.011 "Consular Affairs Officer" "Consular Affairs Officer"
* #1121.012 "Controller of Customs" "Controller of Customs"
* #1121.013 "Diplomatic Representative" "Diplomatic Representative"
* #1121.014 "Government Administration Director" "Government Administration Director"
* #1121.015 "Government Department Head" "Government Department Head"
* #1121.016 "Government Divisional Director" "Government Divisional Director"
* #1121.017 "Government Executive Official" "Government Executive Official"
* #1121.018 "Governor General" "Governor General"
* #1121.019 "High Commissioner" "High Commissioner"
* #1121.020 "Local Government Administrator" "Local Government Administrator"
* #1121.021 "Patents Commissioner" "Patents Commissioner"
* #1121.022 "Police Commissioner" "Police Commissioner"
* #1121.023 "Public Service Administrator" "Public Service Administrator"
* #1121.024 "Public Service Commissioner" "Public Service Commissioner"
* #1121.025 "Registrar General" "Registrar General"
* #1121.026 "Senior Central Government Official" "Senior Central Government Official"
* #1121.027 "Senior Local Government Official" "Senior Local Government Official"
* #1121.028 "State Services Commissioner" "State Services Commissioner"
* #1121.029 "Town Clerk" "Town Clerk"
* #1121.030 "Vice Consul" "Vice Consul"
* #1131.001 "Business Chief Executive" "Business Chief Executive"
* #1131.002 "CEO" "CEO"
* #1131.003 "Chief Executive" "Chief Executive"
* #1131.004 "Chief Executive and/or Managing Director" "Chief Executive and/or Managing Director"
* #1131.005 "Chief Executive Officer" "Chief Executive Officer"
* #1131.007 "Company President" "Company President"
* #1131.008 "Executive Director" "Executive Director"
* #1131.009 "Hospital Executive Officer" "Hospital Executive Officer"
* #1131.010 "Internet Chief Executive Officer" "Internet Chief Executive Officer"
* #1131.011 "Managing Director" "Managing Director"
* #1131.012 "NZ Port Authority Administrator" "NZ Port Authority Administrator"
* #1131.013 "Senior Business Administrator" "Senior Business Administrator"
* #1141.001 "Community Services Administrator" "Community Services Administrator"
* #1141.002 "Political Party Organiser Secretary" "Political Party Organiser Secretary"
* #1141.003 "Recreation Administrator" "Recreation Administrator"
* #1141.004 "Secretary Organiser" "Secretary Organiser"
* #1141.005 "Secretary Social Sporting Organisation" "Secretary Social Sporting Organisation"
* #1141.006 "Special-Interest Organisation Administrator" "Special-Interest Organisation Administrator"
* #1141.007 "Sports Administrator" "Sports Administrator"
* #1141.008 "Sports Coordinator" "Sports Coordinator"
* #1141.009 "Trade Union Official" "Trade Union Official"
* #1141.010 "Trade Union Secretary" "Trade Union Secretary"
* #1141.011 "Union Official" "Union Official"
* #1141.012 "Union Organiser" "Union Organiser"
* #1211.001 "Area Manager" "Area Manager"
* #1211.002 "Business Director" "Business Director"
* #1211.003 "Business Owner" "Business Owner"
* #1211.004 "Business Services Manager" "Business Services Manager"
* #1211.005 "Company Director" "Company Director"
* #1211.006 "Company Manager" "Company Manager"
* #1211.007 "Corporate Manager" "Corporate Manager"
* #1211.008 "Culture Chief" "Culture Chief"
* #1211.009 "Franchise Company Manager" "Franchise Company Manager"
* #1211.010 "Franchise General Manager" "Franchise General Manager"
* #1211.011 "General Manager" "General Manager"
* #1211.012 "General Manager Government Department" "General Manager Government Department"
* #1211.013 "Kaiwhakahaere" "Kaiwhakahaere"
* #1211.014 "Kaiwhakahaere Kopareihana" "Kaiwhakahaere Kopareihana"
* #1211.015 "Kaiwhakahaere Uanga" "Kaiwhakahaere Uanga"
* #1211.016 "Kaiwhakahaere Umanga" "Kaiwhakahaere Umanga"
* #1211.017 "Managing Editor" "Managing Editor"
* #1211.018 "Net Loyalty Director" "Net Loyalty Director"
* #1211.019 "Publisher" "Publisher"
* #1211.020 "Rangatira" "Rangatira"
* #1211.021 "Rangatira Uanga" "Rangatira Uanga"
* #1211.022 "Rangatira Umanga" "Rangatira Umanga"
* #1211.023 "Regional Manager" "Regional Manager"
* #1211.024 "Society or Trustee Company Director" "Society or Trustee Company Director"
* #1221.001 "Air Transport Manager" "Air Transport Manager"
* #1221.002 "Air Transport Planning Manager" "Air Transport Planning Manager"
* #1221.003 "Airline Executive" "Airline Executive"
* #1221.004 "Airline Manager" "Airline Manager"
* #1221.005 "Airport Manager" "Airport Manager"
* #1221.006 "Airport Manager Operations" "Airport Manager Operations"
* #1221.007 "Area Manager Production" "Area Manager Production"
* #1221.008 "Bakery Factory Manager" "Bakery Factory Manager"
* #1221.009 "Broadcasting and Theatrical Production Manager" "Broadcasting and Theatrical Production Manager"
* #1221.010 "Broadcasting Production Manager" "Broadcasting Production Manager"
* #1221.011 "Construction Manager" "Construction Manager"
* #1221.012 "Construction Site Manager" "Construction Site Manager"
* #1221.013 "Dairy Factory Manager" "Dairy Factory Manager"
* #1221.014 "Deputy Principal" "Deputy Principal"
* #1221.015 "Deputy School Principal" "Deputy School Principal"
* #1221.016 "Distillery Manager" "Distillery Manager"
* #1221.017 "Education Administrator" "Education Administrator"
* #1221.018 "Engineering Technical Manager" "Engineering Technical Manager"
* #1221.019 "Executive Producer" "Executive Producer"
* #1221.020 "Exploration Manager" "Exploration Manager"
* #1221.021 "Factory Manager" "Factory Manager"
* #1221.022 "Factory Production Manager" "Factory Production Manager"
* #1221.023 "Film and Television Production Manager" "Film and Television Production Manager"
* #1221.024 "Film Producer" "Film Producer"
* #1221.025 "Forest Manager" "Forest Manager"
* #1221.026 "Forest Manager Logging Operations" "Forest Manager Logging Operations"
* #1221.027 "Forest Ranger" "Forest Ranger"
* #1221.028 "Freezing Works Manager" "Freezing Works Manager"
* #1221.029 "Freight Road Transport Manager" "Freight Road Transport Manager"
* #1221.030 "Gas Manager" "Gas Manager"
* #1221.031 "Head Master" "Head Master"
* #1221.032 "Head Mistress" "Head Mistress"
* #1221.033 "Head Teacher" "Head Teacher"
* #1221.034 "Headmaster" "Headmaster"
* #1221.035 "Headmistress" "Headmistress"
* #1221.036 "Industrial Production Manager" "Industrial Production Manager"
* #1221.037 "Logging Planner" "Logging Planner"
* #1221.038 "Managing Publisher" "Managing Publisher"
* #1221.039 "Mill Manager" "Mill Manager"
* #1221.040 "Mine Manager" "Mine Manager"
* #1221.041 "Motion Picture Producer" "Motion Picture Producer"
* #1221.042 "Musical Producer" "Musical Producer"
* #1221.043 "Oil Manager" "Oil Manager"
* #1221.044 "Operations Manager (Production)" "Operations Manager (Production)"
* #1221.045 "Passenger Transport Manager" "Passenger Transport Manager"
* #1221.046 "Plantation Manager" "Plantation Manager"
* #1221.047 "Primary School Principal" "Primary School Principal"
* #1221.048 "Principal" "Principal"
* #1221.049 "Principal Head Teacher" "Principal Head Teacher"
* #1221.050 "Processing Manager" "Processing Manager"
* #1221.051 "Producer (Film/Television)" "Producer (Film/Television)"
* #1221.052 "Producer Performing Arts" "Producer Performing Arts"
* #1221.053 "Production Manager" "Production Manager"
* #1221.054 "Production Manager (Manufacturing)" "Production Manager (Manufacturing)"
* #1221.055 "Production Manager Performing Arts" "Production Manager Performing Arts"
* #1221.056 "Publishing Manager" "Publishing Manager"
* #1221.057 "Quarry Manager" "Quarry Manager"
* #1221.058 "Radio Producer" "Radio Producer"
* #1221.059 "Radio Programme Organiser" "Radio Programme Organiser"
* #1221.060 "Radio Programmer" "Radio Programmer"
* #1221.061 "Radio Station Manager" "Radio Station Manager"
* #1221.062 "Railway Goods Freight Manager" "Railway Goods Freight Manager"
* #1221.063 "Railway Station Master" "Railway Station Master"
* #1221.064 "Railway Stationmaster" "Railway Stationmaster"
* #1221.065 "Record Producer" "Record Producer"
* #1221.066 "Road Goods Freight Manager" "Road Goods Freight Manager"
* #1221.067 "Sawmill Manager" "Sawmill Manager"
* #1221.068 "School Administrator" "School Administrator"
* #1221.069 "School Principal" "School Principal"
* #1221.070 "Secondary School Principal" "Secondary School Principal"
* #1221.071 "Senior Education Manager" "Senior Education Manager"
* #1221.072 "Shipping Manager" "Shipping Manager"
* #1221.073 "Stage Producer" "Stage Producer"
* #1221.074 "Television Producer" "Television Producer"
* #1221.075 "Television Programme Organiser" "Television Programme Organiser"
* #1221.076 "Television Programmer" "Television Programmer"
* #1221.077 "Theatre Producer" "Theatre Producer"
* #1221.078 "Theatrical Production Manager" "Theatrical Production Manager"
* #1221.079 "Timber Production Manager" "Timber Production Manager"
* #1221.080 "Traffic Manager" "Traffic Manager"
* #1221.081 "Transport Manager" "Transport Manager"
* #1221.082 "Transport Operations Manager" "Transport Operations Manager"
* #1221.083 "Travel Manager Shipping" "Travel Manager Shipping"
* #1221.084 "Video Producer" "Video Producer"
* #1221.085 "Works Manager" "Works Manager"
* #1222.001 "Accounting Manager" "Accounting Manager"
* #1222.002 "Admin Manager" "Admin Manager"
* #1222.003 "Administration Manager" "Administration Manager"
* #1222.004 "Bank Executive" "Bank Executive"
* #1222.005 "Bank Inspector" "Bank Inspector"
* #1222.006 "Bank Manager" "Bank Manager"
* #1222.007 "Branch Manager" "Branch Manager"
* #1222.008 "Budgeting Manager" "Budgeting Manager"
* #1222.009 "Building Manager" "Building Manager"
* #1222.010 "Building Society Investment Manager" "Building Society Investment Manager"
* #1222.011 "Bureau Manager" "Bureau Manager"
* #1222.012 "Cinema Manager" "Cinema Manager"
* #1222.013 "Club Secretary (Administration)" "Club Secretary (Administration)"
* #1222.014 "Corporate Banker" "Corporate Banker"
* #1222.015 "Credit Controller" "Credit Controller"
* #1222.016 "Credit Manager" "Credit Manager"
* #1222.017 "Dental Administrator" "Dental Administrator"
* #1222.018 "Department Manager" "Department Manager"
* #1222.019 "District Commissioner Inland Revenue" "District Commissioner Inland Revenue"
* #1222.020 "Electoral Officer" "Electoral Officer"
* #1222.021 "Executive Company Secretary" "Executive Company Secretary"
* #1222.022 "Factory Facilities Manager" "Factory Facilities Manager"
* #1222.023 "Finance Director" "Finance Director"
* #1222.024 "Finance Executive" "Finance Executive"
* #1222.025 "Finance Manager" "Finance Manager"
* #1222.026 "Financial Controller" "Financial Controller"
* #1222.027 "Financial Manager" "Financial Manager"
* #1222.028 "Fitness Centre Manager" "Fitness Centre Manager"
* #1222.029 "Foreign Exchange Manager" "Foreign Exchange Manager"
* #1222.030 "Health Service Coordinator" "Health Service Coordinator"
* #1222.031 "Health Services Manager" "Health Services Manager"
* #1222.032 "Hospital Administrator" "Hospital Administrator"
* #1222.033 "Inland Revenue Controller" "Inland Revenue Controller"
* #1222.034 "Insurance Branch Manager" "Insurance Branch Manager"
* #1222.035 "Insurance Executive" "Insurance Executive"
* #1222.036 "Insurance Manager" "Insurance Manager"
* #1222.037 "Investment Manager" "Investment Manager"
* #1222.038 "Loans Manager" "Loans Manager"
* #1222.039 "Medical Administrator" "Medical Administrator"
* #1222.040 "Medical Superintendent" "Medical Superintendent"
* #1222.041 "Merchant Banker" "Merchant Banker"
* #1222.042 "Nursing Administrator" "Nursing Administrator"
* #1222.043 "Price Inspector" "Price Inspector"
* #1222.044 "Project Manager" "Project Manager"
* #1222.045 "Project Manager (Administration)" "Project Manager (Administration)"
* #1222.046 "Project Officer Regional Health Authority" "Project Officer Regional Health Authority"
* #1222.047 "Property Manager" "Property Manager"
* #1222.048 "Public Health Administrator" "Public Health Administrator"
* #1222.049 "Public Health Manager" "Public Health Manager"
* #1222.050 "Racing Administrator" "Racing Administrator"
* #1222.051 "Recreation Manager" "Recreation Manager"
* #1222.052 "Regional Commander of Civil Defence" "Regional Commander of Civil Defence"
* #1222.053 "Regional Controller Inland Revenue" "Regional Controller Inland Revenue"
* #1222.054 "Regional Director Government Administration" "Regional Director Government Administration"
* #1222.055 "Resources Manager" "Resources Manager"
* #1222.056 "Sales Finance Manager" "Sales Finance Manager"
* #1222.057 "Sales Tax Inspector" "Sales Tax Inspector"
* #1222.058 "Savings Bank Manager" "Savings Bank Manager"
* #1222.059 "Secretary Minister of the Crown" "Secretary Minister of the Crown"
* #1222.060 "Tax Inspector" "Tax Inspector"
* #1222.061 "Theatre Manager" "Theatre Manager"
* #1222.062 "Treasurer" "Treasurer"
* #1222.063 "Under Secretary Government Department" "Under Secretary Government Department"
* #1222.064 "University Bursar" "University Bursar"
* #1222.065 "University Registrar" "University Registrar"
* #1223.001 "Employee Relations Manager" "Employee Relations Manager"
* #1223.002 "Human Resources Development Manager" "Human Resources Development Manager"
* #1223.003 "Human Resources Manager" "Human Resources Manager"
* #1223.004 "Industrial Relations Manager" "Industrial Relations Manager"
* #1223.005 "Kaiwhakahaere Tumu" "Kaiwhakahaere Tumu"
* #1223.006 "Labour Relations Manager" "Labour Relations Manager"
* #1223.007 "Personnel Manager" "Personnel Manager"
* #1223.008 "Technical Training Manager" "Technical Training Manager"
* #1223.009 "Training and Development Manager" "Training and Development Manager"
* #1224.001 "Aapiha Whakahaere Hokohoko" "Aapiha Whakahaere Hokohoko"
* #1224.002 "Apiha Whakahaere Hokohoko" "Apiha Whakahaere Hokohoko"
* #1224.003 "Area Sales Manager" "Area Sales Manager"
* #1224.004 "District Sales Manager" "District Sales Manager"
* #1224.005 "Export Marketing Manager" "Export Marketing Manager"
* #1224.006 "Key Account Manager" "Key Account Manager"
* #1224.007 "Market Development Manager" "Market Development Manager"
* #1224.008 "Marketing Executive" "Marketing Executive"
* #1224.009 "Marketing Manager" "Marketing Manager"
* #1224.010 "Marketing Manager Executive" "Marketing Manager Executive"
* #1224.011 "National Sales Manager" "National Sales Manager"
* #1224.012 "Rangatira Hokohoko" "Rangatira Hokohoko"
* #1224.013 "Rangatira Whakahaere Hokohoko" "Rangatira Whakahaere Hokohoko"
* #1224.014 "Sales Coordinator" "Sales Coordinator"
* #1224.015 "Sales Director" "Sales Director"
* #1224.016 "Sales Executive" "Sales Executive"
* #1224.017 "Sales Executive Manager" "Sales Executive Manager"
* #1224.018 "Sales Manager" "Sales Manager"
* #1224.019 "Sales Manager (Banking)" "Sales Manager (Banking)"
* #1224.020 "Sales or Marketing Manager" "Sales or Marketing Manager"
* #1224.021 "Senior Sales Executive Ecommerce" "Senior Sales Executive Ecommerce"
* #1224.022 "Travel Manager" "Travel Manager"
* #1225.001 "Advertising Account Director" "Advertising Account Director"
* #1225.002 "Advertising Account Executive" "Advertising Account Executive"
* #1225.003 "Advertising Agency Director" "Advertising Agency Director"
* #1225.004 "Advertising and Public Relations Manager" "Advertising and Public Relations Manager"
* #1225.005 "Advertising Manager" "Advertising Manager"
* #1225.006 "Advertising Office Manager" "Advertising Office Manager"
* #1225.007 "Company Promoter" "Company Promoter"
* #1225.008 "Public Affairs Manager" "Public Affairs Manager"
* #1225.009 "Public Relations Manager" "Public Relations Manager"
* #1226.001 "Antique Dealer" "Antique Dealer"
* #1226.002 "Apartments Manager" "Apartments Manager"
* #1226.003 "Backpacker Operator" "Backpacker Operator"
* #1226.004 "Bakery Shop Manager" "Bakery Shop Manager"
* #1226.005 "Bar or Caf� Manager" "Bar or Caf� Manager"
* #1226.006 "Billiard Saloon Proprietor Manager" "Billiard Saloon Proprietor Manager"
* #1226.007 "Boarding House Keeper" "Boarding House Keeper"
* #1226.008 "Boarding House Manager" "Boarding House Manager"
* #1226.009 "Book Store Proprietor" "Book Store Proprietor"
* #1226.010 "Bookshop Manager" "Bookshop Manager"
* #1226.011 "Bottle Store Manager" "Bottle Store Manager"
* #1226.012 "Boutique Manager" "Boutique Manager"
* #1226.013 "Boutique Proprietor" "Boutique Proprietor"
* #1226.014 "Cafe Keeper" "Cafe Keeper"
* #1226.015 "Cafe Manager" "Cafe Manager"
* #1226.016 "Cafe Owner" "Cafe Owner"
* #1226.017 "Cafeteria Manager" "Cafeteria Manager"
* #1226.018 "Cafeteria Proprietor" "Cafeteria Proprietor"
* #1226.019 "Camping Ground Manager" "Camping Ground Manager"
* #1226.020 "Camping Site Manager" "Camping Site Manager"
* #1226.021 "Camping Site Proprietor" "Camping Site Proprietor"
* #1226.022 "Canteen Manager" "Canteen Manager"
* #1226.023 "Canteen Proprietor" "Canteen Proprietor"
* #1226.024 "Car Dealer" "Car Dealer"
* #1226.025 "Caravan Park Manager" "Caravan Park Manager"
* #1226.026 "Caravan Park Proprietor" "Caravan Park Proprietor"
* #1226.027 "Caterer" "Caterer"
* #1226.028 "Catering Contractor" "Catering Contractor"
* #1226.029 "Catering Establishment Manager" "Catering Establishment Manager"
* #1226.030 "Catering Proprietor" "Catering Proprietor"
* #1226.031 "Catering Services Manager" "Catering Services Manager"
* #1226.032 "Circulation Manager Newspaper" "Circulation Manager Newspaper"
* #1226.033 "Clothing Retailer" "Clothing Retailer"
* #1226.034 "Club Manager" "Club Manager"
* #1226.035 "Club Manager Licensed" "Club Manager Licensed"
* #1226.036 "Coal Merchant" "Coal Merchant"
* #1226.037 "Coffee Bar Manager" "Coffee Bar Manager"
* #1226.038 "Coffee Bar Proprietor" "Coffee Bar Proprietor"
* #1226.039 "Coffee Lounge Manageress" "Coffee Lounge Manageress"
* #1226.040 "Coffee Lounge Owner" "Coffee Lounge Owner"
* #1226.041 "Crane Hirer Manager" "Crane Hirer Manager"
* #1226.042 "Dairy Proprietor" "Dairy Proprietor"
* #1226.043 "Dairy Shop Manager" "Dairy Shop Manager"
* #1226.044 "Department Store Manager" "Department Store Manager"
* #1226.045 "Distribution Manager" "Distribution Manager"
* #1226.046 "Draper" "Draper"
* #1226.047 "Export Manager" "Export Manager"
* #1226.048 "Exporter" "Exporter"
* #1226.049 "Fairground Amusment Park Proprietor" "Fairground Amusment Park Proprietor"
* #1226.050 "Fast Food Manager" "Fast Food Manager"
* #1226.051 "Fish and Chip Shop Proprietor" "Fish and Chip Shop Proprietor"
* #1226.052 "Fishmonger" "Fishmonger"
* #1226.053 "Flooring Manager" "Flooring Manager"
* #1226.054 "Food Bar Proprietor" "Food Bar Proprietor"
* #1226.055 "Food Services Manager" "Food Services Manager"
* #1226.056 "Foodbar Proprietor" "Foodbar Proprietor"
* #1226.057 "Footwear Retailer" "Footwear Retailer"
* #1226.058 "Fresh Fish Shop Manager" "Fresh Fish Shop Manager"
* #1226.059 "Fruit Shop Owner" "Fruit Shop Owner"
* #1226.060 "Fruiterer" "Fruiterer"
* #1226.061 "Greengrocer" "Greengrocer"
* #1226.062 "Grocer" "Grocer"
* #1226.063 "Grocery Manager" "Grocery Manager"
* #1226.064 "Grocery Store Manager" "Grocery Store Manager"
* #1226.065 "Guest House Keeper" "Guest House Keeper"
* #1226.066 "Guest House Manager" "Guest House Manager"
* #1226.067 "Halls of Residence Manager" "Halls of Residence Manager"
* #1226.068 "Holiday Park Manager" "Holiday Park Manager"
* #1226.069 "Hospital Pharmacy Manager" "Hospital Pharmacy Manager"
* #1226.070 "Hostel Manager" "Hostel Manager"
* #1226.071 "Hotel Keeper" "Hotel Keeper"
* #1226.072 "Hotel Manager" "Hotel Manager"
* #1226.073 "Hotel or Motel Manager" "Hotel or Motel Manager"
* #1226.074 "Hotel Owner" "Hotel Owner"
* #1226.075 "Hotelier" "Hotelier"
* #1226.076 "Import Manager" "Import Manager"
* #1226.077 "Importer" "Importer"
* #1226.078 "Innkeeper" "Innkeeper"
* #1226.079 "Kaiwhakahaere Hotera" "Kaiwhakahaere Hotera"
* #1226.080 "Kaiwhakahaere Toa" "Kaiwhakahaere Toa"
* #1226.081 "Landlady" "Landlady"
* #1226.082 "Landlord" "Landlord"
* #1226.083 "Licenced Motor Vehicle Dealer" "Licenced Motor Vehicle Dealer"
* #1226.084 "Licensed Motor Vehicle Dealer" "Licensed Motor Vehicle Dealer"
* #1226.085 "Liquor Merchant" "Liquor Merchant"
* #1226.086 "Lodge Manager" "Lodge Manager"
* #1226.087 "Logistics Manager" "Logistics Manager"
* #1226.088 "Lunch Bar Manager" "Lunch Bar Manager"
* #1226.089 "Lunch Bar Proprietor" "Lunch Bar Proprietor"
* #1226.090 "Manager Retail Trade" "Manager Retail Trade"
* #1226.091 "Meat Retailer" "Meat Retailer"
* #1226.092 "Menswear Retailer" "Menswear Retailer"
* #1226.093 "Milk Bar Proprietor" "Milk Bar Proprietor"
* #1226.094 "Money Lender" "Money Lender"
* #1226.095 "Motel Manager" "Motel Manager"
* #1226.096 "Motel Owner" "Motel Owner"
* #1226.097 "Motelier" "Motelier"
* #1226.098 "Motor Camp Manager" "Motor Camp Manager"
* #1226.099 "Motor Camp Proprietor" "Motor Camp Proprietor"
* #1226.100 "Motor Inn Manager" "Motor Inn Manager"
* #1226.101 "Motor Vehicle Dealer" "Motor Vehicle Dealer"
* #1226.102 "Other Catering Services Manager" "Other Catering Services Manager"
* #1226.103 "Other Lodging Services Manager" "Other Lodging Services Manager"
* #1226.104 "Pawnbroker" "Pawnbroker"
* #1226.105 "Pharmacy Manager Retail" "Pharmacy Manager Retail"
* #1226.106 "Philatelist" "Philatelist"
* #1226.107 "Pie Cart Proprietor" "Pie Cart Proprietor"
* #1226.108 "Private Hotel Keeper" "Private Hotel Keeper"
* #1226.109 "Proprietor Fast Food" "Proprietor Fast Food"
* #1226.110 "Publican" "Publican"
* #1226.111 "Purchasing Manager" "Purchasing Manager"
* #1226.112 "Rangatira o te Toa" "Rangatira o te Toa"
* #1226.113 "Recycling Dealer" "Recycling Dealer"
* #1226.114 "Recycling Merchant" "Recycling Merchant"
* #1226.115 "Rest Home Proprietor" "Rest Home Proprietor"
* #1226.116 "Restaurant Manager" "Restaurant Manager"
* #1226.117 "Restaurant Manageress" "Restaurant Manageress"
* #1226.118 "Restaurant or Tavern Manager" "Restaurant or Tavern Manager"
* #1226.119 "Restaurant Owner" "Restaurant Owner"
* #1226.120 "Restauranteur" "Restauranteur"
* #1226.121 "Resthome Manager" "Resthome Manager"
* #1226.122 "Resthome Owner" "Resthome Owner"
* #1226.123 "Retail and Shop Manager" "Retail and Shop Manager"
* #1226.124 "Retail Bakery Proprietor" "Retail Bakery Proprietor"
* #1226.125 "Retail Dealer" "Retail Dealer"
* #1226.126 "Retail Floor Manager" "Retail Floor Manager"
* #1226.127 "Retail Manager" "Retail Manager"
* #1226.128 "Retail Proprietor" "Retail Proprietor"
* #1226.129 "Retail Sales Manager" "Retail Sales Manager"
* #1226.130 "Scrap Merchant" "Scrap Merchant"
* #1226.131 "Scrap Metal Dealer" "Scrap Metal Dealer"
* #1226.132 "Second Hand Dealer" "Second Hand Dealer"
* #1226.133 "Secondhand Dealer" "Secondhand Dealer"
* #1226.134 "Service Station Manager" "Service Station Manager"
* #1226.135 "Service Station Owner" "Service Station Owner"
* #1226.136 "Service Station Proprietor" "Service Station Proprietor"
* #1226.137 "Shop Keeper" "Shop Keeper"
* #1226.138 "Shop Manager" "Shop Manager"
* #1226.139 "Shop Manageress" "Shop Manageress"
* #1226.140 "Shop Owner" "Shop Owner"
* #1226.141 "Shop Proprietor" "Shop Proprietor"
* #1226.142 "Shopkeeper" "Shopkeeper"
* #1226.143 "Snack Bar Proprietor" "Snack Bar Proprietor"
* #1226.144 "Stock Saleyards Manager" "Stock Saleyards Manager"
* #1226.145 "Storage and Warehousing Manager" "Storage and Warehousing Manager"
* #1226.146 "Store Manager" "Store Manager"
* #1226.147 "Storekeeper" "Storekeeper"
* #1226.148 "Supermarket Manager" "Supermarket Manager"
* #1226.149 "Supply and Distribution Manager" "Supply and Distribution Manager"
* #1226.150 "Supply Manager" "Supply Manager"
* #1226.151 "Supply Planning Manager" "Supply Planning Manager"
* #1226.152 "TAB Agent" "TAB Agent"
* #1226.153 "TAB District Manager" "TAB District Manager"
* #1226.154 "TAB Manager" "TAB Manager"
* #1226.155 "Takeaway Shop Owner" "Takeaway Shop Owner"
* #1226.156 "Takeaways Manager" "Takeaways Manager"
* #1226.157 "Tavern Keeper" "Tavern Keeper"
* #1226.158 "Tavern Manager" "Tavern Manager"
* #1226.159 "Tea Room Proprietor" "Tea Room Proprietor"
* #1226.160 "Timber Merchant" "Timber Merchant"
* #1226.161 "Tourist Hotel Manager" "Tourist Hotel Manager"
* #1226.162 "Video Shop Manager" "Video Shop Manager"
* #1226.163 "Warehouse Manager" "Warehouse Manager"
* #1226.164 "Warehouse Sales Manager" "Warehouse Sales Manager"
* #1226.165 "Warehouse Wholesaler" "Warehouse Wholesaler"
* #1226.166 "Warehousing Department Manager" "Warehousing Department Manager"
* #1226.167 "Wholesale and Warehouse Manager" "Wholesale and Warehouse Manager"
* #1226.168 "Wholesale Area Manager" "Wholesale Area Manager"
* #1226.169 "Wholesale Bakery Manager" "Wholesale Bakery Manager"
* #1226.170 "Wholesale Manager" "Wholesale Manager"
* #1226.171 "Wholesale Merchant" "Wholesale Merchant"
* #1226.172 "Wholesale Sales Manager" "Wholesale Sales Manager"
* #1226.173 "Wholesale Seed and Produce Merchant" "Wholesale Seed and Produce Merchant"
* #1226.174 "Wholesaler" "Wholesaler"
* #1226.175 "Wine and Liquor Merchant" "Wine and Liquor Merchant"
* #1226.176 "Wool Store Manager" "Wool Store Manager"
* #1226.177 "Working Proprietor Retail" "Working Proprietor Retail"
* #1226.178 "Youth Hostel Manager" "Youth Hostel Manager"
* #1227.001 "Computer Marketing Executive" "Computer Marketing Executive"
* #1227.002 "Computer Operations Coordinator" "Computer Operations Coordinator"
* #1227.003 "Computer Product Manager" "Computer Product Manager"
* #1227.004 "Computer Support Manager" "Computer Support Manager"
* #1227.005 "Computer Systems Manager" "Computer Systems Manager"
* #1227.006 "Computing Services Manager" "Computing Services Manager"
* #1227.007 "Computing Systems Manager" "Computing Systems Manager"
* #1227.008 "Data Processing Manager" "Data Processing Manager"
* #1227.009 "EDP Manager" "EDP Manager"
* #1227.010 "Information Technology Manager" "Information Technology Manager"
* #1227.011 "IT Director" "IT Director"
* #1227.012 "IT Infrastructure Manager" "IT Infrastructure Manager"
* #1227.013 "IT Manager" "IT Manager"
* #1227.014 "IT Support Manager" "IT Support Manager"
* #1227.015 "TSS Manager" "TSS Manager"
* #1228.001 "Organisation and Methods Manager" "Organisation and Methods Manager"
* #1228.002 "Quality Assurance Manager" "Quality Assurance Manager"
* #1228.003 "Quality Certification Manager" "Quality Certification Manager"
* #1228.004 "Research and Development Manager" "Research and Development Manager"
* #1229.001 "Chief Clerk" "Chief Clerk"
* #1229.002 "Clerical Executive Officer" "Clerical Executive Officer"
* #1229.003 "Departmental Head Clerical" "Departmental Head Clerical"
* #1229.004 "Kaiwhakahaere Tari" "Kaiwhakahaere Tari"
* #1229.005 "Office Manager" "Office Manager"
* #1229.006 "Office Manageress" "Office Manageress"
* #1229.007 "Rangatira o te Tari" "Rangatira o te Tari"
* #2111.001 "Astronomer" "Astronomer"
* #2111.002 "Astrophysicist" "Astrophysicist"
* #2111.003 "Biophysicist" "Biophysicist"
* #2111.004 "Nuclear Physicist" "Nuclear Physicist"
* #2111.005 "Physical Scientist" "Physical Scientist"
* #2111.006 "Physicist" "Physicist"
* #2111.007 "Radio Astronomer" "Radio Astronomer"
* #2111.008 "Solid State Physicist" "Solid State Physicist"
* #2112.001 "Atmospheric Scientist" "Atmospheric Scientist"
* #2112.002 "Climate Scientist" "Climate Scientist"
* #2112.003 "Climatologist" "Climatologist"
* #2112.004 "Meteorologist" "Meteorologist"
* #2112.005 "Weather Forecaster" "Weather Forecaster"
* #2113.001 "Chemist (Other than Pharmacist)" "Chemist (Other than Pharmacist)"
* #2113.002 "General Chemist" "General Chemist"
* #2113.003 "Industrial Chemist" "Industrial Chemist"
* #2113.004 "Manufacturing Chemist" "Manufacturing Chemist"
* #2113.005 "Nuclear Chemist" "Nuclear Chemist"
* #2113.006 "Organic Chemist" "Organic Chemist"
* #2113.007 "Paint Technologist" "Paint Technologist"
* #2113.008 "Pharmaceutical Chemist" "Pharmaceutical Chemist"
* #2113.009 "Polymer Chemist" "Polymer Chemist"
* #2113.010 "Research Chemist" "Research Chemist"
* #2114.001 "Earth Scientist" "Earth Scientist"
* #2114.002 "Geological Oceanographer" "Geological Oceanographer"
* #2114.003 "Geologist" "Geologist"
* #2114.004 "Geomorphologist" "Geomorphologist"
* #2114.005 "Geophysical Oceanographer" "Geophysical Oceanographer"
* #2114.006 "Geophysical Scientist" "Geophysical Scientist"
* #2114.007 "Geophysicist" "Geophysicist"
* #2114.008 "Hydrologist" "Hydrologist"
* #2114.009 "Marine Scientist" "Marine Scientist"
* #2114.010 "Palaeontologist" "Palaeontologist"
* #2114.011 "Petrologist" "Petrologist"
* #2114.012 "Seismologist" "Seismologist"
* #2114.013 "Vulcanologist" "Vulcanologist"
* #2121.001 "Actuary" "Actuary"
* #2121.002 "Applied Maths Scientist" "Applied Maths Scientist"
* #2121.003 "Average Adjuster" "Average Adjuster"
* #2121.004 "Biometrician" "Biometrician"
* #2121.005 "Epidemiologist" "Epidemiologist"
* #2121.006 "Mathematical Statistician" "Mathematical Statistician"
* #2121.007 "Mathematician" "Mathematician"
* #2121.008 "Mathematician and/or Statistician" "Mathematician and/or Statistician"
* #2121.009 "Operations Research Analyst" "Operations Research Analyst"
* #2121.010 "Statistician" "Statistician"
* #2131.001 "Analyst Programmer" "Analyst Programmer"
* #2131.002 "Applications Architect" "Applications Architect"
* #2131.003 "Architect - Call Centre" "Architect - Call Centre"
* #2131.004 "Architect - Desktop" "Architect - Desktop"
* #2131.005 "Architect - Networking" "Architect - Networking"
* #2131.006 "Architect Internet Security" "Architect Internet Security"
* #2131.007 "Chief Software Architect" "Chief Software Architect"
* #2131.008 "Cold Fusion Developer" "Cold Fusion Developer"
* #2131.009 "Computer Analyst" "Computer Analyst"
* #2131.010 "Computer Applications Engineer" "Computer Applications Engineer"
* #2131.011 "Computer Programme Analyst" "Computer Programme Analyst"
* #2131.012 "Computer Service Engineer" "Computer Service Engineer"
* #2131.013 "Computer Support Engineer" "Computer Support Engineer"
* #2131.014 "Computer Systems Analyst" "Computer Systems Analyst"
* #2131.015 "Computer Systems Engineer" "Computer Systems Engineer"
* #2131.016 "Computing Network Controller" "Computing Network Controller"
* #2131.017 "Computing Systems Architect" "Computing Systems Architect"
* #2131.018 "Content Engineer" "Content Engineer"
* #2131.019 "Content Product Manager" "Content Product Manager"
* #2131.020 "Data Architect" "Data Architect"
* #2131.021 "Data Warehouse Consultant" "Data Warehouse Consultant"
* #2131.022 "Data Warehouse Project Manager" "Data Warehouse Project Manager"
* #2131.023 "Database Administrator" "Database Administrator"
* #2131.024 "Database Specialist" "Database Specialist"
* #2131.025 "Decision Support Tools Developer" "Decision Support Tools Developer"
* #2131.026 "Ecommerce Consultant" "Ecommerce Consultant"
* #2131.027 "Ecommerce Developer" "Ecommerce Developer"
* #2131.028 "Ecommerce Technical Architect" "Ecommerce Technical Architect"
* #2131.029 "Geographic Information Systems Developer" "Geographic Information Systems Developer"
* #2131.030 "Geographic Information Systems Officer" "Geographic Information Systems Officer"
* #2131.031 "GIS Developer" "GIS Developer"
* #2131.032 "GIS Officer" "GIS Officer"
* #2131.033 "Head of Business Ecommerce" "Head of Business Ecommerce"
* #2131.034 "HTML Coder" "HTML Coder"
* #2131.035 "HTML Developer" "HTML Developer"
* #2131.036 "Internet Architect" "Internet Architect"
* #2131.037 "Internet Consultant" "Internet Consultant"
* #2131.038 "Intranet Administrator" "Intranet Administrator"
* #2131.039 "Intranet Developer" "Intranet Developer"
* #2131.040 "IP Technology System Engineer" "IP Technology System Engineer"
* #2131.041 "IT Administrator" "IT Administrator"
* #2131.042 "IT Consultant" "IT Consultant"
* #2131.043 "IT Recruitment Consultant" "IT Recruitment Consultant"
* #2131.044 "IT Systems Manager" "IT Systems Manager"
* #2131.045 "Java Architect" "Java Architect"
* #2131.046 "Java Developer" "Java Developer"
* #2131.047 "Java Mentor" "Java Mentor"
* #2131.048 "Java Programmer" "Java Programmer"
* #2131.049 "LAN Administrator" "LAN Administrator"
* #2131.050 "LAN Consultant" "LAN Consultant"
* #2131.051 "Lotus Notes Developer" "Lotus Notes Developer"
* #2131.052 "Lotus Web Developer" "Lotus Web Developer"
* #2131.053 "Network Administrator" "Network Administrator"
* #2131.054 "Programme Analyst Data Processing" "Programme Analyst Data Processing"
* #2131.055 "Project Analyst Computing" "Project Analyst Computing"
* #2131.056 "Project Manager Ecommerce" "Project Manager Ecommerce"
* #2131.057 "Project Manager Methods Consultant" "Project Manager Methods Consultant"
* #2131.058 "Smalltalk Visualworks Analyst Programmer" "Smalltalk Visualworks Analyst Programmer"
* #2131.059 "Software Designer" "Software Designer"
* #2131.060 "Software Developer" "Software Developer"
* #2131.061 "Software Engineer" "Software Engineer"
* #2131.062 "Software Programmer" "Software Programmer"
* #2131.063 "SQL Database Administrator" "SQL Database Administrator"
* #2131.064 "Systems Administrator" "Systems Administrator"
* #2131.065 "Systems Analyst" "Systems Analyst"
* #2131.066 "Systems Designer" "Systems Designer"
* #2131.067 "Systems Manager" "Systems Manager"
* #2131.068 "Systems Software Engineer" "Systems Software Engineer"
* #2131.069 "Technical Architect Computing" "Technical Architect Computing"
* #2131.070 "Technical Architect Ecommerce" "Technical Architect Ecommerce"
* #2131.071 "Technology Consultant Computing" "Technology Consultant Computing"
* #2131.072 "UNIX Architect" "UNIX Architect"
* #2131.073 "UNIX System Administrator" "UNIX System Administrator"
* #2131.074 "VB Access Analyst Programmer" "VB Access Analyst Programmer"
* #2131.075 "Visual Basic Developer" "Visual Basic Developer"
* #2131.076 "WAN Administrator" "WAN Administrator"
* #2131.077 "WAN Consultant" "WAN Consultant"
* #2131.078 "WAN Engineer" "WAN Engineer"
* #2131.079 "Web Administrator" "Web Administrator"
* #2131.080 "Web Architect" "Web Architect"
* #2131.081 "Web Design Team Leader" "Web Design Team Leader"
* #2131.082 "Web Designer" "Web Designer"
* #2131.083 "Web Developer" "Web Developer"
* #2131.084 "Web Developer Ecommerce" "Web Developer Ecommerce"
* #2131.085 "Web Development Manager" "Web Development Manager"
* #2131.086 "Web Development Team Member" "Web Development Team Member"
* #2131.087 "Web Interface Developer" "Web Interface Developer"
* #2131.088 "Web Master" "Web Master"
* #2131.089 "Web Page Producer" "Web Page Producer"
* #2131.090 "Web Production Manager" "Web Production Manager"
* #2131.091 "Web Programmer Cold Fusion" "Web Programmer Cold Fusion"
* #2131.092 "Web Startup Developer" "Web Startup Developer"
* #2131.093 "Web Support Engineer" "Web Support Engineer"
* #2131.094 "Web Wonderstar" "Web Wonderstar"
* #2131.095 "Webmaster" "Webmaster"
* #2131.096 "Website Administrator" "Website Administrator"
* #2131.097 "Website Designer" "Website Designer"
* #2131.098 "Website Developer" "Website Developer"
* #2141.001 "Architect" "Architect"
* #2141.002 "Building Designer" "Building Designer"
* #2141.003 "Commercial Architect" "Commercial Architect"
* #2141.004 "Community Liaison Planner" "Community Liaison Planner"
* #2141.005 "Community Planner" "Community Planner"
* #2141.006 "Community Recreation Planner" "Community Recreation Planner"
* #2141.007 "Country Planner" "Country Planner"
* #2141.008 "District Planner" "District Planner"
* #2141.009 "Garden Designer" "Garden Designer"
* #2141.010 "Housing Architect" "Housing Architect"
* #2141.011 "Landscape Architect" "Landscape Architect"
* #2141.012 "Landscape Designer" "Landscape Designer"
* #2141.013 "Landscape Planner" "Landscape Planner"
* #2141.014 "Resource Consent Planner" "Resource Consent Planner"
* #2141.015 "Resource Management Planner" "Resource Management Planner"
* #2141.016 "Town and Country Planner" "Town and Country Planner"
* #2141.017 "Town Planner" "Town Planner"
* #2141.018 "Urban Planner" "Urban Planner"
* #2142.001 "Airport Construction Engineer" "Airport Construction Engineer"
* #2142.002 "Building Construction Engineer" "Building Construction Engineer"
* #2142.003 "Civil Consulting Engineer" "Civil Consulting Engineer"
* #2142.004 "Civil Design Engineer" "Civil Design Engineer"
* #2142.005 "Civil Engineer" "Civil Engineer"
* #2142.006 "Construction Engineer" "Construction Engineer"
* #2142.007 "Construction Engineer Roads" "Construction Engineer Roads"
* #2142.008 "Drainage Engineer" "Drainage Engineer"
* #2142.009 "Highway Maintenance Engineer" "Highway Maintenance Engineer"
* #2142.010 "Hydraulic Engineer" "Hydraulic Engineer"
* #2142.011 "Hydrographical Engineer" "Hydrographical Engineer"
* #2142.012 "Hydrological Engineer" "Hydrological Engineer"
* #2142.013 "Irrigation Engineer" "Irrigation Engineer"
* #2142.014 "Local Body Engineer" "Local Body Engineer"
* #2142.015 "Municipal Engineer" "Municipal Engineer"
* #2142.016 "Other Civil Engineer" "Other Civil Engineer"
* #2142.017 "Project Engineer (Construction)" "Project Engineer (Construction)"
* #2142.018 "Project Inspector Civil Engineer" "Project Inspector Civil Engineer"
* #2142.019 "Public Health Engineer" "Public Health Engineer"
* #2142.020 "Railway Construction Engineer" "Railway Construction Engineer"
* #2142.021 "Roading Consulting Engineer" "Roading Consulting Engineer"
* #2142.022 "Roading Engineer" "Roading Engineer"
* #2142.023 "Sanitary Drainage Engineer" "Sanitary Drainage Engineer"
* #2142.024 "Sanitation Engineer" "Sanitation Engineer"
* #2142.025 "Structural Engineer" "Structural Engineer"
* #2142.026 "Structural Steel Engineer" "Structural Steel Engineer"
* #2142.027 "Traffic Engineer" "Traffic Engineer"
* #2142.028 "Traffic Planning Engineer" "Traffic Planning Engineer"
* #2142.029 "Transportation Engineer" "Transportation Engineer"
* #2142.030 "Water and Soil Engineer" "Water and Soil Engineer"
* #2142.031 "Water Flow Engineer" "Water Flow Engineer"
* #2142.032 "Water Flow Research Engineer" "Water Flow Research Engineer"
* #2142.033 "Water Resources Engineer" "Water Resources Engineer"
* #2142.034 "Water Supply Engineer" "Water Supply Engineer"
* #2143.001 "Electrical Consulting Engineer" "Electrical Consulting Engineer"
* #2143.002 "Electrical Engineer" "Electrical Engineer"
* #2143.003 "Electrical Engineer (Automotive)" "Electrical Engineer (Automotive)"
* #2143.004 "Electrical Instrument Engineer" "Electrical Instrument Engineer"
* #2143.005 "Industrial Electrical Engineer" "Industrial Electrical Engineer"
* #2143.006 "Power Distribution Engineer" "Power Distribution Engineer"
* #2143.007 "Power Systems Engineer" "Power Systems Engineer"
* #2143.008 "Power Transmission Engineer" "Power Transmission Engineer"
* #2144.001 "Electronic and Telecommunication Engineer" "Electronic and Telecommunication Engineer"
* #2144.002 "Electronic Instrument Engineer" "Electronic Instrument Engineer"
* #2144.003 "Electronics Consulting Engineer" "Electronics Consulting Engineer"
* #2144.004 "Electronics Design Engineer" "Electronics Design Engineer"
* #2144.005 "Electronics Designer" "Electronics Designer"
* #2144.006 "Electronics Engineer" "Electronics Engineer"
* #2144.007 "Electronics Project Engineer" "Electronics Project Engineer"
* #2144.008 "Fibre Optics Engineer" "Fibre Optics Engineer"
* #2144.009 "Fibre Optics Transmission Engineer" "Fibre Optics Transmission Engineer"
* #2144.010 "Radar Engineer" "Radar Engineer"
* #2144.011 "Radio and Telecommunications Engineer" "Radio and Telecommunications Engineer"
* #2144.012 "Radio Engineer" "Radio Engineer"
* #2144.013 "Satellite Transmission Engineer" "Satellite Transmission Engineer"
* #2144.014 "Signal Systems Engineer" "Signal Systems Engineer"
* #2144.015 "Telecommunications Engineer" "Telecommunications Engineer"
* #2144.016 "Television Engineer" "Television Engineer"
* #2145.001 "Aeronautical Design Engineer" "Aeronautical Design Engineer"
* #2145.002 "Aeronautical Engineer" "Aeronautical Engineer"
* #2145.003 "Aerospace Engineer" "Aerospace Engineer"
* #2145.004 "Agricultural Engineer" "Agricultural Engineer"
* #2145.005 "Air Conditioning Engineer" "Air Conditioning Engineer"
* #2145.006 "Aircraft Designer" "Aircraft Designer"
* #2145.007 "Aircraft Engineer" "Aircraft Engineer"
* #2145.008 "Aircraft Engineering Consultant" "Aircraft Engineering Consultant"
* #2145.009 "Aircraft Examiner" "Aircraft Examiner"
* #2145.010 "Aircraft Inspector" "Aircraft Inspector"
* #2145.011 "Aircraft Surveyor" "Aircraft Surveyor"
* #2145.012 "Diesel Engineer" "Diesel Engineer"
* #2145.013 "Diesel Engineer (Automotive)" "Diesel Engineer (Automotive)"
* #2145.014 "Engineer Freezing Works" "Engineer Freezing Works"
* #2145.015 "Farm Engineer" "Farm Engineer"
* #2145.016 "Farm Equipment Design Engineer" "Farm Equipment Design Engineer"
* #2145.017 "Heating and Ventilation Engineer" "Heating and Ventilation Engineer"
* #2145.018 "Heating Control Engineer" "Heating Control Engineer"
* #2145.019 "Heating Engineer" "Heating Engineer"
* #2145.020 "Heavy Industrial Engineer" "Heavy Industrial Engineer"
* #2145.021 "Horticultural Engineer" "Horticultural Engineer"
* #2145.022 "Industrial Engineer" "Industrial Engineer"
* #2145.023 "Industrial Engineer (Automotive)" "Industrial Engineer (Automotive)"
* #2145.024 "Industrial Machinery Engineer" "Industrial Machinery Engineer"
* #2145.025 "Instrument Engineer Mechanical" "Instrument Engineer Mechanical"
* #2145.026 "Marine Architect" "Marine Architect"
* #2145.027 "Marine Designer" "Marine Designer"
* #2145.028 "Marine Examiner" "Marine Examiner"
* #2145.029 "Mechanical Consulting Engineer" "Mechanical Consulting Engineer"
* #2145.030 "Mechanical Engineer" "Mechanical Engineer"
* #2145.031 "Mechanical Engineer (Automotive)" "Mechanical Engineer (Automotive)"
* #2145.032 "Mechanical Engineer Aeronautical" "Mechanical Engineer Aeronautical"
* #2145.033 "Mechanical Engineer Heating and Ventilation" "Mechanical Engineer Heating and Ventilation"
* #2145.034 "Nautical Surveyor" "Nautical Surveyor"
* #2145.035 "Naval Architect" "Naval Architect"
* #2145.036 "Refrigeration and Air Conditioning Engineer" "Refrigeration and Air Conditioning Engineer"
* #2145.037 "Refrigeration Engineer" "Refrigeration Engineer"
* #2145.038 "Refrigeration Services Engineer" "Refrigeration Services Engineer"
* #2145.039 "Refrigeration System Engineer" "Refrigeration System Engineer"
* #2145.040 "Ship Designer" "Ship Designer"
* #2145.041 "Ships Surveyor" "Ships Surveyor"
* #2145.042 "Ventilation Engineer" "Ventilation Engineer"
* #2146.001 "Biochemical Engineer" "Biochemical Engineer"
* #2146.002 "Bioprocess Engineer" "Bioprocess Engineer"
* #2146.003 "Biotechnologist" "Biotechnologist"
* #2146.004 "Brewery Technologist" "Brewery Technologist"
* #2146.005 "Chemical Engineer" "Chemical Engineer"
* #2146.006 "Food and Drink Technologist" "Food and Drink Technologist"
* #2146.007 "Food Chemist" "Food Chemist"
* #2146.008 "Food Engineer" "Food Engineer"
* #2146.009 "Food Scientist" "Food Scientist"
* #2146.010 "Food Technologist" "Food Technologist"
* #2146.011 "Gas Engineer" "Gas Engineer"
* #2146.012 "Glass and Ceramics Technologist" "Glass and Ceramics Technologist"
* #2146.013 "Oil Refinery Engineer" "Oil Refinery Engineer"
* #2146.014 "Petroleum Engineer" "Petroleum Engineer"
* #2146.015 "Petroleum Engineer Refinery" "Petroleum Engineer Refinery"
* #2147.001 "Applied Scientist Metallurgy" "Applied Scientist Metallurgy"
* #2147.002 "Assayer" "Assayer"
* #2147.003 "Coal Mining Engineer" "Coal Mining Engineer"
* #2147.004 "Colliery Engineer" "Colliery Engineer"
* #2147.005 "Metallurgist" "Metallurgist"
* #2147.006 "Metals Scientist" "Metals Scientist"
* #2147.007 "Mining Engineer" "Mining Engineer"
* #2147.008 "Prospecter Oil Petroleum Gas" "Prospecter Oil Petroleum Gas"
* #2148.001 "Cartographer" "Cartographer"
* #2148.002 "Engineering Surveyor" "Engineering Surveyor"
* #2148.003 "Facilities Engineer" "Facilities Engineer"
* #2148.004 "Geodetic Surveyor" "Geodetic Surveyor"
* #2148.005 "Hydraulic Surveyor" "Hydraulic Surveyor"
* #2148.006 "Hydrographic Surveyor" "Hydrographic Surveyor"
* #2148.007 "Land Surveyor" "Land Surveyor"
* #2148.008 "Map Maker" "Map Maker"
* #2148.009 "Marine Cartographer" "Marine Cartographer"
* #2148.010 "Marine Surveyor" "Marine Surveyor"
* #2148.011 "Mines Surveyor" "Mines Surveyor"
* #2148.012 "Photogrammetrist" "Photogrammetrist"
* #2148.013 "Photographic Surveyor" "Photographic Surveyor"
* #2148.014 "Surveyor" "Surveyor"
* #2211.001 "Agricultural Scientist" "Agricultural Scientist"
* #2211.002 "Agronomist" "Agronomist"
* #2211.003 "Agrostologist" "Agrostologist"
* #2211.004 "Anatomist" "Anatomist"
* #2211.005 "Animal Ecologist" "Animal Ecologist"
* #2211.006 "Animal Physiologist" "Animal Physiologist"
* #2211.007 "Animal Scientist" "Animal Scientist"
* #2211.008 "Apicultural Scientist" "Apicultural Scientist"
* #2211.009 "Aquatic Biologist" "Aquatic Biologist"
* #2211.010 "Biologist" "Biologist"
* #2211.011 "Botanist" "Botanist"
* #2211.012 "Crop Research Scientist" "Crop Research Scientist"
* #2211.013 "Ecological Researcher" "Ecological Researcher"
* #2211.014 "Ecologist" "Ecologist"
* #2211.015 "Endocrinologist" "Endocrinologist"
* #2211.016 "Entomologist" "Entomologist"
* #2211.017 "Environmental Scientist" "Environmental Scientist"
* #2211.018 "Environmentalist" "Environmentalist"
* #2211.019 "Farming Scientist" "Farming Scientist"
* #2211.020 "Fisheries Researcher" "Fisheries Researcher"
* #2211.021 "Fisheries Scientist" "Fisheries Scientist"
* #2211.022 "Forest Pathologist" "Forest Pathologist"
* #2211.023 "Forest Product Scientist" "Forest Product Scientist"
* #2211.024 "Forest Scientist" "Forest Scientist"
* #2211.025 "Forester" "Forester"
* #2211.026 "Forestry Conservationist" "Forestry Conservationist"
* #2211.027 "Forestry Researcher" "Forestry Researcher"
* #2211.028 "Forestry Scientist" "Forestry Scientist"
* #2211.029 "Freshwater Ecologist" "Freshwater Ecologist"
* #2211.030 "Fruit Research Scientist" "Fruit Research Scientist"
* #2211.031 "Horticultural Scientist" "Horticultural Scientist"
* #2211.032 "Marine Biologist" "Marine Biologist"
* #2211.033 "Marine Ecologist" "Marine Ecologist"
* #2211.034 "Molecular Biologist" "Molecular Biologist"
* #2211.035 "Mycologist" "Mycologist"
* #2211.036 "Ornithologist" "Ornithologist"
* #2211.037 "Osteologist" "Osteologist"
* #2211.038 "Phytotomist" "Phytotomist"
* #2211.039 "Plant Biologist" "Plant Biologist"
* #2211.040 "Plant Ecologist" "Plant Ecologist"
* #2211.041 "Plant Environmental Biologist" "Plant Environmental Biologist"
* #2211.042 "Plant Molecular Biologist" "Plant Molecular Biologist"
* #2211.043 "Plant Pathologist" "Plant Pathologist"
* #2211.044 "Plant Physiologist" "Plant Physiologist"
* #2211.045 "Plant Taxonomist" "Plant Taxonomist"
* #2211.046 "Plant Toxicologist" "Plant Toxicologist"
* #2211.047 "Pomologist" "Pomologist"
* #2211.048 "Silviculturist" "Silviculturist"
* #2211.049 "Wildlife Biologist" "Wildlife Biologist"
* #2211.050 "Wildlife Conservationist" "Wildlife Conservationist"
* #2211.051 "Wool Research Scientist" "Wool Research Scientist"
* #2211.052 "Zoologist" "Zoologist"
* #2212.001 "Anatomical Pathologist" "Anatomical Pathologist"
* #2212.002 "Bacteriologist" "Bacteriologist"
* #2212.003 "Biochemist" "Biochemist"
* #2212.004 "Biological Chemist" "Biological Chemist"
* #2212.005 "Biomedical Engineer" "Biomedical Engineer"
* #2212.006 "Cellular Biochemist" "Cellular Biochemist"
* #2212.007 "Cytologist" "Cytologist"
* #2212.008 "Forensic Biologist" "Forensic Biologist"
* #2212.009 "Forensic Scientist" "Forensic Scientist"
* #2212.010 "Haemotologist" "Haemotologist"
* #2212.011 "Histologist" "Histologist"
* #2212.012 "Immunologist" "Immunologist"
* #2212.013 "Industrial Microbiologist" "Industrial Microbiologist"
* #2212.014 "Medical Microbiologist" "Medical Microbiologist"
* #2212.015 "Medical Pathologist" "Medical Pathologist"
* #2212.016 "Medical Scientist" "Medical Scientist"
* #2212.017 "Microbiologist" "Microbiologist"
* #2212.018 "Molecular Biochemist" "Molecular Biochemist"
* #2212.019 "Molecular Scientist (Medicine)" "Molecular Scientist (Medicine)"
* #2212.020 "Parasitologist" "Parasitologist"
* #2212.021 "Pharmacologist" "Pharmacologist"
* #2212.022 "Physiologist" "Physiologist"
* #2212.023 "Public Health Scientist" "Public Health Scientist"
* #2212.024 "Research Biochemist" "Research Biochemist"
* #2212.025 "Respiratory Physiologist" "Respiratory Physiologist"
* #2212.026 "Toxicologist" "Toxicologist"
* #2212.027 "Virologist" "Virologist"
* #2213.001 "Agricultural Advisor" "Agricultural Advisor"
* #2213.002 "Agricultural Consultant" "Agricultural Consultant"
* #2213.003 "Agricultural Economic Advisor" "Agricultural Economic Advisor"
* #2213.004 "Animal Husbandry Advisor" "Animal Husbandry Advisor"
* #2213.005 "Apiculture Advisor" "Apiculture Advisor"
* #2213.006 "Citrus Farm Advisor" "Citrus Farm Advisor"
* #2213.007 "Conservation Officer" "Conservation Officer"
* #2213.008 "Dairy Farm Advisor" "Dairy Farm Advisor"
* #2213.009 "Farm Advisor" "Farm Advisor"
* #2213.010 "Farm Advisory Officer" "Farm Advisory Officer"
* #2213.011 "Farm Consultant" "Farm Consultant"
* #2213.012 "Farm Drainage Advisor" "Farm Drainage Advisor"
* #2213.013 "Farm Economic Techniques Advisor" "Farm Economic Techniques Advisor"
* #2213.014 "Floriculture Consultant" "Floriculture Consultant"
* #2213.015 "Forest Advisor" "Forest Advisor"
* #2213.016 "Forestry Advisor" "Forestry Advisor"
* #2213.017 "Forestry Consultant" "Forestry Consultant"
* #2213.018 "Forestry Field Officer" "Forestry Field Officer"
* #2213.019 "Grain and Crops Advisor" "Grain and Crops Advisor"
* #2213.020 "Horticultural Consultant" "Horticultural Consultant"
* #2213.021 "Horticultural Field Consultant" "Horticultural Field Consultant"
* #2213.022 "Horticulture Advisor" "Horticulture Advisor"
* #2213.023 "Orchard Consultant" "Orchard Consultant"
* #2213.024 "Pedologist" "Pedologist"
* #2213.025 "Scientific Soil Tester" "Scientific Soil Tester"
* #2213.026 "Soil Advisor" "Soil Advisor"
* #2213.027 "Soil Chemist" "Soil Chemist"
* #2213.028 "Soil Conservationist" "Soil Conservationist"
* #2213.029 "Soil Ecologist" "Soil Ecologist"
* #2213.030 "Soil Fertility Expert" "Soil Fertility Expert"
* #2213.031 "Soil Physicist" "Soil Physicist"
* #2213.032 "Soil Scientist" "Soil Scientist"
* #2213.033 "Vegetable Consultant" "Vegetable Consultant"
* #2221.001 "Anaesthesiologist" "Anaesthesiologist"
* #2221.002 "Anaesthetist" "Anaesthetist"
* #2221.003 "Cancer Specialist" "Cancer Specialist"
* #2221.004 "Cardiologist" "Cardiologist"
* #2221.005 "Cardiothoracic Surgeon" "Cardiothoracic Surgeon"
* #2221.006 "Child Birth Specialist" "Child Birth Specialist"
* #2221.007 "Clinical Oncologist" "Clinical Oncologist"
* #2221.008 "Dermatologist" "Dermatologist"
* #2221.009 "Diagnostic Radiologist" "Diagnostic Radiologist"
* #2221.010 "Doctor General Practice" "Doctor General Practice"
* #2221.011 "Doctor Specialised Practice" "Doctor Specialised Practice"
* #2221.012 "Family Doctor" "Family Doctor"
* #2221.013 "General Practitioner" "General Practitioner"
* #2221.014 "General Surgeon" "General Surgeon"
* #2221.015 "GP" "GP"
* #2221.016 "Gynaecologist" "Gynaecologist"
* #2221.017 "Hospital Doctor" "Hospital Doctor"
* #2221.018 "Hospital Registrar" "Hospital Registrar"
* #2221.019 "House Doctor" "House Doctor"
* #2221.020 "House Surgeon" "House Surgeon"
* #2221.021 "Infant Care Medical Specialist" "Infant Care Medical Specialist"
* #2221.022 "Intensive Care Surgeon" "Intensive Care Surgeon"
* #2221.023 "Medical Intern" "Medical Intern"
* #2221.024 "Medical Officer" "Medical Officer"
* #2221.025 "Medical Practitioner" "Medical Practitioner"
* #2221.026 "Medical Sedation Specialist" "Medical Sedation Specialist"
* #2221.027 "Medical Specialist" "Medical Specialist"
* #2221.028 "Nephrologist" "Nephrologist"
* #2221.029 "Neurologist" "Neurologist"
* #2221.030 "Neurosurgeon" "Neurosurgeon"
* #2221.031 "Obstetrician" "Obstetrician"
* #2221.032 "Oncologist" "Oncologist"
* #2221.033 "Ophthalmologist" "Ophthalmologist"
* #2221.034 "Orthopaedic Surgeon" "Orthopaedic Surgeon"
* #2221.035 "Otolaryngologist" "Otolaryngologist"
* #2221.036 "Paediatrician" "Paediatrician"
* #2221.037 "Pathologist" "Pathologist"
* #2221.038 "Physician" "Physician"
* #2221.039 "Plastic Surgeon" "Plastic Surgeon"
* #2221.040 "Psychiatrist" "Psychiatrist"
* #2221.041 "Psychogeriatrician" "Psychogeriatrician"
* #2221.042 "Radiation Oncologist" "Radiation Oncologist"
* #2221.043 "Radiologist" "Radiologist"
* #2221.044 "Radiotherapist" "Radiotherapist"
* #2221.045 "Resident Medical Officer" "Resident Medical Officer"
* #2221.046 "School Doctor" "School Doctor"
* #2221.047 "Sports Medicine Practitioner" "Sports Medicine Practitioner"
* #2221.048 "Surgeon" "Surgeon"
* #2221.049 "Urologist" "Urologist"
* #2221.050 "Venereologist" "Venereologist"
* #2222.001 "Dental Surgeon" "Dental Surgeon"
* #2222.002 "Dentist" "Dentist"
* #2222.003 "Oral Surgeon" "Oral Surgeon"
* #2222.004 "Orthodontist" "Orthodontist"
* #2222.005 "Paedodontist" "Paedodontist"
* #2222.006 "Periodontist" "Periodontist"
* #2222.007 "Prosthodontist" "Prosthodontist"
* #2223.001 "Animal Doctor" "Animal Doctor"
* #2223.002 "Meat Veterinarian" "Meat Veterinarian"
* #2223.003 "Public Health Veterinarian" "Public Health Veterinarian"
* #2223.004 "Veterinarian" "Veterinarian"
* #2223.005 "Veterinary Diagnostic Officer" "Veterinary Diagnostic Officer"
* #2223.006 "Veterinary Officer Agriculture" "Veterinary Officer Agriculture"
* #2223.007 "Veterinary Pathologist" "Veterinary Pathologist"
* #2223.008 "Veterinary Surgeon" "Veterinary Surgeon"
* #2224.001 "Community Pharmacist" "Community Pharmacist"
* #2224.002 "Health Service Pharmacist" "Health Service Pharmacist"
* #2224.003 "Hospital Chemist" "Hospital Chemist"
* #2224.004 "Hospital Dispensing Chemist" "Hospital Dispensing Chemist"
* #2224.005 "Hospital Pharmacist" "Hospital Pharmacist"
* #2224.006 "Retail Chemist" "Retail Chemist"
* #2224.007 "Retail Dispensing Chemist" "Retail Dispensing Chemist"
* #2224.008 "Retail Pharmacist" "Retail Pharmacist"
* #2225.001 "Clinical Dietitian" "Clinical Dietitian"
* #2225.002 "Community Dietitian" "Community Dietitian"
* #2225.003 "Dietician" "Dietician"
* #2225.004 "Dietitian" "Dietitian"
* #2225.005 "Hospital Dietician" "Hospital Dietician"
* #2225.006 "Hospital Dietitian" "Hospital Dietitian"
* #2225.007 "Public Health Dietitian" "Public Health Dietitian"
* #2225.008 "Public Health Nutritionist" "Public Health Nutritionist"
* #2226.001 "Oculist" "Oculist"
* #2226.002 "Opthalmic Optician" "Opthalmic Optician"
* #2226.003 "Optometrist" "Optometrist"
* #2226.004 "Orthoptist Squint Correction" "Orthoptist Squint Correction"
* #2231.001 "Baby Health Nurse" "Baby Health Nurse"
* #2231.002 "Charge Nurse" "Charge Nurse"
* #2231.003 "Child Care Nurse" "Child Care Nurse"
* #2231.004 "Child Health Nurse" "Child Health Nurse"
* #2231.005 "Community Child and Family Nurse" "Community Child and Family Nurse"
* #2231.006 "District Nurse" "District Nurse"
* #2231.007 "Factory Nurse" "Factory Nurse"
* #2231.008 "General Nurse" "General Nurse"
* #2231.009 "General Registered Nurse" "General Registered Nurse"
* #2231.010 "Hospital Matron" "Hospital Matron"
* #2231.011 "Hospital Nurse" "Hospital Nurse"
* #2231.012 "Industrial Nurse" "Industrial Nurse"
* #2231.013 "Kumau Mahi Whaanui" "Kumau Mahi Whaanui"
* #2231.014 "Kumau Mahi Whanui" "Kumau Mahi Whanui"
* #2231.015 "Maternity Nurse" "Maternity Nurse"
* #2231.016 "Mental Health Nurse" "Mental Health Nurse"
* #2231.017 "Mid Wife" "Mid Wife"
* #2231.018 "Midwife" "Midwife"
* #2231.019 "Naahi Kua Reehitatia" "Naahi Kua Reehitatia"
* #2231.020 "Naahi Mahi Whaanui" "Naahi Mahi Whaanui"
* #2231.021 "Nahi Kua Rehitatia" "Nahi Kua Rehitatia"
* #2231.022 "Nahi Mahi Whanui" "Nahi Mahi Whanui"
* #2231.023 "Neehi Kua Reehitatia" "Neehi Kua Reehitatia"
* #2231.024 "Neehi Mahi Whaanui" "Neehi Mahi Whaanui"
* #2231.025 "Nehi Kua Rehitatia" "Nehi Kua Rehitatia"
* #2231.026 "Nehi Mahi Whanui" "Nehi Mahi Whanui"
* #2231.027 "Nurse Inspector" "Nurse Inspector"
* #2231.028 "Nursing Sister" "Nursing Sister"
* #2231.029 "Occupational Health Nurse" "Occupational Health Nurse"
* #2231.030 "Operating Theatre Nurse" "Operating Theatre Nurse"
* #2231.031 "Other Midwifery Personnel" "Other Midwifery Personnel"
* #2231.032 "Plunket Nurse" "Plunket Nurse"
* #2231.033 "Practice Nurse" "Practice Nurse"
* #2231.034 "Principal Nurse" "Principal Nurse"
* #2231.035 "Principal Nurse - Rest Home" "Principal Nurse - Rest Home"
* #2231.036 "Professional Midwife" "Professional Midwife"
* #2231.037 "Psychiatric Nurse" "Psychiatric Nurse"
* #2231.038 "Psychopaedic Nurse" "Psychopaedic Nurse"
* #2231.039 "Public Health Education Nurse" "Public Health Education Nurse"
* #2231.040 "Public Health Nurse" "Public Health Nurse"
* #2231.041 "Public Health Registered Nurse" "Public Health Registered Nurse"
* #2231.042 "Registered Geriatric Nurse" "Registered Geriatric Nurse"
* #2231.043 "Registered Hospital Nurse" "Registered Hospital Nurse"
* #2231.044 "Registered Mental Nurse" "Registered Mental Nurse"
* #2231.045 "Registered Midwife" "Registered Midwife"
* #2231.046 "Registered Nurse" "Registered Nurse"
* #2231.047 "Registered Practice Nurse" "Registered Practice Nurse"
* #2231.048 "Registered Psychopaedic Nurse" "Registered Psychopaedic Nurse"
* #2231.049 "School Health Nurse" "School Health Nurse"
* #2231.050 "School Nurse" "School Nurse"
* #2231.051 "Staff Nurse" "Staff Nurse"
* #2231.052 "Tapuhi Kua Reehitatia" "Tapuhi Kua Reehitatia"
* #2231.053 "Tapuhi Kua Rehitatia" "Tapuhi Kua Rehitatia"
* #2231.054 "Tapuhi Mahi Whaanui" "Tapuhi Mahi Whaanui"
* #2231.055 "Tapuhi Mahi Whanui" "Tapuhi Mahi Whanui"
* #2311.001 "College of Education Lecturer" "College of Education Lecturer"
* #2311.002 "Higher Education Lecturer" "Higher Education Lecturer"
* #2311.003 "Nurse Tutor" "Nurse Tutor"
* #2311.004 "Nursing Instructor" "Nursing Instructor"
* #2311.005 "Nursing Tutor" "Nursing Tutor"
* #2311.006 "Polytech Teacher" "Polytech Teacher"
* #2311.007 "Polytechnic Lecturer" "Polytechnic Lecturer"
* #2311.008 "Polytechnic Tutor" "Polytechnic Tutor"
* #2311.009 "Technology Teacher" "Technology Teacher"
* #2311.010 "Tertiary Education Teacher" "Tertiary Education Teacher"
* #2311.011 "Tertiary Lecturer" "Tertiary Lecturer"
* #2311.012 "Tertiary Teacher" "Tertiary Teacher"
* #2311.013 "Training College Tutor" "Training College Tutor"
* #2311.014 "Tutor in PTE" "Tutor in PTE"
* #2311.015 "University Demonstrator" "University Demonstrator"
* #2311.016 "University Lecturer" "University Lecturer"
* #2311.017 "University Professor" "University Professor"
* #2311.018 "University Reader" "University Reader"
* #2311.019 "University Tutor" "University Tutor"
* #2321.001 "High School Teacher" "High School Teacher"
* #2321.002 "House Tutor Secondary School" "House Tutor Secondary School"
* #2321.003 "Housemaster Secondary School" "Housemaster Secondary School"
* #2321.004 "Kaiako Kura Tuarua" "Kaiako Kura Tuarua"
* #2321.005 "Kaiwhakaako Kura Tuarua" "Kaiwhakaako Kura Tuarua"
* #2321.006 "Mahita Kura Tuarua" "Mahita Kura Tuarua"
* #2321.007 "Night School Teacher Secondary School" "Night School Teacher Secondary School"
* #2321.008 "Secondary Correspondence School Teacher" "Secondary Correspondence School Teacher"
* #2321.009 "Secondary School Teacher" "Secondary School Teacher"
* #2331.001 "Housemaster Primary School" "Housemaster Primary School"
* #2331.002 "Intermediate School Teacher" "Intermediate School Teacher"
* #2331.003 "Intermediate Teacher" "Intermediate Teacher"
* #2331.004 "Kaiako Kura Tuatahi" "Kaiako Kura Tuatahi"
* #2331.005 "Kaiwhakaako Kura Tuatahi" "Kaiwhakaako Kura Tuatahi"
* #2331.006 "Mahita Kura Tuatahi" "Mahita Kura Tuatahi"
* #2331.007 "Night School Teacher Primary School" "Night School Teacher Primary School"
* #2331.008 "Primary Correspondence School Teacher" "Primary Correspondence School Teacher"
* #2331.009 "Primary School Teacher" "Primary School Teacher"
* #2331.010 "Primary Teacher" "Primary Teacher"
* #2332.001 "Bilingual Teacher" "Bilingual Teacher"
* #2332.002 "Day Nursery Assistant" "Day Nursery Assistant"
* #2332.003 "Early Childhood Teacher" "Early Childhood Teacher"
* #2332.004 "Kaiako Kohanga Reo" "Kaiako Kohanga Reo"
* #2332.005 "Kaiako Koohanga Reo" "Kaiako Koohanga Reo"
* #2332.006 "Kaiako Reo Maaori" "Kaiako Reo Maaori"
* #2332.007 "Kaiako TKR" "Kaiako TKR"
* #2332.008 "Kaiwhakaako I Te Reo Maori" "Kaiwhakaako I Te Reo Maori"
* #2332.009 "Kaiwhakaako Kohanga Reo" "Kaiwhakaako Kohanga Reo"
* #2332.010 "Kaiwhakaako Koohanga Reo" "Kaiwhakaako Koohanga Reo"
* #2332.011 "Kindergarten Teacher" "Kindergarten Teacher"
* #2332.012 "Kohanga Reo Kaiako" "Kohanga Reo Kaiako"
* #2332.013 "Kohanga Reo Kaiawhina" "Kohanga Reo Kaiawhina"
* #2332.014 "Kohanga Reo Teacher" "Kohanga Reo Teacher"
* #2332.015 "Kohanga Reo Worker" "Kohanga Reo Worker"
* #2332.016 "Maori Language Nest Teacher" "Maori Language Nest Teacher"
* #2332.017 "Montessori Teacher" "Montessori Teacher"
* #2332.018 "Other Preprimary Teacher" "Other Preprimary Teacher"
* #2332.019 "Play Centre or Playground Supervisor" "Play Centre or Playground Supervisor"
* #2332.020 "Play Centre Supervisor" "Play Centre Supervisor"
* #2332.021 "Playcentre Supervisor" "Playcentre Supervisor"
* #2332.022 "Playground Supervisor" "Playground Supervisor"
* #2332.023 "Playschool Teacher" "Playschool Teacher"
* #2332.024 "Pre School Teacher" "Pre School Teacher"
* #2332.025 "Preschool Coordinator" "Preschool Coordinator"
* #2332.026 "Preschool Helper" "Preschool Helper"
* #2332.027 "Preschool Supervisor Kindergarten" "Preschool Supervisor Kindergarten"
* #2332.028 "Preschool Supervisor Play Centre" "Preschool Supervisor Play Centre"
* #2332.029 "Supervisor Creche" "Supervisor Creche"
* #2332.030 "Total Immersion Teacher" "Total Immersion Teacher"
* #2341.001 "Audio Visual Teaching Specialist" "Audio Visual Teaching Specialist"
* #2341.002 "Cerebral Palsy School Teacher" "Cerebral Palsy School Teacher"
* #2341.003 "EFL Teacher" "EFL Teacher"
* #2341.004 "Elocution Teacher" "Elocution Teacher"
* #2341.005 "English Language Teacher" "English Language Teacher"
* #2341.006 "ESL Teacher" "ESL Teacher"
* #2341.007 "ESOL Teacher" "ESOL Teacher"
* #2341.008 "Guidance Learning Teacher" "Guidance Learning Teacher"
* #2341.009 "IHC Teacher" "IHC Teacher"
* #2341.010 "Inclusive Education Coordinator" "Inclusive Education Coordinator"
* #2341.011 "Itinerant Teacher (Special Needs)" "Itinerant Teacher (Special Needs)"
* #2341.012 "Language Therapist" "Language Therapist"
* #2341.013 "Rehabilitation Teacher" "Rehabilitation Teacher"
* #2341.014 "Remedial Teacher" "Remedial Teacher"
* #2341.015 "Resource Teacher (Special Needs)" "Resource Teacher (Special Needs)"
* #2341.016 "Special Education Remedial Teacher" "Special Education Remedial Teacher"
* #2341.017 "Special Education Teacher" "Special Education Teacher"
* #2341.018 "Speech Clinician" "Speech Clinician"
* #2341.019 "Speech Pathologist" "Speech Pathologist"
* #2341.020 "Speech Therapist" "Speech Therapist"
* #2341.021 "Speech-Language Therapist" "Speech-Language Therapist"
* #2341.022 "Teacher of English as a Second Language" "Teacher of English as a Second Language"
* #2341.023 "Teacher of the Blind" "Teacher of the Blind"
* #2341.024 "Teacher of the Deaf and Dumb" "Teacher of the Deaf and Dumb"
* #2351.001 "Arts and Craft Advisor" "Arts and Craft Advisor"
* #2351.002 "Curriculum Facilitator" "Curriculum Facilitator"
* #2351.003 "Education Consultant" "Education Consultant"
* #2351.004 "Education Methods Specialist" "Education Methods Specialist"
* #2351.005 "Educational Advisor" "Educational Advisor"
* #2351.006 "Government Education Officer" "Government Education Officer"
* #2351.007 "Preschool Advisor" "Preschool Advisor"
* #2351.008 "School Advisor" "School Advisor"
* #2352.001 "Education Review Officer" "Education Review Officer"
* #2352.002 "Education Reviewer" "Education Reviewer"
* #2352.003 "School Inspector" "School Inspector"
* #2411.001 "Accountant" "Accountant"
* #2411.002 "Audit Inspector" "Audit Inspector"
* #2411.003 "Auditor" "Auditor"
* #2411.004 "Bank Accountant" "Bank Accountant"
* #2411.005 "Budgeting Accountant" "Budgeting Accountant"
* #2411.006 "Chartered Accountant" "Chartered Accountant"
* #2411.007 "Company Accountant" "Company Accountant"
* #2411.008 "Cost Accountant" "Cost Accountant"
* #2411.009 "Financial Accountant" "Financial Accountant"
* #2411.010 "GST Auditor" "GST Auditor"
* #2411.011 "Internal Auditor" "Internal Auditor"
* #2411.012 "Investigating Accountant" "Investigating Accountant"
* #2411.013 "Kaikaute" "Kaikaute"
* #2411.014 "Kaiwhakahaere Kaute" "Kaiwhakahaere Kaute"
* #2411.015 "Kaiwhakahaere Putea" "Kaiwhakahaere Putea"
* #2411.016 "Kaiwhakahaere Puutea" "Kaiwhakahaere Puutea"
* #2411.017 "Legal Accountant" "Legal Accountant"
* #2411.018 "Management Accountant" "Management Accountant"
* #2411.019 "Production Accountant" "Production Accountant"
* #2411.020 "Production Management Accountant" "Production Management Accountant"
* #2411.021 "Public Accountant" "Public Accountant"
* #2411.022 "System Cost Accountant" "System Cost Accountant"
* #2411.023 "Tax Accountant" "Tax Accountant"
* #2411.024 "Taxation Consultant Economic" "Taxation Consultant Economic"
* #2411.025 "Trainee Accountant" "Trainee Accountant"
* #2412.001 "Consultant Trainer" "Consultant Trainer"
* #2412.002 "EEO Advisor" "EEO Advisor"
* #2412.003 "EEO Officer" "EEO Officer"
* #2412.004 "EEO Practitioner" "EEO Practitioner"
* #2412.005 "Employment Officer" "Employment Officer"
* #2412.006 "Human Resources Advisor" "Human Resources Advisor"
* #2412.007 "Human Resources Consultant" "Human Resources Consultant"
* #2412.008 "Human Resources Officer" "Human Resources Officer"
* #2412.009 "Industrial Education Officer" "Industrial Education Officer"
* #2412.010 "Industrial Personnel Officer" "Industrial Personnel Officer"
* #2412.011 "Industrial Relations Advisor" "Industrial Relations Advisor"
* #2412.012 "Industrial Relations Consultant" "Industrial Relations Consultant"
* #2412.013 "Industrial Relations Officer" "Industrial Relations Officer"
* #2412.014 "Industrial Training Officer" "Industrial Training Officer"
* #2412.015 "Liaison Officer" "Liaison Officer"
* #2412.016 "Personnel Consultant" "Personnel Consultant"
* #2412.017 "Personnel Officer" "Personnel Officer"
* #2412.018 "Recruiting Officer" "Recruiting Officer"
* #2412.019 "Staff Appointment Officer" "Staff Appointment Officer"
* #2412.020 "Staff Development and Training Officer" "Staff Development and Training Officer"
* #2412.021 "Staff Development Officer" "Staff Development Officer"
* #2412.022 "Staff Officer" "Staff Officer"
* #2412.023 "Staff Training Officer" "Staff Training Officer"
* #2412.024 "Training and Development Officer" "Training and Development Officer"
* #2412.025 "Training Consultant" "Training Consultant"
* #2412.026 "Training Officer" "Training Officer"
* #2413.001 "Business Analyst" "Business Analyst"
* #2413.002 "Business Consultant" "Business Consultant"
* #2413.003 "Business Forecaster" "Business Forecaster"
* #2413.004 "Communications Advisor" "Communications Advisor"
* #2413.005 "Communications Officer" "Communications Officer"
* #2413.006 "Farm Management Consultant" "Farm Management Consultant"
* #2413.007 "Finance Consultant" "Finance Consultant"
* #2413.008 "Financial Advisor" "Financial Advisor"
* #2413.009 "Financial Advisor Broker" "Financial Advisor Broker"
* #2413.010 "Financial Analyst" "Financial Analyst"
* #2413.011 "Financial Consultant" "Financial Consultant"
* #2413.012 "Financial Planner" "Financial Planner"
* #2413.013 "Fund Raiser" "Fund Raiser"
* #2413.014 "Fundraiser" "Fundraiser"
* #2413.015 "Immigration Consultant" "Immigration Consultant"
* #2413.016 "Investment Advisor" "Investment Advisor"
* #2413.017 "Investment Consultant" "Investment Consultant"
* #2413.018 "Management Consultant" "Management Consultant"
* #2413.019 "Market Analyst" "Market Analyst"
* #2413.020 "Market Research Analyst" "Market Research Analyst"
* #2413.021 "Market Research Project Leader" "Market Research Project Leader"
* #2413.022 "Market Research Project Manager" "Market Research Project Manager"
* #2413.023 "Market Researcher" "Market Researcher"
* #2413.024 "Market Trends Consultant" "Market Trends Consultant"
* #2413.025 "Marketing Officer" "Marketing Officer"
* #2413.026 "Media Advisor" "Media Advisor"
* #2413.027 "Press Officer" "Press Officer"
* #2413.028 "Press Secretary" "Press Secretary"
* #2413.029 "Public Affairs Officer" "Public Affairs Officer"
* #2413.030 "Public Relations Officer" "Public Relations Officer"
* #2413.031 "Publicity and Public Relations Officer" "Publicity and Public Relations Officer"
* #2413.032 "Publicity Officer" "Publicity Officer"
* #2413.033 "Taxation Consultant Accounting" "Taxation Consultant Accounting"
* #2421.001 "Attorney" "Attorney"
* #2421.002 "Barrister" "Barrister"
* #2421.003 "Civil Lawyer" "Civil Lawyer"
* #2421.004 "Commercial Corporate Solicitor" "Commercial Corporate Solicitor"
* #2421.005 "Conveyancing Lawyer" "Conveyancing Lawyer"
* #2421.006 "Criminal Lawyer" "Criminal Lawyer"
* #2421.007 "Lawyer" "Lawyer"
* #2421.008 "Legal Advisor" "Legal Advisor"
* #2421.009 "Legal Advocate" "Legal Advocate"
* #2421.010 "Notary" "Notary"
* #2421.011 "Solicitor" "Solicitor"
* #2421.012 "Trade Union Industrial Advocate" "Trade Union Industrial Advocate"
* #2422.001 "Chief Justice" "Chief Justice"
* #2422.002 "Court of Appeal Judge" "Court of Appeal Judge"
* #2422.003 "District Court Judge" "District Court Judge"
* #2422.004 "Employment Court Judge" "Employment Court Judge"
* #2422.005 "Family Court Judge" "Family Court Judge"
* #2422.006 "High Court Judge" "High Court Judge"
* #2422.007 "Judge" "Judge"
* #2422.008 "Maori Land Court Judge" "Maori Land Court Judge"
* #2422.009 "Referee Small Claims" "Referee Small Claims"
* #2422.010 "Tribunal Judge" "Tribunal Judge"
* #2423.001 "Arbitrator" "Arbitrator"
* #2423.002 "Coroner" "Coroner"
* #2423.003 "Examiner Trade Marks" "Examiner Trade Marks"
* #2423.004 "Facilitator" "Facilitator"
* #2423.005 "Industrial Conciliator" "Industrial Conciliator"
* #2423.006 "Jurist" "Jurist"
* #2423.007 "Land Registrar" "Land Registrar"
* #2423.008 "Mediator" "Mediator"
* #2423.009 "Negotiator" "Negotiator"
* #2423.010 "Official Assignee" "Official Assignee"
* #2423.011 "Other Legal Professional" "Other Legal Professional"
* #2423.012 "Parliamentary Draughtsman" "Parliamentary Draughtsman"
* #2423.013 "Patent Attorney" "Patent Attorney"
* #2423.014 "Patent Examiner" "Patent Examiner"
* #2423.015 "Race Relations Concilliator" "Race Relations Concilliator"
* #2423.016 "Registrar of Courts" "Registrar of Courts"
* #2423.017 "Tenancy Mediator" "Tenancy Mediator"
* #2423.018 "Trade Marks Examiner Justice" "Trade Marks Examiner Justice"
* #2423.019 "University Proctor" "University Proctor"
* #2431.001 "Archivist" "Archivist"
* #2431.002 "Art Conservator" "Art Conservator"
* #2431.003 "Art Gallery and Museum Curator" "Art Gallery and Museum Curator"
* #2431.004 "Art Gallery Conservator" "Art Gallery Conservator"
* #2431.005 "Curator" "Curator"
* #2431.006 "Curator Art Gallery" "Curator Art Gallery"
* #2431.007 "Curator Museum" "Curator Museum"
* #2431.008 "Document Conservator" "Document Conservator"
* #2431.009 "Document Restorer" "Document Restorer"
* #2431.010 "Film Archivist" "Film Archivist"
* #2431.011 "Information Archivist" "Information Archivist"
* #2431.012 "Museum Conservator" "Museum Conservator"
* #2431.013 "Museum Education Officer" "Museum Education Officer"
* #2431.014 "Photographic Archivist" "Photographic Archivist"
* #2431.015 "Reference Archivist" "Reference Archivist"
* #2432.001 "Childrens Librarian" "Childrens Librarian"
* #2432.002 "Information Services Administrator" "Information Services Administrator"
* #2432.003 "Librarian" "Librarian"
* #2432.004 "Mobile Librarian" "Mobile Librarian"
* #2432.005 "Reference Librarian" "Reference Librarian"
* #2441.001 "Development Finance Project Analyst" "Development Finance Project Analyst"
* #2441.002 "Economic Forecaster" "Economic Forecaster"
* #2441.003 "Economist" "Economist"
* #2441.004 "Financial Analyst Broker" "Financial Analyst Broker"
* #2441.005 "Research Economist" "Research Economist"
* #2442.001 "Anthropologist" "Anthropologist"
* #2442.002 "Archaeologist" "Archaeologist"
* #2442.003 "Criminologist" "Criminologist"
* #2442.004 "Demographer" "Demographer"
* #2442.005 "Environmental Analyst" "Environmental Analyst"
* #2442.006 "Environmental Statistics Analyst" "Environmental Statistics Analyst"
* #2442.007 "Ethnologist" "Ethnologist"
* #2442.008 "Genealogist" "Genealogist"
* #2442.009 "Geographer" "Geographer"
* #2442.010 "Historian" "Historian"
* #2442.011 "Labour Market Analyst" "Labour Market Analyst"
* #2442.012 "Policy Analyst" "Policy Analyst"
* #2442.013 "Political Analyst" "Political Analyst"
* #2442.014 "Political Scientist" "Political Scientist"
* #2442.015 "Population Analyst" "Population Analyst"
* #2442.016 "Research Officer Social Sciences" "Research Officer Social Sciences"
* #2442.017 "Research Statistician" "Research Statistician"
* #2442.018 "Social Researcher" "Social Researcher"
* #2442.019 "Social Scientist" "Social Scientist"
* #2442.020 "Social Statistics Analyst" "Social Statistics Analyst"
* #2442.021 "Sociologist" "Sociologist"
* #2443.001 "Braille Transcriber" "Braille Transcriber"
* #2443.002 "Etymologist" "Etymologist"
* #2443.003 "Interpreter" "Interpreter"
* #2443.004 "Language Translator" "Language Translator"
* #2443.005 "Linguist" "Linguist"
* #2443.006 "Philologist" "Philologist"
* #2443.007 "Sign Language Translator" "Sign Language Translator"
* #2443.008 "Translator" "Translator"
* #2444.001 "Behaviour Therapist" "Behaviour Therapist"
* #2444.002 "Behavioural Researcher" "Behavioural Researcher"
* #2444.003 "Child Development Psychologist" "Child Development Psychologist"
* #2444.004 "Clinical Psychologist" "Clinical Psychologist"
* #2444.005 "Cognitive Behavioural Therapist" "Cognitive Behavioural Therapist"
* #2444.006 "Comparative Psychologist" "Comparative Psychologist"
* #2444.007 "Counselling Psychologist" "Counselling Psychologist"
* #2444.008 "Criminal Psychologist" "Criminal Psychologist"
* #2444.009 "Educational Psychologist" "Educational Psychologist"
* #2444.010 "Experimental Psychologist" "Experimental Psychologist"
* #2444.011 "Family Counselling Psychologist" "Family Counselling Psychologist"
* #2444.012 "Forensic Psychologist" "Forensic Psychologist"
* #2444.013 "Occupational Psychologist" "Occupational Psychologist"
* #2444.014 "Psychologist" "Psychologist"
* #2444.015 "Psychology Administrator" "Psychology Administrator"
* #2444.016 "Psychotherapist" "Psychotherapist"
* #2444.017 "Research Psychologist" "Research Psychologist"
* #2444.018 "Sports Psychologist" "Sports Psychologist"
* #2445.001 "Alcohol Counsellor" "Alcohol Counsellor"
* #2445.002 "Counsellor" "Counsellor"
* #2445.003 "Counsellor Social Service" "Counsellor Social Service"
* #2445.004 "Drug and Alcohol Counsellor" "Drug and Alcohol Counsellor"
* #2445.005 "Family Counsellor" "Family Counsellor"
* #2445.006 "Guidance Counsellor" "Guidance Counsellor"
* #2445.007 "Marriage Guidance Counsellor" "Marriage Guidance Counsellor"
* #2445.008 "Personal Counsellor" "Personal Counsellor"
* #2445.009 "Relationship Counsellor" "Relationship Counsellor"
* #2445.010 "School Counsellor" "School Counsellor"
* #2445.011 "Sexual Abuse Counsellor" "Sexual Abuse Counsellor"
* #2445.012 "Vocational Guidance Counsellor" "Vocational Guidance Counsellor"
* #2446.001 "Consular Official" "Consular Official"
* #2446.002 "Diplomatic Information Officer" "Diplomatic Information Officer"
* #2446.003 "Diplomatic Officer" "Diplomatic Officer"
* #2446.004 "Diplomatic Official" "Diplomatic Official"
* #2446.005 "Diplomatic Secretary" "Diplomatic Secretary"
* #2446.006 "Embassy Secretary" "Embassy Secretary"
* #2446.007 "External Relations Policy Officer" "External Relations Policy Officer"
* #2446.008 "Foreign Affairs and Trade Officer" "Foreign Affairs and Trade Officer"
* #2446.009 "Mission Director Diplomatic" "Mission Director Diplomatic"
* #2446.010 "Trade Commissioner Attache" "Trade Commissioner Attache"
* #2451.001 "Anglican Minister" "Anglican Minister"
* #2451.002 "Anglican Priest" "Anglican Priest"
* #2451.003 "Catholic Priest" "Catholic Priest"
* #2451.004 "Chaplain" "Chaplain"
* #2451.005 "Clergyman" "Clergyman"
* #2451.006 "Clergywoman" "Clergywoman"
* #2451.007 "Hospital Chaplain" "Hospital Chaplain"
* #2451.008 "Industrial Chaplain" "Industrial Chaplain"
* #2451.009 "Minister of Religion" "Minister of Religion"
* #2451.010 "Pastor" "Pastor"
* #2451.011 "Priest" "Priest"
* #2451.012 "Prison Chaplain" "Prison Chaplain"
* #2451.013 "Rabbi" "Rabbi"
* #2451.014 "Salvation Army Officer" "Salvation Army Officer"
* #2451.015 "Vicar" "Vicar"
* #3111.001 "Astronomy Technician" "Astronomy Technician"
* #3111.002 "Chemical Manufacturing Technician" "Chemical Manufacturing Technician"
* #3111.003 "Chemistry Technician" "Chemistry Technician"
* #3111.004 "Field Trials Officer" "Field Trials Officer"
* #3111.005 "Geological Technician" "Geological Technician"
* #3111.006 "Geology Technician" "Geology Technician"
* #3111.007 "Hydrological Field Technician" "Hydrological Field Technician"
* #3111.008 "Hydrology Technician" "Hydrology Technician"
* #3111.009 "Industrial Laboratory Technician" "Industrial Laboratory Technician"
* #3111.010 "Industrial Research Technician" "Industrial Research Technician"
* #3111.011 "Limnology Technician" "Limnology Technician"
* #3111.012 "Meteorological Observer Technician" "Meteorological Observer Technician"
* #3111.013 "Meteorological Technical Officer" "Meteorological Technical Officer"
* #3111.014 "Meteorological Technician" "Meteorological Technician"
* #3111.015 "Meteorology Technician" "Meteorology Technician"
* #3111.016 "Physical Science Technician" "Physical Science Technician"
* #3111.017 "Physical Sciences Field Station Observer" "Physical Sciences Field Station Observer"
* #3111.018 "Physical Sciences Laboratory Technician" "Physical Sciences Laboratory Technician"
* #3111.019 "Physical Sciences Research Laboratory Technician" "Physical Sciences Research Laboratory Technician"
* #3111.020 "Physics Technician" "Physics Technician"
* #3111.021 "Radiation Laboratory Technician" "Radiation Laboratory Technician"
* #3111.022 "Research Technician Industrial Laboratory" "Research Technician Industrial Laboratory"
* #3111.023 "School Laboratory Technician" "School Laboratory Technician"
* #3111.024 "University Physical Sciences Workshop Technician" "University Physical Sciences Workshop Technician"
* #3111.025 "University Research Technician" "University Research Technician"
* #3111.026 "Wool Testing Technician" "Wool Testing Technician"
* #3112.001 "Building Estimator" "Building Estimator"
* #3112.002 "Cartographic Technician" "Cartographic Technician"
* #3112.003 "Civil Engineering Assistant" "Civil Engineering Assistant"
* #3112.004 "Clerk of Works" "Clerk of Works"
* #3112.005 "Construction Design Technician" "Construction Design Technician"
* #3112.006 "Construction Estimator" "Construction Estimator"
* #3112.007 "Construction Supply Planner" "Construction Supply Planner"
* #3112.008 "Hydrographic Technician" "Hydrographic Technician"
* #3112.009 "Other Civil Engineering Technician" "Other Civil Engineering Technician"
* #3112.010 "Quality Controller of Other Civil Engineering Technicians" "Quality Controller of Other Civil Engineering Technicians"
* #3112.011 "Quality Controller Of Surveyors Technicians" "Quality Controller Of Surveyors Technicians"
* #3112.012 "Quantity Surveyor" "Quantity Surveyor"
* #3112.013 "Specification Writer Electrical" "Specification Writer Electrical"
* #3112.014 "Surveyors Technician" "Surveyors Technician"
* #3112.015 "Waste Water Treatment Officer" "Waste Water Treatment Officer"
* #3112.016 "Work Site Engineering Technician" "Work Site Engineering Technician"
* #3113.001 "Electrical Engineering Estimator" "Electrical Engineering Estimator"
* #3113.002 "Electrical Engineering Technician" "Electrical Engineering Technician"
* #3113.003 "Electrical Test Technician" "Electrical Test Technician"
* #3113.004 "Electricity Test Room Technician" "Electricity Test Room Technician"
* #3113.005 "Power Generation Transmission Technician" "Power Generation Transmission Technician"
* #3113.006 "Quality Controller Of Electrical Engineering Technicians" "Quality Controller Of Electrical Engineering Technicians"
* #3114.001 "Avionics Engineering Technician" "Avionics Engineering Technician"
* #3114.002 "Avionics Technician" "Avionics Technician"
* #3114.003 "Broadcasting Engineering Technician" "Broadcasting Engineering Technician"
* #3114.004 "Broadcasting Technician" "Broadcasting Technician"
* #3114.005 "Communications Technical Officer" "Communications Technical Officer"
* #3114.006 "Communications Technician" "Communications Technician"
* #3114.007 "Computer Services Technician" "Computer Services Technician"
* #3114.008 "Computer Systems Technician" "Computer Systems Technician"
* #3114.009 "Computer Technical Service Officer" "Computer Technical Service Officer"
* #3114.010 "Electronic Engineering Estimator" "Electronic Engineering Estimator"
* #3114.011 "Electronic Engineering Technician" "Electronic Engineering Technician"
* #3114.012 "Electronic Instrument Technician" "Electronic Instrument Technician"
* #3114.013 "Electronic Science Technician" "Electronic Science Technician"
* #3114.014 "Electronic System Engineering Technician" "Electronic System Engineering Technician"
* #3114.015 "Electronics Technician" "Electronics Technician"
* #3114.016 "Information Systems Technician" "Information Systems Technician"
* #3114.017 "Licensed Aircraft Maintenance Engineer (Avionics)" "Licensed Aircraft Maintenance Engineer (Avionics)"
* #3114.018 "Other Electronics Engineering Technician" "Other Electronics Engineering Technician"
* #3114.019 "Overseer Installation Communications" "Overseer Installation Communications"
* #3114.020 "Quality Controller Of Computer Systems Technicians" "Quality Controller Of Computer Systems Technicians"
* #3114.021 "Quality Controller Of Other Electronic Engineering Technicians" "Quality Controller Of Other Electronic Engineering Technicians"
* #3114.022 "Quality Controller Of Telecommunications Technicians" "Quality Controller Of Telecommunications Technicians"
* #3114.023 "Radar Technician" "Radar Technician"
* #3114.024 "Radio Engineering Technician" "Radio Engineering Technician"
* #3114.025 "Radio Technician" "Radio Technician"
* #3114.026 "Scientific Electronics Technician" "Scientific Electronics Technician"
* #3114.027 "Telecom Technician" "Telecom Technician"
* #3114.028 "Telecommunication Engineering Technician" "Telecommunication Engineering Technician"
* #3114.029 "Telecommunications Technical Officer" "Telecommunications Technical Officer"
* #3114.030 "Telecommunications Technician" "Telecommunications Technician"
* #3114.031 "Telephone Equipment Serviceman" "Telephone Equipment Serviceman"
* #3114.032 "Telephone Equipment Technician" "Telephone Equipment Technician"
* #3114.033 "Telephone Technician" "Telephone Technician"
* #3114.034 "Television and Radio Systems Technician" "Television and Radio Systems Technician"
* #3114.035 "Television Engineering Technician" "Television Engineering Technician"
* #3115.001 "Aeronautical Engineering Technician" "Aeronautical Engineering Technician"
* #3115.002 "Aeronautical Maintenance Instructor" "Aeronautical Maintenance Instructor"
* #3115.003 "Aeronautical Technician" "Aeronautical Technician"
* #3115.004 "Agricultural Engineering Technician" "Agricultural Engineering Technician"
* #3115.005 "Air Conditioning Technician" "Air Conditioning Technician"
* #3115.006 "Aircraft Engineering Technician" "Aircraft Engineering Technician"
* #3115.007 "Automotive Engineering Technician" "Automotive Engineering Technician"
* #3115.008 "Heating and Ventilation Technician" "Heating and Ventilation Technician"
* #3115.009 "Marine Engineering Technician" "Marine Engineering Technician"
* #3115.010 "Mechanical Engineering Estimator" "Mechanical Engineering Estimator"
* #3115.011 "Mechanical Engineering Technician" "Mechanical Engineering Technician"
* #3115.012 "Mechanical Instrument Technician" "Mechanical Instrument Technician"
* #3115.013 "Nautical Engineering Techncian" "Nautical Engineering Techncian"
* #3115.014 "Naval Technician" "Naval Technician"
* #3115.015 "Quality Controller Of Mechanical Engineering Technicians" "Quality Controller Of Mechanical Engineering Technicians"
* #3115.016 "Tool And Die Design Technician" "Tool And Die Design Technician"
* #3116.001 "Chemical Engineering Technician" "Chemical Engineering Technician"
* #3116.002 "Dairy Technician" "Dairy Technician"
* #3116.003 "Food Engineering Technician" "Food Engineering Technician"
* #3116.004 "Fuel Engineering Technician" "Fuel Engineering Technician"
* #3116.005 "Gas Production and Distribution Technician" "Gas Production and Distribution Technician"
* #3116.006 "Petroleum Engineering Technician" "Petroleum Engineering Technician"
* #3116.007 "Wool Research Textile Engineering Technician" "Wool Research Textile Engineering Technician"
* #3118.001 "Aeronautical Draughtsman" "Aeronautical Draughtsman"
* #3118.002 "Architectural Draughting Technician" "Architectural Draughting Technician"
* #3118.003 "Architectural Draughtsman" "Architectural Draughtsman"
* #3118.004 "Architectural Draughtsperson" "Architectural Draughtsperson"
* #3118.005 "Building Design Technician" "Building Design Technician"
* #3118.006 "CAD Draughtsman" "CAD Draughtsman"
* #3118.007 "Civil Design Draughting Technician" "Civil Design Draughting Technician"
* #3118.008 "Civil Design Draughtsman" "Civil Design Draughtsman"
* #3118.009 "Civil Engineering Draughting Technician" "Civil Engineering Draughting Technician"
* #3118.010 "Civil Engineering Draughtsman" "Civil Engineering Draughtsman"
* #3118.011 "Coal Technician" "Coal Technician"
* #3118.012 "Coal Technologist" "Coal Technologist"
* #3118.013 "Colliery Technician" "Colliery Technician"
* #3118.014 "Computer Draughtsman" "Computer Draughtsman"
* #3118.015 "Construction Draughting Technician" "Construction Draughting Technician"
* #3118.016 "Construction Draughtsman" "Construction Draughtsman"
* #3118.017 "Draughting Officer" "Draughting Officer"
* #3118.018 "Draughting Technician" "Draughting Technician"
* #3118.019 "Draughts Person" "Draughts Person"
* #3118.020 "Draughtsman" "Draughtsman"
* #3118.021 "Draughtsperson" "Draughtsperson"
* #3118.022 "Draughtswoman" "Draughtswoman"
* #3118.023 "Electrical Draughting Technician" "Electrical Draughting Technician"
* #3118.024 "Electrical Draughtsman" "Electrical Draughtsman"
* #3118.025 "Industrial Radiographer" "Industrial Radiographer"
* #3118.026 "Manufacturing Draughtsperson" "Manufacturing Draughtsperson"
* #3118.027 "Marine Draughting Technician" "Marine Draughting Technician"
* #3118.028 "Marine Draughtsman" "Marine Draughtsman"
* #3118.029 "Mechanical Draughting Technician" "Mechanical Draughting Technician"
* #3118.030 "Mechanical Draughtsman" "Mechanical Draughtsman"
* #3118.031 "Metallurgical Technician" "Metallurgical Technician"
* #3118.032 "Mineral Analyst" "Mineral Analyst"
* #3118.033 "Mineral Spectroscopist" "Mineral Spectroscopist"
* #3118.034 "Mining Technician" "Mining Technician"
* #3118.035 "Photographic Draughting Technician" "Photographic Draughting Technician"
* #3118.036 "Photographic Draughtsman" "Photographic Draughtsman"
* #3118.037 "Plan Tracer" "Plan Tracer"
* #3118.038 "Structural Draughting Technician" "Structural Draughting Technician"
* #3118.039 "Structural Draughtsman" "Structural Draughtsman"
* #3118.040 "Structural Engineering Draughting Technician" "Structural Engineering Draughting Technician"
* #3118.041 "Surveyors Draughtsman" "Surveyors Draughtsman"
* #3118.042 "Technical Draughting Officer" "Technical Draughting Officer"
* #3118.043 "Town Planning Research Technician" "Town Planning Research Technician"
* #3118.044 "Yacht Designer" "Yacht Designer"
* #3119.001 "Non Destructive Testing Technician" "Non Destructive Testing Technician"
* #3119.002 "Other Engineering Technician" "Other Engineering Technician"
* #3119.003 "Quality Controller Of Other Engineering Technicians" "Quality Controller Of Other Engineering Technicians"
* #3119.004 "School Technician" "School Technician"
* #3119.005 "Weights and Measures Inspector" "Weights and Measures Inspector"
* #3121.001 "Applications Programmer" "Applications Programmer"
* #3121.002 "Applications Tester" "Applications Tester"
* #3121.003 "Computer Controller" "Computer Controller"
* #3121.004 "Computer Coordinator" "Computer Coordinator"
* #3121.005 "Computer Operator" "Computer Operator"
* #3121.006 "Computer Programmer" "Computer Programmer"
* #3121.007 "Computer Scheduler" "Computer Scheduler"
* #3121.008 "Computer Support Technician" "Computer Support Technician"
* #3121.009 "Desktop Support Specialist" "Desktop Support Specialist"
* #3121.010 "EDP Data Controller" "EDP Data Controller"
* #3121.011 "Information Systems Programmer" "Information Systems Programmer"
* #3121.012 "Kaiwhakahaere Rorohiko" "Kaiwhakahaere Rorohiko"
* #3121.013 "Systems Operator Mathematical" "Systems Operator Mathematical"
* #3121.014 "Systems Programmer" "Systems Programmer"
* #3121.015 "Systems Support Intranet" "Systems Support Intranet"
* #3121.016 "Web Assistant" "Web Assistant"
* #3121.017 "Web Support" "Web Support"
* #3131.001 "Aerial Photographer" "Aerial Photographer"
* #3131.002 "Camera Control Operator Television" "Camera Control Operator Television"
* #3131.003 "Camera Operator" "Camera Operator"
* #3131.004 "Cinetape Operator" "Cinetape Operator"
* #3131.005 "Commercial Photographer" "Commercial Photographer"
* #3131.006 "Fashion Photographer" "Fashion Photographer"
* #3131.007 "Film Camera Operator" "Film Camera Operator"
* #3131.008 "Kaimahi Kaamera" "Kaimahi Kaamera"
* #3131.009 "Medical Photographer" "Medical Photographer"
* #3131.010 "Microfilm Technician" "Microfilm Technician"
* #3131.011 "Motion Picture Cameraman" "Motion Picture Cameraman"
* #3131.012 "Photographer" "Photographer"
* #3131.013 "Photographic Camera Operator" "Photographic Camera Operator"
* #3131.014 "Photojournalist" "Photojournalist"
* #3131.015 "Police Photographer" "Police Photographer"
* #3131.016 "Portrait Photographer" "Portrait Photographer"
* #3131.017 "Public Address Equipment Operator" "Public Address Equipment Operator"
* #3131.018 "Sound Mixer" "Sound Mixer"
* #3131.019 "Sound Operator" "Sound Operator"
* #3131.020 "Sound Recording Equipment Controller" "Sound Recording Equipment Controller"
* #3131.021 "Television Camera Operator" "Television Camera Operator"
* #3131.022 "Television Cameraman" "Television Cameraman"
* #3131.023 "Video Camera Operator" "Video Camera Operator"
* #3131.024 "Videographer" "Videographer"
* #3131.025 "Wedding Photographer" "Wedding Photographer"
* #3132.001 "Broadcasting Operator" "Broadcasting Operator"
* #3132.002 "Broadcasting Station Operator" "Broadcasting Station Operator"
* #3132.003 "Broadcasting Transmitting and Studio Equipment Operator" "Broadcasting Transmitting and Studio Equipment Operator"
* #3132.004 "Cinema Projectionist" "Cinema Projectionist"
* #3132.005 "Communications Instrument Officer" "Communications Instrument Officer"
* #3132.006 "Communications Operator" "Communications Operator"
* #3132.007 "Film Editing Equipment Operator" "Film Editing Equipment Operator"
* #3132.008 "Film Editor" "Film Editor"
* #3132.009 "Film Projectionist" "Film Projectionist"
* #3132.010 "Flight Radio Operator Operations" "Flight Radio Operator Operations"
* #3132.011 "Harbour Communications Officer" "Harbour Communications Officer"
* #3132.012 "Lighting Operator" "Lighting Operator"
* #3132.013 "Lighting Technician (Studio)" "Lighting Technician (Studio)"
* #3132.014 "Marine Radio Operator" "Marine Radio Operator"
* #3132.015 "Motion Picture Film Projectionist" "Motion Picture Film Projectionist"
* #3132.016 "Motion Picture Projectionist" "Motion Picture Projectionist"
* #3132.017 "Movie Projectionist" "Movie Projectionist"
* #3132.018 "Post-Production Editor" "Post-Production Editor"
* #3132.019 "Radio Broadcasting Sound Technician" "Radio Broadcasting Sound Technician"
* #3132.020 "Radio Communications Operator" "Radio Communications Operator"
* #3132.021 "Radio Control Room Technician" "Radio Control Room Technician"
* #3132.022 "Radio Inspector Officer" "Radio Inspector Officer"
* #3132.023 "Radio Officer Ship" "Radio Officer Ship"
* #3132.024 "Radio Operator" "Radio Operator"
* #3132.025 "Radio Station Operator" "Radio Station Operator"
* #3132.026 "Radio Telephone Communicator" "Radio Telephone Communicator"
* #3132.027 "Radio Telephone Despatcher" "Radio Telephone Despatcher"
* #3132.028 "Radio Telephone Operator" "Radio Telephone Operator"
* #3132.029 "RT Operator" "RT Operator"
* #3132.030 "Studio Equipment Operator" "Studio Equipment Operator"
* #3132.031 "Taxi Despatcher" "Taxi Despatcher"
* #3132.032 "Telecommunication Equipment Operator" "Telecommunication Equipment Operator"
* #3132.033 "Television Broadcasting Sound Operator" "Television Broadcasting Sound Operator"
* #3132.034 "Television Control Room Technician" "Television Control Room Technician"
* #3132.035 "Television Station Operator" "Television Station Operator"
* #3132.036 "Video Editor" "Video Editor"
* #3132.037 "Video Tape Operator" "Video Tape Operator"
* #3132.038 "Videotape Editor" "Videotape Editor"
* #3132.039 "Vision Controller" "Vision Controller"
* #3132.040 "VT Editor" "VT Editor"
* #3133.001 "Anaesthetic Technician" "Anaesthetic Technician"
* #3133.002 "Audio Visual Technician" "Audio Visual Technician"
* #3133.003 "Audiometric Technician" "Audiometric Technician"
* #3133.004 "Audiometrist" "Audiometrist"
* #3133.005 "Cardia Ultrasound Technician" "Cardia Ultrasound Technician"
* #3133.006 "Cardiac Monitoring Technician" "Cardiac Monitoring Technician"
* #3133.007 "Cardiographer" "Cardiographer"
* #3133.008 "Cardiology Technician" "Cardiology Technician"
* #3133.009 "Diagnostic Medical Radiation Technician" "Diagnostic Medical Radiation Technician"
* #3133.010 "Diagnostic Radiation Technologist" "Diagnostic Radiation Technologist"
* #3133.011 "Diagnostic Radiographer" "Diagnostic Radiographer"
* #3133.012 "ECG Technician" "ECG Technician"
* #3133.013 "Echocardiographer" "Echocardiographer"
* #3133.014 "Electrocardiograph Technician" "Electrocardiograph Technician"
* #3133.015 "Electroencephalographic Technician" "Electroencephalographic Technician"
* #3133.016 "Hospital Theatre Technician" "Hospital Theatre Technician"
* #3133.017 "Medical Electronic Equipment Operator" "Medical Electronic Equipment Operator"
* #3133.018 "Medical Radiation Technologist" "Medical Radiation Technologist"
* #3133.019 "Medical Xray Technician" "Medical Xray Technician"
* #3133.020 "MRT" "MRT"
* #3133.021 "Neurophysiology Technician" "Neurophysiology Technician"
* #3133.022 "Neurosciences Research Technician" "Neurosciences Research Technician"
* #3133.023 "Nuclear Medicine Technologist" "Nuclear Medicine Technologist"
* #3133.024 "Nuclear Radiographer" "Nuclear Radiographer"
* #3133.025 "Other Medical Equipment Controller" "Other Medical Equipment Controller"
* #3133.026 "Quality Controller Of Other Medical Equipment Controllers" "Quality Controller Of Other Medical Equipment Controllers"
* #3133.027 "Quality Controller Of Radiographers" "Quality Controller Of Radiographers"
* #3133.028 "Radiochemist" "Radiochemist"
* #3133.029 "Radiographer" "Radiographer"
* #3133.030 "Radioisotope Technician" "Radioisotope Technician"
* #3133.031 "Radioisotope Technologist" "Radioisotope Technologist"
* #3133.032 "Sonographer" "Sonographer"
* #3133.033 "Therapeutic Radiographer" "Therapeutic Radiographer"
* #3133.034 "Ultrasonographer" "Ultrasonographer"
* #3133.035 "Xray Darkroom Technician" "Xray Darkroom Technician"
* #3133.036 "Xray Operator" "Xray Operator"
* #3141.001 "Chief Engineer Ship" "Chief Engineer Ship"
* #3141.002 "Marine Engineer Ships" "Marine Engineer Ships"
* #3141.003 "Ships Engineer" "Ships Engineer"
* #3142.001 "Boatswain" "Boatswain"
* #3142.002 "Bosun" "Bosun"
* #3142.003 "Deck Officer Master" "Deck Officer Master"
* #3142.004 "Dockmaster" "Dockmaster"
* #3142.005 "Dredge Master" "Dredge Master"
* #3142.006 "Harbour Master" "Harbour Master"
* #3142.007 "Harbour Pilot" "Harbour Pilot"
* #3142.008 "Hovercraft Operator" "Hovercraft Operator"
* #3142.009 "Launch Master" "Launch Master"
* #3142.010 "Master Mariner" "Master Mariner"
* #3142.011 "Other Ships Deck Officer and Pilot" "Other Ships Deck Officer and Pilot"
* #3142.012 "Ships Captain" "Ships Captain"
* #3142.013 "Ships Master" "Ships Master"
* #3142.014 "Ships Mate" "Ships Mate"
* #3142.015 "Ships Navigating Officer" "Ships Navigating Officer"
* #3142.016 "Ships Officer (Deck) Including Master" "Ships Officer (Deck) Including Master"
* #3142.017 "Ships Officer Deck" "Ships Officer Deck"
* #3142.018 "Ships Pilot" "Ships Pilot"
* #3142.019 "Tug Master" "Tug Master"
* #3143.001 "Aerial Spraying Contractor" "Aerial Spraying Contractor"
* #3143.002 "Aerial Topdressing Contractor" "Aerial Topdressing Contractor"
* #3143.003 "Aeroplane Pilot" "Aeroplane Pilot"
* #3143.004 "Aeroplane Pilot and Flight Crew" "Aeroplane Pilot and Flight Crew"
* #3143.005 "Agricultural Aeroplane Pilot" "Agricultural Aeroplane Pilot"
* #3143.006 "Agricultural Topdressing Pilot" "Agricultural Topdressing Pilot"
* #3143.007 "Agriculture Aeroplane Pilot" "Agriculture Aeroplane Pilot"
* #3143.008 "Air Crew" "Air Crew"
* #3143.009 "Air Transport Pilot" "Air Transport Pilot"
* #3143.010 "Aircraft Captain" "Aircraft Captain"
* #3143.011 "Aircraft Flight Engineer" "Aircraft Flight Engineer"
* #3143.012 "Aircraft Navigator" "Aircraft Navigator"
* #3143.013 "Aircraft Pilot" "Aircraft Pilot"
* #3143.014 "Airline Captain" "Airline Captain"
* #3143.015 "Airline Copilot" "Airline Copilot"
* #3143.016 "Airline Pilot" "Airline Pilot"
* #3143.017 "Balloonist Professional" "Balloonist Professional"
* #3143.018 "Chopper Pilot" "Chopper Pilot"
* #3143.019 "Commercial Pilot" "Commercial Pilot"
* #3143.020 "Flight Crew" "Flight Crew"
* #3143.021 "Flight Engineer" "Flight Engineer"
* #3143.022 "Flight Instructor" "Flight Instructor"
* #3143.023 "Flight Navigator" "Flight Navigator"
* #3143.024 "Flight Simulator Instructor" "Flight Simulator Instructor"
* #3143.025 "Flying Instructor" "Flying Instructor"
* #3143.026 "Flying Instructor and Examiner" "Flying Instructor and Examiner"
* #3143.027 "Helicopter Pilot" "Helicopter Pilot"
* #3143.028 "Search & Rescue Helicopter Pilot" "Search & Rescue Helicopter Pilot"
* #3143.029 "Top Dressing Pilot" "Top Dressing Pilot"
* #3144.001 "Aerodrome Controller" "Aerodrome Controller"
* #3144.002 "Air Traffic Controller" "Air Traffic Controller"
* #3144.003 "Air Traffic Service Operator" "Air Traffic Service Operator"
* #3144.004 "Airline Movements Control Officer" "Airline Movements Control Officer"
* #3151.001 "Accident Prevention Safety Inspector" "Accident Prevention Safety Inspector"
* #3151.002 "Agricultural Inspector" "Agricultural Inspector"
* #3151.003 "Agricultural Instructor" "Agricultural Instructor"
* #3151.004 "Agricultural Veterinary Inspector" "Agricultural Veterinary Inspector"
* #3151.005 "Agriculture Inspector" "Agriculture Inspector"
* #3151.006 "Air Accident Inspector" "Air Accident Inspector"
* #3151.007 "Animal Health Officer" "Animal Health Officer"
* #3151.008 "Bridge Inspector" "Bridge Inspector"
* #3151.009 "Building Inspector" "Building Inspector"
* #3151.010 "Building Site Inspector" "Building Site Inspector"
* #3151.011 "Construction Inspector" "Construction Inspector"
* #3151.012 "Electrical Inspector Construction" "Electrical Inspector Construction"
* #3151.013 "Environmental Health Officer" "Environmental Health Officer"
* #3151.014 "Explosives Inspector" "Explosives Inspector"
* #3151.015 "Factory Inspector" "Factory Inspector"
* #3151.016 "Farm Inspector" "Farm Inspector"
* #3151.017 "Farm Instructor" "Farm Instructor"
* #3151.018 "Fisheries Inspector" "Fisheries Inspector"
* #3151.019 "Fisheries Officer" "Fisheries Officer"
* #3151.020 "Fisheries Surveillance Officer" "Fisheries Surveillance Officer"
* #3151.021 "Fishery Officer" "Fishery Officer"
* #3151.022 "Forestry Inspector" "Forestry Inspector"
* #3151.023 "Foundry Inspector" "Foundry Inspector"
* #3151.024 "Health and Safety Inspector" "Health and Safety Inspector"
* #3151.025 "Health Education Officer" "Health Education Officer"
* #3151.026 "Health Inspector" "Health Inspector"
* #3151.027 "Horticultural Inspector" "Horticultural Inspector"
* #3151.028 "Housing Inspector" "Housing Inspector"
* #3151.029 "Hygiene Officer Freezing Works" "Hygiene Officer Freezing Works"
* #3151.030 "Industrial Safety Officer" "Industrial Safety Officer"
* #3151.031 "Licensed Premises Inspector" "Licensed Premises Inspector"
* #3151.032 "Lighthouse Inspector" "Lighthouse Inspector"
* #3151.033 "Livestock Inspector" "Livestock Inspector"
* #3151.034 "Livestock Instructor" "Livestock Instructor"
* #3151.035 "Meat Inspector" "Meat Inspector"
* #3151.036 "Meat Inspector Meat Products" "Meat Inspector Meat Products"
* #3151.037 "Meat Inspector Veterinary" "Meat Inspector Veterinary"
* #3151.038 "Noxious Animals Officer" "Noxious Animals Officer"
* #3151.039 "Noxious Plants Officer" "Noxious Plants Officer"
* #3151.040 "Noxious Weeds and Pests Inspector" "Noxious Weeds and Pests Inspector"
* #3151.041 "Occupational Safety Inspector" "Occupational Safety Inspector"
* #3151.042 "Pest and Weed Control Officer" "Pest and Weed Control Officer"
* #3151.043 "Pest Destruction Technical Advisor" "Pest Destruction Technical Advisor"
* #3151.044 "Pest Inspector" "Pest Inspector"
* #3151.045 "Pest Management Officer" "Pest Management Officer"
* #3151.046 "Port Safety Officer" "Port Safety Officer"
* #3151.047 "Poultry Inspector" "Poultry Inspector"
* #3151.048 "Poultry Instructor" "Poultry Instructor"
* #3151.049 "Public Health Officer" "Public Health Officer"
* #3151.050 "Quality Controller Of Agricultural Regulatory Inspectors" "Quality Controller Of Agricultural Regulatory Inspectors"
* #3151.051 "Quality Controller Of Health Regulatory Inspectors" "Quality Controller Of Health Regulatory Inspectors"
* #3151.052 "Quality Controller Of Meat Regulatory Inspectors" "Quality Controller Of Meat Regulatory Inspectors"
* #3151.053 "Quality Controller of Safety Regulations" "Quality Controller of Safety Regulations"
* #3151.054 "Quality Inspector" "Quality Inspector"
* #3151.055 "Road Bridge Inspector" "Road Bridge Inspector"
* #3151.056 "Safety Inspector" "Safety Inspector"
* #3151.057 "Sanitary Inspector" "Sanitary Inspector"
* #3151.058 "Scaffolding Inspector" "Scaffolding Inspector"
* #3151.059 "SPCA Inspector" "SPCA Inspector"
* #3151.060 "Works Inspector" "Works Inspector"
* #3211.001 "Artificial Inseminator" "Artificial Inseminator"
* #3211.002 "Biochemistry Technician" "Biochemistry Technician"
* #3211.003 "Biological Technician" "Biological Technician"
* #3211.004 "Biology Technician" "Biology Technician"
* #3211.005 "Botanical Technician" "Botanical Technician"
* #3211.006 "Ecology Technician" "Ecology Technician"
* #3211.007 "Environmental Technician" "Environmental Technician"
* #3211.008 "Haematology Technician" "Haematology Technician"
* #3211.009 "Hospital Laboratory Technician" "Hospital Laboratory Technician"
* #3211.010 "Hospital Research Laboratory Technician" "Hospital Research Laboratory Technician"
* #3211.011 "Life Science Technician" "Life Science Technician"
* #3211.012 "Life Sciences Laboratory Technician" "Life Sciences Laboratory Technician"
* #3211.013 "Maxillo Facial Technician" "Maxillo Facial Technician"
* #3211.014 "Meatworks Laboratory Technician" "Meatworks Laboratory Technician"
* #3211.015 "Meatworks Technologist" "Meatworks Technologist"
* #3211.016 "Medical Bloodbank Technician" "Medical Bloodbank Technician"
* #3211.017 "Medical Laboratory Assistant" "Medical Laboratory Assistant"
* #3211.018 "Medical Laboratory Technician" "Medical Laboratory Technician"
* #3211.019 "Medical Laboratory Technologist" "Medical Laboratory Technologist"
* #3211.020 "Medical Research Officer" "Medical Research Officer"
* #3211.021 "Medical Science Technician" "Medical Science Technician"
* #3211.022 "Naturalist" "Naturalist"
* #3211.023 "Phlebotomist" "Phlebotomist"
* #3211.024 "Quality Controller Of Life Science Technicians" "Quality Controller Of Life Science Technicians"
* #3211.025 "Taxidermist" "Taxidermist"
* #3211.026 "Venepuncturist" "Venepuncturist"
* #3211.027 "Veterinary Laboratory Technician" "Veterinary Laboratory Technician"
* #3211.028 "Veterinary Technician" "Veterinary Technician"
* #3211.029 "Water and Soil Technician" "Water and Soil Technician"
* #3212.001 "Agricultural Research Technician" "Agricultural Research Technician"
* #3212.002 "Agricultural Technician" "Agricultural Technician"
* #3212.003 "Agronomy Technician" "Agronomy Technician"
* #3212.004 "Animal Agricultural Technician" "Animal Agricultural Technician"
* #3212.005 "Animal Breeding Technician" "Animal Breeding Technician"
* #3212.006 "Animal Technician" "Animal Technician"
* #3212.007 "Botany Technician" "Botany Technician"
* #3212.008 "Forest Products Development Technician" "Forest Products Development Technician"
* #3212.009 "Forest Technical Officer" "Forest Technical Officer"
* #3212.010 "Forest Technician" "Forest Technician"
* #3212.011 "Forest Technician Observer" "Forest Technician Observer"
* #3212.012 "Forestry Science Technician" "Forestry Science Technician"
* #3212.013 "Forestry Technician" "Forestry Technician"
* #3212.014 "Laboratory Seed Grader" "Laboratory Seed Grader"
* #3212.015 "Laboratory Seed Tester" "Laboratory Seed Tester"
* #3212.016 "Parks and Reserve Technical Officer" "Parks and Reserve Technical Officer"
* #3212.017 "Plant Research Laboratory Technician" "Plant Research Laboratory Technician"
* #3212.018 "Quality Controller Of Agricultural Technicians" "Quality Controller Of Agricultural Technicians"
* #3212.019 "Quality Controller Of Forest Technicians" "Quality Controller Of Forest Technicians"
* #3212.020 "Seed Analyst" "Seed Analyst"
* #3212.021 "Seed Certificate Technician" "Seed Certificate Technician"
* #3212.022 "Soil Mechanic Technician" "Soil Mechanic Technician"
* #3212.023 "Test Baker Wheat Research" "Test Baker Wheat Research"
* #3221.001 "Dispensing Optician" "Dispensing Optician"
* #3221.002 "Optical Assistant" "Optical Assistant"
* #3221.003 "Optical Dispenser" "Optical Dispenser"
* #3221.004 "Spectacles Dispenser" "Spectacles Dispenser"
* #3222.001 "Dental Attendant" "Dental Attendant"
* #3222.002 "Dental Health Advisor" "Dental Health Advisor"
* #3222.003 "Dental Hygienist" "Dental Hygienist"
* #3222.004 "Dental Therapist" "Dental Therapist"
* #3222.005 "Dental Tutor Sister" "Dental Tutor Sister"
* #3222.006 "Gum Therapist" "Gum Therapist"
* #3222.007 "Oral Hygienist" "Oral Hygienist"
* #3222.008 "School Dental Nurse" "School Dental Nurse"
* #3223.001 "Artificial Limb Fitter Technician" "Artificial Limb Fitter Technician"
* #3223.002 "Artificial Limb Maker" "Artificial Limb Maker"
* #3223.003 "Back or Spine Manipulation Specialist" "Back or Spine Manipulation Specialist"
* #3223.004 "Chiropodist" "Chiropodist"
* #3223.005 "Chiropractor" "Chiropractor"
* #3223.006 "Clincial Orthotist" "Clincial Orthotist"
* #3223.007 "Ergotherapist" "Ergotherapist"
* #3223.008 "Manipulation Therapist" "Manipulation Therapist"
* #3223.009 "Occupational Therapist" "Occupational Therapist"
* #3223.010 "Occupational Therapy Assistant" "Occupational Therapy Assistant"
* #3223.011 "Occupational Therapy Teacher" "Occupational Therapy Teacher"
* #3223.012 "Orthopaedic Appliance Maker" "Orthopaedic Appliance Maker"
* #3223.013 "Orthopaedic Appliances Repairer" "Orthopaedic Appliances Repairer"
* #3223.014 "Orthopaedic Footwear Maker" "Orthopaedic Footwear Maker"
* #3223.015 "Orthopaedic Technician" "Orthopaedic Technician"
* #3223.016 "Orthotist" "Orthotist"
* #3223.017 "Orthotist Technician" "Orthotist Technician"
* #3223.018 "Orthotist Tradesman" "Orthotist Tradesman"
* #3223.019 "Osteopath" "Osteopath"
* #3223.020 "Physical Therapist" "Physical Therapist"
* #3223.021 "Physiotherapist" "Physiotherapist"
* #3223.022 "Podiatrist" "Podiatrist"
* #3223.023 "Prosthetist" "Prosthetist"
* #3223.024 "Recreation Therapist" "Recreation Therapist"
* #3223.025 "Spinal Health Specialist" "Spinal Health Specialist"
* #3223.026 "Vocational Therapist" "Vocational Therapist"
* #3223.027 "Work Rehabilitation Therapist" "Work Rehabilitation Therapist"
* #3224.001 "Animal Attendant Vaccine Laboratory" "Animal Attendant Vaccine Laboratory"
* #3224.002 "Animal Health Nurse" "Animal Health Nurse"
* #3224.003 "Brucellosis Testing Assistant" "Brucellosis Testing Assistant"
* #3224.004 "Herd Testing Technician" "Herd Testing Technician"
* #3224.005 "Veterinary Assistant" "Veterinary Assistant"
* #3224.006 "Veterinary Nurse" "Veterinary Nurse"
* #3224.007 "Veterinary Receptionist" "Veterinary Receptionist"
* #3225.001 "Community Pharmacy Technician" "Community Pharmacy Technician"
* #3225.002 "Dispenser Pharmaceutical Hospital" "Dispenser Pharmaceutical Hospital"
* #3225.003 "Dispenser Pharmaceutical Retail" "Dispenser Pharmaceutical Retail"
* #3225.004 "Hospital Dispensary Assistant" "Hospital Dispensary Assistant"
* #3225.005 "Hospital Pharmacy Assistant" "Hospital Pharmacy Assistant"
* #3225.006 "Pharmacy Dispensing Technician" "Pharmacy Dispensing Technician"
* #3225.007 "Retail Dispensary Assistant" "Retail Dispensary Assistant"
* #3226.001 "Acupuncturist" "Acupuncturist"
* #3226.002 "Alternative Health Practitioner" "Alternative Health Practitioner"
* #3226.003 "Aromatherapist" "Aromatherapist"
* #3226.004 "Audio Vision Tester" "Audio Vision Tester"
* #3226.005 "Audiologist" "Audiologist"
* #3226.006 "Chinese Medicine Practitioner" "Chinese Medicine Practitioner"
* #3226.007 "Dental Ceramicist" "Dental Ceramicist"
* #3226.008 "Dental Form Caster" "Dental Form Caster"
* #3226.009 "Dental Laboratory Technician" "Dental Laboratory Technician"
* #3226.010 "Dental Mechanic Technician" "Dental Mechanic Technician"
* #3226.011 "Dental Prothesis Maker Repairer" "Dental Prothesis Maker Repairer"
* #3226.012 "Dental Technician" "Dental Technician"
* #3226.013 "Dental Technologist" "Dental Technologist"
* #3226.014 "Diversional Therapist" "Diversional Therapist"
* #3226.015 "Family Planning Advisor" "Family Planning Advisor"
* #3226.016 "Health Needs Assessor" "Health Needs Assessor"
* #3226.017 "Hearing Aid Fitter" "Hearing Aid Fitter"
* #3226.018 "Herbalist" "Herbalist"
* #3226.019 "Holistic Massage Therapist" "Holistic Massage Therapist"
* #3226.020 "Homeopath" "Homeopath"
* #3226.021 "Hydrotherapist" "Hydrotherapist"
* #3226.022 "Hypnotherapist" "Hypnotherapist"
* #3226.023 "Iridologist" "Iridologist"
* #3226.024 "Medical Assistant" "Medical Assistant"
* #3226.025 "Medical Herbalist" "Medical Herbalist"
* #3226.026 "Natural Health Therapist" "Natural Health Therapist"
* #3226.027 "Naturopath" "Naturopath"
* #3226.028 "Other Health Associate Professional" "Other Health Associate Professional"
* #3226.029 "Reflexologist" "Reflexologist"
* #3226.030 "Vision and Hearing Tester" "Vision and Hearing Tester"
* #3231.001 "Community Nurse" "Community Nurse"
* #3231.002 "Comprehensive Nurse Trainee" "Comprehensive Nurse Trainee"
* #3231.003 "Enrolled Nurse" "Enrolled Nurse"
* #3231.004 "Health Camp Nurse" "Health Camp Nurse"
* #3231.005 "Kaimahi Whakawhaanau" "Kaimahi Whakawhaanau"
* #3231.006 "Karitane Nurse" "Karitane Nurse"
* #3231.007 "Physiotherapy Nurse" "Physiotherapy Nurse"
* #3231.008 "Psychiatric Assistant" "Psychiatric Assistant"
* #3231.009 "Unregistered Mental Hospital Nurse" "Unregistered Mental Hospital Nurse"
* #3231.010 "Unregistered Nurse Male or Female" "Unregistered Nurse Male or Female"
* #3231.011 "Unregistered Private Nurse" "Unregistered Private Nurse"
* #3231.012 "Unregistered Psychiatric Nurse" "Unregistered Psychiatric Nurse"
* #3311.001 "Assurance Broker" "Assurance Broker"
* #3311.002 "Bond Salesman" "Bond Salesman"
* #3311.003 "Broker Stocks and Shares" "Broker Stocks and Shares"
* #3311.004 "Building Society Salesman" "Building Society Salesman"
* #3311.005 "Commodity Broker" "Commodity Broker"
* #3311.006 "Equity Dealer" "Equity Dealer"
* #3311.007 "Finance Broker" "Finance Broker"
* #3311.008 "Financial Agent" "Financial Agent"
* #3311.009 "Financial Dealer" "Financial Dealer"
* #3311.010 "Futures Manager" "Futures Manager"
* #3311.011 "Futures Salesman" "Futures Salesman"
* #3311.012 "Insurance Broker" "Insurance Broker"
* #3311.013 "Life Insurance Broker" "Life Insurance Broker"
* #3311.014 "Money Marketer" "Money Marketer"
* #3311.015 "Securities Dealer" "Securities Dealer"
* #3311.016 "Securities Salesman" "Securities Salesman"
* #3311.017 "Share Advisor" "Share Advisor"
* #3311.018 "Share Registrar" "Share Registrar"
* #3311.019 "Sharebroker" "Sharebroker"
* #3311.020 "Stockbroker" "Stockbroker"
* #3312.001 "ACC Assessor" "ACC Assessor"
* #3312.002 "Accident Claims Officer" "Accident Claims Officer"
* #3312.003 "Accident Compensation Assessor" "Accident Compensation Assessor"
* #3312.004 "Apihaa Inihua" "Apihaa Inihua"
* #3312.005 "Assurance Salesman" "Assurance Salesman"
* #3312.006 "Brokers Clerk Insurance" "Brokers Clerk Insurance"
* #3312.007 "Claims Assessor" "Claims Assessor"
* #3312.008 "Claims Insurance Clerk" "Claims Insurance Clerk"
* #3312.009 "Claims Investigator" "Claims Investigator"
* #3312.010 "Commercial Underwriter" "Commercial Underwriter"
* #3312.011 "Examiner Pension Claims" "Examiner Pension Claims"
* #3312.012 "Insurance Agent" "Insurance Agent"
* #3312.013 "Insurance Assessor" "Insurance Assessor"
* #3312.014 "Insurance Canvasser" "Insurance Canvasser"
* #3312.015 "Insurance Claims Adjuster" "Insurance Claims Adjuster"
* #3312.016 "Insurance Claims Officer" "Insurance Claims Officer"
* #3312.017 "Insurance Clerk" "Insurance Clerk"
* #3312.018 "Insurance Consultant" "Insurance Consultant"
* #3312.019 "Insurance Officer" "Insurance Officer"
* #3312.020 "Insurance Representative" "Insurance Representative"
* #3312.021 "Insurance Salesman" "Insurance Salesman"
* #3312.022 "Insurance Settlement Clerk" "Insurance Settlement Clerk"
* #3312.023 "Insurance Surveyor" "Insurance Surveyor"
* #3312.024 "Insurance Underwriter" "Insurance Underwriter"
* #3312.025 "Life Insurance Agent" "Life Insurance Agent"
* #3312.026 "Life Insurance Salesman" "Life Insurance Salesman"
* #3312.027 "Life Insurance Underwriter" "Life Insurance Underwriter"
* #3312.028 "Loss Adjuster" "Loss Adjuster"
* #3312.029 "Marine Insurance Underwriter" "Marine Insurance Underwriter"
* #3312.030 "Motor Claims Assessor" "Motor Claims Assessor"
* #3312.031 "Personal Insurance Advisor" "Personal Insurance Advisor"
* #3312.032 "Personal Insurance Underwriter" "Personal Insurance Underwriter"
* #3313.001 "Leasing Agent (Buildings)" "Leasing Agent (Buildings)"
* #3313.002 "Property Consultant" "Property Consultant"
* #3313.003 "Property Developer" "Property Developer"
* #3313.004 "Property Development Manager" "Property Development Manager"
* #3313.005 "Property Salesperson" "Property Salesperson"
* #3313.006 "Real Estate Agent" "Real Estate Agent"
* #3313.007 "Real Estate Consultant" "Real Estate Consultant"
* #3313.008 "Real Estate Sales Person" "Real Estate Sales Person"
* #3313.009 "Real Estate Salesman" "Real Estate Salesman"
* #3313.010 "Real Estate Salesperson" "Real Estate Salesperson"
* #3313.011 "Residential Salesperson" "Residential Salesperson"
* #3314.001 "Airline Clerk" "Airline Clerk"
* #3314.002 "Airline Reservations Agent" "Airline Reservations Agent"
* #3314.003 "Booking Travel Clerk" "Booking Travel Clerk"
* #3314.004 "Travel Agent" "Travel Agent"
* #3314.005 "Travel Agent (Corporate)" "Travel Agent (Corporate)"
* #3314.006 "Travel Agent Representative" "Travel Agent Representative"
* #3314.007 "Travel Consolidator" "Travel Consolidator"
* #3314.008 "Travel Consultant" "Travel Consultant"
* #3314.009 "Travel Consultant (Corporate)" "Travel Consultant (Corporate)"
* #3314.010 "Travel Reservation Clerk" "Travel Reservation Clerk"
* #3314.011 "Travel Wholesaler" "Travel Wholesaler"
* #3315.001 "Advertising Agent Representative" "Advertising Agent Representative"
* #3315.002 "Advertising Consultant" "Advertising Consultant"
* #3315.003 "Advertising Representative" "Advertising Representative"
* #3315.004 "Advertising Sales Representative" "Advertising Sales Representative"
* #3315.005 "Advertising Salesman" "Advertising Salesman"
* #3315.006 "Avon Rep" "Avon Rep"
* #3315.007 "Business Services Representative" "Business Services Representative"
* #3315.008 "Business Services Salesman" "Business Services Salesman"
* #3315.009 "Commercial Sales Agent" "Commercial Sales Agent"
* #3315.010 "Commercial Traveller" "Commercial Traveller"
* #3315.011 "Commission Agent" "Commission Agent"
* #3315.012 "Company Rep" "Company Rep"
* #3315.013 "Company Representative" "Company Representative"
* #3315.014 "Computer Consultant" "Computer Consultant"
* #3315.015 "Computer Sales Consultant" "Computer Sales Consultant"
* #3315.016 "Computer Sales Representative" "Computer Sales Representative"
* #3315.017 "Computer Salesman" "Computer Salesman"
* #3315.018 "Computer Software Support Consultant" "Computer Software Support Consultant"
* #3315.019 "Computer Systems Consultant" "Computer Systems Consultant"
* #3315.020 "Computer Systems Salesman" "Computer Systems Salesman"
* #3315.021 "Customer Service Engineer" "Customer Service Engineer"
* #3315.022 "Customer Service Representative (Telemarketing)" "Customer Service Representative (Telemarketing)"
* #3315.023 "Engineering Salesman" "Engineering Salesman"
* #3315.024 "Export Agent" "Export Agent"
* #3315.025 "Export Representative" "Export Representative"
* #3315.026 "Indent Agent" "Indent Agent"
* #3315.027 "Kaihaere Hokohoko Taonga" "Kaihaere Hokohoko Taonga"
* #3315.028 "Kaihoko Haerere" "Kaihoko Haerere"
* #3315.029 "Kaihoko Taonga" "Kaihoko Taonga"
* #3315.030 "Manufacturers Representative" "Manufacturers Representative"
* #3315.031 "Manufacturers Sales Agent" "Manufacturers Sales Agent"
* #3315.032 "Marketing Representative" "Marketing Representative"
* #3315.033 "Medical Detailer" "Medical Detailer"
* #3315.034 "Medical Sales Representative" "Medical Sales Representative"
* #3315.035 "Model Agent" "Model Agent"
* #3315.036 "Motor Vehicle Sales Rep" "Motor Vehicle Sales Rep"
* #3315.037 "Patent Agent" "Patent Agent"
* #3315.038 "Publishers Representative" "Publishers Representative"
* #3315.039 "Publishing Consultant" "Publishing Consultant"
* #3315.040 "Rawleighs Agent" "Rawleighs Agent"
* #3315.041 "Sales Rep" "Sales Rep"
* #3315.042 "Sales Representative" "Sales Representative"
* #3315.043 "Salesman Technical" "Salesman Technical"
* #3315.044 "Service Manager" "Service Manager"
* #3315.045 "Service Manager Software Supply" "Service Manager Software Supply"
* #3315.046 "Technical Representative" "Technical Representative"
* #3315.047 "Technical Sales Coordinator" "Technical Sales Coordinator"
* #3315.048 "Technical Service Advisor" "Technical Service Advisor"
* #3315.049 "Technical Services Salesman" "Technical Services Salesman"
* #3315.050 "Telemarketing Representative" "Telemarketing Representative"
* #3315.051 "Theatrical Agent" "Theatrical Agent"
* #3315.052 "Trade Representative" "Trade Representative"
* #3315.053 "Transport Consultant" "Transport Consultant"
* #3316.001 "Buyer General" "Buyer General"
* #3316.002 "Company Buyer" "Company Buyer"
* #3316.003 "Farm Stock Buyer" "Farm Stock Buyer"
* #3316.004 "Furniture Buyer" "Furniture Buyer"
* #3316.005 "Gold Buyer" "Gold Buyer"
* #3316.006 "Grain and Produce Buyer" "Grain and Produce Buyer"
* #3316.007 "Livestock Agent" "Livestock Agent"
* #3316.008 "Livestock Buyer" "Livestock Buyer"
* #3316.009 "Log Buyer" "Log Buyer"
* #3316.010 "Print Buyer" "Print Buyer"
* #3316.011 "Produce Agent" "Produce Agent"
* #3316.012 "Purchasing Agent" "Purchasing Agent"
* #3316.013 "Purchasing Buyer" "Purchasing Buyer"
* #3316.014 "Purchasing Officer" "Purchasing Officer"
* #3316.015 "Retail Buyer" "Retail Buyer"
* #3316.016 "Skin Buyer" "Skin Buyer"
* #3316.017 "Wholesale Buyer" "Wholesale Buyer"
* #3316.018 "Wholesale or Retail Buyer" "Wholesale or Retail Buyer"
* #3316.019 "Wool Broker" "Wool Broker"
* #3316.020 "Wool Buyer" "Wool Buyer"
* #3316.021 "Wool Dealer" "Wool Dealer"
* #3316.022 "Wool Merchant" "Wool Merchant"
* #3316.023 "Yacht Broker" "Yacht Broker"
* #3317.001 "Antique Valuer" "Antique Valuer"
* #3317.002 "Appraiser" "Appraiser"
* #3317.003 "Commercial Valuer" "Commercial Valuer"
* #3317.004 "Farm Appraiser" "Farm Appraiser"
* #3317.005 "Land Valuer" "Land Valuer"
* #3317.006 "Property Valuer" "Property Valuer"
* #3317.007 "Registered Valuer" "Registered Valuer"
* #3317.008 "Rural Valuer" "Rural Valuer"
* #3317.009 "Urban Valuer" "Urban Valuer"
* #3317.010 "Valuation Officer" "Valuation Officer"
* #3317.011 "Valuer" "Valuer"
* #3318.001 "Auctioneer" "Auctioneer"
* #3318.002 "Furniture Auctioneer" "Furniture Auctioneer"
* #3318.003 "Livestock Auctioneer" "Livestock Auctioneer"
* #3318.004 "Real Estate Auctioneer" "Real Estate Auctioneer"
* #3318.005 "Stock Auctioneer" "Stock Auctioneer"
* #3318.006 "Wool Auctioneer" "Wool Auctioneer"
* #3319.001 "Stock and Station Agent" "Stock and Station Agent"
* #3321.001 "Aapiha Whakahaere Mahi" "Aapiha Whakahaere Mahi"
* #3321.002 "Administration Officer" "Administration Officer"
* #3321.003 "Apiha Whakahaere Mahi" "Apiha Whakahaere Mahi"
* #3321.004 "Conference Organiser" "Conference Organiser"
* #3321.005 "Event Manager" "Event Manager"
* #3321.006 "Office Facilities Manager" "Office Facilities Manager"
* #3321.007 "Function Organiser" "Function Organiser"
* #3321.008 "Functions Coordinator (Catering)" "Functions Coordinator (Catering)"
* #3321.009 "Functions Manager (Catering)" "Functions Manager (Catering)"
* #3321.010 "Kaiwhakahaere Mahi" "Kaiwhakahaere Mahi"
* #3321.011 "Sales Administration Officer" "Sales Administration Officer"
* #3321.012 "Tangata Whakahaere Mahi" "Tangata Whakahaere Mahi"
* #3321.013 "Wedding Coordinator" "Wedding Coordinator"
* #3322.001 "Articled Clerk" "Articled Clerk"
* #3322.002 "Clerk of Court" "Clerk of Court"
* #3322.003 "Conveyancing Clerk" "Conveyancing Clerk"
* #3322.004 "Court Clerk" "Court Clerk"
* #3322.005 "Estate Officer Public Trust" "Estate Officer Public Trust"
* #3322.006 "Kaimahi Ture" "Kaimahi Ture"
* #3322.007 "Law Clerk" "Law Clerk"
* #3322.008 "Legal Clerk" "Legal Clerk"
* #3322.009 "Legal Executive" "Legal Executive"
* #3322.010 "Legal Search Clerk" "Legal Search Clerk"
* #3322.011 "Trust Officer" "Trust Officer"
* #3323.001 "Accounts Bookkeeper" "Accounts Bookkeeper"
* #3323.002 "Book Keeper" "Book Keeper"
* #3323.003 "Bookkeeper" "Bookkeeper"
* #3323.004 "Ledger Keeper" "Ledger Keeper"
* #3324.001 "Building Consents Officer" "Building Consents Officer"
* #3324.002 "Building Control Officer" "Building Control Officer"
* #3324.003 "Contracts Manager" "Contracts Manager"
* #3324.004 "Efficiency Engineer" "Efficiency Engineer"
* #3324.005 "Ergonomist" "Ergonomist"
* #3324.006 "Industrial Planning Officer" "Industrial Planning Officer"
* #3324.007 "Management Engineer" "Management Engineer"
* #3324.008 "Management Services Officer" "Management Services Officer"
* #3324.009 "Methods Engineer" "Methods Engineer"
* #3324.010 "Organisation and Methods Analyst" "Organisation and Methods Analyst"
* #3324.011 "Organisation and Methods Engineer" "Organisation and Methods Engineer"
* #3324.012 "Process Improvement Coordinator" "Process Improvement Coordinator"
* #3324.013 "Safety Consultant" "Safety Consultant"
* #3324.014 "Time and Motion Study Officer" "Time and Motion Study Officer"
* #3324.015 "Work Study and Methods Officer" "Work Study and Methods Officer"
* #3324.016 "Work Study Observer" "Work Study Observer"
* #3324.017 "Work Study Officer" "Work Study Officer"
* #3324.018 "Works Measurement and Method Officer" "Works Measurement and Method Officer"
* #3331.001 "Agricultural Port Officer" "Agricultural Port Officer"
* #3331.002 "Biosecurity Officer" "Biosecurity Officer"
* #3331.003 "Border Protection Officer" "Border Protection Officer"
* #3331.004 "Customs Advisory Officer" "Customs Advisory Officer"
* #3331.005 "Customs and Excise Officer" "Customs and Excise Officer"
* #3331.006 "Customs Bond Agent" "Customs Bond Agent"
* #3331.007 "Customs Bond Officer" "Customs Bond Officer"
* #3331.008 "Customs Examiner" "Customs Examiner"
* #3331.009 "Customs Inspector" "Customs Inspector"
* #3331.010 "Customs Officer" "Customs Officer"
* #3331.011 "Customs Prevention Officer" "Customs Prevention Officer"
* #3331.012 "Immigration Officer" "Immigration Officer"
* #3331.013 "Quarantine and Agriculture Ports Officer" "Quarantine and Agriculture Ports Officer"
* #3331.014 "Quarantine Officer" "Quarantine Officer"
* #3331.015 "Quarantine Officer Ports" "Quarantine Officer Ports"
* #3341.001 "Care and Protection Social Worker" "Care and Protection Social Worker"
* #3341.002 "Case Worker" "Case Worker"
* #3341.003 "Child Welfare Officer" "Child Welfare Officer"
* #3341.004 "Community Activities Officer" "Community Activities Officer"
* #3341.005 "Community Centre Coordinator" "Community Centre Coordinator"
* #3341.006 "Community Corrections Officer" "Community Corrections Officer"
* #3341.007 "Community Health Worker" "Community Health Worker"
* #3341.008 "Community Service Worker" "Community Service Worker"
* #3341.009 "Community Services Advisor (Local Authority)" "Community Services Advisor (Local Authority)"
* #3341.010 "Community Social Worker" "Community Social Worker"
* #3341.011 "Community Worker" "Community Worker"
* #3341.012 "Family Support Worker" "Family Support Worker"
* #3341.013 "Health Social Worker" "Health Social Worker"
* #3341.014 "Kaimahi a Iwi" "Kaimahi a Iwi"
* #3341.015 "Kaimahi a Rohe" "Kaimahi a Rohe"
* #3341.016 "Kaimahi aa Iwi" "Kaimahi aa Iwi"
* #3341.017 "Kaimahi aa Roohe" "Kaimahi aa Roohe"
* #3341.018 "Kaimahi Awhina Taangata" "Kaimahi Awhina Taangata"
* #3341.019 "Kaimahi Awhina Tangata" "Kaimahi Awhina Tangata"
* #3341.020 "Kaimahi Manaaki Taangata" "Kaimahi Manaaki Taangata"
* #3341.021 "Kaimahi Manaaki Tangata" "Kaimahi Manaaki Tangata"
* #3341.022 "Kaimahi Tiaki Taangata" "Kaimahi Tiaki Taangata"
* #3341.023 "Kaimahi Tiaki Tangata" "Kaimahi Tiaki Tangata"
* #3341.024 "Kaimahi Toko i te Ora" "Kaimahi Toko i te Ora"
* #3341.025 "Maori Welfare Officer" "Maori Welfare Officer"
* #3341.026 "Medical Psychiatric Social Worker" "Medical Psychiatric Social Worker"
* #3341.027 "Mental Welfare Worker" "Mental Welfare Worker"
* #3341.028 "Parole Officer" "Parole Officer"
* #3341.029 "Police Welfare Officer" "Police Welfare Officer"
* #3341.030 "Prison Programme Coordinator" "Prison Programme Coordinator"
* #3341.031 "Prison Welfare Worker" "Prison Welfare Worker"
* #3341.032 "Probation Officer" "Probation Officer"
* #3341.033 "Probation Worker" "Probation Worker"
* #3341.034 "Rehabilitation Field Officer" "Rehabilitation Field Officer"
* #3341.035 "Residential Social Worker" "Residential Social Worker"
* #3341.036 "Resource Centre Community Worker" "Resource Centre Community Worker"
* #3341.037 "School Social Worker" "School Social Worker"
* #3341.038 "Social Case Worker" "Social Case Worker"
* #3341.039 "Social Welfare Caseworker" "Social Welfare Caseworker"
* #3341.040 "Social Welfare Officer" "Social Welfare Officer"
* #3341.041 "Social Worker" "Social Worker"
* #3341.042 "Voluntary Worker" "Voluntary Worker"
* #3341.043 "Whanau Support Worker" "Whanau Support Worker"
* #3341.044 "Youth Activities Officer" "Youth Activities Officer"
* #3341.045 "Youth Justice Social Worker" "Youth Justice Social Worker"
* #3341.046 "Youth Worker" "Youth Worker"
* #3342.001 "Access Teacher" "Access Teacher"
* #3342.002 "Access Tutor" "Access Tutor"
* #3342.003 "Employment Programme Teaching Associate Professional" "Employment Programme Teaching Associate Professional"
* #3342.004 "Kaiaawhina Kaiako" "Kaiaawhina Kaiako"
* #3342.005 "Kaiawhina Kura Tuatahi" "Kaiawhina Kura Tuatahi"
* #3342.006 "Teacher Aide" "Teacher Aide"
* #3342.007 "Teacher Aide Primary School" "Teacher Aide Primary School"
* #3342.008 "Teacher Aide Secondary School" "Teacher Aide Secondary School"
* #3342.009 "Teachers Assistant" "Teachers Assistant"
* #3342.010 "Technical Assistant Education" "Technical Assistant Education"
* #3351.001 "Career Counsellor" "Career Counsellor"
* #3351.002 "Career Practitioner" "Career Practitioner"
* #3351.003 "Careers Advisor" "Careers Advisor"
* #3351.004 "Careers Transition Employment Advisor" "Careers Transition Employment Advisor"
* #3351.005 "Employment Advisor" "Employment Advisor"
* #3351.006 "Employment Agency Consultant" "Employment Agency Consultant"
* #3351.007 "Employment Interviewer" "Employment Interviewer"
* #3351.008 "Employment Placement Officer" "Employment Placement Officer"
* #3351.009 "Occupational Guidance Officer" "Occupational Guidance Officer"
* #3351.010 "Placement Officer" "Placement Officer"
* #3351.011 "Vocational Guidance Officer" "Vocational Guidance Officer"
* #3361.001 "Advertising Copywriter" "Advertising Copywriter"
* #3361.002 "Art Critic" "Art Critic"
* #3361.003 "Author" "Author"
* #3361.004 "Author and Critic" "Author and Critic"
* #3361.005 "Book Editor" "Book Editor"
* #3361.006 "Book Reviewer" "Book Reviewer"
* #3361.007 "Broadcasting Journalist" "Broadcasting Journalist"
* #3361.008 "Columnist" "Columnist"
* #3361.009 "Commercial Writer" "Commercial Writer"
* #3361.010 "Continuity Editor" "Continuity Editor"
* #3361.011 "Copy Editor" "Copy Editor"
* #3361.012 "Copywriter" "Copywriter"
* #3361.013 "Critic" "Critic"
* #3361.014 "Dramatist" "Dramatist"
* #3361.015 "Economic Journalist" "Economic Journalist"
* #3361.016 "Editor" "Editor"
* #3361.017 "Editorial Assistant" "Editorial Assistant"
* #3361.018 "Film Assessor" "Film Assessor"
* #3361.019 "Foreign Correspondent" "Foreign Correspondent"
* #3361.020 "Journalist" "Journalist"
* #3361.021 "Literary Commentator" "Literary Commentator"
* #3361.022 "Literary Critic" "Literary Critic"
* #3361.023 "Magazine Editor" "Magazine Editor"
* #3361.024 "Manuals Editor" "Manuals Editor"
* #3361.025 "Manuscript Editor" "Manuscript Editor"
* #3361.026 "Media Writer Reporter" "Media Writer Reporter"
* #3361.027 "Music Reviewer" "Music Reviewer"
* #3361.028 "News Commentator Broadcasting" "News Commentator Broadcasting"
* #3361.029 "Newspaper Copywriter" "Newspaper Copywriter"
* #3361.030 "Newspaper Correspondent" "Newspaper Correspondent"
* #3361.031 "Newspaper Editor" "Newspaper Editor"
* #3361.032 "Newspapers Periodicals Editor" "Newspapers Periodicals Editor"
* #3361.033 "Novelist" "Novelist"
* #3361.034 "Playwright" "Playwright"
* #3361.035 "Poet" "Poet"
* #3361.036 "Press Reporter" "Press Reporter"
* #3361.037 "Pressman" "Pressman"
* #3361.038 "Print Journalist" "Print Journalist"
* #3361.039 "Publications Editor" "Publications Editor"
* #3361.040 "Publicity Writer" "Publicity Writer"
* #3361.041 "Radio Journalist" "Radio Journalist"
* #3361.042 "Reporter" "Reporter"
* #3361.043 "Script Editor" "Script Editor"
* #3361.044 "Script Writer" "Script Writer"
* #3361.045 "Sports Journalist" "Sports Journalist"
* #3361.046 "Sub-Editor" "Sub-Editor"
* #3361.047 "Television Journalist" "Television Journalist"
* #3361.048 "Textbook Writer" "Textbook Writer"
* #3361.049 "Works Publication Editor" "Works Publication Editor"
* #3361.050 "Writer" "Writer"
* #3361.051 "Writer Literary Works" "Writer Literary Works"
* #3362.001 "Air Brush Artist" "Air Brush Artist"
* #3362.002 "Art Enameller" "Art Enameller"
* #3362.003 "Art Restorer Paintings" "Art Restorer Paintings"
* #3362.004 "Art Teacher Private" "Art Teacher Private"
* #3362.005 "Artist" "Artist"
* #3362.006 "Artist Painter" "Artist Painter"
* #3362.007 "Artistic Etcher Engraver" "Artistic Etcher Engraver"
* #3362.008 "Artistic Printmaker" "Artistic Printmaker"
* #3362.009 "Bone Carver" "Bone Carver"
* #3362.010 "Caricaturist" "Caricaturist"
* #3362.011 "Cartoonist" "Cartoonist"
* #3362.012 "Carver" "Carver"
* #3362.013 "Chalkboard Artist" "Chalkboard Artist"
* #3362.014 "Community Artist" "Community Artist"
* #3362.015 "Craftsperson" "Craftsperson"
* #3362.016 "Maori Carver" "Maori Carver"
* #3362.017 "Mural Artist" "Mural Artist"
* #3362.018 "Muralist" "Muralist"
* #3362.019 "Photo Colourer" "Photo Colourer"
* #3362.020 "Portrait Painter" "Portrait Painter"
* #3362.021 "Sculptor" "Sculptor"
* #3362.022 "Stone Carver" "Stone Carver"
* #3362.023 "Tattooist" "Tattooist"
* #3362.024 "Wood Carver" "Wood Carver"
* #3362.025 "Wood Carver Creative" "Wood Carver Creative"
* #3363.001 "Advertising Artist" "Advertising Artist"
* #3363.002 "Advertising Illustrator" "Advertising Illustrator"
* #3363.003 "Advertising Visible Artist" "Advertising Visible Artist"
* #3363.004 "Animator" "Animator"
* #3363.005 "Animator Commercial Television" "Animator Commercial Television"
* #3363.006 "Art Director" "Art Director"
* #3363.007 "Art Illustrator" "Art Illustrator"
* #3363.008 "Book Illustrator" "Book Illustrator"
* #3363.009 "Calligrapher" "Calligrapher"
* #3363.010 "Carpet Copyist Planner" "Carpet Copyist Planner"
* #3363.011 "Carpet Designer" "Carpet Designer"
* #3363.012 "Ceramic Designer" "Ceramic Designer"
* #3363.013 "Childrens Book Illustrator" "Childrens Book Illustrator"
* #3363.014 "China Designer" "China Designer"
* #3363.015 "Clothing (Textiles) Designer" "Clothing (Textiles) Designer"
* #3363.016 "Clothing Designer" "Clothing Designer"
* #3363.017 "Commercial Artist" "Commercial Artist"
* #3363.018 "Commercial Designer" "Commercial Designer"
* #3363.019 "Commercial Product Designer" "Commercial Product Designer"
* #3363.020 "Display and Window Dresser" "Display and Window Dresser"
* #3363.021 "Display Artist" "Display Artist"
* #3363.022 "Display Dresser" "Display Dresser"
* #3363.023 "Dress Designer" "Dress Designer"
* #3363.024 "Engineering Illustrator" "Engineering Illustrator"
* #3363.025 "Fashion Designer" "Fashion Designer"
* #3363.026 "Footwear Designer" "Footwear Designer"
* #3363.027 "Graphic Artist" "Graphic Artist"
* #3363.028 "Graphic Designer" "Graphic Designer"
* #3363.029 "Illustrator" "Illustrator"
* #3363.030 "Illustrator Display" "Illustrator Display"
* #3363.031 "Industrial Designer" "Industrial Designer"
* #3363.032 "Interior Decorator" "Interior Decorator"
* #3363.033 "Interior Designer" "Interior Designer"
* #3363.034 "Kitchen Designer" "Kitchen Designer"
* #3363.035 "Lettering Designer" "Lettering Designer"
* #3363.036 "Lithographic Artist" "Lithographic Artist"
* #3363.037 "Medical Artist" "Medical Artist"
* #3363.038 "Medical Illustrator" "Medical Illustrator"
* #3363.039 "Paste Up Artist" "Paste Up Artist"
* #3363.040 "Quality Controller Of Clothing Designers" "Quality Controller Of Clothing Designers"
* #3363.041 "Stage Scenery Designer" "Stage Scenery Designer"
* #3363.042 "Technical Illustrator Artist" "Technical Illustrator Artist"
* #3363.043 "Technical Lithographic Artist" "Technical Lithographic Artist"
* #3363.044 "Textile Designing Worker" "Textile Designing Worker"
* #3363.045 "Textile Product Designer" "Textile Product Designer"
* #3363.046 "Theatre Lighting Designer" "Theatre Lighting Designer"
* #3363.047 "Ticket Writer" "Ticket Writer"
* #3363.048 "Wallpaper Designer" "Wallpaper Designer"
* #3363.049 "Weaving Pattern Card Preparer" "Weaving Pattern Card Preparer"
* #3363.050 "Web Graphic Designer" "Web Graphic Designer"
* #3363.051 "Window Dresser" "Window Dresser"
* #3364.001 "Accompanist" "Accompanist"
* #3364.002 "Arranger" "Arranger"
* #3364.003 "Band Conductor" "Band Conductor"
* #3364.004 "Band Leader" "Band Leader"
* #3364.005 "Bandsman" "Bandsman"
* #3364.006 "Busker" "Busker"
* #3364.007 "Choirmaster" "Choirmaster"
* #3364.008 "Choral Director" "Choral Director"
* #3364.009 "Composer" "Composer"
* #3364.010 "Conductor" "Conductor"
* #3364.011 "Instrumentalist" "Instrumentalist"
* #3364.012 "Lyric Writer" "Lyric Writer"
* #3364.013 "Music Arranger" "Music Arranger"
* #3364.014 "Music Composer" "Music Composer"
* #3364.015 "Music Director" "Music Director"
* #3364.016 "Music Teacher" "Music Teacher"
* #3364.017 "Musician" "Musician"
* #3364.018 "Orchestra Conductor" "Orchestra Conductor"
* #3364.019 "Orchestra Leader" "Orchestra Leader"
* #3364.020 "Orchestral Musician" "Orchestral Musician"
* #3364.021 "Orchestrator" "Orchestrator"
* #3364.022 "Organist" "Organist"
* #3364.023 "Pianist" "Pianist"
* #3364.024 "Piano Teacher" "Piano Teacher"
* #3364.025 "Programme Selector Music" "Programme Selector Music"
* #3364.026 "Singer" "Singer"
* #3364.027 "Singing and Music Teacher" "Singing and Music Teacher"
* #3364.028 "Singing Teacher" "Singing Teacher"
* #3364.029 "Song Writer" "Song Writer"
* #3364.030 "Vocalist" "Vocalist"
* #3365.001 "Ballet Dancer" "Ballet Dancer"
* #3365.002 "Ballet Teacher" "Ballet Teacher"
* #3365.003 "Ballroom Dancer" "Ballroom Dancer"
* #3365.004 "Choreographer" "Choreographer"
* #3365.005 "Classical Dancer" "Classical Dancer"
* #3365.006 "Dance Teacher" "Dance Teacher"
* #3365.007 "Dancer" "Dancer"
* #3365.008 "Dancing Teacher" "Dancing Teacher"
* #3365.009 "Modern Dancer" "Modern Dancer"
* #3366.001 "Actor" "Actor"
* #3366.002 "Actress" "Actress"
* #3366.003 "Artistic Director" "Artistic Director"
* #3366.004 "Broadcasting Designer" "Broadcasting Designer"
* #3366.005 "Director of Photography Film Television" "Director of Photography Film Television"
* #3366.006 "Directors Assistant" "Directors Assistant"
* #3366.007 "Film Director" "Film Director"
* #3366.008 "Location Director" "Location Director"
* #3366.009 "Motion Picture Director" "Motion Picture Director"
* #3366.010 "Production Assistant (Film)" "Production Assistant (Film)"
* #3366.011 "Production Assistant (Radio)" "Production Assistant (Radio)"
* #3366.012 "Production Assistant (TV)" "Production Assistant (TV)"
* #3366.013 "Production Runner (Radio and TV)" "Production Runner (Radio and TV)"
* #3366.014 "Radio Director" "Radio Director"
* #3366.015 "Stage Director" "Stage Director"
* #3366.016 "Stage Manager" "Stage Manager"
* #3366.017 "Studio Director" "Studio Director"
* #3366.018 "Stunt Coordinator" "Stunt Coordinator"
* #3366.019 "Stuntman" "Stuntman"
* #3366.020 "Stuntperson" "Stuntperson"
* #3366.021 "Television Director" "Television Director"
* #3366.022 "Theatre Director" "Theatre Director"
* #3366.023 "Theatrical Director" "Theatrical Director"
* #3366.024 "TV Floor Manager" "TV Floor Manager"
* #3366.025 "TV Producers Assistant" "TV Producers Assistant"
* #3367.001 "Broadcaster" "Broadcaster"
* #3367.002 "Compere" "Compere"
* #3367.003 "Disc Jockey" "Disc Jockey"
* #3367.004 "DJ" "DJ"
* #3367.005 "Newscaster" "Newscaster"
* #3367.006 "Newsreader" "Newsreader"
* #3367.007 "Radio Announcer" "Radio Announcer"
* #3367.008 "Radio Broadcaster" "Radio Broadcaster"
* #3367.009 "Radio Presenter" "Radio Presenter"
* #3367.010 "Sports Commentator" "Sports Commentator"
* #3367.011 "Television Announcer" "Television Announcer"
* #3367.012 "Television Broadcaster" "Television Broadcaster"
* #3367.013 "Television Presenter" "Television Presenter"
* #3367.014 "TV Presenter" "TV Presenter"
* #3368.001 "Acrobat" "Acrobat"
* #3368.002 "Astrologer" "Astrologer"
* #3368.003 "Circus Performer" "Circus Performer"
* #3368.004 "Clown" "Clown"
* #3368.005 "Comedian" "Comedian"
* #3368.006 "Entertainer" "Entertainer"
* #3368.007 "Female Impersonator" "Female Impersonator"
* #3368.008 "Fortune Teller" "Fortune Teller"
* #3368.009 "Handwriting Expert" "Handwriting Expert"
* #3368.010 "Hypnotist" "Hypnotist"
* #3368.011 "Magician" "Magician"
* #3368.012 "Puppet Showman" "Puppet Showman"
* #3368.013 "Showman" "Showman"
* #3368.014 "Side Show Performer" "Side Show Performer"
* #3368.015 "Strip Tease Artist" "Strip Tease Artist"
* #3368.016 "Vaudeville Performer" "Vaudeville Performer"
* #3368.017 "Ventriloquist" "Ventriloquist"
* #3369.001 "Aerobics Instructor" "Aerobics Instructor"
* #3369.002 "Aquafitness Instructor" "Aquafitness Instructor"
* #3369.003 "Athlete" "Athlete"
* #3369.004 "Athletic Coach" "Athletic Coach"
* #3369.005 "Boxer" "Boxer"
* #3369.006 "Coach" "Coach"
* #3369.007 "Cricketer" "Cricketer"
* #3369.008 "Fitness Centre Worker" "Fitness Centre Worker"
* #3369.009 "Fitness Consultant" "Fitness Consultant"
* #3369.010 "Fitness Inspector" "Fitness Inspector"
* #3369.011 "Fitness Instructor" "Fitness Instructor"
* #3369.012 "Golfer" "Golfer"
* #3369.013 "Gym Instructor" "Gym Instructor"
* #3369.014 "Gym Trainer" "Gym Trainer"
* #3369.015 "Harness Racing Driver" "Harness Racing Driver"
* #3369.016 "Health and Fitness Instructor" "Health and Fitness Instructor"
* #3369.017 "Jockey" "Jockey"
* #3369.018 "Judo Instructor" "Judo Instructor"
* #3369.019 "Martial Arts Instructor" "Martial Arts Instructor"
* #3369.020 "Outdoor Instructor" "Outdoor Instructor"
* #3369.021 "Physical Training Instructor" "Physical Training Instructor"
* #3369.022 "Professional Sports Coach" "Professional Sports Coach"
* #3369.023 "Professional Sportsperson" "Professional Sportsperson"
* #3369.024 "Racecourse Official" "Racecourse Official"
* #3369.025 "Racecourse Starter" "Racecourse Starter"
* #3369.026 "Racecourse Steward" "Racecourse Steward"
* #3369.027 "Racecourse Timekeeper" "Racecourse Timekeeper"
* #3369.028 "Referee" "Referee"
* #3369.029 "Riding School Instructor" "Riding School Instructor"
* #3369.030 "Rugby League Player" "Rugby League Player"
* #3369.031 "Rugby Player" "Rugby Player"
* #3369.032 "Ski Coach" "Ski Coach"
* #3369.033 "Ski Instructor" "Ski Instructor"
* #3369.034 "Ski Patrol Director" "Ski Patrol Director"
* #3369.035 "Ski Tutor" "Ski Tutor"
* #3369.036 "Snowboard Instructor" "Snowboard Instructor"
* #3369.037 "Sports Coach" "Sports Coach"
* #3369.038 "Sports Coach and Trainer" "Sports Coach and Trainer"
* #3369.039 "Sports Official" "Sports Official"
* #3369.040 "Sports Trainer" "Sports Trainer"
* #3369.041 "Sportsman" "Sportsman"
* #3369.042 "Sportsperson" "Sportsperson"
* #3369.043 "Sportswoman" "Sportswoman"
* #3369.044 "Stipendiary Steward" "Stipendiary Steward"
* #3369.045 "Surf Patrolman" "Surf Patrolman"
* #3369.046 "Swimming Instructor" "Swimming Instructor"
* #3369.047 "Swimming Teacher" "Swimming Teacher"
* #3369.048 "Tennis Coach" "Tennis Coach"
* #3369.049 "Timekeeper" "Timekeeper"
* #3369.050 "Trainer" "Trainer"
* #3369.051 "Umpire" "Umpire"
* #3369.052 "Wrestler" "Wrestler"
* #3369.053 "Yachtsman" "Yachtsman"
* #3371.001 "Bible Teacher" "Bible Teacher"
* #3371.002 "Christian Mission Worker" "Christian Mission Worker"
* #3371.003 "Christian Science Practitioner" "Christian Science Practitioner"
* #3371.004 "Church Worker" "Church Worker"
* #3371.005 "Evangelist" "Evangelist"
* #3371.006 "Member of Religious Order" "Member of Religious Order"
* #3371.007 "Missionary" "Missionary"
* #3371.008 "Missionary Non-Ordained" "Missionary Non-Ordained"
* #3371.009 "Non-Ordained Religious Assistant" "Non-Ordained Religious Assistant"
* #3371.010 "Nun" "Nun"
* #3371.011 "Psychic Healer" "Psychic Healer"
* #3371.012 "Religious Layman" "Religious Layman"
* #3371.013 "Religious Sister" "Religious Sister"
* #3371.014 "Religious Worker" "Religious Worker"
* #3371.015 "Theologian" "Theologian"
* #3371.016 "Transcendental Meditation Practitioner" "Transcendental Meditation Practitioner"
* #3371.017 "Yoga Teacher" "Yoga Teacher"
* #3381.001 "Acclimatisation Field Officer" "Acclimatisation Field Officer"
* #3381.002 "Acclimatisation Ranger" "Acclimatisation Ranger"
* #3381.003 "Beach and Estuary Warden" "Beach and Estuary Warden"
* #3381.004 "Fish and Game Warden" "Fish and Game Warden"
* #3381.005 "National Park Ranger" "National Park Ranger"
* #3381.006 "Park Ranger" "Park Ranger"
* #3381.007 "Wildlife Officer" "Wildlife Officer"
* #4111.001 "Audio Typist" "Audio Typist"
* #4111.002 "Bank Typist" "Bank Typist"
* #4111.003 "Computer Assisted Transcript Operator" "Computer Assisted Transcript Operator"
* #4111.004 "Dictaphone Typist" "Dictaphone Typist"
* #4111.005 "Hansard Reporter" "Hansard Reporter"
* #4111.006 "Medical Typist" "Medical Typist"
* #4111.007 "Public Typist" "Public Typist"
* #4111.008 "Shorthand Typist" "Shorthand Typist"
* #4111.009 "Staff Typist" "Staff Typist"
* #4111.010 "Stenographer" "Stenographer"
* #4111.011 "Typist" "Typist"
* #4111.012 "Typist and Word Processor Operator" "Typist and Word Processor Operator"
* #4111.013 "Typist Clerk" "Typist Clerk"
* #4111.014 "Typist Secretary" "Typist Secretary"
* #4111.015 "Verbatim Reporter" "Verbatim Reporter"
* #4111.016 "Word Processing Operator" "Word Processing Operator"
* #4111.017 "Word Processor" "Word Processor"
* #4111.018 "Word Processor Operator" "Word Processor Operator"
* #4111.019 "WP Operator" "WP Operator"
* #4112.001 "Coding Clerk" "Coding Clerk"
* #4112.002 "Coding Data Processing Clerk" "Coding Data Processing Clerk"
* #4112.003 "Data Control Clerk" "Data Control Clerk"
* #4112.004 "Data Entry Clerk" "Data Entry Clerk"
* #4112.005 "Data Entry Operator" "Data Entry Operator"
* #4112.006 "Data Entry Supervisor" "Data Entry Supervisor"
* #4112.007 "Data Processing Machine Operator" "Data Processing Machine Operator"
* #4112.008 "Electronic Data Processor" "Electronic Data Processor"
* #4112.009 "Flexowriter Printer" "Flexowriter Printer"
* #4112.010 "Kaiwhakauru Hotuku" "Kaiwhakauru Hotuku"
* #4112.011 "Kaiwhakauru Tatai" "Kaiwhakauru Tatai"
* #4112.012 "Kaiwhakaurunga Tatai" "Kaiwhakaurunga Tatai"
* #4112.013 "Kaiwhakuru Hootuku" "Kaiwhakuru Hootuku"
* #4112.014 "Key Punch Operator" "Key Punch Operator"
* #4112.015 "Keyboard Operator" "Keyboard Operator"
* #4112.016 "Punched Card Machine Operator" "Punched Card Machine Operator"
* #4112.017 "Quality Controller Of Data Entry Operators" "Quality Controller Of Data Entry Operators"
* #4112.018 "Teleprompt Operator" "Teleprompt Operator"
* #4112.019 "VDU Operator" "VDU Operator"
* #4112.020 "Visual Display Unit Operator" "Visual Display Unit Operator"
* #4114.001 "Company Secretary Clerical" "Company Secretary Clerical"
* #4114.002 "Correspondence Clerk" "Correspondence Clerk"
* #4114.003 "Executive Assistant" "Executive Assistant"
* #4114.004 "Farm Secretary" "Farm Secretary"
* #4114.005 "Hekeretari" "Hekeretari"
* #4114.006 "Kaiawhina Tumuaki" "Kaiawhina Tumuaki"
* #4114.007 "Legal Secretary" "Legal Secretary"
* #4114.008 "Office Secretary" "Office Secretary"
* #4114.009 "PA Secretary" "PA Secretary"
* #4114.010 "Personal Assistant" "Personal Assistant"
* #4114.011 "Personal Secretary" "Personal Secretary"
* #4114.012 "Private Secretary" "Private Secretary"
* #4114.013 "Quality Controller Of Secretarys" "Quality Controller Of Secretarys"
* #4114.014 "School Secretary" "School Secretary"
* #4114.015 "Secretary" "Secretary"
* #4121.001 "Accountancy Clerk" "Accountancy Clerk"
* #4121.002 "Accounting Clerk" "Accounting Clerk"
* #4121.003 "Accounting Machinist" "Accounting Machinist"
* #4121.004 "Accounts Administrator" "Accounts Administrator"
* #4121.005 "Accounts Clerk" "Accounts Clerk"
* #4121.006 "Accounts Controller" "Accounts Controller"
* #4121.007 "Accounts Officer" "Accounts Officer"
* #4121.008 "Accounts Payable Clerk" "Accounts Payable Clerk"
* #4121.009 "Accounts Receivable Clerk" "Accounts Receivable Clerk"
* #4121.010 "Adding Machine Operator" "Adding Machine Operator"
* #4121.011 "Audit Assistant" "Audit Assistant"
* #4121.012 "Audit Clerk" "Audit Clerk"
* #4121.013 "Bookkeeping Clerk" "Bookkeeping Clerk"
* #4121.014 "Bookkeeping Machine Operator" "Bookkeeping Machine Operator"
* #4121.015 "Burroughs Machine Operator" "Burroughs Machine Operator"
* #4121.016 "Calculating Machine Operator" "Calculating Machine Operator"
* #4121.017 "Calculation Clerk" "Calculation Clerk"
* #4121.018 "Costing Clerk" "Costing Clerk"
* #4121.019 "Costing Estimator" "Costing Estimator"
* #4121.020 "Debtors Clerk" "Debtors Clerk"
* #4121.021 "Invoicing Machine Operator" "Invoicing Machine Operator"
* #4121.022 "Kairekoata Moni" "Kairekoata Moni"
* #4121.023 "Kaiutuutu Kaute" "Kaiutuutu Kaute"
* #4121.024 "Karaka Utuutu Kaute" "Karaka Utuutu Kaute"
* #4121.025 "Ledger Keeping Machinist" "Ledger Keeping Machinist"
* #4121.026 "Legal Accounts Clerk" "Legal Accounts Clerk"
* #4121.027 "Meter Reader Electric" "Meter Reader Electric"
* #4121.028 "Payments Clerk" "Payments Clerk"
* #4121.029 "Pricing Clerk" "Pricing Clerk"
* #4121.030 "Quality Controller Of Audit Clerks" "Quality Controller Of Audit Clerks"
* #4121.031 "Rates Clerk" "Rates Clerk"
* #4121.032 "Rating Officer" "Rating Officer"
* #4121.033 "Royalties Clerk" "Royalties Clerk"
* #4122.001 "Assistant Regional Field Supervisor" "Assistant Regional Field Supervisor"
* #4122.002 "Brokerage Clerk" "Brokerage Clerk"
* #4122.003 "Canvasser" "Canvasser"
* #4122.004 "Census Area Supervisor" "Census Area Supervisor"
* #4122.005 "Census Clerk" "Census Clerk"
* #4122.006 "Census Enumerator" "Census Enumerator"
* #4122.007 "Census Field Supervisor" "Census Field Supervisor"
* #4122.008 "Census Processing Manager" "Census Processing Manager"
* #4122.009 "Clerk Field Collections" "Clerk Field Collections"
* #4122.010 "Credit Clerk" "Credit Clerk"
* #4122.011 "Data Capture and Edit Team Leader" "Data Capture and Edit Team Leader"
* #4122.012 "Deputy Census Coordinator" "Deputy Census Coordinator"
* #4122.013 "Enumerator" "Enumerator"
* #4122.014 "Field Officer Clerical" "Field Officer Clerical"
* #4122.015 "Finance Clerk" "Finance Clerk"
* #4122.016 "Finance Officer" "Finance Officer"
* #4122.017 "Interviewer" "Interviewer"
* #4122.018 "Loans Officer" "Loans Officer"
* #4122.019 "Market Research Interviewer" "Market Research Interviewer"
* #4122.020 "Market Research Reporter" "Market Research Reporter"
* #4122.021 "Market Survey Interviewer" "Market Survey Interviewer"
* #4122.022 "Mortgage Clerk" "Mortgage Clerk"
* #4122.023 "Phone Surveyor" "Phone Surveyor"
* #4122.024 "Poll Interviewer" "Poll Interviewer"
* #4122.025 "Research Interviewer" "Research Interviewer"
* #4122.026 "Sales Canvasser" "Sales Canvasser"
* #4122.027 "Statistical Clerk" "Statistical Clerk"
* #4122.028 "Statistics Clerk" "Statistics Clerk"
* #4122.029 "Survey Design Statistician" "Survey Design Statistician"
* #4122.030 "Survey Interviewer" "Survey Interviewer"
* #4122.031 "Survey Statistician" "Survey Statistician"
* #4122.032 "Telemarketer" "Telemarketer"
* #4122.033 "Telephone Canvasser" "Telephone Canvasser"
* #4122.034 "Telephone Sales Person" "Telephone Sales Person"
* #4122.035 "Telephone Salesperson" "Telephone Salesperson"
* #4122.036 "Telephone Surveyor" "Telephone Surveyor"
* #4131.001 "Bulk Store Supervisor" "Bulk Store Supervisor"
* #4131.002 "Cargo Agent" "Cargo Agent"
* #4131.003 "Check Weighman" "Check Weighman"
* #4131.004 "Customs Agent" "Customs Agent"
* #4131.005 "Customs Agents Clerk" "Customs Agents Clerk"
* #4131.006 "Customs Broker" "Customs Broker"
* #4131.007 "Customs Clerk" "Customs Clerk"
* #4131.008 "Despatch Clerk" "Despatch Clerk"
* #4131.009 "Dispatch and Receiving Clerk" "Dispatch and Receiving Clerk"
* #4131.010 "Dispatch Clerk" "Dispatch Clerk"
* #4131.011 "Dispatch Storeman" "Dispatch Storeman"
* #4131.012 "Dispatch Storeperson" "Dispatch Storeperson"
* #4131.013 "Dispatch Supervisor" "Dispatch Supervisor"
* #4131.014 "Distribution Officer" "Distribution Officer"
* #4131.015 "Export Clerk" "Export Clerk"
* #4131.016 "Forwarding Agent" "Forwarding Agent"
* #4131.017 "Freight Forwarder" "Freight Forwarder"
* #4131.018 "Import and Export Clerk" "Import and Export Clerk"
* #4131.019 "Inventory Clerk" "Inventory Clerk"
* #4131.020 "Inventory Officer" "Inventory Officer"
* #4131.021 "Invoice Clerk" "Invoice Clerk"
* #4131.022 "Invoicing Clerk" "Invoicing Clerk"
* #4131.023 "Inwards Goods Clerk" "Inwards Goods Clerk"
* #4131.024 "Kaimahi Whare Putunga" "Kaimahi Whare Putunga"
* #4131.025 "Kaimahi Wharerangi" "Kaimahi Wharerangi"
* #4131.026 "Kaituku" "Kaituku"
* #4131.027 "Kaituku Taonga" "Kaituku Taonga"
* #4131.028 "Kaiwhakahaere Mau Mai Tuku Atu Taonga" "Kaiwhakahaere Mau Mai Tuku Atu Taonga"
* #4131.029 "Kaiwhakahaere Rekoata" "Kaiwhakahaere Rekoata"
* #4131.030 "Manufacturing Distributor" "Manufacturing Distributor"
* #4131.031 "Parts Warehouse Clerk" "Parts Warehouse Clerk"
* #4131.032 "Produce Tally Clerk" "Produce Tally Clerk"
* #4131.033 "Property Man Theatre" "Property Man Theatre"
* #4131.034 "Purchasing and Inventory Officer" "Purchasing and Inventory Officer"
* #4131.035 "Purchasing Clerk" "Purchasing Clerk"
* #4131.036 "Receiving Clerk" "Receiving Clerk"
* #4131.037 "Sales Clerk Engineering" "Sales Clerk Engineering"
* #4131.038 "Shipping Freight Clerk" "Shipping Freight Clerk"
* #4131.039 "Shipping Officer" "Shipping Officer"
* #4131.040 "Shipping Tally Clerk" "Shipping Tally Clerk"
* #4131.041 "Ships Providore" "Ships Providore"
* #4131.042 "Stock Clerk" "Stock Clerk"
* #4131.043 "Stock Control Clerk" "Stock Control Clerk"
* #4131.044 "Stock Controller" "Stock Controller"
* #4131.045 "Stock Officer" "Stock Officer"
* #4131.046 "Stockroom Controller" "Stockroom Controller"
* #4131.047 "Storage Clerk" "Storage Clerk"
* #4131.048 "Store Enquiries Clerk" "Store Enquiries Clerk"
* #4131.049 "Storekeeping Officer" "Storekeeping Officer"
* #4131.050 "Storeperson Enquiries" "Storeperson Enquiries"
* #4131.051 "Storeperson General" "Storeperson General"
* #4131.052 "Storeperson General Assistant" "Storeperson General Assistant"
* #4131.053 "Storeroom Clerk" "Storeroom Clerk"
* #4131.054 "Stores Assistant" "Stores Assistant"
* #4131.055 "Supervisor Supplies" "Supervisor Supplies"
* #4131.056 "Tally Clerk" "Tally Clerk"
* #4131.057 "Taonga Wheketere" "Taonga Wheketere"
* #4131.058 "Warehouse Clerk" "Warehouse Clerk"
* #4131.059 "Warehouse Storeman" "Warehouse Storeman"
* #4131.060 "Warehouse Storeperson" "Warehouse Storeperson"
* #4131.061 "Warehouse Supervisor Clerical" "Warehouse Supervisor Clerical"
* #4131.062 "Weighbridge Attendant" "Weighbridge Attendant"
* #4131.063 "Weighing and Tally Clerk" "Weighing and Tally Clerk"
* #4131.064 "Weighing Clerk" "Weighing Clerk"
* #4131.065 "Weighmaster" "Weighmaster"
* #4132.001 "Coordinating Clerk" "Coordinating Clerk"
* #4132.002 "Material and Production Planning Clerk" "Material and Production Planning Clerk"
* #4132.003 "Material Planning Clerk" "Material Planning Clerk"
* #4132.004 "Materials Planner" "Materials Planner"
* #4132.005 "Production Clerk Officer" "Production Clerk Officer"
* #4132.006 "Production Controller" "Production Controller"
* #4132.007 "Production Planner" "Production Planner"
* #4132.008 "Production Planning Clerk" "Production Planning Clerk"
* #4132.009 "Production Planning Supervisor" "Production Planning Supervisor"
* #4132.010 "Production Scheduler" "Production Scheduler"
* #4132.011 "Quality Controller Of Material And Production Clerks" "Quality Controller Of Material And Production Clerks"
* #4132.012 "Schedule Clerk" "Schedule Clerk"
* #4133.001 "Air Transport Supervisor" "Air Transport Supervisor"
* #4133.002 "Boat Dispatcher" "Boat Dispatcher"
* #4133.003 "Bus Ticket Inspector" "Bus Ticket Inspector"
* #4133.004 "Bus Tram Conductor" "Bus Tram Conductor"
* #4133.005 "Cable Car Conductor" "Cable Car Conductor"
* #4133.006 "Railway Guard" "Railway Guard"
* #4133.007 "Railway Ticket Inspector" "Railway Ticket Inspector"
* #4133.008 "Railway Traffic Dispatcher" "Railway Traffic Dispatcher"
* #4133.009 "Railway Traffic Inspector" "Railway Traffic Inspector"
* #4133.010 "Railway Transport Clerk" "Railway Transport Clerk"
* #4133.011 "Railway Transport Service Inspector" "Railway Transport Service Inspector"
* #4133.012 "Railways Traffic Foreman" "Railways Traffic Foreman"
* #4133.013 "Railways Yard Foreman" "Railways Yard Foreman"
* #4133.014 "Railways Yard Master" "Railways Yard Master"
* #4133.015 "Road Passenger Transport Inspector" "Road Passenger Transport Inspector"
* #4133.016 "Road Traffic Controller" "Road Traffic Controller"
* #4133.017 "Road Transport Dispatcher" "Road Transport Dispatcher"
* #4133.018 "Shipping Clerk" "Shipping Clerk"
* #4133.019 "Supervisor Locomotives" "Supervisor Locomotives"
* #4133.020 "Supervisor Other Transport and Communications" "Supervisor Other Transport and Communications"
* #4133.021 "Supervisor Railway Goods" "Supervisor Railway Goods"
* #4133.022 "Supervisor Railways" "Supervisor Railways"
* #4133.023 "Supervisor Road Transport" "Supervisor Road Transport"
* #4133.024 "Ticket Collector Railway" "Ticket Collector Railway"
* #4133.025 "Traffic Supervisor Airport Airlines" "Traffic Supervisor Airport Airlines"
* #4133.026 "Train Control Operator" "Train Control Operator"
* #4133.027 "Train Examiner" "Train Examiner"
* #4133.028 "Train Guard" "Train Guard"
* #4133.029 "Transport Clerk" "Transport Clerk"
* #4133.030 "Transport Department Inspector" "Transport Department Inspector"
* #4133.031 "Transport Depot Superintendent" "Transport Depot Superintendent"
* #4133.032 "Wagon Recorder" "Wagon Recorder"
* #4133.033 "Wharfinger" "Wharfinger"
* #4141.001 "Cataloguing Clerk" "Cataloguing Clerk"
* #4141.002 "Childrens Library Assistant" "Childrens Library Assistant"
* #4141.003 "Circulation Desk Assistant" "Circulation Desk Assistant"
* #4141.004 "Compiler" "Compiler"
* #4141.005 "Directory Compiler" "Directory Compiler"
* #4141.006 "Documentation Clerk Officer" "Documentation Clerk Officer"
* #4141.007 "Filing Clerk" "Filing Clerk"
* #4141.008 "Film Library Clerk" "Film Library Clerk"
* #4141.009 "Index Clerk" "Index Clerk"
* #4141.010 "Library Assistant" "Library Assistant"
* #4141.011 "Listing Clerk" "Listing Clerk"
* #4141.012 "Mobile Library Assistant" "Mobile Library Assistant"
* #4141.013 "Plan Records Officer" "Plan Records Officer"
* #4141.014 "Quality Controller Of Library Assistants" "Quality Controller Of Library Assistants"
* #4141.015 "Quality Controller Of Record And Filing Clerk" "Quality Controller Of Record And Filing Clerk"
* #4141.016 "Record and Filing Clerk" "Record and Filing Clerk"
* #4141.017 "Records Clerk" "Records Clerk"
* #4141.018 "Records Officer" "Records Officer"
* #4141.019 "Registry Office Keeper" "Registry Office Keeper"
* #4141.020 "School Library Assistant" "School Library Assistant"
* #4141.021 "Ward Clerk" "Ward Clerk"
* #4142.001 "Kaikomiri Mera" "Kaikomiri Mera"
* #4142.002 "Kaikomiri Reta" "Kaikomiri Reta"
* #4142.003 "Kaikoomiri Meera" "Kaikoomiri Meera"
* #4142.004 "Kaikoomiri Reta" "Kaikoomiri Reta"
* #4142.005 "Kaikoowhiri Kopaki" "Kaikoowhiri Kopaki"
* #4142.006 "Kaikoowhiri Meera" "Kaikoowhiri Meera"
* #4142.007 "Kaikoowhiri Reta" "Kaikoowhiri Reta"
* #4142.008 "Kaikowhiri Kopaki" "Kaikowhiri Kopaki"
* #4142.009 "Kaikowhiri Mera" "Kaikowhiri Mera"
* #4142.010 "Kaikowhiri Reta" "Kaikowhiri Reta"
* #4142.011 "Mail Carrier" "Mail Carrier"
* #4142.012 "Mail Clerk" "Mail Clerk"
* #4142.013 "Mail Contractor" "Mail Contractor"
* #4142.014 "Mail Delivery Contractor" "Mail Delivery Contractor"
* #4142.015 "Mail Dispatch Clerk Office" "Mail Dispatch Clerk Office"
* #4142.016 "Mail Dispatch Clerk Post Office" "Mail Dispatch Clerk Post Office"
* #4142.017 "Mail Distribution Clerk" "Mail Distribution Clerk"
* #4142.018 "Mail Sorter" "Mail Sorter"
* #4142.019 "Mail Sorting Clerk" "Mail Sorting Clerk"
* #4142.020 "Mailman" "Mailman"
* #4142.021 "Post Office Clerk" "Post Office Clerk"
* #4142.022 "Post Office Mail Clerk" "Post Office Mail Clerk"
* #4142.023 "Post Office Mail Sorter" "Post Office Mail Sorter"
* #4142.024 "Post Office Supervisor" "Post Office Supervisor"
* #4142.025 "Post Woman" "Post Woman"
* #4142.026 "Postal Clerk" "Postal Clerk"
* #4142.027 "Postal Deliverer" "Postal Deliverer"
* #4142.028 "Postal Services Supervisor Other" "Postal Services Supervisor Other"
* #4142.029 "Postal Services Supervisor Post Office" "Postal Services Supervisor Post Office"
* #4142.030 "Postal Sorter" "Postal Sorter"
* #4142.031 "Postie" "Postie"
* #4142.032 "Postman" "Postman"
* #4142.033 "Postwoman" "Postwoman"
* #4142.034 "Quality Controller Of Mail Clerks" "Quality Controller Of Mail Clerks"
* #4142.035 "Quality Controller Of Mail Delivery Contractors" "Quality Controller Of Mail Delivery Contractors"
* #4142.036 "Quality Controller Of Mail Sorting Clerks" "Quality Controller Of Mail Sorting Clerks"
* #4142.037 "Quality Controller Of Postal Deliverers" "Quality Controller Of Postal Deliverers"
* #4142.038 "Rural Delivery Contractor" "Rural Delivery Contractor"
* #4142.039 "Rural Mail Contractor" "Rural Mail Contractor"
* #4142.040 "Rural Mail Deliverer" "Rural Mail Deliverer"
* #4142.041 "Rural Mail Delivery Contractor" "Rural Mail Delivery Contractor"
* #4143.001 "Proof Machine Operator" "Proof Machine Operator"
* #4143.002 "Proof Reader" "Proof Reader"
* #4143.003 "Readers Assistant" "Readers Assistant"
* #4144.001 "Accommodation Officer University Hostels" "Accommodation Officer University Hostels"
* #4144.002 "Addressing Machine Operator" "Addressing Machine Operator"
* #4144.003 "Apihaa rangahau korero" "Apihaa rangahau korero"
* #4144.004 "Clerical Assistant" "Clerical Assistant"
* #4144.005 "Clerical Supervisor" "Clerical Supervisor"
* #4144.006 "Clerical Worker" "Clerical Worker"
* #4144.007 "Document Shredder" "Document Shredder"
* #4144.008 "Duplicating Machinist" "Duplicating Machinist"
* #4144.009 "General Clerk" "General Clerk"
* #4144.010 "General Office Clerk" "General Office Clerk"
* #4144.011 "Girl Friday" "Girl Friday"
* #4144.012 "Government Department Clerk" "Government Department Clerk"
* #4144.013 "Human Resources Clerk" "Human Resources Clerk"
* #4144.014 "Junior Clerk" "Junior Clerk"
* #4144.015 "Kaaraka" "Kaaraka"
* #4144.016 "Kaaraka o te Tari" "Kaaraka o te Tari"
* #4144.017 "Kaiawhina Mahi Tari" "Kaiawhina Mahi Tari"
* #4144.018 "Kaimahi Tari" "Kaimahi Tari"
* #4144.019 "Kaitautoko Tauira Maaori" "Kaitautoko Tauira Maaori"
* #4144.020 "Kaitiaki Putea" "Kaitiaki Putea"
* #4144.021 "Kaitiaki Puutea" "Kaitiaki Puutea"
* #4144.022 "Kaitiaki Tari" "Kaitiaki Tari"
* #4144.023 "Karaka" "Karaka"
* #4144.024 "Karaka o te Tari" "Karaka o te Tari"
* #4144.025 "Local Body Clerk" "Local Body Clerk"
* #4144.026 "Local Body Officer" "Local Body Officer"
* #4144.027 "Newspaper Clerk" "Newspaper Clerk"
* #4144.028 "Office Assistant" "Office Assistant"
* #4144.029 "Office Boy" "Office Boy"
* #4144.030 "Office Clerk" "Office Clerk"
* #4144.031 "Office Junior" "Office Junior"
* #4144.032 "Office Junior Clerk" "Office Junior Clerk"
* #4144.033 "Office Machine Operator" "Office Machine Operator"
* #4144.034 "Office Machinist" "Office Machinist"
* #4144.035 "Office Worker" "Office Worker"
* #4144.036 "Pay Clerk" "Pay Clerk"
* #4144.037 "Pay Officer" "Pay Officer"
* #4144.038 "Paymaster" "Paymaster"
* #4144.039 "Payroll Clerk" "Payroll Clerk"
* #4144.040 "Payroll Officer" "Payroll Officer"
* #4144.041 "Personal Records Clerk" "Personal Records Clerk"
* #4144.042 "Photocopier Operator" "Photocopier Operator"
* #4144.043 "Photocopying Machine Operator" "Photocopying Machine Operator"
* #4144.044 "Photographic Machine Operator" "Photographic Machine Operator"
* #4144.045 "Plan Printer" "Plan Printer"
* #4144.046 "Quality Controller Of General Clerks" "Quality Controller Of General Clerks"
* #4144.047 "Quality Controller Of Office Machine Operator" "Quality Controller Of Office Machine Operator"
* #4144.048 "Railway Clerk" "Railway Clerk"
* #4144.049 "Recreation Clerk Officer" "Recreation Clerk Officer"
* #4144.050 "Research Assistant" "Research Assistant"
* #4144.051 "Research Worker" "Research Worker"
* #4144.052 "Researcher" "Researcher"
* #4144.053 "Salaries Clerk" "Salaries Clerk"
* #4144.054 "Salaries Officer" "Salaries Officer"
* #4144.055 "Staff Clerk" "Staff Clerk"
* #4144.056 "Telex Operator" "Telex Operator"
* #4144.057 "Timekeeper Employees" "Timekeeper Employees"
* #4144.058 "Veterinary Clerk" "Veterinary Clerk"
* #4144.059 "Wages Clerk" "Wages Clerk"
* #4144.060 "Xerox Operator" "Xerox Operator"
* #4211.001 "Betting Operator" "Betting Operator"
* #4211.002 "Booking Clerk" "Booking Clerk"
* #4211.003 "Car Park Attendant" "Car Park Attendant"
* #4211.004 "Caretaker Rubbish Tip" "Caretaker Rubbish Tip"
* #4211.005 "Cash Clerk" "Cash Clerk"
* #4211.006 "Cash Register Operator" "Cash Register Operator"
* #4211.007 "Cashier" "Cashier"
* #4211.008 "Cashier Clerk" "Cashier Clerk"
* #4211.009 "Check Out Operator" "Check Out Operator"
* #4211.010 "Checkout Operator" "Checkout Operator"
* #4211.011 "Checkout Operators Supervisor" "Checkout Operators Supervisor"
* #4211.012 "Collector Machines and Meters" "Collector Machines and Meters"
* #4211.013 "Gatekeeper" "Gatekeeper"
* #4211.014 "General Cashier" "General Cashier"
* #4211.015 "Grocery Checkout Operator" "Grocery Checkout Operator"
* #4211.016 "Kaiwhakarite Utu" "Kaiwhakarite Utu"
* #4211.017 "Lottery Seller Agent" "Lottery Seller Agent"
* #4211.018 "Lotto Seller Agent" "Lotto Seller Agent"
* #4211.019 "Parking Lot Attendant" "Parking Lot Attendant"
* #4211.020 "Parking Officer Car Park Building" "Parking Officer Car Park Building"
* #4211.021 "Pool Attendant" "Pool Attendant"
* #4211.022 "Pool Supervisor" "Pool Supervisor"
* #4211.023 "Quality Controller Of Cashiers" "Quality Controller Of Cashiers"
* #4211.024 "Quality Controller Of Ticket Seller Cashiers" "Quality Controller Of Ticket Seller Cashiers"
* #4211.025 "Skating Rink Attendant" "Skating Rink Attendant"
* #4211.026 "Swimming Pool Attendant" "Swimming Pool Attendant"
* #4211.027 "TAB Cashier Clerk" "TAB Cashier Clerk"
* #4211.028 "TAB Clerk" "TAB Clerk"
* #4211.029 "TAB Operator" "TAB Operator"
* #4211.030 "TAB Worker" "TAB Worker"
* #4211.031 "Tele-Betting Operator" "Tele-Betting Operator"
* #4211.032 "Ticket-Seller Cashier" "Ticket-Seller Cashier"
* #4211.033 "Till Operator" "Till Operator"
* #4211.034 "Toll Gate Keeper" "Toll Gate Keeper"
* #4211.035 "Totalisator Agency Board Worker" "Totalisator Agency Board Worker"
* #4211.036 "Tunnel Officer Tolls" "Tunnel Officer Tolls"
* #4212.001 "Bank Clerk" "Bank Clerk"
* #4212.002 "Bank Customer Services Clerk" "Bank Customer Services Clerk"
* #4212.003 "Bank Customer Services Officer" "Bank Customer Services Officer"
* #4212.004 "Bank Officer" "Bank Officer"
* #4212.005 "Bank Teller" "Bank Teller"
* #4212.006 "Credit Support Officer" "Credit Support Officer"
* #4212.007 "Currency Exchange Officer" "Currency Exchange Officer"
* #4212.008 "Foreign Exchange Officer" "Foreign Exchange Officer"
* #4212.009 "Foreign Exchange Teller" "Foreign Exchange Teller"
* #4212.010 "Kaimahi Peke" "Kaimahi Peke"
* #4212.011 "Kaitaatai Moni" "Kaitaatai Moni"
* #4212.012 "Kaitatai Moni" "Kaitatai Moni"
* #4212.013 "Personal Banker" "Personal Banker"
* #4212.014 "Personal Teller" "Personal Teller"
* #4212.015 "Quality Controller Of Bank Officers" "Quality Controller Of Bank Officers"
* #4213.001 "Casino Supervisor" "Casino Supervisor"
* #4213.002 "Croupier" "Croupier"
* #4213.003 "Gaming Dealer" "Gaming Dealer"
* #4213.004 "Gaming Table Pit Boss" "Gaming Table Pit Boss"
* #4213.005 "Gaming Table Supervisor" "Gaming Table Supervisor"
* #4215.001 "Bailiff" "Bailiff"
* #4215.002 "Bill and Debt Collector" "Bill and Debt Collector"
* #4215.003 "Bill Collector" "Bill Collector"
* #4215.004 "Debt Collector" "Debt Collector"
* #4215.005 "Rate Rent Collector" "Rate Rent Collector"
* #4215.006 "Repossesion Agent" "Repossesion Agent"
* #4215.007 "Repossessor" "Repossessor"
* #4221.001 "Aapiha Tuku Moohiotanga" "Aapiha Tuku Moohiotanga"
* #4221.002 "Aapiha Tuku Whakaaturanga" "Aapiha Tuku Whakaaturanga"
* #4221.003 "Apiha Tuku Mohiotanga" "Apiha Tuku Mohiotanga"
* #4221.004 "Apiha Tuku Whakaaturanga" "Apiha Tuku Whakaaturanga"
* #4221.005 "Dental Receptionist" "Dental Receptionist"
* #4221.006 "Dentists Receptionist" "Dentists Receptionist"
* #4221.007 "Doctors Receptionist" "Doctors Receptionist"
* #4221.008 "Hospital Admissions Clerk" "Hospital Admissions Clerk"
* #4221.009 "Hospital Hostess" "Hospital Hostess"
* #4221.010 "Hospital Receptionist" "Hospital Receptionist"
* #4221.011 "Hotel Clerk" "Hotel Clerk"
* #4221.012 "Hotel or Motel Receptionist" "Hotel or Motel Receptionist"
* #4221.013 "Hotel Receptionist" "Hotel Receptionist"
* #4221.014 "Information Clerk and Other Receptionist" "Information Clerk and Other Receptionist"
* #4221.015 "Information Officer" "Information Officer"
* #4221.016 "Inland Revenue Customer Services Officer" "Inland Revenue Customer Services Officer"
* #4221.017 "IRD Customer Services Officer" "IRD Customer Services Officer"
* #4221.018 "Kaiwhakatau Manuhiri" "Kaiwhakatau Manuhiri"
* #4221.019 "Medical Receptionist" "Medical Receptionist"
* #4221.020 "Motel Receptionist" "Motel Receptionist"
* #4221.021 "Motor Lodge Clerk" "Motor Lodge Clerk"
* #4221.022 "Patient Information Officer" "Patient Information Officer"
* #4221.023 "Patient Receptionist" "Patient Receptionist"
* #4221.024 "Receptionist" "Receptionist"
* #4221.025 "Tourist Information Officer" "Tourist Information Officer"
* #4221.026 "Travel Reception Clerk" "Travel Reception Clerk"
* #4222.001 "Answering Service Operator" "Answering Service Operator"
* #4222.002 "Call Centre Manager" "Call Centre Manager"
* #4222.003 "Call Centre Operator" "Call Centre Operator"
* #4222.004 "PABX Operator" "PABX Operator"
* #4222.005 "Public Exchange Operator Telephone" "Public Exchange Operator Telephone"
* #4222.006 "Telephone Attendant" "Telephone Attendant"
* #4222.007 "Telephone Operator" "Telephone Operator"
* #4222.008 "Telephone Receptionist" "Telephone Receptionist"
* #4222.009 "Telephone Services Officer" "Telephone Services Officer"
* #4222.010 "Telephone Switchboard Operator" "Telephone Switchboard Operator"
* #4222.011 "Telephone Switchboard Supervisor" "Telephone Switchboard Supervisor"
* #4222.012 "Telephonist" "Telephonist"
* #4222.013 "Telephonist Answering Service" "Telephonist Answering Service"
* #4222.014 "Tolls Operator" "Tolls Operator"
* #4222.015 "Tolls Supervisor" "Tolls Supervisor"
* #5111.001 "Air Hostess" "Air Hostess"
* #5111.002 "Airline Steward" "Airline Steward"
* #5111.003 "Bus Hostess" "Bus Hostess"
* #5111.004 "Cabin Crew" "Cabin Crew"
* #5111.005 "Cabin Flight Steward" "Cabin Flight Steward"
* #5111.006 "Cabin Flight Stewardess" "Cabin Flight Stewardess"
* #5111.007 "Flight Attendant" "Flight Attendant"
* #5111.008 "Flight Purser" "Flight Purser"
* #5111.009 "Flight Steward" "Flight Steward"
* #5111.010 "Ground Steward Airline" "Ground Steward Airline"
* #5111.011 "Ground Stewardess Airline" "Ground Stewardess Airline"
* #5111.012 "Launch Hostess" "Launch Hostess"
* #5111.013 "Marine Steward" "Marine Steward"
* #5111.014 "Rail Steward" "Rail Steward"
* #5111.015 "Rail Stewardess" "Rail Stewardess"
* #5111.016 "Ship Cabin Steward" "Ship Cabin Steward"
* #5111.017 "Ships Chief Steward" "Ships Chief Steward"
* #5111.018 "Ships Purser" "Ships Purser"
* #5111.019 "Ships Steward" "Ships Steward"
* #5111.020 "Ships Stewardess" "Ships Stewardess"
* #5111.021 "Train Hostess" "Train Hostess"
* #5111.022 "Travel Attendant" "Travel Attendant"
* #5111.023 "Travel Attendant Airline" "Travel Attendant Airline"
* #5111.024 "Travel Attendant Train" "Travel Attendant Train"
* #5112.001 "Adventure Safari Guide" "Adventure Safari Guide"
* #5112.002 "Adventure Tourism Operator" "Adventure Tourism Operator"
* #5112.003 "Alpine Fishing Hunting Guide" "Alpine Fishing Hunting Guide"
* #5112.004 "Animal Drawn Vehicle Operator" "Animal Drawn Vehicle Operator"
* #5112.005 "Art Gallery Attendant" "Art Gallery Attendant"
* #5112.006 "Art Gallery Guide" "Art Gallery Guide"
* #5112.007 "Dive Master" "Dive Master"
* #5112.008 "Horse Trekking Guide" "Horse Trekking Guide"
* #5112.009 "Mountain Guide" "Mountain Guide"
* #5112.010 "Museum Attendant" "Museum Attendant"
* #5112.011 "Museum Guide" "Museum Guide"
* #5112.012 "Outdoor Recreation Guide" "Outdoor Recreation Guide"
* #5112.013 "Recreation Guide" "Recreation Guide"
* #5112.014 "River Rafting Guide" "River Rafting Guide"
* #5112.015 "Scenic Tour Guide" "Scenic Tour Guide"
* #5112.016 "Sightseeing Guide" "Sightseeing Guide"
* #5112.017 "Tour and Travel Guide" "Tour and Travel Guide"
* #5112.018 "Tour Controller" "Tour Controller"
* #5112.019 "Tour Guide" "Tour Guide"
* #5112.020 "Travel Guide" "Travel Guide"
* #5121.001 "Boarding School Hostel Matron" "Boarding School Hostel Matron"
* #5121.002 "Butler" "Butler"
* #5121.003 "Camp Hostel Matron" "Camp Hostel Matron"
* #5121.004 "Chambermaid" "Chambermaid"
* #5121.005 "Domestic House Staff" "Domestic House Staff"
* #5121.006 "Domestic Servant" "Domestic Servant"
* #5121.007 "Dormitory Supervisor" "Dormitory Supervisor"
* #5121.008 "Executive Housekeeper" "Executive Housekeeper"
* #5121.009 "Hospital Housekeeper" "Hospital Housekeeper"
* #5121.010 "Hostel Supervisor" "Hostel Supervisor"
* #5121.011 "Hotel Chief Steward" "Hotel Chief Steward"
* #5121.012 "Hotel Housekeeper" "Hotel Housekeeper"
* #5121.013 "House Staff Accommodation Services" "House Staff Accommodation Services"
* #5121.014 "House Steward Non Private" "House Steward Non Private"
* #5121.015 "House Steward Private" "House Steward Private"
* #5121.016 "House Stewardess Non Private" "House Stewardess Non Private"
* #5121.017 "House Stewardess Private" "House Stewardess Private"
* #5121.018 "Household Help" "Household Help"
* #5121.019 "Housekeeper (Not Private)" "Housekeeper (Not Private)"
* #5121.020 "Housekeeper (Private Service)" "Housekeeper (Private Service)"
* #5121.021 "Housekeeper Supervisor Hotels Or Similar Institution" "Housekeeper Supervisor Hotels Or Similar Institution"
* #5121.022 "Housekeeper Supervisor not Private" "Housekeeper Supervisor not Private"
* #5121.023 "Housekeeper Supervisor Private" "Housekeeper Supervisor Private"
* #5121.024 "Housekeeper Supervisor Residential Institution" "Housekeeper Supervisor Residential Institution"
* #5121.025 "Housekeeping Matron Residential Institution" "Housekeeping Matron Residential Institution"
* #5121.026 "Housemaid" "Housemaid"
* #5121.027 "Linen Keeper Hospital" "Linen Keeper Hospital"
* #5121.028 "Maid Private Service" "Maid Private Service"
* #5121.029 "Nursing Home Housekeeper" "Nursing Home Housekeeper"
* #5121.030 "Personal Maid Valet" "Personal Maid Valet"
* #5121.031 "Prison Matron" "Prison Matron"
* #5121.032 "Valet" "Valet"
* #5122.001 "Cafeteria Cook" "Cafeteria Cook"
* #5122.002 "Chef" "Chef"
* #5122.003 "Cook" "Cook"
* #5122.004 "Cook Camp Construction Farm Shearing" "Cook Camp Construction Farm Shearing"
* #5122.005 "Cook Hotel" "Cook Hotel"
* #5122.006 "Cook Restaurant" "Cook Restaurant"
* #5122.007 "Cook Tavern" "Cook Tavern"
* #5122.008 "Fast Food Cook" "Fast Food Cook"
* #5122.009 "Food Supervisor Hospital Cook" "Food Supervisor Hospital Cook"
* #5122.010 "Head Chef" "Head Chef"
* #5122.011 "Kuki" "Kuki"
* #5122.012 "Rangatira Mahi Kai" "Rangatira Mahi Kai"
* #5122.013 "Ships Cook" "Ships Cook"
* #5122.014 "Short Order Cook" "Short Order Cook"
* #5122.015 "Sous Chef" "Sous Chef"
* #5122.016 "Takeaway Cook" "Takeaway Cook"
* #5122.017 "Trainee Cook" "Trainee Cook"
* #5123.001 "Bar Attendant" "Bar Attendant"
* #5123.002 "Bar Hostess" "Bar Hostess"
* #5123.003 "Bar Maid" "Bar Maid"
* #5123.004 "Bar Person" "Bar Person"
* #5123.005 "Bar Steward" "Bar Steward"
* #5123.006 "Bar Tender" "Bar Tender"
* #5123.007 "Barmaid" "Barmaid"
* #5123.008 "Barman" "Barman"
* #5123.009 "Barperson" "Barperson"
* #5123.010 "Bartender" "Bartender"
* #5123.011 "Cafe Assistant" "Cafe Assistant"
* #5123.012 "Caf� Waiter" "Caf� Waiter"
* #5123.013 "Caf� Waitress" "Caf� Waitress"
* #5123.014 "Cafe Worker" "Cafe Worker"
* #5123.015 "Cafeteria Assistant" "Cafeteria Assistant"
* #5123.016 "Cafeteria Worker" "Cafeteria Worker"
* #5123.017 "Canteen Assistant" "Canteen Assistant"
* #5123.018 "Canteen Worker" "Canteen Worker"
* #5123.019 "Catering Assistant" "Catering Assistant"
* #5123.020 "Catering Counter Assistant" "Catering Counter Assistant"
* #5123.021 "Catering Counter Supervisor" "Catering Counter Supervisor"
* #5123.022 "Cellar Person" "Cellar Person"
* #5123.023 "Cellarman" "Cellarman"
* #5123.024 "Cinema Attendant" "Cinema Attendant"
* #5123.025 "Cinema Usher" "Cinema Usher"
* #5123.026 "Cloakroom Attendant" "Cloakroom Attendant"
* #5123.027 "Club Steward" "Club Steward"
* #5123.028 "Club Stewardess" "Club Stewardess"
* #5123.029 "Coffee Bar Assistant" "Coffee Bar Assistant"
* #5123.030 "Coffee Lounge Assistant" "Coffee Lounge Assistant"
* #5123.031 "Coffee Shop Assistant" "Coffee Shop Assistant"
* #5123.032 "Counterhand" "Counterhand"
* #5123.033 "Court Bailiff" "Court Bailiff"
* #5123.034 "Crew Member McDonalds" "Crew Member McDonalds"
* #5123.035 "Crier Custodian Law Courts" "Crier Custodian Law Courts"
* #5123.036 "Dining Room Supervisor" "Dining Room Supervisor"
* #5123.037 "Dishwasher Restaurant" "Dishwasher Restaurant"
* #5123.038 "Doorkeeper" "Doorkeeper"
* #5123.039 "Doorman" "Doorman"
* #5123.040 "Fast Food Assistant" "Fast Food Assistant"
* #5123.041 "Fast Food Server" "Fast Food Server"
* #5123.042 "Fish and Chip Shop Worker" "Fish and Chip Shop Worker"
* #5123.043 "Food Counter Assistant" "Food Counter Assistant"
* #5123.044 "Head Bartender" "Head Bartender"
* #5123.045 "Head Waiter" "Head Waiter"
* #5123.046 "Head Waitress" "Head Waitress"
* #5123.047 "Kaiawhina Mahi Kai Tere te Maoa" "Kaiawhina Mahi Kai Tere te Maoa"
* #5123.048 "Kaiawhina Mahi Toha Kai" "Kaiawhina Mahi Toha Kai"
* #5123.049 "Kaihokohoko Inu" "Kaihokohoko Inu"
* #5123.050 "Kaihokohoko Waipiro" "Kaihokohoko Waipiro"
* #5123.051 "Kaimahi Kawhe" "Kaimahi Kawhe"
* #5123.052 "Kaimahi Paparaakauta" "Kaimahi Paparaakauta"
* #5123.053 "Kaimahi Paparakauta" "Kaimahi Paparakauta"
* #5123.054 "Kaimahi Waahi Kai" "Kaimahi Waahi Kai"
* #5123.055 "Kaimahi Wahi Kai" "Kaimahi Wahi Kai"
* #5123.056 "Kaimahi Whareumu" "Kaimahi Whareumu"
* #5123.057 "Kaitohatoha Kai Inu" "Kaitohatoha Kai Inu"
* #5123.058 "Kaitohu Whakataka Kai" "Kaitohu Whakataka Kai"
* #5123.059 "Kitchen Assistant" "Kitchen Assistant"
* #5123.060 "Kitchen Dishwasher" "Kitchen Dishwasher"
* #5123.061 "Kitchen Hand" "Kitchen Hand"
* #5123.062 "Kitchenhand" "Kitchenhand"
* #5123.063 "Lavatory Attendant" "Lavatory Attendant"
* #5123.064 "Lounge Assistant" "Lounge Assistant"
* #5123.065 "Lunch Bar Assistant" "Lunch Bar Assistant"
* #5123.066 "Lunch Bar Worker" "Lunch Bar Worker"
* #5123.067 "Lunchbar Assistant" "Lunchbar Assistant"
* #5123.068 "Maitre d" "Maitre d"
* #5123.069 "Maitre dHotel" "Maitre dHotel"
* #5123.070 "Maitre dRestaurant" "Maitre dRestaurant"
* #5123.071 "Maitred" "Maitred"
* #5123.072 "Night Club Hostess" "Night Club Hostess"
* #5123.073 "Parcels Attendant" "Parcels Attendant"
* #5123.074 "Potato Chipper" "Potato Chipper"
* #5123.075 "Restaurant Hostess" "Restaurant Hostess"
* #5123.076 "Restaurant Worker" "Restaurant Worker"
* #5123.077 "Restroom Attendant" "Restroom Attendant"
* #5123.078 "Salad Worker" "Salad Worker"
* #5123.079 "Sandwich Hand" "Sandwich Hand"
* #5123.080 "Snack Bar Attendant" "Snack Bar Attendant"
* #5123.081 "Sommelier" "Sommelier"
* #5123.082 "Supervisor Cafeteria Coffee Bar" "Supervisor Cafeteria Coffee Bar"
* #5123.083 "Take Away Food Assistant" "Take Away Food Assistant"
* #5123.084 "Take Away Lunch Bar Assistant" "Take Away Lunch Bar Assistant"
* #5123.085 "Take Away Lunchbar Assistant" "Take Away Lunchbar Assistant"
* #5123.086 "Takeaway Lunch Bar Assistant" "Takeaway Lunch Bar Assistant"
* #5123.087 "Takeaway Lunchbar Assistant" "Takeaway Lunchbar Assistant"
* #5123.088 "Takeaways Assistant" "Takeaways Assistant"
* #5123.089 "Tangata Hokohoko Inu" "Tangata Hokohoko Inu"
* #5123.090 "Tangata Hokohoko Waipiro" "Tangata Hokohoko Waipiro"
* #5123.091 "Tangata Tohatoha Kai Inu" "Tangata Tohatoha Kai Inu"
* #5123.092 "Tea Attendant" "Tea Attendant"
* #5123.093 "Tea Lady" "Tea Lady"
* #5123.094 "Tea Person" "Tea Person"
* #5123.095 "Teaperson" "Teaperson"
* #5123.096 "Theatre Cloakroom Attendant" "Theatre Cloakroom Attendant"
* #5123.097 "Theatre Usher" "Theatre Usher"
* #5123.098 "Ticket Taker" "Ticket Taker"
* #5123.099 "Toilet Attendant" "Toilet Attendant"
* #5123.100 "Usher and Cloakroom Attendant" "Usher and Cloakroom Attendant"
* #5123.101 "Usher Orderly Law Courts" "Usher Orderly Law Courts"
* #5123.102 "Wait Person" "Wait Person"
* #5123.103 "Waiter" "Waiter"
* #5123.104 "Waitress" "Waitress"
* #5123.105 "Wine Steward" "Wine Steward"
* #5123.106 "Wine Stewardess" "Wine Stewardess"
* #5131.001 "Ambulance Officer" "Ambulance Officer"
* #5131.002 "Ambulance Paramedic" "Ambulance Paramedic"
* #5131.003 "Caregiver" "Caregiver"
* #5131.004 "Chairside Assistant" "Chairside Assistant"
* #5131.005 "Child Care Giver" "Child Care Giver"
* #5131.006 "Childcare Giver" "Childcare Giver"
* #5131.007 "Dental Assistant Chairside" "Dental Assistant Chairside"
* #5131.008 "Dental Surgery Assistant" "Dental Surgery Assistant"
* #5131.009 "Dentists Nurse" "Dentists Nurse"
* #5131.010 "Elderly Care Giver" "Elderly Care Giver"
* #5131.011 "Elderly Home Carer" "Elderly Home Carer"
* #5131.012 "First Aid Instructor" "First Aid Instructor"
* #5131.013 "Geriatric Care Giver" "Geriatric Care Giver"
* #5131.014 "Geriatric Home Carer" "Geriatric Home Carer"
* #5131.015 "Health Assistant" "Health Assistant"
* #5131.016 "Home Aide Assistant" "Home Aide Assistant"
* #5131.017 "Home Aide Nursing" "Home Aide Nursing"
* #5131.018 "Home Aide or Health Assistant" "Home Aide or Health Assistant"
* #5131.019 "Home Aide Registered" "Home Aide Registered"
* #5131.020 "Home Help" "Home Help"
* #5131.021 "Hospital Aid" "Hospital Aid"
* #5131.022 "Hospital Aide" "Hospital Aide"
* #5131.023 "Hospital Clothing Assistant" "Hospital Clothing Assistant"
* #5131.024 "Hospital Domestic" "Hospital Domestic"
* #5131.025 "Hospital Orderly" "Hospital Orderly"
* #5131.026 "Hospital Porter" "Hospital Porter"
* #5131.027 "Hospital Ward Assistant" "Hospital Ward Assistant"
* #5131.028 "Kaiawhina Mahi Naahi" "Kaiawhina Mahi Naahi"
* #5131.029 "Kaiawhina Mahi Nahi" "Kaiawhina Mahi Nahi"
* #5131.030 "Kaiawhina Mahi Neehi" "Kaiawhina Mahi Neehi"
* #5131.031 "Kaiawhina Mahi Nehi" "Kaiawhina Mahi Nehi"
* #5131.032 "Kaiawhina Mahi Tapuhi" "Kaiawhina Mahi Tapuhi"
* #5131.033 "Kaiawhina Neehi" "Kaiawhina Neehi"
* #5131.034 "Kaiawhina Nehi" "Kaiawhina Nehi"
* #5131.035 "Kaiawhina Tapuhi" "Kaiawhina Tapuhi"
* #5131.036 "Kaiawhina Turoro" "Kaiawhina Turoro"
* #5131.037 "Kaiawhina Tuuroro" "Kaiawhina Tuuroro"
* #5131.038 "Naahi Awhina" "Naahi Awhina"
* #5131.039 "Nahi Awhina" "Nahi Awhina"
* #5131.040 "Neehi Awhina" "Neehi Awhina"
* #5131.041 "Nehi Awhina" "Nehi Awhina"
* #5131.042 "Nurse Aide" "Nurse Aide"
* #5131.043 "Nurse Assistant" "Nurse Assistant"
* #5131.044 "Paramedic" "Paramedic"
* #5131.045 "Physiotherapists Aide" "Physiotherapists Aide"
* #5131.046 "Psychiatric Aide" "Psychiatric Aide"
* #5131.047 "Psychopaedic Assistant" "Psychopaedic Assistant"
* #5131.048 "Psychopeadic Assistant" "Psychopeadic Assistant"
* #5131.049 "Quality Controller Of Hospital Orderlies" "Quality Controller Of Hospital Orderlies"
* #5131.050 "Residential Care Giver" "Residential Care Giver"
* #5131.051 "Rest Home Worker" "Rest Home Worker"
* #5131.052 "Supervisor St Johns Ambulance" "Supervisor St Johns Ambulance"
* #5131.053 "Tapuhi Awhina" "Tapuhi Awhina"
* #5131.054 "Unregistered Geriatric Nurse" "Unregistered Geriatric Nurse"
* #5131.055 "Unregistered Nurse Aide" "Unregistered Nurse Aide"
* #5141.001 "Aesthetician" "Aesthetician"
* #5141.002 "Barber" "Barber"
* #5141.003 "Beautician" "Beautician"
* #5141.004 "Beauty Consultant" "Beauty Consultant"
* #5141.005 "Beauty Therapist" "Beauty Therapist"
* #5141.006 "Colour Therapist" "Colour Therapist"
* #5141.007 "Cosmetic Consultant" "Cosmetic Consultant"
* #5141.008 "Cosmetician" "Cosmetician"
* #5141.009 "Cosmeticist" "Cosmeticist"
* #5141.010 "Electrolysis Assistant" "Electrolysis Assistant"
* #5141.011 "Electrolysist" "Electrolysist"
* #5141.012 "Epilationist" "Epilationist"
* #5141.013 "Hair Dresser Ladies" "Hair Dresser Ladies"
* #5141.014 "Hair Dresser Mens" "Hair Dresser Mens"
* #5141.015 "Hair Stylist" "Hair Stylist"
* #5141.016 "Hair Stylist Ladies" "Hair Stylist Ladies"
* #5141.017 "Hair Stylist Mens" "Hair Stylist Mens"
* #5141.018 "Hairdresser" "Hairdresser"
* #5141.019 "Hairdressers Assistant" "Hairdressers Assistant"
* #5141.020 "Hairstylist Ladies" "Hairstylist Ladies"
* #5141.021 "Hairstylist Mens" "Hairstylist Mens"
* #5141.022 "Holistic Massage Therapy Masseur" "Holistic Massage Therapy Masseur"
* #5141.023 "Holistic Massage Therapy Masseuse" "Holistic Massage Therapy Masseuse"
* #5141.024 "Kaihakari Makawe" "Kaihakari Makawe"
* #5141.025 "Kairaakai Makawe" "Kairaakai Makawe"
* #5141.026 "Kairakai Makawe" "Kairakai Makawe"
* #5141.027 "Kaitapahi Makawe" "Kaitapahi Makawe"
* #5141.028 "Kaiwhakapaipai Makawe" "Kaiwhakapaipai Makawe"
* #5141.029 "Ladies Hairdresser" "Ladies Hairdresser"
* #5141.030 "Make Up Artist Stage Studio" "Make Up Artist Stage Studio"
* #5141.031 "Make Up Consultant" "Make Up Consultant"
* #5141.032 "Makeup Artist" "Makeup Artist"
* #5141.033 "Manicurist" "Manicurist"
* #5141.034 "Massage Practitioner" "Massage Practitioner"
* #5141.035 "Massage Therapist" "Massage Therapist"
* #5141.036 "Masseur" "Masseur"
* #5141.037 "Masseuse" "Masseuse"
* #5141.038 "Mens Hairdresser" "Mens Hairdresser"
* #5141.039 "Nail Technician" "Nail Technician"
* #5141.040 "Physical Therapy Assistant" "Physical Therapy Assistant"
* #5141.041 "Sauna Bath Attendant" "Sauna Bath Attendant"
* #5141.042 "Trichologist" "Trichologist"
* #5141.043 "Unisex Hairdresser" "Unisex Hairdresser"
* #5141.044 "Unisex Stylist" "Unisex Stylist"
* #5141.045 "Weight Loss Consultant" "Weight Loss Consultant"
* #5141.046 "Wig Maker Supplier" "Wig Maker Supplier"
* #5142.001 "Babysitter" "Babysitter"
* #5142.002 "Car Seat Coordinator" "Car Seat Coordinator"
* #5142.003 "Child Assistant" "Child Assistant"
* #5142.004 "Child Car Seat Coordinator" "Child Car Seat Coordinator"
* #5142.005 "Child Care Assistant" "Child Care Assistant"
* #5142.006 "Child Care Worker" "Child Care Worker"
* #5142.007 "Child Minder" "Child Minder"
* #5142.008 "Childcare Assistant" "Childcare Assistant"
* #5142.009 "Childcare Worker" "Childcare Worker"
* #5142.010 "Creche Worker" "Creche Worker"
* #5142.011 "Kaiawhina Kohanga Reo" "Kaiawhina Kohanga Reo"
* #5142.012 "Kaiawhina Koohanga Reo" "Kaiawhina Koohanga Reo"
* #5142.013 "Mothers Help" "Mothers Help"
* #5142.014 "Nanny" "Nanny"
* #5142.015 "Nursemaid" "Nursemaid"
* #5142.016 "Nursery Attendant" "Nursery Attendant"
* #5143.001 "Crematorium Worker" "Crematorium Worker"
* #5143.002 "Embalmer" "Embalmer"
* #5143.003 "Funeral Attendant" "Funeral Attendant"
* #5143.004 "Funeral Director" "Funeral Director"
* #5143.005 "Mortician" "Mortician"
* #5143.006 "Undertaker" "Undertaker"
* #5143.007 "Undertakers Assistant" "Undertakers Assistant"
* #5151.001 "Aircraft Accident Firefighter" "Aircraft Accident Firefighter"
* #5151.002 "Aircraft Crash Firefighter" "Aircraft Crash Firefighter"
* #5151.003 "Airport Firefighter" "Airport Firefighter"
* #5151.004 "Crash Fireman Officer Aircraft" "Crash Fireman Officer Aircraft"
* #5151.005 "Fire Brigade Officer" "Fire Brigade Officer"
* #5151.006 "Fire Equipment Officer Forest" "Fire Equipment Officer Forest"
* #5151.007 "Fire Fighter" "Fire Fighter"
* #5151.008 "Fire Fighter Forest" "Fire Fighter Forest"
* #5151.009 "Fire Prevention Officer" "Fire Prevention Officer"
* #5151.010 "Fire Protection Officer Forest" "Fire Protection Officer Forest"
* #5151.011 "Firefighter" "Firefighter"
* #5151.012 "Firefighter Forest" "Firefighter Forest"
* #5151.013 "Fireman General" "Fireman General"
* #5151.014 "Rescue Fire Fighter" "Rescue Fire Fighter"
* #5151.015 "Rural Fire Fighter" "Rural Fire Fighter"
* #5152.001 "Community Constable" "Community Constable"
* #5152.002 "Constable" "Constable"
* #5152.003 "Detective" "Detective"
* #5152.004 "Ministry Of Transport Traffic Officer" "Ministry Of Transport Traffic Officer"
* #5152.005 "Parking Meter Reader" "Parking Meter Reader"
* #5152.006 "Parking Warden" "Parking Warden"
* #5152.007 "Personal Protection Officer" "Personal Protection Officer"
* #5152.008 "Police Commissioned Officer" "Police Commissioned Officer"
* #5152.009 "Police Constable" "Police Constable"
* #5152.010 "Police Detective" "Police Detective"
* #5152.011 "Police Dog Handler" "Police Dog Handler"
* #5152.012 "Police Officer" "Police Officer"
* #5152.013 "Police Recruit" "Police Recruit"
* #5152.014 "Police Sergeant" "Police Sergeant"
* #5152.015 "Police Superintendent" "Police Superintendent"
* #5152.016 "Police Trainee" "Police Trainee"
* #5152.017 "Police Watchouse Officer" "Police Watchouse Officer"
* #5152.018 "Police Woman" "Police Woman"
* #5152.019 "Policeman" "Policeman"
* #5152.020 "Policewoman" "Policewoman"
* #5152.021 "Road Safety Officer" "Road Safety Officer"
* #5152.022 "Traffic Inspector Road" "Traffic Inspector Road"
* #5152.023 "Traffic Officer" "Traffic Officer"
* #5152.024 "Traffic Warden" "Traffic Warden"
* #5152.025 "Tunnel Officer Traffic" "Tunnel Officer Traffic"
* #5153.001 "Aapiha Whakahaere Herehere" "Aapiha Whakahaere Herehere"
* #5153.002 "Aapiha Whakatika Whakaora Mauhere" "Aapiha Whakatika Whakaora Mauhere"
* #5153.003 "Apiha Whakahaere Herehere" "Apiha Whakahaere Herehere"
* #5153.004 "Apiha Whakatika Whakaora Mauhere" "Apiha Whakatika Whakaora Mauhere"
* #5153.005 "Correction Facility Worker" "Correction Facility Worker"
* #5153.006 "Pouawhi" "Pouawhi"
* #5153.007 "Prison Guard" "Prison Guard"
* #5153.008 "Prison Officer" "Prison Officer"
* #5153.009 "Prison Warden" "Prison Warden"
* #5153.010 "Warden (Prison)" "Warden (Prison)"
* #5153.011 "Warder" "Warder"
* #5154.001 "Aapiha Marumaru" "Aapiha Marumaru"
* #5154.002 "Aapiha Mataara" "Aapiha Mataara"
* #5154.003 "Apiha Marumaru" "Apiha Marumaru"
* #5154.004 "Apiha Mataara" "Apiha Mataara"
* #5154.005 "Armoured Car Driver Security" "Armoured Car Driver Security"
* #5154.006 "Aviation Security Officer" "Aviation Security Officer"
* #5154.007 "Bank Escort" "Bank Escort"
* #5154.008 "Bouncer" "Bouncer"
* #5154.009 "Commissionaire Security" "Commissionaire Security"
* #5154.010 "Egress Officer" "Egress Officer"
* #5154.011 "Forest Guard" "Forest Guard"
* #5154.012 "Museum Guard" "Museum Guard"
* #5154.013 "Night Watchman" "Night Watchman"
* #5154.014 "Park Warden" "Park Warden"
* #5154.015 "Patrolman" "Patrolman"
* #5154.016 "Port Security Officer" "Port Security Officer"
* #5154.017 "Private Detective" "Private Detective"
* #5154.018 "Private Enquiry Agent" "Private Enquiry Agent"
* #5154.019 "Private Guard" "Private Guard"
* #5154.020 "Private Investigator" "Private Investigator"
* #5154.021 "Security Advisor" "Security Advisor"
* #5154.022 "Security Agent" "Security Agent"
* #5154.023 "Security Consultant" "Security Consultant"
* #5154.024 "Security Courier" "Security Courier"
* #5154.025 "Security Guard" "Security Guard"
* #5154.026 "Security Officer" "Security Officer"
* #5154.027 "Shop Floor Walker" "Shop Floor Walker"
* #5154.028 "Store Detective" "Store Detective"
* #5154.029 "Taituara" "Taituara"
* #5154.030 "Taituaraa" "Taituaraa"
* #5154.031 "Tangata Mataara" "Tangata Mataara"
* #5155.001 "Air Force Navigator" "Air Force Navigator"
* #5155.002 "Airforce Pilot" "Airforce Pilot"
* #5155.003 "Airman" "Airman"
* #5155.004 "Airwoman" "Airwoman"
* #5155.005 "Armed Forces" "Armed Forces"
* #5155.006 "Army Armoured Vehicle Crew" "Army Armoured Vehicle Crew"
* #5155.007 "Army Officer" "Army Officer"
* #5155.008 "Artillery Signaller" "Artillery Signaller"
* #5155.009 "Hoia" "Hoia"
* #5155.010 "Military Policeman" "Military Policeman"
* #5155.011 "Naval Officer" "Naval Officer"
* #5155.012 "Naval Rater" "Naval Rater"
* #5155.013 "Naval Rating" "Naval Rating"
* #5155.014 "Navy Officer" "Navy Officer"
* #5155.015 "Navy Rating" "Navy Rating"
* #5155.016 "Navy Seaman" "Navy Seaman"
* #5155.017 "Petty Officer Navy" "Petty Officer Navy"
* #5155.018 "RNZAF Pilot" "RNZAF Pilot"
* #5155.019 "Sailor Navy" "Sailor Navy"
* #5155.020 "Soldier" "Soldier"
* #5211.001 "Agricultural Equipment Parts Salesperson" "Agricultural Equipment Parts Salesperson"
* #5211.002 "Amway Distributor" "Amway Distributor"
* #5211.003 "Amway Seller" "Amway Seller"
* #5211.004 "Auto Parts Salesman" "Auto Parts Salesman"
* #5211.005 "Automobile Saleperson" "Automobile Saleperson"
* #5211.006 "Automotive Parts Salesperson" "Automotive Parts Salesperson"
* #5211.007 "Bicycle Salesperson" "Bicycle Salesperson"
* #5211.008 "Book Shop Assistant" "Book Shop Assistant"
* #5211.009 "Bottle Store Assistant" "Bottle Store Assistant"
* #5211.010 "Bottle Store Attendant" "Bottle Store Attendant"
* #5211.011 "Boutique Sales Assistant" "Boutique Sales Assistant"
* #5211.012 "Car Parts Salesman" "Car Parts Salesman"
* #5211.013 "Car Parts Salesperson" "Car Parts Salesperson"
* #5211.014 "Car Salesman" "Car Salesman"
* #5211.015 "Car Salesperson" "Car Salesperson"
* #5211.016 "Checkout Assistant" "Checkout Assistant"
* #5211.017 "Clothing Sales Consultant" "Clothing Sales Consultant"
* #5211.018 "Corsetiere" "Corsetiere"
* #5211.019 "Cycle Salesperson" "Cycle Salesperson"
* #5211.020 "Deli Assistant" "Deli Assistant"
* #5211.021 "Delicatessan Assistant" "Delicatessan Assistant"
* #5211.022 "Demonstrator" "Demonstrator"
* #5211.023 "Fashion Sales Assistant" "Fashion Sales Assistant"
* #5211.024 "Florist" "Florist"
* #5211.025 "Florists Assistant" "Florists Assistant"
* #5211.026 "Food Demonstrator" "Food Demonstrator"
* #5211.027 "Forecourt Attendant" "Forecourt Attendant"
* #5211.028 "Garage Attendant" "Garage Attendant"
* #5211.029 "Gas Station Attendant" "Gas Station Attendant"
* #5211.030 "Grocery Assistant" "Grocery Assistant"
* #5211.031 "Grocery Worker" "Grocery Worker"
* #5211.032 "Hardware Sales Assistant" "Hardware Sales Assistant"
* #5211.033 "Home Appliance Salesperson" "Home Appliance Salesperson"
* #5211.034 "Installer Blinds Luxaflex Holland" "Installer Blinds Luxaflex Holland"
* #5211.035 "Kaiawhina Hokohoko" "Kaiawhina Hokohoko"
* #5211.036 "Kaiawhina Kaihokohoko" "Kaiawhina Kaihokohoko"
* #5211.037 "Kaiawhina Toa" "Kaiawhina Toa"
* #5211.038 "Kaiawhina Toa Hokohoko" "Kaiawhina Toa Hokohoko"
* #5211.039 "Kaihoko" "Kaihoko"
* #5211.040 "Kaihokohoko" "Kaihokohoko"
* #5211.041 "Kaimahi Whare Penehiini" "Kaimahi Whare Penehiini"
* #5211.042 "Kaimahi Whare Penehini" "Kaimahi Whare Penehini"
* #5211.043 "Mail Order Salesman" "Mail Order Salesman"
* #5211.044 "Merchandiser" "Merchandiser"
* #5211.045 "Motor Vehicle Salesman" "Motor Vehicle Salesman"
* #5211.046 "Motor Vehicle Salesperson" "Motor Vehicle Salesperson"
* #5211.047 "Night Filler" "Night Filler"
* #5211.048 "Orderman Wholesale or Retail" "Orderman Wholesale or Retail"
* #5211.049 "Party Plan Seller" "Party Plan Seller"
* #5211.050 "Petrol Attendant" "Petrol Attendant"
* #5211.051 "Petrol Pump Attendant" "Petrol Pump Attendant"
* #5211.052 "Petroleum Distribution Agent" "Petroleum Distribution Agent"
* #5211.053 "Petroleum Transfer Technician" "Petroleum Transfer Technician"
* #5211.054 "Pharmacy Salesperson" "Pharmacy Salesperson"
* #5211.055 "Promotion Salesperson" "Promotion Salesperson"
* #5211.056 "Retail Assistant" "Retail Assistant"
* #5211.057 "Retail Officer" "Retail Officer"
* #5211.058 "Retail Pharmacy Assistant" "Retail Pharmacy Assistant"
* #5211.059 "Retail Sales Consultant" "Retail Sales Consultant"
* #5211.060 "Retail Salesman" "Retail Salesman"
* #5211.061 "Retail Salesperson" "Retail Salesperson"
* #5211.062 "Sales Assistant" "Sales Assistant"
* #5211.063 "Sales Consultant" "Sales Consultant"
* #5211.064 "Sales Demonstrator" "Sales Demonstrator"
* #5211.065 "Sales Man" "Sales Man"
* #5211.066 "Sales Merchandiser" "Sales Merchandiser"
* #5211.067 "Sales Person" "Sales Person"
* #5211.068 "Sales Promotions Supervisor" "Sales Promotions Supervisor"
* #5211.069 "Sales Supervisor" "Sales Supervisor"
* #5211.070 "Sales Supervisor Retail" "Sales Supervisor Retail"
* #5211.071 "Sales Supervisor Wholesale" "Sales Supervisor Wholesale"
* #5211.072 "Sales Worker" "Sales Worker"
* #5211.073 "Salesman" "Salesman"
* #5211.074 "Salesman Automotive Parts Retail" "Salesman Automotive Parts Retail"
* #5211.075 "Salesperson" "Salesperson"
* #5211.076 "Salesperson Educational Aid" "Salesperson Educational Aid"
* #5211.077 "Saleswoman" "Saleswoman"
* #5211.078 "Service Station Attendant" "Service Station Attendant"
* #5211.079 "Shop Assistant" "Shop Assistant"
* #5211.080 "Shop Shelf Filler" "Shop Shelf Filler"
* #5211.081 "Shop Shelf Stacker" "Shop Shelf Stacker"
* #5211.082 "Shop Shelver" "Shop Shelver"
* #5211.083 "Spare Parts Salesman" "Spare Parts Salesman"
* #5211.084 "Sports Goods Salesman" "Sports Goods Salesman"
* #5211.085 "Stamp Dealer" "Stamp Dealer"
* #5211.086 "Store Assistant" "Store Assistant"
* #5211.087 "Supermarket Shelf Stacker" "Supermarket Shelf Stacker"
* #5211.088 "Tangata Hokohoko" "Tangata Hokohoko"
* #5211.089 "Timber Sales Officer Forestry" "Timber Sales Officer Forestry"
* #5211.090 "Truck Parts Salesperson" "Truck Parts Salesperson"
* #5211.091 "Tupperware Dealer" "Tupperware Dealer"
* #5211.092 "Tyre Repairer Garage" "Tyre Repairer Garage"
* #5211.093 "Tyre Salesman" "Tyre Salesman"
* #5211.094 "Used Car Salesperson" "Used Car Salesperson"
* #5211.095 "Vehicle Salesman" "Vehicle Salesman"
* #5211.096 "Vehicle Salesperson" "Vehicle Salesperson"
* #5211.097 "Video Shop Assistant" "Video Shop Assistant"
* #5211.098 "Warehouse Salesman" "Warehouse Salesman"
* #5221.001 "Amusement Fairground Attendant" "Amusement Fairground Attendant"
* #5221.002 "Bread Contractor" "Bread Contractor"
* #5221.003 "Bread Contractor Vendor" "Bread Contractor Vendor"
* #5221.004 "Hawker" "Hawker"
* #5221.005 "Ice Cream Vendor" "Ice Cream Vendor"
* #5221.006 "Milk Man" "Milk Man"
* #5221.007 "Milk Vendor" "Milk Vendor"
* #5221.008 "Milkman" "Milkman"
* #5221.009 "Newsagent Vendor Street" "Newsagent Vendor Street"
* #5221.010 "Salesman Driver" "Salesman Driver"
* #5221.011 "Side Show Worker" "Side Show Worker"
* #5221.012 "Street Vendor" "Street Vendor"
* #5221.013 "Street Vendor and Related Worker" "Street Vendor and Related Worker"
* #5221.014 "Van Salesman" "Van Salesman"
* #5231.001 "Artists Model" "Artists Model"
* #5231.002 "Fashion and Other Model" "Fashion and Other Model"
* #5231.003 "Fashion Model" "Fashion Model"
* #5231.004 "Model" "Model"
* #5231.005 "Modelling Instructor" "Modelling Instructor"
* #5231.006 "Photographic Model" "Photographic Model"
* #6111.001 "Arable Farmer" "Arable Farmer"
* #6111.002 "Crop Farmer" "Crop Farmer"
* #6111.003 "Crop Grower" "Crop Grower"
* #6111.004 "Crop Worker" "Crop Worker"
* #6111.005 "Field Crop Farm Cadet" "Field Crop Farm Cadet"
* #6111.006 "Field Crop Farm Manager" "Field Crop Farm Manager"
* #6111.007 "Field Crop Farm Supervisor" "Field Crop Farm Supervisor"
* #6111.008 "Field Crop Farmer" "Field Crop Farmer"
* #6111.009 "Field Crop Grower" "Field Crop Grower"
* #6111.010 "Field Crop Grower and Related Worker" "Field Crop Grower and Related Worker"
* #6111.011 "Field Crop Worker" "Field Crop Worker"
* #6111.012 "Flax Cutter" "Flax Cutter"
* #6111.013 "Flax Farm Manager" "Flax Farm Manager"
* #6111.014 "Flax Farm Worker" "Flax Farm Worker"
* #6111.015 "Glasshouse Worker" "Glasshouse Worker"
* #6111.016 "Greenhouse Worker Market Garden" "Greenhouse Worker Market Garden"
* #6111.017 "Hop Farmer" "Hop Farmer"
* #6111.018 "Hop Grower" "Hop Grower"
* #6111.019 "Hop Picker" "Hop Picker"
* #6111.020 "Kumara Grower" "Kumara Grower"
* #6111.021 "Maize Farmer" "Maize Farmer"
* #6111.022 "Market Garden Manager" "Market Garden Manager"
* #6111.023 "Market Garden Worker" "Market Garden Worker"
* #6111.024 "Market Gardener" "Market Gardener"
* #6111.025 "Market Gardener and Related Worker" "Market Gardener and Related Worker"
* #6111.026 "Market Gardener Glass House" "Market Gardener Glass House"
* #6111.027 "Market Gardening Cadet" "Market Gardening Cadet"
* #6111.028 "Market Gardening Farmer" "Market Gardening Farmer"
* #6111.029 "Market Gardening Supervisor" "Market Gardening Supervisor"
* #6111.030 "Mushroom Grower" "Mushroom Grower"
* #6111.031 "Mushroom Grower Farmer" "Mushroom Grower Farmer"
* #6111.032 "Mushroom Hand" "Mushroom Hand"
* #6111.033 "Mushroom Picker" "Mushroom Picker"
* #6111.034 "Organic Crop Grower" "Organic Crop Grower"
* #6111.035 "Other Field Crop Farmer" "Other Field Crop Farmer"
* #6111.036 "Potato Farmer" "Potato Farmer"
* #6111.037 "Potato Grower" "Potato Grower"
* #6111.038 "Quality Controller Of Market Gardeners And Workers" "Quality Controller Of Market Gardeners And Workers"
* #6111.039 "Tobacco Crop Hand" "Tobacco Crop Hand"
* #6111.040 "Tobacco Grower" "Tobacco Grower"
* #6111.041 "Tobacco Picker" "Tobacco Picker"
* #6111.042 "Tomato Farm Worker" "Tomato Farm Worker"
* #6111.043 "Tomato Farmer" "Tomato Farmer"
* #6111.044 "Tomato Grower" "Tomato Grower"
* #6111.045 "Tomato Picker" "Tomato Picker"
* #6111.046 "Vegetable Farm Worker" "Vegetable Farm Worker"
* #6111.047 "Vegetable Farmer" "Vegetable Farmer"
* #6111.048 "Vegetable Grower" "Vegetable Grower"
* #6111.049 "Vegetable Picker Grader" "Vegetable Picker Grader"
* #6112.001 "Apple Orchardist" "Apple Orchardist"
* #6112.002 "Apple Picker" "Apple Picker"
* #6112.003 "Berry Fruit Grower" "Berry Fruit Grower"
* #6112.004 "Berry Fruit Worker" "Berry Fruit Worker"
* #6112.005 "Berry Picker" "Berry Picker"
* #6112.006 "Berryfruit Farm Manager" "Berryfruit Farm Manager"
* #6112.007 "Berryfruit Farm Supervisor" "Berryfruit Farm Supervisor"
* #6112.008 "Berryfruit Farmer" "Berryfruit Farmer"
* #6112.009 "Berryfruit Grower" "Berryfruit Grower"
* #6112.010 "Berryfruit Worker" "Berryfruit Worker"
* #6112.011 "Citrus Fruit Farmer" "Citrus Fruit Farmer"
* #6112.012 "Currant Grower" "Currant Grower"
* #6112.013 "Farmer Orchardist" "Farmer Orchardist"
* #6112.014 "Fruit Farm Hand" "Fruit Farm Hand"
* #6112.015 "Fruit Farm Manager Orchard" "Fruit Farm Manager Orchard"
* #6112.016 "Fruit Farm Supervisor Orchard" "Fruit Farm Supervisor Orchard"
* #6112.017 "Fruit Grader Packer in Orchard" "Fruit Grader Packer in Orchard"
* #6112.018 "Fruit Grower" "Fruit Grower"
* #6112.019 "Fruit Grower Orchard" "Fruit Grower Orchard"
* #6112.020 "Fruit Grower Worker Orchard" "Fruit Grower Worker Orchard"
* #6112.021 "Fruit Picker" "Fruit Picker"
* #6112.022 "Grape Grower" "Grape Grower"
* #6112.023 "Grape Grower Or Wine Maker" "Grape Grower Or Wine Maker"
* #6112.024 "Grape Growing Vineyard Worker" "Grape Growing Vineyard Worker"
* #6112.025 "Kaikohi AAporo" "Kaikohi AAporo"
* #6112.026 "Kaikohi Aporo" "Kaikohi Aporo"
* #6112.027 "Kaikohi Hua Raakau" "Kaikohi Hua Raakau"
* #6112.028 "Kaikohi Hua Rakau" "Kaikohi Hua Rakau"
* #6112.029 "Kaimahi Waahi Whakatipu Hua Raakau" "Kaimahi Waahi Whakatipu Hua Raakau"
* #6112.030 "Kaimahi Wahi Whakatipu Hua Rakau" "Kaimahi Wahi Whakatipu Hua Rakau"
* #6112.031 "Kaitiaki Hua Raakau" "Kaitiaki Hua Raakau"
* #6112.032 "Kaitiaki Hua Rakau" "Kaitiaki Hua Rakau"
* #6112.033 "Kaiwehewehe Hua Raakau" "Kaiwehewehe Hua Raakau"
* #6112.034 "Kaiwehewehe Hua Rakau" "Kaiwehewehe Hua Rakau"
* #6112.035 "Kaiwhakahaere Uru Hua Raakau" "Kaiwhakahaere Uru Hua Raakau"
* #6112.036 "Kaiwhakahaere Uru Hua Rakau" "Kaiwhakahaere Uru Hua Rakau"
* #6112.037 "Kaiwhakahaere Waahi Whakatipu Hua Raakau" "Kaiwhakahaere Waahi Whakatipu Hua Raakau"
* #6112.038 "Kaiwhakahaere Wahi Whakatipu Hua Rakau" "Kaiwhakahaere Wahi Whakatipu Hua Rakau"
* #6112.039 "Kiwifruit Grower" "Kiwifruit Grower"
* #6112.040 "Kiwifruit Orchardist" "Kiwifruit Orchardist"
* #6112.041 "Oenologist" "Oenologist"
* #6112.042 "Orchard Hand" "Orchard Hand"
* #6112.043 "Orchard Labourer" "Orchard Labourer"
* #6112.044 "Orchard Manager" "Orchard Manager"
* #6112.045 "Orchard Supervisor" "Orchard Supervisor"
* #6112.046 "Orchard Worker" "Orchard Worker"
* #6112.047 "Orchardist" "Orchardist"
* #6112.048 "Orchardist Cadet" "Orchardist Cadet"
* #6112.049 "Pipfruit Grower" "Pipfruit Grower"
* #6112.050 "Quality Controller Of Fruit Grower Workers" "Quality Controller Of Fruit Grower Workers"
* #6112.051 "Raspberry Grower" "Raspberry Grower"
* #6112.052 "Stone Fruit Grower" "Stone Fruit Grower"
* #6112.053 "Strawberry Grower" "Strawberry Grower"
* #6112.054 "Subtropical Fruit Grower" "Subtropical Fruit Grower"
* #6112.055 "Vigneron" "Vigneron"
* #6112.056 "Vineyard Hand" "Vineyard Hand"
* #6112.057 "Vineyard Manager" "Vineyard Manager"
* #6112.058 "Vineyard Supervisor" "Vineyard Supervisor"
* #6112.059 "Vineyard Worker" "Vineyard Worker"
* #6112.060 "Viticulturist" "Viticulturist"
* #6112.061 "Wine Blender" "Wine Blender"
* #6112.062 "Wine Maker" "Wine Maker"
* #6112.063 "Wine Making Worker" "Wine Making Worker"
* #6112.064 "Winemaker" "Winemaker"
* #6113.001 "Agricultural Horticulture Worker" "Agricultural Horticulture Worker"
* #6113.002 "Arborist" "Arborist"
* #6113.003 "Bulb Grower" "Bulb Grower"
* #6113.004 "Caretaker Parks" "Caretaker Parks"
* #6113.005 "Floraculturist" "Floraculturist"
* #6113.006 "Flower Grower" "Flower Grower"
* #6113.007 "Gardener" "Gardener"
* #6113.008 "Green Keeper" "Green Keeper"
* #6113.009 "Greenhouse Worker Nursery" "Greenhouse Worker Nursery"
* #6113.010 "Greenkeeper" "Greenkeeper"
* #6113.011 "Greenkeeper Sport and Recreation Grounds" "Greenkeeper Sport and Recreation Grounds"
* #6113.012 "Greens Superintendent" "Greens Superintendent"
* #6113.013 "Grounds or Green Keeper" "Grounds or Green Keeper"
* #6113.014 "Groundsman" "Groundsman"
* #6113.015 "Groundsman Sports and Recreation" "Groundsman Sports and Recreation"
* #6113.016 "Groundsperson" "Groundsperson"
* #6113.017 "Hedge Cutting Contractor" "Hedge Cutting Contractor"
* #6113.018 "Horticultural Assistant" "Horticultural Assistant"
* #6113.019 "Horticultural Nursery Advisor" "Horticultural Nursery Advisor"
* #6113.020 "Horticultural Superintendent" "Horticultural Superintendent"
* #6113.021 "Horticultural Worker" "Horticultural Worker"
* #6113.022 "Horticulturalist" "Horticulturalist"
* #6113.023 "Horticulture Worker" "Horticulture Worker"
* #6113.024 "Horticulturist" "Horticulturist"
* #6113.025 "Jobbing Gardener" "Jobbing Gardener"
* #6113.026 "Kaimahi Kaari" "Kaimahi Kaari"
* #6113.027 "Kaimahi Kari" "Kaimahi Kari"
* #6113.028 "Kaimahi Whenua" "Kaimahi Whenua"
* #6113.029 "Kaitiaki Mahinga Kaari" "Kaitiaki Mahinga Kaari"
* #6113.030 "Kaitiaki Mahinga Kari" "Kaitiaki Mahinga Kari"
* #6113.031 "Landscape Contractor" "Landscape Contractor"
* #6113.032 "Landscape Gardener" "Landscape Gardener"
* #6113.033 "Landscaping Gardening Worker" "Landscaping Gardening Worker"
* #6113.034 "Lawn Mowing Contractor" "Lawn Mowing Contractor"
* #6113.035 "Lawnmowing Contractor" "Lawnmowing Contractor"
* #6113.036 "Medicinal Plant Grower" "Medicinal Plant Grower"
* #6113.037 "Nursery Assistant" "Nursery Assistant"
* #6113.038 "Nursery Farmer" "Nursery Farmer"
* #6113.039 "Nursery Grower" "Nursery Grower"
* #6113.040 "Nursery Labourer" "Nursery Labourer"
* #6113.041 "Nursery Manager" "Nursery Manager"
* #6113.042 "Nursery Worker" "Nursery Worker"
* #6113.043 "Nurseryman" "Nurseryman"
* #6113.044 "Orchid Grower" "Orchid Grower"
* #6113.045 "Quality Controller Of Gardeners" "Quality Controller Of Gardeners"
* #6113.046 "Quality Controller Of Grounds Or Green Keeper" "Quality Controller Of Grounds Or Green Keeper"
* #6113.047 "Quality Controller Of Landscape Gardeners" "Quality Controller Of Landscape Gardeners"
* #6113.048 "Racecourse Groundsperson" "Racecourse Groundsperson"
* #6113.049 "Racecourse Maintenance Worker" "Racecourse Maintenance Worker"
* #6113.050 "School Groundsperson" "School Groundsperson"
* #6113.051 "Seed Grower" "Seed Grower"
* #6113.052 "Tree Doctor" "Tree Doctor"
* #6113.053 "Tree Surgeon" "Tree Surgeon"
* #6113.054 "Tropical Plant Grower" "Tropical Plant Grower"
* #6113.055 "Turf Layer" "Turf Layer"
* #6121.001 "Beef Farm Worker" "Beef Farm Worker"
* #6121.002 "Beef Farmer" "Beef Farmer"
* #6121.003 "Bull Farmer" "Bull Farmer"
* #6121.004 "Cat Breeder" "Cat Breeder"
* #6121.005 "Cattle Breeder" "Cattle Breeder"
* #6121.006 "Cattle Farm Manager" "Cattle Farm Manager"
* #6121.007 "Cattle Farm Supervisor" "Cattle Farm Supervisor"
* #6121.008 "Cattle Farm Worker" "Cattle Farm Worker"
* #6121.009 "Cattle Farmer" "Cattle Farmer"
* #6121.010 "Cattle Station Worker" "Cattle Station Worker"
* #6121.011 "Cattle Stud Farmer" "Cattle Stud Farmer"
* #6121.012 "Dairy Farm Cadet" "Dairy Farm Cadet"
* #6121.013 "Dairy Farm Hand" "Dairy Farm Hand"
* #6121.014 "Dairy Farm Manager" "Dairy Farm Manager"
* #6121.015 "Dairy Farm Supervisor" "Dairy Farm Supervisor"
* #6121.016 "Dairy Farm Worker" "Dairy Farm Worker"
* #6121.017 "Dairy Farmer" "Dairy Farmer"
* #6121.018 "Dairy Stud Farmer" "Dairy Stud Farmer"
* #6121.019 "Deer Farm Manager" "Deer Farm Manager"
* #6121.020 "Deer Farm Supervisor" "Deer Farm Supervisor"
* #6121.021 "Deer Farm Worker" "Deer Farm Worker"
* #6121.022 "Deer Farmer" "Deer Farmer"
* #6121.023 "Deer Stud Farmer" "Deer Stud Farmer"
* #6121.024 "Dog Breeder" "Dog Breeder"
* #6121.025 "Fitch Farmer" "Fitch Farmer"
* #6121.026 "Goat Breeder" "Goat Breeder"
* #6121.027 "Goat Farm Manager" "Goat Farm Manager"
* #6121.028 "Goat Farm Supervisor" "Goat Farm Supervisor"
* #6121.029 "Goat Farm Worker" "Goat Farm Worker"
* #6121.030 "Goat Farmer" "Goat Farmer"
* #6121.031 "Goat Stud Farmer" "Goat Stud Farmer"
* #6121.032 "Grazier" "Grazier"
* #6121.033 "Horse Breeder" "Horse Breeder"
* #6121.034 "Horse Breeder Worker" "Horse Breeder Worker"
* #6121.035 "Horse Stud Farmer" "Horse Stud Farmer"
* #6121.036 "Kaimiraka Kau" "Kaimiraka Kau"
* #6121.037 "Kaipaamu Hipi" "Kaipaamu Hipi"
* #6121.038 "Kaipamu Hipi" "Kaipamu Hipi"
* #6121.039 "Kaitiaki Paamu Hipi" "Kaitiaki Paamu Hipi"
* #6121.040 "Kaitiaki Pamu Hipi" "Kaitiaki Pamu Hipi"
* #6121.041 "Kaiwhakahaere Paamu Hipi" "Kaiwhakahaere Paamu Hipi"
* #6121.042 "Kaiwhakahaere Pamu Hipi" "Kaiwhakahaere Pamu Hipi"
* #6121.043 "Livestock Farmer" "Livestock Farmer"
* #6121.044 "Llama Farmer" "Llama Farmer"
* #6121.045 "Milking Equipment Operator" "Milking Equipment Operator"
* #6121.046 "Ostrich Farmer" "Ostrich Farmer"
* #6121.047 "Other Livestock Farm Manager" "Other Livestock Farm Manager"
* #6121.048 "Other Livestock Farm Supervisor" "Other Livestock Farm Supervisor"
* #6121.049 "Other Livestock Farm Worker" "Other Livestock Farm Worker"
* #6121.050 "Other Livestock Farmer" "Other Livestock Farmer"
* #6121.051 "Pig Farm Manager" "Pig Farm Manager"
* #6121.052 "Pig Farm Supervisor" "Pig Farm Supervisor"
* #6121.053 "Pig Farm Worker" "Pig Farm Worker"
* #6121.054 "Pig Farmer" "Pig Farmer"
* #6121.055 "Pig Stud Farmer" "Pig Stud Farmer"
* #6121.056 "Possum Farmer" "Possum Farmer"
* #6121.057 "Rabbit Farmer" "Rabbit Farmer"
* #6121.058 "Racehorse Stud Worker" "Racehorse Stud Worker"
* #6121.059 "Share Milker" "Share Milker"
* #6121.060 "Sharemilker" "Sharemilker"
* #6121.061 "Sheep Dipping Contractor" "Sheep Dipping Contractor"
* #6121.062 "Sheep Farm Cadet" "Sheep Farm Cadet"
* #6121.063 "Sheep Farm Hand" "Sheep Farm Hand"
* #6121.064 "Sheep Farm Manager" "Sheep Farm Manager"
* #6121.065 "Sheep Farm Supervisor" "Sheep Farm Supervisor"
* #6121.066 "Sheep Farm Worker" "Sheep Farm Worker"
* #6121.067 "Sheep Farmer" "Sheep Farmer"
* #6121.068 "Sheep Runholder" "Sheep Runholder"
* #6121.069 "Sheep Station Hand" "Sheep Station Hand"
* #6121.070 "Sheep Station Manager" "Sheep Station Manager"
* #6121.071 "Sheep Station Owner" "Sheep Station Owner"
* #6121.072 "Sheep Station Supervisor" "Sheep Station Supervisor"
* #6121.073 "Sheep Stud Farmer" "Sheep Stud Farmer"
* #6121.074 "Stud Groom" "Stud Groom"
* #6121.075 "Stud Racehorse Breeder" "Stud Racehorse Breeder"
* #6121.076 "Stud Racehorse Farm Manager" "Stud Racehorse Farm Manager"
* #6121.077 "Stud Racehorse Farm Supervisor" "Stud Racehorse Farm Supervisor"
* #6121.078 "Town Milk Supplier" "Town Milk Supplier"
* #6121.079 "Water Buffalo Farmer" "Water Buffalo Farmer"
* #6121.080 "Yak Farmer" "Yak Farmer"
* #6122.001 "Mixed Livestock Farm Manager" "Mixed Livestock Farm Manager"
* #6122.002 "Mixed Livestock Farm Supervisor" "Mixed Livestock Farm Supervisor"
* #6122.003 "Mixed Livestock Farm Worker" "Mixed Livestock Farm Worker"
* #6122.004 "Mixed Livestock Farmer" "Mixed Livestock Farmer"
* #6123.001 "Chicken Catcher" "Chicken Catcher"
* #6123.002 "Chicken Farmer" "Chicken Farmer"
* #6123.003 "Chicken Hatchery Assistant" "Chicken Hatchery Assistant"
* #6123.004 "Chicken Poultry Farm Worker" "Chicken Poultry Farm Worker"
* #6123.005 "Chicken Sexer" "Chicken Sexer"
* #6123.006 "Duck Farmer" "Duck Farmer"
* #6123.007 "Egg Collector" "Egg Collector"
* #6123.008 "Egg Producer" "Egg Producer"
* #6123.009 "Goose Farmer" "Goose Farmer"
* #6123.010 "Pheasant Farmer" "Pheasant Farmer"
* #6123.011 "Poultry Farm Hand" "Poultry Farm Hand"
* #6123.012 "Poultry Farm Manager" "Poultry Farm Manager"
* #6123.013 "Poultry Farm Supervisor" "Poultry Farm Supervisor"
* #6123.014 "Poultry Farm Worker" "Poultry Farm Worker"
* #6123.015 "Poultry Farmer" "Poultry Farmer"
* #6123.016 "Poultry Hatcher Breeder" "Poultry Hatcher Breeder"
* #6123.017 "Poultry Hatchery Manager" "Poultry Hatchery Manager"
* #6123.018 "Poultry Hatchery Supervisor" "Poultry Hatchery Supervisor"
* #6123.019 "Poultry Hatchery Worker" "Poultry Hatchery Worker"
* #6123.020 "Poultry Worker Factory" "Poultry Worker Factory"
* #6123.021 "Turkey Farmer" "Turkey Farmer"
* #6124.001 "Apiarist" "Apiarist"
* #6124.002 "Apiarist and Apiary Worker" "Apiarist and Apiary Worker"
* #6124.003 "Apiary Cadet" "Apiary Cadet"
* #6124.004 "Apiary Manager" "Apiary Manager"
* #6124.005 "Apiary Supervisor" "Apiary Supervisor"
* #6124.006 "Apiary Worker" "Apiary Worker"
* #6124.007 "Bee Keeper" "Bee Keeper"
* #6124.008 "Beekeeper" "Beekeeper"
* #6124.009 "Beekeeping Worker" "Beekeeping Worker"
* #6124.010 "Honey Grader" "Honey Grader"
* #6124.011 "Worker Bee Farm" "Worker Bee Farm"
* #6125.001 "Agricultural Worker" "Agricultural Worker"
* #6125.002 "Animal Attendant Farm" "Animal Attendant Farm"
* #6125.003 "Bush Clearer Scrub Cutter" "Bush Clearer Scrub Cutter"
* #6125.004 "Crop and Livestock Farm Manager" "Crop and Livestock Farm Manager"
* #6125.005 "Crop and Livestock Farm Supervisor" "Crop and Livestock Farm Supervisor"
* #6125.006 "Crop and Livestock Farmer" "Crop and Livestock Farmer"
* #6125.007 "Crop and Livestock Worker" "Crop and Livestock Worker"
* #6125.008 "Crop Hand" "Crop Hand"
* #6125.009 "Farm Assistant" "Farm Assistant"
* #6125.010 "Farm Hand" "Farm Hand"
* #6125.011 "Farm Labourer" "Farm Labourer"
* #6125.012 "Farm Worker" "Farm Worker"
* #6125.013 "Farmer (nod)" "Farmer (nod)"
* #6125.014 "General Farm Manager" "General Farm Manager"
* #6125.015 "General Farm Supervisor" "General Farm Supervisor"
* #6125.016 "General Farmer" "General Farmer"
* #6125.017 "Grubber and Clearer Land" "Grubber and Clearer Land"
* #6125.018 "Haymaker" "Haymaker"
* #6125.019 "Kaiahuwhenua" "Kaiahuwhenua"
* #6125.020 "Kaiawhina Ahuwhenua" "Kaiawhina Ahuwhenua"
* #6125.021 "Kaiawhina Mahi Paamu" "Kaiawhina Mahi Paamu"
* #6125.022 "Kaiawhina Mahi Pamu" "Kaiawhina Mahi Pamu"
* #6125.023 "Kaiawhina Paamu" "Kaiawhina Paamu"
* #6125.024 "Kaiawhina Pamu" "Kaiawhina Pamu"
* #6125.025 "Kaimahi Ahuwhenua" "Kaimahi Ahuwhenua"
* #6125.026 "Kaimahi Paamu" "Kaimahi Paamu"
* #6125.027 "Kaimahi Pamu" "Kaimahi Pamu"
* #6125.028 "Kaipaamu" "Kaipaamu"
* #6125.029 "Kaipamu" "Kaipamu"
* #6125.030 "Kaitautoko Mahi Paamu" "Kaitautoko Mahi Paamu"
* #6125.031 "Kaitautoko Mahi Pamu" "Kaitautoko Mahi Pamu"
* #6125.032 "Landgirl" "Landgirl"
* #6125.033 "Mixed Farm Manager" "Mixed Farm Manager"
* #6125.034 "Mixed Farm Supervisor" "Mixed Farm Supervisor"
* #6125.035 "Mixed Farmer" "Mixed Farmer"
* #6125.036 "Station Hand" "Station Hand"
* #6125.037 "Tussock Worker" "Tussock Worker"
* #6125.038 "Willow Cutter" "Willow Cutter"
* #6126.001 "Cattle Drover" "Cattle Drover"
* #6126.002 "Dairy Herd Milk Tester" "Dairy Herd Milk Tester"
* #6126.003 "Drover" "Drover"
* #6126.004 "Farm Stablehand" "Farm Stablehand"
* #6126.005 "Fleece Classer" "Fleece Classer"
* #6126.006 "Groom Stable Hand" "Groom Stable Hand"
* #6126.007 "Head Shepherd" "Head Shepherd"
* #6126.008 "Herdsman" "Herdsman"
* #6126.009 "Horse Box Attendant" "Horse Box Attendant"
* #6126.010 "Horse Breaker" "Horse Breaker"
* #6126.011 "Horse Trainer" "Horse Trainer"
* #6126.012 "Horse Trainer Cadet" "Horse Trainer Cadet"
* #6126.013 "Kaikuti Hipi" "Kaikuti Hipi"
* #6126.014 "Kaipoipoi Huruhuru Hipi" "Kaipoipoi Huruhuru Hipi"
* #6126.015 "Kaipoipoi Wuru" "Kaipoipoi Wuru"
* #6126.016 "Kaipoipoi Wuuru" "Kaipoipoi Wuuru"
* #6126.017 "Milk Sample Collector" "Milk Sample Collector"
* #6126.018 "Musterer" "Musterer"
* #6126.019 "Quality Controller Of Horse Trainer Groom Or Stablehands" "Quality Controller Of Horse Trainer Groom Or Stablehands"
* #6126.020 "Quality Controller Of Wool Classers" "Quality Controller Of Wool Classers"
* #6126.021 "Race Horse Trainer" "Race Horse Trainer"
* #6126.022 "Racing Dog Trainer" "Racing Dog Trainer"
* #6126.023 "Sampling Officer" "Sampling Officer"
* #6126.024 "Shearer" "Shearer"
* #6126.025 "Shearing Contractor" "Shearing Contractor"
* #6126.026 "Shearing Shed Hand" "Shearing Shed Hand"
* #6126.027 "Shearing Shed Overseer" "Shearing Shed Overseer"
* #6126.028 "Shearing Shed Wool Presser" "Shearing Shed Wool Presser"
* #6126.029 "Shearing Shed Worker" "Shearing Shed Worker"
* #6126.030 "Sheep Shearer" "Sheep Shearer"
* #6126.031 "Shepherd" "Shepherd"
* #6126.032 "Stable Hand" "Stable Hand"
* #6126.033 "Stablehand" "Stablehand"
* #6126.034 "Stock Drafter Farm" "Stock Drafter Farm"
* #6126.035 "Stockman" "Stockman"
* #6126.036 "Strapper" "Strapper"
* #6126.037 "Wool Baler" "Wool Baler"
* #6126.038 "Wool Classer" "Wool Classer"
* #6126.039 "Wool Classer Grader" "Wool Classer Grader"
* #6126.040 "Wool Classer Shearing Shed" "Wool Classer Shearing Shed"
* #6126.041 "Wool Grader Shearing Shed" "Wool Grader Shearing Shed"
* #6126.042 "Wool Hand" "Wool Hand"
* #6126.043 "Wool Handler" "Wool Handler"
* #6126.044 "Wool Labourer" "Wool Labourer"
* #6126.045 "Wool Sorter" "Wool Sorter"
* #6126.046 "Woolclasser" "Woolclasser"
* #6131.001 "Axeman Forest" "Axeman Forest"
* #6131.002 "Bush Clearer Cutter" "Bush Clearer Cutter"
* #6131.003 "Bush Clearing Contractor" "Bush Clearing Contractor"
* #6131.004 "Bush Clearing Scrub Cutter Forest" "Bush Clearing Scrub Cutter Forest"
* #6131.005 "Bush Man" "Bush Man"
* #6131.006 "Bush Worker" "Bush Worker"
* #6131.007 "Bushman" "Bushman"
* #6131.008 "Cross Cut Sawyer Forest" "Cross Cut Sawyer Forest"
* #6131.009 "Feller and Crosscutter Forestry" "Feller and Crosscutter Forestry"
* #6131.010 "Firewood Cutter" "Firewood Cutter"
* #6131.011 "Forest Foreman Overseer Logging" "Forest Foreman Overseer Logging"
* #6131.012 "Forest Hand" "Forest Hand"
* #6131.013 "Forest Labourer" "Forest Labourer"
* #6131.014 "Forest Supervisor" "Forest Supervisor"
* #6131.015 "Forestry Contractor" "Forestry Contractor"
* #6131.016 "Forestry Field Assistant" "Forestry Field Assistant"
* #6131.017 "Forestry Foreman Overseer" "Forestry Foreman Overseer"
* #6131.018 "Forestry Gang Supervisor" "Forestry Gang Supervisor"
* #6131.019 "Forestry Labourer" "Forestry Labourer"
* #6131.020 "Forestry Protection Officer" "Forestry Protection Officer"
* #6131.021 "Forestry Worker" "Forestry Worker"
* #6131.022 "Hauling Engine Contractor Logging" "Hauling Engine Contractor Logging"
* #6131.023 "Hauling Engine Driver Logging" "Hauling Engine Driver Logging"
* #6131.024 "Kaiawhina Mahi Whakato Tiaki Rakau Ngahere" "Kaiawhina Mahi Whakato Tiaki Rakau Ngahere"
* #6131.025 "Kaiawhina Mahi Whakatoo Tiaki Raakau Ngahere" "Kaiawhina Mahi Whakatoo Tiaki Raakau Ngahere"
* #6131.026 "Kaimahi Ngahere" "Kaimahi Ngahere"
* #6131.027 "Kaimahi Puihi" "Kaimahi Puihi"
* #6131.028 "Leading Bushman Logging" "Leading Bushman Logging"
* #6131.029 "Leading Forest Hand" "Leading Forest Hand"
* #6131.030 "Leading Hand Logging" "Leading Hand Logging"
* #6131.031 "Log Assessor" "Log Assessor"
* #6131.032 "Log Hauler Bush" "Log Hauler Bush"
* #6131.033 "Log Raft Maker" "Log Raft Maker"
* #6131.034 "Logger" "Logger"
* #6131.035 "Logging Contractor" "Logging Contractor"
* #6131.036 "Logging Operator" "Logging Operator"
* #6131.037 "Logging Pruner Tree" "Logging Pruner Tree"
* #6131.038 "Logging Supervisor" "Logging Supervisor"
* #6131.039 "Logging Topper" "Logging Topper"
* #6131.040 "Lumberjack" "Lumberjack"
* #6131.041 "Moss Gatherer" "Moss Gatherer"
* #6131.042 "Plantation Worker Forestry" "Plantation Worker Forestry"
* #6131.043 "Planter Trees Forestry" "Planter Trees Forestry"
* #6131.044 "Prop Cutter" "Prop Cutter"
* #6131.045 "Pruner Forest" "Pruner Forest"
* #6131.046 "Quality Controller Of Forestry Contractors" "Quality Controller Of Forestry Contractors"
* #6131.047 "Quality Controller Of Loggers" "Quality Controller Of Loggers"
* #6131.048 "Scrub Cutter" "Scrub Cutter"
* #6131.049 "Scrub Cutting Contractor" "Scrub Cutting Contractor"
* #6131.050 "Skiddy Forest" "Skiddy Forest"
* #6131.051 "Sniper Forest" "Sniper Forest"
* #6131.052 "Spaghnum Moss Gatherer" "Spaghnum Moss Gatherer"
* #6131.053 "Timber Getter" "Timber Getter"
* #6131.054 "Tree Feller" "Tree Feller"
* #6131.055 "Tree Planter" "Tree Planter"
* #6131.056 "Tree Topper" "Tree Topper"
* #6131.057 "Waoko" "Waoko"
* #6131.058 "Woodsman Foreman" "Woodsman Foreman"
* #6141.001 "Crayfisher" "Crayfisher"
* #6141.002 "Deep Sea Fishing Boat Skipper" "Deep Sea Fishing Boat Skipper"
* #6141.003 "Diver Fishing" "Diver Fishing"
* #6141.004 "Fish Baiter" "Fish Baiter"
* #6141.005 "Fisherman" "Fisherman"
* #6141.006 "Fisherperson" "Fisherperson"
* #6141.007 "Fishing Boat Captain" "Fishing Boat Captain"
* #6141.008 "Fishing Boat Skipper" "Fishing Boat Skipper"
* #6141.009 "Fishing Launch Proprietor" "Fishing Launch Proprietor"
* #6141.010 "Fishing Skipper" "Fishing Skipper"
* #6141.011 "Kaihi Ika" "Kaihi Ika"
* #6141.012 "Kaihii Ika" "Kaihii Ika"
* #6141.013 "Kaihopu Ika" "Kaihopu Ika"
* #6141.014 "Oyster Fisher" "Oyster Fisher"
* #6141.015 "Paua Gatherer" "Paua Gatherer"
* #6141.016 "Paua Gatherer Diver" "Paua Gatherer Diver"
* #6141.017 "Rock Lobster Fisher" "Rock Lobster Fisher"
* #6141.018 "Seaweed Gatherer" "Seaweed Gatherer"
* #6141.019 "Shell Fish Gatherer" "Shell Fish Gatherer"
* #6141.020 "Shell Fisher" "Shell Fisher"
* #6141.021 "Shellfish Gatherer" "Shellfish Gatherer"
* #6141.022 "Tangata Hi Ika" "Tangata Hi Ika"
* #6141.023 "Tangata Hii Ika" "Tangata Hii Ika"
* #6141.024 "Tangata Hopu Ika" "Tangata Hopu Ika"
* #6141.025 "Trawler Hand" "Trawler Hand"
* #6141.026 "Trawlerman" "Trawlerman"
* #6141.027 "Whitebaiter" "Whitebaiter"
* #6142.001 "Fish Farm Manager" "Fish Farm Manager"
* #6142.002 "Fish Farm Worker" "Fish Farm Worker"
* #6142.003 "Fish Farmer" "Fish Farmer"
* #6142.004 "Fish Hatchery Manager" "Fish Hatchery Manager"
* #6142.005 "Fish Hatchery Worker" "Fish Hatchery Worker"
* #6142.006 "Marine Farm Supervisor" "Marine Farm Supervisor"
* #6142.007 "Marine Farmer" "Marine Farmer"
* #6142.008 "Mussel Farm Manager" "Mussel Farm Manager"
* #6142.009 "Mussel Oyster Farm Worker" "Mussel Oyster Farm Worker"
* #6142.010 "Mussel Oyster Farmer" "Mussel Oyster Farmer"
* #6142.011 "Oyster Farm Manager" "Oyster Farm Manager"
* #6142.012 "Quality Controller Of Mussel Oyster Farmer And Worker" "Quality Controller Of Mussel Oyster Farmer And Worker"
* #6142.013 "Salmon Farm Manager" "Salmon Farm Manager"
* #6142.014 "Salmon Farm Worker" "Salmon Farm Worker"
* #6142.015 "Salmon Farmer" "Salmon Farmer"
* #6142.016 "Shellfish Farm Manager" "Shellfish Farm Manager"
* #6142.017 "Shellfish Farm Worker" "Shellfish Farm Worker"
* #6142.018 "Shellfish Farmer" "Shellfish Farmer"
* #6143.001 "Commercial Shooter" "Commercial Shooter"
* #6143.002 "Deer Culler" "Deer Culler"
* #6143.003 "Deer Hunter" "Deer Hunter"
* #6143.004 "Deer Recoverer" "Deer Recoverer"
* #6143.005 "Deer Shooter Commercial" "Deer Shooter Commercial"
* #6143.006 "Hunter and Trapper" "Hunter and Trapper"
* #6143.007 "Muttonbirder" "Muttonbirder"
* #6143.008 "Pest Destruction Worker" "Pest Destruction Worker"
* #6143.009 "Possum Trapper" "Possum Trapper"
* #6143.010 "Rabbiter" "Rabbiter"
* #6143.011 "Shooter" "Shooter"
* #6143.012 "Trapper" "Trapper"
* #6144.001 "Animal Assistant" "Animal Assistant"
* #6144.002 "Animal Attendant" "Animal Attendant"
* #6144.003 "Animal Control Officer" "Animal Control Officer"
* #6144.004 "Animal Keeper" "Animal Keeper"
* #6144.005 "Animal Welfare Worker" "Animal Welfare Worker"
* #6144.006 "Aquarium Worker" "Aquarium Worker"
* #6144.007 "Aviary Keeper" "Aviary Keeper"
* #6144.008 "Boarding Kennel Attendant" "Boarding Kennel Attendant"
* #6144.009 "Boarding Kennel Proprietor" "Boarding Kennel Proprietor"
* #6144.010 "Cattery Attendant" "Cattery Attendant"
* #6144.011 "Cattery Proprietor" "Cattery Proprietor"
* #6144.012 "Dog Beautician Groomer" "Dog Beautician Groomer"
* #6144.013 "Dog Control Officer" "Dog Control Officer"
* #6144.014 "Dog Kennel Boarding Proprietor" "Dog Kennel Boarding Proprietor"
* #6144.015 "Dog Ranger" "Dog Ranger"
* #6144.016 "Game Warden" "Game Warden"
* #6144.017 "Guide Dog Trainer" "Guide Dog Trainer"
* #6144.018 "Humane Officer" "Humane Officer"
* #6144.019 "Hydatids Officer" "Hydatids Officer"
* #6144.020 "Kennels Assistant" "Kennels Assistant"
* #6144.021 "Pet Groomer" "Pet Groomer"
* #6144.022 "Pound Keeper" "Pound Keeper"
* #6144.023 "SPCA Worker" "SPCA Worker"
* #6144.024 "Zoo Attendant" "Zoo Attendant"
* #6144.025 "Zoo Keeper" "Zoo Keeper"
* #6144.026 "Zoo Worker" "Zoo Worker"
* #7111.001 "Artificial Stone Setter" "Artificial Stone Setter"
* #7111.002 "Block Layer" "Block Layer"
* #7111.003 "Blocklayer" "Blocklayer"
* #7111.004 "Brick Layer" "Brick Layer"
* #7111.005 "Bricklayer" "Bricklayer"
* #7111.006 "Bricklayer and/or Blocklayer" "Bricklayer and/or Blocklayer"
* #7111.007 "Bricklaying Contractor" "Bricklaying Contractor"
* #7111.008 "Bricklaying Pointer" "Bricklaying Pointer"
* #7111.009 "Bricklaying Stopper" "Bricklaying Stopper"
* #7111.010 "Cast Stone Products Maker" "Cast Stone Products Maker"
* #7111.011 "Ceramic Tiler" "Ceramic Tiler"
* #7111.012 "Chimney Repairman" "Chimney Repairman"
* #7111.013 "Construction Setter" "Construction Setter"
* #7111.014 "Construction Stonemason" "Construction Stonemason"
* #7111.015 "Hand Carver Stone" "Hand Carver Stone"
* #7111.016 "Headstone Maker" "Headstone Maker"
* #7111.017 "Kiln Builder" "Kiln Builder"
* #7111.018 "Marble Cutter" "Marble Cutter"
* #7111.019 "Marble Mason" "Marble Mason"
* #7111.020 "Marble Polisher" "Marble Polisher"
* #7111.021 "Marble Processor" "Marble Processor"
* #7111.022 "Marble Sawyer" "Marble Sawyer"
* #7111.023 "Marble Splitter" "Marble Splitter"
* #7111.024 "Masonry Carver Monumental" "Masonry Carver Monumental"
* #7111.025 "Masonry Cutter Monumental" "Masonry Cutter Monumental"
* #7111.026 "Masonry Fixer" "Masonry Fixer"
* #7111.027 "Masonry Setter Monumental" "Masonry Setter Monumental"
* #7111.028 "Monument Installer" "Monument Installer"
* #7111.029 "Monumental Mason" "Monumental Mason"
* #7111.030 "Polishing and Stone Cutting Lathe Operator" "Polishing and Stone Cutting Lathe Operator"
* #7111.031 "Steeplejack" "Steeplejack"
* #7111.032 "Stone Grinder Planer Polisher" "Stone Grinder Planer Polisher"
* #7111.033 "Stone Mason" "Stone Mason"
* #7111.034 "Stone Masonry Setter" "Stone Masonry Setter"
* #7111.035 "Stone Sawyer Splitter" "Stone Sawyer Splitter"
* #7111.036 "Stone Turner Lathe" "Stone Turner Lathe"
* #7111.037 "Stonemason" "Stonemason"
* #7111.038 "Terrazzo Worker" "Terrazzo Worker"
* #7111.039 "Tile Layer" "Tile Layer"
* #7111.040 "Tile Setter" "Tile Setter"
* #7111.041 "Tiler" "Tiler"
* #7111.042 "Wall and Floor Tiler" "Wall and Floor Tiler"
* #7112.001 "Boatbuilding Supervisor" "Boatbuilding Supervisor"
* #7112.002 "Bridge Builder" "Bridge Builder"
* #7112.003 "Bridge Carpenter" "Bridge Carpenter"
* #7112.004 "Builder" "Builder"
* #7112.005 "Builder Housing" "Builder Housing"
* #7112.006 "Building Contractor" "Building Contractor"
* #7112.007 "Building Maintenance Repairman" "Building Maintenance Repairman"
* #7112.008 "Building Supervisor Construction" "Building Supervisor Construction"
* #7112.009 "Carpenter" "Carpenter"
* #7112.010 "Carpenter Contractor" "Carpenter Contractor"
* #7112.011 "Carpenter Maintenance" "Carpenter Maintenance"
* #7112.012 "Carpenter or Joiner" "Carpenter or Joiner"
* #7112.013 "Commercial Carpenter" "Commercial Carpenter"
* #7112.014 "Construction Foreman Chargehand" "Construction Foreman Chargehand"
* #7112.015 "Fibreglass Boat Builder" "Fibreglass Boat Builder"
* #7112.016 "Home Renovator" "Home Renovator"
* #7112.017 "Joiner" "Joiner"
* #7112.018 "Kaamura Whakaaetanga Utu" "Kaamura Whakaaetanga Utu"
* #7112.019 "Kaamura Whakaritenga Utu" "Kaamura Whakaritenga Utu"
* #7112.020 "Kaihanga Taputapu Whare" "Kaihanga Taputapu Whare"
* #7112.021 "Kamura Whakaaetanga Utu" "Kamura Whakaaetanga Utu"
* #7112.022 "Kamura Whakaritenga Utu" "Kamura Whakaritenga Utu"
* #7112.023 "Mine Carpenter Rough Carpentry" "Mine Carpenter Rough Carpentry"
* #7112.024 "Panel Erector" "Panel Erector"
* #7112.025 "Prefabricated Buildings Maker and Erector" "Prefabricated Buildings Maker and Erector"
* #7112.026 "Production Supervisor Construction" "Production Supervisor Construction"
* #7112.027 "Registered Master Builder" "Registered Master Builder"
* #7112.028 "Residential Builder" "Residential Builder"
* #7112.029 "Ship Builder" "Ship Builder"
* #7112.030 "Ships Carpenter" "Ships Carpenter"
* #7112.031 "Ships Joiner" "Ships Joiner"
* #7112.032 "Shipwright Inspector" "Shipwright Inspector"
* #7112.033 "Shopfitter" "Shopfitter"
* #7112.034 "Wharf Carpenter" "Wharf Carpenter"
* #7112.035 "Wood Caravan Builder" "Wood Caravan Builder"
* #7112.036 "Wood Joiner" "Wood Joiner"
* #7112.037 "Yacht Builder" "Yacht Builder"
* #7121.001 "Dry Wall Plasterer" "Dry Wall Plasterer"
* #7121.002 "Fibrous Plaster Wallboard Installer" "Fibrous Plaster Wallboard Installer"
* #7121.003 "Fibrous Plasterer" "Fibrous Plasterer"
* #7121.004 "Gib Board Stopper" "Gib Board Stopper"
* #7121.005 "Gib Stopper" "Gib Stopper"
* #7121.006 "Interior Plasterer" "Interior Plasterer"
* #7121.007 "Ornamental Plasterer" "Ornamental Plasterer"
* #7121.008 "Plasterboard Fixer" "Plasterboard Fixer"
* #7121.009 "Plasterboard Stopper" "Plasterboard Stopper"
* #7121.010 "Plasterer" "Plasterer"
* #7121.011 "Solid Plasterer" "Solid Plasterer"
* #7121.012 "Stucco Plasterer" "Stucco Plasterer"
* #7122.001 "Auto Glazier" "Auto Glazier"
* #7122.002 "Glazier" "Glazier"
* #7122.003 "Glazier Leaded Glass" "Glazier Leaded Glass"
* #7122.004 "Leadlight Glazier" "Leadlight Glazier"
* #7122.005 "Mirror Installer" "Mirror Installer"
* #7122.006 "Window Glass Fitter" "Window Glass Fitter"
* #7123.001 "Kaiwhakarerewai" "Kaiwhakarerewai"
* #7123.002 "Kaiwhakauru Taputapu Wai" "Kaiwhakauru Taputapu Wai"
* #7123.003 "Maintenance Plumber" "Maintenance Plumber"
* #7123.004 "Plumber" "Plumber"
* #7124.001 "Auto Striper" "Auto Striper"
* #7124.002 "Automobile Painter" "Automobile Painter"
* #7124.003 "Brush Hand" "Brush Hand"
* #7124.004 "Car Painter" "Car Painter"
* #7124.005 "Car Spray Painter" "Car Spray Painter"
* #7124.006 "Coach Painter" "Coach Painter"
* #7124.007 "Coachpainter" "Coachpainter"
* #7124.008 "Decorator" "Decorator"
* #7124.009 "Highway Lane Marker" "Highway Lane Marker"
* #7124.010 "House Painter" "House Painter"
* #7124.011 "Kaipeita Kaiwhakapaipai Whare" "Kaipeita Kaiwhakapaipai Whare"
* #7124.012 "Kaipeita Whare" "Kaipeita Whare"
* #7124.013 "Metal Coater" "Metal Coater"
* #7124.014 "Metal Sprayer" "Metal Sprayer"
* #7124.015 "Motor Vehicle Painter" "Motor Vehicle Painter"
* #7124.016 "Painter and Decorator" "Painter and Decorator"
* #7124.017 "Painter and Paperhanger" "Painter and Paperhanger"
* #7124.018 "Painter Decorator" "Painter Decorator"
* #7124.019 "Painter Decorator or Paperhanger" "Painter Decorator or Paperhanger"
* #7124.020 "Painter Paperhanger" "Painter Paperhanger"
* #7124.021 "Painting Contractor" "Painting Contractor"
* #7124.022 "Paperhanger" "Paperhanger"
* #7124.023 "Road Marker" "Road Marker"
* #7124.024 "Rust Proofer" "Rust Proofer"
* #7124.025 "Ships Painter" "Ships Painter"
* #7124.026 "Sign Maker" "Sign Maker"
* #7124.027 "Sign Manufacturer" "Sign Manufacturer"
* #7124.028 "Sign Painter" "Sign Painter"
* #7124.029 "Sign Writer" "Sign Writer"
* #7124.030 "Signcrafter" "Signcrafter"
* #7124.031 "Signwriter" "Signwriter"
* #7124.032 "Spray Painter" "Spray Painter"
* #7124.033 "Spraypainter" "Spraypainter"
* #7124.034 "Structural Steel Painter" "Structural Steel Painter"
* #7124.035 "Tangata Peita Whare" "Tangata Peita Whare"
* #7131.001 "Aircraft Electrician" "Aircraft Electrician"
* #7131.002 "Appliance Electrician" "Appliance Electrician"
* #7131.003 "Appliance Serviceman" "Appliance Serviceman"
* #7131.004 "Auto Electrician" "Auto Electrician"
* #7131.005 "Automotive Electrician" "Automotive Electrician"
* #7131.006 "Car Electrician" "Car Electrician"
* #7131.007 "Domestic Appliance Fitter" "Domestic Appliance Fitter"
* #7131.008 "Domestic Electrician" "Domestic Electrician"
* #7131.009 "Electrical Appliance Serviceman" "Electrical Appliance Serviceman"
* #7131.010 "Electrical Appliance Servicer" "Electrical Appliance Servicer"
* #7131.011 "Electrical Contractor" "Electrical Contractor"
* #7131.012 "Electrical Installer" "Electrical Installer"
* #7131.013 "Electrical Repairman" "Electrical Repairman"
* #7131.014 "Electrician" "Electrician"
* #7131.015 "Home Appliance Repairer" "Home Appliance Repairer"
* #7131.016 "Home Appliance Serviceman" "Home Appliance Serviceman"
* #7131.017 "Industrial Electrician" "Industrial Electrician"
* #7131.018 "Kaimahi Hihiko" "Kaimahi Hihiko"
* #7131.019 "Kaimahi Hiko" "Kaimahi Hiko"
* #7131.020 "Kaimahi Hikohiko" "Kaimahi Hikohiko"
* #7131.021 "Kaimahi Whakatikatika Taputapu Hiko" "Kaimahi Whakatikatika Taputapu Hiko"
* #7131.022 "Kaimahi Whakauru Hiko" "Kaimahi Whakauru Hiko"
* #7131.023 "Kaimahi Whakauru Taputapu Hiko" "Kaimahi Whakauru Taputapu Hiko"
* #7131.024 "Kaiwhakatika Hihiko" "Kaiwhakatika Hihiko"
* #7131.025 "Locomotive Electrician" "Locomotive Electrician"
* #7131.026 "Maintenance Electrician" "Maintenance Electrician"
* #7131.027 "Mine Electrician" "Mine Electrician"
* #7131.028 "Neon Lighting Electrician" "Neon Lighting Electrician"
* #7131.029 "Ships Electrician" "Ships Electrician"
* #7131.030 "Transport Electrician" "Transport Electrician"
* #7131.031 "Vehicle Electrician" "Vehicle Electrician"
* #7131.032 "Whiteware Serviceman" "Whiteware Serviceman"
* #7211.001 "Brass Founder Moulder" "Brass Founder Moulder"
* #7211.002 "Coremaker" "Coremaker"
* #7211.003 "Foundry Moulder" "Foundry Moulder"
* #7211.004 "Metal Mould Maker" "Metal Mould Maker"
* #7211.005 "Metal Mould Maker Supervisor" "Metal Mould Maker Supervisor"
* #7212.001 "Aircraft Body Maker" "Aircraft Body Maker"
* #7212.002 "Aluminium Worker" "Aluminium Worker"
* #7212.003 "Auto Body Repairer" "Auto Body Repairer"
* #7212.004 "Blind Maker Venetian" "Blind Maker Venetian"
* #7212.005 "Blind Repairer Venetian" "Blind Repairer Venetian"
* #7212.006 "Boiler Maker" "Boiler Maker"
* #7212.007 "Boilermaker" "Boilermaker"
* #7212.008 "Boilermaker Welder" "Boilermaker Welder"
* #7212.009 "Boilermakers Supervisor" "Boilermakers Supervisor"
* #7212.010 "Brassmith" "Brassmith"
* #7212.011 "Canister Maker" "Canister Maker"
* #7212.012 "Chassis Straightener" "Chassis Straightener"
* #7212.013 "Coach Builder" "Coach Builder"
* #7212.014 "Coach Building Supervisor" "Coach Building Supervisor"
* #7212.015 "Coachbuilder" "Coachbuilder"
* #7212.016 "Coppersmith" "Coppersmith"
* #7212.017 "Duct Erector" "Duct Erector"
* #7212.018 "Fabrication Engineer (Welding)" "Fabrication Engineer (Welding)"
* #7212.019 "Fitter and Welder" "Fitter and Welder"
* #7212.020 "Fitter and Welder Supervisor" "Fitter and Welder Supervisor"
* #7212.021 "Fitter Welder" "Fitter Welder"
* #7212.022 "Furniture Maker Metal" "Furniture Maker Metal"
* #7212.023 "Heavy Fabrication Engineer" "Heavy Fabrication Engineer"
* #7212.024 "Installer Sheetmetal" "Installer Sheetmetal"
* #7212.025 "Light Farbrication Engineer" "Light Farbrication Engineer"
* #7212.026 "Machine Riveter" "Machine Riveter"
* #7212.027 "Metal Boat or Ship Builder" "Metal Boat or Ship Builder"
* #7212.028 "Metal Caravan Builder" "Metal Caravan Builder"
* #7212.029 "Metal Coach and Carriage Builder" "Metal Coach and Carriage Builder"
* #7212.030 "Metal Marker Sheet Machine Shop" "Metal Marker Sheet Machine Shop"
* #7212.031 "Metal Sheeter" "Metal Sheeter"
* #7212.032 "Metal Shipwright" "Metal Shipwright"
* #7212.033 "Motor Body Builder" "Motor Body Builder"
* #7212.034 "Panel Beater" "Panel Beater"
* #7212.035 "Panelbeater" "Panelbeater"
* #7212.036 "Perambulator Maker" "Perambulator Maker"
* #7212.037 "Plate Layer" "Plate Layer"
* #7212.038 "Pressure Welder" "Pressure Welder"
* #7212.039 "Process Worker Sheet Metal" "Process Worker Sheet Metal"
* #7212.040 "Quality Controller Of Panelbeaters" "Quality Controller Of Panelbeaters"
* #7212.041 "Riveter" "Riveter"
* #7212.042 "Sheet Metal Marker" "Sheet Metal Marker"
* #7212.043 "Sheet Metal Production Supervisor" "Sheet Metal Production Supervisor"
* #7212.044 "Sheet Metal Work Supervisor" "Sheet Metal Work Supervisor"
* #7212.045 "Sheet Metal Worker Aircraft" "Sheet Metal Worker Aircraft"
* #7212.046 "Sheetmetal Engineer" "Sheetmetal Engineer"
* #7212.047 "Sheetmetal Worker" "Sheetmetal Worker"
* #7212.048 "Sheet-Metal Worker" "Sheet-Metal Worker"
* #7212.049 "Ship Plater" "Ship Plater"
* #7212.050 "Shipwright and Plater Metal Supervisor" "Shipwright and Plater Metal Supervisor"
* #7212.051 "Stainless Steel Fabricator" "Stainless Steel Fabricator"
* #7212.052 "Tinsmith" "Tinsmith"
* #7212.053 "Truck Builder" "Truck Builder"
* #7212.054 "Vehicle Body Builder" "Vehicle Body Builder"
* #7212.055 "Vehicle Body Repairman" "Vehicle Body Repairman"
* #7212.056 "Welding Tradesperson" "Welding Tradesperson"
* #7221.001 "Blacksmith" "Blacksmith"
* #7221.002 "Blacksmiths Striker" "Blacksmiths Striker"
* #7221.003 "Farrier" "Farrier"
* #7221.004 "Farrier Shoeing Smith" "Farrier Shoeing Smith"
* #7221.005 "Wrought Iron Worker" "Wrought Iron Worker"
* #7222.001 "Die Cutter" "Die Cutter"
* #7222.002 "Die Maker" "Die Maker"
* #7222.003 "Die Sinker" "Die Sinker"
* #7222.004 "Diemaker" "Diemaker"
* #7222.005 "Engineering Pattern Maker" "Engineering Pattern Maker"
* #7222.006 "Engineering Pattern Maker Supervisor" "Engineering Pattern Maker Supervisor"
* #7222.007 "Jig Mounter" "Jig Mounter"
* #7222.008 "Metal Foundry Template Maker" "Metal Foundry Template Maker"
* #7222.009 "Metal Pattern Maker" "Metal Pattern Maker"
* #7222.010 "Metal Profile Cutter" "Metal Profile Cutter"
* #7222.011 "Pattern Maker" "Pattern Maker"
* #7222.012 "Pattern Making Supervisor" "Pattern Making Supervisor"
* #7222.013 "Quality Controller Of Pattern Makers" "Quality Controller Of Pattern Makers"
* #7222.014 "Tool Maker" "Tool Maker"
* #7222.015 "Tool or Die Maker" "Tool or Die Maker"
* #7222.016 "Tool or Die Maker Supervisor" "Tool or Die Maker Supervisor"
* #7222.017 "Toolmaker" "Toolmaker"
* #7222.018 "Toolmaker and Designer" "Toolmaker and Designer"
* #7222.019 "Toolmakers Supervisor" "Toolmakers Supervisor"
* #7223.001 "Auto Diesel Fitter" "Auto Diesel Fitter"
* #7223.002 "Factory Workshop Engineering Fitter" "Factory Workshop Engineering Fitter"
* #7223.003 "Fitter Turner" "Fitter Turner"
* #7223.004 "Mechanical Fitter" "Mechanical Fitter"
* #7223.005 "Metal Lathe Tradesperson" "Metal Lathe Tradesperson"
* #7223.006 "Petrol Pump Fitter" "Petrol Pump Fitter"
* #7223.007 "Quality Controller Of Fitter Turners" "Quality Controller Of Fitter Turners"
* #7223.008 "Service Engineering Fitter" "Service Engineering Fitter"
* #7223.009 "Water Works Fitter" "Water Works Fitter"
* #7223.010 "Waterworks Fitter" "Waterworks Fitter"
* #7223.011 "Waterworks Maintenance Fitter" "Waterworks Maintenance Fitter"
* #7224.001 "Saw Doctor" "Saw Doctor"
* #7224.002 "Saw Repairer" "Saw Repairer"
* #7224.003 "Saw Setter" "Saw Setter"
* #7224.004 "Saw Sharpener" "Saw Sharpener"
* #7224.005 "Sawdoctor" "Sawdoctor"
* #7231.001 "Agricultural Machinery Mechanic" "Agricultural Machinery Mechanic"
* #7231.002 "Air Conditioning Mechanic" "Air Conditioning Mechanic"
* #7231.003 "Air Transport Workshop Planner" "Air Transport Workshop Planner"
* #7231.004 "Aircraft Engine Mechanic" "Aircraft Engine Mechanic"
* #7231.005 "Aircraft Engineering Serviceman" "Aircraft Engineering Serviceman"
* #7231.006 "Aircraft Engineering Tradesperson" "Aircraft Engineering Tradesperson"
* #7231.007 "Aircraft Simulator Mechanic" "Aircraft Simulator Mechanic"
* #7231.008 "Auto Engineer" "Auto Engineer"
* #7231.009 "Auto Mechanic" "Auto Mechanic"
* #7231.010 "Auto Wrecker" "Auto Wrecker"
* #7231.011 "Automobile Mechanic" "Automobile Mechanic"
* #7231.012 "Automotive Dismantler" "Automotive Dismantler"
* #7231.013 "Automotive Mechanic" "Automotive Mechanic"
* #7231.014 "Automotive Mechanic Engineer" "Automotive Mechanic Engineer"
* #7231.015 "Automotive Surveyor" "Automotive Surveyor"
* #7231.016 "Bicycle Repairman" "Bicycle Repairman"
* #7231.017 "Brake Repairman" "Brake Repairman"
* #7231.018 "Brake/Clutch Fitter" "Brake/Clutch Fitter"
* #7231.019 "Car Dismantler" "Car Dismantler"
* #7231.020 "Car Mechanic" "Car Mechanic"
* #7231.021 "Car Wrecker" "Car Wrecker"
* #7231.022 "Coin Machine Mechanic" "Coin Machine Mechanic"
* #7231.023 "Cold Storage Maintenace Serviceman" "Cold Storage Maintenace Serviceman"
* #7231.024 "Construction Machinery Mechanic" "Construction Machinery Mechanic"
* #7231.025 "Cooling System Mechanic" "Cooling System Mechanic"
* #7231.026 "Diesel Injector" "Diesel Injector"
* #7231.027 "Diesel Mechanic" "Diesel Mechanic"
* #7231.028 "Earthmoving Machinery Mechanic" "Earthmoving Machinery Mechanic"
* #7231.029 "Garage Mechanic Automobile" "Garage Mechanic Automobile"
* #7231.030 "Garden Machinery Repairer" "Garden Machinery Repairer"
* #7231.031 "Heating and Ventilating Mechanic" "Heating and Ventilating Mechanic"
* #7231.032 "Heating and Ventilation Mechanic" "Heating and Ventilation Mechanic"
* #7231.033 "Heating Control Mechanic" "Heating Control Mechanic"
* #7231.034 "Heating Ventilation and Air Conditioning Mechanic" "Heating Ventilation and Air Conditioning Mechanic"
* #7231.035 "Hosiery Knitting Machine Mechanic" "Hosiery Knitting Machine Mechanic"
* #7231.036 "Installer Refrigeration Air Conditioning" "Installer Refrigeration Air Conditioning"
* #7231.037 "Jacquard Machine Repairer" "Jacquard Machine Repairer"
* #7231.038 "Juke Box Serviceman" "Juke Box Serviceman"
* #7231.039 "Knitting Machine Setter" "Knitting Machine Setter"
* #7231.040 "Lawn Mower Mechanic" "Lawn Mower Mechanic"
* #7231.041 "Lawnmower Mechanic" "Lawnmower Mechanic"
* #7231.042 "Licensed Aircraft Mechanic" "Licensed Aircraft Mechanic"
* #7231.043 "Locomotive Maintainer" "Locomotive Maintainer"
* #7231.044 "Loom Fixer" "Loom Fixer"
* #7231.045 "Loom Tuner" "Loom Tuner"
* #7231.046 "Lube Bay Attendant or Operator" "Lube Bay Attendant or Operator"
* #7231.047 "Machinery Mechanic" "Machinery Mechanic"
* #7231.048 "Maintenance Fitter" "Maintenance Fitter"
* #7231.049 "Maintenance Mechanic" "Maintenance Mechanic"
* #7231.050 "Maintenance Plant Serviceman" "Maintenance Plant Serviceman"
* #7231.051 "Maintenance Serviceman Cold Storage" "Maintenance Serviceman Cold Storage"
* #7231.052 "Marine Engine Fitter" "Marine Engine Fitter"
* #7231.053 "Marine Mechanic" "Marine Mechanic"
* #7231.054 "Marine Superintendant Maintenance" "Marine Superintendant Maintenance"
* #7231.055 "Mechanical Products Inspector and Tester" "Mechanical Products Inspector and Tester"
* #7231.056 "Metal Working Machine Mechanic" "Metal Working Machine Mechanic"
* #7231.057 "Meter Tester" "Meter Tester"
* #7231.058 "Mill Serviceman Sawmill Maintenance" "Mill Serviceman Sawmill Maintenance"
* #7231.059 "Mine Machinery Mechanic" "Mine Machinery Mechanic"
* #7231.060 "Motor Mechanic" "Motor Mechanic"
* #7231.061 "Motor Mower Mechanic" "Motor Mower Mechanic"
* #7231.062 "Motor Mower Repairer" "Motor Mower Repairer"
* #7231.063 "Motor Vehicle Inspector" "Motor Vehicle Inspector"
* #7231.064 "Motor Vehicle Mechanic" "Motor Vehicle Mechanic"
* #7231.065 "Motorcycle Mechanic" "Motorcycle Mechanic"
* #7231.066 "Muffler/Exhaust Fitter" "Muffler/Exhaust Fitter"
* #7231.067 "Outboard Motor Mechanic" "Outboard Motor Mechanic"
* #7231.068 "Parking Meter Mechanic" "Parking Meter Mechanic"
* #7231.069 "Patrol Officer Automobile Association" "Patrol Officer Automobile Association"
* #7231.070 "Petrol Pump Maintenance Mechanic" "Petrol Pump Maintenance Mechanic"
* #7231.071 "Plant Maintenance Mechanic" "Plant Maintenance Mechanic"
* #7231.072 "Printing Machine Mechanic" "Printing Machine Mechanic"
* #7231.073 "Pump Mechanic" "Pump Mechanic"
* #7231.074 "Refrigeration Installer" "Refrigeration Installer"
* #7231.075 "Refrigeration Mechanic" "Refrigeration Mechanic"
* #7231.076 "Refrigeration Serviceman" "Refrigeration Serviceman"
* #7231.077 "Refrigeration Systems Mechanic" "Refrigeration Systems Mechanic"
* #7231.078 "Scooter Motorbike Mechanic" "Scooter Motorbike Mechanic"
* #7231.079 "Sewing Machine Mechanic" "Sewing Machine Mechanic"
* #7231.080 "Ships Engine Room Mechanic" "Ships Engine Room Mechanic"
* #7231.081 "Slot Machine Serviceman" "Slot Machine Serviceman"
* #7231.082 "Small Engine Mechanic" "Small Engine Mechanic"
* #7231.083 "Testing Machine Engineer" "Testing Machine Engineer"
* #7231.084 "Textile Machine Mechanic" "Textile Machine Mechanic"
* #7231.085 "Tractor Mechanic" "Tractor Mechanic"
* #7231.086 "Tractor Servicer" "Tractor Servicer"
* #7231.087 "Truck Mechanic" "Truck Mechanic"
* #7231.088 "Vehicle Dismantler" "Vehicle Dismantler"
* #7231.089 "Vehicle Radiator Mechanic" "Vehicle Radiator Mechanic"
* #7231.090 "Ventilation and Air Conditioning Installer" "Ventilation and Air Conditioning Installer"
* #7231.091 "Ventilation Mechanic" "Ventilation Mechanic"
* #7231.092 "Weaving and Knitting Machine Setter" "Weaving and Knitting Machine Setter"
* #7231.093 "Woodworking Machine Mechanic" "Woodworking Machine Mechanic"
* #7241.001 "Automatic Signal Maintenance Man" "Automatic Signal Maintenance Man"
* #7241.002 "Dynamo Fitter" "Dynamo Fitter"
* #7241.003 "Electric Motor and Generator Fitter" "Electric Motor and Generator Fitter"
* #7241.004 "Electrical Air Conditioning Fitter" "Electrical Air Conditioning Fitter"
* #7241.005 "Electrical Fitter" "Electrical Fitter"
* #7241.006 "Electrical Instrument Fitter" "Electrical Instrument Fitter"
* #7241.007 "Electrical Mechanic Fitter" "Electrical Mechanic Fitter"
* #7241.008 "Electrical Signal Adjuster Fitter" "Electrical Signal Adjuster Fitter"
* #7241.009 "Electrical Signalling Systems Fitter" "Electrical Signalling Systems Fitter"
* #7241.010 "Electrical Switch and Control Gear Fitter" "Electrical Switch and Control Gear Fitter"
* #7241.011 "Electrical Switchboard Fitter" "Electrical Switchboard Fitter"
* #7241.012 "Elevator Fitter" "Elevator Fitter"
* #7241.013 "Elevator Repair Person" "Elevator Repair Person"
* #7241.014 "Fire Alarm Technician" "Fire Alarm Technician"
* #7241.015 "Fire Equipment Serviceman Electrical" "Fire Equipment Serviceman Electrical"
* #7241.016 "Lift Fitter" "Lift Fitter"
* #7241.017 "Lift Mechanic" "Lift Mechanic"
* #7241.018 "Transformer Fitter" "Transformer Fitter"
* #7242.001 "Alarm Installer" "Alarm Installer"
* #7242.002 "Avionics Engineering Tradesperson" "Avionics Engineering Tradesperson"
* #7242.003 "Avionics Mechanic" "Avionics Mechanic"
* #7242.004 "Burglar Alarm Installer" "Burglar Alarm Installer"
* #7242.005 "Computer Engineering Mechanic" "Computer Engineering Mechanic"
* #7242.006 "Computer Engineering Serviceman" "Computer Engineering Serviceman"
* #7242.007 "Electronic Adjuster" "Electronic Adjuster"
* #7242.008 "Electronic Fitter" "Electronic Fitter"
* #7242.009 "Electronic Serviceman" "Electronic Serviceman"
* #7242.010 "Electronic Signal Adjuster Fitter" "Electronic Signal Adjuster Fitter"
* #7242.011 "Electronics Serviceperson" "Electronics Serviceperson"
* #7242.012 "Industrial Electronics Repairer" "Industrial Electronics Repairer"
* #7242.013 "Office Machinery Mechanic" "Office Machinery Mechanic"
* #7242.014 "Photocopier Technician" "Photocopier Technician"
* #7242.015 "Photocopying Machine Mechanic" "Photocopying Machine Mechanic"
* #7242.016 "Reprographic Machine Mechanic" "Reprographic Machine Mechanic"
* #7242.017 "Security Systems Fitter" "Security Systems Fitter"
* #7242.018 "Security Systems Installer" "Security Systems Installer"
* #7242.019 "Typewriter Serviceman Mechanic" "Typewriter Serviceman Mechanic"
* #7243.001 "Aerial Erector Radio Television" "Aerial Erector Radio Television"
* #7243.002 "Aerial Installer" "Aerial Installer"
* #7243.003 "Radar Fitter and Repairer" "Radar Fitter and Repairer"
* #7243.004 "Radio and Television Fitter" "Radio and Television Fitter"
* #7243.005 "Radio and Television Repairer" "Radio and Television Repairer"
* #7243.006 "Rigger Television Repairer" "Rigger Television Repairer"
* #7243.007 "Televions or Audio Equipment Repairer" "Televions or Audio Equipment Repairer"
* #7243.008 "Television Serviceman" "Television Serviceman"
* #7243.009 "Television Technician Repair" "Television Technician Repair"
* #7243.010 "TV Repairman" "TV Repairman"
* #7311.001 "Camera Repairer" "Camera Repairer"
* #7311.002 "Camera Repairman" "Camera Repairman"
* #7311.003 "Clock Maker" "Clock Maker"
* #7311.004 "Gunsmith" "Gunsmith"
* #7311.005 "Horologist" "Horologist"
* #7311.006 "Industrial Instrument Maker" "Industrial Instrument Maker"
* #7311.007 "Industrial Instrument Repairer" "Industrial Instrument Repairer"
* #7311.008 "Industrial Instrument Serviceman" "Industrial Instrument Serviceman"
* #7311.009 "Industrial Precision Instrument Maker Repairer" "Industrial Precision Instrument Maker Repairer"
* #7311.010 "Key Maker" "Key Maker"
* #7311.011 "Locksmith" "Locksmith"
* #7311.012 "Locksmiths Supervisor" "Locksmiths Supervisor"
* #7311.013 "Medical Instrument Repairer" "Medical Instrument Repairer"
* #7311.014 "Optical Glass Cutter" "Optical Glass Cutter"
* #7311.015 "Optical Glass Grinder" "Optical Glass Grinder"
* #7311.016 "Optical Glass Polisher" "Optical Glass Polisher"
* #7311.017 "Optical Instrument Maker and Repairer" "Optical Instrument Maker and Repairer"
* #7311.018 "Optical Instrument Repairer" "Optical Instrument Repairer"
* #7311.019 "Optical Mechanic" "Optical Mechanic"
* #7311.020 "Optical Technician" "Optical Technician"
* #7311.021 "Photographic Equipment Assembler" "Photographic Equipment Assembler"
* #7311.022 "Photographic Equipment Mechanic" "Photographic Equipment Mechanic"
* #7311.023 "Precision Instrument Maker" "Precision Instrument Maker"
* #7311.024 "Precision Instrument Maker Repairer Supervisor" "Precision Instrument Maker Repairer Supervisor"
* #7311.025 "Precision Instrument Repairer" "Precision Instrument Repairer"
* #7311.026 "Quality Controller Of Locksmiths" "Quality Controller Of Locksmiths"
* #7311.027 "Scale Mechanic Weights and Measures" "Scale Mechanic Weights and Measures"
* #7311.028 "Scientific Instrument Repairer" "Scientific Instrument Repairer"
* #7311.029 "Surgical Instrument Maker" "Surgical Instrument Maker"
* #7311.030 "Survey Instrument Repairer" "Survey Instrument Repairer"
* #7311.031 "Surveying Instrument Manufacturer" "Surveying Instrument Manufacturer"
* #7311.032 "Watch Maker" "Watch Maker"
* #7311.033 "Watch Repairer" "Watch Repairer"
* #7311.034 "Watchmaker" "Watchmaker"
* #7311.035 "Watchmaker and Repairer" "Watchmaker and Repairer"
* #7312.001 "Musical Instrument Maker" "Musical Instrument Maker"
* #7312.002 "Musical Instrument Repairer" "Musical Instrument Repairer"
* #7312.003 "Musical Instrument Tuner" "Musical Instrument Tuner"
* #7312.004 "Piano Tuner" "Piano Tuner"
* #7313.001 "Faceter" "Faceter"
* #7313.002 "Gem Cutter" "Gem Cutter"
* #7313.003 "Gem Cutter and Polisher" "Gem Cutter and Polisher"
* #7313.004 "Gem Polisher" "Gem Polisher"
* #7313.005 "Gem Setter" "Gem Setter"
* #7313.006 "Goldsmith" "Goldsmith"
* #7313.007 "Greenstone Worker" "Greenstone Worker"
* #7313.008 "Jade Worker" "Jade Worker"
* #7313.009 "Jeweller" "Jeweller"
* #7313.010 "Jewellery Engraver" "Jewellery Engraver"
* #7313.011 "Jewellery Form Caster" "Jewellery Form Caster"
* #7313.012 "Jewellery Manufacturer" "Jewellery Manufacturer"
* #7313.013 "Jewellery Repairer" "Jewellery Repairer"
* #7313.014 "Jewellery Worker" "Jewellery Worker"
* #7313.015 "Lapidary" "Lapidary"
* #7313.016 "Manufacturing Jeweller" "Manufacturing Jeweller"
* #7313.017 "Paua Shell Cutter Polisher" "Paua Shell Cutter Polisher"
* #7313.018 "Precious Metal Cutter" "Precious Metal Cutter"
* #7313.019 "Quality Controller Of Gem Cutter And Polishers" "Quality Controller Of Gem Cutter And Polishers"
* #7313.020 "Quality Controller Of Jeweller And Jewellery Workers" "Quality Controller Of Jeweller And Jewellery Workers"
* #7313.021 "Silversmith" "Silversmith"
* #7321.001 "Glass Beveller" "Glass Beveller"
* #7321.002 "Glass Cutter" "Glass Cutter"
* #7321.003 "Glass Cutter and Beveller" "Glass Cutter and Beveller"
* #7321.004 "Glass Engraver" "Glass Engraver"
* #7321.005 "Glass Etcher" "Glass Etcher"
* #7321.006 "Glass Finisher" "Glass Finisher"
* #7321.007 "Glass Sandblaster" "Glass Sandblaster"
* #7321.008 "Lens Glass Moulder" "Lens Glass Moulder"
* #7321.009 "Lens Grinding Machine Operator" "Lens Grinding Machine Operator"
* #7321.010 "Lens Polishing Machine Operator" "Lens Polishing Machine Operator"
* #7321.011 "Quality Controller Of Glass Cutter And Bevellers" "Quality Controller Of Glass Cutter And Bevellers"
* #7321.012 "Slitter Optical Glass" "Slitter Optical Glass"
* #7331.001 "Balloon Printer" "Balloon Printer"
* #7331.002 "Block Engraver Maker Printing" "Block Engraver Maker Printing"
* #7331.003 "Block Printer" "Block Printer"
* #7331.004 "Carton Printer" "Carton Printer"
* #7331.005 "Compositor" "Compositor"
* #7331.006 "Computer Typesetter" "Computer Typesetter"
* #7331.007 "Desktop Publisher" "Desktop Publisher"
* #7331.008 "Electrotyper" "Electrotyper"
* #7331.009 "Engraver Machine Operator Signs" "Engraver Machine Operator Signs"
* #7331.010 "Feeder Printing Press Supervisor" "Feeder Printing Press Supervisor"
* #7331.011 "Flexographic Printer" "Flexographic Printer"
* #7331.012 "Flyer Flyhand Printing" "Flyer Flyhand Printing"
* #7331.013 "Graphic Pre-Press Tradesperson" "Graphic Pre-Press Tradesperson"
* #7331.014 "Gravure Printer" "Gravure Printer"
* #7331.015 "Hot Metal Compositor" "Hot Metal Compositor"
* #7331.016 "Intertype Operator" "Intertype Operator"
* #7331.017 "Jobbing Printer" "Jobbing Printer"
* #7331.018 "Letter Press Printer" "Letter Press Printer"
* #7331.019 "Letterpress Machine Printer" "Letterpress Machine Printer"
* #7331.020 "Letterpress Machine Supervisor" "Letterpress Machine Supervisor"
* #7331.021 "Letterpress Machinist" "Letterpress Machinist"
* #7331.022 "Letterpress Printer" "Letterpress Printer"
* #7331.023 "Litho Carton Printer" "Litho Carton Printer"
* #7331.024 "Lithographic Machinist" "Lithographic Machinist"
* #7331.025 "Lithographic Plate Stone Engraver" "Lithographic Plate Stone Engraver"
* #7331.026 "Lithographic Plate Stone Maker polisher" "Lithographic Plate Stone Maker polisher"
* #7331.027 "Offset Duplicator" "Offset Duplicator"
* #7331.028 "Offset Machinist" "Offset Machinist"
* #7331.029 "Offset Pressman" "Offset Pressman"
* #7331.030 "Offset Printer" "Offset Printer"
* #7331.031 "Paperboard Packaging Printer" "Paperboard Packaging Printer"
* #7331.032 "Photo Typesetting Machine Operator" "Photo Typesetting Machine Operator"
* #7331.033 "Printer" "Printer"
* #7331.034 "Printer Wallpaper" "Printer Wallpaper"
* #7331.035 "Printing and Publishing Production Supervisor" "Printing and Publishing Production Supervisor"
* #7331.036 "Printing Founder" "Printing Founder"
* #7331.037 "Printing Imposer" "Printing Imposer"
* #7331.038 "Printing Machine Operator" "Printing Machine Operator"
* #7331.039 "Printing Machinist" "Printing Machinist"
* #7331.040 "Printing Press Feeder" "Printing Press Feeder"
* #7331.041 "Printing Supervisor" "Printing Supervisor"
* #7331.042 "Printing Typesetter" "Printing Typesetter"
* #7331.043 "Printing Worker" "Printing Worker"
* #7331.044 "Quality Controller Of Screen Printers" "Quality Controller Of Screen Printers"
* #7331.045 "Reel Fed Machine Supervisor" "Reel Fed Machine Supervisor"
* #7331.046 "Reel-Fed Machinist" "Reel-Fed Machinist"
* #7331.047 "Roll Winder" "Roll Winder"
* #7331.048 "Rotary Machinist" "Rotary Machinist"
* #7331.049 "Rotary Press Operator" "Rotary Press Operator"
* #7331.050 "Screen Printer" "Screen Printer"
* #7331.051 "Screen Printing Supervisor" "Screen Printing Supervisor"
* #7331.052 "Screener" "Screener"
* #7331.053 "Screenprinter" "Screenprinter"
* #7331.054 "Screenprinting Supervisor" "Screenprinting Supervisor"
* #7331.055 "Sheet Fed Machine Supervisor" "Sheet Fed Machine Supervisor"
* #7331.056 "Sheet Fed Machinist" "Sheet Fed Machinist"
* #7331.057 "Sheet Fed Printer" "Sheet Fed Printer"
* #7331.058 "Silk Screen Printer" "Silk Screen Printer"
* #7331.059 "Stencil Cutter Screen Printing" "Stencil Cutter Screen Printing"
* #7331.060 "Stereotyper" "Stereotyper"
* #7331.061 "T Shirt Printer" "T Shirt Printer"
* #7331.062 "Template Printer" "Template Printer"
* #7331.063 "Type Operator" "Type Operator"
* #7331.064 "Typecaster Metal" "Typecaster Metal"
* #7331.065 "Typecasting Machine Operator" "Typecasting Machine Operator"
* #7331.066 "Typesetter" "Typesetter"
* #7331.067 "Typesetter and Compositor" "Typesetter and Compositor"
* #7331.068 "Typesetter Linotype" "Typesetter Linotype"
* #7331.069 "Typesetting and Compositing Supervisor" "Typesetting and Compositing Supervisor"
* #7331.070 "Typographer" "Typographer"
* #7332.001 "Binder" "Binder"
* #7332.002 "Bindery Worker" "Bindery Worker"
* #7332.003 "Binding Assistant Worker" "Binding Assistant Worker"
* #7332.004 "Book Binder" "Book Binder"
* #7332.005 "Book Binding Supervisor" "Book Binding Supervisor"
* #7332.006 "Book Embosser" "Book Embosser"
* #7332.007 "Book Finisher" "Book Finisher"
* #7332.008 "Book Repairer" "Book Repairer"
* #7332.009 "Bookbinder" "Bookbinder"
* #7332.010 "Bookbinder Machinist" "Bookbinder Machinist"
* #7332.011 "Bookbinding Supervisor" "Bookbinding Supervisor"
* #7332.012 "Paper Embosser" "Paper Embosser"
* #7333.001 "Camera Operator Printing" "Camera Operator Printing"
* #7333.002 "Cameraman Photogravure" "Cameraman Photogravure"
* #7333.003 "Graphic Photoprocessor" "Graphic Photoprocessor"
* #7333.004 "Metal Engraver Etcher Printing" "Metal Engraver Etcher Printing"
* #7333.005 "Photo Engraver" "Photo Engraver"
* #7333.006 "Photo Lithographer" "Photo Lithographer"
* #7333.007 "Photo Mechanical Cameraman Printing" "Photo Mechanical Cameraman Printing"
* #7333.008 "Photo Mounter Router Printing" "Photo Mounter Router Printing"
* #7333.009 "Photo Retoucher" "Photo Retoucher"
* #7333.010 "Photoengraver" "Photoengraver"
* #7333.011 "Photographic Etcher" "Photographic Etcher"
* #7333.012 "Photolithographer" "Photolithographer"
* #7333.013 "Printing Process Engraver Etcher" "Printing Process Engraver Etcher"
* #7411.001 "Butcher" "Butcher"
* #7411.002 "Butcher Wholesale and Retail" "Butcher Wholesale and Retail"
* #7411.003 "Kaihoko Miiti" "Kaihoko Miiti"
* #7411.004 "Kaihoko Miti" "Kaihoko Miti"
* #7411.005 "Kaitapahi Miiti" "Kaitapahi Miiti"
* #7411.006 "Kaitapahi Miti" "Kaitapahi Miti"
* #7411.007 "Meat Grader" "Meat Grader"
* #7411.008 "Putia" "Putia"
* #7411.009 "Puutia" "Puutia"
* #7412.001 "Baker" "Baker"
* #7412.002 "Baker Cake Pastry" "Baker Cake Pastry"
* #7412.003 "Biscuit Maker" "Biscuit Maker"
* #7412.004 "Bread Baker" "Bread Baker"
* #7412.005 "Cake Decorator" "Cake Decorator"
* #7412.006 "Cake Decorator or Finisher" "Cake Decorator or Finisher"
* #7412.007 "Cake Maker" "Cake Maker"
* #7412.008 "Food Cake Decorator Finisher" "Food Cake Decorator Finisher"
* #7412.009 "Kaitaka Paraoa" "Kaitaka Paraoa"
* #7412.010 "Kaiwhakamaoa Paraoa" "Kaiwhakamaoa Paraoa"
* #7412.011 "Pastry Cook" "Pastry Cook"
* #7412.012 "Pastrycook" "Pastrycook"
* #7412.013 "Pastrycook Cake Maker" "Pastrycook Cake Maker"
* #7412.014 "Quality Controller Of Bakers" "Quality Controller Of Bakers"
* #7412.015 "Tangata Mahi Paraoa" "Tangata Mahi Paraoa"
* #7421.001 "Antique Furniture Restorer" "Antique Furniture Restorer"
* #7421.002 "Antique Restorer Wooden" "Antique Restorer Wooden"
* #7421.003 "Architects Model Maker" "Architects Model Maker"
* #7421.004 "Cabinet Maker" "Cabinet Maker"
* #7421.005 "Cabinet Making Supervisor" "Cabinet Making Supervisor"
* #7421.006 "Cabinetmaker" "Cabinetmaker"
* #7421.007 "Chair Maker" "Chair Maker"
* #7421.008 "Coffin Maker" "Coffin Maker"
* #7421.009 "Cooper" "Cooper"
* #7421.010 "French Polisher" "French Polisher"
* #7421.011 "Furniture Finisher" "Furniture Finisher"
* #7421.012 "Furniture Maker Wood" "Furniture Maker Wood"
* #7421.013 "Furniture Polisher" "Furniture Polisher"
* #7421.014 "Furniture Restorer" "Furniture Restorer"
* #7421.015 "Marquetry Inlayer" "Marquetry Inlayer"
* #7421.016 "Model Maker Wood" "Model Maker Wood"
* #7421.017 "Overseer Wood Joinery Furniture" "Overseer Wood Joinery Furniture"
* #7421.018 "Parquetry Worker" "Parquetry Worker"
* #7421.019 "Picture Framer" "Picture Framer"
* #7421.020 "Production Chargehand Wood Joinery Furniture" "Production Chargehand Wood Joinery Furniture"
* #7421.021 "Quality Controller Of Cabinet Makers" "Quality Controller Of Cabinet Makers"
* #7421.022 "Spray Polisher Wood" "Spray Polisher Wood"
* #7421.023 "Veneer Worker" "Veneer Worker"
* #7421.024 "Wheelwright" "Wheelwright"
* #7421.025 "Wood Bender" "Wood Bender"
* #7421.026 "Wooden Pattern Maker" "Wooden Pattern Maker"
* #7421.027 "Woodwork Instructor" "Woodwork Instructor"
* #7431.001 "Bespoke Tailor" "Bespoke Tailor"
* #7431.002 "Boutique Dressmaker" "Boutique Dressmaker"
* #7431.003 "Chart Cutter" "Chart Cutter"
* #7431.004 "Clothing Cutter" "Clothing Cutter"
* #7431.005 "Coat Hand" "Coat Hand"
* #7431.006 "Corset and Foundations Corsetiere" "Corset and Foundations Corsetiere"
* #7431.007 "Cutter Fur" "Cutter Fur"
* #7431.008 "Dress Maker" "Dress Maker"
* #7431.009 "Dressmaker" "Dressmaker"
* #7431.010 "Fabric Cutter" "Fabric Cutter"
* #7431.011 "Fur Grader" "Fur Grader"
* #7431.012 "Fur Tailor" "Fur Tailor"
* #7431.013 "Furrier" "Furrier"
* #7431.014 "Garment Cutter" "Garment Cutter"
* #7431.015 "Garment Maker" "Garment Maker"
* #7431.016 "Garment Marker" "Garment Marker"
* #7431.017 "Garment Pattern Cutter" "Garment Pattern Cutter"
* #7431.018 "Garment Pattern Maker" "Garment Pattern Maker"
* #7431.019 "Glove Cutter" "Glove Cutter"
* #7431.020 "Glove Maker Fabric" "Glove Maker Fabric"
* #7431.021 "Leather Chart Cutter" "Leather Chart Cutter"
* #7431.022 "Leather Garment Cutter" "Leather Garment Cutter"
* #7431.023 "Lingerie Maker" "Lingerie Maker"
* #7431.024 "Quality Controller Of Textile Products Marker" "Quality Controller Of Textile Products Marker"
* #7431.025 "Sewer Fur" "Sewer Fur"
* #7431.026 "Shirt Maker" "Shirt Maker"
* #7431.027 "Tailor" "Tailor"
* #7431.028 "Tailors Trimmer" "Tailors Trimmer"
* #7431.029 "Textile Products Cutter" "Textile Products Cutter"
* #7431.030 "Textile Products Cutting Worker" "Textile Products Cutting Worker"
* #7431.031 "Textile Products Maker" "Textile Products Maker"
* #7431.032 "Textile Products Marker and Cutter" "Textile Products Marker and Cutter"
* #7431.033 "Textile Products Marking Worker" "Textile Products Marking Worker"
* #7431.034 "Textile Products Pattern Maker" "Textile Products Pattern Maker"
* #7431.035 "Tie Maker" "Tie Maker"
* #7431.036 "Trouser Hand" "Trouser Hand"
* #7431.037 "Upholsterer Pattern Maker" "Upholsterer Pattern Maker"
* #7431.038 "Upholstery Pattern Maker" "Upholstery Pattern Maker"
* #7431.039 "Vest Hand" "Vest Hand"
* #7431.040 "Viewer Clothing Factory" "Viewer Clothing Factory"
* #7431.041 "Wardrobe Assistant" "Wardrobe Assistant"
* #7431.042 "Wardrobe Mistress" "Wardrobe Mistress"
* #7432.001 "Automobile Upholsterer" "Automobile Upholsterer"
* #7432.002 "Awning Maker" "Awning Maker"
* #7432.003 "Blind Maker and Installer not Venetian" "Blind Maker and Installer not Venetian"
* #7432.004 "Blind Maker not Venetian" "Blind Maker not Venetian"
* #7432.005 "Canvas Awning Installer" "Canvas Awning Installer"
* #7432.006 "Canvas Upholstery Cutter" "Canvas Upholstery Cutter"
* #7432.007 "Canvas Worker" "Canvas Worker"
* #7432.008 "Canvas Worker Supervisor" "Canvas Worker Supervisor"
* #7432.009 "Car Coach Trimmer" "Car Coach Trimmer"
* #7432.010 "Car Coach Upholsterer" "Car Coach Upholsterer"
* #7432.011 "Car Trimmer" "Car Trimmer"
* #7432.012 "Car Upholsterer" "Car Upholsterer"
* #7432.013 "Chair Upholsterer" "Chair Upholsterer"
* #7432.014 "Furniture Trimmer" "Furniture Trimmer"
* #7432.015 "Furniture Upholsterer" "Furniture Upholsterer"
* #7432.016 "Horsehair Worker" "Horsehair Worker"
* #7432.017 "Mattress Maker" "Mattress Maker"
* #7432.018 "Mattress Maker Worker" "Mattress Maker Worker"
* #7432.019 "Mattress Sewer" "Mattress Sewer"
* #7432.020 "Motor Trimmer" "Motor Trimmer"
* #7432.021 "Quality Controller Of Canvas Workers" "Quality Controller Of Canvas Workers"
* #7432.022 "Quality Controller Of Furniture Upholsterers" "Quality Controller Of Furniture Upholsterers"
* #7432.023 "Quality Controller Of Vehicle Upholsterer And Trimmer" "Quality Controller Of Vehicle Upholsterer And Trimmer"
* #7432.024 "Soft Furnishing Upholsterer" "Soft Furnishing Upholsterer"
* #7432.025 "Springerup Upholstery Mattresses" "Springerup Upholstery Mattresses"
* #7432.026 "Tarpaulin Maker" "Tarpaulin Maker"
* #7432.027 "Vehicle Trimmer" "Vehicle Trimmer"
* #7432.028 "Vehicle Upholsterer" "Vehicle Upholsterer"
* #7432.029 "Vehicle Upholsterer and Trimmer" "Vehicle Upholsterer and Trimmer"
* #7432.030 "Wire Mattress Maker" "Wire Mattress Maker"
* #7433.001 "Carpet and Other Floor Covering Layer" "Carpet and Other Floor Covering Layer"
* #7433.002 "Carpet and Vinyl Layer" "Carpet and Vinyl Layer"
* #7433.003 "Carpet Cutter" "Carpet Cutter"
* #7433.004 "Carpet Installer" "Carpet Installer"
* #7433.005 "Carpet Layer" "Carpet Layer"
* #7433.006 "Carpet Layer Planner" "Carpet Layer Planner"
* #7433.007 "Carpet Vinyl Fitter" "Carpet Vinyl Fitter"
* #7433.008 "Floor Covering Installer" "Floor Covering Installer"
* #7433.009 "Floor Layer Parquetry" "Floor Layer Parquetry"
* #7433.010 "Floor Sander" "Floor Sander"
* #7433.011 "Flooring Contractor" "Flooring Contractor"
* #7433.012 "Flooring Specialist" "Flooring Specialist"
* #7433.013 "Floorsander" "Floorsander"
* #7433.014 "Layer Flooring" "Layer Flooring"
* #7433.015 "Layer Flooring Particle Board" "Layer Flooring Particle Board"
* #7433.016 "Lino Layer" "Lino Layer"
* #7433.017 "Linoleum Layer" "Linoleum Layer"
* #7433.018 "Quality Controller of Carpet and Other Floor Layers" "Quality Controller of Carpet and Other Floor Layers"
* #7433.019 "Vinyl Layer" "Vinyl Layer"
* #7441.001 "Boot Repairer" "Boot Repairer"
* #7441.002 "Cobbler" "Cobbler"
* #7441.003 "Footwear Repairer" "Footwear Repairer"
* #7441.004 "Quality Controller Of Shoe Repairers" "Quality Controller Of Shoe Repairers"
* #7441.005 "Saddler and Harness Maker" "Saddler and Harness Maker"
* #7441.006 "Shoe Repairer" "Shoe Repairer"
* #8111.001 "Bentonite Miner Sluicer" "Bentonite Miner Sluicer"
* #8111.002 "Building Stone Quarryman" "Building Stone Quarryman"
* #8111.003 "Cement Clay Lime Quarryman" "Cement Clay Lime Quarryman"
* #8111.004 "Coal Crushing Machine Operator" "Coal Crushing Machine Operator"
* #8111.005 "Coal Hewer" "Coal Hewer"
* #8111.006 "Coal Miner" "Coal Miner"
* #8111.007 "Collier" "Collier"
* #8111.008 "Copper Miner" "Copper Miner"
* #8111.009 "Crusher Operator Minerals" "Crusher Operator Minerals"
* #8111.010 "Gold Miner" "Gold Miner"
* #8111.011 "Gravel Worker" "Gravel Worker"
* #8111.012 "Marble Quarryman" "Marble Quarryman"
* #8111.013 "Mine Driller" "Mine Driller"
* #8111.014 "Mine Sampler" "Mine Sampler"
* #8111.015 "Mine Worker" "Mine Worker"
* #8111.016 "Miner" "Miner"
* #8111.017 "Mining Blaster" "Mining Blaster"
* #8111.018 "Mining Chargeman" "Mining Chargeman"
* #8111.019 "Mining Plant Operator" "Mining Plant Operator"
* #8111.020 "Mining Surfaceman" "Mining Surfaceman"
* #8111.021 "Mining Worker" "Mining Worker"
* #8111.022 "Production Foreman Overseer Mining Quarrying" "Production Foreman Overseer Mining Quarrying"
* #8111.023 "Production Supervisor Miners Quarrymen" "Production Supervisor Miners Quarrymen"
* #8111.024 "Production Supervisor Mining Plant Operators" "Production Supervisor Mining Plant Operators"
* #8111.025 "Quality Controller of Quarry and Mine Workers" "Quality Controller of Quarry and Mine Workers"
* #8111.026 "Quarry and Mine Working Supervisor" "Quarry and Mine Working Supervisor"
* #8111.027 "Quarry Hand" "Quarry Hand"
* #8111.028 "Quarry Worker" "Quarry Worker"
* #8111.029 "Quarrying Blaster" "Quarrying Blaster"
* #8111.030 "Quarrying Overseer Foreman" "Quarrying Overseer Foreman"
* #8111.031 "Quarrying Shot Firer" "Quarrying Shot Firer"
* #8111.032 "Quarrying Worker" "Quarrying Worker"
* #8111.033 "Sand Pit Worker" "Sand Pit Worker"
* #8111.034 "Scheelite Miner" "Scheelite Miner"
* #8111.035 "Shift Boss Mine" "Shift Boss Mine"
* #8111.036 "Shot Firer" "Shot Firer"
* #8111.037 "Shuttle Car Operator Mine" "Shuttle Car Operator Mine"
* #8111.038 "Silver Miner" "Silver Miner"
* #8112.001 "Crusher Quarry" "Crusher Quarry"
* #8112.002 "Grinder Quarry" "Grinder Quarry"
* #8112.003 "Lime Miller" "Lime Miller"
* #8112.004 "Mineral and Stone Treater" "Mineral and Stone Treater"
* #8112.005 "Ore Crusher Operator" "Ore Crusher Operator"
* #8112.006 "Quarry Jig Operator" "Quarry Jig Operator"
* #8112.007 "Rock and Clay Grinder" "Rock and Clay Grinder"
* #8112.008 "Screen Worker Mine or Quarry" "Screen Worker Mine or Quarry"
* #8112.009 "Stone Crusher" "Stone Crusher"
* #8112.010 "Stone Splitter" "Stone Splitter"
* #8113.001 "Bore Driller" "Bore Driller"
* #8113.002 "Bore Driller Thermal Steam" "Bore Driller Thermal Steam"
* #8113.003 "Cable Driller" "Cable Driller"
* #8113.004 "Derrick Worker" "Derrick Worker"
* #8113.005 "Driller" "Driller"
* #8113.006 "Oil and Gas Caser" "Oil and Gas Caser"
* #8113.007 "Oil and Gas Cementer" "Oil and Gas Cementer"
* #8113.008 "Oil and Gas Derrickman" "Oil and Gas Derrickman"
* #8113.009 "Oil Rig Floorman" "Oil Rig Floorman"
* #8113.010 "Overseer Foreman Oil and Gas Drilling" "Overseer Foreman Oil and Gas Drilling"
* #8113.011 "Rotary Driller" "Rotary Driller"
* #8113.012 "Roughneck Oil Well Drilling" "Roughneck Oil Well Drilling"
* #8113.013 "Supervisor Oil And Gas Drilling" "Supervisor Oil And Gas Drilling"
* #8113.014 "Well Borer" "Well Borer"
* #8113.015 "Well Caser" "Well Caser"
* #8113.016 "Well Driller" "Well Driller"
* #8113.017 "Well Sinker" "Well Sinker"
* #8121.001 "Cupola Furnaceman" "Cupola Furnaceman"
* #8121.002 "Die Press Operator Forging" "Die Press Operator Forging"
* #8121.003 "Drop Hammer Operator" "Drop Hammer Operator"
* #8121.004 "Electric Arc Furnaceman" "Electric Arc Furnaceman"
* #8121.005 "Forge Hammer Operator" "Forge Hammer Operator"
* #8121.006 "Forging Press Operator" "Forging Press Operator"
* #8121.007 "Furnace Operator Metallic Supervisor" "Furnace Operator Metallic Supervisor"
* #8121.008 "Furnaceman Ore Smelting" "Furnaceman Ore Smelting"
* #8121.009 "Ingot Operator" "Ingot Operator"
* #8121.010 "Metal Annealer" "Metal Annealer"
* #8121.011 "Metal Hardener" "Metal Hardener"
* #8121.012 "Metal Melter Reheater" "Metal Melter Reheater"
* #8121.013 "Metal Temperer" "Metal Temperer"
* #8121.014 "Metallic Furnace Operator" "Metallic Furnace Operator"
* #8121.015 "Metallic Furnace Supervisor" "Metallic Furnace Supervisor"
* #8121.016 "Pot Operator" "Pot Operator"
* #8121.017 "Power Hammer Operator" "Power Hammer Operator"
* #8121.018 "Press Operator Metal Forging" "Press Operator Metal Forging"
* #8121.019 "Quality Controller Of Metallic Furnace Operators" "Quality Controller Of Metallic Furnace Operators"
* #8121.020 "Steam Hammer Operator" "Steam Hammer Operator"
* #8122.001 "Continuous Rod Casting Machine Operator" "Continuous Rod Casting Machine Operator"
* #8122.002 "Die Casting Machine Operator" "Die Casting Machine Operator"
* #8122.003 "Fettler" "Fettler"
* #8122.004 "Foundry Worker" "Foundry Worker"
* #8122.005 "Iron Machinist Foundry" "Iron Machinist Foundry"
* #8122.006 "Metal Burnisher" "Metal Burnisher"
* #8122.007 "Metal Caster" "Metal Caster"
* #8122.008 "Metal Casting Supervisor" "Metal Casting Supervisor"
* #8122.009 "Metal Conveyor Operator" "Metal Conveyor Operator"
* #8122.010 "Metal Pourer Foundry" "Metal Pourer Foundry"
* #8122.011 "Quality Controller of Metal Casters" "Quality Controller of Metal Casters"
* #8122.012 "Rolling Mill Operator" "Rolling Mill Operator"
* #8122.013 "Sandblaster Metal Castings" "Sandblaster Metal Castings"
* #8122.014 "Shot Blaster Castings" "Shot Blaster Castings"
* #8122.015 "Steel Caster" "Steel Caster"
* #8122.016 "Steel Tube Mill Operator" "Steel Tube Mill Operator"
* #8122.017 "Steel Worker" "Steel Worker"
* #8122.018 "Steel Working Process Worker" "Steel Working Process Worker"
* #8122.019 "Steelworker" "Steelworker"
* #8122.020 "Steelworking Process Worker" "Steelworking Process Worker"
* #8123.001 "Argon Welder" "Argon Welder"
* #8123.002 "Brazer" "Brazer"
* #8123.003 "Carbon Dioxide Welder" "Carbon Dioxide Welder"
* #8123.004 "Electric Arc Cutter" "Electric Arc Cutter"
* #8123.005 "Electric Arc Welder" "Electric Arc Welder"
* #8123.006 "Flame Cutter" "Flame Cutter"
* #8123.007 "Gas Cutter" "Gas Cutter"
* #8123.008 "General Welder" "General Welder"
* #8123.009 "Lead Burner" "Lead Burner"
* #8123.010 "Lead Worker" "Lead Worker"
* #8123.011 "Oxyacetylene Gas Welder" "Oxyacetylene Gas Welder"
* #8123.012 "Solderer and Brazer" "Solderer and Brazer"
* #8123.013 "Spot Welder Operator" "Spot Welder Operator"
* #8123.014 "Welder and Flame Cutter" "Welder and Flame Cutter"
* #8123.015 "Welding Inspector" "Welding Inspector"
* #8123.016 "Welding Superintendent" "Welding Superintendent"
* #8124.001 "Manipulator Metal Rolling Mill Worker" "Manipulator Metal Rolling Mill Worker"
* #8124.002 "Metal Drawer" "Metal Drawer"
* #8124.003 "Metal Drawer or Extruder" "Metal Drawer or Extruder"
* #8124.004 "Metal Drawer Supervisor" "Metal Drawer Supervisor"
* #8124.005 "Metal Extruder" "Metal Extruder"
* #8124.006 "Metal Extruder Operator" "Metal Extruder Operator"
* #8124.007 "Metal Extrusion Press Operator" "Metal Extrusion Press Operator"
* #8124.008 "Metal Normaliser" "Metal Normaliser"
* #8124.009 "Metal Pipe and Tube Drawer" "Metal Pipe and Tube Drawer"
* #8124.010 "Wire Drawer" "Wire Drawer"
* #8124.011 "Wire Drawing Process Worker" "Wire Drawing Process Worker"
* #8131.001 "Brick and Tile Drawer and Setter" "Brick and Tile Drawer and Setter"
* #8131.002 "Brick and Tile Kilnman" "Brick and Tile Kilnman"
* #8131.003 "Brick and Tile Maker Moulder Presser" "Brick and Tile Maker Moulder Presser"
* #8131.004 "Brick Maker" "Brick Maker"
* #8131.005 "Brickmaker" "Brickmaker"
* #8131.006 "Brickmaking Process Worker" "Brickmaking Process Worker"
* #8131.007 "Ceramic Porcelain Pottery Presser" "Ceramic Porcelain Pottery Presser"
* #8131.008 "Ceramics Worker" "Ceramics Worker"
* #8131.009 "Ceramist" "Ceramist"
* #8131.010 "Clay Mixer" "Clay Mixer"
* #8131.011 "Clay Mould Plant Operator" "Clay Mould Plant Operator"
* #8131.012 "Clay Product Plant Operator" "Clay Product Plant Operator"
* #8131.013 "Glass Furnaceman" "Glass Furnaceman"
* #8131.014 "Kiln Burner Lime" "Kiln Burner Lime"
* #8131.015 "Kilnman Ovenman Kilnburner" "Kilnman Ovenman Kilnburner"
* #8131.016 "Non Metallic Mineral Products Kiln Operator" "Non Metallic Mineral Products Kiln Operator"
* #8131.017 "Non Metallic Mineral Products Kiln or Furnace Operator" "Non Metallic Mineral Products Kiln or Furnace Operator"
* #8131.018 "Nonmetallic Mineral Products Kiln Operator" "Nonmetallic Mineral Products Kiln Operator"
* #8131.019 "Porcelain Factory Worker" "Porcelain Factory Worker"
* #8131.020 "Potter" "Potter"
* #8131.021 "Pottery and Porcelain Cutter" "Pottery and Porcelain Cutter"
* #8131.022 "Pottery and Porcelain Modeller" "Pottery and Porcelain Modeller"
* #8131.023 "Pottery and Porcelain Mould Maker" "Pottery and Porcelain Mould Maker"
* #8131.024 "Pottery and Porcelain Mould Making Supervisor" "Pottery and Porcelain Mould Making Supervisor"
* #8131.025 "Pottery Insulator Maker" "Pottery Insulator Maker"
* #8131.026 "Pottery Pipe Maker" "Pottery Pipe Maker"
* #8131.027 "Pottery Process Worker" "Pottery Process Worker"
* #8131.028 "Tile Maker" "Tile Maker"
* #8132.001 "Bottle Making Machine Operator" "Bottle Making Machine Operator"
* #8132.002 "Ceramics Dipper and Glazer" "Ceramics Dipper and Glazer"
* #8132.003 "Ceramics Enameller" "Ceramics Enameller"
* #8132.004 "Decorative Glass Finisher" "Decorative Glass Finisher"
* #8132.005 "Factory Hand Fibreglass Moulding" "Factory Hand Fibreglass Moulding"
* #8132.006 "Fibreglass Laminating Process Worker" "Fibreglass Laminating Process Worker"
* #8132.007 "Fibreglass Laminator" "Fibreglass Laminator"
* #8132.008 "Fibreglass Pattern Maker" "Fibreglass Pattern Maker"
* #8132.009 "Fibreglass Process Worker" "Fibreglass Process Worker"
* #8132.010 "Fibreglass Worker" "Fibreglass Worker"
* #8132.011 "Fibreglass Worker and Maker" "Fibreglass Worker and Maker"
* #8132.012 "Fibreglasser" "Fibreglasser"
* #8132.013 "Glass and Ceramics Decorator" "Glass and Ceramics Decorator"
* #8132.014 "Glass and Ceramics Decorator Supervisor" "Glass and Ceramics Decorator Supervisor"
* #8132.015 "Glass and Ceramics Painter and Decorator" "Glass and Ceramics Painter and Decorator"
* #8132.016 "Glass Bender" "Glass Bender"
* #8132.017 "Glass Blower" "Glass Blower"
* #8132.018 "Glass Decorator" "Glass Decorator"
* #8132.019 "Glass Drawing Machine Operator" "Glass Drawing Machine Operator"
* #8132.020 "Glass Drawing Machine Operator Supervisor" "Glass Drawing Machine Operator Supervisor"
* #8132.021 "Glass Fibre Maker" "Glass Fibre Maker"
* #8132.022 "Glass Fibre Process Worker" "Glass Fibre Process Worker"
* #8132.023 "Glass Flanger" "Glass Flanger"
* #8132.024 "Glass Maker" "Glass Maker"
* #8132.025 "Glass Making Process Worker" "Glass Making Process Worker"
* #8132.026 "Glass Mould Blower" "Glass Mould Blower"
* #8132.027 "Glass Polisher" "Glass Polisher"
* #8132.028 "Glass Pressing and Drawing Machine Supervisor" "Glass Pressing and Drawing Machine Supervisor"
* #8132.029 "Glass Pressing Machine Operator" "Glass Pressing Machine Operator"
* #8132.030 "Glass Silverer" "Glass Silverer"
* #8132.031 "Glass Worker" "Glass Worker"
* #8132.032 "Glaze Maker" "Glaze Maker"
* #8132.033 "Mirror Silverer" "Mirror Silverer"
* #8132.034 "Plate Glass Roller" "Plate Glass Roller"
* #8132.035 "Quality Controller Of Glass And Ceramics Painters" "Quality Controller Of Glass And Ceramics Painters"
* #8132.036 "Scientific Glass Blower" "Scientific Glass Blower"
* #8132.037 "Sun Tint Filmer Glass" "Sun Tint Filmer Glass"
* #8141.001 "Benchman Sawmill" "Benchman Sawmill"
* #8141.002 "Breast Bench Sawyer" "Breast Bench Sawyer"
* #8141.003 "Chipper Operator" "Chipper Operator"
* #8141.004 "Log Chipping Machine Operator" "Log Chipping Machine Operator"
* #8141.005 "Planer Timber Machinery" "Planer Timber Machinery"
* #8141.006 "Post Cutter" "Post Cutter"
* #8141.007 "Precision Timber Machinist" "Precision Timber Machinist"
* #8141.008 "Quality Controller Of Timber Grader Classers" "Quality Controller Of Timber Grader Classers"
* #8141.009 "Sawmill Band Saw Operator" "Sawmill Band Saw Operator"
* #8141.010 "Sawmill Docker" "Sawmill Docker"
* #8141.011 "Sawmill Firewood Machinist" "Sawmill Firewood Machinist"
* #8141.012 "Sawmill Hand" "Sawmill Hand"
* #8141.013 "Sawmill Peel Operator" "Sawmill Peel Operator"
* #8141.014 "Sawmill Process Worker" "Sawmill Process Worker"
* #8141.015 "Sawmill Skidman" "Sawmill Skidman"
* #8141.016 "Sawmill Table Hand" "Sawmill Table Hand"
* #8141.017 "Sawmill Tallyman" "Sawmill Tallyman"
* #8141.018 "Sawmill Timber Machine Operator" "Sawmill Timber Machine Operator"
* #8141.019 "Sawmill Worker" "Sawmill Worker"
* #8141.020 "Sawmill Yardman" "Sawmill Yardman"
* #8141.021 "Sawmiller" "Sawmiller"
* #8141.022 "Sawyer" "Sawyer"
* #8141.023 "Sawyer Woodwork" "Sawyer Woodwork"
* #8141.024 "Solidwood Process Operator" "Solidwood Process Operator"
* #8141.025 "Tailer Out Sawmill" "Tailer Out Sawmill"
* #8141.026 "Tallyman Timber Yard" "Tallyman Timber Yard"
* #8141.027 "Timber Classer Grader Supervisor" "Timber Classer Grader Supervisor"
* #8141.028 "Timber Forest Products Inspector" "Timber Forest Products Inspector"
* #8141.029 "Timber Grader Classer" "Timber Grader Classer"
* #8141.030 "Timber Inspector Forests" "Timber Inspector Forests"
* #8141.031 "Timber Overseer Forestry" "Timber Overseer Forestry"
* #8141.032 "Timber Processing Machine Operator" "Timber Processing Machine Operator"
* #8141.033 "Timber Processing Machine Supervisor" "Timber Processing Machine Supervisor"
* #8141.034 "Timber Sorter" "Timber Sorter"
* #8141.035 "Timber Stripper" "Timber Stripper"
* #8142.001 "Beater Operator Pulp" "Beater Operator Pulp"
* #8142.002 "Bleacher Operator Pulp Making" "Bleacher Operator Pulp Making"
* #8142.003 "Boilerman Paper Pulp Production" "Boilerman Paper Pulp Production"
* #8142.004 "Paper Pulp Digestor Operator" "Paper Pulp Digestor Operator"
* #8142.005 "Paper Pulp Preparer Production Worker" "Paper Pulp Preparer Production Worker"
* #8142.006 "Paper Pulp Production Supervisor" "Paper Pulp Production Supervisor"
* #8142.007 "Pulp Mill Worker" "Pulp Mill Worker"
* #8142.008 "Pulp Production Supervisor" "Pulp Production Supervisor"
* #8142.009 "Pulp Production Worker" "Pulp Production Worker"
* #8142.010 "Quality Controller Of Pulp Production Workers" "Quality Controller Of Pulp Production Workers"
* #8142.011 "Wood Grinder Paper Pulp" "Wood Grinder Paper Pulp"
* #8142.012 "Wood Pulp Worker" "Wood Pulp Worker"
* #8143.001 "Fibreboard Maker" "Fibreboard Maker"
* #8143.002 "Paper Blendman" "Paper Blendman"
* #8143.003 "Paper Maker" "Paper Maker"
* #8143.004 "Paper Making Machine Operator" "Paper Making Machine Operator"
* #8143.005 "Paper Making Production Supervisor" "Paper Making Production Supervisor"
* #8143.006 "Paper Mill Drier Man" "Paper Mill Drier Man"
* #8143.007 "Paper Mill Finisher" "Paper Mill Finisher"
* #8143.008 "Paper Mill Machinist" "Paper Mill Machinist"
* #8143.009 "Paper Production Back End Machine Operator" "Paper Production Back End Machine Operator"
* #8143.010 "Paper Production Supervisor" "Paper Production Supervisor"
* #8143.011 "Paper Production Worker" "Paper Production Worker"
* #8143.012 "Paper Products Coating Machinist" "Paper Products Coating Machinist"
* #8143.013 "Paper Slitting Machine Operator" "Paper Slitting Machine Operator"
* #8143.014 "Paper Supercalender Operator" "Paper Supercalender Operator"
* #8143.015 "Paper Tester" "Paper Tester"
* #8143.016 "Quality Controller of Paper Production Workers" "Quality Controller of Paper Production Workers"
* #8143.017 "Strawboard Maker" "Strawboard Maker"
* #8143.018 "Wet End Machine Operator Paper Making" "Wet End Machine Operator Paper Making"
* #8143.019 "Wood Grinding Paper Pulp Worker" "Wood Grinding Paper Pulp Worker"
* #8151.001 "Cement Grinder Miller" "Cement Grinder Miller"
* #8151.002 "Chemical Crusher" "Chemical Crusher"
* #8151.003 "Chemical Crusher Grinder Mixer Supervisor" "Chemical Crusher Grinder Mixer Supervisor"
* #8151.004 "Chemical Crushing Grinding and Mixing Operators" "Chemical Crushing Grinding and Mixing Operators"
* #8151.005 "Chemical Grinder" "Chemical Grinder"
* #8151.006 "Chemical Mixer" "Chemical Mixer"
* #8151.007 "Chemical Processes Crusher" "Chemical Processes Crusher"
* #8151.008 "Chemical Processes Grinder" "Chemical Processes Grinder"
* #8151.009 "Chemical Processes Mixer" "Chemical Processes Mixer"
* #8151.010 "Chemical Processing Digester Operator" "Chemical Processing Digester Operator"
* #8151.011 "Dag Crusher" "Dag Crusher"
* #8151.012 "Fertilisers Mixer" "Fertilisers Mixer"
* #8151.013 "Glass Mixer" "Glass Mixer"
* #8151.014 "Glass Mixer Supervisor" "Glass Mixer Supervisor"
* #8151.015 "Mixer Abrasives Glass and Ceramics" "Mixer Abrasives Glass and Ceramics"
* #8151.016 "Starch Mill Worker" "Starch Mill Worker"
* #8152.001 "Chemicals Extractor Operator" "Chemicals Extractor Operator"
* #8152.002 "Filtering and Separating Equipment Operator" "Filtering and Separating Equipment Operator"
* #8152.003 "Filtering Equipment Operator" "Filtering Equipment Operator"
* #8152.004 "Press and Filter Operator Chemical Processes" "Press and Filter Operator Chemical Processes"
* #8152.005 "Quality Controller Of Water Treatment Plant Operators" "Quality Controller Of Water Treatment Plant Operators"
* #8152.006 "Separating Equipment Operator" "Separating Equipment Operator"
* #8152.007 "Treatment Plant Operator Waterworks" "Treatment Plant Operator Waterworks"
* #8152.008 "Water Filter Operator Attendant" "Water Filter Operator Attendant"
* #8152.009 "Water Treatment Plant Operator" "Water Treatment Plant Operator"
* #8152.010 "Water Treatment Plant Supervisor" "Water Treatment Plant Supervisor"
* #8152.011 "Waterworks Attendant" "Waterworks Attendant"
* #8152.012 "Waterworks Plant Operator" "Waterworks Plant Operator"
* #8152.013 "Waterworks Serviceman" "Waterworks Serviceman"
* #8153.001 "Acetylene Gas Plant Operator" "Acetylene Gas Plant Operator"
* #8153.002 "Chemical Processes Evaporator Operator" "Chemical Processes Evaporator Operator"
* #8153.003 "Chemical Processes Reactor Convertor Operator" "Chemical Processes Reactor Convertor Operator"
* #8153.004 "Chemical Reactor Operator" "Chemical Reactor Operator"
* #8153.005 "Distillation Operator" "Distillation Operator"
* #8153.006 "Natural Gas Refining Worker" "Natural Gas Refining Worker"
* #8153.007 "Oil Blender and Mixer Petroleum Refinery" "Oil Blender and Mixer Petroleum Refinery"
* #8153.008 "Oil Panel Man Refinery Operator" "Oil Panel Man Refinery Operator"
* #8153.009 "Petroleum Refinery Operator" "Petroleum Refinery Operator"
* #8153.010 "Petroleum Refining Worker" "Petroleum Refining Worker"
* #8153.011 "Process Worker Oil Products" "Process Worker Oil Products"
* #8153.012 "Quality Controller Of Still And Reactor Operators" "Quality Controller Of Still And Reactor Operators"
* #8153.013 "Still and Reactor Operator" "Still and Reactor Operator"
* #8153.014 "Still and Reactor Supervisor" "Still and Reactor Supervisor"
* #8153.015 "Still and Reactor Supervisor Chemical" "Still and Reactor Supervisor Chemical"
* #8153.016 "Still and Reactor Supervisor Gas" "Still and Reactor Supervisor Gas"
* #8153.017 "Still Batch Chemical Operator" "Still Batch Chemical Operator"
* #8153.018 "Still Pump Operator Petroleum Refinery" "Still Pump Operator Petroleum Refinery"
* #8153.019 "Wood Distillation Extractor Operator" "Wood Distillation Extractor Operator"
* #8154.001 "Ammunition Maker" "Ammunition Maker"
* #8154.002 "Asphalt Blender" "Asphalt Blender"
* #8154.003 "Battery Maker and Reconditioner" "Battery Maker and Reconditioner"
* #8154.004 "Charcoal Burner" "Charcoal Burner"
* #8154.005 "Chemical Bleacher Operator" "Chemical Bleacher Operator"
* #8154.006 "Chemical Fertilizer Worker" "Chemical Fertilizer Worker"
* #8154.007 "Chemical Processes Burner" "Chemical Processes Burner"
* #8154.008 "Chemical Processing Plant Supervisor" "Chemical Processing Plant Supervisor"
* #8154.009 "Chemical Processor" "Chemical Processor"
* #8154.010 "Cleaning Materials Maker" "Cleaning Materials Maker"
* #8154.011 "Coke or Coal Gas Maker" "Coke or Coal Gas Maker"
* #8154.012 "Coke Production Burner" "Coke Production Burner"
* #8154.013 "Compounder" "Compounder"
* #8154.014 "Cooker Roaster and Related Heat Treaters" "Cooker Roaster and Related Heat Treaters"
* #8154.015 "Explosives Worker" "Explosives Worker"
* #8154.016 "Floor Polish Maker" "Floor Polish Maker"
* #8154.017 "Furnaceman Electrode Baking" "Furnaceman Electrode Baking"
* #8154.018 "Furnaceman Lime and Cement" "Furnaceman Lime and Cement"
* #8154.019 "Gas Carboniser Operator" "Gas Carboniser Operator"
* #8154.020 "Gas Chargehand" "Gas Chargehand"
* #8154.021 "Gas Retort Stoker" "Gas Retort Stoker"
* #8154.022 "Gas Worker" "Gas Worker"
* #8154.023 "Glue Worker" "Glue Worker"
* #8154.024 "Grease Maker" "Grease Maker"
* #8154.025 "Grease Press Hand" "Grease Press Hand"
* #8154.026 "Ink Factory Hand" "Ink Factory Hand"
* #8154.027 "Kettleman" "Kettleman"
* #8154.028 "Other Chemical Processing Plant Operator" "Other Chemical Processing Plant Operator"
* #8154.029 "Overseer Chemical Products" "Overseer Chemical Products"
* #8154.030 "Paint and Colour Mixer" "Paint and Colour Mixer"
* #8154.031 "Paint Drying Oven Tender" "Paint Drying Oven Tender"
* #8154.032 "Paint Grinder Mixer" "Paint Grinder Mixer"
* #8154.033 "Radioactive Waste Material Treatment Operator" "Radioactive Waste Material Treatment Operator"
* #8154.034 "Rotary Burner Furnaceman Cement Lime" "Rotary Burner Furnaceman Cement Lime"
* #8154.035 "Synthetic Fibre Maker" "Synthetic Fibre Maker"
* #8154.036 "Tar Maker" "Tar Maker"
* #8161.001 "Air Compressor Operator Driver" "Air Compressor Operator Driver"
* #8161.002 "Aircraft Refueller" "Aircraft Refueller"
* #8161.003 "Boiler Attendant" "Boiler Attendant"
* #8161.004 "Boiler Operator" "Boiler Operator"
* #8161.005 "Boilerman" "Boilerman"
* #8161.006 "Boilerman Fireman Steam Boiler" "Boilerman Fireman Steam Boiler"
* #8161.007 "Control Gate Attendant Operator Power" "Control Gate Attendant Operator Power"
* #8161.008 "Control Room Operator Electric Power" "Control Room Operator Electric Power"
* #8161.009 "Donkey Engine Operator" "Donkey Engine Operator"
* #8161.010 "Drain Flusher" "Drain Flusher"
* #8161.011 "Driver Turbine Electric Power" "Driver Turbine Electric Power"
* #8161.012 "Electric Power Load Dispatcher" "Electric Power Load Dispatcher"
* #8161.013 "Electric Power Substation Operator" "Electric Power Substation Operator"
* #8161.014 "Electrical Switchboard Operator" "Electrical Switchboard Operator"
* #8161.015 "Fireman Stoker Stationary Engine" "Fireman Stoker Stationary Engine"
* #8161.016 "Heating and Ventilation Equipment Operator" "Heating and Ventilation Equipment Operator"
* #8161.017 "Hydraulic Power Worker" "Hydraulic Power Worker"
* #8161.018 "Hydroelectric Shift Operator" "Hydroelectric Shift Operator"
* #8161.019 "Hydroelectric Station Operator" "Hydroelectric Station Operator"
* #8161.020 "Lubricator" "Lubricator"
* #8161.021 "Oil Dispatcher Pipelines" "Oil Dispatcher Pipelines"
* #8161.022 "Oiler and Greaser" "Oiler and Greaser"
* #8161.023 "Other Stationary Engine Operator" "Other Stationary Engine Operator"
* #8161.024 "Overseer Chargehand Electricity" "Overseer Chargehand Electricity"
* #8161.025 "Overseer Chargehand Supervisor Drainage" "Overseer Chargehand Supervisor Drainage"
* #8161.026 "Overseer Chargehand Supervisor Sewerage" "Overseer Chargehand Supervisor Sewerage"
* #8161.027 "Overseer Chargehand Supervisor Water" "Overseer Chargehand Supervisor Water"
* #8161.028 "Power Generating Machine Fitter Operator" "Power Generating Machine Fitter Operator"
* #8161.029 "Power Generating Plant Operator" "Power Generating Plant Operator"
* #8161.030 "Power Generating Plant Supervisor" "Power Generating Plant Supervisor"
* #8161.031 "Power Reticulation Utilities Officer" "Power Reticulation Utilities Officer"
* #8161.032 "Power Station Attendant" "Power Station Attendant"
* #8161.033 "Power Station Switchboard Operator" "Power Station Switchboard Operator"
* #8161.034 "Power System Operator" "Power System Operator"
* #8161.035 "Powerhouse Plant Station Attendant" "Powerhouse Plant Station Attendant"
* #8161.036 "Powerhouse Shift Operator" "Powerhouse Shift Operator"
* #8161.037 "Pumping Station Operator" "Pumping Station Operator"
* #8161.038 "Quality Controller of Power Generating Plant Operators" "Quality Controller of Power Generating Plant Operators"
* #8161.039 "Raceman Power House" "Raceman Power House"
* #8161.040 "Sewerage Plant Operator" "Sewerage Plant Operator"
* #8161.041 "Sewerage Plant Treatment Operator" "Sewerage Plant Treatment Operator"
* #8161.042 "Ships Engineroom Rating" "Ships Engineroom Rating"
* #8161.043 "Ships Fireman Stoker" "Ships Fireman Stoker"
* #8161.044 "Station Supervisor Hydroelectric Steam or Thermal" "Station Supervisor Hydroelectric Steam or Thermal"
* #8161.045 "Stationary Engine Operator Driver" "Stationary Engine Operator Driver"
* #8161.046 "Stationary Traction Engine Driver" "Stationary Traction Engine Driver"
* #8161.047 "Steam or Thermal Shift Operator" "Steam or Thermal Shift Operator"
* #8161.048 "Steam or Thermal Station Operator" "Steam or Thermal Station Operator"
* #8161.049 "Steam Plant Operator" "Steam Plant Operator"
* #8161.050 "Turbine Operator Electricity Production" "Turbine Operator Electricity Production"
* #8211.001 "Automated Machine Operator" "Automated Machine Operator"
* #8211.002 "Automated Metal Machine Supervisor" "Automated Metal Machine Supervisor"
* #8211.003 "Bolt Maker" "Bolt Maker"
* #8211.004 "Boring Machine Tool Operator" "Boring Machine Tool Operator"
* #8211.005 "Cable Maker" "Cable Maker"
* #8211.006 "Die Setter" "Die Setter"
* #8211.007 "Fishing Tackle Maker" "Fishing Tackle Maker"
* #8211.008 "Gear Cutter" "Gear Cutter"
* #8211.009 "Guillotine Operator Metal" "Guillotine Operator Metal"
* #8211.010 "Kaiwhakahaere Mihini" "Kaiwhakahaere Mihini"
* #8211.011 "Kaiwhakahaere Mihini Aunoa" "Kaiwhakahaere Mihini Aunoa"
* #8211.012 "Kaiwhakahaere Miihini" "Kaiwhakahaere Miihini"
* #8211.013 "Kaiwhakahaere Miihini Aunoa" "Kaiwhakahaere Miihini Aunoa"
* #8211.014 "Knife Maker" "Knife Maker"
* #8211.015 "Lathe Operator" "Lathe Operator"
* #8211.016 "Machine Setter" "Machine Setter"
* #8211.017 "Machine Tool Grinder" "Machine Tool Grinder"
* #8211.018 "Machine Tool Operating Supervisor" "Machine Tool Operating Supervisor"
* #8211.019 "Machine Tool Operator" "Machine Tool Operator"
* #8211.020 "Machine Tool Sharpener" "Machine Tool Sharpener"
* #8211.021 "Metal Badge Maker" "Metal Badge Maker"
* #8211.022 "Metal Grinder Precision Machine Operator" "Metal Grinder Precision Machine Operator"
* #8211.023 "Metal Machine Tool Supervisor" "Metal Machine Tool Supervisor"
* #8211.024 "Metal Machinist" "Metal Machinist"
* #8211.025 "Metal Milling Machine Operator" "Metal Milling Machine Operator"
* #8211.026 "Metal Planing Machine Operator" "Metal Planing Machine Operator"
* #8211.027 "Metal Press Operator" "Metal Press Operator"
* #8211.028 "Metal Sawing Machine Operator" "Metal Sawing Machine Operator"
* #8211.029 "Metal Shaping Machine Operator" "Metal Shaping Machine Operator"
* #8211.030 "Metal Spinner" "Metal Spinner"
* #8211.031 "Metal Spinning Lathe Operator" "Metal Spinning Lathe Operator"
* #8211.032 "Metal Working Lathe Operator" "Metal Working Lathe Operator"
* #8211.033 "Metal Working Lathe Setter" "Metal Working Lathe Setter"
* #8211.034 "Metal Working Machine Tool Setter Operator" "Metal Working Machine Tool Setter Operator"
* #8211.035 "Milling Machine Setter Operator" "Milling Machine Setter Operator"
* #8211.036 "Nail Maker" "Nail Maker"
* #8211.037 "Needle Maker" "Needle Maker"
* #8211.038 "Nut Maker" "Nut Maker"
* #8211.039 "Pneumatic Press Operator" "Pneumatic Press Operator"
* #8211.040 "Power Press Operator Metal" "Power Press Operator Metal"
* #8211.041 "Power Shear Operator" "Power Shear Operator"
* #8211.042 "Power Shear Operator Supervisor" "Power Shear Operator Supervisor"
* #8211.043 "Press Setter Metal" "Press Setter Metal"
* #8211.044 "Pressworker Metal" "Pressworker Metal"
* #8211.045 "Quality Controller of Automated Machine Operators" "Quality Controller of Automated Machine Operators"
* #8211.046 "Quality Controller of Power Shear Operators" "Quality Controller of Power Shear Operators"
* #8211.047 "Quality Controller of Spring Maker And Wire Workers" "Quality Controller of Spring Maker And Wire Workers"
* #8211.048 "Rough Grinder Metal Foundry" "Rough Grinder Metal Foundry"
* #8211.049 "Screw Maker" "Screw Maker"
* #8211.050 "Spring Maker" "Spring Maker"
* #8211.051 "Spring Maker and Wire Worker" "Spring Maker and Wire Worker"
* #8211.052 "Spring Maker Supervisor" "Spring Maker Supervisor"
* #8211.053 "Steel Machine Operator" "Steel Machine Operator"
* #8211.054 "Steel Ropes Machine Operator" "Steel Ropes Machine Operator"
* #8211.055 "Tool Grinder" "Tool Grinder"
* #8211.056 "Tool Grinder and Sharpener" "Tool Grinder and Sharpener"
* #8211.057 "Tool Setter Operator Lathe" "Tool Setter Operator Lathe"
* #8211.058 "Tool Sharpener" "Tool Sharpener"
* #8211.059 "Universal Machine Operator Metal" "Universal Machine Operator Metal"
* #8211.060 "Wire Goods Maker" "Wire Goods Maker"
* #8211.061 "Wire Product Machine Operator" "Wire Product Machine Operator"
* #8211.062 "Wire Worker" "Wire Worker"
* #8212.001 "Artificial Stone Maker Building" "Artificial Stone Maker Building"
* #8212.002 "Asbestos Cement Product Worker" "Asbestos Cement Product Worker"
* #8212.003 "Cement Finisher Worker" "Cement Finisher Worker"
* #8212.004 "Central Concrete Mixing Plant Operator" "Central Concrete Mixing Plant Operator"
* #8212.005 "Concrete Batcher" "Concrete Batcher"
* #8212.006 "Concrete Block Maker" "Concrete Block Maker"
* #8212.007 "Concrete Finisher" "Concrete Finisher"
* #8212.008 "Concrete Layer" "Concrete Layer"
* #8212.009 "Concrete Placer" "Concrete Placer"
* #8212.010 "Concrete Processing Production Supervisor" "Concrete Processing Production Supervisor"
* #8212.011 "Concrete Processing Worker" "Concrete Processing Worker"
* #8212.012 "Concrete Products Caster Maker" "Concrete Products Caster Maker"
* #8212.013 "Concrete Pump Operator" "Concrete Pump Operator"
* #8212.014 "Concrete Reinforcing Steel Placer" "Concrete Reinforcing Steel Placer"
* #8212.015 "Concrete Worker" "Concrete Worker"
* #8212.016 "Concrete Worker Construction" "Concrete Worker Construction"
* #8212.017 "Concreting Contractor" "Concreting Contractor"
* #8212.018 "Pile Post Pipe Maker Concrete" "Pile Post Pipe Maker Concrete"
* #8212.019 "Precast Prestressed Concrete Products Worker" "Precast Prestressed Concrete Products Worker"
* #8212.020 "Quality Controller of Concrete Workers" "Quality Controller of Concrete Workers"
* #8221.001 "Cosmetic Production Worker" "Cosmetic Production Worker"
* #8221.002 "Overseer Pharmaceutical Products" "Overseer Pharmaceutical Products"
* #8221.003 "Pharmaceutical and Toiletry Products Machine Operator" "Pharmaceutical and Toiletry Products Machine Operator"
* #8221.004 "Pharmaceutical and Toiletry Products Supervisor" "Pharmaceutical and Toiletry Products Supervisor"
* #8221.005 "Pharmaceutical Production Worker" "Pharmaceutical Production Worker"
* #8221.006 "Pharmacy Products Factory Worker" "Pharmacy Products Factory Worker"
* #8221.007 "Pharmacy Products Machine Operator" "Pharmacy Products Machine Operator"
* #8221.008 "Quality Controller of Pharmaceutical Toiletry Machine Operators" "Quality Controller of Pharmaceutical Toiletry Machine Operators"
* #8221.009 "Soap Maker" "Soap Maker"
* #8221.010 "Supervisor Pharmaceutical Products" "Supervisor Pharmaceutical Products"
* #8221.011 "Toiletry Products Machine Operator" "Toiletry Products Machine Operator"
* #8222.001 "Anodiser" "Anodiser"
* #8222.002 "Brass Finisher Polisher" "Brass Finisher Polisher"
* #8222.003 "Electro Polisher" "Electro Polisher"
* #8222.004 "Electroplater" "Electroplater"
* #8222.005 "Enameller" "Enameller"
* #8222.006 "Finisher Brass Foundry" "Finisher Brass Foundry"
* #8222.007 "Galvaniser" "Galvaniser"
* #8222.008 "Hot Dip Plater" "Hot Dip Plater"
* #8222.009 "Metal Cleaner" "Metal Cleaner"
* #8222.010 "Metal Enameller" "Metal Enameller"
* #8222.011 "Metal Finisher" "Metal Finisher"
* #8222.012 "Metal Plater" "Metal Plater"
* #8222.013 "Metal Polisher" "Metal Polisher"
* #8222.014 "Metal Working Burnisher" "Metal Working Burnisher"
* #8222.015 "Quality Controller of Electroplaters" "Quality Controller of Electroplaters"
* #8222.016 "Quality Controller of Hot Dip Platers" "Quality Controller of Hot Dip Platers"
* #8222.017 "Ultrasonic Cleaner Metal" "Ultrasonic Cleaner Metal"
* #8223.001 "Dark Room Technician" "Dark Room Technician"
* #8223.002 "Film Developer" "Film Developer"
* #8223.003 "Film Printer" "Film Printer"
* #8223.004 "Film Processing Worker" "Film Processing Worker"
* #8223.005 "Film Processor" "Film Processor"
* #8223.006 "Minilab Operator" "Minilab Operator"
* #8223.007 "Photo Lab Assistant" "Photo Lab Assistant"
* #8223.008 "Photo Lab Operator" "Photo Lab Operator"
* #8223.009 "Photo Processor" "Photo Processor"
* #8223.010 "Photographic Darkroom Operator" "Photographic Darkroom Operator"
* #8223.011 "Photographic Darkroom Worker" "Photographic Darkroom Worker"
* #8223.012 "Photographic Developer and Printer" "Photographic Developer and Printer"
* #8223.013 "Photographic Laboratory Assistant" "Photographic Laboratory Assistant"
* #8223.014 "Quality Controller of Photographic Darkroom Operators" "Quality Controller of Photographic Darkroom Operators"
* #8231.001 "Maintenance Fitter Tyres" "Maintenance Fitter Tyres"
* #8231.002 "Quality Controller of Tyre Retreaders" "Quality Controller of Tyre Retreaders"
* #8231.003 "Rubber Mould Press Operator Tyres Tubes" "Rubber Mould Press Operator Tyres Tubes"
* #8231.004 "Rubber Tyre Vulcaniser" "Rubber Tyre Vulcaniser"
* #8231.005 "Tube Vulcaniser" "Tube Vulcaniser"
* #8231.006 "Tyre Builder" "Tyre Builder"
* #8231.007 "Tyre Builder Supervisor" "Tyre Builder Supervisor"
* #8231.008 "Tyre Fitter" "Tyre Fitter"
* #8231.009 "Tyre Moulder" "Tyre Moulder"
* #8231.010 "Tyre Moulder and Vulcaniser" "Tyre Moulder and Vulcaniser"
* #8231.011 "Tyre Retreader" "Tyre Retreader"
* #8231.012 "Tyre Retreader Supervisor" "Tyre Retreader Supervisor"
* #8231.013 "Tyre Serviceperson" "Tyre Serviceperson"
* #8231.014 "Tyre Vulcaniser" "Tyre Vulcaniser"
* #8232.001 "Formica Worker" "Formica Worker"
* #8232.002 "Laminated Sheet Plastic Worker" "Laminated Sheet Plastic Worker"
* #8232.003 "Laminator Plastic Products" "Laminator Plastic Products"
* #8232.004 "Overseer Plastic Products" "Overseer Plastic Products"
* #8232.005 "Overseer Rubber Products" "Overseer Rubber Products"
* #8232.006 "Plastic Goods Casting Machine Operator" "Plastic Goods Casting Machine Operator"
* #8232.007 "Plastic Moulding Machine Operator" "Plastic Moulding Machine Operator"
* #8232.008 "Plastics Extruding Machine Operator" "Plastics Extruding Machine Operator"
* #8232.009 "Plastics Laminator" "Plastics Laminator"
* #8232.010 "Plastics Laminator Supervisor" "Plastics Laminator Supervisor"
* #8232.011 "Plastics Machine Operator" "Plastics Machine Operator"
* #8232.012 "Plastics Machine Supervisor" "Plastics Machine Supervisor"
* #8232.013 "Plastics Machine Supervisor Excl Plastics Laminator" "Plastics Machine Supervisor Excl Plastics Laminator"
* #8232.014 "Production Chargehand Foreman Rubber" "Production Chargehand Foreman Rubber"
* #8232.015 "Production Supervisor Rubber" "Production Supervisor Rubber"
* #8232.016 "Quality Controller Of Plastics Laminators" "Quality Controller Of Plastics Laminators"
* #8232.017 "Quality Controller Of Plastics Machine Operators" "Quality Controller Of Plastics Machine Operators"
* #8232.018 "Rubber Extruding Machine Operator" "Rubber Extruding Machine Operator"
* #8232.019 "Rubber Machine Operator" "Rubber Machine Operator"
* #8232.020 "Rubber Machine Supervisor" "Rubber Machine Supervisor"
* #8232.021 "Rubber Millman" "Rubber Millman"
* #8232.022 "Rubber Moulding Press Operator" "Rubber Moulding Press Operator"
* #8232.023 "Rubber Rollerman" "Rubber Rollerman"
* #8241.001 "Carpenters Benchhand" "Carpenters Benchhand"
* #8241.002 "Chipboard Block Setter" "Chipboard Block Setter"
* #8241.003 "Joiners Benchhand" "Joiners Benchhand"
* #8241.004 "Joinery Machinist" "Joinery Machinist"
* #8241.005 "Joinery Worker" "Joinery Worker"
* #8241.006 "Joinery Worker Supervisor" "Joinery Worker Supervisor"
* #8241.007 "Lathe Operator Wood" "Lathe Operator Wood"
* #8241.008 "Lathe Setter Operator Wood" "Lathe Setter Operator Wood"
* #8241.009 "Panel Production Worker" "Panel Production Worker"
* #8241.010 "Particle Board Fixer" "Particle Board Fixer"
* #8241.011 "Precision Band Sawyer" "Precision Band Sawyer"
* #8241.012 "Timber Machinist" "Timber Machinist"
* #8241.013 "Turner Wood" "Turner Wood"
* #8241.014 "Wallboard Worker" "Wallboard Worker"
* #8241.015 "Wood Carver Not Creative" "Wood Carver Not Creative"
* #8241.016 "Wood Panel Production Supervisor" "Wood Panel Production Supervisor"
* #8241.017 "Wood Panel Production Worker" "Wood Panel Production Worker"
* #8241.018 "Wood Worker Machinist" "Wood Worker Machinist"
* #8241.019 "Wooden Box Maker" "Wooden Box Maker"
* #8241.020 "Woodwork Shaping Machine Operator" "Woodwork Shaping Machine Operator"
* #8241.021 "Woodworking Boring Machine Operator" "Woodworking Boring Machine Operator"
* #8241.022 "Woodworking Machine Setter Operator" "Woodworking Machine Setter Operator"
* #8241.023 "Woodworking Machine Tool Setter Operator" "Woodworking Machine Tool Setter Operator"
* #8241.024 "Woodworking Machinist" "Woodworking Machinist"
* #8241.025 "Woodworking Machinist Precision" "Woodworking Machinist Precision"
* #8242.001 "Preservation Plant Operator" "Preservation Plant Operator"
* #8242.002 "Preservation Plant Supervisor" "Preservation Plant Supervisor"
* #8242.003 "Quality Controller Of Wood Seasoning Kiln Operators" "Quality Controller Of Wood Seasoning Kiln Operators"
* #8242.004 "Timber Treatment Kiln Operator" "Timber Treatment Kiln Operator"
* #8242.005 "Timber Treatment Supervisor" "Timber Treatment Supervisor"
* #8242.006 "Timber Treatment Worker" "Timber Treatment Worker"
* #8242.007 "Wood Changer" "Wood Changer"
* #8242.008 "Wood Impregnator" "Wood Impregnator"
* #8242.009 "Wood Perforating Machine Operator" "Wood Perforating Machine Operator"
* #8242.010 "Wood Seasoner" "Wood Seasoner"
* #8242.011 "Wood Seasoning Kiln Operator" "Wood Seasoning Kiln Operator"
* #8242.012 "Wood Seasoning Kiln Operator Supervisor" "Wood Seasoning Kiln Operator Supervisor"
* #8242.013 "Wood Seasoning Worker" "Wood Seasoning Worker"
* #8242.014 "Wood Treating Dipper" "Wood Treating Dipper"
* #8242.015 "Wood Treating Tank Operator" "Wood Treating Tank Operator"
* #8251.001 "Cardboard Assembler Fitter Worker" "Cardboard Assembler Fitter Worker"
* #8251.002 "Cardboard Box Maker" "Cardboard Box Maker"
* #8251.003 "Cardboard Forme Maker and Finisher" "Cardboard Forme Maker and Finisher"
* #8251.004 "Cardboard Forme Maker and Finisher Supervisor" "Cardboard Forme Maker and Finisher Supervisor"
* #8251.005 "Cardboard Lining Machine Operator" "Cardboard Lining Machine Operator"
* #8251.006 "Cardboard Machine Operator" "Cardboard Machine Operator"
* #8251.007 "Cardboard Maker" "Cardboard Maker"
* #8251.008 "Carton Maker" "Carton Maker"
* #8251.009 "Cellophane Bag Maker" "Cellophane Bag Maker"
* #8251.010 "Cutting Machine Operator" "Cutting Machine Operator"
* #8251.011 "Envelope Maker" "Envelope Maker"
* #8251.012 "Guillotine Operator" "Guillotine Operator"
* #8251.013 "Guillotine Operator Paper Products" "Guillotine Operator Paper Products"
* #8251.014 "Guillotine Operator Paper Products Supervisor" "Guillotine Operator Paper Products Supervisor"
* #8251.015 "Overseer Paper Products" "Overseer Paper Products"
* #8251.016 "Paper Bag Maker" "Paper Bag Maker"
* #8251.017 "Paper Box Folding Machine Operator" "Paper Box Folding Machine Operator"
* #8251.018 "Paper Box Maker" "Paper Box Maker"
* #8251.019 "Paper Folder" "Paper Folder"
* #8251.020 "Paper Pattern Machine Operator" "Paper Pattern Machine Operator"
* #8251.021 "Paper Product Maker" "Paper Product Maker"
* #8251.022 "Paper Products Machine Operator" "Paper Products Machine Operator"
* #8251.023 "Paper Products Making Supervisor" "Paper Products Making Supervisor"
* #8251.024 "Press Operator Creasing and Cutting" "Press Operator Creasing and Cutting"
* #8251.025 "Printing Forme Cutter" "Printing Forme Cutter"
* #8251.026 "Production Chargehand Foreman Paper" "Production Chargehand Foreman Paper"
* #8251.027 "Production Chargehand Foreman Paper Products" "Production Chargehand Foreman Paper Products"
* #8251.028 "Production Supervisor Paper" "Production Supervisor Paper"
* #8251.029 "Quality Controller Of Cardboard Forme Maker" "Quality Controller Of Cardboard Forme Maker"
* #8251.030 "Quality Controller Of Guillotine Operators" "Quality Controller Of Guillotine Operators"
* #8251.031 "Quality Controller Of Paper Products Machine Operators" "Quality Controller Of Paper Products Machine Operators"
* #8261.001 "Back Winder (Fibre)" "Back Winder (Fibre)"
* #8261.002 "Fibre Doubler" "Fibre Doubler"
* #8261.003 "Fibre Twister" "Fibre Twister"
* #8261.004 "Rope and Twine Machinist" "Rope and Twine Machinist"
* #8261.005 "Rope and Twine Machinist Supervisor" "Rope and Twine Machinist Supervisor"
* #8261.006 "Spinner and Winder" "Spinner and Winder"
* #8261.007 "Spinning and Winding Supervisor" "Spinning and Winding Supervisor"
* #8261.008 "Textile Industry Winder" "Textile Industry Winder"
* #8261.009 "Thread and Yarn Piecer" "Thread and Yarn Piecer"
* #8261.010 "Woollen Winder" "Woollen Winder"
* #8262.001 "Bar Filler" "Bar Filler"
* #8262.002 "Beam Warper" "Beam Warper"
* #8262.003 "Braid Maker" "Braid Maker"
* #8262.004 "Carpet Maker" "Carpet Maker"
* #8262.005 "Carpet Making Machine Setter" "Carpet Making Machine Setter"
* #8262.006 "Carpet Tufter" "Carpet Tufter"
* #8262.007 "Carpet Weaver" "Carpet Weaver"
* #8262.008 "Carpet Weaving Loom Operator" "Carpet Weaving Loom Operator"
* #8262.009 "Carpet Weaving Loom Supervisor" "Carpet Weaving Loom Supervisor"
* #8262.010 "Carpet Weaving Supervisor" "Carpet Weaving Supervisor"
* #8262.011 "Cloth Burler" "Cloth Burler"
* #8262.012 "Cloth Weaver" "Cloth Weaver"
* #8262.013 "Cloth Weaving Loom Supervisor" "Cloth Weaving Loom Supervisor"
* #8262.014 "Cloth Weaving Supervisor" "Cloth Weaving Supervisor"
* #8262.015 "Creeler Weaving" "Creeler Weaving"
* #8262.016 "Crochet Weaver" "Crochet Weaver"
* #8262.017 "Crochet Worker" "Crochet Worker"
* #8262.018 "Darner Textile Fabric" "Darner Textile Fabric"
* #8262.019 "Fabrics Examiner Textiles" "Fabrics Examiner Textiles"
* #8262.020 "Fabrics Inspector" "Fabrics Inspector"
* #8262.021 "Hand Knitter" "Hand Knitter"
* #8262.022 "Hosiery Finisher" "Hosiery Finisher"
* #8262.023 "Hosiery Knitter" "Hosiery Knitter"
* #8262.024 "Jacquard Weaver Loom Operator" "Jacquard Weaver Loom Operator"
* #8262.025 "Knitter" "Knitter"
* #8262.026 "Knitting Machine Operator" "Knitting Machine Operator"
* #8262.027 "Knitting Machine Supervisor" "Knitting Machine Supervisor"
* #8262.028 "Knitting Machinist" "Knitting Machinist"
* #8262.029 "Knitwear Factory Bar Filler" "Knitwear Factory Bar Filler"
* #8262.030 "Linker Weaving" "Linker Weaving"
* #8262.031 "Loom Operator Cloth Weaving" "Loom Operator Cloth Weaving"
* #8262.032 "Loom Operator Weaving Lace Making" "Loom Operator Weaving Lace Making"
* #8262.033 "Loom Threader" "Loom Threader"
* #8262.034 "Machine Knitter" "Machine Knitter"
* #8262.035 "Mender Textile Fabric" "Mender Textile Fabric"
* #8262.036 "Quality Controller of Cloth Weavers" "Quality Controller of Cloth Weavers"
* #8262.037 "Quality Controller of Knitting Machinists" "Quality Controller of Knitting Machinists"
* #8262.038 "Repairer Textile Fabric" "Repairer Textile Fabric"
* #8262.039 "Rug Maker" "Rug Maker"
* #8262.040 "Rug Weaver" "Rug Weaver"
* #8262.041 "Tapestry Maker" "Tapestry Maker"
* #8262.042 "Tapestry Weaver" "Tapestry Weaver"
* #8262.043 "Textile Weaver" "Textile Weaver"
* #8262.044 "Tying Machine Operator Woollen Mill" "Tying Machine Operator Woollen Mill"
* #8262.045 "Warper Winder" "Warper Winder"
* #8262.046 "Wool Felt Maker" "Wool Felt Maker"
* #8263.001 "Alteration Hand" "Alteration Hand"
* #8263.002 "Artificial Flower Maker" "Artificial Flower Maker"
* #8263.003 "Buttonhole Maker" "Buttonhole Maker"
* #8263.004 "Clothing Machinist" "Clothing Machinist"
* #8263.005 "Clothing Outworker" "Clothing Outworker"
* #8263.006 "Clothing Production Supervisor" "Clothing Production Supervisor"
* #8263.007 "Curtain Making Sewing Machinist" "Curtain Making Sewing Machinist"
* #8263.008 "Disposable Clothes Machine Operator" "Disposable Clothes Machine Operator"
* #8263.009 "Doll and Stuffed Toy Making Supervisor" "Doll and Stuffed Toy Making Supervisor"
* #8263.010 "Doll Repairer" "Doll Repairer"
* #8263.011 "Embroiderer" "Embroiderer"
* #8263.012 "Garment Stitcher" "Garment Stitcher"
* #8263.013 "Garment Worker" "Garment Worker"
* #8263.014 "Hand Needleworker" "Hand Needleworker"
* #8263.015 "Hand Sewer" "Hand Sewer"
* #8263.016 "Hat Blocker" "Hat Blocker"
* #8263.017 "Hat Finisher" "Hat Finisher"
* #8263.018 "Hat Maker" "Hat Maker"
* #8263.019 "Hat or Cap Maker Machinist Sewer" "Hat or Cap Maker Machinist Sewer"
* #8263.020 "Hat Trimmer" "Hat Trimmer"
* #8263.021 "Hatter" "Hatter"
* #8263.022 "Kaimahi Mihini Kakahu" "Kaimahi Mihini Kakahu"
* #8263.023 "Kaimahi Mihini Tuitui" "Kaimahi Mihini Tuitui"
* #8263.024 "Kaimahi Miihini Kaakahu" "Kaimahi Miihini Kaakahu"
* #8263.025 "Kaimahi Miihini Tuitui" "Kaimahi Miihini Tuitui"
* #8263.026 "Kaimahi Purere Tuitui" "Kaimahi Purere Tuitui"
* #8263.027 "Kaimahi Puurere Tuitui" "Kaimahi Puurere Tuitui"
* #8263.028 "Kaiwhakahaere Mihini Tuitui" "Kaiwhakahaere Mihini Tuitui"
* #8263.029 "Kaiwhakahaere Miihini Tuitui" "Kaiwhakahaere Miihini Tuitui"
* #8263.030 "Kaiwhakamahi Purere Tuitui" "Kaiwhakamahi Purere Tuitui"
* #8263.031 "Kaiwhakamahi Puurere Tuitui" "Kaiwhakamahi Puurere Tuitui"
* #8263.032 "Milliner" "Milliner"
* #8263.033 "Needleworker" "Needleworker"
* #8263.034 "Net Maker" "Net Maker"
* #8263.035 "Outworker" "Outworker"
* #8263.036 "Overlocker" "Overlocker"
* #8263.037 "Overseer Textiles Clothing" "Overseer Textiles Clothing"
* #8263.038 "Parachute Rigger" "Parachute Rigger"
* #8263.039 "Process Worker Doll And Stuffed Toy" "Process Worker Doll And Stuffed Toy"
* #8263.040 "Quality Controller of Embroiderers" "Quality Controller of Embroiderers"
* #8263.041 "Quality Controller of Sewing Machinists" "Quality Controller of Sewing Machinists"
* #8263.042 "Scarfmaker" "Scarfmaker"
* #8263.043 "Seamstress" "Seamstress"
* #8263.044 "Sewer Bag or Sack Maker" "Sewer Bag or Sack Maker"
* #8263.045 "Sewing Machinist" "Sewing Machinist"
* #8263.046 "Sewing Machinist Supervisor" "Sewing Machinist Supervisor"
* #8263.047 "Soft Goods Machinist" "Soft Goods Machinist"
* #8263.048 "Stuffed Toy Maker" "Stuffed Toy Maker"
* #8263.049 "Textile Bag Making Machine Operator" "Textile Bag Making Machine Operator"
* #8263.050 "Textile Bag Making Worker" "Textile Bag Making Worker"
* #8263.051 "Textile Production Supervisor" "Textile Production Supervisor"
* #8263.052 "Umbrella Maker" "Umbrella Maker"
* #8263.053 "Umbrella Repairer" "Umbrella Repairer"
* #8263.054 "Upholstery Machinist Car" "Upholstery Machinist Car"
* #8263.055 "Upholstery Machinist Furniture" "Upholstery Machinist Furniture"
* #8263.056 "Upholstery Machinist Soft Goods" "Upholstery Machinist Soft Goods"
* #8263.057 "Upholstery Sewer Hand" "Upholstery Sewer Hand"
* #8263.058 "Upholstery Sewer Machine" "Upholstery Sewer Machine"
* #8263.059 "Wet Suit Machinist" "Wet Suit Machinist"
* #8263.060 "Zip Machinist" "Zip Machinist"
* #8264.001 "Bleacher" "Bleacher"
* #8264.002 "Bleacher and Dyer" "Bleacher and Dyer"
* #8264.003 "Bleacher Textiles and Garments" "Bleacher Textiles and Garments"
* #8264.004 "Carpet Cleaner" "Carpet Cleaner"
* #8264.005 "Carpet Cleaning Contractor" "Carpet Cleaning Contractor"
* #8264.006 "Central Sterile Supply Assistant" "Central Sterile Supply Assistant"
* #8264.007 "Cloth and Texiles Finisher" "Cloth and Texiles Finisher"
* #8264.008 "Clothes Cleaner" "Clothes Cleaner"
* #8264.009 "Clothing Presser" "Clothing Presser"
* #8264.010 "Clothing Washer" "Clothing Washer"
* #8264.011 "Dry Cleaner" "Dry Cleaner"
* #8264.012 "Dry Cleaning Depot Assistant" "Dry Cleaning Depot Assistant"
* #8264.013 "Dry Cleaning Presser" "Dry Cleaning Presser"
* #8264.014 "Dry Cleaning Spotter" "Dry Cleaning Spotter"
* #8264.015 "Drycleaner" "Drycleaner"
* #8264.016 "Dyer Clothing" "Dyer Clothing"
* #8264.017 "Folder Clothing Factory" "Folder Clothing Factory"
* #8264.018 "Garment Cleaner" "Garment Cleaner"
* #8264.019 "Garment Finisher" "Garment Finisher"
* #8264.020 "Iron Machinist" "Iron Machinist"
* #8264.021 "Launderer" "Launderer"
* #8264.022 "Launderess" "Launderess"
* #8264.023 "Laundress" "Laundress"
* #8264.024 "Laundry Employee" "Laundry Employee"
* #8264.025 "Laundry Machine Operator" "Laundry Machine Operator"
* #8264.026 "Laundry Maid" "Laundry Maid"
* #8264.027 "Laundry Mangler" "Laundry Mangler"
* #8264.028 "Laundry Supervisor" "Laundry Supervisor"
* #8264.029 "Laundry Worker" "Laundry Worker"
* #8264.030 "Laundryman" "Laundryman"
* #8264.031 "Presser" "Presser"
* #8264.032 "Presser Cloth Woollen Mills" "Presser Cloth Woollen Mills"
* #8264.033 "Presser Clothing Factory" "Presser Clothing Factory"
* #8264.034 "Presser Woollen Mills" "Presser Woollen Mills"
* #8264.035 "Quality Controller of Bleachers And Dyers" "Quality Controller of Bleachers And Dyers"
* #8264.036 "Quality Controller of Pressers" "Quality Controller of Pressers"
* #8264.037 "Quality Controller of Textile Finishers" "Quality Controller of Textile Finishers"
* #8264.038 "Starcher" "Starcher"
* #8264.039 "Textile Dyeing Worker" "Textile Dyeing Worker"
* #8264.040 "Textile Dyer" "Textile Dyer"
* #8264.041 "Textile Finisher" "Textile Finisher"
* #8264.042 "Textile Finisher Supervisor" "Textile Finisher Supervisor"
* #8264.043 "Textile Finishing Worker" "Textile Finishing Worker"
* #8264.044 "Textile Press Operating Worker" "Textile Press Operating Worker"
* #8264.045 "Textile Press Operator" "Textile Press Operator"
* #8264.046 "Textile Shrinker" "Textile Shrinker"
* #8264.047 "Textile Sizer" "Textile Sizer"
* #8264.048 "Textile Slasher" "Textile Slasher"
* #8264.049 "Textile Taper" "Textile Taper"
* #8264.050 "Textile Washer" "Textile Washer"
* #8264.051 "Washing Machine Operator" "Washing Machine Operator"
* #8264.052 "Washing Machine Operator Laundry" "Washing Machine Operator Laundry"
* #8264.053 "Waterproofer Textile Fabrics" "Waterproofer Textile Fabrics"
* #8264.054 "Waterproofing Applicator" "Waterproofing Applicator"
* #8265.001 "Fibre Blender" "Fibre Blender"
* #8265.002 "Fibre Carder" "Fibre Carder"
* #8265.003 "Fibre Classer" "Fibre Classer"
* #8265.004 "Fibre Comber" "Fibre Comber"
* #8265.005 "Fibre Drawer" "Fibre Drawer"
* #8265.006 "Fibre Frame Operator" "Fibre Frame Operator"
* #8265.007 "Fibre Grader" "Fibre Grader"
* #8265.008 "Fibre Lapper" "Fibre Lapper"
* #8265.009 "Fibre Mixer" "Fibre Mixer"
* #8265.010 "Fibre Picker" "Fibre Picker"
* #8265.011 "Fibre Preparer" "Fibre Preparer"
* #8265.012 "Fibre Rover" "Fibre Rover"
* #8265.013 "Fibre Supervisor" "Fibre Supervisor"
* #8265.014 "Flax Preparer" "Flax Preparer"
* #8265.015 "Flock Maker Teaser" "Flock Maker Teaser"
* #8265.016 "Gill Box Finisher Weaving" "Gill Box Finisher Weaving"
* #8265.017 "Washer Raw Fibres" "Washer Raw Fibres"
* #8265.018 "Wool Blender" "Wool Blender"
* #8265.019 "Wool Carder" "Wool Carder"
* #8265.020 "Wool Comber" "Wool Comber"
* #8265.021 "Wool Drawer" "Wool Drawer"
* #8265.022 "Wool Dryer" "Wool Dryer"
* #8265.023 "Wool Preparer" "Wool Preparer"
* #8265.024 "Wool Scourer" "Wool Scourer"
* #8265.025 "Wool Scourer Supervisor" "Wool Scourer Supervisor"
* #8265.026 "Wool Stapler" "Wool Stapler"
* #8265.027 "Wool Top Machine Operator" "Wool Top Machine Operator"
* #8271.001 "Boner" "Boner"
* #8271.002 "Butcher Freezing Worker Abattoir" "Butcher Freezing Worker Abattoir"
* #8271.003 "Butchers Labourer" "Butchers Labourer"
* #8271.004 "Butchery Assistant" "Butchery Assistant"
* #8271.005 "Chicken Processor" "Chicken Processor"
* #8271.006 "Curing and Pickling Worker" "Curing and Pickling Worker"
* #8271.007 "Fish Boner" "Fish Boner"
* #8271.008 "Fish Canning Process Supervisor" "Fish Canning Process Supervisor"
* #8271.009 "Fish Canning Process Worker" "Fish Canning Process Worker"
* #8271.010 "Fish Cutter" "Fish Cutter"
* #8271.011 "Fish Dehydrator" "Fish Dehydrator"
* #8271.012 "Fish Factory Supervisor" "Fish Factory Supervisor"
* #8271.013 "Fish Filleter" "Fish Filleter"
* #8271.014 "Fish Preserver" "Fish Preserver"
* #8271.015 "Fish Preserving Supervisor" "Fish Preserving Supervisor"
* #8271.016 "Fish Process Worker" "Fish Process Worker"
* #8271.017 "Fish Process Worker Supervisor" "Fish Process Worker Supervisor"
* #8271.018 "Fish Processing Worker" "Fish Processing Worker"
* #8271.019 "Fish Processor" "Fish Processor"
* #8271.020 "Fish Shed Assistant" "Fish Shed Assistant"
* #8271.021 "Food Smoker" "Food Smoker"
* #8271.022 "Freezer Hand" "Freezer Hand"
* #8271.023 "Freezing and Abattoir Worker Killing Chain" "Freezing and Abattoir Worker Killing Chain"
* #8271.024 "Freezing Worker" "Freezing Worker"
* #8271.025 "Freezing Works Chainman" "Freezing Works Chainman"
* #8271.026 "Freezing Works Chamberman" "Freezing Works Chamberman"
* #8271.027 "Freezing Works Chiller Hand" "Freezing Works Chiller Hand"
* #8271.028 "Freezing Works Cooling Floor Hand" "Freezing Works Cooling Floor Hand"
* #8271.029 "Freezing Works Dollyman" "Freezing Works Dollyman"
* #8271.030 "Freezing Works Freezer Hand" "Freezing Works Freezer Hand"
* #8271.031 "Freezing Works Meat Cutter" "Freezing Works Meat Cutter"
* #8271.032 "Freezing Works Scraper" "Freezing Works Scraper"
* #8271.033 "Freezing Works Slaughterer" "Freezing Works Slaughterer"
* #8271.034 "Freezing Works Stripper" "Freezing Works Stripper"
* #8271.035 "Kaimahi Miiti" "Kaimahi Miiti"
* #8271.036 "Kaimahi Miti" "Kaimahi Miti"
* #8271.037 "Kaipatu Hipi" "Kaipatu Hipi"
* #8271.038 "Kaipatu Kararehe" "Kaipatu Kararehe"
* #8271.039 "Kaipatu Kau" "Kaipatu Kau"
* #8271.040 "Kaipatu Miiti" "Kaipatu Miiti"
* #8271.041 "Kaipatu Miti" "Kaipatu Miti"
* #8271.042 "Knife Hand" "Knife Hand"
* #8271.043 "Land Based Oyster Opener" "Land Based Oyster Opener"
* #8271.044 "Meat Boner" "Meat Boner"
* #8271.045 "Meat Canning Process Supervisor" "Meat Canning Process Supervisor"
* #8271.046 "Meat Canning Process Worker" "Meat Canning Process Worker"
* #8271.047 "Meat Cutter" "Meat Cutter"
* #8271.048 "Meat Dehydrator" "Meat Dehydrator"
* #8271.049 "Meat Preserver" "Meat Preserver"
* #8271.050 "Meat Preserving Supervisor" "Meat Preserving Supervisor"
* #8271.051 "Meat Processing Worker" "Meat Processing Worker"
* #8271.052 "Meat Slicer" "Meat Slicer"
* #8271.053 "Meat Trimmer" "Meat Trimmer"
* #8271.054 "Meat Worker" "Meat Worker"
* #8271.055 "Mussel Opener" "Mussel Opener"
* #8271.056 "Mussel Processor" "Mussel Processor"
* #8271.057 "Offal Man" "Offal Man"
* #8271.058 "Onshore Seafood Processor" "Onshore Seafood Processor"
* #8271.059 "Oyster Canner" "Oyster Canner"
* #8271.060 "Oyster Canner Opener Supervisor" "Oyster Canner Opener Supervisor"
* #8271.061 "Oyster Opener" "Oyster Opener"
* #8271.062 "Oyster Opener and Canner" "Oyster Opener and Canner"
* #8271.063 "Poultry Worker Abattoir Freezing Works" "Poultry Worker Abattoir Freezing Works"
* #8271.064 "Quality Controller of Fish Canning Process Workers" "Quality Controller of Fish Canning Process Workers"
* #8271.065 "Quality Controller of Fish Process Workers" "Quality Controller of Fish Process Workers"
* #8271.066 "Quality Controller of Meat Canning Process Workers" "Quality Controller of Meat Canning Process Workers"
* #8271.067 "Quality Controller of Slaughterers" "Quality Controller of Slaughterers"
* #8271.068 "Quality Controller of Smallgoods Makers" "Quality Controller of Smallgoods Makers"
* #8271.069 "Sausage Casing Maker" "Sausage Casing Maker"
* #8271.070 "Sausage Maker" "Sausage Maker"
* #8271.071 "Seafood Factory Supervisor" "Seafood Factory Supervisor"
* #8271.072 "Slaughter Man" "Slaughter Man"
* #8271.073 "Slaughterer" "Slaughterer"
* #8271.074 "Slaughterhouse Assistant" "Slaughterhouse Assistant"
* #8271.075 "Slaughtering Assistant" "Slaughtering Assistant"
* #8271.076 "Slaughtering Supervisor" "Slaughtering Supervisor"
* #8271.077 "Slaughterman" "Slaughterman"
* #8271.078 "Smallgoods Maker" "Smallgoods Maker"
* #8271.079 "Smallgoods Supervisor Maker" "Smallgoods Supervisor Maker"
* #8271.080 "Wetfish Processor" "Wetfish Processor"
* #8272.001 "Butter and Milk Fats Products Maker" "Butter and Milk Fats Products Maker"
* #8272.002 "Butter Maker Grader Tester" "Butter Maker Grader Tester"
* #8272.003 "Casein Worker Maker" "Casein Worker Maker"
* #8272.004 "Cheese Factory Worker" "Cheese Factory Worker"
* #8272.005 "Cheese Grader Tester" "Cheese Grader Tester"
* #8272.006 "Cheese Maker" "Cheese Maker"
* #8272.007 "Cheese Making Supervisor" "Cheese Making Supervisor"
* #8272.008 "Cheese Salter" "Cheese Salter"
* #8272.009 "Condensed Milk Maker Process Worker" "Condensed Milk Maker Process Worker"
* #8272.010 "Cooker Operator Dairy Products" "Cooker Operator Dairy Products"
* #8272.011 "Cottage Cheese Maker" "Cottage Cheese Maker"
* #8272.012 "Dairy Factory Worker" "Dairy Factory Worker"
* #8272.013 "Dairy Products Inspector Grader Tester" "Dairy Products Inspector Grader Tester"
* #8272.014 "Dairy Products Instructor" "Dairy Products Instructor"
* #8272.015 "Dairy Products Processor" "Dairy Products Processor"
* #8272.016 "Dried Milk Worker" "Dried Milk Worker"
* #8272.017 "Ice Cream Maker" "Ice Cream Maker"
* #8272.018 "Milk and Other Dairy Products Maker" "Milk and Other Dairy Products Maker"
* #8272.019 "Milk and Other Dairy Products Supervisor" "Milk and Other Dairy Products Supervisor"
* #8272.020 "Milk Pasteuriser" "Milk Pasteuriser"
* #8272.021 "Milk Powder Maker" "Milk Powder Maker"
* #8272.022 "Milk Process Supervisor" "Milk Process Supervisor"
* #8272.023 "Milk Process Worker" "Milk Process Worker"
* #8272.024 "Milk Treatment Station Worker" "Milk Treatment Station Worker"
* #8272.025 "Other Dairy Products Maker" "Other Dairy Products Maker"
* #8272.026 "Pasteurising Worker" "Pasteurising Worker"
* #8272.027 "Yogurt Maker" "Yogurt Maker"
* #8273.001 "Cereal Miller" "Cereal Miller"
* #8273.002 "Flour Mill Worker" "Flour Mill Worker"
* #8273.003 "Flour Miller" "Flour Miller"
* #8273.004 "Flour or Grain Millhand" "Flour or Grain Millhand"
* #8273.005 "Flourmill Kilnman" "Flourmill Kilnman"
* #8273.006 "Grain Cleaner" "Grain Cleaner"
* #8273.007 "Grain Crusher" "Grain Crusher"
* #8273.008 "Grain Dryer" "Grain Dryer"
* #8273.009 "Grain Grader" "Grain Grader"
* #8273.010 "Grain Miller" "Grain Miller"
* #8273.011 "Grain Miller Supervisor" "Grain Miller Supervisor"
* #8273.012 "Lucerne Pellets Maker" "Lucerne Pellets Maker"
* #8273.013 "Seed Cleaning Machine Operator" "Seed Cleaning Machine Operator"
* #8273.014 "Seed Grading Machine Operator" "Seed Grading Machine Operator"
* #8273.015 "Spice Miller Factory Worker" "Spice Miller Factory Worker"
* #8273.016 "Wheat Miller" "Wheat Miller"
* #8274.001 "Animal Food Processor" "Animal Food Processor"
* #8274.002 "Baked Goods and Cereals Producing Machine Operator" "Baked Goods and Cereals Producing Machine Operator"
* #8274.003 "Baked Goods and Cereals Producing Machine Supervisor" "Baked Goods and Cereals Producing Machine Supervisor"
* #8274.004 "Bakehouse Assistant" "Bakehouse Assistant"
* #8274.005 "Bakers Assistant" "Bakers Assistant"
* #8274.006 "Bakers Labourer" "Bakers Labourer"
* #8274.007 "Bakery Assistant" "Bakery Assistant"
* #8274.008 "Bakery Labourer" "Bakery Labourer"
* #8274.009 "Bakery Machinist" "Bakery Machinist"
* #8274.010 "Bakery Ovenman" "Bakery Ovenman"
* #8274.011 "Bakery Supervisor" "Bakery Supervisor"
* #8274.012 "Bakery Table Hand" "Bakery Table Hand"
* #8274.013 "Bakery Worker" "Bakery Worker"
* #8274.014 "Cereal Grain Machinist" "Cereal Grain Machinist"
* #8274.015 "Macaroni Maker" "Macaroni Maker"
* #8274.016 "Stock Food Making Machine Operator" "Stock Food Making Machine Operator"
* #8275.001 "Aerated Water Cordial Worker" "Aerated Water Cordial Worker"
* #8275.002 "Beverage Processor Non Alcoholic" "Beverage Processor Non Alcoholic"
* #8275.003 "Canning and Bottling Process Worker" "Canning and Bottling Process Worker"
* #8275.004 "Cannister Viewer" "Cannister Viewer"
* #8275.005 "Food Dehydrator" "Food Dehydrator"
* #8275.006 "Food Preserver" "Food Preserver"
* #8275.007 "Freezer Foodstuffs" "Freezer Foodstuffs"
* #8275.008 "Fruit Press Operator" "Fruit Press Operator"
* #8275.009 "Fruit Vegetable and Nut Processing Machine Operator" "Fruit Vegetable and Nut Processing Machine Operator"
* #8275.010 "Fruit Vegetable and Nut Processing Machine Supervisor" "Fruit Vegetable and Nut Processing Machine Supervisor"
* #8275.011 "Jam Maker" "Jam Maker"
* #8275.012 "Margarine Worker" "Margarine Worker"
* #8275.013 "Overseer Fruit Vegetable Nut Processing" "Overseer Fruit Vegetable Nut Processing"
* #8275.014 "Preserving and Canning Worker" "Preserving and Canning Worker"
* #8275.015 "Quality Controller of Fruit Nut Vegetable Machine Operators" "Quality Controller of Fruit Nut Vegetable Machine Operators"
* #8275.016 "Syrup Maker Cordials" "Syrup Maker Cordials"
* #8275.017 "Syrup Maker Foods" "Syrup Maker Foods"
* #8275.018 "Vegetable Preparer Canning" "Vegetable Preparer Canning"
* #8276.001 "Chocolate Confectionary Maker" "Chocolate Confectionary Maker"
* #8276.002 "Confectionery Maker" "Confectionery Maker"
* #8276.003 "Confectionery Maker Supervisor" "Confectionery Maker Supervisor"
* #8276.004 "Quality Controller of Confectionery Makers" "Quality Controller of Confectionery Makers"
* #8276.005 "Sugar Processor and Refiner" "Sugar Processor and Refiner"
* #8276.006 "Sugar Processor and Refinery Supervisor" "Sugar Processor and Refinery Supervisor"
* #8276.007 "Sugar Refinery Worker" "Sugar Refinery Worker"
* #8276.008 "Sugar Refining Crystalliser Operator" "Sugar Refining Crystalliser Operator"
* #8277.001 "Chocolate Maker" "Chocolate Maker"
* #8277.002 "Chocolate Making Supervisor" "Chocolate Making Supervisor"
* #8277.003 "Coffee and Chicory Roaster and Grinder" "Coffee and Chicory Roaster and Grinder"
* #8277.004 "Coffee and Tea Blender" "Coffee and Tea Blender"
* #8277.005 "Coffee Blender" "Coffee Blender"
* #8277.006 "Coffee Taster" "Coffee Taster"
* #8277.007 "Malt Worker" "Malt Worker"
* #8277.008 "Malt Works Supervisor" "Malt Works Supervisor"
* #8277.009 "Maltster" "Maltster"
* #8277.010 "Tea Blender" "Tea Blender"
* #8277.011 "Tea Coffee Blender Supervisor" "Tea Coffee Blender Supervisor"
* #8277.012 "Tea Taster" "Tea Taster"
* #8277.013 "Vinegar Worker" "Vinegar Worker"
* #8278.001 "Cigarette Maker" "Cigarette Maker"
* #8278.002 "Cigarette Making Machine Operator" "Cigarette Making Machine Operator"
* #8278.003 "Overseer Tobacco" "Overseer Tobacco"
* #8278.004 "Production Chargehand Foreman Supervisor Tobacco" "Production Chargehand Foreman Supervisor Tobacco"
* #8278.005 "Tobacco Grader" "Tobacco Grader"
* #8278.006 "Tobacco Machine Operator" "Tobacco Machine Operator"
* #8278.007 "Tobacco Product Maker Worker" "Tobacco Product Maker Worker"
* #8278.008 "Tobacco Product Process Worker" "Tobacco Product Process Worker"
* #8279.001 "Alcoholic Beverage Processor" "Alcoholic Beverage Processor"
* #8279.002 "Beer Brewer" "Beer Brewer"
* #8279.003 "Beer Production Worker" "Beer Production Worker"
* #8279.004 "Brewer" "Brewer"
* #8279.005 "Brewery Worker" "Brewery Worker"
* #8279.006 "Brewery Worker Supervisor" "Brewery Worker Supervisor"
* #8279.007 "Brewmaster" "Brewmaster"
* #8279.008 "Distiller" "Distiller"
* #8279.009 "Distiller Alcoholic Beverages" "Distiller Alcoholic Beverages"
* #8279.010 "Distillery Worker" "Distillery Worker"
* #8279.011 "Distillery Worker (Alcoholic Beverages)" "Distillery Worker (Alcoholic Beverages)"
* #8279.012 "Distillery Worker Alcoholic Beverages Supervisor" "Distillery Worker Alcoholic Beverages Supervisor"
* #8279.013 "Liquor Taster" "Liquor Taster"
* #8279.014 "Other Brewery Worker" "Other Brewery Worker"
* #8279.015 "Quality Controller of Brewery Workers" "Quality Controller of Brewery Workers"
* #8279.016 "Quality Controller of Distillery Worker Alcohic Beverages" "Quality Controller of Distillery Worker Alcohic Beverages"
* #8279.017 "Wine Making Machine Operator" "Wine Making Machine Operator"
* #8279.018 "Wine Making Machine Operator Supervisor" "Wine Making Machine Operator Supervisor"
* #8279.019 "Winery Worker" "Winery Worker"
* #8281.001 "Fellmonger" "Fellmonger"
* #8281.002 "Fellmongery Beaterman" "Fellmongery Beaterman"
* #8281.003 "Hide and Pelt Processor" "Hide and Pelt Processor"
* #8281.004 "Hide Classer" "Hide Classer"
* #8281.005 "Hide Cleaner" "Hide Cleaner"
* #8281.006 "Hide Dresser" "Hide Dresser"
* #8281.007 "Hide Flesher" "Hide Flesher"
* #8281.008 "Hide Grader" "Hide Grader"
* #8281.009 "Hide Splitter" "Hide Splitter"
* #8281.010 "Hides and Pelts Scudder Tanning" "Hides and Pelts Scudder Tanning"
* #8281.011 "Leather Dresser" "Leather Dresser"
* #8281.012 "Leather Dyer Stainer" "Leather Dyer Stainer"
* #8281.013 "Leather Stretcher Tanner" "Leather Stretcher Tanner"
* #8281.014 "Pelt Classer" "Pelt Classer"
* #8281.015 "Pelt Cleaner" "Pelt Cleaner"
* #8281.016 "Pelt Dresser" "Pelt Dresser"
* #8281.017 "Pelt Flesher" "Pelt Flesher"
* #8281.018 "Pelt Grader" "Pelt Grader"
* #8281.019 "Pelt Plucker" "Pelt Plucker"
* #8281.020 "Pelt Sorter" "Pelt Sorter"
* #8281.021 "Pelt Stretcher" "Pelt Stretcher"
* #8281.022 "Pelt Trimmer" "Pelt Trimmer"
* #8281.023 "Quality Controller of Hide Skin And Pelts" "Quality Controller of Hide Skin And Pelts"
* #8281.024 "Sheepskin Product Maker" "Sheepskin Product Maker"
* #8281.025 "Skin Classer" "Skin Classer"
* #8281.026 "Skin Grader" "Skin Grader"
* #8281.027 "Tanner Currier" "Tanner Currier"
* #8281.028 "Tanner Splitter and Dyer" "Tanner Splitter and Dyer"
* #8281.029 "Tannery Hand" "Tannery Hand"
* #8281.030 "Tanning Liquor Maker" "Tanning Liquor Maker"
* #8281.031 "Wool Puller" "Wool Puller"
* #8291.001 "Car Assembler" "Car Assembler"
* #8291.002 "Car Assembly Setter" "Car Assembly Setter"
* #8291.003 "Car Assembly Supervisor" "Car Assembly Supervisor"
* #8291.004 "Car Assembly Worker" "Car Assembly Worker"
* #8291.005 "Chassis Assembler" "Chassis Assembler"
* #8291.006 "Machinery Assembler" "Machinery Assembler"
* #8291.007 "Machinery Fitter Assembler" "Machinery Fitter Assembler"
* #8291.008 "Machinery Installer Erector" "Machinery Installer Erector"
* #8291.009 "Marine Engine Assembler" "Marine Engine Assembler"
* #8291.010 "Mechanical Machinery Assembler" "Mechanical Machinery Assembler"
* #8291.011 "Mechanical Machinery Assembly Supervisor" "Mechanical Machinery Assembly Supervisor"
* #8291.012 "Meter Maker Repairer" "Meter Maker Repairer"
* #8291.013 "Motor Vehicle Assembly Supervisor" "Motor Vehicle Assembly Supervisor"
* #8291.014 "Motor Vehicle Assembly Worker" "Motor Vehicle Assembly Worker"
* #8291.015 "Motor Vehicle Process Worker" "Motor Vehicle Process Worker"
* #8291.016 "Quality Controller of Mechanical Machinery Assemblers" "Quality Controller of Mechanical Machinery Assemblers"
* #8291.017 "Vehicle Assembler" "Vehicle Assembler"
* #8292.001 "Armature Winder" "Armature Winder"
* #8292.002 "Cable Jointer" "Cable Jointer"
* #8292.003 "Cable Jointer Supervisor" "Cable Jointer Supervisor"
* #8292.004 "Cable Layer" "Cable Layer"
* #8292.005 "Circuit Board Assembler" "Circuit Board Assembler"
* #8292.006 "Coil Winder" "Coil Winder"
* #8292.007 "Communication Equipment Assembler" "Communication Equipment Assembler"
* #8292.008 "Electric and Electronic Equipment Assembler" "Electric and Electronic Equipment Assembler"
* #8292.009 "Electric Cable Jointer" "Electric Cable Jointer"
* #8292.010 "Electric Cable Layer" "Electric Cable Layer"
* #8292.011 "Electric Cable Puller" "Electric Cable Puller"
* #8292.012 "Electric Equipment Assembler" "Electric Equipment Assembler"
* #8292.013 "Electric Equipment Assembly Supervisor" "Electric Equipment Assembly Supervisor"
* #8292.014 "Electric Power Line Mechanic" "Electric Power Line Mechanic"
* #8292.015 "Electric Power Lines Faultsman" "Electric Power Lines Faultsman"
* #8292.016 "Electric Power Lines Serviceman" "Electric Power Lines Serviceman"
* #8292.017 "Electric Power Linesman" "Electric Power Linesman"
* #8292.018 "Electric Power Linesperson" "Electric Power Linesperson"
* #8292.019 "Electric Traction Lineman" "Electric Traction Lineman"
* #8292.020 "Electrical Assembler" "Electrical Assembler"
* #8292.021 "Electrical Goods Assembler" "Electrical Goods Assembler"
* #8292.022 "Electrical Inspector Lines" "Electrical Inspector Lines"
* #8292.023 "Electrical Insulator Worker" "Electrical Insulator Worker"
* #8292.024 "Electrical Lineman" "Electrical Lineman"
* #8292.025 "Electrical Linesman" "Electrical Linesman"
* #8292.026 "Electrical Products Process Worker" "Electrical Products Process Worker"
* #8292.027 "Electrical Rewinder" "Electrical Rewinder"
* #8292.028 "Electronic Assembler" "Electronic Assembler"
* #8292.029 "Electronic Equipment Assembler" "Electronic Equipment Assembler"
* #8292.030 "Electronic Equipment Assembly Supervisor" "Electronic Equipment Assembly Supervisor"
* #8292.031 "Electronic Goods Assembler" "Electronic Goods Assembler"
* #8292.032 "Electronics Inspector Tester" "Electronics Inspector Tester"
* #8292.033 "Erector Electric Power Lines" "Erector Electric Power Lines"
* #8292.034 "Lighting Assembler" "Lighting Assembler"
* #8292.035 "Line Mechanic" "Line Mechanic"
* #8292.036 "Linesperson" "Linesperson"
* #8292.037 "Mains Layer and Jointer" "Mains Layer and Jointer"
* #8292.038 "Overseer Cable Laying" "Overseer Cable Laying"
* #8292.039 "Overseer Electrical Electronic Equipment Manufacture" "Overseer Electrical Electronic Equipment Manufacture"
* #8292.040 "Production Chargehand Foreman Supervisor Electric" "Production Chargehand Foreman Supervisor Electric"
* #8292.041 "Production Chargehand Foreman Supervisor Electronic" "Production Chargehand Foreman Supervisor Electronic"
* #8292.042 "Quality Controller of Electric Electronic Equipment Assemblers" "Quality Controller of Electric Electronic Equipment Assemblers"
* #8292.043 "Radio Assembler" "Radio Assembler"
* #8292.044 "Range Fitter Assembler" "Range Fitter Assembler"
* #8292.045 "Registered Electric Power Linesperson" "Registered Electric Power Linesperson"
* #8292.046 "Registered Telephone Linesperson" "Registered Telephone Linesperson"
* #8292.047 "Rotoarmature Winder" "Rotoarmature Winder"
* #8292.048 "Signals and Electric Line Inspector" "Signals and Electric Line Inspector"
* #8292.049 "Stove Fitter Maker Assembler" "Stove Fitter Maker Assembler"
* #8292.050 "Supervisor Linesman" "Supervisor Linesman"
* #8292.051 "Telecom Lineman" "Telecom Lineman"
* #8292.052 "Telecom Transmission Serviceman" "Telecom Transmission Serviceman"
* #8292.053 "Telephone Linesperson and Installer" "Telephone Linesperson and Installer"
* #8292.054 "Telephone Serviceman Repairer" "Telephone Serviceman Repairer"
* #8292.055 "Television Assembler" "Television Assembler"
* #8292.056 "Transformer Assembler" "Transformer Assembler"
* #8292.057 "Transformer Serviceman Winder" "Transformer Serviceman Winder"
* #8293.001 "Brush and Broom Maker" "Brush and Broom Maker"
* #8293.002 "Button Maker" "Button Maker"
* #8293.003 "Cassette Assembler" "Cassette Assembler"
* #8293.004 "Cutter Plastics and Rubber" "Cutter Plastics and Rubber"
* #8293.005 "Factory Hand Vinyl Coated Fabrics" "Factory Hand Vinyl Coated Fabrics"
* #8293.006 "Finisher Plastics" "Finisher Plastics"
* #8293.007 "Golf Club Maker" "Golf Club Maker"
* #8293.008 "Installer Plastic Awning" "Installer Plastic Awning"
* #8293.009 "Linoleum Maker" "Linoleum Maker"
* #8293.010 "Metal Goods Assembler" "Metal Goods Assembler"
* #8293.011 "Metal Goods Assembly Supervisor" "Metal Goods Assembly Supervisor"
* #8293.012 "Metal Products Fitter Assembler" "Metal Products Fitter Assembler"
* #8293.013 "Mop Maker" "Mop Maker"
* #8293.014 "Outworker Plastic Rubber Toys" "Outworker Plastic Rubber Toys"
* #8293.015 "Placemat Maker" "Placemat Maker"
* #8293.016 "Plastic Boat Builder" "Plastic Boat Builder"
* #8293.017 "Plastic Rubber Clothing Maker" "Plastic Rubber Clothing Maker"
* #8293.018 "Plastics and Rubber Goods Assembler" "Plastics and Rubber Goods Assembler"
* #8293.019 "Plastics and Rubber Goods Assembler Supervisor" "Plastics and Rubber Goods Assembler Supervisor"
* #8293.020 "Plastics Assembler" "Plastics Assembler"
* #8293.021 "Plastics Fabricator" "Plastics Fabricator"
* #8293.022 "Plastics Process Worker" "Plastics Process Worker"
* #8293.023 "Plastics Welder" "Plastics Welder"
* #8293.024 "Process Worker Plastic Rubber Toys" "Process Worker Plastic Rubber Toys"
* #8293.025 "Projection Screen Maker" "Projection Screen Maker"
* #8293.026 "Quality Controller of Metal Goods Assemblers" "Quality Controller of Metal Goods Assemblers"
* #8293.027 "Quality Controller of Plastics and Rubber Goods Assemblers" "Quality Controller of Plastics and Rubber Goods Assemblers"
* #8293.028 "Racing Sulky Maker" "Racing Sulky Maker"
* #8293.029 "Rubber Goods Assembler" "Rubber Goods Assembler"
* #8293.030 "Rubber Stamp Maker" "Rubber Stamp Maker"
* #8293.031 "Rubber Worker" "Rubber Worker"
* #8293.032 "Sealing Fitter Rubber" "Sealing Fitter Rubber"
* #8293.033 "Toy Maker Plastic" "Toy Maker Plastic"
* #8293.034 "Vinyl Colour Matcher" "Vinyl Colour Matcher"
* #8293.035 "Vinyl Worker" "Vinyl Worker"
* #8293.036 "Waterproof Garment Maker" "Waterproof Garment Maker"
* #8294.001 "Basket and Wicker Worker" "Basket and Wicker Worker"
* #8294.002 "Basket and Wicker Worker Supervisor" "Basket and Wicker Worker Supervisor"
* #8294.003 "Cane and Wicker Furniture Maker" "Cane and Wicker Furniture Maker"
* #8294.004 "Farm Fencer" "Farm Fencer"
* #8294.005 "Fencer" "Fencer"
* #8294.006 "Fencing Contractor" "Fencing Contractor"
* #8294.007 "Gang Nail Process Worker" "Gang Nail Process Worker"
* #8294.008 "Match Making Machine Operator" "Match Making Machine Operator"
* #8294.009 "Process Worker Furniture" "Process Worker Furniture"
* #8294.010 "Process Worker Wooden Toys" "Process Worker Wooden Toys"
* #8294.011 "Quality Controller Of Basket And Wicker Workers" "Quality Controller Of Basket And Wicker Workers"
* #8294.012 "Quality Controller of Wood and Related Materials Assemblers" "Quality Controller of Wood and Related Materials Assemblers"
* #8294.013 "Sanding Machine Operator Woodworking" "Sanding Machine Operator Woodworking"
* #8294.014 "Ski Maker Wood" "Ski Maker Wood"
* #8294.015 "Wire Fence Erector" "Wire Fence Erector"
* #8294.016 "Wood and Related Materials Products Assembler" "Wood and Related Materials Products Assembler"
* #8294.017 "Wood and Related Materials Products Assembly Supervisor" "Wood and Related Materials Products Assembly Supervisor"
* #8294.018 "Wood and Related Materials Products Assembly Worker" "Wood and Related Materials Products Assembly Worker"
* #8294.019 "Woodworker Games and Sports Equipment" "Woodworker Games and Sports Equipment"
* #8295.001 "Bespoke Shoemaker" "Bespoke Shoemaker"
* #8295.002 "Footwear Bench Worker" "Footwear Bench Worker"
* #8295.003 "Footwear Examiner" "Footwear Examiner"
* #8295.004 "Footwear Factory Journeyman" "Footwear Factory Journeyman"
* #8295.005 "Footwear Factory Sewing Machinist" "Footwear Factory Sewing Machinist"
* #8295.006 "Footwear Factory Worker" "Footwear Factory Worker"
* #8295.007 "Footwear Laster" "Footwear Laster"
* #8295.008 "Footwear Maker" "Footwear Maker"
* #8295.009 "Footwear Production Machine Operator" "Footwear Production Machine Operator"
* #8295.010 "Footwear Shanker" "Footwear Shanker"
* #8295.011 "Footwear Sole Fitter" "Footwear Sole Fitter"
* #8295.012 "Footwear Sole Presser" "Footwear Sole Presser"
* #8295.013 "Hand Sewer Leather Goods" "Hand Sewer Leather Goods"
* #8295.014 "Leather Facotry Worker" "Leather Facotry Worker"
* #8295.015 "Leather Goods Assembler" "Leather Goods Assembler"
* #8295.016 "Leather Goods Cutter" "Leather Goods Cutter"
* #8295.017 "Leather Goods Machine Operator" "Leather Goods Machine Operator"
* #8295.018 "Leather Goods Machine Operator Supervisor" "Leather Goods Machine Operator Supervisor"
* #8295.019 "Leather Goods Maker" "Leather Goods Maker"
* #8295.020 "Leather Product Maker" "Leather Product Maker"
* #8295.021 "Leather Safety Belt Assembler" "Leather Safety Belt Assembler"
* #8295.022 "Leather Sewing Machine Operator" "Leather Sewing Machine Operator"
* #8295.023 "Leather Worker" "Leather Worker"
* #8295.024 "Outworker Shoe Finishing" "Outworker Shoe Finishing"
* #8295.025 "Production Chargehand Overseer Footwear Manuf" "Production Chargehand Overseer Footwear Manuf"
* #8295.026 "Production Supervisor Footwear Assembly" "Production Supervisor Footwear Assembly"
* #8295.027 "Quality Controller of Leather Goods Assemblers" "Quality Controller of Leather Goods Assemblers"
* #8295.028 "Quality Controller Of Shoe Assemblers" "Quality Controller Of Shoe Assemblers"
* #8295.029 "Shoe Assembler" "Shoe Assembler"
* #8295.030 "Shoe Assembly Supervisor" "Shoe Assembly Supervisor"
* #8295.031 "Shoe Clicker" "Shoe Clicker"
* #8295.032 "Shoe Cutter" "Shoe Cutter"
* #8295.033 "Shoe Maker" "Shoe Maker"
* #8295.034 "Shoe Pattern Cutter" "Shoe Pattern Cutter"
* #8295.035 "Shoe Sewing Machine Supervisor" "Shoe Sewing Machine Supervisor"
* #8295.036 "Shoe Sewing Machinist" "Shoe Sewing Machinist"
* #8295.037 "Wooden Shoe Maker" "Wooden Shoe Maker"
* #8311.001 "Cable Car Operator" "Cable Car Operator"
* #8311.002 "Chair Lift Operator" "Chair Lift Operator"
* #8311.003 "Diesel Locomotive and Railcar Engine Driver" "Diesel Locomotive and Railcar Engine Driver"
* #8311.004 "Locomotive Engine Driver" "Locomotive Engine Driver"
* #8311.005 "Locomotive Engineer" "Locomotive Engineer"
* #8311.006 "Locomotive Foreman" "Locomotive Foreman"
* #8311.007 "Mine and Quarry Engine Driver" "Mine and Quarry Engine Driver"
* #8311.008 "Railway Engine Driver" "Railway Engine Driver"
* #8311.009 "Railway Engine Drivers Assistant" "Railway Engine Drivers Assistant"
* #8311.010 "Railway Locomotive Driver" "Railway Locomotive Driver"
* #8311.011 "Railway Locomotive Fireman" "Railway Locomotive Fireman"
* #8311.012 "Train Driver" "Train Driver"
* #8311.013 "Train Operator" "Train Operator"
* #8311.014 "Underground or Elevator Train Driver" "Underground or Elevator Train Driver"
* #8321.001 "Cab Driver" "Cab Driver"
* #8321.002 "Chauffeur" "Chauffeur"
* #8321.003 "Contract Car Driver" "Contract Car Driver"
* #8321.004 "Driver Education Teacher" "Driver Education Teacher"
* #8321.005 "Driver Trainer" "Driver Trainer"
* #8321.006 "Driving Instructor" "Driving Instructor"
* #8321.007 "Driving Tutor" "Driving Tutor"
* #8321.008 "Kaitaraiwa Takihi" "Kaitaraiwa Takihi"
* #8321.009 "Kaitaraiwa Takihii" "Kaitaraiwa Takihii"
* #8321.010 "Light Lorry Driver" "Light Lorry Driver"
* #8321.011 "Light Truck Driver" "Light Truck Driver"
* #8321.012 "Light Van Driver" "Light Van Driver"
* #8321.013 "Limousine Driver" "Limousine Driver"
* #8321.014 "Motor Car Driver" "Motor Car Driver"
* #8321.015 "Service Car Driver" "Service Car Driver"
* #8321.016 "Shuttle Driver" "Shuttle Driver"
* #8321.017 "Storeman Driver" "Storeman Driver"
* #8321.018 "Storeperson Driver General" "Storeperson Driver General"
* #8321.019 "Taxi Driver" "Taxi Driver"
* #8321.020 "Taxi Operator" "Taxi Operator"
* #8321.021 "Taxi Owner" "Taxi Owner"
* #8321.022 "Taxi Proprietor" "Taxi Proprietor"
* #8321.023 "Tourist Car Operator" "Tourist Car Operator"
* #8321.024 "Van Driver" "Van Driver"
* #8322.001 "Bus Driver" "Bus Driver"
* #8322.002 "Bus Operator" "Bus Operator"
* #8322.003 "Coach Captain (Bus)" "Coach Captain (Bus)"
* #8322.004 "Coach Driver" "Coach Driver"
* #8322.005 "Coach Tour Driver" "Coach Tour Driver"
* #8322.006 "Kaitaraiwa Pahi" "Kaitaraiwa Pahi"
* #8322.007 "Motor or Trolley Bus Driver" "Motor or Trolley Bus Driver"
* #8322.008 "Passenger Coach Driver" "Passenger Coach Driver"
* #8322.009 "School Bus Driver" "School Bus Driver"
* #8322.010 "Tour Bus Driver" "Tour Bus Driver"
* #8322.011 "Tour Bus Operator" "Tour Bus Operator"
* #8322.012 "Tourist Bus Operator" "Tourist Bus Operator"
* #8322.013 "Tram Driver" "Tram Driver"
* #8322.014 "Tram Motorman" "Tram Motorman"
* #8322.015 "Trolley Bus Driver" "Trolley Bus Driver"
* #8323.001 "Articulated Truck Drvier" "Articulated Truck Drvier"
* #8323.002 "Articulator Driver" "Articulator Driver"
* #8323.003 "Car Freighter Driver" "Car Freighter Driver"
* #8323.004 "Cartage Contractor" "Cartage Contractor"
* #8323.005 "Concrete Delivery Driver" "Concrete Delivery Driver"
* #8323.006 "Driver Car Delivery" "Driver Car Delivery"
* #8323.007 "Freight Operator" "Freight Operator"
* #8323.008 "Heavy Lorry Driver" "Heavy Lorry Driver"
* #8323.009 "Heavy Tanker Driver" "Heavy Tanker Driver"
* #8323.010 "Heavy Truck Driver" "Heavy Truck Driver"
* #8323.011 "Kaitairaiwa Waka Taumaha" "Kaitairaiwa Waka Taumaha"
* #8323.012 "Kaitaraiwa Taraka" "Kaitaraiwa Taraka"
* #8323.013 "Kaitaraiwa Waka" "Kaitaraiwa Waka"
* #8323.014 "Lorry Driver" "Lorry Driver"
* #8323.015 "Milk Tanker Driver" "Milk Tanker Driver"
* #8323.016 "Removal Van Driver" "Removal Van Driver"
* #8323.017 "Stock Transporter Driver" "Stock Transporter Driver"
* #8323.018 "Tanker Driver" "Tanker Driver"
* #8323.019 "Truck Driver" "Truck Driver"
* #8323.020 "Trucker" "Trucker"
* #8323.021 "Vehicle Transporter Carrier Driver" "Vehicle Transporter Carrier Driver"
* #8331.001 "Agricultural Contractor" "Agricultural Contractor"
* #8331.002 "Agricultural Machine and Equipment Operator" "Agricultural Machine and Equipment Operator"
* #8331.003 "Agricultural Sprayer" "Agricultural Sprayer"
* #8331.004 "Bulk Lime Spreader" "Bulk Lime Spreader"
* #8331.005 "Chemical Applicator" "Chemical Applicator"
* #8331.006 "Combine Operator" "Combine Operator"
* #8331.007 "Contractor Topdressing on Land" "Contractor Topdressing on Land"
* #8331.008 "Farm Contractor" "Farm Contractor"
* #8331.009 "Farm Equipment Operator" "Farm Equipment Operator"
* #8331.010 "Farm Machinery Contractor" "Farm Machinery Contractor"
* #8331.011 "Farm Machinery Operator" "Farm Machinery Operator"
* #8331.012 "Fertilizer Spreader" "Fertilizer Spreader"
* #8331.013 "Ground Chemical Applicator" "Ground Chemical Applicator"
* #8331.014 "Ground Spraying or Dusting Contractor" "Ground Spraying or Dusting Contractor"
* #8331.015 "Ploughing Contractor" "Ploughing Contractor"
* #8331.016 "Potato Digging Contractor" "Potato Digging Contractor"
* #8331.017 "Seed Cleaning Contractor" "Seed Cleaning Contractor"
* #8331.018 "Seed Machine Operator Farm" "Seed Machine Operator Farm"
* #8331.019 "Soil Fumigator" "Soil Fumigator"
* #8331.020 "Spraying Contractor on Land" "Spraying Contractor on Land"
* #8331.021 "Threshing Mill Operator Worker" "Threshing Mill Operator Worker"
* #8331.022 "Tractor Driver" "Tractor Driver"
* #8331.023 "Tractor Driver Farm" "Tractor Driver Farm"
* #8331.024 "Weed Sprayer Contractor Worker" "Weed Sprayer Contractor Worker"
* #8332.001 "Asphalt Spreader Machine Operator" "Asphalt Spreader Machine Operator"
* #8332.002 "Bitumen Sprayer Operator" "Bitumen Sprayer Operator"
* #8332.003 "Bobcat Operator" "Bobcat Operator"
* #8332.004 "Bulldozer Driver" "Bulldozer Driver"
* #8332.005 "Bulldozer Operator" "Bulldozer Operator"
* #8332.006 "Bulldozing Contractor Driver Operator Farm" "Bulldozing Contractor Driver Operator Farm"
* #8332.007 "Digger Driver" "Digger Driver"
* #8332.008 "Digging Machine Operator" "Digging Machine Operator"
* #8332.009 "Dragline Operator Driver" "Dragline Operator Driver"
* #8332.010 "Dredge Operator" "Dredge Operator"
* #8332.011 "Dredger" "Dredger"
* #8332.012 "Driller Operator" "Driller Operator"
* #8332.013 "Driver Dumper" "Driver Dumper"
* #8332.014 "Driver Front End Loader" "Driver Front End Loader"
* #8332.015 "Earthmoving and Construction Machinery Operator" "Earthmoving and Construction Machinery Operator"
* #8332.016 "Earthmoving Contractor" "Earthmoving Contractor"
* #8332.017 "Earthmoving Machine Operator" "Earthmoving Machine Operator"
* #8332.018 "Earthwork Contractor" "Earthwork Contractor"
* #8332.019 "Excavating Machine Operator" "Excavating Machine Operator"
* #8332.020 "Grab Bucket Operator Driver" "Grab Bucket Operator Driver"
* #8332.021 "Grader Driver" "Grader Driver"
* #8332.022 "Hot Mix Sprayer" "Hot Mix Sprayer"
* #8332.023 "Paving Contractor" "Paving Contractor"
* #8332.024 "Paving Machine Operator Concrete Bitumen" "Paving Machine Operator Concrete Bitumen"
* #8332.025 "Pile Driver Operator" "Pile Driver Operator"
* #8332.026 "Road Grader Driver" "Road Grader Driver"
* #8332.027 "Road Making Machine Operator" "Road Making Machine Operator"
* #8332.028 "Road Making Machine Operator Supervisor" "Road Making Machine Operator Supervisor"
* #8332.029 "Road Repairer" "Road Repairer"
* #8332.030 "Road Roller Driver" "Road Roller Driver"
* #8332.031 "Road Scraper Driver Operator" "Road Scraper Driver Operator"
* #8332.032 "Roading Construction Worker" "Roading Construction Worker"
* #8332.033 "Roading or Paving Machine Operator" "Roading or Paving Machine Operator"
* #8332.034 "Roading Supervisor" "Roading Supervisor"
* #8332.035 "Scoop Truck Operator Driver" "Scoop Truck Operator Driver"
* #8332.036 "Special Operator Roading" "Special Operator Roading"
* #8332.037 "Sprayer Tar or Bitumen" "Sprayer Tar or Bitumen"
* #8332.038 "Steam Shovel Driver" "Steam Shovel Driver"
* #8332.039 "Tar Sealing Machine Operator" "Tar Sealing Machine Operator"
* #8332.040 "Traffic Counter Layer" "Traffic Counter Layer"
* #8332.041 "Trench Digging Machine Operator" "Trench Digging Machine Operator"
* #8332.042 "Trench Ditch Digger" "Trench Ditch Digger"
* #8333.001 "Bridge or Gantry Crane Operator" "Bridge or Gantry Crane Operator"
* #8333.002 "Crane Driver" "Crane Driver"
* #8333.003 "Crane Operator" "Crane Operator"
* #8333.004 "Derrick Operator" "Derrick Operator"
* #8333.005 "Elevator Operator Material Handling" "Elevator Operator Material Handling"
* #8333.006 "Foundry Lifter" "Foundry Lifter"
* #8333.007 "Hoist Driver Operator Construction" "Hoist Driver Operator Construction"
* #8333.008 "Hoist Operator Mine" "Hoist Operator Mine"
* #8333.009 "Jib Operator" "Jib Operator"
* #8333.010 "Lift Attendant Goods" "Lift Attendant Goods"
* #8333.011 "Lifter Railway Workshops" "Lifter Railway Workshops"
* #8333.012 "Mobile Crane Driver" "Mobile Crane Driver"
* #8333.013 "Mobile Crane Operator" "Mobile Crane Operator"
* #8333.014 "Stationary Crane Driver" "Stationary Crane Driver"
* #8333.015 "Stationary Crane Operator" "Stationary Crane Operator"
* #8333.016 "Tower Crane Operator" "Tower Crane Operator"
* #8333.017 "Winch Driver Operator" "Winch Driver Operator"
* #8334.001 "Car Wreck Tow Operator" "Car Wreck Tow Operator"
* #8334.002 "Driver Material Handling Equipment" "Driver Material Handling Equipment"
* #8334.003 "Fork Hoist Driver" "Fork Hoist Driver"
* #8334.004 "Fork Hoist Operator" "Fork Hoist Operator"
* #8334.005 "Fork Lift Driver" "Fork Lift Driver"
* #8334.006 "Forklift Driver" "Forklift Driver"
* #8334.007 "Forklift Operator" "Forklift Operator"
* #8334.008 "Hoist Truck Operator" "Hoist Truck Operator"
* #8334.009 "Kaitaraiwa Waka Uta" "Kaitaraiwa Waka Uta"
* #8334.010 "Lumber Carrier Driver" "Lumber Carrier Driver"
* #8334.011 "Straddle Carrier Driver" "Straddle Carrier Driver"
* #8334.012 "Straddle Carrier Operator" "Straddle Carrier Operator"
* #8334.013 "Straddle Truck Driver" "Straddle Truck Driver"
* #8334.014 "Timber Carrier Driver" "Timber Carrier Driver"
* #8334.015 "Tow Truck Driver" "Tow Truck Driver"
* #8334.016 "Tow Truck Operator" "Tow Truck Operator"
* #8334.017 "Vehicle Recovery Operator" "Vehicle Recovery Operator"
* #8334.018 "Warehouse Forklift Driver" "Warehouse Forklift Driver"
* #8341.001 "Able Seaman Merchant Marine" "Able Seaman Merchant Marine"
* #8341.002 "Boatman Boat Barge Ship" "Boatman Boat Barge Ship"
* #8341.003 "Charter Boat Operator" "Charter Boat Operator"
* #8341.004 "Cruise Boat Proprietor" "Cruise Boat Proprietor"
* #8341.005 "Deck Hand" "Deck Hand"
* #8341.006 "Deck Rating" "Deck Rating"
* #8341.007 "Deckhand" "Deckhand"
* #8341.008 "Ferryman" "Ferryman"
* #8341.009 "Jet Boat Operator" "Jet Boat Operator"
* #8341.010 "Launchman" "Launchman"
* #8341.011 "Mariner" "Mariner"
* #8341.012 "Merchant Sailor" "Merchant Sailor"
* #8341.013 "Merchant Seaman" "Merchant Seaman"
* #8341.014 "Ordinary Seaman" "Ordinary Seaman"
* #8341.015 "Other Ship or Boat Hand" "Other Ship or Boat Hand"
* #8341.016 "Quartermaster Ship" "Quartermaster Ship"
* #8341.017 "Seaman" "Seaman"
* #8341.018 "Ship Crew Member" "Ship Crew Member"
* #8411.001 "Accoustical Engineering Insulator" "Accoustical Engineering Insulator"
* #8411.002 "Aluminium Joiner" "Aluminium Joiner"
* #8411.003 "Aluminum Worker" "Aluminum Worker"
* #8411.004 "Building Exterior Cleaner" "Building Exterior Cleaner"
* #8411.005 "Building Insulator" "Building Insulator"
* #8411.006 "Cable Splicer" "Cable Splicer"
* #8411.007 "Construction Bracer" "Construction Bracer"
* #8411.008 "Construction Cable Layer" "Construction Cable Layer"
* #8411.009 "Construction Cable Puller" "Construction Cable Puller"
* #8411.010 "Construction Steel Erector" "Construction Steel Erector"
* #8411.011 "Construction Steel Worker" "Construction Steel Worker"
* #8411.012 "Drain Layer" "Drain Layer"
* #8411.013 "Drain Layers Labourer" "Drain Layers Labourer"
* #8411.014 "Drain Pipe Layer" "Drain Pipe Layer"
* #8411.015 "Drainage Contractor" "Drainage Contractor"
* #8411.016 "Drainlayer" "Drainlayer"
* #8411.017 "Drainlayers Labourer" "Drainlayers Labourer"
* #8411.018 "Fibreglass Batts Installer" "Fibreglass Batts Installer"
* #8411.019 "Fire Hydrant Repairman" "Fire Hydrant Repairman"
* #8411.020 "Forest Rigger" "Forest Rigger"
* #8411.021 "Gas Fitter" "Gas Fitter"
* #8411.022 "Gasfitter" "Gasfitter"
* #8411.023 "Heating Ventilation Air Conditioning Lagger" "Heating Ventilation Air Conditioning Lagger"
* #8411.024 "Hoisting Equipment Rigger" "Hoisting Equipment Rigger"
* #8411.025 "Insulating Contractor" "Insulating Contractor"
* #8411.026 "Insulation Installer" "Insulation Installer"
* #8411.027 "Insulator" "Insulator"
* #8411.028 "Logging Rigger" "Logging Rigger"
* #8411.029 "LPG Fitter" "LPG Fitter"
* #8411.030 "Marker Structural Steel" "Marker Structural Steel"
* #8411.031 "Metal Plate Bender" "Metal Plate Bender"
* #8411.032 "Pipe Fitter" "Pipe Fitter"
* #8411.033 "Pipe Lagger" "Pipe Lagger"
* #8411.034 "Pipe Layer" "Pipe Layer"
* #8411.035 "Process Worker Metal Doors Windows" "Process Worker Metal Doors Windows"
* #8411.036 "Process Worker Metal Heaters" "Process Worker Metal Heaters"
* #8411.037 "Reinforcing Iron Worker Construction" "Reinforcing Iron Worker Construction"
* #8411.038 "Rigger" "Rigger"
* #8411.039 "Roof Repairer" "Roof Repairer"
* #8411.040 "Roof Slater" "Roof Slater"
* #8411.041 "Roof Tiler" "Roof Tiler"
* #8411.042 "Roof Worker" "Roof Worker"
* #8411.043 "Roofer" "Roofer"
* #8411.044 "Roofer Tiles and Slates" "Roofer Tiles and Slates"
* #8411.045 "Rope Splicer" "Rope Splicer"
* #8411.046 "Sandblaster" "Sandblaster"
* #8411.047 "Sandblaster Building Cleaning" "Sandblaster Building Cleaning"
* #8411.048 "Scaffolder" "Scaffolder"
* #8411.049 "Scaffolding Rigger" "Scaffolding Rigger"
* #8411.050 "Sewer Pipe Layer" "Sewer Pipe Layer"
* #8411.051 "Ship Rigger" "Ship Rigger"
* #8411.052 "Signal Erector" "Signal Erector"
* #8411.053 "Steam Cleaner" "Steam Cleaner"
* #8411.054 "Steam Cleaner Building Exteriors" "Steam Cleaner Building Exteriors"
* #8411.055 "Steel Bender" "Steel Bender"
* #8411.056 "Steel Fixer" "Steel Fixer"
* #8411.057 "Steel Roofer" "Steel Roofer"
* #8411.058 "Structural Metal Preparers" "Structural Metal Preparers"
* #8411.059 "Structural Steel Erector" "Structural Steel Erector"
* #8411.060 "Underground Drainlayer" "Underground Drainlayer"
* #8411.061 "Undersealer" "Undersealer"
* #8411.062 "Water Blaster" "Water Blaster"
* #8411.063 "Water Blaster Buildings" "Water Blaster Buildings"
* #8411.064 "Waterblaster" "Waterblaster"
* #8411.065 "Well Drilling Rigger" "Well Drilling Rigger"
* #8412.001 "Construction Diver" "Construction Diver"
* #8412.002 "Diver" "Diver"
* #8412.003 "Police Diver" "Police Diver"
* #8412.004 "Underwater Salvage Worker" "Underwater Salvage Worker"
* #8412.005 "Underwater Worker" "Underwater Worker"
* #9111.001 "Aeroplane and Bus Washer" "Aeroplane and Bus Washer"
* #9111.002 "Aircraft Interior Cleaner" "Aircraft Interior Cleaner"
* #9111.003 "Borer Controller" "Borer Controller"
* #9111.004 "Building Caretaker" "Building Caretaker"
* #9111.005 "Building Caretaker Supervisor" "Building Caretaker Supervisor"
* #9111.006 "Building Custodian" "Building Custodian"
* #9111.007 "Building Interior Cleaner" "Building Interior Cleaner"
* #9111.008 "Building Superintendent" "Building Superintendent"
* #9111.009 "Bus and Car Interior Cleaner" "Bus and Car Interior Cleaner"
* #9111.010 "Bus Cleaner Washer" "Bus Cleaner Washer"
* #9111.011 "Camp Attendant Supervisor" "Camp Attendant Supervisor"
* #9111.012 "Car Cleaner" "Car Cleaner"
* #9111.013 "Car Detailer" "Car Detailer"
* #9111.014 "Car Groomer" "Car Groomer"
* #9111.015 "Car Valet" "Car Valet"
* #9111.016 "Car Washer" "Car Washer"
* #9111.017 "Car Yard Assistant" "Car Yard Assistant"
* #9111.018 "Caretaker" "Caretaker"
* #9111.019 "Ceiling Cleaner" "Ceiling Cleaner"
* #9111.020 "Chimney Sweep" "Chimney Sweep"
* #9111.021 "Cleaner" "Cleaner"
* #9111.022 "Cleaning Contractor" "Cleaning Contractor"
* #9111.023 "Cleaning Supervisor" "Cleaning Supervisor"
* #9111.024 "Commercial Cleaner" "Commercial Cleaner"
* #9111.025 "Commercial Cleaning Supervisor" "Commercial Cleaning Supervisor"
* #9111.026 "Contract Cleaner" "Contract Cleaner"
* #9111.027 "Custodian" "Custodian"
* #9111.028 "Dish Washer" "Dish Washer"
* #9111.029 "Dishwasher" "Dishwasher"
* #9111.030 "Domestic Cleaner" "Domestic Cleaner"
* #9111.031 "Factory Cleaner" "Factory Cleaner"
* #9111.032 "Factory Sweeper" "Factory Sweeper"
* #9111.033 "Farm and Other Pest Control Worker" "Farm and Other Pest Control Worker"
* #9111.034 "Hospital Cleaner" "Hospital Cleaner"
* #9111.035 "Hotel Cleaner" "Hotel Cleaner"
* #9111.036 "House Cleaner" "House Cleaner"
* #9111.037 "Housecleaner" "Housecleaner"
* #9111.038 "Industrial Cleaner" "Industrial Cleaner"
* #9111.039 "Industrial Factory Cleaner" "Industrial Factory Cleaner"
* #9111.040 "Janitor" "Janitor"
* #9111.041 "Kaitahitahi" "Kaitahitahi"
* #9111.042 "Kaitiaki" "Kaitiaki"
* #9111.043 "Kaiwhakapai Whare" "Kaiwhakapai Whare"
* #9111.044 "Locomotive and Train Cleaner" "Locomotive and Train Cleaner"
* #9111.045 "Maintenance Officer Caretaker" "Maintenance Officer Caretaker"
* #9111.046 "Moss and Fungi Eradicator" "Moss and Fungi Eradicator"
* #9111.047 "Motel Cleaner" "Motel Cleaner"
* #9111.048 "Motor Camp Attendant" "Motor Camp Attendant"
* #9111.049 "Motor Vehicle Detailer" "Motor Vehicle Detailer"
* #9111.050 "Office Cleaner" "Office Cleaner"
* #9111.051 "Pest and Vermin Control Worker" "Pest and Vermin Control Worker"
* #9111.052 "Pest Control Worker" "Pest Control Worker"
* #9111.053 "Pest Eradication Worker" "Pest Eradication Worker"
* #9111.054 "Porter Apartment House" "Porter Apartment House"
* #9111.055 "Property Supervisor Caretaker" "Property Supervisor Caretaker"
* #9111.056 "Quality Controller of Cleaners" "Quality Controller of Cleaners"
* #9111.057 "Rat and Mouse Control Worker" "Rat and Mouse Control Worker"
* #9111.058 "School Caretaker" "School Caretaker"
* #9111.059 "School Cleaner" "School Cleaner"
* #9111.060 "Septic Tank Cleaner" "Septic Tank Cleaner"
* #9111.061 "Sexton C6146" "Sexton C6146"
* #9111.062 "Spider Proofer" "Spider Proofer"
* #9111.063 "Train Washer Cleaner" "Train Washer Cleaner"
* #9111.064 "Vehicle Cleaner" "Vehicle Cleaner"
* #9111.065 "Vehicle Groomer" "Vehicle Groomer"
* #9111.066 "Vehicle Washer" "Vehicle Washer"
* #9111.067 "Verger Church Janitor" "Verger Church Janitor"
* #9111.068 "Wards Maid" "Wards Maid"
* #9111.069 "Wardsmaid" "Wardsmaid"
* #9111.070 "Window Cleaner" "Window Cleaner"
* #9111.071 "Window Cleaning Contracter" "Window Cleaning Contracter"
* #9111.072 "Window Washer" "Window Washer"
* #9121.001 "Baggage Checker" "Baggage Checker"
* #9121.002 "Baggage Handler" "Baggage Handler"
* #9121.003 "Bicycle Courier" "Bicycle Courier"
* #9121.004 "Circular Distributor" "Circular Distributor"
* #9121.005 "Commissionaire Porter" "Commissionaire Porter"
* #9121.006 "Concierge" "Concierge"
* #9121.007 "Courier" "Courier"
* #9121.008 "Courier and Deliverer" "Courier and Deliverer"
* #9121.009 "Courier Driver" "Courier Driver"
* #9121.010 "Courier Messenger" "Courier Messenger"
* #9121.011 "Delivery Driver" "Delivery Driver"
* #9121.012 "Delivery Person" "Delivery Person"
* #9121.013 "Deliveryman" "Deliveryman"
* #9121.014 "Drycleaning Deliverer" "Drycleaning Deliverer"
* #9121.015 "Errand Boy" "Errand Boy"
* #9121.016 "Fleet Courier" "Fleet Courier"
* #9121.017 "Floral Courier" "Floral Courier"
* #9121.018 "Government Messenger" "Government Messenger"
* #9121.019 "Hotel Bell Boy" "Hotel Bell Boy"
* #9121.020 "Hotel Concierge" "Hotel Concierge"
* #9121.021 "Hotel Porter" "Hotel Porter"
* #9121.022 "Kaikawe Kopaki" "Kaikawe Kopaki"
* #9121.023 "Kaikawe Meera" "Kaikawe Meera"
* #9121.024 "Kaitukunga" "Kaitukunga"
* #9121.025 "Letter Carrier" "Letter Carrier"
* #9121.026 "Messenger" "Messenger"
* #9121.027 "Milk Boy" "Milk Boy"
* #9121.028 "Milk Delivery Boy" "Milk Delivery Boy"
* #9121.029 "Milkboy" "Milkboy"
* #9121.030 "Motor Cycle Courier" "Motor Cycle Courier"
* #9121.031 "Newspaper Deliverer" "Newspaper Deliverer"
* #9121.032 "Newspaper Delivery Boy" "Newspaper Delivery Boy"
* #9121.033 "Pamphlet Deliverer" "Pamphlet Deliverer"
* #9121.034 "Paper Boy" "Paper Boy"
* #9121.035 "Paper Deliverer" "Paper Deliverer"
* #9121.036 "Paper Delivery Boy" "Paper Delivery Boy"
* #9121.037 "Paper Girl" "Paper Girl"
* #9121.038 "Paper Runner" "Paper Runner"
* #9121.039 "Paperboy" "Paperboy"
* #9121.040 "Pizza Deliverer" "Pizza Deliverer"
* #9121.041 "Pizza Delivery Person" "Pizza Delivery Person"
* #9131.001 "Council Sweeper" "Council Sweeper"
* #9131.002 "Dustman" "Dustman"
* #9131.003 "Garbage Collector" "Garbage Collector"
* #9131.004 "Garden Rubbish Collector" "Garden Rubbish Collector"
* #9131.005 "Litter Control Officer" "Litter Control Officer"
* #9131.006 "Park and Gardens Sweeper" "Park and Gardens Sweeper"
* #9131.007 "Park and Public Garden Cleaner" "Park and Public Garden Cleaner"
* #9131.008 "Park Cleaner" "Park Cleaner"
* #9131.009 "Parks and Reserves Labourer" "Parks and Reserves Labourer"
* #9131.010 "Recycler" "Recycler"
* #9131.011 "Refuse Collector" "Refuse Collector"
* #9131.012 "Road Sweeper" "Road Sweeper"
* #9131.013 "Rubbish Collection Contractor" "Rubbish Collection Contractor"
* #9131.014 "Rubbish Collector" "Rubbish Collector"
* #9131.015 "Street or Park Cleaner" "Street or Park Cleaner"
* #9131.016 "Street Sweeper Cleaner" "Street Sweeper Cleaner"
* #9141.001 "Aircraft Loader" "Aircraft Loader"
* #9141.002 "Baggage Handler Freight" "Baggage Handler Freight"
* #9141.003 "Baggage Officer Storeman" "Baggage Officer Storeman"
* #9141.004 "Boat and Ship Cargo Loader" "Boat and Ship Cargo Loader"
* #9141.005 "Boxer Packer" "Boxer Packer"
* #9141.006 "Bread Packer" "Bread Packer"
* #9141.007 "Can and Tin Filler" "Can and Tin Filler"
* #9141.008 "Candle Maker Moulder Dipper" "Candle Maker Moulder Dipper"
* #9141.009 "Cargo Handler" "Cargo Handler"
* #9141.010 "Cargo Serviceman" "Cargo Serviceman"
* #9141.011 "Cargo Worker" "Cargo Worker"
* #9141.012 "Checker and Loader Transport Vehicle" "Checker and Loader Transport Vehicle"
* #9141.013 "Confectionery Packer" "Confectionery Packer"
* #9141.014 "Conveyer Belt Operator" "Conveyer Belt Operator"
* #9141.015 "Docker Wharf" "Docker Wharf"
* #9141.016 "Egg Grader and Packer" "Egg Grader and Packer"
* #9141.017 "Egg Processor" "Egg Processor"
* #9141.018 "Engineering Storeman" "Engineering Storeman"
* #9141.019 "Engineering Storeperson" "Engineering Storeperson"
* #9141.020 "Filling Machine Operator" "Filling Machine Operator"
* #9141.021 "Food Packer" "Food Packer"
* #9141.022 "Freight Handler Labourer Wharf" "Freight Handler Labourer Wharf"
* #9141.023 "Freight Handler Offsider" "Freight Handler Offsider"
* #9141.024 "Fruit Grader and Packer Market" "Fruit Grader and Packer Market"
* #9141.025 "Furniture Mover Offsider" "Furniture Mover Offsider"
* #9141.026 "Furniture Packer Remover" "Furniture Packer Remover"
* #9141.027 "Furniture Removal Person" "Furniture Removal Person"
* #9141.028 "General Storeperson" "General Storeperson"
* #9141.029 "Goodshed Labourer Railway" "Goodshed Labourer Railway"
* #9141.030 "Hand or Machine Labeller" "Hand or Machine Labeller"
* #9141.031 "Harbour Board Worker" "Harbour Board Worker"
* #9141.032 "Hose Handler" "Hose Handler"
* #9141.033 "Jar or Bottle Filler" "Jar or Bottle Filler"
* #9141.034 "Kaitakupe" "Kaitakupe"
* #9141.035 "Kaiwhawhao" "Kaiwhawhao"
* #9141.036 "Kaiwhawhao Miiti" "Kaiwhawhao Miiti"
* #9141.037 "Kaiwhawhao Miti" "Kaiwhawhao Miti"
* #9141.038 "Leading Freight Hand" "Leading Freight Hand"
* #9141.039 "Liquid and Gas Loader Ship or Boat" "Liquid and Gas Loader Ship or Boat"
* #9141.040 "Loader Aerial Topdressing" "Loader Aerial Topdressing"
* #9141.041 "Loader Driver" "Loader Driver"
* #9141.042 "Loader Operator" "Loader Operator"
* #9141.043 "Loader or Checker" "Loader or Checker"
* #9141.044 "Longshoreman" "Longshoreman"
* #9141.045 "Lorry Loader" "Lorry Loader"
* #9141.046 "Market Warehouse Porter" "Market Warehouse Porter"
* #9141.047 "Match Packer Filler" "Match Packer Filler"
* #9141.048 "Meat Packer" "Meat Packer"
* #9141.049 "Meat Preparer and Packer Freezing Works" "Meat Preparer and Packer Freezing Works"
* #9141.050 "Milk Bottler" "Milk Bottler"
* #9141.051 "Mussel Packer" "Mussel Packer"
* #9141.052 "Packer" "Packer"
* #9141.053 "Packer and Examiner" "Packer and Examiner"
* #9141.054 "Packing Machine Operator" "Packing Machine Operator"
* #9141.055 "Paint Tin Filler" "Paint Tin Filler"
* #9141.056 "Paper Mill Baler" "Paper Mill Baler"
* #9141.057 "Press Operator Bale" "Press Operator Bale"
* #9141.058 "Quality Controller of Packers" "Quality Controller of Packers"
* #9141.059 "Rail and Road Transport Vehicle Loader" "Rail and Road Transport Vehicle Loader"
* #9141.060 "Railway Brakeman" "Railway Brakeman"
* #9141.061 "Railway Checker" "Railway Checker"
* #9141.062 "Railway Employee Rail Freight" "Railway Employee Rail Freight"
* #9141.063 "Railway Operator" "Railway Operator"
* #9141.064 "Railway Pointsman" "Railway Pointsman"
* #9141.065 "Railway Porter" "Railway Porter"
* #9141.066 "Railway Shunter" "Railway Shunter"
* #9141.067 "Railway Signalman" "Railway Signalman"
* #9141.068 "Railway Traffic Assistant" "Railway Traffic Assistant"
* #9141.069 "Railway Traffic Operator" "Railway Traffic Operator"
* #9141.070 "Sack or Bag Filler" "Sack or Bag Filler"
* #9141.071 "Sealing and Capping Machine Operator" "Sealing and Capping Machine Operator"
* #9141.072 "Shunter" "Shunter"
* #9141.073 "Signal Man" "Signal Man"
* #9141.074 "Stacker Textiles" "Stacker Textiles"
* #9141.075 "Stevedore" "Stevedore"
* #9141.076 "Store Hand" "Store Hand"
* #9141.077 "Storeman Packer" "Storeman Packer"
* #9141.078 "Storeperson Packer" "Storeperson Packer"
* #9141.079 "Storeperson Shelver" "Storeperson Shelver"
* #9141.080 "Tube Filler Food" "Tube Filler Food"
* #9141.081 "Warehouse Assistant" "Warehouse Assistant"
* #9141.082 "Warehouse Assistant Sales" "Warehouse Assistant Sales"
* #9141.083 "Warehouse Offsider" "Warehouse Offsider"
* #9141.084 "Warehouse Packer" "Warehouse Packer"
* #9141.085 "Warehouse Person" "Warehouse Person"
* #9141.086 "Warehouse Shelver" "Warehouse Shelver"
* #9141.087 "Warehouse Supervisor Loader Packer" "Warehouse Supervisor Loader Packer"
* #9141.088 "Warehouse Worker" "Warehouse Worker"
* #9141.089 "Warehouseman" "Warehouseman"
* #9141.090 "Warehouseman Wholesale" "Warehouseman Wholesale"
* #9141.091 "Waterside Worker" "Waterside Worker"
* #9141.092 "Watersider" "Watersider"
* #9141.093 "Wharf Overseer" "Wharf Overseer"
* #9141.094 "Wool Packer" "Wool Packer"
* #9141.095 "Wool Presser" "Wool Presser"
* #9141.096 "Wrapper" "Wrapper"
* #9141.097 "Wrapping Machine Operator" "Wrapping Machine Operator"
* #9151.001 "Bitumen Mixer Roading" "Bitumen Mixer Roading"
* #9151.002 "Boilermakers Labourer" "Boilermakers Labourer"
* #9151.003 "Bricklayers Labourer" "Bricklayers Labourer"
* #9151.004 "Bridge Construction Labourer" "Bridge Construction Labourer"
* #9151.005 "Bridge Maintenance Man" "Bridge Maintenance Man"
* #9151.006 "Bridge Maintenance Person" "Bridge Maintenance Person"
* #9151.007 "Builders Labourer" "Builders Labourer"
* #9151.008 "Building Construction Labourer" "Building Construction Labourer"
* #9151.009 "Building Maintenance Man" "Building Maintenance Man"
* #9151.010 "Car Marshall (Ferry)" "Car Marshall (Ferry)"
* #9151.011 "Council Labourer" "Council Labourer"
* #9151.012 "Demolition Contractor" "Demolition Contractor"
* #9151.013 "Demolition Labourer" "Demolition Labourer"
* #9151.014 "Digging Labourer" "Digging Labourer"
* #9151.015 "Ditch Digger" "Ditch Digger"
* #9151.016 "Electric Power Construction Work Labourer" "Electric Power Construction Work Labourer"
* #9151.017 "Factory Hand" "Factory Hand"
* #9151.018 "Factory Hand Sports Goods" "Factory Hand Sports Goods"
* #9151.019 "Factory Labourer" "Factory Labourer"
* #9151.020 "Fencing Labourer" "Fencing Labourer"
* #9151.021 "Fitters Mate" "Fitters Mate"
* #9151.022 "General Factory Hand" "General Factory Hand"
* #9151.023 "General Labourer" "General Labourer"
* #9151.024 "Gravedigger" "Gravedigger"
* #9151.025 "Handyman" "Handyman"
* #9151.026 "Harbour Construction Labourer" "Harbour Construction Labourer"
* #9151.027 "Hydro Contract Labourer" "Hydro Contract Labourer"
* #9151.028 "Irrigation Worker" "Irrigation Worker"
* #9151.029 "Kaiawhina Hanga Whare" "Kaiawhina Hanga Whare"
* #9151.030 "Kaiawhina Wheketere" "Kaiawhina Wheketere"
* #9151.031 "Kaimahi" "Kaimahi"
* #9151.032 "Kaimahi Hanga Whare" "Kaimahi Hanga Whare"
* #9151.033 "Kaimahi Whare Papa" "Kaimahi Whare Papa"
* #9151.034 "Kaimahi Wheketere" "Kaimahi Wheketere"
* #9151.035 "Kaiwhakarite Raakau" "Kaiwhakarite Raakau"
* #9151.036 "Kaiwhakarite Rakau" "Kaiwhakarite Rakau"
* #9151.037 "Kerb Setter" "Kerb Setter"
* #9151.038 "Mill Hand Worker Woollen Mill" "Mill Hand Worker Woollen Mill"
* #9151.039 "Navvy" "Navvy"
* #9151.040 "Navvy Railway" "Navvy Railway"
* #9151.041 "Offsider" "Offsider"
* #9151.042 "Plasterers Labourer" "Plasterers Labourer"
* #9151.043 "Plumbers Labourer" "Plumbers Labourer"
* #9151.044 "Quality Controller of Builders Labourers" "Quality Controller of Builders Labourers"
* #9151.045 "Quality Controller of General Labourers" "Quality Controller of General Labourers"
* #9151.046 "Quality Controller of Sawmill Labourers" "Quality Controller of Sawmill Labourers"
* #9151.047 "Railway Ballastman" "Railway Ballastman"
* #9151.048 "Railway Construction Labourer" "Railway Construction Labourer"
* #9151.049 "Railway Ganger" "Railway Ganger"
* #9151.050 "Railway Surfaceman" "Railway Surfaceman"
* #9151.051 "Railway Trackman" "Railway Trackman"
* #9151.052 "Railway Washout Man" "Railway Washout Man"
* #9151.053 "River Construction Labourer" "River Construction Labourer"
* #9151.054 "Road Construction Labourer" "Road Construction Labourer"
* #9151.055 "Road Maintenance Labourer" "Road Maintenance Labourer"
* #9151.056 "Road Surfaceman" "Road Surfaceman"
* #9151.057 "Roadman" "Roadman"
* #9151.058 "Sawmill Bullock Horseman" "Sawmill Bullock Horseman"
* #9151.059 "Sawmill Labourer" "Sawmill Labourer"
* #9151.060 "Scene Shifter" "Scene Shifter"
* #9151.061 "Stage Hand" "Stage Hand"
* #9151.062 "Survey Field Assistant" "Survey Field Assistant"
* #9151.063 "Surveyors Chainman Labourer" "Surveyors Chainman Labourer"
* #9151.064 "Timber Filleter" "Timber Filleter"
* #9151.065 "Timber Hand" "Timber Hand"
* #9151.066 "Timber Stacker Hand" "Timber Stacker Hand"
* #9151.067 "Timber Worker" "Timber Worker"
* #9151.068 "Timber Worker Sawmill" "Timber Worker Sawmill"
* #9151.069 "Timber Yard Worker" "Timber Yard Worker"
* #9151.070 "Timberworker" "Timberworker"
* #9151.071 "Tunneller" "Tunneller"
* #9151.072 "Waterworks Labourer" "Waterworks Labourer"
* #9151.073 "Waterworks Turncock" "Waterworks Turncock"
* #9151.074 "Wool Store Labourer" "Wool Store Labourer"
* #9151.075 "Yard Cleanup Man" "Yard Cleanup Man"
* #9151.076 "Yardman Freight" "Yardman Freight"
* #9151.077 "Yardman Sawmill Wood Yards" "Yardman Sawmill Wood Yards"
* #9970.001 "Prostitute" "Prostitute"
* #9970.002 "Refugee" "Refugee"
* #9970.003 "Sex Worker" "Sex Worker"
* #9970.004 "Escort" "Escort"
* #9980.001 "Not Specified" "Not Specified"
* #9980.002 "N/S" "N/S"
* #9980.003 "Not Defined" "Not Defined"
* #9980.004 "Not Detailed" "Not Detailed"
* #9980.005 "Other" "Other"
* #9980.006 "Unknown" "Unknown"
* #9991.001 "Domestic Executive" "Domestic Executive"
* #9991.002 "Foster Mother" "Foster Mother"
* #9991.003 "Foster Father" "Foster Father"
* #9991.004 "Home Executive" "Home Executive"
* #9991.005 "Homemaker" "Homemaker"
* #9991.006 "House Husband" "House Husband"
* #9991.007 "Housewife" "Housewife"
* #9991.008 "Mother" "Mother"
* #9991.009 "Parent" "Parent"
* #9991.010 "Widow" "Widow"
* #9991.011 "Widower" "Widower"
* #9991.012 "Single Parent" "Single Parent"
* #9991.013 "Solo Parent" "Solo Parent"
* #9991.014 "Single Father" "Single Father"
* #9991.015 "Solo Father" "Solo Father"
* #9991.016 "Single Mother" "Single Mother"
* #9991.017 "Solo Mother" "Solo Mother"
* #9991.018 "Caregiver" "Caregiver"
* #9991.019 "Adoptive Parent" "Adoptive Parent"
* #9991.020 "Host Parent" "Host Parent"
* #9991.021 "Father" "Father"
* #9991.022 "Carer" "Carer"
* #9991.023 "Mother At Home" "Mother At Home"
* #9991.024 "Father At Home" "Father At Home"
* #9991.025 "Step-parent" "Step-parent"
* #9991.026 "Stepmother" "Stepmother"
* #9991.027 "Stepfather" "Stepfather"
* #9991.028 "Household Work/Cooking/Repairs" "Household Work/Cooking/Repairs"
* #9991.029 "Looking after a Child" "Looking after a Child"
* #9991.030 "Looking after Someone/Disabled" "Looking after Someone/Disabled"
* #9991.031 "Voluntary Help for Organisation/Marae/Group" "Voluntary Help for Organisation/Marae/Group"
* #9991.032 "Studying Less than 20Hrs Per Week" "Studying Less than 20Hrs Per Week"
* #9992.001 "ACC Beneficiary" "ACC Beneficiary"
* #9992.002 "Beneficiary" "Beneficiary"
* #9992.003 "Illness Beneficiary" "Illness Beneficiary"
* #9992.004 "Sickness Allowance Recipient" "Sickness Allowance Recipient"
* #9992.005 "Sickness Beneficiary" "Sickness Beneficiary"
* #9992.006 "Illness Compensation Recipient" "Illness Compensation Recipient"
* #9992.007 "ACC Claimant" "ACC Claimant"
* #9992.008 "ACC Client" "ACC Client"
* #9992.009 "Invalids Benefit" "Invalids Benefit"
* #9992.010 "Domestic Purposes Benefit Recipient" "Domestic Purposes Benefit Recipient"
* #9992.011 "WINZ � Sickness Benefit" "WINZ � Sickness Benefit"
* #9992.012 "Community Wage � Sickness Beneficiary" "Community Wage � Sickness Beneficiary"
* #9993.001 "Pensioner" "Pensioner"
* #9993.002 "Retired" "Retired"
* #9993.003 "Superannuitant" "Superannuitant"
* #9993.004 "Veterans Pension" "Veterans Pension"
* #9993.005 "WINZ Pension" "WINZ Pension"
* #9993.006 "55+ Pension" "55+ Pension"
* #9993.007 "55 Plus Pension" "55 Plus Pension"
* #9993.008 "Semi-Retired" "Semi-Retired"
* #9993.009 "Semi Retired" "Semi Retired"
* #9994.001 "Student" "Student"
* #9994.002 "Studying 20Hrs or More Per Week" "Studying 20Hrs or More Per Week"
* #9994.003 "Tertiary Student" "Tertiary Student"
* #9994.004 "Tertiary Student and Parent" "Tertiary Student and Parent"
* #9994.005 "University Student" "University Student"
* #9994.006 "Polytech Student" "Polytech Student"
* #9994.007 "Student at Technical Institute" "Student at Technical Institute"
* #9994.008 "Part-time Student" "Part-time Student"
* #9994.009 "Part Time Student" "Part Time Student"
* #9994.010 "Special Education Student" "Special Education Student"
* #9994.011 "Student of Work Training Course" "Student of Work Training Course"
* #9994.012 "Primary School Student" "Primary School Student"
* #9994.013 "Secondary School Student" "Secondary School Student"
* #9994.014 "High School Student" "High School Student"
* #9996.001 "Unemployed" "Unemployed"
* #9996.002 "Looking for employment" "Looking for employment"
* #9996.003 "Not in Labour Force" "Not in Labour Force"
* #9996.004 "Community Wage � Job Seeker" "Community Wage � Job Seeker"
* #9996.005 "Community Wage � Sickness Benefit" "Community Wage � Sickness Benefit"
* #9996.006 "Out of the Labour Force" "Out of the Labour Force"
* #9996.007 "WINZ � Sickness Benefit" "WINZ � Sickness Benefit"
* #9996.008 "Discouraged Worker" "Discouraged Worker"
* #9996.009 "Volunteer Worker" "Volunteer Worker"
* #9996.010 "Charity Worker" "Charity Worker"
* #9997.001 "Child" "Child"
* #9997.002 "Infant" "Infant"
* #9997.003 "School Child" "School Child"
* #9997.004 "Preschool Child" "Preschool Child"
* #9997.005 "Pre-school Child" "Pre-school Child"
* #9997.006 "Baby" "Baby"
* #9997.007 "Primary School Child" "Primary School Child"
* #9997.008 "High School Child" "High School Child"
* #9997.009 "Kindergarten Child" "Kindergarten Child"
* #9997.010 "Secondary School Child" "Secondary School Child"
* #9997.011 "Special Education Child" "Special Education Child"
* #9997.012 "Primary School Student" "Primary School Student"
* #9997.013 "Secondary School Student" "Secondary School Student"
* #9997.014 "High School Student" "High School Student"
* #9997.015 "College Student" "College Student"
* #9999.001 "Not Applicable" "Not Applicable"
* #9999.002 "N/A" "N/A"
* #9999.003 "Work Status Unidentifiable" "Work Status Unidentifiable"
* #9999.004 "No Details Recorded" "No Details Recorded"


---

