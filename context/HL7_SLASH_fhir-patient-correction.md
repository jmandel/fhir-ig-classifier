File: repos/HL7_SLASH_fhir-patient-correction/sushi-config.yaml

# ╭─────────────────────────────────ImplementationGuide-fish.json──────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see:                                                                    │
# │  https://fshschool.org/docs/sushi/configuration/#full-configuration                            │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯

id: hl7.fhir.uv.patient-corrections
canonical: http://hl7.org/fhir/uv/patient-corrections
version: 1.0.0
name: PatientCorrectionsImplementationGuide
title: "Patient Request for Corrections Implementation Guide"
status: draft
publisher:
  - name: HL7 International - Patient Empowerment Workgroup
  - url: https://www.hl7.org/Special/committees/patientempowerment
contact:
  - name: Virginia Lorenzi
    telecom:
      - system: email
        value: vlorenzi@nyp.org
#        url: https://www.hl7.org/Special/committees/patientempowerment
        use: work
description: "The Patient Request for Corrections Implementation Guide provides a method for communicating a patient's request for corrections to their patient data, as well as a way for health care organizations to respond to those requests."
license: CC0-1.0
fhirVersion: 4.0.1
parameters:
  apply-publisher: true
  apply-contact: true
  apply-version: true
  show-inherited-invariants: false
copyrightYear: 2020+
releaseLabel: STU 1 Ballot
jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#001 "World"
dependencies:
    hl7.fhir.uv.tools: current

pages:
  index.md:
    title: Home
  actors-and-use-cases.md:
    title: Actors and Use Cases
  specification.md:
    title: Specification
  examples.md:
    title: Examples
  artifacts.html:
    title: Artifacts
  downloads.md:
    title: Downloads
  techanalysis.md:
    title: Technical Analysis

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To use a provided input/includes/menu.xml file, delete the "menu" property below.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  Table of Contents: toc.html
  Actors and Use Cases: actors-and-use-cases.html
  Specification: specification.html
  Examples: examples.html
  Artifacts: artifacts.html
  Downloads: downloads.html
  Other Resources: 
    "FHIR Spec": new-tab {{site.data.fhir.path}}index.html
    "Technical Analysis": techanalysis.html

---

// File: input/pagecontent/actors-and-use-cases.md

### Actors

Actor | Description
---|---
CorrectionRequester | The CorrectionRequester represents a patient’s application, such as a personal health record. A patient or their caregiver uses the application to request a correction to their medical record.
RequestFulfiller | The RequestFulfiller represents a provider system – usually an EHR. A Medical Records professional or a clinician uses the provider system to review and process the correction request. The RequestFulfiller may also represent a payer system.
{:.grid .table-striped}

#### General Actor Sequence
 
<figure>
{%include overall-sequence.svg%}
</figure>

### Use Cases

|---------------------------------------------------|
 | NOTE: The following list of use cases represent common use cases but is not an exhaustive list. |
 {:.grid .bg-info}

#### Use Case 1: Patient Requests a Correction which is Received by the Provider system.
1. A Patient reviews the records received from a provider (most likely this review is of the electronic health information accessed on their personal health record application).
1. The patient determines that it contains one or more errors or discrepancies.
1. The patient enters a correction request using their application. The request can be a simple unstructured request,but can also contain additional structured information to provide context or to pinpoint the error and the fix.
1. The application (CorrectionRequester) sends the correction request to the appropriate provider system (RequestFulfiller) and gets an acknowledgement that the request has been received.


#### Use Case 2: Patient Requests a Correction to Their Medical Record Which is Accepted and Corrected.

|---------------------------------------------------| 
|Note that use case 2 includes all the steps of use case 1 but then continues beyond a simple receipt of the request (shown as step 4).| 
{:.grid .bg-info}

1. A patient reviews the records received from a provider (most likely this review is of the electronic health information accessed on their personal health record application). 
2. The patient determines that it contains one or more errors or discrepancies.
3. The patient enters a correction request using their application. The request can be a simple unstructured request,but can also contain additional structured information to provide context or to pinpoint the error and the fix.
3. The application (CorrectionRequester) sends the correction request to the appropriate provider system (RequestFulfiller) and gets an acknowledgement that the request has been received.
4. The provider (most likely a medical records professional but possibly a clinician) reviews the request on the provider system (EHR).
6. If needed, the provider reaches out to the patient to further clarify the request and consults as needed with clinicians to determine if a correction is appropriate.
7. **The request for correction is accepted.** The appropriate personnel corrects the chart (or charts if the error involves multiple charts) and creates formal amendments to the electronic health record. 
8. The correction request is marked complete.
9. Throughout the process, the patient has been able to use their application to check for the status of their correction request and is able to determine that it was being reviewed, then was accepted, and later completed.

<figure>
{%include use-case-1.svg%}
<figcaption>Use Case 1 flow</figcaption>
</figure>



#### Use Case 3: Patient Requests a Correction to Their Medical Record Which is Denied.

1. A patient reviews the records received from a provider (most likely this review is of the electronic health information accessed on their personal health record application). 
2. The patient determines that it contains one or more errors or discrepancies.
3. The patient enters a correction request using their application. The request can be a simple unstructured request,but can also contain additional structured information to provide context or to pinpoint the error and the fix.
4. The application (CorrectionRequester) sends the correction request to the appropriate provider system (RequestFulfiller) and gets an acknowledgement that the request has been received.
5. The provider (most likely a medical records professional but possibly a clinician) reviews the request on the provider system (EHR).
6. If needed, the provider reaches out to the patient to further clarify the request and consults as needed with clinicians to determine if a correction is appropriate.
7. It is determined that the chart is in fact correct. The request for correction is denied.  Note that the rejection may include details such as the reason for the rejection, a patient’s rights to submit a disagreement, etc.
8. Meanwhile, the patient has been able to use their application to check for the status of their correction request and is able to determine that it is being reviewed and then later denied.

<figure>
{%include use-case-2.svg%}
<figcaption>Use Case 3 flow</figcaption>
</figure>



#### Use Case 4: Patient Disagrees with Correction Request Denial.

|---------------------------------------------------| 
| NOTE: This use case is a continuation from Use Case 3.|
{:.grid .bg-info}

1. Upon receiving a denial to their correction request, the patient decides to log a formal disagreement with the provider.
2. The patient enters the disagreement using their application.
3. The application (CorrectionRequester) sends the disagreement to the denied correction request to the appropriate provider system (RequestFulfiller) and gets an acknowledgement that the disagreement has been received.
4. The provider (most likely a medical records professional but possibly a clinician) reviews the disagreement on the provider system (EHR) and consults as needed with clinicians. The chart on the EHR might also be reviewed.
5. The provider determines that the chart is correct and is not swayed by the disagreement.  They may provide an explanation or rebuttal.  
6. Meanwhile, the patient has been able to use their application to check for the status of their disagreement.


<figure>
{%include use-case-3.svg%}
<figcaption>Use Case 4 flow</figcaption>
</figure>

#### Use Case 4b: Provider provides Rebuttal

|---------------------------------------------------| 
| NOTE: This is a continuance of Use Case 4. |
{:.grid .bg-info}

1. The provider also potentially provides a formal rebuttal. 
1. Meanwhile, the patient has been able to use their application to check for the status of their disagreement and is able to determine that it is being reviewed and then later denied.



#### Use Case 5: Patient Requests a Correction to Their Medical Record and Later Sends an Update to Their Correction Request.

1. A patient reviews the records received from a provider (most likely this review is of the electronic health information accessed on their personal health record application). 
1. The patient determines that it contains one or more errors or discrepancies.
1. The patient enters a correction request using their application. The request can be a simple unstructured request,but can also contain additional structured information to provide context or to pinpoint the error and the fix.
1. The application (CorrectionRequester) sends the correction request to the appropriate provider system (RequestFulfiller) and gets an acknowledgement that the request has been received.
1. The patient later determines the Correction Request is incorrect or incomplete. For example, the patient may have entered the wrong information, or may want to add a supporting attachment, or a list of contacts to notify upon correction completion.
1. Their application (CorrectionRequestor) sends an updated correction request to the provider system (RequestFulfiller).
1. The provider system updates the correction request accordingly and continues processing it.

<figure>
{%include use-case-4.svg%}
<figcaption>Use Case 5 flow</figcaption>
</figure>


|---------------------------------------------------| 
|Note, in the case of multiple corrections requested, the flow may follow Use Case 3 and/or 4 for each individual correction submitted.|
{:.grid .bg-info}

#### Use Case 6: Patient Requests a Correction to Their Medical Record and the Record is Partially Updated

|---------------------------------------------------| 
|Note that use case 6 would also include the ability for dialog (status, clarifications) as in the other use cases.  This is left out of this description for simplicity.|
{:.grid .bg-info}

1. A patient reviews the records received from a provider (most likely this review is of the electronic health information accessed on their personal health record application). 
1. The patient determines that it contains one or more errors or discrepancies.
1. The patient enters a correction request using their application. 
1. The application (CorrectionRequester) sends the correction request to the appropriate provider system (RequestFulfiller) and gets an acknowledgement that the request has been received.
1. The provider (most likely a medical records professional but possibly a clinician) reviews the request on the provider system (EHR).
1. **Portions of the request are accepted** and portions are denied. The request is therefore partially accepted.  The patient is notified of partial acceptance and how to disagree with the denied portion.
1. The portion of the request accepted is corrected in the chart and the correction request is marked complete.
<figure>
{%include use-case-6.svg%}
<figcaption>Use Case 6 flow</figcaption>
</figure>

---

// File: input/pagecontent/CapabilityStatement-PatientCorrectionCapability-intro.md

### Supported profiles

#### PatientCorrectionBundle

Conformance expectation: **SHALL**

Reference policy: `resolves`

Profile interaction summary:

* **SHALL** support `$correction-request`
* **SHALL** support `read`
* **MAY** support `vread`, `history-instance`, `search-type`

Fetch and search criteria:

* A server **SHOULD** be capable of returning a Bundle resource using: `GET [base]/Bundle/[id]`

#### PatientCorrectionCommunication

Conformance expectation: **SHALL**

Reference policy: `resolves`

Profile interaction summary:

* **SHALL** support `search-type`, `read`
* **SHOULD** support `vread`, `history-instance`

Fetch and search criteria:

* A server **SHALL** be capable of returning a Communication resource using: `GET [base]/Communication/[id]`
* A server **SHALL** support the following searches for Communication resources:
  * `About`
  * `Patient`
  * `Category`
  * `Identifier`
  * `Sent`
  * `Topic`
* A server **SHOULD** support the following searches for Communication resources:
  * `Sender`
  * `Recipient`
  * `Encounter`

#### PatientCorrectionTask

Conformance expectation: **SHALL**

Reference policy: `resolves`

Profile interaction summary:

* **SHALL** support `search-type`, `read`
* **SHOULD** support `vread`, `history-instance`

Fetch and search criteria:

* A Server **SHALL** be capable of returning a Task resource using: `GET [base]/Task/[id]`
* A server **SHALL** support the following searches for Task resources:
  * `Patient`
  * `Identifier`
  * `Code`
  * `Status`
* A server **SHOULD** support the following searches for Task resources:
  * `ReasonReference`
  * `Authored-on`
  * `Modified`
  * `Requester`
  * `Encounter`
  * `Owner`
  * `BusinessStatus`


---

// File: input/pagecontent/downloads.md

### Downloads

This implementation guide is web-based and is intended to be browsed online.  However, for the convenience of implementers, both this implementation guide, various sub-packages of it and some of the source specifications are available for download.  The following links allow you to download various parts of this implementation guide and other referenced implementation guides for local use.

