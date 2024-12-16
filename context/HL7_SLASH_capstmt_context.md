File: repos/HL7_SLASH_capstmt/input/fsh/codesystem.fsh

CodeSystem: CapabilityFeatureCS
Id: capability-feature-cs
Title: "Capability Feature CS"
Description: "A feature that may be declared in a capability statement."
* ^version = "4.0.1"
* ^status = #active
* ^date = "2023-10-11"
* ^caseSensitive = true
* ^hierarchyMeaning = #is-a
* ^compositional = true
* ^content = #complete
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false
* ^jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001
* #features "Root concept for all feature definitions"
* #features #feature-header "Whether the server supports the Required-Feature header by which a client makes a feature as mandatory for processing a requrest properly"
* #features #security-cors
* #features #security-service
* #features #versioning
* #features #readHistory
* #features #updateCreate
* #features #updateCreate
* #features #conditionalCreate
* #features #conditionalRead
* #features #conditionalUpdate
* #features #conditionalDelete
* #features #referencePolicy
* #features #searchInclude
* #features #searchRevInclude



CodeSystem: CapabilityFeatureValueCS
Id: capability-feature-value-cs
Title: "Capability Feature Value CS"
Description: "A feature value that may be declared in a capability statement."
* ^version = "4.0.1"
* ^status = #active
* ^date = "2023-10-11"
* ^caseSensitive = true
* ^hierarchyMeaning = #is-a
* ^compositional = true
* ^content = #complete
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false
* ^jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001
* #values "Root concept for all feature values"
* #values #booleans "Values that are booleans"
* #values #booleans #true "Value is true"
* #values #booleans #false "Value is false"
* #values #versioning "Values for versioning feature"
* #values #versioning #no-version "No VersionId Support" "VersionId meta-property is not supported (server) or used (client)."
* #values #versioning #versioned "Versioned" "VersionId meta-property is supported (server) or used (client)."
* #values #versioning #versioned-update "VersionId tracked fully" "VersionId must be correct for updates (server) or will be specified (If-match header) for updates (client)."
* #values #conditional-read-status "Values for conditional-read-status"
* #values #conditional-read-status #cond-read-not-supported "Not Supported" "No support for conditional reads."
* #values #conditional-read-status #modified-since "If-Modified-Since" "Conditional reads are supported, but only with the If-Modified-Since HTTP Header."
* #values #conditional-read-status #not-match "If-None-Match" "Conditional reads are supported, but only with the If-None-Match HTTP Header."
* #values #conditional-read-status #full-support "Full Support" "Conditional reads are supported, with both If-Modified-Since and If-None-Match HTTP Headers."

* #values #conditional-delete-status "Values for conditional-delete-status"
* #values #conditional-delete-status #cond-delete-not-supported "Not Supported" "No support for conditional deletes."
* #values #conditional-delete-status #single "Single Deletes Supported" "Conditional deletes are supported, but only single resources at a time."
* #values #conditional-delete-status #multiple "Multiple Deletes Supported" "Conditional deletes are supported, and multiple resources can be deleted in a single interaction."
* #values #reference-handling-policy "Values for reference-handling-policy"
* #values #reference-handling-policy #literal "Literal References" "The server supports and populates Literal references (i.e. using Reference.reference) where they are known (this code does not guarantee that all references are literal; see 'enforced')."
* #values #reference-handling-policy #logical "Logical References" "The server allows logical references (i.e. using Reference.identifier)."
* #values #reference-handling-policy #resolves "Resolves References" "The server will attempt to resolve logical references to literal references - i.e. converting Reference.identifier to Reference.reference (if resolution fails, the server may still accept resources; see logical)."
* #values #reference-handling-policy #enforced "Reference Integrity Enforced" "The server enforces that references have integrity - e.g. it ensures that references can always be resolved. This is typically the case for clinical record systems, but often not the case for middleware/proxy systems."
* #values #reference-handling-policy #local "Local References Only" "The server does not support references that point to other servers."


