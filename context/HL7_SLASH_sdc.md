File: repos/HL7_SLASH_sdc/sushi-config.yaml

id: hl7.fhir.uv.sdc
canonical: http://hl7.org/fhir/uv/sdc
version: 4.0.0-ballot
name: StructuredDataCapture
title: Structured Data Capture
status: active
publisher:
  name: HL7 International / FHIR Infrastructure
  url: http://www.hl7.org/Special/committees/fiwg
contact:
    telecom:
      - system: url
        value: http://www.hl7.org/Special/committees/fiwg
description: The SDC specification provides an infrastructure to standardize the capture and expanded use of patient-level data collected within an EHR.
license: CC0-1.0
fhirVersion: 4.0.1
parameters:
  auto-oid-root: 2.16.840.1.113883.4.642.40.17
  apply-publisher: true
  apply-contact: true
  globals-in-artifacts: true
  show-inherited-invariants: false
  shownav: true
  version-comparison: 
   - 3.0.0
copyrightYear: 2022+
releaseLabel: STU 4 ballot
jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#001 "World"
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    valueCode: "trial-use"
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
    valueInteger: "4"
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: "fhir"
dependencies:
  hl7.fhir.r4.examples:
    id: examples
    uri: http://hl7.org/fhir/ImplementationGuide/fhir
    version: 4.0.1
  hl7.fhir.uv.extensions.r4:
    id: ext
    version: 5.1.0
  hl7.fhir.extensions.r5:
    id: r5ext
    version: 4.0.1
    reason: |
      Makes available certain R5 elements for use as part of this R4 IG
pages:
  index.html:
    title: SDC Home Page
  project.html:
    title: Project and participants
  intro.html:
    title: Introduction
  security.html:
    title: Security Details
  expressions.html:
    title: Using Expressions
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: "trial-use"
  workflow.html:
    title: Basic SDC workflow
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: "trial-use"
  search.html:
    title: Finding a Questionnaire
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: "trial-use"
  rendering.html:
    title: Advanced Form Rendering
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: "trial-use"
  behavior.html:
    title: Form Behavior and Calculation
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: "trial-use"
  derive.html:
    title: Form Derivation
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: "trial-use"
  modular.html:
    title: Modular Forms
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: "trial-use"
  adaptive.html:
    title: Adaptive Forms
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: "trial-use"
  populate.html:
    title: Form Population
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: "trial-use"
  extraction.html:
    title: Form Data Extraction
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: "trial-use"
  artifacts.html:
    title: Artifact List   
  examples.html:
    title: Examples 
  downloads.html:
    title: Useful Downloads
  changes.html:
    title: IG Change History  
resources:
  StructureDefinition/sdc-questionnaire-entryMode:
    description: An indication of how the user should be prompted for answers when completing a QuestionnaireResponse
  StructureDefinition/sdc-questionnaire-enableWhenExpression:
    description: An expression that returns a boolean value for whether to enable the item
  StructureDefinition/sdc-questionnaire-minQuantity:
    description: The inclusive lower bound on the range of allowed values for a 'quantity' type question
  StructureDefinition/sdc-questionnaire-maxQuantity:
    description: The inclusive upper bound on the range of allowed values for  a 'quantity' type question
  StructureDefinition/sdc-questionnaire-answerExpression:
    description: An expression (FHIRPath, CQL or FHIR Query) that resolves to a list of permitted answers for a question item.
  StructureDefinition/sdc-questionnaire-contextExpression:
    description: A FHIR Query that resolves to one or more resources that can be displayed to the user to help provide context for answering a question
  StructureDefinition/sdc-questionnaire-answerOptionsToggleExpression:
    description: A complex expression that provides a list of the allowed options that should be enabled or disabled based on the evaluation of a provided expression.
  StructureDefinition/sdc-questionnaire-candidateExpression:
    description: A FHIRPath or CQL Expression, or FHIR Query that resolves to a list of candidate answers (usually based on other answers in the questionnaire or based on information within the health record) for the question item or that establishes context for a group item
  StructureDefinition/sdc-questionnaire-lookupQuestionnaire:
    description: For items of type reference, the reference can be populated either by picking an existing entity or by creating a new one. In the latter case, this Questionnaire allows specifying the Questionnaire to use in creating the target instance. This can be direct (if the Reference is to a Questionnaire) or indirect via mapping if the Reference is to some other sort of resource.
  StructureDefinition/sdc-questionnaire-launchContext:
    description: Resources that provide context for form processing logic (pre-population, flow-control, drop-down selection, etc.) when creating/displaying/editing a QuestionnaireResponse
  StructureDefinition/sdc-questionnaire-initialExpression:
    description: Initial value for a question answer as determined by an evaluated expression
  StructureDefinition/sdc-questionnaire-calculatedExpression:
    description: Calculated value for a question answer as determined by an evaluated expression
  StructureDefinition/sdc-questionnaire-openLabel:
    description: The label text to display beside free-text and/or unrestricted type values for an ‘open’ choice element. E.g. ‘Other, please specify’, or ‘Additional condition’, or ‘More reason(s)’, etc.
  StructureDefinition/sdc-questionnaire-itemMedia:
    description: Media to render/make available accompanying the question being asked or group or display item being rendered.
  StructureDefinition/sdc-questionnaire-itemAnswerMedia:
    description: Media to render/make available as an accompaniment to a specific answer option.
  StructureDefinition/sdc-questionnaire-width:
    description: When used with an item control that causes the question to appear as a column in a table, indicates the width to give to the column for this question.
  StructureDefinition/sdc-questionnaire-collapsible:
    description: Indicates that the child items of an item are displayed in collapsible form (either collapsed or expanded)
  StructureDefinition/sdc-questionnaire-choiceColumn:
    description: Provides guidelines for rendering multi-column choices
  StructureDefinition/sdc-questionnaire-shortText:
    description: Provides a short text for an item. This element is useful for items that require a shorter text when rendered (e.g. when item is displayed on a mobile phone).
  StructureDefinition/sdc-questionnaire-optionalDisplay:
    description: If set to true, it means that the system displaying the form (or the individual encoding the form for data capture) can choose to omit the item from display to the user.
  StructureDefinition/sdc-questionnaire-sourceQueries:
    description: A Batch Bundle containing a set of queries that should be executed to provide source data for a StructureMap to create a populated QuestionnaireResponse
  StructureDefinition/sdc-questionnaire-isSubject:
    description: If present and true, indicates that the item establishes a different subject for the group in a response
  StructureDefinition/sdc-questionnaireresponse-isSubject:
    description: If present and true, indicates that the item indicates a different subject for this group
  StructureDefinition/sdc-questionnaire-itemPopulationContext:
    description: Specifies a query that identifies the resource (or set of resources for a repeating item) that should be used to populate this Questionnaire or Questionnaire.item on initial population.
  StructureDefinition/sdc-questionnaire-observationLinkPeriod:
    description: Indicates the time-period (from 'now') to search for observations that match the Questionnaire.item.code and Questionnaire.subject when pre-populating the QuestionnaireResponse.
  StructureDefinition/sdc-questionnaire-observationExtract:
    description: If true, indicates that the observation-based approach should be used to extract either the particular item (if extension is defined on an individual question or group based on the code present) or all items in the questionnaire (if defined at the questionnaire root and if they have a code present)
  StructureDefinition/sdc-questionnaire-observation-extract-category:
    description: Indicates the Observation.category value(s) that should appear on extracted Observations for the entire Questionnaire or for the current item and descendant items.
  StructureDefinition/sdc-questionnaire-sourceStructureMap:
    description: StructureMaps that produce QuestionnaireResponses for this Questionnaire as 'target' - i.e. that can be used to create QuestionnaireResponses that are valid against this Questionnaire.
  StructureDefinition/sdc-questionnaire-targetStructureMap:
    description: StructureMaps that have QuestionnaireResponses of this Questionnaire as 'source'- i.e. that can be used to create other artifacts from QuestionnaireResponses that are valid against this Questionnaire.
  StructureDefinition/sdc-questionnaire-performerType:
    description: Indicates the types of resources that can record answers to a Questionnaire
  StructureDefinition/sdc-questionnaire-questionnaireAdaptive:
    description: Indicates if a questionnaire is adaptive - either set to true or set the base URL of the server that can perform the nextQuestion operation of the questionnaire
  StructureDefinition/sdc-questionnaire-preferredTerminologyServer:
    description: Indicates the terminology server(s) that are known to be capable of returning and potentially expanding the value set(s) associated with the whole questionnaire or a particular group or question within the questionnaire (depending on where the extension appears).
  StructureMap/QuestionnairePopulationTransform:
    description: An example of a StructureMap used to support population of a QuestionnaireResponse from a search bundle
  StructureMap/ExtractComplexSmap:
    description: An example of a StructureMap used to support extraction from a QuestionnaireResponse
  StructureMap/SDOHCCHungerVitalSignMap:
    description: A StructureMap instance that represents the resource that transforms a specific question and answer from the LOINC Hunger Vital Sign [HVS] questionnaire (LOINC code 88121-9) into a corresponding Observation (SDOHCC Observation response Hunger Vital Sign Q3 Example) and derived Condition (SDOHCC Condition Food Insecurity Example).


---

// File: input/pagecontent/StructureDefinition-sdc-questionnaire-definitionExtract-intro.md

Using this extension marks the point in a questionnaire at which a new resource will be created using the [definition](extraction.html#definition-extract) extraction process.

The extension replaces the [sdc-questionnaire-itemContextExtension](StructureDefinition-sdc-questionnaire-itemExtractionContext.html) which was only able to provide the resource type to create, and was unable to define a profile or any of the `bundle.entry.request` properties.
However either extension can be used to indicate a resource type should be extracted.

<a name="scope"></a>
## Scope and Usage
When defined at the root of a questionnaire, the resource will be created even if there are no answers, and then processing the item answers will populate any further properties not covered by the base profile.

When defined on a repeating item, a new resource will be created for each iteration of the item in the QuestionnaireResponse answers, if there is no answer in the QuestionnaireResponse, then no resource is created.

Before this extension is processed, any [sdc-questionnaire-allocateId](StructureDefinition-sdc-questionnaire-extractAllocateId.html) extensions will be processed.

Additional details on the use of this extension can be found on the [Data Extraction](extraction.html#definition-based-extraction) page.

### Populating the transaction bundle entry
After the resource skeleton is created, and all the properties have been extracted from the item answers in the QuestionnaireResponse, the `bundle.entry` properties can be populated:

* `request.method` - if the resource created has no `Id` property, then the method will be `POST`, otherwise it will be `PUT`
* `request.url` - if the resource is being updated, then the url will be the resource type and the `Id` property e.g. `Patient/123`, 
   otherwise it will be the resource type e.g. `Patient`
* `request.ifNoneMatch` - the `ifNoneMatch` value to use (default is none)
* `request.ifModifiedSince` - the `ifModifiedSince` value to use (default is none)
* `request.ifMatch` - the `ifMatch` value to use (default is none)
* `request.ifNoneExist` - the `ifNoneExist` value to use (default is none)
* `fullUrl` - the `fullUrl` value to use, if the expression is missing, or evaluates to empty, then assign a new uuid.


---

// File: input/pagecontent/StructureDefinition-sdc-questionnaire-definitionExtractValue-intro.md

This extension will only be processed while extracting a resource based on a parent item (or root) using either the [definitionExtract](StructureDefinition-sdc-questionnaire-definitionExtract.html) or [itemExtractionContext (legacy)](StructureDefinition-sdc-questionnaire-itemExtractionContext.html) extension.

It is used to define the value of a property on the resource being extracted, without requiring an item/answer in the questionnaire response (typically for fixed, or derived/calculated values).

The property is based on the value in the `definition` property, where the prefix (before the `#`) must exactly match the profile's canonical URL from the extraction context in a parent item/root.

Additional details on the use of this extension can be found on the [Data Extraction](extraction.html#definition-based-extraction) page.


---

// File: input/pagecontent/StructureDefinition-sdc-questionnaire-extractAllocateId-intro.md

<a name="scope"></a>
## Scope and Usage
This extension currently only applies to either the [definition](extraction.html#definition-extract) or [template](extraction.html#template-extract) extraction processing.

The `value` will be made available as a named variable in extract fhirpath expressions, and only within the scope of the item that contains the extension, and any child items of that collection.

When defined at the root of a questionnaire, the value will be available for all items in the questionnaire (and only allocated once).

When defined on a repeating item, the value will be new for each iteration of the item in the QuestionnaireResponse answers.


---

// File: input/pagecontent/StructureDefinition-sdc-questionnaire-templateExtract-intro.md

Using this extension marks the point in a questionnaire at which a new resource will be created using the [template-based](extraction.html#template-based-extraction) extraction process.

<a name="scope"></a>
## Scope and Usage
When defined at the root of a questionnaire, the resource will be created even if there are no answers, and then iteratively processing the template properties will populate any further properties not covered by the base template.

When defined on a repeating item, a new resource will be created for each iteration of the item in the QuestionnaireResponse answers, if there is no answer in the QuestionnaireResponse, then no resource is created.

Before this extension is processed, any [sdc-questionnaire-allocateId](StructureDefinition-sdc-questionnaire-extractAllocateId.html) extensions will be processed.

Additional details on the use of this extension can be found on the [Data Extraction](extraction.html#template-based-extraction) page.

### Populating the transaction bundle entry
After the resource is created, and all the properties have been extracted from the item answers in the QuestionnaireResponse, the `bundle.entry` properties can be populated:

* `request.method` - if the resource created has no `Id` property, then the method will be `POST`, otherwise it will be `PUT`
* `request.url` - if the resource is being updated, then the url will be the resource type and the `Id` property e.g. `Patient/123`, 
   otherwise it will be the resource type e.g. `Patient`
* `request.ifNoneMatch` - the `ifNoneMatch` value to use (default is none)
* `request.ifModifiedSince` - the `ifModifiedSince` value to use (default is none)
* `request.ifMatch` - the `ifMatch` value to use (default is none)
* `request.ifNoneExist` - the `ifNoneExist` value to use (default is none)
* `fullUrl` - the `fullUrl` value to use, if the expression is missing, or evaluates to empty, then assign a new uuid.


---

// File: input/fsh/aliases.fsh

Alias: $example = http://example.org

// Code systems - sdc
Alias: $launchContext = http://hl7.org/fhir/uv/sdc/CodeSystem/launchContext
Alias: $temp          = http://hl7.org/fhir/uv/sdc/CodeSystem/temp

// Code systems - THO
Alias: $condition-clinical   = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $condition-ver-status = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $library-type         = http://terminology.hl7.org/CodeSystem/library-type
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $usage-context-type   = http://terminology.hl7.org/CodeSystem/usage-context-type
Alias: $v2-0136              = http://terminology.hl7.org/CodeSystem/v2-0136
Alias: $v2-0203              = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $v2-0532              = http://terminology.hl7.org/CodeSystem/v2-0532
Alias: $v3-MaritalStatus     = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $v3-RoleCode          = http://terminology.hl7.org/CodeSystem/v3-RoleCode

// Code systems - core
Alias: $derivationType                 = http://hl7.org/fhir/questionnaire-derivationType
Alias: $questionnaire-display-category = http://hl7.org/fhir/questionnaire-display-category
Alias: $questionnaire-item-control     = http://hl7.org/fhir/questionnaire-item-control
Alias: $task-code                      = http://hl7.org/fhir/CodeSystem/task-code
Alias: $version-algorithm              = http://hl7.org/fhir/version-algorithm

// Code systems - external
Alias: $loinc          = http://loinc.org
Alias: $m49.htm        = http://unstats.un.org/unsd/methods/m49/m49.htm
Alias: $sct            = http://snomed.info/sct
Alias: $unitsofmeasure = http://unitsofmeasure.org

// Code systems - fake
Alias: $Australian-States = http://example.org/CodeSystem/Australian-States
Alias: $CSPHQ9            = http://example.org/CodeSystem/CSPHQ9
Alias: $chf-codes         = http://example.org/CodeSystem/chf-codes
Alias: $conditions        = http://example.org/CodeSystem/conditions
Alias: $lifestyle         = http://example.org/CodeSystem/lifestyle
Alias: $procedures        = http://example.org/CodeSystem/procedures
Alias: $provinces         = http://example.org/CodeSystem/provinces
Alias: $treatments        = http://example.org/CodeSystem/treatments
Alias: $usage-contexts    = http://example.org/fhir/CodeSystem/usage-contexts

// Operations - sdc
Alias: $assemble      = http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-assemble
Alias: $populate      = http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-populate
Alias: $populatehtml  = http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-populatehtml
Alias: $populatelink  = http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-populatelink

// Operations - core
Alias: $expand        = http://hl7.org/fhir/OperationDefinition/ValueSet-expand
Alias: $validate-code = http://hl7.org/fhir/OperationDefinition/ValueSet-validate-code

// Data models/elements
Alias: $administrative-gender = http://hl7.org/fhir/administrative-gender
Alias: $question_identifier   = http://example.org/AHRQ/form/question_identifier#HERF/DE3-cs
Alias: $question_identifier_1 = http://example.org/nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3921052v1.0/question_identifier#3921060v1.0-cs
Alias: $question_identifier_2 = http://example.org/nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3921052v1.0/question_identifier#3921071v1.0-cs
Alias: $question_identifier_3 = http://example.org/nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3921052v1.0/question_identifier#3921081v1.0-cs
Alias: $question_identifier_4 = http://example.org/nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3921052v1.0/question_identifier#3921085v1.0-cs

// Extensions - sdc
Alias: $endpoint                             = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-endpoint
Alias: $entryMode                            = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-entryMode
Alias: $itemAnswerMedia                      = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemAnswerMedia
Alias: $maxQuantity                          = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-maxQuantity
Alias: $minQuantity                          = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-minQuantity
Alias: $questionnaire-initialExpression      = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression
Alias: $questionnaire-itemExtractionContext  = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemExtractionContext
Alias: $questionnaire-itemPopulationContext  = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemPopulationContext
Alias: $questionnaire-launchContext          = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-launchContext
Alias: $questionnaire-questionnaireAdaptive  = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-questionnaireAdaptive

// Extensions - core
Alias: $adheresTo                            = http://hl7.org/fhir/StructureDefinition/workflow-adheresTo
Alias: $best-practice                        = http://hl7.org/fhir/StructureDefinition/elementdefinition-bestpractice
Alias: $conf                                 = http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
Alias: $cqf-calculatedValue                  = http://hl7.org/fhir/StructureDefinition/cqf-calculatedValue
Alias: $cqf-expression                       = http://hl7.org/fhir/StructureDefinition/cqf-expression
Alias: $cqf-library                          = http://hl7.org/fhir/StructureDefinition/cqf-library
Alias: $cqllibrary                           = http://hl7.org/fhir/StructureDefinition/cqllibrary
Alias: $designNote                           = http://hl7.org/fhir/StructureDefinition/designNote
Alias: $display                              = http://hl7.org/fhir/StructureDefinition/display
Alias: $entryFormat                          = http://hl7.org/fhir/StructureDefinition/entryFormat
Alias: $fmm                                  = http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
Alias: $itemWeight                           = http://hl7.org/fhir/StructureDefinition/itemWeight
Alias: $maxDecimalPlaces                     = http://hl7.org/fhir/StructureDefinition/maxDecimalPlaces
Alias: $maxSize                              = http://hl7.org/fhir/StructureDefinition/maxSize
Alias: $maxValue                             = http://hl7.org/fhir/StructureDefinition/maxValue
Alias: $mimeType                             = http://hl7.org/fhir/StructureDefinition/mimeType
Alias: $minLength                            = http://hl7.org/fhir/StructureDefinition/minLength
Alias: $minValue                             = http://hl7.org/fhir/StructureDefinition/minValue
Alias: $preferredTerminologyServer           = http://hl7.org/fhir/StructureDefinition/preferredTerminologyServer
Alias: $questionnaire-choiceOrientation      = http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation
Alias: $questionnaire-derivationType         = http://hl7.org/fhir/StructureDefinition/questionnaire-derivationType
Alias: $questionnaire-displayCategory        = http://hl7.org/fhir/StructureDefinition/questionnaire-displayCategory
Alias: $questionnaire-hidden                 = http://hl7.org/fhir/StructureDefinition/questionnaire-hidden
Alias: $questionnaire-itemControl            = http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl
Alias: $questionnaire-maxOccurs              = http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs
Alias: $questionnaire-minOccurs              = http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs
Alias: $questionnaire-optionExclusive        = http://hl7.org/fhir/StructureDefinition/questionnaire-optionExclusive
Alias: $questionnaire-referenceProfile       = http://hl7.org/fhir/StructureDefinition/questionnaire-referenceProfile
Alias: $questionnaire-referenceResource      = http://hl7.org/fhir/StructureDefinition/questionnaire-referenceResource
Alias: $questionnaire-signatureRequired      = http://hl7.org/fhir/StructureDefinition/questionnaire-signatureRequired
Alias: $questionnaire-sliderStepValue        = http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue
Alias: $questionnaire-supportLink            = http://hl7.org/fhir/StructureDefinition/questionnaire-supportLink
Alias: $questionnaire-unit                   = http://hl7.org/fhir/StructureDefinition/questionnaire-unit
Alias: $questionnaire-unitOption             = http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption
Alias: $questionnaire-unitValueSet           = http://hl7.org/fhir/StructureDefinition/questionnaire-unitValueSet
Alias: $questionnaire-usageMode              = http://hl7.org/fhir/StructureDefinition/questionnaire-usageMode
Alias: $questionnaireresponse-completionMode = http://hl7.org/fhir/StructureDefinition/questionnaireresponse-completionMode
Alias: $questionnaireresponse-signature      = http://hl7.org/fhir/StructureDefinition/questionnaireresponse-signature
Alias: $regex                                = http://hl7.org/fhir/StructureDefinition/regex
Alias: $rendering-style                      = http://hl7.org/fhir/StructureDefinition/rendering-style
Alias: $rendering-styleSensitive             = http://hl7.org/fhir/StructureDefinition/rendering-styleSensitive
Alias: $rendering-xhtml                      = http://hl7.org/fhir/StructureDefinition/rendering-xhtml
Alias: $standard-status                      = http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
Alias: $targetConstraint                     = http://hl7.org/fhir/StructureDefinition/targetConstraint
Alias: $valueset-conceptOrder                = http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder
Alias: $valueset-expansionSource             = http://hl7.org/fhir/StructureDefinition/valueset-expansionSource
Alias: $valueset-label                       = http://hl7.org/fhir/StructureDefinition/valueset-label
Alias: $variable                             = http://hl7.org/fhir/StructureDefinition/variable
Alias: $wg                                   = http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
Alias: $triggeredBy                          = http://hl7.org/fhir/StructureDefinition/workflow-triggeredBy

// Extensions - Cross-version
Alias: $valueset-expansionProperty           = http://hl7.org/fhir/5.0/StructureDefinition/extension-ValueSet.expansion.property
Alias: $valueset-containsProperty            = http://hl7.org/fhir/5.0/StructureDefinition/extension-ValueSet.expansion.contains.property
Alias: $questionnaireresponse-source         = http://hl7.org/fhir/5.0/StructureDefinition/extension-QuestionnaireResponse.source
//Alias: $questionnaire-versionAlgorithm       = http://hl7.org/fhir/5.0/StructureDefinition/extension-Questionnaire.versionAlgorithm%5Bx%5D
Alias: $questionnaire-versionAlgorithm       = http://hl7.org/fhir/5.0/StructureDefinition/extension-Questionnaire.versionAlgorithm[x]
Alias: $questionnaire-copyrightLabel         = http://hl7.org/fhir/5.0/StructureDefinition/extension-Questionnaire.copyrightLabel
Alias: $questionnaire-disabledDisplay        = http://hl7.org/fhir/5.0/StructureDefinition/extension-Questionnaire.item.disabledDisplay
Alias: $questionnaire-answerConstraint       = http://hl7.org/fhir/5.0/StructureDefinition/extension-Questionnaire.item.answerConstraint


---

// File: input/fsh/capabilities/sdc-form-archiver.fsh

Instance: sdc-form-archiver
InstanceOf: CapabilityStatement
Title: "SDC Form Archiver"
Description: "SDC System for archiving and retrieving the completed forms"
Usage: #definition
* url = "http://hl7.org/fhir/uv/sdc/CapabilityStatement/sdc-form-archiver"
* name = "SDCFormArchiver"
* title = "SDC Form Archiver"
* status = #active
* date = "2015-09-03"
* publisher = "HL7 International - FHIR Infrastructure"
* contact.telecom
  * system = #other
  * value = "http://wiki.siframework.org/Structured+Data+Capture+Initiative"
* description = "This profile defines the expected capabilities of the ''SDC Form Archiver'' role when conforming to the S&I Framework's [[index.html|Structured Data Capture FHIR implementation guide]].  This role is responsible for persisting (archiving) completed or partially completed forms ([[QuestionnaireResponse]] resource instances).  These instances may be submitted individually or in a bundle together with [[Provenance]] information providing details about the completion of the questionnaire response.  In some cases [[Binary]] or [[DocumentReference]] resources might also be submitted to convey source information used in the population of the questionnaire response.<br/>The purpose of this role is to capture \"work in progress\" for archival reasons.  There is no expectation that submitted form data is subsequently made available for retrieval (at least not in the same format), though it might be made available through out-of-band mechanisms."
* kind = #requirements
* fhirVersion = #1.0.0
* format[+] = #xml
* format[+] = #json
* rest
  * mode = #client
  * documentation = "The [[QuestionnaireResponse]] may be sent as a single instance or as a FHIR [[Bundle]] also containing [[Provenance]] resources providing details on the sources of information.  A Bundle submission might also include [[Binary]] and/or [[DocumentReference]] instances referring to the data used to populate the form.  A Form Archiver must support persisting, searching and retrieving those resources."
  * security.description = "Implementations must meet the general security requirements documented in the [[security.html|SDC implementation guide]]."
  * resource[+]
    * type = #QuestionnaireResponse
    * profile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaireresponse"
    * insert Interaction(#SHALL, #create, "Allows archiving (storing\) a completed or partially-completed form")
    * insert Interaction(#SHOULD, #update, "Allows updating a previously archived form. (Systems may place rules on who can update forms and under what circumstances\).")
    * insert Interaction(#MAY, #delete, "Allows removal of an archived form from a repository.  Note that the removal may be logical rather than physical. Some systems may have rules for who can remove a submitted response and under what circumstances.")
  * resource[+]
    * type = #Binary
    * insert Interaction(#SHOULD, #create, "Allows storage of a binary (generally containing information used in the completion of a [[QuestionnaireResponse]]\).  The data might be in a variety of forms.")
    * insert Interaction(#MAY, #update, "Allows updating a previously submitted binary data.  (Systems may place rules on who can update binary data and under what circumstances\).")
    * insert Interaction(#MAY, #delete, "Allows removal of binary data from a repository.  Note that the removal may be logical rather than physical. Some systems may have rules for who can remove binary data and under what circumstances.")
  * resource[+]
    * type = #DocumentReference
    * insert Interaction(#SHOULD, #create, "Allows storage of a document reference (generally containing information used in the completion of a [[QuestionnaireResponse]]\).")
    * insert Interaction(#MAY, #update, "Allows updating a previously submitted document reference.  (Systems may place rules on who can update document references and under what circumstances\).")
    * insert Interaction(#MAY, #delete, "Allows removal of document references from a repository.  Note that the removal may be logical rather than physical. Some systems may have rules for who can remove document references and under what circumstances.")
  * resource[+]
    * type = #Provenance
    * insert Interaction(#SHOULD, #create, "Allows submitting a Provenance record associated with a particular [[QuestionnaireResponse]].")
   // * insert Interaction(#SHOULD, #transaction, "Allows submission of a [[QuestionnaireResponse]] together with [[Provenance]] and other supporting resources as a single unit of work.")
  * interaction
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHOULD
    * code = #transaction
    * documentation = "Allows submission of a [[QuestionnaireResponse]] together with [[Provenance]] and other supporting resources as a single unit of work."

---

// File: input/fsh/capabilities/sdc-form-designer.fsh

Instance: sdc-form-designer
InstanceOf: CapabilityStatement
Title: "SDC Form Designer"
Description: "SDC Form authoring system"
Usage: #definition
* url = "http://hl7.org/fhir/uv/sdc/CapabilityStatement/sdc-form-designer"
* name = "SDCFormDesigner"
* title = "SDC Form Designer"
* status = #active
* date = "2014-07-06"
* publisher = "HL7 International - FHIR Infrastructure"
* contact.telecom
  * system = #other
  * value = "http://wiki.siframework.org/Structured+Data+Capture+Initiative"
* description = "This profile defines the expected capabilities of the ''SDC Form Designer'' role when conforming to the S&I Framework's [[index.html|Structured Data Capture FHIR implementation guide]].  This role is responsible for defining forms ([[Questionnaire]] resource instances) that include references to [[StructureDefinition]] resouces containing data elements that define the meaning of particular questions and can be used to aid in pre-populating and auto-populating forms."
* kind = #requirements
* fhirVersion = #1.0.0
* format[+] = #xml
* format[+] = #json
* rest
  * mode = #client
  * documentation = "The [[Questionnaire]] resource is used to create and maintain SDC-compliant forms.  The [[StructureDefinition]] resource is used to look-up existing data elements that can be referenced in forms.  Optionally, [[StructureDefinition]]s can also be created and maintained in conjunction with form editing.  This is an optional feature as not all environments will provide support for data element definitions from form authors.  The [[ValueSet]] and [[CodeSystem]] resources are used to capture allowed values for questions that are to be answered from a pre-defined list of values.  For some forms, some or all of the referenced value sets (and possibly code systems) will be handled as 'contained' resources, meaning the value set exists only in the context of the [[Questionnaire]] and cannot be referenced or maintained without also updating the form.  However, systems should support value set and code system re-use across questionnaires.  (Version-specific referencing can be used to avoid value sets from changing independent of the referencing [[Questionnaire]].)"
  * security.description = "Implementations must meet the general security requirements documented in the [[security.html|SDC implementation guide]]."
  * resource[+]
    * type = #Questionnaire
    * profile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
    * insert Interaction(#SHALL, #search-type, "Allows discovery of existing questionnaires for editing")
    * insert Interaction(#SHALL, #read, "Allows retrieval of a specific questionnaire by id")
    * insert Interaction(#SHALL, #create, "Allows submission of a new form design")
    * insert Interaction(#SHALL, #update, "Allows revision of an existing form design.  Note that certain types of updates may necessitate retiring the existing form and defining a new one.")
    * insert Interaction(#SHOULD, #history-instance, "Allows review of changes to questionnaire over time")
    * insert Interaction(#SHOULD, #vread, "Allows retrieval of a historical version of a questionnaire")
    * insert Interaction(#MAY, #delete, "Not all servers will support deletion of forms.  Status change to 'retired' will be more typical\, though deletion of draft profiles may keep repositories cleaner.")
  * resource[+]
    * type = #ValueSet
    * profile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-valueset"
    * insert Interaction(#SHALL, #search-type, "Allows discovery of existing value sets for use by questions in a form")
    * insert Interaction(#SHALL, #read, "Allows retrieval of a specific value set by id")
    * insert Interaction(#SHALL, #create, "Allows definition of a new value set used by one or more questions")
    * insert Interaction(#SHALL, #update, "Allows existing value sets referenced by a form to be maintained.  Note that certain types of updates may necessitate retiring the existing value set and defining a new one.")
    * insert Interaction(#SHOULD, #history-instance, "Allows review of changes to a value set over time")
    * insert Interaction(#SHOULD, #vread, "Allows retrieval of a historical version of a value set")
    * insert Interaction(#MAY, #delete, "Not all servers will support deletion of value sets.  Status change to 'retired' will be more typical\, though deletion of draft value sets may keep repositories cleaner.")

---

// File: input/fsh/capabilities/sdc-form-filler.fsh

Instance: sdc-form-filler
InstanceOf: CapabilityStatement
Title: "SDC Form Filler"
Description: "SDC System for completing forms"
Usage: #definition
* url = "http://hl7.org/fhir/uv/sdc/CapabilityStatement/sdc-form-filler"
* name = "SDCFormFiller"
* title = "SDC Form Filler"
* status = #active
* date = "2014-07-06"
* publisher = "HL7 International - FHIR Infrastructure"
* contact.telecom
  * system = #other
  * value = "http://wiki.siframework.org/Structured+Data+Capture+Initiative"
* description = "This profile defines the expected capabilities of the ''SDC Form Filler'' role when conforming to the S&I Framework's [[index.html|Structured Data Capture FHIR implementation guide]].  This role is responsible for retrieving pre-defined forms, requesting pre-population of forms and/or auto-populating forms, guiding the user through verifying populated data and submitting completed or partially-completed forms.<br/>Note that Form Fillers may also take on the role of [[CapabilityStatement-sdc-form-archiver.html|Form Archiver]] if they have a requirement to retain the completed version of a form (and potentially the source data that was used to complete it)."
* kind = #requirements
* fhirVersion = #1.0.0
* format[+] = #xml
* format[+] = #json
* rest
  * mode = #client
  * documentation = "The [[Questionnaire]], [[ValueSet]] and [[CodeSystem]] resources are retrieved to allow the system to guide the user through the entry process.  The [[Binary]] and [[DocumentReference]] resources allow the system to find existing clinical documents that can be within the pre-population process.  (Support for retrieval operations on these resources is optional as the relevant CDA or FHIR structures may also be directly generated by the ''Form Filler'' itself.)  Finally, the [[QuestionnaireResponse]] resource is used to record the populated form.<br/>Note: Form Fillers that support the 'populate' operation will need to be capable of consuming and rendering a partially completed QuestionnaireResponse in the same manner as if they had retrieved such a QuestionnaireResponse from a ''Form Response Manager''"
  * security.description = "Implementations must meet the general security requirements documented in the [[security.html|SDC implementation guide]]."
  * resource[+]
    * type = #Questionnaire
    * profile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
    * insert Interaction(#SHALL, #search-type, "Allows discovery of existing questionnaires to be completed")
    * insert Interaction(#SHOULD, #read, "Allows retrieval of a specific questionnaire by id.  Allows systems to maintain a 'favorites' list of forms and retrieve them by id.")
    * insert Interaction(#MAY, #history-instance, "Allows review of changes made to a questionnaire over time.  Of interest to some systems\, but probably not most.")
    * insert Interaction(#MAY, #vread, "Allows retrieval of a historical version of a questionnaire.  Most systems will make use of the current version only.")
  * resource[+]
    * type = #ValueSet
    * profile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-valueset"
    * insert Interaction(#SHALL, #read, "Allows retrieval of a specific value set by id (as referenced in a Questionnaire\)")
    * insert Interaction(#SHOULD, #vread, "Allows retrieval of a specific version of a value set (as referenced in a Questionnaire\)")
    * insert Interaction(#MAY, #history-instance, "Allows review of changes to a value set over time.  Of interest to some systems\, but probably not most.")
  * resource[+]
    * type = #CodeSystem
    * profile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-codesystem"
    * insert Interaction(#SHALL, #read, "Allows retrieval of a specific code system by id (as referenced by a ValueSet used in a Questionnaire\)")
    * insert Interaction(#SHOULD, #vread, "Allows retrieval of a specific version of a code system (as referenced by a ValueSet used in a Questionnaire\)")
    * insert Interaction(#MAY, #history-instance, "Allows review of changes to a code system over time.  Of interest to some systems\, but probably not most.")
  * resource[+]
    * type = #QuestionnaireResponse
    * profile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaireresponse"
    * insert Interaction(#SHALL, #search-type, "Allows a user to search for existing completed or partially-completed forms.  Generally used to find partially-completed forms for update.")
    * insert Interaction(#SHALL, #read, "Allows retrieval of a specific QuestionnaireResponse by id.")
    * insert Interaction(#SHALL, #create, "Allows recording a completed or partially-completed form")
    * insert Interaction(#SHALL, #update, "Allows updating an existing completed or partially-completed form.  (Systems may place rules on who can update forms and under what circumstances.\)")
    * insert Interaction(#SHALL, #delete, "Allows removal of a completed form from a repository.  Note that the removal may be logical rather than physical.  Some systems may have rules for who can remove a completed form and under what circumstances.")
    * insert Interaction(#SHOULD, #history-instance, "Allows review of prior versions of an answer set - allows reversion to previously recorded versions")
  * resource[+]
    * type = #DocumentReference
    * insert Interaction(#SHOULD, #search-type, "Allows discovery of existing documents that may be included in a form pre-population request")
  * resource[+]
    * type = #Binary
    * insert Interaction(#SHOULD, #read, "Allows retrieval of a specific binary (as pointed to by a DocumentReference\)")
    * insert Interaction(#MAY, #vread, "Allows retrieval of a historical version of a binary.  In general\, the most recent version would be appropriate\, but some may prefer to use the specific version referenced by a DocumentReference.")
  * insert Operation(#SHOULD, "expand", $expand)
  * insert Operation(#SHOULD, "validate code", $validate-code)
  * insert Operation(#MAY, "populate", $populate)
  * insert Operation(#MAY, "populatehtml", $populatehtml)
  * insert Operation(#MAY, "populatelink", $populatelink)

---

// File: input/fsh/capabilities/sdc-form-manager.fsh

Instance: sdc-form-manager
InstanceOf: CapabilityStatement
Title: "SDC Form Manager"
Description: "SDC Repository for forms"
Usage: #definition
* url = "http://hl7.org/fhir/uv/sdc/CapabilityStatement/sdc-form-manager"
* name = "SDCFormManager"
* title = "SDC Form Manager"
* status = #active
* date = "2014-07-06"
* publisher = "HL7 International - FHIR Infrastructure"
* contact.telecom
  * system = #other
  * value = "http://wiki.siframework.org/Structured+Data+Capture+Initiative"
* description = "This profile defines the expected capabilities of the ''SDC Form Manager'' role when conforming to the S&I Framework's [[index.html|Structured Data Capture FHIR implementation guide]].  This role is responsible for maintaining a repository of form definitions and also of performing pre-population of form data."
* kind = #requirements
* fhirVersion = #1.0.0
* format[+] = #xml
* format[+] = #json
* rest
  * mode = #server
  * documentation = "The primary focus of the repository is the definition of [[Questionnaire]]s.  However, [[ValueSet]]s and [[CodeSystem]]s must also be supported to allow definition of coded data elements.  Some data elements will choose to maintain value sets as 'contained' resources, meaning the value set exists only in the context of the data element and cannot be referenced or maintained without also updating the data element.  However, systems should support value set re-use across data elements.  (Version-specific referencing can be used to avoid value sets from changing independent of the referencing [[Questionnaire]].)"
  * security.description = "Implementations must meet the general security requirements documented in the [[security.html|SDC implementation guide]]."
  * resource[+]
    * type = #Questionnaire
    * profile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
    * insert Interaction(#SHALL, #search-type, "Allows a user to search for existing forms")
    * insert Interaction(#SHALL, #read, "Allows retrieval of a specific known form")
    * insert Interaction(#SHALL, #vread, "Allows retrieval of a specific version of a form")
    * insert Interaction(#SHALL, #history-instance, "Allows review of changes to a form over time")
    * insert Interaction(#SHALL, #create, "Allows defining a new form.  Repositories requiring curation of submitted forms may require all new data elements to have a status of 'draft'.")
    * insert Interaction(#SHALL, #update, "Allows an existing form to be updated.  Servers may choose to prohibit certain types of edits\, instead requiring the creation of a new questionnaire (and potentially the retiring of the existing questionnaire\).  Servers may also limit who can change particular forms.")
    * insert Interaction(#MAY, #delete, "Allows removal of an existing form.  Servers may choose to not support deletions and instead require that the form's status be changed to 'retired'.  Other systems support deletions but limit them to forms meeting certain requirements.  E.g. only forms with a status of draft or only forms that have been retired for at least two years\, etc.")
    * searchInclude = "Questionnaire.group.question.options"
    * insert SearchParam(#SHALL, "code", #token, http://hl7.org/fhir/SearchParameter/Questionnaire-code )
    * insert SearchParam(#SHALL, "context", #token, http://hl7.org/fhir/SearchParameter/Questionnaire-context)
    * insert SearchParam(#SHALL, "date", #date,  http://hl7.org/fhir/SearchParameter/Questionnaire-date)
    * insert SearchParam(#SHALL, "identifier", #token,  http://hl7.org/fhir/SearchParameter/Questionnaire-identifier)
    * insert SearchParam(#SHALL,"publisher", #string,  http://hl7.org/fhir/SearchParameter/Questionnaire-publisher)
    * insert SearchParam(#SHALL, "status", #token,  http://hl7.org/fhir/SearchParameter/Questionnaire-status)
    * insert SearchParam(#SHALL, "title", #string,  http://hl7.org/fhir/SearchParameter/Questionnaire-title)
    * insert SearchParam(#SHALL, "version", #token,  http://hl7.org/fhir/SearchParameter/Questionnaire-version)
    * insert SearchParam(#SHALL, "definition", #token,  http://hl7.org/fhir/uv/sdc/SearchParameter/questionnaire-definition)
  * resource[+]
    * type = #CodeSystem
    * profile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-codesystem"
    * insert Interaction(#SHALL, #search-type, "Allows discovery of existing code systems for use in authoring questionnaires")
    * insert Interaction(#SHALL, #read, "Allows retrieval of a specific code system referenced within a questionnaire")
    * insert Interaction(#SHALL, #vread, "Allows retrieval of a historical version of a code system as referenced within a questionnaire")
    * insert Interaction(#SHALL, #history-instance, "Allows review of changes to a code system over time")
    * insert Interaction(#SHALL, #create, "Allows definition of a new code system used by one or more questionnaires")
    * insert Interaction(#SHALL, #update, "Allows existing code systems referenced by one or more questionnaires to be maintained")
    * insert Interaction(#MAY, #delete, "Not all servers will support deletion of code systems.  Status change to 'retired' will be more typical\, though deletion of draft code systems may keep repositories cleaner.")
    * insert SearchParam(#SHALL, "code", #token,  http://hl7.org/fhir/SearchParameter/CodeSystem-code)
    * insert SearchParam(#SHALL, "date", #date,  http://hl7.org/fhir/SearchParameter/conformance-date)
    * insert SearchParam(#SHALL, "description", #string,  http://hl7.org/fhir/SearchParameter/conformance-description)
    * insert SearchParam(#SHALL, "name", #string,  http://hl7.org/fhir/SearchParameter/conformance-name)
    * insert SearchParam(#SHALL, "status", #token,  http://hl7.org/fhir/SearchParameter/conformance-status)
    * insert SearchParam(#SHALL, "system", #uri,  http://hl7.org/fhir/SearchParameter/CodeSystem-system)
    * insert SearchParam(#SHALL, "url", #uri,  http://hl7.org/fhir/SearchParameter/conformance-url)
    * insert SearchParam(#SHOULD, "assembledFrom", #token, http://hl7.org/fhir/uv/sdc/SearchParameter/questionnaire-assembledFrom)
    * insert SearchParam(#SHOULD, "assemble-expectation", #token,  http://hl7.org/fhir/uv/sdc/SearchParameter/questionnaire-assemble-expectation)
  * resource[+]
    * type = #ValueSet
    * profile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-valueset"
    * insert Interaction(#SHALL, #search-type, "Allows discovery of existing value sets for use in authoring questionnaires")
    * insert Interaction(#SHALL, #read, "Allows retrieval of a specific value set referenced within a questionnaire")
    * insert Interaction(#SHALL, #vread, "Allows retrieval of a historical version of a value set as referenced within a questionnaire")
    * insert Interaction(#SHALL, #history-instance, "Allows review of changes to a value set over time")
    * insert Interaction(#SHALL, #create, "Allows definition of a new value set used by one or more questionnaires")
    * insert Interaction(#SHALL, #update, "Allows existing value sets referenced by one or more questionnaires to be maintained")
    * insert Interaction(#MAY, #delete, "Not all servers will support deletion of value sets.  Status change to 'retired' will be more typical\, though deletion of draft value sets may keep repositories cleaner.")
    * searchInclude = "ValueSet.compose.import"
    * insert SearchParam(#SHALL, "date", #date,  http://hl7.org/fhir/SearchParameter/conformance-date)
    * insert SearchParam(#SHALL, "description", #string,  http://hl7.org/fhir/SearchParameter/conformance-description)
    * insert SearchParam(#SHALL, "name", #string,  http://hl7.org/fhir/SearchParameter/conformance-name)
    * insert SearchParam(#SHALL, "reference", #uri,  http://hl7.org/fhir/SearchParameter/ValueSet-reference)
    * insert SearchParam(#SHALL, "status", #token,  http://hl7.org/fhir/SearchParameter/conformance-status)
  * insert Operation(#SHOULD, "expand", $expand)
  * insert Operation(#SHOULD, "validate code", $validate-code)
  * insert Operation(#MAY, "populate", $populate)
  * insert Operation(#MAY, "populatehtml", $populatehtml)
  * insert Operation(#MAY, "populatelink", $populatelink)
  * insert Operation(#MAY, "assemble", $assemble)

---

// File: input/fsh/capabilities/sdc-form-receiver.fsh

Instance: sdc-form-receiver
InstanceOf: CapabilityStatement
Title: "SDC Form Receiver"
Description: "SDC Repository for completed forms"
Usage: #definition
* url = "http://hl7.org/fhir/uv/sdc/CapabilityStatement/sdc-form-receiver"
* name = "SDCFormReceiver"
* title = "SDC Form Receiver"
* status = #active
* date = "2014-07-06"
* publisher = "HL7 International - FHIR Infrastructure"
* contact.telecom
  * system = #other
  * value = "http://wiki.siframework.org/Structured+Data+Capture+Initiative"
* description = "This profile defines the expected capabilities of the ''SDC Form Receiver'' role when conforming to the S&I Framework's [[index.html|Structured Data Capture FHIR implementation guide]].  This role is responsible for accepting and processing completed and partially-completed forms.  It only exposes a single operation endpoint - the one needed to 'process' a completed QuestionnaireResponse"
* kind = #requirements
* fhirVersion = #1.0.0
* format[+] = #xml
* format[+] = #json
* rest
  * mode = #server
  * security.description = "Implementations must meet the general security requirements documented in the [[security.html|SDC implementation guide]]."
  * operation
    * name = "process-response"
    * definition = "http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-process-response"

---

// File: input/fsh/capabilities/sdc-form-response-manager.fsh

Instance: sdc-form-response-manager
InstanceOf: CapabilityStatement
Title: "SDC Form Response Manager"
Description: "SDC Form response management system"
Usage: #definition
* url = "http://hl7.org/fhir/uv/sdc/CapabilityStatement/sdc-form-response-manager"
* name = "SDCFormResponseManager"
* title = "SDC Form Response Manager"
* status = #active
* date = "2014-07-06"
* publisher = "HL7 International - FHIR Infrastructure"
* contact.telecom
  * system = #other
  * value = "http://wiki.siframework.org/Structured+Data+Capture+Initiative"
* description = "This profile defines the expected capabilities of the ''SDC Form Response Manager'' role when conforming to the S&I Framework's [[index.html|Structured Data Capture FHIR implementation guide]].  This role is responsible for providing read/write access to QuestionnaireResponses.  This is typically to support light-weight clients that want to be able to complete forms but do not have local storage to save work in progress."
* kind = #requirements
* instantiates = "http://hl7.org/fhir/uv/sdc/CapabilityStatement/sdc-form-manager"
* fhirVersion = #1.0.0
* format[+] = #xml
* format[+] = #json
* rest
  * mode = #server
  * security.description = "Implementations must meet the general security requirements documented in the [[security.html|SDC implementation guide]].  Systems may wish to ensure that QuestionnaireResponse instances are only accessible to the user (or at least the organization) who was responsible for creating them."
  * resource
    * type = #QuestionnaireResponse
    * profile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaireresponse"
    * documentation = "This allows QuestionnaireResponses to be created, updated and retrieved.  Note that storing a QuestionnaireResponse does not imply any execution of behavior on the basis of the stored data."
    * insert Interaction(#SHALL, #create, "This creates an initial version of a QuestionnaireResponse - a completed form for a particular subject as of a particular point-in-time")
    * insert Interaction(#SHALL, #update, "This allows revision of a QuestionnaireResponse.  Typically this will happen while the response is still 'in-progress'.  If it occurs after the response has been marked as 'final'\, the status should change to 'amended'.  Updates can also be used to change the status to 'entered-in-error' or other values.  Servers may choose to enforce business rules around what state transitions are supported and for which users.")
    * insert Interaction(#SHOULD, #delete, "This removes a previously submitted QuestionnaireResponse.  In addition to (or instead of\) supporting direct requests for deletion\, some servers may automatically purge QuestionnaireResponses that have been in existence and unmodified for a period of time.  Deletions may not be a physical delete and it may still be possible to access older versions of a deleted response")
    * insert Interaction(#SHALL, #search-type, "This allows a user to find previously created responses - whether created by themselves or others.  For thin clients without persistence\, this feature is essential to allow them to find a draft of a previously created response")
    * insert Interaction(#SHALL, #read, "This allows a user to retrieve a previously stored response by id.  (Some thin clients may have limited persistence -e.g. cookies - that could be used to store an id and later retrieve a work-in-progress questionnaire response")
    * insert Interaction(#MAY, #history-instance, "This allows a user to look at previous versions of a response.  It supports identifying what changes were made and potentially retrieving an older version to use as a starting point in the event that data has accidentally been removed or changed")

---

// File: input/fsh/codesystems/AssembleExpectation.fsh

CodeSystem: AssembleExpectation
Id: assemble-expectation
Title: "Assemble Expectation Codes"
Description: "A set of codes that reflect the relevance of the Questionnaire to the $assemble operation - specifically, whether the form needs to be assembled, whether the form can be referenced as a subQuestionnaire and whether the form can be used as the 'root' of a QuestionnaireResponse."
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* ^content = #complete
* insert propertyConcept(#notSelectable, "http://hl7.org/fhir/concept-properties#notSelectable",#boolean,"Indicates that the concept is abstract.  It can be used for searching\, but cannot appear in instances")
* insert propertyConcept(#parent, "http://hl7.org/fhir/concept-properties#parent",#code,"Indicates a parent concept that can subsume this concept")
* #assembly "Assembly needed" "An abstract code that subsumes all codes for Questionnaires that require assembly prior to use"
  * ^property[+].code = #notSelectable
  * ^property[=].valueBoolean = true
* #independent "No assembly needed" "An abstract code that subsumes all codes for Questionnaires that DO NOT require assembly prior to use"
  * ^property[+].code = #notSelectable
  * ^property[=].valueBoolean = true
* #root "Root Questionnaires" "An abstract code that subsumes all codes for Questionnaires that can act as the root for a QuestionnaireResponse"
  * ^property[+].code = #notSelectable
  * ^property[=].valueBoolean = true
* #child "Child Questionnaires" "An abstract code that subsumes all codes for Questionnaires that can act as subQuestionnaires"
  * ^property[+].code = #notSelectable
  * ^property[=].valueBoolean = true
* #assemble-root-or-child "Assembly-required root or child" "This Questionnaire can be used as the root of an assembly operation or as a child in an assembly process.  In either case, assembly is required before use."
  * ^property[+].code = #notSelectable
  * ^property[=].valueBoolean = false
  * ^property[+].code = #parent
  * ^property[=].valueCode = #assembly
  * ^property[+].code = #parent
  * ^property[=].valueCode = #root
  * ^property[+].code = #parent
  * ^property[=].valueCode = #child
* #assemble-root "Assembly-required root" "This Questionnaire can be used as the root of an assembly operation, but requires assembly before use.  It is not intended for use as a child module."
  * ^property[+].code = #notSelectable
  * ^property[=].valueBoolean = false
  * ^property[+].code = #parent
  * ^property[=].valueCode = #assembly
  * ^property[+].code = #parent
  * ^property[=].valueCode = #root
* #assemble-child "Assembly required child" "This Questionnaire is intended to be used as an assembly operation but cannot be used as a root - it must always be a child module"
  * ^property[+].code = #notSelectable
  * ^property[=].valueBoolean = false
  * ^property[+].code = #parent
  * ^property[=].valueCode = #assembly
  * ^property[+].code = #parent
  * ^property[=].valueCode = #child
* #independent-root-or-child "Assembled root-or-child" "This Questionnaire can be used without assembly and be used directly, but is also safe for use as a child module"
  * ^property[+].code = #notSelectable
  * ^property[=].valueBoolean = false
  * ^property[+].code = #parent
  * ^property[=].valueCode = #independent
  * ^property[+].code = #parent
  * ^property[=].valueCode = #root
  * ^property[+].code = #parent
  * ^property[=].valueCode = #child
* #independent-child "Assembled child" "This Questionnaire can be used without assembly, is also safe for use as a child module and is only intended for use as a child"
  * ^property[+].code = #notSelectable
  * ^property[=].valueBoolean = false
  * ^property[+].code = #parent
  * ^property[=].valueCode = #independent
  * ^property[+].code = #parent
  * ^property[=].valueCode = #child

RuleSet: propertyConcept(code, uri, type, description) 
* ^property[+].code = {code}
* ^property[=].uri = {uri}
* ^property[=].type = {type}
* ^property[=].description = {description}

RuleSet: propertyCode(code, valueCode) 
* ^property[+].code = {code}
* ^property[=].valueCode = {valueCode}

RuleSet: propertyBoolean(code, valueBoolean) 
* ^property[+].code = {code}
* ^property[=].valueBoolean = {valueBoolean}


---

// File: input/fsh/codesystems/CHFCodes.fsh

CodeSystem: CHFCodes
Id: chf-codes
Title: "CHF Codes"
Description: "Codes used in the congestive heart failure pathway. Ideally these shouldn't exist, but where I couldn't find an appropriate code in a standard terminology, I defined codes here."
* ^version = "1.0.0"
* ^status = #active
* ^experimental = true
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/dss/index.cfm"
* ^jurisdiction = $m49.htm#001 "World"
* ^caseSensitive = true
* ^content = #complete
* #body-weight-change "Body weight change" "The change in body weight between two body weight measurements, in kg. Typically captured daily."
* #net-intake-output "Net intake/output" "The net intake and output, in Liters per day. Typically captured daily."
* #measure-jvp "Measure jugular venous pressure" "Measure jugular venous pressure in cmH2O"
* #jvp "Jugular venous pressure" "Jugular venous pressure in cmH2O. May be loinc#8595-1?"
* #egfr "eGFR result" "eGFR result in mol/mm/m2. Too many codes to choose from, needs clinical/terminological SME input"
* #measure-egfr "Measure eGFR" "Measure eGFR, could not identify SNOMED code for this"
* #lasix-iv "LASIX IV" "LASIX IV"
* #lasix-po "LASIX PO" "LASIX PO"
* #cardiology-consultation "Cardiology Consultation" "Cardiology consultation"

---

// File: input/fsh/codesystems/CodeSystemCSPHQ9.fsh

CodeSystem: CodeSystemCSPHQ9
Id: CSPHQ9
Title: "SDC-CodeSystem PHQ9"
Description: "The answer list for questions 1 through 9 on the Patient Health Questionnaire (9 item) form"
* ^meta.profile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-codesystem"
* ^status = #active
* ^experimental = true
* ^caseSensitive = true
* ^content = #complete
* ^property[+].code = #itemWeight
* ^property[=].uri = "http://hl7.org/fhir/concept-properties#itemWeight"
* ^property[=].type = #decimal
* #Not-at-all "Not at all"
  * ^property[+].code = #itemWeight
  * ^property[=].valueDecimal = 0.0
* #Several-days "Several days"
  * ^property[+].code = #itemWeight
  * ^property[=].valueDecimal = 1.0
* #"More than half the days" "More than half the days"
  * ^property[+].code = #itemWeight
  * ^property[=].valueDecimal = 2.0
* #"Nearly every day" "Nearly every day"
  * ^property[+].code = #itemWeight
  * ^property[=].valueDecimal = 4.0


---

// File: input/fsh/codesystems/CollapsibleCodes.fsh

CodeSystem: CollapsibleCodes
Id: collapsible
Title: "Collapsible Codes"
Description: "Defines mechanisms of displaying child items in collapsible form"
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* ^content = #complete
* #default-open "Default Open" "Indicates that the child items should be displayed in expanded form by default (all shown)"
* #default-closed "Default Closed" "Indicates that the child items should be displayed in collapsed form by default (all hidden)"

---

// File: input/fsh/codesystems/EntryMode.fsh

CodeSystem: EntryMode
Id: entryMode
Title: "Entry Mode"
Description: "Defines mechanisms of capturing data in a QuestionnaireResponse"
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* ^content = #complete
* #sequential "Sequential" "Top-level items are displayed one at a time and items within groups are displayed one at a time, with certain exceptions.  If an item is of type 'page', then all items within the page are displayed and can be edited.  If a question has child questions, the parent question (and answers) are visible while descendant questions are being edited.  Once a user has progressed to view subsequent items, they can no longer return to edit or view prior items (though they might be able to see all answers once the questionnaire response has been marked 'completed' and is no longer editable).  These questionnaire responses cannot be 'amended'."
* #prior-edit "Prior Edit" "This behaves similar to sequential from a 'display' perspective.  I.e. items are generally only displayed one at a time.  However, with his mode, it is possible to navigate to prior questions and change answers.  Amending completed forms is possible."
* #random "Random" "All enabled questions are visible and accessible to the user.  They may complete questions in any order."

---

// File: input/fsh/codesystems/KeyboardTypeCodes.fsh

CodeSystem: KeyboardTypeCodes
Id: keyboardType
Title: "Keyboard Type Codes"
Description: "For string or text items, indicates the 'keyboard type' that should be used by the user interface to guide entry."
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* ^content = #complete
* #phone "Phone" "Keyboard type optimized for input of phone numbers (digits with letters, different prediction)"
* #email "email" "Keyboard type optimized for input of email addresses (easy access to at-sign, different prediction)"
* #number "Number" "Keyboard type optimized for entering digits (useful for strings as well, such as for entering numerical identifiers)"
* #url "URL" "Keyboard type optimized for entering URLs and URIs"
* #chat "Chat" "Keyboard type optimized for chat messages (easy access to emoticons, different prediction)"

---

// File: input/fsh/codesystems/LaunchContext.fsh

CodeSystem: LaunchContext
Id: launchContext
Title: "Launch Context"
Description: "The standard context for Questionnaire at launch time"
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* ^content = #complete
* #patient "Patient" "Patient in context at launch time (FHIR Patient resource). There can be at most 1 resource passed in for this context."
* #encounter "Encounter" "Encounter context at launch time (FHIR Encounter resource). There can be at most 1 resource passed in for this context."
* #location "Location" "Location context at launch time (FHIR Location resource). There can be at most 1 resource passed in for this context."
* #user "User" "User in context at launch time (FHIR Device, PractitionerRole, Practitioner, RelatedPerson, Organization or Patient resource). There can be at most 1 resource passed in for this context."
* #study "ResearchStudy" "ResearchStudy in context at launch time (FHIR ResearchStudy resource). There can be at most 1 resource passed in for this context."
* #clinical "Clinical" "Indicates the current clinical resource being manipulated or reviewed by the user launching the Questionnaire.  Common uses included 'current diagnostic report', 'current diagnostic image', 'current order', etc.  In a situation where multiple clinical resources are being reviewed simultaneously, there could be multiple resources passed in as context.  (i.e. the 'clinical' variable set in the FHIRPath engine will be a collection.)"

---

// File: input/fsh/codesystems/ObservationExtractRelationship.fsh

CodeSystem: ObservationExtractRelationship
Id: observation-extract-relationship
Title: "Observation Extract Relationship Codes"
Description: "Defines the codes used to specify the relationship type in the ObservationExtractExtension."
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* ^content = #complete
* #member "Member" "Indicates that the extracted Observation is a member of a grouped parent Observation."
* #component "Component" "Indicates that the extracted Observation is a component of a parent Observation."


---

// File: input/fsh/codesystems/QuestionnaireAnswerConstraint.fsh

CodeSystem: QuestionnaireAnswerConstraint
Id: questionnaire-answer-constraint
Title: "Questionnaire answer constraint codes"
Description: "Codes that describe the types of constraints possible on a question item that has a list of permitted answers [Note: This is a clone of QuestionnaireAnswerConstraint codesystem from R5 (adopting R5 capability)]"
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablecodesystem"
* ^identifier.system = "urn:ietf:rfc:3986"
* ^identifier.value = "urn:oid:2.16.840.1.113883.4.642.1.0"
* ^version = "4.6.0"
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* ^content = #complete
* #optionsOnly "Options only" "Only values listed as answerOption or in the expansion of the answerValueSet are permitted"
* #optionsOrType "Options or 'type'" "In addition to the values listed as answerOption or in the expansion of the answerValueSet, any other values that correspond to the specified item.type are permitted"
* #optionsOrString "Options or string" "In addition to the values listed as answerOption or in the expansion of the answerValueSet, free-text strings are permitted.  Answers will have a type of 'string'."

---

// File: input/fsh/extensions/AnswerExpressionExtension.fsh

Extension: AnswerExpressionExtension
Id: sdc-questionnaire-answerExpression
Title: "Answer Expression"
Description: "An expression (FHIRPath, CQL or FHIR Query) that resolves to a list of permitted answers for the question item or that establishes context for a group item.  The user may select from among the list to choose answers for the question."
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..1
* . ^short = "Expression for possible answers"
* . ^definition = "An expression (FHIRPath, CQL or FHIR Query) that resolves to a list of permitted answers for the question item or that establishes context for a group item.  The user may select from among the list to choose answers for the question."
* . ^comment = "This is only permitted when the containing item does NOT have any answerOption or answerValueSet elements. The results of the expression must correspond to the item type of the question the element appears on or must correspond to a resource, backbone element or complex data type for a group item.  Resources are considered a match for the Reference item type.  Quantity can be a match for decimal and integer items so long as a questionnaire-unit extension is present.  If the result of an expression returns a code or codes, it **SHALL** return the results as Coding, not code or CodeableConcept."
* url only uri
* value[x] only Expression

---

// File: input/fsh/extensions/AnswerOptionsToggleExpressionExtension.fsh

Extension: AnswerOptionsToggleExpressionExtension
Id: sdc-questionnaire-answerOptionsToggleExpression
Title: "Answer Options Toggle Expression"
Description: "A complex expression that provides a list of the allowed options that should be enabled or disabled based on the evaluation of a provided expression.  It allows toggling of allowed answers based on context, including the answers provided to other expressions.  Any options not listed by one of the answerOptionsToggleExpression occurrences are presumed to be 'enabled'"
* ^status = #active
* ^purpose = "This is used when the set of options are fixed, but there is a need to toggle some of them on or off (as opposed to having the entire set of options dynamic, as is supported by answerExpression)."
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* ^contextInvariant = "ofType(ElementDefinition).type.exists(code='Coding') or where(%resource.is(Questionnaire)).exists(type.first()='choice' or type.first()='open-choice')"
* . 0..*
* . ^short = "Expression constraining allowed answers"
* . ^definition = "A complex expression that provides a list of the allowed options that should be enabled or disabled based on the evaluation of a provided expression.  It allows toggling of allowed answers based on context, including the answers provided to other expressions."
* . ^comment = "For example, this allows a list of conditions to be modified based on the gender of the patient"
* extension contains
    option 1..* and
    expression 1..1
* extension[option] 
  * ^short = "Option(s) to toggle"
  * ^definition = "Each repetition is an option to toggle based on the expression"
  * value[x] 1..
    * ^short = "The option value to control"
* extension[expression] 
  * ^short = "The expression to toggle on"
  * ^definition = "If this expression evaluate's to 'true', then the specified options should be enabled, otherwise they should be disabled."
  * value[x] 1..
  * value[x] only Expression
    * ^short = "Expression value"
* url only uri

---

// File: input/fsh/extensions/AssembleContextExtension.fsh

Extension: AssembleContextExtension
Id: sdc-questionnaire-assembleContext
Title: "Assemble Context extension"
Description: "This extension, used on a subQuestionnaire, indicates a FHIRPath variable that must be present in context when the subQuestionnaire is referenced."
* ^status = #active
* ^context.type = #element
* ^context.expression = "Questionnaire"
* . 0..*
* . ^short = "Variable name to be available from referencing Questionnaire"
* . ^definition = "This extension, used on a subQuestionnaire, indicates a FHIRPath variable that must be present in context when the subQuestionnaire is referenced."
* url only uri
* value[x] only string

---

// File: input/fsh/extensions/AssembledFromExtension.fsh

Extension: AssembledFromExtension
Id: sdc-questionnaire-assembledFrom
Title: "Assembled From Questionnaire"
Description: "This extension will appear on the root of an assembled Questionnaire and identifies the subQuestionnaires (including version) that were used as part of the assembly process."
* ^status = #active
* ^context.type = #element
* ^context.expression = "Questionnaire"
* . 0..1
* . ^short = "Identifies subQuestionnaires used in the assembly process"
* . ^definition = "This extension will appear on the root of an assembled Questionnaire and identifies the subQuestionnaires (including version) that were used as part of the assembly process."
* url only uri
* value[x] only canonical

---

// File: input/fsh/extensions/AssembleExpectation.fsh

Extension: AssembleExpectation
Id: sdc-questionnaire-assemble-expectation
Title: "Assembly Expectations for Questionnaire"
Description: "If present, indicates that this questionnaire has expectations with respect to assembly.  Specifically, indicates whether this form requires assembly (i.e. it can't be used directly without invoking the [$assemble](OperationDefinition-Questionnaire-assemble.html) operation operation on it) and/or whether it is intended for use only as a 'child' in an assembly process.  The assembly processs might mean filling in item metadata based on information looked up from item.definitions and/or retrieving sub-questionnaires pointed to by [sub-questionnaire](StructureDefinition-sdc-questionnaire-subQuestionnaire.html) extensions."
* ^status = #active
* ^purpose = "Allows Form Fillers to differentiate forms that require pre-processing prior to display."
* ^context.type = #element
* ^context.expression = "Questionnaire"
* . 0..1
* . ^short = "Questionnaire is modular"
* . ^definition = "If present, indicates that this questionnaire has expectations with respect to assembly.  Specifically, indicates whether this form requires assembly (i.e. it can't be used directly without invoking the [$assemble](OperationDefinition-Questionnaire-assemble.html) operation operation on it) and/or whether it is intended for use only as a 'child' in an assembly process.  The assembly processs might mean filling in item metadata based on information looked up from item.definitions and/or retrieving sub-questionnaires pointed to by [sub-questionnaire](StructureDefinition-sdc-questionnaire-subQuestionnaire.html) extensions."
* . ^comment = "SDC-conformant Questionnaires **SHALL** declare this extension if they require an assembly process prior to use.  If not declared, then the Questionnaire is not necessarily safe for use as a child form and does not require assembly prior to use."
* url only uri
* value[x] only code
* value[x] from QuestionnaireAssembleExpectation (required)

---

// File: input/fsh/extensions/CalculatedExpressionExtension.fsh

Extension: CalculatedExpressionExtension
Id: sdc-questionnaire-calculatedExpression
Title: "Calculated Expression"
Description: "Calculated value for a question answer as determined by an evaluated expression."
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* ^contextInvariant = "initial.exists().not()"
* . 0..1
* . ^short = "Expression-determined initial value"
* . ^definition = "Calculated value for a question answer as determined by an evaluated expression."
* . ^comment = "Calculated value is updated  as other answers in the QuestionnaireResponse are filled in."
* url only uri
* value[x] 1..1
* value[x] only Expression

---

// File: input/fsh/extensions/CandidateExpressionExtension.fsh

Extension: CandidateExpressionExtension
Id: sdc-questionnaire-candidateExpression
Title: "Candidate Answers Expression"
Description: "A FHIRPath or CQL expression, or FHIR Query that resolves to a list of candidate answers for the question item or that establishes context for a group item.  The user may select from among the candidates to choose answers for the question."
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..1
* . ^short = "Expression for possible answers"
* . ^definition = "A FHIRPath or CQL expression, or FHIR Query that resolves to a list of candidate answers for the question item or that establishes context for a group item.  The user may select from among the candidates to choose answers for the question."
* . ^comment = "The results of the expression must correspond to the item type of the question the element appears on or must correspond to a resource, backbone element or complex data type for a group item.  Resources are considered a match for the Reference item type.  Quantity can be a match for decimal and integer items so long as a questionnaire-unit extension is present.  If the expression returns coded data, it **SHALL* return the information as either code or Coding, not CodeableConcept.  If the expression returns elements of type 'code', when the user selects one or more candidates, the code will be matched against the allowed Codings (from answerValueSet, answerOptions, or answerExpresssion).  In this case, it is an error if there is more than one Coding with the same code."
* url only uri
* value[x] only Expression

---

// File: input/fsh/extensions/ChoiceColumnExtension.fsh

Extension: ChoiceColumnExtension
Id: sdc-questionnaire-choiceColumn
Title: "Choice column"
Description: "Provides guidelines for rendering multi-column choices.  I.e. when displaying a list of codes (for `choice` or `open-choice` items) or a list of resources (for `reference` items), this extension allows the drop-down to have multiple columns.  For codes, the author can pick additional code system properties to display - such as alternate display names strength or form for drug codes, etc.  For references, the author can choose particular columns from the resource (e.g. first name, last name, specialty, address)."
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* ^contextInvariant = "ofType(ElementDefinition).type.exists(code='Coding' or code='Reference') or where(%resource.is(Questionnaire)).exists(type.first()='choice' or type.first()='open-choice' or type.first()='reference')"
* . 0..*
* . ^short = "Guide for rendering multi-column choices"
* . ^definition = "Provides guidelines for rendering multi-column choices.  I.e. when displaying a list of codes (for `choice` or `open-choice` items) or a list of resources (for `reference` items), this extension allows the drop-down to have multiple columns.  For codes, the author can pick additional code system properties to display - such as alternate display names strength or form for drug codes, etc.  For references, the author can choose particular columns from the resource (e.g. first name, last name, specialty, address)."
* . ^comment = "Each repetition represents a column to display."
* extension contains
    path 1..1 and
    label 0..1 and
    width 0..1 and
    forDisplay 0..1
* extension[path] only Extension
  * ^short = "Column path"
  * ^definition = "The element to display within the column (see notes)."
  * ^comment = "When the question has a type of choice or open-choice, the path will be interpreted as the 'code' of a property for the code that is available from the answerValueSet.  For code systems that have alternate designations, the path can also indicate the language or designation use, provided that the code system only has one designation for each language or use within the code system.  A path of 'display' will refer to the default displayname for the code as specified in CodeSystem.concept.display.\n\nWhen the question has a type of reference, the path will be interpreted as a FHIRPath evaluated against the candidate resources."
  * value[x] only string
* extension[label] only Extension
  * ^short = "Column label"
  * ^definition = "The label to appear at the top of the column."
  * value[x] only string
* extension[width] only Extension
  * ^short = "Width of column"
  * ^definition = "The size to allocate for the column within the table showing the choices."
  * ^comment = "code missing = pixels; code = % = percentage."
  * value[x] only Quantity
* extension[forDisplay] only Extension
  * ^short = "Use for display ?"
  * ^definition = "If true, indicates that this column should be used as (or as part of) the display value for the coding or reference once selected.  I.e. Coding.display or Reference.display as stored in the QuestionnaireResponse and displayed to the user as the selected answer."
  * ^comment = "For codes, only one column can be picked and it must be a column that corresponds to a legal display name for the code from the value set.  For references, multiple columns can be picked.  If more than one column is chosen, the Reference.display will contain concatenate the column values in the order defined separating them with a single space."
  * value[x] only boolean
* url only uri

---

// File: input/fsh/extensions/CollapsibleExtension.fsh

Extension: CollapsibleExtension
Id: sdc-questionnaire-collapsible
Title: "Collapsible"
Description: "Indicates whether the child items of a group or question item is displayed in collapsible form."
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..1
* . ^short = "Indicates whether the child items of a group or question item is displayed in collapsible form."
* . ^definition = "Indicates whether the child items of a group or question item is displayed in collapsible form."
* url only uri
* value[x] only code
* value[x] from QuestionnaireItemCollapsible (required)
  * ^binding.description = "Defines mechanism of displaying child items."

---

// File: input/fsh/extensions/ColumnCountExtension.fsh

Extension: ColumnCountExtension
Id: sdc-questionnaire-columnCount
Title: "Number of columns for child item layout"
Description: "For questions with a set of options, indicates the number of columns across which those choices should be organized. E.g., 2 columns, 5 columns, etc."
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* . 0..1
* . ^short = "Number of columns for layout"
* . ^definition = "For questions with a set of options, indicates the number of columns across which those choices should be organized. E.g., 2 columns, 5 columns, etc."
* . ^comment = "Systems will split the options to maintain balance across the columns. Whether the choices are listed horizontally first or vertically first depends on the choice-orientation extension. Default is vertically first. Note that the number of columns is a recommendation and may not be achievable in all display form factors."
* url only uri
* value[x] only positiveInt


---

// File: input/fsh/extensions/ContextExpressionExtension.fsh

Extension: ContextExpressionExtension
Id: sdc-questionnaire-contextExpression
Title: "Answer Context Expression"
Description: "A FHIR Query that resolves to one or more resources that can be displayed to the user to help provide context for answering a question. For example, if the question is \"Has the patient discussed this issue on any visits in the past year?\", the contextExpression might return the set of patient's encounters for the prior 12 month period to help jog the practitioner's memory. If there are multiple repetitions of this extension, then each is providing a distinct set of context.  For example, one repetition might expose 'potentially relevant procedures' while another might expose 'potentially relevant encounters'."
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..*
* . ^short = "Expression for information to guide answers"
* . ^definition = "A FHIR Query that resolves to one or more resources that can be displayed to the user to help provide context for answering a question. For example, if the question is \"Has the patient discussed this issue on any visits in the past year?\", the contextExpression might return the set of patient's encounters for the prior 12 month period to help jog the practitioner's memory."
* extension contains
    label 1..1 and
    expression 1..1
* extension[label]
  * ^short = "Context label"
  * ^definition = "The text to display in the form filler user interface that explains what the returned context information means"
  * url only uri
  * value[x] 1..
  * value[x] only string
* extension[expression] 
  * ^short = "Context expression"
  * ^definition = "The computable rules that identify the contextual information to display to the user"
  * url only uri
  * value[x] 1..
  * value[x] only Expression
* url only uri

---

// File: input/fsh/extensions/DefinitionExtractExtension.fsh

Extension: DefinitionExtractExtension
Id: sdc-questionnaire-definitionExtract
Title: "Extract Definition"
Description: "Specifies the resource type/profile for the definition based extraction of a resource and optionally the `fullUrl` and other `Bundle.entry.request` properties as needed."
* ^extension[$standard-status].valueCode = #draft
* ^extension[$fmm].valueInteger = 0
* ^status = #draft
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire"
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . ^short = "Details for a definition based resource extraction"
* . ^definition = "Specifies the resource type/profile for the definition based extraction of a resource and optionally the `fullUrl` and other `Bundle.entry.request` properties as needed."
* extension contains
    definition 1..1 and
    fullUrl 0..1 and
    ifNoneMatch 0..1 and
    ifModifiedSince 0..1 and
    ifMatch 0..1 and
    ifNoneExist 0..1
* extension[definition] 
  * ^short = "Canonical URL of Resource type or profile to extract"
  * ^definition = "The resource type/profile canonical Url defining the resource type to be extracted."
  * ^comment = """The canonical URL for a base resource can be used if a specific profile is not required, e.g. `http://hl7.org/fhir/StructureDefinition/Patient`.
  
  The value used here will be the prefix value (before the #) in any child items `definition` value.
  
  Where a specific profile is used (not the base resource), then this canonical value will be set in the created resource's `meta.profile` collection.
  """
  * value[x] 1..1
  * value[x] only canonical
    * ^short = "Resource Profile canonical URL"
* extension[fullUrl] 
  * ^short = "A fhirpath expression to evaluate to populate the fullUrl property in the `Bundle.entry` (uri/string result)"
  * ^definition = "A fhirpath expression to evaluate to extract the value into the fullUrl property. If no value is evaluated, then the element is not extracted."
  * value[x] 1..1
  * value[x] only string
    * ^short = "Fhirpath Expression value"
* extension[ifNoneMatch] 
  * ^short = "A fhirpath expression to evaluate to populate the ifNoneMatch property (string result)"
  * ^definition = "A fhirpath expression to evaluate to extract the value into the ifNoneMatch property. If no value is evaluated, then the element is not extracted."
  * value[x] 1..1
  * value[x] only string
    * ^short = "Fhirpath Expression value"
* extension[ifModifiedSince] 
  * ^short = "A fhirpath expression to evaluate to populate the ifModifiedSince property (instant result)"
  * ^definition = "A fhirpath expression to evaluate to extract the value into the ifModifiedSince property. If no value is evaluated, then the element is not extracted."
  * value[x] 1..1
  * value[x] only string
    * ^short = "Fhirpath Expression value"
* extension[ifMatch] 
  * ^short = "A fhirpath expression to evaluate to populate the ifMatch property (string result)"
  * ^definition = "A fhirpath expression to evaluate to extract the value into the ifMatch property. If no value is evaluated, then the element is not extracted."
  * value[x] 1..1
  * value[x] only string
    * ^short = "Fhirpath Expression value"
* extension[ifNoneExist] 
  * ^short = "A fhirpath expression to evaluate to populate the ifNoneExist property (string result)"
  * ^definition = "A fhirpath expression to evaluate to extract the value into the ifNoneExist property. If no value is evaluated, then the element is not extracted."
  * value[x] 1..1
  * value[x] only string
    * ^short = "Fhirpath Expression value"
* url only uri

---

// File: input/fsh/extensions/DefinitionExtractValueExtension.fsh

Extension: DefinitionExtractValueExtension
Id: sdc-questionnaire-definitionExtractValue
Title: "Extract Definition - Extract value"
Description: "Provide either a fixed value, or an expression to evaluate, to be used as the value for the extracted resource's property based on the `definition` value."
* obeys dev-1
* ^extension[$standard-status].valueCode = #draft
* ^extension[$fmm].valueInteger = 0
* ^status = #draft
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire"
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..*
* . ^short = "Fixed or calculated value to extract"
* . ^definition = "Provide either a fixed value, or an expression to evaluate, to be used as the value for the extracted resource's property based on the `definition` value."
* extension contains
    definition 1..1 and
    expression 0..1 and
    fixed-value 0..1
* extension[definition] 
  * ^short = "ElementDefintion to extract value into"
  * ^definition = "This is the profile canonical Url, followed by `#` and the element id, that the value should be extracted into."
  * value[x] 1..1
  * value[x] only uri
    * ^short = "Profile canonical URL and element id"
* extension[expression] 
  * ^short = "An expression to evaluate"
  * ^definition = "An expression to evaluate to extract the value into the specified element definition. If no value is evaluated, then the element is not extracted."
  * value[x] 1..1
  * value[x] only Expression
    * ^short = "Expression value"
* extension[fixed-value] 
  * ^short = "A fixed value to extract"
  * ^definition = "A fixed value to extract into the specified element definition."
  * value[x] 1..1
    * ^short = "Fixed value"
* url only uri


---

// File: input/fsh/extensions/EnableWhenExpressionExtension.fsh

Extension: EnableWhenExpressionExtension
Id: sdc-questionnaire-enableWhenExpression
Title: "Enable when expression"
Description: "An expression that returns a boolean value for whether to enable the item. If the expression does not resolve to a boolean, it is considered an error in the design of the Questionnaire.  Form renderer behavior is undefined.  Some tools may attempt to force the value to be a boolean (e.g. is it a non-empty collection, non-null, non-zero - if so, then true).  Systems SHOULD present a warning to the user if a non-boolean valued expression result does not trigger an all-out error."
* ^version = "3.0.0"
* ^status = #active
* ^experimental = false
* ^jurisdiction = $m49.htm#001
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..1
* . ^short = "Expression for when to enable the item"
* . ^definition = "An expression that returns a boolean value for whether to enable the item."
* . ^comment = "This is only permitted when the containing item does NOT have any enableWhen elements.\r\n\r\nIf the expression involves comparisons between elements that have different precisions but are otherwise equal, FHIRPath will resolve the expression to an empty set, which will in turn evaluate to false (meaning the item won't be enabled).  If this is not the desired behavior, the author should add a `.allTrue()` to the end of the expression, which will result in an indeterminate outcome because of precision differences being handled as 'true' and the item being enabled.  Questionnaires SHOULD be designed to take into account challenges around varying precision to minimize non-deterministic situations by setting constraints around expected precision, etc.\r\n\r\nIf the expression evaluates to something other than a boolean true or false, the Form Filler SHOULD still display the form, and if it does so, SHOULD treat the element as 'enabled' and display a warning to the user that the questionnaire logic was faulty and it's possible that the item shouldn't be enabled."
* url only uri
* value[x] only Expression
* value[x] obeys sdc-inv1
//To do: Fix the hard-coding of the indexes 
//* value[x] ^constraint[1].source = "http://hl7.org/fhir/StructureDefinition/Element"

Invariant: sdc-inv1
Description: "FHIR query language not allowed."
Severity: #error
Expression: "language!='application/x-fhir-query'"
XPath: "not(f:language/@value='application/x-fhir-query')"

---

// File: input/fsh/extensions/EndpointExtension.fsh

Extension: EndpointExtension
Id: sdc-questionnaire-endpoint
Title: "Endpoint"
Description: "The base URL for the server(s) to which questionnaire response associated with this questionnaire should be submitted. If multiple repetitions are present, the completed form should be sent to all listed endpoints."
* ^status = #active
* ^context.type = #element
* ^context.expression = "Questionnaire"
* . 0..*
* . ^short = "Where to send answers"
* . ^definition = "The base URL for the server to which questionnaire response associated with this questionnaire should be submitted. If multiple repetitions are present, the completed form should be sent to all listed endpoints."
* . ^comment = "Indicates that the form has been designed with an expectation that it will be submitted to the specified URI.  If multiple endpoints are specified, expectation is that answers are submitted to all endpoints.\n\nIf no end-point is specified, then the form is not exclusively designed to be submitted to a specific site.  If and where the form needs to be submitted or how the form should be internally processed must be inferred from external context or system business rules.\n\nEndpoints may have expectations around authorization, etc.  Some of this may be learned by consulting the CapabilityStatement associated with the endpoint."
* url only uri
* value[x] only uri

---

// File: input/fsh/extensions/EntryMode.fsh

Extension: EntryMode
Id: sdc-questionnaire-entryMode
Title: "Entry mode"
Description: """Indicates how questions within the questionnaire should be presented to the end-user.  Specifically, differentiates whether the questions should be displayed one-at-a-time with no ability to adjust prior entries; one-at-a-time or continuously expanding where all questions up to the current question can be looked at and edited, or random, where all questions can be seen and the questions can be filled out in any order desired.

When the entryMode is one that will prohibit the user from going back to edit preceding questions, the form filler must ensure that the answer meets all validation constraints (cardinality, length, etc.) prior to allowing the user to progress to subsequent items.  However, when the entryMode allows editing prior items, then form fillers SHOULD allow a user to move on and answer subsequent items, with the recognition that they'll eventually have to go back to make corrections before the QuestionnaireResponse can transition to a status of 'complete'.

Note: if the only objective is to ensure that certain future questions/groups aren't turned on until/unless specific previous items are satisfactorily completed, this should be accomplished using [enableWhen](behavior.html#enableWhen) or [enableWhenExpression](behavior.html#enableWhenExpression)."""
* ^status = #active
* ^purpose = "Some instruments need to prevent editing of previous answers once subsequent answers are revealed."
* ^context.type = #element
* ^context.expression = "Questionnaire"
* . 0..1
* . ^short = "sequential | prior-edit | random"
* . ^definition = "Indicates how questions within the questionnaire should be presented to the end-user.  Specifically, differentiates whether the questions should be displayed one-at-a-time with no ability to adjust prior entries; one-at-a-time or continuously expanding where all questions up to the current question can be looked at and edited, or random, where all questions can be seen and the questions can be filled out in any order desired."
* . ^comment = "The prior-edit functionality can be accomplished by adding questions to the screen as each subsequent question is answered (resulting in all questions being displayed in a single screen) or with a view that shows only one question at a time but allows backward navigation to view and/or edit prior answers."
* url only uri
* value[x] only code
* value[x] from QuestionnaireEntryMode (required)
  * ^binding.description = "Entry modes when completing a questionnaire"

















---

// File: input/fsh/extensions/ExtractAllocateIdExtension.fsh

Extension: ExtractAllocateIdExtension
Id: sdc-questionnaire-extractAllocateId
Title: "Extract - Allocate new uuid"
Description: "Allocate a new uuid in a named variable for use in extraction. This is usually used to set the `fullUrl` for a resource in the output extraction bundle, and then referenced in other resources within that transaction bundle (via fhirpath expressions)."
* ^extension[$standard-status].valueCode = #draft
* ^extension[$fmm].valueInteger = 0
* ^status = #draft
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire"
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . ^short = "Variable name for the new uuid."
* . ^definition = "Allocate a new uuid in a named variable for use in extraction. This is usually used to set the `fullUrl` for a resource in the output extraction bundle, and then referenced in other resources in that bundle (via fhirpath expressions). The format of the uuid will be `urn:uuid:(uuid)`. e.g. urn:uuid:6f6177d2-13ee-4d27-b0e8-3eaf663dd031"
* url only uri
* value[x] only string
* value[x] 1..1


---

// File: input/fsh/extensions/InitialExpressionExtension.fsh

Extension: InitialExpressionExtension
Id: sdc-questionnaire-initialExpression
Title: "Initial Expression"
Description: "Initial value for a question answer as determined by an evaluated expression."
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..1
* . ^short = "Expression-determined initial value"
* . ^definition = "Initial value for a question answer as determined by an evaluated expression."
* . ^comment = "Initial value is only calculated at the time the QuestionnaireResponse is first generated.  If the expression returns coded data, it **SHALL* return the information as either code or Coding, not CodeableConcept.  If the expression returns elements of type 'code', when the user selects one or more candidates, the code will be matched against the allowed Codings (from answerValueSet, answerOptions, or answerExpression).  In this case, it is an error if there is more than one Coding with the same code."
* url only uri
* value[x] only Expression

---

// File: input/fsh/extensions/IsSubjectExtension.fsh

Extension: IsSubjectExtension
Id: sdc-questionnaire-isSubject
Title: "Is subject?"
Description: "If present and true, indicates that the item establishes a different subject for the group in a response."
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..1
* . ^short = "Marks that this item identifies a different subject"
* . ^definition = "If present and true, indicates that the item establishes a different subject for the group in a response."
* . ^comment = "The item type must be \"reference\" and there can only be one item with this extension in each group."
* url only uri
* value[x] only boolean

---

// File: input/fsh/extensions/IsSubjectResponseExtension.fsh

Extension: IsSubjectResponseExtension
Id: sdc-questionnaireresponse-isSubject
Title: "Is subject (response)?"
Description: "If present and true, indicates that the item indicates a different subject for this group."
* ^status = #active
* ^context.type = #element
* ^context.expression = "QuestionnaireResponse.item"
* . 0..1
* . ^short = "Marks that this item identifies a different subject"
* . ^definition = "If present and true, indicates that the item indicates a different subject for this group."
* . ^comment = "The item type must be \"reference\" and there can only be one item with this extension in each group."
* url only uri
* value[x] only boolean

---

// File: input/fsh/extensions/ItemAnswerMedia.fsh

Extension: ItemAnswerMedia
Id: sdc-questionnaire-itemAnswerMedia
Title: "Item Answer Media"
Description: "Media to render/make available as an accompaniment to a specific answer option, for example - an image, video or audio clip.  This does not replace the need for answer.value[x].  The attachment.text SHOULD be present as the alternative/accessibility text for systems unable to expose the media and users unable to consume it.  Media.contentType SHALL be present.  When included in a QuestionnaireResponse it SHALL be the same as the media for the corresponding answerOption in the Questionnaire."
* ^status = #active
* ^purpose = "Need to be able to provide a visual representation of the response to the question being asked."
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item.answerOption"
* ^context[+].type = #element
* ^context[=].expression = "QuestionnaireResponse.item.answer"
* . 0..1
* . ^short = "Answer Media to display"
* . ^definition = "Media to render/make available as an accompaniment to a specific answer option"
* url only uri
* value[x] only Attachment

---

// File: input/fsh/extensions/ItemExtractionContextExtension.fsh

Extension: ItemExtractionContextExtension
Id: sdc-questionnaire-itemExtractionContext
Title: "Extract Definition - Resource (legacy)"
Description: "Specifies a query or other expression that identifies the resource (or set of resources for a repeating item) to be extracted from this item once the QuestionnaireResponse is complete. This extension is deprecated in favor of the `DefinitionExtractExtension` extension."
* ^extension[$standard-status].valueCode = #deprecated
* ^extension[$fmm].valueInteger = 0
* ^status = #retired
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire"
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..1
* . ^short = "Establishes mapping context for a Questionnaire item"
* . ^definition = "Specifies a query or other expression that identifies the resource (or set of resources for a repeating item)  to be extracted from this item once the QuestionnaireResponse is complete."
* url only uri
* value[x] only Expression or code
* value[x] from ResourceType (required)
  * ^binding.description = "If value is of type 'code', then the extraction is always the creation of a new resource of the specified type."


---

// File: input/fsh/extensions/ItemMedia.fsh

Extension: ItemMedia
Id: sdc-questionnaire-itemMedia
Title: "Item Media"
Description: "Media to render/make available as an accompaniment to the question being asked, for example - an image, video or audio clip.  This does not replace the need for item.text.  The attachment.text SHOULD be present as the alternative/accessibility text for systems unable to expose the media and users unable to consume it.  Media.contentType SHALL be present.  When included in a QuestionnaireResponse it SHALL be the same as the media for the same item in the Questionnaire."
* ^status = #active
* ^purpose = "Need to be able to provide a visual representation of the question being asked."
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "QuestionnaireResponse.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..1
* . ^short = "Media to display"
* . ^definition = "Media to render/make available as an accompaniment to the question being asked"
* url only uri
* value[x] only Attachment

---

// File: input/fsh/extensions/ItemPopulationContextExtension.fsh

Extension: ItemPopulationContextExtension
Id: sdc-questionnaire-itemPopulationContext
Title: "Item population context"
Description: "Specifies a query or other expression that identifies the resource (or set of resources for a repeating item) that should be used to support the population of this Questionnaire or Questionnaire.item on initial population.  When populating the questionnaire, it will set the specified variable name to that resource repetition for use in processing items within the group."
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire"
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..1
* . ^short = "Establishes mapping context for a Questionnaire item"
* . ^definition = "Specifies a query or other expression that identifies the resource (or set of resources for a repeating item) that should be used to support the population of this Questionnaire or Questionnaire.item on initial population.  When populating the questionnaire, it will set the specified variable name to that resource repetition for use in processing items within the group."
* url only uri
* value[x] only Expression

---

// File: input/fsh/extensions/Keyboard.fsh

Extension: Keyboard
Id: sdc-questionnaire-keyboard
Title: "Keyboard Type Extension"
Description: "For string or text items, indicates the 'keyboard type' that should be used by the user interface to guide entry. It does not dictate any specific functionality, it is only used as a hint to input devices that may have special keyboard modes available."
* ^status = #active
* ^purpose = "This may affect what characters are accessible or most easily available as well as what prediction algorithm is used.  It is most typically used by mobile devices."
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..1
* . ^short = "Keyboard Type"
* . ^definition = "For string or text items, indicates the 'keyboard type' that should be used by the user interface to guide entry."
* . ^comment = "The assertion applies on a per item basis and is not inherited.  If the item is 'text', only 'chat' should be declared if this extension is present."
* url only uri
* value[x] only Coding
* value[x] from QuestionnaireItemKeyboardType (extensible)
  * ^binding.description = "Keyboard types that can be used for text entry."

---

// File: input/fsh/extensions/LaunchContextExtension.fsh

Extension: LaunchContextExtension
Id: sdc-questionnaire-launchContext
Title: "Launch Contexts"
Description: "Resources that provide context for form processing logic (pre-population, flow-control, drop-down selection, etc.) when creating/displaying/editing a QuestionnaireResponse."
* ^status = #active
* ^purpose = "Indicates to systems creating or updating a QuestionnaireResponse what types of information to pass in for internal processing.  May also influence things like SMART on FHIR permission requests."
* ^context.type = #element
* ^context.expression = "Questionnaire"
* . 0..*
* . ^short = "Context resources needed for Questionnaire"
* . ^definition = "Resources that provide context for form processing logic (pre-population, flow-control, drop-down selection, etc.) when creating/displaying/editing a QuestionnaireResponse."
* . ^comment = "3 of these launch contexts are aligned with the existing SMART on FHIR \"launch\" contexts."
* obeys sdc-lcext-1
* extension contains
    name 1..1 and
    type 1..* and
    description 0..1 and
    multiplesAllowed 0..1
* extension[name] only Extension
  * ^short = "Variable name"
  * ^definition = "The variable name the passed resource will be referenced by within the Questionnaire logic."
  * value[x] 1..1
  * value[x] only Coding
  * value[x] from QuestionnaireLaunchContext (extensible)
    * ^binding.description = "Launch context codes for use in defining questionnaires context at launch time (NOTE: the Coding.code will be used for the variable name and that (at present) there is no support for Questionnaires that use multiple launch contexts which share a common code but different code systems.  Also, all launch context codes must meet the requirements to be a valid FHIRPath name.)."
* extension[type] only Extension
  * ^short = "Resource type"
  * ^definition = "The kind of resource to be provided."
  * value[x] 1..1
  * value[x] only code
  * value[x] from ResourceType (required)
* extension[description] only Extension
  * ^short = "Explanation of context element"
  * ^definition = "Guidance on the resource to be provided and what impact providing it will have on questionnaire behavior."
  * value[x] 1..1
  * value[x] only string
* extension[multiplesAllowed] only Extension
  * ^short = "Allow multiple resources"
  * ^definition = "Indicates whether multiple resources are permitted for this context element."
  * value[x] 0..1
  * value[x] only boolean
* url only uri

Invariant: sdc-lcext-1
Description: "Types must be from the specified value set of resource types based on name: patient: Patient; user: Patient, Practitioner, PractitionerRole, Organization, RelatedPerson, Device; encounter: Encounter; location: Location; study: ResearchStudy; clinical: Any allowed clinical resource"
Severity: #error
Expression: "(extension('name').value.where(code='patient' and system='http://hl7.org/fhir/uv/sdc/CodeSystem/launchContext').exists() implies extension('type').all(value = 'Patient')) and (extension('name').value.where(code='user' and system='http://hl7.org/fhir/uv/sdc/CodeSystem/launchContext').exists() implies extension('type').all(value='Patient' or value='Practitioner' or value='PractitionerRole' or value='RelatedPerson' or value='Organization' or value='Device')) and (extension('name').value.where(code='encounter' and system='http://hl7.org/fhir/uv/sdc/CodeSystem/launchContext').exists() implies extension('type').all(value = 'Encounter')) and (extension('name').value.where(code='location' and system='http://hl7.org/fhir/uv/sdc/CodeSystem/launchContext').exists() implies extension('type').all(value = 'Location')) and (extension('name').value.where(code='study' and system='http://hl7.org/fhir/uv/sdc/CodeSystem/launchContext').exists() implies extension('type').all(value = 'ResearchStudy'))"
XPath: "(not(f:extension[@url='name' and f:valueCoding[f:code/@value='patient' and f:system/@value='http://hl7.org/fhir/uv/sdc/CodeSystem/launchContext']]) or not(f:extension[@url='type' and f:valueCode/@value!='Patient'])) and (not(f:extension[@url='name' and f:valueCoding[f:code/@value='user' and f:system/@value='http://hl7.org/fhir/uv/sdc/CodeSystem/launchContext']]) or not(f:extension[@url='type' and f:valueCode/@value!=('Patient','Practitioner','PractitionerRole','RelatedPerson', 'Organization', 'Device')])) and (not(f:extension[@url='name' and f:valueCoding[f:code/@value='encounter' and f:system/@value='http://hl7.org/fhir/uv/sdc/CodeSystem/launchContext']]) or not(f:extension[@url='type' and f:valueCode/@value!='Encounter']))) and (not(f:extension[@url='name' and f:valueCoding[f:code/@value='study' and f:system/@value='http://hl7.org/fhir/uv/sdc/CodeSystem/launchContext']]) or f:extension[@url='type' and not(f:valueCode/@value!='ResearchStudy'])) and (not(f:extension[@url='name' and f:valueCoding[f:code/@value='location' and f:system/@value='http://hl7.org/fhir/uv/sdc/CodeSystem/launchContext']]) or not(f:extension[@url='type' and f:valueCode/@value!='Location']))"


---

// File: input/fsh/extensions/LookupQuestionnaireExtension.fsh

Extension: LookupQuestionnaireExtension
Id: sdc-questionnaire-lookupQuestionnaire
Title: "Lookup questionnaire"
Description: "For items of type reference, the reference can be populated either by picking an existing entity or by creating a new one.  In the latter case, this Questionnaire allows specifying the Questionnaire to use in creating the target instance.  Typically this will result in a QuestionnaireResponse that can be [extracted](extraction.html) to produce the desired resource.  However, if the target resource for the reference is a QuestionnaireResponse, then the QuestionnaireResponse resulting from the Questionnaire can be referenced directly."
* ^status = #active
* ^purpose = "Allows creation of references to be Questionnaire-based."
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* ^contextInvariant = "ofType(ElementDefinition).type.exists(code='Reference') or where(%resource.is(Questionnaire)).exists(type.first()='reference')"
* . 0..1
* . ^short = "Questionnaire to populate a reference"
* . ^definition = "For items of type reference, the reference can be populated either by picking an existing entity or by creating a new one.  In the latter case, this Questionnaire allows specifying the Questionnaire to use in creating the target instance.  Typically this will result in a QuestionnaireResponse that can be [extracted](extraction.html) to produce the desired resource.  However, if the target resource for the reference is a QuestionnaireResponse, then the QuestionnaireResponse resulting from the Questionnaire can be referenced directly."
* url only uri
* value[x] only canonical

---

// File: input/fsh/extensions/MaxQuantityExtension.fsh

Extension: MaxQuantityExtension
Id: sdc-questionnaire-maxQuantity
Title: "Max quantity"
Description: "The inclusive upper bound on the range of allowed values for  a 'quantity' type question.  Open Issue: Revisit whether this should be folded into the regular maxValue extension once there are better capabilities around defining conformance expectations regarding extensions."
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* ^contextInvariant = "ofType(ElementDefinition).type.exists(code='Quantity') or where(%resource.is(Questionnaire)).exists(type.first()='quantity')"
* . 0..1
* . ^short = "Must be <= this value"
* . ^definition = "The inclusive upper bound on the range of allowed values for  a 'quantity' type question.  Open Issue: Revisit whether this should be folded into the regular maxValue extension once there are better capabilities around defining conformance expectations regarding extensions."
* . ^comment = "This  must only be used if the set of permitted units is constrained to UCUM codes and the maximum checks will be performed by converting the answer.valueQuantity to the same units as the maxQuantity unit prior to comparison."
* url only uri
* value[x] only Quantity

---

// File: input/fsh/extensions/MinQuantityExtension.fsh

Extension: MinQuantityExtension
Id: sdc-questionnaire-minQuantity
Title: "Min quantity"
Description: "The inclusive lower bound on the range of allowed values for a 'quantity' type question.  Open Issue: Revisit whether this should be folded into the regular minValue extension once there are better capabilities around defining conformance expectations regarding extensions."
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* ^contextInvariant = "ofType(ElementDefinition).type.exists(code='Quantity') or where(%resource.is(Questionnaire)).exists(type.first()='quantity')"
* . 0..1
* . ^short = "Must be >= this value"
* . ^definition = "The inclusive lower bound on the range of allowed values for a 'quantity' type question.  Open Issue: Revisit whether this should be folded into the regular minValue extension once there are better capabilities around defining conformance expectations regarding extensions."
* . ^comment = "This  must only be used if the set of permitted units is constrained to UCUM codes and the minimum  checks will be performed by converting the answer.valueQuantity to the same units as the minQuantity unit prior to comparison."
* url only uri
* value[x] only Quantity

---

// File: input/fsh/extensions/ObservationExtractCategory.fsh

Extension: ObservationExtractCategory
Id: sdc-questionnaire-observation-extract-category
Title: "Extract Observation - Category"
Description: "Indicates the Observation.category value(s) that should appear on extracted Observations for the entire Questionnaire or for the current item and descendant items.  If this extension appears at multiple levels in the Questionnaire, those defined on lower-level items override those declared on higher-level items."
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire"
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..*
* . ^short = "Extract the Observation.category value(s) from Questionnaire"
* . ^definition = "Indicates the Observation.category value(s) that should appear on extracted Observations for the entire Questionnaire or for the current item and descendant items.  If this extension appears at multiple levels in the Questionnaire, those defined on lower-level items override those declared on higher-level items."
* . ^comment = "This extension canot be specified on \"display\" items."
* url only uri
* value[x] only CodeableConcept

---

// File: input/fsh/extensions/ObservationExtractExtension.fsh

Extension: ObservationExtractExtension
Id: sdc-questionnaire-observationExtract
Title: "Extract Observation"
Description: "Indicates how the observation-based extraction approach should be applied to an item or all items in a questionnaire. When set to `true`, the item is extracted as an independent Observation with no relationship to a parent Observation (If true, indicates that the observation-based approach should be used to extract either the particular item (if extension is defined on an individual question or group based on the code present) or all items in the questionnaire (if defined at the questionnaire root and if they have a code present)). When set to a `code` value (e.g., `member` or `component`), the extracted Observation is related to a parent Observation according to the specified relationship. Mixing `boolean` and `code` values within the same item is invalid and will result in an error."
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire"
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item.code"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..1
* . ^short = "Marks an item (or all items in a questionnaire) to be extracted using the observation-based approach"
* . ^definition = "Indicates how the observation-based extraction approach should be applied to an item or all items in a questionnaire. When set to `true`, the item is extracted as an independent Observation with no relationship to a parent Observation (If true, indicates that the observation-based approach should be used to extract either the particular item (if extension is defined on an individual question or group based on the code present) or all items in the questionnaire (if defined at the questionnaire root and if they have a code present)). When set to a `code` value (e.g., `member` or `component`), the extracted Observation is related to a parent Observation according to the specified relationship. Mixing `boolean` and `code` values within the same item is invalid and will result in an error."
* . ^comment = "This extension canot be specified on \"display\" items."
* url only uri
* value[x] only boolean or code
* value[x] from ObservationExtractRelationship (required)

---

// File: input/fsh/extensions/ObservationLinkPeriodExtension.fsh

Extension: ObservationLinkPeriodExtension
Id: sdc-questionnaire-observationLinkPeriod
Title: "Obervation link period"
Description: "Indicates the time-period (from 'now') to search for observations that match the Questionnaire.item.code and Questionnaire.subject when pre-populating the QuestionnaireResponse."
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..1
* . ^short = "Relevant time to pre-pop observation"
* . ^definition = "Indicates the time-period (from 'now') to search for observations that match the Questionnaire.item.code and Questionnaire.subject when pre-populating the QuestionnaireResponse."
* . ^comment = "If multiple Observations are found, the most recent is used."
* url only uri
* value[x] only Duration

---

// File: input/fsh/extensions/OptionalDisplayExtension.fsh

Extension: OptionalDisplayExtension
Id: sdc-questionnaire-optionalDisplay
Title: "Optional Display?"
Description: "This extension is used when defining high-level questionnaires that will then be used as a basis for 'derived' Questionnaires that are further refined for use in specific organizations or contexts.  If the extension is present and set to 'true', it means that this item should be considered to be 'optional' from an adaptation perspective and that the question can be removed (i.e. not displayed) in derived questionnaires without impacting the validity of the instrument.  Alternatively, the element can be marked as 'hidden' and 'readOnly' and have a value or descendant item values declared using initialValue or initialExpression.  If the element with 'optionalDisplay=true' is marked as 'required=true', then this second approach is the only means to exclude the element from display."
* ^version = "3.0.0"
* ^status = #active
* ^purpose = "This was introduced to satisfy requirements from the College of American Pathologists (CAP)"
* ^context.type = #element
* ^context.expression = "Questionnaire.item"
* . 0..1
* . ^short = "Can suppress from display to user"
* . ^definition = "This extension is used when defining high-level questionnaires that will then be used as a basis for 'derived' Questionnaires that are further refined for use in specific organizations or contexts.  If the extension is present and set to 'true', it means that this item should be considered to be 'optional' from an adaptation perspective and that the question can be removed (i.e. not displayed) in derived questionnaires without impacting the validity of the instrument.  Alternatively, the element can be marked as 'hidden' and 'readOnly' and have a value or descendant item values declared using initialValue or initialExpression.  If the element with 'optionalDisplay=true' is marked as 'required=true', then this second approach is the only means to exclude the element from display."
* . ^comment = "If a group or question that contains other groups or questions is marked as \"optional\", all of its contents are automatically also treated as optional."
* url only uri
* value[x] only boolean

---

// File: input/fsh/extensions/PerformerTypeExtension.fsh

Extension: PerformerTypeExtension
Id: sdc-questionnaire-performerType
Title: "Performer type"
Description: "Indicates the types of resources that can record answers to a Questionnaire. Open Issue: Should this extension be moved to core?"
* ^version = "3.0.0"
* ^status = #active
* ^context.type = #element
* ^context.expression = "Questionnaire"
* . ^short = "Resource that can record answers to this Questionnaire"
* . ^definition = "Indicates the types of resources that can record answers to a Questionnaire. Open Issue: Should this extension be moved to core?"
* url only uri
* value[x] only code
* value[x] from QuestionnairePerformerType (required)
  * ^binding.description = "Resources that can record answers to a questionnaire."

---

// File: input/fsh/extensions/PreferredTerminologyServer.fsh

Extension: PreferredTerminologyServer
Id: sdc-questionnaire-preferredTerminologyServer
Title: "Preferred Terminology Server"
Description: "Use the new  generic http://hl7.org/fhir/StructureDefinition/preferredTerminologyServer instead"
* ^extension[$standard-status].valueCode = #deprecated
* ^status = #retired
* ^purpose = "Not all terminology servers will necessarily have access to the codes.  If a questionnaire points to value sets, the rendering engine needs to know where to get a current expansion."
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire"
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..*
* . ^short = "Preferred terminology server"
* . ^definition = "Indicates the terminology server(s) that are known to be capable of returning and potentially expanding the value set(s) associated with the whole questionnaire or a particular group or question within the questionnaire (depending on where the extension appears).  If a full URL is not provided AND the requested query is a terminology operation (e.g. $lookup or $expand) the client SHOULD execute the operation against the preferredTerminologyServer rather than the local repository. Systems SHOULD evaluate value sets using terminology servers as follows:  First, try any terminology servers declared on the item in question.  If there are more then one, try them in the order they appear.  Then try any servers that appear on ancestor items in order of closest ancestor up to any on the Questionnaire.  If there are no declared servers or none of the ones listed provide a useful response, the form filler may then try any of the typical servers it would normally use.  A 'useful response' means a response that provides a valid (though potentially empty) expansion.  Clients MAY wish to log/report errors returned by terminology servers."
* . ^comment = "This includes those referenced by answerValueSet as well as the unitValueSet extension."
* url only uri
* value[x] only url

---

// File: input/fsh/extensions/QuestionnaireAdaptiveExtension.fsh

Extension: QuestionnaireAdaptiveExtension
Id: sdc-questionnaire-questionnaireAdaptive
Title: "Questionnaire Adaptive"
Description: "Marks a questionnaire as being adaptive.  Value can either be a boolean (if true, indicates adaptive) or a URL for the base URL of a server that can perform the nextQuestion operation for this particular questionnaire."
* ^status = #active
* ^context.type = #element
* ^context.expression = "Questionnaire"
* . 0..*
* . ^short = "Marks a questionnaire as being adaptive."
* . ^definition = "Marks a questionnaire as being adaptive.  Value can either be a boolean (if true, indicates adaptive) or a URL for the base URL of a server that can perform the nextQuestion operation for this particular questionnaire."
* . ^comment = "There can only be one in a questionnaire if the value used is boolean."
* url only uri
* value[x] only boolean or url

---

// File: input/fsh/extensions/RenderingCriticalExtension.fsh

Extension: RenderingCriticalExtension
Id: sdc-rendering-criticalExtension
Title: "Rendering Critical Extension"
Description: "Indicates an extension that must be supported by the system presenting the instance for data capture or end-user consumption. If a system does not recognize the extension or cannot implement the functionality defined by the extension, it should display an error message or warning and refrain from presenting the instance to the user or using it when capturing data."
* ^status = #active
* ^purpose = "Allows systems to identify extensions that are critical for rendering or interacting with the resource in data capture or consumption scenarios."
* ^context.type = #element
* ^context.expression = "Resource"
* . ?!
* . ^isModifierReason = "Indicates that the Questionnaire can't be safely rendered in certain situations"
* . 0..*
* . ^short = "Extension that must be supported"
* . ^definition = "Indicates an extension that must be supported by the system presenting the instance for data capture or end-user consumption. If a system does not recognize the extension or cannot implement the functionality defined by the extension, it should display an error message or warning and refrain from presenting the instance to the user or using it when capturing data."
* . ^comment = "This may point to extensions that control the appearance of data elements, control what value elements have, what elements are or are not available, what elements can or cannot be edited, or rules about how editing may occur. This extension does NOT apply when simply rendering a resource for publication purposes or for other purposes not intended for end-user data capture or data consumption."
* url only uri
* value[x] 1..1
* value[x] only canonical

---

// File: input/fsh/extensions/SDCOpenLabel.fsh

Extension: SDCOpenLabel
Id: sdc-questionnaire-openLabel
Title: "Label for 'open' items"
Description: "The label text to display beside free-text and/or unrestricted type values for an 'open' choice element.  E.g. 'Other, please specify', or 'Additional condition', or 'More reason(s)', etc."
* ^status = #active
* ^purpose = "Gives control to the questionnaire designer rather than leaving it up to the Form Filler."
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* ^contextInvariant = "ofType(ElementDefinition).type.exists(code='Coding') or where(%resource.is(Questionnaire)).exists(type.first()='open-choice')"
* . 0..1
* . ^short = "Image to display"
* . ^definition = "The label text to display beside free-text and/or unrestricted type values for an 'open' choice element.  E.g. 'Other, please specify', or 'Additional condition', or 'More reason(s)', etc."
* url only uri
* value[x] only string

---

// File: input/fsh/extensions/SDCServiceRequestQuestionnaire.fsh

Extension: SDCServiceRequestQuestionnaire
Id: sdc-servicerequest-questionnaire
Title: "ServiceRequest Questionnaire"
Description: "Identifies a Questionnaire that is being asked to be completed"
* ^status = #active
* ^context.type = #element
* ^context.expression = "ServiceRequest"
* . 0..*
* . ^short = "Questionnaire to be completed"
* . ^definition = "Identifies a Questionnaire that is being asked to be completed"
* url only uri
* value[x] only canonical
  * ^type.targetProfile = "http://hl7.org/fhir/StructureDefinition/Questionnaire"

---

// File: input/fsh/extensions/ShortTextExtension.fsh

Extension: ShortTextExtension
Id: sdc-questionnaire-shortText
Title: "Short Text"
Description: "The short text for the item."
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..1
* . ^short = "Short text for the item."
* . ^definition = "The short text for the item."
* . ^comment = "This element is useful for an item that require a shorter text when rendered  (e.g. when displaying the item on a mobile phone)."
* url only uri
* value[x] only string

---

// File: input/fsh/extensions/SourceQueriesExtension.fsh

Extension: SourceQueriesExtension
Id: sdc-questionnaire-sourceQueries
Title: "Source queries for population mapping"
Description: "A Batch Bundle containing a set of queries that should be executed to provide source data for a StructureMap to create a populated QuestionnaireResponse."
* ^status = #active
* ^context.type = #element
* ^context.expression = "Questionnaire"
* . 0..1
* . ^short = "Bundle of queries to populate from"
* . ^definition = "A Batch Bundle containing a set of queries that should be executed to provide source data for a StructureMap to create a populated QuestionnaireResponse."
* url only uri
* value[x] only Reference(Bundle)

---

// File: input/fsh/extensions/SourceStructureMapExtension.fsh

Extension: SourceStructureMapExtension
Id: sdc-questionnaire-sourceStructureMap
Title: "Source structure map"
Description: "StructureMaps that have this QuestionnaireResponses for this Questionnaire as 'target' - i.e. that can be used to create QuestionnaireResponses that are valid against this Questionnaire."
* ^status = #active
* ^purpose = "While it's possible to query for StructureMaps associated with a Questionnaire, it might not be obvious what repository to query.  This allows a Questionnaire to specifically identify known relevant maps."
* ^context.type = #element
* ^context.expression = "Questionnaire"
* . 0..1
* . ^short = "Map that can populate this questionnaire"
* . ^definition = "StructureMaps that have this QuestionnaireResponses for this Questionnaire as 'target' - i.e. that can be used to create QuestionnaireResponses that are valid against this Questionnaire."
* url only uri
* value[x] only canonical
  * ^type.targetProfile = "http://hl7.org/fhir/StructureDefinition/StructureMap"

---

// File: input/fsh/extensions/SubQuestionnaireExtension.fsh

Extension: SubQuestionnaireExtension
Id: sdc-questionnaire-subQuestionnaire
Title: "Sub-questionnaire"
Description: "Indicates that the display item on which this extension appears should be replaced with the referenced Questionnaire"
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* ^contextInvariant = "where(%resource.is(Questionnaire)).exists(type.first()='display') or ofType(ElementDefinition).type.exists().allTrue()"
* . 0..1
* . ^short = "Questionnaire to substitute here"
* . ^definition = "Indicates that the display item on which this extension appears should be replaced with the referenced Questionnaire"
* url only uri
* value[x] only canonical

---

// File: input/fsh/extensions/TargetStructureMapExtension.fsh

Extension: TargetStructureMapExtension
Id: sdc-questionnaire-targetStructureMap
Title: "Extract StructureMap - Target structure map"
Description: "StructureMaps that have QuestionnaireResponses of this Questionnaire as 'source'- i.e. that can be used to create other artifacts from QuestionnaireResponses that are valid against this Questionnaire. If multiple maps are specified, then multiple extraction outputs will be produced.  Authors can choose between a single output 'transaction' Bundle or multiple outputs depending on the desired behavior and maintenance process."
* ^status = #active
* ^purpose = "While it's possible to query for StructureMaps associated with a Questionnaire, it might not be obvious what repository to query.  This allows a Questionnaire to specifically identify known relevant maps."
* ^context.type = #element
* ^context.expression = "Questionnaire"
* . 0..*
* . ^short = "Map to artifacts that can be populated from this Questionnaire"
* . ^definition = "StructureMaps that have QuestionnaireResponses of this Questionnaire as 'source'- i.e. that can be used to create other artifacts from QuestionnaireResponses that are valid against this Questionnaire."
* url only uri
* value[x] only canonical
  * ^type.targetProfile = "http://hl7.org/fhir/StructureDefinition/StructureMap"

---

// File: input/fsh/extensions/UnitOpen.fsh

Extension: UnitOpen
Id: sdc-questionnaire-unitOpen
Title: "Units open?"
Description: "Indicates whether the list of supported units (conveyed in other extensions) are the exhaustive list from which the user must choose or whether they're able to select alternate codes or specify a string."
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..1
* . ^short = "Used to denote if user can specify alternate codes"
* . ^definition = "Indicates whether the list of supported units (conveyed in other extensions) are the exhaustive list from which the user must choose or whether they're able to select alternate codes or specify a string."
* url only uri
* value[x] 1..1
* value[x] only code
* value[x] from QuestionnaireAnswerConstraint (required)
  * ^binding.description = "The types of constraints possible on a question item that has a list of permitted answers"

---

// File: input/fsh/extensions/UnitSupplementalSystem.fsh

Extension: UnitSupplementalSystem
Id: sdc-questionnaire-unitSupplementalSystem
Title: "Code system for other units"
Description: "If the questionnaire-unit-open extension indicates that additional units other than the set of options provided for the question are allowed, this indicates the code system those units are expected to be drawn from.  This extension SHOULD be present on any question where questionnaire-unit-open allows additional coded values."
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..1
* . ^short = "This extension indicates the code system the additional units are drawn from"
* . ^definition = "If the questionnaire-unit-open extension indicates that additional units other than the set of options provided for the question are allowed, this indicates the code system those units are expected to be drawn from.  This extension SHOULD be present on any question where questionare-unit-open allows additional coded values."
* url only uri
* value[x] 1..1
* value[x] only canonical

---

// File: input/fsh/extensions/WidthExtension.fsh

Extension: WidthExtension
Id: sdc-questionnaire-width
Title: "Width of column"
Description: "When used with an item control that causes the question to appear as a column in a table, indicates the width to give to the column for this question."
* ^status = #active
* ^context[+].type = #element
* ^context[=].expression = "Questionnaire.item"
* ^context[+].type = #element
* ^context[=].expression = "ElementDefinition"
* . 0..1
* . ^short = "Width of column for question"
* . ^definition = "When used with an item control that causes the question to appear as a column in a table, indicates the width to give to the column for this question."
* . ^comment = "code missing = pixels; code = % = percentage."
* url only uri
* value[x] only Quantity

---

// File: input/fsh/invariants/dev-1.fsh

Invariant: dev-1
Description: "Either `expression` or a `fixed-value` must be provided."
Severity: #error
Expression: "extension('expression').value.exists() xor extension('fixed-value').value.exists()"


---

// File: input/fsh/invariants/tev-1.fsh

Invariant: tev-1
Description: "Either the `templateExtract` or a `templateExtractBundle` extension must be provided (or both)."
Severity: #error
Expression: "extension('http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-templateExtract').exists() or extension('http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-templateExtractBundle').exists() or repeat(item).extension('http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-templateExtract').exists()"


---

// File: input/fsh/logicals/SDCExample.fsh

Logical: SDCExample
Parent: Element
Id: ProfileExample
Title: "Patient Gender"
Description: "Data element SDC Profile Example"
* ^identifier.system = "http://nlm.nih.gov/some_other_text/data_element_identifier"
* ^identifier.value = "DE42AHRQ"
* ^status = #active
* ^publisher = "Health Level Seven, International"
* ^contact.telecom.system = #other
* ^contact.telecom.value = "http://hl7.org"
//* ^type = "DataelementSdcProfileExample"
* gender 0..1 CodeableConcept "The gender (i.e., the behavioral, cultural, or psychological traits typically associated with one sex) of a living subject as defined for administrative purposes."
* gender from http://hl7.org/fhir/ValueSet/administrative-gender (required)
//  * ^base.path = "dataelement-sdc-profile-example.gender"
//  * ^base.min = 0
//  * ^base.max = "1"

---

// File: input/fsh/logicals/SDCQuestionLibrary.fsh

Logical: SDCQuestionLibrary
Id: SdcQuestionLibrary
Title: "SDC Question Library"
Description: "An example library of questions showing how questions can be compiled into a library for use by modular questionnaires"
* ^version = "3.0.0"
* ^status = #active
* ^experimental = true
//* ^type = "Demographics"
* . ^short = "SDC Question Library"
  * ^definition = "A set of questions related to demographics"
* dob 0..1 date "n/a" "n/a"
  * ^extension.url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression"
  * ^extension.valueExpression.name = "name"
  * ^extension.valueExpression.language = #text/fhirpath
  * ^extension.valueExpression.expression = "%patient.birthdate"
  * ^label = "What is this person's date of birth?"
  * ^minValueDate = "1900-01-01"
  * ^maxValueDate.extension.url = "http://hl7.org/fhir/StructureDefinition/cqf-expression"
  * ^maxValueDate.extension.valueExpression.language = #text/fhirpath
  * ^maxValueDate.extension.valueExpression.expression = "now() as date + 1 day"
* sex 0..1 code "n/a" "n/a"
* sex from http://hl7.org/fhir/ValueSet/administrative-gender (required)
  * ^extension.url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression"
  * ^extension.valueExpression.name = "name"
  * ^extension.valueExpression.language = #text/fhirpath
  * ^extension.valueExpression.expression = "iif(%patient.gender='male','M', iif(%patient.gender='female','F'))"
  * ^label = "What is this person's gender?"
* address 0..1 Element "n/a" "n/a"
  * ^label = "What is this person's current mailing address?"
  * street 0..1 string "n/a" "n/a"
    * ^label = "Street address"
  * city 0..1 string "n/a" "n/a"
    * ^label = "City/Town"
  * state 0..1 code "n/a" "n/a"
  * state from http://hl7.org/fhir/uv/sdc/ValueSet/sdc-question-library-states (required)
    * ^label = "State"
  * postalCode 1..1 string "n/a" "n/a"
    * ^extension.url = "http://hl7.org/fhir/StructureDefinition/entryFormat"
    * ^extension.valueString = "9999"
    * ^label = "Postal Code"
    * ^type.extension.url = "http://hl7.org/fhir/StructureDefinition/regex"
    * ^type.extension.valueString = "[\\d]{4}"
* name 0..1 Element "n/a" "n/a"
  * ^label = "What is the person's official name?"
  * prefix 0..1 string "n/a" "n/a"
    * ^label = "Prefix"
  * first 0..1 string "n/a" "n/a"
    * ^label = "First"
    * ^maxLength = 100
  * last 0..1 string "n/a" "n/a"
    * ^label = "Last"
    * ^maxLength = 100

---

// File: input/fsh/mappings/c-cda.fsh

Mapping: c-cda
Id: c-cda
Title: "Consolidated CDA R2"
Source: SDCExample
Target: "http://hl7.org/C-CDA-not-a-real-url"
* -> "/ClinicalDocument/recordTarget/patientRole/patient/administrativeGender" #text/xpath

---

// File: input/fsh/mappings/ihe-sdc-for-SDCQuestionnaireAdapt.fsh

// WARNING: The following Mapping may be incomplete since the original SDCQuestionnaireAdapt
// StructureDefinition was missing the mapping entry for ihe-sdc.
// Please review this and add the following properties as necessary: Target, Title, Description
Mapping: ihe-sdc-for-SDCQuestionnaireAdapt
Id: ihe-sdc
Title: "IHE SDC"
Source: SDCQuestionnaireAdapt
* -> "Form_Package"
* version -> "Not currently in schema"
* status -> "./administration_package/registration/state/registration_status"
* item -> "./form_design/*[self::header or self::footer or self::section]"

---

// File: input/fsh/mappings/ihe-sdc-for-SDCQuestionnaireAdaptSearch.fsh

// WARNING: The following Mapping may be incomplete since the original SDCQuestionnaireAdaptSearch
// StructureDefinition was missing the mapping entry for ihe-sdc.
// Please review this and add the following properties as necessary: Target, Title, Description
Mapping: ihe-sdc-for-SDCQuestionnaireAdaptSearch
Id: ihe-sdc
Title: "IHE SDC"
Source: SDCQuestionnaireAdaptSearch
* -> "Form_Package"
* extension[submissionEndpoint] -> "administrative_package/submissionRule/destination/endpoint"

---

// File: input/fsh/mappings/ihe-sdc-for-SDCQuestionnaireBehave.fsh

// WARNING: The following Mapping may be incomplete since the original SDCQuestionnaireBehave
// StructureDefinition was missing the mapping entry for ihe-sdc.
// Please review this and add the following properties as necessary: Target, Title, Description
Mapping: ihe-sdc-for-SDCQuestionnaireBehave
Id: ihe-sdc
Title: "IHE SDC"
Source: SDCQuestionnaireBehave
* -> "Form_Package"
* extension[submissionEndpoint] -> "administrative_package/submissionRule/destination/endpoint"
* item.extension[itemMinOccurs] -> "./cardinality/minimum"
* item.extension[itemMaxOccurs] -> "./cardinality/maximum"
* item.extension[minLength] -> "./*_Field/datatype/string/maximum_characters"
* item.extension[regex] -> "./*_Field/datatype/string/reg_ex"
* item.extension[minValue] -> "./*_Field/datatype/[integer|decimal]/minimum_value"
* item.extension[maxValue] -> "./*_Field/datatype/[integer|decimal]/maximum_value"
* item.extension[maxDecimalPlaces] -> "./*_Field/datatype/decimal/fractionDigits"
* item.extension[allowedResource] -> "/form_package/mapping_package/mdr_mapping/question_element_data_element_association[question_element_identifier=current()/question_identifier]/data_element_scoped_identifier"
* item.enableWhen.question -> "parent::list_item/parent::list_field/parent::question"
* item.enableWhen.answer[x] -> "parent::list_item"
* item.required -> "./cardinality/minimum!=0"

---

// File: input/fsh/mappings/ihe-sdc-for-SDCQuestionnaireCommon.fsh

// WARNING: The following Mapping may be incomplete since the original SDCQuestionnaireCommon
// StructureDefinition was missing the mapping entry for ihe-sdc.
// Please review this and add the following properties as necessary: Target, Title, Description
Mapping: ihe-sdc-for-SDCQuestionnaireCommon
Id: ihe-sdc
Title: "IHE SDC"
Source: SDCQuestionnaireCommon
* -> "Form_Package"
* version -> "Not currently in schema"
* status -> "./administration_package/registration/state/registration_status"
* item -> "./form_design/*[self::header or self::footer or self::section]"
* item.linkId -> "./section_identifier"
* item.prefix -> "./section_number/label"
* item.text -> "Form Design/designation[context=\"primary?\"/definition/  ./section_instruction/label"
* item.type -> "./*/datatype"
* item.required -> "./cardinality/minimum!=0"
* item.repeats -> "./cardinality/maximum!=1"
* item.readOnly -> "./*_Field/default_value_read_only  ./default_element/read_only"
* item.maxLength -> "./*_Field/maximum_character_quantity | ./*_Field/datatype/string/maximum_characters"
* item.answerValueSet -> "./list_field | ./lookup_field/endpoint"
* item.initial.value[x] -> "./default_value  ./default_element/default/value  ./default_element/list_item_identifier (resolve)"
* item.item -> "./contained_section"

---

// File: input/fsh/mappings/ihe-sdc-for-SDCQuestionnaireExtractDefinition.fsh

// WARNING: The following Mapping may be incomplete since the original SDCQuestionnaireExtractDefinition
// StructureDefinition was missing the mapping entry for ihe-sdc.
// Please review this and add the following properties as necessary: Target, Title, Description
Mapping: ihe-sdc-for-SDCQuestionnaireExtractDefinition
Id: ihe-sdc
Title: "IHE SDC"
Source: SDCQuestionnaireExtractDefinition
* -> "Form_Package"


---

// File: input/fsh/mappings/ihe-sdc-for-SDCQuestionnaireExtractObservation.fsh

// WARNING: The following Mapping may be incomplete since the original SDCQuestionnaireExtractObservation
// StructureDefinition was missing the mapping entry for ihe-sdc.
// Please review this and add the following properties as necessary: Target, Title, Description
Mapping: ihe-sdc-for-SDCQuestionnaireExtractObservation
Id: ihe-sdc
Title: "IHE SDC"
Source: SDCQuestionnaireExtractObservation
* -> "Form_Package"

---

// File: input/fsh/mappings/ihe-sdc-for-SDCQuestionnaireExtractStructureMap.fsh

// WARNING: The following Mapping may be incomplete since the original SDCQuestionnaireExtractStructureMap
// StructureDefinition was missing the mapping entry for ihe-sdc.
// Please review this and add the following properties as necessary: Target, Title, Description
Mapping: ihe-sdc-for-SDCQuestionnaireExtractStructureMap
Id: ihe-sdc
Title: "IHE SDC"
Source: SDCQuestionnaireExtractStructureMap
* -> "Form_Package"


---

// File: input/fsh/mappings/ihe-sdc-for-SDCQuestionnairePopulateExpression.fsh

// WARNING: The following Mapping may be incomplete since the original SDCQuestionnairePopulateExpression
// StructureDefinition was missing the mapping entry for ihe-sdc.
// Please review this and add the following properties as necessary: Target, Title, Description
Mapping: ihe-sdc-for-SDCQuestionnairePopulateExpression
Id: ihe-sdc
Title: "IHE SDC"
Source: SDCQuestionnairePopulateExpression
* -> "Form_Package"


---

// File: input/fsh/mappings/ihe-sdc-for-SDCQuestionnairePopulateObservation.fsh

// WARNING: The following Mapping may be incomplete since the original SDCQuestionnairePopulateObservation
// StructureDefinition was missing the mapping entry for ihe-sdc.
// Please review this and add the following properties as necessary: Target, Title, Description
Mapping: ihe-sdc-for-SDCQuestionnairePopulateObservation
Id: ihe-sdc
Title: "IHE SDC"
Source: SDCQuestionnairePopulateObservation
* -> "Form_Package"

---

// File: input/fsh/mappings/ihe-sdc-for-SDCQuestionnairePopulateStructureMap.fsh

// WARNING: The following Mapping may be incomplete since the original SDCQuestionnairePopulateStructureMap
// StructureDefinition was missing the mapping entry for ihe-sdc.
// Please review this and add the following properties as necessary: Target, Title, Description
Mapping: ihe-sdc-for-SDCQuestionnairePopulateStructureMap
Id: ihe-sdc
Title: "IHE SDC"
Source: SDCQuestionnairePopulateStructureMap
* -> "Form_Package"


---

// File: input/fsh/mappings/ihe-sdc-for-SDCQuestionnaireRender.fsh

// WARNING: The following Mapping may be incomplete since the original SDCQuestionnaireRender
// StructureDefinition was missing the mapping entry for ihe-sdc.
// Please review this and add the following properties as necessary: Target, Title, Description
Mapping: ihe-sdc-for-SDCQuestionnaireRender
Id: ihe-sdc
Title: "IHE SDC"
Source: SDCQuestionnaireRender
* -> "Form_Package"
* modifierExtension[RenderingCriticalExtension] -> "N/A (new requirement)"
* title.extension[title-renderingStyle] -> "../style"
* title.extension[title-xhtml] -> "(strings can contain xhtml)"
* item.extension[itemOptionalDisplay] -> "N/A (new requirement)"
* item.extension[itemShortText] -> "N/A (new requirement)"
* item.extension[displayCategory] -> "/form_package/mapping_package/mdr_mapping/question_element_data_element_association[question_element_identifier=current()/question_identifier]/data_element_scoped_identifier"
* item.extension[entryFormat] -> "./*_Field/format | ./*_Field/datatype/string/pattern"
* item.extension[collapsible] -> "./*_Field/format | ./*_Field/datatype/string/pattern"
* item.prefix.extension[itemLabel-renderingStyle] -> "../style"
* item.prefix.extension[itemLabel-xhtml] -> "(strings can contain xhtml)"
* item.text.extension[groupText-renderingStyle] -> "../style"
* item.text.extension[groupText-xhtml] -> "(strings can contain xhtml)"
* item.answerOption.valueString.extension[optionString-renderingStyle] -> "../style"
* item.answerOption.valueString.extension[optionString-xhtml] -> "(strings can contain xhtml)"
* item.answerOption.valueCoding.display.extension[optionDisplay-renderingStyle] -> "../style"
* item.answerOption.valueCoding.display.extension[optionDisplay-xhtml] -> "(strings can contain xhtml)"

---

// File: input/fsh/mappings/ihe-sdc-for-SDCQuestionnaireSearch.fsh

// WARNING: The following Mapping may be incomplete since the original SDCQuestionnaireSearch
// StructureDefinition was missing the mapping entry for ihe-sdc.
// Please review this and add the following properties as necessary: Target, Title, Description
Mapping: ihe-sdc-for-SDCQuestionnaireSearch
Id: ihe-sdc
Title: "IHE SDC"
Source: SDCQuestionnaireSearch
* -> "Form_Package"
* identifier -> "./form_design/@form_design_identifier {maps to value; system=\"urn:ietf:rfc:3986\"}"
* date -> "./administration_package/registration/creation_date"
* publisher -> "./administration_package/registration/organization"
* useContext -> "./form_design/classifier"

---

// File: input/fsh/mappings/ihesdc-for-SDCCodeSystem.fsh

// WARNING: The following Mapping may be incomplete since the original SDCCodeSystem
// StructureDefinition was missing the mapping entry for ihesdc.
// Please review this and add the following properties as necessary: Target, Title, Description
Mapping: ihesdc-for-SDCCodeSystem
Id: ihesdc
Title: "IHE SDC"
Source: SDCCodeSystem
* -> "Form_Package//list_field"
* name -> "IHE SDC"
* modifierExtension[RenderingCriticalExtension] -> "N/A (new requirement)"
* concept -> "list_item"
* concept.code -> "value"
* concept.display -> "item_prompt"
* concept.display.extension[conceptDisplayLabel-xhtml] -> "item_prompt_html"
* concept.definition -> "value_meaning/label"
* concept.designation.value.extension[conceptDisplayLabel-xhtml] -> "item_prompt_html"

---

// File: input/fsh/mappings/ihesdc-for-SDCValueSet.fsh

// WARNING: The following Mapping may be incomplete since the original SDCValueSet
// StructureDefinition was missing the mapping entry for ihesdc.
// Please review this and add the following properties as necessary: Target, Title, Description
Mapping: ihesdc-for-SDCValueSet
Id: ihesdc
Title: "IHE SDC"
Source: SDCValueSet
* -> "Form_Package//list_field"
* modifierExtension[RenderingCriticalExtension] -> "N/A (new requirement)"
* compose.include.concept -> "list_item/value"
* compose.include.concept.extension[conceptLabel] -> "list_item/item_number/label"
* compose.include.concept.extension[conceptLabel].valueString.extension[code-renderingStyle] -> "list_item/item_number/style"
* compose.include.concept.extension[conceptLabel].valueString.extension[code-xhtml] -> "N/A"
* compose.include.concept.extension[conceptConceptOrder] -> "list_item/list_item_order"
* compose.include.concept.display.extension[codeDisplay-xhtml] -> "list_item/item_prompt_html"
* compose.include.concept.designation.extension[designation-xhtml] -> "list_item/item_prompt_html"
* expansion.contains -> "list_item"
* expansion.contains.extension[expansionLabel] -> "item_number/label"
* expansion.contains.extension[expansionLabel].valueString.extension[expansion-renderingStyle] -> "item_number/style"
* expansion.contains.extension[expansionLabel].valueString.extension[expansion-xhtml] -> "N/A"
* expansion.contains.extension[conceptConceptOrder] -> "list_item_order"
* expansion.contains.code -> "value"
* expansion.contains.display -> "item_prompt"
* expansion.contains.display.extension[expansionDisplay-xhtml] -> "item_prompt_html"
* expansion.contains.designation.extension[expansionDesignation-xhtml] -> "list_item/item_prompt_html"

---

// File: input/fsh/operations/Questionnaire-assemble.fsh

Instance: Questionnaire-assemble
InstanceOf: OperationDefinition
Title: "Assemble Modular Questionnaire Operation"
Usage: #definition
* url = "http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-assemble"
* name = "SDCAssemble"
* title = "Assemble Modular Questionnaire Operation"
* status = #active
* kind = #operation
* description = "The $assemble operation takes a modular questionnaire (one that references sub-questionnaires and/or relies on definition elements to contain the content for item definitions) and produces the equivalent fully-inline Questionnaire.  Full details on the process can be found [here](modular.html)."
* code = #assemble
* resource = #Questionnaire
* system = false
* type = true
* instance = true
* inputProfile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-modular"
* parameter[+]
  * insert parameter(#questionnaire, #in, 1, "1", #Element, "The [Modular Questionnaire](StructureDefinition-sdc-questionnaire-modular.html\) to assemble the content of. Can be provided as a canonical for the questionnaire\, a questionnaire reference\, or directly as a questionnaire resource.")
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/operationdefinition-allowed-type"
    * valueUri = "uri"
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/operationdefinition-allowed-type"
    * valueUri = "Reference"
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/operationdefinition-allowed-type"
    * valueUri = "Questionnaire"
* parameter[+]
  * insert parameter(#return, #out, 0, "1", #Resource, "The fully assembled [Questionnaire](StructureDefinition-sdc-questionnaire.html\) with all subQuestionnaires inlined and all items with item.definitions have had relevant metadata propagated into the item.")
* parameter[+]
  * insert parameter(#outcome, #out, 0, "1", #Resource, "The OperationOutcome indicating any warnings or information messages with the assembly process")
  

---

// File: input/fsh/operations/Questionnaire-next-question.fsh

Instance: Questionnaire-next-question
InstanceOf: OperationDefinition
Title: "Adaptive questionnaire next question"
Description: "Returns the next question or set of questions for an adaptive questionnaire"
Usage: #definition
* url = "http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-next-question"
* version = "0.0.0"
* name = "SDCNextQuestion"
* title = "Adaptive Questionnaire - Next Question Operation"
* status = #active
* kind = #operation
* date = "2018-08-29"
* publisher = "HL7 International - FHIR Infrastructure Work Group"
* contact.telecom
  * system = #other
  * value = "http://www.hl7.org/Special/committees/fiwg"
* description = "The Next Question operation is used for *adaptive questionnaires* - forms where the next question (or set of questions) is based on previous answers.  The result of this operation is to return an updated QuestionnaireResponse with a contained Questionnaire that includes the next question (or set of questions).  It might also include display items with instructions and/or read-only questions containing calculated scores.  This operation uses the [QuestionnaireResponse](http://hl7.org/fhir/R4/questionnaireresponse.html) resource with a [*contained*](http://hl7.org/fhir/R4/references.html#contained) [Questionnaire](http://hl7.org/fhir/R4/questionnaire.html) as both the input and output parameter. The client initiates and queries for the next question by including the answers to all required questions in the questionnaire to that point.  The Server updates the contained Questionnaire in the QuestionnaireResponse in the with the next question or set of questions and any needed instruction or score items.  When the questionnaire is complete, the Server updates the `QuestionnaireResponse.status` resource parameter to `complete`.  If completion of the questionnaire has exceeded any time limit, the Server may return an [OperationOutcome](http://hl7.org/fhir/R4/operationoutcome.html) with an error."
* code = #next-question
* comment = "To return a calculated score for the questionnaire or group of items, the service may return a `readOnly` question with the score value in the corresponding QuestionnaireResponse.item.  The extension `questionnaire-hidden` can be included on the Questionnaire.item to indicate to the client that it should not be displayed to the end user"
* resource = #Questionnaire
* system = false
* type = true
* instance = false
* inputProfile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/parameters-questionnaire-next-question-in"
* outputProfile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/parameters-questionnaire-next-question-out"
* parameter[+]
  * insert parameter(#questionnaire-response, #in, 1, "1", #Resource, "The [Adaptive QuestionnaireResponse Profile](StructureDefinition-sdc-questionnaireresponse-adapt.html\) of the QuestionnaireResponse resource with a *contained* Questionnaire.  When invoking the operation for the first time\, neither the QuestionnaireResponse nor the contained Questionnaire will have any items\, as no questions are yet known.  In subsequent calls\, the QuestionnaireResponse will include answers to all required questions asked so far and the contained QuestionnaireResponse will remain the same as provided back from the operation in the preceding response.")
* parameter[+]
  * insert parameter(#return, #out, 1, "1", #Resource, "The [Adaptive QuestionnaireResponse Profile](StructureDefinition-sdc-questionnaireresponse-adapt.html\) of the QuestionnaireResponse resource with a *contained* Questionnaire.  The Server updates the QuestionnaireResponse's contained Questionnaire by appending with the next question or questions items and any score or instruction items and returns the QuestionnaireResponse (with all answers completed thus far plus any calculated scores\) as this parameter.  When the questionnaire is complete\, the Server updates the status of the QuestionnaireResponse resource parameter to `complete`.")


---

// File: input/fsh/operations/Questionnaire-populate.fsh

Instance: Questionnaire-populate
InstanceOf: OperationDefinition
Title: "Populate Questionnaire"
Description: "Generates a QuestionnaireResponse from a Questionnaire, possibly with data partially populated"
Usage: #definition
* url = "http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-populate"
* name = "SDCPopulateQuestionnaire"
* title = "Populate Questionnaire"
* status = #active
* kind = #operation
* date = "2018-08-19T21:48:56+10:00"
* publisher = "HL7 International - FHIR Infrastructure Work Group"
* contact.telecom
  * system = #other
  * value = "http://www.hl7.org/Special/committees/fiwg"
* description = "Generates a [QuestionnaireResponse](http://hl7.org/fhir/R4/questionnaireresponse.html) instance  based on a specified [Questionnaire](http://hl7.org/fhir/R4/questionnaire.html), filling in answers to questions where possible based on information provided as part of the operation or already known by the server about the subject of the [Questionnaire](http://hl7.org/fhir/R4/questionnaire.html).\n\nIf the operation is not called at the instance level, one and only one of the identifier, questionnaire or questionnaireRef `in` parameters must be provided.\n\nIf called at the instance level, these parameters will be ignored.\nThe response will contain a [QuestionnaireResponse](http://hl7.org/fhir/R4/questionnaireresponse.html) instance based on the specified [Questionnaire](http://hl7.org/fhir/R4/questionnaire.html) and/or an [OperationOutcome](http://hl7.org/fhir/R4/operationoutcome.html) resource with errors or warnings.\n\nThe [QuestionnaireResponse](http://hl7.org/fhir/R4/questionnaireresponse.html) instance will be populated with an unanswered set of questions following the group and question structure of the specified [Questionnaire](http://hl7.org/fhir/R4/questionnaire.html).\n\nIf  *content* parameters were specified or the *local* parameter was set to true, some of the questions may have answers filled in as well.  In the case of repeating questions or groups, typically only one repetition will be provided unless answer values exist that would support populating multiple repetitions.  \n\nPopulation of the [QuestionnaireResponse](http://hl7.org/fhir/R4/questionnaireresponse.html) with appropriate data is dependent on the questions and/or groups in the [Questionnaire](http://hl7.org/fhir/R4/questionnaire.html) having metadata that allows the server to recognize the questions.  Guidance on mechanisms to perform population can be found [here](populate.html).  \nRegardless of the mechanism used to link the questions in a questionnaire to a \\\"known\\\" mappable concept, solutions using this operation should ensure that the details of the question and associated linkage element are sufficiently similar as to safely allow auto-population; i.e. the question text and context must be sufficiently the same, the value set for the question must fall within the value set for the mapped element, the data types must be the same or convertible, etc.\"\n"
* code = #populate
* comment = "While it is theoretically possible for a [QuestionnaireResponse](http://hl7.org/fhir/R4/questionnaireresponse.html) instance to be completely auto-populated and submitted without human review, the intention of this transaction is merely to reduce redundant data entry.  A client **SHOULD** ensure that a human submitter has an opportunity to review the auto-populated answers to confirm correctness as well as to complete or expand on information provided by the auto-population process.  When creating an \"empty\" questionnaire, the general algorithm is to create a QuestionnaireResponse with one item for every item in the source Questionnaire, including items with \"enableWhen\", \"display\" items, etc.  If a question has a default, the default answer should be populated.  And the QuestionnaireResponse should point back to the originating Questionnaire.  Repeating items will typically only include a single repetition.  Other extensions and/or elements may also be populated if the system is aware of appropriate values.  Complex form designs with conditional logic or tight constraints on cardinalities may be challenging to auto-populate.  A server MAY choose to traverse the questionnaire as if it were a human respondent, answering only those questions that are enabled based on previously answered questions.  However, doing so may result in minimal population.  Alternatively, systems may choose to populate all known answers, independent of dependencies and other constraints.  This may cause questions to be answered that should not be answered.  It will be up to the client to appropriately prune the final populated questionnaire once human review has taken place.  Invoking this operation with the `content` parameter may involve the disclosure of personally identifiable healthcare information to the system which is performing the population process.  No such disclosures should be made unless the system on which the operation is being invoked is a \"trusted\" system and appropriate agreements are in place to protect the confidentiality of any information shared with that system."
* resource = #Questionnaire
* system = false
* type = true
* instance = true
* inputProfile = Canonical(SDCParametersQuestionnairePopulateIn)
* outputProfile = Canonical(SDCParametersQuestionnairePopulateOut)
* parameter[+]
  * insert parameter(#identifier, #in, 0, "1", #Identifier, "A logical questionnaire identifier (i.e. `Questionnaire.identifier`\). The server must know the questionnaire or be able to retrieve it from other known repositories.")
* parameter[+]
  * insert parameter(#questionnaire, #in, 0, "1", #Element, "The Questionnaire to populate the response. Can be provided as a canonical for the questionnaire\, a questionnaire reference\, or directly as a questionnaire resource.")
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/operationdefinition-allowed-type"
    * valueUri = "uri"
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/operationdefinition-allowed-type"
    * valueUri = "Reference"
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/operationdefinition-allowed-type"
    * valueUri = "Questionnaire"
* parameter[+]
  * insert parameter(#subject, #in, 0, "1", #Reference, "The resource that is to be the *QuestionnaireResponse.subject*. The [QuestionnaireResponse](http://hl7.org/fhir/R4/questionnaireresponse.html\) instance will reference the provided subject.  In addition\, if the *local* parameter is set to true\, server information about the specified subject will be used to populate the instance.")
* parameter[+]
  * insert parameterComplex(#context, #in, 0, "*", "Resources containing information to be used to help populate the [QuestionnaireResponse](http://hl7.org/fhir/R4/questionnaireresponse.html\).  These will typically be FHIR resources\, though alternative population mechanisms might allow consumption of binaries containing FHIR documents\, CDA documents or other source materials.  Servers might not support all possible source materials and may ignore materials they do not recognize.  (They MAY provide warnings if ignoring submitted resources.\)")
  * part[+]
    * insert parameter(#name, #in, 1, "1", #string, "The name of the launchContext or root Questionnaire variable the passed content should be used as for population purposes.  The name SHALL correspond to a launchContext or variable declared at the root of the Questionnaire. Allowed names include 'sourceQueries'\, which specifies that the context is the results of executing the queries in the sdc-questionnaire-sourceQueries extension.")
  * part[+]
    * insert parameter(#content, #in, 1, "*", #Element, "The actual resource (or resources\) to use as the value of the launchContext or variable. The content should be provided as a resource if the server performing the population may not have access to the content or the content is not available for RESTful retrieval (e.g. it's a search-response Bundle\).")
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/operationdefinition-allowed-type"
      * valueUri = "Reference"
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/operationdefinition-allowed-type"
      * valueUri = "Resource"
* parameter[+]
  * insert parameter(#local, #in, 0, "1", #boolean,"If specified and set to `true` (and the server is capable\)\, the server should use what resources and other knowledge it has about the referenced subject when pre-populating answers to questions.")
* parameter[+]
  * insert parameter(#response, #out, 1, "1", #QuestionnaireResponse, "The partially (or fully\)-populated set of answers for the specified Questionnaire")
* parameter[+]
  * insert parameter(#issues, #out, 0, "1", #OperationOutcome, "A list of hints and warnings about problems encountered while populating the questionnaire. These might be show to the user as an advisory note. Note: if the questionnaire cannot be populated at all\, then the operation should fail\, and an OperationOutcome is returned directly with the failure\, rather than using this parameter")


---

// File: input/fsh/operations/Questionnaire-populatehtml.fsh

Instance: Questionnaire-populatehtml
InstanceOf: OperationDefinition
Title: "Populate HTML Questionnaire"
Description: "Generates an HTML representation of the Questionnaire as a form, possibly partially populated with data"
Usage: #definition
* url = "http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-populatehtml"
* name = "SDCQuestionnairePopulateHTML"
* title = "Generate HTML for Questionnaire"
* status = #active
* kind = #operation
* date = "2018-08-19T21:48:56+10:00"
* publisher = "HL7 International - FHIR Infrastructure Work Group"
* contact.telecom
  * system = #other
  * value = "http://www.hl7.org/Special/committees/fiwg"
* description = "Generates an HTML page as a [Binary](http://hl7.org/fhir/R4/binary.html) instance  based on a specified [Questionnaire](http://hl7.org/fhir/R4/questionnaire.html), filling in answers to questions where possible based on information provided as part of the operation or already known by the server about the subject of the [Questionnaire](http://hl7.org/fhir/R4/questionnaire.html).  If the operation is not called at the instance level, one and only one of the identifier, questionnaire or questionnaireRef `in` parameters must be provided. If called at the instance level, these parameters will be ignored.  The response will contain a [Binary](http://hl7.org/fhir/R4/binary.html) instance containing an HTML page for filling in and submitting the specified [Questionnaire](http://hl7.org/fhir/R4/questionnaire.html) and/or an [OperationOutcome](http://hl7.org/fhir/R4/operationoutcome.html) resource with errors or warnings.  The generated HTML form instance will be populated with an unanswered set of questions following the group and question structure of the specified [Questionnaire](http://hl7.org/fhir/R4/questionnaire.html).  If  *content* parameters were specified or the *local* parameter was set to true, some of the questions may have answers filled in as well.  In the case of repeating questions or groups, typically only one repetition will be provided unless answer values exist that would support populating multiple repetitions.  Population of the HTML form with appropriate data is dependent on the questions and/or groups in the [Questionnaire](http://hl7.org/fhir/R4/questionnaire.html) having metadata that allows the server to recognize the questions.  Guidance on mechanisms to perform population can be found [here](populate.html).  Regardless of the mechanism used to link the questions in a questionnaire to a \"known\" mappable concept, solutions using this operation should ensure that the details of the question and associated linkage element are sufficiently similar as to safely allow auto-population; i.e. the question text and context must be sufficiently the same, the value set for the question must fall within the value set for the mapped element, the data types must be the same or convertible, etc."
* code = #populatehtml
* comment = "While it is theoretically possible for an HTML form to be completely auto-populated and submitted without human review, the intention of this transaction is merely to reduce redundant data entry.  The HTML form **SHOULD** ensure that a human submitter has an opportunity to review the auto-populated answers to confirm correctness as well as to complete or expand on information provided by the auto-population process.  Complex form designs with conditional logic or tight constraints on cardinalities may be challenging to auto-populate.  A server MAY choose to traverse the questionnaire as if it were a human respondent, answering only those questions that are enabled based on previously answered questions.  However, doing so may result in minimal population.  Alternatively, systems may choose to populate all known answers, independent of dependencies and other constraints.  This may cause questions to be answered that should not be answered.  The generated HTML form is responsible for pruning the final populated questionnaire once human review has taken place.  Invoking this operation with the `content` parameter may involve the disclosure of personally identifiable healthcare information to the system which is performing the population process.  No such disclosures should be made unless the system on which the operation is being invoked is a \"trusted\" system and appropriate agreements are in place to protect the confidentiality of any information shared with that system."
* resource = #Questionnaire
* system = false
* type = true
* instance = true
* inputProfile = Canonical(SDCParametersQuestionnairePopulateIn)
* outputProfile = Canonical(SDCParametersQuestionnairePopulateHtmlOut)
* parameter[+]
  * insert parameter(#identifier, #in, 0, "1", #Identifier, "A logical questionnaire identifier (i.e. `Questionnaire.identifier`\). The server must know the questionnaire or be able to retrieve it from other known repositories.")
* parameter[+]
  * insert parameter(#questionnaire, #in, 0, "1", #Element, "The Questionnaire to populate the response. Can be provided as a canonical for the questionnaire\, a questionnaire reference\, or directly as a questionnaire resource.")
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/operationdefinition-allowed-type"
    * valueUri = "uri"
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/operationdefinition-allowed-type"
    * valueUri = "Reference"
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/operationdefinition-allowed-type"
    * valueUri = "Questionnaire"
* parameter[+]
  * insert parameter(#subject, #in, 0, "1", #Reference, "If the *local* parameter is set to true\, server information about the specified subject will be used to populate the instance.  This may also be used to drive internal processing of the completed form.")
* parameter[+]
  * insert parameterComplex(#context, #in, 0, "*", "Resources containing information to be used to help populate the [QuestionnaireResponse](http://hl7.org/fhir/R4/questionnaireresponse.html\).  These will typically be FHIR resources\, though alternative population mechanisms might allow consumption of binaries containing FHIR documents\, CDA documents or other source materials.  Servers might not support all possible source materials and may ignore materials they do not recognize.  (They MAY provide warnings if ignoring submitted resources.\)")
  * part[+]
    * insert parameter(#name, #in, 1, "1", #string, "The name of the launchContext or root Questionnaire variable the passed content should be used as for population purposes.  The name SHALL correspond to a launchContext or variable delared at the root of the Questionnaire. Allowed names include 'sourceQueries'\, which specifies that the context is the results of executing the queries in the sdc-questionnaire-sourceQueries extension.")
  * part[+]
    * insert parameter(#content, #in, 1, "*", #Element, "The actual resource (or resources\) to use as the value of the launchContext or variable. The content should be provided as a resource if the server performing the population may not have access to the content or the content is not available for RESTful retrieval (e.g. it's a search-response Bundle\).")
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/operationdefinition-allowed-type"
      * valueUri = "Reference"
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/operationdefinition-allowed-type"
      * valueUri = "Resource"
* parameter[+]
  * insert parameter(#local, #in, 0, "1", #boolean, "If specified and set to `true` (and the server is capable\)\, the server should use what resources and other knowledge it has about the referenced subject when pre-populating answers to questions.")
* parameter[+]
  * insert parameter(#form, #out, 1, "1", #Binary, "The generated HTML page that supports capturing the information defined by questionnaire\, possibly partially (or fully\)-populated with a set of answers for the specified Questionnaire")
* parameter[+]
  * insert parameter(#issues, #out, 0, "1", #OperationOutcome, "A list of hints and warnings about problems encountered while populating the questionnaire. These might be show to the user as an advisory note. Note: if the questionnaire cannot be populated at all\, then the operation should fail\, and an OperationOutcome is returned directly with the failure\, rather than using this parameter")


---

// File: input/fsh/operations/Questionnaire-populatelink.fsh

Instance: Questionnaire-populatelink
InstanceOf: OperationDefinition
Title: "Populate Questionnaire Link"
Description: "Generates a link to an HTML page that can be used to complete the Questionnaire, possibly partially populated with data"
Usage: #definition
* url = "http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-populatelink"
* name = "SDCQuestionnairePopulateLink"
* title = "Generate a link to a Questionnaire completion webpage"
* status = #active
* kind = #operation
* date = "2018-08-19T21:48:56+10:00"
* publisher = "HL7 International - FHIR Infrastructure Work Group"
* contact.telecom
  * system = #other
  * value = "http://www.hl7.org/Special/committees/fiwg"
* description = "Generates a link to a web page to be used to answer a specified [Questionnaire](http://hl7.org/fhir/R4/questionnaire.html).  The form at the specified location will be pre-filled with answers to questions where possible based on information provided as part of the operation or already known by the server about the subject of the [Questionnaire](http://hl7.org/fhir/R4/questionnaire.html).  If the operation is not called at the instance level, one and only one of the identifier, questionnaire or questionnaireRef `in` parameters must be provided. If called at the instance level, these parameters will be ignored.  The response will contain a url for the web page to direct the user to.  The page will allow the user to complete/verify the questionnaire answers and to submit the form.  The specified page will be populated with an unanswered set of questions following the group and question structure of the specified [Questionnaire](http://hl7.org/fhir/R4/questionnaire.html).  If  *content* parameters were specified or the *local* parameter was set to true, some of the questions may have answers filled in as well.  In the case of repeating questions or groups, typically only one repetition will be provided unless answer values exist that would support populating multiple repetitions.  Population of the page with appropriate data is dependent on the questions and/or groups in the [Questionnaire](http://hl7.org/fhir/R4/questionnaire.html) having metadata that allows the server to recognize the questions.  Guidance on mechanisms to perform population can be found [here](populate.html).  Regardless of the mechanism used to link the questions in a questionnaire to a \"known\" mappable concept, solutions using this operation should ensure that the details of the question and associated linkage element are sufficiently similar as to safely allow auto-population; i.e. the question text and context must be sufficiently the same, the value set for the question must fall within the value set for the mapped element, the data types must be the same or convertible, etc."
* code = #populatelink
* comment = "While it is theoretically possible for the questionnaire response to be completely auto-populated and submitted without human review, the intention of this transaction is merely to reduce redundant data entry.  The web page **SHOULD** ensure that a human submitter has an opportunity to review the auto-populated answers to confirm correctness as well as to complete or expand on information provided by the auto-population process.  Complex form designs with conditional logic or tight constraints on cardinalities may be challenging to auto-populate.  A server MAY choose to traverse the questionnaire as if it were a human respondent, answering only those questions that are enabled based on previously answered questions.  However, doing so may result in minimal population.  Alternatively, systems may choose to populate all known answers, independent of dependencies and other constraints.  This may cause questions to be answered that should not be answered.  The web form is responsible for pruning the final populated questionnaire once human review has taken place.  Invoking this operation with the `content` parameter may involve the disclosure of personally identifiable healthcare information to the system which is performing the population process.  No such disclosures should be made unless the system on which the operation is being invoked is a \"trusted\" system and appropriate agreements are in place to protect the confidentiality of any information shared with that system."
* resource = #Questionnaire
* system = false
* type = true
* instance = true
* inputProfile = Canonical(SDCParametersQuestionnairePopulateIn)
* outputProfile = Canonical(SDCParametersQuestionnairePopulateLinkOut)
* parameter[+]
  * insert parameter(#identifier, #in, 0, "1", #Identifier, "A logical questionnaire identifier (i.e. `Questionnaire.identifier`\). The server must know the questionnaire or be able to retrieve it from other known repositories.")
* parameter[+]
  * insert parameter(#questionnaire, #in, 0, "1", #Element, "The Questionnaire to populate the response. Can be provided as a canonical for the questionnaire\, a questionnaire reference\, or directly as a questionnaire resource.")
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/operationdefinition-allowed-type"
    * valueUri = "uri"
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/operationdefinition-allowed-type"
    * valueUri = "Reference"
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/operationdefinition-allowed-type"
    * valueUri = "Questionnaire"
* parameter[+]
  * insert parameter(#subject, #in, 0, "1", #Reference, "If the *local* parameter is set to true\, server information about the specified subject will be used to populate the instance.  This may also be used to drive internal processing of the completed form.")
* parameter[+]
  * insert parameterComplex(#context, #in, 0, "*", "Resources containing information to be used to help populate the [QuestionnaireResponse](http://hl7.org/fhir/R4/questionnaireresponse.html\).  These will typically be FHIR resources\, though alternative population mechanisms might allow consumption of binaries containing FHIR documents\, CDA documents or other source materials.  Servers might not support all possible source materials and may ignore materials they do not recognize.  (They MAY provide warnings if ignoring submitted resources.\)")
  * part[+]
    * insert parameter(#name, #in, 1, "1", #string, "The name of the launchContext or root Questionnaire variable the passed content should be used as for population purposes.  The name SHALL correspond to a launchContext or variable declared at the root of the Questionnaire. Allowed names include 'sourceQueries'\, which specifies that the context is the results of executing the queries in the sdc-questionnaire-sourceQueries extension.")
  * part[+]
    * insert parameter(#content, #in, 1, "*", #Element, "The actual resource (or resources\) to use as the value of the launchContext or variable. The content should be provided as a resource if the server performing the population may not have access to the content or the content is not available for RESTful retrieval (e.g. it's a search-response Bundle\).")
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/operationdefinition-allowed-type"
      * valueUri = "Reference"
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/operationdefinition-allowed-type"
      * valueUri = "Resource"
* parameter[+]
  * insert parameter(#local, #in, 0, "1", #boolean, "If specified and set to `true` (and the server is capable\)\, the server should use what resources and other knowledge it has about the referenced subject when pre-populating answers to questions.")
* parameter[+]
  * insert parameter(#link, #out, 1, "1", #uri, "The URL for the web form  that supports capturing the information defined by questionnaire\, possibly partially (or fully\)-populated with a set of answers for the specified Questionnaire")
* parameter[+]
  * insert parameter(#issues, #out, 0, "1", #OperationOutcome, "A list of hints and warnings about problems encountered while populating the questionnaire. These might be show to the user as an advisory note. Note: if the questionnaire cannot be populated at all\, then the operation should fail\, and an OperationOutcome is returned directly with the failure\, rather than using this parameter")




---

// File: input/fsh/operations/Questionnaire-process-response.fsh

Instance: Questionnaire-process-response
InstanceOf: OperationDefinition
Title: "Questionnaire process response"
Description: "Allows submission of a QuestionnaireRespone for 'processing' by the target server"
Usage: #definition
* url = "http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-process-response"
* name = "SDCQuestionnaireProcessResponse"
* title = "Questionnaire Process Response"
* status = #active
* kind = #operation
* date = "2017-03-19"
* publisher = "Health Level Seven"
* contact.telecom
  * system = #other
  * value = "http://hl7.org"
* description = "This operation allows a system to 'receive' a QuestionnaireResponse for a particular Questionnaire.  It is intended to be used by systems that expect to receive completed questionnaires but which do not necessarily want to host a RESTful endpoint where those responses are subsequently queryable.  The receiver may choose to perform validation of the received response or against local business rules.  There no response beyond an HTTP 200 OK if the response is consumed successfully, though an OperationOutcome can optionally be returned identifying warnings.  If there are validation or other issues, the operation will fail with details in an OperationOutcome.  The specific action that occurs on receipt of a form will depend on both the type of form and the submitter.  It could trigger admission to a clinical trial, the beginning of an product investigation, the consideration of a patient's eligibility for coverage, etc.  Alternatively, the data may simply be consumed and aggregated with other information for analysis or other use."
* code = #process-response
* comment = "Some receivers may accept responses that are still 'in progress', but others may reject instances with a status other than 'final' or possibly 'amended'.  If the operation is invoked on a particular Questionnaire, the submitted QuestionnaireResponse must be a response to the specified Questionnaire.  Otherwise, the QuestionnaireResponse will be validated against whatever Questionnaire the QuestionnaireResponse references.  It is an error for a QuestionnaireResponse that does not declare a questionnaire to be invoked directly on the Questionnaire endpoint."
* resource = #Questionnaire
* system = false
* type = true
* instance = true
* inputProfile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/parameters-questionnaire-process-response-in"
* parameter[+]
  * insert parameter(#response, #in, 1, "1", #QuestionnaireResponse, "The questionnaire response to be accepted/processed")
* parameter[+]
  * insert parameter(#warnings, #out, 0, "1",  #OperationOutcome, "If the response is successfully procssed\, an OperationOutcome may still be returned indicating warnings.  For example\, identifying questions that were incomplete\, answers that were defaulted\, etc.  It may also convey 'information' messages about the processing of the questionnaire response.")


---

// File: input/fsh/operations/QuestionnaireResponse-extract.fsh

Instance: QuestionnaireResponse-extract
InstanceOf: OperationDefinition
Title: "Questionnaire response extract to resource(s)"
Description: "Converts a QuestionnaireResponse to a clinical or administrative resource or a Transaction Bundle of them"
Usage: #definition
* url = "http://hl7.org/fhir/uv/sdc/OperationDefinition/QuestionnaireResponse-extract"
* version = "0.0.0"
* name = "SDCQuestionnaireResponseExtract"
* title = "Questionnaire response extract to resource(s)"
* status = #active
* kind = #operation
* date = "2018-08-30"
* publisher = "HL7 International - FHIR Infrastructure"
* description = "The Extract operation takes a completed QuestionnaireResponse and converts it to a FHIR resource or Bundle of resources by using metadata embedded in the Questionnaire the QuestionnaireResponse is based on.  \r\n  The extracted resources might include Observations, MedicationStatements and other standard FHIR resources which can then be shared and manipulated.\r\n  When invoking the $extract operation, care should be taken that the submitted QuestionnaireResponse is itself valid.  If not, the extract operation could fail (with appropriate OperationOutcomes)\r\n  or, more problematic, might succeed but provide incorrect output."
* code = #extract
* comment = "The QuestionnaireResponse must identify a Questionnaire instance containing appropriate metadata to allow extraction.  (Refer to the [Data Extraction](extraction.html) page for more details.)"
* resource = #QuestionnaireResponse
* system = false
* type = true
* instance = true
* inputProfile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/parameters-questionnaireresponse-extract-in"
* parameter[+]
  * insert parameter(#questionnaire-response, #in, 0, "1", #Resource,"The QuestionnaireResponse to extract data from.  Used when the operation is invoked at the 'type' level." )
* parameter[+]
  * insert parameter(#return, #out, 0, "1", #Resource, "The resulting FHIR resource produced after extracting data.  This will either be a single resource or a Transaction Bundle that contains multiple resources.  The operations in the Bundle might be creates\, updates and/or conditional versions of both depending on the nature of the extraction mappings.")
* parameter[+]
  * insert parameter(#issues, #out, 0, "1",  #OperationOutcome, "A list of hints and warnings about problems encountered while extracting the resource(s\) from the QuestionnaireResponse. If there was nothing to extract\, a 'success' OperationOutcome is returned with a warning and/or information messages. In situations where the input is invalid or the operation otherwise fails to complete successfully\, a normal 'erroneous' OperationOutcome would be returned (as happens with all operations\) indicating what the issue was.")



---

// File: input/fsh/profiles/SDCBaseQuestionnaire.fsh

Profile: SDCBaseQuestionnaire
Parent: SDCQuestionnaireCommon
Id: sdc-questionnaire
Title: "SDC Base Questionnaire"
Description: "Sets minimum expectations for questionnaire support for SDC-conformant systems for 'standard' (non-adaptive) Questionnaires, regardless of which SDC capabilities they're making use of."
* ^status = #active
* extension contains
    $designNote named designNote 0..1 and
    PerformerTypeExtension named performerType 0..* MS and
    AssembleExpectation named assemble-expectation 0..1 MS
* extension[designNote] ^comment = "Allows capture of todos, rationale for design decisions, etc.  It can also be used to capture comments about the completion of the form in general. Allows commentary to be captured during the process of answering a questionnaire (if not already supported by the form design) as well as after the form is completed. Comments are not part of the \"data\" of the form. If a form prompts for a comment, this should be captured in an answer, not in this element. Formal assessments of the QuestionnaireResponse would use [[[Observation]]]."
* url 1..1 MS
* version MS
* subjectType MS
  * ^requirements = "A Questionnaire SHOULD specify the subject. However, it is optional to support legacy questionnaires."
* item MS
  * extension contains
      $designNote named designNote 0..1 and
      OptionalDisplayExtension named itemOptionalDisplay 0..1
  * extension[designNote] ^comment = "Allows capture of todos, rationale for design decisions, etc.  It can also be used to capture comments about specific groups or questions within it. Allows commentary to be captured during the process of answering a questionnaire (if not already supported by the form design) as well as after the form is completed. Comments are not part of the \"data\" of the form. If a form prompts for a comment, this should be captured in an answer, not in this element. Formal assessments of the QuestionnaireResponse would use [[[Observation]]]."
  * text ^comment = "...This is optional only to support form assembly situations where the text may be generated from another source.  In an assembled Questionnaire, it should always be present."
  * answerValueSet MS



---

// File: input/fsh/profiles/SDCCodeSystem.fsh

Profile: SDCCodeSystem
Parent: CodeSystem
Id: sdc-codesystem
Title: "SDC Code System"
Description: "Defines how CodeSystem is used to reflect code lists found in data element defintions and form definitions to be used within the ONC's Structured Data Capture standard."
* ^status = #active
* . ^definition = "Sets expectations for SDC-conformant systems around value set support for representing permitted question answers."
* modifierExtension contains RenderingCriticalExtension named rendering-criticalExtension 0..* MS
* url MS
* name 0..1
* status MS
* experimental MS
* date MS
* description 0..1 MS
* caseSensitive 1..1 MS
* compositional 0..0
* versionNeeded 0..0
* content MS
* property MS
  * ^requirements = "...  Property is mustSupport because it is used to express weights as well as elements that may be relevant for rendering or performing logic on codes"
  * code MS
  * uri MS
  * type MS
* concept MS
  * code MS
  * display MS
    * extension contains
        $rendering-style named conceptDisplayLabel-renderingStyle 0..1 and
        $rendering-xhtml named conceptDisplayLabel-xhtml 0..1
  * definition MS
  * designation
    * value.extension contains
        $rendering-style named conceptDisplayLabel-renderingStyle 0..1 and
        $rendering-xhtml named conceptDisplayLabel-xhtml 0..1
  * property MS
    * ^requirements = "...  Property is mustSupport because it is used to express weights as well as elements that may be relevant for rendering or performing logic on codes"
    * code MS
    * value[x] MS
  * concept MS

---

// File: input/fsh/profiles/SDCLibrary.fsh

Profile: SDCLibrary
Parent: $cqllibrary
Id: sdc-library
Title: "SDC Library"
Description: "Defines how a Library is used as a logic computable library within the ONC's Structured Data Capture standard."
* ^status = #active
* . ^definition = "Sets expectations for SDC-conformant systems around use of libraries."
* subject[x] MS
* relatedArtifact MS
  * display 1..1 MS
  * url 1..1 MS
* parameter MS
* dataRequirement MS
* content MS
* content ^slicing.discriminator.type = #value
* content ^slicing.discriminator.path = "contentType"
* content ^slicing.rules = #open
* content contains
    cqlContent 0..1 and
    fhirpathContent 0..1 and
    queryContent 0..1
* insert addContent(cqlContent, "CQL Content", #text/cql, "The CQL content represented as base-64 encoded data.") 
* insert addContent(fhirpathContent, "FHIRPath Content", #text/fhirpath, "The FHIRPath content represented as base-64 encoded data.") 
* insert addContent(queryContent, "Query Content", #application/x-fhir-query, "The query content represented as base-64 encoded data.") 




---

// File: input/fsh/profiles/SDCModularQuestionnaire.fsh

Profile: SDCModularQuestionnaire
Parent: SDCBaseQuestionnaire
Id: sdc-questionnaire-modular
Title: "SDC Modular Questionnaire"
Description: "Indicates expectations for questionnaires that draw their item content (not just codes) from other resources"
* ^status = #active
* . ^definition = "Indicates expectations for questionnaires that draw their item content (not just codes) from other resources"
* extension[assemble-expectation] 1..
* extension[assemble-expectation] only AssembleExpectation
* extension contains AssembleContextExtension named assembleContext 0..* MS
* item MS
  * extension contains SubQuestionnaireExtension named subQuestionnaire 0..* MS

---

// File: input/fsh/profiles/SDCParametersQuestionnaireAssembleOut.fsh

Profile: SDCParametersQuestionnaireAssembleOut
Parent: Parameters
Id: parameters-questionnaire-assemble-out
Title: "Questionnaire assemble output Parameters profile"
Description: "Profile used to validate the parameters that are the output of the 'assemble' questionnaire operation"
* ^status = #active
* parameter ^slicing.discriminator.type = #value
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.rules = #open
* parameter contains
    return 1..1 and
    outcome 0..1
* parameter[return]
  * name = "return" (exactly)
  * value[x] ..0
  * resource only SDCBaseQuestionnaire
  * part ..0
* parameter[outcome]
  * name = "outcome" (exactly)
  * value[x] ..0
  * resource only OperationOutcome
  * part ..0

---

// File: input/fsh/profiles/SDCParametersQuestionnaireNextQuestionnaireIn.fsh

Profile: SDCParametersQuestionnaireNextQuestionnaireIn
Parent: Parameters
Id: parameters-questionnaire-next-question-in
Title: "Next question operation input parameters"
Description: "Profile used to validate the parameters that are the input of the 'next question' adaptive questionnaire operation"
* ^status = #active
* parameter ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "name"
  * ^slicing.rules = #open
* parameter contains in 0..*
* parameter[in]
  * name = "questionnaire-response" (exactly)
  * value[x] ..0
  * resource only SDCQuestionnaireResponseAdapt
  * part ..0

---

// File: input/fsh/profiles/SDCParametersQuestionnaireNextQuestionnaireOut.fsh

Profile: SDCParametersQuestionnaireNextQuestionnaireOut
Parent: Parameters
Id: parameters-questionnaire-next-question-out
Title: "Next question operation output parameters"
Description: "Profile used to validate the parameters that are the output of the 'next question' adaptive questionnaire operation"
* ^status = #active
* parameter ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "name"
  * ^slicing.rules = #open
* parameter contains out 0..*
* parameter[out]
  * name = "return" (exactly)
  * value[x] ..0
  * resource only SDCQuestionnaireResponseAdapt
  * part ..0

---

// File: input/fsh/profiles/SDCParametersQuestionnairePopulateHtmlOut.fsh

Profile: SDCParametersQuestionnairePopulateHtmlOut
Parent: Parameters
Id: parameters-questionnaire-populate-html-out
Title: "Populate-html operation output parameters"
Description: "Profile used to validate the parameters that are the output of the [$populate-link](OperationDefinition-Questionnaire-populatehtml.html) questionnaire operation"
* ^status = #active
* parameter ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "name"
  * ^slicing.rules = #open
* parameter contains form 1..1 and
  issues 0..1
* parameter[form]
  * name = "form" (exactly)
  * value[x] ..0
  * resource 1..1
  * resource only Binary
  * part ..0
* parameter[issues]
  * name = "issues" (exactly)
  * value[x] ..0
  * resource 1..1
  * resource only OperationOutcome
  * part ..0


---

// File: input/fsh/profiles/SDCParametersQuestionnairePopulateIn.fsh

Profile: SDCParametersQuestionnairePopulateIn
Parent: Parameters
Id: parameters-questionnaire-populate-in
Title: "Populate operation input parameters"
Description: "Profile used to validate the parameters that are the input of the [$populate](OperationDefinition-Questionnaire-populate.html), [$populate-html](OperationDefinition-Questionnaire-populatehtml.html), and [$populate-link](OperationDefinition-Questionnaire-populatelink.html) questionnaire operations"
* ^status = #active
* obeys sdc-pop1
* parameter ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "name"
  * ^slicing.rules = #open
* parameter contains identifier 0..1 and
  questionnaire 0..1 and
  subject 0..1 and
  context 0..1 and
  local 0..1
* parameter[identifier]
  * name = "identifier" (exactly)
  * value[x] 1..
  * value[x] only Identifier
  * resource ..0
  * part ..0
* parameter[questionnaire]
  * name = "questionnaire" (exactly)
  * value[x] only uri or Reference(Questionnaire) 
  * resource only Questionnaire
  * part ..0
* parameter[subject]
  * name = "subject" (exactly)
  * value[x] 1..
  * value[x] only Reference
  * resource ..0
  * part ..0
* parameter[context]
  * name = "context" (exactly)
  * value[x] ..0
  * resource ..0
  * part 2..
  * part
    * ^slicing.discriminator.type = #value
    * ^slicing.discriminator.path = "name"
    * ^slicing.rules = #open
  * part contains name 1..1 and
    content 0..*
  * part[name]
    * name = "name" (exactly)
    * value[x] 1..
    * value[x] only string
    * resource ..0
    * part ..0
  * part[content]
    * name = "content" (exactly)
    * value[x] only Reference
    * part ..0
* parameter[local]
  * name = "local" (exactly)
  * value[x] 1..
  * value[x] only boolean
  * resource ..0
  * part ..0

Invariant: sdc-pop1
Description: "Context names must be unique."
Severity: #error
Expression: "parameter.where(name='context').count() = parameter.where(name='context').part.where(name='name').value.distinct().count()"
XPath: "count(f:parameter[f:name/@value='context']) = count(distinct-values(f:parameter[f:name/@value='context']/f:part[f:name/@value='name']/f:valueString/@value))"

---

// File: input/fsh/profiles/SDCParametersQuestionnairePopulateLinkOut.fsh

Profile: SDCParametersQuestionnairePopulateLinkOut
Parent: Parameters
Id: parameters-questionnaire-populate-link-out
Title: "Populate-link operation output parameters"
Description: "Profile used to validate the parameters that are the output of the [$populate-link](OperationDefinition-Questionnaire-populatelink.html) questionnaire operation"
* ^status = #active
* parameter ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "name"
  * ^slicing.rules = #open
* parameter contains link 1..1 and
  issues 0..1
* parameter[link]
  * name = "link" (exactly)
  * value[x] 1..
  * value[x] only uri
  * resource ..0
  * part ..0
* parameter[issues]
  * name = "issues" (exactly)
  * value[x] ..0
  * resource 1..1
  * resource only OperationOutcome
  * part ..0


---

// File: input/fsh/profiles/SDCParametersQuestionnairePopulateOut.fsh

Profile: SDCParametersQuestionnairePopulateOut
Parent: Parameters
Id: parameters-questionnaire-populate-out
Title: "Populate operation output parameters"
Description: "Profile used to validate the parameters that are the output of the [$populate](OperationDefinition-Questionnaire-populate.html) questionnaire operation"
* ^status = #active
* parameter ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "name"
  * ^slicing.rules = #open
* parameter contains response 1..1 and
  issues 0..1
* parameter[response]
  * name = "response" (exactly)
  * value[x] ..0
  * resource 1..1
  * resource only SDCQuestionnaireResponse
  * part ..0
* parameter[issues]
  * name = "issues" (exactly)
  * value[x] ..0
  * resource 1..1
  * resource only OperationOutcome
  * part ..0


---

// File: input/fsh/profiles/SDCParametersQuestionnaireProcessResponseIn.fsh

Profile: SDCParametersQuestionnaireProcessResponseIn
Parent: Parameters
Id: parameters-questionnaire-process-response-in
Title: "Questionnaire process response operation input parameters"
Description: "Profile used to validate the parameters that are the input of the 'process response' questionnaire operation"
* ^status = #active
* parameter ^slicing.discriminator.type = #value
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.rules = #open
* parameter contains in 0..*
* parameter[in]
  * name = "in" (exactly)
  * value[x] ..0
  * resource only SDCQuestionnaireResponse
  * part ..0

---

// File: input/fsh/profiles/SDCParametersQuestionnaireResponseExtractIn.fsh

Profile: SDCParametersQuestionnaireResponseExtractIn
Parent: Parameters
Id: parameters-questionnaireresponse-extract-in
Title: "Questionnaire extract operation input parameters"
Description: "Profile used to validate the parameters that are the input of the 'extract' questionnaire response operation"
* ^status = #active
* parameter ^slicing.discriminator.type = #value
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.rules = #open
* parameter contains
    in 0..* and
    questionnaire 0..1
* parameter[in]
  * name = "in" (exactly)
  * value[x] ..0
  * resource only SDCQuestionnaireExtractObservation or SDCQuestionnaireExtractDefinition or SDCQuestionnaireExtractStructureMap
  * part ..0
* parameter[questionnaire]
  * name = "questionnaire" (exactly)
  * value[x] ..0
  * resource only Questionnaire
  * part ..0
  * ^short = "Questionnaire reference for extraction"


---

// File: input/fsh/profiles/SDCQuestionnaireAdapt.fsh

Profile: SDCQuestionnaireAdapt
Parent: SDCQuestionnaireCommon
Id: sdc-questionnaire-adapt
Title: "Adaptive Questionnaire"
Description: "Defines the metadata that should be present when embedding a adaptive Questionnaire as part of a QuestionnaireResponse"
* ^status = #active
* . ^short = "Adaptive Questionnaire"
* . ^definition = "Defines the metadata that should be present when embedding a adaptive Questionnaire as part of a QuestionnaireResponse."
* obeys sdc-adapt-1
* extension contains QuestionnaireAdaptiveExtension named questionnaireAdaptive 0..* MS
  * ^comment = "This extension isn't essential because the fact the Questionnaire is adaptive can be inferred from the style, however it may still be useful to assert explicitly, and perhaps to know what servers are useable if amending the form is necessary"
* url ..0
* url ^requirements = "We prohibit URL because this Questionnaire is a one-off for a specific response and therefore does not have its own canonical URL.  The URL of the base questionnaire is captured using Questionnaire.derivedFrom"
* version ..0
* version ^requirements = "We prohibit version because this Questionnaire is a one-off for a specific response and therefore does not have its own canonical URL or version.  The version of the base questionnaire is captured using Questionnaire.derivedFrom"
* title ..1
* derivedFrom 1..1 MS
  * ^short = "Base Questionnaire this adaptive instance is derived from"
  * ^comment = "For this profile, there must be exactly one Questionnaire which is the base Questionnaire the 'adaptive' QuestionnaireResponse completion was executed against."
* item MS
  * text 1..1

Invariant: sdc-adapt-1
Description: "An adaptive questionnaire must be a contained resource within a QuestionnaireResponse."
Severity: #error
Expression: "%rootResource.ofType(QuestionnaireResponse).questionnaire='#' + $this.id or %rootResource.contained.ofType(QuestionnaireResponse).exists(questionnaire='#' + $this.id)"

---

// File: input/fsh/profiles/SDCQuestionnaireAdaptSearch.fsh

Profile: SDCQuestionnaireAdaptSearch
Parent: SDCQuestionnaireSearch
Id: sdc-questionnaire-adapt-srch
Title: "Adaptive Questionnaire - search"
Description: "Describes the elements that should be exposed in a response to a search for adaptive questionnaires."
* ^status = #active
* . ^short = "Adaptive Questionnaire - search"
* . ^definition = "Describes the elements that should be exposed in a response to a search for adaptive questionnaires."
* extension contains
    QuestionnaireAdaptiveExtension named questionnaireAdaptive 1..* and
    EndpointExtension named submissionEndpoint 0..* MS
* obeys sdc-adaptive-1
* item 0..0

Invariant: sdc-adaptive-1
Description: "If multiple types are present, all must have a value of type 'url'. If no URL is specified, the location to hit the $next-question operation is undefined but typically assumed to be the server hosting the Questionnaire."
Severity: #error
Expression: "extension('http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-questionnaireAdaptive').count()>1 implies extension('http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-questionnaireAdaptive').all(value = 'url')"
XPath: "count(f:extension[@url='http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-questionnaireAdaptive'])<=1 or not(f:extension[@url='http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-questionnaireAdaptive' and f:value/@value!='url'])"

---

// File: input/fsh/profiles/SDCQuestionnaireBehave.fsh

Profile: SDCQuestionnaireBehave
Parent: SDCQuestionnaireCommon
Id: sdc-questionnaire-behave
Title: "Advanced Behavior Questionnaire"
Description: "Defines additional capabilities for controlling data entry and calculating values within the questionnaire."
* ^status = #active
* . ^short = "Advanced Behavior Questionnaire"
  * ^definition = "Defines additional capabilities for controlling data entry and calculating values within the questionnaire."
* extension contains
    EntryMode named entryMode 0..* MS and
    EndpointExtension named submissionEndpoint 0..* MS and
    $questionnaire-signatureRequired named signatureRequired 0..* and
    $targetConstraint named constraint 0..* and
    $cqf-library named library 0..* and
    LaunchContextExtension named launchContext 0..* and
    Variable named variable 0..*
* extension[library] ^definition = "A reference to a library containing cql used in this Questionnaire."
* extension[variable] ^requirements = "Allows variables to be calculated higher in the context of a QuestionnaireResponse for use with enableWhen-expression."
* modifierExtension contains RenderingCriticalExtension named rendering-criticalExtension 0..* MS
* item obeys sdc-behave-2 and sdc-behave-1 and sdc-behave-3
//To do: Fix the hard-coding of the indexes on the constraints to apply the best-practice extension.
  * ^constraint[19].extension[$best-practice].valueBoolean = true
  * extension contains
      $questionnaire-disabledDisplay named disabledDisplay 0..1 and
      AnswerExpressionExtension named answerExpression 0..1 MS and
      $questionnaire-usageMode named usageMode 0..1 MS and
      $questionnaire-signatureRequired named itemSignatureRequired 0..* and
      $questionnaire-minOccurs named itemMinOccurs 0..1 MS and
      $questionnaire-maxOccurs named itemMaxOccurs 0..1 MS and
      $minLength named minLength 0..1 MS and
      $regex named regex 0..1 MS and
      $minValue named minValue 0..1 MS and
      $maxValue named maxValue 0..1 MS and
      MinQuantityExtension named minQuantity 0..1 and
      MaxQuantityExtension named maxQuantity 0..1 and
      $maxDecimalPlaces named maxDecimalPlaces 0..1 MS and
      $mimeType named mimeType 0..* MS and
      $maxSize named maxSize 0..1 and
      AnswerOptionsToggleExpressionExtension named answerOptionsToggleExpression 0..* MS and
      $questionnaire-unitOption named unitOption 0..* MS and
      $questionnaire-unitValueSet named unitValueSet 0..1 MS and
      UnitOpen named unitOpen 0..1 and
      UnitSupplementalSystem named unitSupplementalSystem 0..1 and
      $questionnaire-referenceResource named allowedResource 0..* MS and
      $questionnaire-referenceProfile named allowedProfile 0..* and
      CandidateExpressionExtension named candidateExpression 0..1 and
      LookupQuestionnaireExtension named lookupQuestionnaire 0..1 and
      $targetConstraint named itemConstraint 0..* and
      InitialExpressionExtension named initialExpression 0..1 and
      CalculatedExpressionExtension named calculatedExpression 0..1 and
      EnableWhenExpressionExtension named enableWhenExpression 0..1 MS and 
      Keyboard named keyboardType 0..1
  * extension[itemMinOccurs].value[x] ^mustSupport = false
    * extension contains
        $cqf-expression named itemMinOccursExpression 0..1 MS
  * extension[itemMaxOccurs].value[x] ^mustSupport = false
    * extension contains
        $cqf-expression named itemMaxOccursExpression 0..1 MS
  * extension[minValue].value[x] ^mustSupport = false
    * extension contains $cqf-calculatedValue named minValueCalculated 0..1
  * extension[maxValue].value[x] ^mustSupport = false
    * extension contains $cqf-calculatedValue named maxValueCalculated 0..1
  * extension[minQuantity] ^mustSupport = false
    * value[x] ^mustSupport = false
      * extension contains $cqf-calculatedValue named minQuantityCalculated 0..1
  * extension[maxQuantity] ^mustSupport = false
    * value[x] ^mustSupport = false
      * extension contains $cqf-calculatedValue named maxQuantityCalculated 0..1
  * enableWhen
    * question MS
    * operator MS
    * answer[x] MS
  * enableBehavior MS
  * required.value.extension contains $cqf-expression named requiredExpression 0..1 MS
  * repeats.value.extension contains $cqf-expression named repeatsExpression 0..1 MS
  * readOnly.value.extension contains $cqf-expression named readOnlyExpression 0..1 MS
  * answerValueSet.value.extension contains $cqf-expression named answerValueSetExpression 0..1 MS
  * answerOption
    * extension contains
        $questionnaire-optionExclusive named optionExclusive 0..1 MS and
        $itemWeight named itemWeight 0..1 MS
    * extension[itemWeight] ^comment = "NOTE: questionnaire.item.answerOption can have a type of Coding, potentially allowing two different scopes for this extension.  In the case where answerOption is available, the weight SHALL be declared on the answerOption rather than on the answerOption.valueCoding."
    * value[x] 1..1 MS

Invariant: sdc-behave-1
Description: "An item cannot have both initial.value and initialExpression"
Severity: #error
Expression: "initial.empty() or extension('http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression').empty()"
XPath: "not(exists(f:initial) and exists(f:extension[@url='http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression']))"

Invariant: sdc-behave-2
Description: "An item cannot have both enableWhen and enableWhenExpression"
Severity: #error
Expression: "enableWhen.empty() or extension('http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression').empty()"
XPath: "not(exists(f:enableWhen) and exists(f:extension[@url='http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression']))"

Invariant: sdc-behave-3
Severity: #warning
Description: "For items of type 'quantity', it is best practice to include either a 'unitOption' or 'unitValueSet' extension to provide a list of valid units."
Expression: "(type = 'quantity' implies (extension('http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption').exists() or extension('http://hl7.org/fhir/StructureDefinition/questionnaire-unitValueSet').exists())) and (repeat(item).where(type = 'quantity')).all(extension('http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption').exists() or extension('http://hl7.org/fhir/StructureDefinition/questionnaire-unitValueSet').exists())"
XPath: "(f:type/@value = 'quantity' implies (count(f:extension[@url='http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption']) > 0 or count(f:extension[@url='http://hl7.org/fhir/StructureDefinition/questionnaire-unitValueSet']) > 0)) and not(.//f:item[f:type/@value = 'quantity' and not(f:extension[@url='http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption'] or f:extension[@url='http://hl7.org/fhir/StructureDefinition/questionnaire-unitValueSet'])])"

---

// File: input/fsh/profiles/SDCQuestionnaireCommon.fsh

Profile: SDCQuestionnaireCommon
Parent: Questionnaire
Id: sdc-questionnairecommon
Title: "SDC Questionnaire Common Elements"
Description: "Defines common elements for all SDC Questionnaires (regular or adaptive)."
* ^status = #active
* ^abstract = true
* obeys cnl-0 and sdc-2 and sdc-3
//To do: Fix the hard-coding of the indexes on the constraints to apply the best-practice extension.
* . ^constraint[9].extension[$best-practice].valueBoolean = true
* extension contains
//    $preferredTerminologyServer named terminologyServer 0..* and
    $questionnaire-versionAlgorithm named versionAlgorithm 0..1 MS and
    $questionnaire-copyrightLabel named copyrightLabel 0..1
* url
  * obeys cnl-1
* status MS
* title MS
* item
  * obeys sdc-1 and que-1a and que-1b and que-1c and que-14
  * extension contains 
    $questionnaire-hidden named hidden 0..1 MS and
//    $preferredTerminologyServer named terminologyServer 0..* and
    $questionnaire-answerConstraint named answerConstraint 0..1
  * linkId MS
    * obeys que-15
  * prefix MS
  * type MS
    * ^comment = "Time is handled using \"string\".  File is handled using Attachment.  (Content can be sent as a contained binary)."
  * required MS
  * repeats MS
    * ^definition = "An indication, if true, that a QuestionnaireResponse for this item may include multiple answers associated with a single instance of this item (for question-type items) or multiple repetitions of the item (for group-type items)"
  * readOnly MS
  * answerValueSet only canonical
    * ^type.targetProfile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-valueset"
  * answerOption MS
    * value[x] MS
  * initial MS
    * value[x] MS
  * item MS

Invariant: sdc-1
Description: "An item cannot have an answerExpression if answerOption or answerValueSet is already present."
Severity: #error
Expression: "extension('http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-answerExpression').empty().not() implies (answerOption.empty() and answerValueSet.empty())"
XPath: "f:extension[@url='http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-answerExpression'] and (not(f:answerOption) and not(f:answerValueSet))"

Invariant: sdc-2
Description: "If version is present, versionAlgorithm must be present."
Severity: #error
Expression: "version.exists() implies extension.where(url='http://hl7.org/fhir/5.0/StructureDefinition/extension-Questionnaire.versionAlgorithm[x]').exists()"
XPath: "not(exists(f:version)) or exists(f:extension[@url='http://hl7.org/fhir/5.0/StructureDefinition/extension-Questionnaire.versionAlgorithm[x]'])"

Invariant: sdc-3
Description: "Semver is the preferred version algorithm - package machinery doesn't work well with artifacts using alternate versioning schemes"
Severity: #warning
Expression: "extension.where(url='http://hl7.org/fhir/5.0/StructureDefinition/extension-Questionnaire.versionAlgorithm[x]').all(value.ofType(Coding).where(system='http://hl7.org/fhir/version-algorithm' and code='semver').exists())"
XPath: "not(f:extension[@url='http://hl7.org/fhir/5.0/StructureDefinition/extension-Questionnaire.versionAlgorithm[x]' and not(exists(f:valueCoding[f:system/@value='http://hl7.org/fhir/version-algorithm' and f:code/@value='semver'])))"

Invariant: que-1a
Description: "Group items must have nested items when Questionanire is complete"
Severity: #error
Expression: "(type='group' and %resource.status='complete') implies item.empty().not()"
XPath: "not(f:type/@value='group' and ancestor::f:Questionnaire/f:status/@value='complete') or exists(f:item)"

Invariant: cnl-0
Description: "Name should be usable as an identifier for the module by machine processing applications such as code generation"
Severity: #warning
Expression: "name.exists() implies name.matches('^[A-Z]([A-Za-z0-9_]){1,254}$')"
XPath: "not(f:name) or matches(f:name/@value, '^[A-Z]([A-Za-z0-9_]){1,254}$')"

Invariant: cnl-1
Description: "Warning	Questionnaire.url	URL should not contain | or # - these characters make processing canonical references problematic"
Severity: #warning
Expression: "exists() implies matches('^[^|# ]+$')"
XPath: "not(@value) or matches(@value, '^[^|# ]+$')"

Invariant: que-1b
Description: "Groups should have items"
Severity: #warning
Expression: "type='group' implies item.empty().not()"
XPath: "not(f:type='group') or exists(f:item)"

Invariant: que-1c
Description: "Display items cannot have child items"
Severity: #error
Expression: "type='display' implies item.empty()"
XPath: "not(f:type/@value='display') or not(exists(f:item))"

Invariant: que-14
Description: "Can only have answerConstraint if answerOption, answerValueSet, or answerExpression are present. (This is a warning because other extensions may serve the same purpose)"
Severity: #warning
Expression: "extension('http://hl7.org/fhir/5.0/StructureDefinition/extension-Questionnaire.item.answerConstraint').exists() implies answerOption.exists() or answerValueSet.exists() or extension('http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-answerExpression').exists()"
XPath: "not(exists(f:extension[@url='http://hl7.org/fhir/5.0/StructureDefinition/extension-Questionnaire.item.answerConstraint'])) or exists(f:answerOption) or exists(f:answerValueSet) or exists(f:extension[@url='http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-answerExpression'])"

Invariant: que-15
Description: "Link ids must be 255 characters or less"
Severity: #error
Expression: "$this.length() <= 255"
XPath: "string-length(@value) <= 255"


---

// File: input/fsh/profiles/SDCQuestionnaireExtractDefinition.fsh

Profile: SDCQuestionnaireExtractDefinition
Parent: SDCQuestionnaireCommon
Id: sdc-questionnaire-extr-defn
Title: "Extractable Questionnaire - Definition"
Description: "Defines elements that allow conversion of a QuestionnaireResponse to a FHIR resource or Bundle of FHIR resources using the Definition-based extraction mechanism"
* ^status = #active
* . ^short = "Extractable Questionnaire - Definition"
* . ^definition = "Defines elements that allow conversion of a QuestionnaireResponse to a FHIR resource or Bundle of FHIR resources using the Definition-based extraction mechanism."
* extension contains
    DefinitionExtractExtension named definitionExtract 0..1 MS and
    DefinitionExtractValueExtension named definitionExtractValue 0..* MS and
    ExtractAllocateIdExtension named extractAllocateId 0..* MS and
    $cqf-library named library 0..*
* extension[library] ^definition = "A reference to a library containing cql used in this Questionnaire."
* extension[library] ^mustSupport = false
* item
  * extension contains
      DefinitionExtractExtension named definitionExtract 0..* MS and
      DefinitionExtractValueExtension named definitionExtractValue 0..* MS and
      ExtractAllocateIdExtension named extractAllocateId 0..* MS and
      $questionnaire-unit named unit 0..1 MS
  * definition 0..1 MS

Invariant: sdc-defn-1
Description: "An item cannot have both initial.value and initialExpression"
Severity: #error
Expression: "initial.empty() or extension('http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression').empty()"
XPath: "not(exists(f:initial) and exists(f:extension[@url='http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression']))"

---

// File: input/fsh/profiles/SDCQuestionnaireExtractObservation.fsh

Profile: SDCQuestionnaireExtractObservation
Parent: SDCQuestionnaireCommon
Id: sdc-questionnaire-extr-obsn
Title: "Extractable Questionnaire - Observation"
Description: "Defines elements that allow conversion of a QuestionnaireResponse to an Observation resource or Bundle of Observation resources using the Observation-based extraction mechanism"
* ^status = #active
* . ^short = "Extractable Questionnaire - Observation"
* . ^definition = "Defines elements that allow conversion of a QuestionnaireResponse to an Observation resource or Bundle of Observation resources using the Observation-based extraction mechanism."
* extension contains ObservationExtractExtension named observationExtract 0..1 MS
* item obeys sdc-obsn-1
  * extension contains
      $questionnaire-unit named unit 0..1 MS and
      ObservationExtractExtension named observationExtract 0..1 MS and
      ObservationExtractCategory named observationExtractCategory 0..* and
      IsSubjectExtension named isSubject 0..1
  * extension[isSubject] ^requirements = "Allows the extraction process to leverage the fact that the subject for this group and descendants is distinct"
  * code MS
    * extension contains ObservationExtractExtension named observationExtract 0..1 MS

Invariant: sdc-obsn-1
Description: "Display items cannot be extracted to Observations."
Severity: #error
Expression: "type!='display' or extension('http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationExtract').empty()"
XPath: "not(f:type/@value= 'display'  and exists(f:extension[@url='http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationExtract']))"

---

// File: input/fsh/profiles/SDCQuestionnaireExtractStructureMap.fsh

Profile: SDCQuestionnaireExtractStructureMap
Parent: SDCQuestionnaireCommon
Id: sdc-questionnaire-extr-smap
Title: "Extractable Questionnaire - StructureMap"
Description: "Defines elements that allow conversion of a QuestionnaireResponse to a FHIR resource or Bundle of FHIR resources using the StructureMap-based extraction mechanism"
* ^status = #active
* . ^short = "Extractable Questionnaire - StructureMap"
* . ^definition = "Defines elements that allow conversion of a QuestionnaireResponse to a FHIR resource or Bundle of FHIR resources using the StructureMap-based extraction mechanism."
* extension contains TargetStructureMapExtension named targetStructureMap 0..* MS
* item
  * extension contains
      $questionnaire-unit named unit 0..1 MS and
      $questionnaire-hidden named itemHidden 0..1


---

// File: input/fsh/profiles/SDCQuestionnaireExtractTemplate.fsh

Profile: SDCQuestionnaireExtractTemplate
Parent: SDCQuestionnaireCommon
Id: sdc-questionnaire-extr-template
Title: "Extractable Questionnaire - Template"
Description: "Defines elements that allow conversion of a QuestionnaireResponse to a FHIR resource or Bundle of FHIR resources using the Template-based extraction mechanism"
* obeys tev-1
* ^extension[$standard-status].valueCode = #draft
* ^extension[$fmm].valueInteger = 0
* ^status = #draft
* . ^short = "Extractable Questionnaire - Template"
* . ^definition = "Defines elements that allow conversion of a QuestionnaireResponse to a FHIR resource or Bundle of FHIR resources using the Template-based extraction mechanism."
* extension contains
    TemplateExtractExtension named templateExtract 0..* MS and
    TemplateExtractBundleExtension named templateExtractBundle 0..* MS and
    TemplateExtractContextExtension named extractContext 0..* MS and
    ExtractAllocateIdExtension named extractAllocateId 0..* MS
* contained 1..* MS
* item
  * extension contains
      TemplateExtractExtension named templateExtract 0..* MS and
      TemplateExtractContextExtension named extractContext 0..* MS and
      ExtractAllocateIdExtension named extractAllocateId 0..* MS


---

// File: input/fsh/profiles/SDCQuestionnairePopulateExpression.fsh

Profile: SDCQuestionnairePopulateExpression
Parent: SDCQuestionnaireCommon
Id: sdc-questionnaire-pop-exp
Title: "Populatable Questionnaire - Expression"
Description: "Defines elements that support auto-population and pre-population of questionnaires using the Expression-based population mechanism"
* ^status = #active
* . ^short = "Populatable Questionnaire - Expression"
* . ^definition = "Defines elements that support auto-population and pre-population of questionnaires using the Expression-based population mechanism."
* extension contains
    $cqf-library named library 0..* and
    LaunchContextExtension named launchContext 0..* MS and
    ItemPopulationContextExtension named itemPopulationContext 0..1 MS and
    Variable named variable 0..* MS
* extension[library] ^definition = "A reference to a library containing cql used in this Questionnaire."
* extension[library] ^mustSupport = false
* item obeys sdc-pop-1
  * extension contains
      $questionnaire-unit named unit 0..1 MS and
      ItemPopulationContextExtension named itemPopulationContext 0..1 MS and
      Variable named itemVariable 0..* and
      InitialExpressionExtension named initialExpression 0..1 and
      CandidateExpressionExtension named candidateExpression 0..1 and
      ContextExpressionExtension named contextExpression 0..* and
      $questionnaire-hidden named itemHidden 0..1 and
      ChoiceColumnExtension named choiceColumn 0..* and
      IsSubjectExtension named isSubject 0..1
  * extension[isSubject] ^requirements = "Allows the population process to leverage the fact that the subject for this group and descendants is distinct"

Invariant: sdc-pop-1
Description: "An item cannot have both initial.value and initialExpression"
Severity: #error
Expression: "initial.empty() or extension('http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression').empty()"
XPath: "not(exists(f:initial) and exists(f:extension[@url='http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression']))"

---

// File: input/fsh/profiles/SDCQuestionnairePopulateObservation.fsh

Profile: SDCQuestionnairePopulateObservation
Parent: SDCQuestionnaireCommon
Id: sdc-questionnaire-pop-obsn
Title: "Populatable Questionnaire - Observation"
Description: "Defines elements that support auto-population and pre-population of questionnaires using the Observation-based population mechanism"
* ^status = #active
* . ^short = "Populatable Questionnaire - Observation"
* . ^definition = "Defines elements that support auto-population and pre-population of questionnaires using the Observation-based population mechanism."
* extension contains
    ObservationLinkPeriodExtension named observationLinkPeriod 0..1
* obeys sdc-pop-2 // New invariant on the Questionnaire root level
* item.
  * extension contains
      ObservationLinkPeriodExtension named observationLinkPeriod 0..1 MS and
      $questionnaire-unit named unit 0..1 MS and
      IsSubjectExtension named isSubject 0..1
  * extension[isSubject] ^requirements = "Allows the population process to leverage the fact that the subject for this group and descendants is distinct"
  * code MS

Invariant: sdc-pop-2
Description: "The observationLinkPeriod extension must appear at least once in the Questionnaire"
Severity: #error
Expression: "descendants().extension('http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod').exists() or extension('http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod').exists()"

---

// File: input/fsh/profiles/SDCQuestionnairePopulateStructureMap.fsh

Profile: SDCQuestionnairePopulateStructureMap
Parent: SDCQuestionnaireCommon
Id: sdc-questionnaire-pop-smap
Title: "Populatable Questionnaire - StructureMap"
Description: "Defines elements that support auto-population and pre-population of questionnaires  using the StructureMap-based population mechanism"
* ^status = #active
* . ^short = "Populatable Questionnaire - StructureMap"
* . ^definition = "Defines elements that support auto-population and pre-population of questionnaires  using the StructureMap-based population mechanism."
* extension contains
    LaunchContextExtension named launchContext 0..* and
    SourceQueriesExtension named sourceQueries 0..1 and
    SourceStructureMapExtension named sourceStructureMap 0..*
* item.
  * extension contains
      $questionnaire-unit named unit 0..1 and
      $questionnaire-hidden named itemHidden 0..1 and
      IsSubjectExtension named isSubject 0..1
  * extension[isSubject] ^requirements = "Allows the population process to leverage the fact that the subject for this group and descendants is distinct"

---

// File: input/fsh/profiles/SDCQuestionnaireRender.fsh

Profile: SDCQuestionnaireRender
Parent: SDCQuestionnaireCommon
Id: sdc-questionnaire-render
Title: "Advanced Rendering Questionnaire"
Description: "Defines additional capabilities for controlling the rendering of the questionnaire."
* ^status = #active
* . ^short = "Advanced Rendering Questionnaire"
* . ^definition = "Defines additional capabilities for controlling the rendering of the questionnaire."
* modifierExtension contains RenderingCriticalExtension named rendering-criticalExtension 0..* MS
* title
  * extension contains
      $rendering-style named title-renderingStyle 0..1 and
      $rendering-xhtml named title-xhtml 0..1
* item
  * extension contains
      ItemMedia named itemMedia 0..1 and
      OptionalDisplayExtension named itemOptionalDisplay 0..1 and
      ShortTextExtension named itemShortText 0..1 and
      SDCOpenLabel named openLabel 0..1 and
      $questionnaire-itemControl named itemControl 0..1 MS and
      $questionnaire-choiceOrientation named choiceOrientation 0..1 and
      $questionnaire-displayCategory named displayCategory 0..1 MS and
      $questionnaire-supportLink named supportLink 0..* and
      ChoiceColumnExtension named choiceColumn 0..* and
      WidthExtension named width 0..1 and
      $questionnaire-sliderStepValue named sliderStepValue 0..1 and
      $entryFormat named entryFormat 0..1 MS and
      CollapsibleExtension named collapsible 0..1 and
      ColumnCountExtension named columnCount 0..1 and 
      Keyboard named keyboardType 0..1
  * prefix
    * extension contains
        $rendering-style named itemLabel-renderingStyle 0..1 and
        $rendering-xhtml named itemLabel-xhtml 0..1
  * text
    * extension contains
        $rendering-style named groupText-renderingStyle 0..1 and
        $rendering-xhtml named groupText-xhtml 0..1 and
        $cqf-expression named expression 0..1 MS
    * extension[expression] ^comment = "Note: The variation cannot change the meaning of the question. The extension can be used even if text is present; and if the extension is supported, the evaluation will replace the text provided (with 'smarter' text). "
  * answerOption
    * extension contains ItemAnswerMedia named itemAnswerMedia 0..1
    * extension contains QOptionPrefix named optionPrefix 0..1
    * valueString only string
    * valueString.extension contains
        $rendering-style named optionString-renderingStyle 0..1 and
        $rendering-xhtml named optionString-xhtml 0..1
    * valueCoding only Coding
      * display.extension contains
          $rendering-style named optionDisplay-renderingStyle 0..1 and
          $rendering-xhtml named optionDisplay-xhtml 0..1

---

// File: input/fsh/profiles/SDCQuestionnaireResponse.fsh

Profile: SDCQuestionnaireResponse
Parent: SDCQuestionnaireResponseCommon
Id: sdc-questionnaireresponse
Title: "SDC Standard Questionnaire Response"
Description: "Defines how the questionnaire response resource is used to reflect form data within SDC for 'standard' (i.e. non-adaptive) forms."
* ^status = #active
* . ^short = "Standard Questionnaire Response"
* questionnaire only canonical
  * ^comment = "For SDC, this SHALL be the version-specific URL of the form as hosted on the Form Manager."
  * ^type.targetProfile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
  * extension contains $display named questionnaireDisplay 0..1 MS
  * extension[questionnaireDisplay] ^comment = "This SHALL be the title of the Questionnaire at the time the QuestionnaireResponse was originally authored."


---

// File: input/fsh/profiles/SDCQuestionnaireResponseAdapt.fsh

Profile: SDCQuestionnaireResponseAdapt
Parent: SDCQuestionnaireResponseCommon
Id: sdc-questionnaireresponse-adapt
Title: "Adaptive Questionnaire Response"
Description: "Defines how the questionnaire response resource is used to reflect form data within the ONC's Structured Data Capture standard."
* ^status = #active
* . ^short = "Adaptive Questionnaire Response"
* contained 1..* MS
  * ^comment = "The referenced Questionnaire SHALL be sent as a contained resource."
* questionnaire only canonical
  * ^type.targetProfile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-adapt"
  * ^type.aggregation = #contained


---

// File: input/fsh/profiles/SDCQuestionnaireResponseCommon.fsh

Profile: SDCQuestionnaireResponseCommon
Parent: QuestionnaireResponse
Id: sdc-questionnaireresponsecommon
Title: "SDC Questionnaire Response Common Elements"
Description: "Defines common elements for all SDC Questionnaire Responses (regular or adaptive)."
* ^status = #active
* ^abstract = true
* obeys sdcqr-1 and sdcqr-2 and sdcqr-3
//To do: Fix the hard-coding of the indexes on the constraints (sdcqr-1 and sdcqr-2) to apply the best-practice extension.
* . ^constraint[5].extension[$best-practice].valueBoolean = true
* . ^constraint[6].extension[$best-practice].valueBoolean = true
* . ^short = "Generic Questionnaire Response"
* . ^definition = "Sets expectations for supported capabilities for questionnaire responses for SDC-conformant systems."
* . ^alias[0] = "Form Data"
* extension contains
    $adheresTo named adheresTo 0..* and
    $triggeredBy named triggeredBy 0..1 and
    $questionnaireresponse-signature named signature 0..* and
    $questionnaireresponse-completionMode named completionMode 0..1 and
    $questionnaireresponse-source named source 0..1
* extension[adheresTo].value[x] only Canonical(ActivityDefinition or PlanDefinition ) or Reference(ActivityDefinition or PlanDefinition ) or uri
* extension[triggeredBy].value[x] only Canonical(ActivityDefinition or PlanDefinition ) or Reference(ActivityDefinition or PlanDefinition ) or uri
* extension[source].value[x] only Reference(Device or Organization )
* identifier MS
* questionnaire 1..1 MS
* status MS
* subject MS
* subject ^comment = "...  If subject is omitted - because the QuestionnaireResponse is not associated with a specific subject, ensure that QuestionnaireRsponse.identifier is present or the QuestionnaireResponse is referenced somewhere (e.g. Task.output, Composition.section.entry, etc.) to allow tracking and retrieval of the QuestionnaireResponse"
* authored 1..1 MS
  * ^definition = "Identifies when this version of the answer set was created.  Changes whenever the answers are updated."
* author MS
* item MS
  * obeys qrs-2
  * extension contains
      ItemMedia named itemMedia 0..1 and
      $questionnaireresponse-signature named ItemSignature 0..*
  * linkId 1..1 MS
  * text MS
  * answer 0..* MS
    * extension contains
        ItemAnswerMedia named itemAnswerMedia 0..1 and
        $itemWeight named itemWeight 0..1
    * extension[itemWeight] ^comment = "Inclusion of weights in QRs can increase performance when calculating based on weights."          
    * value[x] 0..1 MS
    * value[x] only boolean or date or dateTime or time or decimal or integer or string or Coding or uri or Quantity or Attachment or Reference
    * item 0..* MS
      * ^contentReference = "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse#QuestionnaireResponse.item"
  * item MS
    * ^contentReference = "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse#QuestionnaireResponse.item"


Invariant: sdcqr-1
Description: "Subject SHOULD be present (searching is difficult without subject).  Almost all QuestionnaireResponses should be with respect to some sort of subject."
Severity: #warning
Expression: "subject.exists()"
XPath: "exists(f:subject)"

Invariant: sdcqr-2
Description: "When repeats=true for a group, it'll be represented with multiple items with the same linkId in the QuestionnaireResponse.  For a question, it'll be represented by a single item with that linkId with multiple answers."
Severity: #error
Expression: "(QuestionnaireResponse|repeat(answer|item)).select(item.where(answer.value.exists()).linkId.isDistinct()).allTrue()"
XPath: "not(exists(for $item in descendant::f:item[f:answer] return $item/preceding-sibling::f:item[f:linkId/@value=$item/f:linkId/@value]))"

Invariant: sdcqr-3
Description: "Can either have source or source extension, but not both"
Severity: #error
Expression: "source.count() + extension.where(url='http://hl7.org/fhir/5.0/StructureDefinition/extension-QuestionnaireResponse.source').count() <=1"
XPath: "count(f:source | f:extension[@url='http://hl7.org/fhir/5.0/StructureDefinition/extension-QuestionnaireResponse.source']) <= 1"

Invariant: qrs-2
Description: "Repeated answers are combined in the answers array of a single item"
Severity: #error
Expression: "repeat(answer|item).select(item.where(answer.value.exists()).linkId.isDistinct()).allTrue()"
XPath: "true()"


---

// File: input/fsh/profiles/SDCQuestionnaireSearch.fsh

Profile: SDCQuestionnaireSearch
Parent: SDCQuestionnaireCommon
Id: sdc-questionnaire-search
Title: "Search Questionnaire"
Description: "Describes the elements that should be exposed in a response to a search for questionnaires."
* ^status = #active
* . ^definition = "Describes the elements that should be exposed in a response to a search for questionnaires."
* extension contains AssembledFromExtension named assembledFrom 0..*
* identifier MS
* experimental MS
* title 1..1
* date 1..1 MS
  * ^definition = "Identifies when this version of the form was created.  Changes whenever the form is updated."
* publisher MS
* description MS
* useContext only SDCUsageContext
* useContext MS
* jurisdiction 0..1
  * ^comment = "Relevant for systems that support forms from multiple countries/provinces/states."
* purpose MS
* copyright MS
* approvalDate ^comment = "Relevant for systems that have strict curation requirements that govern when a form/instrument is permitted for use."
* lastReviewDate ^comment = "Relevant for systems that have strict curation requirements that govern when a form/instrument is permitted for use."
* effectivePeriod ^comment = "Relevant for systems that have strict curation requirements that govern when a form/instrument is permitted for use."
* code 0..1 MS
* item
  * definition ^comment = "Systems that support searching by the 'definition' parameter SHALL support returning item.definition."
  * code ^comment = "Systems that support searching by the 'code' parameter SHALL support returning item.code."

---

// File: input/fsh/profiles/SDCQuestionnaireServiceRequest.fsh

Profile: SDCQuestionnaireServiceRequest
Parent: ServiceRequest
Id: sdc-servicerequest
Title: "Questionnaire Service Request"
Description: "Defines how ServiceRequest is used to ask for a Questionnaire to be completed"
* ^status = #active
* extension contains SDCServiceRequestQuestionnaire named questionnaire 1..*
* status MS
* intent MS
* doNotPerform = false (exactly)
  * ^comment = "If the element is present, the value must be 'false'"
* code 1.. MS
* code = $temp#complete-questionnaire
* subject 1..1 MS
  * ^short = "Patient or other Questionnaire is for"
* occurrence[x] MS
  * ^short = "When (and possibly how often) the Questionnaire needs to be completed"
* requester 1..1 MS
* performer 0..1 MS
  * ^short = "Who should complete questionnaire"
* reasonCode MS

---

// File: input/fsh/profiles/SDCTaskQuestionnaire.fsh

Profile: SDCTaskQuestionnaire
Parent: Task
Id: sdc-task
Title: "Task Questionnaire"
Description: "Defines how Task is used to ask for a Questionnaire to be completed"
* ^status = #active
* obeys sdc-t1
* . ^mustSupport = false
* status 1..1 MS
* status only code
* intent MS
* code 1..1 MS
* code only CodeableConcept
* code from TaskCode (required)
* focus only Reference(SDCQuestionnaireServiceRequest)
* focus MS
  * ^condition = "sdc-t1"
* for 0..1 MS
* for ^short = "Patient or other Questionnaire is for"
* authoredOn 1..1 MS
* requester 1..1 MS
* owner 0..1 MS
  * ^short = "Who should complete questionnaire"
* reasonCode MS
* input MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* input contains
    questionnaire 0..1 MS and
    responseEndpoint 0..* MS
* input[questionnaire]
  * ^definition = "Indicates the questionnaire to be completed."
  * ^condition = "sdc-t1"
  * type 1..1 MS
  * type only CodeableConcept
  * type = $temp#questionnaire
  * value[x] 1..1 MS
  * value[x] only canonical
  * value[x] ^short = "url"
* input[responseEndpoint] 
  * ^definition = "Indicates an endpoint the form should be posted to on completion."
  * type 1..1 MS
  * type only CodeableConcept
  * type = $temp#response-endpoint
  * value[x] 1..1 MS
  * value[x] only url
  * value[x] ^short = "url"
* output MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* output contains response 0..1 MS
* output[response] 
  * ^definition = "Indicates the questionnaire response resulting from the request."
  * type 1..1 MS
  * type only CodeableConcept
  * type = $temp#questionnaire-response
  * value[x] 1..1 MS
  * value[x] only Reference(QuestionnaireResponse)
  * value[x] ^short = "url"

Invariant: sdc-t1
Description: "Either code is 'fulfill', focus is ServiceRequest and no 'questionnaire' input; or code is 'complete-questionnaire', focus is omitted and 'questionnaire' input is present"
Severity: #error
Expression: "(code.coding.exists(code='fulfill' and system='http://hl7.org/fhir/CodeSystem/task-code') and \r\n                            (focus.resolve() is ServiceRequest) and \r\n                            input.exists(type.coding.exists(system='http://hl7.org/fhir/uv/sdc/CodeSystem/temp' and code='questionnaire')).not())\r\n                        or (code.coding.exists(code='complete-questionnaire' and system='http://hl7.org/fhir/uv/sdc/CodeSystem/temp') and \r\n                            focus.exists().not() and \r\n                            input.exists(type.coding.exists(system='http://hl7.org/fhir/uv/sdc/CodeSystem/temp' and code='questionnaire')))"

---

// File: input/fsh/profiles/SDCUsageContext.fsh

Profile: SDCUsageContext
Parent: UsageContext
Id: sdc-usagecontext
Title: "SDC Usage Context"
Description: "Constraints on the codes and values of UsageContext to help ensure consistent usage in SDC Questionnaires"
* ^status = #active
* ^date = "2019-03-15T20:02:49+10:00"
* . MS
* obeys sdc-uc-1
* code MS
* value[x] MS
* valueCodeableConcept MS
  * ^min = 0
  * coding MS
    * system MS
    * code MS
* valueRange MS
  * ^min = 0
  * low MS
  * high MS

Invariant: sdc-uc-1
Description: "If code is gender, focus, user, venue or species, value must be CodeableConcept.  If code is age, value must be Range.  If code is workflow, task or program, value must be CodeableConcept or Reference"
Severity: #error
Expression: "code.system!='http://terminology.hl7.org/CodeSystem/usage-context-type' or (((code.code='gender' or code.code='focus' or code.code='user' or code.code='venue' or code.code='species') implies value.exists() and value is CodeableConcept) and (code.code='age' implies value.exists() and value is Range) and ((code.code='workflow' or code.code='task' or code.code='program') implies (value.exists() and (value is CodeableConcept or value is Reference))))"
XPath: "not(f:code/:system='http://terminology.hl7.org/CodeSystem/usage-context-type') or ((not(f:code/f:code=('gender', 'focus', 'user', 'venue', 'species')) or exists(f:valueCodeableConcept) and (not(f:code/f:code='age') or exists(f:valueRange) and (not(f:code/f:code=('workflow', 'task', 'program')) or exists(f:valueCodeableConcept)or exists(f:valueReference))"

---

// File: input/fsh/profiles/SDCValueSet.fsh

Profile: SDCValueSet
Parent: ValueSet
Id: sdc-valueset
Title: "SDC Value Set"
Description: "Defines how ValueSet is used to reflect code lists found in data element defintions and form definitions to be used within the ONC's Structured Data Capture standard."
* ^status = #active
* ^experimental = false
* . ^definition = "Sets expectations for SDC-conformant systems around value set support for representing permitted question answers."
* modifierExtension contains RenderingCriticalExtension named rendering-criticalExtension 0..* MS
* url MS
* status MS
* experimental MS
* date MS
* description 0..1 MS
* useContext 0..*
* immutable 1..1 MS
* compose MS
  * lockedDate MS
  * inactive MS
* compose.include MS
  * system MS
  * version MS
  * concept MS
  * concept.extension contains
      $valueset-label named conceptLabel 0..1 MS and
      $valueset-conceptOrder named conceptConceptOrder 0..1 MS
  * concept.extension[conceptLabel].valueString.extension contains
      $rendering-style named code-renderingStyle 0..1 and
      $rendering-xhtml named code-xhtml 0..1
  * concept.extension[conceptConceptOrder] ^comment = "The presence of a sort order implies that sort order is important."
  * concept.code MS
  * concept.display MS
  * concept.display.extension contains
      $rendering-style named codeDisplay-renderingStyle 0..1 and
      $rendering-xhtml named codeDisplay-xhtml 0..1
  * concept.designation.extension contains
      $rendering-style named designation-renderingStyle 0..1 and
      $rendering-xhtml named designation-xhtml 0..1
  * filter MS
    * property MS
    * op MS
    * value MS
  * valueSet MS
* compose.exclude MS
* expansion MS
  * extension contains 
    $valueset-expansionSource named expansionSource 0..1 and
    $valueset-expansionProperty named expansionProperty 0..* MS
  * extension[expansionProperty] ^requirements = "... Allows support for itemWeight and other key properties"
  * identifier MS
  * timestamp MS
* expansion.contains MS
  * extension contains
      $valueset-label named expansionLabel 0..1 MS and
      $valueset-conceptOrder named conceptConceptOrder 0..1 MS and
      $valueset-containsProperty named containsProperty 0..* MS
  * extension[expansionLabel].valueString.extension contains
      $rendering-style named expansion-renderingStyle 0..1 and
      $rendering-xhtml named expansion-xhtml 0..1
  * extension[containsProperty] ^requirements = "... Allows support for itemWeight and other key properties"
  * extension[conceptConceptOrder] ^comment = "The presence of a sort order implies that sort order is important."
  * system MS
  * abstract MS
  * version MS
  * code MS
  * display MS
  * display.extension contains
      $rendering-style named expansionDisplay-renderingStyle 0..1 and
      $rendering-xhtml named expansionDisplay-xhtml 0..1
  * designation.extension contains
      $rendering-style named expansionDesignation-renderingStyle 0..1 and
      $rendering-xhtml named expansionDesignation-xhtml 0..1
* expansion.contains.contains MS

---

// File: input/fsh/searchparams/questionnaire-assemble-expectation.fsh

Instance: questionnaire-assemble-expectation
InstanceOf: SearchParameter
Title: "Questionnaire Is Modular Search Parameter"
Usage: #definition
* url = "http://hl7.org/fhir/uv/sdc/SearchParameter/questionnaire-assemble-expectation"
* name = "SDCQuestionnaireIsModular"
* status = #active
* description = "Allows searching by 'assemble-expectation' extension on a Questionnaire"
* code = #assemble-expectation
* base = #Questionnaire
* type = #token
* expression = "Questionnaire.extension('http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assemble-expectation').value"
* xpath = "f:Questionnaire/f:extension[@url='http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assemble-expectation']/f:value"
* xpathUsage = #normal

---

// File: input/fsh/searchparams/questionnaire-assembledFrom.fsh

Instance: questionnaire-assembledFrom
InstanceOf: SearchParameter
Title: "Questionnaire Assembled From Search Parameter"
Usage: #definition
* url = "http://hl7.org/fhir/uv/sdc/SearchParameter/questionnaire-assembledFrom"
* name = "SDCQuestionnaireAssembledFrom"
* status = #active
* date = "2016-03-31T08:01:25+11:00"
* publisher = "Health Level Seven"
* description = "Allows searching by 'assembledFrom' extension on a Questionnaire"
* code = #assembled-from
* base = #Questionnaire
* type = #token
* expression = "Questionnaire.extension('http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom').value"
* xpath = "f:Questionnaire/f:extension[@url='http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom']/f:value"
* xpathUsage = #normal

---

// File: input/fsh/searchparams/questionnaire-definition.fsh

Instance: questionnaire-definition
InstanceOf: SearchParameter
Title: "Questionnaire Item definition"
Description: "Allows searching by 'definition' element within a Questionnaire's items"
Usage: #definition
* meta.lastUpdated = "2016-05-30T00:48:02.872-06:00"
* url = "http://hl7.org/fhir/uv/sdc/SearchParameter/questionnaire-definition"
* name = "SDCQuestionnaireItemDefinition"
* status = #active
* date = "2016-03-31T08:01:25+11:00"
* publisher = "Health Level Seven"
* description = "Allows searching by 'definition' element within a Questionnaire's items"
* code = #definition
* base = #Questionnaire
* type = #token
* expression = "Questionnaire.item.definition"
* xpath = "f:Questionnaire/f:item/f:definition"
* xpathUsage = #normal

---

// File: input/fsh/shared.fsh

// Usage: Instance: Questionnaire-assemble
RuleSet: parameter(name, use, min, max, type, documentation) 
* name = {name}
* use = {use}
* min = {min}
* max = {max}
* type = {type}
* documentation = {documentation}

RuleSet: parameterComplex(name, use, min, max, documentation) 
* name = {name}
* use = {use}
* min = {min}
* max = {max}
* documentation = {documentation}


// Usage: Instance: demographics
RuleSet: item(linkId, definition, text, type) 
* linkId = "{linkId}"
* definition = "{definition}"
* text = "{text}"
* type = {type}

// Usage: Instance: questionnaire-sdc-profile-example-cap
RuleSet: itemType(linkId, text, type) 
* item[+]
  * linkId = {linkId}
  * text = {text}
  * type = {type}
  * required = true


// Usage: Instance: demographics
RuleSet: hidden()
* extension[$questionnaire-hidden].valueBoolean = true

// Usage: Instance: demographics
RuleSet: initialExpression(expression)
* extension[InitialExpressionExtension]
  * valueExpression
    * language = #text/fhirpath
    * expression = "{expression}"

// Usage: Instance: demographics
RuleSet: itemPopulationContext(name, language, expression)
* extension[ItemPopulationContextExtension]
  * valueExpression
    * name = "{name}"
    * language = {language}
    * expression = "{expression}"

// Usage: Instance: demographics
RuleSet: definitionExtract(resourceTypeOrProfile)
* extension[DefinitionExtractExtension]
  * extension[definition].valueCanonical = "{resourceTypeOrProfile}"

// Usage: Instance: example-of-Task
RuleSet: taskInputCanonical(type, valueCanonical)
* input[+]
  * type = {type}
  * valueCanonical = "{valueCanonical}" 

// Usage: Instance: example-of-Task
RuleSet: taskInputUrl(type,  valueUrl)
* input[+]
  * type = {type}
  * valueUrl = "{valueUrl}"

// Usage: Instance: example-of-Task
RuleSet: taskOutput(type, valueReference)
* output
  * type = {type}
  * valueReference = Reference({valueReference}) 

// Define a function to generate a choice item
RuleSet: itemChoice(linkId, text, answerValueSet) 
* item[+]
  * linkId = {linkId}
  * text = {text}
  * type = #choice
  * required = true
  * repeats = false
  * answerValueSet = {answerValueSet}


RuleSet: itemQuantityText(linkId, text) 
* item[+]
  * linkId = {linkId}
  * text = {text}
  * type = #quantity
  * repeats = false
  * readOnly = true

// Usage: Instance: adaptive-questionnaireresponse-sdc-example-phq9
// Define a function to generate a ruleset for coding item
RuleSet: itemCoding(linkId, text, answerValueCoding) 
* item.item[+]
  * linkId = {linkId}
  * text = {text}
  * answer.valueCoding = {answerValueCoding}

// Usage: Instance: adaptive-questionnaireresponse-sdc-example-phq9
// Define a function to generate a ruleset for quantity item
RuleSet: itemQuantity(linkId, text, quantityValue, quantityUnit) 
* item.item[+]
  * linkId = {linkId}
  * text = {text}
  * answer.valueQuantity.value = {quantityValue}
  * answer.valueQuantity.unit = {quantityUnit} 

// Usage: Instance: adaptive-questionnaireresponse-sdc-example-phq9
// Define a function to generate a ruleset for a single item
RuleSet: VSConcept(code, display)
* compose.include.concept[+]
  * code = {code}
  * display = {display}

RuleSet: VSContains(system, code, display, weight)
* contains[+]
  * system = {system}
  * code = {code}
  * display = {display}
  * extension[$valueset-containsProperty]
    * extension[+]
      * url = "code"
      * valueCode = #itemWeight
    * extension[+]
      * url = "value[x]"
      * valueDecimal = {weight}

//Usage: Instance: anc-quick-check
// Define a function to generate a ruleset for item's answerOption
RuleSet: answerOption(url, valueAttachment, valueString) 
* item.answerOption[+]
  * extension.url = {url}
  * extension.valueAttachment.url = {valueAttachment}
  * valueString = {valueString}

// Usage: Instance: map-populate-out
// Define a function to generate a ruleset for sub item's answer (string)
RuleSet: subItemAnswerString(linkId, valueString) 
* item[+]
  * linkId = {linkId}
  * answer.valueString = {valueString}

// Usage: Instance: map-populate-out
// Define a function to generate a ruleset for sub item's answer (date)
RuleSet: subItemAnswerDate(linkId, valueDate) 
* item[+]
  * linkId = {linkId}
  * answer.valueDate = {valueDate}

// Usage: Instance: map-populate-out
// Define a function to generate a ruleset for sub item's answer (integer)
RuleSet: subItemAnswerInteger(linkId, valueInteger) 
* item[+]
  * linkId = {linkId}
  * answer.valueInteger = {valueInteger}

// Usage: Instance: map-population-example
RuleSet: entryResponse(status, etag, lastModified) 
* response
  * status = {status}
  * etag = {etag}
  * lastModified = {lastModified}

// Usage: Instance: map-population-example
RuleSet: meta(versionId, lastUpdated) 
* meta
  * versionId = {versionId}
  * lastUpdated = {lastUpdated}

// Usage: Instance: map-population-example
RuleSet: name(family, given) 
* name
  * family = {family}
  * given = {given}

// Usage: Instance: map-population-example
RuleSet: telecom(system, value, rank) 
* telecom[+]
  * system = {system}
  * value = {value}
  * rank = {rank}

// Usage: SDC Library Profile
RuleSet: addContent(id, name, contentType, definition)
* content[{id}] ^short = {name}
* content[{id}] ^definition = {definition}
* content[{id}]
  * contentType 1..1 MS
  * contentType only code
  * contentType = {contentType}
  * data 1..1

// CapabiltyStatement RS
RuleSet: SupportedProfile(profile, conf)
* supportedProfile[+] = Canonical({profile})
  * extension[$conf].valueCode = {conf}

RuleSet: Interaction(conf, code, doc)
* interaction[+]
  * extension[$conf].valueCode = {conf}
  * code  = {code}
  * documentation = {doc}

RuleSet: Operation(conf, name, def)
* operation[+]
  * extension[$conf].valueCode = {conf}
  * name  = {name}
  * definition = {def}

RuleSet: SearchInclude(include, conf)
* searchInclude[+] = {include}
  * extension[$conf].valueCode = {conf}

RuleSet: SearchParam(conf, name, type, def)
* searchParam[+]
  * extension[$conf].valueCode = {conf}
  * name = {name}
  * definition = "{def}"
  * type = {type}

// Usage: Instance: questionnaire-population-transform
RuleSet: input(name, type, mode) 
* input[+]
  * name = {name}
  * type = {type}
  * mode = {mode}

// Usage: Instance: questionnaire-population-transform
RuleSet: source(context, element, variable) 
* source
  * context = {context}
  * element = {element}
  * variable = {variable}

// Usage: Instance: questionnaire-population-transform
RuleSet: target(context, contextType, element, transform, parameterString) 
* target
  * context = {context}
  * contextType = {contextType}
  * element = {element}
  * transform = {transform}
  * parameter.valueString = {parameterString}

---

// File: input/fsh/valuesets/AHRQMedicationQ1.fsh

ValueSet: AHRQMedicationQ1
Id: sdc-profile-example
Title: "SDC-ValueSet AHRQ_Medication_Q1"
Description: "The answer list for question 1 on the AHRQ 'Medication or Other Substance' form"
* ^meta.profile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-valueset"
* ^status = #active
* ^experimental = true
* ^date = "2014"
* ^immutable = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* $loinc#LA20271-5 "Medications"
* $loinc#LA20335-8 "Biological products"
* $loinc#LA20336-6 "Nutritional products"
* $loinc#LA20337-4 "Expressed human breast milk"
* $loinc#LA20338-2 "Medical gases (e.g., oxygen, nitrogen, nitrous oxide)"
* $loinc#LA20339-0 "Contrast media"
* $loinc#LA20340-8 "Radiopharmaceuticals"
* $loinc#LA20341-6 "Patient food (not suspected in drug-food interactions"
* $loinc#LA20342-4 "Drug-drug, drug-food, or adverse drug reaction as a result of a prescription and/or administration of a drug and/or food frior to admission"
* $loinc#LA20343-2 "Other substance: PLEASE SPECIFY"

---

// File: input/fsh/valuesets/AustralianStates.fsh

ValueSet: AustralianStates
Id: sdc-question-library-states
Title: "Australian States - example value set"
Description: "An example value set (using fake codes) used by a modular Questionnaire"
* ^meta.profile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-valueset"
* ^status = #active
* ^experimental = true
* ^immutable = false
* $Australian-States#ACT "Australian Capital Territory"
* $Australian-States#NSW "New South Wales"
* $Australian-States#NT "Northern Territory"
* $Australian-States#Qld "Queensland"
* $Australian-States#SA "South Australia"
* $Australian-States#Vic "Victoria"
* $Australian-States#Tas "Tasmania"
* $Australian-States#WA "Western Australia"

---

// File: input/fsh/valuesets/DEXMappingLanguageMimeTypes.fsh

ValueSet: DEXMappingLanguageMimeTypes
Id: dex-mimetype
Title: "DEX mapping language mime types"
Description: "The list of mime types that identify mapping languages supported by DEX."
* ^status = #active
* ^experimental = true
* ^publisher = "HL7 International - FHIR Infrastructure"
* ^contact.telecom.system = #other
* ^contact.telecom.value = "http:\\\\healthit.gov"
* ^copyright = "Mime types have no IP restrictions"
* urn:ietf:bcp:13#application/sparql-results+xml "SPARQL"
* urn:ietf:bcp:13#application/sql "SQL"
* urn:ietf:bcp:13#application/xquery "X-Query"

---

// File: input/fsh/valuesets/ObservationExtractRelationship.fsh

ValueSet: ObservationExtractRelationship
Id: observation-extract-relationship
Title: "Observation Extract Relationship Value Set"
Description: "Defines the set of codes used to specify the relationship type for extracted Observations."
* ^status = #active
* ^experimental = false
* include codes from system ObservationExtractRelationship


---

// File: input/fsh/valuesets/QuestionnaireAnswerConstraint.fsh

ValueSet: QuestionnaireAnswerConstraint
Id: questionnaire-answer-constraint
Title: "Questionnaire answer constraints value set"
Description: "Codes that describe the types of constraints possible on a question item that has a list of permitted answers [Note: This is a clone of QuestionnaireAnswerConstraint valueset from R5 (adopting R5 capability)]"
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^identifier.system = "urn:ietf:rfc:3986"
* ^identifier.value = "urn:oid:2.16.840.1.113883.4.642.3.0"
* ^version = "4.6.0"
* ^status = #active
* ^experimental = false
* include codes from system QuestionnaireAnswerConstraint

---

// File: input/fsh/valuesets/QuestionnaireAssembleExpectation.fsh

ValueSet: QuestionnaireAssembleExpectation
Id: assemble-expectation
Title: "Questionnaire Assemble Expectation"
Description: "Defines codes describing how a Questionnaire relates to the 'assemble' process"
* ^status = #active
* ^experimental = false
* include codes from system AssembleExpectation

---

// File: input/fsh/valuesets/QuestionnaireContextSpecies.fsh

ValueSet: QuestionnaireContextSpecies
Id: species
Title: "Questionnaire Context Species"
Description: "Species for defining the context of Questionnaires"
* ^status = #active
* ^experimental = true
* ^publisher = "HL7 International - FHIR Infrastructure"
* ^contact.telecom.system = #other
* ^contact.telecom.value = "http:\\\\healthit.gov"
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement."
* include codes from system SNOMED_CT where concept is-a #410607006

---

// File: input/fsh/valuesets/QuestionnaireEntryMode.fsh

ValueSet: QuestionnaireEntryMode
Id: entryMode
Title: "Questionnaire Entry Mode"
Description: "Defines mechanisms of capturing data in a QuestionnaireResponse"
* ^status = #active
* ^experimental = false
* include codes from system EntryMode

---

// File: input/fsh/valuesets/QuestionnaireItemCollapsible.fsh

ValueSet: QuestionnaireItemCollapsible
Id: collapsible
Title: "Questionnaire Item Collapsible"
Description: "Defines mechanisms of displaying child items in collapsible form"
* ^status = #active
* ^experimental = false
* include codes from system CollapsibleCodes

---

// File: input/fsh/valuesets/QuestionnaireItemKeyboardType.fsh

ValueSet: QuestionnaireItemKeyboardType
Id: keyboardType
Title: "Questionnaire Item Keyboard Type"
Description: "For string or text items, indicates the 'keyboard type' that should be used by the user interface to guide entry."
* ^status = #active
* ^experimental = false
* include codes from system KeyboardTypeCodes

---

// File: input/fsh/valuesets/QuestionnaireLaunchContext.fsh

ValueSet: QuestionnaireLaunchContext
Id: launchContext
Title: "Questionnaire Launch Context"
Description: "The standard context for Questionnaire at launch time"
* ^status = #active
* ^experimental = false
* include codes from system LaunchContext

---

// File: input/fsh/valuesets/QuestionnairePerformerType.fsh

ValueSet: QuestionnairePerformerType
Id: performerType
Title: "Questionnaire Performer Type"
Description: "List of resource types that can record answers to a Questionnaire."
* ^status = #active
* ^experimental = false
* ResourceType#Patient "Patient"
* ResourceType#Practitioner "Practitioner"
* ResourceType#RelatedPerson "RelatedPerson"

---

// File: input/fsh/valuesets/TaskCode.fsh

ValueSet: TaskCode
Id: task-code
Title: "SDC Task Code"
Description: "The codes allowed for an SDC Task seeking completion of a Questionnaire"
* ^status = #active
* ^experimental = false
* TemporaryCodes#complete-questionnaire
* TaskCode#fulfill

---

// File: input/fsh/codesystems/TemporaryCodes.fsh

CodeSystem: TemporaryCodes
Id: temp
Title: "Temporary SDC Codes"
Description: "Defines codes defined within the SDC implementation guide that are expected to migrate elsewhere in future releases"
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* ^content = #complete
* #complete-questionnaire "Complete Questionnaire" "Code indicating a request to complete the a questionnaire - e.g. by Task or ServiceRequest"
* #questionnaire "Questionnaire" "A canonical reference (possibly version-specific) to the Questionnaire to be completed"
* #questionnaire-response "Questionnaire Response" "A reference to the QuestionnaireResponse resulting from the requested action"
* #response-endpoint "Response Endpoint" "Identifies the base URL for FHIR servers to which the Questionnaire resulting from the Task should be POSTed"

---

// File: input/fsh/examples/adaptive-questionnaireresponse-sdc-example-phq9.fsh

Instance: adaptive-questionnaireresponse-sdc-example-phq9
InstanceOf: SDCQuestionnaireResponseAdapt
Title: "SDC-Response to Adaptive PHQ9"
Description: "Example response to the Adaptive SDC-PHQ9 questionnaire"
Usage: #example
* contained[+] = contained-adaptive-questionnaire-example-phq9
* contained[+] = VSPHQ9
* identifier.value = "adaptive-questionnaireresponse-example-phq9"
* questionnaire = "#contained-adaptive-questionnaire-example-phq9"
* status = #completed
* subject = Reference(http://hl7.org/fhir/Patient/proband)
* authored = "2019-08-21T20:36:57.544Z"
* author = Reference(http://hl7.org/fhir/Patient/proband)
* item.linkId = "H1/T1"
* item.text = "Over the last two weeks, how often have you been bothered by any of the following problems?"
* insert itemCoding("H1/T1/Q1", "Little interest or pleasure in doing things?", $CSPHQ9#Not-at-all "Not at all")
* insert itemCoding("H1/T1/Q2", "Feeling down\, depressed\, or hopeless?", $CSPHQ9#Not-at-all "Not at all")
* insert itemCoding("H1/T1/Q3", "Trouble falling or staying asleep\, or sleeping too much?", $CSPHQ9#Not-at-all "Not at all")
* insert itemCoding("H1/T1/Q4", "Feeling tired or having little energy?", $CSPHQ9#Several-days "Several days")
* insert itemCoding("H1/T1/Q5", "Poor appetite or overeating?", $CSPHQ9#"More than half the days" "More than half the days")
* insert itemCoding("H1/T1/Q6", "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?", $CSPHQ9#Several-days "Several days")
* insert itemCoding("H1/T1/Q7", "Trouble concentrating on things\, such as reading the newspaper or watching television?", $CSPHQ9#"Nearly every day" "Nearly every day")
* insert itemCoding("H1/T1/Q8", "Moving or speaking so slowly that other people could gave noticed? Or so fidgety or restless that you have been moving a lot more than usual?", $CSPHQ9#"More than half the days" "More than half the days")
* insert itemCoding("H1/T1/Q9", "Thoughts that you would be better off dead\, or thoughts of hurting yourself in some way?", $CSPHQ9#Several-days "Several days")
* insert itemQuantity("H1/TS", "Patient health questionnaire 9 item total score", 13, "score")


Instance: contained-adaptive-questionnaire-example-phq9
InstanceOf: Questionnaire
Usage: #inline
* extension[QuestionnaireAdaptiveExtension].valueBoolean = true
* extension[$questionnaire-versionAlgorithm].valueCoding = $version-algorithm#semver
* version = "0.0.1"
* name = "SDCPHQ9"
* title = "Patient Health Questionnaire - 9 Item"
* derivedFrom = "http://hl7.org/fhir/uv/sdc/Questionnaire/questionnaire-sdc-profile-example-PHQ9"
  * extension[+].url = "http://hl7.org/fhir/StructureDefinition/questionnaire-derivationType"
  * extension[=].valueCoding = $derivationType#compliesWith
* status = #active
* experimental = true
* subjectType = #Patient
* item
  * linkId = "H1/T1"
  * text = "Over the last two weeks, how often have you been bothered by any of the following problems?"
  * type = #group
  * insert itemChoice("H1/T1/Q1", "Little interest or pleasure in doing things?", "#VSPHQ9")
  * insert itemChoice("H1/T1/Q2", "Feeling down\, depressed\, or hopeless?", "#VSPHQ9")
  * insert itemChoice("H1/T1/Q3", "Trouble falling or staying asleep\, or sleeping too much?", "#VSPHQ9")
  * insert itemChoice("H1/T1/Q4", "Feeling tired or having little energy?", "#VSPHQ9")
  * insert itemChoice("H1/T1/Q5", "Poor appetite or overeating?", "#VSPHQ9")
  * insert itemChoice("H1/T1/Q6", "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?", "#VSPHQ9")
  * insert itemChoice("H1/T1/Q7", "Trouble concentrating on things\, such as reading the newspaper or watching television?", "#VSPHQ9")
  * insert itemChoice("H1/T1/Q8", "Moving or speaking so slowly that other people could gave noticed? Or so fidgety or restless that you have been moving a lot more than usual?", "#VSPHQ9")
  * insert itemChoice("H1/T1/Q9", "Thoughts that you would be better off dead\, or thoughts of hurting yourself in some way?", "#VSPHQ9")
  * insert itemQuantityText("H1/TS", "Patient health questionnaire 9 item total score")
    * extension[$questionnaire-hidden].valueBoolean = true
    * code = $loinc#44261-6 "Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]"


Instance: VSPHQ9
InstanceOf: SDCValueSet
Usage: #inline
* url = "http://hl7.org/fhir/uv/sdc/ValueSet/VSPHQ9"
* name = "VSPHQ9"
* status = #active
* description = "The answer list for questions addressing the frequency in which patient reports experiencing behaviors that are assessed in the PHQ-9 Questionnaire."
* immutable = true
* compose.include.system = "http://example.org/CodeSystem/CSPHQ9"
* insert VSConcept(#Not-at-all, "Not at all")
* insert VSConcept(#Several-days, "Several days")
* insert VSConcept(#"More than half the days", "More than half the days")
* insert VSConcept(#"Nearly every day", "Nearly every day")
* expansion
  * extension[expansionProperty]
    * extension[code].valueCode = #itemWeight
    * extension[uri].valueUri = "http://hl7.org/fhir/concept-properties#itemWeight"
  * timestamp = "2024-12-06T22:52:00-07:00"
  * insert VSContains("http://example.org/CodeSystem/CSPHQ9", #not-at-all, "Not at all", 0.0)
  * insert VSContains("http://example.org/CodeSystem/CSPHQ9", #Several-days, "Several days", 1.0)
  * insert VSContains("http://example.org/CodeSystem/CSPHQ9", #"More than half the days", "More than half the days", 2.0)
  * insert VSContains("http://example.org/CodeSystem/CSPHQ9", #"Nearly every day", "Nearly every day", 4.0)


---

// File: input/fsh/examples/anc-quick-check.fsh

Instance: anc-quick-check
InstanceOf: SDCQuestionnaireRender
Title: "Questionnaire - ANC Quick Check"
Description: "A sample questionnaire using itemMedia and itemAnswerMedia extensions."
Usage: #example
* extension[$questionnaire-versionAlgorithm].valueCoding = $version-algorithm#semver
* url = "http://hl7.org/fhir/uv/sdc/Questionnaire/anc-quick-check"
* name = "ANC_Quick_Check"
* title = "Questionnaire - ANC Quick Check"
* status = #active
* experimental = true
* subjectType = #Patient
* description = "A sample questionnaire using itemMedia and itemAnswerMedia extensions"
* item
  * extension.url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemMedia"
  * extension.valueAttachment.url = "http://example.org/images/reason-for-visit.png"
  * linkId = "reason-for-visit"
  * text = "Why did you come?"
  * type = #choice
* insert answerOption("http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemAnswerMedia", "http://example.org/images/reason-for-visit-routine.png","For a scheduled (routine\) visit")
* insert answerOption("http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemAnswerMedia", "http://example.org/images/reason-for-visit-specific-complaint.png","For specific complaints about you or your baby")
* insert answerOption("http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemAnswerMedia", "http://example.org/images/reason-for-visit-first.png","First visit")
* insert answerOption("http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemAnswerMedia", "http://example.org/images/reason-for-visit-follow-up.png","Follow-up visit")
* insert answerOption("http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemAnswerMedia", "http://example.org/images/reason-for-visit-include-family-member.png","Do you want to include your companion or other family member (parent if adolescent\) in the examination and discussion?")


---

// File: input/fsh/examples/demographics.fsh

Instance: demographics
InstanceOf: SDCQuestionnaireExtractDefinition
Title: "Questionnaire - Demographics Example"
Usage: #example
* extension[$questionnaire-versionAlgorithm].valueCoding = $version-algorithm#semver
* extension[$questionnaire-launchContext]
  * extension[name].valueCoding = $launchContext#patient
  * extension[type].valueCode = #Patient
* insert definitionExtract(http://hl7.org/fhir/StructureDefinition/Patient)
* url = "http://hl7.org/fhir/uv/sdc/Questionnaire/demographics"
* name = "DemographicExample"
* title = "Questionnaire - Demographics Example"
* status = #active
* experimental = true
* subjectType = #Patient
* description = "A sample questionnaire using context-based population and extraction"
* item[+]
  * insert item(patient.id,http://hl7.org/fhir/StructureDefinition/Patient#Patient.id, (internal use\), #string)
  * readOnly = true
  * insert hidden()
  * insert initialExpression(%patient.id)
* item[+]
  * insert item(patient.birthDate, http://hl7.org/fhir/StructureDefinition/Patient#Patient.birthDate, Date of birth, #date)
  * required = true
  * insert initialExpression(%patient.birthDate)
* item[+]
  * insert item(patient.name,http://hl7.org/fhir/StructureDefinition/Patient#Patient.name,Name(s\),#group)
  * repeats = true
  * insert itemPopulationContext(patientName, #text/fhirpath, %patient.name)
  * item[+]
    * insert item(patient.name.family, http://hl7.org/fhir/StructureDefinition/Patient#Patient.name.family, Family name,#string)
    * required = true
    * insert initialExpression(%patientName.family)
  * item[+]
    * insert item(patient.name.given,http://hl7.org/fhir/StructureDefinition/Patient#Patient.name.given,Given name(s\),#string)
    * required = true
    * repeats = true
    * insert initialExpression(%patientName.given)
* item[+]
  * insert item(relative,,[[Relatives, caregivers and other personal relationships]],#group)
  * repeats = true
  * insert itemPopulationContext(relative, #application/x-fhir-query, RelatedPerson?patient={{%patient.id}})
  * insert definitionExtract(http://hl7.org/fhir/StructureDefinition/RelatedPerson)
  * item[+]
    * insert hidden()
    * insert initialExpression(%relative.id)
    * insert item(relative.id,http://hl7.org/fhir/StructureDefinition/RelatedPerson#RelatedPerson.id,(internal use\),#string)
    * readOnly = true
  * item[+]
    * insert initialExpression(%relative.relationship)
    * insert item(relative.relationship,http://hl7.org/fhir/StructureDefinition/RelatedPerson#RelatedPerson.relationship,Relationship(s\),#choice)
    * required = true
    * repeats = true
    * answerValueSet = "http://hl7.org/fhir/ValueSet/relatedperson-relationshiptype"
  * item[+]
    * insert item(relative.name,http://hl7.org/fhir/StructureDefinition/RelatedPerson#RelatedPerson.name,Name(s\),#group)
    * repeats = true
    * insert itemPopulationContext(relativeName, #text/fhirpath, %relative.name)
    * item[+]
      * insert item(relative.name.family,http://hl7.org/fhir/StructureDefinition/RelatedPerson#RelatedPerson.name.family,Family name,#string)
      * required = true
      * insert initialExpression(%relativeName.family)
    * item[+]
      * insert item(relative.name.given,http://hl7.org/fhir/StructureDefinition/RelatedPerson#RelatedPerson.name.given,Given name(s\),#string)
      * required = true
      * repeats = true
      * insert initialExpression(%relativeName.given)

---

// File: input/fsh/examples/example-of-ServiceRequest.fsh

Instance: example-of-ServiceRequest
InstanceOf: SDCQuestionnaireServiceRequest
Title: "Request-based solicitation example - ServiceRequest"
Description: "Shows a ServiceRequest soliciting completion of a questionnaire"
Usage: #example
* id = "example"
* extension.url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-servicerequest-questionnaire"
* extension.valueCanonical = "http://hl7.org/fhir/uv/sdc/Questionnaire/questionnaire-sdc-profile-example-PHQ9"
* status = #active
* intent = #order
* code = $temp#complete-questionnaire
* subject = Reference(http://hl7.org/fhir/Patient/proband) "Annie Proband"
* occurrenceTiming.repeat
  * frequency = 1
  * period = 1
  * periodUnit = #mo
* requester = Reference(http://hl7.org/fhir/PractitionerRole/example) "Dr. Adam Careful, Acme Hospital"
* performer = Reference(http://hl7.org/fhir/Patient/proband) "Annie Proband"
* reasonCode.text = "Monitor effects of new anti-depressant"

---

// File: input/fsh/examples/example-of-Task.fsh

Instance: example-of-Task
InstanceOf: SDCTaskQuestionnaire
Title: "Task-based solicitation example"
Description: "Shows how completion of a questionnaire can be solicited with Task alone"
Usage: #example
* id = "example"
* status = #completed
* intent = #order
* code = $temp#complete-questionnaire
* for = Reference(http://hl7.org/fhir/Patient/proband) "Annie Proband"
* authoredOn = "2021-09-06"
* requester = Reference(http://hl7.org/fhir/PractitionerRole/example) "Dr. Adam Careful, Acme Hospital"
* owner = Reference(http://hl7.org/fhir/Patient/proband) "Annie Proband"
* reasonCode.text = "Pre-genomic analysis family history"
* insert taskInputCanonical($temp#questionnaire, http://hl7.org/fhir/uv/sdc/Questionnaire/questionnaire-sdc-profile-example-ussg-fht)
* insert taskInputUrl($temp#response-endpoint, http://example.org/someplace/QuestionnaireResponse)
* insert taskInputUrl($temp#response-endpoint, http://example.org/some-other-place/Questionnaire/$process-response)
* insert taskOutput($temp#questionnaire-response,questionnaireresponse-sdc-example-ussg-fht-answers)

---

// File: input/fsh/examples/map-populate-out.fsh

Instance: map-populate-out
InstanceOf: SDCQuestionnaireResponse
Title: "SDC Map population StructureMap example output"
Description: "An example showing the result of a StructureMap-based population operation"
Usage: #example
* questionnaire = "http://hl7.org/fhir/uv/sdc/Questionnaire/questionnaire-sdc-test-fhirpath-prepop-source-query"
* status = #in-progress
* subject = Reference(http://example.org/fhir/Patient/a0df9da6-3157-4b72-95f1-729853718c09)
* authored = "2022-01-03T13:50:53-07:00"
* item.linkId = "grp"
* item.item[+]
  * linkId = "part-details"
  * insert subItemAnswerString("participant-id","a0df9da6-3157-4b72-95f1-729853718c09")
  * insert subItemAnswerString("family-name","Doe")
  * insert subItemAnswerString("given-names","Jane")
  * insert subItemAnswerDate("dob","1951-02-19")
  * insert subItemAnswerInteger("condition-count", 1)
* item.item[+]
  * linkId = "meds"
  * insert subItemAnswerString("med-name","SomeMed")
  * insert subItemAnswerString("med-status","active")
* item.item[+]
  * linkId = "meds"
  * insert subItemAnswerString("med-name","Another med")
  * insert subItemAnswerString("med-status","active")
* item.item[+]
  * linkId = "meds"
  * insert subItemAnswerString("med-name","SomeMed")
  * insert subItemAnswerString("med-status","active")




---

// File: input/fsh/examples/map-population-example.fsh

Instance: map-population-example
InstanceOf: Bundle
Title: "SDC Map population source bundle example"
Description: "An example of a Batch response containing search results used as an input to a map-based population process"
Usage: #example
* type = #batch-response
* entry[+]
  * resource = 2c256377-0dbf-4311-a123-14d87f22c5
  * insert entryResponse("200", "W/", "1899-12-30T00:00:00.000Z")
* entry[+]
  * resource = 7b29ddd9-fdbf-4e6c-81f3-38f2d51934
  * insert entryResponse("200", "W/", "1899-12-30T00:00:00.000Z")
* entry[+]
  * resource = 94e7a07b-0f81-4586-ad73-ef8ce3b7b7
  * insert entryResponse("200", "W/", "1899-12-30T00:00:00.000Z")


Instance: Inline-Instance-for-map-population-example-1
InstanceOf: Bundle
Usage: #inline
* id = "2c256377-0dbf-4311-a123-14d87f22c5"
* meta.lastUpdated = "2021-12-24T20:45:02.548Z"
* type = #searchset
* total = 1
* link
  * relation = "self"
  * url = "http://example.org/fhir/Patient?_format=application/fhir+xml&search-id=6d767ae9-7ce7-434e-b148-0603d44788&&_id=a0df9da6%2D3157%2D4b72%2D95f1%2D729853718c09&_sort=_id"
* entry
  * fullUrl = "http://example.org/fhir/Patient/a0df9da6-3157-4b72-95f1-729853718c09"
  * resource
    * resourceType = "Patient"
    * id = "a0df9da6-3157-4b72-95f1-729853718c09"
    * insert meta("3", "2021-11-09T22:00:59.865Z")
    * identifier
      * use = #official
      * type = $v2-0203#JHN
      * system = "https://fhir.infoway-inforoute.ca/NamingSystem/ca-on-patient-hcn"
      * value = "1234567890"
    * insert name("Doe","Jane")
    * insert telecom(#phone,"1 (555\) 867 5309",1 ) 
    * insert telecom(#email,"janedoe@example.com",2 )
    * gender = #female
    * birthDate = "1951-02-19"
    * address
      * use = #home
      * type = #physical
      * line = "123 Any Street"
      * city = "Waterloo"
      * state = "ON"
      * postalCode = "N2L 3G1"
    * contact
      * relationship = $v3-RoleCode#SPS "spouse"
        * text = "Emergency Contact"
      * insert name("Doe","John")
      * insert telecom(#phone,"(555\) 555 1212",1 ) 
      * address
        * line[+] = "50 Another St."
        * line[+] = "Unit 2"
        * city = "Waterloo"
        * state = "ON"
        * postalCode = "N2L 3G2"
    * communication
      * language = urn:ietf:bcp:47#en
        * text = "English"
    * generalPractitioner
      * reference = "http://example.org/fhir/PractitionerRole/76ff8f74-03c7-436f-a3e0-71ac9503c1a2"
  * search.mode = #match

Instance: Inline-Instance-for-map-population-example-2
InstanceOf: Bundle
Usage: #inline
* id = "7b29ddd9-fdbf-4e6c-81f3-38f2d51934"
* meta.lastUpdated = "2021-12-24T20:45:02.610Z"
* type = #searchset
* total = 1
* link.relation = "self"
* link.url = "http://example.org/fhir/Condition?_format=application/fhir+xml&search-id=91f69619-1772-4f74-9560-7748c900b1&&patient=Patient/a0df9da6%2D3157%2D4b72%2D95f1%2D729853718c09&clinical-status=active&_sort=_id"
* entry
  * fullUrl = "http://example.org/fhir/Condition/7cd8b889-5456-43d4-935c-abc10791ebd6"
  * resource
    * resourceType = "Condition"
    * id = "7cd8b889-5456-43d4-935c-abc10791ebd6"
    * insert meta("3", "2021-11-09T22:00:59.965Z")
    * clinicalStatus = $condition-clinical#active "Active"
    * verificationStatus = $condition-ver-status#confirmed
    * category = $loinc#75326-9 "Problem"
    * code
      * coding.version = "http://snomed.info/sct/20611000087101"
      * coding = $sct#95651005 "Chronic progressive paraparesis"
      * text = "Chronic Progressive Paraparesis"
    * subject.reference = "http://example.org/fhir/Patient/a0df9da6-3157-4b72-95f1-729853718c09"
    * onsetDateTime = "2014"
    * asserter.reference = "http://example.org/fhir/PractitionerRole/76ff8f74-03c7-436f-a3e0-71ac9503c1a2"
  * search.mode = #match

Instance: Inline-Instance-for-map-population-example-3
InstanceOf: Bundle
Usage: #inline
* id = "94e7a07b-0f81-4586-ad73-ef8ce3b7b7"
* meta.lastUpdated = "2021-12-24T20:45:02.719Z"
* type = #searchset
* total = 1
* link
  * relation = "self"
  * url = "http://example.org/fhir/MedicationStatement?_format=application/fhir+xml&search-id=27c5cc22-a00c-499f-b217-a60cb94df7&&patient=Patient/a0df9da6%2D3157%2D4b72%2D95f1%2D729853718c09&status=active&_include=MedicationStatement%3Amedication&_sort=_id"
* entry[+]
  * fullUrl = "http://example.org/fhir/MedicationStatement/fe376aa6-83fb-4d0e-be60-ad959c57114f"
  * resource
    * resourceType = "MedicationStatement"
    * id = "fe376aa6-83fb-4d0e-be60-ad959c57114f"
    * insert meta("3", "2021-11-09T22:01:00.007Z")
    * status = #active
    * medicationReference.reference = "http://example.org/fhir/Medication/c6222017-94f6-4dbc-8958-fcdf9df3356a"
    * subject.reference = "http://example.org/fhir/Patient/a0df9da6-3157-4b72-95f1-729853718c09"
    * effectivePeriod.start = "2014"
    * informationSource.reference = "http://example.org/fhir/PractitionerRole/76ff8f74-03c7-436f-a3e0-71ac9503c1a2"
    * dosage
      * text = "40 mg/day"
      * timing.repeat
        * frequency = 1
        * period = 1
        * periodUnit = #d
      * doseAndRate
        * doseQuantity = 40 'mg' "mg"
  * search.mode = #match
* entry[+]
  * fullUrl = "http://example.org/fhir/MedicationStatement/01e65f9e-5412-4ac9-a1c2-c408ed485702"
  * resource
    * resourceType = "MedicationStatement"
    * id = "01e65f9e-5412-4ac9-a1c2-c408ed485702"
    * insert meta("3", "2021-11-09T22:01:00.007Z")
    * status = #active
    * medicationCodeableConcept
      * coding[+]
        * system = "http://example.org/medications"
      * coding[+]
        * system = "http://example.org/medications2"
        * display = "Another med"
    * subject.reference = "http://example.org/fhir/Patient/a0df9da6-3157-4b72-95f1-729853718c09"
    * effectivePeriod.start = "2014"
    * informationSource.reference = "http://example.org/fhir/PractitionerRole/76ff8f74-03c7-436f-a3e0-71ac9503c1a2"
    * dosage
      * text = "40 mg/day"
      * timing.repeat
        * frequency = 1
        * period = 1
        * periodUnit = #d
      * doseAndRate
        * doseQuantity = 40 'mg' "mg"
  * search.mode = #match
* entry[+]
  * fullUrl = "http://example.org/fhir/MedicationStatement/f59e4516-d2c6-4a2f-936b-d2c460bb92c6"
  * resource
    * resourceType = "MedicationStatement"
    * id = "f59e4516-d2c6-4a2f-936b-d2c460bb92c6"
    * insert meta("3", "2021-11-09T22:01:00.007Z")
    * status = #active
    * medicationCodeableConcept
      * text = "SomeMed"
    * subject.reference = "http://example.org/fhir/Patient/a0df9da6-3157-4b72-95f1-729853718c09"
    * effectivePeriod.start = "2014"
    * informationSource.reference = "http://example.org/fhir/PractitionerRole/76ff8f74-03c7-436f-a3e0-71ac9503c1a2"
    * dosage
      * text = "40 mg/day"
      * timing.repeat
        * frequency = 1
        * period = 1
        * periodUnit = #d
      * doseAndRate
        * doseQuantity = 40 'mg' "mg"
  * search.mode = #match
* entry[+]
  * fullUrl = "http://example.org/fhir/Medication/c6222017-94f6-4dbc-8958-fcdf9df3356a"
  * resource
    * resourceType = "Medication"
    * id = "c6222017-94f6-4dbc-8958-fcdf9df3356a"
    * insert meta("3", "2021-11-09T22:01:00.033Z")
    * text
      * status = #generated
      * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: c6222017-94f6-4dbc-8958-fcdf9df3356a</p><p><b>meta</b>: </p><p><b>code</b>: Simvastatin 40 mg oral tablet <span style=\"background: LightGoldenRodYellow \">(Details : {SNOMED CT code \"320000009\" := \"320000009\", given as \"Simvastatin 40 mg oral tablet\"})</span></p><p><b>form</b>: Film-coated tablet <span style=\"background: LightGoldenRodYellow \">(Details : {SNOMED CT code \"385057009\" := \"385057009\", given as \"Film-coated tablet\"})</span></p></div>"
    * code
      * coding.version = "http://snomed.info/sct/20611000087101"
      * coding = $sct#320000009 "Simvastatin 40 mg oral tablet"
      * text = "Simvastatin 40 mg oral tablet"
    * form
      * coding.version = "http://snomed.info/sct/20611000087101"
      * coding = $sct#385057009 "Film-coated tablet"
    * ingredient
      * itemCodeableConcept
        * coding.version = "http://snomed.info/sct/20611000087101"
        * coding = $sct#387584000 "Simvastatin"
      * strength
        * numerator = 40 'mg' "mcg"
        * denominator = 1 '1' "dose"
  * search.mode = #include

---

// File: input/fsh/examples/populate-request.fsh

Instance: populate-request
InstanceOf: SDCParametersQuestionnairePopulateIn
Title: "Example $populate operation request"
Description: "Shows the request payload when invoking a populate operation"
Usage: #example
* parameter[+]
  * name = "questionnaire"
  * valueUri = "http://hl7.org/fhir/uv/sdc/Questionnaire/questionnaire-sdc-profile-example-ussg-fht"
* parameter[+]
  * name = "subject"
  * valueReference = Reference(http://hl7.org/fhir/Patient/proband)
* parameter[+]
  * name = "local"
  * valueBoolean = true


---

// File: input/fsh/examples/populate-response.fsh

Instance: populate-response
InstanceOf: SDCParametersQuestionnairePopulateOut
Title: "Example $populate operation response"
Description: "Shows the response payload when invoking a populate operation"
Usage: #example
* parameter[+]
  * name = "response"
  * resource = questionnaireresponse-sdc-example-ussg-fht-answers


---

// File: input/fsh/examples/populatehtml-response.fsh

Instance: populatehtml-response
InstanceOf: SDCParametersQuestionnairePopulateHtmlOut
Title: "Example $populate-html operation response"
Description: "Shows the response payload when invoking a populate-html operation"
Usage: #example
* parameter[+]
  * name = "form"
  * resource = HTMLBinary

Instance: HTMLBinary
InstanceOf: Binary
Usage: #inline
* contentType = #text/html
* data = "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIGh0bWwgUFVCTElDICItLy9XM0MvL0RURCBYSFRNTCAxLjAgU3RyaWN0Ly9FTiIgCgkiaHR0cDovL3d3dy53My5vcmcvVFIveGh0bWwxL0RURC94aHRtbDEtc3RyaWN0LmR0ZCI+CjxodG1sIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiB4bWw6bGFuZz0iZW4iIGxhbmc9ImVuIj4KCTxoZWFkPgoJCTx0aXRsZT5VU1NHIEZhbWlseSBIaXN0b3J5PC90aXRsZT4KCTwvaGVhZD4KCTxib2R5PgoJCTxoMT5RdWVzdGlvbm5haXJlIGNvbnRlbnQ8L2gxPgoJCTxwPk5vcm1hbGx5IHRoaXMgd291bGQgYmUgYSBRdWVzdGlvbm5haXJlIHdpdGggYWN0aXZlIGlucHV0IGNvbnRyb2xzLCBhICdzdWJtaXQnIGJ1dHRvbiBhdCB0aGUgZW5kIGFuZCBlbWJlZGRlZCBKYXZhc2NyaXB0IHRoYXQgd291bGQgKHNlY3VyZWx5KSB0cmFuc21pdCB0aGUgY29udGVudCBvZiB0aGUgY29tcGxldGVkIGZvcm0gdG8gc29tZSBkZXNpcmVkIGVuZCBsb2NhdGlvbi4gIEhvd2V2ZXIsIEhMNyBwdWJsaWNhdGlvbiBydWxlcyBoYXZlIHRpZ2h0IGd1aWRlbGluZXMgb24gdGhlIHVzZSBvZiBKYXZhc2NyaXB0IGFuZCBvdGhlciBhY3RpdmUgY29udHJvbHMsIHNvIG5vIGZ1bmN0aW9uYWwgZXhhbXBsZSBpcyBwcm92aWRlZC4gIFRoaXMgZXhhbXBsZSBzaG91bGQsIGhvd2V2ZXIsIHN0aWxsIGluZGljYXRlIGhvdyBhbiBhcmJpdHJhcnkgSFRNTCBwYWdlIHRoYXQgY291bGQgYmUgcmVuZGVyZWQgaW4gYSBsb2NhbCBicm93c2VyIGNvdWxkIGJlIHRyYW5zbWl0dGVkIHVzaW5nIHRoZSBTREMgJHBvcHVsYXRlLWh0bWwgb3BlcmF0aW9uLjwvcD4KCTwvYm9keT4KPC9odG1sPgo="


---

// File: input/fsh/examples/populatelink-response.fsh

Instance: populatelink-response
InstanceOf: SDCParametersQuestionnairePopulateLinkOut
Title: "Example $populate-link operation response"
Description: "Shows the response payload when invoking a populate-link operation"
Usage: #example
* parameter[+]
  * name = "link"
  * valueUri = "http://example.org/someHtmlPage"


---

// File: input/fsh/examples/questionnaire-sdc-derivation-child.fsh

Instance: sdc-derivation-child
InstanceOf: SDCBaseQuestionnaire
Title: "SDC Derivation Child"
Description: "Example of a child questionnaire based on a parent"
Usage: #example
* extension[$questionnaire-versionAlgorithm].valueCoding = $version-algorithm#semver
* url = "http://build.fhir.org/ig/HL7/sdc/Questionnaire/sdc-derivation-child"
* name = "SDCDerivationChild"
* status = #active
* derivedFrom = "http://build.fhir.org/ig/HL7/sdc/Questionnaire/sdc-derivation-parent"
  * extension[+]
    * url = $questionnaire-derivationType
    * valueCoding = $derivationType#compliesWith
* item[+]
  * linkId = "1"
  * text = "What is your family name? (required)"
  * type = #string
  * required = true
* item[+]
  * linkId = "2"
  * text = "What is your first name? (optional)"
  * type = #string


---

// File: input/fsh/examples/questionnaire-sdc-derivation-parent.fsh

Instance: sdc-derivation-parent
InstanceOf: SDCBaseQuestionnaire
Title: "SDC Derivation Parent"
Description: "Example of a parent questionnaire that sets derivation expectations"
Usage: #example
* extension[$questionnaire-versionAlgorithm].valueCoding = $version-algorithm#semver
* url = "http://build.fhir.org/ig/HL7/sdc/Questionnaire/sdc-derivation-parent"
* name = "SDCDerivationParent"
* status = #active
// Todo: Create Ruleset for item (when optional argument functionality is released)
* item[+]
  * linkId = "1"
  * text = "What is your family name? (required)"
  * type = #string
  * required = true
* item[+]
  * linkId = "2"
  * text = "What is your first name? (optional)"
  * type = #string
* item[+]
  * extension[OptionalDisplayExtension].valueBoolean = true
  * linkId = "3"
  * text = "What are your middle names? (optional, removable)"
  * type = #string


---

// File: input/fsh/examples/questionnaire-sdc-profile-example-cap.fsh

Instance: questionnaire-sdc-profile-example-cap
InstanceOf: SDCBaseQuestionnaire
Title: "SDC-Pathology"
Description: "Cancer pathology questionnaire with flow-control extensions"
Usage: #example
* extension[$questionnaire-versionAlgorithm].valueCoding = $version-algorithm#semver
* url = "http://hl7.org/fhir/uv/sdc/Questionnaire/questionnaire-sdc-profile-example-cap"
* name = "QuestionnaireSDCProfileExampleCap"
* title = "Questionnaire SDC Profile Cap"
* status = #active
* item[+]
  * linkId = "1"
  * text = "MARGINS"
  * type = #group
  * required = true
  * item
    * linkId = "1.1"
    * text = "Status of surgical margin involvement by tumor (observable entity)"
    * type = #choice
    * required = true
    * answerOption[+].valueCoding = $example#M1 "Margins univolved by tumor"
    * answerOption[+].valueCoding = $example#M2 "Margin(s) involved by tumor"
    * answerOption[+].valueCoding = $example#M3 "Cannot be determined"
    * answerOption[+].valueCoding = $example#M4 "Not applicable"
    * item[+]
      * extension[$questionnaire-disabledDisplay].valueCode = #hidden
      * linkId = "1.1.1"
      * type = #group
      * enableWhen.question = "1.1"
      * enableWhen.operator = #=
      * enableWhen.answerCoding = $example#M1
      * required = true
      * item[+]
        * linkId = "1.1.1.1"
        * text = "Distance from Closest Margin"
        * type = #choice
        * answerOption[+].valueCoding = $example#D1 "Specify (mm)"
        * answerOption[+].valueCoding = $example#D2 "Cannot be assessed (explain)"
        * item[+].extension[$minValue].valueDecimal = 0.01
        * item[=].extension[$maxValue].valueDecimal = 1000
        * item[=].extension[$maxDecimalPlaces].valueInteger = 2
        * item[=]
          * linkId = "1.1.1.1.1.1"
          * text = "Specify (mm)"
          * type = #decimal
          * required = true
        * item[+]
          * linkId = "1.1.1.1.2.1"
          * text = "Cannot be assessed (explain)"
          * type = #string
          * required = true
      * item[+]
        * linkId = "1.1.1.2"
        * text = "Specify Margin, if possible"
        * type = #choice
        * answerOption[+].valueCoding = $example#W1 "Specify margin"
        * answerOption[+].valueCoding = $example#W2 "Cannot be determined (explain)"
        * insert itemType("1.1.1.2.1.1", "Cannot be assessed (explain\)", #string)
        * insert itemType("1.1.1.2.2.1", "Cannot be determined (explain\)", #string)
    * item[+]
      * linkId = "1.1.2.1"
      * text = "Specify Margin(s), if possible"
      * type = #choice
      * required = true
      * answerOption[+].valueCoding = $example#I1 "Specify margin(s)"
      * answerOption[+].valueCoding = $example#I2 "Cannot be determined (explain)"
      * insert itemType("1.1.2.1.1.1", "Specify margin(s\)", #string)
      * insert itemType("1.1.2.1.2.1", "Cannot be determined (explain\)", #string)
    * insert itemType("1.1.3.1", "Cannot be determined", #string)
    * insert itemType("1.1.4.1", "Not Applicable", #string)
* item[+]
  * linkId = "2"
  * text = "ACCESSORY FINDINGS"
  * type = #group
  * required = true
  * item[+]
    * linkId = "2.1"
    * text = "Treatment Effect (applicable to carcinomas treated with neoadjuvant therapy)"
    * type = #choice
    * answerOption[+].valueCoding = $example#E1 "Not identified"
    * answerOption[+].valueCoding = $example#E2 "Present (specify)"
    * answerOption[+].valueCoding = $example#E3 "Indeterminate"
    * insert itemType("2.1.1.1", "Not identified", #string)
    * insert itemType("2.1.2.1", "Present (specify\)", #string)
    * insert itemType("2.1.3.1", "Indeterminate", #string)
  * item[+]
    * linkId = "2.2"
    * text = "Tumor Description"
    * type = #choice
    * repeats = true
    * answerOption[+].valueCoding = $example#U1 "Hemorrhagic"
    * answerOption[+].valueCoding = $example#U2 "Necrotic"
    * answerOption[+].valueCoding = $example#U3 "Invasion"
    * answerOption[+].valueCoding = $example#U4 "Other (specify)"
    * item[+]
      * linkId = "2.2.1.1"
      * text = "??"
      * type = #choice
      * repeats = true
      * answerOption[+].valueCoding = $example#V1 "Capsule"
      * answerOption[+].valueCoding = $example#V2 "Vessels"
      * answerOption[+].valueCoding = $example#V3 "Extra-adrenal (specify)"
      * insert itemType("2.2.1.1.1.1", "Extra-adrenal (specify\)", #string)
    * insert itemType("2.2.2.1", "Other (specify\)", #string)

        
        


---

// File: input/fsh/examples/questionnaire-sdc-profile-example-context-expression.fsh

Instance: questionnaire-sdc-profile-example-context-expression
InstanceOf: SDCQuestionnaireBehave
Title: "SDC-Example using contextExpression"
Description: "Example to indicate the resources to make available for display to the user to aid in answering the question."
Usage: #example
* extension[+]
  * url = $questionnaire-versionAlgorithm
  * valueCoding = $version-algorithm#semver
* extension[+]
  * extension[+].url = "name"
  * extension[=].valueCoding = $launchContext#patient "Patient"
  * extension[+].url = "type"
  * extension[=].valueCode = #Patient
  * extension[+].url = "description"
  * extension[=].valueString = "The patient that is to be used to pre-populate the form"
  * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-launchContext"
* url = "http://hl7.org/fhir/uv/sdc/questionnaire-sdc-profile-example-context-expression"
* name = "SDCExampleUsingContextExpression"
* status = #active
* item
  * linkId = "1.0"
  * type = #group
  * item[+]
    * linkId = "1.1"
    * text = "Instruction: Click on \"Previous Visits\" button to view all the visits of this patient in the past year."
    * type = #display
  * item[+]
    * extension[+]
      * extension[+]
        * url = "label"
        * valueString = "Encounters in past year"
      * extension[+]
        * url = "expression"
        * valueExpression.description = "list all Encounters with patient in the past year, in order by date - newest to oldest"
        * valueExpression.language = #application/x-fhir-query
        * valueExpression.expression = "Encounter?patient={{%patient.id}}&date=ge{{today()-1 year}}&_sort=-date&_include=Encounter:practitioner"
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-contextExpression"
    * extension[+]
      * extension[+]
        * url = "path"
        * valueString = "period.start"
      * extension[+]
        * url = "label"
        * valueString = "Date"
      * extension[+]
        * url = "width"
        * valueQuantity = 40 '%'
      * extension[+]
        * url = "forDisplay"
        * valueBoolean = true
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-choiceColumn"
    * extension[+]
      * extension[+]
        * url = "path"
        * valueString = "reason.coding.display + ' - ' + type.text"
      * extension[+]
        * url = "label"
        * valueString = "Visit Reason/Description"
      * extension[+]
        * url = "width"
        * valueQuantity = 60 '%'
      * extension[+]
        * url = "forDisplay"
        * valueBoolean = false
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-choiceColumn"
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
      * valueCodeableConcept = $questionnaire-item-control#radio-button "Radio Button"
        * text = "A control where choices are listed with a button beside them. The button can be toggled to select or de-select a given choice. Selecting one item deselects all others."
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
      * valueCodeableConcept = $questionnaire-item-control#radio-button "Radio Button"
        * text = "A control where choices are listed with a button beside them. The button can be toggled to select or de-select a given choice. Selecting one item deselects all others."
    * linkId = "1.2"
    * text = "Has the patient been admitted for this issue on any visits in the past year?"
    * type = #choice
    * answerValueSet = "http://hl7.org/fhir/ValueSet/yesnodontknow"       

---

// File: input/fsh/examples/questionnaire-sdc-profile-example-cqf-PHQ9.fsh

Instance: questionnaire-sdc-profile-example-cqf-PHQ9
InstanceOf: SDCQuestionnaireExtractObservation
Title: "SDC-PHQ9 using an SDC Library"
Description: "Patient Health Questionnaire using a cqf-expression defined in an SDC Library"
Usage: #example
* extension[$questionnaire-versionAlgorithm].valueCoding = $version-algorithm#semver
* identifier.use = #official
* identifier.value = "phq-9"
* version = "1.0.0"
* url = "http://build.fhir.org/ig/HL7/sdc/questionnaire-sdc-profile-example-cqf-PHQ9"
* name = "PatientHealthQuestionnairePHQ9"
* title = "Patient Health Questionnaire (PHQ-9)"
* status = #active
* subjectType = #Patient
* code = $loinc#44249-1 "PHQ-9 quick depression assessment panel [Reported.PHQ]"

* insert itemChoice("LittleInterest", "Little interest or pleasure in doing things", "http://loinc.org/vs/LL358-3")
* item[=].code = $loinc#44250-9

* insert itemChoice("FeelingDown", "Feeling down\, depressed\, or hopeless", "http://loinc.org/vs/LL358-3")
* item[=].code = $loinc#44255-8

* insert itemChoice("TroubleSleeping", "Trouble falling or staying asleep", "http://loinc.org/vs/LL358-3")
* item[=].code = $loinc#44259-0

* insert itemChoice("FeelingTired", "Feeling tired or having little energy", "http://loinc.org/vs/LL358-3")
* item[=].code = $loinc#44254-1

* insert itemChoice("BadAppetite", "Poor appetite or overeating", "http://loinc.org/vs/LL358-3")
* item[=].code = $loinc#44251-7

* insert itemChoice("FeelingBadAboutSelf", "Feeling bad about yourself - or that you are a failure or have let yourself or your family down", "http://loinc.org/vs/LL358-3")
* item[=].code = $loinc#44258-2

* insert itemChoice("TroubleConcentrating", "Trouble concentrating on things\, such as reading the newspaper or watching television", "http://loinc.org/vs/LL358-3")
* item[=].code = $loinc#44252-5

* insert itemChoice("MovingSpeaking", "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual", "http://loinc.org/vs/LL358-3")
* item[=].code = $loinc#44253-3

* item[+]
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/cqf-expression"
    * valueExpression
      * language = #text/cql
      * expression = "CalculateTotalScore"
  * extension[+]
    * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observation-extract-category"
    * valueCodeableConcept = $observation-category#survey "Survey"
  * linkId = "TotalScore"
  * code[+] = $loinc#44261-6
    * extension
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationExtract"
      * valueBoolean = true
  * code[+] = $sct#720433000
  * text = "Total score"
  * type = #integer
  * required = true

* insert itemChoice("Difficulty", "If you checked off any problems\, how difficult have these problems made it for you to do your work\, take care of things at home\, or get along with other people", "http://loinc.org/vs/LL358-3")
* item[=].code = $loinc#44256-6


---

// File: input/fsh/examples/questionnaire-sdc-profile-example-form-behavior.fsh

Instance: questionnaire-sdc-profile-example-form-behavior
InstanceOf: SDCQuestionnaireBehave
Title: "SDC-Advanced Form Behavior"
Description: "Demo questionnaire showing most of the advanced form behavior capabilities of SDC. Each example here is itemized in the Examples page."
Usage: #example
* modifierExtension[+]
  * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-rendering-criticalExtension"
  * valueCanonical = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-entryMode"
* modifierExtension[+]
  * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-rendering-criticalExtension"
  * valueCanonical = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-answerOptionsToggleExpression"
* extension[+]
  * url = $questionnaire-versionAlgorithm
  * valueCoding = $version-algorithm#semver
* extension[+]
  * url = "http://hl7.org/fhir/StructureDefinition/variable"
  * valueExpression
    * name = "weight"
    * language = #text/fhirpath
    * expression = "%resource.repeat(item).where(linkId='3.3.1').item.answer.value"
* extension[+]
  * url = "http://hl7.org/fhir/StructureDefinition/variable"
  * valueExpression
    * name = "height"
    * language = #text/fhirpath
    * expression = "%resource.repeat(item).where(linkId='3.3.2').item.answer.value*0.0254"
* extension[+]
  * url = "http://hl7.org/fhir/StructureDefinition/cqf-library"
  * valueCanonical = "http://example.org/Library/MeasurementLimits"
* extension[+]
  * extension[+]
    * url = "name"
    * valueCoding = $launchContext#patient "Patient"
  * extension[+]
    * url = "type"
    * valueCode = #Patient
  * extension[+]
    * url = "description"
    * valueString = "The patient that is to be used to pre-populate the form"
  * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-launchContext"
* extension[+]
  * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-endpoint"
  * valueUri = "http://example.org/QuestionnaireResponse/create"
* extension[+]
  * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-entryMode"
  * valueCode = #sequential
* url = "http://build.fhir.org/ig/HL7/sdc/questionnaire-sdc-profile-example-form-behavior"
* name = "SDCAdvancedRenderingExample"
* status = #active
* item[+]
  * linkId = "1"
  * text = "Value constraints"
  * type = #group
  * item[+]
    * linkId = "1.1"
    * text = "First Name"
    * type = #string
    * maxLength = 50
  * item[+]
    * extension.url = "http://hl7.org/fhir/StructureDefinition/minLength"
    * extension.valueInteger = 2
    * linkId = "1.2"
    * text = "Last Name"
    * type = #string
  * item[+]
    * extension
      * extension[+]
        * url = "key"
        * valueId = "contraint-regex1"
      * extension[+]
        * url = "severity"
        * valueCode = #error
      * extension[+]
        * url = "expression"
        * valueExpression
          * language = #text/fhirpath
          * expression = "%resource.repeat(item).where(linkId='1.3').answer.all(value.matches('[A-Z][0-9][A-Z] [0-9][A-Z][0-9]'))"
      * extension[+]
        * url = "human"
        * valueString = "Postal code must match syntax A1A 1A1."
      * url = "http://hl7.org/fhir/StructureDefinition/targetConstraint"
    * linkId = "1.3"
    * text = "Postal Code (A1A 1A1)"
    * type = #string
  * item[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/minValue"
      * valueDecimal = 1
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/maxValue"
      * valueDecimal = 100
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/maxDecimalPlaces"
      * valueInteger = 2
    * linkId = "1.4"
    * text = "Enter your weight in kg"
    * type = #decimal
  * item[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-unitValueSet"
      * valueCanonical = "http://hl7.org/fhir/ValueSet/ucum-bodyweight"
    * extension[+]
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-minQuantity"
      * valueQuantity = 10 'kg'
    * extension[+]
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-maxQuantity"
      * valueQuantity = 100 'kg'
    * linkId = "1.5"
    * text = "Body Weight"
    * type = #quantity
  * item[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/mimeType"
      * valueCode = #image/jpeg
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/mimeType"
      * valueCode = #application/pdf
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/maxSize"
      * valueDecimal = 1048576
    * linkId = "1.6"
    * text = "Attach Proof of Citizenship"
    * type = #attachment
* item[+]
  * linkId = "2"
  * text = "Value constraints"
  * type = #group
  * item[+]
    * linkId = "2.1"
    * text = "(I/We) worried whether (my/our) food would run out before (I/we) got money to buy more."
    * type = #choice
    * answerOption[+]
      * valueCoding = $loinc#LA28397-0 "Often true"
    * answerOption[+]      
      * valueCoding = $loinc#LA6729-3 "Sometimes true"
    * answerOption[+]       
      * valueCoding = $loinc#LA28398-8 "Never true"
    * answerOption[+]       
      * valueCoding = $loinc#LA15775-2 "Don't know/refused"
  * item[+]
    * linkId = "2.3"
    * text = "Activity Level"
    * type = #choice
    * answerValueSet = "http://loinc.org/vs/LL4882-8"
  * item[+]
    * linkId = "2.5"
    * text = "Applicable health conditions"
    * type = #choice
    * repeats = true
    * answerValueSet = "#vsConditionsAll"
    * extension[+]
      * extension[+]
        * url = "option"
        * valueCoding = $conditions#3
      * extension[+]
        * url = "expression"
        * valueExpression.language = #text/fhirpath
        * valueExpression.expression = "%patient.gender!='male'"
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-answerOptionsToggleExpression"
    * extension[+]
      * extension[+]
        * url = "option"
        * valueCoding = $conditions#4
      * extension[+]
        * url = "expression"
        * valueExpression.language = #text/fhirpath
        * valueExpression.expression = "%patient.gender!='female'"
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-answerOptionsToggleExpression"
  * item[+]
    * linkId = "2.6"
    * text = "Email*"
    * type = #string
    * required = true
    * extension[Keyboard].valueCoding = KeyboardTypeCodes#email "email"
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression"
      * valueExpression.description = "current date"
      * valueExpression.language = #text/fhirpath
      * valueExpression.expression = "today()"
    * linkId = "2.7"
    * text = "Current Date:"
    * type = #date
    * readOnly = true
  * item[+]
    * linkId = "2.7.1"
    * text.extension
      * url = "http://hl7.org/fhir/StructureDefinition/cqf-expression"
      * valueExpression.description = "Substitute in current date"
      * valueExpression.language = #text/fhirpath
      * valueExpression.expression = "'Please only enter data that has been validated as of ' + today()"
    * type = #display
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-openLabel"
      * valueString = "Other event (specify)"
    * linkId = "2.8"
    * text = "Heart History (check all that applies)"
    * type = #open-choice
    * repeats = true
    * answerOption[+].valueCoding = $procedures#U1 "Heart attack"
    * answerOption[+].valueCoding = $procedures#U2 "Heart surgery"
    * answerOption[+].valueCoding = $procedures#U3 "Cardiac catheterization"
    * answerOption[+].valueCoding = $procedures#U4 "Coronary angioplasty (PTCA)"
    * answerOption[+].valueCoding = $procedures#U5 "Cardiac pacemaker"
  * item[+]
    * linkId = "2.9"
    * text = "Heart History (check at least 2):"
    * type = #choice
    * required = true
    * repeats = true
    * answerOption[+].valueCoding = $procedures#U1 "Heart attack"
    * answerOption[+].valueCoding = $procedures#U2 "Heart surgery"
    * answerOption[+].valueCoding = $procedures#U3 "Cardiac catheterization"
    * answerOption[+].valueCoding = $procedures#U4 "Coronary angioplasty (PTCA)"
    * answerOption[+].valueCoding = $procedures#U5 "Cardiac pacemaker"
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs"
      * valueInteger = 2
  * item[+]
    * linkId = "2.10"
    * text = "Heart History (check no more than 3):"
    * type = #choice
    * required = true
    * repeats = true
    * answerOption[+].valueCoding = $procedures#U1 "Heart attack"
    * answerOption[+].valueCoding = $procedures#U2 "Heart surgery"
    * answerOption[+].valueCoding = $procedures#U3 "Cardiac catheterization"
    * answerOption[+].valueCoding = $procedures#U4 "Coronary angioplasty (PTCA)"
    * answerOption[+].valueCoding = $procedures#U5 "Cardiac pacemaker"
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs"
      * valueInteger = 3 
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
      * valueCodeableConcept = $questionnaire-item-control#check-box "Check-box"
    * linkId = "2.11"
    * text = "What treatments do you now have for heart disease? (select all that applies)"
    * type = #choice
    * repeats = true
    * answerOption[+].valueCoding = $treatments#noTreatment "NoTreatment"
    * answerOption[+].valueCoding = $treatments#aspirin "Aspirin"
    * answerOption[+].valueCoding = $treatments#otherMeds "Other medicines, tablets, or pills"
    * answerOption[+].valueCoding = $treatments#diet "Diet"
    * answerOption[+].valueCoding = $treatments#exercise "Exercise"
    * answerOption[+]
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-optionExclusive"
        * valueBoolean = true
      * valueCoding = $treatments#none "None of the above"
  * item[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption"
      * valueCoding = $unitsofmeasure#mL "mL"
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption"
      * valueCoding = $unitsofmeasure#L "L"
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption"
      * valueCoding = $unitsofmeasure#g "g"
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption"
      * valueCoding = $unitsofmeasure#mg "mg"
    * extension[+]
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-unitOpen"
      * valueCode = #optionsOrType
    * extension[+]
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-unitSupplementalSystem"
      * valueCanonical = "http://example.org/SomeUnitCodeSystem"
    * linkId = "2.12"
    * text = "Dosage"
    * type = #quantity
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-unitValueSet"
      * valueCanonical = "http://hl7.org/fhir/ValueSet/age-units"
    * linkId = "2.13"
    * text = "Specify age:"
    * type = #quantity
  * item[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-referenceResource"
      * valueCode = #Practitioner
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-referenceProfile"
      * valueCanonical = "http://example.org/fhir/StructureDefinition/my-practitioner"
    * extension[+]
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-lookupQuestionnaire"
      * valueCanonical = "http://example.org/Questionnaire/1234"
    * extension[+]
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-answerExpression"
      * valueExpression
        * description = "all active practitioners"
        * language = #application/x-fhir-query
        * expression = "Practitioner?active=true&_sort=family,given"
    * extension[+]
      * extension[+]
        * url = "path"
        * valueString = "name.where(use='official').family + ', ' + name.where(use='official').given.first()"
      * extension[+]
        * url = "forDisplay"
        * valueBoolean = true
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-choiceColumn"
    * linkId = "2.14"
    * text = "Select your preferred practitioner:"
    * type = #reference
* item[+]
  * linkId = "3"
  * text = "Calculation"
  * type = #group
  * item[+]
    * extension.url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression"
    * extension.valueExpression.description = "deadline for submission"
    * extension.valueExpression.language = #text/fhirpath
    * extension.valueExpression.expression = "today() + 7 days"
    * linkId = "3.1"
    * text = "Deadline for submission (7 days from now)"
    * type = #date
    * readOnly = true
  * item[+]
    * linkId = "3.2"
    * type = #group
    * item[+]
      * extension.url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression"
      * extension.valueExpression.description = "patient's last name"
      * extension.valueExpression.language = #text/fhirpath
      * extension.valueExpression.expression = "%patient.name.where(use='official').given.first()"
      * linkId = "3.2.1"
      * text = "Last Name:"
      * type = #string
      * readOnly = true
    * item[+]
      * extension.url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression"
      * extension.valueExpression.description = "patient's first name"
      * extension.valueExpression.language = #text/fhirpath
      * extension.valueExpression.expression = "%patient.name.where(use='official').family"
      * linkId = "3.2.2"
      * text = "First Name:"
      * type = #string
      * readOnly = true
    * item[+]
      * extension.url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression"
      * extension.valueExpression.description = "patient's gender"
      * extension.valueExpression.language = #text/fhirpath
      * extension.valueExpression.expression = "%patient.gender"
      * linkId = "3.2.3"
      * text = "Gender:"
      * type = #string
      * readOnly = true
  * item[+]
    * linkId = "3.3"
    * text = "Calculated Expression"
    * type = #group
    * item[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-unit"
      * extension.valueCoding = $unitsofmeasure#kg
      * linkId = "3.3.1"
      * text = "Weight (kg)"
      * type = #decimal
    * item[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-unit"
      * extension.valueCoding = $unitsofmeasure#[in_i]
      * linkId = "3.3.2"
      * text = "Body Height (inches)"
      * type = #decimal
    * item[+]
      * extension.url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression"
      * extension.valueExpression.description = "BMI Calculation"
      * extension.valueExpression.language = #text/fhirpath
      * extension.valueExpression.expression = "(%weight/(%height.power(2))).round(1)"
      * linkId = "3.3.3"
      * text = "Your Body Mass Index (BMI)"
      * type = #decimal
      * readOnly = true
  * item[+]
    * linkId = "3.4"
    * text = "CQF-related Example"
    * type = #group
    * item[+]
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/minValue"
        * valueDecimal.extension.url = "http://hl7.org/fhir/StructureDefinition/cqf-calculatedValue"
        * valueDecimal.extension.valueExpression
          * language = #text/fhirpath
          * expression = "min_weight"
        * valueDecimal = 1
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/maxValue"
        * valueDecimal.extension.url = "http://hl7.org/fhir/StructureDefinition/cqf-calculatedValue"
        * valueDecimal.extension.valueExpression
          * language = #text/fhirpath
          * expression = "max_weight"
        * valueDecimal = 100
      * linkId = "3.4.1"
      * text = "Enter weight in kg"
      * type = #decimal
    * item[+]
      * linkId = "3.4.2"
      * text = "Enter email address"
      * type = #string
      * extension[Keyboard].valueCoding = KeyboardTypeCodes#email "email"
      * required.extension.url = "http://hl7.org/fhir/StructureDefinition/cqf-expression"
      * required.extension.valueExpression.description = "current date"
      * required.extension.valueExpression.language = #text/fhirpath
      * required.extension.valueExpression.expression = "%patient.active"
      * required = false
  * item[+]
    * linkId = "3.5"
    * text.extension.url = "http://hl7.org/fhir/StructureDefinition/cqf-expression"
    * text.extension.valueExpression.description = "last immunization date"
    * text.extension.valueExpression.language = #text/fhirpath
    * text.extension.valueExpression.expression = "'Your last immunization was on '+ %Immunization.occurrenceDateTime.substring(0,10) + '.'"
    * type = #display
* item[+]
  * linkId = "4"
  * text = "Other Controls"
  * type = #group
  * item[+]
    * linkId = "4.1"
    * text = "Marital Status"
    * type = #choice
    * answerValueSet = "http://hl7.org/fhir/ValueSet/marital-status"
    * initial.valueCoding = $v3-MaritalStatus#D "Divorced"
  * item[+]
    * type = #group
    * linkId = "4.2"      
    * item[+]
      * linkId = "4.2.1"
      * text = "Choose Gender"
      * type = #choice
      * answerValueSet = "http://hl7.org/fhir/ValueSet/administrative-gender"
    * item[+]
      * extension[$questionnaire-disabledDisplay].valueCode = #protected
      * linkId = "4.2.2"
      * text = "Are you pregnant? (enableWhen = gender is Female, disableDisplay=protected)"
      * type = #choice
      * enableWhen.question = "4.2.1"
      * enableWhen.operator = #=
      * enableWhen.answerCoding = $administrative-gender#female
      * answerValueSet = "http://hl7.org/fhir/ValueSet/yesnodontknow"
    * item[+]
      * extension[$questionnaire-disabledDisplay].valueCode = #hidden
      * linkId = "4.2.3"
      * text = "Are you diabetic? (enableWhen = gender is Female, disableDisplay=hidden)"
      * type = #choice
      * enableWhen.question = "4.2.1"
      * enableWhen.operator = #=
      * enableWhen.answerCoding = $administrative-gender#female
      * answerValueSet = "http://hl7.org/fhir/ValueSet/yesnodontknow"
    * item[+]
      * extension[$questionnaire-disabledDisplay].valueCode = #protected
      * linkId = "4.2.4"
      * text = "Have you been diagnosed with Gestational Diabetes? (enableBehavior = only when pregnant and diabetic, disableDisplay=protected)"
      * type = #choice
      * enableWhen[+]
        * question = "4.2.2"
        * operator = #=
        * answerCoding = $v2-0136#Y
      * enableWhen[+]
        * question = "4.2.3"
        * operator = #=
        * answerCoding = $v2-0136#Y
      * enableBehavior = #all
      * answerValueSet = "http://hl7.org/fhir/ValueSet/yesnodontknow"
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/entryFormat"
        * valueString = "MM/DD/YYYY"
      * linkId = "4.2.5"
      * text = "Enter your birthdate (MM/DD/YYYY)"
      * type = #date
      * answerValueSet = "http://hl7.org/fhir/ValueSet/administrative-gender"
    * item[+]
      * extension[$questionnaire-disabledDisplay].valueCode = #protected
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression"
        * valueExpression.description = "if last 2 questions were answered"
        * valueExpression.language = #text/fhirpath
        * valueExpression.expression = "%resource.repeat(item).where(linkId='4.2.b.1').answer.value.code ='female' and today().toString().substring(0, 4).toInteger() - %resource.repeat(item).where(linkId='4.2.b.5').answer.value.toString().substring(0, 4).toInteger() >= 40"
      * linkId = "4.2.6"
      * text = "Have you had mammogram before?(enableWhenExpression = only when gender is female and age > 40, disableDisplay=protected)"
      * type = #choice
      * answerValueSet = "http://hl7.org/fhir/ValueSet/yesnodontknow"
  * item[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-signatureRequired"
      * valueCodeableConcept = urn:iso-astm:E1762-95:2013#1.2.840.10065.1.12.1.8 "Signature Witness Signature"
      * valueCodeableConcept.text = "the signature of a witness to any other signature."
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-usageMode"
      * valueCode = #capture
    * linkId = "4.4"
    * text = "Signature of Patient"
    * type = #attachment
    * required = true
  * item[+]
    * extension[+]
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-candidateExpression"
      * valueExpression.description = "active practitioners that speak at least one of the patient's language"
      * valueExpression.language = #application/x-fhir-query
      * valueExpression.expression = "Practitioner?communication=&active=true"
    * extension[+]
      * extension[+].url = "path"
      * extension[=].valueString = "name.first().family"
      * extension[+].url = "label"
      * extension[=].valueString = "LAST NAME"
      * extension[+].url = "width"
      * extension[=].valueQuantity = 40 '%'
      * extension[+].url = "forDisplay"
      * extension[=].valueBoolean = true
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-choiceColumn"
    * extension[+]
      * extension[+].url = "path"
      * extension[=].valueString = "name.first().given.first()"
      * extension[+].url = "label"
      * extension[=].valueString = "FIRST NAME"
      * extension[+].url = "width"
      * extension[=].valueQuantity = 40 '%'
      * extension[+].url = "forDisplay"
      * extension[=].valueBoolean = true
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-choiceColumn"
    * extension[+]
      * extension[+].url = "path"
      * extension[=].valueString = "gender"
      * extension[+].url = "label"
      * extension[=].valueString = "GENDER"
      * extension[+].url = "width"
      * extension[=].valueQuantity = 20 '%'
      * extension[+].url = "forDisplay"
      * extension[=].valueBoolean = false
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-choiceColumn"
    * linkId = "4.5"
    * text = "All the practitioners below can speak the patient's language. Choose all preferred practioners:"
    * type = #reference
    * repeats = true
  * item[+]
    * extension[+]
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemPopulationContext"
      * valueExpression.name = "homeAddress"
      * valueExpression.description = "Home address of the patient"
      * valueExpression.language = #text/fhirpath
      * valueExpression.expression = "%patient.address.where(use='home').first()"
    * linkId = "4.6"
    * type = #group
    * item[+]
      * linkId = "4.6.1"
      * text = "Home Address"
      * type = #display 
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression"
        * valueExpression.description = "Address Line 1"
        * valueExpression.language = #text/fhirpath
        * valueExpression.expression = "%homeAddress.line.first()"
      * linkId = "4.6.2"
      * definition = "http://hl7.org/fhir/StructureDefinition/Patient#Patient.address.line"
      * text = "Address"
      * type = #string
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression"
        * valueExpression.description = "City"
        * valueExpression.language = #text/fhirpath
        * valueExpression.expression = "%homeAddress.city"
      * linkId = "4.6.3"
      * definition = "http://hl7.org/fhir/StructureDefinition/Patient#Patient.address.city"
      * text = "City"
      * type = #string
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression"
        * valueExpression.description = "State"
        * valueExpression.language = #text/fhirpath
        * valueExpression.expression = "%homeAddress.state"
      * linkId = "4.6.4"
      * definition = "http://hl7.org/fhir/StructureDefinition/Patient#Patient.address.state"
      * text = "Province"
      * type = #choice
      * answerOption[+].valueCoding = $provinces#Alberta "Alberta"
      * answerOption[+].valueCoding = $provinces#BritishColumbia "British Columbia"
      * answerOption[+].valueCoding = $provinces#Manitoba "Manitoba"
      * answerOption[+].valueCoding = $provinces#NewBrunswick "New Brunswick"
      * answerOption[+].valueCoding = $provinces#NewfoundlandAndLabrador "Newfoundland and Labrador"
      * answerOption[+].valueCoding = $provinces#NovaScotia "Nova Scotia"
      * answerOption[+].valueCoding = $provinces#Ontario "Ontario"
      * answerOption[+].valueCoding = $provinces#PrinceEdwardIsland "Prince Edward Island"
      * answerOption[+].valueCoding = $provinces#Quebec "Quebec"
      * answerOption[+].valueCoding = $provinces#Saskatchewan "Saskatchewan"
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression"
        * valueExpression.description = "Postal Code"
        * valueExpression.language = #text/fhirpath
        * valueExpression.expression = "%homeAddress.postalCode"
      * linkId = "4.6.5"
      * definition = "http://hl7.org/fhir/StructureDefinition/Patient#Patient.address.postalCode"
      * text = "Postal Code"
      * type = #string


---

// File: input/fsh/examples/questionnaire-sdc-profile-example-framingham-hchd-lhc.fsh

Instance: questionnaire-sdc-profile-example-framingham-hchd-lhc
InstanceOf: SDCBaseQuestionnaire
Title: "SDC-Hard Coronary Heart Disease"
Description: "A made-up form for calculating the 10-year-risk of Hard Coronary Heart Disease. It shows how variables and calculatedExpression can be used to compute for the risk probability."
Usage: #example
* extension[+]
  * url = $questionnaire-versionAlgorithm
  * valueCoding = $version-algorithm#semver
* extension[+]
  * url = $variable
  * valueExpression
    * name = "age"
    * language = #text/fhirpath
    * expression = "item.where(linkId='/age').answer.value"
* extension[+]
  * url = $variable
  * valueExpression
    * name = "gender"
    * language = #text/fhirpath
    * expression = "item.where(linkId='/46098-0').answer.value.display"
* extension[+]
  * url = $variable
  * valueExpression
    * name = "smokesCode"
    * language = #text/fhirpath
    * expression = "item.where(linkId='/smokes').answer.value.code"
* extension[+]
  * url = $variable
  * valueExpression
    * name = "smokes"
    * language = #text/fhirpath
    * expression = "iif(%smokesCode.exists(), iif(%smokesCode = 'Y', 1, 0), {})"
* extension[+]
  * url = $variable
  * valueExpression
    * name = "systolic"
    * language = #text/fhirpath
    * expression = "item.where(linkId='/8480-6').answer.value"
* extension[+]
  * url = $variable
  * valueExpression
    * name = "tChol"
    * language = #text/fhirpath
    * expression = "item.where(linkId='/2093-3').answer.value"
* extension[+]
  * url = $variable
  * valueExpression
    * name = "hdl"
    * language = #text/fhirpath
    * expression = "item.where(linkId='/2085-9').answer.value"
* extension[+]
  * url = $variable
  * valueExpression
    * name = "antihypertCode"
    * language = #text/fhirpath
    * expression = "item.where(linkId='/antihypertensive').answer.value.code"
* extension[+]
  * url = $variable
  * valueExpression
    * name = "antihypert"
    * language = #text/fhirpath
    * expression = "iif(%antihypertCode.exists(), iif(%systolic >= 120, iif(%antihypertCode = 'Y', 1, 0), 0), {})"
* extension[+]
  * url = $variable
  * valueExpression
    * name = "allQuestionsAnswered"
    * language = #text/fhirpath
    * expression = "%age.exists() and %gender.exists() and %smokes.exists() and %systolic.exists() and %tChol.exists() and %hdl.exists() and %antihypert.exists()"
* extension[+]
  * url = $variable
  * valueExpression
    * name = "femaleOver78"
    * language = #text/fhirpath
    * expression = "iif(%allQuestionsAnswered, iif(%gender = 'Female', iif(%age>78, 1 - (0.98767).power((31.764001 * (%age.ln() - 3.9213204) + 22.465206 * (%tChol.ln() - 5.3628984) - 1.187731 * (%hdl.ln() - 4.0146369) + 2.552905 * (%systolic.ln() - 4.8376494) + 0.420251 * (%antihypert - 0.142802) + 13.07543 * (%smokes - 0.3236202) - 5.060998 * (%age.ln() * %tChol.ln() - 21.0557746) - 2.996945 * (78.ln() * %smokes - 1.2519882)).exp()), {}), {}), {})"
* extension[+]
  * url = $variable
  * valueExpression
    * name = "femaleNotOver78"
    * language = #text/fhirpath
    * expression = "iif(%allQuestionsAnswered, iif(%gender = 'Female', iif(%age<=78, 1 - (0.98767).power((31.764001 * (%age.ln() - 3.9213204) + 22.465206 * (%tChol.ln() - 5.3628984) - 1.187731  * (%hdl.ln() - 4.0146369) + 2.552905  * (%systolic.ln() - 4.8376494) + 0.420251  * (%antihypert - 0.142802) + 13.07543  * (%smokes - 0.3236202) - 5.060998  * (%age.ln() * %tChol.ln() - 21.0557746) - 2.996945  * (%age.ln() * %smokes  - 1.2519882)).exp()), {}), {}), {})"
* extension[+]
  * url = $variable
  * valueExpression
    * name = "maleOver70"
    * language = #text/fhirpath
    * expression = "iif(%allQuestionsAnswered, iif(%gender = 'Male', iif(%age>70, 1 - (0.9402).power((52.00961  * (%age.ln() - 3.8926095) + 20.014077 * (%tChol.ln() - 5.3441475) - 0.905964  * (%hdl.ln() - 3.7731132) + 1.305784  * (%systolic.ln() - 4.8618212) + 0.241549  * (%antihypert - 0.1180474) + 12.096316 * (%smokes - 0.335602) - 4.605038  * (%age.ln() * %tChol.ln() - 20.8111562) - 2.84367   * (70.ln() * %smokes  - 1.2890301) - 2.93323   * (%age.ln() * %age.ln() - 15.2144965)).exp()), {}), {}), {})"
* extension[+]
  * url = $variable
  * valueExpression
    * name = "maleNotOver70"
    * language = #text/fhirpath
    * expression = "iif(%allQuestionsAnswered, iif(%gender = 'Male', iif(%age<=70, 1 - (0.9402).power((52.00961  * (%age.ln() - 3.8926095) + 20.014077 * (%tChol.ln() - 5.3441475) - 0.905964  * (%hdl.ln() - 3.7731132) + 1.305784  * (%systolic.ln() - 4.8618212) + 0.241549  * (%antihypert - 0.1180474) + 12.096316 * (%smokes - 0.335602) - 4.605038  * (%age.ln() * %tChol.ln() - 20.8111562) - 2.84367   * (%age.ln() * %smokes  - 1.2890301) - 2.93323   * (%age.ln() * %age.ln() - 15.2144965)).exp()), {}), {}), {})"
* extension[+]
  * url = $variable
  * valueExpression
    * name = "risk"
    * language = #text/fhirpath
    * expression = "%femaleOver78 | %femaleNotOver78 | %maleOver70 | %maleNotOver70"
* url = "http://hl7.org/fhir/uv/sdc/Questionnaire/questionnaire-sdc-profile-example-framingham-hchd-lhc"
* name = "FraminghamHCHD"
* title = "Hard Coronary Heart Disease (10-year risk)"
* status = #active
* experimental = true
* subjectType = #Patient
* description = "A form for calculating the 10-year-risk of Hard Coronary Heart Disease.  The constants used in the formula match those in https://www.framinghamheartstudy.org/fhs-risk-functions/hard-coronary-heart-disease-10-year-risk/, but the actual formulas are not listed there, and so we have not been able to verify them.  However, the output of this form matches the output of a perl program (from which the formulas were taken) which matched the output of a calculator on a website, which regrettably no longer exists.  So, while this form is good enough or a demo, it should not be relied on for real purposes without first verifying its formulas or its output against some other source."
* item[+]
  * linkId = "/age"
  * code = $loinc#30525-0 "Age"
  * text = "Age (in years)"
  * type = #decimal
  * required = true
* item[+]
  * linkId = "/age_requirement_notice"
  * text = "Sorry, but the formulas are only valid for ages in the range 30 to 79."
  * type = #display
  * enableWhen[+]
    * question = "/age"
    * operator = #<
    * answerDecimal = 30
  * enableWhen[+]
    * question = "/age"
    * operator = #>
    * answerDecimal = 79
  * enableBehavior = #any
* item[+]
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs"
    * valueInteger = 1
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
    * valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
      * text = "Drop down"
  * linkId = "/46098-0"
  * code = $loinc#46098-0 "Sex"
  * text = "Gender"
  * type = #choice
  * required = true
  * answerOption[+].valueCoding = $loinc#LA2-8 "Male"
  * answerOption[+].valueCoding = $loinc#LA3-6 "Female"
* item[+]
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs"
    * valueInteger = 1
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
    * valueCodeableConcept = $questionnaire-item-control#radio-button "Radio Button"
      * text = "Radio Button"
  * linkId = "/smokes"
  * text = "Do you smoke?"
  * type = #choice
  * required = true
  * answerOption[+].valueCoding = $example#Y "Yes"
  * answerOption[+].valueCoding = $example#N "No"
* item[+]
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs"
    * valueInteger = 1
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-unit"
    * valueCoding.display = "mm[Hg]"
  * linkId = "/8480-6"
  * code = $loinc#8480-6 "Systolic blood pressure"
  * text = "Systolic blood pressure"
  * type = #decimal
  * required = true
* item[+]
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs"
    * valueInteger = 1
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-unit"
    * valueCoding.display = "mg/dL"
  * linkId = "/2093-3"
  * code = $loinc#2093-3 "Cholesterol [Mass/volume] in Serum or Plasma"
  * text = "Cholesterol [Mass/Vol]"
  * type = #decimal
  * required = true
* item[+]
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs"
    * valueInteger = 1
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-unit"
    * valueCoding.display = "mg/dL"
  * linkId = "/2085-9"
  * code = $loinc#2085-9 "Cholesterol in HDL [Mass/volume] in Serum or Plasma"
  * text = "Cholesterol in HDL [Mass/Vol]"
  * type = #decimal
  * required = true
* item[+]
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs"
    * valueInteger = 1
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
    * valueCodeableConcept = $questionnaire-item-control#radio-button "Radio Button"
      * text = "Radio Button"
  * linkId = "/antihypertensive"
  * text = "Are you taking medication for high blood pressure?"
  * type = #choice
  * required = true
  * answerOption[+].valueCoding = $example#Y "Yes"
  * answerOption[+].valueCoding = $example#N "No"
* item[+]
  * linkId = "/all_answers_required_notice"
  * text = "All answers are required before the risk probability can be computed."
  * type = #display
* item[+]
  * extension[+]
    * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression"
    * valueExpression
      * description = "HCHD risk as decimal"
      * language = #text/fhirpath
      * expression = "%risk"
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-hidden"
    * valueBoolean = true
  * linkId = "riskDecimal"
  * text = "10-year HCHD Risk Probabilily as a decimal (0 to 1)"
  * type = #decimal
  * required = false
* item[+]
  * extension
    * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression"
    * valueExpression
      * description = "HCHD risk as percentage"
      * language = #text/fhirpath
      * expression = "iif(%risk.exists(), (%risk * 100).round(2).toString() & '%', {})"
  * linkId = "riskPercentage"
  * text = "10-year HCHD Risk Probabilily"
  * type = #string
  * required = false

---

// File: input/fsh/examples/questionnaire-sdc-profile-example-hunger-vital-signs.fsh

Instance: questionnaire-sdc-profile-example-hunger-vital-signs
InstanceOf: SDCBaseQuestionnaire
Title: "SDC-Hunger Vital Sign"
Usage: #example
* extension[+]
  * url = $questionnaire-versionAlgorithm
  * valueCoding = $version-algorithm#semver
* extension[+]
  * url = $variable
  * valueExpression
    * name = "worriedAnsCode"
    * language = #text/fhirpath
    * expression = "%resource.item.where(linkId='/88122-7').answer.value.code"
* extension[+]
  * url = $variable
  * valueExpression
    * name = "ranOutAnsCode"
    * language = #text/fhirpath
    * expression = "%resource.item.where(linkId='/88123-5').answer.value.code"
* extension[+]
  * url = $variable
  * valueExpression
    * name = "riskCodes"
    * language = #text/fhirpath
    * expression = "'LA28397-0'.combine('LA6729-3')"
* extension[+]
  * url = $variable
  * valueExpression
    * name = "riskStatus"
    * language = #text/fhirpath
    * expression = "%riskCodes contains %worriedAnsCode or %riskCodes contains %ranOutAnsCode"
* extension[+]
  * url = $variable
  * valueExpression
    * name = "answeredEitherQ"
    * language = #text/fhirpath
    * expression = "%worriedAnsCode.exists() or %ranOutAnsCode.exists()"
* url = "http://hl7.org/fhir/uv/sdc/Questionnaire/questionnaire-sdc-profile-example-hunger-vital-signs"
* name = "QuestionnaireSdcProfileExampleHungerVitalSigns"
* title = "Hunger Vital Sign [HVS]"
* status = #active
* experimental = true
* subjectType = #Patient
* description = "A hunger vital signs form (showing calculatedExpression selecting a value from a list)."
* code = $loinc#88121-9 "Hunger Vital Sign [HVS]"
* item[+]
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
    * valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
      * text = "Drop down"
  * linkId = "/88122-7"
  * code = $loinc#88122-7 "Within the past 12 months we worried whether our food would run out before we got money to buy more [U.S. FSS]"
  * text = "Within the past 12Mo we worried whether our food would run out before we got money to buy more"
  * type = #choice
  * required = false
  * answerOption[+].valueCoding = $loinc#LA28397-0 "Often true"
  * answerOption[+].valueCoding = $loinc#LA6729-3 "Sometimes true"
  * answerOption[+].valueCoding = $loinc#LA28398-8 "Never true"
  * answerOption[+].valueCoding = $loinc#LA15775-2 "Don't know/refused"
* item[+]
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
    * valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
      * text = "Drop down"
  * linkId = "/88123-5"
  * code = $loinc#88123-5 "Within the past 12 months the food we bought just didn't last and we didn't have money to get more [U.S. FSS]"
  * text = "Within the past 12Mo the food we bought just didn't last and we didn't have money to get more [U.S. FSS]"
  * type = #choice
  * required = false
  * answerOption[+].valueCoding = $loinc#LA28397-0 "Often true"
  * answerOption[+].valueCoding = $loinc#LA6729-3 "Sometimes true"
  * answerOption[+].valueCoding = $loinc#LA28398-8 "Never true"
  * answerOption[+].valueCoding = $loinc#LA15775-2 "Don't know/refused"
* item[+]
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
    * valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
      * text = "Drop down"
  * extension[+]
    * url = $variable
    * valueExpression
      * name = "thisItem"
      * language = #text/fhirpath
      * expression = "%questionnaire.item.where(linkId = '/88124-3')"
  * extension[+]
    * url = $variable
    * valueExpression
      * name = "atRiskCoding"
      * language = #text/fhirpath
      * expression = "%thisItem.answerOption.value.where(code='LA19952-3')"
  * extension[+]
    * url = $variable
    * valueExpression
      * name = "noRiskCoding"
      * language = #text/fhirpath
      * expression = "%thisItem.answerOption.value.where(code='LA19983-8')"
  * extension[+]
    * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression"
    * valueExpression
      * description = "risk determination"
      * language = #text/fhirpath
      * expression = "iif(%answeredEitherQ, iif(%riskStatus, %atRiskCoding, %noRiskCoding), {})"
  * linkId = "/88124-3"
  * code = $loinc#88124-3 "Food insecurity risk [HVS]"
  * text = "Food insecurity risk"
  * type = #choice
  * required = false
  * readOnly = true
  * answerOption[+].valueCoding = $loinc#LA19952-3 "At risk"
  * answerOption[+].valueCoding = $loinc#LA19983-8 "No risk"
  * item
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
      * valueCodeableConcept = $questionnaire-item-control#help "Help-Button"
        * text = "Help-Button"
    * linkId = "/88124-3-help"
    * text = "An answer of \"often true\" or \"sometimes true\" to either or both of the Hunger Vital Sign™ questions identifies a patient as at risk for food insecurity (FI)."
    * type = #display

---

// File: input/fsh/examples/questionnaire-sdc-profile-example-image-options.fsh

Instance: questionnaire-sdc-profile-example-image-options
InstanceOf: SDCQuestionnaireRender
Title: "SDC-Example with Image Options"
Description: "Example questionnaire that shows how to display answer options as images using the rendering-xhtml extension."
Usage: #example
* extension[$questionnaire-versionAlgorithm].valueCoding = $version-algorithm#semver
* contained[+] = okImage
* contained[+] = happyImage
* url = "http://hl7.org/fhir/uv/sdc/questionnaire-sdc-profile-example-image-options"
* name = "SDCExampleWithImageOptions"
* status = #active
* item
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation"
    * valueCode = #horizontal
  * linkId = "1.0"
  * text = "How are you feeling today?"
  * type = #choice
  * answerOption[+].valueCoding = $example#sad "Sad"
    * display.extension
      * url = "http://hl7.org/fhir/StructureDefinition/rendering-xhtml"
      * valueString = "<img src='data:image/png;base64,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‘>"
  * answerOption[+].valueCoding = $example#ok "OK"
    * display.extension
      * url = "http://hl7.org/fhir/StructureDefinition/rendering-xhtml"
      * valueString = "<img src='#okImage'>"
        * extension
          * url = "http://hl7.org/fhir/StructureDefinition/referencesContained"
          * valueReference = Reference(okImage)
  * answerOption[+].valueCoding = $example#happy "Happy"
    * display.extension
      * url = "http://hl7.org/fhir/StructureDefinition/rendering-xhtml"
      * valueString = "<img src='#happyImage'>"
        * extension
          * url = "http://hl7.org/fhir/StructureDefinition/referencesContained"
          * valueReference = Reference(happyImage)

Instance: okImage
InstanceOf: Binary
Usage: #inline
* contentType = #image/png
* data = "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"


Instance: happyImage
InstanceOf: Binary
Usage: #inline
* contentType = #image/png
* data = "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"

---

// File: input/fsh/examples/questionnaire-sdc-profile-example-item-weight.fsh

Instance: questionnaire-sdc-profile-example-item-weight
InstanceOf: SDCQuestionnaireBehave
Title: "SDC-Example using itemWeight and constraint"
Description: "Example on how to use item weight and contraints in a Questionnaire."
Usage: #example
* extension[$questionnaire-versionAlgorithm].valueCoding = $version-algorithm#semver
* contained = LL358-3
* url = "http://hl7.org/fhir/uv/sdc/Questionnaire/questionnaire-sdc-profile-example-item-weight"
* name = "SDCExampleUsingItemWeight"
* status = #active
* item
  * extension
    * extension[+]
      * url = "key"
      * valueId = "contraint-1"
    * extension[+]
      * url = "requirements"
      * valueMarkdown = "At least three questions must be answered to have a meaningful total."
    * extension[+]
      * url = "severity"
      * valueCode = #warning
    * extension[+]
      * url = "expression"
      * valueExpression
        * language = #text/fhirpath
        * expression = "%resource.repeat(item).where(linkId='1.0').item.where(answer.hasValue()).count() >= 3"
    * extension[+]
      * url = "human"
      * valueString = "You should answer at least three questions."
    * url = "http://hl7.org/fhir/StructureDefinition/targetConstraint"
  * linkId = "1.0"
  * text = "Over the last 2 weeks, how often have you been bothered by any of the following problems?"
  * type = #group
// Todo: Create Ruleset for item (when optional argument functionality is released)
  * item[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation"
      * valueCode = #horizontal
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
      * valueCodeableConcept = $questionnaire-item-control#radio-button "Radio Button"
        * text = "A control where choices are listed with a button beside them. The button can be toggled to select or de-select a given choice. Selecting one item deselects all others."
    * linkId = "1.1"
    * text = "1. Little interest or pleasure in doing things"
    * type = #choice
    * answerValueSet = "#LL358-3"
  * item[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation"
      * valueCode = #horizontal
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
      * valueCodeableConcept = $questionnaire-item-control#radio-button "Radio Button"
        * text = "A control where choices are listed with a button beside them. The button can be toggled to select or de-select a given choice. Selecting one item deselects all others."
    * linkId = "1.2"
    * text = "2. Feeling down, depressed, or hopeless"
    * type = #choice
    * answerValueSet = "#LL358-3"
  * item[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation"
      * valueCode = #horizontal
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
      * valueCodeableConcept = $questionnaire-item-control#radio-button "Radio Button"
        * text = "A control where choices are listed with a button beside them. The button can be toggled to select or de-select a given choice. Selecting one item deselects all others."
    * linkId = "1.3"
    * text = "3. Trouble falling or staying asleep, or sleeping too much"
    * type = #choice
    * answerValueSet = "#LL358-3"
  * item[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation"
      * valueCode = #horizontal
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
      * valueCodeableConcept = $questionnaire-item-control#radio-button "Radio Button"
        * text = "A control where choices are listed with a button beside them. The button can be toggled to select or de-select a given choice. Selecting one item deselects all others."
    * linkId = "1.4"
    * text = "4. Feeling tired or having little energy"
    * type = #choice
    * answerValueSet = "#LL358-3"
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression"
      * valueExpression
        * description = "Total score"
        * language = #text/fhirpath
        * expression = "%resource.repeat(item).where(linkId='1.0').item.answer.value.weight().aggregate($this + $total, 0)"
    * linkId = "6"
    * text = "Total Score:"
    * type = #integer

Instance: LL358-3
InstanceOf: ValueSet
Usage: #inline
* url = "http://example.org/ValueSet/LL358-3"
* name = "TimingOfHarmAssessment"
* title = "Timing of harm assessment [AHRQ]"
* status = #active
* description = "The answer list for timing of harm assessment"
* copyright = "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use"
* compose.include
  * system = "http://loinc.org"
  * concept[+]
    * code = #LA6568-5
    * display = "Not at all"
  * concept[+]
    * code = #LA6569-3
    * display = "Several days"
  * concept[+]
    * code = #LA6570-1
    * display = "More than half the days"
  * concept[+]
    * code = #LA6571-9
    * display = "Nearly every day"

---

// File: input/fsh/examples/questionnaire-sdc-profile-example-loinc.fsh

Instance: questionnaire-sdc-profile-example-loinc
InstanceOf: SDCBaseQuestionnaire
Title: "SDC-LOINC AHRQ"
Description: "LOINC perspective on the AHRQ form found in the SDC - Combination set of questionnaires"
Usage: #example
* contained[+] = ll2654-3
* contained[+] = ll2655-0
* contained[+] = ll2657-6
* contained[+] = ll2659-2
* contained[+] = ll2660-0
* contained[+] = ll2661-8
* contained[+] = ll2662-6
* contained[+] = ll2663-4
* contained[+] = ll2664-2
* contained[+] = ll2665-9
* contained[+] = ll2817-6
* contained[+] = ll2668-3
* contained[+] = ll2669-1
* contained[+] = ll2828-3
* contained[+] = ll2682-4
* extension[+]
  * url = $questionnaire-versionAlgorithm
  * valueCoding = $version-algorithm#semver
* extension[+]
  * url = "http://hl7.org/fhir/StructureDefinition/preferredTerminologyServer"
  * valueUrl = "https://tx.fhir.org/r4"
* url = "http://hl7.org/fhir/uv/sdc/Questionnaire/questionnaire-sdc-profile-example-loinc"
* identifier
  * system = "http://loinc.org/vs"
  * value = "74080-3"
* name = "MedicationorOtherSubstance"
* title = "Medication or Other Substance"
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/rendering-style"
    * valueString = "color:#0000FF"
* status = #active
* subjectType = #Patient
* date = "2012-04-01"
* publisher = "Agency for Healthcare Research and Quality (AHRQ)"
* item[+]
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
    * valueCodeableConcept = $questionnaire-item-control#header
  * linkId = "Medication/header"
  * type = #group
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-hidden"
      * valueBoolean = true
    * linkId = "0"
    * text = "Form ID:"
    * type = #string
    * required = true
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/minLength"
      * valueInteger = 3
    * linkId = "74080-3/74081-1"
    * text = "Event ID:"
    * type = #string
    * required = true
  * item[+]
    * linkId = "74080-3/30947-6"
    * text = "Initial Report Date (HERF Q1)"
    * type = #string
    * required = true
* item[+]
  * linkId = "Medication/SEC00"
  * text = "Medication or Other Substance"
  * type = #group
  * item[+]
    * linkId = "Medication/SEC00.0"
    * text = "Use this form to report any patient safety event or unsafe condition involving a substance such as a medications, biological products, nutritional products, expressed human breast milk, medical gases, or contrast media. Do not complete this form if the event involves appropriateness of therapeutic choice or decision making (e.g., physician decision to prescribe medication despite known drug-drug interaction). If the event involves a device, please also complete the Device or Medical/Surgical Supply including Health Information Technology (HIT) form. Narrative detail can be captured on the Healthcare Event Reporting Form (HERF)."
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/rendering-xhtml"
        * valueString = "Use this form to report any patient safety event or unsafe condition involving a substance such as a medications, biological products, nutritional products, expressed human breast milk, medical gases, or contrast media. Do not complete this form if the event involves appropriateness of therapeutic choice or decision making (e.g., physician decision to prescribe medication despite known drug-drug interaction). If the event involves a device, please also complete the Device or Medical/Surgical Supply including Health Information Technology (HIT) form. Narrative detail can be captured on the Healthcare Event Reporting Form (HERF)."
    * type = #display
  * item[+]
    * linkId = "Medication/SEC01/74080-3"
    * type = #group
    * required = true
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/minLength"
        * valueInteger = 1
      * linkId = "74080-3/74076-1"
      * definition = "http://loinc.org/74076-1"
      * prefix = "1."
      * text = "What type of medication/substance was involved?"
      * type = #choice
      * required = true
      * answerValueSet = "#ll2654-3"
      * item[+]
        * extension
          * url = "http://hl7.org/fhir/StructureDefinition/minLength"
          * valueInteger = 7
        * linkId = "74080-3/74075-3"
        * definition = "http://loinc.org/vs/74075-3"
        * prefix = "2."
        * text = "What type of medication?"
        * type = #choice
        * enableWhen
          * question = "74080-3/74076-1"
          * operator = #=
          * answerCoding = $loinc#LA20271-5 "Medications"
        * required = true
        * answerValueSet = "#ll2655-0"
        * item
          * extension
            * url = "http://hl7.org/fhir/StructureDefinition/minLength"
            * valueInteger = 0
          * linkId = "74080-3/74077-9-q"
          * definition = "http://loinc.org/74077-9"
          * prefix = "3."
          * text = "Please list all ingredients:"
          * type = #string
          * enableWhen
            * question = "74080-3/74075-3"
            * operator = #=
            * answerCoding = $loinc#LA20298-8 "Compounded preparations"
          * required = true
          * repeats = true
      * item[+]
        * extension
          * url = "http://hl7.org/fhir/StructureDefinition/minLength"
          * valueInteger = 8
        * linkId = "74080-3/74074-6"
        * prefix = "4."
        * text = "What type of biological product?"
        * type = #choice
        * enableWhen
          * question = "74080-3/74076-1"
          * operator = #=
          * answerCoding = $loinc#LA20335-8 "Biological products"
        * answerValueSet = "#ll2657-6"
        * item
          * linkId = "74080-3/30959-1"
          * prefix = "5."
          * text = "What was the lot number of the vaccine?"
          * type = #string
          * enableWhen
            * question = "74080-3/74074-6"
            * operator = #=
            * answerCoding = $loinc#LA20283-0 "Vaccines"
          * required = true
      * item[+]
        * linkId = "74080-3/74073-8"
        * prefix = "6."
        * text = "What type of nutritional product?"
        * type = #choice
        * enableWhen
          * question = "74080-3/74076-1"
          * operator = #=
          * answerCoding = $loinc#LA20336-6 "Nutritional products"
        * required = true
        * answerValueSet = "#ll2659-2"
        * item
          * linkId = "74080-3/74073-8/Other/Specify"
          * type = #string
          * enableWhen
            * question = "74080-3/74073-8"
            * operator = #=
            * answerCoding = $loinc#LA20318-4 "Other: PLEASE SPECIFY"
          * required = true
      * item[+]
        * linkId = "74080-3/74076-1/Other/Specify"
        * type = #string
        * enableWhen
          * question = "74080-3/74076-1"
          * operator = #=
          * answerCoding = $loinc#LA20343-2 "Other substance: PLEASE SPECIFY"
        * required = true
    * item[+]
      * linkId = "74080-3/74072-0"
      * prefix = "7."
      * text = "Which of the following best characterizes the event?"
      * type = #choice
      * enableWhen[+]
        * question = "74080-3/74076-1"
        * operator = #!=
        * answerCoding = $loinc#LA20340-8 "Radiopharmaceuticals"
      * enableWhen[+]
        * question = "74080-3/74076-1"
        * operator = #!=
        * answerCoding = $loinc#LA20341-6 "Patient food (not suspected in drug-food interactions)"
      * enableWhen[+]
        * question = "74080-3/74076-1"
        * operator = #!=
        * answerCoding = $loinc#LA20342-4 "Drug-drug, drug-food, or adverse drug reaction as a result of a prescription and/or administration of a drug and/or food prior to admission"
      * enableBehavior = #all
      * required = true
      * answerValueSet = "#ll2660-0"
    * item[+]
      * linkId = "74080-3/74071-2"
      * prefix = "8."
      * text = "What was the incorrect action?"
      * type = #choice
      * enableWhen
        * question = "74080-3/74072-0"
        * operator = #=
        * answerCoding = $loinc#LA20275-6 "Incorrect action (process failure or error) (e.g., such as administering overdose or incorrect medication)"
      * answerValueSet = "#ll2661-8"
      * item[+]
        * linkId = "74080-3/74070-4"
        * prefix = "9."
        * text = "Which best describes the incorrect dose(s)?"
        * type = #choice
        * enableWhen
          * question = "74080-3/74071-2"
          * operator = #=
          * answerCoding = $loinc#LA20303-6 "Incorrect dose(s)"
        * required = true
        * answerValueSet = "#ll2662-6"
      * item[+]
        * linkId = "Medication/74069-6"
        * prefix = "10."
        * text = "Which best describes the incorrect timing?"
        * type = #choice
        * enableWhen
          * question = "74080-3/74071-2"
          * operator = #=
          * answerCoding = $loinc#LA20305-1 "Incorrect timing"
        * required = true
        * answerValueSet = "#ll2663-4"
      * item[+]
        * linkId = "74080-3/74068-8"
        * prefix = "11."
        * text = "Which best describes the incorrect rate?"
        * type = #choice
        * enableWhen
          * question = "74080-3/74071-2"
          * operator = #=
          * answerCoding = $loinc#LA20306-9 "Incorrect rate"
        * required = true
        * answerValueSet = "#ll2664-2"
      * item[+]
        * linkId = "Medication/74067-0"
        * prefix = "12."
        * text = "Which best describes the incorrect strength or concentration?"
        * type = #choice
        * enableWhen
          * question = "74080-3/74071-2"
          * operator = #=
          * answerCoding = $loinc#LA20309-3 "Incorrect strength or concentration"
        * required = true
        * answerValueSet = "#ll2665-9"
      * item[+]
        * linkId = "Medication/74066-2"
        * prefix = "13."
        * text = "What was the expiration date?"
        * type = #string
        * enableWhen
          * question = "74080-3/74071-2"
          * operator = #=
          * answerCoding = $loinc#LA20311-9 "Expired or deteriorated medication/substance"
        * required = true
      * item[+]
        * linkId = "Medication/74065-4"
        * prefix = "14."
        * text = "Was there a documented history of allergies or sensitivities to the medication/substance administered?"
        * type = #choice
        * enableWhen
          * question = "74080-3/74071-2"
          * operator = #=
          * answerCoding = $loinc#LA20312-7 "Medication/substance that is known to be an allergen to the patient"
        * required = true
        * answerValueSet = "#ll2817-6"
      * item[+]
        * linkId = "Medication/74064-7"
        * prefix = "15."
        * text = "What was the contraindication (potential or actual interaction)?"
        * type = #choice
        * enableWhen
          * question = "74080-3/74071-2"
          * operator = #=
          * answerCoding = $loinc#LA20345-7 "Medication/substance that is known to be contraindicated for the patient"
        * required = true
        * answerValueSet = "#ll2668-3"
        * item
          * linkId = "Medication/74064-7/Other/Specify"
          * type = #string
          * enableWhen
            * question = "Medication/74064-7"
            * operator = #=
            * answerCoding = $loinc#LA20318-4 "Other: PLEASE SPECIFY"
          * required = true
      * item[+]
        * linkId = "74080-3/74071-2/Other/Specify"
        * type = #string
        * enableWhen
          * question = "74080-3/74071-2"
          * operator = #=
          * answerCoding = $loinc#LA20318-4 "Other: PLEASE SPECIFY"
        * required = true
    * item[+]
      * linkId = "74080-3/74063-9"
      * prefix = "16."
      * text = "At what stage in the process did the event originate, regardless of the stage at which it was discovered?"
      * type = #choice
      * enableWhen
        * question = "74080-3/74072-0"
        * operator = #=
        * answerCoding = $loinc#LA20275-6 "Incorrect action (process failure or error) (e.g., such as administering overdose or incorrect medication)"
      * required = true
      * answerValueSet = "#ll2669-1"
      * item
        * linkId = "74080-3/74063-9/Other/Specify"
        * type = #string
        * enableWhen
          * question = "74080-3/74063-9"
          * operator = #=
          * answerCoding = $loinc#LA20318-4 "Other: PLEASE SPECIFY"
        * required = true
  * item[+]
    * linkId = "74080-3/74078-7.0"
    * text = "Please provide the following medication details for any medications or other substances directly involved in the event."
    * type = #display
  * item[+]
    * linkId = "74080-3/74078-x"
    * text = "For an near miss, omit question 27"
    * type = #display
    * enableWhen
      * question = "74080-3/74072-0"
      * operator = #!=
      * answerCoding = $loinc#LA20314-3 "Unsafe condition"
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs"
      * valueInteger = 5
    * linkId = "74080-3/74078-7"
    * type = #group
    * enableWhen[+]
      * question = "74080-3/74072-0"
      * operator = #!=
      * answerCoding = $loinc#LA20315-0 "Adverse reaction in patient to the administered substance without any apparent incorrect action"
    * enableWhen[+]
      * question = "74080-3/74072-0"
      * operator = #!=
      * answerCoding = $loinc#LA4489-6 "Unknown"
    * enableWhen[+]
      * question = "74080-3/74076-1"
      * operator = #!=
      * answerCoding = $loinc#LA20337-4 "Expressed human breast milk"
    * enableWhen[+]
      * question = "74080-3/74075-3"
      * operator = #!=
      * answerCoding = $loinc#LA20298-8 "Compounded preparations"
    * enableBehavior = #all
    * repeats = true
    * required = true
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/minLength"
        * valueInteger = 0
      * linkId = "74080-3/74078-7/74062-1"
      * prefix = "17."
      * text = "Generic name or investigational drug name"
      * type = #string
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/minLength"
        * valueInteger = 0
      * linkId = "74080-3/74078-7/74061-3"
      * prefix = "18."
      * text = "Ingredient RXCUI (if known)"
      * type = #string
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/minLength"
        * valueInteger = 0
      * linkId = "74080-3/74078-7/74060-5"
      * prefix = "19."
      * text = "Brand name (if known)"
      * type = #string
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/minLength"
        * valueInteger = 0
      * linkId = "74080-3/74078-7/74059-7"
      * prefix = "20."
      * text = "Brand name RXCUI (if known)"
      * type = #string
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/minLength"
        * valueInteger = 0
      * linkId = "74080-3/74078-7/74058-9"
      * prefix = "21."
      * text = "Manufacturer (if known)"
      * type = #string
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/minLength"
        * valueInteger = 0
      * linkId = "74080-3/74078-7/74057-1"
      * prefix = "22."
      * text = "Strength or concentration of product"
      * type = #string
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/minLength"
        * valueInteger = 0
      * linkId = "74080-3/74078-7/74056-3"
      * prefix = "23."
      * text = "Clinical drug component RXCUI (if known)"
      * type = #string
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/minLength"
        * valueInteger = 0
      * linkId = "74080-3/74078-7/74055-5"
      * prefix = "24."
      * text = "Dosage form of Product"
      * type = #string
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/minLength"
        * valueInteger = 0
      * linkId = "74080-3/74078-7/74054-8"
      * prefix = "25."
      * text = "Dose form RXCUI (if known)"
      * type = #string
    * item[+]
      * linkId = "74080-3/74078-7/74053-0"
      * prefix = "26."
      * text = "Was this medication/substance prescribed for this patient?"
      * type = #choice
      * enableWhen
        * question = "74080-3/74072-0"
        * operator = #!=
        * answerCoding = $loinc#LA20314-3 "Unsafe condition"
      * required = true
      * answerValueSet = "#ll2828-3"
    * item[+]
      * linkId = "Medication/74052-2"
      * prefix = "27."
      * text = "Was this medication/substance given to this patient?"
      * type = #choice
      * enableWhen
        * question = "74080-3/74072-0"
        * operator = #!=
        * answerCoding = $loinc#LA20314-3 "Unsafe condition"
      * required = true
      * answerValueSet = "#ll2828-3"
  * item[+]
    * linkId = "Medication/SEC03"
    * type = #group
    * enableWhen
      * question = "74080-3/74072-0"
      * operator = #=
      * answerCoding = $loinc#LA20304-4 "Incorrect route of administration"
    * item[+]
      * linkId = "74080-3/74051-4"
      * prefix = "28."
      * text = "What was the intended route of administration?"
      * type = #choice
      * required = true
      * answerValueSet = "#ll2682-4"
      * item
        * linkId = "74080-3/74051-4/Other/Specify"
        * type = #string
        * enableWhen
          * question = "74080-3/74051-4"
          * operator = #=
          * answerCoding = $loinc#LA20318-4 "Other: PLEASE SPECIFY"
        * required = true
    * item[+]
      * linkId = "74080-3/74050-6"
      * prefix = "29."
      * text = "What was the actual route of administration (attempted or completed)?"
      * type = #choice
      * required = true
      * answerValueSet = "#ll2682-4"
      * item
        * linkId = "74080-3/74050-6/Other/Specify"
        * type = #string
        * enableWhen
          * question = "74080-3/74050-6"
          * operator = #=
          * answerCoding = $loinc#LA20318-4 "Other: PLEASE SPECIFY"
        * required = true
  * item[+]
    * linkId = "Medication/SEC04"
    * text = "Thank you for completing these questions."
    * type = #group
    * item
      * linkId = "Medication/SEC04.0"
      * text = "OMB No. 0935-0143 Exp. Date 10/31/2014 Public reporting burden for the collection of information is estimated to average 10 minutes per response. An agency may not conduct or sponsor, and a person is not required to respond to, a collection of information unless it displays a currently valid OMB control number. Send comments regarding this burden estimate or any other aspect of this collection of information, including suggestions for reducing this burden, to: AHRQ Reports Clearance Officer, Attention: PRA, Paperwork Reduction Project (0935-0143), AHRQ, 540 Gaither Road, Room #5036, Rockville, MD 20850."
      * type = #display
* item[+]
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-hidden"
    * valueBoolean = true
  * linkId = "Reporting"
  * text = "Reporting information"
  * type = #group
  * item[+]
    * linkId = "Reporting/who"
    * text = "Reported by:"
    * type = #string
  * item[+]
    * linkId = "Reporting/when"
    * text = "Reported date:"
    * type = #date
* item[+]
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
    * valueCodeableConcept = $questionnaire-item-control#footer
  * linkId = "Medication/footer"
  * type = #group
  * item
    * linkId = "Medication/footer.0"
    * text = "AHRQ Common Formats - Hospital Version 1.2 - 2012 Medication or Other Substance"
    * type = #display

Instance: ll2654-3
InstanceOf: ValueSet
Usage: #inline
* url = "http://hl7.org/fhir/uv/sdc/ValueSet/LL2654-3"
* name = "AhrqMedicationQ1"
* title = "AHRQ_Medication_Q1"
* status = #active
* description = "The answer list for question 1 on the AHRQ \"Medication or Other Substance\" form"
* copyright = "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use"
* compose.include
  * system = "http://loinc.org"
  * concept[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder"
      * valueInteger = 1
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "a."
    * code = #LA20271-5
    * display = "Medications"
  * concept[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder"
      * valueInteger = 2
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "b."
    * code = #LA20335-8
    * display = "Biological products"
  * concept[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder"
      * valueInteger = 3
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "c."
    * code = #LA20336-6
    * display = "Nutritional products"
  * concept[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder"
      * valueInteger = 4
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "d."
    * code = #LA20337-4
    * display = "Expressed human breast milk"
  * concept[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder"
      * valueInteger = 5
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "e."
    * code = #LA20338-2
    * display = "Medical gases (e.g., oxygen, nitrogen, nitrous oxide)"
  * concept[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder"
      * valueInteger = 6
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "f."
    * code = #LA20339-0
    * display = "Contrast media"
  * concept[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder"
      * valueInteger = 7
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "g."
    * code = #LA20340-8
    * display = "Radiopharmaceuticals"
  * concept[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder"
      * valueInteger = 8
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "h."
    * code = #LA20341-6
    * display = "Patient food (not suspected in drug-food interactions)"
  * concept[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder"
      * valueInteger = 9
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "i."
    * code = #LA20342-4
    * display = "Drug-drug, drug-food, or adverse drug reaction as a result of a prescription and/or administration of a drug and/or food prior to admission"
  * concept[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder"
      * valueInteger = 10
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "j."
    * code = #LA20343-2
    * display = "Other substance: PLEASE SPECIFY"

Instance: ll2655-0
InstanceOf: ValueSet
Usage: #inline
* url = "http://example.org/ValueSet/ll2655-0"
* name = "AhrqMedicationQ2"
* title = "AHRQ_Medication_Q2"
* status = #active
* description = "The answer list for question 2 on the AHRQ \"Medication or Other Substance\" form"
* copyright = "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use"
* compose.include
  * system = "http://loinc.org"
  * concept[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder"
      * valueInteger = 1
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "a."
    * code = #LA20278-0
    * display = "Prescription or over-the-counter (including herbal supplements)"
  * concept[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder"
      * valueInteger = 2
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "b."
    * code = #LA20298-8
    * display = "Compounded preparations"
  * concept[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder"
      * valueInteger = 3
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "c."
    * code = #LA20299-6
    * display = "Investigational drugs"
  * concept[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder"
      * valueInteger = 4
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "d."
    * code = #LA4489-6
    * display = "Unknown"

Instance: ll2657-6
InstanceOf: ValueSet
Usage: #inline
* name = "AhrqMedicationQ4"
* title = "AHRQ_Medication_Q4"
* status = #active
* description = "The answer list for question 4 on the AHRQ \"Medication or Other Substance\" form"
* copyright = "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use"
* compose.include
  * system = "http://loinc.org"
  * concept[+]
    * code = #LA20283-0 
    * display = "Vaccines"
  * concept[+]
    * code = #LA20287-1 
    * display = "Other biological products (e.g., thrombolytic)"

Instance: ll2659-2
InstanceOf: ValueSet
Usage: #inline
* url = "http://example.org/ValueSet/ll2659-2"
* name = "AhrqMedicationQ6"
* title = "AHRQ_Medication_Q6"
* status = #active
* description = "The answer list for question 6 on the AHRQ \"Medication or Other Substance\" form"
* copyright = "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use"
* compose.include
  * system = "http://loinc.org"
  * concept[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder"
      * valueInteger = 1
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "a."
    * code = #LA20273-1
    * display = "Dietary supplements (other than vitamins or minerals)"
  * concept[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder"
      * valueInteger = 2
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "b."
    * code = #LA16117-6
    * display = "Vitamins or minerals"
  * concept[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder"
      * valueInteger = 3
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "c."
    * code = #LA20320-0
    * display = "Enteral nutritional products, including infant formula"
  * concept[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder"
      * valueInteger = 4
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "d."
    * code = #LA20321-8
    * display = "Parenteral nutritional products"
  * concept[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder"
      * valueInteger = 5
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "e."
    * code = #LA20318-4
    * display = "Other: PLEASE SPECIFY"

Instance: ll2660-0
InstanceOf: ValueSet
Usage: #inline
* url = "http://example.org/ValueSet/ll2660-0"
* name = "AHRQMedicationQ7"
* title = "AHRQ_Medication_Q7"
* status = #active
* description = "The answer list for question 7 on the AHRQ 'Medication or Other Substance' form"
* copyright = "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use"
* compose.include
  * system = "http://loinc.org"
  * concept[+]
    * code = #LA20275-6
    * display = "Incorrect action (process failure or error) (e.g., such as administering overdose or incorrect medication)"
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/rendering-xhtml"
        * valueString = "Incorrect action (process failure or error) (e.g., such as administering overdose or incorrect medication)"
  * concept[+]
    * code = #LA20314-3
    * display = "Unsafe condition"
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/rendering-style"
        * valueString = "color:green"
  * concept[+]
    * code = #LA20315-0
    * display = "Adverse reaction in patient to the administered substance without any apparent incorrect action"
  * concept[+]
    * code = #LA4489-6
    * display = "Unknown"

Instance: ll2661-8
InstanceOf: ValueSet
Usage: #inline
* name = "AHRQMedicationQ8"
* title = "AHRQ_Medication_Q8"
* status = #active
* description = "The answer list for question 8 on the AHRQ 'Medication or Other Substance' form"
* copyright = "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use"
* compose.include
  * system = "http://loinc.org"
  * concept[+].code = #LA20276-4 
  * concept[=].display = "Incorrect patient"
  * concept[+].code = #LA20302-8 
  * concept[=].display = "Incorrect medication/substance"
  * concept[+].code = #LA20303-6 
  * concept[=].display = "Incorrect dose(s)"
  * concept[+].code = #LA20304-4 
  * concept[=].display = "Incorrect route of administration"
  * concept[+].code = #LA20305-1 
  * concept[=].display = "Incorrect timing"
  * concept[+].code = #LA20306-9 
  * concept[=].display = "Incorrect rate"
  * concept[+].code = #LA20307-7 
  * concept[=].display = "Incorrect duration of administration or course of therapy"
  * concept[+].code = #LA20308-5 
  * concept[=].display = "Incorrect dosage form (e.g., sustained release instead of immediate release)"
  * concept[+].code = #LA20309-3 
  * concept[=].display = "Incorrect strength or concentration"
  * concept[+].code = #LA20310-1 
  * concept[=].display = "Incorrect preparation, including inappropriate cutting of tablets, error in compounding, mixing, etc."
  * concept[+].code = #LA20311-9 
  * concept[=].display = "Expired or deteriorated medication/substance"
  * concept[+].code = #LA20312-7 
  * concept[=].display = "Medication/substance that is known to be an allergen to the patient"
  * concept[+].code = #LA20345-7 
  * concept[=].display = "Medication/substance that is known to be contraindicated for the patient"
  * concept[+].code = #LA20313-5 
  * concept[=].display = "Incorrect patient/family action (e.g., self-administration error)"
  * concept[+].code = #LA20318-4 
  * concept[=].display = "Other: PLEASE SPECIFY"

Instance: ll2662-6
InstanceOf: ValueSet
Usage: #inline
* name = "AHRQMedicationQ9"
* title = "AHRQ_Medication_Q9"
* status = #active
* description = "The answer list for question 9 on the AHRQ 'Medication or Other Substance' form"
* copyright = "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use"
* compose.include
  * system = "http://loinc.org"
  * concept[+].code = #LA20277-2 
  * concept[=].display = "Overdose"
  * concept[+].code = #LA20300-2 
  * concept[=].display = "Underdose"
  * concept[+].code = #LA20301-0 
  * concept[=].display = "Missed or omitted dose"
  * concept[+].code = #LA7271-5 
  * concept[=].display = "Extra dose"
  * concept[+].code = #LA4489-6 
  * concept[=].display = "Unknown"

Instance: ll2663-4
InstanceOf: ValueSet
Usage: #inline
* name = "AHRQMedicationQ10"
* title = "AHRQ_Medication_Q10"
* status = #active
* description = "The answer list for question 10 on the AHRQ 'Medication or Other Substance' form"
* copyright = "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use"
* compose.include
  * system = "http://loinc.org"
  * concept[+].code = #LA20280-6 
  * concept[=].display = "Too early"
  * concept[+].code = #LA20290-5 
  * concept[=].display = "Too late"
  * concept[+].code = #LA4489-6 
  * concept[=].display = "Unknown"

Instance: ll2664-2
InstanceOf: ValueSet
Usage: #inline
* name = "AHRQMedicationQ11"
* title = "AHRQ_Medication_Q11"
* status = #active
* description = "The answer list for question 11 on the AHRQ 'Medication or Other Substance' form"
* copyright = "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use"
* compose.include
  * system = "http://loinc.org"
  * concept[+].code = #LA20282-2 
  * concept[=].display = "Too quickly"
  * concept[+].code = #LA20288-9 
  * concept[=].display = "Too slowly"
  * concept[+].code = #LA4489-6 
  * concept[=].display = "Unknown"

Instance: ll2665-9
InstanceOf: ValueSet
Usage: #inline
* name = "AHRQMedicationQ12"
* title = "AHRQ_Medication_Q12"
* status = #active
* description = "The answer list for question 12 on the AHRQ 'Medication or Other Substance' form"
* copyright = "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use"
* compose.include
  * system = "http://loinc.org"
  * concept[+].code = #LA20281-4 
  * concept[=].display = "Too high"
  * concept[+].code = #LA20289-7 
  * concept[=].display = "Too low"
  * concept[+].code = #LA4489-6 
  * concept[=].display = "Unknown"

Instance: ll2668-3
InstanceOf: ValueSet
Usage: #inline
* name = "AHRQMedicationQ15"
* title = "AHRQ_Medication_Q15"
* status = #active
* description = "The answer list for question 15 on the AHRQ 'Medication or Other Substance' form"
* copyright = "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use"
* compose.include
  * system = "http://loinc.org"
  * concept[+].code = #LA20274-9 
  * concept[=].display = "Drug-drug"
  * concept[+].code = #LA20316-8 
  * concept[=].display = "Drug-food"
  * concept[+].code = #LA20317-6 
  * concept[=].display = "Drug-disease"
  * concept[+].code = #LA20318-4 
  * concept[=].display = "Other: PLEASE SPECIFY"

Instance: ll2669-1
InstanceOf: ValueSet
Usage: #inline
* name = "AHRQMedicationQ16"
* title = "AHRQ_Medication_Q16"
* status = #active
* description = "The answer list for question 16 on the AHRQ 'Medication or Other Substance' form"
* copyright = "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use"
* compose.include
  * system = "http://loinc.org"
  * concept[+].code = #LA20279-8 
  * concept[=].display = "Purchasing"
  * concept[+].code = #LA20291-3 
  * concept[=].display = "Storing"
  * concept[+].code = #LA20292-1 
  * concept[=].display = "Prescribing/ordering"
  * concept[+].code = #LA20293-9 
  * concept[=].display = "Transcribing"
  * concept[+].code = #LA20294-7 
  * concept[=].display = "Preparing"
  * concept[+].code = #LA20295-4 
  * concept[=].display = "Dispensing"
  * concept[+].code = #LA20296-2 
  * concept[=].display = "Administering"
  * concept[+].code = #LA20297-0 
  * concept[=].display = "Monitoring"
  * concept[+].code = #LA4489-6 
  * concept[=].display = "Unknown"
  * concept[+].code = #LA20318-4 
  * concept[=].display = "Other: PLEASE SPECIFY"

Instance: ll2682-4
InstanceOf: ValueSet
Usage: #inline
* name = "AHRQMedicationQ28Q29"
* title = "AHRQ_Medication_Q28_Q29"
* status = #active
* description = "The answer list for questions 28 and 29 on the AHRQ 'Medication or Other Substance' form"
* copyright = "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use"
* compose.include
  * system = "http://loinc.org"
  * concept[+].code = #LA20272-3 
  * concept[=].display = "Cutaneous, topical application, including ointment, spray, patch"
  * concept[+].code = #LA9451-1 
  * concept[=].display = "Subcutaneous"
  * concept[+].code = #LA9444-6 
  * concept[=].display = "Ophthalmic"
  * concept[+].code = #LA20324-2 
  * concept[=].display = "Oral, including sublingual or buccal"
  * concept[+].code = #LA9445-3 
  * concept[=].display = "Otic"
  * concept[+].code = #LA9263-0 
  * concept[=].display = "Nasal"
  * concept[+].code = #LA9427-1 
  * concept[=].display = "Inhalation"
  * concept[+].code = #LA9437-0 
  * concept[=].display = "Intravenous"
  * concept[+].code = #LA9429-7 
  * concept[=].display = "Intramuscular"
  * concept[+].code = #LA9435-4 
  * concept[=].display = "Intrathecal"
  * concept[+].code = #LA9418-0 
  * concept[=].display = "Epidural"
  * concept[+].code = #LA20332-5 
  * concept[=].display = "Gastric"
  * concept[+].code = #LA9369-5 
  * concept[=].display = "Rectal"
  * concept[+].code = #LA9459-4 
  * concept[=].display = "Vaginal"
  * concept[+].code = #LA4489-6 
  * concept[=].display = "Unknown"
  * concept[+].code = #LA20318-4 
  * concept[=].display = "Other: PLEASE SPECIFY"

Instance: ll2817-6
InstanceOf: ValueSet
Usage: #inline
* name = "AhrqYNUnk"
* title = "AHRQ_Y/N/UNK"
* status = #active
* description = "AHRQ Common Format Answer list for Yes (A15), No (A18), Unknown (UNK)"
* copyright = "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use"
* compose.include
  * system = "http://loinc.org"
  * concept[+].code = #LA33-6 
  * concept[=].display = "Yes"
  * concept[+].code = #LA32-8 
  * concept[=].display = "No"
  * concept[+].code = #LA4489-6 
  * concept[=].display = "Unknown"

Instance: ll2828-3
InstanceOf: ValueSet
Usage: #inline
* name = "AhrqYN"
* title = "AHRQ_Y/N"
* status = #active
* description = "AHRQ Common Format Answer list for Yes (A15) and No (A18)"
* copyright = "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use"
* compose.include
  * system = "http://loinc.org"
  * concept[+].code = #LA33-6 
  * concept[=].display = "Yes" 
  * concept[+].code = #LA32-8 
  * concept[=].display = "No"

---

// File: input/fsh/examples/questionnaire-sdc-profile-example-multi-subject.fsh

Instance: questionnaire-sdc-profile-example-multi-subject
InstanceOf: SDCQuestionnaireExtractObservation
Title: "Example multi-subject Questionnaire"
Usage: #example
* extension[+]
  * url = $questionnaire-versionAlgorithm
  * valueCoding = $version-algorithm#semver
* extension[+]
  * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationExtract"
  * valueBoolean = true
* extension[+]
  * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observation-extract-category"
  * valueCodeableConcept = $observation-category#vital-signs
* url = "http://hl7.org/fhir/uv/sdc/Questionnaire/questionnaire-sdc-profile-example-multi-subject"
* name = "MultiSubject"
* title = "Example multi-subject Questionnaire"
* status = #active
* experimental = true
* subjectType = #Patient
* description = "A sample Questionnaire that shows the use of the isSubject extension to flag a subject change within a Questionnaire."
// Todo: Create Ruleset for item (when optional argument functionality is released)
* item[+]
  * linkId = "1"
  * text = "Mother's name"
  * type = #string
  * required = true
* item[+]
  * linkId = "2"
  * text = "Mother's id"
  * type = #string
  * required = true
* item[+]
  * linkId = "3"
  * code = $loinc#8302-2
  * text = "Height"
  * type = #quantity
  * required = true
* item[+]
  * linkId = "4"
  * code = $loinc#29463-7
  * text = "Weight"
  * type = #quantity
  * required = true
* item[+]
  * linkId = "5"
  * text = "Children"
  * type = #group
  * required = true
  * repeats = true
  * item[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-referenceResource"
      * valueCode = #Patient
    * extension[+]
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-isSubject"
      * valueBoolean = true
    * linkId = "5.1"
    * text = "Record"
    * type = #reference
    * required = true
  * item[+]
    * linkId = "5.2"
    * text = "Name"
    * type = #string
    * required = true
  * item[+]
    * linkId = "5.3"
    * text = "Birth date"
    * type = #date
    * required = true
  * item[+]
    * linkId = "5.4"
    * code = $loinc#8302-2
    * text = "Height"
    * type = #quantity
    * required = true
  * item[+]
    * linkId = "5.5"
    * code = $loinc#29463-7
    * text = "Weight"
    * type = #quantity
    * required = true

---

// File: input/fsh/examples/questionnaire-sdc-profile-example-PHQ9-search.fsh

Instance: questionnaire-sdc-profile-example-PHQ9-search
InstanceOf: SDCQuestionnaireAdaptSearch
Title: "Patient Health Questionnaire - adaptive search"
Usage: #example
* extension[+]
  * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-questionnaireAdaptive"
  * valueUrl = "http://example.org/someFHIRServer"
* extension[+]
  * url = $questionnaire-versionAlgorithm
  * valueCoding = $version-algorithm#semver
* url = "http://hl7.org/fhir/uv/sdc/Questionnaire/questionnaire-sdc-profile-example-PHQ9-search"
* name = "SDCPHQ9"
* title = "Patient Health Questionnaire - adaptive search"
* status = #active
* experimental = true
* date = "2016-03-31T08:01:25+11:00"
* subjectType = #Patient
* description = "This is a Questionnaire example of how to expose an adaptive form in a registry."
* copyright = "This content is an unaltered digital reproduction of the PHQ-9 which is copyrighted by Pfizer Inc., which states that no permission is required to reproduce, translate, display or distribute the PHQ-9."
* approvalDate = "2019-08-20"
* effectivePeriod
  * start = "2018-08-20T04:00:00.000Z"
  * end = "2020-08-20T04:00:00.000Z"

---

// File: input/fsh/examples/questionnaire-sdc-profile-example-PHQ9.fsh

Instance: questionnaire-sdc-profile-example-PHQ9
InstanceOf: Questionnaire
Title: "SDC-PHQ9"
Description: "Patient Health Questionnaire (9 Item) including contained value sets and calculatedExpression"
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire|4.0.0-ballot"
* contained = VSPHQ9
* extension[+]
  * url = $questionnaire-versionAlgorithm
  * valueCoding = $version-algorithm#semver
* extension[+]
  * url = "http://hl7.org/fhir/StructureDefinition/rendering-styleSensitive"
  * valueBoolean = true
* url = "http://hl7.org/fhir/uv/sdc/Questionnaire/questionnaire-sdc-profile-example-PHQ9"
* name = "SDCPHQ9"
* title = "Patient Health Questionnaire - 9 Item"
* status = #active
* experimental = true
* subjectType = #Patient
* description = "This is a Questionnaire example of how the PHQ-9 Questionnaire could be rendered as a FHIR Questionnaire Resource according to the Structured Data Capture SDC Base Questionnaire Profile. This example also portrays how FHIRpaths can be used to perform total score calculations using answer values."
* purpose = "This Questionnaire example was generated to ensure a non-proprietary, publicly available questionnaire that is available to test the Structured Data Capture profiles"
* copyright = "This content is an unaltered digital reproduction of the PHQ-9 which is copyrighted by Pfizer Inc., which states that no permission is required to reproduce, translate, display or distribute the PHQ-9."
* approvalDate = "2019-08-20"
* effectivePeriod
  * start = "2018-08-20T04:00:00.000Z"
  * end = "2020-08-20T04:00:00.000Z"
// Todo: Create Ruleset for item (when optional argument functionality is released)
* item
  * linkId = "H1/T1"
  * text = "Over the last two weeks, how often have you been bothered by any of the following problems?"
  * type = #group
  * item[+]
    * linkId = "H1/T1/Q1"
    * text = "Little interest or pleasure in doing things?"
    * type = #choice
    * answerValueSet = "#VSPHQ9"
  * item[+]
    * linkId = "H1/T1/Q2"
    * text = "Feeling down, depressed, or hopeless?"
    * type = #choice
    * answerValueSet = "#VSPHQ9"
  * item[+]
    * linkId = "H1/T1/Q3"
    * text = "Trouble falling or staying asleep, or sleeping too much?"
    * type = #choice
    * answerValueSet = "#VSPHQ9"
  * item[+]
    * linkId = "H1/T1/Q4"
    * text = "Feeling tired or having little energy?"
    * type = #choice
    * answerValueSet = "#VSPHQ9"
  * item[+]
    * linkId = "H1/T1/Q5"
    * text = "Poor appetite or overeating?"
    * type = #choice
    * answerValueSet = "#VSPHQ9"
  * item[+]
    * linkId = "H1/T1/Q6"
    * text = "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?"
    * type = #choice
    * answerValueSet = "#VSPHQ9"
  * item[+]
    * linkId = "H1/T1/Q7"
    * text = "Trouble concentrating on things, such as reading the newspaper or watching television?"
    * type = #choice
    * answerValueSet = "#VSPHQ9"
  * item[+]
    * linkId = "H1/T1/Q8"
    * text = "Moving or speaking so slowly that other people could gave noticed? Or so fidgety or restless that you have been moving a lot more than usual?"
    * type = #choice
    * answerValueSet = "#VSPHQ9"
  * item[+]
    * linkId = "H1/T1/Q9"
    * text = "Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?"
    * type = #choice
    * answerValueSet = "#VSPHQ9"
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression"
      * valueExpression
        * description = "Score (0-4: None-minimal; 5-9: Mild; 19-14: Moderate; 15-19: Moderately severe; 20-27: Severe)"
        * name = "score"
        * language = #text/fhirpath
        * expression = "%resource.item.where(linkId!='H1/TS').answer.value.weight().sum()"
    * linkId = "H1/TS"
    * code = $loinc#44261-6 "Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]"
    * text = "Patient health questionnaire 9 item total score"
    * type = #quantity

---

// File: input/fsh/examples/questionnaire-sdc-profile-example-render.fsh

Instance: questionnaire-sdc-profile-example-render
InstanceOf: SDCQuestionnaireRender
Title: "SDC-Advanced Rendering"
Description: "Demo questionnaire showing most of the advanced rendering capabilities of SDC. Each example here is itemized in the Examples page."
Usage: #example
* contained = LL2821-8
* extension[$questionnaire-versionAlgorithm].valueCoding = $version-algorithm#semver
* url = "http://build.fhir.org/ig/HL7/sdc/questionnaire-sdc-profile-example-render"
* name = "SDCAdvancedRenderingExample"
* status = #active
// Todo: Create Ruleset for item (when optional argument functionality is released)
* item[+]
  * linkId = "1"
  * text = "Text Appearance"
  * type = #group
  * item[+]
    * linkId = "1.1"
    * text = "Enter your First Name"
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/rendering-style"
        * valueString = "color:green;"
    * type = #string
  * item[+]
    * linkId = "1.2"
    * text = "Please answer Yes or No to each of the following questions:"
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/rendering-xhtml"
        * valueString = "Please answer Yes or No to each of the following questions:"
    * type = #display
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-displayCategory"
      * valueCodeableConcept = $questionnaire-display-category#security "Security"
        * text = "The text provides guidance on how the information will be handled from a security perspective."
    * linkId = "1.3"
    * text = "ALL QUESTIONS CONTAINED IN THIS QUESTIONNAIRE ARE OPTIONAL AND WILL BE KEPT STRICTLY CONFIDENTIAL."
    * type = #display
  * item[+]
    * linkId = "1.4"
    * type = #group
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-hidden"
        * valueBoolean = true
      * linkId = "1.4.1"
      * text = "Form ID"
      * type = #string
    * item[+]
      * linkId = "1.4.2"
      * text = "Event ID"
      * type = #string
* item[+]
  * linkId = "2"
  * text = "Control Appearance"
  * type = #group
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
      * valueCodeableConcept = $questionnaire-item-control#text-box "Text Box"
        * text = "A control where a user can type in their answer freely."
    * linkId = "2.1"
    * text = "If you have any other medical problems or serious injuries, please describe them here:"
    * type = #text
  * item[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation"
      * valueCode = #horizontal
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
      * valueCodeableConcept = $questionnaire-item-control#radio-button "Radio Button"
        * text = "A control where choices are listed with a button beside them. The button can be toggled to select or de-select a given choice. Selecting one item deselects all others."
    * linkId = "2.2"
    * text = "Gender:"
    * type = #choice
    * answerOption[+]
      * valueCoding = $administrative-gender#female "Female"
      * initialSelected = true
    * answerOption[+].valueCoding = $administrative-gender#male "Male"
    * answerOption[+].valueCoding = $administrative-gender#other "Other"
    * answerOption[+].valueCoding = $administrative-gender#unknown "Unknown"
  * item[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
      * valueCodeableConcept = $questionnaire-item-control#slider "Slider"
        * text = "A control where an axis is displayed between the high and low values and the control can be visually manipulated to select a value anywhere on the axis."
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue"
      * valueInteger = 10
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/minValue"
      * valueInteger = 0
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/maxValue"
      * valueInteger = 100
    * linkId = "2.3"
    * text = "Rate your doctor:"
    * type = #integer
    * initial.valueInteger = 50
    * item[+]
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
        * valueCodeableConcept = $questionnaire-item-control#lower "Lower-bound"
      * linkId = "2.3.1"
      * text = "Completely dissatisfied"
      * type = #display
    * item[+]
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
        * valueCodeableConcept = $questionnaire-item-control#upper "Upper-bound"
      * linkId = "2.3.2"
      * text = "Completely satisfied"
      * type = #display
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
      * valueCodeableConcept = $questionnaire-item-control#htable "Horizontal Answer Table"
        * text = "Questions within the group are columns in the table with possible answers as rows. Used for 'choice' questions."
    * linkId = "2.4"
    * text = "Medical History"
    * type = #group
    * item[+]
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
        * valueCodeableConcept = $questionnaire-item-control#check-box "Check-box"
          * text = "A control where choices are listed with a box beside them. The box can be toggled to select or de-select a given choice. Multiple selections may be possible."
      * extension[+]
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-width"
        * valueQuantity = 65 '%'
      * linkId = "2.4.1"
      * text = "Diabetes"
      * type = #choice
      * answerOption[+].valueCoding = $conditions#diabetes-type1 "Type 1"
      * answerOption[+].valueCoding = $conditions#diabetes-type2 "Type 2"
    * item[+]
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
        * valueCodeableConcept = $questionnaire-item-control#check-box "Check-box"
          * text = "A control where choices are listed with a box beside them. The box can be toggled to select or de-select a given choice. Multiple selections may be possible."
      * extension[+]
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-width"
        * valueQuantity = 35 '%'
      * linkId = "2.4.2"
      * text = "Other Information"
      * type = #choice
      * answerOption[+].valueCoding = $conditions#diabetes-type1 "Type 1"
      * answerOption[+].valueCoding = $conditions#diabetes-type2 "Type 2"
      * answerOption[+].valueCoding = $conditions#otherinformation-hypertension "Hypertension"
      * answerOption[+].valueCoding = $conditions#otherinformation-smoker "Smoker"
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-collapsible"
      * valueCode = #default-closed
    * linkId = "2.5"
    * type = #group
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
        * valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
      * linkId = "2.5.1"
      * text = "Relationship to patient"
      * type = #choice
      * answerOption[+].valueCoding = $v3-RoleCode#FTH "Father"
      * answerOption[+].valueCoding = $v3-RoleCode#MTH "Mother"
      * answerOption[+].valueCoding = $v3-RoleCode#SIB "Sibling"
    * item[+]
      * linkId = "2.5.2"
      * text = "Name"
      * type = #string
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
        * valueCodeableConcept = $questionnaire-item-control#radio-button "Radio Button"
      * linkId = "2.5.3"
      * text = "Gender"
      * type = #choice
      * answerOption[+]
        * valueCoding = $administrative-gender#female "Female"
        * initialSelected = true
      * answerOption[+].valueCoding = $administrative-gender#male "Male"
      * answerOption[+].valueCoding = $administrative-gender#other "Other"
      * answerOption[+].valueCoding = $administrative-gender#unknown "Unknown"
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
      * valueCodeableConcept = $questionnaire-item-control#htable "Horizontal Answer Table"
        * text = "Questions within the group are columns in the table with possible answers as rows. Used for 'choice' questions."
    * linkId = "2.6"
    * text = "Lifestyle Factors"
    * type = #group
    * item[+]
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
        * valueCodeableConcept = $questionnaire-item-control#check-box "Check-box"
          * text = "A control where choices are listed with a box beside them. The box can be toggled to select or de-select a given choice. Multiple selections may be possible."
      * linkId = "2.6.1"
      * text = "Exercise Habits"
      * type = #choice
      * answerOption[+].valueCoding = $lifestyle#daily "Daily"
      * answerOption[+].valueCoding = $lifestyle#weekly "Weekly"
      * answerOption[+].valueCoding = $lifestyle#monthly "Monthly"
      * answerOption[+].valueCoding = $lifestyle#never "Never"
    * item[+]
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
        * valueCodeableConcept = $questionnaire-item-control#check-box "Check-box"
          * text = "A control where choices are listed with a box beside them. The box can be toggled to select or de-select a given choice. Multiple selections may be possible."
      * linkId = "2.6.2"
      * text = "Smoking Frequency"
      * type = #choice
      * answerOption[+].valueCoding = $lifestyle#daily "Daily"
      * answerOption[+].valueCoding = $lifestyle#weekly "Weekly"
      * answerOption[+].valueCoding = $lifestyle#monthly "Monthly"
      * answerOption[+].valueCoding = $lifestyle#never "Never"
    * item[+]
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
        * valueCodeableConcept = $questionnaire-item-control#check-box "Check-box"
          * text = "A control where choices are listed with a box beside them. The box can be toggled to select or de-select a given choice. Multiple selections may be possible."
      * linkId = "2.6.3"
      * text = "Alcohol Consumption"
      * type = #choice
      * answerOption[+].valueCoding = $lifestyle#daily "Daily"
      * answerOption[+].valueCoding = $lifestyle#weekly "Weekly"
      * answerOption[+].valueCoding = $lifestyle#monthly "Monthly"
      * answerOption[+].valueCoding = $lifestyle#never "Never"
* item[+]
  * linkId = "3"
  * text = "Additional Display Content"
  * type = #group
  * item[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-supportLink"
      * valueUri = "http://hl7.org/fhir/StructureDefinition/questionnaire-supportLink"
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
      * valueCodeableConcept = $questionnaire-item-control#radio-button "Radio Button"
        * text = "A control where choices are listed with a button beside them. The button can be toggled to select or de-select a given choice. Selecting one item deselects all others."
    * linkId = "3.1"
    * text = "Have you traveled outside the country within the last 14 days?"
    * type = #choice
    * answerOption[+].valueCoding = $v2-0532#Y "Yes"
    * answerOption[+].valueCoding = $v2-0532#N "No"
  * item[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
      * valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
    * extension[+]
      * extension[+]
        * url = "path"
        * valueString = "code"
      * extension[+]
        * url = "label"
        * valueString = "CODE"
      * extension[+]
        * url = "width"
        * valueQuantity = 25 '%'
      * extension[+]
        * url = "forDisplay"
        * valueBoolean = false
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-choiceColumn"
    * extension[+]
      * extension[+]
        * url = "path"
        * valueString = "display"
      * extension[+]
        * url = "label"
        * valueString = "DESCRIPTION"
      * extension[+]
        * url = "width"
        * valueQuantity = 75 '%'
      * extension[+]
        * url = "forDisplay"
        * valueBoolean = true
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-choiceColumn"
    * linkId = "3.2"
    * text = "Select Platelet:"
    * type = #choice
    * answerValueSet = "http://loinc.org/vs/LL715-4"
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
      * valueCodeableConcept = $questionnaire-item-control#radio-button "Radio Button"
        * text = "A control where choices are listed with a button beside them. The button can be toggled to select or de-select a given choice. Selecting one item deselects all others."
    * linkId = "3.3"
    * text = "Gender:"
    * type = #choice
    * answerOption[+]
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix"
        * valueString = "(a)"
      * valueCoding = $administrative-gender#female "Female"
      * initialSelected = true
    * answerOption[+]
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix"
        * valueString = "(b)"
      * valueCoding = $administrative-gender#male "Male"
    * answerOption[+]
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix"
        * valueString = "(c)"
      * valueCoding = $administrative-gender#other "Other"
    * answerOption[+]
      * extension
        * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix"
        * valueString = "(d)"
      * valueCoding = $administrative-gender#unknown "Unknown"
  * item[+]
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation"
      * valueCode = #vertical
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
      * valueCodeableConcept = $questionnaire-item-control#radio-button "Radio Button"
        * text = "A control where choices are listed with a button beside them. The button can be toggled to select or de-select a given choice. Selecting one item deselects all others."
    * linkId = "3.4"
    * text = "Enter timing of harm assessment:"
    * type = #choice
    * answerValueSet = "#LL2821-8"
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/entryFormat"
      * valueString = "mm-dd-yyyy"
    * linkId = "3.5"
    * text = "Birth Date"
    * type = #date
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/rendering-styleSensitive"
      * valueBoolean = true
    * linkId = "3.6"
    * text = "IMPORTANT: Please complete questionnaire."
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/rendering-style"
        * valueString = "color:red;"
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/rendering-xhtml"
        * valueString = "IMPORTANT: Please complete questionnaire."
    * type = #display
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-optionalDisplay"
      * valueBoolean = true
    * linkId = "3.7"
    * text = "Enter your Middle Name"
    * type = #string
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText"
      * valueString = "Annual family income"
    * linkId = "3.8"
    * text = "During the past year, what was the total combined income for you and the family members you live with? This information will help us determine if you are eligible for any benefits."
    * type = #decimal
  * item[+]
    * extension
      * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-columnCount"
      * valuePositiveInt = 3
    * linkId = "3.9"
    * text = "Which of the following time-slots are you available for?"
    * type = #string
    * answerOption[+]
      * valueString = "9-10am"
    * answerOption[+]
      * valueString = "10-11am"
    * answerOption[+]
      * valueString = "11am-12pm"
    * answerOption[+]
      * valueString = "1-2pm"
    * answerOption[+]
      * valueString = "2-3pm"
    * answerOption[+]
      * valueString = "3-4pm"

Instance: LL2821-8
InstanceOf: ValueSet
Usage: #inline
* url = "http://example.org/ValueSet/LL2821-8"
* name = "TimingOfHarmAssessmentValueSet"
* title = "Timing of harm assessment [AHRQ]"
* status = #active
* description = "The answer list for timing of harm assessment"
* copyright = "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use"
* compose.include
  * system = "http://loinc.org"
  * concept[+]
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "A."
    * code = #LA20752-4
    * display = "Within 24 hours"
  * concept[+]
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "B."
    * code = #LA20753-2
    * display = "After 24 hours but before 3 days"
  * concept[+]
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "C."
    * code = #LA20754-0
    * display = "Three days or later"
  * concept[+]
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/valueset-label"
      * valueString = "D."
    * code = #LA4489-6
    * display = "Unknown"

---

// File: input/fsh/examples/questionnaire-sdc-profile-example-ussg-fht.fsh

Instance: questionnaire-sdc-profile-example-ussg-fht
InstanceOf: SDCQuestionnairePopulateObservation
Title: "SDC-LOINC USSG Family History"
Description: "LOINC US Surgeon General family history including data elements and value sets."
Usage: #example
* extension[$questionnaire-versionAlgorithm].valueCoding = $version-algorithm#semver
* meta
  * profile[+] = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-pop-obsn"
  * profile[+] = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-search"
* contained[+] = length
* contained[+] = weight
* extension[$questionnaire-versionAlgorithm].valueCoding = $version-algorithm#date
* url = "http://hl7.org/fhir/uv/sdc/Questionnaire/questionnaire-sdc-profile-example-ussg-fht"
* identifier
  * system = "http://example.org/panel-id"
  * value = "54127-6"
* version = "2015"
* name = "USSurgeonGeneralFamilyHealthPortrait"
* title = "US Surgeon General - Family Health Portrait"
* status = #active
* experimental = true
* subjectType = #Patient
* date = "2015"
* publisher = "Regenstrief Institute, Inc and the LOINC Committee"
* contact.telecom
  * system = #url
  * value = "http://loinc.org"
* description = "This represents an implementation of the \"US Surgeon General family health portrait\" form found at https://lforms-demo.nlm.nih.gov"
* useContext
  * code = $usage-context-type#species
  * valueCodeableConcept = $sct#337915000 "Homo sapiens"
* jurisdiction = urn:iso:std:iso:3166#US
* purpose = "Captures basic family history information"
* copyright = "(c) 2015 Regenstrief Institute"
* approvalDate = "2015-10-31"
* lastReviewDate = "2017-03-15"
* code = $loinc#54127-6 "US Surgeon General family health portrait [USSG-FHT]"
* item[+]
  * linkId = "0"
  * type = #group
  * item[+]
    * linkId = "0.1"
    * text = "Date Done"
    * type = #date
  * item[+]
    * linkId = "0.2"
    * text = "Time Done"
    * type = #time
  * item[+]
    * linkId = "0.3"
    * text = "Where Done"
    * type = #string
  * item[+]
    * linkId = "0.4"
    * text = "Comment"
    * type = #string
* item[+]
  * linkId = "1"
  * definition = "http://loinc.org/fhir/DataElement/54126-8"
  * code = $loinc#54126-8
  * text = "Your health information"
  * type = #group
  * required = true
  * item[+]
    * linkId = "1.1"
    * type = #group
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "1.1.1"
      * definition = "http://loinc.org/fhir/DataElement/54125-0"
      * code = $loinc#54125-0
      * text = "Name"
      * type = #string
      * maxLength = 200
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "1.1.2"
      * definition = "http://loinc.org/fhir/DataElement/54131-8"
      * code = $loinc#54131-8
      * text = "Gender"
      * type = #choice
      * required = true
      * answerValueSet = "http://loinc.org/vs/LL1-9"
      * item
        * linkId = "1.1.2.1.1"
        * text = "Please specify"
        * type = #string
        * enableWhen
          * question = "1.1.2"
          * operator = #=
          * answerCoding = $loinc#LA46-8
        * required = true
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "1.1.3"
      * definition = "http://loinc.org/fhir/DataElement/21112-8"
      * code = $loinc#21112-8
      * text = "Date of Birth"
      * type = #date
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "1.1.4"
      * definition = "http://loinc.org/fhir/DataElement/54132-6"
      * code = $loinc#54132-6
      * text = "Were you born a twin?"
      * type = #choice
      * answerValueSet = "http://loinc.org/vs/LL623-0"
      * initial.valueCoding = $loinc#LA32-8 "No"
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "1.1.5"
      * definition = "http://loinc.org/fhir/DataElement/54128-4"
      * code = $loinc#54128-4
      * text = "Were you adopted?"
      * type = #choice
      * answerValueSet = "http://loinc.org/vs/LL361-7"
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "1.1.6"
      * definition = "http://loinc.org/fhir/DataElement/54135-9"
      * code = $loinc#54135-9
      * text = "Are your parents related to each other in any way other than marriage?"
      * type = #choice
      * answerValueSet = "http://loinc.org/vs/LL361-7"
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "1.1.7"
      * definition = "http://loinc.org/fhir/DataElement/8302-2"
      * code = $loinc#8302-2
      * text = "Height"
      * type = #decimal
      * required = true
      * item
        * linkId = "1.1.7.1.1"
        * text = "Units"
        * type = #choice
        * answerValueSet = "#length"
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "1.1.8"
      * definition = "http://loinc.org/fhir/DataElement/29463-7"
      * code = $loinc#29463-7
      * text = "Weight"
      * type = #decimal
      * item
        * linkId = "1.1.8.1.1"
        * text = "Units"
        * type = #choice
        * answerValueSet = "#weight"
    * item[+]
      * linkId = "1.1.9"
      * definition = "http://loinc.org/fhir/DataElement/39156-5"
      * code = $loinc#39156-5
      * text = "Body mass index (BMI) [Ratio]"
      * type = #decimal
      * readOnly = true
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "1.1.10"
      * definition = "http://loinc.org/fhir/DataElement/54134-2"
      * code = $loinc#54134-2
      * text = "Race"
      * type = #choice
      * required = true
      * answerValueSet = "http://loinc.org/vs/LL629-7"
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "1.1.11"
      * definition = "http://loinc.org/fhir/DataElement/54133-4"
      * code = $loinc#54133-4
      * text = "Ethnicity"
      * type = #choice
      * repeats = true
      * answerValueSet = "http://loinc.org/vs/LL628-9"
  * item[+]
    * linkId = "1.2"
    * definition = "http://loinc.org/fhir/DataElement/54137-5"
    * code = $loinc#54137-5
    * text = "Your diseases history"
    * type = #group
    * repeats = true
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "1.2.1"
      * definition = "http://loinc.org/fhir/DataElement/54140-9"
      * code = $loinc#54140-9
      * text = "Disease or Condition"
      * type = #choice
      * answerValueSet = "http://loinc.org/vs/LL626-3"
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "1.2.2"
      * definition = "http://loinc.org/fhir/DataElement/54130-0"
      * code = $loinc#54130-0
      * text = "Age at Diagnosis"
      * type = #choice
      * answerValueSet = "http://loinc.org/vs/LL619-8"
* item[+]
  * linkId = "2"
  * definition = "http://loinc.org/fhir/DataElement/54114-4"
  * code = $loinc#54114-4
  * text = "Family member health information"
  * type = #group
  * repeats = true
  * item[+]
    * linkId = "2.1.1"
    * type = #group
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "2.1.1.1"
      * definition = "http://loinc.org/fhir/DataElement/54136-7"
      * code = $loinc#54136-7
      * text = "Relationship to you"
      * type = #choice
      * answerValueSet = "http://loinc.org/vs/LL621-4"
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "2.1.1.2"
      * definition = "http://loinc.org/fhir/DataElement/54138-3"
      * code = $loinc#54138-3
      * text = "Name"
      * type = #string
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "2.1.1.3"
      * definition = "http://loinc.org/fhir/DataElement/54123-5"
      * code = $loinc#54123-5
      * text = "Gender"
      * type = #choice
      * answerValueSet = "http://loinc.org/vs/LL1-9"
      * item
        * linkId = "2.1.1.3.1.1"
        * text = "Please specify"
        * type = #string
        * enableWhen
          * question = "2.1.1.3"
          * operator = #=
          * answerCoding = $loinc#LA46-8
        * required = true
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "2.1.1.4"
      * definition = "http://loinc.org/fhir/DataElement/54139-1"
      * code = $loinc#54139-1
      * text = "Living?"
      * type = #choice
      * answerValueSet = "http://loinc.org/vs/LL361-7"
      * item[+]
        * linkId = "2.1.1.4.1"
        * type = #group
        * item[+]
          * extension
            * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
            * valueDuration = 200 'a'
          * linkId = "2.1.1.4.1.1"
          * definition = "http://loinc.org/fhir/DataElement/54112-8"
          * code = $loinc#54112-8
          * text = "Cause of Death"
          * type = #choice
          * answerValueSet = "http://loinc.org/vs/LL627-1"
          * item
            * linkId = "2.1.1.4.1.1.1"
            * text = "Please specify"
            * type = #string
            * enableWhen
              * question = "2.1.1.4.1.1"
              * operator = #=
              * answerCoding = $loinc#LA10589-2
        * item[+]
          * extension
            * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
            * valueDuration = 200 'a'
          * linkId = "2.1.1.4.1.2"
          * definition = "http://loinc.org/fhir/DataElement/54113-6"
          * code = $loinc#54113-6
          * text = "Age at Death"
          * type = #choice
          * answerValueSet = "http://loinc.org/vs/LL619-8"
      * item[+]
        * linkId = "2.1.1.4.2"
        * type = #group
        * item[+]
          * extension
            * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
            * valueDuration = 200 'a'
          * linkId = "2.1.1.4.2.1"
          * definition = "http://loinc.org/fhir/DataElement/54124-3"
          * code = $loinc#54124-3
          * text = "Date of Birth"
          * type = #date
        * item[+]
          * extension
            * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
            * valueDuration = 200 'a'
          * linkId = "2.1.1.4.2.2"
          * definition = "http://loinc.org/fhir/DataElement/54141-7"
          * code = $loinc#54141-7
          * text = "Age"
          * type = #decimal
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "2.1.1.5"
      * definition = "http://loinc.org/fhir/DataElement/54121-9"
      * code = $loinc#54121-9
      * text = "Was this person born a twin?"
      * type = #choice
      * answerValueSet = "http://loinc.org/vs/LL623-0"
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "2.1.1.6"
      * definition = "http://loinc.org/fhir/DataElement/54122-7"
      * code = $loinc#54122-7
      * text = "Was this person adopted?"
      * type = #choice
      * answerValueSet = "http://loinc.org/vs/LL623-0"
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "2.1.1.7"
      * definition = "http://loinc.org/fhir/DataElement/54119-3"
      * code = $loinc#54119-3
      * text = "Race"
      * type = #choice
      * repeats = true
      * answerValueSet = "http://loinc.org/vs/LL629-7"
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "2.1.1.8"
      * definition = "http://loinc.org/fhir/DataElement/54120-1"
      * code = $loinc#54120-1
      * text = "Ethnicity"
      * type = #choice
      * repeats = true
      * answerValueSet = "http://loinc.org/vs/LL628-9"
  * item[+]
    * linkId = "2.1.2"
    * definition = "http://loinc.org/fhir/DataElement/54117-7"
    * code = $loinc#54117-7
    * text = "This family member's history of disease"
    * type = #group
    * repeats = true
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "2.1.2.1"
      * definition = "http://loinc.org/fhir/DataElement/54116-9"
      * code = $loinc#54116-9
      * text = "Disease or Condition"
      * type = #choice
      * required = true
      * answerValueSet = "http://loinc.org/vs/LL626-3"
    * item[+]
      * extension
        * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
        * valueDuration = 200 'a'
      * linkId = "2.1.2.2"
      * definition = "http://loinc.org/fhir/DataElement/54115-1"
      * code = $loinc#54115-1
      * text = "Age at Diagnosis"
      * type = #choice
      * answerValueSet = "http://loinc.org/vs/LL619-8"
    * item[+]
      * linkId = "2.1.2.3"
      * text = "Mock-up item: Height"
      * type = #decimal
    * item[+]
      * linkId = "2.1.2.4"
      * text = "Mock-up item: Weight"
      * type = #decimal
    * item[+]
      * linkId = "2.1.2.5"
      * text = "Mock-up item: BMI"
      * type = #decimal

Instance: length
InstanceOf: ValueSet
Usage: #inline
* name = "LengthUnits"
* title = "Length Units"
* status = #active
* description = "Length units"
* immutable = true
* compose.include
  * system = "http://unitsofmeasure.org"
  * concept[+].code = #[in_i]
  * concept[=].display = "inch (international)"
  * concept[+].code = #cm
  * concept[=].display = "centimeters"

Instance: weight
InstanceOf: ValueSet
Usage: #inline
* name = "WeightUnits"
* title = "Weight Units"
* status = #active
* description = "Weight units"
* immutable = true
* compose.include
  * system = "http://unitsofmeasure.org"
  * concept[+].code = #[lb_av]
  * concept[=].display = "pound (US and British)"
  * concept[+].code = #kg
  * concept[=].display = "kilograms"

---

// File: input/fsh/examples/questionnaire-sdc-profile-example-weight-height-tracking-panel.fsh

Instance: questionnaire-sdc-profile-example-weight-height-tracking-panel
InstanceOf: SDCBaseQuestionnaire
Title: "SDC-Weight and Height Tracking Panel"
Description: "A weight and height panel (from LOINC) with a FHIRPath rule for calculating the BMI."
Usage: #example
* extension[+]
  * url = $questionnaire-versionAlgorithm
  * valueCoding = $version-algorithm#semver
* extension[+]
  * url = "http://hl7.org/fhir/StructureDefinition/variable"
  * valueExpression
    * name = "weight"
    * language = #text/fhirpath
    * expression = "%resource.item.where(linkId='/29463-7').answer.value"
* extension[+]
  * url = "http://hl7.org/fhir/StructureDefinition/variable"
  * valueExpression
    * name = "height"
    * language = #text/fhirpath
    * expression = "%resource.item.where(linkId='/8302-2').answer.value*0.0254"
* extension[+]
  * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-performerType"
  * valueCode = #Practitioner
* url = "http://hl7.org/fhir/uv/sdc/Questionnaire/questionnaire-sdc-profile-example-weight-height-tracking-panel"
* identifier
  * system = "http://loinc.org"
  * value = "55418-8"
* name = "WeightHeightTrackingPanel"
* title = "Weight & Height tracking panel"
* status = #active
* experimental = true
* subjectType = #Patient
* description = "A weight & height panel (from LOINC) with a FHIRPath rule for calculating the BMI."
* purpose = "This Questionnaire example was generated to ensure a non-proprietary, publicly available questionnaire that is available to test the Structured Data Capture profiles"
* code = $loinc#55418-8 "Weight and Height tracking panel"
* item[+]
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-unit"
    * valueCoding = $unitsofmeasure#kg
  * extension[+]
    * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
    * valueDuration = 1 'a' "year"
  * linkId = "/29463-7"
  * code = $loinc#29463-7 "Weight"
  * text = "Weight"
  * type = #decimal
  * required = false
* item[+]
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
    * valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
      * text = "Drop down"
  * linkId = "/8352-7"
  * code = $loinc#8352-7 "Clothing worn during measure"
  * text = "Clothing worn during measure"
  * type = #choice
  * required = false
  * answerOption[+].valueCoding = $loinc#LA11871-3 "Underwear or less"
  * answerOption[+].valueCoding = $loinc#LA11872-1 "Street clothes, no shoes"
  * answerOption[+].valueCoding = $loinc#LA11873-9 "Street clothes & shoes"
* item[+]
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-unit"
    * valueCoding = $unitsofmeasure#[in_i]
  * extension[+]
    * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"
    * valueDuration = 1 'a' "year"
  * linkId = "/8302-2"
  * code = $loinc#8302-2 "Body height"
  * text = "Body height"
  * type = #decimal
  * required = false
* item[+]
  * extension[+]
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-unit"
    * valueCoding = $unitsofmeasure#kg/m2
  * extension[+]
    * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression"
    * valueExpression
      * description = "BMI calculation"
      * language = #text/fhirpath
      * expression = "(%weight/(%height.power(2))).round(1)"
  * linkId = "/39156-5"
  * code = $loinc#39156-5 "BMI"
  * text = "BMI"
  * type = #decimal
  * required = false
* item[+]
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
    * valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
      * text = "Drop down"
  * linkId = "/8361-8"
  * code = $loinc#8361-8 "Bdy position with respect to gravity"
  * text = "Bdy position with respect to gravity"
  * type = #choice
  * required = false
  * answerOption[+].valueCoding = $loinc#LA11868-9 "Sitting"
  * answerOption[+].valueCoding = $loinc#LA11869-7 "Lying"
  * answerOption[+].valueCoding = $loinc#LA11870-5 "Standing"

---

