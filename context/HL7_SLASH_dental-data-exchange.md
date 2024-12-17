// File: input/pagecontent/background.md

Currently, there is no standard for the exchange of discrete dental observations between dental providers. While some dental electronic health record (EHR) systems have implemented C-CDA for data exchange, that standard was primarily built for medical care and does not include most structured data elements needed by dental providers.

The Department of Defense (DoD) and the American Dental Association (ADA) recognized the need for foundational dental data exchange between medical and dental practices and among dental practices. The DoD wishes to support the dental health of service members and their readiness for deployment. The ADA wishes to support a continued, industry-wide, drive to promote and enhance standardized and structured dental data for seamless interoperability using CDA and FHIR. Lantana Consulting Group and the CareQuest Institute for Oral Health have collaborated to develop this FHIR Dental Data Exchange Implementation Guide in parallel to the CDA Dental Data Exchange Implementation Guide. 

Representatives from the DoD, ADA, and industry leaders convened the Dental Data Exchange Project in late Summer 2019. The first project milestone was identifying key data concepts that could successfully transmit a dental referral between two dental systems, or between a medical and a dental system. The project focused on adding structure to unstructured dental data elements while maintaining alignment with [FHIR US Core Implementation Guide](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=500), [HL7 CDA® R2 IG: C-CDA Templates for Clinical Notes R2.1 Companion Guide, Release 2 - US Realm](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=447), and [HL7 CDA® R2 Implementation Guide: Consolidated CDA Templates for Clinical Notes - US Realm](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=492). 

Independently, the CareQuest Institute for Oral Health identified a need for communication and coordination of care between oral health providers and other health care disciplines. The inability of health information systems to meaningfully share data limits the healthcare system’s ability to address whole-person care across the lifespan, and therefore is detrimental to health outcomes. The electronic communication of clinically relevant medical or dental information when referring a patient to a dental provider, and the ability to close the referral loop, via a dental consultation note to the referring healthcare providers is vital to improving care coordination and provider collaboration. The CareQuest Institute for Oral Health joined this project in Fall 2019, bringing their requirements to the development of standard dental referral and dental consultation notes.

### Current Project

This project defines FHIR artifacts to extend the C-CDA on FHIR Referral Note and Consultation Note to include dental specific data concepts called for in the ANS/ADA 1084 standard and the CareQuest Institute’s MORE Care and Oral Health Value-Based Care initiatives. 