CodeSystem: ProcessingStatusCS
Id: processing-status-cs
Title: "Processing Status Code System"
Description: "CodeSystem for feature-query processing status"
* ^caseSensitive = true
* #all-ok "All OK"
* #unknown "Unknown"
* #feature "Feature"
* #context "Context"
* #unauthorized "Unauthorized"
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false

---

File: repos/HL7_SLASH_capstmt/input/fsh/extensions.fsh

Extension: Feature
Id: feature
Description: "This extension documents the features of a system using code/value pairs"
* ^jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001* 
* ^context[0].type = #element
* ^context[=].expression = "CapabilityStatement.rest"
* extension contains
    definition 1..1 MS and
    value 1..1 MS 
* extension[definition].value[x] 1..1
* extension[definition].value[x] only Canonical(FeatureDefinition)
* extension[value].value[x] 1..1 

---

File: repos/HL7_SLASH_capstmt/input/fsh/features.fsh

Instance:   FeatureSupport
InstanceOf: FeatureDefinition
Description: """This feature describes support for the Application Feature Framework."""
Usage:  #example
* url = "http://hl7.org/fhir/uv/application-feature/FeatureDefinition/FeatureSupport"
* name = "ApplicationFeatureSupport"
* description = "This feature is used to report conformance/support of a particular version of the Feature Framework. The value is a code which is the most recent version of the framework supported"
* status = #active
* valueType = #code
* context[+] = "http://hl7.org/fhir/StructureDefinition/CapabilityStatement#CapabilityStatement"


---

File: repos/HL7_SLASH_capstmt/input/fsh/models.fsh

Logical: FeatureDefinition
Title: "Feature Definition"
Parent: CanonicalResource
Description: """
A definition of a feature that applications may implement, or be required to implement. Features are an aspect of a an  applications implementation that 
generally impacts on the handling of data received from or provided to from the application, which makes it worth declaring. Once declared,  
"""
* valueType 1..1 code "Type of value associated with the feature" """
  Features are very boolean: true or false for whether the application implements the feature, but the value 
  associated with the feature might be a number, a string, or some kind of code
"""
* valueType from http://hl7.org/fhir/ValueSet/data-types
* valueSet 0..1 Canonical(ValueSet) "ValueSet that controls what coded value are allowed" """
  If a value set is specified, the value of the data type must come from the value set, and the 
  value type must be one of the bindeable types defined in the FHIR specification
"""
* context 0..* url "The FHIR elements on which this feature can be defined" """
  The elements on which this feature can be defined. These URLs take the form or Canonica(StructureDefinition)#{element-id},
  where The structure definition is a reference to a FHIR resource - usually CapabilityStatement of TerminologyCapabilities, 
  and the element-id is a defined element within one of the resources. This is used to state where the feature applies. some
  features are defined on applications, but others apply to particular resources, or operations on resources, or particular
  code systems etc
"""
* qualifier 0..* BackboneElement "A qualifier that might provided more information about a feature implementation" """
  A qualifier is an extra piece of information that MAY or SHALL be provided when the feature is described/specified 
  that provides additional information about the feature. E.g. a feature defined on a resource may only be applicable 
  to particular events associated with the resource, or ...?
"""
  * name 1..1 code "The name of the feature"
  * description 0..1 string "A human-readable description of the qualifier."
  * valueType 1..1 code "Type of value associated with the feature" """
    Features are very boolean: true or false for whether the application implements the feature, but the value 
    associated with the feature might be a number, a string, or some kind of code
  """  
  * valueType from http://hl7.org/fhir/ValueSet/data-types
  * optional 1..1 boolean "Whether the feature is optional, or must always be present" """
    Whether the feature is optional, or must always be present when a feature is referred to 
  """


---

File: repos/HL7_SLASH_capstmt/input/fsh/operations.fsh

Instance: FeatureQuery
InstanceOf: OperationDefinition
Description: "This operation allows clients to query for features supported by a server."
Usage: #definition

