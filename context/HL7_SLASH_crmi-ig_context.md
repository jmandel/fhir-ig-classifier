File: repos/HL7_SLASH_crmi-ig/input/_for-ballot-1/data-configurable-profile.fsh

Profile: DataConfigurableOperation
Id: crmi-data-configurable-operation
Parent: OperationDefinition
Title: "CRMI Operation Profile: Data Configurable"
Description: """
Operation where data configuration can be specified

* `useServerData`: Whether to use data from the server performing the evaluation, exclusive with `dataEndpoint`.
* `data`: Data to be made available for evaluation. This parameter is exclusive with the prefetchData parameter (i.e. either provide all data as a single bundle, or provide data using multiple bundles with prefetch descriptions).
* `prefetchData`: Data to be made available for evaluation, organized as prefetch response bundles. Each prefetchData parameter specifies either the name of the prefetchKey it is satisfying, a DataRequirement describing the prefetch, or both.
* `dataEndpoint`: An endpoint to use to access data referenced by retrieve operations in libraries, exclusive with `useServerData`.
"""

* parameter
  * insert SliceOnName

* parameter contains useServerData 0..1 MS
* parameter[useServerData]
  * name = #useServerData (exactly)
  * min = 0
  * max = "1"
  * use = #in
  * type = #boolean

* parameter contains data 0..1 MS
* parameter[data]
  * name = #data (exactly)
  * use = #in
  * min = 0
  * max = "1"
  * type = #Bundle

* parameter contains prefetchData 0..1 MS
* parameter[prefetchData]
* parameter[prefetchData]
  * name = #prefetchData (exactly)
  * use = #in
  * min = 0
  * max = "*"

  * part
    * insert SliceOnName

  * part contains key 0..1 MS
  * part[key]
    * name = #key (exactly)
    * use = #in
    * min = 0
    * max = "*"
    * type = #string
    
  * part contains descriptor 0..1 MS
  * part[descriptor]
    * name = #descriptor (exactly)
    * use = #in
    * min = 0
    * max = "1"
    * type = #DataRequirement

  * part contains data 0..1 MS
  * part[data]
    * name = #data (exactly)
    * use = #in
    * min = 0
    * max = "1"
    * type = #Bundle

* parameter contains dataEndpoint 0..1 MS
* parameter[dataEndpoint]
  * name = #dataEndpoint (exactly)
  * min = 0
  * max = "1"
  * use = #in
  * type = #Endpoint

---

File: repos/HL7_SLASH_crmi-ig/input/_for-ballot-1/parameterizable-operation-profile.fsh

Profile: ParameterizableOperation
Id: crmi-parameterizable-operation
Parent: OperationDefinition
Title: "CRMI Operation Profile: Parameterizable"
Description: """
Operation that is parameterizable

This establishes a 'parameters' input used in evaluation.

* `parameters`: Any input parameters defined or referended in dependant libraries.
"""

* parameter
  * insert SliceOnName

* parameter contains parameters 0..1 MS
* parameter[parameters]
  * name = #parameters (exactly)
  * min = 0
  * max = "1"
  * use = #in
  * type = #Parameters

---

File: repos/HL7_SLASH_crmi-ig/input/_unused-fsh/artifact-uriReference.fsh

Extension: ArtifactUriReference
Id: artifact-uriReference
Description: """
Create a reference, following canonical reference semantics, to an artifact that
uses non-canonical extensions artifact-url and artifact-version as business
identifiers.
"""
* ^url = "http://hl7.org/fhir/StructureDefinition/artifact-uriReference"
* ^title = "Artifact URI Reference"
* ^purpose = "To allow resources to define a reference to a non-canonical definitional artifact resource."
* . ^short = "The artifact"
* value[x] only uri


---

File: repos/HL7_SLASH_crmi-ig/input/_unused-fsh/artifact-version-algorithm.fsh

Alias: $version-algorithm = http://hl7.org/fhir/ValueSet/version-algorithm

Extension: ArtifactVersionAlgorithm
Id: artifact-versionAlgorithm
Title: "Artifact Version Algorithm"
Description: "Indicates the mechanism used to compare versions to determine which is more current."
* insert StandardsMetadata(1)
* ^url = "http://hl7.org/fhir/StructureDefinition/artifact-versionAlgorithm"
* ^purpose = "This extension is defined to support representing artifact metadata on resources that are not already canonical resources that have the corresponding element, and that behave in a definitional way. For example, it would not be appropriate to use this extension on a patient-specific resource such as MedicationRequest or CarePlan."
* ^context.type = #element
* ^context.expression = "Resource"
* . 0..1
* . ^short = "How to compare versions"
* . ^definition = "Indicates the mechanism used to compare versions to determine which is more current."
* . ^comment = "If set as a string, this is a FHIRPath expression that has two additional context variables passed in - %version1 and %version2 and will return a negative number if version1 is newer, a positive number if version2 and a 0 if the version ordering can't be successfully be determined."
* url only uri
* value[x] 1..
* value[x] only string or Coding
* value[x] from $version-algorithm (extensible)
* value[x] ^binding.description = "The algorithm used to compare versions for the artifact"

---

File: repos/HL7_SLASH_crmi-ig/input/_unused-fsh/artifact-version-policy.fsh

Alias: $artifact-version-policy = http://terminology.hl7.org/ValueSet/artifact-version-policy

Extension: ArtifactVersionPolicy
Id: artifact-versionPolicy
Title: "Artifact Version Policy"
Description: "Describes the versioning policy of the artifact."
* insert StandardsMetadata(1)
* ^url = "http://hl7.org/fhir/StructureDefinition/artifact-versionPolicy"
* ^purpose = "To provide versioning policy information for an artifact."
* ^context.type = #element
* ^context.expression = "Resource"
* . 0..1
* . ^short = "metadata | strict"
* . ^definition = "Defines the versioning policy of the artifact."
* url only uri
* value[x] only Coding
* value[x] from $artifact-version-policy (extensible)
* value[x] ^binding.description = "The versioning policy of the artifact"

---

File: repos/HL7_SLASH_crmi-ig/input/_unused-fsh/cqf-artifact-comment.fsh

Extension: ArtifactComment
Id: cqf-artifactComment
Title: "Artifact Comment"
Description: "A comment containing additional documentation, a review comment, usage guidance, or other relevant information from a particular user."
* insert StandardsMetadata(3)
* ^url = "http://hl7.org/fhir/StructureDefinition/cqf-artifactComment"
* ^context.type = #element
* ^context.expression = "Resource"
* . 0..*
* . ^short = "Additional documentation, review, or usage guidance"
* . ^definition = "A comment containing additional documentation, a review comment, usage guidance, or other relevant information from a particular user."
* extension contains
    type 1..1 and
    text 1..1 and
    target 0..* and
    reference 0..* and
    user 0..1 and
    authoredOn 0..1
* extension[type] only Extension
* extension[type] ^short = "documentation | review | guidance"
* extension[type] ^definition = "Indicates whether the comment is  providing additional documentation, a review comment that requires resolution, or providing usage guidance to an artifact consumer."
* extension[type].url only uri
* extension[type].value[x] 1..
* extension[type].value[x] only code
* extension[type].value[x] from $artifact-comment-type (required)
* extension[type].value[x] ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* extension[type].value[x] ^binding.extension.valueString = "ArtifactCommentType"
* extension[text] only Extension
* extension[text] ^short = "The comment"
* extension[text] ^definition = "The text content of the comment."
* extension[text].url only uri
* extension[text].value[x] 1..
* extension[text].value[x] only markdown
* extension[target] only Extension
* extension[target] ^short = "What the comment is directed to"
* extension[target] ^definition = "A URI that points to what the comment is about, such as a line of text in the CQL, or a specific element in a resource."
* extension[target] ^comment = "The target element is used to point the comment to aspect of the artifact, typically a text range within a CQL library (e.g. Library/example#content?0:0-120:80)."
* extension[target].url only uri
* extension[target].value[x] 1..
* extension[target].value[x] only uri
* extension[reference] only Extension
* extension[reference] ^short = "Supporting reference for the comment"
* extension[reference] ^definition = "Provides additional supporting information relevant to the comment."
* extension[reference] ^comment = "The reference element is used to reference other relevant information. For example, a comment may point to a citation in a relatedArtifact element (e.g. Library/example#relatedArtifact[ABC])."
* extension[reference].url only uri
* extension[reference].value[x] 1..
* extension[reference].value[x] only uri
* extension[user] only Extension
* extension[user] ^short = "Who commented"
* extension[user] ^definition = "Specifies the user or organization that authored the comment."
* extension[user].url only uri
* extension[user].value[x] 1..
* extension[user].value[x] only string
* extension[authoredOn] only Extension
* extension[authoredOn] ^short = "Date and time the comment was made"
* extension[authoredOn] ^definition = "Specifies the date and time the comment was authored."
* extension[authoredOn].url only uri
* extension[authoredOn].value[x] 1..
* extension[authoredOn].value[x] only dateTime

---

File: repos/HL7_SLASH_crmi-ig/input/_unused-pages/artifact-conformance.md


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

File: repos/HL7_SLASH_crmi-ig/input/_unused-pages/using-cql.md

{:toc}

