// File: input/pagecontent/clinic_optimisation.md

### Summary

---

// File: input/pagecontent/contributors.md

To date, this endeavor’s achievements are owing to the commitment of an exclusively community-based, volunteer-driven collaboration of key ophthalmic and technical stakeholders. A large thanks to:

### Research Institutions 
The following research institutions have provided foundational support and endorsement

<div><img src="NEI-logo-tagline.svg" width="200"/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="SSR-USyd-3.png" width="200"/></div><br/>

Additionally, many major peak ophthalmic medical bodies across the globe have informally endorsed this endeavor, but timeliness has prevented official board publication. Deepening engagement here is a priority for the next ballot cycle.


### Industry Vendors
The following industry vendors have been integral to compilation of this implementation guide and its overarching goals through collaborative use case development, testing and validation of IG integrity at May ‘21 HL7 FHIR connectathon and subsequent plans for real world pilot implementation in clinical settings:

**Diagnostic Device Manufacturers**

<div><img src="zeiss.jpg" width="80"/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="heidelberg.png" width="80"/></div><br/>

**Electronic Medical Record Vendors**

<div><img src="medisoft.png" width="80"/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="oculo.png" width="60"/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="epic.png" width="80"/></div><br/>


### Connectathon Participants
Ophthalmology track participants:
* Kerry Goetz (Associate Director, NEI Office of Data Science and Health Informatics at National Eye Institute (NEI) National eye institute, NIH, USA)
* Dr. Ashley Kras
* Dr. Nigel Morlet
* Dr. Hemal Mehta
* Marco Garcia
* Regis Deshayes
* Marita Bergman
* Alexander Gogol
* Warren Oliver
* Ashley Ramsay
* Leah King
* Adam Child
<p/>
### Clinical Domain Experts
The following clinical domain experts have provided major contribution, review and support:
Individuals
* Dr. Ashley Kras MBBS MBI (Project Lead) FRANCZO
* Prof. Mark Gillies, MBBS, MD., Ph.D, FRANZCO
* Prof. Thomas Hwang, MD
* A/Prof. John Miller, MD
* Dr. Hemal Mehta, MBBS MD (Cantab.), FRCOphth, FRANZCO 
* Prof. Nigel Morlet, MBBS, FRANZCO, FRACS
<p/>
### Institutional affiliations

<div><img src="unisyd.png" width="100"/>
&nbsp;&nbsp;&nbsp;&nbsp;<img src="moorfields.png" width="100"/>
&nbsp;&nbsp;&nbsp;&nbsp;<img src="mass.png" width="100"/>
&nbsp;&nbsp;&nbsp;&nbsp;<img src="oregon.png" width="100"/>
&nbsp;&nbsp;&nbsp;&nbsp;<img src="uniwa.png" width="100"/></div><br/>

### Implementation Guide Editors
The following technical experts drove and assembled this ophthalmology implementation guide
* Brett Esler (HL7 Australia, Oridashi) 
* Warren Oliver (Oculo)
* Marco Garcia (Save Sight Registry)
<p/>

### Input and Review
<div><img src="google.jpg" width="80"/></div>

Additional thanks to the volunteer expert input and review of the IG by Vivian Neilley and Jason Klotzerand team from Google as part of their community oriented initiative “R to O” (Research to Operation), which is resource-committed to developing and advancing open-source projects in healthcare, such as standards development.
<p/>
<div><img src="microsoft.png" width="120"/></div>
The support and advice from both Dr. Simon Kos and Microsoft is much appreciated.

### Project and Guidance 
A sincere thanks to the following members and various working groups of the HL7 / FHIR community for their indispensable and dedicated navigational support, guidance and time
* Dr. Stephen Chu MBBS, Co-Chair, Patient Care Working Group, HL7 International 
* Grahame Grieve, PhD, Product Director, FHIR, HL7 International
* HL7 international Patient Care Work Group co-chairs and members - September ballot sponsor
* HL7 international EHR Work Group co-chairs and members - September ballot co-sponsor
* Rob Hausum (Co-Chair, Patient Care Working Working Group, HL7 International)
<p/>

