File: repos/HL7_SLASH_cqf-recommendations/sushi-config.yaml

# ╭─────────────────────────Commonly Used ImplementationGuide Properties───────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. The most commonly   │
# │  used properties are included. For a list of all supported properties and their functions,     │
# │  see: https://fshschool.org/docs/sushi/configuration/.                                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.uv.cpg
canonical: http://hl7.org/fhir/uv/cpg
name: CPG
title: Clinical Practice Guidelines
description: Implementation guidance for creating Clinical Practice Guidelines with formal artifacts to facilitate sharing and implementation of the guideline
status: active # draft | active | retired | unknown
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg  #<<< must include a http://hl7.org/fhir/StructureDefinition/structuredefinition-wg extension that identifies the workgroup responsible for the IG. This is the authoritative element.
    valueCode: cds  # <<< The value must be the code for the workgroup
version: 2.0.0
fhirVersion: 4.0.1 # https://www.hl7.org/fhir/valueset-FHIR-version.html
copyrightYear: 2023+
releaseLabel: STU2 # ci-build | draft | qa-preview | ballot | trial-use | release | update | normative+trial-use
license: CC0-1.0 # https://www.hl7.org/fhir/valueset-spdx-license.html
jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#001 "World"
publisher:
  name: HL7 International / Clinical Decision Support
  url:  http://www.hl7.org/Special/committees/dss
  # email: test@example.org

# The dependencies property corresponds to IG.dependsOn. The key is the
# package id and the value is the version (or dev/current). For advanced
# use cases, the value can be an object with keys for id, uri, and version.
#
# dependencies:
#   hl7.fhir.us.core: 3.1.0
#   hl7.fhir.us.mcode:
#     id: mcode
#     uri: http://hl7.org/fhir/us/mcode/ImplementationGuide/hl7.fhir.us.mcode
#     version: 1.0.0
#

dependencies:
  hl7.fhir.extensions.r5: 4.0.1

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
    title: CPG Home
  approach.md:
    documentation-approach-12-conceptual-knowledge-architecture.md:
      title: CPG Knowledge Architecture-Conceptual Perspective
      documentation-approach-12-01-separations-of-concerns-in-the-cpg.md:
        title: Separations of Concerns
      documentation-approach-12-02-separating-and-defining-case-plan-and-workflow.md:
        title: Separating and Defining Case, Plan, and Workflow
      documentation-approach-12-03-cpg-plan.md:
        title: CPGPlan
      documentation-approach-12-04-cpg-case.md:
        title: CPGCase
      documentation-approach-12-05-cpg-careplan.md:
        title: CPGCarePlan
      documentation-approach-12-06-cpg-common-pathway.md:
        title: Workflow and Common Pathway
      documentation-approach-12-07-cpg-derivative-and-related-assets.md:
        title: CPGGuideline and Derivative & Related Assets
    documentation-approach-04-guideline-development.md:
      title: Guideline Development
      documentation-approach-04-01-guideline-development-group.md:
        title: Guideline Development Group
      documentation-approach-04-02-guideline-development-frameworks.md:
        title: Guideline Development Frameworks
      documentation-approach-04-03-6S-evidence-pyramid-and-learning-health-systems.md:
        title: 6S Evidence Pyramid and Learning Health Systems
      documentation-approach-04-04-analysis-of-evidence-recommendations-reporting.md:
        title: Analysis of Evidence, Recommendations, and Reporting
      documentation-approach-04-05-computable-guideline-artifacts.md:
        title: Development of Computable Clinical Guideline Artifacts
    documentation-approach-05-knowledge-engineering-overview.md:
      title: Knowledge Engineering Overview
      documentation-approach-05-01-knowledge-acquisition.md:
        title: Knowledge Acquisition
      documentation-approach-05-02-knowledge-translation.md:
        title: Knowledge Translation
      documentation-approach-05-03-knowledge-representation.md:
        title: Knowledge Representation/Expression
      documentation-approach-05-04-knowledge-execution-and-validation.md:
        title: Knowledge Execution and Validation
      documentation-approach-05-05-knowledge-implementation.md:
        title: Knowledge Implementation
      documentation-approach-05-06-agile-cpg-development-approach.md:
        title: Agile CPG Development Approach
    documentation-approach-02-04-knowledge-representation.md:
      title: Knowledge Representation Overview
      documentation-approach-06-knowledge-representation.md:
        title: Knowledge Representation
      documentation-approach-06-01-levels-of-knowledge-representation.md:
        title: “Levels” of Knowledge Representation Framing
      documentation-approach-07-tiers-of-functionality.md:
        title: Tiers of Functionality
      documentation-approach-08-levels-of-representation-by-tiers-of-functionality.md:
        title: Levels of Representation by Tiers of Functionality
      documentation-approach-06-02-knowledge-assets.md:
        title: Knowledge Assets
      documentation-approach-06-03-knowledge-architecture.md:
        title: Knowledge Architecture
    documentation-approach-02-05-knowledge-implementation.md:
      title: Implementation Computable Knowledge
      documentation-approach-09-methods-of-implementation.md:
        title: Methods of Implementation
        activityflow.md:
          title: Activity Flow
        documentation-careplanning.md:
          title: Evidence-Based Care Planning
      documentation-approach-10-mechanisms-of-integration.md:
        title: Mechanisms of Integration
      documentation-approach-03-conformance-levels.md:
        title: Levels of Enablement
      documentation-conformance.md:
        title: Conformance
  methodology.md:
  profiles.md:
    title: Profile Definitions and Documentation
  terminology.md:
  libraries.md:
  artifacts.md:
  examples.md:
    examples-activities.md:
      title: Activity Examples
    examples-chf.md:
      title: Congestive Heart Failure Example
    examples-hiv-guideline.md:
      title: HIV Screening Guideline Recommendations
    methodology-case-study.md:
      title: Methodology Example - COVID-19 Severity Classification
  downloads.md:
  glossary.md:
  checklists.md:
    clinical-guidelines-development-L1-checklist.md:
      title: L1 Checklist
    clinical-guidelines-development-L2-checklist.md:
      title: L2 Checklist
    clinical-guidelines-development-L3-checklist.md:
      title: L3 Checklist
    clinical-guidelines-development-L4-checklist.md:
      title: L4 Checklist
  documentation-methodology.md:
    title: Mapping and Other Formalisms
  common-care-pathway.md:
    title: Common Care Pathway
  changes.md:
    title: Version History

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
  apply-contact: true
  apply-publisher: true
  apply-version: true
  apply-jurisdiction: true
  apply-license: true
  apply-copyright: true
  apply-wg: true
  path-history: http://hl7.org/fhir/uv/cpg/history.html
  path-binary: ./input/cql
  path-resource: 
    - ./input/vocabulary/codesystem
    - ./input/vocabulary/valueset
  auto-oid-root: 2.16.840.1.113883.4.642.40.48

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
  Approach: approach.html
  Methodology: methodology.html
  Profiles: profiles.html
  Terminology: terminology.html
  Libraries: libraries.html
  Artifacts: artifacts.html
  Examples: examples.html
  Downloads: downloads.html
  Glossary: glossary.html
  Version History: changes.html

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
# NOTE: Added these as overrides because the default SUSHI compiler does not mark them as examples
resources:
  StructureDefinition/chf-bodyweight:
    name: CHF Body Weight
    description: This profile defines how to represent body weight observations in FHIR using a standard LOINC code and UCUM units of measure (in kg).
    exampleBoolean: true
  StructureDefinition/chf-bodyweight-change:
    name: CHF Body Weight Change
    description: This profile defines how to represent body weight change observations in FHIR using a CHF code and UCUM units of measure (in kg).
    exampleBoolean: true
  StructureDefinition/chf-cardiology-consult:
    name: CHF Cardiology Consult
    description: Documents a procedure as an activity within the context of a computable clinical practice guideline
    exampleBoolean: true
  StructureDefinition/chf-cardiology-consult-request:
    name: CHF Cardiology Consult Request
    description: Request for a cardiology consultation as part of a congestive heart failure pathway
    exampleBoolean: true
  StructureDefinition/chf-creatinine:
    name: CHF Creatinine
    description: This profile defines how to represent creatinine observations in FHIR using a LOINC code and UCUM units of measure (in mg/dL).
    exampleBoolean: true
  StructureDefinition/chf-egfr:
    name: CHF eGFR
    description: This profile defines how to represent eGFR in FHIR using a CHF code and UCUM units of measure (in mol/mm/m2).
    exampleBoolean: true
  StructureDefinition/chf-jvp:
    name: CHF Jugular Venous Pressure
    description: This profile defines how to represent jugular venous pressure observations in FHIR using a CHF code and UCUM units of measure (in cmH2O).
    exampleBoolean: true
  StructureDefinition/chf-jvp-request:
    name: CHF Jugular Venous Pressure Request
    description: Request to measure jugular venous pressure as part of a congestive heart failure pathway
    exampleBoolean: true
  StructureDefinition/chf-lasix-iv-administration:
    name: CHF LASIX IV Administration
    description: Documents the administration of LASIX IV as a pathway event within a congestive heart failure pathway
    exampleBoolean: true
  StructureDefinition/chf-lasix-iv-request:
    name: CHF LASIX IV Request
    description: Request to administer LASIX IV as part of a congestive heart failure pathway
    exampleBoolean: true
  StructureDefinition/chf-lasix-po-administration:
    name: CHF LASIX PO Administration
    description: Documents the administration of LASIX PO as a pathway event within a congestive heart failure pathway
    exampleBoolean: true
  StructureDefinition/chf-lasix-po-request:
    name: CHF LASIX PO Request
    description: Request to administer LASIX PO as part of a congestive heart failure pathway
    exampleBoolean: true
  StructureDefinition/chf-net-io:
    name: CHF Net Intake/Output
    description: This profile defines how to represent net intake/output observations in FHIR using a CHF code and UCUM units of measure (in L/day).
    exampleBoolean: true
  StructureDefinition/chf-o2-sat:
    name: CHF Oxygen Saturation
    description: This profile defines how to represent oxygen saturation observations in FHIR using a standard LOINC code and UCUM units of measure.
    exampleBoolean: true
  StructureDefinition/chf-o2-sat-request:
    name: CHF Oxygen Saturation Request
    description: Request to measure oxygen saturation as part of a congestive heart failure pathway
    exampleBoolean: true
  StructureDefinition/chf-potassium:
    name: CHF Potassium
    description: This profile defines how to represent potassium observations in FHIR using a standard LOINC code and UCUM units of measure (in meq/L).
    exampleBoolean: true
  StructureDefinition/chf-urine-out:
    name: CHF Urine Out
    description: This profile defines how to represent urine output observations in FHIR using a LOINC code and UCUM units of measure (in L/day).
    exampleBoolean: true
  # ImplementationGuide/hl7.fhir.uv.cpg.chf: omit #omit this because this template does not generate HTML for IG, so the link from TOC fails
#   Patient/my-example-patient:
#     name: My Example Patient
#     description: An example Patient
#     exampleBoolean: true
#   Patient/bad-example: omit
#
#
# Groups can control certain aspects of the IG generation.  The IG
# documentation recommends that authors use the apply groups that
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
# The apply value for this property is false.
#
# FSHOnly: false
#
#
# When set to true, the "short" and "definition" field on the root element of an Extension will
# be set to the "Title" and "Description" of that Extension. apply is true.
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
  # While SUSHI applys to false for legacy reasons, manualSliceOrding is recommended for new projects.
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


---

// File: input/pagecontent/activityflow.md

### General Activity Flow

Building on the [Workflow](https://hl7.org/fhir/R4/workflow.html) module in FHIR, this topic describes in detail how each type of activity in a computable Clinical Guideline transitions through the overall phases of the activity lifecycle, as depicted in the following diagram:

<div>
  <img src="unified-activity-flow.png" alt="Unified State Diagram for Activity Workflow" height="400" width="700"/>
</div>

Down the left side of the diagram are the activity _phases_:

* Definition: Activities are specified as definitions using one of the ActivityDefinition profiles
* Proposal: Definitions are _applied_ to produce a proposal, or a suggestion or recommendation to perform (or not perform) a particular activity
* Plan: The proposal is accepted or rejected by the user, resulting in a plan to perform (or not perform) the activity
* Order: The plan is authorized by an appropriately qualified user, resulting in an order to perform (or not perform) the activity
* Event: The order is fulfilled through actually performing the activity (or indicating why the activity was not performed).

The proposal, plan, and order phases are all represented using the request pattern ([Request State Machine](https://hl7.org/fhir/R4/request.html#statemachine)), while the event phase is represented using the event pattern ([Event Statement Machine](https://hl7.org/fhir/R4/event.html#statemachine)).

<!--
Phase -> Definition -> Proposal -> Plan -> Order -> Event

RequestStatus -> draft | active | on-hold | revoked | completed | entered-in-error | unknown

EventStatus -> preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
-->

In general, decision support services will typically produce Request resources in proposal intent with a status of draft, indicating the proposal is in need of additional information, or active, indicating the proposal is a complete recommendation, ready to be accepted or rejected.

Valid state transitions for RequestStatus:

* draft -> active
* active -> on-hold
* on-hold -> active
* active -> completed
* active -> revoked

In addition, any state can be transitioned to entered-in-error

Only active proposals can be transitioned to plans. Transitioning a proposal to a plan is expected to produce a Request resource in plan intent with a status of draft or active

Only active plans can be transitioned to orders. Transitioning a plan to an order is expected to produce a Request resource in order intent with a status of draft or active

Only active orders can be transitioned to events. Transitioning an order to an event is expected to produce an Event resource with a status of prepration or in-progress

With the appropriate authority, the plan and/or order steps in this flow can be skipped (i.e. a proposal can transition directly to an order or an event)

The draft status for requests can be used to indicate that the request is not yet complete enough to be moved to the next phase and that more information is needed to do so. This information (and the status change to active) can be provided with the Update operation.

Valid state transitions for EventStatus:

* preparation -> not-done
* preparation -> in-progress
* in-progress -> on-hold
* on-hold -> in-progress
* in-progress -> completed
* in-progress -> stopped

In addition, any state can be transitioned to entered-in-error

Accounting for these general state transitions, the following sections detail a proposed set of capabilities for transitioning activities
through the various phases of proposal, plan, order, and event. Each capability provides a snippet of pseudo-code that describes what
changes are made to resource elements by that transition. These capabilities are described in terms of the Request and Event patterns,
so this is only a pattern-level description of the capability. Following the description of each capability is a set of tables that describe exactly what elements and values need to be used in these capabilities to apply each transition to the concrete resources used to represent each type of activity.

### Activity Flow State Transition Capabilities

#### Update

Given a draft or active request, update the request. This includes transitioning a request from draft to active status.

```
requestApi.update(Request inputRequest)
    check inputRequest.status in { draft | active }
    engine.save(inputRequest)
```

Given a preparation or in-progress event, update the event

```
requestApi.update(Event inputEvent)
    check inputEvent.status in { preparation | in-progress }
    engine.save(inputEvent)
```

#### Suspend

Given an active request, suspend the request, with or without a reason

```
requestApi.suspend(Request inputRequest, String reason)
    check inputRequest.status = active
    set inputRequest.status = on-hold
    set inputRequest.statusReason = reason
    engine.save(inputRequest)
```

Given an in-progress event, suspend the event, with or without a reason

```
requestApi.suspend(Event inputEvent, String Reason)
    check inputEvent.status = in-progress
    set inputEvent.status = on-hold
    set inputEvent.statusReason = reason
    engine.save(inputEvent)
```

#### Resume

Given a suspended request, resume the request

```
requestApi.resume(Request inputRequest)
    check inputRequest.status = on-hold
    set inputRequest.status = active
    set inputRequest.statusReason = null
    engine.save(inputRequest)
```

Given a suspended event, resume the event

```
requestApi.resume(Event inputEvent)
    check inputEvent.status = on-hold
    set inputEvent.status = in-progress
    set inputEvent.statusReason = null
    engine.save(inputEvent)
```

#### Plan

Given an active proposal, plan the proposal:

```
Request requestApi.preparePlan(Request inputProposal)
    check inputProposal.intent = proposal
    check inputProposal.status = active
    var result = new Request(copy from inputProposal)
    set result.id = null
    set result.intent = plan
    set result.status = draft
    set result.basedOn = referenceTo(inputProposal)

requestApi.initiatePlan(Request preparedPlan)
    check preparedPlan.basedOn is not null
    var basedOnProposal = engine.get(preparedPlan.basedOn)
    check basedOnProposal.intent = proposal
    check basedOnProposal.status = active
    check preparedPlan.status in { draft | active }
    check preparedPlan.intent = plan
    engine.save(preparedPlan)
```

Note that this operation is performed in two steps in order to allow for application-level interation to occur. The _prepare_ step constructs a draft plan that can then be presented in an application, and the _initiate_ step then operates on that prepared draft plan to finalize the actual changes.

Note also that this capability applies to both a proposal for an activity, as well as a proposal _not_ to perform. In the latter case, the creation of a request with plan intent means a plan to not perform the activity.

#### Revoke

Given an active request, revoke the request, with or without a reason. Revoking a request indicates that the request is no longer applicable, and is typically done by the actor that originated the request. This is different than rejecting a request, which is done with the Reject operation.

```
requestApi.revoke(Request inputRequest, String inputReason)
    check inputRequest.status = active
    set inputRequest.status = revoked
    set inputRequest.statusReason = inputReason
    engine.save(inputProposal)
```

#### Reject

Given an active request, reject the request, with or without a reason

```
requestApi.reject(Request inputRequest, Task fulfillmentTask, String inputReason)
    check inputRequest.status = active
    check fulfillmentTask.status = requested
    check fulfillmentTask.focus = inputRequest
    check fulfillmentTask.code = fulfill
    set fulfillmentTask.status = rejected
    set fulfillmentTask.statusReason = inputReason
    engine.save(fulfillmentTask)
```

#### Order

Given an active proposal or plan, order the proposal

```
Request requestApi.prepareOrder(Request inputRequest)
    check inputRequest.intent in { proposal | plan }
    check inputRequest.status = active
    var result = new Request(copy from inputRequest)
    set result.id = null
    set result.intent = order
    set result.status = draft
    set result.basedOn = referenceTo(inputRequest)

requestApi.initiateOrder(Request preparedOrder)
    check preparedOrder.basedOn is not null
    var basedOn = engine.get(preparedOrder.basedOn)
    check basedOn.intent in { proposal | plan }
    check basedOn.status = active
    check preparedOrder.status in { draft | active }
    check preparedOrder.intent = order
    set basedOn.status = completed
    try
        engine.save(preparedOrder)
        engine.save(basedOn)
    commit
```

Note that this operation is performed in two steps in order to allow for application-level interation to occur. The _prepare_ step constructs a draft order that can then be presented in an application, and the _initiate_ step then operates on that prepared draft order to finalize the actual changes.

Note also that this capability applies to both an order for an activity, as well as an order _not_ to perform. In the latter case, the creation of a request with order intent means an order not to perform the activity.

#### Entered In Error

Given a request, mark the proposal entered-in-error, with or without a reason

```
requestApi.enteredInError(Request inputRequest, String reason)
    set inputRequest.status = entered-in-error
    set inputRequest.statusReason = reason
    engine.save(inputRequest)
```

Given an event, mark the event entered-in-error, with or without a reason

```
requestApi.enteredInError(Event inputEvent, String reason)
    set inputEvent.status = entered-in-error
    set inputEvent.statusReason = reason
    engine.save(inputEvent)
```

#### Perform

Given an active proposal, plan, or order, perform the event

```
Event requestApi.preparePerform(Request inputRequest)
    check inputRequest.intent in { proposal | plan | order }
    check inputRequest.status = active
    var result = new Event(copy from inputRequest)
    result.status = preparation
    result.basedOn = referenceTo(inputRequest)

requestApi.initiatePerform(Event preparedEvent)
    check preparedEvent.basedOn is not null
    var basedOn = engine.get(preparedEvent.basedOn)
    check basedOn.intent in { proposal | plan | order }
    check basedOn.status = active
    check preparedEvent.status in { preparation | in-progress }
    set basedOn.status = completed // see completion note
    try
      engine.save(basedOn)
      engine.save(preparedEvent)
    commit
```

Note that this operation is performed in two steps in order to allow for application-level interation to occur. The _prepare_ step constructs a draft event that can then be presented in an application, and the _initiate_ step then operates on that prepared draft event to finalize the actual changes.

Whether this capability should set the status of the request to complete depends on whether the activity overall is complete. For example, if the activity is a medication prescription, whether the request should be marked complete depends on whether the dispense/administration/documentation represents a completion of the activity. Dispensing the initial fill, when there are multiple refills ordered, does not complete the overall order, so the status should remain active until all actions related to the completion of the order are done.

Note that in general, this capability is not used for requests not to perform an activity; in those cases there is typically no event resource, since the activity should not be performed.

#### Start

Given a preparation event, start the event

```
requestApi.start(Event inputEvent)
    check inputEvent.status = preparation
    set inputEvent.status = in-progress
    engine.save(inputEvent)
```

#### Not Done

Given a preparation event, mark the event not-done  (with or without a reason)

```
requestApi.notDone(Event inputEvent, String reason)
    check inputEvent.status = preparation
    set inputEvent.status = not-done
    set inputEvent.statusReason = reason
    engine.save(inputEvent)
```

#### Stop

Given an in-progress event, stop the event, with or without a reason

```
requestApi.stop(Event inputEvent, String reason)
    check inputEvent.status = in-progress
    set inputEvent.status = stopped
    set inputEvent.statusReason = reason
    engine.save(inputEvent)
```

#### Complete

Given an in-progress event, complete the event

```
requestApi.complete(Event inputEvent)
    check inputEvent.status = in-progress
    set inputEvent.status = completed
    engine.save(inputEvent)
```

### Activity Lifecycle - Request Phases (Proposal, Plan, Order)

The following table summarizes the request resource types and the `instantiates`, `basedOn`, and `status` elements and values for each activity as it moves through the activity flow.

* The `instantiates` Element column is the name of the element in the resource type that provides the link from the proposal to the definition
* The `basedOn` Element column is the name of the element in the resource type that provides the link from the plan to the proposal, and from the order to the plan
* The `status` Element column is the name of the status element in the resource type
* Each of the status value columns (Draft, Active, etc.) give the status values for each request resource (i.e. proposal, plan, order)

|Activity|Resource Type|`instantiates` Element |`basedOn` Element |`status` Element |Draft |Active |On-hold |Revoked |Completed |Entered-in-error |
|:----|:----|:----|:----|:----|:----|:----|:----|:----|:----|:----|
|[Send Message](examples-activities.html#send-a-message)|[CPGCommunicationRequest](StructureDefinition-cpg-communicationrequest.html)|[instantiatesCanonical](StructureDefinition-cpg-communicationrequest-definitions.html#diff_CommunicationRequest.extension:instantiatesCanonical)|[basedOn](StructureDefinition-cpg-communicationrequest-definitions.html#CommunicationRequest.basedOn)|[status](StructureDefinition-cpg-communicationrequest-definitions.html#diff_CommunicationRequest.status)|draft|active|on-hold|revoked|completed|entered-in-error|
|[Collect information](examples-activities.html#collect-information)|[CPGQuestionnaireTask](StructureDefinition-cpg-questionnairetask.html)|[instantiatesCanonical](StructureDefinition-cpg-questionnairetask-definitions.html#key_Task.instantiatesCanonical)|[basedOn](StructureDefinition-cpg-questionnairetask-definitions.html#key_Task.basedOn)|[status](StructureDefinition-cpg-questionnairetask-definitions.html#key_Task.status)|draft|in-progress|on-hold|failed|completed|entered-in-error|
|[Order a medication](examples-activities.html#order-a-medication)|[CPGMedicationRequest](StructureDefinition-cpg-medicationrequest.html)|[instantiatesCanonical](StructureDefinition-cpg-medicationrequest-definitions.html#key_MedicationRequest.instantiatesCanonical)|[basedOn](StructureDefinition-cpg-medicationrequest-definitions.html#MedicationRequest.basedOn)|[status](StructureDefinition-cpg-medicationrequest-definitions.html#key_MedicationRequest.status)|draft|active|on-hold|stopped|completed|entered-in-error|
|[Dispense a medication](examples-activities.html#dispense-a-medication)|[CPGDispenseMedicationTask](StructureDefinition-cpg-dispensemedicationtask.html)|[instantiatesCanonical](StructureDefinition-cpg-dispensemedicationtask-definitions.html#key_Task.instantiatesCanonical)|[basedOn](StructureDefinition-cpg-dispensemedicationtask-definitions.html#key_Task.basedOn)|[status](StructureDefinition-cpg-dispensemedicationtask-definitions.html#key_Task.status)|draft|in-progress|on-hold|failed|completed|entered-in-error|
|[Administer a medication](examples-activities.html#administer-a-medication)|[CPGAdministerMedicationTask](StructureDefinition-cpg-administermedicationtask.html)|[instantiatesCanonical](StructureDefinition-cpg-administermedicationtask-definitions.html#key_Task.instantiatesCanonical)|[basedOn](StructureDefinition-cpg-administermedicationtask-definitions.html#key_Task.basedOn)|[status](StructureDefinition-cpg-administermedicationtask-definitions.html#key_Task.status)|draft|in-progress|on-hold|failed|completed|entered-in-error|
|[Document a medication](examples-activities.html#document-a-medication)|[CPGDocumentMedicationTask](StructureDefinition-cpg-documentmedicationtask.html)|[instantiatesCanonical](StructureDefinition-cpg-documentmedicationtask-definitions.html#key_Task.instantiatesCanonical)|[basedOn](StructureDefinition-cpg-documentmedicationtask-definitions.html#key_Task.basedOn)|[status](StructureDefinition-cpg-documentmedicationtask-definitions.html#key_Task.status)|draft|in-progress|on-hold|failed|completed|entered-in-error|
|[Recommend an immunization](examples-activities.html#recommend-an-immunization)|[CPGImmunizationRequest](StructureDefinition-cpg-immunizationrequest.html)|[instantiatesCanonical](StructureDefinition-cpg-immunizationrequest-definitions.html#key_MedicationRequest.instantiatesCanonical)|[basedOn](StructureDefinition-cpg-immunizationrequest-definitions.html#MedicationRequest.basedOn)|[status](StructureDefinition-cpg-immunizationrequest-definitions.html#key_MedicationRequest.status)|draft|active|on-hold|stopped|completed|entered-in-error|
|[Order a service](examples-activities.html#order-a-service)|[CPGServiceRequest](StructureDefinition-cpg-servicerequest.html)|[instantiatesCanonical](StructureDefinition-cpg-servicerequest-definitions.html#key_ServiceRequest.instantiatesCanonical)|[basedOn](StructureDefinition-cpg-servicerequest-definitions.html#ServiceRequest.basedOn)|[status](StructureDefinition-cpg-servicerequest-definitions.html#key_ServiceRequest.status)|draft|active|on-hold|revoked|completed|entered-in-error|
|[Enroll a patient](examples-activities.html#enroll-a-patient)|[CPGEnrollmentTask](StructureDefinition-cpg-enrollmenttask.html)|[instantiatesCanonical](StructureDefinition-cpg-enrollmenttask-definitions.html#key_Task.instantiatesCanonical)|[basedOn](StructureDefinition-cpg-enrollmenttask-definitions.html#key_Task.basedOn)|[status](StructureDefinition-cpg-enrollmenttask-definitions.html#key_Task.status)|draft|in-progress|on-hold|failed|completed|entered-in-error|
|[Generate a report](examples-activities.html#generate-a-report)|[CPGGenerateReportTask](StructureDefinition-cpg-generatereporttask.html)|[instantiatesCanonical](StructureDefinition-cpg-generatereporttask-definitions.html#key_Task.instantiatesCanonical)|[basedOn](StructureDefinition-cpg-generatereporttask-definitions.html#key_Task.basedOn)|[status](StructureDefinition-cpg-generatereporttask-definitions.html#key_Task.status)|draft|in-progress|on-hold|failed|completed|entered-in-error|
|[Propose a diagnosis](examples-activities.html#propose-a-diagnosis)|[CPGProposeDiagnosisTask](StructureDefinition-cpg-proposediagnosistask.html)|[instantiatesCanonical](StructureDefinition-cpg-proposediagnosistask-definitions.html#key_Task.instantiatesCanonical)|[basedOn](StructureDefinition-cpg-proposediagnosistask-definitions.html#key_Task.basedOn)|[status](StructureDefinition-cpg-proposediagnosistask-definitions.html#key_Task.status)|draft|in-progress|on-hold|failed|completed|entered-in-error|
|[Record a detected issue](examples-activities.html#record-a-detected-issue)|[CPGRecordDetectedIssueTask](StructureDefinition-cpg-recorddetectedissuetask.html)|[instantiatesCanonical](StructureDefinition-cpg-recorddetectedissuetask-definitions.html#key_Task.instantiatesCanonical)|[basedOn](StructureDefinition-cpg-recorddetectedissuetask-definitions.html#key_Task.basedOn)|[status](StructureDefinition-cpg-recorddetectedissuetask-definitions.html#key_Task.status)|draft|in-progress|on-hold|failed|completed|entered-in-error|
|[Record an inference](examples-activities.html#record-an-inference)|[CPGRecordInferenceTask](StructureDefinition-cpg-recordinferencetask.html)|[instantiatesCanonical](StructureDefinition-cpg-recordinferencetask-definitions.html#key_Task.instantiatesCanonical)|[basedOn](StructureDefinition-cpg-recordinferencetask-definitions.html#key_Task.basedOn)|[status](StructureDefinition-cpg-recordinferencetask-definitions.html#key_Task.status)|draft|in-progress|on-hold|failed|completed|entered-in-error|
|[Report a flag](examples-activities.html#report-a-flag)|[CPGReportFlagTask](StructureDefinition-cpg-reportflagtask.html)|[instantiatesCanonical](StructureDefinition-cpg-reportflagtask-definitions.html#key_Task.instantiatesCanonical)|[basedOn](StructureDefinition-cpg-reportflagtask-definitions.html#key_Task.basedOn)|[status](StructureDefinition-cpg-reportflagtask-definitions.html#key_Task.status)|draft|in-progress|on-hold|failed|completed|entered-in-error|


### Activity Lifecycle - Event Phase

The following table summarizes the event reosurce types for each activity type, and the `basedOn` and `status` elements and values for each activity as it moves through the activity flow.

* The `basedOn` Element column is the name of the element in the resource type that represents the link from the event resource back to the request that it is based on
* The `status` Element column is the name of the status element in the resource type
* Each of the status value columns (Preparation, In-progress, etc) give the value of the status element for that status

|Activity |Resource Type |`basedOn` Element |`status` element|Preparation|In-progress|Not-Done|On Hold|Stopped|Completed|Entered-in-error|
|:----|:----|:----|:----|:----|:----|:----|:----|:----|:----|:----|
|[Send Message](examples-activities.html#send-a-message)|[CPGCommunication](StructureDefinition-cpg-communication.html)|[basedOn](StructureDefinition-cpg-communication-definitions.html#key_Communication.basedOn)|[status](StructureDefinition-cpg-communication-definitions.html#key_Communication.status)|preparation|in-progress|not-done|on-hold|stopped|completed|entered-in-error|
|[Collect information](examples-activities.html#collect-information)|[CPGQuestionnaireResponse](StructureDefinition-cpg-questionnaireresponse.html)|[basedOn](StructureDefinition-cpg-questionnaireresponse-definitions.html#QuestionnaireResponse.basedOn)|[status](StructureDefinition-cpg-questionnaireresponse-definitions.html#QuestionnaireResponse.status)|<unknown>|in-progress|cancelled|on-hold|failed|completed|entered-in-error|
|[Order a medication](examples-activities.html#order-a-medication)|See "Dispense a medication" \n"Administer a Medication" \n"Document a Medication"|-|-|-|-|-|-|-|-|-|
|[Dispense a medication](examples-activities.html#dispense-a-medication)|[CPGMedicationDispense](StructureDefinition-cpg-medicationdispense.html)|[authorizingPrescription](StructureDefinition-cpg-medicationdispense-definitions.html#key_MedicationDispense.authorizingPrescription)|[status](StructureDefinition-cpg-medicationdispense-definitions.html#key_MedicationDispense.status)|preparation|in-progress|cancelled|on-hold|stopped|completed|entered-in-error|
|[Administer a medication](examples-activities.html#administer-a-medication)|[CPGMedicationAdministration](StructureDefinition-cpg-medicationadministration.html)|[request](StructureDefinition-cpg-medicationadministration-definitions.html#key_MedicationAdministration.request)|[status](StructureDefinition-cpg-medicationadministration-definitions.html#key_MedicationAdministration.status)|<none>|in-progress|not-done|on-hold|stopped|completed|entered-in-error|
|[Document a medication](examples-activities.html#document-a-medication)|[CPGMedicationStatement](StructureDefinition-cpg-medicationstatement.html)|[basedOn](StructureDefinition-cpg-medicationstatement-definitions.html#key_MedicationStatement.basedOn)|[status](StructureDefinition-cpg-medicationstatement-definitions.html#key_MedicationStatement.status)|intended|active|not-taken|on-hold|stopped|completed|entered-in-error|
|[Recommend an immunization](examples-activities.html#recommend-an-immunization)|[CPGImmunization](StructureDefinition-cpg-immunization.html)|[](StructureDefinition-cpg-immunization-definitions.html#key_Immunization.extension:basedOn)|[status](StructureDefinition-cpg-immunization-definitions.html#key_Immunization.status)|<none>|<none>|not-done|<none>|<none>|completed|entered-in-error|
|[Order a service](examples-activities.html#order-a-service)|[CPGProcedure](StructureDefinition-cpg-procedure.html)|[basedOn](StructureDefinition-cpg-procedure-definitions.html#key_Procedure.basedOn)|[status](StructureDefinition-cpg-procedure-definitions.html#key_Procedure.status)|preparation|in-progress|not-done|on-hold|stopped|completed|entered-in-error|
|[Enroll a patient](examples-activities.html#enroll-a-patient)|[CPGCase](StructureDefinition-cpg-case.html)|<none>|[status](StructureDefinition-cpg-case-definitions.html#key_EpisodeOfCare.status)|planned|active|cancelled|onhold|<unknown>|finished|entered-in-error|
|[Generate a report](examples-activities.html#generate-a-report)|[CPGMetricReport](StructureDefinition-cpg-metricreport.html)|<none>|[status](StructureDefinition-cpg-metricreport-definitions.html#key_MeasureReport.status)|<none>|pending|<none>|<none>|<none>|complete|error|
|^|[CPGCaseSummary](StructureDefinition-cpg-casesummary.html)|[summaryFor](StructureDefinition-cpg-casesummary-definitions.html#key_Composition.extension:summaryFor)|[status](StructureDefinition-cpg-casesummary-definitions.html#key_Composition.status)|<none>|pending|<none>|<none>|<none>|complete|error|
|^|[CPGCasePlanSummary](StructureDefinition-cpg-caseplansummary.html)|[summaryFor](StructureDefinition-cpg-caseplansummary-definitions.html#key_Composition.extension:summaryFor)|[status](StructureDefinition-cpg-caseplansummary-definitions.html#key_Composition.status)|<none>|pending|<none>|<none>|<none>|complete|error|
|^|[CPGCasePlanProgressingNote](StructureDefinition-cpg-caseplanprogressingnote.html)|[summaryFor](StructureDefinition-cpg-caseplanprogressingnote-definitions.html#key_Composition.extension:summaryFor)|[status](StructureDefinition-cpg-caseplanprogressingnote-definitions.html#key_Composition.status)|<none>|pending|<none>|<none>|<none>|complete|error|
|[Propose a diagnosis](examples-activities.html#propose-a-diagnosis)|[CPGCondition](StructureDefinition-cpg-condition.html)|<none>|clinicalStatus and verificationStatus are present but neither map to event status|-|-|-|-|-|-|-|
|[Record a detected issue](examples-activities.html#record-a-detected-issue)|[CPGDetectedIssue](StructureDefinition-cpg-detectedissue.html)|<none>|[status](StructureDefinition-cpg-detectedissue-definitions.html#key_DetectedIssue.status)|preliminary?|<none>|cancelled|<none>|<none>|final|entered-in-error|
|[Record an inference](examples-activities.html#record-an-inference)|[CPGObservation](StructureDefinition-cpg-observation.html)|[basedOn](StructureDefinition-cpg-observation-definitions.html#key_Observation.basedOn)|[status](StructureDefinition-cpg-observation-definitions.html#key_Observation.status)|preliminary?|<none>|cancelled|<none>|<none>|final|entered-in-error|
|[Report a flag](examples-activities.html#report-a-flag)|[CPGFlag](StructureDefinition-cpg-flag.html)|<none>|[status](StructureDefinition-cpg-flag-definitions.html#key_Flag.status)|<none>|active|<none>|<none>|inactive?|<none>|entered-in-error|



---

// File: input/pagecontent/approach.md

The Approach section of this implementation guide describes how guideline developers, informaticians (knowledge engineers and others), and implementers of computable representations of guidelines can collaborate across the lifecycle of guideline-directed care and related activities (clinical decision support, quality measurement, case reporting, continuous improvement), leveraging existing standards-based approaches.

Broadly, the approach taken by this implementation guide is to establish a conceptual architecture that identifies key domain concepts, artifacts, and patterns used in the description and delivery of clinical guidance, along with a framework for characterizing the nature and usage of artifacts within that conceptual architecture, ultimately advocating for an agile, cross-functional approach to guideline development.

The Approach documentation includes sections intended to describe the work effort and products of each of the key roles in the development lifecycle of a computable Clinical Practice Guideline (CPG). While the approach is not a step-by-step guide using specific tools and techniques, it does attempt to provide enough context to orient all contributors to the collective work to be undertaken, to provide a framework for undertaking such collaborative work, and to provide enough detail to inform the development, translation, and representation of a clinical guideline into the CPG knowledge architecture as characterized in machine-readable form by the CPG Profiles and conformance requirements defined in this implementation guide.

The Approach section is divided into five sections linked from this page. Brief descriptions of the contents of each section is presented below.

### Conceptual Knowledge Architecture

This section provides an overview and approach for how key domain concepts and their separations are expressed as a “domain model” and realized as computable knowledge assets or artifacts. It explains how expressions of patient disease (clinical and physiological) processes that describe the state of a patient at a given point in time (Case) are to be separated from expressions of clinician decision-making or care processes that describe what to do for a patient given their state (Plan) and how both are to be separated from expressions of how that care is to be delivered in a given setting at a given point in time (Workflow).

This section further describes how these separations interact with one another and provide the basis for the requirements of the explicit, computable knowledge assets/artifacts as expressed in the CPG Profiles. Understanding these separations, their characteristics and attributes, the nature of each type of process, and the relationship between them is essential for the knowledge engineer to comprehend and apply to each Clinical Practice Guideline in making it computable. Furthermore, these separations ensure appropriately sophisticated logic to fully express the domain and intent of the guideline without conflation of distinct logic and the correlated creation of value-diminishing complexity.

*   [Knowledge Architecture (Conceptual Perspective)](documentation-approach-12-conceptual-knowledge-architecture.html)
*   [Separation of Concerns in the CPG](documentation-approach-12-01-separations-of-concerns-in-the-cpg.html)
*   [Separating and Defining Case, Plan, and Workflow](documentation-approach-12-02-separating-and-defining-case-plan-and-workflow.html)
*   [Plan](documentation-approach-12-03-cpg-plan.html)
*   [Case](documentation-approach-12-04-cpg-case.html)
*   [Care Plan](documentation-approach-12-05-cpg-careplan.html)
*   [Workflow and Common Pathway](documentation-approach-12-06-cpg-common-pathway.html)
*   [Derivative & Related Assets](documentation-approach-12-07-cpg-derivative-and-related-assets.html)

### Guideline Development

This section provides a basic description of the Guideline Development Process, its participants, the processes, tools, and frameworks which they use. It further describes the role of the (computable) Clinical Practice Guideline (CPG) in the “Evidence Ecosystem” and Learning Health System. Lastly, it covers the various computable CPG artifacts that express the guideline and its derivatives (e.g., Measures) as well as their value to various stakeholders impacted by the development of computable Clinical Practice Guidelines (CPGs).

*   [Overview of the Guideline Development process](documentation-approach-04-guideline-development.html)
*   [Description of the Guideline Development Group (GDG) and Scoping](documentation-approach-04-01-guideline-development-group.html)
*   [Guideline Development Frameworks](documentation-approach-04-02-guideline-development-frameworks.html)
*   [6S Evidence Pyramid and Learning Health System(s)](documentation-approach-04-03-6S-evidence-pyramid-and-learning-health-systems.html)
*   [Analysis of Evidence, Recommendations, and Reporting](documentation-approach-04-04-analysis-of-evidence-recommendations-reporting.html)
*   [Development of Computable Clinical Guideline Artifacts](documentation-approach-04-05-computable-guideline-artifacts.html)

### Knowledge Engineering

This section provides a basic description of the Knowledge Engineering activities, processes, techniques, and tools that specialized informaticians known as knowledge engineers apply to translate the domain-oriented content of a Clinical Practice Guideline into its faithful computable representation using the Conceptual Knowledge Architecture described above and its concretion in the FHIR Profiles defined in another section. It presents the Agile Approach to CPG Development, which describes using Agile principles and techniques and characteristics of the computable CPG itself (e.g., composite artifacts) to more rapidly develop high quality computable artifacts as an integrated, cross-functional team.

*   [Knowledge Engineering Overview](documentation-approach-05-knowledge-engineering-overview.html)
*   Key Phases of the Knowledge Lifecycle
    *   [Knowledge Acquisition](documentation-approach-05-01-knowledge-acquisition.html)
    *   [Knowledge Translation](documentation-approach-05-02-knowledge-translation.html)
    *   [Knowledge Representation](documentation-approach-05-03-knowledge-representation.html)
    *   [Knowledge Execution and Validation](documentation-approach-05-04-knowledge-execution-and-validation.html)
    *   [Knowledge Implementation](documentation-approach-05-05-knowledge-implementation.html)
*   [Agile CPG Development Approach](documentation-approach-05-06-agile-cpg-development-approach.html)

### Knowledge Representation

This section provides a basic description of the knowledge assets and artifacts that express the Clinical Practice Guideline in various levels of representation from narrative content to semi-structured representations, to computer-interpretable artifacts, and as implemented in a real-world setting. Knowledge representation results from Knowledge Engineers translating the clinical intent of the narrative guideline into computer-interpretable representationsfaithful to intent of narrative guideline. Along the translation path, intermediate representations are created as work products to serve both as a validation between clinical domain SMEs and technical knowledge engineers, and these work products are used to inform downstream implementers. Lastly, this section describes the approach taken to design and defines the computable knowledge assets and their relationship(s) to one another.

*   [Knowledge Representation Overview](documentation-approach-02-04-knowledge-representation.html)
*   [Levels of Representation](documentation-approach-06-01-levels-of-knowledge-representation.html) (degrees of formalism/computability)
*   [Tiers of Functionality](documentation-approach-07-tiers-of-functionality.html)
*   [Levels of Representation by Tiers of Functionality](documentation-approach-08-levels-of-representation-by-tiers-of-functionality.html)
*   [Knowledge Assets](documentation-approach-06-02-knowledge-assets.html) (discrete representations with a purpose)
    *   Asset Metadata (information about the assets and knowledge base)
*   [Knowledge Architecture](documentation-approach-06-03-knowledge-architecture.html) (designing and defining the types and nature of assets)

### Implementing Computable Knowledge

This section provides an overview of the methods through which computable logic expressions may be implemented: as a specification, or translated computationally, or computed natively. It details the mechanisms by which the computed inferences and insights may be integrated into various clinical information systems; and how the various workflow enablements through which these computable expressions and their inferences may be manifested to enable guideline-informed clinical workflows and related healthcare activities. This section also provides an overview of the conformance required to ensure compliance with the standards-based specifications described in this Implementation Guide.

*   [Implementation Computable Knowledge Overview](documentation-approach-02-05-knowledge-implementation.html)
*   [Methods of Implementing Knowledge](documentation-approach-09-methods-of-implementation.html) (expressions and artifacts)
*   [Mechanisms of Integration with Clinical Information Systems](documentation-approach-10-mechanisms-of-integration.html)
*   [Levels of Workflow Enablement](documentation-approach-03-conformance-levels.html)
*   [Levels of Conformance](documentation-conformance.html)

---

// File: input/pagecontent/artifacts.md

This page provides indexes of the various artifacts (i.e. profiles, extensions, code systems, and other knowledge artifacts) defined by this implementation guide.

### ActivityDefinition Index

*   [CPG CommunicationRequest ActivityDefinition](ActivityDefinition-cpg-communicationrequest-activitydefinition.html) CPGCommunicationRequestActivityDefinition
*   [CPG CollectInformation ActivityDefinition](ActivityDefinition-cpg-collectinformation-activitydefinition.html) CPGCollectInformationActivityDefinition
*   [CPG Enrollment ActivityDefinition](ActivityDefinition-cpg-enrollment-activitydefinition.html) CPGEnrollmentActivityDefinition
*   [CPG Generate Report ActivityDefinition](ActivityDefinition-cpg-generatereport-activitydefinition.html) CPGGenerateReportActivityDefinition
*   [CPG MedicationRequest ActivityDefinition](ActivityDefinition-cpg-medicationrequest-activitydefinition.html) CPGMedicationRequestActivityDefinition
*   [CPG Dispense Medication ActivityDefinition](ActivityDefinition-cpg-dispensemedication-activitydefinition.html) CPGDispenseMedicationActivityDefinition
*   [CPG Administer Medication ActivityDefinition](ActivityDefinition-cpg-administermedication-activitydefinition.html) CPGAdministerMedicationActivityDefinition
*   [CPG Document Medication ActivityDefinition](ActivityDefinition-cpg-documentmedication-activitydefinition.html) CPGDocumentMedicationActivityDefinition
*   [CPG ImmunizationRequest ActivityDefinition](ActivityDefinition-cpg-immunizationrequest-activitydefinition.html) CPGImmunizationRequestActivityDefinition
*   [CPG ServiceRequest ActivityDefinition](ActivityDefinition-cpg-servicerequest-activitydefinition.html) CPGServiceRequestActivityDefinition
*   [CPG Propose Diagnosis ActivityDefinition](ActivityDefinition-cpg-proposediagnosistask-activitydefinition.html) CPGProposeDiagnosisTaskActivityDefinition
*   [CPG Record DetectedIssue ActivityDefinition](ActivityDefinition-cpg-recorddetectedissue-activity.html) CPGRecordDetectedIssueTaskActivityDefinition
*   [CPG Record Inference ActivityDefinition](ActivityDefinition-cpg-recordinference-activity.html) CPGRecordInferenceTaskActivityDefinition
*   [CPG Report Flag ActivityDefinition](ActivityDefinition-cpg-reportflagtask-activitydefinition.html) CPGReportFlagTaskActivityDefinition

### CapabilityStatement Index

{% include list-capabilitystatements.xhtml %}

### CodeSystem Index {#codesystem-index}

*   [CPG Activity Type](CodeSystem-cpg-activity-type-cs.html)

    A type of activity that can be performed as part of the delivery of guideline-based care.

*   [CPG Case Feature Type](CodeSystem-cpg-casefeature-type-cs.html)

    The type of a case feature, whether asserted (i.e. documented in the patient's record) or inferred (i.e. calculated from the case feature expression)

*   [CPG Case Feature Pertinence](CodeSystem-cpg-casefeature-pertinence-cs.html)

    The pertinence of a case feature relative to a case, guideline, pathway, strategy, or recommendation.

*   [CPG Common Personas](CodeSystem-cpg-common-persona-cs.html)

    Personas are the types of participants in the recommendations of a healthcare guideline, including practitioners, patients, nurses, community health workers, and care partners. The personas identified in this code system are defined based on the WHO recommendation for [Classifying health workers](https://www.who.int/hrh/statistics/Health_workers_classification.pdf). This recommendation uses codes from the [International Standard Classification for Occupations](http://www.ilo.org/public/english/bureau/stat/isco/index.htm) but defines several additional categories of health workers. In addition, the codes in that recommendation are focused on health workers, so codes for patient and care partner personas need to be considered as well. Where a code from the ISCO exists, it is used. Where a WHO recommended health worker category is used, a code is constructed beginning with a W. Where a code is introduced by this implementation guide, it is constructed beginning with a C. Note that the content is incomplete, pending a computable representation of the WHO recommendations.

*   [CPG Common Process](CodeSystem-cpg-common-process-cs.html)

    Common processes performed in providing guideline-based care, regardless of the specific guideline.

*   [CPG Recommendation Direction](CodeSystem-cpg-recommendation-direction-cs.html)

    The direction of a recommendation, either for or against a particular action, taking into account the balance between desirable and undersirable outcomes; the confidence in the magnitude of estimates of effect; the confidence in values and preferences and their variability; and resource use.

### Extension Index {#extension-index}

{% include list-extensions.xhtml %}

### OperationDefinition Index

{% include list-operationdefinitions.xhtml %}

### PlanDefinition Index

*   [CPG Common Pathway](PlanDefinition-cpg-common-pathway.html) CPG\_Common\_Pathway
*   [PlanDefinition - CPG Common Registration](PlanDefinition-cpg-common-registration.html) PlanDefinition\_CPG\_Common\_Registration

### Profile Index {#profile-index}

*   [CPGAdministerMedicationActivity](StructureDefinition-cpg-administermedicationactivity.html)

    Definition of a proposal to administer a medication as part of a computable clinical practice guideline

*   [CPGAdministerMedicationTask](StructureDefinition-cpg-administermedicationtask.html)

    Recommendation to administer a specific medication as part of the delivery of a computable clinical practice guideline

*   [CPGCarePlan](StructureDefinition-cpg-careplan.html)

    CPG care plan represents the care plan for a specific patient. The care plan may be associated with management of a specific condition, and instantiated based on a particular pathway or strategy, or it may be a combined care plan, focused on the patient, and managing treatment for multiple conditions, instantiated based on multiple pathways and strategies

*   [CPGCareTeam](StructureDefinition-cpg-careteam.html)

    CPG care team represents a care team for a specific patient

*   [CPGCareTeamDefinition](StructureDefinition-cpg-careteamdefinition.html)

    Defines the minimum expectations for a definitional care team for use with computable guideline content

*   [CPGCase](StructureDefinition-cpg-case.html)

    CPG case represents a specific case of a patient enrolled in a particular pathway. The enrollment may have been automatic, prompted, or manual.

*   [CPGCaseFeatureDefinition](StructureDefinition-cpg-casefeaturedefinition.html)

    Profile of StructureDefinition to represent a case feature of a clinical practice guideline, optionally specifying formal computational semantics, as well as relationships to other case features and specific aspects of the guideline

*   [CPGCasePlanProgressingNote](StructureDefinition-cpg-caseplanprogressingnote.html)

    CPG Case Plan Progressing Note combines relevant case features and feature groups with proposals, plans, and clinical impressions to provide a means to document patient progression with respect to a pathway in the context of a computable clinical practice guideline

*   [CPGCasePlanSummary](StructureDefinition-cpg-caseplansummary.html)

    CPG Case Plan Summary addresses information from the plan portion of the CPG, including patient-specific recommendations (i.e., proposals) along with their respective pertinent patient information and guideline recommendations that are either not applicable or not yet applicable to a specific patient

*   [CPGCasePlanSummaryDefinition](StructureDefinition-cpg-caseplansummarydefinition.html)

    CPG Case Plan Summary Definition provides a computable definition for the case features and feature groups relevant to a particular pathway, strategy, or recommendation of a clinical practice guideline

*   [CPGCaseSummary](StructureDefinition-cpg-casesummary.html)

    CPG Case Summary is the set of case features and feature groups that completely represent the case data scoped by the clinical practice guideline. This expresses the complete patient state at any given point in time.

*   [CPGCaseSummaryDefinition](StructureDefinition-cpg-casesummarydefinition.html)

    CPG Case Summary Definition provides a computable definition for all the case features and feature groups relevant to a clinical practice guideline

*   [CPGClinicalImpression](StructureDefinition-cpg-clinicalimpression.html)

    CPG Clinical Impression captures clinician judgement at any particular point, and related to the case features and pathway, strategies, and recommendations.

*   [CPGCollectInformationActivity](StructureDefinition-cpg-collectinformationactivity.html)

    Definition of a recommendation to collect information using a specific questionnaire as part of a computable clinical practice guideline

*   [CPGCommunication](StructureDefinition-cpg-communication.html)

    Documents a communication with a patient or other participant as an activity within the context of a computable clinical practice guideline

*   [CPGCommunicationActivity](StructureDefinition-cpg-communicationactivity.html)

    Definition of a recommendation for a specific communication with the patient or other participant as part of a computable clinical practice guideline

*   [CPGCommunicationRequest](StructureDefinition-cpg-communicationrequest.html)

    Recommendation for a specific communication with the patient or other participant as part of the delivery of a computable clinical practice guideline

*   [CPGComputableActivityDefinition](StructureDefinition-cpg-computableactivity.html)

    Defines the minimum expectations and behavior for a computable activity definition for use with content conforming to the CPG implementation guide

*   [CPGComputableGraphDefinition](StructureDefinition-cpg-computablegraphdefinition.html)

    Profile of GraphDefinition to establish computable expectations for the use of the GraphDefinition resource

*   [CPGComputableGuideline](StructureDefinition-cpg-computableguideline.html)

    Profile of ImplementationGuide to describe a computable Clinical Practice Guideline

*   [CPGComputableMetric](StructureDefinition-cpg-computablemetric.html)

    Defines the minimum expectations and behavior for a computable metric for use with content conforming to the CPG implementation guide

*   [CPGComputablePlanDefinition](StructureDefinition-cpg-computableplandefinition.html)

    Defines the minimum expectations and behavior for a computable plan definition

*   [CPGCondition](StructureDefinition-cpg-condition.html)

    CPG condition represents the minimum expectations for communicating condition/problem information as part of a CPG case

*   [CPGDetectedIssue](StructureDefinition-cpg-detectedissue.html)

    Documents a detected issue within the context of a computable clinical practice guideline

*   [CPGDispenseMedicationActivity](StructureDefinition-cpg-dispensemedicationactivity.html)

    Definition of an activity to dispense a specific medication as part of a computable clinical practice guideline

*   [CPGDispenseMedicationTask](StructureDefinition-cpg-dispensemedicationtask.html)

    Recommendation to dispense a specific medication as part of the delivery of a computable clinical practice guideline

*   [CPGDocumentMedicationActivity](StructureDefinition-cpg-documentmedicationactivity.html)

    Definition of an activity to document a specific medication as part of a computable clinical practice guideline

*   [CPGDocumentMedicationTask](StructureDefinition-cpg-documentmedicationtask.html)

    Recommendation to document the use of a specific medication as part of the delivery of a computable clinical practice guideline

*   [CPGEncounter](StructureDefinition-cpg-encounter.html)

    CPG encounter represents the minimum expectations for communicating encounter information as part of a CPG case

*   [CPGEnrollmentActivity](StructureDefinition-cpg-enrollmentactivity.html)

    Definition of an activity to enroll or unenroll a patient in a strategy or pathway as part of a computable clinical practice guideline

*   [CPGEnrollmentTask](StructureDefinition-cpg-enrollmenttask.html)

    Proposal to enroll the patient in a strategy or pathway as part of a computable clinical practice guideline

*   [CPGFlag](StructureDefinition-cpg-flag.html)

    Represents a flag on a patient record within the context of a computable clinical practice guideline

*   [CPGGenerateReportActivity](StructureDefinition-cpg-generatereportactivity.html)

    Definition of an activity to generate a metric, measure, or case report as part of a computable clinical practice guideline

*   [CPGGenerateReportTask](StructureDefinition-cpg-generatereporttask.html)

    Proposal to generate a metric, measure, or case report as part of a computable clinical practice guideline

*   [CPGGoal](StructureDefinition-cpg-goal.html)

    Defines the expectations for the representation of goals used in computable guidelines

*   [CPGGroup](StructureDefinition-cpg-group.html)

    Defines an actual group of subjects, suitable for use in various contexts, such as a enrollment in a pathway or participant in a study

*   [CPGGroupDefinition](StructureDefinition-cpg-groupdefinition.html)

    Represents the definition of a group of subjects, suitable for use in various contexts, such as a cohort definition, a recommendation inclusion or exclusion criteria, the members of a study, or a population criteria

*   [CPGImmunization](StructureDefinition-cpg-immunization.html)

    Documents a particular immunization as an activity within the context of a computable clinical practice guideline

*   [CPGImmunizationActivity](StructureDefinition-cpg-immunizationactivity.html)

    Definition of a recommendation for a particular immunization as part of a computable clinical practice guideline

*   [CPGImmunizationRequest](StructureDefinition-cpg-immunizationrequest.html)

    Recommendation for a particular immunization as part of the delivery of a computable clinical practice guideline

*   [CPGLocation](StructureDefinition-cpg-location.html)

    CPG location represents the minimum expectations for communicating location information as part of a CPG case

*   [CPGLocationDefinition](StructureDefinition-cpg-locationdefinition.html)

    CPG location represents the minimum expectations for communicating a definitional location as part of computable guideline content

*   [CPGMedicationAdministration](StructureDefinition-cpg-medicationadministration.html)

    Documents the administration of a particular medication as an activity within the context of a computable clinical practice guideline

*   [CPGMedicationDispense](StructureDefinition-cpg-medicationdispense.html)

    Documents the dispensing of a particular medication as an activity within the context of a computable clinical practice guideline

*   [CPGMedicationRequest](StructureDefinition-cpg-medicationrequest.html)

    Recommendation for a specific medication as part of the delivery of a computable clinical practice guideline

*   [CPGMedicationRequestActivity](StructureDefinition-cpg-medicationrequestactivity.html)

    Definition of a recommendation for a specific medication as part of a computable clinical practice guideline

*   [CPGMedicationStatement](StructureDefinition-cpg-medicationstatement.html)

    Documentation of the use of a particular medication as an activity within the context of a computable clinical practice guideline

*   [CPGMetricReport](StructureDefinition-cpg-metricreport.html)

    Records a contextualized metric as calculated within the context of the implementation of a computable clinical practice guideline

*   [CPGObservation](StructureDefinition-cpg-observation.html)

    Documents a specific observation as an activity within the context of a computable clinical practice guideline

*   [CPGOrderSetDefinition](StructureDefinition-cpg-ordersetdefinition.html)

    Profile of PlanDefinition as a Order Set for use with CPG Implementation Guide

*   [CPGOrganization](StructureDefinition-cpg-organization.html)

    CPG organization represents the minimum expectations for communicating organization information as part of a CPG case

*   [CPGPathwayDefinition](StructureDefinition-cpg-pathwaydefinition.html)

    Profile of PlanDefinition as a Clinical Pathway for use with CPG Implementation Guide. A pathway provides groupings of strategies to provide a longitudinal view of the guideline

*   [CPGPatient](StructureDefinition-cpg-patient.html)

    Profile of Patient for use with CPG Implementation Guide

*   [CPGPractitioner](StructureDefinition-cpg-practitioner.html)

    Profile of Practitioner for use with CPG Implementation Guide

*   [CPGPractitionerRole](StructureDefinition-cpg-practitionerrole.html)

    Profile of PractitionerRole for use with CPG Implementation Guide

*   [CPGPractitionerRoleDefinition](StructureDefinition-cpg-practitionerroledefinition.html)

    Profile of PractitionerRole to establish definitional practitioner roles with the CPG Implementation Guide

*   [CPGProcedure](StructureDefinition-cpg-procedure.html)

    Documents a procedure as an activity within the context of a computable clinical practice guideline

*   [CPGProposeDiagnosisActivity](StructureDefinition-cpg-proposediagnosisactivity.html)

    The definition of a recommendation to propose a specific diagnosis as part of a computable clinical practice guideline

*   [CPGProposeDiagnosisTask](StructureDefinition-cpg-proposediagnosistask.html)

    Recommendation to propose a specific diagnosis as part of the delivery of a computable clinical practice guideline

*   [CPGQuestionnaireResponse](StructureDefinition-cpg-questionnaireresponse.html)

    The response to a particular questionnaire as an activity within the context of a computable clinical practice guideline

*   [CPGQuestionnaireTask](StructureDefinition-cpg-questionnairetask.html)

    Recommendation to collect specific information using a particular questionnaire as part of the delivery of a computable clinical practice guideline

*   [CPGRecommendationDefinition](StructureDefinition-cpg-recommendationdefinition.html)

    Profile of PlanDefinition as a Recommendation Definition for use with CPG Implementation Guide

*   [CPGRecordDetectedIssueActivity](StructureDefinition-cpg-recorddetectedissueactivity.html)

    Definition of a recommendation to record a specific detected issue as part of a computable clinical practice guideline

*   [CPGRecordDetectedIssueTask](StructureDefinition-cpg-recorddetectedissuetask.html)

    Recommendation to record a specific detected issue as part of the delivery of a computable clinical practice guideline

*   [CPGRecordInferenceActivity](StructureDefinition-cpg-recordinferenceactivity.html)

    Definition of a recommendation to record a specific inference as part of a computable clinical practice guideline

*   [CPGRecordInferenceTask](StructureDefinition-cpg-recordinferencetask.html)

    Recommendation to record a particular inference as part of the delivery of a computable clinical practice guideline

*   [CPGRelatedPerson](StructureDefinition-cpg-relatedperson.html)

    CPG related person defines the minimum expectations for a person related to a patient in a CPG case, such as a care partner, spouse, or other related person

*   [CPGReportFlagActivity](StructureDefinition-cpg-reportflagactivity.html)

    Definition of a recommendation to report a particular flag as part of a computable clinical practice guideline

*   [CPGReportFlagTask](StructureDefinition-cpg-reportflagtask.html)

    Recommendation to report a flag as part of the delivery of a computable clinical practice guideline

*   [CPGServiceRequest](StructureDefinition-cpg-servicerequest.html)

    Recommendation for a particular procedure or referral to a specialist or instructions for self-care such as smoking cessation counseling or exercise

*   [CPGServiceRequestActivity](StructureDefinition-cpg-servicerequestactivity.html)

    The definition of a recommendation for a particular procedure or referral to a specialist or instructions for self-care such as smoking cessation counseling or exercise

*   [CPGStrategy](StructureDefinition-cpg-strategy.html)

    Profile of RequestGroup as a Strategy for use with the CPG Implementation Guide. Strategies are patient-specific realiziations of strategy definitions and are used to represent aspects of a care plan that still contain optionality among related patient-specific recommendations, typically focused on a particular condition or state within the overall guideline or pathway

*   [CPGStrategyDefinition](StructureDefinition-cpg-strategydefinition.html)

    Profile of PlanDefinition as a Strategy Definition for use with CPG Implementation Guide. Strategies are used to group recommendations together, typically focused on a particular condition or state within the overall guideline or pathway

*   [CPGTask](StructureDefinition-cpg-task.html)

    Defines the expectations common to tasks that represent activities used in computable guidelines

*   [CPGWorkflowDefinition](StructureDefinition-cpg-workflowdefinition.html)

    Profile of PlanDefinition as a Workflow Definition for use with CPG Implementation Guide


### Questionnaire Index

*   [CPG Common Questionnaire - Identifying information](Questionnaire-cpg-common-identity.html) CPG\_Common\_Questionnaire\_Identity
*   [CPG Common Questionnaire - Patient information](Questionnaire-cpg-common-patient-profile.html) CPG\_Common\_Questionnaire\_Patient\_Profile
*   [CPG Common Questionnaire - Resolve Patient Match](Questionnaire-cpg-common-resolve-patient-match.html) CPG\_Common\_Questionnaire\_Resolve\_Patient\_Match

### ValueSet Index {#valueset-index}

*   [CPG Activity Type](ValueSet-cpg-activity-type-vs.html)

    A type of activity that can be performed as part of the delivery of guideline-based care

*   [CPG Case Feature Type](ValueSet-cpg-casefeature-type-vs.html)

    A type of activity that can be performed as part of the delivery of guideline-based care

*   [CPG Case Feature Pertinence](ValueSet-cpg-casefeature-pertinence-vs.html)

    A type of activity that can be performed as part of the delivery of guideline-based care

*   [CPG Recommendation Direction](ValueSet-cpg-recommendation-direction-vs.html)

    The direction of a recommendation, either for or against a particular action, taking into account the balance between desirable and undesirable outcomes; the confidence in the magnitude of estimates of effect; the confidence in values and preferences and their variability; and resource use.

*   [CPG Common Persona](ValueSet-cpg-common-persona-vs.html)

    Common personas used to describe roles and participants in computable content

*   [CPG Common Process](ValueSet-cpg-common-process-vs.html)

    Common processes used to describe the high-level, conceptual activities that occur as part of the delivery of guideline-based care

---

// File: input/pagecontent/changes.md

{: toc}

{: #changes}

This page details changes made in each version of the Clinical Guidelines implementation guide.

### STU2 Release (version 2.0.0)

The following changes were applied as a result of comments received during the STU2 ballot:

* [FHIR-48658](https://jira.hl7.org/browse/FHIR-48658): Removed CarePlan/$apply operation
* [FHIR-48634](https://jira.hl7.org/browse/FHIR-48634): Added support for ratings in recommendations
* [FHIR-48388](https://jira.hl7.org/browse/FHIR-48388): Expanded CPGRecommendationDefinition to reference a CPGOrderSet
* [FHIR-48019](https://jira.hl7.org/browse/FHIR-48019): Clarified pseudo-code for activity multi-step activity flows to use prepare/initiate language, rather than start/end language
* [FHIR-46314](https://jira.hl7.org/browse/FHIR-46314): Clarified guidance in PlanDefinition/$apply related to the use of `option`
* [FHIR-46097](https://jira.hl7.org/browse/FHIR-46097): Allowed cpg-rationale to be used on PlanDefinition.action (recursively)
* [FHIR-45999](https://jira.hl7.org/browse/FHIR-45999): Clarified behavior of requests within a RequestGroup and the option intent
* [FHIR-45460](https://jira.hl7.org/browse/FHIR-45460): Provided additional guidance on computability vs interoperability profiles
* [FHIR-44984](https://jira.hl7.org/browse/FHIR-44984): Reflected doNotPerform and notDone in the ActivityFlow
* [FHIR-44983](https://jira.hl7.org/browse/FHIR-44983): Defined intent for communicationrequest
* [FHIR-44913](https://jira.hl7.org/browse/FHIR-44913): Enhanced testing description in the methodology page
* [FHIR-44911](https://jira.hl7.org/browse/FHIR-44911): Improved definition and explanation of content implementation guides
* [FHIR-44240](https://jira.hl7.org/browse/FHIR-44240): Removed cpg-indicator value set, should be in a Using CDS Hooks IG
* [FHIR-44234](https://jira.hl7.org/browse/FHIR-44234): Removed cpg-indicator code system in favor of THO cdshooks-indicator
* [FHIR-44160](https://jira.hl7.org/browse/FHIR-44160): Reconciled overlaps with the EBMonFHIR IG
* [FHIR-44143](https://jira.hl7.org/browse/FHIR-44143): Minor grammar and formatting fixes throughout IG
* [FHIR-44067](https://jira.hl7.org/browse/FHIR-44067): Fixed activity profiles page numbering
* [FHIR-43990](https://jira.hl7.org/browse/FHIR-43990): Updated opioid examples to latest 
* [FHIR-43989](https://jira.hl7.org/browse/FHIR-43989): Documented state transition from status = draft to status = active
* [FHIR-43433](https://jira.hl7.org/browse/FHIR-43433): Minor correction typos in 3 Methodology, 3.4.1 Concepts
* [FHIR-43361](https://jira.hl7.org/browse/FHIR-43361): Added L1 checklist and surface checklists more prominently
* [FHIR-43149](https://jira.hl7.org/browse/FHIR-43149): Ensured extensions only apply in appropriate contexts
* [FHIR-41200](https://jira.hl7.org/browse/FHIR-41200): Added stop, hold, and resume activities
* [FHIR-40550](https://jira.hl7.org/browse/FHIR-40550): Added ActivityDefinition/$apply operation
* [FHIR-32962](https://jira.hl7.org/browse/FHIR-32962): Added the ability to specify the type of an empty input parameter
* [FHIR-32592](https://jira.hl7.org/browse/FHIR-32592): Added MustSupport guidance
* [FHIR-29679](https://jira.hl7.org/browse/FHIR-29679): Added a mergeNestedPlans parameter to PlanDefinition/$apply
* [FHIR-27151](https://jira.hl7.org/browse/FHIR-27151): Removed rating extensions from context-specific recommendations

### STU2 Ballot (version 2.0.0-ballot)

This ballot of the Clinical Guidelines implementation guides incorporates feedback that has been received during the trial-use 
implementation period. Feedback from production implementations of clinical reasoning capability as well as multiple content 
development projects covering various aspects of computable guideline content development and implementation has been included.

Major changes include:

* Removed Shareable/Publishable/Executable profiles and referenced the CRMI IG for those capabilities instead (see [Profiles](profiles.html))
* Removed the Using CQL and Libraries conformance requirements and referenced the Using CQL with FHIR IG for those capabilities instead (see [Libraries](libraries.html))
* Detailed descriptions of activity flow (see [Activity Flow](activityflow.html))
* Recommend an Immunization activity now uses MedicationRequest 
* Added L1 checklist from GIN-NA working group (see [L1 Checklist](clinical-guidelines-development-L1-checklist.html))
* Moved most example IGs to cqframework (see [Examples](examples.html))

The following sections detail the changes that were applied for this ballot.

* [FHIR-43074](https://jira.hl7.org/browse/FHIR-43074): Add more detailed description of activity flow
* [FHIR-42973](https://jira.hl7.org/browse/FHIR-42973): Refactor to use CRMI profiles
* [FHIR-40964](https://jira.hl7.org/browse/FHIR-40964): Unable to file issues against 1.0 version in HL7 JIRA
* [FHIR-40486](https://jira.hl7.org/browse/FHIR-40486): Add guidance on when available ELM can be used
* [FHIR-40298](https://jira.hl7.org/browse/FHIR-40298): Change Immunization action
* [FHIR-38743](https://jira.hl7.org/browse/FHIR-38743): Better definitions for each activity
* [FHIR-35796](https://jira.hl7.org/browse/FHIR-35796): Add a CPG Packaging Like the Measure Packaging Operation
* [FHIR-34350](https://jira.hl7.org/browse/FHIR-34350): ImmunizationRecommendation example does not point at meta.profile
* [FHIR-32676](https://jira.hl7.org/browse/FHIR-32676): Ability to specify supported CQL versions
* [FHIR-32672](https://jira.hl7.org/browse/FHIR-32672): Add support for specifying CQL options in CQL/ELM libraries and projects
* [FHIR-26607](https://jira.hl7.org/browse/FHIR-26607): Add description of types of artifacts
* [FHIR-25741](https://jira.hl7.org/browse/FHIR-25741): Add extensions to identify the packaging and testing tooling for an artifact

In addition, the implementation guide source was completely updated to run on the latest IG publication tooling, which included numerous typographical and technical corrections throughout.

### STU1 Publication (version 1.0.0)

* [FHIR-30007](https://jira.hl7.org/browse/FHIR-30007): Support for images in questionnaire questions and answers
* [FHIR-27154](https://jira.hl7.org/browse/FHIR-27154): Formalized $cql and Library/$evaluate operations
* [FHIR-27151](https://jira.hl7.org/browse/FHIR-27151): Removed rating extensions from instance profiles
* [FHIR-26885](https://jira.hl7.org/browse/FHIR-26885): Formalized conformance requirements for input and output of CQL libraries
* [FHIR-26875](https://jira.hl7.org/browse/FHIR-26875): Relaxed url requirement in related artifacts
* [FHIR-26621](https://jira.hl7.org/browse/FHIR-26621): Clarified conformance requirements for Library resolution and naming/namespacing
* [FHIR-26612](https://jira.hl7.org/browse/FHIR-26612): Defined shareable, computable, publishable, and executable knowledge capabilities and profiles
* [FHIR-24236](https://jira.hl7.org/browse/FHIR-24236): Added a complete example for Congestive Heart Failure pathway
* [FHIR-24227](https://jira.hl7.org/browse/FHIR-24227): Updated narratives for examples throughout
* [FHIR-24223](https://jira.hl7.org/browse/FHIR-24223): Added history of attempts to background section
* [FHIR-24221](https://jira.hl7.org/browse/FHIR-24221): Formalized activity processing semantics
* [FHIR-24217](https://jira.hl7.org/browse/FHIR-24217): Formalized triggering behavior
* [FHIR-24177](https://jira.hl7.org/browse/FHIR-24177): Improved activity catalog
* [FHIR-24165](https://jira.hl7.org/browse/FHIR-24165): Added Development/methodology documentation and walkthroughs
* [FHIR-24163](https://jira.hl7.org/browse/FHIR-24163): Added testing and packaging support and documentation
* [FHIR-24161](https://jira.hl7.org/browse/FHIR-24161): Clarified rating systems conformance requirements
* [FHIR-24156](https://jira.hl7.org/browse/FHIR-24156): Updated topic binding to preferred for all artifact types
* [FHIR-24150](https://jira.hl7.org/browse/FHIR-24150): Separated examples vs artifacts and provided index for both
* [FHIR-24087](https://jira.hl7.org/browse/FHIR-24087): Moved recommendation-specific extensions to recommendation definition
* [FHIR-23991](https://jira.hl7.org/browse/FHIR-23991): Added a glossary of key terms
* [FHIR-23968](https://jira.hl7.org/browse/FHIR-23968): Formalized request proposal/plan/order behavior
* [FHIR-23964](https://jira.hl7.org/browse/FHIR-23964): Formalized eligibility and enrollment behavior
* [FHIR-23963](https://jira.hl7.org/browse/FHIR-23963): Added case plan summary support
* [FHIR-23960](https://jira.hl7.org/browse/FHIR-23960): Formalized care plan behavior
* [FHIR-23959](https://jira.hl7.org/browse/FHIR-23959): Added support for clinical impressions
* [FHIR-23958](https://jira.hl7.org/browse/FHIR-23958): Added case plan progressing note support
* [FHIR-23957](https://jira.hl7.org/browse/FHIR-23957): Added case summary support
* [FHIR-23956](https://jira.hl7.org/browse/FHIR-23956): Formalized metric behavior
* [FHIR-23954](https://jira.hl7.org/browse/FHIR-23954): Added support for case features
* [FHIR-23952](https://jira.hl7.org/browse/FHIR-23952): Formalized case behavior
* [FHIR-23951](https://jira.hl7.org/browse/FHIR-23951): Formalized strategy behavior
* [FHIR-23949](https://jira.hl7.org/browse/FHIR-23949): Completed examples for all activity types
* [FHIR-23948](https://jira.hl7.org/browse/FHIR-23948): Reorganized overall guide content and navigation
* [FHIR-23945](https://jira.hl7.org/browse/FHIR-23945): Changed protocol and workflow to pathway and strategy definitions
* [FHIR-23940](https://jira.hl7.org/browse/FHIR-23940): Added patient safety discussion to conformance page

In addition, numerous corrections and clarifications were made throughout, as well as substantial expansion of approach and methodology documentation. Refer to the HL7 JIRA for a complete description of changes applied to the 1.0.0 version.

### STU1 Ballot (version 0.1.0)

The initial ballot combines experience gained from multiple guideline representation projects, including Opioid Prescribing Support, Chronic Kidney Disease Management, Antenatal Care, HIV/HBV Screening, Prevention, and Treatment, and Immunization Decision Support.

---

// File: input/pagecontent/checklists.md

The following checklists can be used to assess content at various stages of the translation from L1 to L4.

|Checklist|Description|
|--------------|----|
|[L1 Checklist](clinical-guidelines-development-L1-checklist.html)|Used as a tool to help guideline developers develop L1 in clearer, consistent, and more structured approach|
|[L2 Checklist](clinical-guidelines-development-L2-checklist.html)|Used to ensure that informaticists and knowledge engineers have what they need from L1 content in order to successfully produce L3 content|
|[L3 Checklist](clinical-guidelines-development-L3-checklist.html)|Used to ensure that L3 content meets the requirements to ensure that implementers have what they need in order to successfully implement computable content in a specific setting|
|[L4 Checklist](clinical-guidelines-development-L4-checklist.html)|Used by implementers to help support the process of implementing in a specific setting, helping to ensure successful and faithful implementation of guideline content|
{:.grid}

---

// File: input/pagecontent/clinical-guidelines-development-L1-checklist.md

**GIN McMaster Guideline Development Checklist Extension for Computable Guidelines**

**Guidelines Knowledge Level 1 (L1) Checklist** 

Our objective is to develop an extension of the widely used GIN-McMaster Guideline Development Checklist and Tool for the Adoption and Implementation of Computable Guidelines. This checklist extension is intended to be used as a tool to help guideline developers develop narrative clinical guidelines with knowledge Level 1 (L1) in clearer, consistent, and more structured approach so that their key information like metadata, evidence, and recommendations may be successfully implemented by informaticists in computable formats used in clinical decision support systems that would improve patient outcomes through evidence-based medical practice in a learning health system based on FAIR (Findable, Accessible, Interoperable, and Reusable) principles. This may cover clinical practice guidelines and their related systematic reviews, evidence reports, and supplementary data and materials.


|                                   |                                          |                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                   |
| :-------------------------------  | :--------------------------------------  | :---------------------------------------------  | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  |
| Applicable to Guideline Developer | Applicable to Informaticist/ Implementer |                    Item Label                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Useful Resources/ Examples                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                          Further details                                                                                                                                          |
|           X<sup>\*</sup>          |              -<sup>\*</sup>              |                    1. Policy                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Provide a link with a persistent identifier to public documentation of standards used by the organization to develop their guidelines, including the organization’s methods and procedures, including how it established transparency, composes its guideline development group, manages conflicts of interest, and its evidence review, rating of evidence, peer review, update, data management, and distribution/publishing policies.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                               * [GIN McMaster Checklist](https://drive.google.com/drive/folders/1kFhyum_ezBAHqmAYKk43ptdySCP1ruXc) <br/>* [IOM Guidance](https://drive.google.com/drive/folders/1kFhyum_ezBAHqmAYKk43ptdySCP1ruXc)                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                   |
|                 X                 |                     -                    |                     2.Scope                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Clearly articulate the scope of the guideline development project, including who the guidelines are for, what clinical domains they cover, and where they may be practiced.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                      * [Adapting Clinical Guidelines for the Digital Age](https://journals.lww.com/ajmqonline/fulltext/2023/09002/adapting_clinical_guidelines_for_the_digital_age_.2.aspx) <br/>* [An Integrated Process for Co-Developing and Implementing Written and Computable Clinical Practice Guidelines](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10476601/)<br/>* Integrated Process tables:[ https://stacks.cdc.gov/view/cdc/131006An Evaluation Framework for a Novel Process to Codevelop Written and Computable Guidelines](https://stacks.cdc.gov/view/cdc/131006) <br/>* Evaluation framework tool:[ https://stacks.cdc.gov/view/cdc/131007](https://stacks.cdc.gov/view/cdc/131007)                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                   |
|                 X                 |                     -                    |                    3.Goal(s)                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     Clearly articulate why a guideline development project is needed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                   |
|                 X                 |                     X                    |                 4.Contributor(s)                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Ensure the involvement of informaticists and implementation scientists in the guideline’s development panel.Provide contact information for guideline developers, informaticists, and other involved stewards                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                   |
|                 -                 |                     X                    |         5.Knowledge Levels Requirements         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Provide a clear, strong, and tangible definition of the requirements of each guidelines knowledge levels starting with the executable knowledge level 4 (L4) to be able to understand what is needed at L1 and be most useful                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                    * [FHIR Clinical Guidelines (v1.0.0) (STU 1) (hl7.org)](https://hl7.org/fhir/uv/cpg/documentation-approach-06-01-levels-of-knowledge-representation.html#:~:text=%E2%80%9CLevels%E2%80%9D%20of%20Knowledge%20Representation%20Framing%201%20Approach%20The,Semi-structured%20...%204%20Structured%20...%205%20Executable%20)                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                   |
|                 X                 |                     -                    |         6.Guideline Question formulation        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Formulate measurable and/or observable clinical questions using the [Patient/population, Intervention, Comparison, and Outcomes (PICO)](https://www.cochranelibrary.com/en/about-pico)      [Process](https://www.cochranelibrary.com/en/about-pico)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                         * [Patient/population, Intervention, Comparison, and Outcomes (PICO)](https://www.cochranelibrary.com/en/about-pico)      [Process](https://www.cochranelibrary.com/en/about-pico)                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                   |
|                 X                 |                     X                    |              7.Guideline Structure              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Use a consistent[ GRADE](https://www.gradeworkinggroup.org/) (Grading of Recommendations Assessment, Development and Evaluation) scale that is publicly documented and linked to evidence statementsUse a structured, machine-readable format to consistently declare each recommendation and its GRADE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                         * [JATS4R](https://jats4r.org/)<br/>* [GIN McMaster Checklist](https://drive.google.com/drive/folders/1kFhyum_ezBAHqmAYKk43ptdySCP1ruXc)<br/>* [IOM Guidance](https://drive.google.com/drive/folders/1kFhyum_ezBAHqmAYKk43ptdySCP1ruXc)<br/>* [EBMonFHIR - Clinical Decision Support - Confluence (hl7.org)](https://confluence.hl7.org/display/CDS/EBMonFHIR)<br/>* [Agency for Healthcare Research and Quality (AHRQ) Systematic Review Data Repository (SRDR+)](https://www.ahrq.gov/cpi/about/otherwebsites/srdr.ahrq.gov/index.html)                                                                                                                                                                                                                                                        | [Use the evidence-based structure and requirements for guidelines related systematic reviews, evidence reports, and supplementary data and materials](https://docs.google.com/document/d/1sHNuICuXuiWFH1iSFLkUhea0YpDWjY33/edit?usp=drive_link\&ouid=110694559203203173816\&rtpof=true\&sd=true). |
|                 X                 |                     X                    | 8.Documentation requirements per recommendation | Identify and use common data elements and variables while writing your recommendation in order to implement it in conformance with your real-world requirements and health outcomes. Formulate guidance for each recommendation using the same necessary data elements, value sets, and measures used to develop them from PICO questions.Understand data to model, define, and map those data elements through the entire learning health system for the particular topic / disease / drug / screening / etc…Consider and formulate the care pathways for implementing each recommendation when there is sufficiently clear evidence to confidently do so. Clearly articulate possible care options, along with the known variables and contexts using the heuristic theory of decision‐making, often implemented as fast‐and‐frugal (FFT) decision trees since they are linked to signal detection theory, evidence accumulation theory, and a threshold model of decision‐making, which, in turn, allows quantitative analysis of the accuracy of clinical management strategiesUse an existing application,  template, or other tool to facilitate the generation of individual statements that can be executed to these algorithms. For example: If (x AND y OR z)  is true: make N recommendation. x, y, z statements should be easy to find within the narrative, and should be documented clearly | * [https://goodwin.libguides.com/c.php?g=309484\&p=2066254](https://goodwin.libguides.com/c.php?g=309484\&p=2066254) ] <br/>* [United States Core Data for Interoperability (USCDI) \| Interoperability Standards Advisory (ISA) (healthit.gov)](https://www.healthit.gov/isa/united-states-core-data-interoperability-uscdi) <br/>* [Value Set Authority Center (nih.gov)](https://vsac.nlm.nih.gov/) <br/>Additional Resources for International Community:<br/>* [InternationalPatientSummaryIG (hl7.org)](https://hl7.org/fhir/uv/ips/2019Sep/)<br/>* [International Classification of Health Interventions (ICHI) (who.int)](https://www.who.int/standards/classifications/international-classification-of-health-interventions)<br/>* [CDS Authoring Tool (ahrq.gov)](https://cds.ahrq.gov/authoring/documentation#CDS_Authoring_Tool_User_Guide)<br/>* [FHIR Clinical Guidelines (v0.2.0) (Current) (hl7.org)](https://hl7.org/fhir/uv/cpg/methodology-case-study.html)<br/>* FFT Decision Tree [Example](https://pubmed.ncbi.nlm.nih.gov/29484787/) |                                                                             Define the data elements and variables that will be used when performing complex queries on available data sets and published literature.                                                                             |
|                 X                 |                     X                    |                9.Guideline Update               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Guideline developers should have a clear versioning policy for all updates to their evidence and guidance following common[ version algorithms](https://www.hl7.org/fhir/valueset-version-algorithm.html) while taking into consideration the level of incorporated changes[ Major, Minor, and Patch](https://semver.org/).Maintain an open, transparent, and continually learning and updated system based on the latest set of evidence available.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                             * [https://semver.org/](https://semver.org/) <br/>* [https://www.hl7.org/fhir/valueset-version-algorithm.html](https://www.hl7.org/fhir/valueset-version-algorithm.html)                                                                                                                                                                                                                                                                                                                                                                                                                                             |               Each version shall have a persistent identifier for transparency in the historical record, and that each version can be linked across all other versions of that document through clearly communicated related publications in each document and its indexed metadata.              |

 

\*X: Applicable, -: Not Applicable

The material on this page was developed by the GIN-NA working group and presented to the CPG-on-FHIR project team for inclusion in the CPG-on-FHIR implementation guide in support of the shared goals of creating computable clinical guideline content. This material is published at the following link:  https://www.authorea.com/users/701108/articles/687733-gin-mcmaster-guideline-development-checklist-extension-for-computable-guidelines



---

// File: input/pagecontent/clinical-guidelines-development-L2-checklist.md

### L2 Checklist

| Label     | Item                                                                         | Description                                                                                                  | Item Status | Notes                                                                                                                                                                                                                                                                              |
|-----------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.        | **Guideline Content (L1)**                                                   | Complete L1 content and documentation for the guideline                                                      |             |                                                                                                                                                                                                                                                                                    |
| 1.a       | Permalink                                                                    | Permanent URL for the guideline content, if available                                                        |             |                                                                                                                                                                                                                                                                                    |
| 1.b       | Citation                                                                     | Appropriately formatted citation for the guideline                                                           | Required    |                                                                                                                                                                                                                                                                                    |
| 1.c       | Status                                                                       | Current status of the guideline, including last reviewed, endorsing parties, and timeline of pending changes | Required    |                                                                                                                                                                                                                                                                                    |
| 1.d       | **Contact**                                                                  | Contact information for the guideline developer and steward                                                  | Required    |                                                                                                                                                                                                                                                                                    |
| 1.d.i     | Guideline Developer                                                          | Direct contact for guideline developer                                                                       |             |                                                                                                                                                                                                                                                                                    |
| 1.d.ii    | Content/Guideline Steward Contact                                            | Public contact information for the guideline steward                                                         |             |                                                                                                                                                                                                                                                                                    |
| 2.        | **Legal & Licensing**                                                        | All legal and licensing issues are addressed                                                                 |             |                                                                                                                                                                                                                                                                                    |
| 2.a       | Guideline licensing terms                                                    | What are the licensing terms for the use of the guideline                                                    | Required    |                                                                                                                                                                                                                                                                                    |
| 2.b       | Content licensing terms                                                      | What will the licensing terms for the L2 and L3 artifacts be                                                 | Required    |                                                                                                                                                                                                                                                                                    |
| 2.c       | Additional licensing terms                                                   | What additional content licensing is required, if any                                                        | Required    |                                                                                                                                                                                                                                                                                    |
| 3.        | **Scope**                                                                    | Clearly determine the overall scope of the project                                                           |             |                                                                                                                                                                                                                                                                                    |
| 3.a       | Goal(s)                                                                      | What goal(s) is the recommendation trying to achieve?                                                        |             |                                                                                                                                                                                                                                                                                    |
| 3.b       | Target Recommendations                                                       | What recommendations are targeted for the project                                                            | Required    |                                                                                                                                                                                                                                                                                    |
| 3.c       | **Per Recommendation**                                                       | For each recommendation, ensure the following                                                                |             | This is a header, not an item to check off                                                                                                                                                                                                                                         |
| 3.c.i     | GuideLine Implementability Appraisal (GLIA) checklist                        | A GLIA checklist is provided                                                                                 |             | Although it was designed for end-users who are deciding whether to adopt a (hard-copy) GL, several of the elements in GLIA are worth consideration by all work streams for L2-L4. One sub-element for L4 might be "usability".  How facile is the end-product to navigate and use? |
| 3.c.ii    | Triggering                                                                   | How will the recommendation be triggered?                                                                    |             |                                                                                                                                                                                                                                                                                    |
| 3.c.ii.1  | Terminologies                                                                | What terminologies are involved?                                                                             |             |                                                                                                                                                                                                                                                                                    |
| 3.c.ii.2  | Clinical State                                                               | What clinical states are involved?                                                                           |             |                                                                                                                                                                                                                                                                                    |
| 3.c.ii.3  | Setting                                                                      | What settings or environments are relevant?                                                                  |             |                                                                                                                                                                                                                                                                                    |
| 3.c.ii.4  | Periodic                                                                     | How often should the recommendation be triggered/reviewed?                                                   |             |                                                                                                                                                                                                                                                                                    |
| 3.c.iii   | **Condition**                                                                | How will the condition be expressed?                                                                         |             |                                                                                                                                                                                                                                                                                    |
| 3.c.iii.1 | Terminologies                                                                | What terminologies are involved?                                                                             |             |                                                                                                                                                                                                                                                                                    |
| 3.c.iii.2 | Clinical State                                                               | What clinical states are involved?                                                                           |             |                                                                                                                                                                                                                                                                                    |
| 3.c.iv    | **Action**                                                                   | How will the action be expressed?                                                                            | Required    |                                                                                                                                                                                                                                                                                    |
| 3.c.iv.1  | Request/Order                                                                | What orderables are involved?                                                                                | Required    |                                                                                                                                                                                                                                                                                    |
| 3.c.iv.2  | Assessment                                                                   | What instruments are involved?                                                                               | Required    |                                                                                                                                                                                                                                                                                    |
| 3.c.iv.3  | Questionnaire                                                                | What questionnaires are involved?                                                                            | Required    |                                                                                                                                                                                                                                                                                    |
| 3.c.v     | **Monitoring**                                                               | How will the recommendation be assessed/monitored?                                                           |             |                                                                                                                                                                                                                                                                                    |
| 3.c.v.1   | Measures                                                                     | What measures are available/appropriate?                                                                     |             | Define thresholds related to goal(s)                                                                                                                                                                                                                                               |
| 3.c.v.2   | Performance Measures                                                         | What measures are looking at the aspects related to the clinical condition?                                  |             |                                                                                                                                                                                                                                                                                    |
| 3.c.v.3   | Process Measures                                                             | What measures are looking at the aspects related to CDS workflow and feasibility                             |             | Implementation Team should consider                                                                                                                                                                                                                                                |
| 3.c.v.4   | Outcome Measures                                                             | What measures are looking at the aspects related to the health of the patient                                |             |                                                                                                                                                                                                                                                                                    |
| 3.c.v.5   | Guideline Evaluation Metrics                                                 | What measures are looking at how well the recommendation is meeting its goal(s)?                             |             |                                                                                                                                                                                                                                                                                    |
| 3.c.vi    | Use Case                                                                     | A clear description of a use case for the recommendation                                                     | Required    |                                                                                                                                                                                                                                                                                    |
| 3.c.vii   | Diagram/ workflow diagram                                                    | A visual depiction of the workflow for the recommendation                                                    |             |                                                                                                                                                                                                                                                                                    |
| 3.c.viii  | Test Plan                                                                    | A description of the testing plan                                                                            |             |                                                                                                                                                                                                                                                                                    |
| 4.        | **Existing Artifacts**                                                       | What existing artifacts are available, either wholesale, or for derivation and reuse?                        |             |                                                                                                                                                                                                                                                                                    |
| 4.a       | **Terminologies**                                                            | What value sets are available?                                                                               |             |                                                                                                                                                                                                                                                                                    |
| 4.a.i     | Existing                                                                     | What value sets exist? Can they be reused or do they need modification/augmentation?                         |             |                                                                                                                                                                                                                                                                                    |
| 4.a.ii    | Need to be created                                                           | What value sets need to be created?                                                                          |             |                                                                                                                                                                                                                                                                                    |
| 4.b       | Assessments                                                                  | What formal instruments are available? Can they be reused?                                                   |             |                                                                                                                                                                                                                                                                                    |
| 4.c       | Questionnaires                                                               | What questionnaires are available?                                                                           |             |                                                                                                                                                                                                                                                                                    |
| 4.d       | Profiles                                                                     | What profiles are available?                                                                                 |             |                                                                                                                                                                                                                                                                                    |
| 4.e       | PlanDefinition/ActivityDefinition                                            | What definitions are already available?                                                                      |             |                                                                                                                                                                                                                                                                                    |
| 4.f       | Libraries                                                                    | What libraries are available?                                                                                |             |                                                                                                                                                                                                                                                                                    |
| 4.g       | Test Data                                                                    | What test data is available? What test data generation facilities are available?                             |             |                                                                                                                                                                                                                                                                                    |
| 4.h       | Decision Aids                                                                | What aids are available that help patients make decisions or can be used for shared decision-making?         |             |                                                                                                                                                                                                                                                                                    |
| 5.        | **Publication Strategy**                                                     | What publication strategy will be used for the L2/L3 content?                                                |             |                                                                                                                                                                                                                                                                                    |
| 5.a       | Target Repository                                                            | What publication channel will be used? (e.g. FHIR Registry, CDS Connect)                                     |             |                                                                                                                                                                                                                                                                                    |
| 5.b       | Project Repository                                                           | Set up a project repository and collaboration wiki                                                           |             |                                                                                                                                                                                                                                                                                    |
| 5.c       | Publishing URL                                                               | Establish a base URL for the content                                                                         |             |                                                                                                                                                                                                                                                                                    |
| 5.d       | Terminology Publication Strategy                                             | Where will the terminologies be published? (e.g. FHIR Registry, Simplifier, VSAC, PHINVADS)                  |             |                                                                                                                                                                                                                                                                                    |
| 6.        | **Stewarding and Maintenance**                                               | How will the content be maintained over time?                                                                |             |                                                                                                                                                                                                                                                                                    |
| 6.a       | Change Management                                                            | What external dependencies will impact the content? Document change sources and timelines                    |             |                                                                                                                                                                                                                                                                                    |
| 6.b       | L2 Steward                                                                   | Who will maintain the content long term?                                                                     | Required    |                                                                                                                                                                                                                                                                                    |
| 6.c       | Strategy                                                                     | What is the strategy for reacting to changes?                                                                |             |                                                                                                                                                                                                                                                                                    |
| 7.        | **Piloting**                                                                 | Who will pilot the content as part of the development process?                                               |             |                                                                                                                                                                                                                                                                                    |
| 7.a       | Pilot Site(s)                                                                | Identify at least one primary pilot site (alpha) and potentially second phase (beta) sites.                  |             |                                                                                                                                                                                                                                                                                    |
| 7.b       | Pilot Team Members                                                           | Engage pilot site members as part of the development team                                                    |             |                                                                                                                                                                                                                                                                                    |
| 8         | **System Feedback**                                                          |                                                                                                              |             |                                                                                                                                                                                                                                                                                    |
| 8a.       | SDO Feedback                                                                 | Are there gaps in the specifications being used that would trigger feedback to an appropriate SDO?           |             |                                                                                                                                                                                                                                                                                    |
| 8b.       | Policy                                                                       | Are there problems in a policies that would trigger feedback to the policy owner?                            |             |                                                                                                                                                                                                                                                                                    |
| 9         | **Case Reporting**                                                           | Is there a potential need for monitoring disease trends or outbreak management?                              |             | Required by law for clinicians to report certain conditions to the appropriate public health agency/jurisdiction                                                                                                                                                                   |
| 9.a.      | Existing Artifacts                                                           |                                                                                                              |             | HL7 CDA for initial case report, and CDA for reportability response (currently published); working on case reporting standards - FHIR: knowledge distribution (plan def, trigger codes), eICR, trigger codes                                                                       |
{:.grid}


---

// File: input/pagecontent/clinical-guidelines-development-L3-checklist.md

### L3 Checklist

| Label     | Item                                             | Description                                                                                                                                                  | Item Status | Notes                                                                                                             |
|-----------|--------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------------------------------------------------------------------------------------------------------|
| 1.        | **Publishing Information**                       | Publishing metadata for the L2 and L3 content                                                                                                                |             | Platform Specific vs Independent                                                                                  |
| 1.a       | Publisher                                        | Who is the publisher? (Name and public contact information)                                                                                                  | Required    |                                                                                                                   |
| 1.b       | Steward                                          | Who is the steward? (Name and public contact information)                                                                                                    | Required    |                                                                                                                   |
| 1.c       | **License**                                      | What are the licensing terms for the content?                                                                                                                | Required    |                                                                                                                   |
| 1.c.i     | License Page                                     | The IG includes a license page                                                                                                                               |             |                                                                                                                   |
| 1.c.ii    | External Content Licenses                        | Any referenced/included content contains appropriate licensing statements                                                                                    |             |                                                                                                                   |
| 2.        | **Documentation**                                | Overall documentation for the IG                                                                                                                             |             |                                                                                                                   |
| 2.a       | Overview                                         | Clear description of the project, purpose, and content                                                                                                       | Required    |                                                                                                                   |
| 2.b       | Scope                                            | Clear delineation of what is included and excluded                                                                                                           | Required    |                                                                                                                   |
| 2.c       | Roadmap                                          | Clear description of maintenance dependencies and known plans for future work                                                                                |             |                                                                                                                   |
| 2.d       | References                                       | Permalinks and appropriate citations for the guideline and all relevant/referenced documentation                                                             | Required    |                                                                                                                   |
| 2.e       | Content Index                                    | Easily accessible index for all content                                                                                                                      |             |                                                                                                                   |
| 2.f       | **Recommendation Documentation**                 | For each recommendation, the IG includes the following                                                                                                       |             |                                                                                                                   |
| 2.f.i     | Recommendation statement                         | Recommendation statement from the guideline                                                                                                                  | Required    |                                                                                                                   |
| 2.f.ii    | Qualify of Evidence                              | Quality of evidence, expressed using GRADE                                                                                                                   |             |                                                                                                                   |
| 2.f.iii   | Strength of Recommendation                       | Strength of recommendation, expressed using GRADE                                                                                                            |             |                                                                                                                   |
| 2.f.iv    | Narrative Description                            | Narrative description of the recommendation and any additional documentation as appropriate                                                                  |             |                                                                                                                   |
| 2.f.v     | Workflow Diagram                                 | Visual depiction of the workflow for the recommendation                                                                                                      |             |                                                                                                                   |
| 2.f.vi    | Use Case                                         | Description of the use case for the recommendation                                                                                                           |             |                                                                                                                   |
| 2.f.vii   | Decision Points                                  | Documentation of any decision points that impacted the L3 content                                                                                            |             |                                                                                                                   |
| 2.f.viii  | Referenced Artifacts                             | References to the implementation guide artifacts that formally describe the recommendation                                                                   |             |                                                                                                                   |
| 2.f.ix    | Test Cases                                       | Description of test cases for the recommendation and any associated test data                                                                                |             |                                                                                                                   |
| 3.a       | **Artifacts**                                    | For each artifact, ensure the following information is present (ValueSet/CodeSystem/Profile/Library/ActivityDefinition/PlanDefinition/Measure/Questionnaire) |             |                                                                                                                   |
| 3.a.i     | id                                               | Unique within the IG, somewhat friendly                                                                                                                      |             |                                                                                                                   |
| 3.a.ii    | url                                              | Globally unique, somewhat friendly, canonical identifier for the artifact                                                                                    |             |                                                                                                                   |
| 3.a.iii   | identifier                                       | Other identifiers (such as a VSAC or HL7 OID)                                                                                                                | Required    |                                                                                                                   |
| 3.a.iv    | version                                          | Version of the artifact                                                                                                                                      | Required    |                                                                                                                   |
| 3.a.v     | name                                             | Machine-friendly name of the artifact                                                                                                                        |             |                                                                                                                   |
| 3.a.vi    | title                                            | Human-readable name of the artifact                                                                                                                          |             |                                                                                                                   |
| 3.a.vii   | status                                           | Status of the artifact                                                                                                                                       |             |                                                                                                                   |
| 3.a.viii  | experimental                                     | Whether the artifact is experimental                                                                                                                         | Required    |                                                                                                                   |
| 3.a.ix    | date                                             | Publication date                                                                                                                                             | Required    | Consider adding date of last update                                                                               |
| 3.a.x     | publisher                                        | Name of publishing organization or individual                                                                                                                |             |                                                                                                                   |
| 3.a.xi    | contact                                          | Contact information for the publisher                                                                                                                        |             |                                                                                                                   |
| 3.a.xii   | description                                      | Clear description of the artifact                                                                                                                            | Required    |                                                                                                                   |
| 3.a.xiii  | useContext                                       | Coded contexts of use for the artifact (include at least clinical focus, setting, and any relevant demographics)                                             |             |                                                                                                                   |
| 3.a.xiv   | jurisdiction                                     | Appropriate jurisdiction for the artifact                                                                                                                    |             |                                                                                                                   |
| 3.a.xv    | purpose                                          | Purpose of the artifact                                                                                                                                      |             |                                                                                                                   |
| 3.a.xvi   | usage                                            | Additional usage documentation for the artifact                                                                                                              |             |                                                                                                                   |
| 3.a.xvii  | approvalDate                                     | Date the artifact was approved                                                                                                                               |             |                                                                                                                   |
| 3.a.xviii | lastReviewDate                                   | Date the artifact was last reviewed                                                                                                                          |             | Consider use of 'reviewed' or 'updated' (i.e., changed)                                                           |
| 3.a.xix   | effectivePeriod                                  | Effective period for the artifact                                                                                                                            |             |                                                                                                                   |
| 3.a.xx    | topic                                            | Coded topics for the artifact                                                                                                                                |             |                                                                                                                   |
| 3.a.xxi   | contributor                                      | Contributors to the artifact content (author, reviewer, endorser)                                                                                            |             |                                                                                                                   |
| 3.a.xxii  | copyright                                        | Legal copyright for the artifact                                                                                                                             |             |                                                                                                                   |
| 3.a.xxiii | relatedArtifact                                  | Any related artifact references                                                                                                                              |             |                                                                                                                   |
| 3.b       | **ValueSet**                                     | In addition to the elements for all artifacts, for each value set, include the following                                                                     |             |                                                                                                                   |
| 3.b.i     | compose                                          | The definition of the value set                                                                                                                              |             |                                                                                                                   |
| 3.b.ii    | shareableValueSet profile                        | Declare conformance with the shareableValueSet profile                                                                                                       |             |                                                                                                                   |
| 3.b.iii   | knowledgeArtifactValueSet profile                | Declare conformance with the knowledgeArtifactValueSet profile                                                                                               |             |                                                                                                                   |
| 3.b.iv    | expression extension                             | Provide expression extensions that define the value set content in terminology languages, if available                                                       |             |                                                                                                                   |
| 3.c       | **Profile**                                      | In addition to the elements for all artifacts, for each Profile, include the following                                                                       |             |                                                                                                                   |
| 3.c.i     | keyword                                          | Coded keywords for the profile                                                                                                                               |             |                                                                                                                   |
| 3.c.ii    | example instance                                 | An example instance conforming to the profile                                                                                                                |             |                                                                                                                   |
| 3.d       | **Library**                                      | In addition to the elements for all artifacts, for each Library, include the following                                                                       |             |                                                                                                                   |
| 3.d.i     | dataRequirement                                  | Data requirements for the library content                                                                                                                    |             |                                                                                                                   |
| 3.d.ii    | content                                          | Base64 encoded content for CQL and ELM                                                                                                                       |             |                                                                                                                   |
| 3.d.iii   | CQL source                                       | Include a reference to the source CQL in the IG                                                                                                              | Required    |                                                                                                                   |
| 3.d.iv    | ELM content                                      | Include a reference to the ELM content in the IG                                                                                                             |             |                                                                                                                   |
| 3.e       | **PlanDefinition**                               | In addition to the elements for all artifacts, for each PlanDefinition, include the following                                                                |             |                                                                                                                   |
| 3.e.i     | triggerDefinition                                | When the artifact is triggered                                                                                                                               |             |                                                                                                                   |
| 3.e.ii    | condition                                        | The condition for performing the action(s)                                                                                                                   |             |                                                                                                                   |
| 3.e.iii   | action                                           | The action(s) to be performed                                                                                                                                |             |                                                                                                                   |
| 3.e.iv    | qualityOfEvidence                                | The qualityOfEvidence for the recommendation                                                                                                                 |             |                                                                                                                   |
| 3.e.v     | strengthOfRecommendation                         | The strengthOfRecommendation for the recommendation                                                                                                          |             |                                                                                                                   |
| 4.        | **Testing**                                      | Ensure adequate testing of the IG content                                                                                                                    |             |                                                                                                                   |
| 4.i       | Build                                            | The IG builds successfully                                                                                                                                   |             |                                                                                                                   |
| 4.ii      | Resources Load                                   | All resources load without issues into a Clinical Reasoning knowledge repository                                                                             |             |                                                                                                                   |
| 4.iii     | Test Cases Pass                                  | All test cases pass without issues in a Clinical Reasoning reference implementation                                                                          |             |                                                                                                                   |
| 5.        | **Review**                                       | Content is reviewed and approved by                                                                                                                          |             |                                                                                                                   |
| 5.i       | Guideline developer                              | The initial guideline developer                                                                                                                              |             |                                                                                                                   |
| 5.ii      | Terminologist                                    | A clinical terminologist                                                                                                                                     |             |                                                                                                                   |
| 5.iii     | Clinician                                        | A clinician, preferably with expertise in the area of focus of the IG                                                                                        |             |                                                                                                                   |
| 5.iv      | Informaticist                                    | An informaticist with expertise in the relevant specification standards                                                                                      |             |                                                                                                                   |
| 5.v       | Engineer                                         | An engineer from the alpha pilot site, ideally from multiple beta sites as well                                                                              |             |                                                                                                                   |
| 6.        | **Publish**                                      | Publish the content in the target content repository (FHIR Registry, Simplifier, CDS Connect)                                                                |             |                                                                                                                   |
| 7.        | **Case Reporting (may belong in 3.e.)**          | Is there a potential need for monitoring disease trends or outbreak management?                                                                              |             | Required by law for clinicians to report certain conditions to the appropriate public health agency/jurisdiction  |
| 7.a       | Sending case to public health                    |                                                                                                                                                              |             |                                                                                                                   |
| 7.b       | **Triggering**                                   |                                                                                                                                                              |             |                                                                                                                   |
| 7.b.i     | Data                                             |                                                                                                                                                              |             |                                                                                                                   |
| 7.b.ii    | Workflow                                         |                                                                                                                                                              |             |                                                                                                                   |
| 7.b.iii   | Timing                                           |                                                                                                                                                              |             |                                                                                                                   |
| 7.c       | Reporting Rules                                  |                                                                                                                                                              |             |                                                                                                                   |
| 7.d       | Feedback to providers/reporters in clinical care |                                                                                                                                                              |             |                                                                                                                   |
{:.grid}

---

// File: input/pagecontent/clinical-guidelines-development-L4-checklist.md

### L4 Checklist

| Label  | Item                                 | Description                                                                                                                                      | Item Status | Notes |
|--------|--------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------|
| 1.     | **Publishing Information**           | Publishing metadata for the content                                                                                                              |             |       |
| 1.a    | Publisher                            | Who is the publisher? (Name and public contact information)                                                                                      |             |       |
| 1.b    | Steward                              | Who is the steward? (Name and public contact information)                                                                                        |             |       |
| 2.     | **Local Prioritization and Selection**   |                                                                                                                                                  |             |       |
| 2.a    | Charter                              | Project Charter, including high-level approach to evaluation and measurement                                                                     |             |       |
| 2.b    | Gap Analysis                         | Care gap analysis                                                                                                                                |             |       |
| 2.c    | Local Feasibility                    | Local feasibility assessment (harmonization guidelines)                                                                                          |             |       |
| 2.d    | **Guideline Selection**              | Make decision which guidelines/CDS to implement; assess implementability                                                                         |             |       |
| 2.d.i  | Local Applicability                  | Assess local organizational need/applicability (including GUIDES checklist Domain 1: The CDS context)                                            |             |       |
| 2.d.ii | Implementability                     | Assess intrinsic implementability of guideline (e.g. GLIA v2.0; GUIDES checklist Domain 2: The CDS content)                                      |             |       |
| 2.e    | Communication                        | Communicate and market decision to implement                                                                                                     |             |       |
| 2.f    | Incentives                           | Decide whether to incentivize (and how)                                                                                                          |             |       |
| 3.     | **Evaluate Local Context**           | **Evaluate Local Workflow and Context**                                                                                                          |             |       |
| 3.a    | Burden                               | Assess burden                                                                                                                                    |             |       |
| 3.b    | Workflow                             | Localize workflows (include “5 rights” of CDS)                                                                                                   |             |       |
| 3.c    | Entry Points                         | Identify points of entry                                                                                                                         |             |       |
| 3.d    | Apply Workflow Template              | Apply workflow template to point of entry                                                                                                        |             |       |
| 3.e    | Stakeholder Engagement               | Engage stakeholders                                                                                                                              |             |       |
| 4.     | **Feasibility Assessment (Technical)**   | **Feasibility Assessment (Technical)**                                                                                                               |             |       |
| 4.a    | EHR Technical Feasibility            | EHR technical feasibility requirements                                                                                                           |             |       |
| 4.b    | Technical Design Strategy            | Design technical strategy for local setting (EHR capabilities, interfaces, etc.)                                                                 |             |       |
| 4.c    | Measurement Strategy Design          | Design measurement strategy (e.g. process measures, outcome measures)                                                                            |             |       |
| 4.d    | Update Charter                       | Update charter with additional details of technical approach and measures                                                                        |             |       |
| 5.     | **Local Design**                     | **Local Design (Localization of new workflow and L3 "tweaks")**                                                                                      |             |       |
| 5.a    | Convene End Users                    | Convene end users                                                                                                                                |             |       |
| 5.b    | “To-be” Workflow                     | Map “to-be” workflow                                                                                                                             |             |       |
| 5.c    | System Architecture                  | Evaluate and design system architecture                                                                                                          |             |       |
| 5.d    | Design I.T. artifacts/features       | Detailed design of localized I.T. artifacts/features                                                                                             |             |       |
| 5.e    | Localize Measure Capture             | Localize measure capture (e.g., what demographic group or other conditions are included in the denominator)                                      |             |       |
| 5.f    | Start to develop training (localize) | Start to develop training (localize) – make them aware of workflow, etc.                                                                         |             |       |
| 5.g    | Consider Multiple EMRs               | Consider multiple EMRs; repeat localization design per EMR as needed                                                                             |             |       |
| 6.     | **Build L4 Artifacts/Features**      | **Build L4 Artifacts/Features: a) in EMR, or b) as web service or app**                                                                              |             |       |
| 6.a    | Build L4 Artifacts/Features          | Build the L4 artifacts/features, e.g., value sets, logic records, rules, alerts                                                                  |             |       |
| 6.b    | Build Review                         | Conduct a build review                                                                                                                           |             |       |
| 6.c    | Demonstration                        | Demo to end users                                                                                                                                |             |       |
| 6.d    | Repeat if heterogenous EMRs          | Repeat if heterogenous EMR environment (e.g., if there is more than one EMR)                                                                     |             |       |
| 7.     | **Test and Refine**                  | **Test and Refine**                                                                                                                                  |             |       |
| 7.a    | Unit Test                            | Unit test code/artifacts                                                                                                                         |             |       |
| 7.b    | Integrated Test Scripts              | Write localized test scripts for integrated testing                                                                                              |             |       |
| 7.c    | Integrated System Test               | Integrated system test, e.g., call out to a Web; systems working together                                                                        |             |       |
| 7.d    | Create Test Milieu                   | Create test milieu (test patients)                                                                                                               |             |       |
| 7.e    | UAT (user acceptance testing)        | UAT (user acceptance testing); does the thing it’s needed to do downstream                                                                       |             |       |
| 7.f    | Usability Testing                    | Usability testing e.g., practical issues such as #clicks to get to recs.                                                                         |             |       |
| 7.g    | Refine                               | Revise at all steps                                                                                                                              |             |       |
| 8.     | **Educate and Train**                | **Educate and Train**                                                                                                                            |             |       |
| 8.a    | Localize Education/Training          | Update education with local EHR design, e.g., screenshots;  finish localization of training and who to train; how to best deliver training.      |             |       |
| 8.b    | Tailor Training Strategy             | Finish localization of training and who to train; how best to deliver training including tailoring to usual training channels (multiple pathways) |             |       |
| 8.c    | Training Policy and Procedures       | Develop training policy & procedures                                                                                                             |             |       |
| 8.d    | Train End Users                      | Train end users on CDS, policy, & procedures                                                                                                     |             |       |
| 8.e    | Update Training                      | Update and reinforce training based on initial training rounds                                                                                   |             |       |
| 9.     | **Deploy**                           | **Deploy**                                                                                                                                       |             |       |
| 9.a    | Migrate Artifacts                    | Migrate artifacts from Dev to Test to Production                                                                                                 |             |       |
| 9.b    | Go-live Staffing                     | Plan go-live staffing                                                                                                                            |             |       |
| 9.c    | Test Silently                        | Test with real patients, but behind screen (silently)                                                                                            |             |       |
| 9.d    | Test in Production                   | Test in Production by small number of clinicians (e.g.: ~2)                                                                                      |             |       |
| 9.e    | Readiness                            | Perform readiness assessment                                                                                                                     |             |       |
| 9.f    | Pilot and Provide Feedback           | Pilot (e.g. in 2-3 pilot clinics or depts.,  if multi-clinic organization) and provide feedback                                                  |             |       |
| 10.    | **Use Clinically**                   | **Use Clinically**                                                                                                                               |             |       |
| 10.a   | Use System                           | Use system as designed                                                                                                                           |             |       |
| 10.b   | Observation                          | Observe end users                                                                                                                                |             |       |
| 10.c   | Feedback                             | Provide feedback to users                                                                                                                        |             |       |
| 11.    | **Measure, Evaluate, and Refine**    | **Measure, Evaluate, and Refine**                                                                                                                |             |       |
| 11.a   | Extract Data                         | Pull data & create reports                                                                                                                       |             |       |
| 11.b   | Analyze Data                         | Analyze and assess per measurement strategy                                                                                                      |             |       |
| 11.c   | Focus groups                         | Focus groups                                                                                                                                     |             |       |
| 11.d   | Satisfaction Surveys                 | Satisfaction surveys built into artifact                                                                                                         |             |       |
| 11.e   | Report Findings                      | Report findings to leadership and Quality                                                                                                        |             |       |
| 11.f   | Optimize                             | Iteratively optimize clinical decision artifacts and/or workflows                                                                                |             |       |
{:.grid}


---

// File: input/pagecontent/common-care-pathway.md

<div>
  <img src="common-pathway.png" alt="Common Care Pathway" height="494" width="766"/>
</div>

<!--
Diagram evokes more encounter-based care, doesn't communicate that it potentially applies to more distributed care

Potentially simplify even more:
  Diagnosis/Therapy/Procedure/Identity
-->

---
NOTE: This is a proposed common pathway for ambulatory care processes.
---

**Establish Patient Identity**

Identifying and recording the subject of care.

**Retrieve Patient Health Summary**

Retrieving a summary of the patient's health.

**Triage**

Performing basic triage to identify any signs that emergency care is required

**Emergency: Escalate Care**

Providing emergency care in trauma cases or as part of guideline-based care escalation.

**Invoke Applicable CCGs**

Invoking the CCGs (Clinical Commissioning Groups) that are applicable to the situation.

**Provide Counseling**

Informing the subject of care about their treatment options and about how their ongoing care should be managed between visits. This is also where treatment consents are obtained and where health education is provided.

**Record Observations**

Gathering clinical history and performing and recording observations regarding the patient's health (e.g. blood pressure, temperature, etc.).

**Order Tests**

Ordering and conducting diagnostic tests, including lab tests, collection of samples, and other diagnostic tests. Lab testing may be done locally (e.g. HIV quick test) or the samples may require lab order fulfillment workflow.

**Evaluate Test Results**

Using available information from the patient's history, current examinations, tests, and assessments to assist in developing a diagnosis.

**Record Diagnosis**

Recording the diagnosis that was reached in the evaluation process.

**Order Interventions**

Ordering the necessary interventions.

**Provide Interventions**

Providing the interventions to the patient.

**Order Medications**

Clinicians ordering medications to be dispensed by a pharmacy. Pharmacies may be local to the care facility or community-based, and involves supply chain transactions to support medication management.

**Dispense Medications**

Administering medications to the patient.

**Establish Monitoring and Follow-up**

Monitoring and tracking progress for each patient based on guideline recommendations.

**Discharge/Refer Patient**

Discharging or referring a patient, including the movement of patients through levels of care delivery (e.g. acute to primary, primary to community, etc.) or the enrollment of patients in guideline-based care programs (e.g. HIV, maternal, diabetes, injury rehabilitation, etc.).

**Update Digital Client Record**

Updating the Digital Client Record with the appropriate information

**Generate Reportable Indicators**

Recording and reporting patient-specific care management information which may be aggregated to develop reportable system management indicators at the provider, facility, district, national, and international levels.

---

// File: input/pagecontent/documentation-approach-02-03-knowledge-engineering-overview.md

<!-- compare with documentation-approach-05-knowledge-engineering-overview -->

Knowledge Engineering (KE) is the discipline and profession of developing explicit representations of advanced, domain-oriented logic in computer systems (i.e., knowledge-based systems) in order to simulate human decision-making and high-level cognitive tasks. A knowledge engineer supplies or develops some or all of the “knowledge,” typically stored in some knowledge base(s), that is built into or used by computational systems.

This section will provide the following:

*   An Overview of Knowledge Engineering (KE)
*   Introduce the Key Phases of the Knowledge Lifecycle
    *   [Knowledge Acquisition](documentation-approach-05-01-knowledge-acquisition.html)
    *   [Knowledge Translation](documentation-approach-05-02-knowledge-translation.html)
    *   [Knowledge Representation (as relates to KE)](documentation-approach-05-03-knowledge-representation.html)
    *   [Knowledge Execution and Validation](documentation-approach-05-04-knowledge-execution-and-validation.html)
    *   [Knowledge Implementation](documentation-approach-05-05-knowledge-implementation.html)
*   [Introduce the Agile CPG Development Approach](documentation-approach-05-06-agile-cpg-development-approach.html)

In healthcare, knowledge engineers are further specialized with expertise that may span from those with deep domain understanding including knowledge elicitation tools and techniques with some familiarity with various knowledge representation formalisms to deep understanding of knowledge formalism (i.e., representation/ expression) and knowledge architecture (i.e., knowledge processes and technology requirements for creating, capturing, organizing, accessing and using knowledge assets with varying degrees of familiarity with the domain.)

Furthermore, some knowledge engineers are very specialized in a particular knowledge representation level (see below) and or functional tier such as data modelers, terminologists, ontologists, and expression language (e.g., CQL) authors. Likewise, some knowledge engineers are very specialized in a healthcare domain (e.g., cardiology), broad domain conceptualizations and their respective formalisms (e.g., pathways, measures), or specialized methodologies that play a critical role in the overall knowledge engineering process (e.g., knowledge synthesis).

There are a few, experienced informaticians and knowledge architects that play a broader systems engineering (i.e., designing, integrating, and managing complex systems over their life cycles) role on a knowledge engineering team to bring the information, assets, processes, and individual knowledge engineers together, in part, through shared knowledge architecture and use of standardized representations (e.g., composite assets, terminologies, standards) as well as tooling (e.g., editors, validation tooling).

<div>
<img src="CPG-05-00.png" alt="image_tooltip" class="img-responsive img-rounded center-block" width="600"/>
</div>

Fig. 25. The Knowledge Engineering Lifecycle, illustrating the general flow of activities and information.

### Knowledge Engineering Lifecycle Process

The knowledge engineering lifecycle process describes a progressively interdependent series of activities or steps taken in order to transform domain knowledge or content into a more formal computable set of assets for consumption, execution, and/or delivery. Furthermore, it describes many of the sub-activities and their work products as well as their interdependencies and generalized information flow. These activities, work products, and information have a generalized flow, however as discussed in Agile KE, many of these activities and their derivatives run concurrently, have numerous touch points, and are done iteratively. These various flows occur between and across the various tiers of functionality (i.e., data, logic, user interface), levels of representation (i.e., narrative to computable), and knowledge formalisms (i.e., asset types, representations, and expressions) as presented in further detail below. Here we will briefly describe the high-level activities in the knowledge engineering lifecycle process, though much more detailed descriptions of these activities and their corresponding sub-activities, methodologies, and tooling are available in various resources provided by respective communities of practice.

The key phases of the Knowledge Engineering Lifecycle covered in this section include:

### [Knowledge Acquisition](documentation-approach-05-01-knowledge-acquisition.html)

The process of extracting, understanding, structuring and organizing knowledge from one source so it can be translated into computer-interpretable (or computer-enabled) formalisms. Knowledge acquisition typically includes one or more of the following sub-activities:

*   Knowledge Elicitation- the process of extracting an expert’s tacit knowledge or expert-sourced artifacts (e.g., narrative guidelines)
*   Knowledge Authoring- the process by which a domain expert directly expresses their tacit knowledge into more formalized representations
*   Knowledge Synthesis- the process and set of techniques that evaluates and summarizes all available formal evidence on a particular topic through formal methods
*   Knowledge Discovery- the process of discovering or learning patterns from data (e.g., from data mining, machine learning, or combined methods) that lead to actionable knowledge
*   Hybrid Approaches

#### In Collaboration with the Guideline Development Group- through engagement and even integration with guideline development group to enable work to begin further upstream as well as more rapid feedback and iteration.

<div>
<img src="CPG-05-01.png" alt="image_tooltip" class="img-responsive img-rounded center-block" width="600"/>
</div>

FIG. 26. Knowledge Engineering in collaboration with the guideline development group (as described in the CDC’s “Integrated Process”) can proceed much earlier and be incremental and iterative, while leveraging direct interactions with the guideline development group to ensure that the translation into more formal, computable expressions accurately convey the intent of the source knowledge.

##### In Collaboration with Knowledge Implementers- leveraging the benefits of working directly with knowledge implementers, not limited to potential representative data sets (e.g de-identified data) to perform early knowledge specification and validation activities or even employ knowledge discovery and hybrid approaches.

<div>
<img src="CPG-05-02.png" alt="image_tooltip" class="img-responsive img-rounded center-block" width="600"/>
</div>

FIG. 27. Knowledge Engineering in collaboration Local Informatics and EHR build teams (concurrent development and implementation) enables more data-driven knowledge engineering processes and helps to ensure that the computable expressions accurately and reliably convey the intent of the knowledge source to the target systems.

### [Knowledge Translation](documentation-approach-05-02-knowledge-translation.html)

Knowledge translation occurs between and across various levels of knowledge representation, from narrative to semi-structured to structured to executable (described in detail below in “Knowledge Representation” section) as well as between equivalent forms of a given knowledge asset.

<div>
<img src="CPG-05-03.png" alt="image_tooltip" class="img-responsive img-rounded center-block" width="600"/>
</div>

FIG. 28. Knowledge Translation is the dynamic and iterative process of conveying the concepts, clinical logic, and intent of a source knowledge expression (e.g., narrative guideline) into an equivalent expression in another language or formalism- in the case of a narrative guideline into a computable or computer interpretable expression. This may occur successively or progressively across the Levels of Representation (L1, L2, L3) or may be directly to an L3/L4 expression, typically using an authoring tool or domain-oriented language.

### [Knowledge Representation/Expression](documentation-approach-05-03-knowledge-representation.html)

Knowledge representation pertains to the process of progressively structuring and formalizing content for computer interpretation and enablement and will be discussed in more detail in the “Knowledge Representation” section below.  Also covered in this section are: 1) Knowledge Curation, the activity of identifying, versioning, indexing, tagging (i.e., adding metadata), and archiving the various artifacts and assets (e.g., representations, formalisms, expression libraries) relevant to the scoped knowledge engineering activity; and 2) Knowledge Management, the processes, capabilities, and tooling for identifying, organizing, relating, finding, sharing, and reusing knowledge assets (see section on Knowledge Representation).

### [Knowledge Execution & Validation](documentation-approach-05-04-knowledge-execution-and-validation.html)

Knowledge execution refers to the processes of binding computable knowledge formalisms to data for the purpose of generating new information and insights. Details of knowledge execution are beyond the scope of this document, but has implications largely addressed in the section on “Methods of Implementation”.

Knowledge validation refers to process of verifying that the various computable guideline knowledge formalisms faithfully, specifically, and unambiguously perform as intended. Validation may occur within and across various activities within the knowledge engineering lifecycle development process. Details of this section include approaches for using Real-World Data to greatly accelerate the development and implementation processes and yield more accurate knowledge expressions.

Also see Test-driven Knowledge Engineering in the Agile Approach to CPG Development section.

### [Knowledge Implementation](documentation-approach-05-05-knowledge-implementation.html)

Knowledge implementation refers to the activities of localizing the knowledge formalisms, including addressing data bindings (e.g., data and terminology mappings), workflow insertions and localization factors (e.g., adjustments to thresholds), integration to end-user system endpoint interfaces, and adjustment or issues related to data quality, timing, enrichment, and/or required data enrichments. Greater detail on this topic is covered in its own section- Implementing Computable Knowledge <!-- Link to new section Bryn is committing -->, but at minimum, there is a local data, clinical logic, and workflow validation step prior to full implementation.

Also addressed in this section:

#### Local Content and Practice Governance

Most large health care delivery organizations have practice governance oversight bodies that may function in some degree like a guideline development group utilizing local organizational experts and key stakeholders, inputs from their own quality functions and research apparatus, and taking into account organizational goals, objectives, and limitations.

<div>
<img src="CPG-05-04.png" alt="image_tooltip" class="img-responsive img-rounded center-block" width="600"/>
</div>

FIG. 29. Just as the guideline development group and knowledge engineering team can work collaboratively on the CPG, the local practice governance and informatics (EHR build) functions can work collaboratively using the CPG as a consistent, holistic specification that can then be localized taking various organizational factors including workflow, enablements, methods of implementation, and mechanisms of integration into consideration.

#### Local informatics (knowledge engineering) and implementation

Just as many of the functions and methods of the guideline development group have their local analogues, so does the knowledge engineering and guideline formalization and implementation.

#### Concurrent Development and Implementation

Given the similarities between and related activities of the CPG development process and the local implementation of standardized best practices, there are considerable opportunities for improving the effectiveness, efficiency, implementability, and overall uptake (and enhancement) guideline recommendations related best practices.

<div>
<img src="CPG-05-05.png" alt="image_tooltip" class="img-responsive img-rounded center-block" width="600"/>
</div>

FIG 30. The similarities in roles, functions, and activities as well as complementary needs and goals in guideline development and implementation together with the mutual benefits of working collaboratively not only afford the means to do concurrent development and implementation, it can provide benefits in the speed, cost, and quality of end-user consumables. This concurrency may be part of more traditional knowledge engineering approaches, but may further benefit from and provide benefit to the Agile CPG Development Approach described below.

#### Analogs and Collaboration across CPG Development and Implementation

As described in more detail in the section on [Knowledge Implementation](documentation-approach-05-05-knowledge-implementation.html), there are numerous analogues between the guideline development group and local practice governance as well as between the CPG knowledge engineering function and local informatics and EHR build functions. Likewise, as the guideline development group and knowledge engineering function collaborate in the CPG development process, so does the local practice governance and informatics/EHR build function in the local knowledge implementation process.

#### Feedback- early, often, actionable

Furthermore, such a collaboration provides an opportunity to engage and address critical implementation concerns further upstream as well as afford earlier, shorter, and actionable feedback loops into the overall best practice to daily practice endeavor.

#### Real-world Data to Develop CPGs

Such real-world data can not improve the quality (effectiveness and implementability) of the CPG, it affords the opportunity to greatly accelerate the knowledge engineering process and overall CPG development lifecycle. Obviously, having more than one local implementation affords many benefits.

Further details of knowledge implementation are beyond the scope of this document at this time, but have implications partially addressed in the section on “Methods of Implementation.”

### [Agile CPG Development Approach](documentation-approach-05-06-agile-cpg-development-approach.html)

The Agile CPG Development Approach describes methods, principles, and tools to develop and implement higher-quality CPGs more efficiently and timely.

This section will provide the following:

*   An Overview of Agile Principles and Methods
*   Critical Aspects of Agile in Knowledge Engineering and CPG Development
    *   Cross-functional, Integrated CPG Development Team
    *   “Chunking”
    *   Test-driven Knowledge Engineering
    *   Iteration, rapid-cycle feedback
    *   Leverage Knowledge Base (in an ‘intelligent’ Knowledge Content Management System)
*   Leveraging a Knowledge Base (Knowledge Content Management System)

Also refer to the prior section on [Knowledge Implementation](documentation-approach-05-05-knowledge-implementation.html) for details on concurrent development and implementation using cross-functional integration with Local Implementation teams and the benefits thereof.

As implied by its name, Agile process and initiatives are able to move quickly and easily as has been demonstrated and accepted best practice in the software development industry. Agile development is characterized by the division of tasks into short phases of work and frequent reassessment and adaptation of plans.

Characteristics of Agile include:

*   Iterative, incremental, and evolutionary
*   Cross-functional, tightly integrated teams with focus on delivery
*   Very short feedback loop and adaptation cycle
*   Integration of “build” and “test” phases (test-driven development)

Knowledge-driven systems principles and best practices must still be respected and/or employed.

Relevant Agile Practices to be adapted to knowledge engineering function:

*   Cross functional teams
*   Frequent, brief team communications (e.g. Scrum)
*   Domain-driven design
*   Iterative and incremental development
*   Low-code development platforms
*   Paired programming (knowledge engineering)
*   Retrospectives (continuous learning)
*   Specification by example
*   Test-driven development
*   Test-integration

Much more detail will be provided in the section dedicated to the [Agile CPG Development Approach](documentation-approach-05-06-agile-cpg-development-approach.html)


---

// File: input/pagecontent/documentation-approach-02-04-knowledge-representation.md

Knowledge representation is a surrogate, a substitute for the thing itself, that allows for reasoning (human and computational) about the “thing”. A knowledge representation may be thought of on a continuum of successive degrees of readability, of ability to reason over, and formalism (e.g., to compute).

In this section we will cover:

*   [Levels of Representation Framework (degrees of formalism/ computability)](documentation-approach-06-01-levels-of-knowledge-representation.html)
*   [Tiers of Functionality](documentation-approach-07-tiers-of-functionality.html)
*   [Levels of Representation by Tiers of Functionality](documentation-approach-08-levels-of-representation-by-tiers-of-functionality.html)
*   [Knowledge Assets (discrete representations with a purpose)](documentation-approach-06-02-knowledge-assets.html)
    *   [Asset Metadata (information about the assets and knowledge base)](https://www.hl7.org/fhir/clinicalreasoning-knowledge-artifact-representation.html#metadata)
*   [Knowledge Architecture (designing and defining the types and nature of assets)](documentation-approach-06-03-knowledge-architecture.html)

### [Levels of Knowledge Representation Framing:](documentation-approach-06-01-levels-of-knowledge-representation.html)

#### Approach

The approach taken by this implementation guide is to consider three broad challenges of clinical guideline implementation:

Note that the levels of knowledge representation are a continuum, with discrete categories introduced in the methodology to help inform discussions and communicate the concepts involved. Typically, the initial guideline content is published in narrative form (L1), but guidelines will often contain diagrams, charts, and other depictions that lean towards semi-structured (L2) representation.

This implementation guide utilizes a previously established clinical decision support (CDS) implementation model to move from a narrative clinical guideline to computable content. This model defines four (4) ‘levels’ of knowledge representation:

<div>
<img src="knowledge-levels.png" alt="image_tooltip" class="img-responsive img-rounded center-block" width="750" hight="334"/>
</div>

FIG. 45. Knowledge Levels


As will be discussed further in the Agile CPG development approach (see section on [Knowledge Engineering](http://build.fhir.org/ig/HL7/cqf-recommendations/documentation-approach-05-knowledge-engineering-overview.html)), these levels of representation may begin to overlap or blur and may not follow an entirely linear or successive progression for sequential development maturation. Furthermore, tooling capabilities may afford translation across levels of representation and some levels may not be entirely expressed as the tools user interface and internal translation capabilities facilitate traversing these levels. This will become more evident and described in more detail in the section on the Agile CPG development approach.

<div>
<img src="CPG-05.06-01.png" alt="image_tooltip" class="img-responsive img-rounded center-block" width="750" hight="287"/>
</div>

FIG. 46. Levels of Representation in historical CDS sense and as may be adapted for Agile approaches.

#### [Tiers of Functionality](http://build.fhir.org/ig/HL7/cqf-recommendations/documentation-approach-07-tiers-of-functionality.html)

This implementation guide defines three (3) tiers of functionality, very roughly analogous to the tiers of architecture in software engineering

*   **Data**
*   **Logic**
*   **User Interface (UI)**

#### [Levels of Representation by Tiers of Functionality](http://build.fhir.org/ig/HL7/cqf-recommendations/documentation-approach-08-levels-of-representation-by-tiers-of-functionality.html)

The levels of knowledge representation (L1-L4) can each be broken down into three tiers of functionality: data tier (T1), logic tier (T2), and forms tier (i.e., UI) (T3).

### [Knowledge Assets](http://build.fhir.org/ig/HL7/cqf-recommendations/documentation-approach-06-02-knowledge-assets.html)

Knowledge assets or artifacts as they are often referred to in FHIR, where an artifact is an instance of an asset. Assets provide the ability to keep domain logic separated and distinct from other system logic in complex systems. In this implementation guide we often refer to knowledge assets and knowledge artifacts interchangeably, though the distinction is very relevant the knowledge engineer.

*   Asset Metamodel- its structure- requirements and constraints
*   Content- what goes into the asset “container”
*   Metadata- for detailed section on Knowledge Assets
*   Composite and Derived- see section on Knowledge Assets

#### Asset Metamodel

The asset meta-model is a model that essentially describes what is required and/or allowed for a given class of knowledge assets. In FHIR, the means of defining asset metamodels is the FHIR [StructureDefinition Resource](https://www.hl7.org/fhir/structuredefinition.html) (though it is also used for definitions of resources other than knowledge assets including all request (e.g. orders) and event (e.g. clinical data element) resources). Furthermore, the [PlanDefinition Resource](https://www.hl7.org/fhir/plandefinition.html) (based on the HL-7 Knowledge Artifact Specification) is a base, or more generic, asset meta-model definition that may be profiled using StructureDefinition to further define additional asset metamodels. The [Knowledge Artifact Representation in FHIR](https://www.hl7.org/fhir/clinicalreasoning-knowledge-artifact-representation.html), from the FHIR Clinical Reasoning Module, describes how the asset metamodels are realized as FHIR Profiles, but details of its applications to the CPG are described in further detail in this section of the implementation guide.


#### Content

Knowledge asset content refers to that which is contained within a specific knowledge asset. This includes the scoped values or expressions for a specific asset’s metadata, attributes, and other formalisms used to express the knowledge contained within the asset.

#### Asset Metadata

Metadata is data that provides information about the knowledge asset. This may include disk active metadata, structural metadata, administrative metadata, and situating or relational metadata. The section on [Metadata](https://www.hl7.org/fhir/clinicalreasoning-knowledge-artifact-representation.html#metadata) of the Clinical Reasoning Module on Knowledge Artifact Representation provides a description of how metadata is routinely addressed in FHIR Knowledge Artifact Representations, but details of its applications to the CPG are described in further detail in this section of the implementation guide.

#### Expressions (and/or Languages)

An expression is a computable language for creating a computer-interpretable representation of specific knowledge. In HL-7 and for the scope of this implementation guide, the expression language used (where it’s able to sufficiently express the intended logic behavior) is the Clinical Quality Language (CQL).

#### Declarations

A declaration is an expression of the structural elements of computable logic (e.g. values for attributes and parameters of a knowledge asset) that does not describe how to compute the logic, rather what the logic is. These are often expressed as static values on the definitional assets as opposed to be buried deep in the expressions. Expressions (or languages) can then evaluate and/or set these declarations.

#### Composite Assets

No single representation or expression can sufficiently and/or appropriately describe the nature and behavior of many domain concepts using computable formalism. A CPGPathway, CPGStrategy, and CPGRecommendation are examples of composite assets in this implementation guide.

#### Derived Assets

Many knowledge assets may be derived from other knowledge assets (in part or in whole) as a means to reuse and repurpose the content of the knowledge asset from which they were derived. For example, a CPGMetric may derive much of its content from a CPGRecommendation. Derived knowledge assets may be wholly or partially derived from other assets.

#### Translation Within and Between Knowledge Representations

Some knowledge assets may be represented using multiple alternative formalisms (expressions and declarations), yet express the same meaning and intent resulting in identical behavior when reasoning over identical inputs (data elements). This equivalence in computational intent and behavior is known as isopragmatism.

#### Curating and Managing Knowledge Assets in a Large Corpus (Knowledge Base)

For more on Curating and Managing Knowledge Assets (and their respective knowledge architecture), see sections on Knowledge Representation in [Knowledge Engineering](documentation-approach-05-03-knowledge-representation.html), and Leveraging a Knowledge Base (Knowledge Content Management System) in the [Agile CPG Development Approach](documentation-approach-05-06-agile-cpg-development-approach.html).

### [Knowledge Architecture](documentation-approach-06-03-knowledge-architecture.html)

This section addresses the principles and best practices of knowledge architecture as well as the approach through which the CPG Knowledge Architecture was and continues to be developed including an overview of the Conceptual Perspective on the CPG Knowledge Architecture and the means through which it is realized and concretized in FHIR Profiles elsewhere in this implementation guide. This implementation guide includes this approach to knowledge architecture as its through it, direct interactions with various stakeholders, and through real-world use cases that it will continue to evolve.

Covered in this section:

*   Key Challenges for Knowledge Architecture
*   Best Practices and Needs to be addressed
*   Key Principles and consideration
*   Knowledge Architecture Principles as applied to the CPG
*   Developing the CPG Knowledge Architecture
*   **Conceptual Perspective on the CPG Knowledge Architecture**
*   **Knowledge Architecture in FHIR for the CPG-IG**
*   Boundary Issues at the Separations of Concerns
*   Knowledge Architecture and Knowledge Content Management System

Knowledge architecture is the discipline of information system architecture (Industry, Enterprise, Solution) with a focus on the principles, best practices, means, and mechanisms by which the knowledge assets for the architecture’s given domain are managed including: acquiring, representing, stored, and organized. Knowledge architecture includes defining the types and scopes of the various assets, their metadata, as well as their relations. In FHIR, this is done through profiling of definitional resources (e.g. plan definition, activity definition) using the StructureDefinition Resource to define metamodels and is enforced largely through a compliance framework and a common approach in tooling to creating these asset type profiles.


---

// File: input/pagecontent/documentation-approach-02-05-knowledge-implementation.md

Once computable representations and expressions of any clinical practice guideline have been developed (as a CPG-IG) they must be implemented and integrated with various clinical and operational information systems (e.g., EHRs, Workflow Apps, Quality and Practice Analytics tools, Quality and Registry Reporting tools, etc.)  Three main factors come into play. The first consideration is where and how these computable expressions and artifacts will be executed- natively withing systems of record, in an external reasoning engine, or translated and reimplemented in target system native logic languages (e.g. rules engines).  The second consideration, which is related to the first, Is how the inferences or insights (e.g. CaseFeatures, Recommendations/Proposals, Metrics) are to be integrated into existing clinical application ecosystems and/or the same or similar workflows supported by these applications.  The third consideration, which further relates to the first two, Is where and how these insights will be manifested in such a way to enable guideline-informed clinical workflows and related healthcare activities.  Partially orthogonal to, but just as important as these three considerations, is the ability to assess and ensure conformance of specific implementations of computable clinical practice guidelines using the specifications and requirements outlined in this implementation guide.

While all of these factors Have implications for the overall level of effort, the methods of implementing knowledge and mechanisms of integration are directly reflected in the overall selection of workflow enablements in a given setting. The last two sections further discuss trade-offs between effort, time to develop, and capabilities enabled (and value that can be derived) when developing a CPG. From very basic context for narrative snippets searchable in a library (or Infobutton from EHR) to full clinical workflow enablement, cognitive support, and pathway tracking (likely via SMART-on-FHIR App or deep EHR integration). CPGs also enable feedback loops with real-world evidence of actual guideline usage and outcomes, and provide a substrate for the evidence ecosystem and a feedforward loop for evidence updates. To support description of, and allow declaration of conformance to, these various capabilities enabled by CPGs, the CPG-IG defines levels of enablement that correlate to work effort, time to delivery, and capabilities enabled.

<ul>
  <li><a href="documentation-approach-09-methods-of-implementation.html">Methods of Implementing Knowledge</a> (expressions and artifacts)</li>
  <li><a href="documentation-approach-10-mechanisms-of-integration.html">Mechanisms of Integration with Clinical Information Systems</a></li>
  <li><a href="documentation-approach-03-conformance-levels.html">Levels of Workflow Enablement</a></li>
  <li><a href="documentation-conformance.html">Levels of Conformance</a></li>
</ul>


---

// File: input/pagecontent/documentation-approach-03-conformance-levels.md

This section discusses trade-offs between effort, time to develop, and capabilities enabled (and value that can be derived) when developing a CPG. From very basic context for narrative snippets searchable in a library (or Infobutton from EHR) to full clinical workflow enablement, cognitive support, and pathway tracking (likely via SMART-on-FHIR App or deep EHR integration). CPGs also enable feedback loops with real-world evidence of actual guideline usage and outcomes, and provide a substrate for the evidence ecosystem and a feedforward loop for evidence updates. To support description of, and allow declaration of conformance to, these various capabilities enabled by CPGs, the CPG-IG defines levels of enablement that correlate to work effort, time to delivery, and capabilities enabled.

### Levels of Enablement

Levels of enablement are successively more feature-rich implementations of the capabilities and features described by this implementation guide, specifically as related to:

*   CPG features and capabilities implemented
*   Intended Delivery and Dissemination Mechanisms
*   Knowledge Representation Levels formalized across CPG Features (capabilities described in CPG Knowledge Architecture)
*   Tiers of Functionality
*   Methods of Implementation
*   Mechanisms of Integration

This implementation guide defines the following levels of enablement:

*   Contextualized Narrative (searchable)
*   Contextualized Narrative (delivered in context)
*   Contextualized Narrative with Patient-level Information (basic summary view)
*   Actionable Intervention (with and without narrative and summary view; CDS Hooks)
*   Actionable Summary View (maybe CDSCards, AdaptiveForms, iFrame depending on implementation/ integration)
*   EHR Import of CPG (features determined and subsetted by EHR)
*   Deep EHR Integrations with CDS Service
*   Then add incremental effort for derived capabilities and how they interact or are implemented (Metric/Measure, eCaseReport, eCasePlanSummaryView/eCasePlanProgressingNote).  Some capabilities and enablements build on others.

<details open>

<summary>

FIG 17. A given CPG may provide a distinct set of enablements, at singular or multiple Levels of Enablement, or may go through successive versions in its development lifecycle with increasing Levels of Enablement, particularly as the impact of its recommendations and interventions prove to be correlated (or even causal) to key outcomes and thus justify the effort.  Lower Levels of Enablement may largely serve to collect guideline-related patient information to inform guideline development in certain situations such as where evidence is scarce, but needed very urgently such as an emergency response to a pandemic with a novel contagion.

</summary>

<img src="CPG-03-CPGEnablements.png" alt="image_tooltip" class="img-responsive img-rounded center-block" width="600"/>

</details>


---

// File: input/pagecontent/documentation-approach-04-01-guideline-development-group.md

<!-- All of section 4.01 is already included in section 4 document ... remove? !-->
The guideline development group is the multi-stakeholder, cross-functional team assembled to develop the guideline. It often includes members from the target audience (specialist and primary care clinicians), content experts, patients and caregivers, front-line clinicians, evidence-based practice experts, outcomes and quality experts, usability experts, experts in medical and shared decision-making, methodology experts, and experts in health economics. ([https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#GuidelineGroupMembershiptable](https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#GuidelineGroupMembershiptable)).

For the digital CPG, we will need to add a few more experts to the guideline development group or have a few key resources serve cross-functional roles with a Knowledge engineering team (see section on “Knowledge Engineering”).  These may include experts in creating computable representations of the guideline such as: knowledge extraction and/or elicitation, terminologists and/or ontologists, clinical research informatics ([ref](https://www.amia.org/applications-informatics/clinical-research-informatics)), clinical informatics, clinical decision support, cognitive informatics, knowledge formalism and expression, measurement science and measure development, user experience (UX), and user-centered design.  These experts often start with a “paper” or narrative guideline but will likely produce much higher fidelity, accurate, and usable expressions of the guideline through a more “agile” approach to concurrent, integrated, and cross-functional approach to guideline development and knowledge engineering.


## Scoping

Scoping refers to the process and establishment of criteria to describe and constrain the focus of the guideline. It addresses who is the target user of the guideline, who it applies to, and what is addressed in the guideline. This is typically based on various factors, including high prevalence and burden of disease, avoidable mortality and morbidity, high cost, emerging diseases or emerging care options, variation in clinical practice, and rapidly changing evidence. The PICOTS Typology (i.e., population, intervention, comparison, outcome, timeframe) is often used in scoping and correlates closely to the eligibility criteria for the CPG  ([https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#Prioritytable](https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#Prioritytable)).


---

// File: input/pagecontent/documentation-approach-04-02-guideline-development-frameworks.md

<!-- All of section 4.02 is already included in section 4 document !-->
The following frameworks are used in guideline development and across the evidence ecosystem:

### Knowledge Synthesis and the Evidence Pyramid

Knowledge synthesis is the process in the professional community of practice that applies and develops methodologies for systematically evaluating a corpus of evidence related to a particular condition or intervention.  This includes deciding what evidence from across the evidence ecosystem to evaluate[<sup>1</sup>](#1) as well as various methods for performing this evaluation[<sup>2</sup>](#2). One factor that is taken into consideration is the validity and/or quality of evidence.  In evaluating the validity of evidence, one factor that is taken into consideration is the Evidence Pyramid, discussed below.  The quality of evidence may be systematically evaluated, often through knowledge synthesis methodologies such as meta-analyses, systematic reviews, evidence summaries, or rapid reviews, and applying frameworks such as GRADE, discussed further below.

### Meta-Analyses and Systematic Reviews (Syntheses)

A meta-analysis is a statistical analysis that combines the results of multiple quantitative studies (e.g. Randomized Controlled Trials (RCT’s), cohort studies) that address the same question, with each individual study reporting individual study results that are expected to have some degree of error. The objective is to use statistical approaches to derive a pooled estimate closest to the ‘unknown truth’. Meta-analyses yield a weighted average of the results of the individual studies and have the capacity to contrast the results from different studies, identify patterns among study results or potential sources of disagreement among those results, or other relationships that become evident in the context of multiple studies. This approach of aggregating information leads to a higher statistical power and more robust point estimate than is possible from any individual study. (ref)

A systematic review is a summary of the literature that uses a systematic approach to identify and critically appraise publications or evidence from the literature on a given topic.  Systematic reviews are intended to provide a comprehensive and exhaustive summary of current evidence that is ”methodical, comprehensive, transparent, and replicable.” (ref) systematic reviews may relate to interventions (benefits and harms), use of diagnostic testing to detect a particular disease, prognosis or probable course for future outcomes, risks of developing a given condition, or even a systematic review of systematic reviews to consolidate holistic evidence about a given topic (e.g. disease, procedure).

<details open>

<summary>

FIG. 21. The Evidence Pyramid refers to a means to evaluate the quality or validity of evidence (higher toward the top) as well as provide a visual depiction of the amount of evidence (width)[^3].  The evaluation of the evidence not only informs the guideline development process and resulting recommendations but is further communicated together with the recommendations themselves using the GRADE framework, described below.

</summary>

<img src="CPG-04-01.png" alt="Evidence Pyramid" class="img-responsive img-rounded center-block" height="500" width="500"/>

</details>

**PICOTS Typology** - **P**atient population, **I**ntervention, **C**omparator, **O**utcomes, **T**iming, **S**etting. The **PICOTS** Typology may be used for scoping the guideline and individual recommendations and the analysis of the supporting evidence or studies (e.g., meta-analyses, systematic reviews, and the individual studies that serve as their body of evidence).  There are implications to guideline eligibility, applicability criteria for individual recommendations (the “condition” portion of ECA rules), and various data element and terminology semantics across the CPG.[<sup>4</sup>](#4);[<sup>5</sup>](#5)  For more on using PICOTS within HL7 Standards, see the EBM-on-FHIR initiative.[<sup>6</sup>](#6)

**GRADE** (**G**rades of **R**ecommendation **A**ssessment, **D**evelopment and **E**valuation) **GRADE** describes a process and a structured framework for conveying information to develop a common, transparent, and sensible system for grading the **quality** of evidence and the **strength** of recommendations. Quality of evidence and strength of recommendations have implications for not only recommendation metadata and implementation approaches.  GRADE distinctly separates the evaluation of the quality of evidence from the evaluation of strength of recommendations.[<sup>7</sup>](#7);[<sup>8</sup>](#8);[<sup>9</sup>](#9);[<sup>10</sup>](#10);[<sup>11</sup>](#11)

---

<a id="1">1</a>: https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#Deciding

<a id="2">2</a>:  https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#Summarizingtable

<a id="3">3</a>: http://dx.doi.org/10.1136/ebmed-2016-110401

<a id="4">4</a>: https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#PICOtable

<a id="5">5</a>: https://www.ncbi.nlm.nih.gov/books/NBK98234/table/ch

<a id="6">6</a>: http://hl7.org/fhir/clinicalreasoning-evidence-and-statistics.html

<a id="7">7</a>: https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#Judgingtabl

<a id="8">8</a>: https://www.ncbi.nlm.nih.gov/pubmed/23312392

<a id="9">9</a>: https://www.ncbi.nlm.nih.gov/pubmed/21208779

<a id="10">10</a>: https://www.cdc.gov/vaccines/acip/recs/grade/downloads/guide-dev-grade.pdf

<a id="11">11</a>: https://gdt.gradepro.org/app/handbook/handbook.html


---

// File: input/pagecontent/documentation-approach-04-03-6S-evidence-pyramid-and-learning-health-systems.md

# The CPG enables the System Level of the 6S Pyramid and Learning Health Systems <!-- Not sure that it's clear if the use of the term "CPG" is meant to encapsulate any clinical practice guideline or specifically a clinical practice guideline that applies CPG-on-FHIR. This could be helpful to clarify early on and make sure it remains clear throughout the document. !-->

Covered in this section:

* 6S Evidence Pyramid and Enabling Systems Level Evidence
* The Learning Health System
* Evidence, Guidance, and Rapid Ascent to the Peak During an Emergency Response to a Novel Contagion Pandemic

The 6S Evidence Pyramid is another framing on the quality or validity of the evidence that may be of particular interest to the CPG-IG (implementation guide)[<sup>1</sup>](#1). A detailed explanation of the 6S Pyramid is beyond the scope of this document, however we will explain a few key points as they pertain to the guideline development process, in particular the quality of evidence as well as how the CPG actually enables the ascent to the peak.

1. **Single Studies-** represent unique research conducted to answer specific clinical questions
2. **Synopses of Single Studies-** summarizing evidence from high-quality studies
3. **Syntheses-** a comprehensive summary of all the evidence surrounding a specific research question (e.g., systematic review, meta-analysis)
4. **Synopses of Syntheses-** summarizing the information found in syntheses (e.g., evidence summaries, rapid reviews)[<sup>2</sup>](#2)
5. **Summaries-** guidelines or texts that integrate and evaluate evidence-based information about specific clinical problems to inform clinical decisions
6. **Systems-** integrating information from the lower levels of the hierarchy with individual patient records (e.g., CPG content delivered into clinical workflow using real-world evidence with patient data)

<details open>

<summary>

FIG. 22. The 6S Evidence Pyramid with Systems Level (integration of lower levels of evidence into direct patient care) at the peak. NOTE: An updated version of this Evidence Pyramid [ref](http://dx.doi.org/10.1136/ebmed-2016-110447) will be included in the next update of the CPG-IG.

</summary>

<img src="CPG-04-02.png" alt="6S Evidence Pyramid" class="img-responsive img-rounded center-block" height="500" width="500"/>

</details>

The CPG has the potential to address the "systems" level (i.e., peak of the pyramid), which is described as: “Integrating information from the lower levels of the hierarchy with individual patient records, systems represent the ideal source of evidence for clinical decision-making.” ([ref](https://hslmcmaster.libguides.com/ebm)).  The CPG affords the ability to directly insert guideline recommendations into electronic health records (EHRs) and clinical information systems based on reasoning over real-world, patient-specific clinical data to be considered directly in the context of clinical and shared decision-making.


Furthermore, profiles like the CPGeCaseReport, inclusive of all guideline-scoped patient information (CPGCaseFeatures), patient-specific recommendations (CPGProposals) and their respective responses (as CPGCaseFeatures), patient-level quality measures (CPGMetrics), and the corpus of evidence available and used at the time of recommendation (CPGEvidence), allows the informational means to further provide real-world evidence of the usage and effectiveness of such recommendations.   This response and timing from recommendation to when the clinician takes action on the recommendation (e.g., order, prescribe, schedule) and their fulfillments (e.g., administrations, results, performances) as well as the patient-specific context for each key event providing a view into critically valuable information about guideline usage that itself may become evidence for various research studies that yield their own high quality evidence.


Intermediate and ultimate outcomes at the patient-level, including those reported by the patient, could be collected by the CPGeCaseReport.  Lastly, CPGCaseFeatures may include ‘snippets’ of narrative from clinical impressions related to the response and/or other contextualization of a patient-specific guideline recommendation or decision.  This kind of narrative explanation for the clinicians' decision-making process or assessment may provide significant insight into the impact and effectiveness of various characteristics of the recommendation and/or CPG-derived decision-support interventions.


Altogether, the CPG’s have the ability to deliver the lower levels of evidence through the guideline development process and its referenced evidence directly into patient care and related healthcare delivery processes as well as provide individual, aggregated, and potentially continuous feedback loops on both the patient specific recommendations (CPGProposals) and the resulting care delivered and numerous relevant real-world data elements scoped to or by the CPG.  This continuous feedback loop is often referred to as the “Learning Health System”[<sup>3</sup>](#3)

<details open>

<summary>

FIG. 23. The Learning Health System is another perspective on integrating evidence directly into practice and then using practice-level data to further inform evidence[<sup>4</sup>](#4)

</summary>

<img src="CPG-04-03.png" alt="image_tooltip" class="img-responsive img-rounded center-block" height="500" width="500"/>

</details>

### Evidence, Guidance, and Rapid Ascent to the Peak During an Emergency Response to a Novel Contagion Pandemic:

Clearly there are many benefits to enable such a “peak of the pyramid” approach to tightly integrating guideline-directed care and cycling the “Learning Health System” for any condition and at any point in time.  However, perhaps none more so than a situation where there is a public health emergency with significant mortality and where there is poor quality or low level of evidence for how to best address the novel contagion as well as the clinicopathophysiological  (disease processes and manifestations) that it causes.  There are several clear benefits and advantages to such an approach including the use of other techniques, disciplines, and approaches described elsewhere in this implementation guide.  We will address a few of them here and provide references to where else in this document related content can be found.  Many of the approaches, capabilities, best practices, tools, and techniques described in this implementation guide are certainly as, if not even more, relevant to these situations.

#### Rapid Discovery of Best Practice

One of the first priorities in a situation where evidence and best practice is significantly lacking is to establish a means to start discovering evidence for best practices.  In addition to typical public health incident case report information (confirmatory labs and demographics), patient and population-level information about the clinicopathophysiological nature of the human body’s disease or disordered response to the contagion as is critical to have early on. Likewise, information around the likely interventions for this disease or disordered responses to the contagion together with information on response to treatment as well as intermediate- and end-outcomes is critically important to discover the effectiveness, timing, and contextualizing factors (e.g. other patient-level information) for these interventions.  One of the earliest components of a CPG to be identified and mature, and the set of required data elements (CPGCaseFeatures) and key inferences (derived or inferred CPGCaseFeatures) that are inclusive of requests (orders, prescriptions, scheduled procedures, etc.) and various clinical data elements.  A CPG with few or even no recommendations may be developed using the approaches in this implementation guide with the primary purpose of collecting relevant data (see section on eCaseReport).

Evidence of and for best practice may begin to emerge through such data using various means including approaches described briefly and a high level and other sections of this implementation guide (see section on Knowledge Acquisition and in particular: Knowledge Discovery; Hybrid Approaches; and In Collaboration with Knowledge Implementers)

#### Rapid dissemination of Practice Guidance

As evidence begins to emerge through such data through various means including using approaches described briefly and a high level and other sections of this implementation guide (see section on Knowledge Acquisition and in particular: Knowledge Discovery; Hybrid Approaches; and In Collaboration with Knowledge Implementers), best practice guidance (and/or guidelines) can then be rapidly developed, delivered, and implemented using other approaches described in this document (see sections on Agile CPG Development Process and on Knowledge Implementation).

Alternatively, with a lack of high quality evidence and available evidence-based best practice guidance, some of the earliest (though low quality) best practices may be actively discovered firsthand on the front lines and reported as case studies or series studies (though low in evidence quality).  However, such guidance in certain situations may be at least informative to frontline providers, and inform additional relevant data collection on related clinicopathological processes, interventions, and response (including outcomes) thereto as described above (see section on eCaseReport). <!-- WIll need link ## in Conceptual Knowledge Architecture for eCaseReport !-->

#### Rapid-cycle, closed loop Knowledge-to-Delivery-to-Discovery with feedback loops

In either scenario described above- rapid discovery of best practice, or rapid dissemination of practice guidance, the ascent to the peak of the pyramid through a rapid-cycle Learning Health System can be initiated.  Whether it be data-to-evidence, or practice-to-data, the full closed loop knowledge discovery-to-delivery lifecycle need not be dependent on evidence-to-practice as is the usual case in the guideline development process and the supporting Agile CPG development process.  There are numerous feedback, and feedforward, loops described in this implementation guide that can facilitate continuous learning as well as evidence updates. (see Agile CPG Development Process and eCaseReport).  This cycle may be thought of as either: Data-to-Evidence-to-Knowledge-to-Practice; or Guidance-to-Practice-to-Data-to-Evidence-to-Knowledge-to-Practice

<details open>

<summary>

FIG 24. **Knowledge Implementation concurrent with Agile CPG Development** has the potential to eliminate much waste, increase time-to-use/utility, create more feedback loops earlier in the process, improve the overall value of the guideline, and close the loop in forming a Learning Health System.  Such an approach may be even more critical in the case of a pandemic with a novel contagion with an atypical pathophysiological response where best practices and evidence are unknown or yet to be discovered.

</summary>

<img src="CPG-05.05-Agile.png" alt="image_tooltip" class="img-responsive img-rounded center-block" height="500" width="500"/>

</details>

---

<a id="1">1</a>: DiCenso A, Bayley L, Haynes RB. Accessing preappraised evidence: fine-tuning the 5S model into a 6S model. Ann Intern Med. 2009;151:JC3–2. doi: https://doi.org/10.7326/0003-4819-151-6-200909150-02002

<a id="2">2</a>: Khangura, S., Konnyu, K., Cushman, R., Grimshaw, J., & Moher, D. (2012). Evidence summaries: the evolution of a rapid review approach. Systematic reviews, 1, 10. https://doi.org/10.1186/2046-4053-1-10

<a id="3">3</a>: https://www.ahrq.gov/learning-health-systems/about.html <!-- Make Endnote !-->

<a id="4">4</a>: Flynn, Allen & Friedman, Charles & Boisvert, Peter & Landis‐Lewis, Zachary & Lagoze, Carl. (2018). The Knowledge Object Reference Ontology (KORO): A formalism to support management and sharing of computable biomedical knowledge for learning health systems. Learning Health Systems. 2. 10.1002/lrh2.10054.


---

// File: input/pagecontent/documentation-approach-04-04-analysis-of-evidence-recommendations-reporting.md

### Analysis of Evidence

Analysis of evidence includes systematic approaches for evaluating the evidence to inform the guideline and individual recommendations. Expertise, tooling, and methodology largely reside in the knowledge synthesis and evidence-based practice community.  This is largely an approach that follows systematic review and meta-analyses, but in certain situations may also include a rapid review of the evidence.  The outputs from these analyses inform much of the content as well as metadata for the CPG. ([https://www.ahrq.gov/research/findings/evidence-based-reports/centers/index.html](https://www.ahrq.gov/research/findings/evidence-based-reports/centers/index.html)).

#### Information from the Evidence

There is a significant amount of information contained within the various evidence sources.  Different types of evidence may also contain different types of information, yet much of this information is similar, related, and/or overlapping.  There are numerous approaches and tools in the evidence ecosystem (evidence-based practice and knowledge synthesis communities of practice) for abstracting, decomposing, structuring, organizing, and evaluating the information contained within the evidence sources. This information is then used to summarize and synthesize derivative knowledge, often through systematic review and meta-analysis. These methodologies are beyond the scope of this document, but more detailed resources may found from these communities of practice ([https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#Summarizingtable](https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#Summarizingtable)).  PICOTS as described above is one systematic means of extracting information from the evidence that may be particularly useful in the CPG.

#### EBM-on-FHIR for Information from the Evidence

The evidence contains valuable information that is not only used in the guideline development process, but often for and in the guideline and recommendations themselves.  In the CPG, some of this information from the evidence may be formalized as attributes of the CPGRecommendations.  However, there is potentially even greater utility when the information from the corpus of evidence referenced by the guideline and its recommendations is formalized upstream in the evidence ecosystem.  This information may be formalized as explicit knowledge using the EBM-on-FHIR IG and its evidence resources and evidence variable(s).  This may include the various PICOTS variables from the evidence being formalized using standard terminologies (e.g., RxNorm, LOINC, SNOMED-CT) and expression languages (e.g., HL7 CQL) and will be discussed further.

The formalization of this information from the evidence provides significant advantage (reuse or at least a reasonable starting point to work from) in the formalization of the guideline and guideline recommendations in the knowledge engineering lifecycle process for the CPG.  Furthermore, the formalized evidence information provides numerous downstream capabilities in the derivatives and for the consumers of the CPG.  In fact, much of this information enables more capabilities for the 6th or “systems” level of evidence (see 6S Evidence Pyramid above) including point-of-care integration of evidence, “patients like this” point-of-decision queries, various clinical research activities (e.g., outcomes research and data science) including PICOT definitions for populations studies, and continuous feedback loops mentioned in 6S Evidence Pyramid section.

### Recommendations

Recommendations are proposals pertaining to the best course of action put forth by an authoritative source or body related to a condition, procedure, clinical decision, or activity.  They are often expressed as summary tables with a column for succinct, clear, and specific narrative descriptions of the recommendation as well as additional columns for the directionality of the recommendation (to do or not do an activity), strength, and quality of evidence for each recommendation.  They may further include additional visual aids such as decision trees and/or flow diagrams.  Often, they also call out portions of a recommendation and/or how the recommendations hang together that lack evidence and may have relied on expert consensus.  Closely correlated to the recommendations are supplemental information on how the recommendation was determined and the evidence for each recommendation. This often includes evidence summaries, evidence-to-recommendation tables, and narrative discussion for how the guideline development group arrived at their decisions/recommendations.  ([https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#Developingtable](https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#Developingtable); [https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#Wordingtable](https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#Wordingtable))

Additionally, if the guideline development group includes measure development expertise, it may provide guidance on whether each recommendation could be a good candidate for performance/quality measurement. "If informatics expertise is included for co-developing computable CPGs, the guideline development group may decide to incorporate more active, computable intervention(s) within a recommendation.

Furthermore, the guideline development group may identify pertinent clinical or situational concepts (e.g., data elements, terminologies) pertaining to each recommendation or the guideline overall.  These may serve as metadata, inform data requirements and inferences in the CPG, and/or lay the foundation for the CPG eCaseReport.  Lastly, the guideline development group may identify gaps in evidence within the guideline development process. These gaps in evidence may further inform data requirements to be collected as part of a CPG eCaseReport.


### Reporting and Dissemination

Reporting is often done through an official, formal guideline report intended for a target audience. Often, some form of the guideline as well as the process and content (e.g., systematic review) through which it was developed is reported in a peer-reviewed journal.  Related, the dissemination of the guideline report and various supplemental artifacts (e.g., FAQs, decision aids, patient education material, measure definitions) focus on the intended audience and are conveyed through appropriate means, including online publication, professional society conferences, social media, through delegates to various provider organizations and/or patient advocacy groups, through teaching and training programs (e.g., continuing medical education), and/or professional society and regulatory body certification or accreditation programs

([https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#Reportingtable](https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#Reportingtable); [https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#Disseminationtable](https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#Disseminationtable)).

Dissemination to measure development organizations, CDS vendors, EHR vendors, registry vendors, and/orSMART-on-FHIR application developers "could be included for computable CPGs.


---

// File: input/pagecontent/documentation-approach-04-05-computable-guideline-artifacts.md

### Evidence

Evidence and information from the evidence used and referenced in the guideline recommendations may be formalized as FHIR Evidence Resources with their respective Evidence Variables using the EBM-on-FHIR IG.  Similarly, the published guideline narrative may be formalized through the same approach using this CPG-on-FHIR IG as discussed in the [Analysis of Evidence](documentation-approach-04-04-analysis-of-evidence-recommendations-reporting.html) <!-- link to - 04.04 !--> section.

### Co-Development of Guidelines and Computable Clinical Guideline Artifacts

The integrated process describes co-development of the narrative and computable guidelines that brings together a number of desirable elements that include:
*	An approach that includes guideline and artifact development, implementation, consideration for updating and discontinuation, and evaluation
*	Promotes active collaboration (integration) of key subject matter experts thought the process.  These include:
    *	Guideline developers
    * Informaticians
    * Implementers
    * Communicators
    * Evaluators
* Provides for active iteration of key steps of the guideline development and implementation processes to assure that intermediate and final products are optimized and fit for purpose.
* Includes robust process, product, and outcomes/impact evaluation frameworks to assure guideline development and implementation is efficient, cost-effective, and impactful (this element in development)

#### The Integrated Process Cycle

Figure 04.05-01 represents how guideline developers, informaticians, implementers, and evaluators can integrate their workflows to co-develop, implement, and evaluate narrative and computable guidelines in iterative phases and steps.  The diagram is divided into quadrants that correspond with “layers of knowledge” proposed by Boxwala et al for computer-based decision support.[<sup>2</sup>](#2) See explanation below diagram for additional details.

<details open>

<summary>
FIG 04.05-01: The Integrated Process Cycle for Guideline Development and Implementation with Interdisciplinary Milestones.[<sup>1</sup>](#1)
</summary>

<img src="CPG-04.05-01.png" alt="Integrated Process Cycle" class="img-responsive img-rounded center-block" height="600"/>

</details>

The outer circle shows 12 phases of formal guidelines development that result in published narrative recommendations. The middle circle represents the integration of informatics and clinical implementation activities into the guideline development 12 phase process. This circle adds iterative steps within and between the phases and that 1) inform written guidelines, and 2) result in a computable version of  guidelines that can be more rapidly implemented in clinical settings. The inner circle represents the evaluation activities that should be conducted throughout guideline development, with constant attention to meeting the needs of users. This integration is designed to facilitate use of guidelines in clinical practice and timely updates to guidelines based on clinical impact. Finally, at the center of the process are the guideline users, who should be engaged through human-centered design processes in all phases (shown by spiral connections).

<a id="2">2</a>: Boxwala, Aziz A., et al. "A multi-layered framework for disseminating knowledge for computer-based decision support." Journal of the American Medical Informatics Association 18.Supplement_1 (2011): i132-i139.

### CPG Content and Related Derivatives

1. **Recommendations:** In the CPG context, recommendations are represented and expressed through a profile on the FHIR Plan Definition (CPGRecommendation) largely derived from the ECA Rule profile.  The recommended intervention corresponds to the “action” portion of an ECA rule and is largely expressed as a Request through an Activity Definition.  The applicability criteria and/or decision logic for a recommendation largely corresponds to the “condition” portion of an ECA rule and is largely expressed using a combination of scoped CQL (population criteria, decision logic, inferred data elements) and FHIR Plan Definition (e.g., as a Decision Table). “Events” of the ECA rule, correspond to either the state of or changes to the patient’s clinical condition (data change event) as described in the recommendation (e.g., new diagnosis of, risk score exceeds limit, blood pressure drops below threshold), or an (abstract) patient or clinician workflow activity, the passage of time with respect to some anchoring event, or some combination thereof.  See [CPGPlan](documentation-approach-12-03-cpg-plan.html) <!-- link to - 12.03 !--> in Conceptual CPG Knowledge Architecture section for more details on CPGRecommendations.
2. **Guideline & Strategies:**  The broader guideline includes strategies for relating, sequencing, or orchestrating individual (or groups of) recommendations and is represented and expressed through separate profiles on the  FHIR Plan Definition (CPGPathway and CPGStrategy).  A CPGStrategy is used to correlate, orchestrate, and/or provide decision logic between a set of related recommendations often scoped to a particular clinical issue (e.g., diuresis in inpatient heart failure management). A CPGPathway serves a similar function across Strategies and scopes the entire guideline.  See [CPGPlan](documentation-approach-12-03-cpg-plan.html) <!-- link to - 12.03 !--> in Conceptual CPG Knowledge Architecture section for more details on CPGStrategies, CPGPathways, and CPGGuidelines.
3. **Metrics and Measures:**  A CPGMetric is a patient level measurement or indicator of recommendation compliance and/or guideline adherence (corresponding to a process measure), reaching a stated goal or objective (corresponding to an end or intermediate outcome), or current status of a clinical activity.  A CPGMeasure is a population level measurement typically corresponding to an aggregate of patient level CPGMetrics and/or other parts of the CPG.  For a CPGMeasure, the initial patient population often corresponds to the CPG eligibility criteria, while the denominator is often constrained by individual recommendation applicability criteria (including exclusion or contraindication criteria), and the numerator may correspond to satisfaction criteria (order placed or activity performed)  for guideline recommendation or proposal compliance in the case of process measures, or goal or threshold attainment in the case of outcome measures.  CPGMeasure Initial Patient Populations definitions and CPGPathwayElligibilityCriteria will likely have significant overlap in many cases.  CPGRecommendation logic (applicability criteria) similarly will overlap with denominator, denominator exclusion, risk stratifications, and numerator criteria.  See [CPG Derivative & Related Assets](documentation-approach-12-07-cpg-derivative-and-related-assets.html) <!-- link to - 12.07 !--> in Conceptual CPG Knowledge Architecture section for more details on CPGMetrics and CPGMeasures.
4. **eCaseReport:**  A CPGeCaseReport is intended to convey the set of data elements required to provide for more detailed outcomes research on the guideline topic itself as well as for a feedback loop for continuous improvement of the specified  guideline.  The data elements for a CPGeCaseReport come from the data requirements (CPGCaseFeatures), key inferences thereof (inferred CPGCaseFeatures), patient specific recommendations (CPGProposals), and the corresponding orders and resulting clinical activities (requests and resultant events from CPGCaseFeatures).  Additional or supplemental data elements (data requirements and inferences) for informing identified guideline gaps or feedback loops may be further specified for inclusion in the CPGeCaseReport. See [CPG Derivative & Related Assets](documentation-approach-12-07-cpg-derivative-and-related-assets.html) <!-- link to - 12.07 !--> in Conceptual CPG Knowledge Architecture section for more details on CPGeCaseReports.

### Value of Computable Guideline Artifacts to Stakeholders

**For Guideline Development Group, especially Medical Specialty Societies**- Actionable and meaningful usage of and feedback on guideline recommendations; (automated) data collection of data elements relevant to the scope of the guideline (registries); significant number of process of care level and intermediate- and end-outcome metrics and quality measures scoped to the guideline; active and highly relevant participation in the Learning Health System.


**For Providers and Health Care Organizations**- Nearly automated data collection for clinical registries (internal, professional societies, and accreditation); a significant number of process of care level and intermediate- and end-outcome metrics and quality measures; readily available means to implement, monitor, and measure guideline-directed care; benefits derived from participation in the Learning Health System.


**For the Evidence Ecosystem**- Utility of evidence and new high-value, patient and process of care level evidence to “climb the pyramid”.


**For modern and emerging methods of Knowledge Discovery**- numerous opportunities to leverage value of methods and data assets (data-to-knowledge); new high-value evidence substrate to reason over (enriched data, guideline usage, knowledge artifacts created across the value-chain).  (see section on [Knowledge Acquisition](documentation-approach-05-01-knowledge-acquisition.html)) <!-- link to - 05. !-->


---

// File: input/pagecontent/documentation-approach-04-guideline-development.md

Guideline development consists of a community of practice made up of numerous professionals with expertise and skills in various clinical/scientific fields.  This implementation guide does not describe the guideline development process in complete detail. However, it gives an overview to provide sufficient context for the rest of the implementation guide since the scope for the CPG is to provide a computer-interpretable representation of the final work product of the guideline development process.

Covered in this section:



*   Overview of the Guideline Development process
*   [Description of the Guideline Development Group (GDG) and Scoping](documentation-approach-04-01-guideline-development-group.html)
*   [Guideline Development Frameworks](documentation-approach-04-02-guideline-development-frameworks.html)
*   [6S Evidence Pyramid and Learning Health System(s)](documentation-approach-04-03-6S-evidence-pyramid-and-learning-health-systems.html)
    *   Evidence, Guidance, and Rapid Ascent to the Peak During an Emergency Response to a Novel Contagion Pandemic
*   [Analysis of Evidence](documentation-approach-04-04-analysis-of-evidence-recommendations-reporting.html)
    *   Recommendations
    *   Reporting and Dissemination
*   [Development of Computable Clinical Guideline Artifacts](documentation-approach-04-05-computable-guideline-artifacts.html)

Clinical practice guidelines are systematically developed statements to assist clinical practitioner and patient decisions about appropriate care for specific clinical conditions, procedures, and/or similarly scoped activities. Guidelines consist of recommendations for patient care, which are based on scientific research and data (evidence), vetted through rigorous processes of a review and synthesis by recognized domain and methodological experts and other key stakeholders (e.g. patient and caregiver advocates) to guide healthcare decisions and activities for defined scope. A guideline may consist of one or more recommendations, contextualizing information, the possible means or strategies for bringing together or orchestrating recommendations, and other relevant considerations. A recommendation is a proposal pertaining to the best course of action put forth by an authoritative source or body (e.g. governmental or professional society convened guideline development group).  More detailed descriptions of and best practices for the guideline development process may be found at numerous publicly available resources (e.g.,  [https://www.ncbi.nlm.nih.gov/books/NBK209539/pdf/Bookshelf_NBK209539.pdf](https://www.ncbi.nlm.nih.gov/books/NBK209539/pdf/Bookshelf_NBK209539.pdf); [https://cebgrade.mcmaster.ca/guidelinechecklistonline.html](https://cebgrade.mcmaster.ca/guidelinechecklistonline.html); [https://doi.org/10.7326/0003-4819-153-3-201008030-00010](https://doi.org/10.7326/0003-4819-153-3-201008030-00010); [https://www.nccih.nih.gov/health/providers/clinicalpractice](https://www.nccih.nih.gov/health/providers/clinicalpractice)) <!-- convert refs to links !--> and are beyond the scope of this document, though a few key concepts will be covered.

<details open>

<summary>

FIG 18. Overview of the phases of the guideline development process that generally occur sequentially, but may be overlapping and concurrent particularly for different recommendations within a guideline.

</summary>

<img src="CPG-04-00.png" alt="image_tooltip" class="img-responsive img-rounded center-block" width="500" height="500"/>

</details>

### Guideline Development Group <!-- GET RID OF SECTION 4.01- ALL is in HERE NOW (???)  [Description of the Guideline Development Group (GDG) and Scoping](documentation-approach-04-01-guideline-development-group.html) !-->

The guideline development group is the multi-stakeholder, cross-functional team assembled to develop the guideline. It often includes members from the target audience (specialist and primary care clinicians), content experts, patients and caregivers, front-line clinicians, evidence-based practice experts, outcomes and quality experts, usability experts, experts in medical and shared decision-making, methodology experts, and experts in health economics. ([https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#GuidelineGroupMembershiptable](https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#GuidelineGroupMembershiptable)).

For the digital CPG, we will need to add a few more experts to the guideline development group or have a few key resources serve cross-functional roles with a Knowledge engineering team (see section on “Knowledge Engineering”).  These may include experts in creating computable representations of the guideline such as: knowledge extraction and/or elicitation, terminologists and/or ontologists, clinical research informatics ([ref](https://www.amia.org/applications-informatics/clinical-research-informatics)), clinical informatics, clinical decision support, cognitive informatics, knowledge formalism and expression, measurement science and measure development, user experience (UX), and user-centered design.  These experts often start with a “paper” or narrative guideline but will likely produce much higher fidelity, accurate, and usable expressions of the guideline through a more “agile” approach to concurrent, integrated, and cross-functional approach to guideline development and knowledge engineering.

### Scoping

Scoping refers to the process and establishment of criteria to describe and constrain the focus of the guideline. It addresses who is the target user of the guideline, who it applies to, and what is addressed in the guideline. This is typically based on various factors, including high prevalence and burden of disease, avoidable mortality and morbidity, high cost, emerging diseases or emerging care options, variation in clinical practice, and rapidly changing evidence. The PICOTS Typology (i.e., population, intervention, comparison, outcome, timeframe) is often used in scoping and correlates closely to the eligibility criteria for the CPG  ([https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#Prioritytable](https://cebgrade.mcmaster.ca/guidelinechecklistonline.html#Prioritytable)).

### Guideline Development Frameworks  <!-- link to 04.02 [Guideline Development Frameworks](documentation-approach-04-02-guideline-development-frameworks.html) !-->

The following Frameworks are used in Guideline development and across the evidence ecosystem:

### Knowledge Synthesis and the Evidence Pyramid

Knowledge synthesis is the process in professional community of practice that applies and develops methodologies for systematically evaluating a corpus of evidence related to a particular condition or intervention.

<details open>

<summary>

FIG. 18.  The Evidence Pyramid refers to a means to evaluate the quality or validity of evidence (higher toward the top) as well as provide a visual depiction of the amount of evidence (width) ([ref](http://dx.doi.org/10.1136/ebmed-2016-110401)).  The evaluation of the evidence not only informs the guideline development process and resulting recommendations but is further communicated together with the recommendations themselves using the GRADE framework, described below. NOTE: An updated version of this Evidence Pyramid (ref) will be included in the next update of the CPG-IG.

</summary>

<img src="CPG-04-01.png" alt="image_tooltip" class="img-responsive img-rounded center-block" width="500" height="400"/>

</details>

**PICOTS Typology** Patient population, Intervention, Comparator, Outcomes, Timing, Setting. For more on using PICOTS within HL7 Standards, see the EBM-on-FHIR IG (EBM: Evidence-Based Medicine).

**GRADE** (**G**rades of **R**ecommendation **A**ssessment, **D**evelopment and **E**valuation) - GRADE describes a process and a structured framework for conveying information to develop a common, transparent, and sensible system for grading the **quality** of evidence and the **strength** of recommendations.

#### The CPG enables the System Level of the 6S Pyramid and Learning Health Systems

The 6S Evidence Pyramid is another framing on the quality or validity of the evidence that may be of particular interest to the CPG-IG (implementation guide)  ([ref](https://doi.org/10.7326/0003-4819-151-6-200909150-02002)).  The highest level is Systems where information from the lower levels of the hierarchy are integrated with individual patient records (e.g., CPG content delivered into clinical workflow using real-world evidence with patient data)

<details open>

<summary>

FIG. 19. The 6S Evidence Pyramid with Systems Level (integration of lower levels of evidence into direct patient care) at the peak. NOTE: An updated version of this Evidence Pyramid ([ref](http://dx.doi.org/10.1136/ebmed-2016-110447)) will be included in the next update of the CPG-IG.

</summary>

<img src="CPG-04-02.png" alt="6S Evidence Pyramid" class="img-responsive img-rounded center-block" width="500" hight="500"/>

</details>


<details open>

<summary>

FIG. 20. The Learning Health System is another perspective on integrating evidence directly into practice and then using practice-level data to further inform evidence (ref)

</summary>

<img src="CPG-04-03.png" alt="image_tooltip" class="img-responsive img-rounded center-block" width="500" hight="500"/>

</details>

#### Evidence, Guidance, and Rapid Ascent to the Peak During an Emergency Response to a Novel Contagion Pandemic

Clearly there are many benefits to enable such a “peak of the pyramid” approach to tightly integrating guideline-directed care and cycling the “Learning Health System” for any condition and at any point in time.  Many of the approaches, capabilities, best practices, tools, and techniques described in this implementation guide are certainly as, if not even more, relevant to these situations.

* **Rapid Discovery of Best Practice**
* **Rapid dissemination of Practice Guidance**
* **Rapid-cyle, closed loop Knowledge-to-Delivery-to-Discovery with feedback loops**

### Analysis of Evidence

Analysis of evidence includes systematic approaches for evaluating the evidence to inform the guideline and individual recommendations.

#### Information from the Evidence

There is a significant amount of information contained within the various evidence sources.  PICOTS as described above is one systematic means of extracting information from the evidence that may be particularly useful in the CPG.

#### EBM-on-FHIR for Information from the Evidence

The evidence contains valuable information that is not only used in the guideline development process, but often for and in the guideline and recommendations themselves.

The formalization of this information from the evidence provides significant advantage (reuse or at least a reasonable starting point to work from) in the formalization of the guideline and guideline recommendations in the knowledge engineering lifecycle process for the CPG.

#### Recommendations

Recommendations are proposals pertaining to the best course of action put forth by an authoritative source or body related to a condition, procedure, clinical decision, or activity. Often, they also call out portions of a recommendation and/or how the recommendations hang together that lack evidence and may have relied on expert consensus.

Additionally, if the guideline development group includes measure development expertise, it may provide guidance on whether each recommendation could be a good candidate for performance/quality measurement.

#### Reporting and Dissemination

Reporting is often done through an official, formal guideline report intended for a target audience. Dissemination to measure development organizations, CLinical Decision Support (CDS) vendors, EHR vendors, registry vendors, and/or SMART-on-FHIR application developers could be included for computable CPGs.

### Development of Computable Clinical Guideline Artifacts

#### Evidence

Evidence and information from the evidence used and referenced in the guideline recommendations may be formalized as FHIR Evidence Resources with their respective Evidence Variables using the EBM-on-FHIR IG.  Similarly, the published guideline narrative may be formalized through the same approach using this CPG-on-FHIR IG..

#### CPG Content and Related Derivatives

**Recommendations:** In the CPG context, recommendations are represented and expressed through a profile on the FHIR Plan Definition (CPGRecommendation) largely derived from the ECA Rule profile.

**Guideline & Strategies:**  The broader guideline includes strategies for relating, sequencing, or orchestrating individual (or groups of) recommendations and is represented and expressed through separate profiles on the  FHIR Plan Definition (CPGPathway and CPGStrategy).

**Metrics and Measures:**  A CPGMetric is a patient level measurement or indicator of recommendation compliance and/or guideline adherence (corresponding to a process measure), reaching a stated goal or objective (corresponding to an end or intermediate outcome), or current status of a clinical activity.  A CPGMeasure is a population level measurement typically corresponding to an aggregate of patient level CPGMetrics and/or other parts of the CPG.

**eCaseReport:**  A CPGeCaseReport is intended to convey the set of data elements required to provide for more detailed outcomes research on the guideline topic itself as well as for a feedback loop for continuous improvement of the specified guideline.  The data elements for a CPGeCaseReport come from the data requirements (CPGCaseFeatures), key inferences thereof (inferred CPGCaseFeatures), patient specific recommendations (CPGProposals), and the corresponding orders and resulting clinical activities (requests and resultant events from CPGCaseFeatures).


#### Value to Stakeholders

*   For guideline development groups, especially Medical Specialty Societies-
*   For Providers and health care organizations
*   For the Evidence Ecosystem
*   For modern and emerging methods of Knowledge Discovery


---

// File: input/pagecontent/documentation-approach-05-01-knowledge-acquisition.md

Knowledge acquisition is the process of extracting, understanding, structuring and organizing knowledge from one source, often solely or largely from human/ expert understandable formats, so it can be translated into computer-interpretable (or computer-enabled) formalisms.  Knowledge acquisition typically includes one or more of the following sub-activities: knowledge elicitation, knowledge authoring, knowledge synthesis, knowledge discovery (data mining-machine learning DM-ML and other forms of AI), and/or hybrid approaches that may include methods, tools, and information gained from a combination of the prior approaches.

### Knowledge Elicitation

Knowledge elicitation is the process of extracting an expert’s tacit knowledge (i.e., expertise and experience) or expert-sourced artifacts (e.g., narrative guidelines) to obtain a more formalizable representation of this knowledge. Techniques may include: expert interviews, ethnographic methodologies (e.g., artifact analysis, shadowing, retrospective cued recall interviews, critical decision method, contextual inquiry, case presentations or reviews, Delphi method [a forecasting process framework based on the results of multiple rounds of questionnaires sent to a panel of experts], concept mapping [a visual diagram that depicts concepts, their attributes, and suggested relationships between them from a domain perspective]).  Numerous approaches are emerging to extract information from guideline narratives including tools for human extraction, the use of natural language processing

### Knowledge Authoring

Knowledge authoring is the process by which a domain expert directly expresses their tacit knowledge into more formalized representations of this knowledge.  This is often done using tools such as editors that facilitate the knowledge translation process through business logic affordances and constraints) in the tooling that provide mappings from domain concepts (e.g.,  expert mental models) to knowledge representations derived from knowledge asset meta-models defined by knowledge architects as well as pre-existing content from an established knowledge bases (e.g., ontologies and terminologies).  The use of description logic and editors (e.g. [Protege](https://protege.stanford.edu/)) to create a domain ontology for a CPG is one such example.  Another may be the modification of the [CDS Connect Authoring tool](https://cds.ahrq.gov/cdsconnect/authoring) for ECA Rules that fit the CPG profiles (e.g. CPGRecommendations, CPGStrategies, and CPGPathways).  Authoring tools enable a subject matter knowledge engineer to perform much of the knowledge translation activities, though some understanding of the target expression language is nearly requisite.

### Knowledge Synthesis

Knowledge synthesis is a process and set of techniques that  evaluates and summarizes all available evidence on a particular topic through comprehensive literature searches and advanced qualitative and quantitative synthesis methods.  This is analogous, if not identical to the knowledge synthesis and evidence-based practice community's Evidence Analysis [Analysis of Evidence](documentation-approach-04-04-analysis-of-evidence-recommendations-reporting.html) <!-- Link to 04.04 !--> approach utilized by the guideline development group as described above.  This is an opportunity for many touch points between the guideline development group in the knowledge engineering team in the “Integrated Process”.

### Knowledge Discovery

Knowledge discovery is a process of discovering or learning patterns that lead to actionable knowledge from large data sets.  This may be inclusive of various traditional data mining or data exploration approaches and tooling, numerous ML approaches, other AI approaches, and/or combinations thereof.  It may also be inclusive of various health outcomes research and data science activities and may built upon large curated data sets (e.g., clinical, clinical research, and quality improvement registries; -omics data sets) as well as real-world evidence and metadata or insights from across the evidence ecosystem (e.g., knowledge synthesis outputs, clinical trial metadata).  These methods of knowledge acquisition provide affordances and much promise for inputs from various CPG activities (e.g., content formalization and data enrichment expression such as inferred CPG_CaseFeatures) and feedback loops (e.g., eCaseReports).  Of note to the knowledge engineer, it is critical to fit the knowledge discovery method to the use case and often requires collaboration between the knowledge engineer and a methodological expert.

Using the CPG approach and the, and its knowledge architecture components, such as Case Features and eCaseReport, may afford new opportunities to leverage Knowledge Discovery across the full guideline lifecycle.  This may include improved logic for determining Case Features, probabilistic models for Case Features to be used in decision logic, and even discovering new Case Features (e.g. risk and severity scores, more and more precise descriptions of disease and/or clinicopathological states, new or improved data inputs for Case Features).  The use of NLP in clinical settings is another emerging approach for Case Feature extraction where critical patient-level information is only, or nearly only available in clinical narratives.  NLP mentions, concepts, or other features (or any other knowledge discovery method for that matter), may be further included as data inputs for expression logic for Case Features.  This is currently being done for quality measures ([ref](https://blog.ncqa.org/nlp/)), has an expression language related to CQL ([ClarityNLP](https://claritynlp.readthedocs.io/en/latest/user_guide/intro/overview.html)) for clinical phenotyping, and is on the near-term roadmap as a built-in feature for CQL.

These Case Features could serve a role in the guideline and CPG development process as well as potentially serve as a feedforward mechanism for implementations (e.g. as supporting information for decisions for Proposals as part of a CPGCasePlanSummaryView, or for “patients-like-me” near real-time queries to compare cohorts and their outcomes against recommended and alternative interventions).  And such machine-assisted Knowledge Discovery approaches could certainly play a role in the 6S Evidence Pyramid and Learning Health Systems. [6S Evidence Pyramid and Learning Health System(s)](documentation-approach-04-03-6S-evidence-pyramid-and-learning-health-systems.html) <!-- Link to 04.03 !-->

Knowledge acquisition for Recommendations (including their respective decision logic and/or the use of newly discovered Case Feature or Case Feature attributes) acquired through Knowledge Discovery approaches will almost certainly need to go through some vetting by the evidence ecosystem and guideline development group to be used in expert body guideline recommendations.  The discovery or hybrid approaches (discussed below) may greatly accelerate this process and rapid reviews and updates may fast-track such recommendations in critical situations such as new and poorly understood clinicopathophysiology (new or emergent diseases such as pandemics due to novel contagions) with poorly or unknown diagnostic, treatment, and preventative best practices.  This is not yet well understood and beyond the scope of this implementation guide.

### Hybrid Approaches

There is extraordinary value, critical efficiencies, and unique perspectives that can be gleaned from each of these knowledge acquisition approaches.  In addition to knowledge gained from combining insights from each of these communities of practice, there are valuable knowledge and gains in efficiency in combining techniques and tooling as well as more discrete fragments of knowledge gained within sub-activities across these communities (called transdisciplinary and/or hybrid approaches).  Using inferred Case Features (including process and outcome metrics from eCaseReports) as the data substrate for machine-assisted approaches is one such example.  Using NLP features or concepts in expression logic for Case Features is another. In fact, many of the approaches described in the Knowledge Discovery section above are actually Hybrid approaches.

### In Collaboration with the Guideline Development Group

A key tenant of the CPG development process is for the knowledge engineering team to leverage early, often engagement and even integration with guideline development groups. This allows the knowledge engineering team to start acquiring knowledge and translating it further upstream in the CPG development process.  It further enables feedback and more rapid iteration between the knowledge engineering team and the domain experts in the guideline development group.

A key tenant of the Agile CPG approach described subsequently, is to further integrate the knowledge engineering team and guideline development group into a nearly singular cross-functional team.  Benefits include fewer handoffs and queues, concurrency of work efforts, shorter and more valuable feedback loops, and higher-quality inputs to knowledge acquisition (people and processes versus a paper narrative to be interpreted subsequently to and asynchronously with the guideline development group’s and artifacts).  Lastly, but none of least importance is the ability for the guideline development group in the knowledge engineering team to learn together.  Additional benefits and work processes are described subsequently.

<details open>

<summary>

FIG. 33. Knowledge Engineering in collaboration with the guideline development group (as described in the CDC’s “Integrated Process”) can proceed much earlier and be incremental and iterative, while leveraging direct interactions with the guideline development group to ensure that the translation into more formal, computeable expressions accurately convey the intent of the source knowledge.

</summary>

<img src="CPG-05-01.png" alt="Knowledge Engineering" class="img-responsive img-rounded center-block" width="500"/>

</details>

### In Collaboration with Knowledge Implementers

Knowledge acquisition approaches may further leverage the benefits of working directly with knowledge implementers, not limited to potential representative data sets (e.g de-identified data) to perform early knowledge specification and validation activities (e.g. data elements and terminologies) or even employ knowledge discovery approaches as described above.  Even CPGCaseFeature definitions (including inferred) or explicit recommendation semantics may be informed by various local implementation artifacts (e.g. CDS content, local clinical registry data elements and logic, workflow analysis artifacts).  For further descriptions, see section on Concurrent Development and Implementation in [Knowledge Implementation](documentation-approach-05-05-knowledge-implementation.html). <!-- Link to 05.05 !-->

Collaboration with knowledge implementers further affords the potential for access to Real-World Data, including for knowledge acquisition.  GIven a cohort of implementers with sufficient sample size and natural variation of Cases, the above Knowledge Discovery and Hybrid approaches to knowledge acquisition become not only more possible, but afford numerous benefits across the entire guideline lifecycle.  Further information on approaches and benefits to Concurrent CPG Development and Implementation [Knowledge Implementation](documentation-approach-05-05-knowledge-implementation.html), <!-- Link to 05.05 !-->  doing so in the context of the Agile CPG Development Approach, <!-- Link to 05.05 !--> and its relationship to enabling the [6S Evidence Pyramid and Learning Health System(s)](documentation-approach-04-03-6S-evidence-pyramid-and-learning-health-systems.html) <!-- Link[6S Evidence Pyramid and Learning Health System(s)](documentation-approach-04-03-6S-evidence-pyramid-and-learning-health-systems.html) 4.03 !--> can be found in these respective sections.

<details open>

<summary>

FIG. 34. Knowledge Engineering in collaboration Local Informatics and EHR build teams (concurrent development and implementation) enables more data-driven knowledge engineering processes and helps to ensure that the computable expressions accurately and reliably convey the intent of the knowledge source to the target systems.

</summary>

<img src="CPG-05-02.png" alt="image_tooltip" class="img-responsive img-rounded center-block" width="500"/>

</details>


---

// File: input/pagecontent/documentation-approach-05-02-knowledge-translation.md

Knowledge translation has specific meaning within the knowledge engineering lifecycle process for knowledge engineers.  However, there are at least three perspectives on knowledge translation that must be considered in the context of co-developing a clinical guideline together with its formal representation as a CPG.  These include:

1. The “activities involved in moving research from the laboratory, the research journal, and the academic conference into the hands of people and organizations who can put it to practical use” ([ref](https://ncats.nih.gov/translation/spectrum))
2. The translation between and across various levels of knowledge representation,  from narrative to semi-structured to structured to executable (described in detail below and in the section on [Levels of Knowledge Representation](documentation-approach-06-01-levels-of-knowledge-representation.html)). <!-- link to - 06.01 !-->
3. The translation between equivalent or iso-pragmatic knowledge formalisms (i.e., representations, expressions) such as is done with concept maps between terminologies or as will be discussed further in the “Methodology” section (see BPM+ -to- CPG)

<details open>

<summary>

FIG. 35. Knowledge Translation is the dynamic and iterative process of conveying the concepts, clinical logic, and intent of a source knowledge expression (e.g., narrative guideline) into an equivalent expression in another language or formalism- in the case of a narrative guideline into a computable or computer interpretable expression.  This may occur successively or progressively across the Levels of Representation (L1, L2, L3) or may be directly to an L3/L4 expression, typically using an authoring tool or domain-oriented language.

</summary>

<img src="CPG-05-03.png" alt="image_tooltip" class="img-responsive img-rounded center-block"/>
</details>

The broader perspective on clinical knowledge translation across the entire knowledge ecosystem provides perspective on various sources of knowledge and the nature of their content and metadata.  In the classic approach to formalizing (components of) clinical practice guidelines, knowledge translation means the rendering of concepts, clinical logic, and intent of a narrative guideline into a computable formalism en masse after the narrative has been written, peer reviewed, and with the guideline development group often disbanded or moved on to another scope.  In this case, the translation between and across levels of knowledge representation is a well-established activity for the knowledge engineer as is translation between levels and formalisms. Knowledge engineers often use tooling and techniques to address these activities, and some even take into consideration their respective touch points across the broader knowledge ecosystem.

See the section on [Levels of Knowledge Representation](documentation-approach-06-01-levels-of-knowledge-representation.html) <!-- link to - 06.01 !--> for the approach and examples related to guidelines.  The details of translating between and across these levels is beyond the scope of this implementation guide.

<details open>

<summary>

FIG 36.  Knowledge Engineering in collaboration with the guideline development group (as described in the CDC’s “Integrated Process”) can proceed much earlier and be incremental and iterative, while leveraging direct interactions with the guideline development group to ensure that the translation into more formal, computeable expressions accurately convey the intent of the source knowledge.

</summary>

<img src="CPG-05-01.png" alt="Knowledge Engineering" class="img-responsive img-rounded center-block"/>

</details>



There are ongoing efforts, tool development activities, and knowledge resources across the knowledge ecosystem that may provide additional benefits in efficiency, timeliness, and effort that may be taken into consideration when developing a CPG.  For instance, as described in the Guideline Development section on Analysis of Evidence, Recommendations, & Reporting [Analysis of Evidence](documentation-approach-04-04-analysis-of-evidence-recommendations-reporting.html), <!-- link to - 04.04 !--> the EBM-on-FHIR Evidence and Evidence Variables can carry descriptions and explicit value sets and standard terminologies for interventions and study population cohorts (and even reference CQL expressions for study population cohorts).  Metadata on clinical research studies might afford the same.  These may not be exact matches to the guideline scope (eligibility criteria) or recommendation interventions (FHIR activities and requests) and applicability criteria (Conditions in respective ECA Rules), but they may provide a reasonable start- and far earlier and upstream in an “Integrated Approach”.  This early start on incremental pieces of the guideline is what is called “chunking” in Agile software processes described further in the section on The [Agile CPG Development Approach](documentation-approach-05-06-agile-cpg-development-approach.html). <!-- link to - 05.06 !-->

Furthermore, if started concurrently with or slightly lagging the guideline development group as suggested by the “Integrated Approach” from the CDC Adapting Clinical Guidelines for the Digital Age initiative, there are opportunities to begin the process of knowledge translation upfront in the guideline development process.  Identifying terminologies and data definitions (e.g., FHIR resources) as well as modeling and testing cohort definitions and applicability criteria, perhaps against Real-World Data (particularly given a concurrent development and implementation effort) can begin early in the CPD development process and even provide feedback to the guideline development team.

<details open>

<summary>

FIG 37.  Knowledge Engineering in collaboration with Local Informatics and EHR build teams (concurrent development and implementation) enables more data-driven knowledge engineering processes and helps to ensure that the computable expressions accurately and reliably convey the intent of the knowledge source to the target systems.

</summary>

<img src="CPG-05-02.png" alt="KE and Local Informatics" class="img-responsive img-rounded center-block"/>

</details>


The approaches above including “chunking” of incremental parts of the guideline, and use of real-world data for design, specification, development, and validation (including one-time validation vs multi-phased, sequential validation), combined with the “Integrated Approach” and concurrent guideline development and implementation (discussed in the section on [Knowledge Implementation](documentation-approach-05-05-knowledge-implementation.html)) <!-- link to - 05.05 !--> are all part of the [Agile CPG Development Approach](documentation-approach-05-06-agile-cpg-development-approach.html). <!-- link to - 05.06 !-->

<details open>

<summary>

FIG 38. An Agile Approach to Knowledge Translation conveys the the concepts, clinical logic, and intent of a source knowledge expression (e.g., early guideline development artifacts) into an equivalent computable or computer interpretable expression.  The Agile approach to knowledge engineering and translation includes early, upfront engagement (with the guideline development group), iteration with incremental parts called “chunking” (data element and terminology definitions), rapid progression through the levels of representation for parts as well as aggregates (often using tooling), and where possible use of Real-World Data for design, specification, development, and one-time validation (vs logic, then data, then logic and data) as is described below.

</summary>

<img src="CPG-KnowledgeEngineering-w-Agile.png" alt="Agile KE" class="img-responsive img-rounded center-block"/>

</details>


---

// File: input/pagecontent/documentation-approach-05-03-knowledge-representation.md

Knowledge representation pertains to the process of progressively structuring and formalizing content for computer interpretation and enablement and details of representing and expressing knowledge is discussed in an entire section dedicated to [Knowledge Representation](documentation-approach-06-knowledge-representation.html). <!-- -06- Knowledge Representation !-->  Here, we will discuss several major implications of knowledge representation to the knowledge engineering lifecycle process(-es) as they go hand-in-hand.

### Knowledge Curation

Knowledge curation is the activity of identifying, versioning, indexing, tagging (i.e., adding metadata), and archiving the various artifacts and assets (e.g., representations, formalisms, expression libraries) relevant to the scoped knowledge engineering activity. The primary purpose for knowledge curation is to facilitate search and retrieval of relevant content.  This is often done within a knowledge content management system or knowledge base.  In supporting large, sophisticated knowledge engineering activities , curation and a content management system or knowledge base becomes an invaluable tool (e.g., as is needed for a specific CPG and for supporting numerous related activities such as multiple CPG’s and/or their derivative assets such as measures, clinical decision support (CDS)).   The knowledge content management system serves the function of managing a large corpus of reusable and related content and asset dependencies and  providing workflow or decision-support for the knowledge engineers themselves across the knowledge engineering lifecycle process and reusable assets.

<details open>

<summary>

FIG. 39.  A Knowledge Content Management System provides the means to identify, store, organize, relate, reuse, and manage a collection of Knowledge Assets for knowledge engineering (and use) activites.  In some ways, it is analogous to a ‘code base’ for software engineering helping to manage dependencies and versioning.

</summary>

<img src="CPG-KCMS.png" alt="image_tooltip" class="img-responsive img-rounded center-block" width=450/>

</details>


### Knowledge Management

Knowledge management has substantive ties to  knowledge engineering, knowledge representation, knowledge creation, and knowledge sharing and further extends the broader concept of curation.  This becomes critical for managing the numerous interrelated assets of a more substantial CPG or multiple, interrelated CPG’s.  Knowledge management refers to the processes, capabilities, and tooling for identifying, organizing, relating, finding, sharing, and reusing knowledge assets (see section on [Knowledge Representation](documentation-approach-06-knowledge-representation.html)). <!-- link to 06 !-->  Knowledge assets and knowledge asset metadata are critical features in knowledge management.  Knowledge assets are often stored in knowledge content management systems and/or knowledge bases.    Findability, reusability, dependency, and relatedness are some of the most critical features of a knowledge content management system and rely heavily on metadata on the assets.

Knowledge asset metadata includes structured information for identifying, classifying, and organizing assets including: versioning, information pertaining to the knowledge engineering lifecycle (status of an asset in its lifecycle), administrative information (e.g. governance), permissioning, information about the content of the asset, the asset’s provenance (derivation or from other representation levels), human readable descriptive information, and information about various kinds of relationships including dependencies, (re-)usage, and similarities/ equivalence (see subsection on Knowledge Asset Metadata <!-- link to 06.02 !--> in Knowledge Representation).  More on the relationship between the Knowledge Architecture and Knowledge Management can be found in the subsection [Knowledge Architecture](documentation-approach-06-03-knowledge-architecture.html) and Knowledge Content Management System. <!-- link to 06.03 !-->

Further details on how to leverage a knowledge content management system in the Agile CPG Approach can be found in the section on [Leveraging a Knowledge Base](documentation-approach-05-06-agile-cpg-development-approach.html) (Knowledge Content Management System). <!-- link to 05.06 !-->


---

// File: input/pagecontent/documentation-approach-05-04-knowledge-execution-and-validation.md

### Knowledge Execution

Knowledge execution refers to the processes of binding computable knowledge formalisms to data for the purpose of generating new information and insights. Details of knowledge execution are beyond the scope of this document, but has implications largely addressed in the section on Methods of Implementation. <!-- link to - 09 !-->


### Knowledge Validation

Knowledge validation refers to verifying that the various knowledge formalisms faithfully, specifically, and unambiguously perform as intended. Validation may occur across tiers of functionality and levels of representation as well as for varying degrees of composition across levels and tiers (Levels of Representation by Tiers of Functionality). <!-- link to - 08 !--> Validation may occur within and across various activities within the knowledge engineering lifecycle development process.  Information (e.g., “gold standard” results) and tooling (e.g., comparison, profiling, grading) may be reused or repurposed across these activities.

The two main phases where knowledge validation occurs is at the computable logic formalization stage and the local implementation stage.  A related effort is input data validation (for local implementations) to ensure that an accurate and sufficient input data substrate for the computable formalisms to  reason over is not a source of error in the computed or inferred results or that additional data or enrichment logic may be required in order for the knowledge expressions to infer results (i.e., information and insights) as intended.

In the case where the knowledge engineering activities, or part thereof, occur outside the context of a representative implementation target data set(s), test data sets or test cases must be created as part of the knowledge engineering activities.  Tooling exists for some types of formalisms (e.g., for quality measures) to facilitate this activity.  This test data creation activity typically occurs within and/or across the knowledge acquisition and translation activities concurrent with and as a means of communicating the intended behavior of the knowledge expressions.  Synthetic data sets and/or de-identified data sets may help accelerate and improve the activities of test case generation.

However, this process of developing against test data, performing logic validation against similarly manufactured (and possible refined) test data, then validating input data for local implementations, and finally validating fairly sophisticated logic in the context of validated input data is often a lengthy, labor-intensive, and complex process- often drought with error and non-value-add iteration.  Moreover, it can also lead to significant rework in the design and development of logic expressions that require a full pass through the entire validation sequence very late in the knowledge engineering lifecycle.  This is one of the key arguments for performing knowledge engineering against Real-World Data as described in the section on Knowledge Implementation,  <!-- link to - 05.05 !--> and performing Test-driven Knowledge Engineering as is discussed in the section in the Agile CPG Development Approach. <!-- link to - 05.06 !-->

<details open>

<summary>

FIG. 36. Example of population- and multi-case (patient) level validation of aggregates of Pathway Case Features including Metrics using Validation Tooling on Real-World Data to compare and profile results to quickly identify and root-cause sources of errors.

</summary>


<img src="CPG-KnowledgeValidation.png" alt="Population-level Validation" class="img-responsive img-rounded center-block"/>

</details>

<details open>

<summary>

FIG. 37. Example of case (patient) level validation of detailed results of Pathway Case Features including Metrics using Validation Tooling on Real-World Data to compare results with input data to quickly identify and root-cause sources of errors.

</summary>


<img src="CPG-PatientLevelValidation.png" alt="Population-level Validation" class="img-responsive img-rounded center-block"/>

</details>


---

// File: input/pagecontent/documentation-approach-05-05-knowledge-implementation.md

Knowledge implementation refers to the activities of localizing the knowledge formalisms, including addressing data bindings (e.g., data and terminology mappings), workflow insertions and localization factors (e.g., adjustments to thresholds), integration to end-user system endpoint interfaces, and adjustment or issues related to data quality, timing, enrichment, and/or required data enrichments.  At minimum, there is a local data, clinical logic, and workflow validation step prior to full implementation.

While local implementations of guideline recommendations may warrant their own implementation guide, this implementation guide addresses several critical factors and considerations related to local implementation.  Native EHR build is out of scope.

### Local Content and Practice Governance

First of all, many larger health care delivery organizations have practice governance oversight bodies that may function in some degree like a guideline development group utilizing local organizational experts and key stakeholders, inputs from their own quality functions and research apparatus, and taking into account organizational goals, objectives, and limitations.  This practice governance group often takes into account one or more recognized expert body-developed guidelines (as described in the “Guideline Development Process” section), contextualized to a common set of clinical practices and/or common clinical workflows and aligned to organizational goals, issues, and processes.

Local practice governance and quality functions use their own local clinical registries (also called data marts) to analyze their patient population(s) and align their characteristics with guideline recommendations.  These local registries or data marts may be used to test hypotheses formulated by the practice governance group, in part using guideline recommendations and their measures with their own experts’ and frontline staff’s input.  This may result in varying degrees of adaptations to the guideline recommendations including changes to thresholds or parameters, goals for plans or interventions, workflow insertions, and/or adding or removing recommendations.  Many of the various feedback mechanisms in the CPG (e.g., metrics, measures, eCaseReports for registries, etc.) may be used similarly by the practice governance group.

<details open>

<summary>

FIG. 38. Just as the guideline development group and knowledge engineering team can work collaboratively on the CPG, the local practice governance and informatics (EHR build) functions can work collaboratively using the CPG as a consistent, holistic specification that can then be localized taking various organizational factors including workflow, enablements, methods of implementation, and mechanisms of integration into consideration.

</summary>

<img src="CPG-05-04.png" alt="Local Governance" class="img-responsive img-rounded center-block"/>

</details>

### Local informatics (knowledge engineering) and implementation

Just as many of the functions and methods of the guideline development group have their local analogues, so does the knowledge engineering and guideline formalization and implementation.

Local implementation of standardized best practices includes workflow and decision support (e.g. order sets, documentation templates or adaptive forms, reminders of various types, summary views and clinical dashboards, data enrichments), quality measurement and monitoring, and data collection for analytics (e.g. local clinical registries or data marts).  Native EHR build, clinical information systems, and other local vendor implementations are out of scope for this implementation guide.

However, many of the activities that the informatics team performs quite analogous to the knowledge engineering function including: identifying and or defining local data definitions, terminologies, and their respective sources; helping to elicit and specify clinical business logic; eliciting and specifying critical performance metrics (may be clinical, operational, and/or financial); translating all business logic specifications (into local application build environments or similar vendor capabilities); validating business logic (as implemented in local systems, often considered ‘clinical validation’ as done to check for clinical validity); as well as maintaining and improving the above as needed.

Much of the business logic, as specified, is nearly identical, or otherwise substantially related (could be derived from the standard CPG).  This often holds true for the clinical business logic (clinical decision-logic for recommendations), abstract key considerations for workflow insertions (e.g. EHR “chart events”, see CDS Hooks).  Furthermore, many of the clinical and/or operational performance metrics are analogous or very related to many of the CPGMetrics and CPGMeasures.

Similarly, many of the data definitions and terminologies are the same or very related, and could be significantly informed by those in the standard CPG.  This includes primitive (data requirements) and inferred data elements for local clinical registries or data marks are very similar to the CPGCaseFeatures.

Some activities unique to local informatics and implementation includes: capturing, analyzing, and optimizing local clinical workflows; redesigning and integrating new end-user application capabilities together with local clinical workflows and business processes; performing end-user or workflow validation (may be in a simulation environment, limited release- only specified users, or pilot release); issues related to periodic upgrades of vendor software.

### Concurrent Development and Implementation

Given the similarities between and related activities of the CPG development process and the local implementation of standardized best practices, there are considerable opportunities for improving the effectiveness, efficiency, implementability, and overall uptake (and enhancement) guideline recommendations related best practices.

One of the opportunities with the CPG-IG is to move as much work as possible upstream, tightly integrated with the guideline development process to significantly reduce the amount of rework and potential error introduced when this work must be repeated for each and every implementation at each and every local site.  Furthermore, with the use of standards for representations, expressions, and other formalizations (including delivery mechanisms), the CPG-IG promotes holds the potential for much reuse, either directly as content or through shared services (e.g., CDS, eCQM aaS, SMART-on-FHIR apps, etc.), as an explicit specification for local build environments, or as starting point for localization of CPG content with the similar re-use across layers of knowledge representations, tiers of functionality, implementation methods, and/or delivery and integration mechanisms.

<details open>

<summary>

FIG. 39. The similarities in roles, functions, and activities as well as complementary needs and goals in guideline development and implementation together with the mutual benefits of working collaboratively not only afford the means to do concurrent development and implementation, it can provide benefits in the speed, cost, and quality of end-user consumables.  This concurrency may be part of more traditional knowledge engineering approaches, but may further benefit from and provide benefit to the Agile CPG Development Approach described below.

</summary>

<img src="CPG-05-05.png" alt="image_tooltip" class="img-responsive img-rounded center-block"/>

</details>


### Analogs and Collaboration across CPG Development and Implementation

As described in the section on Knowledge Implementation, there are numerous analogues between the guideline development group and local practice governance as well as between the CPG knowledge engineering function and local informatics and EHR build functions.  Likewise, as the guideline development group and knowledge engineering function collaborate in the CPG development process, so does the local practice governance and informatics/EHR build function in the local knowledge implementation process.  The similarities in or complementation of functions and tasks, content and information, expertise and skills, and goals and objectives affords a significant opportunity to collaborate more closely, to share related or derivative assets, and to more effectively, efficiently, and rapidly implement best occurrences and achieve objectives.

### Feedback- early, often, actionable

Furthermore, such a collaboration provides an opportunity to engage and address critical implementation concerns further upstream as well as afford earlier, shorter, and actionable feedback loops into the overall best practice to daily practice endeavor.  These feedback loops may be through direct interaction between the various functions, through the use of real-world data early in the CPG development process, and through constrained, limited-scope, and focused full lifecycle iterations.

For instance, as data elements and terminologies start could be defined relatively early in the collaborative CPG development process, they may be assessed or even obtained (e.g de-identified data sets from data marts or local clinical registries).  In part, this enables a feasibility assessment on required data elements, and may further provide a real-world data substrate for the knowledge engineering lifecycle process for a CPG.

### Real-world Data to Develop CPGs

Such real-world data can not improve the quality (effectiveness and implementability) of the CPG, it affords the opportunity to greatly accelerate the knowledge engineering process and overall CPG development lifecycle by:

*   Simplifying and informing knowledge acquisition
*   Providing representative samples or cohorts even prior to translation or specification
*   Greatly reducing the work of test case creation; providing representative, broad coverage, near gold standard test cases for test-driven development (logic formalization, expression)
*   Concurrent validation of business logic for the CPD development process and local knowledge implementations
*   Making earlier, shorter, constrained chunking and rapid feedback loops much more feasible and valuable
*   Not only providing feedback on the knowledge engineering through implementation processes, but to the guideline development and practice governance groups on the recommendations themselves.  In fact, in situations where the evidence quality or level may be low, especially where there may be conflicting or even unknown recommendations, such constrained short-cycle feedback loops can even serve to inform the recommendations themselves (e.g. especially when there are multiple local implementers that can provide sufficient statistical power to inform or even improve the evidence itself).  Such feedback does require additional expertise from the evidence ecosystem (e.g. clinical researchers) and/or knowledge discovery/ data sciences community as part of and/or in concert with the guideline development group.
*   By delivering early, often, and much needed “wins” from feedback and improvement on key aspects of the CPG (as well as local implementation or even practice).

Obviously, having more than one local implementation affords many benefits including:

*   Exposing more representative variation in data, local practices, and implementation(s) and their respective environments
*   Providing more representative data for knowledge engineering processes
*   Providing a larger sample size for evidence-level feedback on recommendations
*   Potentially providing more substantive “wins”

<details open>

<summary>

FIG. 40. **Knowledge Implementation concurrent with Agile CPG Development** has the potential to eliminate much waste, increase time-to-use/utility, create more feedback loops earlier in the process, improve the overall value of the guideline, and close the loop in forming a Learning Health System.  Such an approach may be even more critical in the case of a pandemic with a novel contagion with an atypical pathophysiological response where best practices and evidence are unknown or yet to be discovered.

</summary>

<img src="CPG-05.05-Agile.png" alt="Agile CPG" class="img-responsive img-rounded center-block"/>

</details>



Concurrent development and implementation of CPG’s has significant alignment and synergy with the Agile CPG Development Approach, <!-- Link to 05.06 !--> though it provides further opportunities and capabilities to make the approach even more Agile as described above.

Further details of knowledge implementation are beyond the scope of this document at this time, but have implications partially addressed in the section on “Methods of Implementation.” <!-- Link to 09 !-->


---

// File: input/pagecontent/documentation-approach-05-06-agile-cpg-development-approach.md

As implied by its name, Agile process and initiatives are able to move quickly and easily as has been demonstrated and accepted best practice in the software development industry.  Agile development is characterized by the division of tasks into short phases of work and frequent reassessment and adaptation of plans.  Furthermore, as implied in its name, Agile CPG Development takes a broader perspective on the knowledge engineering processes as applied to developing a CPG that is inclusive of the broader CPG value-stream as it pertains the guideline development group and knowledge implementers as “customers” (and/or suppliers in some contexts).  A key tenant of Agile is early and frequent engagement with customers and other domain experts.

This section will provide the following:

*   An Overview of Agile Principles and Methods
*   Critical Aspects of Agile in Knowledge Engineering and CPG Development
    *   Cross-functional, Integrated CPG Development Team
    *   “Chunking”
    *   Test-driven Knowledge Engineering
    *   Iteration, rapid-cycle feedback
    *   Leverage Knowledge Base (in an ‘intelligent’ Knowledge Content Management System)
*   Also refer to the prior section on [Knowledge Implementation](documentation-approach-05-05-knowledge-implementation.html) <!-- Link to 05.05 !--> for details on cross-functional integration with Local Implementation teams and the benefits thereof.

Characteristics of Agile include:

*   Iterative, incremental, and evolutionary
*   Cross-functional, tightly integrated teams with focus on delivery
*   Very short feedback loop and adaptation cycle
*   Integration of “build” and “test” phases (test-driven development)

While we apply most of the principles of Agile Software Development to the Knowledge Engineering Lifecycle, there are several critical factors to keep in mind as we develop software-enabled capabilities in knowledge-driven systems that will be discussed further below. (e.g. that the knowledge architecture and its separations of concerns must still be respected, though composite knowledge assets or artifacts enable further “chunking”, yet within constraints).

Relevant Agile Practices to be adapted to knowledge engineering function:

*   Cross functional teams
*   Frequent, brief team communications (e.g. Scrum)
*   Domain-driven design (focus on domain and domain logic, integration of domain experts, based on model of domain- as is done in knowledge architecture and knowledge-driven systems)
*   Iterative and incremental development (e.g. Chunking)
*   Low-code development platforms (e.g editors and authoring tools for domain experts)
*   Paired programming (e.g. SME knowledge engineer with technical/formalism knowledge engineer)
*   Retrospectives (e.g. continuous sharing of lessons learned)
*   Specification by example (e.g. real “test cases” to aid in defining requirements- including inputs and expected results for at least critical logic paths)
*   Test-driven development (e.g. start with few critical test cases, use short iterations to create logic, and use it to aid in generating additional test cases than are simply graded to be re-used for ‘build’ vs wholly generated manually)
*   Test-integration (e.g. testing of all individual and composite knowledge assets/artifacts)

The levels of knowledge representation (i.e., L1 through L4) represent a framework, not a process or a specific kind of knowledge asset or artifact. The levels describe the general nature of knowledge artifacts and their representation in the typical progression of formalization through translation. Knowledge artifacts may have characteristics of more than one level (e.g., a narrative (L1) guideline could include semi-structure flow diagrams (L2) within them). Progression of formalization or translation may be rapid or instantaneous through the use of tooling (e.g., editors), reuse formalized assets or content from upstream (e.g., value set definitions from evidence or studies), and/or a re-conceptualization of the overall guidelines and CPG development lifecycle process.

<details open>

<summary>

FIG. 42. Levels of Representation in historical sense and as may be adapted for Agile approaches.

</summary>

<img src="CPG-05.06-01.png" alt="Levels of Representation (historical)" class="img-responsive img-rounded center-block"/>

</details>



# Agile approach to Knowledge Engineering and CPG Development

An Agile approach affords numerous, significant benefits for the knowledge engineering lifecycle, particularly in the context of CPG development.  Many, if not most, Agile principles from software development can be applied to knowledge engineering, however, the fundamental principles as well as best practices of knowledge-driven systems and knowledge engineering must be adhered to as well.  For instance, the knowledge architecture (the definitions of relationships between knowledge assets as manifested in the knowledge base) and knowledge representation requirements in constraints must be respected.  In fact, the knowledge architecture and knowledge representations of afford a critical Agile practice- Domain-driven design ([ref](https://domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf)) and even take it further using well established knowledge-based approaches in the broad, deep, and complex healthcare domain.  The knowledge-driven system approach further enables numerous other Agile best practices as described in part below.

We will highlight here a few key Agile principles and practices that may be employed in the Agile CPG development process.

# Cross-functional, Integrated CPG Development Team

The Agile CPG development teams are comprised of numerous experts, as is the guideline development group (see section on Guideline Development) as is the knowledge engineering team.  Such an organizational structure affords numerous benefits including sharing of information and artifacts, direct communication, and use of perhaps the most useful and adaptable knowledge-based systems yet, the collective of human minds, working in concert.  The Agile CPG development team may be further extended, enhanced, and optimized through similar cross-functional integration with the local knowledge implementation functions (practice governance and local informatics/ehr build).

# Integration with Knowledge Engineering with Guideline Development Process

See section on Collaboration with Guideline Development Group in [Knowledge Acquisition](documentation-approach-05-01-knowledge-acquisition.html). <!-- link to 05.01 !--> This is a key tenet of the Agile CPG process.

# Integration/Collaboration of CPG Development and Implementation

See section on Concurrent Development and Implementation in Knowledge Implementation

LIST of Benefits with prior references where described in prior sections: <!-- need to finish !-->

* See Knowledge Acquisition
* Real-world Data and Issues addressed as early as feasible
* Further reduce hand-offs
* Move even closer to the “in-need” consumer
* Rapid Feedback across all levels
* May actually “share work and work products” bidirectionally
* Continuous integration across proof-of-concept, prototype, pilot, and deployment
* Optimize Value to where it matters most- point-of-need

# “Chunking”

A process by which individual ‘pieces’ of knowledge are scoped and broken down into various “fit for purpose” chunks of formalizations (e.g. value sets, case feature definitions, metrics) and then grouped together in a meaningful whole (e.g. composite assets).  Chunking enables iterative and incremental development of knowledge assets as well as creates ‘pieces’ of knowledge that are often highly reusable across numerous composite assets.

# Constrained, yet “contextualized” parts

These ‘pieces’ of knowledge are constrained by the knowledge architecture and the standards by which they are represented or formalized.  However, they must also address the purpose and usage for which they are intended with in a given knowledge of asset/ artifact.  This purpose and usage are often themselves formalized in asset metadata to enable appropriate reuse.

# Building by composition/ restriction

Composition, in knowledge engineering and representation, simply refers to the ability to combine multiple constituent knowledge assets into a whole that not only can take advantage of the constituent capabilities, but any additional formalisms or expressions used directly within the composite asset/ artifact.  Quality measures (see HL-7 Measure-IG) are one example of a composite asset.

Restriction refers to putting explicit constraints on a given knowledge asset/artifact (composite or otherwise) in order to limit or further scope that which it expresses (e.g. to put a further filter on a cohort definition).

# Incremental

These ‘pieces’ (or chunks) of knowledge can then be combined and reused across various appropriate composite knowledge assets in a purposeful constrained way (e.g. through use of composite assets defined in the knowledge architecture) and./or constrained or extended further reuse (as afforded by their own metamodel definitions).

# Iterative

Iteration, in this context, often refers to successive build-test phases not only for the individual, functional ‘pieces’ of knowledge, but also taking excessive passes of build-test phases of the composite assets (and/or of the restricted or extended ‘pieces’ of knowledge).

Testing at all levels and compositions is the knowledge engineering lifecycle’s equivalent of test integration in Agile development.

# Test-driven Knowledge Engineering

Test-driven knowledge engineering can significantly accelerate the knowledge engineering lifecycle from acquisition to translation and representation (across all Levels) to validation and implementation.  Furthermore, using test-driven knowledge engineering fully across the lifecycle and all individual and composite knowledge assets affords a means for test integration and Agile CPG Development.

Test cases may come from a number of sources. This includes knowledge engineers functioning at the L1 and L2 Levels of Representation and their respective elicitations, translations, and specifications.  Obviously this can be a tedious and onerous process with notable opportunities for error.  There exists an opportunity for tooling to create such test cases (see [Boonie tool](https://bonnie.healthit.gov/) for Measures) as well as to refine test cases through validation and grading tooling (comparison, profiling, sensitivity analysis on success executions).  Grading tooling enables the refinement of non-gold standard expected results and/or inputs.  There are further techniques and tools beyond the scope of this implementation guide for generating high-quality test cases.

However, use of real and or realistic data sets (e.g. synthetic data sets, deidentified data sets- as from implementation partners), together with upfront tooling (e.g. query builders, data profiler, data mining and visualization tools, or even machine learning capabilities) can be used to create comprehensive and/or representative test decks (test case sets) to engineer knowledge against.  The same approaches and tooling for grading and validation can likewise be employed against such data sets.

<details open>

<summary>

FIG. 43. An Agile Approach to Knowledge Translation conveys the the concepts, clinical logic, and intent of a source knowledge expression (e.g., early guideline development artifacts) into an equivalent computable or computer interpretable expression.  The Agile approach to knowledge engineering and translation includes early, upfront engagement (with the guideline development group), iteration with incremental parts called “chunking” (data element and terminology definitions), rapid progression through the levels of representation for parts as well as aggregates (often using tooling), and where possible use of Real-World Data for design, specification, development, and one-time validation (vs logic, then data, then logic and data) as is described below.

</summary>

<img src="CPG-KnowledgeEngineering-w-Agile.png" alt="Agile Approach to Knowledge Translation" class="img-responsive img-rounded center-block"/>

</details>


# Specification by example

Creation of data inputs, parameters, and expected results at all levels of asset/artifact and expression (distinct and composite assets) for use in the creation of computable formalisms and/or expressions.  This may include:

* **“Hand crafted”** using tooling as described above

    This may or may not include derivatives such as content metadata from the assets themselves (e.g. codes in a value set)

* **Synthetic Data Sets**
* **Deidentified Data Sets** (e.g. from implementation partners)
* **Real-World Data** (often done if performed by implementation partners)
* **Asset Expression Tooling** feature for code coverage

    This is akin to code coverage in reverse using expression interpreter to produce possible range of inputs and expected results

    Any of the above may require further effort to be sufficiently refined through grading and validation tooling described above.

# Test-driven knowledge formalism and/or expression

This is the closest approximation to test-driven software development where there is repetition of very short build-test phases of the development lifecycle for the expression formalism.  This may be done together with refinement of the test cases themselves, thus resulting in an improved test deck as well as formal expression.  In the latter case, one knowledge engineer may create the test deck (often an SME), while another starts with a few critical test cases, using short iterations to create the logic expression, and using the reasonably performing versions of the logic to aid in generating additional test cases (against a broader set of inputs) that can then be graded rather rapidly by another knowledge engineer (typically an SME) with the aid of validation tooling used.

This approach is analogous to “paired-programming” and leverages the specializations of each knowledge engineers perspective and skill-set to focus on their expertise and the more likely to avoid systematic errors in knowledge translation since each is situated on either side from domain to explicit formalism/expression.  However, there is yet opportunity for introducing systematic errors through this approach that must be addressed further downstream.  These errors may be further reduced for use of real-world data and or de-identified data sets.

# Agile Validation enabled by Test-driven Knowledge Engineering

Using the data, processes, and/or tools above, one can generate a near-gold standard test deck for validation with completion of the knowledge ‘build’ task.  Additional tooling to expand and randomize input data can be used further in the validation process.  However, errors may yet be introduced by the knowledge engineers as described above.  To address this, typically a second, independent data set with its own validation by a separate knowledge engineer that was not part of the formalization/expression ‘build’ process must be performed.  This is often done concurrent with or as part of knowledge implementation validation to serve both purposes.

# Iteration, rapid-cycle feedback

In the knowledge engineering function, iteration and rapid cycle feedback is typically related to the combination of “chunking” work into smaller ‘pieces’ of knowledge (composite asset components) and test-driven development (of formalism/ expression) as described above.  This enables rapid-cycle build-test phases to develop reliable expressions and test ducts for “chunks” or components, with his successive ‘build’-test phases further aggregates and or composite assets/artifacts.  This further affords the ability to “fail early, fail often, and at lower cost” at earlier stages in the development process. This approach it is often used for the majority of CPGCaseFeatures.

However, there is an alternative approach with composite assets or even chained logic that generates intermediate inferences that may be leveraged depending on the complexity of the knowledge asset and the nature of the intermediate inferences.  Some composite assets that are less or moderately complex, have intermediate inferences with substantive domain meeting, and where it’s data inputs have likewise been previously validated and/or re-uses sufficient components that have been previously validated may actually be more efficient and less time-consuming to validate as a whole.  Tooling with features such as comparison (including sensitivity analysis) of successive executions; profiling of inputs, results, and intermediate inferences; means to trace dependencies and propagation of errors there-in (e.g. sankey diagrams); means to find and analyze similar test cases; and the ability to grade across dependencies afford significant advantage in this approach.

Lastly, a combination of the bottom-up and top-down approaches above may not only be the most efficient, but may fall out of the natural progression of knowledge engineering work product in a large composite asset such as a CPG.  Base data resources (required data elements), value sets, and their combination can be identified, developed, and validated very early in the CPG development process.  Likewise, the same often holds true for the majority of CPGCaseFeatures.  Some CPGCaseFeatures with numerous and/or chained dependencies on other CPGCaseFeatures (often developed through the aforementioned approach) may be addressed as a composite asset. Individual CPGRecommendations, together with their dependent CPGCaseFeatures, may be similarly approached as a composite asset.  Nearly by necessity, CPGStrategies and CPGPathways are addressed as composite assets.

<details open>

<summary>

FIG. 44. Knowledge Implementation concurrent with Agile CPG Development has the potential to eliminate much waste, increase time-to-use/utility, create more feedback loops earlier in the process, improve the overall value of the guideline, and close the loop in forming a Learning Health System.  Such an approach may be even more critical in the case of a pandemic with a novel contagion with an atypical pathophysiological response where best practices and evidence are unknown or yet to be discovered.

</summary>

<img src="CPG-05.05-Agile.png" alt="Knoweldge Implementation with Agile" class="img-responsive img-rounded center-block"/>

</details>



# Leveraging a Knowledge Base (Knowledge Content Management System)

For an introduction to knowledge content management systems see sections on knowledge management in [Knowledge Representation (as relates to KE)](documentation-approach-05-03-knowledge-representation.html) <!-- Link to doc 05.03 !--> from knowledge engineering lifecycle.   More details on knowledge content management systems and their role(s) in knowledge-driven systems, see the section on [Knowledge Architecture and Knowledge Content Management System](documentation-approach-06-03-knowledge-architecture.html) <!-- Link to doc 06.03 !-->

The knowledge content management system leverages various features of the knowledge assets in the knowledge base (the corpus of knowledge assets and content) and is what enables the Agile practice of Domain-driven design/ development.  A knowledge content management system is a nearly essential capability for knowledge engineers to manage a large corpus of interrelated knowledge assets as is needed for much of the Agile knowledge engineering methodologies described above to be feasible for any significant effort.

For instance, an more capable knowledge content management system can: facilitate “chunking” within the constraints of the knowledge architecture and asset definitions; enable iteration on separate, yet highly related assets through versioning and dependency management; provide a framework for incremental building by composition and/or restriction; can facilitate the ready reuse of assets across the knowledge engineering effort; enable adaptability of the knowledge architecture as required; provide workflow and ‘decision-support’ features for the work activities of the knowledge engineers; and facilitate more effective and efficient testing and validation processes.

Some of the most fundamental features of a knowledge content management system include: semantic and/or referential asset metadata, asset meta-model definitions, and the knowledge asset ontology that reflects the overall knowledge architecture. The knowledge content management system affords the realization of the knowledge architecture and its various concretized knowledge assets where the nature of these features are described in more detail.

# Use of Ontologies and Terminologies

In a healthcare, the knowledge content management system often includes and/or references openly available (or commercial) foundational knowledge content such as terminologies and ontologies. These terminologies and ontologies contain coded concepts and codified or semantic relationships that can be further leveraged as knowledge asset content as well as for their metadata and inferring relationships between assets.

# Knowledge Engineering Workflow Support

Furthermore, a knowledge content management system also provides workflow (and/or ‘decision’) support for the knowledge engineers, and large teams thereof.  The workflow and/or decision-support capabilities are likewise tied to the various features of the knowledge assets described above.  A knowledge content management system may further  address dependency management (inclusive of versioning) as part of the knowledge engineers’ “decision support”.  Governance processes and Publication rights management may be further included in the knowledge content management system.

# KE Tooling Leveraging the Knowledge Content Management System

Various knowledge engineering tooling such as editors or authoring tools, and even validation tools may interoperate with and/or be built into the knowledge content management system to directly leverage its capabilities.  This can further accelerate the knowledge engineering and even the overall CPG development process by enabling these tools to directly access content (e.g knowledge assets) as well as features of the knowledge content management system at ‘author-time’ (when the assets are being created in the tools).

# Advanced Knowledge Content Management Capabilities

More advanced knowledge content management systems may retain related data assets (e.g refined gold standard data sets as used in validation) together with their explicit linkages (e.g. provenance) to each other data assets as well as to their respective knowledge assets.  This further enables various machine learning approaches and capabilities to be employed within the knowledge content management system (against linked knowledge and data assets including terminologies and ontologies described above) to further aid in the discovery of related, like, and/or conflicting knowledge assets to further accelerate the knowledge engineering processes.  In the context of an integrated or concurrent CPG development and implementation approach (as described in the sections on Knowledge Implementation and Test-driven Knowledge Engineering), the use of real-world data, as previously described, may be leveraged in a similar or even more advanced manner (for example as a [knowledge graph](https://www.ontotext.com/knowledge-hub/fundamentals/)).  Such an example would be to use machine learning capabilities within the context of the knowledge base and its related assets to discover and suggest new CPGCaseFeatures to the knowledge engineer.  Many of these advanced features may be used not only at ‘author-time’ (asset development), but also at ‘run-time’ (note: HL-7 Definitional Assets and even CQL affords a means to call referenced external services).


---

// File: input/pagecontent/documentation-approach-05-knowledge-engineering-overview.md

Knowledge Engineering (KE) is the discipline and profession of developing explicit representations of advanced, domain-oriented logic in computer systems (i.e., knowledge-based systems) in order to simulate human decision-making and high-level cognitive tasks. A knowledge engineer supplies or develops some or all of the "knowledge," typically stored in some knowledge base(s), that is built into or used by computational systems.

This section will provide the following:

*   An Overview of Knowledge Engineering (KE)
*   Introduce the Key Phases of the Knowledge Lifecycle
    *   [Knowledge Acquisition](documentation-approach-05-01-knowledge-acquisition.html)
    *   [Knowledge Translation](documentation-approach-05-02-knowledge-translation.html)
    *   [Knowledge Representation (as relates to KE)](documentation-approach-05-03-knowledge-representation.html)
    *   [Knowledge Execution and Validation](documentation-approach-05-04-knowledge-execution-and-validation.html)
    *   [Knowledge Implementation](documentation-approach-05-05-knowledge-implementation.html)
*   [Introduce the Agile CPG Development Approach](documentation-approach-05-06-agile-cpg-development-approach.html)

In healthcare, knowledge engineers are further specialized with expertise that may span from those with deep domain understanding including knowledge elicitation tools and techniques with some familiarity with various knowledge representation formalisms to deep understanding of knowledge formalism (i.e., representation/ expression) and knowledge architecture (i.e., knowledge processes and technology requirements for creating, capturing, organizing, accessing and using knowledge assets with varying degrees of familiarity with the domain.)

Furthermore, some knowledge engineers are very specialized in a particular knowledge representation level (see below) and or functional tier such as data modelers, terminologists, ontologists, and expression language (e.g., CQL) authors. Likewise, some knowledge engineers are very specialized in a healthcare domain (e.g., cardiology), broad domain conceptualizations and their respective formalisms (e.g., pathways, measures), or specialized methodologies that play a critical role in the overall knowledge engineering process (e.g., knowledge synthesis).

There are a few, experienced informaticians and knowledge architects that play a broader systems engineering (i.e., designing, integrating, and managing complex systems over their life cycles) role on a knowledge engineering team to bring the information, assets, processes, and individual knowledge engineers together, in part, through shared knowledge architecture and use of standardized representations (e.g., composite assets, terminologies, standards) as well as tooling (e.g., editors, validation tooling).

<details open>

<summary>

Fig. 25. The Knowledge Engineering Lifecycle, illustrating the general flow of activities and information.

</summary>

<img src="CPG-05-00.png" alt="image_tooltip" class="img-responsive img-rounded center-block"/>

</details>

### Knowledge Engineering Lifecycle Process

The knowledge engineering lifecycle process describes a progressively interdependent series of activities or steps taken in order to transform domain knowledge or content into a more formal computable set of assets for consumption, execution, and/or delivery.  Furthermore, it describes many of the sub-activities and their work products as well as their interdependencies and generalized information flow. These activities, work products, and information have a generalized flow, however as discussed below in Agile KE, many of these activities and their derivatives run concurrently, have numerous touch points, and are done iteratively. These various flows occur between and across the various tiers of functionality (i.e., data, logic, user interface), levels of representation (i.e., narrative to computable), and knowledge formalisms (i.e., asset types, representations, and expressions) as presented in further detail below. Here we will briefly describe the high-level activities in the knowledge engineering lifecycle process, though much more detailed descriptions of these activities and their corresponding subactivies, methodologies, and tooling are available in various resources provided by respective communities of practice.

#### Knowledge Acquisition

Knowledge acquisition is the process of extracting, understanding, structuring and organizing knowledge from one source, often solely or largely from human/ expert understandable formats, so it can be translated into computer-interpretable (or computer-enabled) formalisms.  Knowledge acquisition typically includes one or more of the following sub-activities: knowledge elicitation, knowledge authoring, knowledge synthesis, knowledge discovery (data mining-machine learning DM-ML), and/or hybrid approaches that may include methods, tools, and information gained from a combination of the prior approaches.

##### Knowledge Elicitation

Knowledge elicitation is the process of extracting an expert’s tacit knowledge (i.e., expertise and experience) or expert-sourced artifacts (e.g., narrative guidelines) to obtain a more formalizable representation of this knowledge.

##### Knowledge Authoring

Knowledge authoring is the process by which a domain expert directly expresses their tacit knowledge into more formalized representations of this knowledge.

##### Knowledge Synthesis

Knowledge synthesis is a process and set of techniques that  evaluates and summarizes all available evidence on a particular topic through comprehensive literature searches and advanced qualitative and quantitative synthesis methods.

##### Knowledge Discovery

Knowledge discovery is a process of discovering or learning patterns that lead to actionable knowledge from large data sets.  This may be inclusive of various traditional data mining or data exploration approaches and tooling, numerous ML approaches, and/or combinations thereof.  Using the CPG approach and the advantages of its Knowledge Architecture (e.g. separation of concerns, particularly for Case Features and eCaseReport), may afford new opportunities to leverage Knowledge Discovery across the full guideline lifecycle.

##### Hybrid Approaches

There is extraordinary value, critical efficiencies, and unique perspectives that can be gleaned from each of these knowledge acquisition approaches.

##### In Collaboration with the Guideline Development Group

A key tenet of the CPG development process is for the knowledge engineering team to leverage early, often engagement and even integration with guideline development group. This allows the knowledge engineering team to start acquiring knowledge and translating it further upstream in the CPG development process.  It further enables feedback and more rapid iteration between the knowledge engineering team and the domain experts in the guideline development group.

<details open>

<summary>

FIG. 26.  Knowledge Engineering in collaboration with the guideline development group (as described in the CDC’s “Integrated Process”) can proceed much earlier and be incremental and iterative, while leveraging direct interactions with the guideline development group to ensure that the translation into more formal, computeable expressions accurately convey the intent of the source knowledge.

</summary>

<img src="CPG-05-01.png" alt="image_tooltip" class="img-responsive img-rounded center-block"/>

</details>

##### In Collaboration with Knowledge Implementers

Knowledge acquisition approaches may further leverage the benefits of working directly with knowledge implementers, not limited to potential representative data sets (e.g de-identified data) to perform early knowledge specification and validation activities (e.g. data elements and terminologies) or even employ knowledge discovery and hybrid approaches as described above.

<details open>

<summary>

FIG. 27. Knowledge Engineering in collaboration Local Informatics and EHR build teams (concurrent development and implementation) enables more data-driven knowledge engineering processes and helps to ensure that the computable expressions accurately and reliably convey the intent of the knowledge source to the target systems.

</summary>

<img src="CPG-05-02.png" alt="image_tooltip" class="img-responsive img-rounded center-block"/>

</details>

#### Knowledge Translation

Knowledge translation occurs between and across various levels of knowledge representation,  from narrative to semi-structured to structured to executable (described in detail below in “Knowledge Representation” section) as well as between equivalent forms of a given knowledge asset.

<details open>

<summary>

FIG. 28.  Knowledge Translation is the dynamic and iterative process of conveying the concepts, clinical logic, and intent of a source knowledge expression (e.g., narrative guideline) into an equivalent expression in another language or formalism- in the case of a narrative guideline into a computable or computer interpretable expression.  This may occur successively or progressively across the Levels of Representation (L1, L2, L3) or may be directly to an L3/L4 expression, typically using an authoring tool or domain-oriented language.

</summary>

<img src="CPG-05-03.png" alt="image_tooltip" class="img-responsive img-rounded center-block"/>

</details>

#### Knowledge Representation/Expression

Knowledge representation pertains to the process of progressively structuring and formalizing content for computer interpretation and enablement and will be discussed in more detail in the "Knowledge Representation" section below.

##### Knowledge Curation

Knowledge curation is the activity of identifying, versioning, indexing, tagging (i.e., adding metadata), and archiving the various artifacts and assets (e.g., representations, formalisms, expression libraries) relevant to the scoped knowledge engineering activity. The primary purpose for knowledge curation is to facilitate search and retrieval of relevant content.


##### Knowledge Management

Knowledge management has substantive ties to  knowledge engineering, knowledge representation, knowledge creation, and knowledge sharing and further extends the broader concept of curation.  Knowledge management refers to the processes, capabilities, and tooling for identifying, organizing, relating, finding, sharing, and reusing knowledge assets (see section on Knowledge Representation).

#### Knowledge Execution

Knowledge execution refers to the processes of binding computable knowledge formalisms to data for the purpose of generating new information and insights. Details of knowledge execution are beyond the scope of this document, but has implications largely addressed in the section on “Methods of Implementation”.



#### Knowledge Validation

Knowledge validation refers to verifying that the various knowledge formalisms faithfully, specifically, and unambiguously perform as intended. Validation may occur across tiers of functionality and levels of representation as well as for varying degrees of composition across levels and tiers (L x T). Validation may occur within and across various activities within the knowledge engineering lifecycle development process. Details of this section cover approaches for using Real-World Data to greatly accelerate the development and implementation processes and yield more accurate knowledge expressions.

Also see Test-driven Knowledge Engineering in Agile Approach to CPG Development



#### Knowledge Implementation

Knowledge implementation refers to the activities of localizing the knowledge formalisms, including addressing data bindings (e.g., data and terminology mappings), workflow insertions and localization factors (e.g., adjustments to thresholds), integration to end-user system endpoint interfaces, and adjustment or issues related to data quality, timing, enrichment, and/or required data enrichments.  At minimum, there is a local data, clinical logic, and workflow validation step prior to full implementation.

While local implementations of guideline recommendations may warrant their own implementation guide, this implementation guide addresses several key factors and considerations related to local implementation.  Native EHR build is out of scope.

##### Local Content and Practice Governance

Most large health care delivery organizations have practice governance oversight bodies that may function in some degree like a guideline development group utilizing local organizational experts and key stakeholders, inputs from their own quality functions and research apparatus, and taking into account organizational goals, objectives, and limitations.

<details open>

<summary>

FIG. 29.  Just as the guideline development group and knowledge engineering team can work collaboratively on the CPG, the local practice governance and informatics (EHR build) functions can work collaboratively using the CPG as a consistent, holistic specification that can then be localized taking various organizational factors including workflow, enablements, methods of implementation, and mechanisms of integration into consideration.

</summary>

<img src="CPG-05-04.png" alt="image_tooltip" class="img-responsive img-rounded center-block"/>

</details>

##### Local informatics (knowledge engineering) and implementation

Just as many of the functions and methods of the guideline development group have their local analogues, so does the knowledge engineering and guideline formalization and implementation.

##### Concurrent Development and Implementation

Given the similarities between and related activities of the CPG development process and the local implementation of standardized best practices, there are considerable opportunities for improving the effectiveness, efficiency, implementability, and overall uptake (and enhancement) guideline recommendations related best practices.

<details open>

<summary>

FIG 30. The similarities in roles, functions, and activities as well as complementary needs and goals in guideline development and implementation together with the mutual benefits of working collaboratively not only afford the means to do concurrent development and implementation, it can provide benefits in the speed, cost, and quality of end-user consumables.  This concurrency may be part of more traditional knowledge engineering approaches, but may further benefit from and provide benefit to the Agile CPG Development Approach described below.

</summary>

<img src="CPG-05-05.png" alt="image_tooltip" class="img-responsive img-rounded center-block"/>

</details>

##### Analogs and Collaboration across CPG Development and Implementation

As described in more detail in the section on [Knowledge Implementation](documentation-approach-05-05-knowledge-implementation.html), <!-- Link to - 05.05 !--> there are numerous analogues between the guideline development group and local practice governance as well as between the CPG knowledge engineering function and local informatics and EHR build functions.  Likewise, as the guideline development group and knowledge engineering function collaborate in the CPG development process, so does the local practice governance and informatics/EHR build function in the local knowledge implementation process.

##### Feedback- early, often, actionable

Furthermore, such a collaboration provides an opportunity to engage and address critical implementation concerns further upstream as well as afford earlier, shorter, and actionable feedback loops into the overall best practice to daily practice endeavor.

##### Real-world Data to Develop CPGs

Such real-world data can not improve the quality (effectiveness and implementability) of the CPG, it affords the opportunity to greatly accelerate the knowledge engineering process and overall CPG development lifecycle.  Obviously, having more than one local implementation affords many benefits.

Further details of knowledge implementation are beyond the scope of this document at this time, but have implications partially addressed in the section on “Methods of Implementation.”


#### Agile CPG Development Approach

The Agile CPG Development Approach describes methods, principles, and tools to develop and implement higher-quality CPGs more efficiently and timely.

This section will provide the following:

*   An Overview of Agile Principles and Methods
*   Critical Aspects of Agile in Knowledge Engineering and CPG Development
    *   Cross-functional, Integrated CPG Development Team
    *   “Chunking”
    *   Test-driven Knowledge Engineering
    *   Iteration, rapid-cycle feedback
    *   Leverage Knowledge Base (in an ‘intelligent’ Knowledge Content Management System)
*   Leveraging a Knowledge Base (Knowledge Content Management System)

Also refer to the prior section on [Knowledge Implementation](documentation-approach-05-05-knowledge-implementation.html) for details on concurrent development and implementation using cross-functional integration with Local Implementation teams and the benefits thereof.

As implied by its name, Agile process and initiatives are able to move quickly and easily as has been demonstrated and accepted best practice in the software development industry.  Agile development is characterized by the division of tasks into short phases of work and frequent reassessment and adaptation of plans.

Characteristics of Agile include:

*   Iterative, incremental, and evolutionary
*   Cross-functional, tightly integrated teams with focus on delivery
*   Very short feedback loop and adaptation cycle
*   Integration of “build” and “test” phases (test-driven development)

Knowledge-driven systems principles and best practices must still be respected and/or employed.

Relevant Agile Practices to be adapted to knowledge engineering function:

*   Cross functional teams
*   Frequent, brief team communications (e.g. Scrum)
*   Domain-driven design
*   Iterative and incremental development
*   Low-code development platforms
*   Paired programming (knowledge engineering)
*   Retrospectives (continuous learning)
*   Specification by example
*   Test-driven development
*   Test-integration

Much more detail will be provided in the section dedicated to the [Agile CPG Development Approach](documentation-approach-05-06-agile-cpg-development-approach.html)


---

// File: input/pagecontent/documentation-approach-06-01-levels-of-knowledge-representation.md

### Approach

The approach taken by this implementation guide is to consider three broad challenges of clinical guideline implementation:

Note that the levels of knowledge representation are a continuum, with discrete categories introduced in the methodology to help inform discussions and communicate the concepts involved. Typically, the initial guideline content is published in narrative form (L1), but guidelines will often contain diagrams, charts, and other depictions that lean towards semi-structured (L2) representation.

This implementation guide utilizes a previously established clinical decision support (CDS) implementation model to move from a narrative clinical guideline to computable content. This model defines four (4) ‘levels’ of knowledge representation:

<details open>

<summary>

FIG. 47. Knowledge Levels with Examples (Michaels, U.S. Centers for Disease Control and Prevention, 2019; Adapted from: Boxwala, AA, et al.. A multi-layered framework for disseminating knowledge for computer-based decision support. J Am Med Inform Assoc 2011(18) i132-i139).

</summary>

<img src="knowledge-levels.png" alt="Knowledge Levels with Examples" class="img-responsive img-rounded center-block"/>

</details>


### Narrative

Level 1 (L1) is the clinical guideline in narrative form often in Portable Document Format (PDF), and includes:

*   Clinical Focus
*   Scope (population attributes from PICOTS, as well as interventions, comparators, outcomes, timing, and setting)
*   Recommendations (at least in part from PICOTS interventions)
*   Strength of Recommendation and Quality of Evidence
*   Evidence references (including analysis and evidence summaries)
*   Evidence Summaries
*   Tables and FIgures (including drafts thereof)
*   Who / what is included (inclusions) for each Recommendation or combinations thereof
*   Who / what is excluded (exclusions) for each Recommendation or combinations thereof
*   Case Examples (examples of how patient archetypes might traverse the guideline)
*   Glossaries- of terms with their descriptions and definitions
*   Indicator descriptions
*   Policy considerations (e.g., privacy, access, regulations)
*   For example, one such guideline is the Guideline for Prescribing Opioids for Chronic Pain (2016) published by the Centers for Disease Control and Prevention (CDC).


### Semi-structured

Level 2 (L2) is semi-structured and generally consists of process and workflow diagrams, user stories, and personas that provide contextual and descriptive information about the steps involved in each recommendation of the guideline. This level generally includes:


*   Concepts - What are the formal domain concepts involved
*   Concept Maps of all the concepts and their relationships as scoped to the guideline
*   Visualizations of Processes - (Flow) Diagrams depicting the order of actions and decisions involved, often in parallel to the domain concepts or data elements used as well as workflow and/or potential set of workflow interventions to be employed
*   Flow diagrams of information, decisions, and processes
*   Decision Trees and Table
*   Personas - Who are the actors involved
*   User Stories - Functional descriptions of what happens from the perspective of each persona
*   Wireframes of potential user interactions
*   Triggers - When do the processes happen (i.e., what are the entry points for the processes)
*   Terminologies and Data Dictionaries
*   Formal definitions for Indicators (e.g., using pseudocode)
*   The examples included in this implementation guide illustrate some of the types of content and approaches that can be used for L2.


### Structured

Level 3 (L3) is a computable representation of the content in the guideline and can be shared across health systems and implementation settings. This level is the primary focus of this implementation guide and as such throughout much of this implementation guide when we refer to formalized knowledge assets (or formalisms and expressions) we are almost exclusively referring to this level of representation (computable).  They generally consists of:

*   Complete value sets specified using standard terminologies (coded concepts, code systems, and intentional and extensional value sets)
*   Data Requirements
*   Data element definitions describing the information involved
    *   Including inferred data elements
*   Computable logic describing, at minimum, the inclusion/exclusion criteria
*   Resource definitions with respective terminologies including for the recommended activity itself (e.g. MedicationRequest + Value Set for a recommended medication)
*   Structured recommendations with decision logic (in the form of event-condition-action (ECA) rules)
*   Structured process definitions describing how the recommendations fit into a clinical workflow (inclusive of decision and orchestration logic such as in CPGStrategies)
*   Structured form definitions providing a conceptual description of the user-interactions involved (e.g. Adaptive Forms)
*   All the CPG definitional resources (e.g. CPGPathway, CPGStrategies, CPGRecommendations, CPGCaseFeatures, etc.) are Level 3 representations.

### Executable

Level 4 (L4) is executable software running in a clinical system (e.g., EHR, registry, exchange, quality measurement module). This is the local implementation and generally involves:

*   Mapping of terms (value sets) to local terms
*   Adjustment of workflow for site-specific factors
*   Interpretation of computable content in the site-specific environment (see [Methods of Implementation](documentation-approach-09-methods-of-implementation.html))

As will be discussed further in the Agile CPG development approach (see section on [Knowledge Engineering](documentation-approach-05-knowledge-engineering-overview.html)), <!-- add link !--> these levels of representation may begin to overlap or blur and may not follow an entirely linear or successive progression for sequential development maturation.  Furthermore, tooling capabilities may afford translation across levels of representation and some levels may not be entirely expressed as the tools user interface and internal translation capabilities facilitate traversing these levels.  This will become more evident and described in more detail in the section on the Agile CPG development approach.

<details open>

<summary>

FIG. 48. Levels of Representation in historical CDS sense and as may be adapted for Agile approaches.

</summary>

<img src="CPG-05.06-01.png" alt="Levels adapted for Agile" class="img-responsive img-rounded center-block"/>

</details>


---

// File: input/pagecontent/documentation-approach-06-02-knowledge-assets.md

Knowledge assets or artifacts as they are often referred to in FHIR, where an artifact is an instance of an asset.  Assets provide the ability to keep domain logic separated and distinct from other system logic in complex systems.  In this implementation guide we often refer to knowledge assets and knowledge artifacts interchangeably, though the distinction is very relevant to the knowledge engineer.

*   Asset Metamodel- its structure- requirements and constraints
*   Content- what goes into the asset “container”
*   Metadata- see section below
*   Composite and Derived- see below

### Asset Metamodel

The asset meta-model is a model that essentially describes what is required and/or allowed for a given class of knowledge assets.  This includes its ‘schema’ (e.g attributes, cardinality), the scope or range of values allow for given attributes, expressions or other formalisms to be used with an asset class, required and optional metadata (often using a metadata metamodel).  In FHIR, the means of defining asset metamodels is the FHIR [StructureDefinition Resource](https://www.hl7.org/fhir/structuredefinition.html) (though it is also used for definitions of resources other than knowledge assets including all request (e.g. orders) and event (e.g. clinical data element) resources).  Furthermore, the [PlanDefinition Resource](https://www.hl7.org/fhir/plandefinition.html) (based on the HL-7 Knowledge Artifact Specification) is a base, or more generic, asset meta-model definition that may be profiled using StructureDefinition to further define additional asset meta-models.  The FHIR Library Resource and GraphDefinition Resource are additional FHIR resources used in this limitation guide as definitional resources for accepting meta-models.   The asset metamodels (definition of structure including metadata, attributes, requirements and constraints) are defined in the this implementation guide using an approach to [Knowledge Artifact Representation in FHIR](https://www.hl7.org/fhir/clinicalreasoning-knowledge-artifact-representation.html) described in the Clinical Reasoning Module.

### Content

Knowledge asset content refers to that which is contained within a specific knowledge asset.  This includes the scoped values or expressions for a specific asset’s metadata, attributes, and other formalisms used to express the knowledge contained within the asset.  The content must adhere to the rules and constraints imparted by a given asset’s meta-model.  Content is what gives a specific asset its meaning, function or behavior, and enables it to perform its intent when reasoned over at ‘run-time’.  Metadata about the content may be derived or asserted (e.g. annotated through human or machine processes).

### Asset Metadata

Metadata is data that provides information about the knowledge asset.  This may include disk active metadata, structural metadata, administrative metadata, and situating or relational metadata.  Descriptive metadata provides information about the nature of the knowledge asset as well as information about the nature of the content of an individual knowledge asset.  Structural metadata provide information about the representation(s) and/or formalism(s) used in the knowledge asset (e.g. the metamodel used for the asset and how it was applied for this specific asset).  Administrative metadata is information that helps manage the knowledge asset and is inclusive of knowledge engineering lifecycle, governance, and authorization or rights metadata.  Situational or relational metadata describes an assets relationship to other assets as well as the totality of its relationships within the knowledge base.  Metadata may be further broken down to the following category:



*   **Identity and Versioning** - used for distinct or unique existence (identity), currency, change control, tagging to business usage
*   **Classification and Organization** - inferred and asserted descriptors (asset type and subtypes, nature of expression, content type/ subtype, or other classification by any set of attributes).  Classification may use and refer to both descriptive as well as structural metadata.
*   **KM Lifecycle and Knowledge Engineering** - status in asset lifecycle (e.g., draft, final, deprecated), phase in knowledge engineering workflow (may be localized and asset-specific)
*   **Administrative**- availability (use, subscription), governance (who has signed off, stewardship- local and regulatory)
*   **Authorization, Ownership, & Rights** - who “owns” and is allowed to use the asset, access control metadata (used by permissioning rules), legal status
*   **Content**- key concepts contained within and their roles (e.g., Amoxicillin as treatment vs contraindication; nephropathy as a primary condition vs complication).  Metadata on subject, topic, and setting may be considered further content metadata that are either asserted or derived from the asset itself (using ontologies within the knowledge base).
*   **Provenance*** - refers to the lineage of an asset (from what other asset or process it was derived), including its full pedigree if it is or was derived from a composite asset; and is inclusive of  authorship (who created it)
*   **Business Motivation** - goals, objectives
*   **Usage Context** - where the asset was intended to be used when it was created as well as where the asset is actually being used.
*   **Relatedness**- what other assets Use or are usedBy 'this' asset (may be derived and/or asserted), what assets Contain or are containedBy another asset, what assets are in lineage (derivedFrom: parent and hasDerivative: copies/ clones), what assets share lineage or dependencies (isRelatedto: "siblings" or "cousins"), what assets have shared usage context (usedLike: ), what assets might be same/ similar (this is a more advanced use case for an advance KM system that evaluates content/ expression, objective, results;  relationships look like: equalTo, equivalentTo, expresses)
*   ***Note:*** Provenance not only pertains to the linage and pedigree of knowledge assets, but likewise to the data used by these assets in the inferred information that results from the combination of the two.  This data provenance is of critical value in knowledge driven systems and can be leveraged for numerous features across the data and knowledge life cycles.  Some of these capabilities are described further in the Knowledge Engineering section.

In FHIR, asset metadata is addressed in several ways.  First, the FHIR Resources, particularly those that are definitional(e.g., plan definition, activity definition, measure definition, questionnaire) to be used as asset “containers” have their own metadata attributes as defined with each resource.  Furthermore, shared metadata elements in FHIR Resources are described [https://www.hl7.org/fhir/resource.html](https://www.hl7.org/fhir/resource.html) and more detailed information about FHIR Metadata may be found ([ref](http://www.hl7.org/fhir/metadatatypes.html)), or here ([ref](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=391)).  The section on [Metadata](https://www.hl7.org/fhir/clinicalreasoning-knowledge-artifact-representation.html#metadata) of the Clinical Reasoning Module on Knowledge Artifact Representation provides a description of how metadata is routinely addressed in FHIR Knowledge Artifact Representations.

Metadata may be semantic, using coded concepts in terminologies and ontologies in order to facilitate numerous functions across the knowledge engineering lifecycle and within a knowledge content management system.  Similarly values for metadata may be references to other knowledge assets and or their attributes (including their metadata).

To ensure integrity across all knowledge assets in a knowledge content management system, an asset’s definition (metamodel) often references a common, shared asset metadata meta-model (definition of the metadata that may or must be used across all assets in a common knowledge base).  Additional information about and approaches to metadata are described by the Mobilizing Computable Biomedical Knowledge (MCBK) ([ref](https://precisionmedicine.duke.edu/sites/precisionmedicine.duke.edu/files/field/attachments/GPMF_Richesson.09.27.2018.pdf), [ref](https://deepblue.lib.umich.edu/handle/2027.42/140743)) and OMG (ref)

### Expressions (and/or Languages)

An expression is a computable language for creating a computer-interpretable representation of specific knowledge.  In HL-7 and for the scope of this implementation guide, the expression language used (where it is able to sufficiently express the intended logic behavior) is the Clinical Quality Language ([CQL](https://cql.hl7.org/)).  CQL further has affordances for referencing additional languages (e.g. Java, C#, or Python) akin to remote procedure calls, as well as callouts to services where the needs to express computable logic exceed the limits of CQL.

### Declarations

A declaration is an expression of the structural elements of computable logic (e.g. values for attributes and parameters of a knowledge asset) that does not describe how to compute the logic, rather what the logic is.  Declarations express the logic of a computation without describing its control flow (ref).  These declarations may then reference and/or be referenced by expressions as described above.  The PlanDefinition Resource is a declarative knowledge asset definition in HL-7 FHIR whose meta-model affords the means to reference and or be referenced by CQL or other expression languages.  A specific PlanDefinition is a declarative knowledge asset.

### Composite Assets

No single representation or expression can sufficiently and/or appropriately describe the nature and behavior of many domain concepts using computable formalism.  Furthermore, many domain concepts build on and/or reference one another.  To address these issues as well as some issues related to scalability and reusability or shareability, many knowledge assets are actually comprised of or composed using other knowledge assets.  A CPGPathway, CPGStrategy, and CPGRecommendation are examples of composite asset in this implementation guide.

### Derived Assets

Furthermore, many knowledge assets may be derived from other knowledge assets (in part or in whole) as a means to reuse and repurpose the content of the knowledge asset from which they were derived.  For example, a CPGMetric may derive much of its content from a CPGRecommendation.  Derived knowledge assets may be wholly or partially derived from other assets.

<details open>

<summary>

FIG. 49.  Derived Assets from a CPGPathway

</summary>

<img src="CPG-06.02-00.png" alt="image_tooltip" class="img-responsive img-rounded center-block"/>

</details>

### Translation Within and Between Knowledge Representations

Some knowledge assets may be represented using multiple alternative formalisms (expressions and declarations), yet express the same meaning and intent resulting in identical behavior when reasoning over identical inputs (data elements).  This equivalence in computational intent and behavior is known as isopragmatism.  This affords the ability to transform (and/or translate) between different formalisms of the same knowledge content.  Isopragmatic transformations between such knowledge representations is the knowledge equivalent of iso-semantic transformations between different combinations of information model + terminologies.  Reasons to use alternative, isopragmatic representations of knowledge assets include ease-of-use of tooling (e.g. one representation has more capable authoring and/or validation tools) as well as the capabilities that exist within alternative delivery mechanisms and/or implementation environments.  For more on isopragmatic knowledge representations see the BPM+ section in [Methodology](documentation-approach-09-methods-of-implementation.html). <!-- add link !-->

<details open>

<summary>

FIG. 50. Isopragmatic Representations of the Same Asset

</summary>

<img src="CPG-06.02-01.png" alt="image_tooltip" class="img-responsive img-rounded center-block"/>

</details>


---

// File: input/pagecontent/documentation-approach-06-03-knowledge-architecture.md

Knowledge architecture is the discipline of information system architecture (Industry, Enterprise, Solution) with a focus on the principles, best practices, means, and mechanisms by which the knowledge assets for the architecture's given domain are managed including: acquiring, representing, stored, and organized.  Knowledge architecture includes defining the types and scopes of the various assets, their metadata, as well as their relations.  This description of the types and nature of knowledge assets, including the definition of their metamodels including relationships to and in the context of  each other (derived, composite, and related assets), may be referred to as the knowledge asset ontology.

Covered in this section:

*   Key Challenges for Knowledge Architecture
*   Best Practices and Needs to be addressed
*   Key Principles and consideration
*   Knowledge Architecture Principles as applied to the CPG
*   Developing the CPG Knowledge Architecture
*   Conceptual Perspective on the CPG Knowledge Architecture
*   Knowledge Architecture in FHIR for the CPG-IG
*   Boundary Issues at the Separations of Concerns
*   Knowledge Architecture and Knowledge Content Management System

The CPG Knowledge Architecture ([Conceptual Domain Perspective](documentation-approach-12-conceptual-knowledge-architecture.html)) <!-- Link to - 12 !--> is described in its own section of this implementation guide.

<details open>

<summary>

FIG. 51. The knowledge architecture affords a means to formally describe the clinical domain using computer-interpretable formalisms.  The knowledge architecture defines the type and scope of various knowledge assets as well as the relationships between them and their requisite metadata.  It explicitly defines the nature of classes of knowledge assets through their metamodel. These definitions as well as definitions of the relationships between the knowledge asset types constitutes the knowledge asset ontology.

</summary>

<img src="CPG-06.03-Architecture.png" alt="image_tooltip" class="img-responsive img-rounded center-block"/>

</details>


Furthermore, as various asset types and/or their derivatives share many common characteristics, the knowledge architects attempt to use common approaches and information modeling concepts to ensure optimal reuse, adaptation, and subtyping across knowledge asset meta-model definitions. In FHIR, this is done through profiling of definitional resources (e.g. plan definition, activity definition) and is enforced largely through a common approach in tooling to creating these asset type profiles.

Similarly, to ensure reusability, derivation, association, and adaptability as well as reduce rework and confusion by the knowledge engineering team a consistent and accurate definition for knowledge asset metadata is often defined in what may be referred to as the knowledge asset metadata meta-model.  In FHIR, this is done in part through architectural oversight of resource and attribute definitions as well as through the use of a common, shared Metadata resource.

<sup>2</sup> <!-- 3 Paragraphs NEED WRITTEN. Need Integration Mechanisms from Bryn added HERE TOO. PARAGRAPH on LxTxM2 PARAGRAPH on Composition and Derivation in the KA PARAGRAPH on De Novo KA vs KA in an existing ecosystem **Key challenges for Knowledge Architecture lie in:**. Will add later and toward BOTTOM !-->

*   Identifying accurate, representative, unambiguous, and useful domain knowledge abstractions;
*   Enabling accurate and suitable computable representations (or formalisms) of those domain abstractions;
*   Assuring that these computable knowledge representations ensure the highest fidelity of shared meaning between artifacts directly consumed and/ or generated by domain experts and ‘computers’
*   Provide sufficient affordances for the support of the entire lifecycle and evolution of domain and executable knowledge
*   “FItting” with and being used within an existing ecosystem and various communities of practices and technologies within it is to be used
*   Enabling evolution and adaptation, or degrees of freedom, within all Tiers of Functionality both for individual assets, as well as collections thereof- including considerations for numerous alternative localizations

**Needs and best practices include:**

*   Afford Reliability as well as Continually Evolve and Expand upon the knowledge content (know general nature of knowledge, not just specifics) with minimal (or even positive) impact on the Adaptability and Resilience of the rest of the Architecture.
*   Knowledge Assets for the given domain, business, or product (for which the architecture belongs) are Managed including: created, captured (“elicited”), stored, versioned, organized, shared/ exchanged, executed/consumed, delivered and presented.
*   Systematic means by which to Abstract core knowledge assets for optimal (re-)use and continual evolution throughout the broader architecture.
    *   Appropriate or optimal Separations of Concerns including by classifying various Types or Kinds, Representations, and Expressions of knowledge and
    *   The Methods/Operations, Interfaces, and Parameters by which they are operated upon as well as interact within the broader architecture.
*   Ideally, there would be One Source of Truth for any given ‘business logic’ (knowledge) to be consumed or utilized by numerous components/features throughout the entire architecture and this source of truth is or can be wholly severable from a specific implementation.
*   To behave as such, a knowledge architecture must not only respect the general Knowledge Architecture principles mentioned so far, but also respect the nature (kind) of knowledge for the domain or business in which it is to be used, or even more so, faithfully (and holistically) reflect the domain or business.  Therefore, Knowledge Architecture is at least as much about the domain itself (e.g. Academic Medicine, Healthcare, Evidence Ecosystem) as it is the general nature of (computable) knowledge.

Knowledge Architecture in the healthcare domain poses a particularly challenging domain to architect knowledge for, and for which knowledge architecture approaches, decisions, and implementations can have significant impact on the usability and value of assets as well as for the efficiency and overall effort of the knowledge engineering team(s).  Furthermore, the participants in these activities include a broad and deep representation of highly technical and specialized skills and foundational knowledge including clinical medicine and healthcare delivery, computational sciences and software engineering, knowledge and evidence ecosystem participants, and the knowledge engineering discipline.

**Key considerations and principles:**

*   Separations of Concerns- within and across the domain conceptualizations, between knowledge formalizations, and across the translations or transformations thereof
*   Fidelity to Domain Conceptualizations- oversimplification leads to unwieldy and value diminishing complexity to correct for, while appropriate complexity to align with the domain yields optimal representations and their formalization
*   Use of appropriate (well-fit) representations, expressions, and other formalisms within individual knowledge assets to address the nature of the domain conceptualizations for which they are intended to express
*   Layers of Abstraction- abstraction layers are a means of hiding some of the working details of subsystems, thus enabling the separation of concerns, particularly for boundary issues at these separations.  To do so, abstraction layers may even have multiple levels.  One typically finds programmatic interfaces and/or specialized logic to address these layers of obstruction
*   Sharing of knowledge formalisms across asset types to minimize complexity, optimize value, and reuse knowledge engineering skill sets
*   Existence and usage of content, information, formalisms, and interfaces that already exist within and/or across the ecosystem where possible and appropriate (e.g. fit-for-purpose)

**Knowledge Architecture Principles as Applied to the CPG**

*   Separation of Concerns in the CPG, see the subsection in the  CPG Knowledge Architecture (Conceptual Perspective) on [Separation of Concerns](documentation-approach-12-01-separations-of-concerns-in-the-cpg.html). <!-- link to - 12.01 - Separations of Concerns !-->
*   Domain Conceptualizations in the CPG, see the section on CPG Knowledge Architecture ([Conceptual Perspective](documentation-approach-12-conceptual-knowledge-architecture.html)) <!-- link to - 12 !-->
*   Fitting Representation/ Expressions see the individual [Profiles](profiles.html) <!-- link to - Profiles !--> in the CPG as well as how they are employed in the [Methodology](methodology.html) Section <!-- link to - Medhodology !-->
*   Layers of Abstraction is largely done within and across the knowledge assets definitions themselves described in the respective sub-section on [Knowledge Assets](documentation-approach-06-02-knowledge-assets.html) <!-- link to - 06.02 - Knowledge Assets !--> in the Knowledge Representation section
*   Sharing of Formalisms is in large part why to HL-7 FHIR and many of its various features; though other standards-based formalisms may be employed as well such as is discussed in the BPM+ implementation in [Methodology](methodology.html) Section <!-- link to - Medhodology !-->
*   Ecosystem ease of use is another reason to use HL-7 FHIR and in particular the various related Application Programming Interfaces (APIs) (FHIR Data Access, CDS Hooks, SMART-on-FHIR, etc.)

**Developing** **the CPG Knowledge Architecture**

Here we describe the overall knowledge architecture approach to developing the CPG knowledge architecture, which then results in the Conceptual Perspective on the CPG Knowledge Architecture as well as the concretized Knowledge Architecture in FHIR for the CPG-IG described subsequently.

<details open>

<summary>

FIG. 52.   One of the primary objectives for the knowledge architecture team is to define the clinical domain concepts as well  as identify the useful computer-interpretable formalisms that may be used to express them.

</summary>

<img src="CPG-06.03-CasePlan.png" alt="image_tooltip" class="img-responsive img-rounded center-block"/>

</details>

<details open>

<summary>

FIG. 53.  The knowledge architecture team must then situate the clinical domain concepts to more accurately and comprehensively describe the domain of interest as well as situate the computer-interpretable formalisms in the information system ecosystem where the knowledge assets are to be executed.

</summary>

<img src="CPG-06.03-Concepts-Formalisms.png" alt="image_tooltip" class="img-responsive img-rounded center-block"/>

</details>

<details open>

<summary>

FIG. 54.  Next, the knowledge architecture team defines clear relationships between the clinical conceptualizations of the domain as well as how the computer interpretable formalisms may be used collectively to express the nature of behavior to be represented in the knowledge assets that formalize the clinical domain conceptualizations.

</summary>

<img src="CPG-06.03-Relationships.png" alt="image_tooltip" class="img-responsive img-rounded center-block"/>

</details>

<details open>

<summary>

FIG. 55.  The knowledge architecture team then defines the classes of clinical conceptualizations with explicit rules and constraints for how to apply the computer interpretable formalisms known as knowledge asset meta-models (Profiles on Definitional Resources in FHIR).

</summary>

<img src="CPG-06.03-DiseaseProcess.png" alt="image_tooltip" class="img-responsive img-rounded center-block"/>

</details>

<details open>

<summary>

FIG. 56.  Lastly, the knowledge architecture team defines the relationships, rules, and constraints within and between the various knowledge assets in the knowledge asset ontology.

</summary>

<img src="CPG-12.07-GdlnDef.png" alt="image_tooltip" class="img-responsive img-rounded center-block"/>

</details>


### Conceptual Perspective on the CPG Knowledge Architecture

This brings us to the conceptual knowledge architecture for the CPG.  It is the product of the concepts from a guideline and its recommendations described in the section on the [Guideline Development](documentation-approach-04-guideline-development.html) Process <!-- link to - 04 !--> together with the principles and best practices discussed previously in this section as well as the approach to developing the knowledge architecture described just above.

The conceptual perspective on the CPG knowledge architecture describes the domain- oriented descriptions of the knowledge assets or artifacts, together with their properties and relationships. In the [Methodology](methodology.html) Section, <!-- link to Methodology Section !--> these knowledge assets are concretized and realized as explicit computable knowledge assets in [CPG Profiles](profiles.html) on FHIR Resources using an established approach from the HL-7 FHIR [Clinical Reasoning Module](https://www.hl7.org/fhir/clinicalreasoning-module.html).

Details of the CPG Knowledge Architecture ([Conceptual Perspective](documentation-approach-12-conceptual-knowledge-architecture.html)) <!-- link to - 12 !--> has an entire section dedicated to it with subsections dedicated to specific separations of concerns and CPG Concepts.

The CPG knowledge architecture provides the framework through which the knowledge engineering team realizes the guideline, its recommendations, and their various features through explicit formalisms and ultimately as information, which brings us to:

### Knowledge Architecture in FHIR for the CPG-IG

As discussed in the [Knowledge Asset](documentation-approach-06-02-knowledge-assets.html) <!-- link to - 06.02 !--> section previously, the asset metamodel (definition of structure including metadata, attributes, requirements and constraints) can be defined using an approach to [Knowledge Artifact Representation in FHIR](https://www.hl7.org/fhir/clinicalreasoning-knowledge-artifact-representation.html) described in the Clinical Reasoning Module.  In FHIR, the means of defining asset metamodels is the FHIR [StructureDefinition Resource](https://www.hl7.org/fhir/structuredefinition.html) (though it is also used for definitions of resources other than knowledge assets including all request (e.g. orders) and event (e.g. clinical data element) resources).  Furthermore, the [PlanDefinition Resource](https://www.hl7.org/fhir/plandefinition.html) (based on the HL-7 Knowledge Artifact Specification) is a base, or more generic, asset meta-model definition that may be profiled using StructureDefinition to further define additional asset meta-models through profiling.

Given the Conceptual Perspective on the CPG [Knowledge Architecture](documentation-approach-12-conceptual-knowledge-architecture.html), <!-- link to - 12 !--> the principles, best practices, and development approaches described above together with the approach to [Knowledge Artifact Representation in FHIR](https://www.hl7.org/fhir/clinicalreasoning-knowledge-artifact-representation.html) (described in part in the section in this implementation guide on Knowledge Assets), the [CPG FHIR Profiles](profiles.html) as described and defined in this guide, are the concentration of the CPG Knowledge Architecture- the formal representations of the metamodels used to express the CPG Concepts described in the conceptual knowledge architecture.  The [Methodology](methodology.html) section <!-- link to Methodology Section !--> of this guide describes how individual knowledge assets or artifacts are realized using these CPG Profiles.

### Boundary Issues at the Separations of Concerns

As described above, it is critical in knowledge-driven approaches to identify accurate, representative, unambiguous, and useful domain knowledge abstractions and for these abstractions themselves to respect domain-oriented separations of concerns.  These separations of concerns must be respected within and across the domain conceptualizations, as well as between knowledge formalizations and across the translations or transformations thereof.  A related principle is fidelity to domain conceptualizations, where oversimplification leads to unwieldy and value-diminishing complexity to correct for gaps in fidelity, while appropriate complexity to align with the domain yields optimal formalizations.

However, healthcare by its nature seems to have significant ambiguity, particularly when a highly educated and trained healthcare professional is trying to describe how they think and work to a specially trained and educated information technology professional.  In fact, this is why many knowledge engineers have dual training in both domains or the science that explicitly addresses the intersection (e.g., biomedical and clinical informaticians).  Even for well-trained and experienced knowledge engineers and architects can have difficulty with boundary issues at the separation of domain concerns.

One of the most critical principles in dealing with these boundary issues is to identify them, recognize that they exist, and then formulate a plan to explicitly address them.   To a large extent, this takes experience and faithfully adhering to knowledge architecture principles and best practices.  While there are almost always trade-offs to be made as well as timelines to be met that must be further taken into consideration, the close, careful, and thoughtful attention to these boundary issues helps improve time and effort, value created, scalability, and adaptability.  This is why architecting should happen before engineering and building.

There are several best practices for addressing these boundary issues once they have been identified.  One such best practice is to use “Layers of Abstraction”.  Creating abstraction layers is a means of hiding much of the working details of a component, allowing the separation of concerns to facilitate both interoperability within the knowledge architecture and across implementations thereof.  In fact, the “concerns” themselves can be thought of as creating abstraction layers. Often when modeling or architecting a “concern”, one creates fit-for-purpose features for that concern that themselves may be abstracted, which specifically address boundary issues with ‘adjacent’ concerns with which it must interact.

In some cases, the boundary issue itself becomes fully abstracted as its own concern.  Interfaces, or a means of interacting, between concerns may be thought of as one such way of abstracting the concern of the boundary issue itself.  In other cases, shared concepts (e.g., as information objects) are a means of addressing the boundary.  In other words, some lower-level domain concepts may be used by, used in, and/or belong to more than one concern but often playing somewhat different roles.

Boundary issues specific to the CPG Knowledge Architecture are discussed in the subsection on Separating and Defining [Case, Plan, and Workflow](documentation-approach-12-02-separating-and-defining-case-plan-and-workflow.html). <!-- link to - 12.02 !-->

### Knowledge Architecture and Knowledge Content Management System

The knowledge architecture is typically developed and manifested in a knowledge content management system since that is where all of the knowledge asset definitions (metamodels), knowledge asset metadata, knowledge asset content, the knowledge asset ontology, and the various features that leverage these capabilities reside.  A knowledge content management system can further afford the ability to evolve and update the knowledge architecture and all its derivatives, while giving feedback to the knowledge architecture team on the impact of such changes.  Likewise, additional knowledge asset definitions (metamodels including metadata model), can be developed in the knowledge content management system.

For more on the manifestation of the knowledge architecture in a content management system and means by which it might be informed and or evolved, see:

*   See section on [Knowledge Representation](documentation-approach-05-03-knowledge-representation.html) <!-- link to - 05.03 !--> in Knowledge Engineering for more details on Knowledge Content Management Systems
*   See subsection on Leveraging a Knowledge Base (Knowledge Content Management System) at the bottom of the section Agile CPG [Development Approach](documentation-approach-05-06-agile-cpg-development-approach.html) <!-- link to - 05.06 !-->


---

// File: input/pagecontent/documentation-approach-06-knowledge-representation.md

Knowledge representation is a surrogate, a substitute for the thing itself, that allows for reasoning (human and computational) about the “thing”.  A knowledge representation may be thought of on a continuum of successive degrees of readability, of ability to reason over, and formalism (e.g., to compute).


In this section we will cover:

*   [Levels of Representation Framework (degrees of formalism/ computability)](documentation-approach-06-01-levels-of-knowledge-representation.html)
*   [Knowledge Assets (discrete representations with a purpose)](documentation-approach-06-02-knowledge-assets.html)
    *   Asset Metadata (information about the assets and knowledge base)
*   [Knowledge Architecture (designing and defining the types and nature of assets)](documentation-approach-06-03-knowledge-architecture.html)

[**Levels of Knowledge Representation Framing:**](documentation-approach-06-01-levels-of-knowledge-representation.html) <!-- Link to 06.01 !-->

### Approach

The approach taken by this implementation guide is to consider three broad challenges of clinical guideline implementation:

Note that the levels of knowledge representation are a continuum, with discrete categories introduced in the methodology to help inform discussions and communicate the concepts involved. Typically, the initial guideline content is published in narrative form (L1), but guidelines will often contain diagrams, charts, and other depictions that lean towards semi-structured (L2) representation.

This implementation guide utilizes a previously established clinical decision support (CDS) implementation model to move from a narrative clinical guideline to computable content. This model defines four (4) ‘levels’ of knowledge representation:

<details open>

<summary>

FIG. 45. Knowledge Levels

</summary>

<img src="knowledge-levels.png" alt="image_tooltip" class="img-responsive img-rounded center-block" width="750" hight="334"/>

</details>

As will be discussed further in the Agile CPG development approach (see section on [Knowledge Engineering](documentation-approach-05-knowledge-engineering-overview.html)),<!-- Link to ... !--> these levels of representation may begin to overlap or blur and may not follow an entirely linear or successive progression for sequential development maturation.  Furthermore, tooling capabilities may afford translation across levels of representation and some levels may not be entirely expressed as the tools user interface and internal translation capabilities facilitate traversing these levels.  This will become more evident and described in more detail in the section on the Agile CPG development approach.

<details open>

<summary>

FIG. 46. Levels of Representation in historical CDS sense and as may be adapted for Agile approaches.

</summary>

<img src="CPG-05.06-01.png" alt="image_tooltip" class="img-responsive img-rounded center-block" width="750" hight="287"/>

</details>

[**Knowledge Assets**](documentation-approach-06-02-knowledge-assets.html) <!-- Link to 06.01 !-->

Knowledge assets or artifacts as they are often referred to in FHIR, where an artifact is an instance of an asset.  Assets provide the ability to keep domain logic separated and distinct from other system logic in complex systems.  In this implementation guide we often refer to knowledge assets and knowledge artifacts interchangeably, though the distinction is very relevant the knowledge engineer.

*   Asset Metamodel- its structure- requirements and constraints
*   Content- what goes into the asset “container”
*   Metadata- for detailed section on Knowledge Assets
*   Composite and Derived- see section on Knowledge Assets

### Asset Metamodel

The asset meta-model is a model that essentially describes what is required and/or allowed for a given class of knowledge assets.  In FHIR, the means of defining asset metamodels is the FHIR [StructureDefinition Resource](https://www.hl7.org/fhir/structuredefinition.html) (though it is also used for definitions of resources other than knowledge assets including all request (e.g. orders) and event (e.g. clinical data element) resources).  Furthermore, the [PlanDefinition Resource](https://www.hl7.org/fhir/plandefinition.html) (based on the HL-7 Knowledge Artifact Specification) is a base, or more generic, asset meta-model definition that may be profiled using StructureDefinition to further define additional asset metamodels.  The [Knowledge Artifact Representation in FHIR](https://www.hl7.org/fhir/clinicalreasoning-knowledge-artifact-representation.html), from the FHIR Clinical Reasoning Module, describes how the asset metamodels are realized as FHIR Profiles, but details of its applications to the CPG are described in further detail in this section of the implementation guide.

### Content

Knowledge asset content refers to that which is contained within a specific knowledge asset.  This includes the scoped values or expressions for a specific asset’s metadata, attributes, and other formalisms used to express the knowledge contained within the asset.

### Asset Metadata

Metadata is data that provides information about the knowledge asset.  This may include disk active metadata, structural metadata, administrative metadata, and situating or relational metadata.  The section on [Metadata](https://www.hl7.org/fhir/clinicalreasoning-knowledge-artifact-representation.html#metadata) of the Clinical Reasoning Module on Knowledge Artifact Representation provides a description of how metadata is routinely addressed in FHIR Knowledge Artifact Representations, but details of its applications to the CPG are described in further detail in this section of the implementation guide.

### Expressions (and/or Languages)

An expression is a computable language for creating a computer-interpretable representation of specific knowledge.  In HL-7 and for the scope of this implementation guide, the expression language used (where it’s able to sufficiently express the intended logic behavior) is the Clinical Quality Language (CQL).

### Declarations

A declaration is an expression of the structural elements of computable logic (e.g. values for attributes and parameters of a knowledge asset) that does not describe how to compute the logic, rather what the logic is.  These are often expressed as static values on the definitional assets as opposed to be buried deep in the expressions.  Expressions (or languages) can then evaluate and/or set these declarations.

### Composite Assets

No single representation or expression can sufficiently and/or appropriately describe the nature and behavior of many domain concepts using computable formalism.  A CPGPathway, CPGStrategy, and CPGRecommendation are examples of composite assets in this implementation guide.

### Derived Assets

Many knowledge assets may be derived from other knowledge assets (in part or in whole) as a means to reuse and repurpose the content of the knowledge asset from which they were derived.  For example, a CPGMetric may derive much of its content from a CPGRecommendation.  Derived knowledge assets may be wholly or partially derived from other assets.

### Translation Within and Between Knowledge Representations

Some knowledge assets may be represented using multiple alternative formalisms (expressions and declarations), yet express the same meaning and intent resulting in identical behavior when reasoning over identical inputs (data elements).  This equivalence in computational intent and behavior is known as isopragmatism.

### Curating and Managing Knowledge Assets in a Large Corpus (Knowledge Base)

For more on Curating and Managing Knowledge Assets (and their respective knowledge architecture), see sections on Knowledge Representation in [Knowledge Engineering](documentation-approach-05-03-knowledge-representation.html), <!-- Link to 05.03 !--> and Leveraging a Knowledge Base (Knowledge Content Management System) in the [Agile CPG Development Approach](documentation-approach-05-06-agile-cpg-development-approach.html). <!-- Link to -05.06- Leveraging a Knowledge Base (Knowledge Content Management System) !-->

[**Knowledge Architecture:**](documentation-approach-06-03-knowledge-architecture.html) <!-- Link to 06.03 !-->

This section addresses the principles and best practices of knowledge architecture as well as the approach through which the CPG Knowledge Architecture was and continues to be developed including an overview of the Conceptual Perspective on the CPG Knowledge Architecture and the means through which it is realized and concretized in FHIR Profiles elsewhere in this implementation guide.  This implementation guide includes this approach to knowledge architecture as its through it, direct interactions with various stakeholders, and through real-world use cases that it will continue to evolve.

Covered in this section:

*   Key Challenges for Knowledge Architecture
*   Best Practices and Needs to be addressed
*   Key Principles and consideration
*   Knowledge Architecture Principles as applied to the CPG
*   Developing the CPG Knowledge Architecture
*   **Conceptual Perspective on the CPG Knowledge Architecture**
*   **Knowledge Architecture in FHIR for the CPG-IG**
*   Boundary Issues at the Separations of Concerns
*   Knowledge Architecture and Knowledge Content Management System

Knowledge architecture is the discipline of information system architecture (Industry, Enterprise, Solution) with a focus on the principles, best practices, means, and mechanisms by which the knowledge assets for the architecture's given domain are managed including: acquiring, representing, stored, and organized.  Knowledge architecture includes defining the types and scopes of the various assets, their metadata, as well as their relations.  In FHIR, this is done through profiling of definitional resources (e.g. plan definition, activity definition) using the StructureDefinition Resource to define metamodels and is enforced largely through a compliance framework and a common approach in tooling to creating these asset type profiles.


---

// File: input/pagecontent/documentation-approach-07-tiers-of-functionality.md

This implementation guide defines three (3) tiers of functionality, very roughly analogous to the tiers of architecture in software engineering:

*   **Data**  (Data Elements)
*   **Logic**  (Clinical Logic)
*   **Forms**  (UI Description and Behavior)

<details open>

<summary>

FIG. 57. Tiers of Functionality

</summary>

<img src="functionality-tiers.png" alt="Tiers of Functionality" class="img-responsive img-rounded center-block" width="750" height="237"/>

</details>

To illustrate these tiers of functionality, consider the following excerpt from a recommendation statement in the CDC Opioid Prescribing Guideline:

**_When prescribing opioids for chronic pain, providers should use urine drug testing before starting opioid therapy_**

The data elements in this recommendation statement are the concepts involved, such as medication prescriptions, opioids, chronic pain, urine drug testing, and opioid therapy.

The clinical logic then describes the behaviors in terms of the data elements, such as “when prescribing opioids for chronic pain”, and “use urine drug testing before starting opioid therapy.”

And finally, the forms descriptions are the user interfaces involved in the implementation of the recommendation, such as an order entry form.

Note that these tiers each have different manifestations at different knowledge levels. At L3, these tiers are formal but still conceptual representations of the content, whereas at L4, these tiers are concretely implemented in software systems. For example, a form at L3 is intentionally silent on the actual presentation layer details, whereas a form at L4 necessarily includes them.  See section on Levels of Representation by Tiers of Functionality

### Data Elements

The data elements provide a computable representation of the concepts and information within  the clinical guideline. The artifacts at this level are represented in FHIR using the following resources:

* StructureDefinition - Specifically, profiles and extensions
* CodeSystem
* ValueSet

Expressing the data elements in a clinical guideline enables the description and exchange of the within the guideline; roughly, the data tier in a traditional 3-tier architecture.  While much logic at the data level is abstracted away behind interfaces (a key benefit of FHIR), one much be careful not to conflate data transformation and clinical business logic, particularly in the case of inferred and/or enriched data elements (e.g. inferred CPGCaseFeatures).  The inference belongs in the Clinical Logic layer.

### Clinical Logic

The clinical logic in a computable guideline provides a formal representation of the behavior involved in the recommendation statements in terms of the data elements. This includes inclusion/exclusion criteria, calculations such as risk scores, public health indicators, or average daily dosage, as well as rules that describe how and when a recommendation applies such as event-condition-action rules. The artifacts at this level are represented in FHIR using the following resources:

* Library
* ActivityDefinition
* PlanDefinition
* Measure

Expressing the clinical logic for a guideline enables application functionality; roughly, the application tier in a traditional 3-tier architecture.

Note to the Knowledge Engineer not to conflate Clinical (business) Logic with either Data (transformation) logic or Forms (user interaction) logic.  Business logic should only be about describing the things that occur in the domain- describing patients (CPGCaseFeatures), formalizing clinician decision logic (CPGRecommendations), orchestrating either of the two, etc. (see Table above).  These are critical separations of concerns to keep in mind as their conflation can cause significant challenges, particularly in a knowledge-based approach- though all Tiers can take advantage of knowledge-based approaches.

### Forms Description

The forms description in a computable guideline describes user interactions and uses both the data elements and clinical logic. The artifacts at this level are represented in FHIR using the following resources:

* Questionnaire
* PlanDefinition

This level involves specifying a conceptual description of the processes involved, as well as the user-interfaces that capture the user’s interactions with the system. Expressing the forms description for a guideline provides a more complete description of the recommendations in a guideline; roughly, the presentation tier in a traditional 3-tier architecture.  Note to the Knowledge Engineer not to conflate Forms logic with Business Logic.  Forms logic should only be about the behavior of the user interaction, though it can and almost always does reuse Business Logic.  This is a critical separation of concerns to keep in mind.


---

// File: input/pagecontent/documentation-approach-08-levels-of-representation-by-tiers-of-functionality.md

A basic approach that may help with addressing appropriate separations of concerns is to consider where certain knowledge engineering artifacts may be situated when considering both tiers of functionality and levels of representation as shown in the table below.

<details open>

<summary>

FIG. 58. Levels of Representation by Tiers of Functionality with Examples (Rhodes,B, Database Consulting Group, 2019).

</summary>

<img src="CPG-Main-LevelsAndTiers.png" alt="Levels by Tiers" class="img-responsive img-rounded center-block" width="750" hight="300"/>

</details>

Across the top are the knowledge levels, from narrative text (Level 1) on the left through successively more structured representations that end with running, executable software at the right (Level 4). At the bottom of the diagram, the data tier (T1) represents the concepts and data elements involved in the guideline. Above that, the logic tier (T2) represents the business and process rules of the guideline, and at the top, the forms or user-interface tier (T3) represents the user interactions with the guideline content  Refer to [Tiers of Functionality](documentation-approach-07-tiers-of-functionality.html) <!-- Link here !--> and [Levels of Representation](documentation-approach-06-01-levels-of-knowledge-representation.html). <!-- Link here !-->

Note that the levels of knowledge representation are a continuum, with discrete categories introduced in the methodology to help inform discussions and communicate the concepts involved. Typically, the initial guideline content is published in narrative form (L1), but guidelines will often contain diagrams, charts, and other depictions that lean towards semi-structured (L2) representation.


---

// File: input/pagecontent/documentation-approach-09-methods-of-implementation.md

This section discusses methods of implementation, as well as conceptual execution semantics for computable artifacts described by this implementation guide.

Once computable representations and expressions of any clinical practice guideline have been developed (as a CPG-IG) they must be implemented and integrated with various clinical and operational information systems (e.g., EHRs, Workflow Apps, Quality and Practice Analytics tools, Quality and Registry Reporting tools, etc.)  Three main factors come into play. The first consideration is where and how these computable expressions and artifacts will be executed- natively withing systems of record, in an external reasoning engine, or translated and reimplemented in target system native logic languages (e.g. rules engines).  The second consideration, which is related to the first, Is how the inferences or insights (e.g. CaseFeatures, Recommendations/Proposals, Metrics) are to be integrated into existing clinical application ecosystems and/or the same or similar workflows supported by these applications.  The third consideration, which further relates to the first two, Is where and how these insights will be manifested in such a way to enable guideline-informed clinical workflows and related healthcare activities.  Partially orthogonal to, but just as important as these three considerations, is the ability to assess and ensure conformance of specific implementations of computable clinical practice guidelines using the specifications and requirements outlined in this implementation guide.

While all of these factors Have implications for the overall level of effort, the methods of implementing knowledge and mechanisms of integration are directly reflected in the overall selection of workflow enablements in a given setting. The last two sections further discuss trade-offs between effort, time to develop, and capabilities enabled (and value that can be derived) when developing a CPG. From very basic context for narrative snippets searchable in a library (or Infobutton from EHR) to full clinical workflow enablement, cognitive support, and pathway tracking (likely via SMART-on-FHIR App or deep EHR integration). CPGs also enable feedback loops with real-world evidence of actual guideline usage and outcomes, and provide a substrate for the evidence ecosystem and a feedforward loop for evidence updates. To support description of, and allow declaration of conformance to, these various capabilities enabled by CPGs, the CPG-IG defines levels of enablement that correlate to work effort, time to delivery, and capabilities enabled.

### Methods of Implementation

Methods of implementation refers to three (3) broad approaches to moving from the computable, structured representation (L3) of guideline content to the executable representation (L4):

1. **Manual**: i.e. Treating the L3 content as a specification
2. **Translation**: Translating the content to another format suitable for execution in a given environment
3. **Native Execution**: Directly executing the L3 content in a clinical reasoning engine that understand the representation

<details open>

<summary>

FIG. 58. Methods of Implementation

</summary>

<img src="methods-of-implementation.png" alt="Methods of Implementation" class="img-responsive img-rounded center-block" width="750" height="385"/>

</details>

Note that there are numerous factors that must be considered as part of the local implementation of guideline content. The intent of the L3 artifacts described in this implementation guide is to ensure that these factors can be appropriately considered and addressed as part of implementation while still providing useful content that can accelerate the process.

#### Manual

Manual implementation involves development of clinical guideline functionality using the computable (L3) content as a set of rigorously specified requirements for the implementation. In the absence of computable (L3) content, this is the only method.

#### Automatic

Automatic implementation involves programmatic translation of the L3 content into an appropriate L4 format. For example, a CQL query may be translated into an equivalent SQL query for execution, or a PlanDefinition may be transformed into a production rule. This approach involves potentially significant effort to build the appropriate tooling but can pay dividends at scale once the tooling is in place.

#### Native

Native implementation involves direct execution of L3 content. For example, a CQL query may be run directly on a native CQL engine. As with the automatic approach, this approach may involve significant initial tooling effort but can dramatically reduce implementation time thereafter. In addition, there are open source reference implementations that support the use of the FHIR Clinical Reasoning module resources. In particular:

* CQL Engine - A java-based native engine for Clinical Quality Language
* HAPI FHIR - A java-based reference implementation of a FHIR Server and Client
* CQF Ruler - A java-based plug-in for the HAPI FHIR server that enables Clinical Reasoning use cases

### Execution Semantics

The knowledge architecture described here builds on the overall workflow patterns established by the base FHIR specification. In particular, activities are modeled as _requests_ and _events_: requests for proposed or planned actions that have not yet occurred, but are intended to be taken, and events for actions that are in progress, or have completed. The following sections detail these activity processing semantics, and how the knowledge architecture described here relies on these semantics to enable effective modeling of clinical reasoning logic.

#### Activity Processing Semantics

In general, activities within a computable practice guideline are modeled as requests that either have not yet occurred, but are proposed or planned, or events that have occurred. Requests have a `status`, typically indicating the level of completeness of the request; an `intent`, representing the level of authorization or certainty with which the request should be taken; and a `doNotPerform`, indicating whether the request is _to perform_ or _not to perform_ the action.

Note that although these elements are described by the base _request_ pattern within FHIR, the request resources do not necessarily follow these patterns exactly. Variability in use cases and scope of the request resources results in variability in how the request pattern is applied. This results in differences in the way the pattern is implemented, but in general, activities in the CPG move through the following basic steps:

1. Activities are proposed as requests with a status of `active` and an intent of `proposal`
2. Proposals that are accepted result in a new _request_, linked to the proposal and with a status of `active` and an intent of `plan`
3. Proposals that are rejected have a Task with a `focus` that references the rejected proposal and a status of `rejected`
4. Accepted proposals (plans) that are _authorized_ result in a new _request_, linked to the plan with an intent of `order`
5. Orders that are _fulfilled_ move to a status of `completed`, and result in the creation of a corresponding _event_ resource
6. Events are typically created with a status of `preparation` or `in-progress`, and the `basedOn` element is used to indicate the request the event is fulfilling
7. In-progress events that are completed move to a status of `completed`
8. In-progress events that are stopped or cancelled move to a status of `suspended` or `aborted`

Note that although this is the general pattern, because of the variability in request resources, the specific pattern for each activity varies slightly, depending on the actual `status` and `intent` values defined for use with each specific resource type.

Note also that an _event_ may be documented directly without a corresponding request, and that with or without a request, the _event_ may be documented as `not-done`, meaning explicitly that the event was not performed for some reason, typically provided via the `statusReason` element.

Following this pattern for a positive recommendation (i.e. a recommendation _to_ perform some activity), we can state the applicability logic generally as:

_If the activity has not been performed (nor documented as not having been performed), and is not proposed, planned, or ordered, then propose the activity_

And similarly, for a negative recommendation (i.e. a recommendation _not to_ perform some activity), we can state the applicability logic generally as:

_If the activity is proposed, planned, ordered, or in-progress (and not documented as not having been performed), and there is no proposal (planned or rejected) to stop or not to perform the activity, then propose stopping and/or not performing the activity_

The [Activity Flow](activityflow.html) topic provides a detailed description of the above process, including how each activity is realized in each FHIR resource.

#### PlanDefinition Processing Semantics

The knowledge architecture presented here uses the PlanDefinition in various ways to represent recommendations, strategies, and pathways. Recommendations are represented with a PlanDefinition playing the role of an _event-condition-action_ rule, while strategies and pathways are represented with a PlanDefinition playing the role of a _workflow-definition_ or _clinical-protocol_. In all these cases, the following execution semantics are used to ensure consistent and meaningful interpretation of knowledge artifacts.

1. PlanDefinitions are hierarchies of _actions_, where each action may have any number of children (including zero)
2. PlanDefinition actions can be related to other actions in the same PlanDefinition using the _relatedAction_ element
3. Although the action element may appear multiple times, there is no assumption of sequence of execution implied by the order of appearance of action elements in a PlanDefinition, consistent with FHIR methodology that order of elements cannot be meaningful unless stated as such in the base resource
4. This means that if required, sequencing must be established by chaining related actions
5. The only way an action can be initiated is by _trigger_, or by being _invoked_ either through a parent or related action
6. In particular, the _timing_ element of actions cannot be used as part of execution semantics (with the exception of pathways and schedules, that are allowed to use timings to establish schedules of expected activities)
7. Related actions can only use the `before-start` relationship, with or without an `offset` to allow for delays
8. Related actions can be cyclic, either directly, or indirectly. (NOTE: This means in particular that execution environments must take care to guard against runaway and infinite loops)
9. Only one action can specify a `trigger`, all other action execution occurs through either child or related actions

In addition, when a request is referenced by a RequestGroup, then its intent must be `option`, and it is treated as part of the overall RequestGroup, implying that the intent of the request is established by the intent of the RequestGroup. For PlanDefinition apply processing, this means the returned RequestGroup will have an intent of `proposal`, while all the referenced requests will have an intent of `option`, and when the "options" are selected by the user or application for processing into a Plan, Order, or Event, they will no longer be part of the RequestGroup, will have an intent of Plan or Order as appropriate, and will be independent requests at that point.

##### Enabled vs Known Content

When used as a knowledge artifact, a PlanDefinition only describes a specific expected process. The cpg-enabled extension is used to indicate that the PlanDefinition is not only registered (or _known_) but is active in the sense that its behavior is active and will be applied by the system.

##### Initiation

Initiation of a PlanDefinition can only occur by _trigger_, as in the conditions defined by the triggering conditions of any action within the PlanDefinition are met, or by _call_, as in the PlanDefinition is invoked directly, or called directly by reference from another PlanDefinition.

##### Recommendations, Strategies, and Pathways

Recommendations are represented as _event-condition-action_ PlanDefinitions, meaning in particular that they can have at most one triggering action, and that they cannot reference other PlanDefinitions.

Strategies are represented as _workflow-definition_ PlanDefinitions, meaning in particular that they can have at most one triggering action (the _start_ action), and that they can reference other PlanDefinitions, but typically do _not_ reference ActivityDefinitions directly.

And finally, Pathways are represented as _clinical-protocol_ PlanDefinitions, meaning that they may have multiple triggering actions, and that they can reference other PlanDefinitions (typically other pathways, strategies, and, less often, recommendations), and they typically do _not_ reference ActivityDefinitions directly.

In addition, pathways (and to a lesser extent, strategies) may have _eligibility_ and _enrollment_. When a pathway or strategy is _invoked_, enrollment is checked.

* Enrollment is _true_ if the Patient has an active episodeOfCare (CPGCase) for this Pathway or Strategy, or with the `partOf` PlanDefinition (an extension on PlanDefinitions to indicate that the Pathway or Strategy is part of another, higher-level Strategy or Pathway).
* Eligibility criteria are evaluated as part of the enrollment process described in the next section.

Note that for Recommendations, "eligibility criteria" is typically expressed as part of the recommendation logic, as inclusion criteria directly.

##### Enrollment

These capabilities support the description of enrollment in various ways, including:

* Automatic: An _enrollment_ ECA rule configured for a pathway can be used to establish enrollment automatically
* Prompted: An _enrollment_ ECA rule with user feedback can be used to establish prompted enrollment
* Manual: The creation of a specific EpisodeOfCare (CPGCase) referencing a Pathway or Strategy can establish enrollment manually

### Orchestration

By applying these execution semantics to the creation of recommendations, strategies, and pathways, orchestration of complex guideline-directed care can be represented. In the most straight-forward case, a guideline consists of:

* A **Pathway** that describes a longitudinal schedule of expected activities
* A set of **Strategy** artifacts that describe the expected activities for specific contexts such as a _visit_
* A set of **Recommendation** artifacts that describe individual activities to be performed

The **Pathway** specifies eligibility and enrollment, the **Strategy** specifies the triggering event, and incorporates all the **Recommendation** artifacts as children.

This pattern allows for a straightforward implementation that only needs to integrate with well-known triggers such as `encounter-start`. Initiation always occurs from that event, and enrollment is checked for any PlanDefinition that is a Pathway or Strategy, or that has a partOf that references a Pathway or Strategy.

Applications can then implement the guideline by tracking and invoking known (and enabled) PlanDefinitions directly. The result of these calls are a set of proposals for actions that should be considered or taken.

### Care Planning

The [Care Planning](documentation-careplanning.html) topic describes expectations for the use of dynamic care planning with computable guideline content.

---

// File: input/pagecontent/documentation-approach-10-mechanisms-of-integration.md

Mechanisms of integration refers to the computational approaches and how capabilities behave, function, and interact as a system to deliver computational inferences and insights resulting from the faithful execution of the computable expressions of a clinical practice guideline (as expressed in using the knowledge artifacts defined in this implementation guide) against patient-specific data.  This includes results and inferences for CPGCaseFeatures, CPGRecommendations/CPGProposals, CPGMetrics, CPGeCaseReports, CPGCasePlanSummaryViews, and the results of other derived artifacts.  These inferences include individual resources and, as importantly, the relationships between them.

Clearly, the mechanisms of integration are highly correlated to the methods of implementing the knowledge of artifacts.  For instance, If the knowledge artifacts are directly ingested or imported by the systems of record or use (e.g., EHRs), the mechanisms of integrating the inferences or insights are likewise scoped to the context of the capabilities of these systems.  However, if reasoning (execution of knowledge artifacts against patient-specific data) is performed external to these systems of record or use, then there may be several mechanisms by which the resulting inferences or insights may be integrated into these target information systems.  These mechanisms may include reasoning-as-a-service (e.g. CDS Hooks), Data Enrichment (e.g., FHIR PUT/POST, HL7 v2, or numerous standards-based or custom electronic data interchange approaches), as an embedded or workflow-adjacent app (e.g. SMART-on-FHIR), or a “hybrid” approach using some combination of these patterns.

Of note, a hybrid of external and internal reasoning (methods of integration) as well as multiple mechanisms of integration of inferences or insights from external reasoning capabilities may be and often are combined to address the needs and requirements of the local enterprise clinical application ecosystems.

### Direct (Ingestion or Translation of Computable Artifacts)

Direct ingestion or import of the knowledge of artifacts (representations and expressions) is discussed in Methods of Implementation and defers the mechanisms of integrating inferences and insights that result from the execution of these knowledge artifacts to the application within which they are being executed.  Reasoning on these knowledge artifacts and the resulting inferences or insights from their execution against patient-specific data are matters left to these application-specific implementations.  Ingested content may be directly executed or it may be translated into execution languages native to these applications (e.g., rules engines).

Furthermore, some systems of record/use may not be able to directly ingest and/or computationally translate standards-based content.  In these situations, the computable clinical practice guideline representations (artifacts and expressions) together with the knowledge engineering work products used in translation at various levels (packaged and contained in the specific Content-IG ) may serve as an explicit, formal specifications for application analysts and clinical Informaticians to manually translate the guideline into application-native languages and/or build environments (e.g., OrderSet Build tooling).  In this case, clinical reasoning still occurs within the native application, however, testing and validation will need to be done to ensure faithful execution aligned to the intent of the clinical practice guideline. The Test Cases packaged with the Content-IG can be of some utility in this case.

<div>
<img src="integration-content-ingestion.png" alt="Direct ingestion/import" class="img-responsive img-rounded center-block" />
</div>

<p><em>Figure 1</em> Direct ingestion/import of computable clinical practice guideline knowledge representations (artifacts and expressions).</p>

### Reasoning-as-a-Service (on-demand data ingest and insight/inference delivery)

Integration of inferences or insights as a Service is similarly discussed in the related Methods of Implementation.  In this pattern, there is some trigger (e.g. user interface event) in the clinical information system (or application of use) that prompts the system to call a Clinical Reasoning Service that provides the execution capability for the computable representations of the clinical practice guideline.  The application of record/use may require multiple “round trips” to get the clinical reasoning service the data required to make appropriate inferences and then to receive those inferences.  The service may directly provide inferences as data elements, may return a presentation layer (e.g., html), may return a link (href) to launch an external application (e.g. SMART-on-FHIR), or some combination of all three.  Of note, this pattern of integration is typically implemented as on-demand or just-in-time service calls, clinical reasoning, and inference/insight delivery. CDS Hooks is a principle example of this pattern.

<div>
<img src="integration-content-service.png" alt="Clinical Reasoning-as-a-Service" class="img-responsive img-rounded center-block" />
</div>

<p><em>Figure 2</em> An example and pattern of Clinical Reasoning-as-a-Service using CDS Hooks eventing, 'prefetch' of patient data, and response.</p>

### Via Data Enrichment (real-time data ingest and insight/inference delivery)

Another pattern for integration of an external clinical reasoning capability is data enrichment.  In this pattern, there is a real-time, bidirectional interaction between the system of record/use (e.g., EHR) in the clinical reasoning capability with continuous delivery of inferences/insights resulting from the execution of the computable clinical practice guideline representations from the clinical reasoning capability to the system of record/use.  In this mechanism of integration, the clinical practice guideline inferences are computed as new information on a patient is generated and sent to the clinical reasoning capability and persisted in the system of record/use for presentation and/or use for internal decision support logic.  This pattern is a form of “chaining through data” where the guideline-directed inferences are computed when new information is known (or the passage of time as dictated by the guideline specification) and provided to the clinical reasoning capability.  The guideline-directed inferences are then sent to and persisted in the system of record/use for use in various native mechanisms within this system.

In this pattern the execution of the computable guideline representations and integration of the resulting inferences occurs in near real-time.  As inferences are knowable (and data provided to the clinical reasoning capability), they are computed and returned to the system of record/use thus maintaining a persistent record the current state of the patient, including current and recommended care plan in these systems.  These inferences include at least:

* The inferred CaseFeatures that provide comprehensive, detailed descriptions of the patient with respect to the scope of the computable guideline (e.g., condition, procedure);
* Patient-specific recommendations as CPGProposals (e.g., orders or order surrogates with attributes that indicate it is recommended or proposed); and
* The CPGMetrics that provide assessments of compliance with recommendations, adherence to Strategies or the overall Pathway, and/or the status of the patient with respect to intermediate and ultimate goals

Thus, the system of record/use can maintain detailed information about the current and relevant historical state of the patient with respect to the condition or procedure (as scoped by the by the guideline), the current and proposed state of this specific patient’s Care Plan, as well as the state of the patient and their respective care plan with respect to the clinical best practice as specified in the computable clinical practice guideline representations.in this pattern, note that ”state” with respect to the patient (Case), Care Plan, and assessments thereof are maintained in the system of record/use and may either be used as the source of truth for the external clinical reasoning capability and/or maintained concurrent with a data store local to the clinical reasoning capability.

<div>
<img src="integration-content-enrichment.png" alt="Integration via Data enrichment" class="img-responsive img-rounded center-block" />
</div>

<p><em>Figure 3</em> An example and pattern of data enrichment integration using eventing, messaging, bulk transfer, and request patient/response.</p>

### As an Application (data ingest with external reasoning and results presentation)

Another very relevant mechanism of integration for computable clinical practice guidelines is the use of a distinct, fit-for-purpose application (App) that can be manifested adjacent to systems of record/use within clinical workflows (e.g., mobile Apps) or in some cases directly in screens within the system of record/use itself (e.g., in EHR iFrames).  SMART-on-FHIR Apps are an prime example of such a mechanism of integration.  In this pattern, the required data elements are securely accessed from the system of record/use (e.g., EHR) by an external application, the clinical reasoning on the computable guideline representations (artifacts and expressions) occurs with the App itself and/or the App can call an external clinical reasoning capability via services as described above, and the user interaction occurs within the App.  The critical point here is that the system of record/use only provides the required data elements and does not require a means to incorporate the inferences either via services or data enrichment- the inferences about the ”state” of the patient (e.g., inferred CaseFeatures), the state of the patient-specific Care Plan including proposed case (e.g., CPGProposals), and assessments thereof are manifested in the App’s presentation layer (UI).

<div>
<img src="integration-content-application.png" alt="Integration via Application" class="img-responsive img-rounded center-block" />
</div>

<p><em>Figure 4</em> Integration with systems of record/use via a distinct Application (e.g. SMART-on-FHIR App) where the required data elements are provided by the system of record/use, the user interaction (presentation layer) occurs within the App, and the clinical reasoning that executes the computable clinical practice guideline and provides inferences/insights on the patient and care plan may occur either directly within the app itself or the App may call an external clinical reasoning capability as a service as described above.</p>

### Hybrid (combination of approaches (most likely for CPGs))

For many implementations of computable clinical practice guidelines that desire to leverage multiple derivatives and especially if they desire to support a broader clinical quality improvement lifecycle or learning health system, more than a singular mechanism of integration may be required.  This becomes an exercise in Solution Architecture where both a sound understanding of the various Methods of Implementation and Mechanisms of Integration are well understood, as well as the implications for the computable guideline knowledge architecture and even specific content are given thoughtful consideration for how such a solution will impact the overall capabilities, performance, and scalability.

Such a “hybrid” pattern certainly requires understanding the respective patterns chosen from above- where computable content execution or clinical reasoning occurs for respective pieces and parts, or aspects of the computable guideline, but also requires planning and consideration for how these various integration patterns interact with one another.  This may include identifying the sources of truth for required data elements and or specific inferences/insights (e.g. CaseFeatures, Proposals, Metrics) as well as orchestration if clinical reasoning/ knowledge execution occurs in distributed systems.  In many of these cases, one pattern of mechanisms of integration may serve as the principal pattern with others used to supplement and/or build upon.  For several reasons, data enrichment often becomes this principal pattern so that that systems of record/use retain a surrogate for the history of computable guideline execution and can serve as the source of truth. Services, Apps, and internal application capabilities can then leverage this ‘holistic’ data collectively.  It can further make inclusion of and integration with application-native capabilities such as Order Sets and broader decision-support and knowledge base capabilities (e.g. Drug Knowledge Bases) much more feasible.


---

// File: input/pagecontent/documentation-approach-12-01-separations-of-concerns-in-the-cpg.md

Separation of concerns is a design principle that creates a distinct and focused attention on each aspect of the domain or topic. This means that, from each aspect's point of view, the other aspect(s) are irrelevant; but it does not mean that the other aspects are ignored. It is “being one- and multiple-track minded simultaneously.”  (ref <!-- Dijkstra, Edsger W (1982). "On the role of scientific thought". Selected writings on Computing: A Personal Perspective. New York, NY, USA: Springer-Verlag. pp. 60–66. ISBN 0-387-90652-5.; Gossman, William; Lew, Valerie; Ghassemzadeh, Sassan (2019), "SOAP Notes", StatPearls, StatPearls Publishing, PMID 29489268 !--> ).  This concept has been used to address efficient and effective approaches in software engineering, particularly as they pertain to developing larger, more complex information systems. (ref)  The most common application of this principle is to a three-tiered architecture (i.e. data, logic, UI) and corresponds to the tiers of functionality discussed earlier.

<details open>

<summary>

FIG. 68. Illustrating the separation of the Case (patient clinicopathophysiological processes and their manifestations and qualifications thereof), the Plan (the approach to the patient’s current, historical, and potential future state of disease and well-being including medical decision-making), and the Workflow (how the Plan is implemented either through interactions with clinical information systems or through real-world human tasks and activities.

</summary>

<img src="CPG-12-01.png" alt="Separation of concerns" class="img-responsive img-rounded center-block"/>

</details>


In medicine, a very similar principal led Dr. Larry Weed to describe the problem-oriented approach to the medical record and reasoning about patients’ concerns, including the well-known and commonly used approach to the SOAP note (Subjective, Objective, Assessment, and Plan).[<sup>1</sup>](#1) Dr. Weed proposed that physicians were essentially scientists, except that as many scientist pursue a singular (or few) hypotheses throughout there careers, a physician must formulate and assess/test hypotheses for a given patient and often throughout the day and therefore must break each issue down into a concern or problem.  Problem-orientedness and the SOAP note have further been shown to be an effective cognitive framework for assessing and addressing patient concerns.[<sup>2</sup>](#2)  Interestingly, Dr. Weed’s problem-oriented approach and SOAP note do play into the CPG knowledge architecture, though not exclusively.  In healthcare activities, there are at least several related but orthogonal axes on which to separate concerns.

One major axis of separation is by each disease or condition, intervention (e.g., procedure, therapy), and/or diagnostic (e.g., imaging, tests), though these concerns often intersect or interact significantly. Similarly, care setting (e.g., ambulatory, home, inpatient, ED, ICU) and generalized type of care activity (e.g., surveillance, prevention, diagnostic workup, treatment planning, disease and therapeutic response surveillance, recovery/convalescence, survivorship) can be conceptualized further as  separations of concerns.  Many of these separations are addressed through the scoping exercise of the guideline development group and a given guideline intentionally focuses on a singular topic or area of concern. This separation of concerns may be addressed by entirely distinct CPG’s or by Strategies within individual CPG’s.  Relationships or interactions between separate CPG’s (or Strategies) may be addressed at the level of each separation (e.g., Plan-to-Plan, Case-to-Case) across CPG’s or by explicitly referencing features within a given separation of one CPG and following the same patterns of interactions between separations.  The latter should be done explicitly (e.g., by referencing and including the requisite Case Features within all CPG’s whose Plan’s need to reason over them).

Another major axis of separation is by kind of process, including: 1) patient clinicopathological (i.e., pathophysiological and correlated clinical manifestations) processes, inclusive of normal physiology (CPGCase); 2) clinical decision-making and corresponding care processes as abstract from specific care settings (CPGPlan); and 3) care delivery process or clinical workflow by which the care processes are carried out in the context of a specific care setting where multiple patients and healthcare professionals undergo, situational activities, which may be inclusive of clinical information system or EHRs.  The CPG-IG knowledge architecture is designed to respect the separation of these concerns as discussed below.

A third major axis of separation of importance to the CPG implementation guide is significantly related to the clinical workflow separation mentioned above, which itself may be separated into the real-world care delivery activities, those activities that are carried out in the context of clinical information systems (e.g., EHRs), and the means of interacting and relating to the Case and Plan.  This separation is covered in further detail in the section on [Workflow and Common Pathway](documentation-approach-12-06-cpg-common-pathway.html) <!-- Link to 12.06 !--> in this implementation guide.

---
<a id="1">1</a>: Jaroudi, Sarah; Payne, J. Drew DO Remembering Lawrence Weed: A Pioneer of the SOAP Note, Academic Medicine: January 2019 - Volume 94 - Issue 1 - p 11 doi: 10.1097/ACM.0000000000002483

<a id="2">2</a>: Am Med Inform Assoc. 2014 Nov; 21(6): 964–968. Published online 2014 May 28. doi: 10.1136/amiajnl-2014-002776


---

// File: input/pagecontent/documentation-approach-12-02-separating-and-defining-case-plan-and-workflow.md

This section provides an overview of the specific separations of concerns in the CPG implementation guide as well as some details of their respective boundary issues.  An overview of each separation is covered here and in more detail in individual sections that include:



*   Case
*   Plan
*   Workflow
*   Boundary Issues between Separations (covered below)

<details open>

<summary>

FIG. 69. Illustrating the separation of the Case (patient clinicopathophysiological processes and their manifestations and qualifications thereof), the Plan (the approach to the patient’s current, historical, and potential future state of disease and well-being including medical decision-making), and the Workflow (how the Plan is implemented either through interactions with clinical information systems or through real-world human tasks and activities).

</summary>

<img src="CPG-12-01.png" alt="Separation of Concerns" class="img-responsive img-rounded center-block" width=300/>

</details>

### [Case](documentation-approach-12-04-cpg-case.html) <!-- link to 12.04 !-->

From the domain perspective, a case is conceptualized as the contextually relevant information oriented to clinically meaningful descriptions of an individual patient’s current and historical state of health, disease, and risks.  The case includes a comprehensive, detailed description of the current and relevant historical clinicopathological presentation of the patient.  Key information to sufficiently summarize the case for the purpose of making appropriate and timely medical decisions in a given situation are often referred to as pertinents (e.g., positive and negative pertinents).  Details for the [CPGCase](documentation-approach-12-04-cpg-case.html) <!-- link to 12.04 !--> are covered in this linked section.


### Plan <!-- link to 12.03 !-->

Within the healthcare domain, the providers formulate an approach, or plan, for how they intend to address the health, well-being, and active clinical concerns of the patient, taking into account the patient’s goals and preferences.  The plan includes current interventions, takes into account prior and current response to those interventions, and formulates an approach to assess and address all elements of the patient’s state of health and disease.  A plan consists of requesting (e.g., ordering, prescribing, scheduling) medications, procedures, diagnostics (e.g., laboratory and imaging, and other tests), and appointments (e.g., referrals and consults).

A plan takes into consideration existing or potential complications, side effects or adverse events for various interventions, and worsening signs and symptoms to watch for, as well as the means to mitigate and/or address potential adverse events.  The plan typically addresses each item in a differential diagnosis, and since many patients have multiple conditions, a plan is developed for each problem, including considerations for the severity and urgency needed to be addressed as well as interactions between conditions and/or their existing and planned interventions. A plan often mentions next steps and/or expectations for information (e.g., a pending lab result) and expected/possible/likely decisions to be made.

#### Plan, Planning, and Care Plan

There exists a fine distinction between and relationship among a plan for best practice care across a population and/or subpopulations; the working care plan for a specific patient by a care team and the care team's cognitive, collaborative, and often poorly coordinated processes of formulating a patient-specific care plan.  This latter planning process utilizes, in part, best practice guideline recommendations in the context of patient-specific goals and preferences as well as other conditions and considerations, and awareness of the situational factors of the patient’s current and historical state in the context of their real-world setting.

The patient-specific plan (i.e., [Care Plan](documentation-approach-12-05-cpg-careplan.html) <!-- link to 12.05 !-->) in most healthcare settings can be found across the plan section of current and recent instances of clinician documentation, but must be aggregated across all care team members (e.g., primary team, consulting teams, and documentation from various healthcare professionals), as well as recent, active, and initiated orders or prescriptions or the resulting fulfillment (e.g., medication administration record).

In the CPG,  the concept of a plan as a separated concern is further divided into the abstracted, more generalized reasoning and rationale for determining the best course of action for a patient (e.g., recommendations, strategies, pathways) formalized as logic in the [Plan](documentation-approach-12-03-cpg-plan.html) <!-- link to 12.03 !--> and the patient-specific past, current, and likely course of action (e.g., proposals, requests, and fulfillments of those requests) called a [Care Plan](documentation-approach-12-05-cpg-careplan.html) <!-- link to 12.05 !--> (described further below) formalized as data elements in the Care Plan. Though there are use cases where have both in context is of considerable value as is described in the [CPGCasePlanSummeryView](documentation-approach-12-07-cpg-derivative-and-related-assets.html). <!-- link to 12.07 !-->


### Workflow

Workflow, an often overloaded term in the healthcare domain, refers to the activities in real-world healthcare delivery settings, the human-computer interaction activities which are carried out in the context of clinical information systems (e.g., EHRs), and even some of the interaction within and between those systems.  This often refers to human task flow, information flow, and patient flow.  Clinical workflow is the description, abstraction, or depiction of clinical work that includes the physical, cognitive, coordination, and computational tasks or activities carried out by individual and teams of clinicians along with other staff and various resources using specialized knowledge, vast amounts and varieties of information, and numerous tools or artifacts collectively to achieve the goal of delivering the safest and highest quality care to individual patients as well as populations of patients or the broader public.  Clinical work occurs in a broader system, social, legal, regulatory, and professional context that can greatly influence how this work is carried out.

The CPG-IG explicitly does not address, local workflows due to their significant variation, complexity, and need for consideration for local factors (e.g., specific resources and resource type, policies, customized or localized tooling), as well as to avoid conflating detailed clinical workflow descriptions/definitions with the flow of abstract clinical activities often necessary to describe as part of the care process in guideline recommendations.  This topic is addressed in further detail in the subsection on Workflow and the [Common Pathway](documentation-approach-12-06-cpg-common-pathway.html). <!-- link to 12.06 !-->


### Boundary Issues at the Separation of Domain Concerns

As discussed in the section on [Knowledge Architecture](documentation-approach-06-03-knowledge-architecture.html), <!-- link to 06.03 !--> it is critical in knowledge-driven approaches to identify accurate, representative, unambiguous, and useful domain knowledge abstractions and for these abstractions themselves to respect domain-oriented separations of concerns.  These separations of concerns must be respected within and across the domain conceptualizations, as well as between knowledge formalizations and across the translations or transformations thereof.  A related principle is fidelity to domain conceptualizations, where oversimplification leads to unwieldy and value-diminishing complexity to correct for gaps in fidelity, while appropriate complexity to align with the domain yields optimal formalizations.

One of the most critical principles in dealing with these boundary issues is to identify them, recognize that they exist, and then formulate a plan to explicitly address them.   There are several best practices for addressing these boundary issues once they have been identified.  One such best practice is to use “Layers of Abstraction”.  Creating abstraction layers is a means of hiding much of the working details of a component, allowing the separation of concerns to facilitate both interoperability within the knowledge architecture and across implementations thereof.  In fact, the “concerns” themselves can be thought of as creating abstraction layers. Often when modeling or architecting a “concern”, one creates fit-for-purpose features for that concern that themselves may be abstracted, which specifically address boundary issues with ‘adjacent’ concerns with which it must interact.

#### Examples of Boundary Issues in the CPG

*   **Workflow:** The CPG implementation guide addresses generalized or abstract workflow, not real-world local workflow, and the work done within and across clinical information systems (e.g., EHRs, etc.).  More on this separation may be found, in part, in the subsection on Workflow and the [Common Pathway](documentation-approach-12-06-cpg-common-pathway.html). <!-- link to 12.06 !-->  Workflow may be further addressed through shared information (e.g., CPGCaseFeatures) and reuse of the same standards for clinical information system activities (e.g., FHIR Requests and their lifecycle, task, and workflow status) and workflow enablements (e.g., Adaptive Forms, CDS Hooks, etc.).
*   **Clinical Assessment:** is it part of the Case or the Care Plan?  Clinical Assessments may be referenced by each.  In clinical practice, the Assessment (i.e., the “A” from the SOAP note), called the ClinicalImpression in FHIR ([FHIR ClinicalImpression Resource](https://www.hl7.org/fhir/clinicalimpression.html)), provides the clinician’s highest level summation of the state of the patient’s clinical course including what problem(s) may be affecting the patient just before planning the treatments or management strategies are best to address the patient's condition (clinicopathophysiological state) as part of the Plan (or patient-specific Care Plan).  As such, there is a succinct clinical summarization of the Case from a clinicians perspective.  Furthermore, it typically has significant clinician-formulated implications (stated or implied) for their judgement on both what needs done for the patient and/or how the patient is responding to interventions and thus is very relevant to the Care Plan.
*   **Proposals:** Proposals (patient-specific recommendations), resulting or related requests (orders, prescriptions), and their resulting event (administrations, results, encounters))- are they part of the Case or the Care Plan?  Requests and their ‘resulting’ and/or related Events go into both.  Proposals are scoped to the Care Plan in the CPG.. However, indicators (i.e., CPGMetrics) may qualify patient-specific guideline recommendations (i.e., CPGProposal) compliance or adherence or how the Case is ‘performing’ with respect to the ‘Plan’.  As discussed elsewhere (see CPGMetric in subsection on [Derived & Related Assets](documentation-approach-12-07-cpg-derivative-and-related-assets.html) <!-- link to 12.07 !--> ), these patient-specific indicators may be treated as CPGCaseFeatures and thus part of the Case.
*   **Plan or Workflow:** the CPGPlan is focused on what to do for the patient, while issues of how to specifically implement that plan within local workflows and clinical information systems is outside the scope of this implementation guide though some implications are addressed in the section of [Knowledge Implementation](documentation-approach-05-05-knowledge-implementation.html). <!-- link to 05.05 !--> However, as described above, some implications of clinical information system workflow and abstract workflow are addressed as described in the subsection on [Common Pathway](documentation-approach-12-06-cpg-common-pathway.html). <!-- link to 12.06 !-->
*   **Case and Workflow:** while much patient-level information (i.e., Case Features) contains information or metadata about local clinical workflow (e.g. performer, timing) and some aspects of local clinical workflow impact certain aspects of patient-level Requests and Events (e.g. timing and availability), for the scope of this implementation guide, such information is expressed within the data elements or resources as scoped by FHIR Resources, while relevant inferences about such information are addressed within their appropriate concerns.


---

// File: input/pagecontent/documentation-approach-12-03-cpg-plan.md

The Plan describes what treatments, test, consults and other interventions need done to address a particular clinical concern (e.g., a disease or condition, recovery from a procedure, prevention including secondary and tertiary prevention, contingencies for possible complications), in the case of the CPG, the concerns as scoped by the guideline and its recommendations.  The Plan in the CPG context, is scoped to all patients in a cohort as defined by the eligibility criteria and the patient-specific plan is manifested as a Care Plan as discussed in detail in another section on the [CPGCarePlan](documentation-approach-12-05-cpg-careplan.html). <!-- link to - 12.05 !-->

Covered in this section:

*   **Recommendations**
    *   Separating Decision Logic from Patient Descriptive Logic
    *   As a profiled FHIR ECA Rule
    *   Directionality and Strength of a Recommendation
    *   Quality of Evidence and Evidence for Recommendations
*   **Strategies**
    *   As a profiled FHIR ECA Rule
*   **Pathways**
    *   As a profiled FHIR PlanDefinition
    *   Eligibility
    *   Enrollment
        *   CPGPathwayEnrollmentCriteria as a Profiled ECA Rule
    *   As a “Composite” Asset

<details open>

<summary>

FIG. 70. The top third illustrates the conceptualization of the CPGPlan consisting of the CPGPathway Definition, CPGStrategyDefinition, and CPGRecommendation Definition.

</summary>

<img src="CPG-12-02.png" alt="CPG PLan" class="img-responsive img-rounded center-block"/>

</details>


The plan, in the CPG context, as described above in “Separation of Concerns,” addresses how the care team intends to address the active clinical concerns of a class of patients, given a set of clinical parameters (described further in  the case features and decision logic discussed below).  However, the CPGPlan is constrained to the set of clinical interventions (e.g., orders/requests) scoped by a specific CPG.  This includes the guideline recommendations, the strategies for combining guideline recommendations, and the decision logic for each recommendation, for the strategies for combining recommendations, and for how the overall guideline or pathway combines or orchestrates all of the recommendations and strategies.  As described in the “Methodology” section, one might consider separating the expression logic from the decision logic solely scoped for each CPGRecommendation and CPGStrategy in separate libraries as well as maintaining a separate library for decision and orchestration logic that is employed across various parts of the CPGPathway.

<details open>

<summary>

FIG. 71. The Plan describes Recommendations for best practice care including many aspects of the clinical decision-making processes in the context of patients’ current and historical state (i.e., Case, and scoped Case Features); Strategies for addressing key clinical issues that may require decisions, planning, and orchestration across multiple recommendations; and an overall Pathway that similar coordinates across Strategies and Recommendations to be applied to individual patients in the broader collective of the Case and its Case Features resulting in a patient-specific Care Plan.  The Plan is “definitional” and is represented by [FHIR Resources that follow the Definition](http://hl7.org/fhir/definition.html) pattern.  If logic describes what to do for a patient, it very likely belongs in the Plan.

</summary>

<img src="CPG-Main-Plan.png" alt="image_tooltip" class="img-responsive img-rounded center-block"/>

</details>


### Recommendations

As described in the “Guideline Development” section, recommendations are proposals pertaining to the best course of action put forth by an authoritative source or body related to a condition, procedure, clinical decision, or activity.  CPGRecommendations are the formalization of a singular narrative guideline recommendation.  CPGRecommendations formalize and make explicit the clinical activity to be taken or not to be taken (i.e.,  in the case of recommendations with negative directionality (e.g., do not give drug x for patients with condition y)).  Similarly, CPGRecommendations formalize the decision logic or applicability logic to be applied to the requisite set of data elements (CPGCaseFeatures) in order to instantiate the proposed clinical activity resulting in a patient specific recommendation (CPGProposal described in the “Care Plan'' section).  CPGRecommendations include triggering logic for when to evaluate the decision logic.

#### Separating Clinical Decision Logic from Patient Descriptive Logic

An important note to the knowledge engineer to pay special attention to the separation of decision logic about what to do for the patient from description or inferencing logic that describes something about or the nature of the patient (e.g. clinical pathological process, risk, severity, in qualifiers thereof).  This greatly simplifies the decision logic as well as makes the inferences about the patient readily available for other logic and/or other use cases.  This takes particular attention from the knowledge engineer to disambiguate the logic that evaluates the state and/or condition of the patient (or qualifiers thereof) from the logic that describes how a clinician reasons over what to do for the patient.

Several questions the knowledge engineer may ask themselves are: “describe something about the patient?”, “does this qualify the patient’s historical, present, or likely future clinical state or status?”, and “does this decision logic focus on solely evaluating descriptive patient-level variables (as CPGCaseFeatures) and describing what to do or not to do for the patient given these conditions?”

#### CPGRecommendation as a profiled FHIR ECA Rule

A CPGRecommendation is a specialization of a FHIR [Event-Condition-Action (ECA) Rule](https://www.hl7.org/fhir/clinicalreasoning-knowledge-artifact-representation.html#event-condition-action-rule).  An ECA Rule has the syntax “on event, if condition is true, then do action” where the triggering logic and decision logic express the event and condition and the recommendation is expressed as an action, which describes a set of activities to be performed.  These actions may cause more events to occur, which may, in turn, cause other ECA rules to fire.  This chain of actions through a related set of ECA rules provides more complex patterns of recommendations (e.g., escalating dose or switching dose form).  The ECA Rule describes such patterns and will be addressed in the “Methodology’ section.

#### Directionality and Strength of a Recommendation

Guideline recommendations contain attributes or properties for the directionality and strength of recommendation (see GRADES discussion in the “Guideline Development Process” section).  A CPGRecommendation addresses directionality in the semantics of the action or activity and in the expression of the CPGRecommendation decision logic as part of the ECA Rule.  The strength of recommendation is an attribute of the CPGRecommendation profile and carries forward its resulting CPGProposal.

#### Quality of Evidence and Evidence for Recommendations

Just as the recommendations from the guideline development group reference the body of evidence which supports the recommendation, a CPGRecommendation similarly references the evidence sources from which they were derived.  In the CPG-IG, the supporting evidence for a CPGRecommendation is referenced through the [Evidence Resource](https://www.hl7.org/fhir/evidence.html) as described in the EBM-on-FHIR IG.  Moreover, just as a guideline recommendation contextualizes the quality of the evidence (using GRADES as discussed in the “Guideline Development Process” section), a CPGRecommendation and its resultant proposal (CPGProposal) may carry forward the guideline development group’s assessment of the quality of the evidence as an attribute of the CPGRecommendation profile qualifying the references to its respective Evidence Resource(s).   These evidence references provide a provenance for each recommendation and may provide a means to notify guideline developers, downstream consumers (e.g., measure developers), and end users of the CPG when there is an update to relevant evidence that should be considered.

#### Evidence Resource Variables Informing CPG Formalization (Logic and Semantics)

The Evidence Resource includes references to citations (including doi’s) and evidence variables, including population/cohort definitions and their formal expressions, descriptions and semantics for interventions, and other representations for PICOTS information where applicable (see “Guideline Development Process” section for PICOTS description).

These evidence variables may also provide key descriptions or definitions as well as terminologies and expression logic that may be repurposed for or inform the triggering, decision, or orchestration logic (e.g., event, condition) or as semantics (i.e., resource types and their respective terminologies) for a CPGRecommendation, CPGStrategy, or CPGPathway. The evidence variables may contain similar information for the guideline population (from the PICOTS variables for the guideline’s Evidence Resource) that would similarly inform the eligibility criteria for the CPG itself (CPGPathwayEligibilityCriteria).

### Strategies

Strategies are approaches for combining, orchestrating, or associating related guideline recommendations and typically scope to a particular concern addressed within the guideline.  Strategies may be longitudinal, require temporal orchestration, and reuse or repurpose data elements (CPGCaseFeatures) and other components (e.g., the attributes and status of requests and events) of the CPGRecommendations it scopes.

Strategies may or may not arise from explicit or strong recommendations from the guideline on the relationships and/or interdependencies between individual recommendations since the evidence base may not have addressed these issues explicitly; however, the guideline development group may recognize the importance of such interdependencies when formulating the guideline.  Strategies may be communicated in the guideline either explicitly as separate recommendations or may be conveyed through supplemental information such as flow diagrams, decision trees, and/or decision tables.  CPGStrategies are the formalization and compilation of explicit strategies as recommendations or as a requisite means to formalize the relationships, interactions, and potential conflicts between individual recommendations in order to address the requirement of making this set of recommendations implementable.

#### CPGStrategies as a profiled FHIR ECA Rule

A CPGStrategy is also a specialization of a [FHIR ECA Rule](https://www.hl7.org/fhir/clinicalreasoning-knowledge-artifact-representation.html#event-condition-action-rule) as described above in CPGRecommendation.  The triggering, decision, and orchestration logic in a CPGStrategy often not only applies to a requisite set of data elements (CPGCaseFeatures) but also the status and attributes of an instantiated CPGRecommendation as a patient-specific recommendation or proposal (CPGProposal)and/or its resultant clinical activities (e.g., requests) and/or their resultant fulfillments (e.g., events).

### Pathways

Pathways convey the full scope of guideline recommendations in a manner that can be implemented for the purpose of guiding patient care within a singular CPG.  In part, pathways serve a similar yet higher order function as strategies, and serve the function of addressing interdependencies such as decision and orchestration logic across multiple concerns.

#### CPGPathway as a profiled FHIR PlanDefinition

The CPGPathway is a specialization of a FHIR PlanDefinition which contains in its own specialized (sets of) ECA Rules to serve the function of formalizing such logic.  The FHIR PlanDefinition is intentionally fractal by nature and often contains (by reference) numerous other PlanDefinition as well as other definitional resources (e.g., Activity Definitions, Questionnaires, Measures) and libraries for formalizations of logic (FHIR Library Resource).  As such, the CPGPathway furthermore contains and/or references key component assets scoped to the CPG, including all CPGRecommendations, CPGStrategies, and required and scoped CPGCaseFeatures, are dependent upon the respective Library Resources.

#### Pathway Eligibility

Eligibility criteria are the benchmarks that should be met for guideline recommendations to apply for a patient. In order for a patient to quality for the guideline’s scope (see “Guideline Development Process”), they must satisfy appropriate conditions such as the guideline’s population definition (e.g., in its Evidence Resource).  Evidence Resource’s evidence variable for population (from PICOTS) may include formalization of the expression logic for the population and/or the appropriate starting point for the semantics (e.g., data types and terminologies) of the variables necessary for such logic.  Similarly, the eligibility criteria may come from or be the superset of individual recommendation applicability criteria available in their Evidence Resource’s evidence variables for populations.  The CPGPathwayEligibilityCriteria contains the expression logic for eligibility criteria and may create a CPGCaseFeature scoped specifically for the purpose of conveying a time stamped data element expressing the patient’s eligibility status for the specific CPG.

#### Pathway Enrollment

Even though a patient may be eligible for a given guideline, due to patient preferences or mitigating clinical factors, a patient may not necessarily need or want the recommendations of the guideline applied to them (at least at a given point in time).  For a patient to be registered as participating in the full scope of guideline recommendations they must be enrolled as such.  The process of being denoted as participating in guideline-directed care is called pathway enrollment.

##### Auto-Enrollment, Prompted-Enrollment, and Opt-in Enrollment

There are several means and/or combinations of ways by which a patient may be enrolled.  This includes auto-enrollment, prompted-enrollment, and opt-in enrollment.  Auto-enrollment refers to all patients who meet the eligibility criteria, which may or may not be further constrained by additional criteria, automatically being enrolled in the pathway (or guidelines-directed care).  Prompted-enrollment refers to a process through which a care team member is notified that the patient is eligible, often with supplemental data (not limited to that which met the eligibility criteria), in the care team member subsequently taking an action to enroll the patient.  Opt-in enrollment refers to a care team member actively taking the step of enrolling the patient without being prompted.

##### Multi-stage “Filtering” for Appropriateness of Guideline-Directed Care

Often, eligibility and enrollment may be considered a two-step filter, analogous to a screening test (high sensitive, less than ideal specificity) with a subsequent diagnostic test (high specificity) in healthcare.  Furthermore, multiple approaches or combinations of enrollment may need to be considered in order to ensure that a patient is appropriately enrolled in guideline-directed care.  For instance, if a high threshold is met for enrollment, auto-enrollment may be the appropriate approach, followed by prompted enrollment for patients who meet moderate criteria, and lastly patients who do not meet at least a moderate criteria for enrollment may be opted-in.

##### CPGPathwayEnrollmentCriteria as a Profiled ECA Rule

Due to the nature of enrollment and to enable a multistep approach, pathway enrollment is modeled as a profile of an ECA Rule (CPGPathwayEnrollmentCriteria).  As described above, since ECA rules may contain other ECA rules, this readily affords a multistep approach.  The CPGPathwayEnrollmentCriteria may create a CPGCaseFeature scoped specifically for the purpose of conveying a time stamped data element expressing the patient’s enrollment status for the specific CPG (CPGPathwayEnrollmentStatus).  The current and historical status of a patient’s enrollment is of critical importance for medical decision-making and may be used in other CPGPathway logic.

#### CPGPathway as a “Composite” Asset

A CPGPathway serves as the container for all other knowledge assets and/or their references scoped to the full CPG.  These assets may include, but are not limited to, optional components such as: CPGCaseFeatureGroups, CPGCaseSummaries, CPGCasePlanSummaries, and CPGMetrics and contain, reference, and/or be referenced by all scoped assets derived from the CPG such as: CPGMeasures, CPG CasePlanProgressingNotes, and CPGeCaseReports.


---