{: #using-cql}

This topic specifies conformance requirements and guidance for the use of CQL with FHIR, whether that be as in-line expressions in expression-valued elements, or in CQL libraries contained in FHIR Library resources.

### Libraries
{: #libraries}

Declarations in CQL are packaged in containers called _libraries_ which provide a unit for the definition, distribution, and versioning of CQL logic. The following conformance requirements and guidance apply When libraries of CQL are used with FHIR knowledge artifacts.

**Conformance Requirement 4.1 (Library Declaration):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-1)
{: #conformance-requirement-4-1}
  1. Any CQL library used by a FHIR artifact **SHALL** contain a [library declaration.](https://cql.hl7.org/02-authorsguide.html#library)
  2. The library identifier **SHALL** be a valid un-quoted identifier and **SHALL NOT** contain underscores

For example:

```cql
library EXM146
```

This declaration specifies the name of the library as `EXM146`. See the discussion on [Library Resources](#library-resources) for more information on library naming conventions.

#### Library Versioning
{: #library-versioning}

This IG recommends [Semantic Versioning](https://semver.org) be used to version libraries used within knowledge artifacts to help track and manage dependencies.

**Conformance Requirement 4.2 (Library Versioning):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-2)
{: #conformance-requirement-4-2}
  1. The library declaration **SHOULD** specify a version.
  2. The library version **SHOULD** follow the convention :  
       < major >.< minor >.< patch >
  3. For artifacts in draft status, the versioning scheme **SHALL NOT** apply, and there is no expectation that artifact contents are stable
  4. The versioning scheme **SHALL** apply when an artifact moves to active status.

There are three main types of changes that can be made to a library:

  1. A library can be changed in a way that would alter the public use of its components. 
  2. A library can be changed by adding new components or functionality but without changing the way that existing components are used. 
  3. A library can be changed in a way that does not change existing components or add new components, but only corrects or improves the originally intended functionality.

By exposing version numbers that identify all three types of changes, libraries can be versioned in a way that makes
clear when a change will impact usage, versus when a change can potentially be safely incorporated as an update. The
first type of change will be referred to as a "major" change, and will require incrementing of the "major version
number". The second type of change will be referred to as a "minor" change, and will only require incrementing of the
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

Snippet 4-1: Library line from EXM146.cql, the second major version.

Note that when CQL libraries are included as part of larger groupings of artifacts (such as quality measures or computable guidelines), the version of the library is specified along with all the other artifacts in the larger group. For more guidance on versioning these artifacts as a group, refer to the [Versioning]() topic in the CRMI implementation guide.

#### Nested Libraries
{: #nested-libraries}

CQL allows libraries to re-use logic already defined in other libraries. This is accomplished by utilizing the
include declaration as in Snippet 4-2.

```cql
include Common version '2.0.0' called Common
```

Snippet 4-2: Nested library within EXM146.cql

The set of all CQL libraries used as part of a knowledge artifact must adhere to Conformance Requirement 4.3.

**Conformance Requirement 4.3 (Nested Libraries):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-3)
{: #conformance-requirement-4-3}

1. CQL libraries **SHOULD** be structured such that all CQL expressions referenced from a single FHIR resource are
contained within a single library.
    * If an artifact makes use of multiple libraries, expression references in that artifact **SHALL** be qualified with the `name` of the library (i.e. `library-name.expression-identifier`)
2. CQL libraries **SHALL** use a `called` clause for all included libraries
3. The `called`-alias for an included library **SHOULD** be consistent for usages across libraries

The recommendation that CQL libraries be structured such that all references to expressions from a FHIR artifact is a simplification to ensure that expression references from FHIR artifacts don't require qualified expressions (as they would if multiple libraries were referenced). However, there are valid use cases for allowing multiple libraries to be referenced, such as modular questionnaires, and dependent library references. However, when an artifact 

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
library is included in the ELM in the `Library.identifier` element, along with a URI that provides a globally unique, stable identifier for the namespace.
For example, the URI for the CMS namespace might be `https://ecqi.healthit.gov/ecqm/measures`.

Note that this is a URI that may or may not correspond to a reachable web address (a URL). The important aspect is not
the addressability, but the uniqueness, ensuring that library name collisions cannot occur.

**Conformance Requirement 4.4 (Library Namespaces):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-4)
{: #conformance-requirement-4-4}

1. CQL libraries **SHOULD** use namespaces.
2. When a namespace is not used, the library **SHALL** be considered part of a "public" global namespace for the purposes of resolution within a given environment.
3. The root of the CQL namespace **SHALL** match the root of the url of the Library resource housing the CQL library.

In addition, because the namespace of a library functions as part of the globally unique identifier for the library, changing the namespace of the library results in a different artifact.

### Data Model
{: #data-model}

CQL can be used with any data model(s). To be used with FHIR, CQL requires model information. To facilitate use with any FHIR content, a general-purpose FHIR information model is included in the [Common](https://fhir.org/guides/cqf/common) implementation guide. However, CQL may also be used with implementation-guide specific model information (i.e. structures based on the profile definitions in an IG).

**Conformance Requirement 4.5 (CQL Data Model):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-5)
{: #conformance-requirement-4-5}

1. All libraries and CQL expressions used directly or indirectly within a knowledge artifact **SHOULD** use FHIR-based data models.
2. Data Model declarations **SHALL** include a version declaration.

For example:

```cql
using FHIR version '4.0.1'
```

Snippet 4-3: Data Model line from EXM146.cql

### Code Systems
{: #code-systems}

Conformance Requirement 4.6 describes how to specify a code system within a CQL library.

**Conformance Requirement 4.6 (Code System Specification):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-6)
{: #conformance-requirement-4-6}

1. Within CQL, the identifier of any code system reference **SHALL** be specified using a URI for the code system.
2. The URI **SHALL** be the canonical URL for the code system
3. The Code System declaration **MAY** include a version, consistent with the URI specification for FHIR and the code system

For example:

```cql
codesystem "SNOMED CT:2017-09": 'http://snomed.info/sct'
  version 'http://snomed.info/sct/731000124108/version/201709'
```

Snippet 4-4: codesystem definition line from Terminology.cql.

The canonical URL for a code system is a globally unique, stable, version-independent identifier for the code system.
The [HL7 Terminology site (THO)](http://terminology.hl7.org) defines canonical URLs for most common code systems.

The local identifier for the codesystem ("SNOMED CT:2017-09" in this case) should include the friendly name of the code system
and optionally, an indication of the version, separated with a colon.

Version information for code systems is not required to be included in knowledge artifacts; terminology versioning information may be
specified externally. However, if versioning information is included, it must be done in accordance with the terminology
usage specified by FHIR.

If no version is specified, then the default behavior for a FHIR terminology server is to use the most recent code
system version available on the server.

### Value Sets
{: #value-sets}

Conformance Requirement 4.7 describes how to specify a valueset within a CQL library.

**Conformance Requirement 4.7 (Value Set Specification):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-7)
{: #conformance-requirement-4-7}

1. Within CQL, the identifier of any value set reference **SHALL** be specified using a URI for the value set.
2. The URI **SHALL** be the canonical URL for the value set
3. The URI **MAY** include a version, consistent with versioned canonical URL references in FHIR

For example:

```cql
valueset "Absent or Unknown Allergies - IPS": 'http://hl7.org/fhir/uv/ips/ValueSet/absent-or-unknown-allergies-uv-ips'
```

Snippet 4-5: Valueset reference from EXM146.cql

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

#### Value Set Version
{: #value-set-version}

Version information for value sets is not required to be included in knowledge artifacts; terminology versioning information may be
specified externally. However, if versioning information is included, it must be done in accordance with the terminology
usage specified by FHIR.

Conformance Requirement 4.8 describes how to retrieve an expansion of a value set by version.

**Conformance Requirement 4.8 (Value Set Specification By Version):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-8)
{: #conformance-requirement-4-8}

1. When retrieving the expansion of a value set by version, append the version identifier to the canonical URL of the
value set, separated by a pipe (`|`)

For example:

```cql
valueset "Encounter Inpatient SNOMEDCT Value Set":
   'http://example.org/fhir/ValueSet/encounter-inpatient|20160929'
```

Snippet 4-6: valueset definition from Terminology.cql.

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

**Conformance Requirement 4.9 (Value Set Expansion):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-9)
{: #conformance-requirement-4-9}

1. Valueset membership testing **SHOULD** use the terminology membership operation in CQL (`in(ValueSet)`), as opposed to requiring computation on the lists of codes in a value set.  Please reference  http://cql.hl7.org/02-authorsguide.html#terminology-operators for more information.

For example, rather than combining multiple value sets using a `union`, separate membership tests in each value set **SHOULD** be used. For more information, see the [Value Set Expansion](http://hl7.org/fhir/valueset.html#expansion) topic in the base FHIR specification.

#### Representation in Narrative
{: #valueset-representation-in-narrative}

When value sets are used within knowledge artifacts, they will be represented in the narrative (Human-readable) as:

```html
"Encounter Inpatient" using "Encounter Inpatient SNOMEDCT Value Set" (http://example.org/fhir/ValueSet/encounter-inpatient, version 20160929)
```

In other words, the local identifier for the value set, followed by the value set information from the value set declaration, including version if specified.

#### String-based Membership Testing
{: #string-based-membership-testing}

Although CQL allows the use of strings as input to membership testing in value sets, this capability **SHALL NOT** be used with FHIR-based models as it can lead to incorrect matching if the code system is not considered.

**Conformance Requirement 4.10 (String-based Membership Testing):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-10)
{: #conformance-requirement-4-10}

1. String-based membership testing **SHALL NOT** be used in CQL libraries

For example, given a valueset named `"Administrative Gender"`, the following CQL expression would be non-conformant:

```cql
'female' in "Administrative Gender"
```

### Codes
{: #codes}

When direct-reference codes are represented within CQL, the logical identifier **SHALL NOT** be a URI. Instead,
the logical identifier **SHOULD** be the code from the code system.

**Conformance Requirement 4.11 (Direct Referenced Codes):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-11)
{: #conformance-requirement-4-11}

1. When direct-reference codes are represented within CQL, the logical identifier:<br/>
     a. **SHALL NOT** be a URI.<br/>
     b. **SHOULD** be a code from the code system.

```cql
code "Venous foot pump, device (physical object)": '442023007' from "SNOMED CT"
```

Snippet 4-7: code definition from Terminology.cql.

Note that for direct-reference code usage, the local identifier (in Snippet 4-7 the local identifier is "Venous foot pump,
device (physical object)") **SHOULD** be the same as the description of the code within the terminology in order to avoid
conflicting with any usage or license agreements with the referenced terminologies, but can be different to allow for
potential naming conflicts, as well as simplification of longer names when appropriate.

CQL supports both version-specific and version-independent specification of and comparison to direct-reference codes. The best practice is for artifact authors to use version-independent direct-reference codes and comparisons unless there is a specific reason not to (such as the code is retired in the current version). Even in the case that version-specific direct-reference codes are required, best practice is still to use the equivalent (~) operator in CQL for the comparison (again, unless there is a specific reason to do version-specific comparison)

#### Representation in Narrative
{: #code-representation-in-narrative}

When direct-reference codes are used within knowledge artifacts, they will be represented in the narrative (Human-readable) as:

```html
"Venous foot pump, device (physical object)" using "Venous foot pump, device (physical object) SNOMED CT Code (442023007)"
```

In other words, the library identifier followed by the code and code system information from the code declaration.

### UCUM Best Practices
{: #ucum-best-practices}

Although the Unified Code for Units of Measure (UCUM) is a code system, it requires specific handling for two reasons. First, it is a grammar-based code system with an effectively infinite number of codes, so membership tests must be performed computationally, rather than just by checking for existence of a code in a list; and second, because UCUM codes are so commonly used as part of quantity values, healthcare contexts typically provide direct mechanisms for using UCUM codes.

For these reasons, within quality artifacts in general, and quality measures specifically, UCUM codes **SHOULD** make use of the direct mechanisms wherever possible. In CQL logic, this means using the Quantity literal, rather than declaring UCUM codes as direct-reference codes as is recommended when using codes from other code systems. For example, when accessing a Body Mass Index (BMI) observation in CQL:

```html
define "BMI in Measurement Period":
  [Observation: "BMI"] BMI
    where BMI.status in {'final', 'amended', 'corrected'}
      and BMI.effective during "Measurement Period"
      and BMI.value is not null
      and BMI.value.code = 'kg/m2'
```

Notice the use of the UCUM code directly, as opposed to declaring a CQL code for the unit:

```html
codesystem UCUM: 'http://unitsofmeasure.org'
code "kg/m2": 'kg/m2' from UCUM

define "BMI in Measurement Period":
  [Observation: "BMI"] BMI
    where BMI.status in {'final', 'amended', 'corrected'}
      and BMI.effective during "Measurement Period"
      and BMI.value is not null
      and BMI.value.code = "kg/m2"
```

### Concepts
{: #concepts}

In addition to codes, CQL supports a concept construct, which is defined as a set of codes that are all _about_ the same concept, (e.g. the same concept represented in different code systems, or the same concept from the same code system represented at different levels of detail), but CQL itself will make no attempt to ensure that is the case. Concepts should never be used as a surrogate for proper valueset definition. In other words, the Concept declaration should not be used to define sets of codes for membership testing.

**Conformance Requirement 4.12 (Concepts):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-12)
{: #conformance-requirement-4-12}

1. The CQL concept construct **MAY** be used.
2. The CQL concept construct **SHALL NOT** be used as a surrogate for valueset definition.

As an example of an anti-pattern for Concept usage, consider the following:

```cql
codesystem "Condition Clinical Status Codes": 'http://terminology.hl7.org/CodeSystem/condition-clinical'
code "Active": 'active' from "Condition Clinical Status Codes" display 'Active'
code "Recurrence": 'recurrence' from "Condition Clinical Status Codes" display 'Recurrence'
code "Relapse": 'relapse' from "Condition Clinical Status Codes" display 'Relapse'
concept "Active Condition Statuses": { "Active", "Recurrence", "Relapse" } display 'Active Condition Statuses'
```

This usage of concept includes multiple concepts with different meanings from the same code system. A value set **SHOULD** be used for this purpose as it provides more flexibility and maintainability for this use case.

### Library-level Identifiers
{: #library-level-identifiers}

A "library-level identifier" is any named expression, function, parameter, code system, value set, concept, or code
defined in the CQL. The library name referenced in the library-line, the data model, and any referenced external library
should not be considered "library-level identifiers". Library-level identifiers ought to be given a descriptive
meaningful name (avoid abbreviations) and conform to Conformance Requirement 4.13.

**Conformance Requirement 4.13 (Library-level Identifiers):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-13)
{: #conformance-requirement-4-13}

1. Library-level identifiers referenced in the CQL:<br/>
      a. **SHOULD** Use quoted identifiers<br/>
      b. **SHOULD** Use Initial Case<br/>
      c. **MAY** Include spaces

For example:

```cql
define function
   "Includes Or Starts During"(Condition "Condition", Encounter "Encounter"):
      Interval[Condition.onset, Condition.abatement] includes Encounter.period
         or Condition.onset during Encounter.period
```

Snippet 4-8: Function definition from Common.cql

The `"Includes Or Starts During"` is the library-level identifier in this example.

### Data Type Names
{: #data-type-names}

A "data type" in CQL refers to any named type used within CQL expressions. They may be primitive types, such as the
system-defined "Integer" and "DateTime", or they may be model-defined types such as "Encounter" or "Medication". For
FHIR-based knowledge artifacts using model information based on implementation guides (such as the QI-Core profiles), 
these will be the author-friendly identifiers for the profile. Data types referenced in CQL libraries to be included 
in a knowledge artifact must conform to Conformance Requirement 4.14.

**Conformance Requirement 4.14 (Data Type Names):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-14)
{: #conformance-requirement-4-14}

1. Data type names referenced in CQL **SHALL**:<br/>
       a. Use quoted identifiers only if necessary (i.e. the data type name includes spaces)<br/>
       b. Use PascalCase plus appropriate spacing

For example:

```cql
define "Flexible Sigmoidoscopy Performed":
  [Procedure: "Flexible Sigmoidoscopy"] FlexibleSigmoidoscopy
    where FlexibleSigmoidoscopy.status = 'completed'
      and FlexibleSigmoidoscopy.performed ends 5 years or less on or before end of "Measurement Period"
```

Snippet 4-9: Expression definition from EXM130.cql

The `Procedure` is the name of the model data type (FHIR resource type) in this example.

### Missing Information

Because clinical information is often incomplete, CQL provides constructs and support for representing and dealing with _unknown_ or missing information. In FHIR, when the value of an element is not present, accessing that element will result in a `null`:

```cql
Observation.interpretation
```

Given an instance of an Observation resource that does not have an interpretation element, the above expression will return `null`. In general, `null` results will _propagate_ through operations. For example:

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
MedicationRequeest.status = 'unknown'
```

This is a special-case of characterizing missing information within FHIR resources. To treat this status value as a null, the following pattern can be used:

```cql
if MedicationRequest.status is null or MedicationRequest.status ~ 'unknown'
```

For more information about dealing with Missing Information in CQL in general, see the [Missing Information](https://cql.hl7.org/02-authorsguide.html#missing-information) topic in the CQL Author's Guide.

### Negation in FHIR
{: #negation-in-fhir}

Two commonly used patterns for negation in clinical logic are:

* Absence of evidence for a particular event
* Documentation of an event not occurring, together with a reason

For the purposes of clinical reasoning, when looking for documentation that a particular event did not occur, it must
be documented with a reason in order to meet the intent. If a reason is not part of the intent, then the absence of
evidence pattern **SHOULD** be used, rather than documentation of an event not occurring.

To address the reason an action did not occur (negation rationale), an artifact must define the event it expects to occur
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
  ["MedicationAdministration": "Antithrombotic Therapy"] AntithromboticTherapy
    where AntithromboticTherapy.status = 'completed'
      and AntithromboticTherapy.category ~ "Inpatient Setting"
```

#### Absence
{: #absence}

No evidence that "Antithrombotic Therapy" medication was administered:

```cql
define "No Antithrombotic Therapy":
  not exists (
    ["MedicationAdministration": "Antithrombotic Therapy"] AntithromboticTherapy
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
  ["MedicationAdministration": "Antithrombotic Therapy"] NotAdministered
    where NotAdministered.status = 'not-done'
      and NotAdministered.statusReason in "Medical Reason"
```

In this example for negation rationale, the logic looks for a member of the value set "Medical Reason" as the rationale
for not administering any of the anticoagulant and antiplatelet medications specified in the "Antithrombotic Therapy"
value set. 

To represent Antithrombotic Therapy Not Administered, implementing systems reference the canonical of the "Antithrombotic
Therapy" value set using the [notDoneValueSet](StructureDefinition-cqf-notDoneValueSet.html) to indicate
providers did not administer any of the medications in the "Antithrombotic Therapy" value set. By referencing the value
set URI to negate the entire value set rather than reporting a specific member code from the value set, clinicians are
not forced to arbitrarily select a specific medication from the "Antithrombotic Therapy" value set that they
did not administer in order to negate.

### Attribute Names
{: #attribute-names}

All attributes referenced in the CQL follow Conformance Requirement 4.15.

**Conformance Requirement 4-15 (Attribute Names):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-15)
{: #conformance-requirement-4-15}

1. Data model attributes referenced in the CQL:<br/>
      a. **SHOULD NOT** use quoted identifiers (unless required due to the attribute name in the model not being a valid identifier in CQL)<br/>
      b. **SHOULD** use camelCase (unless dictated by the attribute naming in the model being used)

Examples of attributes conforming to Conformance Requirement 4.15 are given below. For a full list of valid of attributes, refer to an appropriate data model specification such as QI-Core.

```cql
period
authoredOn
result
```

### Aliases and Argument Names
{: #aliases-and-argument-names}

Aliases are used in CQL to reference items within the scope of a query. When defining a function, argument names
are used to create scoped identifiers that refer to the function inputs. Both aliases and argument names conform to
Conformance Requirement 4.16.

**Conformance Requirement 4.16 (Aliases and Argument Names):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-16)
{: #conformance-requirement-4-16}

1. Aliases and argument names referenced in the CQL:<br/>
      a. **SHALL NOT** Use quoted identifiers<br/>
      b. **SHALL** Use PascalCase<br/>
      c. **SHOULD** Use descriptive names (rather than abbreviations)

For example:

```cql
define "Encounters During Measurement Period":
    "Valid Encounters" QualifyingEncounter
        where QualifyingEncounter.period during "Measurement Period"

define function "ED Stay Time"(Encounter "Encounter"):
    duration in minutes of Encounter.period
```

### Library Resources
{: #library-resources}

In addition to the use of CQL directly in expression-valued elements, CQL content used within knowledge artifacts can be included through the use of a Library resource. These libraries can then be referenced from FHIR resources such as PlanDefinition and Measure using the `library` element (as well as the `cqf-library` extension for resources that do not declare a `library` element). The content of the CQL library is included using the `content` element of the Library.

**Conformance Requirement 4.17 (Library Resources):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-17)
{: #conformance-requirement-4-17}

1. Content conforming to this implementation guide **SHALL** use at least the [CRMIShareableLibrary](StructureDefinition-crmi-shareablelibrary.html) profile for Library resources.

#### Library Name and URL
{: #library-name-and-url}

**Conformance Requirement 4.18 (Library Name and URL):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-18)
{: #conformance-requirement-4-18}

1. The identifying elements of a library **SHALL** conform to the following requirements:
* Library.url **SHALL** be `<CQL namespace url>/Library/<CQL library name>`
* Library.name **SHALL** be `<CQL library name>`
* Library.version **SHALL** be `<CQL library version>`

2. For libraries included in FHIR implementation guides, the CQL namespace is defined by the implementation guide as follows:
* CQL namespace name **SHALL** be IG.packageId
* CQL namespace url **SHALL** be IG.canonicalBase

3. CQL library source files **SHOULD** be named `<CQLLibraryName>.cql`
4. To avoid issues with characters between web ids and names, library names **SHALL NOT** have underscores.

The prohibition against underscores in CQL library names is required to ensure compliance with the canonical URL pattern (because URLs by convention should not use underscores). In addition, many publishing environments will use the canonical tail (i.e. the name of the library) as the logical id of the Library resource, which does not allow underscores per the FHIR specification.

#### FHIR Type Mapping
{: #fhir-type-mapping}

**Conformance Requirement 4.19 (FHIR Type Mapping):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-19)
{: #conformance-requirement-4-19}

1. CQL defined types **SHALL** map to types in FHIR according to the following mapping:

|CQL System Type |FHIR Type |
|---|---|
|`System.Boolean`|`FHIR.boolean`|
|`System.Integer`|`FHIR.integer`|
|`System.Decimal`|`FHIR.decimal`|
|`System.Date`|`FHIR.date`|
|`System.DateTime`|`FHIR.dateTime`|
|`System.Long`|`FHIR.integer64`|
|`System.Time`|`FHIR.time`|
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
* List types **SHALL** be lists of element types that map to FHIR
* Tuple types **SHALL** consist only of elements of types that map to FHIR

#### Parameters and Data Requirements
{: #parameters-and-data-requirements}

**Conformance Requirement 4.20 (FHIR Type Mapping):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-20)
{: #conformance-requirement-4-20}

1. Parameters to CQL libraries **SHALL** be either CQL-defined types that map to FHIR types, or FHIR resource types, optionally with profile designations.
2. Top level expressions in CQL libraries **SHALL** return either CQL-defined types that map to FHIR types, or FHIR resources types, optionally with profile designations
3. Tuple types are represented with Parameters that have `part` elements corresponding to the elements of the tuple. List types are represented with Parameters that have a cardinality of 0..*.
4. Libraries used in computable guideline content **SHALL** use the `parameter` element to identify input parameters as well as the type of all top-level expressions as output parameters.
5. Libraries used in computable guideline content **SHALL** use the `dataRequirement` element to identify any retrieves present in the CQL:

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

> Note that best-practice for CQL evaluation is to make use of and distribute compiled CQL (ELM). In the case that dynamic CQL construction is required, implementers should take care to sanitize inputs from any parameters used in the construction of dynamic CQL to avoid [injection attacks](https://en.wikipedia.org/wiki/SQL_injection).

#### RelatedArtifacts
{: #relatedartifacts}

**Conformance Requirement 4.21 (Related Artifacts):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-21)
{: #conformance-requirement-4-21}

1. Libraries used in computable artifacts **SHALL** use the `relatedArtifact` element to identify includes, code systems, value sets, and data models used by the CQL library:

|Dependency|RelatedArtifact representation|
|Data Model (using declaration)|`depends-on` with `url` of the ModelInfo Library (e.g. `http://hl7.org/fhir/Library/FHIR-ModelInfo|4.0.1`)|
|Library (include declaration)|`depends-on` with `url` of the Library (e.g. `http://hl7.org/fhir/Library/FHIRHelpers|4.0.1`)|
|Code System|`depends-on` with `url` of the CodeSystem (e.g. `http://loing.org`)|
|Value Set|`depends-on` with `url` of the ValueSet (e.g. `http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1116.89`)|
{: .grid }

#### MIME Type version
The version of CQL/ELM used for content in a library **SHOULD** be specified using the version parameter of the text/cql and application/elm+xml, application/elm+json media types.

* `text/cql; version=1.5`
* `application/elm+xml; version=1.5`
* `application/elm+json; version=1.5`

Resource narratives for Libraries and knowledge artifacts that use CQL **SHOULD** include the CQL version if it is specified in the MIME type as shown above.

### Use of Terminologies
{: #use-of-terminologies}

FHIR supports various types of terminology-valued elements, including:

* [code](http://hl7.org/fhir/datatypes.html#code)<br/>
* [Coding](http://hl7.org/fhir/datatypes.html#Coding)<br/>
* [CodeableConcept](http://hl7.org/fhir/datatypes.html#CodeableConcept)<br/>

These types map to the following CQL primitive types, respectively:

* [String](https://cql.hl7.org/09-b-cqlreference.html#string-1)<br/>
* [Code](https://cql.hl7.org/09-b-cqlreference.html#code-1)<br/>
* [Concept](https://cql.hl7.org/09-b-cqlreference.html#concept-1)<br/>

In addition to the type of element, FHIR provides the ability to bind these elements to specific codes, in the form of a direct-reference code (fixed constraint to a specific code in a [CodeSystem](http://hl7.org/fhir/codesystem.html)), or a binding to a [ValueSet](http://hl7.org/fhir/valueset.html). These bindings can be different [binding strengths](http://hl7.org/fhir/codesystem-binding-strength.html)

Within CQL, references to terminology code systems, value sets, codes, and concepts are directly supported, and all such usages are declared within CQL libraries, as described in the  [Terminology](https://cql.hl7.org/02-authorsguide.html#terminology) section of the CQL Author's Guide.

When referencing terminology-valued elements within CQL, the following comparison operations are supported:

* [Equal (`=`)](https://cql.hl7.org/09-b-cqlreference.html#equal-3)<br/>
* [Equivalent (`~`)](https://cql.hl7.org/09-b-cqlreference.html#equivalent-3)<br/>
* [In (`in`)](https://cql.hl7.org/09-b-cqlreference.html#in-valueset)<br/>

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

### Translation to ELM
{: #translation-to-elm}

Tooling exists to support translation of CQL to ELM for distribution in XML or JSON formats. These distributions can be
included with knowledge artifacts to facilitate implementation. [The existing translator tooling](https://github.com/cqframework/clinical_quality_language/blob/master/Src/java/cql-to-elm/OVERVIEW.md) applies to both measure and decision
support development, and has several options available to make use of different data models in different environments.
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

#### Specifying Options

The FHIR specification defines the [cqlOptions](http://hl7.org/fhir/extensions/StructureDefinition-cqf-cqlOptions.html) extension to support defining the expected translator options used with a given Library, or set of Libraries. When this extension is not used, the recommended options above **SHOULD** be used. When this extension is present on a [CRMIComputableLibrary](StructureDefinition-crmi-computablelibrary.html), it **SHALL** be used to provide options to the translator when translating CQL for that library. When this extension is present on a [CRMIManifestLibrary](StructureDefinition-crmi-manifestlibrary.html), it **SHALL** be used to provide options to the translator unless the options are provided directly by the library.

**Conformance Requirement 4.22 (Translator Options):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-22)
{: #conformance-requirement-4-22}

1. Translator options **SHOULD** be provided in either a CRMIComputableLibrary or a CRMIVersionManifest
2. Translator options specified in a CRMIComputableLibrary take precedence over options defined in a CRMIVersionManifest
3. If no translator options are provided, the recommended options above **SHOULD** be used
4. If translator options are provided in a Library that is both computable and executable, the options **SHALL** be consistent with the translator options reported by the ELM content

The `cqlOptions` extension references a contained `Parameters` resource that contains a parameter for each option specified, as well as a `translatorVersion` parameter that indicates the version of the translator used to produce the ELM. For example:

```json
{
  "resourceType": "Library",
  "id": "FHIRCommon",
  "meta": {
    "profile": [ "http://hl7.org/fhir/uv/crmi/StructureDefinition/crmi-computablelibrary" ]
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
      "valueString": "None"
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

Because certain translator options impact language features and functionality, translated ELM may not be suitable for use in all contexts if the options used to produce the ELM are inconsistent with the options in use in the evaluating environment. To determine suitability of ELM for use in a given environment, the following guidance **SHOULD** be followed:

**Conformance Requirement 4.23 (ELM Suitability):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-23)
{: #conformance-requirement-4-23}

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

### ModelInfo
{: #modelinfo}

When using CQL with FHIR, FHIR StructureDefinition resources are used to create the ModelInfo that describes the types for use in CQL, according to the following rules:

1. For each StructureDefinition, if the kind is `primitive-type`, `complex-type` (except for types based on Extension), or `resource` (with no derivation or a derivation of `specialization`), a ClassInfo with the same name as the structure definition is created
    1. For each element:
        1. If the element is not a backbone element, a corresponding element with the name and type is added to the ClassInfo. If the maximum cardinality of the element is not "1", the element is created as a list type.
        2. If the element is a backbone element, a new ClassInfo is created with the child elements of the backbone element and a new element is added to the containing ClassInfo with the type of the ClassInfo. Note that this process is recursive and so may result in multiple levels of nested class creation. As such the name of the ClassInfo must include the name of all the parent classes as qualifiers in order to ensure uniqueness. This approach also supports the ability of FHIR elements to reference other element definitions, though a post-processing fixup step is typically needed to resolve these references.

If this process is run against the StructureDefinitions from the base FHIR specification, it produces a complete representation of all the FHIR Resources as classes in the ModelInfo. However, because FHIR primitive types actually have elements (e.g. `value`, `id`, and `extension`), this process produces classes in the ModelInfo for each of the FHIR primitive types, and only the `value` elements of these FHIR primitives are typed with the actual CQL primitive types. This means that to access the actual values of FHIR elements for comparison against CQL primitive values, the `.value` path must be used:

```cql
Patient.gender.value = 'female'
```

To facilitate comparison by authors, these primitives can be implicitly converted to CQL primitive types, and the FHIRHelpers library (typically generated alongside the ModelInfo) defines these implicit conversions. See the [CQF Common](http://fhir.org/guides/cqf/common) implementation guide for a complete FHIR ModelInfo as well as FHIRHelpers library representing the FHIR specification.

#### ModelInfo Libraries

Similar to CQL content, ModelInfo can be included in FHIR Library resources to facilitate distribution.

**Conformance Requirement 4.24 (ModelInfo Libraries):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-23)
{: #conformance-requirement-4-24}

1. Libraries used to packgae ModelInfo **SHALL** conform to the [CRMIModelInfoLibrary](StructureDefinition-crmi-modelinfo.html) profile

#### Profile-informed ModelInfo

The process for producing ModelInfo from FHIR StructureDefinitions csn also be applied to FHIR profile definitions, allowing for ModelInfos that reflect profile definitions, using the following refinements:

1. Each profile results in a new ClassInfo in the ModelInfo, derived from the ClassInfo for the baseDefinition of the profile
1. FHIR Primitive types are mapped to CQL types according to the above FHIR Type Mapping section
2. Extensions and slices defined in profiles are represented as first-class elements in the ClassInfo

#### ModelInfo Settings

In addition, to support more fine-grained control over the process of producing ModelInfo from FHIR StructureDefinitions, this implementation guide defines several ModelInfo-related extensions:

* cqf-modelInfo-isIncluded - Determines whether to create a ClassInfo for the profile or extension on which it appears
* cqf-modelInfo-isRetrievable - Determines whether the ClassInfo for the profile on which it appears is marked retrievable (i.e. can appear as the target type of a Retrieve in CQL)
* cqf-modelInfo-label - Specifies an author-friendly title for the ClassInfo (i.e. an alternate name by which the type can be referenced in CQL type specifiers)
* cqf-modelInfo-primaryCodePath - Specifies the primary code path for the ClassInfo produced from the profile on which it appears (i.e. the default path for terminology-valued filters when the type is used in a Retrieve in CQL)
* cqf-modelInfoSettings - Specifies additional settings used to produce the ModelInfo for profiles and extensions defined in the Implementation Guide on which it appears



---

File: repos/HL7_SLASH_crmi-ig/input/fsh/artifact-profiles/_shared.fsh

RuleSet: StandardsMetadata(fmm)
* ^extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm"
* ^extension[=].valueInteger = {fmm}
* ^extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[=].valueCode = #cds
* ^extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* ^extension[=].valueCode = #trial-use

---

File: repos/HL7_SLASH_crmi-ig/input/fsh/artifact-profiles/group-definition.fsh

Invariant: gdf-1
Description: "Group definition must have either an expression or characteristics, but not both"
Severity: #error
Expression: "extension('http://hl7.org/fhir/StructureDefinition/cqf-expression').exists() xor characteristic.exists()"
XPath: "exists(f:extension)"

Invariant: gdf-2
Description: "Reference must be to a structure definition"
Severity: #error
Expression: "resolve().conformsTo('http://hl7.org/fhir/StructureDefinition/StructureDefinition')"

Profile: CRMIGroupDefinition
Parent: Group
Id: crmi-groupdefinition
Title: "CRMI GroupDefinition"
Description: "Represents the definition of a group of subjects, suitable for use in various contexts, such as a cohort definition, a recommendation inclusion or exclusion criteria, the members of a study, or a population criteria"
* insert StandardsMetadata(3)
* obeys gdf-1
* . ^mustSupport = false
* extension contains
    $cqf-library named library 0..1 MS and
    $cqf-expression named expression 0..1 MS
* identifier MS
* active MS
* type only code
* type = #person (exactly)
* type MS
* actual only boolean
* actual = false (exactly)
* actual MS
* code MS
* name 1..1 MS
* characteristic MS
* member
  * entity
    * extension contains ArtifactReference named profile 0..1 MS
    * extension[ArtifactReference].value[x] only canonical
    * extension[profile].valueCanonical obeys gdf-2
* managingEntity
  * extension contains ArtifactReference named profile 0..1 MS
  * extension[ArtifactReference].value[x] only canonical

---

File: repos/HL7_SLASH_crmi-ig/input/fsh/artifact-profiles/medication-definition.fsh

Profile: CRMIMedicationDefinition
Parent: Medication
Id: crmi-medicationdefinition
Title: "CRMI MedicationDefinition"
Description: "Represents the definition of a medication, suitable for use in various contexts"
* insert StandardsMetadata(1)
* extension contains 
  $artifact-url named artifactUrl 0..1 MS and 
  $artifact-version named artifactVersion 0..1 MS
* identifier MS
* code MS
* ingredient MS
* ingredient
  * item[x] MS
  * itemReference 
    * extension contains ArtifactReference named artifactReference 0..1 MS
    * extension[ArtifactReference].value[x] only uri

---

File: repos/HL7_SLASH_crmi-ig/input/fsh/artifact-profiles/medication-knowledge-definition.fsh

Profile: CRMIMedicationKnowledgeDefinition
Parent: MedicationKnowledge
Id: crmi-medicationknowledgedefinition
Title: "CRMI MedicationKnowledge Definition"
Description: "Represents the definition of medication knowledge, suitable for use in various contexts"
* insert StandardsMetadata(1)
* extension contains 
  $artifact-url named artifactUrl 0..1 MS and 
  $artifact-version named artifactVersion 0..1 MS
* code MS
* relatedMedicationKnowledge
  * reference
    * extension contains ArtifactReference named artifactReference 0..1 MS
    * extension[ArtifactReference].value[x] only uri
* associatedMedication
  * extension contains ArtifactReference named artifactReference 0..1 MS
  * extension[ArtifactReference].value[x] only uri
* ingredient
  * itemReference
    * extension contains ArtifactReference named artifactReference 0..1 MS
    * extension[ArtifactReference].value[x] only uri

---

File: repos/HL7_SLASH_crmi-ig/input/fsh/artifact-profiles/sharable-activitydefinition.fsh

Profile: CRMIShareableActivityDefinition
Parent: ActivityDefinition
Id: crmi-shareableactivitydefinition
Title: "CRMI Shareable ActivityDefinition"
Description: "Enforces the minimum information set for the activity definition metadata required by HL7 and other organizations that share and publish activity definitions"
* insert StandardsMetadata(4)
* extension contains
    $cqf-knowledgeCapability named knowledgeCapability 0..* MS and
    //$cqf-knowledgeRepresentationLevel named knowledgeRepresentationLevel 0..* MS and
    ArtifactComment named artifactComment 0..* MS and 
    ArtifactVersionAlgorithm named versionAlgorithm 0..1 MS and
    ArtifactVersionPolicy named versionPolicy 0..1 MS
* url 1..1 MS
* version 1..1 MS
* name MS
* title 1..1 MS
* status MS
* experimental 1..1 MS
* publisher MS
* description 1..1 MS
* productReference
  * extension contains ArtifactReference named artifactReference 0..1 MS
  * extension[ArtifactReference].value[x] only uri

---

File: repos/HL7_SLASH_crmi-ig/input/fsh/artifact-profiles/substance-definition.fsh

Profile: CRMISubstanceDefinition
Parent: Substance
Id: crmi-substancedefinition
Title: "CRMI SubstanceDefinition"
Description: "Represents the definition of a substance, suitable for use in various contexts"
* insert StandardsMetadata(1)
* extension contains 
  $artifact-url named artifactUrl 0..1 MS and 
  $artifact-version named artifactVersion 0..1 MS
* identifier MS
* code MS
* ingredient MS
* ingredient
  * substance[x] MS
  * substanceReference
    * extension contains ArtifactReference named artifactReference 0..1 MS
    * extension[ArtifactReference].value[x] only uri

---

File: repos/HL7_SLASH_crmi-ig/input/fsh/operation-definitions/approve-operation.fsh

Instance: crmi-approve
InstanceOf: OperationDefinition
Title: "CRMI Approve Operation"
Usage: #definition
* insert DefinitionMetadata
* url = "http://hl7.org/fhir/uv/crmi/OperationDefinition/crmi-approve"
* name = "CRMIApprove"
* title = "CRMI Approve"
* description = "The approve operation supports applying an approval to an existing artifact, regardless of status. The operation sets the _date_ and _approvalDate_ elements of the approved artifact, and is otherwise only allowed to create ArtifactAssessment (Basic or cqf-artifactComment extensions in R4) resources in the repository."
* kind = #operation
* code = #approve
* comment = "The approve operation supports the ability of a repository to record commentary on a specific state of an artifact in an ArtifactAssessment (Basic or cqf-artifactComment extension in R4) resource by applying an approval. The artifact assessments which are added by the operation must reference a version of the artifact."
* resource[+] = #ActivityDefinition
* resource[+] = #CapabilityStatement
* resource[+] = #CodeSystem
* resource[+] = #CompartmentDefinition
* resource[+] = #ConceptMap
* resource[+] = #ExampleScenario
* resource[+] = #GraphDefinition
* resource[+] = #ImplementationGuide
* resource[+] = #Library
* resource[+] = #Measure
* resource[+] = #Medication
* resource[+] = #MedicationKnowledge
* resource[+] = #MessageDefinition
* resource[+] = #NamingSystem
* resource[+] = #OperationDefinition
* resource[+] = #PlanDefinition
* resource[+] = #Questionnaire
* resource[+] = #SearchParameter
* resource[+] = #StructureDefinition
* resource[+] = #StructureMap
* resource[+] = #Substance
* resource[+] = #TerminologyCapabilities
* resource[+] = #TestScript
* resource[+] = #ValueSet
* system = false
* type = true
* instance = true
* parameter[0].name = #id
* parameter[=].use = #in
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "The logical id of the artifact to approved. The server must know the artifact (e.g. it is defined explicitly in the server's artifacts)"
* parameter[=].type = #string
* parameter[+].name = #approvalDate
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "The date on which the artifact was approved. If one is not provided the system date will be used."
* parameter[=].type = #date
* parameter[+].name = #artifactAssessmentType
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "If a comment is submitted as part of the approval, this parameter denotes the type of artifact comment."
* parameter[=].type = #code
* parameter[+].name = #artifactAssessmentSummary
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "The body of the comment."
* parameter[=].type = #string
* parameter[+].name = #artifactAssessmentTarget
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "The canonical url for the artifact being approved. The format is: [system]|[version] - e.g. http://loinc.org|2.56"
* parameter[=].type = #canonical
* parameter[+].name = #artifactAssessmentRelatedArtifact
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "Optional supporting canonical URL / Reference for the comment."
* parameter[=].type = #uri
* parameter[+].name = #artifactAssessmentAuthor
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "A Reference to a resource containing information about the entity applying the approval."
* parameter[=].type = #Reference
* parameter[+].name = #return
* parameter[=].use = #out
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "The Bundle result containing both the updated artifact and the ArtifactAssessment (Basic in R4) resource containing the Approval metadata"
* parameter[=].type = #Bundle

---

File: repos/HL7_SLASH_crmi-ig/input/fsh/operation-definitions/artifact-diff-operation.fsh

Instance: crmi-artifact-diff
InstanceOf: OperationDefinition
Title: "CRMI Artifact Diff Operation"
Usage: #definition
* insert DefinitionMetadata
* name = "CRMIArtifactDiff"
* title = "CRMI Artifact Diff"
* system = true
* type = false
* instance = false
* description = """
Describes the differences between two knowledge artifacts in [FHIR Patch format](https://www.hl7.org/fhir/fhirpatch.html) by recursively resolving dependencies to get a holistic diff.
"""
* comment = """
The operation is only valid between two resources of the same type and can optionally include expanding all ValueSets in the dependency tree.
"""
* kind = #operation
* code = #artifact-diff
* resource[+] = #ActivityDefinition
* resource[+] = #CapabilityStatement
* resource[+] = #CodeSystem
* resource[+] = #CompartmentDefinition
* resource[+] = #ConceptMap
* resource[+] = #ExampleScenario
* resource[+] = #GraphDefinition
* resource[+] = #ImplementationGuide
* resource[+] = #Library
* resource[+] = #Measure
* resource[+] = #Medication
* resource[+] = #MedicationKnowledge
* resource[+] = #MessageDefinition
* resource[+] = #NamingSystem
* resource[+] = #OperationDefinition
* resource[+] = #PlanDefinition
* resource[+] = #Questionnaire
* resource[+] = #SearchParameter
* resource[+] = #StructureDefinition
* resource[+] = #StructureMap
* resource[+] = #Substance
* resource[+] = #TerminologyCapabilities
* resource[+] = #TestScript
* resource[+] = #ValueSet

* parameter[+]
  * name = #source
  * min = 0
  * max = "1"
  * use = #in
  * type = #canonical
  * documentation = "The canonical reference of the source artifact to compare against"

* parameter[+]
  * name = #target
  * min = 1
  * max = "1"
  * use = #in
  * type = #canonical
  * documentation = "A canonical reference of the target artifact which is being compared."

* parameter[+]
  * name = #compareComputable
  * min = 0
  * max = "1"
  * use = #in
  * type = #boolean
  * documentation = "Whether or not to compare computable content such as ValueSet.compose.include entries."

* parameter[+]
  * name = #compareExecutable
  * min = 0
  * max = "1"
  * use = #in
  * type = #boolean
  * documentation = "Whether or not to compare executable content such as ValueSet.expansion.contains entries."

// Output parameter
* parameter[+]
  * name = #return
  * min = 1 
  * max = "1"
  * use = #out
  * type = #Parameters
  * documentation = """
  The differential in [FHIR Patch format](https://www.hl7.org/fhir/fhirpatch.html).
  """

---

File: repos/HL7_SLASH_crmi-ig/input/fsh/operation-definitions/clone-operation.fsh

Instance: crmi-clone
InstanceOf: OperationDefinition
Title: "CRMI Clone Operation"
Usage: #definition
* insert DefinitionMetadata
* url = "http://hl7.org/fhir/uv/crmi/OperationDefinition/crmi-clone"
* name = "CRMIClone"
* title = "CRMI Clone"
* description = "Creates a clone version of a knowledge artifact, as well as for all resources it is composed of."
* kind = #operation
* code = #clone
* comment = "This operation is used to set the status and version. It also removes effectivePeriod, approvalDate and any extensions which are only valid for active artifacts."
* resource[+] = #ActivityDefinition
* resource[+] = #CapabilityStatement
* resource[+] = #CodeSystem
* resource[+] = #CompartmentDefinition
* resource[+] = #ConceptMap
* resource[+] = #ExampleScenario
* resource[+] = #GraphDefinition
* resource[+] = #ImplementationGuide
* resource[+] = #Library
* resource[+] = #Measure
* resource[+] = #Medication
* resource[+] = #MedicationKnowledge
* resource[+] = #MessageDefinition
* resource[+] = #NamingSystem
* resource[+] = #OperationDefinition
* resource[+] = #PlanDefinition
* resource[+] = #Questionnaire
* resource[+] = #SearchParameter
* resource[+] = #StructureDefinition
* resource[+] = #StructureMap
* resource[+] = #Substance
* resource[+] = #TerminologyCapabilities
* resource[+] = #TestScript
* resource[+] = #ValueSet
* system = false
* type = true
* instance = true
* parameter[0].name = #id
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "The logical id of the artifact to clone. The server must know the artifact (e.g. it is defined explicitly in the server's resources)"
* parameter[=].type = #string
* parameter[+].name = #version
* parameter[=].use = #in
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "A semantic version in the form MAJOR.MINOR.PATCH.REVISION"
* parameter[=].type = #string
* parameter[+].name = #return
* parameter[=].use = #out
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "The Bundle result containing the new resource(s)"
* parameter[=].type = #Bundle

---

File: repos/HL7_SLASH_crmi-ig/input/fsh/operation-definitions/data-requirements-operation-example.fsh

Instance: crmi-profiled-operation-example
InstanceOf: OperationDefinition
Title: "CRMI Profiled Operation Example"
Usage: #definition
* insert DefinitionMetadata
* insert ArtifactOperationProfile
* insert ArtifactVersionBindableOperationProfile
* insert ArtifactEndpointConfigurableOperationProfile
* insert ManifestableOperationProfile
* name = "CRMIDataRequirements"
* title = "CRMI Data Requirements"
* description = """
This operation definition is a copy of the CRMI Data Requirements operation but declaring conformance to the CRMI Artifact, Artifact Version Bindable, Artifact Endpoint Configurable, and Manifestable operation profiles.
"""
* comment = """
The data requirements operation is used for dependency gathering, as a way to understand 
the set of dependencies of a given artifact, as well as for data requirements determination, 
as a way to understand the complete set of data requirements for a given artifact, including 
terminology usage (code systems, value sets, and direct-reference codes), parameters, dependencies,
and data requirements.
"""
* kind = #operation
* code = #data-requirements

* resource[+] = #ActivityDefinition
* resource[+] = #CapabilityStatement
* resource[+] = #CodeSystem
* resource[+] = #CompartmentDefinition
* resource[+] = #ConceptMap
* resource[+] = #ExampleScenario
* resource[+] = #GraphDefinition
* resource[+] = #ImplementationGuide
* resource[+] = #Library
* resource[+] = #Measure
* resource[+] = #Medication
* resource[+] = #MedicationKnowledge
* resource[+] = #MessageDefinition
* resource[+] = #NamingSystem
* resource[+] = #OperationDefinition
* resource[+] = #PlanDefinition
* resource[+] = #Questionnaire
* resource[+] = #SearchParameter
* resource[+] = #StructureDefinition
* resource[+] = #StructureMap
* resource[+] = #Substance
* resource[+] = #TerminologyCapabilities
* resource[+] = #TestScript
* resource[+] = #ValueSet
* system = false
* type = true
* instance = true

* parameter[+].name = #id
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = """
The logical id of the canonical or artifact resource to analyze.
"""
* parameter[=].type = #string

* parameter[+].name = #url
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = """
A canonical or artifact reference to a canonical resource.
"""
* parameter[=].type = #uri

* parameter[+].name = #version
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = """
The version of the canonical or artifact resource to analyze
"""
* parameter[=].type = #string

* parameter[+].name = #identifier
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = """
A business identifier of the canonical or artifact resource to be analyzed.
"""
* parameter[=].type = #string
* parameter[=].searchType = #token

* parameter[+].name = #expression
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].documentation = """
The name of a specific expression to be considered for analysis. If no
expressions are specified, the analysis is performed on the entire resource. If
expressions are specified, the analysis is performed only on the expressions
specified.
"""
* parameter[=].type = #string

* parameter[+].name = #parameters
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = """
Any input parameters for the artifact. If the artifact is a logic library, 
or references logic libraries, parameters defined in this input will be
bound by name to parameters defined in the logic library (or referenced
libraries). If the logic library is a CQL library, parameter types are 
mapped to CQL as specified in the Using CQL with FHIR implementation guide. 
If a parameter appears more than once in the input Parameters resource, 
it is represented with a List in the input CQL. If a parameter has parts, 
it is represented as a Tuple in the input CQL.
"""
* parameter[=].type = #Parameters

* parameter[+].name = #artifactVersion
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].documentation = """
Specifies a version to use for a canonical or artifact resource if the artifact referencing 
the resource does not already specify a version. The format is the same as a canonical URL:
[url]|[version] - e.g. http://loinc.org|2.56 

Note that this is a generalization of the `system-version` parameter to the $expand operation 
to apply to any canonical resource, including code systems.
"""
* parameter[=].type = #uri

* parameter[+].name = #checkArtifactVersion
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].documentation = """
Edge Case: Specifies a version to use for a canonical or artifact resource. If the artifact referencing 
the resource specifies a different version, an error is returned instead of the package. The
format is the same as a canonical URL: [url]|[version] - e.g. http://loinc.org|2.56 

Note that this is a generalization of the `check-system-version` parameter to the $expand operation to 
apply to any canonical resource, including code systems.
"""
* parameter[=].type = #uri

* parameter[+].name = #forceArtifactVersion
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].documentation = """
Edge Case: Specifies a version to use for a canonical or artifact resource. This parameter overrides any
specified version in the artifact (and any artifacts it depends on). The
format is the same as a canonical URL: [system]|[version] - e.g.
http://loinc.org|2.56. Note that this has obvious safety issues, in that it may
result in a value set expansion giving a different list of codes that is both
wrong and unsafe, and implementers should only use this capability reluctantly.

It primarily exists to deal with situations where specifications have fallen
into decay as time passes. If the version of a canonical is overridden, the version used SHALL
explicitly be represented in the expansion parameters. 

Note that this is a generalization of the `force-system-version` parameter to the $expand operation 
to apply to any canonical resource, including code systems.
"""
* parameter[=].type = #uri

* parameter[+].name = #manifest
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = """
Specifies an asset-collection library that defines version bindings for code
systems and other canonical resources referenced by the value set(s) being expanded
and other canonical resources referenced by the artifact. When specified, code
systems and other canonical resources identified as `depends-on` related artifacts 
in the manifest library have the same meaning as specifying that code system or other
canonical version in the `system-version` parameter of an expand or the `canonicalVersion` 
parameter.
"""
* parameter[=].type = #canonical
* parameter[=].targetProfile = Canonical(http://hl7.org/fhir/uv/crmi/StructureDefinition/crmi-manifestlibrary)

* parameter[+]
  * name = #include
  * min = 0
  * max = "*"
  * use = #in
  * type = #string
  * documentation = """
Specifies what contents should be included in the resulting package. The codes indicate which types of resources should be included, but note that
the set of possible resources is determined as all known (i.e. present on the server) dependencies and related artifacts. Possible
values are:
* all (default) - all resource types
* artifact - the specified artifact
* canonical - canonical resources (i.e. resources with a defined url element or that can be canonical resources using the artifact-url extension)
* terminology - terminology resources (i.e. CodeSystem, ValueSet, NamingSystem, ConceptMap)
* conformance - conformance resources (i.e. StructureDefinition, StructureMap, SearchParameter, CompartmentDefinition)
* profiles - profile definitions (i.e. StructureDefinition resources that define profiles)
* extensions - extension definitions (i.e. StructureDefinition resources that define extensions) 
* knowledge - knowledge artifacts (i.e. ActivityDefinition, Library, PlanDefinition, Measure, Questionnaire)
* tests - test cases and data (i.e. test cases as defined by the testing specification in this implementation guide)
* examples - example resources (i.e. resources identified as examples in the implementation guide)
"""

* parameter[+]
  * name = #artifactEndpointConfiguration
  * documentation = """
Configuration information to resolve canonical artifacts
* `artifactRoute`: An optional route used to determine whether this endpoint is expected to be able to resolve artifacts that match the route (i.e. start with the route, up to and including the entire url)
* `endpointUri`: The URI of the endpoint, exclusive with the `endpoint` parameter
* `endpoint`: An Endpoint resource describing the endpoint, exclusive with the `endpointUri` parameter

**Processing semantics**:

Create a canonical-like reference (e.g.
`{canonical.url}|{canonical.version}` or similar extensions for non-canonical artifacts).

* Given a single `artifactEndpointConfiguration`
  * When `artifactRoute` is present
    * And `artifactRoute` *starts with* canonical or artifact reference
    * Then attempt to resolve with `endpointUri` or `endpoint`
  * When `artifactRoute` is not present
    * Then attempt to resolve with `endpointUri` or `endpoint`
* Given multiple `artifactEndpointConfiguration`s
  * Then rank order each configuration (see below)
  * And attempt to resolve with `endpointUri` or `endpoint` in order until resolved

Rank each `artifactEndpointConfiguration` such that:
* if `artifactRoute` is present *and* `artifactRoute` *starts with* canonical or artifact reference: rank based on number of matching characters 
* if `artifactRoute` is *not* present: include but rank lower

NOTE: For evenly ranked `artifactEndpointConfiguration`s, order as defined in the
OperationDefinition.
"""
  * min = 0
  * max = "*"
  * use = #in
  
  * part[+]
    * name = #artifactRoute
    * min = 0
    * max = "1"
    * type = #uri
    * use = #in
  
  * part[+]
    * name = #endpointUri
    * min = 0
    * max = "1"
    * type = #uri
    * use = #in

  * part[+]
    * name = #endpoint
    * min = 0
    * max = "1"
    * type = #Endpoint
    * use = #in

* parameter[+]
  * name = #terminologyEndpoint
  * min = 0
  * max = "1"
  * use = #in
  * type = #Endpoint
  * documentation = """
An endpoint to use to access terminology (i.e. valuesets, codesystems, naming systems, concept maps, and
membership testing) referenced by the Resource. If no terminology endpoint is
supplied, the evaluation will attempt to use the server on which the operation
is being performed as the terminology server.
"""

* parameter[+].name = #return
* parameter[=].use = #out
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = """
The result of the requirements operation is a _module-definition_ Library that
returns the computed effective requirements of the artifact.
"""
* parameter[=].type = #Library

---

File: repos/HL7_SLASH_crmi-ig/input/fsh/operation-definitions/data-requirements-operation.fsh

Instance: crmi-data-requirements
InstanceOf: OperationDefinition
Title: "CRMI Data Requirements Operation"
Usage: #definition
* insert DefinitionMetadata
* name = "CRMIDataRequirements"
* title = "CRMI Data Requirements"
* status = #active
* description = """
Determines the effective data requirements for the artifact, including known
components and dependencies, and optionally informed by a version manifest.

See [$package and $data-requirements](distribution.html#package-and-data-requirements)
"""
* comment = """
The data requirements operation is used for dependency gathering, as a way to understand 
the set of dependencies of a given artifact, as well as for data requirements determination, 
as a way to understand the complete set of data requirements for a given artifact, including 
terminology usage (code systems, value sets, and direct-reference codes), parameters, dependencies,
and data requirements.
"""
* kind = #operation
* code = #data-requirements

* resource[+] = #ActivityDefinition
* resource[+] = #CapabilityStatement
* resource[+] = #CodeSystem
* resource[+] = #CompartmentDefinition
* resource[+] = #ConceptMap
* resource[+] = #ExampleScenario
* resource[+] = #GraphDefinition
* resource[+] = #ImplementationGuide
* resource[+] = #Library
* resource[+] = #Measure
* resource[+] = #Medication
* resource[+] = #MedicationKnowledge
* resource[+] = #MessageDefinition
* resource[+] = #NamingSystem
* resource[+] = #OperationDefinition
* resource[+] = #PlanDefinition
* resource[+] = #Questionnaire
* resource[+] = #SearchParameter
* resource[+] = #StructureDefinition
* resource[+] = #StructureMap
* resource[+] = #Substance
* resource[+] = #TerminologyCapabilities
* resource[+] = #TestScript
* resource[+] = #ValueSet
* system = false
* type = true
* instance = true

* parameter[+].name = #id
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = """
The logical id of the canonical or artifact resource to analyze.
"""
* parameter[=].type = #string

* parameter[+].name = #url
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = """
A canonical or artifact reference to a canonical resource.
"""
* parameter[=].type = #uri

* parameter[+].name = #version
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = """
The version of the canonical or artifact resource to analyze
"""
* parameter[=].type = #string

* parameter[+].name = #identifier
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = """
A business identifier of the canonical or artifact resource to be analyzed.
"""
* parameter[=].type = #string
* parameter[=].searchType = #token

* parameter[+].name = #expression
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].documentation = """
The name of a specific expression to be considered for analysis. If no
expressions are specified, the analysis is performed on the entire resource. If
expressions are specified, the analysis is performed only on the expressions
specified.
"""
* parameter[=].type = #string

* parameter[+].name = #parameters
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = """
Any input parameters for the artifact. If the artifact is a logic library, 
or references logic libraries, parameters defined in this input will be
bound by name to parameters defined in the logic library (or referenced
libraries). If the logic library is a CQL library, parameter types are 
mapped to CQL as specified in the Using CQL with FHIR implementation guide. 
If a parameter appears more than once in the input Parameters resource, 
it is represented with a List in the input CQL. If a parameter has parts, 
it is represented as a Tuple in the input CQL.
"""
* parameter[=].type = #Parameters

* parameter[+].name = #artifactVersion
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].documentation = """
Specifies a version to use for a canonical or artifact resource if the artifact referencing 
the resource does not already specify a version. The format is the same as a canonical URL:
[url]|[version] - e.g. http://loinc.org|2.56 

Note that this is a generalization of the `system-version` parameter to the $expand operation 
to apply to any canonical resource, including code systems.
"""
* parameter[=].type = #uri

* parameter[+].name = #checkArtifactVersion
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].documentation = """
Edge Case: Specifies a version to use for a canonical or artifact resource. If the artifact referencing 
the resource specifies a different version, an error is returned instead of the package. The
format is the same as a canonical URL: [url]|[version] - e.g. http://loinc.org|2.56 

Note that this is a generalization of the `check-system-version` parameter to the $expand operation to 
apply to any canonical resource, including code systems.
"""
* parameter[=].type = #uri

* parameter[+].name = #forceArtifactVersion
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].documentation = """
Edge Case: Specifies a version to use for a canonical or artifact resource. This parameter overrides any
specified version in the artifact (and any artifacts it depends on). The
format is the same as a canonical URL: [system]|[version] - e.g.
http://loinc.org|2.56. Note that this has obvious safety issues, in that it may
result in a value set expansion giving a different list of codes that is both
wrong and unsafe, and implementers should only use this capability reluctantly.

It primarily exists to deal with situations where specifications have fallen
into decay as time passes. If the version of a canonical is overridden, the version used SHALL
explicitly be represented in the expansion parameters. 

Note that this is a generalization of the `force-system-version` parameter to the $expand operation 
to apply to any canonical resource, including code systems.
"""
* parameter[=].type = #uri

* parameter[+].name = #manifest
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = """
Specifies an asset-collection library that defines version bindings for code
systems and other canonical resources referenced by the value set(s) being expanded
and other canonical resources referenced by the artifact. When specified, code
systems and other canonical resources identified as `depends-on` related artifacts 
in the manifest library have the same meaning as specifying that code system or other
canonical version in the `system-version` parameter of an expand or the `canonicalVersion` 
parameter.
"""
* parameter[=].type = #canonical
* parameter[=].targetProfile = Canonical(http://hl7.org/fhir/uv/crmi/StructureDefinition/crmi-manifestlibrary)

* parameter[+]
  * name = #artifactEndpointConfiguration
  * documentation = """
Configuration information to resolve canonical artifacts
* `artifactRoute`: An optional route used to determine whether this endpoint is expected to be able to resolve artifacts that match the route (i.e. start with the route, up to and including the entire url)
* `endpointUri`: The URI of the endpoint, exclusive with the `endpoint` parameter
* `endpoint`: An Endpoint resource describing the endpoint, exclusive with the `endpointUri` parameter

**Processing semantics**:

Create a canonical-like reference (e.g.
`{canonical.url}|{canonical.version}` or similar extensions for non-canonical artifacts).

* Given a single `artifactEndpointConfiguration`
  * When `artifactRoute` is present
    * And `artifactRoute` *starts with* canonical or artifact reference
    * Then attempt to resolve with `endpointUri` or `endpoint`
  * When `artifactRoute` is not present
    * Then attempt to resolve with `endpointUri` or `endpoint`
* Given multiple `artifactEndpointConfiguration`s
  * Then rank order each configuration (see below)
  * And attempt to resolve with `endpointUri` or `endpoint` in order until resolved

Rank each `artifactEndpointConfiguration` such that:
* if `artifactRoute` is present *and* `artifactRoute` *starts with* canonical or artifact reference: rank based on number of matching characters 
* if `artifactRoute` is *not* present: include but rank lower

NOTE: For evenly ranked `artifactEndpointConfiguration`s, order as defined in the
OperationDefinition.
"""
  * min = 0
  * max = "*"
  * use = #in
  
  * part[+]
    * name = #artifactRoute
    * min = 0
    * max = "1"
    * type = #uri
    * use = #in
  
  * part[+]
    * name = #endpointUri
    * min = 0
    * max = "1"
    * type = #uri
    * use = #in

  * part[+]
    * name = #endpoint
    * min = 0
    * max = "1"
    * type = #Endpoint
    * use = #in

* parameter[+]
  * name = #terminologyEndpoint
  * min = 0
  * max = "1"
  * use = #in
  * type = #Endpoint
  * documentation = """
An endpoint to use to access terminology (i.e. valuesets, codesystems, naming systems, concept maps, and
membership testing) referenced by the Resource. If no terminology endpoint is
supplied, the evaluation will attempt to use the server on which the operation
is being performed as the terminology server.
"""

* parameter[+].name = #return
* parameter[=].use = #out
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = """
The result of the requirements operation is a _module-definition_ Library that
returns the computed effective requirements of the artifact.
"""
* parameter[=].type = #Library

---

File: repos/HL7_SLASH_crmi-ig/input/fsh/operation-definitions/draft-operation.fsh

Instance: crmi-draft
InstanceOf: OperationDefinition
Title: "CRMI Draft Operation"
Usage: #definition
* insert DefinitionMetadata
* url = "http://hl7.org/fhir/uv/crmi/OperationDefinition/crmi-draft"
* name = "CRMIDraft"
* title = "CRMI Draft"
* description = "Creates a draft version of a knowledge artifact, as well as for all resources it is composed of."
* kind = #operation
* code = #draft
* comment = "This operation is used to set the status and version. It also removes effectivePeriod, approvalDate and any extensions which are only valid for active artifacts."
* resource[+] = #ActivityDefinition
* resource[+] = #CapabilityStatement
* resource[+] = #CodeSystem
* resource[+] = #CompartmentDefinition
* resource[+] = #ConceptMap
* resource[+] = #ExampleScenario
* resource[+] = #GraphDefinition
* resource[+] = #ImplementationGuide
* resource[+] = #Library
* resource[+] = #Measure
* resource[+] = #Medication
* resource[+] = #MedicationKnowledge
* resource[+] = #MessageDefinition
* resource[+] = #NamingSystem
* resource[+] = #OperationDefinition
* resource[+] = #PlanDefinition
* resource[+] = #Questionnaire
* resource[+] = #SearchParameter
* resource[+] = #StructureDefinition
* resource[+] = #StructureMap
* resource[+] = #Substance
* resource[+] = #TerminologyCapabilities
* resource[+] = #TestScript
* resource[+] = #ValueSet
* system = false
* type = true
* instance = true
* parameter[0].name = #id
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "The logical id of the artifact to draft. The server must know the artifact (e.g. it is defined explicitly in the server's resources)"
* parameter[=].type = #string
* parameter[+].name = #version
* parameter[=].use = #in
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "A semantic version in the form MAJOR.MINOR.PATCH.REVISION"
* parameter[=].type = #string
* parameter[+].name = #return
* parameter[=].use = #out
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "The Bundle result containing the new resource(s)"
* parameter[=].type = #Bundle

---

File: repos/HL7_SLASH_crmi-ig/input/fsh/operation-definitions/package-operation.fsh

Instance: crmi-package
InstanceOf: OperationDefinition
Title: "CRMI Package Operation"
Usage: #definition
* insert DefinitionMetadata
* name = "CRMIPackage"
* title = "CRMI Package"
* status = #active
* description = """
Packages a specified canonical resource for use in a target environment, optionally 
including related content such as dependencies, components, and testing cases and data.

See [$package and $data-requirements](distribution.html#package-and-data-requirements)
"""
* comment = """
The package operation supports producing a complete package of a particular artifact 
supporting the capabilities expected to be available in a particular target environment. 
For example, a Questionnaire may be packaged together with the value sets referenced by 
elements of the questionnaire, and those value sets may be definitions (Computable) or 
expansions (Expanded), depending on the parameters to the operation. 
"""
* kind = #operation
* code = #package

* resource[+] = #ActivityDefinition
* resource[+] = #CapabilityStatement
* resource[+] = #CodeSystem
* resource[+] = #CompartmentDefinition
* resource[+] = #ConceptMap
* resource[+] = #ExampleScenario
* resource[+] = #GraphDefinition
* resource[+] = #ImplementationGuide
* resource[+] = #Library
* resource[+] = #Measure
* resource[+] = #Medication
* resource[+] = #MedicationKnowledge
* resource[+] = #MessageDefinition
* resource[+] = #NamingSystem
* resource[+] = #OperationDefinition
* resource[+] = #PlanDefinition
* resource[+] = #Questionnaire
* resource[+] = #SearchParameter
* resource[+] = #StructureDefinition
* resource[+] = #StructureMap
* resource[+] = #Substance
* resource[+] = #TerminologyCapabilities
* resource[+] = #TestScript
* resource[+] = #ValueSet
* system = false
* type = true
* instance = true

* parameter[+]
  * name = #id
  * min = 0
  * max = "1"
  * use = #in
  * type = #string
  * documentation = "The logical id of an existing Resource to package on the server."

* parameter[+]
  * name = #url
  * min = 0
  * max = "1"
  * use = #in
  * type = #uri
  * documentation = "A canonical or artifact reference to a Resource to package on the server."

* parameter[+]
  * name = #version
  * min = 0
  * max = "1"
  * use = #in
  * type = #string
  * documentation = "The version of the Resource"

* parameter[+]
  * name = #identifier
  * min = 0
  * max = "1"
  * use = #in
  * type = #string
  * searchType = #token
  * documentation = "A business identifier of the Resource."

* parameter[+]
  * name = #capability
  * min = 0
  * max = "*"
  * use = #in
  * type = #string
  * documentation = """
A desired capability of the resulting package. `computable` to include
computable elements in packaged content; `executable` to include executable
elements in packaged content; `publishable` to include publishable elements in
packaged content.
"""

* parameter[+]
  * name = #terminologyCapabilities
  * min = 0
  * max = "1"
  * use = #in
  * type = #TerminologyCapabilities
  * documentation = """
A TerminologyCapabilities resource describing the expected terminology capabilities 
of the target environment. For example, an environment may be capable of processing 
specific types of value set definitions, but not others (e.g. LOINC panel definitions, 
but not SNOMED hierarchies).
"""

* parameter[+]
  * name = #artifactVersion
  * min = 0
  * max = "*"
  * use = #in
  * type = #uri
  * documentation = """
Specifies a version to use for a canonical or artifact resource if the artifact referencing 
the resource does not already specify a version. The format is the same as a canonical URL:
[url]|[version] - e.g. http://loinc.org|2.56 Note that this is a generalization of the `system-version`
parameter to the $expand operation to apply to any canonical resource, including code systems.
"""

* parameter[+]
  * name = #checkArtifactVersion
  * min = 0
  * max = "*"
  * use = #in
  * type = #uri
  * documentation = """
Edge Case: Specifies a version to use for a canonical or artifact resource. If the artifact referencing 
the resource specifies a different version, an error is returned instead of the package. The
format is the same as a canonical URL: [url]|[version] - e.g. http://loinc.org|2.56 Note that
this is a generalization of the `check-system-version` parameter to the $expand operation to 
apply to any canonical resource, including code systems.
"""

* parameter[+]
  * name = #forceArtifactVersion
  * min = 0
  * max = "*"
  * use = #in
  * type = #uri
  * documentation = """
Edge Case: Specifies a version to use for a canonical or artifact resource. This parameter overrides any
specified version in the artifact (and any artifacts it depends on). The
format is the same as a canonical URL: [system]|[version] - e.g.
http://loinc.org|2.56. Note that this has obvious safety issues, in that it may
result in a value set expansion giving a different list of codes that is both
wrong and unsafe, and implementers should only use this capability reluctantly.
It primarily exists to deal with situations where specifications have fallen
into decay as time passes. If the version of a canonical is overridden, the version used SHALL
explicitly be represented in the expansion parameters. Note that this is a generalization of the
`force-system-version` parameter to the $expand operation to apply to any canonical resource,
including code systems.
"""

* parameter[+]
  * name = #manifest
  * min = 0
  * max = "1"
  * use = #in
  * type = #canonical
  * targetProfile = Canonical(http://hl7.org/fhir/uv/crmi/StructureDefinition/crmi-manifestlibrary)
  * documentation = """
Specifies a reference to an asset-collection library that defines version
bindings for code systems and other canonical resources referenced by the value
set(s) being expanded and other canonical resources referenced by the artifact.
When specified, code systems and other canonical resources identified as
`depends-on` related artifacts in the manifest library have the same meaning as
specifying that code system or other canonical version in the `system-version`
parameter of an expand or the `canonicalVersion` parameter.
"""

* parameter[+]
  * name = #offset
  * min = 0
  * max = "1"
  * use = #in
  * type = #integer
  * documentation = """
Paging support - where to start if a subset is desired (default = 0). Offset is
number of records (not number of pages). If offset > 0 the resulting bundle will be of type `collection`.
"""

* parameter[+]
  * name = #count
  * min = 0
  * max = "1"
  * use = #in
  * type = #integer
  * documentation = """
Paging support - how many resources should be provided in a partial page view.
If count = 0, the client is asking how large the package is. If count > 0 but less than the total number of resources, the result will be a bundle of type `collection`.
"""

* parameter[+]
  * name = #include
  * min = 0
  * max = "*"
  * use = #in
  * type = #code
  * documentation = """
Specifies what contents should only be included in the resulting package. The
codes indicate which types of resources should be included, but note that the
set of possible resources is determined as all known (i.e. present on the
server) dependencies and related artifacts. 

Possible values are either a code to mean a category of resource types:
* `all` (default) - all resource types
* `artifact` - the specified artifact
* `canonical` - canonical resources (i.e. resources with a defined url element or that can be canonical resources using the artifact-url extension)
* `terminology` - terminology resources (i.e. CodeSystem, ValueSet, NamingSystem, ConceptMap)
* `conformance` - conformance resources (i.e. StructureDefinition, StructureMap, SearchParameter, CompartmentDefinition)
* `profiles` - profile definitions (i.e. StructureDefinition resources that define profiles)
* `extensions` - extension definitions (i.e. StructureDefinition resources that define extensions) 
* `knowledge` - knowledge artifacts (i.e. ActivityDefinition, Library, PlanDefinition, Measure, Questionnaire)
* `tests` - test cases and data (i.e. test cases as defined by the testing specification in this implementation guide)
* `examples` - example resources (i.e. resources identified as examples in the implementation guide)

Or a valid FHIR resource Type (e.g. `PlanDefinition`, `MedicationKnowledge`, etc)
"""

* parameter[+]
  * name = #includeUri
  * min = 0
  * max = "*"
  * use = #in
  * type = #uri
  * documentation = """
Specifies what contents should be included in the resulting package by canonical
URL, can take the form `{url}` or `{url}|{version}`.
"""

* parameter[+]
  * name = #exclude
  * min = 0
  * max = "*"
  * use = #in
  * type = #code
  * documentation = """
Specifies what contents should be excluded in the resulting package. The codes
indicate which types of resources should be excluded, but note that the set of
possible resources is determined as all known (i.e. present on the server)
dependencies and related artifacts. 

Possible values are either a code to mean a category of resource types:
* `all` (default) - all resource types
* `artifact` - the specified artifact
* `canonical` - canonical resources (i.e. resources with a defined url element or that can be canonical resources using the artifact-url extension)
* `terminology` - terminology resources (i.e. CodeSystem, ValueSet, NamingSystem, ConceptMap)
* `conformance` - conformance resources (i.e. StructureDefinition, StructureMap, SearchParameter, CompartmentDefinition)
* `profiles` - profile definitions (i.e. StructureDefinition resources that define profiles)
* `extensions` - extension definitions (i.e. StructureDefinition resources that define extensions) 
* `knowledge` - knowledge artifacts (i.e. ActivityDefinition, Library, PlanDefinition, Measure, Questionnaire)
* `tests` - test cases and data (i.e. test cases as defined by the testing specification in this implementation guide)
* `examples` - example resources (i.e. resources identified as examples in the implementation guide)

Or a valid FHIR resource Type (e.g. `PlanDefinition`, `MedicationKnowledge`, etc)
"""

* parameter[+]
  * name = #excludeUri
  * min = 0
  * max = "*"
  * use = #in
  * type = #uri
  * documentation = """
Specifies what contents should be excluded in the resulting package by canonical
URL, can take the form `{url}` or `{url}|{version}`.
"""

* parameter[+]
  * name = #packageOnly
  * min = 0
  * max = "1"
  * use = #in
  * type = #boolean
  * documentation = """
True to indicate that the resulting package should only include resources that are defined in the implementation guide 
or specification that defines the artifact being packaged. False (default) to indicate that the resulting package should 
include resources regardless of what implementation guide or specification they are defined in.
"""

* parameter[+]
  * name = #artifactEndpointConfiguration
  * documentation = """
Configuration information to resolve canonical artifacts
* `artifactRoute`: An optional route used to determine whether this endpoint is expected to be able to resolve artifacts that match the route (i.e. start with the route, up to and including the entire url)
* `endpointUri`: The URI of the endpoint, exclusive with the `endpoint` parameter
* `endpoint`: An Endpoint resource describing the endpoint, exclusive with the `endpointUri` parameter

**Processing semantics**:

Create a canonical-like reference (e.g.
`{canonical.url}|{canonical.version}` or similar extensions for non-canonical artifacts).

* Given a single `artifactEndpointConfiguration`
  * When `artifactRoute` is present
    * And `artifactRoute` *starts with* canonical or artifact reference
    * Then attempt to resolve with `endpointUri` or `endpoint`
  * When `artifactRoute` is not present
    * Then attempt to resolve with `endpointUri` or `endpoint`
* Given multiple `artifactEndpointConfiguration`s
  * Then rank order each configuration (see below)
  * And attempt to resolve with `endpointUri` or `endpoint` in order until resolved

Rank each `artifactEndpointConfiguration` such that:
* if `artifactRoute` is present *and* `artifactRoute` *starts with* canonical or artifact reference: rank based on number of matching characters 
* if `artifactRoute` is *not* present: include but rank lower

NOTE: For evenly ranked `artifactEndpointConfiguration`s, order as defined in the
OperationDefinition.
"""
  * min = 0
  * max = "*"
  * use = #in
  
  * part[+]
    * name = #artifactRoute
    * min = 0
    * max = "1"
    * type = #uri
    * use = #in

  * part[+]
    * name = #endpointUri
    * min = 0
    * max = "1"
    * type = #uri
    * use = #in

  * part[+]
    * name = #endpoint
    * min = 0
    * max = "1"
    * type = #Endpoint
    * use = #in

* parameter[+]
  * name = #terminologyEndpoint
  * min = 0
  * max = "1"
  * use = #in
  * type = #Endpoint
  * documentation = """
An endpoint to use to access terminology (i.e. valuesets, codesystems, naming systems, concept maps, and
membership testing) referenced by the Resource. If no terminology endpoint is
supplied, the evaluation will attempt to use the server on which the operation
is being performed as the terminology server.
"""

// Output parameter
* parameter[+]
  * name = #return
  * min = 1 
  * max = "1"
  * use = #out
  * type = #Bundle
  * documentation = """
  The result of the packaging. If the resulting bundle is paged using `count` or `offset`, it will be of type `collection`. In the special case where `count = 0` it will be of type `searchset`.
  
  Servers generating packages SHALL include all the
  dependency resources referenced by the artifact that are known to the server and 
  specified by the include parameters. 
  
  For example, a measure repository SHALL include
  all the required library resources, but would not necessarily have the
  ValueSet resources referenced by the measure.
  """

---

File: repos/HL7_SLASH_crmi-ig/input/fsh/operation-definitions/release-operation.fsh

Instance: crmi-release
InstanceOf: OperationDefinition
Title: "CRMI Release Operation"
Usage: #definition
* insert DefinitionMetadata
* url = "http://hl7.org/fhir/uv/crmi/OperationDefinition/crmi-release"
* name = "CRMIRelease"
* title = "CRMI Release"
* kind = #operation
* description = "The release operation supports updating the status of an existing draft artifact to active. The operation sets the date element of the resource and pins versions of all direct and transitive references and records them in the program's manifest. Child artifacts (i.e. artifacts of which the existing artifact is composed) are also released, recursively."
* code = #release
* comment = "The release operation supports the ability of an authoring repository to transition an artifact and, transitively, any referenced and owned (as indicated by the 'crmiOwned' extension on the RelatedArtifact reference) component artifacts to a released state. The operation SHALL update the status of all owned components to 'active' and update their date to the current date. The operation SHALL ensure that all references for which a version is determined are recorded in the version manifest. For both components and dependencies, if versions are not specified in the relevant reference, the operation will lookup the version to be used in the version manifest.\\n\\nWhen 'requireVersionSpecificReferences' is true then all references SHALL either be version-specific or, if they are not, an entry SHALL exist in the version manifest to specify which version of the referenced resource should be used. If, 'requireVersionSpecificReferences' is true and there exists a reference that is not version-specific and no entry exists in the version manifest for the referenced resource, the program is considered to be in an invalid state and not eligible for release. If 'requireVersionSpecificReferences' is false (the default), then unversioned references are valid and the artifact can be released in that state - deferring the version determination to the consumer.\\n\\nWhen 'requireActiveReferences' is true then the operation SHALL throw an error if any 'draft' or 'retired' dependencies are found."
* resource[+] = #ActivityDefinition
* resource[+] = #CapabilityStatement
* resource[+] = #CodeSystem
* resource[+] = #CompartmentDefinition
* resource[+] = #ConceptMap
* resource[+] = #ExampleScenario
* resource[+] = #GraphDefinition
* resource[+] = #ImplementationGuide
* resource[+] = #Library
* resource[+] = #Measure
* resource[+] = #Medication
* resource[+] = #MedicationKnowledge
* resource[+] = #MessageDefinition
* resource[+] = #NamingSystem
* resource[+] = #OperationDefinition
* resource[+] = #PlanDefinition
* resource[+] = #Questionnaire
* resource[+] = #SearchParameter
* resource[+] = #StructureDefinition
* resource[+] = #StructureMap
* resource[+] = #Substance
* resource[+] = #TerminologyCapabilities
* resource[+] = #TestScript
* resource[+] = #ValueSet
* system = false
* type = true
* instance = true

* parameter[+].name = #id
* parameter[=].use = #in
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "The logical id of the artifact to release. The server must know the artifact (e.g. it is defined explicitly in the server's artifacts)"
* parameter[=].type = #string

* parameter[+].name = #version
* parameter[=].use = #in
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "Specifies the version to be applied—based on the version behavior specified—to the artifact being released and any referenced owned components."
* parameter[=].type = #string

* parameter[+].name = #versionBehavior
* parameter[=].use = #in
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "Indicates the behavior with which the 'version' parameter should applied to the artifact being released and its components."
* parameter[=].type = #code
* parameter[=].binding.strength = #required
* parameter[=].binding.valueSet = "http://hl7.org/fhir/uv/crmi/ValueSet/crmi-release-version-behavior"

* parameter[+].name = #requireVersionSpecificReferences
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "Indicates that the release operation will throw an error if any version-independent references, for which there is no corresponding entry in the version manifest, are found in the artifact. (default = false)"
* parameter[=].type = #boolean

* parameter[+].name = #requireActiveReferences
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "Indicates that the release operation will throw an error if any 'draft' or 'retired' dependencies are found. (default = false)"
* parameter[=].type = #boolean

* parameter[+].name = #latestFromTxServer
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "Indicates whether or not the terminology server from which a value set was originally downloaded should be checked for the latest version. The terminolgy server of origin is tracked via the authoritativeSource extension (https://hl7.org/fhir/extension-valueset-authoritativesource.html) on the value set. If this flag is set to false or the value set does not have an authoritativeSource specified, then the check should be constrained to the local system/cache. (default = false)"
* parameter[=].type = #boolean

* parameter[+].name = #experimentalBehavior
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "Indicates whether the repository should throw an error, log a warning or not validate if a specification which is not Experimental references Experimental components"
* parameter[=].type = #code
* parameter[=].binding.strength = #required
* parameter[=].binding.valueSet = "http://hl7.org/fhir/uv/crmi/ValueSet/crmi-release-experimental-behavior"

* parameter[+].name = #releaseLabel
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "Specifies a release label to be applied to the artifact(s) being released"
* parameter[=].type = #string

* parameter[+].name = #return
* parameter[=].use = #out
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "The Bundle result containing the released resource(s)"
* parameter[=].type = #Bundle

---

File: repos/HL7_SLASH_crmi-ig/input/fsh/operation-definitions/review-operation.fsh

Instance: crmi-review
InstanceOf: OperationDefinition
Title: "CRMI Review Operation"
Usage: #definition
* insert DefinitionMetadata
* url = "http://hl7.org/fhir/uv/crmi/OperationDefinition/crmi-review"
* name = "CRMIReview"
* title = "CRMI Review"
* description = "The review operation supports applying an review to an existing artifact, regardless of status. The operation sets the _date_ and _lastReviewDate_ elements of the reviewed artifact, and is otherwise only allowed to create ArtifactAssessment (Basic or cqf-artifactComment extension in R4) resources in the repository."
* kind = #operation
* code = #review
* comment = "The review operation supports the ability of a repository to record commentary on a specific state of an artifact in an ArtifactAssessment (Basic or cqf-artifactComment extension in R4) resource by applying a review. The artifact assessments which are added by the operation must reference a version of the artifact."
* resource[+] = #ActivityDefinition
* resource[+] = #CapabilityStatement
* resource[+] = #CodeSystem
* resource[+] = #CompartmentDefinition
* resource[+] = #ConceptMap
* resource[+] = #ExampleScenario
* resource[+] = #GraphDefinition
* resource[+] = #ImplementationGuide
* resource[+] = #Library
* resource[+] = #Measure
* resource[+] = #Medication
* resource[+] = #MedicationKnowledge
* resource[+] = #MessageDefinition
* resource[+] = #NamingSystem
* resource[+] = #OperationDefinition
* resource[+] = #PlanDefinition
* resource[+] = #Questionnaire
* resource[+] = #SearchParameter
* resource[+] = #StructureDefinition
* resource[+] = #StructureMap
* resource[+] = #Substance
* resource[+] = #TerminologyCapabilities
* resource[+] = #TestScript
* resource[+] = #ValueSet
* system = false
* type = true
* instance = true
* parameter[0].name = #id
* parameter[=].use = #in
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "The logical id of the artifact being reviewed. The server must know the artifact (e.g. it is defined explicitly in the server's artifacts)"
* parameter[=].type = #string
* parameter[+].name = #reviewDate
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "The date on which the artifact was reviewed. If one is not provided the system date will be used."
* parameter[=].type = #date
* parameter[+].name = #artifactAssessmentType
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "If a comment is submitted as part of the review, this parameter denotes the type of artifact comment."
* parameter[=].type = #code
* parameter[+].name = #artifactAssessmentSummary
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "The body of the comment."
* parameter[=].type = #string
* parameter[+].name = #artifactAssessmentTarget
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "The canonical url for the artifact being reviewed. The format is: [system]|[version] - e.g. http://loinc.org|2.56"
* parameter[=].type = #canonical
* parameter[+].name = #artifactAssessmentRelatedArtifact
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "Optional supporting canonical URL / Reference for the comment."
* parameter[=].type = #uri
* parameter[+].name = #artifactAssessmentAuthor
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "A Reference to a resource containing information about the entity applying the review."
* parameter[=].type = #Reference
* parameter[+].name = #return
* parameter[=].use = #out
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "The Bundle result containing both the updated artifact and the ArtifactAssessment (Basic in R4) resource containing the review metadata"
* parameter[=].type = #Bundle

---

File: repos/HL7_SLASH_crmi-ig/input/fsh/operation-profiles/_shared.fsh

Alias: $fhir-types = http://hl7.org/fhir/resource-types

ValueSet: ArtifactResourceTypes
Id: artifact-resource-types
Description: "FHIR canonical plus knowledge artifact resource types."
Title: "Artifact Resource Types"
* ^url = "http://terminology.hl7.org/ValueSet/artifact-resource-types"
* ^experimental = false
* $fhir-types#ActivityDefinition
* $fhir-types#CapabilityStatement
* $fhir-types#ChargeItemDefinition
* $fhir-types#CodeSystem
* $fhir-types#CompartmentDefinition
* $fhir-types#ConceptMap
* $fhir-types#EffectEvidenceSynthesis
* $fhir-types#EventDefinition
* $fhir-types#Evidence
* $fhir-types#EvidenceVariable
* $fhir-types#ExampleScenario
* $fhir-types#GraphDefinition
* $fhir-types#ImplementationGuide
* $fhir-types#Library
* $fhir-types#Measure
* $fhir-types#MessageDefinition
* $fhir-types#NamingSystem
* $fhir-types#OperationDefinition
* $fhir-types#PlanDefinition
* $fhir-types#Questionnaire
* $fhir-types#ResearchDefinition
* $fhir-types#ResearchElementDefinition
* $fhir-types#RiskEvidenceSynthesis
* $fhir-types#SearchParameter
* $fhir-types#StructureDefinition
* $fhir-types#StructureMap
* $fhir-types#TerminologyCapabilities
* $fhir-types#TestScript
* $fhir-types#ValueSet

* $fhir-types#Group
* $fhir-types#Medication
* $fhir-types#Substance
* $fhir-types#MedicationKnowledge


RuleSet: SliceOnName
* ^slicing.discriminator.type = #value
* ^slicing.discriminator.path = "name"
* ^slicing.rules = #open


---

File: repos/HL7_SLASH_crmi-ig/input/fsh/operation-profiles/artifact-endpoint-configurable-profile.fsh

Profile: ArtifactEndpointConfigurableOperation
Id: crmi-artifact-endpoint-configurable-operation
Parent: OperationDefinition 
Title: "CRMI Operation Profile: Artifact Endpoint Configurable"
Description: """
Profile for operations where artifact endpoint configuration can be specified.

* `artifactEndpointConfiguration`: Configuration information to resolve canonical artifacts
  * `artifactRoute`: An optional route used to determine whether this endpoint is expected to be able to resolve artifacts that match the route (i.e. start with the route, up to and including the entire url)
  * `endpointUri`: The URI of the endpoint, exclusive with the `endpoint` parameter
  * `endpoint`: An Endpoint resource describing the endpoint, exclusive with the `endpointUri` parameter

**Processing semantics**:

Create a canonical-like reference (e.g.
`{canonical.url}|{canonical.version}` or similar extensions for non-canonical artifacts).

* Given a single `artifactEndpointConfiguration`
  * When `artifactRoute` is present
    * And `artifactRoute` *starts with* canonical or artifact reference
    * Then attempt to resolve with `endpointUri` or `endpoint`
  * When `artifactRoute` is not present
    * Then attempt to resolve with `endpointUri` or `endpoint`
* Given multiple `artifactEndpointConfiguration`s
  * Then rank order each configuration (see below)
  * And attempt to resolve with `endpointUri` or `endpoint` in order until resolved

Rank each `artifactEndpointConfiguration` such that:
* if `artifactRoute` is present *and* `artifactRoute` *starts with* canonical or artifact reference: rank based on number of matching characters 
* if `artifactRoute` is *not* present: include but rank lower

NOTE: For evenly ranked `artifactEndpointConfiguration`s, order as defined in the
OperationDefinition.
"""

* parameter
  * insert SliceOnName

* parameter contains artifactEndpointConfiguration 0..* MS
* parameter[artifactEndpointConfiguration]
  * name = #artifactEndpointConfiguration (exactly)
  * min = 0
  * max = "*"
  * use = #in
  * part
    * insert SliceOnName
  
  * part contains artifactRoute 0..1 MS
  * part[artifactRoute]
    * name = #artifactRoute
    * min = 0
    * max = "1"
    * type = #uri

  // TODO: Add invariant to allow one or the other of the following:

  * part contains endpointUri 0..1 MS
  * part[endpointUri]
    * name = #endpointUri
    * min = 0
    * max = "1"
    * type = #uri

  * part contains endpoint 0..1 MS
  * part[endpoint]
    * name = #endpoint
    * min = 0
    * max = "1"
    * type = #Endpoint

---

File: repos/HL7_SLASH_crmi-ig/input/fsh/operation-profiles/artifact-operation-profile.fsh

Invariant:   crmi-artifact-operation-1
Description: "Parameter url type is uri or canonical"
Expression:  "type='uri' or type='canonical'"
Severity:    #error

Profile: ArtifactOperation
Id: crmi-artifact-operation
Parent: OperationDefinition
Title: "CRMI Operation Profile: Artifact Operation"
Description: """
Profile for knowledge artifact operations.

This establishes input parameters when the operation is involked at the resource
type level. The parameters are used to identify or specify the resource for the
operation.

* `url`: artifact URL&ast; for the resource
* `version`: artifact version&ast; for the resource
* `identifier`: business identifier for the resource
* `resource`: instance of a canonical resource

&ast;The artifact URL for canonical resources is `.url`, for non-canonical resources, it is
the extension `artifact-url`. The version for canonical resources is `.version`, for non-canonical
resources it is the extension `artifact-version`.

NOTE: When invoking canonical operations using any combination of `url`,
`version`, and `identifier`: 
* if there is one-and-only-one matching resource, the operation should apply, otherwise an error state. 
* if `resource` is specified then `url`, `version`, and `identifier` should be ignored.
"""

* parameter
  * insert SliceOnName

* parameter contains url 0..1 MS
* parameter[url]
  * name = #url (exactly)
  * use = #in
  * min = 0
  * max = "1"
  * obeys crmi-artifact-operation-1

* parameter contains version 0..1 MS
* parameter[version]
  * name = #version (exactly)
  * use = #in
  * min = 0
  * max = "1"
  * type = #string

* parameter contains identifier 0..1 MS
* parameter[identifier]
  * name = #identifier (exactly)
  * use = #in
  * min = 0
  * max = "1"
  * type = #string
  * searchType = #token

* parameter contains resource 0..1 MS
* parameter[resource]
  * name = #resource (exactly)
  * use = #in
  * min = 0
  * max = "1"
  * type from ArtifactResourceTypes (required)


---

File: repos/HL7_SLASH_crmi-ig/input/fsh/operation-profiles/artifact-version-bindable-operation-profile.fsh

Profile: ArtifactVersionBindableOperation
Id: crmi-artifact-version-bindable-operation
Parent: OperationDefinition
Title: "CRMI Operation Profile: Artifact Version Bindable"
Description: """
Operation where default artifact version(s) can be specified.

NOTE: Artifacts include FHIR Canonical resources and the resources specified as
non-canonical resources, such as: Medication, Substance, MedicationKnowledge,
and Group.

* `artifactVersion`: Specifies a version to use for a artifact resource if the artifact referencing the resource does not already specify a version. The format is the same as a canonical URL: `[url]|[version]` - e.g. `http://loinc.org|2.56`
* `checkArtifactVersion`: Edge Case: Specifies a version to use for a artifact resource. If the artifact referencing the resource specifies a different version, an error is returned instead of the package. The format is the same as a canonical URL: `[url]|[version]` - e.g. `http://loinc.org|2.56`
* `forceArtifactVersion`: Edge Case: Specifies a version to use for a artifact resource. This parameter overrides any specified version in the artifact (and any artifacts it depends on). The format is the same as a canonical URL: `[system]|[version]` - e.g. `http://loinc.org|2.56`. Note that this has obvious safety issues, in that it may result in a value set expansion giving a different list of codes that is both wrong and unsafe, and implementers should only use this capability reluctantly.
"""

* parameter
  * insert SliceOnName

* parameter contains artifactVersion 0..* MS
* parameter[artifactVersion]
  * name = #artifactVersion (exactly)
  * min = 0
  * max = "*"
  * use = #in
  * type = #uri

* parameter contains checkArtifactVersion 0..* MS
* parameter[checkArtifactVersion]
  * name = #checkArtifactVersion (exactly)
  * min = 0
  * max = "*"
  * use = #in
  * type = #uri

* parameter contains forceArtifactVersion 0..* MS
* parameter[forceArtifactVersion]
  * name = #forceArtifactVersion (exactly)
  * min = 0
  * max = "*"
  * use = #in
  * type = #uri


---

File: repos/HL7_SLASH_crmi-ig/input/fsh/operation-profiles/canonical-version-bindable-operation-profile.fsh

Profile: CanonicalVersionBindableOperation
Id: crmi-canonical-version-bindable-operation
Parent: OperationDefinition
Title: "CRMI Operation Profile: Canonical Version Bindable"
Description: """
Operation where default canonical version(s) can be specified

NOTE: This profile is here for backwards compatibility, see ArtifactVersionBindableOperation profile as a successor.

* `canonicalVersion`: Specifies a version to use for a canonical resource if the artifact referencing the resource does not already specify a version. The format is the same as a canonical URL: `[url]|[version]` - e.g. `http://loinc.org|2.56`
* `checkCanonicalVersion`: Edge Case: Specifies a version to use for a canonical resource. If the artifact referencing the resource specifies a different version, an error is returned instead of the package. The format is the same as a canonical URL: `[url]|[version]` - e.g. `http://loinc.org|2.56`
* `forceCanonicalVersion`: Edge Case: Specifies a version to use for a canonical resource. This parameter overrides any specified version in the artifact (and any artifacts it depends on). The format is the same as a canonical URL: `[system]|[version]` - e.g. `http://loinc.org|2.56`. Note that this has obvious safety issues, in that it may result in a value set expansion giving a different list of codes that is both wrong and unsafe, and implementers should only use this capability reluctantly.
"""

* parameter
  * insert SliceOnName

* parameter contains canonicalVersion 0..* MS
* parameter[canonicalVersion]
  * name = #canonicalVersion (exactly)
  * min = 0
  * max = "*"
  * use = #in
  * type = #canonical

* parameter contains checkCanonicalVersion 0..* MS
* parameter[checkCanonicalVersion]
  * name = #checkCanonicalVersion (exactly)
  * min = 0
  * max = "*"
  * use = #in
  * type = #canonical

* parameter contains forceCanonicalVersion 0..* MS
* parameter[forceCanonicalVersion]
  * name = #forceCanonicalVersion (exactly)
  * min = 0
  * max = "*"
  * use = #in
  * type = #canonical


---

File: repos/HL7_SLASH_crmi-ig/input/fsh/operation-profiles/manifestable-operation-profile.fsh

Profile: ManifestableOperation
Id: crmi-manifestable-operation
Parent: OperationDefinition
Title: "CRMI Operation Profile: Manifestable"
Description: """
Operation where default manifest to resolve canonicals can be specified

* `manifest`: Canonical reference to a Library resource where related-artifacts are used to define the versions of canonical resources.
"""

* parameter
  * insert SliceOnName

* parameter contains manifest 0..1 MS
* parameter[manifest]
  * name = #manifest (exactly)
  * min = 0
  * max = "1"
  * use = #in
  * type = #canonical
  * targetProfile = Canonical(http://hl7.org/fhir/uv/crmi/StructureDefinition/crmi-manifestlibrary)

---

File: repos/HL7_SLASH_crmi-ig/input/fsh/operation-profiles/pageable-operation-profile.fsh

Profile: PageableOperation
Id: crmi-pageable-operation
Parent: OperationDefinition
Title: "CRMI Operation Profile: Pageable"
Description: """
Operation that is pageable

This establishes input parameters when the operation might return paging.

* `offset`: Pagination offset
* `count`: Number of items per page
"""

* parameter
  * insert SliceOnName

* parameter contains offset 0..1 MS
* parameter[offset]
  * name = #offset (exactly)
  * min = 0
  * max = "1"
  * use = #in
  * type = #integer

* parameter contains count 0..1 MS
* parameter[count]
  * name = #count (exactly)
  * min = 0
  * max = "1"
  * use = #in
  * type = #integer


---

File: repos/HL7_SLASH_crmi-ig/input/fsh/aliases.fsh

// Core FHIR
Alias: $shareablevalueset = http://hl7.org/fhir/StructureDefinition/shareablevalueset
Alias: $shareablecodesystem = http://hl7.org/fhir/StructureDefinition/shareablecodesystem
Alias: $shareablelibrary = http://hl7.org/fhir/StructureDefinition/shareablelibrary
Alias: $shareablemeasure = http://hl7.org/fhir/StructureDefinition/shareablemeasure

Alias: $cqf-knowledgeCapability = http://hl7.org/fhir/StructureDefinition/cqf-knowledgeCapability
//Alias: $cqf-knowledgeRepresentationLevel = http://hl7.org/fhir/StructureDefinition/cqf-knowledgeRepresentationLevel
Alias: $cqf-artifactComment = http://hl7.org/fhir/StructureDefinition/cqf-artifactComment

Alias: $artifact-comment-type = http://hl7.org/fhir/ValueSet/artifact-comment-type
Alias: $cqf-library = http://hl7.org/fhir/StructureDefinition/cqf-library
Alias: $cqf-expression = http://hl7.org/fhir/StructureDefinition/cqf-expression

// Extensions
Alias: $artifact-url = http://hl7.org/fhir/StructureDefinition/artifact-url
Alias: $artifact-version = http://hl7.org/fhir/StructureDefinition/artifact-version

---

File: repos/HL7_SLASH_crmi-ig/input/fsh/metadata.fsh

RuleSet: DefinitionMetadata
* status = #active

RuleSet: ArtifactOperationProfile
* meta.profile[+] = Canonical(ArtifactOperation)

RuleSet: ArtifactEndpoingConfigurableOperationProfile
* meta.profile[+] = Canonical(ArtifactEndpointConfigurableOperation)

RuleSet: DataConfigurableOperationProfile
* meta.profile[+] = Canonical(DataConfigurableOperation)

RuleSet: ManifestableOperationProfile 
* meta.profile[+] = Canonical(ManifestableOperation)

RuleSet: PageableOperationProfile 
* meta.profile[+] = Canonical(PageableOperation)

RuleSet: ArtifactVersionBindableOperationProfile
* meta.profile[+] = Canonical(ArtifactVersionBindableOperation)

RuleSet: ArtifactEndpointConfigurableOperationProfile
* meta.profile[+] = Canonical(ArtifactEndpointConfigurableOperation)

RuleSet: ParameterizableOperationProfile
* meta.profile[+] = Canonical(ParameterizableOperation)

---

File: repos/HL7_SLASH_crmi-ig/input/pages/artifact-conventions.md

{:toc}

{: #artifact-conventions}

This section provides general conventions for canonical artifacts. The guidance here is aligned with [Terminology Expectations for IG Developers](https://confluence.hl7.org/display/TSMG/Terminology+Expectations+for+IG+Developers).

### Canonical Resources

#### URL

The `url` element of an artifact **SHOULD** be constructed according to the following pattern:

```
{package-canonical-base}/{resource.resourceType}/{resource.id}
```

Note that this pattern is based on the logical `id` of the resource in an implementation guide authoring context. This means the id-space is isolated by the canonical base of the IG and there is no chance of collision with other content. When the resource is published and appears in other contexts, the logical `id` will change, but the `url` will remain constant as the canonical identifier for the resource.

If the authoring context is an authoring repository, the repository must ensure that collisions cannot occur with content from other projects in the same repository, and this convention typically cannot be followed. In these cases, the authoring repository is responsible for preventing collisions and establishing the URL for the artifact.

#### Version

The `version` element for all artifacts within the same package **SHOULD** be the same as the version of the package. This is usually the ImplementationGuide in which the artifact is defined.

In addition, all references to canonicals from artifacts in a package to other artifacts in the same package **SHOULD** be version-consistent (i.e. if the references are version-specific and the referenced artifact is included in the package, the referenced artifact is the version referenced (and no other unreferenced versions of that artifact are included).

#### Name

The `name` element of an artifact **SHOULD**:
1. Start with an alphabetic character `[A-Za-z]`, followed only by alphanumeric characters `[A-Za-z0-9]` (note no underscores or spaces)
2. Use PascalCasing (i.e. first letter of every word capitalized)
3. Be unique within the canonical base and resource type for the artifact

In addition, for Knowledge Artifacts (i.e. Library, ActivityDefinition, PlanDefinition, Measure, and Questionnaire), the `name` element **SHOULD**:
1. Correspond to the _tail_ of the canonical (i.e. everything after the last slash (`/`))

This is especially important for Library resources that contain CQL, since library resolution in CQL relies on the canonical identifiers of the resources.

For example:

```
"url": "http://fhir.org/guides/cqf/common/Library/FHIRCommon",
"name": "FHIRCommon"
```

#### Title

The `title` element of an artifact **SHOULD**:
1. Correspond to the `name`, but with spaces allowed
2. Use Title Casing (i.e. first letter of every word capitalized, except for conjunctions and prepositions)
3. Avoid the use of special characters

### Operation definitions

Although FHIR operation definitions can specify a `code` property, servers may use whatever code they surface in their capability statement to implement operations. To simplify application development and encourage consistency, this implementation guide proposes that:

1. Servers **SHOULD** use the `code` property of the OperationDefinition to expose operation capability
2. Operation definitions **SHOULD** use the same `code` property as the base definition of an OperationDefinition they are extending



---

File: repos/HL7_SLASH_crmi-ig/input/pages/artifact-lifecycle.md


{:toc}

{: #artifact-lifecycle}

This section describes the general use case of knowledge artifact management as a special case of _content management_. Specifically, we apply _semantic versioning_ and apply controls through the use of `status`, as described in the artifact lifecycle topic. The use cases for artifact management are then described in artifact operations.

<div style="max-width:750px;">
{% include img.html img="knowledge-artifact-lifecycle.png" %}
</div>

The above diagram depicts the high-level phases of content development as:

* Authoring/Development
    * Analyze (L1)
    * Design (L2)
    * Develop (L3)
    * Testing
    * Packaging
* Publishing
* Implementation
 
### Authoring

The authoring phase is supported by the Shareable and Computable profiles defined in this implementation guide. See the [Profiles](profiles.html) page for a complete description of these capability categories and profiles.

See [Artifact Conventions](artifact-conventions.html) for artifact authoring conventions.

#### Artifact Status
{: #artifact-status}

Knowledge artifacts as represented within FHIR follow a general, high-level content development workflow, as represented by the possible values of the `status` element of the artifact:

* **draft**: The artifact is under development and not yet considered to be ready for normal use. In particular, there is no guarantee that the version element associated with the artifact is established, and the actual content of the artifact may change.
* **active**: The artifact is ready for normal use. In particular, the content of the artifact related to the version element is stable and may only change in accordance with the versioning policy of the artifact. In general, changes to the artifact require a new version to be introduced in draft status.
* **retired**: The artifact has been withdrawn or superseded and should no longer be used.

In addition, the `experimental` element may be used to indicate that the artifact is intended for testing/experimental usage only and should not be used in production settings.

To support proper version management, this implementation guide requires that:

**Conformance Requirement 3.1 (Artifact Status):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-1)
{: #conformance-requirement-3-1}
1. The content of an `active` or `retired` artifact **SHALL NOT** change, except in accordance with the [version policy](#artifact-versioning-policy) of the artifact
1. An `active` artifact **SHALL NOT** transition back to `draft`. A new version of the artifact is required.
2. A `retired` artifact **SHALL NOT** transition back to `active` or `draft`. A new version of the artifact is required.

If an invalid state transition occurs accidentally, the artifacts **SHOULD** be updated to the correct status and downstream systems **SHOULD** be notified as soon as possible.

#### Artifact Identity
{: #artifact-identity}

Knowledge artifacts represented as FHIR resources have multiple ways of identifying the artifact:

1. **logical id**: As FHIR resources, knowledge artifacts have a server-specific logical id for the artifact, as defined by the _id_ element of the resource. This id is typically managed by the specific server in which a resource appears, and so can change depending on the server it is accessed from. See the [Logical ID](http://hl7.org/fhir/resource.html#id) topic in FHIR for more information.
2. **business identifiers**: All knowledge artifacts have an _identifier_ element that can be used to provide additional identifiers that are unique within a defined scope (or _system_) and remain fixed as the resource appears on different servers. See the [Business Identifiers](http://hl7.org/fhir/resource.html#identifiers) topic in FHIR for more information.
3. **canonical urls**: As _canonical_ resources in FHIR, knowledge artifacts have a special purpose business identifiers that is a globally unique, version-independent identifier for the resource, specified by the _url_ element. See the [Canonical URLs](http://hl7.org/fhir/resource.html#canonical) topic in FHIR for more information.

**Conformance Requirement 3.2 (Artifact Identity):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-2)
{: #conformance-requirement-3-2}
1. Knowledge artifacts **SHALL** provide and maintain a globally unique, version-independent identifier in the _url_ element. When referencing knowledge artifacts, a reference may be version-independent by providing only the canonical URL, or the reference may be version-specific, using the `|` notation to indicate the version of the artifact to be referenced:

```
http://example.org/fhir/Library/ExampleLibrary // A version-independent reference to the ExampleLibrary published at example.org/fhir
http://example.org/fhir/Library/ExampleLibrary|1.0.0 // A version-specific reference to version 1.0.0 of the library
```

##### Non-canonical Artifacts

Note that this implementation guide defines profiles for several resources that are not strictly canonical resources (because they do not have a `url` element) but that can be used as knowledge artifacts:

* Group
* Location
* Medication
* MedicationKnowledge
* Substance

In addition, there are several domain-level resources that are used in a definitional way as part of knowledge artifacts by referring to profiles of these artifacts:

* CareTeam
* Practitioner
* PractitionerRole
* Organization

#### Artifact Versioning
{: #artifact-versioning }

This IG recommends [Semantic Versioning](https://semver.org) be used to version artifacts to help track and manage dependencies. As with FHIR, this IG allows for an exception to stock semantic versioning in that there is no expectation of ordering among labels. See [FHIR Releases and Versioning](https://hl7.org/fhir/versions.html#versions).

**Conformance Requirement 3.3 (Artifact Versioning):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-3)
{: #conformance-requirement-3-3}
  1. Active artifacts **SHALL** specify a version
  1. Active artifacts **SHOULD** specify a version algorithm
  2. The artifact version **SHOULD** follow the convention:
       < major >.< minor >.< patch >
  3. For artifacts in draft status, the versioning scheme **NEED NOT** apply, and there is no expectation that artifact contents are stable. Some systems allow only a single draft version of an artifact and that instance has no version element, other systems allow multiple draft versions  
  4. The versioning scheme **SHALL** apply when an artifact moves to active status.
  5. Artifacts **MAY** use additional labels to support pre-release content or other versioning and build metadata use cases.
    a. Note that unlike stock semantic versioning, there is no expectation of order among labels

There are three main types of changes that can be made to an artifact:

  1. An artifact can be changed in a way that would alter the public use of its components, or significantly impact capability. 
  2. An artifact can be changed by adding new features or functionality but without changing the way that existing capabilities are used. 
  3. An artifact can be changed in a way that does not change existing functionality or add new capabilities, but only corrects or improves the originally intended functionality.

By exposing version numbers that identify all three types of changes, artifacts can be versioned in a way that makes
clear when a change will impact usage, versus when a change can potentially be safely incorporated as an update. The
first type of change iss referred to as a _major_ change, and requires incrementing the _major version
number_. The second type of change is referred to as a _minor_ change, and requires incrementing the
_minor version number_. And finally, the third type of change is referred to as a _patch_, and requires
incrementing the _patch version number_. Version numbers for knowledge artifacts can then be represented as:

```xml
<major>.<minor>.<patch>
```

To summarize, breaking changes or major substantive new capabilities (such as materially changing whether a given recommendation will be applicable to a subject) require a major version number increment; non-breaking changes or minor new capabilities (such as refining the content of a questionnaire or adding stratifiers to a quality measure) require a minor version number increment; while non-substantive changes (such as fixing spelling mistakes and other minor technical corrections) require only a patch version number increment. Incrementing a version number resets version numbers to the right. E.g., When `1.3.5` contains a major change, it becomes `2.0.0`, not `2.3.5`. The scheme is for the benefit of consumers and so should be understood from that perspective.

##### Artifact Versioning Policy
{: #artifact-versioning-policy }

In addition to the use of semantic versioning, this IG adds support for specifying an _artifact version policy_ that applies to artifacts to allow consumers to understand what types of changes are indicated by version increments. This IG defines two version policies:

* **metadata** - This policy indicates that non-substantive changes to the metadata elements of an artifact may be made without incrementing the version number
* **strict** - This policy indicates that no changes to any elements of an artifact may be made without incrementing the version number

**Conformance Requirement 3.4 (Artifact Versioning Policy):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-4)
{: #conformance-requirement-3-4}
  1. Active artifacts **SHOULD** specify a versioning policy
  2. When an artifact versioning policy is `metadata`:
      1. Non-substantive changes to the metadata elements of the artifact **MAY** be made without incrementing the version number, but
      2. When this occurs, the `date` element **SHALL** be updated
  3. When an artifact versioning policy is `strict`:
      1. All changes to the elements of an artifact must be accompanied by an increment in the version number, appropriate to the level of change in the artifact consistent with semantic versioning

#### Artifact Metadata
{: #artifact-metadata}

In addition to identity, lifecycle, and versioning, knowledge artifacts typically have additional metadata such as descriptive content, documentation, justification, and source. This is especially true of _published_ knowledge artifacts, which make this type of information available to enable consumers to find, understand, and ultimately implement the content. In FHIR, knowledge artifacts generally follow the [Metadata Resource](https://hl7.org/fhir/clinicalreasoning-knowledge-artifact-representation.html#metadata) pattern. The capabilities described in the artifact repository service make use of these elements for knowledge artifacts.

#### Artifact Collections
{: #artifact-collections}

Because artifacts are often authored, published, and consumed as a collection of artifacts (either as a published implementation guide, or as an artifact package such as a quality measure or set of measures), the version of an artifact is often established at the collection level and applied consistently to all the artifacts included in the package. In this case, the same considerations apply to establishing the version number, but because that version number is applied to all the artifacts in a package, it can be the case that an artifact has a new version, but does not actually have changes as indicated by its version number.

For example, if a new version of a computable guideline is published as a content implementation guide, but one of the value sets defined in the implementation guide has not changed, the value set will still be assigned the new version number of the content implementation guide as a whole, even though the content of that value set has not changed.

In addition, to ensure stable resolution of dependencies of an artifact throughout its lifecycle (including stable value set expansion), a version manifest should be used to allow resolution of unversioned canonical references in the artifact and its dependencies. See the [Version Manifest](version-manifest.html) discussion for more information on how the Manifest Library profile supports stable resolution of dependencies.

A collection of artifacts is represented using a [CRMIManifestLibrary](StructureDefinition-crmi-manifestlibrary.html). The components of the collection are identified with `relatedArtifact` entries of type `composed-of`.

The dependencies of a collection can be stated explicitly using `relatedArtifact` entries of type `depends-on`, but because dependencies can always be inferred from the components, this listing is typically calculated. The $data-requirements operation can be used to calculate the dependencies of an artifact.

**Conformance Requirement 3.5 (Artifact Collection Versioning):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-5)
{: #conformance-requirement-3-5}
1. Artifacts that are authored as part of a collection (either a content implementation guide or an asset collection):
  1. **SHOULD** have the same version as the overall collection, and as a result:
  2. **MAY** have version number increments that do not strictly reflect changes to that artifact
  3. **MAY** specify version algorithm and versioning policy once at the collection level
1. Artifact collections **SHOULD** use an Artifact Manifest to establish versions of dependencies

##### Artifact Package Source
{: #artifact-package-source}

The _package source_ of an artifact is the package context in which it is authored, tested, and evaluated. This is typically specified by the implementation guide or package in which the artifact is published and distributed, and corresponds to the package id and base canonical url for the implementation guide. For example:

```
  "packageId": "hl7.fhir.uv.crmi"
  "canonical": "http://hl7.org/fhir/uv/crmi"
```

For knowledge artifacts that are authored and published as part of a FHIR Implementation Guide (i.e. a content IG), the package of the artifact is implied by the base canonical of the artifact URL. However, the package source of an artifact can be overridden using the [cqf-scope](https://hl7.org/fhir/extensions/5.1.0-ballot/StructureDefinition-cqf-scope.html) extension.

The package source is important for determining the manifest (which dictates the expansion parameters used to resolve unversioned references). The manifest for a given package source is either the implementation guide (if the package source corresponds directly to an implementation guide), or the manifest library associated with the artifact collection identified by the packageId and url.

**Conformance Requirement 3.6 (Artifact Package Source):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-6)
{: #conformance-requirement-3-6}
1. Artifacts **SHOULD** indicate their package source

##### Components vs dependencies

A _component_ artifact is an artifact that is designated specifically as part of a collection, whereas a _dependency_ is an artifact that is referenced by another artifact. The distinction is drawn to ensure that dependencies can always be calculated by tracing artifact dependencies, whereas components always need to be specified (i.e. they are the designated components of the collection).

In addition, artifacts can be _owned_ meaning that the lifecycle of the owned artifact is entirely controlled by the containing artifact, as opposed to the artifact having its own lifecycle. This is typically done for a collection of artifacts, but can also be done with specific elements (for example the _primary measure library_ of a measure can be an _owned_ artifact).

Within an artifact collection, the `isOwned` extension is used on the `relatedArtifact` entries of type `composed-of` specifying the components to designate whether a component is owned (i.e. managed entirely as part of the collection). A given artifact may only be owned by a single parent artifact.

### Publishing

The publishing phase is supported by the Publishable profiles defined in this implementation guide. See the [Profiles](profiles.html) page for a complete description of the Publishable capability category and profiles.

In addition, the $package and $data-requirements operations are concerned with tracing dependencies and constructing packages for the distribution of content.

See the [Publishing](publishing.html) topic for more information on publishing considerations.

The distribution phase is supported in two main ways:

1. Using FHIR implementation guide packages (Node Package Manager (NPM) packages)
2. Using Artifact Packages (FHIR Bundles) to exchange content in various ways (as files, via API, etc)

The intent of this implementation guide is to ensure that both of these approaches are supported and that that support is provided in a way that is consistent with the existing FHIR Publishing ecosystem as well as FHIR API capabilities.

See the [Distribution](distribution.html) topic for more information on distribution considerations.

Note that artifacts can be authored, packaged, and distributed either individually, or as collections of artifacts.

Specifically, this IG defines capabilities for artifact repositories that support the content development lifecycle, with the goal of enabling a knowledge artifact ecosystem; in the same way that value sets are currently available via an ecosystem of terminology servers, artifacts should be readily available through an ecosystem of artifact repositories.

This IG is not prescriptive about whether content is distributed via IG packages or artifact repositories; both approaches are important and facilitate different use cases. This IG is focused on supporting both in consistent ways to ensure that however content is distributed, it can be reliably used by artifact consumers.

### Implementation

The implementation (or run-time) phase is supported by the Executable profiles defined in this implementation guide. See the [Profiles](profiles.html) page for a complete description of the Executable capability category and profiles.



---

File: repos/HL7_SLASH_crmi-ig/input/pages/artifact-repository-service.md

{:toc}

This page documents the conformance expectations of an artifact repository service to support authoring, publishing, and distribution of FHIR-based knowledge artifacts including questionnaires, decision support rules, quality measures, guidelines, and reporting specifications, as well as their associated terminologies and data element descriptions.

This implementation guide is not advocating for any particular central authority for content repositories, rather the intent is to propose a capability statement that enables publishers to build consistent and interoperable repositories for sharing knowledge artifacts.

This implementation guide is not prescriptive about authentication or authorization, but strongly recommends that these capabilities be addressed through standard mechanisms, as described in [FHIR standard security mechanisms](https://www.hl7.org/fhir/security.html). In addition, though knowledge artifacts typically do not include patient-specific information, test data for knowledge artifacts can sometimes be derived from or based on real patient information. In this cases, care must be taken to ensure the data is scrubbed to remove any possibility of violating patient privacy or security.

This page defines three levels of artifact repository capabilities:

* **Shareable Artifact Repository**: The minimum functionality required to support read-only, API access to artifacts
* **Publishable Artifact Repository**: Additional capabilities to support indexing and searching, dependency tracing, and packaging of artifacts
* **Authoring Artifact Repository**: Additional write capabilities to support content authoring using the repository as a content store

Note that the Publishable and Authoring repositories build on the Shareable repository, so that Shareable describes the minimum basic capabilities of an artifact repository, and the Publishable and Authoring repositories build on that to support additional, more sophisticated use cases.

In addition, the repository capabilities described here are intended to conform to and facilitate artifact management as described in the [Artifact Lifecycle](artifact-lifecycle.html) topic of this implementation guide. In particular, artifact status is a key element and care must be taken to ensure that artifact status can only transition as specified in the [Artifact Status](artifact-lifecycle.html#artifact-status) topic.

### Artifact Repository Actions

The following conceptual actions support artifact authoring, searching, publication, and distribution. In this section, each of these actions are described conceptually, and then the capability statements segment these actions into the _shareable_, _publishable_, and _authoring_ repositories to support the various use cases for an artifact ecosystem.

* **Retrieve**: Get a specific artifact by its server-specific identity
* **Search**: Search for an artifact according to specific criteria
* **Package**: Package an artifact for a particular environment (regardless of status)
* **Requirements**: Determine the data requirements and dependencies for a particular artifact (regardless of status)
* **Submit**: Post a new artifact in _draft_ status
* **Revise**: Update an existing artifact in _draft_ status
* **Withdraw**: Delete a _draft_ artifact
* **Review**: Review and provide comments on an existing artifact (regardless of status)
* **Approve**: Approve and provide comments on an existing artifact (regardless of status)
* **Publish**: Post a new artifact with _active_ status
* **Release**: Update an existing _draft_ artifact to _active_ and pin the the versions for all artifacts referenced either directly or transitively by the artifact.
* **Retire**: Post an update that sets status to _retired_ on an existing _active_ artifact
* **Archive**: Delete a _retired_ artifact
* **Draft**: Draft a new version of an existing active artifact
* **Clone**: Clone a new artifact based on an existing artifact (regardless of status)
* **Diff**: Compare two knowledge artifacts and optionally expand any ValueSets in the dependency tree

> NOTE: These are conceptual actions that can be performed in a variety of ways. The purpose of the capability statements is to describe how these actions are actually performed in an API, as either a FHIR RESTful _interaction_ (create, read, update, delete), or FHIR _operation_ (e.g. $package).

### Shareable Artifact Repository

The ShareableArtifactRepository capability statement defines the minimum expectations for an artifact repository that provides basic access to shareable artifact content:

* Represent artifacts using the appropriate capability profile for the artifact
* Retrieve artifacts by their logical id
* Search for artifacts by url, version, identifier, name, title, status, and description

The [CRMIShareableArtifactRepository](CapabilityStatement-crmi-shareable-artifact-repository.html) capability statement captures these requirements formally, while the following sections provide a narrative description of them.

Note that the shareable artifact repository defined here supports only the knowledge artifacts that are the primary focus of this implementation guide:

* ActivityDefinition
* Library
* Measure
* PlanDefinition
* Questionnaire

Repository support for other types of artifacts **SHALL** follow the same pattern established for these artifacts.

#### Server Requirements

1. Services **MAY** require authentication. If authentication is required, it **SHOULD** be in the form of an authentication header (usually a bearer token) that the use can determine in advance and provider to their tooling environment in some configuration.
2. For all string search parameters, servers
  1. **SHALL** support the `contains` modifier
  2. **SHALL** support the `exact` modifier
  3. **SHOULD** support the `text` modifier
3. Servers **SHALL** support the expression of `AND` and `OR` search parameters for all search parameters, as defined in the [composite](http://hl7.org/fhir/search.html#combining) search parameter topic.

> Note that for servers that support write capabilities, the `version` element of an artifact is a business version, and is independent of [resource versioning](https://hl7.org/fhir/R4/resource.html#versions). Artifact repositories that support write capabilities may wish to implement resource versioning as well as artifact (business) versioning to ensure auditability of changes, however, this is an implementation decision and does not impact the conceptual support for artifact versions (because each different version of an artifact will necessarily be a different resource instance in the server. Note also that R6 has introduced additional capabilities to better support resource versioning for servers that provide such support.

#### Artifacts

For each type of knowledge artifact supported by a ShareableArtifactRepository:

1. **SHALL** Represent basic artifact information, as specified by the shareable profile for the artifact, which includes url, identifier, version, name, title, type, status, experimental, date, publisher, contact, description, useContext, and jurisdiction.
2. For computable artifacts, **SHALL** represent computable artifact information, as specified by the computable artifact profile.
3. For executable artifacts, **SHALL** represent executable artifact information, as specified by the executable artifact profile.
4. For published artifacts, **SHALL** represent publishable artifact information, as specified by the publishable artifact profile.
5. **SHALL** support _retrieve_ by either
    1. `read` by the server-defined id for the artifact
    2. `search` using the `_id` search parameter
6. **SHALL** support _search_ using the `search` interaction by:
    1. url: Returning all versions of the artifact matching that url
    2. version: Returning the artifact matching that version (can appear only in combination with a url search)
    3. identifier: Returning any artifact matching the identifier
    4. name: Returning any artifact matching the name, according to the string-matching semantics in FHIR
    5. title: Returning any artifact matching the title, according to the string-matching semantics in FHIR
    6. status: Returning artifacts that match the given status
    7. description: Returning any artifact matching the search description, according to string-matching semantics in FHIR

See the [CRMIShareableArtifactRepository](CapabilityStatement-crmi-shareable-artifact-repository.html) capability statement for a formal description of these requirements.

### Publishable Artifact Repository

The PublishableArtifactRepository capability statement builds on the ShareableArtifactRepository and expresses additional functionality that **SHOULD** be provided in support of providing published FHIR artifacts including additional searching and packaging capabilities:

* Package artifacts using the $package operation
* Requirements using the $data-requirements operation
* Search using additional publishable metadata
* Should support minimum write capability (Publish, Retire, Archive)

The [CRMIPublishableArtifactRepository](CapabilityStatement-crmi-publishable-artifact-repository.html) capability statement captures these requirements formally, while the following sections provide a narrative description of them.

Note that the publishable artifact repository defined here supports only the knowledge artifacts that are the primary focus of this implementation guide:

* ActivityDefinition
* Library
* Measure
* PlanDefinition
* Questionnaire

Repository support for other types of artifacts **SHALL** follow the same pattern established for these artifacts.

#### Artifacts

For each type of knowledge artifact supported by a PublishableArtifactRepository:

1. **SHALL** support artifact packaging: [$package](OperationDefinition-crmi-package.html) operation
    1. **SHALL** support the url parameter
    2. **SHALL** support the version parameter
    3. **SHOULD** support the id parameter
    6. **SHOULD** support the offset parameter
    7. **SHOULD** support the count parameter
    8. **SHOULD** support artifactVersion parameter (overrides artifact versions specified in the manifest)
    9. **SHOULD** support checkArtifactVersion parameter (overrides artifact versions specified in the manifest)
    10. **SHOULD** support forceArtifactVersion parameter (overrides artifact versions specified in the manifest)
    11. **SHOULD** support manifest parameter (provides a reference to a manifest to be used for the packaging)
    12. **SHOULD** support include parameter
    13. **SHOULD** support includeUri parameter
    14. **SHOULD** support exclude parameter
    15. **SHOULD** support excludeUri parameter
    16. **SHOULD** support packageOnly parameter
    16. **SHOULD** support contentEndpoint parameter
    17. **SHOULD** support terminologyEndpoint parameter
2. **SHALL** support artifact requirements analysis: [$data-requirements](OperationDefinition-crmi-data-requirements.html) operation
    2. **SHALL** support the url parameter
    3. **SHALL** support the version parameter
    1. **SHOULD** support the id parameter
    5. **SHOULD** support the expression parameter
    6. **SHOULD** support the parameters parameter
    7. **SHOULD** support artifactVersion parameter (overrides artifact versions specified in the manifest)
    8. **SHOULD** support checkArtifactVersion parameter (overrides code artifact versions specified in the manifest)
    9. **SHOULD** support forceArtifactVersion parameter (overrides code artifact versions specified in the manifest)
    10. **SHOULD** support manifest parameter (provides a reference to a manifest to be used for the packaging)
3. **SHOULD** support artifact Metadata searches:
    1. date: Returning all artifacts matching the given date
    2. effective: Returning all artifacts matching the given effectivePeriod
    3. jurisdiction: Returning all artifacts matching the given jurisdiction
    4. context: Returning all artifacts with a use context value matching the given context
    5. context-type: Returning all artifacts with a use context type matching the given context type
    6. context-type-quantity: Returning all artifacts with a use context quantity or range matching the given quantity
    7. context-type-value: Returning all artifacts with a given use context type and value
    8. topic: Returning all artifacts matching the given topic
4. **MAY** support artifact RelatedArtifact searches:
    1. composed-of: Returning all artifacts that have the given artifact as a component
    2. depends-on: Returning all artifacts that have the given artifact as a dependency
    3. derived-from: Returning all artifacts that are derived from the given artifact
    4. successor: Returning all artifacts that have the given artifact as a successor
    5. predecessor: Returning all artifacts that have the given artifact as a predecessor
5. **SHOULD** support minimum write capability:
    1. Support the _publish_ action by either the `create` or `put` interaction
        1. The artifact must be in `active` status and must conform to at least the appropriate shareable and publishable profiles for the artifact
    2. Support the _retire_ action using an `update` interaction
        1. The artifact must be in `active` status and update is only allowed to change the status to `retired` and update the `date` (and other metadata appropriate to indicate retired status)
    3. Support the _archive_ action using a `delete` interaction
        1. The artifact must be in `retired` status

### Authoring Artifact Repository

The AuthoringArtifactRepository capability statement defines additional capabilities that are required to support content authoring workflows in a shared environment. For systems that do not exchange in progress content, or support external review/approval processes, these capabilities are not required to be exposed:

* Support `draft` artifacts (the Submit, Revise, and Withdraw actions)
* Support artifact review and approval (the Review and Approve actions)
* Support artifact authoring (Draft, Clone, Release, and Diff)

The [CRMIAuthoringArtifactRepository](CapabilityStatement-crmi-authoring-artifact-repository.html) capability statement captures these requirements formally, while the following sections provide a narrative description of them.

Note that the authoring artifact repository defined here supports only the knowledge artifacts that are the primary focus of this implementation guide:

* ActivityDefinition
* Library
* Measure
* PlanDefinition
* Questionnaire

Repository support for other types of artifacts **SHALL** follow the same pattern established for these artifacts.

#### Artifacts

For each type of artifact supported, an AuthoringMeasureRepository:

1. **SHALL** support _submit_ using either the `create` or `update` interaction
    1. The artifact must be in _draft_ status
2. **SHALL** support _revise_ using the `update` interaction
    2. The artifact must be in (and remain in) _draft_ status
3. **SHOULD** support _withdraw_ using the `delete` interaction
    2. The artifact must be in _draft_ status
4. **SHOULD** support _review_ using the [$review](OperationDefinition-crmi-review.html) operation
    1. **SHOULD** support id parameter
    1. **SHOULD** support reviewDate parameter
    2. **SHOULD** support artifactAssessmentType parameter
    3. **SHOULD** support artifactAssessmentSummary parameter
    4. **SHOULD** support artifactAssessmentTarget parameter
    5. **SHOULD** support artifactAssessmentAuthor parameter
5. **SHOULD** support _approve_ using the [$approve](OperationDefinition-crmi-approve.html) operation
    1. **SHOULD** support id parameter
    1. **SHOULD** support approvalDate parameter
    2. **SHOULD** support artifactAssessmentType parameter
    3. **SHOULD** support artifactAssessmentSummary parameter
    4. **SHOULD** support artifactAssessmentTarget parameter
    5. **SHOULD** support artifactAssessmentAuthor parameter
6. **SHALL** support _draft_ using the [$draft](OperationDefinition-crmi-draft.html) operation
    2. **SHOULD** support id parameter
    4. **SHOULD** support version parameter
6. **SHALL** support _release_ using the [$release](OperationDefinition-crmi-release.html) operation
    1. **SHOULD** support id parameter
    4. **SHOULD** support version parameter
    5. **SHOULD** support versionBehavior parameter
    6. **SHOULD** support latestFromTxServer parameter
    7. **SHOULD** support experimentalBehavior parameter
    8. **SHOULD** support releaseLabel parameter
11. **SHOULD** support _clone_ using the [$clone](OperationDefinition-crmi-clone.html) operation
    2. **SHOULD** support id parameter
    4. **SHOULD** support version parameter
12. **SHOULD** support _diff_ using the [$artifact-diff](OperationDefinition-crmi-artifact-diff.html) operation
    1. **SHALL** support target parameter
    2. **SHALL** support source parameter
    3. **SHOULD** support compareComputable parameter
    4. **SHOULD** support compareExecutable parameter

> The Review and Approve actions are supported via operations, rather than interactions, because they have a specific set of input parameters and are only allowed to make certain updates to the artifacts. Although an `update` interaction could be used in theory, this would place a higher burden on the client to ensure the updated resource was only affecting appropriate elements, something the server must validate anyway.

> The Release action is supported as an operation because it is specifically asking the server to perform a series of processes involving updating statuses, dates, and potentially versions on multiple artifacts, all within the same operation. Multiple `update` interactions could in theory be used to support this, this would place a higher burden on the client to ensure the release processing was followed appropriately for the artifact and all child artifacts, recursively. In addition, all these updates would need to be performed as part of a single transaction, and the server would need to validate the transaction updates anyway.

> The Draft action is supported as an operation because it involves not only creating a new version of an artifact, but any child artifacts, recursively. This could be done in theory by the client reading all relevant artifacts and creating new resources, but an operation simplifies implementation for the client.

> The Clone action is supported as an operation because it involves not only creating a copy of the artifact, but any child artifacts, recursively. This could be done in theory by the client reading all relevant artifacts and creating new resources, but an operation simplifies implementation for the client.



---

File: repos/HL7_SLASH_crmi-ig/input/pages/artifact-terminology-service.md

{:toc}

This page describes and documents the use cases and conformance expectations of a terminology service to support authoring, distribution, and evaluation of FHIR-based knowledge artifact specifications as described in this implementation guide.

This implementation guide is not advocating for any particular central authority for terminology content, rather the intent is to propose a capability statement that enables publishers to build consistent and interoperable terminology services that support authoring, distribution, and implementation of FHIR-based knowledge artifacts.

This implementation guide is not prescriptive about authentication or authorization, but strongly recommends that these capabilities be addressed through standard mechanisms, as described in [FHIR standard security mechanisms](https://www.hl7.org/fhir/security.html). In addition, though knowledge artifacts typically do not include patient-specific information, test data for knowledge artifacts can sometimes be derived from or based on real patient information. In this cases, care must be taken to ensure the data is scrubbed to remove any possibility of violating patient privacy or security.

### Use Cases
Beyond the basic required use cases of searching, retrieving, and expanding value sets, applications that reference value sets that are defined in terms of code systems from different authorities and with different publishing timelines face common challenges related to stable expansion of those value sets. To address that general problem, this implementation guide proposes to use the Library resource as an _artifact collection_. Artifact collections are libraries of knowledge artifacts used to package sets of artifacts for development and release. From the perspective of a terminology service, artifact collections provide two main capabilities:

1. They act as a _version manifest_ to specify the versions of dependencies used by artifacts in the collection
2. They allow _expansion rules_ to be specified for value sets used by artifacts in the collection

Note that during the authoring phase, the value sets referenced by artifacts will change, but once released, the set is stable. Throughout this process, the focus of the capabilities supported by this service description are intended to ensure stable expansion of the value sets referenced by the artifacts.

#### Version Manifest
As a version manifest, an artifact collection specifies versioned canonical references for dependencies using `relatedArtifact` elements with a type of `depends-on`.
Some systems will not support the ability to version manifests, any changes needed would require a new manifest. 
(i.e. versioning of manifests is a MAY)

> NOTE: If the version of an artifact is specified explicitly as part of the declaration in the artifact, the manifest approach cannot be used to override that version. For example, if an artifact explicitly references the version of a value set, the manifest cannot override that version.

#### Expansion Rules
Artifact collections can specify _expansion rules_ for value sets referenced by artifacts in the collection. This is done using the [cqf-expansionParameters]({{site.data.fhir.ver.ext}}/StructureDefinition-cqf-expansionParameters.html) extension to reference a contained Parameters resource, where the parameter elements provide a default value for parameters to the $expand operation, consistent with the conformance requirements for the $expand operation supported by an artifact terminology service, including support for the following parameters:

1. `activeOnly`
2. `system-version` (or `canonical-version`)
3. `check-system-version` (or `check-canonical-version`)
4. `force-system-version` (or `force-canonical-version`)
5. `expansion` parameter (defined in the [crmi-valueset-expand](OperationDefinition-crmi-valueset-expand.html))
6. `includeDraft` parameter (defined in the [crmi-valueset-expand](OperationDefinition-crmi-valueset-expand.html))

Because this capability results in the potential for parameter values to be supplied in multiple places, the following rules apply:

1. If a parameter is specified as part of the $expand operation directly, it takes precedence
2. If a ValueSet dependency is specified as part of the version manifest (and no version for the value set is specified in the artifact reference), the version has the same meaning as the `valueSetVersion` parameter to the $expand
3. If a CodeSystem dependency is specified as part of the version manifest (and no version for the code system is specified in the artifact reference), the version has the same meaning as the `system-version` parameter to the $expand
4. Version information specified in the expansion parameters takes precedence over version information specified as part of the version manifest (i.e. as a relatedArtifact dependency in the artifact collection library)

> NOTE: The term _artifact collection_ can also be understood as a content Implementation Guide, in which case the ImplementationGuide resource serves as the container for the collection of artifacts; all the same discussions and use cases apply, in particular the ability to use the cqf-expansionParameters extension as described here. The [CRMIImplementationGuide](StructureDefinition-crmi-implementationguide.html) profile supports this use case.

For ImplementationGuide, this extension specifies expansion parameters to be used for all ValueSet expansions for ValueSets defined in the IG or referenced by artifacts defined in the IG.

Expansion parameters specified in the IG would override expansion parameters specified in dependency IGs, and can be overridden by expansion parameters in downstream IGs.

When the cqf-expansionParameters extension is used, it is intended to be binding (i.e. expansion SHALL take the expansion parameters into account, according to the expansion rules discussed here.

#### Hosted Content

Terminology services **MAY** act as a repository for content that is managed and created elsewhere (i.e. hosted content AKA a convenience copy), or they **MAY** provide features to author and manage content directly, or any combination. When hosting content that is managed elsewhere, the service must ensure that the content of the resource is materially the same (i.e. the values for all elements are the same where those elements are specified in the Shareable and Publishable profiles) as the source of truth. In particular, for systems that provide both management and hosting of externally managed content, the status element for hosted content **SHALL** be the same as the status of the content in the source of truth.

### Code Systems

1. **SHALL** Represent basic CodeSystem information, as specified by the [ShareableCodeSystem](http://hl7.org/fhir/shareablecodesystem.html) profile, which includes url, version, name, status, experimental, publisher, description, caseSensitive, content, and concept.

2. For published CodeSystems, **SHALL** represent publishable CodeSystem information, as specified by the [CRMIPublishableCodeSystem](StructureDefinition-crmi-publishablecodesystem.html) profile.

3. For hosted content, the data-absent-reason extension with a value of unknown **MAY** be used to satisfy required cardinality constraints of the Shareable and Publishable code system profiles when an element is not present in the source of truth for the content.

4. CodeSystem resources returned by the repository **SHALL** use the meta.profile element to indicate which profiles the CodeSystem resource conforms to.

5. **SHALL** support CodeSystem read by the server-defined id for the CodeSystem

6. **SHALL** support CodeSystem searches by:
    1. url: Returning all versions of the codesystem matching that url
    2. version: Returning the codesystem matching that version (can appear only in combination with a url search)
    3. identifier: Returning any codesystem matching the identifier
    4. name: Returning any codesystem matching the name, according to the string-matching semantics in FHIR
    5. title: Returning any codesystem matching the title, according to the string-matching semantics in FHIR
    6. description: Returning any codesystem matching the search description, according to string-matching semantics in FHIR
    7. code: Returning any codesystem with the given code

7. **SHOULD** support CodeSystem searches by:
    1. status: Returning codesystems that match the given status
    2. valueset: Returning any codesystem that is referenced by the given value set url (optionally versioned)
    4. library: Returning any codesystem that is referenced by the given library url (optionally versioned)
    4. artifact: Returning any codesystem that is referenced by the given artifact url (optionally versioned)

8. **SHALL** support [CodeSystem/$lookup](http://hl7.org/fhir/codesystem-operation-lookup.html)

9. **SHALL** support [CodeSystem/$validate-code](http://hl7.org/fhir/codesystem-operation-validate-code.html)

When determining the URI for a code system, the [HL7 Universal Terminology Governance (UTG)](http://terminology.hl7.org)
site is the source of truth. If a code system is not identified there, submit a request with the
HL7 Terminology Authority to identify an appropriate URL. For example, HCPCS Level II codes
are not specified yet, discussion can be found [here](https://chat.fhir.org/#narrow/stream/179202-terminology/topic/HCPCS.20Level.20II.20External.20Code.20System.20Information).

In accordance with the FHIR specification, CodeSystem resources, and references to code systems **SHALL** use the URI as specified by
the HL7 terminology authority. In addition, version identifiers for code systems are specified according to the rules
identified by the code system authority. For example, for SNOMED-CT, this means the version string
is required to specify the edition and the version:

```
http://snomed.info/sct/731000124108/version/20150301
```

The edition identifier for the US Edition is `731000124108`, and the version in the
above example is the March 2015 release, specified as YYYYMMDD, `20150301`.

Note that when a code system authority has not established a versioning system, terminology servers may, as a practical matter, determine an appropriate versioning system to enable consistent use of content from that code system. However, in this case, the selected versioning scheme **SHALL** be brought to the [HL7 Terminology Authority](https://confluence.hl7.org/display/TA/Terminology+Authority) for consideration as the standard versioning scheme for that code system.

### Value Sets

1. **SHALL** Represent basic ValueSet information, as specified by the [ShareableValueSet](http://hl7.org/fhir/shareablevalueset.html) profile, which includes url, version, name, status, experimental, publisher, and description.
    1. To support the ability to include specific codes that are inactive in their code systems, the following types of include elements **SHALL** be supported
        1. Concepts in a system (unspecified version)
        2. Concepts in a system (specified version)
        3. Value Sets

2. **SHALL** Represent computable ValueSet information, as specified by the [CRMIComputableValueSet](StructureDefinition-crmi-computablevalueset.html) profile, which specifies the definition of a value set using established extensions, or with the `compose` element, including in particular the ability to use the `inactive` element of the `include` to indicate that a specific code is inactive in the code system but should still be included in the expansion.

3. For hosted content, the data-absent-reason extension with a value of unknown **MAY** be used to satisfy required cardinality constraints of the Shareable and Publishable value set profiles when an element is not present in the source of truth for the content.

4. ValueSet resources returned by the repository **SHALL** use the meta.profile element to indicate which profiles the ValueSet conforms to, Shareable, Publishable, Computable, or Expanded.

5. **SHALL** Represent expanded ValueSet information, as specified by the [CRMIExpandedValueSet](StructureDefinition-crmi-expandedvalueset.html) profile, which specifies the complete content of a value set using the `expansion` element, including inactive codes specified in the compose.

6. For published ValueSets, **SHALL** represent publishable ValueSet information, as specified by the [CRMIPublishableValueSet](StructureDefinition-crmi-publishablevalueset.html) profile.

7. **SHALL** support ValueSet read, by the server-defined id for the ValueSet

8. **SHALL** support ValueSet searches by:
    1. url: Returning all versions of the valueset matching that url
    2. version: Returning the valueset matching that version (can appear only in combination with a url search)
    3. identifier: Returning any valueset matching the identifier
    4. name: Returning any valueset matching the name, according to the string-matching semantics in FHIR
    5. title: Returning any valueset matching the title, according to the string-matching semantics in FHIR
    6. status: Returning valuesets that match the given status
    7. description: Returning any valueset matching the search description, according to string-matching semantics in FHIR
    8. code: Returning any valueset with the given code
    9. keyword: Returning any valueset that has a valueset-keyword extension matching the given keyword

9. **SHOULD** support ValueSet searches by:
    1. context: Returning all artifacts with a use context value matching the given context
    2. context-type: Returning all artifacts with a use context type matching the given context type
    3. context-type-quantity: Returning all artifacts with a use context quantity or range matching the given quantity
    4. context-type-value: Returning all artifacts with a given use context type and value
    5. codesystem: Returning any valueset that directly references the given codesystem url (optionally versioned)
    6. valueset: Returning any valueset that references or is referenced by the given valueset url (optionally versioned)
    7. library: Returning any valueset that is referenced by the given library url (optionally versioned)
    8. artifact: Returning any valueset that directly or indirectly references or is referenced by the given artifact url (optionally versioned)
    9. Servers **SHOULD** support the _text and _content search parameters (as described in the [base specification](http://hl7.org/fhir/R4/search.html#text)
    10. expansion: **MAY** support the expansion parameter in combination with url or identifier (and optionally version), returning a ValueSet instance with the given expansion identifier.

10. **SHALL** Support [ValueSet/$validate-code](http://hl7.org/fhir/R4/valueset-operation-validate-code.html)
    1. **SHALL** support the url parameter
    2. **SHALL** support the valueSetVersion parameter
    3. **SHALL** support the activeOnly parameter
    4. **SHALL** support the displayLanguage parameter
    5. **SHALL** support the code parameter
    6. **SHALL** support the system parameter
    7. **SHALL** support the systemVersion parameter
    8. **SHALL** support the coding parameter
    9. **SHALL** support the codeableConcept parameter

11. Support [ValueSet/$expand](http://hl7.org/fhir/R4/valueset-operation-expand.html)
    1. **SHALL** support the url parameter
    2. **SHALL** support the valueSetVersion parameter
    3. **SHALL** support the activeOnly parameter
    4. **SHALL** support the displayLanguage parameter
    5. **SHALL** support the limitedExpansion parameter
    6. **SHALL** support the default-to-latest-version parameter
    7. **SHALL** support the system-version parameter
    8. **SHALL** support the check-system-version parameter
    9. **SHALL** support the force-system-version parameter
    10. **SHALL** support the canonicalVersion parameter (defined in the crmi-valueset-expand)
    11. **SHALL** support the checkCanonicalVersion (defined in the crmi-valueset-expand)
    12. **SHALL** support the forceCanonicalVersion (defined in the crmi-valueset-expand)
    10. **SHOULD** support includeDesignation parameter
    11. **SHOULD** support designation parameter
    12. **SHOULD** support paging parameters
    13. **SHOULD** support the `manifest` parameter (defined in the [crmi-valueset-expand](OperationDefinition-crmi-valueset-expand.html))
    14. **MAY** support the `expansion` parameter (defined in the [crmi-valueset-expand](OperationDefinition-crmi-valueset-expand.html))
    15. **SHOULD** support the `includeDraft` parameter (defined in the [crmi-valueset-expand](OperationDefinition-crmi-valueset-expand.html))

### Artifact Collections

1. **SHALL** Represent basic artifact collection information, as specified by the [CRMIManifestLibrary](StructureDefinition-crmi-manifestlibrary.html) profile, which includes identifier, title, type, date, useContext, effectivePeriod, and terminology references

2. For published artifact collections, **SHALL** represent publishable artifact collection information as specified by the [CRMIPublishableLibrary](StructureDefinition-crmi-publishablelibrary.html) profile.

3. **SHALL** support Library read, by the server-defined id for the library

4. **SHALL** support Library searches by:
    1. url: Returning all versions of the library matching that url
    2. version: Returning the library matching that version (can appear only in combination with a url search)
    3. identifier: Returning any library matching the identifier
    4. name: Returning any library matching the name, according to the string-matching semantics in FHIR
    5. title: Returning any library matching the title, according to the string-matching semantics in FHIR
    6. status: Returning libraries that match the given status
    7. description: Returning any libraries matching the search description, according to string-matching semantics in FHIR
    8. composed-of: Returning any library that includes the given measure canonical or quality program version manifest or release
    9. depends-on: Returning any library that references the given code system or value set canonical
    10. part-of: Returning any version manifest or release that is part of the given library

4. **SHALL** support specifying expansion rules for the following $expand parameters
    1. **SHALL** support the activeOnly parameter
    2. **SHALL** support the system-version parameter
    3. **SHALL** support the check-system-version parameter
    4. **SHALL** support the force-system-version parameter
    5. **SHOULD** support the `includeDraft` parameter (defined in the [crmi-valueset-expand](OperationDefinition-crmi-valueset-expand.html))
    6. **SHOULD** support other parameters
    7. **MAY** support the `expansion` parameter (defined in the [crmi-valueset-expand](OperationDefinition-crmi-valueset-expand.html))

5. Because this capability results in the potential for parameter values to be supplied in multiple places, the following rules apply:
    1. If a parameter is specified as part of the $expand operation directly, it takes precedence
    2. If a ValueSet dependency is specified as part of the version manifest (and no version for the value set is specified in the artifact reference), the version has the same meaning as the `valueSetVersion` parameter to the $expand
    3. If a CodeSystem dependency is specified as part of the version manifest (and no version for the code system is specified in the artifact reference), the version has the same meaning as the `system-version` parameter to the $expand
    4. Version information specified in the expansion parameters takes precedence over version information specified as part of the version manifest (i.e. as a relatedArtifact dependency in the artifact collection library)

6. **SHALL** support version manifest and release value set packaging: [Library/$package](OperationDefinition-crmi-package.html) operation
    1. **SHALL** support the url parameter
    2. **SHALL** support the version parameter
    3. **SHOULD** support the offset parameter
    4. **SHOULD** support the count parameter
    5. **SHOULD** support canonicalVersion parameter (overrides any canonical resource versions specified in the manifest)
    6. **SHOULD** support checkCanonicalVersion parameter (overrides any canonical resource versions specified in the manifest)
    7. **SHOULD** support forceCanonicalVersion parameter (overrides any canonical resource versions specified in the manifest)
    8. **SHOULD** support system-version parameter (overrides code system versions specified in the quality program release)
    9. **SHOULD** support check-system-version parameter (overrides code system versions specified in the quality program release)
    10. **SHOULD** support force-system-version parameter (overrides code system versions specified in the quality program release)

7. **SHALL** support operations to enable maintenance of release specifications for artifact collections using Library resources that conform to the CRMIManifestLibrary profile.
    1. **SHALL** support creating a Library in `draft` status (using POST)
    2. **SHALL** support updating a Library in `draft` status (using PUT)
    3. **SHALL** support updating the status of a Library in `draft` to `active` (using PUT)
    4. **SHALL** support updating the status of a Library in `active` status to `retired` (using PUT)
    5. **SHALL** reject attempts to update elements of a Library other than status if the Library is not in `draft` status
    6. **SHALL** reject attempts to create Libraries that have the same `url` and `version` as another library

### Server Operations

1. **SHALL** support the `metadata?mode=terminology`, returning a list of all supported code systems, whether they are explicitly made available as CodeSystem resources or not

2. To ensure performant operations with large code systems and value sets, a measure terminology service **SHALL** support [batch](https://hl7.org/fhir/http.html#transaction) operations for at least the following:
    1. CodeSystem read
    2. CodeSystem search
    3. CodeSystem/$validate-code
    4. ValueSet read
    6. ValueSet search
    7. ValueSet/$validate-code

3. Services **MAY** require authentication. If authentication is required, it **SHALL** be in the form of an authentication header (usually a bearer token) that the user can determine in advance and provide to their FHIR tooling in some configuration.

4. For all string search parameters, servers:
    1. **SHALL** support the `contains` and `exact` modifiers
    2. **SHOULD** support `text`

5. Servers **SHALL** support the expression of AND and OR search parameters for all search parameters, as defined in the [composite search parameter topic](http://hl7.org/fhir/R4/search.html#combining)


### Capability Statement

The above capabilities are formally captured in the following capability statement:

[CRMIArtifactTerminologyService](CapabilityStatement-crmi-artifact-terminology-service.html)

### Examples

#### Expansion of a value set that contains "legacy codes"

This is the computable representation of an example Chronic Liver Disease value set. It
contains two concepts that are active (as of the 2019-09 release of the US Edition of
SNOMED-CT) and one concept that was last active in the 2015-03 release).

* ChronicLiverDiseaseLegacyExample

The `compose` element of this value set is:

```
"compose": {
  "include": [
    {
      "system": "http://snomed.info/sct",
      "concept": [
        {
          "code": "1116000",
          "display": "Chronic aggressive type B viral hepatitis (disorder)"
        },
        {
          "code": "10295004",
          "display": "Chronic viral hepatitis (disorder)"
        }
      ]
    },
    {
      "system": "http://snomed.info/sct",
      "version": "http://snomed.info/sct/731000124108/version/20150301",
      "concept": [
        {
          "code": "111370006",
          "display": "Cirrhosis of liver not due to alcohol (disorder)"
        }
      ]
    }
  ]
}
```

Note specifically the use of the `inactive` element to indicate that the
value set definition contains inactive codes, and the use of separate
`include` elements, one for the codes that do not specify a code system version,
and one for the _legacy_ code from version `http://snomed.info/sct/731000124108/version/20150301`.

##### Current expand

Given the following `$expand`:

```
[base]/ValueSet/chronic-liver-disease-legacy-example/$expand
```

The expected result expansion is:

```
"expansion": {
  "timestamp": "2021-02-05T08:57:00-06:00",
  "contains": [
    {
      "system": "http://snomed.info/sct",
      "code": "1116000",
      "display": "Chronic aggressive type B viral hepatitis (disorder)"
    },
    {
      "system": "http://snomed.info/sct",
      "code": "10295004",
      "display": "Chronic viral hepatitis (disorder)"
    },
    {
      "system": "http://snomed.info/sct",
      "inactive": true,
      "code": "111370006",
      "display": "Cirrhosis of liver not due to alcohol (disorder)"
    }
  ]
}
```

Note the use of the `inactive` element to indicate the code `111370006` is inactive in the
current version of SNOMED (i.e. the version of SNOMED that was active when this
expansion was produced, and the use of the `timestamp` to ensure that date is known).

##### Current expand, activeOnly

Given the following `$expand`:

```
[base]/ValueSet/chronic-liver-disease-legacy-example/$expand?activeOnly=true
```

The expected result expansion is:

```
"expansion": {
  "timestamp": "2021-02-05T08:57:00-06:00",
  "parameter": [
    {
      "name": "activeOnly",
      "valueBoolean": true
    }
  ],
  "contains": [
    {
      "system": "http://snomed.info/sct",
      "code": "1116000",
      "display": "Chronic aggressive type B viral hepatitis (disorder)"
    },
    {
      "system": "http://snomed.info/sct",
      "code": "10295004",
      "display": "Chronic viral hepatitis (disorder)"
    }
  ]
}
```

The result of the `activeOnly` parameter is to exclude the inactive code, even
though it was explicitly included in the value set definition.

##### Version-specific expand

Given the following `$expand`:

```
[base]/ValueSet/chronic-liver-disease-legacy-example/$expand?valueSetVersion=2020-05&system-version=http://snomed.info/sct|http://snomed.info/sct/731000124108/version/20150301
```

The expected result expansion is:

```
"expansion": {
  "timestamp": "2021-02-05T08:57:00-06:00",
  "parameter": [
    {
      "name": "valueSetVersion",
      "valueString": "2020-05"
    },
    {
      "name": "system-version",
      "valueUri": "http://snomed.info/sct|http://snomed.info/sct/731000124108/version/20190901"
    }
  ],
  "contains": [
    {
      "system": "http://snomed.info/sct",
      "code": "1116000",
      "display": "Chronic aggressive type B viral hepatitis (disorder)"
    },
    {
      "system": "http://snomed.info/sct",
      "code": "10295004",
      "display": "Chronic viral hepatitis (disorder)"
    },
    {
      "system": "http://snomed.info/sct",
      "inactive": true,
      "code": "111370006",
      "display": "Cirrhosis of liver not due to alcohol (disorder)"
    }
  ]
}
```

Note this expansion contains the same codes as the `current` example, but is explicitly
bound to the 2019-09 version of the US Edition of the SNOMED code system (http://snomed.info/sct/731000124108/version/20190901).

#### Artifact Collections

From the perspective of artifact development, artifact collections are used to represent collections of artifacts in 2 different ways:

1. As an organizer for an overall collection that contains version manifests and releases over time.
2. As a collection definition that provides version bindings and expansion rules for the artifacts in the collection.

Note that as the artifacts in the collection are developed, different aspects of the definition will be specified at different points of the process. For example, the initial definition will typically include a set of artifacts, as well as an initial set of proposed code system versions to be used. This provides for stable expansion of value sets while the artifacts are being developed. As development progresses, more and more aspects of the collection definition are finalized, resulting in more versions being pinned down. To illustrate these usages, we provide three artifact collection examples, one to illustrate the overall definition of a collection, one to illustrate the selection of code systems at the beginning of a development cycle, and one to illustrate a final release of a collection definition with artifact versions, value set versions, and code system versions completely specified.

##### Collection Example

The following example illustrates an overall collection that contains multiple version manifests and releases over time:

* [Manifest Library](Library-manifest-example.html)

Note that as an organizer, this library just contains the collection-level information.

##### Draft Collection Example

This example illustrates the use of a draft quality program description to specify the version of SNOMED to be used for valuesets used by artifacts in the quality program.

```
"contained": [
  {
    "resourceType": "Parameters",
    "id": "exp-params",
    "parameter": [
      {
        "name" : "system-version",
        "valueUri" : "http://snomed.info/sct|http://snomed.info/sct/731000124108/version/20190901"
      },
      {
        "name": "activeOnly",
        "valueBoolean": true
      },
      {
        "name": "includeDraft",
        "valueBoolean": true
      }
    ]
  }
],
"extension": [
  {
    "url": "http://hl7.org/fhir/uv/crmi/StructureDefinition/crmi-expansionParameters",
    "valueReference": {
      "reference": "#exp-params"
    }
  }
],
```

This example indicates that unless specified explicitly by artifacts in the collection, the 2019-09-01 version of SNOMED **SHALL** be used when expanding value sets that reference SNOMED.

Note that the version of SNOMED in use is still listed as a dependency in the artifact collection to support providing a complete listing of dependencies in the version manifest. When this is done, the version provided in the expansion parameters **SHALL** take precedence (though the version manifest **SHOULD** be consistent with the expansion parameters).

```
"relatedArtifact": [
  {
    "type": "depends-on",
    "resource": "http://snomed.info/sct|http://snomed.info/sct/731000124108/version/20190901",
    "display": "SNOMED-CT US Edition, 2019-09-01"
  }
]
```

##### Release Artifact Collection

The following example illustrates a collection that is an _active_ instance of an artifact collection release used to provide stable extensions for the released artifacts in the collection.

Specifically, the collection release uses the `expansion` parameter in the contained expansion parameters at the artifact collection level to indicate that all value sets used with artifacts in the program should expand using this expansion identifier:

```
{
  "name": "expansion",
  "valueUri": "eCQM%20Update%202020-05-07"
}
```

In addition, the collection release specifies versions of code systems, value sets, and artifacts included in the release:

```
{
  "type": "depends-on",
  "resource": "http://snomed.info/sct|http://snomed.info/sct/731000124108/version/20190901",
  "display": "SNOMED-CT US Edition, 2019-09-01"
},
{
  "type": "depends-on",
  "resource": "http://hl7.org/fhir/uv/crmi/ValueSet/chronic-liver-disease-legacy-example|2020-05",
  "display": "Chronic Liver Disease, Legacy Example (2020-05)"
},
{
  "type": "composed-of",
  "resource": "http://hl7.org/fhir/uv/crmi/Measure/measure-exm124-FHIR|9.0.0",
  "display": "Cervical Cancer Screening"
},
{
  "type": "composed-of",
  "resource": "http://hl7.org/fhir/uv/crmi/Measure/measure-exm125-FHIR",
  "display": "Breast Cancer Screening"
},
{
  "type": "composed-of",
  "resource": "http://hl7.org/fhir/uv/crmi/Measure/measure-exm130-FHIR",
  "display": "Colorectal Cancer Screening"
},
{
  "type": "composed-of",
  "resource": "http://hl7.org/fhir/uv/crmi/Measure/measure-exm146-FHIR",
  "display": "Appropriate Testing for Children with Pharyngitis"
}
```

##### Expansion with manifests and releases:

Given this use of an artifact collection, the _manifest_ parameter can be used in the `$expand` operation to provide values for the relevant parameters:

```
[base]/ValueSet/chronic-liver-disease-legacy-example/$expand?manifest=http://hl7.org/fhir/uv/crmi/Library/ecqm-update-2020
```

This is effectively an alternative mechanism for expressing the same value set and code system version specific expansion above, and results in the same expansion, with the additional `manifest` parameter:

```
"expansion": {
  "timestamp": "2021-02-05T08:57:00-06:00",
  "parameter": [
    {
      "name": "valueSetVersion",
      "valueString": "2020-05"
    },
    {
      "name": "system-version",
      "valueUri": "http://snomed.info/sct|http://snomed.info/sct/731000124108/version/20190901"
    },
    {
      "name": "manifest",
      "valueUri": "http://hl7.org/fhir/uv/crmi/Library/ecqm-update-2020"
    }
  ],
  "contains": [
    {
      "system": "http://snomed.info/sct",
      "code": "1116000",
      "display": "Chronic aggressive type B viral hepatitis (disorder)"
    },
    {
      "system": "http://snomed.info/sct",
      "code": "10295004",
      "display": "Chronic viral hepatitis (disorder)"
    },
    {
      "system": "http://snomed.info/sct",
      "inactive": true,
      "code": "111370006",
      "display": "Cirrhosis of liver not due to alcohol (disorder)"
    }
  ]
}
```

Similarly, when using a release for the manifest parameter:

```
[base]/ValueSet/chronic-liver-disease-legacy-example/$expand?manifest=http://hl7.org/fhir/uv/crmi/Library/ecqm-update-2020-05-07
```

This is effectively the same as providing the `expansion` parameter to the value set expand, and results in the expansion with the specified expansion identifier:

```
"expansion": {
  "identifier": "eCQM%20Update%202020-05-07",
  "timestamp": "2021-02-05T08:57:00-06:00",
  "parameter": [
    {
      "name": "valueSetVersion",
      "valueString": "2020-05"
    },
    {
      "name": "system-version",
      "valueUri": "http://snomed.info/sct|http://snomed.info/sct/731000124108/version/20190901"
    },
    {
      "name": "manifest",
      "valueUri": "http://hl7.org/fhir/uv/crmi/Library/ecqm-update-2020-05-07"
    }
  ],
  "contains": [
    {
      "system": "http://snomed.info/sct",
      "code": "1116000",
      "display": "Chronic aggressive type B viral hepatitis (disorder)"
    },
    {
      "system": "http://snomed.info/sct",
      "code": "10295004",
      "display": "Chronic viral hepatitis (disorder)"
    },
    {
      "system": "http://snomed.info/sct",
      "inactive": true,
      "code": "111370006",
      "display": "Cirrhosis of liver not due to alcohol (disorder)"
    }
  ]
}
```

#### Value Set Searches

##### Expansion Search

In addition to the use of the `expansion` parameter of the `$expand` operation, terminology services **SHOULD** support searching for a particular ValueSet expansion using the `expansion` search parameter:

```
[base]/ValueSet?url=http://hl7.org/fhir/uv/crmi/ValueSet/chronic-liver-disease-legacy-example&expansion=eCQM%20Update%202020-05-07
```

The result of this search is the same as requesting an `$expand` with the `expansion` parameter.

##### Summary Search 

{}summary is a as either a SHOULD support search parameter. The _{}summary{_} search parameter would allow responding with partial-data sets of artifacts, which may be desirable to boost performance for certain actions.


---

File: repos/HL7_SLASH_crmi-ig/input/pages/capabilities.md

{:toc}

{: #capabilities}

This implementation guide defines capability statements, use cases, and conformance requirements for an artifact terminology service, as well as several levels of support for an artifact repository service. Note that these capabilities could potentially be provided by the same service, but the capability statements are separated in order to facilitate implementation as part of an existing terminology service, or as a separate service as appropriate for the architecture of the implementation environment.

In addition, the terminology service capability statement is specifically focused on support for terminology-capabilities required for authoring, distribution, and implementation of knowledge artifacts, including version manifest support.

These capability statements are required to ensure conformance expectations are met for services that support artifact content development, distribution, and implementation. The profiles in this implementation guide are specifically about supporting those aspects of the content development lifecycle, so the terminology and artifact services need to provide resources that conform to the expectations of the profiles defined in this implementation guide.

* [**Artifact Terminology Service**](artifact-terminology-service.html)
* [**Artifact Repository**](artifact-repository-service.html)



---

File: repos/HL7_SLASH_crmi-ig/input/pages/changes.md

{: toc}

{: #changes}

This page details changes made in each version of the Canonical Resource Management Infrastructure IG.

### STU1 Publication (version 1.0.0)

The following changes were made as a result of comments received in the January ballot:

> NOTE: This changelist is inclusive of changes published in the 1.0.0-snapshot version

#### Compatible, Substantive Changes

* [FHIR-44936](https://jira.hl7.org/browse/FHIR-44936): Clarify valueFilter extension usage
* [FHIR-44900](https://jira.hl7.org/browse/FHIR-44900): Terminology Service Artifact Collections Conformance Additions
* [FHIR-44769](https://jira.hl7.org/browse/FHIR-44769): Knowledge Artifact Management Additions
* [FHIR-44767](https://jira.hl7.org/browse/FHIR-44767): Authoring Artifact Repository Additions
* [FHIR-44766](https://jira.hl7.org/browse/FHIR-44766): Publishable Artifact Repository Additions
* [FHIR-44728](https://jira.hl7.org/browse/FHIR-44728): Add MAY or SHOULD support _summary
* [FHIR-44064](https://jira.hl7.org/browse/FHIR-44064): Allow isOwned extension to be used on library elements
* [FHIR-43943](https://jira.hl7.org/browse/FHIR-43943): Artifact Repository Operation specificity
* [FHIR-43576](https://jira.hl7.org/browse/FHIR-43576): An 'artifact-diff' operation should be defined
* [FHIR-42233](https://jira.hl7.org/browse/FHIR-42233): Consider anchoring canonical in THO 1

#### Non-Substantive Changes

* [FHIR-45363](https://jira.hl7.org/browse/FHIR-45363): Missing parameters in $draft
* [FHIR-45155](https://jira.hl7.org/browse/FHIR-45155): In the Diff operation's compareExecutable parameter description indicates that its computable rather than executable (copy/paste error?)
* [FHIR-44990](https://jira.hl7.org/browse/FHIR-44990): Clarification of valueFilter extension
* [FHIR-44734](https://jira.hl7.org/browse/FHIR-44734): Explain isSelective extension in terms of partial execution
* [FHIR-44729](https://jira.hl7.org/browse/FHIR-44729): Repository Service Draft Operation Description
* [FHIR-44508](https://jira.hl7.org/browse/FHIR-44508): Terminology Resource inclusion should be explained
* [FHIR-44252](https://jira.hl7.org/browse/FHIR-44252): Coordinate with the authors of Using CQL with FHIR ballot.
* [FHIR-44251](https://jira.hl7.org/browse/FHIR-44251): This page doesn't seem to be defined properly. 3
* [FHIR-44250](https://jira.hl7.org/browse/FHIR-44250): This page doesn't seem to be defined properly. 2
* [FHIR-44249](https://jira.hl7.org/browse/FHIR-44249): This page doesn't seem to be defined properly. 1
* [FHIR-44247](https://jira.hl7.org/browse/FHIR-44247): Code Systems and Valuesets should be anchored in THO (terminology.hl7.org) 1
* [FHIR-44246](https://jira.hl7.org/browse/FHIR-44246): Use the existing Value Set
* [FHIR-44100](https://jira.hl7.org/browse/FHIR-44100): Incrementing version numbers resets version number to the right
* [FHIR-44096](https://jira.hl7.org/browse/FHIR-44096): Artifact Capability Profiles table has typos in Executable column
* [FHIR-44093](https://jira.hl7.org/browse/FHIR-44093): Remove guidance to construct canonical URL using resource name
* [FHIR-44092](https://jira.hl7.org/browse/FHIR-44092): Move Software System Type Codes code system to THO when sufficiently mature
* [FHIR-44062](https://jira.hl7.org/browse/FHIR-44062): Update dependency tracing for $package
* [FHIR-44002](https://jira.hl7.org/browse/FHIR-44002): Draft version
* [FHIR-44001](https://jira.hl7.org/browse/FHIR-44001): Phases don't align with diagram
* [FHIR-44000](https://jira.hl7.org/browse/FHIR-44000): Run on sentences exist in specification
* [FHIR-43999](https://jira.hl7.org/browse/FHIR-43999): Downstream system B
* [FHIR-43998](https://jira.hl7.org/browse/FHIR-43998): Misspelling of read-only
* [FHIR-43997](https://jira.hl7.org/browse/FHIR-43997): NPM is not an acronym for Node Package Manager
* [FHIR-43996](https://jira.hl7.org/browse/FHIR-43996): Duplication of Acronym Definitions
* [FHIR-43995](https://jira.hl7.org/browse/FHIR-43995): Incorrectly assigned acrynoym
* [FHIR-43994](https://jira.hl7.org/browse/FHIR-43994): IG Acronym Established after the use of IG acronym
* [FHIR-43992](https://jira.hl7.org/browse/FHIR-43992): an end of list markup element is visible in the ballot
* [FHIR-43991](https://jira.hl7.org/browse/FHIR-43991): IG Typo
* [FHIR-43945](https://jira.hl7.org/browse/FHIR-43945): Lifecycle restrictions
* [FHIR-43944](https://jira.hl7.org/browse/FHIR-43944): Additional TCs for Artifact Repository
* [FHIR-43941](https://jira.hl7.org/browse/FHIR-43941): Clarify semver info
* [FHIR-43940](https://jira.hl7.org/browse/FHIR-43940): Consistency "work flow" vs "workflow"
* [FHIR-43939](https://jira.hl7.org/browse/FHIR-43939): Security, Authorization, and Knowledge Artifacts
* [FHIR-43935](https://jira.hl7.org/browse/FHIR-43935): Figure numbering and labeling consistency
* [FHIR-43831](https://jira.hl7.org/browse/FHIR-43831): Fix numerous spelling errors
* [FHIR-43830](https://jira.hl7.org/browse/FHIR-43830): Fix Introduction page html
* [FHIR-43826](https://jira.hl7.org/browse/FHIR-43826): Include use of terminology.hl7.org root for created terminology content
* [FHIR-43769](https://jira.hl7.org/browse/FHIR-43769): Section 2.0.4 - name diagram and spell out abbreviations
* [FHIR-43766](https://jira.hl7.org/browse/FHIR-43766): Make sure all instances of "IG" are capitalized
* [FHIR-43750](https://jira.hl7.org/browse/FHIR-43750): 'Becasue' Typo
* [FHIR-43716](https://jira.hl7.org/browse/FHIR-43716): State that versioning of manifests is an optional capability
* [FHIR-43709](https://jira.hl7.org/browse/FHIR-43709): Name and title should be unique within canonical base
* [FHIR-43575](https://jira.hl7.org/browse/FHIR-43575): Draft Operation should clear out effectivePeriod values
* [FHIR-43339](https://jira.hl7.org/browse/FHIR-43339): Better explain Expansion Parameters
* [FHIR-42591](https://jira.hl7.org/browse/FHIR-42591): Fix listing of all URLs
* [FHIR-42183](https://jira.hl7.org/browse/FHIR-42183): Knowledge Artifact Lifecycle diagram has two System Bs

### STU1 Ballot2 (version 1.0.0-ballot2)

Reballot of STU1 material with ballot comments applied.

#### Change Summary

This ballot made the following major changes:

* Refactored CQL-specific content to the [Using FHIR With CQL](http://build.fhir.org/ig/HL7/cql-ig) Implementation Guide
* Separated Shareable profiles into peer capability profiles, rather than Shareable being parent of the other capability profiles
* Clarified scope of use for the implementation guide
* Clarified definitions of _artifact_, _canonical resource_, and artifact categories
* Changed most usage of non-canonical resources to use profiling, rather than trying to establish definitional artifacts for resources such as Location, CareTeam, Organization, and Practitioner
* Numerous clarifications and fixes throughout

The following sections detail the changes that were applied for this ballot.

#### Non-Compatible changes

* [FHIR-42730](https://jira.hl7.org/browse/FHIR-42730): Clarify scope of use for the IG
* [FHIR-42592](https://jira.hl7.org/browse/FHIR-42592): Is output a Library or a Bundle?
* [FHIR-42555](https://jira.hl7.org/browse/FHIR-42555): Querying by resource id for content in an IG is useless
* [FHIR-41367](https://jira.hl7.org/browse/FHIR-41367): Shareable shouldn't be the parent of other profiles

#### Compatible, Substantive Changes

* [FHIR-43076](https://jira.hl7.org/browse/FHIR-43076): Use a dataAbsentReason extension to indicate missing results
* [FHIR-43075](https://jira.hl7.org/browse/FHIR-43075): Add guidance on missing information
* [FHIR-43034](https://jira.hl7.org/browse/FHIR-43034): Add profile to ParameterDefinition
* [FHIR-42919](https://jira.hl7.org/browse/FHIR-42919): Add support for artifact manifests in the manifest profile
* [FHIR-42804](https://jira.hl7.org/browse/FHIR-42804): Package Operation type + examples for different types
* [FHIR-42598](https://jira.hl7.org/browse/FHIR-42598): CapabilityStatements are too narrow
* [FHIR-42594](https://jira.hl7.org/browse/FHIR-42594): Exhaustive list isn't possible
* [FHIR-42564](https://jira.hl7.org/browse/FHIR-42564): Why only one library per resource?
* [FHIR-42018](https://jira.hl7.org/browse/FHIR-42018): Define the meaning of Must Support
* [FHIR-41874](https://jira.hl7.org/browse/FHIR-41874): Add a testArtifact extension

#### Non-Substantive Changes

* [FHIR-44733](https://jira.hl7.org/browse/FHIR-44733): Explain isSelective extension in terms of partial execution
* [FHIR-44506](https://jira.hl7.org/browse/FHIR-44506): Broken hyperlinks for HEDIS IG(removed) and World Health Organization Antenatal Care (WHO ANC)
* [FHIR-43998](https://jira.hl7.org/browse/FHIR-43998): Misspelling of read-only
* [FHIR-43997](https://jira.hl7.org/browse/FHIR-43997): NPM is not an acronym for Node Package Manager
* [FHIR-43995](https://jira.hl7.org/browse/FHIR-43995): Incorrectly assigned acrynoym
* [FHIR-43992](https://jira.hl7.org/browse/FHIR-43992): An end of list markup element is visible in the ballot
* [FHIR-43991](https://jira.hl7.org/browse/FHIR-43991): IG is an acronym and should be capitalized.
* [FHIR-42921](https://jira.hl7.org/browse/FHIR-42921): Consider requiring the use of a SignatureLevel higher than none
* [FHIR-42803](https://jira.hl7.org/browse/FHIR-42803): Artifact dropdown doesn't show all artifacts e.g. operationdefinitions. 
* [FHIR-42601](https://jira.hl7.org/browse/FHIR-42601): All local code systems must be temp or approved by TSMG
* [FHIR-42600](https://jira.hl7.org/browse/FHIR-42600): Extensions are not discussed in text
* [FHIR-42599](https://jira.hl7.org/browse/FHIR-42599): Operations not discussed in text
* [FHIR-42597](https://jira.hl7.org/browse/FHIR-42597): Why does a CRMI terminology service need library?
* [FHIR-42596](https://jira.hl7.org/browse/FHIR-42596): Explain the profiles
* [FHIR-42595](https://jira.hl7.org/browse/FHIR-42595): "Distribution client capabilities" isn't complete
* [FHIR-42593](https://jira.hl7.org/browse/FHIR-42593): Explain data-requirements operation better
* [FHIR-42590](https://jira.hl7.org/browse/FHIR-42590): it's -> its
* [FHIR-42589](https://jira.hl7.org/browse/FHIR-42589): Explain example
* [FHIR-42588](https://jira.hl7.org/browse/FHIR-42588): Use '[base]'
* [FHIR-42587](https://jira.hl7.org/browse/FHIR-42587): Explain context of 'publishing' better
* [FHIR-42585](https://jira.hl7.org/browse/FHIR-42585): What are 'appropraite' IP rules?
* [FHIR-42584](https://jira.hl7.org/browse/FHIR-42584): What profile?
* [FHIR-42583](https://jira.hl7.org/browse/FHIR-42583): Clarify packaging rules
* [FHIR-42582](https://jira.hl7.org/browse/FHIR-42582): Explain 'processed as a unit'
* [FHIR-42581](https://jira.hl7.org/browse/FHIR-42581): There's no need for operation namespaces
* [FHIR-42580](https://jira.hl7.org/browse/FHIR-42580): Explain canonical URL pattern
* [FHIR-42579](https://jira.hl7.org/browse/FHIR-42579): Explain consistency of artifacts
* [FHIR-42578](https://jira.hl7.org/browse/FHIR-42578): Fix typo
* [FHIR-42577](https://jira.hl7.org/browse/FHIR-42577): Consider dropping the CQL page
* [FHIR-42576](https://jira.hl7.org/browse/FHIR-42576): ModelInfo section is empty
* [FHIR-42575](https://jira.hl7.org/browse/FHIR-42575): Don't repeat FHIR core spec
* [FHIR-42574](https://jira.hl7.org/browse/FHIR-42574): Libraries are not required for CQL
* [FHIR-42573](https://jira.hl7.org/browse/FHIR-42573): Explaing conformance requirement 4.12
* [FHIR-42571](https://jira.hl7.org/browse/FHIR-42571): Representation in a Library needs clarification
* [FHIR-42570](https://jira.hl7.org/browse/FHIR-42570): Code URI expectation inconsistent
* [FHIR-42569](https://jira.hl7.org/browse/FHIR-42569): What is "knowledge artifact CQL"?
* [FHIR-42568](https://jira.hl7.org/browse/FHIR-42568): Why so much discussion about VSAC in an international spec?
* [FHIR-42567](https://jira.hl7.org/browse/FHIR-42567): Use a value set avoiding OIDs
* [FHIR-42566](https://jira.hl7.org/browse/FHIR-42566): Update location of code system URIs
* [FHIR-42565](https://jira.hl7.org/browse/FHIR-42565): How is the association between a namespace and URI established?
* [FHIR-42563](https://jira.hl7.org/browse/FHIR-42563): Assert assumption about state transition order
* [FHIR-42562](https://jira.hl7.org/browse/FHIR-42562): Put versioning stuff together
* [FHIR-42561](https://jira.hl7.org/browse/FHIR-42561): Explain identifier rules
* [FHIR-42560](https://jira.hl7.org/browse/FHIR-42560): Better explain library declarations
* [FHIR-42559](https://jira.hl7.org/browse/FHIR-42559): Clarify language around CQL artifacts
* [FHIR-42558](https://jira.hl7.org/browse/FHIR-42558): Using CQL shouldn't be the second entry
* [FHIR-42556](https://jira.hl7.org/browse/FHIR-42556): Distribution shouldn't require libraries
* [FHIR-42554](https://jira.hl7.org/browse/FHIR-42554): Fix "This is compatiable with"
* [FHIR-42553](https://jira.hl7.org/browse/FHIR-42553): Fix arbitrary capitalization
* [FHIR-42552](https://jira.hl7.org/browse/FHIR-42552): Presume FHIR understanding or reference
* [FHIR-42551](https://jira.hl7.org/browse/FHIR-42551): Second diagram is confusing
* [FHIR-42550](https://jira.hl7.org/browse/FHIR-42550): This isn't about Clinical Reasoning
* [FHIR-42549](https://jira.hl7.org/browse/FHIR-42549): Data Repository examples are weird mix of concepts
* [FHIR-42548](https://jira.hl7.org/browse/FHIR-42548): Increase text size
* [FHIR-42547](https://jira.hl7.org/browse/FHIR-42547): This is a weird thing to say
* [FHIR-42546](https://jira.hl7.org/browse/FHIR-42546): Improve authoring knowledge repository and terminology service explanation
* [FHIR-42545](https://jira.hl7.org/browse/FHIR-42545): Drop 'clinical'
* [FHIR-42544](https://jira.hl7.org/browse/FHIR-42544): Fix ordering of sections
* [FHIR-42543](https://jira.hl7.org/browse/FHIR-42543): Explain Shareable/Publishle/etc.
* [FHIR-42542](https://jira.hl7.org/browse/FHIR-42542): Use the short dependency summary
* [FHIR-42541](https://jira.hl7.org/browse/FHIR-42541): Explain non-canonical definitional
* [FHIR-42358](https://jira.hl7.org/browse/FHIR-42358): context for cqf-artifactComment extension
* [FHIR-42357](https://jira.hl7.org/browse/FHIR-42357): Clarify Relationship between CRMI and FHIR Clinical Guidelines
* [FHIR-42354](https://jira.hl7.org/browse/FHIR-42354): Fix targeted link for 19.2 Version Manifest
* [FHIR-42352](https://jira.hl7.org/browse/FHIR-42352): Fix manifest specification link
* [FHIR-42351](https://jira.hl7.org/browse/FHIR-42351): Clarify Dependency Tracing
* [FHIR-42340](https://jira.hl7.org/browse/FHIR-42340): Provide more guidance on versioning
* [FHIR-42239](https://jira.hl7.org/browse/FHIR-42239): Typo: namepsace
* [FHIR-42187](https://jira.hl7.org/browse/FHIR-42187): Typo: paramaters
* [FHIR-42186](https://jira.hl7.org/browse/FHIR-42186): Heading stops mid-sentence
* [FHIR-42182](https://jira.hl7.org/browse/FHIR-42182): SUSHI should be all-caps
* [FHIR-42083](https://jira.hl7.org/browse/FHIR-42083): Naming convention correction
* [FHIR-42082](https://jira.hl7.org/browse/FHIR-42082): Knowledge artifact publication process
* [FHIR-42080](https://jira.hl7.org/browse/FHIR-42080): Describe "Knowledge Artifact"
* [FHIR-42079](https://jira.hl7.org/browse/FHIR-42079): In the Home or Introduction, describe "Content IG" and why it is different from typical IGs.
* [FHIR-42078](https://jira.hl7.org/browse/FHIR-42078): Incomplete sentence "This is compatible with" on 7.1.1 heading
* [FHIR-42019](https://jira.hl7.org/browse/FHIR-42019): Complete section "Distribution client capabilities", or remove
* [FHIR-42017](https://jira.hl7.org/browse/FHIR-42017): Consider bold formatting Conformance verbs
* [FHIR-42016](https://jira.hl7.org/browse/FHIR-42016): Please reframe material to fit the context and presentation of the IG
* [FHIR-42015](https://jira.hl7.org/browse/FHIR-42015): The In-Scope/Out-of-Scope image is confusing
* [FHIR-42014](https://jira.hl7.org/browse/FHIR-42014): A "TODO" should not be in the final published version
* [FHIR-42013](https://jira.hl7.org/browse/FHIR-42013): Formatting and content issues in the Using CQL page
* [FHIR-42012](https://jira.hl7.org/browse/FHIR-42012): Links on introduction page seem to be incorrect
* [FHIR-42011](https://jira.hl7.org/browse/FHIR-42011): Type in description of an artifact
* [FHIR-42010](https://jira.hl7.org/browse/FHIR-42010): Define the acronym EBM
* [FHIR-42008](https://jira.hl7.org/browse/FHIR-42008): Correct a number of word misspellings
* [FHIR-41962](https://jira.hl7.org/browse/FHIR-41962): Packaging typo/correction
* [FHIR-41961](https://jira.hl7.org/browse/FHIR-41961): Packaging terminologies
* [FHIR-41960](https://jira.hl7.org/browse/FHIR-41960): Naming convention typo
* [FHIR-41957](https://jira.hl7.org/browse/FHIR-41957): FHIR Server Clarification
* [FHIR-41896](https://jira.hl7.org/browse/FHIR-41896): Assure clear definitions up front
* [FHIR-41870](https://jira.hl7.org/browse/FHIR-41870): Spelling corrections in Naming Conventions section
* [FHIR-41869](https://jira.hl7.org/browse/FHIR-41869): No content in this ModelInfo section of Using CQL
* [FHIR-41868](https://jira.hl7.org/browse/FHIR-41868): Provide more context in examples
* [FHIR-41785](https://jira.hl7.org/browse/FHIR-41785): Clarify that an artifact may only be owned by one parent
* [FHIR-41695](https://jira.hl7.org/browse/FHIR-41695): missing content: Distribution client capabilities
* [FHIR-41328](https://jira.hl7.org/browse/FHIR-41328): Document conventions used in the IG

### STU1 Ballot (version 1.0.0-ballot)

Initial ballot material, prepared by refactoring relevant content from related implementation guides:

From [FHIR Clinical Guidelines (STU1)](http://hl7.org/fhir/uv/cpg/STU1):
* [Using Libraries](https://hl7.org/fhir/uv/cpg/STU1/libraries.html)
* [Artifact Profiles](https://hl7.org/fhir/uv/cpg/STU1/profiles.html#artifact-profiles)
* [Terminology](https://hl7.org/fhir/uv/cpg/terminology.html#terminology)
From [Quality Measures IG (STU4)](http://hl7.org/fhir/us/cqfmeasures/STU4)
* [Using CQL](https://hl7.org/fhir/us/cqfmeasures/STU4/using-cql.html)
* [Packaging](https://hl7.org/fhir/us/cqfmeasures/STU4/packaging.html)
* [Capability Profiles](https://hl7.org/fhir/us/cqfmeasures/STU4/profiles.html)
* [Measure Terminology Service](https://hl7.org/fhir/us/cqfmeasures/STU4/measure-terminology-service.html)
* [Measure Repository](https://hl7.org/fhir/us/cqfmeasures/STU4/measure-repository-service.html)
From [QI Core (STU5)](https://hl7.org/fhir/us/qicore/STU5)
* [Negation](https://hl7.org/fhir/us/qicore/STU5/#negation-in-qi-core)
* [Patterns](https://hl7.org/fhir/us/qicore/STU5/patterns.html)
* [ModelInfo](https://hl7.org/fhir/us/qicore/STU5/modelinfo.html)
From [Case Reporting (STU2.1.1)](https://hl7.org/fhir/us/ecr/STU2.1.1/)
* [Computable Library](https://hl7.org/fhir/us/ecr/STU2.1.1/StructureDefinition-us-ph-computable-library.html)
* [Computable ValueSet](https://hl7.org/fhir/us/ecr/STU2.1.1/StructureDefinition-us-ph-computable-valueset.html)
* [Executable Library](https://hl7.org/fhir/us/ecr/STU2.1.1/StructureDefinition-us-ph-executable-library.html)
* [Executable ValueSet](https://hl7.org/fhir/us/ecr/STU2.1.1/StructureDefinition-us-ph-executable-valueset.html)


---

File: repos/HL7_SLASH_crmi-ig/input/pages/distribution.md

{:toc}

{: #distribution}

Distribution involves the APIs for searching and retrieving published artifacts. There are a few APIs this IG supports, including:

* [FHIR Package / NPM](#distribution-fhir-package)
* [FHIR REST API](#distribution-fhir-rest)
* [$package and $data-requirements](#package-and-data-requirements)
* [Manifest support](#distribution-manifest) for canonical version specification
* [Syndication (Atom RSS)](#distribution-syndication)

### FHIR Packages / NPM
{: #distribution-fhir-package}

Like publishing, [FHIR Packages](https://hl7.org/fhir/packages.html) are a way to distribute content. This is compatible with IG Publisher, SUSHI and the NPM client.

```
npm --registry=http://fhir-package-registry install @scope/fhir.uv.test.my-package
```

This example illustrates the use of an NPM package registry to install IG packages as NPM packages. This example also illustrates the use of NPM Scopes for FHIR packages.

### FHIR REST API
{: #distribution-fhir-rest}

Read and search operations can be used to distribute artifacts, see [Artifact Repository](artifact-repository-service.html) and [Artifact Terminology Service](artifact-terminology-service.html) capability statements. FHIR read and search **SHOULD** be available for all canonical resources.

### $package and $data-requirements
{: #package-and-data-requirements}

Downstream systems **MAY** require all content dependencies. These dependencies can cross IG/package boundaries, as intended for reusability (e.g. a common Library could be used by two Measures, or an ActivityDefinition could be used by several PlanDefinitions in different content IGs). Furthermore, some content might have been published outside a content IG/FHIR Package.

<div style="max-width:800px;">
{% include img.html img="CRMI-PackageOperation.png" %}
</div>

To facilitate this, a downstream system MAY use the `$package` or `$data-requirements` operation(s) on a canonical resource to resolve dependencies.

* [$package](OperationDefinition-crmi-package.html): The Artifact Repository assembles a FHIR Bundle of the target resource, and all of its dependencies for a client.
* [$data-requirements](OperationDefinition-crmi-data-requirements.html): The Artifact Repository assembles a FHIR Library with all the dependencies listed. The client can then download as needed.

NOTE: $data-requirements allows the client to decide what is needed to download (versus what might already have been downloaded), whereas $package always ships the actual resources.

Both `$package` and `$data-requirements` operations are available for all canonical resources:

1. StructureDefinition, StructureMap
2. ValueSet, CodeSystem, NamingSystem, ConceptMap
3. Questionnaire, ActivityDefinition, PlanDefinition, Library, Measure
4. ObservationDefinition, SpecimenDefinition, MedicationKnowledge, etc...

NOTE: To recreate the contents of a FHIR Package, the `$package` operation could be called on the `ImplementationGuide` resource with appropriate parameters to only include local resources defined in the package (i.e. `packageOnly` set to `true`).

### Dependency Tracing

Dependency tracing is the process of determining, given a root artifact, what other artifacts are referenced by the artifact, recursively, to produce a complete listing of all the artifacts (or _dependencies_) required for the artifact to be used. Because FHIR artifacts in general have many different ways of referencing other artifacts, the process needs to be described per resource type. In addition, because new extensions can be introduced and used at any point, the process needs to support a mechanism for allowing new content to indicate whether it constitutes a dependency for this purpose.

In general, the process considers each element of a resource and, if it is a canonical reference, or a reference to an "artifact" resource as described by this implementation guide, it is traced. In addition, extensions used in quality improvement profiles such as Clinical Guidelines and Quality Measures, are considered.

The following sections describe the dependency references for each type of resource. Note that this dependency-listing is not exhaustive, but captures the required dependencies for the quality improvement use case. The [cqf-shouldTraceDependency]({{site.data.fhir.ver.ext}}/StructureDefinition-cqf-shouldTraceDependency.html) extension can be used in the definition of an extension or profile to indicate whether the element should be traced as a dependency for the purposes of packaging and distribution.

Each section provides a listing of the paths to each element that should be considered as a reference to an artifact (and recursively traced for dependencies as well) using a FHIRPath-like syntax, with abbreviated references to the names of extensions to be followed.

Note that the following extensions may be safely ignored for the purposes of dependency tracing:

```
StructureDefinition http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support
StructureDefinition http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support
StructureDefinition http://hl7.org/fhir/StructureDefinition/codesystem-properties-mode
```

#### Resource

```
meta.profile
```

#### Structure Definition

> For structure definitions, only the differential element is considered, on the basis that the baseDefinition will be traced, so anything in the snapshots will be covered by tracing up the hierarchy.

```
extension[].url
modifierExtension[].url
baseDefinition
differential.element[].type.code
differential.element[].type.profile[]
differential.element[].type.targetProfile[]
differential.element[].binding.valueSet
differential.element[].extension[].url
differential.element[].modifierExtension[].url
extension[cpg-inferenceExpression].reference
extension[cpg-assertionExpression].reference
extension[cpg-featureExpression].reference
```

#### Structure Map
```
structure[].url
import[]
group[].rule[]..source[].defaultValue[x]
```

#### ValueSet

```
compose.include[].valueSet
compose.include[].system
compose.exclude[].valueSet
compose.exclude[].system
```

#### CodeSystem

```
valueSet // NOTE: This element may be skipped because if the value set is really used by artifacts it will be referenced
supplements
```

#### NamingSystem
```
(none)
```

#### ConceptMap

```
sourceCanonical
targetCanonical
group.source
group.target
group[].element[].target[].dependsOn[].system
group[].element[].target[].product[]..system
unmapped.url
```

#### Questionnaire

```
derivedFrom
item[]..definition // NOTE: This is not a simple canonical, it will have a fragment to identify the specific element
item[]..answerValueSet
item[]..extension[itemMedia]
item[]..extension[itemAnswerMedia]
item[]..extension[unitValueSet]
item[]..extension[referenceProfile]
item[]..extension[candidateExpression].reference
item[]..extension[lookupQuestionnaire]
extension[cqf-library]
extension[launchContext]
extension[variable].reference
item[]..extension[variable].reference
item[]..extension[initialExpression].reference
item[]..extension[calculatedExpression].reference
item[]..extension[cqf-calculatedValue].reference
item[]..extension[cqf-expression].reference
item[]..extension[sdc-questionnaire-subQuestionnaire]
```

#### ActivityDefinition

```
relatedArtifact[].resource
library[]
profile
location
productReference
specimenRequirement[]
observationRequirement[]
observationResultRequirement[]
transform
extension[cpg-collectWith]
extension[cpg-enrollIn]
extension[cpg-reportWith]
```

#### PlanDefinition

```
relatedArtifact[].resource
library[]
action[]..trigger[].dataRequirement[].profile[]
action[]..trigger[].dataRequirement[].codeFilter[].valueSet
action[]..condition[].expression.reference
action[]..input[].profile[]
action[]..input[].codeFilter[].valueSet
action[]..output[].profile[]
action[]..output[].codeFilter[].valueSet
action[]..definitionCanonical
action[]..dynamicValue[].expression.reference
extension[cpg-partOf]
```

#### Library

```
relatedArtifact[].resource
dataRequirement[].profile[]
dataRequirement[].codeFilter[].valueSet
```

#### Measure

```
relatedArtifact[].resource
library[]
group[].population[].criteria.reference
group[].stratifier[].criteria.reference
group[].stratifier[].component[].criteria.reference
supplementalData[].criteria.reference
extension[cqfm-inputParameters][]
extension[cqfm-expansionParameters][]
extension[cqfm-effectiveDataRequirements]
extension[cqfm-cqlOptions]
extension[cqfm-component][].resource
```

#### GraphDefinition

```
extension[cpg-relatedArtifact].reference
```

#### ImplementationGuide

```
extension[cpg-relatedArtifact].reference
```

#### Ingredient

```
for
```

#### Medication

```
manufacturer
ingredient[].itemReference
```

#### Substance

```
ingredient[].substanceReference
```

#### Parameters

```
parameter[].resource
```

#### MedicationKnowledge

```
relatedMedicationKnowledge[].reference
monograph[].source
ingredient[].itemReference
regulatory[].regulatoryAuthority
```

### Manifest
{: #distribution-manifest}

Canonical references **MAY** be authored without a version. To ensure consistent versions of resources are used by downstream systems, a manifest parameter to specify canonical versions **MAY** be passed to FHIR operations that use dynamic requirements: `$package` and `$data-requirements`; in addition to execution operations that can use a content endpoint to resolve canonical resources such as `$apply` from CPG and `$evaluate-measure` from DEQM IG.

More information on [manifest specification](version-manifest.html)

### Syndication
{: #distribution-syndication}

Syndication allows broadcasting of content changes to interested parties. The syndication mechanism proposed in the IG **MAY** be used by downstream systems, or federated Artifact Repositories so preemptive downloading, or notification message send to interested parties.

The syndication API **SHALL** be based on ATOM, an example is shown below:

```xml
<!-- see: https://validator.w3.org/feed/docs/atom.html -->
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:hl7="http://hl7.org/fhir/uv/crmi/syndication">
  <title>HL7 CRMI Knowledge Artifact Server Feed</title>
  <link rel="self" type="application/atom+xml" href="https://crmi-server/syndication/v1/feed.xml" />
  <id>urn:uuid:e39958d4-380e-4252-8707-6afeff8b7911</id>
  <updated>2023-01-01T01:00:00Z</updated>
  <entry>
    <id>urn:uuid:2c466218-337c-3367-95d9-57f65cd1a572</id>
    <title>SomeMeasure Package</title>
    <updated>2020-08-23T23:37:17Z</updated>
    <published>2020-08-23T23:37:17Z</published>
    <hl7:artifactVersion>0.0.0</hl7:artifactVersion>
    <hl7:artifactType>package</hl7:artifactType>
    <hl7:fhirVersion>4.0.1</hl7:fhirVersion>
    <hl7:publishAction>publish</hl7:publishAction>
    <author>
      <name>SomeMeasure Agency</name>
      <uri>http://www.measure.org</uri>
      <email>help@measure.org</email>
    </author>
    <!-- when publishing a new FHIR package, we expose both the package tarball -->
    <link rel="alternate" type="application/fhir+gzip"
      href="https://crmi-server/packages/some.fhir.uv.somemeasure/-/some.fhir.uv.somemeasure-0.0.0.tgz" />
    <!-- also include a Bundle transaction of all resources in the direct package with conditional create url and version -->
    <link rel="alternate" type="application/fhir+json"
      href="https://crmi-server/Bundle/f0099e15-3c06-4905-ba65-86749757fe80" />
    <summary>Contains updates to SomeMeasure, a quality measure you need in your life.</summary>
    <rights>Copyright 2019 SomeMeasure Agency. This content contains information which is protected
      by copyright. All Rights Reserved. No part of this work may be reproduced or used in any form
      or by any means - graphic, electronic, or mechanical, including photocopying, recording,
      taping, or information storage and retrieval systems - without the permission of the
      SomeMeasure Agency.</rights>
  </entry>
  <entry>
    <id>urn:uuid:16d8afdf-79d4-4dfe-87ce-cfc6cd186f62</id>
    <title>ValueSet ABC Removed</title>
    <updated>2020-08-23T23:37:17Z</updated>
    <hl7:fhirVersion>4.0.1</hl7:fhirVersion>
    <hl7:artifactType>resource</hl7:artifactType>
    <hl7:publishAction>unpublish</hl7:publishAction>
    <!-- this is a transaction bundle with a conditional delete using the canonical url and version -->
    <link rel="alternate" type="application/fhir+json; fhirVersion=4.0"
      href="https://crmi-server/Bundle/b8e21acc-a8ee-41d5-acac-b7331d675fbe"/>
  </entry>
  <entry>
    <id>urn:uuid:c4ae3f0f-2aaf-4afc-9752-e5d856b45461</id>
    <title>Update FHIR Library</title>
    <updated>2020-08-23T23:37:17Z</updated>
    <hl7:artifactVersion>0.2.1</hl7:artifactVersion>
    <hl7:artifactType>resource</hl7:artifactType>
    <hl7:fhirVersion>4.0.1</hl7:fhirVersion>
    <hl7:publishAction>publish</hl7:publishAction>
    <!-- this is a transaction bundle with a conditional create using the canonical url and version -->
    <link rel="alternate" type="application/fhir+json; fhirVersion=4.0"
      href="https://crmi-server/Bundle/d654dcde-ba89-4f6e-9024-bced216d58e9"/>
  </entry>
</feed>
```

### Uplinks / Mirrors
{: #distribution-uplinks}

Uplinks or mirrors are common in software artifact registries. Many times organizations have a virtualized registry that can route installation requests either locally (for local, private packages) or remotely to configured uplinks as show below:

<div style="max-width:800px;">
{% include img.html img="CRMI-Uplinks.png" %}
</div>

This can simplify tooling for distribution to downstream systems, and can decrease brittleness relying on upstream systems to be available.

### Downstream System(s)
{: #downstream-systems}

Systems using sharable content, including: authoring systems, clinical data repositories, quality measure engines, decision support engines, care management systems, and assessment filler applications.

### Distribution client capabilities
{: #distribution-client-capabilities}

Distribution clients must be able to consume the artifacts produced by upstream systems, either as IG packages, or as artifact bundles, depending on how the upstream systems choose to distribute artifact content.

For IG packages, the FHIR publishing ecosystem, including the FHIR validation tooling, already provide implementation support for integrating with the FHIR registry to download packaged implementation guide content as published for FHIR implementation guides. Applications can either make use of this existing tooling, or build tooling appropriate for their platform to integrate with the FHIR registry feed (or other upstream feeds as described above).

Note that for artifact bundles that are the result of the $package operation, bundles may be requested that include duplicate artifacts. Client applications that consume artifact bundles must be prepared for this case.

In addition, client applications must ensure that artifact references are resolved correctly. If an artifact reference is unversioned, a version manifest for the artifact should be consulted to determine the appropriate version-binding information. See the Artifact Scope discussion for information on how to identify the version manifest appropriate for a particular artifact.

---

File: repos/HL7_SLASH_crmi-ig/input/pages/downloads.md

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

File: repos/HL7_SLASH_crmi-ig/input/pages/extensions.md

{:toc}

{: #extensions}

This implementation guide defines and makes use of several categories of extensions to support various aspects of knowledge artifact definition, packaging, and implementation. The following sections provide an index of each of these categories of extensions.

Note that most of these extensions are defined in the FHIR Extensions pack, but are referenced here to provide documentation and guidance about how they are used by the profiles in this implementation guide.

### Artifact Extensions

The `artifact-` extensions are to support representing artifact metadata for resources that are not already `CanonicalResource` or `MetadataResource` that have the given element.

<table class="grid">
  <tr><th>Extension</th><th>Description</th><th>FMM</th></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-approvalDate.html">Artifact Approval Date</a> </td><td><p>When the artifact was approved by publisher.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">2</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-author.html">Artifact Author</a> </td><td><p>An individual or organization primarily involved in the creation and maintenance of the artifact.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">2</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-canonicalReference.html">Artifact Canonical Reference</a> </td><td><p>A reference to a canonical resource.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-uriReference.html">Artifact URI Reference</a> </td><td><p>Create a reference, following canonical reference semantics, to an artifact that uses non-canonical extensions artifact-url and artifact-version as business identifiers.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-contact.html">Artifact Contact</a> </td><td><p>Contact details to assist a user in finding and communicating with the publisher.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">2</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-copyright.html">Artifact Copyright</a> </td><td><p>A copyright statement relating to the artifact and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the artifact.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">2</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-copyrightLabel.html">Artifact Copyright Label</a> </td><td><p>A short string (&lt;50 characters), suitable for inclusion in a page footer that identifies the copyright holder, effective period, and optionally whether rights are resctricted. (e.g. ‘All rights reserved’, ‘Some rights reserved’).</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-date.html">Artifact Date</a> </td><td><p>The date (and optionally time) when the artifact was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the artifact changes.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">2</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-description.html">Artifact Description</a> </td><td><p>A free text natural language description of the artifact from a consumer’s perspective.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">2</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-editor.html">Artifact Editor</a> </td><td><p>An individual or organization primarily responsible for internal coherence of the artifact.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">2</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-effectivePeriod.html">Artifact Effective Period</a> </td><td><p>When the artifact is expected to be used.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-endorser.html">Artifact Endorser</a> </td><td><p>An individual or organization responsible for officially endorsing the artifact for use in some setting.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">2</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-experimental.html">Artifact Experimental</a> </td><td><p>A Boolean value to indicate that this artifact is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">2</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-identifier.html">Artifact Identifier</a> </td><td><p>A formal identifier that is used to identify this artifact when it is represented in other formats, or referenced in a specification, model, design or an instance.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">2</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-isOwned.html">Artifact Is Owned</a> </td><td><p>Whether or not the referenced artifact is owned by the referencing artifact.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-lastReviewDate.html">Artifact Last Review Date</a> </td><td><p>When the artifact was last reviewed by the publisher.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-name.html">Artifact Name</a> </td><td><p>A natural language name identifying the artifact. This name should be usable as an identifier for the module by machine processing applications such as code generation.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-publisher.html">Artifact Publisher</a> </td><td><p>The name of the organization or individual responsible for the release and ongoing maintenance of the artifact.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-purpose.html">Artifact Purpose</a> </td><td><p>Explanation of why this artifact is needed and why it has been designed as it has.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-releaseDescription.html">Artifact Release Description</a> </td><td><p>Release notes for a release of an artifact.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-releaseLabel.html">Artifact Release Label</a> </td><td><p>A human-friendly release label assigned for the version.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-relatedArtifact.html">Artifact Related Artifact</a> </td><td><p>Related artifacts such as additional documentation, justification, dependencies, bibliographic references, and predecessor and successor artifacts.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">2</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-reviewer.html">Artifact Reviewer</a> </td><td><p>An individual or organization primarily responsible for review of some aspect of the artifact.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-status.html">Artifact Status</a> </td><td><p>The status of this artifact. Enables tracking the life-cycle of the content.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-title.html">Artifact Title</a> </td><td><p>A short, descriptive, user-friendly title for the artifact.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-topic.html">Artifact Topic</a> </td><td><p>Descriptive topics related to the content of the artifact. Topics provide a high-level categorization of the artifact that can be useful for filtering and searching.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-url.html">Artifact URL</a> </td><td><p>An absolute URI that is used to identify this artifact when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This **SHOULD** be globally unique and **SHOULD** be a literal address at which an authoritative instance of this artifact is (or will be) published. This URL can be the target of a canonical reference. It **SHALL** remain the same when the artifact is stored on different servers.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-usage.html">Artifact Usage</a> </td><td><p>Describes the clinical usage of the artifact.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-useContext.html">Artifact UseContext</a> </td><td><p>The artifact was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, …) or may be references to specific programs (insurance plans, studies, …) and may be used to assist with indexing and searching for appropriate artifact instances.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-version.html">Artifact Version</a> </td><td><p>The identifier that is used to identify this version of the artifact when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the artifact author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-versionAlgorithm.html">Artifact Version Algorithm</a> </td><td><p>Indicates the mechanism used to compare versions to determine which is more current.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-artifact-versionPolicy.html">Artifact Version Policy</a> </td><td><p>Describes the versioning policy of the artifact.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>

 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-artifactComment.html">Artifact Comment</a> </td><td><p>A comment containing additional documentation, a review comment, usage guidance, or other relevant information from a particular user.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">3</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-definitionTerm.html">Definition Term</a> </td><td><p>Specifies a term and its associated definition.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">3</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-isPrimaryCitation.html">Is Primary Citation</a> </td><td><p>Specifies whether the related artifact is defining a primary citation for the artifact (i.e. one that should appear in the narrative for the artifact specification.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">3</a></td></tr>
</table>

### Terminology Extensions

These extensions provide terminology-related capabilities for specifying expansion parameters as part of a knowledge artifact or version-manifest, as well as providing a value set reference to indicate that a particular event was not done.

<table class="grid">
  <tr><th>Extension</th><th>Description</th><th>FMM</th></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-expansionParameters.html">Expansion Parameters</a> </td><td><p>Specifies the expansion parameters that should be used to expand the ValueSet, or any ValueSets in the Library (or referenced by components of the Library).</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">3</a></td></tr>
</table>

### Packaging and Dependency Tracing Extensions

These extensions are used to support packaging and dependency tracing capabilities.

<table class="grid">
  <tr><th>Extension</th><th>Description</th><th>FMM</th></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-resourceType.html">Resource Type</a> </td><td><p>Specifies the type of resource the canonical references.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-scope.html">Scope</a> </td><td><p>Defines the scope of an artifact as a string of the form {namespace-name}[@{namespace-uri}]. Namespace name **SHALL** be a valid NPM package id, and namespace uri **SHALL** be a valid uri. For FHIR implementation guides, scope is inferred using the package id and the base canonical. e.g. fhir.cqf.common@http://fhir.org/guides/cqf/common. This extension can be used on Implementation Guides, Libraries, on any knowledge artifact, to declare the scope of the artifact. In the absence of an explicit scope declaration, the scope of an artifact is inferred based on the IG in which the artifact is defined.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-shouldTraceDependency.html">Should Trace Dependency</a> </td><td><p>Indicates whether the extension or profile element on which it appears represents a dependency that should be traced for the purposes of artifact packaging and distribution</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-testArtifact.html">Test Artifact</a> </td><td><p>The artifact under test for this test content</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">1</a></td></tr>
 <tr><td><a href="StructureDefinition-crmi-softwaresystem.html">CRMI Software System</a> </td><td><p>Specifies the software systems used in the packaging and testing of knowledge artifacts. Specifically to support explicitly stating which versions of the various software components were used in the authoring, packaging, and testing.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">3</a></td></tr>
</table>

### Logic-related Extensions

These extensions provide capabilities related to the specification of logic and data requirements as part of knowledge artifacts.

<table class="grid">
  <tr><th>Extension</th><th>Description</th><th>FMM</th></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-defaultValue.html">Default Value</a> </td><td><p>Provides a default value for a parameter definition.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">3</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-fhirQueryPattern.html">FHIR Query Pattern</a> </td><td><p>A FHIR Query URL pattern that corresponds to the data specified by the data requirement. If multiple FHIR Query URLs are present, they each contribute to the data specified by the data requirement (i.e. the union of the results of the FHIR Queries represents the complete data for the data requirement). This is not a resolveable URL, in that it will contain 1) No base canonical (i.e. it's a relative query), and 2) Parameters using tokens that are delimited using double-braces and the context parameters are dependent solely on the subjectType, according to the following: Patient: context.patientId, Practitioner: context.practitionerId, Organization: context.organizationId, Location: context.locationId, Device: context.deviceId.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">3</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-isSelective.html">Is Selective</a> </td><td><p> This extension is useful for helping implementing systems determine which data requirements are expected to be most selective of the target population. A common use case is to identify a subset of the data requirements for an artifact as &quot;selective&quot;, meaning that they can be used as an initial filter to establish the overall set of data. For example, the selective requirements can be used to construct an initial query or queries for data, with the non-selective requirements used for subsequent filtering on the resulting data. Although this extension may be used by artifact authors as a way to indicate expected selectivity of a data requirement, it will more typically be used by implementers and downstream packaging repositories to indicate selectivity of a data requirement given known data heuristics in particular datasets. </p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">3</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-messages.html">Messages</a> </td><td><p>An OperationOutcome that contains any information, warning, and/or error messages that were generated while processing an operation such as $evaluate or $prepopulate.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">3</a></td></tr>
 <tr><td><a href="{{site.data.fhir.ver.ext}}/StructureDefinition-cqf-valueFilter.html">Value Filter</a> </td><td><p>Allows additional value-based filters to be specified as part of a data requirement.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">3</a></td></tr>
 <tr><td><a href="StructureDefinition-crmi-effectiveDataRequirements.html">CRMI Effective Data Requirements</a> </td><td><p>A module definition library that contains the effective data requirements for an artifact (i.e. the calculated data requirements for the expressions directly referenced by the artifact structure).</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">3</a></td></tr>
 <tr><td><a href="StructureDefinition-crmi-configurationEndpoint.html">CRMI Configuration Endpoint</a> </td><td><p>This extension allows module configuration libraries to indicate which endpoint the configuration is for</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">3</a></td></tr>
 <tr><td><a href="StructureDefinition-crmi-configurationFor.html">CRMI Configuration Endpoint</a> </td><td><p>This extension allows module configuration libraries to indicate which artifact the configuration is for</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">3</a></td></tr>
 <tr><td><a href="StructureDefinition-crmi-endpointSupportsPost.html">CRMI Configuration Endpoint</a> </td><td><p>This extension allows module configuration libraries to indicate whether the endpoint they are configuring supports the POST style of search interaction.</p></td><td> <a class="fmm" href="http://hl7.org/fhir/versions.html#maturity" title="Maturity Level">3</a></td></tr>
</table>



---

File: repos/HL7_SLASH_crmi-ig/input/pages/index.md

{:toc}

<!--
Where possible, new and updated content will be highlighted with green text and background.
{:.new-content}

<div markdown="1" class="bg-info">

{{ site.data.package-list.list[0].desc }}

</div>
-->

{: #canonical-resource-management-infrastructure-implementation-guide}

### Summary
{: #summary}

The Canonical Resource Management Infrastructure implementation guide defines profiles, operations, capability statements and guidance to facilitate the content management lifecycle for authoring, publishing, distribution, and implementation of FHIR knowledge artifacts such as value sets, profiles, libraries, rules, and measures. The guide is intended to be used by specification and content implementation guide authors as both a dependency for validation of published artifacts, and a guide for construction and publication of content.

This implementation guide is based upon work in multiple quality improvement and reporting domains. Various implementation guides have developed similar infrastructure-level profiles for conformance and knowledge artifacts. These profiles are being refactored into universal-realm, domain-independent profiles that can then be re-used in future versions of those specifications, as well as included in future versions of the base FHIR specification.

### Scope of Use

This implementation guide is focused on facilitating consistent exchange of knowledge artifacts throughout the artifact management lifecycle, from authoring, through publishing and distribution, to implementation. At the highest level, this is done through the definition of capability categories that roughly correspond to these lifecycle phases:

<div style="max-width:500px;">
{% include img.html img="knowledge-capabilities.png" %}
</div>

These categories are proposed as a way to help facilitate management of expectations in the artifact development lifecycle, as well as address common challenges that have been encountered in the development of knowledge artifacts across the quality improvement spectrum, including guideline development, public health reporting specifications, clinical decision support rules, and quality measures. The expectation is that these same challenges will arise in any knowledge artifact development effort, and that the profiles and solutions proposed here will be useful in addressing those challenges.

The implementation guide defines:

* Capability profiles to establish expectations for artifacts at the various phases of the artifact lifecycle
* Guidance for artifact versioning and dependency management
* Operations to support artifact authoring and publishing
* Service descriptions to support a knowledge artifact ecosystem

In particular, this implementation guide enables a consistent approach to developing knowledge artifacts as FHIR resources so that they can be seamlessly integrated with the existing FHIR publishing ecosystem, and can be easily deployed and implemented as part of existing FHIR infrastructures. At the same time, the additional capabilities for packaging and distribution enable use cases that cannot be easily achieved with current FHIR packages, such as:

1. Focused packaging: Retrieving a package a specific artifact with its dependencies. For example a package for a Questionnaire that includes all and only the resources required to fill out that questionnaire.
2. Artifact selection: Retrieving a set of artifacts together with their related depedencies, independent of the publication grouping. For example, a measure set may include fifty (50) measures, but a provider system is only reporting on five (5) of those measures.
3. Platform-specific packaging: Retrieving a package tailored for the capabilities of a particular implementation environment. For example, a set of guideline recommendations together with pre-expanded value sets

#### Artifacts

An _artifact_ in this implementation guide is a FHIR resource whose primary focus is the representation of context-independent knowledge such as a profile, a value set, a decision support rule, or a quality measure specification, as opposed to FHIR resources such as Patient, Organization, or Observation, that are typically focused on the representation of _instance_ data for patients and other healthcare related entities. Most of the resources types for representing artifacts in FHIR are also [_canonical resources_](https://hl7.org/fhir/canonicalresource.html#CanonicalResource), and often [_metadata resources_](https://hl7.org/fhir/metadataresource.html#MetadataResource). However, some FHIR resources are not defined by FHIR as canonical resources, but may still be used to represent context-independent knowledge (e.g. Medication, or Substance). The use of the term _artifact_ in this IG applies to both canonical resources as defined by the base specification, as well as these _non-canonical artifact_ resources.

The following table lists the resource types that are considered _artifacts_, along with a categorization of those artifacts.

|Artifact Category |Description |Resources |
|----|----|----|
|Knowledge Artifacts |Representing decision support rules, quality measures, logic libraries, and activity definitions | ActivityDefinition<br/>Library<br/>Measure<br/>PlanDefinition<br/>Questionnaire |
|Terminology Artifacts |Code systems, value sets, naming systems, and concept maps | ValueSet<br/>CodeSystem<br/>ConceptMap<br/>NamingSystem |
|Conformance Artifacts |Profiles, extensions, structure maps, and artifacts related to defining and testing conformance | GraphDefinition<br/>ImplementationGuide<br/>StructureDefinition<br/>StructureMap |
|Domain Artifacts |Medications, substances, groups, and other domain-related artifacts | CareTeam (_profiled_)<br/>Group (non-canonical artifact)<br/>Location (_profiled_)<br/>Medication (non-canonical artifact)<br/>MedicationKnowledge (non-canonical artifact)<br/>Practitioner (_profiled_)<br/>PractitionerRole (_profiled_)<br/>Organization (_profiled_)<br/>Substance (non-canonical artifact) |
|Evidence-based Medicine (EBM) Artifacts (Roadmap) |Artifacts related to supporting evidence-based medicine | Evidence<br/>EvidenceVariable |
{: .grid}

> (_profiled_) For entity-related Domain Artifacts (i.e. Organization, Location, Practitioner, Patient, and CareTeam), this implementation guide uses profiling to address references to these types of resources in the artifact space (i.e. when a PlanDefinition references a particular type of CareTeam for example, the canonical reference is to a profile of the CareTeam resource.

### Audience
{: #audience}

The audience for this IG includes modelers (authors of FHIR profiles); terminologists; knowledge developers (authors of measures, guidelines, order catalogs, clinical logic/rules, assessments); and healthcare system and software developers using FHIR-based knowledge artifacts.

### How to read this Guide
{: #how-to-read-this-guide}

This Guide is divided into several pages which are listed at the top of each
page in the menu bar:

-  **[Home](index.html)**: Summary and background information for the Canonical Resource Management Infrastructure Implementation Guide
-  **[Introduction](introduction.html)**: Detailed overview of the content management lifecycle and the background for this guide
-  **Artifact Management**
    -  **[Artifact lifecycle](artifact-lifecycle.html)**: Content lifecycle of knowledge artifacts
    -  **[Packaging](packaging.html)**: Packaging considerations for canonical resources and knowledge artifacts 
    -  **[Publishing](publishing.html)**: Publishing considerations for canonical resources and knowledge artifacts 
    -  **[Distribution](distribution.html)**: Distribution considerations for canonical resources and knowledge artifacts 
-  **FHIR Artifacts**
    -  **[Profiles](profiles.html)**: List of profiles defined for use by knowledge artifacts
    -  **[Extensions](extensions.html)**: List of extensions defined and used by knowledge artifacts
    -  **[Operations](operations.html)**: List of operations and operation pattern profiles
    -  **[Capabilities](capabilities.html)**: Definitions of services and operations in support of authoring, publishing, and distributing canonical resources and knowledge artifacts
    -  **[Terminology](terminology.html)**: Terminology defined in this implementation guide.
    -  **[Artifact Summary](artifacts.html)**: Index of all conformance artifacts defined in this implementation guide.
-  **[Downloads](downloads.html)**: Links to downloadable artifacts for implementations.
-  **[Version History](changes.html)**: Version and change history

### Acknowledgements
{: #acknowledgements}

This Implementation Guide was made possible by the thoughtful contributions of the following people and organizations:

* Taha Attari, Smile Digital Health - Contributor
* Martijn Harthoorn, Firely - Contributor
* Brian Kaney, Vermonster - Editor
* Ewout Kramer, Firely - Contributor
* Taylor Le, Vermonster - Editor
* Carl Leitner - Contributor
* Rob McClure, Md Partners - Contributor
* Evan Muchasak, NCQA - Contributor
* Brian Postlethwaite, Microsoft - Contributor
* Rob Reynolds, Smile Digital Health - Contributor
* Brenin Rhodes, Smile Digital Health - Contributor
* Bryn Rhodes, Smile Digital Health - Editor
* Derek Ritz - Contributor
* Chris Schuler, Smile Digital Health - Contributor
* Adam Stevenson, Smile Digital Health - Contributor
* Ward Weistra, Firely - Contributor

### References
{: #references}

Health level seven. Clinical Quality Framework - HL7 Clinical Decision Support Work Group Confluence Page. [Online]. Available from: [https://confluence.hl7.org/display/CQIWC/Clinical Quality Framework](https://confluence.hl7.org/display/CQIWC/Clinical%20Quality%20Framework) [Accessed 11 October 2019].

Health level seven. Publishing terminology to the FHIR Ecosystem - FHIR Product Family Confluence Page. [Online]. Available from: [https://confluence.hl7.org/display/FHIR/Publishing+terminology+to+the+FHIR+Ecosystem](https://confluence.hl7.org/display/FHIR/Publishing+terminology+to+the+FHIR+Ecosystem) [Accessed 17 May 2022]

Health Level Seven. FHIR Clinical Guidelines. [Online]. Available from: [http://hl7.org/fhir/uv/cpg](http://hl7.org/fhir/uv/cpg) [Accessed October 2023].

Health Level Sevent. Electronic Case Reporting. [Online]. Available from: [http://hl7.org/fhir/us/ecr](http://hl7.org/fhir/us/ecr) [Accessed October 2023].

Health Level Seven. Quality Measure Implementation Guide. [Online]. Available from: [http://hl7.org/fhir/us/cqfmeasures](http://hl7.org/fhir/us/cqfmeasures) [Accessed October 2023].

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

File: repos/HL7_SLASH_crmi-ig/input/pages/introduction.md

{:toc}

{: #introduction}

### Overview
{: #overview}

This Implementation Guide (IG) is a conformance profile, as described in the [Conformance section of the HL7 FHIR specification](http://hl7.org/fhir/R4/conformance-module.html). The following is a conceptual diagram of various systems and specifications involved in FHIR artifact management.

<div style="max-width:800px;">
{% include img.html img="CRMI-Overview.png" %}
</div>

_Figure 2.4_ Illustrates the management of artifacts as a Canonical Resource Management Infrastructure (CRMI), highlighting the interactions between authoring components, publishing mechanisms such as the Node Package Manager (npm), distribution channels, and downstream systems.

**Roles include:**
* [Authoring System](#authoring-system): A system enabling artifact development and publishing
  * [Authoring Knowledge Repository](#authoring-knowledge-repository): An artifact repository that supports authoring capabilities
  * [Authoring Knowledge Terminology Service](#authoring-knowledge-terminology-service): A terminology service supporting artifact authoring
* [Publishing](#publishing-and-distribution): Specifications for publishing artifacts to:
  * FHIR Package Registry
  * Knowledge Repository
  * Knowledge Terminology Service
* [Distribution](#publishing-and-distribution): Specifications for artifact distribution, including the use of npm 
  * Downstream System(s): Systems using distributed content.

#### Authoring System
{: #authoring-system}

An authoring system supports the development, testing, packaging, and publishing of artifacts. At a minimum, an authoring system must provide for:

* Creation and maintenance of artifacts
* Publication and versioning of artifacts

Many authoring systems provide additional capabilities such as content validation, change tracking, integrated testing, and more. The focus of this implementation guide is on ensuring that authoring systems can confirm they are managing artifacts in a consistent manner across the artifact lifecycle, from authoring, through publishing, to implementation.

For example, a common authoring system in use in the FHIR artifact development community is:

* Visual Studio Code (with various plugins)
* git for change management
* build tools (IG Publisher and SUSHI)

In this example, the authoring content for the system is stored in a filesystem as text files in a git repository (for example, on GitHub)

This IG also describes capabilities for an authoring repository (i.e. an environment where the authoring system uses a repository to store authoring content, rather than a filesystem). An authoring system can make use of an Authoring Knowledge Repository and Artifact Terminology Service to support the authoring process.

However the content authoring is performed, the capability profiles described in this IG provide a mechanism for ensuring consistent expectations of artifact content.

See [Artifact Lifecycle](artifact-lifecycle.html) for a description of the artifact lifecycle and artifact management.

##### Authoring Knowledge Repository
{: #authoring-knowledge-repository}

An artifact repository is a FHIR server that hosts knowledge artifacts such as profiles, extensions, libraries, and measures. An artifact repository may be simply a distribution service, providing read-only access to content, or it may provide more extensive support for authoring services such as dependency tracing and packaging capabilities, as well as content modification such as drafting, releasing, revising, and reviewing.

See [Artifact Repository Service](artifact-repository-service.html) for a complete description of the capabilities provided by an artifact repository.

##### Authoring Knowledge Terminology Service
{: #authoring-knowledge-terminology-service}

An artifact terminology service is a FHIR terminology service with specific capabilities to enable management of versioning issues for collections of knowledge artifacts. In particular, support for providing version-binding information as part of terminology operation requests is key to supporting the development of collections of artifacts with extensive terminology references.

See [Artifact Terminology Service](artifact-terminology-service.html) for a complete description of the capabilities provided by an artifact terminology service.

#### Publishing and Distribution
{: #publishing-and-distribution}

_Publishing_ refers to the process of surfacing artifacts from the authoring environment to the distribution environment, while _distribution_ refers to the process an implementation uses to retrieve artifacts from a repository.

In the FHIR publishing ecosystem, this is typically done using FHIR Implementation Guides, published as websites which include npm packages containing the artifacts. In addition, these npm packages are registered with the FHIR Package Registry, allowing the packages to be distributed using npm. Implementations typically make use of the artifacts by downloading the packages directly from the IG website, or by integrating with the FHIR npm package registry.

However, this approach to distribution does not adequately address some common use cases for artifact management, including:

1. Focused packaging: Retrieving a package a specific artifact with its dependencies. For example a package for a Questionnaire that includes all and only the resources required to fill out that questionnaire.
2. Artifact selection: Retrieving a set of artifacts together with their related depedencies, independent of the publication grouping. For example, a set of measures is published that includes 50 clinician measures, but a provider system is only reporting 5 of those measures.
3. Platform-specific packaging: Retrieving a package tailored for the capabilities of a particular implementation environment. For example, a set of guideline recommendations together with pre-expanded value sets

This implementation guide provides support for these use cases by describing alternate mechanisms for publishing and distribution. Specifically, the $data-requirements and $package operations support identifying artifact dependencies and packaging artifacts with those dependencies (and only those dependencies), and the Artifact Repository and Artifact Terminology Services describe capabilities for supporting artifact publication and distribution as FHIR APIs.

See [Publishing](publishing.html) and [Distribution](distribution.html) for further discussion of these capabilities.

### Implementation Guide Categories
{: #ig-categories}

Figure 3.1 below, FHIR-based Knowledge Representation Specifications, depicts four categories of specifications, with representative examples of each category, illustrating how the various pieces can be used together to deliver shareable artifacts. This categorization of implementation guides, though not intended to be exhaustive, provides a useful way to classify types of implementation guides. In particular, the profiles and approaches in the CRMI IG have been adopted from the _specification IGs_ in this diagram and generalized to apply across all types of IGs, specification, model, and content.

<div>
<img src="types-of-igs.png" alt="Types of FHIR Implementation Guides" class="img-responsive img-rounded center-block" width="700" height="700"/>
</div>

_Figure 2.2_ Categories of implementation guides: Specification, Model, and Content IGs

As shown in the diagram, the Canonical Resource Management Infrastructure IG provides cross-cutting support for content development across all these types of implementation guides. Future versions of these specifications should consider whether to refactor to make use of the profiles and capabilities provided by this implementation guide.

#### Foundational Standards

The foundational standards on the bottom row of the diagram include the layers of FHIR, as well as expression language and integration standards including FHIRPath, Clinical Quality Language (CQL), CDS Hooks, and SMART.

* [**FHIR**](http://hl7.org/fhir) includes five layers of concepts, each shown as an icon on the bottom row of the diagram.
    * **Foundation** layer – defines the core data exchange protocol.
    * **Conformance** layer – defines how resources, profiles, and terminologies are represented and used.
    * **Administration** layer – defines individuals, locations, organizations, and encounters.
    * **Clinical** layer – defines clinical information such as observations, medications, procedures, and orders.
    * **Reasoning** layer – provides definitional artifacts like plan and activity definitions, libraries, and measures.
* [**FHIRPath**](http://hl7.org/fhirpath) is a simple, yet powerful, model-independent expression language that is used extensively throughout FHIR to describe paths to elements on resources, and to define invariants on profiles.
* [**Clinical Quality Language (CQL)**](http://cql.hl7.org) is a superset of FHIRPath that provides an author-friendly format for the description of clinical logic, as well as a machine-friendly format for processing the logic.
* [**CDS Hooks**](http://cds-hooks.hl7.org) is an HL7 standard specification for integrating decision support services with clinical systems. It is primarily focused on clinician-facing remote decision support within an EHR.
* [**SMART-on-FHIR (SMART)**](http://hl7.org/fhir/smart-app-launch.html) is an HL7 standard specification for integrating clinical applications into EMRs using FHIR.

#### Model Implementation Guides

The middle row on the left of the figure shows the Model Implementation Guides, typically derived from FHIR Administration and Clinical resources such as Patient, Encounter, and MedicationRequest. These Model IGs are typically built to address a broad range of use cases, focused on a particular target realm or domain.

* [**International Patient Summary (IPS)**](http://hl7.org/fhir/uv/ips) is a set of internationally applicable FHIR profiles used to share an extract of essential patient healthcare information across international boundaries. As a result, it forms an excellent foundation for expressing universally applicable content guidelines such as the WHO Antenatal Care (WHO ANC).
* [**US Core**](http://hl7.org/fhir/us/core) is a set of profiles focused on enabling exchange of the US Clinical Data for Interoperability (USCDI) and is supported by a broad range of EMR vendors within the US.
* [**QI-Core**](http://hl7.org/fhir/us/qicore) is a set of profiles that derives from US Core to enable quality improvement use cases such as quality measurement and decision support within the US.

#### Specification Implementation Guides

The middle row on the right of the figure shows the Specification Implementation Guides, which derive from the FHIR Clinical Reasoning resources to provide implementation guidance and conformance requirements for the creation, distribution, evaluation, and maintenance of shareable clinical knowledge.

* [**Quality Measure (QM) IG**](http://hl7.org/fhir/us/cqfmeasures) provides guidance on and conformance requirements for the use of the FHIR Reasoning resources, Measure and Library, to create and share clinical quality measures.
* [**Data Exchange for Quality Measures (DEQM)**](http://hl7.org/fhir/us/davinci-deqm) provides guidance for reporting quality measures.
* [**Structured Data Capture (SDC)**](http://hl7.org/fhir/uv/sdc) provides guidance for building and capturing structured data using questionnaires
* [**Clinical Practice Guidelines IG (CPG-on-FHIR)**](http://hl7.org/fhir/uv/cpg) demonstrates how to build shareable computable guideline content.
* [**Evidence-Based Medicine on FHIR (EBM-on-FHIR)**](http://build.fhir.org/clinicalreasoning-evidence-and-statistics.html) provides interoperability (standards for data exchange) for those producing, analyzing, synthesizing, disseminating and implementing clinical research (evidence) and recommendations for clinical care (clinical practice guidelines). It specifies resources and patterns for the exchange of data involved in evidence-based medicine including study results, quality of evidence and strength of recommendation and relevant context, environmental surveys, and systematic reviews.

#### Content Implementation Guides
{: #content-igs}

In the top row of the figure, the Content Implementation Guides are FHIR Implementation Guides. These IGs are not necessarily balloted as HL7 standards; rather, they use the FHIR publication toolchain to support authoring and distribution as depicted in the rest of the diagram. The content is stewarded by separate authorities such as quality agencies, specialty societies, and guideline developers; groups that have their own governance and maintenance policies. The content IGs conform to the specification IGs on the right of row 2, and typically make use of the model IGs on the left of row 2 to define content focused on a particular realm.

* [**HEDIS IG**] Contains Healthcare and Effectiveness Data and Information Set (HEDIS) quality measures expressed using FHIR Reasoning Measure and Library resources and conforming to the Quality Measure IG profiles.
* [**CDC Opioid Prescribing IG**](http://build.fhir.org/ig/cqframework/opioid-cds-r4) contains decision support content to streamline guideline implementation regarding the use of opioids for chronic pain in clinical settings.
* [**World Health Organization Antenatal Care (WHO ANC)**](https://build.fhir.org/ig/WorldHealthOrganization/smart-anc/) IG contains decision support content to streamline guideline implementation of the World Health Organization's recommendations on antenatal care for a positive pregnancy experience.

### Approach
{: #approach}

The following diagram illustrates the overall ecosystem of services and capabilities required to support knowledge authoring, distribution, and implementation:

<div style="max-width:1200px;">
{% include img.html img="CRMI-Background.png" %}
</div>

Within this ecosystem, this IG focuses on the following areas:

* Artifact identity, lifecycle, and versioning
* Artifact representation and capabilities (i.e. Shareable, Computable, Publishable, Executable)
* Packaging and dependencies ($package and $data-requirements)
* Distribution via packages or repositories
* Authoring and editing
* Terminology integration
* Version-binding support

### Background
{: #background}

This implementation guide assumes familiarity with the base FHIR specification, as well as with profiling FHIR and implementation guides. Refer to the [Profiling](http://hl7.org/fhir/profiling.html) topic in the base specification if needed.

As with any content development effort, FHIR Knowledge Artifacts have a content development lifecycle to create, review, publish, distribute, and implement. This implementation guide is focused on supporting consistent and reliable usage of FHIR Knowledge Artifacts by establishing content development best practices.

This IG has the following aspirations:
* Full lifecycle knowledge platform respecting key separations of concerns, supporting established principles &amp; best practices, and enabling efficient workflows
* Knowledge Artifacts are extensible and support standards where pragmatic
* Open Interfaces - based-on and/or supporting standards-based API’s where appropriate
* Open Formats - Information Models, Terminologies (Semantics), and Libraries of reusable and/or sharable Knowledge Representations/Expressions
* Standards-based API’s, Formats, and Patterns where possible/pragmatic (otherwise supported- e.g. translation to/from)

### Conformance Language
{: #conformance-language}

The keywords **SHALL**, **SHALL NOT**, **SHOULD**, **SHOULD NOT**, **MAY**, and **NEED NOT** in this document are to be interpreted as defined in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt). Unlike RFC 2119, however, this specification allows that different applications may not be able to interoperate because of how they use optional features. In particular

* **SHALL**: an absolute requirement for all implementations
* **SHALL NOT**: an absolute prohibition against inclusion for all implementations
* **SHOULD/SHOULD NOT**: a best practice or recommendation to be considered by implementers within the context of their particular implementation; there may be valid reasons to ignore an item, but the full implications must be understood and carefully weighed before choosing a different course
* **MAY/NEED NOT**: truly optional; can be included or omitted as the implementer decides with no implications

### Must Support
{: #must-support}

Certain elements in the profiles defined in this implementation guide are marked as Must Support. This flag is used to indicate that the element plays a critical role in defining, sharing, and implementing artifacts, and implementations **SHALL** understand and process the element.

In addition, because artifact specifications typically make use of data implementation guides (e.g. IPS, US Core, QI-Core), the implications of the Must Support flag for profiles used from those implementation guides must be considered.

For more information, see the definition of [Must Support](https://hl7.org/fhir/R4/profiling.html#mustsupport) in the base FHIR specification.

**Conformance Requirement 2.1 (Must Support Elements):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-2-1)
{: #conformance-requirement-2-1}

For resource instances claiming to conform to CRMI IG profiles, Must Support on any profile data element **SHALL** be interpreted as follows:

* Authoring systems and knowledge repositories **SHALL** be capable of populating all Must Support data elements.
* Evaluating systems **SHALL** be capable of processing resource instances containing Must Support data elements without generating an error or causing the evaluation to fail.
* In situations where information on a particular data element is not present and the reason for absence is unknown, authoring and repository systems **SHALL NOT** include the data elements in the resource instance. For example, for systems using ‘9999’ to indicate unknown data values, do not include ‘9999’ in the resource instance.
* When consuming resource instances, evaluating systems **SHALL** interpret missing data elements within resource instances as data not present for the artifact.
* Submitting and receiving systems using knowledge artifacts to perform data exchange or artifact evaluation operations **SHALL** respect the must support requirements of the profiles used by the artifact to describe the data involved in the operation.



---

File: repos/HL7_SLASH_crmi-ig/input/pages/operations.md

{:toc}

{: #operations}

This implementation guide defines operations related to packaging and dependency management, as well as establishing several operation definition profiles that provide patterns for common capabilities of knowledge artifact operations.

### Operations

#### Packaging and Dependency Tracing

These operations are defined to support artifact packaging and dependency tracing, including data requirements determination. See the [Packaging](packaging.html) discussion for more information.

| **Operation** | **Description** |
|----|----|
| [CRMI Package](OperationDefinition-crmi-package.html) | Packages a specified canonical resource for use in a target environment, optionally including related content such as dependencies, components, and testing cases and data. |
| [CRMI DataRequirements](OperationDefinition-crmi-data-requirements.html) | Determines the effective data requirements for the artifact, including known components and dependencies, optionally informed by a version manifest. The data requirements operation is used for dependency gathering, as a way to understand the set of dependencies of a given artifact, as well as for data requirements determination, as a way to understand the complete set of data requirements for a given artifact. |
{: .grid }

#### Terminology

These operations are defined to support terminology capabilities expected in an Artifact Terminology Service. See the [Capabilities](capabilities.html) discussion for more information.

| **Operation** | **Description** |
|----|----|
| [CRMI ValueSet Expand](OperationDefinition-crmi-valueset-expand.html) | Requests the expansion of a given value set. This extension to the $expand operation adds support for artifact version binding information, as well as version manifest support |
{: .grid }

#### Artifact Authoring

These operations are defined to support artifact authoring capabilities expected in an Artifact Authoring Service. See the [Capabilities](capabilities.html) discussion for more information.

| **Operation** | **Description** |
|----|----|
| [CRMI Approve](OperationDefinition-crmi-approve.html) | The approve operation supports applying an approval to an existing artifact, regardless of status. The operation sets the date and approvalDate elements of the approved artifact, and is otherwise only allowed to create ArtifactAssessment (Basic or cqf-artifactAssessment extensions in R4) resources in the repository. |
| [CRMI Artifact Diff](OperationDefinition-crmi-artifact-diff.html) | Describes the differences between two knowledge artifacts in FHIR Patch format by recursively resolving dependencies to get a holistic diff. |
| [CRMI Clone](OperationDefinition-crmi-clone.html) | Creates a clone version of a knowledge artifact, as well as for all resources it is composed of. |
| [CRMI Draft](OperationDefinition-crmi-draft.html) | Creates a draft version of a knowledge artifact, as well as for all resources it is composed of. |
| [CRMI Release](OperationDefinition-crmi-release.html) | The release operation supports updating the status of an existing draft artifact to active. The operation sets the date element of the resource and pins versions of all direct and transitive references and records them in the program’s manifest. Child artifacts (i.e. artifacts of which the existing artifact is composed) are also released, recursively. |
| [CRMI Review](OperationDefinition-crmi-review.html) | The review operation supports applying an review to an existing artifact, regardless of status. The operation sets the date and lastReviewDate elements of the reviewed artifact, and is otherwise only allowed to create ArtifactAssessment (Basic or cqf-artifactAssessment extensions in R4) resources in the repository. |
{: .grid }

### Operation Pattern Profiles

Operations on knowledge artifacts **SHOULD** consider conforming to one or more of the following profiles to ensure consistent naming of operation parameters when providing the same capabilities across operations:

| **Operation Profile**               | **Purpose**                                                                                                            |
|-------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| [Artifact][1]                       | Defines parameters used to identify artifact resource                                                                  |
| [Canonical Version Bindable][2]     | DEPRECATED, see Artifact Version Bindable: Defines parameters used to specify missing versions in canonical references |
| [Artifact Version Bindable][3]      | Defines parameters used to specify missing versions in all artifact references                                         |
| [Manifestable][4]                   | Defines parameters used to provide a version manifest                                                                  |
| [Pageable][5]                       | Defines parameters for an operation with pageable options                                                              |
| [Artifact Endpoint Configurable][6] | Defines parameters to provide endpoints to resolve canonical artifacts                                                 |
| Data Configurable (Roadmap)         | Defines parameters to specify how to resolve data requirements                 |
| Parameterizable (Roadmap)            | Defines parameters passed to logic evaluation (e.g. CQL parameters)         |
{: .grid }

Note that the `CanonicalVersionBindable` profile is already used in at some published operation definitions (such as ValueSet$expand) but is declared as deprecated because this implementation guide is proposing the more general `ArtifactVersionBindable` to support version-binding behavior for both canonical and non-canonical knowledge artifacts.

[1]: StructureDefinition-crmi-artifact-operation.html
[2]: StructureDefinition-crmi-canonical-version-bindable-operation.html
[3]: StructureDefinition-crmi-artifact-version-bindable-operation.html
[4]: StructureDefinition-crmi-manifestable-operation.html
[5]: StructureDefinition-crmi-pageable-operation.html
[6]: StructureDefinition-crmi-artifact-endpoint-configurable-operation.html

<!--
* ArtifactOperation
    * id
    * url
    * version
    * identifier
    * resource
    * scope Defines the scope of the operation as a string of the form {namespace-name}[@{namespace-uri}]. Namespace name shall be a valid NPM package id, and namespace uri shall be a valid uri. For FHIR implementation guides, scope is inferred using the package id and the base canonical. e.g. fhir.cqf.common@http://fhir.org/guides/cqf/common. In the absence of an explicit scope declaration in an operation, the scope of the operation is determined by the focus artifact of the operation (i.e. the Measure in $evaluate-measure, or the Library in $evaluate). See the [cqf-scope](StructureDefinition-cqf-scope.html) extension for a description of how the scope of an artifact is determined.

* PageableOperation
    * offset
    * count

* CanonicalVersionableOperation
    * canonicalVersion
    * checkCanonicalVersion
    * forceCanonicalVersion

* ManifestableOperation
    * manifest

* EndpointConfigurableOperation
    * endpointConfiguration 0..* A list of content or terminology endpoints in priority order, optionally with canonical route information. When resolving for a particular artifact, use these in definition order, if a canonical route is present, if the resolving url starts with the route (up to and including the entire url), then that endoint is used to attempt the resolution. If successful, the resolved artifact is returned, otherwise processing continues. If all endpoints are reached and either no match is found or no successful resolution occurs, servers may attempt local resolution of the artifact. If no resolution occurs, then an error is returned. Any errors encountered during processing should be collected and returned with the result.
        * canonicalRoute 0..1 An optional route used to determine whether this endpoint is expected to be able to resolve artifacts that match the route (i.e. start with the route, up to and including the entire url)
        * endpointUri 0..1 The URI of the endpoint, exclusive with the endpoint parameter
        * endpoint 0..1 An Endpoint resource describing the endpoint, exclusive with the endpointUri parameter

Options for federated client specification:

* 0
    * canonicalRoute: http://cts.nlm.org/fhir/ValueSet/
    * endpointUri: http://uat-cts.nlm.org/fhir
* 1
    * canonicalRoute: http://cts.nlm.org/fhir/ValueSet/
    * endpointUri: http://apelon-dts
* 2
    *
    * endpointUri: http://tx.fhir.org

* Route
    * canonicalRoute: http://cts.nlm.org/fhir/ValueSet/
    * endpointUri
        * 0: http://uat-cts.nlm.org/fhir
        * 1: http://apelon-dts
        * 2: http://tx.fhir.org


*
    * http://cts.nlm.org/
*
    * http://cts.nlm.org/
    * endpointUri: http://uat-cts.nlm.org/fhir
*
    * http://cts.nlm.org/
    * endpointUri: http://apelon-dts.com/fhir
*
    * http://terminology.hl7.org/
    * endpointUri: http://tx.fhir.org
*
    * http://hl7.org/fhir/
    * endpointUri: http://tx.fhir.org


* Resource/$package
    * id
    * url
    * version
    * identifier
    * capability
    * canonicalVersion
    * checkCanonicalVersion
    * forceCanonicalVersion
    * manifest
    * offset
    * count
    * include
    * packageOnly
    * contentEndpoint
    * terminologyEndpoint
* Resource/$data-requirements
    * id
    * url
    * version
    * identifier
    * expression
    * parameters
    * canonicalVersion
    * checkCanonicalVersion
    * forceCanonicalVersion
    * manifest
    * include
    * contentEndpoint
    * terminologyEndpoint
* Resource/$draft
    * id
    * url
    * version
    * identifier
    * resource
* Resource/$approve
    * id
    * url
    * version
    * identifier
    * resource
    * approvalDate
    * artifactAssessmentType
    * artifactAssessmentSummary
    * artifactAssessmentTarget
    * artifactAssessmentRelatedArtifact
    * artifactAssessmentAuthor
* Resource/$revise
    * id
    * url
    * version
    * identifier
    * resource
* Resource/$review
    * id
    * url
    * version
    * identifier
    * resource
* Resource/$endorse
    * id
    * url
    * version
    * identifier
    * resource
* Resource/$release
    * id
    * url
    * version
    * identifier
    * resource
    * versionBehavior
    * latestFromTxServer
    * experimentalBehavior
* ActivityDefinition/$apply
* PlanDefinition/$apply
* Resource/$apply
* Measure/$evaluate-measure
* Measure/$care-gaps
* Measure/$collect-data
* Measure/$submit-data
* StructureDefinition/$questionnaire
* ValueSet/$expand
    * url
    * valueSet
    * valueSetVersion
    * context
    * contextDirection
    * filter
    * date
    * offset
    * count
    * includeDesignations
    * designation
    * includeDefinition
    * activeOnly
    * excludeNested
    * excludeNotForUI
    * excludePostCoordinated
    * displayLanguage
    * exclude-system
    * system-version
    * check-system-version
    * force-system-version
    * canonicalVersion
    * checkCanonicalVersion
    * forceCanonicalVersion
    * manifest
    * expansion
    * includeDraft
-->


---

File: repos/HL7_SLASH_crmi-ig/input/pages/packaging.md

{:toc}

{: #artifact-packaging}

To facilitate publishing and distribution of canonical resources and knowledge artifacts, this Implementation Guide
provides guidance on how to package knowledge artifacts, either independently, or as part of a collection of related artifacts.

### Packaging Artifacts
{: #packaging-artifacts}

#### FHIR Bundle

In general, artifacts such as libraries, measures, and test cases can be packaged as a Bundle
of type `transaction`. However, since large artifact packages may span multiple bundles, the type
`collection` **MAY** be used as well. In that case, the bundles **SHOULD** be processed as a unit (i.e. as 
a single transaction). The intent of splitting the bundles is to allow large packages to be processed, 
but in the case that they are split, transactional considerations are the responsibility of the consumer.

An artifact bundle contains the artifact as the first entry in the bundle, and optionally the
dependencies and associated artifacts as subsequent entries as follows:

1. **Artifact**: The main artifact resource for the package
2. **Dependencies**: Any dependent artifact referenced by the main artifact
3. **Test Cases**: Any test cases defined for the artifact

Although the scope of the package is a single artifact, this same approach can be used for multiple artifacts by defining an `asset-collection` library as the main artifact.

Dependencies consist of any knowledge artifact referenced by the main artifact (or any dependency, recursively).

Note that packaging **MAY** be restricted in various ways, including:

* Limited to only dependencies that are defined in the same package (i.e. implementation guide) as the main artifact
* Limited to specific types of artifacts (such as terminology, profiles, extensions, etc)
* Limited to specific capabilities (Shareable, Publishable, Computable, Executable)

Examples of artifact packages include:

* A Questionnaire, together with all the ValueSets referenced
* A Measure, together with all the ValueSets, Libraries, and Test Cases defined for that measure
* A StructureDefinition, together with all the parent and extension StructureDefinitions (but not the ValueSets referenced by bindings)
* A PlanDefinition, together with the Executable libraries and Expanded ValueSets required to apply the PlanDefinition in a setting without a terminology service

*Note that if an artifact package is large enough to require segmentation in multiple bundles, use of `transaction` bundles may not be feasible.

NOTE: It is recommended that each resource in the transaction is a [conditional create](https://www.hl7.org/fhir/http.html#ccreate) using the canonical URL and version as search parameters, e.g.:

```jsonc
  "entry": [
    { 
      "resource": { 
        "resourceType": "Library",
        "url": "http://example.org/Library/SomeLibrary",
        "version": "0.1.0",
        // ...
      },
      "request" :{
        "method": "POST",
        "url": "Library",
        "ifNotExist": "url=http://example.org/Library/SomeLibrary&version=0.1.0"
      }
    }
  ]
```

#### FHIR Packages

Artifacts may also be packaged following the FHIR Package specification. This involves creating a NPM package (tarball archive with a package.json). The IGPublisher build tool creates a FHIR Package when building an implementation guide.

See also: [FHIR Package Specification](https://confluence.hl7.org/display/FHIR/NPM+Package+Specification)

### Artifact Terminology

To support packaging and distribution of the terminology required for a particular artifact, this implementation guide defines terminology profiles for the capability categories:

* ComputableValueSet - The definition of a value set (essentially the ValueSet.compose element)
* ExpandedValueSet - The definition of a value set (essentially the ValueSet.expansion element)

Whether to package and distribute Computable or Expanded value sets is a consideration of the target environment. If the environment is expected to have access to a fully-featured terminology server capable of expanding the required value sets, then packaging Computable value sets only can potentially save on bundle size. Conversely, if the target environment is not expected to have access to a terminology server (an occasionally connected environment for example), then packaging Expanded value sets only may be more appropriate.

In addition, the $package operation defines a `terminologyCapabilities` parameter to support more fine-grained control over how value sets are packaged for a particular environment.

### Package Conformance
{: #package-conformance}

To support usage of a knowledge artifact, the artifact package contains the following general components:

* Structured representation of the artifact and associated metadata (the artifact resource)
* Human readable description of the artifact contents (the Narrative of the artifact resource)
* Machine readable description of the logic involved in the artifact (in the Library resource as additional attachments containing the Expression Logical Model (ELM) content for the CQL, for example)
* Optionally, all the required libraries referenced by the library, recursively (included as Library resources)
* Optionally, all the required terminologies referenced by the library, or any required libraries (included as CodeSystem and/or ValueSet resources)

In addition, packages may be built for specific environments with particular capabilities. At the highest level, packages may be requested to have the capability categories identified by this implementation guide (Shareable, Publishable, Computable, and Executable). More fine-grained control over capabilities may be provided by parameters to the packaging operation such as `terminologyCapabilities`.

The following are conformance requirements that apply to the FHIR Bundle when packaging an artifact using the bundling approach:

**Conformance Requirement 4.1 (Artifact Packaging):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-1)
{: #conformance-requirement-4-1}

  1. The first entry in an artifact bundle **SHALL** be the artifact resource conforming to the artifact profile dictated by the target package capability ([Shareable, Publishable, Computable, Executable](profiles.html#artifact-capability-profiles)
  2. Artifact bundles **MAY** include any libraries referenced by the primary library
  3. Artifact bundles **MAY** include any code systems and value sets referenced by the primary library or any required libraries.

### Intellectual Property of Packaging
  {: #intellectual-property-packaging}

**Conformance Requirement 4.2 (Intellectual Property Considerations):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-2)
{: #conformance-requirement-4-2}

  1. Artifacts distributed in this way **SHALL** carry the copyright and intellectual property declarations as mandated by the publishing (or stewarding) entity that governs the use of the content.



---

File: repos/HL7_SLASH_crmi-ig/input/pages/profiles.md

{:toc}

{: #profiles}

For definitional artifacts, this implementation guide defines categories of profiles to represent knowledge capabilities for shareable, computable, publishable, and executable knowledge artifacts. These categories are proposed as a way to help facilitate management of expectations in the content development lifecycle, as well as address common challenges that have been encountered in the development of knowledge artifacts across the quality improvement spectrum, including guideline development, public health reporting specifications, clinical decision support rules, and quality measures. The expectation is that these same challenges will arise in any knowledge artifact development effort, and that the profiles and solutions proposed here will be useful in addressing those challenges.

Most knowledge artifacts are typically at least shareable, and where appropriate for the target environment, artifacts **SHOULD** declare the capabilities they support using the cqf-knowledgeCapability extension, as well as the knowledge representation level of the artifact using the cqf-knowledgeRepresentationLevel extension, as defined in the shareable profiles.

* **Shareable**: Shareable profiles set the minimum expectations for including an artifact in a repository or implementation guide, including the URL, version, name, and publisher.
* **Computable**: Computable profiles deal with authoring and design-time considerations, describing the minimum expectations for exchanging a machine-readable representation of an artifact. At a minimum, a computable artifact is one that does not have only human-readable content.
* **Publishable**: Publishable profiles describe the expectations for publication and distribution of an artifact, typically as part of an artifact repository.
* **Executable**: Executable profiles deal with run-time behavior and implementation considerations. For example, an executable library may contain compiled content that can be directly executed by an engine. At a minimum, an executable artifact is guaranteed to have all the elements required to support at least one operation appropriate to the type of artifact.

These capabilities are introduced to support separation of concerns along the spectrum from authoring to distribution to consumption, as illustrated by the following diagram:

<div style="max-width:500px;">
{% include img.html img="knowledge-capabilities.png" %}
</div>

A given artifact may provide all knowledge capabilities (Shareable, Computable, Publishable, and Executable), or it may be focused on a particular capability. For example, a ValueSet may be only Shareable and Expanded because it is intended for use in environments without access to a terminology service capable of expanding the Computable definition of the value set.

The profile categories are expressed as independent profiles to support separation of concerns. For example, a contained ValueSet included in a Questionnaire may not meet the Shareable profile (because it doesn't have a stand-alone life-cycle) but it may still meet Computable expectations.

Profiles along the various axes may have different names appropriate to what capabilities are being provided. For example, ValueSet uses ExpandedValueSet, rather than ExecutableValueSet, to make clear what run-time capability is being provided by the profile.

Note that explicit profiles for capabilities are only defined when there are specific elements of the artifact involved in supporting that capability. For example, there is no executable ActivityDefinition profile, but that doesn't mean that ActivityDefinition artifacts cannot be executable, only that there are no additional conformance expectations for executable ActivityDefinitions specified by this implementation guide.

### Shareable
{: #shareable }

For knowledge artifacts, a _shareable_ artifact defines the minimum expectations for knowledge artifact resources to be shared between authoring, publishing, and implementation systems. This pattern is intended to apply to Canonical Resources such as ValueSet, CodeSystem, StructureDefinition, Library, and so on. The pattern is defined to ensure that an artifact has enough metadata to make sharing it through a public repository reliable. The following table provides guidance for which elements should be present in a Shareable resource profile:

| **Element** | **Guidance** |
|----|----|
| url | **SHALL** be provided because it provides the globally unique identity for the artifact |
| version | **SHALL** be provided because it ensures version tracking is possible for the artifact |
| versionAlgorithm | **SHOULD** be provided to ensure systems understand how to interpret the version element of the artifact |
| name | **SHOULD** be provided to ensure systems can reliably make use of code-generation and other system-level processing for the artifact |
| title | **SHALL** be provided to ensure systems can provide a user-friendly identifier for the artifact |
| status | **SHALL** be provided to ensure systems can track the life-cycle of the artifact |
| experimental | **SHOULD** be provided to ensure systems can differentiate production from experimental content |
| publisher | **SHOULD** be provided to ensure consumers can identify the publisher (i.e. steward) of the artifact |
| description | **SHALL** be provided to ensure systems can provide a meaningful human-readable description of the artifact |
| knowledgeCapability | **SHOULD** be provided to allow systems to understand the knowledge capability afforded by the artifact |
| knowledgeRepresentationLevel | **SHOULD** be provided to allow systems to understand the levels of representation of content provided by the artifact. |
{: .grid }

> NOTE: Because the KnowledgeRepresentationLevel code system is an R5 terminology, there are cross-version publication issues that prevent this aspect of the shareable profiles from being expressed in this version of the publication. A future version of this publication will add representation level back in to the shareable profiles.

### Publishable
{: #publishable }

For knowledge artifacts, a _publishable_ artifact defines the expectations for publication and distribution of an artifact, typically as part of an artifact repository. The Publishable pattern is defined to ensure that artifacts have enough metadata to understand when, where, and why a particular artifact would be used, as well as who contributed to it, who reviewed or endorsed it, and what evidence supports its use. The pattern is about ensuring artifacts can establish trust and credibility, as well as carry enough metadata to be discoverable in a public repository or artifact catalog. All "publishable" artifacts are also "shareable". This pattern is intended to apply to Canonical Resources such as ValueSet, CodeSystem, StructureDefinition, Library, and so on. The following table provides guidance for which elements should be present in a Publishable resource profile:

| **Element** | **Guidance** |
|----|----|
| identifier | **MAY** be provided to allow for additional identifiers beyond the URL (e.g. the OID) |
| date | **SHALL** be provided to ensure systems have a mechanism to detect changes that may not be tracked by the version |
| contact | **SHOULD** be provided to allow consumers to understand how to contact the publisher (i.e. steward) of the artifact |
| useContext | **SHOULD** be provided to allow systems to categorize by and consumers to understand the appropriate context of use for the artifact |
| jurisdiction | **DEPRECATED**, artifacts **SHOULD** use a useContext with a code of jurisdiction to provide this information for the artifact |
| purpose | **SHOULD** be provided to allow consumers to understand why an artifact was created and the intended purpose of use |
| copyright | **SHOULD** be provided to inform consumers about use and/or publishing restrictions |
| copyrightLabel | **SHOULD** be provided to allow systems to display and consumers to understand copyright information |
| approvalDate | **SHOULD** be provided to inform consumers about the primary approval date of the artifact |
| lastReviewDate | **SHOULD** be provided to inform consumers when the artifact content was last reviewed |
| effectivePeriod | **SHOULD** be provided to inform consumers what timeframe the artifact is intended to be used |
| topic | **DEPRECATED**, artifact **SHOULD** use a useContext instead |
| author | **SHOULD** be provided to inform consumers what authors contributed to the artifact |
| editor | **SHOULD** be provided to inform consumers what editors were involved in the artifact |
| reviewer | **SHOULD** be provided to inform consumers what individuals or organizations were involved in the review of the artifact |
| endorser | **SHOULD** be provided to inform consumers what individuals or organizations have endorsed the artifact |
| relatedArtifact | **SHOULD** be provided to support additional documentation, citations, etc. for the artifact |
{: .grid }

### Computable
{: #computable }

For knowledge artifacts a _computable_ artifact identifies the aspects of the artifact that are primarily focused on authoring or design-time/compile-time considerations. For example, the `compose` element of a ValueSet is a computable definition of the members of the value set. Because the computable capabilities of each type of knowledge artifact vary based on what the knowledge artifact is representing, guidance on individual elements for each profile are defined in the computable profiles.

### Executable
{: #executable }

For knowledge artifacts an _executable_ artifact identifies the aspects of the artifact that are primarily focused on implementation or run-time considerations. For example, the `expansion` element of a ValueSet is an explicit representation of the members of the value set for a particular expansion (i.e. without requiring the use of a terminology server to understand the computable definition). Because the executable capabilities of each type of knowledge artifact vary based on what the knowledge artifact is representing, guidance on individual elements for each profile are defined in the executable profile.

### Artifact Capability Profiles
{: #artifact-capability-profiles }

The following table lists the capability profiles defined for each type of knowledge artifact:

<table class="grid">
  <tr><th>Artifact</th><th>Shareable</th><th>Computable</th><th>Publishable</th><th>Executable</th></tr>
  <tr><td>ActivityDefinition</td><td><a href="StructureDefinition-crmi-shareableactivitydefinition.html">CRMIShareableActivityDefinition</a></td><td>N/A (no requirements)</td><td><a href="StructureDefinition-crmi-publishableactivitydefinition.html">CRMIPublishableActivityDefinition</a></td><td>N/A (no requirements)</td></tr>
  <tr><td>CapabilityStatement</td><td><a href="StructureDefinition-crmi-shareablecapabilitystatement.html">CRMIShareableCapabilityStatement</a></td><td>N/A (no requirements)</td><td><a href="StructureDefinition-crmi-publishablecapabilitystatement.html">CRMIPublishableCapabilityStatement</a></td><td>N/A (no requirements)</td></tr>
  <tr><td>ClinicalUseDefinition</td><td>CRMIShareableClinicalUseDefinition (Roadmap Item)</td><td>N/A (no requirements)</td><td>CRMIPublishableClinicalUseDefinition (Roadmap Item)</td><td>N/A (no requirements)</td></tr>
  <tr><td>CodeSystem</td><td><a href="StructureDefinition-crmi-shareablecodesystem.html">CRMIShareableCodeSystem</a></td><td>N/A (no requirements)</td><td><a href="StructureDefinition-crmi-publishablecodesystem.html">CRMIPublishableCodeSystem</a></td><td>N/A (no requirements)</td></tr>
  <tr><td>CompartmentDefinition</td><td>CRMIShareableCompartmentDefinition (Roadmap Item)</td><td>N/A (no requirements)</td><td>CRMIPublishableCompartmentDefinition (Roadmap Item)</td><td>N/A (no requirements)</td></tr>
  <tr><td>ConditionDefinition</td><td>CRMIShareableConditionDefinition (Roadmap Item)</td><td>N/A (no requirements)</td><td>CRMIPublishableConditionDefinition (Roadmap Item)</td><td>N/A (no requirements)</td></tr>
  <tr><td>ConceptMap</td><td><a href="StructureDefinition-crmi-shareableconceptmap.html">CRMIShareableConceptMap</a></td><td>N/A (no requirements)</td><td><a href="StructureDefinition-crmi-publishableconceptmap.html">CRMIPublishableConceptMap</a></td><td>N/A (no requirements)</td></tr>
  <tr><td>DeviceDefinition</td><td>CRMIShareableDeviceDefinition (Roadmap Item)</td><td>N/A (no requirements)</td><td>CRMIPublishableDeviceDefinition (Roadmap Item)</td><td>N/A (no requirements)</td></tr>
  <tr><td>ExampleScenario</td><td>CRMIShareableExampleScenario (Roadmap Item)</td><td>N/A (no requirements)</td><td>CRMIPublishableExampleScenario (Roadmap Item)</td><td>N/A (no requirements)</td></tr>
  <tr><td>GraphDefinition</td><td><a href="StructureDefinition-crmi-shareablegraphdefinition.html">CRMIShareableGraphDefinition</a></td><td>N/A (no requirements)</td><td><a href="StructureDefinition-crmi-publishablegraphdefinition.html">CRMIPublishableGraphDefinition</a></td><td>N/A (no requirements)</td></tr>
  <tr><td>Group</td><td>CRMIShareableGroup (Roadmap Item)</td><td>N/A (no requirements)</td><td>CRMIPublishableGroup (Roadmap Item)</td><td>N/A (no requirements)</td></tr>
  <tr><td>ImplementationGuide</td><td><a href="StructureDefinition-crmi-shareableimplementationguide.html">CRMIShareableImplementationGuide</a></td><td>N/A (no requirements)</td><td><a href="StructureDefinition-crmi-publishableimplementationguide.html">CRMIPublishableImplementationGuide</a></td><td>N/A (no requirements)</td></tr>
  <tr><td>Library</td><td><a href="StructureDefinition-crmi-shareablelibrary.html">CRMIShareableLibrary</a></td><td><a href="StructureDefinition-crmi-computablelibrary.html">CRMIComputableLibrary</a></td><td><a href="StructureDefinition-crmi-publishablelibrary.html">CRMIPublishableLibrary</a></td><td><a href="StructureDefinition-crmi-executablelibrary.html">CRMIExecutableLibrary</a></td></tr>
  <tr><td>Measure</td><td><a href="StructureDefinition-crmi-shareablemeasure.html">CRMIShareableMeasure</a></td><td>N/A (no requirements)</td><td><a href="StructureDefinition-crmi-publishablemeasure.html">CRMIPublishableMeasure</a></td><td>N/A (no requirements)</td></tr>
  <tr><td>Medication</td><td>CRMIShareableMedication (Roadmap Item)</td><td>N/A (no requirements)</td><td>CRMIPublishableMedication (Roadmap Item)</td><td>N/A (no requirements)</td></tr>
  <tr><td>MedicationKnowledge</td><td>CRMIShareableMedicationKnowledge (Roadmap Item)</td><td>N/A (no requirements)</td><td>CRMIPublishableMedicationKnowledge (Roadmap Item)</td><td>N/A (no requirements)</td></tr>
  <tr><td>MessageDefinition</td><td>CRMIShareableMessageDefinition (Roadmap Item)</td><td>N/A (no requirements)</td><td>CRMIPublishableMessageDefinition (Roadmap Item)</td><td>N/A (no requirements)</td></tr>
  <tr><td>NamingSystem</td><td><a href="StructureDefinition-crmi-shareablenamingsystem.html">CRMIShareableNamingSystem</a></td><td>N/A (no requirements)</td><td><a href="StructureDefinition-crmi-publishablenamingsystem.html">CRMIPublishableNamingSystem</a></td><td>N/A (no requirements)</td></tr>
  <tr><td>ObservationDefinition</td><td>CRMIShareableObservationDefinition (Roadmap Item)</td><td>N/A (no requirements)</td><td>CRMIPublishableObservationDefinition (Roadmap Item)</td><td>N/A (no requirements)</td></tr>
  <tr><td>OperationDefinition</td><td><a href="StructureDefinition-crmi-shareableoperationdefinition.html">CRMIShareableOperationDefinition</a></td><td>N/A (no requirements)</td><td><a href="StructureDefinition-crmi-publishableoperationdefinition.html">CRMIPublishableOperationDefinition</a></td><td>N/A (no requirements)</td></tr>
  <tr><td>PlanDefinition</td><td><a href="StructureDefinition-crmi-shareableplandefinition.html">CRMIShareablePlanDefinition</a></td><td>N/A (no requirements)</td><td><a href="StructureDefinition-crmi-publishableplandefinition.html">CRMIPublishablePlanDefinition</a></td><td>N/A (no requirements)</td></tr>
  <tr><td>Questionnaire</td><td><a href="StructureDefinition-crmi-shareablequestionnaire.html">CRMIShareableQuestionnaire</a></td><td>N/A (no requirements)</td><td><a href="StructureDefinition-crmi-publishablequestionnaire.html">CRMIPublishableQuestionnaire</a></td><td>N/A (no requirements)</td></tr>
  <tr><td>SearchParameter</td><td><a href="StructureDefinition-crmi-shareablesearchparameter.html">CRMIShareableSearchParameter</a></td><td>N/A (no requirements)</td><td><a href="StructureDefinition-crmi-publishablesearchparameter.html">CRMIPublishableSearchParameter</a></td><td>N/A (no requirements)</td></tr>
  <tr><td>SpecimenDefinition</td><td>CRMIShareableSpecimenDefinition (Roadmap Item)</td><td>N/A (no requirements)</td><td>CRMIPublishableSpecimenDefinition (Roadmap Item)</td><td>N/A (no requirements)</td></tr>
  <tr><td>Substance</td><td>CRMIShareableSubstance (Roadmap Item)</td><td>N/A (no requirements)</td><td>CRMIPublishableSubstance (Roadmap Item)</td><td>N/A (no requirements)</td></tr>
  <tr><td>SubscriptionTopic</td><td>CRMIShareableSubscriptionTopic (Roadmap Item)</td><td>N/A (no requirements)</td><td>CRMIPublishableSubscriptionTopic (Roadmap Item)</td><td>N/A (no requirements)</td></tr>
  <tr><td>StructureDefinition</td><td><a href="StructureDefinition-crmi-shareablestructuredefinition.html">CRMIShareableStructureDefinition</a></td><td>N/A (no requirements)</td><td><a href="StructureDefinition-crmi-publishablestructuredefinition.html">CRMIPublishableStructureDefinition</a></td><td>N/A (no requirements)</td></tr>
  <tr><td>StructureMap</td><td>CRMIShareableStructureMap (Roadmap Item)</td><td>N/A (no requirements)</td><td>CRMIPublishableStructureMap (Roadmap Item)</td><td>N/A (no requirements)</td></tr>
  <tr><td>TerminologyCapabilities</td><td><a href="StructureDefinition-crmi-shareableterminologycapabilities.html">CRMIShareableTerminologyCapabilities</a></td><td>N/A (no requirements)</td><td><a href="StructureDefinition-crmi-publishableterminologycapabilities.html">CRMIPublishableTerminologyCapabilities</a></td><td>N/A (no requirements)</td></tr>
  <tr><td>ValueSet</td><td><a href="StructureDefinition-crmi-shareablevalueset.html">CRMIShareableValueSet</a></td><td><a href="StructureDefinition-crmi-computablevalueset.html">CRMIComputableValueSet</a></td><td><a href="StructureDefinition-crmi-publishablevalueset.html">CRMIPublishableValueSet</a></td><td><a href="StructureDefinition-crmi-expandedvalueset.html">CRMIExpandedValueSet</a></td></tr>
</table>

> Note that the terminology-related profiles (on CodeSystem, ConceptMap, NamingSystem, and ValueSet) are defined to support usage in R4 implementations. These profiles are aligned with the same profiles defined in the R6 base specification, and when an R6 version of this implementation guide is produced, these profiles will be removed from this IG in favor of the R6 profiles in the base specification.

### Artifact Definition Profiles
{: #artifact-definition-profiles }

To support packaging, testing, and distribution of knowledge artifacts, this implementation guide defines the following additional profiles:

<table class="grid">
  <tr><th>Profile</th><th>Description</th></tr>
  <!--<tr><td><a href="StructureDefinition-crmi-artifactassessment.html">CRMIArtifactAssessment</a></td><td>A profile of Basic that supports expression and use of the <a href="http://hl7.org/fhir/artifactassessment.html">R5 ArtifactAssessment</a> resource in R4 contexts.</td></tr>-->
  <tr><td><a href="StructureDefinition-crmi-groupdefinition.html">CRMIGroupDefinition</a></td><td>A profile of Group that supports context-independent representation of groups for use in definitional contexts.</td></tr>
  <tr><td><a href="StructureDefinition-crmi-implementationguide.html">CRMIImplementationGuide</a></td><td>A profile of ImplementationGuide that allows for expansion parameters to be specified for artifacts in the IG.</td></tr>
  <tr><td><a href="StructureDefinition-crmi-manifestlibrary.html">CRMIManifestLibrary</a></td><td>A library profile used to define artifact collections that provide complete dependency and version resolution information for the artifacts in the collection.</td></tr>
  <tr><td><a href="StructureDefinition-crmi-medicationdefinition.html">CRMIMedicationDefinition</a></td><td>A profile of Medication that supports context-independent representation of medications for use in definitional contexts.</td></tr>
  <tr><td><a href="StructureDefinition-crmi-medicationknowledgedefinition.html">CRMIMedicationKnowledgeDefinition</a></td><td>A profile of MedicationKnowledge that supports context-independent representation of medication knowledge for use in definitional contexts.</td></tr>
  <tr><td><a href="StructureDefinition-crmi-moduleconfigurationlibrary.html">CRMIModuleConfigurationLibrary</a></td><td>A library profile used to define and exchange configuration information for an artifact (or collection of artifacts) for a specific endpoint.</td></tr>
  <tr><td><a href="StructureDefinition-crmi-moduledefinitionlibrary.html">CRMIModuleDefinitionLibrary</a></td><td>A library profile used to define and exchange effective data requirements and usage information for an artifact (or collection of artifacts).</td></tr>
  <tr><td><a href="StructureDefinition-crmi-softwaresystemdevice.html">CRMISoftwareSystemDevice</a></td><td>A software device used in the creation, validation, evaluation, packaging, and/or testing of a library or measure artifact.</td></tr>
  <tr><td><a href="StructureDefinition-crmi-substancedefinition.html">CRMISubstanceDefinition</a></td><td>A profile of Substance that supports context-independent representation of substances for use in definitional contexts</td></tr>
</table>


### Operation Profiles
{: #operation-profiles }

To establish consistency across knowledge operations, the following list of profiles describes knowledge operation input parameters:

<table class="grid">
  <tr><th>Profile</th><th>Description</th></tr>
  <tr>
    <td><a href="StructureDefinition-crmi-artifact-endpoint-configurable-operation.html">ArtifactEndpointConfigurableOperation</a></td>
    <td>Knowledge operations where artifact endpoint configuration can be specified.</td>
  </tr>
  <tr>
    <td><a href="StructureDefinition-crmi-artifact-operation.html">ArtifactOperation</a></td>
    <td>Knowledge operations invoked at the resource type level specifying identifier or passing resource directly</td>
  </tr>
  <tr>
    <td><a href="StructureDefinition-crmi-artifact-version-bindable-operation.html">ArtifactVersionBindableOperation</a></td>
    <td>Knowlege operations where default artifact version(s) can be specified.</td>
  </tr>
  <tr>
    <td><a href="StructureDefinition-crmi-canonical-version-bindable-operation.html">CanonicalVersionBindableOperation</a></td>
    <td><strong>DEPRECATED</strong>. This profile is here for backwards compatibility where default canonical version(s) can be specified, see ArtifactVersionBindableOperation profile as a successor.</td>
  </tr>
  <tr>
    <td><a href="StructureDefinition-crmi-manifestable-operation.html">ManifestableOperation</a></td>
    <td>Operation where default manifest to resolve canonicals can be specified.</td>
  </tr>
  <tr>
    <td><a href="StructureDefinition-crmi-pagable-operation.html">PageableOperation</a></td>
    <td>Operation where output may be pageable.</td>
  </tr>
</table>

---

File: repos/HL7_SLASH_crmi-ig/input/pages/publishing.md

{: toc}

{: #publishing}

For the purposes of this discussion, _publishing_ refers to packaging and surfacing artifacts for downstream usage, as opposed to the function of FHIR IG publishing more broadly, which is about preparing a website for implementation guidance (in addition to packaging and distribution concerns).

From the perspective of the artifact development lifecycle, publishing involves preparing, packaging, and then transmitting artifacts, as shown in the diagram below:

<div style="max-width:800px;">
{% include img.html img="CRMI-Publishing.png" %}
</div>

### Preparing Artifacts

If there is a set of artifacts that ought to be published together (e.g. in a content IG), all artifacts **SHOULD** have the same canonical URL root, and share the same version. This is similar to how software releases work.

If publishing a single artifact (outside a content IG), ensure the `.version` property of the resource does not conflict with already published ones.

This IG recommends you **SHOULD** use [semver](https://semver.org) to version artifacts, including pre-release tags as needed.

OPTIONAL: A SHA hash for each resource maybe generated to confirm immutability of the resource. This SHA **SHOULD** be based on the contents of the resource, not including the `.meta`. The value can be stored as a `meta.security` coding. The metadata about the resource **MAY** change such that it does not substantially alter or modify the resource. For example, a tag could be added or removed on a published artifact without changing the substance.

For example, the sha security label would be based on everything _except_ `meta`:

```jsonc
{ 
  "resourceType": "Library",
  "meta": {
    "security": [
      {
        "system": "sha256",
        "value": "ba7816bf8f0..."
      }
    ]
  }
}
```

so that even after adding tags, the SHA would not change:

```jsonc
{ 
  "resourceType": "Library",
  "meta": {
    "security": [
      {
        "system": "sha256",
        "value": "ba7816bf8f0..."
      }
    ],
    "tag": [
      {
        "system": "organization-preference",
        "value": "endorsed"
      }
    ]
  }
}
```

### Package Artifacts

Packaging artifacts **MAY** be either FHIR Bundles or FHIR Packages. See [Packaging](packaging.html) for more.

### Transmit to repository

There are two modes to send content to a repository, depending on how it was packaged.

**If the package is a FHIR Bundle** Publishing uses the FHIR REST API where **transaction** bundle(s) are sent to the Knowledge Artifact Repository and Knowledge Terminology Services for processing. Example publishing command:

```
POST [base]

...json body
```

For example, using the `curl` command-line utility would look something like this:

```
curl -X POST -d @content-bundle.json http://example.org/fhir-artifact-repository/
curl -X POST -d @terminology-bundle.json http://example.org/fhir-artifact-terminology-service/
```

**If the package is a FHIR Package** Publishing uses the NPM API. The receiving system **SHOULD** process the request and: (1) create non-terminology resources on the Knowledge Artifact Server, and (2) create terminology resources on the Knowledge Terminology Server. This **MAY** be accomplished using the same FHIR bundle packaging as described above. Example publishing command:
```
npm --registry http://fhir-package-registry publish ./output/package.tgz
```

NOTE: A benefit of using FHIR packages is to support existing authoring tools such as IG Publisher and SUSHI, where dependencies are managed with FHIR packages.


---

File: repos/HL7_SLASH_crmi-ig/input/pages/terminology.md

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

File: repos/HL7_SLASH_crmi-ig/input/pages/testing.md

{:toc}

{: #artifact-testing}

### Testing Artifacts
{: #testing-artifacts}

#### Test Case Structure

* Metadata
* Artifact Under Test
* Operation Under Test
* Input Parameters
* Input Data
* Expected Output Parameters
* Expected Outcome
* Expected Data

Library
* type: test-case
* cqf-testArtifact: Artifact Under Test
* cqf-testArtifact: Operation Under Test
* cqf-inputParameters: input parameters
* cqf-inputData: input data
* cqf-outputParameters: expected output parameters
* cqf-messages: expected outcome
* cqf-outputData: expected data


---

File: repos/HL7_SLASH_crmi-ig/input/pages/version-manifest.md

{:toc}

{: #version-manifest }

This topic discusses the use of terminology within artifacts and the challenges associated with achieving stable and predictable behavior of artifacts in the presence of external publication cycles.

### Artifact Terminology Usage

The use of standardized terminologies in canonical resources (including profile and extension definitions, as well as knowledge artifacts such as questionnaires, measures, and decision support rules) is key to enabling interoperable semantics, allowing authors and consumers of these artifacts to share a common understanding. In particular, the use of ValueSets as a means for describing shared understanding of a clinical concept or set of concepts is ubiquitous in healthcare knowledge artifacts. However, the number of standardized terminologies, as well as the differing publication cycles and versioning strategies of each present significant challenges for both authors and implementers.

This section provides a brief introduction to the key aspects of terminology usage in knowledge artifacts, specifically FHIR-based knowledge artifacts, and then describes these challenges, and proposes a solution in the form of a _version manifest_.

Standardized terminologies are used throughout FHIR to represent coded values in FHIR resources, such as a Patient's gender, the status and type of an Encounter, the code of a Condition or Procedure, or the code and result of an Observation. In all these cases, terminologies are used to represent the allowable values for these coded elements.

#### CodeSystem

Within FHIR, terminologies are represented using the [CodeSystem](http://hl7.org/fhir/codesystem) resource, which represents a single system of coded concepts. The CodeSystem resource is not intended for distribution, rather it is a description of the code system and its properties. CodeSystem resources _may_ contain content, but not necessarily, and may even have partial content, depending on the code system and use case being represented.

Code systems may be _enumerated_, meaning they simply list the concepts that are part of the code system, or they may have a formal grammar that describes rules for valid concepts in the code system, or they may have both, i.e. some enumerated concepts, as well as rules for additional concepts.

A key aspect of a CodeSystem is that can be _validated_, i.e. it is always possible to tell, given a specific code, whether the code is a member of that system. Note that it may require a terminology server to be able to answer that question.

In addition, CodeSystems may have associated properties that define additional information for each concept in the CodeSystem, as well as relationships between concepts.

#### ValueSet

A ValueSet represents a collection of codes from one or more code systems. ValueSets are used throughout FHIR for various purposes including _binding_, i.e. a description of the allowable values for a codeable element.

ValueSet resources can have a _definition_ and/or an _expansion_. The _definition_ of a ValueSet is the instructions for how to build the contents of the value set (i.e. membership criteria), whereas the _expansion_ of a ValueSet is an explicit listing of the members of the value set.

The _definition_ of a ValueSet is represented in the `compose` element, while the _expansion_ is represented in the `expansion` element.

Value set definitions can be _intensional_, where the membership of codes in the value set is defined in terms of expressive criteria:

* `73211009 | Diabetes mellitus (disorder) |` and all child codes, recursively

Or they can be _extensional_, where the definition is simply an enumeration of codes:

* `73211009 | Diabetes mellitus (disorder) |`
* `46635009 | Diabetes mellitus type 1 (disorder) |`
* `31321000119102 | Diabetes mellitus type 1 without retinopathy (disorder) |`
* ...

Note that whether a value set is defined intensionally or extensionally, a terminology server that understands the code systems involved in the ValueSet is _required_ to calculate a proper expansion, not only because intensional criteria must be evaluated according to the rules and properties of the code system, but because even extensional value sets must be expanded with consideration for whether the codes are active in the version of the code system being used to perform the expansion.

For a complete discussion of terminology usage in FHIR and value set expansion, refer to the [Terminology](http://hl7.org/fhir/terminology-module.html) module in the FHIR specification.

#### Using ValueSets in Artifacts

Because value set definitions can refer to code systems generally, rather than to a specific version of a code system, as new code system versions are published, the expansion of a value set changes over time. Unless the version of the code system to be used is specifically identified as part of the expansion request, terminology servers will typically use the most recent version available version of the code system:

{% include img.html img="valueset-expansion.png" %}

When value sets are used in conformance resources and knowledge artifacts, this means that depending on when and where a given artifact is used, expansions of value sets may be different, resulting in different behaviors. For example, if a quality measure is using a ValueSet to identify conditions of interest, whether or not a particular code is present in the expansion can mean the difference between a particular case being in or out of the numerator of the measure.

In addition, because artifacts are often used for many years after they were originally released, this problem grows worse over time, as depicted in the following diagram:

{% include img.html img="valueset-usage.png" %}

In this example, consider the development of a quality measure (as depicted by the box labelled 'Measure' in `draft` status). The measure refers to a specific value set of SNOMED-CT codes. At the time the measure is being authored (January 2021), the September 2020 version of SNOMED-CT is the latest available version (20200901). When the measure evaluated at this time, the expansion of the value set using the September 2020 version of SNOMED-CT would be, as depicted by the dotted line.

By the time the measure is released in May of 2021 (as depicted by the box labelled 'Measure' in `active` status), a new version of SNOMED-CT has been published, the March 2021 version, so evaluating the measure at this point would use an expansion of the value set with the March 2021 version of SNOMED.

When the measure is actually used in implementation, in the reporting year 2022, yet more versions of SNOMED-CT are published, resulting in even more potential for different expansions, and therefore different results for the evaluation of the same measure, even on the same input data.

To make matters worse, a new version of the measure is started in January of 2022, which at the time would use the September 2021 version of SNOMED, and by the time that new version is released, SNOMED will have released the March version.

Even in this simplified example, we have multiple versions of a measure using the same version of a value set and potentially producing different results depending on when the measure is evaluated.

In addition, this challenge exists for any artifact that makes use of value sets in FHIR, including profiles, extensions, questionnaires, decision support rules, measures, and others. The following sections consider proposed solutions to this problem, and recommends the solution provided by this implementation guide, a version manifest.

#### Option 1: Specify code system version in the ValueSet definition

The first option we consider is to specify the code system version as part of the ValueSet definition. That way implementations will always get the same expansion because the code system version is explicit.

However, this option is contrary to one of the primary motivating factors for defining expression-based (i.e. intensional) value sets, that when new codes are added to a code system that meet the intent of the value set, they will be automatically included when the value set is expanded with that new version of the code system. Consider the intensional value set above for Diabetes; as new versions of SNOMED are published that include new children of the Diabetes mellitus code, those codes are automatically included.

In addition, using this option would result in a significant amount of value set maintenance. Every value set that referenced SNOMED, for example, would have to be versioned every time a new version of SNOMED was released.

This option would also mean that artifacts that made use of the value set would have to be updated to reference the new version of the value set, further compounding the amount of maintenance effort involved, as well as limiting the resuability of the resulting value sets.

#### Option 2: Specify code system and value set versions in the Artifact definition

The second option we consider is to specify the code system and value set versions as part of the artifact definition. For example, when authoring a quality measure that refers to the Diabetes value set above, refer to it by version specifically, and include information about the code system version that should be used to perform the expansion.

However, this option again creates a significant maintenance burden because it requires artifact authors to _version_ their artifacts, even though nothing about the definition really changed.

#### Option 3: Version Manifest

The third option, and the one recommended by this implementation guide, is to separate the version information from both the artifact and the value set, and provide it as part of a _version manifest_, as depicted in the following diagram:

{% include img.html img="version-manifest-usage.png" %}

This approach means that the version information can be supplied as part of the release packaging for the artifact without needing to change either the value sets being used, or the artifacts being implemented.

In addition, it allows the same artifacts and value sets to be included in different artifact packages, and means that the version can be used to only reflect real change in the artifacts, rather than having to increment version information just to support terminology versioning.

### Version Manifest
{: #version-manifest-detail}

A _version manifest_ as defined by this implementation guide is an _asset collection_ library (i.e. an instance of a Library resource with a type of `asset-collection`), and conforming to the [CRMIManifestLibrary](StructureDefinition-crmi-manifestlibrary.html) profile. A version manifest may contain any number of `depends-on` `relatedArtifact` entries to specify the version for any references to canonical resources within the artifacts of the release.

In addition, the version manifest profile allows for specifying the _expansion parameters_, i.e. values for the parameters that should be provided to the `$expand` operation whenever an expansion request is made.

Version manifests typically correspond to program-level artifacts such as "eCQM Annual Update - Eligible Hospitals". A version manifest may have any number of `composed-of` `relatedArtifact` entries to specify the component artifacts that make up a release.

And to support artifacts that make use of Clinical Quality Language, a version manifest may also include a cqlOptions extension that allows various CQL options to be provided as part of the manifest.

To make use of a version manifest, whenever a version-independent canonical reference from an artifact needs to be resolved, first check the version manifest to determine whether the canonical has a version-binding in the manifest. If it does not, proceed as normal. If it does, use the canonical from the version-binding in order to resolve the reference.

### Implementation Strategy

There are two potential implementation strategies considered here:

1. A `manifest` parameter to an operation that involves artifact evaluation
2. An `X-Manifest` header that allows the version manifest binding behavior to be described independent of the specific operation being performed

#### Manifest Parameter

The first approach to implementation involves defining a `manifest` parameter on operations that involve artifact evaluation. This is the approach taken for the `ValueSet/$expand` operation defined in this implementation guide, and provides a way to describe the expected behavior as part of the definition of the operation. See the [ValueSet/$expand](OperationDefinition-crmi-valueset-expand.html) operation definition for more details.

#### X-Manifest Header

The second approach to implementation involves specifying an `X-Manifest` header that can be included in any server request and provides a way to specify what version manifest should be used for any artifact evaluation performed as part of fulfilling that request.

This approach has several advantages for implementation:

1. Does not require modification of each operation to be performed
2. Carries context through the request, so that if multiple operations are involved, the context flows naturally
3. Provides a single point of implementation, such as using an interceptor pattern

In this approach, the custom header X-Manifest is used to specify a version-specific canonical reference to the version manifest to be used:

```http
POST [base]/Library/$evaluate
Content-Type: application/fhir+?
X-Manifest: http://example.org/fhir/Library/example-manifest

[body]
```

When performing the operation, whenever a canonical reference is resolved, if the reference is version-independent, then the version manifest is used to look up the canonical reference by url, and if a version binding is present in the manifest for that artifact, that is the reference used to resolve the resource.

For example, given the following reference to a ValueSet:

```
{
  "resourceType": "Measure",
  ...
  relatedArtifact: [
    {
      "type": "depends-on",
      "display": "Value set Mammography",
      "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1018"
    }
  ]
}
```

And the following example manifest:

```
{
  "resourceType": "Library",
  "url": "http://example.org/fhir/Library/example-manifest",
  ...,
  "relatedArtifact": [
    {
      "type": "depends-on",
      "display": "Value set Mammography",
      "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1018|20200505"
    }
  ]
}
```
Resolving the canonical reference `http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1018` in the context of a request with the X-Manifest header above, will look up the `example-manifest`, search for a version-specific reference to that URL, and return the version-specific reference for resolution.

The result is that even though the artifact refers to a value set by a version-independent reference, it can be predictably bound to the specific version of the value set required for the release.

In addition, if the operation specifically involves value set expansion, the `expansionParameters` extension of the manifest can be used to provide values for the parameters to the expand (such as `activeOnly` and `system-version`).

And finally, if the operation specifically involves CQL evaluation, the `cqlOptions` extension of the manifest can be used to provide options to the CQL evaluation environment.


---

File: repos/HL7_SLASH_crmi-ig/input/resources/README.md

This folder contains project specific conformance resource in xml or json.

These are used by the ig-publisher to create fragments to include in the IG.


---

File: repos/HL7_SLASH_crmi-ig/input/vocabulary/README.md

This folder contains page the valuesets and codesystems referenced within the IG


---

