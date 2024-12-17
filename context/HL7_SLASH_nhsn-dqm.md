File: repos/HL7_SLASH_nhsn-dqm/sushi-config.yaml

canonical: http://hl7.org/fhir/us/nhsn-dqm
fhirVersion: 4.0.1

applyExtensionMetadataToRoot: false
id: hl7.fhir.us.nhsn-dqm
#packageId: hl7.fhir.us.nhsn-dqm
title: National Healthcare Safety Network (NHSN) Digital Quality Measure (dQM) Reporting Implementation Guide
name: NHSNdQM
status: active
date: 2024-03-28
copyrightYear: 2024+
version: 1.0.0-ballot
releaseLabel: STU1 Ballot
jurisdiction: urn:iso:std:iso:3166#US "United States of America"
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    valueCode: trial-use
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
    valueInteger: 1
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: pher
publisher:
  name: HL7 International / Public Health
  url: http://www.hl7.org/Special/committees/pher


dependencies:
  hl7.fhir.us.core:
    version: 6.1.0
    id: uscore
  fhir.cqf.common:
    version: 4.0.1
    uri: http://fhir.org/guides/cqf/common/ImplementationGuide/cqf.fhir.common
    id: cqf
  hl7.fhir.uv.crmi:
    version: 1.0.0
    id: crmi
  hl7.fhir.us.cqfmeasures:
    version: 4.0.0
    id: cqfm
  hl7.fhir.us.davinci-deqm:
    version: 5.0.0-ballot
    id: deqm
  hl7.fhir.us.qicore: 6.0.0
  hl7.fhir.uv.extensions:  5.1.0

description: "This content describes the specifications for the for the Health Level Seven International® (HL7) Fast Healthcare Interoperability Resources® (FHIR) digital quality measures (dQMs) reported to the National Healthcare Safety Network (NHSN)."
parameters:
  path-expansion-params: '../../exp-params.json'  #Support for US SNOMED CT - path is relative to [base]/fsh-generated/resources
  apply-jurisdiction: true
  apply-publisher: true
  path-liquid: templates\liquid
  excludettl: 'true'
  excludemap: 'true'
  auto-oid-root: '2.25.316204395913842452684237438142819890580'
  default-contact: true
  default-publisher: true
  #default-jurisdiction: true
  default-copyright: true

  path-resource: 
  - input/resources/device
  - input/resources/library
  - input/resources/measure

menu:
  IG Home: index.html
  Table of Contents: toc.html
  Actors and Use Cases: use_cases.html
  Specification: specification.html
  Security: security.html
  Artifact Index: artifacts.html
  Downloads: downloads.html
  Support:
    FHIR Spec: http://hl7.org/fhir/R4/index.html
    CQL Spec: http://cql.hl7.org/index.html
    FHIR Clinical Guidelines: http://hl7.org/fhir/uv/cpg


pages:
  index.md:
    title: NHSN dQM Reporting Home
  specification.md:
    title: Specification 
  use_cases.md:
    title: Actors and Use Cases
  downloads.md:
    title: Useful Downloads
  security.md:
    title: Security and Privacy
  ImplementationGuide-hl7.fhir.us.nhsn-dqm.md:
    title: NHSN Implementation Guide Resource
  changes.md:
    title: IG Change History 

resources:

  Device/cqf-tooling:
    name: "CQF Tooling Device"
    description: "Example of a Software System Device instance for describing tooling that was used to process artifacts."


---

// File: input/pagecontent/changes.md

### Changes ###
This provides a list of changes to the NHSN Measures IG since its initial release
* Initial version (current build)


---

// File: input/pagecontent/downloads.md

### Downloads
* The full [Implementation Guide](full-ig.zip)
* FHIR Resource Definitions [(JSON)](definitions.json.zip) [(XML)](definitions.xml.zip) [(TTL)](definitions.ttl.zip)
* FHIR IG Profile Examples [(JSON)](examples.json.zip) [(XML)](examples.xml.zip) [(TTL)](examples.ttl.zip)
* FHIR IG [Validator Pack](validator-hl7.fhir.us.nhsn-dqm.pack)

#### Package File
The following package file includes an NPM  (Node Package Manager) package file used by many of the FHIR tools. It contains all the value sets, profiles, extensions, list of pages and URLs in the implementation guide (IG), etc. defined as part of this version of the IG. This file should be the first choice whenever generating any implementation artifacts since it contains all of the rules about what makes the profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply to make a conformant implementation. See the overview on validating <a href="http://hl7.org/fhir/R4/validation.html">FHIR profiles and resources</a>:

* [Package](package.tgz)

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}

---

// File: input/pagecontent/ImplementationGuide-hl7.fhir.us.nhsn-dqm.md


|||
|---|---|
|*Official URL*: http://hl7.org/fhir/us/nhsn-dqm/ImplementationGuide/hl7.fhir.us.nhsn-dqm.json|*Version*: 1.0.0|
|*NPM package name*: hl7.fhir.us.nhsn-dqm|*ComputableName*: NHSNMeasures|
{:.grid}

CDC National Healthcare Safety Network (NHSN) Digital Quality Measures (dQM)

- [JSON](ImplementationGuide-hl7.fhir.us.nhsn-dqm.json)

### Cross Version Analysis

{% capture cross-version-analysis %}{% include cross-version-analysis.xhtml %}{% endcapture %}{{ cross-version-analysis | remove: '<p>' | remove: '</p>'}}

### IG Dependencies

This IG Contains the following dependencies on other IGs.

