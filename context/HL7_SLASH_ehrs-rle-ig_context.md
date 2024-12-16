File: repos/HL7_SLASH_ehrs-rle-ig/input/pagecontent/add.md

### Dependencies

{% include dependency-table.xhtml %}

### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### IP Statement

{% include ip-statements.xhtml %}

---

File: repos/HL7_SLASH_ehrs-rle-ig/input/pagecontent/downloads.md

### Full IG

Download the entire implementation guide [here](full-ig.zip).

### NPM Package and Definitions

The following file contains all the value sets, profiles, extensions, list of pages and urls in the IG, etc. defined as part of this Implementation Guide:

- [NPM Package](package.tgz)

In addition there are format specific definition files:

- [XML](definitions.xml.zip)
- [JSON](definitions.json.zip)
- [TTL](definitions.ttl.zip)

These files should be the first choice whenever generating any implementation artifacts since they contain all of the rules about what makes these profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply in order to make a conformant implementation.  See the overview on [validating FHIR profiles and resources]({{ site.data.fhir.path }}validation.html).

There are also specific packages for the R4 and R4B FHIR specifications:

#### R5-specific NPM Package and Definitions

- [R5 NPM Package](package.tgz)

### Examples

All of the examples that are used in this Implementation Guide are available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)
- [TTL](examples.ttl.zip)

---

File: repos/HL7_SLASH_ehrs-rle-ig/input/pagecontent/index.md

<div class="dragon">
Trying out FHIR R6 (6.0.0-ballot2). Changes:<br/>
* AuditEvent.category -> type<br/>
* AuditEvent.code -> subtype
</div>

### EHRS Functional Model - Record Lifecycle Events - FHIR Implementation Guide

This implementation guide describes the expected capabilities for an Electronic Health Record System (EHR-S) that intends to adhere to the ISO/HL7 10781 Electronic 
Health Record System Functional Model Release 2 which covers the logging of record lifecycle events. This implementation guide consists of three parts:

* [Profile](StructureDefinition-ehrsrle-provenance.html) on the [Provenance](http://hl7.org/fhir/R5/provenance.html) resource describing the information that should be retained for events involving the creation or updating of electronic health records
* [Profile](StructureDefinition-ehrsrle-auditevent.html) on the [AuditEvent](http://hl7.org/fhir/R5/auditevent.html) resource describing the information that should be retained for events involving the access or any other manipulation of electronic health records
* [Conformance Statement](CapabilityStatement-conformance-ehrs-rle.html) which describes the operations an EHR system claiming conformance to this implementation guide must support.

For the purposes of this implementation guide, "must support" means that the system must be capable of capturing and recording those data elements which are so-marked.

### Introduction

This Implementation Guide offers a methodology to support trusted electronic health record (EHR) and personal health record (PHR) management using HL7 Fast Health Interoperable Resources (FHIR). This approach is based on the Record Infrastructure Section of ISO/HL7 10781:2023 Electronic Health Record System Functional Model (EHR-S FM) Release 2.1, ISO/HL7 16527:2023 Personal Health Record System Functional Model (PHR-S FM) Release 2 and ISO 21089:2018 Trusted End-to-End Information Flows. These Standards describe how EHR/PHR/HIT system functions (software) manage health record entries (data) during the complete record entry lifespan and at each lifecycle event (RLE) occurring therein.

### Actions and Record Entries

From EHR-S FM, Record Infrastructure, Section RI.1, Record Lifecycle and Lifespan:

> Actions are taken to support patient health. Actions are taken in provision of healthcare to individuals. Actions are taken as the result of rules-based EHR System algorithms. Actors (i.e., patients, providers, users, systems) take Actions. (Actions broadly encompass tasks, acts, procedures or services performed or provided.)

> The EHR System captures Actions taken and creates corresponding Record Entries. Record Entries provide persistent evidence of Action occurrence, context, disposition, facts, findings and observations. From the point of Record Entry origination to the end of its lifespan, the EHR System manages each Entry consistent with and according to scope of practice, organizational policy, and jurisdictional law. In support of individual health and in provision of healthcare to individuals, Actors perform Actions and Actions have corresponding Entries in the EHR Record, (i.e., Action instances are documented by Record Entry instances). Record Entries may be captured during the course of the Action or sometime thereafter. The Actor (author/source) of the Record Entry may be the same as an 
Actor performing the Action or not...

 > Actions have associated metadata (e.g., who, what, when, where, why, how, under what conditions, in what context). The corresponding Record Entry captures this metadata along with other Action and Record Entry related information.

> Each Record Entry also includes its own provenance metadata such as who (authoring Actor) and when (documented). Record Entries may be encapsulated to bind Actor (individual, organization, and/or system) signatures to data and metadata content and data/time of occurrence. Actions and related Record Entries capture a chronology of patient health and healthcare and also a chronology of operations and services provided in/by a healthcare enterprise. Record Entries reflect changes in health information from the time it was created, to the time it was amended, sent, received, etc. In this manner, each Record Entry serves as persistent evidence of an Action taken, enabling providers to maintain comprehensive information that may be needed for legal, [clinical,] business, and disclosure purposes. To satisfy these purposes, Record Entries must also be retained and persisted without alteration. Record Entries have both a lifecycle and a lifespan. Lifecycle Events include originate, retain, amend, verify, attest, access/view, de-identify, transmit/receive, and more. Lifecycle Events occur at various points in a Record Entry lifespan, always starting with a point of origination and retention (i.e., when the Entry is first created and stored).

> A Record Entry may have a pre and post Event state if content is modified. In this case, the original Record Entry is preserved (with signature binding) and a new Entry is created (with new signature binding). A Record Entry contains data and metadata, in multiple formats, following various conventions and standards. Included data may be tagged, and/or delimited, structured (concise, encoded, computable), or unstructured (free form, non-computable). Data may be encoded as text, document, images, audio, waveforms, in ASCII, binary or other encoding."

EHR, PHR and other Systems, designed to follow ISO/HL7 10781, ISO 16527 and/or ISO 21089 record management methodology and incorporate FHIR resources natively, will create Record Entries with one or more FHIR resource instances. These FHIR resources will be bound to an
[AuditEvent](http://hl7.org/fhir/R5/auditevent.html) resource instance and, in the case where content is new or updated, a 
[Provenance](http://hl7.org/fhir/R4/provenance.html) resource instance in the Record Entry.

### Record Lifecycle Events (RLEs)

As described above, Record Entries have a lifespan and may have [lifecycle events (RLEs)](ValueSet-record-lifecycle-events.html) occurring during that lifespan. Following is the current list of RLEs:

<table border="1" cellspacing="0" cellpadding="5" width="661" style="border-collapse:collapse;border:none">
  <col style="border:solid windowtext 1.0pt"/>
  <col style="border:solid windowtext 1.0pt"/>
  <col style="border:solid windowtext 1.0pt"/>
  <tr style="border:solid windowtext 2.25pt">
    <td>
    <span style="font-weight:bold;transform: rotate(270deg) translate(-65px,30px);white-space:nowrap;display:block;height:100px;width:20px;padding-left:50px">Sec RI.1.1.x</span></td>
    <td style="font-weight:bold">Record Entry Lifecycle Event</td>
    <td style="font-weight:bold">
      <p>From ISO/HL7 10781 EHR-S Functional Model R2<br/>
          &#8226; RI - Record Infrastructure<br/>
          &#8226; RI.1 - Record Lifecycle and Lifespan</p>
      <p>Occurs when an Agent...</p></td>
  </tr>
  <tr>
    <td>1</td>
    <td>Originate/Retain</td>
    <td>Causes the system to: a) initiate capture of potential record content, and b) incorporate that content into the storage considered a permanent part of the health record</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Update/Amend</td>
    <td>Causes the system to make one or more changes to record entry content currently residing in storage considered permanent (persistent)</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Transform/Translate</td>
    <td>Causes the system to change the form, language or code system used to represent record entry content</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Attest</td>
    <td>Causes the system to capture the agent’s digital signature (or equivalent indication) during formal validation of record entry content</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Access/View</td>
    <td>Causes the system to obtain and open a record entry for inspection or review</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Output/Report</td>
    <td>Causes the system to produce and deliver record entry content in a particular form and manner</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Disclose</td>
    <td>Causes the system to release, transfer, provision access to, or otherwise divulge record entry content</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Transmit</td>
    <td>Causes the system to send record entry content from one (EHR/PHR/other) system to another</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Receive/Retain</td>
    <td>Causes the system to:  a) initiate capture of data content from elsewhere, and b) incorporate that content into the storage considered a permanent part of the health record</td>
  </tr>
  <tr>
    <td>10</td>
    <td>De-Identify</td>
    <td>Causes the system to scrub record entry content to reduce the association between a set of identifying data and the data subject in a way that might or might not be reversible</td>
  </tr>
  <tr>
    <td>11</td>
    <td>Pseudonymize</td>
    <td>Causes the system to remove record entry content to reduce the association between a set of identifying data and the data subject in a way that may be reversible.</td>
  </tr>
  <tr>
    <td>12</td>
    <td>Re-Identify</td>
    <td>Causes the system to restore information to data that allows identification of information source and/or information subject</td>
  </tr>
  <tr>
    <td>13</td>
    <td>Extract</td>
    <td>Causes the system to selectively pull out a subset of record entry content, based on explicit criteria</td>
  </tr>
  <tr>
    <td>14</td>
    <td>Archive</td>
    <td>Causes the system to create and move archive artifacts containing record entry content, typically to long-term offline storage</td>
  </tr>
  <tr>
    <td>15</td>
    <td>Restore</td>
    <td>Causes the system to recreate record entries and their content from a previous created archive artifact</td>
  </tr>
  <tr>
    <td>16</td>
    <td>Destroy/Delete</td>
    <td>Causes the system to permanently erase record entry content from the system</td>
  </tr>
  <tr>
    <td>17</td>
    <td>Deprecate</td>
    <td>Causes the system to tag record entry(ies) as obsolete, erroneous or untrustworthy, to warn against its future use</td>
  </tr>
  <tr>
    <td>18</td>
    <td>Re-Activate</td>
    <td>Causes the system to recreate or restore full status to record entries previously deleted or deprecated</td>
  </tr>
  <tr>
    <td>19</td>
    <td>Merge</td>
    <td>Causes the system to combine or join content from two or more record entries, resulting in a single logical record entry</td>
  </tr>
  <tr>
    <td>20</td>
    <td>Unmerge</td>
    <td>Causes the system to reverse a previous record entry merge operation, rendering them separate again</td>
  </tr>
  <tr>
    <td>21</td>
    <td>Link</td>
    <td>Causes the system to connect related record entries</td>
  </tr>
  <tr>
    <td>22</td>
    <td>Unlink</td>
    <td>Causes the system to disconnect two or more record entries previously connected, rendering them separate (disconnected) again</td>
  </tr>
  <tr>
    <td>23</td>
    <td>Add Legal Hold</td>
    <td>Causes the system to tag or otherwise indicate special access management and suspension of record entry deletion/destruction, if deemed relevant to a lawsuit or which are reasonably anticipated to be relevant or to fulfill organizational policy under the legal doctrine of "duty to preserve"</td>
  </tr>
  <tr>
    <td>24</td>
    <td>Remove Legal Hold</td>
    <td>Causes the system to remove a tag or other cues for special access management had required to fulfill organizational policy under the legal doctrine of "duty to preserve"</td>
  </tr>
  <tr>
    <td>25</td>
    <td>Verify</td>
    <td>Causes the system to confirm compliance of data or data objects with regulations, requirements, specifications, or other imposed conditions based on organizational policy</td>
  </tr>
  <tr>
    <td>26</td>
    <td>Encrypt</td>
    <td>Causes the system to encode record entry content in a cipher</td>
  </tr>
  <tr>
    <td>27</td>
    <td>Decrypt</td>
    <td>Causes the system to decode record entry content from a cipher</td>
  </tr>
    <tr>
    <td>28</td>
    <td>Copy Content</td>
    <td>Causes the system to select and duplicate record entry content in an electronic clipboard with the intent to paste that content into another record entry (precursor action to Paste Content Lifecycle Event)</td>
  </tr>
  <tr>
    <td>29</td>
    <td>Paste Content</td>
    <td>Causes the system to insert record content from the electronic clipboard (thus duplicating that content) into another record entry (successor action to Copy Content Lifecycle Event)</td>
  </tr>
