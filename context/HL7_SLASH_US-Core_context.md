File: repos/HL7_SLASH_US-Core/input/_resources/README.md

This folder contains 'private' resources used for publishing and hidden from the reader.  Won't show up in the IG.


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/new-us-core-diagnosticreport-search.md



`GET [base]/DiagnosticReport?patient=[id]&category=[system]|[code]`

**Example:** GET [base]/DiagnosticReport?patient=f201&category=http://loinc.org&#124;LP29684-5

*Support:* Mandatory to support search by patient and category codes specified in [Argonaut DiagnosticReport Category Codes].

*Implementation Notes:* Search based on diagnostic report category code, for example Radiology (LP29684-5). This fetches a bundle of all LP29684-5 related DiagnosticReport resources for the specified patient  [(how to search by reference)] and [(how to search by token)].


-----------

`GET [base]/DiagnosticReport?patient=[id]&code=[LOINC{,LOINC2,LOINC3,...}]`

**Example:** GET [base]/DiagnosticReport?patient=1032702&code=84178-3  (LOINC =  84178-3 Interventional Radiology Note)

*Support:* Mandatory support search by a specific DiagnosticReport code. SHOULD support search by multiple report codes.

*Implementation Notes:* Search based on DiagnosticReport code(s). This fetches a bundle of all DiagnosticReport resources for a specific diagnostic order code(s) for the specified patient  [(how to search by reference)] and [(how to search by token)].


-----------

`GET [base]/DiagnosticReport?patient=[id]&category=[system]|[code]&date=[date]{&date=[date]}`

**Example:** GET [base]/DiagnosticReport?patient=f201&category=http://loinc.org&#124;LP29684-5&date=ge2010-01-14

*Support:*  Mandatory support search by category codes in [Argonaut DiagnosticReport Category Codes] and date or period.

*Implementation Notes:*  Search based on category code, for example Radiology (LP29684-5), and date. This fetches a bundle of all DiagnosticReport resources with category LP29684-5 for the specified patient for a specified time period   [(how to search by reference)], [(how to search by token)] and [(how to search by date)].


  [Argonaut DiagnosticReport Category Codes]: ValueSet-us-core-diagnosticreport-category.html
  [(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
  [(how to search by token)]: {{site.data.fhir.path}}search.html#token
  [Composite Search Parameters]: {{site.data.fhir.path}}search.html#combining
  [(how to search by date)]: {{site.data.fhir.path}}search.html#date


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/new-us-core-diagnosticreport-summary.md

##### Summary of the Mandatory Requirements

    ...todo...


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/new-us-core-documentreference-search.md

Retrieve a Clinical Note with a given DocumentReference id:

----

**`GET [base]/DocumentReference/[id]`**

Example: GET [base]/DocumentReference/2169591

*Support:* Mandatory to support retrieve by a specific DocumentReference id. 

*Implementation Notes:* This will return a pointer to the Binary resource which then can be retrieved using:

**`GET [base]/Binary/[id]`**

All other searches expect this two step process of locating the Clinical Note, and then retrieving the Binary. 

Retrieve all Clinical Notes for a given Patient:

----

**`GET [base]/DocumentReference?patient=[id]&class=clinical-note`**

Example: GET [base]/DocumentReference?patient=1235541&class=clinical-note


*Support:* Mandatory to support search by patient to locate all Clinical Notes.

*Implementation Notes:* Search for all Clinical Notes for a patient [(how to search by reference)] fetches a bundle of all DocumentReference resources for the specified patient. Retrieving specific Notes will require a secondary request on the Binary resource. 


Retrieve a Patient's Clinical Notes by Searching with a date range:

----

**`GET [base]/DocumentReference?patient=[id]&class=clinical-note&created=[date]`**

Example: GET [base]/DocumentReference?patient=1316024&class=clinical-note&created=ge2018-04-11


*Support:* Mandatory to support search by date range.

*Implementation Notes:* Search for all Clinical Notes for a patient [(how to search by reference)] for a date range [(how to search by date)] fetches a bundle of all DocumentReference resources for the specified patient. Retrieving specific Notes will require a secondary request on the Binary resource. 

Retrieve a specific Note type for a Patient:

----

**`GET [base]/DocumentReference?patient=[id]&type=[note type (LOINC)]`**

Example: GET [base]/DocumentReference?patient=1316024&type=http://loinc.org 18842-5

*Support:* Mandatory to support search by Note type.

*Implementation Notes:* Search for a specific Note type [(how to search by token)] for a patient [(how to search by reference)] fetches a bundle of all DocumentReference resources for the specified patient. Retrieving specific Notes will require a secondary request on the Binary resource. 

Write new note to a Patient's Chart:

----

**`POST [base]/DocumentReference`**

{% include examplebutton.html example="clinical-note-post" %}

*Support:* Mandatory to support write capability.

-------

  [(how to search by reference)]: {{ site.data.fhir.path }}search.html#reference
  [(how to search by token)]: {{ site.data.fhir.path }}search.html#token
  [Composite Search Parameters]: {{ site.data.fhir.path }}search.html#combining
  [(how to search by date)]: {{ site.data.fhir.path }}search.html#date
  [(how to search by _include)]: {{ site.data.fhir.path }}search.html#_include


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/new-us-core-documentreference-summary.md

##### Summary of the Mandatory Requirements

    ...todo...


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/searchparameters.md

---
title: Operations and Search Parameters
layout: default
active: searchparameters
---

The following operations and search parameters have been defined for the US Core Implementation Guide.  For more information on the [FHIR RESTful operations ]({{site.data.fhir.path}}operations.html), [FHIR RESTful search api]({{site.data.fhir.path}}search.html) and the standard [Search Param Registry]({{site.data.fhir.path}}searchparameter-registry.html) see the FHIR specification.

### Operations

{% include list-simple-operationdefinitions.xhtml %}

### Search Parameters

{% include list-simple-searchparameters.xhtml %}


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-allergyintolerance-search.md


#### Mandatory Search Parameters:

The following search parameters, search parameter combinations and search parameter [modifiers], [comparators] and [chained parameters] SHALL be supported.  the  modifiers, comparators and chained parameters that are listed as optional SHOULD be supported:


1. **SHALL** support searching for all allergies for a patient using the **`_id`** search parameter:

  `GET [base]/AllergyIntolerance[id]`

  Example: GET [base]/AllergyIntolerance?patient=1137192

  *Implementation Notes:* Fetches a bundle of all AllergyIntolerance resources for the specified patient (how to search by the [logical id] of the resource)





{% include link-list.md %}

---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-allergyintolerance-summary.md

**AllergyIntolerance**

#### Summary of the Mandatory Requirements
1.  A  CodeableConcept  in `AllergyIntolerance.code`
with an [extensible](http://hl7.org/fhir/R4/terminologies.html#extensible)
 binding to [Common substances for allergy and intolerance documentation including refutations](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1186.8/expansion)
1.  A Patient Reference  in `AllergyIntolerance.patient`

#### Summary of the Must Support Requirements
1.  A  CodeableConcept  in `AllergyIntolerance.clinicalStatus`
with a [required](http://hl7.org/fhir/R4/terminologies.html#required)
 binding to [AllergyIntolerance Clinical Status Codes](http://hl7.org/fhir/ValueSet/allergyintolerance-clinical)
1.  A  CodeableConcept  in `AllergyIntolerance.verificationStatus`
with a [required](http://hl7.org/fhir/R4/terminologies.html#required)
 binding to [AllergyIntolerance Verification Status Codes](http://hl7.org/fhir/ValueSet/allergyintolerance-verification)

#### Summary of Constraints
1. AllergyIntolerance.clinicalStatus SHALL be present if verificationStatus is not entered-in-error.
1. AllergyIntolerance.clinicalStatus SHALL NOT be present if verification Status is entered-in-error.


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-birthsex-search.md

**No Search criteria for us-core-birthsex extension.**


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-birthsex-summary.md

##### Summary of the Mandatory Requirements

1. One Birth Sex in Patient.extension= US Core Patient Birth Sex which has an required binding to:
[US Core Birth Sex](ValueSet-us-core-birthsex.html)


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-careplan-search.md



`GET /CarePlan?patient=[id]&category=assess-plan`

**Example:** GET [base]/CarePlan?patient=1137192&category=assess-plan

*Support:* Mandatory to support search by patient.

*Implementation Notes:* Search for all patient assessments and plans of treatment for a patient. Fetches a bundle of all CarePlan resources for the specified patient [(how to search by reference)] and [(how to search by token)].


-----------

`GET /CarePlan?patient=[id]&category=assess-plan&date=[date]`

**Example:**

- GET [base]/CarePlan?patient=1137192&category=assess-plan&date=ge2015-01-14
- GET [base]/CarePlan?patient=1137192&category=assess-plan&date=ge2015-01-14&date=le2016-01-14

*Support:* Mandatory to support search by date

*Implementation Notes:* Search for all assessment and plan of treatment for a patient within a time period. Fetches a bundle of all CarePlan resources for the specified patient for a specified time period.  [(how to search by reference)], [(how to search by token)] and [(how to search by date)].


-----------

`GET /CarePlan?patient=[id]&category=assess-plan&status=active`

**Example:** GET [base]/CarePlan?patient=1137192&status=active

*Support:* SHOULD support search by patient and status = 'active'.

*Implementation Notes:* SHOULD support search by reference and status. [(how to search by reference)], [(how to search by token)].


-----------

`GET /CarePlan?patient=[id]&category=assess-plan&status=active&date=[date]`

**Example:** GET [base]/CarePlan?patient=1137192&category=assess-plan&datatus=active&date=ge2015-01-14

*Support:* SHOULD support search by patient and status = 'active' and date.

*Implementation Notes:* Search for all active assessment and plan of treatment for a patient within a time period. Fetches a bundle of all active (careplan = "active") CarePlan resources for the specified patient for a specified time period.  [(how to search by reference)], [(how to search by token)] and [(how to search by date)].




  [(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
  [`https://fhir-open-api-dstu2.smarthealthit.org/AllergyIntolerance?patient=1137192`]: https://fhir-open-api-dstu2.smarthealthit.org/AllergyIntolerance?patient=1137192
  [(how to search by token)]: {{site.data.fhir.path}}search.html#token
  [Composite Search Parameters]: {{site.data.fhir.path}}search.html#combining
  [`https://fhir-open-api-dstu2.smarthealthit.org/AllergyIntolerance?patient=1137192&status=active,unconfirmed,confirmed`]: https://fhir-open-api-dstu2.smarthealthit.org/AllergyIntolerance?patient=1137192&status=active,unconfirmed,confirmed
   [(how to search by date)]: {{site.data.fhir.path}}search.html#date


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-careplan-summary.md

##### Complete Summary of the Mandatory Requirements

1.  A narrative summary in `CarePlan.text`
    -   [CarePlan.text.status] is either “generated” or “additional”
1.  One status in `CarePlan.status`
    -   CarePlan.status is bound to [CarePlanStatus] Value set
1.  One intent in `CarePlan.intent`
    -   CarePlan.intent is bound to [CarePlanIntent] Value set
1.  A category in `Careplan.category` which must have:
    -   a fixed `Careplan.category.coding.system`= "http://hl7.org/fhir/us/core/CodeSystem/careplan-category"
    -   a fixed `Careplan.category.coding.code`=“assess-plan”
1.  One reference to a patient in `CarePlan.subject`


  [CarePlan.text.status]: {{site.data.fhir.path}}valueset-narrative-status.html
  [CarePlanStatus]: http://hl7.org/fhir/request-status

  [CarePlanIntent]: {{site.data.fhir.path}}valueset-care-plan-intent.html
 [http://hl7.org/fhir/us/daf/CodeSystemCarePlan-category]: CodeSystem-careplan-category.html


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-careteam-search.md



-----------

`GET/CareTeam?patient=[id]&status=active`


**Example:** GET [base]/CareTeam?patient=1137192&status=active


*Support:* Mandatory to support search by patient and status.

*Implementation Notes:* Search for all current care team members for a patient. Fetches a bundle of all current CareTeam resource(s) and the participants referenced by the CareTeam resource(s) for the specified patient. [(how to search by reference)], [(how to search by token)].





  [(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
  [(how to search by token)]: {{site.data.fhir.path}}search.html#token
  [Composite Search Parameters]: {{site.data.fhir.path}}search.html#combining
  [(how to search by date)]: {{site.data.fhir.path}}search.html#date
  [(how to include referenced resources in search result)]: ({{site.data.fhir.path}}search.html#include)


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-careteam-summary.md

##### Complete Summary of the Mandatory Requirements

1.  One status in `CareTeam.status`
-   CareTeam.status is bound to [CareTeamStatus] value set
1.  One reference to a patient in `CareTeam.subject`
1.  One participant role for each careteam member in
    `CareTeam.participant.role`which which has:
    -   a [extensible + max valueset](general-guidance.html#extensible--max-valueset-binding-for-codeableconcept-datatype)  binding to the [CareTeam Provider Role
Value Set] value set.
1.  Careteam members in `CareTeam.participant.member`

 [CareTeamStatus]: {{site.data.fhir.path}}valueset-care-team-status.html
 [CareTeam Provider Role Value Set]: ValueSet-us-core-careteam-provider-roles.html


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-condition-search.md


`GET /Condition?patient=[id]`

**Example:** GET [base]/Condition?patient=1032702

*Support:* Mandatory to support search by patient.

*Implementation Notes:*  Search for all problems and health concerns for a patient. Fetches a bundle of all Condition resources for the specified patient. [(how to search by reference)] and [(how to search by token)].


-----------

`GET /Condition?patient=[id]&clinicalstatus=active,recurrence,remission`

**Example:** GET [base]/Condition?patient=1032702&clinicalstatus=active,relapse,remission

*Support:* Optional to support search by status.

*Implementation Notes:* Search for all active problems and health concerns for a patient. Fetches a bundle of all Condition resources for the specified patient and all "active" statuses (active,relapse,remission)  [(how to search by reference)] and [(how to search by token)]. This will not return any "entered in error" resources because of the conditional presence of the clinicalStatus element.


-----------
`GET /Condition?patient=[id]&category=problem`

**Example:** GET [base]/Condition?patient=1032702&category=problem

*Support:* Optional to support search by patient and category.

*Implementation Notes:*  earch for all Problems for a patient. Fetches a bundle of all Condition resources for the specified patient with a category code of "problem" [(how to search by reference)] and [(how to search by token)].


-----------

`GET /Condition?patient=[id]&category=health-concern`


**Example:** GET [base]/Condition?patient=1032702&category=health-concern

*Support:* Optional to support search by patient and category.

*Implementation Notes:*  Search for all Health Concerns for a patient. Fetches a bundle of all Condition resources for the specified patient with a category code of "health-concern"[(how to search by reference)] and [(how to search by token)].


-----------


  [(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
  [(how to search by token)]: {{site.data.fhir.path}}search.html#token
  [Composite Search Parameters]: {{site.data.fhir.path}}search.html#combining
  [(how to search by date)]: {{site.data.fhir.path}}search.html#date
  [(how to search by string)]: {{site.data.fhir.path}}search.html#string


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-condition-summary.md

##### Complete Summary of the Mandatory Requirements

1.  Conditionally One clinical status in `Condition.clinicalStatus`
    -   [Invariants]
    -   Condition.clinicalStatus is bound to [Condition Clinical Status Codes]
1.  One code in `Condition.verificationStatus` which is bound to [ConditionVerificationStatus] value set
1.  At least on code in `Condition.category` which has an [extensible]({{site.data.fhir.path}}terminologies.html#extensible) binding to [US Core Condition Category Codes] value set
1.  One Identification of the problem or health concern in `Condition.code` which has an [extensible]({{site.data.fhir.path}}terminologies.html#extensible) binding to [Problem Value Set]
1.  One patient reference in `Condition.patient`


  [extensible]: {{site.data.fhir.path}}terminologies.html#extensible
  [Problem Value Set]: ValueSet-us-core-condition-code.html
  [Invariants]: {{site.data.fhir.path}}condition.html#invs
  [Condition Clinical Status Codes]: {{site.data.fhir.path}}valueset-condition-clinical.html
  [ConditionVerificationStatus]: {{site.data.fhir.path}}valueset-condition-ver-status.html
  [US Core Condition Profile]:StructureDefinition-us-core-condition.html
 [US Core Condition Category Codes]: ValueSet-us-core-condition-category.html


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-device-search.md


`GET /Device?patient=[id]`

**Example:** GET [base]/Device?patient=1032702


*Support:* Mandatory to support search by patient.

*Implementation Notes:* Fetches a bundle of all Device resources for the specified patient [(how to search by reference)]. This search will return both implantable and non-implantable devices.  

`GET /Device?patient=[id]&type=[device type (SNOMED)]`


**Example:** GET /Device?patient=1032702&type=14106009

*Support:* Recommended to support search by patient and device type.

*Implementation Notes:* Fetches a bundle of Device resources for the specified patient of a specific Device type.  




  [(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
  [(how to search by token)]: {{site.data.fhir.path}}search.html#token
  [Composite Search Parameters]: {{site.data.fhir.path}}search.html#combining
  [(how to search by date)]: {{site.data.fhir.path}}search.html#date


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-device-summary.md

##### Complete Summary of the Mandatory Requirements

1.  One udicarrier string in `Device.udicarrier`
    -   The Human Readable Form (HRF) representation of the barcode string as printed on the packaging of the device *SHALL* be used. The AIDC representation cannot be conveyed in FHIR, Because of limitations on character sets in XML and the need to round-trip JSON data through XML.
1.  A code in `Device.type` which has an [extensible]({{site.data.fhir.path}}terminologies.html#extensible) binding to:
    -   [Device Types] (SNOMED-CT) value set.
1.  One patient reference in `Device.patient`

  [Device Types]: {{site.data.fhir.path}}valueset-device-kind.html


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-diagnosticreport-lab-search.md



`GET [base]/DiagnosticReport?patient=[id]&category=LAB`

**Example:** GET [base]/DiagnosticReport?patient=f201&category=LAB

*Support:* Mandatory to support search by patient and category code = 'LAB'.

*Implementation Notes:* Search based on diagnostic report category code = 'LAB'. This fetches a bundle of all lab related DiagnosticReport resources for the specified patient  [(how to search by reference)] and [(how to search by token)].


-----------

`GET [base]/DiagnosticReport?patient=[id]&code=[LOINC{,LOINC2,LOINC3,...}]`

**Example:**
-  Search for all metabolic panel reports (LOINC = 24323-8 *Comprehensive metabolic 2000 panel - Serum or Plasma*) for a patient
  - GET [base]/DiagnosticReport?patient=1032702&code=24323-8


- Search for all cbc (LOINC = 58410-2 *CBC panel - Blood by Automated count*), metabolic panel, and urinalysis panels (LOINC = 24356-8 *Urinalysis complete panel - Urine*) for a patient
  - GET [base]/DiagnosticReport?patient=1032702&code=24323-8,58410-2,24356-8

*Support:* Mandatory support search by a laboratory order code. SHOULD support search by multiple order codes.

*Implementation Notes:* Search based on DiagnosticReport code(s). This fetches a bundle of all DiagnosticReport resources for a specific diagnostic order code(s) for the specified patient  [(how to search by reference)] and [(how to search by token)].


-----------

`GET [base]/DiagnosticReport?patient=[id]&category=LAB&date=[date]{&date=[date]}`

**Example:** Find all the lab reports issued after 2010-01-14

- GET [base]/DiagnosticReport?patient=f201&category=LAB&date=ge2010-01-14

*Support:*  Mandatory support search by category code = 'LAB' and date or period.

*Implementation Notes:*  Search based on laboratory category code and date. This fetches a bundle of all DiagnosticReport resources with category 'LAB' for the specified patient for a specified time period   [(how to search by reference)], [(how to search by token)] amd [(how to search by date)].



  [(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
  [(how to search by token)]: {{site.data.fhir.path}}search.html#token
  [Composite Search Parameters]: {{site.data.fhir.path}}search.html#combining
  [(how to search by date)]: {{site.data.fhir.path}}search.html#date


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-diagnosticreport-note-search.md



`GET [base]/DiagnosticReport?patient=[id]&category=[system]|[code]`

**Example:** GET [base]/DiagnosticReport?patient=f201&category=http://loinc.org&#124;LP29684-5

*Support:* Mandatory to support search by patient and category codes specified in [US Core DiagnosticReport Category Codes].

*Implementation Notes:* Search based on diagnostic report category code, for example Radiology (LP29684-5). This fetches a bundle of all LP29684-5 related DiagnosticReport resources for the specified patient  [(how to search by reference)] and [(how to search by token)].


-----------

`GET [base]/DiagnosticReport?patient=[id]&code=[LOINC{,LOINC2,LOINC3,...}]`

**Example:** GET [base]/DiagnosticReport?patient=1032702&code=84178-3  (LOINC =  84178-3 Interventional Radiology Note)

*Support:* Mandatory support search by a specific DiagnosticReport code. SHOULD support search by multiple report codes.
a
*Implementation Notes:* Search based on DiagnosticReport code(s). This fetches a bundle of all DiagnosticReport resources for a specific diagnostic order code(s) for the specified patient  [(how to search by reference)] and [(how to search by token)].


-----------

`GET [base]/DiagnosticReport?patient=[id]&category=[system]|[code]&date=[date]{&date=[date]}`

**Example:** GET [base]/DiagnosticReport?patient=f201&category=http://loinc.org&#124;LP29684-5&date=ge2010-01-14

*Support:*  Mandatory support search by category codes in [US Core DiagnosticReport Category Codes] and date or period.

*Implementation Notes:*  Search based on category code, for example Radiology (LP29684-5), and date. This fetches a bundle of all DiagnosticReport resources with category LP29684-5 for the specified patient for a specified time period   [(how to search by reference)], [(how to search by token)] and [(how to search by date)].


  [US Core DiagnosticReport Category Codes]: ValueSet-us-core-diagnosticreport-category.html
  [(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
  [(how to search by token)]: {{site.data.fhir.path}}search.html#token
  [Composite Search Parameters]: {{site.data.fhir.path}}search.html#combining
  [(how to search by date)]: {{site.data.fhir.path}}search.html#date


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-diagnosticreport-search.md



`GET [base]/DiagnosticReport?patient=[id]&category=LAB`

**Example:** GET [base]/DiagnosticReport?patient=f201&category=LAB

*Support:* Mandatory to support search by patient and category code = 'LAB'.

*Implementation Notes:* Search based on diagnostic report category code = 'LAB'. This fetches a bundle of all lab related DiagnosticReport resources for the specified patient  [(how to search by reference)] and [(how to search by token)].


-----------

`GET [base]/DiagnosticReport?patient=[id]&code=[LOINC{,LOINC2,LOINC3,...}]`

**Example:**
-  Search for all metabolic panel reports (LOINC = 24323-8 *Comprehensive metabolic 2000 panel - Serum or Plasma*) for a patient
  - GET [base]/DiagnosticReport?patient=1032702&code=24323-8


- Search for all cbc (LOINC = 58410-2 *CBC panel - Blood by Automated count*), metabolic panel, and urinalysis panels (LOINC = 24356-8 *Urinalysis complete panel - Urine*) for a patient
  - GET [base]/DiagnosticReport?patient=1032702&code=24323-8,58410-2,24356-8

*Support:* Mandatory support search by a laboratory order code. SHOULD support search by multiple order codes.

*Implementation Notes:* Search based on DiagnosticReport code(s). This fetches a bundle of all DiagnosticReport resources for a specific diagnostic order code(s) for the specified patient  [(how to search by reference)] and [(how to search by token)].


-----------

`GET [base]/DiagnosticReport?patient=[id]&category=LAB&date=[date]{&date=[date]}`

**Example:** Find all the lab reports issued after 2010-01-14

- GET [base]/DiagnosticReport?patient=f201&category=LAB&date=ge2010-01-14

*Support:*  Mandatory support search by category code = 'LAB' and date or period.

*Implementation Notes:*  Search based on laboratory category code and date. This fetches a bundle of all DiagnosticReport resources with category 'LAB' for the specified patient for a specified time period   [(how to search by reference)], [(how to search by token)] amd [(how to search by date)].



  [(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
  [(how to search by token)]: {{site.data.fhir.path}}search.html#token
  [Composite Search Parameters]: {{site.data.fhir.path}}search.html#combining
  [(how to search by date)]: {{site.data.fhir.path}}search.html#date


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-diagnosticreport-summary.md

##### Complete Summary of the Mandatory Requirements


1.  One status in `DiagnosticReport.status` which has a [required]({{site.data.fhir.path}}terminologies.html#required) binding to:
    -   [DiagnosticReportStatus] value set.
1.  One category in `DiagnosticReport.category` which must have:
    -   a fixed `DiagnosticReport.category.coding.system`= "http://hl7.org/fhir/DiagnosticReport-category”
    -   a fixed `DiagnosticReport.category.coding.code`= "LAB"
1.  One code in `DiagnosticReport.code` which has an [extensible]({{site.data.fhir.path}}terminologies.html#extensible) binding to:
    -   [LOINC Diagnostic Report Codes]
    -   Other additional codes are allowed - e.g. system specific codes. All codes *SHALL* have an system value
1.  One patient in `DiagnosticReport.subject`
1.  A date and time in `DiagnosticReport.effectiveDateTime` or `DiagnosticReport.effectivePeriod`
1.  A date and time in `DiagnosticReport.issued`
1.  One or more `DiagnosticReport.result` and/or one or more `DiagnosticReport.presentedForm`

Each DiagnosticReport *SHOULD* have:

1.  A practitioner or organization in `DiagnosticReport.performer.actor`

[DiagnosticReportStatus]: {{site.data.fhir.path}}valueset-diagnostic-report-status.html
[Observation]: {{site.data.fhir.path}}observation.html
[LOINC Diagnostic Report Codes]: {{site.data.fhir.path}}valueset-report-codes.html


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-direct-search.md

**No Search criteria for uscore-direct extension.**


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-direct-summary.md

##### Summary of the Mandatory Requirements

1. MAY use this extension to indicate if contactpoint datatype is a direct email address


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-documentreference-search.md

### Search for Clinical Notes

Retrieve a Clinical Note with a given DocumentReference id:

----

**`GET [base]/DocumentReference/[id]`**

Example: GET [base]/DocumentReference/2169591

*Support:* Mandatory to support retrieve by a specific DocumentReference id.

*Implementation Notes:* This will return a pointer to the Binary resource which then can be retrieved using:

**`GET [base]/Binary/[id]`**

All other searches expect this two step process of locating the Clinical Note, and then retrieving the Binary.

Retrieve all Clinical Notes for a given Patient:

----

**`GET [base]/DocumentReference?patient=[id]&category=clinical-note`**

Example: GET [base]/DocumentReference?patient=1235541&category=clinical-note


*Support:* Mandatory to support search by patient to locate all Clinical Notes.

*Implementation Notes:* Search for all Clinical Notes for a patient [(how to search by reference)] fetches a bundle of all DocumentReference resources for the specified patient. Retrieving specific Notes will require a secondary request on the Binary resource.


Retrieve a Patient's Clinical Notes by Searching with a date range:

----

**`GET [base]/DocumentReference?patient=[id]&category=clinical-note&created=[date]`**

Example: GET [base]/DocumentReference?patient=1316024&category=clinical-note&created=ge2018-04-11


*Support:* Mandatory to support search by date range.

*Implementation Notes:* Search for all Clinical Notes for a patient [(how to search by reference)] for a date range [(how to search by date)] fetches a bundle of all DocumentReference resources for the specified patient. Retrieving specific Notes will require a secondary request on the Binary resource.

Retrieve a specific Note type for a Patient:

----

**`GET [base]/DocumentReference?patient=[id]&type=[note type (LOINC)]`**

Example: GET [base]/DocumentReference?patient=1316024&type=http://loinc.org 18842-5

*Support:* Mandatory to support search by Note type.

*Implementation Notes:* Search for a specific Note type [(how to search by token)] for a patient [(how to search by reference)] fetches a bundle of all DocumentReference resources for the specified patient. Retrieving specific Notes will require a secondary request on the Binary resource.

Write new note to a Patient's Chart:

----

**`POST [base]/DocumentReference`**

{% include examplebutton.html example="clinical-note-post" %}

*Support:* Mandatory to support write capability.

-------

  [(how to search by reference)]: {{ site.data.fhir.path }}search.html#reference
  [(how to search by token)]: {{ site.data.fhir.path }}search.html#token
  [Composite Search Parameters]: {{ site.data.fhir.path }}search.html#combining
  [(how to search by date)]: {{ site.data.fhir.path }}search.html#date
  [(how to search by _include)]: {{ site.data.fhir.path }}search.html#_include


### General Document Search

----

**`GET [base]/DocumentReference?patient=[id]`**

Example: GET [base]/DocumentReference?patient=2169591


*Support:* Mandatory to support search by patient.

*Implementation Notes:* Search for all documents for a patient. Fetches a bundle of all DocumentReference resources for the specified patient [(how to search by reference)].

------

**`GET [base]/DocumentReference?patient=[id]&type=[type]&period=[date]`**

Example: GET [base]/DocumentReference?patient=2169591&type=34133-9&period=ge2016-01-01

*Support:* Optional to support search by patient and type and date range.

*Implementation Notes:* Fetches a bundle of all DocumentReference resources for the specified patient for a given time period and document type.  [(how to search by reference)], [(how to search by token)], and [(how to search by date)].

-----

### Searching documents using the [$docref operation]

This operation is used to request a server *generate* a document based on the specified parameters.  If no parameters are specified, the server SHALL return a DocumentReference to the patient's most current CCD.  See the [$docref operation] definition for details on how this operation differs from a FHIR RESTful search.

-----

**`GET [base]/DocumentReference/$docref?patient=[id]`**

Example: see [$docref operation]

*Support:* Mandatory to support search by $docref operation.


*Implementation Notes:* This operation returns DocumentReference resources. The document itself is retrieved using the link provided in the `DocumentReference.content.attachment.url` element.

{% include link-list.md %}


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-documentreference-summary.md

##### Summary of the Mandatory Requirements

1.  One status in `DocumentReference.status`
    -   DocumentReference.status is bound to [DocumentReferenceStatus] value set
1.  One document type code in `DocumentReference.type` which is bound to [Document Type] value set
1.  One or more categories in `DocumentReference.category`  with an [extensible] binding to [US Core DocumentReferences Category Value Set] value set
1.  One reference to a patient in `DocumentReference.subject`
1.  A date and time in `DocumentReference.indexed`
1.  One url of the document in `DocumentReference.content.attachment`
    -   a mime type in `DocumentReference.content.attachment.contentType` which is bound to [MimeType] value set
    -   a url of the document in `DocumentReference.content.attachment.url`


SHOULD have:

1.  One identifier in `DocumentReference.identifier`
1.  One dateTime value in `DocumentReference.created`
1.  One on more references to the authors in `DocumentReference.author`
1.  One reference to the custodian in `DocumentReference.custodian`
1.  One format code in `DocumentReference.content.format` with an [extensible] binding to [DocumentReference format] value set
1.  One reference to an encounter in `DocumentReference.context.encounter`

{% include link-list.md %}


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-encounter-search.md


#### Mandatory Search Parameters:

The following search parameters, search parameter combinations and search parameter [modifiers], [comparators] and [chained parameters] SHALL be supported.  the  modifiers, comparators and chained parameters that are listed as optional SHOULD be supported:


1. **SHALL** support fetching an Encounter using the **`_id`** search parameter:

  `GET [base]/Encounter[id]`

  Example: GET [base]/Encounter/12354

  *Implementation Notes:*  (how to search by the [logical id] of the resource)

1. **SHALL** support searching for all encounters for a patient using the **`patient`** search parameter:

  `GET [base]/Encounter?patient=[reference]`

  Example: GET [base]/Encounter?patient=1137192

  *Implementation Notes:* Fetches a bundle of all Encounter resources for the specified patient (how to search by [reference])

1. **SHALL** support searching for all encounters by date using the **`date`** search parameter:
  - including support for these comparators: `gt, lt, ge, le`

  `GET [base]/Encounter?date={gt|lt|ge|le}[date]`

  Example: See combination searches below

  *Implementation Notes:* Search based on date and patient parameter (how to search by [date])

1. **SHALL**  using the combination of the  **`date and patient`** search parameters:

  `GET [base]/Encounter?date={gt|lt|ge|le}[date]&patient=[reference]`

  Example: 

  *Implementation Notes:*  (how to search by [reference] and [date])



#### Optional Search Parameters:

The following search parameters, search parameter combinations and search parameter [modifiers], [comparators] and [chained parameters] SHOULD be supported.

1. **SHOULD** support searching using the **`identifier`** search parameter:

  `GET [base]/Encounter?identifier={[system]}|[code]`

  Example: GET [base]/Encounter?identifier=http://hospital.smarthealthit.org|1032702

  *Implementation Notes:*  (how to search by [token])

1. **SHOULD** support searching using the **`status`** search parameter:

  `GET [base]/Encounter?status={[system]}|[code]`

  Example: GET [base]/Encounter?status=completed

  *Implementation Notes:* Fetches a bundle of all Encounter resources for the specified patient (how to search by [token])

1. **SHOULD** support searching using the **`class`** search parameter:

  `GET [base]/Encounter?class={[system]}|[code]`

  Example: GET [base]/Encounter?status=http://terminology.hl7.org/CodeSystem/v3-ActCode|AMB

  *Implementation Notes:* Fetches a bundle of all Encounter resources for the specified patient (how to search by [token])

1. **SHOULD** support searching using the **`type`** search parameter:

  `GET [base]/Encounter?type={[system]}|[code]`

  Example: GET [base]/Encounter?http://www.ama-assn.org/go/cpt|99211

  *Implementation Notes:* Fetches a bundle of all Encounter resources for the specified patient (how to search by [token])

1. **SHOULD** support searching using the combination of the  **`class and date`** search parameters:

  `GET [base]/Encounter?class=[token]&date={gt|lt|ge|le}[date]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [date])

1. **SHOULD** support searching using the combination of the  **`class and date and patient`** search parameters:

  `GET [base]/Encounter?class=[token]&date={gt|lt|ge|le}[date]&patient=[reference]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [reference] and [date])

1. **SHOULD** support searching using the combination of the  **`class and date and patient and type`** search parameters:

  `GET [base]/Encounter?class=[token]&date={gt|lt|ge|le}[date]&patient=[reference]&type=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [reference] and [date])

1. **SHOULD** support searching using the combination of the  **`class and date and type`** search parameters:

  `GET [base]/Encounter?class=[token]&date={gt|lt|ge|le}[date]&type=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [date])

1. **SHOULD** support searching using the combination of the  **`class and patient`** search parameters:

  `GET [base]/Encounter?class=[token]&patient=[reference]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [reference])

1. **SHOULD** support searching using the combination of the  **`class and patient and status`** search parameters:

  `GET [base]/Encounter?class=[token]&patient=[reference]&status=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [reference])

1. **SHOULD** support searching using the combination of the  **`class and patient and status and type`** search parameters:

  `GET [base]/Encounter?class=[token]&patient=[reference]&status=[token]&type=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [reference])

1. **SHOULD** support searching using the combination of the  **`class and patient and type`** search parameters:

  `GET [base]/Encounter?class=[token]&patient=[reference]&type=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [reference])

1. **SHOULD** support searching using the combination of the  **`class and status`** search parameters:

  `GET [base]/Encounter?class=[token]&status=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token])

1. **SHOULD** support searching using the combination of the  **`class and status and type`** search parameters:

  `GET [base]/Encounter?class=[token]&status=[token]&type=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token])

1. **SHOULD** support searching using the combination of the  **`class and type`** search parameters:

  `GET [base]/Encounter?class=[token]&type=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token])

1. **SHOULD** support searching using the combination of the  **`date and patient and type`** search parameters:

  `GET [base]/Encounter?date={gt|lt|ge|le}[date]&patient=[reference]&type=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [reference] and [date])

1. **SHOULD** support searching using the combination of the  **`date and type`** search parameters:

  `GET [base]/Encounter?date={gt|lt|ge|le}[date]&type=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [date])

1. **SHOULD** support searching using the combination of the  **`patient and status`** search parameters:

  `GET [base]/Encounter?patient=[reference]&status=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [reference])

1. **SHOULD** support searching using the combination of the  **`patient and status and type`** search parameters:

  `GET [base]/Encounter?patient=[reference]&status=[token]&type=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [reference])

1. **SHOULD** support searching using the combination of the  **`patient and type`** search parameters:

  `GET [base]/Encounter?patient=[reference]&type=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [reference])

1. **SHOULD** support searching using the combination of the  **`status and type`** search parameters:

  `GET [base]/Encounter?status=[token]&type=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token])


{% include link-list.md %}

---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-encounter-summary.md

##### Complete Summary of the Mandatory Requirements

1.  One status in `Encounter.status`  
1.  A class in `Encounter.class` from [EncounterCode]({{site.data.fhir.path}}v3/ActEncounterCode/vs.html) value set.
1.  At least one type in `Encounter.type` from [US Core Encounter Type](ValueSet-us-core-encounter-type.html) value set.
1.  One patient reference in `Encounter.subject`

##### Summary of the Must Support Requirements

Additionally your system must Support:

1.  One or more Encounter numbers in `Encounter.identifier`
1.  One or more participants in `Encounter.participant`
1.  An `Encounter.period`
1.  One or more reasons in `Encounter.reason` from [EncounterReason]({{site.data.fhir.path}}valueset-encounter-reason.html) value set.
1.  One or more `Encounter.diagnosis.condition`
1.  An `Encounter.diagnosis.rank`
1.  A disposition in `Encounter.hospitlization.dischargeDisposition` from example [dischargeDisposition]({{site.data.fhir.path}}valueset-encounter-discharge-disposition.html) value set.
1.  One or more locations in `Encounter.location`


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-ethnicity-search.md

**No Search criteria for uscore-ethnicity extension.**


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-ethnicity-summary.md

##### Summary of the Mandatory Requirements

1.  [Must Support](general-guidance.html#must-support) one code from [OMB Ethnicity Categories](ValueSet-omb-ethnicity-category.html)
1.  May include additional ethnicity codes from [CDC Ethnicity Codes](ValueSet-detailed-ethnicity.html)
1.   Must include text


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-goal-search.md


`GET /Goal?patient=[id]`

**Example:** GET [base]/Goal?patient=1137192

*Support:* Mandatory to support search by patient.

*Implementation Notes:* Search for all goals for a patient. Fetches a bundle of all Goal resources for the specified patient. [(how to search by reference)].


-----------

`GET /Goal?patient=[id]&date=[date]{&date=[date]}`

**Example:**

- GET [base]/Goal?patient=1137192&date=ge2015-01-14
- GET [base]/Goal?patient=1137192&date=ge2015-01-14&date=le2016-01-14

*Support:* Mandatory to support search by date.

*Implementation Notes:* Search for all goals for a patient within a time period. Fetches a bundle of all Goal resources for the specified patient with a specified time period. [(how to search by reference)] and [(how to search by date)].


  [(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
  [(how to search by token)]: {{site.data.fhir.path}}search.html#token
  [Composite Search Parameters]: {{site.data.fhir.path}}search.html#combining
  [(how to search by date)]: {{site.data.fhir.path}}search.html#date


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-goal-summary.md

##### Complete Summary of the Mandatory Requirements

1.  A status in `Goal.status` which has a [required]({{site.data.fhir.path}}terminologies.html#required) binding to:
    -   [GoalStatus] value set.
1.  A  text description in `Goal.description.text`
1.  A patient reference in `Goal.subject`

  [GoalStatus]: {{site.data.fhir.path}}valueset-goal-status.html


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-immunization-search.md


`GET /Immunization?patient=[id]`

**Example:** GET [base]/Immunization?patient=1032702

*Support:* Mandatory to support search by patient.

*Implementation Notes:* Search for all Immunization resources for a patient. Fetches a bundle of all Immunization resources for the specified patient  [(how to search by reference)].


  [(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
  [(how to search by token)]: {{site.data.fhir.path}}search.html#token
  [Composite Search Parameters]: {{site.data.fhir.path}}search.html#combining
  [(how to search by date)]: {{site.data.fhir.path}}search.html#date


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-immunization-summary.md

##### Complete Summary of the Mandatory Requirements

1.  One status in `Immunization.status` which has a [required]({{site.data.fhir.path}}terminologies.html#required) binding to:
-  [Immunization Status] value set.
1.  One dateTime in `Immunization.date`
1.  One vaccine code in `Immunization.vaccineCode` which has:
-   a [extensible + max valueset](general-guidance.html#extensible--max-valueset-binding-for-codeableconcept-datatype)  binding to the [CVX] value set
-   SHOULD have a translation to the [NDC] value set
1.  One patient in `Immunization.patient`
1.  One boolean value in `Immunization.notGiven`
1.  One boolean value in `Immunization.primarySource`

  [Immunization Status]: {{site.data.fhir.path}}valueset-immunization-status.html
  [CVX]: ValueSet-us-core-cvx.html
  [NDC]: ValueSet-us-core-ndc-vaccine-codes.html


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-inspired-oxygen-search.md


{% assign id = {{page.id}} %}
source file: source/pages/\_includes/{{id}}-search.md

~~~
This is the search markdown file that gets inserted into the sd.html Quick Start section for explanation of the search requirements.
~~~


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-inspired-oxygen-summary.md


{% assign id = {{page.id}} %}
source file: source/pages/\_includes/{{id}}-summary.md

~~~
This is the search markdown file that gets inserted into the summary Tab
~~~


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-location-search.md


`GET [base]/Location?name=[string]`

**Example:** GET [base]/Location?name=Health


*Support:* Mandatory

*Implementation Notes:*  Search based on text name [(how to search by string)]. 

*Response Class:*

-   (Status 200): successful operation
-   (Status 400): invalid parameter
-   (Status 401/4xx): unauthorized request
-   (Status 403): insufficient scope


-----------


`GET [base]/Location?address=[string]`

**Example:** GET [base]/Location?address=Arbor

**Example:** GET [base]/Location?address-postalcode=48104

*Support:* Mandatory

*Implementation Notes:* Search based on text address [(how to search by string)].

SHOULD support:

   - address-city
   - address-state
   - address-postalcode

*Response Class:*

-   (Status 200): successful operation
-   (Status 400): invalid parameter
-   (Status 401/4xx): unauthorized request
-   (Status 403): insufficient scope

  [(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
  [(how to search by token)]: {{site.data.fhir.path}}search.html#token
 [(how to search by date)]: {{site.data.fhir.path}}search.html#date
 [(how to search by string)]: {{site.data.fhir.path}}search.html#string


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-location-summary.md

##### Complete Summary of the Mandatory Requirements

1. A `Location.name`




---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-medication-search.md

**No required search criteria for us-core-medication profile.**


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-medication-summary.md

##### Complete Summary of the Mandatory Requirements

1.  Either:
    -  One drug code in `Medication.code` which has an [extensible]({{site.data.fhir.path}}terminologies.html#extensible) binding to:
        -  [Medication Clinical Drug (RxNorm)] value set
   

  [Medication Clinical Drug (RxNorm)]: ValueSet-us-core-medication-codes.html


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-medicationrequest-search.md

-----------

`GET /MedicationRequest?patient={id}{&_include=MedicationStatement:medication}`

**Example:**

- GET [base]/MedicationRequest?patient=14676
- GET [base]/MedicationRequest?patient=14676&\_include=MedicationRequest:medication

*Support:* Mandatory for server and client to support search by patient.  Mandatory for client to support the `_include` parameter. Optional for server to support the `_include` parameter.

*Implementation Notes:*  This query searches for all MedicationRequest resources for a patient and returns a Bundle of all MedicationRequest resources for the specified patient. The server application represents the medication using either an inline code or a contained or external reference to the Medication resource.   [(how to search by reference)], and [(how to search by \_include)].

-----

  [(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
  [(how to search by token)]: {{site.data.fhir.path}}search.html#token
  [Composite Search Parameters]: {{site.data.fhir.path}}search.html#combining
  [(how to search by date)]: {{site.data.fhir.path}}search.html#date
  [(how to search by _include)]: {{site.data.fhir.path}}search.html#include


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-medicationrequest-summary.md

##### Complete Summary of the Mandatory Requirements

1.  One status in `MedicationRequest.status` which has a [required]({{site.data.fhir.path}}terminologies.html#required) binding to:
-   [MedicationRequestStatus] value set
1.  One medication via `MedicationRequest.medicationCodeableConcept` or `MedicationRequest.medicationReference`   
     -  `MedicationRequest.medicationCodeableConcept` has an [extensible]({{site.data.fhir.path}}terminologies.html#extensible) binding to [Medication Clinical Drug (RxNorm)]
1.  One patient reference in `MedicationRequest.patient`
1.  One date in `MedicationRequest.authoredOn`
1.  One practitioner in `MedicationRequest.requester`

##### Summary of the Must Support Requirements

1.  One or more *Sigs* in `MedicationRequest.dosageInstruction.text`

{% include link-list.md %}


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-medicationstatement-search.md


`GET /MedicationStatement?patient={id}{&_include=MedicationStatement:medication}`

**Example:**

- GET [base]/MedicationStatement?patient=14676
- GET [base]/MedicationStatement?patient=14676&\_include=MedicationStatement:medication

*Support:* Mandatory for server and client to support search by patient.  Mandatory for client to support the `_include` parameter. Optional for server to support the `_include` parameter.

*Implementation Notes:*  This query searches for all MedicationStatement resources for a patient and returns a Bundle of all MedicationStatement resources for the specified patient. The server application represents the medication using either an inline code or a contained or external reference to the Medication resource.   [(how to search by reference)], and [(how to search by \_include)].

-------

  [(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
  [(how to search by token)]: {{site.data.fhir.path}}search.html#token
  [Composite Search Parameters]: {{site.data.fhir.path}}search.html#combining
  [(how to search by date)]: {{site.data.fhir.path}}search.html#date
  [(how to search by _include)]: {{site.data.fhir.path}}search.html#include


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-medicationstatement-summary.md

##### Complete Summary of the Mandatory Requirements


1.  One status in `MedicationStatement.status` which has a [required]({{site.data.fhir.path}}terminologies.html#required) binding to:
-   [MedicationStatementStatus] value set.
1.  One medication via `MedicationStatement.medicationCodeableConcept` or `MedicationStatement.medicationReference`   
-  `MedicationStatement.medicationCodeableConcept` has an [extensible]({{site.data.fhir.path}}terminologies.html#extensible) binding to [Medication Clinical Drug (RxNorm)] value set.
1.  One date `MedicationStatement.dateAsserted`
1.  One patient reference in `MedicationStatement.subject`

##### Summary of the Must Support Requirements

1.  One date or period in `MedicationStatement.effectiveDateTime` or `MedicationStatement.effectivePeriod`
1.  One or more references in `MedicationStatement.derivedFrom` (likely references would be to the [US Core MedicationRequest Profile](StructureDefinition-us-core-medicationrequest.html))

  [Medication Clinical Drug (RxNorm)]: ValueSet-us-core-medication-codes.html
  [MedicationStatusStatus]: {{site.data.fhir.path}}valueset-medicationrequest-status.html

[MedicationStatementStatus]: {{site.data.fhir.path}}valueset-medication-statement-status.html
[MedicationStatementTaken]: {{site.data.fhir.path}}valueset-medication-statement-taken.html


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-observationresults-search.md


`GET [base]/Observation?patient=[id]&category=laboratory`

**Example:** GET [base]/Observation?patient=1134281&category=laboratory

*Support:* Mandatory to support search by patient and category code = 'laboratory'.

*Implementation Notes:* Search based on laboratory category code = "laboratory". This fetches a bundle of all Observation resources with laboratory categories for the specified patient [(how to search by reference)] and [(how to search by token)].


-----------

`GET [base]/Observation?patient=[id]&code=[LOINC{,LOINC2,LOINC3,...}]`


**Example:**

- Search for all blood glucose lab results (LOINC = 2339-0 *Glucose [Mass/volume] in Blood*) for a patient:
  - GET [base]/Observation?patient=1134281&code=2339-0


- Search for all blood glucose, urine glucose (LOINC = 25428-4 *Glucose [Presence] in Urine by Test strip*) and urine ketones (LOINC = 2339-0 *Ketones [Presence] in Urine by Test strip*) for a patient
  - GET [base]/Observation?patient=1134281&code=2339-0,25428-4,2514-8

*Support:* Mandatory support search by a laboratory LOINC code. SHOULD support search by multiple LOINC codes.

*Implementation Notes:* 1) Search based on laboratory LOINC code(s). This fetches a bundle of all Observation resources for a specific observation LOINC code(s) for the specified patient  [(how to search by reference)] and [(how to search by token)].   2) The Observation "code" parameter searches both in both Observation.code and Observation.component.code.


-----------

`GET [base]/Observation?patient=[id]&category=laboratory&date=[date]{&date=[date]}`

**Example:**

- Find all the laboratory results after 2013-03-14
  - GET [base]Observation?patient=555580&category=laboratory&date=ge2015-01-14

*Support:*  Mandatory support search by category code ="laboratory" and date or period

*Implementation Notes:*  Search based on laboratory category code and date. This fetches a bundle of all Observation resources with category 'laboratory' for the specified patient for a specified time period  [(how to search by reference)], [(how to search by token)] amd [(how to search by date)].



  [(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
  [(how to search by token)]: {{site.data.fhir.path}}search.html#token
  [Composite Search Parameters]: {{site.data.fhir.path}}search.html#combining
  [(how to search by date)]: {{site.data.fhir.path}}search.html#date


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-observationresults-summary.md

##### Complete Summary of the Mandatory Requirements

1.  One status in `Observation.status` which has a [required]({{site.data.fhir.path}}terminologies.html#required) binding to [ObservationStatus]
1.  A category in `Observation.category` which must have:
    -   a fixed `Observation.category.coding.system`=“<http://hl7.org/fhir/observation-category>”
    -   a fixed `Observation.category.coding.code`=“laboratory”
1.  One code in `Observation.code` which has an [extensible]({{site.data.fhir.path}}terminologies.html#extensible) binding to [LOINC Observation Codes]
    -   Other additional codes are allowed - e.g. system specific codes. All codes SHALL have a code system value
1.  One patient in `Observation.subject`
1.  Either one `Observation.value[x]` or one code in `Observation.DataAbsentReason` (unless `Observation.component` or `Observation.related` is present)
    -   Observation.valueQuantity has a [required]({{site.data.fhir.path}}terminologies.html#required) binding to [UCUM units]
    -   Observation.valueCodeableConcept has an [preferred]({{site.data.fhir.path}}terminologies.html#preferred) binding to [Observation Value Codes (SNOMED-CT)]
    -   Observation.DataAbsentReason has an [extensible]({{site.data.fhir.path}}terminologies.html#extensible) binding to [Observation Value Absent Reason]

Each Observation *SHOULD* have:

1.  A date and time in `effectiveDateTime` or `effectivePeriod`
1.  A reference range if applicable in `Observation.referenceRange`

  [Observation Value Codes (SNOMED-CT)]: ValueSet-us-core-observation-value-codes.html
  [Observation Value Absent Reason]: http://hl7.org/fhir/ValueSet/data-absent-reason
  [UCUM units]: {{site.data.fhir.path}}valueset-ucum-units.html
  [LOINC]: http://loinc.org
  [LOINC Observation Codes]: {{site.data.fhir.path}}valueset-observation-codes.html
  [ObservationStatus]: {{site.data.fhir.path}}valueset-observation-status.html


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-organization-search.md


`GET [base]/Organization?identifier=[system]|[code]`

**Example:** GET [base]/Organization?identifier=12354

*Support:* Mandatory

*Implementation Notes:*  Search based on Organization identifier  [(how to search by token)].

*Response Class:*

-   (Status 200): successful operation
-   (Status 400): invalid parameter
-   (Status 401/4xx): unauthorized request
-   (Status 403): insufficient scope

-----------

`GET [base]/Organization?name=[string]`

**Example:** GET [base]/Organization?name=Health

*Support:* Mandatory

*Implementation Notes:* Search based on text name [(how to search by string)]. May also support:
   - address-city
   - address-state
   - address-postalcode

*Response Class:*

-   (Status 200): successful operation
-   (Status 400): invalid parameter
-   (Status 401/4xx): unauthorized request
-   (Status 403): insufficient scope

-----

`GET [base]/Organization?address=[string]`

**Example:** GET [base]/Organization?address=Arbor

**Example:** GET [base]/Organization?address-postalcode=48104

*Support:* Mandatory

*Implementation Notes:* Search based on text address [(how to search by string)].

*Response Class:*

-   (Status 200): successful operation
-   (Status 400): invalid parameter
-   (Status 401/4xx): unauthorized request
-   (Status 403): insufficient scope


  [(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
  [(how to search by token)]: {{site.data.fhir.path}}search.html#token
 [(how to search by date)]: {{site.data.fhir.path}}search.html#date
 [(how to search by string)]: {{site.data.fhir.path}}search.html#string


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-organization-summary.md

##### Complete Summary of the Mandatory Requirements

1.  At least one identifier in `Organization.identifier`
    -   NPI preferred
    -   Tax id is allowed
    -   Local id is allowed in addition to another identifier supplied by a jurisdictional authority such as a practitioner's *Drug Enforcement Administration (DEA)* number.
1.  One boolean value in `Organization.active`
1.  At least one name in `Organization.name`
1.  At least one  contact in `Organization.telecom`
1.  At least one address in `Organization.address`
1.  At least one endpoint in `Organization.endpoint`


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-patient-search.md


#### Mandatory Search Parameters:

The following search parameters, search parameter combinations and search parameter [modifiers], [comparators] and [chained parameters] SHALL be supported.  the  modifiers, comparators and chained parameters that are listed as optional SHOULD be supported:


1. **SHALL** support fetching a Patient using the **`_id`** search parameter:

  `GET [base]/Patient[id]`

  Example: GET [base]/Patient/1032702

  *Implementation Notes:*  (how to search by the [logical id] of the resource)

1. **SHALL** support searching a Patient by an identifier such as a MPI using the **`identifier`** search parameter:

  `GET [base]/Patient?identifier={[system]}|[code]`

  Example: GET [base]/Patient?identifier=http://hospital.smarthealthit.org|1032702

  *Implementation Notes:*  (how to search by [token])

1. **SHALL** support searching using the **`name`** search parameter:

  `GET [base]/Patient?name=[string]`

  Example: See combination searches below

  *Implementation Notes:* Search based on at least name and another patient element  (how to search by [string])

1. **SHALL**  using the combination of the  **`birthdate and name`** search parameters:

  `GET [base]/Patient?birthdate=[date]&name=[string]`

  Example: 

  *Implementation Notes:*  (how to search by [string] and [date])

1. **SHALL**  using the combination of the  **`gender and name`** search parameters:

  `GET [base]/Patient?gender=[token]&name=[string]`

  Example: 

  *Implementation Notes:*  (how to search by [token] and [string])



#### Optional Search Parameters:

The following search parameters, search parameter combinations and search parameter [modifiers], [comparators] and [chained parameters] SHOULD be supported.

1. **SHOULD** support searching using the combination of the  **`birthdate and family`** search parameters:

  `GET [base]/Patient?birthdate=[date]&family=[string]`

  Example: 

  *Implementation Notes:* . (how to search by [string] and [date])

1. **SHOULD** support searching using the combination of the  **`family and gender`** search parameters:

  `GET [base]/Patient?family=[string]&gender=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [string])


{% include link-list.md %}

---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-patient-summary.md

##### Complete Summary of the Mandatory Requirements


1.  One or more medical record numbers in `Patient.identifier`
    -   each Patient.identifier must have:
        -   an `identifier.system`
        -   an `identifier.value` that is unique within the system.

2.  One or more names in `Patient.name`
    -   each Patient.name must have:
        -   a `name.family`
        -   a `name.given`

3.  One administrative gender in `Patient.gender`
    -   Patient.gender is bound to [AdministrativeGender] Value set

  [AdministrativeGender]: {{site.data.fhir.path}}valueset-administrative-gender.html


##### Summary of the Must Support Requirements

Additionally your system must Support:

1.  A date of birth in `Patient.birthDate`
2.  One or more languages spoken in `Patient.communication.language` which has a [extensible + max valueset](general-guidance.html#extensible--max-valueset-binding-for-codeableconcept-datatype)  binding to the [All Language codes with language and optionally a region modifier] valueset
3.  One or more race codes in  `Patient.extension`= [US Core Race Extension] which:
    - Must include at least one code from [OMB Race Categories]
    - May include additional race codes from [CDC Race Codes]

4.  One or more ethnicity codes in  `Patient.extension`=[US Core ethnicity Extension] which:
    - Must include one code from [OMB Ethnicity Categories]
    - May include additional race codes from [CDC Ethnicity Codes]

5.  One Birth Sex in `Patient.extension`= [US Core Patient Birth Sex] which has a [required]({{site.data.fhir.path}}terminologies.html#required) binding to [US Core Birth Sex] valueset


  [Patient.birthDate]: {{site.data.fhir.path}}us/daf/daf-patient-guidance.html#daf-patient.Patient.birthDate
  [Patient.communication.language]: {{site.data.fhir.path}}us/daf/daf-patient-guidance.html#daf-patient.Patient.communication.language
  [All Language codes with language and optionally a region modifier]: ValueSet-simple-language.html
  [All Languages]: {{site.data.fhir.path}}valueset-all-languages.html
  [US Core Patient Birth Sex]:StructureDefinition-us-core-birthsex.html
  [US Core Birth Sex]: ValueSet-birthsex.html
  [US Core Patient Race]: StructureDefinition-us-core-race.html
  [OMB Race Categories]: ValueSet-omb-race-category.html
  [US Core Race Extension]:StructureDefinition-us-core-race.html
  [CDC Race Codes]:ValueSet-detailed-race.html
 [CDC Ethnicity Codes]: ValueSet-detailed-ethnicity.html
 [US Core ethnicity Extension]:StructureDefinition-us-core-ethnicity.html
 [OMB Ethnicity Categories]: ValueSet-omb-ethnicity-category.html


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-pediatric-bmi-search.md


{% assign id = {{page.id}} %}
source file: source/pages/\_includes/{{id}}-search.md

~~~
This is the search markdown file that gets inserted into the sd.html Quick Start section for explanation of the search requirements.
~~~


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-pediatric-bmi-summary.md


### Summary of the Mandatory Requirements



1.  A  CodeableConcept  in `Observation.code`
with a [extensible](http://hl7.org/fhir/R4/terminologies.html#extensible)
 binding to [Vital Signs](http://hl7.org/fhir/ValueSet/observation-vitalsignresult)
    - which must have one or more Coding values  in `Observation.code.coding`
    - which must have a  Coding value  in `Observation.code.coding`
    - which must have a fixed `Observation.code.coding.system` = `http://loinc.org`
    - which must have a fixed `Observation.code.coding.code` = `59576-9`

1.  A  Quantity  in `Observation.valueQuantity`

    - which must have a  decimal value  in `Observation.valueQuantity.value`
    - which must have a  string value  in `Observation.valueQuantity.unit`
    - which must have a fixed `Observation.valueQuantity.system` = `http://unitsofmeasure.org`
    - which must have a fixed `Observation.valueQuantity.code` = `%`





---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-pediatric-weight-search.md


{% assign id = {{page.id}} %}
source file: source/pages/\_includes/{{id}}-search.md

~~~
This is the search markdown file that gets inserted into the sd.html Quick Start section for explanation of the search requirements.
~~~


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-pediatric-weight-summary.md


### Summary of the Mandatory Requirements



1.  A  CodeableConcept  in `Observation.code`
with a [extensible](http://hl7.org/fhir/R4/terminologies.html#extensible)
 binding to [Vital Signs](http://hl7.org/fhir/ValueSet/observation-vitalsignresult)
    - which should have one or more Coding values  in `Observation.code.coding`
    - which must have a  Coding value  in `Observation.code.coding`
    - which must have a fixed `Observation.code.coding.system` = `http://loinc.org`
    - which must have a fixed `Observation.code.coding.code` = `77606-2`

1.  A  Quantity  in `Observation.valueQuantity`

    - which must have a  decimal value  in `Observation.valueQuantity.value`
    - which must have a  string value  in `Observation.valueQuantity.unit`
    - which must have a fixed `Observation.valueQuantity.system` = `http://unitsofmeasure.org`
    - which must have a fixed `Observation.valueQuantity.code` = `%`





---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-practitioner-search.md




-----------

**`GET [base]/Practitioner?identifier=[system]|[code]`**

**Example:** GET [base]/Practitioner?identifier=http://hl7.org/fhir/sid/us-npi%7C1497860456

*Support:* Mandatory

*Implementation Notes:*  Search based on practitioner identifier  [(how to search by token)].

*Response Class:*

-   (Status 200): successful operation
-   (Status 400): invalid parameter
-   (Status 401/4xx): unauthorized request

-----------


**`GET [base]/Practitioner?family=[string]&given=[string]`**

**Example:** GET [base]/Practitioner?family=Smith&given=John

*Support:* Mandatory

*Implementation Notes:* Search based on text name [(how to search by string)].

*Response Class:*

-   (Status 200): successful operation
-   (Status 400): invalid parameter
-   (Status 401/4xx): unauthorized request

  [(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
  [(how to search by token)]: {{site.data.fhir.path}}search.html#token
 [(how to search by date)]: {{site.data.fhir.path}}search.html#date
 [(how to search by string)]: {{site.data.fhir.path}}search.html#string


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-practitioner-summary.md

##### Complete Summary of the Mandatory Requirements

1.  At least one (non-local) identifier in `Practitioner.identifier`
    -   NPI preferred
    -   Tax id is allowed
    -   Local id is allowed in addition to another identifier supplied by a jurisdictional authority such as a practitioner's *Drug Enforcement Administration (DEA)* number.
1.  At least one name in `Practitioner.name`




[NUCC - Classification]: ValueSet-us-core-provider-role.html
[NUCC - Specialization]: ValueSet-us-core-provider-specialty.html


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-practitionerrole-search.md



`GET [base]/PractitionerRole?practitioner.identifier=[system]|[code]`

**Example:** GET [base]/PractitionerRole?practitioner.identifier=http://hl7.org/fhir/sid/us-npi%7C14\|97860456

*Support:* Mandatory to support search by Practitioner identifier.

*Implementation Notes:* Search based on Practitioner identifier (NPI) [(how to search by token)].


-----------

`GET [base]/PractitionerRole?practitioner.family=[string]&given=[string]`

**Example:** GET [base]/PractitionerRole?practitioner.name=Henry

*Support:* Mandatory to support search by Practitioner name.

*Implementation Notes:* Search based on text name [(how to search by string)].

-----------

`GET [base]/PractitionerRole?specialty=[system]|[code]`

**Example:** GET [base]/PractitionerRole?specialty=http://hl7.org/fhir/practitioner-specialty%7Ccardio

*Support:* Mandatory to support search by Specialty.

*Implementation Notes:*  Search based on specialty [(how to search by token)].

-----------
**Searches to consider for future**

  `GET [base]/PractitionerRole?location.address-city=[city]`
  
  `GET [base]/PractitionerRole?location.address-city=[city]&specialty=[string]`
  
  `GET [base]/PractitionerRole?location.near=-72.519854,42.373222&near-distance=2m`


*Implementation Notes:*  Search based on location [(how to search by reference)].



  [(how to search by reference)]: http://hl7.org/fhir/search.html#reference
  [(how to search by token)]: http://hl7.org/fhir/search.html#token
 [(how to search by date)]: http://hl7.org/fhir/search.html#date
 [(how to search by string)]: http://hl7.org/fhir/search.html#string


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-practitionerrole-summary.md

##### Summary of the Mandatory Requirements

1.  One practitioner in `PractitionerRole.practitioner`
1.  One organization in `PractitionerRole.organization`
1.  One practitioner role code in `PractitionerRole.code` which has an [extensible]({{ site.data.fhir.path }}terminologies.html#extensible) binding to:
    -    [NUCC - Classification](http://www.fhir.org/guides/argonaut/pd/release1/ValueSet-provider-role.html) value set 
1.  One practitioner specialty code in `PractitionerRole.specialty` which has an [extensible]({{ site.data.fhir.path }}terminologies.html#extensible) binding to:
    -    [NUCC - Specialization](http://www.fhir.org/guides/argonaut/pd/release1/ValueSet-provider-specialty.html) value set 
1.  One reference to a location in `PractitionerRole.location`
1.  At least one contact using either 'PractitionerRole.telecom' OR or reference to an Endpoint Resource in  `PractitionerRole.endpoint`


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-procedure-search.md


**`GET /Procedure?patient=[id]`**

**Example:** GET [base]/Procedure?patient=1291938

*Support:* Mandatory to support search by patient.

*Implementation Notes:* Search for all Procedures for a patient. Fetches a bundle of all Procedure resources for the specified patient. [(how to search by reference)].


-----------
**`GET /Procedure?patient=[id]&date=[date]{&date=[date]}`**

**Example:** [GET [base]Procedure?example&date=ge2002](http://fhir2.healthintersections.com.au/open/Procedure?example&date=ge2002)

**Example:** [GET [base]Procedure?example&date=ge2010$date=le2015](http://fhir2.healthintersections.com.au/open/Procedure?example&date=ge2010&date=le2015)

*Support:* Mandatory to support search by patient and date or period.

*Implementation Notes:* Search based on date. Fetches a bundle of all Procedure resources for the specified patient for a specified time period [(how to search by reference)] and [(how to search by date)].



  [(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
  [(how to search by token)]: {{site.data.fhir.path}}search.html#token
   [(how to search by date)]: {{site.data.fhir.path}}search.html#date


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-procedure-summary.md

##### Complete Summary of the Mandatory Requirements

1.  One patient reference in `Procedure.subject`
1.  A status code in Procedure.status which has a [required]({{site.data.fhir.path}}terminologies.html#required) binding to:
-  [EventStatus] value set.
1.  One Identification of the procedure in `Procedure.code` which has:
    - a [extensible + max valueset](general-guidance.html#extensible--max-valueset-binding-for-codeableconcept-datatype) binding to the [US Core Procedure Codes] valueset (SNOMED CT or CPT-4/HCPC for procedures).
    - MAY have a translation to [ICD-10-PCS] or [Code on Dental Procedures and Nomenclature (CDT Codes)].s
1.  A date or a time period in `Procedure.performedDateTime` or `Procedure.performedPeriod`


  [US Core Procedure Codes]: ValueSet-us-core-procedure-code.html
  [ICD-10-PCS]: http://www.cms.gov/Medicare/Coding/ICD10
  [Code on Dental Procedures and Nomenclature (CDT Codes)]: http://www.ada.org/en/publications/cdt/
  [EventStatus]: {{site.data.fhir.path}}ValueSet/event-status


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-profile-link-search.md

**No Search criteria for us-core-associated-profile extension.**


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-profile-link-summary.md

##### Summary of the Mandatory Requirements

1. MAY use this extension to relate a profile to a resource search parameter


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-questionnaire-search.md


#### Mandatory Search Parameters:

The following search parameters, search parameter combinations and search parameter [modifiers], [comparators] and [chained parameters] SHALL be supported.  the  modifiers, comparators and chained parameters that are listed as optional SHOULD be supported:


1. **SHALL** support searching using the **`_id`** search parameter:

  `GET [base]/Questionnaire[id]`

  *Implementation Notes:* example for testing (how to search by the [logical id] of the resource)

1. **SHALL** support searching using the **`url`** search parameter:

  `GET [base]/Questionnaire?url=[uri]`

  *Implementation Notes:* example for testing (how to search by [uri])

1. **SHALL** support searching using the **`status`** search parameter:

  `GET [base]/Questionnaire?status={[system]}|[code]`

  *Implementation Notes:* example for testing (how to search by [token])

1. **SHALL** support searching using the **`title`** search parameter:
  - including optional support these modifiers: `foo, bar2`
  - including support for these comparators: `contains, foo, bar`
  - including support for these chained parameters: `contains, foo, bar`
    - and optional support these chained parameter: `foo, bar2`

  `GET [base]/Questionnaire?title{:foo|bar2|foo|bar2}={contains|foo|bar}[string]`

  *Implementation Notes:* example for testing (how to search by [string])

1. **SHALL** support searching using the **`publisher`** search parameter:
  - including support for these modifiers: `contains`

  `GET [base]/Questionnaire?publisher=[string]`

  *Implementation Notes:* example for testing (how to search by [string])

1. **SHALL**  using the combination of the  **`publisher and status`** search parameters:

  `GET [base]/Questionnaire?publisher=[string]&status=[token]`

  Example: 

  *Implementation Notes:*  (how to search by [token] and [string])



#### Optional Search Parameters:

The following search parameters, search parameter combinations and search parameter [modifiers], [comparators] and [chained parameters] SHOULD be supported.

1. **SHOULD** support searching using the **`version`** search parameter:

  `GET [base]/Questionnaire?version={[system]}|[code]`

  *Implementation Notes:* example for testing (how to search by [token])

1. **SHOULD** support searching using the **`context-type-value`** search parameter:

  `GET [base]/Questionnaire?context-type-value=`

  *Implementation Notes:* example for testing (how to search by [composite])

1. **SHOULD** support searching using the combination of the  **`context-type-value and publisher`** search parameters:

  `GET [base]/Questionnaire?context-type-value=[composite]&publisher=[string]`

  Example: 

  *Implementation Notes:* . (how to search by [composite] and [string])

1. **SHOULD** support searching using the combination of the  **`context-type-value and publisher and status`** search parameters:

  `GET [base]/Questionnaire?context-type-value=[composite]&publisher=[string]&status=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [composite] and [string])

1. **SHOULD** support searching using the combination of the  **`context-type-value and status`** search parameters:

  `GET [base]/Questionnaire?context-type-value=[composite]&status=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [composite])

1. **SHOULD** support searching using the combination of the  **`publisher and status and version`** search parameters:

  `GET [base]/Questionnaire?publisher=[string]&status=[token]&version=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [string])

1. **SHOULD** support searching using the combination of the  **`publisher and version`** search parameters:

  `GET [base]/Questionnaire?publisher=[string]&version=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [string])

1. **SHOULD** support searching using the combination of the  **`status and title and version`** search parameters:

  `GET [base]/Questionnaire?status=[token]&title{:foo|bar2|foo|bar2}={contains|foo|bar}[string]&version=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [string])

1. **SHOULD** support searching using the combination of the  **`status and version`** search parameters:

  `GET [base]/Questionnaire?status=[token]&version=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token])

1. **SHOULD** support searching using the combination of the  **`title and version`** search parameters:

  `GET [base]/Questionnaire?title{:foo|bar2|foo|bar2}={contains|foo|bar}[string]&version=[token]`

  Example: 

  *Implementation Notes:* . (how to search by [token] and [string])


{% include link-list.md %}

---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-race-search.md

**No Search criteria for uscore-race extension.**


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-race-summary.md

##### Summary of the Mandatory Requirements

1.   [Must Support](general-guidance.html#must-support) at least one code from [OMB Race Categories](ValueSet-omb-race-category.html)
1.  May include additional race codes from [CDC Race Codes](ValueSet-detailed-race.html)
1.   Must include text


---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-smokingstatus-search.md


`GET [base]/Observation?patient=[id]&code=72166-2`

*Support:* Mandatory to support search by patient and code = '72166-2'.

**Example:** GET [base]/Observation?patient=1032702&code=72166-2

*Implementation Notes:*  Search based on smoking status LOINC code. Fetches a bundle of all Observation resources with Observation.code of Tobacco Smoking Status for the specified patient [(how to search by reference)] and [(how to search by token)].

  [(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
  [(how to search by token)]: {{site.data.fhir.path}}search.html#token
  [Composite Search Parameters]: {{site.data.fhir.path}}search.html#combining
  [(how to search by date)]: {{site.data.fhir.path}}search.html#date
  [(how to search by string)]: {{site.data.fhir.path}}search.html#string



---

File: repos/HL7_SLASH_US-Core/input/Archives/includes_archive/us-core-smokingstatus-summary.md

##### Complete Summary of the Mandatory Requirements

1.  One status in `Observation.status`which has a [required]({{site.data.fhir.path}}terminologies.html#required) binding to:
    -   [ObservationStatus] value set.
1.  One code in `Observation.code`
    -   a fixed `Observation.code.coding.system`= http://loinc.org
    -   a fixed `Observation.code.coding.code`=72166-2
1.  One reference to a Patient in `Observation.subject`
1.  One DateTime ([instant]) in `Observation.issued`
1.  One `Observation.valueCodeableConcept`which has a [extensible + max valueset](general-guidance.html#extensible--max-valueset-binding-for-codeableconcept-datatype) binding to:
    -   [Smoking Status] value set.





  [ObservationStatus]: {{site.data.fhir.path}}valueset-observation-status.html
  [instant]: {{site.data.fhir.path}}datatypes.html#instant
  [Smoking Status]: ValueSet-us-core-observation-ccdasmokingstatus.html


---

File: repos/HL7_SLASH_US-Core/input/Archives/MedStatement_graveyard/us-core-medicationstatement-intro.md

Both the [MedicationRequest] and [MedicationStatement] resources can be used to record a patient's medication.  For more information about the context for their usages, refer to the medication domain [boundaries section].  This profile sets minimum expectations for the MedicationStatement resource to record, search and fetch medications associated with a patient. It identifies which core elements, extensions, vocabularies and value sets **SHALL** be present in the resource when using this profile.

**Example Usage Scenarios:**

The following are example usage scenarios for the
US Core-MedicationStatement profile:

-   Query active medications being taken by a patient
-   Record or update active medications being taken by a patient

### Mandatory and Must Support Data Elements


The following data-elements must always be present ([Mandatory] definition]) or must be supported if the data is present in the sending system ([Must Support] definition). They are presented below in a simple human-readable explanation.  Profile specific guidance and examples are provided as well.  The [Formal Profile Definition] below provides the  formal summary, definitions, and  terminology requirements.  

**Each MedicationStatement must have:**

1.  a status
1.  a medication
1.  an assertion date
1.  a patient

**Each MedicationStatement must support:**

1. the time medication was taken
2. whether the MedicationStatement was derived from another resource

**Profile specific implementation guidance:**

*  The MedicationStatement and MedicationRequest resources can represent a medication using either a code, or reference to a [Medication] resource.
    *  When referencing a Medication resource,  the resource may be [contained] or an external resource.
    *  The server application MAY choose any combination of these methods, but if an external reference to Medication is used, the server SHALL support the [`_include`] parameter for searching this element.
    *  The client application SHALL support all methods.  
    *  Additional guidance is provided below in the Search section and in the [CapabilityStatement] section.
*  Source EHR identifiers **SHOULD** be included to support deduplication across MedicationStatement and MedicationRequest resources. A patient medication may appear when a prescription is present as a MedicationRequest or MedicationStatement even though the EHR stores as a single instance. Exposing the EHR identifiers helps client applications identify duplicates.

### Examples

- [MedicationStatement-uscore-ms1](MedicationStatement-uscore-ms1.html) Inline medication code to represent the medication.
- [MedicationStatement-uscore-ms2](MedicationStatement-uscore-ms2.html) Reference to a [contained]({{site.data.fhir.path}}references.html#contained) Medication resource.
- [MedicationStatement-uscore-ms3](Bundle-uscore-ms3.html) A search [Bundle]({{site.data.fhir.path}}bundle.html) with a MedicationStatement and an included Medication resource in the Bundle.

{% include link-list.md %}


---

File: repos/HL7_SLASH_US-Core/input/Archives/MedStatement_graveyard/us-core-medicationstatement-search.md

- See the [General Guidance] section for additional rules and expectations when a server requires status parameters.



#### Mandatory Search Parameters:

The following search parameters, search parameter combinations and search parameter [modifiers], [comparators], [chains] and [composites] SHALL be supported.  the  modifiers, comparators, chains and composites that are listed as optional SHOULD be supported:

1. **SHALL** support searching for all medication statements for a patient. The server application represents the medication using either an inline code or a contained or external reference to the Medication resource. using the **[`patient`](SearchParameter-us-core-medicationstatement-patient.html)** search parameter:

    - including optional support for these `_include` parameters: `MedicationStatement:medication`

    `GET [base]/MedicationStatement?patient=[reference]`

    Example:
    
      1. GET [base]/MedicationStatement?patient=14676
      1. GET [base]/MedicationStatement?patient=14676&amp;_include=MedicationStatement:medication

    *Implementation Notes:* Fetches a bundle of all MedicationStatement resources for the specified patient. Mandatory for client to support the _include parameter. Optional for server to support the _include parameter. ([how to search by reference])


#### Optional Search Parameters:

The following search parameters, search parameter combinations and search parameter [modifiers], [comparators], [chains] and [composites] SHOULD be supported.

1. **SHOULD** support searching using the combination of the **[`patient`](SearchParameter-us-core-medicationstatement-patient.html)** and **[`status`](SearchParameter-us-core-medicationstatement-status.html)** search parameters:
    - including optional support for these `_include` parameters: `MedicationStatement:medication`

    `GET [base]/MedicationStatement?patient=[reference]&status={[system]}|[code]`

    Example:
    
      1. GET [base]/MedicationStatement?patient=1137192&amp;status=active
      1. GET [base]/MedicationStatement?patient=1137192&amp;status=active&amp;_include=MedicationStatement:medication

    *Implementation Notes:* Fetches a bundle of all MedicationStatement resources for the specified patient and status ([how to search by reference] and [how to search by token])

1. **SHOULD** support searching using the combination of the **[`patient`](SearchParameter-us-core-medicationstatement-patient.html)** and **[`effective`](SearchParameter-us-core-medicationstatement-effective.html)** search parameters:
    - including optional support for these `_include` parameters: `MedicationStatement:medication`
    - including support for these `effective` comparators: `gt,lt,ge,le`
    - including optional support for *AND* search on `effective` (e.g.`effective=[date]&effective=[date]]&...`)

    `GET [base]/MedicationStatement?patient=[reference]&effective={gt|lt|ge|le}[date]{&effective={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]/MedicationStatement?patient=1137192&amp;date=ge2019
      1. GET [base]/MedicationRequest?patient=1137192&amp;date=ge2019&amp;_include=MedicationStatement:medication

    *Implementation Notes:* Fetches a bundle of all MedicationStatement resources for the specified patient and date ([how to search by reference] and [how to search by date])

{% include link-list.md %}

---

File: repos/HL7_SLASH_US-Core/input/Archives/MedStatement_graveyard/us-core-medicationstatement-summary.md

**MedicationStatement**

#### Summary of the Mandatory Requirements
1.  A  code  in `MedicationStatement.status`
with a [required](http://hl7.org/fhir/R4/terminologies.html#required)
 binding to [Medication  status  codes](http://hl7.org/fhir/ValueSet/medication-statement-status)
1.  A  CodeableConcept  in `MedicationStatement.medication[x]`
with an [extensible](http://hl7.org/fhir/R4/terminologies.html#extensible)
 binding to [US Core Medication Codes (RxNorm)](ValueSet-us-core-medication-codes.html)
1.  A Patient Reference  in `MedicationStatement.subject`
1.  A  dateTime  in `MedicationStatement.dateAsserted`

#### Summary of the Must Support Requirements
1.  A  dateTime  in `MedicationStatement.effective[x]`
1. One or more Derivedfrom References  in `MedicationStatement.derivedFrom`

---

File: repos/HL7_SLASH_US-Core/input/Archives/README.md

This folder contains old US Core files used in previous versions


---

File: repos/HL7_SLASH_US-Core/input/Archives/uscdi_table.md


| USCDI v3 Summary of Data Classes and Data Elements| US Core Profile | FHIR Resource|
|---|---|---|
| **Allergies and Intolerances:** | ||
| Substance (Medication) | [US Core Allergies Profile]| AllergyIntolerance |
| Substance (Drug Class) | [US Core Allergies Profile]| AllergyIntolerance |
| Reaction | [US Core Allergies Profile]| AllergyIntolerance |
| **Assessment and Plan of Treatment**| [US Core CarePlan Profile]| CarePlan |
| **Care Team Members:** | [US Core CareTeam Profile] |CareTeam.participant |
| Name| [US Core Practitioner Profile], [US Core Patient Profile], [US Core RelatedPerson Profile Profile]| Practitioner.name, Patient.name, RelatedPerson.name|
| Identifier | [US Core Practitioner Profile], [US Core Patient Profile]| Practitioner.identifier, Patient.identifier |
| Location | [US Core PractitionerRole Profile], [US Core Practitioner Profile], [US Core Patient Profile], [US Core RelatedPerson Profile Profile]| PractitionerRole.address, Practitioner.address, Patient.address, RelatedPerson.address |
| Telecom | [US Core PractitionerRole Profile], [US Core Practitioner Profile], [US Core Patient Profile], [US Core RelatedPerson Profile Profile]| PractitionerRole.telecom, Practitioner.telecom, Patient.telecom, RelatedPerson.telecom |
| Role | [US Core CareTeam Profile]| CareTeam.participant.role|
| **Clinical Notes:** | ||
| Consultation Note | [US Core DocumentReference Profile] | DocumentReference|
| Discharge Summary Note| [US Core DocumentReference Profile] | DocumentReference|
| History & Physical| [US Core DocumentReference Profile] | DocumentReference |
| Imaging Narrative | [US Core DocumentReference Profile],[US Core DiagnosticReport Profile for Report and Note exchange] | DocumentReference,DiagnosticReport |
| Laboratory Report Narrative | [US Core DocumentReference Profile],[US Core DiagnosticReport Profile for Report and Note exchange] | DocumentReference,DiagnosticReport |
| Pathology Report Narrative| [US Core DocumentReference Profile],[US Core DiagnosticReport Profile for Report and Note exchange] | DocumentReference,DiagnosticReport |
| Procedure Note| [US Core DocumentReference Profile],[US Core DiagnosticReport Profile for Report and Note exchange] | DocumentReference,DiagnosticReport |
| Progress Note | [US Core DocumentReference Profile] | DocumentReference|
| **Clinical Tests:** | ||
| Clinical Test | [US Core Observation Clinical Test Result Profile], [US Core DiagnosticReport Profile for Report and Note exchange]| Observation, DiagnosticReport ||
| Clinical Test Result/Report | [US Core Observation Clinical Test Result Profile], [US Core DiagnosticReport Profile for Report and Note exchange]| Observation, DiagnosticReport|
| **Diagnostic Imaging:** | ||
| Diagnostic Imaging Test | [US Core Diagnostic Imaging Result Observation Profile], [US Core DiagnosticReport Profile for Report and Note exchange]| Observation, DiagnosticReport ||
| Diagnostic Imaging Result/Report | [US Core Diagnostic Imaging Result Observation Profile], [US Core DiagnosticReport Profile for Report and Note exchange]| Observation, DiagnosticReport|
| **Encounter:** | [US Core Encounter Profile] ||
| Type | [US Core Encounter Profile] |Encounter.type|
| Diagnosis | [US Core Condition Profile] |Condition.code|
| Time | [US Core Encounter Profile] |Encounter.period |
| Location |[US Core Encounter Profile]
|Encounter.location.location|
| Disposition |[US Core Encounter Profile]|Encounter.hospitalization.dischargeDisposition|
| **Goals:**| ||
| Patient Goals | [US Core Goal Profile]| Goal |
| **Health Concerns** | [US Core Condition Profile] | Condition|
| **Immunizations** | [US Core Immunization Profile]| Immunization |
| **Laboratory:** | ||
| Tests | [US Core Laboratory Result Observation Profile], [US Core DiagnosticReport Profile for Laboratory Results Reporting]| Observation, DiagnosticReport ||
| Values/Results| [US Core Laboratory Result Observation Profile], [US Core DiagnosticReport Profile for Laboratory Results Reporting]| Observation, DiagnosticReport|
| **Medications:**| ||
| Medications | [US Core Medication Profile], <!--[US Core Medication Statement Profile],--> [US Core Medication Request Profile]| Medication,<!-- MedicationStatement,--> MedicationRequest |
| Medication Allergies| [US Core Allergies Profile] | AllergyIntolerance |
|**Patient Demographics:**| ||
| First Name| [US Core Patient Profile] | Patient.name.given |
| Last Name | [US Core Patient Profile] | Patient.name.family|
| Previous Name | [US Core Patient Profile] | Patient.name |
| Middle Name (including middle initial)| [US Core Patient Profile] | Patient.name.given |
| Suffix| [US Core Patient Profile] | Patient.name.suffix|
| Birth Sex | [US Core Patient Profile] | US Core Birth Sex Extension|
| Date of Birth | [US Core Patient Profile] | Patient.birthDate|
| Race| [US Core Patient Profile] | US Core Race Extension |
| Ethnicity | [US Core Patient Profile] | US Core Ethnicity Extension|
| Gender Identity | [US Core Patient Profile] | Gender Identity Extension|
| Preferred Language| [US Core Patient Profile] | Patient.communication|
| Address | [US Core Patient Profile] | Patient.address|
| Previous Address | [US Core Patient Profile] | Patient.address|
| Email | [US Core Patient Profile] | Patient.telecom|
| Phone Number| [US Core Patient Profile] | Patient.telecom|
| **Problems:**| [US Core Condition Profile] | Condition|
| Date of Resolution| [US Core Condition Profile] | Condition.abatement[x]|
| Date of Diagnosis| [US Core Condition Profile] | Choice of assertedDate Extension, Condition.onset[x], or Condition.onsetDate|
| **Procedures** [US Core Procedure Profile] | Procedure|
| **Provenance:** | [US Core Provenance Profile] |Provenance|
| Author Time Stamp | [US Core Provenance Profile] | Provenance.recorded|
| Author Organization | [US Core Provenance Profile] | Provenance.agent|
| **Sexual Orientation**| [US Core Observation Sexual Orientation Profile] | Observation|
| **SDOH**|  | | 
| Assessment| [US Core Screening Response Observation Profile],[US Core Observation Social History Profile] | Observation| 
| Goals| [US Core Goal Profile] | Goal| 
| Interventions | [US Core ServiceRequest Profile],[US Core Procedure Profile] | ServiceRequest, Procedure| 
| Problems/Health Concerns | [US Core Condition Profile] | Condition| 
| **Smoking Status**| [US Core Smoking Status Observation Profile]| Observation|
| **Unique Device Identifier(s) for a Patient's Implantable Device(s)** | [US Core Implantable Device Profile]| Device |
| **Vital Signs:**| ||
| Diastolic blood pressure| [US Core Blood Pressure Profile] (Builds on Us Core Vital Signs Profile) | Observation|
| Systolic blood pressure | [US Core Blood Pressure Profile] (Builds on Us Core Vital Signs Profile) | Observation|
| Body height | [US Core Body Height Profile] (Builds on Us Core Vital Signs Profile) | Observation|
| Body weight | [US Core Body Weight Profile] (Builds on Us Core Vital Signs Profile) | Observation|
| Heart rate| [US Core Heart Rate Profile] (Builds on Us Core Vital Signs Profile)| Observation|
| Respiratory rate| [US Core Respiratory Rate Profile] (Builds on Us Core Vital Signs Profile)| Observation|
| Body temperature| [US Core Body Temperature Profile] (Builds on Us Core Vital Signs Profile)| Observation|
| Pulse oximetry| [US Core Pulse Oximetry Profile] (Builds on Us Core Vital Signs Profile) | Observation|
| Inhaled oxygen concentration| [US Core Pulse Oximetry Profile] (Builds on Us Core Vital Signs Profile)| Observation|
| BMI Percentile (2-20 years old) | [US Core Pediatric BMI for Age Observation Profile] (Builds on Us Core Vital Signs Profile) | Observation|
| Weight-for-length Percentile (Birth - 36 months)| [US Core Pediatric Weight for Height Observation Profile] (Builds on Us Core Vital Signs Profile)| Observation|
| Occipital-frontal Head Circumference Percentile (Birth - 36 months)| [US Core Pediatric Head Occipital Frontal Circumference Observation Profile] (Builds on Us Core Vital Signs Profile)| Observation|


---

File: repos/HL7_SLASH_US-Core/input/data/README.md

This folder contains project specific data file for use as site variables.  see https://jekyllrb.com/docs/datafiles/


---

File: repos/HL7_SLASH_US-Core/input/examples-yaml/Drafts/draft-pages/us-core-vitalsigns-intro.md

﻿This Implementation Guide uses the [Vital Signs Profile] formal definitions from the FHIR [Observation] resource. However, this Implementation Guide provides the following additional guidance which sets the minimum expectations for recording, searching and fetching vital signs associated with a patient. Together they identify which elements, extensions, vocabularies and value sets **SHALL** be present in the resource when using this profile.

**Example Usage Scenarios:**

The following are example usage scenarios for the Vital Signs
Profile:

-   Query for vital signs of a particular patient
-   Record vital signs of a particular patient

###### Mandatory Data Elements and Terminology


The following data-elements must always be present ([Mandatory] definition]). These are presented below in a simple human-readable explanation.  Profile specific guidance and examples are provided as well.  The [**Formal Profile Definition**](#profile) are provided as links in the table below to view the formal summary, definitions, and  terminology requirements.  

**Each Observation must have:**

1.  a status
1.  a category code of 'vital-signs'
1.  a LOINC code which tells you what is being measured and is taken from the “LOINC Code” column in the table below.
    -   note: If a more specific code is recorded, the generic code and the translated coded must be sent - e.g. method specific LOINC Codes, SNOMED CT concepts, system specific codes
1.  a patient
1.  a time indicating when the measurement was taken
1.  a numeric result value and standard UCUM unit which is taken from the “UCUM Unit Code” column in the table below.
    -   note: if there is no numeric result then you have to supply a reason

**Profile specific implementation guidance:**

* This table represents a minimum set of vital sign concepts, the required LOINC codes, and UCUM units of measure codes used for representing vitals signs observations (See the [General Guidance Section] for further guidance on using UCUM). These are [extensible] bindings and require that when a system support of any of these vital signs concepts, they must represent them using these codes. In addition, if you have a blood pressure observation, you must have both a systolic and a diastolic component, though one or both may have dataAbsentReason instead of a value.

* This profile may be referenced by different capability statements, such as the [Conformance requirements for the US Core Server].

* Alternate codes may be provided in addition to the standard LOINC and UCUM codes defined here.The examples illustrate using other codes as translations.

* Other profiles may make rules about which vital sign must be present or must be present as part of a panel.


##### Examples

 - [observation-vitals-panel](Observation-vitals-panel.html)
 - [observation-weight](Observation-weight.html)
 - [observation-temperature](Observation-temperature.html)
 - [observation-heart-rate](Observation-heart-rate.html)
 - [observation-respiratory-rate](Observation-respiratory-rate.html)
 - [observation-oxygen-saturation](Observation-oxygen-saturation.html)
 - [observation-length](Observation-length.html)
 - [observation-height](Observation-height.html)
 - [observation-head-circumference](Observation-head-circumference.html)
 - [observation-bmi](Observation-bmi.html)
 - [observation-blood-pressure](Observation-blood-pressure.html)
 - [observation-bp-data-absent](Observation-bp-data-absent.html)


[Vital Signs Profile]: {{site.data.fhir.path}}observation-profiles.html
[Observation]: {{site.data.fhir.path}}observation.html
[extensible]: {{site.data.fhir.path}}terminologies.html#extensible
[Conformance requirements for the US Core Server]: CapabilityStatement-server.html
[General Guidance Section]: guidance.html
[Vital Signs]: {{site.data.fhir.path}}vitalsigns.html
[Vital Signs Panel]: {{site.data.fhir.path}}vitalspanel.html
[Respiratory Rate]: {{site.data.fhir.path}}resprate.html
[Heart rate]: {{site.data.fhir.path}}heartrate.html
[Oxygen saturation]: {{site.data.fhir.path}}oxygensat.html
[Body temperature]: {{site.data.fhir.path}}bodytemp.html
[Body height]: {{site.data.fhir.path}}bodyheight.html
[Body length]: {{site.data.fhir.path}}bodylength.html
[Head circumference]: {{site.data.fhir.path}}headcircum.html
[Body weight]: {{site.data.fhir.path}}bodyweight.html
[Body mass index]: {{site.data.fhir.path}}bmi.html
[Blood pressure systolic and diastolic]: {{site.data.fhir.path}}bp.html
[Systolic blood pressure]: {{site.data.fhir.path}}bp.html
[Diastolic blood pressure]: {{site.data.fhir.path}}bp.html


---

File: repos/HL7_SLASH_US-Core/input/examples-yaml/Drafts/draft-pages/us-core-vitalsigns-search.md


`GET [base]/Observation?patient=[id]&category=vital-signs`

**Example:** GET [base]/Observation?patient=1186747&category=vital-signs

*Support:*  Mandatory to support search by category code.

*Implementation Notes:*   Search based on vital sign category code. This search fetches a bundle of all Observation resources with category 'vital-signs' for the specified patient  [(how to search by reference)] and [(how to search by token)].  The table above is the minimum set, additional vital signs are allowed.


-----------

`GET [base]/Observation?patient=[id]&code=[vital sign LOINC{,LOINC2,LOINC3,...}]`

**Example:**

- Search for all heart rate observations for a patient:
  - GET [base]/Observation?patient=1186747&code=8867-4


- Search for all heart rate, respiratory rate and blood pressure observations for a patient
  - GET [base]/Observation?patient=1186747&code=8867-4,9279-1,55284-4

*Support:*  Mandatory to support search by vital sign LOINC(s) listed above.

*Implementation Notes:*   1)Search based on vital sign LOINC code(s). This fetches a bundle of all Observation resources for specific vital sign(s) listed in the table above for the specified patient [(how to search by reference)] and [how to search by token)]. 2) The Observation "code" parameter searches both in both Observation.code and Observation.component.code. For example when fetching blood pressures the same resources will be returned whether the search is based on 55284-4(Systolic and Diastolic BP), or the component codes 8480-6(Systolic BP) or 8462-4 (Diastolic BP).


-----------

`GET [base]/Observation?patient=[id]&category=vital-signs&date=[date]{&date=[date]}`

**Example:**

- Find all the blood pressures after 2013-03-14
  - GET [base]Observation?patient=555580&code=55284-4&date=ge2015-01-14

*Support:*  Mandatory to support search by category code and date

*Implementation Notes:*  Search based on vital sign category code and date. This fetches a bundle of all Observation resources with category 'vital-signs' for the specified patient for a specified time period  [(how to search by reference)] and [(how to search by token)].


--------


  [(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
  [(how to search by token)]: {{site.data.fhir.path}}search.html#token
  [Composite Search Parameters]: {{site.data.fhir.path}}search.html#combining
  [(how to search by date)]: {{site.data.fhir.path}}search.html#date
  [(how to search by string)]: {{site.data.fhir.path}}search.html#string


---

File: repos/HL7_SLASH_US-Core/input/examples-yaml/Drafts/draft-pages/us-core-vitalsigns-summary.md

#### Complete Summary of the Mandatory Requirements

1.  One status in `Observation.status`which has an [extensible]({{site.data.fhir.path}}terminologies.html#extensible) binding to:
    -    [ObservationStatus] value set.
1.  A category in `Observation.category` which must have:
    -   a fixed `Observation.category.coding.system`="http://hl7.org/fhir/observation-category"
    -   a fixed `Observation.category.coding.code`=“vital-signs”
1.  A code in `Observation.code`
    -   a fixed `Observation.code.coding.system`=“<http://loinc.org>”
    -   a LOINC code in `Observation.code.coding.code` which has an [extensible]({{site.data.fhir.path}}terminologies.html#extensible) binding to:
         -   [Vital Signs] value set.                
1.  One patient in `Observation.subject`
1.  A date and time in `effectiveDateTime` or `effectivePeriod`
1.  Either one `Observation.valueQuantity` or, if there is no value, one code in `Observation.DataAbsentReason`
    -   Each Observation.valueQuantity must have:
        -   One numeric value in `Observation.valueQuantity.value`
        -   a fixed `Observation.valueQuantity.system`="<http://unitsofmeasure>"
        -   a UCUM unit code in `Observation.valueQuantity.code` which has an [extensible]({{site.data.fhir.path}}terminologies.html#extensible) binding to:
             -   [Vital Signs Units] value set.
    -   Observation.DataAbsentReason is bound to [Observation Value
        Absent ReaÂson] value set.
1.  When using component observations (Note: See
    the comments regarding blood pressure in the table above)
    1. one or more `Observation.component.code` each of which must have:
      -   a fixed
          `Observation.component.code.coding.system`=“<http://loinc.org>”
           -   a LOINC code in `Observation.code.coding.code` which has an [extensible]({{site.data.fhir.path}}terminologies.html#extensible) binding to:
               -   [Vital Signs] value set.
    1.  Either one `Observation.component.valueQuantity` or, if there is
          no value, one code in `Observation.component.DataAbsentReason`
          -   Each Observation.component.valueQuantity must have:
              -   One numeric value in
                  `Observation.component.valueQuantity.value`
              -   a fixed `Observation.component.valueQuantity.system`=“<http://unitsofmeasure.org>”
              -   a UCUM unit code in
                  `Observation.component.valueQuantity.code` which has an [extensible]({{site.data.fhir.path}}terminologies.html#extensible) binding to:
                   -   [Vital Signs Units] value set.
          -   Observation.component.DataAbsentReason is bound to [Observation
              Value Absent Reason] value set.
1.  When using related observations, one or more reference
    to Observations in `Observation.related.target`
    -   a fixed `Observation.related.type`=“has-member”

 [Vital Signs]: ValueSet-us-core-observation-ccdavitalsignresult.html
  [Vital Signs Units]: {{site.data.fhir.path}}valueset-ucum-vitals-common.html
  [extensible bindings]: Implementation_Guide#Extensible_binding_for_CodeableConcept_Datatype "wikilink"
  [using multiple codes]: Implementation_Guide#Using_multiple_codes_with_CodeableConcept_Datatype "wikilink"
  [ObservationStatus]: {{site.data.fhir.path}}valueset-observation-status.html
 [Observation Value Absent Reason]: http://hl7.org/fhir/ValueSet/data-absent-reason


---

File: repos/HL7_SLASH_US-Core/input/examples-yaml/Drafts/README.md

This folder contains draft artifacts from previous and current versions


---

File: repos/HL7_SLASH_US-Core/input/examples-yaml/README.md

This folder contains project specific source example resource in YAML format.  These are converted to JSON format and add/overwrite to the resource in the resources folder by a custom bash script:


~~~bash
inpath=input
if ls $inpath/resources-yaml/*.yml; then
echo "========================================================================"
echo "convert all yml files in resources-yaml directory to json files"
echo "Python 3.7 and PyYAML, json and sys modules are required"
for yaml_file in $inpath/resources-yaml/*.yml
do
echo $yaml_file
json_file=$inpath/resources/$(basename $yaml_file)
json_file=${json_file%.*}.json
echo $json_file
python3.7 -c 'import sys, yaml, json; json.dump(yaml.full_load(sys.stdin), sys.stdout, indent=4)' < $yaml_file > $json_file
done
fi
~~~


---

File: repos/HL7_SLASH_US-Core/input/images/README.md

This folder contains binary files such as images (including source files such as powerpoint slided), scv, pdf etc.  which are used as static files in Jekyll:  see https://jekyllrb.com/docs/static-files/


---

File: repos/HL7_SLASH_US-Core/input/images-source/USCore USCDI Table HowTo fix links.md

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

File: repos/HL7_SLASH_US-Core/input/includes/additional-codings.md

- Additional codes that translate or map to the Observation code or category codes are allowed.  For example:
   -  providing both a local code and a LOINC code
   -  providing a more specific code{% if include.example1 %}{{ include.example1 }}{% endif %}, a [SNOMED CT] concept, or a system-specific code

---

File: repos/HL7_SLASH_US-Core/input/includes/additional-requirements-intro.md

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

File: repos/HL7_SLASH_US-Core/input/includes/additional-uscdi-requirements.md


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

File: repos/HL7_SLASH_US-Core/input/includes/assessment_examples.md

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

File: repos/HL7_SLASH_US-Core/input/includes/boilerplate-clia-warning.md

*This example may lack required data for laboratory results transmitted by a laboratory certified to perform testing on human specimens under the [Clinical Laboratory Improvement Amendments (CLIA)](http://www.cdc.gov/clia/).


---

File: repos/HL7_SLASH_US-Core/input/includes/ccds_table.md


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

File: repos/HL7_SLASH_US-Core/input/includes/conditional-goals-guidance.md

- The context or precondition of a patient's preference SHOULD be supplied in:
  - the `Observation.valueString` (for example, "If this [health scenario] were to occur, ...”) or
  - an extension such as the PACIO Advance Directive Interoperability Implementation Guide's [Enclosed Precondition Extension].

---

File: repos/HL7_SLASH_US-Core/input/includes/conform-patient.md


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

File: repos/HL7_SLASH_US-Core/input/includes/DAR-exception.md

- \*An Observation without a value, **SHALL** include a reason why the data is absent *unless* there are 1) component observations, or 2) reporting panel observations using `Observation.hasMember`.
  - For further guidance, see the [Observation Grouping] section in FHIR Specification.
  - Systems that never provide an observation without a value are not required to support `Observation.dataAbsentReason`.
- \*An `Observation.component` without a value, **SHALL** include a reason why the data is absent.
  - Systems that never provide a component observation without a component value are not required to support `Observation.component.dataAbsentReason`.


---

File: repos/HL7_SLASH_US-Core/input/includes/diagnosticreport-clinical-note-post.md


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

File: repos/HL7_SLASH_US-Core/input/includes/diff-display-note.md


<!-- {% raw %}
parameter:
parent_profile (required) Title of US Core Profile from which this profile inherits
example usage:
 {% include diff-display-note.md parent_profile='US Core Laboratory Result Observation Profile' %} {% endraw %} -->
Note that the "Differential Table" displays elements unique to this profile and the "Key Elements Table” displays a combined view of elements for this profile and the {{include.parent_profile |default: "parent profiles"}}.

---

File: repos/HL7_SLASH_US-Core/input/includes/docref-example1.md


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

File: repos/HL7_SLASH_US-Core/input/includes/docref-example2.md


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

File: repos/HL7_SLASH_US-Core/input/includes/docref.md


source: docref.md file

    This is the  markdown file that gets inserted into the op.html template.


---

File: repos/HL7_SLASH_US-Core/input/includes/documentreference-clinical-note-post.md


An example to demonstrate writing a note to the Server.

**Clinical Note**

~~~

{% include_relative DocumentReference-discharge-summary.json %}

~~~~

**Note Content**

The content is Base64 encoded and states:
 "No activity restriction, regular diet, follow up in two to three weeks with primary care provider."


---

File: repos/HL7_SLASH_US-Core/input/includes/dstu2-r4-table2.md


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

File: repos/HL7_SLASH_US-Core/input/includes/encounter-location.md

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

File: repos/HL7_SLASH_US-Core/input/includes/example_link.md

{%- for resource in site.data.ig.definition.resource -%}
{%- if resource.reference.reference == include.example -%}
[{{resource.name}}]({{ include.example | replace: "/", "-"}}.html)
{%- break -%}
{%- endif -%}
{%- endfor -%}


---

File: repos/HL7_SLASH_US-Core/input/includes/example-list-generator.md

{% assign my_types = "" %}
{% for p in site.data.ig.definition.resource %}
  {%- if p.exampleBoolean or p.exampleCanonical -%}

    {% assign my_types =  my_types | append: "," | append: p.reference.reference | split: '/' | first %}

  {% endif %}
{% endfor %}

{% assign my_array = my_types | split: "," %}
{% assign my_array = my_array | sort | uniq %}

{% for i in my_array offset:1 %}
### {{i}}
<ul>
  {%- for p in site.data.ig.definition.resource -%}
      {%- if p.exampleBoolean or p.exampleCanonical -%}
        {%- assign type =  p.reference.reference | split: '/' | first -%}
            {%- if type == i %}

              {%- assign new = false -%}
              {%- for new_stuff in site.data.new_stuff -%}
                 {%- if p.name == new_stuff -%}
                   {%- assign new = true -%}
                   {%- break -%}
                 {%- endif -%}
              {%- endfor -%}

              {%- if new -%}
                <li><a href="{{p.reference.reference | replace: '/','-'}}.html"><span class="bg-success" markdown="1">{{p.name}}</span><!-- new-content --></a></li>
              {% else %}
                <li><a href="{{p.reference.reference | replace: '/','-'}}.html">{{p.name}}</a></li>
              {% endif %}

          {%- endif -%}
       {%- endif -%}
   {%- endfor %}
</ul>
{% endfor %}


---

File: repos/HL7_SLASH_US-Core/input/includes/ext-list-generator.md

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

File: repos/HL7_SLASH_US-Core/input/includes/get-all-active-meds-searchbundle.md

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

File: repos/HL7_SLASH_US-Core/input/includes/get-all-active-meds.md


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

File: repos/HL7_SLASH_US-Core/input/includes/get-all-allergy-provenance-future-health.md


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

File: repos/HL7_SLASH_US-Core/input/includes/get-all-allergy-provenance-good-health.md


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

File: repos/HL7_SLASH_US-Core/input/includes/get-all-allergy-provenance-sunshine-health.md


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

File: repos/HL7_SLASH_US-Core/input/includes/get-all-ecounter-meds-searchbundle.md

{
  "resourceType": "Bundle",
  "id": "bb33a47a-cab8-4b4b-ba2e-3b663ffb98",
  "meta": {
    "lastUpdated": "2022-04-12T01:55:49.093Z"
  },
  "type": "searchset",
  "total": 6,
  "link": [
    {
      "relation": "self",
      "url": "http://test.fhir.org/r4/MedicationRequest?_format=application/fhir+json&search-id=3f726452-7d24-4740-86f8-9c4a8f993a&&patient=test2&intent=order,plan&encounter=inpatient-example&_sort=_id"
    }
  ],
  "entry": [
    {
      "fullUrl": "http://test.fhir.org/r4/MedicationRequest/0e2dda71-7122-4840-9252-17c84a0d50",
      "resource": {
        "resourceType": "MedicationRequest",
        "id": "0e2dda71-7122-4840-9252-17c84a0d50",
        "meta": {
          "versionId": "4",
          "lastUpdated": "2022-04-12T01:54:45.483Z",
          "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest"
          ],
          "tag": [
            {
              "code": "US_Core_5"
            },
            {
              "code": "Inpatient"
            }
          ]
        },
        "contained": [
          {
            "resourceType": "Medication",
            "id": "med-1",
            "meta": {
              "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medication"
              ]
            },
            "code": {
              "text": "Azithromycin 500mg in 250 ml Normal Saline"
            },
            "ingredient": [
              {
                "itemCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                      "code": "1668240",
                      "display": "Zithromax 500 MG Injection"
                    }
                  ],
                  "text": "Zithromax (azithromycin) 500 MG Injection"
                },
                "isActive": true
              },
              {
                "itemCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                      "code": "313002",
                      "display": "Sodium Chloride 0.9% injectable solution"
                    }
                  ],
                  "text": "Normal Saline"
                },
                "isActive": true
              }
            ]
          }
        ],
        "status": "active",
        "intent": "order",
        "category": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                "code": "inpatient",
                "display": "Inpatient"
              }
            ],
            "text": "Inpatient"
          }
        ],
        "reportedBoolean": false,
        "medicationReference": {
          "reference": "#med-1"
        },
        "subject": {
          "reference": "Patient/test2",
          "display": "Brian Z"
        },
        "encounter": {
          "reference": "Encounter/inpatient-example",
          "display": "Inpatient encounter"
        },
        "authoredOn": "2016-09-12",
        "requester": {
          "reference": "Practitioner/example-drb",
          "display": "Dr B"
        },
        "reasonCode": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "233604007",
                "display": "Pneumonia (disorder)"
              }
            ]
          }
        ],
        "dosageInstruction": [
          {
            "sequence": 1,
            "text": "Azithromycin 500mg in 250 ml Normal Saline intravenously over 1hour every 24 hours",
            "timing": {
              "repeat": {
                "duration": 1,
                "durationUnit": "h",
                "frequency": 1,
                "period": 24,
                "periodUnit": "h"
              }
            },
            "asNeededBoolean": false,
            "route": {
              "coding": [
                {
                  "system": "http://ncimeta.nci.nih.gov",
                  "code": "C38276",
                  "display": "INTRAVENOUS"
                }
              ]
            },
            "method": {
              "text": "1 hr infusion"
            }
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "http://test.fhir.org/r4/MedicationRequest/1e51d801-1cdf-4d61-9dc0-8937945a35",
      "resource": {
        "resourceType": "MedicationRequest",
        "id": "1e51d801-1cdf-4d61-9dc0-8937945a35",
        "meta": {
          "versionId": "4",
          "lastUpdated": "2022-04-12T01:54:45.608Z",
          "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest"
          ],
          "tag": [
            {
              "code": "US_Core_5"
            },
            {
              "code": "Inpatient"
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
                "code": "inpatient",
                "display": "Inpatient"
              }
            ],
            "text": "Inpatient"
          }
        ],
        "reportedBoolean": false,
        "medicationCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "212446",
              "display": "Zithromax 250 MG Oral Tablet"
            }
          ],
          "text": "Zithromax 500 MG Oral Tablet"
        },
        "subject": {
          "reference": "Patient/test2",
          "display": "Brian Z"
        },
        "encounter": {
          "reference": "Encounter/inpatient-example",
          "display": "Inpatient encounter"
        },
        "authoredOn": "2016-09-12",
        "requester": {
          "reference": "Practitioner/example-drb",
          "display": "Dr B"
        },
        "reasonCode": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "233604007",
                "display": "Pneumonia (disorder)"
              }
            ]
          }
        ],
        "dosageInstruction": [
          {
            "sequence": 1,
            "text": "Zithromax (azithromycin) 250mg by mouth every 12 hours for 10 days",
            "additionalInstruction": [
              {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "311504000",
                    "display": "With or after food"
                  }
                ]
              }
            ],
            "timing": {
              "repeat": {
                "frequency": 1,
                "period": 12,
                "periodUnit": "h"
              }
            },
            "route": {
              "coding": [
                {
                  "system": "http://ncimeta.nci.nih.gov",
                  "code": "C38288",
                  "display": "ORALLY",
                  "userSelected": false
                }
              ]
            }
          }
        ],
        "dispenseRequest": {
          "validityPeriod": {
            "start": "2016-09-12",
            "end": "2016-10-12"
          },
          "quantity": {
            "value": 20,
            "unit": "TAB",
            "system": "http://hl7.org/fhir/v3/orderableDrugForm",
            "code": "TAB"
          },
          "expectedSupplyDuration": {
            "value": 10,
            "unit": "days",
            "system": "http://unitsofmeasure.org",
            "code": "d"
          }
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "http://test.fhir.org/r4/MedicationRequest/4362b3f0-37bc-4463-93b3-c6b8228d91",
      "resource": {
        "resourceType": "MedicationRequest",
        "id": "4362b3f0-37bc-4463-93b3-c6b8228d91",
        "meta": {
          "versionId": "4",
          "lastUpdated": "2022-04-12T01:54:45.671Z",
          "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest"
          ],
          "tag": [
            {
              "code": "US_Core_5"
            },
            {
              "code": "Inpatient"
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
                "code": "inpatient",
                "display": "Inpatient"
              }
            ],
            "text": "Inpatient"
          }
        ],
        "reportedBoolean": false,
        "medicationCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "308191",
              "display": "Amoxicillin 500 MG Oral Capsule"
            }
          ],
          "text": "Amoxicillin 500 MG"
        },
        "subject": {
          "reference": "Patient/test2",
          "display": "Brian Z"
        },
        "encounter": {
          "reference": "Encounter/inpatient-example",
          "display": "Inpatient encounter"
        },
        "authoredOn": "2016-09-12",
        "requester": {
          "reference": "Practitioner/example-drb",
          "display": "Dr B"
        },
        "reasonCode": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "233604007",
                "display": "Pneumonia (disorder)"
              }
            ]
          }
        ],
        "dosageInstruction": [
          {
            "sequence": 1,
            "text": "Amoxicillin 500mg by mouth every 6 hours for 10 days",
            "additionalInstruction": [
              {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "311504000",
                    "display": "With or after food"
                  }
                ]
              }
            ],
            "timing": {
              "repeat": {
                "frequency": 1,
                "period": 6,
                "periodUnit": "h"
              }
            },
            "route": {
              "coding": [
                {
                  "system": "http://ncimeta.nci.nih.gov",
                  "code": "C38288",
                  "display": "ORALLY",
                  "userSelected": false
                }
              ]
            }
          }
        ],
        "dispenseRequest": {
          "validityPeriod": {
            "start": "2016-09-12",
            "end": "2016-10-12"
          },
          "numberOfRepeatsAllowed": 0,
          "quantity": {
            "value": 40,
            "unit": "Oral Capsule",
            "system": "http://hl7.org/fhir/v3/orderableDrugForm",
            "code": "ORCAP"
          },
          "expectedSupplyDuration": {
            "value": 10,
            "unit": "days",
            "system": "http://unitsofmeasure.org",
            "code": "d"
          }
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "http://test.fhir.org/r4/MedicationRequest/5996de24-bb15-44d5-ad5e-e942090123",
      "resource": {
        "resourceType": "MedicationRequest",
        "id": "5996de24-bb15-44d5-ad5e-e942090123",
        "meta": {
          "versionId": "4",
          "lastUpdated": "2022-04-12T01:54:45.765Z",
          "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest"
          ],
          "tag": [
            {
              "code": "US_Core_5"
            },
            {
              "code": "Inpatient"
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
                "code": "inpatient",
                "display": "Inpatient"
              }
            ],
            "text": "Inpatient"
          }
        ],
        "reportedBoolean": false,
        "medicationCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "860601",
              "display": "Calcium Chloride 0.0014 MEQ/ML / Potassium Chloride 0.024 MEQ/ML / Sodium Chloride 0.103 MEQ/ML / Sodium Lactate 0.028 MEQ/ML Injectable Solution"
            }
          ],
          "text": "LRS"
        },
        "subject": {
          "reference": "Patient/test2",
          "display": "Brian Z"
        },
        "encounter": {
          "reference": "Encounter/inpatient-example",
          "display": "Inpatient encounter"
        },
        "authoredOn": "2016-09-12",
        "requester": {
          "reference": "Practitioner/example-drb",
          "display": "Dr B"
        },
        "reasonCode": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "233604007",
                "display": "Pneumonia (disorder)"
              }
            ]
          }
        ],
        "dosageInstruction": [
          {
            "sequence": 1,
            "text": "LRS IV at 250 ml/hr",
            "asNeededBoolean": false,
            "route": {
              "coding": [
                {
                  "system": "http://ncimeta.nci.nih.gov",
                  "code": "C38276",
                  "display": "INTRAVENOUS",
                  "userSelected": false
                }
              ]
            },
            "method": {
              "text": "Constant Rate Infusion"
            }
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "http://test.fhir.org/r4/MedicationRequest/bb95536c-eca6-4f31-af6e-821c3bc9d3",
      "resource": {
        "resourceType": "MedicationRequest",
        "id": "bb95536c-eca6-4f31-af6e-821c3bc9d3",
        "meta": {
          "versionId": "4",
          "lastUpdated": "2022-04-12T01:54:45.811Z",
          "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest"
          ],
          "tag": [
            {
              "code": "US_Core_5"
            },
            {
              "code": "Inpatient"
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
                "code": "inpatient",
                "display": "Inpatient"
              }
            ],
            "text": "Inpatient"
          }
        ],
        "reportedBoolean": false,
        "medicationCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "1656313",
              "display": "Cefotaxime 1000 MG Injection"
            }
          ],
          "text": "Cefotaxime 1000Mg Powder For Solution For Injection"
        },
        "subject": {
          "reference": "Patient/test2",
          "display": "Brian Z"
        },
        "encounter": {
          "reference": "Encounter/inpatient-example",
          "display": "Inpatient encounter"
        },
        "authoredOn": "2016-09-12",
        "requester": {
          "reference": "Practitioner/example-drcayr",
          "display": "Dr Cayr"
        },
        "reasonCode": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "233604007",
                "display": "Pneumonia (disorder)"
              }
            ]
          }
        ],
        "dosageInstruction": [
          {
            "sequence": 1,
            "text": "Cefatoxime 1gm intravenously every 6 hours",
            "timing": {
              "repeat": {
                "frequency": 1,
                "period": 6,
                "periodUnit": "h"
              }
            },
            "asNeededBoolean": false,
            "route": {
              "coding": [
                {
                  "system": "http://ncimeta.nci.nih.gov",
                  "code": "C38276",
                  "display": "INTRAVENOUS",
                  "userSelected": false
                }
              ]
            },
            "method": {
              "text": "Slow Push"
            }
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "http://test.fhir.org/r4/MedicationRequest/e5fb50da-bff9-414a-a229-68b431c489",
      "resource": {
        "resourceType": "MedicationRequest",
        "id": "e5fb50da-bff9-414a-a229-68b431c489",
        "meta": {
          "versionId": "4",
          "lastUpdated": "2022-04-12T01:54:45.858Z",
          "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest"
          ],
          "tag": [
            {
              "code": "US_Core_5"
            },
            {
              "code": "Inpatient"
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
                "code": "inpatient",
                "display": "Inpatient"
              }
            ],
            "text": "Inpatient"
          }
        ],
        "reportedBoolean": false,
        "medicationCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "860092",
              "display": "1 ML Ketorolac Tromethamine 15 MG/ML Injection"
            }
          ],
          "text": "Ketorolac Tromethamine 15 MG/ML For Injection"
        },
        "subject": {
          "reference": "Patient/test2",
          "display": "Brian Z"
        },
        "encounter": {
          "reference": "Encounter/inpatient-example",
          "display": "Inpatient encounter"
        },
        "authoredOn": "2016-09-12",
        "requester": {
          "reference": "Practitioner/example-drb",
          "display": "Dr B"
        },
        "reasonCode": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "233604007",
                "display": "Pneumonia (disorder)"
              }
            ]
          }
        ],
        "dosageInstruction": [
          {
            "sequence": 1,
            "text": "Ketoralac 15mg every six hours",
            "timing": {
              "repeat": {
                "frequency": 1,
                "period": 6,
                "periodUnit": "h"
              }
            },
            "asNeededBoolean": false,
            "route": {
              "coding": [
                {
                  "system": "http://ncimeta.nci.nih.gov",
                  "code": "C38276",
                  "display": "INTRAVENOUS",
                  "userSelected": false
                }
              ]
            },
            "method": {
              "text": "Slow Push"
            }
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

File: repos/HL7_SLASH_US-Core/input/includes/get-all-enc-meds.md


**Storyboard for this example**

This example is based upon the following scenario.

Patient Brain Z has presented with the same condition (pneumonia) as in a previous inpatient encounter. Provider A (Dr Cayr) uses a desktop or mobile application to request all the medications from this previous inpatient encounter (Encounter A).

 Medication records for Patient Brian Z during Encounter A

Item|Date|Script|Source|Notes
---|---|---|---|---
1 | 9/10/2016 - 9/12-2016| Cefatoxime 1gm intravenously every 6 hours | Provider B's Order |  Administered in hospital
2 | 9/10/2016 - 9/12-2016| Zithromax  (azithromycin) 500 MG in 250 ml Normal Saline intravenous infusion over 1hr daily | Provider B's Order |  Administered in hospital
3 | 9/10/2016 - 9/12-2016| Ketorolac 15 mg intravenously every 6 hours | Provider B's Order |  Administered in hospital
2 | 9/10/2016 - 9/12-2016| LRS Solution 200 ml/hr intravenously CRI | Provider B's Order | Administered in hospital
5 | 9/12/2016  | Amoxicillin 500mg by mouth every 6 hours for 10 days | Provider B's Order | discharge prescription, patient reported did not comply (fill prescription)
6 | 9/12/2016  | Zithromax (azithromycin) 250mg by mouth every 12 hours for 10 days | Provider B's Order | discharge prescription, patient reported did not comply (fill prescription)
{: .grid}


**Request:**

Get “all medications” for a patient inpatient encounter by querying MedicationRequest using the patient and encounter search parameters.


    GET [base]/MedicationRequest?patient=test2&intent=order,plan&encounter=A

**Response:**

A Server returns a search Bundle resource containing all the MedicationRequests for the patient Brian Z during inpatient Encounter A:


    HTTP/1.1 200 OK
    [other headers]

~~~
{% include get-all-ecounter-meds-searchbundle.md %}
~~~


---

File: repos/HL7_SLASH_US-Core/input/includes/get-all-meds-searchbundle.md

{
  "resourceType": "Bundle",
  "id": "f48e4a18-173b-4c82-8eeb-3e39daa59f",
  "meta": {
    "lastUpdated": "2022-04-12T00:01:27.106Z"
  },
  "type": "searchset",
  "total": 5,
  "link": [
    {
      "relation": "self",
      "url": "http://test.fhir.org/r4/MedicationRequest?_format=application/fhir+json&search-id=a27179f4-7471-44dd-b6f1-73ae7ef001&&patient=test2&intent=order,plan&_sort=_id"
    }
  ],
  "entry": [
    {
      "fullUrl": "http://test.fhir.org/r4/MedicationRequest/269",
      "resource": {
        "resourceType": "MedicationRequest",
        "id": "269",
        "meta": {
          "versionId": "2",
          "lastUpdated": "2022-04-11T23:29:16.906Z",
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
          "versionId": "1",
          "lastUpdated": "2022-04-11T23:33:38.281Z",
          "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest"
          ],
          "tag": [
            {
              "code": "US_Core_5"
            }
          ]
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>meta</b>: </p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>category</b>: Outpatient <span style=\"background: LightGoldenRodYellow \">(Details : {http://terminology.hl7.org/CodeSystem/medicationrequest-category code \"outpatient\" := \"outpatient\", given as \"Outpatient\"})</span></p><p><b>reported</b>: false</p><p><b>medication</b>: Humulin R (insulin regular, human) U100  100units/ml inj solution <span style=\"background: LightGoldenRodYellow \">(Details : {RxNorm code \"311036\" := \"311036\", given as \"Humulin R (insulin regular, human) U100  100units/ml inj solution\"})</span></p><p><b>subject</b>: <a href=\"Patient/test2\">Brian Z</a></p><p><b>encounter</b>: <a href=\"Encounter/outpatient-example-2\">Encounter/outpatient-example-2</a></p><p><b>authoredOn</b>: 7/1/2015</p><p><b>requester</b>: </p><p><b>dosageInstruction</b>: </p></div>"
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
          "versionId": "1",
          "lastUpdated": "2022-04-11T23:46:16.248Z",
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
    },
    {
      "fullUrl": "http://test.fhir.org/r4/MedicationRequest/272",
      "resource": {
        "resourceType": "MedicationRequest",
        "id": "272",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2022-04-11T23:49:12.951Z",
          "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest"
          ],
          "tag": [
            {
              "code": "US_Core_5"
            }
          ]
        },
        "status": "completed",
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
              "code": "314231",
              "display": "Simvastatin 10 MG Oral Tablet"
            }
          ],
          "text": "simvastatin 10mg Tablet"
        },
        "subject": {
          "reference": "Patient/test2",
          "display": "Brian Z"
        },
        "authoredOn": "2015-06-12",
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
            "text": "30mg (3 tablets) by mouth once daily",
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
          "numberOfRepeatsAllowed": 6,
          "quantity": {
            "value": 90,
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
      "fullUrl": "http://test.fhir.org/r4/MedicationRequest/273",
      "resource": {
        "resourceType": "MedicationRequest",
        "id": "273",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2022-04-11T23:57:17.715Z",
          "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest"
          ],
          "tag": [
            {
              "code": "US_Core_5"
            }
          ]
        },
        "status": "completed",
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
        "authoredOn": "2016-09-01",
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
            "text": "1ml intramuscularly"
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

File: repos/HL7_SLASH_US-Core/input/includes/get-all-meds.md


**Storyboard for this example**

This example is based upon the following scenario:

Patient Brian Z uses an App to request all his medications from a single provider, Dr Cayr. This test scenario exercises a mix of routine meds, unusual schedule meds and as-needed meds. All meds are in the outpatient setting only.

Provider A's (Dr Cayr) medication records for Patient Brian Z

Item|Date|Script|Source|Notes
---|---|---|---|---
1 | 9/12/2016 | testosterone cypionate 100mg/ml inj  1ml intramuscularly every 3 weeks | Reported by Patient |  Get at doctor's office every third Friday. Taking for energy level and drive.
2 | 9/1/2016 | testosterone cypionate 100mg/ml inj  1ml intramuscularly  | Reported by Dr Cryn | completed
3 | 1/15/2016 | Zocor (simvastatin) 40mg by mouth once daily | Dr. Cayr Order: BMC |patient med status: taking
4 | 7/1/2015 | Humulin R (insulin regular, human) U100 10U every AM, 5U every PM, 5U at bedtime. |Dr.Cayr Order:BMC | patient med status: taking
5 | 6/12/2015  | simvastatin 30mg by mouth once daily  | Dr. Cayr Order: BMC  | patient med status: completed
{: .grid}


**Request:**

Get “all medications” for a patient by querying MedicationRequest using the patient search parameter.


    GET [base]/MedicationRequest?patient=test2&intent=order,plan

**Response:**

A Server returns a search Bundle resource containing all the MedicationRequests for the patient Brian Z


    HTTP/1.1 200 OK
    [other headers]

~~~
{% include get-all-meds-searchbundle.md %}
~~~


---

File: repos/HL7_SLASH_US-Core/input/includes/granular-scopes-table.md

<!-- This liquid script creates a US Core scope requirements table using input data from input/data/scopes.csv 
include parameters: conformance='SHALL'|'SHOULD'|'MAY' see below for how used, and crud='cruds' not currently used -->

{% assign rows = site.data.scopes -%}
{%- assign granular_scopes = '' -%}
{%- for item in rows -%}
{%- if item.resource_conformance == "SHALL" -%}
{% for i in (1..6) %}
{%- assign category =  'category_' | append: i -%}
{%- assign category_conformance =  'category_' | append: i |append: '_conformance' -%}

{%- assign conformance = false -%}
{%- unless include.conformance -%}
{%- if 'SHALLSHOULD' contains item[category_conformance] -%}
{%- assign conformance = true -%}
{%- endif -%}
{%- endunless -%}
{%- if item[category_conformance] == include.conformance -%}
{%- assign conformance = true -%}
{%- endif -%}

{%- if item[category] and conformance -%}
{%- assign resource_type = item.resource_type | strip | replace: ',' -%}
{%- assign category = item[category] | strip | append: ',' -%}
{%- assign scope =  resource_type | append: '.rs?category=' | append: category -%}
{%- assign granular_scopes =  granular_scopes | append: scope -%}
{%- endif -%}
{%- endfor -%}
{%- endif -%}
{%- endfor -%}
{%- assign granular_scopes = granular_scopes | split: "," | uniq | sort  %}

---

File: repos/HL7_SLASH_US-Core/input/includes/link-list.md

<!-- FHIR Core Resources -->
{% include r4-link-list.md %}
<!-- IG Pages (Including IG Artifacts -->
{% include page-link-list.md %}
[$docref operation]: OperationDefinition-docref.html
[$expand]: {{site.data.fhir.path}}valueset-operation-expand.html "An operation used to create a simple collection of codes suitable for use for data entry or validation"
[$expand]: {{site.data.fhir.path}}valueset-operation-expand.html "An operation used to create a simple collection of codes suitable for use for data entry or validation"
[(how to search by date)]: {{site.data.fhir.path}}search.html#date
[(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
[(how to search by token)]: {{site.data.fhir.path}}search.html#token
[108252007 Laboratory procedure (procedure)]: https://browser.ihtsdotools.org/?perspective=full&conceptId1=108252007&edition=MAIN/2024-10-01&release=&languages=en&latestRedirect=false
[2015 Edition Common Clinical Data Set (CCDS)]: https://www.healthit.gov/sites/default/files/ccds_reference_document_v1_1.pdf
[21st Century Cures Act for accessing patient data]: https://www.federalregister.gov/d/2020-07419/p-1177
[34133-9]: http://s.details.loinc.org/LOINC/34133-9.html?sections=Comprehensive
[363679005 Imaging (procedure)]: https://browser.ihtsdotools.org/?perspective=full&conceptId1=363679005&edition=MAIN/2024-10-01&release=&languages=en&latestRedirect=false
[386053000 Evaluation procedure (procedure)]: https://browser.ihtsdotools.org/?perspective=full&conceptId1=386053000&edition=MAIN/2024-10-01&release=&languages=en&latestRedirect=false
[387713003 Surgical procedure (procedure)]: https://browser.ihtsdotools.org/?perspective=full&conceptId1=387713003&edition=MAIN/2024-10-01&release=&languages=en&latestRedirect=false
[410606002 Social service procedure (procedure)]: https://browser.ihtsdotools.org/?perspective=full&conceptId1=410606002&edition=MAIN/2024-10-01&release=&languages=en&latestRedirect=false
[5 Common Clinical Notes]: ValueSet-us-core-clinical-note-type.html
[API Resource Collection in Health (ARCH)]: https://www.healthit.gov/isa/api-resource-collection-health-arch
[Additional USCDI Requirements]: must-support.html#additional-uscdi-requirements
[American Heart Association]: http://heart.org/
[Apgar score]: https://en.wikipedia.org/wiki/Apgar_score
[Appendix B in U.S. Core Data for Interoperability (USCDI) Task Force 2021 HITAC Phase 3 Recommendations Report Letter]: https://www.healthit.gov/sites/default/files/page/2021-10/2021-09-09_USCDI_TF_2021_HITAC_Phase%203_%20Recommendations%20Report_Signed_508.pdf
[Argonaut Data Query]: http://www.fhir.org/guides/argonaut/r2/
[Argonaut Provider Directory]: http://www.fhir.org/guides/argonaut/pd//release1/index.html
[Argonaut]: http://argonautwiki.hl7.org/index.php?title=Main_Page
[Audit Logging]: {{site.data.fhir.path}}security.html#audit
[Audit Logging]: {{site.data.fhir.path}}security.html#audit%20logging
[Authentication]: {{site.data.fhir.path}}security.html#authentication
[Authorization/Access Control]: {{site.data.fhir.path}}security.html#authorization/access%20control
[Blood pressure systolic and diastolic]: {{site.data.fhir.path}}bp.html
[Body height]: {{site.data.fhir.path}}bodyheight.html
[Body temperature]: {{site.data.fhir.path}}bodytemp.html
[Body weight]: {{site.data.fhir.path}}bodyweight.html
[CDC National Drug Code (NDC) Directory – Vaccine NDC Linker Table]: http://www2a.cdc.gov/vaccines/iis/iisstandards/ndc_crosswalk.asp
[CIMI]:http://www.hl7.org/Special/Committees/cimi/index.cfm
[CPT-4/HCPC for procedures]: {{site.data.fhir.path}}valueset-procedure-code.html
[CVX vaccine codes]: https://www2a.cdc.gov/vaccines/iis/iisstandards/ndc_crosswalk.asp
[Cardiology (LP29708-2)]: https://loinc.org/LP29708-2
[Care Experience Preferences at End of Life Grouping]: https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1115.11/expansion
[Certifying Systems]: https://www.healthit.gov/topic/certification-ehrs/about-onc-health-it-certification-program
[Clinical Information Reconciliation and Incorporation (CIRI)]: https://www.ecfr.gov/current/title-45/part-170#p-170.315(b)(2) "45 CFR 170.315(b)(2)"
[Clinical Laboratory Improvement Amendments (CLIA)]: http://www.cdc.gov/clia/
[Clinician Access for EHR Launch]: {{site.data.fhir.ver.hl7_fhir_uv_smart_app_launch}}/conformance.html#clinician-access-for-standalone
[Code on Dental Procedures and Nomenclature (CDT Code)]: http://www.ada.org/en/publications/cdt/
[Coded Elements]: general-requirements.html#using-codes-in-us-core-profiles
[Communications]: {{site.data.fhir.path}}security.html#http
[Condition Quick Start]: StructureDefinition-us-core-condition-encounter-diagnosis.html#search
[Conformance Requirements for Client]: CapabilityStatement-us-core-client.html "Conformance Requirements for Client Page"
[Conformance Requirements for Server]: CapabilityStatement-us-core-server.html "Conformance Requirements for Server Page"
[Conformance Requirements]: capability-statements.html "CapabilityStatements defined for this Guide"
[Conformance requirements for the US Core Server]: CapabilityStatement-us-core-server.html
[Consultation Note (11488-4)]: https://loinc.org/11488-4.html
[Contained resources]: {{site.data.fhir.path}}references.html#contained
[DAF-Research]: http://hl7.org/fhir/us/daf-research/index.html
[Data Access Framework]: https://oncprojectracking.healthit.gov/wiki/display/TechLabSC/DAF+Home
[DataAbsentReason Code System]: {{site.data.fhir.path}}codesystem-data-absent-reason.html
[DataAbsentReason Extension]: {{site.data.fhir.path}}extension-data-absent-reason.html
[Deletion Safety Checks]: {{site.data.fhir.path}}safety.html#conformance
[Device search parameters]: {{site.data.fhir.path}}device.html#search
[DiagnosticReport]: {{site.data.fhir.path}}diagnosticreport.html
[Digital Signatures]: {{site.data.fhir.path}}security.html#digital%20signatures
[Direct address]: https://www.healthit.gov/sites/default/files/directbasicsforprovidersqa_05092014.pdf
[Directory of published versions]: {{site.data.fhir.canonical}}/history.html
[Discharge Summary (18842-5)]: https://loinc.org/18842-5.html
[Document Class Value Set]: {{site.data.fhir.path}}valueset-document-classcodes.html
[DocumentReference Format]: http://hl7.org/fhir/ValueSet-formatcodes.html
[DocumentReference vs DiagnosticReport]: clinical-notes-guidance.html#documentreference-vs-diagnosticreport
[DocumentReference-episode-summary]: DocumentReference-episode-summary.html
[DocumentReferenceStatus]: http://hl7.org/fhir/ValueSet-document-reference-status.html
[Downloads]: downloads.html "Downloads Page"
[Element Level Provenance]: element-level-provenance.html
[ElementDefinition.pattern]: {{site.data.fhir.path}}elementdefinition-definitions.html#ElementDefinition.pattern_x_
[Emergency Department Note (34111-5)]: https://loinc.org/34111-5.html
[Emergency Department Note (34111-5)]: https://loinc.org/34111-5.html
[Enclosed Precondition Extension]: http://hl7.org/fhir/us/pacio-adi/StructureDefinition/adi-enclosedPrecondition-extension
[Event Location Extension]: http://hl7.org/fhir/StructureDefinition/event-location
[Extensible Binding]: {{site.data.fhir.path}}terminologies.html#extensible
[Extensions]: {{site.data.fhir.path}}extensibility.html
[FHIR Artifacts]: artifacts.html
[FHIR Binary Resource]: http://hl7.org/fhir/binary.html
[FHIR Bulk Data Access (Flat FHIR)]: http://hl7.org/fhir/uv/bulkdata/index.html
[FHIR Communications Security]: {{site.data.fhir.path}}security.html#http
[FHIR Communications]: {{site.data.fhir.path}}security.html#http
[FHIR Conformance Rules]: {{site.data.fhir.path}}conformance-rules.html
[FHIR Data Types]: {{site.data.fhir.path}}datatypes.html
[FHIR Digital Signatures]: {{site.data.fhir.path}}security.html#digital%20signatures
[FHIR Documents]: {{site.data.fhir.path}}documents.html
[FHIR Extension]: https://hl7.org/fhir/extensions/
[FHIR Must Support]: {{site.data.fhir.path}}profiling.html#mustsupport
[FHIR OAuth authorization Endpoints and Capabilities]: {{site.data.fhir.ver.hl7_fhir_uv_smart_app_launch}}/conformance.html#smart-on-fhir-oauth-authorization-endpoints-and-capabilities
[FHIR Paging]: {{site.data.fhir.path}}http.html#paging
[FHIR Provenance]: {{site.data.fhir.path}}provenance.html
[FHIR R5 Patient Resource Gender and Sex Notes]: https://hl7.org/fhir/R5/patient.html#gender
[FHIR RESTful API]: {{site.data.fhir.path}}http.html
[FHIR RESTful Search API]: {{site.data.fhir.path}}http.html#search
[FHIR RESTful operations]: {{site.data.fhir.path}}operations.html
[FHIR Resource]: {{site.data.fhir.path}}resource.html
[FHIR Search]: {{site.data.fhir.path}}search.html
[FHIR Security Labels]: {{site.data.fhir.path}}security-labels.html
[FHIR Terminology Service for VSAC Resources]: https://www.nlm.nih.gov/vsac/support/usingvsac/vsacfhirapi.html
[FHIR Terminology]: {{site.data.fhir.path}}terminologies.html
[FHIR Topic-Based Subscription]: https://hl7.org/fhir/R5/subscriptions.html
[FHIR Version 4.0.1]: {{site.data.fhir.path}}index.html "FHIR Specification Home Page"
[FHIR Version DSTU2]: http://hl7.org/fhir/DSTU2/index.html "FHIR Version DSTU2 Specification Home Page"
[FHIR Version R4]: {{site.data.fhir.path}}index.html "FHIR Version R4 Specification Home Page"
[FHIR Version STU3]: http://hl7.org/fhir/STU3/index.html "FHIR Version STU3 Specification Home Page"
[FHIR-45012]: https://jira.hl7.org/browse/FHIR-45012
[FHIRpath]: https://hl7.org/fhirpath/N1/
[FindHelp.org]: https://company.findhelp.com/
[Formal Views]: #profile
[General Guidance]: general-guidance.html "General Guidance Page"
[General Security Considerations]: security.html
[Gravity Project]: https://hl7.org/gravity
[Guide to Resources]: {{site.data.fhir.path}}resourceguide.html
[HL7 C-CDA]: https://hl7.org/cda/us/ccda/history.html
[HL7 Cross Paradigm Implementation Guide: Gender Harmony - Sex and Gender Representation, Edition 1]: https://hl7.org/xprod/ig/uv/gender-harmony/
[HL7 Cross Paradigm Implementation Guide: UDI Pattern]: https://www.hl7.org/implement/standards/product_brief.cfm?product_id=487
[HL7 Gender Harmony Project]: https://confluence.hl7.org/display/VOC/The+Gender+Harmony+Project
[HL7 Terminology (THO)]: https://terminology.hl7.org
[HL7 U.S. Data Access Framework (DAF)]: https://oncprojectracking.healthit.gov/wiki/display/TechLabSC/DAF+Home
[HL7 v2]: http://www.hl7.org/implement/standards/product_brief.cfm?product_id=185
[HTA-1 final rule]: https://www.federalregister.gov/documents/2023/04/18/2023-07229/health-data-technology-and-interoperability-certification-program-updates-algorithm-transparency-and#p-991+
[HTI-1 final rule]: https://www.federalregister.gov/documents/2023/04/18/2023-07229/health-data-technology-and-interoperability-certification-program-updates-algorithm-transparency-and
[HTTP]: {{site.data.fhir.path}}http.html
[Head Circumference]: {{site.data.fhir.path}}headcircum.html
[Head circumference]: {{site.data.fhir.path}}headcircum.html
[Healthcare Facility Patient Care Location (HSLOC)]: https://www.cdc.gov/nhsn/cdaportal/terminology/codesystem/hsloc.html
[Heart rate]: {{site.data.fhir.path}}heartrate.html
[History & Physical Note (34117-2)]: https://loinc.org/34117-2.html
[Home]: index.html "Home Page"
[Human Language]: {{site.data.fhir.path}}extension-language.html
[ICD-10-PCS codes]: http://www.cms.gov/Medicare/Coding/ICD10
[IHE Healthcare Provider Directory]: http://ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_HPD.pdf
[IHE MHD]: http://ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_MHD.pdf
[IHE XDS]: https://wiki.ihe.net/index.php/Cross-Enterprise_Document_Sharing
[IHE XDSclassCode]: https://wiki.ihe.net/index.php/XDS_classCode_Metadata_Coding_System
[Imaging Narrative (18748-4)]: https://loinc.org/18748-4.html
[Immunization-imm-1]: Immunization-imm-1.html
[Implantable device list]: https://www.healthit.gov/test-method/implantable-device-list
[Individual Pronouns Extension]: http://hl7.org/fhir/StructureDefinition/individual-pronouns
[Interpretative Guidelines for Laboratories]: http://www.cms.gov/Regulations-andGuidance/Legislation/CLIA/Interpretive_Guidelines_for_Laboratories.html
[Intervention Preferences at End of Life Grouping]: https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1115.9/expansion
[LOINC Clinical Test Codes]: https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1267.19/expansion
[LOINC Common Laboratory Orders Value Set]: https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1267.21/expansion
[LOINC Radiology Codes]: https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1267.18/expansion
[LOINC scale type to FHIR data type mapping]: {{site.data.fhir.path}}loinc.html#dataelements
[LOINC]: http://loinc.org
[Laboratory Report Narrative (11502-2)]: https://loinc.org/11502-2.html
[Mandatory]: must-support.html
[Maturity Level]: {{site.data.fhir.path}}versions.html#maturity
[Medication Adherence ValueSet]: https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1240.8/expansionStructureDefinition-us-core-medication-adherence.html
[Medication Clinical Drug (RxNorm)]: https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1010.4/expansion
[MedicationRequest Quick Start]: StructureDefinition-us-core-medicationrequest.html#search
[MedicationRequest examples]: StructureDefinition-us-core-medicationrequest-examples.html
[MedicationRequestStatus]: {{site.data.fhir.path}}valueset-medicationrequest-status.html
[MedicationStatementStatus]: {{site.data.fhir.path}}valueset-medication-statement-status.html
[Medications Module]: {{site.data.fhir.path}}medications-module.html
[MimeType]: http://www.rfc-editor.org/bcp/bcp13.txt#
[Missing Data]: general-requirements.html#missing-data
[Multi-Language support in FHIR (Localization/Internationalization)]: {{site.data.fhir.path}}languages.html
[Multiple Chronic Condition (MCC) Care Plan Implementation Guide]: https://hl7.org/fhir/us/mcc/2023Sep/
[NDC to RxNorm mappings]: https://www.nlm.nih.gov/research/umls/user_education/quick_tours/RxNorm/ndc_rxcui/NDC_RXCUI_DrugName.html
[NDC vaccine codes]: http://www2a.cdc.gov/vaccines/iis/iisstandards/ndc_crosswalk.asp
[Narrative documentation]: {{site.data.fhir.path}}narrative.html
[Narrative]: {{site.data.fhir.path}}security.html#narrative
[National Drug Codes (NDC)]: https://www.fda.gov/drugs/drug-approvals-and-databases/national-drug-code-directory
[Normative]: {{site.data.fhir.path}}versions.html#maturity
[Nurse Note (34746-8)]: https://loinc.org/34746-8.html
[ONC 2015 Edition Common Clinical Data Set (CCDS)]: https://www.healthit.gov/sites/default/files/ccds_reference_document_v1_1.pdf
[ONC Health IT Certification]: https://www.healthit.gov/topic/certification-ehrs/about-onc-health-it-certification-program
[ONC Provider Directory Workshop]: https://confluence.oncprojectracking.org/display/PDW/Workshop+Documents
[Observation Category Codes]: {{site.data.fhir.path}}valueset-observation-category.html
[Observation Grouping]: {{site.data.fhir.path}}observation.html#obsgrouping
[Observation Value Absent Reason]: http://hl7.org/fhir/ValueSet/data-absent-reason
[Occupational Data for Health (ODH)]: http://hl7.org/fhir/us/odh/index.html
[Office of the National Coordinator for Health Information Technology (ONC)]: http://www.healthit.gov/newsroom/about-onc
[Oxygen saturation]: {{site.data.fhir.path}}oxygensat.html
[PHDSC Payer Type Committee User's Guide]: https://www.nahdo.org/sites/default/files/2020-12/SourceofPaymentTypologyUsersGuideVersion9.2December2020.pdf
[PHQ-9]: https://en.wikipedia.org/wiki/PHQ-9
[Parameters]: {{site.data.fhir.path}}parameters.html
[Pathology (LP7839-6)]: https://loinc.org/LP7839-6
[Pathology Report Narrative (11526-1)]: https://loinc.org/11526-1.html
[Patient Access for Standalone Apps]: {{site.data.fhir.ver.hl7_fhir_uv_smart_app_launch}}/conformance.html#patient-access-for-standalone-apps
[Patient Example]: Patient-example.html 
[Patient Proficiency Extension]: https://hl7.org/fhir/extensions/StructureDefinition-patient-proficiency.html
[Patient Sex Parameter For Clinical Use]: http://hl7.org/fhir/extensions/StructureDefinition-patient-sexParameterForClinicalUse.html
[Performer function Extension]: http://hl7.org/fhir/StructureDefinition/event-performerFunction
[Physical Activity Alliance]: http://paamovewithus.org/
[Physical Activity Implementation Guide]: https://hl7.org/fhir/us/physical-activity/
[ProcedureStatus]: {{site.data.fhir.path}}valueset-procedure-status.html
[Procedures Note (28570-0)]: https://loinc.org/28570-0.html
[Profiles]: profiles-and-extensions.html "Profiles and Extensions Page"
[Progress Note (11506-3)]: https://loinc.org/11506-3.html
[Project US@ Technical Specification for Patient Addresses Final Version 1.0]: https://asapnet.org/wp-content/uploads/2022/03/Project_US_FINAL_Technical_Specification_Version_1.0.pdf
[Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences (PRAPARE) Survey]: https://www.nachc.org/research-and-data/prapare/
[Provenance Agent Type]: ValueSet-us-core-provenance-participant-type.html
[QI-Core]:http://hl7.org/fhir/us/qicore/
[Quantity]: {{site.data.fhir.path}}datatypes.html#quantity
[Quick Start]: #search
[Radiology (LP29684-5)]: https://loinc.org/LP29684-5
[Record or update]: future-of-US-core.html#future-candidate-requirements-under-consideration
[Reference]: {{site.data.fhir.path}}references.html
[Referencing US Core Profiles]: general-guidance.html#referencing-us-core-profiles
[Referral Note (57133-1)]: https://loinc.org/57133-1.html
[Required Binding]: {{site.data.fhir.path}}terminologies.html#required
[Required Bindings When Slicing by Value Sets]: general-requirements.html#required-bindings-when-slicing-by-valuesets
[Respiratory rate]: {{site.data.fhir.path}}resprate.html
[SDC Base Questionnaire]: {{site.data.fhir.hl7_fhir_uv_sdc}}/StructureDefinition-sdc-questionnaire.html
[SDOH Clinical Care]: http://hl7.org/fhir/us/sdoh-clinicalcare/
[SDOH Clinical Care]: http://hl7.org/fhir/us/sdoh-clinicalcare/index.html
[SMART App Launch]: {{site.data.fhir.ver.hl7_fhir_uv_smart_app_launch}}
[SNOMED CT]: http://snomed.info/sct
[SNOMED CT]: http://snomed.info/sct/731000124108 "SNOMED CT US Edition"
[Search Parameter Registry]: {{site.data.fhir.path}}searchparameter-registry.html
[Searching Using lastUpdated]: general-guidance.html#searching-using-lastupdated
[Security Labels]: {{site.data.fhir.path}}security-labels.html
[Servers Requiring Status]: general-requirements.html#search-for-servers-requiring-status
[Social Determinants of Health (SDOH)]: screening-and-assessments.html
[StructureDefinitions]: {{site.data.fhir.path}}structuredefinition.html
[Structured Data Capture (SDC) Questionnaire Response Profile]: {{site.data.fhir.hl7_fhir_uv_sdc}}/StructureDefinition-sdc-questionnaireresponse.html
[Structured Data Capture (SDC)]: {{site.data.fhir.hl7_fhir_uv_sdc}}
[Supporting Info Extension]: https://hl7.org/fhir/extensions/StructureDefinition-workflow-supportingInfo.html
[Suppressed Data]: general-guidance.html#suppressed-data
[Surgical Operation Note (11504-8)]: https://loinc.org/11504-8.html
[Target Element]: http://hl7.org/fhir/StructureDefinition/targetElement
[Terminology Binding Extensible]: {{site.data.fhir.path}}terminologies.html#extensible
[Terminology]: terminology.html "Terminology Page"
[The US Core DocumentReferences Type Value Set]: ValueSet-us-core-documentreference-category.html
[Token Introspection]: {{site.data.fhir.ver.hl7_fhir_uv_smart_app_launch}}/token-introspection.html#token-introspection)
[Translation]: {{site.data.fhir.path}}extension-translation.html
[U.S. Core Data for Interoperability (USCDI) v1]: https://www.healthit.gov/isa/sites/isa/files/2020-07/USCDI-Version-1-July-2020-Errata-Final.pdf
[U.S. Core Data for Interoperability (USCDI) v2]: https://www.healthit.gov/isp/sites/isp/files/2021-07/USCDI-Version-2-July-2021-Final.pdf
[U.S. Core Data for Interoperability (USCDI) v3]: https://www.healthit.gov/isp/sites/isp/files/2022-10/USCDI-Version-3-October-2022-Errata-Final.pdf
[U.S. Core Data for Interoperability (USCDI) v4]: https://www.healthit.gov/isp/sites/isp/files/2023-10/USCDI-Version-4-October-2023-Errata-Final.pdf
[U.S. Core Data for Interoperability (USCDI) v5]: https://www.healthit.gov/isp/sites/isp/files/2024-07/USCDI-Version-5-July-2024-Final.pdf
[U.S. Core Data for Interoperability (USCDI)]: https://www.healthit.gov/isa/united-states-core-data-interoperability-uscdi
[UCUM Codes ValueSet]: {{site.data.fhir.path}}valueset-ucum-units.html
[UCUM Codes value set]: {{site.data.fhir.path}}valueset-ucum-units.html
[UCUM]: http://unitsofmeasure.org
[US Core Allergies Profile]: StructureDefinition-us-core-allergyintolerance.html
[US Core Common SDOH Assessments ValueSet]: ValueSet-us-core-common-sdoh-assessments.html
[US Core Common SDOH Assessments]: ValueSet-us-core-common-sdoh-assessments.html
[US Core Condition Category Codes]: ValueSet-us-core-condition-category.html
[US Core Data for Interoperability USCDI Table]: uscdi.html
[US Core Diagnostic Imaging Result Observation Profile]: StructureDefinition-us-core-observation-imaging.html
[US Core Diagnostic Imaging Result Observation Profile]: StructureDefinition-us-core-observation-imaging.html
[US Core DiagnosticReport Category Codes]: ValueSet-us-core-diagnosticreport-category.html
[US Core DiagnosticReport Profile for Report and Note exchange]: StructureDefinition-us-core-diagnosticreport-note.html
[US Core DocumentReference Type Value Set]: ValueSet-us-core-documentreference-type.html
[US Core DocumentReference]: StructureDefinition-us-core-documentreference.html
[US Core DocumentReferences Category Value Set]: ValueSet-us-core-documentreference-category.html
[US Core FHIR RESTful Search API]: general-requirements.html#fhir-restful-search-api-requirements
[US Core Medication Statement Profile]: StructureDefinition-us-core-medicationstatement.html
[US Core Pediatric Head Occipital Frontal Circumference Observation Profile]: StructureDefinition-head-occipital-frontal-circumference-percentile.html
[US Core SMART Scopes]: scopes.html#smart-scopes
[US Core Security]: security.html
[US Realm Steering Committee (USRSC)]: https://confluence.hl7.org/display/USR/US+Realm+Steering+Committee
[USCDI ONDEC process]: https://www.healthit.gov/isa/ONDEC
[USCDI v2]: https://www.healthit.gov/isa/united-states-core-data-interoperability-uscdi#uscdi-v2
[USCDI v3]: https://www.healthit.gov/isa/united-states-core-data-interoperability-uscdi#uscdi-v3
[Using SNOMED CT with FHIR]: {{site.data.fhir.path}}snomedct.html
[Using multiple codes with CodeableConcept Datatype]: general-requirements.html#translations
[Value Set Authority Center (VSAC)]: https://vsac.nlm.nih.gov/
[Value sets]: terminology.html
[Vital Signs Profile]: {{site.data.fhir.path}}observation-vitalsigns.html
[Vital Signs Quick Start]: vitals-search.html
[Vital Signs with Qualifying Elements: Average Blood Pressure Profile]: https://hl7.org/fhir/us/vitals/STU1/StructureDefinition-average-blood-pressure.html
[Well-Known Uniform Resource Identifiers (URIs)]: https://hl7.org/fhir/smart-app-launch/STU2/conformance.html#using-well-known
[`Accept-Language`]: https://www.ietf.org/rfc/rfc2616.txt
[`CarePlan.status`]: {{site.data.fhir.path}}careplan.html
[`Meta.lastUpdated`]: {{site.data.fhir.path}}resource.html#Meta
[`Questionnaire.useContext`]: {{site.data.fhir.path}}questionnaire-definitions.html#Questionnaire.useContext
[`_include`]: {{site.data.fhir.path}}search.html#include
[`_lastUpdated`]: {{site.data.fhir.path}}search.html#lastUpdated
[`_revinclude`]: {{site.data.fhir.path}}search.html#include
[`asserted-date`]: SearchParameter-us-core-condition-asserted-date.html
[`description`]: SearchParameter-us-core-goal-description.html
[`discharge-disposition`]: SearchParameter-us-core-encounter-discharge-disposition.html
[`ethnicity`]: SearchParameter-us-core-ethnicity.html
[`gender-identity`]: SearchParameter-us-core-patient-gender-identity.html
[`race`]: SearchParameter-us-core-race.html
[`role`]: SearchParameter-us-core-careteam-role.html
[asserted-date]: SearchParameter-us-core-condition-asserted-date.html
[assertedDate Extension]: {{site.data.fhir.path}}extension-condition-asserteddate.html
[base resource differential]: {{site.data.fhir.path}}diff.html
[boundaries section]: {{ site.data.fhir.path }}DocumentReference.html#bnr
[boundaries section]: {{ site.data.fhir.path }}documentreference.html#bnr
[boundaries section]: {{site.data.fhir.path}}medicationrequest.html#bnr
[capabilitystatement-expectation]: http://hl7.org/fhir/extension-capabilitystatement-expectation.html
[chain]:{{site.data.fhir.path}}searchparameter-definitions.html#SearchParameter.chain
[chains]: {{site.data.fhir.path}}search.html#chaining
[clinical safety]: {{site.data.fhir.path}}safety.html
[comparator]:{{site.data.fhir.path}}searchparameter-definitions.html#SearchParameter.comparator
[comparators]: {{site.data.fhir.path}}search.html#prefix
[compartment]: {{site.data.fhir.path}}compartmentdefinition.html
[component]: {{site.data.fhir.path}}observation.html#gr-comp
[composites]: {{site.data.fhir.path}}search.html#combining
[contained]: {{site.data.fhir.path}}references.html#contained
[converted from a new element]: {{site.data.fhir.path}}versions.html#extensions
[core specification]: {{site.data.fhir.path}}extensibility.html#2.20.0.2.2
[current]: https://hl7.org/fhir/R5/terminologies.html#binding
[description]: SearchParameter-us-core-goal-description.html
[differential view]: {{site.data.fhir.path}}profiling.html#snapshot
[discharge-disposition]: SearchParameter-us-core-encounter-discharge-disposition.html
[ethnicity]: SearchParameter-us-core-ethnicity.html
[example binding]: {{site.data.fhir.path}}terminologies.html#example
[example]: {{site.data.fhir.path}}terminologies.html#example
[extensible]: {{site.data.fhir.path}}terminologies.html#extensible
[extension]: {{site.data.fhir.path}}extensibility.html
[gender-identity]: SearchParameter-us-core-patient-gender-identity.html
[granular scopes]: {{site.data.fhir.ver.hl7_fhir_uv_smart_app_launch}}/scopes-and-launch-context.html#finer-grained-resource-constraints-using-search-parameters
[how to search by date]: {{site.data.fhir.path}}search.html#date
[how to search by reference]: {{site.data.fhir.path}}search.html#reference
[how to search by string]: {{site.data.fhir.path}}search.html#string
[how to search by the logical id]: {{site.data.fhir.path}}references.html#logical
[how to search by token]: {{site.data.fhir.path}}search.html#token
[logical view]: {{site.data.fhir.path}}formats.html#table
[managing returned resources]: {{site.data.fhir.path}}search.html#return
[mapping]: general-guidance.html
[modifier element]: {{site.data.fhir.path}}conformance-rules.html#isModifier
[modifier elements]: general-requirements.html#modifier-elements
[modifier]:{{site.data.fhir.path}}searchparameter-definitions.html#SearchParameter.modifier
[modifiers]: {{site.data.fhir.path}}search.html#modifiers
[multipleAnd]: {{site.data.fhir.path}}searchparameter-definitions.html#SearchParameter.multipleAnd
[multipleOr]:{{site.data.fhir.path}}searchparameter-definitions.html#SearchParameter.multipleOr
[preferred]: {{site.data.fhir.path}}terminologies.html#preferred
[principle of least privilege]: https://en.wikipedia.org/wiki/Principle_of_least_privilege
[profiles]: {{site.data.fhir.path}}profiling.html
[quantity]: {{site.data.fhir.path}}search.html#quantity
[race]: SearchParameter-us-core-race.html
[reference]: {{site.data.fhir.path}}references.html
[registry of standard extensions]: {{site.data.fhir.path}}extensibility-registry.html
[resource level scopes]: {{site.data.fhir.ver.hl7_fhir_uv_smart_app_launch}}/scopes-and-launch-context.html#scopes-for-requesting-clinical-data
[role]: SearchParameter-us-core-careteam-role.html
[search]: http://hl7.org/fhir/search.html
[security considerations]: {{site.data.fhir.path}}security.html
[slicing]: {{site.data.fhir.path}}profiling.html#slicing
[technical requirements]: general-requirements.html#required-bindings-when-slicing-by-valuesets
[timezone extension]: {{site.data.fhir.path}}extension-tz-code.html
[validating profiles and resources]: {{site.data.fhir.path}}validation.html
[vital signs table]: {{site.data.fhir.path}}observation-vitalsigns.html#vitals-table
[writing and updating]: future-of-US-core.html#future-candidate-requirements-under-consideration
[www.loinc.org/usage/orders]: https://loinc.org/usage/orders/
[{{site.data.fhir.path}}StructureDefinition/data-absent-reason]: {{site.data.fhir.path}}StructureDefinition/data-absent-reason
[NUCC to SNOMED CT Mappings]: https://build.fhir.org/ig/HL7/davinci-ehrx/ConceptMap-NUCC-CareTeamMemberFunction.html
[HTTP Cache-Control]: https://httpwg.org/specs/rfc9111.html
[Social Determinants of Health Goals]: https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.71/expansion
[99501-9]: https://loinc.org/99501-9
[Sex Parameter for Clinical Use ValueSet]: {{site.data.fhir.ver.hl7tx}}/ValueSet-sex-parameter-for-clinical-use.html
[individual level provenance]: basic-provenance.html#individual-level-provenance
[element ids]: {{site.data.fhir.path}}element.html

---

File: repos/HL7_SLASH_US-Core/input/includes/logo.md

<!--
================THIS IS FOR THE PROJECT LOGO AND URL ===============
-->

<a no-external="true" href="http://www.hl7.org">
<img alt="visit our website" class="img-responsive project-logo" src="assets/images/org_logo.png"/>
</a>


---

File: repos/HL7_SLASH_US-Core/input/includes/missing-status.md


**Storyboard for this example**

This example is based upon the following scenario:

Patient 1137192 uses an App to request all his encounters from the provider. The provider system requires status and rejects the request returning a `400` and an OperationOutcome specifying that a status parameter is required for this search.

**Request:**

Get “all encounters” for a patient 1137192 by querying Encounter using the patient search parameter.

    GET [base]/Encounter?patient=1137192

**Response:**

Instead of returning a search Bundle resource containing all the Encounter for the patient, the Server return a `400 Not Found` and an OperationOutcome detailing that a status parameter is required for this search.

    HTTP/1.1 400 Not Found
    [other headers]
    {
      "resourceType": "OperationOutcome",
      "id": "no-status",
      "issue": [
        {
          "severity": "error",
          "code": "business-rule",
          "details": {
            "text": "A \"status\" search parameter is required for this search"
          },
          "diagnostics": "valid statuses for Encounter include planned | arrived | triaged | in-progress | onleave | finished | cancelled | entered-in-error | unknown"
        }
      ]
    }


---

File: repos/HL7_SLASH_US-Core/input/includes/ms-target-table-generator.md

<!-- {% raw %}  This liquid script creates a ms target table using input data from input/data/csv files

This file is created with the python jupyter script: https://github.com/Healthedata1/MyNotebooks/blob/master/CapStatement/target_profile-tabler.ipynb 
with the following columns:
- profile: The US Core Profile that has Must Support Reference elements
- target1..target7: The  Must Support target profiles or resources (up to 7 for now may be more in future)
-  include parameters: file = "ms_refs","addl_uscdi_refs", "ms_choice_refs", "adl_uscdi_choice_refs"

example usage for MS MS Targets: {% include ms-target-table-generator.md file="ms_refs" %}
{% endraw %} -->

{% assign rows = site.data.[include.file] %}
{% for item in rows -%}
{% if forloop.first -%}
| US Core Profile | {% if include.file contains "ms" %}Must Support {% else %}Choice of {% endif %}Target Profiles |
|---|---|
{% endif -%}
{% if item.target1 -%}
| [{{item.profile}}] | [{{item.target1}}]{% if item.target2 %}<br />[{{item.target2}}]{% endif %}{% if item.target3 %}<br />[{{item.target3}}]{% endif %}{% if item.target4 %}<br />[{{item.target4}}]{% endif %}{% if item.target5 %}<br />[{{item.target5}}]{% endif %}{% if item.target6 %}<br />[{{item.target6}}]{% endif %}{% if item.target7 %}<br />[{{item.target7}}]{% endif %} |
{% endif -%}
{% if forloop.last %}{:.grid style="width: 75%"}{% endif -%}
{% endfor %}

---

File: repos/HL7_SLASH_US-Core/input/includes/new_page.md

<!-- 
site.data.structuredefinitions.{SD}.name maps new artifact
site.data.structuredefinitions.{SD}.path maps to page.path
 -->
{%- for r_hash in site.data.resources -%}
  {%- assign r = r_hash[1] -%}
      {%- if r.path == page.path -%}
       {%- assign r_name = r.name -%}
       {%- break -%}
      {%- endif -%}
{%- endfor -%}

{%- assign new = false -%}
{%- for new_stuff in site.data.new_stuff -%}
    {%- if new_stuff == r_name  -%}
This page has new content for US Core Version 8.0.0
{:.new-content}
        {%- break -%}
    {%- endif -%}
{%- endfor -%}


---

File: repos/HL7_SLASH_US-Core/input/includes/non-uscdi-profiles.md

{%- assign black_list = "Organization,Practitioner,PractitionerRole" | split:"," -%}
{% assign r_list = "" %}
{%- for sd_hash in site.data.structuredefinitions -%}
  {%- assign sd = sd_hash[1] -%}
  {%- if black_list contains sd.type -%}
       {% capture r_list %}{{ r_list | append: sd.title | append: "," }}{% endcapture %}
  {%- endif-%}
{%- endfor -%}
{% assign ur_list = r_list | split: "," | uniq | sort %}
<ul id="non-uscdi-profiles">
{% for r in  ur_list %}
    <li>{{r}}</li>
{% endfor %}
</ul>



---

File: repos/HL7_SLASH_US-Core/input/includes/nonnormative-example-boilerplate.md

These examples show what data produced and consumed by systems conforming with this implementation guide might look like. Every effort has been made to ensure that the examples are correct and useful, but they are not a normative part of the specification, nor fully representative of real-world examples.


---

File: repos/HL7_SLASH_US-Core/input/includes/note-and-report-types-scenario1.md


A Client determines the types of reports they can access through DiagnosticReport. The Server responds with 'foo','bar' ,and 'baz' report types:

**Request for DiagnosticReport report type**

~~~
GET [base]/ValueSet/$expand?context=http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note#DiagnosticReport.code&contextDirection=outgoing
~~~

**Response**

~~~
HTTP/1.1 200 OK
[other headers]
~~~

**Response body**

~~~
{
 "resourceType": "ValueSet",
 "id": "scenario1-Server-diagnosticreport-codes",
 "url": "http://acme.org/ValueSet/diagnosticreport-codes",
 "version": "3.0.1",
 "name": "acme-diagnosticreport-codes",
 "title": "Acme DiagnosticReport Codes",
 "status": "draft",
 "date": "2018-11-08T20:29:00+00:00",
 "expansion": {
   "identifier": "urn:uuid:5fc51f5a-4dbc-44f8-8fe5-203d261222f0",
   "timestamp": "2018-11-13T02:55:48.405Z",
   "parameter": [
     {
       "name": "context",
       "valueString": "DiagnosticReport.codes"
     },
     {
       "name": "contextDirection",
       "valueString": "outgoing"
     }
   ],
   "contains": [
     {
       "system": "http://acme.org",
       "code": "foo",
       "display": "Foo"
     },
     {
       "system": "http://acme.org",
       "code": "bar",
       "display": "Bar"
     },
     {
       "system": "http://acme.org",
       "code": "baz",
       "display": "baz"
     }
   ]
 }
}
~~~


---

File: repos/HL7_SLASH_US-Core/input/includes/note-and-report-types-scenario2.md


A Client determines the types of note or reports they can access through DocumentReference.  The Server responds with the five "Common Clinical Notes" types:

**Request for DocumentReference note or report type**

~~~
GET [base]/ValueSet/$expand?context=http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference#DocumentReference.type&contextDirection=outgoing
~~~

**Response**

~~~
HTTP/1.1 200 OK
[other headers]
~~~

**Response body**

~~~
{
  "resourceType": "ValueSet",
  "id": "scenario2-Server-clinical-note-type",
  "url": "http://fhir.org/guides/argonaut-clinicalnotes/ValueSet/argonaut-clinical-note-type",
  "version": "3.0.1",
  "name": "ArgonautClinicalNotes",
  "title": "Argonaut DocumentReferences Type Value Set",
  "status": "draft",
  "date": "2018-11-08T20:29:00+00:00",
  "expansion": {
    "identifier": "urn:uuid:5fc51f5a-4dbc-44f8-8fe5-203d261222f0",
    "timestamp": "2018-11-13T02:55:48.405Z",
    "parameter": [
      {
        "name": "context",
        "valueString": "DocumentReference.type"
      },
      {
        "name": "contextDirection",
        "valueString": "outgoing"
      }
    ],
    "contains": [
      {
        "system": "http://loinc.org",
        "code": "18842-5",
        "display": "Discharge Summary"
      },
      {
        "system": "http://loinc.org",
        "code": "11488-4",
        "display": "Consultation Note"
      },
      {
        "system": "http://loinc.org",
        "code": "34117-2",
        "display": "History & Physical Note"
      },
      {
        "system": "http://loinc.org",
        "code": "11506-3",
        "display": "Progress Note"
      },
      {
        "system": "http://loinc.org",
        "code": "28570-0",
        "display": "Procedures Note"
      }
    ]
  }
}
~~~



---

File: repos/HL7_SLASH_US-Core/input/includes/note-and-report-types-scenario3.md


A Client is only interested in retrieving notes by class (Note, DocumentReference.class is updated to DocumentReference.category in FHIR R4).  The Server responds with the single category of 'Clinical Notes':

**Request for DocumentReference note categories**

~~~
GET [base]/ValueSet/$expand?context=http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference#DocumentReference.category&contextDirection=outgoing
~~~

**Response**

~~~
HTTP/1.1 200 OK
[other headers]
~~~

**Response body**

~~~
{
  "resourceType": "ValueSet",
  "id": "scenario3-Server-documentreference-category",
  "url": "http://fhir.org/guides/argonaut-clinicalnotes/ValueSet/documentreference-category",
  "version": "3.0.1",
  "name": "ArgonautDocumentReferenceCategoryCodes",
  "title": "Argonaut DocumentReference Category Codes",
  "status": "draft",
  "date": "2018-11-08T20:29:00+00:00",
  "expansion": {
    "identifier": "urn:uuid:5fc51f5a-4dbc-44f8-8fe5-203d261222f0",
    "timestamp": "2018-11-13T02:55:48.405Z",
    "parameter": [{
        "name": "context",
        "valueString": "DocumentReference.class"
      },
      {
        "name": "contextDirection",
        "valueString": "outgoing"
      }
    ],
    "contains": [{
        "system": "http://fhir.org/guides/argonaut-clinicalnotes/CodeSystem/documentreference-category",
        "code": "clinical-note",
        "display": "Clinical Note"
      }
    ]
  }
}
~~~


---

File: repos/HL7_SLASH_US-Core/input/includes/note-and-report-types-scenario4.md


A Client determines the category of reports they can access through DiagnosticReport. The Server responds with Radiology, Pathology, and Cardiology report categories:

**Request for DiagnosticReport report type**

~~~
GET [base]/ValueSet/$expand?context=http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note#DiagnosticReport.category&contextDirection=outgoing
~~~

**Response**

~~~
HTTP/1.1 200 OK
[other headers]
~~~

**Response body**

~~~
{
  "resourceType": "ValueSet",
  "id": "scenario4-Server-diagnosticreport-category",
  "url": "http://fhir.org/guides/argonaut-clinicalnotes/ValueSet/diagnosticreport-category",
  "version": "3.0.1",
  "name": "ArgonautDiagnosticReportCategoryCodes",
  "title": "Argonaut DiagnosticReport Category Value Set",
  "status": "draft",
  "date": "2018-11-08T20:29:00+00:00",
  "expansion": {
    "identifier": "urn:uuid:5fc51f5a-4dbc-44f8-8fe5-203d261222f0",
    "timestamp": "2018-11-13T02:55:48.405Z",
    "parameter": [
      {
        "name": "context",
        "valueString": "DiagnosticReport.category"
      },
      {
        "name": "contextDirection",
        "valueString": "outgoing"
      }
    ],
    "contains": [
      {
        "system": "http://loinc.org",
        "code": "LP29684-5",
        "display": "Radiology"
      },
      {
        "system": "http://loinc.org",
        "code": "LP29708-2",
        "display": "Cardiology"
      },
      {
        "system": "http://loinc.org",
        "code": "LP7839-6",
        "display": "Pathology"
      }
    ]
  }
}
~~~


---

File: repos/HL7_SLASH_US-Core/input/includes/obs_cat_guidance.md

- {{include.recommendation}} The `Observation.category` element provides an efficient way of restricting search on observations to a given context such as {{include.category | append: ' observations'}}. Example searches are shown in the [Quick Start](#search) section below. However, Clients need to understand that data categorization is somewhat subjective. The categorization applied by the source may not align with the Client's expectations. Clients may find it more useful to use queries based on a specific code or set of codes or to perform additional Client-side filtering of query results.


---

File: repos/HL7_SLASH_US-Core/input/includes/observation_guidance_1.md


<!-- 
include parameters:
category (optional)
example1 (optional) 
example2 (optional)
recommendation (optional - extra recommendation inserted after first sentence in obs_cat_guidance.md)
example usage:
{% raw %} 
{% include observation_guidance_1.md category="laboratory" example1=" such as 'chemistry'" example2=" (for example, a 24-Hour Urine Collection test)" recommendation="Server **SHOULD** use [Observation Category Codes] if applicable." %}
{% endraw %} -->

{% include obs_cat_guidance.md -%}
{% include additional-codings.md %}
* Systems **SHOULD** support `Observation.effectivePeriod` to accurately represent measurements over time {{include.example2}}.
{% include DAR-exception.md %}
* See the [General Guidance] page for further guidance on SNOMED and UCUM.
* See the [LOINC scale type to FHIR data type mapping] for guidance on which `Observation.value[x]` data type to use based on the LOINC Type of Scale.

{% include link-list.md %}


---

File: repos/HL7_SLASH_US-Core/input/includes/observation-quickstart1.md

<!--format of include file 
include parameters:
system-category (optional)
category (required)
up to three LOINCs (1 or 3 required)

{% raw %} {% include observation-quickstart1.md system="http://terminology.hl7.org/CodeSystem/observation-category" category="imaging" code1="2339-0" code2="25428-4" code3="2514-8" %} {% endraw %} -->



<!-- Source = /Users/ehaas/Documents/FHIR/US-Core/input/. This file is generated by SearchParameterMakerR4.ipynb Do not edit directly. -->{% include quickstart-intro.md %}

#### Mandatory Search Parameters:

The following search parameters and search parameter combinations SHALL be supported:

1. **SHALL** support searching using the combination of the **[`patient`](SearchParameter-us-core-observation-patient.html)** and **[`category`](SearchParameter-us-core-observation-category.html)** search parameters:

    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory`

    Example:
    
      1. GET [base]/Observation?patient=1134281&amp;amp;category={% if include.system %}{{include.system }}\|{% endif %}{{include.category | default: &amp;#39;[category]&amp;#39;}}

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and a category code = `laboratory` ([how to search by reference] and [how to search by token])

1. **SHALL** support searching using the combination of the **[`patient`](SearchParameter-us-core-observation-patient.html)** and **[`code`](SearchParameter-us-core-observation-code.html)** search parameters:
    - including optional support for *OR* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)

    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    Example:
    
      1. GET [base]/Observation?patient=1134281&amp;amp;code=http://loinc.org\|{{include.code1 | default: &#39;[code]&#39;}}
      {% if include.code2 %}2. GET [base]/Observation?patient=1134281&amp;amp;code=http://loinc.org\|{{include.code1 | default: &#39;[code]&#39;}},http://loinc.org\|{{include.code2 | default: &#39;[code]&#39;}},http://loinc.org\|{{include.code3 | default: &#39;[code]&#39;}}{% endif %}

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and observation code(s).  SHOULD support search by multiple report codes. The Observation `code` parameter searches `Observation.code only. ([how to search by reference] and [how to search by token])

1. **SHALL** support searching using the combination of the **[`patient`](SearchParameter-us-core-observation-patient.html)** and **[`category`](SearchParameter-us-core-observation-category.html)** and **[`date`](SearchParameter-us-core-observation-date.html)** search parameters:
    - including support for these `date` comparators: `gt,lt,ge,le`
    - including optional support for *AND* search on `date` (e.g.`date=[date]&date=[date]]&...`)

    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]Observation?patient=555580&amp;category={% if include.system %}{{include.system }}\|{% endif %}{{include.category | default: &#39;[category]&#39;}}&amp;date=ge2018-03-14T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and date and a category code = `laboratory` ([how to search by reference] and [how to search by token] and [how to search by date])


#### Optional Search Parameters:

The following search parameter combinations **SHOULD** be supported:

1. **SHOULD** support searching using the combination of the **[`patient`](SearchParameter-us-core-observation-patient.html)** and **[`category`](SearchParameter-us-core-observation-category.html)** and **[`status`](SearchParameter-us-core-observation-status.html)** search parameters:
    - including support for *OR* search on `status` (e.g.`status={system|}[code],{system|}[code],...`)

    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory&status={system|}[code]{,{system|}[code],...}`

    Example:
    
      1. GET [base]/Observation?patient=1134281&amp;category={% if include.system %}{{include.system }}\|{% endif %}{{include.category | default: &#39;[category]&#39;}}&amp;status=final

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and category = `laboratory` and status ([how to search by reference] and [how to search by token])

1. **SHOULD** support searching using the combination of the **[`patient`](SearchParameter-us-core-observation-patient.html)** and **[`category`](SearchParameter-us-core-observation-category.html)** and **[`_lastUpdated`](SearchParameter-us-core-observation-lastupdated.html)** search parameters:
    - including support for these `_lastUpdated` comparators: `gt,lt,ge,le`
    - including optional support for *AND* search on `_lastUpdated` (e.g.`_lastUpdated=[date]&_lastUpdated=[date]]&...`)

    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]Observation?patient=555580&amp;{% if include.system %}{{include.system }}\|{% endif %}{{include.category | default: &#39;[category]&#39;}}&amp;_lastUpdated=ge2024-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and category and _lastUpdated. See the US Core General Guidance page for [Searching Using lastUpdated]. ([how to search by reference] and [how to search by token] and [how to search by date])

1. **SHOULD** support searching using the combination of the **[`patient`](SearchParameter-us-core-observation-patient.html)** and **[`code`](SearchParameter-us-core-observation-code.html)** and **[`date`](SearchParameter-us-core-observation-date.html)** search parameters:
    - including optional support for *OR* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)
    - including support for these `date` comparators: `gt,lt,ge,le`
    - including optional support for *AND* search on `date` (e.g.`date=[date]&date=[date]]&...`)

    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]Observation?patient=555580&amp;code=http://loinc.org\|{{include.code1 | default: &#39;[code]&#39;}}&amp;date=ge2019-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and date and report code(s).  SHOULD support search by multiple report codes. ([how to search by reference] and [how to search by token] and [how to search by date])

{% include link-list.md %}

---

File: repos/HL7_SLASH_US-Core/input/includes/page-link-list.md

[Table of Contents]: toc.html
[Home]: index.html
[Conformance]: conformance.html
[General Requirements]: general-requirements.html
[Must Support]: must-support.html
[Observation Summary Table]: observation-summary.html
[SMART on FHIR Obligations and Capabilities]: scopes.html
[Guidance]: guidance.html
[USCDI]: uscdi.html
[General Guidance]: general-guidance.html
[Clinical Notes]: clinical-notes.html
[Medication List]: medication-list.html
[Basic Provenance]: basic-provenance.html
[Using Provenance To Target Resource Elements]: element-level-provenance.html
[Screening and Assessments]: screening-and-assessments.html
[Changes Between Versions]: changes-between-versions.html
[Future of US Core]: future-of-US-core.html
[Writing Vital Signs]: vitals-write.html
[Profiles and Extensions]: profiles-and-extensions.html
[Capability Statements]: capability-statements.html
[Search Parameters and Operations]: search-parameters-and-operations.html
[Terminology]: terminology.html
[Security]: security.html
[Examples]: examples.html
[Downloads]: downloads.html
[Change Log]: changes.html
[US Core ImplementationGuide Resource]: ImplementationGuide-hl7.fhir.us.core.html
[Artifacts Summary]: artifacts.html
[US Core Client CapabilityStatement]: CapabilityStatement-us-core-client.html
[US Core Client CapabilityStatement - Testing]: CapabilityStatement-us-core-client-testing.html
[US Core Client CapabilityStatement - XML Representation]: CapabilityStatement-us-core-client.xml.html
[US Core Client CapabilityStatement - JSON Representation]: CapabilityStatement-us-core-client.json.html
[US Core Client CapabilityStatement - TTL Representation]: CapabilityStatement-us-core-client.ttl.html
[US Core Server CapabilityStatement]: CapabilityStatement-us-core-server.html
[US Core Server CapabilityStatement - Testing]: CapabilityStatement-us-core-server-testing.html
[US Core Server CapabilityStatement - XML Representation]: CapabilityStatement-us-core-server.xml.html
[US Core Server CapabilityStatement - JSON Representation]: CapabilityStatement-us-core-server.json.html
[US Core Server CapabilityStatement - TTL Representation]: CapabilityStatement-us-core-server.ttl.html
[US Core Fetch DocumentReference]: OperationDefinition-docref.html
[US Core Fetch DocumentReference - Testing]: OperationDefinition-docref-testing.html
[US Core Fetch DocumentReference - XML Representation]: OperationDefinition-docref.xml.html
[US Core Fetch DocumentReference - JSON Representation]: OperationDefinition-docref.json.html
[US Core Fetch DocumentReference - TTL Representation]: OperationDefinition-docref.ttl.html
[USCoreAllergyintoleranceClinicalStatus]: SearchParameter-us-core-allergyintolerance-clinical-status.html
[USCoreAllergyintoleranceClinicalStatus - Testing]: SearchParameter-us-core-allergyintolerance-clinical-status-testing.html
[USCoreAllergyintoleranceClinicalStatus - XML Representation]: SearchParameter-us-core-allergyintolerance-clinical-status.xml.html
[USCoreAllergyintoleranceClinicalStatus - JSON Representation]: SearchParameter-us-core-allergyintolerance-clinical-status.json.html
[USCoreAllergyintoleranceClinicalStatus - TTL Representation]: SearchParameter-us-core-allergyintolerance-clinical-status.ttl.html
[USCoreAllergyintolerancePatient]: SearchParameter-us-core-allergyintolerance-patient.html
[USCoreAllergyintolerancePatient - Testing]: SearchParameter-us-core-allergyintolerance-patient-testing.html
[USCoreAllergyintolerancePatient - XML Representation]: SearchParameter-us-core-allergyintolerance-patient.xml.html
[USCoreAllergyintolerancePatient - JSON Representation]: SearchParameter-us-core-allergyintolerance-patient.json.html
[USCoreAllergyintolerancePatient - TTL Representation]: SearchParameter-us-core-allergyintolerance-patient.ttl.html
[USCoreCareplanCategory]: SearchParameter-us-core-careplan-category.html
[USCoreCareplanCategory - Testing]: SearchParameter-us-core-careplan-category-testing.html
[USCoreCareplanCategory - XML Representation]: SearchParameter-us-core-careplan-category.xml.html
[USCoreCareplanCategory - JSON Representation]: SearchParameter-us-core-careplan-category.json.html
[USCoreCareplanCategory - TTL Representation]: SearchParameter-us-core-careplan-category.ttl.html
[USCoreCareplanDate]: SearchParameter-us-core-careplan-date.html
[USCoreCareplanDate - Testing]: SearchParameter-us-core-careplan-date-testing.html
[USCoreCareplanDate - XML Representation]: SearchParameter-us-core-careplan-date.xml.html
[USCoreCareplanDate - JSON Representation]: SearchParameter-us-core-careplan-date.json.html
[USCoreCareplanDate - TTL Representation]: SearchParameter-us-core-careplan-date.ttl.html
[USCoreCareplanPatient]: SearchParameter-us-core-careplan-patient.html
[USCoreCareplanPatient - Testing]: SearchParameter-us-core-careplan-patient-testing.html
[USCoreCareplanPatient - XML Representation]: SearchParameter-us-core-careplan-patient.xml.html
[USCoreCareplanPatient - JSON Representation]: SearchParameter-us-core-careplan-patient.json.html
[USCoreCareplanPatient - TTL Representation]: SearchParameter-us-core-careplan-patient.ttl.html
[USCoreCareplanStatus]: SearchParameter-us-core-careplan-status.html
[USCoreCareplanStatus - Testing]: SearchParameter-us-core-careplan-status-testing.html
[USCoreCareplanStatus - XML Representation]: SearchParameter-us-core-careplan-status.xml.html
[USCoreCareplanStatus - JSON Representation]: SearchParameter-us-core-careplan-status.json.html
[USCoreCareplanStatus - TTL Representation]: SearchParameter-us-core-careplan-status.ttl.html
[USCoreCareteamPatient]: SearchParameter-us-core-careteam-patient.html
[USCoreCareteamPatient - Testing]: SearchParameter-us-core-careteam-patient-testing.html
[USCoreCareteamPatient - XML Representation]: SearchParameter-us-core-careteam-patient.xml.html
[USCoreCareteamPatient - JSON Representation]: SearchParameter-us-core-careteam-patient.json.html
[USCoreCareteamPatient - TTL Representation]: SearchParameter-us-core-careteam-patient.ttl.html
[USCoreCareTeamRole]: SearchParameter-us-core-careteam-role.html
[USCoreCareTeamRole - Testing]: SearchParameter-us-core-careteam-role-testing.html
[USCoreCareTeamRole - XML Representation]: SearchParameter-us-core-careteam-role.xml.html
[USCoreCareTeamRole - JSON Representation]: SearchParameter-us-core-careteam-role.json.html
[USCoreCareTeamRole - TTL Representation]: SearchParameter-us-core-careteam-role.ttl.html
[USCoreCareteamStatus]: SearchParameter-us-core-careteam-status.html
[USCoreCareteamStatus - Testing]: SearchParameter-us-core-careteam-status-testing.html
[USCoreCareteamStatus - XML Representation]: SearchParameter-us-core-careteam-status.xml.html
[USCoreCareteamStatus - JSON Representation]: SearchParameter-us-core-careteam-status.json.html
[USCoreCareteamStatus - TTL Representation]: SearchParameter-us-core-careteam-status.ttl.html
[USCoreConditionAbatementDate]: SearchParameter-us-core-condition-abatement-date.html
[USCoreConditionAbatementDate - Testing]: SearchParameter-us-core-condition-abatement-date-testing.html
[USCoreConditionAbatementDate - XML Representation]: SearchParameter-us-core-condition-abatement-date.xml.html
[USCoreConditionAbatementDate - JSON Representation]: SearchParameter-us-core-condition-abatement-date.json.html
[USCoreConditionAbatementDate - TTL Representation]: SearchParameter-us-core-condition-abatement-date.ttl.html
[USCoreConditionAssertedDate]: SearchParameter-us-core-condition-asserted-date.html
[USCoreConditionAssertedDate - Testing]: SearchParameter-us-core-condition-asserted-date-testing.html
[USCoreConditionAssertedDate - XML Representation]: SearchParameter-us-core-condition-asserted-date.xml.html
[USCoreConditionAssertedDate - JSON Representation]: SearchParameter-us-core-condition-asserted-date.json.html
[USCoreConditionAssertedDate - TTL Representation]: SearchParameter-us-core-condition-asserted-date.ttl.html
[USCoreConditionCategory]: SearchParameter-us-core-condition-category.html
[USCoreConditionCategory - Testing]: SearchParameter-us-core-condition-category-testing.html
[USCoreConditionCategory - XML Representation]: SearchParameter-us-core-condition-category.xml.html
[USCoreConditionCategory - JSON Representation]: SearchParameter-us-core-condition-category.json.html
[USCoreConditionCategory - TTL Representation]: SearchParameter-us-core-condition-category.ttl.html
[USCoreConditionClinicalStatus]: SearchParameter-us-core-condition-clinical-status.html
[USCoreConditionClinicalStatus - Testing]: SearchParameter-us-core-condition-clinical-status-testing.html
[USCoreConditionClinicalStatus - XML Representation]: SearchParameter-us-core-condition-clinical-status.xml.html
[USCoreConditionClinicalStatus - JSON Representation]: SearchParameter-us-core-condition-clinical-status.json.html
[USCoreConditionClinicalStatus - TTL Representation]: SearchParameter-us-core-condition-clinical-status.ttl.html
[USCoreConditionCode]: SearchParameter-us-core-condition-code.html
[USCoreConditionCode - Testing]: SearchParameter-us-core-condition-code-testing.html
[USCoreConditionCode - XML Representation]: SearchParameter-us-core-condition-code.xml.html
[USCoreConditionCode - JSON Representation]: SearchParameter-us-core-condition-code.json.html
[USCoreConditionCode - TTL Representation]: SearchParameter-us-core-condition-code.ttl.html
[USCoreConditionEncounter]: SearchParameter-us-core-condition-encounter.html
[USCoreConditionEncounter - Testing]: SearchParameter-us-core-condition-encounter-testing.html
[USCoreConditionEncounter - XML Representation]: SearchParameter-us-core-condition-encounter.xml.html
[USCoreConditionEncounter - JSON Representation]: SearchParameter-us-core-condition-encounter.json.html
[USCoreConditionEncounter - TTL Representation]: SearchParameter-us-core-condition-encounter.ttl.html
[USCoreConditionLastUpdated]: SearchParameter-us-core-condition-lastupdated.html
[USCoreConditionLastUpdated - Testing]: SearchParameter-us-core-condition-lastupdated-testing.html
[USCoreConditionLastUpdated - XML Representation]: SearchParameter-us-core-condition-lastupdated.xml.html
[USCoreConditionLastUpdated - JSON Representation]: SearchParameter-us-core-condition-lastupdated.json.html
[USCoreConditionLastUpdated - TTL Representation]: SearchParameter-us-core-condition-lastupdated.ttl.html
[USCoreConditionOnsetDate]: SearchParameter-us-core-condition-onset-date.html
[USCoreConditionOnsetDate - Testing]: SearchParameter-us-core-condition-onset-date-testing.html
[USCoreConditionOnsetDate - XML Representation]: SearchParameter-us-core-condition-onset-date.xml.html
[USCoreConditionOnsetDate - JSON Representation]: SearchParameter-us-core-condition-onset-date.json.html
[USCoreConditionOnsetDate - TTL Representation]: SearchParameter-us-core-condition-onset-date.ttl.html
[USCoreConditionPatient]: SearchParameter-us-core-condition-patient.html
[USCoreConditionPatient - Testing]: SearchParameter-us-core-condition-patient-testing.html
[USCoreConditionPatient - XML Representation]: SearchParameter-us-core-condition-patient.xml.html
[USCoreConditionPatient - JSON Representation]: SearchParameter-us-core-condition-patient.json.html
[USCoreConditionPatient - TTL Representation]: SearchParameter-us-core-condition-patient.ttl.html
[USCoreConditionRecordedDate]: SearchParameter-us-core-condition-recorded-date.html
[USCoreConditionRecordedDate - Testing]: SearchParameter-us-core-condition-recorded-date-testing.html
[USCoreConditionRecordedDate - XML Representation]: SearchParameter-us-core-condition-recorded-date.xml.html
[USCoreConditionRecordedDate - JSON Representation]: SearchParameter-us-core-condition-recorded-date.json.html
[USCoreConditionRecordedDate - TTL Representation]: SearchParameter-us-core-condition-recorded-date.ttl.html
[USCoreCoveragePatient]: SearchParameter-us-core-coverage-patient.html
[USCoreCoveragePatient - Testing]: SearchParameter-us-core-coverage-patient-testing.html
[USCoreCoveragePatient - XML Representation]: SearchParameter-us-core-coverage-patient.xml.html
[USCoreCoveragePatient - JSON Representation]: SearchParameter-us-core-coverage-patient.json.html
[USCoreCoveragePatient - TTL Representation]: SearchParameter-us-core-coverage-patient.ttl.html
[USCoreDevicePatient]: SearchParameter-us-core-device-patient.html
[USCoreDevicePatient - Testing]: SearchParameter-us-core-device-patient-testing.html
[USCoreDevicePatient - XML Representation]: SearchParameter-us-core-device-patient.xml.html
[USCoreDevicePatient - JSON Representation]: SearchParameter-us-core-device-patient.json.html
[USCoreDevicePatient - TTL Representation]: SearchParameter-us-core-device-patient.ttl.html
[USCoreDeviceStatus]: SearchParameter-us-core-device-status.html
[USCoreDeviceStatus - Testing]: SearchParameter-us-core-device-status-testing.html
[USCoreDeviceStatus - XML Representation]: SearchParameter-us-core-device-status.xml.html
[USCoreDeviceStatus - JSON Representation]: SearchParameter-us-core-device-status.json.html
[USCoreDeviceStatus - TTL Representation]: SearchParameter-us-core-device-status.ttl.html
[USCoreDeviceType]: SearchParameter-us-core-device-type.html
[USCoreDeviceType - Testing]: SearchParameter-us-core-device-type-testing.html
[USCoreDeviceType - XML Representation]: SearchParameter-us-core-device-type.xml.html
[USCoreDeviceType - JSON Representation]: SearchParameter-us-core-device-type.json.html
[USCoreDeviceType - TTL Representation]: SearchParameter-us-core-device-type.ttl.html
[USCoreDiagnosticreportCategory]: SearchParameter-us-core-diagnosticreport-category.html
[USCoreDiagnosticreportCategory - Testing]: SearchParameter-us-core-diagnosticreport-category-testing.html
[USCoreDiagnosticreportCategory - XML Representation]: SearchParameter-us-core-diagnosticreport-category.xml.html
[USCoreDiagnosticreportCategory - JSON Representation]: SearchParameter-us-core-diagnosticreport-category.json.html
[USCoreDiagnosticreportCategory - TTL Representation]: SearchParameter-us-core-diagnosticreport-category.ttl.html
[USCoreDiagnosticreportCode]: SearchParameter-us-core-diagnosticreport-code.html
[USCoreDiagnosticreportCode - Testing]: SearchParameter-us-core-diagnosticreport-code-testing.html
[USCoreDiagnosticreportCode - XML Representation]: SearchParameter-us-core-diagnosticreport-code.xml.html
[USCoreDiagnosticreportCode - JSON Representation]: SearchParameter-us-core-diagnosticreport-code.json.html
[USCoreDiagnosticreportCode - TTL Representation]: SearchParameter-us-core-diagnosticreport-code.ttl.html
[USCoreDiagnosticreportDate]: SearchParameter-us-core-diagnosticreport-date.html
[USCoreDiagnosticreportDate - Testing]: SearchParameter-us-core-diagnosticreport-date-testing.html
[USCoreDiagnosticreportDate - XML Representation]: SearchParameter-us-core-diagnosticreport-date.xml.html
[USCoreDiagnosticreportDate - JSON Representation]: SearchParameter-us-core-diagnosticreport-date.json.html
[USCoreDiagnosticreportDate - TTL Representation]: SearchParameter-us-core-diagnosticreport-date.ttl.html
[USCoreDiagnosticreportLastUpdated]: SearchParameter-us-core-diagnosticreport-lastupdated.html
[USCoreDiagnosticreportLastUpdated - Testing]: SearchParameter-us-core-diagnosticreport-lastupdated-testing.html
[USCoreDiagnosticreportLastUpdated - XML Representation]: SearchParameter-us-core-diagnosticreport-lastupdated.xml.html
[USCoreDiagnosticreportLastUpdated - JSON Representation]: SearchParameter-us-core-diagnosticreport-lastupdated.json.html
[USCoreDiagnosticreportLastUpdated - TTL Representation]: SearchParameter-us-core-diagnosticreport-lastupdated.ttl.html
[USCoreDiagnosticreportPatient]: SearchParameter-us-core-diagnosticreport-patient.html
[USCoreDiagnosticreportPatient - Testing]: SearchParameter-us-core-diagnosticreport-patient-testing.html
[USCoreDiagnosticreportPatient - XML Representation]: SearchParameter-us-core-diagnosticreport-patient.xml.html
[USCoreDiagnosticreportPatient - JSON Representation]: SearchParameter-us-core-diagnosticreport-patient.json.html
[USCoreDiagnosticreportPatient - TTL Representation]: SearchParameter-us-core-diagnosticreport-patient.ttl.html
[USCoreDiagnosticreportStatus]: SearchParameter-us-core-diagnosticreport-status.html
[USCoreDiagnosticreportStatus - Testing]: SearchParameter-us-core-diagnosticreport-status-testing.html
[USCoreDiagnosticreportStatus - XML Representation]: SearchParameter-us-core-diagnosticreport-status.xml.html
[USCoreDiagnosticreportStatus - JSON Representation]: SearchParameter-us-core-diagnosticreport-status.json.html
[USCoreDiagnosticreportStatus - TTL Representation]: SearchParameter-us-core-diagnosticreport-status.ttl.html
[USCoreDocumentreferenceCategory]: SearchParameter-us-core-documentreference-category.html
[USCoreDocumentreferenceCategory - Testing]: SearchParameter-us-core-documentreference-category-testing.html
[USCoreDocumentreferenceCategory - XML Representation]: SearchParameter-us-core-documentreference-category.xml.html
[USCoreDocumentreferenceCategory - JSON Representation]: SearchParameter-us-core-documentreference-category.json.html
[USCoreDocumentreferenceCategory - TTL Representation]: SearchParameter-us-core-documentreference-category.ttl.html
[USCoreDocumentreferenceDate]: SearchParameter-us-core-documentreference-date.html
[USCoreDocumentreferenceDate - Testing]: SearchParameter-us-core-documentreference-date-testing.html
[USCoreDocumentreferenceDate - XML Representation]: SearchParameter-us-core-documentreference-date.xml.html
[USCoreDocumentreferenceDate - JSON Representation]: SearchParameter-us-core-documentreference-date.json.html
[USCoreDocumentreferenceDate - TTL Representation]: SearchParameter-us-core-documentreference-date.ttl.html
[USCoreDocumentreferenceId]: SearchParameter-us-core-documentreference-id.html
[USCoreDocumentreferenceId - Testing]: SearchParameter-us-core-documentreference-id-testing.html
[USCoreDocumentreferenceId - XML Representation]: SearchParameter-us-core-documentreference-id.xml.html
[USCoreDocumentreferenceId - JSON Representation]: SearchParameter-us-core-documentreference-id.json.html
[USCoreDocumentreferenceId - TTL Representation]: SearchParameter-us-core-documentreference-id.ttl.html
[USCoreDocumentreferencePatient]: SearchParameter-us-core-documentreference-patient.html
[USCoreDocumentreferencePatient - Testing]: SearchParameter-us-core-documentreference-patient-testing.html
[USCoreDocumentreferencePatient - XML Representation]: SearchParameter-us-core-documentreference-patient.xml.html
[USCoreDocumentreferencePatient - JSON Representation]: SearchParameter-us-core-documentreference-patient.json.html
[USCoreDocumentreferencePatient - TTL Representation]: SearchParameter-us-core-documentreference-patient.ttl.html
[USCoreDocumentreferencePeriod]: SearchParameter-us-core-documentreference-period.html
[USCoreDocumentreferencePeriod - Testing]: SearchParameter-us-core-documentreference-period-testing.html
[USCoreDocumentreferencePeriod - XML Representation]: SearchParameter-us-core-documentreference-period.xml.html
[USCoreDocumentreferencePeriod - JSON Representation]: SearchParameter-us-core-documentreference-period.json.html
[USCoreDocumentreferencePeriod - TTL Representation]: SearchParameter-us-core-documentreference-period.ttl.html
[USCoreDocumentreferenceStatus]: SearchParameter-us-core-documentreference-status.html
[USCoreDocumentreferenceStatus - Testing]: SearchParameter-us-core-documentreference-status-testing.html
[USCoreDocumentreferenceStatus - XML Representation]: SearchParameter-us-core-documentreference-status.xml.html
[USCoreDocumentreferenceStatus - JSON Representation]: SearchParameter-us-core-documentreference-status.json.html
[USCoreDocumentreferenceStatus - TTL Representation]: SearchParameter-us-core-documentreference-status.ttl.html
[USCoreDocumentreferenceType]: SearchParameter-us-core-documentreference-type.html
[USCoreDocumentreferenceType - Testing]: SearchParameter-us-core-documentreference-type-testing.html
[USCoreDocumentreferenceType - XML Representation]: SearchParameter-us-core-documentreference-type.xml.html
[USCoreDocumentreferenceType - JSON Representation]: SearchParameter-us-core-documentreference-type.json.html
[USCoreDocumentreferenceType - TTL Representation]: SearchParameter-us-core-documentreference-type.ttl.html
[USCoreEncounterClass]: SearchParameter-us-core-encounter-class.html
[USCoreEncounterClass - Testing]: SearchParameter-us-core-encounter-class-testing.html
[USCoreEncounterClass - XML Representation]: SearchParameter-us-core-encounter-class.xml.html
[USCoreEncounterClass - JSON Representation]: SearchParameter-us-core-encounter-class.json.html
[USCoreEncounterClass - TTL Representation]: SearchParameter-us-core-encounter-class.ttl.html
[USCoreEncounterDate]: SearchParameter-us-core-encounter-date.html
[USCoreEncounterDate - Testing]: SearchParameter-us-core-encounter-date-testing.html
[USCoreEncounterDate - XML Representation]: SearchParameter-us-core-encounter-date.xml.html
[USCoreEncounterDate - JSON Representation]: SearchParameter-us-core-encounter-date.json.html
[USCoreEncounterDate - TTL Representation]: SearchParameter-us-core-encounter-date.ttl.html
[USCoreEncounterDischargeDisposition]: SearchParameter-us-core-encounter-discharge-disposition.html
[USCoreEncounterDischargeDisposition - Testing]: SearchParameter-us-core-encounter-discharge-disposition-testing.html
[USCoreEncounterDischargeDisposition - XML Representation]: SearchParameter-us-core-encounter-discharge-disposition.xml.html
[USCoreEncounterDischargeDisposition - JSON Representation]: SearchParameter-us-core-encounter-discharge-disposition.json.html
[USCoreEncounterDischargeDisposition - TTL Representation]: SearchParameter-us-core-encounter-discharge-disposition.ttl.html
[USCoreEncounterId]: SearchParameter-us-core-encounter-id.html
[USCoreEncounterId - Testing]: SearchParameter-us-core-encounter-id-testing.html
[USCoreEncounterId - XML Representation]: SearchParameter-us-core-encounter-id.xml.html
[USCoreEncounterId - JSON Representation]: SearchParameter-us-core-encounter-id.json.html
[USCoreEncounterId - TTL Representation]: SearchParameter-us-core-encounter-id.ttl.html
[USCoreEncounterIdentifier]: SearchParameter-us-core-encounter-identifier.html
[USCoreEncounterIdentifier - Testing]: SearchParameter-us-core-encounter-identifier-testing.html
[USCoreEncounterIdentifier - XML Representation]: SearchParameter-us-core-encounter-identifier.xml.html
[USCoreEncounterIdentifier - JSON Representation]: SearchParameter-us-core-encounter-identifier.json.html
[USCoreEncounterIdentifier - TTL Representation]: SearchParameter-us-core-encounter-identifier.ttl.html
[USCoreEncounterLastUpdated]: SearchParameter-us-core-encounter-lastupdated.html
[USCoreEncounterLastUpdated - Testing]: SearchParameter-us-core-encounter-lastupdated-testing.html
[USCoreEncounterLastUpdated - XML Representation]: SearchParameter-us-core-encounter-lastupdated.xml.html
[USCoreEncounterLastUpdated - JSON Representation]: SearchParameter-us-core-encounter-lastupdated.json.html
[USCoreEncounterLastUpdated - TTL Representation]: SearchParameter-us-core-encounter-lastupdated.ttl.html
[USCoreEncounterLocation]: SearchParameter-us-core-encounter-location.html
[USCoreEncounterLocation - Testing]: SearchParameter-us-core-encounter-location-testing.html
[USCoreEncounterLocation - XML Representation]: SearchParameter-us-core-encounter-location.xml.html
[USCoreEncounterLocation - JSON Representation]: SearchParameter-us-core-encounter-location.json.html
[USCoreEncounterLocation - TTL Representation]: SearchParameter-us-core-encounter-location.ttl.html
[USCoreEncounterPatient]: SearchParameter-us-core-encounter-patient.html
[USCoreEncounterPatient - Testing]: SearchParameter-us-core-encounter-patient-testing.html
[USCoreEncounterPatient - XML Representation]: SearchParameter-us-core-encounter-patient.xml.html
[USCoreEncounterPatient - JSON Representation]: SearchParameter-us-core-encounter-patient.json.html
[USCoreEncounterPatient - TTL Representation]: SearchParameter-us-core-encounter-patient.ttl.html
[USCoreEncounterStatus]: SearchParameter-us-core-encounter-status.html
[USCoreEncounterStatus - Testing]: SearchParameter-us-core-encounter-status-testing.html
[USCoreEncounterStatus - XML Representation]: SearchParameter-us-core-encounter-status.xml.html
[USCoreEncounterStatus - JSON Representation]: SearchParameter-us-core-encounter-status.json.html
[USCoreEncounterStatus - TTL Representation]: SearchParameter-us-core-encounter-status.ttl.html
[USCoreEncounterType]: SearchParameter-us-core-encounter-type.html
[USCoreEncounterType - Testing]: SearchParameter-us-core-encounter-type-testing.html
[USCoreEncounterType - XML Representation]: SearchParameter-us-core-encounter-type.xml.html
[USCoreEncounterType - JSON Representation]: SearchParameter-us-core-encounter-type.json.html
[USCoreEncounterType - TTL Representation]: SearchParameter-us-core-encounter-type.ttl.html
[USCoreEthnicity]: SearchParameter-us-core-ethnicity.html
[USCoreEthnicity - Testing]: SearchParameter-us-core-ethnicity-testing.html
[USCoreEthnicity - XML Representation]: SearchParameter-us-core-ethnicity.xml.html
[USCoreEthnicity - JSON Representation]: SearchParameter-us-core-ethnicity.json.html
[USCoreEthnicity - TTL Representation]: SearchParameter-us-core-ethnicity.ttl.html
[USCoreGoalDescription]: SearchParameter-us-core-goal-description.html
[USCoreGoalDescription - Testing]: SearchParameter-us-core-goal-description-testing.html
[USCoreGoalDescription - XML Representation]: SearchParameter-us-core-goal-description.xml.html
[USCoreGoalDescription - JSON Representation]: SearchParameter-us-core-goal-description.json.html
[USCoreGoalDescription - TTL Representation]: SearchParameter-us-core-goal-description.ttl.html
[USCoreGoalLifecycleStatus]: SearchParameter-us-core-goal-lifecycle-status.html
[USCoreGoalLifecycleStatus - Testing]: SearchParameter-us-core-goal-lifecycle-status-testing.html
[USCoreGoalLifecycleStatus - XML Representation]: SearchParameter-us-core-goal-lifecycle-status.xml.html
[USCoreGoalLifecycleStatus - JSON Representation]: SearchParameter-us-core-goal-lifecycle-status.json.html
[USCoreGoalLifecycleStatus - TTL Representation]: SearchParameter-us-core-goal-lifecycle-status.ttl.html
[USCoreGoalPatient]: SearchParameter-us-core-goal-patient.html
[USCoreGoalPatient - Testing]: SearchParameter-us-core-goal-patient-testing.html
[USCoreGoalPatient - XML Representation]: SearchParameter-us-core-goal-patient.xml.html
[USCoreGoalPatient - JSON Representation]: SearchParameter-us-core-goal-patient.json.html
[USCoreGoalPatient - TTL Representation]: SearchParameter-us-core-goal-patient.ttl.html
[USCoreGoalTargetDate]: SearchParameter-us-core-goal-target-date.html
[USCoreGoalTargetDate - Testing]: SearchParameter-us-core-goal-target-date-testing.html
[USCoreGoalTargetDate - XML Representation]: SearchParameter-us-core-goal-target-date.xml.html
[USCoreGoalTargetDate - JSON Representation]: SearchParameter-us-core-goal-target-date.json.html
[USCoreGoalTargetDate - TTL Representation]: SearchParameter-us-core-goal-target-date.ttl.html
[USCoreImmunizationDate]: SearchParameter-us-core-immunization-date.html
[USCoreImmunizationDate - Testing]: SearchParameter-us-core-immunization-date-testing.html
[USCoreImmunizationDate - XML Representation]: SearchParameter-us-core-immunization-date.xml.html
[USCoreImmunizationDate - JSON Representation]: SearchParameter-us-core-immunization-date.json.html
[USCoreImmunizationDate - TTL Representation]: SearchParameter-us-core-immunization-date.ttl.html
[USCoreImmunizationPatient]: SearchParameter-us-core-immunization-patient.html
[USCoreImmunizationPatient - Testing]: SearchParameter-us-core-immunization-patient-testing.html
[USCoreImmunizationPatient - XML Representation]: SearchParameter-us-core-immunization-patient.xml.html
[USCoreImmunizationPatient - JSON Representation]: SearchParameter-us-core-immunization-patient.json.html
[USCoreImmunizationPatient - TTL Representation]: SearchParameter-us-core-immunization-patient.ttl.html
[USCoreImmunizationStatus]: SearchParameter-us-core-immunization-status.html
[USCoreImmunizationStatus - Testing]: SearchParameter-us-core-immunization-status-testing.html
[USCoreImmunizationStatus - XML Representation]: SearchParameter-us-core-immunization-status.xml.html
[USCoreImmunizationStatus - JSON Representation]: SearchParameter-us-core-immunization-status.json.html
[USCoreImmunizationStatus - TTL Representation]: SearchParameter-us-core-immunization-status.ttl.html
[USCoreLocationAddress]: SearchParameter-us-core-location-address.html
[USCoreLocationAddress - Testing]: SearchParameter-us-core-location-address-testing.html
[USCoreLocationAddress - XML Representation]: SearchParameter-us-core-location-address.xml.html
[USCoreLocationAddress - JSON Representation]: SearchParameter-us-core-location-address.json.html
[USCoreLocationAddress - TTL Representation]: SearchParameter-us-core-location-address.ttl.html
[USCoreLocationAddressCity]: SearchParameter-us-core-location-address-city.html
[USCoreLocationAddressCity - Testing]: SearchParameter-us-core-location-address-city-testing.html
[USCoreLocationAddressCity - XML Representation]: SearchParameter-us-core-location-address-city.xml.html
[USCoreLocationAddressCity - JSON Representation]: SearchParameter-us-core-location-address-city.json.html
[USCoreLocationAddressCity - TTL Representation]: SearchParameter-us-core-location-address-city.ttl.html
[USCoreLocationAddressPostalcode]: SearchParameter-us-core-location-address-postalcode.html
[USCoreLocationAddressPostalcode - Testing]: SearchParameter-us-core-location-address-postalcode-testing.html
[USCoreLocationAddressPostalcode - XML Representation]: SearchParameter-us-core-location-address-postalcode.xml.html
[USCoreLocationAddressPostalcode - JSON Representation]: SearchParameter-us-core-location-address-postalcode.json.html
[USCoreLocationAddressPostalcode - TTL Representation]: SearchParameter-us-core-location-address-postalcode.ttl.html
[USCoreLocationAddressState]: SearchParameter-us-core-location-address-state.html
[USCoreLocationAddressState - Testing]: SearchParameter-us-core-location-address-state-testing.html
[USCoreLocationAddressState - XML Representation]: SearchParameter-us-core-location-address-state.xml.html
[USCoreLocationAddressState - JSON Representation]: SearchParameter-us-core-location-address-state.json.html
[USCoreLocationAddressState - TTL Representation]: SearchParameter-us-core-location-address-state.ttl.html
[USCoreLocationName]: SearchParameter-us-core-location-name.html
[USCoreLocationName - Testing]: SearchParameter-us-core-location-name-testing.html
[USCoreLocationName - XML Representation]: SearchParameter-us-core-location-name.xml.html
[USCoreLocationName - JSON Representation]: SearchParameter-us-core-location-name.json.html
[USCoreLocationName - TTL Representation]: SearchParameter-us-core-location-name.ttl.html
[USCoreMedicationdispensePatient]: SearchParameter-us-core-medicationdispense-patient.html
[USCoreMedicationdispensePatient - Testing]: SearchParameter-us-core-medicationdispense-patient-testing.html
[USCoreMedicationdispensePatient - XML Representation]: SearchParameter-us-core-medicationdispense-patient.xml.html
[USCoreMedicationdispensePatient - JSON Representation]: SearchParameter-us-core-medicationdispense-patient.json.html
[USCoreMedicationdispensePatient - TTL Representation]: SearchParameter-us-core-medicationdispense-patient.ttl.html
[USCoreMedicationdispenseStatus]: SearchParameter-us-core-medicationdispense-status.html
[USCoreMedicationdispenseStatus - Testing]: SearchParameter-us-core-medicationdispense-status-testing.html
[USCoreMedicationdispenseStatus - XML Representation]: SearchParameter-us-core-medicationdispense-status.xml.html
[USCoreMedicationdispenseStatus - JSON Representation]: SearchParameter-us-core-medicationdispense-status.json.html
[USCoreMedicationdispenseStatus - TTL Representation]: SearchParameter-us-core-medicationdispense-status.ttl.html
[USCoreMedicationdispenseType]: SearchParameter-us-core-medicationdispense-type.html
[USCoreMedicationdispenseType - Testing]: SearchParameter-us-core-medicationdispense-type-testing.html
[USCoreMedicationdispenseType - XML Representation]: SearchParameter-us-core-medicationdispense-type.xml.html
[USCoreMedicationdispenseType - JSON Representation]: SearchParameter-us-core-medicationdispense-type.json.html
[USCoreMedicationdispenseType - TTL Representation]: SearchParameter-us-core-medicationdispense-type.ttl.html
[USCoreMedicationrequestAuthoredon]: SearchParameter-us-core-medicationrequest-authoredon.html
[USCoreMedicationrequestAuthoredon - Testing]: SearchParameter-us-core-medicationrequest-authoredon-testing.html
[USCoreMedicationrequestAuthoredon - XML Representation]: SearchParameter-us-core-medicationrequest-authoredon.xml.html
[USCoreMedicationrequestAuthoredon - JSON Representation]: SearchParameter-us-core-medicationrequest-authoredon.json.html
[USCoreMedicationrequestAuthoredon - TTL Representation]: SearchParameter-us-core-medicationrequest-authoredon.ttl.html
[USCoreMedicationrequestEncounter]: SearchParameter-us-core-medicationrequest-encounter.html
[USCoreMedicationrequestEncounter - Testing]: SearchParameter-us-core-medicationrequest-encounter-testing.html
[USCoreMedicationrequestEncounter - XML Representation]: SearchParameter-us-core-medicationrequest-encounter.xml.html
[USCoreMedicationrequestEncounter - JSON Representation]: SearchParameter-us-core-medicationrequest-encounter.json.html
[USCoreMedicationrequestEncounter - TTL Representation]: SearchParameter-us-core-medicationrequest-encounter.ttl.html
[USCoreMedicationrequestIntent]: SearchParameter-us-core-medicationrequest-intent.html
[USCoreMedicationrequestIntent - Testing]: SearchParameter-us-core-medicationrequest-intent-testing.html
[USCoreMedicationrequestIntent - XML Representation]: SearchParameter-us-core-medicationrequest-intent.xml.html
[USCoreMedicationrequestIntent - JSON Representation]: SearchParameter-us-core-medicationrequest-intent.json.html
[USCoreMedicationrequestIntent - TTL Representation]: SearchParameter-us-core-medicationrequest-intent.ttl.html
[USCoreMedicationrequestPatient]: SearchParameter-us-core-medicationrequest-patient.html
[USCoreMedicationrequestPatient - Testing]: SearchParameter-us-core-medicationrequest-patient-testing.html
[USCoreMedicationrequestPatient - XML Representation]: SearchParameter-us-core-medicationrequest-patient.xml.html
[USCoreMedicationrequestPatient - JSON Representation]: SearchParameter-us-core-medicationrequest-patient.json.html
[USCoreMedicationrequestPatient - TTL Representation]: SearchParameter-us-core-medicationrequest-patient.ttl.html
[USCoreMedicationrequestStatus]: SearchParameter-us-core-medicationrequest-status.html
[USCoreMedicationrequestStatus - Testing]: SearchParameter-us-core-medicationrequest-status-testing.html
[USCoreMedicationrequestStatus - XML Representation]: SearchParameter-us-core-medicationrequest-status.xml.html
[USCoreMedicationrequestStatus - JSON Representation]: SearchParameter-us-core-medicationrequest-status.json.html
[USCoreMedicationrequestStatus - TTL Representation]: SearchParameter-us-core-medicationrequest-status.ttl.html
[USCoreObservationCategory]: SearchParameter-us-core-observation-category.html
[USCoreObservationCategory - Testing]: SearchParameter-us-core-observation-category-testing.html
[USCoreObservationCategory - XML Representation]: SearchParameter-us-core-observation-category.xml.html
[USCoreObservationCategory - JSON Representation]: SearchParameter-us-core-observation-category.json.html
[USCoreObservationCategory - TTL Representation]: SearchParameter-us-core-observation-category.ttl.html
[USCoreObservationCode]: SearchParameter-us-core-observation-code.html
[USCoreObservationCode - Testing]: SearchParameter-us-core-observation-code-testing.html
[USCoreObservationCode - XML Representation]: SearchParameter-us-core-observation-code.xml.html
[USCoreObservationCode - JSON Representation]: SearchParameter-us-core-observation-code.json.html
[USCoreObservationCode - TTL Representation]: SearchParameter-us-core-observation-code.ttl.html
[USCoreObservationDate]: SearchParameter-us-core-observation-date.html
[USCoreObservationDate - Testing]: SearchParameter-us-core-observation-date-testing.html
[USCoreObservationDate - XML Representation]: SearchParameter-us-core-observation-date.xml.html
[USCoreObservationDate - JSON Representation]: SearchParameter-us-core-observation-date.json.html
[USCoreObservationDate - TTL Representation]: SearchParameter-us-core-observation-date.ttl.html
[USCoreObservationLastUpdated]: SearchParameter-us-core-observation-lastupdated.html
[USCoreObservationLastUpdated - Testing]: SearchParameter-us-core-observation-lastupdated-testing.html
[USCoreObservationLastUpdated - XML Representation]: SearchParameter-us-core-observation-lastupdated.xml.html
[USCoreObservationLastUpdated - JSON Representation]: SearchParameter-us-core-observation-lastupdated.json.html
[USCoreObservationLastUpdated - TTL Representation]: SearchParameter-us-core-observation-lastupdated.ttl.html
[USCoreObservationPatient]: SearchParameter-us-core-observation-patient.html
[USCoreObservationPatient - Testing]: SearchParameter-us-core-observation-patient-testing.html
[USCoreObservationPatient - XML Representation]: SearchParameter-us-core-observation-patient.xml.html
[USCoreObservationPatient - JSON Representation]: SearchParameter-us-core-observation-patient.json.html
[USCoreObservationPatient - TTL Representation]: SearchParameter-us-core-observation-patient.ttl.html
[USCoreObservationStatus]: SearchParameter-us-core-observation-status.html
[USCoreObservationStatus - Testing]: SearchParameter-us-core-observation-status-testing.html
[USCoreObservationStatus - XML Representation]: SearchParameter-us-core-observation-status.xml.html
[USCoreObservationStatus - JSON Representation]: SearchParameter-us-core-observation-status.json.html
[USCoreObservationStatus - TTL Representation]: SearchParameter-us-core-observation-status.ttl.html
[USCoreOrganizationAddress]: SearchParameter-us-core-organization-address.html
[USCoreOrganizationAddress - Testing]: SearchParameter-us-core-organization-address-testing.html
[USCoreOrganizationAddress - XML Representation]: SearchParameter-us-core-organization-address.xml.html
[USCoreOrganizationAddress - JSON Representation]: SearchParameter-us-core-organization-address.json.html
[USCoreOrganizationAddress - TTL Representation]: SearchParameter-us-core-organization-address.ttl.html
[USCoreOrganizationName]: SearchParameter-us-core-organization-name.html
[USCoreOrganizationName - Testing]: SearchParameter-us-core-organization-name-testing.html
[USCoreOrganizationName - XML Representation]: SearchParameter-us-core-organization-name.xml.html
[USCoreOrganizationName - JSON Representation]: SearchParameter-us-core-organization-name.json.html
[USCoreOrganizationName - TTL Representation]: SearchParameter-us-core-organization-name.ttl.html
[USCorePatientBirthdate]: SearchParameter-us-core-patient-birthdate.html
[USCorePatientBirthdate - Testing]: SearchParameter-us-core-patient-birthdate-testing.html
[USCorePatientBirthdate - XML Representation]: SearchParameter-us-core-patient-birthdate.xml.html
[USCorePatientBirthdate - JSON Representation]: SearchParameter-us-core-patient-birthdate.json.html
[USCorePatientBirthdate - TTL Representation]: SearchParameter-us-core-patient-birthdate.ttl.html
[USCorePatientDeathDate]: SearchParameter-us-core-patient-death-date.html
[USCorePatientDeathDate - Testing]: SearchParameter-us-core-patient-death-date-testing.html
[USCorePatientDeathDate - XML Representation]: SearchParameter-us-core-patient-death-date.xml.html
[USCorePatientDeathDate - JSON Representation]: SearchParameter-us-core-patient-death-date.json.html
[USCorePatientDeathDate - TTL Representation]: SearchParameter-us-core-patient-death-date.ttl.html
[USCorePatientFamily]: SearchParameter-us-core-patient-family.html
[USCorePatientFamily - Testing]: SearchParameter-us-core-patient-family-testing.html
[USCorePatientFamily - XML Representation]: SearchParameter-us-core-patient-family.xml.html
[USCorePatientFamily - JSON Representation]: SearchParameter-us-core-patient-family.json.html
[USCorePatientFamily - TTL Representation]: SearchParameter-us-core-patient-family.ttl.html
[USCorePatientGender]: SearchParameter-us-core-patient-gender.html
[USCorePatientGender - Testing]: SearchParameter-us-core-patient-gender-testing.html
[USCorePatientGender - XML Representation]: SearchParameter-us-core-patient-gender.xml.html
[USCorePatientGender - JSON Representation]: SearchParameter-us-core-patient-gender.json.html
[USCorePatientGender - TTL Representation]: SearchParameter-us-core-patient-gender.ttl.html
[USCorePatientGenderIdentity]: SearchParameter-us-core-patient-gender-identity.html
[USCorePatientGenderIdentity - Testing]: SearchParameter-us-core-patient-gender-identity-testing.html
[USCorePatientGenderIdentity - XML Representation]: SearchParameter-us-core-patient-gender-identity.xml.html
[USCorePatientGenderIdentity - JSON Representation]: SearchParameter-us-core-patient-gender-identity.json.html
[USCorePatientGenderIdentity - TTL Representation]: SearchParameter-us-core-patient-gender-identity.ttl.html
[USCorePatientGiven]: SearchParameter-us-core-patient-given.html
[USCorePatientGiven - Testing]: SearchParameter-us-core-patient-given-testing.html
[USCorePatientGiven - XML Representation]: SearchParameter-us-core-patient-given.xml.html
[USCorePatientGiven - JSON Representation]: SearchParameter-us-core-patient-given.json.html
[USCorePatientGiven - TTL Representation]: SearchParameter-us-core-patient-given.ttl.html
[USCorePatientId]: SearchParameter-us-core-patient-id.html
[USCorePatientId - Testing]: SearchParameter-us-core-patient-id-testing.html
[USCorePatientId - XML Representation]: SearchParameter-us-core-patient-id.xml.html
[USCorePatientId - JSON Representation]: SearchParameter-us-core-patient-id.json.html
[USCorePatientId - TTL Representation]: SearchParameter-us-core-patient-id.ttl.html
[USCorePatientIdentifier]: SearchParameter-us-core-patient-identifier.html
[USCorePatientIdentifier - Testing]: SearchParameter-us-core-patient-identifier-testing.html
[USCorePatientIdentifier - XML Representation]: SearchParameter-us-core-patient-identifier.xml.html
[USCorePatientIdentifier - JSON Representation]: SearchParameter-us-core-patient-identifier.json.html
[USCorePatientIdentifier - TTL Representation]: SearchParameter-us-core-patient-identifier.ttl.html
[USCorePatientName]: SearchParameter-us-core-patient-name.html
[USCorePatientName - Testing]: SearchParameter-us-core-patient-name-testing.html
[USCorePatientName - XML Representation]: SearchParameter-us-core-patient-name.xml.html
[USCorePatientName - JSON Representation]: SearchParameter-us-core-patient-name.json.html
[USCorePatientName - TTL Representation]: SearchParameter-us-core-patient-name.ttl.html
[USCorePractitionerId]: SearchParameter-us-core-practitioner-id.html
[USCorePractitionerId - Testing]: SearchParameter-us-core-practitioner-id-testing.html
[USCorePractitionerId - XML Representation]: SearchParameter-us-core-practitioner-id.xml.html
[USCorePractitionerId - JSON Representation]: SearchParameter-us-core-practitioner-id.json.html
[USCorePractitionerId - TTL Representation]: SearchParameter-us-core-practitioner-id.ttl.html
[USCorePractitionerIdentifier]: SearchParameter-us-core-practitioner-identifier.html
[USCorePractitionerIdentifier - Testing]: SearchParameter-us-core-practitioner-identifier-testing.html
[USCorePractitionerIdentifier - XML Representation]: SearchParameter-us-core-practitioner-identifier.xml.html
[USCorePractitionerIdentifier - JSON Representation]: SearchParameter-us-core-practitioner-identifier.json.html
[USCorePractitionerIdentifier - TTL Representation]: SearchParameter-us-core-practitioner-identifier.ttl.html
[USCorePractitionerName]: SearchParameter-us-core-practitioner-name.html
[USCorePractitionerName - Testing]: SearchParameter-us-core-practitioner-name-testing.html
[USCorePractitionerName - XML Representation]: SearchParameter-us-core-practitioner-name.xml.html
[USCorePractitionerName - JSON Representation]: SearchParameter-us-core-practitioner-name.json.html
[USCorePractitionerName - TTL Representation]: SearchParameter-us-core-practitioner-name.ttl.html
[USCorePractitionerrolePractitioner]: SearchParameter-us-core-practitionerrole-practitioner.html
[USCorePractitionerrolePractitioner - Testing]: SearchParameter-us-core-practitionerrole-practitioner-testing.html
[USCorePractitionerrolePractitioner - XML Representation]: SearchParameter-us-core-practitionerrole-practitioner.xml.html
[USCorePractitionerrolePractitioner - JSON Representation]: SearchParameter-us-core-practitionerrole-practitioner.json.html
[USCorePractitionerrolePractitioner - TTL Representation]: SearchParameter-us-core-practitionerrole-practitioner.ttl.html
[USCorePractitionerroleSpecialty]: SearchParameter-us-core-practitionerrole-specialty.html
[USCorePractitionerroleSpecialty - Testing]: SearchParameter-us-core-practitionerrole-specialty-testing.html
[USCorePractitionerroleSpecialty - XML Representation]: SearchParameter-us-core-practitionerrole-specialty.xml.html
[USCorePractitionerroleSpecialty - JSON Representation]: SearchParameter-us-core-practitionerrole-specialty.json.html
[USCorePractitionerroleSpecialty - TTL Representation]: SearchParameter-us-core-practitionerrole-specialty.ttl.html
[USCoreProcedureCode]: SearchParameter-us-core-procedure-code.html
[USCoreProcedureCode - Testing]: SearchParameter-us-core-procedure-code-testing.html
[USCoreProcedureCode - XML Representation]: SearchParameter-us-core-procedure-code.xml.html
[USCoreProcedureCode - JSON Representation]: SearchParameter-us-core-procedure-code.json.html
[USCoreProcedureCode - TTL Representation]: SearchParameter-us-core-procedure-code.ttl.html
[USCoreProcedureDate]: SearchParameter-us-core-procedure-date.html
[USCoreProcedureDate - Testing]: SearchParameter-us-core-procedure-date-testing.html
[USCoreProcedureDate - XML Representation]: SearchParameter-us-core-procedure-date.xml.html
[USCoreProcedureDate - JSON Representation]: SearchParameter-us-core-procedure-date.json.html
[USCoreProcedureDate - TTL Representation]: SearchParameter-us-core-procedure-date.ttl.html
[USCoreProcedurePatient]: SearchParameter-us-core-procedure-patient.html
[USCoreProcedurePatient - Testing]: SearchParameter-us-core-procedure-patient-testing.html
[USCoreProcedurePatient - XML Representation]: SearchParameter-us-core-procedure-patient.xml.html
[USCoreProcedurePatient - JSON Representation]: SearchParameter-us-core-procedure-patient.json.html
[USCoreProcedurePatient - TTL Representation]: SearchParameter-us-core-procedure-patient.ttl.html
[USCoreProcedureStatus]: SearchParameter-us-core-procedure-status.html
[USCoreProcedureStatus - Testing]: SearchParameter-us-core-procedure-status-testing.html
[USCoreProcedureStatus - XML Representation]: SearchParameter-us-core-procedure-status.xml.html
[USCoreProcedureStatus - JSON Representation]: SearchParameter-us-core-procedure-status.json.html
[USCoreProcedureStatus - TTL Representation]: SearchParameter-us-core-procedure-status.ttl.html
[USCoreQuestionnaireresponseAuthored]: SearchParameter-us-core-questionnaireresponse-authored.html
[USCoreQuestionnaireresponseAuthored - Testing]: SearchParameter-us-core-questionnaireresponse-authored-testing.html
[USCoreQuestionnaireresponseAuthored - XML Representation]: SearchParameter-us-core-questionnaireresponse-authored.xml.html
[USCoreQuestionnaireresponseAuthored - JSON Representation]: SearchParameter-us-core-questionnaireresponse-authored.json.html
[USCoreQuestionnaireresponseAuthored - TTL Representation]: SearchParameter-us-core-questionnaireresponse-authored.ttl.html
[USCoreQuestionnaireresponseId]: SearchParameter-us-core-questionnaireresponse-id.html
[USCoreQuestionnaireresponseId - Testing]: SearchParameter-us-core-questionnaireresponse-id-testing.html
[USCoreQuestionnaireresponseId - XML Representation]: SearchParameter-us-core-questionnaireresponse-id.xml.html
[USCoreQuestionnaireresponseId - JSON Representation]: SearchParameter-us-core-questionnaireresponse-id.json.html
[USCoreQuestionnaireresponseId - TTL Representation]: SearchParameter-us-core-questionnaireresponse-id.ttl.html
[USCoreQuestionnaireresponsePatient]: SearchParameter-us-core-questionnaireresponse-patient.html
[USCoreQuestionnaireresponsePatient - Testing]: SearchParameter-us-core-questionnaireresponse-patient-testing.html
[USCoreQuestionnaireresponsePatient - XML Representation]: SearchParameter-us-core-questionnaireresponse-patient.xml.html
[USCoreQuestionnaireresponsePatient - JSON Representation]: SearchParameter-us-core-questionnaireresponse-patient.json.html
[USCoreQuestionnaireresponsePatient - TTL Representation]: SearchParameter-us-core-questionnaireresponse-patient.ttl.html
[USCoreQuestionnaireresponseQuestionnaire]: SearchParameter-us-core-questionnaireresponse-questionnaire.html
[USCoreQuestionnaireresponseQuestionnaire - Testing]: SearchParameter-us-core-questionnaireresponse-questionnaire-testing.html
[USCoreQuestionnaireresponseQuestionnaire - XML Representation]: SearchParameter-us-core-questionnaireresponse-questionnaire.xml.html
[USCoreQuestionnaireresponseQuestionnaire - JSON Representation]: SearchParameter-us-core-questionnaireresponse-questionnaire.json.html
[USCoreQuestionnaireresponseQuestionnaire - TTL Representation]: SearchParameter-us-core-questionnaireresponse-questionnaire.ttl.html
[USCoreQuestionnaireresponseStatus]: SearchParameter-us-core-questionnaireresponse-status.html
[USCoreQuestionnaireresponseStatus - Testing]: SearchParameter-us-core-questionnaireresponse-status-testing.html
[USCoreQuestionnaireresponseStatus - XML Representation]: SearchParameter-us-core-questionnaireresponse-status.xml.html
[USCoreQuestionnaireresponseStatus - JSON Representation]: SearchParameter-us-core-questionnaireresponse-status.json.html
[USCoreQuestionnaireresponseStatus - TTL Representation]: SearchParameter-us-core-questionnaireresponse-status.ttl.html
[USCoreRace]: SearchParameter-us-core-race.html
[USCoreRace - Testing]: SearchParameter-us-core-race-testing.html
[USCoreRace - XML Representation]: SearchParameter-us-core-race.xml.html
[USCoreRace - JSON Representation]: SearchParameter-us-core-race.json.html
[USCoreRace - TTL Representation]: SearchParameter-us-core-race.ttl.html
[USCoreRelatedpersonId]: SearchParameter-us-core-relatedperson-id.html
[USCoreRelatedpersonId - Testing]: SearchParameter-us-core-relatedperson-id-testing.html
[USCoreRelatedpersonId - XML Representation]: SearchParameter-us-core-relatedperson-id.xml.html
[USCoreRelatedpersonId - JSON Representation]: SearchParameter-us-core-relatedperson-id.json.html
[USCoreRelatedpersonId - TTL Representation]: SearchParameter-us-core-relatedperson-id.ttl.html
[USCoreRelatedpersonName]: SearchParameter-us-core-relatedperson-name.html
[USCoreRelatedpersonName - Testing]: SearchParameter-us-core-relatedperson-name-testing.html
[USCoreRelatedpersonName - XML Representation]: SearchParameter-us-core-relatedperson-name.xml.html
[USCoreRelatedpersonName - JSON Representation]: SearchParameter-us-core-relatedperson-name.json.html
[USCoreRelatedpersonName - TTL Representation]: SearchParameter-us-core-relatedperson-name.ttl.html
[USCoreRelatedpersonPatient]: SearchParameter-us-core-relatedperson-patient.html
[USCoreRelatedpersonPatient - Testing]: SearchParameter-us-core-relatedperson-patient-testing.html
[USCoreRelatedpersonPatient - XML Representation]: SearchParameter-us-core-relatedperson-patient.xml.html
[USCoreRelatedpersonPatient - JSON Representation]: SearchParameter-us-core-relatedperson-patient.json.html
[USCoreRelatedpersonPatient - TTL Representation]: SearchParameter-us-core-relatedperson-patient.ttl.html
[USCoreServicerequestAuthored]: SearchParameter-us-core-servicerequest-authored.html
[USCoreServicerequestAuthored - Testing]: SearchParameter-us-core-servicerequest-authored-testing.html
[USCoreServicerequestAuthored - XML Representation]: SearchParameter-us-core-servicerequest-authored.xml.html
[USCoreServicerequestAuthored - JSON Representation]: SearchParameter-us-core-servicerequest-authored.json.html
[USCoreServicerequestAuthored - TTL Representation]: SearchParameter-us-core-servicerequest-authored.ttl.html
[USCoreServicerequestCategory]: SearchParameter-us-core-servicerequest-category.html
[USCoreServicerequestCategory - Testing]: SearchParameter-us-core-servicerequest-category-testing.html
[USCoreServicerequestCategory - XML Representation]: SearchParameter-us-core-servicerequest-category.xml.html
[USCoreServicerequestCategory - JSON Representation]: SearchParameter-us-core-servicerequest-category.json.html
[USCoreServicerequestCategory - TTL Representation]: SearchParameter-us-core-servicerequest-category.ttl.html
[USCoreServicerequestCode]: SearchParameter-us-core-servicerequest-code.html
[USCoreServicerequestCode - Testing]: SearchParameter-us-core-servicerequest-code-testing.html
[USCoreServicerequestCode - XML Representation]: SearchParameter-us-core-servicerequest-code.xml.html
[USCoreServicerequestCode - JSON Representation]: SearchParameter-us-core-servicerequest-code.json.html
[USCoreServicerequestCode - TTL Representation]: SearchParameter-us-core-servicerequest-code.ttl.html
[USCoreServicerequestId]: SearchParameter-us-core-servicerequest-id.html
[USCoreServicerequestId - Testing]: SearchParameter-us-core-servicerequest-id-testing.html
[USCoreServicerequestId - XML Representation]: SearchParameter-us-core-servicerequest-id.xml.html
[USCoreServicerequestId - JSON Representation]: SearchParameter-us-core-servicerequest-id.json.html
[USCoreServicerequestId - TTL Representation]: SearchParameter-us-core-servicerequest-id.ttl.html
[USCoreServicerequestPatient]: SearchParameter-us-core-servicerequest-patient.html
[USCoreServicerequestPatient - Testing]: SearchParameter-us-core-servicerequest-patient-testing.html
[USCoreServicerequestPatient - XML Representation]: SearchParameter-us-core-servicerequest-patient.xml.html
[USCoreServicerequestPatient - JSON Representation]: SearchParameter-us-core-servicerequest-patient.json.html
[USCoreServicerequestPatient - TTL Representation]: SearchParameter-us-core-servicerequest-patient.ttl.html
[USCoreServicerequestStatus]: SearchParameter-us-core-servicerequest-status.html
[USCoreServicerequestStatus - Testing]: SearchParameter-us-core-servicerequest-status-testing.html
[USCoreServicerequestStatus - XML Representation]: SearchParameter-us-core-servicerequest-status.xml.html
[USCoreServicerequestStatus - JSON Representation]: SearchParameter-us-core-servicerequest-status.json.html
[USCoreServicerequestStatus - TTL Representation]: SearchParameter-us-core-servicerequest-status.ttl.html
[USCoreSpecimenId]: SearchParameter-us-core-specimen-id.html
[USCoreSpecimenId - Testing]: SearchParameter-us-core-specimen-id-testing.html
[USCoreSpecimenId - XML Representation]: SearchParameter-us-core-specimen-id.xml.html
[USCoreSpecimenId - JSON Representation]: SearchParameter-us-core-specimen-id.json.html
[USCoreSpecimenId - TTL Representation]: SearchParameter-us-core-specimen-id.ttl.html
[USCoreSpecimenPatient]: SearchParameter-us-core-specimen-patient.html
[USCoreSpecimenPatient - Testing]: SearchParameter-us-core-specimen-patient-testing.html
[USCoreSpecimenPatient - XML Representation]: SearchParameter-us-core-specimen-patient.xml.html
[USCoreSpecimenPatient - JSON Representation]: SearchParameter-us-core-specimen-patient.json.html
[USCoreSpecimenPatient - TTL Representation]: SearchParameter-us-core-specimen-patient.ttl.html
[US Core ADI DocumentReference Profile]: StructureDefinition-us-core-adi-documentreference.html
[US Core ADI DocumentReference Profile - Definitions]: StructureDefinition-us-core-adi-documentreference-definitions.html
[US Core ADI DocumentReference Profile - Mappings]: StructureDefinition-us-core-adi-documentreference-mappings.html
[US Core ADI DocumentReference Profile - Testing]: StructureDefinition-us-core-adi-documentreference-testing.html
[US Core ADI DocumentReference Profile - Examples]: StructureDefinition-us-core-adi-documentreference-examples.html
[US Core ADI DocumentReference Profile - XML Representation]: StructureDefinition-us-core-adi-documentreference.profile.xml.html
[US Core ADI DocumentReference Profile - JSON Representation]: StructureDefinition-us-core-adi-documentreference.profile.json.html
[US Core ADI DocumentReference Profile - TTL Representation]: StructureDefinition-us-core-adi-documentreference.profile.ttl.html
[US Core AllergyIntolerance Profile]: StructureDefinition-us-core-allergyintolerance.html
[US Core AllergyIntolerance Profile - Definitions]: StructureDefinition-us-core-allergyintolerance-definitions.html
[US Core AllergyIntolerance Profile - Mappings]: StructureDefinition-us-core-allergyintolerance-mappings.html
[US Core AllergyIntolerance Profile - Testing]: StructureDefinition-us-core-allergyintolerance-testing.html
[US Core AllergyIntolerance Profile - Examples]: StructureDefinition-us-core-allergyintolerance-examples.html
[US Core AllergyIntolerance Profile - XML Representation]: StructureDefinition-us-core-allergyintolerance.profile.xml.html
[US Core AllergyIntolerance Profile - JSON Representation]: StructureDefinition-us-core-allergyintolerance.profile.json.html
[US Core AllergyIntolerance Profile - TTL Representation]: StructureDefinition-us-core-allergyintolerance.profile.ttl.html
[US Core Average Blood Pressure Profile]: StructureDefinition-us-core-average-blood-pressure.html
[US Core Average Blood Pressure Profile - Definitions]: StructureDefinition-us-core-average-blood-pressure-definitions.html
[US Core Average Blood Pressure Profile - Mappings]: StructureDefinition-us-core-average-blood-pressure-mappings.html
[US Core Average Blood Pressure Profile - Testing]: StructureDefinition-us-core-average-blood-pressure-testing.html
[US Core Average Blood Pressure Profile - Examples]: StructureDefinition-us-core-average-blood-pressure-examples.html
[US Core Average Blood Pressure Profile - XML Representation]: StructureDefinition-us-core-average-blood-pressure.profile.xml.html
[US Core Average Blood Pressure Profile - JSON Representation]: StructureDefinition-us-core-average-blood-pressure.profile.json.html
[US Core Average Blood Pressure Profile - TTL Representation]: StructureDefinition-us-core-average-blood-pressure.profile.ttl.html
[US Core Blood Pressure Profile]: StructureDefinition-us-core-blood-pressure.html
[US Core Blood Pressure Profile - Definitions]: StructureDefinition-us-core-blood-pressure-definitions.html
[US Core Blood Pressure Profile - Mappings]: StructureDefinition-us-core-blood-pressure-mappings.html
[US Core Blood Pressure Profile - Testing]: StructureDefinition-us-core-blood-pressure-testing.html
[US Core Blood Pressure Profile - Examples]: StructureDefinition-us-core-blood-pressure-examples.html
[US Core Blood Pressure Profile - XML Representation]: StructureDefinition-us-core-blood-pressure.profile.xml.html
[US Core Blood Pressure Profile - JSON Representation]: StructureDefinition-us-core-blood-pressure.profile.json.html
[US Core Blood Pressure Profile - TTL Representation]: StructureDefinition-us-core-blood-pressure.profile.ttl.html
[US Core BMI Profile]: StructureDefinition-us-core-bmi.html
[US Core BMI Profile - Definitions]: StructureDefinition-us-core-bmi-definitions.html
[US Core BMI Profile - Mappings]: StructureDefinition-us-core-bmi-mappings.html
[US Core BMI Profile - Testing]: StructureDefinition-us-core-bmi-testing.html
[US Core BMI Profile - Examples]: StructureDefinition-us-core-bmi-examples.html
[US Core BMI Profile - XML Representation]: StructureDefinition-us-core-bmi.profile.xml.html
[US Core BMI Profile - JSON Representation]: StructureDefinition-us-core-bmi.profile.json.html
[US Core BMI Profile - TTL Representation]: StructureDefinition-us-core-bmi.profile.ttl.html
[US Core Body Height Profile]: StructureDefinition-us-core-body-height.html
[US Core Body Height Profile - Definitions]: StructureDefinition-us-core-body-height-definitions.html
[US Core Body Height Profile - Mappings]: StructureDefinition-us-core-body-height-mappings.html
[US Core Body Height Profile - Testing]: StructureDefinition-us-core-body-height-testing.html
[US Core Body Height Profile - Examples]: StructureDefinition-us-core-body-height-examples.html
[US Core Body Height Profile - XML Representation]: StructureDefinition-us-core-body-height.profile.xml.html
[US Core Body Height Profile - JSON Representation]: StructureDefinition-us-core-body-height.profile.json.html
[US Core Body Height Profile - TTL Representation]: StructureDefinition-us-core-body-height.profile.ttl.html
[US Core Body Temperature Profile]: StructureDefinition-us-core-body-temperature.html
[US Core Body Temperature Profile - Definitions]: StructureDefinition-us-core-body-temperature-definitions.html
[US Core Body Temperature Profile - Mappings]: StructureDefinition-us-core-body-temperature-mappings.html
[US Core Body Temperature Profile - Testing]: StructureDefinition-us-core-body-temperature-testing.html
[US Core Body Temperature Profile - Examples]: StructureDefinition-us-core-body-temperature-examples.html
[US Core Body Temperature Profile - XML Representation]: StructureDefinition-us-core-body-temperature.profile.xml.html
[US Core Body Temperature Profile - JSON Representation]: StructureDefinition-us-core-body-temperature.profile.json.html
[US Core Body Temperature Profile - TTL Representation]: StructureDefinition-us-core-body-temperature.profile.ttl.html
[US Core Body Weight Profile]: StructureDefinition-us-core-body-weight.html
[US Core Body Weight Profile - Definitions]: StructureDefinition-us-core-body-weight-definitions.html
[US Core Body Weight Profile - Mappings]: StructureDefinition-us-core-body-weight-mappings.html
[US Core Body Weight Profile - Testing]: StructureDefinition-us-core-body-weight-testing.html
[US Core Body Weight Profile - Examples]: StructureDefinition-us-core-body-weight-examples.html
[US Core Body Weight Profile - XML Representation]: StructureDefinition-us-core-body-weight.profile.xml.html
[US Core Body Weight Profile - JSON Representation]: StructureDefinition-us-core-body-weight.profile.json.html
[US Core Body Weight Profile - TTL Representation]: StructureDefinition-us-core-body-weight.profile.ttl.html
[US Core Care Experience Preference Profile]: StructureDefinition-us-core-care-experience-preference.html
[US Core Care Experience Preference Profile - Definitions]: StructureDefinition-us-core-care-experience-preference-definitions.html
[US Core Care Experience Preference Profile - Mappings]: StructureDefinition-us-core-care-experience-preference-mappings.html
[US Core Care Experience Preference Profile - Testing]: StructureDefinition-us-core-care-experience-preference-testing.html
[US Core Care Experience Preference Profile - Examples]: StructureDefinition-us-core-care-experience-preference-examples.html
[US Core Care Experience Preference Profile - XML Representation]: StructureDefinition-us-core-care-experience-preference.profile.xml.html
[US Core Care Experience Preference Profile - JSON Representation]: StructureDefinition-us-core-care-experience-preference.profile.json.html
[US Core Care Experience Preference Profile - TTL Representation]: StructureDefinition-us-core-care-experience-preference.profile.ttl.html
[US Core CarePlan Profile]: StructureDefinition-us-core-careplan.html
[US Core CarePlan Profile - Definitions]: StructureDefinition-us-core-careplan-definitions.html
[US Core CarePlan Profile - Mappings]: StructureDefinition-us-core-careplan-mappings.html
[US Core CarePlan Profile - Testing]: StructureDefinition-us-core-careplan-testing.html
[US Core CarePlan Profile - Examples]: StructureDefinition-us-core-careplan-examples.html
[US Core CarePlan Profile - XML Representation]: StructureDefinition-us-core-careplan.profile.xml.html
[US Core CarePlan Profile - JSON Representation]: StructureDefinition-us-core-careplan.profile.json.html
[US Core CarePlan Profile - TTL Representation]: StructureDefinition-us-core-careplan.profile.ttl.html
[US Core CareTeam Profile]: StructureDefinition-us-core-careteam.html
[US Core CareTeam Profile - Definitions]: StructureDefinition-us-core-careteam-definitions.html
[US Core CareTeam Profile - Mappings]: StructureDefinition-us-core-careteam-mappings.html
[US Core CareTeam Profile - Testing]: StructureDefinition-us-core-careteam-testing.html
[US Core CareTeam Profile - Examples]: StructureDefinition-us-core-careteam-examples.html
[US Core CareTeam Profile - XML Representation]: StructureDefinition-us-core-careteam.profile.xml.html
[US Core CareTeam Profile - JSON Representation]: StructureDefinition-us-core-careteam.profile.json.html
[US Core CareTeam Profile - TTL Representation]: StructureDefinition-us-core-careteam.profile.ttl.html
[US Core Condition Encounter Diagnosis Profile]: StructureDefinition-us-core-condition-encounter-diagnosis.html
[US Core Condition Encounter Diagnosis Profile - Definitions]: StructureDefinition-us-core-condition-encounter-diagnosis-definitions.html
[US Core Condition Encounter Diagnosis Profile - Mappings]: StructureDefinition-us-core-condition-encounter-diagnosis-mappings.html
[US Core Condition Encounter Diagnosis Profile - Testing]: StructureDefinition-us-core-condition-encounter-diagnosis-testing.html
[US Core Condition Encounter Diagnosis Profile - Examples]: StructureDefinition-us-core-condition-encounter-diagnosis-examples.html
[US Core Condition Encounter Diagnosis Profile - XML Representation]: StructureDefinition-us-core-condition-encounter-diagnosis.profile.xml.html
[US Core Condition Encounter Diagnosis Profile - JSON Representation]: StructureDefinition-us-core-condition-encounter-diagnosis.profile.json.html
[US Core Condition Encounter Diagnosis Profile - TTL Representation]: StructureDefinition-us-core-condition-encounter-diagnosis.profile.ttl.html
[US Core Condition Problems and Health Concerns Profile]: StructureDefinition-us-core-condition-problems-health-concerns.html
[US Core Condition Problems and Health Concerns Profile - Definitions]: StructureDefinition-us-core-condition-problems-health-concerns-definitions.html
[US Core Condition Problems and Health Concerns Profile - Mappings]: StructureDefinition-us-core-condition-problems-health-concerns-mappings.html
[US Core Condition Problems and Health Concerns Profile - Testing]: StructureDefinition-us-core-condition-problems-health-concerns-testing.html
[US Core Condition Problems and Health Concerns Profile - Examples]: StructureDefinition-us-core-condition-problems-health-concerns-examples.html
[US Core Condition Problems and Health Concerns Profile - XML Representation]: StructureDefinition-us-core-condition-problems-health-concerns.profile.xml.html
[US Core Condition Problems and Health Concerns Profile - JSON Representation]: StructureDefinition-us-core-condition-problems-health-concerns.profile.json.html
[US Core Condition Problems and Health Concerns Profile - TTL Representation]: StructureDefinition-us-core-condition-problems-health-concerns.profile.ttl.html
[US Core Coverage Profile]: StructureDefinition-us-core-coverage.html
[US Core Coverage Profile - Definitions]: StructureDefinition-us-core-coverage-definitions.html
[US Core Coverage Profile - Mappings]: StructureDefinition-us-core-coverage-mappings.html
[US Core Coverage Profile - Testing]: StructureDefinition-us-core-coverage-testing.html
[US Core Coverage Profile - Examples]: StructureDefinition-us-core-coverage-examples.html
[US Core Coverage Profile - XML Representation]: StructureDefinition-us-core-coverage.profile.xml.html
[US Core Coverage Profile - JSON Representation]: StructureDefinition-us-core-coverage.profile.json.html
[US Core Coverage Profile - TTL Representation]: StructureDefinition-us-core-coverage.profile.ttl.html
[US Core DiagnosticReport Profile for Laboratory Results Reporting]: StructureDefinition-us-core-diagnosticreport-lab.html
[US Core DiagnosticReport Profile for Laboratory Results Reporting - Definitions]: StructureDefinition-us-core-diagnosticreport-lab-definitions.html
[US Core DiagnosticReport Profile for Laboratory Results Reporting - Mappings]: StructureDefinition-us-core-diagnosticreport-lab-mappings.html
[US Core DiagnosticReport Profile for Laboratory Results Reporting - Testing]: StructureDefinition-us-core-diagnosticreport-lab-testing.html
[US Core DiagnosticReport Profile for Laboratory Results Reporting - Examples]: StructureDefinition-us-core-diagnosticreport-lab-examples.html
[US Core DiagnosticReport Profile for Laboratory Results Reporting - XML Representation]: StructureDefinition-us-core-diagnosticreport-lab.profile.xml.html
[US Core DiagnosticReport Profile for Laboratory Results Reporting - JSON Representation]: StructureDefinition-us-core-diagnosticreport-lab.profile.json.html
[US Core DiagnosticReport Profile for Laboratory Results Reporting - TTL Representation]: StructureDefinition-us-core-diagnosticreport-lab.profile.ttl.html
[US Core DiagnosticReport Profile for Report and Note Exchange]: StructureDefinition-us-core-diagnosticreport-note.html
[US Core DiagnosticReport Profile for Report and Note Exchange - Definitions]: StructureDefinition-us-core-diagnosticreport-note-definitions.html
[US Core DiagnosticReport Profile for Report and Note Exchange - Mappings]: StructureDefinition-us-core-diagnosticreport-note-mappings.html
[US Core DiagnosticReport Profile for Report and Note Exchange - Testing]: StructureDefinition-us-core-diagnosticreport-note-testing.html
[US Core DiagnosticReport Profile for Report and Note Exchange - Examples]: StructureDefinition-us-core-diagnosticreport-note-examples.html
[US Core DiagnosticReport Profile for Report and Note Exchange - XML Representation]: StructureDefinition-us-core-diagnosticreport-note.profile.xml.html
[US Core DiagnosticReport Profile for Report and Note Exchange - JSON Representation]: StructureDefinition-us-core-diagnosticreport-note.profile.json.html
[US Core DiagnosticReport Profile for Report and Note Exchange - TTL Representation]: StructureDefinition-us-core-diagnosticreport-note.profile.ttl.html
[US Core DocumentReference Profile]: StructureDefinition-us-core-documentreference.html
[US Core DocumentReference Profile - Definitions]: StructureDefinition-us-core-documentreference-definitions.html
[US Core DocumentReference Profile - Mappings]: StructureDefinition-us-core-documentreference-mappings.html
[US Core DocumentReference Profile - Testing]: StructureDefinition-us-core-documentreference-testing.html
[US Core DocumentReference Profile - Examples]: StructureDefinition-us-core-documentreference-examples.html
[US Core DocumentReference Profile - XML Representation]: StructureDefinition-us-core-documentreference.profile.xml.html
[US Core DocumentReference Profile - JSON Representation]: StructureDefinition-us-core-documentreference.profile.json.html
[US Core DocumentReference Profile - TTL Representation]: StructureDefinition-us-core-documentreference.profile.ttl.html
[US Core Encounter Profile]: StructureDefinition-us-core-encounter.html
[US Core Encounter Profile - Definitions]: StructureDefinition-us-core-encounter-definitions.html
[US Core Encounter Profile - Mappings]: StructureDefinition-us-core-encounter-mappings.html
[US Core Encounter Profile - Testing]: StructureDefinition-us-core-encounter-testing.html
[US Core Encounter Profile - Examples]: StructureDefinition-us-core-encounter-examples.html
[US Core Encounter Profile - XML Representation]: StructureDefinition-us-core-encounter.profile.xml.html
[US Core Encounter Profile - JSON Representation]: StructureDefinition-us-core-encounter.profile.json.html
[US Core Encounter Profile - TTL Representation]: StructureDefinition-us-core-encounter.profile.ttl.html
[US Core Goal Profile]: StructureDefinition-us-core-goal.html
[US Core Goal Profile - Definitions]: StructureDefinition-us-core-goal-definitions.html
[US Core Goal Profile - Mappings]: StructureDefinition-us-core-goal-mappings.html
[US Core Goal Profile - Testing]: StructureDefinition-us-core-goal-testing.html
[US Core Goal Profile - Examples]: StructureDefinition-us-core-goal-examples.html
[US Core Goal Profile - XML Representation]: StructureDefinition-us-core-goal.profile.xml.html
[US Core Goal Profile - JSON Representation]: StructureDefinition-us-core-goal.profile.json.html
[US Core Goal Profile - TTL Representation]: StructureDefinition-us-core-goal.profile.ttl.html
[US Core Head Circumference Profile]: StructureDefinition-us-core-head-circumference.html
[US Core Head Circumference Profile - Definitions]: StructureDefinition-us-core-head-circumference-definitions.html
[US Core Head Circumference Profile - Mappings]: StructureDefinition-us-core-head-circumference-mappings.html
[US Core Head Circumference Profile - Testing]: StructureDefinition-us-core-head-circumference-testing.html
[US Core Head Circumference Profile - Examples]: StructureDefinition-us-core-head-circumference-examples.html
[US Core Head Circumference Profile - XML Representation]: StructureDefinition-us-core-head-circumference.profile.xml.html
[US Core Head Circumference Profile - JSON Representation]: StructureDefinition-us-core-head-circumference.profile.json.html
[US Core Head Circumference Profile - TTL Representation]: StructureDefinition-us-core-head-circumference.profile.ttl.html
[US Core Heart Rate Profile]: StructureDefinition-us-core-heart-rate.html
[US Core Heart Rate Profile - Definitions]: StructureDefinition-us-core-heart-rate-definitions.html
[US Core Heart Rate Profile - Mappings]: StructureDefinition-us-core-heart-rate-mappings.html
[US Core Heart Rate Profile - Testing]: StructureDefinition-us-core-heart-rate-testing.html
[US Core Heart Rate Profile - Examples]: StructureDefinition-us-core-heart-rate-examples.html
[US Core Heart Rate Profile - XML Representation]: StructureDefinition-us-core-heart-rate.profile.xml.html
[US Core Heart Rate Profile - JSON Representation]: StructureDefinition-us-core-heart-rate.profile.json.html
[US Core Heart Rate Profile - TTL Representation]: StructureDefinition-us-core-heart-rate.profile.ttl.html
[US Core Immunization Profile]: StructureDefinition-us-core-immunization.html
[US Core Immunization Profile - Definitions]: StructureDefinition-us-core-immunization-definitions.html
[US Core Immunization Profile - Mappings]: StructureDefinition-us-core-immunization-mappings.html
[US Core Immunization Profile - Testing]: StructureDefinition-us-core-immunization-testing.html
[US Core Immunization Profile - Examples]: StructureDefinition-us-core-immunization-examples.html
[US Core Immunization Profile - XML Representation]: StructureDefinition-us-core-immunization.profile.xml.html
[US Core Immunization Profile - JSON Representation]: StructureDefinition-us-core-immunization.profile.json.html
[US Core Immunization Profile - TTL Representation]: StructureDefinition-us-core-immunization.profile.ttl.html
[US Core Implantable Device Profile]: StructureDefinition-us-core-implantable-device.html
[US Core Implantable Device Profile - Definitions]: StructureDefinition-us-core-implantable-device-definitions.html
[US Core Implantable Device Profile - Mappings]: StructureDefinition-us-core-implantable-device-mappings.html
[US Core Implantable Device Profile - Testing]: StructureDefinition-us-core-implantable-device-testing.html
[US Core Implantable Device Profile - Examples]: StructureDefinition-us-core-implantable-device-examples.html
[US Core Implantable Device Profile - XML Representation]: StructureDefinition-us-core-implantable-device.profile.xml.html
[US Core Implantable Device Profile - JSON Representation]: StructureDefinition-us-core-implantable-device.profile.json.html
[US Core Implantable Device Profile - TTL Representation]: StructureDefinition-us-core-implantable-device.profile.ttl.html
[US Core Laboratory Result Observation Profile]: StructureDefinition-us-core-observation-lab.html
[US Core Laboratory Result Observation Profile - Definitions]: StructureDefinition-us-core-observation-lab-definitions.html
[US Core Laboratory Result Observation Profile - Mappings]: StructureDefinition-us-core-observation-lab-mappings.html
[US Core Laboratory Result Observation Profile - Testing]: StructureDefinition-us-core-observation-lab-testing.html
[US Core Laboratory Result Observation Profile - Examples]: StructureDefinition-us-core-observation-lab-examples.html
[US Core Laboratory Result Observation Profile - XML Representation]: StructureDefinition-us-core-observation-lab.profile.xml.html
[US Core Laboratory Result Observation Profile - JSON Representation]: StructureDefinition-us-core-observation-lab.profile.json.html
[US Core Laboratory Result Observation Profile - TTL Representation]: StructureDefinition-us-core-observation-lab.profile.ttl.html
[US Core Location Profile]: StructureDefinition-us-core-location.html
[US Core Location Profile - Definitions]: StructureDefinition-us-core-location-definitions.html
[US Core Location Profile - Mappings]: StructureDefinition-us-core-location-mappings.html
[US Core Location Profile - Testing]: StructureDefinition-us-core-location-testing.html
[US Core Location Profile - Examples]: StructureDefinition-us-core-location-examples.html
[US Core Location Profile - XML Representation]: StructureDefinition-us-core-location.profile.xml.html
[US Core Location Profile - JSON Representation]: StructureDefinition-us-core-location.profile.json.html
[US Core Location Profile - TTL Representation]: StructureDefinition-us-core-location.profile.ttl.html
[US Core Medication Profile]: StructureDefinition-us-core-medication.html
[US Core Medication Profile - Definitions]: StructureDefinition-us-core-medication-definitions.html
[US Core Medication Profile - Mappings]: StructureDefinition-us-core-medication-mappings.html
[US Core Medication Profile - Testing]: StructureDefinition-us-core-medication-testing.html
[US Core Medication Profile - Examples]: StructureDefinition-us-core-medication-examples.html
[US Core Medication Profile - XML Representation]: StructureDefinition-us-core-medication.profile.xml.html
[US Core Medication Profile - JSON Representation]: StructureDefinition-us-core-medication.profile.json.html
[US Core Medication Profile - TTL Representation]: StructureDefinition-us-core-medication.profile.ttl.html
[US Core MedicationDispense Profile]: StructureDefinition-us-core-medicationdispense.html
[US Core MedicationDispense Profile - Definitions]: StructureDefinition-us-core-medicationdispense-definitions.html
[US Core MedicationDispense Profile - Mappings]: StructureDefinition-us-core-medicationdispense-mappings.html
[US Core MedicationDispense Profile - Testing]: StructureDefinition-us-core-medicationdispense-testing.html
[US Core MedicationDispense Profile - Examples]: StructureDefinition-us-core-medicationdispense-examples.html
[US Core MedicationDispense Profile - XML Representation]: StructureDefinition-us-core-medicationdispense.profile.xml.html
[US Core MedicationDispense Profile - JSON Representation]: StructureDefinition-us-core-medicationdispense.profile.json.html
[US Core MedicationDispense Profile - TTL Representation]: StructureDefinition-us-core-medicationdispense.profile.ttl.html
[US Core MedicationRequest Profile]: StructureDefinition-us-core-medicationrequest.html
[US Core MedicationRequest Profile - Definitions]: StructureDefinition-us-core-medicationrequest-definitions.html
[US Core MedicationRequest Profile - Mappings]: StructureDefinition-us-core-medicationrequest-mappings.html
[US Core MedicationRequest Profile - Testing]: StructureDefinition-us-core-medicationrequest-testing.html
[US Core MedicationRequest Profile - Examples]: StructureDefinition-us-core-medicationrequest-examples.html
[US Core MedicationRequest Profile - XML Representation]: StructureDefinition-us-core-medicationrequest.profile.xml.html
[US Core MedicationRequest Profile - JSON Representation]: StructureDefinition-us-core-medicationrequest.profile.json.html
[US Core MedicationRequest Profile - TTL Representation]: StructureDefinition-us-core-medicationrequest.profile.ttl.html
[US Core Observation ADI Documentation Profile]: StructureDefinition-us-core-observation-adi-documentation.html
[US Core Observation ADI Documentation Profile - Definitions]: StructureDefinition-us-core-observation-adi-documentation-definitions.html
[US Core Observation ADI Documentation Profile - Mappings]: StructureDefinition-us-core-observation-adi-documentation-mappings.html
[US Core Observation ADI Documentation Profile - Testing]: StructureDefinition-us-core-observation-adi-documentation-testing.html
[US Core Observation ADI Documentation Profile - Examples]: StructureDefinition-us-core-observation-adi-documentation-examples.html
[US Core Observation ADI Documentation Profile - XML Representation]: StructureDefinition-us-core-observation-adi-documentation.profile.xml.html
[US Core Observation ADI Documentation Profile - JSON Representation]: StructureDefinition-us-core-observation-adi-documentation.profile.json.html
[US Core Observation ADI Documentation Profile - TTL Representation]: StructureDefinition-us-core-observation-adi-documentation.profile.ttl.html
[US Core Observation Clinical Result Profile]: StructureDefinition-us-core-observation-clinical-result.html
[US Core Observation Clinical Result Profile - Definitions]: StructureDefinition-us-core-observation-clinical-result-definitions.html
[US Core Observation Clinical Result Profile - Mappings]: StructureDefinition-us-core-observation-clinical-result-mappings.html
[US Core Observation Clinical Result Profile - Testing]: StructureDefinition-us-core-observation-clinical-result-testing.html
[US Core Observation Clinical Result Profile - Examples]: StructureDefinition-us-core-observation-clinical-result-examples.html
[US Core Observation Clinical Result Profile - XML Representation]: StructureDefinition-us-core-observation-clinical-result.profile.xml.html
[US Core Observation Clinical Result Profile - JSON Representation]: StructureDefinition-us-core-observation-clinical-result.profile.json.html
[US Core Observation Clinical Result Profile - TTL Representation]: StructureDefinition-us-core-observation-clinical-result.profile.ttl.html
[US Core Observation Occupation Profile]: StructureDefinition-us-core-observation-occupation.html
[US Core Observation Occupation Profile - Definitions]: StructureDefinition-us-core-observation-occupation-definitions.html
[US Core Observation Occupation Profile - Mappings]: StructureDefinition-us-core-observation-occupation-mappings.html
[US Core Observation Occupation Profile - Testing]: StructureDefinition-us-core-observation-occupation-testing.html
[US Core Observation Occupation Profile - Examples]: StructureDefinition-us-core-observation-occupation-examples.html
[US Core Observation Occupation Profile - XML Representation]: StructureDefinition-us-core-observation-occupation.profile.xml.html
[US Core Observation Occupation Profile - JSON Representation]: StructureDefinition-us-core-observation-occupation.profile.json.html
[US Core Observation Occupation Profile - TTL Representation]: StructureDefinition-us-core-observation-occupation.profile.ttl.html
[US Core Observation Pregnancy Intent Profile]: StructureDefinition-us-core-observation-pregnancyintent.html
[US Core Observation Pregnancy Intent Profile - Definitions]: StructureDefinition-us-core-observation-pregnancyintent-definitions.html
[US Core Observation Pregnancy Intent Profile - Mappings]: StructureDefinition-us-core-observation-pregnancyintent-mappings.html
[US Core Observation Pregnancy Intent Profile - Testing]: StructureDefinition-us-core-observation-pregnancyintent-testing.html
[US Core Observation Pregnancy Intent Profile - Examples]: StructureDefinition-us-core-observation-pregnancyintent-examples.html
[US Core Observation Pregnancy Intent Profile - XML Representation]: StructureDefinition-us-core-observation-pregnancyintent.profile.xml.html
[US Core Observation Pregnancy Intent Profile - JSON Representation]: StructureDefinition-us-core-observation-pregnancyintent.profile.json.html
[US Core Observation Pregnancy Intent Profile - TTL Representation]: StructureDefinition-us-core-observation-pregnancyintent.profile.ttl.html
[US Core Observation Pregnancy Status Profile]: StructureDefinition-us-core-observation-pregnancystatus.html
[US Core Observation Pregnancy Status Profile - Definitions]: StructureDefinition-us-core-observation-pregnancystatus-definitions.html
[US Core Observation Pregnancy Status Profile - Mappings]: StructureDefinition-us-core-observation-pregnancystatus-mappings.html
[US Core Observation Pregnancy Status Profile - Testing]: StructureDefinition-us-core-observation-pregnancystatus-testing.html
[US Core Observation Pregnancy Status Profile - Examples]: StructureDefinition-us-core-observation-pregnancystatus-examples.html
[US Core Observation Pregnancy Status Profile - XML Representation]: StructureDefinition-us-core-observation-pregnancystatus.profile.xml.html
[US Core Observation Pregnancy Status Profile - JSON Representation]: StructureDefinition-us-core-observation-pregnancystatus.profile.json.html
[US Core Observation Pregnancy Status Profile - TTL Representation]: StructureDefinition-us-core-observation-pregnancystatus.profile.ttl.html
[US Core Observation Screening Assessment Profile]: StructureDefinition-us-core-observation-screening-assessment.html
[US Core Observation Screening Assessment Profile - Definitions]: StructureDefinition-us-core-observation-screening-assessment-definitions.html
[US Core Observation Screening Assessment Profile - Mappings]: StructureDefinition-us-core-observation-screening-assessment-mappings.html
[US Core Observation Screening Assessment Profile - Testing]: StructureDefinition-us-core-observation-screening-assessment-testing.html
[US Core Observation Screening Assessment Profile - Examples]: StructureDefinition-us-core-observation-screening-assessment-examples.html
[US Core Observation Screening Assessment Profile - XML Representation]: StructureDefinition-us-core-observation-screening-assessment.profile.xml.html
[US Core Observation Screening Assessment Profile - JSON Representation]: StructureDefinition-us-core-observation-screening-assessment.profile.json.html
[US Core Observation Screening Assessment Profile - TTL Representation]: StructureDefinition-us-core-observation-screening-assessment.profile.ttl.html
[US Core Observation Sexual Orientation Profile]: StructureDefinition-us-core-observation-sexual-orientation.html
[US Core Observation Sexual Orientation Profile - Definitions]: StructureDefinition-us-core-observation-sexual-orientation-definitions.html
[US Core Observation Sexual Orientation Profile - Mappings]: StructureDefinition-us-core-observation-sexual-orientation-mappings.html
[US Core Observation Sexual Orientation Profile - Testing]: StructureDefinition-us-core-observation-sexual-orientation-testing.html
[US Core Observation Sexual Orientation Profile - Examples]: StructureDefinition-us-core-observation-sexual-orientation-examples.html
[US Core Observation Sexual Orientation Profile - XML Representation]: StructureDefinition-us-core-observation-sexual-orientation.profile.xml.html
[US Core Observation Sexual Orientation Profile - JSON Representation]: StructureDefinition-us-core-observation-sexual-orientation.profile.json.html
[US Core Observation Sexual Orientation Profile - TTL Representation]: StructureDefinition-us-core-observation-sexual-orientation.profile.ttl.html
[US Core Organization Profile]: StructureDefinition-us-core-organization.html
[US Core Organization Profile - Definitions]: StructureDefinition-us-core-organization-definitions.html
[US Core Organization Profile - Mappings]: StructureDefinition-us-core-organization-mappings.html
[US Core Organization Profile - Testing]: StructureDefinition-us-core-organization-testing.html
[US Core Organization Profile - Examples]: StructureDefinition-us-core-organization-examples.html
[US Core Organization Profile - XML Representation]: StructureDefinition-us-core-organization.profile.xml.html
[US Core Organization Profile - JSON Representation]: StructureDefinition-us-core-organization.profile.json.html
[US Core Organization Profile - TTL Representation]: StructureDefinition-us-core-organization.profile.ttl.html
[US Core Patient Profile]: StructureDefinition-us-core-patient.html
[US Core Patient Profile - Definitions]: StructureDefinition-us-core-patient-definitions.html
[US Core Patient Profile - Mappings]: StructureDefinition-us-core-patient-mappings.html
[US Core Patient Profile - Testing]: StructureDefinition-us-core-patient-testing.html
[US Core Patient Profile - Examples]: StructureDefinition-us-core-patient-examples.html
[US Core Patient Profile - XML Representation]: StructureDefinition-us-core-patient.profile.xml.html
[US Core Patient Profile - JSON Representation]: StructureDefinition-us-core-patient.profile.json.html
[US Core Patient Profile - TTL Representation]: StructureDefinition-us-core-patient.profile.ttl.html
[US Core Pediatric BMI for Age Observation Profile]: StructureDefinition-pediatric-bmi-for-age.html
[US Core Pediatric BMI for Age Observation Profile - Definitions]: StructureDefinition-pediatric-bmi-for-age-definitions.html
[US Core Pediatric BMI for Age Observation Profile - Mappings]: StructureDefinition-pediatric-bmi-for-age-mappings.html
[US Core Pediatric BMI for Age Observation Profile - Testing]: StructureDefinition-pediatric-bmi-for-age-testing.html
[US Core Pediatric BMI for Age Observation Profile - Examples]: StructureDefinition-pediatric-bmi-for-age-examples.html
[US Core Pediatric BMI for Age Observation Profile - XML Representation]: StructureDefinition-pediatric-bmi-for-age.profile.xml.html
[US Core Pediatric BMI for Age Observation Profile - JSON Representation]: StructureDefinition-pediatric-bmi-for-age.profile.json.html
[US Core Pediatric BMI for Age Observation Profile - TTL Representation]: StructureDefinition-pediatric-bmi-for-age.profile.ttl.html
[US Core Pediatric Head Occipital Frontal Circumference Percentile Profile]: StructureDefinition-head-occipital-frontal-circumference-percentile.html
[US Core Pediatric Head Occipital Frontal Circumference Percentile Profile - Definitions]: StructureDefinition-head-occipital-frontal-circumference-percentile-definitions.html
[US Core Pediatric Head Occipital Frontal Circumference Percentile Profile - Mappings]: StructureDefinition-head-occipital-frontal-circumference-percentile-mappings.html
[US Core Pediatric Head Occipital Frontal Circumference Percentile Profile - Testing]: StructureDefinition-head-occipital-frontal-circumference-percentile-testing.html
[US Core Pediatric Head Occipital Frontal Circumference Percentile Profile - Examples]: StructureDefinition-head-occipital-frontal-circumference-percentile-examples.html
[US Core Pediatric Head Occipital Frontal Circumference Percentile Profile - XML Representation]: StructureDefinition-head-occipital-frontal-circumference-percentile.profile.xml.html
[US Core Pediatric Head Occipital Frontal Circumference Percentile Profile - JSON Representation]: StructureDefinition-head-occipital-frontal-circumference-percentile.profile.json.html
[US Core Pediatric Head Occipital Frontal Circumference Percentile Profile - TTL Representation]: StructureDefinition-head-occipital-frontal-circumference-percentile.profile.ttl.html
[US Core Pediatric Weight for Height Observation Profile]: StructureDefinition-pediatric-weight-for-height.html
[US Core Pediatric Weight for Height Observation Profile - Definitions]: StructureDefinition-pediatric-weight-for-height-definitions.html
[US Core Pediatric Weight for Height Observation Profile - Mappings]: StructureDefinition-pediatric-weight-for-height-mappings.html
[US Core Pediatric Weight for Height Observation Profile - Testing]: StructureDefinition-pediatric-weight-for-height-testing.html
[US Core Pediatric Weight for Height Observation Profile - Examples]: StructureDefinition-pediatric-weight-for-height-examples.html
[US Core Pediatric Weight for Height Observation Profile - XML Representation]: StructureDefinition-pediatric-weight-for-height.profile.xml.html
[US Core Pediatric Weight for Height Observation Profile - JSON Representation]: StructureDefinition-pediatric-weight-for-height.profile.json.html
[US Core Pediatric Weight for Height Observation Profile - TTL Representation]: StructureDefinition-pediatric-weight-for-height.profile.ttl.html
[US Core Practitioner Profile]: StructureDefinition-us-core-practitioner.html
[US Core Practitioner Profile - Definitions]: StructureDefinition-us-core-practitioner-definitions.html
[US Core Practitioner Profile - Mappings]: StructureDefinition-us-core-practitioner-mappings.html
[US Core Practitioner Profile - Testing]: StructureDefinition-us-core-practitioner-testing.html
[US Core Practitioner Profile - Examples]: StructureDefinition-us-core-practitioner-examples.html
[US Core Practitioner Profile - XML Representation]: StructureDefinition-us-core-practitioner.profile.xml.html
[US Core Practitioner Profile - JSON Representation]: StructureDefinition-us-core-practitioner.profile.json.html
[US Core Practitioner Profile - TTL Representation]: StructureDefinition-us-core-practitioner.profile.ttl.html
[US Core PractitionerRole Profile]: StructureDefinition-us-core-practitionerrole.html
[US Core PractitionerRole Profile - Definitions]: StructureDefinition-us-core-practitionerrole-definitions.html
[US Core PractitionerRole Profile - Mappings]: StructureDefinition-us-core-practitionerrole-mappings.html
[US Core PractitionerRole Profile - Testing]: StructureDefinition-us-core-practitionerrole-testing.html
[US Core PractitionerRole Profile - XML Representation]: StructureDefinition-us-core-practitionerrole.profile.xml.html
[US Core PractitionerRole Profile - JSON Representation]: StructureDefinition-us-core-practitionerrole.profile.json.html
[US Core PractitionerRole Profile - TTL Representation]: StructureDefinition-us-core-practitionerrole.profile.ttl.html
[US Core Procedure Profile]: StructureDefinition-us-core-procedure.html
[US Core Procedure Profile - Definitions]: StructureDefinition-us-core-procedure-definitions.html
[US Core Procedure Profile - Mappings]: StructureDefinition-us-core-procedure-mappings.html
[US Core Procedure Profile - Testing]: StructureDefinition-us-core-procedure-testing.html
[US Core Procedure Profile - Examples]: StructureDefinition-us-core-procedure-examples.html
[US Core Procedure Profile - XML Representation]: StructureDefinition-us-core-procedure.profile.xml.html
[US Core Procedure Profile - JSON Representation]: StructureDefinition-us-core-procedure.profile.json.html
[US Core Procedure Profile - TTL Representation]: StructureDefinition-us-core-procedure.profile.ttl.html
[US Core Provenance Profile]: StructureDefinition-us-core-provenance.html
[US Core Provenance Profile - Definitions]: StructureDefinition-us-core-provenance-definitions.html
[US Core Provenance Profile - Mappings]: StructureDefinition-us-core-provenance-mappings.html
[US Core Provenance Profile - Testing]: StructureDefinition-us-core-provenance-testing.html
[US Core Provenance Profile - XML Representation]: StructureDefinition-us-core-provenance.profile.xml.html
[US Core Provenance Profile - JSON Representation]: StructureDefinition-us-core-provenance.profile.json.html
[US Core Provenance Profile - TTL Representation]: StructureDefinition-us-core-provenance.profile.ttl.html
[US Core Pulse Oximetry Profile]: StructureDefinition-us-core-pulse-oximetry.html
[US Core Pulse Oximetry Profile - Definitions]: StructureDefinition-us-core-pulse-oximetry-definitions.html
[US Core Pulse Oximetry Profile - Mappings]: StructureDefinition-us-core-pulse-oximetry-mappings.html
[US Core Pulse Oximetry Profile - Testing]: StructureDefinition-us-core-pulse-oximetry-testing.html
[US Core Pulse Oximetry Profile - Examples]: StructureDefinition-us-core-pulse-oximetry-examples.html
[US Core Pulse Oximetry Profile - XML Representation]: StructureDefinition-us-core-pulse-oximetry.profile.xml.html
[US Core Pulse Oximetry Profile - JSON Representation]: StructureDefinition-us-core-pulse-oximetry.profile.json.html
[US Core Pulse Oximetry Profile - TTL Representation]: StructureDefinition-us-core-pulse-oximetry.profile.ttl.html
[US Core QuestionnaireResponse Profile]: StructureDefinition-us-core-questionnaireresponse.html
[US Core QuestionnaireResponse Profile - Definitions]: StructureDefinition-us-core-questionnaireresponse-definitions.html
[US Core QuestionnaireResponse Profile - Mappings]: StructureDefinition-us-core-questionnaireresponse-mappings.html
[US Core QuestionnaireResponse Profile - Testing]: StructureDefinition-us-core-questionnaireresponse-testing.html
[US Core QuestionnaireResponse Profile - Examples]: StructureDefinition-us-core-questionnaireresponse-examples.html
[US Core QuestionnaireResponse Profile - XML Representation]: StructureDefinition-us-core-questionnaireresponse.profile.xml.html
[US Core QuestionnaireResponse Profile - JSON Representation]: StructureDefinition-us-core-questionnaireresponse.profile.json.html
[US Core QuestionnaireResponse Profile - TTL Representation]: StructureDefinition-us-core-questionnaireresponse.profile.ttl.html
[US Core RelatedPerson Profile]: StructureDefinition-us-core-relatedperson.html
[US Core RelatedPerson Profile - Definitions]: StructureDefinition-us-core-relatedperson-definitions.html
[US Core RelatedPerson Profile - Mappings]: StructureDefinition-us-core-relatedperson-mappings.html
[US Core RelatedPerson Profile - Testing]: StructureDefinition-us-core-relatedperson-testing.html
[US Core RelatedPerson Profile - Examples]: StructureDefinition-us-core-relatedperson-examples.html
[US Core RelatedPerson Profile - XML Representation]: StructureDefinition-us-core-relatedperson.profile.xml.html
[US Core RelatedPerson Profile - JSON Representation]: StructureDefinition-us-core-relatedperson.profile.json.html
[US Core RelatedPerson Profile - TTL Representation]: StructureDefinition-us-core-relatedperson.profile.ttl.html
[US Core Respiratory Rate Profile]: StructureDefinition-us-core-respiratory-rate.html
[US Core Respiratory Rate Profile - Definitions]: StructureDefinition-us-core-respiratory-rate-definitions.html
[US Core Respiratory Rate Profile - Mappings]: StructureDefinition-us-core-respiratory-rate-mappings.html
[US Core Respiratory Rate Profile - Testing]: StructureDefinition-us-core-respiratory-rate-testing.html
[US Core Respiratory Rate Profile - Examples]: StructureDefinition-us-core-respiratory-rate-examples.html
[US Core Respiratory Rate Profile - XML Representation]: StructureDefinition-us-core-respiratory-rate.profile.xml.html
[US Core Respiratory Rate Profile - JSON Representation]: StructureDefinition-us-core-respiratory-rate.profile.json.html
[US Core Respiratory Rate Profile - TTL Representation]: StructureDefinition-us-core-respiratory-rate.profile.ttl.html
[US Core ServiceRequest Profile]: StructureDefinition-us-core-servicerequest.html
[US Core ServiceRequest Profile - Definitions]: StructureDefinition-us-core-servicerequest-definitions.html
[US Core ServiceRequest Profile - Mappings]: StructureDefinition-us-core-servicerequest-mappings.html
[US Core ServiceRequest Profile - Testing]: StructureDefinition-us-core-servicerequest-testing.html
[US Core ServiceRequest Profile - Examples]: StructureDefinition-us-core-servicerequest-examples.html
[US Core ServiceRequest Profile - XML Representation]: StructureDefinition-us-core-servicerequest.profile.xml.html
[US Core ServiceRequest Profile - JSON Representation]: StructureDefinition-us-core-servicerequest.profile.json.html
[US Core ServiceRequest Profile - TTL Representation]: StructureDefinition-us-core-servicerequest.profile.ttl.html
[US Core Simple Observation Profile]: StructureDefinition-us-core-simple-observation.html
[US Core Simple Observation Profile - Definitions]: StructureDefinition-us-core-simple-observation-definitions.html
[US Core Simple Observation Profile - Mappings]: StructureDefinition-us-core-simple-observation-mappings.html
[US Core Simple Observation Profile - Testing]: StructureDefinition-us-core-simple-observation-testing.html
[US Core Simple Observation Profile - Examples]: StructureDefinition-us-core-simple-observation-examples.html
[US Core Simple Observation Profile - XML Representation]: StructureDefinition-us-core-simple-observation.profile.xml.html
[US Core Simple Observation Profile - JSON Representation]: StructureDefinition-us-core-simple-observation.profile.json.html
[US Core Simple Observation Profile - TTL Representation]: StructureDefinition-us-core-simple-observation.profile.ttl.html
[US Core Smoking Status Observation Profile]: StructureDefinition-us-core-smokingstatus.html
[US Core Smoking Status Observation Profile - Definitions]: StructureDefinition-us-core-smokingstatus-definitions.html
[US Core Smoking Status Observation Profile - Mappings]: StructureDefinition-us-core-smokingstatus-mappings.html
[US Core Smoking Status Observation Profile - Testing]: StructureDefinition-us-core-smokingstatus-testing.html
[US Core Smoking Status Observation Profile - Examples]: StructureDefinition-us-core-smokingstatus-examples.html
[US Core Smoking Status Observation Profile - XML Representation]: StructureDefinition-us-core-smokingstatus.profile.xml.html
[US Core Smoking Status Observation Profile - JSON Representation]: StructureDefinition-us-core-smokingstatus.profile.json.html
[US Core Smoking Status Observation Profile - TTL Representation]: StructureDefinition-us-core-smokingstatus.profile.ttl.html
[US Core Specimen Profile]: StructureDefinition-us-core-specimen.html
[US Core Specimen Profile - Definitions]: StructureDefinition-us-core-specimen-definitions.html
[US Core Specimen Profile - Mappings]: StructureDefinition-us-core-specimen-mappings.html
[US Core Specimen Profile - Testing]: StructureDefinition-us-core-specimen-testing.html
[US Core Specimen Profile - Examples]: StructureDefinition-us-core-specimen-examples.html
[US Core Specimen Profile - XML Representation]: StructureDefinition-us-core-specimen.profile.xml.html
[US Core Specimen Profile - JSON Representation]: StructureDefinition-us-core-specimen.profile.json.html
[US Core Specimen Profile - TTL Representation]: StructureDefinition-us-core-specimen.profile.ttl.html
[US Core Treatment Intervention Preference Profile]: StructureDefinition-us-core-treatment-intervention-preference.html
[US Core Treatment Intervention Preference Profile - Definitions]: StructureDefinition-us-core-treatment-intervention-preference-definitions.html
[US Core Treatment Intervention Preference Profile - Mappings]: StructureDefinition-us-core-treatment-intervention-preference-mappings.html
[US Core Treatment Intervention Preference Profile - Testing]: StructureDefinition-us-core-treatment-intervention-preference-testing.html
[US Core Treatment Intervention Preference Profile - Examples]: StructureDefinition-us-core-treatment-intervention-preference-examples.html
[US Core Treatment Intervention Preference Profile - XML Representation]: StructureDefinition-us-core-treatment-intervention-preference.profile.xml.html
[US Core Treatment Intervention Preference Profile - JSON Representation]: StructureDefinition-us-core-treatment-intervention-preference.profile.json.html
[US Core Treatment Intervention Preference Profile - TTL Representation]: StructureDefinition-us-core-treatment-intervention-preference.profile.ttl.html
[US Core Vital Signs Profile]: StructureDefinition-us-core-vital-signs.html
[US Core Vital Signs Profile - Definitions]: StructureDefinition-us-core-vital-signs-definitions.html
[US Core Vital Signs Profile - Mappings]: StructureDefinition-us-core-vital-signs-mappings.html
[US Core Vital Signs Profile - Testing]: StructureDefinition-us-core-vital-signs-testing.html
[US Core Vital Signs Profile - XML Representation]: StructureDefinition-us-core-vital-signs.profile.xml.html
[US Core Vital Signs Profile - JSON Representation]: StructureDefinition-us-core-vital-signs.profile.json.html
[US Core Vital Signs Profile - TTL Representation]: StructureDefinition-us-core-vital-signs.profile.ttl.html
[US Core Authentication Time Extension]: StructureDefinition-us-core-authentication-time.html
[US Core Authentication Time Extension - Definitions]: StructureDefinition-us-core-authentication-time-definitions.html
[US Core Authentication Time Extension - Mappings]: StructureDefinition-us-core-authentication-time-mappings.html
[US Core Authentication Time Extension - Testing]: StructureDefinition-us-core-authentication-time-testing.html
[US Core Authentication Time Extension - XML Representation]: StructureDefinition-us-core-authentication-time.profile.xml.html
[US Core Authentication Time Extension - JSON Representation]: StructureDefinition-us-core-authentication-time.profile.json.html
[US Core Authentication Time Extension - TTL Representation]: StructureDefinition-us-core-authentication-time.profile.ttl.html
[US Core Birth Sex Extension]: StructureDefinition-us-core-birthsex.html
[US Core Birth Sex Extension - Definitions]: StructureDefinition-us-core-birthsex-definitions.html
[US Core Birth Sex Extension - Mappings]: StructureDefinition-us-core-birthsex-mappings.html
[US Core Birth Sex Extension - Testing]: StructureDefinition-us-core-birthsex-testing.html
[US Core Birth Sex Extension - XML Representation]: StructureDefinition-us-core-birthsex.profile.xml.html
[US Core Birth Sex Extension - JSON Representation]: StructureDefinition-us-core-birthsex.profile.json.html
[US Core Birth Sex Extension - TTL Representation]: StructureDefinition-us-core-birthsex.profile.ttl.html
[US Core Direct email Extension]: StructureDefinition-us-core-direct.html
[US Core Direct email Extension - Definitions]: StructureDefinition-us-core-direct-definitions.html
[US Core Direct email Extension - Mappings]: StructureDefinition-us-core-direct-mappings.html
[US Core Direct email Extension - Testing]: StructureDefinition-us-core-direct-testing.html
[US Core Direct email Extension - XML Representation]: StructureDefinition-us-core-direct.profile.xml.html
[US Core Direct email Extension - JSON Representation]: StructureDefinition-us-core-direct.profile.json.html
[US Core Direct email Extension - TTL Representation]: StructureDefinition-us-core-direct.profile.ttl.html
[US Core Ethnicity Extension]: StructureDefinition-us-core-ethnicity.html
[US Core Ethnicity Extension - Definitions]: StructureDefinition-us-core-ethnicity-definitions.html
[US Core Ethnicity Extension - Mappings]: StructureDefinition-us-core-ethnicity-mappings.html
[US Core Ethnicity Extension - Testing]: StructureDefinition-us-core-ethnicity-testing.html
[US Core Ethnicity Extension - XML Representation]: StructureDefinition-us-core-ethnicity.profile.xml.html
[US Core Ethnicity Extension - JSON Representation]: StructureDefinition-us-core-ethnicity.profile.json.html
[US Core Ethnicity Extension - TTL Representation]: StructureDefinition-us-core-ethnicity.profile.ttl.html
[US Core Extension Questionnaire URI]: StructureDefinition-us-core-extension-questionnaire-uri.html
[US Core Extension Questionnaire URI - Definitions]: StructureDefinition-us-core-extension-questionnaire-uri-definitions.html
[US Core Extension Questionnaire URI - Mappings]: StructureDefinition-us-core-extension-questionnaire-uri-mappings.html
[US Core Extension Questionnaire URI - Testing]: StructureDefinition-us-core-extension-questionnaire-uri-testing.html
[US Core Extension Questionnaire URI - XML Representation]: StructureDefinition-us-core-extension-questionnaire-uri.profile.xml.html
[US Core Extension Questionnaire URI - JSON Representation]: StructureDefinition-us-core-extension-questionnaire-uri.profile.json.html
[US Core Extension Questionnaire URI - TTL Representation]: StructureDefinition-us-core-extension-questionnaire-uri.profile.ttl.html
[US Core Gender Identity Extension]: StructureDefinition-us-core-genderIdentity.html
[US Core Gender Identity Extension - Definitions]: StructureDefinition-us-core-genderIdentity-definitions.html
[US Core Gender Identity Extension - Mappings]: StructureDefinition-us-core-genderIdentity-mappings.html
[US Core Gender Identity Extension - Testing]: StructureDefinition-us-core-genderIdentity-testing.html
[US Core Gender Identity Extension - XML Representation]: StructureDefinition-us-core-genderIdentity.profile.xml.html
[US Core Gender Identity Extension - JSON Representation]: StructureDefinition-us-core-genderIdentity.profile.json.html
[US Core Gender Identity Extension - TTL Representation]: StructureDefinition-us-core-genderIdentity.profile.ttl.html
[US Core Interpreter Needed Extension]: StructureDefinition-us-core-interpreter-needed.html
[US Core Interpreter Needed Extension - Definitions]: StructureDefinition-us-core-interpreter-needed-definitions.html
[US Core Interpreter Needed Extension - Mappings]: StructureDefinition-us-core-interpreter-needed-mappings.html
[US Core Interpreter Needed Extension - Testing]: StructureDefinition-us-core-interpreter-needed-testing.html
[US Core Interpreter Needed Extension - XML Representation]: StructureDefinition-us-core-interpreter-needed.profile.xml.html
[US Core Interpreter Needed Extension - JSON Representation]: StructureDefinition-us-core-interpreter-needed.profile.json.html
[US Core Interpreter Needed Extension - TTL Representation]: StructureDefinition-us-core-interpreter-needed.profile.ttl.html
[US Core Jurisdiction Extension]: StructureDefinition-us-core-jurisdiction.html
[US Core Jurisdiction Extension - Definitions]: StructureDefinition-us-core-jurisdiction-definitions.html
[US Core Jurisdiction Extension - Mappings]: StructureDefinition-us-core-jurisdiction-mappings.html
[US Core Jurisdiction Extension - Testing]: StructureDefinition-us-core-jurisdiction-testing.html
[US Core Jurisdiction Extension - XML Representation]: StructureDefinition-us-core-jurisdiction.profile.xml.html
[US Core Jurisdiction Extension - JSON Representation]: StructureDefinition-us-core-jurisdiction.profile.json.html
[US Core Jurisdiction Extension - TTL Representation]: StructureDefinition-us-core-jurisdiction.profile.ttl.html
[US Core Medication Adherence Extension]: StructureDefinition-us-core-medication-adherence.html
[US Core Medication Adherence Extension - Definitions]: StructureDefinition-us-core-medication-adherence-definitions.html
[US Core Medication Adherence Extension - Mappings]: StructureDefinition-us-core-medication-adherence-mappings.html
[US Core Medication Adherence Extension - Testing]: StructureDefinition-us-core-medication-adherence-testing.html
[US Core Medication Adherence Extension - XML Representation]: StructureDefinition-us-core-medication-adherence.profile.xml.html
[US Core Medication Adherence Extension - JSON Representation]: StructureDefinition-us-core-medication-adherence.profile.json.html
[US Core Medication Adherence Extension - TTL Representation]: StructureDefinition-us-core-medication-adherence.profile.ttl.html
[US Core Race Extension]: StructureDefinition-us-core-race.html
[US Core Race Extension - Definitions]: StructureDefinition-us-core-race-definitions.html
[US Core Race Extension - Mappings]: StructureDefinition-us-core-race-mappings.html
[US Core Race Extension - Testing]: StructureDefinition-us-core-race-testing.html
[US Core Race Extension - XML Representation]: StructureDefinition-us-core-race.profile.xml.html
[US Core Race Extension - JSON Representation]: StructureDefinition-us-core-race.profile.json.html
[US Core Race Extension - TTL Representation]: StructureDefinition-us-core-race.profile.ttl.html
[US Core Sex Extension]: StructureDefinition-us-core-sex.html
[US Core Sex Extension - Definitions]: StructureDefinition-us-core-sex-definitions.html
[US Core Sex Extension - Mappings]: StructureDefinition-us-core-sex-mappings.html
[US Core Sex Extension - Testing]: StructureDefinition-us-core-sex-testing.html
[US Core Sex Extension - XML Representation]: StructureDefinition-us-core-sex.profile.xml.html
[US Core Sex Extension - JSON Representation]: StructureDefinition-us-core-sex.profile.json.html
[US Core Sex Extension - TTL Representation]: StructureDefinition-us-core-sex.profile.ttl.html
[US Core Tribal Affiliation Extension]: StructureDefinition-us-core-tribal-affiliation.html
[US Core Tribal Affiliation Extension - Definitions]: StructureDefinition-us-core-tribal-affiliation-definitions.html
[US Core Tribal Affiliation Extension - Mappings]: StructureDefinition-us-core-tribal-affiliation-mappings.html
[US Core Tribal Affiliation Extension - Testing]: StructureDefinition-us-core-tribal-affiliation-testing.html
[US Core Tribal Affiliation Extension - XML Representation]: StructureDefinition-us-core-tribal-affiliation.profile.xml.html
[US Core Tribal Affiliation Extension - JSON Representation]: StructureDefinition-us-core-tribal-affiliation.profile.json.html
[US Core Tribal Affiliation Extension - TTL Representation]: StructureDefinition-us-core-tribal-affiliation.profile.ttl.html
[US Core USCDI Requirement Extension]: StructureDefinition-uscdi-requirement.html
[US Core USCDI Requirement Extension - Definitions]: StructureDefinition-uscdi-requirement-definitions.html
[US Core USCDI Requirement Extension - Mappings]: StructureDefinition-uscdi-requirement-mappings.html
[US Core USCDI Requirement Extension - Testing]: StructureDefinition-uscdi-requirement-testing.html
[US Core USCDI Requirement Extension - XML Representation]: StructureDefinition-uscdi-requirement.profile.xml.html
[US Core USCDI Requirement Extension - JSON Representation]: StructureDefinition-uscdi-requirement.profile.json.html
[US Core USCDI Requirement Extension - TTL Representation]: StructureDefinition-uscdi-requirement.profile.ttl.html
[Detailed ethnicity]: ValueSet-detailed-ethnicity.html
[Detailed ethnicity - Testing]: ValueSet-detailed-ethnicity-testing.html
[Detailed ethnicity - XML Representation]: ValueSet-detailed-ethnicity.xml.html
[Detailed ethnicity - JSON Representation]: ValueSet-detailed-ethnicity.json.html
[Detailed ethnicity - TTL Representation]: ValueSet-detailed-ethnicity.ttl.html
[Detailed Race]: ValueSet-detailed-race.html
[Detailed Race - Testing]: ValueSet-detailed-race-testing.html
[Detailed Race - XML Representation]: ValueSet-detailed-race.xml.html
[Detailed Race - JSON Representation]: ValueSet-detailed-race.json.html
[Detailed Race - TTL Representation]: ValueSet-detailed-race.ttl.html
[Language codes with language and optionally a region modifier]: ValueSet-simple-language.html
[Language codes with language and optionally a region modifier - Testing]: ValueSet-simple-language-testing.html
[Language codes with language and optionally a region modifier - XML Representation]: ValueSet-simple-language.xml.html
[Language codes with language and optionally a region modifier - JSON Representation]: ValueSet-simple-language.json.html
[Language codes with language and optionally a region modifier - TTL Representation]: ValueSet-simple-language.ttl.html
[OMB Ethnicity Categories]: ValueSet-omb-ethnicity-category.html
[OMB Ethnicity Categories - Testing]: ValueSet-omb-ethnicity-category-testing.html
[OMB Ethnicity Categories - XML Representation]: ValueSet-omb-ethnicity-category.xml.html
[OMB Ethnicity Categories - JSON Representation]: ValueSet-omb-ethnicity-category.json.html
[OMB Ethnicity Categories - TTL Representation]: ValueSet-omb-ethnicity-category.ttl.html
[OMB Race Categories]: ValueSet-omb-race-category.html
[OMB Race Categories - Testing]: ValueSet-omb-race-category-testing.html
[OMB Race Categories - XML Representation]: ValueSet-omb-race-category.xml.html
[OMB Race Categories - JSON Representation]: ValueSet-omb-race-category.json.html
[OMB Race Categories - TTL Representation]: ValueSet-omb-race-category.ttl.html
[US Core Clinical Note Type]: ValueSet-us-core-clinical-note-type.html
[US Core Clinical Note Type - Testing]: ValueSet-us-core-clinical-note-type-testing.html
[US Core Clinical Note Type - XML Representation]: ValueSet-us-core-clinical-note-type.xml.html
[US Core Clinical Note Type - JSON Representation]: ValueSet-us-core-clinical-note-type.json.html
[US Core Clinical Note Type - TTL Representation]: ValueSet-us-core-clinical-note-type.ttl.html
[US Core Clinical Result Observation Category]: ValueSet-us-core-clinical-result-observation-category.html
[US Core Clinical Result Observation Category - Testing]: ValueSet-us-core-clinical-result-observation-category-testing.html
[US Core Clinical Result Observation Category - XML Representation]: ValueSet-us-core-clinical-result-observation-category.xml.html
[US Core Clinical Result Observation Category - JSON Representation]: ValueSet-us-core-clinical-result-observation-category.json.html
[US Core Clinical Result Observation Category - TTL Representation]: ValueSet-us-core-clinical-result-observation-category.ttl.html
[US Core Condition Codes]: ValueSet-us-core-condition-code.html
[US Core Condition Codes - Testing]: ValueSet-us-core-condition-code-testing.html
[US Core Condition Codes - XML Representation]: ValueSet-us-core-condition-code.xml.html
[US Core Condition Codes - JSON Representation]: ValueSet-us-core-condition-code.json.html
[US Core Condition Codes - TTL Representation]: ValueSet-us-core-condition-code.ttl.html
[US Core Diagnostic Report Category Codes]: ValueSet-us-core-diagnosticreport-category.html
[US Core Diagnostic Report Category Codes - Testing]: ValueSet-us-core-diagnosticreport-category-testing.html
[US Core Diagnostic Report Category Codes - XML Representation]: ValueSet-us-core-diagnosticreport-category.xml.html
[US Core Diagnostic Report Category Codes - JSON Representation]: ValueSet-us-core-diagnosticreport-category.json.html
[US Core Diagnostic Report Category Codes - TTL Representation]: ValueSet-us-core-diagnosticreport-category.ttl.html
[US Core DocumentReference Category]: ValueSet-us-core-documentreference-category.html
[US Core DocumentReference Category - Testing]: ValueSet-us-core-documentreference-category-testing.html
[US Core DocumentReference Category - XML Representation]: ValueSet-us-core-documentreference-category.xml.html
[US Core DocumentReference Category - JSON Representation]: ValueSet-us-core-documentreference-category.json.html
[US Core DocumentReference Category - TTL Representation]: ValueSet-us-core-documentreference-category.ttl.html
[US Core DocumentReference Type]: ValueSet-us-core-documentreference-type.html
[US Core DocumentReference Type - Testing]: ValueSet-us-core-documentreference-type-testing.html
[US Core DocumentReference Type - XML Representation]: ValueSet-us-core-documentreference-type.xml.html
[US Core DocumentReference Type - JSON Representation]: ValueSet-us-core-documentreference-type.json.html
[US Core DocumentReference Type - TTL Representation]: ValueSet-us-core-documentreference-type.ttl.html
[US Core Goal Codes]: ValueSet-us-core-goal-description.html
[US Core Goal Codes - Testing]: ValueSet-us-core-goal-description-testing.html
[US Core Goal Codes - XML Representation]: ValueSet-us-core-goal-description.xml.html
[US Core Goal Codes - JSON Representation]: ValueSet-us-core-goal-description.json.html
[US Core Goal Codes - TTL Representation]: ValueSet-us-core-goal-description.ttl.html
[US Core Laboratory Test Codes]: ValueSet-us-core-laboratory-test-codes.html
[US Core Laboratory Test Codes - Testing]: ValueSet-us-core-laboratory-test-codes-testing.html
[US Core Laboratory Test Codes - XML Representation]: ValueSet-us-core-laboratory-test-codes.xml.html
[US Core Laboratory Test Codes - JSON Representation]: ValueSet-us-core-laboratory-test-codes.json.html
[US Core Laboratory Test Codes - TTL Representation]: ValueSet-us-core-laboratory-test-codes.ttl.html
[US Core Location Type]: ValueSet-us-core-location-type.html
[US Core Location Type - Testing]: ValueSet-us-core-location-type-testing.html
[US Core Location Type - XML Representation]: ValueSet-us-core-location-type.xml.html
[US Core Location Type - JSON Representation]: ValueSet-us-core-location-type.json.html
[US Core Location Type - TTL Representation]: ValueSet-us-core-location-type.ttl.html
[US Core Narrative Status]: ValueSet-us-core-narrative-status.html
[US Core Narrative Status - Testing]: ValueSet-us-core-narrative-status-testing.html
[US Core Narrative Status - XML Representation]: ValueSet-us-core-narrative-status.xml.html
[US Core Narrative Status - JSON Representation]: ValueSet-us-core-narrative-status.json.html
[US Core Narrative Status - TTL Representation]: ValueSet-us-core-narrative-status.ttl.html
[US Core Non Laboratory Codes]: ValueSet-us-core-diagnosticreport-report-and-note-codes.html
[US Core Non Laboratory Codes - Testing]: ValueSet-us-core-diagnosticreport-report-and-note-codes-testing.html
[US Core Non Laboratory Codes - XML Representation]: ValueSet-us-core-diagnosticreport-report-and-note-codes.xml.html
[US Core Non Laboratory Codes - JSON Representation]: ValueSet-us-core-diagnosticreport-report-and-note-codes.json.html
[US Core Non Laboratory Codes - TTL Representation]: ValueSet-us-core-diagnosticreport-report-and-note-codes.ttl.html
[US Core Problem or Health Concern]: ValueSet-us-core-problem-or-health-concern.html
[US Core Problem or Health Concern - Testing]: ValueSet-us-core-problem-or-health-concern-testing.html
[US Core Problem or Health Concern - XML Representation]: ValueSet-us-core-problem-or-health-concern.xml.html
[US Core Problem or Health Concern - JSON Representation]: ValueSet-us-core-problem-or-health-concern.json.html
[US Core Problem or Health Concern - TTL Representation]: ValueSet-us-core-problem-or-health-concern.ttl.html
[US Core Procedure Codes]: ValueSet-us-core-procedure-code.html
[US Core Procedure Codes - Testing]: ValueSet-us-core-procedure-code-testing.html
[US Core Procedure Codes - XML Representation]: ValueSet-us-core-procedure-code.xml.html
[US Core Procedure Codes - JSON Representation]: ValueSet-us-core-procedure-code.json.html
[US Core Procedure Codes - TTL Representation]: ValueSet-us-core-procedure-code.ttl.html
[US Core Provenance Participant Type Codes]: ValueSet-us-core-provenance-participant-type.html
[US Core Provenance Participant Type Codes - Testing]: ValueSet-us-core-provenance-participant-type-testing.html
[US Core Provenance Participant Type Codes - XML Representation]: ValueSet-us-core-provenance-participant-type.xml.html
[US Core Provenance Participant Type Codes - JSON Representation]: ValueSet-us-core-provenance-participant-type.json.html
[US Core Provenance Participant Type Codes - TTL Representation]: ValueSet-us-core-provenance-participant-type.ttl.html
[US Core Screening Assessment Condition Category]: ValueSet-us-core-screening-assessment-condition-category.html
[US Core Screening Assessment Condition Category - Testing]: ValueSet-us-core-screening-assessment-condition-category-testing.html
[US Core Screening Assessment Condition Category - XML Representation]: ValueSet-us-core-screening-assessment-condition-category.xml.html
[US Core Screening Assessment Condition Category - JSON Representation]: ValueSet-us-core-screening-assessment-condition-category.json.html
[US Core Screening Assessment Condition Category - TTL Representation]: ValueSet-us-core-screening-assessment-condition-category.ttl.html
[US Core Screening Assessment Observation Category]: ValueSet-us-core-screening-assessment-observation-category.html
[US Core Screening Assessment Observation Category - Testing]: ValueSet-us-core-screening-assessment-observation-category-testing.html
[US Core Screening Assessment Observation Category - XML Representation]: ValueSet-us-core-screening-assessment-observation-category.xml.html
[US Core Screening Assessment Observation Category - JSON Representation]: ValueSet-us-core-screening-assessment-observation-category.json.html
[US Core Screening Assessment Observation Category - TTL Representation]: ValueSet-us-core-screening-assessment-observation-category.ttl.html
[US Core Screening Assessment Observation Maximum Category]: ValueSet-us-core-screening-assessment-observation-maximum-category.html
[US Core Screening Assessment Observation Maximum Category - Testing]: ValueSet-us-core-screening-assessment-observation-maximum-category-testing.html
[US Core Screening Assessment Observation Maximum Category - XML Representation]: ValueSet-us-core-screening-assessment-observation-maximum-category.xml.html
[US Core Screening Assessment Observation Maximum Category - JSON Representation]: ValueSet-us-core-screening-assessment-observation-maximum-category.json.html
[US Core Screening Assessment Observation Maximum Category - TTL Representation]: ValueSet-us-core-screening-assessment-observation-maximum-category.ttl.html
[US Core ServiceRequest Category Codes]: ValueSet-us-core-servicerequest-category.html
[US Core ServiceRequest Category Codes - Testing]: ValueSet-us-core-servicerequest-category-testing.html
[US Core ServiceRequest Category Codes - XML Representation]: ValueSet-us-core-servicerequest-category.xml.html
[US Core ServiceRequest Category Codes - JSON Representation]: ValueSet-us-core-servicerequest-category.json.html
[US Core ServiceRequest Category Codes - TTL Representation]: ValueSet-us-core-servicerequest-category.ttl.html
[US Core Simple Observation Category]: ValueSet-us-core-simple-observation-category.html
[US Core Simple Observation Category - Testing]: ValueSet-us-core-simple-observation-category-testing.html
[US Core Simple Observation Category - XML Representation]: ValueSet-us-core-simple-observation-category.xml.html
[US Core Simple Observation Category - JSON Representation]: ValueSet-us-core-simple-observation-category.json.html
[US Core Simple Observation Category - TTL Representation]: ValueSet-us-core-simple-observation-category.ttl.html
[US Core Specimen Condition]: ValueSet-us-core-specimen-condition.html
[US Core Specimen Condition - Testing]: ValueSet-us-core-specimen-condition-testing.html
[US Core Specimen Condition - XML Representation]: ValueSet-us-core-specimen-condition.xml.html
[US Core Specimen Condition - JSON Representation]: ValueSet-us-core-specimen-condition.json.html
[US Core Specimen Condition - TTL Representation]: ValueSet-us-core-specimen-condition.ttl.html
[US Core Status for Smoking Status Observation]: ValueSet-us-core-observation-smoking-status-status.html
[US Core Status for Smoking Status Observation - Testing]: ValueSet-us-core-observation-smoking-status-status-testing.html
[US Core Status for Smoking Status Observation - XML Representation]: ValueSet-us-core-observation-smoking-status-status.xml.html
[US Core Status for Smoking Status Observation - JSON Representation]: ValueSet-us-core-observation-smoking-status-status.json.html
[US Core Status for Smoking Status Observation - TTL Representation]: ValueSet-us-core-observation-smoking-status-status.ttl.html
[USPS Two Letter Alphabetic Codes]: ValueSet-us-core-usps-state.html
[USPS Two Letter Alphabetic Codes - Testing]: ValueSet-us-core-usps-state-testing.html
[USPS Two Letter Alphabetic Codes - XML Representation]: ValueSet-us-core-usps-state.xml.html
[USPS Two Letter Alphabetic Codes - JSON Representation]: ValueSet-us-core-usps-state.json.html
[USPS Two Letter Alphabetic Codes - TTL Representation]: ValueSet-us-core-usps-state.ttl.html
[US Core CarePlan Category Extension Codes]: CodeSystem-careplan-category.html
[US Core CarePlan Category Extension Codes - Testing]: CodeSystem-careplan-category-testing.html
[US Core CarePlan Category Extension Codes - XML Representation]: CodeSystem-careplan-category.xml.html
[US Core CarePlan Category Extension Codes - JSON Representation]: CodeSystem-careplan-category.json.html
[US Core CarePlan Category Extension Codes - TTL Representation]: CodeSystem-careplan-category.ttl.html
[US Core Category]: CodeSystem-us-core-category.html
[US Core Category - Testing]: CodeSystem-us-core-category-testing.html
[US Core Category - XML Representation]: CodeSystem-us-core-category.xml.html
[US Core Category - JSON Representation]: CodeSystem-us-core-category.json.html
[US Core Category - TTL Representation]: CodeSystem-us-core-category.ttl.html
[US Core Condition Category Extension Codes]: CodeSystem-condition-category.html
[US Core Condition Category Extension Codes - Testing]: CodeSystem-condition-category-testing.html
[US Core Condition Category Extension Codes - XML Representation]: CodeSystem-condition-category.xml.html
[US Core Condition Category Extension Codes - JSON Representation]: CodeSystem-condition-category.json.html
[US Core Condition Category Extension Codes - TTL Representation]: CodeSystem-condition-category.ttl.html
[US Core DocumentReferences Category Codes]: CodeSystem-us-core-documentreference-category.html
[US Core DocumentReferences Category Codes - Testing]: CodeSystem-us-core-documentreference-category-testing.html
[US Core DocumentReferences Category Codes - XML Representation]: CodeSystem-us-core-documentreference-category.xml.html
[US Core DocumentReferences Category Codes - JSON Representation]: CodeSystem-us-core-documentreference-category.json.html
[US Core DocumentReferences Category Codes - TTL Representation]: CodeSystem-us-core-documentreference-category.ttl.html
[US Core Provenance Participant Type Extension Codes]: CodeSystem-us-core-provenance-participant-type.html
[US Core Provenance Participant Type Extension Codes - Testing]: CodeSystem-us-core-provenance-participant-type-testing.html
[US Core Provenance Participant Type Extension Codes - XML Representation]: CodeSystem-us-core-provenance-participant-type.xml.html
[US Core Provenance Participant Type Extension Codes - JSON Representation]: CodeSystem-us-core-provenance-participant-type.json.html
[US Core Provenance Participant Type Extension Codes - TTL Representation]: CodeSystem-us-core-provenance-participant-type.ttl.html
[10 minute Apgar Color Example]: Observation-10-minute-apgar-color.html
[10 minute Apgar Color Example - XML Representation]: Observation-10-minute-apgar-color.xml.html
[10 minute Apgar Color Example - JSON Representation]: Observation-10-minute-apgar-color.json.html
[10 minute Apgar Color Example - TTL Representation]: Observation-10-minute-apgar-color.ttl.html
[10 minute Apgar Heart Rate Example]: Observation-10-minute-apgar-heart-rate.html
[10 minute Apgar Heart Rate Example - XML Representation]: Observation-10-minute-apgar-heart-rate.xml.html
[10 minute Apgar Heart Rate Example - JSON Representation]: Observation-10-minute-apgar-heart-rate.json.html
[10 minute Apgar Heart Rate Example - TTL Representation]: Observation-10-minute-apgar-heart-rate.ttl.html
[10 minute Apgar Muscle Tone Example]: Observation-10-minute-apgar-muscle-tone.html
[10 minute Apgar Muscle Tone Example - XML Representation]: Observation-10-minute-apgar-muscle-tone.xml.html
[10 minute Apgar Muscle Tone Example - JSON Representation]: Observation-10-minute-apgar-muscle-tone.json.html
[10 minute Apgar Muscle Tone Example - TTL Representation]: Observation-10-minute-apgar-muscle-tone.ttl.html
[10 minute Apgar Reflex Irritability Example]: Observation-10-minute-apgar-reflex-irritability.html
[10 minute Apgar Reflex Irritability Example - XML Representation]: Observation-10-minute-apgar-reflex-irritability.xml.html
[10 minute Apgar Reflex Irritability Example - JSON Representation]: Observation-10-minute-apgar-reflex-irritability.json.html
[10 minute Apgar Reflex Irritability Example - TTL Representation]: Observation-10-minute-apgar-reflex-irritability.ttl.html
[10 minute Apgar Respiratory effort Example]: Observation-10-minute-apgar-respiratory-effort.html
[10 minute Apgar Respiratory effort Example - XML Representation]: Observation-10-minute-apgar-respiratory-effort.xml.html
[10 minute Apgar Respiratory effort Example - JSON Representation]: Observation-10-minute-apgar-respiratory-effort.json.html
[10 minute Apgar Respiratory effort Example - TTL Representation]: Observation-10-minute-apgar-respiratory-effort.ttl.html
[10 Minute Apgar Score Example]: Observation-10-minute-apgar-score.html
[10 Minute Apgar Score Example - XML Representation]: Observation-10-minute-apgar-score.xml.html
[10 Minute Apgar Score Example - JSON Representation]: Observation-10-minute-apgar-score.json.html
[10 Minute Apgar Score Example - TTL Representation]: Observation-10-minute-apgar-score.ttl.html
[10 Minute Apgar Score Panel Example]: Observation-10-minute-apgar-score-panel.html
[10 Minute Apgar Score Panel Example - XML Representation]: Observation-10-minute-apgar-score-panel.xml.html
[10 Minute Apgar Score Panel Example - JSON Representation]: Observation-10-minute-apgar-score-panel.json.html
[10 Minute Apgar Score Panel Example - TTL Representation]: Observation-10-minute-apgar-score-panel.ttl.html
[ADI Observation Presence ADI Example]: Observation-ADI-example.html
[ADI Observation Presence ADI Example - XML Representation]: Observation-ADI-example.xml.html
[ADI Observation Presence ADI Example - JSON Representation]: Observation-ADI-example.json.html
[ADI Observation Presence ADI Example - TTL Representation]: Observation-ADI-example.ttl.html
[ADI Observation Presence No ADI Example]: Observation-no-ADI-example.html
[ADI Observation Presence No ADI Example - XML Representation]: Observation-no-ADI-example.xml.html
[ADI Observation Presence No ADI Example - JSON Representation]: Observation-no-ADI-example.json.html
[ADI Observation Presence No ADI Example - TTL Representation]: Observation-no-ADI-example.ttl.html
[Ahc-Hrsn Item Observation Example 68517-2]: Observation-AHC-HRSN-item-example-68517-2.html
[Ahc-Hrsn Item Observation Example 68517-2 - XML Representation]: Observation-AHC-HRSN-item-example-68517-2.xml.html
[Ahc-Hrsn Item Observation Example 68517-2 - JSON Representation]: Observation-AHC-HRSN-item-example-68517-2.json.html
[Ahc-Hrsn Item Observation Example 68517-2 - TTL Representation]: Observation-AHC-HRSN-item-example-68517-2.ttl.html
[Alcohol Use Disorder Identification Test - Consumption (AUDIT-C) Questionnaire Example]: Questionnaire-AUDIT-C.html
[Alcohol Use Disorder Identification Test - Consumption (AUDIT-C) Questionnaire Example - Testing]: Questionnaire-AUDIT-C-testing.html
[Alcohol Use Disorder Identification Test - Consumption (AUDIT-C) Questionnaire Example - XML Representation]: Questionnaire-AUDIT-C.xml.html
[Alcohol Use Disorder Identification Test - Consumption (AUDIT-C) Questionnaire Example - JSON Representation]: Questionnaire-AUDIT-C.json.html
[Alcohol Use Disorder Identification Test - Consumption (AUDIT-C) Questionnaire Example - TTL Representation]: Questionnaire-AUDIT-C.ttl.html
[Alcohol Use Disorder Identification Test - Consumption (AUDIT-C) QuestionnaireResponse Example]: QuestionnaireResponse-AUDIT-C.html
[Alcohol Use Disorder Identification Test - Consumption (AUDIT-C) QuestionnaireResponse Example - XML Representation]: QuestionnaireResponse-AUDIT-C.xml.html
[Alcohol Use Disorder Identification Test - Consumption (AUDIT-C) QuestionnaireResponse Example - JSON Representation]: QuestionnaireResponse-AUDIT-C.json.html
[Alcohol Use Disorder Identification Test - Consumption (AUDIT-C) QuestionnaireResponse Example - TTL Representation]: QuestionnaireResponse-AUDIT-C.ttl.html
[Alcohol Use Status Example]: Observation-alcohol-use-status.html
[Alcohol Use Status Example - XML Representation]: Observation-alcohol-use-status.xml.html
[Alcohol Use Status Example - JSON Representation]: Observation-alcohol-use-status.json.html
[Alcohol Use Status Example - TTL Representation]: Observation-alcohol-use-status.ttl.html
[Alcoholic Drinks Per Day Example]: Observation-alcoholic-drinks-per-day.html
[Alcoholic Drinks Per Day Example - XML Representation]: Observation-alcoholic-drinks-per-day.xml.html
[Alcoholic Drinks Per Day Example - JSON Representation]: Observation-alcoholic-drinks-per-day.json.html
[Alcoholic Drinks Per Day Example - TTL Representation]: Observation-alcoholic-drinks-per-day.ttl.html
[AllergyIntolerance Example]: AllergyIntolerance-example.html
[AllergyIntolerance Example - XML Representation]: AllergyIntolerance-example.xml.html
[AllergyIntolerance Example - JSON Representation]: AllergyIntolerance-example.json.html
[AllergyIntolerance Example - TTL Representation]: AllergyIntolerance-example.ttl.html
[AllergyIntolerance Non-pharmacologic Agent Example]: AllergyIntolerance-non-pharmacologic-agent-example.html
[AllergyIntolerance Non-pharmacologic Agent Example - XML Representation]: AllergyIntolerance-non-pharmacologic-agent-example.xml.html
[AllergyIntolerance Non-pharmacologic Agent Example - JSON Representation]: AllergyIntolerance-non-pharmacologic-agent-example.json.html
[AllergyIntolerance Non-pharmacologic Agent Example - TTL Representation]: AllergyIntolerance-non-pharmacologic-agent-example.ttl.html
[AllergyIntolerance Provenance Example 1]: Bundle-allergyintolerance-provenance-example1.html
[AllergyIntolerance Provenance Example 1 - XML Representation]: Bundle-allergyintolerance-provenance-example1.xml.html
[AllergyIntolerance Provenance Example 1 - JSON Representation]: Bundle-allergyintolerance-provenance-example1.json.html
[AllergyIntolerance Provenance Example 1 - TTL Representation]: Bundle-allergyintolerance-provenance-example1.ttl.html
[AllergyIntolerance Provenance Example 2]: Bundle-allergyintolerance-provenance-example2.html
[AllergyIntolerance Provenance Example 2 - XML Representation]: Bundle-allergyintolerance-provenance-example2.xml.html
[AllergyIntolerance Provenance Example 2 - JSON Representation]: Bundle-allergyintolerance-provenance-example2.json.html
[AllergyIntolerance Provenance Example 2 - TTL Representation]: Bundle-allergyintolerance-provenance-example2.ttl.html
[At Home In Vitro Test Example]: Observation-at-home-in-vitro-test.html
[At Home In Vitro Test Example - XML Representation]: Observation-at-home-in-vitro-test.xml.html
[At Home In Vitro Test Example - JSON Representation]: Observation-at-home-in-vitro-test.json.html
[At Home In Vitro Test Example - TTL Representation]: Observation-at-home-in-vitro-test.ttl.html
[Audit-C Item Example 68517-2]: Observation-AUDIT-C-item-example-68517-2.html
[Audit-C Item Example 68517-2 - XML Representation]: Observation-AUDIT-C-item-example-68517-2.xml.html
[Audit-C Item Example 68517-2 - JSON Representation]: Observation-AUDIT-C-item-example-68517-2.json.html
[Audit-C Item Example 68517-2 - TTL Representation]: Observation-AUDIT-C-item-example-68517-2.ttl.html
[Audit-C Item Example 68519-8]: Observation-AUDIT-C-item-example-68519-8.html
[Audit-C Item Example 68519-8 - XML Representation]: Observation-AUDIT-C-item-example-68519-8.xml.html
[Audit-C Item Example 68519-8 - JSON Representation]: Observation-AUDIT-C-item-example-68519-8.json.html
[Audit-C Item Example 68519-8 - TTL Representation]: Observation-AUDIT-C-item-example-68519-8.ttl.html
[Audit-C Item Example 68520-6]: Observation-AUDIT-C-item-example-68520-6.html
[Audit-C Item Example 68520-6 - XML Representation]: Observation-AUDIT-C-item-example-68520-6.xml.html
[Audit-C Item Example 68520-6 - JSON Representation]: Observation-AUDIT-C-item-example-68520-6.json.html
[Audit-C Item Example 68520-6 - TTL Representation]: Observation-AUDIT-C-item-example-68520-6.ttl.html
[Audit-C Item Example 75626-2]: Observation-AUDIT-C-item-example-75626-2.html
[Audit-C Item Example 75626-2 - XML Representation]: Observation-AUDIT-C-item-example-75626-2.xml.html
[Audit-C Item Example 75626-2 - JSON Representation]: Observation-AUDIT-C-item-example-75626-2.json.html
[Audit-C Item Example 75626-2 - TTL Representation]: Observation-AUDIT-C-item-example-75626-2.ttl.html
[Audit-C Panel Example 72109-2]: Observation-AUDIT-C-panel-example-72109-2.html
[Audit-C Panel Example 72109-2 - XML Representation]: Observation-AUDIT-C-panel-example-72109-2.xml.html
[Audit-C Panel Example 72109-2 - JSON Representation]: Observation-AUDIT-C-panel-example-72109-2.json.html
[Audit-C Panel Example 72109-2 - TTL Representation]: Observation-AUDIT-C-panel-example-72109-2.ttl.html
[Average Blood Pressure Example]: Observation-average-blood-pressure.html
[Average Blood Pressure Example - XML Representation]: Observation-average-blood-pressure.xml.html
[Average Blood Pressure Example - JSON Representation]: Observation-average-blood-pressure.json.html
[Average Blood Pressure Example - TTL Representation]: Observation-average-blood-pressure.ttl.html
[Blood Pressure Example]: Observation-blood-pressure.html
[Blood Pressure Example - XML Representation]: Observation-blood-pressure.xml.html
[Blood Pressure Example - JSON Representation]: Observation-blood-pressure.json.html
[Blood Pressure Example - TTL Representation]: Observation-blood-pressure.ttl.html
[BMI Example]: Observation-bmi.html
[BMI Example - XML Representation]: Observation-bmi.xml.html
[BMI Example - JSON Representation]: Observation-bmi.json.html
[BMI Example - TTL Representation]: Observation-bmi.ttl.html
[BP Data Absent Example]: Observation-bp-data-absent.html
[BP Data Absent Example - XML Representation]: Observation-bp-data-absent.xml.html
[BP Data Absent Example - JSON Representation]: Observation-bp-data-absent.json.html
[BP Data Absent Example - TTL Representation]: Observation-bp-data-absent.ttl.html
[Capillary refill Time Nail Bed Example]: Observation-capillary-refill-time-nail-bed.html
[Capillary refill Time Nail Bed Example - XML Representation]: Observation-capillary-refill-time-nail-bed.xml.html
[Capillary refill Time Nail Bed Example - JSON Representation]: Observation-capillary-refill-time-nail-bed.json.html
[Capillary refill Time Nail Bed Example - TTL Representation]: Observation-capillary-refill-time-nail-bed.ttl.html
[Care Experience Preference Example]: Observation-care-experience-preference.html
[Care Experience Preference Example - XML Representation]: Observation-care-experience-preference.xml.html
[Care Experience Preference Example - JSON Representation]: Observation-care-experience-preference.json.html
[Care Experience Preference Example - TTL Representation]: Observation-care-experience-preference.ttl.html
[CareTeam Example]: CareTeam-example.html
[CareTeam Example - XML Representation]: CareTeam-example.xml.html
[CareTeam Example - JSON Representation]: CareTeam-example.json.html
[CareTeam Example - TTL Representation]: CareTeam-example.ttl.html
[CBC Example]: DiagnosticReport-cbc.html
[CBC Example - XML Representation]: DiagnosticReport-cbc.xml.html
[CBC Example - JSON Representation]: DiagnosticReport-cbc.json.html
[CBC Example - TTL Representation]: DiagnosticReport-cbc.ttl.html
[Chest Xray Example]: Media-chest-xray.html
[Chest Xray Example - XML Representation]: Media-chest-xray.xml.html
[Chest Xray Example - JSON Representation]: Media-chest-xray.json.html
[Chest Xray Example - TTL Representation]: Media-chest-xray.ttl.html
[Cigarette Pack-Years Example]: Observation-pack-years-example.html
[Cigarette Pack-Years Example - XML Representation]: Observation-pack-years-example.xml.html
[Cigarette Pack-Years Example - JSON Representation]: Observation-pack-years-example.json.html
[Cigarette Pack-Years Example - TTL Representation]: Observation-pack-years-example.ttl.html
[Colonoscopy Example]: CarePlan-colonoscopy.html
[Colonoscopy Example - XML Representation]: CarePlan-colonoscopy.xml.html
[Colonoscopy Example - JSON Representation]: CarePlan-colonoscopy.json.html
[Colonoscopy Example - TTL Representation]: CarePlan-colonoscopy.ttl.html
[Condition Duodenal Ulcer Example]: Condition-condition-duodenal-ulcer.html
[Condition Duodenal Ulcer Example - XML Representation]: Condition-condition-duodenal-ulcer.xml.html
[Condition Duodenal Ulcer Example - JSON Representation]: Condition-condition-duodenal-ulcer.json.html
[Condition Duodenal Ulcer Example - TTL Representation]: Condition-condition-duodenal-ulcer.ttl.html
[Coverage Example]: Coverage-coverage-example.html
[Coverage Example - XML Representation]: Coverage-coverage-example.xml.html
[Coverage Example - JSON Representation]: Coverage-coverage-example.json.html
[Coverage Example - TTL Representation]: Coverage-coverage-example.ttl.html
[Deceased Patient Example]: Patient-deceased-example.html
[Deceased Patient Example - XML Representation]: Patient-deceased-example.xml.html
[Deceased Patient Example - JSON Representation]: Patient-deceased-example.json.html
[Deceased Patient Example - TTL Representation]: Patient-deceased-example.ttl.html
[Device Defib Example]: Device-udi-2.html
[Device Defib Example - XML Representation]: Device-udi-2.xml.html
[Device Defib Example - JSON Representation]: Device-udi-2.json.html
[Device Defib Example - TTL Representation]: Device-udi-2.ttl.html
[Device Knee Example]: Device-udi-3.html
[Device Knee Example - XML Representation]: Device-udi-3.xml.html
[Device Knee Example - JSON Representation]: Device-udi-3.json.html
[Device Knee Example - TTL Representation]: Device-udi-3.ttl.html
[DiagnosticReport Cardiology Report Example]: DiagnosticReport-cardiology-report.html
[DiagnosticReport Cardiology Report Example - XML Representation]: DiagnosticReport-cardiology-report.xml.html
[DiagnosticReport Cardiology Report Example - JSON Representation]: DiagnosticReport-cardiology-report.json.html
[DiagnosticReport Cardiology Report Example - TTL Representation]: DiagnosticReport-cardiology-report.ttl.html
[DiagnosticReport Chest Xray Report Example]: DiagnosticReport-chest-xray-report.html
[DiagnosticReport Chest Xray Report Example - XML Representation]: DiagnosticReport-chest-xray-report.xml.html
[DiagnosticReport Chest Xray Report Example - JSON Representation]: DiagnosticReport-chest-xray-report.json.html
[DiagnosticReport Chest Xray Report Example - TTL Representation]: DiagnosticReport-chest-xray-report.ttl.html
[Discharge Summary Example]: DocumentReference-discharge-summary.html
[Discharge Summary Example - XML Representation]: DocumentReference-discharge-summary.xml.html
[Discharge Summary Example - JSON Representation]: DocumentReference-discharge-summary.json.html
[Discharge Summary Example - TTL Representation]: DocumentReference-discharge-summary.ttl.html
[Docref Example 1]: Bundle-docref-example-1.html
[Docref Example 1 - XML Representation]: Bundle-docref-example-1.xml.html
[Docref Example 1 - JSON Representation]: Bundle-docref-example-1.json.html
[Docref Example 1 - TTL Representation]: Bundle-docref-example-1.ttl.html
[Docref Example 2]: Bundle-docref-example-2.html
[Docref Example 2 - XML Representation]: Bundle-docref-example-2.xml.html
[Docref Example 2 - JSON Representation]: Bundle-docref-example-2.json.html
[Docref Example 2 - TTL Representation]: Bundle-docref-example-2.ttl.html
[DocumentReference ADI-DNI (PDF)]: DocumentReference-adi-intubation.html
[DocumentReference ADI-DNI (PDF) - XML Representation]: DocumentReference-adi-intubation.xml.html
[DocumentReference ADI-DNI (PDF) - JSON Representation]: DocumentReference-adi-intubation.json.html
[DocumentReference ADI-DNI (PDF) - TTL Representation]: DocumentReference-adi-intubation.ttl.html
[DocumentReference Living Will (PDF)]: DocumentReference-living-will.html
[DocumentReference Living Will (PDF) - XML Representation]: DocumentReference-living-will.xml.html
[DocumentReference Living Will (PDF) - JSON Representation]: DocumentReference-living-will.json.html
[DocumentReference Living Will (PDF) - TTL Representation]: DocumentReference-living-will.ttl.html
[DocumentReference POLST (PDF)]: DocumentReference-polst.html
[DocumentReference POLST (PDF) - XML Representation]: DocumentReference-polst.xml.html
[DocumentReference POLST (PDF) - JSON Representation]: DocumentReference-polst.json.html
[DocumentReference POLST (PDF) - TTL Representation]: DocumentReference-polst.ttl.html
[DXA Bone density quantitative measurement panel Example]: DiagnosticReport-bone-density-report.html
[DXA Bone density quantitative measurement panel Example - XML Representation]: DiagnosticReport-bone-density-report.xml.html
[DXA Bone density quantitative measurement panel Example - JSON Representation]: DiagnosticReport-bone-density-report.json.html
[DXA Bone density quantitative measurement panel Example - TTL Representation]: DiagnosticReport-bone-density-report.ttl.html
[DXA Femur-L ArMass BMD Example]: Observation-dxa-femur-l-armass-bmd.html
[DXA Femur-L ArMass BMD Example - XML Representation]: Observation-dxa-femur-l-armass-bmd.xml.html
[DXA Femur-L ArMass BMD Example - JSON Representation]: Observation-dxa-femur-l-armass-bmd.json.html
[DXA Femur-L ArMass BMD Example - TTL Representation]: Observation-dxa-femur-l-armass-bmd.ttl.html
[DXA Femur-L T-score BMD Example]: Observation-dxa-femur-l-t-score-bmd.html
[DXA Femur-L T-score BMD Example - XML Representation]: Observation-dxa-femur-l-t-score-bmd.xml.html
[DXA Femur-L T-score BMD Example - JSON Representation]: Observation-dxa-femur-l-t-score-bmd.json.html
[DXA Femur-L T-score BMD Example - TTL Representation]: Observation-dxa-femur-l-t-score-bmd.ttl.html
[DXA Femur-L Z-score BMD Example]: Observation-dxa-femur-l-z-score-bmd.html
[DXA Femur-L Z-score BMD Example - XML Representation]: Observation-dxa-femur-l-z-score-bmd.xml.html
[DXA Femur-L Z-score BMD Example - JSON Representation]: Observation-dxa-femur-l-z-score-bmd.json.html
[DXA Femur-L Z-score BMD Example - TTL Representation]: Observation-dxa-femur-l-z-score-bmd.ttl.html
[DXA Hip-L ArMass BMD Example]: Observation-dxa-hip-l-armass-bmd.html
[DXA Hip-L ArMass BMD Example - XML Representation]: Observation-dxa-hip-l-armass-bmd.xml.html
[DXA Hip-L ArMass BMD Example - JSON Representation]: Observation-dxa-hip-l-armass-bmd.json.html
[DXA Hip-L ArMass BMD Example - TTL Representation]: Observation-dxa-hip-l-armass-bmd.ttl.html
[DXA Hip-L T-score BMD Example]: Observation-dxa-hip-l-t-score-bmd.html
[DXA Hip-L T-score BMD Example - XML Representation]: Observation-dxa-hip-l-t-score-bmd.xml.html
[DXA Hip-L T-score BMD Example - JSON Representation]: Observation-dxa-hip-l-t-score-bmd.json.html
[DXA Hip-L T-score BMD Example - TTL Representation]: Observation-dxa-hip-l-t-score-bmd.ttl.html
[DXA Hip-L Z-score BMD Example]: Observation-dxa-hip-l-z-score-bmd.html
[DXA Hip-L Z-score BMD Example - XML Representation]: Observation-dxa-hip-l-z-score-bmd.xml.html
[DXA Hip-L Z-score BMD Example - JSON Representation]: Observation-dxa-hip-l-z-score-bmd.json.html
[DXA Hip-L Z-score BMD Example - TTL Representation]: Observation-dxa-hip-l-z-score-bmd.ttl.html
[EKG impression Example]: Observation-ekg-impression.html
[EKG impression Example - XML Representation]: Observation-ekg-impression.xml.html
[EKG impression Example - JSON Representation]: Observation-ekg-impression.json.html
[EKG impression Example - TTL Representation]: Observation-ekg-impression.ttl.html
[EKG lead Example]: Observation-ekg-lead.html
[EKG lead Example - XML Representation]: Observation-ekg-lead.xml.html
[EKG lead Example - JSON Representation]: Observation-ekg-lead.json.html
[EKG lead Example - TTL Representation]: Observation-ekg-lead.ttl.html
[EKG Strip Image]: Media-ekg-strip.html
[EKG Strip Image - XML Representation]: Media-ekg-strip.xml.html
[EKG Strip Image - JSON Representation]: Media-ekg-strip.json.html
[EKG Strip Image - TTL Representation]: Media-ekg-strip.ttl.html
[Encounter 1 Example]: Encounter-example-1.html
[Encounter 1 Example - XML Representation]: Encounter-example-1.xml.html
[Encounter 1 Example - JSON Representation]: Encounter-example-1.json.html
[Encounter 1 Example - TTL Representation]: Encounter-example-1.ttl.html
[Encounter 1036 Example]: Encounter-1036.html
[Encounter 1036 Example - XML Representation]: Encounter-1036.xml.html
[Encounter 1036 Example - JSON Representation]: Encounter-1036.json.html
[Encounter 1036 Example - TTL Representation]: Encounter-1036.ttl.html
[Encounter Delivery Example]: Encounter-delivery.html
[Encounter Delivery Example - XML Representation]: Encounter-delivery.xml.html
[Encounter Delivery Example - JSON Representation]: Encounter-delivery.json.html
[Encounter Delivery Example - TTL Representation]: Encounter-delivery.ttl.html
[Encounter Diagnosis Example 1]: Condition-encounter-diagnosis-example1.html
[Encounter Diagnosis Example 1 - XML Representation]: Condition-encounter-diagnosis-example1.xml.html
[Encounter Diagnosis Example 1 - JSON Representation]: Condition-encounter-diagnosis-example1.json.html
[Encounter Diagnosis Example 1 - TTL Representation]: Condition-encounter-diagnosis-example1.ttl.html
[Encounter Diagnosis Example 2]: Condition-encounter-diagnosis-example2.html
[Encounter Diagnosis Example 2 - XML Representation]: Condition-encounter-diagnosis-example2.xml.html
[Encounter Diagnosis Example 2 - JSON Representation]: Condition-encounter-diagnosis-example2.json.html
[Encounter Diagnosis Example 2 - TTL Representation]: Condition-encounter-diagnosis-example2.ttl.html
[Episode Summary Example]: DocumentReference-episode-summary.html
[Episode Summary Example - XML Representation]: DocumentReference-episode-summary.xml.html
[Episode Summary Example - JSON Representation]: DocumentReference-episode-summary.json.html
[Episode Summary Example - TTL Representation]: DocumentReference-episode-summary.ttl.html
[Erythrocytes Example]: Observation-cbc-erythrocytes.html
[Erythrocytes Example - XML Representation]: Observation-cbc-erythrocytes.xml.html
[Erythrocytes Example - JSON Representation]: Observation-cbc-erythrocytes.json.html
[Erythrocytes Example - TTL Representation]: Observation-cbc-erythrocytes.ttl.html
[Evs Item Example 68516-4]: Observation-EVS-item-example-68516-4.html
[Evs Item Example 68516-4 - XML Representation]: Observation-EVS-item-example-68516-4.xml.html
[Evs Item Example 68516-4 - JSON Representation]: Observation-EVS-item-example-68516-4.json.html
[Evs Item Example 68516-4 - TTL Representation]: Observation-EVS-item-example-68516-4.ttl.html
[Evs Item Example 89555-7]: Observation-EVS-item-example-89555-7.html
[Evs Item Example 89555-7 - XML Representation]: Observation-EVS-item-example-89555-7.xml.html
[Evs Item Example 89555-7 - JSON Representation]: Observation-EVS-item-example-89555-7.json.html
[Evs Item Example 89555-7 - TTL Representation]: Observation-EVS-item-example-89555-7.ttl.html
[Evs Panel Example 89574-8]: Observation-EVS-panel-example-89574-8.html
[Evs Panel Example 89574-8 - XML Representation]: Observation-EVS-panel-example-89574-8.xml.html
[Evs Panel Example 89574-8 - JSON Representation]: Observation-EVS-panel-example-89574-8.json.html
[Evs Panel Example 89574-8 - TTL Representation]: Observation-EVS-panel-example-89574-8.ttl.html
[Exercise Per Day Example]: Observation-exercise-per-day.html
[Exercise Per Day Example - XML Representation]: Observation-exercise-per-day.xml.html
[Exercise Per Day Example - JSON Representation]: Observation-exercise-per-day.json.html
[Exercise Per Day Example - TTL Representation]: Observation-exercise-per-day.ttl.html
[Exercise Per Week Example]: Observation-exercise-per-week.html
[Exercise Per Week Example - XML Representation]: Observation-exercise-per-week.xml.html
[Exercise Per Week Example - JSON Representation]: Observation-exercise-per-week.json.html
[Exercise Per Week Example - TTL Representation]: Observation-exercise-per-week.ttl.html
[Exercise Vital Sign Questionnaire Example]: Questionnaire-exercise-vital-sign.html
[Exercise Vital Sign Questionnaire Example - Testing]: Questionnaire-exercise-vital-sign-testing.html
[Exercise Vital Sign Questionnaire Example - XML Representation]: Questionnaire-exercise-vital-sign.xml.html
[Exercise Vital Sign Questionnaire Example - JSON Representation]: Questionnaire-exercise-vital-sign.json.html
[Exercise Vital Sign Questionnaire Example - TTL Representation]: Questionnaire-exercise-vital-sign.ttl.html
[Exercise Vital Sign QuestionnaireResponse Example]: QuestionnaireResponse-exercise-vital-sign.html
[Exercise Vital Sign QuestionnaireResponse Example - XML Representation]: QuestionnaireResponse-exercise-vital-sign.xml.html
[Exercise Vital Sign QuestionnaireResponse Example - JSON Representation]: QuestionnaireResponse-exercise-vital-sign.json.html
[Exercise Vital Sign QuestionnaireResponse Example - TTL Representation]: QuestionnaireResponse-exercise-vital-sign.ttl.html
[Goal 1 Example]: Goal-goal-1.html
[Goal 1 Example - XML Representation]: Goal-goal-1.xml.html
[Goal 1 Example - JSON Representation]: Goal-goal-1.json.html
[Goal 1 Example - TTL Representation]: Goal-goal-1.ttl.html
[Goal 2 Example]: Goal-goal-sdoh-2.html
[Goal 2 Example - XML Representation]: Goal-goal-sdoh-2.xml.html
[Goal 2 Example - JSON Representation]: Goal-goal-sdoh-2.json.html
[Goal 2 Example - TTL Representation]: Goal-goal-sdoh-2.ttl.html
[Head Circumference Example]: Observation-head-circumference.html
[Head Circumference Example - XML Representation]: Observation-head-circumference.xml.html
[Head Circumference Example - JSON Representation]: Observation-head-circumference.json.html
[Head Circumference Example - TTL Representation]: Observation-head-circumference.ttl.html
[Health Concern Example]: Condition-health-concern-example.html
[Health Concern Example - XML Representation]: Condition-health-concern-example.xml.html
[Health Concern Example - JSON Representation]: Condition-health-concern-example.json.html
[Health Concern Example - TTL Representation]: Condition-health-concern-example.ttl.html
[Heart Rate Example]: Observation-heart-rate.html
[Heart Rate Example - XML Representation]: Observation-heart-rate.xml.html
[Heart Rate Example - JSON Representation]: Observation-heart-rate.json.html
[Heart Rate Example - TTL Representation]: Observation-heart-rate.ttl.html
[Heart rate rhythm Example]: Observation-heart-rate-rhythm.html
[Heart rate rhythm Example - XML Representation]: Observation-heart-rate-rhythm.xml.html
[Heart rate rhythm Example - JSON Representation]: Observation-heart-rate-rhythm.json.html
[Heart rate rhythm Example - TTL Representation]: Observation-heart-rate-rhythm.ttl.html
[Height Example]: Observation-height.html
[Height Example - XML Representation]: Observation-height.xml.html
[Height Example - JSON Representation]: Observation-height.json.html
[Height Example - TTL Representation]: Observation-height.ttl.html
[Hematocrit Example]: Observation-cbc-hematocrit.html
[Hematocrit Example - XML Representation]: Observation-cbc-hematocrit.xml.html
[Hematocrit Example - JSON Representation]: Observation-cbc-hematocrit.json.html
[Hematocrit Example - TTL Representation]: Observation-cbc-hematocrit.ttl.html
[Hemoglobin Example]: Observation-cbc-hemoglobin.html
[Hemoglobin Example - XML Representation]: Observation-cbc-hemoglobin.xml.html
[Hemoglobin Example - JSON Representation]: Observation-cbc-hemoglobin.json.html
[Hemoglobin Example - TTL Representation]: Observation-cbc-hemoglobin.ttl.html
[HL7East Example]: Location-hl7east.html
[HL7East Example - XML Representation]: Location-hl7east.xml.html
[HL7East Example - JSON Representation]: Location-hl7east.json.html
[HL7East Example - TTL Representation]: Location-hl7east.ttl.html
[Hospital Location]: Location-hospital.html
[Hospital Location - XML Representation]: Location-hospital.xml.html
[Hospital Location - JSON Representation]: Location-hospital.json.html
[Hospital Location - TTL Representation]: Location-hospital.ttl.html
[HVS Item Example 88122-7]: Observation-HVS-item-example-88122-7.html
[HVS Item Example 88122-7 - XML Representation]: Observation-HVS-item-example-88122-7.xml.html
[HVS Item Example 88122-7 - JSON Representation]: Observation-HVS-item-example-88122-7.json.html
[HVS Item Example 88122-7 - TTL Representation]: Observation-HVS-item-example-88122-7.ttl.html
[HVS Item Example 88123-5]: Observation-HVS-item-example-88123-5.html
[HVS Item Example 88123-5 - XML Representation]: Observation-HVS-item-example-88123-5.xml.html
[HVS Item Example 88123-5 - JSON Representation]: Observation-HVS-item-example-88123-5.json.html
[HVS Item Example 88123-5 - TTL Representation]: Observation-HVS-item-example-88123-5.ttl.html
[HVS Item Example 88124-3]: Observation-HVS-item-example-88124-3.html
[HVS Item Example 88124-3 - XML Representation]: Observation-HVS-item-example-88124-3.xml.html
[HVS Item Example 88124-3 - JSON Representation]: Observation-HVS-item-example-88124-3.json.html
[HVS Item Example 88124-3 - TTL Representation]: Observation-HVS-item-example-88124-3.ttl.html
[HVSPanel Example 88121-9]: Observation-HVS-panel-example-88121-9.html
[HVSPanel Example 88121-9 - XML Representation]: Observation-HVS-panel-example-88121-9.xml.html
[HVSPanel Example 88121-9 - JSON Representation]: Observation-HVS-panel-example-88121-9.json.html
[HVSPanel Example 88121-9 - TTL Representation]: Observation-HVS-panel-example-88121-9.ttl.html
[Immunization Example 1]: Immunization-imm-1.html
[Immunization Example 1 - XML Representation]: Immunization-imm-1.xml.html
[Immunization Example 1 - JSON Representation]: Immunization-imm-1.json.html
[Immunization Example 1 - TTL Representation]: Immunization-imm-1.ttl.html
[Jugular vein distension Example]: Observation-jugular-vein-distension.html
[Jugular vein distension Example - XML Representation]: Observation-jugular-vein-distension.xml.html
[Jugular vein distension Example - JSON Representation]: Observation-jugular-vein-distension.json.html
[Jugular vein distension Example - TTL Representation]: Observation-jugular-vein-distension.ttl.html
[Length Example]: Observation-length.html
[Length Example - XML Representation]: Observation-length.xml.html
[Length Example - JSON Representation]: Observation-length.json.html
[Length Example - TTL Representation]: Observation-length.ttl.html
[Leukocytes Example]: Observation-cbc-leukocytes.html
[Leukocytes Example - XML Representation]: Observation-cbc-leukocytes.xml.html
[Leukocytes Example - JSON Representation]: Observation-cbc-leukocytes.json.html
[Leukocytes Example - TTL Representation]: Observation-cbc-leukocytes.ttl.html
[Lipemic Serum Specimen Example]: Specimen-example-serum-lipemic.html
[Lipemic Serum Specimen Example - XML Representation]: Specimen-example-serum-lipemic.xml.html
[Lipemic Serum Specimen Example - JSON Representation]: Specimen-example-serum-lipemic.json.html
[Lipemic Serum Specimen Example - TTL Representation]: Specimen-example-serum-lipemic.ttl.html
[MCH Example]: Observation-cbc-mch.html
[MCH Example - XML Representation]: Observation-cbc-mch.xml.html
[MCH Example - JSON Representation]: Observation-cbc-mch.json.html
[MCH Example - TTL Representation]: Observation-cbc-mch.ttl.html
[MCHC Example]: Observation-cbc-mchc.html
[MCHC Example - XML Representation]: Observation-cbc-mchc.xml.html
[MCHC Example - JSON Representation]: Observation-cbc-mchc.json.html
[MCHC Example - TTL Representation]: Observation-cbc-mchc.ttl.html
[MCV Example]: Observation-cbc-mcv.html
[MCV Example - XML Representation]: Observation-cbc-mcv.xml.html
[MCV Example - JSON Representation]: Observation-cbc-mcv.json.html
[MCV Example - TTL Representation]: Observation-cbc-mcv.ttl.html
[Medication Dispense Example]: MedicationDispense-medicationdispense-example.html
[Medication Dispense Example - XML Representation]: MedicationDispense-medicationdispense-example.xml.html
[Medication Dispense Example - JSON Representation]: MedicationDispense-medicationdispense-example.json.html
[Medication Dispense Example - TTL Representation]: MedicationDispense-medicationdispense-example.ttl.html
[MedicationRequest Coded Oral Axid Example]: MedicationRequest-medicationrequest-coded-oral-axid.html
[MedicationRequest Coded Oral Axid Example - XML Representation]: MedicationRequest-medicationrequest-coded-oral-axid.xml.html
[MedicationRequest Coded Oral Axid Example - JSON Representation]: MedicationRequest-medicationrequest-coded-oral-axid.json.html
[MedicationRequest Coded Oral Axid Example - TTL Representation]: MedicationRequest-medicationrequest-coded-oral-axid.ttl.html
[MedicationRequest Contained Oral Axid Example]: MedicationRequest-medicationrequest-contained-oral-axid.html
[MedicationRequest Contained Oral Axid Example - XML Representation]: MedicationRequest-medicationrequest-contained-oral-axid.xml.html
[MedicationRequest Contained Oral Axid Example - JSON Representation]: MedicationRequest-medicationrequest-contained-oral-axid.json.html
[MedicationRequest Contained Oral Axid Example - TTL Representation]: MedicationRequest-medicationrequest-contained-oral-axid.ttl.html
[MedicationRequest Referenced Oral Axid Example]: MedicationRequest-medicationrequest-referenced-oral-axid.html
[MedicationRequest Referenced Oral Axid Example - XML Representation]: MedicationRequest-medicationrequest-referenced-oral-axid.xml.html
[MedicationRequest Referenced Oral Axid Example - JSON Representation]: MedicationRequest-medicationrequest-referenced-oral-axid.json.html
[MedicationRequest Referenced Oral Axid Example - TTL Representation]: MedicationRequest-medicationrequest-referenced-oral-axid.ttl.html
[MedicationRequest Self Tylenol Example]: MedicationRequest-self-tylenol.html
[MedicationRequest Self Tylenol Example - XML Representation]: MedicationRequest-self-tylenol.xml.html
[MedicationRequest Self Tylenol Example - JSON Representation]: MedicationRequest-self-tylenol.json.html
[MedicationRequest Self Tylenol Example - TTL Representation]: MedicationRequest-self-tylenol.ttl.html
[Metabolic Panel Example]: DiagnosticReport-metabolic-panel.html
[Metabolic Panel Example - XML Representation]: DiagnosticReport-metabolic-panel.xml.html
[Metabolic Panel Example - JSON Representation]: DiagnosticReport-metabolic-panel.json.html
[Metabolic Panel Example - TTL Representation]: DiagnosticReport-metabolic-panel.ttl.html
[Missing Coded Data Example]: CareTeam-missing-coded-data-example.html
[Missing Coded Data Example - XML Representation]: CareTeam-missing-coded-data-example.xml.html
[Missing Coded Data Example - JSON Representation]: CareTeam-missing-coded-data-example.json.html
[Missing Coded Data Example - TTL Representation]: CareTeam-missing-coded-data-example.ttl.html
[Observation SatO2 FiO2 Example]: Observation-satO2-fiO2.html
[Observation SatO2 FiO2 Example - XML Representation]: Observation-satO2-fiO2.xml.html
[Observation SatO2 FiO2 Example - JSON Representation]: Observation-satO2-fiO2.json.html
[Observation SatO2 FiO2 Example - TTL Representation]: Observation-satO2-fiO2.ttl.html
[Occupation Observation Example]: Observation-observation-occupation.html
[Occupation Observation Example - XML Representation]: Observation-observation-occupation.xml.html
[Occupation Observation Example - JSON Representation]: Observation-observation-occupation.json.html
[Occupation Observation Example - TTL Representation]: Observation-observation-occupation.ttl.html
[Occupation Observation Example: Industry Unknown]: Observation-observation-occupation-industry-unknown.html
[Occupation Observation Example: Industry Unknown - XML Representation]: Observation-observation-occupation-industry-unknown.xml.html
[Occupation Observation Example: Industry Unknown - JSON Representation]: Observation-observation-occupation-industry-unknown.json.html
[Occupation Observation Example: Industry Unknown - TTL Representation]: Observation-observation-occupation-industry-unknown.ttl.html
[Occupation Observation Example: Unknown Occupation]: Observation-observation-occupation-unknown.html
[Occupation Observation Example: Unknown Occupation - XML Representation]: Observation-observation-occupation-unknown.xml.html
[Occupation Observation Example: Unknown Occupation - JSON Representation]: Observation-observation-occupation-unknown.json.html
[Occupation Observation Example: Unknown Occupation - TTL Representation]: Observation-observation-occupation-unknown.ttl.html
[OFC Percentile Example]: Observation-ofc-percentile.html
[OFC Percentile Example - XML Representation]: Observation-ofc-percentile.xml.html
[OFC Percentile Example - JSON Representation]: Observation-ofc-percentile.json.html
[OFC Percentile Example - TTL Representation]: Observation-ofc-percentile.ttl.html
[Organization 2 Example]: Organization-example-organization-2.html
[Organization 2 Example - XML Representation]: Organization-example-organization-2.xml.html
[Organization 2 Example - JSON Representation]: Organization-example-organization-2.json.html
[Organization 2 Example - TTL Representation]: Organization-example-organization-2.ttl.html
[Organization Acme Lab Example]: Organization-acme-lab.html
[Organization Acme Lab Example - XML Representation]: Organization-acme-lab.xml.html
[Organization Acme Lab Example - JSON Representation]: Organization-acme-lab.json.html
[Organization Acme Lab Example - TTL Representation]: Organization-acme-lab.ttl.html
[Organization Acme Payer Example]: Organization-acme-payer.html
[Organization Acme Payer Example - XML Representation]: Organization-acme-payer.xml.html
[Organization Acme Payer Example - JSON Representation]: Organization-acme-payer.json.html
[Organization Acme Payer Example - TTL Representation]: Organization-acme-payer.ttl.html
[Organization Holy Healthcare Example]: Organization-holy-healthcare.html
[Organization Holy Healthcare Example - XML Representation]: Organization-holy-healthcare.xml.html
[Organization Holy Healthcare Example - JSON Representation]: Organization-holy-healthcare.json.html
[Organization Holy Healthcare Example - TTL Representation]: Organization-holy-healthcare.ttl.html
[Oxygen Saturation Example]: Observation-oxygen-saturation.html
[Oxygen Saturation Example - XML Representation]: Observation-oxygen-saturation.xml.html
[Oxygen Saturation Example - JSON Representation]: Observation-oxygen-saturation.json.html
[Oxygen Saturation Example - TTL Representation]: Observation-oxygen-saturation.ttl.html
[P-R interval {EKG lead} Example]: Observation-p-r-interval-ekg-lead.html
[P-R interval {EKG lead} Example - XML Representation]: Observation-p-r-interval-ekg-lead.xml.html
[P-R interval {EKG lead} Example - JSON Representation]: Observation-p-r-interval-ekg-lead.json.html
[P-R interval {EKG lead} Example - TTL Representation]: Observation-p-r-interval-ekg-lead.ttl.html
[Patient Child Example]: Patient-child-example.html
[Patient Child Example - XML Representation]: Patient-child-example.xml.html
[Patient Child Example - JSON Representation]: Patient-child-example.json.html
[Patient Child Example - TTL Representation]: Patient-child-example.ttl.html
[Patient Example]: Patient-example.html
[Patient Example - XML Representation]: Patient-example.xml.html
[Patient Example - JSON Representation]: Patient-example.json.html
[Patient Example - TTL Representation]: Patient-example.ttl.html
[Patient Infant Example]: Patient-infant-example.html
[Patient Infant Example - XML Representation]: Patient-infant-example.xml.html
[Patient Infant Example - JSON Representation]: Patient-infant-example.json.html
[Patient Infant Example - TTL Representation]: Patient-infant-example.ttl.html
[Patient Niece Example]: RelatedPerson-shaw-niece.html
[Patient Niece Example - XML Representation]: RelatedPerson-shaw-niece.xml.html
[Patient Niece Example - JSON Representation]: RelatedPerson-shaw-niece.json.html
[Patient Niece Example - TTL Representation]: RelatedPerson-shaw-niece.ttl.html
[Pediatric BMI Example]: Observation-pediatric-bmi-example.html
[Pediatric BMI Example - XML Representation]: Observation-pediatric-bmi-example.xml.html
[Pediatric BMI Example - JSON Representation]: Observation-pediatric-bmi-example.json.html
[Pediatric BMI Example - TTL Representation]: Observation-pediatric-bmi-example.ttl.html
[Pediatric Wt Example]: Observation-pediatric-wt-example.html
[Pediatric Wt Example - XML Representation]: Observation-pediatric-wt-example.xml.html
[Pediatric Wt Example - JSON Representation]: Observation-pediatric-wt-example.json.html
[Pediatric Wt Example - TTL Representation]: Observation-pediatric-wt-example.ttl.html
[PHQ9 Item Example 44250-9]: Observation-PHQ9-item-example-44250-9.html
[PHQ9 Item Example 44250-9 - XML Representation]: Observation-PHQ9-item-example-44250-9.xml.html
[PHQ9 Item Example 44250-9 - JSON Representation]: Observation-PHQ9-item-example-44250-9.json.html
[PHQ9 Item Example 44250-9 - TTL Representation]: Observation-PHQ9-item-example-44250-9.ttl.html
[PHQ9 Item Example 44251-7]: Observation-PHQ9-item-example-44251-7.html
[PHQ9 Item Example 44251-7 - XML Representation]: Observation-PHQ9-item-example-44251-7.xml.html
[PHQ9 Item Example 44251-7 - JSON Representation]: Observation-PHQ9-item-example-44251-7.json.html
[PHQ9 Item Example 44251-7 - TTL Representation]: Observation-PHQ9-item-example-44251-7.ttl.html
[PHQ9 Item Example 44252-5]: Observation-PHQ9-item-example-44252-5.html
[PHQ9 Item Example 44252-5 - XML Representation]: Observation-PHQ9-item-example-44252-5.xml.html
[PHQ9 Item Example 44252-5 - JSON Representation]: Observation-PHQ9-item-example-44252-5.json.html
[PHQ9 Item Example 44252-5 - TTL Representation]: Observation-PHQ9-item-example-44252-5.ttl.html
[PHQ9 Item Example 44253-3]: Observation-PHQ9-item-example-44253-3.html
[PHQ9 Item Example 44253-3 - XML Representation]: Observation-PHQ9-item-example-44253-3.xml.html
[PHQ9 Item Example 44253-3 - JSON Representation]: Observation-PHQ9-item-example-44253-3.json.html
[PHQ9 Item Example 44253-3 - TTL Representation]: Observation-PHQ9-item-example-44253-3.ttl.html
[PHQ9 Item Example 44254-1]: Observation-PHQ9-item-example-44254-1.html
[PHQ9 Item Example 44254-1 - XML Representation]: Observation-PHQ9-item-example-44254-1.xml.html
[PHQ9 Item Example 44254-1 - JSON Representation]: Observation-PHQ9-item-example-44254-1.json.html
[PHQ9 Item Example 44254-1 - TTL Representation]: Observation-PHQ9-item-example-44254-1.ttl.html
[PHQ9 Item Example 44255-8]: Observation-PHQ9-item-example-44255-8.html
[PHQ9 Item Example 44255-8 - XML Representation]: Observation-PHQ9-item-example-44255-8.xml.html
[PHQ9 Item Example 44255-8 - JSON Representation]: Observation-PHQ9-item-example-44255-8.json.html
[PHQ9 Item Example 44255-8 - TTL Representation]: Observation-PHQ9-item-example-44255-8.ttl.html
[PHQ9 Item Example 44258-2]: Observation-PHQ9-item-example-44258-2.html
[PHQ9 Item Example 44258-2 - XML Representation]: Observation-PHQ9-item-example-44258-2.xml.html
[PHQ9 Item Example 44258-2 - JSON Representation]: Observation-PHQ9-item-example-44258-2.json.html
[PHQ9 Item Example 44258-2 - TTL Representation]: Observation-PHQ9-item-example-44258-2.ttl.html
[PHQ9 Item Example 44259-0]: Observation-PHQ9-item-example-44259-0.html
[PHQ9 Item Example 44259-0 - XML Representation]: Observation-PHQ9-item-example-44259-0.xml.html
[PHQ9 Item Example 44259-0 - JSON Representation]: Observation-PHQ9-item-example-44259-0.json.html
[PHQ9 Item Example 44259-0 - TTL Representation]: Observation-PHQ9-item-example-44259-0.ttl.html
[PHQ9 Item Example 44260-8]: Observation-PHQ9-item-example-44260-8.html
[PHQ9 Item Example 44260-8 - XML Representation]: Observation-PHQ9-item-example-44260-8.xml.html
[PHQ9 Item Example 44260-8 - JSON Representation]: Observation-PHQ9-item-example-44260-8.json.html
[PHQ9 Item Example 44260-8 - TTL Representation]: Observation-PHQ9-item-example-44260-8.ttl.html
[PHQ9 Item Example 44261-6]: Observation-PHQ9-item-example-44261-6.html
[PHQ9 Item Example 44261-6 - XML Representation]: Observation-PHQ9-item-example-44261-6.xml.html
[PHQ9 Item Example 44261-6 - JSON Representation]: Observation-PHQ9-item-example-44261-6.json.html
[PHQ9 Item Example 44261-6 - TTL Representation]: Observation-PHQ9-item-example-44261-6.ttl.html
[PHQ9 Item Example 69722-7]: Observation-PHQ9-item-example-69722-7.html
[PHQ9 Item Example 69722-7 - XML Representation]: Observation-PHQ9-item-example-69722-7.xml.html
[PHQ9 Item Example 69722-7 - JSON Representation]: Observation-PHQ9-item-example-69722-7.json.html
[PHQ9 Item Example 69722-7 - TTL Representation]: Observation-PHQ9-item-example-69722-7.ttl.html
[PHQ9 Panel Example 44249-1]: Observation-PHQ9-panel-example-44249-1.html
[PHQ9 Panel Example 44249-1 - XML Representation]: Observation-PHQ9-panel-example-44249-1.xml.html
[PHQ9 Panel Example 44249-1 - JSON Representation]: Observation-PHQ9-panel-example-44249-1.json.html
[PHQ9 Panel Example 44249-1 - TTL Representation]: Observation-PHQ9-panel-example-44249-1.ttl.html
[Platelets Example]: Observation-cbc-platelets.html
[Platelets Example - XML Representation]: Observation-cbc-platelets.xml.html
[Platelets Example - JSON Representation]: Observation-cbc-platelets.json.html
[Platelets Example - TTL Representation]: Observation-cbc-platelets.ttl.html
[Practitioner 1 Example]: Practitioner-practitioner-1.html
[Practitioner 1 Example - XML Representation]: Practitioner-practitioner-1.xml.html
[Practitioner 1 Example - JSON Representation]: Practitioner-practitioner-1.json.html
[Practitioner 1 Example - TTL Representation]: Practitioner-practitioner-1.ttl.html
[Practitioner 2 Example]: Practitioner-practitioner-2.html
[Practitioner 2 Example - XML Representation]: Practitioner-practitioner-2.xml.html
[Practitioner 2 Example - JSON Representation]: Practitioner-practitioner-2.json.html
[Practitioner 2 Example - TTL Representation]: Practitioner-practitioner-2.ttl.html
[Practitioner Pharmacist Example]: Practitioner-practitioner-pharmacist.html
[Practitioner Pharmacist Example - XML Representation]: Practitioner-practitioner-pharmacist.xml.html
[Practitioner Pharmacist Example - JSON Representation]: Practitioner-practitioner-pharmacist.json.html
[Practitioner Pharmacist Example - TTL Representation]: Practitioner-practitioner-pharmacist.ttl.html
[PractitionerRole_Practitioner_Endpoint_Bundle_Example Example]: Bundle-66c8856b-ba11-4876-8aa8-467aad8c11a2.html
[PractitionerRole_Practitioner_Endpoint_Bundle_Example Example - XML Representation]: Bundle-66c8856b-ba11-4876-8aa8-467aad8c11a2.xml.html
[PractitionerRole_Practitioner_Endpoint_Bundle_Example Example - JSON Representation]: Bundle-66c8856b-ba11-4876-8aa8-467aad8c11a2.json.html
[PractitionerRole_Practitioner_Endpoint_Bundle_Example Example - TTL Representation]: Bundle-66c8856b-ba11-4876-8aa8-467aad8c11a2.ttl.html
[Prapare Item Example 54899-0]: Observation-PRAPARE-item-example-54899-0.html
[Prapare Item Example 54899-0 - XML Representation]: Observation-PRAPARE-item-example-54899-0.xml.html
[Prapare Item Example 54899-0 - JSON Representation]: Observation-PRAPARE-item-example-54899-0.json.html
[Prapare Item Example 54899-0 - TTL Representation]: Observation-PRAPARE-item-example-54899-0.ttl.html
[Prapare Item Example 56051-6]: Observation-PRAPARE-item-example-56051-6.html
[Prapare Item Example 56051-6 - XML Representation]: Observation-PRAPARE-item-example-56051-6.xml.html
[Prapare Item Example 56051-6 - JSON Representation]: Observation-PRAPARE-item-example-56051-6.json.html
[Prapare Item Example 56051-6 - TTL Representation]: Observation-PRAPARE-item-example-56051-6.ttl.html
[Prapare Item Example 56799-0]: Observation-PRAPARE-item-example-56799-0.html
[Prapare Item Example 56799-0 - XML Representation]: Observation-PRAPARE-item-example-56799-0.xml.html
[Prapare Item Example 56799-0 - JSON Representation]: Observation-PRAPARE-item-example-56799-0.json.html
[Prapare Item Example 56799-0 - TTL Representation]: Observation-PRAPARE-item-example-56799-0.ttl.html
[Prapare Item Example 63512-8]: Observation-PRAPARE-item-example-63512-8.html
[Prapare Item Example 63512-8 - XML Representation]: Observation-PRAPARE-item-example-63512-8.xml.html
[Prapare Item Example 63512-8 - JSON Representation]: Observation-PRAPARE-item-example-63512-8.json.html
[Prapare Item Example 63512-8 - TTL Representation]: Observation-PRAPARE-item-example-63512-8.ttl.html
[Prapare Item Example 63586-2]: Observation-PRAPARE-item-example-63586-2.html
[Prapare Item Example 63586-2 - XML Representation]: Observation-PRAPARE-item-example-63586-2.xml.html
[Prapare Item Example 63586-2 - JSON Representation]: Observation-PRAPARE-item-example-63586-2.json.html
[Prapare Item Example 63586-2 - TTL Representation]: Observation-PRAPARE-item-example-63586-2.ttl.html
[Prapare Item Example 67875-5]: Observation-PRAPARE-item-example-67875-5.html
[Prapare Item Example 67875-5 - XML Representation]: Observation-PRAPARE-item-example-67875-5.xml.html
[Prapare Item Example 67875-5 - JSON Representation]: Observation-PRAPARE-item-example-67875-5.json.html
[Prapare Item Example 67875-5 - TTL Representation]: Observation-PRAPARE-item-example-67875-5.ttl.html
[Prapare Item Example 71802-3]: Observation-PRAPARE-item-example-71802-3.html
[Prapare Item Example 71802-3 - XML Representation]: Observation-PRAPARE-item-example-71802-3.xml.html
[Prapare Item Example 71802-3 - JSON Representation]: Observation-PRAPARE-item-example-71802-3.json.html
[Prapare Item Example 71802-3 - TTL Representation]: Observation-PRAPARE-item-example-71802-3.ttl.html
[Prapare Item Example 76437-3]: Observation-PRAPARE-item-example-76437-3.html
[Prapare Item Example 76437-3 - XML Representation]: Observation-PRAPARE-item-example-76437-3.xml.html
[Prapare Item Example 76437-3 - JSON Representation]: Observation-PRAPARE-item-example-76437-3.json.html
[Prapare Item Example 76437-3 - TTL Representation]: Observation-PRAPARE-item-example-76437-3.ttl.html
[Prapare Item Example 76501-6]: Observation-PRAPARE-item-example-76501-6.html
[Prapare Item Example 76501-6 - XML Representation]: Observation-PRAPARE-item-example-76501-6.xml.html
[Prapare Item Example 76501-6 - JSON Representation]: Observation-PRAPARE-item-example-76501-6.json.html
[Prapare Item Example 76501-6 - TTL Representation]: Observation-PRAPARE-item-example-76501-6.ttl.html
[Prapare Item Example 82589-3]: Observation-PRAPARE-item-example-82589-3.html
[Prapare Item Example 82589-3 - XML Representation]: Observation-PRAPARE-item-example-82589-3.xml.html
[Prapare Item Example 82589-3 - JSON Representation]: Observation-PRAPARE-item-example-82589-3.json.html
[Prapare Item Example 82589-3 - TTL Representation]: Observation-PRAPARE-item-example-82589-3.ttl.html
[Prapare Item Example 93026-3]: Observation-PRAPARE-item-example-93026-3.html
[Prapare Item Example 93026-3 - XML Representation]: Observation-PRAPARE-item-example-93026-3.xml.html
[Prapare Item Example 93026-3 - JSON Representation]: Observation-PRAPARE-item-example-93026-3.json.html
[Prapare Item Example 93026-3 - TTL Representation]: Observation-PRAPARE-item-example-93026-3.ttl.html
[Prapare Item Example 93027-1]: Observation-PRAPARE-item-example-93027-1.html
[Prapare Item Example 93027-1 - XML Representation]: Observation-PRAPARE-item-example-93027-1.xml.html
[Prapare Item Example 93027-1 - JSON Representation]: Observation-PRAPARE-item-example-93027-1.json.html
[Prapare Item Example 93027-1 - TTL Representation]: Observation-PRAPARE-item-example-93027-1.ttl.html
[Prapare Item Example 93028-9]: Observation-PRAPARE-item-example-93028-9.html
[Prapare Item Example 93028-9 - XML Representation]: Observation-PRAPARE-item-example-93028-9.xml.html
[Prapare Item Example 93028-9 - JSON Representation]: Observation-PRAPARE-item-example-93028-9.json.html
[Prapare Item Example 93028-9 - TTL Representation]: Observation-PRAPARE-item-example-93028-9.ttl.html
[Prapare Item Example 93029-7]: Observation-PRAPARE-item-example-93029-7.html
[Prapare Item Example 93029-7 - XML Representation]: Observation-PRAPARE-item-example-93029-7.xml.html
[Prapare Item Example 93029-7 - JSON Representation]: Observation-PRAPARE-item-example-93029-7.json.html
[Prapare Item Example 93029-7 - TTL Representation]: Observation-PRAPARE-item-example-93029-7.ttl.html
[Prapare Item Example 93030-5]: Observation-PRAPARE-item-example-93030-5.html
[Prapare Item Example 93030-5 - XML Representation]: Observation-PRAPARE-item-example-93030-5.xml.html
[Prapare Item Example 93030-5 - JSON Representation]: Observation-PRAPARE-item-example-93030-5.json.html
[Prapare Item Example 93030-5 - TTL Representation]: Observation-PRAPARE-item-example-93030-5.ttl.html
[Prapare Item Example 93033-9]: Observation-PRAPARE-item-example-93033-9.html
[Prapare Item Example 93033-9 - XML Representation]: Observation-PRAPARE-item-example-93033-9.xml.html
[Prapare Item Example 93033-9 - JSON Representation]: Observation-PRAPARE-item-example-93033-9.json.html
[Prapare Item Example 93033-9 - TTL Representation]: Observation-PRAPARE-item-example-93033-9.ttl.html
[Prapare Item Example 93034-7]: Observation-PRAPARE-item-example-93034-7.html
[Prapare Item Example 93034-7 - XML Representation]: Observation-PRAPARE-item-example-93034-7.xml.html
[Prapare Item Example 93034-7 - JSON Representation]: Observation-PRAPARE-item-example-93034-7.json.html
[Prapare Item Example 93034-7 - TTL Representation]: Observation-PRAPARE-item-example-93034-7.ttl.html
[Prapare Item Example 93035-4]: Observation-PRAPARE-item-example-93035-4.html
[Prapare Item Example 93035-4 - XML Representation]: Observation-PRAPARE-item-example-93035-4.xml.html
[Prapare Item Example 93035-4 - JSON Representation]: Observation-PRAPARE-item-example-93035-4.json.html
[Prapare Item Example 93035-4 - TTL Representation]: Observation-PRAPARE-item-example-93035-4.ttl.html
[Prapare Item Example 93038-8]: Observation-PRAPARE-item-example-93038-8.html
[Prapare Item Example 93038-8 - XML Representation]: Observation-PRAPARE-item-example-93038-8.xml.html
[Prapare Item Example 93038-8 - JSON Representation]: Observation-PRAPARE-item-example-93038-8.json.html
[Prapare Item Example 93038-8 - TTL Representation]: Observation-PRAPARE-item-example-93038-8.ttl.html
[Prapare Multiselect-Item Example 32624-9-Answer0]: Observation-PRAPARE-multiselect-item-example-32624-9-answer0.html
[Prapare Multiselect-Item Example 32624-9-Answer0 - XML Representation]: Observation-PRAPARE-multiselect-item-example-32624-9-answer0.xml.html
[Prapare Multiselect-Item Example 32624-9-Answer0 - JSON Representation]: Observation-PRAPARE-multiselect-item-example-32624-9-answer0.json.html
[Prapare Multiselect-Item Example 32624-9-Answer0 - TTL Representation]: Observation-PRAPARE-multiselect-item-example-32624-9-answer0.ttl.html
[Prapare Multiselect-Item Example 32624-9-Answer1]: Observation-PRAPARE-multiselect-item-example-32624-9-answer1.html
[Prapare Multiselect-Item Example 32624-9-Answer1 - XML Representation]: Observation-PRAPARE-multiselect-item-example-32624-9-answer1.xml.html
[Prapare Multiselect-Item Example 32624-9-Answer1 - JSON Representation]: Observation-PRAPARE-multiselect-item-example-32624-9-answer1.json.html
[Prapare Multiselect-Item Example 32624-9-Answer1 - TTL Representation]: Observation-PRAPARE-multiselect-item-example-32624-9-answer1.ttl.html
[Prapare Multiselect-Item Example 93031-3-Answer0]: Observation-PRAPARE-multiselect-item-example-93031-3-answer0.html
[Prapare Multiselect-Item Example 93031-3-Answer0 - XML Representation]: Observation-PRAPARE-multiselect-item-example-93031-3-answer0.xml.html
[Prapare Multiselect-Item Example 93031-3-Answer0 - JSON Representation]: Observation-PRAPARE-multiselect-item-example-93031-3-answer0.json.html
[Prapare Multiselect-Item Example 93031-3-Answer0 - TTL Representation]: Observation-PRAPARE-multiselect-item-example-93031-3-answer0.ttl.html
[Prapare Multiselect-Item Example 93031-3-Answer1]: Observation-PRAPARE-multiselect-item-example-93031-3-answer1.html
[Prapare Multiselect-Item Example 93031-3-Answer1 - XML Representation]: Observation-PRAPARE-multiselect-item-example-93031-3-answer1.xml.html
[Prapare Multiselect-Item Example 93031-3-Answer1 - JSON Representation]: Observation-PRAPARE-multiselect-item-example-93031-3-answer1.json.html
[Prapare Multiselect-Item Example 93031-3-Answer1 - TTL Representation]: Observation-PRAPARE-multiselect-item-example-93031-3-answer1.ttl.html
[Prapare Panel Example 93025-5]: Observation-PRAPARE-panel-example-93025-5.html
[Prapare Panel Example 93025-5 - XML Representation]: Observation-PRAPARE-panel-example-93025-5.xml.html
[Prapare Panel Example 93025-5 - JSON Representation]: Observation-PRAPARE-panel-example-93025-5.json.html
[Prapare Panel Example 93025-5 - TTL Representation]: Observation-PRAPARE-panel-example-93025-5.ttl.html
[Prapare Panel Example 93039-6]: Observation-PRAPARE-panel-example-93039-6.html
[Prapare Panel Example 93039-6 - XML Representation]: Observation-PRAPARE-panel-example-93039-6.xml.html
[Prapare Panel Example 93039-6 - JSON Representation]: Observation-PRAPARE-panel-example-93039-6.json.html
[Prapare Panel Example 93039-6 - TTL Representation]: Observation-PRAPARE-panel-example-93039-6.ttl.html
[Prapare Panel Example 93040-4]: Observation-PRAPARE-panel-example-93040-4.html
[Prapare Panel Example 93040-4 - XML Representation]: Observation-PRAPARE-panel-example-93040-4.xml.html
[Prapare Panel Example 93040-4 - JSON Representation]: Observation-PRAPARE-panel-example-93040-4.json.html
[Prapare Panel Example 93040-4 - TTL Representation]: Observation-PRAPARE-panel-example-93040-4.ttl.html
[Prapare Panel Example 93041-2]: Observation-PRAPARE-panel-example-93041-2.html
[Prapare Panel Example 93041-2 - XML Representation]: Observation-PRAPARE-panel-example-93041-2.xml.html
[Prapare Panel Example 93041-2 - JSON Representation]: Observation-PRAPARE-panel-example-93041-2.json.html
[Prapare Panel Example 93041-2 - TTL Representation]: Observation-PRAPARE-panel-example-93041-2.ttl.html
[Prapare Panel Example 93042-0]: Observation-PRAPARE-panel-example-93042-0.html
[Prapare Panel Example 93042-0 - XML Representation]: Observation-PRAPARE-panel-example-93042-0.xml.html
[Prapare Panel Example 93042-0 - JSON Representation]: Observation-PRAPARE-panel-example-93042-0.json.html
[Prapare Panel Example 93042-0 - TTL Representation]: Observation-PRAPARE-panel-example-93042-0.ttl.html
[PRAPARE Panel Example 93043-8]: Observation-PRAPARE-panel-example-93043-8.html
[PRAPARE Panel Example 93043-8 - XML Representation]: Observation-PRAPARE-panel-example-93043-8.xml.html
[PRAPARE Panel Example 93043-8 - JSON Representation]: Observation-PRAPARE-panel-example-93043-8.json.html
[PRAPARE Panel Example 93043-8 - TTL Representation]: Observation-PRAPARE-panel-example-93043-8.ttl.html
[Pregnancy Intent Observation Example]: Observation-pregnancy-intent.html
[Pregnancy Intent Observation Example - XML Representation]: Observation-pregnancy-intent.xml.html
[Pregnancy Intent Observation Example - JSON Representation]: Observation-pregnancy-intent.json.html
[Pregnancy Intent Observation Example - TTL Representation]: Observation-pregnancy-intent.ttl.html
[Pregnancy Status Observation Example]: Observation-pregnancy-status.html
[Pregnancy Status Observation Example - XML Representation]: Observation-pregnancy-status.xml.html
[Pregnancy Status Observation Example - JSON Representation]: Observation-pregnancy-status.json.html
[Pregnancy Status Observation Example - TTL Representation]: Observation-pregnancy-status.ttl.html
[Procedure Defibrillator Implant Example]: Procedure-defib-implant.html
[Procedure Defibrillator Implant Example - XML Representation]: Procedure-defib-implant.xml.html
[Procedure Defibrillator Implant Example - JSON Representation]: Procedure-defib-implant.json.html
[Procedure Defibrillator Implant Example - TTL Representation]: Procedure-defib-implant.ttl.html
[Pulse intensity Palpation Example]: Observation-pulse-intensity-palpation.html
[Pulse intensity Palpation Example - XML Representation]: Observation-pulse-intensity-palpation.xml.html
[Pulse intensity Palpation Example - JSON Representation]: Observation-pulse-intensity-palpation.json.html
[Pulse intensity Palpation Example - TTL Representation]: Observation-pulse-intensity-palpation.ttl.html
[Q-T interval {EKG lead} Example]: Observation-q-t-interval-ekg-lead.html
[Q-T interval {EKG lead} Example - XML Representation]: Observation-q-t-interval-ekg-lead.xml.html
[Q-T interval {EKG lead} Example - JSON Representation]: Observation-q-t-interval-ekg-lead.json.html
[Q-T interval {EKG lead} Example - TTL Representation]: Observation-q-t-interval-ekg-lead.ttl.html
[QRS dur {EKG lead} Example]: Observation-qrs-dur-ekg-lead.html
[QRS dur {EKG lead} Example - XML Representation]: Observation-qrs-dur-ekg-lead.xml.html
[QRS dur {EKG lead} Example - JSON Representation]: Observation-qrs-dur-ekg-lead.json.html
[QRS dur {EKG lead} Example - TTL Representation]: Observation-qrs-dur-ekg-lead.ttl.html
[Questionnaire Hunger Vital Sign (HVS) Example]: Questionnaire-hunger-vital-sign-example.html
[Questionnaire Hunger Vital Sign (HVS) Example - Testing]: Questionnaire-hunger-vital-sign-example-testing.html
[Questionnaire Hunger Vital Sign (HVS) Example - XML Representation]: Questionnaire-hunger-vital-sign-example.xml.html
[Questionnaire Hunger Vital Sign (HVS) Example - JSON Representation]: Questionnaire-hunger-vital-sign-example.json.html
[Questionnaire Hunger Vital Sign (HVS) Example - TTL Representation]: Questionnaire-hunger-vital-sign-example.ttl.html
[Questionnaire PHQ-9 Example]: Questionnaire-phq-9-example.html
[Questionnaire PHQ-9 Example - Testing]: Questionnaire-phq-9-example-testing.html
[Questionnaire PHQ-9 Example - XML Representation]: Questionnaire-phq-9-example.xml.html
[Questionnaire PHQ-9 Example - JSON Representation]: Questionnaire-phq-9-example.json.html
[Questionnaire PHQ-9 Example - TTL Representation]: Questionnaire-phq-9-example.ttl.html
[Questionnaire PRAPARE Example]: Questionnaire-prapare-example.html
[Questionnaire PRAPARE Example - Testing]: Questionnaire-prapare-example-testing.html
[Questionnaire PRAPARE Example - XML Representation]: Questionnaire-prapare-example.xml.html
[Questionnaire PRAPARE Example - JSON Representation]: Questionnaire-prapare-example.json.html
[Questionnaire PRAPARE Example - TTL Representation]: Questionnaire-prapare-example.ttl.html
[QuestionnaireResponse Glascow Coma Score Example]: QuestionnaireResponse-glascow-coma-score.html
[QuestionnaireResponse Glascow Coma Score Example - XML Representation]: QuestionnaireResponse-glascow-coma-score.xml.html
[QuestionnaireResponse Glascow Coma Score Example - JSON Representation]: QuestionnaireResponse-glascow-coma-score.json.html
[QuestionnaireResponse Glascow Coma Score Example - TTL Representation]: QuestionnaireResponse-glascow-coma-score.ttl.html
[QuestionnaireResponse Hunger Vital Sign (HVS) Example]: QuestionnaireResponse-hunger-vital-sign-example.html
[QuestionnaireResponse Hunger Vital Sign (HVS) Example - XML Representation]: QuestionnaireResponse-hunger-vital-sign-example.xml.html
[QuestionnaireResponse Hunger Vital Sign (HVS) Example - JSON Representation]: QuestionnaireResponse-hunger-vital-sign-example.json.html
[QuestionnaireResponse Hunger Vital Sign (HVS) Example - TTL Representation]: QuestionnaireResponse-hunger-vital-sign-example.ttl.html
[QuestionnaireResponse PHQ-9 Example]: QuestionnaireResponse-phq-9-example.html
[QuestionnaireResponse PHQ-9 Example - XML Representation]: QuestionnaireResponse-phq-9-example.xml.html
[QuestionnaireResponse PHQ-9 Example - JSON Representation]: QuestionnaireResponse-phq-9-example.json.html
[QuestionnaireResponse PHQ-9 Example - TTL Representation]: QuestionnaireResponse-phq-9-example.ttl.html
[QuestionnaireResponse PRAPARE Example]: QuestionnaireResponse-prapare-example.html
[QuestionnaireResponse PRAPARE Example - XML Representation]: QuestionnaireResponse-prapare-example.xml.html
[QuestionnaireResponse PRAPARE Example - JSON Representation]: QuestionnaireResponse-prapare-example.json.html
[QuestionnaireResponse PRAPARE Example - TTL Representation]: QuestionnaireResponse-prapare-example.ttl.html
[Rehab Example]: Procedure-rehab.html
[Rehab Example - XML Representation]: Procedure-rehab.xml.html
[Rehab Example - JSON Representation]: Procedure-rehab.json.html
[Rehab Example - TTL Representation]: Procedure-rehab.ttl.html
[Respiratory Rate Example]: Observation-respiratory-rate.html
[Respiratory Rate Example - XML Representation]: Observation-respiratory-rate.xml.html
[Respiratory Rate Example - JSON Representation]: Observation-respiratory-rate.json.html
[Respiratory Rate Example - TTL Representation]: Observation-respiratory-rate.ttl.html
[Saint Luke W Endpoint Example]: Organization-saint-luke-w-endpoint.html
[Saint Luke W Endpoint Example - XML Representation]: Organization-saint-luke-w-endpoint.xml.html
[Saint Luke W Endpoint Example - JSON Representation]: Organization-saint-luke-w-endpoint.json.html
[Saint Luke W Endpoint Example - TTL Representation]: Organization-saint-luke-w-endpoint.ttl.html
[SDOH Problem/Health Concern Example]: Condition-condition-SDOH-example.html
[SDOH Problem/Health Concern Example - XML Representation]: Condition-condition-SDOH-example.xml.html
[SDOH Problem/Health Concern Example - JSON Representation]: Condition-condition-SDOH-example.json.html
[SDOH Problem/Health Concern Example - TTL Representation]: Condition-condition-SDOH-example.ttl.html
[Serum BUN Example]: Observation-serum-bun.html
[Serum BUN Example - XML Representation]: Observation-serum-bun.xml.html
[Serum BUN Example - JSON Representation]: Observation-serum-bun.json.html
[Serum BUN Example - TTL Representation]: Observation-serum-bun.ttl.html
[Serum Calcium Example]: Observation-serum-calcium.html
[Serum Calcium Example - XML Representation]: Observation-serum-calcium.xml.html
[Serum Calcium Example - JSON Representation]: Observation-serum-calcium.json.html
[Serum Calcium Example - TTL Representation]: Observation-serum-calcium.ttl.html
[Serum Chloride Example]: Observation-serum-chloride.html
[Serum Chloride Example - XML Representation]: Observation-serum-chloride.xml.html
[Serum Chloride Example - JSON Representation]: Observation-serum-chloride.json.html
[Serum Chloride Example - TTL Representation]: Observation-serum-chloride.ttl.html
[Serum CO2 Example]: Observation-serum-co2.html
[Serum CO2 Example - XML Representation]: Observation-serum-co2.xml.html
[Serum CO2 Example - JSON Representation]: Observation-serum-co2.json.html
[Serum CO2 Example - TTL Representation]: Observation-serum-co2.ttl.html
[Serum Creatinine Example]: Observation-serum-creatinine.html
[Serum Creatinine Example - XML Representation]: Observation-serum-creatinine.xml.html
[Serum Creatinine Example - JSON Representation]: Observation-serum-creatinine.json.html
[Serum Creatinine Example - TTL Representation]: Observation-serum-creatinine.ttl.html
[Serum Glucose Example]: Observation-serum-glucose.html
[Serum Glucose Example - XML Representation]: Observation-serum-glucose.xml.html
[Serum Glucose Example - JSON Representation]: Observation-serum-glucose.json.html
[Serum Glucose Example - TTL Representation]: Observation-serum-glucose.ttl.html
[Serum Potassium Example]: Observation-serum-potassium.html
[Serum Potassium Example - XML Representation]: Observation-serum-potassium.xml.html
[Serum Potassium Example - JSON Representation]: Observation-serum-potassium.json.html
[Serum Potassium Example - TTL Representation]: Observation-serum-potassium.ttl.html
[Serum Sodium Example]: Observation-serum-sodium.html
[Serum Sodium Example - XML Representation]: Observation-serum-sodium.xml.html
[Serum Sodium Example - JSON Representation]: Observation-serum-sodium.json.html
[Serum Sodium Example - TTL Representation]: Observation-serum-sodium.ttl.html
[Serum Specimen Example]: Specimen-specimen-example-serum.html
[Serum Specimen Example - XML Representation]: Specimen-specimen-example-serum.xml.html
[Serum Specimen Example - JSON Representation]: Specimen-specimen-example-serum.json.html
[Serum Specimen Example - TTL Representation]: Specimen-specimen-example-serum.ttl.html
[Serum Total Bilirubin Example]: Observation-serum-total-bilirubin.html
[Serum Total Bilirubin Example - XML Representation]: Observation-serum-total-bilirubin.xml.html
[Serum Total Bilirubin Example - JSON Representation]: Observation-serum-total-bilirubin.json.html
[Serum Total Bilirubin Example - TTL Representation]: Observation-serum-total-bilirubin.ttl.html
[ServiceRequest CBC Example]: ServiceRequest-cbc.html
[ServiceRequest CBC Example - XML Representation]: ServiceRequest-cbc.xml.html
[ServiceRequest CBC Example - JSON Representation]: ServiceRequest-cbc.json.html
[ServiceRequest CBC Example - TTL Representation]: ServiceRequest-cbc.ttl.html
[ServiceRequest Chest XRay Example]: ServiceRequest-chest-xray.html
[ServiceRequest Chest XRay Example - XML Representation]: ServiceRequest-chest-xray.xml.html
[ServiceRequest Chest XRay Example - JSON Representation]: ServiceRequest-chest-xray.json.html
[ServiceRequest Chest XRay Example - TTL Representation]: ServiceRequest-chest-xray.ttl.html
[ServiceRequest EKG Example]: ServiceRequest-ekg.html
[ServiceRequest EKG Example - XML Representation]: ServiceRequest-ekg.xml.html
[ServiceRequest EKG Example - JSON Representation]: ServiceRequest-ekg.json.html
[ServiceRequest EKG Example - TTL Representation]: ServiceRequest-ekg.ttl.html
[ServiceRequest Example]: ServiceRequest-foodpantry-referral.html
[ServiceRequest Example - XML Representation]: ServiceRequest-foodpantry-referral.xml.html
[ServiceRequest Example - JSON Representation]: ServiceRequest-foodpantry-referral.json.html
[ServiceRequest Example - TTL Representation]: ServiceRequest-foodpantry-referral.ttl.html
[ServiceRequest for Rehab Example]: ServiceRequest-rehab.html
[ServiceRequest for Rehab Example - XML Representation]: ServiceRequest-rehab.xml.html
[ServiceRequest for Rehab Example - JSON Representation]: ServiceRequest-rehab.json.html
[ServiceRequest for Rehab Example - TTL Representation]: ServiceRequest-rehab.ttl.html
[Sexual Orientation Observation Example]: Observation-sexual-orientation-example.html
[Sexual Orientation Observation Example - XML Representation]: Observation-sexual-orientation-example.xml.html
[Sexual Orientation Observation Example - JSON Representation]: Observation-sexual-orientation-example.json.html
[Sexual Orientation Observation Example - TTL Representation]: Observation-sexual-orientation-example.ttl.html
[Simple Observation Cognitive Status Example]: Observation-simple-observation-cognitive-status.html
[Simple Observation Cognitive Status Example - XML Representation]: Observation-simple-observation-cognitive-status.xml.html
[Simple Observation Cognitive Status Example - JSON Representation]: Observation-simple-observation-cognitive-status.json.html
[Simple Observation Cognitive Status Example - TTL Representation]: Observation-simple-observation-cognitive-status.ttl.html
[Simple Observation Disability Status Example]: Observation-simple-observation-disability-status.html
[Simple Observation Disability Status Example - XML Representation]: Observation-simple-observation-disability-status.xml.html
[Simple Observation Disability Status Example - JSON Representation]: Observation-simple-observation-disability-status.json.html
[Simple Observation Disability Status Example - TTL Representation]: Observation-simple-observation-disability-status.ttl.html
[Simple Observation Functional Status Example]: Observation-simple-observation-functional-status.html
[Simple Observation Functional Status Example - XML Representation]: Observation-simple-observation-functional-status.xml.html
[Simple Observation Functional Status Example - JSON Representation]: Observation-simple-observation-functional-status.json.html
[Simple Observation Functional Status Example - TTL Representation]: Observation-simple-observation-functional-status.ttl.html
[Simple Observation SDOH Example]: Observation-simple-observation-sdoh.html
[Simple Observation SDOH Example - XML Representation]: Observation-simple-observation-sdoh.xml.html
[Simple Observation SDOH Example - JSON Representation]: Observation-simple-observation-sdoh.json.html
[Simple Observation SDOH Example - TTL Representation]: Observation-simple-observation-sdoh.ttl.html
[Some Day Smoker Example]: Observation-some-day-smoker.html
[Some Day Smoker Example - XML Representation]: Observation-some-day-smoker.xml.html
[Some Day Smoker Example - JSON Representation]: Observation-some-day-smoker.json.html
[Some Day Smoker Example - TTL Representation]: Observation-some-day-smoker.ttl.html
[Substance Use Status Example]: Observation-substance-use-status.html
[Substance Use Status Example - XML Representation]: Observation-substance-use-status.xml.html
[Substance Use Status Example - JSON Representation]: Observation-substance-use-status.json.html
[Substance Use Status Example - TTL Representation]: Observation-substance-use-status.ttl.html
[Taps Item Example 75889-6]: Observation-TAPS-item-example-75889-6.html
[Taps Item Example 75889-6 - XML Representation]: Observation-TAPS-item-example-75889-6.xml.html
[Taps Item Example 75889-6 - JSON Representation]: Observation-TAPS-item-example-75889-6.json.html
[Taps Item Example 75889-6 - TTL Representation]: Observation-TAPS-item-example-75889-6.ttl.html
[Taps Item Example 88037-7]: Observation-TAPS-item-example-88037-7.html
[Taps Item Example 88037-7 - XML Representation]: Observation-TAPS-item-example-88037-7.xml.html
[Taps Item Example 88037-7 - JSON Representation]: Observation-TAPS-item-example-88037-7.json.html
[Taps Item Example 88037-7 - TTL Representation]: Observation-TAPS-item-example-88037-7.ttl.html
[Taps Item Example 96842-0]: Observation-TAPS-item-example-96842-0.html
[Taps Item Example 96842-0 - XML Representation]: Observation-TAPS-item-example-96842-0.xml.html
[Taps Item Example 96842-0 - JSON Representation]: Observation-TAPS-item-example-96842-0.json.html
[Taps Item Example 96842-0 - TTL Representation]: Observation-TAPS-item-example-96842-0.ttl.html
[Taps Item Example 96843-8]: Observation-TAPS-item-example-96843-8.html
[Taps Item Example 96843-8 - XML Representation]: Observation-TAPS-item-example-96843-8.xml.html
[Taps Item Example 96843-8 - JSON Representation]: Observation-TAPS-item-example-96843-8.json.html
[Taps Item Example 96843-8 - TTL Representation]: Observation-TAPS-item-example-96843-8.ttl.html
[Taps Item Example 96844-6]: Observation-TAPS-item-example-96844-6.html
[Taps Item Example 96844-6 - XML Representation]: Observation-TAPS-item-example-96844-6.xml.html
[Taps Item Example 96844-6 - JSON Representation]: Observation-TAPS-item-example-96844-6.json.html
[Taps Item Example 96844-6 - TTL Representation]: Observation-TAPS-item-example-96844-6.ttl.html
[Taps Panel Example 96841-2]: Observation-TAPS-panel-example-96841-2.html
[Taps Panel Example 96841-2 - XML Representation]: Observation-TAPS-panel-example-96841-2.xml.html
[Taps Panel Example 96841-2 - JSON Representation]: Observation-TAPS-panel-example-96841-2.json.html
[Taps Panel Example 96841-2 - TTL Representation]: Observation-TAPS-panel-example-96841-2.ttl.html
[Temperature Example]: Observation-temperature.html
[Temperature Example - XML Representation]: Observation-temperature.xml.html
[Temperature Example - JSON Representation]: Observation-temperature.json.html
[Temperature Example - TTL Representation]: Observation-temperature.ttl.html
[Tobacco, Alcohol, Prescription medications, and other Substance use screen (TAPS) Questionnaire Example]: Questionnaire-TAPS.html
[Tobacco, Alcohol, Prescription medications, and other Substance use screen (TAPS) Questionnaire Example - Testing]: Questionnaire-TAPS-testing.html
[Tobacco, Alcohol, Prescription medications, and other Substance use screen (TAPS) Questionnaire Example - XML Representation]: Questionnaire-TAPS.xml.html
[Tobacco, Alcohol, Prescription medications, and other Substance use screen (TAPS) Questionnaire Example - JSON Representation]: Questionnaire-TAPS.json.html
[Tobacco, Alcohol, Prescription medications, and other Substance use screen (TAPS) Questionnaire Example - TTL Representation]: Questionnaire-TAPS.ttl.html
[Tobacco, Alcohol, Prescription medications, and other Substance use screen (TAPS) QuestionnaireResponse Example]: QuestionnaireResponse-TAPS.html
[Tobacco, Alcohol, Prescription medications, and other Substance use screen (TAPS) QuestionnaireResponse Example - XML Representation]: QuestionnaireResponse-TAPS.xml.html
[Tobacco, Alcohol, Prescription medications, and other Substance use screen (TAPS) QuestionnaireResponse Example - JSON Representation]: QuestionnaireResponse-TAPS.json.html
[Tobacco, Alcohol, Prescription medications, and other Substance use screen (TAPS) QuestionnaireResponse Example - TTL Representation]: QuestionnaireResponse-TAPS.ttl.html
[Treatment Intervention Preference Example]: Observation-treatment-intervention-preference.html
[Treatment Intervention Preference Example - XML Representation]: Observation-treatment-intervention-preference.xml.html
[Treatment Intervention Preference Example - JSON Representation]: Observation-treatment-intervention-preference.json.html
[Treatment Intervention Preference Example - TTL Representation]: Observation-treatment-intervention-preference.ttl.html
[UDI 1 Example]: Device-udi-1.html
[UDI 1 Example - XML Representation]: Device-udi-1.xml.html
[UDI 1 Example - JSON Representation]: Device-udi-1.json.html
[UDI 1 Example - TTL Representation]: Device-udi-1.ttl.html
[Urobilinogen Example]: Observation-urobilinogen.html
[Urobilinogen Example - XML Representation]: Observation-urobilinogen.xml.html
[Urobilinogen Example - JSON Representation]: Observation-urobilinogen.json.html
[Urobilinogen Example - TTL Representation]: Observation-urobilinogen.ttl.html
[Uscore Med1 Example]: Medication-uscore-med1.html
[Uscore Med1 Example - XML Representation]: Medication-uscore-med1.xml.html
[Uscore Med1 Example - JSON Representation]: Medication-uscore-med1.json.html
[Uscore Med1 Example - TTL Representation]: Medication-uscore-med1.ttl.html
[Uscore Med2 Example]: Medication-uscore-med2.html
[Uscore Med2 Example - XML Representation]: Medication-uscore-med2.xml.html
[Uscore Med2 Example - JSON Representation]: Medication-uscore-med2.json.html
[Uscore Med2 Example - TTL Representation]: Medication-uscore-med2.ttl.html
[Weight Example]: Observation-weight.html
[Weight Example - XML Representation]: Observation-weight.xml.html
[Weight Example - JSON Representation]: Observation-weight.json.html
[Weight Example - TTL Representation]: Observation-weight.ttl.html
[Xray Chest Findings Example]: Observation-xray-chest-findings.html
[Xray Chest Findings Example - XML Representation]: Observation-xray-chest-findings.xml.html
[Xray Chest Findings Example - JSON Representation]: Observation-xray-chest-findings.json.html
[Xray Chest Findings Example - TTL Representation]: Observation-xray-chest-findings.ttl.html
[Xray Chest Impression Example]: Observation-xray-chest-impression.html
[Xray Chest Impression Example - XML Representation]: Observation-xray-chest-impression.xml.html
[Xray Chest Impression Example - JSON Representation]: Observation-xray-chest-impression.json.html
[Xray Chest Impression Example - TTL Representation]: Observation-xray-chest-impression.ttl.html


---

File: repos/HL7_SLASH_US-Core/input/includes/prov-white-list.md

{%- assign black_list = "Extension,Provenance,Medication,Organization,Practitioner,PractitionerRole,Location,Specimen,Questionnaire" | split:"," -%}
{% assign r_list = "" %}
{%- for sd_hash in site.data.structuredefinitions -%}
  {%- assign sd = sd_hash[1] -%}
  {%- unless black_list contains sd.type -%}
       {% capture r_list %}{{ r_list | append: sd.type | append: "," }}{% endcapture %}
  {%- endunless -%}
{%- endfor -%}
{% assign ur_list = r_list | split: "," | uniq | sort %}
<ul>
<li> The US Core Provenance resource <strong>SHALL</strong> be supported for these US Core resource types: 
<ul id="prov-white-list">
{% for r in  ur_list %}
    <li>{{r}}</li>
{% endfor %}
</ul>
</li>
</ul>


---

File: repos/HL7_SLASH_US-Core/input/includes/provenance-author-bullet.md


<!-- This liquid script creates context specific text for each pages author and author role implementer guidance using input data from input/data/provenance-elements.csv with the following columns:
- Row
- Is_Source : boolean flag if is provenance source element
- Observation_grouping: tag for grouping profiles together like ADI or vitals
- polled_vendors: boolean flag if vendors surveyed on their use of the provenance source element for this profile
- US_Core_Profile: title of US Core Profile (secondary sort parameter)
- URL: Canonical URL of US Core Profile
- Path: relative path of US Core Profile
- Type: resource type of US Core Profile (primary sort parameter)
- FiveWs_author: provenance source element choice based on FiveWs mapping (one per row)
- FiveWs_source: provenance source element choice based on FiveWs mapping (one per row)
- FiveWs_actor: provenance source element choice based on FiveWs mapping (one per row)
- is_MS: boolean flag if provenance source element is US Core Must Support
- vendor_support_element: boolean flag if vendors surveyed on their use of the provenance source element
- Target_Resource_1: provenance source element target resource (can be up to 7)
- Target_Resource_1_is_MS: boolean flag if provenance source element target resource is US Core Must Support
- vendor_support_Target_Resource_1: boolean flag if vendors surveyed on their use of the provenance source element target resource
- Target_Resource_2: provenance source element target resource (can be up to 7)
- Target_Resource_2_is_MS: boolean flag if provenance source element target resource is US Core Must Support
- vendor_support_Target_Resource_2: boolean flag if vendors surveyed on their use of the provenance source element target resource
- Target_Resource_3: provenance source element target resource (can be up to 7)
- vendor_support_Target_Resource_3: boolean flag if vendors surveyed on their use of the provenance source element target resource
- Target_Resource_4: provenance source element target resource (can be up to 7)
- vendor_support_Target_Resource_4: boolean flag if vendors surveyed on their use of the provenance source element target resource
- Target_Resource_5: provenance source element target resource (can be up to 7)
- vendor_support_Target_Resource_5: boolean flag if vendors surveyed on their use of the provenance source element target resource
- Target_Resource_6: provenance source element target resource (can be up to 7)
- vendor_support_Target_Resource_6: boolean flag if vendors surveyed on their use of the provenance source element target resource
- Target_Resource_7: provenance source element target resource (can be up to 7)
- vendor_support_Target_Resource_7: boolean flag if vendors surveyed on their use of the provenance source element target resource
- Comments
-  no include parameters:  -->
{% assign rows = site.data.provenance-elements -%}
{% assign author = '' -%}
{% for item in rows -%}
  {% if item.Is_Source == "TRUE" -%}
  {% if item.Path == page.path -%}
   {% assign author = author | append: item.FiveWs_author | append: item.FiveWs_source | append: item.FiveWs_actor -%}
   {% assign author = author | append: "," -%}
    {% endif -%}
    {% endif -%}
{% endfor -%}
{% for item in site.data.provenance-elements -%}
  {% if item.Is_Source == "TRUE" -%}
  {% if item.Path == page.path -%}
 - <span class="bg-success" markdown="1">\*The profile elements `{{ author | split: "," | join: " and " }}` communicate the [individual level provenance] author data corresponding to the U.S. Core Data for Interoperability (USCDI) Provenance Author Data Elements.<!-- new-content -->
       {% break -%}
    {% endif -%}
    {% endif -%}
{% endfor %}


---

File: repos/HL7_SLASH_US-Core/input/includes/provenance-source-table-generator.md

<!-- This liquid script creates a US Core provenance requirements table using input data from input/data/provenance-elements.csv
with the following columns:
- Row
- Is_Source : boolean flag if is provenance source element
- Survey1, Survey2 : results of online vendor surveys
- Observation_grouping: tag for grouping profiles together like ADI or vitals
- polled_vendors: boolean flag if vendors surveyed on their use of the provenance source element for this profile
- US_Core_Profile: title of US Core Profile (secondary sort parameter)
- URL: Canonical URL of US Core Profile
- Path: relative path of US Core Profile
- Type: resource type of US Core Profile (primary sort parameter)
- FiveWs_author: provenance source element choice based on FiveWs mapping (one per row)
- FiveWs_source: provenance source element choice based on FiveWs mapping (one per row)
- FiveWs_actor: provenance source element choice based on FiveWs mapping (one per row)
- is_MS: boolean flag if provenance source element is US Core Must Support
- vendor_support_element: boolean flag if vendors surveyed on their use of the provenance source element
- Target_Resource_1: provenance source element target resource (can be up to 7)
- Target_Resource_1_is_MS: boolean flag if provenance source element target resource is US Core Must Support
- vendor_support_Target_Resource_1: boolean flag if vendors surveyed on their use of the provenance source element target resource
- Target_Resource_2: provenance source element target resource (can be up to 7)
- Target_Resource_2_is_MS: boolean flag if provenance source element target resource is US Core Must Support
- vendor_support_Target_Resource_2: boolean flag if vendors surveyed on their use of the provenance source element target resource
- Target_Resource_3: provenance source element target resource (can be up to 7)
- vendor_support_Target_Resource_3: boolean flag if vendors surveyed on their use of the provenance source element target resource
- Target_Resource_4: provenance source element target resource (can be up to 7)
- vendor_support_Target_Resource_4: boolean flag if vendors surveyed on their use of the provenance source element target resource
- Target_Resource_5: provenance source element target resource (can be up to 7)
- vendor_support_Target_Resource_5: boolean flag if vendors surveyed on their use of the provenance source element target resource
- Target_Resource_6: provenance source element target resource (can be up to 7)
- vendor_support_Target_Resource_6: boolean flag if vendors surveyed on their use of the provenance source element target resource
- Target_Resource_7: provenance source element target resource (can be up to 7)
- vendor_support_Target_Resource_7: boolean flag if vendors surveyed on their use of the provenance source element target resource
- Target_Resource_8: provenance source element target resource (can be up to 7)
- vendor_support_Target_Resource_7: boolean flag if vendors surveyed on their use of the provenance source element target resource
- Comments
-  no include parameters:  -->

{% assign rows = site.data.provenance-elements %}
{% for item in rows %}
{% if forloop.first %}
<table class="grid">
<thead>
<tr>
<!-- <th>Row #</th> -->
<th>US Core Profile</th>
<!-- <th>Survey 2 Results</th> -->
<th>Data Element Corresponding to Author Provenance</th>
<th>Target Resource Types Corresponding to Author Role Provenance</th>
</tr>
</thead>
<tbody>
{% endif %}

{% if item["Is_Source"] == "TRUE" %}

{% assign targets= '' %}
{% if item.Target_Resource_1 %}
  {% if item.Target_Resource_1_is_MS == "TRUE" %}{% assign targets = "<strong>Practitioner**</strong>," %}
  {% else %}{% assign targets = "Practitioner," %}{% endif %}
{% endif %}
{% if item.Target_Resource_2 %}
  {% if item.Target_Resource_2_is_MS == "TRUE" %}{% assign targets = targets | append: "<strong>Organization**</strong>," %}
  {% else %}{% assign targets = targets | append: "Organization," %}{% endif %}
{% endif %}
{% if item.Target_Resource_3 %}
  {% if item.Target_Resource_3_is_MS == "TRUE" %}{% assign targets = targets | append: "<strong>PractitionerRole**</strong>," %}
  {% else %}{% assign targets = targets | append: "PractitionerRole," %}{% endif %}
{% endif %}
{% if item.Target_Resource_4 %}
{% if item.Target_Resource_4_is_MS == "TRUE" %}{% assign targets = targets | append: "<strong>Patient**</strong>," %}
  {% else %}{% assign targets = targets | append: "Patient," %}{% endif %}
{% endif %}
{% if item.Target_Resource_5 %}
  {% assign targets = targets | append: "RelatedPerson," %}
{% endif %}
{% if item.Target_Resource_6 %}
  {% assign targets = targets | append: "CareTeam," %}
{% endif %}
{% if item.Target_Resource_7 %}
  {% assign targets = targets | append: "Device," %}
{% endif %}
{% if item.Target_Resource_7 %}
  {% assign targets = targets | append: "DeviceMetric," %}
{% endif %}

<tr>
<td><a href="{{item.Path}}">{{item.US_Core_Profile}}</a></td>
<td><code>{% if item.is_MS == "TRUE" %}<strong>{% endif %}{{item.FiveWs_author | append: item.FiveWs_source | append: item.FiveWs_actor}}{% if item.is_MS == "TRUE" %}*</strong>{% endif %}</code></td>
<td>{{ targets | split: "," | join: ", " }}</td>
</tr>
{% endif %}

{% if forloop.last %}
</tbody>
</table>
{% endif %}
{% endfor %}


---

File: repos/HL7_SLASH_US-Core/input/includes/questionnaireresponse-context-note.md


#### Searching QuestionnaireResponse by Context

Searching a patient's QuestionnaireResponses by specific context such as those defined in [US Core Category] can be achieved by querying the metadata on the associated Questionnaire. Specifically, [`Questionnaire.useContext`] with a code="focus" and value of "sdoh"/"functionalStatus"/etc. could be accomplished using a chained search:

`GET [base]/QuestionnaireResponse?subject=Patient/123&questionnaire.context-type-value=focus$sdoh`


---

File: repos/HL7_SLASH_US-Core/input/includes/quickstart-intro.md

<!-- This liquid script creates context specific text for each pages quickstart using input data from input/data/scopes.csv -->
{% assign smart_scope = false %}
{% for scope in site.data.scopes %}
  {% if scope.page_path == page.path %}
    {% capture smart_scope %}

      {% assign scope_string = scope | inspect %} 
      {% assign conf_verbs = "SHALL,SHOULD,MAY" | split: "," %}
      {% for conf in conf_verbs %}
        {%- if scope_string contains conf %}
Servers providing access to {{ scope.data_element }} data **{{conf}}** support these [US Core SMART Scopes]:
          {%- if scope.resource_conformance == conf %}
  -  [resource level scopes]\: `<patient|user|system>/{{ scope.resource_type }}.rs`
          {% endif -%}
          {% for i in (1..6) %}{% assign category =  'category_' | append: i %}{% assign category_conformance =  'category_' | append: i |append: '_conformance' -%}
            {%- if scope[category] and scope[category_conformance] == conf %}
  -  [granular scopes]\: `<patient|user|system>/{{ scope.resource_type }}.rs?category={{ scope[category] }}`
            {% endif -%}
          {% endfor -%}
        {% endif -%}
      {% endfor -%}
     {% endcapture %}
    {% break %}
  {% endif %}
{% endfor %}

---

**Quick Start**{:#search style="font-size: 20px;"}
<a name="quick-start"> </a>

---

Below is an overview of the required Server RESTful FHIR interactions for this profile - for example, search and read operations - when supporting the US Core interactions to access this profile's information (Profile Support + Interaction Support). Note that systems that support only US Core Profiles (Profile Only Support) are not required to support these interactions.  See the [US Core Server CapabilityStatement] for a complete list of supported RESTful interactions for this IG.

{% if smart_scope -%}- See the [Scopes Format](scopes.html#scopes-format) section for a description of the SMART scopes syntax.{% endif %}
- See the [Search Syntax](general-guidance.html#search-syntax) section for a description of the US Core search syntax.
- See the [General Requirements] section for additional rules and expectations when a Server requires status parameters.
- See the [General Guidance] section for additional guidance on searching for multiple patients.





{% if smart_scope -%}
#### US Core Scopes
{{smart_scope}}
{% endif %}






---

File: repos/HL7_SLASH_US-Core/input/includes/r4-link-list.md

[Account]: {{site.data.fhir.path}}account.html
[ActivityDefinition]: {{site.data.fhir.path}}activitydefinition.html
[AdverseEvent]: {{site.data.fhir.path}}adverseevent.html
[AllergyIntolerance]: {{site.data.fhir.path}}allergyintolerance.html
[Appointment]: {{site.data.fhir.path}}appointment.html
[AppointmentResponse]: {{site.data.fhir.path}}appointmentresponse.html
[AuditEvent]: {{site.data.fhir.path}}auditevent.html
[Basic]: {{site.data.fhir.path}}basic.html
[BiologicallyDerivedProduct]: {{site.data.fhir.path}}biologicallyderivedproduct.html
[BodyStructure]: {{site.data.fhir.path}}bodystructure.html
[CapabilityStatement]: {{site.data.fhir.path}}capabilitystatement.html
[CarePlan]: {{site.data.fhir.path}}careplan.html
[CareTeam]: {{site.data.fhir.path}}careteam.html
[CatalogEntry]: {{site.data.fhir.path}}catalogentry.html
[ChargeItem]: {{site.data.fhir.path}}chargeitem.html
[ChargeItemDefinition]: {{site.data.fhir.path}}chargeitemdefinition.html
[Claim]: {{site.data.fhir.path}}claim.html
[ClaimResponse]: {{site.data.fhir.path}}claimresponse.html
[ClinicalImpression]: {{site.data.fhir.path}}clinicalimpression.html
[CodeSystem]: {{site.data.fhir.path}}codesystem.html
[Communication]: {{site.data.fhir.path}}communication.html
[CommunicationRequest]: {{site.data.fhir.path}}communicationrequest.html
[CompartmentDefinition]: {{site.data.fhir.path}}compartmentdefinition.html
[Composition]: {{site.data.fhir.path}}composition.html
[ConceptMap]: {{site.data.fhir.path}}conceptmap.html
[Condition]: {{site.data.fhir.path}}condition.html
[Consent]: {{site.data.fhir.path}}consent.html
[Contract]: {{site.data.fhir.path}}contract.html
[Coverage]: {{site.data.fhir.path}}coverage.html
[CoverageEligibilityRequest]: {{site.data.fhir.path}}coverageeligibilityrequest.html
[CoverageEligibilityResponse]: {{site.data.fhir.path}}coverageeligibilityresponse.html
[DetectedIssue]: {{site.data.fhir.path}}detectedissue.html
[Device]: {{site.data.fhir.path}}device.html
[DeviceDefinition]: {{site.data.fhir.path}}devicedefinition.html
[DeviceMetric]: {{site.data.fhir.path}}devicemetric.html
[DeviceRequest]: {{site.data.fhir.path}}devicerequest.html
[DeviceUseStatement]: {{site.data.fhir.path}}deviceusestatement.html
[DiagnosticReport]: {{site.data.fhir.path}}diagnosticreport.html
[DocumentManifest]: {{site.data.fhir.path}}documentmanifest.html
[DocumentReference]: {{site.data.fhir.path}}documentreference.html
[EffectEvidenceSynthesis]: {{site.data.fhir.path}}effectevidencesynthesis.html
[Encounter]: {{site.data.fhir.path}}encounter.html
[Endpoint]: {{site.data.fhir.path}}endpoint.html
[EnrollmentRequest]: {{site.data.fhir.path}}enrollmentrequest.html
[EnrollmentResponse]: {{site.data.fhir.path}}enrollmentresponse.html
[EpisodeOfCare]: {{site.data.fhir.path}}episodeofcare.html
[EventDefinition]: {{site.data.fhir.path}}eventdefinition.html
[Evidence]: {{site.data.fhir.path}}evidence.html
[EvidenceVariable]: {{site.data.fhir.path}}evidencevariable.html
[ExampleScenario]: {{site.data.fhir.path}}examplescenario.html
[ExplanationOfBenefit]: {{site.data.fhir.path}}explanationofbenefit.html
[FamilyMemberHistory]: {{site.data.fhir.path}}familymemberhistory.html
[Flag]: {{site.data.fhir.path}}flag.html
[Goal]: {{site.data.fhir.path}}goal.html
[GraphDefinition]: {{site.data.fhir.path}}graphdefinition.html
[Group]: {{site.data.fhir.path}}group.html
[GuidanceResponse]: {{site.data.fhir.path}}guidanceresponse.html
[HealthcareService]: {{site.data.fhir.path}}healthcareservice.html
[ImagingStudy]: {{site.data.fhir.path}}imagingstudy.html
[Immunization]: {{site.data.fhir.path}}immunization.html
[ImmunizationEvaluation]: {{site.data.fhir.path}}immunizationevaluation.html
[ImmunizationRecommendation]: {{site.data.fhir.path}}immunizationrecommendation.html
[ImplementationGuide]: {{site.data.fhir.path}}implementationguide.html
[InsurancePlan]: {{site.data.fhir.path}}insuranceplan.html
[Invoice]: {{site.data.fhir.path}}invoice.html
[Library]: {{site.data.fhir.path}}library.html
[Linkage]: {{site.data.fhir.path}}linkage.html
[List]: {{site.data.fhir.path}}list.html
[Location]: {{site.data.fhir.path}}location.html
[Measure]: {{site.data.fhir.path}}measure.html
[MeasureReport]: {{site.data.fhir.path}}measurereport.html
[Media]: {{site.data.fhir.path}}media.html
[Medication]: {{site.data.fhir.path}}medication.html
[MedicationAdministration]: {{site.data.fhir.path}}medicationadministration.html
[MedicationDispense]: {{site.data.fhir.path}}medicationdispense.html
[MedicationKnowledge]: {{site.data.fhir.path}}medicationknowledge.html
[MedicationRequest]: {{site.data.fhir.path}}medicationrequest.html
[MedicationStatement]: {{site.data.fhir.path}}medicationstatement.html
[MedicinalProduct]: {{site.data.fhir.path}}medicinalproduct.html
[MedicinalProductAuthorization]: {{site.data.fhir.path}}medicinalproductauthorization.html
[MedicinalProductContraindication]: {{site.data.fhir.path}}medicinalproductcontraindication.html
[MedicinalProductIndication]: {{site.data.fhir.path}}medicinalproductindication.html
[MedicinalProductIngredient]: {{site.data.fhir.path}}medicinalproductingredient.html
[MedicinalProductInteraction]: {{site.data.fhir.path}}medicinalproductinteraction.html
[MedicinalProductManufactured]: {{site.data.fhir.path}}medicinalproductmanufactured.html
[MedicinalProductPackaged]: {{site.data.fhir.path}}medicinalproductpackaged.html
[MedicinalProductPharmaceutical]: {{site.data.fhir.path}}medicinalproductpharmaceutical.html
[MedicinalProductUndesirableEffect]: {{site.data.fhir.path}}medicinalproductundesirableeffect.html
[MessageDefinition]: {{site.data.fhir.path}}messagedefinition.html
[MessageHeader]: {{site.data.fhir.path}}messageheader.html
[MetadataResource]: {{site.data.fhir.path}}metadataresource.html
[MolecularSequence]: {{site.data.fhir.path}}molecularsequence.html
[NamingSystem]: {{site.data.fhir.path}}namingsystem.html
[NutritionOrder]: {{site.data.fhir.path}}nutritionorder.html
[Observation]: {{site.data.fhir.path}}observation.html
[ObservationDefinition]: {{site.data.fhir.path}}observationdefinition.html
[OperationDefinition]: {{site.data.fhir.path}}operationdefinition.html
[OperationOutcome]: {{site.data.fhir.path}}operationoutcome.html
[Organization]: {{site.data.fhir.path}}organization.html
[OrganizationAffiliation]: {{site.data.fhir.path}}organizationaffiliation.html
[Patient]: {{site.data.fhir.path}}patient.html
[PaymentNotice]: {{site.data.fhir.path}}paymentnotice.html
[PaymentReconciliation]: {{site.data.fhir.path}}paymentreconciliation.html
[Person]: {{site.data.fhir.path}}person.html
[PlanDefinition]: {{site.data.fhir.path}}plandefinition.html
[Practitioner]: {{site.data.fhir.path}}practitioner.html
[PractitionerRole]: {{site.data.fhir.path}}practitionerrole.html
[Procedure]: {{site.data.fhir.path}}procedure.html
[Provenance]: {{site.data.fhir.path}}provenance.html
[Questionnaire]: {{site.data.fhir.path}}questionnaire.html
[QuestionnaireResponse]: {{site.data.fhir.path}}questionnaireresponse.html
[RelatedPerson]: {{site.data.fhir.path}}relatedperson.html
[RequestGroup]: {{site.data.fhir.path}}requestgroup.html
[ResearchDefinition]: {{site.data.fhir.path}}researchdefinition.html
[ResearchElementDefinition]: {{site.data.fhir.path}}researchelementdefinition.html
[ResearchStudy]: {{site.data.fhir.path}}researchstudy.html
[ResearchSubject]: {{site.data.fhir.path}}researchsubject.html
[RiskAssessment]: {{site.data.fhir.path}}riskassessment.html
[RiskEvidenceSynthesis]: {{site.data.fhir.path}}riskevidencesynthesis.html
[Schedule]: {{site.data.fhir.path}}schedule.html
[SearchParameter]: {{site.data.fhir.path}}searchparameter.html
[ServiceRequest]: {{site.data.fhir.path}}servicerequest.html
[Slot]: {{site.data.fhir.path}}slot.html
[Specimen]: {{site.data.fhir.path}}specimen.html
[SpecimenDefinition]: {{site.data.fhir.path}}specimendefinition.html
[StructureDefinition]: {{site.data.fhir.path}}structuredefinition.html
[StructureMap]: {{site.data.fhir.path}}structuremap.html
[Subscription]: {{site.data.fhir.path}}subscription.html
[Substance]: {{site.data.fhir.path}}substance.html
[SubstanceNucleicAcid]: {{site.data.fhir.path}}substancenucleicacid.html
[SubstancePolymer]: {{site.data.fhir.path}}substancepolymer.html
[SubstanceProtein]: {{site.data.fhir.path}}substanceprotein.html
[SubstanceReferenceInformation]: {{site.data.fhir.path}}substancereferenceinformation.html
[SubstanceSourceMaterial]: {{site.data.fhir.path}}substancesourcematerial.html
[SubstanceSpecification]: {{site.data.fhir.path}}substancespecification.html
[SupplyDelivery]: {{site.data.fhir.path}}supplydelivery.html
[SupplyRequest]: {{site.data.fhir.path}}supplyrequest.html
[Task]: {{site.data.fhir.path}}task.html
[TerminologyCapabilities]: {{site.data.fhir.path}}terminologycapabilities.html
[TestReport]: {{site.data.fhir.path}}testreport.html
[TestScript]: {{site.data.fhir.path}}testscript.html
[ValueSet]: {{site.data.fhir.path}}valueset.html
[VerificationResult]: {{site.data.fhir.path}}verificationresult.html
[VisionPrescription]: {{site.data.fhir.path}}visionprescription.html


---

File: repos/HL7_SLASH_US-Core/input/includes/read-and-write-format-scenario1.md


System A accepts contentType `text/plain` in a create transaction and returns `text/html` in a read transaction.

**Request for Write contentType**

~~~
GET [base]/ValueSet/$expand?context=http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference#DocumentReference.content.attachment.contentType&contextDirection=incoming
~~~

**Response**

~~~
HTTP/1.1 200 OK
[other headers]
~~~

**Response body**

~~~
{
  "resourceType": "ValueSet",
  "id": "scenario1-Server-write-contenttype",
  "url": "http://acme.org/fhir/ValueSet/in-mimetypes-1",
  "version": "3.0.1",
  "name": "ArgonautServerWriteMimeTypes",
  "title": "Argonaut Server Write Mime Types Value Set",
  "status": "draft",
  "date": "2018-11-08T20:29:00+00:00",
  "expansion": {
    "identifier": "urn:uuid:5fc51f5a-4dbc-44f8-8fe5-203d261222f0",
    "timestamp": "2018-11-13T02:55:48.405Z",
    "parameter": [
      {
        "name": "context",
        "valueString": "DocumentReference.content.attachment.contentType"
      },
      {
        "name": "contextDirection",
        "valueString": "incoming"
      }
    ],
    "contains": [
      {
        "system": "urn:ietf:bcp:13",
        "code": "text/plain"
      }
    ]
  }
}
~~~

**Request for Read contentType**

~~~
GET [base]/ValueSet/$expand?context=http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference#DocumentReference.content.attachment.contentType&contextDirection=outgoing
~~~

**Response**

~~~
HTTP/1.1 200 OK
[other headers]
~~~

**Response body**

~~~
{
  "resourceType": "ValueSet",
  "id": "scenario1-Server-read-contenttype",
  "url": "http://acme.org/fhir/ValueSet/out-mimetypes-1",
  "version": "3.0.1",
  "name": "ArgonautServerReadMimeTypes",
  "title": "Argonaut Server Read Mime Types Value Set",
  "status": "draft",
  "date": "2018-11-08T20:29:00+00:00",
  "expansion": {
    "identifier": "urn:uuid:5fc51f5a-4dbc-44f8-8fe5-203d261222f0",
    "timestamp": "2018-11-13T02:55:48.405Z",
    "parameter": [
      {
        "name": "context",
        "valueString": "DocumentReference.content.attachment.contentType"
      },
      {
        "name": "contextDirection",
        "valueString": "outgoing"
      }
    ],
    "contains": [
      {
        "system": "urn:ietf:bcp:13",
        "code": "text/html"
      }
    ]
  }
}
~~~


---

File: repos/HL7_SLASH_US-Core/input/includes/read-and-write-format-scenario2.md



System A accepts contentType `text/xhtml` in a create transaction and returns `application/pdf` in a read transaction.

**Request for Write contentType**

~~~
GET [base]/ValueSet/$expand?context=http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference#DocumentReference.content.attachment.contentType&amp;contextDirection=incoming
~~~

**Response**

~~~
HTTP/1.1 200 OK
[other headers]
~~~

**Response body**

~~~
{
  "resourceType": "ValueSet",
  "id": "scenario2-Server-write-contenttype",
  "url": "http://acme.org/fhir/ValueSet/in-mimetypes-2",
  "version": "3.0.1",
  "name": "ArgonautServerWriteMimeTypes",
  "title": "Argonaut Server Write Mime Types Value Set",
  "status": "draft",
  "date": "2018-11-08T20:29:00+00:00",
  "expansion": {
    "identifier": "urn:uuid:5fc51f5a-4dbc-44f8-8fe5-203d261222f0",
    "timestamp": "2018-11-13T02:55:48.405Z",
    "parameter": [
      {
        "name": "context",
        "valueString": "DocumentReference.content.attachment.contentType"
      },
      {
        "name": "contextDirection",
        "valueString": "incoming"
      }
    ],
    "contains": [
      {
        "system": "urn:ietf:bcp:13",
        "code": "text/xhtml"
      }
    ]
  }
}
~~~

**Request for Read contentType**

~~~
GET [base]/ValueSet/$expand?context=http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference#DocumentReference.content.attachment.contentType&amp;contextDirection=outgoing
~~~

**Response**

~~~
HTTP/1.1 200 OK
[other headers]
~~~

**Response body**

~~~
{
  "resourceType": "ValueSet",
  "id": "scenario2-Server-read-contenttype",
  "url": "http://acme.org/fhir/ValueSet/out-mimetypes-2",
  "version": "3.0.1",
  "name": "ArgonautServerReadMimeTypes",
  "title": "Argonaut Server Read Mime Types Value Set",
  "status": "draft",
  "date": "2018-11-08T20:29:00+00:00",
  "expansion": {
    "identifier": "urn:uuid:5fc51f5a-4dbc-44f8-8fe5-203d261222f0",
    "timestamp": "2018-11-13T02:55:48.405Z",
    "parameter": [
      {
        "name": "context",
        "valueString": "DocumentReference.content.attachment.contentType"
      },
      {
        "name": "contextDirection",
        "valueString": "outgoing"
      }
    ],
    "contains": [
      {
        "system": "urn:ietf:bcp:13",
        "code": "application/pdf"
      }
    ]
  }
}
~~~


---

File: repos/HL7_SLASH_US-Core/input/includes/representing-meds.md

* \*This Profile can represent a medication using a code or reference a [Medication] resource.
    *  When using a code, RXNorm concepts are used. They are defined as an [extensible] binding to `.medicationCodeableConcept`. USCDI recommends the [National Drug Codes (NDC)] as an *optional* terminology. They can be supplied as an additional coding element.
       * Systems that primarily rely on NDC codes instead of RxNorm to represent medications can use the National Library of Medicine's (NLM) [NDC to RxNorm mappings] to aid in translations.
    *  When referencing a Medication resource in `.medicationReference`, the resource may be [contained] or an external resource.
    *  The Server systems are not required to support both a code and a reference, but **SHALL** support *at least one* of these methods.
    * If an external reference to a Medication resource is used, the Server **SHALL** support the [`_include`] parameter for searching this element.
    *  The Client application **SHALL** support all methods.

[Medication]: {{site.data.fhir.path}}medication.html
[`_include`]: {{site.data.fhir.path}}search.html#include
[contained]: {{site.data.fhir.path}}references.html#contained
[National Drug Codes (NDC)]: https://www.fda.gov/drugs/drug-approvals-and-databases/national-drug-code-directory
[extensible]: {{site.data.fhir.path}}terminologies.html#extensible




---

File: repos/HL7_SLASH_US-Core/input/includes/res-list-generator.md


<!-- Use for sorted flat list resources ValueSet, CodeSystem, OperationDefinition  allows for highlighting new stuff using include parameter. SearchParameter works too but can't be sorted by Type and no title element so need to convert id to title using something like {%raw%}{r.id|split "-" | join | capitalize}}{%endraw%}-->
{% assign my_types = "" %}
{%- for r_hash in site.data.resources -%}
  {% assign r_type = r_hash[0] | split: '/' | first %}
  {%- assign r = r_hash[1] -%}
  {%- if r_type == include.type %}
    {% assign my_types =  my_types | append: ","s | append: r.name %}
  {%- endif -%}
{% endfor %}
{% assign my_array = my_types | split: "," %}
{% assign my_array = my_array | sort | uniq %}

<ul>
{% for i in my_array offset:1 %}
  {%- for r_hash in site.data.resources -%}
      {% assign r_type = r_hash[0] | split: '/' | first %}
      {%- assign r = r_hash[1] -%}
      {%- if r.name == i and r_type == include.type %}
        {%- assign new = false -%}
        {%- for new_stuff in site.data.new_stuff -%}
           {%- if new_stuff == i -%}
             {%- assign new = true -%}
             {%- break -%}
           {%- endif -%}
        {%- endfor -%}

        {%- if new -%}
          <li><a href="{{r.path}}"><span class="bg-success" markdown="1">{{r.title}}</span><!-- new-content --></a></li>
        {% else %}
          <li><a href="{{r.path}}">{{r.title}}</a></li>
        {% endif %}

    {% endif %}
  {%- endfor -%}
{% endfor %}
</ul>


---

File: repos/HL7_SLASH_US-Core/input/includes/resource-scopes-table.md

<!-- This liquid script creates a US Core scope requirements table using input data from input/data/scopes.csv
include parameters: conformance='SHALL'|'SHOULD'|'MAY'see below for how used and crud='cruds'<<< not used -->

{% assign rows = site.data.scopes -%}
{%- assign resource_scopes = '' -%}
{%- for item in rows -%}
{%- if item.resource_conformance == include.conformance -%}
{%- assign scope = item.resource_type | strip | append: ',' -%}
{%- assign resource_scopes =  resource_scopes | append: scope -%}
{%- endif -%}
{%- endfor -%}
{%- assign resource_scopes = resource_scopes | split: "," | uniq | sort %}

---

File: repos/HL7_SLASH_US-Core/input/includes/schematron-list-generator.md


{% for p in site.static_files %}
  {% if p.name contains '.sch' %}
  {% assign title = p.name | remove: '.sch' | split: '-' %}
- [{% for word in title  %}{{ word | capitalize }} {% endfor %}]({{ p.path | remove: '/' }})
  {% endif %}
{% endfor %}


---

File: repos/HL7_SLASH_US-Core/input/includes/sd-list-generator.md

{%- for sd_hash in site.data.structuredefinitions -%}
  {%- assign sd1= sd_hash[1] -%}
  {%- unless sd1.type == "Extension" -%}
    {% assign types =  types | append: "," | append: sd1.type %}
  {%- endunless -%}
{% endfor %}
{% assign my_types = types | split: "," %}
{% assign my_types = my_types | sort | uniq %}
{% for i in my_types offset:1 %}
  <h4>{{ i }}</h4>
  <ul>
    {%- for sd_hash in site.data.structuredefinitions -%}
      {%- assign sd1 = sd_hash[1] -%}
      {%- if sd1.type == i %}
        {%- assign new = false -%}
        {%- assign parent = false -%}
        {%- assign child = false -%}
        {%- for sd_hash2 in site.data.structuredefinitions -%}
          {%- assign sd2 = sd_hash2[1] -%}
          {% if sd1.basename == sd2.name %}
            {%- assign child = true -%}
            {% break %}
          {% elsif sd1.name == sd2.basename%}
             {%- assign parent = true -%}
             {% break %}
          {% endif %}
        {% endfor %}


        {%- for new_stuff in site.data.new_stuff -%}
           {%- if new_stuff == sd1.name -%}
             {%- assign new = true -%}
             {%- break -%}
           {%- endif -%}
        {%- endfor -%}

          {%- unless parent or child -%}
            {%- if new -%}
              <li><a href="{{sd1.path}}"><span class="bg-success" markdown="1">{{sd1.title}}</span><!-- new-content --></a></li>
            {% else %}
              <li><a href="{{sd1.path}}">{{sd1.title}}</a></li>
            {% endif %}
          {%- endunless -%}

          {%- if parent -%}
            {%- if new -%}
              <li><a href="{{sd1.path}}"><span class="bg-success" markdown="1">{{sd1.title}}</span><!-- new-content --></a>
            {% else %}
              <li><a href="{{sd1.path}}">{{sd1.title}}</a>
            {% endif %}
                <ul>
                {%- for sd_hash3 in site.data.structuredefinitions -%}
                  {%- assign sd3 = sd_hash3[1] -%}
                  {% if sd1.name == sd3.basename %}
                    {%- assign new = false -%}
                    {% for new_stuff in site.data.new_stuff %}
                         {%- if new_stuff == sd3.name -%}
                           {%- assign new = true -%}
                           {%- break -%}
                         {%- endif -%}
                    {%- endfor -%}


                      {%- if new -%}
                        <li><a href="{{sd3.path}}"><span class="bg-success" markdown="1">{{sd3.title}}</span><!-- new-content --></a></li>
                      {% else %}
                        <li><a href="{{sd3.path}}">{{sd3.title}}</a></li>
                      {% endif %}

                  {% endif %}
                {% endfor %}
                </ul>
            </li>
          {%- endif -%}
      {%- endif -%}
    {%- endfor -%}
  </ul>
{% endfor %}


---

File: repos/HL7_SLASH_US-Core/input/includes/SDOH_search_transaction.md


- Patient's FHIR_id = "example"
- Observation category = "sdoh"

**Request**

Request url using GET

GET `http://wildfhir4.aegis.net/fhir4-0-1/Observation?patient=Patient/example&category=sdoh`


Request Headers
~~~
User-Agent: python-requests/2.25.1
Accept-Encoding: gzip, deflate
Accept: application/fhir+json
Connection: keep-alive
Content-Type: application/fhir+json
~~~

**Response**

200 OK

Response Headers
~~~
Connection: keep-alive
Content-Location: http://wildfhir4.aegis.net/fhir4-0-1/Observation?patient=Patient%2Fexample&category=sdoh
Content-Type: application/fhir+json;charset=utf-8
Content-Length: 4112
Date: Sun, 21 Nov 2021 03:15:18 GMT
~~~
Response Body
~~~
{
  "resourceType": "Bundle",
  "id": "158f4b97-5b3a-4363-81da-19d454a6df30",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2021-11-20T22:15:18.726-05:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "http://wildfhir4.aegis.net/fhir4-0-1/Observation?patient=Patient%2Fexample&category=sdoh"
    }
  ],
  "entry": [
    {
      "fullUrl": "http://wildfhir4.aegis.net/fhir4-0-1/Observation/hunger-question-example",
      "resource": {
        "resourceType": "Observation",
        "id": "hunger-question-example",
        "meta": {
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
              "valueString": "Hunger Question Example"
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
              "valueMarkdown": "This is a Hunger Question Example for the *US Core Screening Response Observation Profile*."
            }
          ],
          "versionId": "1",
          "lastUpdated": "2021-11-20T22:13:54.070-05:00",
          "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-screening-response"
          ]
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>meta</b>:       \n      </p><p><b>status</b>: FINAL      \n      </p><p><b>category</b>: SDOH         \n        <span style=\"background: LightGoldenRodYellow\">(Details : {LOINC code 'sdoh' = 'sdoh', given as 'SDOH'})</span>, Survey         \n        <span style=\"background: LightGoldenRodYellow\">(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'survey' = 'Survey', given as 'Survey'})</span></p><p><b>code</b>: Within the past 12 months we worried whether our food would run out before we got money to buy more [U.S. FSS]         \n        <span style=\"background: LightGoldenRodYellow\">(Details : {LOINC code '88122-7' = 'Within the past 12 months we worried whether our food would run out before we got money to buy more [U.S. FSS]', given as 'Within the past 12 months we worried whether our food would run out before we got money to buy more [U.S. FSS]'})</span></p><p><b>subject</b>:         \n        <a href=\"Patient/example\">Patient/example</a></p><p><b>effective</b>: Nov 12, 2021 8:59:15 PM      \n      </p><p><b>performer</b>:         \n        <a href=\"Patient/example\">Patient/example</a></p><p><b>value</b>: Often true         \n        <span style=\"background: LightGoldenRodYellow\">(Details : {LOINC code 'LA28397-0' = 'Often true', given as 'Often true'})</span></p><p><b>derivedFrom</b>: Hunger Vital Signs Questionnaire      \n      </p></div>"
        },
        "status": "final",
        "category": [
          {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "sdoh",
                "display": "SDOH"
              }
            ]
          },
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                "code": "survey",
                "display": "Survey"
              }
            ]
          }
        ],
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "88122-7",
              "display": "Within the past 12 months we worried whether our food would run out before we got money to buy more [U.S. FSS]"
            }
          ]
        },
        "subject": {
          "reference": "Patient/example"
        },
        "effectiveDateTime": "2021-11-12T17:59:15-08:00",
        "performer": [
          {
            "reference": "Patient/example"
          }
        ],
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "LA28397-0",
              "display": "Often true"
            }
          ]
        },
        "derivedFrom": [
          {
            "display": "Hunger Vital Signs Questionnaire"
          }
        ]
      },
      "search": {
        "mode": "match",
        "score": 1
      }
    }
  ]
}
~~~


---

File: repos/HL7_SLASH_US-Core/input/includes/should-project-us.md

<!--format of include file 
include parameters:
element (required): resource e.g., (e.g, Patient.address)
for example
{% raw %} {% include should-project-us.md element="Patient.address" %} {% endraw %}
-->
Systems **SHOULD** follow the [Project US@ Technical Specification for Patient Addresses Final Version 1.0] as the standard style guide for `{{include.element}}.line` and  `{{include.element}}.city`.


---

File: repos/HL7_SLASH_US-Core/input/includes/specimen-include-note.md


#### Including Specimen when searching for an Observation or DiagnosticReport

Servers **MAY** support the [`_include`] parameter to request that additional resources be included in the response of a search query. For example, when searching for an Observation or DiagnosticReport that references Specimen, the Client can use the `_include` parameter to retrieve information about a specimen associated with the search results. The syntax for querying an Observation and the associated Specimen is:

`GET [base]/[Resource-type]?[parameter1]=[value1]{&...}&_include=Observation:specimen`

Example:

GET [base]/Observation?_id=9163726&_include=Observation:specimen


---

File: repos/HL7_SLASH_US-Core/input/includes/uscdi-uscore-version-table.md

<!-- The following table shows the relationship between each USCDI and US Core Version.
The USCDI version links to its respective ONC Standards Bulletin, which provides background and the new data classes and elements for the version. -->

| USCDI Version | US Core Version | 
|:---:|:---|
 | [v1]  | 3.1.1 |
 | [v1] | 4.0.0 (improved Must support guidance) |
 | [v2] | 5.0.1 |
 | [v3] | 6.1.0 |
 | [v4] | 7.0.0 |
 | [v5] | 8.0.0 |
{:.grid}

[v1]: https://www.healthit.gov/isa/sites/isa/files/2020-07/USCDI-Version-1-July-2020-Errata-Final.pdf
[v2]: https://www.healthit.gov/sites/default/files/page/2021-07/Standards_Bulletin_2021-3.pdf
[v3]: https://www.healthit.gov/sites/default/files/page/2022-07/Standards_Bulletin_2022-2.pdf
[v4]: https://www.healthit.gov/sites/default/files/page/2023-07/Standards_Bulletin_2023-2.pdf
[v5]: https://www.healthit.gov/topic/standardsbulletin_24-2

---

File: repos/HL7_SLASH_US-Core/input/includes/uscore_sp_list.md

<!-- Source = /Users/ehaas/Documents/FHIR/US-Core/input/resources_spreadsheets. This file is generated by SearchParameterListMaker.ipynb. Do not edit directly. -->

##### AllergyIntolerance
- [clinical-status](SearchParameter-us-core-allergyintolerance-clinical-status.html)
- [patient](SearchParameter-us-core-allergyintolerance-patient.html)

##### CarePlan
- [category](SearchParameter-us-core-careplan-category.html)
- [date](SearchParameter-us-core-careplan-date.html)
- [patient](SearchParameter-us-core-careplan-patient.html)
- [status](SearchParameter-us-core-careplan-status.html)

##### CareTeam
- [patient](SearchParameter-us-core-careteam-patient.html)
- [status](SearchParameter-us-core-careteam-status.html)

##### Condition
- [_lastUpdated](SearchParameter-us-core-condition-lastupdated.html)
- [abatement-date](SearchParameter-us-core-condition-abatement-date.html)
- [category](SearchParameter-us-core-condition-category.html)
- [clinical-status](SearchParameter-us-core-condition-clinical-status.html)
- [code](SearchParameter-us-core-condition-code.html)
- [encounter](SearchParameter-us-core-condition-encounter.html)
- [onset-date](SearchParameter-us-core-condition-onset-date.html)
- [patient](SearchParameter-us-core-condition-patient.html)
- [recorded-date](SearchParameter-us-core-condition-recorded-date.html)

##### Coverage
- [patient](SearchParameter-us-core-coverage-patient.html)

##### Device
- [patient](SearchParameter-us-core-device-patient.html)
- [status](SearchParameter-us-core-device-status.html)
- [type](SearchParameter-us-core-device-type.html)

##### DiagnosticReport
- [_lastUpdated](SearchParameter-us-core-diagnosticreport-lastupdated.html)
- [category](SearchParameter-us-core-diagnosticreport-category.html)
- [code](SearchParameter-us-core-diagnosticreport-code.html)
- [date](SearchParameter-us-core-diagnosticreport-date.html)
- [patient](SearchParameter-us-core-diagnosticreport-patient.html)
- [status](SearchParameter-us-core-diagnosticreport-status.html)

##### DocumentReference
- [_id](SearchParameter-us-core-documentreference-id.html)
- [category](SearchParameter-us-core-documentreference-category.html)
- [date](SearchParameter-us-core-documentreference-date.html)
- [patient](SearchParameter-us-core-documentreference-patient.html)
- [period](SearchParameter-us-core-documentreference-period.html)
- [status](SearchParameter-us-core-documentreference-status.html)
- [type](SearchParameter-us-core-documentreference-type.html)

##### Encounter
- [_id](SearchParameter-us-core-encounter-id.html)
- [_lastUpdated](SearchParameter-us-core-encounter-lastupdated.html)
- [class](SearchParameter-us-core-encounter-class.html)
- [date](SearchParameter-us-core-encounter-date.html)
- [identifier](SearchParameter-us-core-encounter-identifier.html)
- [location](SearchParameter-us-core-encounter-location.html)
- [patient](SearchParameter-us-core-encounter-patient.html)
- [status](SearchParameter-us-core-encounter-status.html)
- [type](SearchParameter-us-core-encounter-type.html)

##### Goal
- [lifecycle-status](SearchParameter-us-core-goal-lifecycle-status.html)
- [patient](SearchParameter-us-core-goal-patient.html)
- [target-date](SearchParameter-us-core-goal-target-date.html)

##### Immunization
- [date](SearchParameter-us-core-immunization-date.html)
- [patient](SearchParameter-us-core-immunization-patient.html)
- [status](SearchParameter-us-core-immunization-status.html)

##### Location
- [address](SearchParameter-us-core-location-address.html)
- [address-city](SearchParameter-us-core-location-address-city.html)
- [address-postalcode](SearchParameter-us-core-location-address-postalcode.html)
- [address-state](SearchParameter-us-core-location-address-state.html)
- [name](SearchParameter-us-core-location-name.html)

##### MedicationDispense
- [patient](SearchParameter-us-core-medicationdispense-patient.html)
- [status](SearchParameter-us-core-medicationdispense-status.html)
- [type](SearchParameter-us-core-medicationdispense-type.html)

##### MedicationRequest
- [authoredon](SearchParameter-us-core-medicationrequest-authoredon.html)
- [encounter](SearchParameter-us-core-medicationrequest-encounter.html)
- [intent](SearchParameter-us-core-medicationrequest-intent.html)
- [patient](SearchParameter-us-core-medicationrequest-patient.html)
- [status](SearchParameter-us-core-medicationrequest-status.html)

##### Observation
- [_lastUpdated](SearchParameter-us-core-observation-lastupdated.html)
- [category](SearchParameter-us-core-observation-category.html)
- [code](SearchParameter-us-core-observation-code.html)
- [date](SearchParameter-us-core-observation-date.html)
- [patient](SearchParameter-us-core-observation-patient.html)
- [status](SearchParameter-us-core-observation-status.html)

##### Organization
- [address](SearchParameter-us-core-organization-address.html)
- [name](SearchParameter-us-core-organization-name.html)

##### Patient
- [_id](SearchParameter-us-core-patient-id.html)
- [birthdate](SearchParameter-us-core-patient-birthdate.html)
- [death-date](SearchParameter-us-core-patient-death-date.html)
- [family](SearchParameter-us-core-patient-family.html)
- [gender](SearchParameter-us-core-patient-gender.html)
- [given](SearchParameter-us-core-patient-given.html)
- [identifier](SearchParameter-us-core-patient-identifier.html)
- [name](SearchParameter-us-core-patient-name.html)

##### Practitioner
- [_id](SearchParameter-us-core-practitioner-id.html)
- [identifier](SearchParameter-us-core-practitioner-identifier.html)
- [name](SearchParameter-us-core-practitioner-name.html)

##### PractitionerRole
- [practitioner](SearchParameter-us-core-practitionerrole-practitioner.html)
- [specialty](SearchParameter-us-core-practitionerrole-specialty.html)

##### Procedure
- [code](SearchParameter-us-core-procedure-code.html)
- [date](SearchParameter-us-core-procedure-date.html)
- [patient](SearchParameter-us-core-procedure-patient.html)
- [status](SearchParameter-us-core-procedure-status.html)

##### QuestionnaireResponse
- [_id](SearchParameter-us-core-questionnaireresponse-id.html)
- [authored](SearchParameter-us-core-questionnaireresponse-authored.html)
- [patient](SearchParameter-us-core-questionnaireresponse-patient.html)
- [questionnaire](SearchParameter-us-core-questionnaireresponse-questionnaire.html)
- [status](SearchParameter-us-core-questionnaireresponse-status.html)

##### RelatedPerson
- [_id](SearchParameter-us-core-relatedperson-id.html)
- [name](SearchParameter-us-core-relatedperson-name.html)
- [patient](SearchParameter-us-core-relatedperson-patient.html)

##### ServiceRequest
- [_id](SearchParameter-us-core-servicerequest-id.html)
- [authored](SearchParameter-us-core-servicerequest-authored.html)
- [category](SearchParameter-us-core-servicerequest-category.html)
- [code](SearchParameter-us-core-servicerequest-code.html)
- [patient](SearchParameter-us-core-servicerequest-patient.html)
- [status](SearchParameter-us-core-servicerequest-status.html)

##### Specimen
- [_id](SearchParameter-us-core-specimen-id.html)
- [patient](SearchParameter-us-core-specimen-patient.html)



---

File: repos/HL7_SLASH_US-Core/input/includes/ValueSet-expansion-note.md


<div markdown="1" class="stu-note">
 The publication tooling does not currently support generation of this Value Set expansion. We anticipate updates to enable this feature before the next version of this guide is published. We have provided the manual expansion below for your review.

{% assign table = page.path | replace: '.html' , '-table.md' %}
{% include {{table}} -%}
{:.grid}

</div>


---

File: repos/HL7_SLASH_US-Core/input/includes/vitals-guidance.md


<!-- {% raw %} 
invoke using
{% include vitals-guidance.md %}
{% endraw %} -->
- The observations **MAY** have additional codes that translate or map to the Observation code or category codes. For example:
   -  providing a local system-specific code
   -  providing more specific codes such as 8306-3 - *Body height - lying* in addition to 8302-2 - *Body height*. Several additional observation codes are provided in the FHIR core specification [vital signs table].

  A code system value **SHOULD** be supplied for each additional code.
- The observations **MAY** have [component] observations. For example, to qualify the vital sign observation, 8310-5 - *Body temperature*, 8327-9 - *Body temperature measurement site* (oral, forehead, rectal, etc.) may be used as a component observation. The FHIR core specification [vital signs table] provides several of these.
{% include DAR-exception.md %}
- Implementers may use this profile as a base for other vital signs in addition to those in this guide.


---

File: repos/HL7_SLASH_US-Core/input/intro-notes/DiagnosticReport-cbc-intro.md

{% include boilerplate-clia-warning.md %}

---

