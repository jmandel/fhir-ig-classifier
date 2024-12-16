File: repos/HL7_SLASH_HAI-LTCF/input/pagecontent/background.md

### LTCF HAI Reporting Background

LTCF HAI reporting standards were first released in 2012, with data submitted to NHSN by paper form and manual web entry. The CDA and FHIR standards for electronic HAI reporting from LTCFs were balloted for the first time in 2019. This FHIR IG, and its parallel CDA IG, permit LTCFs to submit standardized surveillance data for public reporting of HAI and other reportable events to NHSN directly from electronic health record (EHR) systems. This method of data collection and submission to NHSN can greatly reduce reporter burden and improve work efficiency. It is also expected that data errors may decrease, thereby improving data quality for national benchmarks, monitoring trends, and measuring progress towards infection prevention goals. Going forward, as this IG will likely be updated and expanded every year, it will continue to go through the HL7 ballot comment and reconciliation process each time. 

### Current Release

This IG is the first STU release of the LTCF HAI reporting templates. It specifies the creation of two reports : 

NHSN HAI LTCF Population Summary Report: MDRO and CDI LabID Event Reporting Monthly Summary Data for LTCF 

NHSN HAI LTCF Single-Person Event Report: Laboratory-identified MDRO or CDI Event for LTCF 