</table>

### CRUDE Events

CRUDE = Create, Read, Update, Delete. Record Lifecycle Events (RLEs) are specializations of basic CRUDE events for purposes of health data/record management end-to-end. End-to-end means: 1) for the duration of data/record lifespan within the source EHR, PHR or other system, and 2) following the path of data/record exchange system by system downstream to the ultimate point of access/use.

FHIR resources – when captured natively in the source EHR, PHR or other system Record Entries – include resources resulting from the Action taken (e.g., register patient, order medication, take progress note). Plus, all RLEs depend on the AuditEvent resource to capture basic metadata. Plus, all RLEs which <b>C</b>reate or <b>U</b>pdate resource content depend on the Provenance resource to capture content-related metadata. The following table shows how RLEs relate to [CRUDE events](https://hl7.org/fhir/R5/valueset-audit-event-action.html). Some RLEs create separate new artifacts as shown.

<table border="1" cellspacing="0" cellpadding="5" style="border-collapse:collapse;border:solid windowtext 1pt;">
  <col style="width:20px;height:20px"/>
  <col style="width:200px"/>
  <col style="width:20px"/>
  <col style="width:30px"/>
  <col style="width:20px"/>
  <col style="width:300px"/>
  <col style="width:300px"/>
  <tr style="border:solid windowtext 2.25pt">
  <td rowspan="2">
    <span style="font-weight:bold;transform: rotate(270deg) translate(-95px,30px);white-space:nowrap;display:block;height:100px;width:20px;padding-left:50px">Sec RI.1.1.x</span></td>
    <td rowspan="2" style="border:solid windowtext 2.25pt;font-weight:bold">
      <b>Record Lifecycle Event</b>
    </td>
    <td colspan="3" valign="top" style="text-align:center">
      <b>FHIR Resources</b>
      <br/>
      in Record Entry
    </td>
    <td rowspan="2" style="border:solid windowtext 2.25pt;font-weight:bold">
      CRUD - At each RLE,<br/>
      per Record Entry instance<br/>
      C - Create<br/>
      R - Read<br/>
      U - Update<br/>
      D - Delete
    </td>
    <td rowspan="2" style="border:solid windowtext 2.25pt;font-weight:bold">
      New Artifacts<br/>
      <span style="text-decoration:underline">C</span>reated at RLE
    </td>
  </tr>
  <tr style="height:60pt;border:solid windowtext 2.25pt">
    <td style="border:solid windowtext 1pt;transform: rotate(270deg) translate(0,20px)">
      Audit<br/>
      Event
    </td>
    <td style="border:solid windowtext 1pt;transform: rotate(270deg) translate(0,20px)">
      Prove-<br/>
      nance
    </td>
    <td style="border:solid windowtext 1pt;transform: rotate(270deg) translate(0,20px)">
      Action Related
    </td>
  </tr>
  <tr>
    <td>1</td>
    <td>Originate/Retain</td>
    <td>1..1</td>
    <td>1..1</td>
    <td>1..*</td>
    <td>C New Instance(s)</td>
    <td>---</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Update/Amend</td>
    <td>1..1</td>
    <td>1..1</td>
    <td>1..*</td>
    <td>C or U Instance(s)</td>
    <td>---</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Transform/Translate</td>
    <td>1..1</td>
    <td>1..1<sup>a</sup></td>
    <td>1..*</td>
    <td>---</td>
    <td>C New transformed/ translated artifact</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Attest</td>
    <td>1..1</td>
    <td>1..1</td>
    <td>1..*</td>
    <td>
      C or U Instance(s)<br/>
      (Provenance incl. Signature)
    </td>
    <td>---</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Access/View</td>
    <td>1..1</td>
    <td>1..1<sup>a</sup></td>
    <td>1..*</td>
    <td>R Instance(s)</td>
    <td>C New extract artifact</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Output/Report</td>
    <td>1..1</td>
    <td>1..1<sup>a</sup></td>
    <td>1..*</td>
    <td>---</td>
    <td>C New output/report artifact</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Disclose</td>
    <td>1..1</td>
    <td>1..1<sup>a</sup></td>
    <td>1..*</td>
    <td>---</td>
    <td>C New disclosure artifact</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Transmit</td>
    <td>1..1</td>
    <td>1..1<sup>a</sup></td>
    <td>1..*</td>
    <td>---</td>
    <td>C New transmittal artifact</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Receive/Retain</td>
    <td>1..1</td>
    <td>1..1</td>
    <td>1..*</td>
    <td>C New Instance(s)</td>
    <td>---</td>
  </tr>
  <tr>
    <td>10</td>
    <td>De-Identify</td>
    <td>1..1</td>
    <td>1..1<sup>a</sup></td>
    <td>1..*</td>
    <td>---</td>
    <td>C New de-identified artifact</td>
  </tr>
  <tr>
    <td>11</td>
    <td>Pseudonymize</td>
    <td>1..1</td>
    <td>1..1<sup>a</sup></td>
    <td>1..*</td>
    <td>---</td>
    <td>C New pseudomynized artifact</td>
  </tr>
  <tr>
    <td>12</td>
    <td>Re-Identify</td>
    <td>1..1</td>
    <td>1..1<sup>b</sup></td>
    <td>1..*</td>
    <td>C or U Instance(s)<sup>b</sup></td>
    <td>---</td>
  </tr>
  <tr>
    <td>13</td>
    <td>Extract</td>
    <td>1..1</td>
    <td>1..1<sup>a</sup></td>
    <td>1..*</td>
    <td>---</td>
    <td>C New extract artifact</td>
  </tr>
  <tr>
    <td>14</td>
    <td>Archive</td>
    <td>1..1</td>
    <td>1..1<sup>a</sup></td>
    <td>1..*</td>
    <td>---</td>
    <td>C New archive artifact</td>
  </tr>
  <tr>
    <td>15</td>
    <td>Restore</td>
    <td>1..1</td>
    <td>1..1<sup>b</sup></td>
    <td>1..*</td>
    <td>C or U Instance(s)<sup>b</sup></td>
    <td>---</td>
  </tr>
  <tr>
    <td>16</td>
    <td>Destroy/Delete</td>
    <td>1..1</td>
    <td>0..0</td>
    <td>1..*</td>
    <td>D Instance(s)</td>
    <td>---</td>
  </tr>
  <tr>
    <td>17</td>
    <td>Deprecate</td>
    <td>1..1</td>
    <td>1..1<sup>b</sup></td>
    <td>1..*</td>
    <td>C or U Instance(s)<sup>b</sup></td>
    <td>---</td>
  </tr>
  <tr>
    <td>18</td>
    <td>Re-Activate</td>
    <td>1..1</td>
    <td>1..1<sup>b</sup></td>
    <td>1..*</td>
    <td>C or U Instance(s)<sup>b</sup></td>
    <td>---</td>
  </tr>
  <tr>
    <td>19</td>
    <td>Merge</td>
    <td>1..1</td>
    <td>1..1<sup>b</sup></td>
    <td>1..*</td>
    <td>C or U Instance(s)<sup>b</sup></td>
    <td>---</td>
  </tr>
  <tr>
    <td>20</td>
    <td>Unmerge</td>
    <td>1..1</td>
    <td>1..1<sup>b</sup></td>
    <td>1..*</td>
    <td>C or U Instance(s)<sup>b</sup></td>
    <td>---</td>
  </tr>
  <tr>
    <td>21</td>
    <td>Link</td>
    <td>1..1</td>
    <td>1..1<sup>b</sup></td>
    <td>1..*</td>
    <td>C or U Instance(s)<sup>b</sup></td>
    <td>---</td>
  </tr>
  <tr>
    <td>22</td>
    <td>Unlink</td>
    <td>1..1</td>
    <td>1..1<sup>b</sup></td>
    <td>1..*</td>
    <td>C or U Instance(s)<sup>b</sup></td>
    <td>---</td>
  </tr>
  <tr>
    <td>23</td>
    <td>Add Legal Hold</td>
    <td>1..1</td>
    <td>1..1<sup>b</sup></td>
    <td>1..*</td>
    <td>C or U Instance(s)<sup>b</sup></td>
    <td>---</td>
  </tr>
  <tr>
    <td>24</td>
    <td>Remove Legal Hold</td>
    <td>1..1</td>
    <td>1..1<sup>b</sup></td>
    <td>1..*</td>
    <td>C or U Instance(s)<sup>b</sup></td>
    <td>---</td>
  </tr>
  <tr>
    <td>25</td>
    <td>Verify</td>
    <td>1..1</td>
    <td>1..1<sup>b</sup></td>
    <td>1..*</td>
    <td>C or U Instance(s)<sup>b</sup></td>
    <td>---</td>
  </tr>
  <tr>
    <td>26</td>
    <td>Encrypt</td>
    <td>1..1</td>
    <td>1..1<sup>a</sup></td>
    <td>1..*</td>
    <td>---</td>
    <td>C New encrypted artifact</td>
  </tr>
  <tr>
    <td>27</td>
    <td>Decrypt</td>
    <td>1..1</td>
    <td>1..1</td>
    <td>1..*</td>
    <td>C or U Instance(s)<sup>b</sup></td>
    <td>---</td>
  </tr>
  <tr>
    <td>28</td>
    <td>Copy Record Content</td>
    <td>1..1</td>
    <td>1..1</td>
    <td>1..*</td>
    <td>R Instance(s)</td>
    <td>C New clipboard artifact</td>
  </tr>
  <tr>
    <td>29</td>
    <td>Paste Record Content</td>
    <td>1..1</td>
    <td>1..1</td>
    <td>1..*</td>
    <td>C or U Instance(s)</td>
    <td>---</td>
  </tr>
</table>

<sup>a</sup>: RLE typically <b>C</b>reates a new artifact (see last column) and the (one) Provenance Resource is bound to this artifact (not Record Entry instance(s)).<br/>
<sup>b</sup>: Depending on system design, RLE may <b>C</b>reate or <b>U</b>pdate Record Entry instance(s) and thus the (one) Provenance Resource is bound to these new instance(s).<br/>

### Record Lifecycle Event Metadata Captured in FHIR Resources

The following table shows the FHIR Resources and applicable Attributes captured - event, provenance and evidentiary metadata - at each occurrence of a Record Lifecycle Event. [W5 metadata](https://hl7.org/fhir/R5/w5.html) includes who, what, when, where, why attributes as shown below. W5 metadata elements are required.

<table border="1" cellspacing="0" cellpadding="5" style="border-collapse:collapse;border:solid windowtext 1pt">
  <thead>
    <tr>
      <td style="font-weight:bold">Record Lifecycle Event Metadata</td>
      <td style="font-weight:bold">FHIR Resource</td>
      <td style="font-weight:bold">Resource Element(s)</td>
    </tr>
  </thead>
  <tr>
    <td colspan="3" style="background:#C6D9F1">WHO</td>
  </tr>
  <tr>
    <td rowspan="3">Organization</td>
    <td>Provenance</td>
    <td>signature : Signature 0..*</td>
  </tr>
  <tr>
    <td>Provenance.agent : 0..*</td>
    <td>
      role : Coding 1..1 « ProvenanceAgentRole+ »<br/>
      actor : Reference(Organization) 0..1<br/>
      userId : Identifier 0..1
    </td>
  </tr>
  <tr>
    <td>AuditEvent.agent : 1..*</td>
    <td>
      role : CodeableConcept 0..* « ActiveParticipantRoleCode »<br/>
      reference : Reference(Organization) 0..1<br/>
      userId : Identifier 0..1
    </td>
  </tr>
  <tr>
    <td rowspan="3">Patient</td>
    <td>Provenance</td>
    <td>signature : Signature 0..*</td>
  </tr>
  <tr>
    <td>Provenance.agent : 0..*</td>
    <td>
      role : Coding 1..1 « ProvenanceAgentRole+ »<br/>
      actor : Reference(Patient) 0..1<br/>
      userId : Identifier 0..1
    </td>
  </tr>
  <tr>
    <td>AuditEvent.agent : 1..*</td>
    <td>
      role : CodeableConcept 0..* « ActiveParticipantRoleCode »<br/>
      reference : Reference(Patient) 0..1<br/>
      userId : Identifier 0..1
    </td>
  </tr>
  <tr>
    <td rowspan="3">
      <p>Action - Performer</p>
      <p>Record - Author/User</p>
    </td>
    <td>Provenance</td>
    <td>signature : Signature 0..*</td>
  </tr>
  <tr>
    <td>Provenance.agent : 0..*</td>
    <td>
      role : Coding 1..1 « ProvenanceAgentRole+ »<br/>
      actor : Reference (Organization|Practitioner| Patient|Device|RelatedPerson) 0..1<br/>
      userId : Identifier 0..1
    </td>
  </tr>
  <tr>
    <td>AuditEvent.agent : 1..*</td>
    <td>
      role : CodeableConcept 0..* « ActiveParticipantRoleCode »<br/>
      reference : Reference(Organization|Practitioner| Patient|Device|RelatedPerson) 0..1<br/>
      userId : Identifier 0..1
    </td>
  </tr>
  <tr>
    <td rowspan="3">Record - System/Device</td>
    <td>Provenance</td>
    <td>signature : Signature 0..*</td>
  </tr>
  <tr>
    <td>Provenance.agent : 0..*</td>
    <td>
      role : Coding 1..1 « ProvenanceAgentRole+ »<br/>
      actor :Reference(Device) 0..1<br/>
      userId : Identifier 0..1
    </td>
  </tr>
  <tr>
    <td>AuditEvent.agent : 1..*</td>
    <td>
      role : CodeableConcept 0..* « ActiveParticipantRoleCode »<br/>
      reference : Reference(Device) 0..1<br/>
      userId : Identifier 0..1
    </td>
  </tr>
  <tr>
    <td colspan="3" style="background:#C6D9F1">WHAT</td>
  </tr>
  <tr>
    <td rowspan="2">Action - Taken</td>
    <td>Provenance</td>
    <td>Activity : Coding 0..1 « ProvenanceActivity »</td>
  </tr>
  <tr>
    <td>AuditEvent</td>
    <td>Event : BackboneElement 1..1</td>
  </tr>
  <tr>
    <td rowspan="2">Record - Lifecyle Event</td>
    <td>AuditEvent</td>
    <td>
      type : Coding 1..1 « AuditEventType+ »<br/>
      subtype : Coding 0..1 « AuditEventSubType+ »<br/>
      action : code 0..1 « AuditEventAction»
    </td>
  </tr>
  <tr>
    <td>AuditEvent.entity : 0..*</td>
    <td>
      identifier : Identifier 0..1<br/>
      reference : Reference(Any) 0..1<br/>
      type : Coding 0..1 « AuditEventEventType »<br/>
      role : Coding 0..1 « AuditEventEventRole »<br/>
      lifecycle : Coding 0..1</td>
  </tr>
  <tr>
    <td colspan="3" valign="top" style="background:#C6D9F1">WHEN</td>
  </tr>
  <tr>
    <td rowspan="2">Action - Date/Time</td>
    <td>Provenance</td>
    <td>period : Period 0..1</td>
  </tr>
  <tr>
    <td>AuditEvent</td>
    <td>recorded : instant 1..1</td>
  </tr>
  <tr>
    <td rowspan="2">Record - Date/Time</td>
    <td>Provenance</td>
    <td>recorded : instant 1..1</td>
  </tr>
  <tr>
    <td>AuditEvent</td>
    <td>recorded : instant 1..1</td>
  </tr>
  <tr>
    <td colspan="3" valign="top" style="background:#C6D9F1">WHERE</td>
  </tr>
  <tr>
    <td rowspan="2">Action - Physical Location</td>
    <td>Provenance</td>
    <td>location : Reference(Location) 0..1</td>
  </tr>
  <tr>
    <td>AuditEvent.source : 1..1</td>
    <td>
      site : BackboneElement 0..1<br/>
      identifier : string 1..1<br/>
      type : Coding 0..* « AuditEventSourceType »
    </td>
  </tr>
  <tr>
    <td rowspan="2">Record - Network Address</td>
    <td>Provenance</td>
    <td>location : Reference(Location) 0..1</td>
  </tr>
  <tr>
    <td>AuditEvent.agent.network</td>
    <td>
      address : BackboneElement 0..1<br/>
      type : code 0..1 « AuditEventAgentNetworkType »
    </td>
  </tr>
  <tr>
    <td colspan="3" valign="top" style="background:#C6D9F1">WHY</td>
  </tr>
  <tr>
    <td rowspan="2">Action - Reason, Rationale, Purpose</td>
    <td>Provenance</td>
    <td>reason : Coding 0..*</td>
  </tr>
  <tr>
    <td>AuditEvent.agent</td>
    <td>purposeOfUse : Coding 0..* « AuditEventPurposeOfUse »</td>
  </tr>
  <tr>
    <td rowspan="3">Record - Reason, Rationale, Purpose</td>
    <td rowspan="2">Provenance</td>
    <td>reason : Coding 0..*</td>
  </tr>
  <tr>
    <td>policy : uri 0..*</td>
  </tr>
  <tr>
    <td>AuditEvent</td>
    <td>purposeOfEvent : Coding 0..*</td>
  </tr>
  <tr>
    <td colspan="3" valign="top" style="background:#C6D9F1">Additional Evidentiary Metadata, as applicable</td>
  </tr>
  <tr>
    <td>Digital Signature(s)</td>
    <td>
      Provenance<br/>
      <span>one per signature</span>
    </td>
    <td>signature : Signature 0..*</td>
  </tr>
  <tr>
    <td rowspan="2">Record Entry ID</td>
    <td>Provenance</td>
    <td>Target : Reference(Any) 0..*</td>
  </tr>
  <tr>
    <td>AuditEvent.entity : 0..*</td>
    <td>
      identifier : Identifier 0..1<br/>
      reference : Reference(Any) 0..1
    </td>
  </tr>
  <tr>
    <td rowspan="3">
      Record Entry Content ID(s):<br/>
      data, docs, artifacts</td>
    <td>Provenance</td>
    <td>Target : Reference(Any) 0..*</td>
  </tr>
  <tr>
    <td>
      Provenance.entity : 0..*<br/>
      <span>one per Record Entry</span>
    </td>
    <td>
      role : Coding 0..1 « ProvenanceEntityRole »<br/>
      type : Coding 0..1 « ProvenanceResourceType »<br/>
      reference : Reference(Any) 0..1<br/>
      agent : [see Provenance.agent]
    </td>
  </tr>
  <tr>
    <td>
      AuditEvent.entity : 0..*<br/>
      <span>one per Content item</span>
    </td>
    <td>
      identifier : Identifier 0..1<br/>
      reference : Reference(Any) 0..1
    </td>
  </tr>
  <tr>
    <td rowspan="2">Corresponding/linked Record Entry(ies)</td>
    <td>
      Provenance.entity : 0..*<br/>
      <span>one per linked Record Entry</span>
    </td>
    <td>
      role : Coding 0..1 « ProvenanceEntityRole »<br/>
      type : Coding 0..1 « ProvenanceResourceType »<br/>
      reference : Reference(Any) 0..1<br/>
      agent : [see Provenance.agent]
    </td>
  </tr>
  <tr>
    <td>
      AuditEvent.entity : 0..*<br/>
      <span>one per linked Record Entry</span>
    </td>
    <td>
      identifier : Identifier 0..1<br/>
      reference : Reference(Any) 0..1
    </td>
  </tr>
  <tr>
    <td rowspan="2">Amendment/Translation Sequence</td>
    <td>
      Provenance.entity : 0..*<br/>
      <span>one for each Record Entry in sequence</span>
    </td>
    <td>
      role : Coding 0..1 « ProvenanceEntityRole »<br/>
      type : Coding 0..1 « ProvenanceResourceType »<br/>
      reference : Reference(Any) 0..1<br/>
      agent : [see Provenance.agent]
    </td>
  </tr>
  <tr>
    <td>AuditEvent.entity : 0..*</td>
    <td>lifecycle : Coding 0..1</td>
  </tr>
  <tr>
    <td rowspan="2">Pointer to Pre Event Entry, if chained</td>
    <td>
      Provenance.entity : 0..*<br/>
      <span>one per previous instance</span>
    </td>
    <td>
      role : Coding 0..1 « ProvenanceEntityRole »<br/>
      type : Coding 0..1 « ProvenanceResourceType »<br/>
      reference : Reference(Any) 0..1<br/>
      agent : [see Provenance.agent]
    </td>
  </tr>
  <tr>
    <td>
      AuditEvent.entity : 0..*<br/>
      <span>one per previous instance</span>
    </td>
    <td>
      identifier : Identifier 0..1<br/>
      reference : Reference(Any) 0..1
    </td>
  </tr>
  <tr>
    <td rowspan="3">
      Source of Copied Content<br/>
      (e.g. copy/paste template)
    </td>
    <td>
      Provenance.entity : 0..*<br/>
      <span>one per source</span>
    </td>
    <td>
      role : Coding 0..1 « ProvenanceEntityRole »<br/>
      type : Coding 0..1 « ProvenanceResourceType »<br/>
      reference : Reference(Any) 0..1<br/>
      agent : [see Provenance.agent]
    </td>
  </tr>
  <tr>
    <td>
      AuditEvent.source : 1..1<br/>
      <span>one per source</span>
    </td>
    <td>
      site : BackboneElement 0..1<br/>
      identifier : string 1..1<br/>
      type : Coding 0..* « AuditEventSourceType »
    </td>
  </tr>
  <tr>
    <td>
      AuditEvent.entity : 0..*<br/>
      <span>one per source</span>
    </td>
    <td>
      identifier : Identifier 0..1<br/>
      reference : Reference(Any) 0..1<br/>
      type : Coding 0..1 « AuditEventEventType »<br/>
      role : Coding 0..1 « AuditEventEventRole »
    </td>
  </tr>
  <tr>
    <td>Event is known Disclosure</td>
    <td>AuditEvent.entity : 0..*</td>
    <td>
      lifecycle : Coding 0..1<br/>
      where lifecycle = "disclosure"</td>
  </tr>
  <tr>
    <td rowspan="2">Record Entry Permissions</td>
    <td>
      AuditEvent.agent : 1..*<br/>
      <span>one per agent</span>
    </td>
    <td>
      <b>[for role-based permissions]</b><br/>
      role : CodeableConcept 0..* « [as specified] »<br/>
      <b>[for user-based permissions]</b><br/>
      reference : Reference(Practitioner|Organization|Device|Patient|RelatedPerson) 0..1<br/>
      userId : Identifier 0..1
    </td>
  </tr>
  <tr>
    <td>
      AuditEvent.entity : 0..*<br/>
      <span>One per agent label</span>
    </td>
    <td>securityLabel : Coding 0..1 « [as specified] »</td>
  </tr>
  <tr>
    <td rowspan="2">Event Transaction Entries</td>
    <td>
      Provenance.entity : 0..*<br/>
      <span>one per Record Entry</span>
    </td>
    <td>
      role : Coding 0..1 « ProvenanceEntityRole »<br/>
      type : Coding 0..1 « ProvenanceResourceType »<br/>
      reference : Reference(Any) 0..1<br/>
      agent : [see Provenance.agent]
    </td>
  </tr>
  <tr>
    <td>
      AuditEvent.entity : 0..*<br/>
      <span>one per Record Entry</span>
    </td>
    <td>
      identifier : Identifier 0..1<br/>
      reference : Reference(Any) 0..1<br/>
      type : Coding 0..1 « AuditEventEntityType »
    </td>
  </tr>
  <tr>
    <td rowspan="2">Identifier/Version of Translation Tools</td>
    <td>
      Provenance.entity : 0..*<br/>
      <span>one per translation event</span>
    </td>
    <td>
      role : Coding 0..1 « ProvenanceEntityRole »<br/>
      type : Coding 0..1 « ProvenanceResourceType »<br/>
      reference : Reference(Any) 0..1<br/>
      agent : [see Provenance.agent]
    </td>
  </tr>
  <tr>
    <td>
      AuditEvent.agent : 1..*<br/>
      <span>one per translation event</span>
    </td>
    <td>
      role : CodeableConcept 0..* « ActiveParticipantRoleCode »<br/>
      reference : Reference(Device) 0..1<br/>
      userId : Identifier 0..1
    </td>
  </tr>
</table>

### EXAMPLE - Lifecycle Events for a Record Entry

Action = Medication Request

Record Lifecycle Event (RLEs), in sequence: 1) originate/retain, 2) update/amend, 3) attest, 4) access/view...