Imaging Integration (HL7 international) / DICOM (WG 20) collaboration:
* Jonathan Whitbey (Co-Chair, Imaging Integration Working Group, HL7 International
* Chris Lindop (Co-Chair, Imaging Integration Working Group, HL7 International)
* Elliot Silver (Facilitator - vocabulary, Imaging Integration Working Group, HL7 International)
* Carolyn Hull (Secretariat, DICOM WG 20) 
<p/>
### Specific Terminology Advisory
In addition to HL7 and the extended community, we’d like to acknowledge the input of the following standards and informatics bodies upon whose input and long standing iterative curation of developing medical terminologies was drawn indispensably.
* DICOM (Digital Imaging and Communications in Medicine) community
* SNOMED CT - a non-hierarchical codified language that represents groups of clinical terms; it has international applicability and regionally relevant adaptations 
* LOINC (Logical Observation Identifiers Names and Codes) - open sourced database of terminologies that codifies laboratory and clinical observations
* ICD (International Classification of Diseases) - a World Health Organisation diagnostic classification system
* CPT © (Current Procedural Terminology) - The AMA (American Medical Association’s database of codes used to describe medical, surgical, and diagnostic services and is designed to communicate uniform information about medical services and procedures among physicians, coders, patients, accreditation organizations, and payers for administrative, financial, and analytical purposes
* The American Academy of Ophthalmology’s Medical Informatics and Technology Committee (chaired by Thomas Hwang, MD)


---

// File: input/pagecontent/guidance.md

This section outlines guidance on the interpetation and meaning of specified profiles in this implemementation guide.
The conformance verbs - SHALL, SHOULD, MAY - used in this guide are defined in [FHIR Conformance Rules](http://hl7.org/fhir/R4/conformance-rules.html).

### Roles
Two roles are defined with relation to the profiles defined in this implementation guide:
* Producer - creator and generator of information instances asserting profiles in this guide.
* Consumer - receiver and processor of information instances asserting profiles in this guide. 

### Conformance
The [Artifacts](artifacts.html) page lists the profiles that have been defined for this implementation guide. Core profile StructureDefinitions define the minimum elements, extensions, vocabularies and value sets which SHALL be present when using the profile. Many profile pages also contain additional guidance.

The profile elements consist of both Mandatory and Must Support elements. Mandatory elements have a minimum cardinality of 1 (min=1). The base FHIR Must Support guidance requires specifications to define exactly the support expected for profile elements labeled Must Support and is suppplied below.

No specific capability statement is supplied for this guide. This is left to be defined by systems using the profiles in this guide as appropriate. This may include read, write, search and history requirements as needed. 

### Must Support

For this specification indication of Must Support on any profile data element SHALL be interpreted as follows:

* When profiles are asserted, producers SHALL be capable of populating all data elements as part of instances supplied as specified.
* When profiles are asserted, consumers SHALL be capable of processing resource instances containing the data elements without generating an error.
* When profiles are asserted, consumers SHALL accept resource instances containing elements other than those marked Must Support in profiles without generating an error.
* Consumers SHALL be able to process resource instances containing Must Support data elements asserting missing information.

---

// File: input/pagecontent/index.md

### Introduction


#### Purpose 
Despite FHIR's® popularity and maturity accelerating as a community driven and implementer-focused modern flagship of healthcare standards to support interoperable healthcare data exchange, its application to medical specialties such as ophthalmology remains limited. 

This is due to a core problem – there is no universal implementation guidance (IG), which is required to enable truly systemic interoperability that holds promise to advance clinical care and catalyze biomedical research.
Hence, "Eyes on FHIR" initiative was formed with the overarching mission to develop the  international standards that can enable FHIR ® to enhance the quality and outcomes of ophthalmic healthcare delivery. 

Hence, the “Eyes on FHIR®” initiative's primary goal is to represent the comprehensive ophthalmic clinical lexicon in FHIR® format. In order to achieve this, the main project objectives are:
* Develop a series of structured use cases that describe real world interoperability problems in clinical and academic eye care (see "use case" tab).
* Identify the necessary terminologies from existing clinical vocabularies (and, in doing so, note any relevant standards gaps) required to characterize the scenario (use case) in a codified manner. 
* Compile this implementation guide for developers, including the terminologies and any necessary specialty-specific modifications made to the base FHIR specifications needed to represent the use cases to enable FHIR®-based data exchanged that are relevant and contextually useful in ophthalmology to solve the various clinical, research and communication problems described (use cases). This IG will undergo iterative additions and refinement through developing and and testing more use cases in  sequential connectathons and ballot cycles. The IG should be presented in a way that is consumable for both technical and clinical audiences. This will be achieved by maintaining a collabrative multidisciplinary approach to development of use cases and IG authorship, by including accompanying explanatory wrap around textual and imaging content to (i) outcline the fundamentals of clinical content (and provide references and links where appropriate) and (ii) provide rationale for any new ValueSets and CodeSystems created, any artefactual adaptations made, such as constraints / extensions / cardinality / binding strength / slicing etc., as well as (iii) providing conformance guidance.
* This evolving resource will be enriched by increasingly seeking input from and interfacing with various HL7 Working Groups and Accellerator Programs and seek community feedback tri-annually in the formal balloting process.

<p>
<img width=250 src="eye.jpg"/>
</p>

Please see the HL7 confluence page for more details and context [here](https://confluence.hl7.org/pages/viewpage.action?pageId=82914199).
 
A notable achievement was demonstrated in [May ‘21 connectathon](Eyes on FHIR ophthalmology track connectathon 27May2021.pdf), which showcased bidirectional real-time data exchange between various real world electronic medical record (EMR) vendors and fundamental ophthalmic diagnostic device and PACS manufacturers. This was a world first proof of concept, strongly endorsed by the NIH.
As a multimodal imaging-dependant specialty, there have already been significant artificial intelligence (AI) publications and implementations for automating the diagnosis and triaging of eye disease. A few cardinal publications are referenced here: 
* Gulshan V, Peng L, Coram M, et al. Development and Validation of a Deep Learning Algorithm for Detection of Diabetic Retinopathy in Retinal Fundus Photographs. JAMA. 2016;316(22):2402-2410. doi:10.1001/jama.2016.17216
* Poplin R, Varadarajan AV, Blumer K, Liu Y, McConnell MV, Corrado GS, et al. Prediction of cardiovascular risk factors from retinal fundus photographs via deep learning. Nature Biomedical Engineering. 2018;2: 158–164.
* De Fauw J, Ledsam JR, Romera-Paredes B, Nikolov S, Tomasev N, Blackwell S, et al. Clinically applicable deep learning for diagnosis and referral in retinal disease. Nat Med. 2018;24: 1342–1350.
* Yim J, Chopra R, Spitz T, Winkens J, Obika A, Kelly C, et al. Predicting conversion to wet age-related macular degeneration using deep learning. Nat Med. 2020;26: 892–899.

In addition to the outlined use cases, please see a proposed diagram [here](https://confluence.hl7.org/pages/viewpage.action?pageId=104565555) for how FHIR and DICOM compliment the workflow’s of clinical and imaging data respectively to optimally enable AI deployment.
Use case document [here](https://docs.google.com/document/d/1BjXsGRMw29meFCi06II_Qujr9lGqVXVDrkbpoc9gsM4/edit#heading=h.b03n59iopaqy)

### Authors

- Warren Oliver
- Ashley Kras
- Brett Esler



---

// File: input/pagecontent/life_science.md

## Life science use case

---

// File: input/pagecontent/patient_journey.md

### Cataract Use Case

#### Problem Statement

Cataract Surgery is one of the most commonly performed surgical procedures in the world. There is no universal benchmarking standard for evaluating the methods and outcomes of cataract surgery. Surgeons use different data sets, equipment, and information systems store their data in proprietary data silos. There is no universally agreed technique for sharing cataract surgery data or permitting outcome research beyond the ‘silo’ of each local information system. This is an impediment to audit, research, and shared care with other health professionals especially Optometry.



#### Use Case

A surgeon performs a cataract procedure on an individual eye of a patient and records data before the procedure, at the time of the procedure, and after the procedure in an Ophthalmology management application. Many stakeholders including the surgeon, the patient community, payers, accreditation agencies, researchers would like to track outcomes from this and other similar procedures and benchmark them against the work of other surgeons working both locally and globally. This would bring benefits including:
shared care with other health professionals such as Optometrists
and outcome research and identification of needy populations,
evaluation of differences in surgical technique, equipment and consumables

**There are many benefits for each party in such a system, should it be supported by interoperable eye care-specific resources and standards of healthcare information exchange. Some of these include:**

##### Ophthal:
- Receives follow up data to learn about Mr. ABC’s surgical outcome
- Self-auditing becomes easier to assess outcome performance from aggregated data across the full journey of their patients
- Peer benchmarking
- Minimize cognitive and practical energy applied to record keeping, sending, retrieving and chasing-up

##### Optom:
- Increasing capacity to educate (Communication) patients in the preop and postop period & provide better service
- Easier relationship building with partnering Ophthals
- Standardized and automated auditing and aggregation (as above) to improve and/or change patient care paradigms
- Minimize data harmonization efforts (as above)

##### Mr. ABC:
- Receives relevant personal health data
- Can integrate this into many emerging personal health record applications (eg - glasses prescription)
- Minimize concerns and considerations about data harmonization efforts in a collaborative care model (as above)


### Glaucoma care

#### Problem Statement
Mrs. XYZ (patient) is a 75-year-old Hispanic female with stable and controlled moderate primary open angle glaucoma (Condition) that requires regular monitoring. Mrs. XYZ’s glaucoma is cared for collaboratively by an Optom and Ophthal. The majority of encounters take place at the Optom, whilst she is stable, during which she undergoes a series of examinations (eg: visual acuity, intraocular pressure measurement (Observation)) and diagnostic tests (eg - visual fields, fundus photography, ocular coherence tomography) and a risk assessment is performed (RiskAssessment). As it is a chronic disease, optimal glaucoma management relies on capturing longitudinal and multimodal data points (examination, testing, imaging (Observation, ImageStudy, DiagnosticReport). Frequency of visits may vary (eg - from every 3-12 months, depending on a number of factors). Whenever certain parameter thresholds are reached that suggest worsening of disease (Condition), the patient will generally be referred (ServiceRequest, Referral Note) to the Ophthal for evaluation and decisions about any new or changed management (eg - change in (Medication) or recommendation for surgical intervention (Procedure)). Therefore, it is essential that all of these monitoring records are routinely transferred to the ophthalmologist. The reasons for this are twofold; first, the Ophthal may be involved in reviewing some of the information collected during the Optom encounter, and second, if and when the time comes for referral, they will have the relevant information available.

**There are many benefits for each party in such a system, should it be supported by interoperable eye care-specific resources and standards of healthcare information exchange. Some of these include:**

##### Ophthal:
- Can be involved in remote monitoring of Mrs. XYZ’s care
- Self-auditing becomes easier to assess outcome performance from aggregated data across the full journey of their patients
- Peer benchmarking
- Minimize cognitive and practical energy applied to record keeping, sending, retrieving and chasing-up

##### Optom:
- Increasing confidence to monitor Mrs. XYZ knowing that the Ophthal has access to her results and information
- Increased capacity to educate (Communication) patients about decisions and following Ophthal referral to provide a better service
- Easier relationship building with partnering Ophthals
- Standardized and automated auditing and aggregation (as above) to improve and/or change patient care paradigms
- Minimize data harmonization efforts (as above)

##### Mr. ABC:
- Receives relevant personal health data
- Can integrate this into many emerging personal health record applications (eg - glaucoma medication adherence) and can leverage emerging devices (eg home Icare ® - home IOP monitoring device) to enrich the data available to practitioners between visits
- Minimize concerns and considerations about data harmonization efforts in a collaborative care model (as above)
- Actors in scenario #2: patient (Mrs. XYZ),  2x practitioners (Optom, Ophthal), multiple devices, potentially multiple locations, and potentially 2x healthcare services.




---

// File: input/pagecontent/physician_tools.md

### Summary

---

// File: input/pagecontent/profiles.md

These profiles have been defined by this implementation guide.

The following clinical profiles have been technically validated.

### Opthalmic Observations

* [Base ophthalmic Observation profile](StructureDefinition-observation-base.html) - Base profile specifically constrained for describing ophthalmic Observations
* [Ocular anatomical location](StructureDefinition-body-structure-eye.html) -The description of an ophthalmic anatomical site that is located within the following structures: the eyeball or the periocular or orbital regions (as opposed to non-ocular anatomical locations).
This profile is used by combining the unique valueset (hyperlink) for relevant ophthalmic specific BodyStructure.locationQualifier (Body Site modifier) in combination with the base Observation BodyStructure.location (Body Site; descendants from SNOMED 371398005 ""Eye Region Structure), each with a preferred binding in order to refine the accuracy of the location decription of occular structures. This unique qualifying element is important because these locations are routinely described either diffently and/or more granularly than other body parts.
Of note - non occular (or surrounding) anatomical location references of Observations (eg - arm) do not need to use this modified specialty profile.

#### Clinical Observations (measurable findings)
* [Intraocular Pressure (IOP)](StructureDefinition-observation-iop.html) - A measurement of a patient's intraocular (within the eyeball) pressure (in mmHg).
* [Visual Acuity (VA)](StructureDefinition-observation-visual-acuity.html) - Base profile specifically constrained for describing ophthalmic Observations

#### Clinical Observations (observed findings)

* [Other ophthalmic clinical Observation](StructureDefinition-observation-eye-region-finding.html) - Obsvervations made during an ophthalmic clinical examination that relate to ocular structures (and hence should use the ""ocular anatomic location"" profile). 
Although the Condition resource is used in this profile (with the preferred binding of a specific ophthalmic valueset), this does not intend to indicate that a definitive clinical diagnosis has been made. Rather, that a certain finding has been observed.
Observations made during a clinical examination which may or may not be related to the routine ophthalmic examination, but describes findings that are not necessarily related to the ocular, periocular or orbital anatomical location or pathology (and hence is unlikely to requre the use of the "ocular anatomic profile"). <br/>
<p text-indent="50px">
The following examples illustrate scenarios where this may apply; a practitioner may identify <br/>
i) likely unrelated - an incidental gait as the patient walks into the room<br/>
ii) possibly related - an enlarged thyroid gland, which could be associated with thyroid eye disease<br/>
iii) likely related - a high blood pressure reading. This may be a non-ocular/systemic cause of numerous potentially blinding ophthalmic conditions, such as severe hypertensive retinopathy or a retinal vascular occlusion.
In this case it is appropriate to use an Observation resource not profiled as an 'Opthalmic Clinical Observation'.<br/>

Again, although the Condition resource is referenced in this profile (with the preferred binding of a specific ophthalmic valueset), this does not intend to indicate that a definitive clinical diagnosis has been made. Rather, that a certain finding has been observed.  
</p>

### Ophthalmic Diagnoses / Conditions 
* [Ophthalmic Diagnoses](StructureDefinition-condition-base.html) - A profile to describe the past/present clinical diagnosis of a specific ophthalmic Condition made by a Practitioner.
As noted above, although this same Condition Resource / ValueSet combination is referenced as in the 'Other ophthalmic clinical Observation' profile, this profile is a modification of the base Condition Resource (as opposed to a base Obervation Resource modification, referencing Condition).
The 'Ocular anatomical location' profile should be used together with this profile.
When a past/present clinical diagnosis of a specific non-ophthalmic pathological Condition is to be made it is expected the Condition resource will be used not profiled as 'Opthalmic Diagnoses'.  
It is not expected that the 'Ocular anatomical location' profile will be used together with this profile.


### Ophthalmic Procedures
* [Opththalmic Procedure](StructureDefinition-procedure-base.html) - A profile indicating that an active ophthlmic intervention is or was performed on or for a patient.
The 'Ocular anatomical location' profile should be used together with this profile.


### Diagnostic Tests

* [Base ophthalmic DiagnosticReport profile](StructureDefinition-diagnostic-report-base.html) - Base profile specifically constrained for describing ophthalmic DiagnosticReports

#### Visual Field
* [VF Observations](StructureDefinition-observation-visual-field.html) - The Observations associated with the VF DiagnosticReport (note: this valueset can also be used independently to describe specific findings/Observations captured by a VF test, which may not necessarily be referenced by the DiagnosticReport.) 
* [VF Diagnostic Report](StructureDefinition-diagnostic-report-visual-field.html) - The DiagnosticReport profile for a visual field DT

#### OCT Macula
* [OCT macula Observations](StructureDefinition-observation-oct-macula.html) - The Observations associated with the OCT macula DiagnosticReport (note: this valueset can also be used independently to describe specific findings/Observations captured by a OCT test, which may not necessarily be referenced by the DiagnosticReport.) 
* [OCT macula Diagnostic Report](StructureDefinition-diagnostic-report-oct-macula.html) -The DiagnosticReport profile for an OCT macula

#### OCT RNFL
* [OCT RNFL Observations](StructureDefinition-observation-oct-rnfl.html) - The Observations associated with the OCT RNFL DiagnosticReport (note: this valueset can also be used independently to describe specific findings/Observations captured by a OCT test, which may not necessarily be referenced by the DiagnosticReport.)
* [OCT RNFL Diagnostic Report](StructureDefinition-diagnostic-report-oct-rnfl.html) - The DiagnosticReport profile for an OCT RNFL









---

// File: input/pagecontent/registry.md

### Summary

---

// File: input/pagecontent/spec.md

### A Heading
You can also use markdown if that's your thing

---

// File: input/pagecontent/StructureDefinition-ext-myExtension-intro.md

### Introduction
Introductory guidance on myExtension


---

// File: input/pagecontent/StructureDefinition-ext-myExtension-note.md

### Notes
Usage notes on myExtension

---

// File: input/pagecontent/StructureDefinition-observation-base-intro.md

The observation base profile supports the common requirements for all ophthalomology observations. 
* Observations.status - restricted valueset to only final result states.
* Observation.category - all observations are in the 'exam' category
* Observation.subject - only for individual patients, use local profiles for patient such as US Core Patient, AU Base Patient or other relevant profile.


---

// File: input/pagecontent/terminology.md


### Ophthalmic ValueSets
* [Observation Status](ValueSet-observation-final-status.html) -Describes whether a recorded observation is either final or amended
* [Ophthalmic anatomical location](ValueSet-body-site-eye.html) - Describes the ophthalmic structure being referenced
* [Ophthalmic anatomical location qualifiers](ValueSet-qualifiers.html) - Describes the relative locality of an ocular anatomical region (either a whole structure, or particular region within one)

### Observation ValueSets
* [Ophthalmology observations (SNOMED)](ValueSet-observable-entities.html) - concept descends from 363926002 (Eye/vision observable (observable entity))
* [Visual acuity method valueset (SNOMED)](ValueSet-observation-visual-acuity.html) - Describes the visual acuity observation result, where concept descends from 363983007 (Visual acuity)
* [Intraocular pressure (IOP) method valueset](ValueSet-iop-methods.html) - Describes the various methods of capturing IOP that relate to the IOP Observation profile
* [Visual acuity chart valueset (SNOMED)](ValueSet-observation-visual-acuity-methods.html) - Describes the various charts that can be used to assess visual acuity where concept descends from 400912000 (Visual acuity test equipment (physical object))
* [Visual Field Observation Codes](ValueSet-observation-visual-field.html) - Codes to be used for Visual Field observations
* [OCT Macula Observation Codes](ValueSet-observation-oct-macula.html) - Codes to be used for OCT macual observations
* [OCT RNFL Observation Codes](ValueSet-observation-oct-rnfl.html) - Codes to be used for OCT RNFL observations


### Condition ValueSets
* [Ophthalmology conditions valuset (SNOMED & ICD-10 combined)](ValueSet-conditions.html) - ICD 10 and SNOMED codes for ophthalmic conditions

### Procedure ValueSets
* [Ophthalmology Procedures Valueset](ValueSet-procedures.html) - SNOMED and CPT combined codes for ophthalmic procedures

### Code Systems
* [Additional Ophthalmic Body Structure Qualifiers](CodeSystem-qualifiers.html) - additional qualifiers for body structure
* [Aditional Intraocular Pressure Method](CodeSystem-iop-methods.html) - additional procedure types for IOP measurement
* [Additional Visual Field Observation Types](CodeSystem-visual-field-observations.html) - additional visual field observation types


---

// File: input/pagecontent/usecases.md

### Usecases

<div><img src="usecases.jpg"/></div>
<p/>
Oph-01 → Oph-06 were the primary focus of the May ‘21 technical connectathon [see here](https://docs.google.com/document/d/1BjXsGRMw29meFCi06II_Qujr9lGqVXVDrkbpoc9gsM4/edit#heading=h.b03n59iopaqy)

Ophthalmic AI workflows (see link [here](https://confluence.hl7.org/pages/viewpage.action?pageId=104565555) )

---

