File: repos/HL7_SLASH_cql-ig/sushi-config.yaml

# This IG YML file is inspired by the ImplementationGuide resource
# and also draws from package.json, package-list.json, and ig.ini.
# That said, it is structured for ease-of-use, so it is not strictly
# conformant to any of those existing configuration formats.

# SUSHI will use id as both id and packageId in the IG unless a
# specific packageId is also provided in this file.
id: hl7.fhir.uv.cql
canonical: http://hl7.org/fhir/uv/cql
name: CQL
title: Using CQL with FHIR
description: >-
  This implementation guide defines profiles, operations and guidance for the
  use of CQL with FHIR, both as a mechanism for querying, as well as inline
  and integrated usage as part of knowledge artifacts.
status: active
license: CC0-1.0
date: 2024-06-10
version: 2.0.0-ballot

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
copyrightYear: 2023+
releaseLabel: STU2Ballot

# The publisher can be a single item or a list, each with a name and
# optional url and/or email. The first publisher's name will be used
# as IG.publisher.  The contact details and/or additional publishers
# will be translated into IG.contact values.
publisher:
  name: HL7 International / Clinical Decision Support

extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: cds

# Those who need more control or want to add additional details to the contact values can use
# contact directly and follow the format outlined in the ImplementationGuide resource and
# ContactDetail.
contact:
  - telecom:
    - system: url
      value: http://www.hl7.org/Special/committees/dss

# The jurisdiction can be a single item or a list. The FHIR Shorthand
# code syntax can be used here.
jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#001 "World"

# The dependencies property corresponds to IG.dependsOn. The key is the
# package id and the value is the version (or dev/current). For advanced
# use cases, the value can be an object with keys for `uri` and `version`.
# For R5 ImplementationGuides, the object can also have a key for `reason`.
dependencies:
#  hl7.terminology: 6.1.0
  hl7.fhir.uv.extensions.r4: 
    id: ext
    version: 5.1.0

parameters:
  apply-contact: true
  apply-publisher: true
  apply-version: true
  apply-jurisdiction: true
  apply-license: true
  apply-copyright: true
  apply-wg: true
  excludettl: true
  jira-code: uv-cql
  path-binary: input/cql
  path-history: http://hl7.org/fhir/uv/cql/history.html
  auto-oid-root: 2.16.840.1.113883.4.642.40.37

pages:
  index.md:
    title: Home
  using-cql.md:
    title: Using CQL
  patterns.md:
    title: Patterns
  conformance.md:
    title: Conformance
  using-elm.md:
    title: Using ELM
  using-modelinfo.md:
    title: Using ModelInfo
  profiles.md:
    title: Profiles
  extensions.md:
    title: Extensions
  operations.md:
    title: Operations
  capabilities.md:
    title: Capabilities
  terminology.md:
    title: Terminology
  artifacts.xml:
    title: Artifacts Summary
  downloads.md:
    title: Downloads
  changes.md:
    title: Changes

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
  # ImplementationGuide/hl7.fhir.uv.cpg.chf: omit #omit this because this template does not generate HTML for IG, so the link from TOC fails
#   Patient/my-example-patient:
#     name: My Example Patient
#     description: An example Patient
#     exampleBoolean: true
#   Patient/bad-example: omit

resources:
  Parameters/qicore-modelinfosettings:
    name: Example ModelInfo Settings Parameters
    description: Example Parameters resource demonstrating the use of ModelInfo configuration parameters. This resource would typically be a contained resource in an implementation guide or artifact collection.
  Parameters/cql-evaluationresult-example:
    name: Example Evaluation Result Parameters
    description: Example Parameters resource demonstrating the use of data-absent-reason extension to indicate a null evaluation result.
  Parameters/cql-options-example:
    name: Example CQL Operations Parameters
    description: Example Parameters resource demonstrating the use of the CQLOptions profile to specify CQL translator options. This resource would typically be a contained resource in an implementation guide, artifact collection, or library.
  Parameters/cql-typemappingexampleresult:
    name: Example Type Mapping Evaluation Result Parameters
    description: Example Parameters resource showing the result of evaluating the TypeMappingExample library, demonstrating all possible CQL-to-FHIR type mappings.
  Patient/example:
    name: Example Patient
    description: Example Patient resource used as part of the observation negation example.
  Observation/negation-example:
    name: Example Negation Observation
    description: Example Observation resource illustrating negation and the use of the `notDoneValueSet` extension.


---

// File: input/_unused-pages/artifact-conformance.md


{:toc}