* This [full IG](full-ig.zip)
* the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format
* the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.
* The full [FHIR R4 core]({{site.data.fhir.path}}fhir-spec.zip) specifications
* A [FHIR validator](https://fhir.github.io/latest-ig-validator/org.hl7.fhir.validator.jar) that can be used to check FHIR resource instance validity


---

// File: input/pagecontent/index.md

### Background

> "So you get a copy of your medical records & dive in, reading line by line, trying to make sense of your new lung cancer diagnosis.
>
> 'Wait a second, this doesn’t sound right. This is a mistake. I don’t have a history of a heart condition & I don’t smoke cigarettes,' you mutter to yourself.
>
> You call your oncologist’s office to report the mistake you found & ask to have it updated. You’re told to write down the correction & fax it to the office. You do exactly as you are told.
>
> A month later at your next follow up appointment, you ask your doctor if your record was updated & the correction was made. He looks up at you with a deer-in-headlights-look that clearly signifies a NO.
>
> On your way out, you stop at the front desk, write the correction down again, & the staff assures you they’ll take care of it.
>
> Lather, rinse, repeat. Months later, it’s still not corrected. You also find out your cancer is progressing. The nurse asks if you are still smoking cigarettes. 
> Your treatment options are discussed but there are concerns of trying new medications because of your heart condition. Cardiotoxicity is a common side effect of many cancer treatments. 
> It may exclude you from a clinical trial.
>
> There are endless stories of errors & omissions that patients have found upon reviewing their medical records."
>
> -- Grace Cordovano, PhD, BCPA

As Grace Cordovano describes, today's request for patient correction process is a largely mail and phone based process that is fragmented, lengthy and burdensome for both the patient and the healthcare organization.  The purpose of this guide is to make the request for correction process easier and more automated for both the patient and the healthcare provider. Now that patients have the ability to download their data into FHIR applications, they are finding errors in their data. Currently, no FHIR implementation guide exists to standardize the method of electronically requesting a correction to errors and discrepancies to their information. This implementation guide provides a FHIR based standard
way for the communication of a patient's request for corrections.  It includes the ability to request a correction and monitor its progress through completion or rejection as well as the ability to log a disagreement. 
 
This Implementation Guide (IG) is designed to work in the Universal Realm.  Both GDPR and HIPAA processes were reviewed in depth.   HIPAA and GDPR regulations are very similar concerning a patient's rights to have their data corrected. There are minor differences in the period of time for covered entities to respond to the patient's initial request for corrections and the preference in GDPR for a means for patient requests to be made electronically. Since HIPAA provides detailed implementation guidance, it was followed in the creation of this Implementation Guide since it includes the patient rights outlined in both regulations. Refer to the [References](#references) section for more information.

This IG allows for several scenarios from a simple correction (such as changing the patient's smoking status) to more complex scenarios that may be accepted or rejected by the data holder.  In addition, the IG handles flows from simple acknowledgement of submission to completion of review and acceptance/rejection.  Use cases are found on the [Actors and Use Case](actors-and-use-cases.html) page.

### Scope

Patients have increasing access to their medical records via technology such as patient portals and personal health records, and thus are more able to find errors. Regulations such as HIPAA and GDPR provide patients with the right to request corrections/amendments to their health records, however, the current processes are manual, often paper-based, with little communication or status provided, and opaque. A majority of patients do not know how to make a request for a correction to their chart. Since FHIR is now being used to share information between provider organizations and patients millions of times a day, this presents an opportunity for creating a standard for patients to request corrections or amendments to their health record via FHIR.

The scope of this IG is limited to the communication standards between a patient/caregiver and the fulfiller of the request (most likely a provider organization) to:
* communicate the correction request,
* provide a mechanism for tracking the status of the request fulfillment,
* support round-trip communication between patient and provider as needed in the evaluation and fulfillment of the request,
* communicate about the outcome of the request fulfillment, and
* support communication of a disagreement statement from the patient if the request is denied.

In this version of this guide, Process status and new communications from the fulfiller will be detected by the requester via polling. In future versions of the guide, we hope to add support for subscription-based notifications.

It is assumed that the fulfiller is able to process the correction request through to resolution. In most cases, this would be the organization which has the authority to directly correct the error, such as a provider that is the custodian of the record with the error. However, if an intermediary takes responsibility for shepherding the handling of a patient request with the custodial organization, that intermediatory could serve as a fulfiller (for example, a patient advocacy service). It is assumed that in most cases, an HIE or a payer would not serve as fulfillers of requests to correct information unless the error originated from their records, or they wanted to take on the responsibility of mediating.

This IG does not attempt to describe how a fulfiller organization processes a requested correction, nor does it try to resolve conflicting opinions between a patient and their provider.

This guide does not provide a way to automatically correct information on the fulfiller system - it is only about the communication and tracking of the request. Manual intervention to evaluate and fulfill the request is expected.

Finally, this guide is not trying to standardize the requester application or the fulfiller application's user interface that would be used by a patient or caregiver to send their request or the user interface of the fulfilling system. It is limited to standardization of the interoperability between the systems.

### References

1. A patient and family reporting system for perceived ambulatory note mistakes: experience at 3 U.S. healthcare centers: Fabienne C Bourgeois, Alan Fossa, Macda Gerard, Marion E Davis, Yhenneko J Taylor, Crystal D Connor, Tracela Vaden, Andrew McWilliams, Melanie D Spencer, Patricia Folcarelli, Sigall K Bell: Journal of the American Medical Informatics Association, Volume 26, Issue 12, December 2019, Pages 1566–1573, [https://doi.org/10.1093/jamia/ocz142](https://doi.org/10.1093/jamia/ocz142)
2. Medical Record Errors and Common, Hard to Fix, Report Finds: Becker Hospital Review: [https://www.beckershospitalreview.com/ehrs/](https://www.beckershospitalreview.com/ehrs/medical-record-errors-are-common-hard-to-fix-report-finds.html)
3. Examples of Request for Correction Forms and Directions:
* [https://www.memorialhermann.org/-/media/memorial-hermann/org/files/patients-and-visitors/patient-services/request-amendment-of-protected-health-information.ashx?la=en](https://www.memorialhermann.org/-/media/memorial-hermann/org/files/patients-and-visitors/patient-services/request-amendment-of-protected-health-information.ashx?la=en)
* [https://www.premierhealth.com/docs/default-source/default-document-library/amendment-request-form.pdf?sfvrsn=728d9b8b_2](https://www.premierhealth.com/docs/default-source/default-document-library/amendment-request-form.pdf?sfvrsn=728d9b8b_2)
* [https://www.partners.org/Assets/Documents/For-Patients/Medical-Records/Medical-Record-Amendement-Instructions.pdf](https://www.partners.org/Assets/Documents/For-Patients/Medical-Records/Medical-Record-Amendement-Instructions.pdf)
* [https://www.hipaa.cumc.columbia.edu/file/1378/download?token=gKud-5h1](https://www.hipaa.cumc.columbia.edu/file/1378/download?token=gKud-5h1)
* [https://www.datarequests.org/downloads/sample-letter-gdpr-rectification-request-datarequests.org.pdf](https://www.datarequests.org/downloads/sample-letter-gdpr-rectification-request-datarequests.org.pdf)
* [https://ico.org.uk/your-data-matters/your-right-to-get-your-data-corrected/](https://ico.org.uk/your-data-matters/your-right-to-get-your-data-corrected/)
4. HIPAA Amendment of Protected Health Information: [https://www.govinfo.gov/content/pkg/CFR-2003-title45-vol1/xml/CFR-2003-title45-vol1-sec164-526.xml](https://www.govinfo.gov/content/pkg/CFR-2003-title45-vol1/xml/CFR-2003-title45-vol1-sec164-526.xml)
5. General Data Protection Regulation: [https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN#d1e2589-1-1](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN#d1e2589-1-1)

### Known Issues
|--------------------------------------------|
    |Some implementers believe that a more streamlined approach without communication should be considered for the next release.|
{:.grid .bg-info}

### Legal Statements
 While this implementation guide and the underlying FHIR are licensed as public domain under the FHIR license. The license page also describes rules for the use of the FHIR name and logo.

{% include ip-statements.xhtml %}

---

// File: input/pagecontent/specification.md

### Communication with Task

A patient request for correction is initiated by invoking the [$correction-request](OperationDefinition-correction-request.html) operation. The input for the operation is a [Patient Correction Bundle](StructureDefinition-patient-correction-bundle.html) which includes a  [Patient Correction Communication](StructureDefinition-patient-correction-communication.html) resource that describes the specific request. The invocation of the operation on the fulfiller results in the posting of the [Patient Correction Communication](StructureDefinition-patient-correction-communication.html) resource on the fulfiller.  It is also expected to result in the creation of a [Patient Correction Task](StructureDefinition-patient-correction-task.html) resource which can be used to track the status of the request. 

All Communications related to the correction request can be located by searching the **about** field for the original Communication.

The Communication **recipient** and **sender** fields are used to track whether each Communication is from the patient to the fulfiller, or vice versa.

### RESTful interactions

<div>
{%include task-comm-request.svg%}
</div>

### Linkages between resources

Certain fields in Task and Communication provide important linkage information.

Communication **about** will be empty for the initial Communication when the $correction-request operation is made to the server.  Communication **about** for the initial Communication will then be populated with a reference to the correction Task when the Task for the request is spawned as result of the operation.

All subsequent Communication resources will point to the initial Communication resource for the correction request in their Communication **about** fields.

The Communication **recipient** and **sender** fields are used to track whether each Communication is from the patient to the fulfiller, or vice versa.

Task **input** points to the Communication that contains the initial request details, and Task **output** points to the Communication that contains the final results (amendment or denial details).

The Task **reasonReference** field is used to link a Log Disagreement Task to the related Correction Request Task.

The following diagrams show the Communication and Task linkages.

#### Amendment requested and accepted

{% include img.html img="amendment-requested-and-accepted.png" %}

#### Amendment requested and rejected

{% include img.html img="amendment-requested-and-rejected.png" %}

#### Logging a disagreement

{% include img.html img="logging-a-disagreement.png" %}

### Task Status

The **Task.status** and **Task.businessStatus** are used to convey the the state of the patient correction.

Task.status | Task.businessStatus (Code) | Task.businessStatus (Display) | Task.businessStatus Definition
---|---|---|---|---
ready | queued | Queued | A request to correct a record or log a disagreement has been received by the fulfiller (e.g. provider) but has not yet been reviewed.
in-progress | in-review | In Review | Review is in progress.  
in-progress | waiting-for-information | Waiting for Information | The fulfiller (e.g. provider) is waiting for additional information.
cancelled | requester-cancelled | Cancelled | The request has been cancelled by the requester (e.g. patient).
in-progress | accepted | Accepted | Decision was made to accept the correction request.
in-progress | partial-accept | Partial Accept | Part of the correction request was accepted, and part was denied.  
completed | amendment-completed | Amendment Completed | The record has been amended (corrected).
completed | denied | Denied | The request has been denied.  
completed | disagreement-logged | Disagreement Logged | The fulfiller (e.g. provider) has logged the requester’s (e.g. patient’s) disagreement with the correction request denial.
completed | inform-rebuttal-option | Inform Rebuttal Option | The fulfiller (e.g. provider) has logged the requester’s (e.g. patient’s) disagreement with the correction request denial, and provided a formal rebuttal.
completed |  partial-amendment-completed | Partial Amendment Completed |  The record has been partially amended (corrected).
{: .grid}

#### Task Status state machine

<div>{%include state-diagram.svg%}</div>

Please note that statuses shown containing underscores in these diagrams actually use hyphens instead. For example, "in_review" should be interpreted as "in-review".
<div>{%include state-diagram2.svg%}</div>

### Must Support

Must Support on any profile data element **SHALL** be interpreted as follows:

* content creators  
  * **SHALL** be capable of populating all data elements marked Must Support.
  * when the Must Support element is known, it **SHALL** be populated.
* content consumers 
  * **SHALL** be capable of processing resource instances containing the Must Support data elements without generating an error or causing the application to fail. 
  * **SHALL** interpret missing data elements within resource instances as data not present.
  * **SHOULD** be capable of displaying the data elements for human use or storing it for other purposes.
  
NOTE: The above definition of Must Support is derived from HL7v2 concept “Required but may be empty - RE” described in HL7v2 V28_CH02B_Conformance.doc.
NOTE: Readers are advised to understand FHIR Terminology requirements, FHIR RESTful API based on the HTTP protocol, along with FHIR Data Types, FHIR Search and FHIR Resource formats before implementing US Core requirements.

### Security

The Patient Request for Corrections workflow is a bidirectional communication between a patient (or their proxy) and a fulfiller.  Proper authentication is critical so that the communication is not exploited by malicious actors resulting in exposure of patient data. All transactions in the Patient Request for Corrections workflow must be secured appropriately with access to limited authorized individuals, data protected in transit, and appropriate audit measures taken.

* Implementers **SHALL** be aware of and conform to [security guidance](http://hl7.org/fhir/R4/security.html) associated with FHIR transactions.  
* Systems **SHOULD** establish a risk analysis and management regime.   
* Systems **SHALL** reference a single time source to establish a common time base for security auditing, as well as clinical data records, among computing systems.
* Systems **SHALL** keep audit logs of the various transactions.
* Systems **SHALL** use TLS version 1.2 or higher for all transmissions not taking place over a secure network connection. (Using TLS even within a secured network environment is still encouraged to provide defense in depth.) 
* For Authentication and Authorization, systems **SHOULD** support the [SMART App Launch Framework](http://www.hl7.org/fhir/smart-app-launch/history.html) for client <-> server interactions. NOTE: The SMART on FHIR specifications include the required OAuth 2.0 scopes for enabling security decisions.  In lieu of SMART on FHIR, an alternative framework for authentication and authorization **SHOULD** be followed (example, [Security for Scalable Registration, Authentication, and Authorization](http://hl7.org/fhir/us/udap-security/2021Sep/b2b.html) which uses UDAP).
* Systems **MAY** protect the confidentiality of data at rest via encryption and associated access controls. The policies and methods used are outside the scope of this specification.


---

// File: input/pagecontent/StructureDefinition-patient-correction-communication-intro.md

This is the profile for the Patient Correction Communication, which is used for back and forth conversation about a patient’s request for correction to their medical record.  Each Patient Correction Communication resource instance represents a message in the bidirectional conversation needed to complete a patient’s request for correction to their medical record or for logging their disagreement to a correction denial.   This profile sets minimum expectations for the Communication resource to support this workflow.  It is expected to be used in conjunction with the [Patient Correction Task](StructureDefinition-patient-correction-task.html) profile.

### Mandatory and Must Support data elements

The following data-elements must always be present ([Mandatory](https://www.hl7.org/fhir/us/core/conformance-expectations.html#mandatory-elements)) definition]) or must be supported if the data is present ([Must Support](https://www.hl7.org/fhir/us/core/conformance-expectations.html#must-support-elements)) definition). They are presented below in a simple human-readable explanation. Profile specific guidance is provided as well. The Formal Profile Definition below provides the formal summary, definitions, and terminology requirements.  Refer to the [Examples](examples.html) section of the guide for example resources provided in the context of an example workflow.

**Each implementation of PatientCorrectionCommunication must provide:**

1.	`id`: An id
2.	`status`: fixed to “completed”
3.	`category`: indicates whether it’s a “Request for Correction” or “Log Disagreement” process
4.	`subject`: the person whose record is to be corrected
5.	`sender`: who is sending this communication
6.	`recipient`: who is receiving this communication
7.	`sent`: date/time communication was sent
8.	`about`: When the initial Communication request for correction resource is created by the Requester, Communication.about will be empty.  When the Fulfiller spawns a Task to support the request, the Fulfiller sets `Communication.about` to reference the spawned Task that represents the entire request for correction or log disagreement process.  On all other Communication resources, `Communication.about` references the Communication resource that contained the initial request.  When a Log Disagreement Task is created, the Fulfiller will update the Communication containing the Log Disagreement request such that Communication.about references the Log Disagreement Task as well as the original correction request Communication.
9.	`topic`: a heading/subject line for the message being sent.  Could be thought of as the subject line in an email thread.
10.	`inResponseTo`: points to the prior Communication resource in a conversation thread.
11.	`Payload`: contains the actual message being communicated, including any attachments or references.

### Profile-specific implementation guidance

* If the Communication resource represents the start of a Request for Correction or Log Disagreement process, Communication.about will reference the Task representing the overall associated Fulfiller process.   On the start of a Log Disagreement, Communication.about will also reference the Communication resource of the initial correction request that is being disagreed with.
* Additional Communication resources are created to represent each component of the back and forth conversation between the Requester and Fulfiller.  The sender and recipient is set appropriately based on the direction of the conversation.  All Communication resources are stored and queryable on the Fulfiller.
* The Communication resources associated with a request for correction or log disagreement can be assembled into a conversation by first referring to the Communication of the original request, and then finding any Communication resources that reference it in the about field.  If there are any threads of conversation, these are connected via Communication.inResponseTo.  


---

// File: input/pagecontent/StructureDefinition-patient-correction-task-intro.md

This is the profile for the Patient Correction Task, which is used to summarize the Fulfiller process to support either a patient’s request for correction to their medical record or their logging of a disagreement to a correction denial.  A Requester can query the Patient Correction Task (or request notifications) to understand the current state and history of the process for carrying out the request on the Fulfiller side.  It can determine the type of process (Request for Correction or Log Disagreement), the current state of the process, timing information about the process (when did it start, when did it move through states, when did it complete), who made the original request on behalf of the Patient, and who owns the process on the Fulfiller side.  This profile sets minimum expectations for the Task resource to support this workflow.  It is expected to be used in conjunction with the [Patient Correction Communication](StructureDefinition-patient-correction-communication.html) profile.

### Mandatory and Must Support data elements

The following data-elements must always be present ([Mandatory](https://www.hl7.org/fhir/us/core/conformance-expectations.html#mandatory-elements)) definition]) or must be supported if the data is present ([Must Support](https://www.hl7.org/fhir/us/core/conformance-expectations.html#must-support-elements)) definition). They are presented below in a simple human-readable explanation. Profile specific guidance is provided as well. The Formal Profile Definition below provides the formal summary, definitions, and terminology requirements.  Refer to the [Examples](examples.html) section of the guide for example resources provided in the context of an example workflow.

**Each implementation of PatientCorrectionTask must provide:**

1.	`id`: An id
2.	`status`: status combined with businessStatus provide the state of the process
3.	`businessStatus`: status combined with businessStatus provide the state of the process
4.	`intent`: fixed to “order”
5.	`code`: indicates whether it’s a “Request Correction” or “Log Disagreement” process
6.	`for`: the patient whose record is to be corrected
7.	`requestor`: the person who asked for the correction on behalf of the patient in Task.for.
8.	`authoredOn`: date/time when the request was received on the Fulfiller side
9.	`lastModified`: date/time of last update to the process.
10.	`input`: points to the Communication resource containing the original patient correction or log disagreement request.
11.	`output`: points to the Communication resource containing the resolution of the request (for example, the completed amendment report)
12.	`reasonReference`: if the Task represents a disagreement, points to the Task containing the original request for correction process.

### Profile-specific implementation guidance

* The Task is spawned by the Fulfiller as a result of receipt of a Request for a Correction or a Request to Log a Disagreement.  It is expected that in most cases, these requests will be coming through a Communication resource.  However, this specification does not preclude the use of Task when requests are received via alternative means such as paper forms in the mail.  
* When a request for correction or logging of a disagreement is received via a Request for Correction or Log Disagreement Communication resource posting, a Task is spawned and then several fields in the Task must be populated by copying from the Communication resource that contains the original request.  In specific, code, for, requester, input, and authoredOn must be pulled from fields in the original Communication resource (see details on these fields below).
* When the Task is posted on the Fulfiller as a result of an originating Communication resource, the Fulfiller must update the Communication resource to reference the Task in the Communication.about field. 


---

// File: input/pagecontent/techanalysis.md

### Cross Version Analysis
{% include cross-version-analysis.xhtml %}

### Dependency Table
{% include dependency-table.xhtml %}

### Globals Table
{% include globals-table.xhtml %}

---

// File: input/pagecontent/examples.md

### Example Request for Correction Workflow with Links to Example Resources

Each event below includes links to example [Patient Correction Bundle](StructureDefinition-patient-correction-bundle.html), [Patient Correction Communication](StructureDefinition-patient-correction-communication.html), or [Patient Correction Task](StructureDefinition-patient-correction-task.html) resources.

#### EVENT 1

A patient makes a request to fix his record – the record says he smokes but he does not smoke. He uses his patient-facing app to import his medical records from Southside Clinic. 
Requester posts a [Bundle](Bundle-BundleExample.html) containing a [Communication resource](Communication-initialrequestforcorrection.html) to the Fulfiller, which then spawns a [Task resource](Task-correctionrequestprocess.html) to represent the correction process and returns the Task id in Communication.about.

#### EVENT 2

The medical records staff person assigned to the request needs additional information – the Fulfiller posts a a Bundle containing a [Communication resource](Communication-additionalinfoneeded.html) on the Fulfiller indicating the request for more information. The [Task resource](Task-correctionrequestprocess2.html) on the Fulfiller is updated to show the status of the request for correction process. The Requester gets notification of the request for additional information and the status of the overall process by polling (or notifications from) the Fulfiller.

#### EVENT 3

The patient provides the additional information needed. The Requestor posts a a Bundle containing a [Communication resource](Communication-additionalinfoprovided.html) to the Fulfiller with the additional information provided by the patient. The [Task resource](Task-correctionrequestprocess3.html) on the Fulfiller is updated to show the status of the request for correction process. The Requester gets notification of the request for additional information and the status of the overall process by polling or notifications from the Fulfiller.

#### EVENT 4

The medical records staff person has all the information needed and refers the request for clinical review. The [Task resource](Task-correctionrequestprocess4.html) on the Fulfiller is updated to show the status of the request for correction process. The Requester gets notification of the status by polling or notifications from the Fulfiller.

#### EVENT 5

The medical records staff person learns that the amendment has been accepted. The change, however, has not yet been done. The [Task resource](Task-correctionrequestprocess5.html) on the Fulfiller is updated to show the status of the request for correction process. The Requester gets notification of the status by polling or notifications from the Fulfiller.

#### EVENT 6

The amendment has been completed. The [Task resource](Task-correctionrequestprocess6.html) on the Fulfiller is updated to show the completion of the request for correction process. A a Bundle containing a [Communication resource](Communication-recordamended.html) is posted on the Fulfiller that provides the amendment report. The Requester gets notification of the status and the resulting amendment report by polling or notifications from the Fulfiller.


---

// File: input/fsh/Bundle.fsh

Profile:        PatientCorrectionBundle
Parent:         Bundle
Id:             patient-correction-bundle
Title:          "Patient Correction Bundle"
Description:    """The Patient Correction Bundle contains a Patient Correction Communication and other resources related to a patient request for correction.
Note that the operation has a bundle as its only parameter, as opposed to having multiple parameters for the input and output. The main reasons for this approach are:

    The bundle enables the expression of the relationships among the various resources that carry the necessary information.
    The entries in the bundle are full resources, which:
        allows the use of the profiling mechanisms to describe the different requirements for the different steps of the process
        sets the stage for future different RESTful approaches as an incremental change to the current specification
"""

* type = #collection (exactly)
* entry 1..* MS
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slice different resources included in the bundle"
* entry contains PatientCommResource 1..1 MS
* entry[PatientCommResource].resource only PatientCorrectionCommunication


Instance: BundleExample
InstanceOf: PatientCorrectionBundle
Description: "Example of an initial request for correction Bundle"
Usage: #example

* type = #collection

//* entry[PatientCommResource].link = 
* entry[0].fullUrl = "initialrequestforcorrection"
* entry[0].resource = initialrequestforcorrection

//* entry[AdditionalResource].link = 
// * entry[1].fullUrl = "ex-documentreference"
// * entry[1].resource = ex-documentreference


---

// File: input/fsh/CapabilityStatement.fsh

Instance: PatientCorrectionCapability
InstanceOf: CapabilityStatement
Title: "Patient Request for Corrections Capability Statement"
Description: "Describes the capabilities for a FHIR server to support patient requests for corrections."
Usage: #definition

* name = "PatientCorrectionCapability"
* status = #draft
* date = "2022-03-04"
* kind = #requirements
* description = "Describes the capabilities for a FHIR server to support patient requests for corrections."
* fhirVersion = #4.0.1
* format[0] = #xml
* format[1] = #json
* implementationGuide = "https://hl7.org/fhir/uv/fhir-patient-corrections"

* rest[0].mode = #server
* rest[0].documentation = "Description of the needed resources to be supported by the FHIR server, and the different possible interactions."

* rest[0].interaction[0].code = #transaction
* rest[0].interaction[1].code = #search-system

* rest[0].resource[0].type = #Communication
* rest[0].resource[0].documentation = "Read a communication between a patient and a fulfiller relating to a patient correction request."
* rest[0].resource[0].interaction[0].code = #read
* rest[0].resource[0].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].interaction[0].extension.valueCode = #SHALL

* rest[0].resource[0].interaction[1].code = #search-type
* rest[0].resource[0].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].interaction[1].extension.valueCode = #SHALL

* rest[0].resource[0].searchParam[0].name = "about"
* rest[0].resource[0].searchParam[0].type = #reference
* rest[0].resource[0].searchParam[0].documentation = "Search for PatientCorrectionTask or PatientCorrectionCommunication this PatientCorrectionCommunication is about."
* rest[0].resource[0].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[0].extension.valueCode = #SHALL


* rest[0].resource[1].type = #Task
* rest[0].resource[1].documentation = "Read a Task relating to a patient correction request."
* rest[0].resource[1].interaction[0].code = #read
* rest[0].resource[1].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[0].extension.valueCode = #SHALL

* rest[0].resource[1].interaction[1].code = #search-type
* rest[0].resource[1].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[1].extension.valueCode = #SHALL

* rest[0].resource[1].searchParam[0].name = "reasonReference"
* rest[0].resource[1].searchParam[0].type = #reference
* rest[0].resource[1].searchParam[0].documentation = "For Disagreement Tasks, search for the original request for correction Communication."
* rest[0].resource[1].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[0].extension.valueCode = #SHALL


* rest[0].resource[2].type = #Bundle
* rest[0].resource[2].documentation = "Read a Patient Correction Bundle which contains a Patient Correction Communication and related resources."
* rest[0].resource[2].interaction[0].code = #read
* rest[0].resource[2].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].interaction[0].extension.valueCode = #SHALL


---

// File: input/fsh/Communication.fsh

Profile:        PatientCorrectionCommunication
Parent:         Communication
Id:             patient-correction-communication
Title:          "Patient Correction Communication"
Description:    "A Communication between a patient and a fulfiller relating to a patient correction request."

* about ^slicing.discriminator.type = #type
* about ^slicing.discriminator.path = "reference"
* about ^slicing.rules = #open
* about ^slicing.ordered = false 
* about ^slicing.description = "Slice based on reference type"
* about contains correctionTask 0..1 MS
* about[correctionTask] only Reference(PatientCorrectionTask)
* about[correctionTask] ^short = "Patient Correction Task requesting a correction."
* about[correctionTask] ^definition = "A server-created Correction Task for servicing this correction request."
* about[correctionTask] ^comment = "When creating an initial correction request, this element SHALL be empty. If a processing system creates a Task resource related to a correction request, the server SHALL add a reference to that Task here. Any subsequent communication requests regarding the same correction request SHALL reference the relevant Task if present."

// "If this is the original Patient Correction Request  then Communication.about will initially be empty when posted by the Requester but populated with the Request for Correction Task reference by the Fulfiller when the Fulfiller spawn a Task to represent the Request for Correction or Logging of Disagreement process. For all subsequent Communication resources that represent conversations help between Requester and Fulfiller as part of the process, Communication.about references the Communication resource that contains the original request. If this Communication represents the start of a Log Disagreement request, then when the Fulfiller spawns a Task to support the logging of the disagreement, Communication.about will also reference the spawned Task."

// "* When creating an initial correction request, this element SHALL be empty.\r\n* If a processing system creates a Task resource related to a correction request, the server SHALL add a reference to that Task here.\r\n* Any subsequent communication requests regarding the same correction request SHALL reference the initial Communication and SHOULD reference the relevant Task if present.\r\n* "

* partOf 0..1 MS
* partOf only Reference(PatientCorrectionCommunication)
* partOf ^short      = "Initial Patient Correction Communication resource for this request."
* partOf ^definition = "The initial communication sent by a Requester for a record correction."
* partOf ^comment    = "When creating an initial correct request, this element SHALL be empty. Subsequent communications in either direction (to or from the patient) SHALL populate this element with a reference to the original communication requesting a correction."

* inResponseTo MS
* inResponseTo 0..1
* inResponseTo only Reference(PatientCorrectionCommunication)
* inResponseTo ^comment = "Patient Correction Request Communication that this is in response to. This will only be filled in if it represents a response to another Communication resource. It can be used to query and assemble conversation threads related to the request process."

* status = #completed
* status ^short = "Fixed: completed."

* category MS
* category 1..1
* category from PatientCorrectionCommunicationTypesVS

* topic MS
* topic ^short = "A heading/subject line for the message being sent."
* topic ^comment = "Equivalent to the subject line in an email thread."

* subject MS
* subject 1..1
* subject ^short = "The Patient that the correction request or the log disagreement applies to."
* subject only Reference(Patient)

* sender MS
* sender 1..1
* sender only Reference(Patient or RelatedPerson or Practitioner or PractitionerRole or Organization or HealthcareService)
* sender ^short   = "Message sender: either a Requestor or a Fulfiller"
* sender ^comment = "Depending on the direction of the patient correction communication, the sender of the communication may be the Requester or it may be the Fulfiller. If spawning a Task relating to an initial request (for either correction or logging of disagreement), the Fulfiller SHALL use this sender to represent the `Task.requester`."

* recipient MS
* recipient 1..*
* recipient only Reference(Patient or RelatedPerson or Practitioner or PractitionerRole or Organization or CareTeam or HealthcareService)
* recipient ^short   = "Message recipient: either a Requestor or a Fulfiller"
* recipient ^comment = "Depending on the direction of the patient correction communication, the recipient of the communication may be the Fulfiller or it may be the Requester."

* sent 1..1
* sent ^short   = "When this communication was sent"
* sent ^comment = "The date that this particular part of the conversation is sent.  On the initial request from the Requestor for either correction or logging a disagreement, this date/time will be used as `Task.authoredOn` to signify when the process was initiated on the Fulfiller."

* payload 0..*
* payload MS
* payload ^short = "Contents of this communication."
* payload ^comment = "The contents of this particular conversation component. If this is the original correction request or logging of a disagreement, then the payload would contain the request. If it is the final outcome of the request, then the payload would contain the final outcome information.  Otherwise it contains a single message in back and forth conversation needed to process the initial request. Since it is possible to have a Communication resource reference a conversation held outside of the FHIR Rest protocol (email, mail, portal messaging - see Communication.channel) the minimum cardinality is zero.  However, it is expected in most cases payload will be valued."

* note 0..*
* note ^short   = "Non-actionable notes about this communication."
* note ^comment = "If there is NOT a Task created to work on a correction request, this element MAY contain notes from those that are working on a correction. Notes from Requestors SHOULD be placed into additional communications, so that Fulfillers review them. This element SHALL NOT contain actionable requests from either Requestors or Fulfillers."

// These elements MAY be needed by others related to patient care.  E.g., a home healthcare worker that has a Task to request a correction on behalf of a patient.
// not used, so forbidden (would rather mark as "If you send, it can be ignored"). 
// * encounter 0..0
// * basedOn 0..0



Instance: About
InstanceOf: SearchParameter
Title: "Search on the PatientCorrectionCommunication.about element"
Description: "Search Parameter extension enabling clients to search on the PatientCorrectionCommunication.about element"
Usage: #definition
* url = "http://hl7.org/fhir/uv/patient-corrections/SearchParameter/About"
* description = "This SearchParameter enables finding all communications related to a Patient Request for Correction. Each communication related to a particular correction request will point to the original communication in the request."
* name = "AboutSearchParameter"
* status = #active
* code = #about
* base = #Communication
* expression = "Communication.about"
* type = #reference


---

// File: input/fsh/Event 1 - Initial Request for Correction - Communication.fsh

Instance: initialrequestforcorrection
InstanceOf: PatientCorrectionCommunication
Description: "Example of an initial request for correction Communication"
Usage: #example
* about = Reference(correctionrequestprocess)
* category = PatientCorrectionCommunicationTypes#medRecCxReq
* meta.versionId = "1"
* payload.contentReference = Reference(ex-documentreference)
// * reasonCode = $FHIRPatientCorrectionTemp#medreccx "Medical Record Correction Request"
* sender = Reference(ex-patient)
* recipient = Reference(ex-practitioner)
* sent = "2021-05-19T10:00:17-00:00"
* status = #completed
* subject = Reference(ex-patient)


---

// File: input/fsh/Event 1 - Initial Request for Correction - Task.fsh

Instance: correctionrequestprocess
InstanceOf: PatientCorrectionTask
Description: "Example of an initial request for correction Task"
Usage: #example
* authoredOn = "2021-05-19T10:00:17-00:00"
* businessStatus = PatientCorrectionBusinessStatus#queued
* code = PatientCorrectionTaskTypes#medRecCxReq
* for = Reference(ex-patient)
* input.type = PatientCorrectionCommunicationTypes#medRecCxReq
* input.valueReference = Reference(initialrequestforcorrection)
* intent = #order
* meta.versionId = "1"
* owner = Reference(ex-practitioner)
* requester = Reference(ex-patient)
* status = #ready


---

// File: input/fsh/Event 2 - Additional Info Needed - Communication.fsh

Instance: additionalinfoneeded
InstanceOf: PatientCorrectionCommunication
Description: "Example of request for correction additional information needed Communication"
Usage: #example
* about = Reference(correctionrequestprocess)
* partOf = Reference(initialrequestforcorrection)
* category = PatientCorrectionCommunicationTypes#medRecCxReq
* payload.contentString = "Upon review of your record, we see that you have a history of smoking.  Is this incorrect, or did you quit smoking at some point?"
* recipient = Reference(ex-patient)
* sender = Reference(ex-practitioner)
* sent = "2021-05-20T10:00:17-00:00"
* status = #completed
* subject = Reference(ex-patient)
* topic.text = "Question about Amendment Request"
* inResponseTo = Reference(initialrequestforcorrection)


---

// File: input/fsh/Event 2 - Additional Info Needed - Task.fsh

Instance: correctionrequestprocess2
InstanceOf: PatientCorrectionTask
Description: "Example of request for correction additional information needed Task"
Usage: #example
* authoredOn = "2021-05-19T10:00:17-00:00"
* businessStatus = PatientCorrectionBusinessStatus#waiting-for-information
* code = PatientCorrectionTaskTypes#medRecCxReq
* for = Reference(ex-patient)
* input.type = PatientCorrectionCommunicationTypes#medRecCxReq
* input.valueReference = Reference(initialrequestforcorrection)
* intent = #order
* lastModified = "2021-05-20T10:00:17-00:00"
* meta.versionId = "2"
* owner = Reference(ex-practitioner)
* requester = Reference(ex-patient)
* status = #in-progress


---

// File: input/fsh/Event 3 - Additional Info Provided - Communication.fsh

Instance: additionalinfoprovided
InstanceOf: PatientCorrectionCommunication
Description: "Example of request for correction additional information provided Communication"
Usage: #example
* about = Reference(correctionrequestprocess)
* partOf = Reference(initialrequestforcorrection)
* category = PatientCorrectionCommunicationTypes#medRecCxReq
* inResponseTo = Reference(additionalinfoneeded)
* meta.versionId = "1"
* payload.contentString = "I quit smoking over 2 years ago on Dec 10th, 2018."
* recipient = Reference(ex-practitioner)
* sender = Reference(ex-patient)
* sent = "2021-05-20T11:00:17-00:00"
* status = #completed
* subject = Reference(ex-patient)
* topic.text = "Question About Amendment Request"
* inResponseTo = Reference(additionalinfoneeded)


---

// File: input/fsh/Event 3 - Additional Info Provided - Task.fsh

Instance: correctionrequestprocess3
InstanceOf: PatientCorrectionTask
Description: "Example of request for correction additional information provided Task"
Usage: #example
* authoredOn = "2021-05-19T10:00:17-00:00"
* businessStatus = PatientCorrectionBusinessStatus#in-review
* code = PatientCorrectionTaskTypes#medRecCxReq
* for = Reference(ex-patient)
* input.type = PatientCorrectionCommunicationTypes#medRecCxReq
* input.valueReference = Reference(initialrequestforcorrection)
* intent = #order
* lastModified = "2021-05-20T11:00:17-00:00"
* meta.versionId = "3"
* owner = Reference(ex-practitioner)
* requester = Reference(ex-patient)
* status = #in-progress


---

// File: input/fsh/Event 4 - In Clinical Review - Task.fsh

Instance: correctionrequestprocess4
InstanceOf: PatientCorrectionTask
Description: "Example of request for correction in clinical review Task"
Usage: #example
* authoredOn = "2021-05-19T10:00:17-00:00"
* businessStatus = PatientCorrectionBusinessStatus#in-review
* code = PatientCorrectionTaskTypes#medRecCxReq
* for = Reference(ex-patient)
* input.type = PatientCorrectionCommunicationTypes#medRecCxReq
* input.valueReference = Reference(initialrequestforcorrection)
* intent = #order
* lastModified = "2021-05-20T11:00:17-00:00"
* meta.versionId = "3"
* owner = Reference(ex-practitioner)
* requester = Reference(ex-patient)
* status = #in-progress


---

// File: input/fsh/Event 5 - Amendment Accepted - Task.fsh

Instance: correctionrequestprocess5
InstanceOf: PatientCorrectionTask
Description: "Example of request for correction ammendment accepted Task"
Usage: #example
* authoredOn = "2021-05-19T10:00:17-00:00"
* businessStatus = PatientCorrectionBusinessStatus#accepted
* code = PatientCorrectionTaskTypes#medRecCxReq
* for = Reference(ex-patient)
* input.type = PatientCorrectionCommunicationTypes#medRecCxReq
* input.valueReference = Reference(initialrequestforcorrection)
* intent = #order
* lastModified = "2021-05-20T11:00:17-00:00"
* meta.versionId = "3"
* owner = Reference(ex-practitioner)
* requester = Reference(ex-patient)
* status = #in-progress


---

// File: input/fsh/Event 6 - Amendment Completed - Communication.fsh

Instance: recordamended
InstanceOf: PatientCorrectionCommunication
Description: "Example of request for correction amendment completed Communication"
Usage: #example
* about = Reference(correctionrequestprocess)
* partOf = Reference(initialrequestforcorrection)
* category = PatientCorrectionCommunicationTypes#medRecCxReq
* payload[0].contentString = "Your record has been amended as requested. See attached."
* payload[+].contentReference = Reference(ex-documentreference)
* recipient = Reference(ex-patient)
* sender = Reference(ex-practitioner)
* sent = "2021-05-25T12:00:17-00:00"
* status = #completed
* subject = Reference(ex-patient)
* topic.text = "Your Record Has Been Amended"
* inResponseTo = Reference(additionalinfoprovided)


---

// File: input/fsh/Event 6 - Amendment Completed - Task.fsh

Instance: correctionrequestprocess6
InstanceOf: PatientCorrectionTask
Description: "Example of request for correction ammendment completed Task"
Usage: #example
* authoredOn = "2021-05-19T10:00:17-00:00"
* businessStatus = PatientCorrectionBusinessStatus#amendment-completed
* code = PatientCorrectionTaskTypes#medRecCxReq
* for = Reference(ex-patient)
* input.type = PatientCorrectionCommunicationTypes#medRecCxReq
* input.valueReference = Reference(initialrequestforcorrection)
* intent = #order
* lastModified = "2021-05-25T12:00:17-00:00"
* meta.versionId = "6"
* output.type = PatientCorrectionOutputTypes#medRecCxReqResolution
* output.valueReference = Reference(recordamended)
* owner = Reference(ex-practitioner)
* requester = Reference(ex-patient)
* status = #completed


---

// File: input/fsh/ex-common.fsh

// This file contains example resources used in the Correction Request examples. 
// These resources are not fundamental to explaining the Resource constraints. 
// These resources are contextual for the examples. For example an example patient with example observations etc.

Instance:   ex-patient
InstanceOf: Patient
Title:      "Dummy Patient example"
Description: "Dummy patient example for completeness sake. No actual use of this resource other than an example target"
// history - http://playgroundjungle.com/2018/02/origins-of-john-jacob-jingleheimer-schmidt.html
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* name[+].use = #usual
* name[=].family = "Schmidt"
* name[=].given = "John"
* name[+].use = #old
* name[=].family = "Schnidt"
* name[=].given[+] = "John"
* name[=].given[+] = "Jacob"
* name[=].given[+] = "Jingle"
* name[=].given[+] = "Heimer"
* name[=].period.end = "1960"
* name[+].use = #official
* name[=].family = "Schmidt"
* name[=].given[+] = "John"
* name[=].given[+] = "Jacob"
* name[=].given[+] = "Jingleheimer"
* name[=].period.start = "1960-01-01"
* name[+].use = #nickname
* name[=].family = "Schmidt"
* name[=].given = "Jack"
* gender = #other
* birthDate = "1923-07-25"
* address.state = "WI"
* address.country = "USA"

Instance:   ex-organization
InstanceOf: Organization
Title:      "Dummy Organization example"
Description: "Dummy Organization example for completeness sake. No actual use of this resource other than an example target."
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* name = "nowhere"

Instance: ex-practitioner
InstanceOf: Practitioner
Title: "Dummy Practitioner example"
Description: "Dummy Practitioner example for completeness sake. No actual use of this resource other than an example target."
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* name[+].use = #official
* name[=].family = "Smith"
* name[=].given[+] = "John"

Instance: ex-practitioner2
InstanceOf: Practitioner
Title: "Dummy Practitioner (PCP) example"
Description: "Dummy Practitioner (PCP) example for completeness sake. No actual use of this resource other than an example target."
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* name[+].use = #official
* name[=].family = "Jones"
* name[=].given[+] = "Alice"

Instance: ex-smoking
InstanceOf: Observation
Title: "Dummy Patient is smoking"
Description: "Dummy Patient is a smoker. No actual use of this resource other than as an exmaple target."
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#social-history
* code = http://loinc.org#72166-2
* subject = Reference(ex-patient)
* issued = "1983-12-12T05:27:04Z"
* valueCodeableConcept = http://snomed.info/sct#428041000124106 "Occasional tobacco smoker"

Instance: ex-documentreference
InstanceOf: DocumentReference
Title: "Dummy DocumentReference example"
Description: "Dummy DocumentReference example for completeness sake. No actual use of this resource other than an example target"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #current
* content.attachment.title = "Example Document"
* content.attachment.contentType = #text/plain


---

// File: input/fsh/Operations.fsh

Instance: correction-request
InstanceOf: OperationDefinition
Description: "The correction-request operation is used to communicate a request for correction or a logging of a disagreement of a denial from a requester to a fulfiller. It includes the ability to send the request along with attachments. The fulfiller can spawn a task to manage the correction process as part of the operation. For the operation, we expect the server to store the Communication resource, spawn a Task when appropriate, and update the Communication and return the Communication resource with reference to a Task id if a Task is spawned. The correction-request operation is also used whenever the requester provides updates to the fulfiller (additional information, conversation)."
Usage: #definition

* name = "PatientCorrectionRequestOperation"
* title = "Patient Correction Request Operation"
* status = #draft
* kind = #operation
* code = #correctionrequest
* system = false
* type = true
* instance = false
* resource[0] = #Communication

// Parameter: CorrectionRequest
* parameter[+].name = #CorrectionRequest
* parameter[=].use = #in
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "A collection of resources representing the correction request, disagreement, or back and forth conversation.  The Bundle should follow [Patient Correction Bundle](StructureDefinition-patient-correction-bundle.html) profile."
* parameter[=].type = #Bundle

// Output
* parameter[+].name = #CorrectionResponse
* parameter[=].use = #out
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "A collection of resources representing a correction request response. The Bundle should follow [Patient Correction Bundle](StructureDefinition-patient-correction-bundle.html) profile."
* parameter[=].type = #Bundle


---

// File: input/fsh/Task.fsh

Profile:        PatientCorrectionTask
Parent:         Task
Id:             patient-correction-task
Title:          "Patient Correction Task"
Description:    "Represents the process of reviewing the patient's request for correction or the patient's request to log a disagreement to a prior request for correction decision.  This Task is spawned by the Fulfiller as a result of a post of a Communication resource that indicates a new request for correction or a new logging of a disagreement."

* obeys task-reasonreference
* obeys task-output2

* identifier MS
* identifier 0..*
* identifier ^short = "A business identifier for the correction process."

* status obeys task-status-allowed
* status MS
* status 1..1
* status ^short   = "Current status of a Correction Request or Log Disagreement."
* status ^comment = "The current status of the Correction Request or Log Disagreement process. This status together with the business status can be used to determine the state of the process."
* status from task-status

* statusReason 0..1
* statusReason ^short   = "Reason for the correction request status."
* statusReason ^comment = "The reason for the correction request status. Codes to identify the reason for current status. These will typically be specific to a particular workflow."

* businessStatus MS
* businessStatus 0..1
* businessStatus ^short = "Business status of the request for correction process or the log disagreement process."
* businessStatus ^comment = "The business status of the request for correction process or the log disagreement process. The domain-specific business-contextual sub-state of the task. For example:  Waiting on additional information from requester, waiting on additional information from fulfiller (could be a specific party on the fulfiller side), more time needed to review request, an amendment will be made to the record, an amendment has been made to the record, current record determined accurate and will not be amended, a partial amendment will be made to the record, a partial amendment has been made to the record, disagreement has been reviewed and  attached to the record, disagreement has been rebutted."
* businessStatus from PatientCorrectionBusinessStatusVS

* intent 1..1
* intent only code
* intent = #order (exactly)
* intent ^short = "Indicates the actionability associated with the Task."

* code MS
* code 1..1
* code ^short      = "Correction Task type."
* code ^definition = "Either a patient correction or a disagreement."
* code from PatientCorrectionTaskTypesVS
* code ^condition = task-output2
* code ^condition = task-reasonreference

* for MS
* for 1..1
* for only Reference(Patient)
* for ^short = "Patient this correction or disagreement relates to."
* for ^comment = "The patient whose record this correction or disagreement references. If this task was created in response to a request received through a Communication resource, this value SHALL be populated with the value of `Communication.subject` from the original request."

* executionPeriod 0..1
* executionPeriod ^short = "When the request is completed by the Fulfiller."

* authoredOn MS
* authoredOn 1..1
* authoredOn ^short = "When this Task was created."
* authoredOn ^comment = "The date/time that the original request was received by the Fulfiller, kicking off the request for correction or log disagreement process. If the request was received within the payload of a Communication resource, it SHOULD match `Communication.sent` from the original request Communication resource."

* lastModified MS
* lastModified 0..1
* lastModified ^short = "When the correction task was last modified."
* lastModified ^comment = "Indicates the most recent modification date/time for the correction process. Usually this will change in conjunction with a status or businessStatus change. When `status = completed`, this element gives the process completion date/time. Note that this element is useful when doing historical version searches."

* requester MS
* requester 0..1
* requester only Reference(Patient or RelatedPerson)
* requester ^short      = "Entity requesting the correction or logging the disagreement."
* requester ^definition = "The entity that is requesting the correction or logging the disagreement, such as a patient or their caregiver."

* owner MS
* owner 0..1
* owner only Reference(Practitioner or PractitionerRole or Organization or CareTeam or HealthcareService)
* owner ^short = "The entity that is responsibility for fulfilling the request. Initially, this could be populated from Communication.recipient on the Communication resource of the initial request.  TheFulfiller can then refine to a specific individual, group, role, or department.  For example, a medical records staff person."

* reasonCode ^short = "Why task is needed.  E.g., need record correct prior to upcoming surgery."

* reasonReference 0..1
* reasonReference only Reference(PatientCorrectionTask)
* reasonReference ^short = "Log Disagreement Task to point to the original Request for Correction Task."
* reasonReference ^comment = "Used on Log Disagreement Task to point to the original Request for Correction Task."
* reasonReference ^condition = task-reasonreference
// * reasonReference obeys task-reasonreference

* note ^short   = "Non-actionable notes about this communication."
* note ^comment = "Notes from Requestors SHOULD be placed into additional communications instead of notes, so that Fulfillers review them. This element SHALL NOT contain actionable requests from either Requestors or Fulfillers."

* restriction 0..0
* restriction ^short = ""

* input 0..*

* input.id 0..0
* input.extension 0..0
* input.modifierExtension 0..0

* input.type ^short = "Label for input"
* input.type from PatientCorrectionCommunicationTypesVS

* input.value[x] 1..1
* input.value[x] only string or Attachment or Reference(PatientCorrectionCommunication)
// * input obeys task-input

* output 0..*
* output ^short = "Formal Response from Fulfiller to the Correction Request or to the Disagreement to Correction Denial."
* output ^condition = task-output2
// * output obeys task-output2
// * output obeys task-output1 and task-output2 and task-output3

* output.id 0..0
* output.extension 0..0
* output.modifierExtension 0..0

* output.type from PatientCorrectionOutputTypesVS

* output.value[x] 1..1
* output.value[x] only string or Attachment or Reference(PatientCorrectionCommunication)

// not used, so forbidden (would rather mark as "If you send, it can be ignored"). 
* encounter 0..0
* basedOn 0..0
* partOf 0..0


Invariant: task-reasonreference
Description: "If this is a Disagreement Task, there SHALL be a reference to the original Request for Correction Communication."
Expression: "Task.code.coding.exists(code = 'medRecCxDenialDisagree' and system = 'http://hl7.org/fhir/uv/patient-corrections/CodeSystem/PatientCorrectionTaskTypes') implies Task.reasonReference.exists()"
Severity: #error

// Invariant: task-note
// Description: "Task.note[i] SHALL only be updated or deleted by its initial author."
// Expression: "true"
// Severity: #error

// Invariant: task-input
// Description: "Task.input SHALL only be populated or updated by the CorrectionRequestor."
// Expression: "true"
// Severity: #error

// Invariant: task-output1
// Description: "Task.output SHALL only be populated or updated by the CorrectionFulfiller."
// Expression: "true"
// Severity: #error

Invariant: task-output2
Description: "If this is a completed Request for Correction Task, there SHALL be a formal response to the request (acceptance, denial, partial acceptance/denial)."
Expression: "(Task.code.coding.exists(code = 'medRecCxReq' and system = 'http://hl7.org/fhir/uv/patient-corrections/CodeSystem/PatientCorrectionTaskTypes') and Task.status = 'completed') implies Task.output.type.coding.exists(code = 'medRecCxReqResolution' and system = 'http://hl7.org/fhir/uv/patient-corrections/CodeSystem/PatientCorrectionOutputTypes')"
Severity: #error

// Invariant: task-output3
// Description: "If Task.code indicates this is a Disagreement Task, this field SHALL contain the formal response to the disagreement and optionally a rebuttal."
// Expression: "true"
// Severity: #error

Invariant:  task-status-allowed
Description: "The status of the Task SHALL be one of the following: ready, in-progress, cancelled, completed."
Expression: "$this in ('ready' | 'in-progress' | 'cancelled' | 'completed')"
Severity:   #error

Invariant:  task-status-ready-business-status
Description: "If the status of the Task is ready, the allowed businessStatus is queued."
Expression: "status = 'ready' implies businessStatus.where(coding.system = 'http://hl7.org/fhir/uv/patient-corrections/CodeSystem/PatientCorrectionBusinessStatus' and coding.code = 'queued')"
Severity:   #error

Invariant:  task-status-in-progress-business-status
Description: "If the status of the Task is in-progress, the allowed businessStatus values are in-review, waiting-for-information, accepted, or partial-accept."
Expression: "status = 'ready' implies businessStatus.where(coding.system = 'http://hl7.org/fhir/uv/patient-corrections/CodeSystem/PatientCorrectionBusinessStatus' and coding.code in 'in-review' | 'waiting-for-information' | 'accepted' | 'partial-accept')"
Severity:   #error

Invariant:  task-status-cancelled-business-status
Description: "If the status of the Task is cancelled, the allowed businessStatus is requester-cancelled."
Expression: "status = 'cancelled' implies businessStatus.where(coding.system = 'http://hl7.org/fhir/uv/patient-corrections/CodeSystem/PatientCorrectionBusinessStatus' and coding.code = 'requester-cancelled')"
Severity:   #error

Invariant:  task-status-completed-business-status
Description: "If the status of the Task is completed, the allowed businessStatus values are amendment-completed, denied, disagreement-logged, inform-rebuttal-option, or partial-amendment-completed."
Expression: "status = 'completed' implies businessStatus.where(coding.system = 'http://hl7.org/fhir/uv/patient-corrections/CodeSystem/PatientCorrectionBusinessStatus' and coding.code = 'amendment-completed' | 'denied' | 'disagreement-logged' | 'inform-rebuttal-option' | 'partial-amendment-completed)"
Severity:   #error


Instance: ReasonReference
InstanceOf: SearchParameter
Title: "Search on the PatientCorrectionTask.reasonReference element"
Description: "Search Parameter extension enabling clients to search on the PatientCorrectionTask.reasonReference element"
Usage: #definition
* url = "http://hl7.org/fhir/uv/patient-corrections/SearchParameter/ReasonReference"
* description = "This SearchParameter enables finding all tasks related to a Patient Request for Correction. Each task related to a particular correction request will point to the original communication in the request. There will be a task for the original request, and there may be additional tasks for any disagreements."
* name = "ReasonReferenceSearchParameter"
* status = #active
* code = #reasonreference
* base = #Task
* expression = "Task.reasonReference"
* type = #reference


---

// File: input/fsh/vocabulary.fsh

CodeSystem:  PatientCorrectionCommunicationTypes
Title: "Patient Correction Communication Types"
Description: "CodeSystem of Communication categories for use in Patient Correction Request"
* ^caseSensitive = false
* ^experimental = false
* #medRecCxReq "Correction request by the Patient or RelatedPerson"
* #medRecCxDenialDisagree "Disagreement with a denial correction request by the Patient or RelatedPerson"


ValueSet: PatientCorrectionCommunicationTypesVS
Title: "Patient Correction Communication Types Value Set"
Description: "ValueSet of Communication types for patient request for corrections"
* ^experimental = false
* PatientCorrectionCommunicationTypes#medRecCxReq
* PatientCorrectionCommunicationTypes#medRecCxDenialDisagree


CodeSystem:  PatientCorrectionTaskTypes
Title: "Patient Correction Task Types"
Description:  "CodeSystem of task types for patient request for corrections"
* ^caseSensitive = false
* ^experimental = false
* #medRecCxReq "Correction request by the Patient or RelatedPerson"
* #medRecCxDenialDisagree "Disagreement by the Patient or RelatedPerson regarding a denied requested correction."


ValueSet: PatientCorrectionTaskTypesVS
Title: "Patient Correction Task Types Values Set"
Description: "ValueSet of task types for patient requestion for corrections"
* ^experimental = false

* PatientCorrectionTaskTypes#medRecCxReq
* PatientCorrectionTaskTypes#medRecCxDenialDisagree


CodeSystem:  PatientCorrectionOutputTypes
Title: "Patient Correction Output Types"
Description:  "CodeSystem of output types for patient request for corrections"
* ^caseSensitive = false
* ^experimental = false
* #medRecCxReqResolution "Correction request resolution"


ValueSet: PatientCorrectionOutputTypesVS
Title: "Patient Correction Output Types Value Set" 
Description: "ValueSet of output types for patient corrections"
* ^experimental = false

* PatientCorrectionOutputTypes#medRecCxReqResolution


CodeSystem:  PatientCorrectionBusinessStatus
Title: "Patient Correction Business Statuses"
Description:  "CodeSystem of business statuses for patient request for corrections"
* ^caseSensitive = false
* ^experimental = false
* #queued "A request to correct a record or log a disagreement has been received by the fulfiller (e.g. provider) but has not yet been reviewed."
* #in-review "Review is in progress."
* #waiting-for-information "The fulfiller (e.g. provider) is waiting for additional information."
* #requester-cancelled "The request has been cancelled by the requester."
* #accepted "Decision was made to accept the correction request."
* #partial-accept "Part of the correction request was accepted, and part was denied."
* #amendment-completed "The record has been amended (corrected)."
* #denied "The request has been denied."
* #disagreement-logged "The fulfiller (e.g. provider) has logged the requester’s (eg patient’s) disagreement with the correction request denial."
* #completed "The fulfiller (e.g. provider) has logged the requester’s (e.g. patient’s) disagreement with the correction request denial, and provided a formal rebuttal."


ValueSet: PatientCorrectionBusinessStatusVS
Title: "Patient Correction Business Status"
Description: "ValueSet of business statuses for patient request for corrections"
* ^experimental = false

* PatientCorrectionBusinessStatus#queued
* PatientCorrectionBusinessStatus#in-review
* PatientCorrectionBusinessStatus#waiting-for-information
* PatientCorrectionBusinessStatus#requester-cancelled
* PatientCorrectionBusinessStatus#accepted
* PatientCorrectionBusinessStatus#partial-accept
* PatientCorrectionBusinessStatus#amendment-completed
* PatientCorrectionBusinessStatus#denied
* PatientCorrectionBusinessStatus#disagreement-logged
* PatientCorrectionBusinessStatus#completed


---

// File: input/images-source/comm-push-request.plantuml

@startuml
title PUSH Interactions for Request For Correction Using Communication Alone

note left of CorrectionRequester
Send a new Correction Request
end note
CorrectionRequester->RequestFulfiller: Create (POST) Communication Initial Correction Request
activate RequestFulfiller
RequestFulfiller->RequestFulfiller: start internal processing
RequestFulfiller-->CorrectionRequester: return created Communication (with id)

alt
note right of RequestFulfiller
When more information is needed
then a new Communication is sent
with inResponseTo original
end note
CorrectionRequester<-RequestFulfiller: Create (POST) new Communication Question On Correction Request
CorrectionRequester -> CorrectionRequester: process and react
end

alt
note left of CorrectionRequester
Response to a question from the CorrectionFulfiller
end note
CorrectionRequester->RequestFulfiller: Create (POST) new Communication Response on Question
end



alt
note right of RequestFulfiller
When the request is fulfilled
(agreed or rejected) then 
a new concluding Communication
end note
RequestFulfiller->RequestFulfiller: finish internal processing
CorrectionRequester<-RequestFulfiller: Create (POST) new Communication Conclusion on Correction Request
CorrectionRequester -> CorrectionRequester: process and react
end

Deactivate RequestFulfiller

@enduml


---

// File: input/images-source/comm-rest-request.plantuml

@startuml
title RESTful Interactions for Request For Correction Using Communication Alone

note left of CorrectionRequester
Send a new Correction Request
end note
CorrectionRequester->RequestFulfiller: Create (POST) Communication Initial Correction Request
activate RequestFulfiller
RequestFulfiller->RequestFulfiller: start internal processing
RequestFulfiller-->CorrectionRequester: return created Communication (with id)


loop
note left of CorrectionRequester
Poll periodically to check for 
correspondence and status of the 
correction request until completed
end note
CorrectionRequester->RequestFulfiller: Search (GET) Communications in response
CorrectionRequester -> CorrectionRequester: process and react
end

alt
note right of RequestFulfiller
When more information is needed
then a new Communication is created
with inResponseTo original
end note
RequestFulfiller<-RequestFulfiller: Create (POST) new Communication Question on Correction Request
end

alt
note left of CorrectionRequester
Correspond with Fulfiller
end note
CorrectionRequester->RequestFulfiller: Create (POST) new Communication Response on Question
end



alt
note right of RequestFulfiller
When the request is fulfilled
(agreed or rejected) then 
a new concluding Communication
end note
RequestFulfiller<-RequestFulfiller: Create (POST) new Communication Conclusion on Correction Request
end

Deactivate RequestFulfiller
note left of CorrectionRequester: loop discovers Conclusion Communication
@enduml

---

// File: input/images-source/overall-sequence.plantuml

@startuml
title Abstract Model - Request For Correction

CorrectionRequester->RequestFulfiller : Request a Change

@enduml


---

// File: input/images-source/state-diagram.plantuml

@startuml
skinparam svgDimensionStyle false
hide empty description 
[*] -> ready : External post of Communication resource
state ready {
  state queued #lightblue {
  }
}

state in_progress {
  state in_review #lightblue{
  }
  state waiting_for_information #lightblue{
  }
  state accepted #lightblue{
  }
  state partial_accept #lightblue{
  }
}


state cancelled {
  state requester_cancelled #lightblue {
  }
}


state complete {
  state amendment_completed #lightblue{
  }
  state denied #lightblue{
  }
  state partial_amendment_completed #lightblue{
  }
}
ready --> in_review
queued : Request received\nbut not reviewed
in_review --> waiting_for_information
in_review --> accepted
in_review --> partial_accept
in_review --> in_review: Inform requester on\nadditional time needed
waiting_for_information --> in_review
in_review --> denied
accepted --> amendment_completed
waiting_for_information : e.g. Additional Information Needed
accepted : Decision made to accept
partial_accept : Decision made that\npart of request is accepted\nand part is denied,\ndisagreement can be logged
denied : Decision made to deny,\ndisagreement can be logged
cancelled --> [*]
ready --> cancelled
in_progress --> cancelled
requester_cancelled : Requester decided to cancel\nthe request for correction
partial_accept --> partial_amendment_completed: Communication to inform\non rebuttal option
denied --> [*]
complete --> [*]

state Task.status{
}
state Task.businessStatus #lightblue {
}
@enduml


---

// File: input/images-source/state-diagram2.plantuml

@startuml 
skinparam svgDimensionStyle false
hide empty description 
[*] -> ready : External post of Communication resource
state ready {
  state queued #lightblue {
  }
}

state in_progress {
  state in_review #lightblue{
  }  
  state waiting_for_information #lightblue{  
  }
  state partial_accept #lightblue{  
  }
}

state complete {
  state denied #lightblue{
  }
  state partial_amendment_completed #lightblue{
  }
}

