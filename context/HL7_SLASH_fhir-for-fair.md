File: repos/HL7_SLASH_fhir-for-fair/sushi-config.yaml

# ╭────────────────────────────────────────────────────────────────────────────────────────────────╮
# │  ACTION REQUIRED: REVIEW AND EDIT THIS FILE TO ENSURE IT ACCURATELY REFLECTS YOUR PROJECT!     │
# │                                                                                                │
# │  This file was generated from your existing project files and will be used for SUSHI           │
# │  configuration from now on. You may delete your package.json as it is no longer needed.        │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯

# ╭──────────────────────────────ImplementationGuide-gh.json───────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see:                                                                    │
# │  http://build.fhir.org/ig/HL7/fhir-shorthand/branches/beta/sushi.md#ig-development           │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.uv.fhir-for-fair
canonical: http://hl7.org/fhir/uv/fhir-for-fair
version: 1.0.0
name: FhirForFairIG
title: FHIR for FAIR - FHIR Implementation Guide
status: active
publisher:
  - name: Health Level Seven International - SOA Work Group
    url: http://www.hl7.org/Special/committees/soa
contact:
  - name: HL7 SOA Work Group
    telecom:
      - system: url
        value: http://www.hl7.org/Special/committees/soa
description: The FHIR for FAIR - FHIR Implementation Guide aims to provide guidance on how HL7 FHIR can be used for supporting FAIR health data implementation and assessment. 
license: CC0-1.0

fhirVersion: 4.3.0
# fhirVersion: 4.3.0-snapshot1

# fhirVersion: 4.0.1
# fhirVersion: 4.1.0

jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#001 "World"

parameters:
  find-other-resources: true
  apply-jurisdiction: true
  apply-publisher: true
  apply-version: true

  

copyrightYear: 2020+
releaseLabel: STU 1

resources:
    
 StructureDefinition/Library-uv-f4f:
   name: Library [Study Level Medatata]	
   description: This profile defines how to use the Library resource to convey metadata information for a FAIR dataset realized by using HL7 FHIR

 StructureDefinition/ResearchStudy-uv-f4f:
   name: ResearchStudy [Study Level Medatata]	
   description: This profile defines how to use the ResearchStudy resource to convey metadata information for a FAIR collection of data at the study level realized by using HL7 FHIR

 StructureDefinition/DocumentManifest-uv-f4f:
   name: DocumentManifest [Subject Level Medatata]	
   description: This profile defines how to use the DocumentManifest resource to convey metadata information for a FAIR collection of data at the subject level realized by using HL7 FHIR

 Library/ninfea-1:
   name: Non-invasive foetal electrocardiography example [Library]
   description: Example of usage of the Library reosurce to describe study level metadata. This example is based on the Non-invasive foetal electrocardiography NInFEA case.
   exampleCanonical: http://hl7.org/fhir/uv/fhir-for-fair/StructureDefinition/Library-uv-f4f
 
 Library/f4h-1:
   name: FAIR4Health portal [Library]
   description: Example of usage of the Library resource to describe project level metadata. This example is based on the data published by the FAIR4Health project thorugh the https://portal.fair4health.eu/ portal
   exampleCanonical: http://hl7.org/fhir/uv/fhir-for-fair/StructureDefinition/Library-uv-f4f
   
 Library/f4h-lib-1:
   name: FAIR4Health study case 1 [Library]
   description: Example of usage of the Library resource to describe study level metadata. This example is based on the FAIR4Health study case 1 Identification of multimorbidity patterns and polypharmacy correlation on the risk of mortality in elderly, and demonstrate the reproducibility of research
   exampleCanonical: http://hl7.org/fhir/uv/fhir-for-fair/StructureDefinition/Library-uv-f4f
   
 Library/f4h-lib-2:
   name: FAIR4Health study case 2 [Library]
   description: Example of usage of the Library resource to describe study level metadata. This example is based on the FAIR4Health study case 2 Develop and pilot an early prediction service for 30-days readmission risk in COPD (Chronic Obstructive Pulmonary Disease) patient
   exampleCanonical: http://hl7.org/fhir/uv/fhir-for-fair/StructureDefinition/Library-uv-f4f
   
 ResearchStudy/f4h-rs-2:
   name: FAIR4Health study case 2 [ResearchStudy]
   description: Example of usage of the ResearchStudy resource to describe study level metadata. This example is based on the FAIR4Health study case 2 Develop and pilot an early prediction service for 30-days readmission risk in COPD (Chronic Obstructive Pulmonary Disease) patient   
   	
 DocumentManifest/example-f4f-manifest:
   name: Subject Level Data Collection [DocumentManifest]
   description: Example of usage of the DocumentManifest resource to describe subject level metadata. 
   
 List/example-f4f-list:
   name: Subject Level Data Collection [List]
   description: Example of usage of the List resource to describe subject level metadata. 

 Condition/example-f4f-condition:
   name: Sample used by the Subject Level Collection [Condition]
   description: Example of Condition resource used by the DocumentManifest example.
 
 Patient/example-f4f-patient:
   name: Sample used by the Subject Level Collection [Patient]
   description: Example of Patient resource used by the DocumentManifest example.
   
 MedicationStatement/example-f4f-medicationStatement-1:
   name: MedicationStatement Sample used by the Subject Level Collection [1]
   description: Example of MedicationStatement resource used by the DocumentManifest example.
   
 MedicationStatement/example-f4f-medicationStatement-2:
   name: MedicationStatement Sample used by the Subject Level Collection [2]
   description: Example of MedicationStatement resource used by the DocumentManifest example. 

   

#    name: FRAILSURVEY Study level metadata example (Library)
#    description: FRAILSURVEY is an app that collects data from elderly communally. This app integrates Groningen Frailty Index, and a set of questions about socio demographic data, social resources, self-perception of health, nutrition, medication, cognitive and psychosocial status and time occupation. The results obtained classify the elderly as robust, pre-frail or frail. The app displays tailored recommendations if the elderly is classified as frail or pre-frail. The recommendations cover aspects such as physical exercise, healthy diet, social network, 
# among others. FRAILSURVEY generates a totally anonymous database that can be used for research purposes. The development of such technology was based on an accessibility principle for the elderly, with the purpose of guaranteeing a greater autonomy to use it. Considerations such as vision, hearing, motor control and cognition were considered. In addition, the app features a typographic font designed for low-vision people, APHont, developed by the American Printing House for the Blind, also presenting a way to increase or decrease the font size, as well as the possibility of listening to some audio information.
#    exampleCanonical: http://hl7.org/fhir/uv/fhir-for-fair/StructureDefinition/Library-uv-f4f
#  Library/26dc407a-9b03-4a25-9dad-7e53ce6b4bbb:
#    name: Non-invasive foetal electrocardiography example (Library)
#    description: Non-invasive foetal electrocardiography 
#    exampleCanonical: http://hl7.org/fhir/uv/fhir-for-fair/StructureDefinition/Library-uv-f4f

pages:
  index.md:
    title: FHIR for FAIR Home Page                
  aboutThisVersion.md:
    title: About this version
  rw-overview.md:
    title: Overview
  recommendations.md:
    title: General Recommendations
  immPort.md:
    title: Immunology Database and Analysis Portal
  FAIR4Health.md:
    title: FAIR4Health Project
  leipzigHealthAtlas.md:
    title: Leipzig Health Atlas (LHA)
  terminology.md:
    title: Terminologies
  FHIRandRDAMetrics.md:
    title: Implementing the RDA Indicators
  RDAMetrics.md:
    title: RDA Indicators
  methodology.md:
    title: Methodology
  deployment.md:
    title: Deployments
  metadata.md:
    title: Metadata and data
  FAIR.md:
    title: FAIR Guiding Principles
  citation.md:
    title: Representing FAIR metadata with Citation
  FHIRandFAIR.md:
    title: Implementing the FAIR principles
  FHIRidentifiers.md:
    title: FHIR identifiers and FAIR principles
  ninfea.md:
    title: Non-Invasive Multimodal Foetal ECG-Doppler Dataset for Antenatal Cardiology Research
  mimic.md:
    title: The Medical Information Mart for Intensive Care IV - Emergency Department (MIMIC-IV-ED, v1.0) dataset
  NFDI4Health.md:
    title: The NFDI4Health consortia
  PHT.md:
    title: The Personal Health Train
  cedar.md:
    title: Center for Evidence and Practice Improvement (CEPI) Evidence Discovery and Retrieval (CEDAR) - Making evidence more FAIR
  downloads.html:
    title: Useful Downloads
  copyrights.md:
    title: Acknowledgments, licenses and copyrights
  changes.html:
    title: IG Change History

			

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To use a provided input/includes/menu.xml file, delete the menu property below.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯

menu:
  IG Home: index.html
  Table of Contents: toc.html
  Background:
    About this version: aboutThisVersion.html
    Methodology: methodology.html
    FAIR Guiding Principles: FAIR.html
    RDA Indicators: RDAMetrics.html   
    Metadata and Data: metadata.html
    Identifiers: FHIRidentifiers.html     
    Deployment: deployment.html  
  Real World Cases:
    Overview: rw-overview.html
    FAIR4Health Project: FAIR4Health.html
    MIMIC-IV-ED: mimic.html    
    Immunology Database and Analysis Portal: immPort.html              
    NInFEA: ninfea.html            
    Leipzig Health Atlas (LHA): leipzigHealthAtlas.html 
    NFDI4Health: NFDI4Health.html  
    CEDAR: cedar.html
    Personal Health Train: PHT.html    
  Guidelines: 
    General recommendations: recommendations.html
    Implementing FAIR principles: FHIRandFAIR.html    
    Implementing RDA Indicators: FHIRandRDAMetrics.html
    Representing metadata with Citation: citation.html
    Terminologies: terminology.html  
  Artifact Index: artifacts.html
  Support:
  # link to FHIR specs to be checked
    FHIR Spec: https://build.fhir.org/branches/R4B/index.html
    Downloads: downloads.html
    Copyrights: copyrights.html
    
FSHOnly: false


---

// File: input/pagecontent/aboutThisVersion.md

### What is in

1.  General recommendations for implementing with HL7 FHIR the FAIR
    principles and the RDA indicators.

2.  Description of some representative Real World Cases  

3.  Conformance resources and associated examples for the representation
    of some study and subject level metadata

### Not in this version

1.  FHIR representation of domain / use case specific data (e.g.
    genomics; cancer;..).

2.  Privacy and Security management

3.  End point discovery

4.  Provenance management

### Open/Known Issues

1.  Persistency of identifiers, e.g. Digital Object Identifier (DOI) or
    FEvIR Object Identifier (FOI)

2.  Distinct and identifiable data and metadata FAIR data objects

3.  Level of maturity of some of the Evidence based resources.

4.  support for FAIR-compliant vocabularies


---

// File: input/pagecontent/cedar.md

### Short Description

The Agency for Healthcare Research and Quality (AHRQ) Center for Evidence and Practice Improvement (CEPI) supports the dissemination and implementation of patient centered outcomes research (PCOR) resources. The goals are to generate new knowledge, synthesize evidence, translate science on what works in health and health care delivery, and catalyze practice improvement.   

AHRQ launched the CEPI Evidence Discovery and Retrieval ([CEDAR](https://digital.ahrq.gov/ahrq-funded-projects/cepi-evidence-discovery-and-retrieval-cedar-project)) project with the CMS Alliance to Modernize Healthcare (Health FFRDC), operated by The MITRE Corporation. CEDAR facilitates the dissemination and discovery of PCOR findings from CEPI repositories in alignment with the FAIR Guiding Principles using standards-based application programming interface (API). The CEDAR API allows a diverse set of applications or systems to access the data that CEDAR aggregates from multiple CEPI source repositories. An initial step in CEDAR development was to assess CEPI repository adherence to the [FAIR Guiding Principles](https://www.go-fair.org/fair-principles) as described by the facets of findable, accessible, interoperable, and reusable. This step helped to better identify the needs of CEPI users, facilitate the discovery of CEPI PCOR resources, and improve FAIRness.  

The CEDAR team developed the C-FAIR Tool to evaluate the FAIRness of the CEPI repositories, and subsequently, the FAIRness of the CEDAR API. The Health FFRDC conducted an [environmental scan](https://digital.ahrq.gov/sites/default/files/docs/citation/cedar-environmental-scan.pdf) in 2020, which reviewed current FAIR measurement tools, including the Research Data Alliance’s (RDA) current [FAIR assessment tools](https://www.rd-alliance.org/group/fair-data-maturity-model-wg/outcomes/results-analysis-existing-fair-assessment-tools), and their applicability to measuring the FAIRness of the CEPI repositories.[4] RDA is an initiative launched in 2013 for the purpose of improving and enabling the open sharing and reuse of research data. From 2019-2020 the [RDA FAIR Data Maturity Working Group](https://www.rd-alliance.org/) identified and analyzed twelve publicly-available FAIR measurement tools in an effort create its own set of FAIR specifications and guidelines. 

The team reviewed each of the tools in RDA’s FAIR tool assessment for potential use to evaluate FAIRness of the CEPI repositories and each tool’s ability to inform and measure improvements in FAIRness that could result from the development of CEDAR. 

The CEDAR team then created the C-FAIR Tool which adapted the FAIR Guiding Principles and incorporated aspects of existing FAIR assessment tools to measure and score the FAIRness of the CEPI repositories.


### Summary of Main Findings and Gaps Identified by FAIRness Assessment

CEPI repositories were evaluated and scored using the adapted criteria and scoring system developed as part of the C-FAIR Tool. AHRQ’s repositories that support the United States Preventive Services Task Force (USPSTF), Effective Health Care Program (EHC), Evidence-based Practice Center (EPC) Program, CDS Connect, and National Guideline Clearinghouse (NGC) were included in the assessment. The results of this assessment established the baseline FAIRness of the CEPI repositories. Assessments will be performed on a regular basis as CEDAR aims to improve the FAIRness of the CEPI repositories. 

The CEDAR project used the RDA’s foundational analysis as a starting point in evaluating each tool for use in assessing the FAIRness of the CEPI repositories. In its review of the twelve tools, the CEDAR project identified four gaps: assessment of an entire repository, metadata, scoring, and domain specificity. These gaps are described below with information about how the CEDAR team used the gap to create CEPI repository-relevant criteria for inclusion in the C-FAIR Tool:  

- Assessment of an entire repository. Most existing tools assess the FAIRness of data artifacts themselves. The CEDAR team adapted tool criteria and the FAIR Guiding Principles to enable measurement of the FAIRness of an entire CEPI repository as a collection of digital objects. As CEPI repository stewards curate digital objects consistently within each individual repository, including how metadata properties are valued, the CEDAR team determined it would be valuable to assess FAIRness of a repository as a collection of digital objects instead of the digital objects themselves to provide a holistic view of a repository’s FAIRness. 

- Metadata. The team developed criteria focused on the metadata of the digital objects and not the data specifically. This adaptation of earlier FAIRness measurement tools recognizes that health information takes many forms, including structured data sets, screening or treatment guidelines in PDF or other formats, evidence reports, and clinical decision support tools. All artifacts within each CEPI repository follow the same metadata model. 
  
- Scoring. To determine whether CEDAR has increased the findability of the contents of the CEPI repositories, the team developed scoring criteria that emphasize the findability component within the FAIR Guiding Principles. Therefore, the scoring mechanism within the C-FAIR Tool has five criteria associated with the findability facet, while accessible, interoperable, and reusable have three. 
  
- Domain specificity. No single existing measurement tool aligned completely with the needs of the CEPI repositories as many tools are domain-specific, (e.g., domain focused recommendations for quality improvement of geospatial data). The C-FAIR Tool developed by the MITRE team attempted to therefore create criteria that can apply to a wide range of domains.  

In the context of the CEDAR project, repository assessment using the C-FAIR Tool provides an opportunity to address any observable gaps in FAIRness. The C-FAIR Tool provides definitions so the data stewards or repository owners can improve FAIRness through repository-level improvements or modifications. 


### Using HL7 FHIR to Support the FAIR Principles.

During the development of the C-FAIR Tool, the CEDAR team leveraged work from the FHIR4FAIR Work Group that was underway during the January 2021 HL7 Connectathon. Specifically, the CEDAR team modified the C-FAIR Tool criteria to reflect insights that were made to the RDA FAIR Indicators. This RDA FAIR Indicator exercise mapped which indicators related to FHIR Resources. After reviewing the FHIR4FAIR Work Group’s mapping, CEDAR C-FAIR Tool leveraged this mapping, as the CEDAR API uses the Citation Resource. 

The CEDAR API uses the FHIR Citation Resource to represent and share information about indexed artifacts from the CEPI repositories. The C-FAIR Tool criteria were also created to incorporate aspects of the Citation Resource. For example, C-FAIR Tool criterion F2.1 lists metadata elements that are included as data elements in the Citation Resource. The scope of the Citation Resource aligns well with the mission of improving FAIRness, which is why we aligned the CEDAR API and C-FAIR Tool to the Citation Resource.



---

// File: input/pagecontent/citation.md

The Citation Resource, which is structured to support FAIR principles,
should be considered Draft (not Trial use) within the R4B specification
and its content is derived by the currenlty available R5 specification.

When the Citation Resource is applied to knowledge artifacts (including
FHIR Resources), the Citation is a distinct digital object containing
the metadata about the cited artifact.

The Citation Resource contains a *citedArtifact* element to clearly
distinguish data about the cited artifact (metadata of the cited
artifact) from data about the citation (metadata of the Citation).

### Metadata of the cited artifact

The *citedArtifact* element contains the following elements:

1)  An *identifier* element can include any number of identifiers,
    including a persistent unique identifier for the cited artifact.

2)  A *relatedIdentifier* element can include any number of identifiers
    and can be used in situations where it is important to provide an
    identifier for a related concept that is not the cited artifact
    itself. For example, a PubMed Identifier (PMID) may be used as an
    identifier for an article about a research study published in a
    journal and it may have a related identifier from a National
    Clinical Trials registry (NCT) that denotes the research study
    described in the article.

3)  A *title* element can include any number of labels and each title
    may be classified with *type* and *language* elements.

4)  An *abstract* element can include any number of summaries or
    descriptions and each abstract may be classified with *type* and
    *language* elements, as well as a *copyright* element if desired to
    report rights management data specific to the abstract.

5)  A *version* element can be used to represent a specific version of
    the cited artifact.

6)  A *part* element can be used to represent a specific part of the
    cited artifact, such as a section, table, figure, supplement, or
    lines of code.

7)  A *classification* element can include any number of classifications
    which can be used extensively to support the findability of the
    cited artifact. To support wide use and re-use of classifications,
    the *classification* element contains *type*, *classifier*, and
    *whoClassified* elements.

7.a) A *type* element can be used to describe the kind of
classification. Expressing the classification type as a
classification.type value enables extensive re-use of the structure
without requiring separate structural elements for keywords, conditions,
domains, severity, certainty, geographic categories, and many other
commonly used types of classification.

7.b) A *classifier* element can be used to include any number of
classification values.

7.c) A *whoClassified* element can be used to include attribution,
ownership, and rights management data for the classification.

8)  A *publicationForm* element can include any number of publication
    forms for the cited artifact and each publication form can be
    represented with any of:

8.a) a *publishedIn* element to represent the collection in which the
cited artifact is published;

8.b) a *periodicRelease* element to represent the specific issue within
the collection, such as a journal or newspaper that is released in
periodic packages;

8.c) *articleDate* and *lastRevisionDate* elements for dates related to
the cited artifact itself;

8.d) *accessionNumber*, *pageString*, *firstPage*, *lastPage*, and
*pageCount* elements that can be used to identify the specific location
or position within the collection;

8.e) a *language* element; and

8.f) a *copyright* element to report rights management data specific to
the publication form.

9)  A *webLocation* element can include any number of web locations
    (often called URLs for Uniform Resource Locators) and each url
    element can be paired with a classifier element to distinguish among
    multiple web locations.

10) A *relatesTo* element can include any number of relations to other
    artifacts. The RelatedArtifact datatype includes elements to
    classify the type of relationship, to classify the related artifact,
    and to identify the related artifact.

11) A *dateAccessed* element can document when the cited artifact was
    accessed.

12) A *currentState* element can include any number of status
    classifications for the cited artifact.

13) A *statusDate* element can include any number of status
    classifications for the cited artifact paired with the timing of
    these status classifications.

14) A *contributorship* element can be used to report attribution of any
    type of contribution to the creation of the cited artifact.

14.a) The *contributorship* element includes a summary element that can
include any number of strings used to summarize contributorship, such as
author lists, contributorship statements, and acknowledgement
statements.

14.b) The *contributorship* element includes an entry element that can
include any number of entities that contributed to the cited artifact.
The entry element may include:

14.b.i. *name*, *initials*, *collectiveName*, and *identifier* elements
to identify the entity;

14.b.ii. *affiliationInfo*, *address*, and *telecom* elements to provide
additional information about the entity;

14.b.iii. *contributionType*, *role*, *contributionInstance*, and
*correspondingContact* elements to report specific contributions by the
entity; and

14.b.iv. a *rankingOrder* element to provide a rank order among
contributing entities.

15) A *note* element can include any number of annotations for data that
    does not fit other elements.

### Metadata of the Citation

The Citation itself includes *classification*, *note*, *currentState*,
*statusDate*, and *relatesTo* elements that can be used to apply similar
concepts to the Citation as described for the cited artifact.

The Citation includes a *summary* element that can include any number of
summary expressions for display of the citation.

The Citation contains elements useful to identify the Citation including
*url* (for canonical identifier), *identifier*, *version*, *name* (for
machine-friendly label) and *title* (for human-friendly label) elements.

The Citation contains elements useful for attribution, rights
management, and technical management of the Citation including *status*,
*experimental*, *date*, *publisher*, *contact*, *useContext*,
*jurisdiction*, *copyright*, *approvalDate*, *lastReviewDate*,
*effectivePeriod*, *author*, *editor*, *reviewer* and *endorser*
elements.

The Citation contains *description* and *purpose* elements for natural
language descriptions of the citation.


---

// File: input/pagecontent/copyrights.md