## Specifying eCQMs
{: #specifying-ecqms}

In FHIR, an eCQM is represented as a FHIR Measure resource containing metadata ([Section 3.1](#metadata)) and terminology ([Section 3.2](#terminology)), a population criteria section ([Section 3.4](#population-criteria)), and at least one FHIR Library resource containing a data criteria section ([Section 3.3](#data-criteria)) as well as the logic used to define the population criteria. The population criteria section typically contains initial population criteria, denominator criteria, and numerator criteria sub-components, among others. Snippet 1 shows the structure of a FHIR Measure.

```xml
<Measure>
  <!-- metadata for the measure - snipped for brevity -->
  <effectivePeriod>
    <start value="2018-01-01"/>
    <end value="2018-12-31"/>
  </effectivePeriod>
  <library value="http://hl7.org/fhir/uv/crmi/Library/EXMLogic"/>
  <group>
    <population>
      <code><coding><code value="initial-population"/></coding></code>
      <criteria value="Initial Population"/>
    </population>
    <population>
      <code><coding><code value="denominator"/></coding></code>
      <criteria value="Denominator"/>
    </population>
    <population>
      <code><coding><code value="numerator"/></coding></code>
      <criteria value="Numerator"/>
    </population>
  </group>
</Measure>
```
{: #content-pre}

Snippet 3-1: FHIR Measure structure - abridged for clarity (from sample [Measure-measure-exm.xml](Measure-measure-exm.html))

### Metadata
{: #metadata}

The header of an eCQM document identifies and classifies the document and provides important metadata about the measure. [The CMS Measures Management System Blueprint](https://www.cms.gov/Medicare/Quality-Initiatives-Patient-Assessment-Instruments/MMS/MMS-Blueprint.html) includes a list of header data elements that are specified by CMS for use by all CMS measure contractors. The Blueprint header requirements have been implemented in the Meaningful Use 2014 eCQMs and all subsequent annual updates. This IG further constrains the header in the base [Measure]({{site.data.fhir.path}}measure.html) resource by including the Blueprint header requirements.

The rest of this section describes some of the more important components to the header, such as “Related Documents” ([Section 3.1.1](#related-documents)), “Measurement Period” ([Section 3.1.2](#measurement-period)), and “Data Criteria” ([Section 3.3](#data-criteria)).

#### Related Documents
{: #related-documents}

[Clinical Quality Language R1.4](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=400) can be used in conjunction with the FHIR Measure resource to construct CQL-based quality measures. CQL is a domain specific language used in the Clinical Quality Measurement and Clinical Decision Support domains. Measures written in CQL leverage the expressivity and computability of CQL to define the population criteria used in the eCQM.

Any included CQL library must contain a library declaration line as its first line as in Snippet 3-2.

```cql
library EXM146 version '4.0.0'
```

Snippet 3-2: Library declaration line from [EXM146.cql](Library-EXM146.html#cql-content)

When using multiple CQL libraries to define a measure, refer to the [Nested Libraries](using-cql.html#nested-libraries) section of the [Using CQL](using-cql.html) topic of this guide.

Inclusion of CQL into a FHIR eCQM is accomplished through the use of a FHIR Library resource as shown in Snippet 3-4. These libraries are then incorporated into the FHIR eCQM using the `library` element of the Measure (Snippet 3). CQL library content is encoded as `base64` and included as the `content` element of the Library resource.

```xml
<library value="http://hl7.org/fhir/uv/crmi/Library/EXMLogic"/>
```
Snippet 3-3: `library` element from Snippet 3-1

Snippet 3-4 illustrates a FHIR Library resource containing a CQL library with a stable, globally unique, version-independent identifier for the library, the `url`. If the library has a version specified, the versionNumber element is used as well.

**Conformance Requirement 3.1 (Referencing CQL Documents):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-1)
{: #conformance-requirement-3-1}

1. FHIR-based eCQMs SHALL consist of a FHIR Measure resource conforming to at least the CRMIMeasure profile. In particular, FHIR-based eCQMs SHALL contain a narrative containing a human-readable representation of the measure content.
2. FHIR-based eCQM Measure and Library resource instances SHALL declare their profile.
3. Proportion Measures SHALL conform to the CRMIProportionMeasure profile or satisfy the proportion scoring constraints in the CRMIComputableMeasure profile.
4. Ratio Measures SHALL conform to the CRMIRatioMeasure profile or satisfy the ratio scoring constraints in the CRMIComputableMeasure profile.
5. Composite Measures SHALL conform to the CRMICompositeMeasure profile or satisfy the composite scoring constraints in the CRMIComputableMeasure profile.
6. Continuous Variable Measures SHALL conform to the CRMIContinuousVariableMeasure profile or satisfy the continuous variable scoring constraints in the CRMIComputableMeasure profile.
7. Cohort Measures SHALL conform to the CRMICohortMeasure profile or satisfy the cohort scoring constraints in the CRMIComputableMeasure profile.
8. Libraries used with FHIR-based eCQMs SHALL consist of a FHIR Library resource conforming to at least the CRMILibrary profile.
9. CRMIMeasures utilizing CQL libraries SHALL include exactly 1 CRMILibrary per CQL library referenced in the Measure.
10. CQL Libraries implicitly referenced through nesting of libraries MAY be included.
11. CRMILibraries SHALL include a content element for CQL.
12. The CRMILibrary content element SHALL include a sub-element with a mediaType of `text/cql`.
13. CRMILibraries SHALL specify CQL content as a base-64-encoded string in the content sub-element as content.data.
14. Any referenced CQL library SHALL contain a library declaration line.
15. The library declaration line SHALL be the first line in the library.
16. The name of the Library resource SHALL be the same as the name of the CQL library.
17. The version of the Library resource SHALL be the same as the version of the CQL library.
18. The canonical URL of the Library resource SHALL end in the name of the Library resource.

```json
{
  "resourceType": "Library",
  "id": "EXM146",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/uv/crmi/StructureDefinition/library-crmi"
    ]
  },
  "url": "http://hl7.org/fhir/uv/crmi/Library/EXM146",
  "identifier": [
    {
      "use": "official",
      "system": "http://example.org/fhir/cqi/ecqm/Library/Identifier",
      "value": "EXM146"
    }
  ],
  "version": "4.0.0",
  "name": "EXM146",
  "title": "EXM146 - Example Proportion Measure Library",
  "status": "active",
  "experimental": true,
  "type": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/library-type",
        "code": "logic-library"
      }
    ]
  },
  "date": "2019-09-03",
  "publisher": "Health Level 7 International - Clinical Decision Support Work Group",
  "contact": [
    {
      "telecom": [
        {
          "system": "url",
          "value": "http://www.hl7.org/Special/committees/dss/index.cfm"
        }
      ]
    }
  ],
  "description": "This library is used as an example in the FHIR Quality Measure Implementation Guide",
  "useContext": [
    {
      "code": {
        "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
        "code": "program"
      },
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://hl7.org/fhir/uv/crmi/CodeSystem/quality-programs",
            "code": "ep-ec",
            "display": "EP/EC"
          }
        ]
      }
    }
  ],
  "jurisdiction": [
    {
      "coding": [
        {
          "system": "urn:iso:std:iso:3166",
          "code": "US"
        }
      ]
    }
  ],
  "approvalDate": "2019-08-03",
  "lastReviewDate": "2019-08-03",
  "relatedArtifact": [
    {
      "type": "depends-on",
      "resource": "http://hl7.org/fhir/Library/FHIR-ModelInfo|4.0.1"
    },
    {
      "type": "depends-on",
      "resource": "http://hl7.org/fhir/Library/FHIRHelpers|4.0.1"
    },
    {
      "type": "depends-on",
      "resource": "http://hl7.org/fhir/Library/Common|2.0.0"
    },
    {
      "type": "depends-on",
      "resource": "http://somewhere.org/fhir/uv/mycontentig/Library/MATGlobalCommonFunctions|5.0.000"
    },
    {
      "type": "depends-on",
      "resource": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.102.12.1011"
    },
    {
      "type": "depends-on",
      "resource": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.102.12.1012"
    },
    {
      "type": "depends-on",
      "resource": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.101.12.1061"
    },
    {
      "type": "depends-on",
      "resource": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.196.12.1001"
    },
    {
      "type": "depends-on",
      "resource": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.198.12.1012"
    }
  ],
  "parameter": [
    {
      "name": "Measurement Period",
      "use": "in",
      "min": 0,
      "max": "1",
      "type": "Period"
    },
    {
      "name": "Patient",
      "use": "out",
      "min": 0,
      "max": "1",
      "type": "Patient"
    },
    {
      "name": "Is Between 2 and 17 Years of Age at Start of Measurement Period",
      "use": "out",
      "min": 0,
      "max": "1",
      "type": "boolean"
    },
    {
      "name": "Antibiotics",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "MedicationRequest"
    },
    {
      "name": "Pharyngitis",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "Condition"
    },
    {
      "name": "Measurement Period Encounters",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "Encounter"
    },
    {
      "name": "Pharyngitis Encounters With Antibiotics",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "Encounter"
    },
    {
      "name": "Initial Population",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "Encounter"
    },
    {
      "name": "Pharyngitis With Prior Antibiotics",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "Condition"
    },
    {
      "name": "Excluded Encounters",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "Encounter"
    },
    {
      "name": "Denominator Exclusions",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "Encounter"
    },
    {
      "name": "Strep Test Encounters",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "Encounter"
    },
    {
      "name": "Numerator",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "Encounter"
    }
  ],
  "dataRequirement": [
    {
      "type": "MedicationRequest",
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/MedicationRequest"
      ],
      "codeFilter": [
        {
          "path": "medication",
          "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.196.12.1001"
        }
      ]
    },
    {
      "type": "Condition",
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/Condition"
      ],
      "codeFilter": [
        {
          "path": "code",
          "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.102.12.1011"
        }
      ]
    },
    {
      "type": "Condition",
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/Condition"
      ],
      "codeFilter": [
        {
          "path": "code",
          "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.102.12.1012"
        }
      ]
    },
    {
      "type": "Encounter",
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/Encounter"
      ],
      "codeFilter": [
        {
          "path": "type",
          "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.101.12.1061"
        }
      ]
    },
    {
      "type": "Observation",
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/Observation"
      ],
      "codeFilter": [
        {
          "path": "code",
          "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.198.12.1012"
        }
      ]
    }
  ],
  "content": [
    {
      "contentType": "text/cql",
      "data": "bGli...Cg=="
    },
    {
      "contentType": "application/elm+xml",
      "data": "PD94...Cg=="
    },
    {
      "contentType": "application/elm+json",
      "data": "ew0K...DQp9"
    }
  ]
}
```

Snippet 3-4: Example CQL Library (from [library-EXM146.json](Library-EXM146.html#cql-content))

Inclusion of CQL libraries within the FHIR-based eCQM framework must conform to [Conformance Requirement 3.1](#conformance-requirement-3-1).

##### Including ELM
{: #including-elm}

CQL defines both a human-readable text representation and a machine-oriented representation called the Expression Logical Model (ELM), which can be represented using XML or JSON. The human-readable text representation is optimized for authoring while the ELM representation offers a canonical, simplified representation that is easier to implement in software. Any CQL expression can be directly translated to its ELM equivalent. Measure authors do not work with ELM directly; rather authoring tools convert CQL to the ELM representation for distribution.

Both CQL and ELM representations may be included in the Library resource depending on the requirements of the appropriate profile. It can follow the approach of supporting human readability (in this case, the high-level CQL syntax) and a canonical representation for machine processing (in this case, CQL’s Expression Logical Model (ELM)). This approach facilitates human review of measure logic via CQL and implementation of that logic in tools via ELM.

**Conformance Requirement 3.2 (Referencing ELM Documents):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-2)
{: #conformance-requirement-3-2}
1. CRMILibraries SHOULD include a content element with the ELM in either XML or JSON format
2. CRMILibraries SHALL specify ELM content as a base-64-encoded string in the content sub-element as content.data
3. An ELM translation SHOULD be provided, in either XML or JSON format.
4. For executable environments, an ELM translation SHALL be provided, in either XML or JSON format.
5. The XML representation of the ELM SHALL have a mediaType attribute
value of `application/elm+xml`
6. The JSON representation of the ELM SHALL have a mediaType attribute
value of `application/elm+json`
7. Any translation-referenced ELM documents SHALL be semantically
equivalent to the corresponding parent CQL expression document.

The content elements in Snippet 3-4 provide an example of how a CRMILibrary resource would contain both the CQL and the ELM as base-64-encoded strings. More on ELM can be found in Section 3.1.1. For examples of ELM using the XML and JSON representations please see the included examples, [EXM146.xml](Measure-measure-exm146-FHIR.xml.html) and [EXM146.json](Measure-measure-exm146-FHIR.json.html).

#### Measurement Period
{: #measurement-period}

The Measure resource uses the `effectivePeriod` element to define the "Measurement Period", a control variable as metadata that influences the computation of measures. Snippet 3-5 demonstrates how to provide the "Measurement Period" in the Measure (line: 3 of Snippet 3-1).

'Measurement Period' is anchored by the `effectivePeriod` element but not necessarily directly represented.


```xml
<effectivePeriod>
  <start value="2018-01-01"/>
  <end value="2018-12-31"/>
</effectivePeriod>
```

Snippet 3-5: Measure representation of the "Measurement Period" control variable from [(measure-exm.xml)](Measure-measure-exm.xml.html)

The value of the "Measurement Period" control variable is accessible to CQL libraries as a parameter called "Measurement Period". Snippet 3-6 shows an example of a CQL library declaring this parameter.

```cql
parameter "Measurement Period" Interval<DateTime>
```

Snippet 3-6: CQL declaration of the measurement period parameter (from [EXM146.cql](Library-EXM146.html#cql-content))

Rather than specifying a static effective period, implementations may specify the effective period using a start date and a reporting period duration.

This implementation guide defines two extensions, [`crmi-effectivePeriodAnchor`](StructureDefinition-crmi-effectivePeriodAnchor.html) and [`crmi-effectivePeriodDuration`](StructureDefinition-crmi-effectivePeriodDuration.html) to support this alternative.

As shown below in Snippet 3-7, a measure anchored to January 1, 2019 with a calendar duration of 1 year, would have valid Measurement Periods of 1/1/2019-12/31/2019, 1/1/2020-12/31/2020, etc. Note that although UCUM definite-duration units are required within FHIR, the semantics in this case use calendar duration semantics.

```xml
<effectivePeriod>
	<extension url="http://hl7.org/fhir/uv/crmi/crmi-effectivePeriodAnchor">
		<valueDateTime value="2019-01-01"/>
	</extension>
	<extension url="http://hl7.org/fhir/uv/crmi/crmi-effectivePeriodDuration">
		<valueDuration>
			<value value="1"/>
			<code value="a"/>
		</valueDuration>
	</extension>
</effectivePeriod>
```
Snippet 3-7: Example of [effectivePeriodAnchor extension](StructureDefinition-crmi-effectivePeriodAnchor.html) (used to define the starting date and range) and [effectivePeriodDuration extension](StructureDefinition-crmi-effectivePeriodDuration.html) (used to specify the reporting period).

**Conformance Requirement 3.3 (Measurement Period):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-3)
{: #conformance-requirement-3-3}
1. FHIR-based eCQMs SHALL provide either an `effectivePeriod` element, or an `crmi-effectivePeriodAnchor` and `crmi-effectivePeriodDuration` extension
2. Measurement Period SHALL be either the `effectivePeriod` as specified, or an appropriate interval of length duration, starting at the specified anchor


### Terminology
{: #terminology}

This section describes how to use codes and valuesets from codesystems like LOINC, SNOMED-CT, and others within the CQL and FHIR-based eCQM files of a measure package.

When terminology artifacts are defined and distributed as part of quality measure content, guidance provided as part of the [Clinical Practice Guideline (CPG) IG](http://build.fhir.org/ig/HL7/cqf-recommendations/documentation-terminology.html) should be followed. Note that the guidance does not apply for content that only references terminology distributed through other means.

Valuesets and direct referenced codes are declared in the header section of the CQL using the CQL valueset and code constructs. In the case of direct referenced codes, a codesystem declaration must precede the code declaration (per CQL v1.3 specification). Examples of valueset and code declarations can be seen in the accompanying [Terminology.cql](Library-Terminology.html#cql-content).


```cql
codesystem "SNOMEDCT:2017-09": 'http://snomed.info/sct'
  version 'http://snomed.info/sct/731000124108/version/201709'

valueset "Encounter Inpatient SNOMEDCT Value Set":
   'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.666.7.307|20160929'

code "Venous foot pump, device (physical object)": '442023007' from "SNOMED-CT:2017-09"
```

Snippet 3-8: CQL declaration of codesystem, valueset, and code (from [Terminology.cql](Library-Terminology.html))

Further discussion of codesystem, valueset, and code can be found in the [Using CQL Chapter](using-cql.html) of this IG, sections [4.3](using-cql.html#code-systems), [4.4](using-cql.html#value-sets), and [4.5](using-cql.html#codes).

All declared valuesets and codes can be found in the [dataRequirement](StructureDefinition-library-crmi-definitions.html#Library.dataRequirement) elements in the Library resource referenced by the Measure resource.

```json
"dataRequirement": [
  {
    "type": "CodeableConcept",
    "codeFilter": [
      {
        "valueCoding": {
          "system": "http://snomed.info/sct",
          "version": "http://snomed.info/sct/731000124108/version/201709",
          "code": "442023007",
          "display": "Venous foot pump, device (physical object)"
        }
      }
    ]
  },
  {
    "type": "Encounter",
    "codeFilter": [
      {
        "path": "type",
        "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.666.7.307|20160929"
      }
    ]
  }
]
```

Snippet 3-9: Example Library terminology definitions (from [library-Terminology.json](Library-Terminology.json.html))

**Conformance Requirement 3.4 (Terminology Inclusion):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-4)
{: #conformance-requirement-3-4}

Measures using valueset and/or direct-reference codes must conform to the requirements of Conformance Requirement 3.4.
1. All valuesets and codes referenced in the CQL SHALL be included in the Library using dataRequirement elements.
2. If a valueset or code is referenced outside the context of a retrieve, the dataRequirement SHALL have the type 'CodeableConcept'

For example, in the following CQL, the reference to the code `"Venous foot pump, device (physical object)"` occurs in the `"DeviceUseStatement"` retrieve, while the reference to the code `"Right foot"` occurs outside the context of the retrieve:

```cql
define "Venous Foot Pumps Applied":
  ["DeviceUseStatement": code in "Venous foot pump, device (physical object)"] D
    where D.status = 'completed'
      and D.bodySite ~ ToConcept("Right foot")
```

### Data Criteria
{: #data-criteria}

The data criteria section defines the patient data of interest in the library as a set of `dataRequirements`. Each entry identifies specific types of data along with constraints that the data must meet. Snippet 3-9 shows an example of a data criteria entry indicating an ”Encounter”.

```json
"dataRequirement": [
  {
    "type": "Encounter",
    "codeFilter": [
      {
        "path": "type",
        "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.666.7.307|20160929"
      }
    ]
  }
]
```

Snippet 3-10: Example data criteria (from [library-Terminology.json](Library-Terminology.json.html))

**Conformance Requirement 3.5 (Data Criteria Inclusion):**[<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-5)
{: #conformance-requirement-3-5}
1. `dataRequirement` entries SHALL be included in the Library for each retrieve appearing in the CQL library

Note that CQL defines its own method for referencing data and that there is no direct link between the data criteria included in the measure and the data used by the CQL expressions. The Library data criteria are surfaced by this implementation guide to promote structured review of the data criteria for a Library (and by examining Libraries referenced by a Measure, for a Measure or set of Measures) for the following use cases:

* Determining the set of data used by a particular eCQM.
* Limited “scoop-and-filter” for creation of quality reports. Implementations desiring or required to comply with privacy policies that mandate or recommend fine-grained filtering should examine the CQL or ELM to determine additional data constraints necessary for adherence to those policies.

Section 3.3.1 describes a means for deriving data requirements from CQL data references.

#### Use of ELM
{: #use-of-elm}

The canonical representation of ELM makes it straightforward to derive data requirements for CQL data references to comply with Conformance Requirement 3.6:

**Conformance Requirement 3.6** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-6)
{: #conformance-requirement-3-6}
1. ELM elements with type "Retrieve" are represented using the DataRequirement type defined in FHIR
2. The Retrieve ELM element's "dataType" value is represented by the DataRequirement's "type" attribute
3. The Retrieve ELM element's "codes" value referencing a value set or direct-reference code is represented by the DataRequirement's "codeFilter.valueSet" attribute
4. The Retrieve ELM element's " templateId" value can be represented by the DataRequirement's "profile" attribute.
5. For each ELM element identified in item (1) above, a dataRequirement should be included using the profile identified in item (4) that references the value set identified in item (3)

Note that if the data model does not specify profile identifiers, the ELM retrieves will not have a templateId specified. In this case, the name of the type in the data model is used.

To illustrate the mapping, Snippet 3-10 shows an ELM data reference and corresponding dataRequirement in both XML and JSON

XML:
```xml
<def name="Acute Pharyngitis" id="2.16.840.1.113883.3.464.1003.102.12.1011" accessLevel="Public" />
```
```xml
<operand dataType="fhir:Condition" xsi:type="Retrieve">
    <codes name="Acute Pharyngitis" xsi:type="ValueSetRef" />
</operand>
```

JSON:
```json
"def" : [
  {
    "name" : "Acute Pharyngitis",
    "id" : "2.16.840.1.113883.3.464.1003.102.12.1011",
    "accessLevel" : "Public"
  }
]
```
```json
"operand" : [
  {
    "dataType" : "{http://hl7.org/fhir}Condition",
    "codeProperty" : "code",
    "type" : "Retrieve",
    "codes" : {
       "name" : "Acute Pharyngitis",
       "type" : "ValueSetRef"
    }
  }
]
 ```

Snippet 3-11: ELM data reference for Condition: Acute Pharyngitis (from [EXM146_FHIR-4.0.0.xml](Measure-measure-exm146-FHIR.xml.html) and [EXM146_FHIR-4.0.0.json](Measure-measure-exm146-FHIR.json.html))

```json
{
  "type": "Condition",
  "codeFilter": [
    {
      "path": "code",
      "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.102.12.1011"
    }
  ]
}
```

Snippet 3-12: Library dataRequirement for Condition: Acute Pharyngitis (from [library-EXM146.json](Library-EXM146.xml.html))

### Population Criteria
{: #population-criteria}

The Population Criteria (Snippet 3-13) includes definitions of criteria used to specify populations. The criteria specifying these populations are described using CQL and those CQL expressions are given context in the FHIR Measure resource. In this section, we describe how to use CQL and the FHIR Measure resource to define population criteria.

```xml
<group>
  <population>
    <code><coding><code value="initial-population"/></coding></code>
    <criteria value="Initial Population"/>
  </population>
  <population>
    <code><coding><code value="denominator"/></coding></code>
    <criteria value="Denominator"/>
  </population>
  <population>
    <code><coding><code value="numerator"/></coding></code>
    <criteria value="Numerator"/>
  </population>
</group>
```

Snippet 3-13: Population Criteria from Snippet 3-1 (FHIR Measure structure - abridged for clarity (from sample [Measure-measure-exm.xml](Measure-measure-exm.html)))

CQL provides the logical expression language that is used to define population criteria. CQL-based constraints are then referenced from the group elements of the FHIR Measure resource. Once included in the FHIR Measure, expressions defined in the CQL can be used to further refine the data criteria and to define population criteria.  Figure 2-1 illustrates the general concept.  Figure 3-1 illustrates the relationship between the FHIR Measure resource and CQL documents: The FHIR Measure resource references a CQL expression script (#1), the FHIR library resource references a particular expression from the referenced CQL file (#2), the referenced expression in-turn may include or call another expression (#3) in the same (or a different) CQL expression script. Snippet 3-13 and Snippet 3-14 demonstrate the use of the FHIR Measure resource and CQL in the definition of the "Initial-population".

**Figure 3-1: Relationship between FHIR Measure and CQL Expression Script**

<div>
<img src="FHIRMeasureWithLinkedExpression.png">
</div>


```json
"population": [
  {
    "identifier": {
      "value": "initial-population-identifier"
    },
    "code": {
      "coding": [
        {
          "code": "initial-population"
        }
      ]
    },
    "criteria": "\"Initial Population\""
  }
]
```

Snippet 3-14: Defining a population via reference to a CQL expression (from [measure-exm146-FHIR.json](Measure-measure-exm146-FHIR.json.html))

Snippet 3-15 shows several examples of a CQL expression calling another, e.g. the "Initial Population" expression references another CQL expression: "Pharyngitis Encounters With Antibiotics". In this example the referenced expressions are all contained within the same CQL file (EXM146.cql) and some are included above. The "Is Between 2 and 17 Years of Age at Start of Measurement Period" expression uses the built-in CQL function AgeInYearsAt(). The definition of "Pharyngitis Encounters With Antibiotics" uses the function "Includes Or Starts During", defined in another CQL library (Common as described in Common.cql), further explanation of nested libraries is given in the “Nested Libraries” section of the Using CQL topic of this IG.

```cql
library EXM146_FHIR version '4.0.0'

using FHIR version '3.0.0'

include FHIRHelpers version '3.0.0' called FHIRHelpers
include Common_FHIR version '2.0.0' called Common

define "Is Between 2 and 17 Years of Age at Start of Measurement Period":
   AgeInYearsAt(start of "Measurement Period") >= 2
      and AgeInYearsAt(start of "Measurement Period") <= 17

define "Measurement Period Encounters":
   [Encounter: "Ambulatory/ED Visit"] Encounter
      where Encounter.period during "Measurement Period"
        and Encounter.status = 'finished'
        and "Is Between 2 and 17 Years of Age at Start of Measurement Period"

define "Pharyngitis Encounters With Antibiotics":
   "Measurement Period Encounters" Encounters
      with "Pharyngitis" Pharyngitis such that
         Common."Includes Or Starts During"(Pharyngitis, Encounters)
      with "Antibiotics" Antibiotics such that Antibiotics.authoredOn
         3 days or less after FHIRHelpers.ToInterval(Encounters.period)

define "Initial Population":
   "Pharyngitis Encounters With Antibiotics"
```

Snippet 3-15: CQL definition of the "Initial Population" criteria (from [EXM146.cql](Library-EXM146.html#cql-content))


**Conformance Requirement 3.7 (Referential Integrity):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-7)
{: #conformance-requirement-3-7}
1. All Measure population criteria components <br/>
     a. SHALL reference exactly one CQL expression.<br/>
     b. SHALL reference the same CQL library.
2. References to expressions SHALL use the `text/cql-identifier` media type defined in the [CQL specification](https://cql.hl7.org/2020May/07-physicalrepresentation.html#media-types-and-namespaces).<br/>

#### Criteria Names
{: #criteria-names}

To encourage consistency among measures, the following guidelines for specifying population criteria within a measure are proposed. The measure population criteria names used here are defined by the [MeasurePopulationType]({{site.data.fhir.path}}codesystem-measure-population.html) code system in the base FHIR specification.

The codes within the [MeasurePopulationType]({{site.data.fhir.path}}codesystem-measure-population.html) code system in the base FHIR specification are explicitly spelled out, where as the measure population code [based on HQMF](http://terminology.hl7.org/ValueSet/v3-ActCode) are abbreviated. In order to make the development of eCQMs straightforward and clear, [this concept map](ConceptMap-measure-populations.html) provides mapping from HQMF codes to FHIR codes for each of the measure component code.

**Conformance Requirement 3.8 (Criteria Names):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-8)
{: #conformance-requirement-3-8}
The name of an expression specifying a population criteria within a measure SHOULD always be the name of the criteria type†† :
* "Initial Population"
* "Denominator"
* "Denominator Exclusion"
* "Denominator Exception"
* "Numerator"
* "Numerator Exclusion"
* "Measure Population"
* "Measure Population Exclusion"
* "Measure Observation"
* "Stratification"

†† When using multiple populations and/or multiple population groups, see Section 3.4.7

Note that the Measure Observation criteria is the name of a function used in the Continuous Variable Measure. See the [Continuous Variable Measure](measure-conformance.html#continuous-variable-measure) section for more.

For each scoring type, the set of applicable criteria are specified in the [Quality Reporting](http://www.hl7.org/fhir/clinicalreasoning-quality-reporting.html) topic of the FHIR Clinical Reasoning module. The table is reproduced here for reference:

**Table 3-1: Measure populations based on types of measure scoring.**

| | Initial Population | Denominator | Denominator Exclusion | Denominator Exception | Numerator | Numerator Exclusion | Measure Population | Measure Population Exclusion |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Proportion | R | R | O | O | R | O | NP | NP |
| Ratio | R‡‡ | R | O | NP | R | O | NP | NP |
| Continuous Variable | R | NP | NP | NP | NP | NP | R | O |
| Cohort | R | NP | NP | NP | NP | NP | NP | NP |
{: .grid}

R=Required. O=Optional. NP=Not Permitted.

‡‡ Some ratio measures will require multiple Initial Populations, one for the numerator and one for the denominator.

In addition, the formula for calculating the measure score is implied by the type of the measure. The following sections describe the expected result type for population criteria for each type of measure, as well as explicitly defining the measure score calculation formula.

In addition to the measure type, measures generally fall into two categories, patient-based, and non-patient-based (e.g. encounter-based).  In general, patient-based measures count the number of patients in each population, while non-patient-based measures count the number of items (such as encounters) in each population. Although the calculation formulas are conceptually the same for both categories, for ease of expression, population criteria for patient-based measures indicates whether a patient matches the population criteria (true) or not (false). Non-patient-based measures return the item to be counted such as an encounter or procedure.

**Conformance Requirement 3.9 (Population Basis):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-9)
{: #conformance-requirement-3-9}
1. CQL expressions SHALL be written to return an appropriate value for each population depending on the measure type
2. The [`crmi-populationBasis`](StructureDefinition-crmi-populationBasis.html) extension SHALL be used to identify the result type of population criteria expressions in the measure

The following example illustrates the use of the populationBasis extension for a patient-based measure:

```json
  "extension": [
    {
      "url": "http://hl7.org/fhir/uv/crmi/StructureDefinition/crmi-populationBasis",
      "valueCode": "boolean"
    }
  ],
```

And the following example illustrates the use of the populationBasis extension for an encounter-based measure:

```json
  "extension": [
    {
      "url": "http://hl7.org/fhir/uv/crmi/StructureDefinition/crmi-populationBasis",
      "valueCode": "Encounter"
    }
  ],
```

Note that this extension is specifically bound to the FHIRAllTypes ValueSet (i.e. the set of all types in FHIR, including data types and resource types, both abstract and concrete). The FHIRAllTypes value set is appropriate for the specification since it's possible to have population criteria that result in "abstract" types. Authoring environments may wish to limit the selection of population basis based on the content implementation guides used in authoring the measure, but that would be a content-driven validation, not a restriction enforced by the specification.

#### Measure Population Semantics

The base FHIR Measure resource defines a set of measure population components that are used to construct measures. Measure populations have implicit relationships to each other depending on the measure scoring type. For example, for proportion measures, denominator criteria have an implicit dependency on initial population criteria, i.e. the criteria for inclusion in the denominator of a measure implicitly include the criteria for inclusion in the initial population.  Similarly, numerator criteria have an implicit dependency on denominator criteria, i.e. the criteria for inclusion in the numerator of a measure implicitly include the criteria for inclusion in the denominator. CQL expressions referenced by Measure population criteria are evaluated within the context of these implicit dependencies.

**Conformance Requirement 3.10 (Measure Population Semantics):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-10)
{: #conformance-requirement-3-10}
1. CQL expressions used as measure population criteria SHALL be evaluated taking relevant dependencies into account, as specified by the membership determination formulas defined for each scoring type.
2. CQL expressions MAY include explicit dependencies that duplicate the
implicit FHIR-based eCQM population dependencies.

For example, Snippet 3-16 defines the "Initial Population" and "Denominator" for a measure.

```cql
define "Initial Population":
  "In Demographic" and "Has Target Encounter"

define "Denominator": "Initial Population"
```

Snippet 3-16: Explicit definition of the initial population and denominator.

In this snippet, the relationship between the "Denominator" and the "Initial Population" is made explicit even though the FHIR Measure specification defines the "Denominator" to be a subset of the "Initial Population". With respect to the measure population definitions, the following CQL code has identical meaning:

```cql
define "Denominator": true
```

In this variant, the "Denominator" is utilizing the measure dependencies but this dependency is not explicitly expressed in the CQL; this is referred to as an implicit dependency.

If population criteria evaluate to null for a patient-based measure it is interpreted as false. If population criteria evaluate to null for a non-patient-based measure it is interpreted as an empty list.

#### Proportion Measures
{: #proportion-measures}

A FHIR Measure resource representing a proportion measure will include one or more population criteria sections as described in Table 3-2.

The semantics of these components are unchanged from the base [Measure]({{site.data.fhir.path}}measure.html) specification; the only difference is that each component references a single criterion encoded as a CQL expression.

The referenced CQL expressions return either an indication that a patient meets the population criteria (patient-based measures) or the events that a particular patient contributes to the population (episode-of- care-based measures). For example, consider two measures:

**Table 3-2: Patient-based and Episode-of-Care Measure Examples**

<!-- | Measure | Denominator | Numerator |
|:--------|:------------:|:----------:|
| Patient-based | All patients with condition A that had one or more encounters during the measurement period. | All patients with condition A that underwent procedure B during the measurement period. |
| Episode-of-Care | All encounters for patients with condition A during the measurement period. | All encounters for patients with condition A during the measurement period where procedure B was performed during the encounter. | -->
<table class="grid">
  <thead>
    <tr>
      <th style="text-align: left" class="col-2">Measure</th>
      <th style="text-align: left" class="col-5">Denominator</th>
      <th style="text-align: left" class="col-5">Numerator</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left" class="col-2">Patient-based</td>
      <td style="text-align: left" class="col-5">All patients with condition A that had one or more encounters during the measurement period.</td>
      <td style="text-align: left" class="col-5">All patients with condition A that underwent procedure B during the measurement period.</td>
    </tr>
    <tr>
      <td style="text-align: left" class="col-2">Episode-of-Care</td>
      <td style="text-align: left" class="col-5">All encounters for patients with condition A during the measurement period.</td>
      <td style="text-align: left" class="col-5">All encounters for patients with condition A during the measurement period where procedure B was performed during the encounter.</td>
    </tr>
  </tbody>
</table>

In Table 3-2, the first measure is an example of a patient-based measure. Each patient may contribute at most one count to the denominator and numerator, regardless of how many encounters they had. The second measure is an episode-of-care measure where each patient may contribute zero or more encounters to the denominator and numerator counts.

For complete examples of patient-based proportion measures, see the Screening Measure [Examples](examples.html). For a complete example of an encounter-based proportion measure, see the [EXM108](Measure-measure-vte-1-FHIR.html) measure included in this implementation guide.

**Conformance Requirement 3.11 (Proportion Measures):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-11)
{: #conformance-requirement-3-11}
1. The CQL expression SHALL use the Patient context and be executed within the context of a single patient record at a time.
2. The CQL expression for patient-based measures SHALL return a Boolean to indicate whether a patient matches the population criteria (true) or not (false).
3. The CQL expression for non-patient-based measures SHALL return a List of events of the same type, such as an Encounter or Procedure.

##### Proportion measure scoring
{: #proportion-measure-scoring}

The population types for a Proportion measure are "Initial Population", "Denominator", "Denominator Exclusion", "Numerator", "Numerator Exclusion" and "Denominator Exception". The following diagram shows the relationships between the populations for proportion measures and the table below provides their definitions.

**Figure 3-2: Population criteria relationships for Proportion measures illustration**

<div>
<img src="OutcomeFlow__Proportion_version.png">
</div>
<br>

**Table 3-3: Population Criteria Definitions for Proportion Measures**

| Population | Definition |
|:----|:----|
| Initial Population | The initial population criteria refers to all patients, subjects, or events to be evaluated by a quality measure involving patients or subjects who share a common set of specified characteristics. All patients, subjects, or events counted (for example, as numerator, as denominator) are drawn from the initial population. |
| Denominator | Denominator criteria define the patients, subjects, or events that should be included in the lower portion of a fraction used to calculate a rate, proportion, or ratio. The denominator can be the same as the initial population, or a subset of the initial population to further constrain the population for the purpose of the measure. |
| Denominator Exclusion | Denominator exclusion criteria define patients, subjects, or events that should be excluded from the denominator. Denominator exclusions are used in proportion and ratio measures to help narrow the denominator. For example, patients with bilateral lower extremity amputations would be listed as a denominator exclusion for a measure requiring foot exams. |
| Numerator | Numerator criteria define the patients, subjects, or events that should be included in the upper portion of a fraction used to calculate a rate, proportion, or ratio. Also called the measure focus, it is the target process, condition, event, or outcome. Numerator criteria are the processes or outcomes expected for each patient, subject, or event defined in the denominator. A numerator statement describes the clinical action that satisfies the conditions of the measure. |
| Numerator Exclusion | Numerator exclusion criteria define patients, subjects, or events to be excluded from the numerator. Numerator exclusions are used in proportion and ratio measures to help narrow the numerator (for inverted measures). |
| Denominator Exception | Denominator exceptions are conditions that should remove a patient, subject, or event from the denominator of a measure only if the numerator criteria are not met. Denominator exception allows for adjustment of the calculated score for those providers with higher risk populations. Denominator exception criteria are only used in proportion measures. |
{: .grid}

* Initial population : Identify those cases that meet the Initial Population criteria. <br/>
* Denominator : Identify that subset of the Initial Population that meet the Denominator criteria.<br/>
* Denominator Exclusion : Identify that subset of the Denominator that meet the Denominator Exclusion criteria. There are cases that should be removed from the Denominator as exclusion. Once these cases are removed, the subset remaining would reflect the Denominator per criteria.
* Numerator : Identify those cases in the Denominator and NOT in the Denominator Exclusion that meet the Numerator criteria. In proportion measures, the Numerator criteria are the processes or outcomes expected for each patient, procedure, or other unit of measurement defined in the Denominator.
* Numerator Exclusion : Identify that subset of the Numerator that meet the Numerator Exclusion criteria. Numerator Exclusion is used only in ratio measures to define instances that should not be included in the Numerator data.
* Denominator Exception : Identify those in the Denominator and NOT in the Denominator Exclusion and NOT in the Numerator Exclusion that meet the Denominator Exception criteria.

The “performance rate” is a ratio of patients meeting Numerator criteria, divided by patients in the Denominator (accounting for exclusion and exception). Performance rate can be calculated using this formula:

Performance rate = (Numerator - Numerator Exclusion) / (Denominator – Denominator Exclusion – Denominator Exception)

Here is an example of using population types to select data on diabetes patients for a Proportion measure:

* Initial Population : Patient is between the age of 16 and 74
* Denominator : Patient has Diabetes Type II
* Denominator Exclusion : Patient is in Hospice Care
* Numerator : Patient is between the age of 16 and 74, has Diabetes Type II, and the most recent laboratory result has hbA1C value > 9%
* Denominator Exception : Patient meets the Denominator criteria and does NOT meet the Numerator criteria, and is designated as having "Steroid Induced Diabetes" or "Gestational Diabetes"


##### Patient-based Calculation

The following snippet provides precise semantics for the measure score calculation for a patient-based proportion measure:

```cql
context Patient

define "Denominator Membership":
  "Initial Population"
    and "Denominator"
    and not "Denominator Exclusion"
    and not ("Denominator Exception" and not "Numerator")

define "Numerator Membership":
  "Initial Population"
    and "Denominator"
    and not "Denominator Exclusion"
    and "Numerator"
    and not "Numerator Exclusion"

context Population

define "Measure Score":
  Count("Numerator Membership" IsMember where IsMember is true)
    / Count("Denominator Membership" IsMember where IsMember is true)
```

##### Non-patient-based Calculation

The following snippet provides precise semantics for the measure score calculation for a non-patient-based proportion measure:

```cql
define "Numerator Membership":
  "Initial Population"
    intersect "Denominator"
    except "Denominator Exclusion"
    intersect "Numerator"
    except "Numerator Exclusion"

define "Denominator Membership":
  "Initial Population"
    intersect "Denominator"
    except "Denominator Exclusion"
    except ("Denominator Exception" except "Numerator")

context Population

define "Measure Score":
  Count("Numerator Membership") /
    Count("Denominator Membership")
```

#### Ratio Measures
{: #ratio-measures}

A Measure document representing a ratio measure will include one or more population criteria sections as described in Table 3-1.

In addition, it may also include one or more measure-observation elements. The semantics of these components are unchanged from the base [Measure]({{site.data.fhir.path}}measure.html) specification; the only difference is that each measure population component and each measure observation definition references a single criterion encoded as a CQL expression.

**Conformance Requirement 3.12 (Ratio Measures):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-12)
{: #conformance-requirement-3-12}
1. Population criteria SHALL each reference a single CQL expression as defined by [Conformance Requirement 3.11](#conformance-requirement-3-11).
2. measure-observation criteria SHALL reference CQL expressions as defined by [Conformance Requirement 3.13](#conformance-requirement-3-13), with the exception that instead of a measure-population, the criteriaReference element SHALL reference a numerator or denominator criteria by the identifier of the criteria.
3. The CQL expression for patient-based measures SHALL return a Boolean to indicate whether a patient matches the population criteria (true) or not (false).
4. The CQL expression for non-patient-based measures SHALL return a List of events of the same type, such as an Encounter or Procedure.

For ratio measures that include a Measure Observation, the measure observation is specified in the same way as it is for continuous variable measures. In particular, the Measure Observation is defined as a function that takes a single argument of the same type as the elements returned by all the population criteria, and the aggregation method is specified in the Measure resource.

##### Ratio measure scoring
{: #ratio-measure-scoring}

The population types for a Ratio measure are "Initial Population", "Denominator", "Denominator Exclusion", "Numerator" and "Numerator Exclusion". The following diagrams✧ show the relationships between the populations for Ratio measures and the table below provides their definitions


**Figure 3-3: Population criteria for Ratio measures illustration - Numerator**

<div>
<img src="OutcomeFlow__Ratio_Numerator.png">
</div>

**Figure 3-4: Population criteria for Ratio measures illustration - Denominator**

<div>
<img src="OutcomeFlow__Ratio_Denominator.png">
</div>

✧ The ratio diagrams depict the rate-based ratio measure. Ratio measures may also include continuous variable calculations for the numerator and denominator (continuous variable ratio measures) but the diagrams do not depict the continuous variable ratio measures.

**Table 3-4: Population Criteria Definitions for Ratio Measures**

| Population | Definition |
|:----|:----:|
| Initial Population | All entities to be evaluated by a measure which may but are not required to share a common set of specified characteristics within a named measurement set to which the measure belongs. Ratio measures are allowed to have two Initial Populations, one for Numerator and one for Denominator. In most cases, there is only 1 Initial Population |
| Denominator | The same as the Initial Population or a subset of the Initial Population to further constrain the population for the purpose of the measure. |
| Denominator Exclusion | Entities that should be removed from the Denominator before determining if Numerator criteria are met. Denominator exclusions are used in Proportion and Ratio measures to help narrow the Denominator. |
| Numerator | The outcomes expected for each entity defined in the Denominator of a Proportion or Ratio measure. |
| Numerator Exclusion | Entities that should be removed from the eCQM's Numerator before determining if Numerator criteria are met. Numerator Exclusions are used in Proportion and Ratio measures to help narrow the Numerator. |
{: .grid}

* Initial population : Identify those cases that meet the Initial Population criteria. (Some ratio measures will require multiple initial populations, one for the numerator, and one for the denominator.)
* Denominator : Identify that subset of the Initial Population that meet the Denominator criteria.
* Denominator Exclusion : Identify that subset of the Denominator that meet the Denominator Exclusion criteria.
* Numerator : Identify that subset of the Initial Population that meet the Numerator criteria.
* Numerator Exclusion : Identify that subset of the Numerator that meet the Numerator Exclusion criteria.

Here is an example of using the population types to select data on patients with central line catheters for a ratio measure:

* Initial Population : Patient is aged 65 years or older and admitted to hospital
* Denominator : Patient has a central line
* Denominator Exclusion : Patient is immunosuppressed
* Numerator : Patient has a central line blood stream infection
* Numerator Exclusion : Patient's central line blood stream infection is deemed to be a contaminant


##### Individual Observations

For each case in the Denominator and not in the Denominator Exclusion, determine the individual Denominator observations.

For each case in the Numerator and not in the Numerator Exclusion, determine the individual Numerator observations.

##### Measure Aggregates

Using individual observations for all cases in the Denominator and not in the Denominator Exclusion, calculate the aggregate Denominator.

Using individual observations for all cases in the Numerator and not in the Numerator Exclusion, calculate the aggregate Numerator.

Ratio = aggregate Numerator / aggregate Denominator

##### Patient-based Calculation

The following snippet provides precise semantics for the measure score calculation for a patient-based ratio measure:

```cql
context Patient

define "Denominator Membership":
  "Initial Population"
    and "Denominator"
    and not "Denominator Exclusion"

define "Numerator Membership":
  "Initial Population"
    and "Denominator"
    and "Numerator"
    and not "Numerator Exclusion"

context Population

define "Measure Ratio Numerator":
  Count("Numerator Membership" IsMember where IsMember is true)

define "Measure Ratio Denominator":
  Count("Denominator Membership" IsMember where IsMember is true)
```

##### Non-patient-based Calculation

The following snippet provides precise semantics for the measure score calculation for a non-patient-based ratio measure:

```cql
define "Numerator Membership":
  "Initial Population"
    intersect "Denominator"
    except "Denominator Exclusion"
    intersect "Numerator"
    except "Numerator Exclusion"

define "Denominator Membership":
  "Initial Population"
    intersect "Denominator"
    except "Denominator Exclusion"

context Population

define "Measure Score Numerator":
  Count("Numerator Membership")

define "Measure Score Denominator":
  Count("Denominator Membership")
```

#### Continuous Variable Measure
{: #continuous-variable-measure}

A Measure document representing a continuous variable measure will include one or more population criteria sections as described in Table 3-1.

In addition, it will also include at least one measure-observation criterion. The semantics of these components are unchanged from the base [Measure]({{site.data.fhir.path}}measure.html) specification. For measure-observation criteria, two extensions are used to ensure implementability:

1. aggregateMethod: This extension defines the method used to aggregate the measure observations defined by the criteria
2. criteriaReference: This extension is used to indicate which population should be used as the source for the measure observations. This extension is used in cases where there may be multiple initial populations in a single group (such as a Ratio measure).

Note that the implicit population semantics described in Section 3.4.2 apply equally to continuous variable measures: measure observations are only computed for patients matching the appropriate set of population criteria (i.e. accounting for exclusions).

An example measure-observation criteria is shown in Snippet 3-17.

The criteria referenced from the measure-observation component refers to a CQL expression that returns a list of events for each patient that contributes to the measure population as shown in Snippet 3-18.

```json
{
  "extension": [
    {
      "url": "http://hl7.org/fhir/uv/crmi/StructureDefinition/crmi-criteriaReference",
      "valueString": "measure-population-identifier"
    },
    {
      "url": "http://hl7.org/fhir/uv/crmi/StructureDefinition/crmi-aggregateMethod",
      "valueCode": "median"
    }
  ],
  "identifier": {
    "value": "measure-observation-identifier"
  },
  "code": {
    "coding": [
      {
        "code": "measure-observation"
      }
    ]
  },
  "criteria": "\"Measure Observation\""
}
 ```

Snippet 3-17: Sample measure observation section from [measure-exm55-FHIR.json](Measure-measure-exm55-FHIR.json.html)

```cql
define "Measure Population" :
  "Initial Population"

define "Inpatient Encounter" :
  ["Encounter"] Encounter
    where LengthInDays(Encounter.period) <= 120
      and Encounter.period ends during "Measurement Period"

//Measure Observation
define function "Related ED Visit" (encounter Encounter) :
  Last(["Encounter" : "Emergency Department Visit"] ED
    where ED.status = 'finished'
      and ED.period ends 1 hour or less before start of encounter.period
    sort by start of period )

define function "Measure Observation" (encounter Encounter) :
  duration in minutes of "Related ED Visit"(encounter).period
```

Snippet 3-18: Sample CQL (from [EXM55.cql](Library-EXM55.html#cql-content)) for a continuous-variable measure

In the example shown in Snippet 3-17 and Snippet 3-18: the measure reports the aggregate type (Snippet 3-19) of the result of executing the "Measure Observation" function (Snippet 3-20, Snippet 3-21) on each of the events in the measure population, as determined by the “Measure Population” expression (Snippet 3-20, and Snippet 3-21).


```json
{
  "url": "http://hl7.org/fhir/uv/crmi/StructureDefinition/crmi-aggregateMethod",
  "valueCode": "median"
}
 ```
 Snippet 3-19: Aggregate type from Snippet 3-17 (Sample measure observation section from [measure-exm55-FHIR.json](Measure-measure-exm55-FHIR.json.html))

```json
"criteria": "\"Measure Observation\""
```
Snippet 3-20: "Measure Observation" function in Snippet 3-17 (Sample measure observation section from [measure-exm55-FHIR.json](Measure-measure-exm55-FHIR.json.html))

```cql
define function "Measure Observation" (encounter Encounter) :
```
Snippet 3-21: "Measure Observation" function in Snippet 3-18 (Sample CQL (from [EXM55.cql](Library-EXM55.html#cql-content)) for a continuous-variable measure)

```json
{
  "url": "http://hl7.org/fhir/uv/crmi/StructureDefinition/crmi-criteriaReference",
  "valueString": "measure-population-identifier"
}
```
Snippet 3-22: Identifier referenced in Snippet 3-17 (Sample measure observation section from [measure-exm55-FHIR.json](Measure-measure-exm55-FHIR.json.html))

```cql
define "Measure Population" :
```
Snippet 3-23: Definition from Snippet 3-18 (Sample CQL (from [EXM55.cql](Library-EXM55.html#cql-content)) for a continuous-variable measure)

**Conformance Requirement 3.13 (Continuous Variable Measures):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-13)
{: #conformance-requirement-3-13}
1. Population criteria SHALL each reference a single CQL expression as defined by [Conformance Requirement 3.11](#conformance-requirement-3-11).
2. The aggregateMethod extension SHALL be used on the measureObservation criteria to indicate the aggregate method for the observations.
CQL expressions referenced from measure-observation criteria elements SHALL use<br/>
      a. Patient context and be executed within the context of a single patient.
3. The population element of a measure-observation criteria SHALL contain a criteriaReference extension that
refers to the population criteria within the same population group that is the target population criteria
for the measure-observation
4. CQL functions referenced from a measure-observation criteria SHALL:<br/>
      a. be in the same CQL file as the CQL expression in the measure-population criteria referenced from the
         criteriaReference extension of the measure-observation criteria<br/>
      b. accept a single argument whose type matches the elements of the list returned by the CQL expression
         referenced from the criteriaReference extension of the measure-observation criteria<br/>
      c. return either an Integer, a Decimal, or a Quantity

For continuous variable measures, the measure observation is defined as a function that takes a single parameter of the type of elements returned by the population criteria. The Initial Population, Measure Population, and Measure Population Exclusion criteria expressions must all return a list of elements of the same type.

Note that the criteria reference in the measure observation definition is present to resolve which measure population should be used in the case of multiple populations, but the actual input to the measure observation definition needs to account for population membership (i.e. account for exclusions). In the case of a continuous variable measure with multiple populations, the identifier of the population criteria in the Measure resource is used to ensure that the measure observation definition refers to a unique population criteria.

##### Continuous variable measure scoring
{: #continuous-variable-measure-scoring}

The population types for a Continuous Variable measure are "Initial Population", "Measure Population", and "Measure Population Exclusion". In addition to these populations, a Measure Observation is defined which contains one or more Continuous Variable statements that are used to score one or more particular aspects of performance. The following diagram shows the relationships between the populations for Continuous Variable measures and the table below provides their definitions.

**Figure 3-5: Population criteria for Continuous Variable measures illustration**

<div>
<img src="OutcomeFlow_CV_Version.png">
</div>

**Table 3-5: Population Criteria Definitions for Continuous Variable Measures**

| Population | Definition |
|:----|:----:|
| Initial Population | All entities to be evaluated by an eCQM which may but are not required to share a common set of specified characteristics within a named measurement set to which the eCQM belongs. |
| Measure Population | Continuous Variable measures do not have a Denominator, but instead define a Measure Population, as shown in the figure above. Rather than reporting a Numerator and Denominator, a Continuous Variable measure defines variables that are computed across the Measure Population (e.g., average wait time in the emergency department). A Measure Population may be the same as the Initial Population or a subset of the Initial Population to further constrain the population for the purpose of the eCQM. |
| Measure Population Exclusion | Patients who should be removed from the eCQM's Initial Population and Measure Population before determining the outcome of one or more continuous variables defined within a Measure Observation. Measure Population Exclusions are used in Continuous Variable measures to help narrow the Measure Population. |
{: .grid}

* Initial Population : Identify those cases that meet the Initial Population criteria.
* Measure Population : Identify that subset of the Initial Population that meet the Measure Population criteria.
* Measure Population Exclusion : Identify that subset of the Measure Population that meet the Measure Population Exclusion criteria.

Here is an example of using the population types to select data on emergency department patients for a Continuous Variable measure:

* Initial Population : Patient had an emergency department (ED) encounter
* Measure Population : Same as Initial Population
* Measure Population Exclusion : Patient had an inpatient encounter that was within 6 hours of the ED encounter or expired in the ED


##### Individual Observations

Individual Observations are calculated for each case in the Measure Population and not in the Measure Population Exclusion.

##### Measure Aggregates

Using individual observations for all cases in the Measure Population and not in the Measure Population Exclusion, calculate the aggregate Measure Population.

Score = aggregate Measure Population

##### Calculation

The following snippet provides precise semantics for the measure score calculation for a continuous variable measure:

```cql
define "Measure Population Membership":
  "Initial Population"
    intersect "Measure Population"
    except "Measure Population Exclusion"

context Population

define "Measure Score":
  Avg("Measure Population Membership" PopulationMember
      return "Median ED Time"(PopulationMember)
  )
```

#### Cohort Definitions
{: #cohort-definitions}

For cohort definitions, only the Initial Population criteria type is used. For patient-based cohort definitions, the criteria should return a true or false (or null). For other types of cohort definitions, the criteria may return any type.

In a cohort measure, a population is identified from the population of all items being counted. For example, one might identify all the patients who have had H1N1 symptoms. The identified population is very similar to the Initial Population but is called a Cohort Population for public health purposes. In the Constrained Information Model (CIM), the population will be expressed using the InitialPopulationCriteria act. The Cohort Population result is used by public health agencies to trigger specific public health activities. The following diagram depicts the population for a Cohort measure and the table below provides its definition.

**Figure 3-6: Population criteria for Cohort measures illustration**

<div>
<img src="Cohort1.png">
</div>

**Table 3-6: Population Criteria Definitions for Cohort Measures**

| Population | Definition |
|:----|:----:|
| Initial Population | All entities to be evaluated by an eCQM which may but are not required to share a common set of specified characteristics within a named measurement set to which the eCQM belongs. (Also known as a Cohort Population) |
{: .grid}

* Initial population : Identify those cases that meet the Initial Population criteria.

Here is an example of using the population types to select data on patients who have received immunizations for a Cohort measure:

* Initial Population : All patients who had an immunization



#### Measures with Multiple Populations
{: #measures-with-multiple-populations}

When a measure has multiple population groups (multiple group elements), the criteria names will follow the convention above, adding the number of the population group to each criterion, e.g. "Initial Population 1", "Denominator 1", etc. Note that when multiple population groups are present, the number of the group is added to all population groups, not just the groups other than the first.

For multiple population ratio measures that specify 2 initial populations, the populations would be named with an additional "\_X" to distinguish the initial populations, e.g. "Initial Population 1_1", "Initial Population 1_2", "Initial Population 2_1", "Initial Population 2_2".

**Conformance Requirement 3.14 (Multiple Population Indexing):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-14)
{: #conformance-requirement-3-14}
1. When specifying multiple populations and/or multiple population groups the following naming scheme
SHOULD be used<br/>
(Criteria Name) (population group number)( population number)

Note when a measure has a single population group but multiple populations (such as a ratio measure), the underscore ("\_") is dropped. For example, "Initial Population 1", "Initial Population 2" refers to the populations NOT population groups.

Note also that when a measure has multiple population groups, the expectation is that the measure would have multiple scores, one for each population group. The formulas for calculation of the groups do not change; they are the same as for single group measures, just calculated using the criteria for each group.

#### Stratification
{: #stratification}

**Conformance Requirement 3.15 (Stratification Criteria):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-15)
{: #conformance-requirement-3-15}
1. If stratification is specified as an expression, the result type of the expression SHALL match the result type of other population criteria expressions in the measure.
2. If stratification is specified as a path, the path SHALL be resolvable on the type of the subject of the measure or on the type of the population basis if the basis is different than the subject.
3. Stratification SHALL NOT be used with ratio measures, since ratio measures may define multiple initial populations.

Stratification is represented using the stratifier element. The semantics of this element are unchanged from the base [Measure]({{site.data.fhir.path}}measure.html) specification; the only difference is that each population criteria references a CQL expression that returns a Boolean, (or event for event-based measures) to determine whether a given patient meets the criteria for that stratification. Snippet 3-24 shows an example stratifier that stratifies results for two sub-populations. Snippet 3-25 shows the CQL representation of the stratifier.

```json
"stratifier": [
  {
    "identifier": {
      "value": "stratifier-1-identifier"
    },
    "criteria": {
      "language": "text/cql-identifier",
      "expression": "Stratification 1"
    }
  }
]
 ```

Snippet 3-24: Example Stratifier from [measure-exm55-FHIR.json](Measure-measure-exm55-FHIR.json.html)

```cql
define "Stratification 1" :
  "Inpatient Encounter" Encounter
    where not (PrincipalDiagnosis(Encounter).code in "Psychiatric/Mental Health Patient")
 ```

Snippet 3-25: Example Stratifier from [EXM55.cql](Library-EXM55.html#cql-content)

#### Supplemental Data Elements
{: #supplemental-data-elements}

**Conformance Requirement 3.16 (Supplemental Data Elements):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-16)
{: #conformance-requirement-3-16}
1. Supplemental Data Elements SHALL be included within the supplementalData element using a usage element of supplemental-data.
2. Supplemental Data Elements SHOULD reference a single CQL expression definition, with a name beginning with SDE.

Part of the definition of a quality measure involves the ability to specify additional information to be returned for each member of a population. Within a FHIR-based eCQM, these supplemental data elements are specified using expressions, typically involving patient characteristics (such as Race, Ethnicity, Payer, and Administrative Sex) and then marking them with an SDE code within the FHIR Measure resource. Snippet 3-26 demonstrates an example supplemental data definition using the cql-ext:supplementalDataElement.

```json
"supplementalData": [
  {
    "identifier": {
      "value": "supplemental-data-identifier-1"
    },
    "usage": {
      "coding": [
        {
          "code": "supplemental-data"
        }
      ],
      "text": "Supplemental Data"
    },
    "criteria": {
      "language": "text/cql-identifier",
      "expression": "SDE Ethnicity"
    }
  }
]
 ```

Snippet 3-26: Sample Supplemental Data Elements from [measure-exm146-FHIR.json](Measure-measure-exm146-FHIR.json.html)

```cql
define "SDE Ethnicity":
  ["Patient Characteristic Ethnicity": "Ethnicity"]
 ```

Snippet 3-27: Example Supplemental Data Element from [EXM146.cql](Library-EXM146.html#cql-content)

With CQL, supplemental data elements are specified using the same mechanism as any other population criteria, by defining an expression that returns the appropriate data element, and then identifying that expression within the Measure resource. Examples of the Measure resource and CQL are given in Snippet 3-20 and Snippet 3-21, respectively.
By convention, the name of each supplemental data element expression would start with "SDE". The supplemental data element expressions are normally expected to return a single value when evaluated in the context of a member of the population. For example, patient-based measures would return the value of a supplemental data element for a given patient. However, there are cases where returning multiple elements for supplemental data would be useful. For example, collecting observations related to a particular condition. The intent of this conformance requirement is to simplify implementation of supplemental data collection, so care should be taken when using supplemental data elements that return multiple elements.

#### Risk Adjustment
{: #risk-adjustment}

**Conformance Requirement 3.17 (Risk Adjustment Criteria):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-17)
{: #conformance-requirement-3-17}
1. Risk Adjustment Variables SHALL be included within the supplementalData element using a usage element of risk-adjustment-variable
2. Risk Adjustment Variables SHOULD reference a single CQL expression definition, with a name beginning with RAF

Some measures may define variables used to adjust scores based on a measure of “risk” observed in the population. Such variables are referred to as risk adjustment variables. Risk adjustment variables are included in the supplementalData section and defined using CQL; such inclusions must adhere to Conformance Requirement 3.17.

```json
"supplementalData": [
  {
    "identifier": {
      "value": "supplemental-data-identifier-1"
    },
    "usage": {
      "coding": [
        {
          "code": "risk-adjustment-variable"
        }
      ],
      "text": "Risk Adjustment Variable"
    },
    "criteria": {
      "language": "text/cql-identifier",
      "expression": "Hepatic Failure"
    }
  }
]
 ```

Snippet 3-28: Sample Risk Adjustment Variable from [EXMRiskAdjustment_FHIR.xml](Measure-measure-risk-adjustment-FHIR2.xml.html)

```cql
define "Hepatic Failure":
  exists ("Cirrhosis Dx")
    and exists ("Bilirubin Test")
    and exists ("Serum Albumin Test")
```

Snippet 3-29: Sample Risk Adjustment Variable from [EXMRiskAdjustment_FHIR2.cql](Library-risk-adjustment-FHIR2.html#cql-content)                                                

An example of risk adjustment can be found in the included [examples](Measure-measure-risk-adjustment-FHIR2.html); the relevant sections of the FHIR Measure (Snippet 3-28) and CQL (Snippet 3-29) have been included.

### HQMF Mapping

HQMF is a normative HL7 V3 based standard that defines a header for classification and management of the quality measure, a document body that carries the content of the quality measure as well as important metadata. It standardizes a measure’s structure, metadata, definitions, and logic, the HQMF ensures measure consistency and unambiguous interpretation. The approach of representing electronic Clinical Quality Measures (eCQMs) using FHIR and specifically the FHIR Clinical Reasoning Module have generated code systems and value sets based on the FHIR R4 specification.

Refer to the [ConceptMap Resources section](terminology.html#conceptmap-resources) under "Terminology" for the concept mapping of code systems and value sets between HL7 V3 to FHIR R4.

### Attribution

Member Attribution (ATR) lists are used between Payers and Providers for implementing risk-based contracts, value based contracts, care gap closures and quality reporting. Creation of a Member Attribution List typically starts with a need to identify the patients for a specific purpose such as Quality Reporting. The [CRMIQualityProgram](StructureDefinition-quality-program-crmi.html) is a library profile used to establish a set of related quality improvement artifacts such as a measure program and can be used to establish a "release" of a quality program.

Referring to the [Member Attribution Lists Workflows and Definitions](http://build.fhir.org/ig/HL7/davinci-atr/usecases.html#member-attribution-list-workflows-and-definitions) within the Da Vinvi - Member Attribution (ATR) List IG, there is a potential in using "contract identifier" to look up a group but not prescriptive from the perspective of QM IG.  

### Must Support
{: #must-support}

Certain elements in the profiles defined in this implementation guide are marked as _Must Support_. This flag is used to indicate that the element plays a critical role in defining and sharing quality measures, and implementations SHALL understand and process the element.

In addition, because measure specifications typically make use of data implementation guides (e.g. US Core, QI-Core), the implications of the Must Support flag for profiles used from those implementation guides must be considered.

For more information, see the definition of [Must Support]({{site.data.fhir.path}}conformance-rules.html#mustSupport) in the base FHIR specification.

**Conformance Requirement 3.18 (Must Support Elements):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-18)
{: #conformance-requirement-3-18}
For resource instances claiming to conform to Quality Measure IG profiles, Must Support on any profile data element SHALL be interpreted as follows:

* Authoring systems and knowledge repositories SHALL be capable of populating all Must Support data elements.
* Evaluating systems SHALL be capable of processing resource instances containing Must Support data elements without generating an error or causing the evaluation to fail.
* In situations where information on a particular data element is not present and the reason for absence is unknown, authoring and repository systems SHALL NOT include the data elements in the resource instance.
  * For example, for systems using '9999' to indicate unknown data values, do not include '9999' in the resource instance.
* When consuming resource instances, evaluating systems SHALL interpret missing data elements within resource instances as data not present for the artifact.
* Submitting and receiving systems using Quality Measure artifacts to perform data exchange or artifact evaluation operations SHALL respect the must support requirements of the profiles used by the artifact to describe the data involved in the operation.


---

// File: input/fsh/fsh-monger.md



---

// File: input/pages/capabilities.md

{:toc}

{: #capabilities}

This implementation guide defines a CQL Evaluation Service capability statement to describe the behavior expected of a FHIR service that supports CQL evaluation:

[**CQL Evaluation Service**](CapabilityStatement-cql-evaluation-service.html)



---

// File: input/pages/changes.md

{: toc}

{: #changes}

This page details changes made in each version of the Using CQL with FHIR Implementation Guide.

### STU2 Ballot (version 2.0.0-ballot)

* [FHIR-48919](https://jira.hl7.org/browse/FHIR-48919): Updated discussion of negation to address rejected proposals use case and added activity extent discussion. Applied ([here](patterns.html#negation-in-fhir))
* [FHIR-48819](https://jira.hl7.org/browse/FHIR-48819): Documented fluent function naming convention. Applied ([here](using-cql.html#fluent-functions))
* [FHIR-48814](https://jira.hl7.org/browse/FHIR-48814): Updated examples that did not follow naming conventions. Applied ([here](using-cql.html))
* [FHIR-48641](https://jira.hl7.org/browse/FHIR-48641): Added FHIRHelpers and FHIRCommon libraries. Applied ([here](artifacts.html#knowledge-artifacts-libraries))
* [FHIR-48529](https://jira.hl7.org/browse/FHIR-48529): Noted difference in precision between CQL and FHIR date/time types. Applied ([here](conformance.html#fhir-type-mapping))
* [FHIR-48332](https://jira.hl7.org/browse/FHIR-48332): Noted Long mapping to integer64 is only available in R5 and above. Applied ([here](conformance.html#fhir-type-mapping))
* [FHIR-46423](https://jira.hl7.org/browse/FHIR-46423): Added guidance on library name length. Applied ([here](conformance.html#library-name-and-url))
* [FHIR-46112](https://jira.hl7.org/browse/FHIR-46112): Clarified mapping for lists of lists. Applied ([here](conformance.html#fhir-type-mapping))
* [FHIR-45580](https://jira.hl7.org/browse/FHIR-45580): Expanded guidance on use of terminologies. Applied ([here](patterns.html#use-of-terminologies))
* [FHIR-45579](https://jira.hl7.org/browse/FHIR-45579): Updated missing information example to improve flow. Applied ([here](patterns.html#missing-information))

### STU1 Publication (version 1.0.0)

The following changes were made as a result of comments received in the 1.0.0-ballot

> NOTE: This changelist is inclusive of changes published in the 1.0.0-snapshot version

#### Non-Compatible Changes

* [FHIR-43914](https://jira.hl7.org/browse/FHIR-43914): Simplified representation of CQL Options in Parameters Applied ([here](using-elm.html#specifying-translator-options))
* [FHIR-43908](https://jira.hl7.org/browse/FHIR-43908): Created CQL Options profile Applied ([here](StructureDefinition-cql-options.html))
* [FHIR-43762](https://jira.hl7.org/browse/FHIR-43762): CQL CQL Operation: Clarify return ([Applied here](OperationDefinition-cql-cql.html))

#### Compatible, Substanive Changes

* [FHIR-43885](https://jira.hl7.org/browse/FHIR-43885): A Conformance Requirement that SHOULD be followed is confusing Applied ([here](using-elm.html#elm-suitability))
* [FHIR-43780](https://jira.hl7.org/browse/FHIR-43780): Relax prohibition against string-based membership testing Applied ([here](using-cql.html#conformance-requirement-2-10))
* [FHIR-43698](https://jira.hl7.org/browse/FHIR-43698): Conformance requirement 2.10 - provide example Applied ([here](using-cql.html#conformance-requirement-2-10))

#### Non-Substantive Changes

* [FHIR-45296](https://jira.hl7.org/browse/FHIR-45296): QA review fixes
* [FHIR-45273](https://jira.hl7.org/browse/FHIR-45273): Added guidance on using expressions in artifacts (Applied [here](conformance.html#using-expressions))
* [FHIR-44666](https://jira.hl7.org/browse/FHIR-44666): Documented ModelInfo usage
* [FHIR-44551](https://jira.hl7.org/browse/FHIR-44551): Added examples of using CQL parameters (Applied [here](operations.html#examples))
* [FHIR-44548](https://jira.hl7.org/browse/FHIR-44548): Large number of technical corrections Applied ([here](using-cql.html#conformance-requirement-2-2)), ([here](using-cql.html#element-names)), ([here](conformance.html#conformance-requirement-4-4)), ([here](profiles.html)), and ([here](extensions.html))
* [FHIR-44541](https://jira.hl7.org/browse/FHIR-44541): Attributes versus Elements ([Applied here](using-cql.html#conformance-requirement-2-15))
* [FHIR-44512](https://jira.hl7.org/browse/FHIR-44512): add link to cqf-notDoneValueSet ([Applied here](patterns.html#negation-rationale))
* [FHIR-44113](https://jira.hl7.org/browse/FHIR-44113): Consider updating examples to align with Conformance Requirement 2.14 Applied ([here](patterns.html#presence)), ([here](patterns.html#absence)), and ([here](patterns.html#negation-rationale))
* [FHIR-44099](https://jira.hl7.org/browse/FHIR-44099): FHIR version of code structure does not include the term "using" Applied ([here](using-cql.html#code-representation-in-narrative))
* [FHIR-44091](https://jira.hl7.org/browse/FHIR-44091): Missing period ([Applied here](using-cql.html#conformance-requirement-2-10))
* [FHIR-44090](https://jira.hl7.org/browse/FHIR-44090): Consider including the terminology operators link ([Applied here](using-cql.html#conformance-requirement-2-9))
* [FHIR-44089](https://jira.hl7.org/browse/FHIR-44089): Value set is written 5 different ways Changes applied in the whole section ([here](using-cql.html#value-sets))
* [FHIR-44087](https://jira.hl7.org/browse/FHIR-44087): Missing periods ([Applied here](using-cql.html#conformance-requirement-2-6))
* [FHIR-44086](https://jira.hl7.org/browse/FHIR-44086): Confusing Terminology Applied ([here](using-cql.html#data-model))
* [FHIR-44082](https://jira.hl7.org/browse/FHIR-44082): Incomplete Sentence Applied ([here](using-cql.html#conformance-requirement-2-3))
* [FHIR-44079](https://jira.hl7.org/browse/FHIR-44079): Missing period ([Applied here](using-cql.html#conformance-requirement-2-2))
* [FHIR-44077](https://jira.hl7.org/browse/FHIR-44077): Too many spaces before colon ([Applied here](using-cql.html#conformance-requirement-2-2))
* [FHIR-44075](https://jira.hl7.org/browse/FHIR-44075): Conflicting information about underscores Applied ([here](using-cql.html#conformance-requirement-2-1))
* [FHIR-44073](https://jira.hl7.org/browse/FHIR-44073): Incorporated ModelInfo guidance from QICore Applied ([here](using-modelinfo.html))
* [FHIR-44072](https://jira.hl7.org/browse/FHIR-44072): Incorporated Patterns guidance from QICore Applied ([here](patterns.html))
* [FHIR-44071](https://jira.hl7.org/browse/FHIR-44071): Updated negation guidance ([here](patterns.html))
* [FHIR-44069](https://jira.hl7.org/browse/FHIR-44069): "When" should be lower case Applied ([here](using-cql.html#libraries))
* [FHIR-44066](https://jira.hl7.org/browse/FHIR-44066): Should Health Level 7 be upper class Applied ([here](index.html#references))
* [FHIR-44065](https://jira.hl7.org/browse/FHIR-44065): Misspelling of "Explain" in Status: Summary Applied ([here](changes.html))
* [FHIR-44063](https://jira.hl7.org/browse/FHIR-44063): Consider adding an acronyms page Applied ([here](using-cql.html)), ([here](index.html)), ([here](profiles.html)), and ([here](extensions.html))
* [FHIR-44061](https://jira.hl7.org/browse/FHIR-44061): Removed multiple periods in banner
* [FHIR-44059](https://jira.hl7.org/browse/FHIR-44059): Additional documentation on scope and purpose ([Applied here](index.html#summary))
* [FHIR-43931](https://jira.hl7.org/browse/FHIR-44059): Fixed incomplete sentence
* [FHIR-43915](https://jira.hl7.org/browse/FHIR-43915): Clarify double-braces / context in FHIR Query Pattern extension Applied ([here](extensions.html#cql-related-extensions))
* [FHIR-43901](https://jira.hl7.org/browse/FHIR-43901): Created new ModelInfoSettings profile (Applied [here](StructureDefinition-cql-modelinfosettings.html))
* [FHIR-43886](https://jira.hl7.org/browse/FHIR-43886): CQL Library Evaluate: return parameter doesn't always return all expressions ([Applied here](OperationDefinition-cql-library-evaluate.html))
* [FHIR-43882](https://jira.hl7.org/browse/FHIR-43882): Added additional details to 2.18.2 to note profiles are StructureDefinitions with derivation set to constraint
* [FHIR-43881](https://jira.hl7.org/browse/FHIR-43881): Typos: package, csn Applied ([here](using-elm.html#conformance-requirement-5-1))
* [FHIR-43877](https://jira.hl7.org/browse/FHIR-43877): Conflict in Mime Type version guidance and Library profiles Applied ([here](Library-ANCCohort.html)), ([here](Library-ELMExample.html)), ([here](StructureDefinition-elm-json-library.html)), ([here](StructureDefinition-elm-xml-library.html)), and ([here](CapabilityStatement-cql-evaluation-service.html))
* [FHIR-43795](https://jira.hl7.org/browse/FHIR-43795): Clarified Tuple and List type representation (Applied [here](conformance.html#fhir-type-mapping))
* [FHIR-43794](https://jira.hl7.org/browse/FHIR-43794): Clarified top-level expressions can return tuples and lists (Applied [here](conformance.html#fhir-type-mapping))
* [FHIR-43793](https://jira.hl7.org/browse/FHIR-43793): Clarify FHIR Type Mapping for List and Tuple types (Applied [here](conformance.html#fhir-type-mapping))
* [FHIR-43789](https://jira.hl7.org/browse/FHIR-43789): Fixed a typo in 2.14
* [FHIR-43787](https://jira.hl7.org/browse/FHIR-43787): Added Link to and example usage of cqf-notDoneValueSet (Applied [here](patterns.html#negation-rationale))
* [FHIR-43786](https://jira.hl7.org/browse/FHIR-43786): Clarified data type names section (Applied [here](using-cql.html#data-type-names))
* [FHIR-43785](https://jira.hl7.org/browse/FHIR-43785): Define or Replace "Initial Case" ([Applied here](using-cql.html#conformance-requirement-2-13))
* [FHIR-43783](https://jira.hl7.org/browse/FHIR-43783): Clarify purpose of "Representation in Narrative" section Applied ([here](using-cql.html#valueset-representation-in-narrative))
* [FHIR-43777](https://jira.hl7.org/browse/FHIR-43777): Convert text link to hyperlink ([Applied here](using-cql.html#conformance-requirement-2-9))
* [FHIR-43774](https://jira.hl7.org/browse/FHIR-43774): Fixed incomplete sentence in nested libraries ([Applied here](using-cql.html#nested-libraries))
* [FHIR-43765](https://jira.hl7.org/browse/FHIR-43765): Clarified terminologies are examples only ([Applied here](terminology.html))
* [FHIR-43764](https://jira.hl7.org/browse/FHIR-43764): Clarified description of prefetchData.data ([Applied here](OperationDefinition-cql-library-evaluate.html))
* [FHIR-43763](https://jira.hl7.org/browse/FHIR-43763): Clarified description of prefetchData.key ([Applied here](OperationDefinition-cql-library-evaluate.html))
* [FHIR-43760](https://jira.hl7.org/browse/FHIR-43760): Clarified description of prefetchData.data ([Applied here](OperationDefinition-cql-cql.html))
* [FHIR-43759](https://jira.hl7.org/browse/FHIR-43759): Clarified description of prefetchData.key ([Applied here](OperationDefinition-cql-cql.html))
* [FHIR-43758](https://jira.hl7.org/browse/FHIR-43758): Added binding to CQL Access Modifier ([Applied here](extensions.html))
* [FHIR-43755](https://jira.hl7.org/browse/FHIR-43755): Added guidance on absence of isRetrievable extension ([Applied here](extensions.html))
* [FHIR-43754](https://jira.hl7.org/browse/FHIR-43754): Added guidance on absence of isIncluded extension ([Applied here](extensions.html))
* [FHIR-43752](https://jira.hl7.org/browse/FHIR-43752): Added missing extension references ([Applied here](extensions.html))
* [FHIR-43747](https://jira.hl7.org/browse/FHIR-43747): Added a dependency slice to relatedArtifact in the CQLModule profile
* [FHIR-43742](https://jira.hl7.org/browse/FHIR-43742): Consider tightening ELM Library profile requirements w/ invariants Applied ([here](StructureDefinition-elm-json-library.html), [here](StructureDefinition-elm-xml-library.html))
* [FHIR-43741](https://jira.hl7.org/browse/FHIR-43741): CQL Module: Consider using invariant to require parameters have defaultValue or cqlType ([Applied here](StructureDefinition-cql-module-definitions.html))
* [FHIR-43740](https://jira.hl7.org/browse/FHIR-43740): CQL Module: Clarify inputParameters extension vs Library.parameter element ([Applied here](StructureDefinition-cql-module-definitions.html))
* [FHIR-43739](https://jira.hl7.org/browse/FHIR-43739): Tightened CQLModelInfo profile ([Applied here](StructureDefinition-cql-modelinfo.html))
* [FHIR-43738](https://jira.hl7.org/browse/FHIR-43738): Tightened CQLLibrary profile ([Applied here](StructureDefinition-cql-library.html))
* [FHIR-43737](https://jira.hl7.org/browse/FHIR-43737): Clarify use of data absent reason codes in CQL Evaluation Result Applied ([here](StructureDefinition-cql-evaluationresult.html))
* [FHIR-43734](https://jira.hl7.org/browse/FHIR-43734): Mismatch between CQL Capability Statement profile and example Applied ([here](StructureDefinition-cql-capabilitystatement.html))
* [FHIR-43733](https://jira.hl7.org/browse/FHIR-43733): Typo: A library profiles Applied ([here](profiles.html#profiles))
* [FHIR-43732](https://jira.hl7.org/browse/FHIR-43732): Incorrect reference to CRMI IG Applied ([here](conformance.html#conformance-requirement-4-7))
* [FHIR-43731](https://jira.hl7.org/browse/FHIR-43731): Page listing does not match menu Applied ([here](index.html#how-to-read-this-guide)) and in menu.xml
* [FHIR-43703](https://jira.hl7.org/browse/FHIR-43703): Updated example in Concepts to include a code from another system
* [FHIR-43666](https://jira.hl7.org/browse/FHIR-43666): Fixed incomplete sentence
* [FHIR-43665](https://jira.hl7.org/browse/FHIR-43665): Clarified conformance requirement 1.1 (Applied [here](conformance.html#conformance-requirement-4-7))
* [FHIR-43582](https://jira.hl7.org/browse/FHIR-43582): Added -version to the CQL naming convention conformance requirement 2.18
* [FHIR-43581](https://jira.hl7.org/browse/FHIR-43581): Clarified negation guidance
* [FHIR-43480](https://jira.hl7.org/browse/FHIR-43480): Typo in Conformance Requirement 2.17
* [FHIR-43479](https://jira.hl7.org/browse/FHIR-43479): Removed quotes from parameters in the example in 2.8
* [FHIR-43439](https://jira.hl7.org/browse/FHIR-43439): Clarified human readable representation of codes
* [FHIR-43436](https://jira.hl7.org/browse/FHIR-43436): Finished sentence on 2.1.2 
* [FHIR-43425](https://jira.hl7.org/browse/FHIR-43425): Fixed reference to CRMI
* [FHIR-43418](https://jira.hl7.org/browse/FHIR-43418): Typo fixes on using CQL page
* [FHIR-43340](https://jira.hl7.org/browse/FHIR-43340): Clarified modelInfoSettings

### Initial STU 1 Ballot Changes (version 1.0.0-ballot)

This is the first ballot of this implementation guide in this form, but the content has been balloted and published in multiple prior implementation guides, including:

Change Summary
This ballot made the following major changes:

* [Clinical Guidelines](http://hl7.org/fhir/uv/cpg/libraries.html)
* [Quality Measures](https://hl7.org/fhir/us/cqfmeasures/using-cql.html)
* [Canonical Resource Management Infrastructure](http://hl7.org/fhir/uv/crmi/2023Sep/using-cql.html)

The following changes were made as a result of ballot comments received in the September 2023 ballot of the Canonical Resource Management Infrastructure IG. One of those comments was the suggestion to break this CQL-specific content out into its own implementation guide; this IG is the result of that change.

* [FHIR-43076](https://jira.hl7.org/browse/FHIR-43076): Use a dataAbsentReason extension to indicate missing results
* [FHIR-43075](https://jira.hl7.org/browse/FHIR-43075): Add guidance on missing information
* [FHIR-42921](https://jira.hl7.org/browse/FHIR-42921): Consider requiring the use of a SignatureLevel higher than none
* [FHIR-42574](https://jira.hl7.org/browse/FHIR-42574): Libraries are not required for CQL
* [FHIR-42573](https://jira.hl7.org/browse/FHIR-42573): Explaing conformance requirement 4.12
* [FHIR-42571](https://jira.hl7.org/browse/FHIR-42571): Representation in a Library needs clarification
* [FHIR-42570](https://jira.hl7.org/browse/FHIR-42570): Code URI expectation inconsistent
* [FHIR-42569](https://jira.hl7.org/browse/FHIR-42569): What is "knowledge artifact CQL"?
* [FHIR-42568](https://jira.hl7.org/browse/FHIR-42568): Why so much discussion about VSAC in an international spec?
* [FHIR-42567](https://jira.hl7.org/browse/FHIR-42567): Use a value set avoiding OIDs
* [FHIR-42566](https://jira.hl7.org/browse/FHIR-42566): Update location of code system URIs
* [FHIR-42565](https://jira.hl7.org/browse/FHIR-42565): How is the association between a namespace and URI established?
* [FHIR-42562](https://jira.hl7.org/browse/FHIR-42562): Put versioning stuff together
* [FHIR-42561](https://jira.hl7.org/browse/FHIR-42561): Explain identifier rules
* [FHIR-42560](https://jira.hl7.org/browse/FHIR-42560): Better explain library declarations
* [FHIR-42559](https://jira.hl7.org/browse/FHIR-42559): Clarify language around CQL artifacts
* [FHIR-41869](https://jira.hl7.org/browse/FHIR-41869): No content in this ModelInfo section of Using CQL
* [FHIR-41868](https://jira.hl7.org/browse/FHIR-41868): Provide more context in examples


---

// File: input/pages/conformance.md

{:toc}

{: #conformance}

This topic specifies conformance requirements for systems that support authoring, publishing, distribution, and implementation of FHIR Knowledge Artifacts that make use of Clinical Quality Language (CQL).

### Library Resources
{: #library-resources}

In addition to the use of CQL directly in [expression-valued elements](#using-expressions), CQL content used within knowledge artifacts can be included through the use of a Library resource. These libraries can then be referenced from FHIR resources such as PlanDefinition and Measure using the `library` element (as well as the `cqf-library` extension for resources that do not declare a `library` element). The content of the CQL library is included using the `content` element of the Library.

**Conformance Requirement 4.1 (Library Resources):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-1)
{: #conformance-requirement-4-1}

1. Content conforming to this implementation guide **SHALL** use FHIR Library resources to represent CQL libraries in FHIR.
2. For distribution to environments that support CQL compilation directly, FHIR Library resources **SHOULD** include CQL content.
    a. FHIR Library resources that include CQL content **SHALL** conform to the [CQLLibrary](StructureDefinition-cql-library.html) profile

> For distribution to environments that support ELM execution directly, FHIR Library resources **MAY** include ELM content in XML or JSON format. See the [Using ELM](using-elm.html) topic for conformance requirements related to the use of ELM for distribution and implementation of CQL logic.

#### Library Name and URL
{: #library-name-and-url}

**Conformance Requirement 4.2 (Library Name and URL):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-2)
{: #conformance-requirement-4-2}

1. The identifying elements of a library **SHALL** conform to the following requirements:
* Library.url **SHALL** be `<CQL namespace url>/Library/<CQL library name>`
* Library.name **SHALL** be `<CQL library name>`, **SHALL** be 64 characters or less, and **SHOULD** be 30 characters or less
* Library.version **SHALL** be `<CQL library version>`

2. For libraries included in FHIR implementation guides, the CQL namespace is defined by the implementation guide as follows:
* CQL namespace name **SHALL** be IG.packageId
* CQL namespace url **SHALL** be IG.canonicalBase

3. CQL library source files **SHOULD** be named `<CQLLibraryName>-<version>.cql`
4. To avoid issues with characters between web ids and names, library names **SHALL NOT** have underscores.

The prohibition against underscores in CQL library names is required to ensure compliance with the canonical URL pattern (because URLs by convention should not use underscores). In addition, many publishing environments will use the canonical tail (i.e. the name of the library) as the logical id of the Library resource, which does not allow underscores per the FHIR specification.

#### FHIR Type Mapping
{: #fhir-type-mapping}

**Conformance Requirement 4.3 (FHIR Type Mapping):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-3)
{: #conformance-requirement-4-3}

1. CQL defined types **SHALL** map to types in FHIR according to the following mapping:

|CQL System Type |FHIR Type |
|---|---|
|`System.Boolean`|`FHIR.boolean`|
|`System.Integer`|`FHIR.integer`|
|`System.Decimal`|`FHIR.decimal`|
|`System.Date`|`FHIR.date`|
|`System.DateTime`|`FHIR.dateTime`, with the exception that seconds must be provided|
|`System.Long`|`FHIR.string` in R4, `FHIR.integer64` in R5 and above|
|`System.Time`|`FHIR.time`, with the exception that seconds must be provided|
|`System.String`|`FHIR.string`|
|`System.Quantity`|`FHIR.Quantity`|
|`System.Ratio`|`FHIR.Ratio`|
|`System.Any`|`FHIR.Any`|
|`System.Code`|`FHIR.Coding`|
|`System.Concept`|`FHIR.CodeableConcept`|
|`Interval<System.Date>`|`FHIR.Period`|
|`Interval<System.DateTime>`|`FHIR.Period`|
|`Interval<System.Quantity>`|`FHIR.Range`|
{: .grid }

2. In addition:
    * List types **SHALL** have elements of types that can be mapped to FHIR according to this mapping
    * Tuple types **SHALL** have elements of types that can be mapped to FHIR according to this mapping

For example, the following CQL expression results in a `List<FHIR.Observation>`:

```cql
define "FHIRObservationListExample":
  [Observation]
```

In the Library resource, this is represented as a `parameter`:

```json
{
    "extension": [{
      "url": "http://hl7.org/fhir/StructureDefinition/cqf-cqlType",
      "valueString": "List<FHIR.Observation>"
    }],
    "name": "FHIRObservationListExample",
    "use": "out",
    "min": 0,
    "max": "*",
    "type": "Observation"
  }
  ```

  Note the parameter is multi-cardinality to indicate this is a list-valued expression. Also note the use of the `cqf-cqlType` extension to relay the CQL type.

  When invoked through an operation (such as `$cql` or `Library/$evaluate`), this would be represented as multiple entries in the resulting Parameters resource:

  ```json
{
  "name": "FHIRObservationListExample",
  "resource": {
    "resourceType": "Observation",
    "id": "blood-glucose",
    "status": "final",
    ...
  }
}, {
  "name": "FHIRObservationListExample",
  "resource": {
    "resourceType": "Observation",
    "id": "blood-pressure",
    "status": "final",
    ...
  }
}, {
  "name": "FHIRObservationListExample",
  "resource": {
    "resourceType": "Observation",
    "id": "bmi",
    "status": "final",
    ...
  }
}
```

Note that for an empty list, the `cqf-isEmptyList` extension is used:

```json
{
  "extension": [{
    "url": "http://hl7.org/fhir/StructureDefinition/cqf-cqlType",
    "valueString": "List<FHIR.Observation>"
  }],
  "name": "FHIRObservationEmptyListExample",
  "_valueBoolean": {
    "extension": [{
      "url": "http://hl7.org/fhir/StructureDefinition/cqf-isEmptyList",
      "valueBoolean": true
    }]
  }
}
```

Note that the extension is provided on the `value` element, and an arbitrary choice of `boolean` is selected; there is no value to provide, the result is an empty list, so this is just a way to provide the cqf-isEmptyList extension (because parameters in a FHIR Parameters resource must have a value element).

<div class="new-content" markdown="1">
For the special case of nested lists, where a parameter name is not available, the name `element` **SHALL** be used. For example:

```cql
define CQLListListExample:
  { { 1, 2, 3 }, { 4, 5, 6 } }
```

The result of this expression is represented in the resulting Parameters resource as:

```json
  {
    "extension": [{
      "url": "http://hl7.org/fhir/StructureDefinition/cqf-cqlType",
      "valueString": "List<List<System.Integer>>"
    }],
    "name": "CQLListListExample",
    "part": [{
      "name": "element",
      "valueInteger": 1
    }, {
      "name": "element",
      "valueInteger": 2
    }, {
      "name": "element",
      "valueInteger": 3
    }]
  }, {
    "extension": [{
      "url": "http://hl7.org/fhir/StructureDefinition/cqf-cqlType",
      "valueString": "List<List<System.Integer>>"
    }],
    "name": "CQLListListExample",
    "part": [{
      "name": "element",
      "valueInteger": 4
    }, {
      "name": "element",
      "valueInteger": 5
    }, {
      "name": "element",
      "valueInteger": 6
    }]
  }
```

</div>

For a complete example illustrating all possible type mappings, refer to the [Type Mapping Example](Library-TypeMappingExample.html) and [Type Mapping Evaluation Result Example](Parameters-cql-typemappingexampleresult.html)

#### Parameters and Data Requirements
{: #parameters-and-data-requirements}

**Conformance Requirement 4.4 (Parameters and Data Requirements):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-4)
{: #conformance-requirement-4-4}

1. Parameters to CQL libraries **SHALL** be either CQL-defined types that map to FHIR types, or FHIR resource types, optionally with profile designations.
2. Top level expressions in CQL libraries **SHALL** return either CQL-defined types that map to FHIR types (as defined in 2.19), or FHIR resource types, optionally with profile designations
3. Tuple types are represented in FHIR as a `parameter` that has parts corresponding to the elements of the tuple type. List types are represented in FHIR as a `parameter` that has a cardinality of 0..*.
4. Libraries used in computable artifacts **SHALL** use the `parameter` element to identify input parameters as well as the type of all top-level expressions as output parameters.
5. Libraries used in computable artifacts **SHALL** use the `dataRequirement` element to identify any retrieves present in the CQL, according to the following mapping:

|Retrieve Element|DataRequirement Element|
|---|---|
|dataType|type|
|templateId|profile|
|context|subject|
|codeProperty|codeFilter.path or codeFilter.searchParam|
|codes (Concept)|codeFilter.code (for each Code present in the Concept)|
|codes (Code)|codeFilter.code|
|codes (ValueSetRef)|codeFilter.valueSet (as specified by the `id` of the ValueSetDef referenced by the ValueSetRef)|
|dateProperty|dateFilter.path|
|dateLowProperty,dateHighProperty|dateFilter.path (resolved to an interval-valued property)|
|dateRange|dateFilter.path or dateFilter.searchParam|
{: .grid }

For example, given the following CQL:

```cql
define Conditions: [Condition]
```

The corresponding data requirement is:

```json
{
  "type": "Condition",
  "profile": [ "http://hl7.org/fhir/StructureDefinition/Condition" ]
}
```

When the retrieve includes a terminology filter, the `codeFilter` element is used to communicate the filter:

```cql
valueset "Inpatient Encounters": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292'
...
define Encounters: [Encounter: "Inpatient Encounters"]
```

```json
{
  "type": "Encounter",
  "codeFilter": [ {
    "path": "type",
    "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
  } ]
}
```

The [`cqf-isSelective`]({{site.data.fhir.ver.ext}}/StructureDefinition-cqf-isSelective.html) extension **MAY** be used to identify _selective_ data requirements (i.e. data requirements that are likely to be the most selective of the data of interest for the artifact:

```json
{
  "extension": [ {
      "url": "http://hl7.org/fhir/StructureDefinition/cqf-isSelective",
      "valueBoolean": true
  } ],
  "type": "Encounter",
  "codeFilter": [ {
    "path": "type",
    "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
  } ]
}
```

Although this extension may be used by artifact authors as a way to indicate expected selectivity of a data requirement, it will more typically be used by implementers and downstream packaging repositories to indicate selectivity of a data requirement given known data heuristics in particular datasets.

The [`cqf-fhirQueryPattern`]({{site.data.fhir.ver.ext}}/StructureDefinition-cqf-fhirQueryPattern.html) extension **MAY** be used to recommend a FHIR RESTful query that can be used to satisfy the data requirement:

```json
{
  "extension": [ {
    "url": "http://hl7.org/fhir/StructureDefinition/cqf-fhirQueryPattern",
    "valueString": "Encounter?subject=Patient/{{context.patientId}}&type:in=http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
  } ],
  "type": "Encounter",
  "profile": [ "http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-encounter" ],
  "codeFilter": [ {
    "path": "type",
    "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
  } ]
}
```

Systems that can infer more selective requirements from additional restrictions applied in the CQL after the retrieve **MAY** include those requirements to provide more selective data requirements. For example:

```cql
define "Completed Inpatient Encounters": 
  [Encounter: "Inpatient Encounters"] E
    where E.status = 'finished'
```

The `status` restriction is represented using the [`cqf-valueFilter`]({{site.data.fhir.ver.ext}}/StructureDefinition-cqf-valueFilter.html) extension:

```json
{
  "extension": [ {
    "extension" : [
      {
        "url" : "path",
        "valueString" : "status"
      },
      {
        "url" : "comparator",
        "valueCode" : "eq"
      },
      {
        "url" : "value",
        "valueString" : "finished"
      }
    ],
    "url" : "http://hl7.org/fhir/StructureDefinition/cqf-valueFilter"
  } ],
  "type": "Encounter",
  "codeFilter": [ {
    "path": "type",
    "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
  } ]
}
```

Elements that are referred to in the CQL **MAY** be communicated using the `mustSupport` element:

```cql
define "Inpatient Encounters During Measurement Period": 
  [Encounter: "Inpatient Encounters"] E
    where E.period during "Measurement Period"
```

```json
{
  "type": "Encounter",
  "mustSupport": [ "period" ],
  "codeFilter": [ {
    "path": "type",
    "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
  } ]
}
```

When using profile-informed authoring, the retrieve will have a `templateId` corresponding to the profile:

```json
{
  "type": "Encounter",
  "profile": [ "http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-encounter" ],
  "codeFilter": [ {
    "path": "type",
    "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
  } ]
}
```

When referencing extensions that are surfaced as elements in profile-informed authoring, the `mustSupport` uses the `.extension()` function in FHIRPath, and the [`rendered-value`]({{site.data.fhir.ver.ext}}/StructureDefinition-rendered-value.html) extension is used to provide a human-readable rendering, corresponding to the `sliceName` of the extension:

```cql
using QICore
...
define SDEEthnicity: Patient.ethnicity
```

```json
{
  "type": "Patient",
  "profile": [ "http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-patient" ],
  "mustSupport": [ "extension('http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity')" ],
  "_mustSupport": [
    {
      "extension": [{
        "url": "http://hl7.org/fhir/StructureDefinition/rendered-value",
        "valueString": "ethnicity"
      }]
    }
  ]
}
```

> In the case that dynamic CQL construction is required, implementers should take care to sanitize inputs from any parameters used in the construction of dynamic CQL to avoid [injection attacks](https://en.wikipedia.org/wiki/SQL_injection).

#### RelatedArtifacts
{: #relatedartifacts}

**Conformance Requirement 4.5 (Related Artifacts):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-5)
{: #conformance-requirement-4-5}

1. Libraries used in computable artifacts **SHALL** use the `relatedArtifact` element to identify includes, code systems, value sets, and data models used by the CQL library:

|Dependency|RelatedArtifact representation|
|Data Model (using declaration)|`depends-on` with `url` of the ModelInfo Library (e.g. `http://hl7.org/fhir/Library/FHIR-ModelInfo|4.0.1`)|
|Library (include declaration)|`depends-on` with `url` of the Library (e.g. `http://hl7.org/fhir/Library/FHIRHelpers|4.0.1`)|
|Code System|`depends-on` with `url` of the CodeSystem (e.g. `http://loing.org`)|
|Value Set|`depends-on` with `url` of the ValueSet (e.g. `http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1116.89`)|
{: .grid }

#### CQL Version
{: #cql-version}

**Conformance Requirement 4.6 (Specifying CQL Version):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-6)
{: #conformance-requirement-4-6}

1. The version of CQL/ELM used for content in a library **SHOULD** be specified using the version parameter of the text/cql and application/elm+xml, application/elm+json media types.
    a. If specified, the value of the version parameter **SHALL** correspond to the _major_ and _minor_ version of a published release of the CQL specification (https://cql.hl7.org/history.html)
2. Resource narratives for Libraries and knowledge artifacts that use CQL **SHOULD** include the CQL/ELM version if it is specified in the media type.

For example, the following media types indicate version 1.5 of the CQL specification.

* `text/cql; version=1.5`
* `application/elm+xml; version=1.5`
* `application/elm+json; version=1.5`

### Using Expressions
{: #using-expressions}

CQL can be used in [expression-valued elements](http://hl7.org/fhir/R4/metadatatypes.html#Expression) in the following ways:

1. To specify an unqualified expression name in the "primary" library for an artifact
2. To specify a qualified expression name in a library referenced by an artifact
3. To directly specify an inline expression

To distinguish these use cases, the `language` element of the expression value is used as specified in the [Using Expressions](https://hl7.org/fhir/R5/clinicalreasoning-topics-using-expressions.html) topic of the FHIR specification.

The "primary library" for an artifact is determined as follows:

1. If the resource type has a `library` element (e.g. PlanDefinition.library), and there is one and only one library specified, that is the primary library
2. If the resource has one and only one `cqf-library` extension, that is the primary library

If there is more than one library specified in the resource, then expression identifiers must be qualified with the name of the library (see [Conformance Requirement 2.3 (Nested Libraries)](using-cql.html#conformance-requirement-2-3)).

### Must Support
{: #must-support}

Certain elements in the profiles defined in this implementation guide are marked as Must Support. This flag is used to indicate that the element plays a critical role in defining, sharing, and implementing artifacts, and implementations **SHALL** understand and process the element.

In addition, because artifact specifications typically make use of data implementation guides (e.g. International Patient Summary(IPS), US Core, QI-Core), the implications of the Must Support flag for profiles used from those implementation guides must be considered.

For more information, see the definition of [Must Support](https://hl7.org/fhir/R4/profiling.html#mustsupport) in the base FHIR specification.

**Conformance Requirement 4.7 (Must Support Elements):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-7)
{: #conformance-requirement-4-7}

For resource instances claiming to conform to profiles from this IG, Must Support on any profile data element **SHALL** be interpreted as follows:
* Authoring systems and knowledge repositories **SHALL** be capable of populating all Must Support data elements.
* Evaluating systems **SHALL** be capable of processing resource instances containing Must Support data elements without generating an error or causing the evaluation to fail.
* In situations where information on a particular data element is not present and the reason for absence is unknown, authoring and repository systems **SHALL NOT** include the data elements in the resource instance. For example, for systems using ‘9999’ to indicate unknown data values, do not include ‘9999’ in the resource instance.
* When consuming resource instances, evaluating systems **SHALL** interpret missing data elements within resource instances as data not present for the artifact.
* Submitting and receiving systems using knowledge artifacts to perform data exchange or artifact evaluation operations **SHALL** respect the must support requirements of the profiles used by the artifact to describe the data involved in the operation.



---

// File: input/pages/downloads.md

{:toc}

{: #downloads }

### Full Implementation Guide
{: #full-ig}

The following file contains the complete, downloadable implementation guide:

-  [Full IG](full-ig.zip)

### Definitions
{: #definitions}

In addition to the above, we have provided format-specific _definitions_:

-  [XML](definitions.xml.zip)
-  [JSON](definitions.json.zip)
-  [TTL](definitions.ttl.zip)

These files should be the first choice whenever generating any implementation artifacts since they contain all of the
rules about what makes these CRMI profiles valid. Implementers will still need to be familiar with the content of the
specification and profiles that apply in order to make a conformant implementation. See the overview on
[validating FHIR profiles and resources](http://hl7.org/fhir/validation.html) for more information about validating
profiles and how to use these artifacts.

### Examples
{: #examples}

All examples used in this Implementation Guide:

-  [XML](examples.xml.zip)
-  [JSON](examples.json.zip)
-  [TTL](examples.ttl.zip)


---

// File: input/pages/extensions.md

{:toc}

{: #extensions}

### ModelInfo Extensions

These extensions provide the ability to configure the way that ModelInfo should be produced for a given extension, profile, or implementation guide.

<table class="grid">
  <tr><th>Extension</th><th>Description</th><th>FMM</th></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-modelInfo-isIncluded.html">ModelInfo Is Included</a> </td><td><p>Specifies whether the profile should be included in the model info constructed for an artifact collection such as an implementation guide. If this extension is not present, included is true by default for resources and profiles, but not data types (unless they are indirectly referenced by included resources or profiles). Note that even if isIncluded is false for a resource or profile, it will still be included in model info if it is a required dependency of some other included resource, profile, or data type.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-modelInfo-isRetrievable.html">ModelInfo Is Retrievable</a> </td><td><p>Specifies whether the class constructed for the profile should be marked as retrievable in the model info (meaning whether or not it can appear as the target of a retrieve expression). If this value is not specified, retrievable is true for resources and false for data types.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-modelInfo-label.html">ModelInfo Label</a> </td><td><p>Specifies the label for the class constructed in the model info for the profile (i.e. an alternative, user-friendly name that can be used as the identifier for the class in Clinical Quality Language (CQL) expressions).</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-modelInfo-primaryCodePath.html">ModelInfo Primary Code Path</a> </td><td><p>Specifies the primary code path for the class constructed in the model info for the profile (i.e. the path to the code-valued element on the resource that should be used as the default terminology filter when no terminology target is specified in a CQL retrieve).</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-modelInfoSettings.html">ModelInfo Settings</a> </td><td><p>Specifies the settings to be used for constructing modelinfo from profile definitions.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
</table>

### CQL-Related Extensions

These extensions provide capabilities related to the use of CQL with Fast Healthcare Interoperability Resources (FHIR) knowledge artifacts.
{: #cql-related-extensions}
<table class="grid">
  <tr><th>Extension</th><th>Description</th><th>FMM</th></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-cqlAccessModifier.html">CQL Access Modifier</a> </td><td><p>Surfaces the CQL access modifier of the parameter definition on which it appears.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-cqlOptions.html">CQL Options</a> </td><td><p>Specifies a parameters (contained) resource that identifies the options for the CQL-to-ELM translator associated with the CQL content.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-cqlType.html">CQL Type</a> </td><td><p>Surfaces the CQL type of the parameter definition on which it appears.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-defaultValue.html">Default Value</a> </td><td><p>Provides a default value for a parameter definition.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">3</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-directReferenceCode.html">Direct Reference Code</a> </td><td><p>Defines a code directly referenced by artifact logic, as opposed to a value set. Direct reference codes may be the target of data requirements.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">2</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-fhirQueryPattern.html">FHIR Query Pattern</a> </td><td><p>A FHIR Query URL pattern that corresponds to the data specified by the data requirement. If multiple FHIR Query URLs are present, they each contribute to the data specified by the data requirement (i.e. the union of the results of the FHIR Queries represents the complete data for the data requirement). This is not a resolvable URL, in that it will contain 1) No base canonical (i.e. it's a relative query), and 2) Parameters using tokens that are delimited using double-braces (i.e. context parameters). These context parameters are available based solely on the subjectType, according to the following: Patient: context.patientId, Practitioner: context.practitionerId, Organization: context.organizationId, Location: context.locationId, Device: context.deviceId. For example, for a Library with a subjectType of Patient, the context parameter `context.patientId` will be used as a token to be replaced with the `id` of the Patient in context. This extension is used primarily to address the use case for satisfying a data requirement for a single subject. However, the query pattern could also be used to satisfy population level requests by removing the subject-level filter from the query.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">3</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-inputParameters.html">Input Parameters</a> </td><td><p>Specifies the input parameters to the operation (such as a test case description or a data requirements or evaluate operation).</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">2</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-isEmptyList.html">Is Empty List</a> </td><td><p>Indicates that the value of the parameter is an empty list. Because the parameter element of a Parameters resource must have a value, the value element must be present with either an actual value, or an extension, this extension supports the case when the actual parameter value being represented is an empty list. The type of the value element used should be appropriate to the element type of the list-valued expression.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-isSelective.html">Is Selective</a> </td><td><p>Allows a given data requirement to be identified as &quot;selective&quot;, meaning that it can be used as an additive criteria to filter a population. A selective data requirement is guaranteed to define a subset (not necessarily proper) of the initial population of an artifact. If multiple data requirements are marked selective, they all apply (i.e. AND semantics).</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">3</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-notDoneValueSet.html">Not Done ValueSet</a> </td><td><p>A logical reference (e.g. a reference to ValueSet.url) to a value set/version that identifies a set of possible coded values representing activities that were not requested, ordered, or performed.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">3</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-supportedCqlVersion.html">Supported CQL Version</a> </td><td><p>Indicates that the server supports the given version of Clinical Quality Language (CQL). Valid values are major.minor and optionally the patch version of any published version of the CQL specification.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">2</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-valueFilter.html">Value Filter</a> </td><td><p>Allows additional value-based filters to be specified as part of a data requirement.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">3</a></td></tr>
</table>



---

// File: input/pages/index.md



{:toc}

<!--
Where possible, new and updated content will be highlighted with green text and background.
{:.new-content}
-->

{: #using-cql-with-fhir-implementation-guide}

### Summary
{: #summary}

[Clinical Quality Language (CQL)](http://cql.hl7.org) is a clinically-focused query language that can be used to express logic in a broad range of healthcare use cases, including clinical decision and cognitive support, public health and quality reporting, computable clinical guidelines, research trial eligibility, and many others. Several implementation guides have been published that include conformance criteria related to the use of CQL in these contexts. This implementation guide is the result of extracting common aspects of that support to a universal realm, broadly applicable implementation guide that supports the use of CQL with Fast Healthcare Interoperability Resources (FHIR). Future versions of those implementation guides should consider referencing the conformance and guidance established here.

Note that although this is a first release of this implementation guide, the content has been balloted, published, reviewed, implemented, and refined over many years as part of the [Quality Measure Implementation Guide](https://hl7.org/fhir/us/cqfmeasures), [FHIR Clinical Guidelines](https://hl7.org/fhir/uv/cpg), [Quality Improvement Profile (QI-Core)](https://hl7.org/fhir/us/qicore), and the [Canonical Resource Management Infrastructure IG](https://hl7.org/fhir/uv/crmi).

Some of the conformance language and requirements described in this implementation guide, particularly around the use of terminology, may be applicable more broadly. We propose the inclusion of appropriate conformance requirements and guidance in a future version of the CQL specification.

### Scope of Use

The intent of this implementation guide is to support the use of CQL with FHIR in general. It is a universal realm specification and is intended to be broadly applicable to any use case that involves libraries or expressions of CQL evaluating against FHIR resources, including:

* Library profiles to support packaging of CQL (and compiled CQL, or Expression Logical Model (ELM)) as FHIR Library resources
* Evaluation support profiles to facilitate the representation of structured information about a logic library, as well as the result of evaluating a logic library
* CQL Evaluation Service capability statement
* Model Information (ModelInfo)-related profiles to facilitate configuration of ModelInfo for FHIR implementation guides

### How to read this Guide
{: #how-to-read-this-guide}

#### Target Audiences

This implementation guide is targeted at two main audiences:

1. **Authors**: Persons involved in the development of CQL-based FHIR Knowledge Artifacts that are authoring CQL, either directly or with tooling assistance
2. **Integrators**: Persons involved in the development of systems that support authoring, publishing, distributing, and implementing CQL-based FHIR Knowledge Artifacts

This Guide is divided into several pages which are listed at the top of each
page in the menu bar:
-  **[Home](index.html)**: Summary and background information on Using CQL with FHIR.
-  **Authoring**:
    -  **[Using CQL](using-cql.html)**: Conformance requirements for using Clinical Quality Language as part of authoring FHIR Knowledge Artifacts.
    -  **[Patterns](patterns.html)**: Patterns and guidance for using Clinical Quality Language as part of authoring FHIR Knowledge Artifacts.
-  **Integrating**:
    -  **[Conformance](conformance.html)**: Conformance requirements for integrating Clinical Quality Language as part of systems that support authoring, publishing, distribution, and implementing FHIR Knowledge Artifacts.
    -  **[Using ELM](using-elm.html)**: Conformance requirements for the use of Expression Logical Model (ELM) artifacts.
    -  **[Using ModelInfo](using-modelinfo.html)**: Conformance requirements for the use of Model Info.
-  **Artifacts**: 
    -  **[Profiles](profiles.html)**: List of profiles defined for use by knowledge artifacts.
    -  **[Extensions](extensions.html)**: List of extensions defined and used by knowledge artifacts.
    -  **[Operations](operations.html)**: List of operations and operation pattern profiles.
    -  **[Capabilities](capabilities.html)**: Definitions of services and operations in support of authoring, publishing, and distributing canonical resources and knowledge artifacts.
    -  **[Terminology](terminology.html)**: List of CodeSystems and ValueSets.
    -  **[Artifacts Summary](artifacts.html)**: List of the FHIR artifacts defined as part of this implementation guide.
-  **[Downloads](downloads.html)**: Links to downloadable artifacts for implementations.
-  **[Version History](changes.html)**: Changes made in each version of the Using CQL with FHIR Implementation Guide.

### Acknowledgements

This Implementation Guide was made possible by the thoughtful contributions of the following people and organizations:

* Brian Kaney, Vermonster - Editor
* Bryant Austin, Smile Digital Health - Contributor
* Clinical Quality Information (CQI) Work Group
* Michael Holck, ICF - Contributor
* Ewout Kramer, Firely - Contributor
* Carl Leitner - Contributor
* Rob McClure, Md Partners - Contributor
* Evan Muchasak, NCQA - Contributor
* Rob Reynolds, Smile Digital Health - Contributor
* Brenin Rhodes, Smile Digital Health - Contributor
* Bryn Rhodes, Smile Digital Health - Editor
* Derek Ritz - Contributor
* Chris Schuler, Smile Digital Health - Contributor
* Jennifer Seeman, ICF - Contributor
* Adam Stevenson, Smile Digital Health - Contributor

In addition, the editors would like to thank the many reviewers that provided detailed and insightful comments as part of balloting and preparation of this content, including Chris Moesel, Lloyd McKenzie, Jonathan Percival, Yan Heras, Paul Denning, Juliet Rubini, Angela Flanagan, Isaac Vetter, and many others.

### References
{: #references}

Health Level Seven. Clinical Quality Framework - HL7 Clinical Decision Support Work Group Confluence Page. [Online]. Available from: [https://confluence.hl7.org/display/CQIWC/Clinical Quality Framework](https://confluence.hl7.org/display/CQIWC/Clinical%20Quality%20Framework) [Accessed 11 October 2019].

Health Level Seven. Clinical Quality Language. [Online]. Available from: [http://cql.hl7.org](http://cql.hl7.org) [Accessed October 2023].

Health Level Seven. FHIR Clinical Guidelines. [Online]. Available from: [http://hl7.org/fhir/uv/cpg](http://hl7.org/fhir/uv/cpg) [Accessed October 2023].

Health Level Seven. Canonical Resource Management Infrastructure (Ballot). [Online]. Available from: [http://hl7.org/fhir/uv/crmi/2023Sep](http://hl7.org/fhir/uv/crmi/2023Sep) [Accessed October 2023].

Health Level Seven. Quality Measure Implementation Guide. [Online]. Available from: [http://hl7.org/fhir/us/cqfmeasures](http://hl7.org/fhir/us/cqfmeasures) [Accessed October 2023].

Health Level Seven. HL7 Cross-Paradigm Specification: Representing Negatives. [Online]. Available from: [https://www.hl7.org/implement/standards/product_brief.cfm?product_id=592](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=592) [Accessed March 2024].

Health Level Seven. FHIR Quality Profile. [Online]. Available from: [http://hl7.org/fhir/us/qicore](http://hl7.org/fhir/us/qicore) [Accessed March 2024].

Health Level Seven. US Core. [Online]. Available from: [http://hl7.org/fhir/us/core](http://hl7.org/fhir/us/core) [Accessed March 2024].

### Dependencies

{% include dependency-table-short.xhtml %}

### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### IP Statements

{% include ip-statements.xhtml %}


---

// File: input/pages/operations.md

{:toc}

{: #operations}

### Index

<table class="grid">
  <tr><th>CodeSystem</th><th>Description</th></tr>
{% include table-operationdefinitions.xhtml %}
</table>

### Examples

#### $cql

##### Simple Expression

This example just evaluates the expression `2 + 2`:

```
POST [base]/$cql

{
  "resourceType": "Parameters",
  "parameter": [{
    "name": "expression",
    "valueString": "2 + 2"
  }]
}
```

The expected response for this operation is:

```
HTTP/1.1 200 OK

{
  "resourceType": "Parameters",
  "parameter": [{
    "name": "return",
    "valueInteger": 4
  }]
}
```

##### Expression With Parameters

This examples evaluates the expression `2 + X` where `X` is a parameter passed in the `parameters` parameter with the value of 2:

```
POST [base]/$cql

{
  "resourceType": "Parameters",
  "parameter": [{
    "name": "expression",
    "valueString": "2 + X"
  }, {
    "name": "parameters",
    "resource": {
      "resourceType": "Parameters",
      "parameter": [{
        "name": "X",
        "valueInteger": 2
      }]
    }
  }]
}
```

The expected response for this operation is:

```
HTTP/1.1 200 OK

{
  "resourceType": "Parameters",
  "parameter": [{
    "name": "return",
    "valueInteger": 4
  }]
}
```

##### Expression Referencing a Library

This example evaluates the expression `Count(PE."Blood Glucose Observations")`, where `"Blood Glucose Observations"` is defined in the `ParameterExample` library and made available to the expression through the `library` parameter:

```
POST [base]/$cql

{
  "resourceType": "Parameters",
  "parameter": [{
    "name": "expression",
    "valueString": "Count(PE.\"Blood Glucose Observations\")",
  }, {
    "name": "subject",
    "valueString": "Patient/example"
  }, {
    "name": "parameters",
    "resource": {
      "resourceType": "Parameters",
      "parameter": [{
        "name": "GlucoseThreshold",
        "valueQuantity": {
          "value": 8.0
          "code": "mg/dL",
          "system": "http://unitsofmeasure.org"
        }
      }]
    }
  }, {
    "name": "library",
    "part": [{
      "name": "url",
      "valueCanonical": "http://hl7.org/fhir/uv/cql/Library/ParameterExample"
    }, {
      "name": "name",
      "valueString": "PE"
    }]
  }]
}
```

The expected response for this operation is (assuming a Patient with id `example` and 4 Blood Glucose Observations over 8.0 'mg/dL'):

```
HTTP/1.1 200 OK

{
  "resourceType": "Parameters",
  "parameter": [{
    "name": "return",
    "valueInteger": 4
  }]
}
```

NOTE: The parameter name may be qualified by the identifier used for the library to explicitly indicate that the parameter value should only be bound to the parameter in that library, for example:

```json
  }, {
    "name": "parameters",
    "resource": {
      "resourceType": "Parameters",
      "parameter": [{
        "name": "PE.GlucoseThreshold",
        "valueQuantity": {
          "value": 8.0
          "code": "mg/dL",
          "system": "http://unitsofmeasure.org"
        }
      }]
    }
  }, {
```

The local identifier `PE` is specified by the `library.name` part.

#### Library/$evaluate

This example evaluates the `ParameterExample` library

```
POST [base]/Library/ParameterExample/$evaluate

{
  "resourceType": "Parameters",
  "parameter": [{
    "name": "subject",
    "valueString": "Patient/example"
  }, {
    "name": "parameters",
    "resource": {
      "resourceType": "Parameters",
      "parameter": [{
        "name": "GlucoseThreshold",
        "valueQuantity": {
          "value": 8.0
          "code": "mg/dL",
          "system": "http://unitsofmeasure.org"
        }
      }]
    }
  }]
}
```

The expected response for this operation is (assuming a Patient with id `example` and 4 Blood Glucose Observations over 8.0 'mg/dL'):

```
HTTP/1.1 200 OK

{
  "resourceType": "Parameters",
  "parameter": [{
    "name": "Blood Glucose Observations",
    "resource": {
      "resourceType": "Observation",
      "id": "observation-1",
      ...
    }
  }, {
    "name": "Blood Glucose Observations",
    "resource": {
      "resourceType": "Observation",
      "id": "observation-2",
      ...
    }
  }, {
    "name": "Blood Glucose Observations",
    "resource": {
      "resourceType": "Observation",
      "id": "observation-3",
      ...
    }
  }, {
    "name": "Blood Glucose Observations",
    "resource": {
      "resourceType": "Observation",
      "id": "observation-4",
      ...
    }
  }]
}
```

NOTE: The parameter name may be qualified by the library name to explicitly indicate that the parameter value should only be bound to the parameter in that library, for example:

```json
  }, {
    "name": "parameters",
    "resource": {
      "resourceType": "Parameters",
      "parameter": [{
        "name": "ParameterExample.GlucoseThreshold",
        "valueQuantity": {
          "value": 8.0
          "code": "mg/dL",
          "system": "http://unitsofmeasure.org"
        }
      }]
    }
  }, {
```



---

// File: input/pages/patterns.md

{:toc}

{: #patterns}

This topic provides general guidance and best-practices for authors building FHIR-based Knowledge Artifacts that make use of Clinical Quality Language (CQL). The topics provide informative guidance to facilitate authoring CQL directly with the FHIR data model, including support for primitives, choices, slices, and extensions, as well as guidance for dealing with missing information, negation, the use of terminologies in FHIR, and some discussion of profile-informed authoring.

### FHIR Patterns

#### Primitives

As an exchange specification, FHIR has a rich syntax for expressing the values of elements defined in FHIR
resources. In particular, FHIR data types for representing basic values such as integers, strings, and dates and
times allow for [extensions](http://hl7.org/fhir/extensibility.html#extension). This means that a FHIR
`string` is not just a string value, but has elements (specifically, `id`, `extension`, and
`value`, where the `value` element contains the actual string value). This means that to access
the actual value of a FHIR `string` element in CQL, authors would need to reference the `value` element:

```cql
define "Patient is Female":
  Patient.gender.value = 'female'
```
  
To avoid this, a [FHIRHelpers](http://fhir.org/guides/cqf/common/Library-FHIRHelpers.html) library defines implicit conversions for all the FHIR types, allowing authors to treat
FHIR elements as integers, strings, etc. directly:

```cql
define "Patient is Female":
  Patient.gender = 'female'
```

Note that these conversions are performed automatically by the [CQL-to-ELM translator](https://github.com/cqframework/clinical_quality_language/blob/master/Src/java/cql-to-elm/OVERVIEW.md) when they are used by CQL, resulting in a conversion error if the FHIRHelpers library is not included using an [include declaration](https://cql.hl7.org/02-authorsguide.html#libraries):
  
```cql
include FHIRHelpers version '4.0.1'
```

The version of the library is not required by CQL, but for the FHIRHelpers reference, because it is so closely tied to the FHIR ModelInfo, best-practice is to include the version of FHIRHelpers.

#### Choices

FHIR includes the notion of [_choice_](https://hl7.org/fhir/formats.html#choice) types, or elements that can be represented as any of a number of types. For example,
the `Patient.deceased` element can be specified as a `boolean` or as a `dateTime`. CQL also supports [choice](https://cql.hl7.org/03-developersguide.html#choice-types) types, so these elements are represented directly as Choice Types within the Model Info.

When authoring CQL using FHIR, logic must take into account the possible choice types of the elements involved. For example, the `Observation.effective` element may be represented as a `dateTime` or a `Period` (among other types):

```cql
define "Blood Pressure Observations Within 30 Days":
  [Observation: "Blood Pressure"] O
    where O.status = 'final'
      and (
        (O.effective as dateTime).value 30 days or less before Today()
          or (O.effective as Period) starts 30 days or less before Today()
      )
```

Rather than requiring different representations to be considered in the logic each time they are encountered, a [fluent function](https://cql.hl7.org/03-developersguide.html#fluent-functions) can be defined that accepts a choice type argument:

```cql
define fluent function toInterval(choice Choice<FHIR.dateTime, FHIR.Period>):
  case
    when choice is FHIR.dateTime then
      Interval[FHIRHelpers.ToDateTime(choice as FHIR.dateTime), FHIRHelpers.ToDateTime(choice as FHIR.dateTime)]
    when choice is FHIR.Period then
      FHIRHelpers.ToInterval(choice as FHIR.Period)
    else null as Interval<DateTime>
  end
```

This can then be written as:

```cql
define "Blood Pressure Observations Within 30 Days (refined)":
  [Observation: "Blood Pressure"] O
    where O.status = 'final'
      and O.effective.toInterval() starts 30 days or less before Today()
```

#### Slices

Another common pattern in FHIR is the use of [_slices_](https://hl7.org/fhir/profiling.html#slicing) to constrain list-valued elements into sub-lists and elements. Consider the [Blood Pressure](http://hl7.org/fhir/bp.html) that defines "Systolic" and "Diastolic" elements:

```cql
define "Blood Pressure With Slices":
  [Observation: "Blood Pressure"] BP
    where (singleton from (BP.component C where C.code ~ "Systolic blood pressure")).value < 140 'mm[Hg]'
      and (singleton from (BP.component C where C.code ~ "Diastolic blood pressure")).value < 90 'mm[Hg]'
```

To reuse slices, CQL fluent functions can be defined for each slice:

```cql
define fluent function systolic(observation Observation):
  singleton from (observation.component C where C.code ~ "Systolic blood pressure")

define fluent function diastolic(observation Observation):
  singleton from (observation.component C where C.code ~ "Diastolic blood pressure")
```

These fluent functions can then be used to access the slices:

```cql
define "Blood Pressure With Slices (refined)":
  [Observation: "Blood Pressure"] BP
    where BP.systolic().value < 140 'mm[Hg]'
      and BP.diastolic().value < 90 'mm[Hg]'
```

#### Extensions

FHIR also supports defining [_extensions_](https://hl7.org/fhir/extensibility.html) to allow additional information beyond what is available in the base FHIR resources to be specified. Profiles then make use of these extensions to establish how this additional information is exchanged in specific use cases. As a simple example, consider the [birthsex](https://hl7.org/fhir/us/core/StructureDefinition-us-core-patient-definitions.html#Patient.extension:birthsex) extension in US Core:

```cql
define "Patient Birth Sex Is Male":
  Patient P
    let birthsex: singleton from (
        P.extension E where E.url.value = 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex'
    ).value as FHIR.code
    where birthsex = 'M'
```

In this example, a _let clause_ is used to build a `birthsex` element in the query that finds the birthsex extension value. As with slicing, fluent functions can be used to provide access to extensions:

```cql
define fluent function birthsex(patient Patient):
  (singleton from (
    patient.extension E where E.url = 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex'
  )).value as FHIR.code
```

This function can then be used to easily access the birthsex extension:

```cql
define "Patient Birth Sex Is Male (refined)":
  Patient P
    where P.birthsex() = 'M'
```

As a more complex example, consider the [race](https://hl7.org/fhir/us/core/StructureDefinition-us-core-race.html) extension. This is a complex extension that define elements for `ombCategory`, `detailed`, and `text`:

```cql
define "Patient With Race Category":
  Patient P
    let
      race: singleton from (
        P.extension E where E.url.value = 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race'
      ),
      ombCategory: race.extension E where E.url.value = 'ombCategory',
      detailed: race.extension E where E.url.value = 'detailed'
    where (ombCategory O return O.value as FHIR.Coding) contains "American Indian or Alaska Native"
      and (detailed O return O.value as FHIR.Coding) contains "Alaska Native"
```

Again, these can be accessed directly using a let clause, or a fluent function can be defined to allow access:

```cql
define fluent function race(patient Patient):
  (singleton from (patient.extension E where E.url = 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race')) race
    let 
      ombCategory: race.extension E where E.url = 'ombCategory' return E.value as Coding,
      detailed: race.extension E where E.url = 'detailed' return E.value as Coding,
      text: singleton from (race.extension E where E.url = 'text' return E.value as string)
    return { ombCategory: ombCategory, detailed: detailed, text: text }
```

```cql
define "Patient With Race Category (refined)":
  Patient P
    where P.race().ombCategory contains "American Indian or Alaska Native"
      and P.race().detailed contains "Alaska Native"
```

#### FHIRCommon

For common use cases, the [CQF Common](http://fhir.org/guides/cqf/common) implementation guide provides a FHIRCommon library that defines many of these types of functions and declarations that are commonly used with CQL and FHIR. By including a reference to this implementation guide, content IGs can build CQL that refers to these common functions by including the FHIRCommon library:

```cql
include fhir.cqf.common.FHIRCommon
```

### Profile-informed Authoring
{: #profile-informed-authoring}

Note that rather than using FHIR directly, CQL also supports models derived from implementation guides specifically. For example:

```cql
using USCore version '6.1.0'
```

With this approach, the profiles defined in the USCore implementation guide are used to provide the model. This approach is referred to as "profile-informed authoring" and automates the patterns described above, so that rather than building fluent functions, the model contains elements for slices and extensions defined in the profiles of the implementation guide. For example:

```cql
define "Blood Pressure With Slices":
  ["BloodPressureProfile"] BP
    where BP.systolic.value < 140 'mm[Hg]'
      and BP.diastolic.value < 90 'mm[Hg]'

define "Patient With Birthsex":
  Patient P
    where P.birthsex = 'M'

define "Patient With Race":
  Patient P
    where P.race.ombCategory contains "American Indian or Alaska Native"
      and P.race.detailed contains "Alaska Native"
```

For detailed information on how model information is produced for an implementation guide, see the [Profile-informed ModelInfo](using-modelinfo.html#profile-informed-modelinfo) section.

### Use of Terminologies
{: #use-of-terminologies}

FHIR supports various types of terminology-valued elements, including:

* [code](http://hl7.org/fhir/datatypes.html#code)
* [Coding](http://hl7.org/fhir/datatypes.html#Coding)
* [CodeableConcept](http://hl7.org/fhir/datatypes.html#CodeableConcept)

These types map to the following CQL primitive types, respectively:

* [String](https://cql.hl7.org/09-b-cqlreference.html#string-1)
* [Code](https://cql.hl7.org/09-b-cqlreference.html#code-1)
* [Concept](https://cql.hl7.org/09-b-cqlreference.html#concept-1)

In addition to the type of element, FHIR provides the ability to bind these elements to specific codes, in the form of a direct-reference code (fixed constraint to a specific code in a [CodeSystem](http://hl7.org/fhir/codesystem.html)), or a binding to a [ValueSet](http://hl7.org/fhir/valueset.html). These bindings can be different [binding strengths](http://hl7.org/fhir/codesystem-binding-strength.html)

Within CQL, references to terminology code systems, value sets, codes, and concepts are directly supported, and all such usages are declared within CQL libraries, as described in the  [Terminology](https://cql.hl7.org/02-authorsguide.html#terminology) section of the CQL Author's Guide.

When referencing terminology-valued elements within CQL, the following comparison operations are supported:

* [Equal (`=`)](https://cql.hl7.org/09-b-cqlreference.html#equal-3)
* [Equivalent (`~`)](https://cql.hl7.org/09-b-cqlreference.html#equivalent-3)
* [In (`in`)](https://cql.hl7.org/09-b-cqlreference.html#in-valueset)

<div class="new-content" markdown="1">
As a general rule, the equivalent (`~`) operator should be used whenever the terminology being compared is a direct-reference code, and the `in` operator should be used whenever the terminology being compared is a value set. The equal (`=`) operator should _only_ be used with code-valued elements that have a required binding.
</div>

#### code

<div class="new-content" markdown="1">
In FHIR, code-valued elements are most often used with required bindings, meaning that the only values that can appear are established by the specification. Because of this, basic string comparison can be used, for example:

```cql
  where Encounter.status = 'finished'
```
> NOTE: The comparison here is to the _code_ value, not the _display_

> NOTE: Note also that there are edge-cases where the string-valued elements may contain terminology values. For more detail on this case, refer to the [Using CQL IG](https://build.fhir.org/ig/HL7/cql-ig/using-cql.html#string-based-membership-testing)

</div>

#### CodeableConcept

<div class="new-content" markdown="1">
Most terminology-valued elements in FHIR are CodeableConcepts. If the terminology being compared is a value set (e.g. `valueset "Inpatient Encounter"`), use the `in` operator:

```cql
  where Encounter.type in "Inpatient Encounter"
```

Note that the `in` operator works whether the element is single cardinality or multi-cardinality.

If the terminology being compared is a direct-reference code (e.g. `code "Blood Pressure"`), use the `~` operator:

```cql
  where Observation.code ~ "Blood Pressure"
```

Note that this comparison only works if the element is single-cardinality. For multi-cardinality elements with direct-reference code comparison (e.g. `code "Right Breast"`), each CodeableConcept must be tested using the ~ operator, so an exists is used:

```cql
  where exists (Condition.bodySite S where S ~ "Right Breast")
```
</div>

#### Coding

<div class="new-content" markdown="1">
Some terminology-valued elements in FHIR use the Coding type specifically. The same comparison patterns are used for elements of this type. For value sets (e.g. `valueset "Inpatient Class"`), use `in`:

```cql
  where Encounter.class in "Inpatient Class"
```

And for direct-reference codes (e.g. `code "Inpatient"`), use `~`:

```cql
  where Encounter.class ~ "Inpatient"
```
</div>

### Time Valued Quantities
{: #time-valued-quantities}

For time-valued quantities, in addition to the definite duration UCUM units, CQL defines calendar duration keywords to support calendar-based durations and arithmetic. For example, UCUM defines an annum ('a') as 365.25 days, whereas the year ('year') duration in CQL is specifically a calendar year. This difference is important, especially when performing calendar arithmetic.

For example if we take a datetime and subtract a calendar year
```cql
@2019-01-01T05:00:00 - 1 year
```
This would resolve to 2018-01-01T05:00:00

However, if we take the same datetime and subtract a UCUM annum
```cql
@2019-01-01T05:00:00 - 1 'a'
```
This would resolve to 2017-12-31T23:00:00

See the definition of the [Quantity](https://cql.hl7.org/2020May/02-authorsguide.html#quantities) type in the CQL Author's Guide, as well as the [Date/Time Arithmetic](https://cql.hl7.org/2020May/02-authorsguide.html#datetime-arithmetic) discussion for more information.

### Missing Information

Because clinical information is often incomplete, CQL provides constructs and support for representing and dealing with _unknown_ or missing information. In FHIR, when the value of an element is not present, accessing that element will result in a `null`:

```cql
MedicationRequest.doNotPerform
```

Given an instance of a MedicationRequest resource that does not have a `doNotPerform` element specified, the above expression will return `null`. In general, `null` results will _propagate_ through operations. For example:

```cql
MedicationRequest.doNotPerform = false
```

If the MedicationRequest instance does not have a `doNotPerform` element, this expression will return `null`. When a `null` result is encountered in the evaluation of a criteria (such as a `where` clause), it will be interpreted as `false`. For this reason, best-practice when comparing boolean-valued elements such as `doNotPerform` is to use the `is true | false` predicate test:

```cql
MedicationRequest MR
  where MR.doNotPerform is not true
```

This pattern ensures that whether the instance does not have a doNotPerform element, or the doNotPerform element is false, the result of the expression is true, correctly accounting for the potential missing information.

Another common case encountered in FHIR is the use of an `unknown` code in terminology-valued elements:

```cql
MedicationRequest.status = 'unknown'
```

This is a special-case of characterizing missing information within FHIR resources. To treat this `status` value as a null, the following pattern can be used:

```cql
if MedicationRequest.status is null or MedicationRequest.status ~ 'unknown'
```

For more information about dealing with Missing Information in CQL in general, see the [Missing Information](https://cql.hl7.org/02-authorsguide.html#missing-information) topic in the CQL Author's Guide.

### Activity Extent
{: #activity-extent}

<div class="new-content" markdown="1">
FHIR offers several possibilities for describing _what_ activity (i.e. request or event) is being performed (e.g. the `code` element of a Procedure, or the `medication` element of a MedicationRequest):

1. Specify a particular code
2. Specify a higher-level code that includes all the concepts by subsumption
3. Specify the items with a value set (via the `codeOptions` extension)
4. Specify a protocol
5. Use a RequestOrchestration to group items
6. Use the basedOn element rather than coding the activity

These approaches allow for the _extent_ of an activity to be defined:

#### Specific Code

The first two approaches make use of terminology to define the extent of an activity, and is the most common approach. The code in a terminology may identify a single, precise concept, or it may identify a class of concepts, such as a type of procedure, or a class of medications.

For example, the following MedicationAdministration indicates a specific drug:

```json
{
  "resourceType" : "MedicationAdministration",
  ...,
  "medicationCodeableConcept" : {
      "coding" : [{
          "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
          "code" : "1116635",
          "display" : "ticagrelor 90 MG Oral Tablet"
      }]
  },
  ...
}
```

As opposed to specifying only a concept code:

```json
{
  "resourceType" : "MedicationAdministration",
  ...,
  "medicationCodeableConcept" : {
      "coding" : [{
          "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
          "code" : "11289",
          "display" : "warfarin"
      }]
  },
  ...
}
```

Retrieving resources with codes specified using these approaches can be accomplished with a simple [Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology):

```cql
define "Antithrombotic Therapy Administered":
  [MedicationAdministration: "Antithrombotic Therapy"] AntithromboticTherapy
    where AntithromboticTherapy.status = 'completed'
      and AntithromboticTherapy.category ~ "Inpatient Setting"
```

This example retrieves `MedicationAdministration` resources that have a code in the `Antithrombotic Therapy` value set, a status of `completed`, and a category of `Inpatient Setting`.

#### Code Options

The third approach (specifying the items with a value set) is enabled through the use of the [codeOptions](https://build.fhir.org/ig/HL7/fhir-extensions/branches/br-48852-codeOptions-extension/StructureDefinition-codeOptions.html) extension. Rather than specifying a code, this extension is used to indicate that the activity may be any one of the codes in the value set:

```json
{
  "resourceType" : "MedicationAdministration",
  ...,
  "medicationCodeableConcept" : {
      "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/codeOptions",
          "valueCanonical" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1110.62"
      }],
      "text" : "Value Set: Antithrombotic Therapy for Ischemic Stroke"
  },
  ...
}
```

When this pattern is used in FHIR resources, the CQL needs to take this into account by looking for the `codeOptions` extension:

```cql
define "Antithrombotic Therapy Class Administered":
  [MedicationAdministration] Administered
    where Administered.medication.codeOptions() = "Antithrombotic Therapy".id
      and Administered.status = 'completed'
      and Administered.category ~ "Inpatient Setting"
```

This example retrieves `MedicationAdministration` resources that use the `codeOptions` extension to specify a candidate medication in the `Antithrombotic Therapy` value set, a status of `completed`, and a category of `Inpatient Setting`.

NOTE: See the FHIRCommon library for the definition of the `codeOptions()` fluent function.

To ensure both approaches are accounted for, these two expressions would then be used together:

```cql
define "Antithrombotics Administered":
  "Antithrombotic Therapy Administered"
    union "Antithrombotic Therapy Class Administered"
```

> NOTE: Profile-informed authoring exposes elements that have a `codeOptions` extension using a Choice of `CodeableConcept` and `ValueSet`, which is then translated as a union, accounting for both cases as part of profile-informed authoring.

#### Structural Options

The other three approaches make use of structures such as PlanDefinition, RequestOrchestration, and the relationships between events and requests to establish the extent of an activity. See the [Clinical Guidelines](http://hl7.org/fhir/uv/cpg) implementation guide for more information on using these approaches to characterize and manage the extent of activities.

</div>

### Negation in FHIR
{: #negation-in-fhir}

The [HL7 Cross-Paradigm Specification: Representing Negatives](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=592) provides guidance and best practices for the representation of pertinent negatives and other negative semantics in clinical information. The following sections describe how these best practices may be represented in FHIR resources and profiles, as well as guidance for accessing negated information in CQL.

For an example of a set of profiles following these best practices to support the representation of negation in FHIR, see the [Negation](https://hl7.org/fhir/us/qicore/negation.html) profiles in QI-Core. 

<div class="new-content" markdown="1">

In summary, negation statements typically cover three different use cases:

1. Documentation that an event did not occur
2. Documentation that an activity should not be performed (i.e. is prohibited)
3. Documentation that a requested activity was not performed

</div>

Given the representation of negative information in FHIR, two commonly used patterns for negation in clinical logic are:

* Absence of evidence for a particular event
* Documentation of an event not occurring (represented as one of the above 3 use cases), together with a reason

For the purposes of clinical reasoning, when looking for documentation that a particular event did not occur, it must
be documented with a reason in order to meet the intent. If a reason is not part of the intent, then the absence of
evidence pattern **SHOULD** be used, rather than documentation of an event not occurring.

To address the reason an action did not occur (negation rationale), clinical logic must define the event it expects to occur
using appropriate terminology to identify the kind of event (using a value set or direct-reference code), and then use
additional criteria to indicate that the event did not occur, as well as identifying a reason.

The following examples differentiate methods to indicate (a) presence of evidence of an action, (b) absence of evidence
of an action, and (c) negation rationale for not performing an action. In each case, the "action" is an administration
of medication included within a value set for "Antithrombotic Therapy".

#### Presence
{: #presence}

Evidence that "Antithrombotic Therapy" (defined by a medication-specific value set) was administered:

```cql
define "Antithrombotic Administered":
  [MedicationAdministration: "Antithrombotic Therapy"] AntithromboticTherapy
    where AntithromboticTherapy.status = 'completed'
      and AntithromboticTherapy.category ~ "Inpatient Setting"
```

#### Absence
{: #absence}

No evidence that "Antithrombotic Therapy" medication was administered:

```cql
define "No Antithrombotic Therapy":
  not exists (
    [MedicationAdministration: "Antithrombotic Therapy"] AntithromboticTherapy
      where AntithromboticTherapy.status = 'completed'
        and AntithromboticTherapy.category ~ "Inpatient Setting"
  )
```

#### Negation Rationale
{: #negation-rationale}

Evidence that "Antithrombotic Therapy" medication administration did not occur for an acceptable medical reason as
defined by a value set referenced by the clinical logic (i.e., negation rationale):

```cql
define "Antithrombotic Not Administered":
  [MedicationAdministration: "Antithrombotic Therapy"] NotAdministered
    where NotAdministered.status = 'not-done'
      and NotAdministered.statusReason in "Medical Reason"
```

In this example for negation rationale, the logic looks for a member of the value set "Medical Reason" as the rationale
for not administering any of the anticoagulant and antiplatelet medications specified in the "Antithrombotic Therapy"
value set.

<div class="new-content" markdown="1">

As discussed in the [Activity Extent](#activity-extent) section, to represent Antithrombotic Therapy Not Administered, implementing systems reference the canonical of the "Antithrombotic
Therapy" value set using the ([codeOptions](https://build.fhir.org/ig/HL7/fhir-extensions/branches/br-48852-codeOptions-extension/StructureDefinition-codeOptions.html)) extension to indicate
providers did not administer any of the medications in the "Antithrombotic Therapy" value set. By referencing the value
set URI to negate the entire value set rather than a specific member code from the value set, clinicians are
not forced to arbitrarily select a specific medication from the "Antithrombotic Therapy" value set that they
did not administer in order to negate.

When this pattern is used in FHIR resources, the CQL needs to take this into account by looking for the `codeOptions` extension:

```cql
define "Antithrombotic Class Not Administered":
  [MedicationAdministration] NotAdministered
    where NotAdministered.medication.codeOptions() = "Antithrombotic Therapy".id
      and NotAdministered.status = 'not-done'
      and NotAdministered.statusReason in "Medical Reason"
```

To ensure both cases are accounted for, these two expressions would then be used together:

```cql
define "Antithrombotics Not Administered":
  "Antithrombotic Not Administered"
    union "Antithrombotic Class Not Administered"
```

This approach ensures that the logic will retrieve negated activities whether they are recorded as singular activities (i.e. with a code from the value set) or as indications that none of the activities were performed (i.e. with a reference to a value set).

> NOTE: Profile-informed authoring exposes elements that have a `codeOptions` extension using a Choice of CodeableConcept and ValueSet, which is then translated as a union, accounting for both cases as part of profile-informed authoring.

</div>

#### Prohibited Activities

<div class="new-content" markdown="1">

Evidence that "Antithrombotic Therapy" medication was prohibited for an acceptable medical reason makes use of the appropriate `Request` resource:

```cql
define "Antithrombotic Therapy Prohibited":
  [MedicationRequest: "Antithrombotic Therapy"] Prohibited
    where Prohibited.status = 'active'
      and Prohibited.doNotPerform is true
      and Prohibited.statusReason in "Medical Reason"
```

This example retrieves `MedicationRequest` resources with a code in the `Antithrombotic Therapy` value set that have a status of `active`, a doNotPerform of `true`, and a statusReason in the `Medical Reason` value set.

As with negation of events, the extent of the activity can be accounted for by searching for instances that make use of the `codeOptions` extension.

</div>

#### Rejected Requests

<div class="new-content" markdown="1">

Evidence that a proposal to administer "Antithrombotic Therapy" was rejected for an acceptable medical reason makes use of the `Task` resource:

```cql
define "Antithrombotic Therapy Requested":
  [MedicationRequest: "Antithrombotic Therapy"] MR
    where MR.status = 'active'
      and MR.doNotPerform is not true

define "Antithrombotic Therapy Rejected":
  "Antithrombotic Therapy Requested" MR
    with [Task: Fulfill] T
      such that T.focus.references(MR)
        and T.status = 'rejected'
        and T.statusReason in "Medical Reason"
```

This example retrieves "Antithrombotic Therapy Requested" resources that have a fulfillment Task focused on the request, a status of `rejected`, and a statusReason in the `Medical Reason` value set.

As with negation of events, the extent of the activity can be accounted for by searching for request instances that make use of the `codeOptions` extension.

</div>

---

// File: input/pages/profiles.md

{:toc}

{: #profiles}

<table class="grid">
  <tr><th>Profile</th><th>Description</th></tr>
  <tr><td><a href="StructureDefinition-cql-capabilitystatement.html">CQLCapabilityStatement</a></td><td>A system capability statement that can express which version of Clinical Quality Language (CQL) is supported.</td></tr>
  <tr><td><a href="StructureDefinition-cql-evaluationresult.html">CQLEvaluationResult</a></td><td>A parameters profile that supports the result of evaluating logic.</td></tr>
  <tr><td><a href="StructureDefinition-cql-implementationguide.html">CQLImplementationGuide</a></td><td>An ImplementationGuide profile that supports specifying ModelInfo configuration for the profiles in the implementation guide.</td></tr>
  <tr><td><a href="StructureDefinition-cql-library.html">CQLLibrary</a></td><td>A library profile that supports representing a CQL Library as a Fast Healthcare Interoperability Resources (FHIR) Library resource.</td></tr>
  <tr><td><a href="StructureDefinition-cql-modelinfo.html">CQLModelInfo</a></td><td>A library profile that supports representing CQL ModelInfo as a FHIR Library resource.</td></tr>
  <tr><td><a href="StructureDefinition-cql-modelinfosettings.html">CQLModelInfoSettings</a></td><td>A Parameters profile that supports representing CQL ModelInfo settings.</td></tr>
  <tr><td><a href="StructureDefinition-cql-module.html">CQLModule</a></td><td>A library profile that supports representing the structural information of a logic library.</td></tr>
  <tr><td><a href="StructureDefinition-cql-options.html">CQLOptions</a></td><td>A Parameters profile that supports representing CQL translation options.</td></tr>
  <tr><td><a href="StructureDefinition-cql-structuredefinition.html">CQLStructureDefinition</a></td><td>A StructureDefinition profile that supports specifying ModelInfo configuration for the profile.</td></tr>
  <tr><td><a href="StructureDefinition-elm-json-library.html">ELMJSONLibrary</a></td><td>A library profile that supports representing a compiled CQL Library (ELM (in JSON)) as a FHIR Library resource.</td></tr>
  <tr><td><a href="StructureDefinition-elm-xml-library.html">ELMXMLLibrary</a></td><td>A library profile that supports representing a compiled CQL Library (ELM (in XML)) as a FHIR Library resource.</td></tr>
</table>


---

// File: input/pages/terminology.md

{: toc}
{: #terminology}

### CodeSystems

<table class="grid">
  <tr><th>CodeSystem</th><th>Description</th></tr>
{% include table-codesystems.xhtml %}
</table>

### ValueSets

<table class="grid">
  <tr><th>ValueSet</th><th>Description</th></tr>
{% include table-valuesets.xhtml %}
</table>

---

// File: input/pages/using-cql.md

{:toc}

{: #using-cql}

This topic specifies conformance requirements for the use of Clinical Quality Language (CQL) with Fast Healthcare Interoperability Resources (FHIR), whether that be as in-line expressions in expression-valued elements, or in CQL libraries contained in FHIR Library resources.

### Libraries
{: #libraries}

Declarations in CQL are packaged in containers called _libraries_ which provide a unit for the definition, distribution, and versioning of CQL logic. The following conformance requirements and guidance apply when libraries of CQL are used with FHIR knowledge artifacts.

**Conformance Requirement 2.1 (Library Declaration):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-2-1)
{: #conformance-requirement-2-1}
  1. Any CQL library used by a FHIR artifact **SHALL** contain a [library declaration.](https://cql.hl7.org/02-authorsguide.html#library)
  2. The library identifier **SHALL** be a valid un-quoted identifier and **SHALL NOT** contain underscores. The library identifier **SHALL** only contain alphanumeric characters.

> The example in the Author's Guide from the above library declaration link is not following the "Using CQL With FHIR" convention of prohibiting underscores in library names.

For example:

```cql
library EXM146
```

This declaration specifies the name of the library as `EXM146`. See the discussion on [Library Resources](conformance.html#library-resources) for more information on library naming conventions.

#### Library Versioning
{: #library-versioning}

This Implementation Guide (IG) recommends [Semantic Versioning](https://semver.org) be used to version libraries used within knowledge artifacts to help track and manage dependencies.

**Conformance Requirement 2.2 (Library Versioning):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-2-2)
{: #conformance-requirement-2-2}
  1. The library declaration **SHOULD** specify a version.
  2. The library version **SHOULD** follow the convention:
       < major >.< minor >.< patch >
3. For artifacts in draft status, the versioning scheme **NEED NOT** apply, and there is no expectation that artifact contents are stable.
  4. The versioning scheme **SHALL** apply when an artifact moves to active status.

There are three main types of changes that can be made to a library:

  1. A library can be changed in a way that would alter the public use of its components.
  2. A library can be changed by adding new components or functionality but without changing the way that existing components are used.
  3. A library can be changed in a way that does not change existing components or add new components, but only corrects or improves the originally intended functionality.

By exposing version numbers that identify all three types of changes, libraries can be versioned in a way that makes
clear when a change will impact usage, versus when a change can potentially be safely incorporated as an update. The
first type of change will be referred to as a "major" change, and will require incrementing the "major version
number". The second type of change will be referred to as a "minor" change, and will only require incrementing the
"minor version number". And finally, the third type of change will be referred to as a "patch", and will only require
incrementing the "patch version number". Version numbers for CQL libraries can then be represented as:

```xml
<major>.<minor>.<patch>
```
{: #content-pre}

For example:

```cql
library EXM146 version '1.0.0'
```

This would indicate the first major version of the EXM146 library. A minor change could be released by incrementing the
minor version:

```cql
library EXM146 version '1.1.0'
```

And a major change could be released by incrementing the major version, and resetting the minor version: Minor changes
are expected to retain backwards-compatibility, but may introduce new features and functionality, while patch changes
are expected to retain forward and backwards-compatibility, and may only be used to fix issues.

```cql
library EXM146 version '2.0.0'
```

Snippet 2-1: Library line from EXM146.cql, the second major version.

Note that when CQL libraries are included as part of larger groupings of artifacts (such as quality measures or computable guidelines), the version of the library is specified along with all the other artifacts in the larger group. For more guidance on versioning these artifacts as a group, refer to the [Versioning](http://build.fhir.org/ig/HL7/crmi-ig/artifact-lifecycle.html#artifact-versioning) topic in the Canonical Resource Management Infrastructure (CRMI) implementation guide.

#### Nested Libraries
{: #nested-libraries}

CQL allows libraries to re-use logic already defined in other libraries. This is accomplished by utilizing the
include declaration as in Snippet 2-2.

```cql
include Common version '2.0.0' called Common
```

Snippet 2-2: Nested library within EXM146.cql

The set of all CQL libraries used as part of a knowledge artifact must adhere to Conformance Requirement 2.3.

**Conformance Requirement 2.3 (Nested Libraries):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-2-3)
{: #conformance-requirement-2-3}

1. CQL libraries **SHOULD** be structured such that all CQL expressions referenced from a single FHIR resource are
contained within a single library.
    * If an artifact makes use of multiple libraries, expression references in that artifact **SHALL** be qualified with the `name` of the library (i.e. `library-name.expression-identifier`)
2. CQL libraries **SHALL** use a `called` clause for all included libraries
3. The `called`-alias for an included library **SHOULD** be consistent for usages across libraries

The recommendation that CQL libraries be structured such that all references to expressions from a FHIR artifact are to a single Library is a simplification to ensure that expression references from FHIR artifacts don’t require qualified expressions (as they would if multiple libraries were referenced). However, there are valid use cases for allowing multiple libraries to be referenced, such as modular questionnaires, and dependent library references. However, when an artifact uses multiple libraries, all expressions within the artifact SHALL be qualified.

#### Library Namespaces
{: #library-namespaces}

CQL allows libraries to define a namespace that can be used to organize libraries across different groups of users.
Within a namespace, library names are required to be unique. Across namespaces, the same library name may be reused.
For example, OrganizationA and OrganizationB can both define a library named `Common`, so long as they use different
namespaces. For example, consider the following library declaration:

```cql
library CMS.Common version '2.0.0'
```

This example declares a library named Common in the CMS namespace. Per the [CQL specification](https://cql.hl7.org/04-logicalspecification.html#versionedidentifier), the namespace for a
library is included in the ELM in the `Library.identifier` element, along with a Uniform Resource Identifier (URI) that provides a globally unique, stable identifier for the namespace.
For example, the URI for the CMS namespace might be `https://ecqi.healthit.gov/ecqm/measures`.

Note that this is a URI that may or may not correspond to a reachable web address (a Uniform Resource Locater (URL)). The important aspect is not
the addressability, but the uniqueness, ensuring that library name collisions cannot occur.

**Conformance Requirement 2.4 (Library Namespaces):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-2-4)
{: #conformance-requirement-2-4}

1. CQL libraries **SHOULD** use namespaces.
2. When a namespace is not used, the library **SHALL** be considered part of a "public" global namespace for the purposes of resolution within a given environment.
3. The root of the CQL namespace **SHALL** match the root of the url of the Library resource housing the CQL library.

In addition, because the namespace of a library functions as part of the globally unique identifier for the library, changing the namespace of the library results in a different artifact.

### Data Model
{: #data-model}

CQL can be used with any data model(s). To be used with FHIR, CQL requires model information. To facilitate use with any FHIR content, a general-purpose FHIR information model is included in the [Clinical Quality Framework Common FHIR Assets](https://fhir.org/guides/cqf/common) implementation guide. However, CQL may also be used with implementation-guide specific model information (i.e. structures based on the profile definitions in an IG).

**Conformance Requirement 2.5 (CQL Using FHIR-based Data Models):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-2-5)
{: #conformance-requirement-2-5}

1. All libraries and CQL expressions used directly or indirectly within a knowledge artifact **SHOULD** use FHIR-based data models.
2. Data Model declarations **SHALL** include a version declaration.

For example:

```cql
using FHIR version '4.0.1'
```

Snippet 2-3: Data Model line from [Example.cql](Library-Example.html#cql-content)

### Code Systems
{: #code-systems}

Conformance Requirement 2.6 describes how to specify a code system within a CQL library.

**Conformance Requirement 2.6 (Code System Specification):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-2-6)
{: #conformance-requirement-2-6}

1. Within CQL, the identifier of any code system reference **SHALL** be specified using a URI for the code system.
2. The URI **SHALL** be the canonical URL for the code system.
3. The Code System declaration **MAY** include a version, consistent with the URI specification for FHIR and the code system.
For example:

```cql
codesystem "SNOMED CT:2017-09": 'http://snomed.info/sct'
  version 'http://snomed.info/sct/731000124108/version/201709'
```

Snippet 2-4: codesystem definition line from [Example.cql](Library-Example.html#cql-content).

The canonical URL for a code system is a globally unique, stable, version-independent identifier for the code system.
The [HL7 Terminology (THO) site ](http://terminology.hl7.org) defines canonical URLs for most common code systems.

The local identifier for the codesystem ("SNOMED CT:2017-09" in this case) should include the friendly name of the code system
and optionally, an indication of the version, separated with a colon.

Version information for code systems is not required to be included in knowledge artifacts; terminology versioning information may be
specified externally. However, if versioning information is included, it must be done in accordance with the terminology
usage specified by FHIR.

If no version is specified, then the default behavior for a FHIR terminology server is to use the most recent code
system version available on the server.

### Value Sets
{: #value-sets}

Conformance Requirement 2.7 describes how to specify a value set within a CQL library.

**Conformance Requirement 2.7 (Value Set Specification):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-2-7)
{: #conformance-requirement-2-7}

1. Within CQL, the identifier of any value set reference **SHALL** be specified using a URI for the value set.
2. The URI **SHALL** be the canonical URL for the value set
3. The URI **MAY** include a version, consistent with versioned canonical URL references in FHIR

For example:

```cql
valueset "Absent or Unknown Allergies - IPS": 'http://hl7.org/fhir/uv/ips/ValueSet/absent-or-unknown-allergies-uv-ips'
```

Snippet 2-5: Valueset reference from [Example.cql](Library-Example.html#cql-content).

The canonical URL for a value set is typically defined by the value set author, though it may be provided by the
publisher as well. For example, value sets defined in the International Patient Summary have a base URL of `http://hl7.org/fhir/uv/ips/`.
This base is then used to construct the canonical URL for the value set (in the same way as any FHIR URL) using the resource type
(`ValueSet` in this case) and a unique identifier for the value set within that url (typically the same as the value set id in
the implementation guide). Note that the _canonical URL_ is a globally unique, stable, version-independent identifier for the
value set. See [Canonical URLs](http://hl7.org/fhir/references.html#canonical) in the base FHIR specification for more information.

The local identifier for the value set within CQL **SHOULD** be the same as the `title` of the value set. However, because the title of the value set is not
necessarily unique, it is possible to reference multiple value sets with the same title, but different identifiers.
When this happens in a CQL library, the local identifier **SHOULD** be the title of the value set with a qualifying suffix to
preserve the value set title as a human-readable reference, but still allow unique reference within the CQL library.

For example:

```cql
valueset "Acute Pharyngitis (1)": 'http://example.org/fhir/ValueSet/acute-pharyngitis-snomed'
valueset "Acute Pharyngitis (2)": 'http://example.org/fhir/ValueSet/acute-pharyngitis-icd'
```

Note carefully that although this URL may be resolvable for some terminology implementations, this is not necessarily the
case. This use of a canonical URL can be resolved as a search by the `url` element:

```
GET fhir/ValueSet?url=http://example.org/fhir/ValueSet/acute-pharyngitis-snomed
```

> A note about usage of the term value set in this documentation: "Value set", with two words, regardless of case, is the human-readable spelling. "ValueSet", with one word and in PascalCase, is the FHIR Type. "valueset", with one word and all lower case, is the proper spelling for use within CQL statements and expressions.

#### Value Set Version
{: #value-set-version}

Version information for value sets is not required to be included in knowledge artifacts; terminology versioning information may be
specified externally. However, if versioning information is included, it must be done in accordance with the terminology
usage specified by FHIR.

Conformance Requirement 2.8 describes how to specify a value set, including the definition version to be used.

**Conformance Requirement 2.8 (Value Set Specification Including Version):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-2-8)
{: #conformance-requirement-2-8}

1. When specifying the definition version of a value set to be used in a CQL library, use the `version` clause of the value set declaration

For example:

```cql
valueset "Encounter Inpatient SNOMEDCT Value Set":
   'http://example.org/fhir/ValueSet/encounter-inpatient' version '20160929'
```

Snippet 2-6: valueset definition from [Example.cql](Library-Example.html#cql-content).

This is a _version specific value set reference_, and can be resolved as a search by the `url` and `version` elements:

```
GET fhir/ValueSet?url=http://example.org/fhir/ValueSet/encounter-inpatient&version=20160929
```

#### Value Set Expansion

It is important to maintain the distinction between the _definition_ of a value set and the _expansion_ of a value set. The searches
described in previous sections all retrieve the definition of a value set. For the purposes of local evaluation, implementations may
wish to retrieve the _expansion_ of a value set, or the set of all codes that are defined to be in the value set by the _definition_.

Because the definition of a value set can, and often does, include codes from a code system based on properties of that code system, the
expansion of a value set is sensitive to the versions of the code systems used in the definition. This means that in general, the expansion
of a value set is version-specific, and care must be taken to ensure that version considerations are taken into account when using the
results of an expansion.

**Conformance Requirement 2.9 (Value Set Expansion):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-2-9)
{: #conformance-requirement-2-9}

1. Value set membership testing **SHOULD** use the terminology membership operation in CQL (`in(ValueSet)`), as opposed to requiring computation on the lists of codes in a value set.  See the [Terminology Operators](http://cql.hl7.org/02-authorsguide.html#terminology-operators) section of the CQL specification for more information.

For example, rather than combining multiple value sets using a `union`, separate membership tests in each value set **SHOULD** be used. For more information, see the [Value Set Expansion](http://hl7.org/fhir/valueset.html#expansion) topic in the base FHIR specification.

#### Representation in Narrative
{: #valueset-representation-in-narrative}

When value sets are used within knowledge artifacts, if the artifact includes narrative (Human-readable), it **SHALL** include a representation of at least the following information for each value set:

* The local identifier for the value set.
* The external identifier for the value set.
* The version of the value set, if specified.

For example:
```html
"Encounter Inpatient": "Encounter Inpatient SNOMEDCT Value Set" (http://example.org/fhir/ValueSet/encounter-inpatient, version 20160929)
```

#### String-based Membership Testing
{: #string-based-membership-testing}

Although CQL allows the use of strings as input to membership testing in value sets, this capability should not be used with FHIR-based models as it can lead to incorrect matching if the code system is not considered.

**Conformance Requirement 2.10 (String-based Membership Testing):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-2-10)
{: #conformance-requirement-2-10}

1. String-based membership testing **SHOULD NOT** be used in CQL libraries.

For example, given a value set named `"Administrative Gender"`, the following CQL expression is not recommended:

```cql
'female' in "Administrative Gender"
```

This is because there is no code system associated with the string `'female'` so the comparison to codes in the value set is only partial. There are use cases for this, such as when comparing a string-valued element in FHIR, for example:

```cql
First(Patient.address).state in "New England States"
```

In this case, because the `state` element is string-valued, there is no straightforward way to associate a system, and the string-based membership testing is simpler than requiring the construction of a `Code` value. However, care should be taken with this usage to ensure the string values do not match codes from an unexpected system. Furthermore, if the element being tested is terminology-valued, terminology membership testing **SHOULD** be used.

### Codes
{: #codes}

When direct-reference codes are represented within CQL, the logical identifier **SHALL NOT** be a URI. Instead,
the logical identifier **SHOULD** be the code from the code system.

**Conformance Requirement 2.11 (Direct Referenced Codes):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-2-11)
{: #conformance-requirement-2-11}

1. When direct-reference codes are represented within CQL, the logical identifier:
    1. **SHALL NOT** be a URI.
    2. **SHOULD** be a code from the code system.

```cql
code "Venous foot pump, device (physical object)": '442023007' from "SNOMED CT"
```

Snippet 2-7: code definition from [Example.cql](Library-Example.html#cql-content).

Note that for direct-reference code usage, the local identifier (in Snippet 2-7 the local identifier is "Venous foot pump,
device (physical object)") **SHOULD** be the same as the description of the code within the terminology in order to avoid
conflicting with any usage or license agreements with the referenced terminologies, but can be different to allow for
potential naming conflicts, as well as simplification of longer names when appropriate.

CQL supports both version-specific and version-independent specification of and comparison to direct-reference codes. The best practice is for artifact authors to use version-independent direct-reference codes and comparisons unless there is a specific reason not to (such as the code is retired in the current version). Even in the case that version-specific direct-reference codes are required, best practice is still to use the equivalent (~) operator in CQL for the comparison (again, unless there is a specific reason to do version-specific comparison)

#### Representation in Narrative
{: #code-representation-in-narrative}

When direct-reference codes are used within knowledge artifacts, if the artifact includes narrative (Human-readable), it **SHALL** include a representation of at least the following information for each direct-reference code:

* The local identifier for the code within the codesystem.
* The external identifier for the codesystem.
* The version of the codesystem, if specified.
* The display value from the code system.

For example:
```html
code "Venous foot pump, device (physical object)":  '442023007' from "SNOMEDCT" display Venous foot pump, device (physical object)"
```

### UCUM Best Practices
{: #ucum-best-practices}

Although the Unified Code for Units of Measure (UCUM) is a code system, it requires specific handling for two reasons. First, it is a grammar-based code system with an effectively infinite number of codes, so membership tests must be performed computationally, rather than just by checking for existence of a code in a list; and second, because UCUM codes are so commonly used as part of quantity values, healthcare contexts typically provide direct mechanisms for using UCUM codes.

For these reasons, within quality artifacts in general, and quality measures specifically, UCUM codes **SHOULD** make use of the direct mechanisms wherever possible. In CQL logic, this means using the `Quantity` literal, rather than declaring UCUM codes as direct-reference codes as is recommended when using codes from other code systems. For example, when accessing a Body Mass Index (BMI) observation in CQL:

```cql
define "BMI in Measurement Period":
  [Observation: "BMI"] BMI
    where BMI.status in {'final', 'amended', 'corrected'}
      and BMI.effective during "Measurement Period"
      and BMI.value is not null
      and BMI.value.code = 'kg/m2'
```

Notice the use of the UCUM code directly, as opposed to declaring a CQL code for the unit:

```cql
// Anti-pattern illustrating inappropriate use of code system and code declarations for UCUM
codesystem UCUM: 'http://unitsofmeasure.org'
code "kg/m2": 'kg/m2' from UCUM

define "BMI in Measurement Period":
  [Observation: "BMI"] BMI
    where BMI.status in {'final', 'amended', 'corrected'}
      and BMI.effective during "Measurement Period"
      and BMI.value is not null
      and BMI.value.code = "kg/m2"
// Anti-pattern illustrating inappropriate use of code system and code declarations for UCUM
```

### Concepts
{: #concepts}

In addition to codes, CQL supports a concept construct, which is defined as a set of codes that are all _about_ the same concept, (e.g. the same concept represented in different code systems, or the same concept from the same code system represented at different levels of detail), but CQL itself will make no attempt to ensure that is the case. Concepts should never be used as a surrogate for proper value set definition. In other words, the Concept declaration should not be used to define sets of codes for membership testing.

**Conformance Requirement 2.12 (Concepts):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-2-12)
{: #conformance-requirement-2-12}

1. The CQL concept construct **MAY** be used.
2. The CQL concept construct **SHALL NOT** be used as a surrogate for value set definition.

The following example illustrates appropriate usage of the Concept construct to establish a "Tiredness" concept that has both a context-specific and a standardized representation:

```cql
codesystem "Antenatal Care Concepts": 'http://example.org/fhir/CodeSystem/anc-codes-example'
codesystem "ICD-11": 'http://id.who.int/icd/release/11/mms'

code "Tiredness Code": 'ANC.B5.DE40' from "Antenatal Care Concepts" display 'Tiredness'
code "MB22.7": 'MB22.7' from "ICD-11" display 'Tiredness'

concept "Tiredness": { "Tiredness Code", "MB22.7" } display 'Tiredness'
```

As an example of an anti-pattern for Concept usage, consider the following:

```cql
// Anti-pattern illustrating inappropriate use of the Concept construct
codesystem "Condition Clinical Status Codes": 'http://terminology.hl7.org/CodeSystem/condition-clinical'
code "Active": 'active' from "Condition Clinical Status Codes" display 'Active'
code "Recurrence": 'recurrence' from "Condition Clinical Status Codes" display 'Recurrence'
code "Relapse": 'relapse' from "Condition Clinical Status Codes" display 'Relapse'
concept "Active Condition Statuses": { "Active", "Recurrence", "Relapse" } display 'Active Condition Statuses'
// Anti-pattern illustrating inappropriate use of the Concept construct
```

This usage of concept includes multiple concepts with different meanings from the same code system. Instead, a value set **SHOULD** be used for this purpose as it provides more flexibility and maintainability for this use case.

### Library-level Identifiers
{: #library-level-identifiers}

A "library-level identifier" is any named expression, function, parameter, code system, value set, concept, or code
defined in the CQL. The library name referenced in the library-line, the data model, any referenced external library
should not be considered "library-level identifiers". Library-level identifiers ought to be given a descriptive
meaningful name (avoid abbreviations) and conform to Conformance Requirement 2.13.

**Conformance Requirement 2.13 (Library-level Identifiers):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-2-13)
{: #conformance-requirement-2-13}

1. Library-level identifiers in CQL:
    1. **SHOULD** Have descriptive, meaningful names
    2. **SHOULD** Avoid abbreviations
    3. **SHOULD** Use quoted identifiers if necessary
    4. **SHOULD** Use Initial Case
    5. **MAY** Include spaces

> NOTE: **Initial Case** is defined as the first letter of every word is capitalized (e.g. "Includes Or Starts During") (as opposed to Title Case, which traditionally does not capitalize conjunctions and prepositions, e.g. "Includes or Starts During")

For example:

```cql
define function
   "Includes Or Starts During"(condition Condition, encounter Encounter):
      Interval[condition.onset, condition.abatement] includes encounter.period
         or condition.onset during encounter.period
```

Snippet 2-8: Function definition from [Example.cql](Library-Example.html#cql-content).

The `"Includes Or Starts During"` is the library-level identifier in this example.

#### Fluent Functions
{: #fluent-functions}

<div class="new-content" markdown="1">
Because fluent functions are invoked using _dot-invocation_, they should follow the naming convention for elements, rather than library-level identifiers. For example:

```cql
define fluent function includesOrStartsDuring(condition Condition, encounter Encounter):
  Interval[condition.onset, condition.abatement] includes encounter.period
    or condition.onset during encounter.period
```

</div>

### Data Type Names
{: #data-type-names}

A "data type" in CQL refers to any named type used within CQL expressions. They may be primitive types, such as the
system-defined "Integer" and "DateTime", or they may be model-defined types such as "Encounter" or "Medication". For
FHIR-based knowledge artifacts using model information based on implementation guides (such as the QI-Core profiles),
these will be the author-friendly identifiers for the profile.

**Conformance Requirement 2.14 (Data Type Names):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-2-14)
{: #conformance-requirement-2-14}

1. Data type names referenced in CQL:
    1. **SHALL** use PascalCase (unless dictated by the name of the type in the model)
    2. **SHALL NOT** use quoted identifiers (unless required because the name of the type in the model contains spaces or is otherwise not a valid identifier without quoting)

For example:

```cql
define "Flexible Sigmoidoscopy Performed":
  [Procedure: "Flexible Sigmoidoscopy"] FlexibleSigmoidoscopy
    where FlexibleSigmoidoscopy.status = 'completed'
      and FlexibleSigmoidoscopy.performed ends 5 years or less on or before end of "Measurement Period"
```

Snippet 2-9: Expression definition from [Example.cql](Library-Example.html#cql-content).

The `Procedure` is the name of the model data type (FHIR resource type) in this example.

### Element Names
{: #element-names}

**Conformance Requirement 2.15 (Element Names):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-2-15)
{: #conformance-requirement-2-15}

1. Data model elements referenced in the CQL:
    1. **SHALL NOT** use quoted identifiers (unless required due to the element name in the model not being a valid identifier in CQL)
    2. **SHOULD** use camelCase (unless dictated by the element naming in the model being used)

Examples of elements conforming to Conformance Requirement 2.15 are given below. For a full list of valid of elements, refer to an appropriate data model specification such as QI-Core.

Note: When FHIR and FHIR IGs are used as the data model, the term "element" is synonymous with "attribute". Some data models, such as QDM, use the term "attribute".

```cql
period
authoredOn
result
```

### Aliases and Argument Names
{: #aliases-and-argument-names}

Aliases are used in CQL to reference items within the scope of a query. When defining a function, argument names
are used to create scoped identifiers that refer to the function inputs. Both aliases and argument names conform to
Conformance Requirement 2.16.

**Conformance Requirement 2.16 (Aliases and Argument Names):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-2-16)
{: #conformance-requirement-2-16}

1. Aliases and argument names referenced in the CQL:
    1. **SHALL NOT** Use quoted identifiers
    2. **SHOULD** Use PascalCase for alias names
    3. **SHOULD** Use camelCase for argument names
    4. **SHOULD** Use descriptive names (rather than abbreviations)

For example:

```cql
define "Encounters During Measurement Period":
    "Valid Encounters" QualifyingEncounter
        where QualifyingEncounter.period during "Measurement Period"

define function "ED Stay Time"(encounter "Encounter"):
    duration in minutes of encounter.period
```



---

// File: input/pages/using-elm.md

{:toc}

{: #using-elm}

This topic specifies conformance requirements for the use of Expression Logical Model (ELM) content as part of FHIR Knowledge Artifacts.

### Translation to ELM
{: #translation-to-elm}

Tooling exists to support translation of CQL to ELM for distribution in XML or JSON formats. These distributions can be
included with knowledge artifacts to facilitate implementation. [The existing translator tooling](https://github.com/cqframework/clinical_quality_language/blob/master/Src/java/cql-to-elm/OVERVIEW.md) applies to both measure and decision
support development, and has several options available to make use of different data models in different environments.

**Conformance Requirement 5.1 (ELM Libraries):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-5-1)
{: #conformance-requirement-5-1}

1. Compiled ELM **MAY** be distributed either independently, or in combination with the source CQL
2. Libraries that include ELM **SHALL** conform to either the [ELMJSONLibrary](StructureDefinition-elm-json-library.html) or [ELMXMLLibrary](StructureDefinition-elm-xml-library.html) (or both)
3. Compiled ELM **SHALL** be logically equivalent to the source CQL

**Conformance Requirement 5.2 (Recommended Translator Options):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-5-2)
{: #conformance-requirement-5-2}

For knowledge artifact development with FHIR, the following options are recommended:

| Option | Description | Recommendation |
|----|----|----|
| EnableAnnotations | This instructs the translator to include the source CQL as an annotation within the ELM. | This option **SHOULD** be used to ensure that the distributed ELM could be linked back to the source CQL. |
| EnableLocators | This instructs the translator to include line number and character information for each ELM node. | This option **SHOULD** be used to ensure that distributed ELM could be tied directly to the input source CQL. |
| DisableListDemotion | This instructs the translator to disallow demotion of list-valued expressions to singletons. The list demotion feature of CQL is used to enable functionality related to use with FHIRPath. | This option **SHOULD** be used with knowledge artifacts to ensure list demotion does not occur unexpectedly. |
| DisableListPromotion | This instructs the translator to disallow promotion of singletons to list-valued expressions. The list promotion feature of CQL is used to enable functionality related to use with FHIRPath. | This option **SHOULD** be used with knowledge artifacts to ensure list promotion does not occur unexpectedly. |
| DisableMethodInvocation | This instructs the translator to disallow method-style invocation. The method-style invocation feature of CQL is used to enable functionality related to use with FHIRPath. | This option **SHOULD NOT** be used with FHIR-based knowledge artifacts because it prevents the use of the fluent functions feature of CQL 1.5, which can be used to significantly improve readability of knowledge artifact logic, especially when accessing extensions. |
| EnableDateRangeOptimization | This instructs the translator to optimize date range filters by moving them inside retrieve expressions. | This feature **MAY** be used with knowledge artifacts. |
| EnableResultTypes | This instructs the translator to include inferred result types in the output ELM. | This feature **MAY** be used with knowledge artifacts. |
| EnableDetailedErrors | This instructs the translator to include detailed error information. By default, the translator only reports root-cause errors. | This feature **SHOULD NOT** be used with knowledge artifacts. |
| DisableListTraversal | This instructs the translator to disallow traversal of list-valued expressions. With knowledge artifacts, disabling this feature would prevent a useful capability. | This feature **SHOULD NOT** be used with knowledge artifacts. |
| SignatureLevel | This setting controls whether the `signature` element of a FunctionRef will be populated. | The SignatureLevel **SHOULD** be `Overloads` or `All` to ensure signature information is present. |
{: .grid }

#### Specifying Translator Options

The FHIR specification defines the [cqlOptions](http://hl7.org/fhir/extensions/StructureDefinition-cqf-cqlOptions.html) extension to support defining the expected translator options used with a given Library, or set of Libraries. When this extension is not used, the recommended options above **SHOULD** be used. When this extension is present on a Library, it **SHALL** be used to provide options to the translator when translating CQL for that library. When this extension is present in an asset collection or implementation guide, it **SHALL** be used to provide options to the translator unless the options are provided directly by the library.

**Conformance Requirement 5.3 (Specifying Translator Options):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-5-3)
{: #conformance-requirement-5-3}

1. Translator options **SHOULD** be provided in either a CQLLibrary or an ELMLibrary
2. Translator options specified in a Library take precedence over options defined in an asset collection or implementation guide
3. If no translator options are provided, the recommended options above **SHOULD** be used
4. If translator options are provided in a CQLLibrary or ELMLibrary, the options **SHALL** be consistent with the translator options reported by the ELM content

The `cqlOptions` extension references a contained `Parameters` resource that contains a parameter for each option specified, as well as a `translatorVersion` parameter that indicates the version of the translator used to produce the ELM. For example:

```json
{
  "resourceType": "Library",
  "id": "FHIRCommon",
  "meta": {
    "profile": [ "http://hl7.org/fhir/uv/cql/StructureDefinition/cql-library" ]
  },
  "contained": [ {
    "resourceType": "Parameters",
    "id": "options",
    "parameter": [ {
      "name": "translatorVersion",
      "valueString": "2.9.0-SNAPSHOT"
    }, {
      "name": "option",
      "valueString": "EnableAnnotations"
    }, {
      "name": "option",
      "valueString": "EnableLocators"
    }, {
      "name": "option",
      "valueString": "DisableListDemotion"
    }, {
      "name": "option",
      "valueString": "DisableListPromotion"
    }, {
      "name": "format",
      "valueString": "XML"
    }, {
      "name": "format",
      "valueString": "JSON"
    }, {
      "name": "analyzeDataRequirements",
      "valueBoolean": true
    }, {
      "name": "collapseDataRequirements",
      "valueBoolean": true
    }, {
      "name": "compatibilityLevel",
      "valueString": "1.5"
    }, {
      "name": "enableCqlOnly",
      "valueBoolean": false
    }, {
      "name": "errorLevel",
      "valueString": "Info"
    }, {
      "name": "signatureLevel",
      "valueString": "Overloads"
    }, {
      "name": "validateUnits",
      "valueBoolean": true
    }, {
      "name": "verifyOnly",
      "valueBoolean": false
    } ]
  } ],
  "extension": [ {
    "url": "http://hl7.org/fhir/StructureDefinition/cqf-cqlOptions",
    "valueReference": {
      "reference": "#options"
    }
  } ],
  "url": "http://ecqi.healthit.gov/ecqms/Library/FHIRCommon",
  "version": "4.1.000",
  "name": "FHIRCommon",
  ...
}
```

#### ELM Suitability
{: #elm-suitability}

Because certain translator options impact language features and functionality, translated ELM may not be suitable for use in all contexts if the options used to produce the ELM are inconsistent with the options in use in the evaluating environment. To determine suitability of ELM for use in a given environment, the following guidance **SHALL** be followed:

**Conformance Requirement 5.4 (ELM Suitability):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-5-4)
{: #conformance-requirement-5-4}

1. If the library has function overloads (i.e. function definitions with the same name and different argument lists), the ELM **SHALL** have been translated with a SignatureLevel of `Overloads` or `All`
2. If the evaluation environment or the ELM translator options have a compatibility level set, the compatibility level of the environment **SHALL** be consistent with the compatibility level used to produce the ELM
3. If the ELM has a compatibility level set, it **SHALL** be consistent with the version of the translator used in the evaluation environment
4. The translator version used to produce the ELM **SHOULD** be consistent with the translator version used in the evaluation environment
5. The translator options used in the evaluation environment **SHALL** be consistent with the translator options used to produce the ELM for at least the following options:
    * DisableListTraversal
    * DisableListDemotion
    * DisableListPromotion
    * EnableIntervalDemotion
    * EnableIntervalPromotion
    * DisableMethodInvocation
    * RequireFromKeyword
    * SignatureLevel
6. For authoring environments, the following additional translator options **MAY** be used to determine suitability of available ELM:
    * EnableAnnotations
    * EnableLocators
    * EnableResultTypes



---

// File: input/pages/using-modelinfo.md

{:toc}

{: #using-modelinfo}

This topic specifies conformance requirements for the use of Model Information as part of FHIR Knowledge Artifacts that make use of Clinical Quality Language (CQL).

### ModelInfo
{: #modelinfo}

To use CQL with FHIR, [model information (ModelInfo)](https://cql.hl7.org/07-physicalrepresentation.html#data-model-references) must be provided to the implementation environment. To create this ModelInfo FHIR StructureDefinition resources can be processed according to the following rules:

1. For each StructureDefinition, if the kind is `primitive-type`, `complex-type` (except for types based on Extension), or `resource` (with no derivation or a derivation of `specialization`), a ClassInfo with the same name as the structure definition is created
    1. For each element:
        1. If the element is not a backbone element, a corresponding element with the name and type is added to the ClassInfo. If the maximum cardinality of the element is not "1", the element is created as a list type.
        2. If the element is a backbone element, a new ClassInfo is created with the child elements of the backbone element and a new element is added to the containing ClassInfo with the type of the ClassInfo. Note that this process is recursive and so may result in multiple levels of nested class creation. As such the name of the ClassInfo must include the name of all the parent classes as qualifiers in order to ensure uniqueness. This approach also supports the ability of FHIR elements to reference other element definitions, though a post-processing fixup step is typically needed to resolve these references.

If this process is run against the StructureDefinitions from the base FHIR specification, it produces a complete representation of all the FHIR Resources as classes in the ModelInfo. However, because FHIR primitive types actually have elements (e.g. `value`, `id`, and `extension`), this process produces classes in the ModelInfo for each of the FHIR primitive types, and only the `value` elements of these FHIR primitives are typed with the actual CQL primitive types. This means that to access the actual values of FHIR elements for comparison against CQL primitive values, the `.value` path must be used:

```cql
Patient.gender.value = 'female'
```

To facilitate comparison by authors, these primitives can be implicitly converted to CQL primitive types, and the FHIRHelpers library (generated alongside the ModelInfo) defines these implicit conversions. See the [CQF Common](http://fhir.org/guides/cqf/common) implementation guide for a complete FHIR ModelInfo as well as FHIRHelpers library representing the FHIR specification.

To make use of these implicit conversions within a CQL library, include the FHIRHelpers library:

```cql
include FHIRHelpers version '4.0.1'
```

#### ModelInfo Libraries

Similar to CQL content, ModelInfo can be included in FHIR Library resources to facilitate distribution.

**Conformance Requirement 6.1 (ModelInfo Libraries):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-6-1)
{: #conformance-requirement-6-1}

1. Libraries used to package ModelInfo **SHALL** conform to the [CQLModelInfo](StructureDefinition-cql-modelinfo.html) profile
1. The identifying elements of a modelinfo **SHALL** conform to the following requirements:
* Library.url **SHALL** be `<CQL model namespace url>/Library/<CQL model name>-ModelInfo`
* Library.name **SHALL** be `<CQL model name>`
* Library.version **SHALL** be `<CQL model version>`
2. For model info libraries included in FHIR implementation guides, the CQL model namespace is defined by the implementation guide as follows:
* CQL model namespace name **SHALL** be IG.packageId
* CQL model namespace url **SHALL** be IG.canonicalBase
3. To avoid issues with characters between web ids and names, CQL model names **SHALL NOT** have underscores.

The prohibition against underscores in CQL model names is required to ensure compliance with the canonical URL pattern (because URLs by convention should not use underscores). In addition, many publishing environments will use the canonical tail (i.e. the name of the library) as the logical id of the Library resource, which does not allow underscores per the FHIR specification.

#### Profile-informed ModelInfo
{: #profile-informed-modelinfo}

CQL can be used with a FHIR ModelInfo directly, as described above. However, FHIR profiles include a wealth of computable information about the intended structure of the clinical data involved in an exchange, including terminology bindings, constraints, descriptive metadata, _slices_ and _extensions_. To facilitate authoring that can easily reference this information, the tooling to construct ModelInfo from the base FHIR StructureDefinitions has been enhanced to support building ModelInfo that is specific to an implementation guide:

1. Each profile (StructureDefinition with derivation set to `constraint`) results in a new ClassInfo in the ModelInfo, derived from the ClassInfo for the baseDefinition of the profile
    1. `namespace` is set to the `modelName`
    2. `name` is set to the `name` element of the StructureDefinition
    3. `baseType` is set to the qualified name of the class corresponding to the `baseDefinition`
    4. `identifier` is set to the canonical `url` of the StructureDefinition
    5. `label` is set to the `title` of the StructureDefinition (unless overridden by the cqf-modelInfo-label extension)
    6. `retrievable` is set to `true` (unless overridden by the cqf-modelInfo-isRetrievable extension)
    7. `primaryCodePath` is set based on the cqf-modelInfo-primaryCodePath extenssion
2. FHIR Primitive types are mapped to CQL types according to the above FHIR Type Mapping section.
3. Extensions and slices defined in profiles are represented as first-class elements in the ClassInfo. Specifically, ClassInfo structures are created with elements as defined by the slice or extension definitions.
    1. For slices, a new ClassInfo is created derived from the ClassInfo corresponding to the element being sliced, and named based on the `sliceName` element of the slice definition. An element of this type and named with the `sliceName` is then added to the containing ClassInfo.
    2. For extensions, a new ClassInfo is created derived from the `Extension` ClassInfo and named based on the `name` of the extension definition. An element of this type and named with the extension `sliceName` is then added to the containing ClassInfo.
4. If a terminology-valued element has a `cqf-notDoneValueSet` extension defined, the element is typed as a Choice of the terminology-value (CodeableConcept, Coding, or Code) and ValueSet, allowing retrieves to be performed against the ValueSet referenced by the cqf-notDoneValueSet extension

For example, consider the [US Core Blood Pressure Profile](https://hl7.org/fhir/us/core/StructureDefinition-us-core-blood-pressure.html). This profile has two slices of the `component` element, named `systolic` and `diastolic`. The resulting USCore ModelInfo has classes derived from the `USCore.Observation.Component` class:

```xml
  <typeInfo xsi:type="ClassInfo" namespace="USCore" name="Observation.Component.systolic" retrievable="false" baseType="USCore.Observation.Component"/>
  <typeInfo xsi:type="ClassInfo" namespace="USCore" name="Observation.Component.diastolic" retrievable="false" baseType="USCore.Observation.Component"/>
```

and then elements in the `USCore.BloodPressureProfile` class corresponding to these slices:

```xml
  <element name="systolic" elementType="USCore.Observation.Component.systolic"/>
  <element name="diastolic" elementType="USCore.Observation.Component.diastolic"/>
```

For extensions, consider the [US Core Ethnicity Extension](https://hl7.org/fhir/us/core/StructureDefinition-us-core-ethnicity.html). This is a complex extension, and so the constructed ClassInfo has elements for each of the elements defined by the extension:

```xml
  <typeInfo xsi:type="ClassInfo" namespace="USCore" name="EthnicityExtension" identifier="http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity" label="US Core Ethnicity Extension" retrievable="false" baseType="USCore.Extension">
      <element name="ombCategory" elementType="System.Code"/>
      <element name="detailed">
          <elementTypeSpecifier xsi:type="ListTypeSpecifier" elementType="System.Code"/>
      </element>
      <element name="text" elementType="System.String"/>
      <element name="url" elementType="System.String"/>
  </typeInfo>
```

And the `USCore.PatientProfile` class then has an element named `ethnicity` of this type:

```xml
  <element name="ethnicity" elementType="USCore.EthnicityExtension"/>
```

> NOTE: Importantly, with profile-informed modelinfo, each element in the modelinfo includes a `target` mapping that specifies an expansion to be performed by the translator so that access in the ELM is performed directly against the base FHIR resources, rather than requiring engines (and by extension runtime environments) to deal with data in terms of the profile definitions. As a result, the ELM output of CQL libraries using profile-informed authoring is in terms of the base FHIR resources. Note that for implementations that support profile-informed CQL, this means that the result of retrieve expressions must respect the profile stated in the `templateId` element of the retrieve. This is not to say that the FHIR resource must declare profiles to which they conform, only that with profile-informed authoring, there is an expectation that the ELM expects that FHIR resources returned through a retrieve will conform to the stated profiles. How that conformance is guaranteed is left up to implementations.

#### ModelInfo Settings

In addition, to support more fine-grained control over the process of producing ModelInfo from FHIR StructureDefinitions, this implementation guide defines several ModelInfo-related extensions:

* [cqf-modelInfo-isIncluded]({{site.data.fhir.ver.ext}}/StructureDefinition-cqf-modelInfo-isIncluded.html) - Determines whether to create a ClassInfo for the profile or extension on which it appears
* [cqf-modelInfo-isRetrievable]({{site.data.fhir.ver.ext}}/StructureDefinition-cqf-modelInfo-isRetrievable.html) - Determines whether the ClassInfo for the profile on which it appears is marked retrievable (i.e. can appear as the target type of a Retrieve in CQL)
* [cqf-modelInfo-label]({{site.data.fhir.ver.ext}}/StructureDefinition-cqf-modelInfo-label.html) - Specifies an author-friendly title for the ClassInfo (i.e. an alternate name by which the type can be referenced in CQL type specifiers)
* [cqf-modelInfo-primaryCodePath]({{site.data.fhir.ver.ext}}/StructureDefinition-cqf-modelInfo-primaryCodePath.html) - Specifies the primary code path for the ClassInfo produced from the profile on which it appears (i.e. the default path for terminology-valued filters when the type is used in a Retrieve in CQL)
* [cqf-modelInfoSettings]({{site.data.fhir.ver.ext}}/StructureDefinition-cqf-modelInfoSettings.html) - Specifies additional settings used to produce the ModelInfo for profiles and extensions defined in the Implementation Guide on which it appears


---

// File: input/resources/README.md

This folder contains project specific conformance resource in xml or json.

These are used by the ig-publisher to create fragments to include in the IG.


---

// File: input/vocabulary/README.md

This folder contains page the valuesets and codesystems referenced within the IG


---

// File: input/data/package-list.yml

package-id: hl7.fhir.uv.cql
title: Using CQL With FHIR
canonical: 'http://hl7.org/fhir/uv/cql'
introduction: >-
  [Clinical Quality Language (CQL)](http://cql.hl7.org) is a clinically-focused query language that can be used to express logic in a 
  broad range of healthcare use cases, including clinical decision and cognitive support, public health and quality reporting, 
  computable clinical guidelines, research trial eligibility, and many others. This implementation guide provides conformance criteria and
  guidance for using CQL with FHIR across these use cases.
list:
  - version: current
    desc: |-
      
      The following trackers were applied for this version:

      **Status**: **Summary**:(**Jira Issue**)


---

