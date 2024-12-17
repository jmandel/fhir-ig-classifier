File: repos/HL7_SLASH_v2-to-fhir/sushi-config.yaml

# ╭────────────────────────────────────────────────────────────────────────────────────────────────╮
# │  ACTION REQUIRED: REVIEW AND EDIT THIS FILE TO ENSURE IT ACCURATELY REFLECTS YOUR PROJECT!     │
# │                                                                                                │
# │  This file was generated from your existing project files and will be used for SUSHI           │
# │  configuration from now on. You may delete your package.json as it is no longer needed.        │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯

# ╭─────────────────────────ImplementationGuide-hl7.fhir.uv.v2mappings.json────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see:                                                                    │
# │  http://build.fhir.org/ig/HL7/fhir-shorthand/branches/beta/sushi.html#ig-development           │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.uv.v2mappings
canonical: http://hl7.org/fhir/uv/v2mappings
version: 1.0.0-ballot
name: HL7Version2toFHIR
title: HL7 Version 2 to FHIR
status: active
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg  
    valueCode: oo  
publisher:
  name: HL7 International / Orders and Observations
contact:
  - name: HL7 Orders and Observations Workgroup
    telecom:
      - system: url
        value: http://www.hl7.org/Special/committees/orders
jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#001
description: The HL7 V2 to FHIR Implementation Guide supports the mapping of HL7 Version 2 messages segments, datatypes and vocabulary to HL7 FHIR Release 4.0 Bundles, Resources, Data Types and Coding Systems.
license: CC0-1.0
fhirVersion: 4.0.1

parameters:
  show-inherited-invariants: false
  apply-contact: true
  apply-context: true
  apply-copyright: true
  apply-jurisdiction: true
  apply-license: true
  apply-publisher: true
  apply-version: true

copyrightYear: 2020+
releaseLabel: ballot

pages:
  index.md:
    title: V2 to FHIR
  introduction.md:
    title: Introduction
  mapping_guidelines.md:
    title: Mapping Guidelines
  questions.md:
    title: Questions
  glossary.md:
    title: Glossary
  acknowledgements.md:
    title: Acknowledgements
  analysis.md:
    title: IP Acknowledgements & IG Analysis
  mappings.md:
    title: Mappings
  message_maps.md:
    title: Message Maps
  segment_maps.md:
    title: Segment Maps
  datatype_maps.md:
    title: Datatype Maps
  coding_system_maps.md:
    title: Coding System Maps
  implementation_considerations.md:
    title: Implementation Considerations
  validation.md:
    title: Validation
  test_conversions.md:
    title: Test Conversions
  profiles.md:
    title: Profiles
  antlr_condition_syntax.md:
    title: ANTLR Condition Syntax
  links.md:
    title: Links
  unspecified_mapping.md:
    title: Unspecified Mapping

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To control the menu.xml using this config, uncomment and set the "menu" property.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
# menu:
#   IG Home: index.html
#   V2 to FHIR:
#     Introduction: introduction.html
#     Mapping Guidelines: mapping_guidelines.html
#     Questions for Ballot Review: questions.html
#     Glossary: glossary.html
#     Acknowledgments: acknowledgements.html
#     Links and References: links.html
#   Mapping:
#     Map Index: mappings.html
#     Messages: message_maps.html
#     Segments: segment_maps.html
#     Data Types: datatype_maps.html
#     Coding Systems: coding_system_maps.html
#     Profiles: profiles.html
#   Implementation and Use:
#     Implementation Considerations: implementation_considerations.html
#     Validation of Transformations: validation.html
#     Test Message Conversions: test_conversions.html
#   Artifact Index: artifacts.html
#   Table of Contents: toc.html


---

// File: input/pagecontent/acknowledgements.md

HL7 would like to thank the following individuals for their contributions to this project:

* [Hans Buitendijk](https://www.linkedin.com/in/buitendijk-hans-203599/) - Project Co-Lead - Cerner Corporation
* Craig Newman - Project Co-Lead - Altarum
* [Keith Boone](https://www.linkedin.com/in/keithwboone/) - Publishing Facilitator - Audacious Inquiry
* [Rob Hausam](https://www.linkedin.com/in/robert-hausam-a273aa7/) - OO WG Co-Chair - Hausam Consulting LLC
* Deepak Bansal - Microsoft
* [David Burgess](https://www.linkedin.com/in/david-burgess-272648a4/) - LabCorp
* [Grahame Grieve](https://www.linkedin.com/in/grahame-grieve-952637/)
* [Yatish Gupta](https://www.linkedin.com/in/yatish-gupta-a0053724/) - Google
* [Michael Hansen](https://www.linkedin.com/in/michael-hansen-77b15711/) - Microsoft
* [Ralf Herzog](https://www.linkedin.com/in/ralf-h-91897a146/) - Roche
* [Sajjad Hussain](https://www.linkedin.com/in/contact-sajjad/) - Google
* [Deb Markussen](https://www.linkedin.com/in/deb-markussen-7772046/) - Cerner Corporation
* [Roman Polyanovsky](https://www.linkedin.com/in/roman-polyanovsky/) - Google
* [Jason Suchon](https://www.linkedin.com/in/jason-suchon-5504147/) - Metastar
* [Caitlin Voegele](https://www.linkedin.com/in/caitlin-voegele/) - Microsoft
* [Kathy Walsh](https://www.linkedin.com/in/katherine-walsh-15536145/) - LabCorp
* Danny Wise - Allscripts
* [Robert Worden](https://www.linkedin.com/in/robert-worden-b3a5843/)

If you actively participate in the project, or have contributed content, but you are not listed, please let us know to acknowledge your contributions.



---

// File: input/pagecontent/analysis.md

### IP Acknowledgements & IG Analysis

#### Intellectual Property

{% include ip-statements.xhtml %}

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependencies

{% include dependency-table.xhtml %}

#### Globals

{% include globals-table.xhtml %}


---

// File: input/pagecontent/antlr_condition_syntax.md

The code below contains the ANTLR grammar for Conditions in the V2 to FHIR Implementation
Guide.

```
// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

grammar HL7v2ToFHIRConditions
;

// Not sure if IF and THEN are necessary, they seem redundant
IF
    : 'IF'
;

THEN
    : 'THEN'
;

FIRST_FIELD_DELIM
    : '-'
;

DECIMAL
  : '.'
;

LIST_DELIM
    : ','
;

DIGIT
  : INTEGER
;

STRING
  : '"' STRINGCHAR* '"'
 ;

BINARY_OPERATOR_1
    : 'EQUAL'
    | 'NOT EQUAL'
;

BINARY_OPERATOR_2
    : 'AND'
    | 'OR'
;

LIST_OPERATOR
    : 'IN'
;

NOT
    : 'NOT'
;

VALUED
    : 'VALUED'
;

fragment
INTEGER
  : [0-9]+
  ;

fragment
STRINGCHAR
  : ~["\\]
  | '\\' ["\\]
  ;

DATATYPE
    : [A-Z][A-Z0-9][A-Z0-9]?
;

// HL7v2 element reference rules.
field
    : DIGIT
;

datatype
    : DATATYPE
;

// A nicely structured reference to an HL7v2 element. Do we want to specialize repeated field refs?
v2ref
    : datatype (FIRST_FIELD_DELIM field (DECIMAL field)*)?
;

list
    : '()'                                  # EmptyList
    | '(' v2ref (LIST_DELIM v2ref)* ')'     # RefElementList
    | '(' STRING (LIST_DELIM STRING)* ')'   # StrElementList
    | '(' DIGIT (LIST_DELIM DIGIT)* ')'   # NumElementList

;

constant
  : STRING                                  # ConstString
  | DIGIT (DECIMAL DIGIT)?                  # ConstInt
;

expression
    : expression BINARY_OPERATOR_1 expression # BiOpExpr
    | expression BINARY_OPERATOR_2 expression # BiOpExpr
    | NOT expression                          # UnOpExpr
    | v2ref NOT? LIST_OPERATOR list           # ListExpr
    | '(' expression ')'                      # NestExpr
    | v2ref                                   # RefExpr
    | v2ref NOT? VALUED                       # ExistRef
    | constant                                # ConstExpr
;

// condition is our "root" rule.
condition
    : IF expression
;

Whitespace
    : [ \t]+ -> skip
;
```


---

// File: input/pagecontent/coding_system_maps.md

[//]: # Content after this line will be prepended to the output of the list of coding system maps

The sections below list the table mappings defined by this guide.
Table Mapping is driven by CSV files with specific columns. The use of these columns
is described in the section on [mapping](#mapping) at the bottom of this page.

[//End]: # Content after this marker will be updated during generation

### Chapter 2C  Control|Code Tables

* [User0001](ConceptMap-table-hl70001-to-administrative-gender.html) - Administrative Sex  to FHIR [Administrative Gender](http://hl7.org/fhir/R4/codesystem-administrative-gender.html)
* [User0002](ConceptMap-table-hl70002-to-v3-maritalstatus.html) - Marital Status  to FHIR [V3 MaritalStatus](http://hl7.org/fhir/R4/v3/MaritalStatus/cs.html)
* [HL70003](ConceptMap-table-hl70003-to-encounter-status.html) - Event Type  to FHIR [Encounter Status](http://hl7.org/fhir/R4/codesystem-encounter-status.html)
* [HL70003](ConceptMap-table-hl70003-to-v2-0003.html) - Event Type  to FHIR [V2 0003](http://hl7.org/fhir/R4/v2/0003/index.html)
* [User0004](ConceptMap-table-hl70004-to-encounter-status.html) - Patient Class  to FHIR [Encounter Status](http://hl7.org/fhir/R4/codesystem-encounter-status.html)
* [User0004](ConceptMap-table-hl70004-to-v3-actcode.html) - Patient Class  to FHIR [V3 ActCode](http://hl7.org/fhir/R4/v3/ActCode/cs.html)
* [User0006](ConceptMap-table-hl70006-to-v3-religiousaffiliation.html) - Religion  to FHIR [V3 ReligiousAffiliation](http://hl7.org/fhir/R4/v3/ReligiousAffiliation/cs.html)
* [User0007](ConceptMap-table-hl70007-to-v2-0007.html) - Admission Type  to FHIR [V2 0007](http://hl7.org/fhir/R4/v2/0007/index.html)
* [User0052](ConceptMap-table-hl70052-to-diagnosis-role.html) - Diagnosis Type  to FHIR [Diagnosis Role](http://hl7.org/fhir/R4/codesystem-diagnosis-role.html)
* [User0062](ConceptMap-table-hl70062-to-v3-actreason.html) - Event Reason  to FHIR [V3 ActReason](http://hl7.org/fhir/R4/v3/ActReason/cs.html)
* [User0063](ConceptMap-table-hl70063-to-v3-rolecode.html) - Relationship  to FHIR [V3 RoleCode](http://hl7.org/fhir/R4/v3/RoleCode/cs.html)
* [HL70074](ConceptMap-table-hl70074-to-v2-0074.html) - Diagnostic Service Section ID  to FHIR [V2 0074](http://hl7.org/fhir/R4/v2/0074/index.html)
* [HL70078](ConceptMap-table-hl70078-to-v3-observationinterpretation.html) - Interpretation Codes  to FHIR [V3 ObservationInterpretation](http://hl7.org/fhir/R4/v3/ObservationInterpretation/cs.html)
* [HL70080](ConceptMap-table-hl70080-to-v2-0080.html) - Nature of Abnormal Testing  to FHIR [V2 0080](http://hl7.org/fhir/R4/v2/0080/index.html)
* [HL70085](ConceptMap-table-hl70085-to-observation-status.html) - Observation Result Status Codes Interpretation  to FHIR [Observation Status](http://hl7.org/fhir/R4/codesystem-observation-status.html)
* [User0092](ConceptMap-table-hl70092-to-v2-0092.html) - Re-Admission Indicator  to FHIR [V2 0092](http://hl7.org/fhir/R4/v2/0092/index.html)
* [User0116](ConceptMap-table-hl70116-to-v2-0116.html) - Bed Status  to FHIR [V2 0116](http://hl7.org/fhir/R4/v2/0116/index.html)
* [HL70119](ConceptMap-table-hl70119-to-request-status.html) - Order Control Codes  to FHIR [Request Status](http://hl7.org/fhir/R4/codesystem-request-status.html)
* [HL70123[Queries]](ConceptMap-table-hl70123-queries-to-diagnostic-report-status.html) - Result Status  to FHIR [Diagnostic Report Status](http://hl7.org/fhir/R4/codesystem-diagnostic-report-status.html)
* [User0127](ConceptMap-table-hl70127-to-allergy-intolerance-category.html) - Allergen Type  to FHIR [Allergy Intolerance Category](http://hl7.org/fhir/R4/codesystem-allergy-intolerance-category.html)
* [User0127](ConceptMap-table-hl70127-to-allergy-intolerance-type.html) - Allergen Type  to FHIR [Allergy Intolerance Type](http://hl7.org/fhir/R4/codesystem-allergy-intolerance-type.html)
* [User0127](ConceptMap-table-hl70127-to-v2-0127.html) - Allergen Type  to FHIR [V2 0127](http://hl7.org/fhir/R4/v2/0127/index.html)
* [User0128](ConceptMap-table-hl70128-to-allergy-intolerance-criticality.html) - Allergy Severity  to FHIR [Allergy Intolerance Criticality](http://hl7.org/fhir/R4/codesystem-allergy-intolerance-criticality.html)
* [User0128](ConceptMap-table-hl70128-to-codesystem-reaction-event-severity.html) - Allergy Severity  to FHIR [Codesystem Reaction Event Severity](http://hl7.org/fhir/R4/codesystem-codesystem-reaction-event-severity.html)
* [User0128[original]](ConceptMap-table-hl70128-original-to-v2-0128.html) - Allergy Severity  to FHIR [V2 0128](http://hl7.org/fhir/R4/v2/0128/index.html)
* [User0130](ConceptMap-table-hl70130-to-v2-0130.html) - Visit User Code  to FHIR [V2 0130](http://hl7.org/fhir/R4/v2/0130/index.html)
* [User0131](ConceptMap-table-hl70131-to-v2-0131.html) - Contact Role  to FHIR [V2 0131](http://hl7.org/fhir/R4/v2/0131/index.html)
* [HL70136](ConceptMap-table-hl70136-to-specimen-status.html) - Yes/no Indicator  to FHIR [Specimen Status](http://hl7.org/fhir/R4/codesystem-specimen-status.html)
* [HL70161](ConceptMap-table-hl70161-to-v2-0161.html) - Allow Substitution  to FHIR [V2 0161](http://hl7.org/fhir/R4/v2/0161/index.html)
* [User0162](ConceptMap-table-hl70162-to-v2-0162.html) - Route of Administration  to FHIR [V2 0162](http://hl7.org/fhir/R4/v2/0162/index.html)
* [HL70163](ConceptMap-table-hl70163-to-v2-0163.html) - Body Site  to FHIR [V2 0163](http://hl7.org/fhir/R4/v2/0163/index.html)
* [User0165](ConceptMap-table-hl70165-to-sct.html) - Administration Method  to FHIR [Sct](http://hl7.org/fhir/R4/codesystem-sct.html)
* [HL70185](ConceptMap-table-hl70185-to-v2-0185.html) - Preferred Method of Contact  to FHIR [V2 0185](http://hl7.org/fhir/R4/v2/0185/index.html)
* [HL70190](ConceptMap-table-hl70190-to-address-type.html) - Address Type  to FHIR [Address Type](http://hl7.org/fhir/R4/codesystem-address-type.html)
* [HL70190](ConceptMap-table-hl70190-to-address-use.html) - Address Type  to FHIR [Address Use](http://hl7.org/fhir/R4/codesystem-address-use.html)
* [HL70200](ConceptMap-table-hl70200-to-name-use.html) - Name Type  to FHIR [Name Use](http://hl7.org/fhir/R4/codesystem-name-use.html)
* [HL70201](ConceptMap-table-hl70201-to-contact-point-use.html) - Telecommunication Use Code  to FHIR [Contact Point Use](http://hl7.org/fhir/R4/codesystem-contact-point-use.html)
* [HL70202](ConceptMap-table-hl70202-to-contact-point-system.html) - Telecommunication Equipment Type  to FHIR [Contact Point System](http://hl7.org/fhir/R4/codesystem-contact-point-system.html)
* [HL70203](ConceptMap-table-hl70203-to-v2-0203.html) - Identifier Type  to FHIR [V2 0203](http://hl7.org/fhir/R4/v2/0203/index.html)
* [User0204](ConceptMap-table-hl70204-to-v2-0204.html) - Organizational Name Type  to FHIR [V2 0204](http://hl7.org/fhir/R4/v2/0204/index.html)
* [User0215](ConceptMap-table-hl70215-to-v2-0215.html) - Publicity Code  to FHIR [V2 0215](http://hl7.org/fhir/R4/v2/0215/index.html)
* [User0217](ConceptMap-table-hl70217-to-v3-actpriority.html) - Visit Priority Code  to FHIR [V3 ActPriority](http://hl7.org/fhir/R4/v3/ActPriority/cs.html)
* [HL70272](ConceptMap-table-hl70272-to-v2-0272.html) - Document Confidentiality Status  to FHIR [V2 0272](http://hl7.org/fhir/R4/v2/0272/index.html)
* [User0276](ConceptMap-table-hl70276-to-encounter-reason.html) - Appointment reason codes  to FHIR [Encounter Reason](http://hl7.org/fhir/R4/codesystem-encounter-reason.html)
* [User0277](ConceptMap-table-hl70277-to-v2-0277.html) - Appointment Type Codes  to FHIR [V2 0277](http://hl7.org/fhir/R4/v2/0277/index.html)
* [User0278](ConceptMap-table-hl70278-to-codesystem-appointmentstatus.html) - Filler status codes  to FHIR [Codesystem Appointmentstatus](http://hl7.org/fhir/R4/codesystem-codesystem-appointmentstatus.html)
* [HL70301](ConceptMap-table-hl70301-to-v2-0301.html) - Universal ID Type  to FHIR [V2 0301](http://hl7.org/fhir/R4/v2/0301/index.html)
* [User0315](ConceptMap-table-hl70315-to-v2-0315.html) - Living Will Code  to FHIR [V2 0315](http://hl7.org/fhir/R4/v2/0315/index.html)
* [HL70322](ConceptMap-table-hl70322-to-event-status.html) - Completion Status  to FHIR [Event Status](http://hl7.org/fhir/R4/codesystem-event-status.html)
* [User0335](ConceptMap-table-hl70335-to-v2-0335.html) - Repeat Pattern  to FHIR [V2 0335](http://hl7.org/fhir/R4/v2/0335/index.html)
* [User0364](ConceptMap-table-hl70364-to-v2-0364.html) - Comment Type  to FHIR [V2 0364](http://hl7.org/fhir/R4/v2/0364/index.html)
* [HL70371](ConceptMap-table-hl70371-to-v2-0371.html) - Additive/Preservative  to FHIR [V2 0371](http://hl7.org/fhir/R4/v2/0371/index.html)
* [User0430](ConceptMap-table-hl70430-to-v2-0430.html) - Mode of Arrival Code  to FHIR [V2 0430](http://hl7.org/fhir/R4/v2/0430/index.html)
* [User0432](ConceptMap-table-hl70432-to-v2-0432.html) - Admission Level of Care Code  to FHIR [V2 0432](http://hl7.org/fhir/R4/v2/0432/index.html)
* [User0443](ConceptMap-table-hl70443-to-v3-participationtype.html) - Provider Role  to FHIR [V3 ParticipationType](http://hl7.org/fhir/R4/v3/ParticipationType/cs.html)
* [HL70444](ConceptMap-table-hl70444-to-v2-0444.html) - Name Assembly Order  to FHIR [V2 0444](http://hl7.org/fhir/R4/v2/0444/index.html)
* [HL70482](ConceptMap-table-hl70482-to-v3-rolecode.html) - Order Type  to FHIR [V3 RoleCode](http://hl7.org/fhir/R4/v3/RoleCode/cs.html)
* [User0485](ConceptMap-table-hl70485-to-request-priority.html) - Extended Priority Codes  to FHIR [Request Priority](http://hl7.org/fhir/R4/codesystem-request-priority.html)
* [HL70487](ConceptMap-table-hl70487-to-v2-0487.html) - Specimen Type  to FHIR [V2 0487](http://hl7.org/fhir/R4/v2/0487/index.html)
* [HL70488](ConceptMap-table-hl70488-to-v2-0488.html) - Specimen Collection Method  to FHIR [V2 0488](http://hl7.org/fhir/R4/v2/0488/index.html)
* [HL70490](ConceptMap-table-hl70490-to-v2-0490.html) - Specimen Reject Reason  to FHIR [V2 0490](http://hl7.org/fhir/R4/v2/0490/index.html)
* [HL70528](ConceptMap-table-hl70528-to-v3-timingevent.html) - Event Related Period  to FHIR [V3 TimingEvent](http://hl7.org/fhir/R4/v3/TimingEvent/cs.html)
* [HL70550](ConceptMap-table-hl70550-to-v2-0550.html) - Body Parts  to FHIR [V2 0550](http://hl7.org/fhir/R4/v2/0550/index.html)
* [HL70912](ConceptMap-table-hl70912-to-practitioner-role.html) - Participation  to FHIR [Practitioner Role](http://hl7.org/fhir/R4/codesystem-practitioner-role.html)
<h2 style='--heading-prefix: ""' id='mapping'>Mapping</h2>
{% include table_mapping.md %}


---

// File: input/pagecontent/datatype_maps.md

[//]: # Content after this line will be prepended to the output of the list of datatype maps

The sections below list the data type mappings defined by this guide.
Data Type Mapping is driven by CSV files with specific columns. The use of these columns
is described in the section on [mapping](#mapping) at the bottom of this page.

[//End]: # Content after this marker will be updated during generation

### Chapter 2A  Control|Data Types

* [CE](ConceptMap-datatype-ce-to-codeableconcept.html) - Coded Entry to FHIR [CodeableConcept](http://hl7.org/fhir/R4/datatypes.html#codeableconcept)
* [CF](ConceptMap-datatype-cf-to-codeableconcept.html) - Coded Element With Formatted Values to FHIR [CodeableConcept](http://hl7.org/fhir/R4/datatypes.html#codeableconcept)
* [CNE](ConceptMap-datatype-cne-to-codeableconcept.html) - Coded With No Exceptions to FHIR [CodeableConcept](http://hl7.org/fhir/R4/datatypes.html#codeableconcept)
* [CNN](ConceptMap-datatype-cnn-to-practitioner.html) - Composite Id Number And Name Simplified to FHIR [Practitioner](http://hl7.org/fhir/R4/practitioner.html)
* [CQ](ConceptMap-datatype-cq-to-quantity.html) - Composite Quantity With Units to FHIR [Quantity](http://hl7.org/fhir/R4/datatypes.html#quantity)
* [CQ](ConceptMap-datatype-cq-to-code.html) - Composite Quantity With Units to FHIR [code](http://hl7.org/fhir/R4/datatypes.html#code)
* [CQ](ConceptMap-datatype-cq-to-decimal.html) - Composite Quantity With Units to FHIR [decimal](http://hl7.org/fhir/R4/datatypes.html#decimal)
* [CQ](ConceptMap-datatype-cq-to-unsignedint.html) - Composite Quantity With Units to FHIR [unsignedInt](http://hl7.org/fhir/R4/datatypes.html#unsignedint)
* [CWE](ConceptMap-datatype-cwe-to-annotation.html) - Coded With Exceptions to FHIR [Annotation](http://hl7.org/fhir/R4/datatypes.html#annotation)
* [CWE](ConceptMap-datatype-cwe-to-codeableconcept.html) - Coded With Exceptions to FHIR [CodeableConcept](http://hl7.org/fhir/R4/datatypes.html#codeableconcept)
* [CWE](ConceptMap-datatype-cwe-to-coding.html) - Coded With Exceptions to FHIR [Coding](http://hl7.org/fhir/R4/datatypes.html#coding)
* [CWE](ConceptMap-datatype-cwe-to-device.html) - Coded With Exceptions to FHIR [Device](http://hl7.org/fhir/R4/device.html)
* [CWE](ConceptMap-datatype-cwe-to-duration.html) - Coded With Exceptions to FHIR [Duration](http://hl7.org/fhir/R4/datatypes.html#duration)
* [CWE](ConceptMap-datatype-cwe-to-identifier.html) - Coded With Exceptions to FHIR [Identifier](http://hl7.org/fhir/R4/datatypes.html#identifier)
* [CWE](ConceptMap-datatype-cwe-to-organization.html) - Coded With Exceptions to FHIR [Organization](http://hl7.org/fhir/R4/organization.html)
* [CWE](ConceptMap-datatype-cwe-to-practitionerrole.html) - Coded With Exceptions to FHIR [PractitionerRole](http://hl7.org/fhir/R4/practitionerrole.html)
* [CWE](ConceptMap-datatype-cwe-to-quantity.html) - Coded With Exceptions to FHIR [Quantity](http://hl7.org/fhir/R4/datatypes.html#quantity)
* [CWE[DurationUnit]](ConceptMap-datatype-cwe-durationunit-to-timing.html) - Coded With Exceptions to FHIR [Timing](http://hl7.org/fhir/R4/datatypes.html#timing)
* [CWE[SupportingInfo]](ConceptMap-datatype-cwe-supportinginfo-to-observation.html) - Coded With Exceptions to FHIR [Observation](http://hl7.org/fhir/R4/observation.html)
* [CWE](ConceptMap-datatype-cwe-to-code.html) - Coded With Exceptions to FHIR [code](http://hl7.org/fhir/R4/datatypes.html#code)
* [CWE](ConceptMap-datatype-cwe-to-string.html) - Coded With Exceptions to FHIR [string](http://hl7.org/fhir/R4/datatypes.html#string)
* [CWE](ConceptMap-datatype-cwe-to-uri.html) - Coded With Exceptions to FHIR [uri](http://hl7.org/fhir/R4/datatypes.html#uri)
* [CX](ConceptMap-datatype-cx-to-identifier.html) - Extended Composite Id With Check Digit to FHIR [Identifier](http://hl7.org/fhir/R4/datatypes.html#identifier)
* [CX[Mother]](ConceptMap-datatype-cx-mother-to-relatedperson.html) - Extended Composite Id With Check Digit to FHIR [RelatedPerson](http://hl7.org/fhir/R4/relatedperson.html)
* [CX](ConceptMap-datatype-cx-to-string.html) - Extended Composite Id With Check Digit to FHIR [string](http://hl7.org/fhir/R4/datatypes.html#string)
* [DLD[Discharge]](ConceptMap-datatype-dld-discharge-to-location.html) - Discharge To Location And Date to FHIR [Location](http://hl7.org/fhir/R4/location.html)
* [DLN](ConceptMap-datatype-dln-to-identifier.html) - Driver's License Number to FHIR [Identifier](http://hl7.org/fhir/R4/datatypes.html#identifier)
* [DR](ConceptMap-datatype-dr-to-period.html) - Date/Time Range to FHIR [Period](http://hl7.org/fhir/R4/datatypes.html#period)
* [DR](ConceptMap-datatype-dr-to-datetime.html) - Date/Time Range to FHIR [dateTime](http://hl7.org/fhir/R4/datatypes.html#datetime)
* [DTM[Time]](ConceptMap-datatype-dtm-time-to-annotation.html) - Date/Time to FHIR [Annotation](http://hl7.org/fhir/R4/datatypes.html#annotation)
* [DTM](ConceptMap-datatype-dtm-to-datetime.html) - Date/Time to FHIR [dateTime](http://hl7.org/fhir/R4/datatypes.html#datetime)
* [ED](ConceptMap-datatype-ed-to-attachment.html) - Encapsulated Data to FHIR [Attachment](http://hl7.org/fhir/R4/datatypes.html#attachment)
* [ED](ConceptMap-datatype-ed-to-documentreference.html) - Encapsulated Data to FHIR [DocumentReference](http://hl7.org/fhir/R4/documentreference.html)
* [EI](ConceptMap-datatype-ei-to-coding.html) - Entity Identifier to FHIR [Coding](http://hl7.org/fhir/R4/datatypes.html#coding)
* [EI](ConceptMap-datatype-ei-to-condition.html) - Entity Identifier to FHIR [Condition](http://hl7.org/fhir/R4/condition.html)
* [EIP[FillerAssignedIdentifier]](ConceptMap-datatype-eip-fillerassignedidentifier-to-identifier.html) - Entity Identifier Pair to FHIR [Identifier](http://hl7.org/fhir/R4/datatypes.html#identifier)
* [EIP[PlacerAssignedIdentifier]](ConceptMap-datatype-eip-placerassignedidentifier-to-identifier.html) - Entity Identifier Pair to FHIR [Identifier](http://hl7.org/fhir/R4/datatypes.html#identifier)
* [EI](ConceptMap-datatype-ei-to-procedure.html) - Entity Identifier to FHIR [Procedure](http://hl7.org/fhir/R4/procedure.html)
* [EI[DefaultAssigner]](ConceptMap-datatype-ei-defaultassigner-to-identifier.html) - Entity Identifier to FHIR [Identifier](http://hl7.org/fhir/R4/datatypes.html#identifier)
* [EI[Extension]](ConceptMap-datatype-ei-extension-to-identifier.html) - Entity Identifier to FHIR [Identifier](http://hl7.org/fhir/R4/datatypes.html#identifier)
* [EI[Organization]](ConceptMap-datatype-ei-organization-to-identifier.html) - Entity Identifier to FHIR [Identifier](http://hl7.org/fhir/R4/datatypes.html#identifier)
* [EI[System]](ConceptMap-datatype-ei-system-to-identifier.html) - Entity Identifier to FHIR [Identifier](http://hl7.org/fhir/R4/datatypes.html#identifier)
* [EI[UDICarrier]](ConceptMap-datatype-ei-udicarrier-to-device.html) - Entity Identifier to FHIR [Device](http://hl7.org/fhir/R4/device.html)
* [FN](ConceptMap-datatype-fn-to-humanname.html) - Family Name to FHIR [HumanName](http://hl7.org/fhir/R4/datatypes.html#humanname)
* [FT[Comment]](ConceptMap-datatype-ft-comment-to-annotation.html) - Formatted Text Data to FHIR [Annotation](http://hl7.org/fhir/R4/datatypes.html#annotation)
* [HD](ConceptMap-datatype-hd-to-device.html) - Hierarchic Designator to FHIR [Device](http://hl7.org/fhir/R4/device.html)
* [HD](ConceptMap-datatype-hd-to-identifier.html) - Hierarchic Designator to FHIR [Identifier](http://hl7.org/fhir/R4/datatypes.html#identifier)
* [HD](ConceptMap-datatype-hd-to-location.html) - Hierarchic Designator to FHIR [Location](http://hl7.org/fhir/R4/location.html)
* [HD](ConceptMap-datatype-hd-to-organization.html) - Hierarchic Designator to FHIR [Organization](http://hl7.org/fhir/R4/organization.html)
* [HD[endpoint]](ConceptMap-datatype-hd-endpoint-to-messageheader-destination.html) - Hierarchic Designator to FHIR [MessageHeader.destination](http://hl7.org/fhir/R4/messageheader-definitions.html#messageheader.destination)
* [HD[endpoint]](ConceptMap-datatype-hd-endpoint-to-messageheader-source.html) - Hierarchic Designator to FHIR [MessageHeader.source](http://hl7.org/fhir/R4/messageheader-definitions.html#messageheader.source)
* [HD[name]](ConceptMap-datatype-hd-name-to-messageheader-destination.html) - Hierarchic Designator to FHIR [MessageHeader.destination](http://hl7.org/fhir/R4/messageheader-definitions.html#messageheader.destination)
* [HD[name]](ConceptMap-datatype-hd-name-to-messageheader-source.html) - Hierarchic Designator to FHIR [MessageHeader.source](http://hl7.org/fhir/R4/messageheader-definitions.html#messageheader.source)
* [HD](ConceptMap-datatype-hd-to-uri.html) - Hierarchic Designator to FHIR [uri](http://hl7.org/fhir/R4/datatypes.html#uri)
* [ID](ConceptMap-datatype-id-to-codeableconcept.html) - Coded Value For Hl7 Defined Tables to FHIR [CodeableConcept](http://hl7.org/fhir/R4/datatypes.html#codeableconcept)
* [ID](ConceptMap-datatype-id-to-coding.html) - Coded Value For Hl7 Defined Tables to FHIR [Coding](http://hl7.org/fhir/R4/datatypes.html#coding)
* [ID[UniversalID]](ConceptMap-datatype-id-universalid-to-codeableconcept.html) - Coded Value For Hl7 Defined Tables to FHIR [CodeableConcept](http://hl7.org/fhir/R4/datatypes.html#codeableconcept)
* [ID](ConceptMap-datatype-id-to-boolean.html) - Coded Value For Hl7 Defined Tables to FHIR [boolean](http://hl7.org/fhir/R4/datatypes.html#boolean)
* [ID](ConceptMap-datatype-id-to-code.html) - Coded Value For Hl7 Defined Tables to FHIR [code](http://hl7.org/fhir/R4/datatypes.html#code)
* [ID](ConceptMap-datatype-id-to-string.html) - Coded Value For Hl7 Defined Tables to FHIR [string](http://hl7.org/fhir/R4/datatypes.html#string)
* [IS](ConceptMap-datatype-is-to-codeableconcept.html) - Coded Value For User to FHIR [CodeableConcept](http://hl7.org/fhir/R4/datatypes.html#codeableconcept)
* [IS](ConceptMap-datatype-is-to-code.html) - Coded Value For User to FHIR [code](http://hl7.org/fhir/R4/datatypes.html#code)
* [IS](ConceptMap-datatype-is-to-string.html) - Coded Value For User to FHIR [string](http://hl7.org/fhir/R4/datatypes.html#string)
* [MSG](ConceptMap-datatype-msg-to-coding.html) - Message Type to FHIR [Coding](http://hl7.org/fhir/R4/datatypes.html#coding)
* [MSG](ConceptMap-datatype-msg-to-messageheader.html) - Message Type to FHIR [MessageHeader](http://hl7.org/fhir/R4/messageheader.html)
* [MSG](ConceptMap-datatype-msg-to-code.html) - Message Type to FHIR [code](http://hl7.org/fhir/R4/datatypes.html#code)
* [NA](ConceptMap-datatype-na-to-numericarray.html) - Numeric Array to FHIR [NumericArray](http://hl7.org/fhir/R4/codesystem-numericarray.html)
* [NDL](ConceptMap-datatype-ndl-to-practitionerrole.html) - Name With Date And Location to FHIR [PractitionerRole](http://hl7.org/fhir/R4/practitionerrole.html)
* [NM](ConceptMap-datatype-nm-to-quantity.html) - Numeric to FHIR [Quantity](http://hl7.org/fhir/R4/datatypes.html#quantity)
* [NM[LengthOfStay]](ConceptMap-datatype-nm-lengthofstay-to-quantity.html) - Numeric to FHIR [Quantity](http://hl7.org/fhir/R4/datatypes.html#quantity)
* [NM](ConceptMap-datatype-nm-to-positiveint.html) - Numeric to FHIR [positiveInt](http://hl7.org/fhir/R4/datatypes.html#positiveint)
* [NR](ConceptMap-datatype-nr-to-range.html) - Numeric Range to FHIR [Range](http://hl7.org/fhir/R4/datatypes.html#range)
* [OG[Subidentifier]](ConceptMap-datatype-og-subidentifier-to-extension.html) - Observation Grouper to FHIR [Extension](http://hl7.org/fhir/R4/datatypes.html#extension)
* [PL](ConceptMap-datatype-pl-to-location.html) - Person Location to FHIR [Location](http://hl7.org/fhir/R4/location.html)
* [PLN](ConceptMap-datatype-pln-to-identifier.html) - Practitioner License Or Other Id Number to FHIR [Identifier](http://hl7.org/fhir/R4/datatypes.html#identifier)
* [PT](ConceptMap-datatype-pt-to-meta.html) - Processing Type to FHIR [Meta](http://hl7.org/fhir/R4/datatypes.html#meta)
* [RI](ConceptMap-datatype-ri-to-timing.html) - Repeat Interval to FHIR [Timing](http://hl7.org/fhir/R4/datatypes.html#timing)
* [RP](ConceptMap-datatype-rp-to-attachment.html) - Reference Pointer to FHIR [Attachment](http://hl7.org/fhir/R4/datatypes.html#attachment)
* [RP](ConceptMap-datatype-rp-to-documentreference.html) - Reference Pointer to FHIR [DocumentReference](http://hl7.org/fhir/R4/documentreference.html)
* [RPT](ConceptMap-datatype-rpt-to-timing.html) - Repeat Pattern to FHIR [Timing](http://hl7.org/fhir/R4/datatypes.html#timing)
* [SAD](ConceptMap-datatype-sad-to-address.html) - Street Address to FHIR [Address](http://hl7.org/fhir/R4/datatypes.html#address)
* [SN](ConceptMap-datatype-sn-to-quantity.html) - Structured Numeric to FHIR [Quantity](http://hl7.org/fhir/R4/datatypes.html#quantity)
* [SN](ConceptMap-datatype-sn-to-range.html) - Structured Numeric to FHIR [Range](http://hl7.org/fhir/R4/datatypes.html#range)
* [SN](ConceptMap-datatype-sn-to-ratio.html) - Structured Numeric to FHIR [Ratio](http://hl7.org/fhir/R4/datatypes.html#ratio)
* [SPS[Source]](ConceptMap-datatype-sps-source-to-specimen.html) - Specimen Source to FHIR [Specimen](http://hl7.org/fhir/R4/specimen.html)
* [ST](ConceptMap-datatype-st-to-codeableconcept.html) - String Data to FHIR [CodeableConcept](http://hl7.org/fhir/R4/datatypes.html#codeableconcept)
* [ST](ConceptMap-datatype-st-to-identifier.html) - String Data to FHIR [Identifier](http://hl7.org/fhir/R4/datatypes.html#identifier)
* [TQ](ConceptMap-datatype-tq-to-appointment.html) - Timing/Quantity to FHIR [Appointment](http://hl7.org/fhir/R4/appointment.html)
* [TQ](ConceptMap-datatype-tq-to-medicationrequest.html) - Timing/Quantity to FHIR [MedicationRequest](http://hl7.org/fhir/R4/medicationrequest.html)
* [TQ](ConceptMap-datatype-tq-to-servicerequest.html) - Timing/Quantity to FHIR [ServiceRequest](http://hl7.org/fhir/R4/servicerequest.html)
* [TQ[ExecutionPeriod]](ConceptMap-datatype-tq-executionperiod-to-task.html) - Timing/Quantity to FHIR [Task](http://hl7.org/fhir/R4/task.html)
* [TQ[Priority]](ConceptMap-datatype-tq-priority-to-task.html) - Timing/Quantity to FHIR [Task](http://hl7.org/fhir/R4/task.html)
* [TS](ConceptMap-datatype-ts-to-datetime.html) - Timestamp to FHIR [dateTime](http://hl7.org/fhir/R4/datatypes.html#datetime)
* [XAD](ConceptMap-datatype-xad-to-address.html) - Extended Address to FHIR [Address](http://hl7.org/fhir/R4/datatypes.html#address)
* [XCN](ConceptMap-datatype-xcn-to-patient.html) - Extended Composite Id Number And Name For Persons to FHIR [Patient](http://hl7.org/fhir/R4/patient.html)
* [XCN](ConceptMap-datatype-xcn-to-practitioner.html) - Extended Composite Id Number And Name For Persons to FHIR [Practitioner](http://hl7.org/fhir/R4/practitioner.html)
* [XCN](ConceptMap-datatype-xcn-to-practitionerrole.html) - Extended Composite Id Number And Name For Persons to FHIR [PractitionerRole](http://hl7.org/fhir/R4/practitionerrole.html)
* [XCN](ConceptMap-datatype-xcn-to-relatedperson.html) - Extended Composite Id Number And Name For Persons to FHIR [RelatedPerson](http://hl7.org/fhir/R4/relatedperson.html)
* [XCN[Author]](ConceptMap-datatype-xcn-author-to-annotation.html) - Extended Composite Id Number And Name For Persons to FHIR [Annotation](http://hl7.org/fhir/R4/datatypes.html#annotation)
* [XON](ConceptMap-datatype-xon-to-location.html) - Extended Composite Name And Identification Number For Organizations to FHIR [Location](http://hl7.org/fhir/R4/location.html)
* [XON](ConceptMap-datatype-xon-to-organization.html) - Extended Composite Name And Identification Number For Organizations to FHIR [Organization](http://hl7.org/fhir/R4/organization.html)
* [XON](ConceptMap-datatype-xon-to-string.html) - Extended Composite Name And Identification Number For Organizations to FHIR [string](http://hl7.org/fhir/R4/datatypes.html#string)
* [XPN](ConceptMap-datatype-xpn-to-humanname.html) - Extended Person Name to FHIR [HumanName](http://hl7.org/fhir/R4/datatypes.html#humanname)
* [XPN](ConceptMap-datatype-xpn-to-string.html) - Extended Person Name to FHIR [string](http://hl7.org/fhir/R4/datatypes.html#string)
* [XTN](ConceptMap-datatype-xtn-to-contactpoint.html) - Extended Telecommunication Number to FHIR [ContactPoint](http://hl7.org/fhir/R4/datatypes.html#contactpoint)
<h2 style='--heading-prefix: ""' id='mapping'>Mapping</h2>
{% include datatype_mapping.md %}


---

// File: input/pagecontent/glossary.md

HL7<sup>(R)</sup> FHIR<sup>(R)</sup>
: Fast Healthcare Interoperability Resources - An HL7 standard to enable interoperability across heterogenous systems for different interoperability paradigms (e.g., services, messages, documents) and method (e.g., RESTful, SOAP, using json, xml, turtle, etc.)

HL7<sup>(R)</sup> v2
: An HL7 standard to support message based interoperability.  The original, classic HL7 standard.


---

// File: input/pagecontent/implementation_considerations.md

This section outlines implementation specific considerations that will have to be addressed during the implementation of a v2-to-FHIR 
transformation project. Not all of these issues will apply to every implementation, but each implementation should review and consider 
the entire list to assess whether or not they are relevant for the project at hand. This list is not comprehensive and other implementation 
considerations may emerge as transforms are developed, tested, and implemented in a Production environment.

### Message Structures in Older Versions
In older versions (e.g., v2.3.1), the message structure in MSH-9, specifically MSH-9.3, may have been omitted as the standard did not always 
include it in the message structure definition. For example, the message definition for RDE^O01 in v2.3.1 does not include the message structure, 
thus implementers omitted that, even though in Table 0354 there was a structure defined for RDE_O01. When MSH-9.3 is empty, we suggest to derive 
the message structure to get to the proper map by using the message code and trigger event. For example, when the message code and trigger event 
is ABC^Nnn then use ABC_Nnn. For RDE^O01 that would be RDE_O01. Exceptions to this approach will be more common for certain domains, for example 
Admission, Discharge and Transfer (ADT) messaging often reuses an existing message type for new message code/trigger event pairs.

### Implementation Guide Extensions on the Base Standard
Some v2 implementations may adhere to constraints made on the base standard by an implementation guide. Where this happens, it may
be necessary to extend or constrain the standard mappings provided by this project. For example, in the US the v2.5.1 immunization
messaging implementation guide describes how to use OBX segments to convey information related patient eligibility, distribution of
educational materials and vaccine funding source. While these concepts are part of the FHIR Immunization resource, the VXU mappings
from this project do not include these transformations as they are defined by the implementation guide, not the base standard.
Implementers should consider local variations from the base standard when developing their transformations.

### Common References
In v2, it often happens that singular organization, person, or other entity may be referenced multiple places in a message. For example, 
the Attending Doctor in PV1-7 of a laboratory order message may also be the ordering provider referenced in ORC-12 and OBR-16 (or in newer 
versions a PRT segment). When converting a v2 message to a set of FHIR resources, it may be ideal to create a single instance of a resource 
for that entity and reference it from multiple Resource elements. In this case, a single Practitioner resource may be present in the newly 
created FHIR bundle but references from both Encounter.participant.individual and ServiceRequest.requester in a bundle of R4 FHIR resources. 
Since these references may occur in different segments and a given message may not always have enough data in the data type components to 
unambiguously identify multiple references to a singular entity, this may be a challenge for some implementations. This guide therefore does 
not attempt to provide guidance in the mappings where different message data elements may potentially reference a common entity. However, we 
do encourage to re-use resources for reference where the mapper and receiving system can establish such re-use. Deduplication logic based on 
data including identifiers, name and credentials should be employed as part of the transformation strategy to identify potentially reusable resources.

In some instances, a single segment may be mapped to multiple FHIR resources, for example MSH is mapped to MessageHeader and one or more Provenance 
resources. In this case, the mapper is strongly encouraged to reuse resulting FHIR resources where possible. For example, the mapping for MSH-4 Sending 
Facility yields an Organization resource which can be referenced from the respective MessageHeader and Provenance resources resulting from individual segment maps.

### Variations in Cardinality
In several maps, the v2 field or element has a larger maximum cardinality than the mapped FHIR attributes. That is, some v2 elements are allowed to repeat 
while the cognate FHIR element is not allowed to repeat. We still provide these mappings, but if your implementation allows these v2 elements to repeat, 
data may be lost. Implementers should evaluate the likelihood of this happening. The project team welcomes examples where this occurs in existing 
implementations so that we can discuss possible solutions.

### Resource.id Generation and References
When the v2 message is mapped into a FHIR Bundle, resources need to have a Resource.id. The [FHIR base standard](https://hl7.org/implement/standards/fhir/resource-definitions.html#Resource.id) defines Resource.id as “The logical id of the resource, 
as used in the URL for the resource.”. Typically, this is the “the ‘logical id’ of the resource assigned by the server responsible for storing it” however in the 
case of a v2 message conversion this definition is not applicable, Additional discussion of the use of Resource.id when resources are created transiently for 
transfer between systems is available in the [base standard](https://hl7.org/implement/standards/fhir/resource.html#id). The description of [resolving references in Bundles](https://hl7.org/implement/standards/fhir/bundle.html#references) is particularly important for the v2 transformation 
process. Implementers should ensure that all resources within the Bundle resulting from the transformation have a unique id so that references within the bundle 
can be resolved. Different options may include assigning an id based on information with the message (such as a patient or order identifier) or system assigned 
number generated at the time of transformation. The receiver of the Bundle should not read any meaning into the value of the id.  

Depending on the nature of the implementation, the Bundle may be used by the recipient in any number of ways including being forwarded in a FHIR message, 
persisting the content as FHIR resources, or translating content into local data structures. Persistence of Resource.id cannot be guaranteed. 

### Contained Resources
This implementation guide recognizes the distinction between stand-alone and [contained resources](https://www.hl7.org/fhir/references.html#contained)
but does not provide guidance in the mappings as the appropriate usage of contained resources. Implementers should consider the
appropriateness of using contained resources during the transformation process where insufficient data is available in the v2
message to create a stand-alone FHIR resource. For example, if an ROL segment is transformed into a PractitionerRole resource
including the address of the provider office in ROL-11 but the segment lacks the provider's location in ROL-13 there may not be enough
information to warrant creating a stand-alone Location resource, but rather a contained Location resource (including the address) may be 
included in the PractitionerRole resource.

### Task Management
The FHIR standard includes extensive content related to [workflow management](http://hl7.org/implement/standards/fhir/workflow-module.html)
and [task management](http://hl7.org/implement/standards/fhir/task.html). While many v2 message types don't
infer tasks (eg, they report on a previously completed event), some message types (e.g., order messages) may imply the need for an
external system to complete a task (e.g., fulfill the order being requested). This implementation does include some mappings to the
Task resource but it is up to implementers to determine if it is appropriate to create Task resources during the transformation
process based on the business requirements and workflows associated with the integration. For example, an order message may be 
directed to a system with the intent of notifying the system of the existence of the order without any expectation that the receiving 
system will fulfill the order. In this case, the creation of a Task resource is likely to be inappropriate. Implementers must 
understand the workflows associated with the data exchange to implement tasks correctly.

### Segment Action Code
Most Hl7 v2 messages are sent using snapshot mode. However, where segment action codes (typically – add, update, or delete) are used it 
is up to the implementers to determine the appropriate actions on the FHIR side as the data may already exist. That may or may not be 
known by the mapping engine and lead to the application of different techniques to interpret and manage the action codes. A future version 
of this guide may include further guidance and best practices on mapping segment action codes.

### Provenance
The concept of data provenance is typically only indirectly addressed within the v2 standard; however provenance can often be inferred by the 
data in various fields of the v2 message. For example, provenance may be inferred from data in the MSH segment (e.g., the responsible sending 
organization), the EVN segment (e.g., the event it represents), the ORC segment (e.g., the entering user) or TXA segment (e.g., the authenticator). 
This implementation guide does include some mapping to the Provenance resource, but it is up to implementors to determine the level of data 
provenance that should be captured during the transformation process. At a minimum, the authors of this document feel that it is appropriate to 
capture the provenance of the message source and the v2-to-FHIR transformation process. Additional provenance may be captured from additional 
fields as appropriate for the implementation. To enable provenance, it is important to have the responsible organization or individual included 
in the MSH, EVN, ORC, TXA, and other applicable segment as identified in the mapping.

### Patients
Identity management and patient merging/unmerging are complex processes at the best of times. Implementers should carefully consider
how these activities will be impacted by a v2-to-FHIR transformation project. In particular, the workflow chosen (e.g., messaging versus
RESTful actions) and how Patient.id is populated may significantly impact how Patient resources are created, updated and deleted by
the receiving system.

### Encounters
Clinically focused v2 messages (e.g., ORM/OML, ORU, MDM) may contain limited data regarding an associated patient encounter. This
data content may or may not be sufficient to unambiguously identify a matching encounter in the receiving system. The creation
of Encounter resources should be carefully considered during the implementation process. The use of contained Encounter resources
may be appropriate.

### Practitioner-PractionerRole
In most FHIR resources, elements which allow a reference to a Practitioner resource also allow a reference to a PractitionerRole
resource. In most scenarios, a v2 field using the XCN data type will typically be mapped to the Practitioner resource, but
implementers may choose to map to the PractitionerRole resource instead. In a few places, an XCN field will be mapped to a
PractitionerRole resource when other fields in the segment can contribute content to the PractitionerRole resource to create a
more robust resource. For example, the ORC segment when mapped to ServiceRequest maps the Ordering Provider (ORC-12) field to
PractitionerRole because the Ordering Facility fields in ORC (ORC-21 through -23) can also contribute to the PractitionerRole resource 
to create a more robust resource.

### Results
#### Observations and Components
Depending on context and content an OBX segment in a v2 message may represent a wide variety of different types of data. Typically, 
the OBX segment will map to an Observation resource which in turn is referenced in some other resource (eg, the result
containing OBX segments in an ORU message will typically be transformed into Observation resources which are referenced in
DiagnosticReport.result). Even when an OBX segment clearly maps to an Observation resource, complications may arise when the
contents of multiple OBX segments must be considered as a whole in order to be fully understood or when there are multiple parts to
a single result (that is each OBX segment is a component of an Observation (e.g., Observation.component). It is critical that
implementers fully understand the type of content that may be presented in an OBX segment so that an appropriate transformation approach can be developed.

#### Multiple Occurrences of OBX-5
OBX-5 (Observation Value) is allowed to repeat in the v2 base standard however Observation.value[x] is constrained to a cardinality
of 0..1. In this case, the transform may take a number of forms:

* Where it is possible to concatenate the repeating values into a single value, then it may be possible to use one Observation resource
to capture the result
* Multiple Observation resources may need to be created, one for each occurrence of OBX-5
  * In this instance, it is important to understand the relationships that can be documented with the partOf and/or hasMember
  elements offered by Observation
* It may be possible to capture each occurrence as a component of a single Observation resource

#### Related Observations
The values of OBX-3 and/or OBX-4 in multiple OBX segments may indicate a relationship between individual observations that must be
maintain during the transformation process in order for the data to remain accurate and of use. For example, when two OBX segments
contain the systolic and diastolic values of a blood pressure reading, the relationship between the two observations must be
maintained. Observation.component can be used to maintain the relationship between related results. Implementers are encouraged
to read the base standard documentation available describing the use of Observation.component as well as think about how related
observations will be identified during the transformation process.

### Vocabulary Mapping

#### Basics
Various HL7 v2 types enable the use of codes, e.g., CWE, CNE, CE, as well as ID and IS. Real-world implementations of v2 messaging are 
diverse and use a variety of coded values to convey meaning between systems. Because of this diversity, implementers of v2-to-FHIR 
transformations will need to develop and apply processes for terminology review and mapping. These processes will need to accommodate the 
nature of the HL7 v2 table used to populate the v2 message and the value set contents and binding strength of the target FHIR data elements. 
Some general guidance for a variety of situations is provided below, however transformation implementers must evaluate all value sets that 
may be used to populate the v2 message to ensure that any coded data contained in the v2 message is appropriately transformed into the 
resulting FHIR resources even when different sets of values are used by the two standards.

HL7 v2 uses the concept of tables to describe the coded values used in a v2 message. A coded data element in the message (e.g., Patient 
administrative sex in PID-8 or the order control code in ORC-1) is assigned a specific table which documents valid values. While the v2 
base standard includes tables in Chapter 2C, local implementations may constrain or extend the base standard values. It is critical that 
transformation implementers understand the full range of values that a sender may include in a v2 message and the values that a message 
recipient can consume. HL7 v2 defines a number of types of tables:
* **HL7 Defined tables** contain specific values whose meanings are defined by the base standard and which cannot be changed. HL7 Defined tables
are most often used for “structural” parts of the v2 message including things like acknowledgment types (MSH-15 and MSH-16) and order control
codes (ORC-1) of order and results messages. These structural fields often drive specific functionality associated with v2 messages. While v2
messaging implementations will often constrain values from these structural type tables they are rarely extended locally to include new values.
For example, not all laboratory exchanges will support the full range of order control codes in ORC-1 but new orders control codes being added
is rare. However, other message elements which are not structural may also use HL7 defined tables. For example, the medication route and site
administered data elements also use HL7 defined table. While these data elements may also constrain the list of codes provided in the table by
the base standard, it is possible that local v2 implementations have also extend the values in the table to include new codes not present in
the v2 base standard to meet local requirements.
* In contrast, the breadth and meaning of codes in **User Defined tables** are determined locally for a given v2 implementation. While the HL7 v2 base
standard may provide “suggested” values in User Defined tables, v2 messaging implementers are not required to use them (although many still do).
Transformation implementers must be aware of all of the possible codes in use with User Defined tables as they may or may not align with the values
provided in the tables in the v2 base standard.
* The codes contained in both HL7 Defined tables and User Defined tables are defined by either by HL7 or by local v2 implementers and are not drawn from
standard code systems. In contrast, **Externally Defined tables** contain codes defined elsewhere, in code systems such as SNOMED-CT, LOINC, NUBC or others.
For v2 message elements which use Externally Defined tables, the meaning of the codes use may not be changed locally, but the list of codes in use for a
specific v2 implementation will be determined locally.

Rather than using tables, FHIR defines value sets which contain codes from specific coding systems (see the FHIR Terminology page for further information on 
this topic). Coded data elements in the FHIR base standard are typically bound to a value set with a particular binding strength which has implications for 
the ability of the recipient of a FHIR bundle to process coded values. The FHIR binding strengths are defined as:
* **Required** - To be conformant, the concept in this element SHALL be from the specified value set (that is, no additions to the value set are allowed).
* **Extensible** - To be conformant, the concept in this element SHALL be from the specified value set if any of the codes within the value set can apply to the 
concept being communicated. If the value set does not cover the concept (based on human review), alternate codings (or, data type allowing, text) may be included instead.
* **Preferred** - Instances are encouraged to draw from the specified codes for interoperability purposes but are not required to do so to be considered conformant.
* **Example** - Instances are not expected or even encouraged to draw from the specified value set. The value set merely provides examples of the types of concepts intended to be included.

Furthermore, FHIR employs several coded data types including:
* **code** - Indicates that the value is taken from a set of controlled strings defined elsewhere. Where the code data type is used, the FHIR base standard 
will typically use a value set binding of Required because the code data type does not include any indication of the code system (or value set) from 
which the code is drawn. Therefore, in order to ensure that the meaning of the code is clear, the required binding is used to define the meaning of codes 
* **Coding** - A representation of a defined concept using a symbol from a defined "code system". Where the Coding data type is used, in addition to the code 
itself, an indication of the coding system from which the code is drawn is typically provided. This allows trading partners to determine the meaning of 
the code by exploring the documentation for the code in the coding system. The Coding data type is used relatively sparingly in the base standard but 
it is a key component of the next data type, CodeableConcept.
* **CodeableConcept** - Represents a value that is usually supplied by providing a reference to one or more terminologies. Note that this data type allows 
multiple representations of a concept using codes from different coding systems. Among other things, this allows the use of local codes as well as codes 
from more standardized code systems such as SNOMED-CT or LOINC. As discussed below, the ability to use multiple codes to represent a single concept is 
important to consider when reviewing terminology mappings for v2-to-FHIR transformations.

This v2-to-FHIR Implementation Guide provides basic mappings from the v2 tables used by the mapped message types to the cognate FHIR value sets. However, the 
complexity of the terminology approaches used by both v2 and FHIR combined with the inherent flexibility of both standards makes it impossible for this document 
to provide definitive mappings for all possible values for all coded data elements. When possible this document provides mappings where both HL7 defined values 
(in both HL7 Defined and User Defined tables) and FHIR value sets (off all binding strengths) are available. However, as noted above, implementers of v2-to-FHIR 
transformations must review every terminology mapping supported by the transformation process to ensure that all locally used codes are accounted for. Below are a 
few considerations when doing local terminology review.
* Not all values in a given HL7 v2 table will have a cognate code in the FHIR value sets defined in the base standard. 
  * When the FHIR value set binding strength is Example or Preferred, additional codes may be added to the FHIR value set provided that the system receiving the 
transformed FHIR bundle is capable of correctly using the added codes. 
  * Where the FHIR value set binding strength is Extensible, additional codes may be added with certain restrictions. Because the FHIR base standard includes 
an extensible value set, any values from the FHIR value set must be used as the target code if they are appropriate for use. If no appropriate code exists in 
the extensible FHIR value set, then the transformation implementation team must identify an appropriate local extension acceptable to the FHIR recipient system. 
  * Things are more complicated where the FHIR value set uses a binding strength of required. This applies to the use of both the code and CodeableConcept data types. 
If no appropriate code exists in the required FHIR value set, a local extension of the value set is NOT allowed and extensive discussion between trading partners 
will be required to arrive at a mutually agreeable solution, particularly when the FHIR data elements is required (that is, has a minimum cardinality of 1).
* The v2 message may contain more codes than the cognate FHIR data element can accommodate.
  * While rare, it is possible that certain v2 message data elements may contain multiple codes drawn from different tables for the same concept. This is more 
common for the CWE data type which in later versions of the v2 base standard can contain up to three different codes. If the v2 field is mapped to a FHIR data 
element which does not permit repeating codes (such as a data element which uses the code FHIR data type), then the transformation implementation team will 
need to prioritize the mapping of certain codes or implement processes to ensure that all codes contained in the v2 data element map to the same FHIR code.
* To avoid potential data loss, system functionality and/or error handling processes must be developed to handle cases where a value in an instance of a v2 message 
cannot be mapped at the time of transformation. Potential (non-mutually exclusive) options include:
  * Log an error in the transformation tool (may be a warning (non-fatal) or an error (fatal))
  * If the FHIR element uses CodeableConcept, a text version of the code (e.g., CWE.2 or CWE.9) may be conveyed in CodeableConcept.text (note this will involve 
the loss of the code information)
  * If an appropriate uri is known for the code system conveyed in the CWE data type (eg CWE.3 or CWE.6), the code may be carried over to CodeableConcept.coding.code
and .system populated (note that depending on the capabilities of the FHIR recipient, this code may or may not be useful to the receiving system)
  * Use the Alternate Codes extension to preserve the original code 
* Note that the scope of this document is a transformation from v2 format to FHIR format, as such this mapping guidance is focused on ensuring that any 
potential coded values in the v2 message can be faithfully converted to a value from the cognate FHIR value set. However, not all codes in the FHIR value 
sets may correspond to a potential v2 code, even where the FHIR value set uses the Required binding strength. Transformation implementers are highly encouraged 
to review the FHIR value sets to ensure that any codes critical to the performance of workflows or use of data in the FHIR receiving system are accounted for.



Translations may be particularly problematic when the FHIR value set is rigidlyfixed (a binding strength of "Required") and cannot be extended locally. 
A v2 value may not have a cognate FHIR value or the FHIR value may be less granular than the v2 code, either situation can potentially result in the 
loss of information as the concept is translated. In these situations we recommend the following:
* When the FHIR data type is code or coding: 
  * Review the provided mappings and confirm that the v2 value is translated to the most appropriate value for the implementation
  * We strongly encourage the retention of the original v2 value using the [Alternative Codes extension] (http://hl7.org/fhir/StructureDefinition/alternate-codes)
for those values that are not mappable or when the v2 value is more granular than the FHIR value and data may be lost in the translation
  * For example, PV1-2 Patient class maps to Encounter.status where the FHIR value set is fixed. Any suggested mappings to "unknown" need to be reviewed to determine if another FHIR value might be better
* When the FHIR data type is not code or coding: 
  * Review the provided mappings and confirm that the v2 value is translated to the most appropriate value for the integration
  * We strongly encourage the retention of the original v2 value as an alternate occurrence of the CodeableConcept.coding element

Tool behavior should be driven by the configuration of the vocabulary mapping files rather can coding within the transformation tool itself. Using the CWE 
data type as the example, the following section describes how vocabulary mapping is achieved between HL7 v2 and FHIR vocabulary.

#### Translator Logic
The CWE data type can contain up to 3 “coding triplets” each of which may contain unique codes from different codes sets, however all codes must represent the same concept.  At a high level, these correspond to multiple occurrences of CodeableConcept.coding for the cognate FHIR element. In an ideal world, each HL7 v2 CWE triplet will consist of a code, a display name and a coding system. The combination of the code and the coding system should provide a unique key for mapping purposes. 

For the CWE field, the translator should perform the following steps for each of the three possible triplets.
* If the triplet contains data (at a minimum, the code is present in the triplet), then:
* The code and code system present in the triplet, are used to identify the relevant lines in the vocabulary map (that is the code from the triplet matches a value in Column A (Code) and the code system from the triple matches the value in Column C (Code System) for that same row
Note that a single vocabulary map may contain multiple rows for a given code/code system pair if the implementers want to translate the code to multiple codings in the FHIR resource
* For each matching line in the vocabulary map, a new occurrence of CodeableConcept.coding is created with coding.code populated from Column G, coding.display populated from Column I and coding.system populated from Column J

#### Example (Marital Status)
* Marital Status (PID-16) uses User-defined table HL70002 which includes the code S for Single
* Patient.maritalStatus uses an extensible value set using codes from a v3 code system
* A given implementation may use the HL70002 table but also have a set of local codes (using the code system of “L”) including “UN” for Unmarried (a synonym of single)
* PID-16 in a given message may look like:
   * S^Single^HL70002^UN^Unmarried^L
   * In this case, the first and second triplets are populated with codes from two different code systems
* The implementers must make a decision if the base mapping of HL70002 to the FHIR value set is sufficient or if they also want to either persist one or both of the v2 codes or map either code to an alternate FHIR coding occurrence
   * Note that the decision to retain the original codes or not is an implementation decision, this implementation guide does not provide a recommendation one way or the other
   * As well, the transformation engine shouldn’t have to be coded to retain (or not retain) the original codes, we recommend that this be determined by the contents of the mapping files
* For the remainder of this example, let’s assume that the implementers want to translate the HL70002 code to the FHIR value set and retain the original values from both triplets
   * The implementers enhance the existing base vocabulary map to include new lines for mapping the HL70002 code to v2-0002 code system and the local code to an appropriate local FHIR value set by adding the two new rows in yellow (the rows in red font are all the rows relevant to the concept of “single” regardless of the code used to represent that concept)
* The transformation engine takes the first triplet from PID-16 (S^Single^HL70002) and compares it to the values in Columns A and C and find 2 relevant rows (Rows 6 and 7), for each row, a new occurrence of CodeableConcept.coding is created using the content of Columns G, I and J
   * The transformation engine then takes the second triplet from PID-16 (UN^unmarried^L) and performs the same comparison to the map and finds one relevant row (Row 10) and creates a third occurrence of CodeableConcept.coding
* If instead the implementers had decided to only preserve the original HL70002 code and discard the local code (UN), they would not have created Row 10 and when the transformation engine searched the table, it would have found no matching row and not created an occurrence of CodeableConcept.coding
   * It would be up to the transformation engine to determine if the lack of a matching row warrants the logging of a warning or error

<figure>
    <img src="https://github.com/HL7/v2-to-fhir/assets/17408249/246b56a5-b4f9-4b09-8653-ebf0e57b8ed7"
         alt="CWE_Guidance_Sample">
    <figcaption>Figure 1. Marital Status Mappings</figcaption>
</figure>

#### Edge Cases
If the implementers know that the v2 CWE field will not be fully populated (e.g., there will be a code but not a code system), the vocabulary map will need to be updated accordingly to include a row where Column A is populated but not Column C is not populated.
Note that in this case, column J should remain populated so that the FHIR resource that is created contains both a code and a system
If the triplet does not contain a code but does contain text (in either the text field of the triplet (e.g., CWE.2 or CWE.5) or the original text (CWE.9)) then it is unsuitable for discrete mapping and the text should be used to populate CodeableConcept.text

### Open Issues
<ol>
<li>The PRT to DeviceUseStatement (DeviceUsage in R5) is only relevant for certain OBX entries where device usage is documented outside of a procedure or observations (e.g., surgery, therapy, lab test).  For example, known presence of an implantable device without having the implant procedure available, use of a wheelchair without its dispense date or actual use documentation.  If you use OBX for those general use statements where the observation is not the result where the device used is recorded or a procedure where the device used or implanted is recorded, please submit a JIRA to consider adding a PRT[DeviceUseStatement] mapping.</li>
 <li>When the OBX Observation is followed by a PRT Participation segment that indicates the location where the observation was performed, the mapping currently does not include a mapping of PRT-11 Begin Date/Time and PRT-12 End Date/Time.  If you are using these fields, please submit a JIRA to consider the necessary mapping.<li>
</ol>


---

// File: input/pagecontent/index.md

The HL7 V2 to FHIR Implementation Guide supports the mapping of HL7 Version 2 messages
segments, datatypes and vocabulary to HL7 FHIR Release 4.0 Bundles, Resources, Data
Types and Coding Systems.  It represents a cumulative mapping of the standard, not any HL7 v2 based implementation guide.  That means that it is not focused on any particular HL7 v2 version, although we started with HL7 v2.9, rather that it aims to address all message structures, segments, and data types that are represented in the latest HL7 v2 version and any components that were deprecated yet known to still be in use in messages based on older versions.  

This implementation guide provides the Concept Maps and references to the Spreadsheets
used to generate them, as well as additional information and material to support validation
and testing of implementations.

This guide is organized into three main sections:

   1. [Introduction](introduction.html)<br/>This section provides an overview of the project, and explains [how mapping is performed](mapping_guidelines.html).
      You can also find [questions to address in this ballot](questions.html), the [glossary](glossary.html)
      and [acknowledgements](acknowledgements.html).

   2. [Mapping Guidelines](mapping_guidelines.html)<br/>This section provides the rules and guidelines used to document
   the mappings such as identification of each HL7 v2 element with a mapping, the conditions
   under which the HL7 v2 element may map to one or more HL7 FHIR components, as well references
   to more specific mappings considering context, e.g., when to map PID data to Patient vs.
   RelatedPerson, or a CWE encoded element to either CodeableConcept, Coding, or code.

   3. [Mappings](mappings.html)<br/>This section provides an index to the mappings produced by this project, organized
      by [message](message_maps.html), [segment](segment_maps.html),[datatype](datatype_maps.html),
      or [vocabulary](coding_system_maps.html) mapping.

   4. [Implementation and Use](implementation_considerations.html)<br/>This section covers implementation considerations,
      [validation](validation.html), and provides example [test conversions](test_conversions.html).

   5. [Profiles](profiles.html)<br/>This section provides the profiles for the HL7 FHIR ConceptMap
   that describes the data maintained in Concept Maps for each of the message, segment, data type,
   and vocabulary mapping, as well as a profile for HL7 FHIR Bundle that establishes the basic
   structure/content of a HL7 FHIR message resulting from an HL7 v2 message.

Click on any of the links above, head on over the [table of contents](toc.html), or
if you are looking for a specific artifact, check out the [index](artifacts.html).

You can also download:

* [this entire guide](full-ig.zip),
* the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
* the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on [GitHub](https://github.com/HL7/v2-to-fhir/).

You can also find [references and links to implementations](links.html).


---

// File: input/pagecontent/introduction.md

With the advent of HL7<sup>&copy;</sup> FHIR<sup>&copy;</sup>, an HL7 endorsed mapping of HL7 v2 components to FHIR components that can act as a starting point for implementations would aid in the consistent transition of data from v2 messages into FHIR based approaches (messages, persistence, RESTful APIs). The current mapping information in FHIR is limited to addressing FHIR components only and is incomplete in that it does not go down to the data types component level nor does it cover all commonly used v2 data elements.

This project will develop v2-to-FHIR maps for v2 messages, segments and data types to standard FHIR elements, as well as agreed to extensions where there is a gap in FHIR. The initial focus of the project is on commonly used v2 message structures and the segment and data types building blocks used to construct those messages.  Over time, other v2 message structures will be added based on interest and demand.

### Scope
The scope of the project is:

* The most current v2 version is the v2 source.
  * Initially this will be v2.9, and as newer versions become available, updates will be made ideally in parallel with the release of newer v2 versions.  While the latest v2 version is used to map, any deprecated data elements are mapped as well to enable mapping from prior HL7 v2 versions.  Effectively, from a v2 perspective, we are creating a cumulative map that enables a singular definition, yet any older message, or messages with pre-adoptions from more current versions can go through the same mapping process as fields are fixed.
* FHIR R4 is the initial FHIR target.
  * As newer FHIR versions emerge, new mapping tables will be created as the destinations may have changed while FHIR elements are not yet normative.
* The goal is to establish reusable data types and segment maps to reduce the overhead of maintaining maps for a wide variety of message structures
* Message Structures:
  * The initial focus will be on commonly exchanged v2 message structures (e.g., ADT, order, results, vaccinations).
  * The transformation of a v2 message will result in a bundle of related FHIR resources, potentially including MessageHeader, Provenance and Task resources.
  * Note that different FHIR workflows (e.g., messaging, RESTFul puts) may be used once the v2 to FHIR transformation has occurred. The initial project scope will support the FHIR messaging paradigm but will not be prescriptive of any particular FHIR workflow.
  * Message maps will reference re-usable segment maps which can be reused for mapping of multiple messages.
* Fields/Segments:
  * Typically, a segment will correspond to a FHIR resource although may map to a FHIR data type.
  * Initial segment maps will focus on those segments contained with the initial set of v2 messages and that are typically present.
  * A segment may require a different map to a different FHIR component depending on the context of the message structure it is used.  Consequently, segment map flavors will be created to simplify the maps yet maximize re-use where possible.
  * For every field known to be used in real world messaging in a mapped segment, the project will either identify:
    * The equivalent core FHIR resource element or,
    * A FHIR extension (either existing or proposed) to encourage consistent use rather than every implementation defining their own extensions.
  * Segment maps will reference re-usable data types maps which can be reused for mapping of multiple segments and fields.
* Data Types:
  * Establish v2 to FHIR data types mappings and resolve missing data type components in FHIR for V2 data type components.
  * A data type may require a different map to a different FHIR component depending on the context of the segment or other data type it is used.  Consequently, a data type map flavors will be created to simplify the maps yet maximize re-use where possible.
* Vocabulary:
  * Where a coded v2 data type maps to a FHIR data type which uses a different set of coded values, an initial vocabulary map is provided, either by referencing the applicable Unified Terminology Governance (UTG) map or creating a proposed map that UTG can adopt.
  * Note that not all elements (in either V2 or FHIR) provide suggested or required value sets, so it is not always possible to provide a vocabulary mapping.
  * Where a v2 table is available and the FHIR value set is not specified, the V2 codes may be used in the FHIR element.
  * Within a map, a subset of v2 codes may not have a corresponding code in the FHIR value set.
* Implementation Considerations:
  * Where the project team is unable to provide definitive mappings due to expected variations in local implementations, implementation considerations are provided to help guide implementers as they apply the standard mappings to their own circumstances.
  * In the case where a v2 codes does not have a corresponding code in the FHIR value set, implementers are encouraged to use the HL7 Terminology (THO) process to submit requests to HL7 to update vocabularies and improve alignment of terminologies across product families.
  * Note that the mappings are rooted in the base standards and do not account for constrains applied in specific HL7 published implementation guides (e.g., LOI, LRI, Immunization messaging), nor do maps account for any local variations which are not compliant with the base standard. Affiliates, jurisdictions, other parties, as well HL7 itself for implementation guides it owns can use the base v2-to-FHIR mappings to further establish implementation guide specific mappings.
* Maintenance
  * Once mappings have been established, both FHIR and v2 are expected to evolve and the mappings will be kept up-to-date, as closely tied to new releases of either as possible.
  * Once the basic format and initial message structure/segment/data type mappings have been validated, work will continue to expand the scope of messages and segments being mapped.
* Transformation Validation
  * Provide a mechanism for validating that transforms from a given engine adhere to the mappings developed by the project (or custom/extended mappings from implementers)
* Documentation and Publication Infrastructure
  * Create a documentation and publication infrastructure that enable easy editing of proposed mappings, human readable review formats (e.g., spreadsheet format) to enable validation, balloting, and mapping reference documentation, while providing computable mappings for mapping engines to ingest unambiguously across any mapping engine.  Until such time the project utilizes Google Spreadsheets that are indexed [here](https://docs.google.com/spreadsheets/d/1PaFYPSSq4oplTvw_4OgOn6h2Bs_CMvCAU9CqC4tPBgk/edit#gid=1419236962) to document the mappings that are then pulled into the IG for the CI Build and publication.
  * Upon publication of the first version, work will be initiated to enable FHIR resources and data types to directly reference available FHIR mappings rather than the summary mappings currently available. 


The intent is to ultimately achieve normative status of the mappings.

### Additional Mappings
The mappings will be expanded over time thus messages, segments, fields, data types, or code sets you use may not yet be included.  Please submit a JIRA for any missing mappings that you would like to see in the next version.  Note that any z-data (messages, trigger events, segments, data types) you may have will not be considered for inclusion.  Please aim to identify the proper equivalent in a later version and base your mappings on that.  If there is not an equivalen you always may enter a JIRA to add such data to the base standard.


---

// File: input/pagecontent/links.md

This page lists implementations that are publicly available for testing and other reference
content.  Inclusion in this list does not constitute endorsement by HL7 International, Inc.
These are public services provided by volunteers and HL7 makes no representations concerning
their safety or reliability.

* [Microsoft FHIR Converter](https://github.com/microsoft/FHIR-Converter)



---

// File: input/pagecontent/mapping_guidelines.md

The mappings for this round of review are documented and published using a spreadsheet style format.  This format allows for easy, side-by-side editing and review of from=to mappings with supporting information.  At the same time, the content must be computable enabling a mapping engine to ingest the mappings to populate their base mappings for subsequent refinement.

To this end, the infrastructure is based on a number of FHIR ConceptMap profiles to capture the relevant data for message structure, segment, data type, and vocabulary mappings.  Until such time that tools are available to directly edit the ConceptMaps, Google Spreadsheets are used to capture the mappings and populate the ConceptMaps in GitHub at regular intervals.  Regardless of the tools used, as the displayed format will be spreadsheet style, we refer to the mappings as mapping spreadsheets.

The following provides a review for each of the types of spreadsheets the mapping and supporting information capture.

### Mapping Spreadsheets
Mapping is authored using CSV files.  The format of the mapping files varies depending on whether the V2 artifact
being mapped is a Message, Segment, Data Type, or Table.

The spreadsheet title has a defined format to enable conversion from .csv into FHIR ConceptMap:

<table>
<tr> <wbr>
HL7 {Message|Segment|Data Type|Code System} - FHIR {R4|R5}: [{v2 Message Type|v2 Segment|v2 Data Type|v2 Table}]([{FHIR Resource|FHIR Data Type|FHIR Metadata Data Type|FHIR Vocabulary}-{QualifierName}])
</wbr>
</tr>
</table>

Examples:

* HL7 Message - FHIR R4: ADT_A01
* HL7 Segment - FHIR R4: OBR[ServiceRequest]
* HL7 Segment - FHIR R4: OBX[Observation-Component]
* HL7 Data Type - FHIR R4: CQ[ServiceRequest.duration]

<span id="general-format"> </span>
#### General Format/Approach
* Regardless of the mapping spreadsheet, the spreadsheet is organized into three sections:
  * HL7 v2
     * The v2 elements being mapped.

  <span id="conditions"> </span>
  * Conditions
     * The condition(s), if any, that determine whether the v2 element is mapped
        * If there is no condition, the mapping must always be applied

  * HL7 FHIR
     * The FHIR element that the v2 element is mapped to.

<span id="sort-order"> </span>
* Rows are listed in sequence of how they appear in the v2 standard.
  * The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.
  * In general, the content in the spreadsheet is declarative, not procedural but when implementing a tool to perform transformations, implementers must consider that in some cases relationships do exist between constructed FHIR resources
     * For example, for messages, there may be dependencies between segments
         * For example, the PID segment will create a Patient resource which is then added to with the content of the PD1 segment and referenced by the Encounter resource

* One v2 element will have one or more rows as multiple or different FHIR elements need to be populated.
   * Each row is executable on its own, whether it involves a different or the same v2 element.
   * When a single v2 element has multiple rows, the order of execution of the rows for that element should not be important
   * The sort order number will repeat when the v2 component is repeated to this end.  For example, if ORC-2 Placer Order Number maps to two different FHIR elements, then both rows would have the same sort order number "2".

* Not all HL7 v2 segments in a message, fields in a segmnet, components in data types, or vocabulary mappings will have values in the HL7 FHIR columns.  That is either due to initial scoping (e.g, not all segments have been revieewed yet for message structures included in the guide), fields or components are not known to be used, or there is no equivalent available yet in HL7 FHIR.  Where an extension is being considered it is marked as a note (see further notes below).  If your local implemnetation does need a mapping you may add that locally and are encouraged to submit a JIRA to add your proposed mapping to the v2-FHIR implementation guide formally, thus wider and more consistent use.

* A <span id="condition">condition</span> includes the following statements:
   * If computable, both a condition using:
       * the following easy to read syntax (referenced as Computable ANTLR - further documented here: [ANTLR Condition Syntax](antlr_condition_syntax.html))

         * IF X EQUALS "A"
         * IF X NOT EQUALS
         * IF X VALUED
         * IF X NOT VALUED
         * IF X NOT VALUED ERROR   *** The mapper is to stop mapping of the Message and raise an error.
         * IF IN ("A","B", "C")
         * IF NOT IN ("A","B", "C")
         * IF X expression OR Y expression
         * IF NOT (X expression OR Y expression)
         * IF NOT (X expression AND Y expression)
         * IF X expression AND Y expression
         * IF ((X expression AND Y expression) OR C expression)
         * IF X LST.COUNT EQUALS  ***LST.COUNT is the count of entries in the list at hand
         * IF X LST.COUNT NOT EQUALS
         * IF X LST.COUNT GREATER THAN
         * IF X LST.COUNT LESS THAN
         * IF X LST.COUNT GREATER THAN OR EQUALS
         * IF X LST.COUNT LESS THAN OR EQUALS
         * IF X LENGTH ***LENGTH is the physical length of the value
         * IF X LENGTH NOT EQUALS
         * IF X LENGTH GREATER THAN
         * IF X LENGTH LESS THAN
         * IF X LENGTH GREATER THAN OR EQUALS
         * IF X LENGTH LESS THAN OR EQUALS

       * The [FHIRpath syntax](https://www.hl7.org/fhir/fhirpath.html) (referenced as Computable FHIRpath)
   * If not computable or in addition to the computable condition further non-computable conditions must be considered as well (referenced as Narrative).

* [n] Notation
  * Multiple v2 components within the same mapping spreadsheet may need to update the same instance of a FHIR element, or should yield a new instance of the same FHIR element.  To distinguish whether the mappings are to the same or different FHIR element instance each FHIR element at the appropriate place in the path will use the [n] notation.  Those FHIR elements with the same value in the same place in the path should apply the mapping to the same instance of that element as an addition to existing content.
     * Example: PID-13 Phone Number - Home and PID-14 Phone Number - Business are both mapped to Patient.telecom.  However, they need to yield different instances.  Thus, PID-13 maps to Patient.telecom[1] and PID-14 to Patient.telecom[2].
     * Example: If both PID and PD1 need to populate the same Patient resource instance, the Patient would be referenced as Patient[1] and Patient[1] so that the data from both segments appear in the same resource instance. 
  * Note that this does not mean that there is a first and second slot where one is kept empty if not available in v2.  Rather it just means they are to be different if both present.
  * If the mapping needs to yield multiple instances and the v2 value needs to be applied to multiple FHIR element instances, [each] is used.
     * Example:  OBX-2 Observation Identifier needs to be mapped to all Observation.component.code instances if OBX-5 Value contains multiple values.  The FHIR attribute being mapped to then states Observation.component[each].code.
  * If a mapping needs to use a specific number of instance the notation [n-m] is used.
     * Example: The XAD.1 Street Address component is mapped to Address.line one through three, which is represented as line[1-3] in the FHIR attribute column, that would then be followed by XAD.2 Other Designation referencing line[4]
  * While typically these notations are a suffix on the FHIR element it applies to, in Data Type mappings you may see these as seemingly a prefix.  This would effectively apply to the FHIR element (typically an attribute) where that FHIR data type is actually referenced.
     * Example: [1].ContactPoint.value and [2].ContactPoint.value mapped to from the v2 XTN data type would reflect the first instance of the attribute repetition is actually used, e.g., Patient.telecom that can repeat and is mapped to from PID-13 and PID-14 which have the v2 XTN data type.

* Other than as described in the [n] Notation above, a repeat of a segment in the message should yield a new instance of the FHIR resource it maps to, and each instance of a field within a segment a new instance of an attribute.
  * There are situations where the HL7 v2 message may include field repeats that the corresponding FHIR attribute does not accommodate.  We have not yet consistently resolved with FHIR whether it should have the core standard extend its cardinality or use an extension.  In the absence of clear guidance the implementer should determine whether a local extension is appropriate to be utilized. 
* Each mapping row includes comments to document any considerations for the mapping that can aid in further refining the mappings for local use.
* Note that a FHIR attribute may be mapped to by both a segment field or a field component from another field in that segment, e.g., ROL-1 Role Instance ID and ROL-4 Role Person.  That involves two separate spreadsheets for different components (segment spreadsheet and data type component) and therefore should be mapped to different instance of a FHIR attribute.  In this example RelatedPerson.identifier.

#### Message Spreadsheet

{% include message_mapping.md %}

#### Segment Spreadsheet

{% include segment_mapping.md %}


There are situations where the field/attribute cardinalities between v2 and FHIR do not match.  These are highlighted in the mapping spreadsheet. Specifically, the following are causing potential challenges:
<table>
<tr>
<th>v2 Cardinality</th>
<th>FHIR Cardinality</th>
<th>Guidance</th>
</tr>
<tr>
<td>0..1</td>
<td>1..n</td>
<td>When the HL7 v2 message incudes a blank field in a segment where HL7 FHIR requires an attribute to be valued, a nullFlavor is preferred to indicate why it is absent.  The mapping will specify what the nullFavlor should be.  However, if there is no nullFlavor specified, then the local implementation of the mapping needs to determine what value should be used.</td>
</tr>
<tr>
<td>n..*</td>
<td>n..1</td>
<td>When the v2 messages allows for multiple values in a field and FHIR only allows for one (after also considering the cardinalities within the FHIR data type that may apply), then the local implementation needs to decide which value is included in the first level field and which should go into an extension.</td>
</tr>
<tr>
<td>1..1</td>
<td>1..1 with conditions</td>
<td>When there is conditional mapping, there may be a situation that occurs where the condition(s) would yield that nothing is to be mapped, but FHIR requires a value.  If that is the result of a valid set of conditions, and there is no nullFlavor that is applicable,  then the local implementation of the mapping needs to determine what value should be used.</td>
</tr>
</table>

Note generally that extensions will be pursued for those situations where we know that actual implementations would run into this challenge, but will not pursue those until somebody indicates they need that.  Where an upcoming FHIR version includes the attribute of interest we will use that as an extension using the format  http://hl7.org/fhir/[version]/StructureDefinition/extension-[Path] according to the guidance provided here: http://hl7.org/fhir/versions.html#extensions.

Data Type mapping spreadsheets are only provided for complex v2 data types, not primitive v2 data types. In the case of v2 date and time data types (DTM, TM, ) the mapping is more complex as the format in v2 is not the same as in FHIR. One must use ISO 8601 (https://www.iso.org/iso-8601-date-and-time-format.html) to understand the variances and may use platform specific reformatting utilities/services to reformat the values. This would cover DTM=>dateTime, DTM=>date, DTM=>instant, DT=>dateTime, DT=>date, DT=>instant, TS=>dateTime, and TM=>time.

#### Data Type Spreadsheet

{% include datatype_mapping.md %}

#### Code System Spreadsheet

{% include table_mapping.md %}



---

// File: input/pagecontent/mappings.md

The v2-to-FHIR mappings available here, organized by v2 Chapter:

* [Messages](message_maps.html)
* [Segments](segment_maps.html)
* [Data Types](datatype_maps.html)
* [Tables](coding_system_maps.html)


---

// File: input/pagecontent/message_maps.md

[//]: # Content after this line will be prepended to the output of the list of messsage maps

The sections below list the message mappings defined by this guide.
Message Mapping is driven by CSV files with specific columns. The use of these columns
is described in the section on [mapping](#mapping) at the bottom of this page.

[//End]: # Content after this marker will be updated during generation

### Chapter  3  Patient Administration

* [ADT_A01](ConceptMap-message-adt-a01-to-bundle.html) - Admit/Visit Notification
* [ADT_A02](ConceptMap-message-adt-a02-to-bundle.html) - Transfer a Patient
* [ADT_A05](ConceptMap-message-adt-a05-to-bundle.html) - Pre-Admit a Patient
* [ADT_A06](ConceptMap-message-adt-a06-to-bundle.html) - Change an Outpatient to an Inpatient
* [ADT_A09](ConceptMap-message-adt-a09-to-bundle.html) - Patient Departing - Tracking
* [ADT_A11](ConceptMap-message-adt-a11-to-bundle.html) - Cancel Admit / Visit Notification
* [ADT_A17](ConceptMap-message-adt-a17-to-bundle.html) - Swap Patients

### Chapter  4  Order Entry

* [OML_O21](ConceptMap-message-oml-o21-to-bundle.html) - Laboratory order
* [ORM_O01](ConceptMap-message-orm-o01-to-bundle.html) - General Order Message
* [VXU_V04](ConceptMap-message-vxu-v04-to-bundle.html) - Vaccine Record Update

### Chapter  7  Observation Reporting

* [ORU_R01](ConceptMap-message-oru-r01-to-bundle.html) - Unsolicited Report Alarm

### Chapter  9  Medical Records/Information Management

* [MDM_T02](ConceptMap-message-mdm-t02-to-bundle.html) - Document status change notification and content

### Chapter 10  Scheduling

* [SIU_S12](ConceptMap-message-siu-s12-to-bundle.html) - SIU/ACK
<h2 style='--heading-prefix: ""' id='mapping'>Mapping</h2>
{% include message_mapping.md %}


---

// File: input/pagecontent/profiles.md

### Profiles

v2-to-FHIR will use FHIR components and profiles to maintain mapping documentation.  Additionally, when v2 messages are
converted to FHIR messages a minmum set of data must be available through the FHIR Bundle.  To this end, the following profiles will be introduced in **future versions** of the guide:

1. ConceptMap - The ConceptMap is used as the source of truth for the mappings.  A profile is defined for each of the mapped elements that
defines the data captured for each type of mapping:

    * Message ConceptMap Profile
    * Segment ConceptMap Profile
    * Data Type ConceptMap Profile
    * Code System ConceptMap Profile

2. Bundle - The profile that must be used to include the minimum data that should be in a FHIR message bundle that represents a converted
v2 message.

3. Other -  We are considering how to use MessageDefinition and GraphDefinition and will provide at a future time relevant profiles of these for
the FHIR messages that represent the converted v2 messages.


---

// File: input/pagecontent/questions.md

The v2-to-FHIR Project Team is soliciting general comments from reviewers as well as specific comments in a number of areas (see below). Comments should be documented in the standard HL7 balloting spreadsheet. At this time, Jira should not be used to submit comments.

### Impact/Scope:
* We are looking to gather case studies from reviewers as to how they could see this project impacting the work they are currently doing in the v2/FHIR space.
* What workflows will be used in conjunction with these mappings? Will implementations be using messaging or RESTful APIs once the v2 has been transformed to FHIR? What impact could this have on the mappings? For example, how could the workflow impact the population of resource .id values? What types of Bundles will need to be constructed to house the transformed resources?
* We are also looking for input on which use cases (message types, other implementations) we should be focusing on (eg billing or transcription/documents).
* Please comment on implementation considerations we have documented. Are there other things to consider on a per implementation basis?


### Infrastructure:
* We invite feedback on the best way to document the mappings. Currently we provide content in tabular form and as ConceptMap resources. Is there a preferred format? Is there an alternative format we should be considering?
* Should the original v2 message be included in the FHIR Bundle? One option is a DocumentReference or something pointed to in a Provenance record.
* We are looking for feedback on the implementation of Provenance. Currently every message includes the creation of Provenance resources for the message source. As well selected messages (eg OML) also include Provenance for specific segments (eg ORC contents fields related to the provenance of the ServiceRequest). We are interested in the appropriateness of the existing mappings and any other mappings that should be added.
* Some mappings are such that the v2 field is allowed to repeat but the cognate FHIR attribute is not. This can lead to a potential loss of data as the FHIR resource is not capable of holding all of the information conveyed in the v2 message. We are looking for input on how to handle these mismatches.

### Mapping Content:
* Are there v2 fields in use by Production interfaces that are not yet mapped?  If so, please provide the v2 segment-field identifier and a suggested FHIR component for each.
* Are v2 fields mapped differently than expected?  If so, please provide the v2 segment-field identifier and a proposed alternative mapping.


Specific content mapping questions:

#### AL1 segment
* AL1-4 (Allergy Severity Code) is defined as indicating "the general severity of the allergy". The project team has discussed whether or not this concept best maps to AllergyIntolerance.criticality (Estimate of the potential clinical harm, or seriousness, of the reaction to the identified substance.) or AllergyIntolerance.reaction.severity (Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.). We are asking for input on which FHIR element is the better mapping or if the mappings should indicate both elements and leave the selection of the most appropriate element as an implementation decision. A similar issue exists for the IAM segment.

#### DG1 segment
* DG1-19 (Attestation Date/Time) is defined as containing "the time stamp that indicates the date and time that the attestation was signed". The project team is asking for input as whether this maps best to Condition.recordedDate (Date record was first recorded) or the Condition extension assertedDate (The date on which the existence of the Condition was first asserted or acknowledged).

#### OBX segment
* An OBX segment can represent a standalone Observation or may represent a component of an Observation (that is multiple OBX segments may be components of a single Observation). The decision between Observation or Observation Component is likely to be an implementation decision and/or run time decision. We are looking for input from the community has how to best represent the choice of Observation versus Observation.component in the Message maps. Several use cases have been document along with initial proposals for a preferred solution for each use case.

#### ROL segment
* An ROL segment following the PID segment may represent either a representative of either organization or the patient. The participant may be better represented as either a Practitioner/PractitionerRole or RelatedPerson. We are seeking input on which roles are best mapped to these two resource types.

#### XAD segment
* XAD-8 has no clear mapping, but we could use Address.line.  Would that be acceptable?  It would have to be clear from the value that it is a geographic designation that could be used for analytics



---

// File: input/pagecontent/segment_maps.md

[//]: # Content after this line will be prepended to the output of the list of segment maps

The sections below list the segment mappings defined by this guide.
Segment Mapping is driven by CSV files with specific columns. The use of these columns
is described in the section on [mapping](#mapping) at the bottom of this page.

[//End]: # Content after this marker will be updated during generation

### Chapter  2  Control

* [MSA](ConceptMap-segment-msa-to-messageheader.html) - Message Acknowledgment to FHIR [MessageHeader](http://hl7.org/fhir/R4/messageheader.html)
* [MSH](ConceptMap-segment-msh-to-bundle.html) - Message Header to FHIR [Bundle](http://hl7.org/fhir/R4/bundle.html)
* [MSH](ConceptMap-segment-msh-to-encounter.html) - Message Header to FHIR [Encounter](http://hl7.org/fhir/R4/encounter.html)
* [MSH](ConceptMap-segment-msh-to-messageheader.html) - Message Header to FHIR [MessageHeader](http://hl7.org/fhir/R4/messageheader.html)
* [MSH[Operator]](ConceptMap-segment-msh-operator-to-provenance.html) - Message Header to FHIR [Provenance](http://hl7.org/fhir/R4/provenance.html)
* [MSH[Source]](ConceptMap-segment-msh-source-to-provenance.html) - Message Header to FHIR [Provenance](http://hl7.org/fhir/R4/provenance.html)
* [MSH[Transformation]](ConceptMap-segment-msh-transformation-to-provenance.html) - Message Header to FHIR [Provenance](http://hl7.org/fhir/R4/provenance.html)
* [NTE](ConceptMap-segment-nte-to-documentreference.html) - Notes and Comments to FHIR [DocumentReference](http://hl7.org/fhir/R4/documentreference.html)
* [NTE](ConceptMap-segment-nte-to-observation.html) - Notes and Comments to FHIR [Observation](http://hl7.org/fhir/R4/observation.html)
* [NTE](ConceptMap-segment-nte-to-servicerequest.html) - Notes and Comments to FHIR [ServiceRequest](http://hl7.org/fhir/R4/servicerequest.html)
* [NTE[Comment]](ConceptMap-segment-nte-comment-to-appointment.html) - Notes and Comments to FHIR [Appointment](http://hl7.org/fhir/R4/appointment.html)
* [SFT](ConceptMap-segment-sft-to-device.html) - Software Segment to FHIR [Device](http://hl7.org/fhir/R4/device.html)
* [SFT](ConceptMap-segment-sft-to-messageheader.html) - Software Segment to FHIR [MessageHeader](http://hl7.org/fhir/R4/messageheader.html)

### Chapter  3  Patient Administration

* [AL1](ConceptMap-segment-al1-to-allergyintolerance.html) - Patient Allergy Information to FHIR [AllergyIntolerance](http://hl7.org/fhir/R4/allergyintolerance.html)
* [EVN](ConceptMap-segment-evn-to-provenance.html) - Event Type to FHIR [Provenance](http://hl7.org/fhir/R4/provenance.html)
* [IAM](ConceptMap-segment-iam-to-allergyintolerance.html) - Patient Adverse Reaction Information to FHIR [AllergyIntolerance](http://hl7.org/fhir/R4/allergyintolerance.html)
* [MRG](ConceptMap-segment-mrg-to-account.html) - Merge Patient Information to FHIR [Account](http://hl7.org/fhir/R4/account.html)
* [NK1](ConceptMap-segment-nk1-to-patient.html) - Next of Kin / Associated Parties to FHIR [Patient](http://hl7.org/fhir/R4/patient.html)
* [NK1](ConceptMap-segment-nk1-to-relatedperson.html) - Next of Kin / Associated Parties to FHIR [RelatedPerson](http://hl7.org/fhir/R4/relatedperson.html)
* [PD1](ConceptMap-segment-pd1-to-patient.html) - Patient Additional Demographic to FHIR [Patient](http://hl7.org/fhir/R4/patient.html)
* [PD1[LivingWill]](ConceptMap-segment-pd1-livingwill-to-observation.html) - Patient Additional Demographic to FHIR [Observation](http://hl7.org/fhir/R4/observation.html)
* [PID](ConceptMap-segment-pid-to-account.html) - Patient Identification to FHIR [Account](http://hl7.org/fhir/R4/account.html)
* [PID](ConceptMap-segment-pid-to-appointment.html) - Patient Identification to FHIR [Appointment](http://hl7.org/fhir/R4/appointment.html)
* [PID](ConceptMap-segment-pid-to-patient.html) - Patient Identification to FHIR [Patient](http://hl7.org/fhir/R4/patient.html)
* [PID[Patient]](ConceptMap-segment-pid-patient-to-provenance.html) - Patient Identification to FHIR [Provenance](http://hl7.org/fhir/R4/provenance.html)
* [PV1](ConceptMap-segment-pv1-to-coverage.html) - Patient Visit to FHIR [Coverage](http://hl7.org/fhir/R4/coverage.html)
* [PV1](ConceptMap-segment-pv1-to-encounter.html) - Patient Visit to FHIR [Encounter](http://hl7.org/fhir/R4/encounter.html)
* [PV1](ConceptMap-segment-pv1-to-patient.html) - Patient Visit to FHIR [Patient](http://hl7.org/fhir/R4/patient.html)
* [PV1[EncounterHistory]](ConceptMap-segment-pv1-encounterhistory-to-basic.html) - Patient Visit to FHIR [Basic](http://hl7.org/fhir/R4/basic.html)
* [PV2](ConceptMap-segment-pv2-to-encounter.html) - Patient Visit - Additional Information to FHIR [Encounter](http://hl7.org/fhir/R4/encounter.html)

### Chapter  4  Order Entry

* [OBR](ConceptMap-segment-obr-to-diagnosticreport.html) - Observation Request to FHIR [DiagnosticReport](http://hl7.org/fhir/R4/diagnosticreport.html)
* [OBR](ConceptMap-segment-obr-to-servicerequest.html) - Observation Request to FHIR [ServiceRequest](http://hl7.org/fhir/R4/servicerequest.html)
* [OBR](ConceptMap-segment-obr-to-specimen.html) - Observation Request to FHIR [Specimen](http://hl7.org/fhir/R4/specimen.html)
* [ORC](ConceptMap-segment-orc-to-diagnosticreport.html) - Common Order to FHIR [DiagnosticReport](http://hl7.org/fhir/R4/diagnosticreport.html)
* [ORC](ConceptMap-segment-orc-to-immunization.html) - Common Order to FHIR [Immunization](http://hl7.org/fhir/R4/immunization.html)
* [ORC](ConceptMap-segment-orc-to-medicationadministration.html) - Common Order to FHIR [MedicationAdministration](http://hl7.org/fhir/R4/medicationadministration.html)
* [ORC](ConceptMap-segment-orc-to-provenance.html) - Common Order to FHIR [Provenance](http://hl7.org/fhir/R4/provenance.html)
* [ORC](ConceptMap-segment-orc-to-servicerequest.html) - Common Order to FHIR [ServiceRequest](http://hl7.org/fhir/R4/servicerequest.html)
* [TQ1](ConceptMap-segment-tq1-to-medicationrequest.html) - Timing/Quantity to FHIR [MedicationRequest](http://hl7.org/fhir/R4/medicationrequest.html)
* [TQ1](ConceptMap-segment-tq1-to-servicerequest.html) - Timing/Quantity to FHIR [ServiceRequest](http://hl7.org/fhir/R4/servicerequest.html)

### Chapter  4A  Order Entry:  Pharmacy/Treatment, Vaccination

* [RXA](ConceptMap-segment-rxa-to-immunization.html) - Pharmacy/Treatment Administration to FHIR [Immunization](http://hl7.org/fhir/R4/immunization.html)
* [RXO](ConceptMap-segment-rxo-to-medicationrequest.html) - Pharmacy/Treatment Order to FHIR [MedicationRequest](http://hl7.org/fhir/R4/medicationrequest.html)
* [RXR](ConceptMap-segment-rxr-to-immunization.html) - Pharmacy/Treatment Route to FHIR [Immunization](http://hl7.org/fhir/R4/immunization.html)
* [RXR](ConceptMap-segment-rxr-to-medicationrequest.html) - Pharmacy/Treatment Route to FHIR [MedicationRequest](http://hl7.org/fhir/R4/medicationrequest.html)

### Chapter  6  Financial Management

* [DG1](ConceptMap-segment-dg1-to-condition.html) - Diagnosis to FHIR [Condition](http://hl7.org/fhir/R4/condition.html)
* [DG1](ConceptMap-segment-dg1-to-encounter.html) - Diagnosis to FHIR [Encounter](http://hl7.org/fhir/R4/encounter.html)
* [DG1](ConceptMap-segment-dg1-to-episodeofcare.html) - Diagnosis to FHIR [EpisodeOfCare](http://hl7.org/fhir/R4/episodeofcare.html)
* [IN1](ConceptMap-segment-in1-to-coverage.html) - Insurance to FHIR [Coverage](http://hl7.org/fhir/R4/coverage.html)
* [IN3](ConceptMap-segment-in3-to-careteam.html) - Insurance Additional Information, Certification to FHIR [CareTeam](http://hl7.org/fhir/R4/careteam.html)
* [PR1](ConceptMap-segment-pr1-to-procedure.html) - Procedures to FHIR [Procedure](http://hl7.org/fhir/R4/procedure.html)

### Chapter  7  Observation Reporting

* [OBX](ConceptMap-segment-obx-to-documentreference.html) - Observation/Result to FHIR [DocumentReference](http://hl7.org/fhir/R4/documentreference.html)
* [OBX](ConceptMap-segment-obx-to-observation.html) - Observation/Result to FHIR [Observation](http://hl7.org/fhir/R4/observation.html)
* [OBX[Component]](ConceptMap-segment-obx-component-to-observation.html) - Observation/Result to FHIR [Observation](http://hl7.org/fhir/R4/observation.html)
* [PRT](ConceptMap-segment-prt-to-careteam.html) - Participation Information to FHIR [CareTeam](http://hl7.org/fhir/R4/careteam.html)
* [PRT](ConceptMap-segment-prt-to-device.html) - Participation Information to FHIR [Device](http://hl7.org/fhir/R4/device.html)
* [PRT](ConceptMap-segment-prt-to-practitionerrole.html) - Participation Information to FHIR [PractitionerRole](http://hl7.org/fhir/R4/practitionerrole.html)
* [PRT](ConceptMap-segment-prt-to-relatedperson.html) - Participation Information to FHIR [RelatedPerson](http://hl7.org/fhir/R4/relatedperson.html)
* [PRT[GeneralPractitioner-PractitionerRole]](ConceptMap-segment-prt-generalpractitioner-practitionerrole-to-patient.html) - Participation Information to FHIR [Patient](http://hl7.org/fhir/R4/patient.html)
* [PRT[GeneralPractitioner-Practitioner]](ConceptMap-segment-prt-generalpractitioner-practitioner-to-patient.html) - Participation Information to FHIR [Patient](http://hl7.org/fhir/R4/patient.html)
* [PRT[Location]](ConceptMap-segment-prt-location-to-observation.html) - Participation Information to FHIR [Observation](http://hl7.org/fhir/R4/observation.html)
* [SPM](ConceptMap-segment-spm-to-specimen.html) - Specimen to FHIR [Specimen](http://hl7.org/fhir/R4/specimen.html)

### Chapter  8  Master Files

* [TXA](ConceptMap-segment-txa-to-documentreference.html) - Transcription Document Header to FHIR [DocumentReference](http://hl7.org/fhir/R4/documentreference.html)
* [TXA](ConceptMap-segment-txa-to-provenance.html) - Transcription Document Header to FHIR [Provenance](http://hl7.org/fhir/R4/provenance.html)

### Chapter 10  Scheduling

* [AIG](ConceptMap-segment-aig-to-appointment.html) - Appointment Information - General Resource to FHIR [Appointment](http://hl7.org/fhir/R4/appointment.html)
* [AIL](ConceptMap-segment-ail-to-appointment.html) - Appointment Information - Location Resource to FHIR [Appointment](http://hl7.org/fhir/R4/appointment.html)
* [AIP](ConceptMap-segment-aip-to-appointment.html) - Appointment Information - Personnel Resource to FHIR [Appointment](http://hl7.org/fhir/R4/appointment.html)
* [AIS](ConceptMap-segment-ais-to-appointment.html) - Appointment Information to FHIR [Appointment](http://hl7.org/fhir/R4/appointment.html)
* [AIS](ConceptMap-segment-ais-to-servicerequest.html) - Appointment Information to FHIR [ServiceRequest](http://hl7.org/fhir/R4/servicerequest.html)
* [SCH](ConceptMap-segment-sch-to-appointment.html) - Scheduling Activity Information to FHIR [Appointment](http://hl7.org/fhir/R4/appointment.html)
* [SCH](ConceptMap-segment-sch-to-provenance.html) - Scheduling Activity Information to FHIR [Provenance](http://hl7.org/fhir/R4/provenance.html)
* [SCH](ConceptMap-segment-sch-to-servicerequest.html) - Scheduling Activity Information to FHIR [ServiceRequest](http://hl7.org/fhir/R4/servicerequest.html)

### Chapter 15  Personnel Management

* [ROL](ConceptMap-segment-rol-to-careteam.html) - Role to FHIR [CareTeam](http://hl7.org/fhir/R4/careteam.html)
* [ROL](ConceptMap-segment-rol-to-relatedperson.html) - Role to FHIR [RelatedPerson](http://hl7.org/fhir/R4/relatedperson.html)
* [ROL[GeneralPractitioner]](ConceptMap-segment-rol-generalpractitioner-to-patient.html) - Role to FHIR [Patient](http://hl7.org/fhir/R4/patient.html)
* [ROL[PractitionerRole]](ConceptMap-segment-rol-practitionerrole-to-encounter.html) - Role to FHIR [Encounter](http://hl7.org/fhir/R4/encounter.html)
<h2 style='--heading-prefix: ""' id='mapping'>Mapping</h2>
{% include segment_mapping.md %}


---

// File: input/pagecontent/test_conversions.md

The following v2 messages represent a robust set of v2 message for a particular common use of that message and
the corresponding agreed to FHIR Bundle (once available) that a mapper should create based on the mapping spreadsheets.  These are to be used for
v2-to-FHIR mapping tool validation, while they can also be used to validate that the mapping spreadsheets are complete.

While initially these are Draft, at some point they will be changed to STU and then Normative to establish them as the agreed to benchmark.   

Note that we will not create mappings this way for each structure, rather those that would exercise the most segments and/or unique
features (e.g., we may only need very few ADT messages, but would need more to clarify groupings used for Micro results or other unique
use cases).

### ADT Messages
#### ADT_A01
**HL7 v2**
<table>
<tr>
MSH|^~\&|SndApp^1.2.3.4.5.2^ISO|SndFac^1.2.3.4.5.1^ISO|RcvApp^1.2.3.4.6.2^ISO|RcvFac^1.2.3.4.6.1^ISO|20150601135823+0100|ADTADM|ADT^A01^ADT_A01|4637382|P|2.5.1|||AL|NE|USA|ASCII|en|||SndOrg^L^0009^1^1000^AssignAuth&1.2.3.4.5&ISO^XX^AssignFac&1.2.3.4.5.3&ISO^^67890|RecOrg^L^0011^2^1000^AssignAuth&1.2.3.4.6&ISO^XX^AssignFac&1.2.3.4.5.6.3&ISO^^45678|^ftp://www.goodhealth.org/somearea/someapp^URI|^ftp://www.goodlab.org/somearea/someapp^URI
<br>EVN|A01|20150601135823+0100||ADT_EVENT|23432^Smith^Gordon^Denny^Jr^MD^^AssignAuth&1.2.3.4.5.6&ISO^L^9^1000^DN^ AssignFac&1.2.3.4.5.6.3&ISO^^G^20100101000000+0100^20330101000000+0100^doctor|20150601135822+0100|EventFac^1.2.3.4.5.4^ISO
<br>PID|1||1032702^^^V2FHIR&1.2.3.4.5&ISO^MR^AssignFac&1.2.3.4.5.6.3&ISO^20190101^20290101~N09204074^^^WADMV&1.3.4.7&ISO^DL^^20180601^20280531||Everywoman^Eve^L^Jr^Dr^^L^^^^G^20000909^20301231^PhD~Original^Eve^L^Jr^^^M^^^19700601&20000908^G|Madewell|197006010912|F||1002-5^American Indian or Alaska Native^HL70005~2106-3^White^HL70005|1000 House Lane^Appt 123^Ann Arbor ^MI^99999^USA^H^^WA~212 Resort Drive^^Miami^FL^99999^USA^V^^^^^^20210901^20211115||^PRN^PH^^1^555^555-8473~^NET^Internet^eve@test.test|^WPN^PH^^1^555^555-1126^12|en^English^HL70296|M^Married^HL70002|C^Catholic^HL70006|12345^^^ V2FHIR&1.2.3.4.5&ISO^AN|000-00-0000|J342342^^^MI&1.2.5.2.&ISO^DL||N^ Not Hispanic or Latino&HL70189|Indianapolis Indiana|Y|2|USA^United States^HL70399||||N|N||20150601135712|SndApp^1.2.3.4.5.2^ISO|||||364^Birch Creek Tribe^https://terminology.hl7.org/3.1.0/CodeSystem-v3-TribalEntityUS.html||^^internet^me@northpole.earth|
<br>PD1|||East Hospital^L^^^^AssignAuth&1.2.3.4.5.6&ISO^XX^ SndFac&1.2.3.4.5&ISO^^4324B|23432^Smith^Gordon^Denny^Jr^MD^^ AssignAuth&1.2.3.4.5.6&ISO^L^9^1000^DN^AssignFac&1.2.3.4.5.6.3&ISO^^G^20100101000000^20330101000000^doctor|N^Not a student^HL70231|W|U^Unknown^HL70315|||||||Pleasant Valley Church
<br>NK1||Everyone^Elliot^BRO^Brother^HL70396|123 High Street^^Mountainville^CA^99995
<br>PV1|1|E^EMERGENCY^HL70004|EMERG^101^01^^^^^^^^DEPID|E^Emergency^HL70007||EMERG^103^02^^^^^^^^DEPID|214425290^Doctor^Emory^E^Sr^Dr^MD^^AssignAuth&1.2.3.4.5.6&ISO^L^1^M10^NPI^AssignFac&1.2.3.4.5.6.3&ISO^^G^20100101000000^20330101000000^doctor|||EMR^Emergency^HL70069||||||VIP^very important person^HL70099|2144252903^Doctor^Emory^E^Sr^Dr^MD^^AssignAuth&1.2.3.4.5.6&ISO^L^1^M10^NPI^AssignFac&1.2.3.4.5.6.3&ISO^^G^20100101000000^20330101000000^doctor||81456267^^^ AssignAuth&1.2.3.4.5.6&ISO^VN||||||||||||||||||||Adm*Conf|||||20150601135800|||
<br>PV2||GENERAL|165002^Accident-prone^SNM||||||20150606|5||Address opportunities to be less accident prone.|214425290^Doctor^Emory^E^Sr^Dr^MD^^AssignAuth&1.2.3.4.5.6&ISO^L^1^M10^NPI^AssignFac&1.2.3.4.5.6.3&ISO^^G^20100101000000^20330101000000^doctor||||||||N^No Pubicity^HL70215|N|||2^Urgent^HL72017|||||||||||||A^Ambulance^HL70430||AC^Acute^HL70432 
<br>OBX|1|NM|8302-2^Body Height^LN||190|cm^centimeter^UCUM|||||F|
<br>AL1|1|LA^Pollen Allergy^HL70127|^Timothy Grass|MO^Moderate^HL70128|Sneeze|
<br>IN1|1|||MyInsurancePlan||||||125189^^^MyInsurancePlan&1.2.3.7.4.2&ISO^SN|Acme^L&Legal&HL70396|20150101|20151231||HMO^Health Maintenance Organization^HL70086|Everywoman^Eve^L^Jr^Dr^^L^^^^G^20000909^20301231^PhD~Original^Eve^L^Jr^^^M^^^19700601&20000908^G|SEL^Self^HL70396||||||||||||||||||||||||||||||||125189^^^MyInsurancePlan&1.2.3.7.4.2&ISO^SN|
<br>IN3|||||||||||||||||||||Case Manager Smith|
</tr>
</table>

**HL7 FHIR Bundle**
<br>To be provided

### Scheduling Messages
#### SIU_S12
**HL7 v2**
<table>
<tr>
MSH|^~\&|SndApp^1.2.3.4.5.2^ISO|SndFac^1.2.3.4.5.1^ISO|RcvApp^1.2.3.4.6.2^ISO|RcvFac^1.2.3.4.6.1^ISO|20150601145823+0100|SCH12|SIU^S12^SIU_S12|48907-45|P|2.5.1|||AL|NE|USA|ASCII|en|||SndOrg^L^0009^1^1000^AssignAuth&1.2.3.4.5&ISO^XX^AssignFac&1.2.3.4.5.3&ISO^^67890| RecOrg^L^0011^2^1000^AssignAuth&1.2.3.4.6&ISO^XX^AssignFac&1.2.3.4.5.6.3&ISO^^45678|^ftp://www.goodhealth.org/somearea/someapp^URI|^ftp://www.goodprovider.org/somearea/someapp^URI
<br>SCH|1209|13030|||1209|OV15^OFFICE VISIT-15^L|OFFICE VISIT-15^OFFICE VISIT-15^L|Normal^Routine schedule request type - default if not valued^HL70396|15|min^minutes^UCUM|^^15^20150613140000^20160621141500|999EODUSER^BACKGROUND^EOD^USER|^WPN^^^1^999^9999999|||mdrxmbyr^Byrne^Misty|^WPN^^^1^888^8888888|||999EODUSER^BACKGROUND^EOD^USER|||||Booked^The intended appoint is booked^HL70278|12345^SndApp^1.2.3.4.5.2^ISO|52431^RcvApp^1.2.3.4.6.2^ISO|
<br>PID|1||1032702^^^V2FHIR&1.2.3.4.5&ISO^MR^AssignFac&1.2.3.4.5.6.3&ISO^20190101^20290101~N09204074^^^WADMV&1.3.4.7&ISO^DL^^20180601^20280531||Everywoman^Eve^L^Jr^Dr^^L^^^^G^20000909^20301231^PhD~Original^Eve^L^Jr^^^M^^^19700601&20000908^G|Madewell|197006010912|F||1002-5^American Indian or Alaska Native^HL70005~2106-3^White^HL70005|1000 House Lane^Appt 123^Ann Arbor ^MI^99999^USA^H^^WA~212 Resort Drive^^Miami^FL^99999^USA^V^^^^^^20210901^20211115||^PRN^PH^^1^555^555-8473~^NET^Internet^eve@test.test|^WPN^PH^^1^555^555-1126^12|en^English^HL70296|M^Married^HL70002|C^Catholic^HL70006|12345^^^ V2FHIR&1.2.3.4.5&ISO^AN|000-00-0000|J342342^^^MI&1.2.5.2.&ISO^DL||N^ Not Hispanic or Latino&HL70189|Indianapolis Indiana|Y|2|USA^United States^HL70399||||N|N||20150601135712|SndApp^1.2.3.4.5.2^ISO|||||364^Birch Creek Tribe^https://terminology.hl7.org/3.1.0/CodeSystem-v3-TribalEntityUS.html||^^internet^me@northpole.earth|
<br>PV1|1|E^EMERGENCY^HL70004|EMERG^101^01^^^^^^^^DEPID|E^Emergency^HL70007||EMERG^103^02^^^^^^^^DEPID|214425290^Doctor^Emory^E^Sr^Dr^MD^^AssignAuth&1.2.3.4.5.6&ISO^L^1^M10^NPI^AssignFac&1.2.3.4.5.6.3&ISO^^G^20100101000000^20330101000000^doctor|||EMR^Emergency^HL70069||||||VIP^very important person^HL70099|2144252903^Doctor^Emory^E^Sr^Dr^MD^^AssignAuth&1.2.3.4.5.6&ISO^L^1^M10^NPI^AssignFac&1.2.3.4.5.6.3&ISO^^G^20100101000000^20330101000000^doctor||81456267^^^ AssignAuth&1.2.3.4.5.6&ISO^VN||||||||||||||||||||Adm*Conf|||||20150601135800|||
<br>PV2||GENERAL|165002^Accident-prone^SNM||||||20150606|5||Address opportunities to be less accident prone.|214425290^Doctor^Emory^E^Sr^Dr^MD^^AssignAuth&1.2.3.4.5.6&ISO^L^1^M10^NPI^AssignFac&1.2.3.4.5.6.3&ISO^^G^20100101000000^20330101000000^doctor||||||||N^No Pubicity^HL70215|N|||2^Urgent^HL72017|||||||||||||A^Ambulance^HL70430||AC^Acute^HL70432 
<br>RGS|1|A
<br>AIG|1||PULLEN^Pullen, Jeri|P^^CSI
<br>AIL|1||MainOffi^^^MainOffi^^^^^Healthmatics Clinic|^Healthmatics Clinic^CSI
<br>AIP|1||JPULLEN1^Pullen^Jeri^^^^^^&F12456&UPIN|D^Pullen, Jeri||20190423140000|||15|m^Minutes
</tr>
</table>

**HL7 FHIR Bundle**
<br>To be provided

### Order Messages
#### ORM_O01
**HL7 v2**
<table>
<tr>
MSH|^~\&#|SndApp^1.2.3.4.5.2^ISO|SndFac^1.2.3.4.5.1^ISO|RcvApp^1.2.3.4.6.2^ISO|RcvFac^1.2.3.4.6.1^ISO|20150601160901.12+0100|20150601160810+0500|ORM^O01^ORM_O01|5381904|P|2.3.1|||AL|AL|USA|ASCII|en-US^^ISO639|
<br>PID|1||1032702^^^SndFac&1.2.3.4.5&ISO^MR^ AssignFac&1.2.3.4.5.6.3&ISO^20190101^20290101||Everywoman^Eve^L^Jr^Dr^^L^^^^G^20000909^20301231^PhD~ Original^Eve^L^Jr^^^M^^^19700601&20000908^G||197006010912|F||1002-5^American Indian or Alaska Native^HL70005~2106-3^White^HL70005|1000 House Lane^Appt 123^Ann Arbor ^MI^99999^USA^H^^WA||^PRN^PH^^1^555^555-8473~^NET^Internet^eve@test.test|^WPN^PH^^1^555^555-1126^12|en-US^^ISO639|M^Married^HL70002|CHR^Christian^HL70006|12345^^^ SndFact&1.2.3.4.5&ISO^AN||12345^MI^20180219||N^Not Hispanic or Latino&HL70189|1025 House Lane^^Ann Arbor ^MI^99999^USA^H^^WA|Y|2|NL^Netherlands^ISO3166||||N|
<br>PV1|1|E^EMERGENCY^HL70004|EMERG^101^01^^^^^^^^DEPID|E^Emergency^HL70007|| | |||857432^Jones^Emily^^^MD^^ AssignAuth&1.2.3.4.5.6&ISO^L^9^1000^DN^ AssignFac&1.2.3.4.5.6.3&ISO^^G^20100101000000^20330101000000^doctor|||||| |||81456267^^^AssignAuth&1.2.3.4.5.6&ISO^VN|T^Third Party Bill^HL70064||||||||||||||||||||||||20150601135800|
<br>PV2|||^Not feeling well|||||201506011609|||||23432^Smith^Gordon^Denny^Jr^MD^^AssignAuth&1.2.3.4.5.6&ISO^L^9^1000^DN^AssignFac&1.2.3.4.5.6.3&ISO^^G^20100101000000^20330101000000^doctor||||||||F|N|||2^Urgent^HL72017|
<br>IN1|1|200101^Medicare A and B|2001|Medicare|[Get CMS address]|||123450-1||[check on workman�s comp]|20150101|20151231||Medicare|Everywoman^Eve^L^Jr^Dr^^L^^^^G^20000909^20301231^PhD~Original^Eve^L^Jr^^^M^^^19700601&20000908^G|SEL^Self^HL70063|197006010912|1000 House Lane^Appt 123^Ann Arbor^MI^99999^USA^H^^WA|||||||||||||||||54321-01|
<br>AL1|1|LA^Pollen Allergy^HL70127|^Timothy Grass|MO^Moderate^HL70128|Sneeze|201406|
<br>ORC|NW|ORD777889^SndApp^1.2.3.4.5.2^ISO||GORD874245^SndApp^1.2.3.4.5.2^ISO|||1^^^20150601^^R||201506011610|1234567890^PhysicianAssistant^Will^John^III^Mr.^PA^&372526&L^L^^^NPI^^^^G^20140129^^FHL7|5742200012^Radon^Nicholas^^^^^^&372526&L^L^^^NPI|5742200012^Radon^Nicholas^^^^^^&372526&L^L^^^NPI|||||^^^^^^^^Emergency Department|||2^Patient has been informed of responsibility, and agrees to pay for service^HL70339|SndApp^1.2.3.4.5.2^ISO|Emergency Lane&&911^First Floor^Ann Arbor^MI^99999^USA^S&Service Location&HL70190^^WA^9876^^20100612^^^^^^^Attn: ED Doc in Charge|555-555-9110|Emergency Lane&&912^Medical Building I^Ann Arbor^MI^99999^USA^S&Service Location&HL70190^^WA^9876^^20100813^^^^^^^Attn: Office Manager
<br>OBR|1|ORD777888^SndApp^1.2.3.4.5.2^ISO||51523-9^Grass Pollen Mix^LN|R|201506011608|201506011608||||||||SER&Serum&HL0070|5742200012^Radon^Nicholas^^^^^^&372526&L^L^^^NPI|^WPN^PH^^1^555^5559908^34||||||||||1^^^20150601^^R|10092000194^Hamlin^Pafford^^^^^^&372526&L^L^^^NPI
<br>NTE|1||Bluegrass is in bloom at the moment|RE|
</tr>
</table>

**HL7 FHIR Bundle**
<br>To be provided

#### OML_O21
**HL7 v2**
<table>
<tr>
MSH|^~\&#|SndApp^1.2.3.4.5.2^ISO|SndFac^1.2.3.4.5.1^ISO|RcvApp^1.2.3.4.6.2^ISO|RcvFac^1.2.3.4.6.1^ISO|20150601160901.12+0100||OML^O21^OML_O21|5381903|P|2.5.1|||AL|AL|USA|ASCII|en-US^^ISO639||LOI_Common_Component^LOI Base Profile^2.16.840.1.113883.9.66^ISO~LOI_NG_Component^LOI NG Profile^2.16.840.1.113883.9.79^ISO~LAB_PRU_Component^LOI PRU Profile^2.16.840.1.113883.9.82^ISO~ LOI_RC_Component^2.16.840.1.113883.9.96^ISO
<br>PID|1||1032702^^^SndFac&1.2.3.4.5&ISO^MR^ AssignFac&1.2.3.4.5.6.3&ISO^20190101^20290101||Everywoman^Eve^L^Jr^Dr^^L^^^^G^20000909^20301231^PhD~ Original^Eve^L^Jr^^^M^^^19700601&20000908^G||197006010912|F||1002-5^American Indian or Alaska Native^HL70005~2106-3^White^HL70005|1000 House Lane^Appt 123^Ann Arbor ^MI^99999^USA^H^^WA||^PRN^PH^^1^555^555-8473~^NET^Internet^eve@test.test|^WPN^PH^^1^555^555-1126^12|en-US^^ISO639|M^Married^HL70002|CHR^Christian^HL70006|12345^^^ SndFact&1.2.3.4.5&ISO^AN||12345^MI^20180219||N^ Not Hispanic or Latino &HL70189|1025 House Lane^^Ann Arbor ^MI^99999^USA^H^^WA|Y|2|NL^Netherlands^ISO3166||||N|
<br>PV1|1|E^EMERGENCY^HL70004|EMERG^101^01^^^^^^^^DEPID|E^Emergency^HL70007|| | |||857432^Jones^Emily^^^MD^^ AssignAuth&1.2.3.4.5.6&ISO^L^9^1000^DN^ AssignFac&1.2.3.4.5.6.3&ISO^^G^20100101000000^20330101000000^doctor|||||| |||81456267^^^ AssignAuth&1.2.3.4.5.6&ISO^VN|T^Third Party Bill^HL70064||||||||||||||||||||||||20150601135800|
<br>PV2|||^Not feeling well|||||201506011609|||||23432^Smith^Gordon^Denny^Jr^MD^^ AssignAuth&1.2.3.4.5.6&ISO^L^9^1000^DN^ AssignFac&1.2.3.4.5.6.3&ISO^^G^20100101000000^20330101000000^doctor||||||||F|N|||2^Urgent^HL72017|||||||||||||A^Ambulance^HL70430||AC^Acute^HL70432
<br>IN1|1|200101^Medicare A and B|2001|Medicare|[Get CMS address]|||123450-1||[check on workman�s comp]|20150101|20151231||Medicare| Everywoman^Eve^L^Jr^Dr^^L^^^^G^20000909^20301231^PhD~ Original^Eve^L^Jr^^^M^^^19700601&20000908^G|SEL^Self^HL70063|197006010912|1000 House Lane^Appt 123^Ann Arbor ^MI^99999^USA^H^^WA|||||||||||||||||54321-01|
<br>AL1|1|LA^Pollen Allergy^HL70127|^Timothy Grass|MO^Moderate^HL70128|Sneeze|
<br>ORC|NW|ORD777888^SndApp^1.2.3.4.5.2^ISO||GORD874244^ SndApp^1.2.3.4.5.2^ISO|||1^^^20150601^^R||201506011608|1234567890^PhysicianAssistant^Will^John^III^Mr.^PA^&372526&L^L^^^NPI^^^^G^20140129^^FHL7|5742200012^Radon^Nicholas^^^^^^&372526&L^L^^^NPI|5742200012^Radon^Nicholas^^^^^^&372526&L^L^^^NPI|||||^^^^^^^^Emergency Department|||2^Patient has been informed of responsibility, and agrees to pay for service^HL70339| SndApp^1.2.3.4.5.2^ISO|Emergency Lane&&911^First Floor^Ann Arbor^MI^99999^USA^S&Service Location&HL70190^^WA^9876^^20100612^^^^^^^Attn: ED Doc in Charge|555-555-9110|Emergency Lane&&912^Medical Building I^Ann Arbor^MI^99999^USA^S&Service Location&HL70190^^WA^9876^^20100813^^^^^^^Attn: Office Manager|||||O^Outpatient Order^HL70482
<br>OBR|1|ORD777888^SndApp^1.2.3.4.5.2^ISO||51523-9^Grass Pollen Mix^LN|R|201506011608|201506011608|||||||||5742200012^Radon^Nicholas^^^^^^CMS&1.2.3.4.6.34&ISO^L^^^NPI|^WPN^PH^^1^555^5559908^34||||||||||1^^^20150601^^R|10092000194^Hamlin^Pafford^^^^^^&372526&L^L^^^NPI
<br>NTE|1||Bluegrass is in bloom at the moment|RE|5742200012^Radon^Nicholas^^^^^^&372526&L^L^^^NPI|201506011608
<br>PRT|1^^372520^L|AD||RCT^Result Copies To^HL70912^^^^^^Send blind carbon copies 
<br>SPM|1|SPM1234&SndFac&1.2.3.4.5&ISO||SER^Serum^HL70487|||VENIP^Venipuncture^HL70488|Arm^Arm^HL70784|Left^Left^HL70542|||2^mL&milliliter&UCUM||This is a wonderful blood sample.\R\My first blood draw!|||201506011608|||Y||||ROOM^Room Temperature^HL70493|||RT^Red Top^HL70785|||||SHP1234^USPS&1.3.2.4^ISO|
</tr>
</table>

**HL7 FHIR Bundle**
<br>To be provided

### Result Messages
#### ORU_R01
**HL7 v2**
<table>
<tr>
MSH|^~\&#|LabApp^9.8.7.6.5^ISO|LabFac^8.7.6.4^ISO|OrdApp^1.2.3.4.5^ISO|OrdFac^2.3.4.4^ISO|20150602100012.43+0100|DEADBEEF|ORU^R01^ORU_R01|20251014154001-425|P|2.5.1|||AL|AL|USA|UNICODE UTF-8|en-US^^ISO639||LRI..get...|
<br>PID|1||1032702^^^OrdOrg&3.4.5.6.7&ISO^MR^OrdFac&2.3.4.5.6&ISO^20190101^20290101||Everywoman^Eve^L^Jr^Dr^^L^^^^G^20000909^20301231^PhD~Original^Eve^L^Jr^^^M^^^19700601&20000908^G||197006010912|F||1002-5^American Indian or Alaska Native^HL70005~2106-3^White^HL70005|1000 House Lane^Appt 123^Ann Arbor^MI^99999^USA^H^^WA||^PRN^PH^^1^555^555-8473~^NET^Internet^eve@test.test|^WPN^PH^^1^555^555-1126^12|en-US^^ISO639|M^Married^HL70002|CHR^Christian^HL70006|12345^^^OrdFac&2.3.4.5.6&ISO^AN||12345^MI^20180219||N^Not Hispanic or Latino&HL70189|1025 House Lane^^Ann Arbor^MI^99999^USA^H^^WA|Y|2|NL^Netherlands^ISO3166||||N|
<br>PV1|1|E^EMERGENCY^HL70004|EMERG^101^01^^^^^^^^DEPID|E^Emergency^HL70007|||857432^Jones^Emily^^^MD^^OrdOrg&3.4.5.6.7.8&ISO^L^9^1000^DN^OrdFac&2.3.4.5.6&ISO^^G^20100101000000^20330101000000^doctor||||||||||||81456267^^^AssignAuth&1.2.3.4.5.6&ISO^VN|T^Third Party Bill^HL70064||||||||||||||||||||||||20150601135800|
<br>PV2|||^Not feeling well|||||201506011609|||||23432^Smith^Gordon^Denny^Jr^MD^^OrdOrg&3.4.5.6.7&ISO^L^9^1000^DN^OrdFac&2.3.4.5.6&ISO^^G^20100101000000^20330101000000^doctor||||||||F|N|||2^Urgent^HL72017|||||||||||||A^Ambulance^HL70430||AC^Acute^HL70432
<br>ORC|RE|ORD777888^OrdFac^2.3.4.4^ISO|LAB4432^LabFac^8.7.6.4^ISO|GORD874244^OrdFac^2.3.4.4^ISO|CM||1^^^20150601^^R ||201506011608|1234567890^PhysicianAssistant^Will^John^III^Mr.^PA^&372526&L^L^^^NPI^^^^G^20140129^^FHL7|5742200012^Radon^Nicholas^^^^^^&372526&L^L^^^NPI|5742200012^Radon^Nicholas^^^^^^&372526&L^L^^^NPI|||||^^^^^^^^Emergency Department|||2^Patient has been informed of responsibility, and agrees to pay for service^HL70339|OrdFac^2.3.4.4^ISO|Emergency Lane&&911^First Floor^Ann Arbor^MI^99999^USA^S&Service Location&HL70190^^WA^9876^^20100612^^^^^^^Attn: ED Doc in Charge|555-555-9110|Emergency Lane&&912^Medical Building I^Ann Arbor^MI^99999^USA^S&Service Location&HL70190^^WA^9876^^20100813^^^^^^^Attn: Office Manager|||||O^Outpatient Order^HL70482
<br>OBR|1|ORD777888^OrdFac^2.3.4.4^ISO|LAB4432^LabFac^8.7.6.4^ISO|51523-9^Grass Pollen Mix^LN|R|201506011608|201506011608|||||||||5742200012^Radon^Nicholas^^^^^^&372526&L^L^^^NPI|^WPN^PH^^1^555^5559908^34|||||201506011811|||F||1^^^20150601^^R|10092000194^Hamlin^Pafford^^^^^^&372526&L^L^^^NPI
<br>NTE|1||Allergy test interpretations are subjective.|RE|8945432^Gonzalez^Maria^^^^^^&372526&L^L^^^NPI|201506011810
<br>PRT|1^^372520^L|AD||RCT^Result Copies To^HL70912^^^^^^Send blind carbon copies to|10092000194^Hamlin^Pafford^^^^^^&372526&L^L^^^NPI||||||||||^^FX^^^323^5555555
<br>OBX|1|NM|6153-1^IgE Blue Grass Kentucky^LN|1|3.9|kU/L|<0.10|A^Abnormal^HL70078||N^None - generic normal range^HL70080|F|||201506011608|CentralLab^Central Laboratory^HL70624|1234^Observer^Test^^^^^^LabFac&8.7.6.5.4&&ISO|||201506011605||||||||||RSLT
<br>OBX|2|NM|6041-8^IgE Bermuda Grass^LN|2|0.59|kU/L|<0.10|A^Abnormal^HL70078||N^None - generic normal range^HL70080|F|||201506011608|CentralLab^Central Laboratory^HL70624|1234^Observer^Test^^^^^^LabFac&8.7.6.5.4&&ISO||||201506011605|||||||||RSLT
<br>OBX|3|SN|6265-3^IgE Timothy Grass^LN|3|<0.10|kU/L|<0.10|N^Normal^HL70078||N^None - generic normal range^HL70080|F|||201506011608|CentralLab^Central Laboratory^HL70624|1234^Observer^Test^^^^^^LabFac&8.7.6.5.4&&ISO||||201506011605|||||||||RSLT
</tr>
</table>

**HL7 FHIR Bundle**
<br>To be provided

### Medical Records Messages
#### MDM_T02
**HL7 v2**
<table>
<tr>
MSH|^~\&|HIE|REDDING HOSPITAL|||20230814022400||MDM^T02^MDM_T02|10819306|P|2.5.1
<br>EVN||20230814022400
<br>PID|||000322330^^^REDDING HOSPITAL&1.1.1.1&GUID^MR||JOHN^DOE^TEST^JR.^^^D||19941201|M|||3003 TESTING RD LOT 92^^BOULDER^CO^12345-2144^US^P^^BOULDER||(103)144-1441^P^H^^^103^1443441|||||1055989633^^^^HAR
<br>PV1||I|F1N^F151^F151-01^FTH^^^^^HILLS 1 North Oncolog||||1123456771^MITCHELL^HILA^K^^^^^NPI^^^^NPI||||||||||||1234567891|||||||||||||||||||||||||20230729081300
<br>ORC|RE|ORD777999^SndFac^1.2.3.4.5^ISO|432344432^FillerFac^8.7.6.5.4^ISO|GORD874299^SndFac^1.2.3.4.5^ISO|CM||||20230814011500+0000|||5742200012^Radon^Nicholas^^^^^^&372526&L^L^^^NPI|||||Good Health Hospital^L||||||||||||I|
<br>TQ1|1|1
<br>OBR|1||432344432^FillerFac^8.7.6.5.4^ISO|11502-2^^LN^^Laboratory Report|||20130408141909.0+0000|20130411154157.0+0000||||||||5742200012^Radon^Nicholas^^^^^^&372526&L^L^^^NPI|||||||||F|
<br>TXA|1|PN|TX|20230820174913|1780850958^JOHNSON^VALERIE^^^^^^&372526&L^L^^^NPI|20230820174913||20230820191149|5742200012^Radon^Nicholas^^^^^^&372526&L^L^^^NPI|1123456771^MITCHELL^HILA^K^^^^^&372526&L^L^^^NPI||3738931392^REDDING HOSPITAL&1.1.1.1&GUID||||PN_Radon_20230820174913.RTF|AU|R|AV||||5742200445^Smith^Natasha^^^^^^&372526&L^L^^^NPI||Discharge Summary|
<br>OBX|1|TX|85202^Transcription Authentication Interface Message Text|1|Transcription Authentication Interface Message Text||||||F
<br>OBX|2|FT|1055860039^Critical Values - Text||Critical Values Entered On:  08/22/2023 2:11 EDT \.br\ Performed On:  08/22/2023 2:11 EDT by BOYLE, KRISTEN C \.br\ \.br\ \.br\ \.br\ \.br\Called Critical Value Reported \.br\Critical Value Reported Lab :   Yes \.br\BOYLE, KRISTEN C - 08/22/2023 2:11 EDT \.br\Critical Lab Values \.br\Red List Hematology Grid \.br\  Heparin Test (AntiXa)        \.br\Lab Values :    1.27            \.br\  BOYLE, KRISTEN C - 08/22/2023 2:11 EDT     \.br\\.br\Result Received :   08/22/2023 02:11 EDT \.br\Received From :   K Gresco (Lab) \.br\Red List Result Read Back :   K Boyle (ED) \.br\Provider Notified :   No \.br\Reason not notified :   Protocol utilized \.br\BOYLE, KRISTEN C - 08/22/2023 2:11 EDT||||||F|||20230822021111||
<br>OBX|3|ST|&GDT^Critical Values-String||Table formatting from the original result was not included.||||||F
<br>OBX|4|ED|1111.2^PHQ-9 Depression Screen PDF^L^44249-1^PHQ-9 quick depression assessment panel [Reported.PHQ]^LN||CareCoordination^AP^PDF^Base64^<Base64 encoded>||||||F
<br>
</tr>
</table>

**HL7 FHIR Bundle**
<br>To be provided
  
### Immunization Messages
#### VXU_V04
**HL7 v2**
<table>
<tr>
MSH|^~\&|SndApp^1.2.3.4.5.2^ISO|SndFac^1.2.3.4.5.1^ISO|RcvISSApp^1.2.3.4.7^ISO|RcvIISFac^1.2.3.4.8^ISO|20150624084727.655-0500||VXU^V04^VXU_V04|5381910|P|2.5.1|||ER|AL|USA|ASCII|en-US^^ISO639||Z22^CDCPHINVS|SndOrg^L&Legal&HL70204^^^^^^^^1234516|RcvIIS^L^^^^^^^^41526
<br>PID|1||1032702^^^SndFac&1.2.3.4.5&ISO^MR^ AssignFac&1.2.3.4.5.6.3&ISO^20190101^20290101||Everywoman^Eve^L^Jr^Dr^^L^^^^G^20000909^20301231^PhD~ Original^Eve^L^Jr^^^M^^^19700601&20000908^G||197006010912|F||1002-5^American Indian or Alaska Native^HL70005~2106-3^White^HL70005|1000 House Lane^Appt 123^Ann Arbor ^MI^99999^USA^H^^WA||^PRN^PH^^1^555^555-8473~^NET^Internet^eve@test.test|^WPN^PH^^1^555^555-1126^12|en-US^^ISO639|M^Married^HL70002|CHR^Christian^HL70006|12345^^^ SndFact&1.2.3.4.5&ISO^AN||12345^MI^20180219||N^ Not Hispanic or Latino &HL70189|1025 House Lane^^Ann Arbor ^MI^99999^USA^H^^WA|Y|2|NL^Netherlands^ISO3166||||N|
<br>PD1|||Primary Care Docs^L^^^^CMS&1.2.3.4.6.34&ISO^NPI^^^48295|5742200012^Radon^Nicholas^^^^^^&372526&L^L^^^NPI|P^Part-time student^HL70231|228158008 ^Walking disability (finding)^SCT|Y^Yes, pateint has a living will^HL0315||||02^Reminder/recall -  any method^HL70215|N|20150624|My Place of Worship^L&Legal&HL70204||A|19830615|20150624
<br>ORC|RE|4422^SndApp^1.2.3.4.5.2^ISO|13696^SndApp^1.2.3.4.5.2^ISO||CM^Order is complete^HL70038||||201506240840|7824^Jackson^Lily^Suzanne^^^^^NIST-PI-1^L^^^PRN||654^Thomas^Wilma^Elizabeth^^^^^NIST-PI-1^L^^^MD||555-123-4567^BPN^BP^^1^555^1234567|||NISTEHRFAC^NISTEHRFacility^HL70362||||Vaccine Clinic^L^^^^Asgn Auth&1.2.3.6.4.7&ISO^^^^3748295|
<br>RXA|0|1|201506240830||49281-0215-88^TENIVAC^NDC|0.5|mL^mL^UCUM||00^New Record^NIP001|7824^Jackson^Lily^Suzanne^^^^^NIST-PI-1^L^^^PRN|^^^NIST-Clinic-1||||315841|20151216|PMC^Sanofi Pasteur^MVX|||CP|A|201506240831|||||^^^^^^^^Drive in around the corner of High Street and Walnut Avenue|123 Vaccine Lane^^Ann Arbor^MI^99999^USA^L|
<br>RXR|C28161^Intramuscular^NCIT|RD^Right Deltoid^HL70163
<br>OBX|1|CE|30963-3^Vaccine Funding Source^LN|1|PHC70^Private^CDCPHINVS||||||F|||20150624
<br>OBX|2|CE|64994-7^Vaccine Funding Program Eligibility^LN|2|V01^Not VFC Eligible^HL70064||||||F|||20150624|||VXC40^per immunization^CDCPHINVS
<br>OBX|3|CE|69764-9^Document Type^LN|3|253088698300028811170411^Tetanus/Diphtheria (Td) Vaccine VIS^cdcgs1vis||||||F|||20150624
<br>OBX|4|DT|29769-7^Date Vis Presented^LN|3|20150624||||||F|||20150624
<br>ORC|RE|4422^SndApp^1.2.3.4.5.2^ISO|13696^SndApp^1.2.3.4.5.2^ISO||CM^Order is complete^HL70038||||201506240840|7824^Jackson^Lily^Suzanne^^^^^NIST-PI-1^L^^^PRN||654^Thomas^Wilma^Elizabeth^^^^^NIST-PI-1^L^^^MD||555-123-4567^BPN^BP^^1^555^1234567|||NISTEHRFAC^NISTEHRFacility^HL70362||||Vaccine Clinic^L^^^^Asgn Auth&1.2.3.6.4.7&ISO^^^^3748295
<br>RXA|0|1|20141012||88^influenza, unspecified formulation^CVX|999|||01^Historical Administration^NIP001|||||||||||CP|A|||||||123 Vaccine Lane^^Ann Arbor^MI^99999^USA^L|
<br>ORC|RE|4422^SndApp^1.2.3.4.5.2^ISO|13696^SndApp^1.2.3.4.5.2^ISO||CM^Order is complete^HL70038||||201506240840|7824^Jackson^Lily^Suzanne^^^^^NIST-PI-1^L^^^PRN||654^Thomas^Wilma^Elizabeth^^^^^NIST-PI-1^L^^^MD||555-123-4567^BPN^BP^^1^555^1234567|||NISTEHRFAC^NISTEHRFacility^HL70362||||Vaccine Clinic^L^^^^Asgn Auth&1.2.3.6.4.7&ISO^^^^3748295
<br>RXA|0|1|20131112||88^influenza, unspecified formulation^CVX|999|||01^Historical Administration^NIP001|||||||||||CP|A|||||||123 Vaccine Lane^^Ann Arbor^MI^99999^USA^L|
</tr>
</table>

**HL7 FHIR Bundle**
<br>To be provided


---

// File: input/pagecontent/unspecified_mapping.md

# Unspecified Mapping
Their is no mapping from HL7 Version 2 to FHIR.  This can occur:

1. When HL7 Version 2 does not specify any vocabulary for a coded field.  In this case, the behavior for mapping the field is implementation defined.
2. When HL7 FHIR does not specify recommend vocabulary for the target resource, but there is an HL7 Version 2 value set.  In these cases, the implementation may simply use the HL7 Version 2 Value 
set to populate the codes in the FHIR Resource.



---

// File: input/pagecontent/validation.md

Validation of mappings is an important step in the process to ensure the v2-FHIR mapper deployed is fit to purpose.  This means not only that the mappings are reflecting the agreed to mappings in this guide, but also that it considers local variations in use of HL7 v2 that may not be fully conformant to the standard, as well as local extensions using z-segments.  For that reason, and the complexities and efforts required, HL7 is not provider a transform validator, although it will provide a set of HL7 v2 test messages with corresponding HL7 FHIR Bundles that reflect the defined mappings.

This section is informative and describes key characteristics of a transform validator that is based on the basic premise that the HL7 v2 message being validated is a correct, HL7 v2 conformant message.  Any variations in conformance need to be addressed, which may include updates to the mappings to accommodate any remaining variances.

To <b>validate</b> a transform means: to check that it is correct, and to note any discrepancies between its inputs and its outputs. 
‘correct’ means: ‘the output of the transform is consistent with a set of V2 to FHIR mappings’. These can either be the ‘canonical’
mapping tables produced by the V2-to-FHIR mapping project, or some local variants of those tables (e.g., mappings from UK V2 to UK
FHIR profiles). Validation is a <b>semantic</b> check of the output of a transform against the input of that transform – i.e., it
checks that each data value in the FHIR output is derived correctly from the V2 input (or vice versa, for a FHIR to V2 transform).

A transform validator could be made available by anybody as open source or a service from any FHIR server – typically using local variants of the mapping tables, to reflect local usage of HL7 V2 and FHIR.  However, HL7 has no plans to either create, nor certify any transform validator at this time.

### Use Cases
Three use cases of transform validation are described here:

* <b>Validating a Direct Transform (by an integration engine or transform engine):</b>

Here, someone already has a V2-FHIR transform – provided by an integration engine or transform software – and they need to check
that it operates correctly. For a small test set of V2 input messages, they use their transform engine to produce the FHIR outputs,
and they submit the transform pairs (V2 message + FHIR bundle) to the validator. It notes any errors and gaps it finds in the FHIR
outputs. This is shown below:

![Validation_1](Validation_1.png)

* <b>Validating an Indirect transform (by a healthcare application):</b>

Many healthcare applications receive data as V2 messages, store the information internally (e.g. in a relational database), and
later produce FHIR outputs. This is an indirect transform – and its correctness can be checked in the same way as a direct transform
can be checked.

![Validation_2](Validation_2.png)

* <b>Cross-checking healthcare data across an organisation:</b>

A typical hospital or cluster of healthcare providers has many V2 messages in circulation. Increasingly, it also has FHIR bundles
and resources. Both V2 and FHIR will be in widespread use for the foreseeable future, and there is a risk that separate V2 and
FHIR worlds will be out of step – and even if they only differ in a few details, this matters. There is a need to check that some
set of FHIR bundles and resources (e.g. from a FHIR server) is semantically consistent with a set of V2 messages. This may not be
just a set of individual validations of (V2, FHIR) pairs, but may also involve data quality techniques such as record matching, and
summary reporting across sets of records. Still the underlying cross-check of a V2 message against a FHIR bundle or resource is
required, and the validator will do this.

![Validation_3](Validation_3.png)

### Current Status and Intentions
A prototype of a validator, developed by Robert Worden, was used during a Connectathon and subsequent validations of the mapping tables to identify a series of issues during the definitional phase, although it has not been used for all mappings to date. Its inputs are:

* A set of V2-FHIR mapping tables – typically with one message level mapping table, with segment-level mapping tables for all the
segments in the message, data type mapping tables, and code value mapping tables
* One or more pairs, of a V2 message and the FHIR bundle produced from it by a transform

The mapping tables are csv files, derived from the Google sheets in which the V2-FHIR mapping project is making mappings. In future
the validator will read mapping tables as ConceptMap resources.

The validator operations and outputs are:

* First it checks the mapping tables, noting any ways in which they are syntactically or otherwise invalid – giving a table of warning
messages about the mappings
* Then for each V2-FHIR pair, it checks that the FHIR output bundle is what should be produced by a transform from the V2 input.
This includes checking each data value in the bundle (against a value in the V2 message, or against an expected fixed value, or code
conversion), and checking that no data values are missing from the bundle. In future, resource references will be checked.
Discrepancies are noted in an output table.

Typical entries in the table of warnings about problems in the mappings are:

![Validation_4](Validation_4.png)

It is best to resolve the mapping issues before validating transform pairs.

Typical entries in the table of discrepancies in a transform result are:

![Validation_5](Validation_5.png)

When a validator is operating as a service on a FHIR server, all its inputs and outputs should be FHIR resources. This will require
some way to wrap a V2 message in a FHIR resource (in a Basic or Binary resource?), and the validator result tables may be profiled
OperationOutcome resources. It may also be useful to be able to specify (in a Parameters resource?) what kinds of validation output
are required – e.g. what fields in the FHIR outputs need to be checked; or to combine validation of the transform with validation of
the transform output FHIR against profiles.

### Outlook
A transform validator can be an important deliverable of the V2-FHIR mapping project, as well as implementations, enabling
users of HL7 V2 and FHIR to check that V2 messages and FHIR resources are correctly related to one another.  It will be of interest to
healthcare providers, and to national and regional healthcare authorities, to help them ensure the data quality of their applications.

Any regional healthcare authority may wish to use the mapping tables developed by the V2-to-FHIR mapping project, to develop local
variant mapping tables which reflect the ways in which V2 and FHIR are used in their region (local profiles and usages), and then to
offer a local validation service using those mapping tables. Suppliers of transform services may wish to use the validator to test and
demonstrate the quality of their offerings.

Once such a transform validator is available and used in this way, then feedback from its local deployments will help to refine and improve the
centrally-developed mapping tables.

Improved healthcare data quality reduces costs and improves patient care. An important part of data quality is consistency between
v2 data and FHIR data.  Since HL7 is the source of these two widely-used standards, HL7 has the opportunity (and perhaps an obligation)
to help organisations use them together consistently and effectively. A V2-FHIR transform validator will help meet this need –
providing a valuable service to healthcare providers worldwide.

Providing a strong cross-check between HL7 V2 and FHIR – where they overlap – will go a long way to make them a coherent and unified
offering, helping to unify HL7’s product set. Over time, similar cross-checks could be provided for CDA and for OpenEHR.

As stated, currently HL7 does not provide such a validator as part of the IG and has no plans to develop and support one but remains interested to learn more from others who may be pursuing this opportunity.


---

// File: input/images-source/README.md

If you have source files which are used to generate images (e.g., A Power Point presentation, they go here.)

---

// File: input/images/README.md

If you have images, they go in this folder.

---

// File: input/includes/ConceptMap-datatype-ce-to-codeableconcept-intro.md


This ConceptMap represents the mapping from the HL7 V2 CE Data Type to the FHIR CodeableConcept Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CE to CodeableConcept.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CE[CodeableConcept] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'>If mapped to FHIR, use Code System and Display</td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.code'>CodeableConcept.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.code'>CodeableConcept.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CE.2</td><td>Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.display'>CodeableConcept.coding.display</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CE.3</td><td>Name of Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.system'>CodeableConcept.coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.uri'>CodeableConcept.uri</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td>This is only an indirect mapping in that the vocabulary table will give the actual uri. </td></tr>
<tr><td>4</td><td>CE.4</td><td>Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.code'>CodeableConcept.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.code'>CodeableConcept.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CE.5</td><td>Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.display'>CodeableConcept.coding.display</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>6</td><td>CE.6</td><td>Name of Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.system'>CodeableConcept.coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.uri'>CodeableConcept.uri</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td>This is only an indirect mapping in that the vocabulary table will give the actual uri</td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-ce-to-codeableconcept-notes.md



---

// File: input/includes/ConceptMap-datatype-cf-to-codeableconcept-intro.md


This ConceptMap represents the mapping from the HL7 V2 CF Data Type to the FHIR CodeableConcept Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CF to CodeableConcept.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CF[CodeableConcept] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CWE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'>If mapped to FHIR, use Code System and Display</td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.code'>CodeableConcept.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.code'>CodeableConcept.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CWE.2</td><td>Text</td><td>FT</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.display'>CodeableConcept.coding.display</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CWE.3</td><td>Name of Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.system'>CodeableConcept.coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.uri'>CodeableConcept.uri</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td>This is only an indirect mapping in that the vocabulary table will give the actual uri. </td></tr>
<tr><td>4</td><td>CWE.4</td><td>Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.code'>CodeableConcept.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.code'>CodeableConcept.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CWE.5</td><td>Alternate Text</td><td>FT</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.display'>CodeableConcept.coding.display</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>6</td><td>CWE.6</td><td>Name of Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.system'>CodeableConcept.coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.uri'>CodeableConcept.uri</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td>This is only an indirect mapping in that the vocabulary table will give the actual uri</td></tr>
<tr><td>7</td><td>CWE.7</td><td>Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.version'>CodeableConcept.coding.version</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CWE.8</td><td>Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.version'>CodeableConcept.coding.version</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CWE.9</td><td>Original Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.text'>CodeableConcept.text</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CWE.10</td><td>Second Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.code'>CodeableConcept.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.code'>CodeableConcept.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CWE.11</td><td>Second Alternate Text</td><td>FT</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.display'>CodeableConcept.coding.display</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>12</td><td>CWE.12</td><td>Name of Second Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.system'>CodeableConcept.coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.uri'>CodeableConcept.uri</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>13</td><td>CWE.13</td><td>Second Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.version'>CodeableConcept.coding.version</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td>This is only an indirect mapping in that the vocabulary table will give the actual uri. </td></tr>
<tr><td>14</td><td>CWE.14</td><td>Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>15</td><td>CWE.15</td><td>Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>16</td><td>CWE.16</td><td>Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>17</td><td>CWE.17</td><td>Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>18</td><td>CWE.18</td><td>Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>19</td><td>CWE.19</td><td>Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>20</td><td>CWE.20</td><td>Second Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>21</td><td>CWE.21</td><td>Second Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>22</td><td>CWE.22</td><td>Second Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cf-to-codeableconcept-notes.md



---

// File: input/includes/ConceptMap-datatype-cm-source-to-specimen-intro.md


This ConceptMap represents the mapping from the HL7 V2 CM Data Type to the FHIR Specimen Resource. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CM[Source] to Specimen.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CM[Specimen-Source] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CM.1</td><td>Specimen source name or code</td><td>CE</td><td>0</td><td style='border-right: 2px'>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Specimen.Specimen-definitions.html#Specimen.type'>Specimen.type</a></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Specimen.Specimen-definitions.html#Specimen.CodeableConcept'>Specimen.CodeableConcept</a></td><td>0</td><td>1</td><td><a href='ConceptMap-datatype-cwe-to-codeableconcept.html'>CWE[CodeableConcept]</a></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td></tr>
<tr><td>2</td><td>CM.2</td><td>Additives</td><td>TX</td><td>0</td><td style='border-right: 2px'>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Specimen.Specimen-definitions.html#Specimen.container.additiveCodeableConcept.text'>Specimen.container.additiveCodeableConcept.text</a></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Specimen.Specimen-definitions.html#Specimen.string'>Specimen.string</a></td><td>0</td><td>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td></tr>
<tr><td>3</td><td>CM.3</td><td>Freetext</td><td>TX</td><td>0</td><td style='border-right: 2px'>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Specimen.Specimen-definitions.html#Specimen.note'>Specimen.note</a>(<a href='https://hl7.org/fhir/R4/Specimen.Specimen-definitions.html#Specimen.Annotation.text'>Specimen.Annotation.text</a>)</td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Specimen.Specimen-definitions.html#Specimen.markdown'>Specimen.markdown</a></td><td>1</td><td>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td></tr>
<tr><td>4</td><td>CM.4</td><td>Body Site</td><td>CE</td><td>0</td><td style='border-right: 2px'>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Specimen.Specimen-definitions.html#Specimen.collection.site'>Specimen.collection.site</a></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Specimen.Specimen-definitions.html#Specimen.CodeableConcept'>Specimen.CodeableConcept</a></td><td>0</td><td>1</td><td><a href='ConceptMap-datatype-cwe-to-codeableconcept.html'>CWE[CodeableConcept]</a></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td></tr>
<tr><td>5</td><td>CM.5</td><td>Site modifier</td><td>CE</td><td>0</td><td style='border-right: 2px'>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td></tr>
<tr><td>6</td><td>CM.6</td><td>Collection method modifier code</td><td>CE</td><td>0</td><td style='border-right: 2px'>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Specimen.Specimen-definitions.html#Specimen.condition'>Specimen.condition</a></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Specimen.Specimen-definitions.html#Specimen.CodeableConcept'>Specimen.CodeableConcept</a></td><td>0</td><td>1</td><td><a href='ConceptMap-datatype-cwe-to-codeableconcept.html'>CWE[CodeableConcept]</a></td><td>CollectionMethodModifier</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td></tr>
<tr><td>7</td><td>CM.7</td><td>Specimen role</td><td>CE</td><td>0</td><td style='border-right: 2px'>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cm-source-to-specimen-notes.md



---

// File: input/includes/ConceptMap-datatype-cne-to-codeableconcept-intro.md


This ConceptMap represents the mapping from the HL7 V2 CNE Data Type to the FHIR CodeableConcept Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CNE to CodeableConcept.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CNE[CodeableConcept] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CNE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.code'>CodeableConcept.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.code'>CodeableConcept.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CNE.2</td><td>Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.display'>CodeableConcept.coding.display</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CNE.3</td><td>Name of Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.system'>CodeableConcept.coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.uri'>CodeableConcept.uri</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td>This is only an indirect mapping in that the vocabulary table will give the actual uri. </td></tr>
<tr><td>4</td><td>CNE.4</td><td>Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.code'>CodeableConcept.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.code'>CodeableConcept.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CNE.5</td><td>Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.display'>CodeableConcept.coding.display</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>6</td><td>CNE.6</td><td>Name of Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.system'>CodeableConcept.coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.uri'>CodeableConcept.uri</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td>This is only an indirect mapping in that the vocabulary table will give the actual uri</td></tr>
<tr><td>7</td><td>CNE.7</td><td>Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.version'>CodeableConcept.coding.version</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CNE.8</td><td>Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.version'>CodeableConcept.coding.version</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CNE.9</td><td>Original Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.text'>CodeableConcept.text</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CNE.10</td><td>Second Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.code'>CodeableConcept.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.code'>CodeableConcept.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CNE.11</td><td>Second Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.display'>CodeableConcept.coding.display</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>12</td><td>CNE.12</td><td>Name of Second Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.system'>CodeableConcept.coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.uri'>CodeableConcept.uri</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>13</td><td>CNE.13</td><td>Second Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding[3.version'>CodeableConcept.coding[3.version</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td>This is only an indirect mapping in that the vocabulary table will give the actual uri. </td></tr>
<tr><td>14</td><td>CNE.14</td><td>Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>15</td><td>CNE.15</td><td>Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>16</td><td>CNE.16</td><td>Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>17</td><td>CNE.17</td><td>Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>18</td><td>CNE.18</td><td>Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>19</td><td>CNE.19</td><td>Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>20</td><td>CNE.20</td><td>Second Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>21</td><td>CNE.21</td><td>Second Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>22</td><td>CNE.22</td><td>Second Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cne-to-codeableconcept-notes.md



---

// File: input/includes/ConceptMap-datatype-cnn-to-practitioner-intro.md


This ConceptMap represents the mapping from the HL7 V2 CNN Data Type to the FHIR Practitioner Resource. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CNN to Practitioner.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CNN[Practitioner] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CNN.1</td><td>ID Number</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Practitioner.Practitioner-definitions.html#Practitioner.identifier.value'>Practitioner.identifier.value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Practitioner.Practitioner-definitions.html#Practitioner.string'>Practitioner.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CNN.2</td><td>Family Name</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Practitioner.Practitioner-definitions.html#Practitioner.name.family'>Practitioner.name.family</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Practitioner.Practitioner-definitions.html#Practitioner.string'>Practitioner.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CNN.3</td><td>Given Name</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Practitioner.Practitioner-definitions.html#Practitioner.name.given'>Practitioner.name.given</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Practitioner.Practitioner-definitions.html#Practitioner.string'>Practitioner.string</a></td><td>0</td><td>-1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>CNN.4</td><td>Second and Further Given Names or Initials Thereof</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Practitioner.Practitioner-definitions.html#Practitioner.name.given'>Practitioner.name.given</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Practitioner.Practitioner-definitions.html#Practitioner.string'>Practitioner.string</a></td><td>0</td><td>-1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CNN.5</td><td>Suffix (e.g., JR or III)</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Practitioner.Practitioner-definitions.html#Practitioner.name.suffix'>Practitioner.name.suffix</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Practitioner.Practitioner-definitions.html#Practitioner.string'>Practitioner.string</a></td><td>0</td><td>-1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>6</td><td>CNN.6</td><td>Prefix (e.g., DR)</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Practitioner.Practitioner-definitions.html#Practitioner.name.prefix'>Practitioner.name.prefix</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Practitioner.Practitioner-definitions.html#Practitioner.string'>Practitioner.string</a></td><td>0</td><td>-1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>7</td><td>CNN.7</td><td>Degree (e.g., MD)</td><td>IS</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Practitioner.Practitioner-definitions.html#Practitioner.name.suffix'>Practitioner.name.suffix</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Practitioner.Practitioner-definitions.html#Practitioner.string'>Practitioner.string</a></td><td>0</td><td>-1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CNN.8</td><td>Source Table</td><td>IS</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CNN.9</td><td>Assigning Authority- Namespace ID</td><td>IS</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td>identifier.extension??-assigningauthority.nameSpaceID</td><td><a href='https://hl7.org/fhir/R4/Practitioner.Practitioner-definitions.html#Practitioner.string'>Practitioner.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CNN.10</td><td>Assigning Authority- Universal ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td>identifier.extension??-assigningauthority.universalID</td><td><a href='https://hl7.org/fhir/R4/Practitioner.Practitioner-definitions.html#Practitioner.string'>Practitioner.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CNN.11</td><td>Assigning Authority- Universal ID Type</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td>identifier.extension??-assigningauthority.univeralIDType</td><td><a href='https://hl7.org/fhir/R4/Practitioner.Practitioner-definitions.html#Practitioner.code'>Practitioner.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cnn-to-practitioner-notes.md



---

// File: input/includes/ConceptMap-datatype-cq-duration-to-repeat-intro.md


This ConceptMap represents the mapping from the HL7 V2 CQ Data Type to the FHIR Repeat Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CQ[Duration] to Repeat.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CQ[Repeat-Duration] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='7'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Assignment</th><th title='Mapping for terminology tables.'>Vocabulary</th></tr></thead>
<tbody>
<tr><td>1</td><td>CQ.1</td><td>Quantity</td><td>NM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes.html#Duration'>Duration</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes.html#decimal'>decimal</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CQ.2</td><td>Units</td><td>CWE</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='#broken'><span style='font-weight: bold; color: red'>durationUnit</span></a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes.html#code'>code</a></td><td>0</td><td>1</td><td><a href='ConceptMap-datatype-cwe-to-code.html'>CWE[Code]</a></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cq-duration-to-repeat-notes.md



---

// File: input/includes/ConceptMap-datatype-cq-duration-to-timing-repeat-intro.md


This ConceptMap represents the mapping from the HL7 V2 CQ Data Type to the FHIR Timing.repeat Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CQ[Duration] to Timing.repeat.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CQ[Timing.repeat-Duration] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='7'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Assignment</th><th title='Mapping for terminology tables.'>Vocabulary</th></tr></thead>
<tbody>
<tr><td>1</td><td>CQ.1</td><td>Quantity</td><td>NM</td><td>0</td><td style='border-right: 2px'>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Timing.repeat.Timing.repeat.duration'>Timing.repeat.duration</a></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Timing.repeat.Timing.repeat.decimal'>Timing.repeat.decimal</a></td><td>0</td><td>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td></tr>
<tr><td>2</td><td>CQ.2</td><td>Units</td><td>CWE</td><td>0</td><td style='border-right: 2px'>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Timing.repeat.Timing.repeat.durationUnit'>Timing.repeat.durationUnit</a></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Timing.repeat.Timing.repeat.code'>Timing.repeat.code</a></td><td>0</td><td>1</td><td><a href='ConceptMap-datatype-cwe-to-code.html'>CWE[Code]</a></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cq-duration-to-timing-repeat-notes.md



---

// File: input/includes/ConceptMap-datatype-cq-period-to-repeat-intro.md


This ConceptMap represents the mapping from the HL7 V2 CQ Data Type to the FHIR Repeat Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CQ[Period] to Repeat.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CQ[Repeat-Period] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='7'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Assignment</th><th title='Mapping for terminology tables.'>Vocabulary</th></tr></thead>
<tbody>
<tr><td>1</td><td>CQ.1</td><td>Quantity</td><td>NM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes.html#Period'>Period</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes.html#decimal'>decimal</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CQ.2</td><td>Units</td><td>CWE</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='#broken'><span style='font-weight: bold; color: red'>periodUnit</span></a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes.html#code'>code</a></td><td>0</td><td>1</td><td><a href='ConceptMap-datatype-cwe-to-code.html'>CWE[Code]</a></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cq-period-to-repeat-notes.md



---

// File: input/includes/ConceptMap-datatype-cq-repeat-to-unsignedint-intro.md


This ConceptMap represents the mapping from the HL7 V2 CQ Data Type to the FHIR UnsignedInt Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CQ[Repeat] to UnsignedInt.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CQ[UnsignedInt-Repeat] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='7'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Assignment</th><th title='Mapping for terminology tables.'>Vocabulary</th></tr></thead>
<tbody>
<tr><td>1</td><td>CQ.1</td><td>Quantity</td><td>NM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#UnsignedInt.unsignedInt.$value'>unsignedInt.$value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#UnsignedInt.unsignedInt.unsignedInt'>unsignedInt.unsignedInt</a></td><td>0</td><td>1</td><td></td><td></td><td>/convert to minutes based on CQ.2/</td><td></td></tr>
<tr><td>2</td><td>CQ.2</td><td>Units</td><td>CWE</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cq-repeat-to-unsignedint-notes.md



---

// File: input/includes/ConceptMap-datatype-cq-to-code-intro.md


This ConceptMap represents the mapping from the HL7 V2 CQ Data Type to the FHIR code Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CQ to code.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CQ[code] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CQ.1</td><td>Quantity</td><td>NM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CQ.2</td><td>Units</td><td>CWE</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#code.code.$value'>code.$value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#code.code.code'>code.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cq-to-code-notes.md



---

// File: input/includes/ConceptMap-datatype-cq-to-decimal-intro.md


This ConceptMap represents the mapping from the HL7 V2 CQ Data Type to the FHIR decimal Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CQ to decimal.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CQ[decimal] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CQ.1</td><td>Quantity</td><td>NM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#decimal.decimal.$value'>decimal.$value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#decimal.decimal.decimal'>decimal.decimal</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CQ.2</td><td>Units</td><td>CWE</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cq-to-decimal-notes.md



---

// File: input/includes/ConceptMap-datatype-cq-to-quantity-intro.md


This ConceptMap represents the mapping from the HL7 V2 CQ Data Type to the FHIR Quantity Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CQ to Quantity.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CQ[Quantity] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CQ.1</td><td>Quantity</td><td>NM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Quantity.Quantity.value'>Quantity.value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Quantity.Quantity.decimal'>Quantity.decimal</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CQ.2</td><td>Units</td><td>CWE</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Quantity.Quantity.unit'>Quantity.unit</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Quantity.Quantity.string'>Quantity.string</a></td><td>0</td><td>1</td><td><a href='ConceptMap-datatype-cwe-to-string.html'>CWE[string]</a></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cq-to-quantity-notes.md



---

// File: input/includes/ConceptMap-datatype-cq-to-servicerequest-occurencetiming-intro.md


This ConceptMap represents the mapping from the HL7 V2 CQ Data Type to the FHIR ServiceRequest.occurenceTiming Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CQ to ServiceRequest.occurenceTiming.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CQ[ServiceRequest.occurenceTiming] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='7'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Assignment</th><th title='Mapping for terminology tables.'>Vocabulary</th></tr></thead>
<tbody>
<tr><td>1</td><td>CQ.1</td><td>Quantity</td><td>NM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/ServiceRequest.occurenceTiming.ServiceRequest-definitions.html#ServiceRequest.occurenceTiming.repeat.duration'>ServiceRequest.occurenceTiming.repeat.duration</a></td><td></td><td><a href='https://hl7.org/fhir/R4/ServiceRequest.occurenceTiming.ServiceRequest-definitions.html#ServiceRequest.occurenceTiming.decimal'>ServiceRequest.occurenceTiming.decimal</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>CQ.2</td><td>Units</td><td>CWE</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/ServiceRequest.occurenceTiming.ServiceRequest-definitions.html#ServiceRequest.occurenceTiming.repeat.durationUnit'>ServiceRequest.occurenceTiming.repeat.durationUnit</a></td><td></td><td><a href='https://hl7.org/fhir/R4/ServiceRequest.occurenceTiming.ServiceRequest-definitions.html#ServiceRequest.occurenceTiming.string'>ServiceRequest.occurenceTiming.string</a></td><td>0</td><td>1</td><td><a href='ConceptMap-datatype-cwe-to-string.html'>CWE[String]</a></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cq-to-servicerequest-occurencetiming-notes.md



---

// File: input/includes/ConceptMap-datatype-cq-to-unsignedint-intro.md


This ConceptMap represents the mapping from the HL7 V2 CQ Data Type to the FHIR unsignedInt Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CQ to unsignedInt.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CQ[unsignedInt] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CQ.1</td><td>Quantity</td><td>NM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#unsignedInt.unsignedInt.$value'>unsignedInt.$value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#unsignedInt.unsignedInt.unsignedInt'>unsignedInt.unsignedInt</a></td><td>0</td><td>1</td><td></td><td></td><td>/convert to minutes based on CQ.2/</td><td></td></tr>
<tr><td>2</td><td>CQ.2</td><td>Units</td><td>CWE</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cq-to-unsignedint-notes.md



---

// File: input/includes/ConceptMap-datatype-cwe-durationunit-to-timing-intro.md


This ConceptMap represents the mapping from the HL7 V2 CWE Data Type to the FHIR Timing Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CWE[DurationUnit] to Timing.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CWE[Timing-DurationUnit] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CWE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Timing.Timing.repeat.durationUnit'>Timing.repeat.durationUnit</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Timing.Timing.code'>Timing.code</a></td><td>0</td><td>1</td><td></td><td><a href='unspecified_mapping.html'>Test/ServiceDefaultDurationUnits</a></td><td></td><td>The durationUnit is limited to a required set of UCUM units</td></tr>
<tr><td>2</td><td>CWE.2</td><td>Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CWE.3</td><td>Name of Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>CWE.4</td><td>Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CWE.5</td><td>Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>6</td><td>CWE.6</td><td>Name of Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>7</td><td>CWE.7</td><td>Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CWE.8</td><td>Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CWE.9</td><td>Original Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CWE.10</td><td>Second Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CWE.11</td><td>Second Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>12</td><td>CWE.12</td><td>Name of Second Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>13</td><td>CWE.13</td><td>Second Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>14</td><td>CWE.14</td><td>Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>15</td><td>CWE.15</td><td>Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>16</td><td>CWE.16</td><td>Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>17</td><td>CWE.17</td><td>Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>18</td><td>CWE.18</td><td>Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>19</td><td>CWE.19</td><td>Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>20</td><td>CWE.20</td><td>Second Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>21</td><td>CWE.21</td><td>Second Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>22</td><td>CWE.22</td><td>Second Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cwe-durationunit-to-timing-notes.md



---

// File: input/includes/ConceptMap-datatype-cwe-supportinginfo-to-observation-intro.md


This ConceptMap represents the mapping from the HL7 V2 CWE Data Type to the FHIR Observation Resource. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CWE[SupportingInfo] to Observation.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CWE[Observation-SupportingInfo] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>0</td><td>CWE</td><td></td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.code'>Observation.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.CodeableConcept'>Observation.CodeableConcept</a></td><td>1</td><td>1</td><td></td><td></td><td>/to be determined by implementer based on use of OBR-13/</td><td></td></tr>
<tr><td>0</td><td>CWE</td><td></td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.status'>Observation.status</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.code'>Observation.code</a></td><td>1</td><td>1</td><td></td><td></td><td>"final"</td><td></td></tr>
<tr><td>1</td><td>CWE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.value.CodeableConcept.coding.code'>Observation.value.CodeableConcept.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.code'>Observation.code</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CWE.2</td><td>Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.value.CodeableConcept.coding.display'>Observation.value.CodeableConcept.coding.display</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.string'>Observation.string</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CWE.3</td><td>Name of Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.value.CodeableConcept.coding.system'>Observation.value.CodeableConcept.coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.uri'>Observation.uri</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>CWE.4</td><td>Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.value.CodeableConcept.coding.code'>Observation.value.CodeableConcept.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.code'>Observation.code</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CWE.5</td><td>Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.value.CodeableConcept.coding.display'>Observation.value.CodeableConcept.coding.display</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.string'>Observation.string</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>6</td><td>CWE.6</td><td>Name of Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.value.CodeableConcept.coding.system'>Observation.value.CodeableConcept.coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.uri'>Observation.uri</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>7</td><td>CWE.7</td><td>Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CWE.8</td><td>Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CWE.9</td><td>Original Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CWE.10</td><td>Second Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.value.CodeableConcept.coding.code'>Observation.value.CodeableConcept.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.code'>Observation.code</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CWE.11</td><td>Second Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.value.CodeableConcept.coding.display'>Observation.value.CodeableConcept.coding.display</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.string'>Observation.string</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>12</td><td>CWE.12</td><td>Name of Second Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>13</td><td>CWE.13</td><td>Second Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.value.CodeableConcept.coding.system'>Observation.value.CodeableConcept.coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Observation.Observation-definitions.html#Observation.uri'>Observation.uri</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>14</td><td>CWE.14</td><td>Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>15</td><td>CWE.15</td><td>Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>16</td><td>CWE.16</td><td>Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>17</td><td>CWE.17</td><td>Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>18</td><td>CWE.18</td><td>Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>19</td><td>CWE.19</td><td>Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>20</td><td>CWE.20</td><td>Second Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>21</td><td>CWE.21</td><td>Second Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>22</td><td>CWE.22</td><td>Second Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cwe-supportinginfo-to-observation-notes.md



---

// File: input/includes/ConceptMap-datatype-cwe-to-annotation-intro.md


This ConceptMap represents the mapping from the HL7 V2 CWE Data Type to the FHIR Annotation Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CWE to Annotation.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CWE[Annotation] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>0</td><td>CWE</td><td></td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Annotation.Annotation.text'>Annotation.text</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Annotation.Annotation.markdown'>Annotation.markdown</a></td><td></td><td></td><td></td><td></td><td>/include full field (inlcuding delimiters or xml tags)/</td><td></td></tr>
<tr><td>1</td><td>CWE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CWE.2</td><td>Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CWE.3</td><td>Name of Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>CWE.4</td><td>Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CWE.5</td><td>Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>6</td><td>CWE.6</td><td>Name of Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>7</td><td>CWE.7</td><td>Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CWE.8</td><td>Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CWE.9</td><td>Original Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CWE.10</td><td>Second Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CWE.11</td><td>Second Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>12</td><td>CWE.12</td><td>Name of Second Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>13</td><td>CWE.13</td><td>Second Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>14</td><td>CWE.14</td><td>Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>15</td><td>CWE.15</td><td>Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>16</td><td>CWE.16</td><td>Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>17</td><td>CWE.17</td><td>Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>18</td><td>CWE.18</td><td>Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>19</td><td>CWE.19</td><td>Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>20</td><td>CWE.20</td><td>Second Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>21</td><td>CWE.21</td><td>Second Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>22</td><td>CWE.22</td><td>Second Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cwe-to-annotation-notes.md



---

// File: input/includes/ConceptMap-datatype-cwe-to-code-intro.md


This ConceptMap represents the mapping from the HL7 V2 CWE Data Type to the FHIR code Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CWE to code.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CWE[code] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CWE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#code.code.$value'>code.$value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#code.code.code'>code.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CWE.2</td><td>Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CWE.3</td><td>Name of Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>CWE.4</td><td>Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td>IF CWE.1 NOT VALUED</td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#code.code.$value'>code.$value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#code.code.code'>code.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CWE.5</td><td>Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>6</td><td>CWE.6</td><td>Name of Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>7</td><td>CWE.7</td><td>Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CWE.8</td><td>Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CWE.9</td><td>Original Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CWE.10</td><td>Second Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CWE.11</td><td>Second Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>12</td><td>CWE.12</td><td>Name of Second Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>13</td><td>CWE.13</td><td>Second Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>14</td><td>CWE.14</td><td>Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>15</td><td>CWE.15</td><td>Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>16</td><td>CWE.16</td><td>Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>17</td><td>CWE.17</td><td>Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>18</td><td>CWE.18</td><td>Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>19</td><td>CWE.19</td><td>Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>20</td><td>CWE.20</td><td>Second Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>21</td><td>CWE.21</td><td>Second Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>22</td><td>CWE.22</td><td>Second Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cwe-to-code-notes.md



---

// File: input/includes/ConceptMap-datatype-cwe-to-codeableconcept-intro.md


This ConceptMap represents the mapping from the HL7 V2 CWE Data Type to the FHIR CodeableConcept Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CWE to CodeableConcept.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CWE[CodeableConcept] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CWE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'>If mapped to FHIR, use Code System and Display</td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.code'>CodeableConcept.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.code'>CodeableConcept.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CWE.2</td><td>Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.display'>CodeableConcept.coding.display</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CWE.3</td><td>Name of Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.system'>CodeableConcept.coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.uri'>CodeableConcept.uri</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td>This is only an indirect mapping in that the vocabulary table will give the actual uri. </td></tr>
<tr><td>4</td><td>CWE.4</td><td>Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.code'>CodeableConcept.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.code'>CodeableConcept.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CWE.5</td><td>Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.display'>CodeableConcept.coding.display</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>6</td><td>CWE.6</td><td>Name of Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.system'>CodeableConcept.coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.uri'>CodeableConcept.uri</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td>This is only an indirect mapping in that the vocabulary table will give the actual uri</td></tr>
<tr><td>7</td><td>CWE.7</td><td>Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.version'>CodeableConcept.coding.version</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CWE.8</td><td>Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.version'>CodeableConcept.coding.version</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CWE.9</td><td>Original Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.text'>CodeableConcept.text</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CWE.10</td><td>Second Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.code'>CodeableConcept.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.code'>CodeableConcept.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CWE.11</td><td>Second Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.display'>CodeableConcept.coding.display</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>12</td><td>CWE.12</td><td>Name of Second Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.system'>CodeableConcept.coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.uri'>CodeableConcept.uri</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>13</td><td>CWE.13</td><td>Second Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.coding.version'>CodeableConcept.coding.version</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#CodeableConcept.CodeableConcept.string'>CodeableConcept.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td>This is only an indirect mapping in that the vocabulary table will give the actual uri. </td></tr>
<tr><td>14</td><td>CWE.14</td><td>Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>15</td><td>CWE.15</td><td>Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>16</td><td>CWE.16</td><td>Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>17</td><td>CWE.17</td><td>Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>18</td><td>CWE.18</td><td>Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>19</td><td>CWE.19</td><td>Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>20</td><td>CWE.20</td><td>Second Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>21</td><td>CWE.21</td><td>Second Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>22</td><td>CWE.22</td><td>Second Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cwe-to-codeableconcept-notes.md



---

// File: input/includes/ConceptMap-datatype-cwe-to-coding-intro.md


This ConceptMap represents the mapping from the HL7 V2 CWE Data Type to the FHIR Coding Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CWE to Coding.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CWE[Coding] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CWE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Coding.Coding.code'>Coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Coding.Coding.code'>Coding.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CWE.2</td><td>Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Coding.Coding.display'>Coding.display</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Coding.Coding.string'>Coding.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CWE.3</td><td>Name of Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Coding.Coding.system'>Coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Coding.Coding.uri'>Coding.uri</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td>This is only an indirect mapping in that the vocabulary table will give the actual uri. </td></tr>
<tr><td>4</td><td>CWE.4</td><td>Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CWE.5</td><td>Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>6</td><td>CWE.6</td><td>Name of Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>7</td><td>CWE.7</td><td>Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Coding.Coding.version'>Coding.version</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Coding.Coding.string'>Coding.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CWE.8</td><td>Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CWE.9</td><td>Original Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CWE.10</td><td>Second Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CWE.11</td><td>Second Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>12</td><td>CWE.12</td><td>Name of Second Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>13</td><td>CWE.13</td><td>Second Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>14</td><td>CWE.14</td><td>Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>15</td><td>CWE.15</td><td>Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>16</td><td>CWE.16</td><td>Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>17</td><td>CWE.17</td><td>Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>18</td><td>CWE.18</td><td>Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>19</td><td>CWE.19</td><td>Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>20</td><td>CWE.20</td><td>Second Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>21</td><td>CWE.21</td><td>Second Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>22</td><td>CWE.22</td><td>Second Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cwe-to-coding-notes.md



---

// File: input/includes/ConceptMap-datatype-cwe-to-device-intro.md


This ConceptMap represents the mapping from the HL7 V2 CWE Data Type to the FHIR Device Resource. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CWE to Device.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CWE[Device] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CWE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'>If instance identifier</td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.identifier.value'>Device.identifier.value</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>CWE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'>If kind identifier</td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.definition'>Device.definition</a>(<a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.DeviceDefinition.identifier.value'>Device.DeviceDefinition.identifier.value</a>)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CWE.2</td><td>Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.deviceName.name'>Device.deviceName.name</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CWE.2</td><td>Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.deviceName.type'>Device.deviceName.type</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td>/select most appropriate value for actual use/</td><td></td></tr>
<tr><td>3</td><td>CWE.3</td><td>Name of Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'>If instance identifier</td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.identifier.system'>Device.identifier.system</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td>/map HL7 code system to appropriate url/</td><td></td></tr>
<tr><td>3</td><td>CWE.3</td><td>Name of Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'>If kind identifier</td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.definition'>Device.definition</a>(<a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.DeviceDefinition.identifier.system'>Device.DeviceDefinition.identifier.system</a>)</td><td></td><td></td><td></td><td></td><td></td><td></td><td>/map HL7 code system to appropriate url/</td><td></td></tr>
<tr><td>4</td><td>CWE.4</td><td>Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'>If instance identifier</td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.identifier.value'>Device.identifier.value</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>CWE.4</td><td>Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'>If kind identifier</td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.definition'>Device.definition</a>(<a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.DeviceDefinition.identifier.value'>Device.DeviceDefinition.identifier.value</a>)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CWE.5</td><td>Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.deviceName.name'>Device.deviceName.name</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CWE.5</td><td>Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.deviceName.type'>Device.deviceName.type</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td>/select most appropriate value for actual use/</td><td></td></tr>
<tr><td>6</td><td>CWE.6</td><td>Name of Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'>If instance identifier</td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.identifier.system'>Device.identifier.system</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td>/map HL7 code system to appropriate url/</td><td></td></tr>
<tr><td>6</td><td>CWE.6</td><td>Name of Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'>If kind identifier</td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.definition'>Device.definition</a>(<a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.DeviceDefinition.identifier.system'>Device.DeviceDefinition.identifier.system</a>)</td><td></td><td></td><td></td><td></td><td></td><td></td><td>/map HL7 code system to appropriate url/</td><td></td></tr>
<tr><td>7</td><td>CWE.7</td><td>Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CWE.8</td><td>Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CWE.9</td><td>Original Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.deviceName.name'>Device.deviceName.name</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CWE.9</td><td>Original Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.deviceName.type'>Device.deviceName.type</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td>/select most appropriate value for actual use/</td><td></td></tr>
<tr><td>10</td><td>CWE.10</td><td>Second Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'>If instance identifier</td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.identifier.value'>Device.identifier.value</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CWE.10</td><td>Second Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'>If kind identifier</td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.definition'>Device.definition</a>(<a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.DeviceDefinition.identifier.value'>Device.DeviceDefinition.identifier.value</a>)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CWE.11</td><td>Second Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.deviceName.name'>Device.deviceName.name</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CWE.11</td><td>Second Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.deviceName.type'>Device.deviceName.type</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td>/select most appropriate value for actual use/</td><td></td></tr>
<tr><td>12</td><td>CWE.12</td><td>Name of Second Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'>If instance identifier</td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.identifier.system'>Device.identifier.system</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td>/map HL7 code system to appropriate url/</td><td></td></tr>
<tr><td>12</td><td>CWE.12</td><td>Name of Second Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'>If kind identifier</td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.definition'>Device.definition</a>(<a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.DeviceDefinition.identifier.system'>Device.DeviceDefinition.identifier.system</a>)</td><td></td><td></td><td></td><td></td><td></td><td></td><td>/map HL7 code system to appropriate url/</td><td></td></tr>
<tr><td>13</td><td>CWE.13</td><td>Second Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>14</td><td>CWE.14</td><td>Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>15</td><td>CWE.15</td><td>Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>16</td><td>CWE.16</td><td>Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>17</td><td>CWE.17</td><td>Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>18</td><td>CWE.18</td><td>Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>19</td><td>CWE.19</td><td>Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>20</td><td>CWE.20</td><td>Second Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>21</td><td>CWE.21</td><td>Second Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>22</td><td>CWE.22</td><td>Second Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cwe-to-device-notes.md



---

// File: input/includes/ConceptMap-datatype-cwe-to-duration-intro.md


This ConceptMap represents the mapping from the HL7 V2 CWE Data Type to the FHIR Duration Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CWE to Duration.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CWE[Duration] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CWE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Duration.Duration.duration'>Duration.duration</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Duration.Duration.code'>Duration.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CWE.2</td><td>Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td>IF CWE.1 IS NOT VALUED</td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Duration.Duration.duration'>Duration.duration</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Duration.Duration.code'>Duration.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CWE.3</td><td>Name of Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>CWE.4</td><td>Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CWE.5</td><td>Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>6</td><td>CWE.6</td><td>Name of Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>7</td><td>CWE.7</td><td>Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CWE.8</td><td>Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CWE.9</td><td>Original Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CWE.10</td><td>Second Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CWE.11</td><td>Second Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>12</td><td>CWE.12</td><td>Name of Second Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>13</td><td>CWE.13</td><td>Second Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>14</td><td>CWE.14</td><td>Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>15</td><td>CWE.15</td><td>Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>16</td><td>CWE.16</td><td>Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>17</td><td>CWE.17</td><td>Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>18</td><td>CWE.18</td><td>Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>19</td><td>CWE.19</td><td>Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>20</td><td>CWE.20</td><td>Second Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>21</td><td>CWE.21</td><td>Second Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>22</td><td>CWE.22</td><td>Second Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cwe-to-duration-notes.md



---

// File: input/includes/ConceptMap-datatype-cwe-to-identifier-intro.md


This ConceptMap represents the mapping from the HL7 V2 CWE Data Type to the FHIR Identifier Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CWE to Identifier.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CWE[Identifier] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CWE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier..value'>Identifier..value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.string'>Identifier.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CWE.2</td><td>Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier..name'>Identifier..name</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.string'>Identifier.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CWE.3</td><td>Name of Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier..system'>Identifier..system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.uri'>Identifier.uri</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td>Some mapping of the CWE.3 value to an actual uri will be necessary</td></tr>
<tr><td>4</td><td>CWE.4</td><td>Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier..value'>Identifier..value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.string'>Identifier.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CWE.5</td><td>Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier..name'>Identifier..name</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.string'>Identifier.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>6</td><td>CWE.6</td><td>Name of Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier..system'>Identifier..system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.uri'>Identifier.uri</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td>Some mapping of the CWE.3 value to an actual uri will be necessary</td></tr>
<tr><td>7</td><td>CWE.7</td><td>Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CWE.8</td><td>Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CWE.9</td><td>Original Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CWE.10</td><td>Second Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier..value'>Identifier..value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.string'>Identifier.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CWE.11</td><td>Second Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier..name'>Identifier..name</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.string'>Identifier.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>12</td><td>CWE.12</td><td>Name of Second Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>Some mapping of the CWE.3 value to an actual uri will be necessary</td></tr>
<tr><td>13</td><td>CWE.13</td><td>Second Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier..system'>Identifier..system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.uri'>Identifier.uri</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>14</td><td>CWE.14</td><td>Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>15</td><td>CWE.15</td><td>Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>16</td><td>CWE.16</td><td>Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>17</td><td>CWE.17</td><td>Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>18</td><td>CWE.18</td><td>Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>19</td><td>CWE.19</td><td>Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>20</td><td>CWE.20</td><td>Second Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>21</td><td>CWE.21</td><td>Second Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>22</td><td>CWE.22</td><td>Second Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cwe-to-identifier-notes.md



---

// File: input/includes/ConceptMap-datatype-cwe-to-organization-intro.md


This ConceptMap represents the mapping from the HL7 V2 CWE Data Type to the FHIR Organization Resource. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CWE to Organization.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CWE[Organization] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CWE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Organization.Organization-definitions.html#Organization.identifier.value'>Organization.identifier.value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Organization.Organization-definitions.html#Organization.string'>Organization.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CWE.2</td><td>Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Organization.Organization-definitions.html#Organization.name'>Organization.name</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Organization.Organization-definitions.html#Organization.string'>Organization.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CWE.3</td><td>Name of Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Organization.Organization-definitions.html#Organization.identifier.system'>Organization.identifier.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Organization.Organization-definitions.html#Organization.uri'>Organization.uri</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>CWE.4</td><td>Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CWE.5</td><td>Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>6</td><td>CWE.6</td><td>Name of Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>7</td><td>CWE.7</td><td>Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CWE.8</td><td>Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CWE.9</td><td>Original Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Organization.Organization-definitions.html#Organization.name'>Organization.name</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Organization.Organization-definitions.html#Organization.string'>Organization.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CWE.10</td><td>Second Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CWE.11</td><td>Second Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>12</td><td>CWE.12</td><td>Name of Second Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>13</td><td>CWE.13</td><td>Second Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>14</td><td>CWE.14</td><td>Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>15</td><td>CWE.15</td><td>Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>16</td><td>CWE.16</td><td>Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>17</td><td>CWE.17</td><td>Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>18</td><td>CWE.18</td><td>Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>19</td><td>CWE.19</td><td>Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>20</td><td>CWE.20</td><td>Second Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>21</td><td>CWE.21</td><td>Second Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>22</td><td>CWE.22</td><td>Second Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cwe-to-organization-notes.md



---

// File: input/includes/ConceptMap-datatype-cwe-to-practitionerrole-intro.md


This ConceptMap represents the mapping from the HL7 V2 CWE Data Type to the FHIR PractitionerRole Resource. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CWE to PractitionerRole.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CWE[PractitionerRole] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CWE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/PractitionerRole.PractitionerRole-definitions.html#PractitionerRole.code.coding.code'>PractitionerRole.code.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/PractitionerRole.PractitionerRole-definitions.html#PractitionerRole.code'>PractitionerRole.code</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CWE.2</td><td>Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/PractitionerRole.PractitionerRole-definitions.html#PractitionerRole.code.coding.display'>PractitionerRole.code.coding.display</a></td><td></td><td><a href='https://hl7.org/fhir/R4/PractitionerRole.PractitionerRole-definitions.html#PractitionerRole.string'>PractitionerRole.string</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CWE.3</td><td>Name of Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/PractitionerRole.PractitionerRole-definitions.html#PractitionerRole.code.coding.system'>PractitionerRole.code.coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/PractitionerRole.PractitionerRole-definitions.html#PractitionerRole.uri'>PractitionerRole.uri</a></td><td></td><td></td><td></td><td></td><td></td><td>CWE.3 needs to converted to proper uri for the coding system used, considering CWE.14</td></tr>
<tr><td>4</td><td>CWE.4</td><td>Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/PractitionerRole.PractitionerRole-definitions.html#PractitionerRole.code.coding.code'>PractitionerRole.code.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/PractitionerRole.PractitionerRole-definitions.html#PractitionerRole.code'>PractitionerRole.code</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CWE.5</td><td>Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/PractitionerRole.PractitionerRole-definitions.html#PractitionerRole.code.coding.display'>PractitionerRole.code.coding.display</a></td><td></td><td><a href='https://hl7.org/fhir/R4/PractitionerRole.PractitionerRole-definitions.html#PractitionerRole.string'>PractitionerRole.string</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>6</td><td>CWE.6</td><td>Name of Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/PractitionerRole.PractitionerRole-definitions.html#PractitionerRole.code.coding.system'>PractitionerRole.code.coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/PractitionerRole.PractitionerRole-definitions.html#PractitionerRole.uri'>PractitionerRole.uri</a></td><td></td><td></td><td></td><td></td><td></td><td>CWE.6 needs to converted to proper uri for the coding system used, considering CWE.17</td></tr>
<tr><td>7</td><td>CWE.7</td><td>Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CWE.8</td><td>Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CWE.9</td><td>Original Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/PractitionerRole.PractitionerRole-definitions.html#PractitionerRole.code.text'>PractitionerRole.code.text</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CWE.10</td><td>Second Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/PractitionerRole.PractitionerRole-definitions.html#PractitionerRole.code.coding.code'>PractitionerRole.code.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/PractitionerRole.PractitionerRole-definitions.html#PractitionerRole.code'>PractitionerRole.code</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CWE.11</td><td>Second Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/PractitionerRole.PractitionerRole-definitions.html#PractitionerRole.code.coding.display'>PractitionerRole.code.coding.display</a></td><td></td><td><a href='https://hl7.org/fhir/R4/PractitionerRole.PractitionerRole-definitions.html#PractitionerRole.string'>PractitionerRole.string</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>12</td><td>CWE.12</td><td>Name of Second Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/PractitionerRole.PractitionerRole-definitions.html#PractitionerRole.code.coding.system'>PractitionerRole.code.coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/PractitionerRole.PractitionerRole-definitions.html#PractitionerRole.uri'>PractitionerRole.uri</a></td><td></td><td></td><td></td><td></td><td></td><td>CWE.12 needs to converted to proper uri for the coding system used, consdiering CWE.13</td></tr>
<tr><td>13</td><td>CWE.13</td><td>Second Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>14</td><td>CWE.14</td><td>Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>15</td><td>CWE.15</td><td>Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>16</td><td>CWE.16</td><td>Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>17</td><td>CWE.17</td><td>Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>18</td><td>CWE.18</td><td>Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>19</td><td>CWE.19</td><td>Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>20</td><td>CWE.20</td><td>Second Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>21</td><td>CWE.21</td><td>Second Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>22</td><td>CWE.22</td><td>Second Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cwe-to-practitionerrole-notes.md



---

// File: input/includes/ConceptMap-datatype-cwe-to-quantity-intro.md


This ConceptMap represents the mapping from the HL7 V2 CWE Data Type to the FHIR Quantity Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CWE to Quantity.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CWE[Quantity] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CWE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td>IF CWE.1 IS VALUED AND CWE.3 IS VALUED</td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Quantity.Quantity.Quantity.code'>Quantity.Quantity.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Quantity.Quantity.code'>Quantity.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td>The source of Quantity.value will likely come from a different field (eg. OBX-5 may populate Quantity.value while OBX-6 populates the remaining Quantity elements).</td></tr>
<tr><td>1</td><td>CWE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td>If CWE.2 IS NOT VALUED</td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Quantity.Quantity.Quantity.unit'>Quantity.Quantity.unit</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Quantity.Quantity.string'>Quantity.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CWE.2</td><td>Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Quantity.Quantity.Quantity.unit'>Quantity.Quantity.unit</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Quantity.Quantity.string'>Quantity.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CWE.3</td><td>Name of Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td>IF CWE.1 IS VALUED AND CWE.3 IS VALUED</td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Quantity.Quantity.Quantity.system'>Quantity.Quantity.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Quantity.Quantity.uri'>Quantity.uri</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>CWE.4</td><td>Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>Quantity.unit, .system and .code are not allowed to repeat. This mapping assumes the first CWE triplet will not be empty if othe triplets are populated, therefore mappings for other triplets are not provided.</td></tr>
<tr><td>5</td><td>CWE.5</td><td>Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>6</td><td>CWE.6</td><td>Name of Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>7</td><td>CWE.7</td><td>Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CWE.8</td><td>Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CWE.9</td><td>Original Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CWE.10</td><td>Second Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CWE.11</td><td>Second Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>12</td><td>CWE.12</td><td>Name of Second Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>13</td><td>CWE.13</td><td>Second Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>14</td><td>CWE.14</td><td>Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>15</td><td>CWE.15</td><td>Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>16</td><td>CWE.16</td><td>Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>17</td><td>CWE.17</td><td>Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>18</td><td>CWE.18</td><td>Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>19</td><td>CWE.19</td><td>Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>20</td><td>CWE.20</td><td>Second Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>21</td><td>CWE.21</td><td>Second Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>22</td><td>CWE.22</td><td>Second Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cwe-to-quantity-notes.md



---

// File: input/includes/ConceptMap-datatype-cwe-to-string-intro.md


This ConceptMap represents the mapping from the HL7 V2 CWE Data Type to the FHIR string Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CWE to string.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CWE[string] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CWE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CWE.2</td><td>Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td>IF CWE.9 NOT VALUED</td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#string.string.$value'>string.$value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#string.string.string'>string.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CWE.3</td><td>Name of Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>CWE.4</td><td>Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CWE.5</td><td>Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>6</td><td>CWE.6</td><td>Name of Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>7</td><td>CWE.7</td><td>Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CWE.8</td><td>Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CWE.9</td><td>Original Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#string.string.$value'>string.$value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#string.string.string'>string.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CWE.10</td><td>Second Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CWE.11</td><td>Second Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>12</td><td>CWE.12</td><td>Name of Second Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>13</td><td>CWE.13</td><td>Second Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>14</td><td>CWE.14</td><td>Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>15</td><td>CWE.15</td><td>Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>16</td><td>CWE.16</td><td>Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>17</td><td>CWE.17</td><td>Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>18</td><td>CWE.18</td><td>Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>19</td><td>CWE.19</td><td>Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>20</td><td>CWE.20</td><td>Second Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>21</td><td>CWE.21</td><td>Second Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>22</td><td>CWE.22</td><td>Second Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cwe-to-string-notes.md



---

// File: input/includes/ConceptMap-datatype-cwe-to-timing-duration-intro.md


This ConceptMap represents the mapping from the HL7 V2 CWE Data Type to the FHIR Timing.duration Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CWE to Timing.duration.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CWE[Timing.duration] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CWE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Timing.duration.Timing.duration.Timing.repeat.durationUnit'>Timing.duration.Timing.repeat.durationUnit</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Timing.duration.Timing.duration.code'>Timing.duration.code</a></td><td>0</td><td>1</td><td></td><td>Test/ServiceDefaultDurationUnits</td><td></td><td>The durationUnit is limited to a required set of UCUM units</td></tr>
<tr><td>2</td><td>CWE.2</td><td>Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CWE.3</td><td>Name of Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>CWE.4</td><td>Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CWE.5</td><td>Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>6</td><td>CWE.6</td><td>Name of Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>7</td><td>CWE.7</td><td>Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CWE.8</td><td>Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CWE.9</td><td>Original Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CWE.10</td><td>Second Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CWE.11</td><td>Second Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>12</td><td>CWE.12</td><td>Name of Second Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>13</td><td>CWE.13</td><td>Second Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>14</td><td>CWE.14</td><td>Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>15</td><td>CWE.15</td><td>Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>16</td><td>CWE.16</td><td>Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>17</td><td>CWE.17</td><td>Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>18</td><td>CWE.18</td><td>Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>19</td><td>CWE.19</td><td>Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>20</td><td>CWE.20</td><td>Second Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>21</td><td>CWE.21</td><td>Second Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>22</td><td>CWE.22</td><td>Second Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cwe-to-timing-duration-notes.md



---

// File: input/includes/ConceptMap-datatype-cwe-to-uri-intro.md


This ConceptMap represents the mapping from the HL7 V2 CWE Data Type to the FHIR uri Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CWE to uri.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CWE[uri] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CWE.1</td><td>Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#uri.uri.$value'>uri.$value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#uri.uri.url'>uri.url</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CWE.2</td><td>Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CWE.3</td><td>Name of Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>CWE.4</td><td>Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td>IF CWE.1 NOT VALUED</td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#uri.uri.$value'>uri.$value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#uri.uri.url'>uri.url</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CWE.5</td><td>Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>6</td><td>CWE.6</td><td>Name of Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>7</td><td>CWE.7</td><td>Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CWE.8</td><td>Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CWE.9</td><td>Original Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CWE.10</td><td>Second Alternate Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CWE.11</td><td>Second Alternate Text</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>12</td><td>CWE.12</td><td>Name of Second Alternate Coding System</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>13</td><td>CWE.13</td><td>Second Alternate Coding System Version ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>14</td><td>CWE.14</td><td>Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>15</td><td>CWE.15</td><td>Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>16</td><td>CWE.16</td><td>Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>17</td><td>CWE.17</td><td>Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>18</td><td>CWE.18</td><td>Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>19</td><td>CWE.19</td><td>Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>20</td><td>CWE.20</td><td>Second Alternate Coding System OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>21</td><td>CWE.21</td><td>Second Alternate Value Set OID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>22</td><td>CWE.22</td><td>Second Alternate Value Set Version ID</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cwe-to-uri-notes.md



---

// File: input/includes/ConceptMap-datatype-cx-mother-to-relatedperson-intro.md


This ConceptMap represents the mapping from the HL7 V2 CX Data Type to the FHIR RelatedPerson Resource. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CX[Mother] to RelatedPerson.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CX[RelatedPerson-Mother] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>0</td><td></td><td></td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.patient'>RelatedPerson.patient</a>(<a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.Patient.identifier'>RelatedPerson.Patient.identifier</a>)</td><td></td><td></td><td></td><td></td><td></td><td></td><td>/one of the PID-3 or other available identifiers that uniquely links to the patient who's mother is represented in this RelatedPerson instance./</td><td></td></tr>
<tr><td>0</td><td></td><td></td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.relationship.coding.code'>RelatedPerson.relationship.coding.code</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td>/a relationship type that represents "mother" should be populated with "MTH" as default if no further context is known, or either of "AOPTM", "GESTM", "NMTH", "NMTHF", "STPMTH" if the context is known.</td><td></td></tr>
<tr><td>0</td><td></td><td></td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.relationship.coding.system'>RelatedPerson.relationship.coding.system</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td>"<a href='https://hl7.org/fhir/R4/v3/RoleCode/cs.html#v3-RoleCode-_PersonalRelationshipRoleType'>https://hl7.org/fhir/R4/v3/RoleCode/cs.html#v3-RoleCode-_PersonalRelationshipRoleType</a>"</td><td></td></tr>
<tr><td>1</td><td>CX.1</td><td>ID Number</td><td>ST</td><td>1</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.identifier.value'>RelatedPerson.identifier.value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.string'>RelatedPerson.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CX.2</td><td>Identifier Check Digit</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.identifier.extension.url'>RelatedPerson.identifier.extension.url</a></td><td></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.uri'>RelatedPerson.uri</a></td><td>0</td><td>1</td><td></td><td></td><td>"<a href='http://hl7.org/fhir/StructureDefinition/identifier-checkDigit'>http://hl7.org/fhir/StructureDefinition/identifier-checkDigit</a>"</td><td></td></tr>
<tr><td>2</td><td>CX.2</td><td>Identifier Check Digit</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.identifier.extension.valueString'>RelatedPerson.identifier.extension.valueString</a></td><td></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.string'>RelatedPerson.string</a></td><td>1</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CX.3</td><td>Check Digit Scheme</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.identifier.extension.url'>RelatedPerson.identifier.extension.url</a></td><td></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.uri'>RelatedPerson.uri</a></td><td>0</td><td>1</td><td></td><td></td><td>"<a href='http://hl7.org/fhir/StructureDefinition/namingsystem-checkDigit'>http://hl7.org/fhir/StructureDefinition/namingsystem-checkDigit</a>"</td><td></td></tr>
<tr><td>3</td><td>CX.3</td><td>Check Digit Scheme</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.identifier.extension.valueString'>RelatedPerson.identifier.extension.valueString</a></td><td></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.string'>RelatedPerson.string</a></td><td>1</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>CX.4</td><td>Assigning Authority</td><td>HD</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td>If not in <a href='http://hl7.org/implement/standards/fhir/identifier-registry.html'>http://hl7.org/implement/standards/fhir/identifier-registry.html</a> then determine whether organization or system</td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.identifier.assigner'>RelatedPerson.identifier.assigner</a>(<a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.Organization'>RelatedPerson.Organization</a>)</td><td></td><td><a href='https://hl7.org/fhir/R4/references.html'>Reference</a>(<a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.Organization'>RelatedPerson.Organization</a>)</td><td>0</td><td>1</td><td><a href='ConceptMap-datatype-hd-to-organization.html'>HD[Organization]</a></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>CX.4</td><td>Assigning Authority</td><td>HD</td><td>0</td><td style='border-right: 2px'>1</td><td>IF CX.4 IN <a href='http://hl7.org/implement/standards/fhir/identifier-registry.html'>http://hl7.org/implement/standards/fhir/identifier-registry.html</a></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.identifier.system'>RelatedPerson.identifier.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.uri'>RelatedPerson.uri</a></td><td>0</td><td>1</td><td><a href='ConceptMap-datatype-hd-to-uri.html'>HD[uri]</a></td><td></td><td></td><td>Typically the assigning authority reflects an organization, but if it is an actual system (EHR 1 vs. EHR 2, both supporting the same organization where one cannot get more specific), then CX.4 should be mapped to .system</td></tr>
<tr><td>5</td><td>CX.5</td><td>Identifier Type Code</td><td>ID</td><td>1</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.identifier.type.coding.code'>RelatedPerson.identifier.type.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.code'>RelatedPerson.code</a></td><td>0</td><td>1</td><td></td><td><a href='ConceptMap-table-hl70203-to-v2-0203.html'>IdentifierType</a></td><td></td><td></td></tr>
<tr><td>6</td><td>CX.6</td><td>Assigning Facility</td><td>HD</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td>extension??-assigningFacility</td><td><a href='https://hl7.org/fhir/R4/references.html'>Reference</a>(<a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.Organization'>RelatedPerson.Organization</a>)</td><td>0</td><td>1</td><td><a href='ConceptMap-datatype-hd-to-organization.html'>HD[Organization]</a></td><td></td><td></td><td></td></tr>
<tr><td>7</td><td>CX.7</td><td>Effective Date</td><td>DT</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.identifier.period.start'>RelatedPerson.identifier.period.start</a></td><td></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.dateTime'>RelatedPerson.dateTime</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CX.8</td><td>Expiration Date</td><td>DT</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.identifier.period.end'>RelatedPerson.identifier.period.end</a></td><td></td><td><a href='https://hl7.org/fhir/R4/RelatedPerson.RelatedPerson-definitions.html#RelatedPerson.dateTime'>RelatedPerson.dateTime</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CX.9</td><td>Assigning Jurisdiction</td><td>CWE</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CX.10</td><td>Assigning Agency or Department</td><td>CWE</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CX.11</td><td>Security Check</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>12</td><td>CX.12</td><td>Security Check Scheme</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cx-mother-to-relatedperson-notes.md



---

// File: input/includes/ConceptMap-datatype-cx-to-identifier-intro.md


This ConceptMap represents the mapping from the HL7 V2 CX Data Type to the FHIR Identifier Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CX to Identifier.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CX[Identifier] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CX.1</td><td>ID Number</td><td>ST</td><td>1</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.value'>Identifier.value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.string'>Identifier.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CX.2</td><td>Identifier Check Digit</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.extension.url'>Identifier.extension.url</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.uri'>Identifier.uri</a></td><td>0</td><td>1</td><td></td><td></td><td>"<a href='http://hl7.org/fhir/StructureDefinition/identifier-checkDigit'>http://hl7.org/fhir/StructureDefinition/identifier-checkDigit</a>"</td><td></td></tr>
<tr><td>2</td><td>CX.2</td><td>Identifier Check Digit</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.extension.valueString'>Identifier.extension.valueString</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.string'>Identifier.string</a></td><td>1</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CX.3</td><td>Check Digit Scheme</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.extension.url'>Identifier.extension.url</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.uri'>Identifier.uri</a></td><td>0</td><td>1</td><td></td><td></td><td>"<a href='http://hl7.org/fhir/StructureDefinition/namingsystem-checkDigit'>http://hl7.org/fhir/StructureDefinition/namingsystem-checkDigit</a>"</td><td></td></tr>
<tr><td>3</td><td>CX.3</td><td>Check Digit Scheme</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.extension.valueString'>Identifier.extension.valueString</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.string'>Identifier.string</a></td><td>1</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>CX.4</td><td>Assigning Authority</td><td>HD</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td>If not in <a href='http://hl7.org/implement/standards/fhir/identifier-registry.html'>http://hl7.org/implement/standards/fhir/identifier-registry.html</a> then determine whether organization or system</td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.assigner'>Identifier.assigner</a>(<a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.Organization'>Identifier.Organization</a>)</td><td></td><td><a href='https://hl7.org/fhir/R4/references.html'>Reference</a>(<a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.Organization'>Identifier.Organization</a>)</td><td>0</td><td>1</td><td><a href='ConceptMap-datatype-hd-to-organization.html'>HD[Organization]</a></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>CX.4</td><td>Assigning Authority</td><td>HD</td><td>0</td><td style='border-right: 2px'>1</td><td>IF CX.4 IN <a href='http://hl7.org/implement/standards/fhir/identifier-registry.html'>http://hl7.org/implement/standards/fhir/identifier-registry.html</a></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.system'>Identifier.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.uri'>Identifier.uri</a></td><td>0</td><td>1</td><td><a href='ConceptMap-datatype-hd-to-uri.html'>HD[uri]</a></td><td></td><td></td><td>Typically the assigning authority reflects an organization, but if it is an actual system (EHR 1 vs. EHR 2, both supporting the same organization where one cannot get more specific), then CX.4 should be mapped to .system</td></tr>
<tr><td>5</td><td>CX.5</td><td>Identifier Type Code</td><td>ID</td><td>1</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.type.coding.code'>Identifier.type.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.code'>Identifier.code</a></td><td>0</td><td>1</td><td></td><td><a href='ConceptMap-table-hl70203-to-v2-0203.html'>IdentifierType</a></td><td></td><td></td></tr>
<tr><td>6</td><td>CX.6</td><td>Assigning Facility</td><td>HD</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td>extension??-assigningFacility</td><td><a href='https://hl7.org/fhir/R4/references.html'>Reference</a>(<a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.Organization'>Identifier.Organization</a>)</td><td>0</td><td>1</td><td><a href='ConceptMap-datatype-hd-to-organization.html'>HD[Organization]</a></td><td></td><td></td><td></td></tr>
<tr><td>7</td><td>CX.7</td><td>Effective Date</td><td>DT</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.period.start'>Identifier.period.start</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.dateTime'>Identifier.dateTime</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CX.8</td><td>Expiration Date</td><td>DT</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.period.end'>Identifier.period.end</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.dateTime'>Identifier.dateTime</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CX.9</td><td>Assigning Jurisdiction</td><td>CWE</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CX.10</td><td>Assigning Agency or Department</td><td>CWE</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CX.11</td><td>Security Check</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>12</td><td>CX.12</td><td>Security Check Scheme</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cx-to-identifier-notes.md



---

// File: input/includes/ConceptMap-datatype-cx-to-string-intro.md


This ConceptMap represents the mapping from the HL7 V2 CX Data Type to the FHIR string Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype CX to string.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ CX[string] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>CX.1</td><td>ID Number</td><td>ST</td><td>1</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#string.string.$value'>string.$value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#string.string.string'>string.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>CX.2</td><td>Identifier Check Digit</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>CX.3</td><td>Check Digit Scheme</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>CX.4</td><td>Assigning Authority</td><td>HD</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>CX.4</td><td>Assigning Authority</td><td>HD</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>CX.5</td><td>Identifier Type Code</td><td>ID</td><td>1</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>6</td><td>CX.6</td><td>Assigning Facility</td><td>HD</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>7</td><td>CX.7</td><td>Effective Date</td><td>DT</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>8</td><td>CX.8</td><td>Expiration Date</td><td>DT</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>9</td><td>CX.9</td><td>Assigning Jurisdiction</td><td>CWE</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>10</td><td>CX.10</td><td>Assigning Agency or Department</td><td>CWE</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>11</td><td>CX.11</td><td>Security Check</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>12</td><td>CX.12</td><td>Security Check Scheme</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-cx-to-string-notes.md



---

// File: input/includes/ConceptMap-datatype-dld-discharge-to-location-intro.md


This ConceptMap represents the mapping from the HL7 V2 DLD Data Type to the FHIR Location Resource. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype DLD[Discharge] to Location.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ DLD[Location-Discharge] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>DLD.1</td><td>Discharge to Location</td><td>CWE</td><td>1</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Location.Location-definitions.html#Location.type'>Location.type</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Location.Location-definitions.html#Location.CodeableConcept'>Location.CodeableConcept</a></td><td></td><td></td><td><a href='ConceptMap-datatype-cwe-to-codeableconcept.html'>CWE[CodeableConcept]</a></td><td><a href='unspecified_mapping.html'>DischargedToLocation</a></td><td></td><td></td></tr>
<tr><td>2</td><td>DLD.2</td><td>Effective Date</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>If a Discharge DateTime is available as a separate field (eg. PV1-45) use of that field is preferred pending any specific local requirements</td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-dld-discharge-to-location-notes.md



---

// File: input/includes/ConceptMap-datatype-dld-to-location-intro.md


This ConceptMap represents the mapping from the HL7 V2 DLD Data Type to the FHIR Location Resource. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype DLD to Location.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ DLD[Location] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='7'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Assignment</th><th title='Mapping for terminology tables.'>Vocabulary</th></tr></thead>
<tbody>
<tr><td>1</td><td>DLD.1</td><td>Discharge to Location</td><td>CWE</td><td>1</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td><a href='https://hl7.org/fhir/R4/references.html'>Reference</a>(<a href='https://hl7.org/fhir/R4/Location.Location-definitions.html#Location.Location'>Location.Location</a>)</td><td></td><td></td><td><a href='ConceptMap-datatype-cwe-to-location.html'>CWE[Location]</a></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>DLD.2</td><td>Effective Date</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-dld-to-location-notes.md



---

// File: input/includes/ConceptMap-datatype-dln-to-identifier-intro.md


This ConceptMap represents the mapping from the HL7 V2 DLN Data Type to the FHIR Identifier Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype DLN to Identifier.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ DLN[Identifier] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>DLN.1</td><td>License Number</td><td>ST</td><td>1</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.value'>Identifier.value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.string'>Identifier.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>DLN.1</td><td>License Number</td><td>ST</td><td>1</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.type.coding.code'>Identifier.type.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.CodeableConcept'>Identifier.CodeableConcept</a></td><td>0</td><td>1</td><td></td><td></td><td>"DL"</td><td></td></tr>
<tr><td>1</td><td>DLN.1</td><td>License Number</td><td>ST</td><td>1</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.type.coding.sytem'>Identifier.type.coding.sytem</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.uri'>Identifier.uri</a></td><td>0</td><td>1</td><td></td><td></td><td>"<a href='http://terminology.hl7.org/CodeSystem/v2-0203'>http://terminology.hl7.org/CodeSystem/v2-0203</a>"
</td><td></td></tr>
<tr><td>2</td><td>DLN.2</td><td>Issuing State, Province, Country</td><td>CWE</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.system'>Identifier.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.uri'>Identifier.uri</a></td><td>0</td><td>1</td><td><a href='ConceptMap-datatype-cwe-to-uri.html'>CWE[uri]</a></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>DLN.3</td><td>Expiration Date</td><td>DT</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.period.end'>Identifier.period.end</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.dateTime'>Identifier.dateTime</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-dln-to-identifier-notes.md



---

// File: input/includes/ConceptMap-datatype-dr-to-datetime-intro.md


This ConceptMap represents the mapping from the HL7 V2 DR Data Type to the FHIR dateTime Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype DR to dateTime.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ DR[dateTime] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>DR.1</td><td>Range Start Date/Time</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#dateTime.dateTime.$value'>dateTime.$value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#dateTime.dateTime.dateTime'>dateTime.dateTime</a></td><td>0</td><td>1</td><td></td><td></td><td>/must convert v2 date time format to FHIR date time format before populating/</td><td></td></tr>
<tr><td>2</td><td>DR.2</td><td>Range End Date/Time</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-dr-to-datetime-notes.md



---

// File: input/includes/ConceptMap-datatype-dr-to-period-intro.md


This ConceptMap represents the mapping from the HL7 V2 DR Data Type to the FHIR Period Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype DR to Period.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ DR[Period] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>DR.1</td><td>Range Start Date/Time</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Period.Period.start'>Period.start</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Period.Period.dateTime'>Period.dateTime</a></td><td>0</td><td>1</td><td><a href='ConceptMap-datatype-dtm-to-datetime.html'>DTM[DateTime]</a></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>DR.2</td><td>Range End Date/Time</td><td>DTM</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Period.Period.end'>Period.end</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Period.Period.dateTime'>Period.dateTime</a></td><td>0</td><td>1</td><td><a href='ConceptMap-datatype-dtm-to-datetime.html'>DTM[DateTime]</a></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-dr-to-period-notes.md



---

// File: input/includes/ConceptMap-datatype-dtm-time-to-annotation-intro.md


This ConceptMap represents the mapping from the HL7 V2 DTM Data Type to the FHIR Annotation Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype DTM[Time] to Annotation.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ DTM[Annotation-Time] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>DTM.1</td><td></td><td></td><td>1</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Annotation.Annotation.time'>Annotation.time</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Annotation.Annotation.dateTime'>Annotation.dateTime</a></td><td></td><td></td><td></td><td></td><td>/must convert v2 date time format to FHIR date time format before populating according to FHIR date/time format <a href='https://build.fhir.org/datatypes.html#dateTime'>https://build.fhir.org/datatypes.html#dateTime</a> /</td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-dtm-time-to-annotation-notes.md



---

// File: input/includes/ConceptMap-datatype-dtm-to-datetime-intro.md


This ConceptMap represents the mapping from the HL7 V2 DTM Data Type to the FHIR dateTime Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype DTM to dateTime.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ DTM[dateTime] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>DTM.1</td><td></td><td></td><td>1</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#dateTime.dateTime.$value'>dateTime.$value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#dateTime.dateTime.DateTime'>dateTime.DateTime</a></td><td>0</td><td>1</td><td></td><td></td><td>/must convert v2 date time format to FHIR date time format before populating according to FHIR date/time format <a href='https://build.fhir.org/datatypes.html#dateTime'>https://build.fhir.org/datatypes.html#dateTime</a> /</td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-dtm-to-datetime-notes.md



---

// File: input/includes/ConceptMap-datatype-ed-to-attachment-intro.md


This ConceptMap represents the mapping from the HL7 V2 ED Data Type to the FHIR Attachment Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype ED to Attachment.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ ED[Attachment] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>ED.1</td><td>Source Application</td><td>HD</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>ED.2</td><td>Type of Data</td><td>ID</td><td>1</td><td style='border-right: 2px'>1</td><td>IF ED.3 NOT VALUED</td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Attachment.Attachment.extension.url'>Attachment.extension.url</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Attachment.Attachment.uri'>Attachment.uri</a></td><td>1</td><td>1</td><td></td><td></td><td>"<a href='https://hl7.org/fhir/StructureDefinition/alternate-codes'>https://hl7.org/fhir/StructureDefinition/alternate-codes</a>"</td><td></td></tr>
<tr><td>2</td><td>ED.2</td><td>Type of Data</td><td>ID</td><td>1</td><td style='border-right: 2px'>1</td><td>IF ED.3 NOT VALUED</td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Attachment.Attachment.extension.valueCodeableConcept'>Attachment.extension.valueCodeableConcept</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Attachment.Attachment.CodeableConcept'>Attachment.CodeableConcept</a></td><td>1</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>ED.3</td><td>Data Subtype</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Attachment.Attachment.contentType'>Attachment.contentType</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Attachment.Attachment.code'>Attachment.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>ED.4</td><td>Encoding</td><td>ID</td><td>1</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>ED.5</td><td>Data</td><td>TX</td><td>1</td><td style='border-right: 2px'>1</td><td>IF ED.4 IN ("Base64")</td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Attachment.Attachment.data'>Attachment.data</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Attachment.Attachment.base64Binary'>Attachment.base64Binary</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td>Implementations are not always accurate, so to be safe you may want to always assess OBX-5.5 to determine the correct .contentType.</td></tr>
<tr><td>5</td><td>ED.5</td><td>Data</td><td>TX</td><td>1</td><td style='border-right: 2px'>1</td><td>IF ED.4 IN ("A", (HEX")</td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Attachment.Attachment.data'>Attachment.data</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Attachment.Attachment.base64Binary'>Attachment.base64Binary</a></td><td>0</td><td>1</td><td></td><td></td><td>/convert from A or HEX to binary64/</td><td>Implementations are not always accurate, so to be safe you may want to always assess OBX-5.5 to determine the correct .contentType.</td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-ed-to-attachment-notes.md



---

// File: input/includes/ConceptMap-datatype-ed-to-documentreference-intro.md


This ConceptMap represents the mapping from the HL7 V2 ED Data Type to the FHIR DocumentReference Resource. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype ED to DocumentReference.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ ED[DocumentReference] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>0</td><td></td><td></td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/DocumentReference.DocumentReference-definitions.html#DocumentReference.status'>DocumentReference.status</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td>"current"</td><td></td></tr>
<tr><td>1</td><td>ED.1</td><td>Source Application</td><td>HD</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>ED.2</td><td>Type of Data</td><td>ID</td><td>1</td><td style='border-right: 2px'>1</td><td>IF ED.3 NOT VALUED</td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/DocumentReference.DocumentReference-definitions.html#DocumentReference.content.attachment.extension.url'>DocumentReference.content.attachment.extension.url</a></td><td></td><td><a href='https://hl7.org/fhir/R4/DocumentReference.DocumentReference-definitions.html#DocumentReference.uri'>DocumentReference.uri</a></td><td>1</td><td>1</td><td></td><td></td><td>"<a href='https://hl7.org/fhir/StructureDefinition/alternate-codes'>https://hl7.org/fhir/StructureDefinition/alternate-codes</a>"</td><td></td></tr>
<tr><td>2</td><td>ED.2</td><td>Type of Data</td><td>ID</td><td>1</td><td style='border-right: 2px'>1</td><td>IF ED.3 NOT VALUED</td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/DocumentReference.DocumentReference-definitions.html#DocumentReference.content.attachment.extension.valueCodeableConcept'>DocumentReference.content.attachment.extension.valueCodeableConcept</a></td><td></td><td><a href='https://hl7.org/fhir/R4/DocumentReference.DocumentReference-definitions.html#DocumentReference.CodeableConcept'>DocumentReference.CodeableConcept</a></td><td>1</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>ED.3</td><td>Data Subtype</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/DocumentReference.DocumentReference-definitions.html#DocumentReference.content.attachment.contentType'>DocumentReference.content.attachment.contentType</a></td><td></td><td><a href='https://hl7.org/fhir/R4/DocumentReference.DocumentReference-definitions.html#DocumentReference.code'>DocumentReference.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>ED.4</td><td>Encoding</td><td>ID</td><td>1</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>ED.5</td><td>Data</td><td>TX</td><td>1</td><td style='border-right: 2px'>1</td><td>IF ED.4 IN ("Base64")</td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/DocumentReference.DocumentReference-definitions.html#DocumentReference.content.attachment.data'>DocumentReference.content.attachment.data</a></td><td></td><td><a href='https://hl7.org/fhir/R4/DocumentReference.DocumentReference-definitions.html#DocumentReference.base64Binary'>DocumentReference.base64Binary</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td>Implementations are not always accurate, so to be safe you may want to always assess OBX-5.5 to determine the correct .contentType.</td></tr>
<tr><td>5</td><td>ED.5</td><td>Data</td><td>TX</td><td>1</td><td style='border-right: 2px'>1</td><td>IF ED.4 IN ("A", (HEX")</td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/DocumentReference.DocumentReference-definitions.html#DocumentReference.content.attachment.data'>DocumentReference.content.attachment.data</a></td><td></td><td><a href='https://hl7.org/fhir/R4/DocumentReference.DocumentReference-definitions.html#DocumentReference.base64Binary'>DocumentReference.base64Binary</a></td><td>0</td><td>1</td><td></td><td></td><td>/convert from A or HEX to binary64/</td><td>Implementations are not always accurate, so to be safe you may want to always assess OBX-5.5 to determine the correct .contentType.</td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-ed-to-documentreference-notes.md



---

// File: input/includes/ConceptMap-datatype-ei-defaultassigner-to-identifier-intro.md


This ConceptMap represents the mapping from the HL7 V2 EI Data Type to the FHIR Identifier Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype EI[DefaultAssigner] to Identifier.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ EI[Identifier-DefaultAssigner] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>EI.1</td><td>Entity Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.value'>Identifier.value</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>EI.2</td><td>Namespace ID</td><td>IS</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>EI.3</td><td>Universal ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>EI.4</td><td>Universal ID Type</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-ei-defaultassigner-to-identifier-notes.md



---

// File: input/includes/ConceptMap-datatype-ei-extension-to-identifier-intro.md


This ConceptMap represents the mapping from the HL7 V2 EI Data Type to the FHIR Identifier Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype EI[Extension] to Identifier.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ EI[Identifier-Extension] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>EI.1</td><td>Entity Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.value'>Identifier.value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.string'>Identifier.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>EI.2</td><td>Namespace ID</td><td>IS</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td>extension??-assigningauthority.nameSpaceID</td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.string'>Identifier.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>EI.3</td><td>Universal ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td>extention??-assigningauthority.universalID</td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.string'>Identifier.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>EI.4</td><td>Universal ID Type</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td>extension??-assigningauthority.univeralIDType</td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.code'>Identifier.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-ei-extension-to-identifier-notes.md



---

// File: input/includes/ConceptMap-datatype-ei-organization-to-identifier-intro.md


This ConceptMap represents the mapping from the HL7 V2 EI Data Type to the FHIR Identifier Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype EI[Organization] to Identifier.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ EI[Identifier-Organization] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>EI.1</td><td>Entity Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.value'>Identifier.value</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>EI.2</td><td>Namespace ID</td><td>IS</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.assigner'>Identifier.assigner</a>(<a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.Organization.identifier.value'>Identifier.Organization.identifier.value</a>)</td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.string'>Identifier.string</a></td><td></td><td></td><td></td><td></td><td></td><td>Note that, even though the HL7 v2 component sounds like a type or category of organization (using IS), the intent is to point to the specific oranization that assigned the identifier value in EI.1</td></tr>
<tr><td>3</td><td>EI.3</td><td>Universal ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.assigner'>Identifier.assigner</a>(<a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.Organization.identifier.value'>Identifier.Organization.identifier.value</a>)</td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.uri'>Identifier.uri</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>EI.4</td><td>Universal ID Type</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.assigner'>Identifier.assigner</a>(<a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.Organization.identifier.type'>Identifier.Organization.identifier.type</a>)</td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.CodeableConcept'>Identifier.CodeableConcept</a></td><td></td><td></td><td><a href='ConceptMap-datatype-id-to-codeableconcept.html'>ID[CodeableConcept]</a></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-ei-organization-to-identifier-notes.md



---

// File: input/includes/ConceptMap-datatype-ei-system-to-identifier-intro.md


This ConceptMap represents the mapping from the HL7 V2 EI Data Type to the FHIR Identifier Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype EI[System] to Identifier.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ EI[Identifier-System] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>EI.1</td><td>Entity Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.$value'>Identifier.$value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.string'>Identifier.string</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>EI.2</td><td>Namespace ID</td><td>IS</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'>Determine based on implementation context whether to map EI.2 to system or EI.3 to system</td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.system'>Identifier.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.url'>Identifier.url</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>EI.3</td><td>Universal ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'>Determine based on implementation context whether to map EI.3 to system or EI.2 to system</td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.system'>Identifier.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.url'>Identifier.url</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>EI.4</td><td>Universal ID Type</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.type'>Identifier.type</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.CodeableConcept'>Identifier.CodeableConcept</a></td><td></td><td></td><td><a href='ConceptMap-datatype-id-to-codeableconcept.html'>ID[CodeableConcept]</a></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-ei-system-to-identifier-notes.md



---

// File: input/includes/ConceptMap-datatype-ei-to-coding-intro.md


This ConceptMap represents the mapping from the HL7 V2 EI Data Type to the FHIR Coding Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype EI to Coding.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ EI[Coding] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>EI.1</td><td>Entity Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Coding.Coding.code'>Coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Coding.Coding.string'>Coding.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>EI.2</td><td>Namespace ID</td><td>IS</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Coding.Coding.system'>Coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Coding.Coding.uri'>Coding.uri</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>EI.3</td><td>Universal ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>EI.4</td><td>Universal ID Type</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-ei-to-coding-notes.md



---

// File: input/includes/ConceptMap-datatype-ei-to-condition-intro.md


This ConceptMap represents the mapping from the HL7 V2 EI Data Type to the FHIR Condition Resource. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype EI to Condition.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ EI[Condition] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>EI.1</td><td>Entity Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Condition.Condition-definitions.html#Condition.identifier.value'>Condition.identifier.value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Condition.Condition-definitions.html#Condition.string'>Condition.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>EI.2</td><td>Namespace ID</td><td>IS</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Condition.Condition-definitions.html#Condition.assigner'>Condition.assigner</a>(<a href='https://hl7.org/fhir/R4/Condition.Condition-definitions.html#Condition.Organization.identifier.value'>Condition.Organization.identifier.value</a>)</td><td></td><td><a href='https://hl7.org/fhir/R4/Condition.Condition-definitions.html#Condition.string'>Condition.string</a></td><td></td><td></td><td></td><td></td><td></td><td>Note that, even though the HL7 v2 component sounds like a type or category of organization (using IS), the intent is to point to the specific oranization that assigned the identifier value in EI.1</td></tr>
<tr><td>3</td><td>EI.3</td><td>Universal ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Condition.Condition-definitions.html#Condition.assigner'>Condition.assigner</a>(<a href='https://hl7.org/fhir/R4/Condition.Condition-definitions.html#Condition.Organization.identifier.value'>Condition.Organization.identifier.value</a>)</td><td></td><td><a href='https://hl7.org/fhir/R4/Condition.Condition-definitions.html#Condition.uri'>Condition.uri</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>EI.4</td><td>Universal ID Type</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Condition.Condition-definitions.html#Condition.assigner'>Condition.assigner</a>(<a href='https://hl7.org/fhir/R4/Condition.Condition-definitions.html#Condition.Organization.identifier.type'>Condition.Organization.identifier.type</a>)</td><td></td><td><a href='https://hl7.org/fhir/R4/Condition.Condition-definitions.html#Condition.CodeableConcept'>Condition.CodeableConcept</a></td><td></td><td></td><td><a href='ConceptMap-datatype-id-to-codeableconcept.html'>ID[CodeableConcept]</a></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-ei-to-condition-notes.md



---

// File: input/includes/ConceptMap-datatype-ei-to-procedure-intro.md


This ConceptMap represents the mapping from the HL7 V2 EI Data Type to the FHIR Procedure Resource. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype EI to Procedure.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ EI[Procedure] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>EI.1</td><td>Entity Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Procedure.Procedure-definitions.html#Procedure.identifier.value'>Procedure.identifier.value</a></td><td></td><td></td><td>0</td><td>-1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>EI.2</td><td>Namespace ID</td><td>IS</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td>partOf.reference.identifier.extension??-assigningauthority.nameSpaceID</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>EI.3</td><td>Universal ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td>partOf.reference.identifier.extension-assigningauthority.universalID</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>EI.4</td><td>Universal ID Type</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td>partOf.reference.identifier.extension-assigningauthority.univeralIDType</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-ei-to-procedure-notes.md



---

// File: input/includes/ConceptMap-datatype-ei-udicarrier-to-device-intro.md


This ConceptMap represents the mapping from the HL7 V2 EI Data Type to the FHIR Device Resource. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype EI[UDICarrier] to Device.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ EI[Device-UDICarrier] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>EI.1</td><td>Entity Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.udiCarrier.deviceIdentifier'>Device.udiCarrier.deviceIdentifier</a></td><td></td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.string'>Device.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>EI.2</td><td>Namespace ID</td><td>IS</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td>udiCarrier.extension??-assigningauthority.nameSpaceID</td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.string'>Device.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>EI.3</td><td>Universal ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td>udiCarrier.extension??-assigningauthority.universalID</td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.string'>Device.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>EI.4</td><td>Universal ID Type</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td>udiCarrier.extension-assigningauthority.univeralIDType</td><td><a href='https://hl7.org/fhir/R4/Device.Device-definitions.html#Device.code'>Device.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-ei-udicarrier-to-device-notes.md



---

// File: input/includes/ConceptMap-datatype-eip-fillerassignedidentifer-to-identifier-intro.md


This ConceptMap represents the mapping from the HL7 V2 EIP Data Type to the FHIR Identifier Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype EIP[FillerAssignedIdentifer] to Identifier.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ EIP[Identifier-FillerAssignedIdentifer] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='7'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Assignment</th><th title='Mapping for terminology tables.'>Vocabulary</th></tr></thead>
<tbody>
<tr><td>1</td><td>EIP.1</td><td>Placer Assigned Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td></tr>
<tr><td>1</td><td>EIP.1</td><td>Placer Assigned Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td></tr>
<tr><td>1</td><td>EIP.1</td><td>Placer Assigned Identifier</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td></tr>
<tr><td>2</td><td>EIP.2</td><td>Filler Assigned Identifier</td><td>IS</td><td>0</td><td style='border-right: 2px'>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.value'>Identifier.value</a></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.Identifier'>Identifier.Identifier</a></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td></tr>
<tr><td>2</td><td>EIP.2</td><td>Filler Assigned Identifier</td><td>IS</td><td>0</td><td style='border-right: 2px'>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.type.coding.code'>Identifier.type.coding.code</a></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.code'>Identifier.code</a></td><td>0</td><td>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td>"FGN"</td><td style='border-right: 2px'></td></tr>
<tr><td>2</td><td>EIP.2</td><td>Filler Assigned Identifier</td><td>IS</td><td>0</td><td style='border-right: 2px'>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.type.coding.system'>Identifier.type.coding.system</a></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.uri'>Identifier.uri</a></td><td>0</td><td>1</td><td style='border-right: 2px'></td><td style='border-right: 2px'></td><td>"<a href='http://terminology.hl7.org/CodeSystem/v2-0203'>http://terminology.hl7.org/CodeSystem/v2-0203</a>"</td><td style='border-right: 2px'></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-eip-fillerassignedidentifer-to-identifier-notes.md



---

// File: input/includes/ConceptMap-datatype-eip-fillerassignedidentifier-to-identifier-intro.md


This ConceptMap represents the mapping from the HL7 V2 EIP Data Type to the FHIR Identifier Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype EIP[FillerAssignedIdentifier] to Identifier.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ EIP[Identifier-FillerAssignedIdentifier] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>EIP.1</td><td>Placer Assigned Identifier</td><td>EI</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>EIP.1</td><td>Placer Assigned Identifier</td><td>EI</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>EIP.1</td><td>Placer Assigned Identifier</td><td>EI</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>EIP.2</td><td>Filler Assigned Identifier</td><td>EI</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.value'>Identifier.value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.Identifier'>Identifier.Identifier</a></td><td></td><td></td><td><a href='ConceptMap-datatype-ei-organization-to-identifier.html'>EI[Identifier-Organization]</a></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>EIP.2</td><td>Filler Assigned Identifier</td><td>EI</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.type.coding.code'>Identifier.type.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.code'>Identifier.code</a></td><td>0</td><td>1</td><td></td><td></td><td>"FGN"</td><td></td></tr>
<tr><td>2</td><td>EIP.2</td><td>Filler Assigned Identifier</td><td>EI</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.type.coding.system'>Identifier.type.coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.uri'>Identifier.uri</a></td><td>0</td><td>1</td><td></td><td></td><td>"<a href='http://terminology.hl7.org/CodeSystem/v2-0203'>http://terminology.hl7.org/CodeSystem/v2-0203</a>"</td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-eip-fillerassignedidentifier-to-identifier-notes.md



---

// File: input/includes/ConceptMap-datatype-eip-placerassignedidentifier-to-identifier-intro.md


This ConceptMap represents the mapping from the HL7 V2 EIP Data Type to the FHIR Identifier Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype EIP[PlacerAssignedIdentifier] to Identifier.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ EIP[Identifier-PlacerAssignedIdentifier] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>EIP.1</td><td>Placer Assigned Identifier</td><td>EI</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.value'>Identifier.value</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.Identifier'>Identifier.Identifier</a></td><td></td><td></td><td><a href='ConceptMap-datatype-ei-organization-to-identifier.html'>EI[Identifier-Organization]</a></td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>EIP.1</td><td>Placer Assigned Identifier</td><td>EI</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.type.coding.code'>Identifier.type.coding.code</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.code'>Identifier.code</a></td><td>0</td><td>1</td><td></td><td></td><td>"PGN"</td><td></td></tr>
<tr><td>1</td><td>EIP.1</td><td>Placer Assigned Identifier</td><td>EI</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.type.coding.system'>Identifier.type.coding.system</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.Identifier.uri'>Identifier.uri</a></td><td>0</td><td>1</td><td></td><td></td><td>"<a href='http://terminology.hl7.org/CodeSystem/v2-0203'>http://terminology.hl7.org/CodeSystem/v2-0203</a>"</td><td></td></tr>
<tr><td>2</td><td>EIP.2</td><td>Filler Assigned Identifier</td><td>EI</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>EIP.2</td><td>Filler Assigned Identifier</td><td>EI</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>EIP.2</td><td>Filler Assigned Identifier</td><td>EI</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-eip-placerassignedidentifier-to-identifier-notes.md



---

// File: input/includes/ConceptMap-datatype-fn-to-humanname-intro.md


This ConceptMap represents the mapping from the HL7 V2 FN Data Type to the FHIR HumanName Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype FN to HumanName.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ FN[HumanName] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>FN.1</td><td>Surname</td><td>ST</td><td>1</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#HumanName.HumanName.family'>HumanName.family</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#HumanName.HumanName.string'>HumanName.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>FN.2</td><td>Own Surname Prefix</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#HumanName.HumanName.family.extension.url'>HumanName.family.extension.url</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#HumanName.HumanName.uri'>HumanName.uri</a></td><td>1</td><td>1</td><td></td><td></td><td>"<a href='http://hl7.org/fhir/StructureDefinition/humanname-own-prefix'>http://hl7.org/fhir/StructureDefinition/humanname-own-prefix</a>"</td><td></td></tr>
<tr><td>2</td><td>FN.2</td><td>Own Surname Prefix</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#HumanName.HumanName.family.extension.valueString'>HumanName.family.extension.valueString</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#HumanName.HumanName.string'>HumanName.string</a></td><td>1</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>FN.3</td><td>Own Surname</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#HumanName.HumanName.family.extension.url'>HumanName.family.extension.url</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#HumanName.HumanName.uri'>HumanName.uri</a></td><td>1</td><td>1</td><td></td><td></td><td>"<a href='http://hl7.org/fhir/StructureDefinition/humanname-own-name'>http://hl7.org/fhir/StructureDefinition/humanname-own-name</a>"</td><td></td></tr>
<tr><td>3</td><td>FN.3</td><td>Own Surname</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#HumanName.HumanName.family.extension.valueString'>HumanName.family.extension.valueString</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#HumanName.HumanName.string'>HumanName.string</a></td><td>1</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>FN.4</td><td>Surname Prefix from Partner/Spouse</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#HumanName.HumanName.family.extension.url'>HumanName.family.extension.url</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#HumanName.HumanName.uri'>HumanName.uri</a></td><td>1</td><td>1</td><td></td><td></td><td>"<a href='http://hl7.org/fhir/StructureDefinition/humanname-partner-prefix'>http://hl7.org/fhir/StructureDefinition/humanname-partner-prefix</a>"</td><td></td></tr>
<tr><td>4</td><td>FN.4</td><td>Surname Prefix from Partner/Spouse</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#HumanName.HumanName.family.extension.valueString'>HumanName.family.extension.valueString</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#HumanName.HumanName.string'>HumanName.string</a></td><td>1</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>5</td><td>FN.5</td><td>Surname from Partner/Spouse</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#HumanName.HumanName.family.extension.url'>HumanName.family.extension.url</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#HumanName.HumanName.uri'>HumanName.uri</a></td><td>1</td><td>1</td><td></td><td></td><td>"<a href='http://hl7.org/fhir/StructureDefinition/humanname-partner-name'>http://hl7.org/fhir/StructureDefinition/humanname-partner-name</a>"</td><td></td></tr>
<tr><td>5</td><td>FN.5</td><td>Surname from Partner/Spouse</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#HumanName.HumanName.family.extension.valueString'>HumanName.family.extension.valueString</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#HumanName.HumanName.string'>HumanName.string</a></td><td>1</td><td>1</td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-fn-to-humanname-notes.md



---

// File: input/includes/ConceptMap-datatype-ft-comment-to-annotation-intro.md


This ConceptMap represents the mapping from the HL7 V2 FT Data Type to the FHIR Annotation Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype FT[Comment] to Annotation.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ FT[Annotation-Comment] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>FT-1</td><td>Formatted Text</td><td>FT</td><td>1</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Annotation.Annotation.text'>Annotation.text</a></td><td></td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#Annotation.Annotation.markdown'>Annotation.markdown</a></td><td>1</td><td>1</td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-ft-comment-to-annotation-notes.md



---

// File: input/includes/ConceptMap-datatype-hd-assigningauthority-to-extension-intro.md


This ConceptMap represents the mapping from the HL7 V2 HD Data Type to the FHIR extension Data Type. See also the <a href='https://github.com/HL7/v2-to-fhir/blob/master/tank/Datatype HD[AssigningAuthority] to extension.fsh'>FHIR Shorthand</a> or the <a href='https://github.com/HL7/v2-to-fhir/blob/master/mappings/datatypes/HL7 Data Type - FHIR R4_ HD[extension-AssigningAuthority] - Sheet1.csv'>CSV Source</a>.
<table class='grid'><thead>
<tr><th colspan='6'>HL7 v2</th><th colspan='3'>Condition (IF True, args)</th><th colspan='8'>HL7 FHIR</th><th rowspan='2'>Comments</th></tr>
<tr><th title='Rows are listed in sequence of how they appear in the v2 standard. The first column, Sort Order, provides a sort order that can re-create the original v2 standard sequence in case one opts to re-sort/filter the rows.'>Sort Order</th><th title='Contains the formal Data Type Name and Component Sequence according to the base standard using &quot;.&quot; as the delimiter.'>Identifier</th><th title='The formal name of the field in the most current published version.'>Name</th><th title='The data type of the field in the most current published version if not deprecated, otherwise the data type at the time it was deprecated and removed.'>Data Type</th><th title='The V2 min cardinality expressed numerically.'>Cardinality - Min</th><th title='The V2 max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='Condition in an easy to read syntax (Computable ANTLR)'>Computable ANTLR</th><th title='Condition in FHIRPath Notation'>Computable FHIRPath</th><th title='Condition expressed in narrative form' style='border-right: 2px'>Narrative</th><th title='An existing FHIR attribute in the target FHIR version.'>FHIR Attribute</th><th title='The FHIR attribute&apos;s data type in the target FHIR version.'>Proposed Extension</th><th title='The proposed FHIR Extension.'>Data Type</th><th title='The FHIR min cardinality expressed numerically.'>Cardinality - Min</th><th title='The FHIR max cardinality expressed numerically.' style='border-right: 2px'>Cardinality - Max</th><th title='The URL to the Data Type Map that is to be used for the attribute in this segment.'>Data Type Mapping</th><th title='The fixed or computed value to assign.'>Vocabulary Mapping<br/>(IS, ID, CE, CEN, CWE)</th><th title='Mapping for terminology tables.'>Assignment</th></tr></thead>
<tbody>
<tr><td>1</td><td>HD.1</td><td>Namespace ID</td><td>IS</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td>extension??-assigningauthority.nameSpaceID</td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#extension.Extension.string'>Extension.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>HD.2</td><td>Universal ID</td><td>ST</td><td>0</td><td style='border-right: 2px'>1</td><td>IF HD.3 IN ("ISO", "UUID")</td><td></td><td style='border-right: 2px'></td><td></td><td>extension??-assigningauthority.universalID</td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#extension.Extension.string'>Extension.string</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>HD.3</td><td>Universal ID Type</td><td>ID</td><td>0</td><td style='border-right: 2px'>1</td><td></td><td></td><td style='border-right: 2px'></td><td></td><td>extension??-assigningauthority.univeralIDType</td><td><a href='https://hl7.org/fhir/R4/datatypes-definitions.html#extension.Extension.code'>Extension.code</a></td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr>
</tbody></table>


---

// File: input/includes/ConceptMap-datatype-hd-assigningauthority-to-extension-notes.md



---