1.  [HL7 FHIR License and Legal Terms](http://hl7.org/fhir/license.html)

2.  [FAIR principles](https://www.go-fair.org/fair-principles), Creative
    Commons Attribution 4.0 License by GO FAIR

3.  [FAIR Data Maturity Model. Specification and
    Guidelines](https://doi.org/10.15497/rda00050) Creative Commons
    Attribution 4.0 International License by FAIR Data Maturity Model
    Working Group.

4.  [Turning FAIR into reality - European
    Commission](https://ec.europa.eu/info/sites/default/files/turning_fair_into_reality_1.pdf)
    © European Union, 2018. Reuse is authorised provided the source is
    acknowledged. The reuse policy of European Commission documents is
    regulated by Decision 2011/833/EU (OJ L 330, 14.12.2011, p. 39)

5.  [FAIR4Health Project](https://www.fair4health.eu/). This project has
    received funding from the European Union’s Horizon 2020 research and
    innovation programme under grant agreement No 824666

6.  The Medical Information Mart for Intensive Care IV - Emergency
    Department
    ([MIMIC-IV-ED](https://physionet.org/content/mimic-iv-ed/1.0/)).
    [PhysioNet Credentialed Health Data
    License 1.5.0](https://physionet.org/content/mimic-iv-ed/view-license/1.0/)

7.  [ImmPort, toward repurposing of open access immunological assay data
    for translational and clinical research. Bhattacharya S, Dunn P,
    Thomas CG, Smith B, Schaefer H, Chen J, Hu Z, Zalocusky KA, Shankar
    RD, Shen-Orr SS, Thomson E, Wiser J, Butte AJ. Sci Data. 2018
    Feb 27;5:180015.
    doi: 10.1038/sdata.2018.15.](https://www.ncbi.nlm.nih.gov/pubmed/29485622)

8.  NInFEA: Non-Invasive Multimodal Foetal ECG-Doppler Dataset for
    Antenatal Cardiology Research (version 1.0.0). Pani, D., Sulas, E.,
    Urru, M., Sameni, R., Raffo, L., & Tumbarello, R. (2020).
    PhysioNet. <https://doi.org/10.13026/c4n5-3b04> [Open Data Commons
    Attribution License
    v1.0](https://physionet.org/content/ninfea/view-license/1.0.0/).

9.  [Leipzig Health Atlas (LHA).](https://www.health-atlas.de) The LHA
    project was funded by
    the [BMBF](https://www.bmbf.de/bmbf/en/) program i:DSem
    (Integrative Data Semantics for Systems Medicine, funding code
    031L0026). [Terms &
    Conditions](https://www.health-atlas.de/home/terms).

10. [NFDI4Health](https://www.nfdi4health.de/en/) stands for “National
    Research Data Infrastructure for Personal Health Data in Germany”.
    NFDI4Health is funded by the [German Research
    Foundation](https://www.dfg.de/en/) (DFG), project number 451265285.

11. CEPI Evidence Discovery and Retrieval
    ([CEDAR](https://digital.ahrq.gov/ahrq-funded-projects/cepi-evidence-discovery-and-retrieval-cedar-project)).
    This technical data was produced for the U.S. Government under
    Contract Number 75FCMC18D0047, Task Order 75Q80120F80008 and is
    subject to Federal Acquisition Regulation Clause 52.227-17, Rights
    in Data-General. No other use other than that granted to the U.S.
    Government, or to those acting on behalf of the U.S. Government
    under that Clause is authorized without the express written
    permission of The MITRE Corporation. For further information, please
    contact The MITRE Corporation, Contracts Management Office, 7515
    Colshire Drive, McLean, VA 22102-7539, (703) 983-3000. © 2021 The
    MITRE Corporation. Approved for Public Release, case no. 22-0134
    ©2022 The MITRE Corporation. All Rights Reserved.

12. [Personal Health Train](https://pht.health-ri.nl/)


---

// File: input/pagecontent/deployment.md

### Overview

This page provides a short overview of a non-exhaustive list of possible
logical HL7 FHIR-based deployment architectures that communities could
consider allowing the discovery and access to FAIR data by using HL7
FHIR API. Described architectures varying from a simple case with a
well-known FHIR server acting as registry and repository for data and
metadata, up to the case where repository endpoints are not known
a-priori and needs to be discovered.

Implementers could also consider Hybrid FHIR/non-FHIR solutions not
described here.

It is assumed that a proper privacy and security layer is realized to
assure that all the access and usage conditions specified by the data
sources are properly enforced (not shown in the pictures).

Future versions of this guide envision to analyze the described
architectures more in details and provide specifications to support
them.

### Case 1: FHIR Server acting as Registry/Repository

All data sources store FHIR resources representing data and metadata to
be shared in a FHIR server. All potential clients belonging to this
community know the endpoint of this FHIR server.

Client uses FHIR API to search and get FHIR resources representing data
and/or metadata.

<div>

<img src="deployment-1.png" alt="Well-known Registry/Repository "

style="width:60%;padding-bottom: 25px;padding-top: 25px" />

</div>

**Figure 1 FHIR Sever acting as Registry/Repository**

### Case 2: FHIR Sever acting as metadata registry

A set of FHIR Servers are used as Data Repository by data sources. A
community FHIR server acting as metadata registry is used to publish
appropriate FHIR resources representing metadata.

All potential clients belonging to this community know the endpoint of
this metadata registry FHIR server.

Client uses FHIR API to search and get FHIR resources representing
metadata; data references provided by the retrieved resources are then
used to get data from the proper data repository (not known a -priori).

<div>

<img src="deployment-2.png" alt="Well-known metadata registry"

style="width:60%;padding-bottom: 25px;padding-top: 25px" />

</div>

**Figure 2 FHIR server acting as metadata registry**

### Case 3: Registries/repositories discovering.

The client doesn’t know the end point of the server where metadata and
data are stored; it queries then a FHIR server to discover the endpoint
fulfilling specific search criteria. This information is then used to
search and access data and metadata as described for case 1 and 2.

<div>

<img src="deployment-3.png" alt="Registries/repositories discovering "

style="width:60%;padding-bottom: 25px;padding-top: 25px" />

</div>

**Figure 3 Registries/repositories discovering.**


---

// File: input/pagecontent/FAIR.md

The FAIR guiding principles for scientific data management and
stewardship are a set of guidelines from the field of research data
management (Wilkinson et al
2016 [doi.org/10.1038/sdata.2016.18](https://doi.org/10.1038/sdata.2016.18)).
They are universal in scope and some of the principles will need to be
refined for a particular community, such as medical informatics. The
FAIR principles are not a standard, which means they have many forms of
implementation. The primary purpose of FAIR principles is to make the
digital assets of data and related metadata more usable and reusable for
humans and machines, at scale. To this end, the fifteen FAIR principles,
listed below, are grouped into the four higher principles of
Findability, Accessibility, Interoperability and Reusability (FAIR)
which apply to data and metadata. Each FAIR principle has a number of
metrics or maturity indicators which are used to assess the FAIRness of
data and metadata to seek improvements, which will be described in a
future section of this implementation guide.

Why is it important to implement best practise in data management
through FAIR? Many research and clinical  healthcare projects collect,
integrate and analyse data with great effort and cost, but such
expensive data are often used for only a few analyses over a short
period, even though they would be useful for a much wider range of
scenarios over a much longer period. If data and relevant metadata are
not managed, only minimal value is
<span class="underline">realised</span> and furthermore, they can lose
credibility. Since research and clinical healthcare data are often
supported by public funds, society has a right to expect the greatest
and widest possible usage. Likewise, shareholders of private enterprise
expect their investments in science-based research and development to be
exploited and protected fully through best practise in FAIR data
management and data governance.

### Findability

F1: Metadata and data are assigned globally unique, persistent and
machine resolvable identifiers (GUPRI)

F2: Data are described with rich metadata (defined by R1)

F3: Metadata clearly and explicitly include the identifier of the data
it describes

F4: Metadata and data are registered or indexed in a searchable resource

### Accessibility

A1: Metadata and data are retrievable by each of their identifiers using
a standardised communication protocol

&nbsp;&nbsp;&nbsp;&nbsp;A1.1: The protocol is open, free and
universally implementable

&nbsp;&nbsp;&nbsp;&nbsp;A1.2: The protocol allows for an
authentication and authorisation, where necessary

A2: Metadata should be accessible even when the data is no longer
available

### Interoperability

I1: Metadata and data use a formal, accessible, shared, and broadly
applicable language for knowledge representation

I2: Metadata and data use vocabularies that follow the FAIR principles

I3: Metadata and data include qualified references to other metadata and
data

### Reusability

R1: Metadata and data are richly described with a plurality of accurate
and relevant attributes

&nbsp;&nbsp;&nbsp;&nbsp;R1.1: Metadata and data are released with a
clear and accessible data usage license

&nbsp;&nbsp;&nbsp;&nbsp;R1.2: Metadata and data are associated with
detailed provenance

&nbsp;&nbsp;&nbsp;&nbsp;R1.3: Metadata and data meet domain-relevant
community standards


---

// File: input/pagecontent/FAIR4Health.md

### Overview

[<span class="underline">FAIR4Health</span>](https://www.fair4health.eu/)
is a project funded by the European Union Horizon 2020. It is carried
out by 17 partners from 11 different countries and lasts 36 months,
bringing together expertise from different domains (health research,
data managers, medical informatics, software developers, standards and
lawyers).

The overall objective of FAIR4Health is to facilitate and encourage the
European Union **health** research community to **FAIRify**, that is, to
augment, share and reuse datasets derived from publicly funded research
initiatives, demonstrating the FAIR strategy’s potential impact on
health outcomes and health research. It focuses on two main use cases:

1.  FAIR4Health Pathfinder Use case 1 (P1): to support the discovery of
    disease onset triggers and disease association patterns in comorbid
    patients and demonstrate the reproducibility of research

2.  FAIR4Health Pathfinder Use case 2 (P2): to develop and pilot a
    prediction service for 30-days readmission risk in patients with
    COPD

This project has developed an intuitive, user-centered **technological
platform** to enable the translation from raw (meta)data to FAIR
(meta)data, and the use of this FAIRified information to execute
Privacy-preserving Distributed Data Mining (PPDDM) algorithms.

<table>
<thead>
<tr class="header">
<th><img src="FAIR4Health-1.png" style="width:4.875in;height:2.30208in" /></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Figure 1 – FAIR4Health overview</td>
</tr>
</tbody>
</table>

Raw data extracted from real healthcare institution EHRs across Europe,
are FAIRified and converted to HL7 FHIR resources complying to a common
data model.

The studies are made accessible through the FAIR4Health portal
([<span class="underline">https://portal.fair4health.eu/</span>](https://portal.fair4health.eu/))
describing the covered use cases, the number of patients involved to
generate the models in each case, and the number of contributing sites.
Computable metadata concerning the health data sets published by each
site is also given.

Published health datasets cannot be accessed directly, but they can be
reused by authorized researchers in the context of specific use cases
through algorithmic access via FAIR4Health Agents.

### Using HL7 FHIR

The raw healthcare data considered for the purpose of the project at the
subject level have been:

  - Data related to patients (pseudoanonimized identifier, gender, age,
    country,...)

  - Information from encounters of these patients: identifier, start and
    end date, type of encounter (planned vs unplanned), ICD-10 codes,
    drugs prescription at discharge (identifier, code).

  - Specific observations, such as: smoking status, institutionalized
    status, mortality status, domiciliary oxygen prescribed, result of
    the modified Medical Research Council (mMRC) Dyspnea Scale.

  - Results of laboratory tests: identifier, code, quantity, unit, date.

These data have been represented in HL7 FHIR by
[Patient](https://www.hl7.org/fhir/2021Mar/patient.html),
[Encounter](https://www.hl7.org/fhir/2021Mar/encounter.html),
[Condition](https://www.hl7.org/fhir/2021Mar/condition.html),
[MedicationStatement](https://www.hl7.org/fhir/2021Mar/medicationstatement.html),
[Observation](https://www.hl7.org/fhir/2021Mar/observation.html)
resources, in accordance with the agreed FAIR4Health FHIR profiles.
These profiles also indicate the commonly agreed vocabularies to be
used.

For each set of resources generated by the FAIR4Health FAIRification
process, a
[<span class="underline">Provenance</span>](https://www.hl7.org/fhir/2021Mar/provenance.html)
resource is created to document such a transformation; a
[<span class="underline">DocumentManifest</span>](https://www.hl7.org/fhir/2021Mar/documentmanifest.html)
resource is used to provide minimal documentation about data set
metadata including the licence of use and the
[<span class="underline">CapabilityStatement</span>](https://www.hl7.org/fhir/2021Mar/capabilitystatement.html)
is used to describe the capabilities offered by each site.

### Lessons learned

#### Metadata 

The practical application of the requirements about distinct,
identifiable and rich metadata is not so straightforward: this requires
a common understanding on what ‘metadata’ is (easy in theory, less easy
in practice) and an agreement on what is the minimal set of information
defining the metadata, decision that needs to take in consideration the
actual capability to provide and represent this minimal set.

In this initial phase the project has chosen to consider a minimal
starting set of information defined only for the project and study
level. No distinct subject level metadata have been implemented. Some of
these metadata have been published for human readability (case study -
project level) through the welcome page of the FAIR4Health portal;
others, enabling machine processing, have been defined by using FHIR
Provenance, DocumentManifest and CapabilityStatement resources and
published for the time being in a GitHub repository.

On this topic a possible future improvement will be the increase of the
quantity of information provided as machine processable metadata,
considering the adoption of alternative resources such as the FHIR
Library or the Citation to better describe richer study level metadata
and their publication through FHIR API. Moreover, a better formalization
of what is intended as rich metadata in the associated FHIR IG.

#### FHIR data, FAIR by design

Even though the Data Curation tool developed by the project to enable
the transformation of the raw data made available by the pilot sites
into FHIR resources, facilitated the realization of interoperable and
reusable data. Having native FHIR health data, designed to fulfill FAIR
principles, is the way to overcome all the experienced shortages,
potentially more and more critical when the domain of application will
be extended.

#### Added value of FHIR

Even if not all the capabilities offered by HL7 FHIR have been used at
this stage by the project, the adoption of HL7 FHIR gave a strong
contribution in terms of data reusability and interoperability. Allowing
to agree, formalize, share and adopt a common health data model for the
shared data within the project community.


---

// File: input/pagecontent/FHIRandFAIR.md

### Introduction

The goal of this Implementation Guide is to develop best practices for
implementing the [FAIR
principles](https://doi.org/10.1038/sdata.2016.18) when HL7 FHIR
resources are used to represent the data. In doing this, two main
situations should be considered:

1.  **Native HL7 FHIR solution aiming at being FAIR.**

2.  **Non-native HL7 FHIR solution where health data is FAIRified by
    using HL7 FHIR. **This may be further classified considering (a)
    pure HL7 FHIR based solutions or (b) hybrid solutions (i.e., a
    combination of HL7 FHIR and non-FHIR solutions)

In the first case, i.e., a native HL7 FHIR solution, it is reasonable to
assume by design that the HL7 FHIR <span class="underline">resources are
"the" FAIR data objects</span>, (for a definition of a FAIR data
object see section 4.1 of the EC publication [Turning FAIR into
reality](https://ec.europa.eu/info/publications/turning-fair-reality_en) ) with
all the consequences that this assumption implies in term of data and
metadata representation.

This page summarizes some best practices for implementing the FAIR
principles for the cases where this assumption can be considered true. 

Throughout the FAIR principles referred to in this guide, the phrase
‘(meta)data’ means that the principle should be applied to both
metadata and data.

### Native HL7 FHIR solution

#### Findability

##### F1: (Meta)data are assigned a globally unique and persistent identifier

The first and arguably most important FAIR principle
is [F1](https://www.go-fair.org/fair-principles/f1-meta-data-assigned-globally-unique-persistent-identifiers/):
"(Meta)data are assigned a globally unique and persistent identifier"
(adapted from [GO-FAIR F1
principle](https://www.go-fair.org/fair-principles/f1-meta-data-assigned-globally-unique-persistent-identifiers/)).
In practice, often another property of such identifiers is added, namely
machine resolvability, to enable retrieval of metadata and data by
machines.

When medical data is exposed as HL7 FHIR Resources, then automatically,
per the base [Resource](https://www.hl7.org/fhir/resource.html) type,
the resource will have a
resource [<span class="underline">id</span>](https://www.hl7.org/fhir/resource-definitions.html#Resource.id) (named
in HL7 FHIR as the "logical" id in opposition to the business
identifiers), that "Once assigned, this value never changes": this
identifier is persistent per its specification. When combined with the
URL prefix of the HL7 FHIR server, a globally unique and also machine
resolvable identifier can be constructed (this is the so called
'location URL').

Example: are two GUPRIs (*Globally Unique, Persistent and Resolvable
Identifiers*) for synthetic Patient records from public HL7 FHIR test
servers: [<span class="underline">http://test.fhir.org/r4/Patient/10</span>](http://test.fhir.org/r4/Patient/10) and [<span class="underline">https://server.fire.ly/Patient/3591a18b-3eeb-4551-9688-22794aaf9911</span>](https://server.fire.ly/Patient/3591a18b-3eeb-4551-9688-22794aaf9911).
Both identifiers resolve to a description of the resource or the
resource itself. **However**, if the URL at which the HL7 FHIR resource
server is hosted changes, or if resources are copied to a different
server, all the identifiers thus constructed would change as well.

The page [FHIR identifiers and FAIR principles on
IDs](https://confluence.hl7.org/display/SOA/FHIR+identifiers+and+FAIR+principles+on+IDs) provides
an overview on how HL7 FHIR resources can be identified and under which
conditions these identifiers fulfill the FAIR principles on IDs: 

Since these identifiers are not mutually exclusive, it is always
desirable that - as appropriate - more identifiers (business
identifiers, canonical url) are used, so that, depending on the context
of use and the kind of resource shared, the most proper identifier is
selected. For example, it might advisable that any resource describing
metadata at the study level would be also identifiable through permanent
identifier as for example DOIs
(example <https://doi.org/10.5281/zenodo.4474373>); this will
consolidate the persistency and facilitate the search and the access of
these objects beyond HL7 FHIR. While the registration of DOIs for any
created and shared HL7 FHIR resource might be too costly. 

**Summary recommendation**: Establish adequate organizational and
technical solutions to assure that the end point where resources are
published is 'always' resolvable. Assign, as appropriate, also other
identifiers (business identifiers, canonical url). Determine based on a
cost/effectiveness evaluation what are the resources for which it is
worth to register identifiers on a public permanent registry
(e.g.  [https://doi.org/](https://doi.org/10.5281/zenodo.4474373)).
Use both reference and identifier elements in the Reference data type.
Promote the specification of HL7 FHIR profiles enforcing these choices.

##### F2: Data are described with rich metadata (a plurality of accurate and relevant attributes, defined by R1)

The rationale behind this principle is that someone should be able to
find data based on the information provided by their metadata, even
without the data’s identifier (adapted from [GO-FAIR F2
principle](https://www.go-fair.org/fair-principles/f2-data-described-rich-metadata/)).
HL7 FHIR provides different means to fulfill this scope either
considering ['intrinsic'](https://www.go-fair.org/fair-principles/f2-data-described-rich-metadata/) , as
well as
‘[contextual](https://www.go-fair.org/fair-principles/f2-data-described-rich-metadata/)’
metadata.

All HL7 FHIR Resources have
a [Meta](https://www.hl7.org/fhir/resource-definitions.html#Resource.meta) element
which includes some intrinsic resource metadata as for example
versionId, lastUpdated, source, profile, security labels and tags . They
are technical in nature and apart from profile do not really address the
context of the data provided in the resource. The Meta field is not
mandatory, but it is advised to at least populate the versionId and
lastUpdated fields. Moreover, each resource is a collection of elements
describing the data and the context in which this data has been
generated and exists (metadata) and that can be used for searches. There
are finally particular HL7 FHIR resources, as Citation, Library,
Provenance and others, that can be used to capture specific metadata
information.

The adoption of HL7 FHIR can therefore enable the documentation of
'rich' metadata, but the conformance with HL7 FHIR is not a necessarily
a sufficient condition for fulfilling this requirement.

In fact, in order to satisfy the 'richness' criterium, the use case is
important - because whether metadata is 'rich' enough would really
depend on what users would need to search on in terms of metadata fields
to find the resources.

The capability of the used resources to capture the expected information
is a pre-condition for enabling the data search via HL7 FHIR APIs, that
needs to be supported by the HL7 FHIR server used. In fact not all the
HL7 FHIR resource elements are by default searchable and  it is not
required that a HL7 FHIR server support all the 'standard' search
parameters.

Therefore, depending on the use case, implementers should identify what
are the minimal, recommended and suggested intrinsic and contextual
metadata that should be returned to describe the data and what is the
subset of these elements for which HL7 FHIR searches should be
performed.

To do that, implementers should look for specific HL7 FHIR
Implementation Guides (IG) that cover the Resource types and the use
case of interest; and/or define HL7 FHIR IGs that apply in their usage
context. These IGs should contain HL7 FHIR profiles for the used
resources and capability statements describing what a HL7 FHIR server
should offer to satisfy this findability principle in that use case.

**Summary recommendation**: Communities should define what rich metadata
are sufficient to describe the data and which should be used for HL7
FHIR searches. This should be formalized with appropriate HL7 FHIR
conformance resources in HL7 FHIR implementation guides. 

##### F3: Metadata clearly and explicitly include the identifier of the data they describe

This simple and obvious principle is of critical importance to FAIR. The
metadata and the dataset they describe are usually separate resources
(adapted from [GO-FAIR F3
principle](https://www.go-fair.org/fair-principles/f3-metadata-clearly-explicitly-include-identifier-data-describe/)).
The association between a metadata resource description and the dataset
should be made explicit by mentioning a dataset’s globally unique and
persistent identifier in the metadata.

The F3 principle can be interpreted differently depending on how
metadata information are implemented in HL7 FHIR, but it is in general
possible to satisfy this requirement. When metadata is represented by a
HL7 FHIR resource distinct from those recording data (e.g. a Citation
resource pointing to the used data) the mechanism typically used by HL7
FHIR to assure this link is through either the Reference datatype or
canonical urls. The Reference data type supports either (a) the direct
reference to the HL7 FHIR resource with absolute or relative url based
on the resource logical ID; and (b) the reference to its business
identifier. 

In the cases when metadata information are recorded in the same HL7 FHIR
resource of the data they describe, data are uniquely identified within
the resource either by their path ( e.g.
Evidence.statistic.modelCharacteristic.value) or by their identifiers
(e.g. Questionnaire.item.linkId).

All the adopted identifiers (see F1 recommendations) should always be
included in any resource record that holds data for the resource in
question. Since this is usually done in HL7 FHIR by referring other HL7
FHIR resources, both references (reference and identifier) should be
provided.

**Summary recommendation**: When applicable include in the references
both the resource and the business identifier. The metadata description
should always be semantically coherent and machine resolvable even when
the the resource data itself is no longer available, for a variety of
potential reasons.

##### F4: (Meta)data are registered or indexed in a searchable resource

Identifiers and rich metadata descriptions alone will not ensure
‘findability’ on the internet. Perfectly good data resources may go
unused simply because no one knows they exist. If the availability of a
digital resource such as a dataset, service or repository is not known,
then nobody (and no machine) can discover it (adapted from [GO-FAIR F4
principle](https://www.go-fair.org/fair-principles/f4-metadata-registered-indexed-searchable-resource/)).

In order to adhere to this F4 principle, the HL7 FHIR [search
framework](https://www.hl7.org/fhir/search.html) can be used. The extent
of data and metadata that have to be registered or indexed would however
depend on what users would need to search to find the resources.

Most HL7 FHIR servers implement one or more search parameters, so by
publishing resources into such a HL7 FHIR server may be sufficient to
fulfill the FAIR principle F4 but this might not be enough.

Therefore, it would make sense to look for specific HL7 FHIR Conformance
resources and/or Implementation Guides that describe the metadata and
data elements that shall or should be provided to a HL7 FHIR server for
the use case in question and registered or indexed by that server.

HL7 FHIR CapabilityStatement, SearchParameter, StructureDefiniton ,
possibly documented within a Implementation Guide should be used to
document this. 

**Summary recommendation**: Each community should define what are the
relevant metadata and data that have to be registered or indexed by a
HL7 FHIR server for each supported resource to fulfil this principle;
formalizing them with HL7 FHIR conformance resources and implementation
guides.

#### Accessibility

##### A1: Metadata and data are retrievable by each of their identifiers using a standardised communication protocol

FHIR is described as a 'RESTful' specification based on common industry
level use of the term REST, in this RESTful framework, transactions are
performed directly on the server resource using an HTTP
request/response.

**Summary recommendation**: This principle is covered by virtue of using
HL7 FHIR RESTful API

##### A1.1: The protocol is open, free and universally implementable

Both HL7 FHIR RESTful API and the http protocols  are open, free
and universally implementable.

There are different definitions of what an 'open standard' is, but also
considering openness of access; of the process and of the rights of
use, HL7 FHIR fulfills all of them. It is released under Creative
Commons "No Rights Reserved"
([CC0](http://creativecommons.org/publicdomain/zero/1.0/)) licence and
it is globally implemented. 

**Summary recommendation**: This principle is covered by virtue of using
HL7 FHIR RESTful API

##### A1.2: The protocol allows for an authentication and authorisation, where necessary

It often makes sense to request users to create a user account for a
repository. This allows authentication of the owner (or contributor) of
each dataset, and to potentially set user-specific rights. This can also
affect the choice of the repository that is suitable to share data and
associate metadata.

HL7 FHIR is not 'per se' a security protocol, nor does it define any
security related functionality; however it defines exchange protocols
and content models (<https://www.hl7.org/fhir/exchange-module.html>)
that can be used with various open security protocols such as** **[HMAC
authentication](https://en.wikipedia.org/wiki/HMAC),
[HTTPS](https://en.wikipedia.org/wiki/HTTPS),
[OAuth2](https://oauth.net/2/) or
[SMART](http://www.hl7.org/fhir/smart-app-launch/) (see
e.g. <https://hl7.org/fhir/security.html#http> for Communications
Security in HL7 FHIR)

**Summary recommendation**:  Each community should declare what are the
security standards there are adopted in their context.

##### A2: Metadata should be accessible even when the data is no longer available

This principle is important because there can be many reasons why data
are no longer available whereas the associated metadata should be a
permanent record to describe the data. Future reuse of available data
requires separately identified metadata and it also crucial to enable
future reproducibility of new data for more science.

The practical application of this A2 FAIR principle to data and metadata
from the clinical sciences and specifically should consider the
following aspects.

  - Some clinical data elements may serve as metadata for other data
    elements. If all data elements have identifiers compliant with FAIR
    principle, A1 being global, unique, persistent and resolvable by
    machine (GUPRI) it should be possible to comply with this FAIR
    principle, A2.

  - Clinical data and associated metadata can be stored on multiple HL7
    FHIR servers.

  - To maintain FAIR compliance, it is critical to manage and maintain
    the persistency aspect of GUPRIs (independently on HL7 FHIR) for all
    data and metadata elements.

In the HL7 FHIR space this requirement is fulfilled as far as metadata
and data can be represented with distinct resources (see also [Metadata
and data page](metadata.html)) and the used identifiers comply with FAIR
principle, F1.

**Summary recommendations:** follow F1 recommendations.

#### Interoperability

##### I1: Metadata and data use a formal, accessible, shared, and broadly applicable language for knowledge representation

There are different ways to interpret 'language knowledge
representation', for example the capability to:

  - have a machine readable physical representation, e.g. JSON

  - represent and formalize healthcare models and data;

  - share clinical knowledge artifacts;

  - provide an expression logic

  - strive for semantic computable interoperability (i.e. semantic
    interoperability between machines)

HL7 FHIR supports XML, JSON and RDF machine readable physical
representations. It provides in general a formal (FHIR Infrastructure,
the core framework on which HL7 FHIR depend, is a Normative part of HL7
FHIR); accessible and shared (the HL7 FHIR standard is public,
accessible and usable by everyone) and broadly applicable language: HL7
FHIR is widely used in the Healthcare for covering a wide range of
domains and use cases (from genetic to administrative data for
representing healthcare related models and data). The HL7 FHIR Clinical
Reasoning module provides "resources and operations to enable the
representation, distribution, and evaluation of clinical knowledge
artifacts such as clinical decision support rules, quality measures,
public health indicators, order sets, clinical protocols, and evidence
summaries.". It enables finally the representation of logic using
languages such as HL7 FHIRPath and Clinical Quality Language (CQL).

FHIR resources can be used together with other knowledge representation
approaches, including SNOMED CT Compositional Grammar 

Thus, if we are looking to the first four aspects this principle
is covered by virtue of using HL7 FHIR resources to represent metadata
and data.

Concerning instead the last point, the compliance with HL7 FHIR, even if
it is a strong enabler, may not be sufficient for the semantic
computable interoperability. For example a vocabulary used by the sender
or an extension defined in a specific context might not be understood by
the receiver. To strive for semantic computable interoperability
communities are invited to agree on context specific HL7 FHIR
Implementation Guides, relying as possible on existing ones. 

**Summary recommendation**: Even though in general this
principle is covered by virtue of using HL7 FHIR, to strive
to semantic computable interoperability communities should agreed on
common vocabularies, profiles and other conformance resources that
applies for their context of use. 

##### I2: Metadata and data use vocabularies that follow the FAIR principles

HL7 FHIR provides a formal way to bind codeable elements with
vocabularies (intended as terminologies), but with very few exceptions,
it doesn't impose the usage of any of them.

HL7 FHIR includes terminology resources and API that may facilitate the
fulfillment of some 'technical' FAIR principles as the unique, global
persistent identification of vocabulary metadata and data (e.g. by using
the canonical URL).

To satisfy this principle HL7 FHIR implementers should make an
assessment of the FAIRness of the terminologies to be used and  enforce
the adoption of the FAIR-compliant vocabularies.

**Summary recommendation**:  HL7 FHIR implementers should select
FAIR-compliant vocabularies, preferably managed through HL7 FHIR 
terminology services.

This choice should be formalized through  community specified HL7 FHIR
Implementation Guide, including appropriate conformance and terminology
resources.

**For future consideration:** realize a catalog of FAIR-compliant
vocabularies.

##### I3: Metadata and data include qualified references to other metadata and data

A qualified reference is intended as a cross-reference that explains its
intent. 

HL7 FHIR technically supports different kinds of references among HL7
FHIR resources and also to non-FHIR objects.

This capability of HL7 FHIR doesn't guarantee however "per se" that as
many meaningful links between metadata and data resources are used to
enrich the contextual knowledge about the data (that is the goal).

Thus, if on one hand this principle is technically satisfied by HL7
FHIR, HL7 FHIR implementers should determine what are the links among
resources that are needed to provide a sufficient contextual knowledge
for the scope of their community.

**Summary recommendation**:  HL7 FHIR implementers should determine what
are the qualified references to other resources that are needed to
provide a sufficient contextual knowledge for the scope of their
community. This should be formalized through a community HL7 FHIR
Implementation Guide.

#### Reusability

##### R1: Metadata and data are richly described with a plurality of accurate and relevant attributes

This principle is related the F2, but while F2 focuses on metadata that
allows its discovery, R1 focuses on the context under which the data
were generated as well as they should been used.

General considerations made for F2 about HL7 FHIR apply also for R1, HL7
FHIR is therefore an enabling factor, but the conformance with HL7 FHIR
is not necessarily a sufficient condition for fulfilling this
requirement.

The fact data and metadata are 'richly described' depends on the context
of use; therefore, depending on the use case, implementers should
identify what are the minimal, recommended and suggested intrinsic and
contextual information that should be returned to describe the data and
make them actually USEFUL in a particular context.

To do that implementers should look for specific HL7 FHIR Implementation
Guides (IG) that cover the Resource types and the use case of interest;
and/or define HL7 FHIR IGs that apply in their usage context.

**Summary recommendation:** Communities should define which rich
metadata are sufficient to describe data to make them useful in their
context. This should be formalized with appropriate HL7 FHIR conformance
resources in HL7 FHIR implementation guides.

##### R1.1: Metadata and data are released with a clear and accessible data usage license

HL7 FHIR provides different means to specify the license and the
conditions under which data can be used. For example, a resource may
convey specific security metadata by using the security labels, enabling
policy fragments to accompany the resource data; the Citation resource
offers a copyright element to covey human readable copyright information
at different level of granularity (Citation , abstract, cited
artefacts); the Consent resource can be used to record choices which
permits or denies identified recipient(s) or recipient role(s) to
perform one or more actions within a given policy context, for specific
purposes and periods of time.

The solution to be adopted may change depending on the type of data and
the context of use.

The adoption of HL7 FHIR is not however a sufficient condition for
fulfilling this requirement, implementers should therefore define how
this requirement is supposed to be met.

**Summary recommendation:** Published HL7 FHIR resources have to include
clear references to the usage license. Communities should specify in
community HL7 FHIR implementation guide how - for each kind of data -
this is realized in their context.

##### R1.2: Metadata and data are associated with detailed provenance

This principle focuses on specific type of contextual data as where the
data came from, how they have been processed; if it has been published
before; who need to be cited and/or acknowledged....

Most of this information may be captured in HL7 FHIR by using the
Provence resource enabling the recording of data sources and of the
actions applied on them at different level of granularity.

Other kinds of resources, e.g. the Citation, could be used for capturing
instead publication related infos.

As for some other principles, HL7 FHIR can technically support the data
FAIRness, but it is not a sufficient condition for fulfilling this
requirement; that depends also on the capability of the organization to
capture and record this information.

**Summary recommendation:** Implementers are encouraged to use the
Provenance resource to improve description the data context. Communities
should specify in community HL7 FHIR implementation guide how this
requirement is realized in their context.

##### R1.3: Metadata and data meet domain-relevant community standards

HL7 FHIR is a globally recognized standard in the health domain, that
can be used to represent human and machine-readable metadata and data
information.  
It defines also formal profiling mechanisms to specify community agreed
rules.

There are several published HL7 FHIR Implementation Guides describing
how HL7 FHIR should be used for specific scopes.

Beyond this, there might be implementation independent standards (e.g.
clinical guidelines) a community wish to refer to.

Implementers are therefore suggested to look for existing HL7 FHIR
implementation guides or define new ones to cover appropriately the
community expectations.

**Summary recommendation:** Even though HL7 FHIR can be considered it
self a 'domain-relevant community standard' , implementers are strongly
suggested to identify and if needed specify appropriate  HL7 FHIR
Implementation Guides covering the community expectations in terms of
models, vocabularies and so on for their context of use.


---

// File: input/pagecontent/FHIRandRDAMetrics.md

This page integrates the [HL7 FHIR and FAIR principles](FAIR.html) page
providing an overview of the relationship between the FAIR Data Maturity
Model described in the [RDA Indicators](RDAMetrics.html) page and the
HL7 FHIR standard, independently on the implementation approach adopted
(Native Vs non-Native FHIR architectures, see [HL7 FHIR and FAIR
principles](FHIRandFAIR.html) for more details).

### Findable

<table style="border-color: #000000; width:80 1px solid gray;">
<thead>
<tr style="border: 1px solid gray; background-color: #E5E4E2;">
<th><strong>INDICTOR_ID</strong></th>
<th><strong>INDICATORS</strong></th>
<th><strong>PRIORITY</strong></th>
<th><strong>Interpretation for HL7 FHIR Data</strong></th>
<th><strong>Notes</strong></th>
</tr>
</thead>
<tbody>
<tr style="border: 1px solid gray; ">
<td>RDA-F1-01M</td>
<td>Metadata is identified by a persistent identifier</td>
<td>Essential</td>
<td><p>HL7 FHIR provides different means to assign persistent identifiers to FHIR resources. See <a href="FHIRidentifiers.html">FHIR identifiers and FAIR principles on IDs</a> for more details. </p>
<p>The page <a href="metadata.html">Metadata and data</a> describes some of the challenges in implementing distinct data and metadata by using HL7 FHIR.</p>
<p>Depending on the usage context and on the kind of metadata to deal with, implementers may choose different means , including a partial fulfillment of the requirement or the adoption of hybrid solutions (FHIR and non-FHIR).</p></td>
<td><p>Given that FHIR provides means to uniquely identify resources, the key point of this requirement is a clear identification of what a metadata is (see also the page <a href="metadata.html">Metadata and data</a> ).</p>
<p>If there are no doubts that metadata are the “data about data”, more complex is to turn this definition in the reality, with a clear distinction between data and metadata. In fact, what is “data” and what is “metadata” is a matter of perspective: based on the context, the same information can be in fact considered as part of the data or of the metadata. </p>
<p>In consideration of this, the expectation of having a single persistent and unique ID that identifies the metadata FAIR data object, distinct from that describing the data one, cannot be always satisfied in the FHIR space, except for specific contexts.</p>
<p>A pragmatic approach is therefore suggested in the evaluation of this requirement, determining case by case, and in dependence of the type of data (study level or subject level data), what are the actual information to label as metadata, that should and can be distinguished by the associated data.</p>
<p>Other information, that could be considered as well as metadata might be recorded in the same object containing the data and used to search them.</p></td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-F1-01D</td>
<td>Data is identified by a persistent identifier</td>
<td><span class="underline">Essential</span></td>
<td><p>See RDA-F1-01M for the general considerations on the identification of the FHIR resources.</p>
<p>If the organization assures the persistency of the FHIR identifiers, this indicator is automatically fulfilled when data is represented by a single FHIR resource.</p>
<p>This doesn't exclude more complex situations that need to be analyzed case by case.</p></td>
<td><p>See RDA-F1-01M.<br />
<br />
In consideration of this, the way a single persistent and unique ID is used to identify the data FAIR data object may depend on the data design.</p>
<p>This requirement is fulfilled when data is represented by FHIR resources.</p></td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-F1-02M</td>
<td>Metadata is identified by a globally unique identifier</td>
<td>Essential</td>
<td>See RDA-F1-01M</td>
<td>See RDA-F1-01M.</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-F1-02D</td>
<td>Data is identified by a globally unique identifier</td>
<td>Essential</td>
<td>See RDA-F1-01D</td>
<td>See RDA-F1-01D.</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-F2-01M</td>
<td>Rich metadata is provided to allow discovery</td>
<td>Essential</td>
<td><p>HL7 FHIR provides means to record metadata information and to enable the search of data based on them. Moreover through FHIR profiling can enforce their adoption by implementers.</p>
<p>Communities should define what is meant with "rich" metadata for the use cases they need to cover and possibly formalize them by using FHIR profiles and implementation guides.</p></td>
<td><p>The rationale behind this principle is that someone should be able to find data based on the information provided by their metadata, even without the data’s identifier (adapted from GO-FAIR F2 principle). </p>
<p>Whether metadata is 'rich' enough would therefore really depend on what users would need to search on in terms of metadata fields to find the resources. This 'richness' criterium is then use case dependent. </p>
<p>Please refer to <a href="metadata.html">Metadata and data</a>  about a more general discussion about issues in implementing metadata in FHIR.<br />
<br />
The adoption of FHIR can enable the documentation of metadata but claiming the conformance with FHIR is not a sufficient <span class="underline">condition</span> for fulfilling this requirement.</p>
<p>Communities should define what is meant with "rich" metadata for the use cases they need to cover; indicating what are the information that have to be recorded, possibly formalized as FHIR profiles; and the kind of searches that servers should support, possibly formalized as FHIR Capability Statement.</p></td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-F3-01M</td>
<td>Metadata includes the identifier for the data</td>
<td>Essential</td>
<td>This is in general true, the way this is satisfied depends on how metadata and data are represented in HL7 FHIR. (See also RDA-F1-01M) FHIR provides several mechanisms to refer other FHIR resources documenting data; implementers should declare how this is realized; possibly through community FHIR profiles and Implementation Guides.</td>
<td>In dependence on how the FAIR metadata are realized in FHIR (see e.g., RDA-F1-01M); different solutions can be adopted to refer the data objects.<br />
<br />
This can be done referencing the target FHIR resource, per business identifier or per url. Implementers should use appropriate FHIR conformance resources to declare how this is done.</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-F4-01M</td>
<td>Metadata is offered in such a way that it can be harvested and indexed</td>
<td>Essential</td>
<td><p>The way this is satisfied depends on how FAIR metadata and data objects are represented in HL7 FHIR.</p>
<p>In order to adhere to this requirement, the FHIR <a href="https://www.hl7.org/fhir/search.html">search framework</a> can be used. The extent of data and metadata that have to be registered or indexed would however depend on what users would need to search to find the resources.</p>
<p>Each community should define what are the relevant metadata and data that have to be registered or indexed by a FHIR server for each supported resource to fulfil this principle; formalizing them with FHIR conformance resources and implementation guides.</p></td>
<td><p>Identifiers and rich metadata descriptions alone will not ensure ‘findability’ on the internet. Perfectly good data resources may go unused simply because no one knows they exist. If the availability of a digital resource such as a dataset, service or repository is not known, then nobody (and no machine) can discover it (adapted from GO-FAIR F4 principle).</p>
<p>FHIR provides FHIR metadata datatypes and resource interfaces. FHIR resources allow the documentation of the data context. The architectures adopted should ensure that the FHIR server hosting the data set has strong searching capabilities.</p>
<p>Implementers should look for specific FHIR Conformance resources and/or Implementation Guides that describe the metadata and data elements that shall or should be provided to a FHIR server for the use case in question and registered or indexed by that server. HL7 FHIR CapabilityStatement, SearchParameter, StructureDefiniton , possibly documented within a Implementation Guide should be used to document this. </p>
<p>See also RDA-F2-01M and RDA-F3-01M</p></td>
</tr>
</tbody>
</table>

### Accessible

<table style="border-color: #000000; width:80 1px solid gray;">
<thead>
<tr style="border: 1px solid gray; background-color: #E5E4E2;">
<th><strong>INDICATOR_ID</strong></th>
<th><strong>INDICATORS</strong></th>
<th><strong>PRIORITY</strong></th>
<th><strong>Interpretation for HL7 FHIR Data</strong></th>
<th><strong>Notes</strong></th>
</tr>
</thead>
<tbody>
<tr style="border: 1px solid gray; ">
<td>RDA-A1-01M</td>
<td>Metadata contains information to enable the user to get access to the data</td>
<td>Important</td>
<td>If RDA-F3-01M is true, this is true.<br />
<br />
This is in general true, since depending on how metadata and data FAIR objects are represented in FHIR, different means are provided by this standard to enable the access to the referred data.<br />
<br />
Communities should agree what are the relevant metadata information enabling the access of data in their context and formalize and enforce their usage by specifying appropriate FHIR profiles and Implementation Guides.</td>
<td><p>Please refer to RDA-F1-01M and RDA-F1-01D for the discussion on distinct and identifiable metadata and data FAIR objects.<br />
<br />
In the FHIR REST paradigm _"the location of a resource instance is an absolute URI constructed from the server base address at which the instance is found, the resource type and the Logical ID, such as</p>
<p>http://example.org/fhir/Patient/123 (where 123 is the Logical Id of a Patient resource). When the location is an HTTP address, this address can generally be used to retrieve or manipulate the resource."_</p>
<p>Depending on the FAIR data design, different FHIR mechanisms can be used to refer the FAIR data, e.g. by using direct or reverse references to other FHIR resources, or referring data business identifiers. FHIR also provides mechanisms to enable the access to non-FHIR data.</p>
<p>The solution architecture should ensure that the metadata FHIR resource includes a reference to the actual data or information on how to access it directly or indirectly.</p></td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-A1-02M</td>
<td>Metadata can be accessed manually (i.e. with human intervention)</td>
<td>Essential</td>
<td><p>This is not related to the FHIR standard, but on the capabilities offered by the system/platform implementing the services.</p>
<p>The metadata FHIR resources should provide information on how to access the data, if a manual access is foreseen.</p></td>
<td>Concerning the ability to identify FAIR metadata as distinct and identifiable FHIR resource(s), please refer to item RDA-F1-01M</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-A1-02D</td>
<td>Data can be accessed manually (i.e. with human intervention)</td>
<td>Essential</td>
<td>See RDA-A1-02M</td>
<td>See RDA-A1-02M</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-A1-03M</td>
<td>Metadata identifier resolves to a metadata record</td>
<td>Essential</td>
<td>If RDA-F1-01M is true, this is true<br />
<br />
This is in general true, since depending on how metadata and data FAIR objects are represented in FHIR different means are provided by this standard to enable the access to the referred metadata.<br />
<br />
Communities can enforce this requirement by using community FHIR profiles and Implementation Guides.</td>
<td>Please refer to RDA-F1-01M and RDA-F1-01D for the discussion on distinct and identifiable metadata and data FAIR objects.</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-A1-03D</td>
<td>Data identifier resolves to a digital object</td>
<td>Essential</td>
<td>If RDA-F1-01D is true, this is true.<br />
<br />
This is in general true, since depending on how metadata and data FAIR objects are represented in FHIR different means are provided by this standard to enable the access to the referred data.<br />
<br />
Communities can enforce this requirement by using community FHIR profiles and Implementation Guides.</td>
<td>Please refer to RDA-F1-01M and RDA-F1-01D for the discussion on distinct and identifiable metadata and data FAIR objects.</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-A1-04M</td>
<td>Metadata is accessed through standardised protocol</td>
<td>Essential</td>
<td>FHIR specifies standardized mechanisms to access FHIR resources</td>
<td><p>Please refer to RDA-F1-01M and RDA-F1-01D for the discussion on distinct and identifiable metadata and data FAIR objects</p>
<p>This requirement is typically fulfilled if the metadata object is expressed in HL7 FHIR and available in a FHIR server.</p></td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-A1-04D</td>
<td>Data is accessible through standardised protocol</td>
<td>Essential</td>
<td>FHIR specifies standardized mechanisms to access FHIR resources</td>
<td><p>Please refer to RDA-F1-01M and RDA-F1-01D for the discussion on distinct and identifiable metadata and data FAIR objects</p>
<p>This requirement is typically fulfilled if the data object is expressed in HL7 FHIR and available in a FHIR server.</p></td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-A1-05D</td>
<td>Data can be accessed automatically (i.e. by a computer program)</td>
<td>Important</td>
<td>FHIR specifies standardized mechanisms to automatically access FHIR resources (e.g. FHIR API)</td>
<td><p>Please refer to RDA-F1-01M and RDA-F1-01D for the discussion on distinct and identifiable metadata and data FAIR objects</p>
<p>This is fulfilled by the existence of the data in a FHIR server.</p></td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-A1.1-01M</td>
<td>Metadata is accessible through a free access protocol</td>
<td>Essential</td>
<td>FHIR specifies free access mechanisms to access FHIR resources</td>
<td>HL7 FHIR specifications are published under Creative Commons "No Rights Reserved" (CC0 ).Please refer to RDA-F1-01M and RDA-F1-01D for the discussion on distinct and identifiable metadata and data FAIR objects</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-A1.1-01D</td>
<td>Data is accessible through a free access protocol</td>
<td>Important</td>
<td>FHIR specifies free access mechanisms to access FHIR resources</td>
<td>HL7 FHIR specifications are published under Creative Commons "No Rights Reserved" (CC0). Please refer to RDA-F1-01M and RDA-F1-01D for the discussion on distinct and identifiable metadata and data FAIR objects</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-A1.2-01D</td>
<td>Data is accessible through an access protocol that supports authentication and authorisation</td>
<td>Useful</td>
<td>HL7 FHIR is not 'per se' a security protocol, nor does it define any security related functionality; however it defines exchange protocols and content models (<a href="https://www.hl7.org/fhir/exchange-module.html">https://www.hl7.org/fhir/exchange-module.html</a>) that can be used with various open security protocols such as <a href="https://en.wikipedia.org/wiki/HMAC">HMAC authentication</a>, <a href="https://en.wikipedia.org/wiki/HTTPS">HTTPS</a>, <a href="https://oauth.net/2/">OAuth2</a> or <a href="http://www.hl7.org/fhir/smart-app-launch/">SMART</a> (see e.g. <a href="https://hl7.org/fhir/security.html#http">https://hl7.org/fhir/security.html#http</a> for Communications Security in HL7 FHIR)</td>
<td>Please refer to RDA-F1-01M and RDA-F1-01D for the discussion on distinct and identifiable metadata and data FAIR objects.</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-A2-01M</td>
<td>Metadata is guaranteed to remain available after data is no longer available</td>
<td>Essential</td>
<td><p>FHIR provides mean to fulfils this requirements, excepting for the metadata information that are recorded in the same FHIR resource documenting the data.</p>
<p>The fulfillment of this requirement is not however determined by the technical capabilities of FHIR, but it depends also on architectural and organizational choices.<br />
<br />
Community can enforce the adoption of suitable FAIR data object design choices to enforce this requirement, by specifying community FHIR profiles and implementation guides.</p></td>
<td><p>Please refer to RDA-F1-01M and RDA-F1-01D for the discussion on distinct and identifiable metadata and data FAIR objects</p>
<p>This principle is important because there can be many reasons why data are no longer available whereas the associated metadata should be a permanent record to describe the data. Future reuse of available data requires separately identified metadata and it also crucial to enable future reproducibility of new data for more science. The practical application of this A2 FAIR principle to data and metadata from the clinical sciences and specifically, supported by the HL7 FHIR standards should consider the following recommendations.</p>
<ul>
<li><p>Some clinical data elements may serve as metadata for other data elements. If all data elements have identifiers are compliant with FAIR principle, A1 being global, unique, persistent and resolvable by machine (GUPRI) it should be possible to comply with this FAIR principle, A2.</p></li>
<li><p>Clinical data and associated metadata can be stored on multiple FHIR servers. This will present no issues if compliant with the FAIR principles of F1 and A2.</p></li>
<li><p>To maintain FAIR compliance it is critical to manage and maintain the persistency aspect of GUPRIs (independently on FHIR) for all data and metadata elements.</p></li>
</ul></td>
</tr>
</tbody>
</table>

### Interoperable

<table style="border-color: #000000; width:80 1px solid gray;">
<thead>
<tr style="border: 1px solid gray; background-color: #E5E4E2;">
<th><strong>INDICATOR_ID</strong></th>
<th><strong>INDICATORS</strong></th>
<th><strong>PRIORITY</strong></th>
<th><strong>Interpretation for HL7 FHIR Data</strong></th>
<th><strong>Notes</strong></th>
</tr>
</thead>
<tbody>
<tr style="border: 1px solid gray; ">
<td>RDA-I1-01M</td>
<td>Metadata uses knowledge representation expressed in standardised format</td>
<td>Important</td>
<td><p>FHIR provides support for standardized knowledge representation</p>
<p>The RDA-I1 (01M, O1D,  O2M, O2D) indicators are in general covered by virtue of using HL7 FHIR, however, to strive to semantic computable interoperability, communities should agreed on common vocabularies, profiles and other conformance resources that applies for their context of use.  </p></td>
<td><p>Please refer to RDA-F1-01M and RDA-F1-01D for the discussion on distinct and identifiable metadata and data FAIR objects</p>
<p>There are different ways to interpret 'knowledge representation expressed in standardised format', for example the capability to:</p>
<ul>
<li><p>have a machine readable physical representation, e.g. JSON</p></li>
<li><p>represent and formalize healthcare models and data;</p></li>
<li><p>share clinical knowledge artifacts;</p></li>
<li><p>provide an expression logic</p></li>
<li><p>strive for semantic computable interoperability (i.e. semantic interoperability between machines)</p></li>
</ul>
<p>HL7 FHIR supports XML, JSON and RDF machine readable physical representations. It provides in general a formal (FHIR Infrastructure, the core framework on which FHIR depend, is a Normative part of FHIR); accessible and shared (the HL7 FHIR standard is public, accessible and usable by everyone) and broadly applicable language: HL7 FHIR is widely used in the Healthcare for covering a wide range of domains and use cases (from genetic to administrative data for representing healthcare related models and data). The FHIR Clinical Reasoning module provides "resources and operations to enable the representation, distribution, and evaluation of clinical knowledge artifacts such as clinical decision support rules, quality measures, public health indicators, order sets, clinical protocols, and evidence summaries.". It enables finally the representation of logic using languages such as FHIRPath and Clinical Quality Language (CQL).</p>
<p>FHIR resources can be used together with other knowledge representation approaches, including SNOMED CT Compositional Grammar </p>
<p>Thus, if we are looking to the first four aspects this principle is covered by virtue of using HL7 FHIR resources to represent metadata and data.</p>
<p>Concerning instead the last point, the compliance with FHIR, even if it is a strong enabler, may not be sufficient for the semantic computable interoperability. For example a vocabulary used by the sender or an extension defined in a specific context might not be understood by the receiver. To strive for semantic computable interoperability communities are invited to agree on context specific FHIR Implementation Guides, relying as possible on existing ones. </p></td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-I1-01D</td>
<td>Data uses knowledge representation expressed in standardised format</td>
<td>Important</td>
<td>See RDA-I1-01M</td>
<td>See RDA-I1-01M</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-I1-02M</td>
<td>Metadata uses machine-understandable knowledge representation</td>
<td>Important</td>
<td>See RDA-I1-01M</td>
<td>See RDA-I1-01M</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-I1-02D</td>
<td>Data uses machine-understandable knowledge representation</td>
<td>Important</td>
<td>See RDA-I1-01M</td>
<td>See RDA-I1-01M</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-I2-01M</td>
<td>Metadata uses FAIR-compliant vocabularies</td>
<td>Important</td>
<td><p>HL7 FHIR provides a formal way to bind codeable elements with vocabularies (intended as terminologies), but with very few exceptions, it doesn't impose the usage of any of them.</p>
<p>Communities should select FAIR-compliant vocabularies, preferably managed through FHIR  terminology services.</p>
<p>This choice should be formalized  through  community specified FHIR Implementation Guide, including appropriate conformance and terminology resources.</p></td>
<td><p>Please refer to RDA-F1-01M and RDA-F1-01D for the discussion on distinct and identifiable metadata and data FAIR objects HL7</p>
<p>HL7 FHIR provides a formal way to bind codeable elements with vocabularies (intended as terminologies), but with very few exceptions, it doesn't impose the usage of any of them.</p>
<p>HL7 FHIR includes terminology resources and API that may facilitate the fulfillment of some 'technical' FAIR principles as the unique, global persistent identification of vocabulary metadata and data (e.g. by using the canonical URL).</p>
<p>To satisfy this principle FHIR implementers should make an assessment of the FAIRness of the terminologies to be used and  enforce the adoption of the FAIR-compliant vocabularies.</p></td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-I2-01D</td>
<td>Data uses FAIR-compliant vocabularies</td>
<td>Useful</td>
<td>See RDA-I2-01M</td>
<td>See RDA-I2-01M</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-I3-01M</td>
<td>Metadata includes references to other metadata</td>
<td>Important</td>
<td><p>FHIR supports different kinds of (qualified) references among FHIR resources and also to non-FHIR objects.</p>
<p>Communities should determine what are the (qualified) references to other resources that are needed to provide a sufficient contextual knowledge for the scope of their community. This should be formalized  through a community FHIR Implementation Guide.</p></td>
<td><p>A qualified reference is intended as a cross-reference that explains its intent. </p>
<p>HL7 FHIR technically supports different kinds of (qualified) references among FHIR resources and also to non-FHIR objects.</p>
<p>This capability of HL7 FHIR doesn't guarantee however "per se" that as many meaningful links between metadata and data resources are used to enrich the contextual knowledge about the data (that is the goal).</p>
<p>Thus, if on one hand this principle is technically satisfied by HL7 FHIR, FHIR implementers should determine what are the links among resources that are needed to provide a sufficient contextual knowledge for the scope of their community.</p>
<p>The realization of this requirement may depend on the data and metadata design approach (e.g. hybrid approaches with some metadata represented using non-FHIR technologies) .</p></td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-I3-01D</td>
<td>Data includes references to other data</td>
<td>Useful</td>
<td>See RDA-I3-01M</td>
<td>See RDA-I3-01M</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-I3-02M</td>
<td>Metadata includes references to other data</td>
<td>Useful</td>
<td>See RDA-I3-01M</td>
<td>See RDA-I3-01M</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-I3-02D</td>
<td>Data includes qualified references to other data</td>
<td>Useful</td>
<td>See RDA-I3-01M</td>
<td>See RDA-I3-01M</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-I3-03M</td>
<td>Metadata includes qualified references to other metadata</td>
<td>Important</td>
<td>See RDA-I3-01M</td>
<td>See RDA-I3-01M</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-I3-04M</td>
<td>Metadata include qualified references to other data</td>
<td>Useful</td>
<td>See RDA-I3-01M</td>
<td>See RDA-I3-01M</td>
</tr>
</tbody>
</table>

### Reusable

<table style="border-color: #000000; width:80 1px solid gray;">
<thead>
<tr style="border: 1px solid gray; background-color: #E5E4E2;">
<th><strong>INDICATOR_ID</strong></th>
<th><strong>INDICATORS</strong></th>
<th><strong>PRIORITY</strong></th>
<th><strong>Interpretation for HL7 FHIR Data</strong></th>
<th><strong>Notes</strong></th>
</tr>
</thead>
<tbody>
<tr style="border: 1px solid gray; ">
<td>RDA-R1-01M</td>
<td>Plurality of accurate and relevant attributes are provided to allow reuse</td>
<td>Essential</td>
<td><p>Each HL7 FHIR resource includes a rich set of attributes describing most relevant data and metadata.</p>
<p>A formal extension mechanism is also specified by that standard to cover additional requirements.</p>
<p>Communities should define which rich metadata are sufficient to describe data to make them useful in their context. This should be formalized with appropriate FHIR conformance resources in FHIR implementation guides.</p></td>
<td><p>This requirement is related to the F2, but while F2 focuses on metadata that allows its discovery, R1 focuses on the context under which the data were generated as well as they should been used.</p>
<p>General considerations made for F2 about FHIR apply also for R1, FHIR is therefore an enabling factor, but the conformance with FHIR is not necessarily a sufficient condition for fulfilling this requirement.</p>
<p>The fact data and metadata are 'richly described' depends on the context of use; therefore, depending on the use case, implementers should identify what are the minimal, recommended and suggested intrinsic and contextual information that should be returned to describe the data and make them actually USEFUL in a particular context.</p>
<p>FHIR implementers should look for specific FHIR Implementation Guides (IG) that cover the Resource types and the use case of interest; and/or define FHIR IGs that apply in their usage context.</p>
<p>The realization of this requirement may depend however on the data and metadata design approach (e.g. hybrid approaches with some metadata represented using non-FHIR technologies).</p></td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-R1.1-01M</td>
<td>Metadata includes information about the license under which the data can be reused</td>
<td>Essential</td>
<td><p>FHIR provides different means to specify the license and the conditions under which data can be reused.<br />
The adoption of FHIR is not however a sufficient condition for fulfilling this requirement.</p>
<p>Published FHIR resources have to include clear references to the usage license.<br />
<br />
Communities should specify in appropriate FHIR implementation guides  - for each kind of data - how this is realized in their context.</p></td>
<td><p>Please refer to RDA-F1-01M and RDA-F1-01D for the discussion on distinct and identifiable metadata and data FAIR objects HL7</p>
<p>HL7 FHIR provides different means to specify the license and the conditions under which data can be used. For example, a resource may convey specific security metadata by using the security labels, enabling policy fragments to accompany the resource data; the Citation resource offers a copyright element to covey human readable copyright information at different level of granularity (Citation , abstract, cited artefacts); the Consent resource can be used to record choices which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.</p>
<p>The solution to be adopted may change depending on the type of data and the context of use.</p>
<p>The adoption of FHIR is not however a sufficient condition for fulfilling this requirement, implementers should therefore define how this requirement is supposed to be met.</p>
<p>The fulfillment of this requirement depends moreover on the capability of the organization to capture and record this kind of information.</p></td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-R1.1-02M</td>
<td>Metadata refers to a standard reuse license</td>
<td>Important</td>
<td>See RDA-R1.1-01M</td>
<td>See RDA-R1.1-01M.</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-R1.1-03M</td>
<td>Metadata refers to a machine-understandable reuse license</td>
<td>Important</td>
<td>See RDA-R1.1-01M</td>
<td>See RDA-R1.1-01M.</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-R1.2-01M</td>
<td>Metadata includes provenance information according to community-specific standards</td>
<td>Important</td>
<td>HL7 FHIR offers a Provence resource enabling the recording of information sources and of the actions applied to them. Other resources, as the Citation, could be used for capturing instead publication related infos.<br />
<br />
The adoption of FHIR is not however a sufficient condition for fulfilling this requirement.<br />
<br />
Communities are encouraged to use the Provenance resource to improve description the data context. They should moreover specify in FHIR implementation guide how this requirement is realized in their context.</td>
<td><p>Please refer to RDA-F1-01M and RDA-F1-01D for the discussion on distinct and identifiable metadata and data FAIR objects HL7.</p>
<p>This principle focuses on specific type of contextual data as where the data came from, how they have been processed; if it has been published before; who need to be cited and/or acknowledged....</p>
<p>Most of this information may be captured in HL7 FHIR by using the Provence resource enabling the recording of data sources and of the actions applied on them at different level of granularity.</p>
<p>Other kinds of resources, e.g. the Citation, could be used for capturing instead publication related infos.</p>
<p>As for some other principles, HL7 FHIR can technically support the data FAIRness, but it is not a sufficient condition for fulfilling this requirement; that depends also on the capability of the organization to capture and record this information.</p></td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-R1.2-02M</td>
<td>Metadata includes provenance information according to a cross-community language</td>
<td>Useful</td>
<td>See RDA-R1.2-01M</td>
<td>See RDA-R1.2-01M</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-R1.3-01M</td>
<td>Metadata complies with a community standard</td>
<td>Essential</td>
<td><p>FHIR is a standard that can be used to represent human and machine-readable metadata and data information.<br />
It defines formal profiling mechanisms to specify community agreed rules.</p>
<p>Even though HL7 FHIR can be considered it self a 'domain-relevant community standard' , implementers are strongly suggested to identify, and if needed specify, appropriate  FHIR Implementation Guides covering the community expectations in terms of models, vocabularies and other objects for their context of use.</p></td>
<td><p>Please refer to RDA-F1-01M and RDA-F1-01D for the discussion on distinct and identifiable metadata and data FAIR objects HL7.</p>
<p>HL7 FHIR is a globally recognized standard in the health domain, that can be used to represent human and machine-readable metadata and data information.<br />
It defines also formal profiling mechanisms to specify community agreed rules.</p>
<p>There are several published FHIR Implementation Guides describing how FHIR should be used for specific scopes.</p>
<p>Beyond this, there might be implementation independent standards (e.g. clinical guidelines) a community wish to refer to.</p>
<p>Implementers are therefore suggested to look for existing FHIR implementation guides or define new ones to cover appropriately the community expectations.</p></td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-R1.3-01D</td>
<td>Data complies with a community standard</td>
<td>Essential</td>
<td>See RDA-R1.3-01M</td>
<td>See RDA-R1.3-01M</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-R1.3-02M</td>
<td>Metadata is expressed in compliance with a machine-understandable community standard</td>
<td>Essential</td>
<td>See RDA-R1.3-01M</td>
<td>See RDA-R1.3-01M</td>
</tr>
<tr style="border: 1px solid gray; ">
<td>RDA-R1.3-02D</td>
<td>Data is expressed in compliance with a machine-understandable community standard</td>
<td>Important</td>
<td>See RDA-R1.3-01M</td>
<td>See RDA-R1.3-01M</td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/FHIRidentifiers.md

The FAIR principles require that "(Meta)data are assigned a Globally
Unique, Persistent and Resolvable Identifiers (GUPRIs). FHIR gives two
ways to identify a resource:

  - By a "Location" URL that identifies where is can be accessed (based
    on the "Logical ID"). 

  - By some inherent identifier ("Business Identifier" or "Canonical
    URL")

see [<span class="underline">https://www.hl7.org/fhir/resource.html\#identification</span>](https://www.hl7.org/fhir/resource.html#identification) for
more details.

Hereafter it is summarized how these HL7 FHIR identifiers fulfil the
characteristics required by the FAIR principles.

### Location URL based on the resource id ("logical id")

Examples: \<id value="23"/\> (Logical ID) //
<http://test.fhir.org/r4/Patient/23> (Location URL)

FAIR object ID: https://test.fhir.org/r4/Patient/23

<table style="border-color: #000000; width:80 1px solid gray;">
<thead>
<tr style="border: 1px solid gray; background-color: #E5E4E2;">
<th>Global and Unique</th>
<th>Persistent</th>
<th>Resolvable by machine </th>
</tr>
</thead>
<tbody>
<tr style="border: 1px solid gray; ">
<td><p>The FHIR standard</p>
<p>(1) requires the  logical ID is unique for a specific kind of resource in the server</p>
<p>(2) defines the rule for  building the 'location URL'</p>
<p>as concatenation of the server URL, kind of resource and logical id.</p>
<p>Since the server URL is globally unique also the location URL is globally unique</p></td>
<td><p>This is under the organization responsibility.</p>
<p>That is, the organization shall assure that the server end-point is 'always' resolvable. This may be done assuring that the end point doesn't change or by using proxy/redirect mechanisms.</p></td>
<td><p>In the FHIR REST paradigm this is true, that is the location URLs shall point to a <a href="https://www.hl7.org/fhir/http.html">FHIR RESTful server</a>.</p>
<p>When FHIR resources are used within other paradigms, e.g. they are exchanged by using IHE XD*/XC* transaction or OMG RLUS services, this may not be true.</p></td>
</tr>
</tbody>
</table>

#### Notes

This resource identifier changes if the server end-point changes.

When an absolute URLs is used this shall point to a [FHIR RESTful
server](https://www.hl7.org/fhir/http.html)

To facilitate redirect / proxy solutions use relative URL in the
resource references.

PRO:

  - the location URL can be used to access the resources via standard
    FHIR API (e.g. GET <http://test.fhir.org/r4/Patient/23>  )

  - is the 'natural' way to uniquely identify resources in FHIR and no
    addition effort is required

  - applies to any FHIR resource

  - used to cross referencing FHIR resources (as absolute or relative
    URL)

CONTRA:

If the organization doesn't guarantee the persistency of the server end
point the location URL is not persistent. (but this true for any
registry of identifiers..)

### Business identifier

**Examples:**

\<identifier\>

  \<system
value="[<span class="underline">https://doi.org</span>](https://doi.org/)"
/\>

  \<value value="10.5281/zenodo.4474373" /\>

\</identifier\>

\<identifier\>

  \<system value="urn:ietf:rfc:3986" /\>

  \<value value="https://doi.org/10.5281/zenodo.4474373" /\>

\</identifier\>

**FAIR object ID**: <https://doi.org/10.5281/zenodo.4474373>

<table style="border-color: #000000; width:80 1px solid gray;">
<thead>
<tr style="border: 1px solid gray; background-color: #E5E4E2;">
<th>Global and Unique</th>
<th>Persistent</th>
<th>Resolvable by machine </th>
</tr>
</thead>
<tbody>
<tr style="border: 1px solid gray; ">
<td>This is under the id assigning authority responsibility</td>
<td>This is under the id assigning authority responsibility</td>
<td><p>If the requirement is that the object identifier is an URL used to directly access the resource, then it is an assigning organization responsibility to assure that:</p>
<ul>
<li><p>that id is actually resolvable</p></li>
<li><p>a rule to build a machine resolvable URL from the namespace and the identifier is agreed.</p></li>
<li><p>the system and value shall have a format such that the applied rule generate a valid URL </p></li>
</ul></td>
</tr>
</tbody>
</table>

#### Notes

The business identifier chosen shall be unique and global.

A business identifier is recorded in a FHIR resource using the
Identifier type, which holds both the namespace (using
Identifier.system) and the identifier itself (using Identifier.value).

If the identifier is itself an url, then the value of the system can be
set to "urn:ietf:rfc:3986", otherwise a community rule to build an URL
from the namespace and the identifier used as object identifier should
be agreed. For example the url  can be constructed using a concatenation
of the system and value fields of the identifier and that might be be
used as GUPRI for the resource (for
example: [<span class="underline">http://a.particular.system/identifier/123456</span>](http://a.particular.system/identifier/123456)).
It is up to the implementer to make sure that there are indeed systems
and policies to govern this namespace.

Finally, it's worth to remind that FHIR provide a standard search syntax
to access a resource by using its business identifier
\[base\]/\[resource\]?identifier=$system|$value).

PRO:

  - if a registry of permanent and resolvable identifiers is provided
    all the three properties are assured
    (e.g. [<span class="underline">https://doi.org</span>](https://doi.org/))

CONTRA:

  - maintenance cost of such a kind of global registry. This includes
    also the registration process of the large number of FHIR resources
    a server needs to deal with ...

  - a call as GET https://$system/$value is not a FHIR API call

### Canonical url

**Example:** \<valueSet
value="http://hl7.org/fhir/ValueSet/my-valueset"/\>

**FAIR object ID**: <http://hl7.org/fhir/ValueSet/my-valueset>

<table style="border-color: #000000; width:80 1px solid gray;">
<thead>
<tr style="border: 1px solid gray; background-color: #E5E4E2;">
<th>Global and Unique</th>
<th>Persistent</th>
<th>Resolvable by machine </th>
</tr>
</thead>
<tbody>
<tr style="border: 1px solid gray; ">
<td>Per the FHIR standard the canonical URL shall be global and unique. </td>
<td>Per the FHIR standard the canonical URL is persistent.</td>
<td>under the assigning organization responsibility</td>
</tr>
</tbody>
</table>

#### Notes

PRO:

  - persistency of the identifier 

CONTRA:

  - The canonical URL is defined only for a subset of FHIR resources.

  - The resolution of the canonical URL into an actual accessible
    end-point is not guaranteed, unless a redirect/proxy solution is
    applied as for the point 1.

### Additional Notes

1.  In a FHIR environment, the first one is the easiest to implement 

2.  The three solutions are not mutually exclusive

3.  Depending on the context of use and on the kind of resource,
    different approaches can be followed

4.  The adopted FHIR profiles should enable any of these choices

5.  It should be recommended to include business identifiers that might
    facilitate the search and the access of these objects beyond FHIR.
    For example, FHIR resources representing the metadata of study level
    collection of data should include permanent identifiers (e.g.,
    DOIs).


---

// File: input/pagecontent/immPort.md

### Overview

#### Introduction:

The Immunology Database and Analysis Portal (ImmPort)
( <https://www.immport.org/home>) repository aims to be a trustworthy
data resources as an essential component of the research enterprise
focusing on immunological research.  ImmPort offers support to the
community by providing resources including secure, reliable, and
scalable computing systems and infrastructure to operate the data
repository; long term archival and data preservation; integration and
curation of disparate data sets and data types in specific domains and
across clinical, laboratory and computational areas; data sharing, data
management, and dissemination following the FAIR Data Principles -
Findability, Accessibility, Interoperability and Reusability;
development of and adherence to standards and best practices for data
collection, presentation and exchange; and training in deposition and
use of data and tools. To achieve its mandate of FAIR data sharing,
ImmPort transforms the shared data into a more user-friendly resource to
enable reuse of the data to gain new insights and findings to advance
immunology research. To date, ImmPort has shared 482 studies
encompassing various data types and organisms. Further, ImmPort
repository has participant level data from 145 clinical trials that are
openly available for reuse
(<https://immport.org/shared/search?filters=clinical_trial:Y>).

#### Clinical trial datasets for use:

  - Use case 1: Dataset with clinical data elements: 
    
      - [SDY1544](https://www.dev.immport.org/shared/study/SDY1544) -
        LEA29Y (Belatacept) Emory Edmonton Protocol (LEEP) (CIT-04) and
        Extended Follow Up after Islet Transplantation in Type 1
        Diabetes (CIT-08)
    
      - There is no associated publication
    
      - Dataset has demographic and clinical information.

  - Use case 2: Dataset with clinical and mechanistic data elements: 
    
      - [SDY998](https://www.immport.org/shared/study/SDY998) - AMP
        Rheumatoid Arthritis Phase 1
    
      - Dataset has demographic and clinical information along with
        mechanistic study files.
    
      - Associated publications:
        
        1.  Methods for high-dimensional analysis of cells dissociated
            from cryopreserved synovial tissue, Arthritis research &
            therapy, 2018, 20(1), 139,
            PMID: [29996944](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=pubmed&dopt=Abstract&list_uids=29996944)
        
        2.  Defining inflammatory cell states in rheumatoid arthritis
            joint synovial tissues by integrating single-cell
            transcriptomics and mass cytometry, Nature Immunology, 2019,
            20(7), 928-942,
            PMID: [31061532](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=pubmed&dopt=Abstract&list_uids=31061532)
        
        3.  HBEGF+ macrophages in rheumatoid arthritis induce fibroblast
            invasiveness, Science translational medicine, 2019, 11,
            491, [31068444](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=pubmed&dopt=Abstract&list_uids=31068444)
        
        4.  PD-1hiCXCR5- T peripheral helper cells promote B cell
            responses in lupus via MAF and IL-21, JCI insight, 2019, 4,
            20, [31536480](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=pubmed&dopt=Abstract&list_uids=31536480)

Machine readable data is available via ImmPort
API: <https://docs.immport.org/#API/DataQueryAPI/dataqueryapi/>

#### Scenario:

  - Retrieve study metadata and associated data via API or from website

  - All Immport studies are searchable using study metadata API

  - Assess FAIRness of the metadata/data using the RDA FAIR data
    maturity Indicators

  - Convert metadata/data into FHIR standard

  - Assess FAIRness of the metadata/data again using the RDA FAIR data
    maturity Indicators

  - Analyze changes to FAIRness (if any)

### Initial Assessment of FAIRness using the RDA FAIR Maturity Indicators

To understand the FAIRness of this resource prior to the implementation
of FHIR, we mapped the RDA FAIR indicators to the ImmPort resource at
the study level using two datasets defined above (https://tinyurl.com/ImmPortFHIRMapping).

Dataset SDY1544 is a clinical trial study with no associated study files
and no mechanistic data, and dataset SDY998 is a clinical research study
with associated study files and mechanistic data such as RNAseq, CyTOF
(mass cytometry) and flow cytometry.  In summary, ImmPort as a resource
is relatively FAIR and, as such, satisfied most of the indicators for
the findability (7/7) and accessibility (11/11).  For interoperability
and reusability, the studies satisfied 7/12 and 7/10 indicators,
respectively.

<table>
<thead>
<tr class="header">
<th>Dataset</th>
<th>Findable</th>
<th>Accessible</th>
<th>Interoperable</th>
<th>Reusable</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>SDY1544</td>
<td>7/7</td>
<td>11/11</td>
<td>11/12</td>
<td>7/10</td>
<td></td>
</tr>
<tr class="even">
<td>SDY998</td>
<td>7/7</td>
<td>11/11</td>
<td>11/12</td>
<td>7/10</td>
<td></td>
</tr>
</tbody>
</table>

### Mapping of ImmPort metadata into FHIR resources

The study level metadata of the two datasets mentioned above were mapped to FHIR resources (https://tinyurl.com/ImmPortFHIRMapping); primarily the ResearchStudy resource. Additional resources that are of utility to map some metadata elements are Citation resource and Group resource. Of note, version 5 of the ResearchStudy resource proved to map better to ImmPort study level metadata than the current version 4 or version 4b.

In an effort outside of this implementation guide, ImmPort has planned
to improve its interoperability by mapping the FHIR resources to the
ImmPort data model.  In addition, ImmPort clinical data will also be
transformed and disseminated in the FHIR format.  After the FHIR
implementation and data transformation, it is expected that ImmPort will
see an improvement in the interoperability and reusability category,
which is consistent to the assessments from other scenarios in this
implementation guide. 

### FHIR implementation and FAIRness

The FHIR implementation of ImmPort has the potential to improve the interoperability of the data. This is likely to be manifested at the more granular level of subjects within the study. Since the study level metadata for ImmPort datasets were already FAIR compliant to a large extent, there were no obvious changes in the extent of FAIRness.


---

// File: input/pagecontent/index.md

<!---
<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">


	<blockquote class="stu-note">
		<p>Readers should be aware that this version of the guide is based on a <b>not yet published FHIR version</b> (HL7 FHIR 4b), with all the consequences of this.</p>
		<p>This choice has been made to take advantage of the new capabilities offered by the Evidence-Based Medicine resources, including Citation.</p>
	</blockquote>
</div>
<br/> -->

### Scope

This guide aims to provide guidance on how HL7 FHIR can be used for supporting **FAIR health data** implementation and assessment to enable a cooperative usage of the HL7 FHIR and FAIR paradigms. Other kinds of health-related artefacts, such as clinical guidelines, algorithms, software, models are out of scope.

### What does FAIR mean?

**FAIR** stands for **F**indable, **A**ccessible, **I**nteroperable and **R**eusable

<table>
<tbody>
<tr class="odd">
<td><p><img src="index-1.png" style="width:2.98265in;height:1.01225in" alt="FAIR data - Wikipedia" /></p>
<p>Figure 1 – FAIR [SangyaPundir / <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA</a>]</p></td>
</tr>
</tbody>
</table>

The [FAIR principles](https://www.go-fair.org/fair-principles) - **a minimal set of community-agreed guiding principles and practices** - were first introduced by Wilkinson et al (2016) in their seminal paper ([doi.org/10.1038/sdata.2016.18](http://doi.org/10.1038/sdata.2016.18)).

The authors intent was to provide guidelines to improve the **Findability**, **Accessibility**, **Interoperability**, and **Reuse** (FAIR) of scientific data. Since their first introduction in 2016, FAIR principles were well received in international community and rapidly adopted by researchers.

The FAIR principles put specific emphasis on improving the ability of machines to automatically find and make use of the  research (and other) data, as well as to support its reuse by the human researches. Therefore, acting as a guideline for those wishing to gain much greater value from the future reuse of their scientific data and relevant metadata.

We provide more detailed [**introduction to the FAIR data principles**](FAIR.html) as well as the [**relationship to the HL7 FHIR standard**](FHIRandFAIR.html) in later sections of this IG. 

There are [**existing concepts for operationalization and indicator for assessment of FAIRness** ](RDAMetrics.html), for example Research Data Alliance or EOSC recommendations. We discuss their implications in a special section [**HL7 FHIR and RDA Indicators**](FHIRandRDAMetrics.html).

### What this project is aiming to?

The FAIRness for FHIR project, this Implementation Guide is part of, is intended to be the result of an active collaboration between the RDA and HL7 communities.

This project has as main goals to:

  - Facilitate the **collaboration** between the **FAIR** and the **FHIR** **communities**

  - Enable a **cooperative usage** of the **FHIR** standard and **FAIR** principles.

  - Support the **assessment and implementation of FAIR health data** by using HL7 FHIR

### What problems are FAIR and this guide trying to address?

 <br />
 
 - Allow researchers to **make available** under specified conditions of use set of data, derived from a data source, that have been collected and consolidated for a specific purpose.
 - Allow researchers and data scientists to **look for and access** previously collected data sets to answer specific questions
 
<br />

<div> 
 <img src="index-2.png" style="width:80%" />
</div>

<br />

### Audience

The audience for this Implementation Guide includes:

 - **Researchers** : People who generate, process or use research health data
 - **Health Data Providers** : Healthcare providers that populate clinical data warehouses; Clinical study groups, operators of registries or epidemiological cohorts, surveillance or Public Health
 - **Technical Implementers** : Vendors of EHR systems, data repositories or EDC systems
 - **Government agencies** : Funding institutions that want to ensure the sustainable usability of their projects; Legislators issuing guidelines for the use of personal data (GDPR,Data Governance Act); Regulatory bodies providing best practice guidelines.
 - **Public** : Citizens who want to use their data for their own purposes or donate  data for research purposes


### Structure of this guide

This guide has been structured in the following  parts:

1. A _Backgroud_ section describing the context of this work , including the [**methodology**](methodology.html) followed. This section summarizes also the [ FAIR data principles](FAIR.html), the [RDA indicators for assessment of FAIRness](RDAMetrics.html); and some general considerations about data and metadata, and Globally Unique, Persistent and Resolvable Identifiers.
1. A _Real World Cases_ section describing a set of real world cases used as case study for this guide.
1. A _Recommendations_ section, the core part of this guide, including:
	1.  [General recommendations](recommendations.html)
	2.	Best practices for native HL7 FHIR architectures aiming at being FAIR [](FHIRandFAIR.html)
	3.	An overview of the relationship between the FAIR Data Maturity Model described in the RDA Indicators and HL7 FHIR. [](FHIRandRDAMetrics.html)
1. A set of [HL7 FHIR conformance resources and examples](artifacts.html).



### Ballot Status

This Implementation Guide will be balloted as STU with the intention to go normative in subsequent ballot cycles.


### Authors and Contributors

| Role  | Name | Organization |
| --- | --- | --- | --- |
| **Author** | Giorgio Cangioli | HL7 Europe | 
| **Author** | Alicia Martinez-Garcia | Andalusian Health Service |
| **Author** | Ian Harrow | Pistoia Alliance |
| **Author** | Kees van Bochove | The Hyve | 
| **Author** | Matthias Löbe | IMISE University of Leipzig |
| **Author** | Philip van Damme  | Amsterdam UMC |
| **Contributor** | Anupama Gururaj | NIH/NIAID |
| **Contributor** | Belinda Seto| NIH |
| **Contributor** | Brian Alper | Computable Publishing LLC |
| **Contributor** | Catherine Chronaki | HL7 Europe |
| **Contributor** | Edward Eikman|  |
| **Contributor** | Olga Vovk | Samvit Solutions |
| **Contributor** | Oya Beyan | Koeln University |
| **Contributor** | Steve Tsang | NIH/NIAID |





---

// File: input/pagecontent/leipzigHealthAtlas.md

### Overview

In medical research, extensive data collections are collected at great
personal and financial expense, which are subject to a wide range of
regulatory requirements due to their nature: person-related, sensitive
subject data. Although the idea of data sharing is now supported by many
clinical researchers, there is a lack of mechanisms for the structured
processing, permanent storage and organized release of interoperable
data to external scientists.

![Immagine che contiene testo Descrizione generata
automaticamente](leipzigHealthAtlas-1.png)

The Leipzig Health Atlas (LHA) serves as a research data management
repository for archiving and sharing data(sets) from scientific projects
in the biomedical and medical informatics fields. It includes data and
publications from research studies such as clinical trials,
epidemiological cohorts or registries.

The LHA is guided by the FAIR principles (Findable, Accessible,
Interoperable, Reusable). Currently, more than 18 research consortia
contribute data from the domains of lymphoma, glioma, sepsis, hereditary
colorectal and breast cancer, among others. The target audience includes
clinicians, epidemiologists, geneticists, pathologists,
biostatisticians, and digital patient model developers. The LHA is
publicly available - some content subject to legal access restrictions -
at https://www.health-atlas.de.

### Technical background

The architecture of the LHA portal is based on the freely available
software [SEEK](https://fair-dom.org/platform/seek/). Additional tools
for hypothesis generation (i2b2), visualization
([tranSMART](https://transmartfoundation.org/)), interactive modeling
for risk assessment (based on [R-Studio
Shiny](https://shiny.rstudio.com/)) or deployment
(Docker/[Kubernetes](https://kubernetes.io/)) are offered on a
case-by-case basis. Before making datasets available, it is necessary to
curate the data and metadata, obtain permissions from the data owners,
consider the required privacy criteria, and assign semantic tags for
better discoverability. In the course of data extraction, contractual
and technical access procedures must be established and implemented.

### Example clinical trial (HNSCC study)

The HNSCC study is an observational cohort study that characterizes head
and neck squamous cell carcinomas (HNSCC) with different HPV16 DNA and
RNA (E6\*I) status. The database used in the publication consists of
clinical data from the hospital information system and genomic data from
tumor sequencing. In order to support the reproducibility of research
and to promote the reuse of data, the clinical data are offered in
various data files compliant to different standards, including for
example simple comma separated data or complex structures according to
the [CDISC ODM
standard](https://www.cdisc.org/standards/data-exchange/odm).

<table>
<thead>
<tr class="header">
<th><img src="leipzigHealthAtlas-2.png" style="width:4.87568in;height:2.51077in" alt="Immagine che contiene testo Descrizione generata automaticamente" /></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>URL: <a href="https://www.health-atlas.de/studies/33">https://www.health-atlas.de/studies/33</a></td>
</tr>
</tbody>
</table>

### Options for utilizing HL7 FHIR

Interoperability and traceability are key issues for a research data
repository that wants to make data available to third parties for reuse
in secondary research projects. Experience shows that the existing
processes for requesting and extracting data are not sufficiently
descriptive, so that, for example, questions about the semantics of
individual data elements or the provenance of the data sources and
transformation processes must be clarified for each individual
requester.

An investigation has already been conducted regarding the compliance of
the LHA to the [indicators developed by the RDA FAIR Data Maturity Model
Working
Group](https://www.rd-alliance.org/group/fair-data-maturity-model-wg/outcomes/fair-data-maturity-model-specification-and-guidelines-0).
In principle, the results were satisfactory, but there were major
weaknesses in the area of reusability.

The use of HL7 FHIR allows a clearly detailed description of contextual
attributes of data and data sets. Currently, plans are underway for the
programmatic implementation of a semi-automatic generation of a data
export in FHIR under the recommendations of the implementation guide
presented here.

### Outlook and future utilization

The Leipzig Health Atlas is to be expanded in the long term to become
the U Leipzig medical faculty's research data management platform. More
importantly, it will also serve as a basis for the realization of
distributed *Local Data Access Points* within the framework of the
[National Research Data Infrastructure for Personal Health Data
(NFDI4Health)](https://www.nfdi4health.de/en/). Furthermore, the concept
will be established in the SMITH consortium of the Medical Informatics
Initiative for making research data available.


---

// File: input/pagecontent/metadata.md

The concept of FAIR digital object is quite wide and can vary in term of
granularity and type of data that should be represented. (For a
definition of a FAIR data object see section 4.1 of the EC publication
Turning FAIR into reality and Wittenburg, P., Strawn, G., Mons, B. et
al.: Digital objects as drivers towards convergence in data
infrastructures 2019 - Full Text). It may be a single unit such as a
coded diagnosis or a collection of machine actionable data (data set).
It may represent a waveform, an image, a condition, other types of data
or a combination of them.

This implies that their representation with HL7 FHIR resources and
elements may range from a sinlge element to a set of linked resources.
(see Figure 1).

Similar considerations can be done also for the metadata, metadata can
be in fact represented by elements belonging to the same resource
documenting the data and by a set of other linked resources.

<div><img src="metadata-1.png" style="width:55%"/></div>

**Figure** **1 – FAIR Digital Object representation**

<div><img src="metadata-2.png" style="width:55%"/></div>

**Figure** **2 – Mapping FAIR data and metadata**

The critical point is however the **actual logical distinction between
metadata and data** (both are FAIR DO); with metadata playing a key role
for making data findable, accessible, interoperable and reusable.  
Metadata are in fact usually described as the "data about data", but in
practice what is "data" and what is "metadata" is a matter of
perspective: based on the context, the same information can be in fact
considered as part of the data or of the metadata.

This makes even more complex the mapping of the FAIR DO to the FHIR
resources.

<div><img src="metadata-3.png" style="width:55%"/></div>

**Figure** **3 – Mapping FAIR data and metadata**

In consideration of the previous arguments, the realization of the
requirement for a metadata FAIR data object, distinct from the data FAIR
data object, and identified by a persistent and unique ID need to be
pragmatically evaluated, above all for FHIR implementations.

This means that depending on the context of use and on the granularity
of data, distinct and identifiable FHIR resources can be used to record
a selected set of metadata elements; but this might not be true for all
the information that could be considered metadata.

Let's consider for example the following levels:

1.  **Study Level**: specific to a study, publication, or usage context
    (collection of subject level data).

2.  **Subject Level**: specific to a single subject (patient).

<div><img src="metadata-4.png" style="width:55%"/></div>

**Figure** **4 - Example of levels of data objects granularity**

If for the study level we can assume data are represented by the subject
level objects, distinct from the metadata describing the "study" (see
figure below) ; this might be not so true for the subject level.

<div><img src="metadata-5.png" style="width:55%"/></div>

**Figure** **5 – Metadata and data for a data collection.**

HL7 FHIR provides several candidates resources to represent metadata for
collection of data (e.g., Bundle, Lists..) and the choice of the
resource to be used strongly depend on the usage
context. **Library,** **Citation** and **ResearchStudy**, seem to be
the most promising resources to better support the “rich metadata” FAIR
requirement; however not all of them are available in HL7 FHIR R4.
Furthermore, since most of them have a low [FHIR maturity
level](https://www.hl7.org/fhir/versions.html#maturity), they are
subject to possible non-negligible changes, including the way the
linkage between metadata (i.e. the resource itself) and data (i.e. the
referred resources) is realized.

The kinds of data objects that the metadata may refer to can be:

1.  Non-FHIR objects

2.  FHIR and non-FHIR objects

3.  FHIR-only objects

Depending on the “metadata” resource, the FHIR version chosen and the
type of object to point to, different solutions can be adopted. For
example, the current Library resource covers this requirement through
the content element (Attachment datatype), in this case the link to data
is recorded by using an uri (this may or may not be enough for referring
FHIR resources). Citation (looking at the FHIR R5 specs) provides
instead more flexible and comprehensive solutions through the
citedArtifact.relatedTo.target\[x\] element; providing different means
(uri, resource references, business identifiers) to handle these
references.

It’s worth to mention that FHIR specifies a dedicated resources
(Provenance) to record Provenance information typically part of the
“metadata”.

As described above, at the subject level, the boundary between metadata
and data is not always so sharp. In the example below derived from the
[Ninfea](https://confluence.hl7.org/display/SOA/NInFEA) real world case
is shown for example how the gestational week or the mother height and
weight, might be considered metadata for the signals, but also patient
level data.

<div><img src="metadata-6.png" style="width:55%"/></div>

**Figure** **6 – Metadata and data at the subject level.**

This guide will not therefore attempt to **prescribe any tight
separation of metadata/data at the subject level** when FAIR is
implemented by using HL7 FHIR.

There are HL7 FHIR resources (e.g. EvidenceReport, Bundle\[collection\],
Composition, List; DocumentManifest) that can be potentially used to
record some subject level metadata information as a distinct FHIR
resource instance. Nevertheless, typically metadata information is
recorded by a set of linked FHIR resources. For example, a Condition
instance documenting a specific problem (the data), may use
the *subject*, the *encounter* and the *evidence* references to
Patient, Encounter and Observation FHIR instances to document the
patient, encounter and other information used as evidence to describe
the context of this problem (the metadata).

In case of *non-FHIR data objects* or mixed cases (*FHIR and non-FHIR
objects*) implementers should evaluate the feasibility and the
cost/benefit of transforming these objects (completely or partially) in
FHIR instances; and/or creating FHIR resources (e.g., DocumentManifest)
to document some metadata information.


---

// File: input/pagecontent/methodology.md

This guide has been designed following an **incremental, iterative** and
**meet-in-the -middle** approach.

In this sense authors **do not pretend to cover** in this version of the
guide **all the aspects** related to the data FAIRification (e.g.,
security and privacy) or all the possible kind of data.

The intent of this guide is to promote as possible the **reuse of
existing artefacts**, in this sense no new FHIR profiles have been
specified when covered by existing guides (e.g. genomic, lab results,
vital sign).

This guide **is not about FAIR in general**, but on how HL7 FHIR should
be used to better support the FAIR principles. The design choices will
be therefore based on how FHIR is designed: this may imply that some
FAIR expectations might not be fully accomplished or realized under
specific conditions.

The following figure shows how this incremental, iterative and
meet-in-the -middle approach has been realized. A set of representative
real-world study cases have selected covering different situations:
research studies, publications, sharing of health data and others. For
each selected case (iteratively):

1)  The case has been analyzed, performing a FAIRness assessment against
    the [RDA indicators](RDAMetrics.html), and identifying the main
    findings and gaps; and/or capturing the main lesson learned by the
    implementation of the [FAIR principles](FAIR.html).

2)  It has been analyzed how these cases are or could be implemented by
    using HL7 FHIR and where it provides added value.

3)  A set of guidelines for implementing FAIR principles with HL7 FHIR
    has been produced and FHIR conformance resources to represent
    subject and study level metadata have been specified.

4)  Finally, it has been checked how the proposed solution fulfills the
    FAIR principles and RDA indicators

<table>
<tbody>
<tr class="odd">
<td><img src="methodology-1.png" style="width:6.27998in;height:2.42016in" /></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/mimic.md

### Introduction
#### Scope

The scope of this real-world case is to implement HL7 FHIR for the MIMIC-IV-ED (MIMIC-ED)
(<https://physionet.org/content/mimic-iv-ed/1.0/>) dataset and assess the level of FAIRness before and after implementation. By doing so, this case contributes to: 1) the MIMIC-ED community by providing an HL7 FHIR model of the data and examplar implemention, and 2) the FAIR community by providing knowledge about what parts of FAIR can be addressed, in this particular case, when choosing HL7 FHIR to implement the principles. The lessons learned here could be applied to other cases where the implementation of the FAIR principles using HL7 FHIR is desirable.


#### Data

MIMIC-ED is a module of the MIMIC-IV (<https://physionet.org/content/mimiciv/0.4/>) dataset,
the latter of which was published in August 2020 and contains clinical
data on hospital stays sourced from hospital information systems.
MIMIC-ED, published in June 2021, contains emergency department (ED)
admissions at the Beth Israel Deaconess Medical Center (Boston, MA, USA)
between 2011 and 2019. At the time of writing, version 1.0 of MIMIC-ED
contains de-identified data from 448,972 ED stays. The dataset is made
available freely via PhysioNet
([https://physionet.org/](https://physionet.org/content/mimic-iv-ed/1.0/)),
a repository for medical research data, and is intended for both
research and educational purposes. PhysioNet distributes the data to its credentialed users that, after signing a
data use agreement, can download the raw data (CSV) and/or access the
data through services such as the Google Cloud Platform.

MIMIC-ED follows a star-like structure (Figure 1) around
the *edstays *table, which contains two identifiers through which the
other tables are linked (*subject\_id* referring to a patient
and *stay\_id* referring to an ED stay of a patient). The other five
tables contain information that was documented during a patient's stay
at the ED: discharge diagnoses (*diagnosis*), medication taken prior to
the ED stay (*medrecon*), medication dispensed during the ED stay
(*pyxis*), information collected at the time of triage (*triage*), and
aperiodic vital signs measured during the ED stay (*vitalsign*). A
description of each table and its elements, including background,
license, access, and citation information is provided through the
MIMIC-ED page at PhysioNet.

  - DOI: <https://doi.org/10.13026/77z6-9w59>

  - Data (ZIP file, when access is
    provided): <https://physionet.org/content/mimic-iv-ed/get-zip/1.0/>

<div><img src="mimic-1.png" style="width:30%"/></div>

**Figure 1.** *MIMIC-ED table structure. *


### Initial FAIRness assessment

The [RDA FAIR Data Maturity Indicators](https://confluence.hl7.org/x/rJw7Bg) were used to assess FAIRness. 
First, FAIRness of MIMIC-ED was assessed before the implementation of HL7 FHIR.
In other words, the FAIRness of MIMIC-ED as it is being distributed by
PhysioNet. MIMIC-ED passed most (except one) indicators for Findability
and Accessibility. The one indicator that it did not pass is the
requirement for metadata to be available when the data is no longer
available; this can assumed to be true, but has not been specified by
PhysioNet. Interoperability and Reusability were only partly implemented. MIMIC-ED does not use any FAIR-compliant
vocabularies for annotating its data semantics, nor does it comply with
a standard data model. Hence, implementing HL7 FHIR would probably
contribute to the Interoperability and Reusability aspects of FAIR in
the case of MIMIC-ED. 

**Table 1. ***FAIRness assessment of MIMIC-ED before implementing
HL7 FHIR. *

<table style="border-color: #000000; width:80 1px solid gray;">
<thead>
<tr style="border: 1px solid gray; background-color: #E5E4E2;">
<th></th>
<th><strong>Findable</strong></th>
<th><strong>Accessible</strong></th>
<th><strong>Interoperable</strong></th>
<th><strong>Reusable</strong></th>
</tr>
</thead>
<tbody>
<tr style="border: 1px solid gray; ">
<td><strong>Passed RDA indicators</strong></td>
<td>7 / 7<br />
Fully implemented</td>
<td>11 / 12<br />
Fully implemented</td>
<td>7 / 12<br />
Partly implemented</td>
<td>2 / 10<br />
Not/partly implemented</td>
</tr>
<tr style="border: 1px solid gray; ">
<td><strong>Positives</strong></td>
<td><ul>
<li><p>(Meta)data are findable through a globally unique DOI</p></li>
<li><p>Metadata includes data access instructions and license information</p></li>
<li><p>Metadata is findable through a search engine</p></li>
</ul></td>
<td><ul>
<li><p>Clear data access instructions</p></li>
<li><p>(Meta)data can be accessed manually</p></li>
<li><p>Resolvable identifiers for (meta)data</p></li>
<li><p>HTTP/HTTP GET for (meta)data access</p></li>
<li><p>Authentication and authorization through PhysioNet</p></li>
</ul></td>
<td><ul>
<li><p>Data available as CSV files</p></li>
<li><p>Metadata refers to and qualifies other data</p></li>
</ul></td>
<td><ul>
<li><p>Metadata contains license information</p></li>
<li><p>Data are expressed in compliance with a machine-<br />
understandable standard (CSV)</p></li>
</ul></td>
</tr>
<tr style="border: 1px solid gray; ">
<td><strong>Negatives</strong></td>
<td></td>
<td><ul>
<li><p>No guarantee or mention that metadata will stay available<br />
when the data is no longer available</p></li>
</ul></td>
<td><ul>
<li><p>(Meta)data do not use FAIR-compliant vocabularies<br />
for annotating data semantics</p></li>
<li><p>(Meta)data do not use a standardised format for <br />
knowledge representation</p></li>
</ul></td>
<td><ul>
<li><p>No standard or machine-understandable reuse<br />
license (PhysioNet license, free-text)</p></li>
<li><p>Metadata does not include provenance information</p></li>
<li><p>(Meta)data do not comply with a community standard<br />
(ongoing efforts to use OMOP CDM)</p></li>
</ul></td>
</tr>
</tbody>
</table>


### FHIR implementation

Using HL7 FHIR to implement the FAIR principles should improve the
machine-readability/interoperability/FAIRness of the MIMIC-ED dataset.
The following steps were performed. 

  - Model the data and metadata conforming the HL7 FHIR data model (using
    the Patient, Encounter, Condition, MedicationStatement,
    MedicationDispense, Observation, and Procedure resources)

  - Set up an HL7 FHIR facade server that can serve the (meta)data via the HL7
    FHIR REST API

  - Enable SEARCH operations that allow queries such as “retrieve all ED
    stays of patient X” or “which patients were discharged from the ED
    with diagnose Y”

<div><img src="mimic-2.png" style="width:30%"/></div>

**Figure 2.** Exemplar implementation of an HL7 FHIR facade for serving
MIMIC-ED data. *


### FAIRness assessment after implementation

FAIRness of MIMIC-ED was assessed once again after modeling the (meta)data as HL7 FHIR resources and setting up an HL7 FHIR facade server. The goal of this assessment was to help identify where the implemented solution does or does not improve FAIRness and to formulate best practices and lessons learned. Important note: the indicators RDA-I3-02M and RDA-I3-02D ((meta)data includes (qualified) references to other data) were considered to be 'not applicable' for the post assessment, as those were not implemented despite that HL7 FHIR provides the tools to satisfy these indicators.

**Table 2. ***FAIRness assessment of MIMIC-ED after implementing
HL7 FHIR. *

<table style="border-color: #000000; width:80 1px solid gray;">
<thead>
<tr style="border: 1px solid gray; background-color: #E5E4E2;">
<th></th>
<th><strong>Findable</strong></th>
<th><strong>Accessible</strong></th>
<th><strong>Interoperable</strong></th>
<th><strong>Reusable</strong></th>
</tr>
</thead>
<tbody>
<tr style="border: 1px solid gray; ">
<td><strong>Passed RDA indicators</strong></td>
<td>5 / 7<br />
Partly implemented</td>
<td>8 / 12<br />
Partly implemented</td>
<td>11 / 12<br />
Partly implemented</td>
<td>5 / 10<br />
Partly implemented</td>
</tr>
<tr style="border: 1px solid gray; ">
<td><strong>Positives</strong></td>
<td><ul>
<li><p>HL7 FHIR provides resource identifiers and captures business identifiers</p></li>
<li><p>Some metadata is already implied by resources<br/><br/>
(e.g., a Patient resource covers "who" information about patients)</p></li>
<li><p>Metadata can be captured in separate resources<br/><br/>  
(e.g., CapabilityStatement, StructureDefinition, Library) </p></li>
</ul></td>
<td><ul>
<li><p>REST API (HTTP) to access (meta)data</p></li>
<li><p>Resolvable resource identifiers</p></li>
<li><p>Support for authentication and authorization</p></li>
</ul></td>
<td><ul>
<li><p>HL7 FHIR data model</p></li>
<li><p>JSON and/or XML representation</p></li>
<li><p>Use of vocabularies and value sets</p></li>
</ul></td>
<td><ul>
<li><p>Metadata contains license information</p></li>
<li><p>Provenance information in Provenance resource as metadata</p></li>
</ul></td>
</tr>
<tr style="border: 1px solid gray; ">
<td><strong>Negatives</strong></td>
<td><ul>
<li><p>Metadata discovery needs extra attention</p></li>
</ul></td>
<td><ul>
<li><p>Metadata does not contain access information,<br/><br/>  
already assumed to have access to an HL7 FHIR server</p></li>
</ul></td>
<td><ul>
<li><p>No reference to other (meta)data in this example, but references could be added using HL7 FHIR</p></li>
</ul></td>
<td><ul>
<li><p>No standard or machine-understandable reuse<br />
license (PhysioNet license, free-text)</p></li>
</ul></td>
</tr>
</tbody>
</table>


#### Lessons learned

Overall, the used implementation of HL7 FHIR for expressing and distributing MIMIC-ED data improves the interoperability and reusability and poses some extra challenges in terms of findability and accessibility. Findability requires ample metadata that is offered in such way it can be harvested and indexed. Some of the metadata that PhysioNet [publishes](https://physionet.org/content/mimic-iv-ed/1.0/) for MIMIC-ED became redundant, as all HL7 FHIR resources are self-descriptive. For instance, when using a MedicationStatement resource it is not necessary to seperately describe that there is data about medication consumed by a patient, as this information is captured in the definition and scope of the resource. Other resource-level metadata, such as author information, provenance, license, and access information, have to be captured in separate resources such as Library. Metadata discoverability is challenging when only using HL7 FHIR, as details on how to reach an HL7 FHIR server should be published outside of that server anyway. Hence, it is recommended to keep an indexable, publicly available, page to expose such metadata. The PhysioNet repository is a good example here. Such a page would also be necessary to satisfy indicators RDA-A1-02M and RDA-A1-02D (manual access to (meta)data). In short:

  - To satisfy indicator RDA-F4-01M (metadata discoverability), using a separate public repository for certain metadata is recommended.

  - Some metadata is captured in resources used for the data (e.g., Patient or Observation) while other resources are used specifically for metadata (e.g., Library). 

  - HL7 FHIR improves interoperability by providing a (meta)data model, machine-readible representations, and REST API. Modeling MIMIC-ED using HL7 FHIR resources was relatively easy to do. 

  - HL7 FHIR does not solve the lack of a standard licence, references to other (meta)data, or provenance data. However, once present those data can be modeled and exposed with HL7 FHIR. 

---

// File: input/pagecontent/NFDI4Health.md

### Overview

[NFDI4Health](https://www.nfdi4health.de/en/) stands for "National
Research Data Infrastructure for Personal Health Data in Germany". It is
part of a network of 30 [NFDI
consortia](https://www.nfdi.de/consortia/?lang=en) covering different
scientific disciplines like chemistry or cultural heritage. All NFDIs
got a five-year grant (2020-2025) from the German Federal Ministry of
Education and Research (BMBF). The main goal is **to build a networked
infrastructure and connect existing datasets**.

NFDI4Health provides a broad coverage of biomedical data-driven projects
like:

  - epidemiological cohorts
  - clinical trials
  - public health surveys
  - administrative databases

NFDI4Health is strongly committed to the ideas of FAIR data management. However, as personal and particularly sensitive data, health data are
subject to special protection regulations. They may only be made
available to third parties with the patient's consent or after
de-identification. Furthermore, accompanying study materials such as
protocols, descriptions of data catalogs or data entry forms are in part
considered intellectual property and are only published in an incomplete
manner.

### NFDI4Health Study Portal

In the context of the Sars-Cov-2 pandemic, as in many consortia, a
special intitiative was created to support research. The [NFDI4Health
Task Force COVID-19](https://www.nfdi4health.de/en/task-force-covid-19/)
is developing, among other things, a hub of clinical and epidemiological
studies in Germany related to COVID-19: the [**COVID-19 Study
Portal**](https://covid19.studyhub.nfdi4health.de/).

#### Technical background

The study portal consists of three main parts:

1.  The [central serach hub](https://covid19.studyhub.nfdi4health.de/)
    serving as a study registry. The search hub is an in-house
    development.
2.  The [asset repository](https://csh.nfdi4health.de/) for maintaing
    all study-related digital resources like documents or datasets. The
    asset repository is based on the
    [FAIRDOM-<span class="underline">SEEK</span>](https://fair-dom.org/instance.html)
    research data management system.
3.  The [study catalogue
    browser](https://studycataloguebrowser.ship-med.uni-greifswald.de/)
    giving insight to the case report forms, instruments or assessments
    used. It is based on
    [Opal](https://www.obiba.org/pages/products/opal/) and
    [Mica](https://www.obiba.org/pages/products/mica/).

#### Example application

Typical research studies such as
[SHIP-COVID](https://covid19.studyhub.nfdi4health.de/resource/20181)
have a complex structure and can be characterized by a variety of
attributes. One problem here is the low consensus on the meaning and
value list options of individual attributes. Especially generic
attributes such as study type, study focus, primary objective, or target
population are understood differently in clinical trials than in
epidemiological cohorts. Individual parameters such as phase, arm, or
investigational drug are specific to individual research areas.

### Study Portal Metadata Schema

A custom **metadata schema (MDS)** with 86 attributes ([in version 1.0](https://github.com/nfdi4health/metadataschema)) was designed for the COVID-19 study
portal gathering COVID-19 health research such as studies, questionnaires and documents.

#### FAIRness assessment

The NFDI4Health Taskforce has been committed to FAIR concepts from the beginning. While discoverability and accessibility were primarily addressed as part of the redevelopment or customization of the web applications described above, interoperability of data was low. Therefore, the possibility of applying the HL7 FHIR standard to improve FAIRness was explored with regards to:

- I1. (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation: HL7 FHIR is modern format specifically designed for the exchange of healhtcare data. FHIR has an open specification, is freely usable and can be processed in an automated manner using a larger selection of widely available tools due to its serialization as XML, JSON, and RDF.
- I2. (Meta)data use vocabularies that follow FAIR principles: FHIR requires on the one hand the explicit designation of vocabularies, from which codes originate, by specifying code systems. Furthermore, FHIR supports the use of consented value sets from international standards, e.g. HL7, IHE or CDISC, through the mechanism of 'binding strength' to sets of codes/concepts.
- I3. (Meta)data include qualified references to other (meta)data: FHIR offers various possibilities for the use of identifiers depending on the use case and the technical requirements as described in [FHIR identifiers and FAIR principles](https://build.fhir.org/ig/HL7/fhir-for-fair/FHIRidentifiers.html).

#### Utilizing of HL7 FHIR

To elevate data FAIRness, we aim to adopt the HL7 FHIR and therefore an initial mapping to HL7 FHIR was performed. The MDS items were each mapped to the FHIR resources 
-	[ResearchStudy](https://www.hl7.org/fhir/researchstudy.html)
-	[Questionnaire](https://www.hl7.org/fhir/questionnaire.html)
-	[DocumentReference](https://www.hl7.org/fhir/documentreference.html) 

We used HL7 FHIR Version Release 4 (v4.0.1) as mapping target. First results showed that 58% of mapped items were available in FHIR as standard resources. The results are published as a paper on [PubMed](https://pubmed.ncbi.nlm.nih.gov/34042687/) and archieved on [FAIRDOMHub](https://fairdomhub.org/data_files/4210?version=2).

A new version of the MDS was released which is currently mapped to FHIR and subsequently FHIR profiles will be built with needed extensions for this use case.

#### Lessons learned

Unfortunately, the adoption of FHIR in clinical research is still low. Most of the problems encountered in mapping the MDS are not due to HL7 FHIR. They are due to unclear meaning or highly divergent usage of many of the characteristics of medical research projects in the community itself. That makes a mapping to community-consented and thus accepted and widely used definitions and value sets difficult. The current status of the FHIR specification with regards to clinical research is largely influenced by clinical trials and not by cohorts, registers, public health surveys and administrative databases.


---

// File: input/pagecontent/ninfea.md

The NInFEA dataset is accessible from the Physionet
repository: <https://doi.org/10.13026/c4n5-3b04>. This dataset has been
presented as part of a peer-reviewed, scientific article by Pani, D et
al. [*<span class="underline">Scientific
Data</span>*](https://www.nature.com/sdata) 8:30
(2021) <https://doi.org/10.1038/s41597-021-00811-3> which is entitled
"NInFEA: Non-Invasive Multimodal Foetal ECG-Doppler Dataset for
Antenatal Cardiology Research". The abstract is given below:

> *Non-invasive foetal electrocardiography (fECG) continues to be an
> open topic for research. The development of standard algorithms for
> the extraction of the fECG from the maternal electrophysiological
> interference is limited by the lack of publicly available reference
> datasets that could be used to benchmark different algorithms while
> providing a ground truth for foetal heart activity when an invasive
> scalp lead is unavailable. In this work, we present the Non-Invasive
> Multimodal Foetal ECG-Doppler Dataset for Antenatal Cardiology
> Research (NInFEA), the first open-access multimodal early-pregnancy
> dataset in the field that features simultaneous non-invasive
> electrophysiological recordings and foetal pulsed-wave Doppler (PWD).
> The dataset is mainly conceived for researchers working on fECG signal
> processing algorithms. The dataset includes 60 entries from 39
> pregnant women, between the 21<sup>st</sup> and 27<sup>th</sup> week
> of gestation. Each dataset entry comprises 27 electrophysiological
> channels (2048 Hz, 22 bits), a maternal respiration signal,
> synchronised foetal trans-abdominal PWD and clinical annotations
> provided by expert clinicians during signal acquisition. MATLAB
> snippets for data processing are also provided.*

Crucially for this guide, the NinFEA publication includes the details of
methodology to explain how the data set was created and how it can be
used for calibration. It also provides machine-accessible metadata for
the reported data set at the study
level: <https://doi.org/10.6084/m9.figshare.13283492>. This study level
metadata is represented in CSV (human) and JSON (machine) using numerous
sources of terminology.

The scientific publication, the data set, and the associated metadata
were reviewed against the RDA criteria for FAIR assessment (see earlier
section). The overall assessment at the study level, is that arguably
all essential FAIR assessment criteria are met, which is no surprise
given the fact that the dataset is provided as part of Physionet, which
is supported by a strong international community. However, we have
identified areas for improvement especially regarding interoperability
which will benefit from application of the HL7 FHIR standards.

Furthermore, the HL7 FHIR standards enable more detailed representation
of FAIR metadata at the anonymised patient level for method and context
which is currently limited to the full text of the publication (HTML and
PDF formats), which is not readily readable by machine. Making data FAIR
is an iterative process guided by the priority of the RDA maturity
indicators. Optimal level of FAIRness should be determined by
understanding the requirements of the community (rather than
perfection\!). Here we we are going to show what is possible using the
current HL7 FHIR standards, how these can bring unique and greatest
value and how HL7 FHIR-based solutions compare to alternative technical
options for FAIR Implementation.

### NinFEA: HL7 FHIR enabled FAIR improvements

Taking a curator approach, the features that the utilisation of the HL7
FHIR standards would improve FAIR implementation have been analysed,
even further for this NInFEA dataset. As well as how metadata could be
enhanced in a FAIR manner at the study and patient levels.

Observations made during the initial FAIR assessment:

1.  The metadata provided for the data set can be further extended, by
    harnessing the full text of the open-source paper
    (<https://doi.org/10.1038/s41597-021-00811-3>).

2.  Richer metadata would facilitate future reuse of the dataset to
    maximise it's value which is the major motivation for making data
    FAIR.

> Recommendations for FAIR data improvement enabled by HL7 FHIR:

1.  > Enriching the metadata using the HL7 FHIR standards is likely to
    > bring unique and greatest value. HL7 FHIR enhancement to make the
    > metadata more FAIR could be scaled through automation.

2.  > Developing HL7 FHIR resources and storing the data set in a HL7
    > FHIR server would allow easier access to more researchers, further
    > pushing the envelope for interoperability, going beyond Physionet.

3.  > Information on data provenance and license would be included in
    > the metadata with a machine-readable header on the HL7 FHIR
    > server.

4.  > Publishing the structure and elements as FAIRified data and
    > metadata provides richer support for the work done, thereby
    > building best practices.

Overall, the purpose of application for the dataset should drive finding
the optimal balance between acceptable cost and richness of metadata. We
have started this from the study level, provided already by Physionet
and enriched further from the full text paper, which is an open-source
publication. We will explore the library HL7 FHIR resource
([https://www.hl7.org/HL7
FHIR/library.html](https://www.hl7.org/fhir/library.html)) to follow-up
on the initial FAIR assessment, as noted in the list of observations.
Other technical options using the HL7 FHIR standards will be considered
and explored as well.


---

// File: input/pagecontent/PHT.md

### Description of the scenario

A frequent problem in medical research are legal restrictions regarding the accessibility of patient data, as they contain sensitive information and are subject to special regulatory protection, e.g. by the EU General Data Protection Regulation. Data with a concrete patient reference can only be used for research via four different legal bases: on the basis of the treatment contract, due to legal framework conditions, e.g., for infection protection, by explicit consent of the informed patient, and by anonymization before disclosure. But even if these narrow conditions are fulfilled, the release of data sets offers a potential for misuse, because the control possibilities of non-disclosure after sharing are limited for the data holder and he has to rely on the reliability of the partner. At the same time, the technical and organizational effort required to carry out concrete re-distribution is often underestimated.

It would be far more convenient and secure if data requests were executed locally on the data and the data did not have to travel to the evaluators. This is the principle idea of the Personal Health Train. The metaphor is intentional: the research hypothesis travels from station (data-holding institution) to station in machine-executable form like a train. At each station, the local query is executed or a statistical model is trained. After that, the train travels on, but the data does not leave the location, only aggregated information. Of course, such a concept makes hard demands on standards and security. Execution is always the responsibility of the local site, only signed algorithms are used, and transmission paths and access are secured. But the simplicity of integrating a new site is also important in real life. Data-holding centers cannot build an dedicated infrastructure for every new use case.

<div><img src="PHT-1.png" width="70%" /><br>Figure 1 - The Personal Health Train</div>
<br>

The figure shows an overview of the PHT infrastructure at an abstract level.  The central service coordinates the analysis train from station to station. Each station retrieves the train from a special repository in the Central Service and performs the analysis after decryption. After saving the results (red dots), the train is sent back to the Central Service, and the same process occurs for the following stations until the last station. 

### Summary of main findings

The abstract concept of the Personal Health Train is currently being implemented by various development teams, which have joined forces in a [GOFAIR Implementation Network](https://www.go-fair.org/implementation-networks/overview/personal-health-train/). Although domain-independent in principle, the access problem preferably concerns medical data, so that all use cases of the PHT are currently based on health data. Equally catchy is the use of established standards, as it would be nonsensical to write special queries for each individual station. For the area of structured clinical data, mapping to FHIR makes sense if it is not already standardized. Of course, this involves an effort that should not be underestimated in individual cases, especially since FHIR can be extended in various ways, but a Common Data Model is a prerequisite for the scenario.
Another challenge of the approach is that the queries have to be ready and executable in advance and cannot adapt to unforeseen situations. Experience teaches that the implementation of individual functions of the FHIR standard differs in different FHIR servers, e.g. the support of certain modifiers in FHIR Search. Also, the generic structure has to be considered, i.e. one site may have referenced diagnoses to cases and another site may have referenced cases to diagnoses.

### HL7 FHIR facilitating FAIR principles

This use case focuses in particular on the interoperability axis. FHIR offers the advantage here of a modular concept of linked resources, each representing a typical artifact of the domain. At the same time, the learning curve for developers in particular is lower than for other HL7 standards because modern web technologies such as REST, HTTP, TLS and OAuth are used. The use of international terminologies such as ICD-10, LOINC or SNOMED CT is still far too rare in practice; FHIR can, however, support their introduction for the sake of argument.


---

// File: input/pagecontent/RDAMetrics.md

### FAIR Data Maturity Model: specification and guidelines

The FAIR principles have to be considered as inspiring concepts but not
strict rules. This means that they may lead to diverse interpretations
and ambiguity. To remedy the different forms of FAIR Implementation, the
Research Data Alliance (RDA) Working Group "FAIR data maturity model"
was established in January 2019 to develop a common set of core
assessment criteria for FAIRness, as an RDA Recommendation. In the
course of 2019 and the first half of 2020, the WG established a set of
indicators and maturity levels for those indicators. The work culminated
in the release of the FAIR Data Maturity Model: specification and
guidelines. *Research Data
Alliance*. [DOI: 10.15497/RDA0050](https://doi.org/10.15497/RDA00050)).
This excellent specification has been adopted for FAIR assessment
throughout this implementation guide. It has also influenced the
"Recommendations for services in a FAIR data ecosystem", which includes
the Open Science Cloud
(EOSC) [DOI: 10.1016/j.patter.2020.100058](https://doi.org/10.1016/j.patter.2020.100058).

### Application of the FAIR Maturity Indicators

The FAIR maturity indicators are designed for re-use in approaches to
evaluation. They are accompanied by guidelines for their use which is
intended to assist evaluators to implement the indicators in the
evaluation approach or tool they manage. The exact way to evaluate data
based on the core criteria is up to the owners of the evaluation
approaches, taking into account the requirements of their community. The
objective is consistency of application to make sure that the
indicators, the maturity levels and the prioritisation are understood in
the same way.

### FAIR Data Maturity Indicators and priority


<table style="border-color: #000000; width:80%; border: 1px solid gray;">
<thead>
<tr style="border: 1px solid gray; background-color: #eeeeee;">
<th style="border: 1px solid gray;"></th>
<th style="border: 1px solid gray;"><strong>PRINCIPLE</strong></th>
<th style="border: 1px solid gray;"><strong>INDICATOR_ID</strong></th>
<th style="border: 1px solid gray;"><strong>FAIR DATA MATURITY INDICATOR</strong></th>
<th style="border: 1px solid gray;"><strong>PRIORITY</strong></th>
</tr>
</thead>
<tbody>
<tr style="border: 1px solid gray; background-color:#ccffcc;">
<td style="border: 1px solid gray; background-color:#eeeeee;vertical-align: middle;" rowspan="7"><strong>F</strong></td>
<td style="border: 1px solid gray; background-color:#eeeeee;">F1</td>
<td>RDA-F1-01M</td>
<td >Metadata is identified by a persistent identifier</td>
<td >Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ccffcc">
<td style="border: 1px solid gray; background-color:#eeeeee;">F1</td>
<td>RDA-F1-01D</td>
<td>Data is identified by a persistent identifier</td>
<td>Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ccffcc">
<td style="border: 1px solid gray; background-color:#eeeeee;">F1</td>
<td>RDA-F1-02M</td>
<td>Metadata is identified by a globally unique identifier</td>
<td>Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ccffcc">

<td style="border: 1px solid gray; background-color:#eeeeee;">F1</td>
<td>RDA-F1-02D</td>
<td>Data is identified by a globally unique identifier</td>
<td>Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ccffcc">

<td style="border: 1px solid gray; background-color:#eeeeee;">F2</td>
<td>RDA-F2-01M</td>
<td>Rich metadata is provided to allow discovery</td>
<td>Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ccffcc">

<td style="border: 1px solid gray; background-color:#eeeeee;">F3</td>
<td>RDA-F3-01M</td>
<td>Metadata includes the identifier for the data</td>
<td>Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ccffcc">

<td style="border: 1px solid gray; background-color:#eeeeee;">F4</td>
<td>RDA-F4-01M</td>
<td>Metadata is offered in such a way that it can be harvested and indexed</td>
<td>Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ffffe6">
<td style="border: 1px solid gray; background-color:#eeeeee;vertical-align: middle;" rowspan="12"><strong>A</strong></td>
<td style="border: 1px solid gray; background-color:#eeeeee;">A1</td>
<td>RDA-A1-01M</td>
<td>Metadata contains information to enable the user to get access to the data</td>
<td>Important</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ccffcc">

<td style="border: 1px solid gray; background-color:#eeeeee;">A1</td>
<td>RDA-A1-02M</td>
<td>Metadata can be accessed manually (i.e. with human intervention)</td>
<td>Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ccffcc">

<td style="border: 1px solid gray; background-color:#eeeeee;">A1</td>
<td>RDA-A1-02D</td>
<td>Data can be accessed manually (i.e. with human intervention)</td>
<td>Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ccffcc">

<td style="border: 1px solid gray; background-color:#eeeeee;">A1</td>
<td>RDA-A1-03M</td>
<td>Metadata identifier resolves to a metadata record</td>
<td>Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ccffcc">

<td style="border: 1px solid gray; background-color:#eeeeee;">A1</td>
<td>RDA-A1-03D</td>
<td>Data identifier resolves to a digital object</td>
<td>Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ccffcc">

<td style="border: 1px solid gray; background-color:#eeeeee;">A1</td>
<td>RDA-A1-04M</td>
<td>Metadata is accessed through standardised protocol</td>
<td>Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ccffcc">

<td style="border: 1px solid gray; background-color:#eeeeee;">A1</td>
<td>RDA-A1-04D</td>
<td>Data is accessible through standardised protocol</td>
<td>Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ffffe6">

<td style="border: 1px solid gray; background-color:#eeeeee;">A1</td>
<td>RDA-A1-05D</td>
<td>Data can be accessed automatically (i.e. by a computer program)</td>
<td>Important</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ccffcc">

<td style="border: 1px solid gray; background-color:#eeeeee;">A1.1</td>
<td>RDA-A1.1-01M</td>
<td>Metadata is accessible through a free access protocol</td>
<td>Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ffffe6">

<td style="border: 1px solid gray; background-color:#eeeeee;">A1.1</td>
<td>RDA-A1.1-01D</td>
<td>Data is accessible through a free access protocol</td>
<td>Important</td>
</tr>
<tr style="border: 1px solid gray; background-color: #e6f2ff">

<td style="border: 1px solid gray; background-color:#eeeeee;">A1.2</td>
<td>RDA-A1.2-01D</td>
<td>Data is accessible through an access protocol that supports authentication and authorisation</td>
<td>Useful</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ccffcc">

<td style="border: 1px solid gray; background-color:#eeeeee;">A2</td>
<td>RDA-A2-01M</td>
<td>Metadata is guaranteed to remain available after data is no longer available</td>
<td>Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ffffe6">
<td style="border: 1px solid gray; background-color:#eeeeee;vertical-align: middle;" rowspan="12"><strong>I</strong></td>
<td style="border: 1px solid gray; background-color:#eeeeee;">I1</td>
<td>RDA-I1-01M</td>
<td>Metadata uses knowledge representation expressed in standardised format</td>
<td>Important</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ffffe6">

<td style="border: 1px solid gray; background-color:#eeeeee;">I1</td>
<td>RDA-I1-01D</td>
<td>Data uses knowledge representation expressed in standardised format</td>
<td>Important</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ffffe6">

<td style="border: 1px solid gray; background-color:#eeeeee;">I1</td>
<td>RDA-I1-02M</td>
<td>Metadata uses machine-understandable knowledge representation</td>
<td>Important</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ffffe6">

<td style="border: 1px solid gray; background-color:#eeeeee;">I1</td>
<td>RDA-I1-02D</td>
<td>Data uses machine-understandable knowledge representation</td>
<td>Important</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ffffe6">

<td style="border: 1px solid gray; background-color:#eeeeee;">I2</td>
<td>RDA-I2-01M</td>
<td>Metadata uses FAIR-compliant vocabularies</td>
<td>Important</td>
</tr>
<tr style="border: 1px solid gray; background-color: #e6f2ff">

<td style="border: 1px solid gray; background-color:#eeeeee;">I2</td>
<td>RDA-I2-01D</td>
<td>Data uses FAIR-compliant vocabularies</td>
<td>Useful</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ffffe6">

<td style="border: 1px solid gray; background-color:#eeeeee;">I3</td>
<td>RDA-I3-01M</td>
<td>Metadata includes references to other metadata</td>
<td>Important</td>
</tr>
<tr style="border: 1px solid gray; background-color: #e6f2ff">

<td style="border: 1px solid gray; background-color:#eeeeee;">I3</td>
<td>RDA-I3-01D</td>
<td>Data includes references to other data</td>
<td>Useful</td>
</tr>
<tr style="border: 1px solid gray; background-color: #e6f2ff">

<td style="border: 1px solid gray; background-color:#eeeeee;">I3</td>
<td>RDA-I3-02M</td>
<td>Metadata includes references to other data</td>
<td>Useful</td>
</tr>
<tr style="border: 1px solid gray; background-color: #e6f2ff">

<td style="border: 1px solid gray; background-color:#eeeeee;">I3</td>
<td>RDA-I3-02D</td>
<td>Data includes qualified references to other data</td>
<td>Useful</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ffffe6">

<td style="border: 1px solid gray; background-color:#eeeeee;">I3</td>
<td>RDA-I3-03M</td>
<td>Metadata includes qualified references to other metadata</td>
<td>Important</td>
</tr>
<tr style="border: 1px solid gray; background-color: #e6f2ff">

<td style="border: 1px solid gray; background-color:#eeeeee;">I3</td>
<td>RDA-I3-04M</td>
<td>Metadata include qualified references to other data</td>
<td>Useful</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ccffcc">
<td style="border: 1px solid gray; background-color:#eeeeee;vertical-align: middle;" rowspan="10"><strong>R</strong></td>
<td style="border: 1px solid gray; background-color:#eeeeee;">R1</td>
<td>RDA-R1-01M</td>
<td>Plurality of accurate and relevant attributes are provided to allow reuse</td>
<td>Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ccffcc">

<td style="border: 1px solid gray; background-color:#eeeeee;">R1.1</td>
<td>RDA-R1.1-01M</td>
<td>Metadata includes information about the licence under which the data can be reused</td>
<td>Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ffffe6">

<td style="border: 1px solid gray; background-color:#eeeeee;">R1.1</td>
<td>RDA-R1.1-02M</td>
<td>Metadata refers to a standard reuse licence</td>
<td>Important</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ffffe6">

<td style="border: 1px solid gray; background-color:#eeeeee;">R1.1</td>
<td>RDA-R1.1-03M</td>
<td>Metadata refers to a machine-understandable reuse licence</td>
<td>Important</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ffffe6">

<td style="border: 1px solid gray; background-color:#eeeeee;">R1.2</td>
<td>RDA-R1.2-01M</td>
<td>Metadata includes provenance information according to community-specific standards</td>
<td>Important</td>
</tr>
<tr style="border: 1px solid gray; background-color: #e6f2ff">

<td style="border: 1px solid gray; background-color:#eeeeee;">R1.2</td>
<td>RDA-R1.2-02M</td>
<td>Metadata includes provenance information according to a cross-community language</td>
<td>Useful</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ccffcc">

<td style="border: 1px solid gray; background-color:#eeeeee;">R1.3</td>
<td>RDA-R1.3-01M</td>
<td>Metadata complies with a community standard</td>
<td>Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ccffcc">

<td style="border: 1px solid gray; background-color:#eeeeee;">R1.3</td>
<td>RDA-R1.3-01D</td>
<td>Data complies with a community standard</td>
<td>Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ccffcc">

<td style="border: 1px solid gray; background-color:#eeeeee;">R1.3</td>
<td>RDA-R1.3-02M</td>
<td>Metadata is expressed in compliance with a machine-understandable community standard</td>
<td>Essential</td>
</tr>
<tr style="border: 1px solid gray; background-color:#ffffe6">

<td style="border: 1px solid gray; background-color:#eeeeee;">R1.3</td>
<td>RDA-R1.3-02D</td>
<td>Data is expressed in compliance with a machine-understandable community standard</td>
<td>Important</td>
</tr>
</tbody>
</table>



---

// File: input/pagecontent/recommendations.md

1.  **FAIRness** is an ongoing aspiration driven by application rather a
    pursuit of perfection for its own sake. Therefore, an **incremental
    approach** for **continuous improvement** should be followed.
    
    1.  Do not pretend to implement everything from the beginning i.e.
        Do not try to "boil the ocean"\!
        
        1.  in terms of principles to be realized
        
        2.  in terms of maturity level
        
        3.  in terms of coverage across communities. For example, a
            solution applicable within a well-defined community may not
            be fit for purpose for a wider target (e.g., global search)
    
    2.  You need to determine where you are with the selected data and
        metadata ("as is" FAIR assessment), what you want to achieve and
        the resources you have available.
    
    3.  Metrics, such as the [RDA FAIR data maturity
        indicators](RDAMetrics.html), are essential. These are used to
        evaluate improvements made in an iterative manner, to realize
        successful objectives.

2.  The **HL7 FHIR** standard is a widely recognized and used standard
    in the health space providing **value** in
    the **implementation** of **FAIR health data and services**
    
    1.  Even if HL7 FHIR can provide support to data FAIRification,
        implementing HL7 FHIR is not a sufficient requirement for being
        FAIR. This guide provides suggestions on how to use FHIR to
        improve FAIRness.
    
    2.  The HL7 FHIR standard provides its highest value in
        realizing **Interoperability** and Reusability principles.
        Hybrid solutions, i.e by using combined FHIR and non-FHIR
        technologies, can be used as well to realize the other FAIR
        principles.
    
    3.  This would not exclude the possibility to realize also
        Findability and Accessibility principles by using FHIR. However,
        a cost benefit evaluation, considering the level of adoption by
        that community, should be accomplished.

3.  As with the FAIR principles in general, the FHIR implementation of
    the FAIR principles should follow an **incremental approach.**
    
    1.  in this sense, depending on the context of usage, such as
        standards adopted by the community, the cost-effectiveness and
        the community goals, an **architectural migration path with a
        consistent set of intermediate objectives should be defined**.
        Objectives might be related to:
        
        1.  the RDA indicators to be realized;
        
        2.  the maturity of their realization;
        
        3.  how much is realized by using HL7 FHIR.
    
    2.  A **minimal set of FAIR data maturity indicators should be
        prioritized** by local application or business needs. RDA has
        given an essential minimal set as part of their canonical
        specification. Some pragmatic considerations:
        
        1.  earliest progress is likely to be made with the principles
            for Findability, Accessibility and Reusability.
        
        2.  Much tougher and longer term is the implementation of
            Interoperability when data are not FHIR by design.
            Interoperability is one the strengths of the FHIR standard. 
        
        3.  FHIR provides a rich and expressive source of metadata
            elements which are critical for the implementation of
            Reusability. They also include metadata elements to describe
            data provenance and license for data usage.

4.  **FAIR / FHIR by design** is the future shape of success. In fact
    (a) it is hard to make data FAIR when "source" data are poor (even
    if potentially findable and accessible...) or not designed for that;
    (b) the FHIR conversion of data may be not easy or not sufficient if
    data have not been designed from the beginning for that purpose.
    Thus:
    
    1.  the availability of natively conformant FHIR data is an added
        value
    
    2.  the specification/adoption of FHIR profiles against which to
        assess can help in raising the quality and the FAIRness of data.

Please refer to the [HL7 FHIR and FAIR
principles](https://confluence.hl7.org/display/SOA/HL7+FHIR+and+FAIR+principles) and [HL7
FHIR and RDA FAIR Data Maturity
Indicators](https://confluence.hl7.org/display/SOA/HL7+FHIR+and+RDA+FAIR+Data+Maturity+Indicators) for
more details about the implementation of the FAIR principles and the RDA
indicators.


---

// File: input/pagecontent/rw-overview.md

This guide has been designed following an incremental,
iterative, and meet-in-the-middle approach, considering different
kinds of study cases as research studies, publications, sharing of
health data and others (see [Methodology](methodology.html) for more
details).

A selected set of these real-world cases (listed below) have been
summarized for exemplary purposes, providing for each of them the
following information:

1.  A short description of the scenario

2.  A summary of the main findings, gaps and lessons learned.

3.  A description of where and how HL7 FHIR can be or has been used to
    better support the FAIR principles.

The selected real-world cases are described in the following pages:

1.  The [FAIR4Health Project](FAIR4Health.html)

2.  The [Medical Information Mart for Intensive Care](mimic.html)
    (MIMIC)

3.  The [Immunology Database and Analysis Portal](immPort.html)
    (ImmPort)

4.  The [Non-Invasive Multimodal Foetal ECG-Doppler Dataset for
    Antenatal Cardiology Research](ninfea.html) NInFEA

5.  The [Leipzig Health Atlas](leipzigHealthAtlas.html) (LHA)

6.  The [NFDI4Health consortia](NFDI4Health.html)

7.  The [CEDAR](cedar.html)

8.  The [Personal Health Train](PHT.html)


---

// File: input/pagecontent/scenarios.md

### WARNING

This is just a PLACEHOLDER

### SECTION 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.

#### SECTION 1.1

Sed ut perspiciatis unde omnis iste natus error sit voluptatem
accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
illo inventore veritatis et quasi architecto beatae vitae dicta sunt
explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
voluptas nulla pariatur?


---

// File: input/pagecontent/spec.md

### A Heading
You can also use markdown if that's your thing

And an icon: ![resource](icon-resource.png)


---

// File: input/pagecontent/StructureDefinition-ext-myExtension-intro.md

### Introduction
Introductory guidance on myExtension


---

// File: input/pagecontent/StructureDefinition-ext-myExtension-note.md

### Notes
Usage notes on myExtension

---

// File: input/pagecontent/terminology.md

### Making Terminologies FAIR

The FAIR principles have recently been implemented as “Ten simple rules
for making a vocabulary FAIR” by Cox et al., 2021
(<https://doi.org/10.1371/journal.pcbi.1009041>) to transform a legacy
vocabulary into a FAIR vocabulary. This can be used to provide
unambiguous annotation of data which increases interoperability and
enables data integration. The ten simple rules are applied to Simple
Knowledge Organisation System (SKOS) and Web Ontology Language (OWL)
with examples. This open source (CC BY 4.0) publication is summarized as
follows (adapted from Table 1):

Findability

  - Each vocabulary is denoted by a global, unique, persistent and
    machine resolvable identifier (GUPRI).

  - Each term is denoted by a GUPRI.

  - It is possible to search for a term or vocabulary and get a GUPRI
    for it.

  - The vocabulary is available from at least one repository recognised
    by the community.

Accessibility

  - When the term identifier is requested, a machine-readable
    representation of the term is returned using semantic web standards
    (<https://www.w3.org/standards/semanticweb/data>).

Interoperability

  - At least one representation conforms to a community standard for
    vocabularies. The vocabulary includes mapping relations to other
    vocabularies.

Reusability

  - The license for use of the vocabulary is clear, accessible, and
    denoted by a GUPRI.

  - Enough metadata at vocabulary and term levels is provided to include
    provenance and maintenance information.

  - The definitions are sufficient for a user to understand what each
    term means.

### Selection of Terminologies

There are many terminologies and ontologies available via public
repositories such as the BioPortal
([https://bioportal.bioontology.org](https://bioportal.bioontology.org/))
hosted by NBCO and Ontology Lookup Service, OLS
(<https://www.ebi.ac.uk/ols/index>) hosted by EMBL-EBI. In addition,
they are also available directly from the terminology or ontology
providers e.g. SNOMED CT, MeDRA amd LOINC. The selection of
terminologies and ontologies for a particular application can be
difficult, although this can be informed by further set of simple rules
such as Malone et al 2016
(<https://doi.org/10.1371/journal.pcbi.1004743>).

### Using Terminologies in HL7 FHIR

Many elements in HL7 FHIR have a coded value, such as "gender" in the
Patient resource or "bodySite" in the Observation resource. These codes
are part of a code system that can be defined at different places (see
the [HL7 FHIR
Terminology](https://www.hl7.org/fhir/terminologies.html)):

  - A set of fixed values from the HL7 FHIR specification (e.g. in the
    case of administrative gender this can be one out of
    four [values](https://www.hl7.org/fhir/codesystem-administrative-gender.html),
    namely "male", "female", "other", or "unknown")

  - A code included in a Request for Comments (RFC) from the Internet
    Engineering Task Force (e.g. MIME types) or HL7 specifications (e.g.
    HL7 v2)

  - A dictionary, look up table, or enumeration that is locally
    maintained and defined by an application

  - An external terminology or ontology (e.g. SNOMED CT or LOINC)

In the context of this IG, we focus mainly on external terminologies or
ontologies.

The HL7 FHIR specification describes how to select code systems in
section 4.1.2 of the Terminology page ([https://www.hl7.org/HL7
FHIR/terminologies.html\#system](https://www.hl7.org/fhir/terminologies.html#system))
and the recommendations given here are an addition to what is mentioned
on that page.

Implementing FAIR requires the use of terminologies that are themselves
FAIR-compliant. To reach an acceptable level of FAIRness, the
terminology should follow the ten simple rules for making a vocabulary
FAIR, as described by Cox et al.

A vocabulary offered through a HL7 FHIR terminology service, makes it
substantially FAIR.

First of all, a HL7 FHIR terminology service ensures that every code
system, code, value set, and concept map has an unique identifier.

Enable the provision of rich metadata.

HL7 FHIR has a representation as Turtle RDF that offers a bridge to
Semantic Web. In any case, a HL7 FHIR terminology service uses the
standard HL7 FHIR operations and data formats, making it interoperable
with other HL7 FHIR servers and clients. Finally, the terminology
service Capability Statement provides a machine-readable representation
of the functionality supported by a terminology server, helping
reusability.


---

// File: input/fsh/aliases.fsh

Alias: $library-type = http://terminology.hl7.org/CodeSystem/library-type
Alias: $resource-types = http://hl7.org/fhir/resource-types
// Alias: $NCBITAXON = http://purl.bioontology.org/ontology/NCBITAXON
Alias: $usage-context-type = http://terminology.hl7.org/CodeSystem/usage-context-type
// Alias: $efo = http://www.ebi.ac.uk/efo
// Alias: $obo = http://purl.obolibrary.org/obo
Alias: $nci-thesaurus  = http://ncithesaurus-stage.nci.nih.gov
Alias: $sct = http://snomed.info/sct
Alias: $atc = http://www.whocc.no/atc
Alias: $ucum = http://unitsofmeasure.org
Alias: $radlex = http://radlex.org
Alias: $example = http://example.org
Alias: $researchStudy-relatesTo = http://hl7.org/fhir/StructureDefinition/researchStudy-relatesTo
Alias: $research-study-prim-purp-type = http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type
Alias: $related-artifact-type = http://hl7.org/fhir/related-artifact-type
Alias: $citation-artifact-classifier = http://terminology.hl7.org/CodeSystem/citation-artifact-classifier
Alias: $spdx-license = http://hl7.org/fhir/spdx-license
Alias: $uri = urn:ietf:rfc:3986
Alias: $Citation = http://hl7.org/fhir/StructureDefinition/Citation


---

// File: input/fsh/extensions.fsh



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Extension: ExtContext
Id:   researchStudy-context
Title:  "Usage Context [ResearchStudy]"
Description: "This extension allows ResearchStudy to provide richer information about the context of the study, when not already covered by the already defined elements"

* ^context[0].type = #fhirpath
* ^context[=].expression = "ResearchStudy"
// publisher, contact, and other metadata could be defined here using caret syntax (omitted)
* value[x] only UsageContext


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Extension: ExtCopyright
Id:   copyright
Title:  "Copyright"
Description: "This extension may be used to provide Copyright information about the set of data described by this resource"

* value[x] only markdown 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Extension: ExtLicenceCodeable
Id:   licenceCodeable
Title:  "Licence Terms as CodeableConcept"
Description: "This extension may be used to provide machine-processable Licence information about the set of data described by this resource"

* value[x] only CodeableConcept 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Extension: ExtLicenceAttachment
Id:   licenceAttachment
Title:  "Licence Terms as Attachment"
Description: "This extension may be used to provide detailed Licence information about the set of data described by this resource"

* value[x] only Attachment 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Extension: ExtRelatedContent
Id:   library-relatedContent
Title:  "Content as RelatedArtifact [Library]"
Description: "This extension allows Library to provide information about content as RelatedArtifact. In the current FHIR version content is an Attachment."

* ^context[0].type = #fhirpath
* ^context[=].expression = "Library"
// publisher, contact, and other metadata could be defined here using caret syntax (omitted)
* value[x] only RelatedArtifactF4F

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Extension: ExtSubjectOther
Id:   subjectOther
Title:  "Other Subjects [Resource]"
Description: "This extension allows to record kinds of subjects that are not currently supported by some resources (e.g.,DocumentManifest limited to Patient, Practitioner, Group, Device for )"

// publisher, contact, and other metadata could be defined here using caret syntax (omitted)
* value[x] only Reference
* valueReference only Reference(Resource)

Extension: ExtClassifier
Id:   classifier
Title:  "Classifier [Resource]"
Description: "This extension allows to assign this resource to an organizing scheme"

// publisher, contact, and other metadata could be defined here using caret syntax (omitted)
* value[x] only CodeableConcept

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Extension: ExtRelatedArtifactType 
Id:   relatedArtifactType
Title:  "Type [RelatedArtifact]"
Description: "This extension enanches the current RelatedArtifact data type with extending the supported relationship types as specified in R5"

// * ^context[0].type = #fhirpath
// * ^context[=].expression = "RelatedArtifact"
	
* value[x] only CodeableConcept
* valueCodeableConcept from VsRelatedArtifactType (extensible)




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Extension: ExtRelatedArtifactClassifier
Id:   relatedArtifactClassifier
Title:  "Classifier [RelatedArtifact]"
Description: "This extension enanches the current RelatedArtifact data type with the classifier element as specified in R5"

// * ^context[0].type = #fhirpath
// * ^context[=].expression = "RelatedArtifact"
// * extension contains classifier 0..* 
	
* value[x] only CodeableConcept
// this value set is not in the current 4b version decide if to include a simliar vlaue set within this guide
// * extension[classifier].valueCodeableConcept from http://hl7.org/fhir/ValueSet/citation-artifact-classifier [example)
// * extension[document].value[x] only Attachment


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Extension: ExtRelatedArtifactResourceReference
Id:   relatedArtifactResourceReference
Title:  "ResourceReference [RelatedArtifact]"
Description: "This extension enanches the current RelatedArtifact data type allowing to reference FHIR resources"


// * ^context[0].type = #fhirpath
// * ^context[=].expression = "RelatedArtifact"

// * extension contains resourceReference 0..1
* value[x] only Reference
* value[x] only Reference(Resource)



---

// File: input/fsh/profiles.fsh



//====== Data Types =====================================


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:  RelatedArtifactF4F
Parent:   RelatedArtifact
Id:       RelatedArtifact-uv-f4f
Title:    "RelatedArtifact [FHIR for FAIR]"
Description: "This profile enhances the current RelatedArtifact data with the enhancements identified in FHIR R5"
//-------------------------------------------------------------------------------------------

*  extension contains 
 
  ExtRelatedArtifactClassifier named classifier 0..1
  and ExtRelatedArtifactResourceReference named resourceReference 0..1
  and ExtRelatedArtifactType named relationshipType 0..1




//====== Resources =====================================


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:  LibraryF4F
Parent:   Library
Id:       Library-uv-f4f
Title:    "Library [Study Level Medatata]"
Description: "This profile defines how to use the Library resource to convey metadata information for a FAIR dataset realized by using HL7 FHIR. An extension is used to allow to refer as "
//-------------------------------------------------------------------------------------------
* extension contains 	
	ExtLicenceCodeable named licenceCodeable 0..1
	and ExtLicenceAttachment named licenceAttachment 0..1		
	and ExtRelatedContent named relatedContent 0..*
	and ExtSubjectOther named subjectOther 0..*
	and ExtClassifier named classifier 0..*

* extension[licenceCodeable]
* extension[licenceAttachment]
* extension[relatedContent]
* extension[subjectOther]
* extension[classifier]

* url ^short = "Canonical identifier for this library, represented as a URI (globally unique)."
* identifier ^short = "Additional identifier for the library"
* name ^short = "Name for this library (computer friendly)."
* title ^short = "Name for this library (human friendly)."
* status ^short = "draft | active | retired |unknown"
* type ^short = "logic-library | model-definition | asset-collection |module-definition"
* subject[x] ^short = "Type of subject the library content is focused on"
* copyright ^short = "Use and/or publishing restrictions."
* purpose ^short = "Why this library is defined."
* relatedArtifact only RelatedArtifactF4F
// * content MS 
// * content 1..* 
// * content only AttachmentF4F
* content.url 1.. 


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:  ResearchStudyF4F
Parent:   ResearchStudy
Id:       ResearchStudy-uv-f4f
Title:    "ResearchStudy [Study Level Medatata]"
Description: "This profile defines how to use the ResearchStudy resource to convey metadata information for a FAIR collection of data at the study level realized by using HL7 FHIR"
//-------------------------------------------------------------------------------------------

* extension contains 
	ExtCopyright named copyright 0..1
	and ExtLicenceAttachment named licenceAttachment 0..1	
	and ExtLicenceCodeable named licenceCodeable 0..1
	and ExtContext named context 0..*

* extension[copyright]
* extension[licenceCodeable]
* extension[licenceAttachment]
* extension[context]


// * identifier MS
* identifier ^slicing.discriminator[0].type = #value
* identifier ^slicing.discriminator[=].path = "system"
* identifier ^slicing.rules = #open
* identifier contains
    url 0..*
* identifier[url] ^short = "GUPRI (uri)"
* identifier[url] ^definition = "Globally Unique, Persistent and Resolvable Identifier"
* identifier[url].system = $uri
* identifier[url].value ^short = "uri"


* title ^short = "Name for this study."
* status  ^short = "The current state of the study."
* primaryPurposeType ^short = "A classification of the intent of the study."
* relatedArtifact only RelatedArtifactF4F
* description ^short = "What this is study doing."
* objective ^short = "A goal for the study."

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:  ListF4F
Parent:   List
Id:       List-uv-f4f
Title:    "List [Subject Level Medatata]"
Description: "This profile defines how to use the List resource to convey subject level metadata information for a FAIR collection of data by using HL7 FHIR"

//-------------------------------------------------------------------------------------------
* extension contains 
	ExtCopyright named copyright 0..1 
	and ExtLicenceCodeable named licenceCodeable 0..1
	and ExtLicenceAttachment named licenceAttachment 0..1
	and ExtSubjectOther named subjectOther 0..*
	and ExtClassifier named classifier 0..*
	
* extension[copyright]
* extension[licenceCodeable]
* extension[licenceAttachment]
* extension[subjectOther]
* extension[classifier]

// * identifier MS
* identifier ^slicing.discriminator[0].type = #value
* identifier ^slicing.discriminator[=].path = "system"
* identifier ^slicing.rules = #open
* identifier contains
    url 0..*
* identifier[url] ^short = "GUPRI (uri)"
* identifier[url] ^definition = "Globally Unique, Persistent and Resolvable Identifier"
* identifier[url].system = $uri
* identifier[url].value ^short = "uri"


* status ^short = "current | retired | entered-in-error"
* subject ^short = "Subject of the listed resources"
* code ^short = "What the purpose of this list is"
* date ^short = "When the list was prepared."
* source ^short = "Who and/or what defined the list contents (aka Author)."
* note ^short = "Comments about the list"
* entry.item ^short = "A reference to the listed resource."



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:  DocumentManifestF4F
Parent:   DocumentManifest
Id:       DocumentManifest-uv-f4f
Title:    "DocumentManifest [Subject Level Medatata]"
Description: "This profile defines how to use the DocumentManifest resource to convey subject level metadata information for a FAIR collection of data by using HL7 FHIR"

//-------------------------------------------------------------------------------------------
* extension contains 
	ExtCopyright named copyright 0..1 
	and ExtLicenceCodeable named licenceCodeable 0..1
	and ExtLicenceAttachment named licenceAttachment 0..1
	and ExtSubjectOther named subjectOther 0..*
	and ExtClassifier named classifier 0..*
	
* extension[copyright]
* extension[licenceCodeable]
* extension[licenceAttachment]
* extension[subjectOther]
* extension[classifier]

* masterIdentifier ^short = "Unique Identifier for the set of Items in manifest"
* identifier ^short = "Other identifiers for the manifest."
* status ^short = "current | superseded |entered-in-error"
* subject ^short = "Subject of the listed resources"
* created ^short = "When this document manifest created."
* author ^short = "Who and/or what authored the DocumentManifest."
// * recipient 0..
* description ^short = "Human-readable description (title)."
* content ^short = "Items in manifest."
* related.identifier ^short = "Identifiers of things that are related."
* related.ref	^short = "Related Resource."

/*========== BEGIN COMMENT 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:  AttachmentF4F
Parent:   Attachment
Id:       Attachment-uv-f4f
Title:    "Attachment (FHIR for FAIR)"
Description: "This profile defines how to use the Attachment data type to convey metadata information for a FAIR collection of data at the study level realized by using HL7 FHIR"
//-------------------------------------------------------------------------------------------
// * data 0..0 => to be checked

* url 1..1 MS

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:  CitationF4F
Parent:   Citation
Id:       Citation-uv-f4f
Title:    "Citation (Study Level Medatata)"
Description: "This profile defines how to use the Citation resource to convey metadata information for a FAIR collection of data at the study level realized by using HL7 FHIR"
//-------------------------------------------------------------------------------------------
* url MS
* identifier MS
* title MS
* status MS
* date MS
* summary MS
* publisher MS
* webLocation MS
* contributorship MS
* keywordList MS
* relatedArtifact MS


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:  EvidenceReportF4F
Parent:   EvidenceReport
Id:       EvidenceReport-uv-f4f
Title:    "EvidenceReport (Subject Level Medatata)"
Description: "This profile defines how to use the EvidenceReport resource to convey metadata information for a FAIR collection of data at the subject level realized by using HL7 FHIR"
//-------------------------------------------------------------------------------------------
* url MS
* status MS
* citeAsReference MS
* subject MS 
* relatedArtifact 1.. MS

END COMMENT  

====*/







---

// File: input/fsh/terminology/RelatedArtifactType.fsh


ValueSet: VsRelatedArtifactType
Id: related-artifact-type
Title: "RelatedArtifactType [ValueSet]"
Description: "The type of relationship to the related artifact."
* ^experimental = false
* codes from system CsRelatedArtifactType

//=======================================
CodeSystem: CsRelatedArtifactType
Id: related-artifact-type
Title: "RelatedArtifactType [CodeSystem]"
Description: "The type of relationship to the related artifact."
* ^experimental = false
* ^caseSensitive = true
* ^content = #complete
* #documentation "Documentation" "Additional documentation for the knowledge resource. This would include additional instructions on usage as well as additional information on clinical context or appropriateness."
* #justification "Justification" "The target artifact is a summary of the justification for the knowledge resource including supporting evidence, relevant guidelines, or other clinically important information. This information is intended to provide a way to make the justification for the knowledge resource available to the consumer of interventions or results produced by the knowledge resource."
* #citation "Citation" "Bibliographic citation for papers, references, or other relevant material for the knowledge resource. This is intended to allow for citation of related material, but that was not necessarily specifically prepared in connection with this knowledge resource."
* #predecessor "Predecessor" "The previous version of the knowledge resource."
* #successor "Successor" "The next version of the knowledge resource."
* #derived-from "Derived From" "This artifact is derived from the target artifact. This is intended to capture the relationship in which a particular knowledge resource is based on the content of another artifact, but is modified to capture either a different set of overall requirements, or a more specific set of requirements such as those involved in a particular institution or clinical setting. The artifact may be derived from one or more target artifacts."
* #depends-on "Depends On" "This artifact depends on the target artifact. There is a requirement to use the target artifact in the creation or interpretation of this artifact."
* #composed-of "Composed Of" "This artifact is composed of the target artifact. This artifact is constructed with the target artifact as a component. The target artifact is a part of this artifact. (A dataset is composed of data.)."
* #part-of "Part Of" "This artifact is a part of the target artifact. The target artifact is composed of this artifact (and possibly other artifacts)."
* #amends "Amends" "This artifact amends or changes the target artifact. This artifact adds additional information that is functionally expected to replace information in the target artifact. This artifact replaces a part but not all of the target artifact."
* #amended-with "Amended With" "This artifact is amended with or changed by the target artifact. There is information in this artifact that should be functionally replaced with information in the target artifact."
* #appends "Appends" "This artifact adds additional information to the target artifact. The additional information does not replace or change information in the target artifact."
* #appended-with "Appended With" "This artifact has additional information in the target artifact."
* #cites "Cites" "This artifact cites the target artifact. This may be a bibliographic citation for papers, references, or other relevant material for the knowledge resource. This is intended to allow for citation of related material, but that was not necessarily specifically prepared in connection with this knowledge resource."
* #cited-by "Cited By" "This artifact is cited by the target artifact."
* #comments-on "Is Comment On" "This artifact contains comments about the target artifact."
* #comment-in "Has Comment In" "This artifact has comments about it in the target artifact.  The type of comments may be expressed in the targetClassifier element such as reply, review, editorial, feedback, solicited, unsolicited, structured, unstructured."
* #contains "Contains" "This artifact is a container in which the target artifact is contained. A container is a data structure whose instances are collections of other objects. (A database contains the dataset.)."
* #contained-in "Contained In" "This artifact is contained in the target artifact. The target artifact is a data structure whose instances are collections of other objects."
* #corrects "Corrects" "This artifact identifies errors and replacement content for the target artifact."
* #correction-in "Correction In" "This artifact has corrections to it in the target artifact. The target artifact identifies errors and replacement content for this artifact."
* #replaces "Replaces" "This artifact replaces or supersedes the target artifact. The target artifact may be considered deprecated."
* #replaced-with "Replaced With" "This artifact is replaced with or superseded by the target artifact. This artifact may be considered deprecated."
* #retracts "Retracts" "This artifact retracts the target artifact. The content that was published in the target artifact should be considered removed from publication and should no longer be considered part of the public record."
* #retracted-by "Retracted By" "This artifact is retracted by the target artifact. The content that was published in this artifact should be considered removed from publication and should no longer be considered part of the public record."
* #signs "Signs" "This artifact is a signature of the target artifact."
* #similar-to "Similar To" "This artifact has characteristics in common with the target artifact. This relationship may be used in systems to “deduplicate” knowledge artifacts from different sources, or in systems to show “similar items”."
* #supports "Supports" "This artifact provides additional documentation for the target artifact. This could include additional instructions on usage as well as additional information on clinical context or appropriateness."
* #supported-with "Supported With" "The target artifact contains additional documentation for the knowledge resource. This could include additional instructions on usage as well as additional information on clinical context or appropriateness."
* #transforms "Transforms" "This artifact was generated by transforming the target artifact (e.g., format or language conversion). This is intended to capture the relationship in which a particular knowledge resource is based on the content of another artifact, but changes are only apparent in form and there is only one target artifact with the “transforms” relationship type."
* #transformed-into "Transformed Into" "This artifact was transformed into the target artifact (e.g., by format or language conversion)."
* #transformed-with "Transformed With" "This artifact was generated by transforming a related artifact (e.g., format or language conversion), noted separately with the “transforms” relationship type. This transformation used the target artifact to inform the transformation. The target artifact may be a conversion script or translation guide."

---

// File: input/fsh/examples/documentManifest.fsh

Instance: example-f4f-manifest
InstanceOf: DocumentManifestF4F
Usage: #example

* extension[copyright].valueMarkdown = "(c) Best FAIR organization"
* extension[licenceCodeable].valueCodeableConcept = $spdx-license#CC-BY-NC-4.0 "Creative Commons Attribution Non Commercial 4.0 International"
* masterIdentifier.system =	$uri
* masterIdentifier.value = "https://example.org/registry/persistentID"
* subject = Reference(Patient/example-f4f-patient)
* status = #current
* created = "2021-11-17"
* author.display = "Best FAIR organization"
* description = "This is an example of subject level data collection metadata"
* content[0] = Reference(Patient/example-f4f-patient)
* content[+] = Reference(Condition/example-f4f-condition)
* content[+] = Reference(MedicationStatement/example-f4f-medicationStatement-1)
* content[+] = Reference(MedicationStatement/example-f4f-medicationStatement-2)
* related[0].ref.reference = 	"ResearchStudy/f4h-rs-2"
* related[=].ref.display = 	"FAIR4Health Study 2: 30-days readmission risk in COPD patients"
// * related[+].ref.reference = 	"Provenance/b4bc9aaf-8f77-48c3-97b6-cb042d556c32"
// * related[=].ref.display = 	"Provenance inforation about this data set"


Instance: example-f4f-patient
InstanceOf: Patient
Usage: #example
* gender = #male
* birthDate = "1970"
* address.country = "SP"
* address.postalCode = "28001"

Instance: example-f4f-condition
InstanceOf: Condition
Usage: #example
* subject = Reference(Patient/example-f4f-patient)
* code = $sct#13645005 "COPD - Chronic obstructive pulmonary disease"
* onsetAge.value = 50
* onsetAge.system = $ucum
* onsetAge.code = #a

Instance: example-f4f-medicationStatement-1
InstanceOf: MedicationStatement
Usage: #example
* status = #active
* subject = Reference(Patient/example-f4f-patient)
* medicationCodeableConcept	 = $atc#C02LB01  "methyldopa (levorotatory) and diuretics"
* reasonCode = $sct#38341003  "Hypertension"

Instance: example-f4f-medicationStatement-2
InstanceOf: MedicationStatement
Usage: #example
* status = #unknown
* subject = Reference(Patient/example-f4f-patient)
* medicationCodeableConcept	 = $atc#R03DA04 "theophylline"
* reasonCode = $sct#13645005 "COPD - Chronic obstructive pulmonary disease"

 


---

// File: input/fsh/examples/f4h-1-x.fsh

// ======================================================
Instance: f4h-lib-1
InstanceOf: LibraryF4F

/*====== COMMENT

====== END == */

* text.status = #additional
* text.div = """
<div xmlns="http://www.w3.org/1999/xhtml">
	<h3>FAIR4Health Study 1: Identification of multimorbidity patterns</h3>
	<p><strong>ID: </strong>https://example.org/registry/f4h-study-1</p>
	<table border="1">
		<tbody>
			<tr>
				<td>
					<strong>Research study</strong>
				</td>
				<td>
					<strong>Description </strong>
				</td>
				<td>
					<strong>Total number of sites</strong>
				</td>
				<td>
					<strong>Total number of patients</strong>
				</td>
				<td>
					<strong>AI Algorithm</strong>
				</td>
			</tr>
			<tr>
				<td>1</td>
				<td>Identification of multimorbidity patterns and polypharmacy correlation on the risk of mortality in elderly, and demonstrate the reproducibility of research</td>
				<td>5</td>
				<td>11.486</td>
				<td>FP Growth</td>
			</tr>
		</tbody>
	</table>
	<p>(C) Fair4Health H2020 Project.</p>
	<p>This project has received funding from the European Union's Horizon 2020 research and innovation programme under grant agreement No 824666.</p>
</div>

"""



* url = "https://example.org/registry/f4h-study-1"
* type = $library-type#asset-collection
* name = "FAIR4HealthStudy1"
* copyright = "Fair4Health H2020 Project"
* title = "FAIR4Health Study 1: Identification of multimorbidity patterns"
* purpose = "Identification of multimorbidity patterns and polypharmacy correlation on the risk of mortality in elderly, and demonstrate the reproducibility of research"
* status = #active
// JUST AN EXAMPLE
* useContext[0].code = $example#number-of-patients "Total number of patients"
* useContext[=].valueQuantity.value = 11486
// JUST AN EXAMPLE
* useContext[+].code = $example#number-of-sites "Total number of sites"
* useContext[=].valueQuantity.value = 5
// JUST AN EXAMPLE
* useContext[+].code = $example#algorithm "AI Algorithm"
* useContext[=].valueCodeableConcept.text = "FP Growth"
//========================================
Instance: f4h-lib-2
InstanceOf: LibraryF4F
* text.status = #additional
* text.div = """
<div xmlns="http://www.w3.org/1999/xhtml">
	<h3>FAIR4Health Study 2: 30-days readmission risk in COPD patients</h3>
	<p>
		<strong>ID: </strong>https://example.org/registry/f4h-study-2</p>
	<table border="1">
		<tbody>
			<tr>
				<td>
					<strong>Research study</strong>
				</td>
				<td>
					<strong>Description </strong>
				</td>
				<td>
					<strong>Total number of sites</strong>
				</td>
				<td>
					<strong>Total number of patients</strong>
				</td>
				<td>
					<strong>AI Algorithm</strong>
				</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Develop and pilot an early prediction service for 30-days readmission risk in COPD (Chronic Obstructive Pulmonary Disease) patients</td>
				<td>3</td>
				<td>4.944</td>
				<td>Support Vector Machine (SVM), Logistic Regression, Decision Trees, Random Forest, Gradient Boosted Trees</td>
			</tr>
		</tbody>
	</table>
	<h3>Contents</h3>
	<p>Subject 1 Data&nbsp;<code>https://example.org/registry/f4h-study-2-sbj-1</code>&nbsp;(<code>application/fhir+json</code>)</p>
	<p>(C) Fair4Health H2020 Project.</p>
	<p>This project has received funding from the European Union's Horizon 2020 research and innovation programme under grant agreement No 824666.</p>
</div>
"""
* extension[0].url = "http://hl7.org/fhir/uv/fhir-for-fair/StructureDefinition/library-relatedContent"
* extension[=].valueRelatedArtifact.extension[0].url = "http://hl7.org/fhir/uv/fhir-for-fair/StructureDefinition/relatedArtifactClassifier"
* extension[=].valueRelatedArtifact.extension[=].valueCodeableConcept = $citation-artifact-classifier#fhir-resource
* extension[=].valueRelatedArtifact.extension[+].url = "http://hl7.org/fhir/uv/fhir-for-fair/StructureDefinition/relatedArtifactResourceReference"
* extension[=].valueRelatedArtifact.extension[=].valueReference = Reference(DocumentManifest/example-f4f-manifest)
* extension[=].valueRelatedArtifact.type = #composed-of
* url = "https://example.org/registry/f4h-study-2"
* type = $library-type#asset-collection
* name = "FAIR4HealthStudy2"
* copyright = "Fair4Health H2020 Project"
* title = "FAIR4Health Study 2: 30-days readmission risk in COPD patients"
* purpose = "Develop and pilot an early prediction service for 30-days readmission risk in COPD (Chronic Obstructive Pulmonary Disease) patients"
* status = #active
// JUST AN EXAMPLE
* useContext[0].code = $example#number-of-patients "Total number of patients"
* useContext[=].valueQuantity.value = 4944
// JUST AN EXAMPLE
* useContext[+].code = $example#number-of-sites "Total number of sites"
* useContext[=].valueQuantity.value = 3
// JUST AN EXAMPLE
* useContext[+].code = $example#algorithm "AI Algorithm"
* useContext[=].valueCodeableConcept.text = "Support Vector Machine (SVM), Logistic Regression, Decision Trees, Random Forest, Gradient Boosted Trees"

---

// File: input/fsh/examples/f4h-1.fsh

Instance: f4h-1
InstanceOf: LibraryF4F
Usage: #example
* extension[0].url = "http://hl7.org/fhir/uv/fhir-for-fair/StructureDefinition/library-relatedContent"
* extension[=].valueRelatedArtifact.extension[0].url = "http://hl7.org/fhir/uv/fhir-for-fair/StructureDefinition/relatedArtifactClassifier"
* extension[=].valueRelatedArtifact.extension[=].valueCodeableConcept = $citation-artifact-classifier#fhir-resource
* extension[=].valueRelatedArtifact.extension[+].url = "http://hl7.org/fhir/uv/fhir-for-fair/StructureDefinition/relatedArtifactResourceReference"
* extension[=].valueRelatedArtifact.extension[=].valueReference = Reference(Library/f4h-lib-1)
* extension[=].valueRelatedArtifact.type = #composed-of
* extension[=].valueRelatedArtifact.display = "FAIR4Health Study 1: Identification of multimorbidity patterns"
* extension[=].valueRelatedArtifact.url = "https://example.org/registry/f4h-study-1"
* extension[+].url = "http://hl7.org/fhir/uv/fhir-for-fair/StructureDefinition/library-relatedContent"
* extension[=].valueRelatedArtifact.extension[0].url = "http://hl7.org/fhir/uv/fhir-for-fair/StructureDefinition/relatedArtifactClassifier"
* extension[=].valueRelatedArtifact.extension[=].valueCodeableConcept = $citation-artifact-classifier#fhir-resource
* extension[=].valueRelatedArtifact.extension[+].url = "http://hl7.org/fhir/uv/fhir-for-fair/StructureDefinition/relatedArtifactResourceReference"
* extension[=].valueRelatedArtifact.extension[=].valueReference = Reference(Library/f4h-lib-2)
* extension[=].valueRelatedArtifact.type = #composed-of
* extension[=].valueRelatedArtifact.display = "FAIR4Health Study 2: 30-days readmission risk in COPD patients"
* extension[=].valueRelatedArtifact.url = "https://example.org/registry/f4h-study-2"

* text.status = #additional
* text.div = """
<div xmlns="http://www.w3.org/1999/xhtml">

<p><strong>ID: </strong>https://example.org/registry/fair4health</p>
<h3>FAIR4Health Studies overview</h3>
<table border="1">
<tbody>
<tr>
<td><strong>Research study</strong></td>
<td><strong>Description</strong></td>
<td><strong>Total number of sites</strong></td>
<td><strong>Total number of patients</strong></td>
<td><strong>AI Algorithm</strong></td>
</tr>
<tr>
<td>1</td>
<td>Identification of multimorbidity patterns and polypharmacy correlation on the risk of mortality in elderly, and demonstrate the reproducibility of research</td>
<td>5</td>
<td>11.486</td>
<td>FP Growth</td>
</tr>
<tr>
<td>2</td>
<td>Develop and pilot an early prediction service for 30-days readmission risk in COPD (Chronic Obstructive Pulmonary Disease) patients</td>
<td>3</td>
<td>4.944</td>
<td>Support Vector Machine (SVM), Logistic Regression, Decision Trees, Random Forest, Gradient Boosted Trees</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p><strong>Platform access point:</strong> https://portal.fair4health.eu/</p>
<p><strong>Common Data model: </strong>https://github.com/fair4health/common-data-model</p>
<p><strong>Owner: </strong>FAIR4Health Consortium.</p>
<p><strong>FAIR metadata repository: </strong>https://github.com/fair4health/metadata</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h3>Related Artifacts</h3>
<table border="1">
<tbody>
<tr>
<td>documentation</td>
<td>Web site</td>
<td>Publication Site</td>
<td>FAIR4Health Platform access point</td>
<td>https://portal.fair4health.eu/</td>
</tr>
<tr>
<td>depends-on</td>
<td>Model</td>
<td>Common Data model</td>
<td>Common models, expressed as HL7 FHIR profiles, used by the FAIR4Health project in the FAIRification process</td>
<td>https://github.com/fair4health/common-data-model</td>
</tr>
<tr>
<td>depends-on</td>
<td>Metadata</td>
<td>Metadata repository</td>
<td>FAIR4Health FAIR metadata repository</td>
<td>https://github.com/fair4health/metadata</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h3>Contents</h3>
<p>Identification of multimorbidity patterns and polypharmacy correlation on the risk of mortality in elderly, and demonstrate the reproducibility of research:&nbsp;<code>https://example.org/registry/f4h-study-1</code>&nbsp;(<code>application/fhir+json</code>)</p>
<p>Develop and pilot an early prediction service for 30-days readmission risk in COPD (Chronic Obstructive Pulmonary Disease) patients:&nbsp;<code>https://example.org/registry/f4h-study-2</code>&nbsp;(<code>application/fhir+json</code>)</p>
<p>(C) Fair4Health H2020 Project.</p>
<p>This project has received funding from the European Union's Horizon 2020 research and innovation programme under grant agreement No 824666.</p>


</div>
"""


* url = "https://example.org/registry/fair4health"
* name = "FAIR4Health"
* title = "Metadata record for the FAIR4Health project"
* status = #active
* type = $library-type#asset-collection
* purpose = "(1) Support the discovery of disease onset triggers and disease association patterns in comorbid patients and demonstrate the reproducibility of research (2)Develop and pilot a prediction service for 30-days readmission risk in patients with COPD"
* date = "2021-10-10"
* publisher = "Fair4Health H2020 Project"
* description = "FAIR4Health aims to facilitate and encourage the European Union health research community to FAIRify, that is, to augment, share and reuse datasets derived from publicly funded research initiatives, demonstrating the FAIR strategy’s potential impact on health outcomes and health research. It focuses on two main use cases: \r\n- FAIR4Health Pathfinder Use case 1 (P1): to support the discovery of disease onset triggers and disease association patterns in comorbid patients and demonstrate the reproducibility of research\r\n- FAIR4Health Pathfinder Use case 2 (P2): to develop and pilot a prediction service for 30-days readmission risk in patients with COPD"
* copyright = "Fair4Health H2020 Project"
* relatedArtifact[0].type = #documentation
* relatedArtifact[=].label = "Web site"
* relatedArtifact[=].display = "Publication Site"
* relatedArtifact[=].citation = "FAIR4Health Platform access point"
* relatedArtifact[=].url = "https://portal.fair4health.eu/"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].label = "Model"
* relatedArtifact[=].display = "Common Data model"
* relatedArtifact[=].citation = "Common models, expressed as HL7 FHIR profiles, used by the FAIR4Health project in the FAIRification process"
* relatedArtifact[=].url = "https://github.com/fair4health/common-data-model"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].label = "Metadata"
* relatedArtifact[=].display = "Metadata repository"
* relatedArtifact[=].citation = "FAIR4Health FAIR metadata repository"
* relatedArtifact[=].url = "https://github.com/fair4health/metadata"
* content[0].contentType = #application/fhir+json
* content[=].title = "Identification of multimorbidity patterns and polypharmacy correlation on the risk of mortality in elderly, and demonstrate the reproducibility of research"
* content[=].url = "https://example.org/registry/f4h-study-1"
* content[+].contentType = #application/fhir+json
* content[=].title = "Develop and pilot an early prediction service for 30-days readmission risk in COPD (Chronic Obstructive Pulmonary Disease) patients"
* content[=].url = "https://example.org/registry/f4h-study-2"



---

// File: input/fsh/examples/list.fsh

Instance: example-f4f-list
InstanceOf: ListF4F
Usage: #example

* extension[copyright].valueMarkdown = "(c) Best FAIR organization"
* extension[licenceCodeable].valueCodeableConcept = $spdx-license#CC-BY-NC-4.0 "Creative Commons Attribution Non Commercial 4.0 International"
* extension[licenceAttachment].valueAttachment.url = "https://github.com/fair4health/metadata/blob/main/LICENSE"

* identifier.system =	$uri
* identifier.value = "https://example.org/registry/persistentID"
* status = #current
* mode = #working
* subject = Reference(Patient/example-f4f-patient)
* date = "2021-11-17"
* source.display = "Best FAIR organization"
* note.text = "This is an example of subject level data collection metadata"
* entry[0].item = Reference(Patient/example-f4f-patient)
* entry[+].item = Reference(Condition/example-f4f-condition)
* entry[+].item = Reference(MedicationStatement/example-f4f-medicationStatement-1)
* entry[+].item = Reference(MedicationStatement/example-f4f-medicationStatement-2)




 


---

// File: input/fsh/examples/ninfea-1.fsh

Instance: ninfea-1
InstanceOf: LibraryF4F
Usage: #example

* extension[classifier].valueCodeableConcept = http://example.org#antenatal-cardiology "Antenatal cardiology"
* extension[subjectOther].valueReference.display = "Example of other subject"

* identifier.system = "https://doi.org"
* identifier.value = "10.13026/c4n5-3b04"
* name = "NInFEA"
* title = "Metadata record for: A non-invasive multimodal foetal ECG-doppler dataset for antenatal cardiology research"
* status = #active
* type = $library-type#asset-collection
* subjectCodeableConcept = $sct#337915000 "Homo sapiens"
* date = "2020-11-20"
* publisher = "PhysioNet"
* description = "The Non-Invasive Multimodal Foetal ECG-Doppler Dataset for Antenatal Cardiology Research (NInFEA) is the first open-access dataset featuring simultaneous non-invasive electrophysiological recordings, fetal pulsed-wave Doppler (PWD) and maternal respiration signals. The dataset includes 60 entries from 39 voluntary pregnant women, between the 21st and the 27th week of gestation. Every entry is composed of 27 electrophysiological channels (2048 Hz, 22 bits, acquired by means of the TMSi Porti7 system), maternal respiration signal (through a resistive thoracic belt), synchronised foetal trans-abdominal PWD and clinical annotations provided by expert clinicians at the time of the signal collection."
* useContext[0].code = $usage-context-type#age
* useContext[=].valueCodeableConcept = $sct#57036006 "Fetal gestational age"
* useContext[+].code = $nci-thesaurus#C178865 "Technology_Type"
* useContext[=].valueCodeableConcept = $nci-thesaurus#C38053 "Electrocardiography"
* useContext[+].code = $nci-thesaurus#C178865 "Technology_Type"
* useContext[=].valueCodeableConcept = $sct#252447004 "Pulsed wave ultrasonic Doppler" 
* useContext[+].code = $radlex#RID10409 "measurement type"
* useContext[=].valueCodeableConcept = $sct#739122008 "Heart function"
* useContext[+].code = $radlex#RID10409 "measurement type"
* useContext[=].valueCodeableConcept = $sct#86290005 "Respiratory rate"

* copyright = "Data Descriptor License: Open Data Commons Attribution License v1.0"
* topic[0] = $nci-thesaurus#C13235 "Fetus"
* topic[+] = $sct#75444003 "Fetal electrocardiogram"
* topic[+] = $sct#314204000 "Early stage of pregnancy"
* topic[+] = $sct#394579002 "Cardiology"
* topic[+] = $nci-thesaurus#C38053 "Electrocardiography"
* topic[+].text = "fecg"
* topic[+].text = "pwd"
* topic[+].text = "pwd envelope"
* topic[+].text = "non-invasive"
* topic[+].text = "doppler"
* topic[+].text = "antenatal"

* relatedArtifact[0].type = #citation
* relatedArtifact[=].label = "Article"
* relatedArtifact[=].display = "Scientific Data"
* relatedArtifact[=].citation = "Sulas, E., Urru, M., Tumbarello, R. et al. A non-invasive multimodal foetal ECG–Doppler dataset for antenatal cardiology research. Sci Data 8, 30 (2021)."
* relatedArtifact[=].url = "https://doi.org/10.1038/s41597-021-00811-3"

* relatedArtifact[+].type = #citation
* relatedArtifact[=].label = "Article"
* relatedArtifact[=].display = "40th Annual International Conference of the IEEE EMBC"
* relatedArtifact[=].citation = "Sulas E, Ortu E, Raffo L, Urru M, Tumbarello R, Pani D, Automatic Recognition of Complete Atrioventricular Activity in Fetal Pulsed-Wave Doppler Signals, 2018 40th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC), Honolulu, HI, 2018, pp. 917-920, doi: 10.1109/EMBC.2018.8512329."
* relatedArtifact[=].url = "https://doi.org/10.1109/EMBC.2018.8512329"

* relatedArtifact[+].extension[relatedArtifactClassifier].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/citation-artifact-classifier#fhir-resource
* relatedArtifact[=].extension[relatedArtifactType].valueCodeableConcept = http://hl7.org/fhir/uv/fhir-for-fair/CodeSystem/related-artifact-type#supported-with

* relatedArtifact[=].type = #citation
* relatedArtifact[=].label = "FHIR Resource"
* relatedArtifact[=].display = "FEvIR platform"
* relatedArtifact[=].citation = "Example of FHIR R5 Citation Resource describing the NinFea metadata"
* relatedArtifact[=].url = "https://fevir.net/resources/Citation/60"


* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].label = "Ontology"
* relatedArtifact[=].display = "Experimental Factor Ontology"
* relatedArtifact[=].url = "http://data.bioontology.org/ontologies/EFO"

* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].label = "Ontology"
* relatedArtifact[=].display = "National Center for Biotechnology Information (NCBI) Organismal Classification"
* relatedArtifact[=].url = "http://purl.bioontology.org/ontology/NCBITAXON"

* content.contentType = #application/zip
* content.size = 792900000
* content.title = "NInFEA: Non-Invasive Multimodal Foetal ECG-Doppler Dataset for Antenatal Cardiology Research 1.0.0"
* content.url = "https://physionet.org/static/published-projects/ninfea/ninfea-non-invasive-multimodal-foetal-ecg-doppler-dataset-for-antenatal-cardiology-research-1.0.0.zip"

---

// File: input/fsh/examples/ResearchStudy.fsh

//========================================
Instance: f4h-rs-2
InstanceOf: ResearchStudyF4F

/*======= COMMENT
====== END == */
* text.status = #additional
* text.div = """
<div xmlns="http://www.w3.org/1999/xhtml">
	<h3>FAIR4Health Study 2: 30-days readmission risk in COPD patients</h3>
	<p><strong>ID: </strong>https://example.org/registry/f4h-study-2b</p>
	<p>&nbsp;</p>
	<table border="1">
		<tbody>
			<tr>
				<td>
					<strong>Research study</strong>
				</td>
				<td>
					<strong>Description </strong>
				</td>
				<td>
					<strong>Total number of sites</strong>
				</td>
				<td>
					<strong>Total number of patients</strong>
				</td>
				<td>
					<strong>AI Algorithm</strong>
				</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Develop and pilot an early prediction service for 30-days readmission risk in COPD (Chronic Obstructive Pulmonary Disease) patients</td>
				<td>3</td>
				<td>4.944</td>
				<td>Support Vector Machine (SVM), Logistic Regression, Decision Trees, Random Forest, Gradient Boosted Trees</td>
			</tr>
		</tbody>
	</table>
	<p>&nbsp;</p>
	<p>(C) Fair4Health H2020 Project.</p>
	<p>This project has received funding from the European Union's Horizon 2020 research and innovation programme under grant agreement No 824666.</p>
</div>
"""


// * extension[url].valueUrl = "https://example.org/registry/f4h-study-2b"
* extension[copyright].valueMarkdown = "Fair4Health H2020 Project"
// JUST AN EXAMPLE
* extension[context][0].valueUsageContext.code = $example#number-of-patients "Total number of patients"
* extension[context][=].valueUsageContext.valueQuantity.value = 4944
// JUST AN EXAMPLE
* extension[context][+].valueUsageContext.code = $example#number-of-sites "Total number of sites"
* extension[context][=].valueUsageContext.valueQuantity.value = 3
// JUST AN EXAMPLE
* extension[context][+].valueUsageContext.code = $example#algorithm "AI Algorithm"
* extension[context][=].valueUsageContext.valueCodeableConcept.text = "Support Vector Machine (SVM), Logistic Regression, Decision Trees, Random Forest, Gradient Boosted Trees"
* identifier.system = $uri
* identifier.value = "https://example.org/registry/f4h-study-2b"
* title = "FAIR4Health Study 2: 30-days readmission risk in COPD patients"
* status = #active
* primaryPurposeType = $research-study-prim-purp-type#health-services-research
* description = "Develop and pilot an early prediction service for 30-days readmission risk in COPD (Chronic Obstructive Pulmonary Disease) patients"
* objective.name = "30-days readmission risk in COPD patients"


---

