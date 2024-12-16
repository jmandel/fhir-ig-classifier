File: repos/HL7_SLASH_fhir-mmm-ig/input/pagecontent/clinical_quality_framework_for_research.md

### Clinical Reasoning
[FHIR's Clinical Reasoning module](http://www.hl7.org/fhir/clinicalreasoning-module.html) describes in general what is covered under this framework. This guide relies on the framework’s measure model to define peri-natal populations of interest (POI). From this POI, measure cohort definitions will be used to define the POI for a given research question. With a target population identified, clinical information related to a group of patients found to be in-scope for a given population of patients can be aggregated.

### Defining Measure Populations
Two cohort populations are in scope for the initial release of this guide. These measure definitions are expressed in CQL and are found base64 encoded within Library.content examples. Future use cases will each warrant distinct CQL expressions, associated terminologies (ValueSets), and measure definitions. 

<b><i>Note:</i></b> Not all future research study populations of interest will necessitate the updating of this published FHIR guide.

### Architecture and Implementation
These guides are both built upon FHIR’s Clinical Quality Framework (CQF) and therefore share many design patterns. SANER’s representation of various CQF components apply to this guide. Specifically, SANER’s Measure Definition server, and Compute Measure Actors and roles apply to systems implementing all or components of this guide. Where SANER is focused on reporting to a public health agency (PHA), this guide is analogously focused on reporting to a maternal health researcher. 

[See: Security, Architecture and Implementation from the SANER guide](http://hl7.org/fhir/uv/saner/).

---

File: repos/HL7_SLASH_fhir-mmm-ig/input/pagecontent/downloads.md

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

{% include dependency-table-short.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}

---

File: repos/HL7_SLASH_fhir-mmm-ig/input/pagecontent/index.md

### Overview

### Scope
The Longitudinal Maternal & Child Health Information for Research FHIR R4 implementation guide (IG) defines a framework to enable maternal health researchers to aggregate, calculate, and analyze clinical information of research populations to explore the root causes for maternal and child morbidity and mortality. It uses Clinical Quality Language (CQL) expressions to assist researchers in capturing clinical data based on population study cohort criteria. This IG focuses on information relevant to longitudinal maternal care, which includes antepartum (including pre-pregnancy), intrapartum, and postpartum care of a pregnant woman. It includes how to link maternal longitudinal record with associated child/children records. 

This US Realm IG supports the use of US Core profiles where possible, as well as base FHIR and Vital Records Common Profiles FHIR IG data model for the structural linkage of mother and child clinical records. 


### Background
The rates of maternal mortality have been rising in the United States since 1987. Clinical data relevant to understanding this trend are not standardized, and data exchange is not interoperable across many relevant settings. Maternal health and associated child health are inextricably linked – what happens during gestation, delivery, and after informs health outcomes of both mother and child – but relevant data is often held in separate, unconnected records. These issues impede research on maternal morbidity and longitudinal maternal care and associated impacts to infant health. Research on root causes of maternal mortality, pediatric developmental problems, and effective treatments requires exchange of information stored in disparate sources, such as electronic health record (EHR) systems, registries, and public health agencies (PHAs).

The types of information needed to research maternal health and morbidity include social determinants of health (SDOH) and associated clinical data such as antepartum, intrapartum, and postpartum care of a pregnant woman; pregnancy-related conditions and outcomes; maternal co-morbidities; child health data; and procedures. The goal of this FHIR IG is to define a model to support data exchange for predictive analysis, risk assessment, and retrospective maternal health research across the spectrum and duration of care. 

Future users may include health departments using EHR data to inform public health interventions (e.g., case identification for reportable conditions, identifying persons lost to care, etc.) and maternal and child health researchers. The standards development effort will also examine options for data exchange mechanisms, including point-in-time query (data pull) and research population creation, i.e., patient enrollment in a study.

### Maternal Research Use Cases

This IG will eventually support mapping maternal data across health records from specialty care and linking mother and child data harmonized across a broad set of use cases. This will support researchers in identifying root causes of maternal mortality and pediatric developmental problems, including SDOH such as limited income, poor nutrition, lack of medical coverage, etc. The goal of the project is to create a method to standardize data capture for comparative analysis over time to improve health outcomes and define a framework for studying additional research populations in the future.

Initial use cases of this IG focus on hypertensive disorders of pregnancy pre, ante, and postpartum and pregnancy and subsequent death within a specific timeframe. The intent is to specify the consistent capture of clinical data of interest to maternal health researchers and outline implementing FHIR resources for that capture. Currently, the IG defines two initial, separate research use case populations: 

*	Pregnancy and subsequent death within a specific time frame: This cohort includes women who died within a year (365 days) of a pregnancy regardless of cause of death or pregnancy outcome.
*	Hypertensive Disorders of pregnancy: This use case focuses on individuals with a diagnosis of pregnancy-induced hypertension, gestational hypertension and/or post-partum hypertension diagnoses within 6 weeks of delivery.

In both instances, the IG will establish linkages via the US Core Related Person profile to collect associated child health data that may inform maternal health research outcomes. 

In the future, the IG will expand this framework to a range of use cases including:
*	Risks for children related to maternal exposure to medications taken during pregnancy
*	Potential adverse maternal obstetric history impacts on child outcomes
*	Access to relevant sensitive health information
*	Retrospective population-based analysis of inherited disorders
*	[The impacts of work activities and environment to pregnancy, maternal, and infant health.](http://hl7.org/fhir/us/odh/)

This guide fundamentally relies on creating structural relationships between:
*	Maternal and child records to effectively diagnose and treat otherwise fatal child outcomes
*	Maternal and child birth records and/or maternal and child death records
*	Maternal and child records in multiple disparate systems

### Audience 
The audience for this IG includes EHR vendors, developers of software tooling researchers, and associated information management systems. Researchers, business analysts, and policy managers can also benefit from a basic understanding of the use of this guide to support measure calculation for research purposes.

### Authors & Project Team
This table lists the authors, subject matter experts, and the affiliations which contributed to this standard. 

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-4erg{border-color:inherit;font-style:italic;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0r4h{border-color:inherit;font-family:serif !important;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-fymr{border-color:inherit;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-fymr">Name &amp; Affiliation</th>
    <th class="tg-0r4h">Role</th>
    <th class="tg-fymr">Contact</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-4erg">Lantana Consulting Group</td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
  </tr>
  <tr>
    <td class="tg-0pky">Courtney Panaia-Rodi </td>
    <td class="tg-0pky">Project Executive</td>
    <td class="tg-0pky">courtney.panaia-rodi@lantanagroup.com</td>
  </tr>
  <tr>
    <td class="tg-0pky">Wendy Wise</td>
    <td class="tg-0pky">Project Manager</td>
    <td class="tg-0pky">wendy.wise@lantanagroup.com</td>
  </tr>
  <tr>
    <td class="tg-0pky">Lani Johnson</td>
    <td class="tg-0pky">Associate Project Manager</td>
    <td class="tg-0pky">lani.johnson@lantanagroup.com</td>
  </tr>
  <tr>
    <td class="tg-0pky">Rick Geimer</td>
    <td class="tg-0pky">FHIR Subject Matter Expert</td>
    <td class="tg-0pky">rick.geimer@lantanagroup.com</td>
  </tr>
  <tr>
    <td class="tg-0pky">Zabrina Gonzaga</td>
    <td class="tg-0pky">Terminology Subject Matter Expert</td>
    <td class="tg-0pky">zabrina.gonzaga@lantanagroup.com</td>
  </tr>
  <tr>
    <td class="tg-0pky">Sarah Gaunt</td>
    <td class="tg-0pky">Senior FHIR/CDA Analyst</td>
    <td class="tg-0pky">sarah.gaunt@lantanagroup.com</td>
  </tr>
  <tr>
    <td class="tg-0pky">Dave deRoode</td>
    <td class="tg-0pky">FHIR/CDA Analyst</td>
    <td class="tg-0pky">david.deroode@lantanagroup.com</td>
  </tr>
  <tr>
    <td class="tg-0pky">Ming Dunajick</td>
    <td class="tg-0pky">FHIR/CDA Analyst</td>
    <td class="tg-0pky">ming.dunajick@lantanagroup.com</td>
  </tr>
  <tr>
    <td class="tg-0pky">Ruby Nash</td>
    <td class="tg-0pky">FHIR Analyst</td>
    <td class="tg-0pky">ruby.nash@lantanagroup.com</td>
  </tr>
  <tr>
    <td class="tg-4erg">Office of the Assistant Secretary for Planning and Evaluation (ASPE)</td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
  </tr>
  <tr>
    <td class="tg-0pky">Violanda Grigorescu, MD, MSPH</td>
    <td class="tg-0pky">Senior Health Scientist <br>Division of Healthcare Quality and Outcomes, Office of Health Policy</td>
    <td class="tg-0pky">violanda.grigorescu@hhs.gov</td>
  </tr>
  <tr>
    <td class="tg-4erg">Centers for Disease Control and Prevention (CDC)</td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
  </tr>
  <tr>
    <td class="tg-0pky">Margaret Lampe, RN, MPH</td>
    <td class="tg-0pky">Nurse Epidemiologist &amp; Project Officer <br>Perinatal HIV Prevention Program</td>
    <td class="tg-0pky">mol0@cdc.gov</td>
  </tr>
  <tr>
    <td class="tg-0pky">Lisa Romero, DrPH</td>
    <td class="tg-0pky">Health Scientist <br>Division of Adolescent School Health</td>
    <td class="tg-0pky">eon1@cdc.gov</td>
  </tr>
  <tr>
    <td class="tg-4erg">National Institutes of Health (NIH) <br>Eunice Kennedy Shriver National Institute of Child Health and Human Development (NICHD) <br>National Information Center on Health Services Research and Health Care Technology (NICHSR)</td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
  </tr>
  <tr>
    <td class="tg-0pky">Alison Cernich</td>
    <td class="tg-0pky">NICHD Deputy Director</td>
    <td class="tg-0pky">alison.cernich@nih.hhs.gov</td>
  </tr>
  <tr>
    <td class="tg-0pky">John (Jack) Moye, Jr., MD</td>
    <td class="tg-0pky">Acting Director - National Children's Study <br>NICHD Medical Officer - Maternal &amp; Pediatric Infectious Disease Branch</td>
    <td class="tg-0pky">moyej@exchange.nih.gov</td>
  </tr>
  <tr>
    <td class="tg-0pky">Nahida Chakhtoura, MD, MsGH</td>
    <td class="tg-0pky">NICHD Medical Officer <br>Maternal and Pediatric Infectious Disease Branch</td>
    <td class="tg-0pky">nahida.chakhtoura@nih.gov</td>
  </tr>
  <tr>
    <td class="tg-0pky">Juanita Chinn, PhD</td>
    <td class="tg-0pky">NICHD Program Director <br>Population Dynamics Branch</td>
    <td class="tg-0pky">juanita.chinn@nih.gov</td>
  </tr>
  <tr>
    <td class="tg-0pky">Valerie Cotton</td>
    <td class="tg-0pky">NICHD Deputy Director <br>Office of Data Science and Sharing</td>
    <td class="tg-0pky">valerie.cotton@nih.gov</td>
  </tr>
  <tr>
    <td class="tg-0pky">Liz Amos, MLIS</td>
    <td class="tg-0pky">Special Assistant to the Chief Health Data Standards Officer <br>National Library of Medicine</td>
    <td class="tg-0pky">liz.amos@nih.gov</td>
  </tr>
  <tr>
    <td class="tg-4erg">Office of the National Coordinator for Health IT (ONC)</td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
  </tr>
  <tr>
    <td class="tg-0pky">Carmen Smiley</td>
    <td class="tg-0pky">IT Specialist (Systems Analysis)</td>
    <td class="tg-0pky">carmen.smiley@hhs.gov</td>
  </tr>
  <tr>
    <td class="tg-0pky">Rachel Abbey</td>
    <td class="tg-0pky">Public Health Analyst &amp; Program Officer</td>
    <td class="tg-0pky">rachel.abbey@hhs.gov</td>
  </tr>
  <tr>
    <td class="tg-0pky">Stephanie Garcia</td>
    <td class="tg-0pky">Senior Program Analyst</td>
    <td class="tg-0pky">stephanie.garcia@hhs.gov</td>
  </tr>
  <tr>
    <td class="tg-0pky">Brittney Boakye, MPH</td>
    <td class="tg-0pky">Program Assistant <br>Scientific Advancement Branch</td>
    <td class="tg-0pky">brittney.boakye@hhs.gov<br></td>
  </tr>
  <tr>
    <td class="tg-0pky">Alan Taylor</td>
    <td class="tg-0pky">Medical Informatics Officer, Standards and Terminology</td>
    <td class="tg-0pky">albert.taylor@hhs.gov</td>
  </tr>
</tbody>
</table>

###	Acknowledgements
This guide was developed and produced through the efforts of Health Level Seven (HL7) and created using the Trifolia-on-FHIR tool, provided by Lantana Consulting Group. The HL7 Project Insight reference number for this project is 1736.
The editors appreciate the support and sponsorship of the HL7 Public Health Workgroup, and all volunteers and staff associated with the creation of this document. This guide would not have been possible without the support of the following groups.
Health Level Seven, HL7, CDA, CCD, FHIR and the [FLAME DESIGN] are registered trademarks of Health Level Seven International, registered in the US Trademark Office.

This IG includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.

This material contains content from [LOINC](http://loinc.org). LOINC is copyright © 1995-2021, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at https://loinc.org/kb/license/. LOINC® is a registered United States trademark of Regenstrief Institute, Inc.



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
<td>HL7 International - Public Health</td>
<td><a href="http://www.hl7.org/Special/committees/pher" target="_new">http://www.hl7.org/Special/committees/pher</a></td>
</tr>
</tbody>
</table>

---

File: repos/HL7_SLASH_fhir-mmm-ig/input/pagecontent/research_considerations.md

### Implementation Considerations
This guide is intended as a specification for implementers of tooling to support researchers working to analyze clinical information related to maternal and child health. Implementing systems of this specification may likely have several existing available tools to store, transport, and transform clinical information. This guide is intended to allow implementers to use existing tooling and empower participation in sharing and analyzing maternal and child clinical information in scope of defined populations.

### Master Patient Index
A Master Patient Index (MPI) is a system that uses a set of rules (policies) to assign unique patient identifiers (Patient IDs) if it determines two or more sets of clinical data pertain to the same patient. For example, if two patient records show care was received in different care settings and they have demographic records with identical first and last name, gender, birth date, and contact information, an MPI system rule may conclude that these patient records pertain to the same person and would assign both a single MPI ID. However, in a scenario where Patient 3 and 4 have only the same first name, gender, birth date, and some contact information, one MPI system may determine these are different Patients, while another MPI system may determine these are the same Patient who might have gotten married and changed last name and address in between care delivery settings. 

Use of an MPI system is a common function of health information exchange (HIE) networks. It could also be applicable to other inter-organization or multi-care-delivery areas, such as an insurance organization. 

Maternal/child patient populations are crucial to manage across multiple source clinical information systems (i.e., EHRs). This IG will leverage current and developing standards to link mother to child data, including those that accommodate for entities using a Master Patient Index (MPI) system, which is a common method in health care for assigning and managing unique individuals across various source systems. Access to data from a clinical aggregator system that has an MPI will allow researchers to potentially investigate the clinical information associated with mothers and their children across a broader geographical dataset and over a longer period. 

### HL7 Patient Matching
[The Interoperable Digital Identity and Patient Matching Capabilities project](https://confluence.hl7.org/display/PA/Interoperable+Digital+Identity+and+Patient+Matching+Capabilities) plans to develop artifacts to profile the Patient match operation for use across organizations, incorporating elements of identity verification and the use of digital identities in workflows. Such profiles may be useful to researchers to match pregnancy-related information between systems that are in-scope for a given study and a given MPI system. 

If research studies do not require the researcher to manage identities between systems or researchers collect only de-identified clinical data, patient matching and MPIs may not be needed for aggregation of clinical data for research. 

<b><i>Note</i></b>: The Patient Matching project assumes that all entities (requestor and requesting) are abiding by all federal, state, and jurisdictional laws/policies and have obtained any additional necessary agreements that allow for the disclosure of clinical information following the matching of patient records.

### Maternal-Child Linkage
FHIR’s Patient resource provides a foundation for the appropriate method and structure for linking mother and child information. Maternal/child record linkage could occur before the data leaves the EHR system or after the researcher receives data from multiple sources. This section describes how to structure the data in an EHR systems to relate a mother and child before the information is sent to the researcher and not about how a researcher would associate the mother and child retrospectively. 

The appropriate structure to link a mother with her child through use of Patient/RelatedPerson referencing is defined in FHIR’s base [Patient](http://hl7.org/fhir/2018Sep/patient.html#maternity) resource. It is reinforced and exemplified through the [US Vital Records Common Profiles Library FHIR Implementation Guide](http://hl7.org/fhir/us/vr-common-library/STU1). This guide relies on this existing linkage structure to accurately provide relevant data to researchers. 

The RelatedPerson.relationship code diagram shows ‘MTH’ for a general ‘mother’. However, more specific relationship types are allowable within Vital Records Common Profiles: RelatedPerson – Mother profile. In short, the mother is represented twice, first as a Patient resource with a link to another representation of herself as a RelatedPerson resource, which then points to the Child as a Patient resource.

<table><tr><td><img src="mother-child-linkage.png"/></td></tr></table>

FHIR outlines the use of [three linkage techniques](https://www.hl7.org/fhir/patient.html#maternity): 
*	Use of Patient/RelatedPerson. During a pregnancy within a given EHR system (i.e., an Ob/Gyn EHR), the mother’s record exists associated with a Patient record (i.e., Patient – Mother). Depending on the clinical setting and timing, a new Patient record for the child will be created (i.e., Patient – Child). At this point, a linkage resource between the two Patient resources should also be created: RelatedPerson. The RelatedPerson resource will convey the mother’s relationship to the newborn child through a .name element representing the Mother’s name (and possibly the mother’s contact information and date of birth), a reference to the Child Patient resource, and a .relationship code of MTH (for Mother), NMTH (for Natural Mother) or possibly GESTM (for Gestational Mother).
*	Use of Encounter.partOf. This linkage structure is expected to be found within the EHR system of a delivery setting. At the start of a delivery encounter, an Encounter resource conforming to the Encounter – Maternity profile is created. When the delivery is documented, a new Encounter is created to represent the newborn’s encounter conforming to the Encounter – Birth profile. This Encounter – Birth uses the .partOf element within Encounter – Birth to reference the Encounter – Maternal Encounter.
*	Use of FamilyMemberHistory. FHIR defines a FamilyMemberHistory resource for systems to capture and share pertinent information related to a given patient’s family, such as a family member’s relationship to the patient, when the family member was born, gender, and known diagnoses of the family member.


### De-identification for Research
Clinical data can be used for research in accordance with the many applicable laws, regulations, and public and private policies that stipulate appropriate/authorized use. A key consideration of appropriate use of clinical information for research depends on whether the clinical information in question is identifiable or de-identified. 

At the federal level in the US, [HIPAA's Research section](https://www.hhs.gov/hipaa/for-professionals/special-topics/research/index.html) provides a foundation upon which state, local and private/organization rules can be built and the [Revised Common Rule](https://www.hhs.gov/ohrp/regulations-and-policy/regulations/finalized-revisions-common-rule/index.html) has clear statutes on how health research should be conducted. This specification does not provide any additional guidance on matters of obtaining consent or the appropriate use of clinical information for research and assumes matters of consent or adherence to [Health Insurance Portability and Accountability Act of 1996 (HIPAA)](https://www.cdc.gov/phlp/publications/topic/hipaa.html) and Common Rule regulations are navigated by the institutions implementing this guide for research purposes. 

While this IG does not provide guidance on the use of clinical information for the purposes of clinical trials, some of the components/processes in this guide may be applicable for a clinical trial facilitator.


### Expected Timing / Research Frequency
Researchers may want to query for maternal and associated child clinical information once or several times over an extended period. Researchers may also desire to query for existing information spanning backwards over any length of specified time. This guide does not specify timing considerations beyond what is supported by the [Clinical Reasoning Module](http://hl7.org/fhir/r4/clinicalreasoning-module.html). 

Note: When the Clinical Quality Framework(CQF) is used in Quality Reporting, a Measurement Period must be specified for accurate reporting; this Measurement Period should be a key consideration both when defining measures and when researchers are executing said measure logic.

### Relationship to other Standards

Several existing HL7 FHIR, C-CDA, and Integrating the Healthcare Enterprise (IHE) standards have been published that specify perinatal clinical information. This guide specifies how maternal health researchers can quantify clinical information related to this population which may exist, or be transmitted between systems, in accordance with any of the below standards:

[US Core FHIR IG](https://www.hl7.org/fhir/us/core/)

[Vital Records Common Profiles Library](http://hl7.org/fhir/us/vrdr/)

[Vital Records Birth and Fetal Death Reporting FHIR IG](https://build.fhir.org/ig/HL7/fhir-bfdr/)

[Vital Records Mortality and Morbidity Reporting FHIR IG](http://hl7.org/fhir/us/vrdr/)

[CDA Supplemental Pregnancy Templates for C-CDA](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=494)

[Birth Reporting Domain Analysis Model (DAM - extension of VR DAM)](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=559)

[Birth Defects Domain Analysis Model and FHIR IG](https://confluence.hl7.org/display/PHWG/Birth+Defects+DAM+and+FHIR+IG)

[Occupational Data for Health](http://hl7.org/fhir/us/odh/)

---

File: repos/HL7_SLASH_fhir-mmm-ig/input/pagecontent/this_specification.md

This IG defines a data source (i.e., Source) as well as a data consumer (i.e., Consumer). Sources may be traditional EHRs, aggregating systems such as HIEs, public health reporting agencies such as the National Vital Statistics Agency or state's Electronic Death Registration System (EDRS). 
Tooling used by Maternal Health Researchers to facilitate measure evaluation and data analysis are the expected Consumers.
Data consumers will select a Population definition defined in this guide as well as a reporting period.
The Source will provide a list of Patients (ie a census/roster of pregnant patients) for evaluation. The Source is expected to reference mothers and children via RelatedPerson and Patient.link. 

If a data soruce is unable to link Patients (mothers and children) according to the standard model, an association between the two sets of Patients (i.e., an association map between Mothers/potential Mothers and children) will be rquired. 
Consumers will query a data source for all known existing clinical information by Patient identifiers. If a Source's data are not natively available in FHIR format, ClinicalDocuments may also be queried and used as the mechanism to produce and convey Source data to Consumers.
Once target data from Sources has been aggregated and transformed into standard FHIR, an $evaluate-measure operation will be performed on the respective FHIR server [see SANER Computer Measure](https://build.fhir.org/ig/HL7/fhir-saner/transaction-4.html). 
The Output of $evaluate-measure operation will be a MeasureReport consisting of all Patient Mothers (1) found to be within the defined cohort population. 
Clinical information of the mothers determined to be within the measure population can subsequently be aggregated and provided alongside the Patient resource in the form of Supplemental Data. 
Records for the children of all mothers found to be in-cohort can be aggregated using the mother/child mapping list provided by the data source. 
Data consumers expect that mother/child relationship linkages will follow FHIR’s mother/child Linkage via RelatedPerson guidance. 


### Dataflows
<b><i>Consumer initiates dataflow through selection of Measure:</i></b>
1.	Retrieve the current research measure population Bundle (example provided in this guide) from a pre-defined measure definition server. The Bundle contains the FHIR Measure resource, the measure Library containing the applicable CQL defining the measure population, any applicable FHIR Libraries, and all ValueSets needed for measure calculation. 
2.	Place the research measure population Bundle onto a Measure Evaluation FHIR server
3.	Retrieve of all available clinical information for the provided census of Patient identifiers from a pre-defined FHIR data source
Note: if Source data is available in C-CDA format, an XDS Document Query/Retrieve can serve as the foundation document to be transformed into appropriate FHIR resources
4.	Place of all available clinical information onto the Measure Evaluation FHIR Server in step 2
5.	Execute $evaluate-measure FHIR operation on the Measure Evaluation Server in step 2
6.	Patients found in the cohort are aggregated by Identifiers of known Children (Patients) for the in-cohort mothers (from a list provided by the Source).
7.	Aggregate of all clinical information related to the children from step 6
8.	Compile of a MeasureReport Bundle for all FHIR data contained in steps 5-7

### Must Support and Missing Data
Systems claiming to conform to a profile SHALL support the elements in a profile as defined below. This guide adopts the following definitions of MustSupport for all direct transactions between the data source systems and data consumer systems.

<b>Data Source Systems</b>
*	The data source system SHALL be capable of returning elements defined in the profiles that have a MustSupport flag and SHALL populate all elements with a MustSupport flag if the information exists.
*	In situations where information on a particular data element is not present, the data source system SHALL NOT include the data element in the resource instance if the cardinality is 0..n.
*	If the information does not exist and the cardinality of the element is >= 1..*, the data source system SHALL use the dataAbsentReason extension where it is defined. 

<b><i>Note:</i></b> Populating the element with the value set absent reason or using the dataAbsent Reason SHOULD be handled by the data source system and not require provider action.

<b>Data Consumer Systems</b> 
*	data consumer systems SHALL be capable of processing resource instances containing required and allowed data elements without generating an error or causing the application to fail.
*	data consumer systems SHOULD be capable of processing (display, store, etc.) the data elements based on the utility of the specific element to the receiver.
*	When receiving a transaction from a data source system, the data consumer system SHALL interpret missing data elements within resource instances as data not present in the data source system.
*	data consumer systems SHALL be able to process resource instances containing data elements asserting missing information without generating an error or causing the application to fail.

### Search
This specification uses the same Search Syntax rule as [US Core](https://www.hl7.org/fhir/us/core/searchparameters.html). This guide does not define any additional Search Parameters.

### Privacy and Security
The methods by which data sources and data consumers agree upon the scope of clinical information to be exchanged for maternal health research should occur prior to implementation of this guide. Both data sources and data consumers must consider all applicable laws, policies, and organizational.
 
<b><i>Note:</i></b> The scope of information exchange needed by maternal health researchers may include de-identification for and identity management; while both concepts of de-identification and identity management methods are outside of the scope of this guide, they should be considered and agreed upon between data sources and consumers prior to implementation.

---