state logging {
  state disagreement_logged #lightblue{
 }
  state inform_rebuttal_option #lightblue{
 }
}

state Task.status{
}

state Task.businessStatus #lightblue {
}
ready --> in_review
queued : Request received\nbut not reviewed
in_review --> waiting_for_information
waiting_for_information --> in_review
in_review --> partial_accept
in_review --> in_review: Inform requester on\nadditional time needed
in_review --> denied
denied --> disagreement_logged
disagreement_logged --> in_review
waiting_for_information : e.g. Additional Information Needed
partial_accept : Decision made that\npart of request is accepted\nand part is denied,\ndisagreement can be logged
denied : Decision made to deny,\ndisagreement can be logged
partial_accept --> partial_amendment_completed
partial_accept --> disagreement_logged: Communication to inform\non rebuttal option
complete --> [*]
logging --> [*]
disagreement_logged --> inform_rebuttal_option

@enduml


---

// File: input/images-source/task-comm-request.plantuml

@startuml
skinparam svgDimensionStyle false
title Restful Correction Request Process

note left of CorrectionRequester
Send a new Correction Request
end note
CorrectionRequester->RequestFulfiller: Invoke $correction-request operation (Bundle) with a new Communication
activate RequestFulfiller
RequestFulfiller->RequestFulfiller: Create Task using internal processing
RequestFulfiller-->CorrectionRequester: return Bundle with created Communication resource\nwith pointer to new Task in Communication.about