* id = "feature-query"
// * url = "http://hl7.org/fhir/uv/application-feature/OperationDefinition/feature-query"
* name = "FeatureQuery"
* title = "Feature Query"
* status = #active
* kind = #operation
* description = "This operation allows clients to query for features supported by a server."
* code = #feature-query
* base = "https://hl7.org/fhir/uv/application-feature/OperationDefinition/feature-query"
* system = true
* type = true
* instance = false

* inputProfile = "http://hl7.org/fhir/uv/application-feature/StructureDefinition/FeatureQueryInputParameters"
* outputProfile = "http://hl7.org/fhir/uv/application-feature/StructureDefinition/FeatureQueryOutputParameters"
* parameter[0].name = #feature
* parameter[0].use = #in
* parameter[0].min = 1
* parameter[0].max = "1"
* parameter[0].documentation = "The feature(s) that are the subject of the query"
* parameter[0].type = #Parameters
* parameter[1].name = #return
* parameter[1].use = #out
* parameter[1].min = 0
* parameter[1].max = "1"
* parameter[1].documentation = "The answer to or any values associated with the queried feature"
* parameter[1].type = #Parameters


---

File: repos/HL7_SLASH_capstmt/input/fsh/parameters.fsh

/**************************************************************************************************************/
Profile:        FeatureQueryInputParameters
Parent:         Parameters
Title:          "Feature Query Input Parameters"
Description:    "The Parameters profile used to define the inputs of the [$feature-query](OperationDefinition-feature-query.html) operation."

* ^status = #active
* parameter 1..* MS
* parameter.name 1..1 MS
* parameter.name = "feature"
* parameter.part ^slicing.discriminator.type = #pattern
* parameter.part ^slicing.discriminator.path = "$this.name"
* parameter.part ^slicing.rules = #open
* parameter.part ^slicing.description = "Slice based on $this pattern"
* parameter.part 1..* MS
* parameter.part contains 
	  name 1..1 MS and
	  context 0..1 MS and
	  value 0..1 MS
	  
* parameter.part[name].name 1..1 MS
* parameter.part[name].name = "name"
* parameter.part[name].value[x] 1..1 MS
* parameter.part[name].value[x] only uri
* parameter.part[name].value[x] ^short = "The name of the feature. If not a core FHIR feature, must be a fully qualified URI"

* parameter.part[context].name 1..1 MS
* parameter.part[context].name = "context"
* parameter.part[context].value[x] 1..1 MS
* parameter.part[context].value[x] only string
* parameter.part[context].value[x] ^short = "An expression showing the context of the feature in the CapabilityStatement"

* parameter.part[value].name 1..1 MS
* parameter.part[value].name = "value"
* parameter.part[value].value[x] 1..1 MS
* parameter.part[value].value[x] only boolean or canonical or code or date or dateTime or decimal or id or instant or integer or markdown or oid or string or positiveInt or time or unsignedInt or uri or url or uuid or Coding or CodeableConcept
* parameter.part[value].value[x] ^short = "The expected value of the feature. To query for multiple values, supply multiple parameter elements."


Instance: FeatureQueryInputParametersExample
InstanceOf: FeatureQueryInputParameters
Description: "An example input parameter"
Usage: #example
* parameter[+].name = "feature"
* parameter[=].part[name].name = "name"
* parameter[=].part[name].valueUri = #versioning
* parameter[=].part[value].name = "value"
* parameter[=].part[value].valueUri = #versioned


/**************************************************************************************************************/
Profile:        FeatureQueryOutputParameters
Parent:         Parameters
Title:          "Feature Query Output Parameters"
Description:    "The Parameters profile used to define the outputs of the [$feature-query](OperationDefinition-feature-query.html) operation."

* ^status = #active
* parameter 0..* MS
* parameter ^short = "One repetition of the parameter element per parameter element in the input Parameters resource"
* parameter.name 1..1 MS
* parameter.name = "feature"
* parameter.part ^slicing.discriminator.type = #value
* parameter.part ^slicing.discriminator.path = "$this.name"
* parameter.part ^slicing.rules = #open
* parameter.part 1..* MS
* parameter.part contains 
	  name 1..1 MS and
	  context 0..1 MS and
	  value 0..1 MS and
	  matches 0..1 MS and
	  processing-status 0..1 MS
	  
