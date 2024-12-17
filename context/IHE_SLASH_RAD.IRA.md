File: repos/IHE_SLASH_RAD.IRA/sushi-config.yaml

# sushi-config.yaml is documented https://fshschool.org/docs/sushi/configuration/
# ───────────────────────────────────────────────────
# the id should be lowercase made up of "ihe." + {domain acronym} + "." + {profile acronym/short-name}
# e.g. ihe.iti.mhds, or ihe.iti.basicaudit
id: ihe.rad.ira
canonical: https://profiles.ihe.net/RAD/IRA
version: 1.0.1-current
releaseLabel: ci-build
#releaseLabel: ballot
#releaseLabel: Trial-Implementation
#date: 2023-10-04
name: IHE_RAD_IRA
title: "Integrated Reporting Applications"
status: active
publisher:
  - name: IHE Radiology Technical Committee
  - url: https://www.ihe.net/ihe_domains/radiology/
  - email: radiology@ihe.net
contact:
  - name: IHE Radiology Technical Committee
    telecom:
      - system: email
        value: radiology@ihe.net
description: The Integrated Reporting Applications (IRA) profile helps applications that are used together during reporting (e.g., image display, report creator, clinical applications, AI tools, etc) to share information using a standard called FHIRcast. Each application can share what it is doing and the data it is creating, referred to as Context and Content, respectively. Other applications are notified so they can then intelligently synchronize their behavior or use the new data.
license:  CC-BY-4.0
#fhirVersion: 4.0.1
fhirVersion: 5.0.0
jurisdiction: 'http://unstats.un.org/unsd/methods/m49/m49.htm#001'
#copyright: IHE http://www.ihe.net/Governance/#Intellectual_Property
copyrightYear: 2023+


parameters:  # see https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
  path-resource:
    - input/resources
    - fsh-generated/resources
    - input/examples
#  path-pages:
#    - input/pagecontent
#    - fsh-generated/includes
  show-inherited-invariants: 'false'
  usage-stats-opt-out: 'false'
  logging: progress
  shownav: 'true'
  active-tables: 'false'
  apply-contact: 'true'
  apply-jurisdiction: 'true'
  apply-publisher: 'true'
  apply-version: 'true'

# resources:
# list every example here with a name, description and that exampleBoolean is true; These are used to populate the artifacts page, and are needed to eliminate build warnings 
# You may delay filling out this section until you approach publication as it is merely a nice to have and eliminates build warnings -- If you do this then you will need above the autoload-resources true


pages:
# itemize here each narrative page. Include assigned section numbers when appropriate
  index.md:
    title: Integrated Reporting Applications (IRA)
    generation: markdown
  volume-1.md:
    title: 1:53 Integrated Reporting Applications (IRA)
    generation: markdown
  rad-146.md:
    title: 2:4.146 Subscribe to Reporting Session [RAD-146]
    generation: markdown
  rad-147.md:
    title: 2:4.147 Connect to Notification Channel [RAD-147]
    generation: markdown
  rad-148.md:
    title: 2:4.148 Open Report Context [RAD-148]
    generation: markdown
  rad-149.md:
    title: 2:4.149 Close Report Context [RAD-149]
    generation: markdown
  rad-150.md:
    title: 2:4.150 Update Report Content [RAD-150]
    generation: markdown
  rad-151.md:
    title: 2:4.151 Select Report Content [RAD-151]
    generation: markdown
  rad-152.md:
    title: 2:4.152 Unsubscribe Session [RAD-152]
    generation: markdown
  rad-153.md:
    title: 2:4.153 Get Current Context [RAD-153]
    generation: markdown
  rad-154.md:
    title: 2:4.154 Distribute Context Event [RAD-154]
    generation: markdown
  rad-155.md:
    title: 2:4.155 Generate SyncError Event [RAD-155]
    generation: markdown
  rad-156.md:
    title: 2:4.156 Notify Error [RAD-156]
    generation: markdown
  example.md:
    title: Introduction to Examples
    generation: markdown
  open_study_for_reporting.md:
    title: Open Report Context
    generation: markdown
  update_study_with_measurement.md:
    title: Update Report Content
    generation: markdown
  select_study_and_observation.md:
    title: Select Report Content
    generation: markdown
  update_report_status.md:
    title: Update Report Status
    generation: markdown
  close_study_after_signoff.md:
    title: Close Report Context
    generation: markdown
  testplan.md:
    title: Test Plan
    generation: markdown
  issues.md:
    title: Significant Changes & Issues
    generation: markdown
  other.md:
    title: Changes to Other IHE Documents
    generation: markdown
  download.md:
    title: Download and Analysis
    generation: markdown

menu:
  IRA Home: index.html
  Volume 1:
    Introduction: volume-1.html
    Actors and Transactions: volume-1.html#1531-ira-actors-transactions-and-content-modules
    Actor Options: volume-1.html#1532-ira-actor-options
    Required Groupings: volume-1.html#1533-ira-required-actor-groupings
    Overview: volume-1.html#1534-ira-overview
    Security Considerations: volume-1.html#1535-ira-security-considerations
    Cross-Profile Considerations: volume-1.html#1536-ira-cross-profile-considerations
  Volume 2:
    Subscribe to Reporting Session [RAD-146]: rad-146.html
    Connect to Notification Channel [RAD-147]: rad-147.html
    Open Report Context [RAD-148]: rad-148.html
    Close Report Context [RAD-149]: rad-149.html
    Update Report Content [RAD-150]: rad-150.html
    Select Report Content [RAD-151]: rad-151.html
    Unsubscribe Session [RAD-152]: rad-152.html
    Get Current Context [RAD-153]: rad-153.html
    Distribute Context Event [RAD-154]: rad-154.html
    Generate SyncError Event [RAD-155]: rad-155.html
    Notify Error [RAD-156]: rad-156.html
  Examples:
    Introduction: example.html
    Open Report Context: open_study_for_reporting.html
    Update Report Content: update_study_with_measurement.html
    Select Report Content: select_study_and_observation.html
    Notify Report Status Change: update_report_status.html
    Close Report Context: close_study_after_signoff.html
  Artifacts: artifacts.html
  Other:    
    Changes to Other IHE Documents: other.html
    Download and Analysis: download.html
    Test Plan: testplan.html


---

// File: input/pagecontent/close_study_after_signoff.md

### Event-name: DiagnosticReport-close

### Trigger Event

Radiologist signed off a report.

### Examples

#### DiagnosticReport-close Example

This example closes a DiagnosticReport anchor context.

```json
{
  "timestamp": "2020-09-07T15:04:43.133Z",
  "id": "4441881",
  "event": {
    "hub.topic": "e62b4411-55f3-431a-94e8-ef4af537511c",
    "hub.event": "DiagnosticReport-close",
    "context.versionId": "efcac43a-ed38-49e4-8d79-73f78290292a",
    "context": [
      {
        "key": "Report",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "40012366",
        }
      }
    ]
  }
}
```

#### DiagnosticReport-close event Example

```json
{
  "timestamp": "2020-09-07T15:04:43.133Z",
  "id": "4441881",
  "event": {
    "hub.topic": "e62b4411-55f3-431a-94e8-ef4af537511c",
    "hub.event": "DiagnosticReport-close",
    "context.versionId": "2685b00c-69b8-4e5d-bdd9-602f45a616a5",
    "context.priorVersionId": "efcac43a-ed38-49e4-8d79-73f78290292a",
    "context": [
      {
        "key": "Report",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "40012366",
        }
      }
    ]
  }
}
```
### Available Context and Content in Hub

| Time Sequence | Event | Session ID | Current Context | Anchor Context |  Contexts Present | Content | Content Selected | Version ID | Prior Version ID | 
|--|--|--|--|--|--|--|--|--|
| 1 | DiagnosticReport-open | e62b4411-55f3-431a-94e8-ef4af537511c | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366<br><br>patient: Patient<br>id: ewUbXT9RWEbSj5wPEdgRaBw3<br>mrn: 185444<br><br>study: ImagingStudy<br>id: 8i7tbu6fby5ftfbku6fniuf<br>study uid: 2.16.124.113543.6003.1154777499.38476.11982.4847614254<br>accnum: 342123458 | none | none | b9574cb0-e9e5-4be1-8957-5fcb51ef33c1 | none |
| 2 | DiagnosticReport-update | e62b4411-55f3-431a-94e8-ef4af537511c | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366<br><br>patient: Patient<br>id: ewUbXT9RWEbSj5wPEdgRaBw3<br>mrn: 185444<br><br>study: ImagingStudy<br>id: 8i7tbu6fby5ftfbku6fniuf<br>study uid: 2.16.124.113543.6003.1154777499.38476.11982.4847614254<br>accnum: 342123458 | study: ImagingStudy<br>id: 3478116342<br>study uid: 2.16.124.113543.6003.1154777499.30276.83661.3632298176<br><br>measurement: Observation<br>id: 435098234<br>code: Simple cyst<br>study ref: 8i7tbu6fby5ftfbku6fniuf<br><br>annotation: ImagingSelection<br>id: 18735123<br>markup: ... | none | efcac43a-ed38-49e4-8d79-73f78290292a | b9574cb0-e9e5-4be1-8957-5fcb51ef33c1 |
| 3 | DiagnosticReport-select | e62b4411-55f3-431a-94e8-ef4af537511c | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366<br><br>patient: Patient<br>id: ewUbXT9RWEbSj5wPEdgRaBw3<br>mrn: 185444<br><br>study: ImagingStudy<br>id: 8i7tbu6fby5ftfbku6fniuf<br>study uid: 2.16.124.113543.6003.1154777499.38476.11982.4847614254<br>accnum: 342123458 | study: ImagingStudy<br>id: 3478116342<br>study uid: 2.16.124.113543.6003.1154777499.30276.83661.3632298176<br><br>measurement: Observation<br>id: 435098234<br>code: Simple cyst<br>study ref: 8i7tbu6fby5ftfbku6fniuf<br><br>annotation: ImagingSelection<br>id: 18735123<br>markup: ... | measurement: Observation<br>id: 435098234<br><br>annotation: ImagingSelection<br>id: 18735123 | ca3b44a1-d40e-44ae-99bb-434c10dfb535 |efcac43a-ed38-49e4-8d79-73f78290292a |
| 4 | DiagnosticReport-update | e62b4411-55f3-431a-94e8-ef4af537511c | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366<br><br>patient: Patient<br>id: ewUbXT9RWEbSj5wPEdgRaBw3<br>mrn: 185444<br><br>study: ImagingStudy<br>id: 8i7tbu6fby5ftfbku6fniuf<br>study uid: 2.16.124.113543.6003.1154777499.38476.11982.4847614254<br>accnum: 342123458 | study: ImagingStudy<br>id: 3478116342<br>study uid: 2.16.124.113543.6003.1154777499.30276.83661.3632298176<br><br>measurement: Observation<br>id: 435098234<br>code: Simple cyst<br>study ref: 8i7tbu6fby5ftfbku6fniuf<br><br>annotation: ImagingSelection<br>id: 18735123<br>markup: ...<br><br>report: DiagnosticReport<br>id: 40012366<br>status: Final | measurement: Observation<br>id: 435098234<br><br>annotation: ImagingSelection<br>id: 18735123 | a7e1a89d-b082-481b-9107-b70ebfba6e95 | ca3b44a1-d40e-44ae-99bb-434c10dfb535 |
| 5 | DiagnosticReport-close | e62b4411-55f3-431a-94e8-ef4af537511c | none | none | none | none | none | 2685b00c-69b8-4e5d-bdd9-602f45a616a5 | a7e1a89d-b082-481b-9107-b70ebfba6e95 |
{: .grid}

---

// File: input/pagecontent/download.md


You can also download:

- [this entire guide](full-ig.zip),
- the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
- the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on [https://github.com/IHE/RAD.IRA](https://github.com/IHE/RAD.IRA).

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}


---

// File: input/pagecontent/index.md


The Integrated Reporting Applications (IRA) profile helps applications that are used together during reporting (e.g., image display, report creator, clinical applications, AI tools, etc.) to share information using a standard called FHIRcast. Each application can share what it is doing and the data it is creating, referred to as Context and Content, respectively. Other applications are notified so they can then intelligently synchronize their behavior or use the new data.

<div markdown="1" class="stu-note">
**IMPORTANT**: IRA is NOT yet recommended for production use.

Profiles released for Trial Implementation by IHE Radiology typically ARE expected to be stable enough for production use; however, this release of IRA is intended for experimental implementation and feedback.

IRA uses FHIR R5 for the resources used in FHIRcast events.

IRA uses FHIRcast 3.0.0 which is currently under development.

Experimental implementation feedback may result in backward incompatible changes to the profile.

Links to FHIRcast throughout this profile will be updated to the final version when the official version is published.

| [Significant Changes, Open and Closed Issues](issues.html) |
{: .grid}

</div>

### Organization of This Guide
This guide is organized into the following sections:

1. Volume 1: Profiles
   1. [Introduction](volume-1.html)
   1. [Actors and Transactions](volume-1.html#1531-ira-actors-transactions-and-content-modules)
   1. [Actor Options](volume-1.html#1532-ira-actor-options)
   1. [Actor Required Groupings](volume-1.html#1533-ira-required-actor-groupings)
   1. [Overview](volume-1.html#1534-ira-overview)
   1. [Security Considerations](volume-1.html#1535-ira-security-considerations)
   1. [Cross Profile Considerations](volume-1.html#1536-ira-cross-profile-considerations)

2. Volume 2: Transaction Detail
   1. [Subscribe to Reporting Session [RAD-146]](rad-146.html)
   1. [Connect to Notification Channel [RAD-147]](rad-147.html)
   1. [Open Report Context [RAD-148]](rad-148.html)
   1. [Close Report Context [RAD-149]](rad-149.html)
   1. [Update Report Content [RAD-150]](rad-150.html)
   1. [Select Report Content [RAD-151]](rad-151.html)
   1. [Unsubscribe Session [RAD-152]](rad-152.html)
   1. [Get Current Context [RAD-153]](rad-153.html)
   1. [Distribute Context Event [RAD-154]](rad-154.html)
   1. [Generate SyncError Event [RAD-155]](rad-155.html)
   1. [Notify Error [RAD-156]](rad-156.html)

3. [Examples](example.html)

4. Other
  - [Changes to Other IHE Documents](other.html)
  - [Download and Analysis](download.html)
  - [Test Plan](testplan.html)

See also the [Table of Contents](toc.html) and the index of [Artifacts](artifacts.html) defined as part of this implementation guide.

### Conformance Expectations

IHE uses the normative words: Shall, Should, and May according to [standards conventions](https://profiles.ihe.net/GeneralIntro/ch-E.html).

#### Must Support

The use of ```mustSupport``` in StructureDefinition profiles is equivalent to the IHE use of **R2** as defined in [Appendix Z](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.10-profiling-conventions-for-constraints-on-fhir).

mustSupport of true - only has a meaning on items that are minimal cardinality of zero (0), and applies only to the source actor populating the data. The source actor shall populate the elements marked with MustSupport, if the concept is supported by the actor, a value exists, and security and consent rules permit. 
The consuming actors should handle these elements being populated or being absent/empty. 
Note that sometimes mustSupport will appear on elements with a minimal cardinality greater than zero (0), this is due to inheritance from a less constrained profile.



---

// File: input/pagecontent/issues.md

## Significant Changes

### Significant Changes From Revision 1.0.0-comment 

This is the initial trial implementation release of the IRA Implementation Guide. It has been updated based on public comments.

## Issues

### Submit an Issue
IHE welcomes [New Issues](https://github.com/IHE/RAD.IRA/issues/new/choose) from the GitHub community. 
For those without GitHub access, issues may be submitted to the [Radiology Public Comment form](https://www.ihe.net/Radiology_Public_Comments/).

As issues are submitted they will be managed on the [IRA GitHub Issues](https://github.com/IHE/RAD.IRA/issues), where discussion and workarounds may be found. These issues, when critical, will be processed using the normal [IHE Change Proposal](https://wiki.ihe.net/index.php/Category:CPs) management and balloting. 
It is important to note that as soon as a Change Proposal is approved, it carries the same weight as a published Implementation Guide (i.e., it is testable at an [IHE Connectathon](https://www.ihe.net/participate/connectathon/) from the time it is approved, even if it will not be integrated until several months later).

### Open Issues

None

### Closed Issues

Q: Are there any other context sharing use cases related to reporting that are not covered in this profile?<br><br>
A: No.<br>
This profile covers the following use cases:
- Two applications context sharing (e.g., between PACS (Image Display) and Reporting System (Report Creator)
- Multiple applications context sharing (e.g., Worklist (Worklist Client) drives PACS (Image Display) and Reporting System (Report Creator), and PACS in turn drives a Specialty App (Evidence Creator))
- Content sharing in additional to context sharing (e.g., share measurement and image references)
- Suspend and Resume
- Error handling from any synchronizing application
- Overread draft report
<br><br>

Q: Should the Evidence Creator be required to support content sharing and update the context with evidence data it generated?<br><br>
A: No.<br>
An Evidence Creator here is a consumer of events. It can be grouped with a Content Creator if it can also support content sharing for the output it generates using update events. An Evidence Creator supports creating evidence data such as measurements, annotations, etc. However, it may not support capturing the evidence using FHIR resources and not able to share them back to the reporting session using Update Request Content [RAD-150].<br><br>

Q: Should [SMART-web-messaging](https://build.fhir.org/ig/HL7/smart-web-messaging/index.html) be included?<br><br>
A: No.<br>
SMART-web-messaging currently is limited to web applications running in the same browser only. If there are demand for this integration, a separate profile can be created so that implementations can document what methods they support.<br><br>

Q: Should this profile specify events other than the `DiagnosticReport-*` events?<br><br>
A: No.<br>
This profile focus on the communication need during a reporting session. Other events such as `ImagingStudy-*` are allowed but they are not defined in this profile. Hence the semantics of how these other events are used are up to the implementations. It is important to note that these other events may interfere the current context maintained in the hub for the reporting session. This is because the Hub will set the current context to the last `[FHIR resource]-open` event sent without a corresponding `[FHIR resource]-close` event. Therefore different events communicating through the same reporting session may unintentionally switch the current context in all connected applications. A separate session may be beneficial although this is out of scope in this profile.<br><br>
Q: Should Evidence Creator be required to support Open Report Context [RAD-148]?<br><br>
A: No.<br>
It is not expected that an Evidence Creator will start a new session and drives other applications by changing report context. Often an Evidence Creator is invoked on demand by an Image Display.<br><br>

Q: Should the Hub be permitted to set/change the current context based on its business logic?<br><br>
A: No.<br>
Current context is fully dictated by `*-open` and `*-close` events, and the Hub is not permitted to originate these events.<br><br>

Q: Should there be a dedicated transaction for report status update and this transaction is required only by the Report Creator?<br><br>
A: No.<br>
Not a separate dedicated transaction because the Report Creator may want to include other updates in the same DiagnosticReport-update event besides status update. This effectively is the existing Update Report Content transaction. So the requirement is stated in the Report Creator actor description. This keeps the transaction general and reusebale while keeping update report status as a profile actor requirement.<br>This also implies other content creators may modify the report status, but this needs to be approached carefully.<br><br>

Q: Should simplified JSON representation of DICOM SR be supported as a payload for content sharing?<br><br>
A: Out of scope for IRA.<br><br>

Q: Should Notify Error [RAD-156] be mandatory for all Subscribers?<br><br>
A: No, it is not mandatory.<br>
Notify Error [RAD-156] is used when a Subscriber initially accepted an event and later returned an error due to processing error. This means technically for a Subscriber that always processes events synchronously, there is no need to support Notify Error. Due to the nature of the expected use cases and the additional complexity in asynchronous processing, not all Subscribers will support it and hence no need to use Notify Error.<br><br>

Q: Should SMART on FHIR application launch be available as a named option?<br><br>
A: No.<br>
IRA is not prescribing a specific application launching mechanism. There are many different mechanisms used in deployment today.<br><br>

Q: Is there a need for the Subscriber to notify the Manager when asynchronous (return `202 Accepted`) processing completed successfully?<br><br>
A: Cannot identify a need for this.<br>
FHIRcast does not specify a method to notify the Hub about successful processing. Error can be communicated using syncerror.<br><br>

Q: Should the Report Creator be required to group with the Report Creator in Interactive Multimedia Report (IMR) profile?<br><br>
A: No.<br>
This grouping is mentioned in [Cross-Profile Considerations](volume-1.html#1536-ira-cross-profile-considerations), but not mandatory.<br><br>

Q: Can a Subscriber return rich error content using OperationOutcome with a 4xx / 5xx response code?<br><br>
A: No.<br>
In FHIRcast, the OperationOutcome is only available in SyncError event in case of an asynchronous response. For synchronous response, it can only return a simple HTTP error status in the response.<br><br>

Q: Should the event include the originating sender?<br><br>
A: Yes, but FHIRcast does not support this, and we do not have time to address this limitation with the FHIRcast working group.<br>
Having this information enables a Subscriber to make decisions on whether it should process the message and how, based on the originating sender.

---

// File: input/pagecontent/open_study_for_reporting.md

### Event-name: DiagnosticReport-open

### Trigger Event
The Application Invoker (e.g., PACS or Worklist Orchestrator) opens a patient's study.

### Examples

#### DiagnosticReport-open Example Request

The following example shows a report being opened that contains a single primary study. Note that the diagnostic report's `imagingStudy` and `subject` attributes have references to the imaging study and patient which are also in the open request.

```text
POST https://hub.example.com/ HTTP/1.1
Host: hub
Authorization: Bearer i8hweunweunweofiwweoijewiwe
Content-Type: application/json
```

```json
{
  "timestamp": "2020-09-07T14:58:45.988Z",
  "id": "0d4c9998",
  "event": {
    "hub.topic": "e62b4411-55f3-431a-94e8-ef4af537511c",
    "hub.event": "DiagnosticReport-open",
    "context": [
      {
        "key": "report",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "40012366",
          "status": "unknown",
          "subject": {
            "reference": "Patient/ewUbXT9RWEbSj5wPEdgRaBw3"
          },
          "imagingStudy": [
            {
              "reference": "ImagingStudy/8i7tbu6fby5ftfbku6fniuf"
            }
          ]
        }
      },
      {
        "key": "patient",
        "resource": {
          "resourceType": "Patient",
          "id": "ewUbXT9RWEbSj5wPEdgRaBw3",
          "identifier": [
            {
              "system": "urn:oid:1.2.840.114350",
              "value": "185444"
            }
          ]
        }
      },
      {
        "key": "study",
        "resource": {
          "resourceType": "ImagingStudy",
          "description": "CHEST XRAY",
          "started": "2010-01-30T23:00:00.000Z",
          "status": "available",
          "id": "8i7tbu6fby5ftfbku6fniuf",
          "identifier": [
            {
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "ACSN"
                  }
                ]
              },
              "value": "342123458"
            },
            {
              "system": "urn:dicom:uid",
              "value": "urn:oid:2.16.124.113543.6003.1154777499.38476.11982.4847614254"
            }
          ],
          "subject": {
            "reference": "Patient/ewUbXT9RWEbSj5wPEdgRaBw3"
          }
        }
      }
    ]
  }
}
```

#### DiagnosticReport-open Event Example

The event distributed by the Hub includes a context version in the `context.versionId` event attribute which will be used by subscribers to make subsequent [`DiagnosticReport-update`](https://build.fhir.org/ig/HL7/fhircast-docs/3-6-3-diagnosticreport-update.html) requests.

```json
{
  "timestamp": "2020-09-07T14:58:45.988Z",
  "id": "0d4c9998",
  "event": {
    "hub.topic": "e62b4411-55f3-431a-94e8-ef4af537511c",
    "hub.event": "DiagnosticReport-open",
    "context.versionId": "b9574cb0-e9e5-4be1-8957-5fcb51ef33c1",
    "context": [
      {
        "key": "report",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "40012366",
          "status": "unknown",
          "subject": {
            "reference": "Patient/ewUbXT9RWEbSj5wPEdgRaBw3"
          },
          "imagingStudy": [
            {
              "reference": "ImagingStudy/8i7tbu6fby5ftfbku6fniuf"
            }
          ]
        }
      },
      {
        "key": "patient",
        "resource": {
          "resourceType": "Patient",
          "id": "ewUbXT9RWEbSj5wPEdgRaBw3",
          "identifier": [
            {
              "system": "urn:oid:1.2.840.114350",
              "value": "185444"
            }
          ]
        }
      },
      {
        "key": "study",
        "resource": {
          "resourceType": "ImagingStudy",
          "description": "CHEST XRAY",
          "started": "2010-01-30T23:00:00.000Z",
          "status": "available",
          "id": "8i7tbu6fby5ftfbku6fniuf",
          "identifier": [
            {
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "ACSN"
                  }
                ]
              },
              "value": "342123458"
            },
            {
              "system": "urn:dicom:uid",
              "value": "urn:oid:2.16.124.113543.6003.1154777499.38476.11982.4847614254"
            }
          ],
          "subject": {
            "reference": "Patient/ewUbXT9RWEbSj5wPEdgRaBw3"
          }
        }
      }
    ]
  }
}
```

### Available Context and Content in Hub

| Time Sequence | Event | Session ID | Current Context | Anchor Context |  Contexts Present | Content | Content Selected | Version ID | Prior Version ID | 
|--|--|--|--|--|--|--|--|--|
| 1 | DiagnosticReport-open | e62b4411-55f3-431a-94e8-ef4af537511c | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366<br><br>patient: Patient<br>id: ewUbXT9RWEbSj5wPEdgRaBw3<br>mrn: 185444<br><br>study: ImagingStudy<br>id: 8i7tbu6fby5ftfbku6fniuf<br>study uid: 2.16.124.113543.6003.1154777499.38476.11982.4847614254<br>accnum: 342123458 | none | none | b9574cb0-e9e5-4be1-8957-5fcb51ef33c1 | none |
{: .grid}

---

// File: input/pagecontent/other.md

<div markdown="1" class="stu-note">
This section modifies other IHE profiles or the General Introduction appendices and is not a part of the Integrated Reporting Applications (IRA) Profile. The content here will be incorporated into the target narrative at a future time, usually when IRA Profile goes normative.
</div>

## IHE Technical Frameworks General Introduction Appendix A: Actors

|------------------------------------------------|
| Editor, add the following new or modified actors to the [IHE Technical Frameworks General Introduction Appendix A](https://profiles.ihe.net/GeneralIntro/ch-A.html): |
{:.grid .bg-info}

| Actor                         | Definition                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------------|
| Hub | Manages event flows between Subscribers in a session and maintains the current context and transaction of content sharing in each session. |
| Worklist Client | Provides a reporting worklist to the user. |
| Stateless Evidence Creator | An Evidence Creator that is not responsible for maintaining its application state when its operations are suspended and resumed. |
{:.grid .table-striped}



## IHE Technical Frameworks General Introduction Appendix B: Transactions

|------------------------------------------------|
| Editor, add the following new or modified transactions to the [IHE Technical Frameworks General Introduction Appendix B](https://profiles.ihe.net/GeneralIntro/ch-B.html): |
{:.grid .bg-info}


| Transaction                    | Definition                                                                              |
| ------------------------------ | --------------------------------------------------------------------------------------- |
| Subscribe to Reporting Session \[RAD-146\] |  Subscribe to receive events associated with a reporting session. A reporting session may include reporting on multiple reports, each of which has its own context. |
| Connect to Notification Channel \[RAD-147\] | Connect to a notification channel to receive synchronization events. |
| Open Report Context \[RAD-148\] | Open a report context. Report contexts are opened within an existing reporting session. |
| Close Report Context \[RAD-149\] | Terminate a report context. All synchronizing applications are expected to close their local copy of this context. |
| Update Report Content \[RAD-150\] | Add, change or remove contents in a report context. |
| Select Report Content \[RAD-151\] | Identify specific report contents to other subscribers for potential synchronization. |
| Unsubscribe Session \[RAD-152\] | Unsubscribe from a FHIRcast session. |
| Get Current Context \[RAD-153\] | Retrieve the current context for a given session and all associated contents in that context. |
| Distribute Context Event \[RAD-154\] | Distribute notification events to subscribers. This allows a Subscriber to synchronize to changes in the reporting session initiated by other Subscribers. |
| Generate SyncError Event \[RAD-155\] | Distribute notification events to subscribers about synchronization errors detected by the Manager. |
| Notify Error \[RAD-156\] | Send error notifications when a Subscriber initially accepted an event and later failed to process it. |
{:.grid .table-striped}

## IHE Technical Frameworks General Introduction Appendix D: Glossary

|------------------------------------------------|
| Editor, add the following new or modified terms to the [IHE Technical Frameworks General Introduction Appendix D](https://profiles.ihe.net/GeneralIntro/ch-D.html): |
{:.grid .bg-info}

| Term                         | Definition                                                    | Acronyms/Abbreviations | Synonyms    |
| ---------------------------- | --------------------------------------------------------------| -----------------------| ------------|
| none |  |
{:.grid .table-striped}





---

// File: input/pagecontent/rad-146.md

### 2:4.146.1 Scope

This transaction is used to subscribe to receive events associated with a reporting session. A reporting session may include reporting on multiple reports, each of which has its own context.

### 2:4.146.2 Actors Roles

The roles in this transaction are defined in the following table and may be played by the actors shown here:

**Table 2:4.146.2-1: Actor Roles**

| Role | Description | Actor(s) |
|------|-------------|----------|
| Subscriber | Requests a subscription to a reporting session | Image Display<br>Report Creator<br>Worklist Client<br>Evidence Creator<br>Stateless Evidence Creator<br>Watcher |
| Manager | Receives and manages subscription requests | Hub |
{: .grid}

### 2:4.146.3 Referenced Standards

**FHIRcast**: [Subscribing to Events](https://build.fhir.org/ig/HL7/fhircast-docs/2-4-Subscribing.html)

### 2:4.146.4 Messages

<div>
{%include rad-146-seq.svg%}
</div>

<div style="clear: left"/>

**Figure 2:4.146.4-1: Interaction Diagram**

#### 2:4.146.4.1 Subscription Request Message

The Subscriber sends a reporting session subscription request to the Manager.

The Subscriber shall support sending such messages to more than one Manager. The Manager shall support handling such messages from more than one Subscriber. 

##### 2:4.146.4.1.1 Trigger Events

A Subscriber uses this transaction when:
- It wants to start a new reporting session
- It wants to join an existing reporting session
- It wants to change the event filter for its existing subscription
- It wants to renew its existing subscription

##### 2:4.146.4.1.2 Message Semantics

This message is a [FHIRcast Subscription Request](https://build.fhir.org/ig/HL7/fhircast-docs/2-4-Subscribing.html#subscription-request). The Subscriber is the FHIRcast Subscriber. The Manager is the FHIRcast Hub.

The request shall have the payload with the parameters in the following table:

**Table 2:4.146.4.1.2-1: Subscription Request Parameters**

| Field                 | Optionality | Type     | Description |
| ----------------------| ----------- | -------- | ------------|
|`hub.channel.type`     | Required    | *string* | The channel type of `websocket`.|
|`hub.mode`             | Required    | *string* | The literal string `subscribe`.|
|`hub.topic`           | Required    | *string* | The identifier of the reporting session that the Subscriber wishes to subscribe to.| 
|`hub.events`           | Required*    | *string* | Shall include these five events, comma-separated: <br>`diagnosticreport-open`,<br>`diagnosticreport-close`,<br>`diagnosticreport-update`, <br>`diagnosticreport-select`,<br>`syncerror`<br><br>The Subscriber may include other events.|
|`hub.lease_seconds`    | Optional    | *number* | The positive integer indicating the number of seconds that the Subscriber wants the subscription to be active. |
|`hub.channel.endpoint` | Conditional | *string* | The WSS URL identifying an existing WebSocket subscription.<br><br>Required if the Subscriber wants to update or renew an existing subscription.|
 |`subscriber.name`      | Required*    | *string* | An explicit identifier of the Subscriber which is likely to be unique in a reporting session.|
{: .grid}

> Note: Rows with '*' in the Optionality column have constraints different from baseline FHIRcast Subscription Request.

##### 2:4.146.4.1.3 Expected Actions

The Manager shall receive and validate the message.

The Manager shall create the reporting session if the session ID specified in `hub.topic` does not exist.

The Manager shall add the Subscriber and its subscribed events for the session.

The Manager shall accept any events (including custom events not defined in FHIRcast [Event Library](https://build.fhir.org/ig/HL7/fhircast-docs/3_Events.html)) specified in the `hub.events` attributes.

If the Subscriber already exists in the session, then the Manager shall:
- Update the list of events subscribed by the Subscriber
- Update the expiry of the Subscriber's websocket connection

#### 2:4.146.4.2 Subscription Response Message

The Manager sends a response message describing the request outcome to the Subscriber.

##### 2:4.146.4.2.1 Trigger Events

The Manager receives a Subscription Request message.

##### 2:4.146.4.2.2 Message Semantics

This message is a [FHIRcast Subscription Response](https://build.fhir.org/ig/HL7/fhircast-docs/2-4-Subscribing.html#subscription-response). The Subscriber is the FHIRcast Subscriber. The Manager is the FHIRcast Hub.

The Manager shall return `400` Bad Request error if:
- `hub.channel.type` is not `websocket`
- `hub.topic` is empty
- `hub.mode` is `subscribe` and there is no `hub.events` or its value is empty
- `subscriber.name` is empty

The Manager may return other applicable HTTP error status codes.

##### 2:4.146.4.2.3 Expected Actions

If the HTTP response code is `202` Accepted, the Subscriber shall extract the websocket WSS URL from `hub.channel.endpoint`.

The Subscriber may use the `hub.channel.endpoint` in a subsequent Connect to Notification Channel [RAD-147] transaction and subsequent subscription update, renewal or Unsubscribe Session [RAD-152] requests.

If the HTTP response code is 4xx or 5xx, then the Subscriber may adjust the request and retry.

### 2:4.146.5 Security Considerations

See [IRA Security Considerations](volume-1.html#1535-ira-security-considerations).

The Subscriber which is a synchronizing application should authenticate and authorize the starting application before it accepts the provided `hub.topic` and `hub.url` and sends this request.

Local policy should consider what users and systems have permissions to subscribe to events and configure appropriately. More advanced implementations of the Manager might have logic to identify Subscribers that are requesting unnecessarily broad set of events.

#### 2:4.146.5.1Security Audit Considerations

Managers that support the ATNA Profile shall audit this transaction.

This transaction corresponds to a Query Information ATNA Trigger Event.


---

// File: input/pagecontent/rad-147.md

### 2:4.147.1 Scope

This transaction is used to connect to a notification channel to receive synchronization events.

### 2:4.147.2 Actors Roles

**Table 2:4.147.2-1: Actor Roles**

| Role | Description | Actor(s) |
|------|-------------|----------|
| Subscriber | Initiate a websocket notification channel request | Image Display<br>Report Creator<br>Worklist Client<br>Evidence Creator<br>Stateless Evidence Creator<br>Watcher |
| Manager | Establish a websocket notification channel and manage connection | Hub |
{: .grid}

### 2:4.147.3 Referenced Standards

**FHIRcast**: [Subscribing to Events](https://build.fhir.org/ig/HL7/fhircast-docs/2-4-Subscribing.html)

**Websocket**: [IETF RFC 6455](https://www.rfc-editor.org/rfc/rfc6455)

### 2:4.147.4 Messages

<div>
{%include rad-147-seq.svg%}
</div>

<div style="clear: left"/>

**Figure 2:4.147.4-1: Interaction Diagram**

#### 2:4.147.4.1 Subscription Request Message
The Subscriber sends a websocket connection request to the Manager.

The Subscriber shall support sending such messages to more than one Manager. The Manager shall support handling such messages from more than one Subscriber. 

##### 2:4.147.4.1.1 Trigger Events

The Subscriber receives a successful Subscribe to Reporting Session [RAD-146] response.

##### 2:4.147.4.1.2 Message Semantics

This message is a websocket connection request. The Subscriber is the Client. The Manager is the Server.

The Subscriber shall send a websocket request to the `hub.channel.endpoint` websocket WSS URL received from the successful Subscribe to Reporting Session [RAD-146] response. 

##### 2:4.147.4.1.3 Expected Actions

The Manager shall process the request.

The Manager shall return an error if the websocket identifier in the WSS URL does not exist.

The Manager shall keep the websocket connection open for use as a notification channel.

The Manager shall use the opened websocket connection when sending subsequent events to the Subscriber.

#### 2:4.147.4.2 Subscription Response Message

##### 2:4.147.4.2.1 Trigger Events

The Manager processes the websocket connection request.

##### 2:4.147.4.2.2 Message Semantics

This is a [FHIRcast Subscription Confirmation](https://build.fhir.org/ig/HL7/fhircast-docs/2-4-Subscribing.html#subscription-confirmation). The Subscriber is the FHIRcast Subscriber. The Manager is the FHIRcast Hub.

##### 2:3.147.4.2.3 Expected Actions

The Subscriber will find the duration of the websocket lease in the `hub.lease_seconds` attribute of this message. When the lease expires, the Manager may drop the connection. It is the responsibility of the Subscriber to renew the subscription as needed before it expires using Subscribe to Reporting Session [RAD-146].

### 2:4.147.5 Security Considerations

See [IRA Security Considerations](volume-1.html#1535-ira-security-considerations).

#### 2:4.147.5.1 Security Audit Considerations

This transaction is not associated with an ATNA Trigger Event.


---

// File: input/pagecontent/rad-148.md

### 2:4.148.1 Scope

This transaction is used to open a report context. Report contexts are opened within an existing reporting session.

### 2:4.148.2 Actors Roles

**Table 2:4.148.2-1: Actor Roles**

| Role | Description | Actor(s) |
|------|-------------|----------|
| Sender | Opens a report context | Image Display<br>Report Creator<br>Worklist Client |
| Manager | Manages opened context | Hub |
{: .grid}

### 2:4.148.3 Referenced Standards

**FHIRcast**: [Request Context Change](https://build.fhir.org/ig/HL7/fhircast-docs/2-6-RequestContextChange.html#request-context-change)

**FHIRcast**: [DiagnosticReport open Event](https://build.fhir.org/ig/HL7/fhircast-docs/3-6-1-DiagnosticReport-open.html)

**FHIR R5**: [DiagnosticReport resource](https://hl7.org/fhir/R5/diagnosticreport.html)

**FHIR R5**: [Patient resource](https://hl7.org/fhir/R5/patient.html)

**FHIR R5**: [ImagingStudy resource](https://hl7.org/fhir/R5/imagingstudy.html)

### 2:4.148.4 Messages

<div>
{%include rad-148-seq.svg%}
</div>

<div style="clear: left"/>

**Figure 2:4.148.4-1: Interaction Diagram**

#### 2:4.148.4.1 Open Report Context Request Message
The Sender sends an event to the Manager to open a report context.

The Sender shall support sending such messages to more than one Manager. The Manager shall support handling such messages from more than one Sender. 

##### 2:4.148.4.1.1 Trigger Events

A Sender uses this transaction when:
- It begins work on a new report, and opens a new context to synchronize that work with other Subscribers.
- It resume work on a previously opened report that has not yet been completed, and re-opens the previous context to synchronize that work with other Subscribers.

##### 2:4.148.4.1.2 Message Semantics

This message is a [FHIRcast Request Context Change](https://build.fhir.org/ig/HL7/fhircast-docs/2-6-RequestContextChange.html#request-context-change-body) request. The Sender is the FHIRcast Subscriber. The Manager is the FHIRcast Hub.

The `event.context` shall conform to [DiagnosticReport open Event](https://build.fhir.org/ig/HL7/fhircast-docs/3-6-1-DiagnosticReport-open.html).

In addition, the contexts in the `event.context` shall conform to the Table 2:4.148.4.1.2-1.

**Table 2:4.148.4.1.2-1: Context Requirements**

| Key | Optionality | Context Requirements |
|-----|-------------|----------------------|
| `report`| Required | Conform to the [DiagnosticReportContext](StructureDefinition-diagnosticreportcontext.html) resource |
| `patient` | Required | Conform to the [PatientContext](StructureDefinition-patientcontext.html) resource |
| `study` | Required\* | Conform to the [ImagingStudyContext](StructureDefinition-imagingstudycontext.html) resource |
{:.grid}
> Note: Rows with '*' in the Optionality column have constraints different from baseline FHIRcast DiagnosticReport open event.

If the Sender resumes a previously opened report, then the Sender shall reuse the previous `report`, `patient` and `study` contexts, but shall assign a new `event.id`.

If the Sender is retrying this context change request due to not receiving a response from the Manager for a prior request, then the Sender shall use the same `event.id`. If the Manager received the original request, this allows it to detect that it is a duplicate message.

If the Sender retries the request due to an error response from the Manager, then the Sender shall assign a new `event.id` to indicate that it is a new request.

##### 2:4.148.4.1.3 Expected Actions

The Manager shall receive and validate the request. See Section 2:4.148.4.2.2 for error conditions.

Per FHIRcast, this `report` context will become the current context in this reporting session.

If the `report`, `patient` and `study` contexts in the request match an existing report context which has not been closed, then the Manager shall update that report context and set it to be the current context.

#### 2:4.148.4.2 Open Report Context Response Message

##### 2:4.148.4.2.1 Trigger Events

The Manager finishes processing the Open Report Context request.

##### 2:4.148.4.2.2 Message Semantics

This message is a [FHIRcast Request Context Change](https://build.fhir.org/ig/HL7/fhircast-docs/2-6-RequestContextChange.html#request-context-change-body) response. The Sender is the FHIRcast Subscriber. The Manager is the FHIRcast Hub.

The Manager shall return `400` Bad Request error if:
- If `timestamp`, `id` or `event` are not set
- If `event.context` does not include `report`, `patient` and `study`
- if `event`.`hub.topic` is not a known session

The Manager may return other applicable HTTP error status codes.

##### 2:4.148.4.2.3 Expected Actions

If the response is an error, then the Sender may consider retrying the request.

### 2:4.148.5 Security Considerations

See [IRA Security Considerations](volume-1.html#1535-ira-security-considerations).

Local policy should consider what users and systems have permissions to open a report context and configure appropriately. 

#### 2:4.148.5.1 Security Audit Considerations

This transaction is not associated with an ATNA Trigger Event.


---

// File: input/pagecontent/rad-149.md

### 2:4.149.1 Scope

This transaction is used to terminate a report context. All synchronizing applications are expected to close their local copy of this context.

> Note: This closes the report context used for synchronization / sharing. The report instance being worked on may or may not be complete.

### 2:4.149.2 Actors Roles

**Table 2:4.149.2-1: Actor Roles**

| Role | Description | Actor(s) |
|------|-------------|----------|
| Sender | Closes a report context | Report Creator |
| Manager | Closes report context | Hub |
{: .grid}

### 2:4.149.3 Referenced Standards

**FHIRcast**: [Request Context Change](https://build.fhir.org/ig/HL7/fhircast-docs/2-6-RequestContextChange.html#request-context-change)

**FHIRcast**: [DiagnosticReport close Event](https://build.fhir.org/ig/HL7/fhircast-docs/3-6-2-DiagnosticReport-close.html)

**FHIR R5**: [DiagnosticReport resource](https://hl7.org/fhir/R5/diagnosticreport.html)

### 2:3.149.4 Messages

<div>
{%include rad-149-seq.svg%}
</div>

<div style="clear: left"/>

**Figure 2:4.149.4-1: Interaction Diagram**

#### 2:4.149.4.1 Close Report Context Request Message
The Sender sends an event to the Manager to terminate an existing report context.

The Sender shall support sending such messages to more than one Manager. The Manager shall support handling such messages from more than one Sender. 

##### 2:4.149.4.1.1 Trigger Events

The Sender determines no further synchronization required for this report context. The report instance being worked on may or may not be complete.

##### 2:4.149.4.1.2 Message Semantics

This message is a [FHIRcast Request Context Change](https://build.fhir.org/ig/HL7/fhircast-docs/2-6-RequestContextChange.html#request-context-change-body) request. The Sender is the FHIRcast Subscriber. The Manager is the FHIRcast Hub.

The `event.context` shall conform to [DiagnosticReport close Event](https://build.fhir.org/ig/HL7/fhircast-docs/3-6-2-DiagnosticReport-close.html).

If the Sender is retrying this context change request due to not receiving a response from the Manager for a prior request, then the Sender shall use the same `event.id`. If the Manager received the original request, this allows it to detect that it is a duplicate message.

If the Sender retries the request due to an error response from the Manager, then the Sender shall assign a new `event.id` to indicate that it is a new request.

##### 2:4.149.4.1.3 Expected Actions

The Manager shall receive and validate the request. See 2:3.149.4.2.2 for error conditions.

If the Manager accepts the request, then per FHIRcast, the Manager will remove from memory the `report` context of the received `DiagnosticReport-close` event, as well as all associated context and content.

Per FHIRcast, the Manager shall set the `current context` to *empty*.

#### 2:4.149.4.2 Close Report Context Response Message

##### 2:4.149.4.2.1 Trigger Events

The Manager finishes processing the Close Report Context request.

##### 2:4.149.4.2.2 Message Semantics

This message is a [FHIRcast Request Context Change](https://build.fhir.org/ig/HL7/fhircast-docs/2-6-RequestContextChange.html#request-context-change-body) response. The Sender is the FHIRcast Subscriber. The Manager is the FHIRcast Hub.

The Manager shall return `400` Bad Request error if:
- If `timestamp`, `id` or `event` are not set
- If `event.context` does not include `report`
- If the `report` context does not include `resource.id`
- if `event`.`hub.topic` is not a known session

The Manager may return other applicable HTTP error status codes.

##### 2:4.149.4.2.3 Expected Actions

If the response is an error, then the Sender may consider retrying the request.

### 2:4.149.5 Security Considerations

See [IRA Security Considerations](volume-1.html#1535-ira-security-considerations).

Local policy should consider what users and systems have permissions to close a report context and configure appropriately. 

#### 2:4.149.5.1 Security Audit Considerations

This transaction is not associated with an ATNA Trigger Event.


---

// File: input/pagecontent/rad-150.md

### 2:4.150.1 Scope

This transaction is used to add, change or remove contents in a report context.

### 2:4.150.2 Actors Roles

**Table 2:4.150.2-1: Actor Roles**

| Role | Description | Actor(s) |
|------|-------------|----------|
| Sender | Adds, changes or removes report contents | Content Creator |
| Manager | Updates the report context | Hub |
{: .grid}

### 2:4.150.3 Referenced Standards

**FHIRcast**: [Content Sharing](https://build.fhir.org/ig/HL7/fhircast-docs/2-10-ContentSharing.html)

**FHIRcast**: [DiagnosticReport update Event](https://build.fhir.org/ig/HL7/fhircast-docs/3-6-3-DiagnosticReport-update.html)

**FHIR R5**: [DiagnosticReport resource](https://hl7.org/fhir/R5/diagnosticreport.html)

### 2:4.150.4 Messages

<div>
{%include rad-150-seq.svg%}
</div>

<div style="clear: left"/>

**Figure 2:4.150.4-1: Interaction Diagram**

#### 2:4.150.4.1 Update Report Content Request Message
The Sender sends an event to the Manager to add, change or remove content relevant to an existing report context.

The Sender shall support sending such messages to more than one Manager. The Manager shall support handling such messages from more than one Sender. 

##### 2:4.150.4.1.1 Trigger Events

The Sender determines new content should be added, existing content should be changed, or existing content should be removed from a report context.

##### 2:4.150.4.1.2 Message Semantics

This message is a [FHIRcast Request Context Change](https://build.fhir.org/ig/HL7/fhircast-docs/2-6-RequestContextChange.html#request-context-change-body) request. The Sender is the FHIRcast Subscriber. The Manager is the FHIRcast Hub.

The `event.context` shall conform to [DiagnosticReport update Event](https://build.fhir.org/ig/HL7/fhircast-docs/3-6-3-DiagnosticReport-update.html).

The `event`.`context.versionId` shall be the newest version ID of the report context known to the Sender.

The Sender should include referenced resources (with applicable content changes) as inline [contained resources](https://www.hl7.org/fhir/references.html#contained) if possible. However, in some situations, it is beneficial to include other resources by reference instead of by value. In this case, the Sender shall specify the `entry.fullurl` with the uri value that the full content can be retrieved.

> Note: Using contained resources is preferred as most resources in the event are transient. Also other Subscribers that receive the events may or may not have permission to access referenced resources that are not inline.

If the Sender is retrying this context change request due to not receiving a response from the Manager for a prior request, then the Sender shall use the same `event.id`. If the Manager received the original request, this allows it to detect that it is a duplicate message.

If the Sender retries the request due to an error response from the Manager, then the Sender shall assign a new `event.id` to indicate that it is a new request.

##### 2:4.150.4.1.3 Expected Actions

The Manager shall receive and validate the request. See Section 2:4.150.4.2.2 for error conditions.

Per FHIRcast,
- If the `context.versionId` in the request does not match the version ID of the `report` anchor context, then the Manager will not apply any updates.
- The Manager will apply the set of updates in the request *atomically*. i.e. The Manager will revise the shared FHIR resources. "Atomically" means that the Manager is required to apply all updates in this request to the corresponding report context, or none of the updates.
- If the Manager successfully applies all updates in the request, it will assign a new version ID to the `report` anchor context.

#### 2:4.150.4.2 Update Report Content Response Message

##### 2:4.150.4.2.1 Trigger Events

The Manager finishes processing the Update Report Content request.

##### 2:3.150.4.2.2 Message Semantics

This message is a [FHIRcast Request Context Change](https://build.fhir.org/ig/HL7/fhircast-docs/2-6-RequestContextChange.html#request-context-change-body) response. The Sender is the FHIRcast Subscriber. The Manager is the FHIRcast Hub.

The Manager shall return `400` Bad Request error:
- if `timestamp`, `id` or `event` are not set
- if `event.context` does not include `report` and `updates`
- if `event`.`hub.topic` is not a known session
- if `context.versionId` does not match the latest version ID of the `report` anchor context
- if `updates` context key includes an entry to delete the `patient` context or update the patient ID in the resource `identifier`
- if `updates` context key includes an entry to delete the `study` context or update the study instance UID or accession number in the resource `identifier`

> Note: If the report context is opened with incorrect patient and/or study, the Subscriber should close the report context and open a new report context with the correct patient and/or study context, rather than using a DiagnosticReport-update event to correct the context.

If the Manager rejected the Update Report Content request, then the Manager shall return a 4xx or 5xx HTTP error response code.

The Manager may return other applicable HTTP error status codes.

##### 2:4.150.4.2.3 Expected Actions

If the response is an error, then the Sender may consider retrying the request.

### 2:4.150.5 Security Considerations

See [IRA Security Considerations](volume-1.html#1535-ira-security-considerations).

Local policy should consider what users and systems have permissions to update report content and configure appropriately. 

#### 2:4.150.5.1 Security Audit Considerations

This transaction is not associated with an ATNA Trigger Event.


---

// File: input/pagecontent/rad-151.md

### 2:4.151.1 Scope

This transaction is used to identify specific report contents to other subscribers for potential synchronization.

### 2:4.151.2 Actors Roles

**Table 2:4.151.2-1: Actor Roles**

| Role | Description | Actor(s) |
|------|-------------|----------|
| Sender | Selects report content(s) | Content Creator |
| Manager | Manages the selection state of contents | Hub |
{: .grid}

### 2:4.151.3 Referenced Standards

**FHIRcast**: [Content Sharing](https://build.fhir.org/ig/HL7/fhircast-docs/2-10-ContentSharing.html)

**FHIRcast**: [DiagnosticReport select Event](https://build.fhir.org/ig/HL7/fhircast-docs/3-6-4-DiagnosticReport-select.html)

**FHIR R5**: [DiagnosticReport resource](https://hl7.org/fhir/R5/diagnosticreport.html)

### 2:4.151.4 Messages

<div>
{%include rad-151-seq.svg%}
</div>

<div style="clear: left"/>

**Figure 2:4.151.4-1: Interaction Diagram**

#### 2:4.151.4.1 Select Report Content Request Message
The Sender sends an event to the Manager to indicate some report contents are selected.

The Sender shall support sending such messages to more than one Manager. The Manager shall support handling such messages from more than one Sender. 

##### 2:4.151.4.1.1 Trigger Events

The Sender determines the selection state of some report contents should be synchronized with other Subscribers.

The Sender determines that the selected content are no longer required and reset the selection.

> Note: Prior selected content are automatically reset by the selection of new content. Reset is used when the current selected content should be unselected without selecting new contents. See [DiagnosticReport select Event Workflow](https://build.fhir.org/ig/HL7/fhircast-docs/3-6-4-DiagnosticReport-select.html#workflow) for details.

Selections are initiated manually by a user, or automatically for reset only.

##### 2:4.151.4.1.2 Message Semantics

This message is a [FHIRcast Request Context Change](https://build.fhir.org/ig/HL7/fhircast-docs/2-6-RequestContextChange.html#request-context-change-body) request. The Sender is the FHIRcast Subscriber. The Manager is the FHIRcast Hub.

The `event.context` shall conform to [DiagnosticReport select Event](https://build.fhir.org/ig/HL7/fhircast-docs/3-6-4-DiagnosticReport-select.html).

The Sender shall include all selected resources in the event, including resources that were selected previously which should remain selected.

> Note: This is necessary because there is an implicit unselect of any previously selected resources for each new `DiagnosticReport-select` event received. See [DiagnosticReport select Event Workflow](https://build.fhir.org/ig/HL7/fhircast-docs/3-6-4-DiagnosticReport-select.html#workflow) for details.

If the Sender is retrying this context change request due to not receiving a response from the Manager for a prior request, then the Sender shall use the same `event.id`. If the Manager received the original request, this allows it to detect that it is a duplicate message.

If the Sender retries the request due to an error response from the Manager, then the Sender shall assign a new `event.id` to indicate that it is a new request.

##### 2:4.151.4.1.3 Expected Actions

The Manager shall receive and validate the request. See Section 2:4.151.4.2.2 for error conditions.

The Manager shall ignore any selected resources in the request that are not known based on any previous `DiagnosticReport-open` or `DiagnosticReport-update` events.

> Note: The Manager should continue to process the request and should not return an error due to unknown selected resources.

#### 2:4.151.4.2 Select Report Content Response Message

##### 2:4.151.4.2.1 Trigger Events

The Manager finishes processing the Select Report Content request.

##### 2:4.151.4.2.2 Message Semantics

This message is a [FHIRcast Request Context Change](https://build.fhir.org/ig/HL7/fhircast-docs/2-6-RequestContextChange.html#request-context-change-body) response. The Sender is the FHIRcast Subscriber. The Manager is the FHIRcast Hub.

If the Manager ignore unknown resources, then it shall return `206` Partial Content.

The Manager shall return `400` Bad Request error:
- if `timestamp`, `id` or `event` are not set
- if `event.context` does not include `report` and `select`
- if `event`.`hub.topic` is not a known session

The Manager may return other applicable HTTP error status codes.

##### 2:4.151.4.2.3 Expected Actions

If the response is an error, then the Sender may consider retrying the request.

### 2:4.151.5 Security Considerations

See [IRA Security Considerations](volume-1.html#1535-ira-security-considerations).

Local policy should consider what users and systems have permissions to select report content and configure appropriately. 

#### 2:4.151.5.1 Security Audit Considerations

This transaction is not associated with an ATNA Trigger Event.


---

// File: input/pagecontent/rad-152.md

### 2:4.152.1 Scope

This transaction is used to unsubscribe from a FHIRcast session.

### 2:4.152.2 Actors Roles

The roles in this transaction are defined in the following table and may be played by the actors shown here:

**Table 2:4.152.2-1: Actor Roles**

| Role | Description | Actor(s) |
|------|-------------|----------|
| Subscriber | Unsubscribes from a session | Image Display<br>Report Creator<br>Worklist Client<br>Evidence Creator<br>Stateless Evidence Creator<br>Watcher |
| Manager | Removes subscriber subscription | Hub |
{: .grid}

### 2:3.152.3 Referenced Standards

**FHIRcast**: [Unsubscribe](https://build.fhir.org/ig/HL7/fhircast-docs/2-4-Subscribing.html#unsubscribe)

### 2:3.152.4 Messages

<div>
{%include rad-152-seq.svg%}
</div>

<div style="clear: left"/>

**Figure 2:4.152.4-1: Interaction Diagram**

#### 2:3.47.4.1 Unsubscribe Session Request Message

The Subscriber sends a unsubscribe request to the Manager.

The Subscriber shall support sending such messages to more than one Manager. The Manager shall support handling such messages from more than one Subscriber. 

##### 2:4.152.4.1.1 Trigger Events

The Subscriber no longer wants to receive event notification on a given session from Manager.

##### 2:4.152.4.1.2 Message Semantics

This message is a [FHIRcast Unsubscribe Request](https://build.fhir.org/ig/HL7/fhircast-docs/2-4-Subscribing.html#unsubscribe). The Subscriber is the FHIRcast Subscriber. The Manager is the FHIRcast Hub.

##### 2:4.152.4.1.3 Expected Actions

The Manager shall receive and validate the message. See Section 2:4.152.4.2.2 for error conditions.

Per FHIRcast, the Manager will remove the Subscriber from all event subscriptions in this session.

The Manager shall terminate the websocket connection and delete the websocket identifier. The Manager shall not reuse the websocket identifier for other future subscriptions.

#### 2:4.152.4.2 Unsubscribe Session Response Message

The Manager sends a response message describing the message outcome to the Subscriber.

##### 2:4.152.4.2.1 Trigger Events

The Manager receives a Unsubscribe Session Request message.

##### 2:4.152.4.2.2 Message Semantics

This message is a [FHIRcast Unsubscribe Response](https://build.fhir.org/ig/HL7/fhircast-docs/2-4-Subscribing.html#unsubscribe). The Subscriber is the FHIRcast Subscriber. The Manager is the FHIRcast Hub.

If the Manager successfully processed the request, the Manager shall respond with an HTTP 202 “Accepted” response.

The Manager shall return `400` Bad Request error if:
- the `hub.channel.type` is not `websocket`
- the `hub.topic` is empty
- the `hub.mode` is `unsubscribe` and there is no `hub.channel.endpoint` or its value is empty
- the `hub.channel.endpoint` does not match the websocket associated to the Subscriber

The Manager may return other applicable HTTP error status codes.

The HTTP body of the response shall consist of a JSON object containing an element name `hub.channel.endpoint` and a value for the websocket URL that is associated to the Subscriber.

##### 2:4.152.4.2.3 Expected Actions

The Subscriber may check the returned `hub.channel.endpoint` in the response and verify that it matches the websocket URL it requested.

If the HTTP response code is 4xx or 5xx, then the Subscriber may adjust the request and retry.

### 2:4.152.5 Security Considerations

See [IRA Security Considerations](volume-1.html#1535-ira-security-considerations).

#### 2:4.152.5.1 Security Audit Considerations

Managers that support the ATNA Profile shall audit this transaction.

This transaction corresponds to a Query Information ATNA Trigger Event.


---

// File: input/pagecontent/rad-153.md

### 2:4.153.1 Scope

This transaction is used to retrieve the current context for a given session and all associated contents in that context.

### 2:4.153.2 Actors Roles

**Table 2:4.153.2-1: Actor Roles**

| Role | Description | Actor(s) |
|------|-------------|----------|
| Subscriber | Requests current context and contents for an identified session | Image Display<br>Report Creator<br>Worklist Client<br>Evidence Creator<br>Stateless Evidence Creator<br>Watcher |
| Manager | Returns current context and contents | Hub |
{: .grid}

### 2:4.153.3 Referenced Standards

**FHIRcast**: [Get Current Context](https://build.fhir.org/ig/HL7/fhircast-docs/2-9-GetCurrentContext.html)

### 2:4.153.4 Messages

<div>
{%include rad-153-seq.svg%}
</div>

<div style="clear: left"/>

**Figure 2:4.153.4-1: Interaction Diagram**

#### 2:4.153.4.1 Get Current Context Request Message
The Subscriber requests the current context and its contents for an identified session.

The Subscriber shall support sending such messages to more than one Manager. The Manager shall support handling such messages from more than one Subscriber. 

##### 2:4.153.4.1.1 Trigger Events

The Subscriber uses this transaction when:
- It successfully subscribes to a session and wants to have the current context
- It determines that it has missed some events for the current context based on receiving an context event with an unexpected version
- It receives a `[FHIR resource]-close` event and wants to synchronize with the new current context, if any

##### 2:4.153.4.1.2 Message Semantics

This message is a [Get Current Context Request](https://build.fhir.org/ig/HL7/fhircast-docs/2-9-GetCurrentContext.html#get-current-context-request). The Subscriber is the FHIRcast Subscriber. The Manager is the FHIRcast Hub.

The topic in the request URL identifies the session for which the current context and contents are being requested.

##### 2:4.153.4.1.3 Expected Actions

The Manager shall validate if the `topic` specified in the request URL is a valid session.

The Manager shall retrieve the current context and all associated contents correspond to the `topic` in the request URL.

> Note: The current context is the anchor context with all associated contexts. For example, in a `DiagnosticReport-open` event, the current context includes `report`, `patient` and `study` contexts, in which `report` is the anchor context.

#### 2:4.153.4.2 Get Current Context Response Message

The Manager returns the current context and all associated contents.

##### 2:4.153.4.2.1 Trigger Events

The Manager receives the Get Current Context request.

##### 2:4.153.4.2.2 Message Semantics

This message is a [Get Current Context Response](https://build.fhir.org/ig/HL7/fhircast-docs/2-9-GetCurrentContext.html#get-current-context-response). The Subscriber is the FHIRcast Subscriber. The Manager is the FHIRcast Hub.

The Manager shall include the `content` key in the response. See [Content Sharing Support](https://build.fhir.org/ig/HL7/fhircast-docs/2-9-GetCurrentContext.html#content-sharing-support) for details.

##### 2:4.153.4.2.3 Expected Actions

The Subscriber shall process the context as if it had received the `[FHIR resource]-open` event with the same context.

The Subscriber shall replace the set of known contents associated with the context with the resources in the `content` bundle, according to its business logic. 

### 2:4.153.5 Security Considerations

See [IRA Security Considerations](volume-1.html#1535-ira-security-considerations).

#### 2:4.153.5.1 Security Audit Considerations

Managers that support the ATNA Profile shall audit this transaction.

This transaction corresponds to a Query Information ATNA Trigger Event.


---

// File: input/pagecontent/rad-154.md

### 2:4.154.1 Scope

This transaction is used to distribute notification events to subscribers. This allows a Subscriber to synchronize to changes initiated by other Subscribers to a session.

### 2:4.154.2 Actors Roles

**Table 2:4.154.2-1: Actor Roles**

| Role | Description | Actor(s)                         |
|------|-------------|----------------------------------|
| Manager | Distributes notification event to Subscribers | Hub |
| Subscriber | Receives notification events | Image Display<br>Report Creator<br>Worklist Client<br>Evidence Creator<br>Stateless Evidence Creator<br>Watcher |
{: .grid}

### 2:4.154.3 Referenced Standards

**FHIRcast**: [Event Notification](https://build.fhir.org/ig/HL7/fhircast-docs/2-5-EventNotification.html)

**Websocket**: [IETF RFC 6455](https://www.rfc-editor.org/rfc/rfc6455)

**FHIRcast**: [Sync error Event](https://build.fhir.org/ig/HL7/fhircast-docs/3-2-1-SyncError.html)

### 2:4.154.4 Messages

<div>
{%include rad-154-seq.svg%}
</div>

<div style="clear: left"/>

**Figure 2:4.154.4-1: Interaction Diagram**

#### 2:4.154.4.1 Notification Message
The Manager sends the received notification events to Subscribers that listed this event type in their subscription.

The Manager shall support sending such messages to more than one Subscriber. The Subscriber shall support handling such messages from more than one Manager.

The Manager shall send a separate Notification message to each Subscriber.

##### 2:4.154.4.1.1 Trigger Events

The Manager accepts a notification event request (e.g. context events, syncerror events or other infrastructure events such as heartbeat events) and this Subscriber has listed this event type in its subscription.

##### 2:4.154.4.1.2 Message Semantics

This message is a [FHIRcast Event Notification Request](https://build.fhir.org/ig/HL7/fhircast-docs/2-5-EventNotification.html#event-notification-request) request. The Manager is the FHIRcast Hub. The Subscriber is the FHIRcast Subscriber.

The Manager shall support the additional requirements regarding `version id` defined in FHIRcast [content sharing](https://build.fhir.org/ig/HL7/fhircast-docs/2-10-ContentSharing.html).

##### 2:4.154.4.1.3 Expected Actions

The Subscriber may validate the received event according to its business logic. If the Subscriber rejects the event, then it shall notify the Manager about the error.

The Subscriber shall handle events `[FHIR resource]-open` \| `update` \| `select` \| `close` that it supports. Handling requirements for some general types of events are described below. Profile specific event handling requirements are defined in the Actor Description for each actor per profile.

The Subscriber shall support [content sharing](https://build.fhir.org/ig/HL7/fhircast-docs/2-10-ContentSharing.html).

> Note: The Subscriber may handle the event synchronously. The Subscriber may also handle the event asynchronously by accepting the event initially (i.e., returning `202` Accepted) and processing it later.

##### 2:4.154.4.1.3.1 Handling open events

Upon receiving a `[FHIR resource]-open` event, the Subscriber will *open* the corresponding `event.context` according to its business logic. The semantics of the open event may be further described in the corresponding 'open request' transaction.

> Note: `[FHIR resource]-open` events occur when a context is initially created and when it is re-opened. Subscriber event handling may differ for these two cases.

The Subscriber shall keep track of the `context.versionId` in the local context.

##### 2:4.154.4.1.3.2 Handling update events

Upon receiving a `[FHIR resource]-update` event, the Subscriber:
- Shall validate if the `context.priorVersionId` in the event matches the current version ID in the local context.
    - If true, the Subscriber shall handle the update event according to its business logic.
    - If not, this means the Subscriber missed one or more prior events. In this case, the Subscriber is responsible for subsequently retrieving the current context and applying the retrieved context according to its business logic.
- Shall update the current version ID in the local context to match the `context.versionId` from the event, even if its business logic requires no specific processing.
- For contents of interest that are not inline in the `[FHIR resource]-update` event and referenced by a relative path, the Subscriber shall retrieve the content based on the `entry.fullurl`.
- May process a subset of updates specified in the `updates` context key according to its business logic.
    - For relevant updates, the Subscriber shall stay synchronized with the report context
- May ignore updates associated to an anchor context that the Subscriber is unaware of


##### 2:4.154.4.1.3.3 Handling select events

Upon receiving a `[FHIR resource]-select` event, the Subscriber:
- Shall unselect all previously selected contents
- Shall select all applicable resources in the local context according to the referenced resources in the event
- Shell be capable of using applicable selected resources in subsequent user commands according to its business logic.
- Shall ignore any resources referenced in the event that are not known to the Subscriber

##### 2:4.154.4.1.3.4 Handling close events

Upon receiving a `[FHIR resource]-close` event, the Subscriber shall close the referenced context and all associated contents. This typically involves deleting it from its local context.

#### 2:4.154.4.2 Notification Response Message

##### 2:4.154.4.2.1 Trigger Events

The Subscriber processes the Notification Message.

##### 2:4.154.4.2.2 Message Semantics

The message is a [FHIRcast Event Notification Response](https://build.fhir.org/ig/HL7/fhircast-docs/2-5-EventNotification.html#event-notification-response) request. The Subscriber is a FHIRcast Subscriber. The Manager is a FHIRcast Hub.

The Subscriber shall send a confirmation message back to the Manager using the established websocket connection.

##### 2:4.154.4.2.3 Expected Actions

If the Manager receives an error confirmation message (i.e., `status` `4xx` or `5xx`) from at least one of the Subscribers, then the Manager shall send a `syncerror` event using the [Generate SyncError Event](rad-155.html) (RAD-155) transaction to all subscribers that subscribed to the `syncerror` event.

The Manager shall not change the current context in the session even if it receives an error confirmation message.

> Note: The Manager sets the current context as a result of processing a `[FHIR resource]-open` event. Whether or not one or more of the Subscribers failed to apply the context change does not affect the context managed by the Manager.

### 2:4.154.5 Security Considerations

See [IRA Security Considerations](volume-1.html#1535-ira-security-considerations).

#### 2:4.154.5.1 Security Audit Considerations

This transaction is not associated with an ATNA Trigger Event.


---

// File: input/pagecontent/rad-155.md

### 2:4.155.1 Scope

This transaction is used to distribute notification events to subscribers about synchronization errors detected by the Manager.

### 2:4.155.2 Actors Roles

**Table 2:4.155.2-1: Actor Roles**

| Role | Description | Actor(s) |
|------|-------------|----------|
| Subscriber | Receives and responses to error event | Image Display<br>Report Creator<br>Worklist Client<br>Evidence Creator<br>Stateless Evidence Creator<br>Watcher |
| Manager | Generates error event and notifies Subscribers | Hub |
{: .grid}

### 2:4.155.3 Referenced Standards

**FHIRcast** [Request Context Change](https://build.fhir.org/ig/HL7/fhircast-docs/2-6-RequestContextChange.html)

**FHIRcast**: [Event Notification Errors](https://build.fhir.org/ig/HL7/fhircast-docs/2-5-EventNotification.html#event-notification-errors)

**FHIRcast**: [Hub Generated syncerror Events](https://build.fhir.org/ig/HL7/fhircast-docs/2-5-EventNotification.html#hub-generated-syncerror-events)

**FHIRcast**: [Sync error Event](https://build.fhir.org/ig/HL7/fhircast-docs/3-2-1-SyncError.html)

### 2:4.155.4 Messages

<div>
{%include rad-155-seq.svg%}
</div>

<div style="clear: left"/>

**Figure 2:4.155.4-1: Interaction Diagram**

#### 2:4.155.4.1 Error Notification Message

The Manager sends an error event to Subscribers indicating that it detected an error.

The Manager shall support sending such messages to more than one Subscribers. The Subscriber shall support handling such messages from more than one Manager. 

For most triggers, the Manager shall send a separate Error Notification message to each Subscriber.

When the Manager initially accepted a context or content change request (i.e. responded with a `202` Accepted respond) but later rejected the request, then the Manager shall send a single Error Notification message to the original requesting Subscriber.

##### 2:4.155.4.1.1 Trigger Events

A Manager sends an Error Notification message when:
- It receives a 4xx or 5xx error response from a Subscriber when executing the [Distribute Context Event](rad-154.html) (RAD-154) transaction.
- It does not receive a `2xx` response within a predetermined time frame from a Subscriber after the Manager sent a context event.
- It initially responded with a `202` Accepted when received a context or content change from a Subscriber, but later determines that it is unable to synchronize with the content in the event and notify other Subscribers. See [Request Context Change](https://build.fhir.org/ig/HL7/fhircast-docs/2-6-RequestContextChange.html).
- It detects a websocket connection issue with a Subscriber.

##### 2:4.155.4.1.2 Message Semantics

This message is a [FHIRcast Event Notification Request](https://build.fhir.org/ig/HL7/fhircast-docs/2-5-EventNotification.html#event-notification-request) request. The Manager is the FHIRcast Hub. The Subscriber is the FHIRcast Subscriber.

The `event.context` shall conform to [SyncError Context](https://build.fhir.org/ig/HL7/fhircast-docs/3-2-1-SyncError.html#context).

Per FHIRcast, the `issue[0].severity` of the `operationoutcome` context will be set to `information`.

The Manager shall set the `operationoutcome` `issue[0].details` as follow:
- `issue[0].details.coding[0].code` shall be the `event.id` of the event that triggered the error, or a generated ID for non-event triggered errors
- `issue[0].details.coding[1].code` shall be the `event`.`hub.event` of the event that triggered the error, or `syncerror` for non-event triggered errors
- `issue[0].details.coding[2].code` shall be the `subscriber.name` of the Subscriber that originated either the `syncerror`, or the event that triggered the error.

##### 2:4.155.4.1.3 Expected Actions

The Subscriber will handle the error according to its business logic. For example, display an error message to the user, retry the original request, or close the context.

#### 2:4.155.4.2 Error Notification Response Message

##### 2:4.155.4.2.1 Trigger Events

The Subscriber processes the error notification received.

##### 2:4.155.4.2.2 Message Semantics

The message is a [FHIRcast Event Notification Response](https://build.fhir.org/ig/HL7/fhircast-docs/2-5-EventNotification.html#event-notification-response) request. The Subscriber is a FHIRcast Subscriber. The Manager is a FHIRcast Hub.

The Subscriber shall send a confirmation message back to the Manager using the established websocket connection.

##### 2:4.155.4.2.3 Expected Actions

The Manager may resend the error notification if it does not receive a response from a Subscriber within a timeframe.

### 2:4.155.5 Security Considerations

See [IRA Security Considerations](volume-1.html#1535-ira-security-considerations).

#### 2:4.155.5.1 Security Audit Considerations

This transaction is not associated with an ATNA Trigger Event.


---

// File: input/pagecontent/rad-156.md

### 2:4.156.1 Scope

This transaction is used to send error notifications when a Subscriber initially accepted an event and later failed to process it.

### 2:4.156.2 Actors Roles

**Table 2:4.156.2-1: Actor Roles**

| Role | Description | Actor(s) |
|------|-------------|----------|
| Subscriber | Sends error notifications | Image Display<br>Report Creator<br>Worklist Client<br>Evidence Creator<br>Stateless Evidence Creator<br>Watcher |
| Manager | Accepts and processes notification | Hub |
{: .grid}

### 2:4.156.3 Referenced Standards

**FHIRcast**: [Request Context Change](https://build.fhir.org/ig/HL7/fhircast-docs/2-6-RequestContextChange.html#request-context-change)

**FHIRcast**: [Sync error Event](https://build.fhir.org/ig/HL7/fhircast-docs/3-2-1-SyncError.html)

### 2:4.156.4 Messages

<div>
{%include rad-156-seq.svg%}
</div>

<div style="clear: left"/>

**Figure 2:4.156.4-1: Interaction Diagram**

#### 2:4.156.4.1 Notify Error Message

The Subscriber sends an error event to the Manager indicating that it failed to process a notification.

The Subscriber shall support sending such messages to more than one Manager. The Manager shall support handling such messages from more than one Subscriber. 

##### 2:4.156.4.1.1 Trigger Events

The Subscriber failed to successfully process an context event that the Subscriber initially accepted and responded with `202` Accepted.

##### 2:4.156.4.1.2 Message Semantics

This message is a [FHIRcast Request Context Change](https://build.fhir.org/ig/HL7/fhircast-docs/2-6-RequestContextChange.html#request-context-change-body) request. The Subscriber is the FHIRcast Subscriber. The Manager is the FHIRcast Hub.

> Note: This message uses an infrastructure event `SyncError` which does not change the request context. However, FHIRcast uses the same HTTP method to communicate infrastructure events. The difference is in the event definition.

The `event.context` shall conform to [SyncError Context](https://build.fhir.org/ig/HL7/fhircast-docs/3-2-1-SyncError.html#context).

Per FHIRcast, the `issue[0].severity` of the `operationoutcome` context will be set to `warning`.

If the Sender is resending this error event due to not receiving a response from the Manager for a prior request, then the Sender shall use the same `event.id`. If the Manager received the original request, this allows it to detect that it is a duplicate message.

If the Sender retries the request due to an error response from the Manager, then the Sender shall assign a new `event.id` to indicate that it is a new request.

##### 2:4.156.4.1.3 Expected Actions

The Manager shall receive, validate and process the request. See 2:3.156.4.2.2 for error conditions.

#### 2:4.156.4.2 Notify Error Response Message

##### 2:4.156.4.2.1 Trigger Events

The Manager finished processing the Notify Error request.

##### 2:4.156.4.2.2 Message Semantics

This message is a [FHIRcast Request Context Change](https://build.fhir.org/ig/HL7/fhircast-docs/2-6-RequestContextChange.html#request-context-change-body) response. The Subscriber is the FHIRcast Subscriber. The Manager is the FHIRcast Hub.

The Manager shall return `400` Bad Request error:
- if `timestamp`, `id` or `event` are not set
- if `event.context` does not include `operationoutcome`
- if the context does not conform to the [SyncError Context](https://build.fhir.org/ig/HL7/fhircast-docs/3-2-1-SyncError.html#context)
- if `event`.`hub.topic` is not a known session

The Manager may return other applicable HTTP error status codes.

##### 2:4.156.4.2.3 Expected Actions

If the response is an error, then the Subscriber may consider retrying the request.

### 2:4.156.5 Security Considerations

See [IRA Security Considerations](volume-1.html#1535-ira-security-considerations).

#### 2:4.156.5.1 Security Audit Considerations

This transaction is not associated with an ATNA Trigger Event.


---

// File: input/pagecontent/select_study_and_observation.md

### Event-name: DiagnosticReport-select

### Trigger Event
Radiologist selected the subject study and the observation.

### Examples

#### DiagnosticReport-select Example

The following example shows the selection of a single Observation resource in an anchor context of a diagnostic report.

```json
{
  "timestamp": "2019-09-10T14:58:45.988Z",
  "id": "0e7ac18",
  "event": {
    "hub.topic": "e62b4411-55f3-431a-94e8-ef4af537511c",
    "hub.event": "DiagnosticReport-select",
    "context.versionId": "efcac43a-ed38-49e4-8d79-73f78290292a",
    "context": [
      {
        "key": "report",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "40012366"
        }
      },
      {
        "key": "select",
        "resource": [
          {
            "resourceType": "Observation",
            "id": "435098234"
          },
          {
            "resourceType": "ImagingSelection",
            "id": "18735123"
          }
        ]
      }
    ]
  }
}
```

#### DiagnosticReport-select Event Example

```json
{
  "timestamp": "2019-09-10T14:58:45.988Z",
  "id": "0e7ac18",
  "event": {
    "hub.topic": "e62b4411-55f3-431a-94e8-ef4af537511c",
    "hub.event": "DiagnosticReport-select",
    "context.versionId": "ca3b44a1-d40e-44ae-99bb-434c10dfb535",
    "context.priorVersionId": "efcac43a-ed38-49e4-8d79-73f78290292a",
    "context": [
      {
        "key": "report",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "40012366"
        }
      },
      {
        "key": "select",
        "resource": [
          {
            "resourceType": "Observation",
            "id": "435098234"
          },
          {
            "resourceType": "ImagingSelection",
            "id": "18735123"
          }
        ]
      }
    ]
  }
}
```

### Available Context and Content in Hub

| Time Sequence | Event | Session ID | Current Context | Anchor Context | Contexts Present | Content | Content Selected | Version ID | Prior Version ID | 
|--|--|--|--|--|--|--|--|--|
| 1 | DiagnosticReport-open | e62b4411-55f3-431a-94e8-ef4af537511c | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366<br><br>patient: Patient<br>id: ewUbXT9RWEbSj5wPEdgRaBw3<br>mrn: 185444<br><br>study: ImagingStudy<br>id: 8i7tbu6fby5ftfbku6fniuf<br>study uid: 2.16.124.113543.6003.1154777499.38476.11982.4847614254<br>accnum: 342123458 | none | none | b9574cb0-e9e5-4be1-8957-5fcb51ef33c1 | none |
| 2 | DiagnosticReport-update | e62b4411-55f3-431a-94e8-ef4af537511c | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366<br><br>patient: Patient<br>id: ewUbXT9RWEbSj5wPEdgRaBw3<br>mrn: 185444<br><br>study: ImagingStudy<br>id: 8i7tbu6fby5ftfbku6fniuf<br>study uid: 2.16.124.113543.6003.1154777499.38476.11982.4847614254<br>accnum: 342123458 | study: ImagingStudy<br>id: 3478116342<br>study uid: 2.16.124.113543.6003.1154777499.30276.83661.3632298176<br><br>measurement: Observation<br>id: 435098234<br>code: Simple cyst<br>study ref: 8i7tbu6fby5ftfbku6fniuf<br><br>annotation: ImagingSelection<br>id: 18735123<br>markup: ... | none | efcac43a-ed38-49e4-8d79-73f78290292a | b9574cb0-e9e5-4be1-8957-5fcb51ef33c1 |
| 3 | DiagnosticReport-select | e62b4411-55f3-431a-94e8-ef4af537511c | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366<br><br>patient: Patient<br>id: ewUbXT9RWEbSj5wPEdgRaBw3<br>mrn: 185444<br><br>study: ImagingStudy<br>id: 8i7tbu6fby5ftfbku6fniuf<br>study uid: 2.16.124.113543.6003.1154777499.38476.11982.4847614254<br>accnum: 342123458 | study: ImagingStudy<br>id: 3478116342<br>study uid: 2.16.124.113543.6003.1154777499.30276.83661.3632298176<br><br>measurement: Observation<br>id: 435098234<br>code: Simple cyst<br>study ref: 8i7tbu6fby5ftfbku6fniuf<br><br>annotation: ImagingSelection<br>id: 18735123<br>markup: ... | measurement: Observation<br>id: 435098234<br><br>annotation: ImagingSelection<br>id: 18735123 | ca3b44a1-d40e-44ae-99bb-434c10dfb535 |efcac43a-ed38-49e4-8d79-73f78290292a |
{: .grid}

---

// File: input/pagecontent/testplan.md

<div markdown="1" class="stu-note">

This Test Plan page is a prototype. We expect the maturity of the content will improve over time. For now, we summarize high level testing scope and available tools. Comments are welcome.
</div>

## Introduction

Overall test plan leverages the profiles and Examples shown on the [Artifacts Summary](artifacts.html). The [Profiles](artifacts.html#structures-resource-profiles) listed are describing the constraints that would be adhered to by actors claiming conformance to this implementation guide. Thus any applicable Resources that are known to have been published by an app or server MUST be conformant to these profiles as appropriate.

The Examples listed in [Example](example.html) are example events. They are conformant to the profiles.

> Note: This section will be filled in as the IHE-Connectathon need drives the creation of the test plans, test procedures, test tools, and reporting.

### Unit Test Procedure

Unit Tests in this context is where a SUT is tested against a simulator or validator.  A simulator is a implementation of an actor that is designed specifically to test the opposite pair actor. The simulator might be a reference implementation or may be a specially designed test-bench. Where a reference implementation is used the negative tests are harder to simulate. A validator is a implementation that can check conformance. A validator may be a simulator, but may also be a standalone tool used to validate only a message encoding. Some reference implementations may be able to validate to a StructureDefinition profile, but often these do not include sufficient constraints given the overall actor conformance criteria. 

### Integration Test Procedure

Integration Tests in this context is where two SUT of paired actors test against each other. In this case the subset of tests that can be tested is the intersection. Testing only this intersection is necessary but not sufficient. The testing must also include the capability of the client to exercise the test scenarios that this SUT can test, to determine that failure-modes are handled properly by both SUT.




---

// File: input/pagecontent/update_report_status.md

### Event-name: DiagnosticReport-update

### Trigger Event
When the user signed off the report.

### Examples

#### DiagnosticReport-update Request Example

The following example shows updating the report context with status FINAL. The `context` holds the `id` and `versionId` of the diagnostic report as required in all `DiagnosticReport-update` events. The `Bundle` holds the update (PUT) of the report context.

```json
{
  "timestamp": "2019-09-10T15:03:45.988Z",
  "id": "304985234",
  "event": {
    "hub.topic": "e62b4411-55f3-431a-94e8-ef4af537511c",
    "hub.event": "DiagnosticReport-update",
    "context.versionId": "ca3b44a1-d40e-44ae-99bb-434c10dfb535",
    "context": [
      {
        "key": "report",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "40012366"
        }
      },
      {
        "key": "updates",
        "resource": {
          "resourceType": "Bundle",
          "id": "asdof9uklqwne09uadsfb",
          "type": "transaction",
          "entry": [
            {
              "request": {
                "method": "PUT"
              },
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "40012366",
                "status": "final",
                ...
              }
            },
          ]
        }
      }
    ]
  }
}
```

#### DiagnosticReport-update Event Example

The HUB SHALL distribute a corresponding event to all applications currently subscribed to the topic. The Hub SHALL replace the `context.versionId` in the request with a new `context.versionId` generated and retained by the Hub. The prior version, `context.priorVersionId` of the context is also provided to ensure that an application is currently in sync with the latest context prior to applying the new changes. If the value of `context.priorVersionId` is not in agreement with the `context.versionId` last received by an application, it is recommended that the application issue a GET request to the Hub in order to retrieve the latest version of the context (note that the GET request returns the context, all existing content, and its `context.versionId`).

```json
{
  "timestamp": "2019-09-10T15:03:45.988Z",
  "id": "304985234",
  "event": {
    "hub.topic": "e62b4411-55f3-431a-94e8-ef4af537511c",
    "hub.event": "DiagnosticReport-update",
    "context.versionId": "a7e1a89d-b082-481b-9107-b70ebfba6e95",
    "context.priorVersionId": "ca3b44a1-d40e-44ae-99bb-434c10dfb535",
    "context": [
      {
        "key": "report",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "40012366"
        }
      },
      {
        "key": "updates",
        "resource": {
          "resourceType": "Bundle",
          "id": "asdof9uklqwne09uadsfb",
          "type": "transaction",
          "entry": [
            {
              "request": {
                "method": "PUT"
              },
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "40012366",
                "status": "final",
                ...
              }
            },
          ]
        }
      }
    ]
  }
}
```

### Available Context and Content in Hub

| Time Sequence | Event | Session ID | Current Context | Anchor Context | Contexts Present | Content | Content Selected | Version ID | Prior Version ID | 
|--|--|--|--|--|--|--|--|--|
| 1 | DiagnosticReport-open | e62b4411-55f3-431a-94e8-ef4af537511c | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366<br>patient: Patient<br>id: ewUbXT9RWEbSj5wPEdgRaBw3<br>mrn: 185444<br>study: ImagingStudy<br>id: 8i7tbu6fby5ftfbku6fniuf<br>study uid: 2.16.124.113543.6003.1154777499.38476.11982.4847614254<br>accnum: 342123458 | none | none | b9574cb0-e9e5-4be1-8957-5fcb51ef33c1 | none |
| 2 | DiagnosticReport-update | e62b4411-55f3-431a-94e8-ef4af537511c | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366<br><br>patient: Patient<br>id: ewUbXT9RWEbSj5wPEdgRaBw3<br>mrn: 185444<br><br>study: ImagingStudy<br>id: 8i7tbu6fby5ftfbku6fniuf<br>study uid: 2.16.124.113543.6003.1154777499.38476.11982.4847614254<br>accnum: 342123458 | study: ImagingStudy<br>id: 3478116342<br>study uid: 2.16.124.113543.6003.1154777499.30276.83661.3632298176<br><br>measurement: Observation<br>id: 435098234<br>code: Simple cyst<br>study ref: 8i7tbu6fby5ftfbku6fniuf<br><br>annotation: ImagingSelection<br>id: 18735123<br>markup: ... | none | efcac43a-ed38-49e4-8d79-73f78290292a | b9574cb0-e9e5-4be1-8957-5fcb51ef33c1 |
| 3 | DiagnosticReport-select | e62b4411-55f3-431a-94e8-ef4af537511c | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366<br><br>patient: Patient<br>id: ewUbXT9RWEbSj5wPEdgRaBw3<br>mrn: 185444<br><br>study: ImagingStudy<br>id: 8i7tbu6fby5ftfbku6fniuf<br>study uid: 2.16.124.113543.6003.1154777499.38476.11982.4847614254<br>accnum: 342123458 | study: ImagingStudy<br>id: 3478116342<br>study uid: 2.16.124.113543.6003.1154777499.30276.83661.3632298176<br><br>measurement: Observation<br>id: 435098234<br>code: Simple cyst<br>study ref: 8i7tbu6fby5ftfbku6fniuf<br><br>annotation: ImagingSelection<br>id: 18735123<br>markup: ... | measurement: Observation<br>id: 435098234<br><br>annotation: ImagingSelection<br>id: 18735123 | ca3b44a1-d40e-44ae-99bb-434c10dfb535 |efcac43a-ed38-49e4-8d79-73f78290292a |
| 4 | DiagnosticReport-update | e62b4411-55f3-431a-94e8-ef4af537511c | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366<br><br>patient: Patient<br>id: ewUbXT9RWEbSj5wPEdgRaBw3<br>mrn: 185444<br><br>study: ImagingStudy<br>id: 8i7tbu6fby5ftfbku6fniuf<br>study uid: 2.16.124.113543.6003.1154777499.38476.11982.4847614254<br>accnum: 342123458 | study: ImagingStudy<br>id: 3478116342<br>study uid: 2.16.124.113543.6003.1154777499.30276.83661.3632298176<br><br>measurement: Observation<br>id: 435098234<br>code: Simple cyst<br>study ref: 8i7tbu6fby5ftfbku6fniuf<br><br>annotation: ImagingSelection<br>id: 18735123<br>markup: ...<br><br>report: DiagnosticReport<br>id: 40012366<br>status: Final | measurement: Observation<br>id: 435098234<br><br>annotation: ImagingSelection<br>id: 18735123 | a7e1a89d-b082-481b-9107-b70ebfba6e95 | ca3b44a1-d40e-44ae-99bb-434c10dfb535 |
{: .grid}

---

// File: input/pagecontent/update_study_with_measurement.md

### Event-name: DiagnosticReport-update

### Trigger Event
When a subscriber completed something that it decided it is ready to share with other subscribers. For example, finished analysis on a set of images and produced a set of detected nodules and the fleischner score.

### Examples

#### DiagnosticReport-update Request Example

The following example shows adding an imaging study to the existing diagnostic report context and a new observation. The `context` holds the `id` and `versionId` of the diagnostic report as required in all  `DiagnosticReport-update` events. The `Bundle` holds the addition (POST) of an imaging study and adds (POST) an observation derived from this study.

```json
{
  "timestamp": "2019-09-10T14:58:45.988Z",
  "id": "0d4c7776",
  "event": {
    "hub.topic": "e62b4411-55f3-431a-94e8-ef4af537511c",
    "hub.event": "DiagnosticReport-update",
    "context.versionId": "b9574cb0-e9e5-4be1-8957-5fcb51ef33c1",
    "context": [
      {
        "key": "report",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "40012366"
        }
      },
      {
        "key": "updates",
        "resource": {
          "resourceType": "Bundle",
          "id": "8i7tbu6fby5fuuey7133eh",
          "type": "transaction",
          "entry": [
            {
              "request": {
                "method": "POST"
              },
              "resource": {
                "resourceType": "ImagingStudy",
                "description": "CHEST XRAY",
                "started": "2010-02-14T01:10:00.000Z",
                "id": "3478116342",
                "identifier": [
                  {
                    "type": {
                      "coding": [
                        {
                          "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                          "code": "ACSN"
                        }
                      ]
                    },
                    "value": "3478116342"
                  },
                  {
                    "system": "urn:dicom:uid",
                    "value": "urn:oid:2.16.124.113543.6003.1154777499.30276.83661.3632298176"
                  }
                ]
              }
            },
            {
              "request": {
                "method": "POST"
              },
              "resource": {
                "resourceType": "Observation",
                "id": "435098234",
                "partOf": {
                  "reference": "ImagingStudy/8i7tbu6fby5ftfbku6fniuf"
                },
                "status": "preliminary",
                "category": {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "imaging",
                  "display": "Imaging"
                },
                "code": {
                  "coding": [
                    {
                      "system": "http://www.radlex.org",
                      "code": "RID49690",
                      "display": "simple cyst"
                    }
                  ] 
                },
                "issued": "2020-09-07T15:02:03.651Z"
              }
            },
            {
              "request": {
                "method": "POST"
              },
              "resource": {
                "resourceType": "ImagingSelection",
                "id": "18735123",
                ...
              }
            }
          ]
        }
      }
    ]
  }
}
```

#### DiagnosticReport-update Event Example

The HUB SHALL distribute a corresponding event to all applications currently subscribed to the topic. The Hub SHALL replace the `context.versionId` in the request with a new `context.versionId` generated and retained by the Hub. The prior version, `context.priorVersionId` of the context is also provided to ensure that an application is currently in sync with the latest context prior to applying the new changes. If the value of `context.priorVersionId` is not in agreement with the `context.versionId` last received by an application, it is recommended that the application issue a GET request to the Hub in order to retrieve the latest version of the context (note that the GET request returns the context, all existing content, and its `context.versionId`).

```json
{
  "timestamp": "2019-09-10T14:58:45.988Z",
  "id": "0d4c7776",
  "event": {
    "hub.topic": "e62b4411-55f3-431a-94e8-ef4af537511c",
    "hub.event": "DiagnosticReport-update",
    "context.versionId": "efcac43a-ed38-49e4-8d79-73f78290292a",
    "context.priorVersionId": "b9574cb0-e9e5-4be1-8957-5fcb51ef33c1",
    "context": [
      {
        "key": "report",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "40012366"
        }
      },
      {
        "key": "updates",
        "resource": {
          "resourceType": "Bundle",
          "id": "8i7tbu6fby5fuuey7133eh",
          "type": "transaction",
          "entry": [
            {
              "request": {
                "method": "POST"
              },
              "resource": {
                "resourceType": "ImagingStudy",
                "description": "CHEST XRAY",
                "started": "2010-02-14T01:10:00.000Z",
                "id": "3478116342",
                "identifier": [
                  {
                    "type": {
                      "coding": [
                        {
                          "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                          "code": "ACSN"
                        }
                      ]
                    },
                    "value": "3478116342"
                  },
                  {
                    "system": "urn:dicom:uid",
                    "value": "urn:oid:2.16.124.113543.6003.1154777499.30276.83661.3632298176"
                  }
                ]
              }
            },
            {
              "request": {
                "method": "POST"
              },
              "resource": {
                "resourceType": "Observation",
                "id": "435098234",
                "partOf": {
                  "reference": "ImagingStudy/8i7tbu6fby5ftfbku6fniuf"
                },
                "status": "preliminary",
                "category": {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "imaging",
                  "display": "Imaging"
                },
                "code": {
                  "coding": [
                    {
                      "system": "http://www.radlex.org",
                      "code": "RID49690",
                      "display": "simple cyst"
                    }
                  ] 
                },
                "issued": "2020-09-07T15:02:03.651Z"
              }
            },
            {
              "request": {
                "method": "POST"
              },
              "resource": {
                "resourceType": "ImagingSelection",
                "id": "18735123",
                ...
              }
            }
          ]
        }
      }
    ]
  }
}
```

### Available Context and Content in Hub

| Time Sequence | Event | Session ID | Current Context | Anchor Context | Contexts Present | Content | Content Selected | Version ID | Prior Version ID | 
|--|--|--|--|--|--|--|--|--|
| 1 | DiagnosticReport-open | e62b4411-55f3-431a-94e8-ef4af537511c | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366<br>patient: Patient<br>id: ewUbXT9RWEbSj5wPEdgRaBw3<br>mrn: 185444<br>study: ImagingStudy<br>id: 8i7tbu6fby5ftfbku6fniuf<br>study uid: 2.16.124.113543.6003.1154777499.38476.11982.4847614254<br>accnum: 342123458 | none | none | b9574cb0-e9e5-4be1-8957-5fcb51ef33c1 | none |
| 2 | DiagnosticReport-update | e62b4411-55f3-431a-94e8-ef4af537511c | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366 | report: DiagnosticReport<br>id: 40012366<br><br>patient: Patient<br>id: ewUbXT9RWEbSj5wPEdgRaBw3<br>mrn: 185444<br><br>study: ImagingStudy<br>id: 8i7tbu6fby5ftfbku6fniuf<br>study uid: 2.16.124.113543.6003.1154777499.38476.11982.4847614254<br>accnum: 342123458 | study: ImagingStudy<br>id: 3478116342<br>study uid: 2.16.124.113543.6003.1154777499.30276.83661.3632298176<br><br>measurement: Observation<br>id: 435098234<br>code: Simple cyst<br>study ref: 8i7tbu6fby5ftfbku6fniuf<br><br>annotation: ImagingSelection<br>id: 18735123<br>markup: ... | none | efcac43a-ed38-49e4-8d79-73f78290292a | b9574cb0-e9e5-4be1-8957-5fcb51ef33c1 |
{: .grid}

---

// File: input/pagecontent/volume-1.md

The Integrated Reporting Applications (IRA) Profile helps applications that are used together during reporting (e.g., image display, report creator, clinical applications, AI tools, etc.) to share information using a standard called FHIRcast. Each application can share data it is using or creating, referred to as Content. Each application can also signal a change in the patient, study or report being worked on, referred to as Context, so that other applications can switch to that new Context in an automated and synchronized fashion. Other applications are notified so they can then intelligently synchronize their behavior or use the new data.

For example, the report creator could share that the user is starting a new report, and the other applications could synchronize by opening the corresponding study. An AI tool could generate a tumor measurement and the report creator could get that data and add an entry in the report after reviewed by the radiologist.

Note that there are often other supporting activities happening during reporting. For example, an Image Display triggers a tumor analysis application to detect any tumors exist in the study. These supporting activities are out of scope in this profile.

# 1:53.1 IRA Actors, Transactions, and Content Modules
This section defines the actors, transactions, and/or content modules in this profile. General
definitions of actors are given in the Technical Frameworks General Introduction [Appendix A](https://profiles.ihe.net/GeneralIntro/ch-A.html).
IHE Transactions can be found in the Technical Frameworks General Introduction [Appendix B](https://profiles.ihe.net/GeneralIntro/ch-B.html).
Both appendices are located at <https://profiles.ihe.net/GeneralIntro/>.

Figure 1:53.1-1 shows the actors directly involved in the IRA Profile and the relevant transactions
between them. If needed for context, other actors that may be indirectly involved due to their participation
in other related profiles are shown in dotted lines. Actors which have a required
grouping are shown in conjoined boxes (see [Section 1:53.3](#1533-ira-required-actor-groupings)).

<div>
    <img src="actor_transaction.png" width="80%">
</div>
<br clear="all">

**Figure 1:53.1-1: IRA Actor Diagram**

Table 1:53.1-1 lists the transactions for each actor directly involved in the IMR Profile. To claim compliance with this profile, an actor shall support all required transactions (labeled “R”) and may support the optional transactions (labeled “O”).

**Table 1:53.1-1: IRA Profile - Actors and Transactions**

<table class="grid">
  <thead>
    <tr>
      <th>Actors</th>
      <th>Transactions</th>
      <th>Initiator or Responder</th>
      <th>Optionality</th>
      <th>Reference</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="9"><a href="volume-1.html#153111-image-display">Image Display</a></td>
      <td>Subscribe to Reporting Session [RAD-146]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-146.html">RAD TF-2: 4.146</a></td>
    </tr>
    <tr>
      <td>Connect to Notification Channel [RAD-147]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-147.html">RAD TF-2: 4.147</a></td>
    </tr>
    <tr>
      <td>Open Report Context [RAD-148]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-148.html">RAD TF-2: 4.148</a></td>
    </tr>
    <tr>
      <td>Close Report Context [RAD-149]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-149.html">RAD TF-2: 4.149</a></td>
    </tr>
    <tr>
      <td>Unsubscribe Session [RAD-152]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-152.html">RAD TF-2: 4.152</a></td>
    </tr>
    <tr>
      <td>Get Current Context [RAD-153]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-153.html">RAD TF-2: 4.153</a></td>
    </tr>
    <tr>
      <td>Distribute Context Event [RAD-154]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-154.html">RAD TF-2: 4.154</a></td>
    </tr>
    <tr>
      <td>Generate SyncError Event [RAD-155]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-155.html">RAD TF-2: 4.155</a></td>
    </tr>
    <tr>
      <td>Notify Error [RAD-156]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-156.html">RAD TF-2: 4.156</a></td>
    </tr>
    <tr>
      <td rowspan="9"><a href="volume-1.html#153112-report-creator">Report Creator</a></td>
      <td>Subscribe to Reporting Session [RAD-146]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-146.html">RAD TF-2: 4.146</a></td>
    </tr>
    <tr>
      <td>Connect to Notification Channel [RAD-147]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-147.html">RAD TF-2: 4.147</a></td>
    </tr>
    <tr>
      <td>Open Report Context [RAD-148]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-148.html">RAD TF-2: 4.148</a></td>
    </tr>
    <tr>
      <td>Close Report Context [RAD-149]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-149.html">RAD TF-2: 4.149</a></td>
    </tr>
    <tr>
      <td>Unsubscribe Session [RAD-152]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-152.html">RAD TF-2: 4.152</a></td>
    </tr>
    <tr>
      <td>Get Current Context [RAD-153]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-153.html">RAD TF-2: 4.153</a></td>
    </tr>
    <tr>
      <td>Distribute Context Event [RAD-154]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-154.html">RAD TF-2: 4.154</a></td>
    </tr>
    <tr>
      <td>Generate SyncError Event [RAD-155]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-155.html">RAD TF-2: 4.155</a></td>
    </tr>
    <tr>
      <td>Notify Error [RAD-156]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-156.html">RAD TF-2: 4.156</a></td>
    </tr>
    <tr>
      <td rowspan="9"><a href="volume-1.html#153113-worklist-client">Worklist Client</a></td>
      <td>Subscribe to Reporting Session [RAD-146]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-146.html">RAD TF-2: 4.146</a></td>
    </tr>
    <tr>
      <td>Connect to Notification Channel [RAD-147]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-147.html">RAD TF-2: 4.147</a></td>
    </tr>
    <tr>
      <td>Open Report Context [RAD-148]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-148.html">RAD TF-2: 4.148</a></td>
    </tr>
    <tr>
      <td>Close Report Context [RAD-149]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-149.html">RAD TF-2: 4.149</a></td>
    </tr>
    <tr>
      <td>Unsubscribe Session [RAD-152]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-152.html">RAD TF-2: 4.152</a></td>
    </tr>
    <tr>
      <td>Get Current Context [RAD-153]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-153.html">RAD TF-2: 4.153</a></td>
    </tr>
    <tr>
      <td>Distribute Context Event [RAD-154]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-154.html">RAD TF-2: 4.154</a></td>
    </tr>
    <tr>
      <td>Generate SyncError Event [RAD-155]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-155.html">RAD TF-2: 4.155</a></td>
    </tr>
    <tr>
      <td>Notify Error [RAD-156]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-156.html">RAD TF-2: 4.156</a></td>
    </tr>
    <tr>
      <td rowspan="7"><a href="volume-1.html#153114-evidence-creator">Evidence Creator</a></td>
      <td>Subscribe to Reporting Session [RAD-146]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-146.html">RAD TF-2: 4.146</a></td>
    </tr>
    <tr>
      <td>Connect to Notification Channel [RAD-147]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-147.html">RAD TF-2: 4.147</a></td>
    </tr>
    <tr>
      <td>Unsubscribe Session [RAD-152]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-152.html">RAD TF-2: 4.152</a></td>
    </tr>
    <tr>
      <td>Get Current Context [RAD-153]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-153.html">RAD TF-2: 4.153</a></td>
    </tr>
    <tr>
      <td>Distribute Context Event [RAD-154]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-154.html">RAD TF-2: 4.154</a></td>
    </tr>
    <tr>
      <td>Generate SyncError Event [RAD-155]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-155.html">RAD TF-2: 4.155</a></td>
    </tr>
    <tr>
      <td>Notify Error [RAD-156]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-156.html">RAD TF-2: 4.156</a></td>
    </tr>
    <tr>
      <td rowspan="7"><a href="volume-1.html#153115-stateless-evidence-creator">Stateless Evidence Creator</a></td>
      <td>Subscribe to Reporting Session [RAD-146]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-146.html">RAD TF-2: 4.146</a></td>
    </tr>
    <tr>
      <td>Connect to Notification Channel [RAD-147]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-147.html">RAD TF-2: 4.147</a></td>
    </tr>
    <tr>
      <td>Unsubscribe Session [RAD-152]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-152.html">RAD TF-2: 4.152</a></td>
    </tr>
    <tr>
      <td>Get Current Context [RAD-153]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-153.html">RAD TF-2: 4.153</a></td>
    </tr>
    <tr>
      <td>Distribute Context Event [RAD-154]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-154.html">RAD TF-2: 4.154</a></td>
    </tr>
    <tr>
      <td>Generate SyncError Event [RAD-155]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-155.html">RAD TF-2: 4.155</a></td>
    </tr>
    <tr>
      <td>Notify Error [RAD-156]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-156.html">RAD TF-2: 4.156</a></td>
    </tr>    
    <tr>
      <td rowspan="2"><a href="volume-1.html#153116-content-creator">Content Creator</a></td>
      <td>Update Report Content [RAD-150]</td>
      <td>Initiator</td>
      <td>O (Note 1)</td>
      <td><a href="rad-150.html">RAD TF-2: 4.150</a></td>
    </tr>
    <tr>
      <td>Select Report Content [RAD-151]</td>
      <td>Initiator</td>
      <td>O (Note 1)</td>
      <td><a href="rad-151.html">RAD TF-2: 4.151</a></td>
    </tr>
    <tr>
      <td rowspan="7"><a href="volume-1.html#153117-watcher">Watcher</a></td>
      <td>Subscribe to Reporting Session [RAD-146]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-146.html">RAD TF-2: 4.146</a></td>
    </tr>
    <tr>
      <td>Connect to Notification Channel [RAD-147]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-147.html">RAD TF-2: 4.147</a></td>
    </tr>
    <tr>
      <td>Unsubscribe Session [RAD-152]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-152.html">RAD TF-2: 4.152</a></td>
    </tr>
    <tr>
      <td>Get Current Context [RAD-153]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-153.html">RAD TF-2: 4.153</a></td>
    </tr>
    <tr>
      <td>Distribute Context Event [RAD-154]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-154.html">RAD TF-2: 4.154</a></td>
    </tr>
    <tr>
      <td>Generate SyncError Event [RAD-155]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-155.html">RAD TF-2: 4.155</a></td>
    </tr>
    <tr>
      <td>Notify Error [RAD-156]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-156.html">RAD TF-2: 4.156</a></td>
    </tr>
    <tr>
      <td rowspan="11"><a href="volume-1.html#153118-hub">Hub</a></td>
      <td>Subscribe to Reporting Session [RAD-146]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-146.html">RAD TF-2: 4.146</a></td>
    </tr>
    <tr>
      <td>Connect to Notification Channel [RAD-147]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-147.html">RAD TF-2: 4.147</a></td>
    </tr>
    <tr>
      <td>Open Report Context [RAD-148]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-148.html">RAD TF-2: 4.148</a></td>
    </tr>
    <tr>
      <td>Close Report Context [RAD-149]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-149.html">RAD TF-2: 4.149</a></td>
    </tr>
    <tr>
      <td>Update Report Content [RAD-150]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-150.html">RAD TF-2: 4.150</a></td>
    </tr>
    <tr>
      <td>Select Report Content [RAD-151]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-151.html">RAD TF-2: 4.151</a></td>
    </tr>
    <tr>
      <td>Unsubscribe Session [RAD-152]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-152.html">RAD TF-2: 4.152</a></td>
    </tr>
    <tr>
      <td>Get Current Context [RAD-153]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-153.html">RAD TF-2: 4.153</a></td>
    </tr>
    <tr>
      <td>Distribute Context Event [RAD-154]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-154.html">RAD TF-2: 4.154</a></td>
    </tr>
    <tr>
      <td>Generate SyncError Event [RAD-155]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="rad-155.html">RAD TF-2: 4.155</a></td>
    </tr>
    <tr>
      <td>Notify Error [RAD-156]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="rad-156.html">RAD TF-2: 4.156</a></td>
    </tr>
  </tbody>
</table>

> Note 1: A Content Creator shall support at least one of the update or select transactions.

### 1:53.1.1 Actors Description and Actor Profile Requirements
Most requirements are documented in RAD TF-2: Transactions. This section documents any additional requirements on this profile's actors.

> Note: Many actor requirements below assume an understanding of FHIRcast and how this profile uses it. Please refer to the [Concepts](https://profiles.ihe.net/RAD/IRA/volume-1.html#15341-concepts) section.

#### 1:53.1.1.1 Image Display

The Image Display presents patients' studies and relevant information to the user so that the user can make diagnostic decisions on the studies.

The Image Display provides tools for the user to navigate images in a study. It may include a worklist component that lets the user select studies to read. It may also include tools to create evidence data such as annotations, key images, etc.

When the Image Display starts up, it shall obtain `hub.url` and `hub.topic` to join a reporting session.

The Image Display shall be able to launch other applications and synchronize them to the same report context through the Hub. It shall have the following capabilities: 
- Start a new reporting session by generating a unique session ID and subscribing to the Hub on its own
- Launch one or more actors and provide them the URL of the Hub actor as `hub.url` and the reporting session ID as `hub.topic`

> Note that the actual application launch method is out of scope of this profile. See [Application Launch Scenarios and Session Discovery](https://build.fhir.org/ig/HL7/fhircast-docs/4-1-launch-scenarios.html) for more details.

##### 1:53.1.1.1.1 Event Handling Requirements

Table 1:53.1.1.1.1-1 specifies behavior requirements for the Image Display when it receives FHIRcast events.

The Image Display shall support all Behaviors shown as “R” in Optionality. The Image Display may support suggested behaviors ("O" in Optionality). For each Received Event in the table, 'Context Key' identifies the context in the Received Event, and 'Resources' specifies the FHIR resource used in the given context.

**Table 1:53.1.1.1.1-1: Event Handling Requirements**

<table class="grid">
  <thead>
    <tr>
      <th>Received Event</th>
      <th>Context Key</th>
      <th>Resource</th>
      <th>Optionality</th>
      <th>Behavior</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">DiagnosticReport-open</td>
      <td><code class="language-plaintext highlighter-rouge">report</code></td>
      <td>DiagnosticReport</td>
      <td>R</td>
      <td>Maintain association of report context to associated patient and study</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">patient</code></td>
      <td>Patient</td>
      <td>R</td>
      <td>Display the patient metadata</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">study</code></td>
      <td>ImagingStudy</td>
      <td>R</td>
      <td>Display the study images</td>
    </tr>
    <tr>
      <td rowspan="4">DiagnosticReport-update</td>
      <td><code class="language-plaintext highlighter-rouge">updates</code></td>
      <td>DiagnosticReport</td>
      <td>R</td>
      <td>Display the updated status value (<code class="language-plaintext highlighter-rouge">DiagnosticReport.status</code>) </td>      
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">updates</code></td>
      <td>DiagnosticReport</td>
      <td>O</td>
      <td>Display the comparison study (<code class="language-plaintext highlighter-rouge">DiagnosticReport.associatedStudy</code>)</td>      
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">updates</code></td>
      <td>ImagingSelection</td>
      <td>O</td>
      <td>Display annotations to selected images</td>      
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">updates</code></td>
      <td>Observation</td>
      <td>O</td>
      <td>Display measurements and annotations</td>
    </tr>
    <tr>
      <td rowspan="2">DiagnosticReport-select</td>
      <td><code class="language-plaintext highlighter-rouge">select</code></td>
      <td>ImagingStudy</td>
      <td>O</td>
      <td>Bring the comparison study to focus</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">select</code></td>
      <td>ImagingSelection</td>
      <td>O</td>
      <td>Bring selected images and annotations to focus</td>      
    </tr>
    <tr>
      <td>DiagnosticReport-close</td>
      <td><code class="language-plaintext highlighter-rouge">report</code></td>
      <td>DiagnosticReport</td>
      <td>R</td>
      <td>Stop display the study images associated to the report context</td>      
    </tr>
    <tr>
      <td>SyncError</td>
      <td><code class="language-plaintext highlighter-rouge">operationoutcome</code></td>
      <td>OperationOutcome</td>
      <td>O</td>
      <td>Notify the user regarding the synchronization error, including the details of the error reported and the Subscriber that reported the error</td>
    </tr>
  </tbody>
</table>

If the report context is resumed, then the Image Display shall be able to restore the application to a state associated to that report context prior to suspension. It is the responsibility of the implementation to determine what elements of application state are significant to the user to be restored when the application resumes the report context.

> Note: The DiagnosticReport-open event does not explicitly indicate if the report context is new or resumed. See [Subscriber Local Context and Local State](volume-1.html#1534110-resuming-contexts-subscriber-local-context-and-local-state) for design considerations.

##### 1:53.1.1.1.2 Event Producing Requirements

When the Image Display wants to publish content events into a reporting session, then it shall be grouped with a Content Creator to enable it to publish events using one or more FHIR resources. See [Section 1:53.1.1.6](volume-1.html#153116-content-creator) for details.

> Note: The FHIR resources which the actor can publish as FHIRcast contents are documented in its CapabilityStatement.

#### 1:53.1.1.2 Report Creator

The Report Creator produces a diagnostic report for patients' studies.

In order to complete a study dictation, the Report Creator:
- May launch other applications and synchronize them to the same report context through the Hub
- May be launched by another application, consume reporting events from the Hub and synchronize itself to the same report context

The Report Creator provides tools for the user to insert report content such as findings and impressions. The Report Creator may use the report content shared by other applications through the Hub (e.g., image references shared by Image Display, or measurements shared by Evidence Creator) to directly update the report (e.g., insert measurements) or generate derived report content (e.g., inject hyperlinks from image references)

When the Report Creator starts up, it shall obtain `hub.url` and `hub.topic` to join a reporting session.

The Report Creator shall be able to launch other applications and synchronize them to the same report context through the Hub. It shall have the following capabilities: 
- Start a new reporting session by generating a unique session ID and subscribing to the Hub on its own
- Launch one or more actors and provide them the URL of the Hub as `hub.url` and the reporting session ID as `hub.topic`

> Note that the actual application launch method is out of scope of this profile. See [Application Launch Scenarios and Session Discovery](https://build.fhir.org/ig/HL7/fhircast-docs/4-1-launch-scenarios.html) for more details.

##### 1:53.1.1.2.1 Event Handling Requirements

Table 1:53.1.1.2.1-1 specifies behavior requirements for the Report Creator when it receives FHIRcast events.

The Report Creator shall support all Behaviors shown as “R” in Optionality. The Report Creator may support suggested behaviors ("O" in Optionality). For each Received Event in the table, 'Context Key' identifies the context in the Received Event, and 'Resources' specifies the FHIR resource used in the given context.

**Table 1:53.1.1.2.1-1: Event Handling Requirements**

<table class="grid">
  <thead>
    <tr>
      <th>Received Event</th>
      <th>Context Key</th>
      <th>Resource</th>
      <th>Optionality</th>
      <th>Behavior</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">DiagnosticReport-open</td>
      <td><code class="language-plaintext highlighter-rouge">report</code></td>
      <td>DiagnosticReport</td>
      <td>R</td>
      <td>Maintain association of report context to associated patient and study</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">patient</code></td>
      <td>Patient</td>
      <td>R</td>
      <td>Be ready for reporting for the patient. If re-opening a previously opened report context, resume to the previous state of the report context when it was suspended.</td>      
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">study</code></td>
      <td>ImagingStudy</td>
      <td>R</td>
      <td>Be ready for reporting for the study. If re-opening a previously opened report context, resume to the previous state of the report context when it was suspended.</td>      
    </tr>
    <tr>
      <td rowspan="3">DiagnosticReport-update</td>
      <td><code class="language-plaintext highlighter-rouge">updates</code></td>
      <td>DiagnosticReport</td>
      <td>R</td>
      <td>Make provided report updates (e.g., change in status, add/remove comparison studies available defined in associatedStudy extension attribute, etc.) for reference in the report</td>      
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">updates</code></td>
      <td>ImagingSelection</td>
      <td>R</td>
      <td>Make images and/or annotations in the ImageSelection resource available for reference in the report</td>      
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">updates</code></td>
      <td>Observation</td>
      <td>R</td>
      <td>Make provided measurements and annotations available for reference in the report</td>      
    </tr>
    <tr>
      <td rowspan="2">DiagnosticReport-select</td>
      <td><code class="language-plaintext highlighter-rouge">select</code></td>
      <td>ImagingSelection</td>
      <td>R</td>
      <td>Bring images and/or annotations <i>to focus</i> and be able to apply user commands (See Note 1)</td>      
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">select</code></td>
      <td>Observation</td>
      <td>R</td>
      <td>Bring measurements and annotations <i>to focus</i> and be able to apply user commands (See Note 1)</td>      
    </tr>
    <tr>
      <td>DiagnosticReport-close</td>
      <td><code class="language-plaintext highlighter-rouge">report</code></td>
      <td>DiagnosticReport</td>
      <td>R</td>
      <td>Stop display of the study report</td>      
    </tr>    
    <tr>
      <td>SyncError</td>
      <td><code class="language-plaintext highlighter-rouge">operationoutcome</code></td>
      <td>OperationOutcome</td>
      <td>O</td>
      <td>Notify the user regarding the synchronization error, including the details of the error reported and the Subscriber that reported the error</td>      
    </tr>
  </tbody>
</table>

> Note 1: The Report Creator may provide application logic that can make use of the selected resources. For example, a nodule (as `ImagingSelection`) and corresponding measurements (as `Observation`) are selected. Then the radiologist issues a voice command "insert hyperlink". In this case, the Report Creator applies the command with the selected resources and inserts a hyperlink reference to the nodule with measurement.

If the report context is resumed, then the Report Creator shall be able to restore the application to a state associated to that report context prior to suspension. It is the responsibility of the implementation to determine what elements of application state are significant to the user to be restored when the application resumes the report context.

> Note: The DiagnosticReport-open event does not explicitly indicate if the report context is new or resumed. See [Subscriber Local Context and Local State](volume-1.html#1534110-resuming-contexts-subscriber-local-context-and-local-state) for design considerations.

##### 1:53.1.1.2.2 Event Producing Requirements

The Report Creator shall be grouped with a Content Creator to publish report status update associated to the report anchor context. In the `DiagnosticReport-update` context change request, the report status update shall be specified in `DiagnosticReport.status` in the `update` context key.

The Report Creator may publish other content updates. See [Section 1:53.1.1.6](volume-1.html#153116-content-creator) for details.

> Note: The Report Creator documents the FHIR Resources it can publish as FHIRcast content in its CapabilityStatement.

#### 1:53.1.1.3 Worklist Client

The Worklist Client provides a reporting worklist to the user.

When a user selects a study from the worklist, the Worklist Client opens a new report context to synchronize other applications through the Hub to enable dictation on the studies.  The Worklist Client may also launch other applications (e.g., Image Display, Report Creator, etc.) if necessary. 

When the Worklist Client starts up, it shall obtain `hub.url` and `hub.topic` to join a reporting session.

The Worklist Client shall be able to launch other applications and synchronize them to the same report context through the Hub. It shall have the following capabilities: 
- Start a new reporting session by generating a unique session ID and subscribing to the Hub on its own
- Launch one or more actors and provide them the URL of the Hub as `hub.url` and the reporting session ID as `hub.topic`

> Note that the actual application launch method is out of scope of this profile. See [Application Launch Scenarios and Session Discovery](https://build.fhir.org/ig/HL7/fhircast-docs/4-1-launch-scenarios.html) for more details.

When a study dictation is complete, the Worklist Client consumes the report anchor context update event so that it can mark the study as dictated and remove it from the worklist.

##### 1:53.1.1.3.1 Event Handling Requirements

Table 1:53.1.1.3.1-1 specifies behavior requirements for the Worklist Client when it receives FHIRcast events.

The Worklist Client shall support all Behaviors shown as “R” in Optionality. The Worklist Client may support suggested behaviors ("O" in Optionality). For each Received Event in the table, 'Context Key' identifies the context in the Received Event, and 'Resources' specifies the FHIR resource used in the given context.

**Table 1:53.1.1.3.1-1: Event Handling Requirements**

<table class="grid">
  <thead>
    <tr>
      <th>Received Event</th>
      <th>Context Key</th>
      <th>Resource</th>
      <th>Optionality</th>
      <th>Behavior</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">DiagnosticReport-open</td>
      <td><code class="language-plaintext highlighter-rouge">report</code></td>
      <td>DiagnosticReport</td>
      <td>R</td>
      <td>Maintain association of report context to associated patient and study.</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">patient</code></td>
      <td>Patient</td>
      <td>R</td>
      <td>Display the patient metadata</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">study</code></td>
      <td>ImagingStudy</td>
      <td>R</td>
      <td>Display the study metadata</td>
    </tr>
    <tr>
      <td>DiagnosticReport-update</td>
      <td><code class="language-plaintext highlighter-rouge">updates</code></td>
      <td>DiagnosticReport</td>
      <td>R</td>
      <td>Reflect updated status <code class="language-plaintext highlighter-rouge">DiagnosticReport.status</code> in the worklist</td>
    </tr>
    <tr>
      <td>DiagnosticReport-select</td>
      <td><code class="language-plaintext highlighter-rouge">select</code></td>
      <td>Any</td>
      <td>O</td>
      <td>Process selected resources if applicable</td>
    </tr>
    <tr>
      <td>DiagnosticReport-close</td>
      <td><code class="language-plaintext highlighter-rouge">report</code></td>
      <td>DiagnosticReport</td>
      <td>R</td>
      <td>Stop processing the study associated to the report context</td>
    </tr>    
    <tr>
      <td>SyncError</td>
      <td><code class="language-plaintext highlighter-rouge">operationoutcome</code></td>
      <td>OperationOutcome</td>
      <td>O</td>
      <td>Notify the user regarding the synchronization error, including the details of the error reported and the Subscriber that reported the error</td>
    </tr>
  </tbody>
</table>

If the report context is resumed, then the Worklist Client shall be able to restore the application to a state associated to that report context prior to suspension. It is the responsibility of the implementation to determine what elements of application state are significant to the user to be restored when the application resumes the report context.

> Note: The DiagnosticReport-open event does not explicitly indicate if the report context is new or resumed. See [Subscriber Local Context and Local State](volume-1.html#1534110-resuming-contexts-subscriber-local-context-and-local-state) for design considerations.

##### 1:53.1.1.3.2 Event Producing Requirements

When the Worklist Client wants to publish content events into a reporting session, then it shall be grouped with a Content Creator to enable it to publish events using one or more FHIR resources. See [Section 1:53.1.1.6](volume-1.html#153116-content-creator) for details.

> Note: The FHIR resources which the actor can publish as FHIRcast contents are documented in its CapabilityStatement.

#### 1:53.1.1.4 Evidence Creator

The Evidence Creator consumes events in the reporting session and producing evidence data such as annotations, measurements, key image references, etc. for the patients' studies. For example, an Evidence Creator may detect lung nodules and produce measurements and bounding boxes of the nodules detected.

The Evidence Creator may capture the evidence data in FHIR resource format (e.g., lung nodule measurements as FHIR Observation resource, image references and bounding box as FHIR ImagingSelection resource) and share them by publishing content sharing events back to the reporting session through the Hub.

Alternatively, the Evidence Creator may capture the evidence data in formats, such as DICOM SR, that are shared with other systems using methods outside of this profile (e.g., as Evidence Creator in the IHE AIR Profile). In this case, other synchronizing applications in the same reporting session may not be aware of the evidence data created by the Evidence Creator.

The Evidence Creator may be a standalone application such as an Specialty AI application, or it may be grouped with another actor such as Image Display.

When the Evidence Creator starts up, it shall obtain `hub.url` and `hub.topic` to join a reporting session.

> Note that the actual application launch method is out of scope of this profile. See [Application Launch Scenarios and Session Discovery](https://build.fhir.org/ig/HL7/fhircast-docs/4-1-launch-scenarios.html) for more details.

##### 1:53.1.1.4.1 Event Handling Requirements

In Table 1:53.1.1.4.1-1 specifies behavior requirements for the Evidence Creator when it receives FHIRcast events.

The Evidence Creator shall support all Behaviors shown as “R” in Optionality. The Evidence Creator may support suggested behaviors ("O" in Optionality). For each Received Event in the table, 'Context Key' identifies the context in the Received Event, and 'Resources' specifies the FHIR resource used in the given context.

**Table 1:53.1.1.4.1-1: Event Handling Requirements**

<table class="grid">
  <thead>
    <tr>
      <th>Received Event</th>
      <th>Context Key</th>
      <th>Resource</th>
      <th>Optionality</th>
      <th>Behavior</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">DiagnosticReport-open</td>
      <td><code class="language-plaintext highlighter-rouge">report</code></td>
      <td>DiagnosticReport</td>
      <td>R</td>
      <td>Maintain association of report context to associated patient and study</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">patient</code></td>
      <td>Patient</td>
      <td>R</td>
      <td>Process the patient data</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">study</code></td>
      <td>ImagingStudy</td>
      <td>R</td>
      <td>Process the study data</td>
    </tr>
    <tr>
      <td>DiagnosticReport-update</td>
      <td>Any</td>
      <td>Any</td>
      <td>O</td>
      <td>Update the report, patient or study record, or add/modify/delete received contents, if applicable.</td>
    </tr>
    <tr>
      <td>DiagnosticReport-select</td>
      <td>Any</td>
      <td>Any</td>
      <td>O</td>
      <td>Process the applicable selected resources</td>
    </tr>
    <tr>
      <td>DiagnosticReport-close</td>
      <td><code class="language-plaintext highlighter-rouge">report</code></td>
      <td>DiagnosticReport</td>
      <td>R</td>
      <td>Stop display the study and stop sharing new content to the report context (See Note 1)</td>
    </tr>    
    <tr>
      <td>SyncError</td>
      <td><code class="language-plaintext highlighter-rouge">operationoutcome</code></td>
      <td>OperationOutcome</td>
      <td>O</td>
      <td>Notify the user regarding the synchronization error, including the details of the error reported and the Subscriber that reported the error</td>
    </tr>
  </tbody>
</table>

> Note 1: If the Evidence Creator is displaying the study associated to the report context, then it shall stop displaying the study. The Evidence Creator is not prohibited to continue processing the context and content according to its business logic. For example, capturing the results of its processing in a DICOM SR object.

If the report context is resumed, then the Evidence Creator shall be able to restore the application to a state associated to that report context prior to suspension. It is the responsibility of the implementation to determine what elements of application state are significant to the user to be restored when the application resumes the report context.

> Note: The DiagnosticReport-open event does not explicitly indicate if the report context is new or resumed. See [Subscriber Local Context and Local State](volume-1.html#1534110-resuming-contexts-subscriber-local-context-and-local-state) for design considerations.

##### 1:53.1.1.4.2 Event Producing Requirements

When the Evidence Creator wants to publish content events into a reporting session, then it shall be grouped with a Content Creator to enable it to publish events using one or more FHIR resources. See [Section 1:53.1.1.6](volume-1.html#153116-content-creator) for details.

> Note: The FHIR resources which the actor can publish as FHIRcast contents are documented in its CapabilityStatement.

#### 1:53.1.1.5 Stateless Evidence Creator

The Stateless Evidence Creator has the same requirements as the Evidence Creator, except that it is *not* required to detect if the received DiagnosticReport-open event is a new report context or a report context that is resumed, and it is *not* required to restore application state in case of resuming a report context (See Evidence Creator [Event Handling Requirements](volume-1.html#1531141-event-handling-requirements) for details).

#### 1:53.1.1.6 Content Creator

The Content Creator creates and selects additional contents in report contexts of the reporting session which are the basis of synchronization and collaboration between the subscribing actors.

> Note: This actor represents content creation / selection capabilities that may be present in implementation of other actors. As such, the Content Creator is required to be grouped with another actor. This actor cannot be claimed as a standalone actor.

For example, when an Image Display user clicks on the bounding box of a detected nodule, the grouped Content Creator publishes a selection event referencing the affected images and bounding boxes as an ImagingSelection resource, and referencing the corresponding measurements as an Observation resource. Upon receiving the event, a Report Creator might show those details in a side panel to the user. Finally the user issues a voice command to the Report Creator to inject a hyperlink, which is adding to the finding section.

The Content Creator shall support at least one of the following capabilities:
- Publish context and/or content changes as events to a reporting session
- Select one or more contents and publish the selection events

The Content Creator shall use the specified FHIR resource if it implements any of the capabilities listed in Table 1:53.1.1.6-1:

**Table 1:53.1.1.6-1: FHIR Resources Used For Content Sharing Capability** 

| Capability | FHIR Resource |
| -- | -- |
| Update report status  | DiagnosticReport |
| Add, update or remove comparison study used during reporting | DiagnosticReport |
| Capture DICOM series or image references (including image or non-image objects such as GPSP, Structured Report, Segmentation, etc.) | ImagingSelection |
| Capture 2D or 3D regions within an imaging study frame of reference (See Note) | ImagingSelection |
| Capture measurements or textual annotations | Observation |
{: .grid}

The Content Creator may use other resources for purposes other than those defined in this profile.

The Content Creator shall only publish DiagnosticReport-select events for user initiated selection.

When the grouped actor restores the application to a previous known state due to resuming a report context, if there are any contents known to be selected by the user prior to the suspension and the grouped actor is the originator of the corresponding DiagnosticReport-select event, then
- The grouped actor shall prompt the user if the selections are still valid
- If valid, then the Content Creator shall send a DiagnosticReport-select event for the selected resources

#### 1:53.1.1.7 Watcher

The Watcher listens to events in a session and performs actions according to it business logic. The specific actions are out of scope of this profile.

For example, the Watcher consumes the initiation and termination of report contexts and calculates the turnaround time for different types of studies in different departments. Another example is a Watcher that monitors how often an Evidence Creator publishes content sharing events and correlates how effective an AI application is with respect to the turnaround time by comparing the time before and after the Evidence Creator is deployed.

When the Watcher starts up, it shall obtain `hub.url` and `hub.topic` to join a reporting session.

> Note that the actual application launch method is out of scope of this profile. See [Application Launch Scenarios and Session Discovery](https://build.fhir.org/ig/HL7/fhircast-docs/4-1-launch-scenarios.html) for more details.

##### 1:53.1.1.7.1 Event Handling Requirements

Table 1:53.1.1.7.1-1 specifies behavior requirements for the Watcher when it receives FHIRcast events.

The Watcher shall support all Behaviors shown as “R” in Optionality. The Watcher may support suggested behaviors ("O" in Optionality). For each Received Event in the table, 'Context Key' identifies the context in the Received Event, and 'Resources' specifies the FHIR resource used in the given context.

**Table 1:53.1.1.7.1-1: Event Handling Requirements**

<table class="grid">
  <thead>
    <tr>
      <th>Received Event</th>
      <th>Context Key</th>
      <th>Resource</th>
      <th>Optionality</th>
      <th>Behavior</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">DiagnosticReport-open</td>
      <td><code class="language-plaintext highlighter-rouge">report</code></td>
      <td>DiagnosticReport</td>
      <td>R</td>
      <td>Maintain association of report context to associated patient and study</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">patient</code></td>
      <td>Patient</td>
      <td>R</td>
      <td>Process according to business logic</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">study</code></td>
      <td>ImagingStudy</td>
      <td>R</td>
      <td>Process according to business logic</td>
    </tr>
    <tr>
      <td>DiagnosticReport-update</td>
      <td>Any</td>
      <td>Any</td>
      <td>O</td>
      <td>Update the report, patient or study record, or add/modify/delete received contents, if applicable.</td>
    </tr>
    <tr>
      <td>DiagnosticReport-select</td>
      <td>Any</td>
      <td>Any</td>
      <td>O</td>
      <td>Process the applicable selected resources</td>
    </tr>
    <tr>
      <td>DiagnosticReport-close</td>
      <td><code class="language-plaintext highlighter-rouge">report</code></td>
      <td>DiagnosticReport</td>
      <td>R</td>
      <td>Process according to business logic</td>
    </tr>    
    <tr>
      <td>SyncError</td>
      <td><code class="language-plaintext highlighter-rouge">operationoutcome</code></td>
      <td>OperationOutcome</td>
      <td>O</td>
      <td>Process the synchronization error, including the details of the error reported and the Subscriber that reported the error</td>
    </tr>
  </tbody>
</table>

##### 1:53.1.1.7.2 Event Producing Requirements

When the Watcher wants to publish content events into a reporting session, then it shall be grouped with a Content Creator to enable it to publish events using one or more FHIR resources. See [Section 1:53.1.1.6](volume-1.html#153116-content-creator) for details.

> Note: The FHIR resources which the actor can publish as FHIRcast contents are documented in its CapabilityStatement.

#### 1:53.1.1.8 Hub

The Hub manages event flows between Subscribers in reporting sessions and maintaining the current context.

The Hub authorizes the following:
- which Subscriber has permission to invoke what requests
- which context and content a Subscriber is eligible to access and in what type (e.g., read only, write only or ready and write)

> Note: This profile does not mandate a specific authorization mechanism. See [Cross Profile Considerations](volume-1.html#1536-ira-cross-profile-considerations) for recommendations.

The Hub shall support [content sharing](https://build.fhir.org/ig/HL7/fhircast-docs/2-10-ContentSharing.html).

The Hub shall monitor the established websocket connections. If it detects a websocket connection issue with a Subscriber, then the Hub shall:
- Unsubscribe the Subscriber and drop the websocket connection
- Send a SyncError notification to other Subscribers using \[[RAD-155](rad-155.html)\]

##### 1:53.1.1.8.1 Event Handling Requirements

The Hub shall be able to process all valid events conforming to the FHIRcast [Event Format](https://build.fhir.org/ig/HL7/fhircast-docs/2-3-Events.html) received using FHIRcast [Request Context Change](https://build.fhir.org/ig/HL7/fhircast-docs/2-6-RequestContextChange.html) requests.

> Note: This implies that the Hub cannot only process events defined in this profile. The Hub is required to support other valid events regardless of whether they are defined in the FHIRcast [Event Catalog](https://build.fhir.org/ig/HL7/fhircast-docs/3_Events.html). For example, Subscribers in a reporting session are permitted to send Request Context Change requests with events (e.g., `HeartBeat`, `ImagingStudy-*`, etc.) beyond those explicitly defined in this profile.

For all received events, the Hub shall support the following core behaviors:
- It shall receive and distribute the event to all Subscribers subscribed to that event type (see [Event Notification](https://build.fhir.org/ig/HL7/fhircast-docs/2-5-EventNotification.html))
- It shall manage the current context in the session for all context-change events (i.e., `*-open` and `*-close` events) (see [Request Context Change](https://build.fhir.org/ig/HL7/fhircast-docs/2-6-RequestContextChange.html))
- It shall manage the current content in the session for all content sharing events (i.e., revise the shared FHIR resources in accordance with received `*-update` events) (see [Content Sharing](https://build.fhir.org/ig/HL7/fhircast-docs/2-10-ContentSharing.html))
- It shall serve as a transaction coordinator to avoid lost updates and other out of sync conditions when processing content sharing events (i.e., `*-update` and `*-select` events) 
- If it receives `*-update`, `*-select` or `*-close` events for a context that is not opened, then it shall return `409` Conflict response.

Additional profile requirements for specific events are defined in the corresponding transactions.

## 1:53.2 IRA Actor Options

Options that may be selected for each actor in this implementation guide, are listed in Table 1:53.2-1 below. Dependencies between options, when applicable, are specified in notes.

**Table 1:53.2-1: IRA - Actors and Options**

<table class="grid">
  <thead>
    <tr>
      <th>Actor</th>
      <th>Option Name</th>
      <th>Reference</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Image Display</td>
      <td>No options defined</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Report Creator</td>
      <td>No options defined</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Worklist Client</td>
      <td>No options defined</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Evidence Creator</td>
      <td>No options defined</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Stateless Evidence Creator</td>
      <td>No options defined</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Content Creator</td>
      <td>No options defined</td>
      <td>–</td>
    </tr>
    <tr>
      <td>Watcher</td>
      <td>No options defined</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Hub</td>
      <td>No options defined</td>
      <td>–</td>
    </tr>
  </tbody>
</table>

## 1:53.3 IRA Required Actor Groupings

An actor from this profile (Column 1) shall implement all of the required transactions and/or
content modules in this profile ***in addition to all*** of the requirements for the grouped actor (Column 3).

In some cases, required groupings are defined as at least one of an enumerated set of possible actors; this is designated by merging column one into a single cell spanning multiple potential grouped actors. Notes are used to highlight this situation.

Section 1:53.5 describes some optional groupings that may be of interest for security
considerations and Section 1:52.6 describes some optional groupings in other related profiles.

**Table 1:53.3-1: IRA Required Actor Groupings**

| IRA Actor | Grouping Condition | Actor(s) to be grouped with | Reference |
|-----------|--------------------|-----------------------------|-----------|
| Image Display | -- | None | -- |
| Report Creator | -- | IRA / Content Creator | [RAD TF-1: 53.1.1.2](volume-1.html#153112-report-creator) |
| Worklist Client | -- | None | -- |
| Evidence Creator | -- | None | -- |
| Stateless Evidence Creator | -- | None | -- |
| Content Creator (Note 1) | -- | IRA / Image Display<br>IRA / Report Creator<br>IRA / Worklist Client<br>IRA / Evidence Creator<br>IRA / Stateless Evidence Creator | [RAD TF-1: 53.1.1](volume-1.html#15311-actors-description-and-actor-profile-requirements) |
| Watcher | -- | None | -- |
| Hub | -- | None | -- |
{: .grid}

> Note 1: The Content Creator shall be grouped with at least one of the actors in Column 3.

## 1:53.4 IRA Overview

### 1:53.4.1 Concepts

#### 1:53.4.1.1 Publish and Subscribe Model

At its heart, this profile synchronizes a group of applications using a Publish and Subscribe model as implemented by [FHIRcast](https://build.fhir.org/ig/HL7/fhircast-docs/index.html) which in turn is an implementation of [WebSub](https://www.w3.org/TR/websub/).

The following are some key concepts:
- Participating applications are `Subscribers` that register with and communicate with a `Hub`
- The `Hub` only communicates with authenticated `Subscribers`
- `Subscribers` do not communicate with other `Subscribers` directly
- When `Subscribers` generate data that should be made available to other applications, or perform actions of which other applications should be aware, they *publish* it by sending an event request with the relevant details to the Hub
- A Starting Application is a `Subscriber` that may launch other applications, providing them with the address of the `Hub` and the `topic ID` so they can join the same `session`
- The `Hub` forwards accepted event requests from a `Subscriber` to other `Subscribers` subscribed to that type of event
- `Subscribers` can configure their subscription to limit what types of events the `Hub` forwards to them
- `Subscribers` react to events from the `Hub` based on their internal business logic
- It is not necessary (nor possible) for `Subscribers` to be aware of what other `Subscribers` (if any) are receiving an event they requested to be forwarded by the `Hub`, nor how other `Subscribers` react to the event
- The `Hub` maintains the current state of content (if any) associated with all open contexts
- `Subscribers` can request the current context and associated contents from the `Hub`
- The `Hub` can simultaneously manage multiple groups of `Subscribers` and their associated data in different `sessions`
- Each `session` is identified by a unique “topic ID”

#### 1:53.4.1.2 Terminology and Model

The terminology used in FHIRcast and adopted in this profile can be found in the [FHIRcast Glossary](https://build.fhir.org/ig/HL7/fhircast-docs/5_glossary.html).

Figure 1:53.4.1.2-1 is a representation of the data model.

**Figure 1:53.4.1.2-1: FHIRcast Concept Data Model**

<div>
    <img src="data_model.png" width="80%">
</div>
<br clear="all">

**Figure 1:53.4.1.2-1: FHIRcast Concept Data Model**

Figure 1:53.4.1.2-2 is a representation of the interaction model.

<div>
    <img src="interaction_model.png" width="80%">
</div>
<br clear="all">

**Figure 1:53.4.1.2-2: IRA Concept Interaction Model**

#### 1:53.4.1.3 Long Session and Short Context

A `Session` is an abstract concept representing a shared workspace, such as a user's login session across multiple applications or a shared view of one application distributed to multiple users. A session results from a user logging into an application and can encompass one or more workflows.

For instance, a reporting session is a shared workspace across multiple applications to communicate activities of a user, such as initiating a new report context when opening a study for reporting. These applications as `Subscribers` share events using the `Hub`. As long as there are `Subscribers` associated to a `Session`, the `Session` stays open. Therefore a `Session` has a long duration.

A `Context` is a FHIR resource associated with a `Session` which indicates a subject on which applications should synchronize as appropriate to their functionality. As soon as the subject is complete, the corresponding `Context` can be closed. Therefore a `Context` has a limited duration within a `Session`.

#### 1:53.4.1.4 Events vs Commands

Communication patterns between two systems fall in two general categories: `Events` and `Commands`.

`Events` represent facts that have happened. For example, `DiagnosticReport-open` represents an event that an application has opened a study for reporting. Note that an event has an initiator but no target recipient(s). It is the responsibility of any applications that are interested in such events to subscribe to them. Any applications subscribed to the event will receive the event and the application can determine how to process the event. The application that is producing the event is not aware of the actions being performed by the consuming applications, unless these consuming applications in turn publishes additional events.

In this profile, the messages that a `Subscriber` sends to the `Hub` represents an `Event`. Each event captures what has happened, and there is no explicit recipient(s) specified.

On the other hand, `Commands` represent intention. In addition to an initiator, `Commands` have specific target recipient(s). For example, Send-Study represents an intention to send a study. The application that sends the commands often has direct knowledge of which applications should execute the commands, or delegate to a proxy service that has the knowledge.

> Note: Some implementations may define commands using [Extensions](https://build.fhir.org/ig/HL7/fhircast-docs/2-8-Extensions.html) or custom events with explicit recipient(s). These are out of scope of this profile.

#### 1:53.4.1.5 Timing of Sending an Event

A starting application is a subscriber that initiates a context change request. From the starting application perspective, it is desirable for all subscribers to be synchronized as soon as possible. On the other hand, FHIRcast is a network protocol which incurs a non-trivial cost to send each event. Therefore, a starting application should take into account when an action is considered to be complete or stable, and hence ready to be captured and communicated as events.

For example, when a user is actively making measurements or annotations, instead of capturing every change a user makes (e.g., incremental changes in size or location of a shape) as an event which can result in many intermittent and partial events, a starting application may use specific triggers (e.g., when a user saves the changes) or an idle time threshold to detect when the user completed making the changes. The application then creates the corresponding event(s) to capture the result.

On the other hand, this profile is designed to communicate _in-progress_ data as soon as possible. Therefore it is not desirable for the starting application to _wait_ too long. For example, if the starting application supports exporting measurements and annotations as DICOM SR or other DICOM objects, it is not appropriate to wait until the DICOM objects are created before sending the corresponding event.

A reasonable approach could be for an application to acquire a complete measurement and perhaps some measurement characteristics, then send an event request containing this information to the Hub.

This profile does not mandate any specific implementation design regarding when a starting application should capture the result of an action as an event. The intention is that the starting application will send an event as soon as feasible so that all subscribers in a reporting session can be synchronized and provide a good user experience.

#### 1:53.4.1.6 Event Awareness vs Event Consumption

`Event Awareness` means a synchronizing application, upon receiving an event from the `Hub`, has the knowledge that an event has happened.

`Event Consumption` means a synchronizing application, upon receiving an event from the `Hub`, reacts to the event and performs some actions according to its business logic.

This means from the content sharing application perspective, in order to synchronize the context with other applications, it may be desirable for a starting application to publish events frequently so that other subscribers can be aware of the same context as in the content sharing application.

On the other hand, from the subscribing application perspective, it is up to its business logic to determine how to react to the received event. This business logic may be automatic or require additional user input.

For example, when the user goes through the study images in Image Display (a content sharing application), for each nodule that the user identified (e.g., 1, 2, ..., 9, 10), the Image Display publishes a corresponding event. In the Report Creator (a synchronizing application), for each event received, it keeps track of the nodule in its nodule tracking bookmark. Once the user finished reviewing the full study, the user uses the nodule tracking bookmark in the Report Creator and selects the top 3 (e.g., 2, 5, 9) to include in the final report. Note that since the Report Creator is aware of all the nodules observed by synchronizing the context with the Image Display, selecting a subset of the nodules to be included in the final report (i.e., event consumption) is an operation internal to the Report Creator.

#### 1:53.4.1.7 FHIRcast event-based content sharing vs FHIR server based content sharing

FHIRcast uses FHIR resources to capture the context and content in an event. These FHIR resources may be transient, meaning that they do not necessarily exist in any system, nor are they expected to be persisted by any system. Furthermore, even if an application decides to persist the FHIR resource(s), it is not required to use the same resource ID in the event as the ID of the persisted resource. The application can generate new IDs instead. See [Content Sharing](https://build.fhir.org/ig/HL7/fhircast-docs/2-10-ContentSharing.html) for details.

#### 1:53.4.1.8 Local Tracking of Context

The `DiagnosticReport-open` event includes both the `report` anchor context and associated contexts `patient` and `study`. Subsequent event(s) for this anchor context will only provide the `report` context. Therefore, it is up to the Subscriber to record internally the `patient` and `study` contexts associated with the `report` anchor context if that information is relevant to its business logic. 

#### 1:53.4.1.9 Suspend and Resume Report Context

Occasionally a report context may be _suspended_, meaning that a starting application opens a subsequent report context without closing an initial report context. For example, a radiologist needs to suspend a report on a study in order to review an urgent study.

The `Hub` switches the `Current Context` to the urgent study being opened. The `Hub` distributes the open event to all subscribers to keep them synchronized. The initial report context is still maintained by the `Hub` since it is not closed, but it is _suspended_ (i.e., not the `Current Context`). 

When the user finishes reviewing the urgent study, the report context of the urgent study is closed and all subscribers receive the close event. The `Hub` sets the `Current Context` to *empty* after closing the `Current Context`.

The starting application sends a *new* open event for the _suspended_ report context to make it the `Current Context`. All subscribers receive the open event and resume to the _suspended_ report context. Alternatively the starting application could choose to open any other report context as appropriate.

See [Use Case #3](volume-1.html#153423-use-case-3-suspend-and-resume-flow) for more details.

#### 1:53.4.1.10 Resuming contexts: Subscriber Local Context and Local State

`Local context` and `local state` refers to the information specific to each Subscriber that it maintains locally for each report context in the session that it participates in. When resuming to a previous context, this information, if present, would enable the subscribing application to restore to the same state associated to the report context as before the suspension.

`Local context` refers to the Subscriber's view / copy of the shared context maintained in the Hub.

`Local state` refers to information related to a given context that is not replicated into the Hub This `local state` may keep track of application specific information, such as

- layout of the viewports
- image frames displayed in each viewport
- any user activity (e.g., user selected the image frame in a viewport)

Upon receiving events from the `Hub`, a Subscriber maintains its `local context` according to its need. i.e., the Subscriber is not to maintained a full copy of the context that is in the Hub, since some parts of the context may not be relevant to the Subscriber activities.

It is up to the Subscriber to decide on implementation details, such as:

- How much state that it can resume?
- How long should open contexts be maintained?
- How to detect if open contexts become stale?
- How to handle stale contexts?

#### 1:53.4.1.11 Deployment Considerations

The Hub can be a standalone application or embedded within another application (e.g., the Image Manager, Report Creator and Worklist Client are grouped with the Hub independently). As a result, which Hub to use for the reporting session needs to be configurable during deployment.

The Hub can be deployed on premises or in the cloud. The other actors may or may not be deployed in the same location as the Hub. Since this profile is aimed at providing streamline user experience for all integrated applications, the effectiveness of this profile depends on timely communications with the Hub, whether it is the context change request, or the subsequent event distribution. Therefore it is important to have a reliable low latency network connection between applications and the Hub, taking into account all the network appliances in between (e.g., firewall, reverse proxy, load balancer, etc.).

#### 1:53.4.1.12 Selection Synchronization

When a user selects some content in an application, for example, an image frame with an observed nodule in the Image Display, this can trigger the application to send a [DiagnosticReport-select](https://build.fhir.org/ig/HL7/fhircast-docs/3-6-4-DiagnosticReport-select.html) event referencing the corresponding selected content (e.g., an image frame). This event enables other applications to trigger corresponding synchronization logic based on the selected content. There are several different behavioral patterns a receiving application can implement:

- A receiving application can react to the selected content directly. For example, an Evidence Creator can retrieve the referenced image frame in the event and trigger a nodule analysis algorithm comparing this nodule with a same nodule in a prior study.
- A receiving application can react to the selected content indirectly. For example, a Report Creator can keep track of the referenced image frame in the event. Then the user can issue a voice command (e.g., 'insert hyperlink') to the Report Creator which triggers the Report Creator to insert a hyperlink in the report based on the selected image frame. 

These behavioral patterns can be bidirectional. For example, an Evidence Creator selects a nodule in its analysis, which triggers the Evidence Creator to sends a DiagnosicReport-select event referencing this nodule and the corresponding image frame. Upon receiving this event, the Image Display displays the referenced image frame along with other annotations automatically.

It is important to note the following characteristics of the FHIRcast `*-select` events:

- There is a single selection within a session
- A new selection implicitly unselect any previously selected resources

As a result, selection is intended for user initiated synchronization. It is not suitable for automatic background navigation synchronization due to potential race condition.

Furthermore, due to the implicit unselect semantics, if multiple items are intended to be selected and processed together, then it is necessary to select all the items first and then send a single `DiagnosticReport-select` event with all selected items, rather than sending multiple select events, each with a single item.

### 1:53.4.2 Use Cases

#### 1:53.4.2.1 Use Case \#1: Basic Reporting

In a basic reporting session, a user uses two actors, the Image Display and the Report Creator, to complete reporting on a study.

##### 1:53.4.2.1.1 Basic Reporting Use Case Description

The Basic Reporting Use Case is intended to capture the common reporting activities happened during a reporting session. The Image Display handles all user needs for displaying the study and the Report Creator handles all user needs for report creation.

> Note: Figure 1:53.4.2.1.2-1 shows a high level workflow and highlights the user interaction with the two actors involved. This use case is broken down into multiple steps. The steps shown in the diagram are not actual transactions. The interactions between the Image Display and Report Creator during a reporting session are omitted to highlight the user interactions more clearly. The hyperlinks provided in the diagram link to the subsections that describe the corresponding steps with actual transactions in details. Furthermore, the [Examples](example.html) tab contains sample events following this use case.

In this use case,
- Before reporting starts, the Image Display launches the Report Creator to join a reporting session
- The Image Display, with the built-in worklist function, has a set of studies waiting for reporting
- Radiologist uses the worklist to select studies to report
- Radiologist opens a study in Image Display to view the study images and patient metadata
- Radiologist reports on the study using the Report Creator
- While reporting on the study, Radiologist performs measurements and adds annotations on the images using tools provided by the Image Display
- Radiologist selects some of the measurements made and uses voice commands to auto-populate the report with the selected measurements
- Radiologist completes and signs off the report and moves on to the next study in the worklist
- Eventually, Radiologist finishes all studies in the reporting worklist and closes the applications

> Note: In more complex scenarios, a separate Worklist Client can be used to drive the Image Display and Report Creator, while the Image Display can launch a separate Evidence Creator on demand to perform advanced visualization and measurements. See [Use Case 2](volume-1.html#153422-use-case-2-complex-reporting) for an example.

##### 1:53.4.2.1.2 Basic Reporting Process Flow

<div>
{%include ReportingFlow.svg%}
</div>
<br clear="all">

**Figure 1:53.4.2.1.2-1: Basic Reporting Flow in IRA Profile**

###### 1:53.4.2.1.2.1 Step 1: Open Reporting Session

When a radiologist starts reporting, the Image Display, as a Starting Application, starts a reporting session.

Note that there is no explicit creation of a session. If the Hub receives a session (i.e., topic ID) that does not already exist, then the Hub will automatically create the session and add the subscriber (i.e., Image Display) to the session.

The Image Display subscribes to events so that it can:
- Receive events published by other Subscribers.
- Receive the version ID of any events necessary for content sharing (see [Responsibilities of a FHIRcast Hub and a Subscriber](https://build.fhir.org/ig/HL7/fhircast-docs/2-10-ContentSharing.html#responsibilities-of-a-fhircast-hub-and-a-subscriber) for more information).
- Receive synchronization error events from the Hub or from other Subscribers.

Once the Image Display completes its subscription, it launches the Report Creator. The Report Creator, as a Synchronizing Application, can follow the context and content events automatically.

> Note that *launching* the Report Creator (or any Synchronizing Application) by the Image Display (or any Starting Application) may be implemented in different ways. For example, the Synchronizing Application can be started and terminated, or it can be put in focus and minimized when not needed but kept running in the background for efficiency, or any combination thereof.

When launched, the first thing that the Report Creator does as a Synchronizing Application is to subscribe to the reporting session. The information about the Hub and the session is provided by the Image Display during launch.

Furthermore, the Report Creator queries the Hub to get the current context to ensure it has the latest context and content. Since the reporting session has just begun, and the Image Display has not yet opened any report context, the result of the query will be empty.

<div>
{%include step1-open-reporting-session.svg%}
</div>
<br clear="all">

**Figure 1:53.4.2.1.2.1-1: Open Reporting Session Flow in IRA Profile**

###### 1:53.4.2.1.2.2 Step 2: Open Study in Context

When the radiologist selects a study in the worklist, the Image Display, as a Starting Application, opens a new report context. Once the Hub accepts the event, it broadcasts the event to all Subscribers.

The Report Creator, as a Synchronizing Application, receives the event and opens the corresponding procedure for the study.

Furthermore, the event has a version ID. For the Image Display as a Starting Application, including the version ID when submitting the next event allows the Hub to ensure proper event sequence. For the Report Creator as a Synchronizing Application, keeping track of the version ID enables it to check if it missed any prior events. Event sequencing is important for content sharing because all updates and selects are expected to be applied in the same sequence as they are emitted by one or more Content Creators (See [FHIRcast event-based content sharing](https://build.fhir.org/ig/HL7/fhircast-docs/2-10-1-ContentSharingFHIRcastMessaging.html) for details).

<div>
{%include step2-open-study-in-context.svg%}
</div>
<br clear="all">

**Figure 1:53.4.2.1.2.2-1: Open Study in Context Flow in IRA Profile**

> Note: Amending a report uses the same workflow as in Step 2. A *new* report context is opened with the same patient and study context as the original report. 
>
> Having opened the new report context, it will be up to the Report Creator to determine whether the original report is being amended or a new report is being added to the study. A *new* report context is used in either case because the report context associated with the original report was transient and is no longer available for use.
>
> It is possible that actors such as the Report Creator may choose to populate content related to the original report back into the new report context, e.g., to facilitate further editing.

###### 1:53.4.2.1.2.3 Step 3: Add Content (Optional)

Sometimes the radiologist may annotate the images with markups and measurements. When this happens, the Image Display, grouped with the Content Creator, updates the report context at the Hub with new content using Update Report Content [RAD-150]. The Hub broadcasts the event to all Synchronizing Applications.

When the Report Creator receives and accepts the event, it can apply the updates according to its business logic. For example, it may automatically create a hyperlink in the report, or keep track of the content in a panel for the user to perform other activities later.

<div>
{%include step3-add-measurements.svg%}
</div>
<br clear="all">

**Figure 1:53.4.2.1.2.3-1: Add Content Flow in IRA Profile**

###### 1:53.4.2.1.2.4 Step 4: Select Content (Optional)

Occasionally it is desirable to trigger activities on Subscribers based on user navigation. With FHIRcast, this can be achieved using the content selection events.

Content selection can be used in various ways:
- as input for a follow up action (e.g., images or measurements selected by a user in the Image Display as input for hyperlink in the Report Creator)
- to bring something to focus (e.g., user clicks on a measurement in a report in the Report Creator which triggers the Image Display to bring the corresponding images to focus)

Sometimes the radiologist selects certain elements (e.g., images, annotation, specific measurements, etc.) in the Image Display. When this happens, the Image Display, grouped with the Content Creator, sends a event to the Hub using Select Report Content [RAD-151] indicating what contents have been selected. The Hub broadcasts the event to all Subscribers.

When the Report Creator receives the event, it can apply the selection according to its business logic. For example, it can highlight to the user what is selected so that the user can perform an appropriate action. In this example, the radiologist uses a voice command to insert a hyperlink in the report. The Report Creator uses the selected content to generate the hyperlink.

Generally, selecting a content means putting the content in 'focus'. Note that this profile is agnostic about the user interface implementation of 'focus', e.g., selection may result in the content being highlighted in the user interface, or it may result in the selected content being flagged in the backend service. Specific behavior depends on the implementation.

<div>
{%include step4-select-measurements.svg%}
</div>
<br clear="all">

**Figure 1:53.4.2.1.2.4-1: Select Content Flow in IRA Profile**

###### 1:53.4.2.1.2.5 Step 5: Sign-off Report

The radiologist completes dictation and signs off the report on the Report Creator. The Report Creator sends an update event notifying about the report status change (e.g., draft, preliminary, final, amended, etc.) The Image Display updates the status of the study in its worklist.

> Note: The report status is a critical attribute in a reporting workflow. Usually the Report Creator is the only actor that updates the report status. Alternative workflows where other content creators modify the report status need to be approached carefully.

In this diagram, the Report Creator closes the report context after it sends the report status update event. Recall that this report context was opened by the Image Display. 

> Note: Alternatively, the Image Display can close the report context upon successfully processing the report status update event. Both scenarios are valid and which method is used is determined by site configuration of the Image Display and Report Creator.

The Hub sends the update event and the termination event to all Subscribers. Once the Hub successfully processed the termination event, it disallows any further interaction of that closed report context.

Upon receiving the termination event, the Image Display removes the study from its worklist.

> Note: The Image Display may have different behavior when processing the termination event depending on the report status of the study. For example, if the status is *draft completed*, then the Image Display may set the study in a separate Draft worklist for later follow up.

The Report Creator may have some internal mechanism to keep the report for a grace period after the report is signed off and before sending the report to other recipients. The Report Creator persists the report according to its business logic.

<div>
{%include step5-signoff-report.svg%}
</div>
<br clear="all">

**Figure 1:53.4.2.1.2.5-1: Sign-off Report Flow in IRA Profile**

> Note 1: It is important to note that in common cases, Report Creator is the actor to close the report context. Occasionally, Image Display or Worklist Client can close the report context. This should be carefully considered and ensure all actors are configured appropriately. See [Use Case #3: Suspend and Resume Flow](volume-1.html#153423-use-case-3-suspend-and-resume-flow) for example.

> Note 2: The Report Creator, if it receives the report close context, it may save the content and re-open the context if necessary.

The flow above shows the simple case with a sequential switching of report context. In this case, a report context is opened and then closed before the next report context is opened.

In practice, the radiologist is likely to continue with the next study in the worklist without any awareness of the events happening behind the scene. If the initiating Starting Application and terminating Starting Application are different as in this example, then when the radiologist moves to the next study, it is possible that the Image Display opens a new report context before the Image Display receives the Close Report Context [RAD-149] event of the reported study.

Such rapid context switching is supported by this profile. The Hub and each Subscriber maintains multiple open contexts simultaneously. As long as the context is not closed, it still exists. Each event is associated to a particular anchor context. Therefore a Subscriber can reliably match an event to its internal state according to the context ID of the anchor context in the event. 

The following diagram shows what can happen in case of rapid switching of the report context.

<div>
{%include rapid_switch_context.svg%}
</div>
<br clear="all">

**Figure 1:53.4.2.1.2.5-2: Rapid Context Switching Flow in IRA Profile**

###### 1:53.4.2.1.2.6 Step 6: Close Reporting Session

Eventually, the radiologist completes all the studies in the worklist and closes the Report Creator. The Report Creator unsubscribes to the reporting session so that it will no longer receive any future events.

The Hub closes the connection to the Report Creator. Note that if there are other Subscribers on the same session, those applications are not affected and will continue to receive notification on the session.

<div>
{%include step6-terminate-reporting-session.svg%}
</div>
<br clear="all">

**Figure 1:53.4.2.1.2.6-1: Close Reporting Session Flow in IRA Profile**

#### 1:53.4.2.2 Use Case \#2: Complex Reporting

This reporting workflow is more complex because there are 5 actors collaborating closely:

- Worklist Client: Manages a set of studies waiting for reporting
- Image Display: Displays the selected study and patient metadata
- Report Creator: Captures dictation from the radiologist and creates report
- Evidence Creator: Processes study, provides advanced visualization and produces clinical results
- Hub: Manages the different application subscriptions, maintains report context and distributes events

In this diagram, a single Evidence Creator performs multiple functions. Alternatively, there can be multiple Evidence Creators, each performing a specific function.

In this use case,
- The Worklist Client has a set of studies waiting for reporting
- Radiologist uses the worklist to select studies to report
- Before reporting starts, the Worklist Client starts the reporting session and launches the Image Display and Report Creator to join the session
- When the radiologist opens a study in the Worklist Client,
  - Image Display automatically synchronizes and views the corresponding study images and patient metadata
  - Report Creator automatically synchronizes and opens a new report for the corresponding study
- While viewing the study in Image Display, the radiologist clicks the advanced processing button in Image Display to execute the integrated Evidence Creator
- When launched, Evidence Creator automatically synchronizes and processes the study
- After finished processing, Evidence Creator shares the outputs back with other applications in the reporting session
- Image Display automatically shows the outputs from Evidence Creator
- Radiologist accepts the results in Image Display, which in turn shares the radiologist's decisions as observation with other applications in the reporting session
- Report Creator automatically updates the report with the radiologist decisions according to the observation
- Radiologist completes and signs off the report and moves on to the next study in the worklist
- Eventually, the radiologist finishes all studies in the reporting worklist and closes the applications

Note that at Step 7, since all the necessary applications have already been started, there is no need to relaunch the applications and re-establish their subscriptions. However, it may be desirable for some specialty applications that are not in common use to be terminated and restarted if their capabilities are later required.

<div>
{%include multi_app.svg%}
</div>
<br clear="all">

**Figure 1:53.4.2.2-1: Complex Reporting in IRA Profile**

#### 1:53.4.2.3 Use Case \#3: Suspend and Resume Flow

Occasionally a radiologist is interrupted while reporting on a study. She needs to open a different study (e.g., for consultation purpose) before the study that is currently in progress is ready for sign-off.

This profile permits a new report context to be opened before the previous report context is closed. The Hub can maintain multiple anchor contexts simultaneously within a reporting session. The current context is the most recent anchor context that has been opened but not yet closed. This current context enables all Synchronizing Applications to be synchronized and working on the same context all the time.

Once the *interrupting* study is complete, the Report Creator closes the report context of the *interrupting* study. The Hub removes the context of the *interrupting* study and sets the current context to *empty*.

> Note: In some situations, the user can complete the work required for the *interrupting* study without using the Report Creator. In these occasions, the Image Display (or Worklist Client, not shown in the diagram) is permitted to close the report context.
>
> If the Report Creator business logic determines that the 'close' event sent by the Image Display was premature and the Report Creator still needed to do some work, then the Report Creator may 're-open' the report context, synchronize and close the report context.

The Image Display, as the Starting Application in this example, resumes the report context back to the previously opened study. It restores its application state associated to the report context prior to suspension and then re-opens the same report context to the Hub. Note that all associated context and contents remain in the Hub.

As a result, all subscribers will resume to the same report context. If an application has business logic to resume something else rather than the previous report context, that application should send a new Open Report Context [RAD-148] event to set the new report context accordingly.

<div>
{%include interruption-and-resume.svg%}
</div>
<br clear="all">

**Figure 1:53.4.2.3-1: Suspend and Resume Flow in IRA Profile**

#### 1:53.4.2.4 Use Case \#4: Error Handling Flow

Error handling is driven by two factors:
- Synchronous vs Asynchronous
- Subscriber initiated vs Hub initiated

<div>
{%include syncerror.svg%}
</div>
<br clear="all">

**Figure 1:53.4.2.4-1: Error Handling Flow in IRA Profile**

Figure 1:53.4.2.4-2 shows two sample use cases for how error handling can be used in reporting.

<div>
{%include syncerror_use_case.svg%}
</div>
<br clear="all">

**Figure 1:53.4.2.4-2: Error Handling Example Flows in IRA Profile**

#### 1:53.4.2.5 Use Case \#5: Overread Draft Report

A radiologist wants to review a draft report created by a resident. She opens the draft report in the Report Creator. The Report Creator opens a new report context for the draft report, including the corresponding patient and study context. The Image Display receives the event distributed by the Hub and opens the study in context. The radiologist reviews the study associated to the report using the Image Display.

Later a radiologist selects a nodule measurement on the report. The Report Creator sends a content selection event for the observation. The Image Display receives the event and display the observation on the study.

In case a reporting session has not been started when the radiologist reviews the draft report, the Report Creator can start a new reporting session and launch the Image Display to join it.

<div>
{%include report-overread.svg%}
</div>
<br clear="all">

**Figure 1:53.4.2.5-1: Overread Draft Report Flows in IRA Profile**

## 1:53.5 IRA Security Considerations

This profile strongly recommends all actors to consider the FHIRcast [Security Considerations](https://build.fhir.org/ig/HL7/fhircast-docs/4-3-security-considerations.html).

This profile strongly recommends all actors group with an ITI ATNA Secure Application or Secure Node Actor using the Radiology Audit Trail Option.

The ATNA Profile requires actors to implement:
- [Record Audit Event](https://profiles.ihe.net/ITI/TF/Volume2/ITI-20.html) [ITI-20] transaction which would record when and where analysis results are distributed and displayed.
- [Authenticate Node](https://profiles.ihe.net/ITI/TF/Volume2/ITI-19.html) [ITI-19] transaction to further ensure the integrity of transactions using node authentication and communication encryption.

Furthermore, for the HTTP-based transactions, this profile strongly recommends the use of ITI [Internet User Authorization](https://profiles.ihe.net/ITI/TF/Volume1/ch-34.html) (IUA) Profile to ensure that communications are only allowed for authenticated and authorized users and/or systems.

Additionally, although this profile does not specify any particular method for an application to launch other synchronizing applications, this profile strongly recommends the use of [SMART App Launch](http://www.hl7.org/fhir/smart-app-launch/app-launch.html) for application launching. In addition to the use of OAuth2 as specified in the ITI IUA Profile, FHIRcast extends SMART App Launch with FHIRcast specific OAuth2 scopes that can be used by the Hub to validate if the Subscriber is authorized to invoke the transaction. Furthermore, the authorization server returns the FHIRcast SMART launch parameters which can be used by the synchronizing applications to join the session. See [Section 4.1.1 SMART on FHIR](https://build.fhir.org/ig/HL7/fhircast-docs/4-1-launch-scenarios.html#smart-on-fhir) for more details.

The events as defined in this profile contain personal demographic information and clinical information. It is appropriate for products implementing the this profile to include appropriate PHI controls. Specifying such mechanisms and features is outside the scope of this profile.

> Note: Once the websocket connections are established, the Hub will distribute events to Subscribers according to their subscription. If some contents are not appropriate for certain Subscribers (e.g., a Subscriber should not receive any PHI), then separate sessions may be considered.

## 1:53.6 IRA Cross-Profile Considerations

Table 1:53.6-1 describes various actors in various other profiles that might be useful to group with IRA Profile actors.

**Table 1:53.6-1: IRA - Optional Actor Groupings**

<table class="grid">
  <thead>
    <tr>
      <th>IRA Actor</th>
      <th>Might group with</th>
      <th>Potential Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">Report Creator</td>
      <td><a href="https://profiles.ihe.net/RAD/IMR/index.html">IMR Report Creator</a></td>
      <td>To produce multi-media interactive report using the context and content (e.g., image references, measurements, etc.) received in a reporting session.<br><br>To share report contents (e.g., findings, impressions) with other Subscribers in a reporting session.</td>
    </tr>
    <tr>
      <td><a href="https://profiles.ihe.net/ITI/IUA/index.html">IUA Authorization Client</a></td>
      <td>To provide authorization claims when invoking a request with another actor.</td>
    </tr>
    <tr>
      <td><a href="https://profiles.ihe.net/RAD/IMR/index.html">IMR Report Creator</a></td>
      <td>To receive image references and measurements input from Image Display for the interactive hyperlinks.</td>
    </tr>
    <tr>
      <td rowspan="3">Image Display</td>
      <td><a href="https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Vol1.pdf">SWF.b Image Display</a></td>
      <td>To display patients' studies and share context and content with other synchronized applications</td>
    </tr>
    <tr>
      <td><a href="https://profiles.ihe.net/ITI/IUA/index.html">IUA Authorization Client</a></td>
      <td>To provide authorization claims when invoking a request with another actor.</td>
    </tr>
    <tr>
      <td><a href="https://profiles.ihe.net/RAD/IMR/index.html">IMR Image Display</a></td>
      <td>To enhance the interactivity with the Report Creator after the Image Display is launched.</td>
    </tr>
    <tr>
      <td>Worklist Client</td>
      <td><a href="https://profiles.ihe.net/ITI/IUA/index.html">IUA Authorization Client</a></td>
      <td>To provide authorization claims when invoking a request with another actor.</td>
    </tr>
    <tr>
      <td rowspan="4">Evidence Creator</td>
      <td><a href="https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Vol1.pdf">SWF.b Evidence Creator</a></td>
      <td>To provide measurements and other evidence data and share the content with other synchronized applications.</td>
    </tr>
    <tr>
      <td><a href="https://profiles.ihe.net/ITI/IUA/index.html">IUA Authorization Client</a></td>
      <td>To provide authorization claims when invoking a request with another actor.</td>
    </tr>
    <tr>
      <td><a href="https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_AIW-I.pdf">AIW-I Task Performer</a></td>
      <td>To provide an additional method to share the output with other synchronizing applications in a reporting session.</td>
    </tr>
    <tr>
      <td><a href="https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_AIR.pdf">AIR Evidence Creator</a></td>
      <td>To support creating the various AI results.</td>
    </tr>
    <tr>
      <td rowspan="4">Resumable Evidence Creator</td>
      <td><a href="https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Vol1.pdf">SWF.b Evidence Creator</a></td>
      <td>To provide measurements and other evidence data and share the content with other synchronized applications.</td>
    </tr>
    <tr>
      <td><a href="https://profiles.ihe.net/ITI/IUA/index.html">IUA Authorization Client</a></td>
      <td>To provide authorization claims when invoking a request with another actor.</td>
    </tr>
    <tr>
      <td><a href="https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_AIW-I.pdf">AIW-I Task Performer</a></td>
      <td>To provide an additional method to share the output with other synchronizing applications in a reporting session.</td>
    </tr>
    <tr>
      <td><a href="https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_AIR.pdf">AIR Evidence Creator</a></td>
      <td>To support creating the various AI results.</td>
    </tr>
    <tr>
      <td rowspan="2">Watcher</td>
      <td><a href="https://profiles.ihe.net/ITI/IUA/index.html">IUA Authorization Client</a></td>
      <td>To provide authorization claims when invoking a request with another actor.</td>
    </tr>
    <tr>
      <td><a href="https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_AIW-I.pdf">AIW-I Watcher</a></td>
      <td>To watch an additional infrastructure for events.</td>
    </tr>
    <tr>
      <td>Hub</td>
      <td><a href="https://profiles.ihe.net/ITI/IUA/index.html">IUA Resource Server</a></td>
      <td>To enforce only authorized access to the resources stored in the repository.</td>
    </tr>
  </tbody>
</table>


---

// File: input/pagecontent/example.md

The sample events in this section follow the flow defined in [Use Case #1: Basic Reporting](volume-1.html#153421-use-case-1-basic-reporting).

- [Open Report Context](open_study_for_reporting.html)
- [Update Report Content](update_study_with_measurement.html)
- [Select Report Content](select_study_and_observation.html)
- [Update Report Status](update_report_status.html)
- [Close Report Context](close_study_after_signoff.html)

Each event shows the following:
- A sample event sent by the PACS to the Hub
- A sample event sent by the Hub to the Reporting App
- The context and content maintained by the Hub

---

// File: input/fsh/Aliases.fsh

Alias: SCT = http://snomed.info/sct
Alias: UCUM = https://unitsofmeasurement.org/
Alias: LOINC = http://loinc.org

Alias: HL7V2 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: FHIRObservation = http://terminology.hl7.org/CodeSystem/observation-category
Alias: FHIREndpoint = http://terminology.hl7.org/CodeSystem/endpoint-connection-type
Alias: FHIRIntent = http://hl7.org/fhir/request-intent
Alias: FHIRRequestStatus = http://hl7.org/fhir/request-status
Alias: FHIRRequestIntent = http://hl7.org/fhir/request-intent
Alias: FHIRImagingStudyStatus = http://hl7.org/fhir/imagingstudy-status
Alias: FHIRObservationStatus = http://hl7.org/fhir/observation-status
Alias: FHIREndpointStatus = http://hl7.org/fhir/endpoint-status
Alias: FHIRDiagnosticReportStatus = http://hl7.org/fhir/diagnostic-report-status
Alias: FHIRDiagnosticService = http://terminology.hl7.org/CodeSystem/v2-0074
Alias: FHIRNarrativeStatus = https://build.fhir.org/codesystem-narrative-status.html
Alias: FHIRQuantityComparator = http://hl7.org/fhir/quantity-comparator

Alias: FHIRImagingSelection2D = http://hl7.org/fhir/imagingselection-2dgraphictype

Alias: DICOM = http://dicom.nema.org/resources/ontology/DCM
Alias: DICOMUID = urn:dicom:uid
Alias: DICOMSOPClass = http://dicom.nema.org/medical/dicom/current/output/chtml/part04/sect_B.5.html#table_B.5-1

Alias: MIME = urn:ietf:bcp:13
Alias: OID = urn:ietf:rfc:3986

---

// File: input/fsh/DiagnosticReportContext.fsh

Profile:        DiagnosticReportContext
Parent:         DiagnosticReport
Id:             diagnosticreportcontext
Title:          "DiagnosticReport Context"
Description:    "IHE IRA DiagnosticReport-open report context"

* status = #unknown

* subject 1..1
* subject only Reference(Patient)

* study 1..1
* study only Reference(ImagingStudy)

---

// File: input/fsh/DiagnosticReportUpdate.fsh

Profile:        DiagnosticReportUpdate
Parent:         DiagnosticReport
Id:             diagnosticreportupdate
Title:          "DiagnosticReport Update"
Description:    "IHE IRA DiagnosticReport-update event"

* subject only Reference(Patient)

* study 0..1
* study only Reference(ImagingStudy)

* extension contains AssociatedStudy named associatedStudy 0..* MS

Extension: AssociatedStudy
Title: "IRA DiagnosticReport Associated Study"
Id: associatedStudy
Description: "Associated studies used in part of diagnostic reporting"
Context: DiagnosticReport
* value[x] only Reference(ImagingStudy or DiagnosticReport)

---

// File: input/fsh/ImagingSelectionContent.fsh

Profile:        ImagingSelectionContent
Parent:         ImagingSelection
Id:             imagingselectioncontent
Title:          "ImagingSelection Content"
Description:    "IHE IRA ImagingSelection Content to be used in DiagnosticReport-update"

* status = #unknown

* subject only Reference(Patient)

* derivedFrom only Reference(ImagingStudy)

---

// File: input/fsh/ImagingStudyContext.fsh

Profile:        ImagingStudyContext
Parent:         ImagingStudy
Id:             imagingstudycontext
Title:          "ImagingStudy Context"
Description:    "IHE IRA DiagnosticReport-open study context"

// Must have an identifier which is the study instance UID
* identifier 1..*

* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = type
* identifier ^slicing.rules = #open
* identifier ^slicing.description = "Slice based on the identifier.type"
* identifier ^slicing.ordered = false

* identifier contains studyUID 1..1 MS and accession 1..1 MS
* identifier[studyUID].type 1..1 MS
* identifier[studyUID].type = DICOM#110180 //Study Insatnce UID
* identifier[studyUID].value 1..1 MS

// * identifier contains accession 1..1 MS
* identifier[accession].type 1..1 MS 
* identifier[accession].type = HL7V2#ACSN
* identifier[accession].value 1..1 MS

* status = #available

* subject only Reference(Patient)

---

// File: input/fsh/ObservationContent.fsh

Profile:        ObservationContent
Parent:         Observation
Id:             ira-observation
Title:          "Observation Content"
Description:    "IHE IRA Observation Content to be used in DiagnosticReport-update"

// Shall reference on Patient
* subject 1..1
* subject only Reference(Patient)

// Maximum one study to be referenced in derivedFrom
* derivedFrom 0..* MS

* derivedFrom ^slicing.discriminator.type = #type
* derivedFrom ^slicing.discriminator.path = resolve()
* derivedFrom ^slicing.rules = #open
* derivedFrom ^slicing.description = "Slice based on the derivedFrom reference type"
* derivedFrom ^slicing.ordered = false

* derivedFrom contains imagingStudy 0..1
* derivedFrom[imagingStudy] only Reference(ImagingStudy)

* derivedFrom contains imagingSelection 0..*
* derivedFrom[imagingSelection] only Reference(ImagingSelection)

---

// File: input/fsh/PatientContext.fsh

Profile:        PatientContext
Parent:         Patient
Id:             patientcontext
Title:          "Patient Context"
Description:    "IHE IRA DiagnosticReport-open patient context"

// Must have an identifier which is the patient ID
* identifier 1..*

* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = type
* identifier ^slicing.rules = #open
* identifier ^slicing.description = "Slice based on the identifier.system"
* identifier ^slicing.ordered = false

* identifier contains patientID 1..1 MS
* identifier[patientID].type = HL7V2#MR "Medical Record Number"
* identifier[patientID].value 1..1 MS

---

// File: input/images-source/actor_transaction.plantuml

@startuml
title IRA Actor Diagram

left to right direction

agent "Image Display" as PACS
agent "Report Creator" as Report
agent "Worklist Client" as Worklist
agent "Evidence Creator" as App
agent "Watcher" as Watcher
agent "Content Creator" as Content
agent "Hub" as Hub
PACS ----- Hub : "[[rad-146.html Subscribe to Reporting Session RAD-146]] →\n[[rad-147.html Connect to Notification Channel RAD-147]] →\n[[rad-152.html Unsubscribe Session RAD-152]] →\n[[rad-153.html Get Current Context RAD-153]] →\n[[rad-154.html Distribute Context Event RAD-154]] ←\n[[rad-155.html Generate SyncErrror Event RAD-155]] ←\n[[rad-156.html Notify Error RAD-156]] →\n[[rad-148.html Open Report Context RAD-148]] →\n[[rad-149.html Close Report Context RAD-149]] →"
Report ----- Hub : "[[rad-146.html Subscribe to Reporting Session RAD-146]] →\n[[rad-147.html Connect to Notification Channel RAD-147]] →\n[[rad-152.html Unsubscribe Session RAD-152]] →\n[[rad-153.html Get Current Context RAD-153]] →\n[[rad-154.html Distribute Context Event RAD-154]] ←\n[[rad-155.html Generate SyncErrror Event RAD-155]] ←\n[[rad-156.html Notify Error RAD-156]] →\n[[rad-148.html Open Report Context RAD-148]] →\n[[rad-149.html Close Report Context RAD-149]] →"
Worklist ----- Hub : "[[rad-146.html Subscribe to Reporting Session RAD-146]] →\n[[rad-147.html Connect to Notification Channel RAD-147]] →\n[[rad-152.html Unsubscribe Session RAD-152]] →\n[[rad-153.html Get Current Context RAD-153]] →\n[[rad-154.html Distribute Context Event RAD-154]] ←\n[[rad-155.html Generate SyncErrror Event RAD-155]] ←\n[[rad-156.html Notify Error RAD-156]] →\n[[rad-148.html Open Report Context RAD-148]] →\n[[rad-149.html Close Report Context RAD-149]] →"
App -u---- Hub : "[[rad-146.html Subscribe to Reporting Session RAD-146]] ←\n[[rad-147.html Connect to Notification Channel RAD-147]] ←\n[[rad-152.html Unsubscribe Session RAD-152]] ←\n[[rad-153.html Get Current Context RAD-153]] ←\n[[rad-154.html Distribute Context Event RAD-154]] →\n[[rad-155.html Generate SyncErrror Event RAD-155]] →\n[[rad-156.html Notify Error RAD-156]] ←"
Watcher -u---- Hub : "[[rad-146.html Subscribe to Reporting Session RAD-146]] ←\n[[rad-147.html Connect to Notification Channel RAD-147]] ←\n[[rad-152.html Unsubscribe Session RAD-152]] ←\n[[rad-153.html Get Current Context RAD-153]] ←\n[[rad-154.html Distribute Context Event RAD-154]] →\n[[rad-155.html Generate SyncErrror Event RAD-155]] →\n[[rad-156.html Notify Error RAD-156]] ←"
Content ----- Hub: "[[rad-150.html Update Report Content RAD-150]] →\n[[rad-151.html Select Report Content RAD-151]] →"
@enduml

---

// File: input/images-source/interruption-and-resume.plantuml

@startuml

actor Radiologist as User
participant "Image Display" as PACS
participant "Hub" as Hub
participant "Report Creator" as Report

== Step 2: Open Study in Context ==

PACS->Report: //Launch Application//

Report->Hub: Subscribe to reporting session [RAD-146]
Hub-->Report: //Accept//\n//with hub.channel.endpoint//
Report->Hub: Connect to Notification Channel [RAD-147]
Hub-->Report: //Confirm connetion//

Report->Hub: Get Current Context [RAD-151]\n(catch up with current context and content)
Hub-->Report: //Return empty context//

User->PACS: //Select Patient and Study//
PACS->PACS: //Open Study and show Chest X-Ray//

PACS->Hub: Open Report Context [RAD-148]\n(event: id = 1000,\ncontext = DiagnosticReport xxx\nrelated context = Patient yyy, ImagingStudy zzz)
activate Hub

Hub->Hub: //Create DiagnosticReport Context in session 12345//\n(event: id = 1000,\ncontext = DiagnosticReport xxx\nrelated context = Patient yyy, ImagingStudy zzz)\n[[open_study_for_reporting.html#available-context-and-content-in-hub Example]]
Hub-->PACS: Accept

Hub->Report: Distribute Context Event [RAD-154]\n(event: id = 1000,\ncontext = DiagnosticReport xxx\nrelated context = Patient yyy, ImagingStudy zzz)
Report->Report: //Open new report//\n//based on the received context//
Report-->Hub: //Success (id = 1000, status = 200)//

Hub->PACS: Distribute Context Event [RAD-154]\n(event: id = 1000,\ncontext = DiagnosticReport xxx\nrelated context = Patient yyy, ImagingStudy zzz)
PACS->PACS: //No action required//
PACS-->Hub: //Success (id = 1000, status = 200)//
deactivate Hub

== Step 2b: Suspension Occurred ==

User->User: //Suspend current study to consult on another study//

User->PACS: //Select **Another** Patient and Study//
PACS->PACS: //Open Study and show Chest CT//

PACS->Hub: Open Report Context [RAD-148]\n(event: id = 2000,\ncontext = DiagnosticReport aaa\nrelated context = Patient bbb, ImagingStudy ccc)
activate Hub

Hub->Hub: //Create DiagnosticReport Context in session 12345//\n(event: id = 2000,\ncontext = DiagnosticReport aaa\nrelated context = Patient bbb, ImagingStudy ccc)\n[[open_study_for_reporting.html#available-context-and-content-in-hub Example]]
note over Hub
At this moment, the current context is DiagnosticReport aaa
because it is the last context that has been opened and not
yet closed.

However, the anchor context DiagnosticReport xxx remains in
the Hub's tracking since it has not yet been closed.
end note
Hub-->PACS: Accept

Hub->Report: Distribute Context Event [RAD-154]\n(event: id = 2000,\ncontext = DiagnosticReport aaa\nrelated context = Patient bbb, ImagingStudy ccc)
Report->Report: //Open new report//\n//based on the received context//
Report-->Hub: //Success (id = 2000, status = 200)//

Hub->PACS: Distribute Context Event [RAD-154]\n(event: id = 2000,\ncontext = DiagnosticReport aaa\nrelated context = Patient bbb, ImagingStudy ccc)
PACS->PACS: //No action required//
PACS-->Hub: //Success (id = 2000, status = 200)//
deactivate Hub

User->PACS: //Start reviewing the new study for consultation//

== Step 2c: Suspension Complete ==

User->Report: //Complete review for consultation and close study//

Report->Hub: Close Report Context [RAD-149]\n(event: id = 3000,\ncontext = DiagnosticReport aaa)
Hub->Hub: //Close DiagnosticReport aaa//

Hub->PACS: Distribute Context Event [RAD-154]\n(event: id = 3000,\ncontext = DiagnositcReport aaa)
PACS->PACS: //Close study in consultation//
PACS-->Hub: //Success//ß

Hub->Report: Distribute Context Event [RAD-154]\n(event: id = 3000,\ncontext = DiagnosticReport aaa)
Report->Report: //Close study in consultation//
Report-->Hub: //Success//

== Step 2d: Resume Previous Report Context ==

User->PACS: //Resume reporting on study zzz//
PACS->PACS: //Restore application state for study zzz//
PACS->Hub: Open Report Context [RAD-148]\n(event: id = 4000,\ncontext = DiagnosticReport xxx\nrelated context = Patient yyy, ImagingStudy zzz)

Hub->Report: Distribute Context Event [RAD-154]\n(event: id = 4000,\ncontext = DiagnosticReport xxx\nrelated context = Patient yyy, ImagingStudy zzz)
Report->Report: //Detected report context xxx is previously opened//\n//Resume report xxx//\n//and restore application state//
Report-->Hub: //Success (id=4000, status = 200)//
Hub->PACS: Distribute Context Event [RAD-154]\n(event: id = 4000,\ncontext = DiagnosticReport xxx\nrelated context = Patient yyy, ImagingStudy zzz)
PACS-->Hub: //Success (id=4000, status = 200)//

group Resync User Selection
PACS->PACS: //Identified markups selected by user prior to suspension//
PACS->User: //Prompt user to confirm selection//
User-->PACS: //Confirmed//
PACS->Hub: Select Report Content [RAD-151]

Hub->Report: Distribute Context Event [RAD-154]
Report->Report: //Select referenced report content//
Report-->Hub: //Success (status = 200)//
Hub->PACS: Distribute Context Event [RAD-154]
PACS-->Hub: //Success (status = 200)//
end group

@enduml

---

// File: input/images-source/multi_app.plantuml

@startuml multi_app

title Multiple Applications Workflow

actor Radiologist
participant "Worklist Client" as WF
participant "Hub" as Hub
participant "Image Display" as PACS
participant "Report Creator" as Report
participant "Evidence Creator" as Special

== Step 1: Prepare Reporting Session ==
WF->Hub: Subscribe to Reporting Session [RAD-146]\n(session 12345:\nevents = DiagnosticReport-*, syncerror)

Hub->Hub: //Create Reporting Session with ID 12345//

Hub-->WF: //Accept//\n//with hub.channel.endpoint//
WF->Hub: Connect to Notification Channel [RAD-147]
Hub-->WF: //Confirm connection//

== Step 2: Launch Applications in Reporting Session ==

par Launching Image Display and Report Creator simultaneously
WF->PACS: //Launch Application (Image Display)//\n//in session 12345//

PACS->Hub: Subscribe to Reporting Session [RAD-146]\n(session 12345:\nevents = DiagnosticReport-*, syncerror)
Hub-->PACS: //Accept//\n//with hub.channel.endpoint//
PACS->Hub: Connect to Notification Channel [RAD-147]
Hub-->PACS: //Confirm connection//
PACS->Hub: Get Current Context [RAD-153]\n(catch up with current context and content)

Hub-->PACS: //Return empty context//
else
WF->Report: //Launch Application (Report Creator)//\n//in session 12345//

Report->Hub: Subscribe to Reporting Session [RAD-146]\n(session 12345:\nevents = DiagnosticReport-*, syncerror)
Hub-->Report: //Accept//\n//with hub.channel.endpoint//
Report->Hub: Connect to Notification Channel [RAD-147]
Hub-->Report: //Confirm connection//
Report->Hub: Get Current Context [RAD-153]\n(catch up with current context and content)

Hub-->Report: //Return empty context//
end

== Step 3: Open Report Context ==

Radiologist->WF: //Open study//

WF->Hub: Open Report Context [RAD-148]\n(session 12345, event: id = 1000,\nanchor context = DiagnosticReport xxx\nrelated context = Patient yyy, ImagingStudy zzz)
activate Hub

Hub->Hub: //Create DiagnosticReport Context in session 12345//\n(anchor context = DiagnosticReport xxx\nrelated context = Patient yyy, ImagingStudy zzz)
Hub-->WF: Accept

Hub->WF: Distribute Context Event [RAD-154]\n(session 12345, event: id = 1000,\nanchor context = DiagnosticReport xxx\nrelated context = Patient yyy, ImagingStudy zzz)
WF-->Hub: //Success (id = 1000, status = 200)//

Hub->PACS: Distribute Context Event [RAD-154]\n(session 12345, event: id = 1000,\nanchor context = DiagnosticReport xxx\nrelated context = Patient yyy, ImagingStudy zzz)
PACS->PACS: //Display study zzz//
PACS-->Hub: //Success (id = 1000, status = 200)//

Hub->Report: Distribute Context Event [RAD-154]\n(session 12345, event: id = 1000,\nanchor context = DiagnosticReport xxx\nrelated context = Patient yyy, ImagingStudy zzz)
Report->Report: //Open new report for study zzz//
Report-->Hub: //Success (id = 1000, status = 200)//

deactivate Hub

== Step 4: Launch Additional Application On Demand ==

Radiologist->PACS: //Need additional information from Evidence Creator on the current study//

PACS->Special: //Launch Application (Evidence Creator)//\n//in session 12345//
note over PACS
PACS, not the original requester of the session,
launches additional application to join the
session on demand.
end note

Special->Hub: Subscribe to Reporting Session [RAD-146]\n(session 12345:\nevents = DiagnosticReport-open, DiagnosticReport-close, syncerror)
note over Special
Only subscribe to DiagnosticReport-open and
DiagnosticReport-close events as well as syncerror
end note

Hub-->Special: //Accept//\n//with hub.channel.endpoint//
Special->Hub: Connect to Notification Channel [RAD-147]
Hub-->Special: //Confirm connection//
Special->Hub: Get Current Context [RAD-153] //on session 12345//\n(catch up with current context and content)

Hub-->Special: //Return report context//\n(session 12345:\nanchor context = DiagnosticReport xxx\nrelated context = Patient yyy, ImagingStudy zzz)
Special->Special: //Process study zzz//\n//(Create bounding boxes on potential nodules)//

Special->Hub: Update Report Content [RAD-150]\n(session 12345, event: id = 2000,\nanchor context = DiagnosticReport xxx, add ImagingSelection qqq)
activate Hub

Hub-->Special: Accept

Hub->WF: Distribute Context Event [RAD-154]\n(session 12345, event: id = 2000,\nanchor context = DiagnosticReport xxx, add ImagingSelection qqq)
WF-->Hub: //Success (id = 2000, status = 200)//

Hub->PACS: Distribute Context Event [RAD-154]\n(session 12345, event: id = 2000,\nanchor context = DiagnosticReport xxx, add ImagingSelection qqq)
PACS->PACS: //Display bounding box (from ImagingSelection qqq)//\n//on study zzz//
PACS-->Hub: //Success (id = 2000, status = 200)//

Hub->Report: Distribute Context Event [RAD-154]\n(session 12345, event: id = 2000,\nanchor context = DiagnosticReport xxx, add ImagingSelection qqq)
Report-->Hub: //Success (id = 2000, status = 200)//
deactivate Hub

Special->: //Persist results (e.g. DICOM SR)//\n//for patient record//

== Step 5: Create Report Content ==

Radiologist->PACS: //Verify and accept results from Evidence Creator//

PACS->Hub: Update Report Content [RAD-150]\n(session 12345, event: id = 3000,\nanchor context = DiagnosticReport xxx, add Observation abc)
activate Hub
Hub->Report: Distribute Context Event [RAD-154]\n(session 12345, event: id = 3000,\nanchor context = DiagnosticReport xxx, add Observation abc)
Report->Report: //Update report with contents//\n//from Observation abc//
Report-->Hub: //Success (id = 3000, status = 200)//
Hub->PACS: Distribute Context Event [RAD-154]\n(session 12345, event: id = 3000,\nanchor context = DiagnosticReport xxx, add Observation abc)
PACS-->Hub: //Success (id = 3000, status = 200)//
Hub->WF: Distribute Context Event [RAD-154]\n(session 12345, event: id = 3000,\nanchor context = DiagnosticReport xxx, add Observation abc)
WF-->Hub: //Success (id = 3000, status = 200)//
deactivate Hub

== Step 6: Close Report Context ==

Radiologist->Report: //Sign off report//
Report->Report: //Set report status to FINAL//

Report->: //Send final report//

Report->Hub: Update Report Content [RAD-150]\n(event: id = 4000,\nanchor context = DiagnosticReport xxx, update status FINAL)
activate Hub

Hub->Hub: //Update DiagnosticReport context in session 12345//\nanchor context = DiagnosticReport xxx, status FINAL)

Hub->PACS: Distribute Context Event [RAD-154]\n(event: id = 4000 ...)
PACS->PACS: //Update study status//
PACS-->Hub: //Success (id = 4000, status = 200)//
Hub->Report: Distribute Context Event [RAD-154]\n(event: id = 4000 ...)
Report-->Hub: //Success (id = 4000, status = 200)//
Hub->WF: Distribute Context Event [RAD-154]\n(event: id = 4000 ...)
WF->WF: //Update study status//
WF-->Hub: //Success (id = 4000, status = 200)//
deactivate Hub

Report->Hub: Close Report Context [RAD-149]\n(session 12345, event: id = 5000,\nanchor context = DiagnosticReport xxx)
activate Hub

Hub->Hub: //Update DiagnosticReport context in session 12345//\n(event: id = 5000,\nanchor context = DiagnosticReport xxx)

Hub->WF: Distribute Context Event [RAD-154]\n(session 12345, event: id = 5000,\nanchor context = DiagnosticReport xxx)
WF->WF: //Drop study zzz from worklist//
WF-->Hub: //Success (id = 5000, status = 200)//

Hub->PACS: Distribute Context Event [RAD-154]\n(session 12345, event: id = 5000,\nanchor context = DiagnosticReport xxx)
PACS->PACS: //Close study zzz//
PACS-->Hub: //Success (id = 5000, status = 200)//

Hub->Report: Distribute Context Event [RAD-154]\n(session 12345, event: id = 5000,\nanchor context = DiagnosticReport xxx)
Report-->Hub: //Success (id = 5000, status = 200)//

Hub->Special: Distribute Context Event [RAD-154]\n(session 12345, event: id = 5000,\nanchor context = DiagnosticReport xxx)
Special->Special: //Minimize application//
Special-->Hub: //Success (id = 5000, status = 200)//

Hub->Hub: //Delete DiagnosticReport context in session 12345//\nanchor context = DiagnosticReport xxx)
deactivate Hub

== Step 7: Switch Report Context in Reporting Session ==

note over WF
The workflow repeats. Since all the necessary applications
have already been started, there is no need to relaunch
the applications and establish the subscription.
end note

WF->Hub: Initial Report Context [RAD-148]\n(session 12345, event: id = 6000,\nanchor context = DiagnosticReport kkk)
activate Hub
Hub->PACS: Distribute Context Event [RAD-154]
Hub->Report: Distribute Context Event [RAD-154]
Hub->WF: Distribute Context Event [RAD-154]
Hub->Special: Distribute Context Event [RAD-154]
deactivate Hub

== Step 8: Close Applications ==

Radiologist->WF: //Close application//
WF->Hub: Unsubscribe Session [RAD-152]\n(session 12345)
Hub-->WF: //Accept//
Hub->Hub: //Close channel to Worklist Client//

... Time elapsed and the other subscriptions lease time expired ...

Hub->Hub: //Close channel to Image Display, Report Creator and Evidence Creator//

@enduml

---

// File: input/images-source/rad-146-seq.plantuml

@startuml

hide footbox

participant "Subscriber" as Subscriber
participant "Manager" as Manager

Subscriber->Manager: Subscription Request
activate Manager
Manager-->Subscriber: Subscription Response
deactivate Manager

@enduml

---

// File: input/images-source/rad-147-seq.plantuml

@startuml

hide footbox

participant "Subscriber" as Subscriber
participant "Manager" as Manager

Subscriber->Manager: Connect to Websocket Request
activate Manager
Manager-->Subscriber: Connect to Websocket Response
deactivate Manager

@enduml

---

// File: input/images-source/rad-148-seq.plantuml

@startuml

hide footbox

participant "Sender" as Sender
participant "Manager" as Manager

Sender->Manager: Open Report Context Request
activate Manager
Manager-->Sender: Open Report Context Response
deactivate Manager

@enduml

---

// File: input/images-source/rad-149-seq.plantuml

@startuml

hide footbox

participant "Sender" as Sender
participant "Manager" as Manager

Sender->Manager: Close Report Context Request
activate Manager
Manager-->Sender: Close Report Context Response
deactivate Manager

@enduml

---

// File: input/images-source/rad-150-seq.plantuml

@startuml

hide footbox

participant "Sender" as Sender
participant "Manager" as Manager

Sender->Manager: Update Report Content Request
activate Manager
Manager-->Sender: Update Report Content Response
deactivate Manager

@enduml

---

// File: input/images-source/rad-151-seq.plantuml

@startuml

hide footbox

participant "Sender" as Sender
participant "Manager" as Manager

Sender->Manager: Select Report Content Request
activate Manager
Manager-->Sender: Select Report Content Response
deactivate Manager

@enduml

---

// File: input/images-source/rad-152-seq.plantuml

@startuml

hide footbox

participant "Subscriber" as Subscriber
participant "Manager" as Manager

Subscriber->Manager: Unsubscribe Session Request
activate Manager
Manager-->Subscriber: Unsubscribe Session Response
deactivate Manager

@enduml

---

// File: input/images-source/rad-153-seq.plantuml

@startuml

hide footbox

participant "Subscriber" as Subscriber
participant "Manager" as Manager

Subscriber->Manager: Get Current Context Request
activate Manager
Manager-->Subscriber: Get Current Context Response
deactivate Manager

@enduml

---

// File: input/images-source/rad-154-seq.plantuml

@startuml

hide footbox

participant "Manager" as Manager
participant "Subscriber" as Subscriber

Manager->Subscriber: Notification
activate Subscriber
Subscriber-->Manager: Notification Response
deactivate Subscriber

@enduml

---

// File: input/images-source/rad-155-seq.plantuml

@startuml

hide footbox

participant "Manager" as Manager
participant "Subscriber" as Subscriber

Manager->Subscriber: Error Notification
activate Subscriber
Subscriber-->Manager: Error Notification Response
deactivate Subscriber

@enduml

---

// File: input/images-source/rad-156-seq.plantuml

@startuml

hide footbox

participant "Subscriber" as Subscriber
participant "Manager" as Manager

Subscriber->Manager: Notify Error
activate Manager
Manager-->Subscriber: Notify Error Response
deactivate Manager

@enduml

---

// File: input/images-source/rapid_switch_context.plantuml

@startuml rapid_switch_context

title Rapid Context Switch Workflow

actor Radiologist as User
participant "Image Display" as PACS
participant "Hub" as Hub
participant "Report Creator" as Report

== Step 5: Sign-Off Report and Continue with next Study ==

User->Report: //Complete reporting and sign off report//
Report->Hub: Close Report Context [RAD-149] //on Study 1//\n(event: id = 1000,\ncontext = DiagnosticReport xxx\nrelated context = Patient yyy, ImagingStudy zzz)

User->PACS: //Click "Next study"//
PACS->Hub: Open Report Context [RAD-147] //on Study 2//\n(event: id = 1111,\ncontext = DiagnosticReport aaa\nrelated context = Patient bbb, ImagingStudy ccc)
note over PACS
Note that switching study happened before the
Close Context event of the previously signed-off
study is received.
end note

Hub->Hub: //Create DiagnosticReport Context in session 12345//\n(event: id = 1111,\ncontext = DiagnosticReport aaa\nrelated context = Patient bbb, ImagingStudy ccc)
note over Hub
The existing context DiagnosticReport xxx remains
in the Hub but it is not the active context.
end note

Hub->PACS: Distribute Context Event [RAD-154] //of previous study//\n(event: id = 1000,\ncontext = DiagnosticReport xxx\nrelated context = Patient yyy, ImagingStudy zzz)
note over Hub
It is NOT an error if the *-close event
does not match the most recent *-open event.
end note

PACS->PACS: //Update study status//\n//and drop the study from worklist//
note over PACS
This may be done in the background. The study
to be dropped from the worklist does not have
to be the study currently in focus in PACS.
end note

PACS-->Hub: //Success//

Hub->Report: Distribute Context Event [RAD-148]\n//of previous study//\n(event: id = 1000,\ncontext = DiagnosticReport xxx\nrelated context = Patient yyy, ImagingStudy zzz)
Report->Report: //no action required//
Report-->Hub: //Success//

Hub->Hub: //Delete DiagnosticReport context in session 12345//\n(context = DiagnosticReport xxx)

@enduml

---

// File: input/images-source/report-overread.plantuml

@startuml

title: Overread Draft Report

actor Radiologist as User
participant "Image Display" as PACS
participant "Hub" as Hub
participant "Report Creator" as Report

User->Report: //Open draft report created by residence radiologist//

opt Start a new reporting session if not exist
Report->Hub: Subscribe to reporting session [RAD-Sub]\n//(session 12345)//
Hub->Hub: //Create a new session//\n//if session ID does not exist//

Report->PACS: //Launch Application//

PACS->Hub: Subscribe to reporting session [RAD-Sub]\n//(session 12345)//
note over Hub
Hub adds Image Display to the reporting session.
end note

PACS->Hub: Get Current Context [RAD-151]\n(catch up with current context and content)
Hub-->PACS: //Return empty context//
end opt

Report->Hub: Open Report Context [RAD-148]\n(event: id = 1000,\ncontext = DiagnosticReport xxx\nrelated context = Patient yyy, ImagingStudy zzz)
activate Hub

Hub->Hub: //Create DiagnosticReport Context in session 12345//\n[[open_study_for_reporting.html#available-context-and-content-in-hub Example]]
Hub-->Report: Accept

Hub->PACS: Distribute Context Event [RAD-154]\n(event: id = 1000, ...)
PACS->PACS: //Open study zzz//
PACS-->Hub: //Success (id = 1000, status = 200)//

Hub->Report: Distribute Context Event [RAD-154]\n(event: id = 1000, ...)
Report-->Hub: //Success (id = 1000, status = 200)//
deactivate Hub

User->PACS: //View study associated to the draft report//

User->Report: //Select nodule measurement in reoprt//
Report->Hub: Select Report Content [RAD-151]\n(event: id = 2000,\ncontext = DiagnosticReport xxx\ncontent = Observation abc)
activate Hub
Hub-->Report: //Success (id = 2000, status = 200)//

Hub->PACS: Distribute Context Event [RAD-154]\n(event: id = 2000, ...)
PACS->PACS: //Display measurement in Observation abc//\n//on study zzz//
PACS-->Hub: //Success (id = 2000, status = 200)//

Hub->Report: Distribute Context Event [RAD-154]\n(event: id = 2000, ...)
Report-->Hub: //Success (id = 2000, status = 200)//
deactivate Hub

@enduml

---

// File: input/images-source/ReportingFlow.plantuml

@startuml

hide footbox

actor Radiologist as User
participant "Image Display" as PACS
participant "Report Creator" as Report

User -> PACS: //Open reporting session// [[volume-1.html#15342121-step-1-open-reporting-session Step 1]]
PACS -> Report: //Launch application//
loop
User -> PACS: //Select Patient and Study//
PACS -> PACS: //Open Study and show Chest X-Ray// [[volume-1.html#15342122-step-2-open-study-in-context Step 2]]
User -> PACS: //Measure area of Pneumothorax// [[volume-1.html#15342123-step-3-add-content-optional Step 3]]
User -> Report: //Dictate Report//
User -> PACS: //Select measurements as seen in images// [[volume-1.html#15342124-step-4-select-content-optional Step 4]]
User -> Report: //Auto-populate report with selected measurements//
User -> Report: //Sign-off Report// [[volume-1.html#15342125-step-5-sign-off-report Step 5]]
end

User->PACS: //Close reporting session// [[volume-1.html#15342126-step-6-close-reporting-session Step 6]]

@enduml

---

// File: input/images-source/step1-open-reporting-session.plantuml

@startuml

actor Radiologist as User
participant "Image Display" as PACS
participant "Hub" as Hub
participant "Report Creator" as Report

== Step 1: Open Reporting Session ==

User->PACS: //Open reporting session//
PACS->PACS: //Ready to start reporting//\n//(Generate new session ID)//

PACS->Hub: Subscribe to reporting session [RAD-146]\n//(session 12345)//
Hub->Hub: //Create a new session//\n//if session ID does not exist//

Hub->Hub: //Add Image Display to session//

Hub-->PACS: //Accept//\n//with hub.channel.endpoint//
PACS->Hub: Connect to Notification Channel [RAD-147]
Hub-->PACS: //Confirm connection//

PACS->Report: //Launch Application//

Report->Hub: Subscribe to reporting session [RAD-146]\n//(session 12345)//

Hub->Hub: //Add Report Creator to session//

Hub-->Report: //Accept//\n//with hub.channel.endpoint//
Report->Hub: Connect to Notification Channel [RAD-147]
Hub-->Report: //Confirm connection//

Report->Hub: Get Current Context [RAD-153]\n(catch up with current context and content)
Hub-->Report: //Return empty context//

@enduml

---

// File: input/images-source/step2-open-study-in-context.plantuml

@startuml

actor Radiologist as User
participant "Image Display" as PACS
participant "Hub" as Hub
participant "Report Creator" as Report

== Step 2: Open Study in Context ==

User->PACS: //Select Patient and Study//
PACS->PACS: //Open Study and show Chest X-Ray//

PACS->Hub: Open Report Context [RAD-148]\n(event: id = 1000,\ncontext = DiagnosticReport xxx\nrelated context = Patient yyy, ImagingStudy zzz)
activate Hub

Hub->Hub: //Create DiagnosticReport Context in session 12345//\n[[open_study_for_reporting.html#available-context-and-content-in-hub Example]]
Hub-->PACS: Accept

Hub->Report: Distribute Context Event [RAD-154]\n(event: id = 1000, ...)
Report->Report: //Open new report//\n//based on the received context//
Report-->Hub: //Success (id = 1000, status = 200)//

Hub->PACS: Distribute Context Event [RAD-154]\n(event: id = 1000, ...)
PACS-->Hub: //Success (id = 1000, status = 200)//
deactivate Hub

User->Report: //Start dictation//

@enduml

---

// File: input/images-source/step3-add-measurements.plantuml

@startuml

actor Radiologist as User
participant "Image Display /\nContent Creator" as PACS
participant "Hub" as Hub
participant "Report Creator" as Report

== Step 3: Add Contents (Optional) ==

User->PACS: //Measure area of Pneumothorax//

PACS->PACS: //Create content//\n//(new FHIR Observation resource)//

PACS->Hub: Update Report Content [RAD-150]\n//include Observation in content bundle//
Hub->Hub: //Ensure request version matches//\n//current context version//
Hub-->PACS: //Success//
Hub->Hub: //Update content in report context//\n[[update_study_with_measurement.html#available-context-and-content-in-hub Example]]
Hub->Report: Distribute Context Event [RAD-154]\n//same content as received//
Report->Report: //Insert pneumothorax area in the report//
Report-->Hub: //Success (status = 200)//
Hub->PACS: Distribute Context Event [RAD-154]\n//same content as received//
PACS-->Hub: //Success (status = 200)//

User->Report: //Fill general report text//

@enduml


---

// File: input/images-source/step4-select-measurements.plantuml

@startuml

actor Radiologist as User
participant "Image Display" as PACS
participant "Hub" as Hub
participant "Report Creator /\nContent Creator" as Report

== Step 4: Select Contents (Optional) ==

User->PACS: //Select measurements as seen in images//\n//as current focus//

PACS->Hub: Select Report Content [RAD-151]
Hub->Hub: //Check selected resources//\n[[select_study_and_observation.html#available-context-and-content-in-hub Example]]
Hub-->PACS: //Success//

Hub->Report: Distribute Context Event [RAD-154]

Report->Report: //Select referenced report content//
note over Report
Selection can be visible to the user or
invisible in the background tracked by the
application.
end note

Report-->Hub: //Success (status = 200)//

Hub->PACS: Distribute Context Event [RAD-154]
PACS-->Hub: //Success (status = 200)//

User->Report: //Auto-populate report with selected measurements//\n//e.g. Insert Hyperlink via a voice command//

Report->Report: //Insert hyperlink in report//\n//with current focused content//

@enduml


---

// File: input/images-source/step5-signoff-report.plantuml

@startuml

actor Radiologist as User
participant "Image Display" as PACS
participant "Hub" as Hub
participant "Report Creator /\nContent Creator" as Report

User->Report: //Complete dictate report//
Report->Report: //Persist report//

== Step 5: Sign-off Report ==

User->Report: //Sign off report//
Report->Report: //Set report status to FINAL//

Report->Hub: Update Report Content [RAD-150]\n(event: id = 1500,\ncontext = DiagnosticReport xxx, update status FINAL)
activate Hub

Hub->Hub: //Update DiagnosticReport context in session 12345//\n(event: id = 1500,\ncontext = DiagnosticReport xxx, status FINAL)\n[[update_report_status.html#available-context-and-content-in-hub Example]]

Hub->PACS: Distribute Context Event [RAD-154]\n(event: id = 1500 ...)
PACS->PACS: //Update study status//
PACS-->Hub: //Success (id = 1500, status = 200)//
Hub->Report: Distribute Context Event [RAD-154]\n(event: id = 1500 ...)
Report-->Hub: //Success (id = 1500, status = 200)//
deactivate Hub

...

Report->Hub: Close Report Context [RAD-149]\n(event: id = 2000,\ncontext = DiagnosticReport xxx)
activate Hub

Hub->Hub: //Update DiagnosticReport context in session 12345//\n(event: id = 2000,\ncontext = DiagnosticReport xxx)

Hub->PACS: Distribute Context Event [RAD-154]\n(event: id = 2000,\ncontext = DiagnosticReport xxx)
PACS->PACS: //Drop study from worklist//
PACS-->Hub: //Success (id = 2000, status = 200)//
Hub->Report: Distribute Context Event [RAD-154]\n(event: id = 2000,\ncontext = DiagnosticReport xxx)
Report-->Hub: //Success (id = 2000, status = 200)//

Hub->Hub: //Delete DiagnosticReport context in session 12345//\n(context = DiagnosticReport xxx)\n[[close_study_after_signoff.html#available-context-and-content-in-hub Example]]
deactivate Hub

...
Report->Report: //Wait for the grace period//
Report->: //Send final report//

User->PACS: //Proceed to next study//

note over PACS
Repeat Step 2.
end note
PACS->Hub: Open Report Context [RAD-148]

@enduml


---

// File: input/images-source/step6-terminate-reporting-session.plantuml

@startuml

actor Radiologist as User
participant "Image Display" as PACS
participant "Hub" as Hub
participant "Report Creator" as Report

== Step 6: Close Reporting Session ==

User->Report: //Close application//

Report->Hub: Unsubscribe Session [RAD-152]\n(session 12345)
Hub-->Report: //Accept//
Hub->Hub: //Close channel to Reporting System//

@enduml

---

// File: input/images-source/syncerror_use_case.plantuml

@startuml

actor Radiologist as User
participant "Image Display" as PACS
participant "Hub" as Hub
participant "Report Creator" as Report
participant "Watcher" as Watcher

== Case 1: Hub detected error ==

User->PACS: //Select Patient and Study//\n//to start dictation//
PACS->Hub: Open Report Context [RAD-148]\n//(Study context missing)//
Hub->Hub: //Detect missing study context//
Hub-->PACS: Return 400 Bad Request

== Case 2: Subscriber detected error ==

User->PACS: //Select Patient and Study//\n//to start dictation//
PACS->Hub: Open Report Context [RAD-148]\n//(Study context present)//
Hub-->PACS: Return 200 OK
Hub->Hub: //Open report context//
Hub->Watcher: Distribute Context Event [RAD-154]\n//(Report context opened)//
Watcher-->Hub: Return 200 OK
Hub->PACS: Distribute Context Event [RAD-154]\n//(Report context opened)//
PACS-->Hub: Return 200 OK
Hub->Report: Distribute Context Event [RAD-154]\n//(Report context opened)//
Report-->Hub: Return 202 Accepted
Report->Report: //Detect that the identified//\n//patient context does not//\n//match the patient referenced//\n//in the identified study context//
Report->Hub: Notify Error [RAD-156]\n//(with SyncError)//
Hub-->Report: Return 200 OK
Hub->Watcher: Distribute Context Event [RAD-154]\n//(SyncError received)//
Watcher-->Hub: Return 200 OK
Watcher->Watcher: //Update dashboard with error//
Hub->PACS: Distribute Context Event [RAD-154]\n//(SyncError received)//
PACS-->Hub: Return 200 OK
PACS->User: //Display error to user//
Hub->Report: Distribute Context Event [RAD-154]\n//(SyncError received)//
Report-->Hub: Return 200 OK

@enduml

---

// File: input/images-source/syncerror.plantuml

@startuml syncerror

title Error Handling Workflow

participant "(Initiating)\nSubscriber" as Requester
participant "Hub" as Hub
participant "Subscribers" as Receiver

== Synchronous Event Processing Error from Hub ==

Requester->Hub: //Any context / content change events//\n//e.g. RAD-148, RAD-149, RAD-150, RAD-151//
Hub->Hub: //Failed request//
Hub-->Requester: Return error\nwith HTTP 4xx or 5xx error codes

== Asynchronous Event Processing Error from Hub ==

Requester->Hub: //Any context / content change events//\n//e.g. RAD-148, RAD-149, RAD-150, RAD-151//
Hub->Hub: Return HTTP 202 Accepted
...
Hub->Hub: //Failed processing// 
Hub->Hub: //Generate syncerror event//
Hub->Requester: Generate SyncError Event [RAD-155]

== Synchronous Event Processing Error from Subscriber ==
Hub->Receiver: Distribute Context Event [RAD-154]
Receiver-->Hub: Return HTTP 4xx or 5xx error codes
Hub->Hub: //Generate syncerror event//
Hub->Requester: Generate SyncError Event [RAD-155]
Hub->Receiver: Generate SyncError Event [RAD-155]

== Asynchronous Event Processing Error from Subscriber ==
Hub->Receiver: Distribute Context Event [RAD-154]
Receiver-->Hub: Return HTTP 202 Accepted
Receiver->Receiver: //Failed processing//
Receiver->Hub: Notify Error [RAD-156]
Hub-->Receiver: Return HTTP 200 OK
Hub->Requester: Distribute Context Event [RAD-154]
Hub->Receiver: Distribute Context Event [RAD-154]

== Subscriber Network Error ==
Hub->x Receiver: //Failed websocket heartbeat check//
Hub->Hub: //Remove Receiver from subscription//
Hub->Hub: //Generate syncerror event//
Hub->Requester: Generate SyncError Event [RAD-155]

@enduml

---

// File: input/data/features.yml

---
disable_autonumbering: true
feedback:
  - active: true
    dashboard:
      label: New Issue
      url: https://github.com/IHE/RAD.IRA/issues/new/choose
  - active: true
    dashboard:
      label: Issues
      url: https://github.com/IHE/RAD.IRA/issues

---

// File: input/fsh/example-DiagnosticReportComparisonStudy.fsh

Instance: example-DiagnosticReportComparisonStudyUpdate
InstanceOf: DiagnosticReportUpdate
Title: "DiagnosticReport with Comparison Study Update example"
Description: "Sample Comparison Study Update used in DiagnosticReport-update event"
Usage: #example
* status = FHIRImagingStudyStatus#unknown
* code = LOINC#29252-4 "CT Chest WO Contrast"
* subject = Reference(Patient/example-PatientContext)
* study = Reference(ImagingStudy/example-ImagingStudyContext)

* extension[associatedStudy].valueReference = Reference(ImagingStudy/example-ImagingStudy-Comparison)

Instance: example-ImagingStudy-Comparison
InstanceOf: ImagingStudyContext
Title: "ImagingStudy as Comparison Study example"
Description: "Sample ImagingStudy used as a Comparison Study in DiagnosticReport-update event"
Usage: #example
* identifier[studyUID].type.coding = DICOM#110180 "Study Instance UID"
* identifier[studyUID].system = DICOMUID
* identifier[studyUID].value = "urn:oid:5.6.7.8.9"
* identifier[accession].type.coding = HL7V2#ACSN "Accession ID"
* identifier[accession].system = "http://www.acme.com/identifiers/accession"
* identifier[accession].value = "56789"
* status = FHIRImagingStudyStatus#available
* subject = Reference(Patient/example-PatientContext)

---

// File: input/fsh/example-DiagnosticReportContext.fsh

Instance: example-DiagnosticReportContext
InstanceOf: DiagnosticReportContext
Title: "DiagnosticReport Context example"
Description: "Sample Report Context used in DiagnosticReport-open event"
Usage: #example
* status = FHIRImagingStudyStatus#unknown
* code = LOINC#29252-4 "CT Chest WO Contrast"
* subject = Reference(Patient/example-PatientContext)
* study = Reference(ImagingStudy/example-ImagingStudyContext)

---

// File: input/fsh/example-DiagnosticReportStatusUpdate.fsh

Instance: example-DiagnosticReportStatusUpdate
InstanceOf: DiagnosticReportUpdate
Title: "DiagnosticReport Status Update example"
Description: "Sample Report Status Update used in DiagnosticReport-update event"
Usage: #example
* status = FHIRImagingStudyStatus#final
* code = LOINC#29252-4 "CT Chest WO Contrast"
* subject = Reference(Patient/example-PatientContext)
* study = Reference(ImagingStudy/example-ImagingStudyContext)

---

// File: input/fsh/example-ImagingSelectionContent.fsh

Instance:   example-ImagingSelectionContent
InstanceOf: ImagingSelectionContent
Title:      "ImagingSelection Content example"
Description: "Sample ImagingSelection Content used in DiagnosticReport-update event"
Usage: #example

* status = FHIRObservationStatus#unknown
* subject = Reference(Patient/example-PatientContext)
* derivedFrom = Reference(ImagingStudy/example-ImagingStudyContext)
* code.coding = DICOM#128195 "For Diagnosis"
* studyUid = "1.2.3.4.5"
* seriesUid = "1.2.3.4.5.1"
* instance.uid = "1.2.3.4.5.1.1"
* instance.sopClass.system = OID
* instance.sopClass.code = DICOMSOPClass#"urn:oid:1.2.840.10008.5.1.4.1.1.2"
* instance.imageRegion2D.regionType = FHIRImagingSelection2D#polyline "POLYLINE"
* instance.imageRegion2D.coordinate[+] = 0.25
* instance.imageRegion2D.coordinate[+] = 0.25
* instance.imageRegion2D.coordinate[+] = 0.75
* instance.imageRegion2D.coordinate[+] = 0.25
* instance.imageRegion2D.coordinate[+] = 0.75
* instance.imageRegion2D.coordinate[+] = 0.75
* instance.imageRegion2D.coordinate[+] = 0.25
* instance.imageRegion2D.coordinate[+] = 0.75
* instance.imageRegion2D.coordinate[+] = 0.25
* instance.imageRegion2D.coordinate[+] = 0.25

---

// File: input/fsh/example-ImagingStudyContext.fsh

Instance: example-ImagingStudyContext
InstanceOf: ImagingStudyContext
Title: "ImagingStudy Context example"
Description: "Sample Study Context used in DiagnosticReport-open event"
Usage: #example
* identifier[studyUID].type.coding = DICOM#110180 "Study Instance UID"
* identifier[studyUID].system = DICOMUID
* identifier[studyUID].value = "urn:oid:1.2.3.4.5"
* identifier[accession].type.coding = HL7V2#ACSN "Accession ID"
* identifier[accession].system = "http://www.acme.com/identifiers/accession"
* identifier[accession].value = "12345"
* status = FHIRImagingStudyStatus#available
* subject = Reference(Patient/example-PatientContext)

---

// File: input/fsh/example-ObservationContent.fsh

Instance:   example-ObservationContent
InstanceOf: ObservationContent
Title:      "Observation Content example"
Description: "Sample Observation Content used in DiagnosticReport-update event. The Observation includes a reference to the ImagingSelection in which the observation is derived from."
Usage: #example

* status = FHIRObservationStatus#preliminary
* category.coding = FHIRObservation#imaging "Imaging"
* code = SCT#233767005 "Bilateral hilar lymph node sarcoidosis"
* bodySite[+].coding = SCT#264128009 "Paratracheal"
* bodySite[=].coding = SCT#24028007 "Right"
* bodySite[=].text = "right paratracheal station"
* component[+].code.coding = SCT#410668003 "Length"
* component[=].valueQuantity.value = 1.2
* component[=].valueQuantity.comparator = FHIRQuantityComparator#<= "<="
* component[=].valueQuantity.unit = UCUM#cm "cm"
* component[+].code.coding = SCT#103355008 "Width"
* component[=].valueQuantity.value = 0.8
* component[=].valueQuantity.comparator = FHIRQuantityComparator#<= "<="
* component[=].valueQuantity.unit = UCUM#cm "cm"
* subject = Reference(Patient/example-PatientContext)
* effectiveDateTime = 2020-12-31T23:50:50-05:00
* derivedFrom = Reference(ImagingSelection/example-ImagingSelectionContent)
* performer = Reference(Organization/example-Organization)


Instance: example-Organization
InstanceOf: Organization
Title: "Observation Performer Example"
Description: "Example of a performer for observation, representing the organization that responsible for the content in this resource."
Usage: #example

* name = "Example Medical Center"

---

// File: input/fsh/example-PatientContext.fsh

Instance: example-PatientContext
InstanceOf: PatientContext
Title: "Patient Context example"
Description: "Sample Patient Context used in DiagnosticReport-open event"
Usage: #example
* identifier[patientID].type.coding = HL7V2#MR "Medical Record Number"
* identifier[patientID].system = "http://www.acme.com/identifiers/patient"
* identifier[patientID].value = "1234567"
* name.family = "Smith"
* name.given = "John"

---