alt
note right of RequestFulfiller
When more information is needed
then the Task status is updated and 
a new Communication is created that asks for the additional information
end note
RequestFulfiller->RequestFulfiller: update Task status and create new Communication
end
CorrectionRequester -> RequestFulfiller: poll (query) for any changes to Task status and for\nany new Communication.
alt
note left of CorrectionRequester
Correspond with Fulfiller to respond to request
end note
CorrectionRequester->RequestFulfiller: Invoke $correction-request operation (Bundle)
end
note right of RequestFulfiller
When the request is fulfilled
(agreed or rejected) then 
the Task status is updated and
a new concluding Communication is created.
end note
RequestFulfiller->RequestFulfiller: update Task status and create new Communication with denial or accept/amend
CorrectionRequester -> RequestFulfiller: poll (query) for any changes to Task status and for concluding Communication.


Deactivate RequestFulfiller
@enduml


---

// File: input/images-source/use-case-1.plantuml

@startuml
title Abstract Model - Request For Correction accepted

note left of CorrectionRequester
1. Notice a problem
end note
CorrectionRequester->RequestFulfiller : 4. Request a Change
Activate RequestFulfiller
RequestFulfiller->RequestFulfiller : Check records

loop Dialog (9. status, clarifications, etc.)
   RequestFulfiller->CorrectionRequester : 6a. Please clarify
   CorrectionRequester->RequestFulfiller : 6b. Here is the clarification
