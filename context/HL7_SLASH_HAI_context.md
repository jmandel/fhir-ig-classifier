File: repos/HL7_SLASH_HAI/input/pagecontent/acknowledgements.md

<div>
This implementation guide was produced and developed by Lantana Consulting Group in conjunction with the Division of Healthcare Quality Promotion in the National Center for Emerging and Zoonotic Infectious Diseases (NCEZID) at the Centers for Disease Control and Prevention (CDC). Its development and ultimate deployment is a result of the dedication of the team—led by Daniel A. Pollock, M.D., Surveillance Branch Chief, Division of Healthcare Quality Promotion, NCEZID, CDC—and their support of the development of interoperable data standards for the CDC’s National Healthcare Safety Network (NHSN). 
</div>
<div>
	<br />The best standards are those driven by business requirements. A strong set of Healthcare Associated Infection (HAI) surveillance application vendors monitor, evaluate, and test each release of this guide.  
</div>
<div>
	<br />Past contributors: The vendors who participated in the 2007-2008 pilot activities of Bloodstream Infection Reports and Surgical Site Infection deserve special thanks and acknowledgment: MedMined™ services from Cardinal Health, EpiQuest, ICPA, Premier, TheraDoc, and Vecna Technologies. Throughout the development of this guide, Marla Albitz provided essential translation of NHSN business and technical requirements so that Kate Hamilton, Bob Dolin, Rick Geimer, and Susan Hardy could turn those requirements into a CDA-compliant specification. Liora Alschuler provided oversight and review. Additional contributors to the DSTU releases have been Jonathan Edwards, Maggie Dudeck, Dawn Sievert, Teresa Horan, Mary Andrus, Melinda Neuhauser, Ruby Phelps, Mindy Durrance, Alicia Shugart, Tygh Walker, Chris Cole, Cindy Gross, and Scott Fridkin (data specifications); Wenkai Li, Pavla Frazier, Gaye Dolin, Margaret Marshburn, Rob Hausam, Sundak Ganesan, and Denny Cordy (vocabulary); Kelly Peterson (database administration); Venu Sarraff (data importation); and Brett Marquard and Lauren Wood (project management and technical editing). We also thank Ted Klein, Cecil Lynch, and Daniel Vreeman for timely issuance of identifiers and codes.  
</div>


<br />

| | | | |
|-----|-----|-----|-----|
|Primary Editor:|Sarah Gaunt|Lantana Consulting Group|sarah.gaunt@lantanagroup.com|
|Co-Editor:|Mindy Durrance|Leidos Consultant to CDC/NHSN|mdq1@cdc.gov|
|Co-Editor:|Daniel Pollock, M.D.|CDC|DPollock@cdc.gov|
|Co-Editor:|Ahmed Tahir|Leidos Consultant to CDC/NHSN|nmn8@cdc.gov|
|Co-Editor:|Barry Rhodes|CDC|mbr1@cdc.gov|
|Co-Editor:|Sheila Abner|CDC|sha8@cdc.gov|
|Co-Editor:|Amy Webb|Lantana Consulting Group|amy.webb@lantanagroup.com|
|Co-Editor:|James Davis|Leidos Consultant to CDC/NHSN|mync0@cdc.gov|
|Co-Editor:|George Koromia|Lantana Consulting Group|george.koromia@lantanagroup.com|
|Co-Editor:|Beau Bannerman|Lantana Consulting Group|beau.bannerman@lantanagroup.com|
|Co-Editor:|Lauren Wood|Lantana Consulting Group|lauren.wood@lantanagroup.com|
|Co-Editor:|Zabrina Gonzaga|Lantana Consulting Group|zabrina.gonzaga@lantanagroup.com|
|Co-Editor:|David deRoode|Lantana Consulting Group|david.deroode@lantanagroup.com|
|Co-Chair:|Calvin Beebe|Mayo Clinic|cbeebe@mayo.edu|
|Co-Chair:|Austin Kreisler|Leidos Consultant to CDC/NHSN|duz1@cdc.gov|
|Co-Chair:|Brett Marquard|River Rock Associates|brett@riverrockassociates.com|
|Co-Chair:|Gaye Dolin M.S.N., R.N. |Intelligent Medical Objects |gdolin@imo-online.com|
|Co-Chair:|Sean McIlvenna| Lantana Consulting Group|sean.mcilvenna@lantanagroup.com|
|Co-Chair:|Benjamin Flessner|Redox|benjamin@redoxengine.com|
|Technical Editor:|Diana Wright|Lantana Consulting Group|diana.wright@lantanagroup.com|

---

File: repos/HL7_SLASH_HAI/input/pagecontent/audience.md

The audience for this work is all developers of software systems who want to enable their systems for reporting HAI data to the NHSN.

---

File: repos/HL7_SLASH_HAI/input/pagecontent/design_considerations.md

This IG specifies a FHIR Questionnaire-based approach. This approach takes advantage of the FHIR Questionnaire resource that has been designed as an organized collection of questions intended to solicit information from individuals involved in the healthcare domain. This closely mirrors the actual NHSN forms.

