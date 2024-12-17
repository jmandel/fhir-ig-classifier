// File: input/pagecontent/background.md

### Background
The COVID-19 pandemic highlighted the importance of identifying the scope of medication use among hospitalized patients for new and emerging diseases during public health emergencies. Data sources for accurate, efficient, scalable reporting of medication exposure among patients hospitalized with suspected or confirmed COVID-19 were lacking throughout the pandemic. This NHSN-COVID-19- Medication-Administration-FHIR implementation guide (IG) seeks to overcome some of the challenges of other time-, labor- and cost-intensive methods of quantifying and characterizing medication use, such as data based on administrative claims, by utilizing a vendor-neutral, interoperable standard for fully electronic patient-level queries of medication data among U.S. inpatient populations. It builds upon NHSN’s long-standing experience in healthcare surveillance, and hospital quality and benchmarking efforts for inpatient antibiotic use and expands upon data collected by federal health entities related to the impact of COVID-19 on hospital bed capacity, personal protective equipment, and other public health emergency resources.

### Scope
In this IG, medication administration events refer to clinician-administered events (e.g., nurse giving a patient their medication dose), those occurring in inpatient settings; this excludes: emergency department, observation/short stay, inpatient rehabilitation, outpatient surgical centers, and other outpatient (including physician office) settings. Medication administration events are collected irrespective of whether they are linked to adverse events.

### Example Scenarios
* How were scarce medications (e.g., investigational drugs or drugs approved under Emergency Use Authorization (EUA)) utilized in patients hospitalized with COVID-19? 
* In what patient populations (e.g., by age, sex, race) and in what doses, frequencies, and durations?
* What was the scope of hydroxychloroquine utilization in patients hospitalized with suspected or confirmed COVID-19?
* How did hospital antibiotic utilization change throughout the COVID-19 pandemic?

### Relationship to Other Guides/Work
Closely related to [HL7 CDA® R2 Implementation Guide: Healthcare Associated Infection (HAI) Reports - AU](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=426); however, key differences include:
1. dependence of the NHSN-COVID-19-Medication-Administration-FHIR IG on FHIR resources and
2. patient-level approach to data collection (i.e., request is for raw data and not pre-aggregated data).

---

// File: input/pagecontent/downloads.md

**Full Implementation Guide**

The entire implementation guide (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

In addition there are format specific definitions files.
* [XML](definitions.xml.zip)
* [JSON](definitions.json.zip)
* [TTL](definitions.ttl.zip)

**Examples:** all the examples that are used in this Implementation Guide available for download:
* [XML](examples.xml.zip)
* [JSON](examples.json.zip)
* [TTL](examples.ttl.zip)

---

// File: input/pagecontent/index.md

### Overview

This IG will support electronic submission of patient/line-level medication administration data to the National Healthcare Safety Network (NHSN). The intent of this project is to establish an electronic submission standard that is vendor-neutral that leverages existing workflows and eliminates duplicate documentation. This project will work with EHR vendors to identify data elements that can be used to describe medications administered (name, formulation, route, dose, duration) to hospitalized patients (inpatients) diagnosed with COVID-19 as part of NHSN COVID-19 reporting pathways. Medication administration events would be reported irrespective of whether or not medication administration was linked to an adverse event, refer to clinician-administered events (e.g., nurse giving a patient their medication dose), and only those occurring in inpatient settings; this excludes: emergency department, observation/short stay, inpatient rehabilitation, outpatient surgical centers, and other outpatient (including physician office) settings.

Medication data are integral to informing the quality, safety, and costs of U.S. healthcare, supporting federal, state, and local public health, and guiding clinical decision-making in patient care. In inpatient workflows, medication administration—as captured by electronic medication administration (eMAR) records—is considered the gold standard for accurately measuring in-hospital medication exposure, including identifying the exact medications patients have received, in what formulations, doses, and for what duration of time. The need for medication administration information has never been clearer as during the COVID-19 pandemic, where identification of the medications that acutely ill hospitalized patients with COVID-19 had received was integral to understanding clinical management of this new public health threat and directing public health resources, including scarce medications. The continued reliance on the "medication list" resource instead of the "medication administration" resource is a severe limitation in achieving accurate representation of medication exposure in U.S. healthcare data through FHIR resources.

### IG

This implementation guide provides HL7 FHIR resources to define standards for exchange between a hospital and NHSN. 

This publication provides the data model, defined data items, and their corresponding code and value sets, for reporting inpatient medication administration data for inpatients diagnosed with COVID-19. This guide describes constraints on the US Core and base FHIR resources for reporting, which are derived from requirements developed by the NHSN in consultation with the Health Level Seven (HL7) Pharmacy Work Group. Resources in this US Realm implementation guide are specific to reporting medication administration data to NHSN.

This guide contains a library of FHIR profiles and is compliant with FHIR Release 4. At a minimum, a Document Bundle and Composition will be exchanged along with a Patient, and associated COVID-19 Condition and laboratory results.

This guide defines 4 new Profiles:

* [Composition - Inpatient Medication Administration](StructureDefinition-Composition-inpatient-med-admin.html)
* [Condition - Lab Confirmed COVID-19](StructureDefinition-Condition-lab-confirmed-covid.html)
* [Condition - Suspected COVID-19](StructureDefinition-Condition-suspected-covid.html)
* [Observation - Laboratory SARS COVID-19](StructureDefinition-Observation-lab-sars-cov.html)



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
<td>HL7 International - Pharmacy</td>
<td><a href="http://www.hl7.org/Special/committees/medication" target="_new">http://www.hl7.org/Special/committees/medication</a></td>
</tr>
</tbody>
</table>




---

// File: input/pagecontent/StructureDefinition-Composition-inpatient-med-admin-intro.md

This Composition contains all conditions, results, and medications relevant to and generated during an encounter for patients diagnosed with COVID-19. It should contain information about all medications administered to these hospitalized patients (inpatients) and all medication administration events should be reported irrespective of whether or not medication administration was linked to an adverse event.

---