* parameter.part[name].name 1..1 MS
* parameter.part[name].name = "name"
* parameter.part[name].value[x] 1..1 MS
* parameter.part[name].value[x] only uri
* parameter.part[name].value[x] ^short = "The name of the feature. If not a core FHIR feature, must be a fully qualified URI"

* parameter.part[context].name 1..1 MS
* parameter.part[context].name = "context"
* parameter.part[context].value[x] 1..1 MS
* parameter.part[context].value[x] only string
* parameter.part[context].value[x] ^short = "An expression showing the context of the feature in the CapabilityStatement"

* parameter.part[value].name 1..1 MS
* parameter.part[value].name = "value"
* parameter.part[value].value[x] 1..1 MS
* parameter.part[value].value[x] only boolean or canonical or code or date or dateTime or decimal or id or instant or integer or markdown or oid or string or positiveInt or time or unsignedInt or uri or url or uuid or Coding or CodeableConcept
* parameter.part[value].value[x] ^short = "The expected value of the feature"

* parameter.part[matches].name 1..1 MS
* parameter.part[matches].name = "answer"
* parameter.part[matches].value[x] 1..1 MS
* parameter.part[matches].value[x] only boolean
* parameter.part[matches].value[x] ^short = "The result of the feature query if value was specified in the input parameter"

* parameter.part[processing-status].name 1..1 MS
* parameter.part[processing-status].name = "processing-status"
* parameter.part[processing-status].value[x] 1..1 MS
* parameter.part[processing-status].value[x] only code
* parameter.part[processing-status].value[x] from http://hl7.org/fhir/uv/application-feature/ValueSet/processing-status-vs (required)
* parameter.part[processing-status].value[x] ^short = "Indicates the processing status of the feature-query operation (all-ok, etc.)"

Instance: FeatureQueryOutputParametersExample
InstanceOf: FeatureQueryOutputParameters
Description: "An example input parameter"
Usage: #example
* parameter.name = "feature"
* parameter.part[name].name = "name"
* parameter.part[name].valueUri = #versioning
* parameter.part[value].name = "value"
* parameter.part[value].valueUri = #versioned
* parameter.part[matches].name = "answer"
* parameter.part[matches].valueBoolean = true
* parameter.part[processing-status].name = "processing-status"
* parameter.part[processing-status].valueCode = #all-ok


---

File: repos/HL7_SLASH_capstmt/input/fsh/profiles.fsh


Profile: FeatureCapabilityStatement
Parent: CapabilityStatement
Title: "Feature Capability Statement"
Description: "A profile on the CapabilityStatement resource that allows for feature negotiation."
* name 0..1 MS
* ^jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001
* rest.extension contains Feature named feature 0..* MS
* rest.security.extension contains Feature named feature 0..* MS
* rest.resource.extension contains Feature named feature 0..* MS
* rest.resource.interaction.extension contains Feature named feature 0..* MS
* rest.resource.searchParam.extension contains Feature named feature 0..* MS
* rest.resource.operation.extension contains Feature named feature 0..* MS
* rest.interaction.extension contains Feature named feature 0..* MS
* messaging.extension contains Feature named feature 0..* MS
* document.extension contains Feature named feature 0..* MS

Instance: FeatureCapabilityStatementExample
InstanceOf: FeatureCapabilityStatement
Description: "An example of a CapabilityStatement with feature extensions"
Usage: #example
* name = "FeatureCapabilityStatementExample"
* status = #draft
* date = 2023-10-11
* jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001
* kind = #instance
* implementation.description = "Example FeatureCapabilityStatement"
* fhirVersion = #4.0.1
* format[+] = #xml
* format[=] = #json
* rest.extension[feature].extension[definition].valueCanonical = "http://hl7.org/fhir/uv/application-feature/StructureDefinition/FeatureCapabilityStatement"
* rest.extension[feature].extension[value].valueBoolean = true
* rest.mode = #server