end

RequestFulfiller->RequestFulfiller : Decide to make correction
RequestFulfiller->CorrectionRequester : 7. Change accepted
RequestFulfiller->CorrectionRequester : 8. Correction Completed
Deactivate RequestFulfiller

@enduml


---

// File: input/images-source/use-case-2.plantuml

@startuml
title Abstract Model - Request For Correction Denied

note left of CorrectionRequester
Notice a problem
end note
CorrectionRequester->RequestFulfiller : 4. Request a Change
Activate RequestFulfiller
RequestFulfiller->RequestFulfiller : Check records

loop 8. Dialog (status, clarifications, etc.)
   RequestFulfiller->CorrectionRequester : 6a. Please clarify
   CorrectionRequester->RequestFulfiller : 6b. Here is the clarification
end

RequestFulfiller->RequestFulfiller : Decide to deny the correction
RequestFulfiller->CorrectionRequester : 7. Change denied
Deactivate RequestFulfiller

@enduml


---

// File: input/images-source/use-case-3-b.plantuml

@startuml
title Abstract Model - Disagreement on a Denied Correction stays Denied

note left of CorrectionRequester
Previously had a Change Denied
end note


CorrectionRequester->RequestFulfiller : 3. Send a Disagreement
Activate RequestFulfiller
RequestFulfiller->RequestFulfiller : Record Disagreement
note right: Based on the arguments and data\ndecide to to continue to reject changing the record
loop Check Status
CorrectionRequester->RequestFulfiller : 6. Check status
end


