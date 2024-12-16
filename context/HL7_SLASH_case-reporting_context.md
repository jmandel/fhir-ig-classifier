File: repos/HL7_SLASH_case-reporting/input/pagecontent/acknowledgements.md

This guide was produced and developed through a collaborative effort of the Centers for Disease Control and Prevention (CDC), Council of State and Territorial Epidemiologist (CSTE), the Association of State and Territorial Health Officials (ASTHO), the Association of Public Health Laboratories (APHL), public health surveillance practitioners, EHR vendors, and the HL7 Public Health (PH) Work Group for an electronic initial case report (eICR). A list of data elements for electronic initial case reports was developed by the CSTE Electronic Initial Case Report Task Force in collaboration with the CDC. Pregnancy status data for public health reporting were identified by a task force from the Department of Health and Human Services, Office of the National Coordinator for Health IT (ONC). CDC provided some funding to our partner organizations to support these activities. The project team that participated in the development of this implementation guide is:
* Laura A. Conn, Director, Health Information Strategy Activity, CSELS, CDC and Member, CSTE eICR Task Force
* Erin Holt Coyne, Tennessee Department of Health, and Co-chair, HL7 PH Work Group, and Member, CSTE eICR Task Force
* Sarah Gaunt, Senior Information Analyst, Lantana Consulting Group
* Rick Geimer, Chief Innovation Officer, Lantana Consulting Group
* John W. Loonsk, Johns Hopkins University Center for Population Health IT, consultant to APHL, and Executive Sponsor, Public Health Case Report Project, PH WG
* Sean McIlvenna, IT Manager and Senior Software Architect, Lantana Consulting Group
* Bryn Rhodes, Alphora
* Adam Stevenson, Alphora
* Wendy L. Wise, Senior Project Manager, Lantana Consulting Group


This and predecessor documents were reviewed by many national and state public health organizations, standards development organizations and vendors. The authors and editors would like to express gratitude to these reviewers for their thoughtful comments and support during development of this guide. In addition, special thanks need to be expressed to the following organizations who contributed to this document: 
* Association of Public Health Laboratories 
* Association of State and Territorial Health Officials
* Centers for Disease Control and Prevention Centers/Institutes/Offices:
    * Center for Surveillance, Epidemiology, and Laboratory Services (CSELS) 
    * Office of Infectious Diseases
    * National Center for Emerging and Zoonotic Infectious Diseases (NCEZID)
    * National Center for Health Statistics (NCHS)
    * National Center for HIV/AIDS, Viral Hepatitis, STD, and TB Prevention (NCHHSTP)
    * National Institute for Occupational Safety and Health (NIOSH)
* Council of State and Territorial Epidemiologists
* Public Health Informatics Institute


Others who contributed to this, and predecessor, documents include:
* Chad Albent - InterSystems
* Marla Albitz, Wolters Kluwer
* Noam Artz, HLN Consulting
* Rita Altamore, Washington Department of Health
* Nancy Barrett, Connecticut Department of Public Health
* Dan Chaput, Office of the National Coordinator for Health IT, HHS
* Michael Clifton, Epic
* Glenn Copeland, Michigan Department of Health and Human Services 
* James Daniel, HHS
* Virginia Dato, University of Pittsburgh School of Medicine
* Sherri Davidson, Alabama Department of Health
* Dave deRoode, Lantana Consulting Group
* George Dixon, AllScripts
* Jean Duteau, Duteau Design, Inc.
* John Eichwald, CDC
* Eric Haas, Health eData
* Janet Hamilton, CSTE
* John Hatem, Oracle
* Richard Hornaday, AllScripts
* Janet Hui, HLN Consulting
* Ray Humphreys, Altarum Institute
* Mario Hyland, AEGIS
* Jim Jellison, PHII
* Ramya Kommareddi, Altarum Institute
* Austin Kreisler, Leidos
* Nell Lapras, Epic
* Eric Larson, Northrup Grumman
* Meredith Lichtenstein, CSTE
* Julie Lipstein, Inductive Health 
* Claire Loe, PHII
* Genevieve Luensman, CDC
* Joginder Madra, Madra Consulting
* Tonya Martin, CDC
* Ulrike Merrick, APHL
* Maiko Minami, HLN Consulting
* Sunanda McGarvey, Northrup Grumman
* Craig Newman, Altarum Institute
* M'Lynda Owens, Cognosante
* Laura Rappleye, Altarum Institute
* Lori Reed-Forquet, eHealthSign
* Marcus Rennick, ASTHO
* Bryn Rhodes, Dynamic Content Group
* John Roberts, Tennessee Department of Public Health
* Mitra Rocca, Food and Drug Administration
* Mark Roche, Office of the National Coordinator for Health IT, HHS
* Dan Rutz, Epic
* Rob Savage, Rob Savage, LLC
* K.P. Sethi, Lantana Consulting
* AbdulMalik Shakir, Hi3 Solutions and Shakir Consulting
* Catherine Staes, University of Utah
* John Stamm, Epic
* Walter Suarez, Kaiser Permanente
* Jenni Syed, Cerner
* Mead Walker, Mead Walker Consulting
* Kathy Walsh, LabCorp
* Michelle Williamson, CDC
* Danny Wise, AllScripts
* Mike Yaskanin, Altarum Institute
* Daniel Zhang, Epic

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/acronyms_and_abbreviations.md

<table border=1>
    <thead>
        <tr>
            <th>
                <strong>Acronym or Abbreviation</strong>
            </th>
            <th>
                <strong>Definition</strong>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>AIMS</td>
            <td>APHL Informatics Messaging Services</td>
        </tr>
        <tr>
            <td>ANSI</td>
            <td>American National Standards Institute</td>
        </tr>
        <tr>
            <td>APHL</td>
            <td>Association of Public Health Laboratories</td>
        </tr>
        <tr>
            <td>API</td>
            <td>application program interface</td>
        </tr>
        <tr>
            <td>ASTHO</td>
            <td>Association of State and Territorial Health Officials</td>
        </tr>
        <tr>
            <td>CCD</td>
            <td>Continuity of Care Document</td>
        </tr>
        <tr>
            <td>C-CDA R2.1 CG</td>
            <td>C-CDA Templates for Clinical Notes R2.1 Companion Guide, Release 1</td>
        </tr>
        <tr>
            <td>C-CDA R2.1</td>
            <td>Consolidated CDA Templates for Clinical Notes, DSTU 2.1</td>
        </tr>
        <tr>
            <td>CDA R2</td>
            <td>Clinical Document Architecture, Release 2</td>
        </tr>
        <tr>
            <td>CDC</td>
            <td>Centers for Disease Control and Prevention</td>
        </tr>
        <tr>
            <td>CDS</td>
            <td>clinical decision support</td>
        </tr>
        <tr>
            <td>CPT</td>
            <td>Current Procedural Terminology</td>
        </tr>
        <tr>
            <td>CQL</td>
            <td>Clinical Quality Language</td>
        </tr>
        <tr>
            <td>CSELS</td>
            <td>Center for Surveillance, Epidemiology, and Laboratory Services</td>
        </tr>
        <tr>
            <td>CSTE</td>
            <td>Council of State and Territorial Epidemiologists</td>
        </tr>
        <tr>
            <td>DAM</td>
            <td>Domain Analysis Model</td>
        </tr>
        <tr>
            <td>eCR</td>
            <td>electronic case reporting</td>
        </tr>
        <tr>
            <td>EHR</td>
            <td>electronic health record</td>
        </tr>
        <tr>
            <td>eICR IG</td>
            <td>Public Health Case Report - the Electronic Initial Case Report</td>
        </tr>
        <tr>
            <td>eICR</td>
            <td>electronic initial case report</td>
        </tr>
        <tr>
            <td>ELR</td>
            <td>electronic laboratory report</td>
        </tr>
        <tr>
            <td>EMR</td>
            <td>electronic medical record</td>
        </tr>
        <tr>
            <td>eRSD</td>
            <td>electronic Reporting and Surveillance Distribution</td>
        </tr>
        <tr>
            <td>ESP</td>
            <td>Electronic Support for Public Health</td>
        </tr>
        <tr>
            <td>FHIR</td>
            <td>Fast Healthcare Interoperability Resources</td>
        </tr>
        <tr>
            <td>HIE</td>
            <td>Health Information Exchange</td>
        </tr>
        <tr>
            <td>HITSP</td>
            <td>Health Information Technology Standards Panel</td>
        </tr>
        <tr>
            <td>HL7</td>
            <td>Health Level Seven</td>
        </tr>
        <tr>
            <td>ICD</td>
            <td>International Classification of Diseases</td>
        </tr>
        <tr>
            <td>ICP</td>
            <td>infection control professional</td>
        </tr>
        <tr>
            <td>IG</td>
            <td>implementation guide</td>
        </tr>
        <tr>
            <td>IHE</td>
            <td>Integrating the Healthcare Enterprise</td>
        </tr>
        <tr>
            <td>ISO</td>
            <td>International Standards Organization</td>
        </tr>
        <tr>
            <td>IT</td>
            <td>information technology</td>
        </tr>
        <tr>
            <td>LMP</td>
            <td>last menstrual period</td>
        </tr>
        <tr>
            <td>LOINC</td>
            <td>Logical Observation Identifiers Names and Codes</td>
        </tr>
        <tr>
            <td>MIME</td>
            <td>Multipurpose Internet Mail Extensions</td>
        </tr>
        <tr>
            <td>NCD</td>
            <td>Notifiable Condition Detector</td>
        </tr>
        <tr>
            <td>NCEZID</td>
            <td>National Center for Emerging and Zoonotic Infectious Diseases</td>
        </tr>
        <tr>
            <td>NCHHSTP</td>
            <td>National Center for HIV/AIDS, Viral Hepatitis, STD, and TB Prevention</td>
        </tr>
        <tr>
            <td>NIOSH</td>
            <td>National Institute for Occupational Safety and Health</td>
        </tr>
        <tr>
            <td>NNDSS</td>
            <td>Nationally Notifiable Disease Surveillance System</td>
        </tr>
        <tr>
            <td>NPI</td>
            <td>National Provider Identifier</td>
        </tr>
        <tr>
            <td>NUBC</td>
            <td>National Uniform Billing Committee</td>
        </tr>
        <tr>
            <td>NUCC</td>
            <td>National Uniform Claim Committee</td>
        </tr>
        <tr>
            <td>ODH</td>
            <td>Occupational Data for Health</td>
        </tr>
        <tr>
            <td>OID</td>
            <td>object identifier</td>
        </tr>
        <tr>
            <td>ONC</td>
            <td>Office of National Coordinator for Health IT</td>
        </tr>
        <tr>
            <td>PH</td>
            <td>public health</td>
        </tr>
        <tr>
            <td>PHA</td>
            <td>public health agency</td>
        </tr>
        <tr>
            <td>PHCP</td>
            <td>Public Health Community Platform</td>
        </tr>
        <tr>
            <td>PHRI</td>
            <td>Public Health Case Reporting Initiative</td>
        </tr>
        <tr>
            <td>PHWG</td>
            <td>HL7 Public Health Working Group</td>
        </tr>
        <tr>
            <td>RCKMS</td>
            <td>Reportable Conditions Knowledge Management System</td>
        </tr>
        <tr>
            <td>RCTC</td>
            <td>reportable condition trigger code</td>
        </tr>
        <tr>
            <td>RFD</td>
            <td>Retrieve Form for Data Capture</td>
        </tr>
        <tr>
            <td>RHIO</td>
            <td>Regional Health Information Organization</td>
        </tr>
        <tr>
            <td>S&amp;I</td>
            <td>Standards and Interoperability</td>
        </tr>
        <tr>
            <td>SDC</td>
            <td>Structured Data Capture</td>
        </tr>
        <tr>
            <td>SDWG</td>
            <td>HL7 Structured Documents Working Group</td>
        </tr>
        <tr>
            <td>SMART</td>
            <td>Substitutable Medical Applications, Reusable Technologies</td>
        </tr>
        <tr>
            <td>SNOMED CT</td>
            <td>Systemized Nomenclature for Medicine – Clinical Terms</td>
        </tr>
        <tr>
            <td>SSN</td>
            <td>Social Security Number</td>
        </tr>
        <tr>
            <td>STU</td>
            <td>Standard for Trial Use</td>
        </tr>
        <tr>
            <td>UCUM</td>
            <td>Unified Code for Units of Measure</td>
        </tr>
        <tr>
            <td>URL</td>
            <td>uniform resource locator</td>
        </tr>
        <tr>
            <td>URN</td>
            <td>uniform resource name</td>
        </tr>
        <tr>
            <td>USCDI</td>
            <td>U.S. Core Data for Interoperability</td>
        </tr>
        <tr>
            <td>VIS</td>
            <td>Vaccine Information Statement</td>
        </tr>
        <tr>
            <td>XML</td>
            <td>eXtensible Markup language</td>
        </tr>
        <tr>
            <td>XPath</td>
            <td>XML Path Language</td>
        </tr>
    </tbody>
</table>

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/change_log.md

### Second Techincal Correction - STU 2.1.2 (2.1.2)