Note that Record Entries have a pre-lifecycle event state (except for the genesis originate/retain event). Record Entries also have a post-lifecycle event state (except for the terminus destroy/delete event).

<table border="1" cellspacing="0" cellpadding="5" style="border-collapse:collapse;border:solid windowtext 2pt">
  <tr style="border:solid windowtext 2pt">
    <td>Event Sequence</td>
    <td>Record Lifecycle Event</td>
    <td>
      Record Entry Content - including<br/>
      FHIR Resource Instances
    </td>
    <td>
      Retaining<br/>
      without Alteration
    </td>
  </tr>
  <tr>
    <td>1 - Pre</td>
    <td rowspan="2">Originate/Retain Order</td>
    <td>---</td>
    <td>---</td>
  </tr>
  <tr>
    <td>1 - Post</td>
    <td>
      Medication v1<br/>
      MedicationRequest v1<br/>
      AuditEvent #1<br/>
      Provenance #1
    </td>
    <td>---</td>
  </tr>
  <tr style="border-top:solid windowtext 2pt">
    <td>2 - Pre</td>
    <td rowspan="2">Update/Amend Order</td>
    <td>
      Medication v1<br/>
      MedicationRequest v1<br/>
      AuditEvent #1<br/>
      Provenance #1
    </td>
    <td>All event 1 Instances</td>
  </tr>
  <tr>
    <td>2 - Post</td>
    <td>
      Medication v2<br/>
      MedicationRequest v2<br/>
      AuditEvent #1,#2<br/>
      Provenance #1,#2
    </td>
    <td>All event 1 Instances</td>
  </tr>
  <tr style="border-top:solid windowtext 2pt">
    <td>3 - Pre</td>
    <td rowspan="2">Attest Order</td>
    <td>
      Medication v2<br/>
      MedicationRequest v2<br/>
      AuditEvent #1,#2<br/>
      Provenance #1,#2
    </td>
    <td>All event 1/2 Instances</td>
  </tr>
  <tr>
    <td>3 - Post</td>
    <td>
      Medication v3<br/>
      MedicationRequest v3<br/>
      AuditEvent #1,#2,#3<br/>
      Provenance #1,#2,#3 (with signature )
    </td>
    <td>All event 1/2 Instances</td>
  </tr>
  <tr style="border-top:solid windowtext 2pt">
    <td>4 - Pre</td>
    <td rowspan="2">Access/View Order</td>
    <td>
      Medication v3<br/>
      MedicationRequest v3<br/>
      AuditEvent #1,#2,#3<br/>
      Provenance #1,#2,#3
    </td>
    <td>All event 1/2/3 Instances</td>
  </tr>
  <tr style="height:16.6pt">
    <td>4 - Post</td>
    <td>AuditEvent #1,#2,#3,#4</td>
    <td>All event 1/2/3 Instances</td>
  </tr>
  <tr style="border:solid windowtext 2pt">
    <td colspan="4">And on...</td>
  </tr>
</table>

---