RequestFulfiller->RequestFulfiller: Record Rebuttal
RequestFulfiller->CorrectionRequester: 5. Change remains Denied [with Rebuttal]
Deactivate RequestFulfiller

@enduml

---

// File: input/images-source/use-case-3.plantuml

@startuml
title Abstract Model - Disagreement on a Denied Correction

note left of CorrectionRequester
Previously had a Change Denied
end note

CorrectionRequester->RequestFulfiller : Send a Disagreement
Activate RequestFulfiller
RequestFulfiller->RequestFulfiller : Record Disagreement

note right of RequestFulfiller
Based on the arguments and data
decide not to change the record
end note
RequestFulfiller->CorrectionRequester : Record Not Changed
Deactivate RequestFulfiller


@enduml


---

// File: input/images-source/use-case-4.plantuml

@startuml
title Abstract Model - Update to a Request For Correction

note left of CorrectionRequester
Notice a problem
end note

CorrectionRequester->RequestFulfiller : 4. Request a Change
Activate RequestFulfiller
RequestFulfiller->RequestFulfiller : Check records

== Time goes by ==
note left of CorrectionRequester
Realize more information is needed
end note
CorrectionRequester->RequestFulfiller : 6. Update the Change Request
RequestFulfiller->RequestFulfiller : Check records

== Further processing ==
@enduml

---

// File: input/images-source/use-case-6.plantuml

@startuml
title Abstract Model - Request For Correction Partially Accepted

note left of CorrectionRequester
Notice a problem
end note
CorrectionRequester->RequestFulfiller : 4. Request a Change
Activate RequestFulfiller
RequestFulfiller->RequestFulfiller : Check records

RequestFulfiller->RequestFulfiller : Decide to accept part of request\nand deny other part of request

RequestFulfiller->CorrectionRequester : 6. Change partially accepted
RequestFulfiller->CorrectionRequester : 7. Accepted part of request completed
Deactivate RequestFulfiller

@enduml


---