Please note, the latest NHSN Long-Term Care Facility Component modifications published will apply to events on or after January 1, 2020 (See: CDC/NHSN Long-Term Care Facility (LTCF) Component Summary of Modifications, January 2020. https://www.cdc.gov/nhsn/pdfs/ltc/ltcf-summary-of-changes_current.pdf). Future work on LTCF HAI reporting will continue to expand the set of forms covered by the standard. 

For further details see the [NHSN website](https://www.cdc.gov/nhsn/) for reporting healthcare-associated infections in long-term care facilities. 

 

### Mapping to CDA

This implementation guide is the first FHIR release of the HAI LCTF reporting profiles and is being balloted in the same cycle as the HL7 CDA® R2 Implementation Guide: NHSN Healthcare Associated Infection (HAI) Long Term Care Facility (LTCF) Reports Release 1, STU 1—US Realm.

The following tables show the mapping between FHIR Questionnaire items and the corresponding CDA templates

 [HAI Laboratory Identified MDRO or CDI Event Report for LTCF](Questionnaire-hai-ltcf-questionnaire-mdro-cdi-event.html)

  <table class="codes"> 

    <thead> 

      <tr> 

        <td> 

          <b>FHIR Questionnaire Item</b> 

        </td> 

        <td> 

          <b>FHIR Questionnaire Item linkId</b> 

        </td> 

        <td> 

          <b>CDA Mapping</b> 

        </td> 

      </tr> 

    </thead> 

    <tbody> 

      <tr> 

        <td>Facility ID</td> 

        <td>facility</td> 

        <td>ClinicalDocument/componentOf/encompassingEncounter/location/healthCareFacility/id</td> 

      </tr> 

      <tr> 

        <td>Resident Id</td> 

        <td>US Core Patient.identifier</td> 

        <td>ClinicalDocument/recordTarget/patientRole/id</td> 

      </tr> 

      <tr> 

        <td>Social Security #</td> 

        <td>US Core Patient.identifier</td> 

        <td>ClinicalDocument/recordTarget/patientRole/id</td> 

      </tr> 

      <tr> 

        <td>Medicare #</td> 

        <td>US Core Patient.identifier</td> 

        <td>ClinicalDocument/recordTarget/patientRole/id</td> 

      </tr> 

      <tr> 

        <td>Resident name: Last</td> 

        <td>US Core Patient.name.family</td> 

        <td>ClinicalDocument/recordTarget/name</td> 

      </tr> 

      <tr> 

        <td>Resident name: First</td> 

        <td>US Core Patient.name.given</td> 

        <td>ClinicalDocument/recordTarget/name</td> 

      </tr> 

      <tr> 

        <td>Resident name: Middle</td> 

        <td>US Core Patient.name.given</td> 

        <td>ClinicalDocument/recordTarget/name</td> 

      </tr> 

      <tr> 

        <td>Gender</td> 

        <td>US Core Patient.gender</td> 

        <td>ClinicalDocument/recordTarget/patientRole/patient/administrativeGenderCode</td> 

      </tr> 

      <tr> 

        <td>Date of Birth</td> 

        <td>US Core Patient.birthDate</td> 

        <td>ClinicalDocument/recordTarget/patientRole/patient/birthTime</td> 

      </tr> 

      <tr> 

        <td>Ethnicity</td> 

        <td>US Core Patient.us-core-ethnicity</td> 

        <td>ClinicalDocument/recordTarget/patientRole/patient/ethnicGroupCode</td> 

      </tr> 

      <tr> 

        <td>Race</td> 

        <td>US Core Patient.us-core-race</td> 

        <td>ClinicalDocument/recordTarget/patientRole/patient/raceCode</td> 

      </tr> 

      <tr> 

        <td>Date First Admitted to Facility</td> 

        <td>date-of-first-admission-to-facility</td> 

        <td>First Admission Encounter in a Lab Identified Report LTCF/effectiveTime/low</td> 

      </tr> 

      <tr> 

        <td>Date of Current Admission to Facility</td> 

        <td>date-of-current-admission-to-facility</td> 

        <td>ClinicalDocument/componentOf/encompassingEncounter/effectiveTime/low</td> 

      </tr> 

      <tr> 

        <td>Date Specimen Collected</td> 

        <td>date-specimen-collected</td> 

        <td>Specimen Collection Procedure in a Lab Identified Report LTCF/effectiveTime/low</td> 

      </tr> 

      <tr> 

        <td>Specimen Type</td> 

        <td>specimen-type</td> 

        <td>Specimen Collection Procedure in a Lab Identified Report LTCF/participant/participantRole/playingEntity/code</td> 

      </tr> 

      <tr> 

        <td>Specific Organism Type</td> 

        <td>specific-organism-type</td> 

        <td>Pathogen Identified Organism in a Lab Identified Report LTCF/value</td> 

      </tr> 

      <tr> 

        <td>Resident Care Location</td> 

        <td>resident-care-location</td> 

        <td>ClinicalDocument/componentOf/encompassingEncounter/location/healthcareFacility/id/@extension</td> 

      </tr> 

      <tr> 

        <td>Primary Resident Service Type</td> 

        <td>primary-resident-service-type</td> 

        <td>ClinicalDocument/componentOf/encompassingEncounter/location/healthCareFacility/code</td> 

      </tr> 

      <tr> 

        <td>Has resident been transferred from acute care facility in past 4 weeks?</td> 

        <td>transfer-from-acute-care-facility</td> 

        <td>Transfer from an Acute Care Facility to LTCF in a Lab Identified Report/value</td> 

      </tr> 

      <tr> 

        <td>Date of transfer from acute care to your facility</td> 

        <td>date-of-last-transfer</td> 

        <td>Transfer from an Acute Care Facility to LTCF in a Lab Identified Report/effectiveTime</td> 

      </tr> 

      <tr> 

        <td>Was resident on antibiotic therapy for this organism type at the time of transfer to your facility</td> 

        <td>antibiotic-at-time-of-transfer</td> 

        <td>Antibiotic Treatment at time of Transfer in a Lab Identified Report LTCF/value</td> 

      </tr> 

      <tr> 

        <td>NHSN Comment</td> 

        <td>nhsn-comment</td> 

        <td>NHSN Comment Section/NHSN Comment</td> 

      </tr> 

    </tbody> 

  </table> 

   

[MDRO and CDI LabID Event Reporting Monthly Summary Data for LTCF](Questionnaire-hai-ltcf-questionnaire-mdro-cdi-summary.html)

<table class="codes"> 

  <thead> 

    <tr> 

      <td> 

        <b>FHIR Questionnaire Item</b> 

      </td> 

      <td> 

        <b>FHIR Questionnaire Item linkId</b> 

      </td> 

      <td> 

        <b>CDA Mapping</b> 

      </td> 

    </tr> 

  </thead> 

  <tbody> 

    <tr> 

      <td>Facility ID</td> 

      <td>facility</td> 

      <td>ClinicalDocument/participant/associatedEntity/id/@root</td> 

    </tr> 

    <tr> 

      <td>First Day of Period Reported</td> 

      <td>report-period-start</td> 

      <td>ClinicalDocument/documentationOf/serviceEvent/effectiveTime/low</td> 

    </tr> 

    <tr> 

      <td>Last Day of Period Reported</td> 

      <td>report-period-end</td> 

      <td>ClinicalDocument/documentationOf/serviceEvent/effectiveTime/high</td> 

    </tr> 

    <tr> 

      <td>Facility Location Code</td> 

      <td>facility-location-code</td> 

      <td>ClinicalDocument/participant/associatedEntity/id/@extension</td> 

    </tr> 

    <tr> 

      <td>Resident Days</td> 

      <td>resident-days</td> 

      <td>Summary Data Observation LTCF[code/@code="1369-8']/value</td> 

    </tr> 

    <tr> 

      <td>Resident Admissions</td> 

      <td>resident-admissions</td> 

      <td>Summary Data Observation LTCF[code/@code="1370-6']/value</td> 

    </tr> 

    <tr> 

      <td>Number of Admissions on C. diff Treatment</td> 

      <td>number-admissions-on-c-diff-treatment</td> 

      <td>Summary Data Observation LTCF[code/@code="1371-4']/value</td> 

    </tr> 

    <tr> 

      <td>Number of C. diff Treatment Starts</td> 

      <td>number-c-diff-treatment-starts</td> 

      <td>Summary Data Observation LTCF[code/@code="1372-2']/value</td> 

    </tr> 

    <tr> 

      <td>Report no labID event - All specimens - Methicillin-resistant Staphylococcus aureus</td> 

      <td>no-lab-id-event-mrsa</td> 

      <td>Report No Events[code/@code="3030-4"]/value</td> 

    </tr> 

    <tr> 

      <td>Report no labID event - All specimens - Methicillin-sensitive Staphylococcus aureus</td> 

      <td>no-lab-id-event-mssa</td> 

      <td>Report No Events[code/@code="1307-8"]/value</td> 

    </tr> 

    <tr> 

      <td>Report no labID event - All specimens - Vancomycin resistant Enterococcus</td> 

      <td>no-lab-id-event-vre</td> 

      <td>Report No Events[code/@code="3033-8"]/value</td> 

    </tr> 

    <tr> 

      <td>Report no labID event - All specimens - CephR Klebsiella</td> 

      <td>no-lab-id-event-cephr-klebsiella</td> 

      <td>Report No Events[code/@code="3036-1"]/value</td> 

    </tr> 

    <tr> 

      <td>Report no labID event - All specimens - CRE E. coli</td> 

      <td>no-lab-id-event-mrsa-cre-e-coli</td> 

      <td>Report No Events[code/@code="3039-5"]/value</td> 

    </tr> 

    <tr> 

      <td>Report no labID event - All specimens - CRE Enterobacter</td> 

      <td>no-lab-id-event-mrsa-cre-enterobacter</td> 

      <td>Report No Events[code/@code="3042-9"]/value</td> 

    </tr> 

    <tr> 

      <td>Report no labID event - All specimens - CRE Klebsiella</td> 

      <td>no-lab-id-event-cre-klebsiella</td> 

      <td>Report No Events[code/@code="3045-2"]/value</td> 

    </tr> 

    <tr> 

      <td>Report no labID event - All specimens - Acinetobacter</td> 

      <td>no-lab-id-event-mdr-acinetobacter</td> 

      <td>Report No Events[code/@code="3048-6"]/value</td> 

    </tr> 

    <tr> 

      <td>Report no labID event - All specimens - Clostridium difficile</td> 

      <td>no-lab-id-event-c-difficile</td> 

      <td>Report No Events[code/@code="3051-0"]/value</td> 

    </tr> 

  </tbody> 

</table> 

 

### References

| Name | Description | 

|------|-------------| 

| [HL7 CDA® R2 Implementation Guide: National Healthcare Safety Network (NHSN) Healthcare Associated Infection (HAI) Reports for Long Term Care Facilities (HAI-LTCF-CDA), Release 1- US Realm](http://www.hl7.org/special/Committees/projman/searchableProjectIndex.cfm?action=edit&ProjectNumber=1511)    | This project developed an implementation guide constraining CDA Release 2. The implementation guide supports electronic submission of HAI LTCF data to the National Healthcare Safety Network.| 

| [HL7 FHIR® Implementation Guide: Healthcare Associated Infection Reports, Release 1 - US Realm](http://hl7.org/fhir/us/hai/index.html)| This implementation guide (IG) is to specifies standards for electronic submission of Healthcare Associated Infection (HAI) reports to the National Healthcare Safety Network (NHSN) of the Centers for Disease Control and Prevention (CDC). This IG contains a library of FHIR profiles for electronic submission of HAI reports to the NHSN. | 

| [US Core Implementation Guide (v3.0.0)](http://hl7.org/fhir/us/core/index.html)    | The US Core Implementation Guide is based on [FHIR Version 4.0.0](http://hl7.org/fhir/R4/index.html) and defines the minimum conformance requirements for accessing patient data The Argonaut pilot implementations, [ONC 2015 Edition Common Clinical Data Set (CCDS)](https://www.healthit.gov/sites/default/files/ccds_reference_document_v1_1.pdf) and the latest proposed [ONC U.S. Core Data for Interoperability (USCDI)](https://www.healthit.gov/topic/laws-regulation-and-policy/notice-proposed-rulemaking-improve-interoperability-health) provided the requirements for this guide. These profiles are the foundation for future US Realm FHIR implementation guides. In addition to Argonaut, they are used by [DAF-Research](http://hl7.org/fhir/us/daf-research/index.html), [QI-Core](http://hl7.org/fhir/us/qicore/), and [CIMI](https://www.hl7.org/Special/Committees/cimi/overview.cfm). Under the guidance of HL7 and the HL7 US Realm Steering Committee, the content will expand in future versions to meet the needs specific to the US Realm.| 

---

File: repos/HL7_SLASH_HAI-LTCF/input/pagecontent/downloads.md

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

File: repos/HL7_SLASH_HAI-LTCF/input/pagecontent/index.md

### Overview

This implementation guide (IG) specifies standards for electronic submission of Healthcare Associated Infection (HAI) Long Term Care Facilities (LTCF) reports to the National Healthcare Safety Network (NHSN) of the Centers for Disease Control and Prevention (CDC). This IG contains a library of FHIR profiles for electronic submission of HAI LTCF reports to the NHSN.

As reports are modified and new report types are defined, CDC and Health Level Seven (HL7) will develop and publish additional constraints.

Throughout this process, CDC remains the authority on NHSN data collection protocols. When healthcare enterprises choose to participate in NHSN, they must report to CDC reportable events such as identified MDRO (multidrug-resistant organism) or CDI (C. difficile infection) occurrences such as specific reportable procedures, even those without complications, and events such as a bloodstream infection, either confirmed by a positive blood culture or supported by a patients clinical symptoms. This specification opens the channel for data submission by all applications compliant with the data coding requirements defined here.

Note that participation in the NHSN requires enrollment and filing of reporting plans, which are not defined by this specification. For an overview of NHSN and full information on NHSN participation requirements, see: [http://www.cdc.gov/nhsn](http://www.cdc.gov/nhsn). Provisions of the Public Health Service Act protect all data reported to NHSN from discovery through the Freedom of Information Act (FOIA).


### Relationship to Another Standard

HL7 has developed this FHIR implementation guide in parallel with the CDA implementation guide. We anticipate several STU releases on the path to a Normative Release 1 of the HL7 implementation guides for CDA and FHIR for Healthcare Associated Infection (HAI) Reports from Long Term Care Facilities (LTCF). The FHIR and CDA implementation guides will align. A change to one standard will require the same change in the other standard. 

In this release, the new forms included in both the CDA and FHIR standards are:
* **NHSN HAI LTCF Population Summary Report**: MDRO and CDI LabID Event Reporting Monthly Summary Data for LTCF
* **NHSN HAI LTCF Single-Person Event Report**: Laboratory-identified MDRO or CDI Event for LTCF

For further details see the [NHSN website](https://www.cdc.gov/nhsn/) for reporting healthcare-associated infections in long-term care facilities.


### Audience

The audience for this work is all developers of software systems who want to enable their systems for reporting HAI data to the NHSN.

### Change Notification Process

CDC maintains an e-mail list of contacts at organizations interested in or responsible for implementations of FHIR for LTCF HAI reporting to NHSN. To be added to the list, send a request with your contact information to nhsncda@cdc.gov. CDC uses the list for e-mail notifications of changes, including new data requirements. Changes may apply to this IG and to other documents such as business rules that are needed to implement and support FHIR for LTCF HAI reporting to NHSN. NHSN CDA related information may be found at https://www.cdc.gov/nhsn/cdaportal/index.html.  

### Acknowledgements

This implementation guide was produced and developed by Lantana Consulting Group in conjunction with the Division of Healthcare Quality Promotion in the National Center for Emerging and Zoonotic Infectious Diseases (NCEZID) at the Centers for Disease Control and Prevention (CDC). Its development and deployment are results of the dedication of the team—led by Daniel A. Pollock, M.D., Surveillance Branch Chief, Division of Healthcare Quality Promotion, NCEZID, CDC and  Jeneita Bell, MD, MPH, Long-term Care Team Lead, DHQP, NCEZID, CDC—and their support of the development of interoperable data standards for the CDC’s National Healthcare Safety Network (NHSN).  

Special thanks and acknowledgment to stakeholders who participated in calls and provided feedback. Specifically, we would like to thank  Cindy Frakes, Steve Herron, Jamie Gatzke, Kelly Luden, Prasath Govindarajulu from Cerner;  Laura Ditz, Nancy Chi, Nichole (Nicki) Fetterman, Michael Furman, Patti Barton, Aga Lee from Point Click Care; Donna Doneski from NASL; and  Denise Wassenaar, Doc DeVore, Rob Price from Matrix  Care. 

The best standards are those driven by business requirements. A strong set of Healthcare Associated Infection (HAI) surveillance application vendors monitor, evaluate, and test each release of this guide.  



|Primary Editor:|Dave deRoode|Lantana Consulting Group|david.deroode@lantanagroup.com|
|Primary Editor:|Sarah Gaunt|Lantana Consulting Group|sarah.gaunt@lantanagroup.com| 
|Primary Editor:|Zabrina Gonzaga|Lantana Consulting Group|zabrina.gonzaga@lantanagroup.com| 
|Co-Editor:|Jeneita Bell, MD, MPH|CDC|hpq8@cdc.gov| 
|Co-Editor:|Angella Antilla PhD, MSN|CDC|vtb9@cdc.gov| 
|Co-Editor:|Daniel Pollock, M.D.|CDC|DPollock@cdc.gov| 
|Co-Editor:|Ahmed Tahir|Leidos Consultant to CDC/NHSN|nmn8@cdc.gov| 
|Co-Editor:|Mindy Durrance|Leidos Consultant to CDC/NHSN|mdq1@cdc.gov| 
|Co-Editor:|Sheri Chernetsky Tejedor, MD|CDC|yei9@cdc.gov| 
|Co-Editor:|Sheila Abner|CDC|sha8@cdc.gov| 
|Co-Chair:|Erin Holt MPH|Tennessee Department of Health|erin.holt@tn.gov| 
|Co-Chair:|Laura Rappleye|Altarum|laura.rappleye@altarum.org| 
|Co-Chair:|Craig Newman|Altarum|craig.newman@altarum.org| 
|Co-Chair:|Danny Wise|Allscripts|danny.wise@allscripts.com| 
|Co-Chair:|Joginder Madra|Madra Consulting Inc.|hl7@madraconsulting.com| 
|Co-Chair:|Gaye Dolin M.S.N., R.N. |Intelligent Medical Objects |gdolin@imo-online.com| 
|Co-Chair:|Calvin Beebe|Mayo Clinic|cbeebe@mayo.edu| 
|Co-Chair:|Austin Kreisler|Leidos Consultant to CDC/NHSN|duz1@cdc.gov| 
|Co-Chair:|Andrew Statler|Cerner Corp|andrew.statler@cerner.com| 
|Co-Chair:|Sean McIlvenna| Lantana Consulting Group|sean.mcilvenna@lantanagroup.com| 
|Co-Chair:|Benjamin Flessner|Redox|benjamin@redoxengine.com| 
|Co-Editor:|Beau Bannerman|Lantana Consulting Group|beau.bannerman@lantanagroup.com| 
|Technical Editor:|Diana Wright|Lantana Consulting Group|diana.wright@lantanagroup.com| 
|Technical Editor:|Chris Hannigan|Lantana Consulting Group|chris.hannigan@lantanagroup.com| 



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
<td>HL7 International - Public Health Work Group</td>
<td><a href="http://www.hl7.org/Special/committees/pher/" target="_new">http://www.hl7.org/Special/committees/pher/</a></td>
</tr>
</tbody>
</table>




---

File: repos/HL7_SLASH_HAI-LTCF/input/pagecontent/this_specification.md

### FHIR REST API

Submission of HAI event and summary reports from LTC facilities relies on the RESTful paradigm. Implementers need to be aware of and follow all the principles of [RESTful design](https://www.hl7.org/fhir/exchange-module.html#rest). Please refer to that section of the core FHIR spec.

### Actors

The following actors are in-scope of the expected RESTful exchange of this specification:

* Source: An application that exposes a Questionnaire to a consumer. This actor may also be the creator of the QuestionnaireResponse, but could also me an intermediary. This can be thought of as the server in a client/server interaction at a Long Term Care Facility. 
* Consumer: An application that consumes a QuestionnaireResponse instance. This can be thought of as the client in a client/server interaction. 

The HAI-LTCF FHIR specification does not define additional rules for sending/receiving information beyond what is already defined in the FHIR core spec and US Core.

### Profiles and Extensions

To claim conformance to a HAI-LTCF FHIR Profile, servers SHALL:

* Be able to populate all profile data elements that have a minimum cardinality >= 1 and/or flagged as Must Support as defined by that profile’s StructureDefinition.

The following profiles and extensions are present in the specification. Details on these profiles and extensions are available on the [Artifact Index page](artifacts.html). 

### Questionnaire/QuestionnaireResponse Profiles

* [Healthcare Associated Infection for Long Term Care Single-Person Report Questionnaire](StructureDefinition-hai-ltc-single-person-report-questionnaire.html)
* [Healthcare Associated Infection for Long Term Care Single-Person Report QuestionnaireResponse](StructureDefinition-hai-ltc-single-person-report-questionnaireresponse.html)
* [Healthcare Associated Infection for Long Term Care Population Summary Questionnaire](StructureDefinition-hai-ltc-population-summary-questionnaire.html)
* [Healthcare Associated Infection for Long Term Care Population Summary QuestionnaireResponse](StructureDefinition-hai-ltc-population-summary-questionnaireresponse.html)

#### Questionnaire/QuestionnaireResponse Instances

* [HAI-LTCF-Questionnaire-MDRO-CDI-Event](Questionnaire-hai-ltcf-questionnaire-mdro-cdi-event.html)
* [HAI-LTCF-Questionnaireresponse-MDRO-CDI-Event](QuestionnaireResponse-hai-ltcf-questionnaireresponse-mdro-cdi-event.html)
* [HAI-LTCF-Questionnaire-MDRO-CDI-Summary](Questionnaire-hai-ltcf-questionnaire-mdro-cdi-summary.html)
* [HAI-LTCF-Questionnaireresponse-MDRO-CDI-Summary](QuestionnaireResponse-hai-ltcf-questionnaireresponse-mdro-cdi-summary.html)


### Dependence on US Core and Value Set Authoring Center

This specification relies on the US Core Patient profile to exchange single person event information. Where US Core profiles do not exist, unprofiled (base) resources are referenced. It is expected that US Core will evolve over time, and as it does this specification will be in a position to take advantage of newly profiled resources defined within US Core.
More information on US Core can be found [here](https://www.hl7.org/fhir/us/core/). 

Quesitonnaire and QuestionnaireResponses defined within this specification reference terminologies (ValueSets) defined within the Value Set Authoring Center (VSAC). OIDs for the ValueSets referenced from the Questionnaires and QuestionnaireResponses are:
* [NHSNHealthcareServiceLocationCode: 2.16.840.1.113883.13.19](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.13.19/expansion/Latest)
* [NHSNPrimaryResidentServiceType: 2.16.840.1.113883.10.20.5.1.5.9.3](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.10.20.5.1.5.9.3/expansion/Latest)
* [NHSNSignificantPathogenCode: 2.16.840.1.114222.4.11.3194](https://vsac.nlm.nih.gov/valueset/2.16.840.1.114222.4.11.3194/expansion/Latest)
* [NHSNSpecimenTypeCode: 2.16.840.1.114222.4.11.3249](https://vsac.nlm.nih.gov/valueset/2.16.840.1.114222.4.11.3249/expansion/Latest)


### Design Considerations

This IG specifies a FHIR Questionnaire-based approach. This approach takes advantage of the FHIR Questionnaire resource that has been designed as an organized collection of questions intended to solicit information from individuals involved in the healthcare domain. These Questionnaires closely mirror the actual NHSN forms.

---