---

File: repos/HL7_SLASH_capstmt/input/fsh/valueset.fsh

ValueSet: CapabilityFeatureVS
Id: capability-feature-vs
Title: "Capability Feature VS"
Description: "A feature that may be declared in a capability statement"
* ^meta.lastUpdated = "2021-12-19T08:15:41.873+11:00"
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
//* ^version = "5.0.0-snapshot1"
* ^status = #active
* ^experimental = false
// * ^date = "2020-09-21"
* ^publisher = "HL7 (FHIR Project)"
* include codes from system CapabilityFeatureCS
* include codes from system http://hl7.org/fhir/restful-interaction


ValueSet: CapabilityFeatureValueVS
Id: capability-feature-value-vs
Title: "Capability Feature Value VS"
Description: "A vaule for a feature that may be declared in a capability statement"
* ^meta.lastUpdated = "2021-12-19T08:15:41.873+11:00"
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
// * ^version = "5.0.0-snapshot1"
* ^status = #active
* ^experimental = false
// * ^date = "2020-09-21"
* ^publisher = "HL7 (FHIR Project)"
* include codes from system CapabilityFeatureValueCS


ValueSet: ProcessingStatusVS
Id: processing-status-vs
Title: "Processing Status Value VS"
Description: "A vaule for a feature that may be declared in a capability statement"
* ^meta.lastUpdated = "2021-12-19T08:15:41.873+11:00"
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = true
* ^date = "2020-09-21"
* include codes from system ProcessingStatusCS

---

File: repos/HL7_SLASH_capstmt/input/pagecontent/downloads.md

### Downloads
* The full [CapabilityStatement Implementation Guide](full-ig.zip)
* FHIR CapabilityStatement IG Resource Definitions [(JSON)](definitions.json.zip) [(XML)](definitions.xml.zip) [(TTL)](definitions.ttl.zip)
* FHIR CapabilityStatement IG Profile Examples [(JSON)](examples.json.zip) [(XML)](examples.xml.zip) [(TTL)](examples.ttl.zip)
* FHIR CapabilityStatement IG [Validator Pack](validator-hl7.fhir.uv.application-feature.pack)

#### Package File
The following package file includes an NPM  (Node Package Manager) package file used by many of the FHIR tools. It contains all the value sets, profiles, extensions, list of pages and URLs in the implementation guide (IG), etc. defined as part of this version of the IG. This file should be the first choice whenever generating any implementation artifacts since it contains all of the rules about what makes the profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply to make a conformant implementation. See the overview on validating <a href="http://hl7.org/fhir/R4/validation.html">FHIR profiles and resources</a>:

* [Package](package.tgz)

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}



---

File: repos/HL7_SLASH_capstmt/input/pagecontent/index.md

## Overview

The Application Feature Framework describes a set of extensions, formats and operations that allow applications 
to describe how they implement their FHIR Interfaces and their related behavior, and how applications and 
system administrators can query applications about their feature set, which features are available, and how 
they can work with each other.

Features may be software behaviors that are directly related to FHIR based interoperability, such 
as "forces version-aware updates on resources", or they may be more general - such as "passes a
testing protocol" (potentially defined using a [[[TestScript]]] - or they may relate
to the user interface/experience, such as "the interface complies to a [named national specification]".

Features may have qualifiers that indicate in what contexts a feature applies, e.g. a feature such 
as 'supports heirarchical expansions' might be limited to some code systems, and so the feature 
is qualified by the identity of the code system.

This implementation guide defines functionality to enable these behaviors:
* Defining Features 
* Referring to Features from other resources (usually [[[CapabilityStatement]]] or [[[TerminologyCapabilities]]], but other resources are possible)
* Declaring what features are supported (or possibly supported) by the application
* Querying a server to find out what features it supports (generally, or in a particular context)
* Marking a resource to declare that it was produced by a system with a particular feature (this is done where knowledge of the feature might alter subsequent processing in a fashion not dependent on the explicit data in the instance)

## In this IG 

