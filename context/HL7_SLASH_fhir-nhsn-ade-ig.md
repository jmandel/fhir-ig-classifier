// File: input/pagecontent/background.md

### Background

Inpatient hypoglycemia is one of the most common adverse drug events (ADEs) occurring in United States (U.S.) hospitals. Hypoglycemia in hospitalized patients can be severe and life-threatening and is associated with longer hospital stays and increased medical costs. Measurement of medication-related hypoglycemia in a meaningful and standardized way could improve hospital glycemic management. The NHSN Adverse Drug Event-Hypoglycemia FHIR implementation guide (IG) seeks to enable EHRs to serve as source systems for reporting linked inpatient blood glucose and medication administration data to the Centers for Disease Control and Prevention (CDC) National Healthcare Safety Network (NHSN) via industry electronic messages, with the goals of improving patient safety and facilitating hospital quality improvement efforts and benchmarking of hypoglycemia.

### Scope

This IG addresses blood glucose and medication administration events in inpatient settings only and does not include hypoglycemia resulting only in outpatient care (e.g., hypoglycemia resulting in emergency medical services, physician office visits, or emergency department visits only). This IG addresses ADE data collection at the patient-level (i.e., collects individual laboratory and point-of-care-blood glucose and individual medication data for each inpatient encounter). The IG does not describe the calculation of any measures for hypoglycemia rates; these measures are intended to be calculated, aggregated, or risk-adjusted subsequent to reporting of patient-level data to CDC.

### Patient-Level Data Calculations

The patient level data recieved will be used by NHSN to calculate:

* What is the rate of hypoglycemic events as defined per the National Quality Forum (NQF) quality measure [#2363](https://cmit.cms.gov/CMIT_public/ViewMeasure?MeasureId=3180)? (The number of inpatient hypoglycemia events preceded by antidiabetic drug / the number of inpatient days with ≥1 antidiabetic drug administered).
* What is the rate of hypoglycemic events as defined per the NQF quality measure [#3503](https://cmit.cms.gov/CMIT_public/ViewMeasure?MeasureId=6086)? (The number of inpatient admissions with hypoglycemia events preceded by antidiabetic drug / the number of inpatient admissions with ≥1 antidiabetic drug administered).
* What percentage of patients with ≥1 antidiabetic drug administered had a recurrent hypoglycemic day or event during their hospital stay?
* What are the hospital’s hypoglycemia rates stratified by critical care vs. non-critical care locations?
* What is the percentage of hospital antidiabetic drug days where blood glucose was < 40 mg/dL, < 54 mg/dL, or < 70 mg/dL?
* How do aggregate hospital hypoglycemia rates differ by hospital type, hospital size, and other variables?

### Relationship to Other Guides/Work

Similar standards that seek to report ADEs include: 
* [Profiles for ICSR Transfusion and Vaccination Adverse Event Detection and Reporting](https://build.fhir.org/ig/HL7/fhir-icsr-ae-reporting/branches/main/index.html).
* [ISO/HL7 27953-2:2011: Health informatics — Individual case safety reports (ICSRs) in pharmacovigilance — Part 2: Human pharmaceutical reporting requirements for ICSR](https://www.iso.org/standard/53825.html)

---

// File: input/pagecontent/downloads.md

**Full Implementation Guide**

The entire implementation guide (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

In addition there are format specific definitions files.

* [XML](definitions.xml.zip)\n* [JSON](definitions.json.zip)
* [TTL](definitions.ttl.zip)
 
**Examples:** all the examples that are used in this Implementation Guide available for download:

* [XML](examples.xml.zip)
* [JSON](examples.json.zip)
* [TTl](examples.ttl.zip)

---

// File: input/pagecontent/index.md

### Overview

Adverse drug events (ADEs) are among the most common causes of iatrogenic harm in U.S. hospitals. An effort to establish an EHR- and vendor-neutral standard for submitting ADE data to NHSN is being sought to improve patient safety and facilitate quality improvement effort. This promising initiative enables EHRs of acute care facilities to serve as source systems for reporting ADE data to the National Healthcare Safety Network (NHSN) via industry electronic messages. This initiative leverages NHSN’s longstanding experience working closely with the Health Level Seven (HL7) standards development organization and HL7 consultants in developing and maintaining electronic healthcare-associated and antibiotic use and resistance reporting implementation guidance for EHRs and infection surveillance system vendors in the acute care arena. That experience, and the working relationships developed over a 10-year partnership, are an important foundation for a collaborative effort in which NHSN, HL7, HL7 consultants, and EHR vendors join forces to advance the field of electronic ADE reporting. These long-standing linkages links between public health and vendors can be leveraged in ways that yield benefits for surveillance and prevention that are tightly coupled to business models and growth.

#### Hypoglycemia

The first module, Hypoglycemia, as part of the NHSN Medication Safety Component, enables hospitals to track and benchmark inpatient medication-related hypoglycemia (low blood sugar). Inpatient hypoglycemia can be severe and life-threatening and is associated with longer hospital stays and increased medical costs. Severe hypoglycemia (&lt;40 mg/dL) occurs in 2%-5% of hospitalized patients with diabetes mellitus (DM). Medication-related hypoglycemic events are common causes of adverse drug events (ADEs) occurring in inpatient settings, with rates of severe hypoglycemia varying across hospitals, suggesting opportunities for improvement in the quality of care. Measurement of medication-related hypoglycemia in a meaningful and standardized way may improve glycemic management. The NHSN ADE – Hypoglycemia Module provides a mechanism for facilities to report and analyze medication-related hypoglycemia as part of patient safety and glycemic management quality improvement efforts.

The hypoglycemia module is based on quality reporting metrics previously- or currently-endorsed by the National Quality Forum (NQF): NQF #2363 Glycemic Control - Hypoglycemia and NQF #3503 Hospital Harm – Severe Hypoglycemia. The metrics reported in this module would be primarily based on linked eMAR (antidiabetic medication administration) and laboratory (blood glucose) data.

#### Hyperglycemia

This work is now being extended to include the hyperglycemia (high blood sugar) model. Similar to inpatient hypoglycemia, hyperglycemia in hospitalized patients is associated with excess morbidity, mortality, and medical costs. Patients with diabetes comprise 30% to 40% of U.S. hosptial admissions and 70% to 80% of critical care stays. In patients with and without diabetes, appropriate management of hyperglycemia in hospital settings has been associated with improved clinical outcomes, reduced hospital-related morbidity and mortality, and lower costs. The incorporation of hyperglycemia surveillance is important for ensuring a comprehensive and balanced glycemic management quality improvement effort for hospitals. The NHSN ADE – Glycemic Control Module would provide a mechanism for facilities to report and analyze both inpatient hypoglycemia and hyperglycemia as part of patient safety and glycemic management quality improvement efforts.

The hyperglycemia module is based on quality reporting metrics currently-endorsed by the National Quality Forum (NQF):  NQF #3533e Hospital Harm – Severe Hyperglycemia. The metrics reported in this module are intended to be based on linked diabetes diagnosis, eMAR (antidiabetic medication administration) and laboratory (blood glucose) data.

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

// File: input/pagecontent/StructureDefinition-Composition-ade-hyperglycemia-intro.md

The data reported in this Composition should be primarily based on linked eMAR (antidiabetic medication administration), laboratory (blood glucose) data, and diabetes diagnosis data, however, it should contain all conditions, procedures, results, and medications relevant to and generated during the encounter.

The composition also contains counts of:
* all patients hospitalized during a specified time period  who meet the criteria of a diabetes diagnosis (primary or secondary position), irrespective of whether they have experienced an adverse event
* all patients hospitalized during a specified time period  who meet the criteria of ESRD/ESLD diagnoses (primary or secondary position), irrespective of whether they have experienced an adverse event

---

// File: input/pagecontent/StructureDefinition-Composition-ade-hypoglycemia-intro.md

The data reported in this Composition should be primarily based on linked eMAR (antidiabetic medication administration) and laboratory (blood glucose) data, however, it should contain all conditions, procedures, results, and medications relevant to and generated during the encounter.

The composition also contains a count of all patients hospitalized during a specified time period  who meet the criteria of ESRD/ESLD diagnoses (primary or secondary position), irrespective of whether they have experienced an adverse event.

---

