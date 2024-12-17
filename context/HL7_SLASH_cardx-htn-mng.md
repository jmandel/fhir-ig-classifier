File: repos/HL7_SLASH_cardx-htn-mng/sushi-config.yaml

# ╭─────────────────────────Commonly Used ImplementationGuide Properties───────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. The most commonly   │
# │  used properties are included. For a list of all supported properties and their functions,     │
# │  see: https://fshschool.org/docs/sushi/configuration/.                                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.uv.cardx-htn-mng
canonical: http://hl7.org/fhir/uv/cardx-htn-mng
name: HTN-Mng-CardX
title: CardX Hypertension Management  
# description: Example HTN Implementation Guide 
status: draft # draft | active | retired | unknown
extension: 
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: cic

version: 1.0.0
fhirVersion: 4.0.1 # https://www.hl7.org/fhir/valueset-FHIR-version.html
copyrightYear: 2022+
releaseLabel: STU1 # ci-build | draft | qa-preview | ballot | trial-use | release | update | normative+trial-use
# license: CC0-1.0 # https://www.hl7.org/fhir/valueset-spdx-license.html
jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#001 "World"
publisher:
  name: HL7 International / Clinical Interoperability Council
  url: http://www.hl7.org/Special/committees/cic
  email: ciclist@lists.hl7.org

# The dependencies property corresponds to IG.dependsOn. The key is the
# package id and the value is the version (or dev/current). For advanced
# use cases, the value can be an object with keys for id, uri, and version.

#dependencies:
 # hl7.fhir.uv.extensions: 5.1.0-cibuild
  

# The parameters property represents IG.definition.parameter. Rather
# than a list of code/value pairs (as in the ImplementationGuide
# resource), the code is the YAML key. If a parameter allows repeating
# values, the value in the YAML should be a sequence/array. For a
# partial list of allowed parameters see:
# https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
#
# parameters:
#   excludettl: true
#   validation: [allow-any-extensions, no-broken-links]
#
# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │ The menu property will be used to generate the input/menu.xml file. The menu is represented    │
# │ as a simple structure where the YAML key is the menu item name and the value is the URL.       │
# │ The IG publisher currently only supports one level deep on sub-menus. To provide a             │
# │ custom menu.xml file, do not include this property and include a `menu.xml` file in            │
# │ input/includes. To use a provided input/includes/menu.xml file, delete the "menu"              │
# │ property below.                                                                                │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  Background: 
    Hypertension Background: Hypertension-Background.html
    CardX Background: CardX-Background.html
    Technical Scenarios: Technical-Scenarios.html
    Credits: Credits.html
  Profiles: profiles.html
  Capability Statement: 
    Capability Statement Overview: Capability-Statement.html
    Client Capability Statement: CapabilityStatement-CardXCapabilityStatementClient.html
    Server Capability Statement: CapabilityStatement-CardXCapabilityStatementServer.html
  Examples: 
    IG Profile Examples: IG-examples.html
    SMBP Example Readings: SMBP-Example-Readings.html
  More:
    Dependency Table: artifacts.html


# ╭───────────────────────────Less Common Implementation Guide Properties──────────────────────────╮
# │  Uncomment the properties below to configure additional properties on the ImplementationGuide  │
# │  resource. These properties are less commonly needed than those above.                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
#
# Those who need more control or want to add additional details to the contact values can use
# contact directly and follow the format outlined in the ImplementationGuide resource and
# ContactDetail.
#
# contact:
#   - name: Bob Smith
#     telecom:
#       - system: email # phone | fax | email | pager | url | sms | other
#         value: bobsmith@example.org
#         use: work
#
#
# The global property corresponds to the IG.global property, but it
# uses the type as the YAML key and the profile as its value. Since
# FHIR does not explicitly disallow more than one profile per type,
# neither do we; the value can be a single profile URL or an array
# of profile URLs. If a value is an id or name, SUSHI will replace
# it with the correct canonical when generating the IG JSON.
#
# global:
#   Patient: http://example.org/fhir/StructureDefinition/my-patient-profile
#   Encounter: http://example.org/fhir/StructureDefinition/my-encounter-profile
#
#
# The resources property corresponds to IG.definition.resource.
# SUSHI can auto-generate all of the resource entries based on
# the FSH definitions and/or information in any user-provided
# JSON or XML resource files. If the generated entries are not
# sufficient or complete, however, the author can add entries
# here. If the reference matches a generated entry, it will
# replace the generated entry. If it doesn't match any generated
# entries, it will be added to the generated entries. The format
# follows IG.definition.resource with the following differences:
#   * use IG.definition.resource.reference.reference as the YAML key.
#   * if the key is an id or name, SUSHI will replace it with the
#     correct URL when generating the IG JSON.
#   * specify "omit" to omit a FSH-generated resource from the
#     resource list.
#   * if the exampleCanonical is an id or name, SUSHI will replace
#     it with the correct canonical when generating the IG JSON.
#   * groupingId can be used, but top-level groups syntax may be a
#     better option (see below).
# The following are simple examples to demonstrate what this might
# look like:
#
# resources:
#   Patient/my-example-patient:
#     name: My Example Patient
#     description: An example Patient
#     exampleBoolean: true
#   Patient/bad-example: omit
#
#
# Groups can control certain aspects of the IG generation.  The IG
# documentation recommends that authors use the default groups that
# are provided by the templating framework, but if authors want to
# use their own instead, they can use the mechanism below.  This will
# create IG.definition.grouping entries and associate the individual
# resource entries with the corresponding groupIds. If a resource
# is specified by id or name, SUSHI will replace it with the correct
# URL when generating the IG JSON.
#
# groups:
#   GroupA:
#     name: Group A
#     description: The Alpha Group
#     resources:
#     - StructureDefinition/animal-patient
#     - StructureDefinition/arm-procedure
#   GroupB:
#     name: Group B
#     description: The Beta Group
#     resources:
#     - StructureDefinition/bark-control
#     - StructureDefinition/bee-sting
#
#
# The ImplementationGuide resource defines several other properties
# not represented above. These properties can be used as-is and
# should follow the format defined in ImplementationGuide:
# * date
# * meta
# * implicitRules
# * language
# * text
# * contained
# * extension
# * modifierExtension
# * experimental
# * useContext
# * copyright
# * packageId
#
#
# ╭──────────────────────────────────────────SUSHI flags───────────────────────────────────────────╮
# │  The flags below configure aspects of how SUSHI processes FSH.                                 │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
# The FSHOnly flag indicates if only FSH resources should be exported.
# If set to true, no IG related content will be generated.
# The default value for this property is false.
#
# FSHOnly: false
#
#
# When set to true, the "short" and "definition" field on the root element of an Extension will
# be set to the "Title" and "Description" of that Extension. Default is true.
#
# applyExtensionMetadataToRoot: true
#
#
# The instanceOptions property is used to configure certain aspects of how SUSHI processes instances.
# See the individual option definitions below for more detail.
#
# instanceOptions:
#   Determines for which types of Instances SUSHI will automatically set meta.profile
#   if InstanceOf references a profile:
#
#   setMetaProfile: always # always | never | inline-only | standalone-only
#
#
#   Determines for which types of Instances SUSHI will automatically set id
#   if InstanceOf references a profile:
#
#   setId: always # always | standalone-only

---

// File: input/pagecontent/artifacts.md

### Cross Version Analysis

 {%include cross-version-analysis.xhtml%}

### Dependency Table

{%include dependency-table.xhtml%}

### Globals Table

{%include globals-table.xhtml%}

### IP Statements

{%include ip-statements.xhtml%}

---

// File: input/pagecontent/Capability-Statement.md

This page describes the expectations of servers and clients utilizing the artifacts outlined in this implementation guide. 

## Server capabilies

A CardX Hypertension Management Patient Management server **SHALL**:

- Support the Observation resource
- Support the Self-measured Blood Pressure Profile. 
- Support the Average Self-measured Blood Pressure profile.
- Support json and xml source formats for all CardX interactions.
- Support searches by Observation.category.
- Support write capabilities of the "shall support" resources and profiles.

A CardX Hypertension Management server **should**:

- Support the Self-measured Blood Pressure Associated Heart Rate profile.
- Support searches by Observation.patient.

[Server capability statement](CapabilityStatement-CardXCapabilityStatementServer.html)

## Client capabilities

A CardX Hypertension Management Patient Management client **SHALL**:

- Support the Self-measured Blood Pressure Profile.
- Support the Average Self-measured Blood Pressure profile.
- Support json and xml source formats for all CardX interactions.
- Support write capabilites for the above profiles and resources.
- Support searches by Observation.category

A CardX Hypertension Management client **should**:

- Support the Self-measured Blood Pressure Associated Heart Rate profile.
- Support searches by Observation.patient.

[Client capability statement](CapabilityStatement-CardXCapabilityStatementClient.html)


---

// File: input/pagecontent/CardX-Background.md

<div style="text-align: left;">
<img src="image2022-7-27_8-34-11.png" width="400" >
</div>