* The Questionnaire profile [Healthcare Associated Infection Single-Person Report Questionnaire](StructureDefinition-hai-single-person-report-questionnaire.html) defines constraints that all HAI NHSN single-person report forms (Questionnaire instances) must conform to.

* The QuestionnaireResponse profile [Healthcare Associated Infection Single-Person Report QuestionnaireResponse](StructureDefinition-hai-single-person-report-questionnaireresponse.html) defines constraints that all hospital-completed responses to HAI NHSN single-person report forms (QuestionnaireResponse instances) must conform to.

* The Questionnaire profile [Healthcare Associated Infection Population Summary Report Questionnaire](StructureDefinition-hai-population-summary-questionnaire.html) defines constraints that all HAI NHSN population summary report forms (Questionnaire instances) must conform to.

* The QuestionnaireResponse profile [Healthcare Associated Infection Population Summary Report QuestionnaireResponse](StructureDefinition-hai-population-summary-questionnaireresponse.html) defines constraints that all hospital-completed responses to HAI NHSN population summary report forms (QuestionnaireResponse instances) must conform to.

* The [Questionnaire Instances section](artifacts.html#questionnaire-instances) has links to:
    * Questionnaire instances that define the questions and possible answers for all the reports in this guide
* The [QuestionnaireResponse Examples section](artifacts.html#questionnaireresponse-examples) has links to:
    * QuestionnaireResponse examples of completed QuestionnaireResponses for all the reports in this guide

---

File: repos/HL7_SLASH_HAI/input/pagecontent/downloads.md

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

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}

---

File: repos/HL7_SLASH_HAI/input/pagecontent/index.md

### Overview

This implementation guide (IG) specifies standards for electronic submission of Healthcare Associated Infection (HAI) reports to the National Healthcare Safety Network (NHSN) of the Centers for Disease Control and Prevention (CDC). This IG contains a library of FHIR profiles for electronic submission of HAI reports to the NHSN.

As reports are modified and new report types are defined, CDC and Health Level Seven (HL7) will develop and publish additional constraints.

Throughout this process, CDC remains the authority on NHSN data collection protocols. When healthcare enterprises choose to participate in NHSN, they must report to CDC occurrences such as specific reportable procedures, even those without complications, and events such as a bloodstream infection, either confirmed by a positive blood culture or supported by a patients clinical symptoms. This specification opens the channel for data submission by all applications compliant with the data coding requirements defined here.

Note that participation in the NHSN requires enrollment and filing of reporting plans, which are not defined by this specification. For an overview of NHSN and full information on NHSN participation requirements, see: [http://www.cdc.gov/nhsn](http://www.cdc.gov/nhsn). Provisions of the Public Health Service Act protect all data reported to NHSN from discovery through the Freedom of Information Act (FOIA).



### Authors

<table>
<thead>
<tr>
<th>Name</th>
<th>Email/URL</th>
</tr>
</thead>
<tbody>
<tr>
<td>HL7 International - Structured Documents</td>
<td><a href="http://www.hl7.org/Special/committees/structure" target="_new">http://www.hl7.org/Special/committees/structure</a></td>
</tr>
</tbody>
</table>




---

File: repos/HL7_SLASH_HAI/input/pagecontent/mapping-los-denom.md

### Late Onset Sepsis/Meningitis Denominator Mapping to CDA

<table class="codes">
  <thead>
    <tr>
      <th>FHIR QuestionnaireResponse elements</th>
      <th>CDA Mapping</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>QuestionnaireResponse.identifier</td>
      <td>ClinicalDocument/id</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse.code.code="51897-7"</td>
      <td>ClinicalDocument/code</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse.subject</td>
      <td>ClinicalDocument/recordTarget</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse.author</td>
      <td>ClinicalDocument/author</td>
    </tr>
  </tbody>
</table>

<br/>

<table class="codes">
  <thead>
    <tr>
      <th>item</th>
      <th>item.linkId</th>
      <th>CDA Mapping</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>date-collected</td>
      <td>Year and month data collected for this location</td>
      <td>ClinicalDocument/documentationOf/serviceEvent/effectiveTime</td>
    </tr>
    <tr>
      <td>facility</td>
      <td>Facility ID</td>
      <td>ClinicalDocument/componentOf/encompassingEncounter/location/healthCareFacility/id</td>
    </tr>
    <tr>
      <td>date-admitted-to-facility</td>
      <td>Date Admitted to Facility</td>
      <td>ClinicalDocument/componentOf/encompassingEncounter/effectiveTime</td>
    </tr>
    <tr>
      <td>location-within-facility-encounter-group</td>
      <td>Location Within Facility Encounter</td>
      <td>Location Within Facility Encounter</td>
    </tr>
    <tr>
      <td>facility-location-type</td>
      <td>Facility Location Type</td>
      <td>Location Within Facility Encounter/participant/participantRole/code</td>
    </tr>
    <tr>
      <td>facility-location</td>
      <td>Facility Location</td>
      <td>Location Within Facility Encounter/participant/participantRole/id</td>
    </tr>
    <tr>
      <td>location-admit-transfer-date</td>
      <td>Date admitted or transferred to location</td>
      <td>Location Within Facility Encounter/effectiveTime/low</td>
    </tr>
    <tr>
      <td>infant-disposition</td>
      <td>Disposition of infant</td>
      <td>Location Within Facility Encounter/sdtc:dischargeDispositionCode</td>
    </tr>
    <tr>
      <td>disposition-date</td>
      <td>Disposition date if discharged, transferred, or expired</td>
      <td>Location Within Facility Encounter/effectiveTime/high</td>
    </tr>
    <tr>
      <td>risk-factors</td>
      <td>Risk Factors</td>
      <td>Risk Factors Section in a LOS/Men Denominator</td>
    </tr>
    <tr>
      <td>risk-factor-birth-weight</td>
      <td>Risk Factor: Birth weight (grams)</td>
      <td>Infection Risk Factors Measurement Observation/value</td>
    </tr>
    <tr>
      <td>gestational-age-known</td>
      <td>Gestational age known: set true if known and false if unknown</td>
      <td>Gestational Age Observation/value/@nullFlavor="UNK"</td>
    </tr>
    <tr>
      <td>risk-factor-gestational-age</td>
      <td>Risk Factor: Gestational age (days)</td>
      <td>Gestational Age Observation/value</td>
    </tr>
    <tr>
      <td>nhsn-comment</td>
      <td>Comments</td>
      <td>NHSN Comment/text</td>
    </tr>
  </tbody>
</table>

---

File: repos/HL7_SLASH_HAI/input/pagecontent/mapping-los-event.md

### Late Onset Sepsis/Meningitis Event (LOS) Mapping to CDA

<table class="codes">
  <thead>
    <tr>
      <th>FHIR QuestionnaireResponse elements</th>
      <th>CDA Mapping</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>QuestionnaireResponse.identifier</td>
      <td>ClinicalDocument/id</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse.code.code="51897-7"</td>
      <td>ClinicalDocument/code</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse.subject</td>
      <td>ClinicalDocument/recordTarget</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse.author</td>
      <td>ClinicalDocument/author</td>
    </tr>
  </tbody>
</table>
<br/>

<table class="codes">
  <thead>
    <tr>
      <th>item</th>
      <th>item.linkId</th>
      <th>CDA Mapping</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>facility</td>
      <td>Facility ID</td>
      <td>ClinicalDocument/componentOf/encompassingEncounter/location/healthCareFacility/id</td>
    </tr>
    <tr>
      <td>event-number</td>
      <td>Event Number</td>
      <td>ClinicalDocument/componentOf/encompassingEncounter/id</td>
    </tr>
    <tr>
      <td>event-type</td>
      <td>Event Type</td>
      <td>Infection-Type Observation/value</td>
    </tr>
    <tr>
      <td>date-of-event</td>
      <td>Date of Event</td>
      <td>Infection-Type Observation/effectiveTime</td>
    </tr>
    <tr>
      <td>facility-location</td>
      <td>Facility Location</td>
      <td>ClinicalDocument/componentOf/encompassingEncounter/location/healthcareFacility/code</td>
    </tr>
    <tr>
      <td>date-admitted-to-facility</td>
      <td>Date Admitted to Facility</td>
      <td>ClinicalDocument/componentOf/encompassingEncounter/effectiveTime/low</td>
    </tr>
    <tr>
      <td>inborn-outborn-observation</td>
      <td>Inborn/Outborn</td>
      <td>Inborn/Outborn Observation/negationInd</td>
    </tr>
    <tr>
      <td>risk-factors</td>
      <td>Risk Factors</td>
      <td>Risk Factors Section (LOS/Men)</td>
    </tr>
    <tr>
      <td>risk-factor-central-line</td>
      <td>Risk Factor: Central line present prior to event, including umbilical catheter</td>
      <td>Infection Risk Factors Observation/value="1006-6"</td>
    </tr>
    <tr>
      <td>risk-factor-birth-weight</td>
      <td>Risk Factor: Birth weight (grams)</td>
      <td>Infection Risk Factors Measurement Observation/value</td>
    </tr>
    <tr>
      <td>gestational-age-known</td>
      <td>Gestational age known: set true if known and false if unknown</td>
      <td>Gestational Age Observation/value/@nullFlavor="UNK"</td>
    </tr>
    <tr>
      <td>risk-factor-gestational-age</td>
      <td>Risk Factor: Gestational age (days)</td>
      <td>Gestational Age Observation/value</td>
    </tr>
    <tr>
      <td>event-details</td>
      <td>Event Details</td>
      <td>Infection Details in Late Onset Sepsis Report</td>
    </tr>
    <tr>
      <td>infection-condition</td>
      <td>Specific Event</td>
      <td>Infection Condition Observation/value</td>
    </tr>
    <tr>
      <td>criteria-used</td>
      <td>Laboratory Criteria Used</td>
      <td>Criterion of Diagnosis Observation/value</td>
    </tr>
    <tr>
      <td>died</td>
      <td>Died</td>
      <td>Death Observation in an Infection-type Report/value</td>
    </tr>
    <tr>
      <td>los-contributed-to-death</td>
      <td>Infection contributed to death</td>
      <td>Infection Contributed to Death Observation</td>
    </tr>
    <tr>
      <td>discharge-date</td>
      <td>Discharge Date</td>
      <td>ClinicalDocument/componentOf/encompassingEncounter/effectiveTime/high</td>
    </tr>
    <tr>
      <td>findings-group</td>
      <td>Findings Group</td>
      <td>Findings Section in an Infection-Type Report</td>
    </tr>
    <tr>
      <td>pathogen-identified</td>
      <td>Pathogen Identified</td>
      <td>Pathogen Identified Observation/value</td>
    </tr>
    <tr>
      <td>pathogen-ranking</td>
      <td>Pathogen Ranking</td>
      <td>Pathogen Ranking Observation/value</td>
    </tr>
    <tr>
      <td>drug-susceptibility-test-group</td>
      <td>Drug Susceptibility Test Group</td>
      <td>Drug Susceptibility Test Observation</td>
    </tr>
    <tr>
      <td>drug-susceptibility-test</td>
      <td>Drug Susceptibility Test</td>
      <td>Drug-Susceptibility Test Observation/code</td>
    </tr>
    <tr>
      <td>drug-susceptibility-test-interpretation</td>
      <td>Drug Susceptibility Test Interpretation</td>
      <td>Drug-Susceptibility Test Observation/interpretationCode</td>
    </tr>
    <tr>
      <td>nhsn-comment</td>
      <td>Comments</td>
      <td>NHSN Comment/text</td>
    </tr>
  </tbody>
</table>

---

File: repos/HL7_SLASH_HAI/input/pagecontent/mapping-opc-proc-denom.md

### Outpatient Procedure Component Denominator for Procedure Mapping to CDA

<table class="codes">
  <thead>
    <tr>
      <th>FHIR QuestionnaireResponse elements</th>
      <th>CDA Mapping</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>QuestionnaireResponse.identifier</td>
      <td>ClinicalDocument/id</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse.code.code="51897-7"</td>
      <td>ClinicalDocument/code</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse.subject</td>
      <td>ClinicalDocument/recordTarget</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse.author</td>
      <td>ClinicalDocument/author</td>
    </tr>
  </tbody>
</table>

<br/>

<table class="codes">
  <thead>
    <tr>
      <th>item</th>
      <th>item.linkId</th>
      <th>CDA Mapping</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>facility-id</td>
      <td>Facility ID</td>
      <td>ClinicalDocument/componentOf/encompassingEncounter/location/healthCareFacility/id</td>
    </tr>
    <tr>
      <td>encounter-date</td>
      <td>Date of encounter</td>
      <td>ClinicalDocument/componentOf/encompassingEncounter/effectiveTime</td>
    </tr>
    <tr>
      <td>risk-factors</td>
      <td>Risk Factors</td>
      <td>Infection Risk Factors Section in an OPC Denominator for Procedure</td>
    </tr>
    <tr>
      <td>risk-factor-wound-class</td>
      <td>Risk Factor: Wound class</td>
      <td>Wound Class Observation/value</td>
    </tr>
    <tr>
      <td>risk-factor-endoscopy</td>
      <td>Risk Factor: Endoscopy used</td>
      <td>Endoscope Used Clinical Statement/negationInd</td>
    </tr>
    <tr>
      <td>risk-factor-diabetes-mellitus</td>
      <td>Risk Factor: Diabetes mellitus</td>
      <td>Diabetes Mellitus Observation/negationInd</td>
    </tr>
    <tr>
      <td>risk-factor-height</td>
      <td>Risk Factor: height</td>
      <td>Height Observation/value</td>
    </tr>
    <tr>
      <td>risk-factor-weight</td>
      <td>Risk Factor: weight</td>
      <td>Weight Observation/value</td>
    </tr>
    <tr>
      <td>risk-factor-asa-class</td>
      <td>Risk Factor: ASA Class</td>
      <td>ASA Class Observation/value</td>
    </tr>
    <tr>
      <td>procedure-details</td>
      <td>Procedure Details</td>
      <td>Procedure Details Section in an OPC Denominator for Procedure</td>
    </tr>
    <tr>
      <td>procedure-id</td>
      <td>Procedure Id</td>
      <td>Procedure Details in an OPC Denominator for Procedure/id</td>
    </tr>
    <tr>
      <td>nhsn-procedure-code-category</td>
      <td>NHSN Procedure Code Category</td>
      <td>Procedure Details in an OPC Denominator for Procedure/code</td>
    </tr>
    <tr>
      <td>cpt-procedure-code</td>
      <td>CPT Procedure Code</td>
      <td>Procedure Details in an OPC Denominator for Procedure/code/translation</td>
    </tr>
    <tr>
      <td>procedure-duration</td>
      <td>Procedure duration</td>
      <td>Procedure Details in an OPC Denominator for Procedure/effectiveTime/width</td>
    </tr>

    <tr>
      <td>general-anesthesia</td>
      <td>General anesthesia</td>
      <td>Anesthesia Administration Clinical Statement/negationInd</td>
    </tr>
    <tr>
      <td>surgeon-code</td>
      <td>Surgeon code</td>
      <td>Procedure Details in an OPC Denominator for Procedure/performer/assignedEntity/id</td>
    </tr>
    <tr>
      <td>nhsn-comment</td>
      <td>Comments</td>
      <td>NHSN Comment/text</td>
    </tr>
  </tbody>
</table>

---

File: repos/HL7_SLASH_HAI/input/pagecontent/mapping-opc-sdom-denom.md

### Outpatient Procedure Component Denominator for Same Day Outcome Measures Report Mapping to CDA

<table class="codes">
  <thead>
    <tr>
      <th>FHIR QuestionnaireResponse elements</th>
      <th>CDA Mapping</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>QuestionnaireResponse.identifier</td>
      <td>ClinicalDocument/id</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse.code.code="51897-7"</td>
      <td>ClinicalDocument/code</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse.code.code="1657-6"</td>
      <td>ClincalDocument/documentationOf/serviceEvent/code</td>
    </tr>
    
    <tr>
      <td>QuestionnaireResponse.subject</td>
      <td>ClinicalDocument/participant/typeCode="SBJ"</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse.author</td>
      <td>ClinicalDocument/author</td>
    </tr>
  </tbody>
</table>

<br/>

<table class="codes">
  <thead>
    <tr>
      <th>item</th>
      <th>item.linkId</th>
      <th>CDA Mapping</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>facility-id</td>
    <td>Facility ID</td>
    <td>ClinicalDocument/participant/associatedEntity/id</td>
  </tr>
  <tr>
    <td>report-period-start</td>
    <td>First day of period reported</td>
    <td>ClinicalDocument/documentationOf/serviceEvent/effectiveTime/low</td>
  </tr>
  <tr>
    <td>report-period-end</td>
    <td>Last day of period reported</td>
    <td>ClinicalDocument/documentationOf/serviceEvent/effectiveTime/high</td>
  </tr>
  <tr>
    <td>facility-location-id</td>
    <td>Facility Location Id</td>
    <td>Summary Encounter/participantRole/id</td>
  </tr>
  <tr>
    <td>facility-location-type</td>
    <td>Facility Location Type</td>
    <td>Summary Encounter/participantRole/code</td>
  </tr>
  <tr>
    <td>summary-data-group</td>
    <td>Summary Data</td>
    <td>Summary Data Section</td>
  </tr>
  <tr>
    <td>total-facility-encounters-outpatient</td>
    <td>Number of Total Facility Encounters (for outpatient location)</td>
    <td>Summary Data Observation[code="1890-3"]/value</td>
  </tr>
  <tr>
    <td>report-no-events-group</td>
    <td>Report no events</td>
    <td>Report No Events Section</td>
  </tr>
  <tr>
    <td>no-same-day-outcome-measures</td>
    <td>No Same Day Outcome Measures (events) reported this month</td>
    <td>Report No Events/code="1340-9"</td>
  </tr>
  <tr>
    <td>nhsn-comment</td>
    <td>Comments</td>
    <td>NHSN Comment/text</td>
  </tr>
  </tbody>
</table>

---

File: repos/HL7_SLASH_HAI/input/pagecontent/mapping-opc-sdom-event.md

### Outpatient Procedure Component Same Day Outcome Measures Event Report Mapping to CDA

<table class="codes">
  <thead>
    <tr>
      <th>FHIR QuestionnaireResponse elements</th>
      <th>CDA Mapping</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>QuestionnaireResponse.identifier</td>
      <td>ClinicalDocument/id</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse.code.code="51897-7"</td>
      <td>ClinicalDocument/code</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse.subject</td>
      <td>ClinicalDocument/recordTarget</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse.author</td>
      <td>ClinicalDocument/author</td>
    </tr>
  </tbody>
</table>
<br/>

<table class="codes">
  <thead>
    <tr>
      <th>item</th>
      <th>item.linkId</th>
      <th>CDA Mapping</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>facility-id</td>
      <td>Facility ID</td>
      <td>ClinicalDocument/componentOf/encompassingEncounter/location/healthCareFacility/id</td>
    </tr>
    <tr>
      <td>date-of-encounter</td>
      <td>Date of Encounter (Admission)</td>
      <td>ClinicalDocument/componentOf/encompassingEncounter/id</td>
    </tr>
    <tr>
      <td>same-day-outcome-measures-event-details</td>
      <td>Same Day Outcome Measures Event Details</td>
      <td>Same Day Outcome Measures Event Details Section</td>
    </tr>
    <tr>
      <td>same-day-outcome-measure-patient-burn</td>
      <td>Same Day Outcome Measure: Patient Burn</td>
      <td>Same Day Outcome Measure Observation (V3)[code="125666000"]/negationInd</td>
    </tr>
    <tr>
      <td>same-day-outcome-measure-patient-fall</td>
      <td>Same Day Outcome Measure: Patient fall</td>
      <td>Same Day Outcome Measure Observation (V3)[code="217082002"]/negationInd</td>
    </tr>
    <tr>
      <td>same-day-outcome-transfer-admission</td>
      <td>Same Day Outcome Measure: Hospital transfer/admission</td>
      <td>Same Day Outcome Measure Observation (V3)[code="1645-1"]/negationInd</td>
    </tr>
    <tr>
      <td>same-day-outcome-measure-wrong-site</td>
      <td>Same Day Outcome Measure: Wrong site</td>
      <td>Same Day Outcome Measure Observation (V3)[code="1646-9"]/negationInd</td>
    </tr>
    <tr>
      <td>same-day-outcome-measure-wrong-side</td>
      <td>Same Day Outcome Measure: Wrong side</td>
      <td>Same Day Outcome Measure Observation (V3)[code="1647-7"]/negationInd</td>
    </tr>
    <tr>
      <td>same-day-outcome-measure-wrong-patient</td>
      <td>Same Day Outcome Measure: Wrong patient</td>
      <td>Same Day Outcome Measure Observation (V3)[code="1648-5"]/negationInd</td>
    </tr>
    <tr>
      <td>same-day-outcome-measure-wrong-procedure</td>
      <td>Same Day Outcome Measure: Wrong procedure</td>
      <td>Same Day Outcome Measure Observation (V3)[code="370898007"]/negationInd</td>
    </tr>
    <tr>
      <td>same-day-outcome-measure-wrong-implant</td>
      <td>Same Day Outcome Measure: Wrong implant</td>
      <td>Same Day Outcome Measure Observation (V3)[code="1649-3"]/negationInd</td>
    </tr>
    <tr>
      <td>nhsn-comment</td>
      <td>Comments</td>
      <td>NHSN Comment/text</td>
    </tr>
  </tbody>
</table>

---

File: repos/HL7_SLASH_HAI/input/pagecontent/mapping-opc-ssi-event.md

### Outpatient Procedure Component Surgical Site Infection (SSI) Event Mapping to CDA

<table class="codes">
  <thead>
    <tr>
      <th>FHIR QuestionnaireResponse elements</th>
      <th>CDA Mapping</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>QuestionnaireResponse.identifier</td>
      <td>ClinicalDocument/id</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse.code.code="51897-7"</td>
      <td>ClinicalDocument/code</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse.subject</td>
      <td>ClinicalDocument/recordTarget</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse.author</td>
      <td>ClinicalDocument/author</td>
    </tr>
  </tbody>
</table>

<br/>

<table class="codes">
  <thead>
    <tr>
      <th>item</th>
      <th>item.linkId</th>
      <th>CDA Mapping</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>facility-id</td>
      <td>Facility ID</td>
      <td>x</td>
    </tr>
    <tr>
      <td>encounter-date</td>
      <td>Date of encounter</td>
      <td>ClinicalDocument/componentOf/effectiveTime/low</td>
    </tr>
    <tr>
      <td>infection-details</td>
      <td>Infection details</td>
      <td>Infection Details Section in an OPC SSI Report</td>
    </tr>
    <tr>
      <td>event-type</td>
      <td>Event Type</td>
      <td>Infection-Type Observation in an OPC SSI Event/value</td>
    </tr>
    <tr>
      <td>event-date</td>
      <td>Date of event</td>
      <td>Infection-Type Observation in an OPC SSI Event/effectiveTime/low</td>
    </tr>
    <tr>
      <td>nhsn-procedure-code-category</td>
      <td>NHSN Procedure Code Category</td>
      <td>Procedure Details in an OPC SSI Event/code</td>
    </tr>
    <tr>
      <td>primary-cpt-procedure-code</td>
      <td>Primary CPT Procedure Code</td>
      <td>Procedure Details in an OPC SSI Event/code/translation</td>
    </tr>
    <tr>
      <td>procedure-id</td>
      <td>Procedure Id</td>
      <td>Procedure Details in an OPC SSI Event/code/id</td>
    </tr>
    <tr>
      <td>ssi-level</td>
      <td>Surgical Site Infection (SSI) Level</td>
      <td>Infection Condition Observation/value</td>
    </tr>
    <tr>
      <td>criteria-of-diagnosis</td>
      <td>Criteria of Diagnosis</td>
      <td>Criteria of Diagnosis Organizer</td>
    </tr>
    <tr>
      <td>criteria-of-diagnosis-abscess</td>
      <td>Criteria of Diagnosis: Abscess</td>
      <td>Criterion of Diagnosis Observation[value="128477000"]/negationInd</td>
    </tr>
    <tr>
      <td>criteria-of-diagnosis-redness</td>
      <td>Criteria of Diagnosis: Redness</td>
      <td>Criterion of Diagnosis Observation[value="386713009"]/negationInd</td>
    </tr>
    <tr>
      <td>criteria-of-diagnosis-fever</td>
      <td>Criteria of Diagnosis: Fever</td>
      <td>Criterion of Diagnosis Observation[value="386661006"]/negationInd</td>
    </tr>
    <tr>
      <td>criteria-of-diagnosis-heat</td>
      <td>Criteria of Diagnosis: Heat</td>
      <td>Criterion of Diagnosis Observation[value="304214002"]/negationInd</td>
    </tr>
    <tr>
      <td>criteria-of-diagnosis-incision-purulent-drainage</td>
      <td>Criteria of Diagnosis: Purulent drainage</td>
      <td>Criterion of Diagnosis Observation[value="255320000"]/negationInd</td>
    </tr>
    <tr>
      <td>criteria-of-diagnosis-wound-dehisced</td>
      <td>Criteria of Diagnosis: Wound spontaneously dehisced</td>
      <td>Criterion of Diagnosis Observation[value="225553008"]/negationInd</td>
    </tr>
    <tr>
      <td>criteria-of-diagnosis-incision-opened</td>
      <td>Criteria of Diagnosis: Incision deliberately opened</td>
      <td>Criterion of Diagnosis Observation[value="1967-9"]/negationInd</td>
    </tr>
    <tr>
      <td>criteria-of-diagnosis-evidence-found</td>
      <td>Criteria of Diagnosis: Other evidence of infection found on invasive procedure, gross anatomic exam, or histopathologic exam</td>
      <td>Criterion of Diagnosis Observation[value="1905-9"]/negationInd</td>
    </tr>
    <tr>
      <td>criteria-of-diagnosis-localized-swelling</td>
      <td>Criteria of Diagnosis: Localized swelling</td>
      <td>Criterion of Diagnosis Observation[value="1920-8"]/negationInd</td>
    </tr>
    <tr>
      <td>criteria-of-diagnosis-pain-tenderness</td>
      <td>Criteria of Diagnosis: Pain or tenderness</td>
      <td>Criterion of Diagnosis Observation[value="1960-4"]/negationInd</td>
    </tr>
    <tr>
      <td>criteria-of-diagnosis-organism-identified</td>
      <td>Criteria of Diagnosis: Organism Identified</td>
      <td>Criterion of Diagnosis Observation[value="1952-1"]/negationInd</td>
    </tr>
    <tr>
      <td>criteria-of-diagnosis-testing-not-performed</td>
      <td>Criteria of Diagnosis: Culture or non-culture based testing not performed</td>
      <td>Criterion of Diagnosis Observation[value="1901-8"]/negationInd</td>
    </tr>
    <tr>
      <td>criteria-of-diagnosis-imaging-test</td>
      <td>Criteria of Diagnosis: Imaging test evidence of infection</td>
      <td>Criterion of Diagnosis Observation[value="1924-0"]/negationInd</td>
    </tr>
    <tr>
      <td>criteria-of-diagnosis-physician-diagnosis</td>
      <td>Criteria of Diagnosis: Diagnosis of superficial SSI by surgeon or attending physician</td>
      <td>Criterion of Diagnosis Observation[value="1963-8"]/negationInd</td>
    </tr>
    <tr>
      <td>ssi-detection-method-type</td>
      <td>Surveillence method type (active/passive) through which the SSI was detected</td>
      <td>SSI Detection Method/code</td>
    </tr>
    <tr>
      <td>ssi-detection-method</td>
      <td>Surveillence method through which the SSI was detected</td>
      <td>SSI Detection Method/value</td>
    </tr>
    <tr>
      <td>findings-group</td>
      <td>Findings Group</td>
      <td>Findings Section in an OPC SSI Report</td>
    </tr>
    <tr>
      <td>pathogen-identified</td>
      <td>Pathogen Identified</td>
      <td>Pathogen Identified Observation/value</td>
    </tr>
    <tr>
      <td>pathogen-ranking</td>
      <td>Pathogen Ranking</td>
      <td>Pathogen Ranking Observation/value</td>
    </tr>
    <tr>
      <td>nhsn-comment</td>
      <td>Comments</td>
      <td>NHSN Comment/text</td>
    </tr>
  </tbody>
</table>

---

File: repos/HL7_SLASH_HAI/input/pagecontent/relationship_to_another_standard.md

Starting in the May 2018 ballot cycle, HL7 has developed this FHIR Implementation Guide in parallel with the existing CDA Implementation Guide. This new standard includes all new forms as they are added to the HAI work. We anticipate several STU releases on the path to a Normative Release 1 of the HL7 Implmentation Guide for FHIR: Healthcare Associated Infection Reports. The FHIR and CDA implementation guides will align. A change to one standard will require the same change in the other standard. In this release, the new forms included in both the CDA and FHIR standards are:
* Outpatient Procedure Component Denominator for Same Day Outcome Measures Report
* Outpatient Procedure Component Denominator for Procedure Report
* Late Onset Sepsis/Meningitis Denominator (LOS/Men Denom) Report
* Outpatient Procedure Component Same Day Outcome Measures Event Report
* Outpatient Procedure Surgical Site Infection (SSI) Event Report

---

File: repos/HL7_SLASH_HAI/input/pagecontent/release_history.md

### Current Release (STU 2.1 Release)
-------------------------------

This implementation guide is the first update to the second STU FHIR release of the HAI reporting profiles. 

It makes the following updates:
* FHIR Version to 4.0.1 (R4) (from FHIR Version 4.0.0)
  * no changes to profiles or examples were needed after this update 
* US Core dependency to [US Core Version 5.0.1](http://hl7.org/fhir/us/core/STU5.0.1/) (from US Core Version 3.0.0): US Core version update changes relevant to this IG (i.e. changes resulting in updates to the IG):
  * [US Core Patient](http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-patient.html) now contains [US Core Gender Identity Extension](http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-genderIdentity.html)
  * [Healthcare Associated Infection Single-Person Report QuestionnaireResponse](StructureDefinition-hai-single-person-report-questionnaireresponse.html) now based on [US Core QuestionnaireResponse Profile](http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-questionnaireresponse.html) (previously based on base FHIR resource QuestionnaireResponse)
* examples to illustrate birth sex, gender identity, and multiple races in the US Core Patient



### STU 2 Release
-------------------------------

This implementation guide is the second STU FHIR release of the HAI reporting profiles. It adds two profiles, five reports (Questionnaire) and six value sets.

This release of the IG is based on FHIR Version 4.0.0 (R4) whereas previous releases were based on FHIR Release 3.0.1 (STU3).

#### Profiles

* [hai-population-summary-questionnaire](StructureDefinition-hai-population-summary-questionnaire.html)
* [hai-population-summary-questionnaireresponse](StructureDefinition-hai-population-summary-questionnaireresponse.html)

#### HAI Single-Person Reports (Questionnaire)

* [Questionnaire Instance for Late Onset Sepsis/Meningitis Denominator](Questionnaire-hai-questionnaire-los-denom.html)
* [Questionnaire Instance for Outpatient Procedure Component Denominator for Procedure](Questionnaire-hai-questionnaire-opc-proc-denom.html)
* [Questionnaire Instance for Outpatient Procedure Component Same Day Outcome Measures Event Report](Questionnaire-hai-questionnaire-opc-sdom-event.html)
* [Questionnaire Instance for Outpatient Procedure Component Surgical Site Infection (SSI) Event](Questionnaire-hai-questionnaire-opc-ssi-event.html)

#### HAI Population Summary Reports (Questionnaire)

* [Questionnaire Instance for Outpatient Procedure Component Denominator for Same Day Outcome Measures Report](Questionnaire-hai-questionnaire-opc-sdom-denom.html)

#### Value Sets

* [NHSNSSIDetectionMethod](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.10.20.5.9.29/expansion/Latest) (in VSAC in latest release)
* [NHSNLOS/MENDischargeDisposition](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.10.20.5.9.30.html) (in VSAC in latest release)
* [NHSNSSIDetectionMethodType](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.10.20.5.9.31.html) (in VSAC in latest release)
* [NHSNOPCProcedureCategoryCode](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.10.20.5.9.34.html) (in VSAC in latest release)
* [NHSNWoundClassCode](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.13.9.html) (in VSAC in latest release)
* [NHSNASAClassCode](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.13.10.html) (in VSAC in latest release)

### STU 1 Release
-------------

This implementation guide is the first FHIR release of the HAI reporting profiles. It adds one report (Questionnaire) and nine value sets.

#### HAI Single-Person Reports (Questionnaire)

* [Late Onset Sepsis/Meningitis Event (LOS) Report](Questionnaire-hai-questionnaire-los-event.html)

#### Value Sets

* [NHSNHealthcareServiceLocationCode](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.13.19/expansion/Latest) (in VSAC in latest release)
* [NHSNInfectionTypeCode](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.13.20/expansion/Latest) (in VSAC in latest release)
* [NHSNDrugSusceptibilityFindingCode](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.13.13/expansion/Latest) (in VSAC in latest release)
* [NHSNDrugSusceptibilityTestsCode](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.13.15/expansion/Latest) (in VSAC in latest release)
* [NHSNPathogenCode](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.13.16/expansion/Latest) (in VSAC in latest release)
* [NHSNCriterionOfDiagnosisCode](https://vsac.nlm.nih.gov/valueset/2.16.840.1.114222.4.11.3195/expansion/Latest) (in VSAC in latest release)
* [NHSNInfectionConditionCode](https://vsac.nlm.nih.gov/valueset/2.16.840.1.114222.4.11.3196/expansion/Latest) (in VSAC in latest release)
* [NHSNPathogenRanking](ValueSet-nhsn-pathogen-ranking.html)

---

