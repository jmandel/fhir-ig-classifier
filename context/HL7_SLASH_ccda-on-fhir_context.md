File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/background.md

[Previous Page - Home Page](index.html)

{% include stu-note.xml %}

### Clinical Documents

Clinical documents come in many forms, from paper documents in a filing cabinet to electronic documents shared via Health Information Exchanges (HIEs). Regardless of their form, clinical documents share key characteristics that differentiate them from messages or queries for discrete data elements. 

#### Key Characteristics of Clinical Documents

* Persistence – A clinical document continues to exist in an unaltered state, for a time period defined by local and regulatory requirements. Note: documents outlive the servers (and often the syntax) on which they are created. 
* Stewardship – A clinical document is maintained by an organization entrusted with its care. 
* Potential for authentication – A clinical document is an assemblage of information that is intended to be legally authenticated. 
* Context – A clinical document establishes the default context for its contents. 
* Wholeness – Authentication of a clinical document applies to the whole and does not apply to portions of the document without the full context of the document. 
* Human readability – A clinical document is human readable. 

### Clinical Document Architecture

The HL7 Version 3 Clinical Document Architecture (CDA®) is a document markup standard that specifies the structure and semantics of "clinical documents" for the purpose of exchange between healthcare providers and patients. It defines a clinical document as having the following six characteristics: 1) Persistence, 2) Stewardship, 3) Potential for authentication, 4) Context, 5) Wholeness and 6) Human readability.

A CDA can contain any type of clinical content -- typical CDA documents would be a Discharge Summary, Imaging Report, Admission & Physical, Pathology Report and more. The most popular use is for inter-enterprise information exchange, such as is envisioned for a US Health Information Exchange (HIE).

More information on CDA can be found [here](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7). 

### Consolidated CDA (C-CDA)

The Consolidated CDA (C-CDA) implementation guide contains a library of CDA templates, incorporating and harmonizing previous efforts from Health Level Seven (HL7), Integrating the Healthcare Enterprise (IHE), and Health Information Technology Standards Panel (HITSP). It represents harmonization of the HL7 Health Story guides, HITSP C32, related components of IHE Patient Care Coordination (IHE PCC), and Continuity of Care (CCD). C-CDA Release 1 included all required CDA templates in Final Rules for Stage 1 Meaningful Use and 45 CFR Part 170 – Health Information Technology: Initial Set of Standards, Implementation Specifications, and Certification Criteria for Electronic Health Record Technology; Final Rule. This R2.1 guide was developed and produced by the HL7 Structured Documents Workgroup. It updates the C-CDA R2 (2014) guide to support “on-the-wire” compatibility with R1.1 systems C-CDA Release 2.1 implementation guide, in conjunction with the HL7 CDA Release 2 (CDA R2) standard, is to be used for implementing the following CDA documents and header constraints for clinical notes: Care Plan including Home Health Plan of Care (HHPoC), Consultation Note, Continuity of Care Document (CCD), Diagnostic Imaging Reports (DIR), Discharge Summary, History and Physical (H&P), Operative Note, Procedure Note, Progress Note, Referral Note, Transfer Summary, Unstructured Document, Patient Generated Document (US Realm Header).

More information on C-CDA can be found [here](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=492). 

### Moving from CDA/C-CDA to FHIR

Since C-CDA exists and has seen widespread implementation, one may question why a FHIR version is desired. The main reason is that CDA and C-CDA are based on HL7 Version 3, which while XML-based was (and still is) rather difficult to implement for a variety of reasons such as data types that are not widely implemented in software libraries, reliance on xsi:type for datatype choices, etc. Also, FHIR is much easier to learn than CDA, so while implementers who are already familiar with CDA will likely keep working with it, new implementers are likely to want to move directly to FHIR. 

#### CDA Header to FHIR Composition Resource Analysis

Efforts to map from CDA to FHIR began shortly after FHIR DSTU 1 (aka FHIR R1) was published. The initial work compared the CDA header to the FHIR Composition resource to identify any discrepancies. This work resulted in some key changes to the Composition resource in FHIR DSTU 2 (aka FHIR R2). This initial mapping work is still available via a Google Docs Spreadsheet located [here](https://docs.google.com/spreadsheets/d/1KctdexG3oB2QBiBQNH1Rbt2uJ6DxQFROyIFKo5q95WU/edit#gid=1223244219). 

### The C-CDA on FHIR Project

The C-CDA on FHIR Project is a volunteer effort that picked up where the Argonaut analytical mappings left off. The initial goal of the project was to represent Consolidated CDA Templates for Clinical Notes (C-CDA) 2.1 templates using FHIR profiles. The first stage of the project defined C-CDA document-level profiles on the Composition resource and contained sections. All coded data used by sections was accomplished by referencing relevant US-Core FHIR profiles. This work was completed and the IG was published in April 2018. 

Subsequent work represented in this implementation guide has proceeded as an unballoted STU update to upgrade the FHIR STU 3 profiles to FHIR R4 and make any other necessary changes to comply with the latest FHIR quality criteria.

[Next Page - The Specification](the_specification.html)

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/CapabilityStatement-CcdaOnFhirClient-intro.md

{% include stu-note.xml %}

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/CapabilityStatement-CcdaOnFhirServer-intro.md

{% include stu-note.xml %}

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/CF-allergies.md

<link rel="stylesheet" href="colors.css">

This page provides a mapping from CDA to FHIR. For the FHIR to CDA mapping, please refer to [Allergies FHIR → CDA](./FC-allergies.html). For guidance on how to read the table below, see [Reading the C-CDA ↔ FHIR Mapping Pages](./mappingGuidance.html)

**Uncommon use case:** Multiple C-CDA Allergy Intolerance observations inside a single Allergy Concern act should map to separate and distinct FHIR AllergyIntolerance resources. The C-CDA Companion Guide ([see 5.2.7.1](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=447)) actively discourages the practice of multiple observations inside a single act. It may occur, however, since Allergy Concern act allows for multiple Allergy Intolerance observations in C-CDA. Lossless transformations may not be possible without the use of extensions ([see 3.1 of this guide](./mappingBackground.html)).

<br />
### C-CDA to FHIR

| C-CDA¹ <br/>[Allergy Concern act](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-AllergyConcernAct.html)| FHIR <br/>[AllergyIntolerance](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-allergyintolerance.html)|Transform Steps & Notes|
|:-------|:------|:---------|
|/statusCode|.clinicalStatus|For more information on how status is managed in Allergy Concern Act wrapper, refer to [C-CDA guidance, see 5.2.7.1](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=447)<br/>Also see Status entryRelationship mapping below|
| All of the following are a **[Allergy Intolerance observation](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-AllergyIntoleranceObservation.html)** nested inside the **[Allergy Concern act](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-AllergyConcernAct.html)**. Each observation should become a distinct FHIR **[AllergyIntolerance](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-allergyintolerance.html)** resource.<br/>Include /entryRelationship[@typeCode="SUBJ"]/observation prefix to rows below²|
|/@negationInd||See constraints under /participant 
|/id|.identifier| [CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
|/effectiveTime/low|.onsetDateTime|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)<br/>effectiveTime/high should not be mapped within onset (DateTime or Period)|
|/effectiveTime/high|.extension:[allergyintolerance-abatement](http://hl7.org/fhir/StructureDefinition/allergyintolerance-abatement)||
|/value|.type<br/>&<br/>.category|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)<br/>[CDA value → FHIR type](ConceptMap-CF-AllergyIntoleranceType.html) <br/> [CDA value → FHIR category](./ConceptMap-CF-AllergyIntoleranceCategory.html)|
|/author|.recorder<br/>&<br/>**[Provenance](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-provenance.html)**|**Constraint:** Only map last CDA author to FHIR recorder<br/>[Guidance on CDA ↔ FHIR Provenance](mappingGuidance.html#cda--fhir-provenance)|
|/author/time|.recordedDate|**Constraint:** Only map earliest author/time <br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|/participant/participantRole/playingEntity/code|.code|**Constraint:** When CDA negation is absent or false<br/>[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/participant/participantRole/playingEntity/code<br/>&<br/>/value|.code|**Constraint:** When CDA negation is true and nullFlavor is used in playingEntity/code<br/>[CDA No known allergy → FHIR code](ConceptMap-CF-NoKnownAllergies.html)<br/> When negation is true and playingEntity/code is populated, use equivalent negated concept (e.g. map latex substance to no known latex allergy [1003774007, SNOMED CT]) if available. If not, use the [substanceExposureRisk extension](https://hl7.org/fhir/extensions/StructureDefinition-allergyintolerance-substanceExposureRisk.html), placing the substance in the substance sub-extension and setting the exposureRisk sub-extension to `no-known-reaction-risk`. Note that when using this extension, the AllergyIntolerance resource will not be a conformant US Core AllergyIntolerance since the extension prohibits the required .code element.|
|**[Status](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-AllergyStatusObservation.html)**<br/>/entryRelationship/observation[code/@code="33999-4"]/value³|.clinicalStatus|[CDA Allergy Status Observation value → FHIR clinicalStatus](./ConceptMap-CF-AllergyStatus.html)
|**[Reaction](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ReactionObservation.html)**<br/>/entryRelationship[@typeCode="MFST"]/observation/value³|.reaction.manifestation|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)<br/>Both use SNOMED clinical findings with minor valueSet definition differences
|**[Severity](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-SeverityObservation.html)** (nested inside Reaction)<br/>/entryRelationship[@typeCode="MFST"]/observation/...<br/>&nbsp;&nbsp;&nbsp;...entryRelationship/observation[code/@code="SEV"]/value³|.reaction.severity|[CDA Severity value → FHIR Severity](./ConceptMap-CF-Severity.html)<br/>**Note:** CDA documents should not assign severity at the Allergy level.<br/><br/>In cases where CDA assigns severity only to the Allergy rather than the reaction, map the severity to FHIR reaction severity, even if there are more than one. This means assuming that the same severity applies to all child reactions.<br/><br/>If severity is assigned at both levels, the reaction level should be used.
|**[Criticality](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-CriticalityObservation.html)**<br/>/entryRelationship/observation[code/@code="82606-5"]/value³|.criticality|[CDA Criticality value → FHIR Criticality](./ConceptMap-CF-Criticality.html)
|**[Comment Activity](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-CommentActivity.html)**<br/>/entryRelationship/act[code/@code="48767-8"]/text³|**[Annotation](https://hl7.org/fhir/datatypes.html#Annotation)**<br/>.note|See [Comment → Annotation](mappingGuidance.html#comment--annotation)|


1\. XPath abbreviated for C-CDA Allergy Concern act as: <br/> ClinicalDocument/component/structuredBody/component/section[code/@code="48765-2"]/entry/act/

2\. XPath abbreviated for C-CDA Allergy Intolerance observation as: <br/> ClinicalDocument/component/structuredBody/component/section[code/@code="48765-2"]/entry/act/entryRelationship[@typeCode="SUBJ"]/observation

3\. Note that these entryRelationships will also have inversionInd="true" in CDA

When authors or other provenance are recorded only in the parent [Allergy Concern Act](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-AllergyConcernAct.html), it is recommended that those data be mapped to the FHIR AllergyIntolerance. 

### Example

<table><tr><th>CDA Allergy Act</th><th>FHIR AllergyIntolerance Resource</th></tr>
<tr><td>
<div id="cda" class="border codeArea">&lt;<span class="field">act</span> <span class="attrib">classCode=</span><span class="value">"ACT"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.30"</span> <span class="attrib">extension=</span><span class="value">"2015-08-01"</span> /&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.30"</span> /&gt;
  &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"1.3.6.1.4.1.22812.3.2009316.3.4.10"</span> <span class="attrib">extension=</span><span class="value">"<mark class="color10">545077400001</mark>"</span> /&gt;
  &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"1.3.6.1.4.1.22812.3.2009316.3.4.10"</span> <span class="attrib">extension=</span><span class="value">"<mark class="color11">545077400003</mark>"</span> /&gt;
  &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"CONC"</span> <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.5.6"</span> /&gt;
  &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"<mark class="color12">active</mark>"</span> /&gt;
  &lt;<span class="field">effectiveTime</span> <span class="attrib">xsi:type=</span><span class="value">"IVL_TS"</span>&gt;
    &lt;<span class="field">low</span> <span class="attrib">nullFlavor=</span><span class="value">"NI"</span> /&gt;
  &lt;/<span class="field">effectiveTime</span>&gt;
  &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"SUBJ"</span>&gt;
    &lt;<span class="field">observation</span> <span class="attrib">classCode=</span><span class="value">"OBS"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.7"</span> <span class="attrib">extension=</span><span class="value">"2014-06-09"</span> /&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.7"</span> /&gt;
      &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"<mark class="color13">1.3.6.1.4.1.22812.3.2009316.3.4.10.2</mark>"</span> <span class="attrib">extension=</span><span class="value">"<mark class="color10">545077400001</mark>"</span> /&gt;
      &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"<mark class="color13">1.3.6.1.4.1.22812.3.2009316.3.4.10.2</mark>"</span> <span class="attrib">extension=</span><span class="value">"<mark class="color11">545077400003</mark>"</span> /&gt;
      &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"ASSERTION"</span> <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.5.4"</span> /&gt;
      &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span> /&gt;
      &lt;<span class="field">effectiveTime</span> <span class="attrib">xsi:type=</span><span class="value">"IVL_TS"</span>&gt;
        &lt;<span class="field">low</span> <span class="attrib">value=</span><span class="value">"<mark class="color14">20080501</mark>"</span> /&gt;
      &lt;/<span class="field">effectiveTime</span>&gt;
      &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"CD"</span> 
        <span class="attrib">code=</span><span class="value">"<mark class="color15">419511003</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color16">2.16.840.1.113883.6.96</mark>"</span>&gt;
        &lt;<span class="field">originalText</span>&gt;
          &lt;<span class="field">reference</span> <span class="attrib">value=</span><span class="value">"#_6db75b62-deb2-4bab-b597-00c8ae86f6b4"</span> /&gt;
        &lt;/<span class="field">originalText</span>&gt;
      &lt;/<span class="field">value</span>&gt;
      &lt;<span class="field">participant</span> <span class="attrib">typeCode=</span><span class="value">"CSM"</span>&gt;
        &lt;<span class="field">participantRole</span> <span class="attrib">classCode=</span><span class="value">"MANU"</span>&gt;
          &lt;<span class="field">playingEntity</span> <span class="attrib">classCode=</span><span class="value">"MMAT"</span>&gt;
            &lt;<span class="field">code</span> 
              <span class="attrib">code=</span><span class="value">"<mark class="color17">1191</mark>"</span> 
              <span class="attrib">codeSystem=</span><span class="value">"<mark class="color18">2.16.840.1.113883.6.88</mark>"</span> 
              <span class="attrib">displayName=</span><span class="value">"<mark class="color19">Aspirin</mark>"</span>&gt;
              &lt;<span class="field">translation</span> 
                <span class="attrib">code=</span><span class="value">"<mark class="color20">293586001</mark>"</span> 
                <span class="attrib">codeSystem=</span><span class="value">"<mark class="color16">2.16.840.1.113883.6.96</mark>"</span> 
                <span class="attrib">displayName=</span><span class="value">"<mark class="color24">Allergy to Aspirin</mark>"</span>/&gt;
            &lt;/<span class="field">code</span>&gt;
          &lt;/<span class="field">playingEntity</span>&gt;
        &lt;/<span class="field">participantRole</span>&gt;
      &lt;/<span class="field">participant</span>&gt;
      &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"MFST"</span> <span class="attrib">inversionInd=</span><span class="value">"true"</span>&gt;
        &lt;<span class="field">observation</span> <span class="attrib">classCode=</span><span class="value">"OBS"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
          &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.9"</span> <span class="attrib">extension=</span><span class="value">"2014-06-09"</span> /&gt;
          &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.9"</span> /&gt;
          &lt;<span class="field">id</span> <span class="attrib">nullFlavor=</span><span class="value">"NI"</span> /&gt;
          &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"ASSERTION"</span> <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.5.4"</span> /&gt;
          &lt;<span class="field">text</span>&gt;
            &lt;<span class="field">reference</span> <span class="attrib">value=</span><span class="value">"#_8a7ed342-967a-400e-88d5-2f8c2b7cdda0"</span> /&gt;
          &lt;/<span class="field">text</span>&gt;
          &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span> /&gt;
          &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"CD"</span> 
            <span class="attrib">code=</span><span class="value">"<mark class="color22">247472004</mark>"</span> 
            <span class="attrib">codeSystem=</span><span class="value">"<mark class="color16">2.16.840.1.113883.6.96</mark>"</span> 
            <span class="attrib">displayName=</span><span class="value">"<mark class="color23">Wheal</mark>"</span>&gt;
            &lt;<span class="field">originalText</span>&gt;
              &lt;<span class="field">reference</span> <span class="attrib">value=</span><span class="value">"#_8a7ed342-967a-400e-88d5-2f8c2b7cdda0"</span> /&gt;
            &lt;/<span class="field">originalText</span>&gt;
          &lt;/<span class="field">value</span>&gt;
          &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"SUBJ"</span> <span class="attrib">inversionInd=</span><span class="value">"true"</span>&gt;
            &lt;<span class="field">observation</span> <span class="attrib">classCode=</span><span class="value">"OBS"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
              &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.8"</span> <span class="attrib">extension=</span><span class="value">"2014-06-09"</span> /&gt;
              &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.8"</span> /&gt;
              &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"SEV"</span> <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.5.4"</span> /&gt;
              &lt;<span class="field">text</span>&gt;Severe&lt;/<span class="field">text</span>&gt;
              &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span> /&gt;
              &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"CD"</span> 
                <span class="attrib">code=</span><span class="value">"24484000"</span> 
                <span class="attrib">codeSystem=</span><span class="value">"<mark class="color16">2.16.840.1.113883.6.96</mark>"</span> 
                <span class="attrib">displayName=</span><span class="value">"<mark class="color27">Severe</mark>"</span> /&gt;
            &lt;/<span class="field">observation</span>&gt;
          &lt;/<span class="field">entryRelationship</span>&gt;
        &lt;/<span class="field">observation</span>&gt;
      &lt;/<span class="field">entryRelationship</span>&gt;
    &lt;/<span class="field">observation</span>&gt;
  &lt;/<span class="field">entryRelationship</span>&gt;
&lt;/<span class="field">act</span>&gt;</div>
</td><td>

<div id="fhir" class="border codeArea">{
  "<span class="field">resourceType</span>": "<span class="value">AllergyIntolerance</span>",
  "<span class="field">identifier</span>": [
    {
      "<span class="field">system</span>": "<span class="value">urn:oid:<mark class="color13">1.3.6.1.4.1.22812.3.2009316.3.4.10.2</mark></span>",
      "<span class="field">value</span>": "<span class="value"><mark class="color10">545077400001</mark></span>"
    },
    {
      "<span class="field">system</span>": "<span class="value">urn:oid:<mark class="color13">1.3.6.1.4.1.22812.3.2009316.3.4.10.2</mark></span>",
      "<span class="field">value</span>": "<span class="value"><mark class="color11">545077400003</mark></span>"
    }
  ],
  "<span class="field">clinicalStatus</span>": {
    "<span class="field">coding</span>": [
      {
        "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical</span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color12">active</mark></span>"
      }
    ]
  },
  "<span class="field">category</span>": [
    "<mark class="color15">medication</mark>"
  ],
  "<span class="field">code</span>": {
    "<span class="field">coding</span>": [
      {
        "<span class="field">system</span>": "<span class="value"><mark class="color18">http://www.nlm.nih.gov/research/umls/rxnorm</mark></span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color17">1191</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color19">Aspirin</mark></span>"
      },
      {
        "<span class="field">system</span>": "<span class="value"><mark class="color16">http://snomed.info/sct</mark></span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color20">293586001</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color24">Allergy to Aspirin</mark></span>"
      }
    ],
    "<span class="field">text</span>": "<span class="value"><mark class="color19">Aspirin</mark></span>"
  },
  "<span class="field">patient</span>": {
    "<span class="field">reference</span>": "<span class="value">Patient/CF-patient</span>"
  },
  "<span class="field">onsetDateTime</span>": "<span class="value"><mark class="color14">2008-05-01</mark></span>",
  "<span class="field">reaction</span>": [
    {
      "<span class="field">manifestation</span>": [
        {
          "<span class="field">coding</span>": [
            {
              "<span class="field">system</span>": "<span class="value"><mark class="color16">http://snomed.info/sct</mark></span>",
              "<span class="field">code</span>": "<span class="value"><mark class="color22">247472004</mark></span>",
              "<span class="field">display</span>": "<span class="value"><mark class="color23">Wheal</mark></span>"
            }
          ],
          "<span class="field">text</span>": "<span class="value"><mark class="color23">Wheal</mark></span>"
        }
      ],
      "<span class="field">severity</span>": "<span class="value"><mark class="color27">severe</mark></span>"
    }
  ]
}</div>
</td></tr></table>

#### Links to example content

The consensus mapping example developed through multiple vendors are available below:
* [Allergy CDA example](./Binary-CF-allergy.html)
* [Allergy FHIR example](./AllergyIntolerance-CF-allergy.html)

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/CF-encounters.md

<link rel="stylesheet" href="colors.css">

This page provides a mapping from CDA to FHIR. <!-- For the FHIR to CDA mapping, please refer to [Encounters FHIR → CDA](./FC-encounters.html). --> For guidance on how to read the table below, see [Reading the C-CDA ↔ FHIR Mapping Pages](./mappingGuidance.html).

Encounter Activities in the Encounters Section (or elsewhere in the document, such as `<entryReference>` on Clinical Notes) correspond FHIR Encounter resources. If the document itself contains a `componentOf/encompassingEncounter`, this should also be converted to a FHIR Encounter resource. In all cases, when the same encounter is referenced multiple times (such as the `encompassingEncounter` and an Encounter Activity in the Encounters Section containing the same `<id>`), it should be converted to a single FHIR resource.

### C-CDA Encounter to FHIR
<sup>(b)</sup> - indicates element is only present in Encounter Activity in the body of the document<br/><sup>(h)</sup> - indicates element is only present in EncompassingEncounter in the header of the document

|C-CDA¹<br/>[Encounter Activity](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-EncounterActivity.html) or [EncompassingEncounter](https://hl7.org/cda/stds/core/2.0.0-sd-snapshot1/StructureDefinition-EncompassingEncounter.html)|FHIR<br/>[Encounter](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-encounter.html)|Transform Steps|
|:----|:----|:----|
|/id|.identifier|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
|/code |.class|Only the V3 ActCode system, which may be present in the root element or any `<translation>`.<br/>Other code systems may map to V3 ActCode (for example CPT codes 99211-99215 map to `AMB`, 99221-99223 to `IMP`, 99281-99285 to `EMER`, etc), but if this mapping is not possible, use the [Data Absent Reason](http://hl7.org/fhir/StructureDefinition/data-absent-reason) extension.|
|/code|.type|The remaining codes besides V3 ActCode<br/>[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)
|/statusCode <sup>(b)</sup>|.status|[CDA → FHIR encounter status](ConceptMap-CF-EncounterStatus.html)<br/>**Note:** statusCode is optional in C-CDA. If missing, fallback to effectiveTime mapping.
|/effectiveTime|.status|If effectiveTime is a single timestamp or contains a high, status = `"finished"`.<br/>If low is present and high is missing, the status may be `"in-progress"` but implementers may choose to evaluate historical values as `"finished"` or `"unknown"` if appropriate.
|/effectiveTime/@value<br/>/effectiveTime/low/@value|.period.start|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)
|/effectiveTime/high/@value|.period.end|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)
|/sdtc:dischargeDispositionCode <sup>(b)</sup><br/>/dischargeDispositionCode <sup>(h)</sup>|.hospialization.dischargeDisposition|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)
|/performer <sup>(b)</sup><br/>/encounterParticipant <sup>(h)</sup>|.participant|[C-CDA → FHIR Participation](CF-participations.html)
|/performer/sdtc:functionCode <sup>(b)</sup>|.participant.type|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)
|/participant[@typeCode="LOC"] <sup>(b)</sup><br/>/location <sup>(h)</sup>|.location|[C-CDA → FHIR Participation](CF-participations.html)
|**[Indication](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-Indication.html)** <sup>(b)</sup><br/>/entryRelationship[@typeCode="RSON"]/observation|.reasonCode<br/>or<br/>.reasonReference|If the id of the indication references a problem in the document that has been converted to a FHIR resource, populate .reasonReference with a reference to that resource. Otherwise, map observation/value to .reasonCode.<br/>[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)
|**[Encounter Diagnosis](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-EncounterDiagnosis.html)** <sup>(b)</sup><br/>/entryRelationship/act[code/@code="29308-4"]/observation|**[Encounter Diagnosis](https://hl7.org/fhir/us/core/StructureDefinition-us-core-condition-encounter-diagnosis.html)**<br/>&<br/>.diagnosis.condition|The observation maps identically to [CDA → FHIR Problems](./CF-problems.html).<br/>Since this is an encounter diagnosis, the `Observation.category` should be set to `encounter-diagnosis`.


### Example: Encounter

<table><tr><th>CDA Encounter</th><th>FHIR Encounter Resource</th></tr>
<tr><td>
<div id="cda" class="border codeArea">&lt;<span class="field">encounter</span> <span class="attrib">classCode=</span><span class="value">"ENC"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.49"</span> <span class="attrib">extension=</span><span class="value">"2015-08-01"</span>/&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.49"</span>/&gt;
  &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"<mark class="color10">2a620155-9d11-439e-92b3-5d9815ff4de8</mark>"</span>/&gt;
  &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"<mark class="color11"><mark class="color11">99213</mark></mark>"</span> <span class="attrib">displayName=</span><span class="value">"<mark class="color12">Office outpatient visit 15 minutes</mark>"</span>
    <span class="attrib">codeSystemName=</span><span class="value">"CPT"</span> <span class="attrib">codeSystem=</span><span class="value">"<mark class="color13">2.16.840.1.113883.6.12</mark>"</span>
    <span class="attrib">codeSystemVersion=</span><span class="value">"4"</span>&gt;
    &lt;<span class="field">originalText</span>&gt;
      &lt;<span class="field">reference</span> <span class="attrib">value=</span><span class="value">"#Encounter1_type"</span>/&gt;
    &lt;/<span class="field">originalText</span>&gt;
  &lt;/<span class="field">code</span>&gt;
  &lt;<span class="field">text</span>&gt;
    &lt;<span class="field">reference</span> <span class="attrib">value=</span><span class="value">"#Encounter1"</span>/&gt;
  &lt;/<span class="field">text</span>&gt;
  &lt;<span class="field">effectiveTime</span> <span class="attrib">value=</span><span class="value">"<mark class="color14">201208151000-0800</mark>"</span>/&gt;
  <span class="comment">&lt;!-- Maps to reference: <mark class="color16">Practitioner/62f17e2ae0231200076884d4</mark> --&gt;</span>
  &lt;<span class="field">performer</span>&gt;
    &lt;<span class="field">assignedEntity</span>&gt;
      ...
    &lt;/<span class="field">assignedEntity</span>&gt;
  &lt;/<span class="field">performer</span>&gt;
  &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"REFR"</span>&gt;
    &lt;<span class="field">act</span> <span class="attrib">classCode=</span><span class="value">"ACT"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
      <span class="comment">&lt;!-- Encounter Diagnosis --&gt;</span>
      <span class="comment">&lt;!-- Creates reference: <mark class="color17">Condition/62f17e2aa2392d0008fbb232</mark> --&gt;</span>
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.80"</span> <span class="attrib">extension=</span><span class="value">"2015-08-01"</span> /&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.80"</span>/&gt;
      &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"29308-4"</span> <span class="attrib">displayName=</span><span class="value">"<mark class="color15">Diagnosis</mark>"</span>
        <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.6.1"</span>
        <span class="attrib">codeSystemName=</span><span class="value">"LOINC"</span>/&gt;
      &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"SUBJ"</span>&gt;
        ...
      &lt;/<span class="field">entryRelationship</span>&gt;
    &lt;/<span class="field">act</span>&gt;
  &lt;/<span class="field">entryRelationship</span>&gt;
&lt;/<span class="field">encounter</span>&gt;</div>
</td><td>
<div id="fhir" class="border codeArea">{
  "<span class="field">resourceType</span>": "<span class="value">Encounter</span>",
  "<span class="field">id</span>": "<span class="value">62f17e2aa2392d0008fbb224</span>",
  "<span class="field">identifier</span>": [{
    "<span class="field">value</span>": "<span class="value">urn:uuid:<mark class="color10">2a620155-9d11-439e-92b3-5d9815ff4de8</mark></span>",
    "<span class="field">system</span>": "<span class="value">urn:ietf:rfc:3986</span>"
  }],
  "<span class="field">status</span>": "<span class="value">finished</span>",
  "<span class="field">class</span>": {
    "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/v3-ActCode</span>",
    "<span class="field">code</span>": <mark class="color11">"AMB"</mark>,
    "<span class="field">display</span>": "<span class="value">ambulatory</span>"
  },
  "<span class="field">type</span>": [{
    "<span class="field">coding</span>": [{
      "<span class="field">system</span>": "<span class="value"><mark class="color13">http://www.ama-assn.org/go/cpt</mark></span>",
      "<span class="field">code</span>": "<span class="value"><mark class="color11">99213</mark></span>",
      "<span class="field">display</span>": "<span class="value"><mark class="color12">Office outpatient visit 15 minutes</mark></span>"
    }],
    "<span class="field">text</span>": "<span class="value">Office outpatient visit</span>"
  }],
  "<span class="field">subject</span>": { "reference": "<span class="value">Patient/62f17e29b7532c0009e217b7</span>" },
  "<span class="field">participant</span>": [{
    "<span class="field">individual</span>": {
      "<span class="field">reference</span>": "<span class="value"><mark class="color16">Practitioner/62f17e2ae0231200076884d4</mark></span>"
    }
  }],
  "<span class="field">period</span>": {
    "<span class="field">start</span>": "<span class="value"><mark class="color14">2012-08-15T10:00:00-08:00</mark></span>"
  },
  "<mark class="color15">diagnosis</mark>": [{
    "<span class="field">condition</span>": {
      "<span class="field">reference</span>": "<span class="value"><mark class="color17">Condition/62f17e2aa2392d0008fbb232</mark></span>"
    }
  }]
}</div>
</td></tr></table>

### Example: EncompassingEncounter

<table><tr><th>CDA EncompassingEncounter Example</th><th>FHIR Encounter Resource</th></tr>
<tr><td>
<div id="cda" class="border codeArea">&lt;<span class="field">encompassingEncounter</span>&gt;
  &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"<mark class="color10">2a620155-9d11-439e-92b3-5d9815ff4de8</mark>"</span>/&gt;
  &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"<mark class="color11"><mark class="color11">99213</mark></mark>"</span> <span class="attrib">displayName=</span><span class="value">"<mark class="color12">Office outpatient visit 15 minutes</mark>"</span>
    <span class="attrib">codeSystemName=</span><span class="value">"CPT"</span> <span class="attrib">codeSystem=</span><span class="value">"<mark class="color13">2.16.840.1.113883.6.12</mark>"</span>
    <span class="attrib">codeSystemVersion=</span><span class="value">"4"</span> /&gt;
  &lt;<span class="field">effectiveTime</span>&gt;
    &lt;<span class="field">low</span> <span class="attrib">value=</span><span class="value">"<mark class="color14">20120815100000-0800</mark>"</span> /&gt;
    &lt;<span class="field">high</span> <span class="attrib">value=</span><span class="value">"<mark class="color15">20120815101500-0800</mark>"</span> /&gt;
  &lt;/<span class="field">effectiveTime</span>&gt;
  <span class="comment">&lt;!-- Maps to reference: <mark class="color16">Practitioner/62f17e2ae0231200076884d4</mark> --&gt;</span>
  &lt;<span class="field">participant</span>&gt;
    ...
  &lt;/<span class="field">participant</span>&gt;
  <span class="comment">&lt;!-- Maps to reference: <mark class="color17">Location/sdLoc</mark> --&gt;</span>
  &lt;<span class="field">location</span>&gt;
    ...
  &lt;/<span class="field">location</span>&gt;
&lt;/<span class="field">encompassingEncounter</span>&gt;</div>
</td><td>
<div id="fhir" class="border codeArea">{
  "<span class="field">resourceType</span>": "<span class="value">Encounter</span>",
  "<span class="field">id</span>": "<span class="value">62f17e2aa2392d0008fbb224</span>",
  "<span class="field">identifier</span>": [{
    "<span class="field">value</span>": "<span class="value">urn:uuid:<mark class="color10">2a620155-9d11-439e-92b3-5d9815ff4de8</mark></span>",
    "<span class="field">system</span>": "<span class="value">urn:ietf:rfc:3986</span>"
  }],
  "<span class="field">status</span>": "<span class="value">finished</span>",
  "<span class="field">class</span>": {
    "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/v3-ActCode</span>",
    "<span class="field">code</span>": <mark class="color11">"AMB"</mark>,
    "<span class="field">display</span>": "<span class="value">ambulatory</span>"
  },
  "<span class="field">type</span>": [{
    "<span class="field">coding</span>": [{
      "<span class="field">system</span>": "<span class="value"><mark class="color13">http://www.ama-assn.org/go/cpt</mark></span>",
      "<span class="field">code</span>": "<span class="value"><mark class="color11">99213</mark></span>",
      "<span class="field">display</span>": "<span class="value"><mark class="color12">Office outpatient visit 15 minutes</mark></span>"
    }]
  }],
  "<span class="field">subject</span>": { "reference": "<span class="value">Patient/62f17e29b7532c0009e217b7</span>" },
  "<span class="field">location</span>": [{
    "<span class="field">location</span>": { "reference": "<span class="value"><mark class="color17">Location/sdLoc</mark></span>" }
  }],
  "<span class="field">participant</span>": [{
    "<span class="field">individual</span>": { "reference": "<span class="value"><mark class="color16">Practitioner/62f17e2ae0231200076884d4</mark></span>" }
  }],
  "<span class="field">period</span>": {
    "<span class="field">start</span>": "<span class="value"><mark class="color14">2012-08-15T10:00:00-08:00</mark></span>",
    "<span class="field">end</span>": "<span class="value"><mark class="color15">2012-08-15T10:15:00-08:00</mark></span>"
  }
}
</div>
</td></tr></table>

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/CF-immunizations.md

<link rel="stylesheet" href="colors.css">

This page provides a mapping from CDA to FHIR. For the FHIR to CDA mapping, please refer to [Immunizations FHIR → CDA](./FC-immunizations.html). For guidance on how to read the table below, see [Reading the C-CDA ↔ FHIR Mapping Pages](./mappingGuidance.html)

Mapping is from `@moodCode="EVN"` (i.e. historical) immunizations, not `INT` (future / planned) immunizations. For INT, use the MedicationRequest resource.

<br />
<br />
### C-CDA to FHIR

|C-CDA¹<br/>[Immunization Activity substanceAdministration](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ImmunizationActivity.html)|FHIR<br/>[Immunization](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-immunization.html#profile)|Transform Steps|
|:----|:----|:----|
|/@negationInd="true"||Set ```.status="not-done"``` when @negationInd="true"|
|/id|.identifier|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
|/statusCode|.status|[CDA statusCode → FHIR status](./ConceptMap-CF-ImmunizationStatus.html)|
|/effectiveTime/@value<br/>or<br/>/effectiveTime/low/@value|.occurrenceDateTime|EVN immunizations typically only contain a value, but if effectiveTime contains low/high, the occurenceDateTime should come from low.<br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)
|/repeatNumber/@value|.protocolApplied.doseNumberPositiveInt|**Note:** for @moodCode=EVN immunizations only|
|/routeCode|.route|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/approachSiteCode|.site|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/doseQuantity|.doseQuantity|[CDA ↔ FHIR Quantity](mappingGuidance.html#cda--fhir-quantity)|
|/consumable/manufacturedProduct/manufacturedMaterial/code|.vaccineCode|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)
|/consumable/manufacturedMaterial/lotNumberText|.lotNumber||
|/consumable/manufacturedMaterial/manufacturerOrganization|.manufacturer|
|N/A|.primarySource|Since this is unavailable in CDA, when mapping to a FHIR profile that requires the element (such as USCore prior to Release 6), include a [data-absent-reason extension](http://hl7.org/fhir/StructureDefinition/data-absent-reason) such as 'unsupported'.
|/author|**[Provenance](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-provenance.html)**|[CDA ↔ FHIR Provenance](mappingGuidance.html#cda--fhir-provenance)|
|/author/time|.recorded|Earliest, if more than one.<br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)
|/performer|.performer|Set ```performer.function="AP"```
|**[Immunization Refusal Reason](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ImmunizationRefusalReason.html)**<br/>/entryRelationship[@typeCode="RSON"]²/observation/code<br/>(only if code is from ValueSet [No Immunization Reason](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.1.11.19717/expansion/Latest))|.statusReason|[CDA refusal → FHIR statusReason](ConceptMap-CF-ImmunizationRefusal.html)<br/>Indicates the reason the immunization event was **not** performed. This is generally only used for the status of "not-done".|
|**[Indication](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-Indication.html)**<br/>/entryRelationship[@typeCode="RSON"]²/observation/value<br/>(only if observation/code is from ValueSet [Problem Type](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.88.12.3221.7.2/expansion/Latest))|.reasonCode|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|**[Reaction](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ReactionObservation.html)**<br/>/entryRelationship[@typeCode="MFST"]/observation/value|.reaction|It is recommended that reaction observation value be mapped to reaction detail (Observation) valueCodeable concept. Comments are welcome on how this may be best implemented.
|**[Comment Activity](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-CommentActivity.html)**<br/>/entryRelationship/act[code/@code="48767-8"]/text|**[Annotation](https://hl7.org/fhir/datatypes.html#Annotation)**<br/>.note|See [Comment → Annotation](mappingGuidance.html#comment--annotation)|


1\. XPath abbrievated for C-CDA Immunization Activity as: <br/> ClinicalDocument/component/structuredBody/component/section[code/@code="11369-6"]/entry/substanceAdministration<br/>
2\. Both indication and refusal reason are observations related by @typeCode="RSON". Typically templateIds should not be used to identify content, but the Indication template does not require a specific code. If the observation/code comes from ValueSet [No Immunization Reason](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.1.11.19717/expansion/Latest), then it is clearly a refusal reason. If it comes from ValueSet [Problem Type](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.88.12.3221.7.2/expansion/Latest), then it is an indication. But if the code comes from neither value set, the observation is *possibly* an indication, but the only way to know is to check the templateId.

### Example: Standard Immunization

<table><tr><th>CDA Immunization Example</th><th>FHIR Immunization Resource</th></tr>
<tr><td>
<div id="cda" class="border codeArea">&lt;<span class="field">substanceAdministration</span> <span class="attrib">classCode=</span><span class="value">"SBADM"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span> <span class="attrib">negationInd=</span><span class="value">"false"</span>&gt;
  <span class="comment">&lt;!-- ** Immunization activity ** --&gt;</span>
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.52"</span>/&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.52"</span> <span class="attrib">extension=</span><span class="value">"2015-08-01"</span>/&gt;
  &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"<mark class="color10">e6f1ba43-c0ed-4b9b-9f12-f435d8ad8f92</mark>"</span>/&gt;
  &lt;<span class="field">text</span>&gt;
    &lt;<span class="field">reference</span> <span class="attrib">value=</span><span class="value">"#immun1"</span>/&gt;
  &lt;/<span class="field">text</span>&gt;
  <span class="comment">&lt;!-- Indicates the status of the substanceAdministartion --&gt;</span>
  &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"<mark class="color11">completed</mark>"</span>/&gt;
  &lt;<span class="field">effectiveTime</span> <span class="attrib">value=</span><span class="value">"<mark class="color12">20100815</mark>"</span>/&gt;
  &lt;<span class="field">repeatNumber</span> <span class="attrib">value=</span><mark class="color13"><span class="value">"1"</span></mark>/&gt;
  &lt;<span class="field">routeCode</span> 
    <span class="attrib">code=</span><span class="value">"<mark class="color14">C28161</mark>"</span> 
    <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.3.26.1.1"</span> 
    <span class="attrib">codeSystemName=</span><span class="value">"National Cancer Institute (NCI) Thesaurus"</span> 
    <span class="attrib">displayName=</span><span class="value">"<mark class="color15">Intramuscular Route of Administration</mark>"</span> /&gt;
  &lt;<span class="field">approachSiteCode</span> 
    <span class="attrib">code=</span><span class="value">"<mark class="color16">700022004</mark>"</span> 
    <span class="attrib">codeSystem=</span><span class="value">"<mark class="color17">2.16.840.1.113883.6.96</mark>"</span> 
    <span class="attrib">codeSystemName=</span><span class="value">"<mark class="color17"><mark class="color17">SNOMED</mark> CT</mark>"</span> 
    <span class="attrib">displayName=</span><span class="value">"<mark class="color18">Muscle and/or tendon structure of upper limb</mark>"</span> /&gt;
  &lt;<span class="field">doseQuantity</span> <span class="attrib">value=</span><mark class="color19"><span class="value">"60"</span></mark> unit=<mark class="color20"><span class="value">"ug"</span></mark> /&gt;
  &lt;<span class="field">administrationUnitCode</span> 
    <span class="attrib">code=</span><span class="value">"C44278"</span> 
    <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.3.26.1.1"</span> 
    <span class="attrib">codeSystemName=</span><span class="value">"National Cancer Institute (NCI) Thesaurus"</span> 
    <span class="attrib">displayName=</span><span class="value">"Unit"</span>/&gt;
  &lt;<span class="field">consumable</span>&gt;
    &lt;<span class="field">manufacturedProduct</span> <span class="attrib">classCode=</span><span class="value">"MANU"</span>&gt;
      <span class="comment">&lt;!-- ** Immunization medication information ** --&gt;</span>
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.54"</span>/&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.54"</span> <span class="attrib">extension=</span><span class="value">"2014-06-09"</span>/&gt;
      &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"5823d446-9066-11ee-b9d1-0242ac120002"</span>/&gt;
      &lt;<span class="field">manufacturedMaterial</span>&gt;
        &lt;<span class="field">code</span> 
          <span class="attrib">code=</span><mark class="color21"><span class="value">"88"</span></mark> 
          <span class="attrib">codeSystem=</span><span class="value">"<mark class="color22">2.16.840.1.113883.12.292</mark>"</span> 
          <span class="attrib">displayName=</span><span class="value">"<mark class="color23">Influenza virus vaccine</mark>"</span> 
          <span class="attrib">codeSystemName=</span><span class="value">"CVX"</span>&gt;
          &lt;<span class="field">originalText</span>&gt;
            &lt;<span class="field">reference</span> <span class="attrib">value=</span><span class="value">"#ImmunizationProduct_100"</span>/&gt;
          &lt;/<span class="field">originalText</span>&gt;
          &lt;<span class="field">translation</span> 
            <span class="attrib">code=</span><span class="value">"<mark class="color24">49281-0422-50</mark>"</span> 
            <span class="attrib">codeSystem=</span><span class="value">"<mark class="color25">2.16.840.1.113883.6.69</mark>"</span> 
            <span class="attrib">codeSystemName=</span><span class="value">"NDC"</span> 
            <span class="attrib">displayName=</span><span class="value">"<mark class="color26">Influenza vaccine</mark>"</span>/&gt;
        &lt;/<span class="field">code</span>&gt;
        &lt;<span class="field">lotNumberText</span>&gt;1&lt;/<span class="field">lotNumberText</span>&gt;
      &lt;/<span class="field">manufacturedMaterial</span>&gt;
      &lt;<span class="field">manufacturerOrganization</span>&gt;
        &lt;<span class="field">name</span>&gt;<mark class="color27">Health LS - Immuno Inc.</mark>&lt;/<span class="field">name</span>&gt;
      &lt;/<span class="field">manufacturerOrganization</span>&gt;
    &lt;/<span class="field">manufacturedProduct</span>&gt;
  &lt;/<span class="field">consumable</span>&gt;
  <span class="comment">&lt;!-- Optional Performer --&gt;</span>
  <span class="comment">&lt;!-- Creates resource: <mark class="color30">PractitionerRole/AmandaAtGoodHealthClinics</mark> --&gt;</span>
  <span class="comment">&lt;!-- With functionCode:<mark class="color31"> AP </mark>--&gt;</span>
  &lt;<span class="field">performer</span>&gt;
    &lt;<span class="field">assignedEntity</span>&gt;
      &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.19.5.9999.456"</span> <span class="attrib">extension=</span><span class="value">"2981824"</span>/&gt;
      &lt;<span class="field">addr</span>&gt;
        &lt;<span class="field">streetAddressLine</span>&gt;1021 Health Drive&lt;/<span class="field">streetAddressLine</span>&gt;
        &lt;<span class="field">city</span>&gt;Ann Arbor&lt;/<span class="field">city</span>&gt;
        &lt;<span class="field">state</span>&gt;MI&lt;/<span class="field">state</span>&gt;
        &lt;<span class="field">postalCode</span>&gt;99099&lt;/<span class="field">postalCode</span>&gt;
      &lt;/<span class="field">addr</span>&gt;
      &lt;<span class="field">telecom</span> <span class="attrib">nullFlavor=</span><span class="value">"UNK"</span>/&gt;
      &lt;<span class="field">assignedPerson</span>&gt;
        &lt;<span class="field">name</span>&gt;
          &lt;<span class="field">given</span>&gt;Amanda&lt;/<span class="field">given</span>&gt;
          &lt;<span class="field">family</span>&gt;Assigned&lt;/<span class="field">family</span>&gt;
        &lt;/<span class="field">name</span>&gt;
      &lt;/<span class="field">assignedPerson</span>&gt;
      &lt;<span class="field">representedOrganization</span>&gt;
        &lt;<span class="field">name</span>&gt;Good Health Clinic&lt;/<span class="field">name</span>&gt;
      &lt;/<span class="field">representedOrganization</span>&gt;
    &lt;/<span class="field">assignedEntity</span>&gt;
  &lt;/<span class="field">performer</span>&gt;
  <span class="comment">&lt;!-- Optional Author --&gt;</span>
  &lt;<span class="field">author</span>&gt;
    &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.119"</span>/&gt;
    &lt;<span class="field">time</span> <span class="attrib">value=</span><span class="value">"<mark class="color12">20100815</mark>"</span>/&gt;
    &lt;<span class="field">assignedAuthor</span>&gt;
      &lt;<span class="field">id</span> <span class="attrib">extension=</span><span class="value">"99999999"</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.4.6"</span>/&gt;
      &lt;<span class="field">telecom</span> <span class="attrib">use=</span><span class="value">"WP"</span> <span class="attrib">value=</span><span class="value">"tel:555-555-1002"</span>/&gt;
      &lt;<span class="field">assignedPerson</span>&gt;
        &lt;<span class="field">name</span>&gt;
          &lt;<span class="field">given</span>&gt;Henry&lt;/<span class="field">given</span>&gt;
          &lt;<span class="field">family</span>&gt;Seven&lt;/<span class="field">family</span>&gt;
        &lt;/<span class="field">name</span>&gt;
      &lt;/<span class="field">assignedPerson</span>&gt;
    &lt;/<span class="field">assignedAuthor</span>&gt;
  &lt;/<span class="field">author</span>&gt;
  &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"RSON"</span>&gt;
    &lt;<span class="field">observation</span> <span class="attrib">classCode=</span><span class="value">"OBS"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
      <span class="comment">&lt;!-- Indication (V2) --&gt;</span>
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.19"</span> <span class="attrib">extension=</span><span class="value">"2014-06-09"</span>/&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.19"</span>/&gt;
      &lt;<span class="field">code</span> 
        <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.6.96"</span> 
        <span class="attrib">codeSystemName=</span><span class="value">"SNOMED CT"</span> 
        <span class="attrib">code=</span><span class="value">"404684003"</span> 
        <span class="attrib">displayName=</span><span class="value">"Clinical finding"</span>/&gt;
      &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span>/&gt;
      &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"CD"</span> 
        <span class="attrib">code=</span><span class="value">"<mark class="color28">195967001</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color17">2.16.840.1.113883.6.96</mark>"</span> 
        <span class="attrib">displayName=</span><span class="value">"<mark class="color29">asthma</mark>"</span> /&gt;
    &lt;/<span class="field">observation</span>&gt;
  &lt;/<span class="field">entryRelationship</span>&gt;
  <span class="comment">&lt;!-- Reaction becomes Observation with id: <mark class="color32">Observation/WithCode247472004Wheal</mark> --&gt;</span>
  &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"MFST"</span> <span class="attrib">inversionInd=</span><span class="value">"true"</span>&gt;
    &lt;<span class="field">observation</span> <span class="attrib">classCode=</span><span class="value">"OBS"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.9"</span> <span class="attrib">extension=</span><span class="value">"2014-06-09"</span> /&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.9"</span> /&gt;
      &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"37006474-947a-11ee-b9d1-0242ac120002"</span>/&gt;
      &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"ASSERTION"</span> <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.5.4"</span> /&gt;
      &lt;<span class="field">text</span>&gt;
        &lt;<span class="field">reference</span> <span class="attrib">value=</span><span class="value">"#_8a7ed342-967a-400e-88d5-2f8c2b7cdda0"</span> /&gt;
      &lt;/<span class="field">text</span>&gt;
      &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span> /&gt;
      &lt;<span class="field">effectiveTime</span>&gt;
        &lt;<span class="field">low</span> <span class="attrib">value=</span><span class="value">"20080501"</span>/&gt;
        &lt;<span class="field">high</span> <span class="attrib">value=</span><span class="value">"20080501"</span>/&gt;
      &lt;/<span class="field">effectiveTime</span>&gt;
      &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"CD"</span> 
        <span class="attrib">code=</span><span class="value">"247472004"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.6.96"</span> 
        <span class="attrib">displayName=</span><span class="value">"Wheal"</span> /&gt;
    &lt;/<span class="field">observation</span>&gt;
  &lt;/<span class="field">entryRelationship</span>&gt;
&lt;/<span class="field">substanceAdministration</span>&gt;</div>
</td><td>
<div id="fhir" class="border codeArea">{
  "<span class="field">resourceType</span>": "<span class="value">Immunization</span>",
  "<span class="field">id</span>": "<span class="value">2b622767-4560-46ba-a1ac-58092fcdcdda</span>",
  "<span class="field">status</span>": "<span class="value"><mark class="color11">completed</mark></span>",
  "<span class="field">identifier</span>": [
    {
      "<span class="field">system</span>": "<span class="value">urn:ietf:rfc:3986</span>",
      "<span class="field">value</span>": "<span class="value">urn:uuid:<mark class="color10">e6f1ba43-c0ed-4b9b-9f12-f435d8ad8f92</mark></span>"
    }
  ],
  "<span class="field">vaccineCode</span>": {
    "<span class="field">coding</span>": [
      {
        "<span class="field">system</span>": "<span class="value"><mark class="color22">http://hl7.org/fhir/sid/cvx</mark></span>",
        "<span class="field">code</span>": <mark class="color21">"88"</mark>,
        "<span class="field">display</span>": "<span class="value"><mark class="color23">Influenza virus vaccine</mark></span>"
      },
      {
        "<span class="field">system</span>": "<span class="value"><mark class="color25">http://hl7.org/fhir/sid/ndc</mark></span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color24">49281-0422-50</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color26">Influenza vaccine</mark></span>"
      }
    ],
    "<span class="field">text</span>": "<span class="value"><mark class="color23">Influenza virus vaccine</mark></span>"
  },
  "<span class="field">doseQuantity</span>": {
    "<span class="field">unit</span>": <mark class="color20">"ug"</mark>,
    "<span class="field">value</span>": <mark class="color19">60,</mark>
    "<span class="field">system</span>": "<span class="value">http://unitofmeasure.org</span>",
    "<span class="field">code</span>": <mark class="color20">"ug"</mark>
  },
  "<span class="field">lotNumber</span>": <mark class="color13">"1"</mark>,
  "<span class="field">recorded</span>": "<span class="value"><mark class="color12">2010-08-15</mark></span>",
  "<span class="field">performer</span>": [
    {
      "<span class="field">actor</span>": {
        "<span class="field">reference</span>": "<span class="value"><mark class="color30">PractitionerRole/AmandaAtGoodHealthClinics</mark></span>"
      },
      "<span class="field">function</span>": {
        "<span class="field">coding</span>": [
          {
            "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/v2-0443</span>",
            "<span class="field">code</span>": <mark class="color31">"AP"</mark>,
            "<span class="field">display</span>": "<span class="value">Administering Provider</span>"
          }
        ]
      }
    }
  ],
  "<span class="field">reasonCode</span>": [
    {
      "<span class="field">coding</span>": [
        {
          "<span class="field">system</span>": "<span class="value"><mark class="color17">http://snomed.info/sct</mark></span>",
          "<span class="field">code</span>": "<span class="value"><mark class="color28">195967001</mark></span>",
          "<span class="field">display</span>": "<span class="value"><mark class="color29">asthma</mark></span>"
        }
      ]
    }
  ],
  "<span class="field">_primarySource</span>": {
    "<span class="field">extension</span>": [
      {
        "<span class="field">url</span>": "<span class="value">http://hl7.org/fhir/StructureDefinition/data-absent-reason</span>",
        "<span class="field">valueCode</span>": "<span class="value">unknown</span>"
      }
    ]
  },
  "<span class="field">manufacturer</span>": {
    "<span class="field">display</span>": "<span class="value"><mark class="color27">Health LS - Immuno Inc.</mark></span>"
  },
  "<span class="field">site</span>": {
    "<span class="field">coding</span>": [
      {
        "<span class="field">system</span>": "<span class="value"><mark class="color17">http://snomed.info/sct</mark></span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color16">700022004</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color18">Muscle and/or tendon structure of upper limb</mark></span>"
      }
    ]
  },
  "<span class="field">route</span>": {
    "<span class="field">coding</span>": [
      {
        "<span class="field">system</span>": "<span class="value">http://ncithesaurus-stage.nci.nih.gov</span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color14">C28161</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color15">Intramuscular Route of Administration</mark></span>"
      }
    ]
  },
  "<span class="field">patient</span>": {
    "<span class="field">reference</span>": "<span class="value">Patient/6581e92eb6ff5dadc088eae5</span>"
  },
  "<span class="field">protocolApplied</span>": [
    {
      "<span class="field">doseNumberPositiveInt</span>": <mark class="color13">1
</mark>    }
  ],
  "<span class="field">occurrenceDateTime</span>": "<span class="value"><mark class="color12">2010-08-15</mark></span>",
  "<span class="field">reaction</span>": [
    {
      "<span class="field">detail</span>": {
        "<span class="field">reference</span>": "<span class="value"><mark class="color32">Observation/WithCode247472004Wheal</mark></span>"
      }
    }
  ]
}</div>
</td></tr></table>

### Example: Refused Immunization

<table><tr><th>CDA Refused Immunization Example</th><th>FHIR Immunization Resource</th></tr>
<tr><td>
<div id="cda" class="border codeArea">&lt;<span class="field">entry</span> <span class="attrib">typeCode=</span><span class="value">"COMP"</span>&gt;
  <span class="comment">&lt;!-- negationInd=true indicates substance was NOT given at this date--&gt;</span>
  &lt;<span class="field">substanceAdministration</span> <span class="attrib">classCode=</span><span class="value">"SBADM"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span> <mark class="color10">negationInd=<span class="value">"true"</span></mark>&gt;
    <span class="comment">&lt;!-- ** Immunization activity ** --&gt;</span>
    &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.52"</span>/&gt;
    &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.52"</span> <span class="attrib">extension=</span><span class="value">"2015-08-01"</span>/&gt;
    &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"<mark class="color11">8d5942f9-5413-4486-af89-dcc5603dbec7</mark>"</span>/&gt;
    &lt;<span class="field">text</span>&gt;
      &lt;<span class="field">reference</span> <span class="attrib">value=</span><span class="value">"#immun2"</span>/&gt;
    &lt;/<span class="field">text</span>&gt;
    <span class="comment">&lt;!-- Indicates the status of the substanceAdministartion --&gt;</span>
    &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span>/&gt;
    &lt;<span class="field">effectiveTime</span> <span class="attrib">value=</span><span class="value">"<mark class="color12">20151115</mark>"</span>/&gt;
    &lt;<span class="field">consumable</span>&gt;
      &lt;<span class="field">manufacturedProduct</span> <span class="attrib">classCode=</span><span class="value">"MANU"</span>&gt;
        <span class="comment">&lt;!-- ** Immunization medication information ** --&gt;</span>
        &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.54"</span>/&gt;
        &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.54"</span> <span class="attrib">extension=</span><span class="value">"2014-06-09"</span>/&gt;
        &lt;<span class="field">manufacturedMaterial</span>&gt;
          &lt;<span class="field">code</span> 
            <span class="attrib">code=</span><mark class="color13"><span class="value">"43"</span></mark> 
            <span class="attrib">codeSystem=</span><span class="value">"<mark class="color14">2.16.840.1.113883.12.292</mark>"</span> 
            <span class="attrib">displayName=</span><span class="value">"<mark class="color15">hepatitis B vaccine, adult dosage</mark>"</span> 
            <span class="attrib">codeSystemName=</span><span class="value">"CVX"</span>&gt;
            &lt;<span class="field">originalText</span>&gt;hepatitis B vaccine&lt;/<span class="field">originalText</span>&gt;
          &lt;/<span class="field">code</span>&gt;
          &lt;lotNumberText<mark class="color16">&gt;2&lt;</mark>/lotNumberText&gt;
        &lt;/<span class="field">manufacturedMaterial</span>&gt;
      &lt;/<span class="field">manufacturedProduct</span>&gt;
    &lt;/<span class="field">consumable</span>&gt;
    &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"RSON"</span>&gt;
      &lt;<span class="field">observation</span> <span class="attrib">classCode=</span><span class="value">"OBS"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
        <span class="comment">&lt;!-- Immunization Refusal Reason  --&gt;</span>
        <span class="comment">&lt;!-- Included the reason since it may be relevant 
        to a future clinician or quality measurement --&gt;</span>
        &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.53"</span>/&gt;
        &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"c1296315-9a6d-45a2-aac0-ee225d375409"</span>/&gt;
        &lt;<span class="field">code</span> 
          <span class="attrib">displayName=</span><span class="value">"<mark class="color17">patient objection</mark>"</span> 
          <span class="attrib">code=</span><span class="value">"<mark class="color18">PATOBJ</mark>"</span> 
          <span class="attrib">codeSystemName=</span><span class="value">"HL7 ActNoImmunizationReason"</span> 
          <span class="attrib">codeSystem=</span><span class="value">"<mark class="color19">2.16.840.1.113883.5.8</mark>"</span>/&gt;
        &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span>/&gt;
      &lt;/<span class="field">observation</span>&gt;
    &lt;/<span class="field">entryRelationship</span>&gt;
  &lt;/<span class="field">substanceAdministration</span>&gt;
&lt;/<span class="field">entry</span>&gt;</div>
</td><td>
<div id="fhir" class="border codeArea">{
  "<span class="field">id</span>": "<span class="value">f122ceadccaa4a9accdc117634a89dda</span>",
  "<span class="field">resourceType</span>": "<span class="value">Immunization</span>",
  "<span class="field">vaccineCode</span>": {
    "<span class="field">coding</span>": [{
      "<span class="field">code</span>": <mark class="color13">"43"</mark>,
      "<span class="field">display</span>": "<span class="value"><mark class="color15">hepatitis B vaccine, adult dosage</mark></span>",
      "<span class="field">system</span>": "<span class="value"><mark class="color14">http://hl7.org/fhir/sid/cvx</mark></span>"
    }]
  },
  "<span class="field">identifier</span>": [{
    "<span class="field">system</span>": "<span class="value">urn:ietf:rfc:3986</span>",
    "<span class="field">value</span>": "<span class="value">urn:uuid:<mark class="color11">8d5942f9-5413-4486-af89-dcc5603dbec7</mark></span>"
  }],
  "<span class="field">lotNumber</span>": <mark class="color16">"2"</mark>,
  "<span class="field">occurrenceDateTime</span>": "<span class="value"><mark class="color12">2015-11-15</mark></span>",
  "<span class="field">patient</span>": {
    "<span class="field">reference</span>": "<span class="value">Patient/fff</span>"
  },
  "<span class="field">_primarySource</span>": {
    "<span class="field">extension</span>": [{
      "<span class="field">url</span>": "<span class="value">http://hl7.org/fhir/StructureDefinition/data-absent-reason</span>",
      "<span class="field">valueCode</span>": "<span class="value">unknown</span>"
    }]
  },
  "<span class="field">status</span>": "<span class="value"><mark class="color10">not-done</mark></span>",
  "<span class="field">statusReason</span>": {
    "<span class="field">coding</span>": [{
      "<span class="field">code</span>": "<span class="value"><mark class="color18">PATOBJ</mark></span>",
      "<span class="field">display</span>": "<span class="value"><mark class="color17">patient objection</mark></span>",
      "<span class="field">system</span>": "<span class="value"><mark class="color19">http://terminology.hl7.org/CodeSystem/v3-ActReason</mark></span>"
    }]
  }
}</div>
</td></tr></table>

#### Links to example content

The consensus mapping example developed through multiple vendors are available below:
* [Immuniztion CDA example](./Binary-CF-immunization.html)
* [Immuniztion FHIR example](./Immunization-CF-immunization.html)

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/CF-index.md

### C-CDA → FHIR

<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<blockquote class="stu-note">
		<b>Planned Future Maps</b>
		<p>The following represents the initial maps developed as part of the project team's plan to start with PAMI+ and then expand into other clinical domains. For more information, please see <a href="https://confluence.hl7.org/display/CGP/C-CDA+to+and+from+US+Core+Mapping">project page on Confluence</a> </p>
	</blockquote>
</div>

#### Available Maps
- [Allergies](CF-allergies.html)
- [Encounters](CF-encounters.html)
- [Immunizations](CF-immunizations.html)
- [Medications](CF-medications.html)
- [Notes](CF-notes.html)
- [Participation](CF-participations.html) (Including Author, DataEnterer, Informant, Performer, Participant)
- [Patient](CF-patient.html)
- [Problems](CF-problems.html)
- [Procedures](CF-procedures.html)
- [Results](CF-results.html)
- [Social History](CF-social.html) (Including Smoking Status, Pregnancy Observation)
- [Vital Signs](CF-vitals.html)

Please refer to [mapping background](mappingBackground.html) for more information how maps were selected and developed.


---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/CF-medications.md

<link rel="stylesheet" href="colors.css">

This page provides a mapping from CDA to FHIR. For the FHIR to CDA mapping, please refer to [Medications FHIR → CDA](./FC-medications.html). For guidance on how to read the table below, see [Reading the C-CDA ↔ FHIR Mapping Pages](./mappingGuidance.html)

<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<blockquote class="stu-note">
		<b>Medications to MedicationRequest</b>
		<p>Medications shown below represent the moodCode="INT" in CDA. For mapping histories of medication use from CDA, no consensus was established. We welcome feedback on this topic. For more information, please see chat.fhir.org and related <a href="https://chat.fhir.org/#narrow/stream/179273-CCDA-.2F-FHIR-mapping-stream/topic/CCDA.20Medication.20moodCode.20EVN.20to.20FHIR">stream</a></p>
	</blockquote>
</div>

**Medication Timing and Frequency**

C-CDA represents both timing (start date / end date) and frequency (when and how often to take) using `<effectiveTime>` elements. The first (represented in XPath as `/effectiveTime[1]`) represents the timing. If it contains `<low>` and/or `<high>` timestamps, this represents the `.timing.repeat.boundsPeriod` information of `MedicationRequest.dosageInstruction`. If, instead, the first effectiveTime only contains a single `@value` attribute, it represents a `.timing.event` dateTime value.

The second `<effectiveTime>` represents the frequency and contains the attribute `@operator="A"` to indicate it is an intersection with the first effectiveTime. It must also have an `@xsi:type` attribute which identifies the type of frequency as `PIVL_TS` (Periodic Interval) or `EIVL_TS` (Episodic Interval). `PIVL_TS` is the most common and represents a frequency corresponding to `.timing.repeat.frequency` / `.timing.repeat.period` / `.timing.repeat.periodUnit`. These relationship of three fields is described in FHIR: "Event occurs frequency times per period". For example: "Every 8 hours" would become 1 / 8 / h (one time every eight hours), while "TID" would become 3 / 1 / d (three times every one day).

`EIVL_TS` represents an event-based frequency, such as "1 hour after meal". The CDA `<event code="xx">` corresponds to FHIR's `.timing.when` and the optional `<offset>` corresponds to `.timing.offset`.

The C-CDA Example Search site maintains a document of [Common Medication Frequencies](http://cdasearch.hl7.org/examples/view/9588687865c0f945a326364a9449321690c7a7ef) which can be cross-referenced with a similar table in FHIR's [Timing Data Type](http://hl7.org/fhir/R4/datatypes.html#Timing) to properly map CDA frequencies to FHIR timing values.

### C-CDA to FHIR (MedicationRequest)

|C-CDA¹<br>[Medication Activity substanceAdministration](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-MedicationActivity.html)|FHIR<br>[MedicationRequest](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-medicationrequest.html)|Transform Steps|
|:----|:----|:----|
|/@negationInd="true"|set .doNotPerform=true||
|@moodCode|.intent|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept) <br/>[Mood to intent](ConceptMap-CF-MedActivityMood.html)|
|/id|.identifier|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
|/statusCode|.status|Pay attention to the definitions of active and completed in the FHIR medicationrequest-status code system. C-CDA may list a medication state as “completed” (i.e. the prescription writing has been completed), but containing dates in the future. This may more align with a FHIR status of “active” than “completed” which indicates all actions implied by the prescription have been completed<br/>[CDA statusCode → FHIR status](./ConceptMap-CF-MedicationStatus.html)|
|/effectiveTime[1]/@value|.dosageInstruction.timing.event|**Constraint**: Use this when effectiveTime@value is populated<br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|/effectiveTime[1]/low|.dosageInstruction.timing.repeat.boundsPeriod.start|**Constraint**: Use this when effectiveTime/@value is not populated<br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|/effectiveTime[1]/high|.dosageInstruction.timing.repeat.boundsPeriod.end|**Constraint**: Use this when effectiveTime/@value is not populated<br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|**Periodic Frequency**<br/>/effectiveTime[operator="A" and xsi:type="PIVL_TS"]<br/>.../@institutionSpecified<br/>.../period/@value<br/>.../period/@unit|.dosageInstruction.timing.repeat.frequency<br/>.dosageInstruction.timing.repeat.period<br/>.dosageInstruction.timing.repeat.periodUnit|Compare:<br/>[C-CDA Common Medication Frequencies](http://cdasearch.hl7.org/examples/view/9588687865c0f945a326364a9449321690c7a7ef) and <br/>[FHIR Timing Data Type](http://hl7.org/fhir/R4/datatypes.html#Timing) to determine whether `frequency` or `period` should be used.<br/>If CDA `period` contains `low` and `high` (e.g. a range like 4-6 hours or 3-4 times a day), map `low` the same as `@value` (e.g. to `repeat.period` or `repeat.frequency`) and map `high` to `repeat.periodMax` or `repeat.frequencyMax` depending on whether it is a frequency or period.
|**Event-Based Timing**<br/>/effectiveTime[operator="A" and xsi:type="EIVL_TS"]<br/>.../event/@code<br/>.../offset|.dosageInstruction.timing.repeat.when<br/>.dosageInstruction.timing.repeat.offset|@code vocabulary matches .when<br/>CDA offset must be converted to minutes for FHIR
|/routeCode|.dosageInstruction.route|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/approachSiteCode|.dosageInstruction.site|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/doseQuantity|.dosageInstruction.doseAndRate.doseQuantity|[CDA ↔ FHIR Quantity](mappingGuidance.html#cda--fhir-quantity)|
|/rateQuantity|.dosageInstruction.doseAndRate.rateQuantity|[CDA ↔ FHIR Quantity](mappingGuidance.html#cda--fhir-quantity)|
|/maxDoseQuantity/numerator|.dosageInstruction.maxDosePerPeriod.numerator|[CDA ↔ FHIR Quantity](mappingGuidance.html#cda--fhir-quantity)|
|/maxDoseQuantity/denominator|.dosageInstruction.maxDosePerPeriod.denominator|[CDA ↔ FHIR Quantity](mappingGuidance.html#cda--fhir-quantity)|
|/administrationUnitCode|Medication.form|[See below](#c-cda-to-fhir-medication)
|/consumable/manufacturedProduct/manufacturedMaterial/code|.medicationCodeableConcept<br/>OR<br/>.medicationReference|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)<br/>Only one of these fields may be populated. When generating a Medication resource ([see below](#c-cda-to-fhir-medication)), use the medicationReference field.|
|/consumable/manufacturedProduct/manufacturerOrganization|Medication.manufacturer|[See below](#c-cda-to-fhir-medication)
|/author|.requester<br/>&<br/>**[Provenance](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-procedure.html)**|[CDA ↔ FHIR Provenance](mappingGuidance.html#cda--fhir-provenance)|
|/author/time|.authoredOn|Earliest, if more than one.<br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|**[Drug Vehicle](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-DrugVehicle.html)**<br/>/participant[@typeCode="CSM"]/playingEntity/code|Medication.ingredient|[See below](#c-cda-to-fhir-medication)
|**[Indication](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-Indication.html)**<br/>/entryRelationship[@typeCode="RSON"]/observation/value|.reasonCode|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|**[Free text sig](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-MedicationFreeTextSig.html)**<br/>/entryRelationship/substanceAdministration[code/@code="76662-6"]/text|.dosageInstruction.text||
|**[Instruction Activity](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-Instruction.html)**<br/>/entryRelationship[@typeCode="SUBJ" and @inversionInd="true"]/act|.dosageInstruction.patientInstruction<br/>.dosageInstruction.additionalInstruction|act/text or act/code/originalText can map to patientInstructions. If coded, can map to additionalInstruction.
|**[Supply Order](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-MedicationSupplyOrder.html)**<br/>/entryRelationship[@typeCode="REFR"]/substanceAdministration[@moodCode="INT"]||Note: moodCode=INT means supply, moodCode=EVN means dispense, which is not documented here.
|../effectiveTime/high|.dispenseRequest.validityPeriod.end|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)<br/>`low` would similarly map to `start`, but only high is called out in C-CDA.|
|../repeatNumber|.dispenseRequest.numberOfRepeatsAllowed|**Caution:** in CDA, repeatNumber indicates total number of dispenses allowed. In FHIR, this field is exclusive of the original dispense. So the `numberOfRepeatsAllowed` will be one less than `repeatNumber`.
|../quantity|.dispenseRequest.quantity|[CDA ↔ FHIR Quantity](mappingGuidance.html#cda--fhir-quantity)
|**[Comment Activity](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-CommentActivity.html)**<br/>/entryRelationship/act[code/@code="48767-8"]/text|**[Annotation](https://hl7.org/fhir/datatypes.html#Annotation)**<br/>.note|See [Comment → Annotation](mappingGuidance.html#comment--annotation)|
|/precondition|.asNeededBoolean = true|The presence of a precondition element indicates asNeededBoolean should be true.<br/>More complex maps may be possible with .asNeededCodeableConcept.|

1\. XPath abbrievated for C-CDA Medication Activity as: <br/> ClinicalDocument/component/structuredBody/component/section[code/@code="10160-0"]/entry/substanceAdministration

### C-CDA to FHIR (Medication)
MedicationRequest (and other resources) may represent the medication as a simple CodeableConcept. But when additional information about the medication needs to be conveyed, a Medication resource should be created instead and referenced by the MedicationRequest resource. Implementers may also opt to always create Medication resources.

|C-CDA¹<br>[Medication Activity substanceAdministration](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-MedicationActivity.html)|FHIR<br>[Medication](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-medication.html)|Transform Steps|
|:----|:----|:----|
|/administrationUnitCode|.form|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)
|/consumable/manufacturedProduct/manufacturedMaterial/code|.code|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/consumable/manufacturedProduct/manufacturerOrganization|**[Organization](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-organization.html)**<br/>.manufacturer|
|**[Drug Vehicle](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-DrugVehicle.html)**<br/>/participant[@typeCode="CSM"]/playingEntity/code|.ingredient.itemCodeableConcept|Set `.isActive = false`<br/>[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)

### Example

<table><tr><th>CDA Medication Example</th><th>FHIR MedicationRequest and Medication Resources</th></tr>
<tr><td>
<div id="cda" class="border codeArea">&lt;<span class="field">substanceAdministration</span> <span class="attrib">classCode=</span><span class="value">"SBADM"</span> <span class="attrib">moodCode=</span><span class="value">"INT"</span>&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.16"</span> <span class="attrib">extension=</span><span class="value">"2014-06-09"</span>/&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.16"</span>/&gt;
  &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"<mark class="color10">cdbd33f0-6cde-11db-9fe1-0800200c9a66</mark>"</span>/&gt;
  &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"<mark class="color11">active</mark>"</span>/&gt;
  &lt;<span class="field">effectiveTime</span> <span class="attrib">xsi:type=</span><span class="value">"IVL_TS"</span>&gt;
    &lt;<span class="field">low</span> <span class="attrib">value=</span><span class="value">"20120806"</span>/&gt;
    &lt;<span class="field">high</span> <span class="attrib">nullFlavor=</span><span class="value">"UNK"</span>/&gt;
  &lt;/<span class="field">effectiveTime</span>&gt;
  &lt;<span class="field">effectiveTime</span> <span class="attrib">xsi:type=</span><span class="value">"PIVL_TS"</span> <span class="attrib">operator=</span>"A"&gt;
    &lt;<span class="field">period</span> <span class="attrib">xsi:type=</span><span class="value">"IVL_PQ"</span>&gt;
      &lt;<span class="field">low</span> <span class="attrib">value=</span><mark class="color13"><span class="value">"4"</span></mark> unit=<mark class="color14"><span class="value">"h"</span></mark>/&gt;
      &lt;<span class="field">high</span> <span class="attrib">value=</span><mark class="color15"><span class="value">"6"</span></mark> unit=<mark class="color14"><span class="value">"h"</span></mark>/&gt;
    &lt;/<span class="field">period</span>&gt;
  &lt;/<span class="field">effectiveTime</span>&gt;
  &lt;<span class="field">repeatNumber</span> <span class="attrib">value=</span><mark class="color16"><mark class="color40"><span class="value">"1"</span></mark></mark>/&gt;
  &lt;<span class="field">routeCode</span> 
    <span class="attrib">code=</span><span class="value">"<mark class="color17">C38288</mark>"</span> 
    <span class="attrib">codeSystem=</span><span class="value">"<mark class="color18">2.16.840.1.113883.3.26.1.1</mark>"</span> 
    <span class="attrib">codeSystemName=</span><span class="value">"NCI Thesaurus"</span> 
    <span class="attrib">displayName=</span><span class="value">"<mark class="color19">Oral Route of Administration</mark>"</span>/&gt;
  &lt;<span class="field">doseQuantity</span> <span class="attrib">value=</span><mark class="color16"><mark class="color40"><span class="value">"1"</span></mark></mark>/&gt;
  &lt;<span class="field">maxDoseQuantity</span> &gt;
    &lt;<span class="field">numerator</span> <span class="attrib">value=</span><mark class="color15"><span class="value">"6"</span></mark> <span class="attrib">unit=</span><span class="value">"<mark class="color20">{spray}</mark>"</span> /&gt;
    &lt;<span class="field">denominator</span> <span class="attrib">value=</span><mark class="color16"><mark class="color40"><span class="value">"1"</span></mark></mark> <span class="attrib">unit=</span><span class="value">"<mark class="color21">{day}</mark>"</span> /&gt;
  &lt;/<span class="field">maxDoseQuantity</span>&gt;
  &lt;<span class="field">administrationUnitCode</span> 
    <span class="attrib">code=</span><span class="value">"<mark class="color22">C48501</mark>"</span> 
    <span class="attrib">codeSystem=</span><span class="value">"<mark class="color18">2.16.840.1.113883.3.26.1.1</mark>"</span> 
    <span class="attrib">codeSystemName=</span><span class="value">"National Cancer Institute (NCI) Thesaurus"</span> 
    <span class="attrib">displayName=</span><span class="value">"<mark class="color23">Inhalation dosing unit</mark>"</span>/&gt;
  &lt;<span class="field">consumable</span>&gt;
    &lt;<span class="field">manufacturedProduct</span> <span class="attrib">classCode=</span><span class="value">"MANU"</span>&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.23"</span> <span class="attrib">extension=</span><span class="value">"2014-06-09"</span>/&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.23"</span>/&gt;
      &lt;<span class="field">manufacturedMaterial</span>&gt;
        &lt;<span class="field">code</span> 
          <span class="attrib">code=</span><span class="value">"<mark class="color24">1190220</mark>"</span> 
          <span class="attrib">codeSystem=</span><span class="value">"<mark class="color25">2.16.840.1.113883.6.88</mark>"</span> 
          <span class="attrib">codeSystemName=</span><span class="value">"<mark class="color25">RxNorm</mark>"</span> 
          <span class="attrib">displayName=</span><span class="value">"<mark class="color26">ACTUAT albuterol 0.1 MG/ACTUAT ... Spray</mark>"</span>/&gt;
      &lt;/<span class="field">manufacturedMaterial</span>&gt;
      &lt;<span class="field">manufacturerOrganization</span>&gt;
        &lt;<span class="field">name</span>&gt;<mark class="color27">Good Vaccines Inc</mark>&lt;/<span class="field">name</span>&gt;
      &lt;/<span class="field">manufacturerOrganization</span>&gt;
    &lt;/<span class="field">manufacturedProduct</span>&gt;
  &lt;/<span class="field">consumable</span>&gt;
  &lt;<span class="field">author</span>&gt;
    <span class="comment">&lt;!-- Time the author noted that patient is on medication --&gt;</span>
    &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.119"</span>/&gt;
    &lt;<span class="field">time</span> <span class="attrib">value=</span><span class="value">"<mark class="color28">201309111603-0700</mark>"</span>/&gt;
    &lt;<span class="field">assignedAuthor</span>&gt;
      <span class="comment">&lt;!-- Author maps to Provenance
          not included in this example --&gt;</span>
    &lt;/<span class="field">assignedAuthor</span>&gt;
  &lt;/<span class="field">author</span>&gt;
  &lt;<span class="field">participant</span> <span class="attrib">typeCode=</span><span class="value">"CSM"</span>&gt;
    &lt;<span class="field">participantRole</span> <span class="attrib">classCode=</span><span class="value">"MANU"</span>&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.24"</span>/&gt;
      &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"412307009"</span> 
        <span class="attrib">displayName=</span><span class="value">"Drug vehicle"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color29">2.16.840.1.113883.6.96</mark>"</span>/&gt;
      &lt;<span class="field">playingEntity</span> <span class="attrib">classCode=</span><span class="value">"MMAT"</span>&gt;
        &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"<mark class="color30">387390002</mark>"</span> 
          <span class="attrib">displayName=</span><span class="value">"<mark class="color31">sodium chloride</mark>"</span> 
          <span class="attrib">codeSystem=</span><span class="value">"<mark class="color29">2.16.840.1.113883.6.96</mark>"</span> 
          <span class="attrib">codeSystemName=</span><span class="value">"<mark class="color29">SNOMED</mark>"</span>/&gt;
        &lt;<span class="field">name</span>&gt;<mark class="color31">sodium chloride</mark>&lt;/<span class="field">name</span>&gt;
      &lt;/<span class="field">playingEntity</span>&gt;
    &lt;/<span class="field">participantRole</span>&gt;
  &lt;/<span class="field">participant</span>&gt;
  &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"COMP"</span>&gt;
    <span class="comment">&lt;!-- Medication Free Text SIG --&gt;</span>
    &lt;<span class="field">substanceAdministration</span> <span class="attrib">classCode=</span><span class="value">"SBADM"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.147"</span>/&gt;
      &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"76662-6"</span> <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.6.1"</span>/&gt;
      &lt;<span class="field">text</span>&gt;
        <span class="comment">&lt;!-- Resolves to: <mark class="color39">2 puffs every 4-6 hours as needed</mark> --&gt;</span>
        &lt;<span class="field">reference</span> <span class="attrib">value=</span><span class="value">"#MedicationSig_PRN_222222"</span>/&gt;
      &lt;/<span class="field">text</span>&gt;
      &lt;<span class="field">consumable</span>&gt;
        &lt;<span class="field">manufacturedProduct</span>&gt;
          &lt;<span class="field">manufacturedLabeledDrug</span> <span class="attrib">nullFlavor=</span><span class="value">"NA"</span>/&gt;
        &lt;/<span class="field">manufacturedProduct</span>&gt;
      &lt;/<span class="field">consumable</span>&gt;
    &lt;/<span class="field">substanceAdministration</span>&gt;
  &lt;/<span class="field">entryRelationship</span>&gt;
  &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"RSON"</span>&gt;
    &lt;<span class="field">observation</span> <span class="attrib">classCode=</span><span class="value">"OBS"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
      <span class="comment">&lt;!-- Indication (V2) --&gt;</span>
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.19"</span> <span class="attrib">extension=</span><span class="value">"2014-06-09"</span>/&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.19"</span>/&gt;
      &lt;<span class="field">id</span> <span class="attrib">extension=</span><span class="value">"44"</span> <span class="attrib">root=</span><span class="value">"1.3.6.1.4.1.22812.3.99930.3.4.1.3"</span>/&gt;
      &lt;<span class="field">code</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color29">2.16.840.1.113883.6.96</mark>"</span> 
        <span class="attrib">codeSystemName=</span><span class="value">"SNOMED CT"</span> 
        <span class="attrib">code=</span><span class="value">"404684003"</span> 
        <span class="attrib">displayName=</span><span class="value">"Clinical finding"</span>/&gt;
      &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span>/&gt;
      &lt;<span class="field">effectiveTime</span>&gt;
        &lt;<span class="field">low</span> <span class="attrib">nullFlavor=</span><span class="value">"NI"</span>/&gt;
      &lt;/<span class="field">effectiveTime</span>&gt;
      &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"CD"</span> 
        <span class="attrib">code=</span><span class="value">"<mark class="color32">56018004</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color29">2.16.840.1.113883.6.96</mark>"</span> 
        <span class="attrib">displayName=</span><span class="value">"<mark class="color33">wheezing</mark>"</span> /&gt;
    &lt;/<span class="field">observation</span>&gt;
  &lt;/<span class="field">entryRelationship</span>&gt;
  &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"SUBJ"</span> <span class="attrib">inversionInd=</span><span class="value">"true"</span>&gt;
    &lt;<span class="field">act</span> <span class="attrib">classCode=</span><span class="value">"ACT"</span> <span class="attrib">moodCode=</span><span class="value">"INT"</span>&gt;
      <span class="comment">&lt;!-- Instruction (V2) --&gt;</span>
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.20"</span> <span class="attrib">extension=</span><span class="value">"2014-06-09"</span>/&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.20"</span>/&gt;
      &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"<mark class="color34">1153465004</mark>"</span> 
        <span class="attrib">displayName=</span><span class="value">"<mark class="color35">Education about overdosing</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color29">2.16.840.1.113883.6.96</mark>"</span> 
        <span class="attrib">codeSystemName=</span><span class="value">"<mark class="color29"><mark class="color29">SNOMED</mark> CT</mark>"</span>/&gt;
      &lt;<span class="field">text</span>&gt;<mark class="color36">Do not overtake</mark>&lt;/<span class="field">text</span>&gt;
      &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span>/&gt;
    &lt;/<span class="field">act</span>&gt;
  &lt;/<span class="field">entryRelationship</span>&gt;
  &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"REFR"</span>&gt;
    &lt;<span class="field">supply</span> <span class="attrib">classCode=</span><span class="value">"SPLY"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.18"</span> <span class="attrib">extension=</span><span class="value">"2014-06-09"</span> /&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.18"</span>/&gt;
      &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"1.2.3.4.56789.1"</span> <span class="attrib">extension=</span><span class="value">"cb734647-fc99-424c-a864-7e3cda82e704"</span> /&gt;
      &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span> /&gt;
      &lt;<span class="field">effectiveTime</span>&gt;
        &lt;<span class="field">high</span> <span class="attrib">value=</span><span class="value">"<mark class="color37">20121106</mark>"</span> /&gt;
      &lt;/<span class="field">effectiveTime</span>&gt;
      <span class="comment">&lt;!-- Note in FHIR this is one less, so: 1 --&gt;</span>
      &lt;<span class="field">repeatNumber</span> <span class="attrib">value=</span><span class="value">"2"</span> /&gt;
      &lt;<span class="field">quantity</span> <span class="attrib">value=</span><mark class="color38"><span class="value">"3"</span></mark> /&gt;
      &lt;<span class="field">product</span>&gt;
        &lt;<span class="field">manufacturedProduct</span> <span class="attrib">classCode=</span><span class="value">"MANU"</span>&gt;
          &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.23"</span> <span class="attrib">extension=</span><span class="value">"2014-06-09"</span>/&gt;
          &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.23"</span>/&gt;
          &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"2a620155-9d11-439e-92b3-5d9815ff4ee8"</span>/&gt;
          &lt;<span class="field">manufacturedMaterial</span>&gt;
            &lt;<span class="field">code</span> 
            <span class="attrib">code=</span><span class="value">"<mark class="color24">1190220</mark>"</span> 
            <span class="attrib">codeSystem=</span><span class="value">"<mark class="color25">2.16.840.1.113883.6.88</mark>"</span> 
            <span class="attrib">codeSystemName=</span><span class="value">"<mark class="color25">RxNorm</mark>"</span> 
            <span class="attrib">displayName=</span><span class="value">"<mark class="color26">ACTUAT albuterol 0.1 MG/ACTUAT ... Spray</mark>"</span>/&gt;
          &lt;/<span class="field">manufacturedMaterial</span>&gt;
        &lt;/<span class="field">manufacturedProduct</span>&gt;
      &lt;/<span class="field">product</span>&gt;
    &lt;/<span class="field">supply</span>&gt;
  &lt;/<span class="field">entryRelationship</span>&gt;
  &lt;<span class="field">precondition</span> <span class="attrib">typeCode=</span><span class="value">"PRCN"</span>&gt;
    &lt;<span class="field">criterion</span>&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.25"</span> <span class="attrib">extension=</span><span class="value">"2014-06-09"</span> /&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.25"</span>/&gt;
      &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"ASSERTION"</span> <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.5.4"</span> /&gt;
      &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"CD"</span> 
        <span class="attrib">code=</span><span class="value">"<mark class="color32">56018004</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color29">2.16.840.1.113883.6.96</mark>"</span> 
        <span class="attrib">displayName=</span><span class="value">"<mark class="color33">Wheezing</mark>"</span> /&gt;
    &lt;/<span class="field">criterion</span>&gt;
  &lt;/<span class="field">precondition</span>&gt;
&lt;/<span class="field">substanceAdministration</span>&gt;</div>
</td><td>
<b>Note:</b> The following shows a MedicationRequest resource with a Medication resource embedded in its contained property. This was done for ease of creating a single, visual, highlighted example, but implementers may choose to create separate, external resources according to their own policy.

<div id="fhir" class="border codeArea">{
  "<span class="field">resourceType</span>": "<span class="value">MedicationRequest</span>",
  "<span class="field">id</span>": "<span class="value">7fc60296-0667-4a44-86e5-4c432403532e</span>",
  "<span class="field">identifier</span>": [
    {
      "<span class="field">system</span>": "<span class="value">urn:ietf:rfc:3986</span>",
      "<span class="field">value</span>": "<span class="value">urn:uuid:<mark class="color10">cdbd33f0-6cde-11db-9fe1-0800200c9a66</mark></span>"
    }
  ],
  "<span class="field">status</span>": "<span class="value"><mark class="color11">active</mark></span>",
  "<span class="field">intent</span>": "<span class="value">plan</span>",
  "<span class="field">medicationReference</span>": {
    "<span class="field">reference</span>": "<span class="value">#containedMed</span>"
  },
  <span class="comment">/* Only one of these can be sent. 
     If not including a Medication resource
     the code can just be sent in codeableConcept
  "<span class="field">medicationCodeableConcept</span>": {
    "<span class="field">coding</span>": [
      {
        "<span class="field">system</span>": "<span class="value"><mark class="color25">http://www.nlm.nih.gov/research/umls/rxnorm</mark></span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color24">1190220</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color26">ACTUAT albuterol 0.1 MG/ACTUAT ... Spray</mark></span>"
      }
    ]
  }, */
  </span>"<span class="field">subject</span>": {
    "<span class="field">reference</span>": "<span class="value">Patient/18025725</span>"
  },
  "<span class="field">authoredOn</span>": "<span class="value"><mark class="color28">2013-09-11T16:03:00-07:00</mark></span>",
  "<span class="field">reasonCode</span>": [
    {
      "<span class="field">coding</span>": [
        {
          "<span class="field">system</span>": "<span class="value"><mark class="color29">http://snomed.info/sct</mark></span>",
          "<span class="field">code</span>": "<span class="value"><mark class="color32">56018004</mark></span>",
          "<span class="field">display</span>": "<span class="value"><mark class="color33">wheezing</mark></span>"
        }
      ]
    }
  ],
  "<span class="field">dosageInstruction</span>": [
    {
      "<span class="field">text</span>": "<span class="value"><mark class="color39">2 puffs every 4-6 hours as needed</mark></span>",
      "<span class="field">patientInstruction</span>": "<span class="value"><mark class="color36">Do not overtake</mark></span>",
      "<span class="field">additionalInstruction</span>": [
        {
          "<span class="field">coding</span>": [
            {
              "<span class="field">system</span>": "<span class="value"><mark class="color29">http://snomed.info/sct</mark></span>",
              "<span class="field">code</span>": "<span class="value"><mark class="color34">1153465004</mark></span>",
              "<span class="field">display</span>": "<span class="value"><mark class="color35">Education about overdosing</mark></span>"
            }
          ]
        }
      ],
      "<span class="field">timing</span>": {
        "<span class="field">period</span>": <mark class="color13">4,</mark>
        "<span class="field">periodMax</span>": <mark class="color15">6,</mark>
        "<span class="field">periodUnit</span>": <mark class="color14">"h"</mark>
      },
      "<span class="field">asNeededCodeableConcept</span>": {
        "<span class="field">coding</span>": [
          {
            "<span class="field">system</span>": "<span class="value"><mark class="color29">http://snomed.info/sct</mark></span>",
            "<span class="field">code</span>": "<span class="value"><mark class="color32">56018004</mark></span>",
            "<span class="field">display</span>": "<span class="value"><mark class="color33">wheezing</mark></span>"
          }
        ]
      },
      "<span class="field">route</span>": {
        "<span class="field">coding</span>": [
          {
            "<span class="field">system</span>": "<span class="value">http://ncithesaurus-stage.nci.nih.gov</span>",
            "<span class="field">code</span>": "<span class="value"><mark class="color17">C38288</mark></span>",
            "<span class="field">display</span>": "<span class="value"><mark class="color19">Oral Route of Administration</mark></span>"
          }
        ]
      },
      "<span class="field">doseAndRate</span>": [
        {
          "<span class="field">doseQuantity</span>": {
            "<span class="field">value</span>": <mark class="color16"><mark class="color40">1
</mark></mark>          }
        }
      ],
      "<span class="field">maxDosePerPeriod</span>": {
        "<span class="field">numerator</span>": {
          "<span class="field">value</span>": <span class="value">6,</span>
          "<span class="field">unit</span>": "<span class="value"><mark class="color20">{spray}</mark></span>",
          "<span class="field">code</span>": "<span class="value"><mark class="color20">{spray}</mark></span>",
          "<span class="field">system</span>": "<span class="value">http://unitsofmeasure.org</span>"
        },
        "<span class="field">denominator</span>": {
          "<span class="field">value</span>": <span class="value">1,</span>
          "<span class="field">unit</span>": "<span class="value"><mark class="color21">{day}</mark></span>",
          "<span class="field">code</span>": "<span class="value"><mark class="color21">{day}</mark></span>",
          "<span class="field">system</span>": "<span class="value">http://unitsofmeasure.org</span>"
        }
      }
    }
  ],
  "<span class="field">dispenseRequest</span>": {
    "<span class="field">numberOfRepeatsAllowed</span>": <span class="value">1,</span>
    "<span class="field">validityPeriod</span>": {
      "<span class="field">end</span>": "<span class="value"><mark class="color37">2012-11-06</mark></span>"
    },
    "<span class="field">quantity</span>": {
      "<span class="field">value</span>": <mark class="color38">3
</mark>    }
  },
  "<span class="field">contained</span>": [{
    "<span class="field">resourceType</span>": "<span class="value">Medication</span>",
    "<span class="field">id</span>": "<span class="value">containedMed</span>",
    "<span class="field">code</span>": {
      "<span class="field">coding</span>": [{
        "<span class="field">system</span>": "<span class="value"><mark class="color25">http://www.nlm.nih.gov/research/umls/rxnorm</mark></span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color24">1190220</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color26">ACTUAT albuterol 0.1 MG/ACTUAT ... Spray</mark></span>"
      }]
    },
    "<span class="field">form</span>": {
      "<span class="field">coding</span>": [
        {
          "<span class="field">system</span>": "<span class="value"><mark class="color18">http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl</mark></span>",
          "<span class="field">code</span>": "<span class="value"><mark class="color22">C48501</mark></span>",
          "<span class="field">display</span>": "<span class="value"><mark class="color23">Inhalation dosing unit</mark></span>"
        }
      ]
    },
    "<span class="field">manufacturer</span>": {
      <span class="comment">// If more details exist, would map to Organization resource</span>
      "<span class="field">display</span>": "<span class="value"><mark class="color27">Good Vaccines Inc</mark></span>"
    },
    "<span class="field">ingredient</span>": [{
      "<span class="field">itemCodeableConcept</span>": {
        "<span class="field">coding</span>": [
          {
            "<span class="field">system</span>": "<span class="value"><mark class="color29">http://snomed.info/sct</mark></span>",
            "<span class="field">code</span>": "<span class="value"><mark class="color30">387390002</mark></span>",
            "<span class="field">display</span>": "<span class="value"><mark class="color31">sodium chloride</mark></span>"
          }
        ]
      }
    }]
  }]
}</div>
</td></tr></table>

#### Links to example content

The consensus mapping example developed through multiple vendors are available below:
* [Medication CDA example](./Binary-CF-medication.html)
* [MedicationRequest FHIR example](./MedicationRequest-CF-medication.html)

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/CF-notes.md

<link rel="stylesheet" href="colors.css">

This page provides a mapping from CDA to FHIR. <!-- For the FHIR to CDA mapping, please refer to [Notes FHIR → CDA](./FC-notes.html). --> For guidance on how to read the table below, see [Reading the C-CDA ↔ FHIR Mapping Pages](./mappingGuidance.html).

Clinical Notes may appear in their own section or as an entry in any open section. They are identified by an `<act>` with a `<code>` value of `34109-9`.

### C-CDA to FHIR

|C-CDA¹<br/>[Note Activity](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-NoteActivity.html)|[DocumentReference](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-documentreference.html)|Transform Steps|
|:----|:----|:----|
|/id|.identifier|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
|/code/translation|.type|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)<br/>**NOTE:** The root code in C-CDA is always `34109-9: Note`. A more specific code may be sent in translation which should be sent as the DocumentReference.type. If there is no translation, however, `34109-9` may be sent as the type.
||.category|Set to `clinical-note`.
|/text/@mediaType<br/>&<br/>/text/text()|.content.attachment.contentType<br/>&<br/>.content.attachment.data|If @mediaType is present, then representation should = B64, and the inner-text contents are embedded base64-encoded data. In this case, the mediaType and base64-encoded data map 1:1 to attachment.contentType and .data.
|/text/reference/@value|.content.attachment.contentType<br/>&<br/>.content.attachment.data|Convert the narrative element referenced by @value following [Narrative Text](mappingGuidance.html#narrative-text) guidance and use `application/xhtml+xml` as the contentType.<br/>If the narrative has minimal markup (i.e. only `<content>` and `<paragraph>` elements which can be converted to line breaks), it can be converted to `text/plain`.<br/>To send the raw CDA narrative without converting, use `application/cda+xml`, but this is less useful to receivers.
|/effectiveTime|.context.period|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)
|/author|.author|[C-CDA → FHIR Participation](CF-participations.html)
|/author/time|.date|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)
|/entryRelationship[@typeCode=COMP]/encounter<br/>or<br/>Parent `<encounter>` element<br/>or<br/>`<encompassingEncounter>`|.context.encounter|C-CDA requires an encounter for notes, but allows for context conduction. If the Note Activity is in an entryRelationship chain that includes an Encounter Activity, use that. Otherwise, if the document contains an `<encompassingEncounter>`, that is the encounter for the note.<br/>[CDA → FHIR Encounters](CF-encounters.html)
|/reference/externalDocument/id|.relatesTo.target.identifier|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|

### Example

<table><tr><th>CDA Note Activity Example</th><th>FHIR DocumentReference Resource</th></tr>
<tr><td>
<div id="cda" class="border codeArea">&lt;<span class="field">act</span> <span class="attrib">classCode=</span><span class="value">"ACT"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.202"</span> <span class="attrib">extension=</span><span class="value">"2016-11-01"</span>/&gt;
  &lt;<span class="field">code</span> 
    <span class="attrib">code=</span><span class="value">"<mark class="color10">34109-9</mark>"</span> 
    <span class="attrib">codeSystem=</span><span class="value">"<mark class="color11">2.16.840.1.113883.6.1</mark>"</span> 
    <span class="attrib">codeSystemName=</span><span class="value">"<mark class="color11">LOINC</mark>"</span>
    <span class="attrib">displayName=</span><span class="value">"<mark class="color12">Note</mark>"</span>&gt;
    <span class="comment">&lt;!-- Code must match or be equivalent to section code --&gt;</span>
    &lt;<span class="field">translation</span> 
      <span class="attrib">code=</span><span class="value">"<mark class="color13">11488-4</mark>"</span> 
      <span class="attrib">codeSystem=</span><span class="value">"<mark class="color11">2.16.840.1.113883.6.1</mark>"</span>
      <span class="attrib">codeSystemName=</span><span class="value">"<mark class="color11">LOINC</mark>"</span>
      <span class="attrib">displayName=</span><span class="value">"<mark class="color14">Consultation note</mark>"</span>/&gt;
  &lt;/<span class="field">code</span>&gt;
  &lt;<span class="field">text</span> <span class="attrib">mediaType=</span><span class="value">"<mark class="color16">application/rtf</mark>"</span> <span class="attrib">representation=</span><span class="value">"B64"</span>&gt;
    <mark class="color15">e1xydGYxXGFuc2kgSGVsbG8gd29ybGQhfQ==</mark>
    &lt;<span class="field">reference</span> <span class="attrib">value=</span><span class="value">"#ConsultNote1"</span>/&gt;
  &lt;/<span class="field">text</span>&gt;
  &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span>/&gt;
  <span class="comment">&lt;!-- Clinically-relevant time of the note --&gt;</span>
  &lt;<span class="field">effectiveTime</span> <span class="attrib">value=</span><span class="value">"<mark class="color17">20160908</mark>"</span>/&gt;
  <span class="comment">&lt;!-- Author Participation --&gt;</span>
  &lt;<span class="field">author</span>&gt;
    &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.119"</span>/&gt;
    <span class="comment">&lt;!-- Time note was actually written --&gt;</span>
    &lt;<span class="field">time</span> <span class="attrib">value=</span><span class="value">"<mark class="color18">20160908083215-0500</mark>"</span>/&gt;
    &lt;<span class="field">assignedAuthor</span>&gt;
      <span class="comment">&lt;!-- Full author information is elsewhere in the document . --&gt;</span>
      &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"20cf14fb-b65c-4c8c-a54d-b0cca834c18c"</span>/&gt;
      <span class="comment">&lt;!-- Becomes reference: <mark class="color20">Practitioner/DrSpecialist</mark> --&gt;</span>
      &lt;<span class="field">assignedPerson</span>&gt;
        &lt;<span class="field">name</span>&gt;
          &lt;<span class="field">prefix</span>&gt;Dr.&lt;/<span class="field">prefix</span>&gt;
          &lt;<span class="field">family</span>&gt;Specialist&lt;/<span class="field">family</span>&gt;
        &lt;/<span class="field">name</span>&gt;
      &lt;/<span class="field">assignedPerson</span>&gt;
    &lt;/<span class="field">assignedAuthor</span>&gt;
  &lt;/<span class="field">author</span>&gt;
  &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"COMP"</span>&gt;
    <span class="comment">&lt;!-- Creates an encounter with reference: <mark class="color21">Encounter/123</mark> --&gt;</span>
    &lt;<span class="field">encounter</span>&gt;
      ...
    &lt;/<span class="field">encounter</span>&gt;
  &lt;/<span class="field">entryRelationship</span>&gt;
  &lt;<span class="field">reference</span> <span class="attrib">typeCode=</span><span class="value">"REFR"</span>&gt;
    &lt;<span class="field">externalDocument</span>&gt;
      &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"<mark class="color19">4dc41c26-43a4-48d9-b17e-067890006b29</mark>"</span> /&gt;
    &lt;/<span class="field">externalDocument</span>&gt;
  &lt;/<span class="field">reference</span>&gt;
&lt;/<span class="field">act</span>&gt;</div>
</td><td>
<div id="fhir" class="border codeArea">{
  "<span class="field">resourceType</span>": "<span class="value">DocumentReference</span>",
  "<span class="field">id</span>": "<span class="value">642ed1f93eec840007aaec72</span>",
  "<span class="field">language</span>": "<span class="value">en-US</span>",
  "<span class="field">status</span>": "<span class="value">current</span>",
  "<span class="field">type</span>": {
    "<span class="field">text</span>": "<span class="value"><mark class="color12">Note</mark></span>",
    "<span class="field">coding</span>": [{
      "<span class="field">code</span>": "<span class="value"><mark class="color10">34109-9</mark></span>",
      "<span class="field">system</span>": "<span class="value"><mark class="color11">http://loinc.org</mark></span>"
    },
    {
      "<span class="field">code</span>": "<span class="value"><mark class="color13">11488-4</mark></span>",
      "<span class="field">system</span>": "<span class="value"><mark class="color11">http://loinc.org</mark></span>",
      "<span class="field">display</span>": "<span class="value"><mark class="color14">Consultation Note</mark></span>"
    }]
  },
  "<span class="field">category</span>": [{
    "<span class="field">text</span>": "<span class="value">Clinical Note</span>",
    "<span class="field">coding</span>": [{
        "<span class="field">code</span>": "<span class="value">clinical-Note</span>",
      "<span class="field">system</span>": "<span class="value">http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category</span>",
      "<span class="field">display</span>": "<span class="value">Clinical Note</span>"
    }]
  }],
  "<span class="field">subject</span>": {
    "<span class="field">reference</span>": "<span class="value">urn:uuid:a4986486-6599-4bb2-a7fb-e2deb8d50b5e</span>"
  },
  "<span class="field">date</span>": "<span class="value"><mark class="color18">2016-09-08T08:32:15-05:00</mark></span>",
  "<span class="field">author</span>": [{
    "<span class="field">reference</span>": "<span class="value"><mark class="color20">Practitioner/DrSpecialist</mark></span>"
  }],
  "<span class="field">content</span>": [{
      "<span class="field">attachment</span>": {
      "<span class="field">data</span>": "<span class="value"><mark class="color15">e1xydGYxXGFuc2kgSGVsbG8gd29ybGQhfQ==</mark></span>",
      "<span class="field">contentType</span>": "<span class="value"><mark class="color16">application/rtf</mark></span>"
    }
  }],
  "<span class="field">context</span>": {
    "<span class="field">period</span>": {
      "<span class="field">start</span>": "<span class="value"><mark class="color17">2016-09-08</mark></span>"
    },
    "<span class="field">encounter</span>": [{
      "<span class="field">reference</span>": "<span class="value"><mark class="color21">Encounter/123</mark></span>"
    }]
  },
  "<span class="field">relatesTo</span>": {
    "<span class="field">target</span>": {
      "<span class="field">identifier</span>": {
        "<span class="field">system</span>": "<span class="value">urn:ietf:rfc:3986</span>",
        "<span class="field">value</span>": "<span class="value">urn:uuid:<mark class="color19">4dc41c26-43a4-48d9-b17e-067890006b29</mark></span>"
      }
    }
  }
}</div>
</td></tr></table>

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/CF-participations.md

<link rel="stylesheet" href="colors.css">

CDA defines participants in a number of elements, but the structure is often similar. These represent people (usually providers), organizations, and in some cases devices, locations, or some combination of all of the above.

The FHIR equivalent of these fields are most commonly Practitioner, Organization, and PractitionerRole resources. Occasionally RelatedPerson, Device, or Location may be appropriate targets of CDA participants as well.

### Comparison of CDA Participant elements

The following table shows the common and unique fields of each CDA participation type. Since all (except Participant) are just specific flavors of participation, they can all be mapped to FHIR fairly similarly. For Participant mapping, the `@typeCode` and `@classCode` attributes are key in determining the type of FHIR resource to create.

|[Author](https://hl7.org/cda/stds/core/2.0.0-sd/StructureDefinition-Author.html)<br/>(Non-Device)|[Data Enterer](https://hl7.org/cda/stds/core/2.0.0-sd/StructureDefinition-DataEnterer.html)|[Informant](https://hl7.org/cda/stds/core/2.0.0-sd/StructureDefinition-Informant.html)|[Performer](https://hl7.org/cda/stds/core/2.0.0-sd/StructureDefinition-Performer2.html) / <br/>[Performer (Service Event)](https://hl7.org/cda/stds/core/2.0.0-sd/StructureDefinition-Performer1.html)|[Participant](https://hl7.org/cda/stds/core/2.0.0-sd/StructureDefinition-Participant1.html)<br/>(ClinicalDocument)|[Participant](https://hl7.org/cda/stds/core/2.0.0-sd/StructureDefinition-Participant2.html)<br/>(Everywhere Else)|
|:----|:----|:----|:----|:----|:----|
|`@typeCode=AUT`|`@typeCode=ENT`|`@typeCode=INF`|`@typeCode=PRF`|@typeCode|@typeCode
|functionCode|||sdtc:functionCode<br/>(no sdtc: in ServiceEvent)|functionCode|sdtc:functionCode
|time|time||time|time|time
||||modeCode (not in serviceEvent)||awarenessCode
|**assignedAuthor**|**assignedEntity**|**assignedEntity**<br/>or<br/>**relatedEntity**|**assignedEntity**|**associatedEntity**|**participantRole**
|`/@classCode=ASSIGNED`|`/@classCode=ASSIGNED`|/@classCode<br/>(assignedEntity = `ASSIGNED`)|/`@classCode=ASSIGNED`|/@classCode|/@classCode
|/id|/id|/id (not in related)|/id|/id|/id
|/code|/code|/code|/code|/code|/code
|/addr|/addr|/addr|/addr|/addr|/addr
|/telecom|/telecom|/telecom|/telecom|/telecom|/telecom
|||/effectiveTime (only in related)
||/sdtc:patient/id|/sdtc:patient/id (not in related)|/sdtc:patient/id
|/**assignedPerson**|/**assignedPerson**|/**assignedPerson**<br/>or<br/>/**relatedPerson**|/**assignedPerson**|/**associatedPerson**|/**playingEntity**
|//`@classCode=PSN`|//`@classCode=PSN`|//`@classCode=PSN`|//`@classCode=PSN`|//`@classCode=PSN`|//@classCode
|//name|//name|//name|//name|//name|//name
|//sdtc:desc|//sdtc:desc|//sdtc:desc|//sdtc:desc|//sdtc:desc|//desc
|//asPatientRelationship/code|//asPatientRelationship/code|//asPatientRelationship/code|//asPatientRelationship/code|//asPatientRelationship/code
||||||//code
||||||//quantity
||||||//sdtc:birthTime
|/**representedOrganization**|/**representedOrganization**|/**representedOrganization**<br/>(not in related)|/**representedOrganization**|/**scopingOrganization**|/**scopingEntity**
|/`@classCode=ORG`|/`@classCode=ORG`|/`@classCode=ORG`|/`@classCode=ORG`|/`@classCode=ORG`|//@classCode
|//id|//id|//id|//id|//id|//id
|//name|//name|//name|//name|//name|//desc
|//telecom|//telecom|//telecom|//telecom|//telecom
|//addr|//addr|//addr|//addr|//addr
|//standardIndustryClassCode|//standardIndustryClassCode|//standardIndustryClassCode|//standardIndustryClassCode|//standardIndustryClassCode|//code
|//asOrganizationPartOf (recursive)|//asOrganizationPartOf (recursive)|//asOrganizationPartOf (recursive)|//asOrganizationPartOf (recursive)|//asOrganizationPartOf

### Mapping to different FHIR resource types

The general process for creating FHIR resources from CDA Participations is as follows:

- If the device element is populated (Author and Participation), create a **[Device](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-implantable-device.html)** resource
- If the relatedPerson element is present (Informant only), the `<asPatientRelationship>` element is present, or Participant/@typeCode indicates a non-clinical Person, create a **[RelatedPerson](https://hl7.org/fhir/us/core/StructureDefinition-us-core-relatedperson.html)** resource. Note that RelatedPerson has no Organization component, so if CDA conveys an organization, an additional Person resource may need to be created with a `level4` link to RelatedPerson.
- If the @typeCode (Participant only) indicates a physical location, create a **[Location](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-location.html)** resource.
- If there is no person element present and only an organization element is present, create an **[Organization](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-organization.html)** resource.
- If there is both a person element and either an organization or a person/code element (see below for more details), create a **[PractitionerRole](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-practitionerrole.html)** and **[Practitioner](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-practitioner.html)** resource. If there is an organization, also create an **[Organization](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-organization.html)** resource.

In some cases a specific FHIR resource type may not be allowed (for example, a `.recorder` that can reference Practitioner or PractitionerRole but not Device). Implementers should be aware of requirements and make adjustments accordingly.

### Mapping functionCode & time
In most cases the `<functionCode>` and `<time>` properties correspond to fields in the resource that is referencing the practitioner. For example, Encounter.participant.individual points to Practitioner, while CDA's `<functionCode>` would map to Encounter.participant.type. Likewise, `<time>` often maps to fields like `recorded` or `assertedDate`.

### Mapping id
Though the `<id>` element in CDA is recorded at the role level, it is used to represent the id of the person, not their role. For example, clinicians' NPI's are recorded here. For this reason, the `<id>` should always be mapped to Practitioner.identifier or RelatedPerson.identifier, not to PractitionerRole.identifier

Note that this is different than the `<id>` underneath `<representedOrganization>` or `<scopingOrganization>` which maps to the identifier in an Organization resource.

### Mapping code
The `<code>` element in CDA is ambiguous and mapping to FHIR often depends on context and/or the coding system used. Common mappings to FHIR locations include:

- **PractitionerRole.code** - role the participant is playing
- **PractitionerRole.specialty** - specific specialty of the provider
- **RelatedPerson.relationship** - when talking about a non-provider (though `<asPatientRelationship>/<code>` is a more appropriate location, it is a recently-added extension and not commonly populated)
- **Practitioner**.qualification.code - uncommon; this is more commonly found in name/suffix

Additionally, if there is a `<representedOrganization>` or `<scopingOrganization>` with *only* a `<standardIndustryClassCode>` populated, this could also indicate specialty.

### Practitioner vs ParticipantRole
When there is information about a person AND an organization, the PractitionerRole resource should be created to represent the role that person plays at that organization.

Additionally, if `<code>` corresponds to role code or specialty, the PractitionerRole resource is the only way to convey this information.

### CDA to FHIR Organization
Note when the only field populated is `<standardIndustryClassCode>`, the Organization resource can be omitted and simply populate the PractitionerRole.specialty.

|CDA [Organization](https://hl7.org/cda/stds/core/2.0.0-sd/StructureDefinition-Organization.html)|CDA [Participant/scopingEntity](https://hl7.org/cda/stds/core/2.0.0-sd/StructureDefinition-Entity.html)<br/>(Only when `@classCode` = `ORG` or a similar class)|FHIR [Organization](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-organization.html)|Transform Steps|
|:----|:----|:---|:---|
|/id|/id|.identifier|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
|/name|/desc|.name|This is just a string in FHIR
|/telecom|/telecom|.telecom|[CDA id ↔ FHIR telecom](mappingGuidance.html#cda-telecom--fhir-telecom)|
|/addr|/addr|.address|[CDA id ↔ FHIR address](mappingGuidance.html#cda-addr--fhir-address)|
|/standardIndustryClassCode|/code|.type|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)
|/asOrganizationPartOf|/asOrganizationPartOf|.partOf|Recursive Organization reference

#### Example - CDA to FHIR Organization
Note - the CDA tag could be any number of organization tags like `<representedOrganization>`, `<scopingOrganization>`, etc.
<table><tr><th>CDA Organization</th><th>FHIR Organization</th></tr>
<tr><td>
<div id="cda" class="border codeArea">&lt;<span class="field">Organization</span>&gt;
  &lt;<span class="field">id</span> <span class="attrib">extension=</span><mark class="color10"><span class="value">"3"</span></mark>
    <span class="attrib">root=</span><span class="value">"<mark class="color11">1.3.6.1.4.1.22812.3.2009316.3</mark>"</span> /&gt;
  &lt;<span class="field">name</span>&gt;<mark class="color12">Primary Care Partners Test</mark>&lt;/<span class="field">name</span>&gt;
  &lt;<span class="field">telecom</span> <span class="attrib">use=</span><mark class="color13"><span class="value">"WP"</span></mark> 
    <span class="attrib">value=</span><span class="value">"tel:<mark class="color14">+1-(676)857-6769</mark>"</span> /&gt;
  &lt;<span class="field">addr</span> <span class="attrib">use=</span><mark class="color13"><span class="value">"WP"</span></mark>&gt;
    &lt;<span class="field">streetAddressLine</span>&gt;<mark class="color15">123 main street</mark>&lt;/<span class="field">streetAddressLine</span>&gt;
    &lt;<span class="field">city</span>&gt;<mark class="color16">Chicago</mark>&lt;/<span class="field">city</span>&gt;
    &lt;state<mark class="color17">&gt;IL&lt;</mark>/state&gt;
    &lt;<span class="field">postalCode</span>&gt;<mark class="color18">60629</mark>&lt;/<span class="field">postalCode</span>&gt;
  &lt;/<span class="field">addr</span>&gt;
&lt;/<span class="field">Organization</span>&gt;</div>
</td><td>
<div id="fhir" class="border codeArea">{
  "<span class="field">resourceType</span>": "<span class="value">Organization</span>",
  "<span class="field">identifier</span>": [{
    "<span class="field">value</span>": <mark class="color10">"3"</mark>,
    "<span class="field">system</span>": "<span class="value">urn:oid:<mark class="color11">1.3.6.1.4.1.22812.3.2009316.3</mark></span>"
  }],
  "<span class="field">name</span>": "<span class="value"><mark class="color12">Primary Care Partners Test</mark></span>",
  "<span class="field">address</span>": [{
    "<span class="field">use</span>": "<span class="value"><mark class="color13">work</mark></span>",
    "<span class="field">line</span>": [ "<mark class="color15">123 main street</mark>" ],
    "<span class="field">city</span>": "<span class="value"><mark class="color16">Chicago</mark></span>",
    "<span class="field">state</span>": <mark class="color17">"IL"</mark>,
    "<span class="field">postalCode</span>": "<span class="value"><mark class="color18">60629</mark></span>"
  }],
  "<span class="field">telecom</span>": [{
    "<span class="field">value</span>": "<span class="value"><mark class="color14">+1-(676)857-6769</mark></span>",
    "<span class="field">use</span>": "<span class="value"><mark class="color13">work</mark></span>",
    "<span class="field">system</span>": "<span class="value">phone</span>"
  }],
  "<span class="field">active</span>": true
}</div>
</td></tr></table>

### CDA to FHIR Practitioner

|[AssignedAuthor](https://hl7.org/cda/stds/core/2.0.0-sd/StructureDefinition-AssignedAuthor.html)<br/>[AssignedEntity](https://hl7.org/cda/stds/core/2.0.0-sd/StructureDefinition-AssignedEntity.html)<br/>[AssociatedEntity](https://hl7.org/cda/stds/core/2.0.0-sd/StructureDefinition-AssociatedEntity.html)<br/>[ParticipantRole](https://hl7.org/cda/stds/core/2.0.0-sd/StructureDefinition-ParticipantRole.html)|[Practitioner](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-practitioner.html)|Transform Steps|
|:----|:----|:----|
|/id|.identifier|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
|/code||See [See Mapping code](#mapping-code)<br/>In most cases, the presence of a `<code>` requires a PractitionerRole resource.|
|/addr|.address|[CDA id ↔ FHIR address](mappingGuidance.html#cda-addr--fhir-address)<br/>In FHIR this is a non-role-specific, such as a home address.<br/>If this represents a role address, this should go into PractitionerRole.address.|
|/telecom|.telecom|[CDA id ↔ FHIR telecom](mappingGuidance.html#cda-telecom--fhir-telecom)|
|**[Person](https://hl7.org/cda/stds/core/2.0.0-sd/StructureDefinition-Person.html)<br/>[PlayingEntity](https://hl7.org/cda/stds/core/2.0.0-sd/StructureDefinition-PlayingEntity.html)**||Person is the CDA data type for `<assignedPerson>` and `<associatedPerson>`.|
|//name|.name|[CDA name ↔ FHIR name](mappingGuidance.html#cda-name--fhir-name)|
|//name/suffix|.qualification.code|If the suffix contains a qualifier like PhD, CNP, etc.|
|//desc|.qualification.code<br/>or<br/>.text|Only map to qualifier if desc contains a qualifier.


---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/CF-patient.md

<link rel="stylesheet" href="colors.css">

This page provides a mapping from CDA to FHIR. For the FHIR to CDA mapping, please refer to [Patient FHIR → CDA](./FC-patient.html). For guidance on how to read the table below, see [Reading the C-CDA ↔ FHIR Mapping Pages](./mappingGuidance.html)

<br />
<br />
### C-CDA to FHIR

|C-CDA¹<br/>[US Realm Header recordTarget](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-USRealmHeader.html)|FHIR<br/>[Patient](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-patient.html#profile)|Transform Steps|
|:----|:----|:----|
|/id|.identifier|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
|/addr|.address|[CDA addr ↔ FHIR address ](mappingGuidance.html#cda-addr--fhir-address)|
|/telecom|.telecom|[CDA telecom ↔ FHIR telecom](mappingGuidance.html#cda-telecom--fhir-telecom)|
|/patient/name|.name|[CDA name ↔ FHIR name ](mappingGuidance.html#cda-name--fhir-name)|
|/patient/administrativeGenderCode|.gender|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)<br/>[CDA administrativeGender → FHIR gender](ConceptMap-CF-AdministrativeGender.html)|
|/patient/birthTime|.birthDate|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates) <br/>**Note:** the FHIR birthDate element is less precise than the CDA birthtime element. Precision can be preserved by also using the extension [`patient-birthTime`](https://hl7.org/fhir/R4/extension-patient-birthtime.html).|
|/patient/sdtc:deceasedInd|.deceasedBoolean|**Note:** Only one of `deceasedBoolean` or `deceasedDateTime` may exist. If both are present in CDA, use deceasedDateTime.
|/patient/sdtc:deceasedTime|.deceasedDateTime|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)
|/patient/maritalStatusCode|.maritalStatus|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/patient/religiousAffiliationCode|.extension:[patient-religion](https://hl7.org/fhir/extensions/StructureDefinition-patient-religion.html).valueCodeableConcept|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)
|/patient/raceCode|.extension:[us-core-race](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-race.html): ombCategory|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)<br/>This should be a category and map to the ombCategory sub-extension. But if it is a detailed race, then it should go in the detailed sub-extension.|
|/patient/sdtc:raceCode|.extension:[us-core-race](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-race.html)|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)<br/>If code is in [OMB category](http://hl7.org/fhir/us/core/ValueSet/omb-race-category), use us-core-race: ombCategory; else use us-core-race: detailed.<br/>If the detailed race is under a different OMB category that the non-sdtc:raceCode element, then an additional OMB category sub-extension should be included as well.|
|/patient/raceCode/originalText<br/>and<br/>/patient/sdtc:raceCode/originalText|.extension:[us-core-race](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-race.html): text|The race extension's text sub-extension is required but may only exist once. Recommendation is to comma-delimit all originalText / displayNames available, taking care to not duplicate values.
|/patient/ethnicGroupCode|.extension:[us-core-ethnicity](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-ethnicity.html)|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)<br/>This should be a category and map to the ombCategory sub-extension. But if it is a detailed race, then it should go in the detailed sub-extension.|
|/patient/sdtc:ethnicGroupCode|.extension:[us-core-ethnicity](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-ethnicity.html) : detailed|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)<br/>Used for detailed ethnicity|
|/patient/guardian/code<br/>and<br/>/patient/guardian/guardianPerson/sdtc:asPatientRelationship/code|.contact.relationship|First, add a fixed relationship code of  `GUARD` from [v3 RoleCode](http://terminology.hl7.org/CodeSystem/v3-RoleCode) (`http://terminology.hl7.org/CodeSystem/v3-RoleCode`) to preserve the CDA guardian relationship. Then map the two fields to additional relationship entries using [CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)
|/patient/guardian/addr|.contact.address|[CDA addr ↔ FHIR address ](mappingGuidance.html#cda-addr--fhir-address)|
|/patient/guardian/telecom|.contact.telecom|[CDA telecom ↔ FHIR telecom](mappingGuidance.html#cda-telecom--fhir-telecom)|
|/patient/guardian/guardianPerson/name|.contact.name|[CDA name ↔ FHIR name ](mappingGuidance.html#cda-name--fhir-name)|
|/patient/birthPlace/place/addr|.extension:[patient-birthPlace](http://hl7.org/fhir/StructureDefinition/patient-birthPlace).valueAddress|[CDA addr ↔ FHIR address ](mappingGuidance.html#cda-addr--fhir-address)|
|/patient/languageCommunication/languageCode|.communication.language||
|/patient/languageCommunication/preferenceInd|.communication.preferred||
|/patient/languageCommunication/modeCode|.communication.extension:[patient-proficiency](http://hl7.org/fhir/StructureDefinition/patient-proficiency):type|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)<br/>If both modeCode and proficiencyLevelCode are set for a language, only one `patient-proficiency` extension is needed.
|/patient/languageCommunication/proficiencyLevelCode|.communication.extension:[patient-proficiency](http://hl7.org/fhir/StructureDefinition/patient-proficiency):level|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)<br/>If both modeCode and proficiencyLevelCode are set for a language, only one `patient-proficiency` extension is needed.
|/providerOrganization|.managingOrganization|

1\. XPath abbrievated for C-CDA US Realm recordTarget as: <br/> ClinicalDocument/recordTarget/patientRole

### Example

<table><tr><th>CDA RecordTarget Example</th><th>FHIR Patient Resource</th></tr>
<tr><td>
<div id="cda" class="border codeArea">&lt;<span class="field">recordTarget</span>&gt;
  &lt;<span class="field">patientRole</span>&gt;
    &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"<mark class="color10">068F3166-5721-4D69-94ED-8278FF035B8A</mark>"</span> /&gt;
    &lt;<span class="field">addr</span> <span class="attrib">use=</span><mark class="color11"><span class="value">"H"</span></mark>&gt;
      &lt;<span class="field">streetAddressLine</span>&gt;<mark class="color12">1357 Amber Drive</mark>&lt;/<span class="field">streetAddressLine</span>&gt;
      &lt;<span class="field">city</span>&gt;<mark class="color13">Beaverton</mark>&lt;/<span class="field">city</span>&gt;
      &lt;<span class="field">state</span>&gt;OR&lt;/<span class="field">state</span>&gt;
      &lt;<span class="field">postalCode</span>&gt;<mark class="color14">97006</mark>&lt;/<span class="field">postalCode</span>&gt;
    &lt;/<span class="field">addr</span>&gt;
    &lt;<span class="field">telecom</span> <span class="attrib">value=</span><span class="value">"tel:<mark class="color15">+1(565)867-5309</mark>"</span> <span class="attrib">use=</span><span class="value">"MC"</span>/&gt;
    &lt;<span class="field">patient</span>&gt;
      &lt;<span class="field">name</span> <span class="attrib">use=</span><span class="value">"L"</span>&gt;
        &lt;<span class="field">given</span>&gt;<mark class="color16">Myra</mark>&lt;/<span class="field">given</span>&gt;
        &lt;<span class="field">family</span>&gt;<mark class="color17">Jones</mark>&lt;/<span class="field">family</span>&gt;
      &lt;/<span class="field">name</span>&gt;
      &lt;<span class="field">administrativeGenderCode</span> 
        <span class="attrib">code=</span><mark class="color18"><span class="value">"F"</span></mark> 
        <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.5.1"</span> /&gt;
      &lt;<span class="field">birthTime</span> <span class="attrib">value=</span><span class="value">"<mark class="color19">19470501</mark>"</span> /&gt;
      &lt;<span class="field">sdtc:deceasedInd</span> <span class="attrib">value=</span><span class="value">"<mark class="color20">false</mark>"</span> /&gt;
      &lt;<span class="field">maritalStatusCode</span> 
        <span class="attrib">code=</span><mark class="color21"><span class="value">"M"</span></mark> 
        <span class="attrib">displayName=</span><span class="value">"<mark class="color22">Married</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.5.2"</span> 
        <span class="attrib">codeSystemName=</span><span class="value">"MaritalStatus"</span>/&gt;
      &lt;<span class="field">religiousAffiliationCode</span> 
        <span class="attrib">code=</span><span class="value">"<mark class="color23">1013</mark>"</span> 
        <span class="attrib">displayName=</span><span class="value">"<mark class="color24">Christian (non-Catholic, non-specific)</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.5.1076"</span> 
        <span class="attrib">codeSystemName=</span><span class="value">"HL7 Religious Affiliation"</span>/&gt;
      &lt;<span class="field">raceCode</span> 
        <span class="attrib">code=</span><span class="value">"<mark class="color25">2106-3</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color26">2.16.840.1.113883.6.238</mark>"</span> 
        <span class="attrib">displayName=</span><span class="value">"<mark class="color27">White</mark>"</span> /&gt;
      &lt;<span class="field">sdtc:raceCode</span> 
        <span class="attrib">code=</span><span class="value">"<mark class="color28">2108-9</mark>"</span> 
        <span class="attrib">displayName=</span><span class="value">"<mark class="color29">European</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color26">2.16.840.1.113883.6.238</mark>"</span> /&gt;
      &lt;<span class="field">ethnicGroupCode</span> 
        <span class="attrib">code=</span><span class="value">"<mark class="color30">2135-2</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color26">2.16.840.1.113883.6.238</mark>"</span> 
        <span class="attrib">displayName=</span><span class="value">"<mark class="color31">Hispanic or Latino</mark>"</span> /&gt;
      &lt;<span class="field">sdtc:ethnicGroupCode</span> 
        <span class="attrib">code=</span><span class="value">"<mark class="color32"><mark class="color32">20146-9</mark></mark>"</span> 
        <span class="attrib">displayName=</span><span class="value">"<mark class="color33">Spanish Basque</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color26">2.16.840.1.113883.6.238</mark>"</span> /&gt;
      &lt;<span class="field">guardian</span>&gt;
        &lt;<span class="field">code</span> 
          <span class="attrib">code=</span><mark class="color34"><span class="value">"FTH"</span></mark> 
          <span class="attrib">displayName=</span><span class="value">"<mark class="color35">father</mark>"</span> 
          <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.5.111"</span> 
          <span class="attrib">codeSystemName=</span><span class="value">"RoleCode"</span> /&gt;
        &lt;<span class="field">addr</span> <span class="attrib">use=</span><mark class="color11"><span class="value">"H"</span></mark>&gt;
          &lt;<span class="field">streetAddressLine</span>&gt;<mark class="color36">123 main street</mark>&lt;/<span class="field">streetAddressLine</span>&gt;
          &lt;<span class="field">city</span>&gt;<mark class="color13">Beaverton</mark>&lt;/<span class="field">city</span>&gt;
          &lt;<span class="field">state</span>&gt;OR&lt;/<span class="field">state</span>&gt;
          &lt;<span class="field">postalCode</span>&gt;<mark class="color37">97867</mark>&lt;/<span class="field">postalCode</span>&gt;
        &lt;/<span class="field">addr</span>&gt;
        &lt;<span class="field">telecom</span> <span class="attrib">value=</span><span class="value">"tel:<mark class="color38">+1(555)555-2008</mark>"</span> <span class="attrib">use=</span><span class="value">"MC"</span> /&gt;
        &lt;<span class="field">guardianPerson</span>&gt;
          &lt;<span class="field">name</span>&gt;
            &lt;<span class="field">given</span>&gt;<mark class="color39">Boris</mark>&lt;/<span class="field">given</span>&gt;
            &lt;<span class="field">given</span> <span class="attrib">qualifier=</span><span class="value">"CL"</span><mark class="color40">&gt;Bo&lt;</mark>/given&gt;
            &lt;<span class="field">family</span>&gt;<mark class="color41">Betterhalf</mark>&lt;/<span class="field">family</span>&gt;
          &lt;/<span class="field">name</span>&gt;
        &lt;/<span class="field">guardianPerson</span>&gt;
      &lt;/<span class="field">guardian</span>&gt;
      &lt;<span class="field">birthplace</span>&gt;
        &lt;<span class="field">place</span>&gt;
          &lt;<span class="field">addr</span>&gt;
            &lt;<span class="field">streetAddressLine</span>&gt;<mark class="color42">4444 Birth Street</mark>&lt;/<span class="field">streetAddressLine</span>&gt;
            &lt;<span class="field">city</span>&gt;<mark class="color13">Beaverton</mark>&lt;/<span class="field">city</span>&gt;
            &lt;<span class="field">state</span>&gt;OR&lt;/<span class="field">state</span>&gt;
            &lt;<span class="field">postalCode</span>&gt;<mark class="color37">97867</mark>&lt;/<span class="field">postalCode</span>&gt;
          &lt;/<span class="field">addr</span>&gt;
        &lt;/<span class="field">place</span>&gt;
      &lt;/<span class="field">birthplace</span>&gt;
      &lt;<span class="field">languageCommunication</span>&gt;
        &lt;<span class="field">languageCode</span> <span class="attrib">code=</span><mark class="color10"><span class="value">"en"</span></mark> /&gt;
        &lt;<span class="field">modeCode</span> 
          <span class="attrib">code=</span><mark class="color11"><span class="value">"ESP"</span></mark> 
          <span class="attrib">displayName=</span><span class="value">"<mark class="color12">Expressed spoken</mark>"</span> 
          <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.5.60"</span> 
          <span class="attrib">codeSystemName=</span><span class="value">"LanguageAbilityMode"</span>/&gt;
        &lt;<span class="field">proficiencyLevelCode</span> 
          <span class="attrib">code=</span><mark class="color13"><span class="value">"G"</span></mark> 
          <span class="attrib">displayName=</span><span class="value">"<mark class="color14">Good</mark>"</span> 
          <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.5.61"</span> 
          <span class="attrib">codeSystemName=</span><span class="value">"LanguageAbilityProficiency"</span>/&gt;
        &lt;<span class="field">preferenceInd</span> <span class="attrib">value=</span><span class="value">"<mark class="color15">true</mark>"</span> /&gt;
      &lt;/<span class="field">languageCommunication</span>&gt;
    &lt;/<span class="field">patient</span>&gt;
    <span class="comment">&lt;!-- Creates reference: <mark class="color16">Organization/PCPartnersTest</mark> --&gt;</span>
    &lt;<span class="field">providerOrganization</span>&gt;
      &lt;<span class="field">id</span> <span class="attrib">extension=</span><span class="value">"3"</span> <span class="attrib">root=</span><span class="value">"1.3.6.1.4.1.22812.3.2009316.3"</span> /&gt;
      &lt;<span class="field">name</span>&gt;Primary Care's Partners Test&lt;/<span class="field">name</span>&gt;
      &lt;<span class="field">telecom</span> <span class="attrib">use=</span><span class="value">"WP"</span> <span class="attrib">value=</span><span class="value">"tel:+1-(676)857-6769"</span> /&gt;
    &lt;/<span class="field">providerOrganization</span>&gt;
  &lt;/<span class="field">patientRole</span>&gt;
&lt;/<span class="field">recordTarget</span>&gt;</div>
</td><td>
<div id="fhir" class="border codeArea">{
  "<span class="field">resourceType</span>": "<span class="value">Patient</span>",
  "<span class="field">id</span>": "<span class="value">6581e92eb6ff5dadc088eae5</span>",
  "<span class="field">identifier</span>": [{
    "<span class="field">system</span>": "<span class="value">urn:uuid:<mark class="color10">068f3166-5721-4d69-94ed-8278ff035b8a</mark></span>",
    "<span class="field">value</span>": "<span class="value">urn:ietf:rfc:3986</span>"
  }],
  "<span class="field">language</span>": "<span class="value">en-US</span>",
  "<span class="field">extension</span>": [{
    "<span class="field">url</span>": "<span class="value">http://hl7.org/fhir/StructureDefinition/patient-religion</span>",
    "<span class="field">valueCodeableConcept</span>": {
      "<span class="field">coding</span>": [{
        "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/v3-ReligiousAffiliation</span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color23">1013</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color24">Christian (non-Catholic, non-specific)</mark></span>"
      }]
    }
  }, {
    "<span class="field">url</span>": "<span class="value">http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity</span>",
    "<span class="field">extension</span>": [{
      "<span class="field">url</span>": "<span class="value">ombCategory</span>",
      "<span class="field">valueCoding</span>": {
        "<span class="field">system</span>": "<span class="value">urn:oid:<mark class="color26">2.16.840.1.113883.6.238</mark></span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color30">2135-2</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color31">Hispanic or Latino</mark></span>"
      }
    }, {
      "<span class="field">url</span>": "<span class="value">text</span>",
      "<span class="field">valueString</span>": "<span class="value"><mark class="color31">Hispanic or Latino</mark>, <mark class="color33">Spanish Basque</mark></span>"
    }, {
      "<span class="field">url</span>": "<span class="value">detailed</span>",
      "<span class="field">valueCoding</span>": {
        "<span class="field">system</span>": "<span class="value">urn:oid:<mark class="color26">2.16.840.1.113883.6.238</mark></span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color32"><mark class="color32">20146-9</mark></mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color33">Spanish Basque</mark></span>"
      }
    }]
  }, {
    "<span class="field">url</span>": "<span class="value">http://hl7.org/fhir/us/core/StructureDefinition/us-core-race</span>",
    "<span class="field">extension</span>": [{
      "<span class="field">url</span>": "<span class="value">ombCategory</span>",
      "<span class="field">valueCoding</span>": {
        "<span class="field">system</span>": "<span class="value">urn:oid:<mark class="color26">2.16.840.1.113883.6.238</mark></span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color25">2106-3</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color27">White</mark></span>"
      }
    }, {
      "<span class="field">url</span>": "<span class="value">text</span>",
      "<span class="field">valueString</span>": "<span class="value"><mark class="color27">White</mark>, <mark class="color29">European</mark></span>"
    }, {
      "<span class="field">url</span>": "<span class="value">detailed</span>",
      "<span class="field">valueCoding</span>": {
        "<span class="field">system</span>": "<span class="value">urn:oid:<mark class="color26">2.16.840.1.113883.6.238</mark></span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color28">2108-9</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color29">European</mark></span>"
      }
    }]
  },
  {
    "<span class="field">url</span>": "<span class="value">http://hl7.org/fhir/StructureDefinition/patient-birthPlace</span>",
    "<span class="field">valueAddress</span>": {
      "<span class="field">line</span>": ["<mark class="color42">4444 Birth Street</mark>"],
      "<span class="field">city</span>": "<span class="value"><mark class="color13">Beaverton</mark></span>",
      "<span class="field">state</span>": "<span class="value">OR</span>",
      "<span class="field">postalCode</span>": "<span class="value"><mark class="color37">97867</mark></span>"
    }
  }],
  "<span class="field">name</span>": [{
    "<span class="field">text</span>": "<span class="value"><mark class="color16">Myra</mark> <mark class="color17">Jones</mark></span>",
    "<span class="field">use</span>": "<span class="value">usual</span>",
    "<span class="field">family</span>": "<span class="value"><mark class="color17">Jones</mark></span>",
    "<span class="field">given</span>": ["<mark class="color16">Myra</mark>"]
  }],
  "<span class="field">telecom</span>": [{
      "<span class="field">system</span>": "<span class="value">phone</span>",
    "<span class="field">value</span>": "<span class="value"><mark class="color15">+1(565)867-5309</mark></span>",
    "<span class="field">use</span>": "<span class="value">mobile</span>"
  }],
  "<span class="field">gender</span>": "<span class="value"><mark class="color18">female</mark></span>",
  "<span class="field">birthDate</span>": "<span class="value"><mark class="color19">1947-05-01</mark></span>",
  "<span class="field">deceasedBoolean</span>": <mark class="color20">false</mark>,
  "<span class="field">address</span>": [{
    "<span class="field">use</span>": "<span class="value"><mark class="color11">home</mark></span>",
    "<span class="field">text</span>": "<span class="value"><mark class="color12">1357 Amber Drive</mark> <mark class="color13">Beaverton</mark> OR <mark class="color14">97006</mark></span>",
    "<span class="field">line</span>": ["<mark class="color12">1357 Amber Drive</mark>"],
    "<span class="field">city</span>": "<span class="value"><mark class="color13">Beaverton</mark></span>",
    "<span class="field">state</span>": "<span class="value">OR</span>",
    "<span class="field">postalCode</span>": "<span class="value"><mark class="color14">97006</mark></span>"
  }],
  "<span class="field">maritalStatus</span>": {
    "<span class="field">coding</span>": [{
      "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/v3-MaritalStatus</span>",
      "<span class="field">code</span>": <mark class="color21">"M"</mark>,
      "<span class="field">display</span>": "<span class="value"><mark class="color22">Married</mark></span>"
    }]
  },
  "<span class="field">contact</span>": [{
    "<span class="field">relationship</span>": [{
      "<span class="field">coding</span>": [{
        "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/v3-RoleCode</span>",
        "<span class="field">code</span>": "<span class="value">GUARD</span>",
        "<span class="field">display</span>": "<span class="value">Guardian</span>"
      }]
    }, {
      "<span class="field">coding</span>": [{
        "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/v3-RoleCode</span>",
        "<span class="field">code</span>": <mark class="color34">"FTH"</mark>,
        "<span class="field">display</span>": "<span class="value"><mark class="color35">father</mark></span>"
      }]
    }],
    "<span class="field">name</span>": {
      "<span class="field">family</span>": "<span class="value"><mark class="color41">Betterhalf</mark></span>",
      "<span class="field">given</span>": [
        "<mark class="color39">Boris</mark>",
        <mark class="color40">"Bo"</mark>
      ]
    },
    "<span class="field">telecom</span>": [{
      "<span class="field">system</span>": "<span class="value">phone</span>",
      "<span class="field">value</span>": "<span class="value"><mark class="color38">+1(555)555-2008</mark></span>",
      "<span class="field">use</span>": "<span class="value">mobile</span>"
    }],
    "<span class="field">address</span>": {
      "<span class="field">use</span>": "<span class="value"><mark class="color11">home</mark></span>",
      "<span class="field">line</span>": ["<mark class="color36">123 main street</mark>"],
      "<span class="field">city</span>": "<span class="value"><mark class="color13">Beaverton</mark></span>",
      "<span class="field">state</span>": "<span class="value">OR</span>",
      "<span class="field">postalCode</span>": "<span class="value"><mark class="color37">97867</mark></span>"
    }
  }],
  "<span class="field">communication</span>": [{
    "<span class="field">language</span>": {
      "<span class="field">coding</span>": [{
        "<span class="field">system</span>": "<span class="value">urn:ietf:bcp:47</span>",
        "<span class="field">code</span>": <mark class="color10">"en"</mark>,
        "<span class="field">display</span>": "<span class="value">English</span>"
      }]
    },
    "<span class="field">preferred</span>": <mark class="color15">true</mark>,
    "<span class="field">extension</span>": [{
      "<span class="field">url</span>": "<span class="value">http://hl7.org/fhir/StructureDefinition/patient-proficiency</span>",
      "<span class="field">extension</span>": [{
        "<span class="field">url</span>": "<span class="value">level</span>",
        "<span class="field">valueCoding</span>": {
          "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/v3-LanguageAbilityProficiency</span>",
          "<span class="field">code</span>": <mark class="color13">"G"</mark>,
          "<span class="field">display</span>": "<span class="value"><mark class="color14">Good</mark></span>"
        }
      }, {
        "<span class="field">url</span>": "<span class="value">type</span>",
        "<span class="field">valueCoding</span>": {
          "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/v3-LanguageAbilityMode</span>",
          "<span class="field">code</span>": <mark class="color11">"ESP"</mark>,
          "<span class="field">display</span>": "<span class="value"><mark class="color12">Expressed spoken</mark></span>"
        }
      }]
    }]
  }],
  "<span class="field">managingOrganization</span>": {
    "<span class="field">reference</span>": "<span class="value"><mark class="color16">Organization/PCPartnersTest</mark></span>"
  }
}</div>
</td></tr></table>

#### Links to example content

The consensus mapping example developed through multiple vendors are available below:
* [Patient CDA example](./Binary-CF-patient.html)
* [Patient FHIR example](./Patient-CF-patient.html)

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/CF-problems.md

<link rel="stylesheet" href="colors.css">

This page provides a mapping from CDA to FHIR. For the FHIR to CDA mapping, please refer to [Problems FHIR → CDA](./FC-problems.html). For guidance on how to read the table below, see [Reading the C-CDA ↔ FHIR Mapping Pages](./mappingGuidance.html).

This mapping demonstrates how problems in the C-CDA Problems Section would map to FHIR Conditions. Problems in other sections will map similarly, but may map to different profiles (e.g. US Core Encounter Diagnosis) or have different categories (e.g. health-concern).

Note that C-CDA includes a Concern wrapper act from which status may be read; most of the elements are within the dependent Observation entry.
<br />
<br />
### C-CDA to FHIR

|C-CDA¹<br/>[Problem Concern Act](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ProblemConcernAct.html)|FHIR<br/>[Condition and Health Concern](https://hl7.org/fhir/us/core/StructureDefinition-us-core-condition-problems-health-concerns.html)|Transform Steps|
|:----|:----|:----|
|From the parent section, use code@code|.category|[CDA section → FHIR category](ConceptMap-CF-ProblemCategory.html)<br/>**Note:** The section of a Problem Observation affects its FHIR category.|
|/statusCode|.clinicalStatus|/statusCode → .clinicalStatus is to be used only if the C-CDA Problem Status Observation (see below) is missing.<br/>For more information on how status is managed in Problem Concern Act wrapper, refer to [C-CDA guidance, see 5.2.6.1](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=447)<br/> [Concern Status → Condition Clinical Status](ConceptMap-CF-ConditionClinicalStatus.html)
|All of the following are a [Problem observation](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ProblemObservation.html) nested inside the [Problem Concern act](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ProblemConcernAct.html). Each observation should become a distinct FHIR Condition resource. <br/>/entryRelationship[@typeCode="SUBJ"]/observation prefix to rows below²|||
|/@negationInd=true|set .verificationStatus="refuted" or adjust .code for negated concept| 
|/id|.identifier|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
|/code |.category|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/effectiveTime/low|.onsetDateTime|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|/effectiveTime/high|.abatementDateTime|If present (or `high/@nullFlavor=UNK`), the .clinicalStatus must be `inactive`, `remission`, or `resolved`. If C-CDA status fields map to .clinicalStatus of active, relapse, or recurrence, suggest setting .clinicalStatus to inactive for FHIR conformance.<br/>If `high/@nullFlavor=UNK`, populate ._abatementDateTime.extension with [Data Absent Reason](http://hl7.org/fhir/StructureDefinition/data-absent-reason), since in C-CDA, the "UNK" high effectiveTime has been the recommended way to indicate "resolved problem but unknown resolution date."<br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|/value|.code|**Constraint:** When CDA negation is absent or false<br/>[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/author|.recorder<br/>&<br/>**[Provenance](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-procedure.html)**|.recorder should be authoritative (latest) author if there are multiple<br/>[CDA ↔ FHIR Provenance](mappingGuidance.html#cda--fhir-provenance)|
|/author/time|.recordedDate|Earliest, if more than one<br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)
|**[Problem Status](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ProblemStatus.html)**<br/>/entryRelationship/observation[code/@code="33999-4"]/value|.clinicalStatus|[CDA Problem Status Observation value → FHIR clinicalStatus](./ConceptMap-CF-ProblemStatus.html)|
|**[Date of Diagnosis](https://www.hl7.org/ccdasearch/templates/2.16.840.1.113883.10.20.22.4.502.html)**<br/>/entryRelationship/act[code/@code="77975-1"]/effectiveTime|.extension:[assertedDate](http://hl7.org/fhir/StructureDefinition/condition-assertedDate)|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)<br/>See **[US CORE Condition](https://hl7.org/fhir/us/core/StructureDefinition-us-core-condition-problems-health-concerns.html#mandatory-and-must-support-data-elements)** for additional guidance|
|**[Comment Activity](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-CommentActivity.html)**<br/>/entryRelationship/act[code/@code="48767-8"]/text|**[Annotation](https://hl7.org/fhir/datatypes.html#Annotation)**<br/>.note|See [Comment → Annotation](mappingGuidance.html#comment--annotation)|
|**[Age Observation]()**<br/>/entryRelationship[@typeCode="SUBJ" and @inversionInd="true"]/observation[code/@code="445518008"]/value|.onsetAge|**CAUTION:** Only one of `onsetAge` or `onsetDateTime` may be present.<br/>[CDA ↔ FHIR Quantity](mappingGuidance.html#cda--fhir-quantity)
|**Supporting Observations (e.g. [Assessment Scale Observation](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-AssessmentScaleObservation.html))**<br/>/entryRelationship[@typeCode="SPRT"]/observation|.evidence.detail|Create an Observation resource, mapping fields like `id`, `code`, `effectiveTime`, `value` similar to [Results](CF-results.html). If the CDA observation is an SDOH observation, use the [US Core Observation Screening Assessment](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-observation-screening-assessment.html) profile.

1\. XPath abbreviated for C-CDA Problem Concern act as: <br/> ClinicalDocument/component/structuredBody/component/section[code/@code="11450-4"]/entry/act/

2\. XPath abbreviated for C-CDA Problem Observation as: <br/> ClinicalDocument/component/structuredBody/component/section[code/@code="11450-4"]/entry/act/entryRelationship[@typeCode="SUBJ"]/observation/

When authors or other provenance are recorded in the parent [Problem Concern Act](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ProblemConcernAct.html), it is recommended that those data be mapped to the FHIR Condition. 

### Example: Standard Problem

<table><tr><th>CDA Problem Example</th><th>FHIR Condition Resource</th></tr>
<tr><td>
<div id="cda" class="border codeArea">&lt;<span class="field">act</span> <span class="attrib">classCode=</span><span class="value">"ACT"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.3"</span> 
              <span class="attrib">extension=</span><span class="value">"2015-08-01"</span> /&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.3"</span> /&gt;
  &lt;<span class="field">id</span> <span class="attrib">extension=</span><span class="value">"<mark class="color10">545069300001</mark>"</span> <span class="attrib">root=</span><span class="value">"1.3.6.1.4.1.22812.3.2009316.3.4.1"</span> /&gt;
  &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"CONC"</span> <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.5.6"</span> /&gt;
  &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"active"</span> /&gt;
  &lt;<span class="field">effectiveTime</span> &gt;
    &lt;<span class="field">low</span> <span class="attrib">value=</span><span class="value">"<mark class="color11">20120806</mark>"</span> /&gt;
  &lt;/<span class="field">effectiveTime</span>&gt;
  &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"SUBJ"</span>&gt;
    &lt;<span class="field">observation</span> <span class="attrib">classCode=</span><span class="value">"OBS"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.4"</span> 
                  <span class="attrib">extension=</span><span class="value">"2015-08-01"</span> /&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.4"</span> /&gt;
      &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"<mark class="color12">1.3.6.1.4.1.22812.3.2009316.3.4.1.2.1</mark>"</span> 
          <span class="attrib">extension=</span><span class="value">"<mark class="color10">545069300001</mark>"</span>/&gt;
      &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"55607006"</span> <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.6.96"</span>&gt;
        &lt;<span class="field">translation</span> <span class="attrib">nullFlavor=</span><span class="value">"NI"</span> /&gt;
      &lt;/<span class="field">code</span>&gt;
      &lt;<span class="field">text</span>&gt;
        &lt;<span class="field">reference</span> <span class="attrib">value=</span><span class="value">"#_5011447a-e27f-471d-9e1f-541148c5282f"</span> /&gt;
      &lt;/<span class="field">text</span>&gt;
      &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span> /&gt;
      &lt;<span class="field">effectiveTime</span> &gt;
        &lt;<span class="field">low</span> <span class="attrib">value=</span><span class="value">"<mark class="color11">20120806</mark>"</span> /&gt;
      &lt;/<span class="field">effectiveTime</span>&gt;
      &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"CD"</span> 
        <span class="attrib">code=</span><span class="value">"<mark class="color14">233604007</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color13">2.16.840.1.113883.6.96</mark>"</span> 
        <span class="attrib">displayName=</span><span class="value">"<mark class="color15">Pneumonia</mark>"</span>&gt;
        &lt;<span class="field">translation</span> <span class="attrib">code=</span><mark class="color16"><span class="value">"486"</span></mark> <span class="attrib">codeSystem=</span><span class="value">"<mark class="color17">2.16.840.1.113883.6.103</mark>"</span> /&gt;
        &lt;<span class="field">translation</span> <span class="attrib">code=</span><span class="value">"<mark class="color18">J18.9</mark>"</span> <span class="attrib">codeSystem=</span><span class="value">"<mark class="color19">2.16.840.1.113883.6.90</mark>"</span> /&gt;
        &lt;<span class="field">translation</span> <span class="attrib">code=</span><span class="value">"<mark class="color20">87580</mark>"</span> <span class="attrib">codeSystem=</span><span class="value">"<mark class="color21">2.16.840.1.113883.3.247.1.1</mark>"</span> /&gt;
      &lt;/<span class="field">value</span>&gt;
      <span class="comment">&lt;!-- Becomes recorder with reference: <mark class="color26">Practitioner/ProblemAuthor</mark> --&gt;</span>
      &lt;<span class="field">author</span>&gt;
        &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.119"</span>/&gt;
        &lt;<span class="field">time</span> <span class="attrib">value=</span><span class="value">"<mark class="color22">20140104</mark>"</span>/&gt;
        &lt;<span class="field">assignedAuthor</span>&gt;
          &lt;<span class="field">id</span> <span class="attrib">extension=</span><span class="value">"99999999"</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.4.6"</span>/&gt;
          &lt;<span class="field">telecom</span> <span class="attrib">use=</span><span class="value">"WP"</span> <span class="attrib">value=</span><span class="value">"tel:555-555-1002"</span>/&gt;
          &lt;<span class="field">assignedPerson</span>&gt;
            &lt;<span class="field">name</span>&gt;
              &lt;<span class="field">given</span>&gt;Henry&lt;/<span class="field">given</span>&gt;
              &lt;<span class="field">family</span>&gt;SevenObs&lt;/<span class="field">family</span>&gt;
            &lt;/<span class="field">name</span>&gt;
          &lt;/<span class="field">assignedPerson</span>&gt;
        &lt;/<span class="field">assignedAuthor</span>&gt;
      &lt;/<span class="field">author</span>&gt;
      &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"REFR"</span>&gt;
        &lt;<span class="field">observation</span> <span class="attrib">classCode=</span><span class="value">"OBS"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
          &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.6"</span> 
            <span class="attrib">extension=</span><span class="value">"2019-06-20"</span> /&gt;
          &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"33999-4"</span> <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.6.1"</span> /&gt;
          &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span> /&gt;
          &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"CD"</span>
            <span class="attrib">code=</span><span class="value">"<mark class="color23">246455001</mark>"</span>
            <span class="attrib">codeSystem=</span><span class="value">"<mark class="color13">2.16.840.1.113883.6.96</mark>"</span>
            <span class="attrib">displayName=</span><span class="value">"<mark class="color23">Recurrence</mark>"</span> /&gt;
        &lt;/<span class="field">observation</span>&gt;
      &lt;/<span class="field">entryRelationship</span>&gt;
      &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"SUBJ"</span> <span class="attrib">inversionInd=</span><span class="value">"true"</span>&gt;
        &lt;<span class="field">observation</span> <span class="attrib">classCode=</span><span class="value">"OBS"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
          &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.31"</span> /&gt;
          <span class="comment">&lt;!-- Age observation --&gt;</span>
          &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"445518008"</span> 
            <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.6.96"</span> 
            <span class="attrib">displayName=</span><span class="value">"Age At Onset"</span> /&gt;
          &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span> /&gt;
          &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"PQ"</span> <span class="attrib">value=</span><mark class="color24"><span class="value">"65"</span></mark> unit=<mark class="color25"><span class="value">"a"</span></mark> /&gt;
        &lt;/<span class="field">observation</span>&gt;
      &lt;/<span class="field">entryRelationship</span>&gt;
    &lt;/<span class="field">observation</span>&gt;
  &lt;/<span class="field">entryRelationship</span>&gt;
&lt;/<span class="field">act</span>&gt;</div>
</td><td>
<div id="fhir" class="border codeArea">{
  "<span class="field">resourceType</span>": "<span class="value">Condition</span>",
  "<span class="field">id</span>": "<span class="value">6581e92f2d59f701ecc0f914</span>",
  "<span class="field">identifier</span>": [{
    "<span class="field">system</span>": "<span class="value">urn:oid:<mark class="color12">1.3.6.1.4.1.22812.3.2009316.3.4.1.2.1</mark></span>",
    "<span class="field">value</span>": "<span class="value"><mark class="color10">545069300001</mark></span>"
  }],
  "<span class="field">clinicalStatus</span>": {
    "<span class="field">coding</span>": [{
      "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/condition-clinical</span>",
      "<span class="field">code</span>": "<span class="value"><mark class="color23">recurrence</mark></span>",
      "<span class="field">display</span>": "<span class="value"><mark class="color23">recurrence</mark></span>"
    }]
  },
  "<span class="field">category</span>": [{
    "<span class="field">coding</span>": [{
      "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/condition-category</span>",
      "<span class="field">code</span>": "<span class="value">problem-list-item</span>",
      "<span class="field">display</span>": "<span class="value">Problem List Item</span>"
    }]
  }],
  "<span class="field">code</span>": {
    "<span class="field">coding</span>": [
      {
        "<span class="field">system</span>": "<span class="value"><mark class="color13">http://snomed.info/sct</mark></span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color14">233604007</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color15">Pneumonia</mark></span>"
      },
      {
        "<span class="field">system</span>": "<span class="value"><mark class="color17">http://hl7.org/fhir/sid/icd-9-cm</mark></span>",
        "<span class="field">code</span>": <mark class="color16">"486"</mark>,
        "<span class="field">display</span>": "<span class="value"><mark class="color15">Pneumonia</mark>, organism unspecified</span>"
      },
      {
        "<span class="field">system</span>": "<span class="value"><mark class="color19">http://hl7.org/fhir/sid/icd-10-cm</mark></span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color18">J18.9</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color15">Pneumonia</mark>, unspecified organism</span>"
      },
      {
        "<span class="field">system</span>": "<span class="value">urn:oid:<mark class="color21">2.16.840.1.113883.3.247.1.1</mark></span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color20">87580</mark></span>"
      }
    ],
    "<span class="field">text</span>": "<span class="value"><mark class="color15">Pneumonia</mark></span>"
  },
  "<span class="field">subject</span>": {
    "<span class="field">reference</span>": "<span class="value">Patient/6581e92eb6ff5dadc088eae5</span>",
    "<span class="field">display</span>": "<span class="value">Myra Jones</span>"
  },
  "<span class="field">onsetDate</span>": "<span class="value"><mark class="color11">2012-08-06</mark></span>",
  <span class="comment">/* Note only one of onsetDate or onsetAge is allowed */
  </span>"<span class="field">onsetAge</span>": {
    "<span class="field">value</span>": <mark class="color24">65,</mark>
    "<span class="field">unit</span>": "<span class="value">year</span>",
    "<span class="field">code</span>": <mark class="color25">"a"</mark>,
    "<span class="field">system</span>": "<span class="value">http://unitsofmeasure.org</span>"
  },
  "<span class="field">recordedDate</span>": "<span class="value"><mark class="color22">2014-01-04</mark></span>",
  "<span class="field">recorder</span>": {
    "<span class="field">reference</span>": "<span class="value"><mark class="color26">Practitioner/ProblemAuthor</mark></span>"
  }
}</div>
</td></tr></table>

### Example: SDOH Problem 

<table>
<tr><th>CDA SDOH Problem</th><th>FHIR Condition Resource</th></tr>
<tr><td>
<div id="cda" class="border codeArea">&lt;<span class="field">act</span> <span class="attrib">classCode=</span><span class="value">"ACT"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.3"</span> <span class="attrib">extension=</span><span class="value">"2015-08-01"</span> /&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.3"</span> /&gt;
  &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"b46f0fc0-986f-11ee-b9d1-0242ac120002"</span>/&gt;
  &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"CONC"</span> <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.5.6"</span>/&gt;
  &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"<mark class="color10">active</mark>"</span>/&gt;
  &lt;<span class="field">effectiveTime</span>&gt;
    &lt;<span class="field">low</span> <span class="attrib">value=</span><span class="value">"20130101"</span>/&gt;
  &lt;/<span class="field">effectiveTime</span>&gt;
  &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"SUBJ"</span>&gt;
    <span class="comment">&lt;!-- SDOH Problem --&gt;</span>
    &lt;<span class="field">observation</span> <span class="attrib">classCode=</span><span class="value">"OBS"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.4"</span>/&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.4"</span> <span class="attrib">extension=</span><span class="value">"2015-08-01"</span>/&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.4"</span> <span class="attrib">extension=</span><span class="value">"2022-06-01"</span>/&gt;
      &lt;<span class="field">id</span> <span class="attrib">extension=</span><span class="value">"<mark class="color11">68993</mark>"</span> <span class="attrib">root=</span><span class="value">"<mark class="color12">1.2.840.114350.1.13.6289.1.7.2.768076</mark>"</span>/&gt;
      &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"093A5380-00CE-11E6-B4C5-0050568B000B"</span> <span class="attrib">extension=</span><span class="value">"1.1"</span>/&gt;
      &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"55607006"</span> <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.6.96"</span> 
          <span class="attrib">codeSystemName=</span><span class="value">"SNOMED CT"</span> <span class="attrib">displayName=</span><span class="value">"Problem"</span>&gt;
        &lt;<span class="field">originalText</span>&gt;Problem&lt;/<span class="field">originalText</span>&gt;
        &lt;<span class="field">translation</span> <span class="attrib">code=</span><span class="value">"75326-9"</span> <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.6.1"</span> 
            <span class="attrib">codeSystemName=</span><span class="value">"LOINC"</span> <span class="attrib">displayName=</span><span class="value">"Problem"</span>/&gt;
      &lt;/<span class="field">code</span>&gt;
      &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span>/&gt;
      &lt;<span class="field">effectiveTime</span>&gt;
        &lt;<span class="field">low</span> <span class="attrib">value=</span><span class="value">"<mark class="color15">20100909</mark>"</span>/&gt;
      &lt;/<span class="field">effectiveTime</span>&gt;
      &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"CD"</span> 
        <span class="attrib">code=</span><span class="value">"<mark class="color16">445281000124101</mark>"</span> 
        <span class="attrib">displayName=</span><span class="value">"<mark class="color17">Nutrition impaired due to limited access to healthful foods</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color13">2.16.840.1.113883.6.96</mark>"</span> 
        <span class="attrib">codeSystemName=</span><span class="value">"<mark class="color13"><mark class="color13">SNOMED</mark> CT</mark>"</span>&gt;
        &lt;<span class="field">translation</span> <span class="attrib">code=</span><span class="value">"<mark class="color18">Z59.48</mark>"</span> 
          <span class="attrib">codeSystem=</span><span class="value">"<mark class="color19">2.16.840.1.113883.6.90</mark>"</span> 
          <span class="attrib">codeSystemName=</span><span class="value">"<mark class="color19">ICD-10-CM</mark>"</span> 
          <span class="attrib">displayName=</span><span class="value">"<mark class="color20">Other specified lack of adequate food</mark>"</span>/&gt;
      &lt;/<span class="field">value</span>&gt;
      <span class="comment">&lt;!-- Assessment Scale Observation --&gt;</span>
      <span class="comment">&lt;!-- Creates observation referenced by evidence.detail --&gt;</span>
      <span class="comment">&lt;!-- This one: <mark class="color29">#sdoh1</mark> --&gt;</span>
      &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"SPRT"</span>&gt;
        &lt;<span class="field">observation</span> <span class="attrib">classCode=</span><span class="value">"OBS"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
          &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.69"</span>/&gt;
          &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.69"</span>
                      <span class="attrib">extension=</span><span class="value">"2022-06-01"</span>/&gt;
          &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"f4dce790-8328-11db-9fe1-0800200c9a44"</span>/&gt;
          &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"<mark class="color21">88122-7</mark>"</span> 
            <span class="attrib">displayName=</span><span class="value">"(I/We) worried whether (my/our) food would run out..."</span>
            <span class="attrib">codeSystem=</span><span class="value">"<mark class="color14">2.16.840.1.113883.6.1</mark>"</span> 
            <span class="attrib">codeSystemName=</span><span class="value">"<mark class="color14">LOINC</mark>"</span>/&gt;
          &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span>/&gt;
          &lt;<span class="field">effectiveTime</span> <span class="attrib">value=</span><span class="value">"<mark class="color15">20100909</mark>"</span>/&gt;
          &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"CD"</span> 
            <span class="attrib">code=</span><span class="value">"<mark class="color22">LA28397-0</mark>"</span> 
            <span class="attrib">displayName=</span><span class="value">"<mark class="color23">Often true</mark>"</span> 
            <span class="attrib">codeSystem=</span><span class="value">"<mark class="color14">2.16.840.1.113883.6.1</mark>"</span>&gt;
          &lt;/<span class="field">value</span>&gt;
        &lt;/<span class="field">observation</span>&gt;
      &lt;/<span class="field">entryRelationship</span>&gt;
      <span class="comment">&lt;!-- Creates observation referenced by evidence.detail --&gt;</span>
      <span class="comment">&lt;!-- This one: <mark class="color30">#sdoh2</mark> --&gt;</span>
      &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"SPRT"</span>&gt;
        &lt;<span class="field">observation</span> <span class="attrib">classCode=</span><span class="value">"OBS"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
          &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.69"</span>/&gt;
          &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.69"</span> 
                      <span class="attrib">extension=</span><span class="value">"2022-06-01"</span>/&gt;
          &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"0e9c5b7c-9def-11ee-8c90-0242ac120002"</span>/&gt;
          &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"<mark class="color24">88124-3</mark>"</span> 
            <span class="attrib">displayName=</span><span class="value">"<mark class="color25">Food insecurity risk [HVS]</mark>"</span> 
            <span class="attrib">codeSystem=</span><span class="value">"<mark class="color14">2.16.840.1.113883.6.1</mark>"</span> 
            <span class="attrib">codeSystemName=</span><span class="value">"<mark class="color14">LOINC</mark>"</span>/&gt;
          &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span>/&gt;
          &lt;<span class="field">effectiveTime</span> <span class="attrib">value=</span><span class="value">"<mark class="color15">20100909</mark>"</span>/&gt;
          &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"CD"</span> 
            <span class="attrib">code=</span><span class="value">"<mark class="color26">LA19952-3</mark>"</span> 
            <span class="attrib">displayName=</span><span class="value">"<mark class="color27">At risk</mark>"</span> 
            <span class="attrib">codeSystem=</span><span class="value">"<mark class="color14">2.16.840.1.113883.6.1</mark>"</span>/&gt;
        &lt;/<span class="field">observation</span>&gt;
      &lt;/<span class="field">entryRelationship</span>&gt;
      <span class="comment">&lt;!-- Date of Diagnosis Act --&gt;</span>
      &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"COMP"</span>&gt;
        &lt;<span class="field">act</span> <span class="attrib">classCode=</span><span class="value">"ACT"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
          &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.502"</span> 
                      <span class="attrib">extension=</span><span class="value">"2022-06-01"</span>/&gt;
          &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"77975-1"</span> 
            <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.6.1"</span> 
            <span class="attrib">codeSystemName=</span><span class="value">"LOINC"</span> 
            <span class="attrib">displayName=</span><span class="value">"Earliest date of diagnosis"</span>/&gt;
          &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span>/&gt;
          <span class="comment">&lt;!-- SHALL to the year (MAY be more specific) --&gt;</span>
          &lt;<span class="field">effectiveTime</span> <span class="attrib">value=</span><span class="value">"<mark class="color28">20100101</mark>"</span>/&gt;
        &lt;/<span class="field">act</span>&gt;
      &lt;/<span class="field">entryRelationship</span>&gt;
    &lt;/<span class="field">observation</span>&gt;
  &lt;/<span class="field">entryRelationship</span>&gt;
&lt;/<span class="field">act</span>&gt;</div>
</td><td>
<div id="fhir" class="border codeArea">{
  "<span class="field">resourceType</span>": "<span class="value">Condition</span>",
  "<span class="field">language</span>": "<span class="value">en-US</span>",
  "<span class="field">identifier</span>": [{
    "<span class="field">system</span>": "<span class="value">urn:oid:<mark class="color12">1.2.840.114350.1.13.6289.1.7.2.768076</mark></span>",
    "<span class="field">value</span>": "<span class="value"><mark class="color11">68993</mark></span>"
  }],
  "<span class="field">clinicalStatus</span>": {
    "<span class="field">coding</span>": [{
      "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/condition-clinical</span>",
      "<span class="field">code</span>": "<span class="value"><mark class="color10">active</mark></span>",
      "<span class="field">display</span>": "<span class="value"><mark class="color10">active</mark></span>"
    }]
  },
  "<span class="field">category</span>": [{
    "<span class="field">coding</span>": [{
      "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/condition-category</span>",
      "<span class="field">code</span>": "<span class="value">problem-list-item</span>",
      "<span class="field">display</span>": "<span class="value">Problem List Item</span>"
    }]
  }],
  "<span class="field">code</span>": {
    "<span class="field">coding</span>": [{
      "<span class="field">system</span>": "<span class="value"><mark class="color13">http://snomed.info/sct</mark></span>",
      "<span class="field">code</span>": "<span class="value"><mark class="color16">445281000124101</mark></span>",
      "<span class="field">display</span>": "<span class="value"><mark class="color17">Nutrition impaired due to limited access to healthful foods</mark></span>"
    },
    {
      "<span class="field">system</span>": "<span class="value"><mark class="color19">http://hl7.org/fhir/sid/icd-10-cm</mark></span>",
      "<span class="field">code</span>": "<span class="value"><mark class="color18">Z59.48</mark></span>",
      "<span class="field">display</span>": "<span class="value"><mark class="color20">Other specified lack of adequate food</mark></span>"
    }
  ]},
  "<span class="field">subject</span>": {
    "<span class="field">reference</span>": "<span class="value">Patient/6581e92eb6ff5dadc088eae5</span>"
  },
  "<span class="field">onsetDateTime</span>": "<span class="value"><mark class="color15">2010-09-09</mark></span>",
  "<span class="field">extension</span>": [{
    "<span class="field">url</span>": "<span class="value">http://hl7.org/fhir/StructureDefinition/condition-assertedDate</span>",
    "<span class="field">valueDateTime</span>": "<span class="value"><mark class="color28">2010-01-01</mark></span>"
  }],
  "<span class="field">evidence</span>": [{
    "<span class="field">detail</span>": [{
      "<span class="field">reference</span>": "<span class="value"><mark class="color29">#sdoh1</mark></span>"
    }, {
      "<span class="field">reference</span>": "<span class="value"><mark class="color30">#sdoh2</mark></span>"
    }]
  }],
  "<span class="field">contained</span>": [{
    "<span class="field">resourceType</span>": "<span class="value">Observation</span>",
    "<span class="field">id</span>": "<span class="value">sdoh1</span>",
    "<span class="field">status</span>": "<span class="value">final</span>",
    "<span class="field">category</span>": [{
      "<span class="field">coding</span>": [{
        "<span class="field">code</span>": "<span class="value">survey</span>",
        "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/observation-category</span>"
      }]
    }],
    "<span class="field">code</span>": {
      "<span class="field">coding</span>": [{
        "<span class="field">value</span>": "<span class="value"><mark class="color21">88122-7</mark></span>",
        "<span class="field">system</span>": "<span class="value"><mark class="color14">http://loinc.org</mark></span>"
      }]
    },
    "<span class="field">subject</span>": { "reference": "<span class="value">Patient/6581e92eb6ff5dadc088eae5</span>" },
    "<span class="field">effectiveDateTime</span>": "<span class="value"><mark class="color15">2010-09-09</mark></span>",
    "<span class="field">valueCodeableConcept</span>": {
      "<span class="field">coding</span>": [{
        "<span class="field">code</span>": "<span class="value"><mark class="color22">LA28397-0</mark></span>",
        "<span class="field">system</span>": "<span class="value"><mark class="color14">http://loinc.org</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color23">Often true</mark></span>"
      }]
    }
  }, {
    "<span class="field">resourceType</span>": "<span class="value">Observation</span>",
    "<span class="field">id</span>": "<span class="value">sdoh2</span>",
    "<span class="field">status</span>": "<span class="value">final</span>",
    "<span class="field">category</span>": [{
      "<span class="field">coding</span>": [{
        "<span class="field">code</span>": "<span class="value">survey</span>",
        "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/observation-category</span>"
      }]
    }],
    "<span class="field">code</span>": {
      "<span class="field">coding</span>": [{
        "<span class="field">value</span>": "<span class="value"><mark class="color24">88124-3</mark></span>",
        "<span class="field">system</span>": "<span class="value"><mark class="color14">http://loinc.org</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color25">Food insecurity risk [HVS]</mark></span>"
      }]
    },
    "<span class="field">subject</span>": { "reference": "<span class="value">Patient/6581e92eb6ff5dadc088eae5</span>" },
    "<span class="field">effectiveDateTime</span>": "<span class="value"><mark class="color15">2010-09-09</mark></span>",
    "<span class="field">valueCodeableConcept</span>": {
      "<span class="field">coding</span>": [{
        "<span class="field">code</span>": "<span class="value"><mark class="color26">LA19952-3</mark></span>",
        "<span class="field">system</span>": "<span class="value"><mark class="color14">http://loinc.org</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color27">At risk</mark></span>"
      }]
    }
  }]
}</div>
</td></tr></table>

#### Links to example content

The consensus mapping example developed through multiple vendors are available below:
* [Problem CDA example](./Binary-CF-problem.html)
* [Condition FHIR example](./Condition-CF-problem.html)

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/CF-procedures.md

<link rel="stylesheet" href="colors.css">

This page provides a mapping from CDA to FHIR. For the FHIR to CDA mapping, please refer to [Procedures FHIR → CDA](./FC-procedures.html). For guidance on how to read the table below, see [Reading the C-CDA ↔ FHIR Mapping Pages](./mappingGuidance.html)
<br/><br/>
#### Note on template selection
C-CDA 2.1 describes three templates for Procedures: Procedure Activity Act, Procedure Activity Observation, and Procedure Activity Procedure. Procedure Activity Procedure is the most complete, containing everything the other two contain except Observation.value, and several properties not contained by the others. The [C-CDA 2.1 Companion Guide](https://www.hl7.org/ccdasearch/pdfs/Companion_Guide.pdf) points out that "most vendors successfully and exclusively use the . . . Procedure Activity Procedure," and it then specifies this template for "all interventional, non-interventional, surgical, diagnostic, or therapeutic procedures or treatments pertinent to the patient historically at the time the document is generated." For this reason, we have only provided a mapping from Procedure Activity Procedure. Procedure Activity Act can use the same mapping to a FHIR Procedure resource because it contains a subset of the fields available in Procedure Activity Procedure. Procedure Activity Observation can be mapped to either a Procedure resource or to an Observation resource using the [results](CF-results.html) mapping (or a combination of the two).

<br />
<br />
### C-CDA to FHIR

|C-CDA¹<br/>[Procedure Activity procedure](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ProcedureActivityProcedure.html)|FHIR<br/>[Procedure](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-procedure.html)|Transform Steps|
|:----|:----|:----|
|/@negationInd="true"|set status="not-done"||
|/id|.identifier|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
|/code|.code|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/statusCode|.status|[CDA statusCode → FHIR status](./ConceptMap-CF-ProcedureStatus.html)|
|/effectiveTime|.performedDateTime|**Constraint**: Use this when effectiveTime@value is populated<br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates) <br/> If no effectiveTime content is provided, put the FHIR [`data-absent-reason`] (https://hl7.org/fhir/R4/extension-data-absent-reason.html) extension on the performedDateTime element.|
|/effectiveTime/low|.performedPeriod.start|**Constraint**: Use this when effectiveTime@value is not populated<br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)
|/effectiveTime/high|.performedPeriod.end|**Constraint**: Use this when effectiveTime@value is not populated<br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)
|/targetSiteCode|.bodySite|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/author|.recorder<br/>&<br/>**[Provenance](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-procedure.html)**|<br/>[CDA ↔ FHIR Provenance](mappingGuidance.html#cda--fhir-provenance) <br/>If a latest author can be identified, map to .recorder.<br/>Any author with a time can be put in Provenance.|
|/performer/assignedEntity|.performer.actor|May map to Practitioner, PractitionerRole, or Organization<br/>onBehalfOf should not be used when actor is a Practitioner or PractitionerRole |
|**[Service Delivery Location](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ServiceDeliveryLocation.html)**<br/>/participant[@typeCode="LOC"]/participantRole|.location||
|**[Indication](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-Indication.html)**<br/>/entryRelationship[@typeCode="RSON"]/observation/value|.reasonCode|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|**[Comment Activity](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-CommentActivity.html)**<br/>/entryRelationship/act[code/@code="48767-8"]/text|**[Annotation](https://hl7.org/fhir/datatypes.html#Annotation)**<br/>.note|See [Comment → Annotation](mappingGuidance.html#comment--annotation)|

1\. XPath abbrievated for C-CDA Procedure as: <br/> ClinicalDocument/component/structuredBody/component/section[code/@code="47519-4"]/entry/procedure

### Example

<table><tr><th>CDA Procedure Example</th><th>FHIR Procedure Resource</th></tr>
<tr><td>
<div id="cda" class="border codeArea">&lt;<span class="field">procedure</span> <span class="attrib">classCode=</span><span class="value">"PROC"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.14"</span> <span class="attrib">extension=</span><span class="value">"2014-06-09"</span> /&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.14"</span> /&gt;
  &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"<mark class="color10">1.3.6.1.4.1.22812.3.2009316.3.4.7</mark>"</span> <span class="attrib">extension=</span><span class="value">"<mark class="color11">545069400001</mark>"</span> /&gt;
  &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"<mark class="color10">1.3.6.1.4.1.22812.3.2009316.3.4.7</mark>"</span> <span class="attrib">extension=</span><span class="value">"<mark class="color12">545069400003</mark>"</span> /&gt;
  &lt;<span class="field">code</span> 
    <span class="attrib">code=</span><span class="value">"<mark class="color13">80146002</mark>"</span> 
    <span class="attrib">codeSystem=</span><span class="value">"<mark class="color14">2.16.840.1.113883.6.96</mark>"</span> 
    <span class="attrib">displayName=</span><span class="value">"<mark class="color15">Excision of appendix</mark>"</span>&gt;
    &lt;<span class="field">originalText</span>&gt;
      &lt;<span class="field">reference</span> <span class="attrib">value=</span><span class="value">"#_dfcf353c-538f-498a-9a53-80dda209e456"</span> /&gt;
    &lt;/<span class="field">originalText</span>&gt;
    &lt;<span class="field">translation</span> 
      <span class="attrib">code=</span><span class="value">"<mark class="color16">0DBJ4ZZ</mark>"</span> 
      <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.6.90"</span> 
      <span class="attrib">displayName=</span><span class="value">"<mark class="color17">Excision of appendix, Percutaneous Endoscopic Approach</mark>"</span>/&gt;
  &lt;/<span class="field">code</span>&gt;
  &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"<mark class="color18">completed</mark>"</span> /&gt;
  &lt;<span class="field">effectiveTime</span> <span class="attrib">value=</span><span class="value">"<mark class="color19">20120806</mark>"</span>/&gt;
&lt;/<span class="field">procedure</span>&gt;</div>
</td><td>
<div id="fhir" class="border codeArea">{
  "<span class="field">resourceType</span>" : "<span class="value">Procedure</span>",
  "<span class="field">identifier</span>" : [{
    "<span class="field">system</span>" : "<span class="value">urn:oid:<mark class="color10">1.3.6.1.4.1.22812.3.2009316.3.4.7</mark></span>",
    "<span class="field">value</span>" : "<span class="value"><mark class="color11">545069400001</mark></span>"
  },
  {
    "<span class="field">system</span>" : "<span class="value">urn:oid:<mark class="color10">1.3.6.1.4.1.22812.3.2009316.3.4.7</mark></span>",
    "<span class="field">value</span>" : "<span class="value"><mark class="color12">545069400003</mark></span>"
  }],
  "<span class="field">status</span>" : "<span class="value"><mark class="color18">completed</mark></span>",
  "<span class="field">code</span>" : {
    "<span class="field">coding</span>" : [{
      "<span class="field">system</span>" : "<span class="value"><mark class="color14">http://snomed.info/sct</mark></span>",
      "<span class="field">code</span>" : "<span class="value"><mark class="color13">80146002</mark></span>",
      "<span class="field">display</span>" : "<span class="value"><mark class="color15">Excision of appendix</mark></span>"
    },
    {
      "<span class="field">system</span>" : "<span class="value">http://www.cms.gov/Medicare/Coding/ICD10</span>",
      "<span class="field">code</span>" : "<span class="value"><mark class="color16">0DBJ4ZZ</mark></span>",
      "<span class="field">display</span>" : "<span class="value"><mark class="color17">Excision of appendix, Percutaneous Endoscopic Approach</mark></span>"
    }],
    "<span class="field">text</span>" : "<span class="value"><mark class="color15">Excision of appendix</mark></span>"
  },
  "<span class="field">subject</span>" : {
    "<span class="field">reference</span>" : "<span class="value">Patient/CF-patient</span>"
  },
  "<span class="field">performedDateTime</span>" : "<span class="value"><mark class="color19">2012-08-06</mark></span>"
}</div>
</td></tr></table>

#### Links to example content

The consensus mapping example developed through multiple vendors are available below:
* [Procedure CDA example](./Binary-CF-procedure.html)
* [Procedure FHIR example](./Procedure-CF-procedure.html)

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/CF-results.md

<link rel="stylesheet" href="colors.css">

This page provides a mapping from CDA to FHIR. <!-- For the FHIR to CDA mapping, please refer to [Results FHIR → CDA](./FC-results.html). --> For guidance on how to read the table below, see [Reading the C-CDA ↔ FHIR Mapping Pages](./mappingGuidance.html).

Results in C-CDA are collected into `<organizer>` elements containing one or more result `<observation>` element. This corresponds to one FHIR DiagnosticReport for the `<organizer>` which multiple `.result` references to FHIR Observation resources, one for each CDA `<observation>`.

Observation values are generic - they can be of any CDA type in CDA, and *almost* any DataType in FHIR. In CDA, the type is represented by the `xsi:type` attribute on the `<value>` element. In FHIR, the type is represented by the `.value[x]` element; the `[x]` represents a choice among data types, so `.valueQuantity` represents a quantity data type, `.valueInteger` represents a numeric whole number, etc. Not every CDA type is a 1:1 match for a FHIR type, but significant differences have been included in the tables below.

### C-CDA Organizer to FHIR Diagnostic Report

|C-CDA¹<br/>[Result Organizer](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ResultOrganizer.html)|FHIR<br/>Diagnostic Report ([Lab](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-diagnosticreport-lab.html)) ([Reports](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-diagnosticreport-note.html))|Transform Steps|
|:----|:----|:----|
|/id|.identifier|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
|/code|.code<br/>&amp;<br/>.category|Map to code using [CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept).<br/>Category (and target FHIR Profile) may be identified by looking up a LOINC code's CLASSTYPE (see process in next table).<br/>Alternatively, an extension for `<sdtc:category>` is being developed for CDA Organizer which, if present, will map directly to this field.
|/statusCode|.status|[CDA Result Status → FHIR Report Status](./ConceptMap-CF-ResultReportStatus.html)
|/effectiveTime|.effectiveDateTime<br/>or<br/>.effectivePeriod|If low and high are identical, use effectiveDateTime. If organizer/effectiveTime is missing, use the earliest and latest observation/effectiveTime as the source of the mapping.<br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)
|/specimen|.specimen|[See below](#c-cda-specimen-to-fhir-specimen)
|/author|**[Provenance](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-provenance.html)**|[CDA ↔ FHIR Provenance](mappingGuidance.html#cda--fhir-provenance)|
|**[Result Observation](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ResultObservation.html)**<br/>/component/observation|.result|See following table
|**[Specimen Collection Procedure](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-SpecimenCollectionProcedure.html)**<br/>/component/procedure[code/@code=17636008]|.specimen|[See below](#c-cda-specimen-to-fhir-specimen)

### C-CDA Observation to FHIR Observation

|C-CDA¹<br/>[Result Observation](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ResultObservation.html)|FHIR<br/>[Lab Result Observation](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-observation-lab.html)|Transform Steps|
|:----|:----|:----|
|/id|.identifier|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
||.category|If the code is LOINC, the category can be inferred from the LOINC code CLASSTYPE. Query a FHIR server via `{endpoint}CodeSystem/$lookup?system=http://loinc.org&code={code}&&property=CLASSTYPE` and set the category according to the CLASSTYPE property:<br/>1=Laboratory class (laboratory); 2=Clinical class (clinical-test); 3=Claims attachments (not mapped); 4=Surveys (survey)
|/code |.code|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/statusCode|.status|[CDA Result Status → FHIR Observation Status](./ConceptMap-CF-ResultStatus.html)
|/effectiveTime|.effectiveDateTime<br/>or<br/>.effectivePeriod|Prefer effectiveDateTime<br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)
|/value[xsi:type=PQ]|.valueQuantity|[CDA ↔ FHIR Quantity](mappingGuidance.html#cda--fhir-quantity)
|/value[xsi:type=IVL_PQ]|.valueQuantity<br/>or<br/>.valueRange|[Ranges of Physical Quantities](mappingGuidance.html#ranges-of-physical-quantities)
|/value[xsi:type=CD]<br/>(or CE, CV, CO, CS)|.valueCodeableConcept|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/value[xsi:type=INT]|.valueInteger|
|/value[xsi:type=REAL]|.valueQuantity|Leave unit fields empty
|/value[xsi:type=ST]|.valueString|
|/interpretationCode|.interpretation|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/methodCode|.method|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/targetSiteCode|.bodySite|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/specimen|.specimen|[See below](#c-cda-specimen-to-fhir-specimen)
|/author|**[Provenance](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-provenance.html)**|[CDA ↔ FHIR Provenance](mappingGuidance.html#cda--fhir-provenance)|
|/referenceRange/observationRange/interpretationCode|**Not Supported**|FHIR expects reference ranges to be "normal" ranges. If C-CDA includes multiple reference ranges, only map the one with interpretationCode = `"N"`.
|/referenceRange/observationRange/value[xsi:type=IVL_PQ]|.referenceRange.low<br/>&<br/>.referenceRange.high|
|/referenceRange/observationRange/value[xsi:type=ST]<br/>or<br/>/referenceRange/observationRange/text|.referenceRange.text|

### C-CDA Specimen to FHIR Specimen

The CDA [Specimen](https://hl7.org/cda/stds/core/2.0.0-sd/StructureDefinition-Specimen.html) class may be present on either a Result Organizer or a Result Observation. If present on the organizer, the FHIR Specimen resource can be attached to the DiagnosticReport as well as each of the child Observation resources. If present only on a C-CDA Results Observation, it should only be attached at the FHIR Observation level.

C-CDA also defines a [Specimen Collection Procedure](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-SpecimenCollectionProcedure.html) which can be present in the Result Organizer. The information in this procedure can be combined with information from the Specimen class and attached to the FHIR DiagnosticReport and Observation resources.

|CDA<br/>[Specimen](https://hl7.org/cda/stds/core/2.0.0-sd/StructureDefinition-Specimen.html)|FHIR<br/>[Specimen](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-specimen.html)|Transform Steps|
|:----|:----|:----|
|/specimenRole/id|.identifier<br/>or<br/>.accessionIdentifier|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
|/specimenRole/specimenPlayingEntity/code|.type|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/specimenRole/specimenPlayingEntity/name|.type.text|If there is no `<code>`. If code already exists, name may also go in `.note`
|/specimenRole/specimenPlayingEntity/quantity|.collection.quantity|[CDA ↔ FHIR Quantity](mappingGuidance.html#cda--fhir-quantity)|
|/specimenRole/specimenPlayingEntity/desc|.note|
|**C-CDA [Specimen Collection Procedure](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-SpecimenCollectionProcedure.html)**<br/>/targetSiteCode|.collection.bodySite|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|**C-CDA [Specimen Condtion Observation](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-SpecimenConditionObservation.html)**<br/>/value|.condition|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|

### Example

<table><tr><th>CDA Result Example</th><th>FHIR DiagnosticReport and Observation Resources</th></tr>
<tr><td>
<div id="cda" class="border codeArea">&lt;<span class="field">organizer</span> <span class="attrib">classCode=</span><span class="value">"BATTERY"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.1"</span> <span class="attrib">extension=</span><span class="value">"2015-08-01"</span>/&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.1"</span>/&gt;
  &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"<mark class="color10">1.3.6.1.4.1.22812.20.1.1.4.5</mark>"</span> <span class="attrib">extension=</span><span class="value">"<mark class="color11">R123</mark>"</span>/&gt;
  &lt;<span class="field">code</span> 
    <span class="attrib">code=</span><span class="value">"<mark class="color12">24357-6</mark>"</span> 
    <span class="attrib">codeSystem=</span><span class="value">"<mark class="color13">2.16.840.1.113883.6.1</mark>"</span>&gt;
    &lt;<span class="field">originalText</span>&gt;
      <span class="comment">&lt;!-- Resolves to: <mark class="color22">Urinanalysis macro (dipstick) panel</mark> --&gt;</span>
      &lt;<span class="field">reference</span> <span class="attrib">value=</span><span class="value">"#_panel1Name"</span>/&gt;
    &lt;/<span class="field">originalText</span>&gt;
  &lt;/<span class="field">code</span>&gt;
  &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span>/&gt;
  &lt;<span class="field">effectiveTime</span> <span class="attrib">xsi:type=</span><span class="value">"IVL_TS"</span>&gt;
    &lt;<span class="field">low</span> <span class="attrib">value=</span><span class="value">"<mark class="color14">20150622</mark>"</span>/&gt;
    &lt;<span class="field">high</span> <span class="attrib">value=</span><span class="value">"<mark class="color14">20150622</mark>"</span>/&gt;
  &lt;/<span class="field">effectiveTime</span>&gt;
  <span class="comment">&lt;!-- Becomes a FHIR reference: <mark class="color23">Practitioner/62f17e2ae0231200076884d0</mark> --&gt;</span>
  &lt;<span class="field">performer</span> <span class="attrib">typeCode=</span><span class="value">"PRF"</span>&gt;
    &lt;<span class="field">assignedEntity</span>&gt;
      &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.19.5"</span>/&gt;
      &lt;<span class="field">representedOrganization</span>&gt;
        &lt;<span class="field">name</span>&gt;Value Labs&lt;/<span class="field">name</span>&gt;
      &lt;/<span class="field">representedOrganization</span>&gt;
    &lt;/<span class="field">assignedEntity</span>&gt;
  &lt;/<span class="field">performer</span>&gt;
  <span class="comment">&lt;!-- components removed to simplify example --&gt;</span>
  &lt;<span class="field">component</span>&gt;
    &lt;<span class="field">observation</span> <span class="attrib">classCode=</span><span class="value">"OBS"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.2"</span> 
        <span class="attrib">extension=</span><span class="value">"2015-08-01"</span>/&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.2"</span>/&gt;
      &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"<mark class="color10">1.3.6.1.4.1.22812.20.1.1.4.5</mark>"</span> <span class="attrib">extension=</span><span class="value">"<mark class="color15">OBS13</mark>"</span>/&gt;
      &lt;<span class="field">code</span> 
        <span class="attrib">code=</span><span class="value">"<mark class="color16">5811-5</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color13">2.16.840.1.113883.6.1</mark>"</span> 
        <span class="attrib">displayName=</span><span class="value">"<mark class="color17">Specific gravity of Urine by Test strip</mark>"</span>&gt;
        &lt;<span class="field">originalText</span>&gt;
          <span class="comment">&lt;!-- reference the text of the coded component --&gt;</span>
          &lt;<span class="field">reference</span> <span class="attrib">value=</span><span class="value">"#_ea838e08-d5eb-4ed4-a176-e5f9a831a780"</span>/&gt;
        &lt;/<span class="field">originalText</span>&gt;
      &lt;/<span class="field">code</span>&gt;
      &lt;<span class="field">text</span>&gt;
        <span class="comment">&lt;!-- reference the entire text of the component --&gt;</span>
        &lt;<span class="field">reference</span> <span class="attrib">value=</span><span class="value">"#_13a52df8-79ed-4689-a9da-14c5905de830"</span>/&gt;
      &lt;/<span class="field">text</span>&gt;
      &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span>/&gt;
      &lt;<span class="field">effectiveTime</span> <span class="attrib">value=</span><span class="value">"<mark class="color14">20150622</mark>"</span>/&gt;
      &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"PQ"</span> <span class="attrib">value=</span><span class="value">"<mark class="color18">1.015</mark>"</span> <span class="attrib">unit=</span><mark class="color19"><span class="value">"1"</span></mark>/&gt;
      &lt;<span class="field">referenceRange</span>&gt;
        &lt;<span class="field">observationRange</span>&gt;
          &lt;<span class="field">text</span>&gt;
            <span class="comment">&lt;!-- reference the text of the reference range --&gt;</span>
            &lt;<span class="field">reference</span> <span class="attrib">value=</span><span class="value">"#_08b7d0ee-aff1-4144-a3a5-c89d56d855ad"</span>/&gt;
          &lt;/<span class="field">text</span>&gt;
          &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"IVL_PQ"</span>&gt;
            &lt;<span class="field">low</span> <span class="attrib">value=</span><span class="value">"<mark class="color20">1.005</mark>"</span> <span class="attrib">unit=</span><mark class="color19"><span class="value">"1"</span></mark>/&gt;
            <span class="comment">&lt;!-- Note this will create a precision extension with 
          url: <mark class="color24">http://hl7.org/fhir/StructureDefinition/quantity-precision</mark> --&gt;</span>
            &lt;<span class="field">high</span> <span class="attrib">value=</span><span class="value">"<mark class="color21">1.030</mark>"</span> <span class="attrib">unit=</span><mark class="color19"><span class="value">"1"</span></mark>/&gt;
          &lt;/<span class="field">value</span>&gt;
        &lt;/<span class="field">observationRange</span>&gt;
      &lt;/<span class="field">referenceRange</span>&gt;
    &lt;/<span class="field">observation</span>&gt;
  &lt;/<span class="field">component</span>&gt;
  <span class="comment">&lt;!-- components removed to simplify example --&gt;</span>
&lt;/<span class="field">organizer</span>&gt;</div>
</td><td>
<b>Note:</b> The following shows a DiagnosticReport resource with an Observation resource embedded in its contained property. This was done for ease of creating a single, visual, highlighted example, but implementers may choose to create separate, external resources according to their own policy.
<br/>

<div id="fhir" class="border codeArea">{
  "<span class="field">resourceType</span>": "<span class="value">DiagnosticReport</span>",
  "<span class="field">id</span>": "<span class="value">62f17e2aa2392d0008fbb236</span>",
  "<span class="field">identifier</span>": [{
    "<span class="field">value</span>": "<span class="value"><mark class="color11">R123</mark></span>",
    "<span class="field">system</span>": "<span class="value">urn:oid:<mark class="color10">1.3.6.1.4.1.22812.20.1.1.4.5</mark></span>"
  }],
  "<span class="field">status</span>": "<span class="value">final</span>",
  "<span class="field">category</span>": [{
    "<span class="field">coding</span>": [{
      "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/v2-0074</span>",
      "<span class="field">code</span>": "<span class="value">LAB</span>",
      "<span class="field">display</span>": "<span class="value">Laboratory</span>"
    }]
  }],
  "<span class="field">code</span>": {
    "<span class="field">coding</span>": [{
      "<span class="field">system</span>": "<span class="value"><mark class="color13">http://loinc.org</mark></span>",
      "<span class="field">code</span>": "<span class="value"><mark class="color12">24357-6</mark></span>"
    }],
    "<span class="field">text</span>": "<span class="value"><mark class="color22">Urinanalysis macro (dipstick) panel</mark></span>"
  },
  "<span class="field">subject</span>": {
    "<span class="field">reference</span>": "<span class="value">Patient/62f17e29b7532c0009e217b7</span>"
  },
  "<span class="field">effectiveDateTime</span>": "<span class="value"><mark class="color14">2015-06-22</mark></span>",
  "<span class="field">issued</span>": {
    "<span class="field">extension</span>": [{
      "<span class="field">url</span>": "<span class="value">http://hl7.org/fhir/extension-data-absent-reason</span>",
      "<span class="field">valueCode</span>": "<span class="value">unknown</span>"
    }]
  },
  "<span class="field">performer</span>": [{
    "<span class="field">reference</span>": "<span class="value"><mark class="color23">Practitioner/62f17e2ae0231200076884d0</mark></span>"
  }],
  "<span class="field">result</span>": [{
    "<span class="field">reference</span>": "<span class="value">#exampleObs</span>"
  }],
  "<span class="field">contained</span>": [{
    "<span class="field">resourceType</span>": "<span class="value">Observation</span>",
    "<span class="field">id</span>": "<span class="value">exampleObs</span>",
    "<span class="field">identifier</span>": [{
      "<span class="field">system</span>": "<span class="value">urn:oid:<mark class="color10">1.3.6.1.4.1.22812.20.1.1.4.5</mark></span>",
      "<span class="field">value</span>": "<span class="value"><mark class="color15">OBS13</mark></span>"
    }],
    "<span class="field">status</span>": "<span class="value">final</span>",
    "<span class="field">category</span>": [{
      "<span class="field">coding</span>": [{
        "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/observation-category</span>",
        "<span class="field">code</span>": "<span class="value">laboratory</span>",
        "<span class="field">display</span>": "<span class="value">Laboratory</span>"
      }]
    }],
    "<span class="field">code</span>": {
      "<span class="field">coding</span>": [{
        "<span class="field">system</span>": "<span class="value"><mark class="color13">http://loinc.org</mark></span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color16">5811-5</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color17">Specific gravity of Urine by Test strip</mark></span>"
      }],
      "<span class="field">text</span>": "<span class="value"><mark class="color17">Specific gravity of Urine by Test strip</mark></span>"
    },
    "<span class="field">subject</span>": {
      "<span class="field">reference</span>": "<span class="value">Patient/62f17e29b7532c0009e217b7</span>"
    },
    "<span class="field">effectiveDateTime</span>": "<span class="value"><mark class="color14">2015-06-22</mark></span>",
    "<span class="field">valueQuantity</span>": {
      "<span class="field">value</span>": <mark class="color18">1.015</mark>,
      "<span class="field">unit</span>": <mark class="color19">"1"</mark>
    },
    "<span class="field">referenceRange</span>": [{
      "<span class="field">low</span>": {
        "<span class="field">value</span>": <mark class="color20">1.005</mark>,
        "<span class="field">unit</span>": <mark class="color19">"1"</mark>
      },
      "<span class="field">high</span>": {
        "<span class="field">value</span>": <mark class="color21">1.03</mark>,
        "<span class="field">unit</span>": <mark class="color19">"1"</mark>,
        "<span class="field">_value</span>": {
          "<span class="field">extension</span>": [{
            "<span class="field">url</span>": "<span class="value"><mark class="color24">http://hl7.org/fhir/StructureDefinition/quantity-precision</mark></span>",
            "<span class="field">valueInteger</span>": 3
          }]
        }
      }
    }]
  }]
}</div>
</td></tr></table>



---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/CF-social.md

<link rel="stylesheet" href="colors.css">

This page provides a mapping from CDA to FHIR. <!-- For the FHIR to CDA mapping, please refer to [Results FHIR → CDA](./FC-results.html). --> For guidance on how to read the table below, see [Reading the C-CDA ↔ FHIR Mapping Pages](./mappingGuidance.html).

Social History is a category of several templates in C-CDA and several profiles in US Core. At a high-level, mappings between CDA `<observation>` acts and FHIR Observation resources are similar and are represented by the top table. Differences are documented on the proceeding tables.

Note that some observations in C-CDA map to extensions on the patient or elsewhere in FHIR. In these cases, a FHIR Observation should not be created; instead, the corresponding extension should be used.

- [C-CDA Birth Sex Observation](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-BirthSexObservation.html) ↔ [US Core Birth Sex Extension](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-birthsex.html)
- [C-CDA Gender Identity Observation](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-GenderIdentityObservation.html) ↔ [US Core Gender Identity Extension](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-genderIdentity.html)
- [C-CDA Sex Observation](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-SexObservation.html) ↔ [US Core Sex Extension](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-sex.html)
- [C-CDA Tribal Affiliation Observation](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-TribalAffiliationObservation.html) ↔ [US Core Tribal Affiliation Extension](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-tribal-affiliation.html)

### C-CDA Social History Observation to FHIR Observation
This maps to US Core version 6's Simple Observation. Previous versions of US Core did not define a generic observation, but the following guidance can still be used to create a generic FHIR observation regardless of the version of US Core being targeted.

|C-CDA<br/>[Social History Observation](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-SocialHistoryObservation.html)|FHIR<br/>[Simple Observation](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-simple-observation.html)|Transform Steps|
|:----|:----|:----|
|/id|.identifier|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
||.category|Set to `social-history` from [Observation Category Codes](https://build.fhir.org/ig/HL7/UTG/CodeSystem-observation-category.html)<br/>Additional SDOH categories may be set as well, depending on the code of the observation. 
|/code |.code|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/statusCode|.status|[CDA Result Status → FHIR Observation Status](./ConceptMap-CF-ResultStatus.html)
|/effectiveTime|.effectiveDateTime<br/>or<br/>.effectivePeriod|Prefer effectiveDateTime<br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)
|/value[xsi:type=PQ]|.valueQuantity|[CDA ↔ FHIR Quantity](mappingGuidance.html#cda--fhir-quantity)
|/value[xsi:type=IVL_PQ]|.valueQuantity<br/>or<br/>.valueRange|[Ranges of Physical Quantities](mappingGuidance.html#ranges-of-physical-quantities)
|/value[xsi:type=CD]<br/>(or CE, CV, CO, CS)|.valueCodeableConcept|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/value[xsi:type=INT]|.valueInteger|
|/value[xsi:type=REAL]|.valueQuantity|Leave unit fields empty
|/value[xsi:type=ST]|.valueString|

Additional fields, such as `.interpretationCode`, `.referenceRange`, `.performer` are not documented in C-CDA but can be mapped in the same manner as [Results](./CF-results.html).

### C-CDA Smoking Status / Tobacco Use to FHIR Observation
In C-CDA 3.0, the Smoking Status - MU and Tobacco Use templates were merged into a single template to better match the [US Core V7](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-smokingstatus.html) Smoking Status template. In general, the mapping follows the standard Social History mapping above, but additional caveats are noted below. 

|C-CDA<br/>[Smoking Status - MU](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-SmokingStatusMeaningfulUse.html) (Deprecated)<br/>[Tobacco Use](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-TobaccoUse.html) (Decprecated)<br/>[Smoking Status](https://build.fhir.org/ig/HL7/CDA-ccda/StructureDefinition-SmokingStatus.html) (C-CDA 3.0)²|FHIR<br/>[Smoking Status Observation (US Core 4)](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-smokingstatus.html)|Transform Steps|
|:----|:----|:----|
|/code|.code|Prior to US Core 7, the code in FHIR should be `72166-2 (Tobacco smoking status NCIS)`, but this is an extensible value set, so other codes used in the older C-CDA templates may be used.<br/>In US Core 7, the value set remains extensible, but contains the same 4 concepts allowed in the C-CDA R3.0's Smoking Status value set.
|/effectiveTime|.effectiveDateTime<br/>or<br/>.effectivePeriod|Smoking Status - MU required a timestamp; Tobacco Use required a time range; Smoking Status (3.0) combines the two templates into one and allows for either.<br/>When mapping to US Core be aware of the requirements around effectiveTime. In v7, time can be either a period or a single value. Prior to v7, the Smoking Status Observation only allowed a single timestamp. If Mapping a C-CDA Tobacco Use template that contains a date range, use one of the following approaches:<br/>- Map to the US Core 7 version of the Smoking Status Observation<br/>- Map to a generic FHIR observation (i.e. do not assert conformance with US Core)<br/>- Omit the effectiveTime high value or create a non-conformant US Core Smoking Status Observation

### C-CDA Pregnancy Observation to FHIR Pregnancy Status Observation
In US Core, Pregnancy Observation was first defined in version 6.

|C-CDA<br/>[Pregnancy Observation](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-PregnancyObservation.html)|FHIR<br/>[Pregnancy Status](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-observation-pregnancystatus.html)|Transform Steps|
|:----|:----|:----|
|.moodCode||The C-CDA moodCode is `EVN` which is why this maps to FHIR's Pregnancy Status rather than Pregnancy Intent.
||.code|`82810-3 (Pregnancy Status)` - C-CDA uses `ASSERTION`, but FHIR clarifies the code to be used.
|/effectiveTime/@value<br/>or<br/>/effectiveTime/low/@value<br/>or<br/>/effectiveTime/high/@value<br/>or<br/>/author/time|.effectiveDateTime|FHIR only allows a single timestamp. Send the first element from the first column with a populated timestamp.<br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)
|/value|.valueCodeableConcept|Value sets are the same<br/>[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/value/@nullFlavor=UNK|.valueCodeableConcept|Unknown becomes an actual value with system = `http://terminology.hl7.org/CodeSystem/v3-NullFlavor`. Any other nullFlavors should use a data-absent-reason extension.
|**[Estimated Date of Delivery](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-EstimatedDateofDelivery.html)**<br/>/entryRelationship/observation[code/@code="11778-8"]/value|.component.code<br/>.component.valueDateTime|Set code to `11778-8` and map value to `.valueDateTime`.<br/>Note that while C-CDA hard-codes this to a single value (`11778-8`), there are other, more specific, EDD LOINC codes that could be used as well (see [EDD Including Method](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.11.20.9.81/expansion)). These might be communicated as translations on the entryRelationship/observation/code, as the methodCode, or sent as entirely custom observations. Any of these codes can also reasonably be included as a component to a Pregnancy Observation to represent the estimated date of delivery.

### C-CDA Pregnancy Intention in Next Year to FHIR Pregnancy Intent Observation
In US Core, Pregnancy Intent was first defined in version 6.

|C-CDA<br/>[Pregnancy Intention](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-PregnancyIntentionInNextYear.html)|FHIR<br/>[Pregnancy Intent](https://hl7.org/fhir/us/core/STU6/StructureDefinition-us-core-observation-pregnancyintent.html)|Transform Steps|
|:----|:----|:----|
|.moodCode||The C-CDA moodCode is `INT` which is why this maps to FHIR's Pregnancy Status rather than Pregnancy Intent.
|/code|.code|In both standards, the code is `86645-9`
|/effectiveTime/low/@value|.effectiveDateTime|FHIR only allows a single timestamp which corresponds to C-CDA's "low" 
|/value|.valueCodeableConcept|Value sets are the same<br/>[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/value/@nullFlavor=UNK|.valueCodeableConcept|Unknown becomes an actual value with system = `http://terminology.hl7.org/CodeSystem/v3-NullFlavor`. Any other nullFlavors should use a data-absent-reason extension.

### Example: Smoking Status

The following is a comparison between C-CDA and FHIR Smoking Status Observations

<table><tr><th>CDA Example</th><th>FHIR Resource</th></tr>
<tr><td>
<div id="cda" class="border codeArea">&lt;<span class="field">observation</span> <span class="attrib">classCode=</span><span class="value">"OBS"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.78"</span>/&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.78"</span> 
              <span class="attrib">extension=</span><span class="value">"2014-06-09"</span>/&gt;
  &lt;<span class="field">id</span> 
    <span class="attrib">extension=</span><span class="value">"<mark class="color10">123456789</mark>"</span> 
    <span class="attrib">root=</span><span class="value">"<mark class="color11">2.16.840.1.113883.19</mark>"</span> /&gt;
  &lt;<span class="field">code</span> 
    <span class="attrib">code=</span><span class="value">"<mark class="color12">72166-2</mark>"</span> 
    <span class="attrib">codeSystem=</span><span class="value">"<mark class="color13">2.16.840.1.113883.6.1</mark>"</span> 
    <span class="attrib">displayName=</span><span class="value">"<mark class="color14">Tobacco smoking status NHIS</mark>"</span>/&gt;
  &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span>/&gt;
  &lt;<span class="field">effectiveTime</span> <span class="attrib">value=</span><span class="value">"<mark class="color15">20140606153200+0000</mark>"</span>/&gt;
  &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"CD"</span> 
    <span class="attrib">code=</span><span class="value">"<mark class="color16">449868002</mark>"</span>
    <span class="attrib">codeSystem=</span><span class="value">"<mark class="color17">2.16.840.1.113883.6.96</mark>"</span> 
    <span class="attrib">codeSystemName=</span><span class="value">"<mark class="color17"><mark class="color17">SNOMED</mark> CT</mark>"</span>  
    <span class="attrib">displayName=</span><span class="value">"<mark class="color18">Current every day smoker</mark>"</span>/&gt;
&lt;/<span class="field">observation</span>&gt;
</div>
</td><td>
<div id="fhir" class="border codeArea">{
  "<span class="field">resourceType</span>": "<span class="value">Observation</span>",
  "<span class="field">id</span>": "<span class="value">62f17e2aa2392d0008fbb23a</span>",
  "<span class="field">identifier</span>": [{
    "<span class="field">system</span>": "<span class="value">urn:oid:<mark class="color11">2.16.840.1.113883.19</mark></span>",
    "<span class="field">value</span>": "<span class="value"><mark class="color10">123456789</mark></span>"
  }],
  "<span class="field">status</span>": "<span class="value">final</span>",
  "<span class="field">category</span>": [{
    "<span class="field">coding</span>": [{
      "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/observation-category</span>",
      "<span class="field">code</span>": "<span class="value">social-history</span>",
      "<span class="field">display</span>": "<span class="value">Social History</span>"
    }]
  }],
  "<span class="field">code</span>": {
    "<span class="field">coding</span>": [{
      "<span class="field">system</span>": "<span class="value"><mark class="color13">http://loinc.org</mark></span>",
      "<span class="field">code</span>": "<span class="value"><mark class="color12">72166-2</mark></span>",
      "<span class="field">display</span>": "<span class="value"><mark class="color14">Tobacco smoking status NHIS</mark></span>"
    }]
  },
  "<span class="field">subject</span>": {
    "<span class="field">reference</span>": "<span class="value">Patient/62f17e29b7532c0009e217b7</span>"
  },
  "<span class="field">effectiveDateTime</span>": "<span class="value"><mark class="color15">2014-06-06T15:32:00.000Z</mark></span>",
  "<span class="field">valueCodeableConcept</span>": {
    "<span class="field">coding</span>": [{
      "<span class="field">system</span>": "<span class="value"><mark class="color17">http://www.snomed.org/</mark></span>",
      "<span class="field">code</span>": "<span class="value"><mark class="color16">449868002</mark></span>",
      "<span class="field">display</span>": "<span class="value"><mark class="color18">Current every day smoker</mark></span>"
    }]
  }
}</div>
</td></tr></table>


### Example: Pregnancy Observation

<table><tr><th>CDA Example</th><th>FHIR Resource</th></tr>
<tr><td>
<div id="cda" class="border codeArea">&lt;<span class="field">observation</span> <span class="attrib">classCode=</span><span class="value">"OBS"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.15.3.8"</span>/&gt;
  &lt;<span class="field">id</span> <span class="attrib">extension=</span><span class="value">"<mark class="color10">123456789</mark>"</span> <span class="attrib">root=</span><span class="value">"<mark class="color11">2.16.840.1.113883.19</mark>"</span>/&gt;
  <span class="comment">&lt;!-- ASSERTION maps to: <mark class="color19">82810-3</mark> --&gt;</span>
  &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"ASSERTION"</span> <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.5.4"</span>/&gt;
  &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span>/&gt;
  &lt;<span class="field">effectiveTime</span>&gt;
    &lt;<span class="field">low</span> <span class="attrib">value=</span><span class="value">"<mark class="color12">20220824103952+0000</mark>"</span>/&gt;
  &lt;/<span class="field">effectiveTime</span>&gt;
  &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"CD"</span> <span class="attrib">code=</span><span class="value">"<mark class="color13">77386006</mark>"</span> 
         <span class="attrib">displayName=</span><span class="value">"<mark class="color14">pregnant</mark>"</span> 
         <span class="attrib">codeSystem=</span><span class="value">"<mark class="color15">2.16.840.1.113883.6.96</mark>"</span>/&gt;
  &lt;<span class="field">entryRelationship</span> <span class="attrib">typeCode=</span><span class="value">"REFR"</span>&gt;
    &lt;<span class="field">observation</span> <span class="attrib">classCode=</span><span class="value">"OBS"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.15.3.1"</span>/&gt;
      &lt;<span class="field">code</span> 
        <span class="attrib">code=</span><span class="value">"<mark class="color16">11778-8</mark>"</span>
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color17">2.16.840.1.113883.6.1</mark>"</span> 
        <span class="attrib">displayName=</span><span class="value">"Estimated date of delivery"</span>/&gt;
      &lt;<span class="field">text</span>&gt;
        &lt;<span class="field">reference</span> <span class="attrib">value=</span><span class="value">"#dod"</span> /&gt;
      &lt;/<span class="field">text</span>&gt;
      &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span>/&gt;
      &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"TS"</span> <span class="attrib">value=</span><span class="value">"<mark class="color18">2023-02-14</mark>"</span> /&gt;
    &lt;/<span class="field">observation</span>&gt;
  &lt;/<span class="field">entryRelationship</span>&gt;
&lt;/<span class="field">observation</span>&gt;</div>
</td><td>
<div id="fhir" class="border codeArea">{
  "<span class="field">resourceType</span>": "<span class="value">Observation</span>",
  "<span class="field">id</span>": "<span class="value">pregnancy-status</span>",
  "<span class="field">identifier</span>": [{
    "<span class="field">system</span>": "<span class="value">urn:oid:<mark class="color11">2.16.840.1.113883.19</mark></span>",
    "<span class="field">value</span>": "<span class="value"><mark class="color10">123456789</mark></span>"
  }],
  "<span class="field">status</span>": "<span class="value">final</span>",
  "<span class="field">category</span>": [{
    "<span class="field">coding</span>": [{
      "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/observation-category</span>",
      "<span class="field">code</span>": "<span class="value">social-history</span>",
      "<span class="field">display</span>": "<span class="value">Social History</span>"
    }]
  }],
  "<span class="field">code</span>": {
    "<span class="field">coding</span>": [{
      "<span class="field">system</span>": "<span class="value"><mark class="color17">http://loinc.org</mark></span>",
      "<span class="field">code</span>": "<span class="value"><mark class="color19">82810-3</mark></span>",
      "<span class="field">display</span>": "<span class="value">Pregnancy status</span>"
    }]
  },
  "<span class="field">subject</span>": { "reference": "<span class="value">Patient/example</span>" },
  "<span class="field">effectiveDateTime</span>": "<span class="value"><mark class="color12">2022-08-24T10:39:52Z</mark></span>",
  "<span class="field">valueCodeableConcept</span>": {
    "<span class="field">coding</span>": [{
      "<span class="field">system</span>": "<span class="value"><mark class="color15">http://snomed.info/sct</mark></span>",
      "<span class="field">code</span>": "<span class="value"><mark class="color13">77386006</mark></span>",
      "<span class="field">display</span>": "<span class="value"><mark class="color14">Pregnant</mark></span>"
    }]
  },
  "<span class="field">component</span>": [{
    "<span class="field">code</span>": {
      "<span class="field">coding</span>": [{
        "<span class="field">system</span>": "<span class="value"><mark class="color17">http://loinc.org</mark></span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color16">11778-8</mark></span>",
        "<span class="field">display</span>": "<span class="value">Delivery date Estimated</span>"
      }]
    },
    "<span class="field">valueDateTime</span>": "<span class="value"><mark class="color18">2023-02-14</mark></span>"
  }]
}</div>
</td></tr></table>

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/CF-vitals.md

<link rel="stylesheet" href="colors.css">

This page provides a mapping from CDA to FHIR. For the FHIR to CDA mapping, please refer to [Vitals FHIR → CDA](./FC-vitals.html). For guidance on how to read the table 
below, see [Reading the C-CDA ↔ FHIR Mapping Pages](./mappingGuidance.html).

C-CDA vitals are typically grouped into a Vital Signs Organizer to group one or more vitals readings together. This has been mapped to an additional FHIR Observation for the panel of vital signs. This panel contains a `.hasMember` field which references each observation mapped from the original C-CDA Vital Signs Organizer.

### C-CDA Vital Signs Organizer to FHIR Observation Panel

|C-CDA¹<br/>[Vital SignsOrganizer](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-VitalSignsOrganizer.html)|FHIR<br/>[Vital Signs Observation](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-vital-signs.html)|Transform Steps|
|:----|:----|:----|
|/id|.identifier|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
||.category|Set to `vital-signs` from [Vital Signs value set](https://hl7.org/fhir/us/core/STU4/ValueSet-us-core-vital-signs.html)
||.code|Set to `85353-1` [CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/statusCode|.status|`final` (C-CDA is fixed to `completed`)
|/effectiveTime|.effectiveDateTime<br/>or<br/>.effectivePeriod|If low and high are identical, use effectiveDateTime. If organizer/effectiveTime is missing, use the earliest and latest observation/effectiveTime as the source of the mapping.<br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)
||.hasMember|Reference to each vital sign observation mapped from CDA

### C-CDA Vital Signs Observation to FHIR Observation

|C-CDA¹<br/>[Vital Sign Observation](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-VitalSignObservation.html)|FHIR<br/>[Vital Signs Observation](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-vital-signs.html)|Transform Steps<br/>Note: US Core defines separate profiles for individual vitals such as [weight](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-body-weight.html), [heart rate](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-heart-rate.html), etc.|
|:----|:----|:----|
|/id|.identifier|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
||.category|Set to `vital-signs` from [Vital Signs value set](https://hl7.org/fhir/us/core/STU4/ValueSet-us-core-vital-signs.html)
|/code |.code²|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/effectiveTime|.effectiveDateTime<br/>or<br/>.effectivePeriod|Prefer effectiveDateTime<br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)
|value|.valueQuantity²|[CDA ↔ FHIR Quantity](mappingGuidance.html#cda--fhir-quantity)
|/interpretationCode|.interpretation²|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/methodCode|.method|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/targetSiteCode|.bodySite|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|/author|.performer<br/>&<br/>**[Provenance](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-procedure.html)**|[CDA ↔ FHIR Provenance](mappingGuidance.html#cda--fhir-provenance)|
|/referenceRange/observationRange/interpretationCode|**Not Supported**|FHIR expects reference ranges to be "normal" ranges. If C-CDA includes multiple reference ranges, only map the one with interpretationCode = `"N"`.
|/referenceRange/observationRange/value[xsi:type=IVL_PQ]|.referenceRange.low²<br/>&<br/>.referenceRange.high²|[CDA ↔ FHIR Quantity](mappingGuidance.html#cda--fhir-quantity)
|/referenceRange/observationRange/value[xsi:type=ST]<br/>or<br/>/referenceRange/observationRange/text|.referenceRange.text²|

1\. XPath abbreviated for C-CDA Vital Signs Observation as: <br/> ClinicalDocument/component/structuredBody/component/section[code/@code="8716-3"]/entry/organizer/entryRelationship/component

2\. Some C-CDA observations need special handling when converting to FHIR. When recording the following vitals, the value, interpretation, and referenceRange should be placed in a `.component` element within a parent Observation.

**[Blood Pressure](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-blood-pressure.html)** (C-CDA observations with codes `8480-6` - systolic & `8462-4` - diastolic)
- Set `Observation.code` to `85354-9` (Blood Pressure Panel) and create 2 components for the systolic and diastolic readings. Both components are required.
- Do not send `Observation.valueQuantity`

**[Pulse Oximetry](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-pulse-oximetry.html)** (C-CDA observations with codes `3150-0` - Inhaled Oxygen Concentration,  `3151-8` - Inhaled Oxygen Flow Rate, `59408-5` - Oxygen saturation in Arterial blood by Pulse oximetry, or  `2708-6` - Oxygen saturation in Arterial blood)
- `Observation.code` should contain two coding values: `59408-5` & `2708-6`
- Observation.valueQuantity represents the Oxygen saturation (e.g. `98%`)
- Create individual components for `3150-0` - Inhaled Oxygen Concentration & `3151-8` - Inhaled Oxygen Flow Rate (only if values exist)

### Example: Simple Vitals Panel

<table><tr><th>CDA Vitals Example</th><th>FHIR Observation Resources</th></tr>
<tr><td>
<div id="cda" class="border codeArea">&lt;<span class="field">organizer</span> <span class="attrib">classCode=</span><span class="value">"CLUSTER"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.26"</span>/&gt;
  &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.26"</span> 
    <span class="attrib">extension=</span><span class="value">"2015-08-01"</span>/&gt;
  &lt;<span class="field">id</span> 
    <span class="attrib">extension=</span><span class="value">"<mark class="color10">21688133041015158234</mark>"</span>
    <span class="attrib">root=</span><span class="value">"<mark class="color11">2.16.840.1.113883.3.42.126.100001.19</mark>"</span>/&gt;
  &lt;<span class="field">code</span> 
    <span class="attrib">code=</span><span class="value">"<mark class="color12">46680005</mark>"</span> 
    <span class="attrib">displayName=</span><span class="value">"<mark class="color13">Vital Signs</mark>"</span> 
    <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.6.96"</span>
    <span class="attrib">codeSystemName=</span><span class="value">"SNOMED CT"</span>&gt;
    &lt;<span class="field">translation</span> <span class="attrib">code=</span><span class="value">"<mark class="color14">74728-7</mark>"</span>
      <span class="attrib">codeSystem=</span><span class="value">"<mark class="color15">2.16.840.1.113883.6.1</mark>"</span> 
      <span class="attrib">codeSystemName=</span><span class="value">"<mark class="color15">LOINC</mark>"</span>/&gt;
  &lt;/<span class="field">code</span>&gt;
  &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span>/&gt;
  &lt;<span class="field">effectiveTime</span> <span class="attrib">value=</span><span class="value">"<mark class="color16">20140520193605-0600</mark>"</span>/&gt;
  <span class="comment">&lt;!-- Each vital sign should be its own component. --&gt;</span>
  &lt;<span class="field">component</span>&gt;
    &lt;<span class="field">observation</span> <span class="attrib">classCode=</span><span class="value">"OBS"</span> <span class="attrib">moodCode=</span><span class="value">"EVN"</span>&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.27"</span>/&gt;
      &lt;<span class="field">templateId</span> <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.27"</span> 
        <span class="attrib">extension=</span><span class="value">"2014-06-09"</span>/&gt;
      &lt;<span class="field">id</span> 
        <span class="attrib">extension=</span><span class="value">"<mark class="color17">216881330410151584</mark>"</span>
        <span class="attrib">root=</span><span class="value">"<mark class="color11">2.16.840.1.113883.3.42.126.100001.19</mark>"</span>/&gt;
      &lt;<span class="field">code</span> <span class="attrib">code=</span><span class="value">"<mark class="color18">8867-4</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color15">2.16.840.1.113883.6.1</mark>"</span> 
        <span class="attrib">codeSystemName=</span><span class="value">"<mark class="color15">LOINC</mark>"</span>
        <span class="attrib">displayName=</span><span class="value">"<mark class="color19">HEART RATE</mark>"</span>/&gt;
      &lt;<span class="field">text</span>&gt;
        &lt;<span class="field">reference</span> <span class="attrib">value=</span><span class="value">"#Pulse_1"</span>/&gt;
      &lt;/<span class="field">text</span>&gt;
      &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span>/&gt;
      &lt;<span class="field">effectiveTime</span> <span class="attrib">value=</span><span class="value">"<mark class="color16">20140520193605-0600</mark>"</span>/&gt;
      &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"PQ"</span> 
        <span class="attrib">value=</span><mark class="color20"><span class="value">"80"</span></mark> 
        <span class="attrib">unit=</span><span class="value">"<mark class="color21">/min</mark>"</span>/&gt;
    &lt;/<span class="field">observation</span>&gt;
  &lt;/<span class="field">component</span>&gt;
&lt;/<span class="field">organizer</span>&gt;</div>
</td><td>
<b>Note:</b> The following shows an Observation resource for the panel with an individual Observation resource embedded in its contained property. This was done for ease of creating a single, visual, highlighted example, but implementers may choose to create separate, external resources according to their own policy.
<br/>

<div id="fhir" class="border codeArea">{
  "<span class="field">resourceType</span>": "<span class="value">Observation</span>",
  "<span class="field">identifier</span>": [{
    "<span class="field">value</span>": "<span class="value"><mark class="color10">21688133041015158234</mark></span>",
    "<span class="field">system</span>": "<span class="value">urn:oid:<mark class="color11">2.16.840.1.113883.3.42.126.100001.19</mark></span>"
  }],
  "<span class="field">status</span>": "<span class="value">final</span>",
  "<span class="field">category</span>": [{
    "<span class="field">text</span>": "<span class="value"><mark class="color12">vital-signs</mark></span>",
    "<span class="field">coding</span>": [{
      "<span class="field">code</span>": "<span class="value"><mark class="color12">vital-signs</mark></span>",
      "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/observation-category</span>",
      "<span class="field">display</span>": "<span class="value"><mark class="color13">Vital Signs</mark></span>"
    }]
  }],
  "<span class="field">code</span>": {
    "<span class="field">text</span>": "<span class="value">Vital Signs Panel</span>",
    "<span class="field">coding</span>": [{
      "<span class="field">code</span>": "<span class="value"><mark class="color14">85353-1</mark></span>",
      "<span class="field">system</span>": "<span class="value"><mark class="color15">http://loinc.org</mark></span>"
    }]
  },
  "<span class="field">subject</span>": {
    "<span class="field">reference</span>": "<span class="value">urn:uuid:a4986486-6599-4bb2-a7fb-e2deb8d50b5e</span>"
  },
  "<span class="field">effectiveDateTime</span>": "<span class="value"><mark class="color16">2014-05-20T19:36:05-06:00</mark></span>",
  "<span class="field">hasMember</span>": [{
    "<span class="field">reference</span>": "<span class="value">#heartRate</span>"
  }],
  "<span class="field">contains</span>": [{
    "<span class="field">resourceType</span>": "<span class="value">Observation</span>",
    "<span class="field">id</span>": "<span class="value">heartRate</span>",
    "<span class="field">identifier</span>": [{
      "<span class="field">system</span>": "<span class="value">urn:oid:<mark class="color11">2.16.840.1.113883.3.42.126.100001.19</mark></span>",
      "<span class="field">value</span>": "<span class="value"><mark class="color17">216881330410151584</mark></span>"
    }],
    "<span class="field">status</span>": "<span class="value">final</span>",
    "<span class="field">category</span>": [{
      "<span class="field">coding</span>": [{
        "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/observation-category</span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color12">vital-signs</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color13">Vital Signs</mark></span>"
      }]
    }],
    "<span class="field">code</span>": {
      "<span class="field">coding</span>": [{
        "<span class="field">system</span>": "<span class="value"><mark class="color15">http://loinc.org</mark></span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color18">8867-4</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color19">HEART RATE</mark></span>"
      }]
    },
    "<span class="field">subject</span>": {
      "<span class="field">reference</span>": "<span class="value">Patient/62f17e29b7532c0009e217b7</span>"
    },
    "<span class="field">effectiveDateTime</span>": "<span class="value"><mark class="color16">2014-05-20T19:36:05-06:00</mark></span>",
    "<span class="field">valueQuantity</span>": {
      "<span class="field">value</span>": <mark class="color20">80,</mark>
      "<span class="field">unit</span>": "<span class="value"><mark class="color21">/min</mark></span>"
    }
  }]
}</div>
</td></tr></table>

### Example: Blood Pressure

<table>
<tr><th>C-CDA Blood Pressure (Codes & Values Only)</th><th>FHIR Blood Pressure</th></tr>
<tr><td>
<div class="border codeArea">&lt;<span class="field">organizer</span>&gt;
  <span class="comment">&lt;!-- C-CDA Vital Signs Organizer --&gt;</span>
  &lt;<span class="field">templateId</span> 
    <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.26"</span> 
    <span class="attrib">extension=</span><span class="value">"2015-08-01"</span> /&gt;
  &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"..."</span> /&gt;
  &lt;<span class="field">code</span> 
    <span class="attrib">code=</span><span class="value">"<mark class="color10">46680005</mark>"</span> 
    <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.6.96"</span> 
    <span class="attrib">codeSystemName=</span><span class="value">"SNOMED CT"</span>
    <span class="attrib">displayName=</span><mark class="color10"><span class="value">"Vital Signs"</span></mark> /&gt;
  &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span> /&gt;
  <span class="comment">&lt;!-- effectiveTime, author, etc stripped --&gt;</span>
  &lt;<span class="field">component</span>&gt;
    &lt;<span class="field">observation</span>&gt;
      <span class="comment">&lt;!-- C-CDA Vital Signs Observation --&gt;</span>
      &lt;<span class="field">templateId</span> 
        <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.27"</span>
        <span class="attrib">extension=</span><span class="value">"2014-06-09"</span> /&gt;
      &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"..."</span> /&gt;
      &lt;<span class="field">code</span> 
        <span class="attrib">code=</span><span class="value">"<mark class="color11">8480-6</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color12">2.16.840.1.113883.6.1</mark>"</span> 
        <span class="attrib">codeSystemName=</span><span class="value">"<mark class="color12">LOINC</mark>"</span>
        <span class="attrib">displayName=</span><span class="value">"<mark class="color13">Systolic blood pressure</mark>"</span> /&gt;
      &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span> /&gt;
      &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"PQ"</span> 
        <span class="attrib">value=</span><mark class="color14"><span class="value">"115"</span></mark> 
        <span class="attrib">unit=</span><span class="value">"<mark class="color15">mm[Hg]</mark>"</span> /&gt;
    &lt;/<span class="field">observation</span>&gt;
  &lt;/<span class="field">component</span>&gt;
  &lt;<span class="field">component</span>&gt;
    &lt;<span class="field">observation</span>&gt;
      <span class="comment">&lt;!-- C-CDA Vital Signs Observation --&gt;</span>
      &lt;<span class="field">templateId</span> 
        <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.27"</span>
        <span class="attrib">extension=</span><span class="value">"2014-06-09"</span> /&gt;
      &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"..."</span> /&gt;
      &lt;<span class="field">code</span> 
        <span class="attrib">code=</span><span class="value">"<mark class="color16">8462-4</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color12">2.16.840.1.113883.6.1</mark>"</span> 
        <span class="attrib">codeSystemName=</span><span class="value">"<mark class="color12">LOINC</mark>"</span>
        <span class="attrib">displayName=</span><span class="value">"<mark class="color17">Diastolic blood pressure</mark>"</span> /&gt;
      &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"PQ"</span> <span class="attrib">value=</span><mark class="color18"><span class="value">"75"</span></mark> <span class="attrib">unit=</span><span class="value">"<mark class="color15">mm[Hg]</mark>"</span> /&gt;
    &lt;/<span class="field">observation</span>&gt;
  &lt;/<span class="field">component</span>&gt;
&lt;/<span class="field">organizer</span>&gt;</div>
</td><td>
<div class="border codeArea">{
  "<span class="field">resourceType</span>" : "<span class="value">Observation</span>",
  "<span class="field">status</span>" : "<span class="value">final</span>",
  "<span class="field">category</span>" : [{
    "<span class="field">coding</span>" : [{
      "<span class="field">system</span>" : "<span class="value">http://terminology.hl7.org/CodeSystem/observation-category</span>",
      "<span class="field">code</span>" : "<span class="value"><mark class="color10">vital-signs</mark></span>"
    }]
  }],
  "<span class="field">code</span>" : {
    "<span class="field">coding</span>" : [{
      "<span class="field">system</span>" : "<span class="value"><mark class="color12">http://loinc.org</mark></span>",
      "<span class="field">code</span>" : "<span class="value">85354-9</span>",
      "<span class="field">display</span>" : "<span class="value">Blood pressure panel with all children optional</span>"
    }]
  },
  "<span class="field">component</span>" : [{
    "<span class="field">code</span>" : {
      "<span class="field">coding</span>" : [{
        "<span class="field">system</span>" : "<span class="value"><mark class="color12">http://loinc.org</mark></span>",
        "<span class="field">code</span>" : "<span class="value"><mark class="color11">8480-6</mark></span>",
        "<span class="field">display</span>" : "<span class="value"><mark class="color13">Systolic blood pressure</mark></span>"
      }],
      "<span class="field">text</span>" : "<span class="value"><mark class="color13">Systolic blood pressure</mark></span>"
    },
    "<span class="field">valueQuantity</span>" : {
      "<span class="field">value</span>" : <mark class="color14">115,</mark>
      "<span class="field">unit</span>" : "<span class="value">mmHg</span>",
      "<span class="field">system</span>" : "<span class="value">http://unitsofmeasure.org</span>",
      "<span class="field">code</span>" : "<span class="value"><mark class="color15">mm[Hg]</mark></span>"
    }
  },
  {
    "<span class="field">code</span>" : {
      "<span class="field">coding</span>" : [{
        "<span class="field">system</span>" : "<span class="value"><mark class="color12">http://loinc.org</mark></span>",
        "<span class="field">code</span>" : "<span class="value"><mark class="color16">8462-4</mark></span>",
        "<span class="field">display</span>" : "<span class="value"><mark class="color17">Diastolic blood pressure</mark></span>"
      }],
      "<span class="field">text</span>" : "<span class="value"><mark class="color17">Diastolic blood pressure</mark></span>"
    },
    "<span class="field">valueQuantity</span>" : {
      "<span class="field">value</span>" : <mark class="color18">75,</mark>
      "<span class="field">unit</span>" : "<span class="value">mmHg</span>",
      "<span class="field">system</span>" : "<span class="value">http://unitsofmeasure.org</span>",
      "<span class="field">code</span>" : "<span class="value"><mark class="color15">mm[Hg]</mark></span>"
    }
  }]
}</div>
</td></tr></table>

### Example: Pulse Oximetry

<table><tr><th>C-CDA Pulse Oximetry (Codes & Values Only)</th><th>FHIR Pulse Oximetry</th></tr>
<tr><td>
<div class="border codeArea">&lt;<span class="field">organizer</span>&gt;
  <span class="comment">&lt;!-- C-CDA Vital Signs Organizer --&gt;</span>
  &lt;<span class="field">templateId</span> 
    <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.26"</span> 
    <span class="attrib">extension=</span><span class="value">"2015-08-01"</span> /&gt;
  &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"..."</span> /&gt;
  &lt;<span class="field">code</span> 
    <span class="attrib">code=</span><span class="value">"<mark class="color10">46680005</mark>"</span> 
    <span class="attrib">codeSystem=</span><span class="value">"2.16.840.1.113883.6.96"</span> 
    <span class="attrib">codeSystemName=</span><span class="value">"SNOMED CT"</span>
    <span class="attrib">displayName=</span><mark class="color10"><span class="value">"Vital Signs"</span></mark> /&gt;
  &lt;<span class="field">statusCode</span> <span class="attrib">code=</span><span class="value">"completed"</span> /&gt;
  <span class="comment">&lt;!-- effectiveTime, author, etc stripped --&gt;</span>
  &lt;<span class="field">component</span>&gt;
    &lt;<span class="field">observation</span>&gt;
      <span class="comment">&lt;!-- C-CDA Vital Signs Observation --&gt;</span>
      &lt;<span class="field">templateId</span> 
        <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.27"</span>
        <span class="attrib">extension=</span><span class="value">"2014-06-09"</span> /&gt;
      &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"..."</span> /&gt;
      &lt;<span class="field">code</span> 
        <span class="attrib">code=</span><span class="value">"<mark class="color11">2708-6</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color12">2.16.840.1.113883.6.1</mark>"</span> 
        <span class="attrib">codeSystemName=</span><span class="value">"<mark class="color12">LOINC</mark>"</span>
        <span class="attrib">displayName=</span><span class="value">"Oxygen saturation"</span> /&gt;
      &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"PQ"</span> 
        <span class="attrib">value=</span><mark class="color13"><span class="value">"98"</span></mark> 
        <span class="attrib">unit=</span><mark class="color14"><span class="value">"%"</span></mark> /&gt;
    &lt;/<span class="field">observation</span>&gt;
    &lt;<span class="field">observation</span>&gt;
      <span class="comment">&lt;!-- C-CDA Vital Signs Observation --&gt;</span>
      &lt;<span class="field">templateId</span> 
        <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.27"</span>
        <span class="attrib">extension=</span><span class="value">"2014-06-09"</span> /&gt;
      &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"..."</span> /&gt;
      &lt;<span class="field">code</span> 
        <span class="attrib">code=</span><span class="value">"<mark class="color15">3151-8</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color12">2.16.840.1.113883.6.1</mark>"</span>
        <span class="attrib">codeSystemName=</span><span class="value">"<mark class="color12">LOINC</mark>"</span>
        <span class="attrib">displayName=</span><span class="value">"Inhaled Oxygen Flow Rate"</span> /&gt;
      &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"PQ"</span> 
        <span class="attrib">value=</span><mark class="color16"><span class="value">"6"</span></mark> 
        <span class="attrib">unit=</span><span class="value">"<mark class="color17">L/min</mark>"</span> /&gt;
    &lt;/<span class="field">observation</span>&gt;
    &lt;<span class="field">observation</span>&gt;
      <span class="comment">&lt;!-- C-CDA Vital Signs Observation --&gt;</span>
      &lt;<span class="field">templateId</span> 
        <span class="attrib">root=</span><span class="value">"2.16.840.1.113883.10.20.22.4.27"</span>
        <span class="attrib">extension=</span><span class="value">"2014-06-09"</span> /&gt;
      &lt;<span class="field">id</span> <span class="attrib">root=</span><span class="value">"..."</span> /&gt;
      &lt;<span class="field">code</span> 
        <span class="attrib">code=</span><span class="value">"<mark class="color18">3150-0</mark>"</span> 
        <span class="attrib">codeSystem=</span><span class="value">"<mark class="color12">2.16.840.1.113883.6.1</mark>"</span> 
        <span class="attrib">codeSystemName=</span><span class="value">"<mark class="color12">LOINC</mark>"</span>
        <span class="attrib">displayName=</span><span class="value">"<mark class="color19">Inhaled Oxygen Concentration</mark>"</span> /&gt;
      &lt;<span class="field">value</span> <span class="attrib">xsi:type=</span><span class="value">"PQ"</span> 
        <span class="attrib">value=</span><mark class="color20"><span class="value">"35"</span></mark> 
        <span class="attrib">unit=</span><mark class="color14"><span class="value">"%"</span></mark> /&gt;
    &lt;/<span class="field">observation</span>&gt;
  &lt;/<span class="field">component</span>&gt;
&lt;/<span class="field">organizer</span>&gt;</div>

</td><td>
<div class="border codeArea">{
  "<span class="field">resourceType</span>": "<span class="value">Observation</span>",
  "<span class="field">status</span>": "<span class="value">final</span>",
  "<span class="field">category</span>": [{
    "<span class="field">coding</span>": [{
      "<span class="field">system</span>": "<span class="value">http://terminology.hl7.org/CodeSystem/observation-category</span>",
      "<span class="field">code</span>": "<span class="value"><mark class="color10">vital-signs</mark></span>"
    }]
  }],
  "<span class="field">code</span>": {
    "<span class="field">coding</span>": [{
      "<span class="field">system</span>": "<span class="value"><mark class="color12">http://loinc.org</mark></span>",
      "<span class="field">code</span>": "<span class="value"><mark class="color11">2708-6</mark></span>",
      "<span class="field">display</span>": "<span class="value">Oxygen saturation in Arterial blood</span>"
    },
    {
      "<span class="field">system</span>": "<span class="value"><mark class="color12">http://loinc.org</mark></span>",
      "<span class="field">code</span>": "<span class="value">59408-5</span>",
      "<span class="field">display</span>": "<span class="value">Oxygen saturation in Arterial blood by Pulse oximetry</span>"
    }]
  },
  "<span class="field">valueQuantity</span>": {
    "<span class="field">value</span>": <mark class="color13">98,</mark>
    "<span class="field">unit</span>": <mark class="color14">"%"</mark>,
    "<span class="field">system</span>": "<span class="value">http://unitsofmeasure.org</span>",
    "<span class="field">code</span>": <mark class="color14">"%"</mark>
  },
  "<span class="field">component</span>": [{
    "<span class="field">code</span>": {
      "<span class="field">coding</span>": [{
        "<span class="field">system</span>": "<span class="value"><mark class="color12">http://loinc.org</mark></span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color15">3151-8</mark></span>",
        "<span class="field">display</span>": "<span class="value">Inhaled oxygen flow rate</span>"
      }]
    },
    "<span class="field">valueQuantity</span>": {
      "<span class="field">value</span>": <mark class="color16">6,</mark>
      "<span class="field">unit</span>": "<span class="value">liters/min</span>",
      "<span class="field">system</span>": "<span class="value">http://unitsofmeasure.org</span>",
      "<span class="field">code</span>": "<span class="value"><mark class="color17">L/min</mark></span>"
    }
  },
  {
    "<span class="field">code</span>": {
      "<span class="field">coding</span>": [{
        "<span class="field">system</span>": "<span class="value"><mark class="color12">http://loinc.org</mark></span>",
        "<span class="field">code</span>": "<span class="value"><mark class="color18">3150-0</mark></span>",
        "<span class="field">display</span>": "<span class="value"><mark class="color19">Inhaled Oxygen Concentration</mark></span>"
      }]
    },
    "<span class="field">valueQuantity</span>": {
      "<span class="field">value</span>": <mark class="color20">35,</mark>
      "<span class="field">unit</span>": <mark class="color14">"%"</mark>,
      "<span class="field">system</span>": "<span class="value">http://unitsofmeasure.org</span>",
      "<span class="field">code</span>": <mark class="color14">"%"</mark>
    }
  }]
}</div>
</td></tr>
</table>


---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/conceptMaps.md

This page includes terminology mapping from CDA → FHIR and FHIR → CDA in two separate sections. These  terminology mappings are not structural. For structural transformations, please refer to the [general structural guidance](mappingGuidance.html). 

These terminology maps use the [ConceptMap](http://hl7.org/fhir/R4/conceptmap.html) resource which translates a source terminology to a target terminology. In addition, the specific term maps in this guide are often not semantically equivalent and may be incomplete. For these reasons, we include two maps for each terminology group, one for CDA → FHIR and another for FHIR → CDA, shown in multiple sub-lists on this page.

Note that these maps are directly referenced in the structural guidance tables and do not include any large vocabularly mappings (i.e. each of the mappings below has under 50 terms).  

### CDA to FHIR Terminology Mapping

Shown below are terminology mappings for use in moving from CDA → FHIR. Entry specific maps are shown first then followed by general maps which may be referenced across multiple clinical domains. 

#### **Entry Specific CDA to FHIR Resource ConceptMaps** 
- [Allergy Intolerance Observation value (CDA) → AllergyIntolerance type (FHIR)](./ConceptMap-CF-AllergyIntoleranceType.html)
- [Allergy Intolerance Observation value (CDA) → AllergyIntolerance category (FHIR)](./ConceptMap-CF-AllergyIntoleranceCategory.html)
- [Allergy Status Observation (CDA) → AllergyIntolerance clinicalStatus (FHIR)](./ConceptMap-CF-AllergyStatus.html)
- [Criticality value (CDA) → criticality (FHIR)](./ConceptMap-CF-Criticality.html)
- [Encounter status (CDA) → Encounter status (FHIR)](./ConceptMap-CF-EncounterStatus.html)
- [Immunization Activity statusCode (CDA) → Immunization status (FHIR)](./ConceptMap-CF-ImmunizationStatus.html)
- [Immunization Refusal Reason (CDA) → Immunization statusReason (FHIR)](./ConceptMap-CF-ImmunizationRefusal.html)
- [Medication Activity statusCode (CDA) → MedicationRequest status (FHIR)](./ConceptMap-CF-MedicationStatus.html)
- [Medication Mood (CDA) → Medication Intent (FHIR)](./ConceptMap-CF-MedActivityMood.html)
- [No Known Allergies (CDA) → negated code (FHIR)](./ConceptMap-CF-NoKnownAllergies.html)
- [Patient Gender (CDA) → Administrative Gender (FHIR)](./ConceptMap-CF-AdministrativeGender.html)
- [Result Status (CDA) → Observation Status (FHIR)](./ConceptMap-CF-ResultStatus.html)
- [Problem Concern Status (CDA) → Condition Clinical Status (FHIR)](./ConceptMap-CF-ConditionClinicalStatus.html)
- [Problem Status Observation value (CDA) → Condition clinicalStatus (FHIR)](./ConceptMap-CF-ProblemStatus.html)
- [Procedure Status (CDA) → Procedure status (FHIR)](./ConceptMap-CF-ProcedureStatus.html)
- [Result Status (CDA) → Report Status (FHIR)](./ConceptMap-CF-ResultReportStatus.html)
- [Section code (CDA) → Condition category (FHIR)](./ConceptMap-CF-ProblemCategory.html)
- [Severity Observation value (CDA) → Reaction Event severity (FHIR)](./ConceptMap-CF-Severity.html)

#### **General CDA to FHIR ConceptMaps** 
- [Addr use  (CDA) → Address use (FHIR)](./ConceptMap-CF-AddressUse.html)
- [Administrative Gender (CDA) → Patient gender (FHIR)](./ConceptMap-CF-AdministrativeGender.html)
- [Name use (CDA) → Name use (FHIR)](./ConceptMap-CF-NameUse.html)
- [NullFlavor (CDA) → Data Absent Reason code (FHIR)](./ConceptMap-CF-NullFlavorDataAbsentReason.html)
- [Telecom use (CDA) → telecom contact point use (FHIR)](./ConceptMap-CF-TelecomUse.html)
- [Telecom value (CDA) → telecom contact point type (FHIR)](./ConceptMap-CF-TelecomType.html)

### FHIR to CDA Terminology Mapping

Shown below are terminology mappings for use in moving from FHIR → CDA. Resource specific maps are shown first then followed by general maps which may be referenced across multiple clinical domains. 

#### **Resource Specific FHIR to CDA Entry ConceptMaps** 
- [AllergyIntolerance type (FHIR) → Allergy Intolerance Observation value (CDA)](./ConceptMap-FC-AllergyIntoleranceType.html)
- [AllergyIntolerance category (FHIR) → Allergy Intolerance Observation value (CDA)](./ConceptMap-FC-AllergyIntoleranceCategory.html)
- [AllergyIntolerance clinicalStatus (FHIR) → Allergy Status Observation (CDA)](./ConceptMap-FC-AllergyStatus.html) 
- [Criticality (FHIR) → Criticality value (CDA)](./ConceptMap-FC-Criticality.html)
- [Immunization site (FHIR) → Immunization ApproachSiteCode (CDA)](./ConceptMap-FC-ImmunizationSite.html)
- [Immunization status (FHIR) → Immunization Activity statusCode (CDA)](./ConceptMap-FC-ImmunizationStatus.html)
- [Immunization statusReason (FHIR) → Immunization Refusal Reason (CDA)](./ConceptMap-FC-ImmunizationRefusal.html)
- [MedicationRequest status(FHIR) → Medication Activity statusCode (CDA)](./ConceptMap-FC-MedicationStatus.html)
- [Negated code (FHIR) → No Known Allergies (CDA)](./ConceptMap-FC-NoKnownAllergies.html)
- [Condition clinicalStatus (FHIR) → Problem Status Observation value (CDA)](./ConceptMap-FC-ProblemStatus.html)
- [Procedure status (FHIR) → Procedure Status (CDA)](./ConceptMap-FC-ProcedureStatus.html)
- [Condition category (FHIR) → Section code (CDA)](./ConceptMap-FC-ProblemCategory.html)
- [Reaction Event severity (FHIR) → Severity Observation value (CDA)](./ConceptMap-FC-Severity.html)

#### **General FHIR to CDA ConceptMaps** 
- [Address use (FHIR) → Addr use (CDA)](./ConceptMap-FC-AddressUse.html)
- [Administrative gender (FHIR) → Administrative Gender (CDA)](./ConceptMap-FC-AdministrativeGender.html)
- [Data Absent Reason code (FHIR) → NullFlavor (CDA)](./ConceptMap-FC-DataAbsentReasonNullFlavor.html)
- [Name use (FHIR) → Name use (CDA)](./ConceptMap-FC-NameUse.html)
- [Telecom contact point type (FHIR) → Telecom value (CDA)](./ConceptMap-FC-TelecomType.html) 
- [Telecom contact point use (FHIR) → Telecom use (CDA)](./ConceptMap-FC-TelecomUse.html) 


---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/downloads.md

[Previous Page - The Specification](the_specification.html)

**Full Implementation Guide**

The entire implementation guide (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

**Artifact Definitions**

* [XML](definitions.xml.zip)
* [JSON](definitions.json.zip)
* [TTL](definitions.ttl.zip)

**Examples:** 

All the examples that are used in this Implementation Guide available for download:

* [XML](examples.xml.zip)
* [JSON](examples.json.zip)
* [TTl](examples.ttl.zip)

**Validation**

Implementers should use the [FHIR Validator](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator) for validating profiles and other resources in this guide.

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/FC-allergies.md

<style>
td, th {
   border: 1px solid black!important;
   max-width:500px;
}
</style>

<div style="border: 1px solid maroon; padding: 10px; background-color: #fffbf7; min-height: 160px;">
  <img src="assets/images/dragon.png" width="150" style="float:left; mix-blend-mode: multiply; margin-right: 10px;" title="Here Be Dragons!" height="150">
  <b>FHIR US Core → C-CDA Mapping</b>
  <p class="warning">
    While multiple vendors participated in CDA → FHIR mappings at a connectathon, only a single vendor (Cerner/Oracle) has participated in the FHIR → CDA mapping. We welcome feedback on these mappings which represent less than a multi-vendor consensus at this time.
  </p>
</div>
<br/>

This page provides a mapping from FHIR to CDA. For the CDA to FHIR mapping, please refer to [Allergies CDA → FHIR](./CF-allergies.html). For guidance on how to read the table below, see [Reading the C-CDA ↔ FHIR Mapping Pages](./mappingGuidance.html)

### FHIR to C-CDA

|FHIR<br/>[AllergyIntolerance](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-allergyintolerance.html#profile)|C-CDA¹<br/>[Allergy Intolerance observation](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-AllergyIntoleranceObservation.html)|Transform Steps|
|:----|:----|:----|
|.identifier|/id|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
|.clinicalStatus|(act parent to observation) ../../statusCode <br/>&<br />**[Allergy Status](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-AllergyStatusObservation.html)**<br/>/entryRelationship/observation[code/@code="33999-4"]/value|[FHIR clinicalStatus → CDA Allergy Status Observation value](./ConceptMap-FC-AllergyStatus.html)<br/>For more information on how status is managed in Allergy Concern Act wrapper, refer to [C-CDA guidance, see 5.2.7.1](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=447)|
|.type<br/>&<br/>.category|/value|[FHIR type → CDA value](ConceptMap-FC-AllergyIntoleranceType.html)<br/>[FHIR category → CDA value](ConceptMap-FC-AllergyIntoleranceCategory.html)|
|.criticality|**[Criticality](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-CriticalityObservation.html)**<br/>/entryRelationship/observation[code/@code="82606-5"]/value|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)<br/>[FHIR criticality → CDA Criticality value](ConceptMap-FC-Criticality.html)|
|.code|/participant/participantRole/playingEntity/code|**Constraint**: When FHIR concept is not a negated concept<br/>[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|.code|/participant/participantRole/playingEntity/code or /value<br/>&<br/>set @negationInd="true"|**Constraint**: When FHIR concept represents general negated concept (e.g. no known allergy)<br/>[FHIR code → CDA No Known Allergy](ConceptMap-FC-NoKnownAllergies.html)<br/>In case where a specific refutation is coded (no latex allergy), use text or a mapped concept.|
|.encounter|/entryRelationship[@typeCode="REFR"]/act/id||
|.onsetDateTime|/effectiveTime/low|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|.onsetPeriod.start|/effectiveTime/low|effectiveTime/high should not be mapped from onsetPeriod|
|.recordedDate|/assignedAuthor/time|These are not necessarily the same author|
|.recorder|/assignedAuthor|[CDA ↔ FHIR Provenance](mappingGuidance.html#cda--fhir-provenance)<br/>Time and author are not necessarily the same|
|**[Annotation](https://hl7.org/fhir/datatypes.html#Annotation)**<br/>.note|**[Comment Activity](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-CommentActivity.html)**<br/>/entryRelationship/act[code/@code="48767-8"]/text||
|.reaction.manifestation|**[Reaction](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ReactionObservation.html)**<br/>/entryRelationship[@typeCode="MFST"]/observation/value|Both use SNOMED clinical findings with minor valueSet definition differences
|.reaction.onset|/effectiveTime/low|Constraint: This should only be used in event that AlleryIntolerance.onset was not available|
|.reaction.severity|**[Severity](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-SeverityObservation.html)**<br/>/entryRelationship[@typeCode="MFST"]/observation/entryRelationship/observation[code/@code="SEV"]/value|[FHIR severity → CDA severity value ](ConceptMap-FC-Criticality.html)<br/>This should be nested in CDA within the respective allergic reaction observation|

1\. XPath abbrievated for C-CDA Allergy Intolerance as: <br/> ClinicalDocument/component/structuredBody/component/section[code/@code="48765-2"]/entry/act/entryRelationship/observation

### Illustrative example

#### Links to example content

Note that these mappings have only been implemented by a single vendor to date. 
* [Allergy FHIR example](./AllergyIntolerance-FC-allergy.html)
* [Allergy CDA example](./Binary-FC-allergy.html)

### Prior work and Expanded Spreadsheets

As reviewed in the methodology, a more comprehensive review was performed via spreadsheets. These spreadsheets have been consolidated and further revised in the tables above but are provided for [reference here](https://github.com/HL7/ccda-on-fhir/blob/master/mappings/FC/FHIR-CCDA%20Allergy.csv) 

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/FC-encounters.md

*Coming soon...*

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/FC-immunizations.md

<style>
td, th {
   border: 1px solid black!important;
}
</style>

<div style="border: 1px solid maroon; padding: 10px; background-color: #fffbf7; min-height: 160px;">
  <img src="assets/images/dragon.png" width="150" style="float:left; mix-blend-mode: multiply; margin-right: 10px;" title="Here Be Dragons!" height="150">
  <b>FHIR US Core → C-CDA Mapping</b>
  <p class="warning">
    While multiple vendors participated in CDA → FHIR mappings at a connectathon, only a single vendor (Cerner/Oracle) has participated in the FHIR → CDA mapping. We welcome feedback on these mappings which represent less than a multi-vendor consensus at this time.
  </p>
</div>
<br/>

This page provides a mapping from FHIR to CDA. For the CDA to FHIR mapping, please refer to [Immunizations CDA → FHIR](./CF-immunizations.html). For guidance on how to read the table below, see [Reading the C-CDA ↔ FHIR Mapping Pages](./mappingGuidance.html)

### FHIR to C-CDA

|FHIR<br/>[Immunization](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-immunization.html#profile)|C-CDA¹<br/>[Immunization Activity substanceAdministration](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ImmunizationActivity.html)|Transform Steps|
|:----|:----|:----|
||/@moodCode="EVN"|All FHIR Immunizations should be set to "EVN" moodCode
|.identifier|/id|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
|.status|/statusCode|**Constraint** when .status.value="not-done"<br/>Set negationInd to true in CDA observation|
|.status|/statusCode|**Constraint** all other values of .status<br/>[FHIR status → CDA statusCode](ConceptMap-FC-ImmunizationStatus.html)|
|.statusReason|**[Immunization Refusal Reason](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ImmunizationRefusalReason.html)**<br/>/entryRelationship[@typeCode="RSON"]/observation/code|[FHIR statusReason → CDA refusal](ConceptMap-FC-ImmunizationRefusal.html)|
|.vaccineCode|/consumable/manufacturedProduct/manufacturedMaterial/code|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|.primarySource||This element has no target in CDA
|.occurrenceDateTime|/effectiveTime/@value|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|.manufacturer|/consumable/manufacturedProduct/manufacturerOrganization||
|.lotNumber|/consumable/manufacturedMaterial/lotNumberText||
|.site|/approachSiteCode|[FHIR site → CDA approachSiteCode](ConceptMap-FC-ImmunizationSite.html)
|.route|/routeCode|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|.doseQuantity|/doseQuantity|[CDA ↔ FHIR Quantity](mappingGuidance.html#cda--fhir-quantity)|
|.performer.actor|/performer|**Constraint** when .performer.function="AP"<br/>[CDA ↔ FHIR Provenance](mappingGuidance.html#cda--fhir-provenance)|
|**[Annotation](https://hl7.org/fhir/datatypes.html#Annotation)**<br/>.note|**[Comment Activity](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-CommentActivity.html)**<br/>/entryRelationship/act[code/@code="48767-8"]/text||
|.reasonCode|**[Indication](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-Indication.html)**<br/>/entryRelationship[@typeCode="RSON"]/observation/value||
|.education.documentType|reference/ExternalDocument/code||
|.education.reference|/reference/ExternalDocument/id||
|.reaction.id<br/><br/>|**[Reaction](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ReactionObservation.html)**<br/>/entryRelationship[@typeCode="MFST"]/observation/id|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
|.reaction.date|/**[Reaction](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ReactionObservation.html)**<br/>/entryRelationship[@typeCode="MFST"]/observation/effectiveTime|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|.reaction.detail.valueCodeableConcept|**[Reaction](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ReactionObservation.html)**<br/>/entryRelationship[@typeCode="MFST"]/observation/value|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|.doseNumber[x].doseNumberPositiveInt|/repeatNumber||

1\. XPath abbrievated for C-CDA Immunization Activity as: <br/> ClinicalDocument/component/structuredBody/component/section[code/@code="11369-6"]/entry/substanceAdministration

### Illustrative example

#### Links to example content

Note that these mappings have only been implemented by a single vendor to date. 
* [Immuniztion FHIR example](./Immunization-FC-immunization.html)
* [Immuniztion CDA example](./Binary-FC-immunization.html)

### Prior work and Expanded Spreadsheets

As reviewed in the methodology, a more comprehensive review was performed via spreadsheets. These spreadsheets have been consolidated and further revised in the tables above but are provided for [reference here](https://github.com/HL7/ccda-on-fhir/blob/master/mappings/FC/FHIR-CCDA%20Immunization.csv)

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/FC-index.md

### FHIR → C-CDA 
<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<blockquote class="stu-note">
		<b>Planned Future Maps</b>
		<p>The following represents the initial maps developed as part of the project team's plan to start with PAMI+ and then expand into other clinical domains. For more information, please see <a href="https://confluence.hl7.org/display/CGP/C-CDA+to+and+from+US+Core+Mapping">project page on Confluence</a> </p>
	</blockquote>
</div>

#### Available Maps
- [Allergies](FC-allergies.html)
- [Immunizations](FC-immunizations.html)
- [Medications](FC-medications.html)
- [Patient](FC-patient.html)
- [Problems](FC-problems.html)
- [Procedures](FC-procedures.html)
- [Vitals](FC-vitals.html)

Please refer to [mapping background](mappingBackground.html) for more information how maps were selected and developed.


---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/FC-medications.md

<style>
td, th {
   border: 1px solid black!important;
}
</style>

<div style="border: 1px solid maroon; padding: 10px; background-color: #fffbf7; min-height: 160px;">
  <img src="assets/images/dragon.png" width="150" style="float:left; mix-blend-mode: multiply; margin-right: 10px;" title="Here Be Dragons!" height="150">
  <b>FHIR US Core → C-CDA Mapping</b>
  <p class="warning">
    While multiple vendors participated in CDA → FHIR mappings at a connectathon, only a single vendor (Cerner/Oracle) has participated in the FHIR → CDA mapping. We welcome feedback on these mappings which represent less than a multi-vendor consensus at this time.
  </p>
</div>
<br/>

This page provides a mapping from FHIR to CDA. For the CDA to FHIR mapping, please refer to [Medications CDA → FHIR](./CF-medications.html). For guidance on how to read the table below, see [Reading the C-CDA ↔ FHIR Mapping Pages](./mappingGuidance.html).

See guidance on timing mappings on [Medications CDA → FHIR](./CF-medications.html).

### FHIR to C-CDA

|FHIR<br>[MedicationRequest](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-medicationrequest.html)|C-CDA¹<br>[Medication Activity substanceAdministration](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-MedicationActivity.html)|Transform Steps|
|:----|:----|:----|
|.identifier|/id|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
|.status|/status|[FHIR status → CDA statusCode](ConceptMap-FC-MedicationStatus.html)|
|.category|/code|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)<br/>code is not generally used in CDA|
|.doNotPerform|/@negationInd||
|.medicationCodeableConcept|/consumable/manufacturedProduct/manufacturedMaterial/code|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|.medicationReference|(see above)|CDA embeds medication codes directly inside medication activity|
|.authoredOn|/author/time|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|.requester|/assignedAuthor|[CDA ↔ FHIR Provenance](mappingGuidance.html#cda--fhir-provenance)|
|.performer|/performer|[CDA ↔ FHIR Provenance](mappingGuidance.html#cda--fhir-provenance)|
|.reasonCode|**[Indication](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-Indication.html)**<br/>/entryRelationship[@typeCode="RSON"]/observation/value|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|**[Annotation](https://hl7.org/fhir/datatypes.html#Annotation)**<br/>.note|**[Comment Activity](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-CommentActivity.html)**<br/>/entryRelationship/act[code/@code="48767-8"]/text||
|.dosageInstruction.text<br/>&<br/>.dosageInstruction.patientInstruction|**[Free text sig](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-MedicationFreeTextSig.html)**<br/>/entryRelationship/substanceAdministration[code/@code="76662-6"]/text||
|.dosageInstruction.additionalInstruction|**[Instruction](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-Instruction.html)**<br/>/entryRelationship[@typeCode="SUBJ"]/act/code|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|.dosageInstruction.timing.repeat.boundsPeriod.start|effectiveTime[1]/low|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)<br/>**Note:** in XPath, `[1]` is the first instance; there is no `[0]` in XPath.|
|.dosageInstruction.timing.repeat.boundsPeriod.end|effectiveTime[1]/high|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|.dosageInstruction.timing.repeat.frequency<br/>&<br/>.dosageInstruction.timing.repeat.period<br/>&<br/>.dosageInstruction.timing.repeat.periodUnit<br/>|/effectiveTime[2]/...<br/>/@operator='A'<br/>/@xsi:type='PIVL_TS'<br/>/@institutionSpecified<br/>/period|Compare:<br/>[C-CDA Common Medication Frequencies](http://cdasearch.hl7.org/examples/view/9588687865c0f945a326364a9449321690c7a7ef) and <br/>[FHIR Timing Data Type](http://hl7.org/fhir/R4/datatypes.html#Timing)|
|.dosageInstruction.timing.repeat.when<br/>&<br/>.dosageInstruction.timing.repeat.offset|/effectiveTime[2]/...<br/>/@operator='A'<br/>/@xsi:type='EIVL_TS'<br/>/event/@code<br/>/offset|FHIR when matches event/@code vocabulary<br />CDA Offset is a PhysicalQuantity, while FHIR is an integer representing minutes.
|.dosageInstruction.site|/approachSiteCode|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|.dosageInstruction.route|/routeCode|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|.dosageInstruction.doseAndRate.doseQuantity|/doseQuantity|[CDA ↔ FHIR Quantity](mappingGuidance.html#cda--fhir-quantity)|
|.dosageInstruction.doseAndRate.rateQuantity|/rateQuantity|[CDA ↔ FHIR Quantity](mappingGuidance.html#cda--fhir-quantity)|
|.dosageInstruction.maxDosePerPeriod|/maxDoseQuantity|[CDA ↔ FHIR Quantity](mappingGuidance.html#cda--fhir-quantity)|

1\. XPath abbrievated for C-CDA Medication Activity as: <br/> ClinicalDocument/component/structuredBody/component/section[code/@code="10160-0"]/entry/substanceAdministration

### Illustrative example

#### Links to example content

Note that these mappings have only been implemented by a single vendor to date. 
* [MedicationRequest FHIR example](./MedicationRequest-FC-medication.html)
* [Medication CDA example](./Binary-FC-medication.html)

### Prior work and Expanded Spreadsheets

As reviewed in the methodology, a more comprehensive review was performed via spreadsheets. These spreadsheets have been consolidated and further revised in the tables above but are provided for [reference here](https://github.com/HL7/ccda-on-fhir/blob/master/mappings/FC/FHIR-CCDA%20MedicationRequest.csv)

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/FC-notes.md

*Coming soon...*

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/FC-patient.md

<style>
td, th {
   border: 1px solid black!important;
}
</style>

<div style="border: 1px solid maroon; padding: 10px; background-color: #fffbf7; min-height: 160px;">
  <img src="assets/images/dragon.png" width="150" style="float:left; mix-blend-mode: multiply; margin-right: 10px;" title="Here Be Dragons!" height="150">
  <b>FHIR US Core → C-CDA Mapping</b>
  <p class="warning">
    While multiple vendors participated in CDA → FHIR mappings at a connectathon, only a single vendor (Cerner/Oracle) has participated in the FHIR → CDA mapping. We welcome feedback on these mappings which represent less than a multi-vendor consensus at this time.
  </p>
</div>
<br/>

This page provides a mapping from FHIR to CDA. For the CDA to FHIR mapping, please refer to [Patient CDA → FHIR](./CF-patient.html). For guidance on how to read the table below, see [Reading the C-CDA ↔ FHIR Mapping Pages](./mappingGuidance.html)

### FHIR to C-CDA

|FHIR<br/>[Patient](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-patient.html#profile)|C-CDA¹<br/>[US Realm Header recordTarget](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-USRealmHeader.html)|Transform Steps|
|:----|:----|:----|
|.extension.extension (race)<br/>url=http://hl7.org/fhir/us/core/STU4/StructureDefinition/us-core-race|/patientRole/patient/raceCode<br/>&<br/>/patientRole/patient/sdtc:raceCode|only one ombCategory extension goes in raceCode; other values go in sdtc:raceCode|
|.extension.extension (ethnicity)<br/>url=http://hl7.org/fhir/us/core/STU4/StructureDefinition/us-core-ethnicity|/patientRole/patient/ethnicGroupCode<br/>&<br/>/patientRole/patient/sdtc:ethnicGroupCode|only one ombCategory extension goes in ethnicGroupCode; other values go in sdtc:ethnicGroupCode|
|.extension.extension (birth sex)<br/>url=http://hl7.org/fhir/us/core/STU4/StructureDefinition/us-core-birthsex|**[Birth Sex](https://www.hl7.org/ccdasearch/templates/2.16.840.1.113883.10.20.22.4.200.html)**|This is not in the header recordTarget in CDA|
|.identifer|/patientRole/id|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
|.name|/patientRole/patient/name|[CDA name ↔ FHIR name ](mappingGuidance.html#fhir-name--cda-name)|
|.telecom|/patientRole/telecom|[CDA telecom ↔ FHIR telecom](mappingGuidance.html#fhir-telecom--cda-telecom)|
|.gender|/patientRole/patient/administrativeGenderCode|[FHIR gender → CDA administrativeGender](ConceptMap-FC-AdministrativeGender.html)|
|.birthdate|/patientRole/patient/birthTime|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|.deceasedBoolean|/patientRole/patient/sdtc:deceasedInd|If true, C-CDA also requires sdtc:deceasedTime to be present. Set its `@nullFlavor="UNK"`
|.deceasedDateTime|/patientRole/patient/sdtc:deceasedTime|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)<br/>When setting deceasedTime to a value, also set sdtc:deceasedInd to true.|
|.address|/patientRole/addr|[CDA addr ↔ FHIR address ](mappingGuidance.html#fhir-address---cda-addr)|
|.maritalStatus|/patientRole/patient/maritalStatus|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|.communication.language|/patientRole/patient/languageCommunication/languageCode||
|.communication.preferred|/patientRole/patient/languageCommunication/preferenceInd||
|.managingOrganization|/patientRole/providerOrganization||

1\. XPath abbrievated for C-CDA US Realm recordTarget as: <br/> ClinicalDocument/recordTarget/

### Illustrative example

#### Links to example content

No examples available (of FHIR to C-CDA) at this time.  

### Prior work and Expanded Spreadsheets

As reviewed in the methodology, a more comprehensive review was performed via spreadsheets. These spreadsheets have been consolidated and further revised in the tables above but are provided for [reference here](https://github.com/HL7/ccda-on-fhir/blob/master/mappings/FC/FHIR-CCDA%20Patient.csv)

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/FC-problems.md

<style>
td, th {
   border: 1px solid black!important;
}
</style>

<div style="border: 1px solid maroon; padding: 10px; background-color: #fffbf7; min-height: 160px;">
  <img src="assets/images/dragon.png" width="150" style="float:left; mix-blend-mode: multiply; margin-right: 10px;" title="Here Be Dragons!" height="150">
  <b>FHIR US Core → C-CDA Mapping</b>
  <p class="warning">
    While multiple vendors participated in CDA → FHIR mappings at a connectathon, only a single vendor (Cerner/Oracle) has participated in the FHIR → CDA mapping. We welcome feedback on these mappings which represent less than a multi-vendor consensus at this time.
  </p>
</div>
<br/>

This page provides a mapping from FHIR to CDA. For the CDA to FHIR mapping, please refer to [Problems CDA → FHIR](./CF-problems.html). For guidance on how to read the table below, see [Reading the C-CDA ↔ FHIR Mapping Pages](./mappingGuidance.html)

### FHIR to C-CDA

|FHIR<br/>[Condition and Health Concern](https://hl7.org/fhir/us/core/StructureDefinition-us-core-condition-problems-health-concerns.html)|C-CDA¹<br/>[Problem observation](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ProblemObservation.html)|Transform Steps|
|:----|:----|:----|
|.identifier|/id|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
|.clinicalStatus|(act parent to observation) ../../statusCode<br/>&<br/>**[Problem Status](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ProblemStatus.html)**<br/>/entryRelationship/observation[code/@code="33999-4"]/value|[FHIR clinicalStatus → CDA Problem Status Observation value](./ConceptMap-FC-ProblemStatus.html)<br/>For more information on how status is managed in Problem Concern Act wrapper, refer to [C-CDA guidance, see 5.2.6.1](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=447)|
|.category|/code<br/>This also affects the C-CDA document section:<br/>**[Problems](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ProblemSection.html)**<br/>**[Health Concerns](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-HealthConcernsSection.html)**<br/>**[Encounters](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-EncountersSection.html)**|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)<br/>[FHIR category → CDA section](ConceptMap-FC-ProblemCategory.html)|
|.code|/value|**Constraint**: When FHIR concept does not represent negated concept<br/>[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|.code|/value<br/>&<br/>set @negationInd="true"|**Constraint**: When FHIR concept represents negated concept|
|.onsetDateTime|/effectiveTime/low|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|.onsetPeriod.start|/effectiveTime/low|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)<br/>effectiveTime/high should not be mapped from onsetPeriod|
|.abatementDateTime|/effectiveTime/high|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|.recordedDate|**[Date of Diagnosis](https://www.hl7.org/ccdasearch/templates/2.16.840.1.113883.10.20.22.4.502.html)**<br/>entryRelationship/act[code/@code="77975-1"]/effectiveTime<br/>&<br/>/assignedAuthor/time|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|.recorder|/assignedAuthor|[CDA ↔ FHIR Provenance](mappingGuidance.html#cda--fhir-provenance)|
|.asserter|/informant|[CDA ↔ FHIR Provenance](mappingGuidance.html#cda--fhir-provenance)|
|**[Annotation](https://hl7.org/fhir/datatypes.html#Annotation)**<br/>.note|**[Comment Activity](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-CommentActivity.html)**<br/>entryRelationship/act[code/@code="48767-8"]/text||

1\. XPath abbrievated for C-CDA Problem observation as: <br/> ClinicalDocument/component/structuredBody/component/section[code/@code="11450-4"]/entry/act/entryRelationship/observation


### Illustrative example

#### Links to example content

Note that these mappings have only been implemented by a single vendor to date. 

* [Condition FHIR example](./Condition-FC-problem.html)
* [Problem CDA example](./Binary-FC-problem.html)

### Prior work and Expanded Spreadsheets

As reviewed in the methodology, a more comprehensive review was performed via spreadsheets. These spreadsheets have been consolidated and further revised in the tables above but are provided for [reference here](https://github.com/HL7/ccda-on-fhir/blob/master/mappings/FC/FHIR-CCDA%20Problem-Condition.csv) 

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/FC-procedures.md

<style>
td, th {
   border: 1px solid black!important;
}
</style>

<div style="border: 1px solid maroon; padding: 10px; background-color: #fffbf7; min-height: 160px;">
  <img src="assets/images/dragon.png" width="150" style="float:left; mix-blend-mode: multiply; margin-right: 10px;" title="Here Be Dragons!" height="150">
  <b>FHIR US Core → C-CDA Mapping</b>
  <p class="warning">
    While multiple vendors participated in CDA → FHIR mappings at a connectathon, only a single vendor (Cerner/Oracle) has participated in the FHIR → CDA mapping. We welcome feedback on these mappings which represent less than a multi-vendor consensus at this time.
  </p>
</div>
<br/>

This page provides a mapping from FHIR to CDA. For the CDA to FHIR mapping, please refer to [Procedures CDA → FHIR](./CF-procedures.html). For guidance on how to read the table below, see [Reading the C-CDA ↔ FHIR Mapping Pages](./mappingGuidance.html). 
<br/>
#### Note on template selection
It also specifies a template for “all interventional, non-interventional, surgical, diagnostic, or therapeutic procedures or treatments pertinent to the patient historically at the time the document is generated."  For this reason, we recommend mapping [FHIR Procedures](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-procedure.html) to [Procedure Activity Procedure](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ProcedureActivityProcedure.html) when using the C-CDA R3/E1 guide for the targeted C-CDA, while guidance on mapping to the other templates when generating an older version C-CDA will be forthcoming.

### FHIR to C-CDA

|FHIR<br/>[Procedure](http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-procedure.html)|C-CDA¹<br/>[Procedure Activity procedure](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ProcedureActivityProcedure.html)|Transform Steps|
|:----|:----|:----|
|.identifier|/id|[CDA id ↔ FHIR identifier](mappingGuidance.html#cda-id--fhir-identifier)|
|.status|/statusCode|[FHIR status → CDA statusCode](./ConceptMap-FC-ProcedureStatus.html)|
|.code|/code|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|.performedDateTime|/effectiveTime/@value|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|.performedPeriod.start|/effectiveTime/low|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|.performedPeriod.end|/effectiveTime/high|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|.performer.actor|/performer|[CDA ↔ FHIR Provenance](mappingGuidance.html#cda--fhir-provenance)|
|.performer.onBehalfOf|/perfomer/assignedEntity/representedOrganization|[CDA ↔ FHIR Provenance](mappingGuidance.html#cda--fhir-provenance)|
|.location|**[Service Delivery Location](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-ServiceDeliveryLocation.html)**<br/>/participant[@typeCode="LOC"]<br/>/participantRole||
|.reasonCode|**[Indication](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-Indication.html)**<br/>/entryRelationship[@typeCode="RSON"]<br/>/observation/value|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|.bodySite|/targetSiteCode|[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|**[Annotation](https://hl7.org/fhir/datatypes.html#Annotation)**<br/>.note|**[Comment Activity](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-CommentActivity.html)**<br/>entryRelationship/act[code@code="48767-8"]/entryRelationship/act/text||

1\. XPath abbrievated for C-CDA Procedure as: <br/> ClinicalDocument/component/structuredBody/component/section[code/@code="47519-4"]/entry/procedure

### Illustrative example

#### Links to example content

No examples available (of FHIR to C-CDA) at this time.  

### Prior work and Expanded Spreadsheets

As reviewed in the methodology, a more comprehensive review was performed via spreadsheets. These spreadsheets have been consolidated and further revised in the tables above but are provided for [reference here](https://github.com/HL7/ccda-on-fhir/blob/master/mappings/FC/FHIR-CCDA%20Procedure.csv) 

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/FC-results.md

*Coming soon...*

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/FC-social.md

*Coming soon...*

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/FC-vitals.md

<style>
td, th {
   border: 1px solid black!important;
}
</style>

This page provides a mapping from FHIR to CDA. For the CDA to FHIR mapping, please refer to [Vitals CDA → FHIR](./CF-vitals.html). For guidance on how to read the table below, see [Reading the FHIR ↔ C-CDA Mapping Pages](./mappingGuidance.html).

FHIR Vitals that are grouped into a panel using the memberOf property are mapped to a CDA Vital Signs Organizer. 

### FHIR Observation Panel to C-CDA Vital Signs Organizer

|FHIR<br/>[Vital Signs Observation](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-vital-signs.html)|C-CDA¹<br/>[Vital SignsOrganizer](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-VitalSignsOrganizer.html)|Transform Steps|
|:----|:----|:----|
|.identifier|/id|[FHIR identifier ↔ CDA id](mappingGuidance.html#cda-id--fhir-identifier)|
|.category = `vital-signs` |||
|.code = `85353-1` ||[CDA coding ↔ FHIR CodeableConcept](mappingGuidance.html#cda-coding--fhir-codeableconcept)|
|.status|/statusCode|[FHIR Observation Status → CDA Result Status](./ConceptMap-FC-ObservationStatus.html)<br/> CDA requires 'completed', which will usually be the case|
|.effectiveDateTime|/effectiveTime|Use value|
|.effectivePeriod|/effectiveTime|Use high and low <br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|.hasMember|component|Reference to each vital sign observation |

### FHIR Observation to C-CDA Vital Signs Observation

|FHIR<br/>[Vital Signs Observation](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-vital-signs.html)|C-CDA¹<br/>[Vital Sign Observation](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-VitalSignObservation.html)|Transform Steps|
|:----|:----|:----|
|.identifier|/id|[FHIR identifier ↔ CDA id](mappingGuidance.html#cda-id--fhir-identifier)|
|.code |/code|[FHIR CodeableConcept ↔ CDA coding ](mappingGuidance.html#fhir-codeableconcept--cda-coding)|
|.status|/statusCode|Set to completed
|.effectiveDateTime|/effectiveTime|Use value
|.effectivePeriod|/effectiveTime|Use high and low <br/>[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)
|.valueQuantity|/value|If not null <br> [FHIR ↔ CDA Quantities](mappingGuidance.html#cda--fhir-quantity)
|.dataAbsentReason|/value@nullFlavor|If value is null<br>[FHIR DataAbsentReason ↔ CDA NullFlavor](ConceptMap-FC-DataAbsentReasonNullFlavor.html)
|.interpretation|/interpretationCode|[FHIR CodeableConcept ↔ CDA coding](mappingGuidance.html#fhir-codeableconcept--cda-coding)|
|.method|/methodCode|[FHIR CodeableConcept ↔ CDA coding](mappingGuidance.html#fhir-codeableconcept--cda-coding)|
|.bodySite|/targetSiteCode|[FHIR CodeableConcept ↔ CDA coding](mappingGuidance.html#fhir-codeableconcept--cda-coding)|



### Illustrative example

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/index.md

{% include stu-note.xml %}

### Overview

Consolidated CDA (C-CDA) is one of the most widely implemented implementation guides for CDA and covers a significant scope of clinical care. Its target of the 'common/essential' elements of healthcare is closely aligned with FHIR's focus on the '80%'. There is significant interest in industry and government in the ability to interoperate between CDA and FHIR and C-CDA is a logical starting point. Implementers and regulators have both expressed an interest in the ability to map between FHIR and C-CDA.

This Implementation Guide (IG) defines a series of FHIR profiles on the Composition resource to represent the various document types in C-CDA and provides an initial mapping of C-CDA and FHIR content. To do the former, this IG profiles Composition for various document types and link the profiles created under the US Core project for any coded entries that would normally be included in C-CDA sections. To have a simpler, more streamlined standard that reuses existing work and focuses on the 80% that implementers actually need in production systems, the resources of US Core represents a portion of the 80% needed for coded entries of CCD, Care Plan & Discharge Summary.

The Composition profiles in this IG do not require coded data in any section. This is a departure from C-CDA, which requires coded data for Problems, Results, Medications, etc. This departure is intentional, as the C-CDA requirement for one or more coded entries in these sections resulted in some very complicated workarounds using nullFlavors to handle the fact that sometimes a patient is not on any medications, or has no current problems. In general, FHIR takes the approach that if something is nullable, it should simply be optional to ease the burden on implementers, thus C-CDA on FHIR does not require any coded entries, but rather uses the "required if known" approach, meaning that if an implementer's system has data for a section that requires data under Meaningful Use, they need to send it, but if they have no data there is no need for a null entry.

### Scope

To represent Consolidated CDA Templates for Clinical Notes (C-CDA) 2.1 templates using FHIR profiles.

This first stage of the project defines all the C-CDA document-level profiles on the Composition resource and contained sections.

Any coded data used by sections will be represented using relevant U.S. Core FHIR profiles where they exist. FHIR profiles defined by other work groups or unconstrained FHIR resources may also be referenced if no appropriate US Core Profile exist.

For further information see the [pdf-based C-CDA specification](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=492), [StructureDefinition C-CDA specification](https://hl7.org/cda/us/ccda/3.0.0/), [original project scope](https://confluence.hl7.org/pages/viewpage.action?pageId=76158360) and [mapping project scope](https://jira.hl7.org/browse/PSS-1811).


### Authors (Composition Profiles, Extensions and CapabilityStatement )

<table>
<thead>
<tr>
<th>Name</th>
<th>Email/URL</th>
</tr>
</thead>
<tbody>
<tr>
<td>HL7 Structured Documents Working Group</td>
<td><a href="http://hl7.org/Special/committees/structure" target="_new">http://hl7.org/Special/committees/structure</a></td>
</tr>
<tr>
<td>Rick Geimer</td>
<td><a href="mailto:rick.geimer@lantanagroup.com">rick.geimer@lantanagroup.com</a></td>
</tr>
<tr>
<td>Sarah Gaunt</td>
<td><a href="mailto:sarah.gaunt@lantanagroup.com">sarah.gaunt@lantanagroup.com</a></td>
</tr>
<tr>
<td>Brett Marquard</td>
<td><a href="mailto:brett@waveoneassociates.com">brett@waveoneassociates.com</a></td>
</tr>
<tr>
<td>Corey Spears</td>
<td><a href="mailto:spears.corey@gmail.com">spears.corey@gmail.com</a></td>
</tr>
<tr>
<td>Meenaxi Gosai</td>
<td><a href="mailto:meenaxi.gosai@lantanagroup.com">meenaxi.gosai@lantanagroup.com</a></td>
</tr>
</tbody>
</table>

### Authors (C-CDA ↔ FHIR Mapping)

<table>
<thead>
<tr>
<th>Name</th>
<th>Email/URL</th>
</tr>
</thead>
<tbody>
<tr>
<td>HL7 Cross Group Projects</td>
<td><a href="http://hl7.org/Special/committees/cgp" target="_new">http://hl7.org/Special/committees/cgp</a></td>
</tr>
<tr>
<td>HL7 Structured Documents Working Group</td>
<td><a href="http://hl7.org/Special/committees/structure" target="_new">http://hl7.org/Special/committees/structure</a></td>
</tr>
<tr>
<td>Jay Lyle</td>
<td><a href="mailto:jay.lyle@jpsys.com">jay.lyle@jpsys.com</a></td>
</tr>
<tr>
<td>John D'Amore</td>
<td><a href="mailto:johnd@moreinformatics.com">johnd@moreinformatics.com</a></td>
</tr>
<tr>
<td>Natalee Agassi</td>
<td><a href="mailto:natalee.agassi@oracle.com">natalee.agassi@oracle.com</a></td>
</tr>
<tr>
<td>Chun Li</td>
<td><a href="mailto:Chun.Li@availity.com">Chun.Li@availity.com</a></td>
</tr>
<tr>
<td>Ken Lord</td>
<td><a href="mailto:klord@mdixinc.com">klord@mdixinc.com</a></td>
</tr>
<tr>
<td>Catherine Hoang</td>
<td><a href="mailto:Catherine.Hoang2@va.gov">Catherine.Hoang2@va.gov</a></td>
</tr>
<tr>
<td>Bill Ormerod</td>
<td><a href="mailto:william.ormerod@oracle.com">william.ormerod@oracle.com</a></td>
</tr>
<tr>
<td>Benjamin Flessner</td>
<td><a href="mailto:benjamin.flessner@availity.com">benjamin.flessner@availity.com</a></td>
</tr>
<tr>
<td>Brett Marquard</td>
<td><a href="mailto:brett@waveoneassociates.com">brett@waveoneassociates.com</a></td>
</tr>
<tr>
<td>Christopher Vitale</td>
<td><a href="mailto:Christopher.Vitale@availity.com">Christopher.Vitale@availity.com</a></td>
</tr>
  <tr>
<td>Sajjad Hussain</td>
<td><a href="mailto:sshussain@google.com">sshussain@google.com</a></td>
</tr>
<tr>
<td>Gene Beyer</td>
<td><a href="mailto:gene.beyer@oracle.com">gene.beyer@oracle.com</a></td>
</tr>
<tr>
<td>Gay Dolin</td>
<td><a href="mailto:gdolin@namasteinformatics.com">gdolin@namasteinformatics.com</a></td>
</tr>
<tr>
<td>Lisa Nelson</td>
<td><a href="mailto:LNelson@advaultinc.com">LNelson@advaultinc.com</a></td>
</tr>
<tr>
<td>Deb Loniewski</td>
<td><a href="mailto:loniewskid@michigan.gov">loniewskid@michigan.gov</a></td>
</tr>

</tbody>
</table>

### Dependencies

{% include dependency-table.xhtml %}

### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### IP Statements

{% include ip-statements.xhtml %}


[Next Page - Background](background.html)


---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/mappingBackground.md

[Consolidated Clinical Document Architecture (C-CDA)](https://hl7.org/cda/us/ccda/) and [Fast Healthcare Interoperability Resources (FHIR) US Core](http://hl7.org/fhir/us/core/STU4/) are two of the most common standards for exchanging clinical data in the United States. This [project's](https://confluence.hl7.org/display/CGP/C-CDA+to+and+from+US+Core+Mapping) goals are to establish HL7 mapping transformation guidance to provide clarity and consistency in translating data between C-CDA and FHIR and between FHIR and C-CDA. 

In our first publication, we focused on the subset of domains that are recognized as the most exchangeable concepts in the industry. This first publication is limited to Problems, Allergies, Medications, Immunizations, Procedures, and Patient (PAMI+) domains. Acknowledging the various stages of maturity for each domain, we included the entire work for these concepts. This project was scoped independently of the document-level profiles developed in earlier versions of this guide.  

<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<blockquote class="stu-note">
		<b>Mapping Consensus</b>
		<p>Note that C-CDA → FHIR mappings had a significant exposure to achieve multi-vendor consensus. This has included several FHIR Connectathons (https://confluence.hl7.org/display/CGP/Scope+and+Schedule/) and regular weekly engagements. Vendors and organizations participating in this process include:
    <ul>
      <li>Cerner (Oracle)</li>
      <li>Diameter Health (Availity)</li>
      <li>Google</li>
      <li>MDIX</li>
      <li>Redox</li>
      <li>Smile Digital Health</li>
      <li>Veterans Administration (participation only in semantic and logical mappings)</li>
    </ul>
    </p>
    <p>
    <b>The FHIR → C-CDA mappings have only been piloted by a single company (Cerner/Oracle) at this time and have not achieved multi-vendor consensus or connectathon testing yet.</b>
    </p>
	</blockquote>
</div>

### Transformation Challenges and Limitations 

Bi-directional automated transform is possible in constrained use cases but is not lossless due to varying flexibility and expressiveness in the standards. Use of extensions may mitigate the loss of information in transformation but may not be included in this guide. The CDA content is scoped by C-CDA R2.1 and the C-CDA Companion Guide R2, FHIR content by US Core R4, and, by implication, US Core Data for Interoperability (USCDI). 

Our roadmap prioritizes USCDI, so we strive to map items in the respective standards that support USCDI. As elements are added to new versions of USCDI, we may map them in advance, especially when we are already engaged in a related domain. We also may omit or defer maps for elements that are both difficult and of dubious use, i.e., items that are not in USCDI and are deprecated or omitted from later editions of either specification.

We employed several tactics to meet our goals. Standards developers drafted maps based on the respective specifications, and these were reviewed by stakeholders both offline and at public, regularly scheduled meetings. These meetings included implementors, terminologists, regulatory and public health representatives, and strategists, who engaged in realignment, consensus-seeking, and reformatting of the maps for a variety of audiences. Difficult questions were escalated to the work groups responsible for the specifications. Issues and their resolutions were logged in the publicly accessible project site.

In addition, the project team employed the example-based approach through Connectathons with vendors and experts in the standards community. The approach involves sharing inbound examples among the vendors, comparing the outbound artifacts generated by these vendors, and discussing with the group to achieve alignment in best practice recommendations. Our team has been focused on the generated artifacts, regardless of the transformation technologies, so any vendor is empowered to achieve the same transformation results. Note that, to date, the Connectathons have addresses only the CDA-to-FHIR cases, though two implementers have provided feedback on the FHIR-to-CDA cases.

By establishing the HL7 mapping transformation guidance, the project provides clarity and consistency in translating data between C-CDA and FHIR. This clarity and consistency are critical to ensure interoperability and communication across different healthcare systems, devices, applications and ensure accurate public reporting and analytics. Ultimately, consistent transforms between standards reduces amount of the duplicated patient data artifacts and lead to better patient care and improved healthcare outcomes. In addition, this work clearly identifies elements where divergent assumptions impede reliably correct and unambiguous translation. These elements may present opportunities for refining the standards.


To access the mappings, click below: 
- [C-CDA → FHIR](CF-index.html)
- [FHIR → C-CDA](FC-index.html)


---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/mappingChangelog.md

### 2.0.0 (Current STU Ballot)
Though feedback is welcome on any part of the IG, only changed content may be voted upon during an STU ballot. The following is a high-level list of changes since version 1.2.0 STU1.

**New Resources / Guidance**
- [C-CDA → FHIR Encounters](CF-encounters.html)
- [C-CDA → FHIR Notes](CF-notes.html)
- [C-CDA → FHIR Participation](CF-participations.html)
- [C-CDA → FHIR Results](CF-results.html)
- [C-CDA → FHIR Social History](CF-social.html)
- [C-CDA → FHIR Vitals](CF-vitals.html)
- [FHIR → C-CDA Vitals](FC-vitals.html)
- [GeneralGuidance](mappingGuidance.html)
   - [Missing Maps](mappingGuidance.html#missing-maps)
   - [FHIR Code → CDA Coding](mappingGuidance.html#fhir-code--cda-coding)
   - [Ranges of Physical Quantities](mappingGuidance.html#ranges-of-physical-quantities)
   - [Comment → Annotation](mappingGuidance.html#comment--annotation)

**Updated Mappings**

During the 2023 & 2024 connectathons, several mappings were enhanced. These updates addressed gaps for fields required by C-CDA or USCDI and included non-controversial mappings. For guidance on handling unmapped fields, refer to the [Missing Maps](mappingGuidance.html#missing-maps) section.
- [C-CDA → FHIR Medications](CF-medications.html) - Added `approachSiteCode`, `maxDoseQuantity`, `administrationUnitCode`, `manufacturerOrganization`, `Drug Vehicle`, and`Supply`.
- [C-CDA → FHIR Patient](CF-patient.html) - Added guidance for `raceCode/originalText` as well as mappings for `religiousAffiliationCode`, `guardian`, `birthPlace`,  `languageCommunication/modeCode`, `languageCommunication/proficiencyLevelCode`, and `providerOrganization`.
- [C-CDA → Probelms](CF-problems.html) - Added `Age Observation` and `Supporting Observations (e.g. Assessment Scale Observation)`.

Additionally, all highlighted examples have been converted to inline HTML to facilitate searching, resizing, and copy-pasting.

### 1.2.0 STU 1 (First Mapping Ballot)
- Mapping Background
- Bidirectional mappings for the following content:
  - Allergies
  - Immunizations
  - Medications
  - Patient
  - Problems
  - Procedures
- Structural Guidance
  - Identifiers
  - Time/Dates
  - Coding/CodeableConcept
  - Quantity
  - Provenance (high-level)
  - Name/Address/Telecom
  - Missing Data
  - Narrative Text

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/mappingGuidance.md

<style>
td, th {
   border: 1px solid black!important;
}
</style>

### Reading the C-CDA ↔ FHIR Mapping Tables 

#### How to Read Mapping Tables and Transform Steps? 

The header row of the mapping table provides links to the respective profiles in FHIR (e.g. **[US Core AllergyIntolerance](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-allergyintolerance.html)**) and templates in C-CDA (e.g. **[Allergy Intolerance observation](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-AllergyIntoleranceObservation.html)**)and specifies the "base" that each of the rows will build on.  All FHIR elements use a simplified dot notation and the CDA elements use simplified slash notation. Always use the underlying standards, provided via header row links, to ensure conformance when building FHIR resources or C-CDA clinical documents. 

Rather than repeating cardinality, conformance, and other criteria from FHIR Resources or a C-CDA templates defined outside this implementaiton guide, external references are shown in tables as bold hyperlinks (e.g. **[US Core Patient](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-patient.html)** or **[C-CDA US Realm Header](https://hl7.org/cda/us/ccda/3.0.0/StructureDefinition-USRealmHeader.html)**). Unbolded links refer to guidance contained within this guide (e.g. [CDA ↔ FHIR Name, Address, and Telecom mapping](mappingGuidance.html#name-address-telecom)). When criteria for selecting XML elements from C-CDA is required, you will see **[XPath](https://en.wikipedia.org/wiki/XPath)** notation with the respective criteria within brackets (e.g. /entryRelationship[@typeCode="MSFT"]).


The "Transform Steps" column of the table will provide guidance for mapping content between C-CDA and FHIR, those steps will be listed in the following order: 

1. **Constraint (labeled in bold)**: Only perform the action when this constraint is fulfilled
2. **Structural Guidance (Bidirectional guidance shown as ↔)**: Generalized narrative guidance on structural transform between CDA and FHIR elements. This links to sections on this current page
3. **ConceptMap (Terminology mapping direction shown as →)**: Link to a computable map between CDA and FHIR vocabularies. This links to [conceptMaps developed in this guide](conceptMaps.html)
4. **Notes (no label)**: Other notes specific to this element mapping


#### What Examples are Included?

Examples for C-CDA to FHIR transforms are provided based on a consensus of various vendors performing mappings. All vendors received the sample input (e.g. C-CDA Document) and generated output (e.g. FHIR Resource) which were then iterated through group discussion to a consensus. For FHIR to C-CDA, a single vendor provided examples which are included. 

The highlighted output images were created using an [open source tool for C-CDA ↔ FHIR Mapping](https://github.com/jddamore/cda-fhir-compare) developed as part of this project.  

#### Missing Maps

If you have data in an input artifact that is defined in the source specification and for which no map is specified here, that means that this team did not find a target for which we could build consensus. In most cases, this means that the data is unusual enough that the target specification did not address it (e.g., treatments for allergy reactions, which would probably be reported in the Problems or Procedures section rather than the Allergies section). In these cases, the team felt that converging on one design from the many solution possible patterns was not an optimal investment of resources. If readers identify elements for which this seems insufficient, they should comment.

### CDA id ↔ FHIR identifier

Identifiers in both FHIR and CDA can divide the identifier value from its namespace: FHIR as the identifier.system and CDA as the id.root. In many cases, this correspondence works well.

However, the FHIR system can be any URI, including OIDs & UUIDs as well as URLs. CDA roots must be UIDs, which consist of OIDs and UUIDs only. CDA roots can often be used as FHIR systems, but FHIR systems must often be translated. In some cases, the URI has a registered equivalent OID, for example, an identifier with a FHIR system of http://hl7.org/fhir/sid/us-ssn can be represented with a CDA root of 2.16.840.1.113883.4.1.

If there is no such OID, and if the FHIR identifier is a URL, we can use the URL specification itself as the system, and that specification - urn:ietf:rfc:3986 - has a registered OID equivalent, 2.16.840.1.113883.4.873. The FHIR identifier.value can be appended to the system for the CDA extension. These ids can be represented as below.

Cases where the FHIR system uses a scheme with no OID present a problem. The UID type is primitive, represented only as an XML attribute, and it cannot have a null flavor. One solution may be to generate a UUID, but expectations around the UUID's persistence and recognizability may vary.

#### CDA id → FHIR Identifier with Example Mapping

|Case|Approach|CDA id@root|CDA id@extension|identifier.system|identifier.value|
|:--|:--|:--|:--|:--|:--|
|URL exists|translate|2.16.840.1.113883.4.1|123-45-6789|http://hl7.org/fhir/sid/us-ssn|123-45-6789
|No URL exists|use OID|2.16.840.1.113883.4.500|12345V7890|urn:oid:2.16.840.1.113883.4.500|12345V7890
|No URL exists and no extension<sup>1</sup>|use URI system, prepend with urn:oid:|2.16.840.1.123.4.50.123456789||urn:ietf:rfc:3986|urn:oid:2.16.840.1.123.4.50.123456789
|UUID-only|use URI system, prepend with urn:uuid:|67265ED2-35BB-43F8-B9DE-91C5935625E0<sup>2</sup>||urn:ietf:rfc:3986|urn:uuid:67265ed2-35bb-43f8-b9de-91c5935625e0<sup>2</sup>
|UUID with extension<sup>3</sup>|use UUID, prepend value|67265ED2-35BB-43F8-B9DE-91C5935625E0|abcd|urn:uuid:67265ed2-35bb-43f8-b9de-91c5935625e0|abcd
|Extension-only|only set value||Z1124||Z1124
|Root = URI OID, Value = URL|split value on /|2.16.840.1.113883.4.873<sup>4</sup>|http://myorg.com/patient/1234|http://myorg.com/patient|1234
|Root = URI OID, Value = URN|split value on :|2.16.840.1.113883.4.873<sup>4</sup>|urn:myNID:myOrg:Z3321|urn:myNID:myOrg|Z3321

1. This approach should not be used for known identifier systems like SSN or NPI. Even if there is no nullFlavor, sending the system OID as a value is inappropriate.
2. UUIDs from CDA are uppercase (per Abstract Datatypes 2.1.5.1); UUIDs from FHIR are lowercase (per [FHIR uri Datatype](https://hl7.org/fhir/R4/datatypes.html#uri)). Transform case when converting.
3. UUID's are unique by themselves and rarely have extensions, so this scenario is rare.
4. This is the URN OID equivalent of urn:ietf:rfc:3598. These examples are the reverse of the concatenation example listed below.

If a CDA id contains a `@nullFlavor` (or a known coding system such as SSN or NPI with no extension), a FHIR Identifier may be created using a data-absent-reason extension explaining the missing data. If the CDA id has a `@root`, place the extension on the `Identifier.value` element (for example, to indicate an unknown NPI); if the CDA id has only a `@nullFlavor`, the extension may be placed on the Identifier element itself.

#### FHIR Identifier → CDA id with Example Mapping

|Case|Approach|identifier.system|identifier.value|CDA id@root|CDA id@extension|
|:--|:--|:--|:--|:--|:--|
|OID exists|translate|http://hl7.org/fhir/sid/us-ssn|123-45-6789|	2.16.840.1.113883.4.1|123-45-6789
|OID value|use OID as root|urn:ietf:rfc:3986|urn:oid:2.16.840.1.123.4.50.123456789|2.16.840.1.123.4.50.123456789|
|UUID value|use UUID as root|urn:ietf:rfc:3986|urn:uuid:67265ed2-35bb-43f8-b9de-91c5935625e0|67265ED2-35BB-43F8-B9DE-91C5935625E0
|No OID exists|concatenate; use URL specification URI for root|http://www.myOrg.com/patients|123456789|2.16.840.1.113883.4.873 <br/> (OID for urn:ietf:rfc:3986)|http://www.myOrg.com/patients/123456789
|No OID exists|concatenate; use URL specification URI for root|urn:myNID:myOrganization|123456789|2.16.840.1.113883.4.873|urn:myNID:myOrganization:123456789
|OID in system|remove prefix|urn:oid:2.16.840.1.113883.4.500|12345V7890|2.16.840.1.113883.4.500|12345V7890
|One-value pattern|introspect steward organization OID||123456789|2.16.840.1.113883.4.349|123456789

In some cases, a CDA template requires an id, and the source FHIR resource may not have an identifier. In these cases, use of nullFlavor or UUID generation approach may be reasonable options.

#### FHIR ids

FHIR ids (i.e. resource ids and element ids) are strings: they have no system. We propose not preserving them. They could be used in II.extension but we have no way to identify a root. If someone can ascertain a reliable, repeatable way to do that, we might be able to keep the id.

### CDA ↔ FHIR Time/Dates

CDA timestamp values are based on a pattern of YYYYMMDDHHmmss+zzzz and [FHIR dateTime values](https://hl7.org/fhir/datatypes.html#dateTime) are based on a YYYY-MM-DDThh:mm:ss+zz:zz. Partial expressions (e.g. 202305 for CDA or 2023-05 for FHIR) are allowed in both standards. 

To convert between the standards, systems should deploy programming logic that converts formats and preserves the level of precision. For example, "20230531" from CDA would become "2023-05-31" in FHIR (not 2023-05-31T00:00:00+00:00). Additional examples below: 

|CDA Date Time|FHIR Date Time|Notes|
|:-----|:-----|:-------------|
|2023|2023|
|202305|2023-05|
|20230531|2023-05-31|
|202305312205-0500|2023-05-31T22:05-05:00|Timezone offset should be preserved

Note that in C-CDA, timezone offset is a SHOULD, while in FHIR, time zone offset is required when more specific than the day. There may be instances where a CDA date-time value omits a time zone offset and other data from the document may be necessary to populate FHIR dateTime requirements.

The following are possible approaches to map CDA timestamps without offset to a FHIR dateTime or instant datatype. Selecting an approach depends on various factors including the criticality of the data, the age of the document, and the level of information the transformation process has about the location where the particular element was recorded.

- Omit the time portion of the date entirely, optionally sending the time as an extension or use the [Uncertain period  extension](http://hl7.org/fhir/extensions/StructureDefinition-uncertainPeriod.html)
  - Note - this only works for FHIR fields with a dateTime datatype; the instant datatype must be precise to the second
- Use the same offset as a different timestamp within the same entry or section (or ClinicalDocument/effectiveTime)
- Use contextual knowledge of the source document's location (e.g. if the document came from a health system serving only New England and the date was in December, the offset is likely "-05:00")
- Default the offset to 00:00

Beware that any approach which manufactures an offset could have clinical implications, but this is likely less critical the older (and thus, more likely to be missing offsets) the document is.

#### Structured types

Some CDA temporal fields can be either a single point-in-time or an interval range. When mapped to a FHIR dateTime or instant datatype, the value should be taken from either @value or low/@value. If mapped to a FHIR period, effectiveTime/low maps to period.start and effectiveTime/high maps to period.end.

### CDA Coding ↔ FHIR CodeableConcept

The structure for coding in CDA and FHIR are fundamentally different. CDA  employs a mechanism (xsi:type [CD](https://hl7.org/cda/stds/core/2.0.0-sd-snapshot1/StructureDefinition-CD.html) or [CE](https://hl7.org/cda/stds/core/2.0.0-sd-snapshot1/StructureDefinition-CD.html)) where the code is included in the element and then originalText and translations elements may be provided as child elements. In FHIR, [CodeableConcept](http://hl7.org/fhir/datatypes.html#codeableconcept) places all codes in a coding list with a separate element for the text representation. 

Both C-CDA and FHIR stipulate that `display`/`@displayName` represents one of the display strings defined for that code by the code system. If a source contains other text, the transforming party may choose to send the system value in display, put that original value in `text`/`<originalText>` and put the system value in display, or simply send the source value.

#### CDA Coding → FHIR CodeableConcept

|CDA Property|FHIR Target|Notes|
|:-----|:-----|:-------------|
|@code|coding.code||
|@codeSystem|coding.system|Requires [mapping OID → URI](mappingGuidance.html#mapping-oid--uri) or adding `urn:oid:` prefix|
|@displayName|coding.display|
|originalText|text|CDA references must be resolved since [text](http://hl7.org/fhir/datatypes-definitions.html#CodeableConcept.text) is a string in FHIR|
|translation@code|coding.code||
|translation@codeSystem|coding.system|Requires [mapping OID → URI](mappingGuidance.html#mapping-oid--uri) or adding `urn:oid:` prefix|
|translation@displayName|coding.display|

#### FHIR CodeableConcept → CDA Coding

In addition to the context of the previous section, CDA often requires elements to be present but the usage of a null value (@nullFlavor) is allowed. Generally when a CDA element is required (i.e. SHALL [1..1]), implementers will need to do one of the following when converting data into CDA: 
- If the data fulfills the target valueset, use the code and translate system
- If the data can be mapped into the target valueset, use a mapping and the translated system
- When the above is not possible:
  - If you have coded data and CDA nullFlavor is allowed, use "OTH" and put the source data in translation and provide originalText if possible. Note that [CD](https://hl7.org/cda/stds/core/2.0.0-sd-snapshot1/StructureDefinition-CD.html) and [CE](https://hl7.org/cda/stds/core/2.0.0-sd-snapshot1/StructureDefinition-CD.html) CDA elements generally allow translation and originalText. 
  - If you have missing data with [data-absent-reason](https://hl7.org/fhir/extension-data-absent-reason.html), use a [mapped nullFlavor](ConceptMap-FC-DataAbsentReasonNullFlavor.html) if allowed. If not allowed, find the best match in the permitted valueset. 
  - If you have missing data without [data-absent-reason](https://hl7.org/fhir/extension-data-absent-reason.html), select a nullFlavor if allowed. If not allowed, find the best match in the permitted valueset. 

|FHIR Property|CDA Target|Notes|
|:-----|:-----|:-------------|
|coding.code|@code<br/>or<br/>translation@code|The criteria for mapping to @code varies by valueset binding within CDA templates. When no coding.code matches the target valueset, the @code should be omitted and @nullFlavor="OTH" used placing all coding as translation elements|
|coding.display|coding.displayName<br/>or<br/>translation@displayName|
|coding.system|@codeSystem<br/>or<br/>translation@codeSystem|Requires [URI → OID mapping](mappingGuidance.html#mapping-oid--uri) or removing `urn:oid:` prefix|
|text|originalText|

Note that C-CDA sometimes requires a code from a specific system in the root of a CD and permits others in the translation

#### FHIR Code → CDA Coding

Both CDA and FHIR employ a hierarchy of simpler types and more complex types that re-use the simpler ones. In some cases, a simpler type on one side will map to a more complex one on the other. Where the complexity supports metadata, these maps are essentially the same as the complex-to-complex maps (Coding & CodeableConcept, above). In a few cases, a complex type supports representing a simple source where a simple target would have failed.

|FHIR Property|CDA Target|Notes|
|:-----|:-----|:-------------|
|code|originalText|If the CDA element is mapped to a value set that has no translation for the FHIR value, the FHIR value can be placed in orginalText. This does not satisfy CDA terminology bindings, should they exist.|


#### Mapping OID ↔ URI

FHIR requires that certain terminologies use a specific uniform resource identifier (URI) while CDA always uses object identifiers (OIDs) for codeSystems. This means: 
  - For CDA → FHIR mapping
    - Translation to URIs is required where possible. One source of translations is available [in FHIR terminologies](http://hl7.org/fhir/terminologies-systems.html) which also includes information about other sources of translation.
    - For OIDs that have no URI equivalent is known, add the `urn:oid:` prefix to OID
  - For FHIR → CDA mapping
     - Translation of URIs to OIDs is always required for FHIR → CDA mapping
     - Remove `urn:oid:` prefix for OIDs

Two example are shown in the table below. Since LOINC is a terminology with a defined URI in FHIR, it is not allowed to add `urn:oid:` when mapping from CDA (~~urn:oid:2.16.840.1.113883.6.1~~). This is allowed, however, for other terminologies where no URI is known. 

|CDA @codeSystem|FHIR coding.system|
|:----|:----|
|2.16.840.1.113883.6.1|http://loinc.org|
|2.16.840.1.113883.4.123456789|urn:oid:2.16.840.1.113883.4.123456789|

Additional guidance on [FHIR terminologies available here](http://hl7.org/fhir/terminologies-systems.html).

#### OriginalText

The `<originalText>` element in CDA can contain mixed XML content or a reference to a portion of the narrative. When converting to a FHIR data type that contains a text field, like [CodeableConcept](http://hl7.org/fhir/datatypes.html#codeableconcept), this is a direct map. For other cases, the [originalText extension](http://hl7.org/fhir/R4/extension-originaltext.html) may be used to convey this information. In either instance, the CDA narrative must be de-referenced, any markup removed, and stored as plain text into `CodeableConcept.text` or the originalText's `.valueString`. 

FHIR also includes a [narrativeLink extension](http://hl7.org/fhir/R4/extension-narrativelink.html) which functions similarly to the `<reference value="#...">` attribute underneath originalText. If the section or resource narrative has been converted to FHIR (see [Narrative Text](#narrative-text)), this extension can be added to indicate the portion of narrative corresponding to the extended FHIR field.

### CDA ↔ FHIR Quantity

CDA and FHIR have similar quantity data types. Both contain a numeric `value`, but CDA contains a single `unit` attribute which must be a [UCUM (Unified Code for Units of Measure)](https://ucum.org/) code, while FHIR contains a free-text `unit` field and a pair of fields, `code` and `system`, which together can store a UCUM value.

When mapping from CDA to FHIR, the unit is already UCUM, so it can be represented in both the `code` and `value` fields:

| CDA Physical Quantity (PQ) &nbsp;&nbsp;&nbsp;&nbsp;  | FHIR  Quantity   |
|---------|---------------------------------------|
| @value  | .value                                |
| @unit   | .code<br>.system = `http://unitsofmeasure.org`<br>(and optionally .unit)           |

When mapping from FHIR to CDA, if the system is `http://unitsofmeasure.org`, the code can map directly to CDA's `@value`. But if there is no `code` or `system`, or the `system` is something besides UCUM, the `unit` can only be placed in CDA's `@unit` after ensuring it is a valid UCUM unit. If the unit cannot be converted to UCUM, then the `<translation>` element available on CDA's PQ data type can be used, as demonstrated in the C-CDA Example Task Force's [Results Unit Non-UCUM example](https://cdasearch.hl7.org/examples/view/Results/Results%20Unit%20Non-UCUM). The FHIR `unit` value can be placed in `translation/originalText`, and the `code` and `system` can be placed in the translation's `@code` and `@codeSystem` attributes (if the [URI can be mapped to an OID](#mapping-oid--uri)).

<table>
<tr><th>Example of Non-UCUM FHIR Quantity</th><th>CDA Physical Quantity with Translation</th></tr>
<tr><td>
<div markdown="1">
{% highlight json %}
"quantity": {
  "value": 30,
  "unit": "each",
  "code": "EA",
  "system": "http://terminology.hl7.org/CodeSystem/standardBillingUnit"
}
{% endhighlight %}
</div>

</td><td>
<div markdown="1">
{% highlight xml %}
<!-- This could also be used in other places like substanceAdministration/doseQuantity -->
<value xsi:type="PQ" nullFlavor="OTH">
  <translation value="30" code="EA" codeSystem="2.16.840.1.113883.2.13">
    <originalText>each</originalText>
  </translation>
</value>
{% endhighlight %}

(Realistically, this could also just map to the standard UCUM value of "1")
</div>
</td></tr>
<tr><td>
<div markdown="1">
{% highlight json %}
"quantity": {
  "value": 25,
  "unit": "customUnits"
}
{% endhighlight %}
</div>

</td><td>
<div markdown="1">
{% highlight xml %}
<value xsi:type="PQ" nullFlavor="OTH">
  <translation value="25" nullFlavor="OTH">
    <originalText>customUnits</originalText>
  </translation>
</value>
{% endhighlight %}
</div>
</td></tr>
</table>

UCUM also provides the ability to include arbitrary units within a set of curly brackets (e.g. `{INR}`). No specific guidance on the use of curly brackets in unit translation is provided in this publication, however additional guidance on UCUM arbitrary units is [available here](https://ucum.org/ucum#section-Arbitrary-Units).

#### Ranges of Physical Quantities
CDA conveys ranges of values using the `IVL_PQ` data type. The `<low>` and `<high>` elements are normal Physical Quantity (PQ) elements with an additional `@inclusive` attribute. When this is present and set to `"false"`, the value of the boundary is not included in the range. The default value of this attribute is `"true"`, so regardless of whether it is absent or set to `"true"`, the value of the boundary IS included in the range.

In FHIR, ranges with both a low and high are represented in the [Range](https://hl7.org/fhir/R4/datatypes.html#Range) data type, while ranges with only a low or a high are represented in the [Quantity](https://hl7.org/fhir/R4/datatypes.html#Quantity) data type using a [comparator](https://hl7.org/fhir/R4/valueset-quantity-comparator.html).

Since a physical quantity is something that can be measured, a missing `<low>` value or a low value of `0` can be represented as `<` or `<=` the high value (based on the `@inclusive` property on `<high>`). If the `<high>` value is missing, it generally means the value was too large to measure, and the FHIR representation is `>` or `>=`.

Note that in FHIR, `Observation.referenceRange` only contains `.low` and `.high` values, so this guidance is targeted to the actual values of observations.

<table>
<tr><th>CDA IVL_PQ Value - High-only</th><th>FHIR Quantity</th></tr>
<tr><td>
<div markdown="1">
{% highlight xml %}
<value xsi:type="IVL_PQ">
  <high value="200" unit="mg/dL"/>
</value>
{% endhighlight %}
or
{% highlight xml %}
<value xsi:type="IVL_PQ">
  <low value="0" unit="mg/dL"/>
  <high value="200" unit="mg/dL"/>
</value>
{% endhighlight %}
or

{% highlight xml %}
<value xsi:type="IVL_PQ">
  <low nullFlavor="NINF"/>
  <high value="200" unit="mg/dL"/>
</value>
{% endhighlight %}

</div>

</td><td>
<div markdown="1">
{% highlight json %}
"quantity": {
  "value": 200,
  "comparator": "<=",
  "unit": "mg/dL",
  "code": "mg/dL",
  "system": "http://unitsofmeasure.org"
}
{% endhighlight %}

(`<=` because inclusive is true by default)
</div>

</td></tr>
<tr><td>
<div markdown="1">
When `@inclusive="false"`:

{% highlight xml %}
<value xsi:type="IVL_PQ">
  <high value="200" unit="mg/dL" inclusive="false"/>
</value>
{% endhighlight %}
</div>

</td><td>
<div markdown="1">
{% highlight json %}
"quantity": {
  "value": 200,
  "comparator": "<",
  "unit": "mg/dL",
  "code": "mg/dL",
  "system": "http://unitsofmeasure.org"
}
{% endhighlight %}
</div>

</td></tr>
<tr><td colspan="2">&nbsp;</td></tr>
<tr><th>CDA IVL_PQ Value - Low-only</th><th>FHIR Quantity</th></tr>
<tr><td>
<div markdown="1">
{% highlight xml %}
<value xsi:type="IVL_PQ">
  <low value="500" unit="mg/dL" inclusive="true"/>
  <high nullFlavor="PINF">
</value>
{% endhighlight %}

or

{% highlight xml %}
<value xsi:type="IVL_PQ">
  <low value="500" unit="mg/dL"/>
</value>
{% endhighlight %}

</div>

</td><td>
<div markdown="1">
{% highlight json %}
"quantity": {
  "value": 500,
  "comparator": ">=",
  "unit": "mg/dL",
  "code": "mg/dL",
  "system": "http://unitsofmeasure.org"
}
{% endhighlight %}


(`>=` because inclusive is true by default)
</div>

</td></tr>
<tr><td>
<div markdown="1">
When `@inclusive="false"`:
{% highlight xml %}
<value xsi:type="IVL_PQ">
  <low value="500" unit="mg/dL" inclusive="false"/>
  <high nullFlavor="PINF"/>
</value>
{% endhighlight %}

or

{% highlight xml %}
<value xsi:type="IVL_PQ">
  <low value="500" unit="mg/dL" inclusive="false"/>
</value>
{% endhighlight %}
</div>

</td><td>
<div markdown="1">
{% highlight json %}
"quantity": {
  "value": 500,
  "comparator": ">",
  "unit": "mg/dL",
  "code": "mg/dL",
  "system": "http://unitsofmeasure.org"
}
{% endhighlight %}
</div>

</td></tr>
<tr><td colspan="2">&nbsp;</td></tr>
<tr><th>CDA IVL_PQ Value - Low and High with Numeric Values</th><th>FHIR Range</th></tr>
<tr><td>
<div markdown="1">
{% highlight xml %}
<value xsi:type="IVL_PQ">
  <low value="200" unit="mg/dL"/>
  <high value="1000" unit="mg/dL"/>
</value>
{% endhighlight %}
</div>

</td><td>
<div markdown="1">
{% highlight json %}
"range": {
  "low": {
    "value": 200,
    "unit": "mg/dL",
    "code": "mg/dL",
    "system": "http://unitsofmeasure.org"
  },
  "high": {
    "value": 1000,
    "unit": "mg/dL",
    "code": "mg/dL",
    "system": "http://unitsofmeasure.org"
  }
}
{% endhighlight %}
</div>

</td></tr>
<tr><td>
<div markdown="1">
Units can be different, as long as they are equivalent:

{% highlight xml %}
<value xsi:type="IVL_PQ">
  <low value="200" unit="mg/dL"/>
  <high value="1" unit="g/dL"/>
</value>
{% endhighlight %}
</div>

</td><td>
<div markdown="1">
{% highlight json %}
"range": {
  "low": {
    "value": 200,
    "unit": "mg/dL",
    "code": "mg/dL",
    "system": "http://unitsofmeasure.org"
  },
  "high": {
    "value": 1,
    "unit": "g/dL",
    "code": "g/dL",
    "system": "http://unitsofmeasure.org"
  }
}
{% endhighlight %}
</div>

</td></tr>
</table>


### CDA ↔ FHIR Provenance

CDA provides a repeated set of elements within each activity which may be used in populating data to/from FHIR [Provenance.Agent](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-provenance.html)  

- **author**: Represents the humans and/or machines that authored the [document/section/entry/act]. 
- **performer**: A person who actually and principally carries out an action.
- **informant**: An informant (or source of information) is a person that provides relevant information, such as the parent of a comatose patient who describes the patient's behavior prior to the onset of coma.
- **participant** Used to represent other participants not explicitly mentioned by other classes, that were somehow involved in the documented activities

FHIR, however, provides different elements within resources (e.g. Condition.recorder) that convey some information on provenance and a dedicated [Provenance](http://hl7.org/fhir/provenance.html) resource which references a target resource. In addition, FHIR documents do not provide context conduction, so all FHIR resources in a FHIR document should have explicit [Provenance](https://hl7.org/fhir/us/core/STU4/basic-provenance.html). See Context conduction under [v3 Similarities and Differences](http://hl7.org/fhir/R4/comparison-v3.html#7.17.2.1) for more information.

<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<blockquote class="stu-note">
		<b>Provenance Mapping</b>
		<p>This publication does <b>not</b> provide definitive CDA ↔ FHIR guidance on when resource attributes (e.g. AllergyIntolerance.recorder) vs. dedicated Provenance resources (e.g. Provenance targeting an AllergyIntolerance resource) should be used for documenting data provenance.</p>
    <p>In addition, this guide does not address how author and other provenance context conduction should work from C-CDA to FHIR. We welcome feedback on the topic of provenance from implementers.</p>
	</blockquote>
</div>

At a minimum, it is recommended that when [Provenance](http://hl7.org/fhir/provenance.html) resources are present in a FHIR document, that they should be mapped to provenance as defined in the [C-CDA Companion Guide](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=447) and [Basic Provenance in US Core](https://hl7.org/fhir/us/core/STU4/basic-provenance.html). 

Preliminary guidelines for documents may include: 
1. Assembler generated documents
    - `entity.what` reference either a [DocumentReference](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-documentreference.html) or [DiagnosticReport](https://hl7.org/fhir/us/core/StructureDefinition-us-core-diagnosticreport-note.html)
    - `agent.type.coding.code` = assembler
    - `agent.onBehalfOf` reference the [Organization](https://hl7.org/fhir/us/core/StructureDefinition-us-core-organization.html) that the document was assembled under the auspices of
2. Device generated document templates
    - `entity.what` reference either a [DocumentReference](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-documentreference.html) or [DiagnosticReport](https://hl7.org/fhir/us/core/StructureDefinition-us-core-diagnosticreport-note.html)
    - `agent.type.coding.code` = assembler
    - `agent.onBehalfOf` reference the [Organization](https://hl7.org/fhir/us/core/StructureDefinition-us-core-organization.html) that the document was assembled under the auspices of
    - A role of Informant is not permitted in Device Generated Document template. 
3. Patient Generated Document
    - `entity.what` reference either a [DocumentReference](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-documentreference.html) or [DiagnosticReport](https://hl7.org/fhir/us/core/StructureDefinition-us-core-diagnosticreport-note.html)
    - `agent.type` of author
    - `agent.who` reference to the [Patient](https://hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html). Optionally, it may include a participating device composer when created from a patient portal, and/or a participating assembeler; or a participating informant.
    - `onBehalfOf` valued to the authorizing provider's organization
4. Provider Generated Document
    - `entity.what` reference either a [DocumentReference](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-documentreference.html) or [DiagnosticReport](https://hl7.org/fhir/us/core/StructureDefinition-us-core-diagnosticreport-note.html)
    - `agent.type` of author
    - `agent.who` reference the [Practitioner](https://hl7.org/fhir/us/core/StructureDefinition-us-core-practitioner.html) or [PractitionerRole](https://hl7.org/fhir/us/core/StructureDefinition-us-core-practitionerrole.html) (when organization is included along with roles form the source C-CDA)
    - `onBehalfOf` reference to an [Organization](https://hl7.org/fhir/us/core/StructureDefinition-us-core-organization.html) that the provider is authorized by



### Name, Address, Telecom ####

The mappings of name, address and telecom information are useful in many part of C-CDA ↔ FHIR mapping. These are a combination of string, code and date mappings as shown below and may be re-used across many templates/resources.  For examples of these transformations, please see the [CDA → FHIR Patient mapping](./CF-patient.html) and [FHIR → CDA Patient mapping](./FC-patient.html) pages.

#### CDA name → FHIR name #####

|CDA name|FHIR name|Transform Steps
|:-----|:-----|:---------
|@use|.use|[Name use (CDA) → Name use (FHIR)](./ConceptMap-CF-NameUse.html)
|prefix|.prefix|
|given|.given|
|family|.family|
|suffix|.suffix|
|validTime/low@value|.period.start|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)
|validTime/high@value|.period.end|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)

#### CDA addr → FHIR address #####

|CDA addr|FHIR address|Transform Steps
|:-----|:-----|:---------
|@use|.use|[Addr use  (CDA) → Address use (FHIR)](./ConceptMap-CF-AddressUse.html)
|streetAddressLine|.line|
|city|.city|
|state|.state|
|postalCode|.postalCode|
|country|.country|
|useablePeriod/low@value|.period.start|
|useablePeriod/high@value|.period.end|

#### CDA telecom → FHIR telecom #####

|CDA telecom|FHIR telecom|Transform Steps
|:-----|:-----|:---------
|@use|.use|[CDA telecom use → FHIR contact point use](./ConceptMap-CF-TelecomUse.html)<br/>Note that CDA's `@use='PG'` is equivalent to FHIR's `.system='pager'`|
|@value|.system<br/>&<br/>.value|[CDA telecom value → FHIR contact point system](./ConceptMap-CF-TelecomType.html)<br/>Only include information in FHIR value which comes after the CDA system prefix; other formatting may be preserved. E.g. CDA `tel:+1(555)867-5309` becomes `+1(555)867-5309` in FHIR.<br/>|

#### FHIR name → CDA name #####

|FHIR name|CDA name|Transform Steps
|:-----|:-----|:---------
|.use|@use|[Name use (FHIR) → Name use (CDA)](./ConceptMap-FC-NameUse.html)|
|.family|family|
|.given|given|
|.prefix|prefix|
|.suffix|suffix|
|.period.start|validTime/low@value|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|.period.end|validTime/high@value|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|

#### FHIR address  → CDA addr #####

|FHIR address|CDA addr|Transform Steps
|:-----|:-----|:---------
|.use|@use|[Address use (FHIR) → Addr use (CDA)](./ConceptMap-FC-AddressUse.html)|
|.line|streetAddressLine|
|.city|city|
|.state|state|
|.postalCode|postalCode|
|.country|country|
|.period.start|useablePeriod/low@value|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|
|.period.end|useablePeriod/high@value|[CDA ↔ FHIR Time/Dates](mappingGuidance.html#cda--fhir-timedates)|

#### FHIR telecom → CDA telecom #####

|FHIR telecom|CDA telecom|Comments
|:-----|:-----|:---------
|.use|@use|[FHIR contact point use → CDA use](./ConceptMap-FC-TelecomUse.html)|
|.system<br/>&<br/>.value |@value|[FHIR contact point system → CDA telecom value](./ConceptMap-FC-TelecomType.html)<br/>Insert FHIR value after the CDA system prefix mapped from FHIR system<br/>Note that FHIR's `.system='pager'` is equivalent to CDA's `@use='PG'` |

### Missing Data in C-CDA vs. FHIR ####

CDA and FHIR address missing data and null usage in different ways:  
- The use of nullFlavor in CDA is explained in depth in Volume 1 of the [C-CDA Implementation Guide](https://hl7.org/cda/us/ccda/generalguidance.html#unknown-and-no-known-information) and in the [C-CDA Companion Guide](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=447). 
- The use of the data absent reason extension is explained in depth in the [US Core Implementation Guide](https://hl7.org/fhir/us/core/STU4/general-guidance.html#missing-data) and also in the [base extension](http://hl7.org/fhir/extension-data-absent-reason.html).

In this publication, we include a mapping between missing data concepts. **Importantly, it should be noted that several mappings include non-equivalence (wider or narrower or unsupported) and that each standard may allow data elements to be omitted while the other requires**. Feedback to improve implementer guidance is welcome on the handling of missing data between C-CDA and FHIR:
- [NullFlavor (CDA) → Data Absent Reason code (FHIR)](./ConceptMap-CF-NullFlavorDataAbsentReason.html) 
- [Data Absent Reason code (FHIR) → NullFlavor (CDA)](./ConceptMap-FC-DataAbsentReasonNullFlavor.html)

### Comment → Annotation
The CDA [Comment Activity](https://build.fhir.org/ig/HL7/CDA-ccda/StructureDefinition-CommentActivity.html) template is used for text notes accompanied by their author. The FHIR [Annotation](https://hl7.org/fhir/R4/datatypes.html#annotation) datatype can capture text and an author as well. 

|C-CDA<br/>[Comment Activity](https://build.fhir.org/ig/HL7/CDA-ccda/StructureDefinition-CommentActivity.html)|FHIR <br/> [Annotation](https://hl7.org/fhir/R4/datatypes.html#annotation)|Notes|
|:-------|:------|:---------|
|text|text|See [C-CDA Entry/Text → FHIR Resource.text](mappingGuidance.html#c-cda-entrytext--fhir-resourcetext)|
|author/time|time||
|author/assignedAuthor|authorReference|Ideally this is a PractitionerRole, which can then support both Pracitioner (name) and Organization, if necessary.|

### Narrative Text

The CDA section narrative text is an authoritative portion of the document and must be preserved when transforming to FHIR. When creating a FHIR Composition resource (or converting a FHIR Composition back into CDA), this is a straightforward mapping between CDA's `section/text` and the FHIR Composition `section.text` field. There is a slight difference in allowed elements - CDA defines a limited set of elements in its NarrativeBlock schema, and FHIR limits narratives to a subset of XHTML - but these two fields can generally be mapped 1:1. These differences are described below.

#### C-CDA Entry/Text → FHIR Resource.text

When mapping C-CDA entires to individual FHIR resources, the entry text should also be converted to a FHIR narrative. Every CDA ClinicalStatement (e.g. `<act>`, `<observation>`, `<encounter>`, etc) contains a `<text>` field, and C-CDA Volume 1 contains the following constraint which is applied to all of these ClinicalStatements:

>SHOULD contain zero or one [0..1] text<br/>&nbsp;&nbsp;
>  a. The text, if present, SHOULD contain zero or one [0..1] reference/@value<br/>&nbsp;&nbsp;&nbsp;&nbsp;
>     i. This reference/@value SHALL begin with a '#' and SHALL point to its corresponding narrative (using the approach defined in CDA R2.0, section 4.3.5.1)

When this element is present on a C-CDA entry, the FHIR resource SHOULD be created with a narrative (`.text`) corresponding to the portion of the section narrative referenced by the `reference/@value` attribute. This attribute will match an `@ID` attribute on an element in the section narrative. That element and all of its children should be used as the basis for the FHIR resource's narrative. Additionally, the `<text>` node may contain mixed content alongside the `<reference>` element. In this case, the FHIR resource should also include the mixed content in its narrative.

> **NOTE:** Sometimes the `@ID` element will appear on a portion of a table, such as a `<tr>` or a `<td>`, or some other narrative element like `<item>` which may not stand well on its own when converted to XHTML. When a situation like this occurs, include appropriate context from other elements outside the primary element containing `@ID`. For example, if the `@ID` appears on a `<tr>`, create a table for the FHIR resource narrative and repeat the header row(s) before including the `<tr>`.


Example mappings - assume CDA narrative contains an element with `ID="id1"` that contains "tagged text".
<table>
<tr><th>CDA Structure</th><th>FHIR Narrative Div</th></tr>
<tr><td>
<div markdown="1">
{% highlight xml %}
<act>
  <text>
    <reference value="#id1">
  </text>
</act>
{% endhighlight %}
</div>

</td><td>
<div markdown="1">
{% highlight xml %}
<div xmlns="http://www.w3.org/1999/xhtml">
  tagged text
</div>
{% endhighlight %}
</div>
</td></tr>
<tr><td>
<div markdown="1">
{% highlight xml %}
<act>
  <text>Mixed content</text>
</act>
{% endhighlight %}
</div>
</td><td>
<div markdown="1">
{% highlight xml %}
<div xmlns="http://www.w3.org/1999/xhtml">
  Mixed content
</div>
{% endhighlight %}
</div>
</td></tr>
<tr><td>
<div markdown="1">
{% highlight xml %}
<act>
  <text>Mixed with reference!
    <reference value="#id1">
  </text>
</act>
{% endhighlight %}
</div>
</td><td>
<div markdown="1">
{% highlight xml %}
<!-- Surrounding either part with an extra <div> is
     one possible suggestion to improve readability -->
<div xmlns="http://www.w3.org/1999/xhtml">
  Mixed with reference!
  <div>tagged text</div>
</div>
{% endhighlight %}
</div>
</td></tr>
</table>

#### FHIR Resource.text → C-CDA Section Narratives

If a FHIR Composition is being converted to CDA, its `section.text` can be converted to CDA `section/text` directly. If FHIR resources are being assembled into a new document, the narrative from each resource included in a section should be included as that section's text, as well as referenced from the specific C-CDA entry created from the conversion.

#### Difference between CDA Narrative and FHIR Narrative
The following is general guidance for mapping CDA Narrative elements and attributes to XHTML used by FHIR. For a specific example, see the informative [CDA R2 Stylesheet](https://github.com/HL7/CDA-core-xsl). Table elements (`<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<colgroup>`, `<col>`, `<tr>`, `<td>`, `<th>`) are not included in the table because they are generally the same between CDA Narrative and XHTML.

The reverse conversion (from FHIR HTML to CDA Narrative) is also possible, but only the elements allowed by the CDA Narrative may be used.

|CDA Narrative|HTML|Notes|
|---|---|---|
|content|span|Inline content
|paragraph|div (or p)|Block content
|list|ul / ol|Choice depends on list/@listType attribute which can be `ordered` or `unordered`
|item|li
|br|br|No child content, @styleCode attribute, or @ID attribute allowed
|sub/sup|sub/sup
|caption|caption|XHTML only allows caption after `<table>` or `<ol>`. Other occurrences may need to be converted to div or other elements
|linkHtml|a|
|footnote/footnoteRef|stylized div/span|Represents footnotes which could be rendered at the bottom of the text
|renderMultiMedia|img|The @referencedObject attribute matches an ID on an `<observationMedia>` entry in the section. The value of this entry represents the binary content of the image.
|@styleCode|@style or @class|Standard CDA styleCode values like `Bold`, `Underline`, `Italics` can be rendered as style attributes. Others are equivalent to @class and may not have a specific interpretation outside of local exchanges.
|@ID|@id|Note the difference in capitalization

Though included in NarrativeBlock.xsd, the `Title`, `TitleContent`, and `TitleFootnote` elements are not actually used in CDA Narrative text.

### Terminology Mapping ###

[Access terminology mappings between C-CDA and FHIR](conceptMaps.html)  


---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/mappingIssues.md

### Issues

We solicit feedback from balloters on several complex and pervasive issues.

#### Medications
US Core specifies that medication lists be accessible via a MedicationRequest query, regardless of whether the source system has the order. This means that CDA Medication Activity entries are mapped to MedicationRequest, and FHIR maps assume that MedicationRequest manifest all relevant medication data. We are interested in whether there are cases where these assumptions introduce risk or undue complexity.

#### Null flavors
US Core specifies that "unknown" is the generic null flavor, and should be used for, e.g., CDA "No Information." But CDA NullFlavors also has an "unknown" code. We opt, in this case, to follow the FHIR principle of not sending nulls without reason, so that a FHIR "unknown" will usually follow from a CDA "unknown." In cases where the FHIR property is required, we follow the US Core guidance, mapping "NI" to "unknown." This means that both CDA UNK and NI are mapped to FHIR UNK, but FHIR UNK is mapped to NI.

#### Provenance
FHIR documents do not provide context conduction, so all FHIR resources in a FHIR document should have explicit Provenance. It is permitted to also capture provenance data in resource properties, such as AllergyIntolerance.reporter. However, this property does not provide a date, so a Provenance resource seems to be required, thereby making the reporter property redundant. It may be populated for convenience, but doing so introduces opportunities for data inconsistency.

All CDA entries have authors, whether directly or via context conduction.

When generating FHIR documents from CDA, use Author participations (whether directly or via context conduction) to populate Provenance. 

When generating FHIR documents from FHIR, we propose that all resources be assigned Provenance resources. When translating these to CDA, use Provenance to populate Author participations. Application logic may be desirable to slot these authors in at the appropriate levels in cases where context conduction can reduce duplication.

We solicit feedback on the advisability of also populating resource provenance elements in either case.

While general guidance is to map Author participations to Provenance; at this time, we have no implementations to test that proposal.

Most identified instances of provenance use a small number of roles, but many roles are permitted. See the project page [https://confluence.hl7.org/display/CGP/Provenance+Domain](https://confluence.hl7.org/display/CGP/Provenance+Domain)for current thinking on how these roles should be mapped. 

#### Document-specificity of status codes
The CDA MedicationActivity template uses status values from the Medication Status value set. This set is constrained to values likely to be represented in documents; e.g., it does not contain a "new" or "held" value appropriate to a draft order, which would typically not be provided in a document. (Note that the inclusion of "nullified" on the CCDA side seems inconsistent.) Since we are mapping document to document, we can make a similar call on the FHIR side, even though the US Core profile supports the value "draft." We solicit perspectives on these options.

* Provide maps where possible (include "entered in error"; exclude "draft").
* Provide all maps. This means including a map for "draft" not provided in the C-CDA value set. Lobby SD for inclusion. 

* Only provide maps suitable for documents: exclude "draft" and "entered in error."

#### Absent Allergies

We solicit feedback on the use of CDA allergy value codes other than those we have mapped. We mapped the codes asserting "allergy" to the corresponding SNOMED codes for "no known allergy," and we left codes for "intolerance" and "propensity to adverse reaction" unmapped. The option would be to map those as well (e.g., negated "235719002	Intolerance to food (finding)" to "429625007 - No known food allergy (situation)").

We are aware that there are widely divergent perceptions and understandings of the distinctions among "allergy," "intolerance," and "propensity to adverse reaction." However, we also believe that the Allergy/Intolerance artifacts are not designed for clinical specificity, but rather as a safety tool to prevent administration of harmful substances. As a result, we believe that the physiological mechanism of the reaction is virtually irrelevant. 

Mechanism is sometimes used as a proxy for criticality, with "allergy" (and potential anaphylaxis) being the primary concern, so we would not want to generalize away from that term. Generalizing toward it (translating "intolerance" concepts as "allergy" concepts) may artificially inflate criticality assumptions, but not if the criticality element were assigned.

Finally, we believe that, as a safety mechanism, having accurate coded representations of present allergies is critically important to prevent administration of contraindicated substances, but the case for semantic specificity of negatives is less clear. Negatives don't play a part in order checks, and textual representations are easily understood by caregivers - notwithstanding the constraint that the question must be asked at every encounter anyway.

So it appears that neither not mapping (using only text) or mapping (representing all absence values as "allergies") is especially problematic.


---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/StructureDefinition-Care-Plan-Document-intro.md

{% include stu-note.xml %}

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/StructureDefinition-Consultation-Note-intro.md

{% include stu-note.xml %}

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/StructureDefinition-Continuity-of-Care-Document-intro.md

{% include stu-note.xml %}

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/StructureDefinition-Diagnostic-Imaging-Report-intro.md

{% include stu-note.xml %}

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/StructureDefinition-Discharge-Summary-intro.md

{% include stu-note.xml %}

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/StructureDefinition-History-and-Physical-intro.md

{% include stu-note.xml %}

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/StructureDefinition-Operative-Note-intro.md

{% include stu-note.xml %}

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/StructureDefinition-Procedure-Note-intro.md

{% include stu-note.xml %}

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/StructureDefinition-Progress-Note-intro.md

{% include stu-note.xml %}

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/StructureDefinition-Referral-Note-intro.md

{% include stu-note.xml %}

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/StructureDefinition-Transfer-Summary-intro.md

{% include stu-note.xml %}

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/StructureDefinition-US-Realm-Header-intro.md

{% include stu-note.xml %}

---

File: repos/HL7_SLASH_ccda-on-fhir/input/pagecontent/the_specification.md

{% include stu-note.xml %}

[Previous Page - Background](background.html)

### FHIR Documents

C-CDA on FHIR relies on the FHIR Documents paradigm. Implementers need to be aware of and follow all the rules required for FHIR Documents. Please refer to that section of the core FHIR spec.

[http://hl7.org/fhir/documents.html](http://hl7.org/fhir/documents.html)

### Actors

The following actors are part of the US Core IG:

* Document Source: An application that exposes a clinical document to a consumer. This actor may also be the creator of the document, but could also me an intermediary. This can be thought of as the server in a client/server interaction. 
* Document Consumer: An application that consumes a clinical document. This can be thought of as the client in a client/server interaction. 

The C-CDA on FHIR specification does not define additional rules for sending/receiving documents beyond what is already defined in the FHIR core spec and US Core, though it is recommended that implementers consider using the US Core DocumentReference profile as a way to index any kind of document, including those compliant with C-CDA on FHIR. 

### Profiles and Extensions

To claim conformance to a C-CDA on FHIR Profile, servers SHALL:

* Be able to populate all profile data elements that have a minimum cardinality >= 1 and/or flagged as Must Support as defined by that profile’s StructureDefinition.
* Conform to the C-CDA on FHIR Server Capability Statement expectations for that profile’s type. 

The following profiles and extensions are present in the specification. Details on these profiles and extensions are available on the [Artifact Index page](artifacts.html). 

#### Composition Resource Profiles


* [US Realm Header](StructureDefinition-US-Realm-Header.html)
* [Procedure Note](StructureDefinition-Procedure-Note.html)
* [Care Plan Document](StructureDefinition-Care-Plan-Document.html)
* [Consultation Note](StructureDefinition-Consultation-Note.html)
* [Continuity of Care Document](StructureDefinition-Continuity-of-Care-Document.html)
* [Diagnostic Imaging Report](StructureDefinition-Diagnostic-Imaging-Report.html)
* [Discharge Summary](StructureDefinition-Discharge-Summary.html)
* [History and Physical](StructureDefinition-History-and-Physical.html)
* [Operative Note](StructureDefinition-Operative-Note.html)
* [Progress Note](StructureDefinition-Progress-Note.html)
* [Referral Note](StructureDefinition-Referral-Note.html)
* [Transfer Summary](StructureDefinition-Transfer-Summary.html)

Note: the C-CDA Unstructured Document profile is not included in this specification since it's use case is covered by the [US Core DocumentReference profile](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-documentreference.html). 

#### Extensions

* [Authorization Extension](StructureDefinition-AuthorizationExtension.html)
* [Informant Extension](StructureDefinition-InformantExtension.html)
* [Participant Extension](StructureDefinition-ParticipantExtension.html)
* [Performer Extension](StructureDefinition-PerformerExtension.html)
* [Data Enterer Extension](StructureDefinition-DataEntererExtension.html)
* [Information Recipient Extension](StructureDefinition-InformationRecipientExtension.html)
* [Order Extension](StructureDefinition-OrderExtension.html)
* [Version Number Extension](StructureDefinition-VersionNumber.html)

### Document Bundles

Per the FHIR Document's paradigm, the Composition resource and all references resources must be packaged in a FHIR Bundle resource where Bundle.type = document in order for the content in the Composition resource to be considered a "document". Un-bundled Composition resources are useful while a document is being edited, but until it has been bundled it does not meet the key characteristics of a clinical document (persistence, potential for authentication, etc.). The FHIR specification includes a $document operation on the Composition resource, and FHIR servers that support that operation can handle the task of bundling Composition and other resources. 

See the documentation on the [FHIR Bundle resource](http://hl7.org/fhir/bundle.html) and the [FHIR $document operation](http://hl7.org/fhir/composition-operation-document.html) for more information. 

### General Guidance

This section outlines important definitions, interpretations, and requirements common to all C-CDA on FHIR actors used in this guide. The conformance verbs - SHALL, SHOULD, MAY - used in this guide are defined in FHIR Conformance Rules.


#### US Core and C-CDA on FHIR

The C-CDA on FHIR specification relies on the US Core specification for all Composition.section.entry content. If a US Core profile does not exist for the expected content of a given section, then unprofiled resources are referenced instead. This was an intentional choice, representing a separation of concerns between the document-level profiles on the Composition resource (C-CDA on FHIR scope) and definition of discrete data needed for the exchange of coded information (US Core scope). It is expected that US Core will evolve over time, and as it does the C-CDA on FHIR specification will be updated to include new US Core Profiles. 

More information on US Core can be found [here](https://www.hl7.org/fhir/us/core/). 

#### Must Support

For querying and reading C-CDA on FHIR Profiles, Must Support on any profile data element SHALL be interpreted as follows:

* Document Sources SHALL be capable of populating all data elements as part of the query results as specified by the C-CDA on FHIR Server Capability Statement.
* Document Consumers SHALL be capable of processing resource instances containing the data elements without generating an error or causing the application to fail. In other words Document Consumers SHOULD be capable of displaying the data elements for human use or storing it for other purposes.
* In situations where information on a particular data element is not present and the reason for absence is unknown, Document Sources SHALL NOT include the data elements in the resource instance returned as part of the query results.
* When querying Document Sources, Document Consumers SHALL interpret missing data elements within resource instances as data not present in theDocument Sources’s system.
* In situations where information on a particular data element is missing and the Document Source knows the precise reason for the absence of data, Document Sources SHALL send the reason for the missing information using values (such as nullFlavors) from the value set where they exist or using the dataAbsentReason extension.
* Document Consumers SHALL be able to process resource instances containing data elements asserting missing information.

#### Implementation Notes when Moving from C-CDA to C-CDA on FHIR

Implementers moving from C-CDA to FHIR need to be aware that the goal of this project is to address the same use case as Consolidated CDA (clinical documentation for primary and transfer of care scenarios in the US), but the syntax, methodologies, and value sets in FHIR are often quite different from those in C-CDA. In particular, implementers need to be aware of the issues listed below:

* The value sets used in US Core and FHIR in general are not fully aligned with those in C-CDA.
* The approaches for negation used in C-CDA and the Core FHIR specification are quite different.
* The level of granularity between C-CDA templates and FHIR resources/profiles is often different, so there will not be a 1:1 mapping between templates and profiles. Some examples include:
* Multiple templates like Health Concern and Problem Observation map to a single US Core Condition
* C-CDA has 3 kinds of procedure templates that all map to the single US Core Procedure profile
* In C-CDA the use the moodCode attribute can differentiate between events and planned acts using a single template but in FHIR these are often separate resources (event vs. request resources)
* In C-CDA multiple observations such as lab results are wrapped in an Organizer, whereas in FHIR the Observation resource itself can contain multiple Observations as subcomponents
* Implementers need to follow the rules and apply the value sets used by the target specification, and this will often require significant data and vocabulary mapping. implementers moving from C-CDA to C-CDA on FHIR will need to review the US Core profiles and value sets in core FHIR resources and ensure that their instances FHIR instances are compliant. We hope that ongoing work in HL7 will better align US Core, C-CDA, and the Core FHIR specifications in the future.

#### Mapping between C-CDA and C-CDA on FHIR

The mappings which have been developed as part of an independent project, which was performed independently of the original document-level profiles, are included [here](mappingBackground.html) and in the menu dropdown under "Mapping" 


[Next Page - Downloads](downloads.html)

---