### Revolutionizing Cardiovascular Outcomes Through a Common Standard

- Housed within the [CodeX FHIR Accelerator](https://confluence.hl7.org/display/COD), the mission of CardX is to engage a diverse group of stakeholders in the cardiovascular domain to enable standards-based interoperability in cardiovascular health and healthcare.
- CardX will identify opportunities and execute scalable pilots that demonstrate the value of standards-based interoperability across multiple use cases.
- CardX will strengthen the delivery of cardiovascular care by supporting clinical care quality and patient safety through alignment with clinical guidelines, performance measures and metrics, and participation in cardiovascular registries. 

### Why CardX? 

- Cardiovascular disease is the leading cause of death and disability in America.
- The domain of cardiovascular medicine has a long and rich tradition of developing consensus-based guidelines and practice models demonstrated to reduce cardiovascular morbidity and mortality. Despite this foundation of evidence-based medicine, translation of the science to practice that informs therapeutic decision-making, evaluates quality, safety, and performance, and contributes to new discovery is incomplete.
- Clinical information is routinely captured in unstructured documents stored in non-interoperable, siloed platforms. CardX aims to identify and use core clinical information as “good data” for assessing patient characteristics, treatments, and outcomes through standardized and interoperable FHIR APIs.

### CardX Vision

- To improve the quality of cardiovascular care through FHIR-enabled data exchange of key clinical concepts as interoperable data elements. Central to the parent CodeX FHIR Accelerator and extended to the CardX cardiovascular domain are Use Cases that embrace the vision of collecting high-quality patient data once and using it across multiple contexts and workflows.
- How CardX Works: **Use Cases => FHIR IGs + Implementations => Pilots => Impact!**
- CardX follows the approach established by the CodeX FHIR Accelerator. The target is the collection and sharing of real-world patient clinical data to inform clinical decision-making, evaluate quality and performance, support participation in clinical registries, and contribute to new discovery.

### CardX Goals

- Enable the collection of computable data at the point of care integrated with clinical workflows while reducing clinician burden
- Support the needs of all stakeholders and communities: patients, clinicians, registries, payers, regulators, researchers, information systems
- Provide the foundation for innovation and transformation of cardiovascular care


---

// File: input/pagecontent/Credits.md

### Acknowledgements

We recognize the guidance from the HL7 [Clinical Interoperability Council](https://www.hl7.org/Special/committees/cic/index.cfm), [Mobile Health](https://www.hl7.org/Special/committees/mobile/index.cfm) and [Devices](https://confluence.hl7.org/display/HCD) Work Groups.

The development of this Implementation Guide was sponsored by the [CodeX™ FHIR Accelerator](https://confluence.hl7.org/display/COD/CodeX+Home), a member-driven community working together to enable FHIR-based interoperability that drives substantial improvements around the most important challenges and opportunities in patient health.

Many organizations have been involved in the development of the Hypertension Management Use Case and FHIR profiles that are defined in this IG. More information on contributors and [our community](https://confluence.hl7.org/display/COD/CardX+-+Hypertension+Management) is available, as well as [membership](https://confluence.hl7.org/display/COD/CodeX+Membership) in the CodeX FHIR Accelerator.

Special thanks to the CardX Hypertension Management Use Case Champions: 
- University of Nebraska Medical Center (UNMC) Center for Intelligent Health Care (CIHC)  
- CDC Million Hearts

The published content of this guide was developed using [FHIR Shorthand syntax](http://hl7.org/fhir/uv/shorthand/) and the [SUSHI toolkit](https://fshschool.org/docs/sushi/), a free, open source toolchain from [MITRE](https://www.mitre.org).


### Contact Information

| Topic | Who | Role | Email |
|----|---|---|------|
| Implementation and Use Cases | Saneel Vasram | Program Manager & Clinical Director, CodeX™ | saneel.vasram@hl7codex.org |
| Publishing | Nathan Davis | Primary Author | nathan.davis@graphitehealth.io |
| Vocabulary | Monique van Berkum | Vocabulary Author | Monique.VanBerkum@ama-assn.org |
{: .grid }



---

// File: input/pagecontent/Hypertension-Background.md

### Hypertension Management Background 
Heart disease and stroke are the first and fifth leading causes of death in the U.S. and hypertension is a major risk factor for both. Uncontrolled hypertension can lead to heart attacks, strokes, heart failure, kidney disease, dementia later in life, and other serious clinical sequelae [^4]. Currently, almost half of adults (48.1%, 119.9M) have hypertension and fewer than one in four has their blood pressure controlled to safe levels (22.5%, 27.0M), defined as <130/80 mmHg in the hypertension management clinical guideline from the American College of Cardiology and the American Heart Association. Non-Hispanic Black persons are less likely to have their blood pressure controlled and more likely to develop hypertension at younger ages than non-Hispanic White persons [^1]. 

Hypertension management is multifaceted and may include antihypertensive medications, lifestyle modifications, and self-measured blood pressure monitoring (SMBP). SMBP, also known as home blood pressure monitoring, is an evidence-based strategy that has been shown to improve medication adherence, reduce therapeutic inertia, and improve blood pressure control. Multiple domestic and international guidelines call for its use in confirming new diagnoses of hypertension and to monitor therapeutic changes until blood pressure control is achieved. Optimal SMBP monitoring includes the remote exchange of patient-generated blood pressure readings to their clinical team who can interpret readings and transmit back titration and/or lifestyle modification advice. Many federal initiatives and national organizations have been working towards widespread implementation of SMBP but barriers exist [^3].  Lack of interoperable health information technology has been identified as a consistent barrier to SMBP implementation. Interoperability standards are needed to capture and exchange data from patient-generated SMBP readings, the health system, and pertinent data intermediaries.

### Self-Measured Blood Pressure (SMBP) Patient Journey Example
Sarah Smith, a 54-year-old Black woman with hypertension, had a routine follow-up visit with her primary care provider, Dr. Nolan. Despite being on an antihypertensive medication for two months, Sarah’s blood pressure was elevated in the clinic at 149/92 mmHg. Dr. Nolan recommended adding a second class of antihypertensive medication to her regimen.  They discussed the risks of high blood pressure and concerns she had about taking more medication.  Ultimately, Sarah agreed that adding another medication to get her blood pressure under control was the right course of action for her. 

Dr. Nolan also suggested that Sarah enroll in their clinic’s self-measured blood pressure monitoring (SMBP) program so she could see the impacts of taking her medication or making lifestyle modifications while Dr. Nolan would receive a pattern of her blood pressure readings remotely to monitor the impact of her medication change – without Sarah needing to come back into the office to have her blood pressure checked.  Sarah was introduced to the clinic’s SMBP coordinator and digital navigator, Angela, who enrolled her in their program. 
Sarah was fitted with a properly sized cuff and provided a validated blood pressure device. A list of universally validated blood pressure monitor can be accessed from the [Stride BP](https://www.stridebp.org/bp-monitors/) website.  Angela helped Sarah download the blood pressure device’s app, paired her blood pressure device with her phone using Bluetooth, and helped her enter the proper codes allowing the blood pressure reading to be visible by the practice team including her physician.  Angela then demonstrated how to properly use the device, trained her on proper preparation and positioning, and provided her with her physician’s protocol with frequency and duration of SMBP.  Next, Angela removed the cuff from Sarah’s arm, asked Sarah to demonstrate taking her blood pressure correctly, and confirmed that the blood pressure readings were submitted through the app to a clinical repository (Personal Health Intermediary).  Finally, Sarah was given educational materials to reinforce what she had learned. 

For the next seven days, Sarah took her blood pressure at home twice in the morning and twice in the evening as instructed. Sarah ensured her phone and the SMBP device were connected via Bluetooth and verified her data were being sent to the app Angela had set up for her. The app on Sarah’s phone was connected to the Personal Health Intermediary which, on a pre-set cadence (for example every seven days from the point of enrollment), sends average blood pressure readings to Sarah’s chart. An average blood pressure is defined as the statistical concept of the mean or average of two or more self-measured blood pressure readings. The average blood pressure has systolic and diastolic components.  Angela monitored the EHR, viewed the average blood pressure readings, and notified Dr. Nolan that Sarah’s readings were available for review. Dr. Nolan reviewed Sarah’s SMBP average and let her know the new medication was working; she should continue taking it as prescribed and continue making the lifestyle modifications they discussed.  He also asked her to continue taking her blood pressure at home and scheduled a follow-up telehealth visit with Sarah within four weeks.  He instructed Sarah to reach out to Angela if she has any questions or concerns or use the patient portal to send Dr. Nolan a message. 

### Self-Measured Blood Pressure (SMBP) Clinical Workflow 
The following diagram developed by the [CDC Million Hearts](https://millionhearts.hhs.gov/about-million-hearts/index.html), provides an overview of the typical clinical workflow for a patient enrolled in an SMBP program. The processes in this diagram can be useful when understanding how and when clinical information is exchanged from the patient to the clinician. The [Technical Scenarios](https://build.fhir.org/ig/HL7/cardx-htn-mng/Technical-Scenarios.html) page provides an in-depth description of how the profiles defined in the IG support this workflow. 

<div style="text-align: center;">
<img src="SMBP-Clinical-Workflow2.png" width="1000" >
</div>


### Additional Literature 

- [**ACCF/AHA 2011 key data elements and definitions of a base cardiovascular vocabulary for electronic health records**](https://pubmed.ncbi.nlm.nih.gov/21646493/): a report of the American College of Cardiology Foundation/American Heart Association Task Force on Clinical Data Standards

- [**ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults**](https://www.ahajournals.org/doi/10.1161/HYP.0000000000000065): Executive Summary: A Report of the American College of Cardiology/American Heart Association Task Force on Clinical Practice Guidelines


----------------------------------------------------------------------------------------------------
[^1]: [Cumulative Incidence of Hypertension by 55 Years of Age in Blacks and Whites: The CARDIA Study](https://pubmed.ncbi.nlm.nih.gov/29997132/)

[^2]: [Target:BP](https://targetbp.org/patient-measured-bp/)

[^3]: [Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults: A Report of the American College of Cardiology/American Heart Association Task Force on Clinical Practice Guidelines](https://www.ahajournals.org/doi/10.1161/HYP.0000000000000065)

[^4]: [Mortality in the United States, 2021](https://www.cdc.gov/nchs/data/databriefs/db456.pdf)


---

// File: input/pagecontent/IG-examples.md

### Self-Measured Blood Pressure (SMBP)

This is an example of a self-measured blood pressure measurement:
[Self-Measured Blood Pressure](Observation-SelfMeasuredBloodPressure-example.html)

### Average Self-Measured Blood Pressure (SMBP)

This is an example of an average self-measured blood pressure measurement that does not follow specific measurement guidelines:
[Average Self-Measured Blood Pressure](Observation-AverageSMBP-example.html)

This is an example of an average self-measured blood pressure measurement consistent with the [AHA & AMA Target:BP](https://targetbp.org/wp-content/uploads/2017/07/How-to-measure-your-blood-pressure_patient.pdf) guidelines that ensure a patient has the proper preparation, positioning, and optimal resting state: 
[Average Self-Measured Blood Pressure Protocol](Observation-AverageSMBP-Protocol-example.html)

### Self-Measured Blood Pressure Related Heart Rate

This is an example of a self-measured heart rate associated with a self-measured blood pressure reading:
[SMBP Associated Heart Rate](Observation-SMBP-Associated-HeartRate-example.html)


---

// File: input/pagecontent/index.md

### Overview

<div style="text-align: center;">
    <img src="image2022-7-27_8-34-11.png" width="400" >
</div>

Hypertension affects an estimated 1.28 billion adults aged 30-79 years and is the leading cause of premature death and cardiovascular disease internationally. Less than half of adults with hypertension are diagnosed and treated and only 1 in 5 adults with hypertension have it under control [^1]. A self-measured blood pressure (SMBP) approach, referring to the regular measurement of blood pressure by the patient outside the clinical setting, can help clinicians better diagnose and manage hypertension [^2]. A standardized approach to hypertension management that emphasizes capturing data once and reusing it for multiple purposes will increase the proportion of patients treated to goal, improve clinical outcomes, reduce clinician burden, and enable more complete and accurate reporting. The objective of the CardX Hypertension Management Implementation Guide is to improve hypertension diagnosis, management, and outcomes by facilitating the collection and exchange of data from widely implemented SMBP programs. Compared to the traditional approach of only measuring blood pressure in the clinical setting, this could help more patients reach their target BPs.  

This FHIR Implementation Guide (IG) aligns with and harmonizes existing work to create a vendor-agnostic set of data exchange standards that enable interoperable, scalable, and accessible hypertension management. Due to the global prevalence of hypertension, this IG adopts a universal realm approach, aiming to provide a comprehensive and consistent framework for healthcare information exchange across diverse geographic regions and healthcare systems. The IG defines FHIR profiles, extensions, and value sets to represent, query for, and exchange data for evidence-based management of hypertension. The CardX Hypertension Management IG includes profiles to represent self-measured blood pressure monitoring data and associated metadata. These profiles support the hypertension management workflow by providing a meaningful exchange of blood pressure data between devices, third-party patient-facing health management platforms (identified here as personal health intermediaries), and clinical Electronic Health Record Systems or patient portals. This will allow self-measured blood pressure readings to be sent directly to the physician at pre-defined intervals. In future iterations, this Implementation Guide will include additional evidence-based elements to support hypertension management, enabling bi-directional data exchange between patients and clinicians to manage hypertension.
 
### Potential Impact

- Health centers can receive self-measured blood pressure (SMBP) data from patients in a computable format.
- Patients can see their BP measurements over time.
- Patients can communicate their hypertension-related health status and hypertension management to clinicians.
- Clinicians can engage with patients outside of office visits to adjust treatment.

### Hypertension Management Workflow Diagram

In the diagram below, the red arrows between the Device Gateway, Personal Health Intermediary, and EHR icons identify the scope of structured FHIR data exchange within SMBP data management. The standards identified in this IG are primarily supported in the first and second arrow exchange:
- **In Scope** - Personal Health Intermediary to EHR
- **In Scope** - Device Gateway to Personal Health Intermediary
- **Out of Scope** - EHR to Personal Health Intermediary

<div style="text-align: center;">
    <img src="index-workflow.png" width="1000" >
</div>

### Intended Actors and Systems

The intended actors include:

<div>
    <table class="grid">
        <thead>
            <th width="35%">Actor</th>
            <th width="65%">Description</th>
        </thead>
        <tbody>
            <tr>
                <td><img src="patienticon.png" width="75" hight="75">Patient</td>
                <td>An individual diagnosed with hypertension and enrolled in a self-measure blood pressure monitoring program.</td>
            </tr>
            <tr>
                <td><img src="clinicianicon.png" width="75" height="75">Clinician</td>
                <td>Includes licensed clinicians, nurses, physician assistants, or other medical providers that interact with the patient to diagnosis, refer, monitor, and treat hypertension.</td>
            </tr>
            <tr>
                <td><img src="personal-health-device-icon.png" width="75" height="75">Personal Health Device</td>
                <td> Any device that allows patients or caregivers to capture their personal health data such as their blood pressure and then integrate the device provided data with an associated app.</td>
            </tr>
            <tr>
                <td><img src="personal-health-gateway-icon.png" width="75" height="75">Personal Health Intermediary</td>
                <td> Any system that allows patients to manage their health information. These may be web-based applications, mobile applications, or device gateways. These systems act as FHIR servers to receive data from a device and act as FHIR clients capable of sending data to other systems.</td>
            </tr>
            <tr>
                <td><img src="patient-data-manager-icon.png" width="75" height="75">Device Gateway</td>
                <td>Any system that allows patients and caregivers to capture and share information about their blood pressure. These may include web-based applications, mobile applications, or traditional software.  These systems will primarily act as FHIR clients.</td>
            </tr>
            <tr>
                <td><img src="ehricon.png" width="75" height="75">Electronic Health Record System</td>
                <td>An Electronic Health Record system involved in reviewing hypertension related data, that may receive SMBP observations from other systems, and that will coordinate all management activities for hypertension patients. These systems could also represent Patient Portals.</td>
            </tr>
        </tbody>
    </table>
</div>

### SMBP Data Exchange Scenarios

#### Scenario 1

A primary care provider enrolls a patient in a self-measured blood pressure monitoring program to manage the patient’s hypertension. The patient follows the provided instructions given to them by their provider and takes their blood pressure with the proper preparation and positioning. The blood pressure data is uploaded via Bluetooth to the Device Gateway. When the Personal Health Device and the Device Gateway follow the [PHD IG](https://build.fhir.org/ig/HL7/phd/) and the Device Gateway receives a blood pressure observation, the Device Gateway makes sures that the uploaded FHIR self-measured blood pressure observation resource contains the correct LOINC code and UCUM units. Either the Device Gateway or the Personal Health Intermediary indicate that the patient is the performer. For devices not adhering to the PHD IG, dedicated coding will be needed to be compliant with this CardX IG. 

The patient’s blood pressure information is then pushed, via a FHIR API, to a receiving Personal Health Intermediary platform where the data is stored, aggregated, and managed. Once the information has been retrieved, the Personal Health Intermediary can store, share, reuse, and display the standardized information in their preferred view.


#### Scenario 2

The Personal Health Intermediary calculates an average blood pressure reading based on the SMBP protocol timeframe. The patient’s average blood pressure and the individual blood pressure’s that comprise the average are pushed, via a FHIR API to an EHR’s FHIR-enabled patient portal. The EHR performs a GET request to retrieve the average blood pressure and associated observations. Once the information has been retrieved, the EHR can store, share, reuse, and display the standardized information in their preferred view.

### Must Support 

Each data element flagged as "must support" in this Implementation Guide must abide by the following rules: 

- A system must have the capability to populate or store the MS element. 
- If the MS element has been populated, the sending system must include it with the data exchange.
- The sending system must populate all elements with a MS flag if the information exists. 
- The receiving system must be able to store and retrieve the element.
- If present, the element must appear in an output report.

### Dependencies on Other IGs

| Implementation Guide | Version | Dependency |
| -------------------- | ------- | ---------- |
| [FHIR Release 4](http://hl7.org/fhir/R4/bp.html)| 4.0.1  | The CardX Self-Measured Blood Pressure profile is derived from the FHIR R4 [Observation Blood Pressure](https://hl7.org/fhir/R4/bp.html) profile. |
| [FHIR Release 4](http://hl7.org/fhir/R4/bp.html)| 4.0.1  | The CardX Average Self-Measured Blood Pressure profile is derived from the FHIR R4 [Observation](https://hl7.org/fhir/R4/observation.html) resource.   |
| [FHIR Release 4](http://hl7.org/fhir/R4/bp.html)| 4.0.1  | The CardX SMBP Associated Heart Rate profile is derived from the FHIR R4 [Observation Heart Rate](https://hl7.org/fhir/R4/heartrate.html) profile.   |
{:.grid}

### Relationships to Other IGs

| Implementation Guide |  Relationship  |
| -------------------- |  ---------- |
| [US Core](https://hl7.org/fhir/us/core/STU3.1.1/) |  Profiles in this IG align with US Core 3.1.1 as much as possible. Where possible, effort will also be made to align with future U.S. Core releases.   U.S. Core also sets expectations for a variety of referenced resources and establishes baseline conformance expectations.  |
| [Vital Signs with Qualifying Elements](https://build.fhir.org/ig/HL7/cimi-vital-signs/) | All profiles in this IG align with the profiles in the Vital Signs with Qualifying Elements IG (Universal Realm). |
| [FHIR Write](https://hackmd.io/@argonaut/SkGWnfQdn) | Specifies FHIR write back capabilities for Vital Signs Observations including Blood Pressure. Note that this requires using meta.tag=patient-supplied for these observations. The Device Gateway or the Personal Health Intermediary should ensure that the tag is set. |
| [Personal Health Device IG](https://build.fhir.org/ig/HL7/phd/index.html) | Observation resources adhering to the profiles in this IG can be generated by personal health devices (PHD) adhering to the PHD IG and can be collected and uploaded to FHIR servers by Personal Health Gateways (PHGs) that map the received IEEE 11073-10101 codes to the required LOINC codes and UCUM units to observations in the vital signs category. |
{:.grid}


### Additional External Drivers

| Initiative |  Description  |
| -------------------- |  ---------- |
| [CDC Million Hearts 2027 Optimizing Care Initiative](https://millionhearts.hhs.gov/about-million-hearts/optimizing-care/smbp.html) |  Million Hearts® is a national initiative to prevent 1 million heart attacks and strokes within 5 years. It focuses on implementing a small set of evidence-based priorities and targets that can improve cardiovascular health for all. The initiative includes improving blood pressure control through evidence-based strategies like [(self-measured blood pressure monitoring (SMBP))](https://millionhearts.hhs.gov/tools-protocols/tools/smbp.html). |
| [AHA's National Hypertension Council Initiative (NHCI)](https://nhci.heart.org/)  | Through the NHCI, the American Heart Association raises awareness of high blood pressure and promotes prevention of it through overlapping community approaches. |
| [Target: BP](https://targetbp.org/) | A national initiative formed by the American Heart Association (AHA) and the American Medical Association (AMA) in response to the high prevalence of uncontrolled blood pressure (BP). Throughout this IG, we refer to the Target BP general SMBP guidelines outlined in the [SMBP Infographic](https://targetbp.org/wp-content/uploads/2017/10/SMBP-Infographic_TBP-1.pdf) to ensure accurate blood pressure measurement. |
{:.grid}

### Learn More

To learn more about the CardX Domain and the CardX Hypertension Management Use Case visit:

- [CardX Domain Confluence Pages](https://confluence.hl7.org/display/COD/Cardiovascular)

- [Hypertension Management Confluence Pages](https://confluence.hl7.org/display/COD/CardX+-+Hypertension+Management)

----------------------------------------------------------------------------------------------------
[^1]: [World Health Organization: Hypertension](https://www.who.int/news-room/fact-sheets/detail/hypertension)
[^2]: [Target:BP](https://targetbp.org/patient-measured-bp/)


---

// File: input/pagecontent/profiles.md

---
title: Profiles and Extensions
layout: default
active: profiles
---

The following Profiles and have been defined for this implementation guide.

<div>
	<table class="grid">
		<thead>
			<tr>
			  <th width="25%">Profile</th>
			  <th width="75%">Definition</th>
			</tr>
		</thead>
		<tbody>
          <tr>
            <td><a href="StructureDefinition-self-measured-bp.html">Self-measured Blood Pressure</a></td>
            <td>A blood pressure measurement taken in a non-clinical environment by the subject or related person.</td>
          </tr>
          <tr>
            <td><a href="StructureDefinition-average-smbp.html">Average Self-measured Blood Pressure</a></td>
            <td> The calculated average of two or more blood pressure readings that are taken in a non-clinical environment by the subject, or related person. The readings are obtained within a specified time period or according to a specified algorithm or protocol (e.g. AHA/AMA Target:BP Measurement Guidelines or Systolic Blood Pressure Intervention Trail (SPRINT)). The average blood pressure has systolic and diastolic components.</td>
          </tr>
          <tr>
            <td><a href="StructureDefinition-smbp-associated-heart-rate.html">SMBP-associated Heart Rate</a></td>
            <td>A heart rate measured by the same device and at the same time as the self-measured blood pressure.</td>
          </tr>
        </tbody>
    </table>
</div>

### Extensions

The following extensions have been defined as part of this implementation Guide. A [registry of standard extensions]({{site.data.fhir.path}}extensibility-registry.html) can be found in the FHIR specification and additional extensions may be registered on the HL7 FHIR registry at [FHIR registry](http://hl7.org/fhir/registry).

|Extension|
|:----|
|[Number of measurements](StructureDefinition-NumberOfMeasurementsExt.html)|

---

// File: input/pagecontent/SMBP-Example-Readings.md

### Patient Example  

[Hypertension Patient Sally Sue](Patient-patient-example-Sally-Sue.html)

### SMBP Weekly Average Example

[Average SMBP Reading](Observation-AverageSMBP-Protocol-example.html)

### Individual Readings Examples

- [Day 1, First-AM BP Reading](Observation-SMBP-FirstAM-Measurement-Day1.html)
- [Day 1, Second-AM BP Reading](Observation-SMBP-SecondAM-Measurement-Day1.html)
- [Day 1, First-PM BP Reading](Observation-SMBP-FirstPM-Measurement-Day1.html)
- [Day 1, Second-PM BP Reading](Observation-SMBP-SecondPM-Measurement-Day1.html)
- [Day 2, First-AM BP Reading](Observation-SMBP-FirstAM-Measurement-Day2.html)
- [Day 2, Second-AM BP Reading](Observation-SMBP-SecondAM-Measurement-Day2.html)
- [Day 2, First-PM BP Reading](Observation-SMBP-FirstPM-Measurement-Day2.html)
- [Day 2, Second-PM BP Reading](Observation-SMBP-SecondPM-Measurement-Day2.html)
- [Day 3, First-AM BP Reading](Observation-SMBP-FirstAM-Measurement-Day3.html)
- [Day 3, Second-AM BP Reading](Observation-SMBP-SecondAM-Measurement-Day3.html)
- [Day 3, First-PM BP Reading](Observation-SMBP-FirstPM-Measurement-Day3.html)
- [Day 3, Second-PM BP Reading](Observation-SMBP-SecondPM-Measurement-Day3.html)
- [Day 4, First-AM BP Reading](Observation-SMBP-FirstAM-Measurement-Day4.html)
- [Day 4, Second-AM BP Reading](Observation-SMBP-SecondAM-Measurement-Day4.html)
- [Day 4, First-PM BP Reading](Observation-SMBP-FirstPM-Measurement-Day4.html)
- [Day 4, Second-PM BP Reading](Observation-SMBP-SecondPM-Measurement-Day4.html)
- [Day 5, First-AM BP Reading](Observation-SMBP-FirstAM-Measurement-Day5.html)
- [Day 5, Second-AM BP Reading](Observation-SMBP-SecondAM-Measurement-Day5.html)
- [Day 5, First-PM BP Reading](Observation-SMBP-FirstPM-Measurement-Day5.html)
- [Day 5, Second-PM BP Reading](Observation-SMBP-SecondPM-Measurement-Day5.html)
- [Day 6, First-AM BP Reading](Observation-SMBP-FirstAM-Measurement-Day6.html)
- [Day 6, Second-AM BP Reading](Observation-SMBP-SecondAM-Measurement-Day6.html)
- [Day 6, First-PM BP Reading](Observation-SMBP-FirstPM-Measurement-Day6.html)
- [Day 6, Second-PM BP Reading](Observation-SMBP-SecondPM-Measurement-Day6.html)
- [Day 7, First-AM BP Reading](Observation-SMBP-FirstAM-Measurement-Day7.html)
- [Day 7, Second-AM BP Reading](Observation-SMBP-SecondAM-Measurement-Day7.html)
- [Day 7, First-PM BP Reading](Observation-SMBP-FirstPM-Measurement-Day7.html)
- [Day 7, Second-PM BP Reading](Observation-SMBP-SecondPM-Measurement-Day7.html)


---

// File: input/pagecontent/Technical-Scenarios.md

The following diagrams describe how to implement the SMBP profiles defined in this IG within the context of an SMBP monitoring program. The diagrams assume a patient is enrolled in an SMBP program, the patient uses a validated device, and the observations are taken at home by the patient. 

### SMBP Technical Exchange 1
A primary care provider enrolls a patient in a self-measured blood pressure monitoring program to manage the patient’s hypertension. The patient follows the provided instructions and takes their blood pressure with [proper preparation and positioning](https://targetbp.org/wp-content/uploads/2017/10/SMBP-Infographic_TBP-1.pdf). When the Personal Health Device and the Device Gateway follow the [PHD IG](https://build.fhir.org/ig/HL7/phd/) and the Device Gateway receives a blood pressure observation, the Device Gateway makes sures that the uploaded FHIR self-measured blood pressure observation resource contains the correct LOINC code and UCUM units. Either the Device Gateway or the Personal Health Intermediary indicate that the patient is the performer. 

For Device Gateways not adhering to the PHD IG dedicated coding will be needed to be compliant with this CardX IG. The blood pressure data is uploaded via Bluetooth to the Device Gateway. The patient’s individual [self-measured blood pressure readings](StructureDefinition-self-measured-bp.html) and [associated heart rate readings](StructureDefinition-smbp-associated-heart-rate.html) are pushed, via a FHIR API, to a receiving Personal Health Intermediary platform where the data is stored, aggregated, and managed. The Personal Health Intermediary shall be able to read, search, and create additional observations. In the case an observation is invalid, a new observation should be created rather than updating the existing invalid observation. Once the information has been retrieved, the Personal Health Intermediary can store, share, reuse, and display the standardized information in their preferred view.

#### Action 1: A Device Gateway POSTS an SMBP related observation to a Personal Health Intermediary Platform FHIR server.

<div style="text-align: center;">
<img src="action1.png" width="800" >
</div>

#### Action 2: A Personal Health Intermediary Platform queries the FHIR server for SMBP related observations and calculates an Average SMBP value. 

<div style="text-align: center;">
<img src="action2.png" width="800" >
</div>


### SMBP Technical Exchange 2
The Personal Health Intermediary calculates an average blood pressure reading based on the clinician's instruction. The patient’s [average self-measured blood pressure](StructureDefinition-average-smbp.html) and the [individual self-measured blood pressures](StructureDefinition-self-measured-bp.html) that comprise the average are pushed, via a FHIR API to an EHR’s FHIR-enabled patient portal. The EHR performs a GET request to retrieve the average blood pressure and associated observations. The EHR shall be able to read, search, and create observations. Once the information has been retrieved, the EHR can store, share, reuse, and display the standardized information in their preferred view.

#### Action 3: A Personal Health Intermediary platform POSTs an Average SMBP observation to the FHIR server.

<div style="text-align: center;">
<img src="action3.png" width="800" >
</div>

#### Action 4: An EHR or Patient Portal queries the FHIR server for SMBP related observations. 

<div style="text-align: center;">
<img src="action4.png" width="800" >
</div>


---

// File: input/fsh/aliases.fsh

Alias: ObsCat = http://terminology.hl7.org/CodeSystem/observation-category
Alias: LNC = http://loinc.org
Alias: SCT = http://snomed.info/sct

// Profiles
Alias:   USCoreEthnicity = http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity
Alias:   USCorePatient = http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
Alias:   USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias:   CoreBPProfile = http://hl7.org/fhir/StructureDefinition/bp
Alias:   CoreHRProfile = http://hl7.org/fhir/StructureDefinition/heartrate
Alias:   CoreVitalSigns = http://hl7.org/fhir/StructureDefinition/vitalsigns

// Extensions
Alias:   WG = http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
Alias:   EXP = http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation

// External Code Systems with a canonical recognized by terminology.hl7.org
Alias:   UCUM = http://unitsofmeasure.org

// From terminology.hl7.org
Alias:   ObsStatus = http://hl7.org/fhir/observation-status
Alias:   OMBRace = http://hl7.org/fhir/us/core/ValueSet/omb-race-category
Alias:   OMBEth = http://hl7.org/fhir/us/core/ValueSet/omb-ethnicity-category
Alias:   BirthSex = http://hl7.org/fhir/us/core/ValueSet/birthsex



---

// File: input/fsh/AverageSMBP.fsh

Profile: AverageSMBP
Parent: Observation
Id: average-smbp
Title: "Average Self-measured Blood Pressure"
Description: "The calculated average of two or more blood pressure readings that are taken in a non-clinical environment by the subject, or a related person. The readings are obtained within a specified time period or according to a specified algorithm or protocol (e.g., (e.g. AHA/AMA Target:BP Measurement Guidelines or Systolic Blood Pressure Intervention Trail ([SPRINT](https://www.nhlbi.nih.gov/science/systolic-blood-pressure-intervention-trial-sprint-study))). The average blood pressure has systolic and diastolic components. (Note: This definition aligns with the description for [Average Blood Pressure in USCDI V4](https://www.healthit.gov/isp/taxonomy/term/1391/uscdi-v4).)"
* obeys vs-2
* extension contains
    NumberOfMeasurements named NumberOfMeasurements 1..1 MS
* extension[NumberOfMeasurements] ^short = "Number of Measurements"
* status MS
* status from SMBPStatusVS (required)
* category 1..* MS
* category = ObsCat#vital-signs
* code MS
* code ^short = "Average blood pressure"
* code = LNC#96607-7
* subject 1..1 MS
* subject only Reference(Patient)
* effective[x] only Period
* effectivePeriod 1..1 MS
* effectivePeriod ^short = "The time range in which measurements were taken to calculate the average."
* effectivePeriod.start 1..1
* effectivePeriod.end 1..1
* issued 1..1 MS
* performer 1..1 MS
* performer only Reference(Patient)
* value[x] 0..0
* dataAbsentReason MS
* derivedFrom MS
* derivedFrom only Reference(SelfMeasuredBloodPressure)
* component MS
* component obeys vs-3
* component.code MS
* component.value[x] MS
* component.dataAbsentReason MS
* component ^slicing.discriminator.type = #value
* component ^slicing.discriminator.path = "code"
* component ^slicing.ordered = false
* component ^slicing.rules = #open
* component ^short = "Blood pressure components"
* component contains
    SystolicBP 1..1 and
    DiastolicBP 1..1
* component[SystolicBP] MS
* component[SystolicBP] ^short = "Systolic blood pressure mean"
* component[SystolicBP].code MS
* component[SystolicBP].code ^short = "Systolic blood pressure mean"
* component[SystolicBP].code = LNC#96608-5
* component[SystolicBP].value[x] only Quantity
* component[SystolicBP].valueQuantity MS
* component[SystolicBP].valueQuantity.value 1..1 MS
* component[SystolicBP].valueQuantity.unit 1..1 MS
* component[SystolicBP].valueQuantity.system 1..1 MS
* component[SystolicBP].valueQuantity.system only uri
* component[SystolicBP].valueQuantity.system = "http://unitsofmeasure.org" (exactly)
* component[SystolicBP].valueQuantity.code 1..1 MS
* component[SystolicBP].valueQuantity.code only code
* component[SystolicBP].valueQuantity.code = #mm[Hg] (exactly)
* component[DiastolicBP] MS
* component[DiastolicBP] ^short = "Diastolic blood pressure mean"
* component[DiastolicBP].code MS
* component[DiastolicBP].code ^short = "Diastolic blood pressure mean"
* component[DiastolicBP].code = LNC#96609-3
* component[DiastolicBP].value[x] only Quantity
* component[DiastolicBP].valueQuantity MS
* component[DiastolicBP].valueQuantity.value 1..1 MS
* component[DiastolicBP].valueQuantity.unit 1..1 MS
* component[DiastolicBP].valueQuantity.system 1..1 MS
* component[DiastolicBP].valueQuantity.system only uri
* component[DiastolicBP].valueQuantity.system = "http://unitsofmeasure.org" (exactly)
* component[DiastolicBP].valueQuantity.code 1..1 MS
* component[DiastolicBP].valueQuantity.code only code
* component[DiastolicBP].valueQuantity.code = UCUM#mm[Hg] (exactly)

Invariant: vs-2
Description: "If there is no component or hasMember element then either a value[x] or a data absent reason must be present."
Severity: #error
Expression: "(component.empty() and hasMember.empty()) implies (dataAbsentReason.exists() or value.exists())"

Invariant: vs-3
Description: "If there is not a value a data absent reason must be present"
Severity: #error
Expression: "value.exists() or dataAbsentReason.exists()"


---

// File: input/fsh/DEF_CardXCapabilityStatement.fsh

Instance: CardXCapabilityStatementServer
InstanceOf: CapabilityStatement
Title: "HTN-Mng-CardX Server Capability Statement"
Usage: #definition
* name = "CardXHTNServerCapabilityStatement"
* description = "The capabilities that a CardX Hypertension Management server system should/shall support."
* status = #draft
* date = "2023-12-05"
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #xml
* format[1] = #json
* insert SupportResource(Patient, #SHOULD)
* insert SupportResource(Observation, #SHALL)
* insert SupportProfile(http://hl7.org/fhir/uv/cardx-htn-mng/StructureDefinition/self-measured-bp, #SHALL)
* insert SupportProfile(http://hl7.org/fhir/uv/cardx-htn-mng/StructureDefinition/average-smbp, #SHALL)
* insert SupportProfile(http://hl7.org/fhir/uv/cardx-htn-mng/StructureDefinition/smbp-associated-heart-rate, #SHOULD)
* insert SupportInteraction(#create, #SHALL)
* insert SupportInteraction(#read, #SHALL)
* insert SupportInteraction(#search-type, #SHALL)
* insert SupportSearchParam(identifier, http://hl7.org/fhir/SearchParameter/clinical-patient, #reference, #SHOULD)
* insert SupportSearchParam(category, http://hl7.org/fhir/SearchParameter/Observation-category, #token, #SHALL)

* rest.mode = #server
* rest.documentation =  "A CardX Hypertension Management Patient Management Server **SHALL**:\n\n1. Support the Observation resource.\n\n1. Self-measured Blood Pressure Profile. \n1. Support the Average Self-measured Blood Pressure profile.\n1. Support json and xml source formats for all CardX interactions. \n1. Support searches by Observation.category.\n\n1. Support create capabilites for the IG profiles. \n\n\nA CardX Hypertension Management Server **SHOULD**:\n\n1. Support the Self-measured Blood Pressure Associated Heart Rate profile.\n1. Support searches by Observation.patient.\n\n\n"
* rest.security.description = "1. See the [General Security Considerations](https://www.hl7.org/fhir/security.html#general) section for requirements and recommendations.\n1. A server **SHALL** reject any unauthorized requests by returning an `HTTP 401` unauthorized response code."
* rest.interaction.code = #transaction
* rest.interaction.code = #batch
* rest.interaction.code = #search-system
* rest.interaction.code = #history-system
* rest.interaction.documentation = "A CardX Hypertension Management Server **SHALL**:\n\n1. Support read operations. \n1. Support search-type operations. \n\n"

RuleSet: SupportResource (resource, expectation)
* rest.resource[+].type = #{resource}
* rest.resource[=].extension[0].url = EXP
* rest.resource[=].extension[0].valueCode = {expectation}

RuleSet: SupportProfile (profile, expectation)
// This rule set must follow a SupportResource rule set, and applies to that resource.
* rest.resource[=].supportedProfile[+] = "{profile}"
* rest.resource[=].supportedProfile[=].extension[0].url = EXP
* rest.resource[=].supportedProfile[=].extension[0].valueCode = {expectation}

RuleSet: SupportInteraction (interaction, expectation)
// This rule set must follow a SupportResource rule set, and applies to that resource.
* rest.resource[=].interaction[+].code = {interaction}
* rest.resource[=].interaction[=].extension[0].url = EXP
* rest.resource[=].interaction[=].extension[0].valueCode = {expectation}

RuleSet: SupportSearchParam (name, canonical, type, expectation)
// This rule set must follow a SupportResource rule set, and applies to that resource.
* rest.resource[=].searchParam[+].name = "{name}"
* rest.resource[=].searchParam[=].definition = "{canonical}"
* rest.resource[=].searchParam[=].type = {type}
* rest.resource[=].searchParam[=].extension[0].url = EXP
* rest.resource[=].searchParam[=].extension[0].valueCode = {expectation}

Instance: CardXCapabilityStatementClient
InstanceOf: CapabilityStatement
Title: "HTN-Mng-CardX Client Capability Statement"
Usage: #definition
* name = "CardXClientCapabilityStatement"
* description = "The capabilities that a CardX Hypertension Management client should/shall support."
* status = #draft
* date = "2023-12-05"
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #xml
* format[1] = #json
* insert SupportResource(Patient, #SHOULD)
* insert SupportResource(Observation, #SHALL)
* insert SupportProfile(http://hl7.org/fhir/uv/cardx-htn-mng/StructureDefinition/self-measured-bp, #SHALL)
* insert SupportProfile(http://hl7.org/fhir/uv/cardx-htn-mng/StructureDefinition/average-smbp, #SHALL)
* insert SupportProfile(http://hl7.org/fhir/uv/cardx-htn-mng/StructureDefinition/smbp-associated-heart-rate, #SHOULD)
* insert SupportInteraction(#read, #SHALL)
* insert SupportInteraction(#create, #SHALL)
* insert SupportInteraction(#search-type, #SHALL)
* insert SupportSearchParam(identifier, http://hl7.org/fhir/SearchParameter/clinical-patient, #reference, #SHOULD)
* insert SupportSearchParam(category, http://hl7.org/fhir/SearchParameter/Observation-category, #token, #SHALL)

* rest.mode = #client
* rest.documentation =  "A CardX Hypertension Management Client **SHALL**:\n\n1. Support the Self-measured Blood Pressure Profile. \n1. Support the Average Self-measured Blood Pressure profile.\n1. Support json and xml source formats for all CardX interactions. \n\n\n A CardX Hypertension Management Client **SHOULD**:\n\n1. Support the Self-measured Blood Pressure Associated Heart Rate profile.\n1. Support searches by Observation.patient.\n\n"
* rest.security.description = "1. See the [General Security Considerations](https://www.hl7.org/fhir/security.html#general) section for requirements and recommendations.\n1. A server **SHALL** reject any unauthorized requests by returning an `HTTP 401` unauthorized response code."
/* * rest.interaction.code = Int#transaction
* rest.interaction.code = Int#batch
* rest.interaction.documentation = "A CardX Hypertension Management Server **SHALL**:\n\n1. Support transaction and batch operations. \n1\n" */



---

// File: input/fsh/Ex_Actors.fsh

Instance: patient-example-Sally-Sue
InstanceOf: Patient
Description: "A patient example to enhance other examples in this IG."
Usage: #example
* meta.security = http://example.org#HTEST "test health data"
* gender = #female
* identifier.use = #usual
* identifier.type = http://example.org#MR "Medical record number"
* identifier.type.text = "Medical Record Number"
* identifier.system = "http://hospital.smarthealthit.org"
* identifier.value = "1032702"
* active = true
* name.family = "Sue"
* name.given[0] = "Sally"
* name.given[+] = "V."
* telecom[0].system = #phone
* telecom[=].value = "555-555-5555"
* telecom[=].use = #home
* telecom[+].system = #email
* telecom[=].value = "sally.sue@example.com"
* gender = #female
* birthDate = "1954-02-20"
* address.line = "49 Meadow St"
* address.city = "Mounds"
* address.state = "MD"
* address.postalCode = "74047"
* address.country = "US"

Instance: practitioner-example-Mary-Hill
InstanceOf: Practitioner
Description: "A practitioner example for this IG."
Usage: #example
* identifier.value = "9941339108"
* name.family = "Mary"
* name.given = "Hill"
* name.prefix = "Dr"
* address.use = #home
* address.line = "1003 Healthcare Drive"
* address.city = "Amherst"
* address.state = "MD"
* address.postalCode = "01002"

---

// File: input/fsh/Ex_SMBP_componentsMS.fsh

Instance: SMBP-FirstAM-Measurement-Day1
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-01T08:00:00-09:00"
* issued = "2023-03-01T08:10:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 125 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 80 'mm[Hg]' "mm[Hg]"

Instance: SMBP-SecondAM-Measurement-Day1
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-01T08:01:00-09:00"
* issued = "2023-03-01T08:10:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 126 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 82 'mm[Hg]' "mm[Hg]"

Instance: SMBP-FirstPM-Measurement-Day1
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-01T14:00:00-09:00"
* issued = "2023-03-01T14:10:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 130 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 83 'mm[Hg]' "mm[Hg]"

Instance: SMBP-SecondPM-Measurement-Day1
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-01T14:01:00-09:00"
* issued = "2023-03-01T08:10:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 130 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 83 'mm[Hg]' "mm[Hg]"


Instance: SMBP-FirstAM-Measurement-Day2
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-02T08:00:00-09:00"
* issued = "2023-03-02T08:10:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 140 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 90 'mm[Hg]' "mm[Hg]"

Instance: SMBP-SecondAM-Measurement-Day2
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-02T08:01:00-09:00"
* issued = "2023-03-02T08:10:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 143 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 92 'mm[Hg]' "mm[Hg]"

Instance: SMBP-FirstPM-Measurement-Day2
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-02T17:10:00-09:00"
* issued = "2023-03-02T17:20:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 150 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 92 'mm[Hg]' "mm[Hg]"

Instance: SMBP-SecondPM-Measurement-Day2
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-02T17:11:00-09:00"
* issued = "2023-03-02T17:20:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 148 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 94 'mm[Hg]' "mm[Hg]"

Instance: SMBP-FirstAM-Measurement-Day3
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-03T06:55:00-09:00"
* issued = "2023-03-03T07:10:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 150 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 94 'mm[Hg]' "mm[Hg]"

Instance: SMBP-SecondAM-Measurement-Day3
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-03T06:56:20-09:00"
* issued = "2023-03-03T07:10:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 148 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 95 'mm[Hg]' "mm[Hg]"

Instance: SMBP-FirstPM-Measurement-Day3
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-03T17:00:20-09:00"
* issued = "2023-03-03T17:10:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 140 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 90 'mm[Hg]' "mm[Hg]"

Instance: SMBP-SecondPM-Measurement-Day3
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-03T17:01:20-09:00"
* issued = "2023-03-03T17:10:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 140 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 90 'mm[Hg]' "mm[Hg]"


Instance: SMBP-FirstAM-Measurement-Day4
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-04T09:00:31-09:00"
* issued = "2023-03-04T09:10:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 155 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 98 'mm[Hg]' "mm[Hg]"

Instance: SMBP-SecondAM-Measurement-Day4
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-04T09:03:31-09:00"
* issued = "2023-03-04T09:10:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 149 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 95 'mm[Hg]' "mm[Hg]"

Instance: SMBP-FirstPM-Measurement-Day4
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-04T18:30:21-09:00"
* issued = "2023-03-04T09:18:35-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 130 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 80 'mm[Hg]' "mm[Hg]"

Instance: SMBP-SecondPM-Measurement-Day4
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-04T18:32:21-09:00"
* issued = "2023-03-04T18:35:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 128 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 80 'mm[Hg]' "mm[Hg]"

Instance: SMBP-FirstAM-Measurement-Day5
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-05T10:32:21-09:00"
* issued = "2023-03-05T11:00:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 120 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 80 'mm[Hg]' "mm[Hg]"

Instance: SMBP-SecondAM-Measurement-Day5
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-05T10:33:21-09:00"
* issued = "2023-03-05T11:00:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 125 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 82 'mm[Hg]' "mm[Hg]"


Instance: SMBP-FirstPM-Measurement-Day5
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-05T17:33:21-09:00"
* issued = "2023-03-05T18:00:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 128 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 86 'mm[Hg]' "mm[Hg]"

Instance: SMBP-SecondPM-Measurement-Day5
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-05T17:35:21-09:00"
* issued = "2023-03-05T18:00:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 122 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 82 'mm[Hg]' "mm[Hg]"


Instance: SMBP-FirstAM-Measurement-Day6
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-06T10:15:21-09:00"
* issued = "2023-03-06T11:00:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 145 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 95 'mm[Hg]' "mm[Hg]"

Instance: SMBP-SecondAM-Measurement-Day6
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-06T10:16:21-09:00"
* issued = "2023-03-06T11:00:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 140 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 90 'mm[Hg]' "mm[Hg]"

Instance: SMBP-FirstPM-Measurement-Day6
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-06T16:16:21-09:00"
* issued = "2023-03-06T17:00:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 130 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 85 'mm[Hg]' "mm[Hg]"

Instance: SMBP-SecondPM-Measurement-Day6
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-06T16:17:21-09:00"
* issued = "2023-03-06T17:00:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 128 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 85 'mm[Hg]' "mm[Hg]"

Instance: SMBP-FirstAM-Measurement-Day7
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-07T09:45:30-09:00"
* issued = "2023-03-07T10:00:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 125 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 82 'mm[Hg]' "mm[Hg]"

Instance: SMBP-SecondAM-Measurement-Day7
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-07T09:46:30-09:00"
* issued = "2023-03-07T10:00:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 126 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 82 'mm[Hg]' "mm[Hg]"

Instance: SMBP-FirstPM-Measurement-Day7
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-07T17:56:30-09:00"
* issued = "2023-03-07T18:00:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 120 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 82 'mm[Hg]' "mm[Hg]"

Instance: SMBP-SecondPM-Measurement-Day7
InstanceOf: SelfMeasuredBloodPressure
Usage: #example
Description: "An example of a self measured blood pressure on a specific day and time frame."
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-07T17:58:30-09:00"
* issued = "2023-03-07T18:00:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].valueQuantity = 120 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].valueQuantity = 80 'mm[Hg]' "mm[Hg]"

---

// File: input/fsh/Ex_smbp_Device.fsh

Instance: example-smbp-device
InstanceOf: Device
Description: "An example of a simple device used to enhance other examples in this IG."
Usage: #example
* manufacturer = "OMRONHEALTHCARE"
* serialNumber = "20150200002A"
* modelNumber = "HEM-9200T"

---

// File: input/fsh/Ex_VitS_AverageBloodPressure.fsh

Instance: AverageSMBP-example
InstanceOf: AverageSMBP
Usage: #example
Description: "An example of an average blood pressure derived from SMBP measurements."
* extension.url = "http://hl7.org/fhir/uv/cardx-htn-mng/StructureDefinition/NumberOfMeasurementsExt"
* extension.valueInteger = 8 
* status = #final
* category = ObsCat#vital-signs
* code = http://loinc.org#96607-7 "Blood pressure panel mean systolic and mean diastolic"
* subject = Reference(patient-example-Sally-Sue)
* effectivePeriod.start = "2023-03-01T06:00:00-06:00"
* effectivePeriod.end = "2023-03-02T20:00:00-06:00"
* issued = "2023-03-02T20:12:29-06:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* derivedFrom[0] = Reference(SMBP-FirstAM-Measurement-Day1)
* derivedFrom[0].display = "SMBP-FirstAM-Measurement-Day1"
* derivedFrom[1] = Reference(SMBP-SecondAM-Measurement-Day1)
* derivedFrom[1].display = "SMBP-SecondAM-Measurement-Day1"
* derivedFrom[2] = Reference(SMBP-FirstPM-Measurement-Day1)
* derivedFrom[2].display = "SMBP-FirstPM-Measurement-Day1"
* derivedFrom[3] = Reference(SMBP-SecondPM-Measurement-Day1)
* derivedFrom[3].display = "SMBP-SecondPM-Measurement-Day1"
* derivedFrom[4] = Reference(SMBP-FirstAM-Measurement-Day2)
* derivedFrom[4].display = "SMBP-FirstAM-Measurement-Day2"
* derivedFrom[5] = Reference(SMBP-SecondAM-Measurement-Day2)
* derivedFrom[5].display = "SMBP-SecondAM-Measurement-Day2"
* derivedFrom[6] = Reference(SMBP-FirstPM-Measurement-Day2)
* derivedFrom[6].display = "SMBP-FirstPM-Measurement-Day2"
* derivedFrom[7] = Reference(SMBP-SecondPM-Measurement-Day2)
* derivedFrom[7].display = "SMBP-SecondPM-Measurement-Day2"
* component[SystolicBP].code = LNC#96608-5 "Systolic blood pressure mean"
* component[SystolicBP].valueQuantity = 136 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#96609-3 "Diastolic blood pressure mean"
* component[DiastolicBP].valueQuantity = 86 'mm[Hg]' "mm[Hg]"

Instance: AverageSMBP-Protocol-example
InstanceOf: AverageSMBP
Usage: #example
Description: "An example of an average blood pressure derived from measurements that follow the SMBP protocol."
* extension.url = "http://hl7.org/fhir/uv/cardx-htn-mng/StructureDefinition/NumberOfMeasurementsExt"
* extension.valueInteger = 28 
* status = #final
* category = ObsCat#vital-signs
* code.coding.system = "http://loinc.org"
* code.coding.code = LNC#96607-7 "Blood pressure panel mean systolic and mean diastolic"
* subject = Reference(patient-example-Sally-Sue)
* effectivePeriod.start = "2023-03-01T06:00:00-06:00"
* effectivePeriod.end = "2023-03-07T18:00:00-06:00"
* issued = "2019-03-07T19:12:29-10:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* derivedFrom[0] = Reference(SMBP-FirstAM-Measurement-Day1)
* derivedFrom[0].display = "SMBP-FirstAM-Measurement-Day1"
* derivedFrom[1] = Reference(SMBP-SecondAM-Measurement-Day1)
* derivedFrom[1].display = "SMBP-SecondAM-Measurement-Day1"
* derivedFrom[2] = Reference(SMBP-FirstPM-Measurement-Day1)
* derivedFrom[2].display = "SMBP-FirstPM-Measurement-Day1"
* derivedFrom[3] = Reference(SMBP-SecondPM-Measurement-Day1)
* derivedFrom[3].display = "SMBP-SecondPM-Measurement-Day1"
* derivedFrom[4] = Reference(SMBP-FirstAM-Measurement-Day2)
* derivedFrom[4].display = "SMBP-FirstAM-Measurement-Day2"
* derivedFrom[5] = Reference(SMBP-SecondAM-Measurement-Day2)
* derivedFrom[5].display = "SMBP-SecondAM-Measurement-Day2"
* derivedFrom[6] = Reference(SMBP-FirstPM-Measurement-Day2)
* derivedFrom[6].display = "SMBP-FirstPM-Measurement-Day2"
* derivedFrom[7] = Reference(SMBP-SecondPM-Measurement-Day2)
* derivedFrom[7].display = "SMBP-SecondPM-Measurement-Day2"
* derivedFrom[8] = Reference(SMBP-FirstAM-Measurement-Day3)
* derivedFrom[8].display = "SMBP-FirstAM-Measurement-Day3"
* derivedFrom[9] = Reference(SMBP-SecondAM-Measurement-Day3)
* derivedFrom[9].display = "SMBP-SecondAM-Measurement-Day3"
* derivedFrom[10] = Reference(SMBP-FirstPM-Measurement-Day3)
* derivedFrom[10].display = "SMBP-FirstPM-Measurement-Day3"
* derivedFrom[11] = Reference(SMBP-SecondPM-Measurement-Day3)
* derivedFrom[11].display = "SMBP-SecondPM-Measurement-Day3"
* derivedFrom[12] = Reference(SMBP-FirstAM-Measurement-Day4)
* derivedFrom[12].display = "SMBP-FirstAM-Measurement-Day4"
* derivedFrom[13] = Reference(SMBP-SecondAM-Measurement-Day4)
* derivedFrom[13].display = "SMBP-SecondAM-Measurement-Day4"
* derivedFrom[14] = Reference(SMBP-FirstPM-Measurement-Day4)
* derivedFrom[14].display = "SMBP-FirstPM-Measurement-Day4"
* derivedFrom[15] = Reference(SMBP-SecondPM-Measurement-Day4)
* derivedFrom[15].display = "SMBP-SecondPM-Measurement-Day4"
* derivedFrom[16] = Reference(SMBP-FirstAM-Measurement-Day5)
* derivedFrom[16].display = "SMBP-FirstAM-Measurement-Day5"
* derivedFrom[17] = Reference(SMBP-SecondAM-Measurement-Day5)
* derivedFrom[17].display = "SMBP-SecondAM-Measurement-Day5"
* derivedFrom[18] = Reference(SMBP-FirstPM-Measurement-Day5)
* derivedFrom[18].display = "SMBP-FirstPM-Measurement-Day5"
* derivedFrom[19] = Reference(SMBP-SecondPM-Measurement-Day5)
* derivedFrom[19].display = "SMBP-SecondPM-Measurement-Day5"
* derivedFrom[20] = Reference(SMBP-FirstAM-Measurement-Day6)
* derivedFrom[20].display = "SMBP-FirstAM-Measurement-Day6"
* derivedFrom[21] = Reference(SMBP-SecondAM-Measurement-Day6)
* derivedFrom[21].display = "SMBP-SecondAM-Measurement-Day6"
* derivedFrom[22] = Reference(SMBP-FirstPM-Measurement-Day6)
* derivedFrom[22].display = "SMBP-FirstPM-Measurement-Day6"
* derivedFrom[23] = Reference(SMBP-SecondPM-Measurement-Day6)
* derivedFrom[23].display = "SMBP-SecondPM-Measurement-Day6"
* derivedFrom[24] = Reference(SMBP-FirstAM-Measurement-Day7)
* derivedFrom[24].display = "SMBP-FirstAM-Measurement-Day7"
* derivedFrom[25] = Reference(SMBP-SecondAM-Measurement-Day7)
* derivedFrom[25].display = "SMBP-SecondAM-Measurement-Day7"
* derivedFrom[26] = Reference(SMBP-FirstPM-Measurement-Day7)
* derivedFrom[26].display = "SMBP-FirstPM-Measurement-Day7"
* derivedFrom[27] = Reference(SMBP-SecondPM-Measurement-Day7)
* derivedFrom[27].display = "SMBP-SecondPM-Measurement-Day7"
* component[SystolicBP].code = LNC#96608-5
* component[SystolicBP].valueQuantity = 134 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#96609-3
* component[DiastolicBP].valueQuantity = 84 'mm[Hg]' "mm[Hg]"

---

// File: input/fsh/Ex_VitS_HeartRate.fsh


Instance: SMBP-Associated-HeartRate-example
InstanceOf: smbp-associated-heart-rate
Description: "An example of a heart rate that would be captured/recorded form a the same device used for a blood pressure and at the same time."
Usage: #example
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = http://loinc.org#8867-4
* code.text = "Heart rate"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-01T08:00:00-09:00"
* issued = "2023-03-01T08:10:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* valueQuantity = 74 '/min' "'/min'"

---

// File: input/fsh/Ex_VitS_SMBP.fsh

Instance: SelfMeasuredBloodPressure-example
InstanceOf: SelfMeasuredBloodPressure
Description: "A simple example of a self-measured blood pressure."
Usage: #example
* status = #final
* category[VSCat] = ObsCat#vital-signs
* code = http://loinc.org#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(patient-example-Sally-Sue)
* effectiveDateTime = "2023-03-01T12:12:29-09:00"
* issued = "2023-03-01T12:13:00-09:00"
* performer = Reference(patient-example-Sally-Sue)
* device = Reference(example-smbp-device)
* component[SystolicBP].code = http://loinc.org#8480-6
* component[SystolicBP].valueQuantity = 120 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = http://loinc.org#8462-4
* component[DiastolicBP].valueQuantity = 80 'mm[Hg]' "mm[Hg]"

---

// File: input/fsh/extensions.fsh

Extension: NumberOfMeasurements
Id: NumberOfMeasurementsExt
Title: "Number of Measurements"
Description: "A count of the number of measurements used in a calculation, such as Average Blood Pressure."
* ^context[+].type = #element
* ^context[=].expression = "Observation"
* value[x] only integer
* valueInteger 1..1

---

// File: input/fsh/SelfMeasuredBloodPressure.fsh

Profile: SelfMeasuredBloodPressure
Parent: CoreBPProfile
Id: self-measured-bp
Title: "Self-measured Blood Pressure"
Description: "A blood pressure taken by the subject or a related person, done in a non-clinical environment."
* code.coding 1..*
* component[SystolicBP].code.coding 1..*
* component[DiastolicBP].code.coding 1..*
* status MS
* status from SMBPStatusVS (required)
* effective[x] only dateTime
* issued 1..1 MS
* performer 1..1 MS
* performer only Reference(Patient)

---

// File: input/fsh/SMBPAssociatedHeartRate.fsh

Profile: SMBPAssociatedHeartRate
Parent: CoreHRProfile
Id: smbp-associated-heart-rate
Title: "SMBP Associated Heart Rate"
Description: "A heart rate measured by the same device and at the same time as the self-measured blood pressure."
* status MS
* code.coding 1..*
* subject 1..1 MS
* subject only Reference(Patient)
* effective[x] 1..1 MS
* performer 1..1
* performer only Reference(Patient)
* value[x] only Quantity
* valueQuantity MS
* valueQuantity.value 1..1 MS
* valueQuantity.unit 1..1 MS
* valueQuantity.system 1..1 MS
* valueQuantity.system only uri
* valueQuantity.system = "http://unitsofmeasure.org" (exactly)
* valueQuantity.code 1..1 MS
* valueQuantity.code only code
* valueQuantity.code = #/min (exactly)
* dataAbsentReason MS


---

// File: input/fsh/valueSets/NumericResultInterpretationNom.fsh

ValueSet: NumericResultInterpretationNom
Id: NumericResultIntVS
Title: "Numeric Result Interpretation value set"
Description: "The HL7 V3:ObservationInterpretation code set (OID: 2.16.840.1.113883.5.83) that describes interpretations associated with a measured value."
* ^experimental = false
* v3-ObservationInterpretation#A "Abnormal"
* v3-ObservationInterpretation#H "Higher Than Normal"
* v3-ObservationInterpretation#L "Lower Than Normal"
* v3-ObservationInterpretation#HH "Panic High"
* v3-ObservationInterpretation#LL "Panic Low"
* v3-ObservationInterpretation#N "Normal"

---

// File: input/fsh/valueSets/SMBPObsStatus.fsh

ValueSet: SMBPStatusVS
Id: smbp-obs-status
Title: "SMBP Observation Status value set"
Description: "A constraint of the HL7 FHIR Observation Status value set containing only codes relevent to SMBP."
* ^experimental = false
* ObsStatus#final "Final"
* ObsStatus#entered-in-error "Entered in error"
* ObsStatus#unknown "Unknown"

---

