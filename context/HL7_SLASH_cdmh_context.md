File: repos/HL7_SLASH_cdmh/input/pagecontent/background.md

<!-- TOC  the css styling for this is \pages\assets\css\project.css under 'markdown-toc'-->

{:toc}

<!-- end TOC -->



###  Background

Section 937(a)(£) of the Public Health Service Act (PHS Act), as amended by section 6301(b) of the Affordable Care Act of 2010 (ACA), PL 111-148, 124 Stat. 119 (March 23, 2010), authorizes the Secretary of the U.S. Department of Health and Human Services (HHS) to provide for the coordination of relevant Federal programs to build data capacity for patient-centered outcomes research. The Office of the Assistant Secretary for Planning and Evaluation (ASPE) is delegated to coordinate the Department's effort.

The current project, titled Harmonization of Various Common Data Models and Open Standards for Evidence Generation, is a multi-agency collaboration led by the Food and Drug Administration (FDA). Other agencies include the National Cancer Institute (NCI), National Center for Advancing Translational Sciences (NCATS), the Office of the National Coordinator for Health Information Technology (ONC) and the National Library of Medicine (NLM).

The purpose of this project is to provide patient-centered outcomes researchers as well as other researcher at various Federal Government Agencies, academia, etc. with access to broader observational data by leveraging existing PCORTF investments such as US-Core, Data Access Framework Research Implementation Guide (DAF-Research IG). The project leverages the lessons learned from [ONC Query Health initiative](https://www.ncbi.nlm.nih.gov/pubmed/24699371) completed in 2013/2014. Subsequently efforts in HL7 towards a language for clinical decision support and quality measurement and subsequently a harmonization of those efforts into [CQL](https://cql.hl7.org/) which enabled specification of query semantics against various data models including FHIR. In addition FHIR has developed StructureMap and ConceptMap resources which can be used for mapping and transformation between models. CDMH uses many of these concepts to build the necessary mappings and profiles that can be leveraged to make data captured and stored in different models available for researchers.

###  Purpose and Goals of the Project 

The purpose and goals of the overall project are as follows

* Develop a common data architecture to create user driven queries of the following four common data model (CDMs) of four networks (Sentinel, i2b2/ACT, OHDSI and PCORnet).

	- FDA’s Sentinel data model version 6.0.2
	- Patient-Centered Outcomes Research Network (PCORNET) data model version 4.0
	- Informatics for Integrating Biology & the Bedside (i2b2)/ACT data model version 1.4
	- Observational Medical Outcomes Partnership (OMOP) data model version 5.2

* Creating mapping between the above CDMs to Biomedical Research Integrated Domain Group (BRIDG) which serves as an intermediary model in the project. This is explained further in the abstract model section below.
* Create mappings between the above CDMs and Fast Healthcare Interoperability Resources (FHIR) profiles and resources. These mappings will facilitate broader access to data from multiple networks.
* The common architecture and mappings are intended to enable researchers from public and private sectors (e.g. FDA, NIH, Centers for Disease Control and Prevention (CDC), biopharmaceutical industry and patient-centered outcomes researchers) to access observational data also known as Real World Data (RWD).

### Abstract Model, Actors and Definitions

This section outlines the abstract model, the specific actors and definitions that will be used for creating the implementation guide. Figure 1 below shows a pictorial representation of the data flows and the actors for the CDMH IG.

{% include img.html img="cdmh-abstract-model.png" caption="Figure 1: CDMH Abstract Model" %}

The steps involved in the CDMH project to includes creating a query, and then distributing the query to the various organizations (data partners), and collecting the results, and then finally viewing the results. These steps are is outlined in the above diagram and the definitions of the various actors can be found below.

**Researcher Portal:** Researcher Portal actor represents the capabilities that will be used by the researcher to compose the queries, distribute the queries and then view the returned results. Typically in a Researcher Portal implementation there will be many modular components, some of which are outlined below

- **Query Composer:** Query Composer represents the user interface and related functionality that will be used by the researcher to compose the queries. 
- **Query Translator:** Query Translator represents the capability that translates the composed query into the various CDM formats required by each of the Data Partner organization.
- **Query Distributor:** Query Distributor represents the capability that distributes the queries to the various Data Partners.
- **Data Partner Manager:** Data Partner Manager provides the capability to manage each Data Partner and its related meta data that identifies the organization, point of contact, researchers that are allowed access etc.
- **Result Translator:** Result Translator translates the results received from the various Data Partners into formats such as FHIR, BRIDG/Study Data Tabulation Model (SDTM) for consumption by researchers.
- **Result Viewer:** Result Viewer provides the capability to view the results for a researcher. 
- **Vocabulary Services:** Vocabulary Services represent the necessary mapping software to map codesystems/valuesets/codes from the various CDMs to standard formats.
- **Security Services:** Security Services represent the capability to protect privacy, allow authorized researchers to access specific Data Partners to submit queries and view results. 
	
**Data Partner:** Data Partner is any network or organization that is participating in the overall CDMH project and supports a data model or data models that can be queried by authorized researchers. The Data Partner holds the research data in a database conforming tousing one of the Common Data Models formats which and has appropriate security controls to verify/validate queries before releasing the results of a query.

**Data Partner Client:** Data Partner Client represents the capability that allows the Data Partner network or organization to control the queries being run and results being submitted to the Researchers. 

**CDMs:** Common Data Models (CDMs) represent various physical representations of data that are commonly used by research networks and organizations currently. For CDMH project purposes, FDA's Sentinel, PCORnet CDM, i2b2 and OMOP data models are being considered for mapping to FHIR.  

####  [BRIDG 5.1](https://www.cdisc.org/standards/domain-information-module/bridg) based Intermediary Model and its role in CDMH project

The abstract model shown above allows researchers to compose queries in a uniform format and send them to the data partners for execution. In order to compose queries that can be executed against the different data models, the researcher has two options 
1. Compose queries in the different formats required by each data partner.
2. Compose queries in a common format using and intermediary model and then translate the query from intermediary model to the various formats required by the data partners. 

For CDMH, Option 1 was not considered as it would add a significant burden on the researchers and the user interface to compose queries in each format and the maintenance of the overall solution would be complex. Hence Option 2 was chosen with BRIDG serving as the intermediary model. 
Leveraging BRIDG as the intermediary model has many benefits some of which are listed below
* Ability to use a common model for composing the queries making the system design easier and maintainable.
* Well-defined semantics of BRIDG makes it easier for others to understand the data.
* Allows for converting from a single intermediary models to any number of CDMs, which can be done once centrally thus reducing any burden on the data partners. 
* Allows for converting results from the data partners to a common model from where it can be mapped and translated to other formats including FHIR.
* BRIDG formats are already in use for submission of data to FDA.

In the current phase of the project, BRIDG was chosen as the intermediary model to gain experience with the overall project and its implementation. In future phases, FHIR may be considered for playing the role of the intermediary model.

As as result of the architecture choices and decision made, the CDMH project developed a mapping between the various CDMs and BRIDG and then mapped BRIDG to FHIR. These mappings have been leveraged to finalize the mappings of the CDMs to FHIR and are outlined in the Mappings and Profiles section of the IG.


###  Expected Benefits of the CDMH Project

The following benefits will be realized by the industry using the CDMH project artifacts.

* Allows researchers to query multiple research networks using disparate data models using a single researcher portal.
* Allows researchers to view results from multiple research networks using disparate data models. 
* Allows Data Partners invested in different CDM models to continue to use the existing data models but participate in multiple research programs without requiring new infrastructure.
* Standards based mapping will allow for supporting more use cases in the future without changes to the infrastructure. 

###  Relationship between DAF-Research FHIR IG and CDMH FHIR IG

The DAF-Research FHIR IG outlines the overall workflows used to extract data from EHR systems, populate the CDMs and then allow the researcher to query these CDMs using mutliple formats embedded in FHIR resources and receive results using FHIR format. The CDMH FHIR IG complements the DAF-Research IG by providing the mappings from different CDMs to FHIR that can be used across multiple use cases. There are few overlaps between the CDMH and DAF-Research IG which will be harmonized on subsequent updates to DAF-Research and CDMH FHIR IGs. 




---

File: repos/HL7_SLASH_cdmh/input/pagecontent/capstatements.md

<!-- TOC  the css styling for this is \pages\assets\css\project.css under 'markdown-toc'-->

{:toc}

<!-- end TOC -->
<br />

### Capability Statement for Result Translator

For the CDMH IG the only capability statement that is currently available is the Result Translator identified in the [CDMH Abstract Model](cdmh-overview.html).

The Result Translator **SHALL** use the mappings provided in the CDMH IG to translate from any of the four CDMs namely Sentinel, PCORnet CDM, i2b2 and OMOP to FHIR.

The Result Translator **MAY** support querying of the results using FHIR APIs for each resource supported by the translator.
 


---

File: repos/HL7_SLASH_cdmh/input/pagecontent/credits.md

### Credits
Primary authors:

* Nagesh Bashyam (Drajer LLC)
* Brett Marquard (Wave One Associates)
* Smita Hastak (Samvit Solutions)

Project leads:

* Mitra Rocca (FDA)
* Ken Gersing (NCATS)
* Scott Gordon (FDA)

Project management and coordination:

* Gayathri Jayawardene (ESAC Inc).


Our thanks to these and to the many others not explicitly listed who contributed their time, enthusiasm and expertise to this work.

---

File: repos/HL7_SLASH_cdmh/input/pagecontent/downloads.md

**Package File**

The following package file contains an NPM Package used by many of the FHIR tools.  It includes all the value sets, profiles, extensions, list of pages and urls in the IG, etc defined as part of the this version of the Implementation Guides.:

- [Package](package.tgz)

**Downloadable Copy of Entire Specification**

A downloadable version is available so this Implementation Guide can be hosted locally:

- [Downloadable Copy](full-ig.zip)



---

File: repos/HL7_SLASH_cdmh/input/pagecontent/guidance.md

{:.no_toc}

<!-- TOC  the css styling for this is \pages\assets\css\project.css under 'markdown-toc'-->

{:toc}


### Creating Translators

The CDMH project envisions open source translators to be created using the mappings provided in the CDMH IG to translate from FHIR to one of the common data models namely Sentinel, i2b2, PCORnet CDM and/or OMOP and viceversa. These translators will be useful for data extraction, querying data and converting results from CDM formats to FHIR.

### Implementation Guidance on Mapping Semantics

The CDMH project analysis has identified many areas where semantics of the data elements have to be considered to perform the mappings. The following are specific areas where translators written to map between the source and target formats have to apply proper semantic transformation to achieve the desired results. 

#### Date and Time Representations.

Dates and Times in FHIR format differ from dates and times in the common data models. So translators performing date and time translations have to read the individual components of the dates and times namely year, month, day, hour, minutes, seconds and time zones and construct the desired date and date/time elements during the mapping process.

#### Vocabulary Mappings

Vocabulary mappings between FHIR and the common data models differ for many data elements and mappings for individual domains and data elements have to be created to ensure proper mapping. Some examples of these mappings have been created as ConceptMaps and are available on the [FHIR Artifacts](artifacts.html) page. Extensive mappings required for each domain and data elements are beyond the scope of this project. Mappings have to be performed to minimize data loss and the data models have provided guidance on mapping between source systems and the common data models. The guidance can be found at 

* [PCORNet Common Data Model and its Guidance](https://pcornet.org/wp-content/uploads/2020/12/PCORnet-Common-Data-Model-v60-2020_10_221.pdf)
* [PCORNet Common Data Model Forum](https://github.com/CDMFORUM)
* [OMOP Common Data Model](https://ohdsi.github.io/CommonDataModel/)
* [OMOP ODHSI Guidance](https://ohdsi.github.io/TheBookOfOhdsi/index.html)
* [Sentinel Data Model](https://www.sentinelinitiative.org/methods-data-tools/sentinel-common-data-model/sentinel-common-data-model)
* [i2b2 Data Model](https://community.i2b2.org/wiki/display/BUN/i2b2+Common+Data+Model+Documentation)
* [FHIR Server implementation on i2b2](https://www.researchgate.net/publication/319117737_A_Fast_Healthcare_Interoperability_Resources_FHIR_layer_implemented_over_i2b2)

##### Mappings between Vocabularies

* [SNOMED to ICD Mapping](https://www.nlm.nih.gov/research/umls/mapping_projects/snomedct_to_icd10cm.html)
* [RxNorm to NDC Mapping](https://www.nlm.nih.gov/research/umls/rxnorm/docs/techdoc.html)

#### Mandatory FHIR elements not mapped directly to Common Data Models

FHIR Resources contain mandatory elements as per the specification which are not mapped to any of the Common Data Models. These elements will be populated by the EHR as per their workflows. The guidance below indicates the mandatory values for each of the profiled resources that are expected to be extracted from the EHR for populating common data models. 

* AdverseEvent resources with ``actuality`` code of "actual"
* Condition resources with ``category`` code of "problem-list-item" or "encounter-diagnosis" 
* Encounter resources with ``status`` code of "finished" 
* Group resources with ``type`` code of "person" and ``exclude`` flag of "false" 
* MedicationDispense resources with ``status`` code of "completed" 
* MedicationRequest resources with ``status`` code of "active" or "completed" 
* MedicationStatement resources with ``status`` code of "active" or "completed" or "intended" or "not-taken" 
* Observation resources representing LabResults with ``status`` code of "final" 
* Observation resources representing VitalSigns with ``status`` code of "final" 
* Procedure resources with ``status`` code of "completed" 
* ResearchStudy resources with ``status`` code of "active" or "administratively-completed" or "approved" or "closed-to-accrual" or "closed-to-accrual-and-intervention" or "completed" 

---

File: repos/HL7_SLASH_cdmh/input/pagecontent/history.md

This table provides a list of all the versions of the {{site.data.fhir.igName}} Implementation Guide that are available. See [FHIR Releases and Versioning](http://build.fhir.org/versions.html#versions) for a description of how the versioning of this Implementation Guide is managed.  As well, this guide follow the general definitions and guidelines outlined in [Rules for Inter-version change](http://build.fhir.org/versions.html#change):

|Date|Version|Description|
|---|---|---|
|**Current Version**|
|04-2019|0.1.0|The current version based on FHIR Release 4.0.0|
|**Older Version**|
|None|||


---

File: repos/HL7_SLASH_cdmh/input/pagecontent/index.md

<!-- TOC  the css styling for this is \pages\assets\css\project.css under 'markdown-toc'-->

{:toc}


<!-- end TOC -->



###  Introduction

The Common Data Models Harmonization (CDMH) FHIR Implementation Guide (IG) will focus on mapping and translating observational data extracted for Patient Centered Outcome Research (PCOR) and other purposes into FHIR format.  Data is extracted from the different networks each of which may use a different data model for their data representation. The project focuses on the Common Data Models (CDMs) from the following four networks: 
* Patient Centered Outcome Research Network (PCORNet) 
* Informatics for Integrating Biology and Bedside (i2b2) Accrual to Clinical Trials (ACT), also known as i2b2/ACT.
* Observational Medical Outcomes Partnership (OMOP) 
* Food and Drug Administration's Sentinel 

The CDMH project is led by FDA in collaboration with other Federal Government Agencies and specific networks tackles the various aspects such as querying the data and getting the results back from the queries; however, the CDMH FHIR IG only focuses on mapping and translating the results obtained from queries to a FHIR format. The following benefits are expected from translation of observational data into a FHIR format:
* The data can be published using FHIR format using well defined RESTful APIs for other authorized users.
* Leveraging FHIR tools, techniques and apps being developed using FHIR standard.
* Provide a roadmap where by the developed mappings and translations can be re-used for data extraction from clinical information systems, which is elaborated as part of Data Access Framework Research (DAF-Research) Implementation Guide. 

The capabilities described as part of the CDMH FHIR IG are intended to be leveraged to build US data infrastructure for a Learning Health System (LHS) along with other PCOR Trust Fund (PCORTF) investments such as DAF-Research IG, Structured Data Capture (SDC) IG, Patient Reported Outcomes (PRO) FHIR IG, Women’s Health Technologies Coordinated Registry Network (CRN) FHIR IG.

The CDMH FHIR IG will leverage the US-Core IG and profiles for the resources that overlap with US-Core. 
The CDMH FHIR IG will leverage DAF-Research IG for future phases where by queries and workflows can be automated using FHIR standard. 

The CDMH FHIR IG will create profiles of profiles leveraging US-Core, DAF-Research as necessary and will create new profiles and extensions for Resources based on the four Common Data Model requirements. 

The next section provides a road map for the reader to walk through the implementation guide.


###  Guidance to the readers

The following table will provide a road map to the reader to follow and absorb the content of the implementation guide.

| Topic to Read  | What it Contains and its relationship to CDMH IG | Where can I find the content ? |
|:---------------|:------------------------------------------------|-------------------------------:|
| US-Core | The set of FHIR profiles mostly commonly implemented by vendors, also contains many of the definitions used for the CDMH IG. (For e.g Definition of“Supported”).|[US-Core Definitions]({{site.data.fhir.uscoreR4}}index.html) |
| CDMH Overview | The artifact provides an overview of the CDMH project.| [Overview](background.html)|
| Mappings | The artifact defines the various mappings, between FHIR resources and the common data models.| [Mappings](profiles.html)|
| Implementation Guidance | The artifact contains guidance that will help implementers of CDMH FHIR IG to map from FHIR to different common data models.| [Implementation Guidance](guidance.html)|
| DAF-Research | The PCORTF sponsored IG outlines mechanisms to perform queries in distributed networks which may be leveraged by the CDMH IG.| [DAF-Research](http://hl7.org/fhir/us/daf-research/)| 




---

File: repos/HL7_SLASH_cdmh/input/pagecontent/profiles.md

### Mappings

This section contains the mappings between the various CDMs, BRIDG and the FHIR Resources/profiles. In each mapping the CDM data element is mapped to the appropriate BRIDG data element and the FHIR Data Element. The column FHIR Resource/Profile/Extension identifies the specific profile and/or extension if one exists. If the profiles do not exist then they are mapped to the resource. New profiles and extensions will be added where necessary as the pilot implementations provide feedback.

### Mapping Conventions and usage of US Core IG

The mappings use the US Core profiles, value sets and code systems where they exist and overlap with CDMH. 

* For the data elements required for the CDMH project which are not marked as "MUST SUPPORT" in the US core profile but present in the base resource, the CDMH project will still leverage the US Core profile and add the needed data elements.
* For the data elements required for the CDMH project, but are not present in the base resource, extensions will be added to the corresponding US Core profiles. 
* For the data elements where multiple resources/profiles will/can be used, the list of the resources and profiles will be listed separated by comma.
* Wherever identifiers or id elements are used to map to CDM Id columns it is assumed that as part of the loading process if there needs to be any processing required such as de-identification it is performed and the process will be used to re-link back to the original record when needed for identification.



#### CDMs to BRIDG 5.1 Mappings 

The mappings of the various CDMs to BRIDG data model which was used as the intermediary model in the CDMH project are documented in the following spreadsheet. BRIDG was chosen as the intermediary model as it was required for submitting data to FDA.

[CDMs to BRIDG Mappings](https://drive.google.com/file/d/194nwCX3dBMU7cfCO8no7XFVHA6I3WlYm/view?usp=sharing)



#### PCORnet CDM version 4 to FHIR R4 Mappings

The table below outlines the mappings between PCORnet CDM version 4 and FHIR Resources/profiles and extensions.


{% include PCORnet_CDM_v4_FHIR.html %}



#### OMOP 5.2 to FHIR R4 Mappings

The table below outlines the mappings between OMOP and FHIR Resources/profiles and extensions.


{% include OMOP_FHIR.html %}


1: codes, Codings and CodeableConcept data types in FHIR which are used to convey specific concepts about a resource have to be mapped to OMOP Vocabulary which contains a large number of concepts with a specific concept_id that is used in the various tables. (For e.g In OMOP table CONDITION_OCCURRENCE, the condition_concept_id contains an id present in the OMOP vocabulary and the FHIR Condition.code value has to be mapped to the OMOP concept_id using guidance present in the [OMOP Common Data Model](https://ohdsi.github.io/CommonDataModel/) and [OMOP OHDSI Documentation](https://ohdsi.github.io/TheBookOfOhdsi/CommonDataModel.html#visitOccurrence). In this case, Condition.code from FHIR resource would actually be retained in the CONDITION_SOURCE_VALUE element).

2: Identifiers in the FHIR resources should be used to generate the ID elements of the OMOP tables unless they are auto-generated. If IDs in OMOP tables are auto-generated, then the identifiers should be stored in the OMOP tables under the <TABLENAME>_SOURCE_VALUE element. For e.g If the PERSON_ID is auto-generated, then the Patient.identifier from the FHIR resource should be stored in the PERSON_SOURCE_VALUE column in the OMOP PERSON table. This will allow linkages between the FHIR resources and OMOP tables when data is extracted for population of the OMOP tables. If the FHIR resources do not contain identifiers, then the id element of the FHIR resources can be used to map back and forth between FHIR resources and OMOP tables created from the FHIR resources.

3: The concept_ids identified should be used by queries to retrieve the data from OMOP tables for analysis instead of using the <DOMAIN>_SOURCE_VALUE elements.
 


#### Sentinel 6.0.2 to FHIR R4 Mappings

The table below outlines the mappings between Sentinel and FHIR Resources/profiles and extensions.


{% include Sentinel_FHIR.html %}



#### i2b2/ACT 1.4 to FHIR R4 Mappings

The table below outlines the mappings between i2b2/ACT and FHIR Resources/profiles and extensions.


{% include i2b2_FHIR.html %}


<br />



---

File: repos/HL7_SLASH_cdmh/input/pagecontent/terminology.md

#### Code Systems

The CDMH IG depends on US-Core published code systems and code systems published or referenced by the HL7 FHIR standard itself. The IG does not introducce any new code systems.

#### Value Sets

The CDMH IG depends on US-Core published value sets and value sets published or referenced by the HL7 FHIR standard itself. The IG does not introduce any new value sets.

#### Vocabulary Mapping Implementation

Please refer to implementation guidance for guidance on mapping between the various CDMs and FHIR.


---