* [Specification](specification.html): Contains the formal specification of the application feature framework such as defining features, querying for features, and feature negotiation.
* [Artifact Index](artifacts.html): The implementable artifacts defined in this IG such as profiles, value sets, code systems, and operation definitions.

## Relationship with CapabilityStatmnet and TerminologyCapabilities 


The backbone of the [[[CapabilityStatement]]] resource lays out which resources are supported by the system, and which API interactions, operations and search parameters are supported or required for which resources. However due to the richness of the FHIR specification, there are many features for how these general API capabilities are used in detail.

The existing CapabilityStatement could support all these features by continuing to add various boolean flags and coded elements, as has been done. But there's a couple of problems with this approach:

* The CapabilityStatement resource is too large, and getting larger. This applies to both the definition (general design) and also instances of the resources, which frequently run to many megabytes in size
* Clients are often interested in a very specific subset of these features, but the existing design doesn't support subsetting the CapabilityStatement resource, or negotiation to find out whether specific features are supported
* A lot of the things we could add to CapabilityStatement need further refinement - e.g. they might only be supported/required/etc in particular circumstances, for some subset of the possible set of resources 

Discussion on these issues led to the design of this Application Feature Framework, where the features are defined using a terminological approach that allows for more flexibility around feature negotation. Note that this approach basically mandates feature negotation, because while the design of the resource itself is simplified, the actual instances of fully populated CapabilityStatement resources are very much larger. For this reason, the general intent is that by default, servers do not populate many features in their statements unless asked, though there is still utility in a fully populated feature statement.

Most of the trial-use properties in CapabilityStatement are actually features, and they may be withdrawn in a future version of the FHIR specification once the Application Feature Framework is well-proven.
The TerminologyCapabilities resources may also be significantly trimmed down during this process.

## Credits

* Rick Geimer, Lantana Consulting Group
* Grahame Grieve, Health Intersections
* Gino Canessa, Microsoft




---

File: repos/HL7_SLASH_capstmt/input/pagecontent/specification.md


### Features

Welcome to the FHIR Application Feature Framework.

A Feature is a software behavior that applications may choose to implement, or be required to implement,
where the existence (or not) of the behavior it describes changes the behavior of other actors in the 
ecosystem. Features may be software behaviors that are directly related to FHIR based interoperability, 
such  as "forces version-aware updates on resources", or they may be more general - such as "passes a
testing protocol" (potentially defined using a [[[TestScript]]] - or they may relate to the user interface/experience, 
such as "the interface complies to a [named national specification]".

There is no scope limitation to the kinds of things that Features might be be described, but the intent of 
features is that they relate to software behaviors that affect the other participants in the ecosystem of 
FHIR exchange.

#### Defining Features 

Features are defined using [FeatureDefinitions](StructureDefinition-FeatureDefinition.html). This is a 
logical structure that looks a lot like a FHIR resource (and may become one in a future version of the 
FHIR specification). The important parts of the FeatureDefintion are:

* The URL, which defines the Feature 
* The type of the value - the type that appears when the Feature is used in practice. Most Features have values that are boolean (yes/no) or simple codes, but more complex types are possible
* A list of contexts - where in a resource they might be found. Most Features will appear in either the [[[CapabilityStatement]]] or [[[TerminologyCapabilities]]] resources, but other resources are allowed
* A list of qualifiers that might be provided, and whether they must be provided for the feature to have meaning (not that non-optional features might still be omitted in queries, but can't be omitted when declaring a specific feature)

#### Features Defined in this Specification

The Application Feature Framework only defines one actual feature: [FeatureSupport](FeatureDefinition-FeatureSupport.html), which declares the most recent version of the feature framework that the application 
supports. This feature is used by applications to declare that they support the application feature framework at the root of their capability statement. 

Note that applications can implement some of all of this specification without declaring that they support the application feature framework, but if they 
do declare that it is supported, they SHALL support the following functionality:

* todo....

#### Declaring Features

Features are declared in an extension. Each Feature is a pair: a code that identifies of which features is being described, and a value for that feature.

```json
  "extension" : [{
	"url" : "http://hl7.org/fhir/uv/application-feature/StructureDefinition/feature",
    "extension" : [{
	  "url" : "definition",
      "valueCanonical" : "http://hl7.org/fhir/uv/application-feature/FeatureDefinition/FeatureSupport"
	},{
  	  "url" : "value",
	  "valueCode" : "[[[$ver]]]"
	}]
  }]
```

or in xml:

```xml
  <extension url="http://hl7.org/fhir/uv/application-feature/StructureDefinition/feature">
    <extension url="definition">
      <valueCanonical value="http://hl7.org/fhir/uv/application-feature/FeatureDefinition/FeatureSupport"/>
	</extension>
	<extension url="value">
	  <valueCode value="[[[$ver]]]"/>
	</extension>
  </extension>
```

The feature extension can appear in any resource, on any element, but in practice, it's only allowed 
to appear on the element contexts allowed in the Feature Definition. For example, the feature definition
for [[[http://hl7.org/fhir/uv/application-feature/StructureDefinition/feature]]] says that it appears 
on the root element of the [[[CapabilityStatement]]] resource (```http://hl7.org/fhir/StructureDefinition/CapabilityStatement#CapabilityStatement```):

```json
{ 
  "resourceType" : "CapabilityStatement",
  "id" : "something",
  "extension" : [{
	"url" : "http://hl7.org/fhir/uv/application-feature/StructureDefinition/feature",
    "extension" : [{
	  "url" : "definition",
      "valueCanonical" : "http://hl7.org/fhir/uv/application-feature/FeatureDefinition/FeatureSupport"
	},{
  	  "url" : "value",
	  "valueCode" : "[[[$ver]]]"
	}]
  }]
```

or in xml:

```xml
<CapabilityStatement xmlns="http://hl7.org/fhir">
  <id value="something"/>
  <extension url="http://hl7.org/fhir/uv/application-feature/StructureDefinition/feature">
    <extension url="definition">
      <valueCanonical value="http://hl7.org/fhir/uv/application-feature/FeatureDefinition/FeatureSupport"/>
	</extension>
	<extension url="value">
	  <valueCode value="[[[$ver]]]"/>
	</extension>
  </extension>
</CapabilityStatement>
```

Features defined inside the capability statement automatically have an implied scope, but are otherwise the same statement.

Here is an example of a feature defined for all resources available via REST:

```xml
<CapabilityStatement xmlns="http://hl7.org/fhir">
  <rest>
    <extension url="http://hl7.org/fhir/uv/application-feature/StructureDefinition/feature">
      <extension url="code">
        <valueCanonical value="http://hl7.org/fhir/uv/application-feature/CodeSystem/feature-versioning"/>
      </extension>
      <extension url="value">
        <valueCode value="versioned-update"/>
      </extension>
    </extension>
  </rest>
</CapabilityStatement>
```
		
Here is the same feature only defined on CodeSystem:
  

```xml  
<CapabilityStatement xmlns="http://hl7.org/fhir">
  <rest>
    <resource>
      <type value="CodeSystem"/>
	  <extension url="http://hl7.org/fhir/uv/application-feature/StructureDefinition/feature">
		<extension url="code">
		  <valueCanonical value="http://hl7.org/fhir/uv/application-feature/CodeSystem/feature-versioning"/>
		</extension>    
		<extension url="value">
		  <valueCode value="versioned-update"/>
	    </extension>
	  </extension>
    </resource>
  </rest>
</CapabilityStatement>
```

Note, however, that the feature scopes are not restricted to the contexts implied by the structure of the FeatureCapabilityStatement profile. Feature contexts are defined for features that are deeper into the system than those defined by the FeatureCapabilityStatement profile.

#### Asking for features in a CapabilityStatement 

In general, default CapabilityStatements returned from the ```/metadata``` endpoint do not include 
Feature assertions (other then possibly the FeatureFramework Feature itself), though specific features or 
other implementation guides may require that features are populated in the CapabilityStatement by default.
For other CapabilityStatements - e.g. those produced to store in registries as static copies, it is at the
discretion of the application to decide how much to populate the CapabilityStatement with the applicable 
features.

When an application fetches 

----- 

up to here....

------

General Patterns

* feature alone: returns list of values on the server (can refuse - see processing-status)
* feature + context: returns list of values in that context on the server
* feature + value: returns answer of true/false if all contexts match the supplied value
* feature + context + value: returns answer of true/false if the supplied context matches the supplied value

Responses

* feature: 'feature' literal (one repetition per request feature param)
* name: name of the feature (uri)
* context: present if provided, used to match responses to requests (uri)
* processing-status: code from the server about processing the request (e.g., all-ok, not-supported, etc.)
* value:
  * if provided in input: the value requested (datatype as defined by the feature) (even if processing fails)
  * if not provided: the value of the feature (can have multiple repetitions) (uses datatype of feature)
* answer:
  * only present if processing was successful (all-ok)
  * if a value is provided, does the supplied value match the server feature-supported value
  * if a value is not provided, does not exist


By default, when a client asks a server for it's capability statement using /metadata, which features to report on is at the discretion of the server. Typically, servers will not report any features by default. Features can be queried by search parameter or via an operation.

##### Identifying a Feature

Features are identified by an expression that includes the scope in which the feature is being asserted. Here's some examples:

* feature-query?param=updateCreate(true) - the server supports updateCreate on the update interaction for all resources
* feature-query?param=searchInclude@CodeSystem(supplements) - the server supports _include=CodeSystem.supplements
* feature-query?param=security.cors(false) - the server doesn't support CORS
* feature-query?param=security.cors(true) - the client requires a server that supports CORS

The full details of the expression format are described below.

Clients interacting with a FHIR server that supports this implementation guide SHOULD NOT download entire CapabilityStatement resources, since they may be many megabytes in size, instead use the $feature-query operation to determine if the server supports needed features. 


#### Asking for features in a CapabilityStatement 

General Patterns

* feature alone: returns list of values on the server (can refuse - see processing-status)
* feature + context: returns list of values in that context on the server
* feature + value: returns answer of true/false if all contexts match the supplied value
* feature + context + value: returns answer of true/false if the supplied context matches the supplied value

Responses

* feature: 'feature' literal (one repetition per request feature param)
* name: name of the feature (uri)
* context: present if provided, used to match responses to requests (uri)
* processing-status: code from the server about processing the request (e.g., all-ok, not-supported, etc.)
* value:
  * if provided in input: the value requested (datatype as defined by the feature) (even if processing fails)
  * if not provided: the value of the feature (can have multiple repetitions) (uses datatype of feature)
* answer:
  * only present if processing was successful (all-ok)
  * if a value is provided, does the supplied value match the server feature-supported value
  * if a value is not provided, does not exist


By default, when a client asks a server for it's capability statement using /metadata, which features to report on is at the discretion of the server. Typically, servers will not report any features by default. Features can be queried by search parameter or via an operation.

##### Features Parameter in GET requests

Clients can request that a server by using the feature parameter, which represents a query for information about a particular feature:

		GET [base]/feature-query?feature[@context](value)

For example, here is how you would ask if the Patient resource has read access:

		GET [base]/feature-query?param=read@Patient(true)

Requesting multiple features:

		GET [base]/feature-query?param=read@Patient(true)&param=update@Patient(true)

##### Feature Query Operation

TBD: add example in/out params and explain invoking them in a POST

#### Feature Negotiation

In addition to querying for a capability statement, clients can do negotation. There are 2 different approaches that are supported: an operation, and an HTTP header.

##### HTTP Header

Alternatively, a client can include a feature assertion on an HTTP header:

		GET [base]/Patient/23/_history/45
		Required-Features: param=read@Patient(true)

The server checks the header, and return a 501 Not implemented if it does not support reading historical entries for AdverseEvent.

Clients can only expect a server to check these headers if the server declares that it does using the feature rest:server.feature-header = true.



---