{% include dependency-table.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### Copyrights

{% capture ip-statement %}{% include ip-statements.xhtml %}{% endcapture %}

{{ ip-statement | remove: '<p>' | remove: '</p>'}}


### Parameter Settings

The following [IG Parameters](https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters) are set for this Implementation Guide:

{% for p in site.data.ig.definition.parameter %}
- code: {{p.code}}<br/>value: {{p.value }}
{%- endfor -%}


---

// File: input/pagecontent/index.md

### Overview

This implementation guide (IG) specifies standards for electronic submission of surveillance data to National Healthcare Safety Network (NHSN) of the Centers for Disease Control and Prevention (CDC). This is part of CDC’s efforts to modernize public health reporting by using Health Level Seven International® (HL7) Fast Healthcare Interoperability Resources® (FHIR) data-exchange standards. This project builds on existing work such as the [Quality Measure Implementation Guide]({{site.data.fhir.ver.cqmf}}) and [Data Exchange for Quality Measures Implementation Guide]({{site.data.fhir.ver.deqm}}) efforts. This IG contains a library of FHIR profiles and example digital quality measures (dQMs) for reporting to NHSN. It is expected that production dQMs from NHSN will eventually be hosted [here](https://www.cdc.gov/nhsn/fhirportal/dqm/ig) (though no content is there at the time of this ballot).

Note that reporting dQM data to NHSN requires enrollment in NHSN, signing of NHSN data-use agreements, and completion of the dQM reporting plans, which are part of the NHSN participation process and are not defined by this specification. For an overview of NHSN and full information on NHSN participation requirements, see  [here](https://www.cdc.gov/nhsn/fhirportal/about.html). Provisions of the Public Health Service Act protect all data reported to NHSN from discovery through the Freedom of Information Act (FOIA).

### Purpose ###

This specification defines the general requirements for submissions to NHSN directly from a facility or through an external dQM-evaluation engine. 

### Background ###

In alignment with CDC’s Data Modernization Initiative, NHSN is implementing automated measures for public health surveillance via digital quality measures (dQMs). These dQMs were created to minimize the burden of reporting; improve the accuracy, quality, and validity of data collected by NHSN; and increase speed and efficiency of public health surveillance. 

Specifications in this IG are a transition from static IGs for specific purposes, and onto a quality measure-driven approach. Specifications in this IG define the overarching framework based on the existing Quality Measure (QM) and Data Exchange for Quality Measures (DEQM) implementation guides and some baseline profiles, and value sets for NHSN. Once established, NSHN can then create dQMs with related value sets, Clinical Quality Language (CQL) libraries, and other artifacts that comply with this framework for specific use cases.

The dQMs are dynamic, executable artifacts that are not a balloted part of this specification (though this IG does contain example dQMs). Thus, the criteria in compliant measures can be adjusted as needed while minimizing ballot/publish/implement cycle. A separate IG will define the NHSN dQMs data requirements and will be hosted by NHSN.

Also, this project focuses on leveraging data compliant with existing EHR FHIR Application Programming Interfaces (APIs) wherever possible, such as US Core. While it is hoped that QI Core compatible content will become widely available from EHR FHIR APIs, this project does not currently require QI Core as a minimum baseline for data capture.

This project will require coordination between NHSN and other branches of CDC, along with CMS.

### Audience ###

The audience for this work is all developers who want to enable their software systems to report surveillance data to the NHSN via FHIR dQMs.

### Design Considerations ###

This IG defines the standard framework for reporting data to NHSN using a dQM with an initial population which may include all inpatient, emergency department, and observation encounters and line-level data that could be used for stratification, benchmarking and/or risk adjustment. This IG is not intended to define how to operationalize implementing reporting a specific NHSN dQM.

However, two example measures are provided in this IG: an acute care hospital (ACH) dQM and an automated bed capacity data collection measure. The ACH dQM defines the population of interest as all encounters with an inpatient, ED, or Observation status or an inpatient, ED, or Observation location. The bed-capacity data collection dQM defines the fields necessary for reporting such as AllBedsOccupied, AdultTotalOccupied, etc.

### Relationship to Other Standards ###

The framework for the HL7 FHIR dQMs reported to NHSN has the following dependencies: 

{% include dependency-table.xhtml %}

### Acknowledgements ###

This implementation guide is a product of the [HL7 International–Public Health Work Group](http://www.hl7.org/Special/committees/pher/).

Content in this implementation guide was produced and developed by Lantana Consulting Group under contract to the Division of Healthcare Quality Promotion (DHQP) in the National Center for Emerging and Zoonotic Infectious Diseases (NCEZID) at CDC.  

Primary Editor | Rick Geimer | Lantana Consulting Group | rick.geimer@lantanagroup.com
Primary Editor | Corey Spears | Lantana Consulting Group | corey.spears@lantanagroup.com
Co-Editor | Andrea Benin | Chief, Surveillance Branch, DHQP, CDC | aqb4@cdc.gov
Co-Editor | Kristina Betz | NHSN Measure Development and Validation Unit Lead, CDC | rly7@cdc.gov
Co-Editor | Amrit Kerr | Project Manager, Lantana Consulting Group | amrit.kerr@lantanangroup.com
Co-Editor | Sheila Abner | CDC | sha8@cdc.gov
Co-Editor | Nadine Shehab | Lantana Consulting Group | ftn0@cdc.gov
Co-Editor | Jennifer Watkins | CACI | nub7@cdc.gov
Co-Editor | Raymond Dantes | CDC | vic5@cdc.gov
Co-Editor | David deRoode | Lantana Consulting Group | david.deroode@lantanagroup.com
Co-Editor | Zabrina Gonzaga | Lantana Consulting Group | zabrina.gonzaga@lantanagroup.com
Co-Editor | Sean McIlvenna | Lantana Consulting Group | sean.mcilvenna@lantanagroup.com
Co-Editor | Shanai Thornton | Lantana Consulting Group | shanai.thornton@lantanagroup.com





---

// File: input/pagecontent/security.md

### Privacy and Security Considerations

Implementers **SHOULD** be familiar with and adhere primarily to any security and privacy guidelines defined below:
* [Security & Privacy module](http://hl7.org/fhir/R4/secpriv-module.html)
* [Security Principles](http://hl7.org/fhir/R4/security.html)
* [Implementer's Checklist](http://hl7.org/fhir/R4/safety.html)

---

// File: input/pagecontent/specification.md

This section of the implementation guide (IG) defines the specific conformance requirements for systems wishing to conform to this NHSN dQM Reporting IG. The bulk of it focuses on evaluating facility data against measure criteria and submitting those data to NHSN, though it also provides guidance on privacy, security, and other implementation requirements.

### Pre-reading

Before reading this formal specification, implementers should first familiarize themselves with two other key portions of the specification:

* The [Actors and Use Cases](use_cases.html) page provides context for the intent and general process flow of this formal specification, as well as details on the various actors involved.

### Conventions

This implementation guide (IG) uses specific terminology to flag statements that have relevance for the evaluation of conformance with the guide:

* **SHALL** indicates requirements that must be met to be conformant with the specification.

* **SHOULD** indicates behaviors that are strongly recommended (and which may result in interoperability issues or sub-optimal behavior if not adhered to), but which do not, for this version of the specification, affect the determination of specification conformance.

* **MAY** describes optional behaviors that are free to consider but are not a recommendation for or against adoption.

#### Must Support ###

The following rules regarding Must Support  elements apply to all Profiles in this guide. The Must Support definitions are not inherited from other IGs, even for profiles in this guide derived from another guide.

Sender:

* If the data element is available in the FHIR API/EHR, the data element *SHALL* be provided (either through submission or response to a query) for measure calculation or risk adjustment.
* If the sender does not capture/store the data, the data are not available, or sharing of the data is not authorized, the system **SHOULD NOT** send the element if the element is not marked as mandatory (lower cardinality of 0).

Receiver: 

* The receiver **SHALL** be capable of processing resource instances containing must-support data elements without generating an error or causing the application to fail.
* The receiver **SHALL** be able to process resource instances containing must-support data elements asserting missing information (data absent reason extension).

#### Profiles

This specification makes significant use of [FHIR profiles]({{site.data.fhir.path}}profiling.html) and terminology artifacts to describe the content to be shared as part of measure report submissions.

The full set of profiles defined in this IG can be found by following the links on the [Artifacts](artifacts.html) page.

#### Reporting Scenarios

The following reporting scenarios use the Actors defined on the [Actors and Use Cases](use_cases.html) page.

##### Pull from NHSN

In this scenario, both the dQM Evaluation Engine and the Measure Report Recipient reside within an NHSN controlled environment, and may be the same system. The dQM Evaluation Engine first retrieves the latest FHIR measures and related resources from the Measure Source and extracts the data requirements for each measure. The dQM Evaluation Engine queries the Data Source for data that it will evaluate against a measure and prepares Bundle containing MeasureReport and supporting resources, and then optionally performs pre-qualification (additional FHIR validation checks against measure-specific profiles) before making the data available to NHSN back end systems.

In this scenario the Data Source SHALL have a FHIR API that at a minimum provides read access to all resources required by the measure(s).

![Pull from NHSN](pull-from-nhsn.png){:style="float: none;"}

1. **Retrieve Measure Bundle:** The dQM Evaluation Engine uses an HTTP GET against the Measure Source for an [NHSNMeasureBundle](StructureDefinition-nhsn-measure-bundle.html) containing a [CRMIShareableMeasure](https://hl7.org/fhir/uv/crmi/StructureDefinition-crmi-shareablemeasure.html) and related resources. The exact Bundle(s) to retrieve is determined out of band by the facility and NHSN during onboarding and subsequent discussions. After retrieving the Bundle, the dQM evaluation engine parses the contents to determine which resources are needed from the Data Source, then proceeds to step 2.
2. **Query Data Source:** The dQM Evaluation Engine queries the FHIR API of the Data Source (likely a certified EHR in this scenario) using HTTP GET interactions to retrieve the [PatientsOfInterestList](StructureDefinition-poi-list.profile.xml.html) for each Measure retrieved in step 1 (the POI lists in question are determined by the facility and NHSN during onboarding), followed by the resources specified in the Measure(s) for each POI list. The dQM Evaluation Engine then evaluates those data against the Measure(s) and produces MeasureReport resources conforming to [DEQMIndividualMeasureReportProfile](https://hl7.org/fhir/us/davinci-deqm/StructureDefinition-indv-measurereport-deqm.html) for each patient that meets the measure criteria, along with a subject-list MeasureReport conforming to the [DEQMSubjectListMeasureReport](https://hl7.org/fhir/us/davinci-deqm/StructureDefinition-subjectlist-measurereport-deqm.html) profile containing references to all the individual MeasureReport resources. These MeasureReport resources, along with all the patient data references in them, are then placed in a Bundle resource conforming to the [NHSNMeasureReportBundle](StructureDefinition-nhsn-measurereport-bundle.html) profile for submission to NHSN before proceeding to step 3. Note: The Data Source MAY be accessed using a TEFCA compliant exchange through a QHIN, though the exact details of this is out of scope for this IG. 
3. **Submit MeasureReport Bundle:** The dQM Evaluation Engine uses an HTTP POST to submit the [NHSNMeasureReportBundle](StructureDefinition-nhsn-measurereport-bundle.html) to the MeasureReport Recipient. The MeasureReport Recipient validates the Bundle and proceeds to load the data into other NHSN systems (details of such systems are out of scope for this IG).

##### Push to NHSN

In this scenario both the Data Source and dQM evaluation engine reside at the reporting facility, and may be the same system (i.e. an EHR that performs it's own internal measure evaluation). The dQM Evaluation Engine first retrieves the latest FHIR measures and related resources from the Measure Source and extracts the data requirements for each measure.  The dQM Evaluation Engine and queries the Data Source for data that it will evaluate against a measure and prepares Bundle containing MeasureReport and supporting resources, then sends it to the Measure Report Recipient at NHSN. The Measure Report Recipient then optionally performs pre-qualification (additional FHIR validation checks against measure-specific profiles) before making the data available to NHSN back end systems. 

In this scenario the dQM Evaluation Engine SHALL perform a FHIR POST or PUT to push the measure report bundle to the Measure Report Recipient.

Since the submission bundles can be quite large, the Measure Report Recipient SHOULD support compression and accept the following header in the POST/PUT: 

Content-Encoding: gzip

![Push to NHSN](push-to-nhsn.png){:style="float: none;"}

1. **Retrieve Measure Bundle:** The dQM Evaluation Engine uses an HTTP GET against the Measure Source for an [NHSNMeasureBundle](StructureDefinition-nhsn-measure-bundle.html) containing a [CRMIShareableMeasure](https://hl7.org/fhir/uv/crmi/StructureDefinition-crmi-shareablemeasure.html) and related resources. The exact Bundle(s) to retrieve is determined out of band by the facility and NHSN during onboarding and subsequent discussions. Note: the Measure Source MAY be accessed using a TEFCA compliant exchange through a QHIN, though the exact details of this is out of scope for this IG. After retrieving the Bundle, the dQM evaluation engine parses the contents to determine which resources are needed from the Data Source, then proceeds to step 2.
2. **Query Data Source:** The dQM Evaluation Engine uses FHIR or other methods as determined by the facility to retrieve the [PatientsOfInterestList](StructureDefinition-poi-list.profile.xml.html) for each Measure retrieved in step 1 (the POI lists in question are determined by the facility and NHSN during onboarding), followed by the resources specified in the Measure(s) for each POI list. The dQM Evaluation Engine then evaluates those data against the Measure(s) and produces MeasureReport resources conforming to [DEQMIndividualMeasureReportProfile](https://hl7.org/fhir/us/davinci-deqm/StructureDefinition-indv-measurereport-deqm.html) for each patient that meets the measure criteria, along with a subject-list MeasureReport conforming to the [DEQMSubjectListMeasureReport](https://hl7.org/fhir/us/davinci-deqm/StructureDefinition-subjectlist-measurereport-deqm.html) profile containing references to all the individual MeasureReport resources. These MeasureReport resources, along with all the patient data references in them, are then placed in a Bundle resource conforming to the [NHSNMeasureReportBundle](StructureDefinition-nhsn-measurereport-bundle.html) profile for submission to NHSN before proceeding to step 3.
3. **Submit MeasureReport Bundle:** The dQM Evaluation Engine uses an HTTP POST to submit the [NHSNMeasureReportBundle](StructureDefinition-nhsn-measurereport-bundle.html) to the MeasureReport Recipient. Note: the MeasureReport Recipient MAY be accessed using a TEFCA compliant exchange through a QHIN, though the exact details of this is out of scope for this IG. The MeasureReport Recipient validates the Bundle and proceeds to load the data into other NHSN systems (details of such systems are out of scope for this IG).
4. **Forward to NHSN Systems:** The MeasureReport Recipient fowards the validated MeasureReport Bundle content to other back-end NHSN systems (details of such systems are out of scope for this IG).


##### Aggregate and Push to NHSN

In this scenario data for reporting is spread across multiple facilities, and those data must be aggregated before measure evaluation. Participating facilities send their data to the Data Aggregator using whatever format they negotiate (may be FHIR, CVS, or other format), which then acts as the Data Source and dQM evaluation engine. The rest of this scenario follows the Push to NHSN scenario described above. Note that as measure data requirements change, facilities reporting to the Data Aggregator may need to update their submissions; this process is a negotiation between the Data Aggregator and other facilities, and the details of this process is out of scope for this specification. 

In this scenario the dQM Evaluation Engine SHALL perform a FHIR POST or PUT to push the measure report bundle to the Measure Report Recipient.

Since the submission bundles can be quite large, the Measure Report Recipient SHOULD support compression and accept the following header in the POST/PUT: 

Content-Encoding: gzip

![Aggregate and Push to NHSN](aggregate-and-push-to-nhsn.png){:style="float: none;"}



---

// File: input/pagecontent/use_cases.md



### Actors ###

This implementation guide defines the following actors. Note, it is possible for a given system to play the role of multiple actors. For example, and EHR could be both the Data Source and dQM Evaluation Engine when calculating a measure internally. Likewise a system residing at NHSN that queries the Data Source remotely, evaluates those data, produces MeasureReport bundles, and validates the result may be both the dQM Evaluation Engine and MeasureReport Recipient. 

The actors defined here are used in the [Reporting Scenarios section of the Specification](specification.html#reporting-scenarios) page in this IG.

* **dQM Evaluation Engine** A system that retrieves data from the Data Source and evaluates those data against one or more measures retrieved from the Measure Source. The resulting MeasureReport bundle and related resources are then sent to the MeasureReport recipient The dQM Evaluation Engine acts as a [US Core Client](https://www.hl7.org/fhir/us/core/CapabilityStatement-us-core-client.html), a [DEQM Reporter Client](https://www.hl7.org/fhir/us/davinci-deqm/CapabilityStatement-reporter-client.html), and implements the $evaluation-measure operation

* **Data Source** A system containing data (typically patient data, but could be situational awareness data) that will be evaluated against one or more measures. This may be a FHIR server, an EHR with a FHIR endpoint (facade), an internal data store when the Data Source and dQM Evaluation Engine actors are played by the same system such as an EHR that does it's own measure evaluation, or it may be a system containing other data such as situational awareness data that is reporting via CSV or other format. When FHIR enabled, the Data Source acts as a [US Core Server](https://www.hl7.org/fhir/us/core/CapabilityStatement-us-core-server.html)

* **Data Aggregator** For some example use cases, such as bed capacity reporting, data from multiple Data Source actors may be aggregated by a single system before measure evaluation. A Data Aggregator also plays the role of a Data Source once aggregation is complete. An example would be a state public health agency aggregating data from all facilities in the state before using those data to produce a MeasureReport containing bed capacity data for the entire state. When FHIR enabled, a Data Aggregator acts as a [US Core Server](https://www.hl7.org/fhir/us/core/CapabilityStatement-us-core-server.html) when playing the role of a Data Source after aggregation. During aggregation, the Data Aggregator acts similar to the SANER options for aggregation, but implements its own CapabilityStatement due to the incompatibilities between DEQM and SANER.

* **Measure Source** A system at NHSN that stores FHIR resources such as Measure, Library, ValueSet, etc. that are used for dQM Reporting. The dQM Evaluation Engine queries the Measure Source for the latest Measure content before querying the Patient Data Source and performing measure evaluation. The Measure Source acts as a [DEQM Publishable Measure Repository](https://hl7.org/fhir/us/cqfmeasures/measure-repository-service.html#publishable-measure-repository) 

* **MeasureReport Recipient** A system at NHSN that receives MeasureReport bundles from the dQM Evaluation Engine and validates the result against the profiles in this implementation guide, and potentially other measure-specific profiles that are distributed with the measures themselves (this kind of validation is referred to as "pre-qualification" at NHSN). The MeasureReport Recipient acts as a [DEQM Receiver Server](https://www.hl7.org/fhir/us/davinci-deqm/CapabilityStatement-receiver-server.html), provides write access to Bundle resources containing MeasureReport and other related resources, and implements the $validate operation.

### Use Cases ###

This implementation guide will serve a wide variety of use cases for NHSN. The measures in this IG are examples only and a separate IG will define NHSN specific measures.

#### Use Case 1: Acute Care Hospital (ACH)

##### Description

The NHSN Acute Care Hospital (ACH) digital quality measure (dQM) allows facilities to report line-level data electronically to NHSN for the following modules that provide monthly event rates back to the facility such as: Glycemic Control (hyperglycemia and medication-related hypoglycemia); Healthcare facility-onset, antibiotic-Treated Clostridioides difficile (C. difficile) Infection (HT-CDI); Hospital-Onset Bacteremia & Fungemia (HOB), Venous Thromboembolism (VTE)-related prophylaxis and event rates (under development), Late Onset Sepsis / Meningitis (under development), Hospital-onset Acute Kidney Injury (HAKI) (under development), and Opioid-related Adverse Events (ORAE) (under development). NHSN protocols for these measures will soon be available at https://www.cdc.gov/nhsn/acute-care-hospital/index.html.  

##### Patients of Interest

The facility will work with NHSN to define a list of patients of interest(POI list). This is often the entire in-patient population at the facility. The data for the patients in the list are then extracted and evaluated against the measure criteria for the initial population (see below).

##### Initial Population

The initial population in the ACH dQM is defined as all encounters for patients of any age in an Emergency Department (ED), observation, or inpatient location or all encounters for patients of any age with an ED, observation, inpatient, or short stay status during the measurement period. Once an individual patient meets the population criteria, the line-level data needed to calculate metrics, benchmark and or stratify the individual protocol measures is submitted to NHSN.

##### Additional Use Case Information References
For specific information on the individual NHSN protocols and metrics see: 
[Acute Care / Critical Access Hospitals (ACH) | NHSN | CDC ](https://www.cdc.gov/nhsn/acute-care-hospital/index.html)
[Example ACH Initial Population Library (CQL)](Library-NHSNdQMAcuteCareHospitalInitialPopulationLibrary.html)
[Example ACH Measure Library ](Measure-NHSNdQMAcuteCareHospitalInitialPopulation.html)

##### ACH Submission Examples

##### Bundle Submission Examples

- [Full Submission Bundle](Bundle-submission-full-example1.html)
- [Submitting Organization](Organization-organization-example-submitting-organization.html) 
- [Submitting Device](Device-device-example-submitting-device.html) 

POI List

- [ACH Patients Of Interest](List-list-example-ach-patients-of-interest.html)

Subject List Measure Report

- [ACH Subject List](MeasureReport-measurereport-example-ach-subjectlist1.html)

Individual Measure Report

- [ACH Individual Measure Report List](List-list-example-ach-individual-measurereport-list.html)

##### Initial Population Examples

Patient

- [Patient - Example Sameresultdiffday](Patient-patient-example-sameresultdiffday.html)

Encounter

- [Encounter - Example ACH Pass2 - Inpatient](Encounter-encounter-example-ach-ach-pass2-inpatient.html)
- [Encounter - Example ACH Pass2 - Emergency](Encounter-encounter-example-ach-ach-pass2-emergency.html)
- [Encounter - Example ACH Pass3 - Short Stay](Encounter-encounter-example-ach-ach-pass3-short-stay.html)
- [Encounter - Example ACH Pass3 - Acute](Encounter-encounter-example-ach-ach-pass3-acute.html)

##### Line Level Data Examples

Condition

- [Condition - Example Diagnosis ACH Pass1 Encounter Diagnosis](Condition-condition-example-diagnosis-ach-pass1.html)
- [Condition - Example Diagnosis ACH Pass2 Problem List](Condition-condition-example-diagnosis-ach-pass2-problem.html)

Coverage

- [Coverage - Example ACH Pass1 Medicaid](Coverage-coverage-example-ach-pass1.html)
- [Coverage - Example ACH Pass2 Commercial](Coverage-coverage-example-ach-pass2.html)

Device

- [Device - Example ACH Pass1 Central Line](Device-device-example-ach-ach-pass1-central-line.html)

Diagnostic Report

- [DiagnosticReport - Example ACH Pass2 Cardiopulmonary1](DiagnosticReport-diagnosticreport-example-ach-ach-pass2-cardiopulmonary.html)
- [DiagnosticReport - Example ACH Pass2 Lab CBC](DiagnosticReport-diagnosticreport-example-ach-ach-pass2-lab-cbc.html)

Location

- [Location - Example ACH - Emergency](Location-location-example-ach-emergency.html)
- [Location - Example ACH - Inpatient](Location-location-example-ach-inpatient.html)
- [Location - Example ACH - Nicu](Location-location-example-ach-nicu-level-iii.html)

Medication

- [Medication - Example Heparin](Medication-medication-example-heparin.html)
- [Medication - Example Metformin 1000](Medication-medication-example-metformin-1000.html)
- [Medication - Example Vancomycin 15](Medication-medication-example-vancomycin-15.html)
- [Medication - Example Insulin Lispro](Medication-medication-example-insulin-lispro.html)

Medication Administration

- [MedicationAdministration - Example ACH Pass2 Heparin 1](MedicationAdministration-medicationadministration-example-ach-pass2-heparin-1.html)
- [MedicationAdministration - Example ACH Pass2 Heparin 2](MedicationAdministration-medicationadministration-example-ach-pass2-heparin-2.html)
- [MedicationAdministration - Example ACH Pass2 Insulin Lispro 1](MedicationAdministration-medicationadministration-example-ach-pass2-insulin-lispro-1.html)
- [MedicationAdministration - Example ACH Pass2 Insulin Lispro 2](MedicationAdministration-medicationadministration-example-ach-pass2-insulin-lispro-2.html)

Medication Request

- [MedicationRequest - Example ACH Pass1 Vancomycin](MedicationRequest-medicationrequest-example-ach-pass1-vancomycin.html)
- [MedicationRequest - Example ACH Pass2 Metformin](MedicationRequest-medicationrequest-example-ach-pass2-metformin.html)

Observation

- [Observation - Example ACH Pass1 Blood](Observation-observation-example-ach-pass1-blood.html)
- [Observation - Example ACH Pass1 Csf](Observation-observation-example-ach-pass1-csf.html)
- [Observation - Example ACH Pass1 Gestational Age](Observation-observation-example-ach-pass1-gestational-age.html)
- [Observation - Example ACH Pass1 Vitals Weight](Observation-observation-example-ach-pass1-vitals-weight.html)
- [Observation - Example ACH Pass2 Hemo A1C](Observation-observation-example-ach-pass2-hemo-a1c.html)
- [Observation - Example ACH Pass3 C. diff](Observation-observation-example-ach-pass3-cdiff.html)

Procedure

- [Procedure - Example ACH Pass1 Central Line](Procedure-procedure-example-ach-ach-pass1-central-line.html)
- [Procedure - Example ACH Pass1 Lumbar](Procedure-procedure-example-ach-ach-pass1-lumbar.html)

Service Request

- [ServiceRequest - Example ACH Pass1 Blood](ServiceRequest-servicerequest-example-ach-ach-pass1-blood.html)
- [ServiceRequest - Example ACH Pass1 CSF](ServiceRequest-servicerequest-example-ach-ach-pass1-csf.html)
- [ServiceRequest - Example ACH Pass2 Glucose](ServiceRequest-servicerequest-example-ach-ach-pass2-glucose.html)
- [ServiceRequest - Example ACH Pass2 Hemo A1C](ServiceRequest-servicerequest-example-ach-ach-pass2-hemo-a1c.html)
- [ServiceRequest - Example ACH Pass3 Cdiff](ServiceRequest-servicerequest-example-ach-ach-pass3-cdiff.html)

Specimen

- [Specimen - Example ACH Pass1 Blood](Specimen-specimen-example-ach-ach-pass1-blood.html)
- [Specimen - Example ACH Pass1 CSF](Specimen-specimen-example-ach-ach-pass1-csf.html)
- [Specimen - Example ACH Pass3 Stool](Specimen-specimen-example-ach-ach-pass3-stool.html)

#### Use Case 2: Bed Capacity Reporting

##### Description

The NHSN Bed Capacity measure allows for facilities to report real-time hospital bed capacity data electronically to CDC’s National Healthcare Safety Network (NHSN), enabling a jurisdictional capacity datastore and dashboard for viewing real-time occupancy information. The goal of this measure is to strengthen healthcare systems capacity by providing near real time insight into routine operations and especially during public health emergencies.

The NHSN Bed Capacity use case is intended to follow the pattern of a [SANER](https://hl7.org/fhir/uv/saner/) measure, but there are currently incompatibilies between SANER and DEQM that the owning HL7 work groups have agreed to resolve, but have not yet implemented. Once SANER and DEQM are harmonized this IG will likely be updated to reflect that.

##### Background

Formally called the NHSN Connectivity Initiative: Hospital Bed Capacity Project, the objective of this measure is to establish a web-based easy-to use interface to be accessed by hospitals and governmental agencies at a state and regional level to coordinate daily, surge and crisis needs.  Since March 2020, the U.S. government has been consistently collecting data from hospitals and states to better understand healthcare system stress, capacity, capabilities, and hospitalizations. The COVID-19 pandemic underscored the Federal needs for data are continuously evolving, and that data modernization must be prioritized to reduce burden and maximize efficiency.

##### Bed Inclusion Criteria

For all bed censuses and counts, the following bed types should be <u>included</u>:
1. All inpatient staffed and unblocked beds
2. Observation beds


##### Bed Exclusion Criteria

For all bed censuses and counts, the following bed types should be <u>excluded</u>:
1. Virtual beds or locations in the EMR that are not physical spaces (i.e., beds used for interoperative phase of care or in certain operative settings or virtual staging areas for admissions.)
2. Beds no longer in use, even in case of surge
3. Blocked beds (i.e., beds blocked due to logistical or maintenance challenges, staffing restrictions, isolation, etc.) 


##### Unit Inclusion Criteria

- ED    Emergency department
- ICU   Intensive care unit
- LOC   Level of care
- MT/MS Medicine telemetry/medicine surgery acute care bed
- NICU  Neonatal intensive care unit
- NP    Negative pressure
- OB    Obstetrics
- OBS   Observation
- PCU   Progressive care unit
- Peds  Pediatric
- PICU  Pediatric intensive care unit
- Psych Psychiatric
- Rehab Rehabilitation


##### Bed Capacity Examples
- [MeasureReport - Children's Hospital Bed Capacity Individual Measure Report](MeasureReport-bed-capacity-measurereport-example-chld.html)
- [MeasureReport - Hospital Bed Capacity Individual Measure Report](MeasureReport-bed-capacity-measurereport-example-hosp.html)
- [MeasureReport - Inpatient Psychiatric Facility Bed Capacity Individual Measure Report](MeasureReport-bed-capacity-measurereport-example-ipf.html)



---

// File: input/fsh/aliases.fsh

Alias: $library-type = http://terminology.hl7.org/CodeSystem/library-type
Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $condition-ver-status = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $condition-category = http://terminology.hl7.org/CodeSystem/condition-category
Alias: $sct = http://snomed.info/sct
Alias: $icd-9-cm = http://terminology.hl7.org/CodeSystem/icd9cm
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $subscriber-relationship = http://terminology.hl7.org/CodeSystem/subscriber-relationship
Alias: $coverage-class = http://terminology.hl7.org/CodeSystem/coverage-class
Alias: $software-system-type = http://hl7.org/fhir/us/cqfmeasures/CodeSystem/software-system-type
Alias: $v3-ParticipationType = http://terminology.hl7.org/CodeSystem/v3-ParticipationType
Alias: $admit-source = http://terminology.hl7.org/CodeSystem/admit-source
Alias: $discharge-disposition = http://terminology.hl7.org/CodeSystem/discharge-disposition
Alias: $location-physical-type = http://terminology.hl7.org/CodeSystem/location-physical-type
Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $measure-scoring = http://terminology.hl7.org/CodeSystem/measure-scoring
Alias: $measure-improvement-notation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation
Alias: $measure-population = http://terminology.hl7.org/CodeSystem/measure-population
Alias: $atc = http://www.whocc.no/atc
Alias: $rxnorm = http://www.nlm.nih.gov/research/umls/rxnorm
Alias: $medicationrequest-category = http://terminology.hl7.org/CodeSystem/medicationrequest-category
Alias: $medicationrequest-course-of-therapy = http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy
Alias: $dose-rate-type = http://terminology.hl7.org/CodeSystem/dose-rate-type
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $loinc = http://loinc.org
Alias: $organization-type = http://terminology.hl7.org/CodeSystem/organization-type
Alias: $v2-0487 = http://terminology.hl7.org/CodeSystem/v2-0487
Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $sopt = https://nahdo.org/sopt
Alias: $hsloc.html = https://www.cdc.gov/nhsn/cdaportal/terminology/codesystem/hsloc.html
Alias: $v3-MaritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $v2-0131 = http://terminology.hl7.org/CodeSystem/v2-0131
Alias: $device-action = http://hl7.org/fhir/device-action
Alias: $cpt = http://www.ama-assn.org/go/cpt
Alias: $tests = http://acme.org/tests
Alias: $icd-9 = http://hl7.org/fhir/sid/icd-9
Alias: $measure-type = http://terminology.hl7.org/CodeSystem/measure-type
Alias: $measure-data-usage = http://terminology.hl7.org/CodeSystem/measure-data-usage
Alias: $v2-0488 = http://terminology.hl7.org/CodeSystem/v2-0488
Alias: $dose-rate-type_1 = http://epic.com/CodeSystem/dose-rate-type
Alias: $encounter-class = http://example.com/CodeSystem/encounter-class
Alias: $encounter-status = http://hl7.org/fhir/encounter-status
Alias: $v3-ObservationInterpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation
Alias: $condition-category_1 = http://open.epic.com/FHIR/StructureDefinition/condition-category
Alias: $icd-10-cm = http://hl7.org/fhir/sid/icd-10-cm
Alias: $icd-10 = http://www.cms.gov/Medicare/Coding/ICD10
Alias: $coverage-type = http://open.epic.com/FHIR/StructureDefinition/coverage-type
Alias: $v2-0136 = http://terminology.hl7.org/CodeSystem/v2-0136
Alias: $v3-EntityCode = http://terminology.hl7.org/CodeSystem/v3-EntityCode
Alias: $shareablevalueset = http://hl7.org/fhir/StructureDefinition/shareablevalueset
Alias: $procedure-code = http://hl7.org/fhir/ValueSet/procedure-code
Alias: $vital-sign-profile = http://hl7.org/fhir/StructureDefinition/vitalsigns

Alias: $v2-0074 = http://terminology.hl7.org/CodeSystem/v2-0074

Alias: $healthcare-capacity-codes = http://hl7.org/fhir/us/nhsn-dqm/CodeSystem/healthcare-capacity-codes

---

// File: input/fsh/capabilitystatements/capabilitystatement-data-aggregator.fsh

Instance: NHSNCapabilityStatementDataAggregator
InstanceOf: CapabilityStatement
Title: "NHSN Data Aggregator CapabilityStatement"
Usage: #definition
* url = Canonical(NHSNCapabilityStatementDataAggregator)
* name = "NHSNCapabilityStatementDataAggregator"
* status = #active
* experimental = false
* date = "2024-07-30"
* publisher = "HL7 International / Public Health"
* contact.name = "HL7 Public Health Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/pher"
* description = "This statement defines the expected capabilities of a system that aggregates data from multiple Data Source actors before measure evaluation and then plays the role of a Data Source once aggregation is complete. An example would be a state public health agency aggregating data from all facilities in the state before using those data to produce a MeasureReport containing bed capacity data for the entire state. When FHIR enabled, a Data Aggregator acts as a [US Core Server](http://hl7.org/fhir/us/core/STU6.1/CapabilityStatement-us-core-server.html) when playing the role of a Data Source after aggregation. During aggregation, the Data Aggregator acts similar to the SANER options for aggregation, but implements its own CapabilityStatement due to the incompatibilities between DEQM and SANER."
* jurisdiction = urn:iso:std:iso:3166#US
* kind = #requirements
* imports[+] = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-client|6.1.0" 
* imports[+] = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server|6.1.0" 
* fhirVersion = #4.0.1
* format[+] = #json
* format[+] = #xml
* rest[+]
  * mode = #server
* rest[+]
  * mode = #client


---

// File: input/fsh/capabilitystatements/capabilitystatement-data-source.fsh

Instance: NHSNCapabilityStatementDataSource
InstanceOf: CapabilityStatement
Title: "NHSN Data Source CapabilityStatement"
Usage: #definition
* url = Canonical(NHSNCapabilityStatementDataSource)
* name = "NHSNCapabilityStatementDataSource"
* status = #active
* experimental = false
* date = "2024-07-30"
* publisher = "HL7 International / Public Health"
* contact.name = "HL7 Public Health Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/pher"
* description = "This statement defines the expected capabilities of a system containing data (typically patient data, but could be situational awareness data) that will be evaluated against one or more measures. This may be a FHIR server, an EHR with a FHIR endpoint (facade), an internal data store when the Data Source and dQM Evaluation Engine actors are played by the same system such as an EHR that does it’s own measure evaluation, or it may be a system containing other data such as situational awareness data that is reporting via CSV or other format. When FHIR enabled, the Data Source acts as a [US Core Server](https://hl7.org/fhir/us/core/STU6.1/CapabilityStatement-us-core-server.html)"
* jurisdiction = urn:iso:std:iso:3166#US
* kind = #requirements
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server|6.1.0" //"http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server|6.1.0" UsCoreServerCapabilityStatement
* fhirVersion = #4.0.1
* format[+] = #json
* format[+] = #xml
* rest[+]
  * mode = #server

---

// File: input/fsh/capabilitystatements/capabilitystatement-evaluation-engine.fsh

Instance: NHSNCapabilityStatementEvaluationEngine
InstanceOf: CapabilityStatement
Title: "NHSN Data Evaluation Engine CapabilityStatement"
Usage: #definition
* url = Canonical(NHSNCapabilityStatementEvaluationEngine)
* name = "NHSNCapabilityStatementEvaluationEngine"
* status = #active
* experimental = false
* date = "2024-07-30"
* publisher = "HL7 International / Public Health"
* contact.name = "HL7 Public Health Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/pher"
* description = "This statement defines the expected capabilities of a system  that retrieves data from the Data Source and evaluates those data against one or more measures retrieved from the Measure Source. The resulting MeasureReport bundle and related resources are then sent to the MeasureReport recipient The dQM Evaluation Engine acts as a [US Core Client](https://www.hl7.org/fhir/us/core/STU6.1/CapabilityStatement-us-core-client.html), a [DEQM Reporter Client](https://www.hl7.org/fhir/us/davinci-deqm/STU4/CapabilityStatement-reporter-client.html), and implements the $evaluation-measure operation"
* jurisdiction = urn:iso:std:iso:3166#US
* kind = #requirements
* imports[+] = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-client" 
* imports[+] = "http://hl7.org/fhir/us/davinci-deqm/CapabilityStatement/reporter-client" 
* fhirVersion = #4.0.1
* format[+] = #json
* format[+] = #xml
* rest[+]
  * mode = #server
  * resource[+]
    * type = #Measure
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHALL

    * operation[+]
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHALL
      * name = "evaluate-measure"
      * definition = "http://hl7.org/fhir/us/davinci-deqm/OperationDefinition/deqm.evaluate-measure"
  

---

// File: input/fsh/capabilitystatements/capabilitystatement-measure-source.fsh

Instance: NHSNCapabilityStatementMeasureSource
InstanceOf: CapabilityStatement
Title: "NHSN Measure Source CapabilityStatement"
Usage: #definition
* url = Canonical(NHSNCapabilityStatementMeasureSource)
* name = "NHSNCapabilityStatementMeasureSource"
* status = #active
* experimental = false
* date = "2024-07-30"
* publisher = "HL7 International / Public Health"
* contact.name = "HL7 Public Health Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/pher"
* description = "This statement defines the expected capabilities of a system at NHSN that stores FHIR resources such as Measure, Library, ValueSet, etc. that are used for dQM Reporting. The dQM Evaluation Engine queries the Measure Source for the latest Measure content before querying the Patient Data Source and performing measure evaluation. The Measure Source acts as a [DEQM Publishable Measure Repository](https://hl7.org/fhir/us/cqfmeasures/STU4/measure-repository-service.html)."
* jurisdiction = urn:iso:std:iso:3166#US
* kind = #requirements
* imports = "http://hl7.org/fhir/us/cqfmeasures/CapabilityStatement/publishable-measure-repository|3.0.0" //http://hl7.org/fhir/us/cqfmeasures/CapabilityStatement/publishable-measure-repository  CQFMPublishableMeasureRepository|3.0.0)
* fhirVersion = #4.0.1
* format[+] = #json
* format[+] = #xml
* rest[+]
  * mode = #server
  * security.description = "Implementations **SHOULD** consider the guidance included [NHSN Security & Privacy Considerations](security.html)."

// TODO, The CQFM meathod of getting the measure/ibrary bundle it through the Library/$cqfm.package operation
  * resource[+]
    * type = #Library
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHOULD
    * supportedProfile = Canonical(CQFMLibrary)
    * supportedProfile.extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHALL
    * interaction[+]
      * code = #read
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD
    * interaction[+]
      * code = #search-type
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD


  * resource[+]
    * type = #Measure
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHOULD
    * supportedProfile = Canonical(CQFMMeasure)
    * supportedProfile.extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHALL
    * interaction[+]
      * code = #read
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD
    * interaction[+]
      * code = #search-type
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD

//Add Bundle. How are these searched for?

---

// File: input/fsh/capabilitystatements/capabilitystatement-measurereport-recipient.fsh

Instance: NHSNCapabilityStatementMeasureReportRecipient
InstanceOf: CapabilityStatement
Title: "NHSN MeasureReport Recipient CapabilityStatement"
Usage: #definition
* url = Canonical(NHSNCapabilityStatementMeasureReportRecipient)
* name = "NHSNCapabilityStatementMeasureReportRecipient"
* status = #active
* experimental = false
* date = "2024-07-30"
* publisher = "HL7 International / Public Health"
* contact.name = "HL7 Public Health Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/pher"
* description = "This statement defines the expected capabilities of a system at NHSN that receives MeasureReport bundles from the dQM Evaluation Engine and validates the result against the profiles in this implementation guide, and potentially other measure-specific profiles that are distributed with the measures themselves (this kind of validation is referred to as “pre-qualification” at NHSN). The MeasureReport Recipient acts as a [DEQM Receiver Server](https://www.hl7.org/fhir/us/davinci-deqm/STU4/CapabilityStatement-receiver-server.html), provides write access to Bundle resources containing MeasureReport and other related resources, and implements the $validate operation."
* jurisdiction = urn:iso:std:iso:3166#US
* kind = #requirements
* imports = "http://hl7.org/fhir/us/davinci-deqm/CapabilityStatement/receiver-server|4.0.0" //http://hl7.org/fhir/us/cqfmeasures/CapabilityStatement/publishable-measure-repository  CQFMPublishableMeasureRepository|3.0.0)
* fhirVersion = #4.0.1
* format[+] = #json
* format[+] = #xml
* rest[+]
  * mode = #server
  * security.description = "Implementations **SHOULD** consider the guidance included [[https://build.fhir.org/ig/HL7/nhsn-dqm/security.html|NHSN Security & Privacy Considerations]]."

  * resource[+]
    * type = #Bundle
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHALL
    * supportedProfile[+] = Canonical(NHSNMeasureReportBundle)
    * supportedProfile[=].extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHALL
    * interaction[+]
      * code = #create
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD
    * interaction[+]
      * code = #read
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD
    * interaction[+]
      * code = #search-type
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD
//TODO. How are these searched for?

  * resource[+]
    * type = #MeasureReport
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHALL
    * supportedProfile[+] = Canonical(DEQMSubjectListMeasureReport)
    * supportedProfile[=].extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHALL
    * supportedProfile[+] = Canonical(DEQMIndividualMeasureReportProfile)
    * supportedProfile[=].extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHALL
    * supportedProfile[+] = Canonical(DEQMSummaryMeasureReportProfile)
    * supportedProfile[=].extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #MAY
    * interaction[+]
      * code = #create
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD
    * interaction[+]
      * code = #read
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD
    * interaction[+]
      * code = #search-type
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD



---

// File: input/fsh/codesystems/HealthareCapacityCodeSystem.fsh

CodeSystem: HealthareCapacityCodeSystem
Id: healthcare-capacity-codes
Title: "Healthcare Capacity Reporting Code System"
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = true
* ^description = "This CodeSystem defines coded concepts for Healthcare Capacity reporting to NHSN. This CodeSystem is experimental, and is expected to be replaced by LOINC codes once they have been assigned."
* ^caseSensitive = false
* #HOSP "Hospital"
* #IRF "Inpatient Rehabilitation"
* #IPF "Inpatient Psychiatric"
* #CHLD "Children's or Pediatric"
* #OTH "Other facility-within-facility or subunit"
* #BedCapacityReporting "Hospital bed capaicty report"
* #AllBedsOccupied "Census across all beds, including all specialty beds (i.e., CMS-certified rehabilitation, CMS-certified psychiatric, obstetrics, NICU [all levels], and nursery beds)."
* #AllBedsUnoccupied "Count of unoccupied staffed and unblocked beds across all beds, including specialty beds (i.e., CMS-certified rehabilitation, CMS-certified psychiatric, obstetrics, NICU [all levels], and nursery)."
* #AdultTotalOccupied "Census across all adult beds (Adult ICU, Adult PCU, Adult MT/MS and Adult OBS), excluding CMS-certified rehabilitation, CMS-certified psychiatric, and obstetrics beds."
* #AdultTotalUnoccupied "Count of unoccupied staffed and unblocked beds across all adult beds (Adult ICU, Adult PCU, Adult MT/MS and Adult OBS), excluding CMS-certified rehabilitation, CMS-certified psychiatric, and obstetrics beds."
* #AdultICUOccupied "Census across all adult intensive care or critical care beds. Adult Critical Care Units provide care and treatment for the highest acuity patients. Interventions may include ventilators, hemodynamic monitoring, IV drug therapies and a variety of procedures."
* #AdultICUUnoccupied "Count of unoccupied staffed and unblocked beds across all adult intensive care or critical care beds. Adult Critical Care Units provide care and treatment for the highest acuity patients. Interventions may include ventilators, hemodynamic monitoring, IV drug therapies and a variety of procedures."
* #AdultICU_LOCOccupied "Census of all patients meeting the admission criteria for critical care (i.e. require ICU level of care) across all adult intensive care or critical care beds. Excludes patients in these beds that do not meet ICU criteria."
* #AdultNonICUOccupied "Census across all adult PCU, MT/MS and OBS beds."
* #AdultNonICUUnoccupied "Count of unoccupied staffed and unblocked beds across all adult PCU, MT, MS and OBS beds."
* #AdultPCUOccupied "Important note for PCU beds: if adult PCU bed census is unable to be separately collected, please make sure the adult PCU census is included in the adult MT/MS census, adult non-ICU census, and adult total bed census. Census across all adult progressive care, intermediate care or step-down beds. Units that provide care for adult moderate severity of illness and comorbid patients."
* #AdultPCUUnoccupied "Important note for PCU beds: if adult PCU unoccupied bed count is unable to be separately collected, please make sure the adult PCU unoccupied bed count is included in the adult MT/MS unoccupied bed count, adult non-ICU unoccupied bed count, and adult total unoccupied bed count. Count of unoccupied staffed and unblocked beds across all adult progressive care, intermediate care or step-down beds. Units that provide care for adult moderate severity of illness and comorbid patients."
* #AdultMTMSOccupied "Census across all adult telemetry and general medicine/surgery/acute care beds. Telemetry units provide continuous electrocardiographic (ECG) monitoring of the adult patient’s heart rhythm using specialized technology and equipment. General medicine units, surgery units or units with combination of both medical and surgical adult patients. Also known as general care or acute care units."
* #AdultMTMSUnoccupied "Count of unoccupied staffed and unblocked beds across all adult telemetry and general medicine/surgery/acute care beds. Telemetry units provide continuous electrocardiographic (ECG) monitoring of the adult patient’s heart rhythm using specialized technology and equipment. General medicine units, surgery units or units with combination of both medical and surgical adult patients. Also known as general care or acute care units."
* #AdultObsOccupied "Census across all adult observation beds. Adult patient status is observation (outpatient status) and may be housed on an observation unit."
* #AdultObsUnoccupied "Count of unoccupied staffed and unblocked beds across all adult observation beds. Adult patient status is observation (outpatient status) and may be housed on an observation unit."
* #PedsTotalOccupied "Census across all pediatric beds (Peds ICU, Peds PCU, Peds MT/MS and Peds OBS), excluding specialty nursery and NICU [all levels] specialty beds."
* #PedsTotalUnoccupied "Count of unoccupied staffed and unblocked beds across all pediatric beds (Peds ICU, Peds PCU, Peds MT/MS and Peds OBS), excluding  specialty nursery and NICU [all levels] specialty beds."
* #PedsICUOccupied "Census across all pediatric intensive care or critical care beds. Pediatric Intensive Care Unit (PICU) also known as Pediatric Critical Care Unit. Interventions may include ventilators, hemodynamic monitoring, IV drug therapies and a variety of procedures."
* #PedsICUUnoccupied "Count of unoccupied staffed and unblocked beds across all pediatric intensive care or critical care beds. Pediatric Intensive Care Unit (PICU) also known as Pediatric Critical Care Unit. Interventions may include ventilators, hemodynamic monitoring, IV drug therapies and a variety of procedures."
* #PedsICU_LOCOccupied "Census of all patients meeting the admission criteria for critical care (i.e. require ICU level of care) across all pediatric intensive care or critical care beds. Excludes patients in these beds that do not meet ICU criteria."
* #PedsNonICUOccupied "Census across all pediatric PCU, MT/MS and OBS beds."
* #PedsNonICUUnoccupied "Count of unoccupied staffed and unblocked beds across all pediatric PCU, MT, MS and OBS beds."
* #PedsPCUOccupied "Important note for PCU beds: if pediatric PCU bed census is unable to be separately collected, please make sure the pediatric PCU census is included in the both the pediatric MT/MS census, pediatric non-ICU census, and pediatric total bed census. Census across all pediatric progressive care, intermediate care or step-down beds. Units that provide care for pediatric moderate severity of illness and comorbid patients."
* #PedsPCUUnoccupied "Important note for PCU beds: if pediatric PCU unoccupied bed count is unable to be separately collected, please make sure the pediatric PCU unoccupied bed count is included in the pediatric MT/MS unoccupied bed count, pediatric non-ICU unoccupied bed count, and pediatric total unoccupied bed count. Count of unoccupied staffed and unblocked beds across all pediatric progressive care, intermediate care or step-down beds. Units that provide care for pediatric moderate severity of illness and comorbid patients."
* #PedsMTMSOccupied "Census across all pediatric telemetry and general medicine/surgery/acute care beds. Pediatric telemetry units provide continuous electrocardiographic (ECG) monitoring of the patient’s heart rhythm using specialized technology and equipment. Pediatric general medicine units, surgery units or units with combination of both medical and surgical patients. Also known as general care or acute care units. Provides care for the least acute patients. Patient assessment and monitoring can range from 4-8 hours, floors have higher patient to nurse ratio than PCU/ICU."
* #PedsMTMSUnoccupied "Count of unoccupied staffed and unblocked beds across all pediatric telemetry and general medicine/surgery/acute care beds. Pediatric telemetry units provide continuous electrocardiographic (ECG) monitoring of the patient’s heart rhythm using specialized technology and equipment. Pediatric general medicine units, surgery units or units with combination of both medical and surgical patients. Also known as general care or acute care units. Provides care for the least acute patients. Patient assessment and monitoring can range from 4-8 hours, floors have higher patient to nurse ratio than PCU/ICU."
* #PedsObsOccupied "Census across all pediatric observation beds. Pediatric patient status is observation (outpatient status) and may be housed on observation unit."
* #PedsObsUnoccupied "Count of unoccupied staffed and unblocked beds across all pediatric observation beds. Pediatric patient status is observation (outpatient status) and may be housed on observation unit."
* #SpecialtyTotalOccupied "Census across all specialty beds (i.e., CMS-certified rehabilitation, CMS-certified psychiatric, obstetrics, NICU [all levels], and nursery beds)."
* #SpecialtyTotalUnoccupied "Count of unoccupied staffed and unblocked beds across all specialty beds (i.e., CMS-certified rehabilitation, CMS-certified psychiatric, obstetrics, NICU [all levels], and nursery beds)."
* #SpecialtyNonCribOccupied "Census across non-crib specialty beds (i.e. obstetrics, CMS-certified psychiatric, and CMS-certified rehabilitation specialty beds), excluding NICU (all levels) and nursery specialty beds."
* #SpecialtyNonCribUnoccupied "Count of unoccupied staffed and unblocked beds across non-crib specialty beds (i.e. obstetrics, CMS-certified psychiatric, and CMS-certified rehabilitation specialty beds), excluding NICU (all levels) and nursery specialty beds."
* #OBOccupied "Census across all obstetric beds. Obstetrical or post-partum units provide care to low and high-risk pregnant women."
* #OBUnoccupied "Count of unoccupied staffed and unblocked beds across all obstetric beds. Obstetrical or postpartum units provide care to low and high-risk pregnant women."
* #NICUOccupied "Census across all NICU beds (includes all levels: level 1, level 2, level 3, level 3 Plus, and level 4). Neonatal Intensive Care Units - specializes in the care of ill or premature newborn infants."
* #NICUUnoccupied "Count of unoccupied staffed and unblocked beds across all NICU beds (includes all levels: level 1, level 2, level 3, level 3 Plus, and level 4). Neonatal Intensive Care Units - specializes in the care of ill or premature newborn infants."
* #NICU4Occupied "Census across all level 4 NICU beds. Level 4: units include the capabilities of level 3 Plus with additional capabilities and considerable experience in the care of the most complex and critically ill newborn infants and should have pediatric medical and pediatric surgical specialty consultants continuously available 24 hours a day."
* #NICU4Unoccupied "Count of unoccupied staffed and unblocked beds across all level 4 NICU beds. Level 4: units include the capabilities of level 3 Plus with additional capabilities and considerable experience in the care of the most complex and critically ill newborn infants and should have pediatric medical and pediatric surgical specialty consultants continuously available 24 hours a day."
* #NICU3Unoccupied "Count of unoccupied staffed and unblocked beds across all level 3 Plus NICU beds. Level 3 Plus: includes level 3 care with general pediatric surgery."
* #NICU3PlusOccupied "Census across all level 3 Plus NICU beds. Level 3 Plus: includes level 3 care with general pediatric surgery."
* #NICU3PlusUnoccupied "Count of unoccupied staffed and unblocked beds across all level 3 NICU beds. Level 3: should be reserved for infants who are born at <32 weeks’ gestation, weigh <1500g at birth, or have medical or surgical conditions, regardless of gestational age."
* #NICU3Occupied "Census across all level 3 NICU beds. Level 3: should be reserved for infants who are born at <32 weeks’ gestation, weigh <1500g at birth, or have medical or surgical conditions, regardless of gestational age."
* #NICU2Occupied "Census across all level 2 NICU beds. Level 2: should be reserved for stable or moderately ill newborn infants who are born at ≥32 weeks’ gestation or who weigh ≥1500g at birth with problems that are expected to resolve rapidly and who would not be anticipated to need subspecialty-level services on an urgent basis."
* #NICU2Unoccupied "Count of unoccupied staffed and unblocked beds across all level 2 NICU beds. Level 2: should be reserved for stable or moderately ill newborn infants who are born at ≥32 weeks’ gestation or who weigh ≥1500g at birth with problems that are expected to resolve rapidly and who would not be anticipated to need subspecialty-level services on an urgent basis."
* #NurseryOccupied "Census across all nursery beds. Also called a newborn or a well-baby nursery. Goal is to examine, treat and monitor the health of the newborn. Well-baby nursery includes any room housing newborns who do not need continuing care or special care of intensive care newborn services. The nursery houses healthy babies that do not have any complications."
* #NurseryUnoccupied "Count of unoccupied staffed and unblocked beds across all nursery beds. Also called a newborn or a well-baby nursery. Goal is to examine, treat and monitor the health of the newborn. Well-baby nursery includes any room housing newborns who do not need continuing care or special care of intensive care newborn services.The nursery houses healthy babies that do not have any complications."
* #NICU1Occupied "Important note for level 1 NICU beds: this field should only be used if you have newborn or well-baby nursery beds with additional level of care that does not meet the criteria of level 2 NICU beds. Census across all level 1 NICU beds. Level 1: facilities provide a basic level of care to neonates who are low risk. They have the capability to perform neonatal resuscitation at every delivery and to evaluate and provide routine postnatal care for healthy newborn infants."
* #NICU1Unoccupied "Important note for level 1 NICU beds: this field should only be used if you have newborn or well-baby nursery beds with additional level of care that does not meet the criteria of level 2 NICU beds.Count of unoccupied staffed and unblocked beds across all level 1 NICU beds. Level 1: facilities provide a basic level of care to neonates who are low risk. They have the capability to perform neonatal resuscitation at every delivery and to evaluate and provide routine postnatal care for healthy newborn infants."
* #AdultPsychOccupied "Census across all CMS-certified adult psychiatric beds. Psychiatric units specialize in the treatment of serious mental disorders. Care includes monitoring and providing appropriate interventions for behavioral or psychosocial issues."
* #AdultPsychUnoccupied "Count of unoccupied staffed and unblocked beds across all CMS-certified adult psychiatric beds. Psychiatric units specialize in the treatment of serious mental disorders. Care includes monitoring and providing appropriate interventions for behavioral or psychosocial issues."
* #PedsPsychOccupied "Census across all CMS-certified pediatric psychiatric beds. Specialize in the treatment of serious mental disorders. Care includes monitoring and providing appropriate interventions for behavioral or psychosocial issues."
* #PedsPsychUnoccupied "Count of unoccupied staffed and unblocked beds across all CMS-certified pediatric psychiatric beds. Specialize in the treatment of serious mental disorders. Care includes monitoring and providing appropriate interventions for behavioral or psychosocial issues."
* #RehabOccupied "Census across all CMS-certified rehabilitation beds. Inpatient rehabilitation units provide services to people who have had an acute illness, injury, or accident resulting in significant functional decline. Intensive physical medicine therapies and treatment regimens are delivered by a multidisciplinary team of nurses, PT, OT and specially trained physicians."
* #RehabUnoccupied "Count of unoccupied staffed and unblocked beds across all CMS-certified rehabilitation beds. Inpatient rehabilitation units provide services to people who have had an acute illness, injury, or accident resulting in significant functional decline. Intensive physical medicine therapies and treatment regimens are delivered by a multidisciplinary team of nurses, PT, OT and specially trained physicians."
* #SurgeActiveTotalOccupied "Census across all activated surge beds. Active surge beds are any non-licensed beds that can be utilized in an emergency for surge locations and are currently in use or available for use as ICU, PCU, MT/MS or OBS beds."
* #SurgeActiveTotalUnoccupied "Count of unoccupied activated surge beds across all levels of care. Active surge beds are any non-licensed beds that can be utilized in an emergency for surge locations and are currently in use or available for use as ICU, PCU, MT/MS or OBS beds."
* #SurgeInactiveTotalOccupied "Count of occupied inactive surge beds across all levels of care. Inactive surge beds are any non-licensed beds that can be utilized in an emergency for surge locations for use as ICU, PCU, MT/MS or OBS beds but are not currently in use or active."
* #SurgeInactiveTotalUnoccupied "Count of unoccupied inactive surge beds across all levels of care. Inactive surge beds are any non-licensed beds that can be utilized in an emergency for surge locations for use as ICU, PCU, MT/MS or OBS beds but are not currently in use or active."
* #SurgeActiveICUOccupied "Census across all activated intensive care or critical care surge beds. Active ICU surge beds are any non-licensed beds that can be utilized in an emergency for surge locations and are currently in use or available for use for intensive or critical care patients."
* #SurgeActiveICUUnoccupied "Count of unoccupied activated intensive or critical care surge beds. Active ICU surge beds are any non-licensed beds that can be utilized in an emergency for surge locations and are currently in use or available for use for intensive or critical care patients."
//* #SurgeInactiveICUOccupied "Count of occupied inactive intensive or critical care surge beds. Inactive ICU surge beds are any non-licensed beds that can be utilized in an emergency for surge locations for use for intensive or critical care patients but are not currently in use or active."
* #SurgeInactiveICUUnoccupied "Count of unoccupied inactive intensive or critical care surge beds. Inactive ICU surge beds are any non-licensed beds that can be utilized in an emergency for surge locations for use for intensive or critical care patients but are not currently in use or active."
* #SurgeActiveNonICUOccupied "Census across all activated PCU, MT, MS and OBS surge beds. Active Non-ICU surge beds are any non-licensed beds that can be utilized in an emergency for surge locations and are currently in use or available for use as PCU, MT/MS or OBS beds."
* #SurgeActiveNonICUUnoccupied "Count of unoccupied activated PCU, MT, MS and OBS surge beds. Active Non-ICU surge beds are any non-licensed beds that can be utilized in an emergency for surge locations and are currently in use or available for use as PCU, MT/MS or OBS beds."
* #SurgeInactiveNonICUOccupied "Count of occupied inactive PCU, MT, MS and OBS surge beds. Inactive Non-ICU surge beds are any non-licensed beds that can be utilized in an emergency for surge locations for use as PCU, MT/MS or OBS beds but are not currently in use or active."
* #SurgeInactiveNonICUUnoccupied "Count of unoccupied inactive PCU, MT, MS and OBS surge beds. Inactive Non-ICU surge beds are any non-licensed beds that can be utilized in an emergency for surge locations for use as PCU, MT/MS or OBS beds but are not currently in use or active."
* #BurnOccupied "Census across all burn unit beds."
* #BurnUnoccupied "Count of unoccupied burn unit beds."
* #NegativePressureOccupied "Census across all negative pressure beds."
* #NegativePressureUnoccupied "Count of unoccupied negative pressure beds."
* #AdultEDCensus "Census of all adult patients in the emergency department"
* #AdultEDAdmittedCensus "Census of all adult patients in the emergency department that have an admit to inpatient or observation order"
* #PedsEDCensus "Census of all pediatric patients in the emergency department"
* #PedsEDAdmittedCensus "Census of all pediatric patients in the emergency department that have an admit to inpatient or observation order"
* #TotalEDCensus "Census of all patients in the emergency department"
* #TotalEDAdmittedCensus "Census of all patients in the emergency department that have an admit to inpatient or observation order"

---

// File: input/fsh/invariants/bundle-contain-all-measurereport-references.fsh


/*
Invariant: bundle-contain-all-measurereport-references
Description: "MeasureReport Bundle: must contain all Resources that are references by MeasureReport references"
Severity: #error
Expression: "Bundle.entry.resource.where($this.is(MeasureReport)).descendants().reference.where($this.startsWith('#').not()).all((%resource.entry.fullUrl.join('|')&'|').contains(($this&'|')))"
*/

Invariant: bundle-contain-all-measurereport-references
Description: "All referenced resources SHALL be contained within the Bundle. 
If this fails, use the following FHIRPath expression to discover missing resources: 
Bundle.entry.resource.descendants().reference.where($this.startsWith('#').not()).where((%resource.entry.fullUrl.join('|')&'|').contains(($this&'|')).not())"
Expression: "Bundle.entry.resource.descendants().reference.where($this.startsWith('#').not()).all((%resource.entry.fullUrl.join('|')&'|').contains(($this&'|')))"
Severity: #error

---

// File: input/fsh/invariants/bundle-no-modifier-extensions.fsh

Invariant: bundle-no-modifier-extensions
Description: "MeasureReport Bundle:  must not contain any modifierExensions"
Severity: #error
Expression: "(descendants().select(modifierExtension)).exists().not()"

---

// File: input/fsh/invariants/terminology-requirements.fsh

// This file handles Invariants enforcing special terminology rules including code systems and a choice of bindings across elements or resources

Invariant: encounter-ach-initial-population
Description: "Encounter: (class must be from ACH encounter class) or (type from 'Encounter Inpatient', 'Emergency Department Visit', or 'Observation Services') or (Encounter location type from 'Inpatient, Emergency, and Observation Locations')"
Severity: #error
Expression: "class.memberOf('http://hl7.org/fhir/us/nhsn-dqm/ValueSet/ach-encounter-class').exists() or type.where(coding.memberOf('http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.666.5.307')).exists() or type.where(coding.memberOf('http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292')).exists() or type.where(coding.memberOf('http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1111.143')).exists() or where(location.location.resolve().type.where(coding.memberOf('http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1046.265')).exists())"

Invariant: medication-coding-from-rxnorm
Description: "Medication: code must contains a RxNorm coding"
Severity: #error
Expression: "code.where(coding.system='http://www.nlm.nih.gov/research/umls/rxnorm').exists()"

Invariant: observation-coding-from-loinc
Description: "Observation: code must contains a LOINC coding"
Severity: #error
Expression: "code.where(coding.system='http://loinc.org').exists()"

Invariant: Condition-coding-from-common-codesystems
Description: "Condition: code must contains a SNOMED CT, ICD-10-CM, or ICD-9-CM coding"
Severity: #error
Expression: "code.coding.where(system='http://snomed.info/sct').exists() or code.coding.where(system='http://hl7.org/fhir/sid/icd-9-cm').exists() or code.coding.where(system='http://hl7.org/fhir/sid/icd-10-cm').exists()"


---

// File: input/fsh/profiles/NHSNMeasureBundle.fsh

Profile: NHSNMeasureBundle
Parent: Bundle
Id: nhsn-measure-bundle
Title: "NHSN Measure Bundle"
Description: "This profile defines a Bundle provided by the MeasureServer containing a Measure resource and all related resources (ValueSet, Library, etc.)."
* obeys bundle-no-modifier-extensions and bundle-contain-all-measurereport-references
* entry ^slicing.discriminator.type = #profile
  * ^slicing.discriminator.path = "resource"
  * ^slicing.rules = #open
* entry contains
    measure 1..1 
* entry[measure] ^short = "The Measure resource"
  * resource 1..
  * resource only CRMIShareableMeasure
  * ^short = "Bundle entry for the Measure resource"

---

// File: input/fsh/profiles/NHSNMeasureReportBundle.fsh

Profile: NHSNMeasureReportBundle
Parent: Bundle
Id: nhsn-measurereport-bundle
Title: "NHSN MeasureReport Bundle"
Description: "This profile defines a valid Submission Bundle to NHSN with all resources contained within. The Bundle is comprised of entry slices representing the data source Organization, a Patients of Interest (POI) List, one Subject List MeasureReport per reportable measure, an Individual MeasureReport List, individual MeasureReports, and the underlying patient-centric clinical information."
* obeys bundle-no-modifier-extensions and bundle-contain-all-measurereport-references
* . ^short = "A Bundle contains a collection of Resources"
// WARNING: The constraint index in the following rule (e.g., constraint[0]) may be incorrect.
// Please compare with the constraint array in the original definition's snapshot and adjust as necessary.
  //* ^constraint.expression.fhir_comments = "<expression value=\"(select(modifierExtension) | descendants().select(modifierExtension)).exists().not()\"/>"
* entry ^slicing.discriminator.type = #profile
  * ^slicing.discriminator.path = "resource"
  //* ^slicing.discriminator.fhir_comments = "<discriminator>\r\n                    <type value=\"type\"/>\r\n                    <path value=\"resource\"/>\r\n                </discriminator>"
  * ^slicing.rules = #open
  * ^short = "An entry in the Bundle; will have a Resource or information"
* entry contains
    submitting-organization 1..1 and
    submitting-device 0..1 and
    poi-list 0..1 and
    subject-list 0..* and
    individual-measurereport 0..* and
    patient 0..*
* entry[submitting-organization] ^short = "The Submitting Organization: the organization that is the source of the data"
  * resource 1..
  * resource only NHSNSubmittingOrganization
    * ^short = "Bundle entry for submitting organization"
* entry[submitting-device] ^short = "The Submitting Device: the device or software that is submitting the data"
  * resource 1..
  * resource only NHSNSubmittingDevice
    * ^short = "Bundle entry for submitting device"
* entry[poi-list] ^short = "The Patients of Interest List: a List containing Patient FHIR IDs that may be included in the Initial Population across all measures"
  * resource 1..
  * resource only PatientsOfInterestList
    * ^short = "The Bundle entry for Patients of Interest List"
* entry[subject-list] ^short = "Summary Measure Report: For each measure, there is one Summary MeasureReport. The Summary MeasureReport includes the population count and a link to the List of Individual MeasureReports that are included in the summary"
  * resource only DEQMSubjectListMeasureReport
    * ^short = "The Bundle entry for a Summary Measure Report"
* entry[individual-measurereport] ^short = "Individual Measure Report: each Individual MeasureReport refers to one Patient and one measure included in the Individual Measure Report List"
  * resource 1..
  * resource only DEQMIndividualMeasureReportProfile
    * ^short = "The Bundle entry for an Individual Measure Report"
* entry[patient] ^short = "The Patients associated with an Individual MeasureReport"
  * resource 1..
  * resource only QICorePatient
    * ^short = "The Bundle entry for a Patient associated with an Individual Measure Report"

---

// File: input/fsh/profiles/NHSNSubmittingDevice.fsh

Profile: NHSNSubmittingDevice
Parent: Device
Id: nhsn-submitting-device
Title: "NHSN Submitting Device"
Description: "This profile includes the name and version of the device or software submitting the report Bundle, and may include other information about the device."
* ^status = #active
* deviceName 1..1
* version 1..*

---

// File: input/fsh/profiles/NHSNSubmittingOrganization.fsh

Profile: NHSNSubmittingOrganization
Parent: USCoreOrganizationProfile
Id: nhsn-submitting-organization
Title: "NHSN Submitting Organization"
Description: "This profile includes the name and identifier of the organization submitting the report Bundle, and may include other information about the organization."
* ^status = #active
* ^date = "2023-05-15T19:23:44-07:00"
* ^jurisdiction = urn:iso:std:iso:3166#US
* identifier contains nhsn_org_id 1..1 MS
* identifier[nhsn_org_id] ^short = "NHSN Org ID"
* identifier[nhsn_org_id] ^patternIdentifier.system = "https://www.cdc.gov/nhsn/OrgID"

---

// File: input/fsh/profiles/PatientsOfInterestList.fsh

Profile: PatientsOfInterestList
Parent: List
Id: poi-list
Title: "Patients-Of-Interest List"
Description: "A Patients of Interest List defines all individual Patients considered for inclusion in NHSN Measure reporting."
* ^status = #active

* identifier 1..
* entry.item only Reference(QICorePatient)
  * ^short = "Patient Of Interest reference"

---

// File: input/fsh/valuesets/AcuteCareHospitalValueSets.fsh

ValueSet: AcuteCareHospitalEncounterStatus
Id: ach-encounter-status
Title: "Acute Care Hospital Encounter Status ValueSet"
Description: "Acute Care Hospital Encounter Status ValueSet"
* $encounter-status#in-progress	"In Progress"
* $encounter-status#finished "Finished"
* $encounter-status#triaged "Triaged"
* $encounter-status#onleave "On Leave" 
* $encounter-status#entered-in-error "Entered in Error"
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false



ValueSet: AcuteCareHospitalEncounterClass
Id: ach-encounter-class
Title: "Acute Care Hospital Encounter Class ValueSet"
Description: "Acute Care Hospital Encounter Class ValueSet"
* $v3-ActCode#EMER	"emergency"
* $v3-ActCode#ACUTE	"inpatient acute"
* $v3-ActCode#IMP	"inpatient encounter"
* $v3-ActCode#NONAC	"inpatient non-acute"
* $v3-ActCode#OBSENC	"observation encounter"
* $v3-ActCode#SS	"short stay"
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false


---

// File: input/fsh/examples/Bundle/jurisdiction-bed-capacity-report-example-bundle.fsh

Alias: $bed-capacity-code-system = http://hl7.org/fhir/us/nhsn-dqm/CodeSystem/healthcare-capacity-codes

Instance: jurisdiction-bed-capacity-report-example
InstanceOf: NHSNMeasureReportBundle
Title: "Jurisdiction Capacity Full Report Bundle Example"
Description: "Example Bundle of jurisidictional report for capacity reporting"
Usage: #example
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:1eaddf4c-2ec0-4dc4-b26f-9586d7a777e1"
* type = #collection
* timestamp = "2023-08-28T07:01:07.563Z"
* entry[+].fullUrl = "http://example.com/fhir/Organization/organization-example-submitting-organization"
* entry[=].resource = organization-example-submitting-organization
* entry[+].fullUrl = "http://example.com/fhir/MeasureReport/bed-capacity-measurereport-example-hosp"
* entry[=].resource = bed-capacity-measurereport-example-hosp
* entry[+].fullUrl = "http://example.com/fhir/MeasureReport/bed-capacity-measurereport-example-ipf"
* entry[=].resource = bed-capacity-measurereport-example-ipf
* entry[+].fullUrl = "http://example.com/fhir/MeasureReport/bed-capacity-measurereport-example-chld"
* entry[=].resource = bed-capacity-measurereport-example-chld


---

// File: input/fsh/examples/Bundle/submission-full-example1.fsh

Instance: submission-full-example1
InstanceOf: NHSNMeasureReportBundle
Title: "Full Submission Bundle Example 1"
Description: "Measure Bundle - Full Submission Bundle Example 1"
Usage: #example
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:1eaddf4c-2ec0-4dc4-b26f-9586d7a777e9"
* type = #collection
* timestamp = "2022-11-15T21:04:29.481+00:00"
* entry[+].fullUrl = "http://example.com/fhir/Organization/organization-example-submitting-organization"
* entry[=].resource = organization-example-submitting-organization
* entry[+].fullUrl = "http://example.com/fhir/Device/device-example-submitting-device"
* entry[=].resource = device-example-submitting-device
* entry[+].fullUrl = "http://example.com/fhir/List/list-example-patients-of-interest"
* entry[=].resource = list-example-patients-of-interest
* entry[+].fullUrl = "http://example.com/fhir/MeasureReport/measurereport-example-ach-subjectlist1"
* entry[=].resource = measurereport-example-ach-subjectlist1
* entry[+].fullUrl = "http://example.com/fhir/Patient/patient-example-sameresultdiffday"
* entry[=].resource = patient-example-sameresultdiffday


* entry[+].fullUrl = "http://example.com/fhir/MeasureReport/measurereport-example-individual-ach-ach-pass1"
* entry[=].resource = measurereport-example-individual-ach-ach-pass1
* entry[+].fullUrl = "http://example.com/fhir/Patient/patient-example-ach-ach-pass1"
* entry[=].resource = patient-example-ach-ach-pass1
* entry[+].fullUrl = "http://example.com/fhir/Encounter/encounter-example-ach-ach-pass1"
* entry[=].resource = encounter-example-ach-ach-pass1
* entry[+].fullUrl = "http://example.com/fhir/Coverage/coverage-example-ach-pass1"
* entry[=].resource = coverage-example-ach-pass1
* entry[+].fullUrl = "http://example.com/fhir/Condition/condition-example-diagnosis-ach-pass1"
* entry[=].resource = condition-example-diagnosis-ach-pass1
* entry[+].fullUrl = "http://example.com/fhir/Device/device-example-ach-ach-pass1-central-line"
* entry[=].resource = device-example-ach-ach-pass1-central-line
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass1-vancomycin"
* entry[=].resource = medicationadministration-example-ach-pass1-vancomycin
* entry[+].fullUrl = "http://example.com/fhir/MedicationRequest/medicationrequest-example-ach-pass1-vancomycin"
* entry[=].resource = medicationrequest-example-ach-pass1-vancomycin
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass1-blood"
* entry[=].resource = observation-example-ach-pass1-blood
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass1-csf"
* entry[=].resource = observation-example-ach-pass1-csf
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass1-gestational-age"
* entry[=].resource = observation-example-ach-pass1-gestational-age
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass1-vitals-weight"
* entry[=].resource = observation-example-ach-pass1-vitals-weight
* entry[+].fullUrl = "http://example.com/fhir/Procedure/procedure-example-ach-ach-pass1-central-line"
* entry[=].resource = procedure-example-ach-ach-pass1-central-line
* entry[+].fullUrl = "http://example.com/fhir/Procedure/procedure-example-ach-ach-pass1-lumbar"
* entry[=].resource = procedure-example-ach-ach-pass1-lumbar
* entry[+].fullUrl = "http://example.com/fhir/ServiceRequest/servicerequest-example-ach-ach-pass1-blood"
* entry[=].resource = servicerequest-example-ach-ach-pass1-blood
* entry[+].fullUrl = "http://example.com/fhir/ServiceRequest/servicerequest-example-ach-ach-pass1-csf"
* entry[=].resource = servicerequest-example-ach-ach-pass1-csf
* entry[+].fullUrl = "http://example.com/fhir/Specimen/specimen-example-ach-ach-pass1-blood"
* entry[=].resource = specimen-example-ach-ach-pass1-blood
* entry[+].fullUrl = "http://example.com/fhir/Specimen/specimen-example-ach-ach-pass1-csf"
* entry[=].resource = specimen-example-ach-ach-pass1-csf


* entry[+].fullUrl = "http://example.com/fhir/MeasureReport/measurereport-example-individual-ach-ach-pass2"
* entry[=].resource = measurereport-example-individual-ach-ach-pass2
* entry[+].fullUrl = "http://example.com/fhir/Patient/patient-example-ach-ach-pass2"
* entry[=].resource = patient-example-ach-ach-pass2
* entry[+].fullUrl = "http://example.com/fhir/Encounter/encounter-example-ach-ach-pass2-emergency"
* entry[=].resource = encounter-example-ach-ach-pass2-emergency
* entry[+].fullUrl = "http://example.com/fhir/Encounter/encounter-example-ach-ach-pass2-inpatient"
* entry[=].resource = encounter-example-ach-ach-pass2-inpatient
* entry[+].fullUrl = "http://example.com/fhir/Coverage/coverage-example-ach-pass2"
* entry[=].resource = coverage-example-ach-pass2
* entry[+].fullUrl = "http://example.com/fhir/Condition/condition-example-diagnosis-ach-pass2-problem"
* entry[=].resource = condition-example-diagnosis-ach-pass2-problem
* entry[+].fullUrl = "http://example.com/fhir/Condition/condition-example-diagnosis-ach-pass2"
* entry[=].resource = condition-example-diagnosis-ach-pass2
* entry[+].fullUrl = "http://example.com/fhir/Device/device-example-ach-ach-pass2-compress-hose"
* entry[=].resource = device-example-ach-ach-pass2-compress-hose
* entry[+].fullUrl = "http://example.com/fhir/DiagnosticReport/diagnosticreport-example-ach-ach-pass2-radiology"
* entry[=].resource = diagnosticreport-example-ach-ach-pass2-radiology
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass2-dex4"
* entry[=].resource = medicationadministration-example-ach-pass2-dex4
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass2-heparin-1"
* entry[=].resource = medicationadministration-example-ach-pass2-heparin-1
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass2-heparin-2"
* entry[=].resource = medicationadministration-example-ach-pass2-heparin-2
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass2-insulin-lispro-1"
* entry[=].resource = medicationadministration-example-ach-pass2-insulin-lispro-1
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass2-insulin-lispro-2"
* entry[=].resource = medicationadministration-example-ach-pass2-insulin-lispro-2
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass2-insulin-lispro-3"
* entry[=].resource = medicationadministration-example-ach-pass2-insulin-lispro-3
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass2-insulin-lispro-4"
* entry[=].resource = medicationadministration-example-ach-pass2-insulin-lispro-4
* entry[+].fullUrl = "http://example.com/fhir/MedicationRequest/medicationrequest-example-ach-pass2-dex4-tablet"
* entry[=].resource = medicationrequest-example-ach-pass2-dex4-tablet
* entry[+].fullUrl = "http://example.com/fhir/MedicationRequest/medicationrequest-example-ach-pass2-heparin"
* entry[=].resource = medicationrequest-example-ach-pass2-heparin
* entry[+].fullUrl = "http://example.com/fhir/MedicationRequest/medicationrequest-example-ach-pass2-insulin-lispro"
* entry[=].resource = medicationrequest-example-ach-pass2-insulin-lispro
* entry[+].fullUrl = "http://example.com/fhir/MedicationRequest/medicationrequest-example-ach-pass2-metformin"
* entry[=].resource = medicationrequest-example-ach-pass2-metformin
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass2-aptt"
* entry[=].resource = observation-example-ach-pass2-aptt
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass2-poc-1"
* entry[=].resource = observation-example-ach-pass2-poc-1
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass2-poc-2"
* entry[=].resource = observation-example-ach-pass2-poc-2
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass2-hemo-a1c"
* entry[=].resource = observation-example-ach-pass2-hemo-a1c
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass2-hemo"
* entry[=].resource = observation-example-ach-pass2-hemo
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass2-vitals-weight"
* entry[=].resource = observation-example-ach-pass2-vitals-weight
* entry[+].fullUrl = "http://example.com/fhir/Procedure/procedure-example-ach-ach-pass2-ivcf"
* entry[=].resource = procedure-example-ach-ach-pass2-ivcf
* entry[+].fullUrl = "http://example.com/fhir/ServiceRequest/servicerequest-example-ach-ach-pass2-aptt"
* entry[=].resource = servicerequest-example-ach-ach-pass2-aptt
* entry[+].fullUrl = "http://example.com/fhir/ServiceRequest/servicerequest-example-ach-ach-pass2-glucose"
* entry[=].resource = servicerequest-example-ach-ach-pass2-glucose
* entry[+].fullUrl = "http://example.com/fhir/ServiceRequest/servicerequest-example-ach-ach-pass2-hemo-a1c"
* entry[=].resource = servicerequest-example-ach-ach-pass2-hemo-a1c
* entry[+].fullUrl = "http://example.com/fhir/ServiceRequest/servicerequest-example-ach-ach-pass2-hemo"
* entry[=].resource = servicerequest-example-ach-ach-pass2-hemo
* entry[+].fullUrl = "http://example.com/fhir/Specimen/specimen-example-ach-ach-pass2-blood-1"
* entry[=].resource = specimen-example-ach-ach-pass2-blood-1
* entry[+].fullUrl = "http://example.com/fhir/Specimen/specimen-example-ach-ach-pass2-blood-2"
* entry[=].resource = specimen-example-ach-ach-pass2-blood-2


* entry[+].fullUrl = "http://example.com/fhir/MeasureReport/measurereport-example-individual-ach-ach-pass3"
* entry[=].resource = measurereport-example-individual-ach-ach-pass3
* entry[+].fullUrl = "http://example.com/fhir/Patient/patient-example-ach-ach-pass3"
* entry[=].resource = patient-example-ach-ach-pass3
* entry[+].fullUrl = "http://example.com/fhir/Encounter/encounter-example-ach-ach-pass3-acute"
* entry[=].resource = encounter-example-ach-ach-pass3-acute
* entry[+].fullUrl = "http://example.com/fhir/Encounter/encounter-example-ach-ach-pass3-short-stay"
* entry[=].resource = encounter-example-ach-ach-pass3-short-stay
* entry[+].fullUrl = "http://example.com/fhir/Coverage/coverage-example-ach-pass3"
* entry[=].resource = coverage-example-ach-pass3
* entry[+].fullUrl = "http://example.com/fhir/Condition/condition-example-diagnosis-ach-pass3-problem"
* entry[=].resource = condition-example-diagnosis-ach-pass3-problem
* entry[+].fullUrl = "http://example.com/fhir/Condition/condition-example-diagnosis-ach-pass3"
* entry[=].resource = condition-example-diagnosis-ach-pass3
* entry[+].fullUrl = "http://example.com/fhir/Device/device-example-ach-ach-pass3-ivcs-pump"
* entry[=].resource = device-example-ach-ach-pass3-ivcs-pump
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass3-enoxaparin"
* entry[=].resource = medicationadministration-example-ach-pass3-enoxaparin
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass3-metronidazole-1"
* entry[=].resource = medicationadministration-example-ach-pass3-metronidazole-1
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass3-metronidazole-2"
* entry[=].resource = medicationadministration-example-ach-pass3-metronidazole-2
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass3-metronidazole-3"
* entry[=].resource = medicationadministration-example-ach-pass3-metronidazole-3
* entry[+].fullUrl = "http://example.com/fhir/MedicationRequest/medicationrequest-example-ach-pass3-cipro"
* entry[=].resource = medicationrequest-example-ach-pass3-cipro
* entry[+].fullUrl = "http://example.com/fhir/MedicationRequest/medicationrequest-example-ach-pass3-enoxaparin"
* entry[=].resource = medicationrequest-example-ach-pass3-enoxaparin
* entry[+].fullUrl = "http://example.com/fhir/MedicationRequest/medicationrequest-example-ach-pass3-metronidazole"
* entry[=].resource = medicationrequest-example-ach-pass3-metronidazole
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass3-cdiff"
* entry[=].resource = observation-example-ach-pass3-cdiff
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass3-vitals-height"
* entry[=].resource = observation-example-ach-pass3-vitals-height
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass3-vitals-weight"
* entry[=].resource = observation-example-ach-pass3-vitals-weight
* entry[+].fullUrl = "http://example.com/fhir/Procedure/procedure-example-ach-ach-pass3-transfusion"
* entry[=].resource = procedure-example-ach-ach-pass3-transfusion
* entry[+].fullUrl = "http://example.com/fhir/ServiceRequest/servicerequest-example-ach-ach-pass3-cdiff"
* entry[=].resource = servicerequest-example-ach-ach-pass3-cdiff
* entry[+].fullUrl = "http://example.com/fhir/Specimen/specimen-example-ach-ach-pass3-stool"
* entry[=].resource = specimen-example-ach-ach-pass3-stool

// The following entries were missing from the Bundle, not sure which MR they apply to


* entry[+].fullUrl = "http://example.com/fhir/Medication/medication-example-vancomycin-15"
* entry[=].resource = medication-example-vancomycin-15
* entry[+].fullUrl = "http://example.com/fhir/Medication/medication-example-dex4-tablet"
* entry[=].resource = medication-example-dex4-tablet
* entry[+].fullUrl = "http://example.com/fhir/Medication/medication-example-heparin"
* entry[=].resource = medication-example-heparin
* entry[+].fullUrl = "http://example.com/fhir/Medication/medication-example-insulin-lispro"
* entry[=].resource = medication-example-insulin-lispro
* entry[+].fullUrl = "http://example.com/fhir/Medication/medication-example-metformin-1000"
* entry[=].resource = medication-example-metformin-1000
* entry[+].fullUrl = "http://example.com/fhir/Medication/medication-example-metronidazole"
* entry[=].resource = medication-example-metronidazole
* entry[+].fullUrl = "http://example.com/fhir/Medication/medication-example-cipro-500"
* entry[=].resource = medication-example-cipro-500
* entry[+].fullUrl = "http://example.com/fhir/Medication/medication-example-enoxaparin"
* entry[=].resource = medication-example-enoxaparin
* entry[+].fullUrl = "http://example.com/fhir/Location/location-example-ach-nicu-level-iii"
* entry[=].resource = location-example-ach-nicu-level-iii
* entry[+].fullUrl = "http://example.com/fhir/Location/location-example-ach-emergency"
* entry[=].resource = location-example-ach-emergency
* entry[+].fullUrl = "http://example.com/fhir/Location/location-example-ach-inpatient"
* entry[=].resource = location-example-ach-inpatient
* entry[+].fullUrl = "http://example.com/fhir/Location/location-example-ach-crit"
* entry[=].resource = location-example-ach-crit
* entry[+].fullUrl = "http://example.com/fhir/Location/location-example-ach-medsurg"
* entry[=].resource = location-example-ach-medsurg
* entry[+].fullUrl = "http://example.com/fhir/List/list-example-ach-individual-measurereport-list"
* entry[=].resource = list-example-ach-individual-measurereport-list
* entry[+].fullUrl = "http://example.com/fhir/Practitioner/practitioner-example"
* entry[=].resource = practitioner-example





---

// File: input/fsh/examples/Condition/condition-example-diagnosis-ach-pass1.fsh

Instance: condition-example-diagnosis-ach-pass1
InstanceOf: USCoreConditionEncounterDiagnosisProfile
Title: "Condition - Example Diagnosis ACH Pass1"
Description: "Condition - Example Diagnosis ACH Pass1 - Encounter Diagnosis: Bacteremia"
Usage: #example
* verificationStatus.coding.version = "4.0.0"
* verificationStatus.coding = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* clinicalStatus = $condition-clinical#active "Active"
* category[us-core] = $condition-category#encounter-diagnosis "Encounter Diagnosis"
* category[us-core].text = "Encounter Diagnosis"
* code.coding[0] = $sct#5758002 "Bacteremia (finding)"
* code.coding[+] = $icd-10-cm#R78.81 "Bacteremia"
* code.text = "Bacteremia"
* subject = Reference(patient-example-ach-ach-pass1)
* subject.display = "Pass1 ACH"


---

// File: input/fsh/examples/Condition/condition-example-diagnosis-ach-pass2-problem.fsh

Instance: condition-example-diagnosis-ach-pass2-problem
InstanceOf: USCoreConditionProblemsHealthConcernsProfile
Title: "Condition - Example Diagnosis ACH Pass2 Problem"
Description: "Condition - Example Diagnosis ACH Pass2 - Problem List: Type 2 diabetes mellitus without complications"
Usage: #example
* verificationStatus.coding.version = "4.0.0"
* verificationStatus.coding = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* clinicalStatus = $condition-clinical#active "Active"
* category[us-core] = $condition-category#problem-list-item "Problem List Item"
* category[us-core].text = "Problem List Item"
* code.coding[0] = $sct#111552007 "Diabetes mellitus without complication (disorder)"
* code.coding[+] = $icd-10-cm#E11.9 "Type 2 diabetes mellitus without complications"
* code.text = "Diabetes mellitus without complication"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"


---

// File: input/fsh/examples/Condition/condition-example-diagnosis-ach-pass2.fsh

Instance: condition-example-diagnosis-ach-pass2
InstanceOf: USCoreConditionEncounterDiagnosisProfile
Title: "Condition - Example Diagnosis ACH Pass2"
Description: "Condition - Example Diagnosis ACH Pass2 - Encounter Diagnosis: Thrombophlebitis of deep femoral vein"
Usage: #example
* verificationStatus.coding.version = "4.0.0"
* verificationStatus.coding = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* clinicalStatus = $condition-clinical#active "Active"
* category[us-core] = $condition-category#encounter-diagnosis "Encounter Diagnosis"
* category[us-core].text = "Encounter Diagnosis"
* code = $sct#1748006 "Thrombophlebitis of deep femoral vein (disorder)"
* code.text = "Thrombophlebitis"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"


---

// File: input/fsh/examples/Condition/condition-example-diagnosis-ach-pass3-problem.fsh

Instance: condition-example-diagnosis-ach-pass3-problem
InstanceOf: USCoreConditionProblemsHealthConcernsProfile
Title: "Condition - Example Diagnosis ACH Pass3 Problem"
Description: "Condition - Example Diagnosis ACH Pass3 - Problem List: Acute sinusitis"
Usage: #example
* verificationStatus.coding.version = "4.0.0"
* verificationStatus.coding = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* clinicalStatus = $condition-clinical#resolved "Resolved"
* category[us-core] = $condition-category#problem-list-item "Problem List Item"
* category[us-core].text = "Problem List Item"
* code.coding[0] = $sct#15805002 "Acute sinusitis (disorder)"
* code.coding[+] = $icd-10-cm#J01.90 "Acute sinusitis, unspecified"
* code.text = "Acute sinusitis"
* subject = Reference(patient-example-ach-ach-pass3)
* subject.display = "Pass3 ACH"
* onsetDateTime = "2024-01-21T07:32:00-05:00"
* abatementDateTime = "2024-02-02T16:43:00-05:00"


---

// File: input/fsh/examples/Condition/condition-example-diagnosis-ach-pass3.fsh

Instance: condition-example-diagnosis-ach-pass3
InstanceOf: USCoreConditionEncounterDiagnosisProfile
Title: "Condition - Example Diagnosis ACH Pass3"
Description: "Condition - Example Diagnosis ACH Pass3 - Encounter Diagnosis: Enterocolitis due to Clostridium difficile"
Usage: #example
* verificationStatus.coding.version = "4.0.0"
* verificationStatus.coding = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* clinicalStatus = $condition-clinical#active "Active"
* category[us-core] = $condition-category#encounter-diagnosis "Encounter Diagnosis"
* category[us-core].text = "Encounter Diagnosis"
* code.coding[+] = $icd-10-cm#A04.7 "Enterocolitis due to Clostridium difficile"
* code.text = "Enterocolitis due to Clostridium difficile"
* subject = Reference(patient-example-ach-ach-pass3)
* subject.display = "Pass3 ACH"


---

// File: input/fsh/examples/Coverage/coverage-example-ach-pass1.fsh

Instance: coverage-example-ach-pass1
InstanceOf: QICoreCoverage
Title: "Coverage - Example ACH Pass1"
Description: "Coverage - Example ACH Pass1 - Medicaid: Child Beneficiary"
Usage: #example
* identifier.type = $v2-0203#MB "Member Number"
* identifier.system = "http://example.org/fhir/memberidentifier"
* identifier.value = "084536836"
* status = #active
* type = $v3-ActCode#SUBSUPP "subsidized supplemental health program"
* policyHolder.display = "Mom Parent"
* subscriberId = "98435938934"
* beneficiary = Reference(patient-example-ach-ach-pass1)
* relationship = $subscriber-relationship#child "Child"
* relationship.text = "Child"
* period.start = "2020-08-01"
* payor.display = "Medicaid"


---

// File: input/fsh/examples/Coverage/coverage-example-ach-pass2.fsh

Instance: coverage-example-ach-pass2
InstanceOf: QICoreCoverage
Title: "Coverage - Example ACH Pass2"
Description: "Coverage - Example ACH Pass2 - Commercial HMO"
Usage: #example
* identifier.type = $v2-0203#MB "Member Number"
* identifier.system = "http://example.org/fhir/memberidentifier"
* identifier.value = "93565936"
* status = #active
* type = $v3-ActCode#HMO "health maintenance organization policy"
* subscriberId = "89345743"
* beneficiary = Reference(patient-example-ach-ach-pass2)
* relationship = $subscriber-relationship#self "Self"
* payor.display = "PayerComm"


---

// File: input/fsh/examples/Coverage/coverage-example-ach-pass3.fsh

Instance: coverage-example-ach-pass3
InstanceOf: QICoreCoverage
Title: "Coverage - Example ACH Pass3"
Description: "Coverage - Example ACH Pass3 - Commercial PPO"
Usage: #example
* identifier.type = $v2-0203#MB "Member Number"
* identifier.system = "http://example.org/fhir/memberidentifier"
* identifier.value = "0945345"
* status = #active
* type = $v3-ActCode#PPO "preferred provider organization policy"
* subscriberId = "7843574536"
* beneficiary = Reference(patient-example-ach-ach-pass3)
* relationship = $subscriber-relationship#self "Self"
* payor.display = "Nation First Health Care"


---

// File: input/fsh/examples/Device/device-example-ach-ach-pass1-central-line.fsh

Instance: device-example-ach-ach-pass1-central-line
InstanceOf: QICoreDevice
Title: "Device - Example ACH Pass1 Central Line"
Description: "Device - Example ACH Pass1 - Central venous catheter"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.698.8"
* identifier.value = "1000510341"

* type.coding[+] = $sct#52124006 "Central venous catheter, device (physical object)"
* type.text = "Central venous catheter, device"
* patient = Reference(patient-example-ach-ach-pass1)
* patient.display = "Pass1 ACH"




---

// File: input/fsh/examples/Device/device-example-ach-ach-pass2-compress-hose.fsh

Instance: device-example-ach-ach-pass2-compress-hose
InstanceOf: QICoreDevice
Title: "Device - Example ACH Pass2 Compress Hose"
Description: "Device - Example ACH Pass2 - Graduated compression elastic hosiery"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.698.8"
* identifier.value = "100051034"

* type.coding[+] = $sct#348681001 "Graduated compression elastic hosiery (physical object)"
* type.text = "Graduated compression elastic hosiery"
* patient = Reference(patient-example-ach-ach-pass2)
* patient.display = "Pass2 ACH"




---

// File: input/fsh/examples/Device/device-example-ach-ach-pass3-ivcs-pump.fsh

Instance: device-example-ach-ach-pass3-ivcs-pump
InstanceOf: QICoreDevice
Title: "Device - Example ACH Pass3 Ivcs Pump"
Description: "Device - Example ACH Pass3 - Intermittent venous compression system pump"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.698.8"
* identifier.value = "100051035"

* type.coding[+] = $sct#469317002 "Intermittent venous compression system pump (physical object)"
* type.text = "Intermittent venous compression system pump"
* patient = Reference(patient-example-ach-ach-pass3)
* patient.display = "Pass3 ACH"




---

// File: input/fsh/examples/Device/device-example-submitting-device.fsh

Instance: device-example-submitting-device
InstanceOf: NHSNSubmittingDevice
Title: "Device - Example Submitting Device 1"
Description: "Device - Submitting Device Example 1"
Usage: #example
* deviceName.name = "NHSN Link"
* deviceName.type = #model-name
* version[0].component.value = "api"
* version[=].value = "0.9.0"
* version[+].component.value = "api"
* version[=].value = "20230713.1"
* version[+].component.value = "api"
* version[=].value = "3f9662a8"
* version[+].component.value = "cqf-ruler"
* version[=].value = "0.13.0"

---

// File: input/fsh/examples/DiagnosticReport/diagnosticreport-example-ach-ach-pass2-cardiopulmonary.fsh

Instance: diagnosticreport-example-ach-ach-pass2-cardiopulmonary
InstanceOf: QICoreDiagnosticReportNote
Title: "DiagnosticReport - Example ACH Pass2 Cardiopulmonary"
Description: "DiagnosticReport - Example ACH Pass2 - Cardiovascular stress testing"
Usage: #example
* status = #final
* category = $loinc#LP29708-2 "Cardiology"
* category.text = "Cardiology"
* code = $sct#76746007 "Cardiovascular stress testing"
* code.text = "Cardiovascular stress testing"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* encounter = Reference(encounter-example-ach-ach-pass2-inpatient)
* encounter.display = "Hospital Admission"
* conclusionCode = $sct#710031008 "Inducible ischemia manifest on stress test post myocardial infarction (finding)"
* effectiveDateTime = "2024-03-01T23:14:00-05:00"
* issued = "2024-03-02T08:52:00-05:00"

 


---

// File: input/fsh/examples/DiagnosticReport/diagnosticreport-example-ach-ach-pass2-lab-cbc.fsh

Instance: diagnosticreport-example-ach-ach-pass2-lab-cbc
InstanceOf: QICoreDiagnosticReportLab
Title: "DiagnosticReport - Example ACH Pass2 Lab CBC"
Description: "DiagnosticReport - Example ACH Pass2 - CBC panel - Blood by Automated count"
Usage: #example
* status = #final
* category[LaboratorySlice] = http://terminology.hl7.org/CodeSystem/v2-0074#LAB "Laboratory"
* category[LaboratorySlice].text = "Laboratory"
* code = $loinc#58410-2 "CBC panel - Blood by Automated count"
* code.text = "CBC Panel"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* encounter = Reference(encounter-example-ach-ach-pass2-inpatient)
* encounter.display = "Hospital Admission"
* effectiveDateTime = "2024-01-31T23:01:00-05:00"
* issued = "2024-01-31T23:02:00-05:00"
* result[+] = Reference(observation-example-ach-pass2-hemo-a1c)
* result[+] = Reference(observation-example-ach-pass2-poc-1)






---

// File: input/fsh/examples/DiagnosticReport/diagnosticreport-example-ach-ach-pass2-radiology.fsh

Instance: diagnosticreport-example-ach-ach-pass2-radiology
InstanceOf: QICoreDiagnosticReportNote
Title: "DiagnosticReport - Example ACH Pass2 Radiology"
Description: "DiagnosticReport - Example ACH Pass2 - Ultrasonography of right lower limb"
Usage: #example
* status = #final
* category = $loinc#LP29684-5 "Radiology"
* category.text = "Radiology"
* code = $sct#14331000087103 "Doppler ultrasonography of vascular structure of right lower limb (procedure)"
* code.text = "ultrasonography of right lower limb"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* encounter = Reference(encounter-example-ach-ach-pass2-inpatient)
* encounter.display = "Hospital Admission"
* conclusionCode = $sct#128053003 "Deep venous thrombosis (disorder)"
* effectiveDateTime = "2024-02-01T23:14:00-05:00"
* issued = "2024-02-02T08:52:00-05:00"




---

// File: input/fsh/examples/Encounter/encounter-example-ach-ach-pass1.fsh

Instance: encounter-example-ach-ach-pass1
InstanceOf: QICoreEncounter
Title: "Encounter - Example ACH Pass1 - Inpatient"
Description: "Encounter - Example ACH Pass1 - Hospital Admission"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.698.8"
* identifier.value = "10005104251"
* status = #in-progress
* class = $v3-ActCode#ACUTE "inpatient acute"
* type = $sct#32485007 "Hospital admission (procedure)"
* type.text = "Hospital Admission"
* subject = Reference(patient-example-ach-ach-pass1)
* subject.display = "Pass1 ACH"
* period.start = "2024-02-01T16:02:00-05:00"
* period.end = "2024-02-04T19:00:00-05:00"
* reasonCode = $icd-10-cm#R50.9 "Fever, unspecified"
* reasonCode.text = "Fever"
* diagnosis.condition = Reference(condition-example-diagnosis-ach-pass1)
* diagnosis.condition.display = "Thrombophlebitis"
* hospitalization.admitSource = $admit-source#born "Born in hospital"
* hospitalization.admitSource.text = "Born in hospital"
* hospitalization.dischargeDisposition = $discharge-disposition#oth "Other"
* hospitalization.dischargeDisposition.text = "Other"
* location[0].location.display = "ACH Neonatal critical care"
* location[=].location = Reference(location-example-ach-nicu-level-iii)
* location[=].physicalType = http://terminology.hl7.org/CodeSystem/location-physical-type#wa "Ward"
* location[=].period.start = "2024-02-01T16:02:00-05:00"
* location[=].period.end = "2024-02-02T16:02:00-05:00"

---

// File: input/fsh/examples/Encounter/encounter-example-ach-ach-pass2-emergency.fsh

Instance: encounter-example-ach-ach-pass2-emergency
InstanceOf: QICoreEncounter
Title: "Encounter - Example ACH Pass2 - Emergency"
Description: "Encounter - Example ACH Pass2 - Emergency department visit"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.698.8"
* identifier.value = "10005104252a"
* status = #triaged
* class = $v3-ActCode#EMER "emergency"
* type = $sct#4525004 "Emergency department patient visit"
* type.text = "Emergency department patient visit"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
/*
* participant[0].type = $v3-ParticipationType#ADM "admitter"
* participant[=].type.text = "admitter"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
* participant[+].type = $v3-ParticipationType#DIS "discharger"
* participant[=].type.text = "discharger"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
* participant[+].type = $v3-ParticipationType#ATND "attender"
* participant[=].type.text = "attender"
* participant[=].period.start = "2022-08-17T16:59:38Z"
* participant[=].period.end = "2022-08-22T19:09:00Z"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
*/
* period.start = "2024-01-31T02:35:00-05:00"
* period.end = "2024-01-31T22:02:00-05:00"
* reasonCode = $icd-10-cm#M79.661 "Pain in right lower leg"
* reasonCode.text = "Leg pain, lower right"
* diagnosis.condition = Reference(condition-example-diagnosis-ach-pass2)
* diagnosis.condition.display = "Thrombophlebitis"
/* account.identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.3.726"
* account.identifier.value = "100066850"
* account.display = "HYPO,EDADD"
*/
* hospitalization.admitSource = $admit-source#other "Other"
* hospitalization.admitSource.text = "Walk-in"
/* hospitalization.dischargeDisposition = $discharge-disposition#snf "Skilled nursing facility"
* hospitalization.dischargeDisposition.text = "Skilled nursing facility"
*/

* location[0].location.display = "ACH Emergency Department"
* location[=].location = Reference(location-example-ach-emergency)
* location[=].physicalType = http://terminology.hl7.org/CodeSystem/location-physical-type#wa "Ward"
* location[=].period.start = "2024-01-31T02:35:00-05:00"
* location[=].period.end = "2024-02-01T01:02:00-05:00"

---

// File: input/fsh/examples/Encounter/encounter-example-ach-ach-pass2-inpatient.fsh

Instance: encounter-example-ach-ach-pass2-inpatient
InstanceOf: QICoreEncounter
Title: "Encounter - Example ACH Pass2 - Inpatient"
Description: "Encounter - Example ACH Pass2 - Hospital admission"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.698.8"
* identifier.value = "10005104252b"
* status = #finished
* class = $v3-ActCode#IMP "inpatient encounter"
* type = $sct#32485007 "Hospital admission (procedure)"
* type.text = "Hospital Admission"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
/*
* participant[0].type = $v3-ParticipationType#ADM "admitter"
* participant[=].type.text = "admitter"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
* participant[+].type = $v3-ParticipationType#DIS "discharger"
* participant[=].type.text = "discharger"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
* participant[+].type = $v3-ParticipationType#ATND "attender"
* participant[=].type.text = "attender"
* participant[=].period.start = "2022-08-17T16:59:38Z"
* participant[=].period.end = "2022-08-22T19:09:00Z"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
*/
* period.start = "2024-01-31T22:02:00-05:00"
* period.end = "2024-02-02T16:22:00-05:00"
//* reasonCode = $icd-10-cm#R50.9 "Fever, unspecified"
//* reasonCode.text = "Fever"
/* diagnosis.condition.display = "Hyperglycemia"
* account.identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.3.726"
* account.identifier.value = "100066850"
* account.display = "HYPO,EDADD"
*/
* hospitalization.admitSource = $admit-source#emd "From accident/emergency department"
* hospitalization.admitSource.text = "Emergency Department"
* hospitalization.dischargeDisposition = $discharge-disposition#exp "expired"
* hospitalization.dischargeDisposition.text = "Expired"


* location[0].location.display = "ACH Inpatient Hospital Ward"
* location[=].location = Reference(location-example-ach-inpatient)
* location[=].physicalType = http://terminology.hl7.org/CodeSystem/location-physical-type#wa "Ward"
* location[=].period.start = "2024-02-01T01:02:00-05:00"
* location[=].period.end = "2024-02-02T16:22:00-05:00"

---

// File: input/fsh/examples/Encounter/encounter-example-ach-ach-pass3-acute.fsh

Instance: encounter-example-ach-ach-pass3-acute
InstanceOf: QICoreEncounter
Title: "Encounter - Example ACH Pass3 - Acute"
Description: "Encounter - Example ACH Pass3 - Acute critical care visit"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.698.8"
* identifier.value = "10005104253a"
* status = #finished
* class = $v3-ActCode#ACUTE "inpatient acute"
* type = $sct#453701000124103 "In-person encounter"
* type.text = "Critical care visit"
* subject = Reference(patient-example-ach-ach-pass3)
* subject.display = "Pass3 ACH"
/*
* participant[0].type = $v3-ParticipationType#ADM "admitter"
* participant[=].type.text = "admitter"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
* participant[+].type = $v3-ParticipationType#DIS "discharger"
* participant[=].type.text = "discharger"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
* participant[+].type = $v3-ParticipationType#ATND "attender"
* participant[=].type.text = "attender"
* participant[=].period.start = "2022-08-17T16:59:38Z"
* participant[=].period.end = "2022-08-22T19:09:00Z"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
*/
* period.start = "2024-02-02T16:43:00-05:00"
* period.end = "2024-02-03T19:58:00-05:00"
//* reasonCode = $icd-10-cm#R19.7 "Diarrhea, unspecified"
//* reasonCode.text = "Diarrhea"
/* diagnosis.condition.display = "Hyperglycemia"
* account.identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.3.726"
* account.identifier.value = "100066850"
* account.display = "HYPO,EDADD"
*/
* hospitalization.admitSource = $admit-source#other "Other"
* hospitalization.admitSource.text = "From Short Stay"
* hospitalization.dischargeDisposition = $discharge-disposition#home "Home"
* hospitalization.dischargeDisposition.text = "Home"


* location[0].location.display = "ACH Medical Critical Care"
* location[=].location = Reference(location-example-ach-crit)
* location[=].physicalType = http://terminology.hl7.org/CodeSystem/location-physical-type#wa "Ward"
* location[=].period.start = "2024-02-02T16:43:00-05:00"
* location[=].period.end = "2024-03-02T19:58:00-05:00"

---

// File: input/fsh/examples/Encounter/encounter-example-ach-ach-pass3-short-stay.fsh

Instance: encounter-example-ach-ach-pass3-short-stay
InstanceOf: QICoreEncounter
Title: "Encounter - Example ACH Pass3 - Short Stay"
Description: "Encounter - Example ACH Pass3 - Hospital admission short stay"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.698.8"
* identifier.value = "10005104253a"
* status = #in-progress
* class = $v3-ActCode#SS "short stay"
* type = $sct#8715000 "Hospital admission, elective (procedure)"
* type.text = "Hospital Admission, Elective Procedure"
* subject = Reference(patient-example-ach-ach-pass3)
* subject.display = "Pass3 ACH"
/*
* participant[0].type = $v3-ParticipationType#ADM "admitter"
* participant[=].type.text = "admitter"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
* participant[+].type = $v3-ParticipationType#DIS "discharger"
* participant[=].type.text = "discharger"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
* participant[+].type = $v3-ParticipationType#ATND "attender"
* participant[=].type.text = "attender"
* participant[=].period.start = "2022-08-17T16:59:38Z"
* participant[=].period.end = "2022-08-22T19:09:00Z"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
*/
* period.start = "2024-02-01T14:12:00-05:00"
* period.end = "2024-02-02T16:43:00-05:00"
* reasonCode = $icd-10-cm#R19.7 "Diarrhea, unspecified"
* reasonCode.text = "Diarrhea"
* diagnosis.condition = Reference(condition-example-diagnosis-ach-pass3)
* diagnosis.condition.display = "Enterocolitis due to Clostridium difficile"
/* account.identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.3.726"
* account.identifier.value = "100066850"
* account.display = "HYPO,EDADD"
*/
* hospitalization.admitSource = $admit-source#outp "From outpatient department"
* hospitalization.admitSource.text = "Outpatient"
/* hospitalization.dischargeDisposition = $discharge-disposition#snf "Skilled nursing facility"
* hospitalization.dischargeDisposition.text = "Skilled nursing facility"
*/

* location[0].location.display = "ACH Medical-Surgical Ward"
* location[=].location = Reference(location-example-ach-medsurg)
* location[=].physicalType = http://terminology.hl7.org/CodeSystem/location-physical-type#wa "Ward"
* location[=].period.start = "2024-02-01T14:12:00-05:00"
* location[=].period.end = "2024-02-02T16:43:00-05:00"

---

// File: input/fsh/examples/Library/Library_NHSNdQMAcuteCareHospitalInitialPopulation.fsh

Instance: NHSNdQMAcuteCareHospitalInitialPopulationLibrary
InstanceOf: Library
Title: "Acute Care Hospital Initial Population Library"
Description: "Example Library of Acute Care Hospital (ACH) Initial Population Measure"
Usage: #example

* contained = ach-options
* extension.url = "http://hl7.org/fhir/StructureDefinition/cqf-cqlOptions"
* extension.valueReference = Reference(ach-options)
//* url = "http://www.cdc.gov/nhsn/fhirportal/dqm/ig/Library/NHSNdQMAcuteCareHospitalInitialPopulation"
* version = "1.0.0"
* status = #active 
* name = "NHSNdQMAcuteCareHospitalInitialPopulation"
* type = $library-type#logic-library
* relatedArtifact[0].type = #depends-on
* relatedArtifact[=].display = "FHIR model information"
* relatedArtifact[=].resource = "http://fhir.org/guides/cqf/common/Library/FHIR-ModelInfo|4.0.1"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Library FHIRHelpers"
* relatedArtifact[=].resource = "http://fhir.org/guides/cqf/common/Library/FHIRHelpers|4.0.1"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Library Global"
* relatedArtifact[=].resource = "http://hl7.org/fhir/us/cqfmeasures/Library/MATGlobalCommonFunctions"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Library SDE"
* relatedArtifact[=].resource = "http://hl7.org/fhir/us/cqfmeasures/Library/SupplementalDataElements"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Code system ActCode"
* relatedArtifact[=].resource = "http://terminology.hl7.org/CodeSystem/v3-ActCode"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Code system Observation Category"
* relatedArtifact[=].resource = "http://terminology.hl7.org/CodeSystem/observation-category"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Code system LOINC"
* relatedArtifact[=].resource = "http://loinc.org"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Code system V2-0074"
* relatedArtifact[=].resource = "http://terminology.hl7.org/CodeSystem/v2-0074"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Value set Inpatient, Emergency, and Observation Locations"
* relatedArtifact[=].resource = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1046.265"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Value set Emergency Department Visit"
* relatedArtifact[=].resource = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Value set Encounter Inpatient"
* relatedArtifact[=].resource = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.666.5.307"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Value set Observation Services"
* relatedArtifact[=].resource = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1111.143"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Value set NHSN Inpatient Encounter Class Codes"
* relatedArtifact[=].resource = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1046.274"
* parameter[0].name = #"Measurement Period"
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #Period
* parameter[+].name = #Patient
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #Patient
* parameter[+].name = #"Qualifying Encounters During Measurement Period"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Encounter
* parameter[+].name = #Encounters
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Encounter
* parameter[+].name = #"Encounters with Patient Hospital Locations"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Encounter
* parameter[+].name = #"Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Encounter
* parameter[+].name = #DiagnosticReports
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #DiagnosticReport
* parameter[+].name = #Observations
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Observation
* parameter[+].name = #"IP Encounters Overlap Measurement Period"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Encounter
* parameter[+].name = #"Get Locations from IP Encounters in Measurement Period"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Location
* parameter[+].name = #"SDE Condition"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Condition
* parameter[+].name = #"SDE Device"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Device
* parameter[+].name = #"SDE DiagnosticReport Lab"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #DiagnosticReport
* parameter[+].name = #"SDE DiagnosticReport Note"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #DiagnosticReport
* parameter[+].name = #"SDE DiagnosticReport Others"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #DiagnosticReport
* parameter[+].name = #"SDE Encounter"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Encounter
* parameter[+].name = #"SDE Location"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Location
* parameter[+].name = #"SDE Medication Administration"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #MedicationAdministration
* parameter[+].name = #"SDE Medication Request"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #MedicationRequest
* parameter[+].name = #"SDE Medication"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Medication
* parameter[+].name = #"SDE Observation Lab Category"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Observation
* parameter[+].name = #"SDE Observation Vital Signs Category"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Observation
* parameter[+].name = #"SDE Observation Category"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Observation
* parameter[+].name = #"SDE Coverage"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Coverage
* parameter[+].name = #"SDE Procedure"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Procedure
* parameter[+].name = #"SDE Specimen"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Specimen
* parameter[+].name = #"SDE Service Request"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #ServiceRequest
* parameter[+].name = #"SDE Minimal Patient"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #Patient
* dataRequirement[0].type = #Patient
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Patient"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "active"
* dataRequirement[=].mustSupport[+] = "name"
* dataRequirement[=].mustSupport[+] = "telecom"
* dataRequirement[=].mustSupport[+] = "gender"
* dataRequirement[=].mustSupport[+] = "birthDate"
* dataRequirement[=].mustSupport[+] = "deceased"
* dataRequirement[=].mustSupport[+] = "address"
* dataRequirement[=].mustSupport[+] = "maritalStatus"
* dataRequirement[=].mustSupport[+] = "multipleBirth"
* dataRequirement[=].mustSupport[+] = "photo"
* dataRequirement[=].mustSupport[+] = "contact"
* dataRequirement[=].mustSupport[+] = "communication"
* dataRequirement[=].mustSupport[+] = "generalPractitioner"
* dataRequirement[=].mustSupport[+] = "managingOrganization"
* dataRequirement[=].mustSupport[+] = "link"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "type"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "statusHistory"
* dataRequirement[=].mustSupport[+] = "class"
* dataRequirement[=].mustSupport[+] = "classHistory"
* dataRequirement[=].mustSupport[+] = "serviceType"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "length"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "diagnosis"
* dataRequirement[=].mustSupport[+] = "account"
* dataRequirement[=].mustSupport[+] = "hospitalization"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].codeFilter.path = "type"
* dataRequirement[=].codeFilter.valueSet = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.666.5.307"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "type"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "statusHistory"
* dataRequirement[=].mustSupport[+] = "class"
* dataRequirement[=].mustSupport[+] = "classHistory"
* dataRequirement[=].mustSupport[+] = "serviceType"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "length"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "diagnosis"
* dataRequirement[=].mustSupport[+] = "account"
* dataRequirement[=].mustSupport[+] = "hospitalization"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].codeFilter.path = "type"
* dataRequirement[=].codeFilter.valueSet = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "type"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "statusHistory"
* dataRequirement[=].mustSupport[+] = "class"
* dataRequirement[=].mustSupport[+] = "classHistory"
* dataRequirement[=].mustSupport[+] = "serviceType"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "length"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "diagnosis"
* dataRequirement[=].mustSupport[+] = "account"
* dataRequirement[=].mustSupport[+] = "hospitalization"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].codeFilter.path = "type"
* dataRequirement[=].codeFilter.valueSet = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1111.143"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "class"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "statusHistory"
* dataRequirement[=].mustSupport[+] = "classHistory"
* dataRequirement[=].mustSupport[+] = "type"
* dataRequirement[=].mustSupport[+] = "serviceType"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "length"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "diagnosis"
* dataRequirement[=].mustSupport[+] = "account"
* dataRequirement[=].mustSupport[+] = "hospitalization"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].codeFilter.path = "class"
* dataRequirement[=].codeFilter.valueSet = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1046.274"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "status"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "statusHistory"
* dataRequirement[=].mustSupport[+] = "class"
* dataRequirement[=].mustSupport[+] = "classHistory"
* dataRequirement[=].mustSupport[+] = "type"
* dataRequirement[=].mustSupport[+] = "serviceType"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "length"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "diagnosis"
* dataRequirement[=].mustSupport[+] = "account"
* dataRequirement[=].mustSupport[+] = "hospitalization"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "operationalStatus"
* dataRequirement[=].mustSupport[+] = "name"
* dataRequirement[=].mustSupport[+] = "alias"
* dataRequirement[=].mustSupport[+] = "description"
* dataRequirement[=].mustSupport[+] = "mode"
* dataRequirement[=].mustSupport[+] = "type"
* dataRequirement[=].mustSupport[+] = "telecom"
* dataRequirement[=].mustSupport[+] = "address"
* dataRequirement[=].mustSupport[+] = "physicalType"
* dataRequirement[=].mustSupport[+] = "position"
* dataRequirement[=].mustSupport[+] = "managingOrganization"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].mustSupport[+] = "hoursOfOperation"
* dataRequirement[=].mustSupport[+] = "availabilityExceptions"
* dataRequirement[=].mustSupport[+] = "endpoint"
* dataRequirement[+].type = #DiagnosticReport
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/DiagnosticReport"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "basedOn"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "code"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "encounter"
* dataRequirement[=].mustSupport[+] = "effective"
* dataRequirement[=].mustSupport[+] = "issued"
* dataRequirement[=].mustSupport[+] = "performer"
* dataRequirement[=].mustSupport[+] = "resultsInterpreter"
* dataRequirement[=].mustSupport[+] = "specimen"
* dataRequirement[=].mustSupport[+] = "result"
* dataRequirement[=].mustSupport[+] = "conclusion"
* dataRequirement[=].mustSupport[+] = "conclusionCode"
* dataRequirement[+].type = #Observation
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Observation"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "basedOn"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "code"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "focus"
* dataRequirement[=].mustSupport[+] = "encounter"
* dataRequirement[=].mustSupport[+] = "effective"
* dataRequirement[=].mustSupport[+] = "issued"
* dataRequirement[=].mustSupport[+] = "performer"
* dataRequirement[=].mustSupport[+] = "value"
* dataRequirement[=].mustSupport[+] = "dataAbsentReason"
* dataRequirement[=].mustSupport[+] = "interpretation"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[=].mustSupport[+] = "bodySite"
* dataRequirement[=].mustSupport[+] = "method"
* dataRequirement[=].mustSupport[+] = "specimen"
* dataRequirement[=].mustSupport[+] = "device"
* dataRequirement[=].mustSupport[+] = "referenceRange"
* dataRequirement[=].mustSupport[+] = "hasMember"
* dataRequirement[=].mustSupport[+] = "derivedFrom"
* dataRequirement[=].mustSupport[+] = "component"
* dataRequirement[+].type = #Condition
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Condition"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "clinicalStatus"
* dataRequirement[=].mustSupport[+] = "verificationStatus"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "severity"
* dataRequirement[=].mustSupport[+] = "code"
* dataRequirement[=].mustSupport[+] = "bodySite"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "encounter"
* dataRequirement[=].mustSupport[+] = "onset"
* dataRequirement[=].mustSupport[+] = "abatement"
* dataRequirement[=].mustSupport[+] = "recordedDate"
* dataRequirement[=].mustSupport[+] = "stage"
* dataRequirement[=].mustSupport[+] = "evidence"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[+].type = #Device
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Device"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "definition"
* dataRequirement[=].mustSupport[+] = "udiCarrier"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "statusReason"
* dataRequirement[=].mustSupport[+] = "distinctIdentifier"
* dataRequirement[=].mustSupport[+] = "manufacturer"
* dataRequirement[=].mustSupport[+] = "manufactureDate"
* dataRequirement[=].mustSupport[+] = "expirationDate"
* dataRequirement[=].mustSupport[+] = "lotNumber"
* dataRequirement[=].mustSupport[+] = "serialNumber"
* dataRequirement[=].mustSupport[+] = "deviceName"
* dataRequirement[=].mustSupport[+] = "modelNumber"
* dataRequirement[=].mustSupport[+] = "partNumber"
* dataRequirement[=].mustSupport[+] = "type"
* dataRequirement[=].mustSupport[+] = "specialization"
* dataRequirement[=].mustSupport[+] = "version"
* dataRequirement[=].mustSupport[+] = "property"
* dataRequirement[=].mustSupport[+] = "patient"
* dataRequirement[=].mustSupport[+] = "owner"
* dataRequirement[=].mustSupport[+] = "contact"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "url"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[=].mustSupport[+] = "safety"
* dataRequirement[=].mustSupport[+] = "parent"
* dataRequirement[+].type = #MedicationAdministration
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/MedicationAdministration"
* dataRequirement[=].mustSupport[0] = "effective"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "instantiates"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "statusReason"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "medication"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "context"
* dataRequirement[=].mustSupport[+] = "supportingInformation"
* dataRequirement[=].mustSupport[+] = "performer"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "request"
* dataRequirement[=].mustSupport[+] = "device"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[=].mustSupport[+] = "dosage"
* dataRequirement[=].mustSupport[+] = "eventHistory"
* dataRequirement[+].type = #MedicationRequest
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/MedicationRequest"
* dataRequirement[=].mustSupport[0] = "authoredOn"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "statusReason"
* dataRequirement[=].mustSupport[+] = "intent"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "doNotPerform"
* dataRequirement[=].mustSupport[+] = "reported"
* dataRequirement[=].mustSupport[+] = "medication"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "encounter"
* dataRequirement[=].mustSupport[+] = "requester"
* dataRequirement[=].mustSupport[+] = "recorder"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "instantiatesCanonical"
* dataRequirement[=].mustSupport[+] = "instantiatesUri"
* dataRequirement[=].mustSupport[+] = "courseOfTherapyType"
* dataRequirement[=].mustSupport[+] = "dosageInstruction"
* dataRequirement[+].type = #Medication
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Medication"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "code"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "manufacturer"
* dataRequirement[=].mustSupport[+] = "form"
* dataRequirement[=].mustSupport[+] = "amount"
* dataRequirement[=].mustSupport[+] = "ingredient"
* dataRequirement[=].mustSupport[+] = "batch"
* dataRequirement[+].type = #Coverage
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Coverage"
* dataRequirement[=].mustSupport[0] = "period"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "type"
* dataRequirement[=].mustSupport[+] = "policyHolder"
* dataRequirement[=].mustSupport[+] = "subscriber"
* dataRequirement[=].mustSupport[+] = "subscriberId"
* dataRequirement[=].mustSupport[+] = "beneficiary"
* dataRequirement[=].mustSupport[+] = "dependent"
* dataRequirement[=].mustSupport[+] = "relationship"
* dataRequirement[=].mustSupport[+] = "payor"
* dataRequirement[=].mustSupport[+] = "class"
* dataRequirement[=].mustSupport[+] = "order"
* dataRequirement[=].mustSupport[+] = "network"
* dataRequirement[=].mustSupport[+] = "subrogation"
* dataRequirement[=].mustSupport[+] = "contract"
* dataRequirement[+].type = #Procedure
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Procedure"
* dataRequirement[=].mustSupport[0] = "performed"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "instantiatesCanonical"
* dataRequirement[=].mustSupport[+] = "instantiatesUri"
* dataRequirement[=].mustSupport[+] = "basedOn"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "statusReason"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "code"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "encounter"
* dataRequirement[=].mustSupport[+] = "recorder"
* dataRequirement[=].mustSupport[+] = "asserter"
* dataRequirement[=].mustSupport[+] = "performer"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "bodySite"
* dataRequirement[=].mustSupport[+] = "outcome"
* dataRequirement[=].mustSupport[+] = "report"
* dataRequirement[=].mustSupport[+] = "complication"
* dataRequirement[=].mustSupport[+] = "complicationDetail"
* dataRequirement[=].mustSupport[+] = "followUp"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[=].mustSupport[+] = "focalDevice"
* dataRequirement[=].mustSupport[+] = "usedReference"
* dataRequirement[=].mustSupport[+] = "usedCode"
* dataRequirement[+].type = #Specimen
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Specimen"
* dataRequirement[=].mustSupport[0] = "collection"
* dataRequirement[=].mustSupport[+] = "collection.collected"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "accessionIdentifier"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "type"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "receivedTime"
* dataRequirement[=].mustSupport[+] = "parent"
* dataRequirement[=].mustSupport[+] = "request"
* dataRequirement[=].mustSupport[+] = "processing"
* dataRequirement[=].mustSupport[+] = "container"
* dataRequirement[=].mustSupport[+] = "condition"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[+].type = #ServiceRequest
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/ServiceRequest"
* dataRequirement[=].mustSupport[0] = "authoredOn"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "instantiatesCanonical"
* dataRequirement[=].mustSupport[+] = "instantiatesUri"
* dataRequirement[=].mustSupport[+] = "basedOn"
* dataRequirement[=].mustSupport[+] = "replaces"
* dataRequirement[=].mustSupport[+] = "requisition"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "intent"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "doNotPerform"
* dataRequirement[=].mustSupport[+] = "code"
* dataRequirement[=].mustSupport[+] = "orderDetail"
* dataRequirement[=].mustSupport[+] = "quantity"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "encounter"
* dataRequirement[=].mustSupport[+] = "occurrence"
* dataRequirement[=].mustSupport[+] = "asNeeded"
* dataRequirement[=].mustSupport[+] = "requester"
* dataRequirement[=].mustSupport[+] = "performerType"
* dataRequirement[=].mustSupport[+] = "performer"
* dataRequirement[=].mustSupport[+] = "locationCode"
* dataRequirement[=].mustSupport[+] = "locationReference"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "insurance"
* dataRequirement[=].mustSupport[+] = "supportingInfo"
* dataRequirement[=].mustSupport[+] = "specimen"
* dataRequirement[=].mustSupport[+] = "bodySite"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[=].mustSupport[+] = "patientInstruction"
* dataRequirement[=].mustSupport[+] = "relevantHistory"
* content.contentType = #text/cql
* content.data = "bGlicmFyeSBOSFNOZFFNQWN1dGVDYXJlSG9zcGl0YWxJbml0aWFsUG9wdWxhdGlvbiB2ZXJzaW9uICcwLjAuMDE0JwoKdXNpbmcgRkhJUiB2ZXJzaW9uICc0LjAuMScKCmluY2x1ZGUgRkhJUkhlbHBlcnMgdmVyc2lvbiAnNC4wLjEnIGNhbGxlZCBGSElSSGVscGVycwppbmNsdWRlIE1BVEdsb2JhbENvbW1vbkZ1bmN0aW9uc0ZISVI0IHZlcnNpb24gJzYuMS4wMDAnIGNhbGxlZCBHbG9iYWwKaW5jbHVkZSBTdXBwbGVtZW50YWxEYXRhRWxlbWVudHNGSElSNCB2ZXJzaW9uICcyLjAuMDAwJyBjYWxsZWQgU0RFCmluY2x1ZGUgU2hhcmVkUmVzb3VyY2VDcmVhdGlvbiB2ZXJzaW9uICcwLjEuMDA1JyBjYWxsZWQgU2hhcmVkUmVzb3VyY2UKCmNvZGVzeXN0ZW0gIkFjdENvZGUiOiAnaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1BY3RDb2RlJwpjb2Rlc3lzdGVtICJPYnNlcnZhdGlvbiBDYXRlZ29yeSI6ICdodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL29ic2VydmF0aW9uLWNhdGVnb3J5Jwpjb2Rlc3lzdGVtICJMT0lOQyI6ICdodHRwOi8vbG9pbmMub3JnJyAKY29kZXN5c3RlbSAiVjItMDA3NCI6ICdodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YyLTAwNzQnCgp2YWx1ZXNldCAiSW5wYXRpZW50LCBFbWVyZ2VuY3ksIGFuZCBPYnNlcnZhdGlvbiBMb2NhdGlvbnMiOiAnaHR0cDovL2N0cy5ubG0ubmloLmdvdi9maGlyL1ZhbHVlU2V0LzIuMTYuODQwLjEuMTEzNzYyLjEuNC4xMDQ2LjI2NScKdmFsdWVzZXQgIkVtZXJnZW5jeSBEZXBhcnRtZW50IFZpc2l0IjogJ2h0dHA6Ly9jdHMubmxtLm5paC5nb3YvZmhpci9WYWx1ZVNldC8yLjE2Ljg0MC4xLjExMzg4My4zLjExNy4xLjcuMS4yOTInCnZhbHVlc2V0ICJFbmNvdW50ZXIgSW5wYXRpZW50IjogJ2h0dHA6Ly9jdHMubmxtLm5paC5nb3YvZmhpci9WYWx1ZVNldC8yLjE2Ljg0MC4xLjExMzg4My4zLjY2Ni41LjMwNycKdmFsdWVzZXQgIk9ic2VydmF0aW9uIFNlcnZpY2VzIjogJ2h0dHA6Ly9jdHMubmxtLm5paC5nb3YvZmhpci9WYWx1ZVNldC8yLjE2Ljg0MC4xLjExMzc2Mi4xLjQuMTExMS4xNDMnCnZhbHVlc2V0ICJOSFNOIElucGF0aWVudCBFbmNvdW50ZXIgQ2xhc3MgQ29kZXMiOiAnaHR0cDovL2N0cy5ubG0ubmloLmdvdi9maGlyL1ZhbHVlU2V0LzIuMTYuODQwLjEuMTEzNzYyLjEuNC4xMDQ2LjI3NCcKCi8vY29kZSBmb3IgT2JzZXJ2YXRpb24gQ2F0ZWdvcnkKY29kZSAibGFib3JhdG9yeSI6ICdsYWJvcmF0b3J5JyBmcm9tICJPYnNlcnZhdGlvbiBDYXRlZ29yeSIgZGlzcGxheSAnTGFib3JhdG9yeScKY29kZSAic29jaWFsLWhpc3RvcnkiOiAnc29jaWFsLWhpc3RvcnknIGZyb20gIk9ic2VydmF0aW9uIENhdGVnb3J5IiBkaXNwbGF5ICdTb2NpYWwgSGlzdG9yeScKY29kZSAidml0YWwtc2lnbnMiOiAndml0YWwtc2lnbnMnIGZyb20gIk9ic2VydmF0aW9uIENhdGVnb3J5IiBkaXNwbGF5ICdWaXRhbCBTaWducycKY29kZSAiaW1hZ2luZyI6ICdpbWFnaW5nJyBmcm9tICJPYnNlcnZhdGlvbiBDYXRlZ29yeSIgZGlzcGxheSAnSW1hZ2luZycKY29kZSAicHJvY2VkdXJlIjogJ3Byb2NlZHVyZScgZnJvbSAiT2JzZXJ2YXRpb24gQ2F0ZWdvcnkiIGRpc3BsYXkgJ1Byb2NlZHVyZScKY29kZSAic3VydmV5IjogJ3N1cnZleScgZnJvbSAiT2JzZXJ2YXRpb24gQ2F0ZWdvcnkiIGRpc3BsYXkgJ1N1cnZleScKCi8vY29kZSBmb3IgRGlhZ25vc3RpYyBSZXBvcnQgQ2F0ZWdvcnkKY29kZSAiTEFCIjogJ0xBQicgZnJvbSAiVjItMDA3NCIgZGlzcGxheSAnTGFib3JhdG9yeScKY29kZSAiUmFkaW9sb2d5IjogJ0xQMjk2ODQtNScgZnJvbSAiTE9JTkMiIGRpc3BsYXkgJ1JhZGlvbG9neScKY29kZSAiUGF0aG9sb2d5IjogJ0xQNzgzOS02JyBmcm9tICJMT0lOQyIgZGlzcGxheSAnUGF0aG9sb2d5Jwpjb2RlICJDYXJkaW9sb2d5IjogJ0xQMjk3MDgtMicgZnJvbSAiTE9JTkMiIGRpc3BsYXkgJ0NhcmRpb2xvZ3knCgpwYXJhbWV0ZXIgIk1lYXN1cmVtZW50IFBlcmlvZCIgCiAgICBkZWZhdWx0IEludGVydmFsW0AyMDI0LTAxLTAxVDAwOjAwOjAwLjAsIEAyMDI0LTAxLTMxVDAwOjAwOjAwLjApCgpjb250ZXh0IFBhdGllbnQgCgpkZWZpbmUgIlF1YWxpZnlpbmcgRW5jb3VudGVycyBEdXJpbmcgTWVhc3VyZW1lbnQgUGVyaW9kIjoKICggW0VuY291bnRlcjogIkVuY291bnRlciBJbnBhdGllbnQiXQogIHVuaW9uIFtFbmNvdW50ZXI6ICJFbWVyZ2VuY3kgRGVwYXJ0bWVudCBWaXNpdCJdCiAgdW5pb24gW0VuY291bnRlcjogIk9ic2VydmF0aW9uIFNlcnZpY2VzIl0KICB1bmlvbiBbRW5jb3VudGVyOiBjbGFzcyBpbiAiTkhTTiBJbnBhdGllbnQgRW5jb3VudGVyIENsYXNzIENvZGVzIl0pIFF1YWxpZnlpbmdFbmNvdW50ZXJzCiAgd2hlcmUgUXVhbGlmeWluZ0VuY291bnRlcnMuc3RhdHVzIGluIHsnaW4tcHJvZ3Jlc3MnLCAnZmluaXNoZWQnLCAndHJpYWdlZCcsICdvbmxlYXZlJywgJ2VudGVyZWQtaW4tZXJyb3InfQogICAgYW5kIFF1YWxpZnlpbmdFbmNvdW50ZXJzLnBlcmlvZCBvdmVybGFwcyAiTWVhc3VyZW1lbnQgUGVyaW9kIiAKCmRlZmluZSAiRW5jb3VudGVycyB3aXRoIFBhdGllbnQgSG9zcGl0YWwgTG9jYXRpb25zIjoKICAiRW5jb3VudGVycyIgRW5jb3VudGVycwogIHdoZXJlIGV4aXN0cygKICAgIEVuY291bnRlcnMubG9jYXRpb24gRW5jb3VudGVyTG9jYXRpb24KICAgIHdoZXJlIEdsb2JhbC5HZXRMb2NhdGlvbihFbmNvdW50ZXJMb2NhdGlvbi5sb2NhdGlvbikudHlwZSBpbiAiSW5wYXRpZW50LCBFbWVyZ2VuY3ksIGFuZCBPYnNlcnZhdGlvbiBMb2NhdGlvbnMiCiAgICAgIGFuZCBFbmNvdW50ZXJMb2NhdGlvbi5wZXJpb2Qgb3ZlcmxhcHMgRW5jb3VudGVycy5wZXJpb2QKICApCiAgYW5kIEVuY291bnRlcnMuc3RhdHVzIGluIHsnaW4tcHJvZ3Jlc3MnLCAnZmluaXNoZWQnLCAndHJpYWdlZCcsICdvbmxlYXZlJywgJ2VudGVyZWQtaW4tZXJyb3InfQogIGFuZCBFbmNvdW50ZXJzLnBlcmlvZCBvdmVybGFwcyAiTWVhc3VyZW1lbnQgUGVyaW9kIgoKZGVmaW5lICJJbml0aWFsIFBvcHVsYXRpb24iOgogICJRdWFsaWZ5aW5nIEVuY291bnRlcnMgRHVyaW5nIE1lYXN1cmVtZW50IFBlcmlvZCIKICB1bmlvbiAiRW5jb3VudGVycyB3aXRoIFBhdGllbnQgSG9zcGl0YWwgTG9jYXRpb25zIgoKZGVmaW5lICJFbmNvdW50ZXJzIjoKICBbRW5jb3VudGVyXQoKZGVmaW5lICJEaWFnbm9zdGljUmVwb3J0cyI6CiAgW0RpYWdub3N0aWNSZXBvcnRdCgpkZWZpbmUgIk9ic2VydmF0aW9ucyI6CiAgW09ic2VydmF0aW9uXQoKLy9Eb3VibGUgY2hlY2tpbmcgZm9yIElQJ3MgcGVyaW9kIGR1cmluZyBNUCBhcyBJUCBpcyBjcmVhdGVkIG91dCBvZiBxdWFsaWZ5aW5nIGVuY291bnRlcnMsIHdoaWNoIGNoZWNrcyBmb3IgaXQsIAovL2FuZCBlbmNvdW50ZXIncyBsb2NhdGlvbnMsIHdoaWNoIGRvZXNuJ3QKZGVmaW5lICJJUCBFbmNvdW50ZXJzIE92ZXJsYXAgTWVhc3VyZW1lbnQgUGVyaW9kIjoKICAiSW5pdGlhbCBQb3B1bGF0aW9uIiBJUAogIHdoZXJlIElQLnBlcmlvZCBvdmVybGFwcyAiTWVhc3VyZW1lbnQgUGVyaW9kIgoKZGVmaW5lICJHZXQgTG9jYXRpb25zIGZyb20gSVAgRW5jb3VudGVycyBpbiBNZWFzdXJlbWVudCBQZXJpb2QiOgogIGZsYXR0ZW4oIklQIEVuY291bnRlcnMgT3ZlcmxhcCBNZWFzdXJlbWVudCBQZXJpb2QiIEVuY291bnRlcnMKICBsZXQgbG9jYXRpb25FbGVtZW50czogRW5jb3VudGVycy5sb2NhdGlvbgogIHJldHVybgogICAgbG9jYXRpb25FbGVtZW50cyBMRQogICAgbGV0IGxvY2F0aW9uUmVmZXJlbmNlOiBMRS5sb2NhdGlvbgogICAgcmV0dXJuIEdsb2JhbC5HZXRMb2NhdGlvbihsb2NhdGlvblJlZmVyZW5jZSkpCgovLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KLy9TdXBwbGVtZW50YWwgRGF0YSBFbGVtZW50Ci8vV2hlbiBGSElSLmNhbm9uaWNhbCB2YWx1ZSBpcyBwcmVzZW50LCBVUyBDb3JlIDMuMS4xIHByb2ZpbGVzIGFyZSB1c2VkCi8vV2hlbiBGSElSLmNhbm9uaWNhbCB2YWx1ZSBpcyBub3QgcHJlc2VudCwgRkhJUiBCYXNlIHByb2ZpbGVzIGFyZSB1c2VkCi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQpkZWZpbmUgIlNERSBDb25kaXRpb24iOgogIFtDb25kaXRpb25dIENvbmRpdGlvbnMgCiAgd2hlcmUgZXhpc3RzKCJJbml0aWFsIFBvcHVsYXRpb24iKQogIHJldHVybiBTaGFyZWRSZXNvdXJjZS5Db25kaXRpb25SZXNvdXJjZShDb25kaXRpb25zLAogIHtGSElSLmNhbm9uaWNhbHt2YWx1ZTogJ2h0dHA6Ly9obDcub3JnL2ZoaXIvdXMvbmhzbi1kcW0vU3RydWN0dXJlRGVmaW5pdGlvbi9hY2gtY29uZGl0aW9uJ319KQoKZGVmaW5lICJTREUgRGV2aWNlIjoKICBbRGV2aWNlXSBEZXZpY2VzIAogIHdoZXJlIGV4aXN0cygiSW5pdGlhbCBQb3B1bGF0aW9uIikKICByZXR1cm4gRGV2aWNlUmVzb3VyY2UoRGV2aWNlcywKICB7RkhJUi5jYW5vbmljYWx7dmFsdWU6ICdodHRwOi8vaGw3Lm9yZy9maGlyL3VzL25oc24tZHFtL1N0cnVjdHVyZURlZmluaXRpb24vYWNoLWRldmljZSd9fSkKCmRlZmluZSAiU0RFIERpYWdub3N0aWNSZXBvcnQgTGFiIjoKICAiRGlhZ25vc3RpY1JlcG9ydHMiIERpYWdub3N0aWNSZXBvcnRzCiAgd2hlcmUgKGV4aXN0cyhEaWFnbm9zdGljUmVwb3J0cy5jYXRlZ29yeSBDYXRlZ29yeSB3aGVyZSBDYXRlZ29yeSB+ICJMQUIiKQogICAgYW5kIGV4aXN0cygKICAgICAgIkluaXRpYWwgUG9wdWxhdGlvbiIgSVAKICAgICAgd2hlcmUgR2xvYmFsLiJOb3JtYWxpemUgSW50ZXJ2YWwiKERpYWdub3N0aWNSZXBvcnRzLmVmZmVjdGl2ZSkgb3ZlcmxhcHMgSVAucGVyaW9kKSkKICByZXR1cm4gU2hhcmVkUmVzb3VyY2UuRGlhZ25vc3RpY1JlcG9ydExhYlJlc291cmNlKERpYWdub3N0aWNSZXBvcnRzLAogIHtGSElSLmNhbm9uaWNhbHt2YWx1ZTogJ2h0dHA6Ly9obDcub3JnL2ZoaXIvdXMvbmhzbi1kcW0vU3RydWN0dXJlRGVmaW5pdGlvbi9hY2gtZGlhZ25vc3RpY3JlcG9ydC1sYWInfX0pCiAKZGVmaW5lICJTREUgRGlhZ25vc3RpY1JlcG9ydCBOb3RlIjoKICAiRGlhZ25vc3RpY1JlcG9ydHMiIERpYWdub3N0aWNSZXBvcnRzCiAgd2hlcmUgKChleGlzdHMoRGlhZ25vc3RpY1JlcG9ydHMuY2F0ZWdvcnkgQ2F0ZWdvcnkgd2hlcmUgQ2F0ZWdvcnkgfiAiUmFkaW9sb2d5IikpCiAgICBvciBleGlzdHMoKERpYWdub3N0aWNSZXBvcnRzLmNhdGVnb3J5IENhdGVnb3J5IHdoZXJlIENhdGVnb3J5IH4gIlBhdGhvbG9neSIpKQogICAgb3IgZXhpc3RzKChEaWFnbm9zdGljUmVwb3J0cy5jYXRlZ29yeSBDYXRlZ29yeSB3aGVyZSBDYXRlZ29yeSB+ICJDYXJkaW9sb2d5IikpKQogICAgYW5kIGV4aXN0cygKICAgICAgIkluaXRpYWwgUG9wdWxhdGlvbiIgSVAKICAgICAgd2hlcmUgR2xvYmFsLiJOb3JtYWxpemUgSW50ZXJ2YWwiKERpYWdub3N0aWNSZXBvcnRzLmVmZmVjdGl2ZSkgb3ZlcmxhcHMgSVAucGVyaW9kKQogIHJldHVybiBEaWFnbm9zdGljUmVwb3J0UmVzb3VyY2UoRGlhZ25vc3RpY1JlcG9ydHMsCiAge0ZISVIuY2Fub25pY2Fse3ZhbHVlOiAnaHR0cDovL2hsNy5vcmcvZmhpci91cy9uaHNuLWRxbS9TdHJ1Y3R1cmVEZWZpbml0aW9uL2FjaC1kaWFnbm9zdGljcmVwb3J0LW5vdGUnfX0pCgpkZWZpbmUgIlNERSBEaWFnbm9zdGljUmVwb3J0IE90aGVycyI6CiAgW0RpYWdub3N0aWNSZXBvcnRdIERpYWdub3N0aWNSZXBvcnRzCiAgd2hlcmUgbm90ICgoZXhpc3RzKERpYWdub3N0aWNSZXBvcnRzLmNhdGVnb3J5IENhdGVnb3J5IHdoZXJlIENhdGVnb3J5IH4gIlJhZGlvbG9neSIpKQogICAgb3IgZXhpc3RzKChEaWFnbm9zdGljUmVwb3J0cy5jYXRlZ29yeSBDYXRlZ29yeSB3aGVyZSBDYXRlZ29yeSB+ICJQYXRob2xvZ3kiKSkKICAgIG9yIGV4aXN0cygoRGlhZ25vc3RpY1JlcG9ydHMuY2F0ZWdvcnkgQ2F0ZWdvcnkgd2hlcmUgQ2F0ZWdvcnkgfiAiQ2FyZGlvbG9neSIpKQogICAgb3IgZXhpc3RzKERpYWdub3N0aWNSZXBvcnRzLmNhdGVnb3J5IENhdGVnb3J5IHdoZXJlIENhdGVnb3J5IH4gIkxBQiIpKQogICAgYW5kIGV4aXN0cygiSW5pdGlhbCBQb3B1bGF0aW9uIiBJUAogICAgICB3aGVyZSBHbG9iYWwuIk5vcm1hbGl6ZSBJbnRlcnZhbCIoRGlhZ25vc3RpY1JlcG9ydHMuZWZmZWN0aXZlKSBvdmVybGFwcyBJUC5wZXJpb2QpCiAgcmV0dXJuIERpYWdub3N0aWNSZXBvcnRSZXNvdXJjZShEaWFnbm9zdGljUmVwb3J0cywKICB7RkhJUi5jYW5vbmljYWx7dmFsdWU6ICdodHRwOi8vaGw3Lm9yZy9maGlyL3VzL25oc24tZHFtL1N0cnVjdHVyZURlZmluaXRpb24vYWNoLWRpYWdub3N0aWNyZXBvcnQnfX0pCgpkZWZpbmUgIlNERSBFbmNvdW50ZXIiOiAKICAiRW5jb3VudGVycyIgRW5jb3VudGVycwogIHdoZXJlIGV4aXN0cygKICAgICJJbml0aWFsIFBvcHVsYXRpb24iIElQCiAgICB3aGVyZSBFbmNvdW50ZXJzLnBlcmlvZCBvdmVybGFwcyBJUC5wZXJpb2QpCiAgcmV0dXJuIEVuY291bnRlclJlc291cmNlKEVuY291bnRlcnMsCiAge0ZISVIuY2Fub25pY2Fse3ZhbHVlOiAnaHR0cDovL2hsNy5vcmcvZmhpci91cy9uaHNuLWRxbS9TdHJ1Y3R1cmVEZWZpbml0aW9uL2FjaC1lbmNvdW50ZXInfX0pCgpkZWZpbmUgIlNERSBMb2NhdGlvbiI6CiAgIkdldCBMb2NhdGlvbnMgZnJvbSBJUCBFbmNvdW50ZXJzIGluIE1lYXN1cmVtZW50IFBlcmlvZCIgTG9jYXRpb25zCiAgd2hlcmUgZXhpc3RzKCJJbml0aWFsIFBvcHVsYXRpb24iKQogIGFuZCBMb2NhdGlvbnMgaXMgbm90IG51bGwKICByZXR1cm4gU2hhcmVkUmVzb3VyY2UuTG9jYXRpb25SZXNvdXJjZShMb2NhdGlvbnMsCiAge0ZISVIuY2Fub25pY2Fse3ZhbHVlOiAnaHR0cDovL2hsNy5vcmcvZmhpci91cy9uaHNuLWRxbS9TdHJ1Y3R1cmVEZWZpbml0aW9uL2FjaC1sb2NhdGlvbid9fSkKIApkZWZpbmUgIlNERSBNZWRpY2F0aW9uIEFkbWluaXN0cmF0aW9uIjoKICBbTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9uXSBNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb25zIAogIHdoZXJlIGV4aXN0cygKICAgICJJbml0aWFsIFBvcHVsYXRpb24iIElQCiAgICB3aGVyZSBHbG9iYWwuIk5vcm1hbGl6ZSBJbnRlcnZhbCIoTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9ucy5lZmZlY3RpdmUpIG92ZXJsYXBzIElQLnBlcmlvZCkKICByZXR1cm4gU2hhcmVkUmVzb3VyY2UuTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9uUmVzb3VyY2UoTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9ucywKICB7RkhJUi5jYW5vbmljYWx7dmFsdWU6ICdodHRwOi8vaGw3Lm9yZy9maGlyL3VzL25oc24tZHFtL1N0cnVjdHVyZURlZmluaXRpb24vYWNoLW1lZGljYXRpb25hZG1pbmlzdHJhdGlvbid9fSkKIApkZWZpbmUgIlNERSBNZWRpY2F0aW9uIFJlcXVlc3QiOgogIFtNZWRpY2F0aW9uUmVxdWVzdF0gTWVkaWNhdGlvblJlcXVlc3RzIAogIHdoZXJlIGV4aXN0cygKICAgICJJbml0aWFsIFBvcHVsYXRpb24iIElQCiAgICB3aGVyZSBNZWRpY2F0aW9uUmVxdWVzdHMuYXV0aG9yZWRPbiBkdXJpbmcgSVAucGVyaW9kKQogIHJldHVybiBTaGFyZWRSZXNvdXJjZS5NZWRpY2F0aW9uUmVxdWVzdFJlc291cmNlKE1lZGljYXRpb25SZXF1ZXN0cywKICB7RkhJUi5jYW5vbmljYWx7dmFsdWU6ICdodHRwOi8vaGw3Lm9yZy9maGlyL3VzL25oc24tZHFtL1N0cnVjdHVyZURlZmluaXRpb24vYWNoLW1lZGljYXRpb25yZXF1ZXN0J319KQoKZGVmaW5lICJTREUgTWVkaWNhdGlvbiI6CiAgKCJTREUgTWVkaWNhdGlvbiBSZXF1ZXN0IgogIHVuaW9uICJTREUgTWVkaWNhdGlvbiBBZG1pbmlzdHJhdGlvbiIpIE1lZFJlcU9yQWRtaW4KICB3aGVyZSBNZWRSZXFPckFkbWluLm1lZGljYXRpb24gaXMgRkhJUi5SZWZlcmVuY2UKICBhbmQgZXhpc3RzKCJJbml0aWFsIFBvcHVsYXRpb24iKSAvL05vIGxvbmdlciBuZWVkIHRvIGNoZWNrIGZvciB0aW1pbmcgaGVyZSBiZWNhdXNlIGl0J3MgY2hlY2tlZCBpbiBTREUgTWVkaWNhdGlvbiBSZXF1ZXN0L0FkbWluaXN0cmlhdGlvbgogIHJldHVybiBTaGFyZWRSZXNvdXJjZS5NZWRpY2F0aW9uUmVzb3VyY2UoR2V0TWVkaWNhdGlvbkZyb20oTWVkUmVxT3JBZG1pbi5tZWRpY2F0aW9uKSwKICB7RkhJUi5jYW5vbmljYWx7dmFsdWU6ICdodHRwOi8vaGw3Lm9yZy9maGlyL3VzL25oc24tZHFtL1N0cnVjdHVyZURlZmluaXRpb24vYWNoLW1lZGljYXRpb24nfX0pCgpkZWZpbmUgIlNERSBPYnNlcnZhdGlvbiBMYWIgQ2F0ZWdvcnkiOgogICJPYnNlcnZhdGlvbnMiIE9ic2VydmF0aW9ucyAKICB3aGVyZSAoZXhpc3RzKE9ic2VydmF0aW9ucy5jYXRlZ29yeSBDYXRlZ29yeSB3aGVyZSBDYXRlZ29yeSB+ICJsYWJvcmF0b3J5IikpCiAgICBhbmQgZXhpc3RzKAogICAgICAiSW5pdGlhbCBQb3B1bGF0aW9uIiBJUAogICAgICB3aGVyZSBHbG9iYWwuIk5vcm1hbGl6ZSBJbnRlcnZhbCIoT2JzZXJ2YXRpb25zLmVmZmVjdGl2ZSkgb3ZlcmxhcHMgSVAucGVyaW9kKQogIHJldHVybiBTaGFyZWRSZXNvdXJjZS5PYnNlcnZhdGlvbkxhYlJlc291cmNlKE9ic2VydmF0aW9ucywKICB7RkhJUi5jYW5vbmljYWx7dmFsdWU6ICdodHRwOi8vaGw3Lm9yZy9maGlyL3VzL25oc24tZHFtL1N0cnVjdHVyZURlZmluaXRpb24vYWNoLW9ic2VydmF0aW9uLWxhYid9fSkKCi8vVml0YWwgU2lnbnMgT2JzZXJ2YXRpb24gaGFzIGl0cyBvd24gcHJvZmlsZSBpbiBGSElSIEJhc2UKZGVmaW5lICJTREUgT2JzZXJ2YXRpb24gVml0YWwgU2lnbnMgQ2F0ZWdvcnkiOgogICJPYnNlcnZhdGlvbnMiIE9ic2VydmF0aW9ucyAKICB3aGVyZSAoZXhpc3RzKE9ic2VydmF0aW9ucy5jYXRlZ29yeSBDYXRlZ29yeSB3aGVyZSBDYXRlZ29yeSB+ICJ2aXRhbC1zaWducyIpKQogICAgYW5kIGV4aXN0cygKICAgICAgIkluaXRpYWwgUG9wdWxhdGlvbiIgSVAKICAgICAgd2hlcmUgR2xvYmFsLiJOb3JtYWxpemUgSW50ZXJ2YWwiKE9ic2VydmF0aW9ucy5lZmZlY3RpdmUpIG92ZXJsYXBzIElQLnBlcmlvZCkKICByZXR1cm4gT2JzZXJ2YXRpb25WaXRhbFNpZ25zUmVzb3VyY2UoT2JzZXJ2YXRpb25zLAogIHtGSElSLmNhbm9uaWNhbHt2YWx1ZTogJ2h0dHA6Ly9obDcub3JnL2ZoaXIvdXMvbmhzbi1kcW0vU3RydWN0dXJlRGVmaW5pdGlvbi9hY2gtb2JzZXJ2YXRpb24tdml0YWxzJ319KQoKLy9EZWZhdWx0aW5nIHRvIGJhc2UgRkhJUiBwcm9maWxlIGFzIHRoZXJlIGFyZSBubyBpbmRpdmlkdWFsIHByb2ZpbGVzIGluIFVTIENvcmUgMy4xLjEgdGhhdCBjb3ZlciB0aGVzZSBPYnNlcnZhdGlvbiBjYXRlZ29yaWVzCmRlZmluZSAiU0RFIE9ic2VydmF0aW9uIENhdGVnb3J5IjoKICAiT2JzZXJ2YXRpb25zIiBPYnNlcnZhdGlvbnMgCiAgd2hlcmUgKChleGlzdHMoT2JzZXJ2YXRpb25zLmNhdGVnb3J5IENhdGVnb3J5IHdoZXJlIENhdGVnb3J5IH4gInNvY2lhbC1oaXN0b3J5IikpCiAgICBvciAoZXhpc3RzKE9ic2VydmF0aW9ucy5jYXRlZ29yeSBDYXRlZ29yeSB3aGVyZSBDYXRlZ29yeSB+ICJzdXJ2ZXkiKSkKICAgIG9yIChleGlzdHMoT2JzZXJ2YXRpb25zLmNhdGVnb3J5IENhdGVnb3J5IHdoZXJlIENhdGVnb3J5IH4gImltYWdpbmciKSkKICAgIG9yIChleGlzdHMoT2JzZXJ2YXRpb25zLmNhdGVnb3J5IENhdGVnb3J5IHdoZXJlIENhdGVnb3J5IH4gInByb2NlZHVyZSIpKSkKICAgIGFuZCBleGlzdHMoCiAgICAgICJJbml0aWFsIFBvcHVsYXRpb24iIElQCiAgICAgIHdoZXJlIEdsb2JhbC4iTm9ybWFsaXplIEludGVydmFsIihPYnNlcnZhdGlvbnMuZWZmZWN0aXZlKSBvdmVybGFwcyBJUC5wZXJpb2QpCiAgcmV0dXJuIE9ic2VydmF0aW9uUmVzb3VyY2UoT2JzZXJ2YXRpb25zLAogIHtGSElSLmNhbm9uaWNhbHt2YWx1ZTogJ2h0dHA6Ly9obDcub3JnL2ZoaXIvdXMvbmhzbi1kcW0vU3RydWN0dXJlRGVmaW5pdGlvbi9hY2gtb2JzZXJ2YXRpb24nfX0pCgpkZWZpbmUgIlNERSBDb3ZlcmFnZSI6IAoJW0NvdmVyYWdlXSBDb3ZlcmFnZXMKICB3aGVyZSBleGlzdHMoCiAgICAiSW5pdGlhbCBQb3B1bGF0aW9uIiBJUAogICAgd2hlcmUgQ292ZXJhZ2VzLnBlcmlvZCBvdmVybGFwcyBJUC5wZXJpb2QpCiAgcmV0dXJuIFNoYXJlZFJlc291cmNlLkNvdmVyYWdlUmVzb3VyY2UoQ292ZXJhZ2VzLAogIHtGSElSLmNhbm9uaWNhbHt2YWx1ZTogJ2h0dHA6Ly9obDcub3JnL2ZoaXIvdXMvbmhzbi1kcW0vU3RydWN0dXJlRGVmaW5pdGlvbi9hY2gtY292ZXJhZ2UnfX0pCgpkZWZpbmUgIlNERSBQcm9jZWR1cmUiOgogIFtQcm9jZWR1cmVdIFByb2NlZHVyZXMgCiAgd2hlcmUgZXhpc3RzKAogICAgIkluaXRpYWwgUG9wdWxhdGlvbiIgSVAKICAgIHdoZXJlIEdsb2JhbC4iTm9ybWFsaXplIEludGVydmFsIihQcm9jZWR1cmVzLnBlcmZvcm1lZCkgb3ZlcmxhcHMgSVAucGVyaW9kKQogIHJldHVybiBTaGFyZWRSZXNvdXJjZS5Qcm9jZWR1cmVSZXNvdXJjZShQcm9jZWR1cmVzLAogIHtGSElSLmNhbm9uaWNhbHt2YWx1ZTogJ2h0dHA6Ly9obDcub3JnL2ZoaXIvdXMvbmhzbi1kcW0vU3RydWN0dXJlRGVmaW5pdGlvbi9hY2gtcHJvY2VkdXJlJ319KQoKZGVmaW5lICJTREUgU3BlY2ltZW4iOgogIFtTcGVjaW1lbl0gU3BlY2ltZW5zCiAgd2hlcmUgZXhpc3RzKAogICAgIkluaXRpYWwgUG9wdWxhdGlvbiIgSVAKICAgIHdoZXJlIEdsb2JhbC4iTm9ybWFsaXplIEludGVydmFsIihTcGVjaW1lbnMuY29sbGVjdGlvbi5jb2xsZWN0ZWQpIG92ZXJsYXBzIElQLnBlcmlvZAogICkKICByZXR1cm4gU2hhcmVkUmVzb3VyY2UuU3BlY2ltZW5SZXNvdXJjZShTcGVjaW1lbnMsCiAge0ZISVIuY2Fub25pY2Fse3ZhbHVlOiAnaHR0cDovL2hsNy5vcmcvZmhpci91cy9uaHNuLWRxbS9TdHJ1Y3R1cmVEZWZpbml0aW9uL2FjaC1zcGVjaW1lbid9fSkKCmRlZmluZSAiU0RFIFNlcnZpY2UgUmVxdWVzdCI6CiAgW1NlcnZpY2VSZXF1ZXN0XSBTZXJ2aWNlUmVxdWVzdHMKICB3aGVyZSBleGlzdHMoIkluaXRpYWwgUG9wdWxhdGlvbiIgSVAKICAgIHdoZXJlIFNlcnZpY2VSZXF1ZXN0cy5hdXRob3JlZE9uIGR1cmluZyBJUC5wZXJpb2QpCiAgcmV0dXJuIFNoYXJlZFJlc291cmNlLlNlcnZpY2VSZXF1ZXN0UmVzb3VyY2UoU2VydmljZVJlcXVlc3RzLAogIHtGSElSLmNhbm9uaWNhbHt2YWx1ZTogJ2h0dHA6Ly9obDcub3JnL2ZoaXIvdXMvbmhzbi1kcW0vU3RydWN0dXJlRGVmaW5pdGlvbi9hY2gtc2VydmljZXJlcXVlc3QnfX0pCgpkZWZpbmUgIlNERSBNaW5pbWFsIFBhdGllbnQiOgogIFBhdGllbnQgcAogIHJldHVybiBTaGFyZWRSZXNvdXJjZS5QYXRpZW50UmVzb3VyY2UocCwKICB7RkhJUi5jYW5vbmljYWx7dmFsdWU6ICdodHRwOi8vaGw3Lm9yZy9maGlyL3VzL25oc24tZHFtL1N0cnVjdHVyZURlZmluaXRpb24vY3Jvc3MtbWVhc3VyZS1wYXRpZW50J319KQoKLy8KLy9GdW5jdGlvbnMKLy8KZGVmaW5lIGZ1bmN0aW9uICJHZXRNZWRpY2F0aW9uRnJvbSIoY2hvaWNlIENob2ljZTxGSElSLkNvZGVhYmxlQ29uY2VwdCwgRkhJUi5SZWZlcmVuY2U+KToKICBjYXNlCiAgICB3aGVuIGNob2ljZSBpcyBGSElSLlJlZmVyZW5jZSB0aGVuCiAgICAgIEdldE1lZGljYXRpb24oY2hvaWNlIGFzIEZISVIuUmVmZXJlbmNlKQogICAgZWxzZQogICAgICBudWxsCiAgZW5kCgpkZWZpbmUgZnVuY3Rpb24gIkdldE1lZGljYXRpb24iKHJlZmVyZW5jZSBSZWZlcmVuY2UgKToKICBzaW5nbGV0b24gZnJvbSAoCiAgICBbTWVkaWNhdGlvbl0gTWVkaWNhdGlvbnMKICAgIHdoZXJlIE1lZGljYXRpb25zLmlkID0gR2xvYmFsLkdldElkKHJlZmVyZW5jZS5yZWZlcmVuY2UpCiAgKQoKLy8KLy9NZWFzdXJlIFNwZWNpZmljIFJlc291cmNlIENyZWF0aW9uIEZ1bmN0aW9ucwovLwpkZWZpbmUgZnVuY3Rpb24gRGV2aWNlVWRpQ2Fycmllcih1ZGlDYXJyaWVyIExpc3Q8RkhJUi5EZXZpY2UuVWRpQ2Fycmllcj4pOgogIHVkaUNhcnJpZXIgdQogIHJldHVybiBGSElSLkRldmljZS5VZGlDYXJyaWVyewogICAgZGV2aWNlSWRlbnRpZmllcjogdS5kZXZpY2VJZGVudGlmaWVyLAogICAgaXNzdWVyOiB1Lmlzc3VlciwKICAgIGp1cmlzZGljdGlvbjogdS5qdXJpc2RpY3Rpb24sCiAgICBjYXJyaWVyQUlEQzogdS5jYXJyaWVyQUlEQywKICAgIGNhcnJpZXJIUkY6IHUuY2FycmllckhSRiwKICAgIGVudHJ5VHlwZTogdS5lbnRyeVR5cGUKICB9CgpkZWZpbmUgZnVuY3Rpb24gRGV2aWNlRGV2aWNlTmFtZShkZXZpY2VOYW1lIExpc3Q8RkhJUi5EZXZpY2UuRGV2aWNlTmFtZT4pOgogIGRldmljZU5hbWUgZAogIHJldHVybiBGSElSLkRldmljZS5EZXZpY2VOYW1lewogICAgbmFtZTogZC5uYW1lLAogICAgdHlwZTogZC50eXBlCiAgfQoKZGVmaW5lIGZ1bmN0aW9uIERldmljZVNwZWNpYWxpemF0aW9uKHNwZWNpYWxpemF0aW9uIExpc3Q8RkhJUi5EZXZpY2UuU3BlY2lhbGl6YXRpb24+KToKICBzcGVjaWFsaXphdGlvbiBzCiAgcmV0dXJuIEZISVIuRGV2aWNlLlNwZWNpYWxpemF0aW9uewogICAgc3lzdGVtVHlwZTogcy5zeXN0ZW1UeXBlLAogICAgdmVyc2lvbjogcy52ZXJzaW9uCiAgfQoKZGVmaW5lIGZ1bmN0aW9uIERldmljZVZlcnNpb24odmVyc2lvbiBMaXN0PEZISVIuRGV2aWNlLlZlcnNpb24+KToKICB2ZXJzaW9uIHYKICByZXR1cm4gRkhJUi5EZXZpY2UuVmVyc2lvbnsKICAgIHR5cGU6IHYudHlwZSwKICAgIGNvbXBvbmVudDogdi5jb21wb25lbnQsCiAgICB2YWx1ZTogdi52YWx1ZQogIH0KCmRlZmluZSBmdW5jdGlvbiBEZXZpY2VQcm9wZXJ0eShkZXZpY2VQcm9wZXJ0eSBMaXN0PEZISVIuRGV2aWNlLlByb3BlcnR5Pik6CiAgZGV2aWNlUHJvcGVydHkgZAogIHJldHVybiBGSElSLkRldmljZS5Qcm9wZXJ0eXsKICAgIGlkOiBkLmlkLAogICAgdHlwZTogZC50eXBlLAogICAgdmFsdWVRdWFudGl0eTogZC52YWx1ZVF1YW50aXR5LAogICAgdmFsdWVDb2RlOiBkLnZhbHVlQ29kZQogIH0KCmRlZmluZSBmdW5jdGlvbiBEZXZpY2VSZXNvdXJjZShkZXZpY2UgRGV2aWNlLCBwcm9maWxlVVJMcyBMaXN0PEZISVIuY2Fub25pY2FsPik6CiAgZGV2aWNlIGQKICByZXR1cm4gRGV2aWNlewogICAgaWQ6IEZISVIuaWR7dmFsdWU6ICdMQ1ItJyArIGQuaWR9LAogICAgbWV0YTogU2hhcmVkUmVzb3VyY2UuTWV0YUVsZW1lbnQoZCwgcHJvZmlsZVVSTHMpLAogICAgZXh0ZW5zaW9uOiBkLmV4dGVuc2lvbiwKICAgIGRlZmluaXRpb246IGQuZGVmaW5pdGlvbiwKICAgIHVkaUNhcnJpZXI6IERldmljZVVkaUNhcnJpZXIoZC51ZGlDYXJyaWVyKSwKICAgIHN0YXR1czogZC5zdGF0dXMsCiAgICBzdGF0dXNSZWFzb246IGQuc3RhdHVzUmVhc29uLAogICAgZGlzdGluY3RJZGVudGlmaWVyOiBkLmRpc3RpbmN0SWRlbnRpZmllciwKICAgIG1hbnVmYWN0dXJlcjogZC5tYW51ZmFjdHVyZXIsCiAgICBtYW51ZmFjdHVyZURhdGU6IGQubWFudWZhY3R1cmVEYXRlLAogICAgZXhwaXJhdGlvbkRhdGU6IGQuZXhwaXJhdGlvbkRhdGUsCiAgICBsb3ROdW1iZXI6IGQubG90TnVtYmVyLAogICAgc2VyaWFsTnVtYmVyOiBkLnNlcmlhbE51bWJlciwKICAgIGRldmljZU5hbWU6IERldmljZURldmljZU5hbWUoZC5kZXZpY2VOYW1lKSwKICAgIG1vZGVsTnVtYmVyOiBkLm1vZGVsTnVtYmVyLAogICAgcGFydE51bWJlcjogZC5wYXJ0TnVtYmVyLAogICAgdHlwZTogZC50eXBlLAogICAgc3BlY2lhbGl6YXRpb246IERldmljZVNwZWNpYWxpemF0aW9uKGQuc3BlY2lhbGl6YXRpb24pLAogICAgdmVyc2lvbjogRGV2aWNlVmVyc2lvbihkLnZlcnNpb24pLAogICAgcHJvcGVydHk6IERldmljZVByb3BlcnR5KGQucHJvcGVydHkpLAogICAgcGF0aWVudDogZC5wYXRpZW50LAogICAgb3duZXI6IGQub3duZXIsCiAgICBjb250YWN0OiBkLmNvbnRhY3QsCiAgICBsb2NhdGlvbjogZC5sb2NhdGlvbiwKICAgIHVybDogZC51cmwsCiAgICBub3RlOiBkLm5vdGUsCiAgICBzYWZldHk6IGQuc2FmZXR5LAogICAgcGFyZW50OiBkLnBhcmVudAogIH0KCmRlZmluZSBmdW5jdGlvbiBEaWFnbm9zdGljUmVwb3J0UmVzb3VyY2UoZGlhZ25vc3RpY1JlcG9ydCBEaWFnbm9zdGljUmVwb3J0LCBwcm9maWxlVVJMcyBMaXN0PEZISVIuY2Fub25pY2FsPik6CiAgZGlhZ25vc3RpY1JlcG9ydCBkCiAgcmV0dXJuIERpYWdub3N0aWNSZXBvcnR7CiAgICBpZDogRkhJUi5pZHt2YWx1ZTogJ0xDUi0nICsgZC5pZH0sCiAgICBtZXRhOiBTaGFyZWRSZXNvdXJjZS5NZXRhRWxlbWVudChkLCBwcm9maWxlVVJMcyksCiAgICBleHRlbnNpb246IGQuZXh0ZW5zaW9uLAogICAgYmFzZWRPbjogZC5iYXNlZE9uLAogICAgc3RhdHVzOiBkLnN0YXR1cywKICAgIGNhdGVnb3J5OiBkLmNhdGVnb3J5LAogICAgY29kZTogZC5jb2RlLAogICAgc3ViamVjdDogZC5zdWJqZWN0LAogICAgZW5jb3VudGVyOiBkLmVuY291bnRlciwKICAgIGVmZmVjdGl2ZTogZC5lZmZlY3RpdmUsCiAgICBpc3N1ZWQ6IGQuaXNzdWVkLAogICAgcGVyZm9ybWVyOiBkLnBlcmZvcm1lciwKICAgIHJlc3VsdHNJbnRlcnByZXRlcjogZC5yZXN1bHRzSW50ZXJwcmV0ZXIsCiAgICBzcGVjaW1lbjogZC5zcGVjaW1lbiwKICAgIHJlc3VsdDogZC5yZXN1bHQsCiAgICBjb25jbHVzaW9uOiBkLmNvbmNsdXNpb24sCiAgICBjb25jbHVzaW9uQ29kZTogZC5jb25jbHVzaW9uQ29kZQogIH0KCmRlZmluZSBmdW5jdGlvbiBFbmNvdW50ZXJSZXNvdXJjZShlbmNvdW50ZXIgRW5jb3VudGVyLCBwcm9maWxlVVJMcyBMaXN0PEZISVIuY2Fub25pY2FsPik6CiAgZW5jb3VudGVyIGUKICByZXR1cm4gRW5jb3VudGVyewogICAgaWQ6IEZISVIuaWR7dmFsdWU6ICdMQ1ItJyArIGUuaWR9LAogICAgbWV0YTogU2hhcmVkUmVzb3VyY2UuTWV0YUVsZW1lbnQoZSwgcHJvZmlsZVVSTHMpLAogICAgZXh0ZW5zaW9uOiBlLmV4dGVuc2lvbiwKICAgIGlkZW50aWZpZXI6IFNoYXJlZFJlc291cmNlLkVuY291bnRlcklkZW50aWZpZXIoZS5pZGVudGlmaWVyKSwKICAgIHN0YXR1czogZS5zdGF0dXMsCiAgICBzdGF0dXNIaXN0b3J5OiBTaGFyZWRSZXNvdXJjZS5FbmNvdW50ZXJTdGF0dXNIaXN0b3J5KGUuc3RhdHVzSGlzdG9yeSksCiAgICBjbGFzczogZS5jbGFzcywKICAgIGNsYXNzSGlzdG9yeTogU2hhcmVkUmVzb3VyY2UuRW5jb3VudGVyQ2xhc3NIaXN0b3J5KGUuY2xhc3NIaXN0b3J5KSwKICAgIHR5cGU6IGUudHlwZSwKICAgIHNlcnZpY2VUeXBlOiBlLnNlcnZpY2VUeXBlLAogICAgcHJpb3JpdHk6IGUucHJpb3JpdHksCiAgICBzdWJqZWN0OiBlLnN1YmplY3QsCiAgICBwZXJpb2Q6IGUucGVyaW9kLAogICAgbGVuZ3RoOiBlLmxlbmd0aCwKICAgIHJlYXNvbkNvZGU6IGUucmVhc29uQ29kZSwKICAgIHJlYXNvblJlZmVyZW5jZTogZS5yZWFzb25SZWZlcmVuY2UsCiAgICBkaWFnbm9zaXM6IFNoYXJlZFJlc291cmNlLkVuY291bnRlckRpYWdub3NpcyhlLmRpYWdub3NpcyksCiAgICBhY2NvdW50OiBlLmFjY291bnQsCiAgICBob3NwaXRhbGl6YXRpb246IFNoYXJlZFJlc291cmNlLkVuY291bnRlckhvc3BpdGFsaXphdGlvbihlLmhvc3BpdGFsaXphdGlvbiksCiAgICBsb2NhdGlvbjogU2hhcmVkUmVzb3VyY2UuRW5jb3VudGVyTG9jYXRpb24oZS5sb2NhdGlvbiksCiAgICBwYXJ0T2Y6IGUucGFydE9mCiAgfQoKZGVmaW5lIGZ1bmN0aW9uIE9ic2VydmF0aW9uUmVzb3VyY2Uob2JzZXJ2YXRpb24gT2JzZXJ2YXRpb24sIHByb2ZpbGVVUkxzIExpc3Q8RkhJUi5jYW5vbmljYWw+KToKICBvYnNlcnZhdGlvbiBvCiAgcmV0dXJuIE9ic2VydmF0aW9uewogICAgaWQ6IEZISVIuaWQge3ZhbHVlOiAnTENSLScgKyBvLmlkfSwKICAgIG1ldGE6IFNoYXJlZFJlc291cmNlLk1ldGFFbGVtZW50KG8sIHByb2ZpbGVVUkxzKSwKICAgIGV4dGVuc2lvbjogby5leHRlbnNpb24sCiAgICBwYXJ0T2Y6IG8ucGFydE9mLAogICAgc3RhdHVzOiBvLnN0YXR1cywKICAgIGNhdGVnb3J5OiBvLmNhdGVnb3J5LAogICAgY29kZTogby5jb2RlLAogICAgc3ViamVjdDogby5zdWJqZWN0LAogICAgZm9jdXM6IG8uZm9jdXMsCiAgICBlbmNvdW50ZXI6IG8uZW5jb3VudGVyLAogICAgZWZmZWN0aXZlOiBvLmVmZmVjdGl2ZSwKICAgIGlzc3VlZDogby5pc3N1ZWQsCiAgICBwZXJmb3JtZXI6IG8ucGVyZm9ybWVyLAogICAgdmFsdWU6IG8udmFsdWUsCiAgICBkYXRhQWJzZW50UmVhc29uOiBvLmRhdGFBYnNlbnRSZWFzb24sCiAgICBpbnRlcnByZXRhdGlvbjogby5pbnRlcnByZXRhdGlvbiwKICAgIG5vdGU6IG8ubm90ZSwKICAgIGJvZHlTaXRlOiBvLmJvZHlTaXRlLAogICAgbWV0aG9kOiBvLm1ldGhvZCwKICAgIHNwZWNpbWVuOiBvLnNwZWNpbWVuLAogICAgZGV2aWNlOiBvLmRldmljZSwKICAgIHJlZmVyZW5jZVJhbmdlOiBTaGFyZWRSZXNvdXJjZS5PYnNlcnZhdGlvblJlZmVyZW5jZVJhbmdlKG8ucmVmZXJlbmNlUmFuZ2UpLAogICAgaGFzTWVtYmVyOiBvLmhhc01lbWJlciwKICAgIGRlcml2ZWRGcm9tOiBvLmRlcml2ZWRGcm9tLAogICAgY29tcG9uZW50OiBTaGFyZWRSZXNvdXJjZS5PYnNlcnZhdGlvbkNvbXBvbmVudChvLmNvbXBvbmVudCkKICB9CgpkZWZpbmUgZnVuY3Rpb24gT2JzZXJ2YXRpb25WaXRhbFNpZ25zQ29kaW5nKGNvZGluZyBMaXN0PENvZGluZz4pOgogIGNvZGluZyBjCiAgcmV0dXJuIENvZGluZ3sKICAgIHN5c3RlbTogYy5zeXN0ZW0sCiAgICB2ZXJzaW9uOiBjLnZlcnNpb24sCiAgICBjb2RlOiBjLmNvZGUsCiAgICBkaXNwbGF5OiBjLmRpc3BsYXksCiAgICB1c2VyU2VsZWN0ZWQ6IGMudXNlclNlbGVjdGVkCiAgfQoKZGVmaW5lIGZ1bmN0aW9uIE9ic2VydmF0aW9uVml0YWxTaWduc0NhdGVnb3J5KGNhdGVnb3J5IExpc3Q8Q29kZWFibGVDb25jZXB0Pik6CiAgY2F0ZWdvcnkgYwogIHJldHVybiBDb2RlYWJsZUNvbmNlcHR7CiAgICBjb2Rpbmc6IE9ic2VydmF0aW9uVml0YWxTaWduc0NvZGluZyhjLmNvZGluZyksCiAgICB0ZXh0OiBjLnRleHQKICB9CgpkZWZpbmUgZnVuY3Rpb24gT2JzZXJ2YXRpb25WaXRhbFNpZ25zQ29tcG9uZW50KGNvbXBvbmVudCBMaXN0PEZISVIuT2JzZXJ2YXRpb24uQ29tcG9uZW50Pik6CiAgY29tcG9uZW50IGMKICByZXR1cm4gRkhJUi5PYnNlcnZhdGlvbi5Db21wb25lbnR7CiAgICBjb2RlOiBjLmNvZGUsCiAgICB2YWx1ZTogYy52YWx1ZSwKICAgIGRhdGFBYnNlbnRSZWFzb246IGMuZGF0YUFic2VudFJlYXNvbiwKICAgIGludGVycHJldGF0aW9uOiBjLmludGVycHJldGF0aW9uLAogICAgcmVmZXJlbmNlUmFuZ2U6IFNoYXJlZFJlc291cmNlLk9ic2VydmF0aW9uUmVmZXJlbmNlUmFuZ2UoYy5yZWZlcmVuY2VSYW5nZSkKICB9CgpkZWZpbmUgZnVuY3Rpb24gT2JzZXJ2YXRpb25WaXRhbFNpZ25zUmVzb3VyY2Uob2JzZXJ2YXRpb24gT2JzZXJ2YXRpb24sIHByb2ZpbGVVUkxzIExpc3Q8RkhJUi5jYW5vbmljYWw+KToKICBvYnNlcnZhdGlvbiBvCiAgcmV0dXJuIE9ic2VydmF0aW9uewogICAgaWQ6IEZISVIuaWQge3ZhbHVlOiAnTENSLScgKyBvLmlkfSwKICAgIG1ldGE6IFNoYXJlZFJlc291cmNlLk1ldGFFbGVtZW50KG8sIHByb2ZpbGVVUkxzKSwKICAgIGV4dGVuc2lvbjogby5leHRlbnNpb24sCiAgICBwYXJ0T2Y6IG8ucGFydE9mLAogICAgc3RhdHVzOiBvLnN0YXR1cywKICAgIGNhdGVnb3J5OiBPYnNlcnZhdGlvblZpdGFsU2lnbnNDYXRlZ29yeShvLmNhdGVnb3J5KSwKICAgIGNvZGU6IG8uY29kZSwKICAgIHN1YmplY3Q6IG8uc3ViamVjdCwKICAgIGZvY3VzOiBvLmZvY3VzLAogICAgZW5jb3VudGVyOiBvLmVuY291bnRlciwKICAgIGVmZmVjdGl2ZTogby5lZmZlY3RpdmUsCiAgICBpc3N1ZWQ6IG8uaXNzdWVkLAogICAgcGVyZm9ybWVyOiBvLnBlcmZvcm1lciwKICAgIHZhbHVlOiBvLnZhbHVlLAogICAgZGF0YUFic2VudFJlYXNvbjogby5kYXRhQWJzZW50UmVhc29uLAogICAgaW50ZXJwcmV0YXRpb246IG8uaW50ZXJwcmV0YXRpb24sCiAgICBub3RlOiBvLm5vdGUsCiAgICBib2R5U2l0ZTogby5ib2R5U2l0ZSwKICAgIG1ldGhvZDogby5tZXRob2QsCiAgICBzcGVjaW1lbjogby5zcGVjaW1lbiwKICAgIGRldmljZTogby5kZXZpY2UsCiAgICByZWZlcmVuY2VSYW5nZTogU2hhcmVkUmVzb3VyY2UuT2JzZXJ2YXRpb25SZWZlcmVuY2VSYW5nZShvLnJlZmVyZW5jZVJhbmdlKSwKICAgIGhhc01lbWJlcjogby5oYXNNZW1iZXIsCiAgICBkZXJpdmVkRnJvbTogby5kZXJpdmVkRnJvbSwKICAgIGNvbXBvbmVudDogT2JzZXJ2YXRpb25WaXRhbFNpZ25zQ29tcG9uZW50KG8uY29tcG9uZW50KQogIH0="


Instance: ach-options
InstanceOf: Parameters
Usage: #inline
* parameter[0].name = "translatorVersion"
* parameter[=].valueString = "3.5.1"
* parameter[+].name = "option"
* parameter[=].valueString = "EnableDateRangeOptimization"
* parameter[+].name = "option"
* parameter[=].valueString = "EnableAnnotations"
* parameter[+].name = "option"
* parameter[=].valueString = "EnableLocators"
* parameter[+].name = "option"
* parameter[=].valueString = "DisableListDemotion"
* parameter[+].name = "option"
* parameter[=].valueString = "DisableListPromotion"
* parameter[+].name = "analyzeDataRequirements"
* parameter[=].valueBoolean = false
* parameter[+].name = "collapseDataRequirements"
* parameter[=].valueBoolean = true
* parameter[+].name = "compatibilityLevel"
* parameter[=].valueString = "1.5"
* parameter[+].name = "enableCqlOnly"
* parameter[=].valueBoolean = false
* parameter[+].name = "errorLevel"
* parameter[=].valueString = "Info"
* parameter[+].name = "signatureLevel"
* parameter[=].valueString = "None"
* parameter[+].name = "validateUnits"
* parameter[=].valueBoolean = true
* parameter[+].name = "verifyOnly"
* parameter[=].valueBoolean = false

---

