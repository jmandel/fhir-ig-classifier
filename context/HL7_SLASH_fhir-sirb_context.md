File: repos/HL7_SLASH_fhir-sirb/input/pagecontent/additional_implementation_requirements.md

The Capability Statement does not capture all of the requirements for sIRB IG compliance. This page explains other requirements necessary to meet conformance expectations. It also discusses optional capabilities which could be implemented depending on the use case.

The sIRB IG assumes that the implementer is familiar with the [SDC Specification](http://hl7.org/fhir/uv/sdc/STU3/).
<br>
<br>

### Questionnaire and QuestionnaireResponse resources

#### Questionnaire and QuestionnaireResponse Expectations

* To be compliant with this IG, a system SHALL render the eight [sIRB Questionnaires](artifacts.html#questionnaires) for completion, transmit the completed QuestionnaireResponses between the relying site(s) and the host (lead principal investigator's institution) and submit the completed QuestionnaireResponse for storage at the host(lead principal investigator's institution). 

* To be compliant with this IG, a system SHALL allow editing of the completed QuestionnaireResponse and display the completed QuestionnaireResponse for review or saving to pdf.
<br>
<br>
#### Extensions for the Questionnaire and QuestionnaireResponse

The following extensions are used in the sIRB Questionnaires in order to make the Questionnaires display and function as described in the examples, as tested by prospective users and as shown in the [forms rendered by the Questionnaire Viewer](index.html#renderedForms):
<br><br>
[choiceOrientation](http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation)
<br>
[displayCategory](http://hl7.org/fhir/StructureDefinition/questionnaire-displayCategory)
<br>
[hidden](http://hl7.org/fhir/StructureDefinition/questionnaire-hidden)
<br>
[itemControl](http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl)
<br>
[supportLink](http://hl7.org/fhir/StructureDefinition/questionnaire-supportLink)
<br>
[unitOption](http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption)
<br>
[variable](http://hl7.org/fhir/StructureDefinition/variable)
<br>
[rendering-style](http://hl7.org/fhir/StructureDefinition/rendering-style)
<br>
[rendering-xhtml](http://hl7.org/fhir/StructureDefinition/rendering-xhtml)
<br>
<br>
For more information about Questionnaire extensions, please see the [SDC Implementation Guide Extension definitions](http://hl7.org/fhir/uv/sdc/artifacts.html#structures-extension-definitions) and [SDC Implementation Guide Examples](http://hl7.org/fhir/uv/sdc/examples.html). 
<br>
<br>
Style decisions, color choices and orientation of the questions and/or answers were developed using feedback from prospective users. If the forms are integrated into other research study systems, harmonization of the appearance of the forms with the design of the research study system will not result in non-compliance with the IG.
<br>
<br>
If an implementer chooses to use the optional ResearchStudy resource, the workflow-researchStudy MAY optionally be used on the QuestionnaireResponses to capture that the QuestionnaireResponses are relevant to the specified research study(ies). The official URL for the workflow-researchStudy is [http://hl7.org/fhir/StructureDefinition/workflow-researchStudy](http://hl7.org/fhir/StructureDefinition/workflow-researchStudy).
<br>
<br>
### Expectations for Questionnaire Population

The sIRB Questionnaires are [populatable](http://hl7.org/fhir/uv/sdc/populate.html#pre-population-service). The sIRB forms are designed with one master form, the [Initiate a Study](Questionnaire-sirb-initiate-study-questionnaire-populate.html) questionnaire, that collects common data elements which will then be populatable into the other sIRB forms so that researchers do not need to re-type the same information into multiple forms. Entering common data elements only once (via the [Initiate a Study](Questionnaire-sirb-initiate-study-questionnaire-populate.html) questionnaire) saves time for the researchers and study coordinators while reducing data entry errors.
<br>
Implementation assumes that the implementers will be knowledgeable about [SDC Form Population](http://hl7.org/fhir/uv/sdc/populate.html).
<br>

* The following SDC extensions are used in the Questionnaires to make the populate functionality work as described:

<style type="text/css">
table{
margin-left: 35px
}
</style>


| Extension  |  
| -------------------------------------------------------------------------------------------------------- | 
| [Answer Expression](http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-answerExpression) |
| [Initial Expression](http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression) |
| [Calculated Expression](http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression) |
| [Launch Context](http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-launchContext)  |
|[variable](http://hl7.org/fhir/StructureDefinition/variable)| 
{: .grid}
<br>
<br>


Some guidance is provided here:

* The client software can be designed to function similar to the [population operations](http://hl7.org/fhir/uv/sdc/populate.html#population-operations) described in the SDC IG, but as a client-side process, rather than calling the FHIR server population operations.
<br>
<br>
* The sIRB Questionnaires use [Expression-Based Population](http://hl7.org/fhir/uv/sdc/populate.html#exp-pop).
<br>
<br>
* The Questionnaires also utilize [answerExpression](http://hl7.org/fhir/uv/sdc/STU3/StructureDefinition-sdc-questionnaire-answerExpression.html) functionality from the [Form Behavior and Calculation](http://hl7.org/fhir/uv/sdc/STU3/behavior.html) section of the SDC IG in order to populate the drop-down list of [permitted](http://hl7.org/fhir/uv/sdc/STU3/behavior.html#choice-restriction) answers for some of the questions.
<br>
<br>
* For more information on Expressions, also see [Expression Extensions](http://hl7.org/fhir/uv/sdc/STU3/expressions.html).
<br>
<br>
* [fhirpath](https://hl7.org/fhirpath/) is used in the Answer Expression(s), Initial Expression(s), Calculated Expression(s) and Launch Context Expression(s) used in the Questionnaires. An [implementation of fhirpath](http://hl7.org/fhirpath/#fhirpath-tooling-and-implementation) will need to be included with the software client for the sIRB forms.
<br>
<br>

### Other implementation recommendations

The  [REST FHIR Questionnaire Management Software](conformance_and_functionality_expectations.html#clientSoftware)
(client software) will need to perform activities such as:

* Retrieving Questionnaires from the repository

* Displaying Questionnaires

* Populating Questionnaires

* Validating completed forms and submitting to the FHIR server for exchange and/or storage

* Retrieving Questionnaire Responses for edit and display

* Extracting data from the Initiate a Study Questionnaire Response to create and update the ResearchStudy resource (if the optional ResearchStudy resource is being used)

* Creating the workflow-researchStudy extension (if the optional workflow-researchStudy extension is being used)

* Creating the optional Provenance resource and providing the data for the elements of the resource
<br>
It is beyond the scope of this IG to provide detailed instructions on how to implement these functions, especially because the client [REST FHIR Questionnaire Management Software](conformance_and_functionality_expectations.html#clientSoftware) could be the research study system of the lead principal investigator's institution, another type of software or the sIRB on FHIR software.
<br>
<br>
### RESTFUL interactions

The [RESTful API page](https://www.hl7.org/fhir/http.html) of the FHIR specification provides detailed directions on usage of RESTful FHIR. Please consult the [General Considerations](https://www.hl7.org/fhir/http.html#general) section if there are questions about the meaning of any components in the interaction definitions.
<br>
Some of the http commands that implementers may find useful for the exchange of resources are listed below: 

<br>
* A Questionnaire can be retrieved using search by url
```
GET [base]/Questionnaire?url=[url]
```
<br>
* A QuestionnaireResponse can be retrieved either by read or search by _id
```
GET [base]/QuestionnaireResponse/[id]
```
    or
```
GET [base]/QuestionnaireResponse?_id=[id]
```
<br>
* The vread interaction can help the implementer retrieve a specific version of a QuestionnaireResponse. This will support the use case in which a researcher decides to revert back to a previous version of a form when a study's forms have been prepared in multiple iterations before final approval. For instance, a researcher may initially prepare the forms as a solo lead principal investigator then subsequently have interest from a co-investigator. A new version of the forms may be prepared using input from the co-investigator, also listing the co-investigator's contact information throughout the forms. If the prospective co-investigator later decides not to participate in conducting the study, then the original researcher would want to revert back to the original forms instead of editing the latest versions to remove all of the input and references to the co-investigator who will now not be involved in the study.
```
GET [base]/QuestionnaireResponse/[id]/_history/[vid]
```
<br>
* As discussed at [https://www.hl7.org/fhir/questionnaireresponse.html#scope](https://www.hl7.org/fhir/questionnaireresponse.html#scope), QuestionnaireResponses are often retrieved with the cooresponding Questionnaire in order to display the questions, allow for editing of the answers or to validate answers against the Questionnaire definitions. The Questionnaire can be included when retrieving the QuestionnaireResponses as follows:
```
GET [base]/QuestionnaireResponse?_id=[id]&_include=QuestionnaireResponse:questionnaire
```
<br>
* If the QuestionnaireResponse \_id is unknown, the Questionnaire to which the QuestionnaireResponse applies can be used as a search parameter:
```
GET [base]/QuestionnaireResponse?questionnaire=[questionnaire]&_include=QuestionnaireResponse:questionnaire
```
<br>
* A search can return all of the QuestionnaireResponses for a specified Questionnaire limited to a given status:
```
GET [base]/QuestionnaireResponse?questionnaire=[questionnaire]&status=[status]&_include=QuestionnaireResponse:questionnaire
```
<br>
* A completed form can be sent to the FHIR server using POST:
```
POST [base]/QuestionnaireResponse
```
<br>
* If the optional ResearchStudy resource and/or the Provenance resource(s) are part of the implementation, they can be created using POST also:
```
POST [base]/ResearchStudy
```
    and/or
```
POST [base]/Provenance
```
<br>

* The update interaction is used to send an updated/edited QuestionnaireResponse to the FHIR server:
```
PUT [base]/QuestionnaireResponse/[id]
```
<br>
    The sIRB IG allows for the [patch](https://www.hl7.org/fhir/http.html#patch) interaction, if implementers wish to use patch to only update a portion of a resource. This was primarily designed to allow partial updates in the event of very large protocol forms with many attachments, which could slow down the update interaction. The use of the patch interaction is entirely optional and is not expected to be widely implemented. If used, the patch interaction uses the content type of application/json-patch+json.
<br>
<br>
### Search Parameters
The [sIRB Server Capability Statement](CapabilityStatement-sIRB-CapabilityStatementServer.html) and the [sIRB Client Capability Statement](CapabilityStatement-sIRB-CapabilityStatementClient.html) identify search parameters relevant to  sIRB implementers. In the event that the data from the completed forms will be persisted outside of the FHIR server, many of the search functions listed in the [sIRB Server Capability Statement](CapabilityStatement-sIRB-CapabilityStatementServer.html) and the [sIRB Client Capability Statement](CapabilityStatement-sIRB-CapabilityStatementClient.html) could foreseeably be handled by another system. Hence, many of the search parameters in the sirb Capability Statements are listed as "MAY" because some implementations will handle data searching in another system.

---

File: repos/HL7_SLASH_fhir-sirb/input/pagecontent/codesystems_descriptions.md

### Usage of Codesystems from HL7 CodeSystems Registry in the sIRB Questionnaires
<br>
Where possible, the [sIRB Questionnaires](artifacts.html#questionnaires) use the values in the HL7 CodeSystems Registry<a href="#fn-1"><sup>1</sup></a> at <a href="https://terminology.hl7.org/3.0.0/codesystems.html">https://terminology.hl7.org/3.0.0/codesystems.html</a>. For some questions, not all values in a given codesystem were applicable to the sIRB use case and only a subset of the values were included as answer options for those questions.
<br>
<br>
The Codesystems from [HL7 CodeSystems Registry](https://terminology.hl7.org/3.0.0/codesystems.html) that were used in the [sIRB Questionnaires](artifacts.html#questionnaires) are:
<br>
<br>

| CodeSystem  | Official URL   |   Questionnaire(s) Using this CodeSystem |
| -------------------- | ---------------- | ---------------------------------- |
|expandedYes-NoIndicator|[http://terminology.hl7.org/CodeSystem/v2-0532](http://terminology.hl7.org/CodeSystem/v2-0532)|Initiate a Study Questionnaire, Protocol Questionnaire, Consent Questionnaire, Recruitment Materials Questionnaire, Continuing Review Questionnaire, Adverse Medical Event Questionnaire and Adverse Non-Medical Event Questionnaire|
|ResearchStudyPhase|[http://terminology.hl7.org/CodeSystem/research-study-phase](http://terminology.hl7.org/CodeSystem/research-study-phase)|Protocol Questionnaire|
|Unified Code for Units of Measure (UCUM)<a href="#fn-2"><sup>2</sup></a>|[http://unitsofmeasure.org](http://unitsofmeasure.org)|Consent Questionnaire|
|relationship|[http://terminology.hl7.org/CodeSystem/v2-0063](http://terminology.hl7.org/CodeSystem/v2-0063)|Consent Questionnaire|
|ResearchStudyStatus|[http://hl7.org/fhir/research-study-status](http://hl7.org/fhir/research-study-status)|Continuing Review Questionnaire|
|administrativeSex|[http://terminology.hl7.org/CodeSystem/v2-0001](http://terminology.hl7.org/CodeSystem/v2-0001)|Adverse Medical Event Questionnaire|
|Ethnicity|[http://terminology.hl7.org/CodeSystem/v3-Ethnicity](http://terminology.hl7.org/CodeSystem/v3-Ethnicity)|Adverse Medical Event Questionnaire|
|Race|[http://terminology.hl7.org/CodeSystem/v3-Race](http://terminology.hl7.org/CodeSystem/v3-Race)|Adverse Medical Event Questionnaire|
|AdverseEventSeriousness|[http://terminology.hl7.org/CodeSystem/adverse-event-seriousness](http://terminology.hl7.org/CodeSystem/adverse-event-seriousness)|Adverse Medical Event Questionnaire|
|AdverseEventSeverity|[http://terminology.hl7.org/CodeSystem/adverse-event-severity](http://terminology.hl7.org/CodeSystem/adverse-event-severity)|Adverse Medical Event Questionnaire|
|AdverseEventCausalityAssessment|[http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess](http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess)|Adverse Medical Event Questionnaire|
|actionTakenInResponseToTheEvent|[http://terminology.hl7.org/CodeSystem/v2-0251](http://terminology.hl7.org/CodeSystem/v2-0251)|Adverse Medical Event Questionnaire|
{: .grid}

<br>
<br>
### sIRB-specific Codesystem in the sIRB Questionnaires
<br>
In many cases, the values and concepts in the [sIRB Questionnaires](artifacts.html#questionnaires) were not yet captured by an existing HL7 Codesystem or the existing Codesystems did not contain all of the values needed.  In these circumstances, we have created our own codes for the [sIRB Questionnaires](artifacts.html#questionnaires). We have included these in the siRB IG at [CodeSystem-temporarycodes.html](CodeSystem-temporarycodes.html), which is represented as a codeSystem resource.
<br>
<br>
Because of the low maturity level of the sIRB IG, a temporary code list within the IG was used. As the sIRB Questionnaires mature, the codes within the sIRB Questionnaires will grow in maturity and we foresee that we will work with the HL7 terminology workgroup to have officially registered CodeSystems created and listed in the  [HL7 CodeSystems Registry](https://terminology.hl7.org/3.0.0/codesystems.html).
<br>
<br>
Below are the descriptions of the [sIRB temporary codes](CodeSystem-temporarycodes.html):
<br>

|Topic|Code|Display|Questionnaire(s) Using this Codesystem| 
| -------------------- | ---------------- | ------------------- | ------------------------------------------------- |
|Adverse Event Submission Type|INITIAL|Initial|Adverse Medical Event Questionnaire|
|Adverse Event Submission Type|UPDATE|Update|Adverse Medical Event Questionnaire|
| | | | |
|Study Type|INT|Interventional|Initiate a Study Questionnaire, Protocol Questionnaire and Adverse Medical Event Questionnaire|
|Study Type|OBS|Observational|Initiate a Study Questionnaire, Protocol Questionnaire and Adverse Medical Event Questionnaire|
| | | | |
|Status of reliance|APPROVED|Approved for reliance|Initiate a Study Questionnaire|
|Status of reliance|POSSIBLE|Potential/possible|Initiate a Study Questionnaire|
|Status of reliance|CANCELLED|Cancelled or not participating|Initiate a Study Questionnaire|
|Status of reliance|ONHOLD|Temporarily on hold|Initiate a Study Questionnaire|
|Status of reliance|DENIED|Denied reliance|Initiate a Study Questionnaire|
| | | | |
|Professional Relationship Type|SFS|Sponsor or Funding Source|Initiate a Study Questionnaire|
|Professional Relationship Type|CRO|Contract Research Organization (CRO)|Initiate a Study Questionnaire|
| | | | |
|Determination Decision|AR|Accepts Review|Determination Letter Questionnaire|
|Determination Decision|DR|Denies Review|Determination Letter Questionnaire|
| | | | |
|Types of communication methods that will be used to reply to potential participants|PHONECALL|Telephone calls|Recruitment Materials Questionnaire|
|Types of communication methods that will be used to reply to potential participants|VM|Voice mail and telephone voice messages|Recruitment Materials Questionnaire|
|Types of communication methods that will be used to reply to potential participants|VC|Video Conferencing|Recruitment Materials Questionnaire|
|Types of communication methods that will be used to reply to potential participants|EMAIL|Email|Recruitment Materials Questionnaire|
|Types of communication methods that will be used to reply to potential participants|TXT|Text messages/texting|Recruitment Materials Questionnaire|
|Types of communication methods that will be used to reply to potential participants|EHPRTL|eHealth Portal messaging|Recruitment Materials Questionnaire|
| | | | |
|Type of study agent received|SA|Study Agent|Adverse Medical Event Questionnaire|
|Type of study agent received|PLACEBO|Placebo|Adverse Medical Event Questionnaire|
|Type of study agent received|BSA|Blinded Study Agent|Adverse Medical Event Questionnaire|
| | | | |
|Possible alternate causes of the SAE|PRMYDIS|Primary disease|Adverse Medical Event Questionnaire|
|Possible alternate causes of the SAE|STDYPRO|Study Procedure|Adverse Medical Event Questionnaire|
|Possible alternate causes of the SAE|PRE|Pre-existing condition|Adverse Medical Event Questionnaire|
|Possible alternate causes of the SAE|UNDERLYINGDIS|Underlying disease|Adverse Medical Event Questionnaire|
|Possible alternate causes of the SAE|CONCMITMED|Concomitant medication|Adverse Medical Event Questionnaire|
|Possible alternate causes of the SAE|OTHERCAUSE|Other known or suspected cause|Adverse Medical Event Questionnaire|
| | | | |
|Status of study research activities|nochange|No change in research activities|Adverse Non-Medical Event Questionnaire|
|Status of study research activities|stopped|All research activities temporarily and voluntarily stopped for all participants|Adverse Non-Medical Event Questionnaire|
|Status of study research activities|partial|Partial voluntary hold on some research activities for all participants (explain below)|Adverse Non-Medical Event Questionnaire|
|Status of study research activities|hold|Voluntary hold on new participant enrollment only|Adverse Non-Medical Event Questionnaire|
| | | | |
|Adverse Non-Medical Event Report Status|init|Initial|Adverse Non-Medical Event Questionnaire|
|Adverse Non-Medical Event Report Status|followup|Follow-up|Adverse Non-Medical Event Questionnaire|
| | | | |
|Status of Risk Reduction Activities|completed|Done, performed or completed|Adverse Non-Medical Event Questionnaire|
|Status of Risk Reduction Activities|pending|Pending - Currently under development|Adverse Non-Medical Event Questionnaire|
|Status of Risk Reduction Activities|notundertaken|Not done or undertaken|Adverse Non-Medical Event Questionnaire|
| | | | |
|Exception Types for Protocol and Consent Changes after Adverse Non-Medical Event|mla|Adverse Non-Medical Event consisted of a missed lab or assessment by a participant (which does not jeopardize the study or increase risks to other participants)|Adverse Non-Medical Event Questionnaire|
|Exception Types for Protocol and Consent Changes after Adverse Non-Medical Event|mtd|Adverse Non-Medical Event consisted of a missed treatment or dose by a participant (which does not jeopardize the study or increase risks to other participants|Adverse Non-Medical Event Questionnaire|
|Exception Types for Protocol and Consent Changes after Adverse Non-Medical Event|otherreason|Other reason|Adverse Non-Medical Event Questionnaire|
| | | | |
|Study Enrollment Status|open|Open for enrollment|Continuing Review Questionnaire|
|Study Enrollment Status|closed|Closed to enrollment|Continuing Review Questionnaire|
|Study Enrollment Status|not-open|Not yet open|Continuing Review Questionnaire|
|Study Enrollment Status|open-no-participants|Open with no participants|Continuing Review Questionnaire|
| | | | |
|Study Intervention Status|complete|All interventions complete|Continuing Review Questionnaire|
|Study Intervention Status|continue-meds|Continuing interventions|Continuing Review Questionnaire|
|Study Intervention Status|continue-min-risk|Continuing interventions - minimal risk|Continuing Review Questionnaire|
| | | | |
|Study Funding Source|federal|Federal|Continuing Review Questionnaire|
|Study Funding Source|state|State|Continuing Review Questionnaire|
|Study Funding Source|industry|Industry|Continuing Review Questionnaire|
|Study Funding Source|foundation|Foundation|Continuing Review Questionnaire|
|Study Funding Source|institutional|Institutional|Continuing Review Questionnaire|
|Study Funding Source|departmental|Departmental|Continuing Review Questionnaire|
|Study Funding Source|otherfund|Other Funding Source|Continuing Review Questionnaire|
| | | | |
|Intervention Type|DBV|Drug/Biologic/Vaccine|Protocol Questionnaire|
|Intervention Type|DEV|Device|Protocol Questionnaire|
|Intervention Type|SBE|Social/Behavioral/educational (SBE)|Protocol Questionnaire|
|Intervention Type|PRO|Procedural|Protocol Questionnaire|
| | | | |
|Type of FDA exemption|IND|IND|Initiate a Study Questionnaire, Protocol Questionnaire and Adverse Medical Event Questionnaire|
|Type of FDA exemption|IDE|IDE|Initiate a Study Questionnaire, Protocol Questionnaire and Adverse Medical Event Questionnaire|
| | | | |
|Additional Investigator Role|COPI|Co-Principal Investigator|Protocol Questionnaire|
|Additional Investigator Role|COI|Co-Investigator|Protocol Questionnaire|
|Additional Investigator Role|PD|Program Director|Protocol Questionnaire|
| | | | |
|Research Indicator|RES|Research|Consent Questionnaire|
|Research Indicator|STDCR|Standard of Care|Consent Questionnaire|
| | | | |
|Risk Category|PHYS|Physical|Consent Questionnaire|
|Risk Category|NONPHYS|Non-Physical|Consent Questionnaire|
| | | | |
|Coverage for medical treatment from research related injury|TRTNOTCOV|Treatment not covered|Consent Questionnaire|
|Coverage for medical treatment from research related injury|RRICOV|Research Related injury covered|Consent Questionnaire|
|Coverage for medical treatment from research related injury|ACNOTCICOV|Acute but not chronic injury covered|Consent Questionnaire|
| | | | |
|Role or group who will have access to data|OTHINSTRES|Researchers at other institutions|Consent Questionnaire|
|Role or group who will have access to data|THISINSTRES|Researchers outside the study team at this institution|Consent Questionnaire|
|Role or group who will have access to data|EXTREGAUTH|External Regulatory Authorities|Consent Questionnaire|
| | | | |
|Deidentification detail|DEIDUSED|Identifiers might be removed from private information or biospecimens, and this information could then be used for future research studies or distributed to another investigator for future research studies without additional informed consent.|Consent Questionnaire|
|Deidentification detail|DEIDNOTUSED|Information or biospecimens collected will not be used or distributed for future research studies, even if deidentified.|Consent Questionnaire|
| | | | |
|launchContext name code|sourceQuestionnaireResponse|The content of the Questionnaire Response transferred to this Questionnaire during form launch|Protocol Questionnaire, Consent Questionnaire, Determination Letter Questionnaire, Recruitment Materials Questionnaire, Adverse Medical Event Questionnaire, Adverse Non-Medical Event Questionnaire and Continuing Review Questionnaire|
| | | | |
|Justification for Adverse Event Classification as Serious|ResultsInDeath<a href="#fn-3"><sup>3</sup></a>|Results in death|Adverse Medical Event Questionnaire|
|Justification for Adverse Event Classification as Serious|IsLifeThreatening<a href="#fn-3"><sup>3</sup></a>|Is Life-threatening|Adverse Medical Event Questionnaire|
|Justification for Adverse Event Classification as Serious|ResultsInHospitalization<a href="#fn-3"><sup>3</sup></a>|Requires or prolongs inpatient hospitalization|Adverse Medical Event Questionnaire|
|Justification for Adverse Event Classification as Serious|IsBirthDefect<a href="#fn-3"><sup>3</sup></a>|Is a congenital anomaly/birth defect|Adverse Medical Event Questionnaire|
|Justification for Adverse Event Classification as Serious|ResultsInDisability<a href="#fn-3"><sup>3</sup></a>|Results in persistent or significant disability/incapacity|Adverse Medical Event Questionnaire|
|Justification for Adverse Event Classification as Serious|RequiresPreventImpairment<a href="#fn-4"><sup>4</sup></a>|Requires intervention to prevent permanent impairment|Adverse Medical Event Questionnaire|
|Justification for Adverse Event Classification as Serious|Other<a href="#fn-3"><sup>3</sup></a>|Other|Adverse Medical Event Questionnaire|
| | | | |
|Outcome of Adverse Medical Event|RCVRED<a href="#fn-5"><sup>5</sup></a>|Recovered/Resolved|Adverse Medical Event Questionnaire|
|Outcome of Adverse Medical Event|RCVRING<a href="#fn-5"><sup>5</sup></a>|Recovering/Resolving|Adverse Medical Event Questionnaire|
|Outcome of Adverse Medical Event|NRCVRED<a href="#fn-5"><sup>5</sup></a>|Not recovered/Not resolved/Ongoing|Adverse Medical Event Questionnaire|
|Outcome of Adverse Medical Event|SEQL<a href="#fn-5"><sup>5</sup></a>|Recovered/Resolved with sequelae|Adverse Medical Event Questionnaire|
|Outcome of Adverse Medical Event|FATAL<a href="#fn-5"><sup>5</sup></a>|Fatal|Adverse Medical Event Questionnaire|
|Outcome of Adverse Medical Event|UNK<a href="#fn-5"><sup>5</sup></a>|Unknown|Adverse Medical Event Questionnaire|
| | | | |
|Other Actions Taken Regarding Study Intervention in Response to Adverse Event|NC<a href="#fn-6"><sup>6</sup>|Product dose or frequency of use not changed|Adverse Medical Event Questionnaire|
|Other Actions Taken Regarding Study Intervention in Response to Adverse Event|NA<a href="#fn-6"><sup>6</sup>|Not applicable|Adverse Medical Event Questionnaire|
|Other Actions Taken Regarding Study Intervention in Response to Adverse Event|UNK<a href="#fn-6"><sup>6</sup>|Unknown|Adverse Medical Event Questionnaire|
| | | | |
|Participant Accrual Type|PreviousAccrual|Previous Accrual|Continuing Review Questionnaire|
|Participant Accrual Type|AdditionalEnrollees|Additional enrollees this approval period|Continuing Review Questionnaire|
{: .grid}


<br>
### Example ResearchStudy resource (optional)
<br>
In the example, the research study category of C98388 Interventional Study from the <a href="http://ncimeta.nci.nih.gov">NCI Metathesaurus</a><a href="#fn-7"><sup>7</sup></a> codesystem is shown. This codesystem is not meant to imply that this codesystem is the required or suggested codesystem to use in the ResearchStudy category element in the sIRB utililization of the ResearchStudy resource.
<br>


<br>
### Copyright/Legal Notes for Codesystems


<div role="doc-endnotes" class="footnotes">

	<div role="doc-endnote" id="fn-1"><sup>1</sup>
		<a href="https://terminology.hl7.org/3.0.0/codesystems.html">HL7 CodeSystems Registry</a>. Content is copyright HL7. Licensed under creative commons public domain.
	</div>
<br>
	<div role="doc-endnote" id="fn-2"><sup>2</sup>
		The UCUM codes, UCUM table (regardless of format), and UCUM Specification are copyright 1999-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. <a href="https://ucum.org/trac/wiki/TermsOfUse">https://ucum.org/trac/wiki/TermsOfUse</a>.
	</div>
<br>
	<div role="doc-endnote" id="fn-3"><sup>3</sup>
		Based on the Boolean data elements for ICSR E.i.3.2 Seriousness Criteria at Event Level in the <a href="https://www.ich.org/page/e2br3-individual-case-safety-report-icsr-specification-and-related-files">Implementation Guide for
Electronic Transmission of Individual Case Safety Reports (ICSRs) E2B(R3) Data Elements and Message Specification, Version 5.02, 10 November 2016</a> by International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use (ICH).  Copyright International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use (ICH) and may be used, reproduced, incorporated into other works, adapted, modified, translated or distributed under a public license provided that the ICH's copyright is acknowledged at all times.
	</div>
<br>
	<div role="doc-endnote" id="fn-4"><sup>4</sup>	
		The value "Requires intervention to prevent permanent impairment" is from What is a Serious Adverse Event? at <a href="https://www.fda.gov/safety/reporting-serious-problems-fda/what-serious-adverse-event"> https://www.fda.gov/safety/reporting-serious-problems-fda/what-serious-adverse-event</a>, which is in the public domain.
	</div>
<br>		
	<div role="doc-endnote" id="fn-5"><sup>5</sup>	
		Based on the values in ICSR E.i.7 Outcome of Reaction / Event at the Time of Last Observation in the <a href="https://www.ich.org/page/e2br3-individual-case-safety-report-icsr-specification-and-related-files">Implementation Guide for Electronic Transmission of Individual Case Safety Reports (ICSRs) E2B(R3) Data Elements and Message Specification, Version 5.02, 10 November 2016</a> by ICH.  Copyright ICH. May be used, reproduced, incorporated into other works, adapted, modified, translated or distributed under a public license provided that the ICH's copyright is acknowledged at all times.
	</div>
<br>

	<div role="doc-endnote" id="fn-6"><sup>6</sup>
		These codes are additional values needed to broaden the existing HL7 Codesystem <a href="http://terminology.hl7.org/CodeSystem/v2-0251">actionTakenInResponseToTheEvent</a> to represent all of values in the ICSR Implementation Guide. ICSR G.k.8 Action(s) Taken with Drug in the <a href="https://www.ich.org/page/e2br3-individual-case-safety-report-icsr-specification-and-related-files">Implementation Guide for Electronic Transmission of Individual Case Safety Reports (ICSRs) E2B(R3) Data Elements and Message Specification, Version 5.02, 10 November 2016</a> by ICH. Copyright ICH. May be used, reproduced, incorporated into other works, adapted, modified, translated or distributed under a public license provided that the ICH's copyright is acknowledged at all times.
	</div>

<br>
	<div role="doc-endnote" id="fn-7"><sup>7</sup>
		NCI Metathesaurus at <a href="http://ncimeta.nci.nih.gov">http://ncimeta.nci.nih.gov</a> is in the public domain. For more details about the NCI Metathesaurus, see <a href="https://hl7.org/fhir/2021may/ncimeta.html">Using the NCI Metathesaurus with FHIR</a>.
	</div>

</div>

---

File: repos/HL7_SLASH_fhir-sirb/input/pagecontent/conformance_and_functionality_expectations.md


### Actors

<a id="fhirServer"></a>
**Host of the FHIR server (generally the lead principal investigator's institution)**<br>
In general, the lead principal investigator's institution will host the sIRB FHIR server that stores the Questionnaires and the QuestionnaireResponses. This is the server referenced in the [sIRB Server Capability Statement](CapabilityStatement-sIRB-CapabilityStatementServer.html). 

<a id="clientSoftware"></a>
**FHIR Questionnaire Management Software (could be the host institution’s research study system, another type of software or the sIRB on FHIR software)**
The lead principal investigator's institution will also host a website or other sIRB software to render the blank forms and display the completed questionnaire responses for edits, review or saving to pdf. This is the client referenced in the [sIRB Client Capability Statement](CapabilityStatement-sIRB-CapabilityStatementClient.html).  The client REST FHIR Questionnaire Management Software could be the research study system of the lead principal investigator's institution, another type of software or the sIRB on FHIR software).

<br>
<br>
**Relying Sites (generally non-hosts)**<br>
If the relying sites wish to interact with the forms without the requirement of having a FHIR server, then the host institution must provide [client software](#clientSoftware) or a website with the client software for viewing, completing and storing the forms on the host institution's FHIR server. If the relying sites wish to use a FHIR server, then the FHIR server SHOULD have the capabilities defined in the "[Host of the FHIR server (generally the lead principal investigator's institution)](#fhirServer)" section.
<br>
<br>
*Notes about actors:*
1. The single Institutional Review Board (sIRB) is either the ethics review board at the lead principal investigator's 
institution or a 3rd party ethics review board retained by the lead principal investigator's institution. The sIRB is relevant for business practices and for workflow processes, although it is not a separate actor because it acting on behalf of the lead principal investigator's institution. The sIRB will need access to the [research study system, the sIRB on FHIR software or other sIRB software](#clientSoftware)(client software) to review the completed forms.

2. In the future state, ideally, an organization can be identified to host the official versions of the forms. If an organization agrees to host the forms, then the FHIR server capabilities will be the same as [sIRB Server Capability Statement](CapabilityStatement-sIRB-CapabilityStatementServer.html), but using only the Questionnaire resource.
<br>
<br>
### Conformance Verbs

The conformance verbs - SHALL, SHOULD, MAY - used in this implementation guide are defined in [FHIR Conformance Language](http://hl7.org/fhir/R4/conformance-rules.html#conflang0).
<br>
<br>

### Capability Statements

The [sIRB Server Capability Statement](CapabilityStatement-sIRB-CapabilityStatementServer.html) describes the expectations for the server. A compliant server SHALL adhere to the requirements listed in this resource, and implement the RESTful behavior according to the FHIR specification. 
<br>

The [sIRB Client Capability Statement](CapabilityStatement-sIRB-CapabilityStatementClient.html) describes the expectations for the client. A compliant client SHALL adhere to the requirements listed in this resource, and implement the RESTful behavior according to the FHIR specification.
<br>
<br>



---

File: repos/HL7_SLASH_fhir-sirb/input/pagecontent/downloads.md

**Full Implementation Guide**

The entire implementation guide (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

In addition there are format specific definitions files.
* [XML](definitions.xml.zip)
* [JSON](definitions.json.zip)
* [TTL](definitions.ttl.zip)

**Examples:** all the examples that are used in this Implementation Guide available for download:
* [XML](examples.xml.zip)
* [JSON](examples.json.zip)
* [TTl](examples.ttl.zip)

**Referenced Implementation Guide**

Download the Structured Data Capture (SDC) Implementation Guide: [Structured Data Capture (SDC)](http://hl7.org/fhir/uv/sdc/STU3/full-ig.zip)

---

File: repos/HL7_SLASH_fhir-sirb/input/pagecontent/index.md

Data standards to move data and documents from clinical research sites to a single ethics review board in support of the "NIH Policy on the Use of a Single Institutional Review Board for Multi-Site Research".

### Background
Launching a multi-site clinical research study is frequently a long and involved process that can delay the development of potentially effective clinical treatment. Part of this process is applying for and receiving the review and approval of an ethics review board, termed the Institutional Review Board or IRB.  This IRB is reponsible for reviewing all study methodology prior to enrollment of any participants, as well as providing ongoing monitoring of the study. Ethics review and approval processes conducted by IRBs have been cited as a major contributor to delays in initiating multi-site studies. In response, the set of protections for research subjects in the code of federal regulations for human-subjects research (Common Rule, 45 CFR Part 46.114) was revised with a requirement that a single IRB be named when multiple sites are using the same protocol. Rather than each site waiting for approval of a study by its local IRB before enrolling subjects, a single IRB review will expedite approval and improve the timeline for study initiation and completion. Researchers commented about the redundancy of effort, additional costs, and administrative burdens that often lead to delays and imbalances in enrollment of research participants in multi-site clinical studies. Before creating the questionnaires, considerable effort was made to examine and compare the existing forms from a sample set of institutions. In arriving at the versions of the questionnaires in the IG, the content of the forms from the sample set were harmonized and rationalized in conjunction with the Common Rule provisions, where applicable.

### Project Goals
The project is a proof of concept in hopes of moving toward a national standard for the content of the research study forms in widespread use.  As institutions trial these forms, it is expected that the authors will receive considerable feedback on the content of the forms.  

The intent of this project is to use the [Structured Data Capture (SDC)](http://hl7.org/fhir/uv/sdc/STU3/) features of the Questionnaire resource so that the research study forms are standardized for exchange between the sIRB and the relying institutions, with a national standard being established so that all sIRB studies will use the same content with the same level of granularity in their forms.
![Reviewing and Relying Sites](Cooperative Research Terminology.jpg){:width="100%"}
<br />
Right now, research study forms in common use have large text boxes which are not easily integrated with the research study management software, as each text box contains too many different fields of data.  Our design of the forms is novel in that it separates concepts into separate questions, as individual questionnaire items.

The end product of the project consists of the QuestionnaireResponses to be exchanged.  The forms are complete documents with a separate existence from any of the current FHIR resources. The form data elements should be considered in their entirety in the context of the complete document.  The data should be maintained in FHIR format for editing and transmission.

The sIRB questionnaires, if adopted, would be replacing paper forms, word processing documents (eg. MS Word or Google Docs) or off-board study forms software that is not integrated with the institution’s existing research study management software.  The forms would also be independent of any particular form management software, allowing different sites to use the software of their choice so long as that software complies with the FHIR standard.



### Significance
In lieu of ad hoc transfers of PDFs and other document formats via email or online submission, this project utilizes FHIR based standards to facilitate document exchange. A standards enabled process leveraged by software has the potential to significantly decrease the extensive manual tasks that have become associated with using a single IRB system. This use of FHIR standards to meet the need for an efficient exchange of data and documents will improve the operational efficiency. 

### Coverage
This Implementation guide covers the suite of seven research study questionnaires for sIRB studies: Determination Letter Questionnaire, Protocol Questionnaire, Consent Form Questionnaire, Recruitment Materials Questionnaire, Adverse Medical Events Questionnaire, Non-Medical Events Questionnaire and Continuing Review Questionnaire. It also includes an Initiate a Study Questionnaire for an optional, but suggested, implementation that takes advantage of the SDC Populate functionality. The Initiate a Study Questionnaire is intended to collect data for fields common to many of the forms, such as the Study Title, Study Protocol Number, Principal Investigator (PI) Name, PI Address, PI email, PI phone, sIRB site name, sIRB site address and the name and address for each relying site. The SDC Populate functionality can then use the data captured in the Initiate a Study Questionnaire to populate the corresponding fields in the suite of seven research study questionnaires.

### Scope
The sIRB implementation guide deals with creation and exchange of standardized sIRB forms and form responses using FHIR questionnaire and questionnaire response resources. The questionnaires may have nested structures and embed skip/branching logics to display appropriate questions based on previous answers. Extraction of data elements/resources from questionnaire responses is out of scope for the current version of sIRB implementation guide. Extraction can be incorporated into your specific implementation by referring to [Structured Data Capture (SDC) implementation guide](http://hl7.org/fhir/uv/sdc/STU3/extraction.html).

### Assumptions
The implementation guide assumes that the implementer has or will have a capability to send, receive, render and display FHIR questionnaires and questionnaire responses. Implementers may consider using free software such as [National Library of Medicine's (NLM)](https://www.nlm.nih.gov/) FHIR Questionnaire [rendering tool](http://lhncbc.github.io/lforms/) or incorporate these standards into a tool of their own. [Exchange](https://www.hl7.org/fhir/R4/exchange-module.html) of resources can be achieved by any of the FHIR messaging mechanisms. Please refer to FHIR standard documentation, open source implementations of FHIR specifications, and FHIR Messaging for additional information. 

### Design Decisions
Some of the relying sites may be small clinics or rural providers that do not have their own FHIR server.  They may be using paper forms at this time for any research study activities. To allow for easier adoption of the FHIR forms and make it more likely for the smaller sites to transition away from paper forms, it was decided to keep the technical and implementation burden very low.  

In order to keep the implementation burden very low, the project was designed with the intent that the institutions would not be integrating the questionnaires with any of their existing research study management software.  Lists of the research studies, names of principal investigators, names of study participants and all study details would be stored, maintained and searched from within the existing research study management software that already exists at the institutions.  

Some of the institutions may participate in a sIRB study only once every few years. Therefore, they may not want to devote time and money to implementing a large set of FHIR resources if they are not using a FHIR server already if they can get the forms created and transmitted using only Questionnaire and QuestionnaireResponse resources. 

Some of the sites may never implement a FHIR server, instead accessing the forms via web browser using the form viewers and FHIR servers maintained by the lead (sIRB) site. 


A simple JavaScript-based website (sIRB on FHIR) was built as part of the project to demonstrate the ease of implementation.  The code is available at https://github.com/kirubel22/sIRB_Site_New and the website can be viewed at [https://sirb-on-fhir.dev.cloud.duke.edu/](https://sirb-on-fhir.dev.cloud.duke.edu/).

The Questionnaires were built with the free and open source NLM Form Builder available from [https://lhcformbuilder.nlm.nih.gov/](https://lhcformbuilder.nlm.nih.gov/).

The Questionnaires and Questionnaire Responses are rendered with the free and open source Lister Hill Center (LHC) Forms software available from [http://lhncbc.github.io/lforms/](http://lhncbc.github.io/lforms/).  The sIRB on FHIR software uses the JavaScript version of the LHC Forms widget.


All [code sets](codesystems_descriptions.html) are defined within the questionnaire form definitions.  No external valuesets are used. Where concepts in the forms aligned to concepts in existing Code Systems, the existing Code Systems were used to allow for interoperability with resources.  As the forms stabilize, the temporary codes defined in this implementation guide will be submitted to and migrate into other ‘official’ terminologies, such as SNOMED or HL7’s shared terminologies.


As part of the proof of concept, the sIRB on FHIR software creates a ResearchStudy resource in the FHIR server for each research study.  A sample of a ResearchStudy resource created by the sIRB on FHIR software is [included](ResearchStudy-ResearchStudyExample-sIRB.html).  In the future, information from this resource can also be used to report study details to ClinicalTrials.gov.

References to other resources (PlanDefinition and Practitioner) used by the ResearchStudy resource are ['contained'](https://www.hl7.org/fhir/references.html#contained) references.  If an institution implements the sIRB questionnaires after a trial use, the best practice recommended is to use references to the full PlanDefinition and Practitioner resources.

The use of the ResearchStudy resource is completely optional.  The official record at this time is the QuestionnaireResponse.  There is no expectation in the implementation that the software will use the ResearchStudy resource.

### Populate
The intention is that the 7 core forms will all be populatable using the data collected in the Initiate a Study Questionnaire.  The populate functionality will save time in data entry, improve data consistency and reduce typing errors.

If an institution is not using the populate functionality, then the Initiate a Study Questionnaire can be used to gather data to make a record of the research study in the ResearchStudy resource, to gather data to register the study with ClinicalTrials.gov  or it can be left out of the implementation altogether. 

![Populate Process Flow](Populate Process Flow.jpg){:width="100%"}
<br />

### Actors
1. sIRB Form Repository: A form repository that stores standardized sIRB forms. IRB systems will request form templates from this repository.
2. Central IRB Application: An IRB software system that a PI will access to retrieve forms to complete and submit.
3. Relying IRB Application: An IRB software that receives and renders completed and approved forms by the central IRB.

### Forms by Intended Use
![sIRB FHIR forms](sirb FHIR forms.jpg){:width="100%"}
<br />


### Suite of Seven Forms for sIRB Studies and the Initiate a Study Form
<a id="renderedForms"></a>
<br />

| Form (Link to Page) | Link to External Questionnaire Viewer |
| ---------------------------  |  ----------------------------------  |
| [Initiate Study](Questionnaire-sirb-initiate-study-questionnaire-populate.html)| [Viewer](https://lhncbc.github.io/questionnaire-viewer/?q=https://build.fhir.org/ig/HL7/fhir-sirb/Questionnaire-sirb-initiate-study-questionnaire-populate.json)|
| [Protocol](Questionnaire-sirb-protocol-questionnaire-populate.html) | [Viewer](https://lhncbc.github.io/questionnaire-viewer/?q=https://build.fhir.org/ig/HL7/fhir-sirb/Questionnaire-sirb-protocol-questionnaire-populate.json) |
| [Consent](Questionnaire-sirb-consent-questionnaire-populate.html) | [Viewer](https://lhncbc.github.io/questionnaire-viewer/?q=https://build.fhir.org/ig/HL7/fhir-sirb/Questionnaire-sirb-consent-questionnaire-populate.json) |
| [Determination Letter](Questionnaire-sirb-determination-letter-questionnaire-populate.html) | [Viewer](https://lhncbc.github.io/questionnaire-viewer/?q=https://build.fhir.org/ig/HL7/fhir-sirb/Questionnaire-sirb-determination-letter-questionnaire-populate.json) |
| [Recruitment Materials](Questionnaire-sirb-recruitment-materials-questionnaire-populate.html) | [Viewer](https://lhncbc.github.io/questionnaire-viewer/?q=https://build.fhir.org/ig/HL7/fhir-sirb/Questionnaire-sirb-recruitment-materials-questionnaire-populate.json) |
| [Medical Adverse Events](Questionnaire-sirb-adverse-event-questionnaire-populate.html) | [Viewer](https://lhncbc.github.io/questionnaire-viewer/?q=https://build.fhir.org/ig/HL7/fhir-sirb/Questionnaire-sirb-adverse-event-questionnaire-populate.json) |
| [Non Medical Adverse Events](Questionnaire-sirb-nonmedicalevent-questionnaire-populate.html) | [Viewer](https://lhncbc.github.io/questionnaire-viewer/?q=https://build.fhir.org/ig/HL7/fhir-sirb/Questionnaire-sirb-nonmedicalevent-questionnaire-populate.json) |
| [Continuing Review](Questionnaire-sirb-continuing-review-questionnaire-populate.html) | [Viewer](https://lhncbc.github.io/questionnaire-viewer/?q=https://build.fhir.org/ig/HL7/fhir-sirb/Questionnaire-sirb-continuing-review-questionnaire-populate.json) |

<br />
<br />

Note: The [External Questionnaire Viewer](https://lhncbc.github.io/questionnaire-viewer/) is part of the  [LHC FHIR Tools](https://lhcforms.nlm.nih.gov/)  set of software and services created by National Library of Medicine, Lister Hill National Center for Biomedical Communications (LHNCBC).  For support requests, please open a support request at [https://github.com/lhncbc/lforms/issues](https://github.com/lhncbc/lforms/issues).

<br />
### Workflow Overview

In the workflow outlined below, a Central IRB system requests one of the standardized sIRB questionnaires forms from the repository as a form of a questionnaire resource. The central IRB system receives the questionnaire response resource and renders/displays it to the Principal Investigator-PI (user). The PI enters and submits responses applicable to the selected standardized sIRB form. The submitted responses will be saved as questionnaire response resources on the Central IRB's FHIR server. The Central IRB will serve as a single source of truth for IRB Documents. The relying IRB system will send a RESTful request or implement a subscription resource to get most recent forms from the central IRB's FHIR server.

![sIRB dataflow](sirb-dataflow.jpg){:width="100%"}
<br />
Number 1, The software, whether our sIRB on FHIR software or the commercial IRB software at the sIRB, requests the official sIRB Questionnaire from the FHIR File Server at the central repository responsible for maintaining the official FHIR Questionnaires.
Number 2, The FHIR Questionnaire is transmitted to the sIRB via the Internet to the FHIR File server associated with the IRB sofrware.
Number 3 The IRB software at the sIRB processes the information in the FHIR Questionnaire and creates the Data Collection Form.  This form is then presented to the user.
Number 4 After the study coordinator inputs the data and presses the “Submit” button, the data are saved into a structured FHIR Questionnaire Response and stored in the FHIR File Server at the sIRB.
Number 5 The data  captured as a FHIR Questionnaire Response is rendered by the IRB software in a user-friendly End Result Display.  So this is the viewing of the data by reviewers at the IRB or other staff in a web browser, pdf, or within the custom IRB software. 
Number 6, After the data is reviewed and finalized, the FHIR Questionnaire Response is transmitted over the Internet to the Relying IRB’s FHIR File Server for use within their systems.
Number 7, Each of the relying IRBs can use their own software (whether sIRB on FHIR or a commercial vendor and render display friendly End Result Displays for their users.




### Considerations for the Future
During this trial, the Questionnaires are intended to be self-contained without the need to use any other resources such as Practitioner, ResearchSubject, AdverseEvent or Organization.

After this implementation guide matures further - and because the data in the FHIR questionnaires is being captured in a standardized, structured way - it is expected that the larger institutions will want some or complete integration with their existing research study management software, which may or may not be FHIR-based. 

One challenge is that although the forms utilize some data that can be found in other resources, much of the data contained in the forms does not currently have corresponding data elements in current FHIR resources. 

Another challenge is that the primary purpose and scope of the sIRB forms is different from questionnaires that would be designed to capture data to capture study records using FHIR resources.

Also, many of the existing resources serve different purposes and contexts than the sIRB forms.  The sIRB forms are essentially detailed requests for different types of approval and reports of study activities. 

Nevertheless, the structured nature of the data capture lends itself well to extraction and storage of some of the form data into individual FHIR resources, should the institutions or their software vendors opt for this implementation.  

Also, appropriate FHIR resources for storage of the content of each complete form as a unique document will need to be evaluated or developed in the next phases.


As this is a trial of the Questionnaires, decisions regarding how to populate some of the form data from existing standard FHIR resources implemented by potential study sites will need to be made in future work in order to achieve interoperability and integration with other systems for a more streamlined implementation.

Capturing the provenance of the requests for approvals, approval decisions and reports would make for a more robust implementation if the forms are incorporated into a study management software system that has FHIR capabilities.



### Credits
These standards were developed by Duke University with assistance from University of Arkanasas of Medical Sciences and Vanderbilt University.

### Dependencies
These standards were developed based upon the [R4](http://hl7.org/fhir/R4/) FHIR version.

---

File: repos/HL7_SLASH_fhir-sirb/input/pagecontent/otherrequired.md

The following sections are included as part of the HL7 initiative to provide increased transparency regarding cross-version compatibility, global profiles, dependencies and intellectual property.
<br>
<br>
### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

<br>

### IG Dependencies

{% include dependency-table.xhtml %}

<br>

### Globals Table

{% include globals-table.xhtml %}

<br>

### Copyright/Legal


* See the [Copyright/Legal](codesystems_descriptions.html#copyrightlegal-notes-for-codesystems) section on the [Descriptions of CodeSystems](codesystems_descriptions.html) page.


* Review the following notices:

{% include ip-statements.xhtml %}




---

File: repos/HL7_SLASH_fhir-sirb/input/pagecontent/questionnaire-sirb-adverse-event-questionnaire-intro.md

The Adverse Events Questionnaire is intended to create a Medical Adverse Event Report to the sIRB to notify them of the Medical Adverse Event, the medical description of the event, the resolution of the event, whether there were associated protocol violations and the relationship of the medical event to the study agent.


---

File: repos/HL7_SLASH_fhir-sirb/input/pagecontent/questionnaire-sirb-consent-questionnaire-intro.md

The Consent Form Questionnaire creates the exact Consent Form content word-for-word that will be shown to the sIRB’s Institutional Review Board to be approved to use during the study.  The rendering and pdf format created by the software are also provided to the sIRB to be approved. 


---

File: repos/HL7_SLASH_fhir-sirb/input/pagecontent/questionnaire-sirb-continuing-review-questionnaire-intro.md

The Continuing Review Questionnaire collects data used in a report which is then provided to the sIRB on a regular basis so that continued activity on the study can be reviewed.


---

File: repos/HL7_SLASH_fhir-sirb/input/pagecontent/questionnaire-sirb-initiate-study-questionnaire-intro.md

This questionnaire serves as an initial collection form for recurring data elements that are present in the other forms.  These other forms will then subsequently prepopulate with these data to minimize data entry time and errors.


---

File: repos/HL7_SLASH_fhir-sirb/input/pagecontent/questionnaire-sirb-nonmedicalevent-questionnaire-intro.md

The Non-Medical Adverse Questionnaire is intended to create a Non-Medical Adverse Event Report to the sIRB.  An example of a Non-Medical Adverse Event is the inadvertent disclosure to several participants that they are receiving the placebo in a blind study.  The Non-Medical Adverse Questionnaire captures details for the report such as the root cause of the event, the corrective action plan and associated changes to the protocol or consent form as a result of the event.


---

File: repos/HL7_SLASH_fhir-sirb/input/pagecontent/questionnaire-sirb-protocol-questionnaire-intro.md

The Protocol Questionnaire is used by the Principal Investigator and/or the Study Coordinator to justify the study and request the approval for the study.  Contents include a synopsis for non-technical board members and a detailed protocol discussion.  Other important sections of form requesting approval for the protocol include work history of the researchers, risks to university personnel performing the research, risk mitigations being undertaken by the researchers, long discussions of the existing body of knowledge and explanations of how the study can be rationalized in light of the existing knowledge on this study topic.  


---

File: repos/HL7_SLASH_fhir-sirb/input/pagecontent/questionnaire-sirb-recruitment-materials-questionnaire-intro.md

The Recruitment Materials Form is used to seek approval from the sIRB to use the specified recruitment materials (at the requested time, place, duration and medium) during the study and for the methods of communication that are proposed for responding to the study participants.


---

File: repos/HL7_SLASH_fhir-sirb/input/pagecontent/questionniare-sirb-determination-letter-questionnaire-intro.md

This questionnaire collects information required in the production of a determination letter. These data are used to send a Determination Letter Report to each site when a decision is made regarding the institution’s approval to serve as a relying site.


---

File: repos/HL7_SLASH_fhir-sirb/input/pagecontent/workflow_diagrams.md

# sIRB Ideal Workflow (High Level)
<br>
<br>
## Initial Submission
<br>
1.	Lead Principal Investigator (Lead PI) creates a new study in sIRB system (required to obtain IRB study identifier). 
2.	Lead PI completes the Initiate a Study Questionnaire (FHIR) (used to pre-populate other FHIR questionnaires). 
3.	Lead PI submits initial study application via the FHIR sIRB system. 
a.	Initial application submission includes sIRB Study Application and builds key study documents to be reviewed and approved by the sIRB before they can be sent to Relying Sites. 
b.	Key Study Documents built in FHIR include:  Study Protocol, Informed Consent, HIPAA Authorization, and Recruitment Template.
c.	Key Study Documents, when rendered by FHIR, are uploaded into the sIRB system. 
4.	Once IRB Study Application and associated FHIR documents are complete, the Lead PI signs off on the submission and the application with FHIR documents is sent to the sIRB for review. 
5.	The sIRB communicates with the Lead PI as necessary to obtain an acceptable application. 
6.	Once the sIRB has approved the IRB Study Application with associated documents, the Lead PI receives notification of submission approval from the sIRB.  
a.	Submission approval consists of approval of Study Protocol and submitted study documents/templates.

<table><tr><td><img src="Initial Submission 20211021.jpg" style="width:1150px;height:auto;" /></td></tr></table>

## Site addition
<br>
1.	Once the Lead PI receives the notification of approval from the sIRB system, they are able to begin the process of adding (previously identified) Relying Sites to the approved study.
2.	The Relying Site completes Reliance Documents and the Local Context Survey. 
3.	Once the Relying Site has completed the reliance process, they will send, via FHIR the Cede Decision Letter/Reliance Decision Letter to the Lead PI.
4.	The Lead PI will make the approved study documents available, via FHIR, to the identified Relying Site. 
a.	This electronic packet includes the sIRB approved Study Protocol and sIRB approved study templates (Informed Consent, HIPAA Authorization, Recruitment Template).
b.	The Relying Site will update the Informed Consent, HIPAA authorization, and recruitment materials for Relying Site specific local context and policies/considerations specific to the institution for which the Relying Site is affiliated.  
c.	Once these updates are made, the sIRB and the Lead PI will be automatically notified that the Relying Site documentation is completed (FHIR). 
5.	The Lead PI receives the Relying Site study documents via FHIR.  
6.	An Amendment Form to the approved study is generated in the sIRB system (FHIR). 
7.	Once the Relying Site addition Amendment Form is approved by the sIRB, the Lead PI receives notification of approval (sIRB system). 
8.	Official approval letter and sIRB approved documents are made available to Relying Site (FHIR). 

<table><tr><td><img src="Site Addition 20211021.jpg" style="width:1150px;height:auto;"  /></td></tr></table>


## Continuing Review
<br>
1.	sIRB notifies Lead PI and Relying Sites (via FHIR) of the need for a continuing review.
a.	The date of the Continuing Review is based on the approval date of the initial sIRB study application, not the approval of an individual Relying Site.
2.	The Lead PI creates a Continuing Review FHIR document for each Relying Site from the study electronic data capture system. 
3.	Relying Sites reviews Continuing Review FHIR document information as it relates to any previously reported events, enrollments, and withdrawals. Relying Sites also add the number of approached individuals. This information is sent to the Lead PI via FHIR. 
4.	Once the Lead PI receives the required information from Relying Sites, the Lead PI logs into the sIRB system to complete the Continuing Review form. 
a.	All of the Relying Site level documentation is compiled into a single study level report that is uploaded into the sIRB system. 
5.	Once the sIRB completes their review, an approval is issued via the sIRB system to the Lead PI. 
6.	The sIRB system sends a copy of the Continuing Review approval and the updated sIRB approved Informed Consent to the Relying Sites (FHIR). 

<table><tr><td><img src="Continuing Review 20211021.jpg" style="width:1150px;height:auto;" /></td></tr></table>

## UPIRTSO/Reportable Events
<br>
1.	If the Lead PI or a Relying Site experiences an event (safety or protocol violation), they send, via FHIR, the necessary information or documentation (as outlined by the sIRB) to the Lead PI. 
2.	Upon receiving the event information from the Relying Site, the Lead PI reviews this information and completes a Reportable Event form in the sIRB system. 
3.	Depending on the severity of the event, the type of review by the sIRB will determine the remediation plan including, but not limited to, a Corrective Action Plan with a timeline for completion and reporting back to the sIRB. 
4.	The Lead PI will complete the recommended course of action and provide a report to the sIRB. 

<table><tr><td><img src="Reportable Events 20211021.jpg" style="width:1150px;height:auto;"  /></td></tr></table>

**Note**:  The ideal workflow is based on the minimum required by the Common Rule.  In particular, under the Common Rule Relying Sites are not even required to have their own IRBs so the only IRB that is shown is the one for the sIRB.

---