The project references value sets set by the Systematized Nomenclature of Dentistry (SNODENT) working group, under SNOMED-CT. SNODENT is an official subset of SNOMED-CT that provides standardized terms for describing dental disease, captures clinical detail and patient characteristics, supports analysis of patient care services and outcomes, and is interoperable with electronic health record (EHR) and electronic dental record (EDR) systems. Additionally, SNODENT is mapped to ICD-10-CM for reporting diagnoses for billing. SNODENT includes a web-based search browser ([ADA Browser®](https://snodent.ada.org/), where implementors can browse dental related terms and code sets.

The project uses the ADA 1084 as the authoritative reference for dental data inclusion because the ADA created it through consensus across dental providers about what shared dental concepts could be exchanged. The work group compared the ADA 1084 to the FHIR R4 standard, identifying gaps in FHIR representation of dental data concepts. The project prioritized ADA 1084 dental data elements within data domain categories and grouped the data domains by Dental Referral Note (referral sent to another system, requesting dental services) and Dental Consult Note (referral outcome sent back to requester). 

### Dental Use Case Scenarios

Use cases can bridge understanding between conceptual interpretations and technical implementation of this guide. Four use cases were tested at the May 2020 FHIR Connectathon: Dental Summary Exchange Track, and further refined by the project. 

The use cases outlined in this IG show the complexity of the information that can be exchanged between a dental and medical system or two dental systems. Fully-formed XML sample files representing the data included in each of these scenarios are published with this implementation guide. Additional use cases are available on the [CareQuest Institute website](https://www.carequest.org/care-coordination-cases).

The figure below represents the high-level workflow described across Scenarios 1 (Medical to Dental Referral Note) and 2 (Dental to Medical Consultation Note).

<table><tr><td><img src="Dnetal Data Exchange.png" /></td></tr></table>

### Scenario 1: Medical to Dental Referral Note
Patient A is a 30-year-old male who has mild hypertension, Type 1 Diabetes, and has an insulin pump. He sees his primary care physician, Dr. John M at Good Health Clinic, for a routine, annual check-up. Aside from medical concerns, Patient A mentions increasing pain in his left lower jaw and some occasional bleeding from his gums. Dr. John M makes an urgent referral to a dentist for further evaluation and discusses the plan with Patient A, who agrees with the plan. Dr. John M generates a Patient Referral Note that includes data describing the dental related findings. Before Patient A leaves, the referral coordinator at the front desk schedules an appointment for him to see Dr. Drew Dentist for the next day.

**Capability Statement references:** Medical office system is the Document Source (i.e., server) that generates the Dental Referral Note and the Dental office application is the Document Consumer (i.e., client) that consumes the Dental Referral Note.

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px; overflow:hidden;padding:0px 3px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px; font-weight:normal;overflow:hidden;padding:0px 3px;word-break:normal;}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0lax">Patient has pain in his lower left jaw and occasional bleeding from his gums - referring for dental evaluation.</th>
  </tr>
</thead>
</table>

This table maps the FHIR resources to CDA sections and entries and to data values for Scenario 1: Medical to Dental Referral Note.

<div class="tg-wrap">
<table class="table table-bordered table-hover table-condensed">

<thead>
<tr>
<th>  FHIR Profile </th>
<th>  FHIR Data Element </th>
<th>  CDA Section </th>
<th>  CDA Entry </th>
<th>  Data Values </th>
</tr>
</thead>

<tbody>
<tr>
<td><b><i> Dental-Specific Profiles </i></b> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td> Dental Communication </td>
<td> Communication.payload.content </td>
<td> Instructions Section (V2) </td>
<td> N/A </td>
<td> Pt. Education: Advised to see dentist regularly, brush 2x/day w/ fluoride toothpaste, floss </td>
</tr>
<tr>
<td> Dental Service Request </td>
<td> ServiceRequest.code 
   <br>ServiceRequest.reasonCode </td>
<td> Plan of Treatment Section (V2) </td>
	<td> Planned Encounter (V2) </td>
<td> Dental Referral: Feb 15, 2020 at 3 pm; priority – ASAP
   <br>103697008 Patient referral for dental care (procedure) SNOMED CT 
   <br>27355003 Pain in tooth SNOMED CT
	 <br>301716002 Left lower quadrant pain SNOMED CT 
	 <br>86276007 Bleeding gums SNOMED CT </td>
</tr>
<tr>
<td><b><i> US Core Profiles </i></b> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td> US Core AllergyIntollerance </td>
<td> AllergyIntollerance.code </td>
<td> Allergies and Intolerances Section (entries required) (V3) </td>
<td> Allergy Concern Act (V3) / Allergy - Intolerance Observation (V2) </td>
<td> 7980 Penicillin G (Ingredient) RxNorm </td>
</tr>
<tr>
<td> US Core Condition </td>
<td> Condition.category Condition.code </td>
<td> Problem Section (entries required) (V3) </td>
<td> Problem Concern Act (V3) / Problem Observation (V3) </td>
<td> Value: 38341003 Hypertensive disorder (disorder) SNOMED CT
   <br>Translation: 175027D Hypertensive disorder (disorder) SNODENT
	 <br>Value: 46635009 Type1 diabetes SNOMED CT
	 <br>Translation: 175321D Type 1 diabetes SNODENT 
	 <br>Value: 309685001 Swollen gums SNOMED CT
	 <br>Translation: 148393D Swollen gums SNODENT
	 <br>Value: 276453000 Teeth covered in plaque (finding) SNOMED CT
	 <br>Translation: 108723DTeeth covered in plaque (finding) SNODENT
	 <br>Value: 27355003 Toothache (finding) SNOMED CT
	 <br>Translation: 108723D Toothache (finding) SNODENT
	 <br>Value: 86276007 Bleeding Gums SNOMED CT
	 <br>Translation: 142683D Bleeding Gums SNODENT
	 <br>Value: 609402003 At high risk for dental caries (finding) SNOMED CT
	 <br>Translation: 179051D At high risk for dental caries (finding) SNODENT </td>
</tr>
<tr>
<td> US Core Encounter </td>
<td> Encounter.status
   <br>Encounter.class
	 <br>Encounter.type
	 <br>Encounter.period
	 <br>Encounter.priority </td>
<td> Encounters Section </td>
<td> componentOf / encompassingEncounter </td>
<td> Office visit: Feb 14,2020 at 3:00 pm
   <br>99201 Level 1 New Patient Office
	 <br>Visit CPT </td>
</tr>
<tr>
<td> US Core Immunization </td>
<td> Immunization.vaccineCode
   <br>Immunization.occurenceDateTime </td>
<td> Immunization Section (entries required) (V3) </td>
<td> Immunization Activity (V3) / Immunization Medication Information (V2) </td>
<td> 08 Hepatitis B vaccine CVX Administered on 1/4/2020 </td>
</tr>
<tr>
<td> US Core Medication </td>
<td> Medication.code </td>
<td> Medications Section (entries required) (V2) </td>
<td> Medication Activity (V2) / Medication Information (V2) </td>
<td> 314076 Lisinopril 10mg Oral Tablet RxNorm </td>
</tr>
<tr>
<td> US Core MedicationRequest </td>
<td> MedicationRequest.status
   <br>Medicationstatus.intent
	 <br>MedicationRequest.authoredOn
	 <br>MedicationRequest .dosageInstruction.route
	 <br>MedicationRequest .dosageInstruction .doseAndRate </td>
<td> Medications Section (entries required) (V2) </td>
<td> Medication Activity (V2) / Medication Information (V2) </td>
<td> Lisinopril 10 mg tab, taking 1 tab once a day </td>
</tr>
<tr>
<td> US Core Patient </td>
<td> Patient.name
   <br>Patient MRN (identifier)
	 <br>Patient.address
	 <br>Patient.telecom
	 <br>Patient.birthDate
	 <br>Patient.gender
	 <br>Patient.us-core-ethnicity (extension)
	 <br>Patient.us-core-race (extension) </td>
<td> US Realm Header </td>
<td> recordTarget / patientRole </td>
<td> Patient A
   <br>MRN: 5152020
	 <br>123 Test. Dr. Denver CO 80204 
	 <br>phone: (123)456-7890 
	 <br>email: testA@email.com
	 <br>01-01-1990 
	 <br>Male 
	 <br>Not Hispanic or Latino 
	 <br>White </td>
</tr>
<tr>
		<td> US Core Procedure profile </td>
<td> Procedure.code </td>
<td> Medical Equipment Section </td>
<td> Procedure Activity Procedure (V2) / Product Instance </td>
<td> Insertion of insulin pump on November 3, 2013 </td>
</tr>
<tr>
<td> US Core Organization (Referring Organization) </td>
<td> Organization.identifier:NPI 
   <br>Organization.active 
	 <br>Organization.name </td>
<td> US Realm Header </td>
<td> custodian / assignedCustodian / representedCustodianOrganization </td>
<td> NPI 1316452725 
   <br>Good Health Clinic </td>
</tr>
<tr>
<td> US Core Practitioner (Referring Practitioner) </td>
<td> Practitioner.identifier:NPI 
   <br>Practitioner.name 
	 <br>Practitioner Organization </td>
<td> US Realm Header </td>
<td> author / assignedAuthor </td>
<td> NPI: 1234567411 
   <br>Dr. John M 
	 <br>Good Health Clinic </td>
</tr>
<tr>
<td> US Core PractitionerRole (Referring PractitionerRole) </td>
<td> PractitionerRole.organization 
   <br>PractitionerRole.code </td>
<td> US Realm Header </td>
<td> author / assignedAuthor / code </td>
<td> 207QA0505X Family Medicine 
   <br>[Adult Medicine] Healthcare Provider Taxonomy (HIPAA) </td>
</tr>
<tr>
<td> US Core Vital Signs (Observation) </td>
<td> Observation.component.value </td>
<td> Vital Signs Section (entries required) (V3) </td>
<td> Vital Signs Organizer (V3) / Vital Sign Observation (V2) </td>
<td> Temp: 98.5 
   <br>Pulse: 78 
	 <br>Respiration: 20 
	 <br>BP: 120/80 </td>
</tr>
<tr>
<td><b><i> C-CDA on FHIR Based Profiles (Referral Note) </i></b> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td> Dental Referral Note </td>
<td> Composition.section.code = ‘48765-2’ </td>
<td> Allergies and Adverse Reactions Section </td>
<td> Allergy Concern Act (V3) / Allergy - Intolerance Observation (V2) </td>
<td> 7980 Penicillin G (Ingredient) RxNorm </td>
</tr>
<tr>
<td> Dental Referral Note </td>
<td> Composition.section.code = ‘51848-0’ </td>
<td> Assessment Section </td>
<td> N/A </td>
<td> Patient has pain in his lower left jaw and occasional bleeding from his gums. Referring for dental evaluation. </td>
</tr>
<tr>
<td> Dental Referral Note </td>
<td> Composition.section.code= ‘10164-2’ </td>
<td> History of Present Illness Section </td>
<td> N/A </td>
<td> Patient has not visited a dentist or received fluoride treatments in the past four years while away at college. </td>
</tr>
<tr>
<td> Dental Referral Note </td>
<td> Composition.section.code= ‘61146-7’ </td>
<td> Goal Section </td>
<td> Goal Observation </td>
<td> No soda / sugary drinks / energy drinks.
   <br>Use fluoride toothpaste </td>
</tr>
<tr>
<td> Dental Referral Note </td>
<td> Composition.section.code= ‘75310-3’ </td>
<td> Health Concern Section (V2) </td>
<td> Health Concern Act (V2) / Problem Observation (V3) </td>
<td> 230572002 Neuropathy due to diabetes mellitus SNOMED CT </td>
</tr>
<tr>
<td> Dental Referral Note </td>
<td> Composition.section.code= ‘11369-6’ </td>
<td> Immunization Section (entries required) (V3) </td>
<td> Immunization Activity (V3) / Immunization Medication Information (V2) </td>
<td> 08 Hepatitis B vaccine CVX Administered on 1/4/2020 </td>
</tr>
<tr>
<td> Dental Referral Note </td>
<td> Composition.section.code= ‘69730-0’ </td>
<td> Instructions Section </td>
<td> Instructions Section </td>
<td> Pt. Education: Advised to see dentist regularly, brush 2x/day w/ fluoride toothpaste, floss </td>
</tr>
<tr>
<td> Dental Referral Note </td>
<td> Composition.section.code= ‘46264-8’ </td>
<td> Medical Equipment Section (V2) </td>
<td> Procedure Activity Procedure (V2) / Product Instance </td>
<td> 443263006 Insertion of insulin pump (procedure) SNOMED CT
   <br>69805005 Insulin pump SNOMED CT 
	 <br>212124D Insulin pump SNODENT 
	 <br>UDI Details:
	 <br>  •	UDI: Unknown
	 <br>  •	Company Name: MDiabetic
	 <br>  •	Brand Name: INDEPENDENCE® Insulin Pump
	 <br>  •	Model Number: 100-INP</td>
</tr>
<tr>
<td> Dental Referral Note </td>
<td> Composition.section.code= ‘10160-0’ </td>
<td> Medications Section </td>
<td> Medication Activity (V2) / Medication Information (V2) </td>
<td> 314076 Lisinopril 10mg Oral Tablet RxNorm, taking 1 tab once a day </td>
</tr>
<tr>
<td> Dental Referral Note </td>
<td> Composition.section.code= ‘18776-5’ </td>
<td> Plan of Treatment Section </td>
<td> Planned Encounter (V2) </td>
<td> D0150 Comprehensive Oral Evaluation CDT </td>
</tr>
<tr>
<td> Dental Referral Note </td>
<td> Composition.section.code= ‘29762-2’ </td>
<td> Social History Section (V3) </td>
<td> Smoking Status – Meaningful Use (V2) and Social History Observation (V3) </td>
<td> 266919005 Never smoked tobacco (finding) SNOMED CT 
   <br>224302000 Received higher education college education (finding) SNOMED CT
	 <br>106302007 Accountant (occupation) SNOMED CT </td>
</tr>
<tr>
<td> Dental Referral Note </td>
<td> Composition.section.code= ‘42349-1’ </td>
<td> Reason for Referral Section (V3) </td>
<td> Patient Referral Act/ Indication (V2) </td>
<td> Dental Referral: Feb15, 2020 at 3 pm; priority – ASAP 
   <br>103697008 Patient referral for dental care (procedure) SNOMED CT 
	 <br>27355003 Pain in tooth SNOMED CT 
	 <br>301716002 Left lower quadrant pain SNOMED CT 
	 <br>86276007 Bleeding gums SNOMED CT </td>
</tr>
<tr>
<td><b><i> Da Vinci Profiles </i></b> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td> HRex Coverage </td>
<td> Coverage.status
   <br>Coverage.payor </td>
<td> Payers Section (V3) </td>
<td> N/A </td>
<td> Aetna Comprehensive Medical / Dental Insurance </td>
</tr>
<tr>
<td><b><i> Occupational Data for Health (ODH) Profiles </i></b> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td> Past Or Present Job </td>
<td> Observation.value[x] </td>
<td> Social History Section </td>
<td> Social History Section </td>
<td> Accountant or Auditor </td>
</tr>
</tbody>
</table>
</div>



### Scenario 2: Dental to Medical Consult Note
Patient A sees Dr. Drew Dentist on February 16th for an urgent evaluation based on a referral from Dr. John M, his primary care provider. Patient A is a new patient at Dr. Dentist’s office, so a new patient record is created. Dr. Dentist reviews the risk assessment, the Dental Referral Note from Dr. John M, and the rest of the information that was pre-populated in the dental EHR. Dr. Dentist performs an oral evaluation and two PA radiographs. He identifies two areas of concern: patient has a significant, non-restorable caries lesion (decay) on the left lower back molar (tooth #18) with signs of infection, and early signs of decay on the right upper incisor (tooth #7). 

Dr. Dentist recommends an extraction of the left lower molar (tooth #18) and restoration of the right upper lateral incisor (tooth #7) due to a caries lesion (decay). Dr. Dentist explains the importance of using a fluoride toothpaste when brushing twice daily with daily flossing, and of the need for bi-annual dental visits for examination and prophylaxis (cleaning). 

Before Patient A leaves, the receptionist schedules an appointment for the extraction of tooth #18 on February 23rd, another appointment for restoration of tooth #7 on March 3rd, and a follow-up appointment for a complete examination, including radiographs and prophylaxis on March 10th. 

Dr. Dentist reviews Patient A’s current medication list, notes an allergy to penicillin that is a counter-indication for his typical recommendation of amoxicillin, prescribes Erythromycin 500 mg every six hours for the infection and recommends alternating over-the-counter Ibuprofen and Acetaminophen for pain. Also, he generates a Dental Consultation Note back to Dr. John M with a summary of Patient A’s visit including the new prescription, planned procedures, future appointment dates, and patient specific dental goals.

**Capability Statement references:** The Dental office system is the Document Source (server) that generates the Dental Consult Note and the Medical office application is the Document Consumer (i.e., client) that consumes the Dental Consult Note.

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px; overflow:hidden;padding:0px 3px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px; font-weight:normal;overflow:hidden;padding:0px 3px;word-break:normal;}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0lax">Patient reports inability to chew on left side due to pain and sensitivity, a condition that has increased in severity in the two days since his medical appointment. Significant decay on the left lower second molar (tooth #18) with signs of infection. Early signs of a caries lesion (decay) on the right upper lateral incisor (tooth #7). Recommend an extraction of the left lower second molar (tooth #18) and a restoration on the right upper lateral incisor (tooth #7) due to a caries lesion.</th>
  </tr>
</thead>
</table>

This table maps the FHIR resources to CDA sections and entries and to data values for Scenario 2: Dental to Medical Consult Note.

<div class="tg-wrap"><table class="table table-bordered table-hover table-condensed">
<thead>
<tr>
<th> FHIR Profile </th>
<th> FHIR Data Element </th>
<th> CDA Section </th>
<th> CDA Entry </th>
<th> Data Values </th>
</tr>
</thead>
<tbody>
<tr>
<td><b><i> Dental-Specific Profiles </i></b> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td> Dental Communication </td>
<td> Communication .payload .content </td>
<td> Instructions Section (V2) </td>
<td> </td>
<td> Patient A educated on the benefits of using a fluoride toothpaste, daily flossing, and bi-annual routine dental cleaning visits. </td>
</tr>
<tr>
<td> Dental Service Request </td>
<td> ServiceRequest.code
   <br>NOTE: ServiceRequest.identifier is recommended to be persisted and used as the unique ServiceRequest linkage between Consult Note and Referral Note. </td>
<td> Plan of Treatment Section (V2) </td>
<td> </td>
<td> Planned Visits: 
   <br> Visit 1 - Feb 23, 2020 
   <br> CDT D7140 Extraction, erupted tooth or exposed root (elevation and/or forceps removal) 
   <br> Tooth #18 
   <br> Visit 2- March 3, 2020 
   <br> CDT D1352 Preventive resin restoration in a moderate to high caries risk patient-permanent tooth. 
   <br> CDT D1110 prophylaxis - adult 
   <br> CDT D0210 Full Mouth Radiographic Survey </td>
</tr>
<tr>
<td> Dental Condition </td>
<td> Condition.code 
   <br> Condition.bodySite </td>
<td> Dental Findings Section </td>
<td> Problem Observation (V3) </td>
<td> Value: 80967001 Dental caries (disorder) SNOMED CT 
   <br> Translation: 118065D Dental caries (disorder) SNODENT 
   <br> targetSiteCode: 48402004 Structure of mandibular left second molar tooth SNOMED CT 
   <br> Translation: 161372D Structure of mandibular left second molar tooth SNODENT 
   <br> Value: 427898007 Infection of tooth SNOMED CT 
   <br> Translation: 181608D Infection of tooth SNODENT 
   <br> targetSiteCode: 48402004 Structure of mandibular left second molar tooth SNOMED CT 
   <br> Translation: 161372D Structure of mandibular left second molar tooth SNODENT 
   <br> Value: 80967001 Dental caries SNOMED CT 
   <br> Translation: 118065D Dental caries SNODENT 
   <br> targetSiteCode: 245574002 Entire permanent maxillary right lateral incisor tooth SNOMED CT 
   <br> Translation: 161941D Entire permanent maxillary right lateral incisor tooth SNODENT
</td>
</tr>
<tr>
<td> Dental Finding </td>
<td> Observation.code
   <br> <br>Observation.value
</td>
<td> Dental Findings Section </td>
<td> Result Organizer (V3) / Result Observation (V3) </td>
<td> Code: 32916-9 Horizontal overlap [Length] Maxilla and Mandible Measured LOINC 
   <br> Value = 3 
   <br> Units = mm </td>
</tr>
<tr>
<td><b><i> US Core Profiles  </i></b> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td> US Core AllergyIntollerance </td>
<td> AllergyIntollerance.code </td>
<td> Allergies and Intolerances Section (entries required) (V3) </td>
<td> Allergy Concern Act (V3) / Allergy - Intolerance Observation (V2) </td>
<td> 7980 Penicillin G (Ingredient) RxNorm </td>
</tr>
<tr>
<td> US Core Organization (Consulting Organization) </td>
<td> Organization.name </td>
<td> US Realm Header </td>
<td> custodian / assignedCustodian / representedCustodianOrganization </td>
<td> Name = Good Oral Health Clinic 
   <br> NPI = 1316452726 
   <br> Address = 54321 Main Street, Fairfax, VA, 22031 </td>
</tr>
<tr>
<td> US Core Practitioner (Consulting Practitioner) </td>
<td> Practitioner.identifier:NPI 
   <br> Practitioner.name 
   <br> Practitioner Organization </td>
<td> US Realm Header </td>
<td> author / assignedAuthor </td>
<td> NPI = 1034567384 
   <br> Name = Dr. Drew Dentist 
   <br> Org = Good Oral Health Clinic </td>
</tr>
<tr>
<td> US Core PractitionerRole (Consulting PractitionerRole) </td>
<td> PractitionerRole.code 
   <br> PractitionerRole.specialty </td>
<td> US Realm Header </td>
<td> author / assignedAuthor / code </td>
<td> Healthcare Provider Taxonomy (HIPAA) 
   <br> 122300000X Dental Providers; Dentist 
   <br> Provider Role (HL7) 
   <br> RT - Referred to Provider </td>
</tr>
<tr>
<td> US Core Encounter </td>
<td> Encounter.status 
   <br> Encounter.period </td>
<td> US Realm Header </td>
<td> componentOf / encompassingEncounter </td>
<td> Performed Feb 16, 2020 11am EST 
   <br> CDT D0140 limited oral evaluation - new or established patient </td>
</tr>
<tr>
<td> US Core MedicationRequest and Medication </td>
<td> Medication.code 
   <br> MedicationRequest.dosageInstruction </td>
<td> Medications Section (entries required) (V2) </td>
<td> Medication Activity (V2) / Medication Information (V2) </td>
<td> 314076 Lisinopril 10 mg Oral Tablet RxNorm 
   <br> 197650 erythromycin 500 MG Oral Tablet RxNorm 
   <br> 310965 ibuprofen 200 MG Oral Tablet RxNorm 
   <br> 313782 acetaminophen 325 MG Oral Tablet RxNorm </td>
</tr>
<tr>
<td> US Core Patient </td>
<td> Patient.us-core-ethnicity (extension) 
   <br> Patient.name 
   <br> Patient.gender </td>
<td> US Realm Header </td>
<td> recordTarget / patientRole </td>
<td> Patient A 
   <br> MRN: 2020515 
   <br> 123 Test. Dr. Denver CO 80204 
   <br> phone: (123)456-7890 
   <br> email: testA@email.com 
   <br> 01-01-1990 
   <br> Male 
   <br> Not Hispanic or Latino 
   <br> White </td>
</tr>
<tr>
<td> US Core Procedure </td>
<td> Procedure.code </td>
<td> Procedures Section (entries optional) (v2) </td>
<td> </td>
<td> CDT D1206 topical application of fluoride varnish </td>
</tr>
<tr>
<td> US Core Vital Signs Observation  </td>
<td> Observation.component.value </td>
<td> Vital Signs Section (entries required) (V3) </td>
<td> </td>
<td> Temp: 99 deg F 
   <br> Pulse: 82 bpm 
   <br> BP: 120/80 </td>
</tr>
<tr>
<td> US Core Condition </td>
<td> Condition.code 
   <br> Condition.bodySite </td>
<td> Problem Section (entries required) (V3) </td>
<td> Problem Observation (V3) </td>
<td> Value: 38341003 Hypertensive disorder (disorder) SNOMED CT 
   <br> Translation: 175027D Hypertensive disorder (disorder) SNODENT 
   <br> Value: 46635009 Type 1 diabetes SNOMED CT 
   <br> Translation: 175321D Type 1 diabetes SNODENT  </td>
</tr>
<tr>
<td><b><i> C-CDA on FHIR Based Profiles (Consult Note)</i></b></td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td> Dental Consult Note  </td>
<td> Composition.section.code=’ 51848-0’ </td>
<td> Assessment Section (V2) </td>
<td> Assessment Section (V2) </td>
<td> Patient reports inability to chew on left side due to pain and sensitivity, a condition that has increased in severity in the two days since his medical appointment.  
   <br> Significant decay on the left lower second molar (tooth #18) with signs of infection. 
   <br> Early signs of a caries lesion (decay) on the right upper lateral incisor (tooth #7). 
   <br> Recommend an extraction of the left lower second molar (tooth#18) and a restoration on the right upper lateral incisor (tooth #7) due to a caries lesion </td>
</tr>
<tr>
<td> Dental Consult Note </td>
<td> Composition.section.code=’ 10164-2’ </td>
<td> History of Present Illness Section </td>
<td> History of Present Illness Section </td>
<td> The patient has not visited a dentist or received fluoride treatments in the past four years while away at college. </td>
</tr>
<tr>
<td> Dental Consult Note </td>
<td> Composition.section.code=’ 29299-5’ </td>
<td> Reason for Visit Section </td>
<td> Reason for Visit Section </td>
<td> Patient referred for evaluation and treatment for tooth ache lower left. </td>
</tr>
<tr>
<td> Dental Consult Note </td>
<td> Composition.section.code=’ 29762-2’ </td>
<td> Social History Section </td>
<td> Social History Section </td>
<td> Non-smoker, college education and full time job as accountant </td>
</tr>
<tr>
<td> Dental Consult Note </td>
<td> Composition.section.code=’ 69730-0’ </td>
<td> Instructions Section </td>
<td> </td>
<td> Patient educated on the benefits of using a fluoride toothpaste, daily, flossing, and bi-annual routine dental cleaning visits. </td>
</tr>
<tr>
<td><b><i>  Da Vinci Profiles </i></b> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td> H Rex Coverage </td>
<td> Coverage.status 
   <br> Coverage.payor </td>
<td> Payers Section (V3) </td>
<td> Payers Section (V3) </td>
<td> Aetna Comprehensive Medical /Dental Insurance </td>
</tr>
</tbody>
</table></div>


### Scenario 3: Dental to Dental (Endodontist) Referral
Patient B has a history of hypertension and takes Lisinopril 10mg tablet once daily. He is also taking Azithromycin in accordance with the current American Dental Association Clinical Practice Guidelines for the infection (since there will be a delay in definitive conservative dental treatment due to the referral, and he is allergic to penicillin), and alternating acetaminophen and ibuprofen as needed for pain control. 

Patient B has a history of hypertension and takes Lisinopril 10mg tablet once daily. He is also taking Azithromycin in accordance with the current American Dental Association Clinical Practice Guidelines for the infection (since there will be a delay in definitive conservative dental treatment due to the referral, and he is allergic to penicillin), and alternating acetaminophen and ibuprofen as needed for pain control. 

Dr. Dentist records Patient B’s diagnostic test results and clinical impressions and sends a referral to the endodontist for an evaluation and appropriate treatment for tooth #30. The referral included medications prescribed, diagnosis, prognosis, treatment notes, images, and follow up recommendations.

**Capability Statement references:** General Dentist office system is the Document Source (i.e., server) that generates the Dental Referral Note and the Dental specialist office application is the Document Consumer (i.e., client) that consumes the Dental Referral Note.

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px; overflow:hidden;padding:0px 3px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px; font-weight:normal;overflow:hidden;padding:0px 3px;word-break:normal;}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0lax">Diagnosis for tooth #30: pulpal necrosis and chronic apical abscess (with a draining sinus tract). #30 has a potentially cracked DB cusp. Use of Tooth Slooth appeared to rule out vertical root fracture. Clinical impression is that tooth #30 is restorable with a good long-term prognosis. #29 D has a moderate active carious lesion. On exam of the lower right quadrant, tooth #30 was very sensitive to percussion and non-responsive to cold or EPT testing.  Minor sensitivity to palpation elicited in this area, but pain experienced on biting with relief on opening for tooth #30. No evidence of new caries on distal. Missing tooth #28 was replaced with an endosteal implant with a porcelain fused to metal crown. Tooth #32 is impacted (possible full-bony impaction). Minimal swelling present on lower right buccal vestibule around #29 and #30 with sinus tract present on #30B. Periodontal probing depths in lower right quadrant were all less than or equal to 3 millimeters. Pt is taking Azithromycin (500 mg loading dose and 250 mg each day for 4 additional days) for the infection and alternating 600 mg of ibuprofen and 1000 mg of acetaminophen every 6 hours for pain and swelling. 
</th>
  </tr>
</thead>
</table>

This table maps the FHIR resources to CDA sections and entries and to data values for Scenario 3: Dental to Dental (Endodontist) Referral.

<div class="tg-wrap"><table class="table table-bordered table-hover table-condensed">
<thead>
<tr>
<th> FHIR Resource/Profile </th>
<th> FHIR Data Element </th>
<th> CDA Section </th>
<th> CDA Entry </th>
<th> Data Values </th>
</tr>
</thead>
<tbody>
<tr>
<td> <b><i>Dental-Specific Profiles</i></b> </td>
<td>  </td>
<td>  </td>
<td>  </td>
<td>  </td>
</tr>
<tr>
<td> Dental Finding </td>
<td> Observation.code
   <br> Observation.value </td>
<td> Dental Findings Section </td>
<td> Result Organizer (V3) / Result Observation (V3) </td>
<td> Code: 18782-3 Radiology Study Observation LOINC
   <br> Value: "Radiographic results showed #32 full bony impaction, #28 endosteal (root form) implant with full crown restoration, and tooth #30 with small PA lesion mesial root. Radiographic caries lesion #29 distal caries lesion (ADA Caries Classification System moderate caries lesion). Other WNL" </td>
</tr>
<tr>
<td> Dental Finding</td>
<td> Observation.code
   <br> Observation.value </td>
<td> Dental Findings Section </td>
<td> Problem Observation (V3) </td>
<td> <b>Tooth 30:</b>
   <br> targetSiteCode: 28480000 Permanent lower right first molar tooth SNOMED CT
   <br> Translation: 160770D Permanent lower right first molar tooth SNODENT
   <br> Code: 109727004 Dental restoration present SNOMED CT
   <br> Translation: 120871D SNODENT
   <br>   Extra targetSiteCode: 90933009 Structure of distal surface of tooth
   <br>   Extra translation: 146014D Structure of distal surface of tooth 
   <br> Code: 109591005 Tooth tender to percussion SNOMED CT
   <br> Translation: 128058D Tooth tender to percussion SNODENT
   <br> Code: 109594002 Tooth sensitivity to cold SNOMED CT
   <br> Translation: 108969D Tooth sensitivity to cold SNODENT
   <br> Code: 109596000 Tooth sensitivity to pressure SNOMED CT
   <br> Translation: 106172D Tooth sensitivity to pressure SNODENT
   <br> <b>Tooth #28:</b>
   <br> targetSiteCode: 80140008 Permanent lower right first premolar tooth SNOMED CT
   <br> Translation: 161496D Permanent lower right first premolar tooth SNODENT
   <br> Code: 278552004 Dental crown present SNOMED CT
   <br> Translation: 178492D Dental crown present SNODENT
   <br> Code: 714543007	Dental bone matrix implant, metallic (physical object) SNOMED CT
   <br> Translation: 190187D SNODENT

   <br> <b>Tooth #32:</b>
   <br> targetSiteCode: 38994002Permanent lower right third molar tooth SNOMED CT
   <br> Translation: 161121D Permanent lower right third molar tooth SNODENT
   <br> Code: 109511009 Completely impacted tooth in bone SNOMED CT
   <br> Translation: 212078D Completely impacted tooth in bone SNODENT
   <br> Buccal Gingiva:
   <br> targetSiteCode: 16811007Buccal mucosa SNOMED CT
   <br> Translation: 109364D Buccal mucosa SNODENT
   <br> Code: 722192005 Localized swelling SNOMED CT
   <br> Translation: 212078D Localized swelling SNODENT </td>
</tr>
<tr>
<td> Dental Service Request </td>
<td> ServiceRequest.priority
   <br> ServiceRequest.reasonCode
   <br> ServiceRequest.occurence </td>
<td> Plan of Treatment Section (V2) </td>
<td> Planned Encounter (V2) </td>
<td> CDT D3330 endodontic therapy, molar tooth (excluding final restoration) </td>
</tr>
<tr>
<td> <b><i>US Core Profiles</i></b> </td>
<td>  </td>
<td>  </td>
<td>  </td>
<td>  </td>
</tr>
<tr>
<td> US Core Condition </td>
<td> Condition.code
   <br> Condition.body
   <br> SiteCondition.verification
   <br> StatusCondition.category </td>
<td> Problem Section (entries required) (V3) </td>
<td> Problem Concern Act (V3) / Problem Observation (V3) </td>
<td> Value: 38341003 Hypertensive disorder (disorder) SNOMED CT
   <br> Translation: 175027D Hypertensive disorder (disorder) SNODENT
   <br> Value: 46635009 Type 1 diabetes SNOMED CT
   <br> Translation: 175321D Type 1 diabetes SNODENT </td>
</tr>
<tr>
<td> US Core Encounter </td>
<td> Encounter.status
   <br> Encounter.period </td>
<td> US Realm Header </td>
<td> componentOf / encompassingEncounter </td>
<td> Performed Mar 20, 2020 9am EST
   <br> CDT D0140 limited oral evaluation - new or established patient </td>
</tr>
<tr>
<td> US Core MedicationRequest &amp; Medication </td>
<td> Medication.code
   <br> MedicationRequest .dosageInstruction </td>
<td> Medications Section (entries required) (V2) </td>
<td> Medication Activity (V2) / Medication Information (V2) </td>
<td> 314076 Lisinopril 10 mg Oral Tablet RxNorm
   <br> 308460 Azithromycin 250 MG Oral Tablet RxNorm
   <br> 310965 ibuprofen 200 MG Oral Tablet RxNorm
   <br> 198440 acetaminophen 500 MG Oral Tablet RxNorm </td>
</tr>
<tr>
<td> US Core AllergyIntollerance </td>
<td> AllergyIntollerance.code </td>
<td> Allergies and Intolerances Section (entries required) (V3) </td>
<td> Allergy Concern Act (V3)/
   <br> Allergy - Intolerance Observation (V2) </td>
<td> 7980 Penicillin G (Ingredient) RxNorm </td>
</tr>
<tr>
<td> US Core Vital Signs Observation </td>
<td> Observation.component.value </td>
<td> Vital Signs Section (entries required) (V3) </td>
<td> Vital Signs Organizer (V3) /Vital Sign Observation (V2) </td>
<td> Temp: 99 deg
   <br> FBP 130/86
   <br> Pulse 92 bpm </td>
</tr>
<tr>
<td> US Core Patient </td>
<td> Patient.name
   <br> Patient MRN (identifier)
   <br> Patient.address
   <br> Patient.telecom
   <br> Patient.birthDate
   <br> Patient.genderPatient.us-core-ethnicity(extension)
   <br> Patient.us-core-race (extension) </td>
<td> US Realm Header </td>
<td> recordTarget/patientRole </td>
<td> Patient A
   <br> MRN: 2020515
   <br> 123 Test. Dr. Denver CO 80204
   <br> phone: (123)456-7890
   <br> email: testA@email.com
   <br> 01-01-1990
   <br> Male
   <br> Not Hispanic or Latino
   <br> White </td>
</tr>
<tr>
<td> US Core Procedure </td>
<td> Procedure.code
   <br> Procedure.outcome </td>
<td> Procedures Section (entries optional) (V2) </td>
<td> Procedure Activity Observation (V2) </td>
<td> Code : D0220 Intraoral - periapical first radiographic image CDT (Tooth #29)
   <br> targetSiteCode: 8873007 Permanent lower right second premolar tooth SNOMED CT
   <br> Translation: 161412D Permanent lower right second premolar tooth SNODENT
   <br> Code: D0230 Intraoral - periapical each additional radiographic image CDT (Tooth #30)
   <br> targetSiteCode: 28480000 Permanent lower right first molar tooth SNOMED CT
   <br> Translation: 160770D Permanent lower right first molar tooth SNODENT
   <br> Code : D0460 Pulp vitality test CDT (Tooth #30)
   <br> targetSiteCode: 28480000 Permanent lower right first molar tooth SNOMED CT
   <br> Translation: 160770D Permanent lower right first molar tooth SNODENT </td>
</tr>
<tr>
<td> US Core Organization </td>
<td> Organization.identifier:NPI
   <br> Organization.active
   <br> Organization.name </td>
<td> US Realm Header </td>
<td> custodian / assignedCustodian / representedCustodianOrganization </td>
<td> Name = Good Oral Health Clinic
   <br> NPI = 1316452726
   <br> Address = 54321 Main Street, Fairfax, VA, 22031 </td>
</tr>
<tr>
<td> US Core Practitioner </td>
<td> Practitioner.identifier:NPI
   <br> Practitioner.name
   <br> Practitioner Organization </td>
<td> US Realm Header </td>
<td> author/ assignedAuthor </td>
<td> NPI = 1034567384
   <br> Name = Dr. Drew Dentist
   <br> Org = Good Oral Health Clinic </td>
</tr>
<tr>
<td> US Core PractitionerRole </td>
<td> PractitionerRole.organization
   <br> PractitionerRole.code </td>
<td> US Realm Header </td>
<td> author/assignedAuthor/code </td>
<td> Healthcare Provider Taxonomy (HIPAA)
   <br> 122300000X Dental Providers; Dentist </td>
</tr>
<tr>
<td> <b><i>C-CDA on FHIR Based Profiles (Referral Note)</i></b> </td>
<td>  </td>
<td>  </td>
<td>  </td>
<td>  </td>
</tr>
<tr>
<td> Dental Referral Note </td>
<td></td>
<td> Chief Complaint Section </td>
<td> N/A </td>
<td> "Pain in lower right Quadrant" </td>
</tr>
<tr>
<td> Dental Referral Note </td>
<td> Composition.section.title = "Assessment Section" </td>
<td> Assessment Section </td>
<td> N/A </td>
<td> #30 pulpal necrosis and chronic apical abscess with draining sinus tract.
   <br> #30 has a possible cracked DB cusp; ruled out vertical root fracture. Clinical impression is that tooth is restorable.
   <br> #29 D has an active moderate carious lesion.
   <br> On exam of the right lower quadrant, tooth #30 was sensitive to percussion with no response to cold or EPT. Mild sensitivity to palpation near #30 B, pain upon biting with relief upon opening. No evidence of new caries on distal; missing #28, replaced with endosteal implant with porcelain fused to metal crown.  #32 is impacted (possible full bony impaction). Minimal swelling present on buccal mucosa around #29 and #30 with sinus tract present #30B. Periodontal probing depths all less than or equal to 3mm. </td>
</tr>
<tr>
<td> Dental Referral Note </td>
<td> Composition.section.title = "History of Present Illness Section" </td>
<td> History of Present Illness Section </td>
<td> N/A </td>
<td> One month ago, pt. reports he had an MOBD amalgam restoration (D2161 #30 MOBD) placed in his right lower first molar (tooth #30) for a fractured tooth - MB cusp lost due to undermining by caries lesion (ADA Caries Classification System advanced caries lesion).
   <br> Patient B said the pain started a month ago, and worsened until the cold sensitivity went away about a week ago.  He noticed a bad taste in his mouth about that same time. He is able to eat regular food but only chews on the left side. He takes 400 mg ibuprofen every 6 hours for pain. His last dose was 2 hours prior to this visit. </td>
</tr>
<tr>
<td> Dental Referral Note </td>
<td> Composition .section .code =’43241-9’ </td>
<td> Reason for Referral Section (V3) </td>
<td> N/A </td>
<td> Referral to endodontist for evaluation and treatment of #30. Diagnosis is necrotic pulp and chronic apical abscess #30. Tooth appears to be restorable despite possible incomplete crown fracture of DB cusp on tooth #30. </td>
</tr>
<tr>
<td> <b><i>Da Vinci Profiles</i></b> </td>
<td>  </td>
<td>  </td>
<td>  </td>
<td>  </td>
</tr>
<tr>
<td> HRex Coverage </td>
<td> Coverage.status
   <br> Coverage.payor </td>
<td> Payers Section (V3) </td>
<td> N/A </td>
<td> Aetna Comprehensive Medical /Dental Insurance </td>
</tr>
</tbody>
</table></div>

### Scenario 4: Dental (Endodontist) to Dental (General Dentist) Consult Note
Patient A was experiencing pain that started two weeks ago and has progressively worsened. He noticed sharp, stabbing pain provoked by drinking cold beverages in the past week and lingering pain with biting in the last 2 days. He is able to eat regular food but only chews on the left side. He takes 400 mg ibuprofen every 8 hours for pain, and his last dose was 2 hours prior to this visit. He visited his general dentist and was referred to Endodontist.

Previous medical and dental history verified by Endodontist: One month ago, patient reports he had a MOBD amalgam restoration (D2161 #30 MOBD) placed in his right lower first molar (tooth #30) for a fractured tooth - MB cusp lost due to undermining by caries lesion (ADA Caries Classification System advanced caries lesion). Previous Medical History and Allergies from referring dentist: 
* Medical History: Patient A has a history of hypertension and is taking Lisinopril 10 mg tablet once daily. Patient is also on erythromycin 500 mg every six hours for the infection and taking ibuprofen and acetaminophen as needed for pain. 
* Allergies: Patient is allergic to penicillin.

Endodontist also verifies intraoral and paraoral findings from referring Dentist. At the end of the visit, a Dental Consultation Note is generated including medications prescribed, diagnosis, prognosis, treatment notes, images, and follow up recommendations and sent from the Endodontist to the General Dentist.

**Capability Statement References:** Dental specialist office system is the Document Source (i.e., server) that generates the Dental Consult Note and the general Dental office application is the Document Consumer (i.e., client) that consumes the Dental Consult Note.

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px; overflow:hidden;padding:0px 3px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px; font-weight:normal;overflow:hidden;padding:0px 3px;word-break:normal;}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0lax">Verified suspected irreversible pulpitis #30 with necrotic pulp with PAP mesial root accompanied by draining sinus tract on B. No vertical fracture of root apparent during endodontic therapy.</th>
  </tr>
</thead>
</table>

This table maps the FHIR resources to CDA sections and entries and to data values for Scenario 4: Dental (Endodontist) to Dental (General Dentist) Consult Note.

<div class="tg-wrap"><table class="table table-bordered table-hover table-condensed">
<thead>
<tr>
<th> FHIR Resource/Profile </th>
<th> FHIR Data Element </th>
<th> CDA Section </th>
<th> CDA Entry </th>
<th> Data Values </th>
</tr>
</thead>
<tbody>
<tr>
<td> <b><i>Dental-Specific Profiles</i></b> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td> Dental Condition </td>
<td> Condition.verficiationStatus
   <br> Condition.category
   <br> Condition.code </td>
<td> Problem Section (entries required) (V3) </td>
<td> Problem Concern Act (V3) /Problem Observation (V3) </td>
<td> Code: 109600005 Irreversible pulpitis (disorder) SNOMED CT
   <br> Translation: 125784D Irreversible pulpitis (disorder) SNODENT
   <br> targetSiteCode: 28480000 Permanent lower right first molar tooth SNOMED CT
   <br> Translation: 160770D Permanent lower right first molar tooth SNODENT </td>
</tr>
<tr>
<td> Dental Finding</td>
<td> Observation.code
   <br> Observation.value </td>
<td> Dental Findings Section </td>
<td> N/A </td>
<td> Performed transillumination and dye tests (blue dye) within pulp chamber during endodontic therapy and saw no evidence of cracks. Exposed one diagnostic periapical radiograph and confirmed radiographic findings above. </td>
</tr>
<tr>
<td> Dental Service Request </td>
<td> ServiceRequest.category
   <br> ServiceRequest.code </td>
<td> Plan of Treatment Section (V2) </td>
<td> </td>
<td> Puff of sealer noted around M root; monitor for the next year, and, if sealer does not resorb, consider apicoectomy. </td>
</tr>
<tr>
<td> <b><i>US Core Profiles</i></b> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td> US Core AllergyIntollerance </td>
<td> AllergyIntollerance.code </td>
<td> Allergies and Intolerances Section (entries required) (V3) </td>
<td> Allergy Concern Act (V3) / Allergy - Intolerance Observation (V2) </td>
<td> 7980 Penicillin G (Ingredient) RxNorm </td>
</tr>
<tr>
<td> US Core Encounter </td>
<td> Encounter.status
   <br> Encounter.period </td>
<td> US Realm Header </td>
<td> componentOf / encompassingEncounter </td>
<td> Performed Mar 22, 2020 9am EST
   <br> CDT D3330 - endodontic therapy, molar tooth (excluding final restoration) </td>
</tr>
<tr>
<td> US Core MedicationRequest &amp; Medication </td>
<td> Medication.code
   <br> MedicationRequest .dosageInstruction </td>
<td> Medications Section (entries required) (V2) </td>
<td> Medication Activity (V2) / Medication Information (V2) </td>
<td> 993836 Acetaminophen 300 MG / Codeine Phosphate 30 MG [Tylenol with Codeine] RxNorm </td>
</tr>
<tr>
<td> US Core Procedure </td>
<td> Procedure.code
   <br> Procedure.outcome </td>
<td> Procedures Section (entries optional) (V2) </td>
<td> Procedure Activity Observation (V2) </td>
<td> CDT D3330 endodontic therapy, molar tooth (excluding final restoration) </td>
</tr>
<tr>
<td> <b><i>C-CDA on FHIR Based Profiles (Consult Note)</i></b> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td> Dental Consult Note </td>
<td> Encounter.reasonReference
   <br> Encounter.priority </td>
<td> Reason for Visit Section </td>
<td> </td>
<td> Referral for pain lower RQ, points to #30. Evaluation of #30 and endodontic therapy. </td>
</tr>
<tr>
<td> Dental Consult Note </td>
<td> Composition.section.title = "Assessment Section" </td>
<td> Assessment Section </td>
<td> N/A </td>
<td> Verified suspected irreversible pulpitis #30 with necrotic pulp with PAP mesial root accompanied by draining sinus tract on B. No vertical fracture of root apparent during endodontic therapy. </td>
</tr>
<tr>
<td> Dental Consult Note </td>
<td> Composition.section.title = "History of Present Illness Section" </td>
<td> History of Present Illness Section </td>
<td> N/A </td>
<td> Patient A said the pain started 2 weeks ago and has progressively worsened. He noticed sharp, stabbing pain provoked by drinking cold beverages in the past week and lingering pain with biting in the last 2 days. He is able to eat regular food but only chews on the left side. He takes 400 mg ibuprofen every 8 hours for pain. His last dose was 2 hours prior to this visit. He visited his general dentist and was referred to Endodontist. </td>
</tr>
</tbody>
</table></div>




---

// File: input/pagecontent/best_practices.md

In addition to noting net new dental data concepts within this implementation guide, the work group believe it is beneficial to include best practices for the dental data concepts that are not yet specified. This is to better prepare for dental data exchange concepts that will continue to enhance the current state of data exchange while utilizing the concepts that are already modeled. Best practices noted below include the proper use of the new dental profiles, incorporating multiple dental codes, and attaching additional unstructured information pertinent to the patient’s dental record.

### Populating Bi-directional Medical/Dental and Dental/Dental Exchanges

This IG makes a distinction between medical problems and dental problems. 

**Dental Providers:** In an effort to avoid clutter of the medical problem list, a Dental Condition profile has been defined for all dental-specific diagnoses. Dentists are expected to consider which, if any, dental problems warrant consideration by medical clinicians and therefore should be found on the patient’s medical problem list. Electronic dental record (EDR) system implementers are expected to make this choice apparent to dentists/users through a user interface experience, capture the dentists/users decision for each diagnosis (i.e., medical condition or dental condition), and to map each diagnosis to the appropriate profile: 
* Diagnoses that are deemed by dentists to warrant consideration, tracking, and possible treatment by medical professionals should conform to the US-Core Condition profile.
* Diagnoses that would be considered, tracked, and treated only by dentists should conform to the Dental Condition profile.

All conditions or problems associated with both medical and dental conditions should be placed in the Dental Condition profile found under the Dental Fining section of a Dental Consult Note or Dental Referral Note.

Similarly, dental-specific measurements should be shared via the Dental Finding profile and found under the Dental Finding sections of a Dental Referral Note or Dental Consult Note. All non-dental-specific findings, measurements, and observations should conform to the appropriate profile, such as US Core Vitals Observation profile, or PastOrPresentJob Observation profile. If there is no appropriate Observation profile for the nature of the observation, then the base FHIR R4 Observation resource should be used.

* **Medical to Dental Referral Note:** When a medical provider is referring a patient to a primary dentist for follow up or an initial exam, including oral exam findings in an assessment  along with any plans for treatment (e.g., fluoride drops, antibiotic treatments for oral infections) and education provided (e.g., regular flossing) information around patient’s oral health. Also, in the referral, include information on current problems, allergies, recent surgical procedures, implantable devices that would impact the patient’s care.

* **Dental to Dental Referral Note:** In the case of a referral between a primary dentist and a specialty dentist, include the Dental Findings profile and any procedures completed along with any treatment plans.

* **Dental to Medical Consult Note:** In sending dental information back to the medical provider in a consult, include any additional medications provided to the patient, diagnoses made, procedures completed, and treatment and follow up plan you created with the patient.

* **Dental to Dental Consult Note:** In sending dental information back to primary dentist include details on the exam conducted, findings and any treatment or therapies performed. Include any additional medications provided to the patient, diagnoses made, procedures completed, and treatment and follow up plan you created with the patient.

### Use of the Dental Finding, Dental Condition, and US Core Condition Profiles
Implementors should use the following profiles within a Dental Referral Note or Dental Consult Note:
* **Dental Condition**: This profile contains clinically significant observation confirmed or discovered during a dental visit. It should be used to specify:
    * A dental condition that does not require action, such as a missing tooth (see [Scenario 3](background.html#scenario-3-dental-to-dental-endodontist-referral))
    * A problem that is actionable or may require attention (such as active caries), which may include a reference to evidence of that problem via a Dental Finding.
* **Dental Finding**: This profile should be used to record oral measurements or assessment scores including an odontogram or periodontal assessment.

The HL7 community recommends the following practices:
* Dental observations that are important to other medical providers (e.g., bleeding gums) should be placed in the US Core Condition profile. (See [Scenario 1](background.html#scenario-1-medical-to-dental-referral-note).)
* Dental diagnoses and observations that a medical provider would likely consider clutter (e.g., caries on left lower second molar – tooth #18) should be placed in the Dental Condition profile and the Dental Findings profiles, respectively. Both of these profiles should be found in the Dental Finding section within a Dental Referral Note or Dental Consult Note. (See [Scenario 2](background.html#scenario-2-dental-to-medical-consult-note).)
* Dental measurements that a medical provider would likely consider clutter (e.g., One cm swelling present on buccal free-gingiva around #29 and #30 with sinus tract present #30B) should be placed in the Dental Finding profile, using the Dental Findings profile on Observation. (See [Scenario 3](background.html#scenario-3-dental-to-dental-endodontist-referral).)

It is recommended to consider appropriate use of a standard concept to represent the Reason for Referral in conjunction with one or more Dental Finding (Observation) resources. The table below is a sample of matched SNODENT and SNOMED codes that describe reasons for referral.

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:1;}
.tg td{border-color:black;border-style:solid;border-width:1px; overflow:hidden;padding:1px 1px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px; font-weight:normal;overflow:hidden;padding:1px 1px;word-break:normal;}
.tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-1wig">Reason for Referral</th>
    <th class="tg-1wig">SNODENT ID</th>
    <th class="tg-1wig">SNOMED ID</th>
    <th class="tg-1wig">Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax">Abscess</td>
    <td class="tg-0lax">123286D</td>
    <td class="tg-0lax">128477000</td>
    <td class="tg-0lax">Abscess</td>
  </tr>
  <tr>
    <td class="tg-0lax">Accretions on teeth (deposits)</td>
    <td class="tg-0lax">127701D</td>
    <td class="tg-0lax">6288001</td>
    <td class="tg-0lax">Accretions on teeth</td>
  </tr>
  <tr>
    <td class="tg-0lax">Bleeding gums</td>
    <td class="tg-0lax">142683D</td>
    <td class="tg-0lax">86276007</td>
    <td class="tg-0lax">Bleeding gums</td>
  </tr>
  <tr>
    <td class="tg-0lax">Dental clearance prior to transplant, surgery, or other treatment cancer</td>
    <td class="tg-0lax">146328D</td>
    <td class="tg-0lax">110475006</td>
    <td class="tg-0lax">Compliance with suggested dental care</td>
  </tr>
  <tr>
    <td class="tg-0lax">Dental decay (dental caries disease)</td>
    <td class="tg-0lax">118065D</td>
    <td class="tg-0lax">80967001</td>
    <td class="tg-0lax">Dental caries</td>
  </tr>
  <tr>
    <td class="tg-0lax">Diabetes</td>
    <td class="tg-0lax">133643D</td>
    <td class="tg-0lax">73211009</td>
    <td class="tg-0lax">Diabetes mellitus</td>
  </tr>
  <tr>
    <td class="tg-0lax">Disturbances in tooth eruption</td>
    <td class="tg-0lax">144684D</td>
    <td class="tg-0lax">234972003</td>
    <td class="tg-0lax">Disturbance of tooth eruption or exfoliation</td>
  </tr>
  <tr>
    <td class="tg-0lax">Dry mouth</td>
    <td class="tg-0lax">138508D</td>
    <td class="tg-0lax">87715008</td>
    <td class="tg-0lax">Xerostomia</td>
  </tr>
  <tr>
    <td class="tg-0lax">Erosion of teeth due to persistent vomiting</td>
    <td class="tg-0lax">104212D</td>
    <td class="tg-0lax">52031007</td>
    <td class="tg-0lax">Erosion of teeth due to persistent vomiting</td>
  </tr>
  <tr>
    <td class="tg-0lax">Evaluate a swelling or other lesion, including infection and rule out oral cancer</td>
    <td class="tg-0lax">128015D</td>
    <td class="tg-0lax">65124004</td>
    <td class="tg-0lax">Swelling</td>
  </tr>
  <tr>
    <td class="tg-0lax">Infection</td>
    <td class="tg-0lax">138169D</td>
    <td class="tg-0lax">40733004</td>
    <td class="tg-0lax">Disorder due to infection</td>
  </tr>
  <tr>
    <td class="tg-0lax">Lack of oral hygiene, including build-up of deposits on teeth</td>
    <td class="tg-0lax">140234D</td>
    <td class="tg-0lax">110299009</td>
    <td class="tg-0lax">Poor oral hygiene</td>
  </tr>
  <tr>
    <td class="tg-0lax">Lack of recent dental care</td>
    <td class="tg-0lax">212130D</td>
    <td class="tg-0lax">413313008</td>
    <td class="tg-0lax">Did not attend dentist in last 12 - 18 months (finding)</td>
  </tr>
  <tr>
    <td class="tg-0lax">Malocclusion</td>
    <td class="tg-0lax">150365D</td>
    <td class="tg-0lax">47944004</td>
    <td class="tg-0lax">Malocclusion of teeth</td>
  </tr>
  <tr>
    <td class="tg-0lax">Oral lesion</td>
    <td class="tg-0lax">180678D</td>
    <td class="tg-0lax">1071000119107</td>
    <td class="tg-0lax">Oral lesion</td>
  </tr>
  <tr>
    <td class="tg-0lax">Patient referral for dental care</td>
    <td class="tg-0lax">212150D</td>
    <td class="tg-0lax">103697008</td>
    <td class="tg-0lax">Patient referral for dental care</td>
  </tr>
  <tr>
    <td class="tg-0lax">Pregnancy</td>
    <td class="tg-0lax">174950D</td>
    <td class="tg-0lax">77386006</td>
    <td class="tg-0lax">Pregnant</td>
  </tr>
  <tr>
    <td class="tg-0lax">Sore gums</td>
    <td class="tg-0lax">104458D</td>
    <td class="tg-0lax">11114002</td>
    <td class="tg-0lax">Sore gums</td>
  </tr>
  <tr>
    <td class="tg-0lax">Swollen gums</td>
    <td class="tg-0lax">148393D</td>
    <td class="tg-0lax">309685001</td>
    <td class="tg-0lax">Swollen gums</td>
  </tr>
  <tr>
    <td class="tg-0lax">TMD pain</td>
    <td class="tg-0lax">167337D</td>
    <td class="tg-0lax">298376001</td>
    <td class="tg-0lax">Temporomandibular joint painful on movement</td>
  </tr>
  <tr>
    <td class="tg-0lax">Tooth abnormalities, such as excessive erosion (eating disorder) or excessive wear of teeth</td>
    <td class="tg-0lax">135988D</td>
    <td class="tg-0lax">82212003</td>
    <td class="tg-0lax">Erosion of teeth</td>
  </tr>
  <tr>
    <td class="tg-0lax">Tooth pain</td>
    <td class="tg-0lax">131687D</td>
    <td class="tg-0lax">27355003</td>
    <td class="tg-0lax">Toothache</td>
  </tr>
  <tr>
    <td class="tg-0lax">Trauma</td>
    <td class="tg-0lax">128117D</td>
    <td class="tg-0lax">397869004</td>
    <td class="tg-0lax">Dental trauma</td>
  </tr>
</tbody>
</table>

### Prior Work

Implementers should distinguish prior work from current procedures in the following manner. Procedures performed during previous encounters should be documented as a US Core Procedure with a status of ‘completed’. US Core Procedure requires a procedure code; for historical procedures that were performed elsewhere, and the precise procedure code performed in unknown by an implementing system, users are encouraged to enter an appropriate general dental procedure code.

### Incorporating SNODENT Concepts

Given that most electronic dental record (EDR) systems already support SNODENT, but most electronic health record (EHR) systems only support SNOMED-CT and ICD-10, the recommended practice is to convey both versions of a concept when possible. Whenever possible, the SNOMED-CT term should be provided as the primary code, with the equivalent SNODENT term included as a translation. Failure to include a SNOMED-CT or ICD-10 coded value may result in inability for a receiving system to meaningfully interpret the information provided. Systems that cannot implement SNOMED-CT transmission or reception will not be able to translate over to US FHIR Core. In representing problems, this implementation guide recommends the use of SNOMED CT and understands that some EDRs may use ICD-10 if SNOMED CT is not available. 

### Planned Procedures and Encounters using CDT and CPT

When populating the Service Request, if appropriate, implementers should use Current Dental Terminology (CDT) terms to describe the planned encounter. The procedure is encouraged to be from LOINC, SNOMED-CT, CPT-4 , or ICD10 PCS, and similarly the encounter is encouraged to be from a value set consisting of SNOMED-CT values. However, in both cases, the conformance statement linking these elements to terminologies only have the strength of **SHOULD**. When referring to dental encounters or procedures in the Service Request, a CDT term would be more appropriate and should be used. Additionally, if a procedure is planned, implementers should follow the best practice to include a SNODENT concept.

### Dental Images as Results

Dental images such as bitewing x-rays are not expected to be embedded within a Dental Referral composition or Dental Consultation Note composition. The exchange of actual dental images is expected to occur via secure email or some other secure and private exchange pathway in dental referral use cases. If a narrative describing findings from review of an image is available, it can be conveyed in an Observation resource.

### Referral Identifiers in the Consult Note

To facilitate correlation between a Dental Consult Note and the original referral that led to the resulting consultation, a globally unique referral identifier will be a reference to the specific ServiceRequest instance that was sent in the referral note; the ServiceRequest instance will be referenced from the OrderExtension (extension) in the Dental Consult Note.

### Including UDI Details for Devices and Implants

When device or implant information is included in a dental data exchange document, Unique Device Identifier (UDI) information should also be included about that device or implant if possible. See the [Insulin pump insertion example](Procedure-Insulin-pump-insertion.html).

### Caries Risk Assessment

For most dental practices, dental caries risk assessments are important references for dental providers. They provide additional context for the urgency of a patient’s dental pain/issue. The work group suggests conveying dental caries risk assessments in the US Core Condition Profile or the Dental Condition profile. Below are examples of dental or periodontal risk identification in a dental record:

* Low
* Elevated Risk

For more information on available Risk Assessment modeling, see the American Academy of Pediatrics, [FHIR Standards](https://services.aap.org/en/patient-care/oral-health/fhir-standards/) webpage.

### Patient Self-Management Goals

A goal is represented as a MAY in the Dental Referral Note and the Dental Consult Note, providing specific patient goals separate from instruction. Goals may represent what the patient should do in addition to standard instructions given to the patient. The work group suggests conveying dental goals in the US Core Goal Profile. The US Core Goal Profile may be found in the plan of treatment within a Dental Consult and Dental Referral Notes. Below are examples of self-management dental goals:

* See dentist/regular dental visits	
* Healthy snacks
* No soda/sugary drinks/energy drinks	
* Brush twice daily
* Less/no junk food/candy	
* Floss daily
* Use fluoride toothpaste	
* Limit caffeine
* Dental treatment for current teeth	
* Tobacco cessation
* Quit/decrease alcohol consumption	
* Seek drug abuse/use treatment



---

// File: input/pagecontent/dental_forms_resources.md

### CareQuest Institute MORE Care Referral Form

<table><tr><td><img src="MORE Care Referral Form.png" /></td></tr></table>

The Medical-Oral Expanded Care (MORE Care) referral forms are designed to establish a pathway of care communication that streamlines the scheduling process and closes the loop on a referral from a medical provider to dental providers. Above shows the MORE Care Medical Provider Referral for Dental Care, which was designed to facilitate the referral process, by ensuring that the receiving provider was given the essential health information for the referred patient.

### CareQuest Institute MORE Care Dental Treatment Form

<table><tr><td><img src="MORE Care Treatment Report.png" /></td></tr></table>

In the MORE Care pathway, dentists are asked to acknowledge acceptance of the referral, and following the referral treatment visit, complete the Dental Referral Treatment Report (above) to verify diagnosis, disease risk status, dental treatment summary, and patient recare schedule with the medical care team.

---

// File: input/pagecontent/downloads.md

**Full Implementation Guide**

The entire implementation guide (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

**Package File**

The following package file includes an NPM package file used by many of the FHIR tools. It contains all the value sets, profiles, extensions, list of pages and urls in the IG, etc defined as part of this version of the Implementation Guides. This file should be the first choice whenever generating any implementation artifacts since it contains all of the rules about what makes the profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply in order to make a conformant implementation. See the overview on [validating FHIR profiles and resources](http://hl7.org/fhir/R4/validation.html)

* [Package](package.tgz)

Format Specific Definition Files can be loaded onto a FHIR server to validate instance conformance; on a FHIR server containing these Definitions, POST an example using to the appropriate endpoint using /$validate. 
Note- Validation uses Resource.meta.profile is required for profile validation.

* [XML](definitions.xml.zip)
* [JSON](definitions.json.zip)
* [TTL](definitions.ttl.zip)

**Examples:** all the examples that are used in this Implementation Guide available for download:

* [XML](examples.xml.zip)
* [JSON](examples.json.zip)
* [TTl](examples.ttl.zip)

---

// File: input/pagecontent/index.md

### Overview
This implementation guide provides HL7 FHIR resources to define standards for bi-directional information exchange between a medical and a dental provider or between dental providers. This publication provides the data model, defined data items and their corresponding code and value sets specific to a dental referral note and dental consultation note. This guide describes constraints on the [C-CDA on FHIR](http://www.hl7.org/fhir/us/ccda/) header and body elements for dental information, which are derived from requirements developed by the Dental Summary Exchange Project of the Health Level Seven (HL7) Payer/Provider Information Exchange Work Group (PIE WG). Resources in this US Realm implementation guide are specific to dental referral and consultation notes for exchange and interoperability among dental providers and with medical providers.

This guide contains a library of FHIR profiles and is compliant with FHIR Release 4. At a minimum, a document bundle (C-CDA on FHIR Referral Note or Consultation Note) will be exchanged along with a ServiceRequest, Patient, and associated medical and dental information. This guide specifies how and where these resources are included within the C-CDA on FHIR profiles. 

All proprietary documents, guides, guidance, standards, codes, and values contained herein remain the property of their respective Standards Developing Organization (SDO). HL7 does not make any claim to ownership herein.

This HL7 FHIR® R4 Implementation Guide: Dental Data Exchange is developed in parallel to the HL7 CDA® R2 Implementation Guide: Dental Data Exchange.

Refer to the [Dental Data Exchange Project](https://confluence.hl7.org/display/ATT/Dental+Summary+Exchange+Project) on HL7 Confluence for the latest information on ongoing development of this guide and associated industry testing events.

### Scope
This guide defines 7 FHIR profiles:
* Dental Bundle
* Dental Referral Note
* Dental Service Request
* Dental Consult Note
* Dental Condition
* Dental Finding
* Dental Communication

This guide defines 6 value sets:
* Dental Reason For Referral
* Dental Observation Codes ValueSet
* Dental Anatomy 
* Oral Cavity Area ValueSet
* Tooth Identification ValueSet
* Dental Category 

This guide provides 4 use cases that represent common dental information exchange patterns:
* Scenario 1: Medical to Dental Referral Note
* Scenario 2: Dental to Medical Consult Note
* Scenario 3: Dental to Dental (Endodontist) Referral Note
* Scenario 4: Dental (Endodontist) to Dental (General Dentist) Consult Note

### Dependencies
This guide leverages the [American National Standard/American Dental Association (ANS/ADA) Specification Number 1084; Reference Core Data Set for Communication among Dental and other Health Information Systems, 2019](https://confluence.hl7.org/download/attachments/55936116/ADA%20Standard%20No.%201084_May%202019.pdf?version=1&modificationDate=1560955690222&api=v2). It is also informed by the work of MORE Care (Medical Oral Expanded Care), an initiative of the CareQuest Institute for Oral Health, which now includes the programs of the DentaQuest Partnership for Oral Health Advancement. MORE Care integrates oral health competencies and capabilities into primary care offices while building patient-centered referral networks with local dental providers using health information technology.

This guide is based on the prior work from the US Core and C-CDA on FHIR Implementation Guides and is supported by the Da Vinci initiative, which is a private effort to accelerate the adoption of FHIR Resources as the standard to support and integrate value-based care (VBC) data exchange across communities. Changes to this specification are managed by the sponsoring Payer/Provider Information Exchange Work Group (PIE WG) and are incorporated as part of the standard balloting process.

**US Core profiles used by this guide:**
* [allergyintolerance](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-allergyintolerance.html)
* [condition](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-condition.html)
* [encounter](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-encounter.html)
* [medication](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-medication.html)
* [organization](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-organization.html)
* [patient](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html)
* [practitioner](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-practitioner.html)
* [practitionerrole](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-practitionerrole.html)
* [procedure](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-procedure.html)
* [vitalsigns](http://hl7.org/fhir/R4/observation-vitalsigns.html)

**C-CDA on FHIR profiles used by this guide:**
* [Referral Note](http://build.fhir.org/ig/HL7/ccda-on-fhir/StructureDefinition-Referral-Note.html)
* [Consultation Note](http://build.fhir.org/ig/HL7/ccda-on-fhir/StructureDefinition-Consultation-Note.html)

**Da Vinci Health Record Exchange (HRex) profile used by this guide:**
* [HRex Coverage](http://hl7.org/fhir/us/davinci-hrex/2019Jun/StructureDefinition-hrex-coverage.html)

**Occupation Data for Health (ODH) profile used by this guide:**
* [PastOrPresentJob](http://hl7.org/fhir/us/odh/StructureDefinition-odh-PastOrPresentJob.html)

### Audience
The audience for this implementation guide includes architects and developers of medical and dental health record systems, medical and dental providers, and payer systems in the US Realm. Business analysts and policy managers can also benefit from a basic understanding of the use of dental data exchange to support internal and external dental referrals, dental coverage or claim substantiation, and overall dental care coordination.

Implementers of this Dental Data Exchange FHIR standard must have FHIR implemented for US Core and C-CDA.

### Dental Data Exchange Project Team
**Contributors**

| Role | Name | Affiliation | Contact |
| -------- | -------- | -------- |
| Primary Editor | Rick Geimer | Lantana Consulting Group | rick.geimer@lantanagroup.com |
| Primary Editor | David deRoode | Lantana Consulting Group | david.deroode@lantanagroup.com |
| Co-Editor | Zabrina Gonzaga | Lantana Consulting Group | zabrina.gonzaga@lantanagroup.com |
| Co-Editor | Diana Wright | Lantana Consulting Group | diana.wright@lantanagroup.com |
| Co-Editor | Russell Ott | Deloitte Consulting LLP / Federal EHR Modernization (FERHM) program office | rott@deloitte.com |
| Co-Editor | Manisha Khatta | Deloitte Consulting LLP | makhatta@deloitte.com |
| Subject Matter Expert | Rebekah Fiehn | CareQuest Institute for Oral Health | rfiehn@carequest.org |
| Subject Matter Expert | Eric Tranby | CareQuest Institute for Oral Health | etranby@carequest.org |
| Subject Matter Expert | Greg Zeller | American Dental Association | ggzeller@aol.com |
| Subject Matter Expert | Jean Narcisi | American Dental Association | narcisij@ada.org |
| Subject Matter Expert | Col William Baez | Chief Health Informatics Officer, United States Air Force | william.r.baez2.mil@mail.mil |
| Subject Matter Expert | LTC Kevin B. Parker | Chief Dental Informatics Officer, United States Army | kevin.b.parker.mil@mail.mil |
| Subject Matter Expert | CDR Steve Stallings | Chief Dental Informatics Officer, United States Navy | steve.l.stallings.mil@mail.mil |
| Subject Matter Expert | LCDR Michael Bohman | United States Navy | michael.a.bohman2.mil@mail.mil |
| Subject Matter Expert| Col Jeff Ford | Chief, Enterprise Coordination & Health Information Exchange, Defense Health Agency | jeffrey.a.ford28.mil@mail.mil |
| Subject Matter Expert | Martha (Marti) Velezis | Food and Drug Administration | martha.velezis@fda.hhs.gov |
| Subject Matter Expert | Matt Szczepankiewicz | Epic | mszczepa@epic.com |
| Subject Matter Expert | Chris Breeden | Epic | cbreeden@epic.com |

### Acknowledgements
This guide was developed and produced through the efforts of Health Level Seven (HL7).

The editors appreciate the support and sponsorship of the HL7 Payer/Provider Information Exchange Working Group (PIE WG), the HL7 Structured Documents Working Group (SDWG), and all volunteers and staff associated with the creation of this document. This guide would not have been possible without the support of the following organizations:
* American Dental Association
* Defense Health Agency, US Department of Defense
* Veteran's Health Administration, US Department of Veterans Affairs
* Federal Electronic Health Record Modernization (FEHRM) program office
* Lantana Consulting Group
* CareQuest Institute for Oral Health 

This material contains content from SNOMED CT® ([http://www.ihtsdo.org/snomed-ct/](http://www.ihtsdo.org/snomed-ct/)). SNOMED CT is a registered trademark of the International Health Terminology Standard Development Organization (IHTSDO).

This material contains content from [SNODENT®](https://www.ada.org/snodent) and [CDT®](https://www.ada.org/cdt). SNODENT and CDT are a registered trademarks of the American Dental Association (ADA). Licensing information is available at [https://www.ada.org/snodent](https://www.ada.org/snodent) and [https://www.ada.org/cdt](https://www.ada.org/cdt).

"This material contains content from LOINC ([http://loinc.org](http://loinc.org)). LOINC is copyright © 1995-2021, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at [https://loinc.org/kb/license/](https://loinc.org/kb/license/). LOINC® is a registered United States trademark of Regenstrief Institute, Inc."


---

// File: input/pagecontent/specification.md

### Actors

This specification defines no new actors beyond those in the C-CDA on FHIR specification which are: 

* **Document Source**: An application that exposes a clinical document to a consumer. This actor may be the creator of the document but could also be an intermediary. This can be thought of as the server in a client/server interaction.
* **Document Consumer**: An application that consumes a clinical document. This can be thought of as the client in a client/server interaction.

### FHIR Paradigms Supported by This IG
* RESTful API
* Document Bundle

### Resources and Profiles
#### Resource Profiles
This specification defines the following profiles:
* Dental Referral Note
* Dental Consult Note
* Dental Communication
* Dental Service Request
* Dental Finding

#### Extensions
This implementation guide defines no new extensions.

### Claiming Conformance to This Specification

This specification conforms to US Core Profiles. 
To claim conformance to this specification, servers SHALL:
* Be able to populate all profile data elements that have a minimum cardinality >= 1 and/or flagged as Must Support as defined by that profile’s StructureDefinition.
* Conform to this IG’s Server Capability Statement expectations for that profile’s type.

Details on profiles and extensions present in this specification are available on the [Artifact Index](artifacts.html#profiles) page.

### Must Support and Missing Data
Systems claiming to conform to a profile SHALL support the elements in a profile as defined below. This guide adopts the following definitions of MustSupport for all direct transactions between the Sending and Receiving Systems.

**All Sending Systems**
Sending Systems are defined as Provider Systems and applications.
* As part of the sending of a Dental Referral Note as exemplified in Use Cases 1 and 3 of this IG, the Sender SHALL be capable of including all elements defined in the profiles that have a MustSupport flag and SHALL populate all elements with a MustSupport flag if the information exists.
* In situations where information on a particular data element is not present, the Sender SHALL NOT include the data element in the resource instance if the cardinality is 0..n.
* If the information does not exist and the cardinality of the element is >= 1..*, the Sender SHALL  use the dataAbsentReason extension where it is defined. **Note**: populating the element with the value set absent reason or using the dataAbsent Reason SHOULD be handled by the Sending System and not require provider action.

**All Receiving Systems**
Receiving Systems are defined as Provider Systems and applications receiving transactions from the Sending System.
* The Receiving System SHALL be capable of processing resource instances containing required and allowed data elements without generating an error or causing the application to fail.
* Receiving Systems SHOULD be capable of processing (display, store, etc) the data elements based on the utility of the specific element to the receiver.
* When receiving a dental transaction from the Sender, the Receiving System SHALL interpret missing data elements within resource instances as data not present in the Senders systems.
* Receiving Systems SHALL be able to process resource instances containing data elements asserting missing information without generating an error or causing the application to fail.

### Conformance to US Core Profile
Where this IG does not additionally constrain a US Core profile, the actors shall follow the US Core definition of [Must Support and Missing Data](http://hl7.org/fhir/us/core/general-guidance.html).

### Search 
This specification uses the same Search Syntax rule as [US Core](https://www.hl7.org/fhir/us/core/searchparameters.html). This guide does not define any additional Search Parameters.

### Privacy and Security
This Implementation Guide is adopting the [Security and Privacy Section](http://build.fhir.org/ig/HL7/davinci-ehrx/security.html) of the Da Vinci Project Health Record Exchange (HRex) IG.


---

// File: input/pagecontent/StructureDefinition-dental-referral-note-intro.md

This profile is based on the C-CDA on FHIR Referral Note.

---

// File: input/pagecontent/workflows.md

The project described the current workflow for sending and receiving medical to dental and dental to dental information to identify pain points and crucial gaps in the current state. The figure below represents a dental referral request from the Military Health System (MHS) of the US Department of Defense (DoD).

**Figure 1: Dental Referral Request from the Military Health System**

<table><tr><td><img src="DoD Summary Exchange Process.png" /></td></tr></table>

Currently, providers in the CareQuest Institute system initiate paper referrals (see [MORE CARE Medical Provider Referral for Dental Care](dental_forms_resources.html#carequest-institute-more-care-referral-form)) which are shared with a dental provider via fax or e-mail who schedules the patient. The dental provider then treats the patient and returns a treatment report (See [MORE CARE Dental Referral Treatment Report](dental_forms_resources.html#carequest-institute-more-care-dental-treatment-form)) to the medical provider via fax or email. This report is scanned into the patient’s primary care record. In this current workflow, the medical/dental is not electronically exchanged nor integrated electronically into the medical electronic health record (EHR) or dental health record.

**Figure 2: Current State Workflow via FAX or Email**

<table><tr><td><img src="DQ Current State.png" /></td></tr></table>

The ideal future state involves sharing the patient’s medical information via a referral electronically to the dental EHR to eliminate email and fax exchange, and reduce administrative time spent on referral management. Where possible, the data that is shared is electronically integrated into the dental EHR and the resulting treatment report is electronically sent back to the referring primary care provider (PCP).

**Figure 3: Ideal State Workflow via Electronic Referral**

<table><tr><td><img src="DQ Ideal State.png" /></td></tr></table>

It is anticipated that these standards will have applicability and relevance outside of the specific use cases. For example, they may be used to standardize the transmission of data to plans and payers to develop utilization and quality metrics to enhance value-based care and payment methodologies. In addition, the standardization of the data elements embedded in the exchange will allow for more complete analysis of the connection between oral health and overall health.


---

// File: input/fsh/Profile_DentalCondition.fsh

Alias: $dental-category = http://hl7.org/fhir/us/dental-data-exchange/CodeSystem/dental-category
Alias: $us-core-condition = http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition

Profile: DentalCondition
Parent: $us-core-condition
Id: dental-condition
Title: "Dental Condition"
Description: "This profile specifies a 'dental' slice on Condition category. It also constrains bodySite and evidence to MustSupport. Providing evidence (i.e., point-in-time Observations) in support of longitudinal Conditions is highly encouraged."
* ^meta.versionId = "36"
* ^meta.lastUpdated = "2021-07-29T14:05:33.820+00:00"
* ^meta.source = "#oPwHtcP2s5XfAmAj"
* ^date = "2024-08-15T09:50:57-04:00"
* ^publisher = "Payer/Provider Information Exchange Work Group"
* ^contact.name = "HL7 International - Payer/Provider Information Exchange Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/claims"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "US"
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains http://hl7.org/fhir/StructureDefinition/bodySite named BodyStructure 0..1
* extension[BodyStructure] ^short = "BodyStructure for more complex anatomical locations"
* extension[BodyStructure] ^base.path = "Element.extension"
* extension[BodyStructure] ^base.min = 0
* extension[BodyStructure] ^base.max = "*"
* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category contains dental 1..1 MS
* category[dental] = $dental-category#dental "Dental" (exactly)
* category[dental] ^short = "dental"
* bodySite MS
* evidence MS

Mapping: workflow
Id: workflow
Title: "Workflow Pattern"
Source: DentalCondition
Target: "http://hl7.org/fhir/workflow"

Mapping: sct-concept
Id: sct-concept
Title: "SNOMED CT Concept Domain Binding"
Source: DentalCondition
Target: "http://snomed.info/conceptdomain"

Mapping: v2
Id: v2
Title: "HL7 v2 Mapping"
Source: DentalCondition
Target: "http://hl7.org/v2"

Mapping: rim
Id: rim
Title: "RIM Mapping"
Source: DentalCondition
Target: "http://hl7.org/v3"

Mapping: w5
Id: w5
Title: "FiveWs Pattern Mapping"
Source: DentalCondition
Target: "http://hl7.org/fhir/fivews"

Mapping: sct-attr
Id: sct-attr
Title: "SNOMED CT Attribute Binding"
Source: DentalCondition
Target: "http://snomed.org/attributebinding"


---

// File: input/fsh/Profile_DentalProcedure.fsh

Alias: $dental-category = http://hl7.org/fhir/us/dental-data-exchange/CodeSystem/dental-category
Alias: $us-core-procedure = http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure

Profile: DentalProcedure
Parent: $us-core-procedure
Id: dental-procedure
Title: "Dental Procedure"
Description: "This profile specifies a Dental specialization of the US Core Procedure profile"
* ^date = "2024-08-15T09:50:57-04:00"
* ^publisher = "Payer/Provider Information Exchange Work Group"
* ^contact.name = "HL7 International - Payer/Provider Information Exchange Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/claims"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "US"
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains http://hl7.org/fhir/StructureDefinition/bodySite named BodyStructure 0..1
* extension[BodyStructure] ^short = "BodyStructure for more complex anatomical locations"
* extension[BodyStructure] ^base.path = "Element.extension"
* extension[BodyStructure] ^base.min = 0
* extension[BodyStructure] ^base.max = "*"
* category = $dental-category#dental "Dental" (exactly)
* code from DentalProcedureCodes (extensible)
* bodySite MS


---

// File: input/fsh/SEP2024_Connectathon_Condition_Examples.fsh

Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $condition-ver-status = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $dental-category = http://hl7.org/fhir/us/dental-data-exchange/CodeSystem/dental-category
Alias: $sct = http://snomed.info/sct
Alias: $ADAUniversalToothDesignationSystem = http://terminology.hl7.org/CodeSystem/ADAUniversalToothDesignationSystem

Instance: CariesTooth2-example-dental-condition
InstanceOf: DentalCondition
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs2buccal)
* contained = bs2buccal
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* category = $dental-category#dental "Dental"
* code = $sct#251330002 "Caries active (finding)"
* code.text = "Caries active (finding)"
* subject = Reference(Patient/example-dental) "Patient A"
* onsetDateTime = "2019-12-10"

Instance: CariesTooth3-example-dental-condition
InstanceOf: DentalCondition
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs3buccal)
* contained = bs3buccal
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* category = $dental-category#dental "Dental"
* code = $sct#251330002 "Caries active (finding)"
* code.text = "Caries active (finding)"
* subject = Reference(Patient/example-dental) "Patient A"
* onsetDateTime = "2019-12-10"

Instance: CariesTooth4-example-dental-condition
InstanceOf: DentalCondition
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs4buccal)
* contained = bs4buccal
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* category = $dental-category#dental "Dental"
* code = $sct#251330002 "Caries active (finding)"
* code.text = "Caries active (finding)"
* subject = Reference(Patient/example-dental) "Patient A"
* onsetDateTime = "2019-12-10"

Instance: CariesTooth5-example-dental-condition
InstanceOf: DentalCondition
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs5buccal)
* contained = bs5buccal
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* category = $dental-category#dental "Dental"
* code = $sct#251330002 "Caries active (finding)"
* code.text = "Caries active (finding)"
* subject = Reference(Patient/example-dental) "Patient A"
* onsetDateTime = "2019-12-10"

Instance: CariesTooth6-example-dental-condition
InstanceOf: DentalCondition
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs6buccal)
* contained = bs6buccal
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* category = $dental-category#dental "Dental"
* code = $sct#251330002 "Caries active (finding)"
* code.text = "Caries active (finding)"
* subject = Reference(Patient/example-dental) "Patient A"
* onsetDateTime = "2019-12-10"

Instance: CariesTooth7-example-dental-condition
InstanceOf: DentalCondition
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs7buccal)
* contained = bs7buccal
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* category = $dental-category#dental "Dental"
* code = $sct#251330002 "Caries active (finding)"
* code.text = "Caries active (finding)"
* subject = Reference(Patient/example-dental) "Patient A"
* onsetDateTime = "2019-12-10"

Instance: CariesTooth8-example-dental-condition
InstanceOf: DentalCondition
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs8buccal)
* contained = bs8buccal
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* category = $dental-category#dental "Dental"
* code = $sct#251330002 "Caries active (finding)"
* code.text = "Caries active (finding)"
* subject = Reference(Patient/example-dental) "Patient A"
* onsetDateTime = "2019-12-10"

Instance: PeriodontalAbscessTooth8-example-dental-condition
InstanceOf: DentalCondition
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* category[+] = $dental-category#dental "Dental"
* category[+] = http://terminology.hl7.org/CodeSystem/condition-category#problem-list-item "Problem List Item"
* code = $sct#83412009 "Periodontal abscess (disorder)"
* code.text = "Periodontal abscess (disorder)"
* bodySite.coding[+] = $sct#422653006 "Structure of permanent maxillary right central incisor tooth (body structure)"
* bodySite.coding[+] = $ADAUniversalToothDesignationSystem#8 "Permanent maxillary right central incisor tooth"
* subject = Reference(Patient/example-dental) "Patient A"
* onsetDateTime = "2019-12-10"

Instance: CariesTooth9-example-dental-condition
InstanceOf: DentalCondition
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs9buccal)
* contained = bs9buccal
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* category = $dental-category#dental "Dental"
* code = $sct#251330002 "Caries active (finding)"
* code.text = "Caries active (finding)"
* subject = Reference(Patient/example-dental) "Patient A"
* onsetDateTime = "2019-12-10"

Instance: CariesTooth10-example-dental-condition
InstanceOf: DentalCondition
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs10buccal)
* contained = bs10buccal
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* category = $dental-category#dental "Dental"
* code = $sct#251330002 "Caries active (finding)"
* code.text = "Caries active (finding)"
* subject = Reference(Patient/example-dental) "Patient A"
* onsetDateTime = "2019-12-10"

Instance: CariesTooth11-example-dental-condition
InstanceOf: DentalCondition
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs11buccal)
* contained = bs11buccal
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* category = $dental-category#dental "Dental"
* code = $sct#251330002 "Caries active (finding)"
* code.text = "Caries active (finding)"
* subject = Reference(Patient/example-dental) "Patient A"
* onsetDateTime = "2019-12-10"

Instance: CariesTooth12-example-dental-condition
InstanceOf: DentalCondition
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs12buccal)
* contained = bs12buccal
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* category = $dental-category#dental "Dental"
* code = $sct#251330002 "Caries active (finding)"
* code.text = "Caries active (finding)"
* subject = Reference(Patient/example-dental) "Patient A"
* onsetDateTime = "2019-12-10"

Instance: CariesTooth13-example-dental-condition
InstanceOf: DentalCondition
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs13buccal)
* contained = bs13buccal
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* category = $dental-category#dental "Dental"
* code = $sct#251330002 "Caries active (finding)"
* code.text = "Caries active (finding)"
* subject = Reference(Patient/example-dental) "Patient A"
* onsetDateTime = "2019-12-10"

Instance: CariesTooth14-example-dental-condition
InstanceOf: DentalCondition
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs14buccal)
* contained = bs14buccal
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* category = $dental-category#dental "Dental"
* code = $sct#251330002 "Caries active (finding)"
* code.text = "Caries active (finding)"
* subject = Reference(Patient/example-dental) "Patient A"
* onsetDateTime = "2019-12-10"

Instance: CariesTooth15-example-dental-condition
InstanceOf: DentalCondition
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs15buccal)
* contained = bs15buccal
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* category = $dental-category#dental "Dental"
* code = $sct#251330002 "Caries active (finding)"
* code.text = "Caries active (finding)"
* subject = Reference(Patient/example-dental) "Patient A"
* onsetDateTime = "2019-12-10"

Instance: bs2buccal
InstanceOf: BodyStructure
Usage: #inline
* location.coding[0] = $sct#863902006 "Structure of permanent maxillary right second molar tooth (body structure)"
* location.coding[+] = $ADAUniversalToothDesignationSystem#2 "Permanent maxillary right second molar tooth"
* locationQualifier[0] = $sct#245647007 "Entire buccal surface"
* patient = Reference(Patient/example-dental) "Patient A"

Instance: bs3buccal
InstanceOf: BodyStructure
Usage: #inline
* location.coding[0] = $sct#865995000 "Structure of permanent maxillary right first molar tooth (body structure)"
* location.coding[+] = $ADAUniversalToothDesignationSystem#3 "Permanent maxillary right first molar tooth"
* locationQualifier[0] = $sct#245647007 "Entire buccal surface"
* patient = Reference(Patient/example-dental) "Patient A"

Instance: bs4buccal
InstanceOf: BodyStructure
Usage: #inline
* location.coding[0] = $sct#36492000 "Structure of permanent maxillary right second premolar tooth (body structure)"
* location.coding[+] = $ADAUniversalToothDesignationSystem#4 "Permanent maxillary right second premolar tooth"
* locationQualifier[0] = $sct#245647007 "Entire buccal surface"
* patient = Reference(Patient/example-dental) "Patient A"

Instance: bs5buccal
InstanceOf: BodyStructure
Usage: #inline
* location.coding[0] = $sct#57826002 "Structure of permanent maxillary right first premolar tooth (body structure)"
* location.coding[+] = $ADAUniversalToothDesignationSystem#5 "Permanent maxillary right first premolar tooth"
* locationQualifier[0] = $sct#245647007 "Entire buccal surface"
* patient = Reference(Patient/example-dental) "Patient A"

Instance: bs6buccal
InstanceOf: BodyStructure
Usage: #inline
* location.coding[0] = $sct#860767006 "Structure of permanent maxillary right canine tooth (body structure)"
* location.coding[+] = $ADAUniversalToothDesignationSystem#6 "	Permanent maxillary right canine tooth"
* locationQualifier[0] = $sct#245647007 "Entire buccal surface"
* patient = Reference(Patient/example-dental) "Patient A"

Instance: bs7buccal
InstanceOf: BodyStructure
Usage: #inline
* location.coding[0] = $sct#424877001 "Structure of permanent maxillary right lateral incisor tooth (body structure)"
* location.coding[+] = $ADAUniversalToothDesignationSystem#7 "Permanent maxillary right lateral incisor tooth"
* locationQualifier[0] = $sct#245647007 "Entire buccal surface"
* patient = Reference(Patient/example-dental) "Patient A"

Instance: bs8buccal
InstanceOf: BodyStructure
Usage: #inline
* location.coding[0] = $sct#422653006 "Structure of permanent maxillary right central incisor tooth (body structure)"
* location.coding[+] = $ADAUniversalToothDesignationSystem#8 "Permanent maxillary right central incisor tooth"
* locationQualifier[0] = $sct#245647007 "Entire buccal surface"
* patient = Reference(Patient/example-dental) "Patient A"

Instance: bs9buccal
InstanceOf: BodyStructure
Usage: #inline
* location.coding[0] = $sct#424399000 "Structure of permanent maxillary left central incisor tooth (body structure)"
* location.coding[+] = $ADAUniversalToothDesignationSystem#9 "Permanent maxillary left central incisor tooth"
* locationQualifier[0] = $sct#245647007 "Entire buccal surface"
* patient = Reference(Patient/example-dental) "Patient A"

Instance: bs10buccal
InstanceOf: BodyStructure
Usage: #inline
* location.coding[0] = $sct#423185002 "Structure of permanent maxillary left lateral incisor tooth (body structure)"
* location.coding[+] = $ADAUniversalToothDesignationSystem#10 "Permanent maxillary left lateral incisor tooth"
* locationQualifier[0] = $sct#245647007 "Entire buccal surface"
* patient = Reference(Patient/example-dental) "Patient A"

Instance: bs11buccal
InstanceOf: BodyStructure
Usage: #inline
* location.coding[0] = $sct#860780009 "Structure of permanent maxillary left canine tooth (body structure)"
* location.coding[+] = $ADAUniversalToothDesignationSystem#11 "Permanent maxillary left canine tooth"
* locationQualifier[0] = $sct#245647007 "Entire buccal surface"
* patient = Reference(Patient/example-dental) "Patient A"

Instance: bs12buccal
InstanceOf: BodyStructure
Usage: #inline
* location.coding[0] = $sct#61897005 "Structure of permanent maxillary left first premolar tooth (body structure)"
* location.coding[+] = $ADAUniversalToothDesignationSystem#12 "Permanent maxillary left first premolar tooth"
* locationQualifier[0] = $sct#245647007 "Entire buccal surface"
* patient = Reference(Patient/example-dental) "Patient A"

Instance: bs13buccal
InstanceOf: BodyStructure
Usage: #inline
* location.coding[0] = $sct#23226009 "Structure of permanent maxillary left second premolar tooth (body structure)"
* location.coding[+] = $ADAUniversalToothDesignationSystem#13 "Permanent maxillary left second premolar tooth"
* locationQualifier[0] = $sct#245647007 "Entire buccal surface"
* patient = Reference(Patient/example-dental) "Patient A"

Instance: bs14buccal
InstanceOf: BodyStructure
Usage: #inline
* location.coding[0] = $sct#865988009 "Structure of permanent maxillary left first molar tooth (body structure)"
* location.coding[+] = $ADAUniversalToothDesignationSystem#14 "Permanent maxillary left first molar tooth"
* locationQualifier[0] = $sct#245647007 "Entire buccal surface"
* patient = Reference(Patient/example-dental) "Patient A"

Instance: bs15buccal
InstanceOf: BodyStructure
Usage: #inline
* location.coding[0] = $sct#863901004 "Structure of permanent maxillary left second molar tooth (body structure)"
* location.coding[+] = $ADAUniversalToothDesignationSystem#15 "Permanent maxillary left second molar tooth"
* locationQualifier[0] = $sct#245647007 "Entire buccal surface"
* patient = Reference(Patient/example-dental) "Patient A"


---

// File: input/fsh/SEP2024_Connectathon_Procedure_Examples.fsh

Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $condition-ver-status = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $dental-category = http://hl7.org/fhir/us/dental-data-exchange/CodeSystem/dental-category
Alias: $sct = http://snomed.info/sct
Alias: $ADAUniversalToothDesignationSystem = http://terminology.hl7.org/CodeSystem/ADAUniversalToothDesignationSystem

Instance: RestorationTooth2-example-dental-procedure
InstanceOf: DentalProcedure
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs2buccal)
* contained = bs2buccal
* status = #completed
* category = $dental-category#dental "Dental"
* code = $cdt#D2391 "resin-based composite - one surface, posterior"
* code.text = "resin-based composite - one surface, posterior"
* subject = Reference(Patient/example-dental) "Patient A"
* performedDateTime = "2024-08-17"

Instance: RestorationTooth3-example-dental-procedure
InstanceOf: DentalProcedure
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs3buccal)
* contained = bs3buccal
* status = #completed
* category = $dental-category#dental "Dental"
* code = $cdt#D2391 "resin-based composite - one surface, posterior"
* code.text = "resin-based composite - one surface, posterior"
* subject = Reference(Patient/example-dental) "Patient A"
* performedDateTime = "2024-08-17"

Instance: RestorationTooth4-example-dental-procedure
InstanceOf: DentalProcedure
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs4buccal)
* contained = bs4buccal
* status = #completed
* category = $dental-category#dental "Dental"
* code = $cdt#D2391 "resin-based composite - one surface, posterior"
* code.text = "resin-based composite - one surface, posterior"
* subject = Reference(Patient/example-dental) "Patient A"
* performedDateTime = "2024-08-17"

Instance: RestorationTooth5-example-dental-procedure
InstanceOf: DentalProcedure
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs5buccal)
* contained = bs5buccal
* status = #completed
* category = $dental-category#dental "Dental"
* code = $cdt#D2391 "resin-based composite - one surface, posterior"
* code.text = "resin-based composite - one surface, posterior"
* subject = Reference(Patient/example-dental) "Patient A"
* performedDateTime = "2024-08-17"

Instance: RestorationTooth6-example-dental-procedure
InstanceOf: DentalProcedure
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs6buccal)
* contained = bs6buccal
* status = #completed
* category = $dental-category#dental "Dental"
* code = $cdt#D2330 "resin-based composite - one surface, anterior"
* code.text = "resin-based composite - one surface, anterior"
* subject = Reference(Patient/example-dental) "Patient A"
* performedDateTime = "2024-08-17"

Instance: RestorationTooth7-example-dental-procedure
InstanceOf: DentalProcedure
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs7buccal)
* contained = bs7buccal
* status = #completed
* category = $dental-category#dental "Dental"
* code = $cdt#D2330 "resin-based composite - one surface, anterior"
* code.text = "resin-based composite - one surface, anterior"
* subject = Reference(Patient/example-dental) "Patient A"
* performedDateTime = "2024-08-17"

Instance: RootCanalTooth8-example-dental-procedure
InstanceOf: DentalProcedure
Usage: #example
* status = #completed
* category[+] = $dental-category#dental "Dental"
* code = $cdt#D3310 "Endodontic therapy, anterior tooth (excluding final restoration)"
* code.text = "Endodontic therapy, anterior tooth (excluding final restoration)"
* bodySite.coding[+] = $sct#422653006 "Structure of permanent maxillary right central incisor tooth (body structure)"
* bodySite.coding[+] = $ADAUniversalToothDesignationSystem#8 "Permanent maxillary right central incisor tooth"
* subject = Reference(Patient/example-dental) "Patient A"
* performedDateTime = "2024-08-17"

Instance: RestorationTooth8-example-dental-procedure
InstanceOf: DentalProcedure
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs8buccallingual)
* contained = bs8buccallingual
* status = #completed
* category = $dental-category#dental "Dental"
* code = $cdt#D2331 "resin-based composite - two surfaces, anterior"
* code.text = "resin-based composite - two surfaces, anterior"
* subject = Reference(Patient/example-dental) "Patient A"
* performedDateTime = "2024-08-17"

Instance: bs8buccallingual
InstanceOf: BodyStructure
Usage: #inline
* location.coding[0] = $sct#422653006 "Structure of permanent maxillary right central incisor tooth (body structure)"
* location.coding[+] = $ADAUniversalToothDesignationSystem#8 "Permanent maxillary right central incisor tooth"
* locationQualifier[0] = $sct#245647007 "Entire buccal surface"
* locationQualifier[+] = $sct#362104007 "Entire lingual surface of tooth (body structure)"
* patient = Reference(Patient/example-dental) "Patient A"

Instance: RestorationTooth9-example-dental-procedure
InstanceOf: DentalProcedure
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs9buccal)
* contained = bs9buccal
* status = #completed
* category = $dental-category#dental "Dental"
* code = $cdt#D2330 "resin-based composite - one surface, anterior"
* code.text = "resin-based composite - one surface, anterior"
* subject = Reference(Patient/example-dental) "Patient A"
* performedDateTime = "2024-08-17"

Instance: RestorationTooth10-example-dental-procedure
InstanceOf: DentalProcedure
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs10buccal)
* contained = bs10buccal
* status = #completed
* category = $dental-category#dental "Dental"
* code = $cdt#D2330 "resin-based composite - one surface, anterior"
* code.text = "resin-based composite - one surface, anterior"
* subject = Reference(Patient/example-dental) "Patient A"
* performedDateTime = "2024-08-17"

Instance: RestorationTooth11-example-dental-procedure
InstanceOf: DentalProcedure
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs11buccal)
* contained = bs11buccal
* status = #completed
* category = $dental-category#dental "Dental"
* code = $cdt#D2330 "resin-based composite - one surface, anterior"
* code.text = "resin-based composite - one surface, anterior"
* subject = Reference(Patient/example-dental) "Patient A"
* performedDateTime = "2024-08-17"

Instance: RestorationTooth12-example-dental-procedure
InstanceOf: DentalProcedure
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs12buccal)
* contained = bs12buccal
* status = #completed
* category = $dental-category#dental "Dental"
* code = $cdt#D2391 "resin-based composite - one surface, posterior"
* code.text = "resin-based composite - one surface, posterior"
* subject = Reference(Patient/example-dental) "Patient A"
* performedDateTime = "2024-08-17"

Instance: RestorationTooth13-example-dental-procedure
InstanceOf: DentalProcedure
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs13buccal)
* contained = bs13buccal
* status = #completed
* category = $dental-category#dental "Dental"
* code = $cdt#D2391 "resin-based composite - one surface, posterior"
* code.text = "resin-based composite - one surface, posterior"
* subject = Reference(Patient/example-dental) "Patient A"
* performedDateTime = "2024-08-17"

Instance: RestorationTooth14-example-dental-procedure
InstanceOf: DentalProcedure
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs14buccal)
* contained = bs14buccal
* status = #completed
* category = $dental-category#dental "Dental"
* code = $cdt#D2391 "resin-based composite - one surface, posterior"
* code.text = "resin-based composite - one surface, posterior"
* subject = Reference(Patient/example-dental) "Patient A"
* performedDateTime = "2024-08-17"

Instance: RestorationTooth15-example-dental-procedure
InstanceOf: DentalProcedure
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs15buccal)
* contained = bs15buccal
* status = #completed
* category = $dental-category#dental "Dental"
* code = $cdt#D2391 "resin-based composite - one surface, posterior"
* code.text = "resin-based composite - one surface, posterior"
* subject = Reference(Patient/example-dental) "Patient A"
* performedDateTime = "2024-08-17"


---

// File: input/fsh/ValueSets.fsh

ValueSet: DentalProcedureCodes
Id: dental-procedure-codes-vs
Title: "Dental Procedure Codes Value Set"
Description:  "Codes applicable for use with Dental Procedures"
* ^experimental = false
* include codes from system http://www.ada.org/cdt



---

// File: input/fsh/Example_DentalCondition_RampantCaries.fsh

Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $condition-ver-status = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $dental-category = http://hl7.org/fhir/us/dental-data-exchange/CodeSystem/dental-category
Alias: $sct = http://snomed.info/sct
Alias: $ADAUniversalToothDesignationSystem = http://terminology.hl7.org/CodeSystem/ADAUniversalToothDesignationSystem

Instance: Rampant-caries-example-dental-condition
InstanceOf: http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* category = http://terminology.hl7.org/CodeSystem/condition-category#problem-list-item "Problem List Item"
* code = $sct#234976000 "Rampant dental caries (disorder)"
* code.text = "Rampant dental caries (disorder)"
* subject = Reference(Patient/example-dental) "Patient A"
* onsetDateTime = "2019-12-10"


---

// File: input/fsh/Example_DentalProcedure_BuccalRestoration.fsh

Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $condition-ver-status = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $dental-category = http://hl7.org/fhir/us/dental-data-exchange/CodeSystem/dental-category
Alias: $sct = http://snomed.info/sct
Alias: $cdt = http://www.ada.org/cdt
Alias: $ADAUniversalToothDesignationSystem = http://terminology.hl7.org/CodeSystem/ADAUniversalToothDesignationSystem

Instance: buccal-restoration-example-dental-procedure
InstanceOf: DentalProcedure
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/bodySite"
* extension.valueReference = Reference(bs1)
* contained = bs1
* status = #completed
* category = $dental-category#dental "Dental"
* code = $cdt#D2330 "resin-based composite - one surface, anterior"
* code.text = "resin-based composite - one surface, anterior"
* subject = Reference(Patient/example-dental) "Patient A"
* performedDateTime = "2024-08-10"

Instance: bs1
InstanceOf: BodyStructure
Usage: #inline
* location.coding[0] = $sct#424877001 "Structure of permanent maxillary right lateral incisor tooth (body structure)"
* location.coding[+] = $ADAUniversalToothDesignationSystem#7 "Permanent maxillary right lateral incisor tooth"
* locationQualifier[0] = $sct#245647007 "Entire buccal surface"
* patient = Reference(Patient/example-dental) "Patient A"


---