|JIRA Ticket|Ticket Description|
|---------|----------|
| [FHIR-46585](https://jira.hl7.org/browse/FHIR-46585) | Update mapping/description type guidance |
| [FHIR-46686](https://jira.hl7.org/browse/FHIR-46686) | Correct misapplied jira: [FHIR-37429](https://jira.hl7.org/browse/FHIR-37429) |
| [FHIR-46687](https://jira.hl7.org/browse/FHIR-46687) | eICR Composition required sections - relax required (1..x) entry |


### First Techincal Correction - STU 2.1.1 (2.1.1)


|JIRA Ticket|Ticket Description|
|---------|----------|
| [FHIR-41711](https://jira.hl7.org/browse/FHIR-41711) | Remove SMART on FHIR Backend Services Authorization section from "The Specification" page |


### Unballoted STU Update - STU 2.1 (2.1)


|JIRA Ticket|Ticket Description|
|---------|----------|
| [FHIR-37438](https://jira.hl7.org/browse/FHIR-37438) | Add a MedicationAdministration profile |
| [FHIR-37437](https://jira.hl7.org/browse/FHIR-37437) | Update Gender Identity extension to latest US Core Gender Identity extension |
| [FHIR-37436](https://jira.hl7.org/browse/FHIR-37436) | Update Facility Id (location.identifier) from 0..1 to 1..1 |
| [FHIR-37435](https://jira.hl7.org/browse/FHIR-37435) | Update Capability Statements |
| [FHIR-37434](https://jira.hl7.org/browse/FHIR-37434) | Add language around the dependency on USPHPL |
| [FHIR-37433](https://jira.hl7.org/browse/FHIR-37433) | Update binding to tribal affiliation value set from required to extensible |
| [FHIR-37432](https://jira.hl7.org/browse/FHIR-37432) | Update to new Travel Purpose value set  |
| [FHIR-37431](https://jira.hl7.org/browse/FHIR-37431) | Update IG with guidance around off hours/long encounters triggering |
| [FHIR-37430](https://jira.hl7.org/browse/FHIR-37430) | Add FHIR supportingInfo extension to Relevant Reportable Condition Observation |
| [FHIR-37429](https://jira.hl7.org/browse/FHIR-37429) | Add Specimen type |
| [FHIR-37428](https://jira.hl7.org/browse/FHIR-37428) | Update language in IG around rules application location |
| [FHIR-37427](https://jira.hl7.org/browse/FHIR-37427) | Update implementation guide to remove mentions of proprietary infrastruction/system names |
| [FHIR-37421](https://jira.hl7.org/browse/FHIR-37421) | Loop timing offset changes |
| [FHIR-37420](https://jira.hl7.org/browse/FHIR-37420) | Need a mechanism to distinguish specification and value set libraries other than by profile |
| [FHIR-37419](https://jira.hl7.org/browse/FHIR-37419) | Remove redundant value set slices from specification and supplemental library profiles |
| [FHIR-36776](https://jira.hl7.org/browse/FHIR-36776) | Characterize the focus lsice for useContext in a us-ph-valueset |
| [FHIR-36663](https://jira.hl7.org/browse/FHIR-36663) | Add a relatedData extension to the eRSD PlanDefinition profile |
| [FHIR-36662](https://jira.hl7.org/browse/FHIR-36662) | Clarify distribution approaches for eRSD |
| [FHIR-36661](https://jira.hl7.org/browse/FHIR-36661) | Profile bundle-level examples for the specification and supplemental bundles |
| [FHIR-36660](https://jira.hl7.org/browse/FHIR-36660) | Add a routine vs emergent indicator for value sets |
| [FHIR-36658](https://jira.hl7.org/browse/FHIR-36658) | Add missing slices for supplemental and specification profiles |
| [FHIR-36171](https://jira.hl7.org/browse/FHIR-36171) | Add ODH Employment Status |
| [FHIR-33054](https://jira.hl7.org/browse/FHIR-33054) | eCR - eRSD Query Option |


---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/design_considerations.md

#### Overall Design

The Electronic Case Reporting (eCR) standards; the electronic Initial Case Report (eICR) and the Reportability Response (RR), support two broad approaches to eCR.

One of the approaches also uses the Reportable Condition Knowledge Management System (RCKMS) on the AIMS platform to report to Public Health Agencies (PHAs) and one does not. The two approaches are:

1. Information flowing from healthcare to PHAs (via the eICR) and back (via the RR) after a reportability determination has been made at the healthcare organization using reporting rules from all PHAs for all conditions.
2. Information flowing from healthcare to a shared services platform (via the eICR) and then to PHAs (via the eICR and the RR) and with a response to healthcare from the shared services platform (via the RR).

In some jurisdictions, HIEs and/or Health Information Networks may also be employed to securely move data between organizations including to and from a shared services platform.

Prominent among these purposes is to implement public health reporting rules that cannot currently be readily distributed to healthcare. The rules ensure that public health agencies only get the data they are authorized to receive by state laws.

Without more complex reporting rules that are distributable to, and executable in, healthcare most PHAs will not use approach #1. Hence, these approaches are principally represented by either "Remote Rules" or "Local Rules" in the following diagram.

<table><tr><td><img src="ReportingDesignPattern.jpg" alt="Reporting Design Pattern" class="figure-img-portrait img-responsive img-rounded center-block" /></td></tr></table>

&nbsp;

#### Using the eRSD

FHIR enables several capabilities for eCR. Because reportable events occur in healthcare without PHA knowledge and because PHAs do not have the authority to receive these data until they are deemed reportable, eCR utilizes an unsolicited push transaction, FHIR messaging, and flexibility in multi-network transport to report data to state and local agencies. There is also a transaction for "electronic Reporting & Surveillance Distribution (eRSD)." The eRSD includes Reportable Condition Trigger Code (RCTC) trigger code value sets and other reporting guidance from public health to healthcare to support reporting from EHRs.

The eRSD transaction needs to be able to help orchestrate this reporting which may span a broad spectrum from trigger codes in an EHR all the way to a healthcare-based API connected rules engine that is external to the EHR but operating inside of healthcare or at a healthcare Business Associate. To achieve this orchestration the eRSD resource needs to guide the Triggering, Rule Processing, Clinical Feedback, Creation of eICR, Routing and Sending components of eCR and interactions between them. For some time, much of the eRSD transaction will provide structure to eCR as human consumable guidance. The most immediately machine processable components are the included trigger code value sets.

When distributable rules can be processed in most healthcare settings, there may be needs to distribute the rules, the trigger codes, and links to relevant on-line condition-specific information. The eRSD transaction can enable these distributions going forward as well as provide details for how critical elements, like report timing, of the reporting process should be implemented. It will also allow for a connection to separate efforts to develop clinical guidelines for public health conditions. Reporting and guidelines should utilize the same infrastructure and approaches where possible to minimize demands on EHRs.

eICRs shared from EHR interface are not definitively reportable. There are complex rules that also need to also be implemented to ensure that case reports meet state laws for submission. Examples of some of these rules follow.

<table style="width:503.0pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td style="width: 124pt;border: 1pt solid windowtext;background: rgb(217, 217, 217) none repeat scroll 0% 0%;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;line-height:13.0pt;'><strong><span style="color:black;">Rule Number</span></strong></p>
            </td>
            <td style="width: 201.8pt;border-color: windowtext windowtext windowtext currentcolor;border-style: solid solid solid none;border-width: 1pt 1pt 1pt medium;border-image: none 100% / 1 / 0 stretch;background: rgb(217, 217, 217) none repeat scroll 0% 0%;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;line-height:13.0pt;'><strong><span style="color:black;">Rule Description</span></strong></p>
            </td>
            <td style="width: 177.2pt;border-color: windowtext windowtext windowtext currentcolor;border-style: solid solid solid none;border-width: 1pt 1pt 1pt medium;border-image: none 100% / 1 / 0 stretch;background: rgb(217, 217, 217) none repeat scroll 0% 0%;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;line-height:13.0pt;'><strong><span style="color:black;">Data needed for rule to determine reportability</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 124pt;border-color: currentcolor windowtext windowtext;border-style: none solid solid;border-width: medium 1pt 1pt;border-image: none 100% / 1 / 0 stretch;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;line-height:13.0pt;'>Rule 1</p>
            </td>
            <td style="width: 201.8pt;border-color: currentcolor windowtext windowtext currentcolor;border-style: none solid solid none;border-width: medium 1pt 1pt medium;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;line-height:13.0pt;'>Pediatric influenza mortality reporting</p>
            </td>
            <td style="width: 177.2pt;border-color: currentcolor windowtext windowtext currentcolor;border-style: none solid solid none;border-width: medium 1pt 1pt medium;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;line-height:13.0pt;'>age and condition</p>
            </td>
        </tr>
        <tr>
            <td style="width: 124pt;border-color: currentcolor windowtext windowtext;border-style: none solid solid;border-width: medium 1pt 1pt;border-image: none 100% / 1 / 0 stretch;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;line-height:13.0pt;'>Rule 2</p>
            </td>
            <td style="width: 201.8pt;border-color: currentcolor windowtext windowtext currentcolor;border-style: none solid solid none;border-width: medium 1pt 1pt medium;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;line-height:13.0pt;'>Staph Aureus with Vancomycin MIC &gt; 4&mu;g/ml</p>
            </td>
            <td style="width: 177.2pt;border-color: currentcolor windowtext windowtext currentcolor;border-style: none solid solid none;border-width: medium 1pt 1pt medium;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;line-height:13.0pt;'>condition and drug sensitivity</p>
            </td>
        </tr>
        <tr>
            <td style="width: 124pt;border-color: currentcolor windowtext windowtext;border-style: none solid solid;border-width: medium 1pt 1pt;border-image: none 100% / 1 / 0 stretch;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;line-height:13.0pt;'>Rule 3</p>
            </td>
            <td style="width: 201.8pt;border-color: currentcolor windowtext windowtext currentcolor;border-style: none solid solid none;border-width: medium 1pt 1pt medium;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;line-height:13.0pt;'>Respiratory Syncytial Virus associated deaths in laboratory confirmed cases less than five years of age</p>
            </td>
            <td style="width: 177.2pt;border-color: currentcolor windowtext windowtext currentcolor;border-style: none solid solid none;border-width: medium 1pt 1pt medium;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;line-height:13.0pt;'>condition, cause of death, and age</p>
            </td>
        </tr>
    </tbody>
</table>


---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/downloads.md

### Full Implementation Guide

The entire implementation guide (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

### Package File

The following package file includes an NPM package file used by many of the FHIR tools. It contains all the value sets, profiles, extensions, list of pages and urls in the IG, etc defined as part of this version of the Implementation Guides. This file should be the first choice whenever generating any implementation artifacts since it contains all of the rules about what makes the profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply in order to make a conformant implementation. See the overview on [validating FHIR profiles and resources](http://hl7.org/fhir/R4/validation.html):

* [Package](package.tgz)

### Format Specific Definition Files

* [XML](definitions.xml.zip)
* [JSON](definitions.json.zip)
* [TTL](definitions.ttl.zip)

### Examples: all the examples that are used in this Implementation Guide available for download:

* [XML](examples.xml.zip)
* [JSON](examples.json.zip)
* [TTl](examples.ttl.zip)

### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

### Dependency Table

{% include dependency-table.xhtml %}

### Global Profiles Table

{% include globals-table.xhtml %}

### IP Statements

{% include ip-statements.xhtml %}

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/eicr_data_elements.md

<p>The Council of State and Territorial Epidemiologists (CSTE) has reviewed and deemed appropriate the content of the electronic initial case report (eICRs) standards for a multi-condition, multi-jurisdiction electronic case report, and stipulated the following (CSTE letter of November 1st, 2021):</p>  

<blockquote><i>Public Health Agencies (PHAs) are authorized to receive the data specified in the electronic initial case report (eICR) as a multi-condition, multi-jurisdiction electronic case report. When these data are available, they should be used to populate eICRs transmitted from electronic health records (EHRs). 
There may be additional data, also needed by public health, that may be requested by public health agencies subsequent to the receipt of an eICR that are necessary for public health investigation that should also be shared in accordance with state and local laws and regulations. Public health agencies are authorized by such laws and regulations to investigate and receive data for cases of reportable disease, whether suspected or confirmed.</i></blockquote>

<table width="100%">
<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
<tbody>
<tr>
<th width="27%">
<p><strong>eICR ELEMENT NAME</strong></p>
</th>
<th width="36%">
<p><strong>eICR DESCRIPTION</strong></p>
</th>
<th width="36%">
<p><strong>RATIONALE / JUSTIFICATION</strong></p>
</th>
</tr>
<tr>
<td width="27%">
<p>Date of the Report</p>
</td>
<td width="36%">
<p>The date on which the reporting party (e.g., physician, nurse practitioner, physician assistant, etc.), completes collection of minimum data for the eICR</p>
</td>
<td width="36%">
<p>Used to assess timelines of eICR data provisioning, and other quality assurance tasks</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Report Submission Date/Time</p>
</td>
<td width="36%">
<p>The date and time at which the EHR system sends the eICR data to the jurisdictional PHA or designee</p>
</td>
<td width="36%">
<p>Used to ensure timeliness of report and to identify time lags between date of the report and when the EHR sends the report</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Sending Application</p>
</td>
<td width="36%">
<p>The name of the sending application</p>
</td>
<td width="36%">
<p>Used to ensure quality and integrity of eICR data</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Provider ID</p>
</td>
<td width="36%">
<p>Identifier of the provider responsible for the patient's care when the case was triggered(e.g., National Provider Identifier (NPI))</p>
</td>
<td width="36%">
<p>Need provider's contact information in order to follow up appropriately for reportable event to ensure appropriate treatment, identify contact exposures, etc.</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Provider Name</p>
</td>
<td width="36%">
<p>Name of the provider responsible for the patient's care when the case was triggered</p>
</td>
<td width="36%">
<p>Need provider's contact information in order to follow up appropriately for reportable event to ensure appropriate treatment, identify contact exposures, etc.</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Provider Phone</p>
</td>
<td width="36%">
<p>A phone number for the provider responsible for the patient's care when the case was triggered</p>
</td>
<td width="36%">
<p>Need provider's contact information in order to follow up appropriately for reportable event to ensure appropriate treatment, identify contact exposures, etc.</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Provider Fax</p>
</td>
<td width="36%">
<p>The provider's fax number with area code</p>
</td>
<td width="36%">
<p>Necessary to obtain additional info during case follow-up phase or to submit supplemental information</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Provider Email</p>
</td>
<td width="36%">
<p>The provider's email address</p>
</td>
<td width="36%">
<p>If secure email is available; used for sharing secure links to health data if allowed by state regulations</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Provider Address</p>
</td>
<td width="36%">
<p>The provider’s geographical location or mailing address.</p>
</td>
<td width="36%">
<p>Need provider's contact information in order to follow up appropriately for reportable event to ensure appropriate treatment, identify contact exposures, etc.</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Provider Facility/Office Name</p>
</td>
<td width="36%">
<p>The name of the office or facility of the provider responsible for the patient's care when the case was triggered (where care was provided to the patient).</p>
</td>
<td width="36%">
<p>Need provider's contact information in order to follow up appropriately for reportable event to ensure appropriate treatment, identify contact exposures, etc.</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Provider Facility/Office Address</p>
</td>
<td width="36%">
<p>The address of the office or facility of the provider responsible for the patient's care when the case was triggered (where care was provided to the patient).</p>
</td>
<td width="36%">
<p>Need provider's contact information in order to follow up appropriately for reportable event to ensure appropriate treatment, identify contact exposures, etc.</p>
</td>
</tr>
<td width="27%">
<p>Provider Facility/Office Telecom</p>
</td>
<td width="36%">
<p>The telecom of the office or facility of the provider responsible for the patient's care when the case was triggered (where care was provided to the patient).</p>
</td>
<td width="36%">
<p>Need provider's contact information in order to follow up appropriately for reportable event to ensure appropriate treatment, identify contact exposures, etc.</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Facility Id</p>
</td>
<td width="36%">
<p>Identification code for the facility in which care was provided when the case was triggered (e.g., Facility NPI)</p>
</td>
<td width="36%">
<p>Need contact information in order to follow up appropriately for reportable event to ensure appropriate treatment, identify contact exposures, etc.</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Facility Address</p>
</td>
<td width="36%">
<p>The physical location of the facility in which care was provided when the case was triggered</p>
</td>
<td width="36%">
<p>Need contact information in order to follow up appropriately for reportable event to ensure appropriate treatment, identify contact exposures, etc.</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Facility Name</p>
</td>
<td width="36%">
<p>The name of the facility in which care was provided when the case was triggered</p>
</td>
<td width="36%">
<p>Need contact information in order to follow up appropriately for reportable event to ensure appropriate treatment, identify contact exposures, etc.</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Facility Type</p>
</td>
<td width="36%">
<p>The type of facility in which care was provided when the case was triggered.</p>
</td>
<td width="36%">
<p>Used to determine the type of care setting in which patient is receiving care for the reportable condition</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Healthcare Organization Name</p>
</td>
<td width="36%">
<p>The contact name for the for the umbrella organization under which the facility where care was provided operates</p>
</td>
<td width="36%">
<p>Need contact information in order to follow up appropriately for reportable event to ensure appropriate treatment, identify contact exposures, etc.</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Healthcare Organization Id</p>
</td>
<td width="36%">
<p>Identification code for the umbrella organization under which the facility where care was provided operates</p>
</td>
<td width="36%">
<p>Need contact information in order to follow up appropriately for reportable event to ensure appropriate treatment, identify contact exposures, etc.</p>
</td>
</tr>
<tr>
<tr>
<td width="27%">
<p>Healthcare Organization Contact Telecom</p>
</td>
<td width="36%">
<p>A contact telecom address (phone, email, fax, etc.) for the umbrella organization under which the facility where care was provided operates</p>
</td>
<td width="36%">
<p>Need contact information in order to follow up appropriately for reportable event to ensure appropriate treatment, identify contact exposures, etc.</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Healthcare Organization Contact Address</p>
</td>
<td width="36%">
<p>The contact address for the umbrella organization under which the facility where care was provided operates</p>
</td>
<td width="36%">
<p>Need contact information in order to follow up appropriately for reportable event to ensure appropriate treatment, identify contact exposures, etc.</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Patient ID Number</p>
</td>
<td width="36%">
<p>Patient social security number, medical record number, or other identifying value as required or allowed under jurisdictional laws governing health data exchange</p>
</td>
<td width="36%">
<p>Identification and contact; jurisdictions may select which they can receive based on laws governing public health data exchange</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Patient Name</p>
</td>
<td width="36%">
<p>All names for the patient, including legal names and aliases. Must include the name type (i.e., legal or alias), first name, middle name, and last name</p>
</td>
<td width="36%">
<p>Identification and contact</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Parent/Guardian Name</p>
</td>
<td width="36%">
<p>All names for the patient&rsquo;s parent or guardian, including legal names and aliases (if patient age is &lt; 18 years). Must include name type (i.e., legal or alias), first name, middle name, and last name</p>
</td>
<td width="36%">
<p>For appropriate contact with minors</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Patient or Parent/Guardian Phone</p>
</td>
<td width="36%">
<p>All phone numbers and phone number types for the patient or parent/guardian</p>
</td>
<td width="36%">
<p>Contact Patient</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Patient or Parent/Guardian Email</p>
</td>
<td width="36%">
<p>The email address for the patient or the patient&rsquo;s parent/guardian.</p>
</td>
<td width="36%">
<p>Contact Patient</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Street Address</p>
</td>
<td width="36%">
<p>All addresses for the patient, including current and residential addresses. Must include street address, apartment or suite number, city or town, county, state, zip code, and country</p>
</td>
<td width="36%">
<p>Case Assignment, analysis and visualization, matching</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Birth Date</p>
</td>
<td width="36%">
<p>The patient's date of birth</p>
</td>
<td width="36%">
<p>Appropriate identification, appropriate identification of minors, risk; Necessary to determine patient age; matching electronic laboratory reports (ELRs)</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Patient Birth Sex</p>
</td>
<td width="36%">
<p>The patient's biological sex (not gender)</p>
</td>
<td width="36%">
<p>Demographic reporting</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Race</p>
</td>
<td width="36%">
<p>The patient's race</p>
</td>
<td width="36%">
<p>Demographic reporting</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Ethnicity</p>
</td>
<td width="36%">
<p>The patient's ethnicity</p>
</td>
<td width="36%">
<p>Demographic reporting</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Preferred Language</p>
</td>
<td width="36%">
<p>The patient's preferred language</p>
</td>
<td width="36%">
<p>Communication with Patient</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Current Occupation</p>
</td>
<td width="36%">
<p>Occupation which the subject currently holds.</p>
</td>
<td width="36%">
<p>Identification of potential risk, transmission risk</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Usual Occupation</p>
</td>
<td width="36%">
<p>The occupation which the subject has held for the longest duration through his or her working history.</p>
</td>
<td width="36%">
<p>Identification of potential risk, transmission risk</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Current Industry</p>
</td>
<td width="36%">
<p>Type of business (industry) in which the subject currently holds a job.</p>
</td>
<td width="36%">
<p>Identification of potential risk, transmission risk</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Usual Industry</p>
</td>
<td width="36%">
<p>The industry (type of business) which the subject has worked in for the longest duration while in the usual occupation</p>
</td>
<td width="36%">
<p>Identification of potential risk, transmission risk</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Current Job Title</p>
</td>
<td width="36%">
<p>Title of the currently held job.</p>
</td>
<td width="36%">
<p>Identification of potential risk, transmission risk</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Current Employer Name, Phone, and Address</p>
</td>
<td width="36%">
<p>Name, phone, and address of the current employer.</p>
</td>
<td width="36%">
<p>Identification of potential risk, transmission risk</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Occupational Exposure</p>
</td>
<td width="36%">
<p>Actual contact or interaction with a specific hazard at work that increases an individual&rsquo;s risk of a detrimental physical or mental health outcome.</p>
</td>
<td width="36%">
<p>Identification of potential risk, transmission risk</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Pregnancy status (yes, no, possible, unknown)</p>
</td>
<td width="36%">
<p>The patient's pregnancy status.</p>
</td>
<td width="36%">
<p>Appropriate treatment, follow-up, appropriate for scoring/risk ascertainment</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Pregnancy status determination method</p>
</td>
<td width="36%">
<p>The method by which the pregnancy status was determined.</p>
</td>
<td width="36%">
<p>Appropriate treatment, follow-up, appropriate for scoring/risk ascertainment</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Pregnancy status recorded date</p>
</td>
<td width="36%">
<p>The date on which the pregnancy status was recorded.</p>
</td>
<td width="36%">
<p>Appropriate treatment, follow-up, appropriate for scoring/risk ascertainment</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Estimated date of delivery (EDD)</p>
</td>
<td width="36%">
<p>Estimated date a woman will give birth.</p>
</td>
<td width="36%">
<p>Appropriate treatment, follow-up, appropriate for scoring/risk ascertainment</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Estimated date of delivery (EDD) method</p>
</td>
<td width="36%">
<p>The method used to determine the EDD.</p>
</td>
<td width="36%">
<p>Appropriate treatment, follow-up, appropriate for scoring/risk ascertainment</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Estimated gestational age</p>
</td>
<td width="36%">
<p>The estimated gestational age of the pregnancy (in contrast to the gestational age at birth), beginning from the time of fertilization.</p>
</td>
<td width="36%">
<p>Appropriate treatment, follow-up, appropriate for scoring/risk ascertainment</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Estimated gestational age determination date</p>
</td>
<td width="36%">
<p>The date the gestational age was determined.</p>
</td>
<td width="36%">
<p>Appropriate treatment, follow-up, appropriate for scoring/risk ascertainment</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Estimated gestational age determination method</p>
</td>
<td width="36%">
<p>The method used to determine the gestational age.</p>
</td>
<td width="36%">
<p>Appropriate treatment, follow-up, appropriate for scoring/risk ascertainment</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Last menstrual period (LMP)</p>
</td>
<td width="36%">
<p>Start date of the last menstrual period of the patient.</p>
</td>
<td width="36%">
<p>Appropriate treatment, follow-up, appropriate for scoring/risk ascertainment</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Pregnancy outcome</p>
</td>
<td width="36%">
<p>The result(s) of the pregnancy, such as live birth, still birth, miscarriage, etc.</p>
</td>
<td width="36%">
<p>Appropriate treatment, follow-up, appropriate for scoring/risk ascertainment</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Pregnancy outcome date</p>
</td>
<td width="36%">
<p>Date on which the pregnancy outcome occurred.</p>
</td>
<td width="36%">
<p>Appropriate treatment, follow-up, appropriate for scoring/risk ascertainment</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Postpartum status</p>
</td>
<td width="36%">
<p>The postpartum status of a patient. If the template is present, the patient is in the postpartum period.</p>
</td>
<td width="36%">
<p>Appropriate treatment, follow-up, appropriate for scoring/risk ascertainment</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Visit Date/Time</p>
</td>
<td width="36%">
<p>Date and time of the provider's most recent encounter with the patient regarding the reportable condition</p>
</td>
<td width="36%">
<p>Defines when the individual may have been ill; a point in time to which can link other potential cases of reportable event; necessary to ensure follow-up within key time frames/helps triage priority follow-up and ensure control measures are implemented in a timely way</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Admission Date/Time</p>
</td>
<td width="36%">
<p>Date and time the patient was admitted to the treatment facility; e.g., hospital</p>
</td>
<td width="36%">
<p>Key for epidemiologic investigation - important to know if hospitalized for severity of condition and to triage priority follow-up</p>
</td>
</tr>
<tr>
<td width="27%">
<p>History of Present Illness</p>
</td>
<td width="36%">
<p>Physician&rsquo;s narrative of the history of the reportable event. Information about possible contacts and/or exposures may be captured here.</p>
</td>
<td width="36%">
<p>Indicator of reportable condition - most important descriptor of condition/ epidemiologic information - supports epidemiologic investigation; epidemiologic relevant information</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Reason for Visit</p>
</td>
<td width="36%">
<p>Provider&rsquo;s interpretation for the patient&rsquo;s visit for the reportable event</p>
</td>
<td width="36%">
<p>Indicator of reportable condition - most important descriptor of condition/ epidemiologic information - supports epidemiologic investigation</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Chief Complaint</p>
</td>
<td width="36%">
<p>Patient&rsquo;s chief complaint (the patient&rsquo;s own description)</p>
</td>
<td width="36%">
<p>An early indicator of a possible reportable condition</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Past Medical History</p>
</td>
<td width="36%">
<p>A record of the patient&rsquo;s past complaints, problems, and diagnoses.</p>
</td>
<td width="36%">
<p>Provides information on patient&rsquo;s previous conditions or diagnoses that could be relevant to the current condition, such as underlying conditions.</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Review of Systems</p>
</td>
<td width="36%">
<p>A relevant collection of symptoms and functions systematically gathered by a clinician (includes symptoms the patient is currently experiencing, some of which were not elicited during the history of present illness, as well as a potentially large number of pertinent negatives, for example, symptoms that the patient denied experiencing).</p>
</td>
<td width="36%">
<p>If clinical details signify a possible case of public health importance - confirm the need for public health follow up</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Date of Onset</p>
</td>
<td width="36%">
<p>The date of symptoms for the reportable event</p>
</td>
<td width="36%">
<p>Helps determine possible exposure and illness- calculate incubation period</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Symptoms (list)</p>
</td>
<td width="36%">
<p>List of patient symptoms (structured) for the reportable event</p>
</td>
<td width="36%">
<p>If clinical symptoms signify a case of public health importance - confirm the need for public health follow-up</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Laboratory Order Code</p>
</td>
<td width="36%">
<p>Ordered tests for the patient during the encounter</p>
</td>
<td width="36%">
<p>Some lab test orders are reportable for suspected cases</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Laboratory Result</p>
</td>
<td width="36%">
<p>The result of a laboratory test for the patient during the encounter</p>
</td>
<td width="36%">
<p>Some lab test results are reportable for suspected cases</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Laboratory Result Status</p>
</td>
<td width="36%">
<p>The status of a laboratory test (preliminary, final etc.)</p>
</td>
<td width="36%">
<p>Indication of test completeness and reliability of results.</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Specimen source/type/id/collection date</p>
</td>
<td width="36%">
<p>Information about the specimen collected</p>
</td>
<td width="36%">
<p>Additional details on laboratory specimen needed to confirm some conditions (e.g., collected from a sterile site)</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Placer Order Number</p>
</td>
<td width="36%">
<p>Identifier for the laboratory order from the encounter</p>
</td>
<td width="36%">
<p>Potential value to linking electronic laboratory reports (ELR) to eICR</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Diagnoses (list)</p>
</td>
<td width="36%">
<p>The healthcare provider's diagnoses of the patient's health condition (all)</p>
</td>
<td width="36%">
<p>If clinical diagnoses signify a case of public health importance - confirm the need for public health follow-up</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Date of Diagnosis</p>
</td>
<td width="36%">
<p>The date of provider diagnosis</p>
</td>
<td width="36%">
<p>Knowing when patient is diagnosed; integral to epidemiological investigation</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Medications</p>
</td>
<td width="36%">
<p>Medications relevant to the reportable event (includes admission, administered, historical, planned medications)</p>
</td>
<td width="36%">
<p>To find treatments that were prescribed; prophylaxis; knowing if the patient has already been treated, lower on the list for public health (priority)</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Death Date</p>
</td>
<td width="36%">
<p>The patient's date of death</p>
</td>
<td width="36%">
<p>Patient follow-up and epidemiological purposes</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Patient Class (Encounter Type)</p>
</td>
<td width="36%">
<p>Whether patient is outpatient, inpatient, emergency, urgent care</p>
</td>
<td width="36%">
<p>Indication of possible severity of condition</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Travel History</p>
</td>
<td width="36%">
<p>The patient's travel history, includes purpose of travel, dates of travel, locations of travel, details of transportation (ship, plane, etc.)</p>
</td>
<td width="36%">
<p>Risk, potential severity of action, timeliness of action (e.g., is travel history relevant); Prioritization and triaging</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Vital Signs</p>
</td>
<td width="36%">
<p>The patient's relevant vital signs.</p>
</td>
<td width="36%">
<p>Indication of possible severity of condition</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Therapeutic Medication Response</p>
</td>
<td width="36%">
<p>The therapeutic response to a medication (as opposed to an undesired reaction). e.g., Positive response to naloxone administration after a suspected naloxone administration.</p>
</td>
<td width="36%">
<p>Confirmatory response can be indicative of suspected condition.</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Homeless</p>
</td>
<td width="36%">
<p>The patient's homeless status.</p>
</td>
<td width="36%">
<p>Risk indicator; important health equity indicator</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Immunization Status</p>
</td>
<td width="36%">
<p>The patient&rsquo;s current immunization status and pertinent immunization history.</p>
</td>
<td width="36%">
<p>Risk, potential severity of action, timeliness of action</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Vaccine Credential Patient Assertion</p>
</td>
<td width="36%">
<p>Whether or not the patient has asserted that they have verifiable vaccine credentials.</p>
</td>
<td width="36%">
<p>Indicator of vaccine history</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Gender Identity</p>
</td>
<td width="36%">
<p>The patient's gender identity. (Different from patient gender (administrativeGender) and birth sex).</p>
</td>
<td width="36%">
<p>Demographic reporting</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Procedure</p>
</td>
<td width="36%">
<p>Interventional, surgical, diagnostic, or therapeutic procedures or treatments pertinent to the encounter.</p>
</td>
<td width="36%">
<p>Appropriate treatment, follow-up, appropriate for scoring/risk ascertainment</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Planned Procedure</p>
</td>
<td width="36%">
<p>Interventional, surgical, diagnostic, or therapeutic procedures or treatments planned as a result of the encounter.</p>
</td>
<td width="36%">
<p>Appropriate treatment, follow-up, appropriate for scoring/risk ascertainment</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Disability Status</p>
</td>
<td width="36%">
<p>A set of questions used to measure disability.</p>
</td>
<td width="36%">
<p>Risk indicator; important health equity indicator</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Emergency Outbreak Information</p>
</td>
<td width="36%">
<p>Information that is required during a public health emergency/outbreak.</p>
</td>
<td width="36%">
<p>Risk indicator; ability to share critical information with public health associated with an outbreak</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Exposure/Contact Information</p>
</td>
<td width="36%">
<p>Potential patient exposure and contact information.</p>
</td>
<td width="36%">
<p>Risk indicator</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Tribal Affiliation</p>
</td>
<td width="36%">
<p>The name of a patient&rsquo;s affiliated tribe and whether or not the patient is an enrolled member.</p>
</td>
<td width="36%">
<p>Demographic reporting; important health equity indicator</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Country of Nationality</p>
</td>
<td width="36%">
<p>Country of nationality (when patient has recent travel history).</p>
</td>
<td width="36%">
<p>Demographic reporting</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Country of Residence</p>
</td>
<td width="36%">
<p>Country of residence (when patient has recent travel history).</p>
</td>
<td width="36%">
<p>Demographic reporting</p>
</td>
</tr>
<tr>
<td width="27%">
<p>Reportability Response information</p>
</td>
<td width="36%">
<p>This information does not come from the healthcare organization/EHR.</p>
</td>
<td width="36%">
<p>For PHA internal use only: Information from a Reportability Response that was generated in response to the eICR.</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/electronic_initial_case_report_eicr_transaction_and_profiles.md

### Electronic Initial Case Report (eICR) Transaction and Profiles

The eICR transaction involves the transmission of data identified by a Council of State and Territorial Epidemiologists Task Force as being important to a multi-condition, multi-jurisdiction case report.

eICR documents will usually be automatically initiated by matching EHR data against trigger codes. Note that matching with trigger codes is only an indication of a potentially reportable event. Additional rules processing is required to determine reportability based on the policies and regulatory requirements of the jurisdiction of residence and jurisdiction of care of the initiating event. Whether a specific initiated event is reportable is communicated through the [Reportability Response](reportability_response_narrative_guidance.html).

The following figure illustrates automatic initiation by trigger matching:

*Figure 1: eICR Triggering and Transmission Timing*
<table><tr><td><img src="eICR Triggering and Transmission Guidance.JPG" style="width:100%;" caption="Figure 1: eICR Triggering and Transmission Timing" /></td></tr></table>
There are some circumstances, however, where they may be manually initiated by providers of care because they suspect there may be a reportable condition. They also may be alternately initiated by automated, forced reporting by the EHR to meet short term reporting needs. The following matrix illustrates these different types of initiation:

<table><tr><td><img src="InitiationTypeTable.jpg" style="width:100%;"/></td></tr></table>
[^1] RCKMS

The eICR also includes pregnancy information, occupational data, therapeutic response to medication, homeless information, a vital signs snapshot, emergency outbreak information, exposure and contact information, disability status, and semi-structured travel history. The eICR is conveyed through an unsolicited push transaction from healthcare to public health (see Transport Options for further details) using a basic RESTful submit and/or FHIR Messaging. The FHIR Messaging bundle can also be transmitted over legacy transport and networks. There may be several different intermediaries involved in the transmission including Health Information Exchanges, Health Information Networks, and other trusted third parties.

A Reportability Response will always be returned to the sending healthcare organization for every eICR received. A Reportability Response may also be sent to PHAs with the FHIR eICR transaction to provide the PHAs with information about what has been determined to be reportable, what PHAs have been sent eICR information, and what else has been communicated to healthcare.

A number of profiles and extensions have been defined for the eICR transactions - see [Artifact Index](artifacts.html) for a listing of these profiles. The eICR Composition profile (which is contained in a eICR Document Bundle) is the starting point for the transaction and all the other profiles are referenced from that profile (see diagram below for the main profile relationships).

<table><tr><td><img src="FHIR eICR Profile Hierarchy.png" style="width:100%;" /></td></tr></table>

[^1]: RCKMS: [Reportable Conditions Knowledge Management System (RCKMS)](https://www.rckms.org/)


---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/electronic_reporting_and_surveillance_distribution_ersd_transaction_and_profiles.md

### electronic Reporting and Surveillance Distribution (eRSD) Transaction and Profiles

The eRSD transaction includes a constrained FHIR PlanDefinition resource profile and a family of actions. It supports the distribution of reporting guidance and parameters, trigger code value sets, and more complex reporting rules and clinician / reporter support resources. This work seeks to align with developing public health guidelines that cover the same conditions. The PlanDefinition includes guidance for the overall orchestration of electronic case reporting. Each member of the family of actions defined in the [US Public Health PlanDefinition Action Codes](CodeSystem-us-ph-plandefinition-actions.html) code system aligns with what may be different healthcare information systems or modules involved in reporting. The narrative elements of this profile will be used to help structure and guide implementation until EHRs have the ability to automatically consume them.

The distribution of case reporting specifications involves two systems, the Implementing System (typically an Electronic Health Record (EHR)) and the Specification Repository, a repository that manages reporting specifications and the versions of those specifications over time:

<img style="width:100%" src="ersd-transaction-system-overview.png"/>

Conceptually, there are three transactions involved in the distribution of eRSD specifications:

1. Notification - The Specification Repository notifies Implementation System(s) that there is a new version of a reporting specification available
2. Request - The Implementation System requests a specific version of a reporting specification
3. Response - The Specification Repository responds to a request, providing the package containing a specific version of a reporting specification.

Notification may be accomplished in multiple ways such as simple email or text notifications.

Similarly, the Request and Response transactions may be implemented in multiple ways, including HTTP file download, as well as API access to a FHIR server acting as a repository.

At this time, this implementation guide is only prescriptive about the payload of the Response transaction, as defined by the following sections. We seek implementer feedback on the usefulness of more formal specification of these transactions.

#### eRSD Specifications

The eRSD specification is structured into two groups to facilitate two different levels of implementation of suspected reportability criteria:

1. Triggering - Suspected reportability criteria only involve data elements and associated triggering value sets
2. Supplemental - Suspected reportability criteria are extended to include additional rules processing

The contents of each of these specifications at a high level are:

* Specification Library [us-ph-specification-library](StructureDefinition-us-ph-specification-library.html)
    * PlanDefinition - Defines the reporting workflow [us-ph-plandefinition](StructureDefinition-us-ph-plandefinition.html)
    * Triggering Value Set Library - List of triggering value sets [us-ph-triggering-valueset-library](StructureDefinition-us-ph-triggering-valueset-library.html)
        * Triggering Value Sets [us-ph-triggering-valueset](StructureDefinition-us-ph-triggering-valueset.html)

* Supplemental Library [ersd-supplemental-library](StructureDefinition-ersd-supplemental-library.html)
    * Computable Library - Library containing the rules logic [us-ph-computable-library](StructureDefinition-us-ph-computable-library.html)
    * Supplemental Value Set Library - List of additional value sets required for evaluation of rules logic [us-ph-supplemental-valueset-library](StructureDefinition-us-ph-supplemental-valueset-library.html)
        * Supplemental Value Sets - Value sets referenced by rules logic [us-ph-supplemental-valueset](StructureDefinition-us-ph-supplemental-valueset.html)
    * Jurisidictions - List of jurisdications and their configurations [us-ph-codesystem](StructureDefinition-us-ph-codesystem.html)

Subsequent sections describe each of these specification components in more detail.

#### eRSD Representation Approach

The following diagram illustrates the general process for electronic Case Reporting as triggered from a patient encounter, highlighting each of the components involved in describing the process:

<img style="width:100%" src="eicr-triggering-and-transmission-guidance-components.png"/>

The components involved in representing the reporting process are:

* **Events** Clinical workflow events such as encounter start and end
* **Triggering Criteria** Terminology-based criteria for detecting potentially reportable events
* **Process** Actions, delays, and loops to orchestrate the process
* **Parameters** Parameters for varying timings of the process steps
* **Suspected Reportability Criteria** Additional criteria that are evaluated to determine suspected reportability

These components are represented using different elements of the PlanDefinition resource, as generally outlined in the following:

<img style="width:100%" src="ersd-plandefinition-structure.png"/>

Events are represented with the `trigger` element; Triggering Criteria are represented using the `input` data criteria; Parameters are represented using `offset` in `relatedAction` elements; Process steps are represented using the `action` element and the relationships between them are represented with the `relatedAction` element; and finally, Suspected Reportability Criteria are represented with the `condition` element.

Each of these are discussed in more detail in the following sections.

##### Events

Events are represented with the `trigger` element, using the `named-event` trigger type and bound to the [US Public Health TriggerDefinition Named Event](ValueSet-us-ph-triggerdefinition-namedevent.html) value set. In addition, since the `name` element of the trigger definition is a `uri`, the eRSD profile uses the [US Public Health Named Event Type Extension](StructureDefinition-us-ph-named-eventtype-extension.html) to provide complete binding information for the value set, as illustrated in the eRSDPlanDefinition example:

<pre><code>&lt;trigger id=&quot;encounter-start&quot;&gt;
  &lt;extension url=&quot;http://hl7.org/fhir/us/ecr/StructureDefinition/us-ph-named-eventtype-extension&quot;&gt;
    &lt;valueCodeableConcept&gt;
      &lt;coding&gt;
        &lt;system value=&quot;http://hl7.org/fhir/us/ecr/CodeSystem/us-ph-triggerdefinition-namedevents&quot;/&gt;
        &lt;code value=&quot;encounter-start&quot;/&gt;
        &lt;display value=&quot;Indicates the start of an encounter&quot;/&gt;
      &lt;/coding&gt;
    &lt;/valueCodeableConcept&gt;
  &lt;/extension&gt;
  &lt;type value=&quot;named-event&quot;/&gt;
  &lt;name value=&quot;encounter-start&quot;/&gt;
&lt;/trigger&gt;
</code></pre>

##### Triggering Criteria

Triggering criteria are specified by a combination of the `input` data elements, and the Reportable Condition Triggering Codes (RCTC) Value Set Library. Note carefully that the RCTC Value Sets included in this IG are examples to illustrate the structure and typical content of the Value Sets.

The triggering value sets will include any number of focus useContext slices to indicate which conditions the triggering codes are associated with. Each value set corresponds to a different type of information that may contain events that are triggers for potentially reportable events. The categories of information are mapped to FHIR resources using the `input` element. For example, the reportable conditions value set is mapped to the `Condition` resource:

<pre><code>&lt;input id=&quot;conditions&quot;&gt;
  &lt;type value=&quot;Condition&quot;/&gt;
  &lt;codeFilter&gt;
    &lt;path value=&quot;code&quot;/&gt;
    &lt;valueSet value=&quot;http://hl7.org/fhir/us/ecr/ValueSet/valueset-dxtc-example&quot;/&gt;
  &lt;/codeFilter&gt;
&lt;/input&gt;</code></pre>

> Note to implementers: The logic used throughout the reporting workflow definition assumes the data provided as input is valid. For example, an Encounter with a status of in-progress is assumed to have a period element with a start date specified. Implementations may account for differences in the way the clinical system represents encounter information by adjusting the data using context in the reporting application to meet these assumptions.

##### Process

Process is represented using the `action` elements of the PlanDefinition. A PlanDefinition can have any number of `action` elements, and each action may have any number of child `action` elements, allowing a hierarchy of actions to be constructed. In addition, the `relatedAction` element of each action allows dependencies between actions to be expressed. For example, action A starts 5 minutes before action B.

To support a broad variety of use cases, the PlanDefinition resource provides a flexible mechanism for representing processes. To facilitate implementation, the US Public Health PlanDefinition profile introduces constraints that limit the set of elements that can be used to:

1. The PlanDefinition is of type `workflow-definition`, to indicate process semantics apply
1. The only "trigger" element is specified on the "start" action as the "named-event" "encounter-start".
1. Relationships between actions are always expressed using a relatedAction element in the forward direction (so the relationship is "before-start").
1. All timings are expressed using the "offsetDuration" element of the relatedAction, simplifying timing representation throughout.
1. All repetition is expressed through recursive related actions, rather than trying to express the periodicity using a timing structure.

The eRSD PlanDefinition uses these structures to introduce a "loop" for the creation and submission of reports for a suspected reportable event:

* start-workflow
    - trigger: encounter-start
    - action: check-suspected-disorder in "A" hours

* check-suspected-disorder
    - if is-encounter-suspected-disorder, create-eicr
    - if continue-check-reportable, check-reportable in "B" hours

* check-reportable
    - if is-encounter-reportable, create-eicr
    - if check-update-eicr, create-eicr
    - if is-encounter-in-progress, check-reportable in "B" hours

* create-eicr
    - action: validate-eicr

* validate-eicr
    - route-and-send-eicr

* encounter-modified
    - trigger: encounter-modified
    - create-eicr

The `start-workflow` action is initiated by an `encounter-start` event, and specifies that `check-reportable` should be called in "A" hours.

The `check-suspected-disorder` action checks the encounter against a suspected disorders value set, and if a match is found, calls the `create-eicr` action immediately. If the encounter is in progress and still within the normal reporting duration ("E"), or less than "D" hours have elapsed since the encounter end, `check-reportable` is called.

The `check-reportable` action checks for suspected reportability and whether or not the encounter is within the normal reporting duration ("E"), and if true, calls the `create-eicr` action. If an eICR has not been sent for over "C" hours, then `create-eicr` is called. If the encounter is still in progress, `check-reportable` is called again with a delay of "B" hours and this continues until more than "D" hours have elapsed since the encounter end.

The `create-eicr` action involves the marshaling of FHIR resources needed to create the eICR profile included in this standard. It calls the `validate-eicr` action.

The `validate-eicr` action involves validating the created eICR conforms with all appropriate profiles and validation rules. It calls the `route-and-send-eicr` action.

The `route-and-send-eicr` action involves the transmission of the eICR to either a third party platform, a Public Health Agency (PHA), or a Health information Exchange or Health Data Network on the way to a PHA.

The `encounter-modified` action is initiated by an 'encounter-modified' event, and specifies that if the encounter has extended beyond the normal reporting duration ("E") `create-eicr` should be called.

> Note to implementers: The workflow described here provides a minimally complete representation of the required reporting events. However, implementations may wish to extend this functionality to support implementation-level tracking details such as workflow status. For example, the addition of an 'is-encounter-completed' action that can be used to explicitly track when an encounter completes, rather than the implicit completion represented here.

##### Parameters
Because of variability in accumulation of data at the start of a patient encounter, the EHR implementer should implement a time-based delay in generating and sending the first encounter eICR to allow time for required data to be captured within the patient chart. This will ensure the eICR is better populated before sending and will reduce the number of case reports that are sent for a single patient encounter.

Full triggering timing can be described using the suggested parameters below from the eRSD:

**Parameter A** – The time from the start of the patient encounter to when the first eICR is constructed and sent. This eICR should include multiple triggers if they are identified.

- Example - <u>1 hour</u> after the encounter begins, EHR data matches a code in the eRSD diagnosis data trigger code set and other EHR data matches a code in the eRSD lab result trigger code set. Both of these trigger codes should be recorded in the appropriate eICR trigger code template and the eICR should be transmitted out.

**Parameter B** - The time period from a previous trigger code check to subsequent checking for new trigger code matches in a longer encounter. New trigger code matches do not include matches on an eRSD trigger code that have already been used to generate an eICR for that encounter.

- Example - <u>12 hours</u> after there was a trigger code match, the EHR data is checked against the eRSD trigger code sets again. If a new match is found (not a match against the same eRSD trigger code as had been already matched in that encounter) then a new eICR is generated that includes all of the new trigger codes that have been matched.

**Parameter C** - The time period from the send of previous eICRs to the send of an updated eICR during a longer encounter.

- Example - <u>72 hours</u> after a previous eICR was sent, there have been no new trigger code matches, but a new eICR is created and transmitted because there had been a match in the encounter previously and there is a need for public health to receive updated data about the patient.

**Parameter D** – The time period after the encounter ends through which trigger code checks and eICR updates should still occur.

- Example - For <u>72 hours</u> after the encounter ends, trigger code checks and / or updated eICR transmissions should still occur.

**Parameter E** - The normal reporting duration for the encounter. While an encounter is in progress and within the the normal reporting duration reportability will continue to be checked. Once the encounter has extended beyond the normal reporting duration, it will only be reported on in response to an 'encounter-modified' trigger.

- Example - For <u>2 weeks</u> after the encounter begins and while it is still in progress, continue to check for suspected reportability. Otherwise, once the encounter has extended beyond <u>2 weeks</u>, check for reportability and report only if the encounter has been modified.

> Note to implementers: The offset durations specified in related actions here are _relative_ durations, in that they contain a comparator to indicate that the action should be completed _at most X_. This allows implementations to support scheduling these actions during non-peak times to minimize load on the clinical system.

##### Suspected Reportability Criteria

To facilitate implementation, there are two levels of suspected reportability determination. The first level involves only checking for the existing of events with codes that match a code in the appropriate triggering value set. The second level involves additional filtering criteria that can include other elements of the data (such as status and lab values), as well as jurisdictional configuration.

The first level is generally termed `triggering` and is supported by the `triggering` profiles, while the second level is generally termed `supplemental` and is supported by the `supplemental` profiles.

###### Triggering eRSD Specification

The triggering level is represented using the `condition` element of the `check-reportable` action:

<pre><code>&lt;condition&gt;
  &lt;kind value=&quot;applicability&quot;/&gt;
  &lt;expression&gt;
    &lt;extension snipped/&gt;
    &lt;language value=&quot;text/fhirpath&quot;/&gt;
    &lt;expression value=&quot;%conditions.exists() or %encounters.exists() or %immunizations.exists() or %procedures.exists() or %procedureOrders.exists() or %labOrders.exists() or %labTests.exists() or %labResults.exists() or %medicationAdministrations.exists() or %medicationOrders.exists() or %medicationDispenses.exists()&quot;/&gt;&lt;/expression&gt;
&lt;/condition&gt;</code></pre>

This level uses a [FHIRPath](http://hl7.org/fhirpath) to test for existence of data in any of the `input` categories. Each `input` element is accessed by an _environment variable_ using the `%` syntax in FHIRPath.

The eRSD specification is delivered as an _asset collection library_ (a Library resource with a type of `asset-collection`) conforming to the [US Public Health Specification Library](StructureDefinition-us-ph-specification-library.html) profile.

The eRSD Specification library is composed of the eRSD Plan Definition and the RCTC Library, a Value Set library that conforms to the [US Public Health Triggering Value Set Library](StructureDefinition-us-ph-triggering-valueset-library.html) profile:

<pre><code>&lt;relatedArtifact&gt;
  &lt;type value=&quot;composed-of&quot;/&gt;
  &lt;resource value=&quot;http://hl7.org/fhir/us/ecr/PlanDefinition/plandefinition-us-public-health-example&quot;/&gt;
&lt;/relatedArtifact&gt;
&lt;relatedArtifact&gt;
  &lt;type value=&quot;composed-of&quot;/&gt;
  &lt;resource value=&quot;http://hl7.org/fhir/us/ecr/Library/library-rctc-example&quot;/&gt;
&lt;/relatedArtifact&gt;</code></pre>

* [eRSD Specification Library Example](Library-library-ersd-specification-library-example.html)
* [eRSD PlanDefinition Instance Example](PlanDefinition-plandefinition-ersd-instance-example.html)
* [eRSD PlanDefinition Instance Simple Example](PlanDefinition-plandefinition-ersd-instance-simple-example.html)
* [RCTC ValueSet Library Example](Library-library-rctc-example.html)

Triggering value sets and metadata can be used for EHR implementations whether they are FHIR-based or not.

The [ComputableValueSet](StructureDefinition-us-ph-computable-valueset.html) profile describes the requirements for computable representation of value set membership criteria, ensuring that value sets using this profile selectively support only one technique for defining the content of expansions.

The [ExecutableValueSet](StructureDefinition-us-ph-executable-valueset.html) profile provides support for including a persisted point-in-time expansion that SHALL conform to the chosen compositional style for the value set. The included point-in-time expansion can then be used by FHIR implementations that do not have a FHIR terminology service capable of evaluating the value set in real-time with an $expand operation. It also provides all the concepts needed in the expansion so that a complete code system resource is not required.

The ValueSets in the RCTC Library are distributed conforming to both these profiles, enabling systems to make use of expansions, or recalculate expansions based on the computable value set definition if necessary.

###### Supplemental eRSD Specification

The supplemental level of integration enables sites to participate in the suspected reportability determination by considering additional elements of the event data such as status, lab values, and jurisdiction configuration.

The suspected reportability criteria are also represented with the `condition` element, but using the [US Public Health Alternative Expression](StructureDefinition-us-ph-alternative-expression-extension.html) to provide the CQL expression for suspected reportability:

<pre><code>&lt;extension url=&quot;http://hl7.org/fhir/us/ecr/StructureDefinition/us-ph-alternative-expression-extension&quot;&gt;
  &lt;valueExpression&gt;
    &lt;language value=&quot;text/cql-identifier&quot;/&gt;
    &lt;expression value=&quot;Is Reportable&quot;/&gt;
    &lt;reference value=&quot;http://hl7.org/fhir/us/ecr/Library/RuleFilters|2.1.0&quot;/&gt;
  &lt;/valueExpression&gt;
&lt;/extension&gt;</code></pre>

This extension indicates that the `Is Reportable` expression of the [RuleFilters](Library-RuleFilters.html) library should be used to evaluate whether the event is suspected reportable.

For a complete description of the logic used to determine suspected reportability, refer to the [Rule Filter Generation](rule_filter_generation.html) topic.

For a detailed discussion of how jurisdiction is determined, see the [Jurisdictions Code System Query](ersd_jurisdictions_codesystem_query.html) topic.

For a detailed discussion of how this code system is structured, see the [Jurisdictions Code System Description](ersd_jurisdictions_codesystem_description.html) topic.

The eRSD Supplemental Library is composed of the RuleFilters library and the Supplemental Value Set library, which contains any additional value sets and code systems (including the Jurisdictions code system) beyond the RCTC value sets that are required by the RuleFilters logic:

<pre><code>&lt;relatedArtifact&gt;
  &lt;type value=&quot;composed-of&quot;/&gt;
  &lt;resource value=&quot;http://hl7.org/fhir/us/ecr/Library/RuleFilters&quot;/&gt;
&lt;/relatedArtifact&gt;
&lt;relatedArtifact&gt;
  &lt;type value=&quot;composed-of&quot;/&gt;
  &lt;resource value=&quot;http://hl7.org/fhir/us/ecr/Library/library-us-ph-supplemental-valueset-library-example&quot;/&gt;
&lt;/relatedArtifact&gt;
&lt;relatedArtifact&gt;
  &lt;type value=&quot;composed-of&quot;/&gt;
  &lt;resource value=&quot;http://hl7.org/fhir/us/ecr/CodeSystem/ersd-jurisdictions-example&quot;/&gt;
&lt;/relatedArtifact&gt;</code></pre>

* [eRSD Supplemental Library Example](Library-library-ersd-supplemental-library-example.html)
* [RuleFilters Library](Library-RuleFilters.html)
* [Supplemental Value Set Library Example](Library-library-us-ph-supplemental-valueset-library-example.html)
* [Jurisdictions CodeSystem Example](CodeSystem-ersd-jurisdictions-example.html)

#### Packaging and Distribution

As noted in the overview section above, this implementation is not prescriptive about the absolute mechanisms for distribution, only about the contents of the specification in the form of Library, PlanDefinition, CodeSystem, and ValueSet resources conforming to the required profiles. The complete specification may be distributed via files (e.g. a zip of the specification as a FHIR bundle), via API (e.g. as a Bundle resource directly, or as the result of a packaging operation), or via notification.

When packaging as a Bundle, the expectation is that the Bundle would include the Library as the first entry, followed by all the component resources as entries, and finally all the referenced ValueSet resources. If the specification is too large for one Bundle, the specification may be split into multiple Bundles. The following examples illustrate complete bundles of both the Specification and Supplemental distributions:

* [Specification (i.e. Triggering) Bundle](Bundle-bundle-ersd-specification-example.html)
* [Supplemental (i.e. Rules Logic) Bundle](Bundle-bundle-ersd-supplemental-example.html)

#### Profiles
<ul>
  <li><a href="StructureDefinition-ersd-plandefinition.html">eRSD PlanDefinition</a></li>
  <li><a href="StructureDefinition-us-ph-specification-library.html">US Public Health Specification Library</a></li>
  <li><a href="StructureDefinition-us-ph-supplemental-library.html">US Public Health Supplemental Library</a></li>
  <li><a href="StructureDefinition-us-ph-supplemental-valueset.html">US Public Health Supplemental ValueSet</a></li>  
  <li><a href="StructureDefinition-us-ph-supplemental-valueset-library.html">US Public Health Supplemental ValueSet Library</a></li>  
  <li><a href="StructureDefinition-us-ph-triggering-valueset.html">US Public Health Triggering ValueSet</a></li>
  <li><a href="StructureDefinition-us-ph-triggering-valueset-library.html">US Public Health Triggering ValueSet Library</a></li>
  <li><a href="StructureDefinition-us-ph-valueset-library.html">US Public Health ValueSet Library</a></li>
  <li><a href="StructureDefinition-us-ph-valueset.html">US Public Health ValueSet</a></li>
</ul>

#### Extensions
<ul>
  <li><a href="StructureDefinition-us-ph-usagewarning-extension.html">US Public Health Usage Warning Extension</a></li>
</ul>


---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/ersd_jurisdictions_codesystem_description.md

This document describes the eRSD Jurisdictions CodeSystem.

### Overview

Jurisdiction information is provided in the form of a FHIR CodeSystem resource that is available for download via web service API.

### CodeSystem

The CodeSystem is structured as follows:

```json
"concept": [
    {
      "code": "AK",
      "display": "ALASKA",
      "definition": "Alaska Department of Health and Social Services",
      "property": [
        {
          "code": "type",
          "valueCode": "STATE"
        },
        {
          "code": "state",
          "valueCode": "AK"
        }
      ]
    },
    {
      "code": "CA",
      "display": "CALIFORNIA",
      "definition": "California Department of Public Health",
      "property": [
        {
          "code": "type",
          "valueCode": "STATE"
        },
        {
          "code": "state",
          "valueCode": "CA"
        },
        {
          "code": "postalcode",
          "valueCode": "90041"
        },
        {
          "code": "postalcode",
          "valueCode": "90042"
        }
      ]
    },
    {
      "code": "DED",
      "display": "GUAM",
      "definition": "Dededo",
      "property": [
        {
          "code": "type",
          "valueCode": "COUNTY"
        },
        {
          "code": "state",
          "valueCode": "GU"
        },
        {
          "code": "postalcode",
          "valueCode": "96912"
        }
      ]
    },
    {
      "code": "LAC",
      "display": "CALIFORNIA",
      "definition": "Los Angeles County Department of Public Health",
      "property": [
        {
          "code": "type",
          "valueCode": "COUNTY"
        },
        {
          "code": "state",
          "valueCode": "CA"
        },
        {
          "code": "postalcode",
          "valueCode": "90001"
        },
        {
          "code": "postalcode",
          "valueCode": "90002"
        }
      ]
    }
]
```

The concept code is formatted in uppercase to improve query results.  It represents the identifying code for each jurisdiction.

The concept definition represents the name of the jurisdiction, for example the name of a Public Health Agency, state or county.

The concept property valueCode with `code: "type"` indicates the type of the jurisdiction.  Available types are drawn from the [eRSD Jurisdiction Types](CodeSystem-ersd-jurisdiction-types.html) CodeSystem.

The concept property valueCode with `code: "state"` contains the state code from the US Core ValueSet for state codes ([USPS Two Letter Alphabetic Codes](http://hl7.org/fhir/us/core/ValueSet-us-core-usps-state.html)).

The concept property valueCode with `code: "postalcode"` represents postal codes that report to the specified jurisdiction. If no postal code has been specified, this property will not be included rather than containing a valueCode of `(null)`.

This CodeSystem supports identifying known jurisdictions so they can be matched to Patient and Encounter location addresses as part of the process of determining the jurisdiction reporting requirements for the jurisdiction of care and the jurisdiction or residence. This matching is done by comparing postal codes from the Patient Encounter location addresses with state and postal codes designated to specific jurisdictions.  The logic for determining jurisdiction is covered in detail in the next section.


---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/ersd_jurisdictions_codesystem_query.md

This document provides instructions for how to use the eRSD Jurisdictions CodeSystem with CQL queries to identify relevant jurisdictions for a Patient and Encounter.

### Overview

  The eRSD Jurisdictions CodeSystem can be used for CQL querying to determine which jurisdiction should receive eCR reports.  The CQL query uses the Patient address and the Encounter location address to determine relevant jurisdictions.  The relevant jurisdictions are determined by matching address postal codes with jurisdiction postal codes or by matching State codes if no postal code is specified for a jurisdiction.

### Dependencies

The following tools are needed to perform this operation:
* Atom (download available at [https://atom.io/](https://atom.io/))
* [RuleFilter CQL](Library-RuleFilters.html)
* CQL plugin for Atom (instructions in CQL Query section below)

### CodeSystem

The CodeSystem is in JSON format and follows FHIR specifications.  An example of how jurisdictions are represented in this file is shown below:

```json
{
  "code": "AK",
  "display": "ALASKA",
  "definition": "Alaska Department of Health and Social Services",
  "property": [
    {
      "code": "type",
      "valueCode": "STATE"
    },
    {
      "code": "state",
      "valueCode": "AK"
    }
  ]
},
{
  "code": "CA",
  "display": "CALIFORNIA",
  "definition": "California Department of Public Health",
  "property": [
    {
      "code": "type",
      "valueCode": "STATE"
    },
    {
      "code": "state",
      "valueCode": "CA"
    },
    {
      "code": "postalcode",
      "valueCode": "90041"
    },
    {
      "code": "postalcode",
      "valueCode": "90042"
    },
    {
      "code": "postalcode",
      "valueCode": "91912"
    }
  ]
},
{
  "code": "LAC",
  "display": "CALIFORNIA",
  "definition": "Los Angeles County Department of Public Health",
  "property": [
    {
      "code": "type",
      "valueCode": "COUNTY"
    },
    {
      "code": "state",
      "valueCode": "CA"
    },
    {
      "code": "postalcode",
      "valueCode": "90001"
    },
    {
      "code": "postalcode",
      "valueCode": "90002"
    }
  ]
},
{
  "code": "SDC",
  "display": "CALIFORNIA",
  "definition": "San Diego County Public Health Services",
  "property": [
    {
      "code": "type",
      "valueCode": "COUNTY"
    },
    {
      "code": "state",
      "valueCode": "CA"
    },
    {
      "code": "postalcode",
      "valueCode": "91901"
    },
    {
      "code": "postalcode",
      "valueCode": "91912"
    }
  ]
}
```
Each jurisdiction has a set of properties connected with it that specify what type of jurisdiction it is, which State (State, District, or Territory) the jurisdiction belongs to, and which postal codes are specified for reporting to it.  

### CQL Query

[RuleFilter Library](Library-RuleFilters.html) This file contains CQL code that uses the test cases in the `/input/tests/RuleFilters-1.0.0` folder.  The `CodeSystem-ersd-jurisdictions.json` file will need to be copied and pasted to the `/input/tests/RuleFilters-1.0.0/Reportable/CodeSystem` folder in order for the test cases to work.

The CQL code is setup to match Chlamydia test results with relevant jurisdictions.  CQL must be run in Atom using the CQL plugin.  To install the plugin, open Atom and click "File" then "Settings".  A Settings tab will open up.  Navigate to "Install" and search for "cql".  Find the package named "language-cql" authored by cqframework and click "Install".

In Atom, open the `RuleFilter Library cql`.  The code related to jursdiction querying is as follows:

```cql
codesystem "JurisdictionsList": 'http://hl7.org/fhir/us/ecr/CodeSystem/ersd-jurisdictions'

parameter "Triggering Encounter" Encounter

context Patient

define "Encounter Location References":
  "Triggering Encounter" TriggeringEncounter
    return TriggeringEncounter.location.location

define "Locations Matching Encounter Location References":
  [Location] Location
    where exists (
        "Encounter Location References" LocationReference
          where Location.id ~ LocationReference.reference
      )

define "Encounter Location Addresses And Patient Addresses":
  "Locations Matching Encounter Location References".address
    union Patient.address

define "Address Elements Relevant to Jurisdiction Qualification":
  "Encounter Location Addresses And Patient Addresses" Address
    return Tuple { state: Address.state,  postalCode: Address.postalCode }

define "Jurisdictions":
  flatten([CodeSystem] C
    return C.concept Cpt
      return Tuple { jcode: Cpt.code, definition: Cpt.definition, scode: Cpt.property P where P.code = 'state' return P.value as FHIR.code, value: Cpt.property P where P.code = 'postalcode' return P.value as FHIR.code })

define "Address Postal Code is in Jurisdiction Codes":
  "Jurisdictions" J
    with "Address Elements Relevant to Jurisdiction Qualification" AddressElement
      such that AddressElement.postalCode in J.value

define "Address State is in Jurisdiction Codes":
    "Jurisdictions" J
      with "Address Elements Relevant to Jurisdiction Qualification" AddressElement
        such that AddressElement.state in J.scode

define function AddressJurisdictions():
  if exists ("Address Postal Code is in Jurisdiction Codes")
    then "Address Postal Code is in Jurisdiction Codes"
      else "Address State is in Jurisdiction Codes"

define "Jurisdiction Codes Relevant to Addresses":
  AddressJurisdictions()
```

### Determining Relevant Jurisdictions

If a Patient lives in, or the Encounter takes place in a specified postal code, reporting goes to the jurisdiction specified.  In some cases, a State Public Health Agency also requires reporting.  In such a case, relevant postal codes are also specified for the State Public Health Agency.  If no postal codes are specified for the State Public Health Agency, that agency will only receive reports for addresses within the State that are not already specified for a local jurisdiction.  If a postal code is not specified anywhere, the reporting goes to the State Public Health Agency.

For example, if the Patient and Encounter addresses were in Chula Vista, CA  91912, the CQL result would be:

```
Jurisdiction Codes Relevant to Addresses = [Tuple {
    jurisdictionCode -> CA
    stateCode -> [CA]
    definition -> California Department of Public Health
}, Tuple {
    jurisdictionCode -> SDC
    stateCode -> [CA]
    definition -> San Diego County Public Health Services
}]
```

As shown, the jurisdictions relevant to the Patient and Encounter addresses are San Diego County Public Health Services and California Department of Health.  This is because the postal code 91912 has been specified for both of these jurisdictions, as shown in the [CodeSystem example](#codesystem) .

If the Patient and Encounter addresses were in Los Angeles, CA 90002, the CQL result would be:

```
Jurisdiction Codes Relevant to Addresses = [Tuple {
    jurisdictionCode -> LAC
    stateCode -> [CA]
    definition -> Los Angeles County Department of Public Health
}]
```
This only reports to Los Angeles County because, as shown in the [CodeSystem example](#codesystem), the postal code 90002 is specified for Los Angeles County and not specified for the State of California.

If the Patient and Encounter addresses were in Juneau, AK  99850, the CQL result would be:

```
Jurisdiction Codes Relevant to Addresses = [Tuple {
    jurisdictionCode -> AK
    stateCode -> [AK]
    definition -> Alaska Department of Health and Social Services
}]
```
As shown in the [CodeSystem example](#codesystem), Alaska has no specified postal codes.  Therefore, anywhere in Alaska will report only to the Alaska Department of Health and Social Services.

It may be the case that the Encounter takes place in a postal code different from that of the patient's address. If the patient's address was in Chula Vista, CA 91912, and the Encounter took place in Los Angeles, CA 90002, the CQL result would be:

```
Jurisdiction Codes Relevant to Addresses = [Tuple {
    jurisdictionCode -> CA
    stateCode -> [CA]
    definition -> California Department of Public Health
}, Tuple {
    jurisdictionCode -> SDC
    stateCode -> [CA]
    definition -> San Diego County Public Health Services
}, Tuple {
    jurisdictionCode -> LAC
    stateCode -> [CA]
    definition -> Los Angeles County Department of Public Health
}]
```

As shown, the jurisdictions relevant to the Patient and Encounter addresses are San Diego County Public Health Services, Los Angeles County Department of Public Health, and California Department of Health.  This is because the postal code 91912 has been specified for both of these the California Department of Public Health and San Diego County Public Health Services jurisdictions and the 90002 postal code has been specified for the Los Angeles County Department of Public Health jurisdiction, as shown in the [CodeSystem example](#codesystem) .


---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/ersd_plandefinition_datarequirement_fhir_query.md

This document describes support for both default and site or program-specific data requirement FHIR Query specification.

### Overview

  eRSD PlanDefinition actions can contain input data requirements. Implementing systems may find these useful for understanding what the data requirements are for a given program. These input data requirements can include a default FHIR Query pattern for retrieval of their respective data. When included, the query pattern will be attached to the input via the "us-ph-fhirquerypattern-extension" extension. This gives implementing systems a default query for use in retrieval of the data. It may be the case, however, that for various reasons - implementation constraints, optimization, etc. - an implementing system will want to override those default queries and define and leverage a custom query of their own design. This can be accomplished by defining the queries in a site and/or program-specific configuration file that the implementing system is aware of, checks and uses in leiu of the default query provided as part of the eRSD PlanDefinition.

### Default Query Example
Below is an example of a PlanDefinition action's input property with a default FHIR Query pattern specified in the "us-ph-fhirquerypattern-extension" extension:
```xml
<input id="conditions">
    <extension url="http://hl7.org/fhir/us/ecr/StructureDefinition/us-ph-fhirquerypattern-extension">
        <valueString value="Condition?code:in=http://hl7.org/fhir/us/ecr/ValueSet/valueset-dxtc-example&patient=Patient/{{context.patientId}}" />
    </extension>
    <type value="Condition"/>
    <codeFilter>
        <path value="code"/>
        <valueSet value="http://hl7.org/fhir/us/ecr/ValueSet/valueset-dxtc-example"/>
    </codeFilter>
</input>
```

### Overriding the Default Queries
It may be the case that the default queries are not ideal for an implementing system. For various reasons, like implementation constraints, optimization, etc., an implementing system might want to override the default queries provided in the eRSD PlanDefinition and define and leverage custom queries of their own design. This can be accomplished by defining the queries in a site and/or program-specific configuration that the implementing system is aware of, checks and uses in leiu of the default queries that are provided as part of the eRSD PlanDefinition.

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/implementation_guidance.md

<ul>
 <li><a href="design_considerations.html">Design Considerations</a></li>
 <li><a href="reportability_response_narrative_guidance.html">Reportability Response Narrative Guidance</a></li>
 <li><a href="ersd_jurisdictions_codesystem_query.html">eRSD Jurisdictions CodeSystem Query</a></li>
 <li><a href="ersd_jurisdictions_codesystem_description.html">eRSD Jurisdictions CodeSystem Description</a></li>
 <li><a href="rule_filter_generation.html">Rule Filter Generation</a></li>
</ul>


---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/index.md

### Overview

# Introduction and Purpose

With the adoption and maturing of Electronic Health Records (EHRs) there are opportunities to better support public health surveillance as well as to better support the delivery of relevant public health information to clinical care. Electronic Case Reporting (eCR) can provide more complete and timely case data, support disease / condition monitoring, and assist in outbreak management and control. It can also improve bidirectional communications through the delivery of public health information in the context of a patient's condition and local disease trends and by facilitating ad hoc communications. eCR will also reduce healthcare provider burden by automating the completion of legal reporting requirements.

With the advent of FHIR standards, there is a need for FHIR implementation guidance to specify appropriate resources and transactions needed for the eCR process. FHIR offers opportunities to further enable automated triggering and reporting of cases from EHRs, to ease implementation and integration, to support the acquisition of public health investigation supplemental data, and to connect public health information (e.g., guidelines) with clinical workflows. Over time, FHIR may also support the distribution of reporting rules to clinical care to better align data authorities and make broader clinical data available to public health decision support services inside the clinical care environment.

For more supporting information, use cases, and other background context and material, see Volume 1 of both the [HL7 CDA R2 Electronic Initial Case Report (eICR) Standard for Trial Use (STU) IG](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=436) (see the link under "STU Documents" for STU Release 3) and the [HL7 CDA R2 Reportability Response (RR) STU IG](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=470).

For Clinical Safety Information please refer to the [FHIR Implementer’s Safety Checklist](http://hl7.org/fhir/safety.html).

# Stakeholders
<table style="width:100.0%;border-collapse:collapse;border:none;">
    <thead>
        <tr>
            <th style="width: 186.2pt;border: 1pt solid rgb(191, 191, 191);background: rgb(242, 242, 242) none repeat scroll 0% 0%;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:3.0pt;margin-right:0cm;margin-bottom:3.0pt;margin-left:0cm;line-height:11.0pt;color:black;font-weight:bold;'>Stakeholders&nbsp;</p>
            </th>
            <th style="width: 286.15pt;border-color: rgb(191, 191, 191) rgb(191, 191, 191) rgb(191, 191, 191) currentcolor;border-style: solid solid solid none;border-width: 1pt 1pt 1pt medium;border-image: none 100% / 1 / 0 stretch;background: rgb(242, 242, 242) none repeat scroll 0% 0%;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:3.0pt;margin-right:0cm;margin-bottom:3.0pt;margin-left:0cm;line-height:11.0pt;color:black;font-weight:bold;'>Description&nbsp;</p>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="width: 186.2pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191);border-style: none solid solid;border-width: medium 1pt 1pt;border-image: none 100% / 1 / 0 stretch;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>Electronic Health Record (EHR) /&nbsp;</p>
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>Electronic Medical Record (EMR)&nbsp;</p>
            </td>
            <td style="width: 286.15pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191) currentcolor;border-style: none solid solid none;border-width: medium 1pt 1pt medium;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>The electronic health record (EHR) is a longitudinal electronic record of patient health information generated by one or more encounters in any care delivery setting. Included in this information are patient demographics, progress notes, problems, medications, vital signs, past medical history, immunizations, laboratory data and radiology reports.</p>
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>Source:&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2518657/"><span style="font-size:13px;">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2518657/</span></a>. For purposes of this IG, EHR can also be interpreted to refer to applications that some vendors may call an electronic medical record (EMR).</p>
            </td>
        </tr>
        <tr>
            <td style="width: 186.2pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191);border-style: none solid solid;border-width: medium 1pt 1pt;border-image: none 100% / 1 / 0 stretch;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>Healthcare Provider</p>
            </td>
            <td style="width: 286.15pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191) currentcolor;border-style: none solid solid none;border-width: medium 1pt 1pt medium;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>Any supplier of a healthcare service, i.e., a person or organization that furnishes, bills, or is paid for healthcare in the normal course of business. Includes physicians and healthcare provider staff, as well as ancillary healthcare personnel (e.g., laboratory personnel).</p>
            </td>
        </tr>
        <tr>
            <td style="width: 186.2pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191);border-style: none solid solid;border-width: medium 1pt 1pt;border-image: none 100% / 1 / 0 stretch;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>Health IT Vendor</p>
            </td>
            <td style="width: 286.15pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191) currentcolor;border-style: none solid solid none;border-width: medium 1pt 1pt medium;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>A vendor or supplier is a company/consortium that provides health information technology products and/or services, in this case, for supporting health or healthcare.</p>
            </td>
        </tr>
        <tr>
            <td style="width: 186.2pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191);border-style: none solid solid;border-width: medium 1pt 1pt;border-image: none 100% / 1 / 0 stretch;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>Intermediary&nbsp;</p>
            </td>
            <td style="width: 286.15pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191) currentcolor;border-style: none solid solid none;border-width: medium 1pt 1pt medium;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>An organization that is in the information flow between a healthcare organization and a PHA regarding case reporting. An intermediary may be acting on behalf of either the healthcare organization as a business associate or public health as an authorized agent. Examples include a Health Information Exchange (HIE) organization, a clinical trust and exchange network, or a shared infrastructure and routing platform.</p>
            </td>
        </tr>
        <tr>
            <td style="width: 186.2pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191);border-style: none solid solid;border-width: medium 1pt 1pt;border-image: none 100% / 1 / 0 stretch;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>Laboratory&nbsp;</p>
            </td>
            <td style="width: 286.15pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191) currentcolor;border-style: none solid solid none;border-width: medium 1pt 1pt medium;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>The laboratory is a producer of laboratory test results (filler or, at times, placer of a laboratory order).</p>
            </td>
        </tr>
        <tr>
            <td style="width: 186.2pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191);border-style: none solid solid;border-width: medium 1pt 1pt;border-image: none 100% / 1 / 0 stretch;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>Laboratory Information System (LIS)</p>
            </td>
            <td style="width: 286.15pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191) currentcolor;border-style: none solid solid none;border-width: medium 1pt 1pt medium;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>An application to streamline the management of laboratory processes including data collection, workflow management, and report generation. May provide an automatic interface to laboratory analytical instruments to transfer verified results to nurse stations, chart carts, and remote physician offices. Also referred to as a Laboratory Information Management System.</p>
            </td>
        </tr>
        <tr>
            <td style="width: 186.2pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191);border-style: none solid solid;border-width: medium 1pt 1pt;border-image: none 100% / 1 / 0 stretch;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>Public Health Agency (PHA)</p>
            </td>
            <td style="width: 286.15pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191) currentcolor;border-style: none solid solid none;border-width: medium 1pt 1pt medium;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>For the purposes of this IG, a PHA is a governmental entity at the federal, state, territorial, local, or tribal level that is legally entitled to establish public health case reporting requirements and receive case reports.&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td style="width: 186.2pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191);border-style: none solid solid;border-width: medium 1pt 1pt;border-image: none 100% / 1 / 0 stretch;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>Public Health Decision Support (PHDS)</p>
            </td>
            <td style="width: 286.15pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191) currentcolor;border-style: none solid solid none;border-width: medium 1pt 1pt medium;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>For the purposes on this IG, PHDS provides clinicians, staff, and public health practitioners with knowledge about reporting cases to public health and information about the condition that has been identified.&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td style="width: 186.2pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191);border-style: none solid solid;border-width: medium 1pt 1pt;border-image: none 100% / 1 / 0 stretch;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>Public Health System&nbsp;</p>
            </td>
            <td style="width: 286.15pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191) currentcolor;border-style: none solid solid none;border-width: medium 1pt 1pt medium;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>Jurisdictional information systems that may, among other things, receive public health case reports.</p>
            </td>
        </tr>
        <tr>
            <td style="width: 186.2pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191);border-style: none solid solid;border-width: medium 1pt 1pt;border-image: none 100% / 1 / 0 stretch;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>Standards Development Organization&nbsp;</p>
            </td>
            <td style="width: 286.15pt;border-color: currentcolor rgb(191, 191, 191) rgb(191, 191, 191) currentcolor;border-style: none solid solid none;border-width: medium 1pt 1pt medium;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:2.0pt;margin-right:0cm;margin-bottom:2.0pt;margin-left:0cm;line-height:11.0pt;'>An organization that identifies the need for, locates interested parties, and writes specifications that all parties in a particular field of human endeavor can use to their mutual benefit. For the purpose of this document, the field is health or health interoperability and recognition by the American National Standards Institute (ANSI) or the International Standards Organization (ISO) is accepted as evidence that a particular organization is a standards development organization.&nbsp;</p>
            </td>
        </tr>
    </tbody>
</table>

### Authors

<table>
<thead>
<tr>
<th style="width: 186.2pt;border: 1pt solid rgb(191, 191, 191);background: rgb(242, 242, 242) none repeat scroll 0% 0%;padding: 0cm 5.4pt;vertical-align: top;">Name</th>
<th style="width: 186.2pt;border: 1pt solid rgb(191, 191, 191);background: rgb(242, 242, 242) none repeat scroll 0% 0%;padding: 0cm 5.4pt;vertical-align: top;">Email/URL</th>
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

File: repos/HL7_SLASH_case-reporting/input/pagecontent/relationship_to_other_standards.md

In coordination with the publication of this FHIR standard, an updated version 3.1 of the [HL7 CDA R2 Electronic Initial Case Report (eICR) Standard for Trial Use (STU) IG](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=436) (see the link under "STU Documents" for STU 3.1) is also being published. The FHIR [eICR transaction](electronic_initial_case_report_eicr_transaction_and_profiles.html) in this implementation guide and the separately published CDA eICR implementation guide standard will continue to be maintained in tight coordination with each other. 
 
In order to get data as readily as possible from clinical care and minimize provider burden, the CDA eICR was built extensively on published [HL7 Consolidated CDA Templates for Clinical Notes (C-CDA R2.1)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=492) templates. The FHIR eICR transaction reuses many of the [HL7 FHIR US Core Implementation Guide V4.0.0: STU 4](http://hl7.org/fhir/us/core/STU4/) profiles, and has been mapped to both the [Common Clinical Data Set (CCDS)](https://www.healthit.gov/sites/default/files/ccds_reference_document_v1_1.pdf), and now, the [(U.S. Core Data for Interoperability) USCDI](https://www.healthit.gov/isa/us-core-data-interoperability-uscdi). There are some eICR data, critical to public health activities, that are in the eICR transaction but not in the USCDI at this time. As well,some USCDI data are not legally authorized for delivery to public health agencies in the context of case reporting, but every effort will be made in an ongoing way to minimize variations from the USCDI. The following table illustrates a high-level mapping from USCDI v1 to eICR:

<table><tr><td><img src="USCDI_Mapping.jpg" alt="USCDI-Mapping" /></td></tr></table>

Many of the profiles in this IG are US Public Health Library (USPHL) profiles. However, the USPHL currently does not exist - as of May 2022, HL7 has approved the project scope statement to begin the work. The USPHL will be created to establish a baseline of common artifacts that will be used by multiple public health implementation guides including the eCR FHIR IG, MedMorph Reference Architecture IG, and the other future IGs. The initial content for the US PH Library will be derived from the MedMorph Reference Architecture and eCR FHIR IGs. Currently, both the eCR FHIR IG and the MedMorph IGs have created artifacts that are aligned so that they can be moved to the US PH Library when it is created. All artifacts which are candidates for being promoted to the US PH Library will use the words “us” or “US” and “ph” or “PH” as part of the profile definition, name and title elements. Although US PH Library does not exist currently, it is being discussed in this paragraph to indicate the future direction to harmonize multiple implementation guides that will reduce implementer burden for supporting public health use cases.
 
Both the CDA and FHIR versions of the eICR are intended to be used as an all-jurisdiction, all-condition report to public health agencies from EHRs. The eICR was created from a Council of State and Territorial Epidemiologists (CSTE) Task Force recommendation that identified necessary data to support case reporting. There is also an existing [HL7 CDA R2 Reportability Response (RR) STU IG](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=470) that supports several functions for providing information back to clinical care in response to received eICRs. A [FHIR version of the CDA Reportability Response transaction](reportability_response_rr_transaction_and_profiles.html) is included in this eCR FHIR implementation guide. 
 
This aggregate FHIR electronic case reporting STU implementation guide (hereby known as FHIR eCR) also includes an [electronic Reporting and Surveillance Distribution (eRSD) transaction](electronic_reporting_and_surveillance_distribution_ersd_transaction_and_profiles.html) that includes the Reportable Condition Trigger Codes (RCTC) and other reporting guidance. Further guidance for triggering and reporting can be found at: [https://ecr.aimsplatform.org/ehr-implementers/triggering](https://ecr.aimsplatform.org/ehr-implementers/triggering). A distribution service for the eRSD transaction including the RCTC trigger codes can be found at [https://ecr.aimsplatform.org](https://ecr.aimsplatform.org).
 
There is a one-to-one relationship between the data elements in the FHIR and CDA IGs. There are mapping tables in many of the FHIR profiles that map to the CDA data elements. XSLT transforms will be made available to facilitate the conversion of eICR and RR transactions between CDA and FHIR formats. These transforms and other supportive material can be found in GForge in the [FHIR_IG_eCR SVN folder](https://gforge.hl7.org/gf/project/pher/scmsvn/?action=browse&path=%2Ftrunk%2FFHIR_IG_eCR%2F).

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/reportability_response_narrative_guidance.md

# Introduction
## Purpose
The following is informative guidance on generating the narrative text of a Reportability Response Composition (Reportability Response). Through the Reportability Response, public health seeks to support bidirectional communication with clinical care for reportable conditions. The Reportability Response is designed to have one Reportability Response created for each electronic Initial Case Report (eICR) and to be shared with the clinical care organization that created that eICR. The Reportability Response can also be shared with a Public Health Agency(ies) [PHA(s)] that has relevant reporting requirements (a Responsible Pubic Health Agency) that wants to use it to monitor the reporting process and know what has been conveyed to clinical care organizations and other Public Health Agencies. Sharing the Reportability Response with clinical care will serve several functions, including to:

- Communicate the reportability status, for the responsible PHA(s), of each condition included in the eICR
- Identify who (a PHA or an intermediary) prepared the Reportability Response
- Indicate whether the eICR has been sent to one or more PHA(s) Identify which PHA(s) has/have been sent the eICR
- Provide contact information for the responsible PHA(s)
- Provide suggested or required clinical follow-up activities from the responsible PHA(s), including any additional reporting needs or infection control activities
- Provide access to clinical support resources suggested by the responsible PHA(s) for identified reportable conditions
- Confirm eICR receipt and processing

A Reportability Response will also, when requested, be shared with the responsible PHAs (when they have not constructed it) for their internal use, so they understand what has been shared with clinical care, and to monitor/audit decision support algorithm effectiveness and implementation. When a condition is considered reportable to more than one PHA, the Reportability Response can be helpful in communicating reporting that has been done to other PHAs as well.

### Determination of Reportability
Reportability indicates the quality or state of a possible case/event being reportable to one or more PHA. It does not, in itself, represent the clinical diagnosis of a possible condition nor the conclusion that a possible case/event fully meets a public health case definition. Reportability is based on information at a given point of time and, resultantly, reportability status can change when additional or different information becomes available. Decision support systems that provide a determination of reportability of a possible condition produce results that may fall into a number of types. One or more of these reportability determinations may be present in the Reportability Response based on the possible condition(s) in the eICR being assessed.

The values that can currently be used for the **Determination of Reportability** are described below.

A possible condition is:

- **Reportable** - The information provided meets reporting criteria for an associated PHA.

A possible condition:

- **May be Reportable** - The information provided may meet reporting criteria if additional information is provided. The Reportability Response will also be able to share the information needed to definitively determine reportability.

A possible condition is:

- **Not Reportable** - The information provided conclusively does not meet reporting criteria for a triggered condition.

Some decision support systems may not be able to fully differentiate between possible conditions that are **Not Reportable** and those that **May be Reportable** if additional information is provided. In these circumstances there may only be a reportabilty determination of:

- **No Reporting Rule Met** - The information provided does not meet reporting criteria or may meet reporting criteria if additional information is provided.

The determination of **No Reporting Rule Met** may be provided for a possible condition or for all conditions in the eICR.

## Audience
The audience for this document is developers and managers of public health shared services platform infrastructure, Public Health Decision Support (PHDS), and public health surveillance systems that receive and process eICRs and then generate and share Reportability Responses.

# Narrative Construction Guidance

The following sections provide example templates and text for use in the generation of the narrative containined in [Reportability Response Subject Section text](StructureDefinition-rr-composition-definitions.html#Composition.section:sliceRRSubjectSection.text), [Reportability Response Summary Section text](StructureDefinition-rr-composition-definitions.html#Composition.section:sliceRRSummarySection.text), and [Electronic Initial Case Report Section text](StructureDefinition-rr-composition-definitions.html#Composition.section:sliceEICRSection.text). Most of the specifics of Reportabilty Response data and structure are found in the normative profiles of this implementation guide.

Normative guidance in the profiles includes data specification, order, and some aspects of structure and visualization.

The following sections include further details on how narrative text can be constructed to meet the goals of communicating with largely clinical audiences. There are example templates for the possible combinations of reportability determinations that need to be accommodated in the Reportablity Response and example visualizations.

Variables that represent coded data found elsewhere in the Reportabilty Response will be enclosed with angle brackets with a link to the relevant element, like this: &lt;[variable](reportability_response_narrative_guidance.html#narrative-construction-guidance)&gt;

## eICR Processed with No Warnings or Errors

### [Reportability Response Subject](StructureDefinition-rr-composition-definitions.html#Composition.section:sliceRRSubjectSection.text)
(for circumstances where **any** determination of reportability code is **reportable or maybe reportable** - it is recommended to communicate the Reportability Response to Provider/Reporter)


> Public Health Reporting Communication: one or more conditions are reportable, or may be reportable, to public health.


(for circumstances where **all** determination of reportability codes **are not reportable and/or no rule met** - it is recommended to not communicate the Reportability Response to Provider / Reporter, but to store to document completion)


> Public Health Reporting Communication: Submitted report had no identifiable reporting needs.

(for any circumstance where the eICR was **manually initiated**)

> Public Health Reporting Communication: Manually initiated report was submitted to public heath


### [Reportability Response Summary](StructureDefinition-rr-composition-definitions.html#Composition.section:sliceRRSummarySection)

**(Always present)**

> Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient.


**(if eICR was manually initiated)**

> The initial report was manually initiated by a provider. It was sent to: "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;", "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;".


> *(include and repeat for each* [Relevant Reportable Condition Observation](StructureDefinition-rr-relevant-reportable-condition-observation.html) contained in the RR Composition). Each determiniation should be its own paragraph in the narrative.

**(Reportable)**

> If at least 1 condition is reportable, whether it is the condition that initially triggered or not, the following summary test should be inserted:
> 
> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" is reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;". The initial case report was sent to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;". Additional information may be required for this report.
>
>If the intial triggered condition is not reportable, and there is at least 1 other reportable condition, the following summary text should be inserted:
>
> **(For the reportable):**
> 
> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" is reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;". The initial case report was sent to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;". Additional information may be required for this report.
>
> **(For the not reportable triggered condition):**
> 
> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" was determined not to be reportable for a triggered condition to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;". This may be because it is not on the list of reportable conditions for the relevant Public Health Agency or the information provided at the time of this report does not meet reporting criteria.
> 
> *If multiple Routing Entities are preesent change text to include each separated by:* "and to":
>
> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" is reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;". The initial case report was sent to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;" and to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;". Additional information may be required for this report.

**(May be reportable)**

> If a least 1 condition may be reportable, whether it is the condition that initially triggered or not, the following summary text should be inserted:
>
> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" may be reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization.html#Organization.name)&gt;". The reportability status could not be completely determined because: "&lt;[determination of reportability reason](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.extension:determinationOfReportabilityReason)&gt;". The initial case report was sent to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;".
>
> If the initial triggered condition is not reportable, and there is at least 1 other may be reportable condition, the following summary text should be inserted:
>
> **For the may be reportable:**
> 
> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" may be reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization.html#Organization.name)&gt;". The reportability status could not be completely determined because: "&lt;[determination of reportability reason](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.extension:determinationOfReportabilityReason)&gt;". The initial case report was sent to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;".
> 
> **For the triggered condition:**
> 
> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" was determined not to be reportable for a triggered condition to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization.html#Organization.name)&gt;". This may be because it is not on the list of reportable conditions for the relevant Public Health Agency or the information provided at the time of this report does not meet reporting criteria. 
>
> *If multiple Routing Entities are preesent change text to include each separated by:* "and to":
>
> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" may be reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization.html#Organization.name)&gt;". The reportability status could not be completely determined because: "&lt;[determination of reportability reason](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.extension:determinationOfReportabilityReason)&gt;". The initial case report was sent to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;" and to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;".

**(Not reportable)**

>If the intial triggered condition is not reportable, and there is no other condition determined to be reportable or may be reportable, the following summary text should be inserted:
>
> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" was determined not to be reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization.html#Organization.name)&gt;". This may be because it is not on the list of reportable conditions for the relevant Public
> Health Agency or the information provided at the time of this report does not meet reporting criteria. No determination of reportability could be made for any other conditions in the submitted initial case report.

**(No rule met)**

>If the initial triggered condition is no rule met, and there is no other condition determined to be reportable or may be reportable, the following summary text should be inserted:
>
> **For the triggered condition:**
>
> No determination of reportability could be made for "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" for "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization.html#Organization.name)&gt;" based on "&lt;[location relevance](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.code)&gt;". This may be because it is not on the list of reportable conditions for the relevant Public Health Agency, or the information provided at the time of this report does not meet reporting criteria, or not all data needed to confirm reportabilty were available. No determination of reportability could be made for any other conditions in the submitted initial case report.
> 
> If the initial triggered condition is no rule met, and there is at least 1 other reportable condition, the following summary text should be inserted:
>
> **For the reportable:**
> 
> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" is reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization.html#Organization.name)&gt;". The initial case report was sent to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;". Additional information may be required for this report.
> 
> **For the triggered condition:**
> 
> No determination of reportability could be made for "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" for "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization.html#Organization.name)&gt;" based on "&lt;[location relevance](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.code)&gt;". This may be because it is not on the list of reportable conditions for the relevant Public Health Agency, or the information provided at the time of this report does not meet reporting criteria, or not all data needed to confirm reportabilty were available. No determination of reportability could be made for any other conditions in the submitted initial case report.
> 
> If the initial triggered condition is no rule met, and there is at least 1 other may be reportable condition, the following summary text should be inserted:
> 
> **For the may be reportable:**
> 
> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" may be reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization.html#Organization.name)&gt;". The reportability status could not be completely determined because: "&lt;[determination of reportability reason](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.extension:determinationOfReportabilityReason)&gt;". The initial case report was sent to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;".
> 
> **For the triggered condition:**
> 
> No determination of reportability could be made for "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" for "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization.html#Organization.name)&gt;" based on "&lt;[location relevance](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.code)&gt;". This may be because it is not on the list of reportable conditions for the relevant Public Health Agency, or the information provided at the time of this report does not meet reporting criteria, or not all data needed to confirm reportabilty were available. No determination of reportability could be made for any other conditions in the submitted initial case report.
> 
*Note*: While the identification of a Responsible Agency is an important part of information that the Reportability Response will provide to clinical care, some decision support systems may not be able to initially identify one. In that circumstance, sentences that identify "for" or "to" &lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization.html#Organization.name)&gt; should be ended with a period before that text. (e.g., A determination of reportability for a triggered condition could not be made.)

(Above each list of external resources, include and repeat for each eICR &lt;[determination of reportability code](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.extension:determinationOfReportability)&gt;).

> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" for "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization.html#Organization.name)&gt;"
> Reporting is required within "&lt;[reporting timeframe](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.component:sliceReportingTimeframe.value[x])&gt;". Reporting to this Public Health Agency is based on "&lt;[location relevance](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.code)&gt;".

(repeat for each external resource template, based on External Resource Category order)

> &lt;[External resource description](StructureDefinition-rr-documentreference-definitions.html#DocumentReference.description)&gt; (&lt;[External resource link](StructureDefinition-rr-documentreference-definitions.html#DocumentReference.content.attachment.url)&gt; - &lt;[External resource priority](StructureDefinition-rr-documentreference-definitions.html#DocumentReference.extension:priority)&gt;)


### Common Combinations for Response in the Reportability Response 

#### A Single Condition is Reportable to a Single PHA

**Subject:**

Public Health Reporting Communication: one or more conditions are reportable, or may be reportable, to public health.

**Summary:**

Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient.

"&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" is reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization.html#Organization.name)&gt;". The initial case report was sent to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;". Additional information may be required for this report.

**"&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" for "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization.html#Organization.name)&gt;"**.

Reporting is required within "&lt;[reporting timeframe](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.component:sliceReportingTimeframe.value[x])&gt;". Reporting to this Public Health Agency is based on "&lt;[location relevance](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.code)&gt;".

*Example text:*

> Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient.
>
> "Zika virus" is reportable to "State Department of Health". An initial case report was sent to "State Department of Health". Additional information may be required for this report.
>
> **"Zika virus" for "State Department of Health"**
>
> Reporting is required within 24 hours. Reporting to this Public Health Agency is based on "both patient home address and provider facility address".
>
> Local mosquito-borne Zika virus transmission was reported in your area. Increased watchfulness for symptoms of Zika virus in your patients is warranted. (Immediate action requested)
>
> Additional information for the required reporting of Zika must be submitted to State Department of Health immediately. This additional information can be submitted here. ([Link](http://statedepartmentofhealth.gov/link) - Immediate action required)
>
> Zika has particular risks for pregnant women. Follow-up guidance for pregnant women and couples who are planning pregnancy. ([Link](http://statedepartmentofhealth.gov/link) - Immediate action requested)
>
> Further Laboratory testing for Zika may be needed. Guidance for additional testing and specimen collection ([Link](http://statedepartmentofhealth.gov/link) - Action requested)
>
> Forms for submitting further Zika laboratory testing ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> Treatment guidance ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> If you have additional questions regarding Zika or reporting, the State Department of Health can be reached at 800 555-5555 or here. ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> **Additional resources**
>
> Control and prevention information for providers ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> Detailed condition references ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> Prevalence in State ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> CDC webpage ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> Patient information factsheet ([Link](http://statedepartmentofhealth.gov/link) - Information only)

#### A Single Condition is *Not* Reportable to a Single PHA

**Subject:**

Public Health Reporting Communication: Submitted report had no identifiable reporting needs.

**Summary:**

Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient.

"&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" was determined not to be reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization.html#Organization.name)&gt;". This may be because it is not on the list of reportable conditions for the relevant Public Health Agency or the information provided at the time of this report does not meet reporting criteria.

*Example text:*

> Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient.
>
> "Zika virus" was determined not to be reportable to "State Department of Health". This may be because it is not on the list of reportable conditions for the relevant Public Health Agency or the information provided at the time of this report does not meet reporting criteria.

### Other Combinations for Response in the Reportability Response

Similar to these examples, some additional responses may include:

- Single Condition is *Reportable* to Multiple PHAs
- Single Condition is *Not Reportable* to Multiple PHAs
- Multiple Conditions are *Reportable* to a Single PHA
- Multiple Conditions are *Reportable* to Multiple PHAs
- Multiple Conditions are *Not Reportable* to a Single PHA
- Multiple Conditions are *Not Reportable* to Multiple PHAs
- Combination of Conditions *Reportable* and *Not Reportable* to a Single or Multiple PHA(s)
- Single Condition is *Reportable* to a Single PHA but with Multiple Routing Entities

## eICR Processed with a Warning

This section describes narrative guidance to deal with eICRs that were successfully processed but had an issue related to content which caused the PHDS system to be unable to make a determination of reportability.

In cases where the patient jurisdiction differs from the provider jurisdiction, a determination may be possible for one jurisdiction but not for the other due to an issue with content contained in the eICR or lack of rules within the PHDS. If the address cannot be linked a jurisdiction the PHDS may return a response of "jurisdiction not found (JNF)", which will result in a warning in the RR narrative. If a jurisdiction exists within the PHDS but no reporting specifications have been published, the RR will return a warning of "reporting specifications not found (RSNF)".

### Reportability Response Subject

*(for circumstances where any determination of reportability code is **reportable, may be reportable, or no rule met **– it is recommended to communicate the Reportability Response to Provider /Reporter)*

> Public Health Reporting Communication: one or more conditions are reportable, or may be reportable, to public health. 

*(for circumstances where determination of reportability **could not be made due to failure to process jurisdictional information** (Reporting Specifications Not Found [RSNF] or Jurisdiction Not Found [JNF]) without having a condition included that was found reportable, may be reportable, or no rule met – it is recommended to communicate the Reportability Response to Provider /Reporter)*
> Public Health Reporting Communication: Reportability for submitted report could not be determined.

### Reportability Response eICR Information

*(Always present)*

> eICR Information:
> An initial report for a possible reportable condition was received on "&lt;[eICR Receipt Time](StructureDefinition-rr-composition-definitions.html#Composition.section:sliceEICRSection.extension:extensionEICRReceiptTime)&gt;" with the file name "&lt;[eICR Document ID](StructureDefinition-eicr-document-bundle-definitions.html#Bundle.id)&gt;". The eICR was processed with a warning of: "&lt;[eICR Processing Status Reason](StructureDefinition-rr-eicr-processing-status-reason-observation-definitions.html#Observation)&gt;".

### Reportability Response Summary

**(Always present)**
>Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient. 
>
>*(include and repeat for each eICR* &lt;[determination of reportability code](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.extension:determinationOfReportability)&gt; *for any jurisdiction rules that were successfully processed.* Each determination should be its own paragraph in the narrative.)

**(Reportable)**
> If at least 1 condition is reportable, whether it is the condition that initially triggered or not, the following summary text should be inserted:
>
>"&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" is reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;". The initial case report was sent to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;". Additional information may be required for this report.

> If the initial triggered condition is not reportable, and there is at least 1 other reportable condition, the following summary text should be inserted:
> 
> *For the reportable:*
> 
> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" is reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;". The initial case report was sent to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;". Additional information may be required for this report.

> *For the not reportable triggered condition:*
> 
> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" was determined not to be reportable for a triggered condition to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;". This may be because it is not on the list of reportable conditions for the relevant Public Health Agency or the information provided at the time of this report does not meet reporting criteria.
 
> *if multiple Routing Entities are present change text to include each separated by* "and to":

> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" is reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;". The initial case report was sent to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;" and to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;". Additional information may be required for this report.

**(May be reportable)**

> If at least 1 condition may be reportable, whether it is the condition that initially triggered or not, the following summary text should be inserted.

> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" may be reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;". The reportability status could not be completely determined because: "&lt;[determination of reportability reason](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.extension:determinationOfReportabilityReason)&gt;". The Initial case report was sent to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;".

> If the initial triggered condition is not reportable, and there is at least 1 other may be reportable condition, the following summary text should be inserted:
> 
> *For the may be reportable:*
> 
> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" may be reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;". The reportability status could not be completely determined because: "&lt;[determination of reportability reason](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.extension:determinationOfReportabilityReason)&gt;". The initial case report was sent to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;". 

> *For the triggered condition:*
> 
> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" was determined not to be reportable for a triggered condition to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;". This may be because it is not on the list of reportable conditions for the relevant Public Health Agency or the information provided at the time of this report does not meet reporting criteria.
> 
> *if multiple Routing Entities are present change text to include each separated by* "and to":

> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" may be reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;". The reportability status could not be completely determined because: "&lt;[determination of reportability reason](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.extension:determinationOfReportabilityReason)&gt;". The initial case report was sent to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;" and to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;". 


**(Not reportable)**

If the initial triggered condition is not reportable, and there is no other condition determined to be reportable or may be reportable, the following summary text should be inserted:

> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" was determined not to be reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;". This may be because it is not on the list of reportable conditions for the relevant Public Health Agency or the information provided at the time of this report does not meet reporting criteria. No determination of reportability could be made for any other conditions in the submitted initial case report.

**(No rule met)**

If the initial triggered condition is no rule met, and there is no other condition determined to be reportable or may be reportable, the following summary text should be inserted:
For the triggered condition:

> No determination of reportability could be made for "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" for "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;" based on "&lt;[location relevance](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.code)&gt;". This may be because it is not on the list of reportable conditions for the relevant Public Health Agency, or the information provided at the time of this report does not meet reporting criteria, or not all data needed to confirm reportabilty were available. No determination of reportability could be made for any other conditions in the submitted initial case report.

If the initial triggered condition is no rule met, and there is at least 1 other reportable condition, the following summary text should be inserted:

> For the reportable:
> 
> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" is reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;". The initial case report was sent to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;". Additional information may be required for this report.

> For the triggered condition:
> 
> No determination of reportability could be made for "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" for "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;" based on "&lt;[location relevance](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.code)&gt;". This may be because it is not on the list of reportable conditions for the relevant Public Health Agency, or the information provided at the time of this report does not meet reporting criteria, or not all data needed to confirm reportabilty were available.

If the initial triggered condition is no rule met, and there is at least 1 other may be reportable condition, the following summary text should be inserted:

> *For the may be reportable:*
> 
> "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" may be reportable to "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;". The reportability status could not be completely determined because: "&lt;[determination of reportability reason](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.extension:determinationOfReportabilityReason)&gt;". The initial case report was sent to "&lt;[routing entity name](StructureDefinition-rr-routing-entity-organization.html#Organization.name)&gt;". 

> For the triggered condition:
> 
> No determination of reportability could be made for "&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" for "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;" based on "&lt;[location relevance](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.code)&gt;". This may be because it is not on the list of reportable conditions for the relevant Public Health Agency, or the information provided at the time of this report does not meet reporting criteria, or not all data needed to confirm reportabilty were available.

Note: While the identification of a Responsible Agency is an important part of information that the Reportability Response will provide to clinical care, some decision support systems may not be able to initially identify one. In that circumstance, sentences that identify "for" or "to" "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;" should be ended with a period before that text. (e.g., A determination of reportability for a triggered condition could not be made.)

After displaying determination of reportability information above, then include relevant information about the jurisdictional error which explains why the eICR could not fully be processed.

**(Reporting Specification Not Found)**

> Reportability could not be determined for "&lt;jurisdiction displayName&gt;" due to a processing error. Reporting to "&lt;jurisdiction displayName&gt;" may still be required. 

**(Jurisdiction Not Found for Patient Address)**


> The patient address in this eICR could not be processed. Additional reporting may be necessary.


**(Jurisdiction Not Found for Facility Address)**

> The facility address in this eICR could not be processed. Additional reporting may be necessary.

(*Above each list of external resources, include and repeat for each eICR* &lt;[determination of reportability code](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.extension:determinationOfReportability)&gt;)

"&lt;[Relevant reportable condition name](StructureDefinition-rr-relevant-reportable-condition-observation-definitions.html#Observation.value[x])&gt;" for "&lt;[responsible agency name](StructureDefinition-rr-responsible-agency-organization-definitions.html#Organization.name)&gt;"
> Reporting is required within "&lt;[reporting timeframe](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.component:sliceReportingTimeframe.value[x])&gt;". Reporting to this Public Health Agency is based on "&lt;[location relevance](StructureDefinition-rr-reportability-information-observation-definitions.html#Observation.code)&gt;". 

*(repeat for each external resource template, based on External Resource Category order)*

> &lt;[External resource description](StructureDefinition-rr-documentreference-definitions.html#DocumentReference.description)&gt; (&lt;[External resource link](StructureDefinition-rr-documentreference-definitions.html#DocumentReference.content.attachment.url)&gt; - &lt;[External resource priority](StructureDefinition-rr-documentreference-definitions.html#DocumentReference.extension:priority)&gt;)


## eICR Not Processed

In the case where an eICR Composition was not processed (**eICR Processing Status**=eICR was not processed - error), the normative constraints in the Reportability Response Composition profile state that there must be narrative text populated from [Composition\[rr-composition\].section\[sliceEICRInformation\]](StructureDefinition-rr-composition-definitions.html#Composition.section:sliceEICRSection) that contains the reason the file was not processed.

Given the potential reasons (see codes from the [eICR Processing Status (eCR) Value Set (PHIN VADS)](http://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.113883.10.20.15.2.5.8) value set) for an eICR Composition not to be processed, the following example may be used in the the corresponding Reportability Response [Electronic Initial Case Report Section text](StructureDefinition-rr-composition-definitions.html#Composition.section:sliceEICRSection.text):

> An initial report for a possible reportable condition was received on "&lt;[date and time of eICR receipt](StructureDefinition-rr-composition-definitions.html#Composition.section:sliceEICRSection.extension:extensionEICRReceiptTime)&gt;" with the file name "&lt;[filename of eICR](StructureDefinition-rr-composition-definitions.html#Composition.section:sliceEICRSection.entry:sliceEICRDocument.display)&gt;" but it was not processed. "&lt;[eICR Processing Status Reason](StructureDefinition-rr-eicr-processing-status-reason-observation-definitions.html#Observation)&gt;"

If additional information about the specific error is available (e.g., file validator output, server logs), it can be found in [eICR Validation output](StructureDefinition-rr-eicr-processing-status-extension-definitions.html#Extension.extension:eICRValidationOutput.value[x]).

## Reportability Response Examples

The examples below provide example text for *Providers / Reporters* for these types of determination of reportability:

1. One Reportable Condition to One PHA (with minimum external resources by PHA)
2. One Reportable Condition to One PHA (fully populated with external resources by PHA)
3. One Reportable Condition to One PHA (with no responsible agency identified)
4. One Not Reportable Condition for One PHA
5. One May be reportable Condition to One PHA
6. One No reporting rule met for One PHA
7. Two Reportable Conditions for Two PHAs
8. One Reportable and One Not reportable for Two PHAs
9. Manually initiated eICR with no reporting criteria matched for One PHA
10. Manually initiated eICR with One Reportable Condition for One PHA
11. One Reportable Condition with Multiple Routing Entities
12. Fatal Error – eICR Not Processed
13. Decision Support Timeout – eICR Not Processed
14. One Juridiction Not Found (warning)
15. One Reporting Specifications Not Found (warning)
16. One No Rule Met and One Jurisdiction Not Found
17. One No Rule Met and One Reporting Specification Not Found
18. One Jurisdiction Not Found and One Reporting Specifications Not Found
19. One May be reportable Condition and One Jurisdiction Not Found
20. One May be reportable Condition and One Reporting Specifications Not Found
21. One Reportable Condition and One Jurisdiction Not Found for Patient Address
22. One Reportable Condition and One Jurisdiction Not Found for Provider/Facility Address
23. One Reportable Condition and One Reporting Specifications Not Found


----------


*Example 1* - Example Reportability Response text for One Reportable Condition to One PHA (with minimum external resources by PHA)

> **Subject:**
>
> Public Health Reporting Communication: one or more conditions are reportable, or may be reportable, to public health.
>
> **Summary:**
>
> Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient.
> "Zika virus" is reportable to "State Department of Health". An initial case report was sent to "State Department of Health". Additional information may be required for this report.
>
> **"Zika virus" for "State Department of Health"**
>
> Reporting is required within "24 hours". Reporting to this Public Health Agency is based on "both patient home address and provider facility address".
>
> If you have additional questions regarding Zika or reporting, the State Department of Health can be reached at 800 555-5555 or here. ([Link](http://statedepartmentofhealth.gov/link) - Information only)


----------

*Example 2* - Example Reportability Response text for One Reportable Condition to One PHA (fully populated with external resources by PHA)

> **Subject:**
>
> Public Health Reporting Communication: one or more conditions are reportable, or may be reportable, to public health.
>
> **Summary:**
>
> Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient.
> "Zika virus" is reportable to "State Department of Health". An initial case report was sent to "State Department of Health". Additional information may be required for this report.
>
> **"Zika virus" for "State Department of Health"**
>
> Reporting is required within "24 hours". Reporting to this Public Health Agency is based on "both patient home address and provider facility address".
>
> Local mosquito-borne Zika virus transmission was reported in your area. Increased watchfulness for symptoms of Zika virus in your patients is warranted. (Immediate action requested)
>
> Additional information for the required reporting of Zika must be submitted to State Department of Health immediately. This additional information can be submitted here. ([Link](http://statedepartmentofhealth.gov/link) - Immediate action required)
>
> Zika has particular risks for pregnant women. Follow-up guidance for pregnant women and couples who are planning pregnancy. ([Link](http://statedepartmentofhealth.gov/link) - Immediate action requested)
>
> Further Laboratory testing for Zika may be needed. Guidance for additional testing and specimen collection ([Link](http://statedepartmentofhealth.gov/link) - Action requested)
>
> Forms for submitting further Zika laboratory testing ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> Treatment guidance ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> If you have additional questions regarding Zika or reporting, the State Department of Health can be reached at 800 555-5555 or here. ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> **Additional resources**
>
> Control and prevention information for providers ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> Detailed condition references ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> Prevalence in State ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> CDC webpage ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> Patient information factsheet ([Link](http://statedepartmentofhealth.gov/link) - Information only)


----------

*Example 3* - Example Reportability Response text for One Reportable Condition to One PHA (with no responsible agency identified)

> **Subject:**
>
> Public Health Reporting Communication: one or more conditions are reportable, or may be reportable, to public health.
>
> **Summary:**
>
> Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient.
> "Zika virus" is reportable. An initial case report was sent to "State Department of Health". Additional information may be required for this report.


----------

*Example 4* - Example Reportability Response text for One Not Reportable Condition to One PHA

> **Subject:**
>
> Public Health Reporting Communication: submitted report had no identifiable reporting needs.
>
> **Summary:**
>
> Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient.
> "Zika virus" was determined not reportable to "State Department of Health". This may be because it is not on the list of reportable conditions for the relevant Public Health Agency or the information provided at the time of this report does not meet reporting criteria.
>
> If you have additional questions regarding Zika or reporting, the State Department of Health can be reached at 800 555-5555 or here. ([Link](http://statedepartmentofhealth.gov/link) - Information only)


----------

*Example 5* - Example Reportability Response text for One May be Reportable Condition to One PHA

> **Subject:**
>
> Public Health Reporting Communication: one or more conditions are reportable, or may be reportable, to public health.
>
> **Summary:**
>
> Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient.
> "Zika virus" may be reportable to "State Department of Health". The reportability status could not be completely determined because: "Patient pregnancy status is missing from eICR".
>
> **"Zika virus" for "State Department of Health"**
>
> Reporting is required within "24 hours". Reporting to this Public Health Agency is based on "both patient home address and provider facility address".
> Local mosquito-borne Zika virus transmission was reported in your area. Increased watchfulness for symptoms of Zika virus in your patients is warranted. (Immediate action requested)
>
> Additional information for the required reporting of Zika must be submitted to State Department of Health immediately. This additional information can be submitted here. ([Link](http://statedepartmentofhealth.gov/link) - Immediate action required)
>
> Zika has particular risks for pregnant women. Follow-up guidance for pregnant women and couples who are planning pregnancy. ([Link](http://statedepartmentofhealth.gov/link) - Immediate action requested)
>
> Further Laboratory testing for Zika may be needed. Guidance for additional testing and specimen collection ([Link](http://statedepartmentofhealth.gov/link) - Action requested)
>
> Forms for submitting further Zika laboratory testing ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> Treatment guidance ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> If you have additional questions regarding Zika or reporting, the State Department of Health can be reached at 800 555-5555 or here. ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> **Additional resources**
>
> Prevalence in State ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> CDC webpage ([Link](http://statedepartmentofhealth.gov/link) - Information only)


----------

*Example 6* - Example Reportability Response text with No Reporting Rule Met for One PHA

> **Subject:**
>
> Public Health Reporting Communication: submitted report had no identifiable reporting needs.
>
> **Summary:**
>
> Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient.
> A determination of reportability for a triggered condition could not be made for "State Department of Health". This may be because it is not on the list of reportable conditions for the relevant Public Health Agency, or the information provided at the time of this report does not meet reporting criteria, or not all data needed to confirm reportability were available.


----------

*Example 7* - Example Reportability Response text for Two Reportable Condition to Two PHAs

> **Subject:**
>
> Public Health Reporting Communication: one or more conditions are reportable, or may be reportable, to public health.
>
> **Summary:**
>
> Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient.
> "Zika virus" is reportable to "State A Department of Health". The initial case report was sent to "State A Department of Health". Additional information may be required for this report. "Chlamydia" is reportable to "State A Department of Health". The initial case report was sent to "State A Department of Health". Additional information may be required for this report.
> "Zika virus" is reportable to "State B Department of Health". The initial case report was sent to "State B Department of Health". Additional information may be required for this report. "Chlamydia" is reportable to "State B Department of Health". The initial case report was sent to "State B Department of Health". Additional information may be required for this report.
>
> **"Zika virus" for "State A Department of Health".**
>
> Reporting is required within "24 hours". Reporting to this Public Health Agency is based on "patient home address".
>
> Local mosquito-borne Zika virus transmission was reported in your area. Increased watchfulness for symptoms of Zika virus in your patients is warranted. (Immediate action requested)
>
> Additional information for the required reporting of Zika must be submitted to State Department of Health immediately. This additional information can be submitted here. ([Link](http://statedepartmentofhealth.gov/link) - Immediate action required)
>
> Zika has particular risks for pregnant women. Follow-up guidance for pregnant women and couples who are planning pregnancy. ([Link](http://statedepartmentofhealth.gov/link) - Immediate action requested)
>
> Further Laboratory testing for Zika may be needed. Guidance for additional testing and specimen collection ([Link](http://statedepartmentofhealth.gov/link) - Action requested)
>
> Forms for submitting further Zika laboratory testing ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> Treatment guidance ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> If you have additional questions regarding Zika or reporting, the State Department of Health can be reached at 800 555-5555 or here. ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> **Additional Resources**
>
> Control and prevention information for providers ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> Detailed condition references ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> Prevalence in State ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> CDC webpage ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> Patient information factsheet ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> **"Chlamydia" for "State A Department of Health"**
>
> Reporting is required within "3 days". Reporting to this Public Health Agency is based on "patient home address".
>
> Additional information for the required reporting of Chlamydia must be submitted to State A Department of Health immediately. This additional information can be submitted here. ([Link](http://statedepartmentofhealth.gov/link) - Immediate action required)
>
> State A Chlamydia Disease Plan ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> Treatment guidelines ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> State A Disease Testing Information ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> If you have additional questions regarding reporting, the State Department of Health can be reached at 800 555-5555 or here. ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> **Additional Resources**
>
> STD Disease Statistics in State A ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> CDC webpage ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> Patient information factsheet ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> **"Zika virus" for "State B Department of Health"**
>
> Reporting is required within "immediately by phone". Reporting to this Public Health Agency is based on "provider facility address".
>
> State B has declared a Public Health Emergency for Zika Virus. Additional information is available here. ([Link](http://statedepartmentofhealth.gov/link) - Immediate action required)
>
> Additional information for the required reporting of Zika must be submitted to State B Department of Health immediately. This additional information can be submitted here. ([Link](http://statedepartmentofhealth.gov/link) - Immediate action required)
>
> State B recommends that symptomatic pregnant women with possible Zika exposure should be tested for Zika virus infection. ([Link](http://statedepartmentofhealth.gov/link) - Immediate action requested)
>
> Zika Virus Diagnostic Specimen Collection, Packaging and Shipping Guidance for Laboratories and County Health Departments ([Link](http://statedepartmentofhealth.gov/link) - Action requested)
>
> Zika Virus Testing Frequently Asked Questions ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> Providers may use this form to assess patients for possible Zika Virus ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> If you have additional questions regarding Zika or reporting, the State Department of Health can be reached at 800 555-5555 or here. ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> **Additional Resources**
>
> State B Zika Virus Information Hotline: 1-800-999-9999 (For information)
>
> Control and prevention information for providers ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> CDC webpage ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> **"Chlamydia" for "State B Department of Health"**
>
> Reporting is required within "one business day". Reporting to this Public Health Agency is based on "provider facility address".
>
> Additional information for the required reporting of Chlamydia must be submitted to State B Department of Health immediately. This additional information can be submitted here. ([Link](http://statedepartmentofhealth.gov/link) - Immediate action required)
>
> Chlamydia treatment brochure ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> The State B Department of Health is here to serve you. Contact us with any questions you may have regarding reporting and treatment of Sexually Transmitted Diseases, by phone 888-123-1234, or email STD.Feedback@StateBhealth.gov. (For information)
>
> **Additional Resources**
>
> Fact sheet for patients with Chlamydia ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> State B Administrative Code ABC-123 is the mandate that empowers the Department of Health to record communicable diseases and dictates when and how diseases are to be reported to the Department by both practitioners and laboratories. ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> CDC webpage for Chlamydia ([Link](http://statedepartmentofhealth.gov/link) - For information)


----------

*Example 8* - Example Reportability Response text for One Reportable and One Not reportable for Two PHAs

> **Subject:**
>
> Public Health Reporting Communication: one or more conditions are reportable, or may be reportable, to public health.
>
> **Summary:**
>
> Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient.
> "Zika virus" is reportable to "State A Department of Health". The initial case report was sent to "State A Department of Health". Additional information may be required for this report. "Chlamydia" was determined not reportable to "State A Department of Health". This may be because it is not on the list of reportable conditions for the relevant Public Health Agency or the information provided at the time of this report does not meet reporting criteria.
> "Zika virus" is reportable to "State B Department of Health". The initial case report was sent to "State B Department of Health". Additional information may be required for this report. "Chlamydia" is reportable to "State B Department of Health". The initial case report was sent to "State B Department of Health". Additional information may be required for this report.
>
> **"Zika virus" for "State A Department of Health".**
>
> Reporting is required within "24 hours". Reporting to this Public Health Agency is based on "patient home address".
>
> Local mosquito-borne Zika virus transmission was reported in your area. Increased watchfulness for symptoms of Zika virus in your patients is warranted. (Immediate action requested)
>
> Additional information for the required reporting of Zika must be submitted to State Department of Health immediately. This additional information can be submitted here. ([Link](http://statedepartmentofhealth.gov/link) - Immediate action required)
>
> Zika has particular risks for pregnant women. Follow-up guidance for pregnant women and couples who are planning pregnancy. ([Link](http://statedepartmentofhealth.gov/link) - Immediate action requested)
>
> Further Laboratory testing for Zika may be needed. Guidance for additional testing and specimen collection ([Link](http://statedepartmentofhealth.gov/link) - Action requested)
>
> Forms for submitting further Zika laboratory testing ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> Treatment guidance ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> If you have additional questions regarding Zika or reporting, the State Department of Health can be reached at 800 555-5555 or here. ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> **Additional Resources**
>
> Control and prevention information for providers ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> Detailed condition references ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> Prevalence in State ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> CDC webpage ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> Patient information factsheet ([Link](http://statedepartmentofhealth.gov/link) - Information only)
>
> **"Zika virus" for "State B Department of Health"**
>
> Reporting is required within "immediately by phone". Reporting to this Public Health Agency is based on "provider facility address".
>
> State B has declared a Public Health Emergency for Zika Virus. Additional information is available here. ([Link](http://statedepartmentofhealth.gov/link) - Immediate action required)
>
> Additional information for the required reporting of Zika must be submitted to State B Department of Health immediately. This additional information can be submitted here. ([Link](http://statedepartmentofhealth.gov/link) - Immediate action required)
>
> State B recommends that symptomatic pregnant women with possible Zika exposure should be tested for Zika virus infection. ([Link](http://statedepartmentofhealth.gov/link) - Immediate action requested)
>
> Zika Virus Diagnostic Specimen Collection, Packaging and Shipping Guidance for Laboratories and County Health Departments ([Link](http://statedepartmentofhealth.gov/link) - Action requested)
>
> Zika Virus Testing Frequently Asked Questions ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> Providers may use this form to assess patients for possible Zika Virus ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> If you have additional questions regarding Zika or reporting, the State Department of Health can be reached at 800 555-5555 or here. ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> **Additional Resources**
>
> State B Zika Virus Information Hotline: 1-800-999-9999 (For information)
>
> Control and prevention information for providers ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> CDC webpage ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> **"Chlamydia" for "State B Department of Health"**
>
> Reporting is required within "one business day". Reporting to this Public Health Agency is based on "provider facility address".
>
> Additional information for the required reporting of Chlamydia must be submitted to State B Department of Health immediately. This additional information can be submitted here. ([Link](http://statedepartmentofhealth.gov/link) - Immediate action required)
>
> Chlamydia treatment brochure ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> The State B Department of Health is here to serve you. Contact us with any questions you may have regarding reporting and treatment of Sexually Transmitted Diseases, by phone 888-123-1234, or email STD.Feedback@StateBhealth.gov. (For information)
>
> **Additional Resources**
>
> Fact sheet for patients with Chlamydia ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> State B Administrative Code ABC-123 is the mandate that empowers the Department of Health to record communicable diseases and dictates when and how diseases are to be reported to the Department by both practitioners and laboratories. ([Link](http://statedepartmentofhealth.gov/link) - For information)
>
> CDC webpage for Chlamydia ([Link](http://statedepartmentofhealth.gov/link) - For information)


----------

*Example 9* - Example Reportability Response text for a Manually initiated eICR with no reporting criteria matched for One PHA

> **Subject:**
>
> Public Health Reporting Communication: Manually initiated report was submitted to public health.
>
> **Summary:**
>
> Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient.
> The initial report was manually initiated by a provider. It was sent to "State Department of Health".


----------

*Example 10* - Example Reportability Response text for a Manually initiated eICR with One Reportable Condition for One PHA

> **Subject:**
>
> Public Health Reporting Communication: Manually initiated report was submitted to public health.
>
> **Summary:**
>
> Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient.
> The initial report was manually initiated by a provider. It was sent to "State Department of Health".
> "Zika virus" is reportable to "State Department of Health". An initial case report was sent to "State Department of Health". Additional information may be required for this report.
>
> **"Zika virus" for "State Department of Health"**
>
> Reporting is required within "24 hours". Reporting to this Public Health Agency is based on "both patient home address and provider facility address".
>
> If you have additional questions regarding Zika or reporting, the State Department of Health can be reached at 800 555-5555 or here. ([Link](http://statedepartmentofhealth.gov/link) - Information only)


----------

*Example 11* - Example Reportability Response text for One Reportable with Multiple Routing Entities

> **Subject:**
>
> Public Health Reporting Communication: one or more conditions are reportable, or may be reportable, to public health
>
> **Summary:**
>
> Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient.
>
> "Disease caused by severe acute respiratory syndrome coronavius 2 (disorder)" is reportable to "Los Angeles County Department of Public Health". The initial case report was sent to "California Deparment of Public Health" and to "Los Angeles County Department of Public Health". Additional information may be required for this report.
>
> **"Disease caused by severe acute respiratory syndrome coronavirus 2 (disorder" for "Los Angeles County Department of Public Health"**
>
> Reporting is required within "immediately". Reporting to this Public Health Agency is based on "both patient home address and provider facility address".
>
> CDC webpage COVID-19 webpage ([Information only](http://cdc.gov/link))
> 
> Los Angeles County Department of Public Helath Office of the Chief Medical Informatics Officer IRIS System 241 North Figueroa Street Los Angeles, CA 90012 231-288-7696 ([Information only](http://la.gov/link))


----------

*Example 12* - Example Reportability Response text with Error for "EHR System Administrators"

> **eICR Information:**
>
> An initial report for a possible reportable condition was received on December 12, 2017 at 8:00pm with a file name "Eicr_Filename.xml" but it was not able to be processed.
>
> eICR was not processed due to an error of: fatal problem with the eICR that was received.


----------

*Example 13* - Example Reportability Response text with Decision Support Timeout Error for "EHR System Administrators"

> **Subject:**
>
> Public Health Reporting Communication: Submitted report could not be processed due to an error.
> 
> **eICR Information:**
>
> An initial report for a possible reportable condition was received on 10/28/2020 20:28:24 UTC with the file name "43cs7bdf-c2c9-444b-a5cf-fdd46e9c5549" but it was not processed.
>
> eICR was not processed due to an error of: an ongoing server problem.


----------

*Example 14* - Example Reportability Response text with Warning of Jurisdiction Not Found for any address in the eICR

> **Subject:**
>
> Public Health Reporting Communication: Reportability for submitted report could not be determined.
> 
> **eICR Information:**
>
> An initial report for a possible reportable condition was received on 10/19/2020 12:54:03 UTC with the file name "e6394f95-9dfc-4cb7-8592-8bfafd067286". The eICR was process with a warning of: format or content issues.
>
> eICR was not processed due to an error of: an ongoing server problem.
> 
> **Summary:**
>
> Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient.
> 
> The patient address in this eICR could not be processed. Additional reporting may be necessary. The facilty address in the eICR could not be processed. Additional reporting may be necessary.
 

----------

*Example 15* - Example Reportability Response text with Warning of Reporting Specification Not Found for any PHA in the eICR

> **Subject:**
>
> Public Health Reporting Communication: Reportability for submitted report could not be determined.
> 
> **eICR Information:**
>
> An initial report for a possible reportable condition was received on 10/13/2020 14:42:57 UTC with the file name "e6394f95-9dfc-4cb7-8592-ebfafd067286". The eICR was process with a warning of: format or content issues.
>
> 
> **Summary:**
>
> Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient.
> 
> Reportability could not be determined for "Saint Croix (Test)" due to a processing error. Reporting to "Saint Croix (Test)" may still be required.
 

----------

*Example 16* - Example Reportability Response text with One Warning of Jurisdiction Not Found and One No Rule Met for 2 PHAs

> **Subject:**
>
> Public Health Reporting Communication: one or more conditions are reportable, or may be reportable, to public health.
> 
> **eICR Information:**
>
> An initial report for a possible reportable condition was received on 10/13/2020 17:59:20 UTC with the file name "58fecd25-973e-4397-af68-1b76583758955". The eICR was process with a warning of: format or content issues.
>
> 
> **Summary:**
>
> Your organization electronically submitted an initial case report to determine if reporting to public health is needed for a patient.
> 
> A determination of reportability for a triffered condition could not be made for "Virgin Islands Department of Health (Test)". This may be becuase it is not on the list of reportable conditions for the relevant Public Health Agency, or the information provided at the time of this report does not meet reporting criteria, or not all data needed to confirm reportability were available.
> 
> The facility address in this eICR could not be processed. Additional reporting may be necessary.

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/reportability_response_rr_transaction_and_profiles.md

### Reportability Response (RR) Transaction and Profiles

The RR transaction represents a response from public health to healthcare associated with a received eICR.

It can include determination of reportability information, contact information for the involved public health agencies, and requests for case investigation supplemental data that may not have been recorded in the process of care, condition-specific information from public health, and an acknowledgment that report has been successfully conveyed. 

When public health reporting rules are distributable to healthcare some of this information will be conveyed in the electronic Reporting & Surveillance Distribution (eRSD) transaction so that it can be accessed by the healthcare rules engine.

The RR is conveyed as a push transaction from public health to healthcare.

There may be several different intermediaries involved in its transmission including Health Information Exchanges and Health Data Networks.

The RR may originate from the Association of Public Health Laboratories (APHL) AIMS platform when public health decision support (the Reportable Condition Knowledge Management System - RCKMS) is used there or directly from a Public Health Agency if they received the eICR directly from healthcare. 

In this implementation guide the reference transport transaction is a FHIR POST, but other transport mechanisms may be added or substituted as the data wend their way back to the source of the related eICR.

Once received by healthcare, the RR information is intended to support Providers and Reporters and be attached to patient charts or placed in work queues so as to notify personnel of reportable and possibly reportable conditions.

It also should be provided to EHR System Administrators to confirm reporting and convey error and warning messages.

A number of profiles and extensions have been defined for the Reportability Response transactions  - see [Artifact Index](artifacts.html) for a listing of these profiles. The Reportability Response Composition profile is the starting point and all the other profiles are referenced from this profile (see diagram below).

<table><tr><td><img src="FHIR RR Profile Hierarchy.png" /></td></tr></table>

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/rule_filter_generation.md

This document details the generation of CQL rule filters

### Overview

Determining reportability for a particular event is a complex process involving multiple considerations. To support the possibility of additional participation in that process by sites producing data, condition-specific filter criteria, including condition-specific value sets, as well as jurisdiction-level configuration information can be made available as part of the eRSD specification.

The general structure of the reportability decision is organized by condition. For each condition, a set of criteria are defined that characterize evidence involved in the decision. These criteria reference data from various sources, including laboratories, clinics and hospitals (provider facilities), and vital records. The condition-specific criteria are expressed in terms of various categories of data, including demographics, diagnoses and problems, laboratory orders and results, medication and immunization information, and vital statistics. These criteria are then combined in different ways to produce rules. In this way, different jurisdictions can have different rules about what constitutes a reportable event, by specifying different combinations of condition-specific criteria. Reporting sites can then participate in the reportability decision by considering jurisdiction configuration for the jurisdiction of residence and the jurisdiction of care in which the event occurred.

### Reportable Condition Trigger Categories

Condition-specific criteria are expressed in terms of data elements and characterized using standard terminologies. These condition-specific criteria terminologies are collected into value sets in the following six categories:

```cql
valueset "Example Diagnosis/Problem Triggers": 'http://hl7.org/fhir/us/ecr/ValueSet/valueset-dxtc-example'
valueset "Example Lab Order Test Name Triggers": 'http://hl7.org/fhir/us/ecr/ValueSet/valueset-lotc-example'
valueset "Example Lab Observation Test Name Triggers": 'http://hl7.org/fhir/us/ecr/ValueSet/valueset-lrtc-example'
valueset "Example Medications Triggers": 'http://hl7.org/fhir/us/ecr/ValueSet/valueset-mrtc-example'
valueset "Example Organism Substance Triggers": "http://hl7.org/fhir/us/ecr/ValueSet/valueset-ostc-example"
valueset "Example Suspected Disorder Triggers": "http://hl7.org/fhir/us/ecr/ValueSet/valueset-sdtc-example"
```

### Reportable Condition Trigger Representation within FHIR

These categories can be expressed within CQL as:

```cql
define "Condition Diagnosis/Problem Data":
  [Condition: code in "Example Diagnosis/Problem Triggers"] DX
    where DX.clinicalStatus in { 'active', 'recurrence', 'relapse' }
      and DX.verificationStatus in { 'unconfirmed', 'provisional', 'differential', 'confirmed' }

define "Encounter Diagnosis/Problem Data":
  [Encounter: reasonCode in "Example Diagnosis/Problem Triggers"] DX
    where DX.status in { 'arrived', 'triaged', 'in-progress', 'onleave', 'finished' }

define "Diagnosis/Problem Data":
  "Condition Diagnosis/Problem Data"
    union "Encounter Diagnosis/Problem Data"

define "Immunizations Data":      
  [Immunization: vaccineCode in "Example Medications Triggers"] IZ
    where IZ.status = 'completed'

define "Lab Order Test Name Data":
  [ServiceRequest: code in "Example Lab Order Test Name Triggers"] LO
    where LO.status in { 'draft', 'active', 'completed' }
      and LO.intent in { 'proposal', 'plan', 'order', 'original-order', reflex-order', 'filler-order', 'instance-order' }

define "Lab Observation Test Name Data":      
  [Observation: code in "Example Lab Observation Test Name Triggers"] LR
    where LR.status in { 'registered', 'preliminary', 'final', 'amended' }

define "Medications Data":  
  [MedicationAdministration: medicationCodeableConcept in "Example Medications Triggers"] MR
    where MR.status in { 'active', 'completed' }

define "Organism Substance Data":  
  [Observation: code in "Example Organism Substance Triggers"] OS
    where OS.status in { 'registered', 'preliminary', 'final', 'amended' }

define "Condition Suspected Disorder Data":
  [Condition: code in "Example Suspected Disorder Triggers"] SD
    where SD.clinicalStatus in { 'active', 'recurrence', 'relapse' }
      and SD.verificationStatus in { 'unconfirmed', 'provisional', 'differential', 'confirmed' }

define "Encounter Suspected Disorder Data":
  [Encounter: reasonCode in "Example Suspected Disorder  Triggers"] SD
    where SD.status in { 'arrived', 'triaged', 'in-progress', 'onleave', 'finished' }

define "Suspected Disorder Data":
  "Condition Suspected Disorder Data"
    union "Encounter Suspected Disorder Data"
```

NOTE: The status checks in the above are not necessarily appropriate, it may be that the initial triggering should ignore status entirely, leaving a status check to the more detailed condition-specific criteria. More on this in the data category patterns discussion below.

### Condition-Specific Value Sets

As of the most recent release of the eRSD specification, condition-specific value sets are available that specify, per condition (by name currently, but planned to be by code) the value sets that are used within criteria for that condition. These value sets are identified by specifying the "focus" within the useContext. For example:

```json
"useContext": [
  {
    "code": {
      "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
      "code": "focus"
    },
    "valueCodeableConcept": {
      "text": "Chlamydia"
    }
  }
]
```

NOTE: In addition to the condition, we will need to know the category in order to be able to accurately determine which resource template to use to construct the rule expression.

These condition-specific value sets can then be used to construct CQL expressions referencing the various categories:

```cql
valueset "VS: Chlamydia trachomatis Infection (Tests for Chlamydia trachomatis by Culture and Identification Method)": 'TBD'
valueset "VS: Chlamydia trachomatis Infection (Tests for Chlamydia trachomatis Nucleic Acid)": 'TBD'
valueset "VS: Chlamydia trachomatis Infection (Tests for Chlamydia trachomatis Antigen)": 'TBD'
valueset "VS: Chlamydia trachomatis Infection (Tests for Chlamydia species by Culture and Identification Method)": 'TBD'
valueset "VS: Chlamydia trachomatis Infection (Tests for Chlamydia species Nucleic Acid)": 'TBD'
valueset "Indeterminate or Equivocal Lab Result Value": 'TBD'
valueset "Negative or Undetected Lab Result Value": 'TBD'
```

NOTE: This needs to include value sets that are used across conditions as part of the criteria as well, the "Indeterminate or Equivocal Lab Result Value" and "Negative or Undetected Lab Result Value" value sets in this example.

### Data Categories

The reportability criteria are expressed in terms of a specific set of data categories (roughly analagous to the trigger categories, but slightly broader):

* **Demographic** Patient age, address
* **Clinical Diagnosis** Diagnosis entered on an encounter
* **Problem List** Condition entered on a problem list, with a specific status
* **Laboratory Test Order**
* **Laboratory Test Result** (test name, value, interpretation)
* **Medication Administration, Order, or Prescription**
* **Immunization Administration**
* **Vital Records** (death)
* **Epidemiologic**

For each of these categories, template CQL could be used to build a template expression for data elements used in criteria expressions. For example, for the Laboratory Test Result category, we could use a template:

```cql
define "<<Condition Name>> Laboratory Test Results":
  [Observation: <<Condition Valueset>>] O
    where O.status in { 'preliminary', 'final', 'amended', 'corrected' }
```

|DataTemplateId | Description |
| Active Diagnosis | Problem list items that are clinically active |
| Encounter Diagnosis | Encounter diagnosis codes |
| Negative lab result | Parameterizable query for this category of data |

### Data Criteria

With these building blocks, we can then construct criteria based on the criteria definitions. For example, consider the following negative test results criteria for Chlamydia:

* Negative results of tests for identification of Chlamydia trachomatis in a clinical specimen by organism-specific culture method, including identification tests performed on an isolate
* Negative results of tests for detection of Chlamydia trachomatis antigen in a clinical specimen by any organism-specific method
* Negative results of tests for detection of Chlamydia trachomatis nucleic acid in a clinical specimen by any organism-specific method
* Negative results of tests for identification of Chlamydia species in a clinical specimen by organism-specific culture method, including identification tests performed on an isolate
* Negative results of tests for detection of Chlamydia species antigen in a clinical specimen by any organism-specific method
* Negative results of tests for detection of Chlamydia species nucleic acid in a clinical specimen by any organism-specific method

Each of these criteria have an associated value set, and are referencing a particular data category. Combining these, we can generate appropriate CQL to express the rule:

```cql
define "Negative results of tests for identification of Chlamydia trachomatis in a clinical specimen by organism-specific culture method, including identification tests performed on an isolate":
  [Observation: VS: Chlamydia trachomatis Infection (Tests for Chlamydia trachomatis by Culture and Identification Method)] O
    where O.status in { 'preliminary', 'final', 'amended', 'corrected' }
      and (
        // TODO: More investigation into the Value here
        O.interpretation in "Indeterminate or Equivocal Lab Result Value"
          or O.value in "Indeterminate or Equivocal Lab Result Value"
      )
```

To support this generation, we need to identify, for each criteria of each condition, the data category, the associated condition-specific value set, and the criteria expression to be used. From a Chlamydia condition description, this rule is represented as:

```drl
21. Negative results of tests for identification of Chlamydia trachomatis in a clinical specimen by organism-specific culture method, including identification tests performed on an isolate (i.e., ‘negative’ culture results)
  IF
    Patient has lab result with test name of [VS: Chlamydia trachomatis Infection (Tests for Chlamydia trachomatis by Culture and Identification Method)]
    AND
    lab result value of [VS: Negative or Undetected Lab Result Value]
  THEN report
```

|CriteriaId | Description | Data Template Id | Condition Parameters (Condition-Specific Value Set for the Criteria) |
|xxx-123 | Chlamydial cervicitis and urethritis, and lymphogranuloma... | Diagnosis | 1.2.640... |

### Rules (Logic Sets)

NOTE: This is the most variable aspect of the system, so don't necessarily need this logic evaluated in every case. Could focus exclusively on the criteria that would indicate additional filtering, and by default a trigger match is potentially reportable, unless there is a condition-specific rule filter in place.

Individual data criteria can then be combined by jurisdictions in different ways to support the reportability determination. Criteria can be combined with:

* **S**: Sufficient, meaning that any of a set of criteria may be present. These are reflected by combining the results of individual criteria with `or`
* **N**: Necessary, meaning that each of a set of criteria must be present. These are reflected by combining the results of individual criteria with `and`
* **O**: One or more, used in conjunction with **N**, and meaning that in addition to the necessary criteria, one or more alternative criteria may be present. These are reflected by combining the **N** criteria and the result of the `or` of all the **O** criteria, with `and`

To support construction of the CQL representation of the rule, we need to identify the criteria and the combination method used for each criteria in the rule.

For example:

|Criteria |Combination Method |
|----|----|
|Chlamydial conjunctivitis (as diagnosis or active problem) |N |
|Patient age < 1 year |N |

For the Chlamydial conjunctivitis criteria:

```cql
define "Chlamydial conjunctivitis (as a diagnosis or active problem)":
  exists (
    [Encounter: reasonCode in "VS: Chlamydia trachomatis Infection [Conjunctivitis] (Disorders) (SNOMED)"]
    [Encounter: reasonCode in "VS: Chlamydia trachomatis Infection [Conjunctivitis] (Disorders) (ICD10CM)"]
  )
  or exists (
    [Diagnosis: "VS: Chlamydia trachomatis Infection [Conjunctivitis] (Disorders) (SNOMED)"]
      union [Diagnosis: "VS: Chlamydia trachomatis Infection [Conjunctivitis] (Disorders) (ICD10CM)"]
  ) Dx
    where Dx.clinicalStatus ~ "Active"
      and Dx.verificationStatus ~ "Confirmed"
```

And for the Patient age < 1 year criteria:

```cql
define "Patient age < 1 year":
  AgeInYears() < 1
```

And then combining them according to the combination method rules:

```cql
define "Chlamydial conjunctivitis (as a diagnosis or active problem) AND patient age < 1 year":
  "Chlamydial conjunctivitis (as a diagnosis or active problem)"
    and "Patient age < 1 year"
```

### Jurisdiction Determination

The final aspect of the decision is the configuration of different rules in different jurisdictions. Following the steps to this point, we have for each rule, an expression of CQL that returns true if the source data for the patient contains the configured criteria. Because reportability must be determined for both the jurisdiction of care and the jurisdiction of residence, we need to know Patient address, as well as the Location address where the care was provided. We access this information through the `Patient.address` element, and through the `Encounter.location.location` reference to a `Location` resource, and use the `address` element there.

Jurisdiction determination is a complex process, but a suitable determination algorithm for the local rules would be to use a zipcode if there is a jurisdiction configured for that zipcode, falling back to a state jurisdiction code. Note that this also needs to account for the possibility that a zipcode is in multiple jurisdictions, which would result in multiple reportability responses. Note that although this approach isn't 100% accurate, in that it will sometimes result in a report to a jurisdiction that will ultimately be determined not reportable, it at least provides a suitable first pass that can be evaluated locally.

To support local determination of jurisdiction, we need, for each jurisdiction, a unique identifier, a description, whether the jurisdiction is a state or local jurisdiction, and what the state and configured zipcodes are for that jurisdiction:

The [Jurisdiction Types](CodeSystem-ersd-jurisdiction-types.html) CodeSystem defines the following jurisdiction types:
BURROUGH,
CITY,
COUNTY,
DISTRICT,
PARISH,
STATE

State/Territory is covered by the STATE code and any non-state code is considered "local" for the purposes of matching, and matching at the local level is always done by zipcode/postalcode.

Use State value set for the value of State column

|Identifier |Description |Type | State |Zipcodes |
|---|---|---|---|---|
|UT | Utah State Health Department |State | UT | 84057,84058,84059 |
|UTC | Utah County Health Department |Local | UT | 84057,84058,84059 |
|ID | Idaho |State | ID | |
|IDC | Idaho County Health Department |Local | ID | 83701 |

For a given event:
* If the event occurs in a zipcode that is configured, any local or state jurisdiction with that zipcode indicates a reportable event
* Otherwise, if the event occurs in a state that is configured, any state jurisdiction with that state indicates a reportable event

Event processing needs to know for jurisdiction of residence and jurisdiction of care, what rules to run

NOTE: The feature to provide a copy of a reportable event from a local jurisdiction to a state jurisdiction is implemented in the reporting platform, not part of this site-based jurisdiction determination logic

Given the above example configuration, the following examples illustrate the expected behavior, assuming that the jurisdiction or residence and the jurisdiction of care are the same:

Example 1: An event occurring in Orem UT, 84057
* { UT, UTC }

Example 2: An event occurring in Moab UT, 84532
* { UT }

Example 3: An event occurring in Boise ID, 83701
* { IDC }

Example 4: An event occurring in Idaho Falls ID, 83403
* { ID }

### Jurisdiction Configuration

Once we know the set of rules, and the set of configurations of those rules for each jurisdiction, and the rules for determining which jurisdictions are applicable for patient and encounter data, then we can apply that information to construct a complete CQL expression of the site-specific reportability decision criteria. For example:

```cql
define "Chlamydial conjunctivitis (as a diagnosis or active problem) AND patient age < 1 year (with Jurisdictions)":
  "Chlamydial conjunctivitis (as a diagnosis or active problem) AND patient age < 1 year"
    and exists ((
      GetJurisdictionCodes(Patient.address)
        union GetJurisdictionCodes(GetLocation(Encounter.location.location))
    ) JC
      where JC in { 'A', 'B', 'C' }
```

Note that GetJurisdictionCodes will need to account for the possibility of multiple addresses for both the patient and location.
Note explicitly that since there is no requirement for address use, type, and period, the logic will ignore those elements of addresses and process for any address it is given.

In this example, assume a list of hypothetical jurisdictions 'A', 'B', and 'C' are all configured to report with this rule.

To construct this, we would need to identify, for each jurisdiction, which rules they are configured to run.

### Evaluation

The criteria for each condition can then be combined into a single, non-condition-specific expression that could be run on any event, and would return true if that event was reportable according to any condition-specific criteria configured for the jurisdictions of care and residence of the event:

```cql
define "IsReportable":
  "Chlamydial conjunctivitis (as a diagnosis or active problem) AND patient age < 1 year (with Jurisdictions)"
    or "Identification of Chlamydia species in a clinical specimen by culture method, including identification tests performed on an isolate (with Jurisdictions)"
    or <other Chlamydia condition criteria>...
    or <other condition criteria>...
```
### Example

See the [eRSD PlanDefinition Example](PlanDefinition-plandefinition-ersd-instance-example.html) for an example implementation

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/StructureDefinition-ecr-messageheader-intro.md

This profile requires data elements destination, sender, source, and focus. The focus of an eCR MessageHeader profile is either an eICR Document Bundle or an RR Document Bundle.

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/StructureDefinition-eicr-composition-intro.md

This profile describes the content requirements for the eICR including:
* patient demographics
* patient pregnancy status
* patient work information
    * current occupation, current industry, current employer name, phone, and address, occupational exposure ([Past or Present Job](http://hl7.org/fhir/us/odh/StructureDefinition/odh-PastOrPresentJob))
        * Note: An Occupational Hazard is a source of potential harm to one’s health that may be encountered at work. An Occupational Exposure is a known interaction with an occupational hazard in a way that increases the risk of harm.
    * usual occupation, usual industry ([Usual Work](http://hl7.org/fhir/us/odh/StructureDefinition/odh-UsualWork))
* patient travel history
* patient exposure/contact information
* provider and facility information
* laboratory orders, tests, and results
* signs, symptoms, and diagnoses
* medication and immunization information
* flags for the existence of reportable condition trigger codes in diagnoses, ordered/resulted laboratory tests, medications, immunizations, and procedures
    * flags contain RCTC OID and RCTC version
    * codes indicating whether the eICR was manually or alternately initiated

In the case where a trigger code was previously entered in error and has now been corrected, set verificationStatus or status (depending on profile type) of the profile to 'entered-in-error' and set the [eICR Initiation Type extension](StructureDefinition-eicr-initiation-type-extension.html) to PHC1464.

Where a trigger occurs outside of an encounter and Encounter.class is set to “PHC2237”, system=”2.16.840.1.114222.4.5.274” (External Encounter) the responsible provider and facility information is contained in the eICR Composition.author. See table:

<table style="width:100%" border="1">
    <thead>
        <tr>
            <th style="width:auto">Data Element</th>
            <th>Note</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Composition.author</td>
            <td>In a public health case report, the author may be the provider, software, or a person in the role of a public health reporter, such as an infection control professional (ICP), a medical assistant, an office administrator, or another staff person who assists a provider with public health reporting.</td>
        </tr>
        <tr>
            <td>Composition.author[PractitionerRole]</td>
            <td>[External encounter case] Provider: Provider responsible for the patient&#39;s care when the case was triggered.</td>
        </tr>
        <tr>
            <td>Composition.author[PractitionerRole].identifier</td>
            <td>[External encounter case] Provider Id: Identifier of the provider responsible for the patient&#39;s care when the case was triggered</td>
        </tr>
        <tr>
            <td>Composition.author[PractitionerRole].practitioner[Practitioner].identifier</td>
            <td>[External encounter case] Provider Address: Address of the provider responsible for the patient&#39;s care when the case was triggered.</td>
        </tr>
        <tr>
            <td>Composition.author[PractitionerRole].telecom</td>
            <td>[External encounter case] Provider Telecom: A telecom address (phone, email, fax, etc.) for the provider responsible for the patient&#39;s care when the case was triggered.</td>
        </tr>
        <tr>
            <td>Composition.author[PractitionerRole].practitioner[Practitioner].name</td>
            <td>[External encounter case] Provider Name: Name of the provider responsible for the patient&#39;s care when the case was triggered</td>
        </tr>
        <tr>
            <td>Composition.author[PractitionerRole].organization[Organization]</td>
            <td>[External encounter case] Facility: The facility in which care was provided when the case was triggered</td>
        </tr>
        <tr>
            <td>Composition.author[PractitionerRole].organization[Organization].identifier</td>
            <td>[External encounter case] Facility Id: Identification code for the facility in which care was provided when the case was triggered</td>
        </tr>
        <tr>
            <td>Composition.author[PractitionerRole].organization[Organization].address</td>
            <td>[External encounter case] Facility Address: The physical location of the facility in which care was provided when the case was triggered</td>
        </tr>
    </tbody>
</table>










---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/StructureDefinition-eicr-country-of-nationality-intro.md

This profile should be used when the patient has recent travel history.

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/StructureDefinition-eicr-country-of-residence-intro.md

This profile should be used when the patient has recent travel history.

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/StructureDefinition-eicr-encounter-intro.md

This profile is based on and further constrains the US Public Health Encounter profile.

A trigger on an encounter diagnosis is indicated by the eICR Trigger Code Flag Extension in the diagnosis.

Where a trigger occurs outside of an encounter set Encounter.class to "PHC2237”, system=”2.16.840.1.114222.4.5.274” (External Encounter) and omit period, participant, location, and serviceProvider. In this case, the responsible provider and facility information is contained in the eICR Composition.author.

<table style="width:100%" border="1">
    <thead>
        <tr>
            <th style="width:auto">Data Element</th>
            <th>Note</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Encounter.participant:sliceResponsibleProvider.individual[PractitionerRole]</td>
            <td>Provider: Provider responsible for the patient&#39;s care when the case was triggered.</td>
        </tr>
        <tr>
            <td>Encounter.participant:sliceResponsibleProvider.individual[PractitionerRole].practitioner[Practitioner].identifier</td>
            <td>Provider Id: Identifier of the provider responsible for the patient&#39;s care when the case was triggered</td>
        </tr>
        <tr>
            <td>Encounter.participant:sliceResponsibleProvider.individual[PractitionerRole].location[Location].address</td>
            <td>Provider Address: Address of the provider responsible for the patient&#39;s care when the case was triggered</td>
        </tr>
        <tr>
            <td>Encounter.participant:sliceResponsibleProvider.individual[PractitionerRole].telecom</td>
            <td>Provider Telecom: A telecom address (phone, email, fax, etc.) for the provider responsible for the patient&#39;s care when the case was triggered</td>
        </tr>
        <tr>
            <td>Encounter.participant:sliceResponsibleProvider.individual[PractitionerRole].practitioner[Practitioner].name</td>
            <td>Provider Name: Name of the provider responsible for the patient&#39;s care when the case was triggered</td>
        </tr>
        <tr>
            <td>Encounter.participant:sliceResponsibleProvider.individual[PractitionerRole].organization[Organization]</td>
            <td>Provider Facility/Office: The office or facility of the provider responsible for the patient&#39;s care when the case was triggered (where care was provided to the patient)</td>
        </tr>
        <tr>
            <td>Encounter.participant:sliceResponsibleProvider.individual[PractitionerRole].organization[Organization].name</td>
            <td>Provider Facility/Office Name: The name of the office or facility of the provider responsible for the patient&#39;s care when the case was triggered (where care was provided to the patient)</td>
        </tr>
        <tr>
            <td>Encounter.participant:sliceResponsibleProvider.individual[PractitionerRole].organization[Organization].address</td>
            <td>Provider Facility/Office Address: The address of the office or facility of the provider responsible for the patient&#39;s care when the case was triggered (where care was provided to the patient)</td>
        </tr>
        <tr>
            <td>Encounter.participant:sliceResponsibleProvider.individual[PractitionerRole].organization[Organization].telecom</td>
            <td>Provider Facility/Office Address: The telecom of the office or facility of the provider responsible for the patient&#39;s care when the case was triggered (where care was provided to the patient)</td>
        </tr>
        <tr>
            <td>Encounter.location.location[Location]</td>
            <td>Facility: The facility in which care was provided when the case was triggered</td>
        </tr>
        <tr>
            <td>Encounter.location.location[Location].name</td>
            <td>Facility Name: The name of the facility in which care was provided when the case was triggered</td>
        </tr>
        <tr>
            <td>Encounter.location.location[Location].identifier</td>
            <td>Facility Id: Identification code for the facility in which care was provided when the case was triggered</td>
        </tr>
        <tr>
            <td>Encounter.location.location[Location].type</td>
            <td>Facility Type: The type of facility in which care was provided when the case was triggered</td>
        </tr>
        <tr>
            <td>Encounter.location.location[Location].address</td>
            <td>Facility Address: The physical location of the facility in which care was provided when the case was triggered</td>
        </tr>
        <tr>
            <td>Encounter.serviceProvider[Organization]</td>
            <td>Healthcare Organization: The umbrella organization under which the facility where care was provided operates</td>
        </tr>
        <tr>
            <td>Encounter.serviceProvider[Organization].identifier</td>
            <td>Healthcare Organization Id: Identification code for the umbrella organization under which the facility where care was provided operates</td>
        </tr>
        <tr>
            <td>Encounter.serviceProvider[Organization].name</td>
            <td>Healthcare Organization Contact Name: The contact name for the for the umbrella organization under which the facility where care was provided operates</td>
        </tr>
        <tr>
            <td>Encounter.serviceProvider[Organization].telecom</td>
            <td>Healthcare Organization Contact Telecom: A contact telecom address (phone, email, fax, etc.) for the umbrella organization under which the facility where care was provided operates</td>
        </tr>
        <tr>
            <td>Encounter.serviceProvider[Organization].address</td>
            <td>Healthcare Organization Contact Address: The contact address for the umbrella organization under which the facility where care was provided operates</td>
        </tr>
    </tbody>
</table>














---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/StructureDefinition-eicr-initiation-type-extension-intro.md

When code is set to PHC1464, it indicates either:
* the eICR was manually initiated by an action of the provider of care because they suspect there may be a reportable condition
* a code leading to the automatic creation of an eICR had been previously entered-in-error and has now been corrected

When code is set to PHC2235, it indicates that the eICR was initiated by automated, forced reporting. Unlike eICRs manually initiated by a provider, PHC2235 will be routed only to the public health agency of the jurisdiction of care unless another reportable condition is found. The eICR could also contain RCTC trigger codes.

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/StructureDefinition-eicr-trigger-code-flag-extension-intro.md

It contains the trigger code which is the same as the trigger code in the resource and is used to identify which code(s) in a resource that allows multiple trigger codes (e.g. US Core Observation Lab where a trigger code could be contained in either the code (lab test) or the value (lab test result) or in the case of a battery or panel of tests, in the hasMember as another US Core Observation Lab code or value). It also contains the RCTC OID and RCTC version of the value set from which the code was matched. 

It is available for use in the following places:

* eICR Encounter
  * flags a code contained in Condition.code (eICR Condition) which is contained in Encounter.diagnosis (eICR Encounter) - diagnosis
* Problem Section entry
  * flags a code contained in Condition.code (eICR Condition) - diagnosis
* Plan of Treatment Section entry
  * flags a code contained in ServiceRequest.code (eICR ServiceRequest) - test being requested
* Results Section entry
  * flags codes contained in:
    * Observation.code (US Core Laboratory Result Observation Profile code) - test performed/battery or panel name
    * Observation.value (US Core Laboratory Result Observation Profile value) - test result
    * Observation.code referenced in containing Observation.hasMember (US Core Laboratory Result Observation Profile code) - member of panel test performed
    * Observation.value referenced in containing Observation.hasMember (US Core Laboratory Result Observation Profile value) - member of panel test result
* Medications Section entry
  * flags a code contained in MedicationAdministration.medicationCodeableConcept - medication
* Immunization Section entry
  * flags a code contained in US Core Immunization (Immunization.vaccineCode) - vaccine
* Procedures Section entry
  * flags a code contained in US Core Procedure (Procedure.code) - procedure

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/StructureDefinition-rr-eicr-processing-status-extension-intro.md

If the eICR was not processed or was processed with a warning, the reason will be contained in the eICR Processing Status Reason. If there is any output from a validator, that output will be contained in the eICR Validation Output.

If any of the trigger codes used to generate the eICR are from an outdated version of the RCTC or the codes are deprecated by the coding system in the latest version of the RCTC (inactive status), these are flagged and and the eICR Processing Status Reason Detail will hold the details of the outdated and expected versions of the RCTC. Inactive status in the RCTC signifies that a code as been deprecated by the source coding system. Codes with an inactive status will remain in the RCTC and be available for triggering because EHR systems do not update to the most recent version of the coding systems immediately, and thus may continue to trigger on a deprecated code.

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/StructureDefinition-rr-eicr-processing-status-observation-intro.md

If it was not processed or was processed with a warning, the reason and details will be contained in the related eICR Processing Status Reason profile.

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/StructureDefinition-rr-eicr-processing-status-reason-observation-intro.md

If any of the trigger codes used to generate the eICR are from an outdated version of the RCTC or the codes are deprecated by the coding system in the latest version of the RCTC (inactive status), these are flagged and component observations will hold the details of the outdated and expected versions of the RCTC. Inactive status in the RCTC signifies that a code as been deprecated by the source coding system. Codes with an inactive status will remain in the RCTC and be available for triggering because EHR systems do not update to the most recent version of the coding systems immediately, and thus may continue to trigger on a deprecated code.

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/StructureDefinition-rr-relevant-reportable-condition-observation-intro.md

This profile contains one (if both the patient's home and the provider location have the same responsible agency) or more (if the patient's home and provider location have different responsible agencies) RR Reportability Information Observations. It may also contain external resources specific to the condition.

Set dataAbsentReason='not-applicable' when the eICR is manually initiated or no reportable condition has been identified (e.g. when there is no rule met). Use valueCodeableConcept.text if there is no available condition code.

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/StructureDefinition-rr-reportability-information-observation-intro.md

This profile contains the Responsible Agency, the Rules Authoring Agency, and the Routing Entity.

Also contained in this profile are the Determination of Reportability, Reporting Timeframe, and External Resources.

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/StructureDefinition-rr-responsible-agency-organization-intro.md

This can be the PHA relevant to the location in which care was provided and/or where the patient lives. It is based on the [eCR Organization](StructureDefinition-us-ph-organization.html) profile with a further restriction setting the **type** data element to 'Responsible Agency'.

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/StructureDefinition-rr-routing-entity-organization-intro.md

This entity may just be acting to route the eICR and Reportability Response on their way to a Responsible Agency.  It is based on the [eCR Organization](StructureDefinition-us-ph-organization.html) profile with a further restriction setting the **type** data element to 'Routing Entity'.

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/StructureDefinition-rr-rules-authoring-agency-organization-intro.md

This may be a state or local PHA. In the majority of cases the Rules Authoring Agency will be the same as the Responsible Agency. Usually, a Local Public Health Agency will inherit rules from its relevant state agency, but a Local agency can adopt, replace or supplement relevant state rules. It is based on the [eCR Organization](StructureDefinition-us-ph-organization.html) profile with a further restriction setting the **type** data element to 'Rules Authoring Agency'.

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/StructureDefinition-us-ph-exposure-contact-information-intro.md

The type of exposure/contact is contained in Observation.code (environmental, activity, event, location, person, animal, etc.). This value could come from one of the following value sets:
* [Exposure Setting (COVID-19)](https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7942)
* [Exposure Location](https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.3209)
or may be selected from another suitable value set (e.g.: [Social History Type](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.88.12.80.60/expansion)) 

If the exposure/contact is an entity (person, animal, location) then it is represented in Observation.focus which is a reference to a Patient, RelatedPerson, Location, Group, etc.. (An animal would be represented by a RelatedPerson that contains the Extension Practitioner Animal Species). This focus contains either:
* the patient's contact with an entity (person, animal, or substance) or presence at a location where exposure to an agent could have occurred (aquisition exposure)
* the patient's contact with an entity (person, animal, or substance) or presence at a location where transmission from the patient could have occurred (transmission exposure)

Free text information about the exposure/contact can be recorded in Observation.valueString and the date or period of exposure is held in Observation.effective[x]. If an address where the exposure/contact took place is known then it can be contained in the address-extension.

The possible agent of concern in the exposure is recorded in Observation.component.

The following are some exposures that might be captured in this profile:

* Environmental exposures
    * Living facilities
    * Work facilities
    * School facilities
* Contact exposures
    * Person
    * Animal
* Event Exposures
    * Sporting event
    * Rally
    * Wedding
    * Activity

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/subscription_service.md

This guide assumes that EHRs or other systems will be able to generate timely notifications to begin the triggering process when resources containing codes in the trigger code value sets appear in the system. Those notifications would go to an associated system or process in clinical care that could begin the initial case reporting process, and would likely access more data from the EHR.


One approach for this is using the current FHIR R4 Subscription model, where a user would create a Subscription resource with a FHIR query string as the criteria. Subscription is being reworked for FHIR R5, and will be based on Topics, which are represented using a Topic resource that users can subscribe to and filter on. For this IG, we will specify the FHIR query strings needed for the current version of FHIR, and the Topic criteria that would be needed in a subsequent FHIR R5 implementation.

## Topics:
**Diagnosis_Problem**

`Condition?code:in=http://hl7.org/fhir/us/ecr/ValueSet/valueset-dxtc-example`

**Organism_Substance**

`Condition?code:in=http://hl7.org/fhir/us/ecr/ValueSet/valueset-ostc-example`

**Lab Order Test**

`ServiceRequest?code:in=http://hl7.org/fhir/us/ecr/ValueSet/valueset-lotc-example`

**Lab Obs Test Name**

`Observation?code:in=http://hl7.org/fhir/us/ecr/ValueSet/lrtc`

**Medications**

`MedicationAdministration?code:in=http://hl7.org/fhir/us/ecr/ValueSet/valueset-mrtc-example`

`MedicationDispense?code:in=http://hl7.org/fhir/us/ecr/ValueSet/valueset-mrtc-example`

`MedicationRequest?code:in=http://hl7.org/fhir/us/ecr/ValueSet/valueset-mrtc-example`

`MedicationStatement?code:in=http://hl7.org/fhir/us/ecr/ValueSet/valueset-mrtc-example`

**Immunization**

`Immunization?vaccineCode:in=http://hl7.org/fhir/us/ecr/ValueSet/valueset-mrtc-example`

**Suspected_Disorder**

`Condition?code:in=http://hl7.org/fhir/us/ecr/ValueSet/valueset-sdtc-example`
`MedicationRequest?code:in=http://hl7.org/fhir/us/ecr/ValueSet/valueset-mrtc-example`
`Observation?code:in=http://hl7.org/fhir/us/ecr/ValueSet/valueset-lotc-example`


---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/terminology.md

### IG Defined Value Sets

* [eCR MessageHeader Event](ValueSet-valueset-ecr-messageheader-event.html)
* [US Public Health Pregnancy Status](ValueSet-us-ph-pregnancy-status.html) 
* [US Public Health PlanDefinition Action](ValueSet-us-ph-plandefinition-action.html)  
* [US Public Health Message Types](ValueSet-us-ph-message-types-valueset.html) 
* [US Public Health TriggerDefinition NamedEvent](ValueSet-us-ph-triggerdefinition-namedevent.html) 

### HL7 Defined Value Sets

* [Document RelationshipType](http://hl7.org/fhir/ValueSet/document-relationship-type|4.0.1)
* [LOINC Diagnostic Report Codes](http://hl7.org/fhir/ValueSet/report-codes)
* [MessageSignificanceCategory](http://hl7.org/fhir/ValueSet/message-significance-category)
* [ServiceDeliveryLocationRoleType](http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType)
* [Tribal Entity US](http://terminology.hl7.org/ValueSet/v3-TribalEntityUS)
* [USPS Two Letter Alphabetic Codes](http://hl7.org/fhir/us/core/ValueSet/us-core-usps-state)

### External Value Sets

* [Determination of Reportability](https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.113883.10.20.15.2.5.3)
* [Disability Status](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1099.49/expansion/Latest)
* [Estimated Date of Delivery Including Method](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.11.20.9.81/expansion/Latest)
* [Estimated Gestational Age Code Including Method](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.11.20.9.82/expansion/Latest)
* [External Resource Type](https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.113883.10.20.15.2.5.4)
* [Geographical Location History](https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.3201)
* [Initiation Types](https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.113883.10.20.15.2.5.11)
* [Location Relevance](https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.113883.10.20.15.2.5.6)
* [Location Relevance](https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.113883.10.20.15.2.5.6)
* [Postpartum Status](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.11.20.9.87/expansion/Latest)
* [Pregnancy Outcome](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.11.20.9.86/expansion/Latest)
* [Pregnancy Status Determination Method](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.11.20.9.80/expansion/Latest)
* [Processing Status Reason Detail Type](https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.113883.10.20.15.2.5.10)
* [Processing Status Reason](https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.113883.10.20.15.2.5.7)
* [Processing Status](https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.113883.10.20.15.2.5.8)
* [Reportability Priority](https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.113883.10.20.15.2.5.5)
* [Residence and Accommodation Type](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.11.20.9.49/expansion/Latest)
* [Therapeutic Response to Medication](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.10.20.15.2.5.12/expansion/Latest)
* [Transport Vehicle Type](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1099.50/expansion/Latest)
* [Travel Purpose](https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8064)
* [Yes No Unknown (YNU)](https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.888)

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/the_specification.md

This section defines the specific requirements for systems wishing to conform to this IG.


### Context

#### Pre-reading
Before reading this implementation guide, implementers should first be familiar with two other key portions of the specification:

* The pages listed under the Transaction Profiles tab provide the context and general process flow enabled by the formal specification.

* The pages listed under the Implementation Guidance tab provide design considerations, narrative guidance, and query and rule filter generation information.


#### Conventions
This implementation guide uses specific terminology to flag statements that have relevance for the evaluation of conformance with the guide:

* **SHALL** indicates requirements that must be met to be conformant with the specification.

* **SHOULD** indicates behaviors that are strongly recommended (and which may result in interoperability issues or sub-optimal behavior if not adhered to), but which do not, for this version of the specification, affect the determination of specification conformance.

* **MAY** describes optional behaviors that are free to consider but where the is no recommendation for or against adoption.


#### Claiming Conformance 

Actors and Systems asserting conformance to this implementation guide have to implement the requirements outlined in the corresponding capability statements. The following definition of MUST SUPPORT is to be used in the implementation of the requirements.

##### MUST SUPPORT Definition

* Systems SHALL be capable of populating data elements as specified by the profiles.
* Systems SHALL be capable of processing resource instances containing the MUST SUPPORT data elements without generating an error or causing the application to fail. In other words, Systems SHOULD be capable of displaying the data elements for human use or storing it for other purposes.
* In situations where information on a particular data element is not present and the reason for absence is unknown, Systems SHALL NOT include the data elements in the resource instance.
* When accessing eCR data, Systems SHALL interpret missing data elements within resource instances as data not present.


#### Profiles
This specification makes significant use of [FHIR profiles]({{site.data.fhir.path}}profiling.html) and terminology artifacts to describe the content to be shared as part of eCR workflows. The implementation guide is based on [FHIR R4]({{site.data.fhir.path}}).

The full set of profiles defined in this implementation guide can be found by following the links on the [FHIR Artifacts](artifacts.html) page.


#### US Core
This IG also leverages the [US Core]({{site.data.fhir.ver.hl7fhiruscore}}) set of profiles defined by HL7 for sharing individual health data in the U.S. Where US Core profiles exist, this IG either leverages them directly or uses them as a base for any additional constraints needed.

Where US Core profiles do not yet exist, new profiles have been created.

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/transaction_profiles.md

## Grouped Profiles and Extensions

The following pages contain profiles, extensions, explanatory text, and diagrams that are grouped by transaction:

* <a href="electronic_initial_case_report_eicr_transaction_and_profiles.html">Electronic Initial Case Report (eICR) Transaction and Profiles</a>
* <a href="reportability_response_rr_transaction_and_profiles.html">Reportability Response (RR) Transaction and Profiles</a>
* <a href="electronic_reporting_and_surveillance_distribution_ersd_transaction_and_profiles.html">Electronic Reporting and Surveillance Distribution (eRSD) Transaction and Profiles</a>
    * <a href="subscription_service.html">Subscription Service</a>
* <a href="transport_options.html">Transport Options</a>

---

File: repos/HL7_SLASH_case-reporting/input/pagecontent/transport_options.md

There are two supported transport options that can be used individually or in combination. This flexibility is needed to support point-to-point transport as well as transport through Health Information Exchanges and Health Information Networks.

### FHIR Messaging Option

One option for transmitting the content in this implementation guide is the use of FHIR Messaging. FHIR Messaging involves the use of a top-level FHIR Message bundle and then a small FHIR Messaging header. FHIR Messaging enables the movement of content through an information exchange intermediary and allows, but does not require, a store and forward exchange paradigm. The FHIR Message header includes the identity of the ultimate intended recipient and other information helpful for message exchange. All resources should be populated in the FHIR Message bundle because subsequent retrieval of resources back through an intermediary may not be enabled.

The following profiles have been defined for the FHIR Messaging Option:

#### Profiles
<ul>
  <li><a href="StructureDefinition-us-ph-reporting-bundle.html">US Public Health Reporting Bundle</a></li>
  <li><a href="StructureDefinition-ecr-messageheader.html">eCR MessageHeader</a> (further constrains <a href="StructureDefinition-us-ph-messageheader.html">US Public Health MessageHeader</a>)</li>
</ul>

The first resource in the <a href="StructureDefinition-us-ph-reporting-bundle.html">US Public Health Reporting Bundle</a> is the <a href="StructureDefinition-us-ph-messageheader.html">US Public Health MessageHeader</a>, which in the eCR case is the <a href="StructureDefinition-ecr-messageheader.html">eCR MessageHeader</a>. The focus of the <a href="StructureDefinition-ecr-messageheader.html">eCR MessageHeader</a> is either the <a href="StructureDefinition-eicr-document-bundle.html">eICR Document Bundle</a> or  <a href="StructureDefinition-rr-document-bundle.html">RR Document Bundle</a>.

The <a href="StructureDefinition-eicr-document-bundle.html">eICR Document Bundle</a> contains the <a href="StructureDefinition-eicr-composition.html">eICR Composition</a> and the <a href="StructureDefinition-rr-document-bundle.html">RR Document Bundle</a> contains the <a href="StructureDefinition-rr-composition.html">RR Composition</a>.

### Basic REST Option

The second option for transmitting the content in this implementation guide is described here as Basic REST. In this case, a point-to-point RESTful exchange is supported. If the immediate inclusion of all resource content must be ensured, then a top level bundle and insistence on their inclusion will be the responsibility of the transmitting server.

The following profiles have been defined for the RESTful Submit Option:

#### Profiles
<ul>
  <li><a href="StructureDefinition-eicr-document-bundle.html">eICR Document Bundle</a></li>
	<li><a href="StructureDefinition-rr-document-bundle.html">RR Document Bundle</a></li>
</ul>

The <a href="StructureDefinition-eicr-document-bundle.html">eICR Document Bundle</a> contains the <a href="StructureDefinition-eicr-composition.html">eICR Composition</a> and the <a href="StructureDefinition-rr-document-bundle.html">RR Document Bundle</a> contains the <a href="StructureDefinition-rr-composition.html">RR Composition</a>.


---

