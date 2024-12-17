File: repos/IHE_SLASH_PCC.mAPS/sushi-config.yaml

# sushi-config.yaml is documented https://fshschool.org/docs/sushi/configuration/
# ───────────────────────────────────────────────────
# the id should be lowercase made up of "ihe." + {domain acronym} + "." + {profile acronym/short-name}
# e.g. ihe.iti.mhds, or ihe.iti.basicaudit
id: ihe.pcc.maps
canonical: https://profiles.ihe.net/PCC/mAPS
version: 1.0.0
name: IHE_PCC_MAPS
title: "Mobile Antepartum Summary"
description: Antepartum Summary is a content profile that defines the structure for the aggregation of significant events, diagnoses, and plans of care derived from the visits over the course of an antepartum episode.
#releaseLabel: ci-build
#releaseLabel: ballot
releaseLabel: trial-use
#releaseLabel: release
#date: 2024-06-04
status: active
publisher:
  ## Find your domain contact on the https://www.ihe.net/ihe_domains page
  - name: IHE Patient Care Coordination Committee
  - url: https://www.ihe.net/ihe_domains/patient_care_coordination/
  - email: pcc@ihe.net
contact:
  - name: IHE Patient Care Coordination Committee  
    telecom:
      - system: email
        value: pcc@ihe.net
license:  CC-BY-4.0
fhirVersion: 4.0.1
jurisdiction: 'http://unstats.un.org/unsd/methods/m49/m49.htm#001'
#copyright: IHE http://www.ihe.net/Governance/#Intellectual_Property
copyrightYear: 2021+

dependencies:
  hl7.fhir.uv.ips:
    id: hl7ips
    uri: http://hl7.org/fhir/uv/ips/ImplementationGuide/hl7.fhir.uv.ips
    version: 1.1.x
  ihe.pcc.odh: 
    id: ihepccodh
    version: 1.0.0-comment
  ihe.iti.pdqm: 
    id: ihepdqm
    uri: https://profiles.ihe.net/ITI/PDQm/ImplementationGuide/ihe.iti.pdqm
    version: 3.0.x


parameters:  # see https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
  path-resource:
    - input/resources
    - fsh-generated/resources
    - input/examples
#  path-pages:
#    - input/pagecontent
#    - fsh-generated/includes
  show-inherited-invariants: 'false'
  usage-stats-opt-out: 'false'
  logging: progress
  shownav: 'true'
  active-tables: 'false'
  apply-contact: 'true'
  apply-jurisdiction: 'true'
  apply-publisher: 'true'
  apply-version: 'true'

#resources:
# list every example here with a name, description and that exampleBoolean is true; These are used to populate the artifacts page, and are needed to eliminate build warnings 
# You may delay filling out this section until you approach publication as it is merely a nice to have and eliminates build warnings -- If you do this then you will need above the autoload-resources true
#  List/genetic:
#    name:  Example Amanda Alvarez 
#    description: Example Amanda Alvarez documents what an example compositoin for an Antepartum Summary should look like as well as what observations should be included within the composition. 
#    exampleBoolean: true
#    name: Genetic List
#    description: TODO
#    exampleBoolean: true

pages:
# itemize here each narrative page. Include assigned section numbers when appropriate. The order they appear here is the order they will appear in the TOC and on the next/prev navigation.
  index.md:
    title: Mobile Antepartum Summary (mAPS) Home
    generation: markdown
  volume-1.md:
    title: 1:XX Mobile Antepartum Summary (mAPS) Volume 1
    generation: markdown
  volume-3.md:
    title: 3:YY Mobile Antepartum Summary (mAPS) Content
    generation: markdown
  testplan.md:
    title: "Test Plan"
    generation: markdown
  other.md:
    title: Changes to Other IHE Specifications
    generation: markdown
  download.md:
    title: "Download and Analysis"
    generation: markdown
  issues.md:
    title: Significant Changes and Issues
    generation: markdown

menu:
  Home: index.html
  Volume 1:
    Introduction: volume-1.html
    Actors and Transactions: volume-1.html#actors-and-transactions
    Actor Options: volume-1.html#actor-options
    Required Actor Groupings: volume-1.html#required-groupings
    Overview: volume-1.html#overview
    Security Considerations: volume-1.html#security-considerations
    Cross-Profile Considerations: volume-1.html#other-grouping
  Volume 3:
    "Mobile Antepartum Summary (mAPS) Content": volume-3.html
  Artifacts: artifacts.html
  Other:
    Changes to Other IHE Specifications: other.html
    Download and Analysis: download.html
    Test Plan: testplan.html



---

// File: input/pagecontent/download.md


You can also download:

### Download and Analysis

- [this entire guide](full-ig.zip),
- the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
- the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on **https://github.com/IHE/PCC.mAPS**

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}


---

// File: input/pagecontent/index.md

Mobile Antepartum Summary is a content profile that defines the structure for the aggregation of significant events, diagnoses, and plans of care derived from the visits over the course of an antepartum episode.

This profile is intended to be a summary for supporting pregnancy care prior to and leading up to delivery.

<div markdown="1" class="stu-note">

| [Significant Changes, Open and Closed Issues](issues.html) |
{: .grid}

</div>

### Organization of This Guide

This guide is organized into the following sections:

1. Volume 1:
   1. [Introduction](volume-1.html)
   1. [Actors, Transactions, and Content](volume-1.html#actors-and-transactions)
   1. [Actor Options](volume-1.html#actor-options)
   1. [Required Actor Groupings](volume-1.html#required-groupings)
   1. [Overview](volume-1.html#overview)
   1. [Security Considerations](volume-1.html#security-considerations)
   1. [Cross Profile Considerations](volume-1.html#other-grouping)
3. Volume 3: Metadata and Content
   1. [Content One](volume-3.html)
4. Volume 4: National Extensions
   1. [US Realm National Extension](https://build.fhir.org/ig/IHE/PCC.mAPS.us/branches/master/index.html)
5. Other
   1. [Changes to Other IHE Specifications](other.html)
   1. [Download and Analysis](download.html)
   1. [Test Plan](testplan.html)

See also the [Table of Contents](toc.html) and the index of [Artifacts](artifacts.html) defined as part of this implementation guide.

### Conformance Expectations

IHE uses the normative words: Shall, Should, and May according to [standards conventions](https://profiles.ihe.net/GeneralIntro/ch-E.html).

#### Must Support

The use of ```mustSupport``` in StructureDefinition profiles equivalent to the IHE use of **R2** as defined in [Appendix Z](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.10-profiling-conventions-for-constraints-on-fhir).

mustSupport of true - only has a meaning on items that are minimal cardinality of zero (0), and applies only to the source actor populating the data. The source actor shall populate the elements marked with MustSupport, if the concept is supported by the actor, a value exists, and security and consent rules permit.
The consuming actors should handle these elements being populated or being absent/empty.
Note that sometimes mustSupport will appear on elements with a minimal cardinality greater than zero (0), this is due to inheritance from a less constrained profile.



---

// File: input/pagecontent/issues.md

## Significant Changes

### Significant Changes From Previous Release
This is the first release of this Implementation Guide.

##Issues

### Submit an Issue
IHE welcomes [New Issues](https://github.com/IHE/PCC.mAPS/issues/new/choose) from the GitHub community. 
For those without GitHub access, issues may be submitted to the [Public Comment form](https://www.ihe.net/PCC_Public_Comments/).

As issues are submitted they will be managed on the [mAPS GitHub Issues](https://github.com/IHE/PCC.mAPS/issues), where discussion and workarounds may be found. These issues, when critical, will be processed using the normal [IHE Change Proposal](https://wiki.ihe.net/index.php/Category:CPs) management and balloting. It is important to note that as soon as a Change Proposal is approved, it carries the same weight as a published Implementation Guide (i.e., it is testable at an [IHE Connectathon](https://www.ihe.net/participate/connectathon/) from the time it is approved, even if it will not be integrated until several months later).

### Open Issues

- APSOpenIssue_001: Seeking Comment -- For this version of the Antepartum summary we decided to combine the separated Antepartum documents into one Summary document. When Combining these we ended up bringing in requirements such as chief complaint and physical exams. Do we need two different version of the document, one that is strictly just a pregnancy summary and the other that is a visit summary to reduce the need for those elements?
- APSOpenIssue_002: Seeking Comment -- How does Antepartum summary align with how current documentation is developed around Visit summary documents for OBGYN and pregnancy visits? comments on this may also apply to APSOpenIssue_001 
- APSOpenIssue_003: Seeking Comment -- Should we include a value set within the Social History section to define what types of SDOH observations are relevant to the pregnancy, similar to how we have pregnancy relevant history of past illnesses? 
- APSOpenIssue_004: Seeking Comment -- The IHE Maternal Health SMEs have suggested key social history observations that result in obstetric risk (homelessness, food insecurity, known by social services, lack of transportation, domestic violence, support systems needed, and other resources needed). 
- APSOpenIssue_005: Seeking Comment -- Do we need a review of system - mental history , if so do an any of the values in the following value set apply (Antepartum.Review.of.Systems.Menstrual.History.VS)? Are there an alternate LOINC based value sets for this observation? 
- APSOpenIssue_006: Seeking Comment -- For this profile we tried to take on the challenge of profiling some of the organizer observations that were defined in the Antepartum Summary CDA specification. We decided to take the approach of referencing the related observations through the hasMember element. Seeking feedback on this approach.
- APSOpenIssue_007: Seeking Comment -- Why are the number of Births to term and number of births preterm observations repeated in the current pregnancy observation organizer and the pregnancy history organizer in the APS CDA specification? How best do we map into this FHIR model?
- APSOpenIssue_008: Seeking Comment -- There are many repeated observations with small variations (DELIVERY DATE (CLINICAL ESTIMATE), DELIVERY DATE (ESTIMATED FROM LAST MENSTRUAL PERIOD), FETUS, GESTATIONAL AGE (CLINICAL ESTIMATE), FETUS, GESTATIONAL AGE (ESTIMATED FROM LAST MENSTRUAL PERIOD)). The variations that we see could be informed by an observation method. Seeking comment on the possibility of simplifying these various observations into a single one with a requirement for the method, chosen from a value set, to be defined.
- APSOpenIssue_009: Seeking Comment -- The Antepartum Summary CDA Specification references a number of observations that appear irrelevant to Antepartum care (32396-4	Labor duration, 8339-4	Body weight at birth, 29300-1	Procedure, 8722-1 	Surgical operation note anesthesia, 52829-9	Place of service).
- APSOpenIssue_010: Seeking Comment -- Pregnancy status loinc code was updated to loinc 82810-3 to allign with IPS efforts. 
- APSOpenIssue_011: Seeking Comment -- There were two observations for Date of last menstrual period, one with a code from LOINC and one with a code from SNOMED-CT. The Observation with the LOINC code was chosen over the SNOMED-CT, as best practice is to use LIONC for observation codes. Looking for comment to determine if the original SNOMED code should be retained  or replaced with a LOINC code. 
- APSOpenIssue_012: Seeking Comment -- WE found multiple ways to represent smoking in IPS, IHE, and US-Core. These differences include smoking tobacco status Vs use observations. IPS and US CORE only define the smoking status of the patient and have their value sets in LOINC and SNOMED-CT, respectively. IHE Defines the social history smoking observation around the use of tobacco and has a value set defined for packs per unit of measure. 
- APSOpenIssue_013: Seeking Comment -- For Social History drug use, IHE currently specifies a SNOMED-CT code for the observation type with no constrain to the response. IPS and US core do not use this data element. There is a loinc code (74204-9) which is defined for United States national trauma data. Seeking input for any updates to the value. 
- APSOpenIssue_014: The Social History Employment observation is omitted as structured work concepts, including employer, are addressed using the Occupational Data For Health
- APSOpenIssue_015: * $sct#21840007   "Prior Menses Date" Removed because it is a repeat concept with the same code as "date of last menstrual period". CP may need to be made on the CDA APS to remove as well
- APSOpenIssue_016: * $sct#49882001   "Rash or viral illness since LMP"  Removed because it is a repeat concept with the same code as "Rash since LMP". CP may need to be made on the CDA APS to remove as well
- APSOpenIssue_017: * $loinc#30525-0   "Age, Patient Quantitative"  Removed because it is a repeat concept with the same code as "age". CP may need to be made on the CDA APS to remove as well
- APSOpenIssue_018: * $loinc#20450-3   "Alpha-1-Fetoprotein Multiple of the Median, Serum Quantitative Calculated"  Removed because it is a repeat concept with the same code as "Alpha-1-Fetoprotein". CP may need to be made on the CDA APS to remove as well
- APSOpenIssue_019: * $sct#171054004   "Special Diet"   Removed because it is a repeat concept with the same code as "Nutrition and weight gain counseling". CP may need to be made on the CDA APS to remove as well
- APSOpenIssue_020: * $sct#66961001   "Second Trimester Childbirth classes/hospital facilities"  Removed because it is a repeat concept with the same code as "Childbirth classes/hospital facilities". CP may need to be made on the CDA APS to remove as well.
- APSOpenIssue_021: Observation "On Birth Control Pills at conception" SCT#10036567 no loger exhists. The observation was removed from the build. Commitee needs to determine if a new code needs to be found to replace it or if it should be removed entirely from this build and the CDA content modules that references it. 
- APSOpenIssue_022: Seeking comment on how Birth Plans usally are captured and maintained. we have this modeleed as a text entry, looking to see if the entry should be modified to be a reference 
- APSOpenIssue_023: Seeking comment for the History of infection Section within the Composition resource. This is modeled off of a historical CDA document adn we are looking for a more appropriate way to represent infections that may affect the current pregnancy 
- APSOpenIssue_024: Seeking comment for clinical content review 
- APSOpenIssue_025:	Seeking commment for the representaion of the units of measure for Packs/per day and Drinks per week. The warning was puressed becasue the unit that is measured withthe code is specific to packs per day and drinks per week. However it may be represented as number per day or week and the wordking of packs or drinks can be inplied from th responce of the loinc code that is calling for the result. 
- APSOpenIssue_026:	Seeking commment --  the incorperation of the survey questions for pregnancy history may have to be collected through a structure data capture survey from the patient prior to its incorperation into the summary. should there be language supporting this method of data collection deffined within this profile? 
- APSOpenIssue_027: * $loinc#44996-0     "Trace" no longer a valid code in LOINC Replace ment should be found 
- APSOpenIssue_028: This version of the profile is in FHIR R4.0 not R4B. If there is interest in making this IG conformant to r4B, the public comment period is where this can be requested. If it is not requested, the next version of this IG may be in r4B or r6. 

### Closed Issues

- None






---

// File: input/pagecontent/other.md

<div markdown="1" class="stu-note">
This section modifies other IHE profiles or the General Introduction appendices and is not a part of the mAPS Profile. The content here will be incorporated into the target narrative at a future time, usually when mAPS Profile goes normative.
</div>

## IHE Technical Frameworks General Introduction Appendix A: Actors

|------------------------------------------------|
| Editor, please add the following new or modified actors to the [IHE Technical Frameworks General Introduction Appendix A](https://profiles.ihe.net/GeneralIntro/ch-A.html): |
{:.grid .bg-info}

| Actor                         | Definition                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------------|
| none |  |
{:.grid .table-striped}



## IHE Technical Frameworks General Introduction Appendix B: Transactions

|------------------------------------------------|
| Editor, please add the following new or modified transactions to the [IHE Technical Frameworks General Introduction Appendix B](https://profiles.ihe.net/GeneralIntro/ch-B.html): |
{:.grid .bg-info}


| Transaction                    | Definition                                                                              |
| ------------------------------ | --------------------------------------------------------------------------------------- |
| none |  |
{:.grid .table-striped}

## IHE Technical Frameworks General Introduction Appendix D: Glossary

|------------------------------------------------|
| Editor, please add the following new or modified terms to the [IHE Technical Frameworks General Introduction Appendix D](https://profiles.ihe.net/GeneralIntro/ch-D.html): |
{:.grid .bg-info}

| Term                         | Definition                                                    | Acronyms/Abbreviations | Synonyms    |
| ---------------------------- | --------------------------------------------------------------| -----------------------| ------------|
| none |  |
{:.grid .table-striped}





---

// File: input/pagecontent/testplan.md

<div markdown="1" class="stu-note">

This Test Plan page is a prototype. We expect the maturity of the content will improve over time. For now, we summarize high level testing scope and available tools. Comments are welcome.
</div>


mAPS test goals are:
- Verify the ability of a Content Creator to generate the content using the specified structure for this FHIR Antepartum Summary
- Verify the ability of a Content Consumer to view or import the data according to the import option selected (View, Section Import, Document Import, and Discrete Data Import)

## Introduction

Overall test plan leverages the Profiles and Examples shown on the [Artifacts Summary](artifacts.html). The [Profiles](artifacts.html#structures-resource-profiles) listed are describing the constraints that would be adhered to by Actors claiming conformance to this implementation guide. Thus any applicable Resources that are known to have been published by an app or server MUST be conformant to these profiles as appropriate.

The Example Instances are listed listed in [Example Instances](artifacts.html#example-example-instances). Some are conformant to the profiles. Other examples that either assist with the structure of the examples (e.g. Patient and Encounter) or are examples that  should be able to handle in various ways. 

This section will be filled in as the IHE-Connectathon need drives the creation of the test plans, test procedures, test tools, and reporting.

**TODO: include actor based tests, include positive and edge cases. **

### Unit Test Procedure

Unit Tests in this context is where a SUT is tested against a simulator or validator.  A simulator is a implementation of an actor that is designed specifically to test the opposite pair actor. The simulator might be a reference implementation or may be a specially designed test-bench. Where a reference implementation is used the negative tests are harder to simulate. A validator is a implementation that can check conformance. A validator may be a simulator, but may also be a standalone tool used to validate only a message encoding. Some reference implementations may be able to validate to a StructureDefinition profile, but often these do not include sufficient constraints given the overall actor conformance criteria. 

### Integration Test Procedure

Integration Tests in this context is where two SUT of paired actors test against each other. In this case the subset of tests that can be tested is the intersection. Testing only this intersection is necessary but not sufficient. The testing must also include the capability of the client to exercise the test scenarios that this SUT can test, to determine that failure-modes are handled properly by both SUT.




---

// File: input/pagecontent/volume-1.md

Mobile Antepartum Summary is a content profile that defines the structure for the aggregation of significant events, diagnoses, and plans of care derived from the visits over the course of an antepartum episode.

<a name="actors-and-transactions"> </a>

## 1:28.1 mAPS Actors, Transactions, and Content Modules
This section defines the actors, transactions, and/or content modules in this implementation guide. General definitions of actors are given in the Technical Frameworks General Introduction Appendix A. IHE Transactions can be found in the Technical Frameworks General Introduction Appendix B. Both appendices are located at https://profiles.ihe.net/GeneralIntro/.

### 1:28.1.1 Actors
The actors in this profile are described in more detail in the sections below.
  - [mAPS Content Creator](https://profiles.ihe.net/ITI/sIPS/pcc.html#31-document-sharing-pcc-1)
  - [mAPS Content Consumer](https://profiles.ihe.net/ITI/sIPS/pcc.html#31-document-sharing-pcc-1)

<a name="Content-Creator"> </a>

#### 1:28.1.1.1 Content Creator

The [mAPS Content Creator](https://profiles.ihe.net/ITI/sIPS/pcc.html#31-document-sharing-pcc-1) creates the [APS content](StructureDefinition-IHE.PCC.mAPS.Composition.html) and shares it using one of the methods defined in the [IHE Document Sharing Health Information Exchange](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html).

<a name="Content-Consumer"> </a>

#### 1:28.1.1.2 Content Consumer

The [mAPS Content Consumer](https://profiles.ihe.net/ITI/sIPS/pcc.html#31-document-sharing-pcc-1) consumes the [APS content](StructureDefinition-IHE.PCC.mAPS.Composition.html) and obtains it using one of the methods defined in the [IHE Document Sharing Health Information Exchange](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html).

### 1:28.1.2 mAPS Content

The Content Creator and Content Consumer share the [APS content](StructureDefinition-IHE.PCC.mAPS.Composition.html) using one of the methods defined in the [IHE Document Sharing Health Information Exchange](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html).

<a name="actor-options"> </a>

## 1:28.2 mAPS Actor Options

Options that may be selected for each actor in this implementation guide, are listed in Table 3.2-1 below. Dependencies
between options when applicable are specified in notes.

|     Actor        |      Option          |
|------------------|----------------------|
| mAPS Content Consumer | View                 |
| mAPS Content Consumer | Document Import      |
| mAPS Content Consumer | Discrete Data Import |
{: .grid}

### 1:28.2.1 View Option

This option defines the processing requirements placed on Content Consumers for providing access, rendering and management of the medical document. See the [View Option in IHE PCC TF-2:3.1.1](https://profiles.ihe.net/ITI/sIPS/pcc.html#31-document-sharing-pcc-1) for more details on this option.

The Content Consumer Actor shall be able to present a view of the document. Minimal view guidance following [FHIR core Document Presentation](http://hl7.org/fhir/documents.html#presentation).

### 1:28.2.2 Document Import Option

This option defines the processing requirements placed on Content Consumers for providing access, and importing the entire medical document and managing it as part of the patient record. See the [Document Import Option in IHE PCC TF-2:3.1.2](https://profiles.ihe.net/ITI/sIPS/pcc.html#31-document-sharing-pcc-1) for more details on this option.

### 1:28.2.3 Discrete Data Import Option

This option defines the processing requirements placed on Content Consumers for providing access, and importing discrete data from selected sections of the medical document and
managing them as part of the patient record. See the [Discrete Data Import Option in IHE PCC TF-2:3.1.4](https://profiles.ihe.net/ITI/sIPS/pcc.html#31-document-sharing-pcc-1) for more details on this option.

<a name="required-groupings"> </a>

## 1:28.3 mAPS Required Actor Groupings

N/A

<a name="overview"> </a>

## 1:28.1 Overview
TBD
This FHIR document inherits its composition from the [International Patient Summary](https://hl7.org/fhir/uv/ips/) and will have some dependencies on that Implementation guide. 

The following table informs the Pregnancy observations that are defined in this profile, indicating where the observation is already included in the in the IPS. However, many of the sections and entries defined in the IPS were designed to be extensible, so the additional observations profiled by this specification do not impact conformance to the IPS document. 


|     mAPS Pregnancy Observations                                                                                                    |  Inherited from IPS (Y/N) |
|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| [Pregnancy History](StructureDefinition-IHE.PregnancyHistory.html)                                                                | N                         |
| [Date Of First Prenatal Visit](StructureDefinition-IHE.DateOfFirstPrenatalVisit.html)                                             | N                         |
| [Number Of Prenatal Visits For This Pregnancy](StructureDefinition-IHE.NumberOfPrenatalVisitsForThisPregnancy.html)               | N                         |
| [Pregnancy Status]({{site.data.fhir.hl7ips}}/StructureDefinition/Observation-pregnancy-status-uv-ips)                                                  | Y                         |
| [Menstrual Status](StructureDefinition-IHE.MenstrualStatus.html)                                                                  | N                         |
| [Date Of Last Menstral Period](StructureDefinition-IHE.DateOfLastMenstralPeriod.html)                                             | N                         |
| [Delivery Date Clinical Estimate](StructureDefinition-IHE.DeliveryDateClinicalEstimate.html)                                      | N                         |
| [Delivery Date Estimated From LMP](StructureDefinition-IHE.DeliveryDateEstimatedFromLMP.html)                                     | N                         |
| [Delivery Date Estimated From Ovulation Date](StructureDefinition-IHE.DeliveryDateEstimatedFromOvulationDate.html)                | N                         |
| [Multiple Pregnancy](StructureDefinition-IHE.MultiplePregnancy.html)                                                              | N                         |
| [Gestational Age](StructureDefinition-IHE.GestationalAge.html)                                                                    | N                         |
| [Fetus Gestational Age](StructureDefinition-IHE.FetusGestationalAge.html)                                                         | N                         |
| [Body Weight Measured Pre Pregnancy](StructureDefinition-IHE.BodyWeightMeasuredPrePregnancy.html)                                 | N                         |
| [Labor Risk](StructureDefinition-IHE.LaborRisk.html)                                                                              | N                         |
| [Delivery Risk](StructureDefinition-IHE.DeliveryRisk.html)                                                                        | N                         |
| [Fetus Gestational Age Clinical Estimate](StructureDefinition-IHE.FetusGestationalAgeClinicalEstimate.html)                       | N                         |
| [Fetus Gestational Age Estimated From LMP](StructureDefinition-IHE.FetusGestationalAgeEstimatedFromLMP.html)                      | N                         |
| [Fetus Gestational Age Estimated From Ovulation Date](StructureDefinition-IHE.FetusGestationalAgeEstimatedFromOvulationDate.html) | N                         |
| [Number Of Live Births](StructureDefinition-IHE.NumberOfLiveBirths.html)                                                          | N                         |
| [Number Of Preterm Births](StructureDefinition-IHE.NumberOfPretermBirths.html)                                                    | N                         |
| [Number Of Births StillLiving](StructureDefinition-IHE.NumberOfBirthsStillLiving.html)                                            | N                         |
| [Number Of Births To Term](StructureDefinition-IHE.NumberOfBirthsToTerm.html)                                                     | N                         |
| [Number Of Total Births](StructureDefinition-IHE.NumberOfTotalBirths.html)                                                        | N                         |
| [Number Of Abortions](StructureDefinition-IHE.NumberOfAbortions.html)                                                             | N                         |
| [Number Of Abortions Induced](StructureDefinition-IHE.NumberOfAbortionsInduced.html)                                              | N                         |
| [Number Of Abortions Spontanious](StructureDefinition-IHE.NumberOfAbortionsSpontanious.html)                                      | N                         |
| [Number Of Ectopic Pregnancies](StructureDefinition-IHE.NumberOfEctopicPregnancies.html)                                          | N                         |
| [Number Of Stillborn Births](StructureDefinition-IHE.NumberOfStillbornBirths.html)                                                | N                         |
| [Number Of Pregnancies](StructureDefinition-IHE.NumberOfPregnancies.html)                                                         | N                         |
| [Number Of Previous Live Births Now Dead](StructureDefinition-IHE.NumberOfPreviousLiveBirthsNowDead.html)                         | N                         |
| [Date Of Last Live Birth](StructureDefinition-IHE.DateOfLastLiveBirth.html)                                                       | N                         |
| [Number Of Previous Cesarean Deliveries](StructureDefinition-IHE.NumberOfPreviousCesareanDeliveries.html)                         | N                         |
| [Number Of Other Pregnancy Outcomes](StructureDefinition-IHE.NumberOfOtherPregnancyOutcomes.html)                                 | N                         |
| [Date Of Last Other Pregnancy Outcome](StructureDefinition-IHE.DateOfLastOtherPregnancyOutcome.html)                              | N                         |
| [Menses Monthly](StructureDefinition-IHE.MensesMonthly.html)                                                                      | N                         |
| [Prior Menses Date](StructureDefinition-IHE.PriorMensesDate.html)                                                                 | N                         |
| [Duration Of Menstrual Flow](StructureDefinition-IHE.DurationOfMenstrualFlow.html)                                                | N                         |
| [Frequency Of Menstrual Cycles](StructureDefinition-IHE.FrequencyOfMenstrualCycles.html)                                          | N                         |
| [Menarche](StructureDefinition-IHE.Menarche.html)                                                                                 | N                         |
| [Employment Status](https://profiles.ihe.net/PCC/ODH/StructureDefinition/odh-EmploymentStatus)                                                                | N                         |
| [HCG+](StructureDefinition-IHE.hCGPositive.html)                                                                                      | N                         |
| [Smoking Tobacco Use Frequency](StructureDefinition-IHE.SmokingTobaccoUseFrequency.html)                                          | N                         |
| [Smoking Status]({{site.data.fhir.hl7ips}}/StructureDefinition/Observation-tobaccouse-uv-ips)                                                          | Y                         |
| [alcohol Use]({{site.data.fhir.hl7ips}}/StructureDefinition/Observation-alcoholuse-uv-ips)                                                             | Y                         |
| [Alcohol Use Frequency](StructureDefinition-IHE.AlcoholUseFrequency.html)                                                         | N                         |
| [Drug Use](StructureDefinition-IHE.drugUse.html)                                                                                  | N                         |
| [Exercise](StructureDefinition-IHE.Exercise.html)                                                                                 | N                         |
| [Diet](StructureDefinition-IHE.Diet.html)                                                                                         | N                         |
| [Toxic Exposure](StructureDefinition-IHE.ToxicExposure.html)                                                                      | N                         |
| [Homelessness](StructureDefinition-IHE.Homelessness.html)                                                                         | N                         |
| [Domestic Violence Risk](StructureDefinition-IHE.ViolenceRisk.html)                                                               | N                         |
| [Pregnancy Education Observation](StructureDefinition-IHE.PregnancyEducationObservation.html)                                     | N                         |
{: .grid}

### 1:28.4.1 Concepts

### 1:28.4.2 Use Cases

## 1:28.2 Use Cases 

### 1:28.2.1.1 Use case 1
Precondition: The patient’s obstetrician sees the patient for her pregnancy in the ambulatory (office) setting.  During the pregnancy, the patient is noted to have a medical problem requiring consultation with a Maternal-Fetal Medicine specialist (perinatologist).  The office obtains pre-authorization from the insurance payer for the consult, and for the intended or anticipated route of delivery, and transmits that information to both the consultant and to the hospital.  

Events: The patient is seen in the obstetrician’s office where a complete medical and relevant social history are taken by the nurse and recorded in the office EHR, incorporating data from the perinatologist’s consultation report as appropriate. Laboratory and imaging reports ordered by the perinatologist as well as the perinatologist’s consultation report are displayed electronically to the obstetrician. The obstetrician reviews the consultation report from the perinatologist’s office and imaging studies ordered by the perinatologist along with data recorded by the nurse.  Physical exam reveals some abnormalities. The obstetrician orders additional laboratory studies, and sends the patient to the hospital to Labor and Delivery. 

When the laboratory results return, the physician completes the admission H&P, Allergies, Medications, includes the data prepared or ordered by the perinatologist, and makes it available to L&D.  This data includes an assessment of the patient’s health status, and the requisite data summarized from the antepartum care given. The charge nurse for L&D documents that the complete collection of documents needed is available.  The Post-Partum discharge planning is notified and assures that there is a suitable environment with appropriate support for post-delivery after-care.

Postcondition: The Pre-delivery H&P and Antepartum Summary with appropriate relationships to the Perinatologist Consultation, and all the antepartum laboratory and imaging studies are available to the obstetrician and the birthing center personnel for incorporation into their respective EHRs. The H&P is also available to the patient for viewing and incorporation into the patient’s PHR, and into the newborn baby’s PHR.

This section defines the actors and transactions in this implementation guide.

Figure below shows the actors directly
involved in the Antepartum Summary document exchange  
Profile and the relevant transactions between them.

<figure>
{%include ActorsAndTransactions.svg%}
<figcaption><b>Figure 28.1-2: PCC Content Creator Content Consumer [PCC-01] Actor Diagram</b></figcaption>
</figure>
<br clear="all">


<a name="security-considerations"> </a>

## 1:X.5 mAPS Security Considerations

See ITI TF-2x: [Appendix Z.8 “Mobile Security Considerations”](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations)

<a name="other-grouping"> </a>

## 28.6 APS Cross-Profile Considerations

The content defined in this profile can serve as source information for many pregancy related public health reporting and research efforts. Information from this profile may provide content to the Labor and Delivery Summary and may be a source for Birth and Fetal Death Reporting (BFDRE). 


---

// File: input/pagecontent/volume-3.md

Volume 3 contains content profiles.

This section corresponds to Content Module

## 1:28.6 Antepartum Summary Specification 
The Antepartum Summary represents a summary of the most critical information to an antepartum care provider regarding the status of a patient’s pregnancy. This document content module is a Medical Summary and inherits all header constraints from Medical Summary (1.3.6.1.4.1.19376.1.5.3.1.1.2).

### 1:28.6.1 Format Code

**TODO***

### 1:28.6.2 LOINC Code
The LOINC code for this document is 57055-6 Antepartum summary

### 1:28.6.3 Standards
* [ASTM/HL7 Continuity of Care Document]()
* [HL7 CDA Release 2.0](http://www.hl7.org/documentcenter/private/standards/cda/r2/cda_r2_normativewebedition.zip)
* [American College of Obstetricians and Gynecologists (ACOG) Antepartum Record ](http://www.acog.org/)
* [LOINC](http://www.regenstrief.org/medinformatics/loinc/)
* [SNOMED](http://www.snomed.org/)
* [CDA for Common Document Types History and Physical Notes (DSTU) ](http://www.hl7.org/dstucomments/index.cfm)


### 1:28.6.4 Specification

This specification is fully deffined at this published URL (http://build.fhir.org/ig/IHE/PCC.APS/branches/master/artifacts.html)


### 1:28.6.5 Conformance
N/A


---

// File: input/fsh/Aliases.fsh

Alias: $sct = http://snomed.info/sct
Alias: $ucum = http://unitsofmeasure.org
Alias: $loinc = http://loinc.org
Alias: $m49.htm = http://unstats.un.org/unsd/methods/m49/m49.htm
Alias: $StructureDefinition-Patient-uv-ips.html = https://hl7.org/fhir/uv/ips/StructureDefinition-Patient-uv-ips.html
Alias: $referencerange-meaning = http://hl7.org/fhir/ValueSet/referencerange-meaning
Alias: $2.16.840.1.113883.12.292 = https://phinvads.cdc.gov/vads/ViewCodeSystem.action?id=2.16.840.1.113883.12.292
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category



---

// File: input/fsh/Antepartum_geneticScreening.fsh

Profile:        Antepartum_Genetic_Screening
Parent:         Observation
Id:             IHE.Antepartum.Genetic.Screening
Title:          "Antepartum Genetic Screenings"
Description:    "Antepartum Genetic Screening lab results"

* code from Antepartum_Family_History_and_Genetic_Screening_VS (extensible)

Instance: ex-Antepartum-Genetic-Screening
InstanceOf: Antepartum_Genetic_Screening
Usage: #example
Description: "The Example instance for Antepartum Genetic Screening lab results"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* code = $sct#417357006
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez) 


---

// File: input/fsh/AntepartumLabs.fsh

Profile:        AntepartumLabs
Parent:         ObservationResultsUvIps
Id:             IHE.AntepartumLabs
Title:          "Antepartum Labs"
Description:    "The Lab report results for the antepartum Labs."

* code from Antepartum_Laboratory_VS (extensible)

Instance: ex-AntepartumLabs
InstanceOf: AntepartumLabs
Usage: #example
Description: "The Example instance for Antepartum Lab results"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* code = $loinc#10331-7
* valueCodeableConcept = $sct#10828004
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

---

// File: input/fsh/AntepartumSummary_ValueSets.fsh

ValueSet: Antepartum_History_of_Past_Illness_VS
Title: "Antepartum History of Past Illness"
Description: "This value set identifies conditions that may impact the pregnancy care and monitoring decisions."
Id: Antepartum.History.of.Past.Illness.VS
* ^experimental = false
* $sct#73211009   "Diabetes" 
* $sct#38341003   "Hypertension" 
* $sct#56265001   "Heart Disease" 
* $sct#85828009   "Autoimmune Disorder" 
* $sct#90708001   "Kidney Disease" 
* $sct#68566005   "UTI" 
* $sct#118940003   "Neurologic" 
* $sct#84757009   "Epilepsy" 
* $sct#74732009   "Psychiatric" 
* $sct#41006004   "Depression" 
* $sct#58703003   "Postpartum Depression" 
* $sct#128241005   "Hepatitis" 
* $sct#235856003   "Liver Disease" 
* $sct#276504003   "Varicosities" 
* $sct#61599003   "Phlebitis" 
* $sct#14304000   "Thyroid Dysfunction" 
* $sct#417746004   "Trauma" 
* $sct#225818009   "Violence" 
* $sct#116859006   "History of Blood Transfusion" 
* $sct#3885002   "D(Rh) Sensitized" 
* $sct#19829001   "Pulmonary" 
* $sct#367498001   "Seasonal Allergies" 
* $sct#416098002   "Drug Allergy" 
* $sct#300916003   "Latex Allergy" 
* $sct#414285001   "Food Allergy" 
* $sct#79604008   "Breast" 
* $sct#32485007   "Hospitalizations" 
* $sct#33211000   "Anesthetic Complications" 
* $sct#274688009   "History of Abnormal Pap" 
* $sct#37849005   "Uterine Anomaly/DES" 
* $sct#413340008   "DES Exposure of fetus" 
* $sct#8619003   "Infertility" 
* $sct#63487001   "Artificial Reproductive Therapy (ART) Treatment" 
//* $sct# ??  "History of Gestational Diabetes" 
* $sct#17382005   "History of Incompetent Cervix" 
//comment: Code is for incompetent cervix rather than history of. Given this condition this should be okay.
//* $sct# ??  "History of Infant with Intrauterine Growth Restriction" 
//* $sct# ??  "History of Infant with Macrosomia" 
//* $sct# ??  "History of Pregnancy Induced Hypertension" 
//* $sct# ??  "History of Placenta Previa/Abruption" 
* $sct#441493008   "History of Preterm labor" 
//* $sct# ??  "History of Premature Rupture of Membranes" 
* $sct#161805006   "Previous Cesarean Section" 
* $sct#161743003   "History of Stillbirth" 
//* $sct# ??  "History of Neonatal Death" 
* $sct#161809000   "History of Postpartum Hemorrhage" 


ValueSet: Antepartum_Family_History_and_Genetic_Screening_VS
Title: "Antepartum Family History and Genetic Screening"
Description: "This value set includes the type of genetic-related risks identified through screening of the patient’s and biological father’s family history."
Id: Antepartum.Family.History.and.Genetic.Screening.VS
* ^experimental = false
* $sct#408856003   "Autism" 
* $sct#414022008   "Blood Disorders" 
* $sct#80544005   "Canavan Disease" 
* $sct#409709004   "Chromosomal Disorder Includes any inherited genetic or chromosomal disorders" 
* $sct#13213009   "Congenital Heart Defect" 
* $sct#190905008   "Cystic Fibrosis" 
* $sct#276720006   "Dysmorphism (Birth Defect) Patient or baby's father has a child with birth defects" 
* $sct#41040004   "Down Syndrome" 
* $sct#29159009   "Familial Dysautonomia" 
* $sct#90935002   "Hemophilia" 
* $sct#58756001   "Huntington's Chorea" 
* $sct#75934005   "Maternal Metabolic Disorder" 
* $sct#91138005   "Mental Retardation" 
* $sct#73297009   "Muscular Dystrophy" 
* $sct#253098009   "Neural Tube Defect" 
* $sct#102878001   "Recurrent pregnancy loss/stillbirth" 
* $sct#417357006   "Sickle Cell Disease" 
* $sct#16402000   "Sickle Cell Trait" 
* $sct#111385000   "Tay-Sachs" 
* $sct#40108008   "Thalassemia" 


ValueSet: Antepartum_Review_of_Systems_Menstrual_History_VS
Title: "Antepartum Review of Systems Menstrual History"
Description: "Antepartum Review of Systems Menstrual History This value set identifies the menstrual-history related observations that may inform the pregnancy care."
Id: Antepartum.Review.of.Systems.Menstrual.History.VS
* ^experimental = false
* $sct#21840007   "Date of Last Menstrual Period" 
* $sct#364307006   "Menses Monthly" 
// APSOpenIssue_015: * $sct#21840007   "Prior Menses Date" Removed because it is a repeat concept wiht the same code as "date of last menstral period". CP may need to be made on the CDA APS to remove as well
* $sct#364306002   "Duration of Menstrual Flow" 
* $sct#289887006   "Frequency of Menstrual Cycles" 
//* $sct#10036567   "On Birth Control Pills at conception" --- code no longer supported by SNOMED ct 
* $sct#398700009   "Menarche" 
* $sct#250423000   "hCG+" 


ValueSet: Antepartum_History_of_Infection_VS
Title: "Antepartum History of Infection"
Description: "This value set identifies the infections that may result in risk to the pregnancy or otherwise inform the birth plan."
Id: Antepartum.History.of.Infection.VS
* ^experimental = false
* $sct#170464005   "Live with someone with TB or exposed to TB" 
* $sct#402888002   "History of Genital Herpes" 
* $sct#240480009   "Exposed to Genital Herpes" 
* $sct#49882001   "Rash since LMP" 
* $sct#34014006   "Viral illness since LMP" 
// APSOpenIssue_016: * $sct#49882001   "Rash or viral illness since LMP"  Removed because it is a repeat concept wiht the same code as "Rash since LMP". CP may need to be made on the CDA APS to remove as well
* $sct#235871004   "Hepatitis" 
* $sct#235872006   "Hepatitis" 
* $sct#8098009   "History of STD" 
* $sct#15628003   "History of Gonorrhea" 
* $sct#312099009   "History of Chlamydia" 
* $sct#302812006   "History of HPV" 
* $sct#165816005   "History of HIV" 
* $sct#76272004   "History of Syphilis"


ValueSet: Antepartum_Laboratory_VS
Title: "Antepartum Laboratory"
Description: "This value set identifies the laboratory tests that may be ordered and monitored during pregnancy."
Id: Antepartum.Laboratory.VS
* ^experimental = false
* $loinc#890-4   "Ab Screen" 
* $loinc#883-9   "ABO Group" 
* $loinc#10331-7   "Rh" 
* $loinc#5196-1   "HBV surface Ag (EIA)" 
* $loinc#5195-3   "HBV surface Ag" 
* $loinc#5197-9   "HBV surface Ag (RIA)" 
* $loinc#7905-3   "HBV surface Ag (Neut)" 
* $loinc#718-7   "Hgb" 
* $loinc#4544-3   "Hct (Automated count)" 
* $loinc#30350-3   "Hgb" 
* $loinc#13514-5   "Hemoglobin pattern [interpretation] in Blood by Electrophoresis Narrative" 
//* $loinc# ??   "Aneuploidy Screening (Ultrasound)" 
* $loinc#21440-3   "HPV I/H Risk DNA Cervix (Probe)" 
* $loinc#21441-1   "HPV Low Risk DNA Cervix (Probe)" 
* $loinc#10524-7   "Cytology Cervix" 
* $loinc#18500-9   "Thin Prep Cervix" 
* $loinc#19765-7   "Cytology Cervix/Vaginal (Nominal)" 
* $loinc#19766-5   "Cytology Cervix/Vaginal (Narrative)" 
* $loinc#5334-8   "RUBV Ab IgG (EIA)" 
* $loinc#20458-6   "RUBV Ab IgG" 
* $loinc#40667-8   "RUBV Ab IgG (EIA)" 
* $loinc#8014-3   "RUBV Ab IgG" 
* $loinc#1647-7   "Purified protein derivative skin test" 
* $loinc#6347-9   "Chlamydia Ag" 
* $loinc#14510-2   "Chlamydia trachomatis Ag (Vaginal)" 
* $loinc#14474-1   "Chlamydia trachomatis Ag (Urine)" 
* $loinc#6349-5   "Chlamydia trachomatis (Unspecified specimen)" 
* $loinc#691-6    "Neisseria Gonorrhoeae (genital specimen)" 
* $loinc#9568-7   "Neisseria Gonorrhoeaea Ab" 
* $loinc#45067-6   "Chlamydia Trachomatis Neisseria Gonorrhoeae (Cervix)" 
* $loinc#45074-2   "Chlamydia Trachomatis Neisseria Gonorrhoeae (Urine)" 
* $loinc#35096-7   "OB Ultrasound Panel" 
* $loinc#30525-0   "Age" 
* $loinc#29463-7   "Body Weight" 
* $loinc#18185-9   "Gestational Age" 
* $loinc#20450-3   "Alpha-1-Fetoprotein" 
* $loinc#48803-1   "Neural Tube Defect Risk" 
* $loinc#33774-1   "Karotype" 
* $loinc#33773-3   "Karyotype (Amino Fluid)" 
* $loinc#41273-4   "Alpha-1-Fetoprotein, Amniotic Fluid Semi-Quantitative" 
* $loinc#1832-5   "Alpha-1-Fetoprotein [Multiple of the median] in Amniotic Fluid" 
* $loinc#29595-6   "Alpha-1-Fetoprotein [Mass/volume] in Amniotic Fluid" 
* $loinc#1557-8   "Fasting Blood Glucose-Venous" 
* $loinc#14770-2   "Fasting Blood Glucose-Capillary" 
* $loinc#1507-3   "Glucose 1HR post 75 g glucose" 
* $loinc#14995-5   "Glucose 2HR post 75 g glucose" 
* $loinc#20437-0   "Glucose 3HR post 75 g glucose" 
* $loinc#31147-2    "Reagin Ab" 
* $loinc#20508-8   "Reagin Ab by RPR" 
* $loinc#5292-8   "Reagin Ab by VDRL" 
* $loinc#48683-7   "Beta Strep Group B (PCR)" 
* $loinc#11267-2   "Strep Group B" 
* $loinc#21198-7   "Beta HCG" 
* $loinc#15410-4   "Varicella zoster virus Ab.IgG (EIA)" 
* $loinc#17763-4   "Varicella zoster virus Ab.IgG (IF)" 
// APSOpenIssue_017: * $loinc#30525-0   "Age, Patient Quantitative"  Removed because it is a repeat concept wiht the same code as "age". CP may need to be made on the CDA APS to remove as well
// APSOpenIssue_018: * $loinc#20450-3   "Alpha-1-Fetoprotein Multiple of the Median, Serum Quantitative Calculated"  Removed because it is a repeat concept wiht the same code as "Alpha-1-Fetoprotein". CP may need to be made on the CDA APS to remove as well
* $loinc#20465-1   "Choriogonadotropin/Choriogonatotropin, Control Serum Quantitative" 
* $loinc#20466-9   "Estriol/Estriol, Control Serum Quantitative" 
* $loinc#20406-5   "Glucose" 
* $loinc#20505-4   "Bilirubin" 
* $loinc#5797-6   "Ketones" 
* $loinc#5811-5   "Specific Gravity" 
* $loinc#5803-2   "pH" 
* $loinc#5804-0   "Protein" 
* $loinc#20405-7   "Urobilinogen" 
* $loinc#20407-3   "Nitrite" 
* $loinc#5794-3   "Hemoglobin" 
* $loinc#5799-2   "Leukocyte esterase" 
* $loinc#5767-9   "Appearance" 
* $loinc#5778-6   "Color" 
* $loinc#9842-6   "Casts" 
* $loinc#5787-7   "Epithelial cells" 
* $loinc#13945-1   "Erythrocytes" 
* $loinc#5769-5   "Bacteria" 
* $loinc#49588-7   "First trimester maternal screen with nuchal translucency [interpretation] Narrative" 
* $loinc#11580-8   "Thyrotropin (3rd generation)" 
* $loinc#3016-3   "TSH" 
* $loinc#5385-0   "Thyrotropin Receptor Ab" 
* $loinc#27975-2   "TSH (serum)" 
* $loinc#3051-0   "T3 Free" 
* $loinc#3052-8  "T3 Reverse" 
* $loinc#3054-4   "T3 True" 
* $loinc#3050-2   "T3 Resin Uptake"  


ValueSet: Antepartum_Education_VS
Title: "Antepartum Education"
Description: "This value set identifies the types of pregnancy-related education that may be delivered to the patient. "
Id: Antepartum.Education.VS
* ^experimental = false
* $sct#440047008   "Risk factors identified by prenatal history" 
* $sct#17629007   "Anticipated course of prenatal care" 
* $sct#171054004   "Nutrition and weight gain counseling"
// APSOpenIssue_019: * $sct#171054004   "Special Diet"   Removed because it is a repeat concept wiht the same code as "Nutrition and weight gain counseling". CP may need to be made on the CDA APS to remove as well
* $sct#439733009   "Toxoplasmosis precautions (cats/raw meat)" 
* $sct#162169002   "Sexual activity" 
* $sct#171056002   "Exercise" 
//* $sct# ??  "Influenza vaccine" 
* $sct#171055003   "Smoking/tobacco counseling" 
* $sct#385872009   "Environmental/work hazards" 
* $sct#439816006   "Travel" 
* $sct#171057006   "Alcohol" 
* $sct#425014005   "Illicit/recreational drugs" 
* $sct#171058001   "Use of any medications" 
* $sct#440227005   "Indications for ultrasound" 
* $sct#413457006   "Domestic violence" 
* $sct#440638004   "Seatbelt use" 
* $sct#66961001   "Childbirth classes/hospital facilities" 
// APSOpenIssue_020: * $sct#66961001   "Second Trimester Childbirth classes/hospital facilities"  Removed because it is a repeat concept wiht the same code as "Childbirth classes/hospital facilities". CP may need to be made on the CDA APS to remove as well
* $sct#440669000   "Signs and symptoms of preterm labor" 
* $sct#410299006   "Abnormal Lab Values" 
* $sct#439908001  "Selecting a newborn care provider" 
* $sct#54070000   "Postpartum family planning" 
* $sct#243064009   "Tubal sterilization" 
* $sct#243062008   "Third Trimester Anesthesia/analgesia plans" 
* $sct#310585007   "Intended Facility for Delivery plan" 
* $sct#440309009   "Fetal movement monitoring" 
* $sct#440671000   "Labor signs" 
* $sct#440073003   "VBAC counseling" 
//* $sct# ??  "Signs & Symptoms of Pregnancy-induced hypertension" 
* $sct#184002001   "Circumcision" 
* $sct#169644004   "Bottle feeding" 
* $sct#169643005   "Breast feeding" 
* $sct#439366005   "Postpartum depression" 
* $sct#75461000   "Newborn education (Newborn screening,jaundice, SIDS, car seat)" 
* $sct#40791000   "Family medical leave or disability forms" 
* $sct#408835000   "Tubal sterilization consent signed" 


ValueSet: Advance_Directives_VS
Title: "Advance Directives"
Description: "This value set lists the interventions that the patient may choose to accept or decline in their advance directives."
Id: Advance.Directives.VS
* ^experimental = false
* $sct#304251008   "Resuscitation" 
* $sct#52765003   "Intubation" 
* $sct#225204009   "IV Fluid and Support" 
* $sct#89666000   "CPR" 
* $sct#281789004   "Antibiotics" 
* $sct#78823007   "Life Support" 
* $sct#61420007   "Tube Feedings" 
* $sct#116859006   "Transfusion of blood product" 
* $sct#71388002   "Other Directive"  


ValueSet: Smoking_Tabbacco_Use_Frequency_VS
Title: "Smoking Tabbacco Use Frequency"
Description: "This value set identifies the frequency of tobacco use in packs/day, packs/week, or packs/year."
Id: Smoking.Tabbacco.Use.Frequency.VS
* ^experimental = false
* $ucum#{pack}/d   "Packs per day" 
* $ucum#{pack}/wk   "Packs per week" 
* $ucum#{pack}/a    "Packs in a year" 


ValueSet: Smoking_Status_VS
Title: "Smoking Status"
Description: "This value set identifies whether the patient is a smoker (everyday smoker or some day smoker) or whether the patient was a previous smoker."
Id: Smoking.Status.VS
* ^experimental = false
* $sct#449868002   "Current every day smoker" 
* $sct#428041000124106   "Current some day smoker" 
* $sct#8517006   "Former smoker" 
* $sct#266919005   "Never smoker" 
* $sct#77176002   "Smoker, current status unknown" 
* $sct#266927001   "Unknown if ever smoked" 
// * $sct#428071000124103   "Heavy tobacco smoker" --- Code no longer availabel in SNOMED ct
// * $sct#428061000124105   "Light tobacco smoker"  --- Code no longer availabel in SNOMED ct


ValueSet: Alcohol_USe_Frequency_VS
Title: "Alcohol USe Frequency"
Description: "This value set lists the frequency metrics to express the frequency of alcohol use (e.g. drinks per day, drinks per week)."
Id: Alcohol.USe.Frequency.VS
* ^experimental = false
* $ucum#{drink}/d  "drinks per day" 
* $ucum#{drink}/wk   "drinks per week" 


ValueSet: Fetal_Presentation_VS
Title: "Fetal Presentation"
Description: "This value set lists the expected values for the Fetal Presentation observation."
Id: Fetal.Presentation.VS
* ^experimental = false
* $sct#70028003     "Vertex"
* $sct#6096002     "Breech"
* $sct#73161006     "Transverse"
* $sct#63750008     "Oblique"
* $sct#124736009     "Compound"
* $sct#8014007     "Brow"
* $sct#21882006     "Face"

ValueSet: Fetal_Movement_VS
Title: "Fetal Movement"
Description: "This value set lists the expected values for the Fetal Movement observation."
Id: Fetal.Movement.VS
* ^experimental = false
* $sct#364755008     "fetal movement activity"
* $sct#276368003     "baby kicks a lot"
* $sct#276370007     "baby not moving"
* $sct#276369006     "reduced fetal movement"
* $sct#289431008     "fetal movements present"
* $sct#268470003     "fetal movements felt"
* $sct#169731002     "fetal movements seen"

ValueSet: Presence_In_Urine_VS
Title: "Presence In Urine"
Description: "This value set lists the expected values for the Presence In Urine observation."
Id: Presence.In.Urine.VS
* ^experimental = false
* $sct#167273002     "Negative"
* $sct#167274008     "Trace"
* $sct#167275009     "1+"
* $sct#167276005     "2+"
* $sct#167277001     "3+"
* $sct#167278006     "4+"

ValueSet: Edema_VS
Title: "Edema observation"
Description: "This value set lists the expected values for the Edema observation."
Id: Edema.VS
* ^experimental = false
//Note: * $loinc#44996-0     "Trace" no longer a valid code in LOINC Replace ment should be found 
* $sct#420829009     "1+"
* $sct#421605005     "2+"
* $sct#421346005     "3+"
* $sct#421129002     "4+"

---

// File: input/fsh/AntepartumSummaryFlowSheet.fsh

Profile:        AntepartumVisitSummaryFlowsheetBattery
Parent:         Observation
Id:             IHE.AntepartumVisitSummaryFlowsheetBattery
Title:          "Antepartum Visit Summary Flowsheet Battery"
Description:    """
The battery is made of several component simple observations. The following table lists the
allowable LOINC codes, displayNames, and observation types, and unit of measures for these
observations.
"""

* status = http://hl7.org/fhir/observation-status#final 
* code = $loinc#57061-4
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* subject only Reference(Patient)
* hasMember only Reference(GestationalAge or FetalBodyWeightPalpation or FetalBodyWeightUltrasound or UterusFundalHeight or FetalPresentationPalpitation or FetalPresentationUltrasound or FetalHeartRateAuscultation or FetalMovementReported or http://hl7.org/fhir/StructureDefinition/bp or PretermLaborSymptoms or CervicalCanalExternalosDiameterUltrasound or EffacementCervixPalpitation or CervixLengthUltrasound or AlbuminPresenceInUrine or GlucosePresenceinUrine or GlucosePresenceinUrineTestStrip or Edema or PainSeverityReported or DateNextClinicVisit or AnnotationComment)


Instance: ex-AntepartumVisitSummaryFlowsheetBattery
InstanceOf: AntepartumVisitSummaryFlowsheetBattery
Usage: #example
Description: "The Example instance for the AntepartumVisitSummaryFlowsheetBattery"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2023-01-06T10:52:30-07:00"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* hasMember[+] = Reference(ex-GestationalAge) 
* hasMember[+] = Reference(ex-FetalBodyWeightPalpation)
* hasMember[+] = Reference(ex-FetalBodyWeightUltrasound)
* hasMember[+] = Reference(ex-UterusFundalHeight)
* hasMember[+] = Reference(ex-FetalPresentationPalpitation)
* hasMember[+] = Reference(ex-FetalPresentationUltrasound)
* hasMember[+] = Reference(ex-FetalHeartRateAuscultation)
* hasMember[+] = Reference(ex-FetalMovementReported)
* hasMember[+] = Reference(ex-bloodpressure-amanda-alvarez)
* hasMember[+] = Reference(ex-VitalSigns-BodyWeight)
* hasMember[+] = Reference(ex-PretermLaborSymptoms)
* hasMember[+] = Reference(ex-CervicalCanalExternalosDiameterUltrasound)
* hasMember[+] = Reference(ex-EffacementCervixPalpitation)
* hasMember[+] = Reference(ex-CervixLengthUltrasound)
* hasMember[+] = Reference(ex-AlbuminPresenceInUrine)
* hasMember[+] = Reference(ex-GlucosePresenceinUrine)
* hasMember[+] = Reference(ex-GlucosePresenceinUrineTestStrip)
* hasMember[+] = Reference(ex-Edema)
* hasMember[+] = Reference(ex-PainSeverityReported)
* hasMember[+] = Reference(ex-DateNextClinicVisit)
* hasMember[+] = Reference(ex-AnnotationComment)


Instance: ex-bloodpressure-amanda-alvarez
InstanceOf: http://hl7.org/fhir/StructureDefinition/bp
Usage: #example
Description: "The Example instance for the bloodpressure observation amanda alvarez"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* component[SystolicBP].valueQuantity = 132 'mm[Hg]'
  * unit = "mmHg"
* component[DiastolicBP].valueQuantity = 86 'mm[Hg]'
  * unit = "mmHg"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Profile:        FetalBodyWeightPalpation
Parent:         Observation
Id:             IHE.FetalBodyWeightPalpation
Title:          "Fetal Body Weight palpation"
Description:    """
The estimated weight of the fetus observation performed using palpation"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#57067-1
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only Quantity
* valueQuantity.system = $ucum
// Note: system codes can be g, kg, lb_av, or oz_av
* performer 1..*
* method = $sct#129434008 "Palpation - action"

Instance: ex-FetalBodyWeightPalpation
InstanceOf: FetalBodyWeightPalpation
Usage: #example
Description: "The Example instance for the Fetal Body Weight Palpation observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 17 'g'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Profile:        FetalBodyWeightUltrasound
Parent:         Observation
Id:             IHE.FetalBodyWeightUltrasound
Title:          "Fetal Body Weight ultrasoud"
Description:    """
The estimated weight of the fetus observation performed using an ultrasound"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#11727-5
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only Quantity
* valueQuantity.system = $ucum
// Note: system codes can be g, kg, lb_av, or oz_av
* performer 1..*
* method = $sct#278292003 "Ultrasound imaging - action"

Instance: ex-FetalBodyWeightUltrasound
InstanceOf: FetalBodyWeightUltrasound
Usage: #example
Description: "The Example instance for the Fetal Body Weight ultrasound observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 17 'g'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Profile:        UterusFundalHeight
Parent:         Observation
Id:             IHE.UterusFundalHeight
Title:          "Uterus Fundal Height"
Description:    """
Distance from the top of the symphysis pubis to the palpable superior border of the uterine fundus """
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#11881-0 
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only Quantity
* valueQuantity.system = $ucum
* valueQuantity.code = #cm
* performer 1..*

Instance: ex-UterusFundalHeight
InstanceOf: UterusFundalHeight
Usage: #example
Description: "The Example instance for the Uterus Fundal Height observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 20 'cm'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Profile:        FetalPresentationPalpitation
Parent:         Observation
Id:             IHE.FetalPresentationPalpitation
Title:          "Fetal Presentation palpation"
Description:    """
Fetal Presentation determined by palpation """
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#11876-0
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only CodeableConcept 
* valueCodeableConcept from Fetal.Presentation.VS (extensible)
* performer 1..*
* method = $sct#129434008 "Palpation - action"

Instance: ex-FetalPresentationPalpitation
InstanceOf: FetalPresentationPalpitation
Usage: #example
Description: "The Example instance for the Fetal Presentation Palpitation observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $sct#6096002
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        FetalPresentationUltrasound
Parent:         Observation
Id:             IHE.FetalPresentationUltrasound
Title:          "Fetal Presentation Ultrasound"
Description:    """
Fetal Presentation determined by ultrasound"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#11877-8
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only CodeableConcept 
* valueCodeableConcept from Fetal.Presentation.VS (extensible)
* performer 1..*
* method = $sct#278292003 "Ultrasound imaging - action"

Instance: ex-FetalPresentationUltrasound
InstanceOf: FetalPresentationUltrasound
Usage: #example
Description: "The Example instance for the Fetal Presentation Palpitation observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $sct#6096002
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        FetalHeartRateUltrasound
Parent:         Observation
Id:             IHE.FetalHeartRateUltrasound
Title:          "Fetal Heart Rate Ultrasound"
Description:    """
Fetal Heart rate determined by ultrasound"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#11948-7
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only Quantity
* valueQuantity.system = $ucum
* valueQuantity.code = #/min 
* performer 1..*
* method = $sct#278292003 "Ultrasound imaging - action"

Instance: ex-FetalHeartRateUltrasound
InstanceOf: FetalHeartRateUltrasound
Usage: #example
Description: "The Example instance for the Fetal Heart Rate by Ultrasound observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 93 '/min'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        FetalHeartRateAuscultation
Parent:         Observation
Id:             IHE.FetalHeartRateAuscultation
Title:          "Fetal Heart Rate Auscultation"
Description:    """
Fetal Heart rate determined by Auscultation"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#57068-9
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only Quantity
* valueQuantity.system = $ucum
* valueQuantity.code = #/min 
* performer 1..*
* method = $sct#37931006 "Auscultation"

Instance: ex-FetalHeartRateAuscultation
InstanceOf: FetalHeartRateAuscultation
Usage: #example
Description: "The Example instance for the Fetal Heart Rate by Ultrasound observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 93 '/min'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        FetalMovementReported
Parent:         Observation
Id:             IHE.FetalMovementReported
Title:          "Fetal Movement Reported"
Description:    """
Fetal Movement Reported"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#57088-7
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only CodeableConcept 
* valueCodeableConcept from Fetal.Movement.VS (extensible)
* performer 1..*

Instance: ex-FetalMovementReported
InstanceOf: FetalMovementReported
Usage: #example
Description: "The Example instance for the Fetal Movement Reported observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $sct#364755008
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        PretermLaborSymptoms
Parent:         Observation
Id:             IHE.PretermLaborSymptoms
Title:          "Preterm labor symptoms"
Description:    """
Preterm labor symptoms"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#57069-7
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only boolean 
* performer 1..*

Instance: ex-PretermLaborSymptoms
InstanceOf: PretermLaborSymptoms
Usage: #example
Description: "The Example instance for the Fetal Movement Reported observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueBoolean = false
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        CervicalCanalExternalosDiameterUltrasound
Parent:         Observation
Id:             IHE.CervicalCanalExternalosDiameterUltrasound
Title:          "Cervical Canal External os Diameter by ultrasound"
Description:    """
Cervical Canal External os Diameter by ultrasound"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#11785-3
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only Quantity
* valueQuantity.system = $ucum
* valueQuantity.code = #cm 
* performer 1..*
* method = $sct#278292003 "Ultrasound imaging - action"

Instance: ex-CervicalCanalExternalosDiameterUltrasound
InstanceOf: CervicalCanalExternalosDiameterUltrasound
Usage: #example
Description: "The Example instance for the Cervical Canal External os Diameter Ultrasound observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 2 'cm'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        EffacementCervixPalpitation 
Parent:         Observation
Id:             IHE.EffacementCervixPalpitation
Title:          "Effacement Cervix by Palpitation"
Description:    """
Effacement observation of Cervix by Palpitation"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#11867-9
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only Quantity
* valueQuantity.system = $ucum
* valueQuantity.code = #% 
* performer 1..*
* method = $sct#129434008 "Palpation - action"

Instance: ex-EffacementCervixPalpitation
InstanceOf: EffacementCervixPalpitation
Usage: #example
Description: "The Example instance for the Cervical Canal External os Diameter Ultrasound observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 2 '%'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        CervixLengthUltrasound
Parent:         Observation
Id:             IHE.CervixLengthUltrasound
Title:          "Cervix Length by ultrasound"
Description:    """
Cervix Length measured by ultrasound"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#11961-0
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only Quantity
* valueQuantity.system = $ucum
* valueQuantity.code = #cm
* performer 1..*
* method = $sct#278292003 "Ultrasound imaging - action"

Instance: ex-CervixLengthUltrasound
InstanceOf: CervixLengthUltrasound
Usage: #example
Description: "The Example instance for the Cervical Canal External os Diameter Ultrasound observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 5 'cm'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        AlbuminPresenceInUrine 
Parent:         Observation
Id:             IHE.AlbuminPresenceInUrine
Title:          "Albumin Presence In Urine"
Description:    """
Albumin Presence In Urine observation"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#1753-3
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only CodeableConcept 
* valueCodeableConcept from Presence.In.Urine.VS (extensible)
* performer 1..*

Instance: ex-AlbuminPresenceInUrine
InstanceOf: AlbuminPresenceInUrine
Usage: #example
Description: "The Example instance for the Albumin Presence In Urine observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $sct#167273002
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        GlucosePresenceinUrine 
Parent:         Observation
Id:             IHE.GlucosePresenceinUrine
Title:          "Albumin Presence In Urine"
Description:    """
Glucose Presence in Urine observation"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#2349-9
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only CodeableConcept 
* valueCodeableConcept from Presence.In.Urine.VS (extensible)
* performer 1..*

Instance: ex-GlucosePresenceinUrine
InstanceOf: GlucosePresenceinUrine
Usage: #example
Description: "The Example instance for the glucose Presence In Urine observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $sct#167273002
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        GlucosePresenceinUrineTestStrip 
Parent:         Observation
Id:             IHE.GlucosePresenceinUrineTestStrip
Title:          "Albumin Presence In Urine test by strip"
Description:    """
Glucose Presence in Urine observation"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#2349-9
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only CodeableConcept 
* valueCodeableConcept from Presence.In.Urine.VS (extensible)
* performer 1..*

Instance: ex-GlucosePresenceinUrineTestStrip
InstanceOf: GlucosePresenceinUrineTestStrip
Usage: #example
Description: "The Example instance for the glucose Presence In Urine observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $sct#167273002
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        Edema 
Parent:         Observation
Id:             IHE.Edema
Title:          "Edema observation"
Description:    """
Edema observation"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#44966-0
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only CodeableConcept 
* valueCodeableConcept from Edema.VS (extensible)
* performer 1..*

Instance: ex-Edema
InstanceOf: Edema
Usage: #example
Description: "The Example instance for the Edema observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $sct#420829009
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        PainSeverityReported  
Parent:         Observation
Id:             IHE.PainSeverityReported
Title:          "Pain Severity Reported observation"
Description:    """
Pain Severity Reported observation"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#38208-5
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only CodeableConcept 
* performer 1..*

Instance: ex-PainSeverityReported
InstanceOf: PainSeverityReported
Usage: #example
Description: "The Example instance for the Pain Severity Reported observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $loinc#LA6112-2   "1"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        DateNextClinicVisit   
Parent:         Observation
Id:             IHE.DateNextClinicVisit
Title:          "Date of Next Clinic Visit observation"
Description:    """
Date of Next Clinic Visit observation"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#57070-5 
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only Quantity
* valueQuantity.system = $ucum
//Note: can be day, week, month
* performer 1..*

Instance: ex-DateNextClinicVisit
InstanceOf: DateNextClinicVisit
Usage: #example
Description: "The Example instance for the Date of Next Clinic Visit observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 3 'wk'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        AnnotationComment    
Parent:         Observation
Id:             IHE.AnnotationComment
Title:          "Annotation Comment observation"
Description:    """
Annotation Comment observation"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#48767-8 
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only string
//Note: can be day, week, month
* performer 1..*

Instance: ex-AnnotationComment
InstanceOf: AnnotationComment
Usage: #example
Description: "The Example instance for the Annotation Comment observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueString = "all normal"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


---

// File: input/fsh/capability.fsh

Instance: IHE.mAPS.Content-Creator
InstanceOf: CapabilityStatement
Title: "mAPS Content Creator"
Usage: #definition
* name = "IHE_mAPS_Content_Creator"
* title = "mAPS Content Creator"
* status = #active
* experimental = false
* date = "2024-07-17"
* publisher = "Integrating the Healthcare Enterprise (IHE)"
* description = "The mAPS[Content Creator](volume-1.html#Content-Creator)"
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #application/fhir+xml
* format[+] = #application/fhir+json
* document[+].mode = #producer 
* document[=].profile = Canonical(IHE_PCC_mAPS_Composition)

Instance: IHE.mAPS.Content-Consumer
InstanceOf: CapabilityStatement
Title: "mAPS Content Consumer"
Usage: #definition
* name = "IHE_mAPS_Content_Consumer"
* title = "mAPS Content Consumer"
* status = #active
* experimental = false
* date = "2024-07-17"
* publisher = "Integrating the Healthcare Enterprise (IHE)"
* description = "The mAPS[Content Consumer](volume-1.html#Content-Consumer)"
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #application/fhir+xml
* format[+] = #application/fhir+json
* document[+].mode = #producer 
* document[=].profile = Canonical(IHE_PCC_mAPS_Composition)


---

// File: input/fsh/ex-AdvanceDirectivesBloodTransfusion.fsh

Profile:        IHEadvanceDirectives
Parent:         Consent 
Id:             IHE.advanceDirectives
Title:          "Advance Directives"
Description:    """
Example of the consent resource in the deffined method that IHE uses to deffine advance directives. modified from IHE advance directives Observation. 
"""
* scope = http://terminology.hl7.org/CodeSystem/consentscope#treatment
* dateTime 1..1
* performer 1..*
* verification 1..* 
* provision 1..1 
* provision.type 1..1
* provision.code 1..*
* provision.code from Advance.Directives.VS (extensible)


Instance: ex-AdvanceDirectives-BloodTransfusion
InstanceOf: IHEadvanceDirectives
Usage: #example
Description: "The Example instance for the IHE Advance Directives resource for blood transfuaion"

* status = #active
* category = http://terminology.hl7.org/CodeSystem/consentcategorycodes#hcd
* dateTime = "2021-10-06T10:52:30-07:00"
* performer = Reference(Practitioner/ex-Practitioner)
* patient = Reference(Patient/ex-Patient-AmandaAlvarez)
* policyRule = http://terminology.hl7.org/CodeSystem/consentpolicycodes#cric
* verification.verified = true
* verification.verifiedWith = Reference(Patient/ex-Patient-AmandaAlvarez)
* verification.verificationDate = "2021-10-06T10:52:30-07:00"
* provision.type = #permit
* provision.code = $sct#116859006 

---

// File: input/fsh/ex-Allergy-Fish.fsh

Instance: ex-Allergy-Fish
InstanceOf: AllergyIntoleranceUvIps
Usage: #example
Description: "The Example instance for the Allergy Intolerance - fish"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* note.text = "allergy is to fresh fish. Tolerates canned fish"
* identifier.system = "http://acme.com/ids/patients/risks"
* identifier.value = "49476535"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical#active
* verificationStatus = http://terminology.hl7.org/CodeSystem/allergyintolerance-verification#confirmed
* category = #food
* code = $sct#417532002
* patient = Reference(Patient/ex-Patient-AmandaAlvarez)
* recordedDate = "2015-08-06T15:37:31-06:00"
* recorder = Reference(Practitioner/ex-Practitioner)
* asserter = Reference(Patient/ex-Patient-AmandaAlvarez)

---

// File: input/fsh/ex-Allergy-Latex.fsh

Instance: ex-Allergy-Latex
InstanceOf: AllergyIntoleranceUvIps
Usage: #example
Description: "The Example instance for the Allergy Intolerance - Latex"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* note.text = "allergy is to latex"
* identifier.system = "http://acme.com/ids/patients/risks"
* identifier.value = "2834532"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical#active
* verificationStatus = http://terminology.hl7.org/CodeSystem/allergyintolerance-verification#confirmed
* category = #environment
* code = $sct#111088007
* patient = Reference(Patient/ex-Patient-AmandaAlvarez)
* recordedDate = "2015-08-06T15:37:31-06:00"
* recorder = Reference(Practitioner/ex-Practitioner)
* asserter = Reference(Patient/ex-Patient-AmandaAlvarez)  

---

// File: input/fsh/ex-CarePlan-BirthPlan.fsh

Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $condition-ver-status = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $mysys = http://example.org/mysys
Alias: $v3-ParticipationType = http://terminology.hl7.org/CodeSystem/v3-ParticipationType

Instance: ex-CarePlan-BirthPlan
InstanceOf: CarePlan
Description: "Example birth plan for ex composition."
Usage: #example

* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/request-intent#plan
* subject = Reference(Patient/ex-Patient-AmandaAlvarez) "Amanda Alvarez"
* category = $sct#735986004
* activity.reference = Reference(activity-3)
* period.start = "2021-07-15"
* period.end = "2022-04-20"
* careTeam = Reference(ex-careteam)
* goal = Reference(ex-goal)

Instance: p1
InstanceOf: Condition
Description: "Example condition for the ex-birthpan element."
Usage: #example
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* code.text = "pregnancy"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez) "Amanda Alvarez"

Instance: pr1
InstanceOf: Practitioner
Description: "Example practitioner 2 for the ex-birthpan care team"
Usage: #example
* name.family = "0'Malley"
* name.given = "Melinda"

Instance: pr2
InstanceOf: Practitioner
Description: "Example practitioner 2 for the ex-birthpan care team."
Usage: #example
* name.family = "Obstetrician"
* name.given = "Oscar"

Instance: ex-careteam
InstanceOf: CareTeam
Description: "Example care team for the ex-birthpan element."
Usage: #example
* participant[0].role = $mysys#lmc
* participant[=].role.text = "Midwife"
* participant[=].member = Reference(Practitioner/pr1) "Mavis Midwife"
* participant[+].role = $mysys#obs
* participant[=].role.text = "Obstretitian"
* participant[=].member = Reference(Practitioner/pr2) "Oscar Obstetrician"

Instance: ex-goal
InstanceOf: Goal
Description: "Example goal for the ex-birthpan element."
Usage: #example
* lifecycleStatus = #active
* description.text = "Maintain patient's health throughout pregnancy and ensure a healthy child"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez) "Amanda Alvarez"

Instance: activity-1 
InstanceOf: Appointment
Description: "Example appointment 1 for the ex-birthpan element."
Usage: #example
* status = #booked
* description = "The first antenatal encounter. This is where a detailed physical examination is performed and the pregnanacy discussed with the mother-to-be."
* start = "2021-09-18T10:38:00+00:00"
* end = "2021-09-18T10:50:00+00:00"
* requestedPeriod.start = "2021-09-18"
* requestedPeriod.end = "2021-09-28"
* participant[0].actor = Reference(Patient/ex-Patient-AmandaAlvarez) "Amanda Alvarez"
* participant[=].required = http://hl7.org/fhir/participantrequired#required
* participant[=].status = http://hl7.org/fhir/participationstatus#accepted
* participant[+].type = $v3-ParticipationType#ATND
* participant[=].actor = Reference(Practitioner/pr1) "Mavis Midwife"
* participant[=].required = http://hl7.org/fhir/participantrequired#required 
* participant[=].status = http://hl7.org/fhir/participationstatus#accepted

Instance: activity-2
InstanceOf: Appointment
Description: "Example appointment 2 for the ex-birthpan element."
Usage: #example
* status = #proposed
* description = "The second antenatal encounter. Discuss any issues that arose from the first antenatal encounter"
* requestedPeriod.start = "2021-10-12"
* requestedPeriod.end = "2021-10-12"
* participant[0].actor = Reference(Patient/ex-Patient-AmandaAlvarez) "Amanda Alvarez"
* participant[=].required = http://hl7.org/fhir/participantrequired#required
* participant[=].status = http://hl7.org/fhir/participationstatus#accepted
* participant[+].type = $v3-ParticipationType#ATND
* participant[=].actor = Reference(Practitioner/pr1) "Mavis Midwife"
* participant[=].required = http://hl7.org/fhir/participantrequired#required
* participant[=].status = http://hl7.org/fhir/participationstatus#accepted

Instance: activity-3
InstanceOf: Appointment
Description: "Example appointment 3 for the ex-birthpan element." 
Usage: #example
* status = #proposed
* description = "The home delivery."
* requestedPeriod.start = "2022-04-20"
* requestedPeriod.end = "2022-04-20"
* participant[0].actor = Reference(Patient/ex-Patient-AmandaAlvarez) "Amanda Alvarez"
* participant[=].required = http://hl7.org/fhir/participantrequired#required
* participant[=].status = http://hl7.org/fhir/participationstatus#accepted
* participant[+].type = $v3-ParticipationType#ATND
* participant[=].actor = Reference(Practitioner/pr1) "Mavis Midwife"
* participant[=].required = http://hl7.org/fhir/participantrequired#required
* participant[=].status = http://hl7.org/fhir/participationstatus#accepted
* reasonReference = Reference(p1)

---

// File: input/fsh/ex-Composition-AmandaAlvarez.fsh

Instance: ex-APS-Composition-AmandaAlvarez
InstanceOf: IHE.PCC.mAPS.Composition
Usage: #example
Description: "The Example instance for the Antepartum Summary composition for example patient Amanda Alvarez"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* type = $loinc#57055-6
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* date = "2023-01-08T14:30:00+01:00"
* author = Reference(Practitioner/ex-Practitioner)
* confidentiality = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* attester[0].mode = http://hl7.org/fhir/composition-attestation-mode#legal
* attester[=].time = "2023-01-08T14:30:00+01:00"
* attester[=].party = Reference(Practitioner/ex-Practitioner)
* attester[+].mode = http://hl7.org/fhir/composition-attestation-mode#legal
* attester[=].time = "2023-01-08T14:30:00+01:00"
* attester[=].party = Reference(Organization/ex-Organization-OB)
* custodian = Reference(Organization/ex-Organization-OB)


* section[sectionMedications]
  * title = "Medication Summary section"
  * code = $loinc#10160-0 "History of Medication use Narrative"
  * entry = Reference(ex-medicationStatement)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Active Medications - Amoxicillin</div>"

* section[sectionAllergies]
  * title = "Allergies and Intolerances"
  * code = $loinc#48765-2 "Allergies and adverse reactions Document"
  * entry[+] = Reference(ex-Allergy-Latex)
  * entry[+] = Reference(ex-Allergy-Fish)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">active allergies - latex and fish</div>"


* section[sectionProblems]
  * title = "Problems"
  * code = $loinc#11450-4 "Problem list - Reported"
  * entry[+] = Reference(ex-Problem-Sepsis)
  * entry[+] = Reference(ex-Problem-GestationalDiabetes)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">active problems - sepsis and gestational diabedies</div>"


* section[ChiefComplaint]
  * title = "Chief Complaint"
  * code = $loinc#10154-3 "Chief complaint Narrative - Reported"
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Complains of fever and having lack of energy</div>"

* section[sectionProceduresHx]
  * title = "Procedures History"
  * code = $loinc#47519-4 "History of Procedures Document"
  * entry[+] = Reference(ex-Procedure-CephalicVersion)
  * entry[+] = Reference(ex-Procedure-EducationSmoking)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">past procedures - Education for smoking provided and Cephallic Version</div>"


* section[sectionImmunizations]
  * title = "Immunizations"
  * code = $loinc#11369-6 "History of Immunization Narrative"
  * entry = Reference(ex-Immunization-Vericella)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Immunizations - Varicella</div>"


* section[sectionResults]
  * title = "Results"
  * code = $loinc#30954-2 "Relevant diagnostic tests/laboratory data Narrative"
  * entry[+] = Reference(ex-AntepartumLabs)
  * entry[+] = Reference(ex-Antepartum-Genetic-Screening)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">no abnormal results for labs</div>"


* section[sectionVitalSigns]
  * title = "Vital Signs"
  * code = $loinc#8716-3 "Vital signs"
  * entry[+] = Reference(ex-VitalSigns-BodyWeight)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">body weight - 185 lbs , prepregnancy weight - 148 lbs</div>"


* section[ReviewOfSystems]
  * title = "Review Of Systems"
  * code = $loinc#10187-3 "Review of systems Narrative - Reported"
  * entry = Reference(ex-MenstralStatus-Pregnancy)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">last menstral period</div>"


* section[PhysicalExams] 
  * title = "Physical Exams"
  * code = $loinc#29545-1 "Physical findings Narrative"
  * entry = Reference(ex-PhysicalExam-AbdominalTenderness)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">abdominal tenderness</div>"


* section[sectionPastIllnessHx]
  * title = "Past Illness History"
  * code = $loinc#11348-0 "History of Past illness Narrative"
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">none found</div>"
  * emptyReason = http://terminology.hl7.org/CodeSystem/list-empty-reason#unavailable


* section[HistoryOfInfection]
  * title = "History Of Infection"
  * code = $loinc#56838-6 "History of Infectious disease Narrative"
  * entry = Reference(ex-HistoryOfInfection)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">history of clamidia infection</div>"


* section[sectionPlanOfCare]
  * title = "Plan Of Care"
  * code = $loinc#18776-5 "Plan of care note"
  * entry = Reference(ex-CarePlan-BirthPlan)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Birth Plan</div>"


* section[sectionSocialHistory]
  * title = "Social History"
  * code = $loinc#29762-2 
  * entry[+] = Reference(ex-SocialHistory-smokingTobaccoUse)
  * entry[+] = Reference(ex-SocialHistory-alcoholUse)
  * entry[+] = Reference(ex-DomesticViolenceRisk)
  * entry[+] = Reference(ex-Homelessness)
  * entry[+] = Reference(ex-SocialHistory-EmploymentStatus)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">active smoker, drinks occasionally, no domestic violence risk, no homlessness, currently working</div>"


* section[sectionPregnancyHx]
  * title = "Pregnancy History"
  * code = $loinc#10162-6 "Pregnancies Hx"
  * entry[+] = Reference(ex-PregnencyStatus-pregnant)
  * entry[+] = Reference(ex-EstimatedDeliveryDate)
  * entry[+] = Reference(ex-GestationalAge)
  * entry[+] = Reference(ex-DateOfLastMenstralPeriod)
  * entry[+] = Reference(ex-DateOfFirstPrenatalVisit)
  * entry[+] = Reference(ex-PregnancyHistory-AmandaAlvarez)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">observations for pregnancy history</div>"


* section[FamilyMedicalHistory]
  * title = "Family Medical History"
  * code = $loinc#10157-6 "History of family member diseases Narrative"
  * entry[+] = Reference(ex-FamilyMemberHistory-AmandaAlvarez-Eve)
  * entry[+] = Reference(ex-FamilyMemberHistory-AmandaAlvarez-Alice)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Family Medical History for Amanda Alvarez</div>"


* section[sectionAdvanceDirectives]
  * title = "Advance Directives"
  * code = $loinc#42348-3 "Advance Directives"
  * entry = Reference(ex-AdvanceDirectives-BloodTransfusion)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">advance directve present</div>"


* section[Payors]
  * title = "Payors"
  * code = $loinc#48768-6 "Payment sources Document"
  * entry = Reference(ex-Coverage)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">payors for coverage</div>"


* section[AntepartumEducation]
  * title = "Antepartum Education"
  * code = $loinc#34895-3 "Education Note"
  * entry[+] = Reference(ex-PregnancyEducationObservation)
  * entry[+] = Reference(ex-PregnancyEducationObservation)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">education on smoking provided to patient in first and second trimesters</div>"


* section[AntepartumVisitSummaryFlowsheet]
  * title = "Antepartum Visit Summary Flowsheet"
  * code = $loinc#57059-8 "Pregnancy visit summary note Narrative"
  * entry[+] = Reference(ex-VitalSigns-BodyWeight-PrePregnancy)
  * entry[+] = Reference(ex-AntepartumVisitSummaryFlowsheetBattery)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Antepartum visit summary flowsheet documented</div>"


---

// File: input/fsh/ex-Coverage.fsh

Instance: ex-Coverage
InstanceOf: Coverage
Description: "Example coverage for ex composition."
Usage: #example

* status = http://hl7.org/fhir/request-status#active
* identifier.system = "http://benefitsinc.com/certificate"
* identifier.value = "123456"
* type = http://terminology.hl7.org/CodeSystem/v3-ActCode#EHCPOL
* policyHolder = Reference(Patient/ex-Patient-AmandaAlvarez) 
* subscriberId = "582938"
* beneficiary = Reference(Patient/ex-Patient-AmandaAlvarez) 
* payor = Reference(Organization/ex-Coverage-Organization)



Instance: ex-Coverage-Organization
InstanceOf: Organization
Description: "Example organization for ex composition."
Usage: #example

* identifier.value = "22224456"
* active = true
* type = http://terminology.hl7.org/CodeSystem/organization-type#pay
* name = "Insurance 1"

---

// File: input/fsh/ex-Employment Status.fsh

Instance:   ex-SocialHistory-EmploymentStatus
InstanceOf: https://profiles.ihe.net/PCC/ODH/StructureDefinition/odh-EmploymentStatus
Title:      "Employment Status example"
Description: "Example for Employment status"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* code = $loinc#74165-2 "History of employment status NIOSH"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performer = Reference(Practitioner/ex-Practitioner)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationValue#Employed
* effectivePeriod.start = "2022-07-15"

---

// File: input/fsh/ex-Encounter.fsh

Instance:   ex-Encounter
InstanceOf: Encounter
Title:      "Encounter Example for APS"
Description: "Encounter Example for Antepartum Summary"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#EMER
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* statusHistory.status = #finished
* statusHistory.period.end = "2022-07-15"

---

// File: input/fsh/ex-estimatedDeliveryDate.fsh

Instance:   ex-EstimatedDeliveryDate
InstanceOf: DeliveryDateEstimatedFromLMP
Title:      "Estimated Delivery Date example"
Description: "Estimated Delivery Date"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* code = $loinc#11779-6 "Delivery date Estimated from last menstrual period"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performer = Reference(Practitioner/ex-Practitioner)
* effectiveDateTime = "2022-09-18"
* valueDateTime = "2023-01-18"


---

// File: input/fsh/ex-EstimatedDueDate.fsh

Instance:   ex-pregnancy-edd
InstanceOf: http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-pregnancy-edd-uv-ips
Title:      "Pregnancy Estimated Due date example"
Description: "Pregnancy Estimated Due date example"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* code = $loinc#11779-6	
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* effectiveDateTime = "2019-07-15"
* valueDateTime = "2024-04-15"
* performer = Reference(Practitioner/ex-Practitioner)


---

// File: input/fsh/ex-FamilyMemberHistory-AmandaAlvarez.fsh

Instance:   ex-FamilyMemberHistory-AmandaAlvarez-Eve 
InstanceOf: FamilyMemberHistory
Title:      "Amanda Alvarez example Family Member Histories"
Description: "Amanda Alvarez Eve Family Member History example for antepartum summary"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = http://hl7.org/fhir/history-status#completed
* patient = Reference(Patient/ex-Patient-AmandaAlvarez)
* name = "Eve Alvarez"
* relationship = http://terminology.hl7.org/CodeSystem/v3-RoleCode#MTH
* condition.code = $sct#190905008 


Instance:   ex-FamilyMemberHistory-AmandaAlvarez-Alice 
InstanceOf: FamilyMemberHistory
Title:      "Amanda Alvarez example Family Member Histories"
Description: "Amanda Alvarez Alice Family Member History example for antepartum summary"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = http://hl7.org/fhir/history-status#completed
* patient = Reference(Patient/ex-Patient-AmandaAlvarez)
* name = "Alice Brown"
* relationship = http://terminology.hl7.org/CodeSystem/v3-RoleCode#MCOUSN
* condition.code = $sct#190905008 


---

// File: input/fsh/ex-historyOfInfection.fsh

Instance:   ex-HistoryOfInfection
InstanceOf: ConditionUvIps
Title:      "History Of Infection example"
Description: "History Of Infection example"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* category = http://terminology.hl7.org/CodeSystem/condition-category#problem-list-item
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* code = $sct#105629000 "Chlamydial infection (disorder)"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* onsetDateTime = "2022-09-18"


---

// File: input/fsh/ex-Immunization-Varicella.fsh

Instance: ex-Immunization-Vericella
InstanceOf: ImmunizationUvIps
Usage: #example
Description: "The Example instance for an immunizaiton - Vericella"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #completed
* vaccineCode = $2.16.840.1.113883.12.292#21 "Varicella"
* patient = Reference(Patient/ex-Patient-AmandaAlvarez)
* occurrenceDateTime = "2023-08-11"
* primarySource = false
* reportOrigin = http://terminology.hl7.org/CodeSystem/immunization-origin#record


---

// File: input/fsh/ex-medicationStatement.fsh

Instance: ex-medicationStatement
InstanceOf: MedicationStatementIPS
Usage: #example
Description: "The Example instance for the Medication Statement"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active 
* category = http://terminology.hl7.org/CodeSystem/medication-statement-category#outpatient 
* medicationCodeableConcept = $sct#27658006  "Product containing amoxicillin (medicinal product)"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* effectiveDateTime = "2023-01-02"
* dateAsserted = "2023-01-08"
* informationSource = Reference(Patient/ex-Patient-AmandaAlvarez)
* note.text = "indicates they miss the occasional dose"
* dosage.sequence = 1
* dosage.text = "5ml three times daily"
* dosage.asNeededBoolean = false 
* dosage.route = $sct#385268001
* dosage.doseAndRate.type = http://terminology.hl7.org/CodeSystem/dose-rate-type#ordered
* dosage.doseAndRate.doseQuantity = 5 'mL' "mL"
* dosage.maxDosePerPeriod.numerator = 3 'ml' "mL"
* dosage.maxDosePerPeriod.denominator = 1 'ml' "mL"




---

// File: input/fsh/ex-MenstralHistory-Pregnant.fsh

Instance:   ex-MenstralStatus-Pregnancy
InstanceOf: MenstrualStatus
Title:      "Menstrual Status example"
Description: "Menstrual Status example for a pregnant patient"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2023-01-02T10:52:30-07:00"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* hasMember[+] = Reference(ex-DateOfLastMenstralPeriod) 
* hasMember[=] = Reference(ex-MensesMonthly)
* hasMember[=] = Reference(ex-HCGPositive-Positive)
* hasMember[=] = Reference(ex-FrequencyOfMenstrualCycles)

Instance: ex-HCGPositive-Positive 
InstanceOf: HCGPositive 
Usage: #example
Description: "The Example instance for the HCGPlus observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2022-10-06T10:52:30-07:00"
* valueBoolean = true
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

---

// File: input/fsh/ex-Organization-OB.fsh

Instance:   ex-Organization-OB
InstanceOf: Organization 
Title:      "mAPS Organization example"
Description: "OBGYN Organization example for antepartum summary"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier.use = #official  
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI
* identifier.value = "187659"
* identifier.period.start = "1999-03-19"
* active = true
* type = http://terminology.hl7.org/CodeSystem/organization-type#prov
* name = "Acme Healthcare"
* telecom.system = #phone 
* telecom.value = "(401) 623 8856"
* address.type = #both
* address.text = "25 Eddy St, Providence, RI  02903"
* address.line = "25 Eddy St"
* address.city = "Providence"
* address.postalCode = "RI"
* address.state = "02903"
* address.country = "USA"

---

// File: input/fsh/ex-Patient-AmandaAlvarez.fsh

Instance:   ex-Patient-AmandaAlvarez
InstanceOf: PatientUvIps
Title:      "Amanda Alvarez example"
Description: "Amanda Alvarez patient example for antepartum summary"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier.use = #usual 
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#MR
* identifier.value = "12345"
* identifier.period.start = "2001-05-06"
* identifier.assigner = Reference(Organization/ex-Organization-OB)
* name[+].use = #official
* name[=].family = "Alvarez"
* name[=].given = "Amanda"
* name[+].use = #usual
* name[=].given = "Mandy"
* name[+].use = #maiden
* name[=].family = "Windsor"
* name[=].given = "Amanda"
* name[=].period.end = "2002" 
* telecom[+].system = #phone
* telecom[=].value = "unknown"
* telecom[=].use = #home
* telecom[+].system = #phone
* telecom[=].value = "(203) 555 6473"
* telecom[=].use = #work
* telecom[=].rank = 1
* telecom[+].system = #phone
* telecom[=].value = "(203) 410 5613"
* telecom[=].use = #mobile
* telecom[=].rank = 2
* telecom[+].system = #phone
* telecom[=].value = "((203) 555 8834"
* telecom[=].use = #old
* telecom[=].period.end = "2014"
* gender = #female 
//* birthDate = "1994-12-25T14:35:45-05:00"
* birthDate = "1994-12-25"
* deceasedBoolean = false 
* address.use = #home 
* address.type = #both
* address.text = "534 Erewhon St, Greenville, RI  02828"
* address.line = "534 Erewhon St"
* address.city = "Greenville"
* address.postalCode = "RI"
* address.state = "02828"
* address.country = "USA"
* address.period.start = "1974-12-25"
* contact.relationship = http://terminology.hl7.org/CodeSystem/v2-0131#N
* contact.name[+].use = #official
* contact.name[=].family = "du Marché"
* contact.name[=].prefix = "W"
* contact.name[=].given = "Bénédicte"
* contact.telecom[+].system = #phone
* contact.telecom[=].value = "+33 (237) 998327"
* contact.address.use = #home 
* contact.address.type = #both
* contact.address.text = "534 Erewhon St, Greenville, RI  02828"
* contact.address.line = "534 Erewhon St"
* contact.address.city = "Greenville"
* contact.address.postalCode = "RI"
* contact.address.state = "02828"
* contact.address.country = "USA"
* contact.address.period.start = "1994-12-25"
* contact.gender = #female
* contact.period.start = "2012"
* managingOrganization = Reference(Organization/ex-Organization-OB)



---

// File: input/fsh/ex-PhysicalExam.fsh

Instance:   ex-PhysicalExam-AbdominalTenderness
InstanceOf: Observation
Title:      "Physical Exam Abdominal tenderness example"
Description: "Physical Exam Abdominal tenderness example"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $sct#43478001 "Abdominal tenderness"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performer = Reference(Practitioner/ex-Practitioner)
* effectivePeriod[+].start = "2018-04-02T10:30:10+01:00"
* valueBoolean = true 
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#A


---

// File: input/fsh/ex-Practitioner.fsh

Instance:   ex-Practitioner
InstanceOf: Practitioner  
Title:      "mAPS Practitioner  example"
Description: "Practitioner example for antepartum summary"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier.use = #usual  
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI
* identifier.value = "567IUI51C154"
* active = true
* name[+].use = #official
* name[=].family = "Heps"
* name[=].given = "Simone"
* name[=].suffix = "MD"
* telecom[+].system = #phone 
* telecom[=].value = "2020556936"
* telecom[=].use = #work
* telecom[+].system = #email 
* telecom[=].value = "S.M.Heps@bmc.nl"
* telecom[=].use = #work
* telecom[+].system = #fax 
* telecom[=].value = "0205669283"
* telecom[=].use = #work
* address.use = #work 
* address.type = #both
* address.text = "25 Eddy St, Providence, RI  02903"
* address.line = "25 Eddy St"
* address.city = "Providence"
* address.postalCode = "RI"
* address.state = "02903"
* address.country = "USA"
* gender = #female
* birthDate = "1971-11-07"


---

// File: input/fsh/ex-PregnancyHistoryObservation.fsh

Instance:   ex-PregnancyHistory-AmandaAlvarez
InstanceOf: PregnancyHistory
Title:      "Pregnancy History observation example"
Description: "The Example instance for the PregnancyHistory observation"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2022-10-06T10:52:30-07:00"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* hasMember[+] = Reference(ex-DateOfLastLiveBirth-AmandaAlvarez) 
* hasMember[=] = Reference(ex-DateOfFirstPrenatalVisit-AmandaAlvarez)
* hasMember[=] = Reference(ex-NumberOfPreviousCesareanDeliveries)
* hasMember[=] = Reference(ex-NumberOfBirthsStillLiving)
* hasMember[=] = Reference(ex-NumberOfPreviousLiveBirthsNowDead)
* hasMember[=] = Reference(ex-NumberOfPrenatalVisitsForThisPregnancy)
* hasMember[=] = Reference(ex-NumberOfPregnancies)

Instance: ex-DateOfLastLiveBirth-AmandaAlvarez
InstanceOf: DateOfLastLiveBirth
Usage: #example
Description: "The Example instance for the DateOfLastLiveBirth observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2022-10-06T10:52:30-07:00"
* valueDateTime = "2021-09-18"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Instance: ex-DateOfFirstPrenatalVisit-AmandaAlvarez
InstanceOf: DateOfFirstPrenatalVisit
Usage: #example
Description: "The Example instance for the DateOfFirstPrenatalVisit observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2022-10-06T10:52:30-07:00"
* valueDateTime = "2022-08-18"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


---

// File: input/fsh/ex-pregnancyStatus-Pregnant.fsh

Instance:   ex-PregnencyStatus-pregnant
InstanceOf: ObservationPregnancyStatusUvIps
Title:      "Pregnency Status - pregnant example"
Description: "Example for Pregnency Status where patient is pregnant"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* code = $loinc#82810-3 "Pregnancy status"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performer = Reference(Practitioner/ex-Practitioner)
* effectiveDateTime = "2023-01-08"
* valueCodeableConcept = $loinc#LA15173-0 "Pregnant"
* hasMember = Reference(Observation/ex-pregnancy-edd)

---

// File: input/fsh/ex-Problem-GestationalDiabetes.fsh

Instance: ex-Problem-GestationalDiabetes
InstanceOf: ConditionUvIps
Usage: #example
Description: "The Example instance for the Problems - Gestational diabetes"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* verificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status#confirmed
* category = $sct#55607006
* severity = $sct#371924009
* code = $sct#11687002
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* onsetDateTime = "2023-01-02"
* recordedDate = "2023-01-02"
* recorder = Reference(Practitioner/ex-Practitioner)
* evidence.detail = Reference(DiagnosticReport/ex-DiagnosticReport-GestationalDiabetes)



Instance:   ex-DiagnosticReport-GestationalDiabetes
InstanceOf: DiagnosticReport
Title:      "Diagnostic Report Example for Gestational Diabetes"
Description: "Diagnostic Report Example for Gestational Diabetes"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final 
* category = http://terminology.hl7.org/CodeSystem/v2-0074#HM
* code = $loinc#2345-7
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* encounter = Reference(Encounter/ex-Encounter)
* performer = Reference(Practitioner/ex-Practitioner)

---

// File: input/fsh/ex-Problem-sepsis.fsh

Instance: ex-Problem-Sepsis
InstanceOf: ConditionUvIps
Usage: #example
Description: "The Example instance for the Problems - bacterial sepsis"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* verificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status#confirmed
* category = $loinc#75326-9
* severity = $sct#371924009
* code = $sct#281158006
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* encounter = Reference(Encounter/ex-Encounter)
* onsetDateTime = "2023-01-02"
* recordedDate = "2023-01-02"
* recorder = Reference(Practitioner/ex-Practitioner)
* evidence.detail = Reference(DiagnosticReport/ex-DiagnosticReport-Sepsis)



Instance:   ex-DiagnosticReport-Sepsis
InstanceOf: DiagnosticReport
Title:      "Diagnostic Report Example for Sepsis"
Description: "Diagnostic Report Example for Sepsis"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final 
* category = http://terminology.hl7.org/CodeSystem/v2-0074#HM
* code = $loinc#94554-3
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* encounter = Reference(Encounter/ex-Encounter)
* performer = Reference(Practitioner/ex-Practitioner)
* conclusionCode = $sct#10828004


---

// File: input/fsh/ex-Procedure-CephalicVersion.fsh

Instance: ex-Procedure-CephalicVersion
InstanceOf: ProcedureUvIps
Usage: #example
Description: "The Example instance for the procedure - Cephalic Version"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #completed
* category = $sct#386637004
* code = $sct#240278000
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performedDateTime = "2023-01-05"
* performer.actor = Reference(Practitioner/ex-Practitioner)
* reasonCode = $sct#1231436008
* outcome = $sct#385669000


---

// File: input/fsh/ex-Procedure-EducationSmoking.fsh

Instance: ex-Procedure-EducationSmoking
InstanceOf: ProcedureUvIps
Usage: #example
Description: "The Example instance for the procedure - Education Smoking"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* basedOn = Reference(ServiceRequest/ex-ServiceRequest-EducationSmoking)
* status = #completed
* category = $sct#311401005
* code = $sct#171055003
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performedDateTime = "2022-08-25"
* performer.actor = Reference(Practitioner/ex-Practitioner)
* reasonCode = $sct#449868002

Instance: ex-ServiceRequest-EducationSmoking
InstanceOf: ServiceRequest
Usage: #example
Description: "The Example instance for the Service Request for the Education Smoking procedure"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #completed
* intent = #order
* category = $sct#409073007
* code = $sct#171055003
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* occurrenceDateTime = "2022-08-25"
* performer = Reference(Practitioner/ex-Practitioner)

---

// File: input/fsh/ex-SocialHistory-Alcohol.fsh

Instance:   ex-SocialHistory-alcoholUse
InstanceOf: ObservationAlcoholUseUvIps
Title:      "Social History alcohol Use example"
Description: "Social History alcohol Use example"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* code = $loinc#74013-4 "Alcoholic drinks per day"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performer = Reference(Practitioner/ex-Practitioner)
* effectiveDateTime = "2019-07-15"
* valueQuantity = 2 '/d'

---

// File: input/fsh/ex-SocialHistory-Smoking.fsh

Instance:   ex-SocialHistory-smokingTobaccoUse
InstanceOf: ObservationTobaccoUseUvIps
Title:      "Social History smoking Tobacco Use example"
Description: "Example for Social History -  smoking Tobacco Use"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* code = $loinc#72166-2 "Tobacco smoking status"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performer = Reference(Practitioner/ex-Practitioner)
* effectiveDateTime = "2022-08-15"
* valueCodeableConcept = $loinc#LA18976-3	

Instance:   ex-SocialHistory-smokingTobaccoUse-formerSmoker
InstanceOf: ObservationTobaccoUseUvIps
Title:      "Social History smoking Tobacco Use example"
Description: "Example for Social History -  smoking Tobacco Use"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* code = $loinc#72166-2 "Tobacco smoking status"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performer = Reference(Practitioner/ex-Practitioner)
* effectiveDateTime = "2023-01-04"
* valueCodeableConcept = $loinc#LA15920-4		


---

// File: input/fsh/ex-vitalSigns-BodyWeight-PrePregnancy.fsh

Instance:   ex-VitalSigns-BodyWeight-PrePregnancy 
InstanceOf: BodyWeightMeasuredPrePregnancy
Title:      "Vital Signs Body Weight example"
Description: "Example for vital signs -  body weight"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* code.coding[0] = $loinc#8348-5 "Body weight Measured --pre pregnancy"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performer = Reference(Practitioner/ex-Practitioner)
* effectiveDateTime = "2023-01-06"
* valueQuantity = 148 '[lb_av]' "lbs"

---

// File: input/fsh/ex-vitalSigns-BodyWeight.fsh

Instance:   ex-VitalSigns-BodyWeight
InstanceOf: Observation
Title:      "Vital Signs Body Weight example"
Description: "Example for vital signs -  body weight"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs
* code.coding = $loinc#29463-7 "Body Weight"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performer = Reference(Practitioner/ex-Practitioner)
* effectiveDateTime = "2023-01-06"
* valueQuantity = 185 '[lb_av]' "lbs"

---

// File: input/fsh/IHE_APS_Composition.fsh

Profile:   IHE_PCC_mAPS_Composition
Parent: Composition
Id:             IHE.PCC.mAPS.Composition
Title: "Antapartum Summary"
Description:      """
Antepartum Summary is a content profile that defines the structure for the aggregation of significant events, diagnoses, and plans of care derived from the visits over the course of an antepartum episode. 
It is represented in part by Estimated Due Dates and a Visit Summary Flowsheet, in which the aggregated data from the ambulatory office visits is recorded, as well as allergies, advance directives, care plans, 
and selected histories are provided. The Antepartum Summary represents a summary of the most critical information to an antepartum care provider regarding the status of a patient’s pregnancy.

"""

* text MS
* identifier MS
* status MS 
* type MS
* insert requireAtLeastOneMatch(type.coding, asummary, $loinc#57055-6 )
* category 1..* MS 
* insert requireAtLeastOneMatch(category, pstat, $loinc#90767-5)
* subject 1..1 MS 
* subject only Reference(https://profiles.ihe.net/ITI/PDQm/StructureDefinition/IHE.PDQm.Patient)
* encounter MS 
* date MS 
* author MS 
* title MS
* title = "Antepartum Summary"
* attester MS 
* attester.mode MS 
* attester.time MS 
* attester.party MS
* custodian MS 
* event MS 
* insert requireAtLeastOneMatch(event.code, obs, http://terminology.hl7.org/CodeSystem/v3-ActCode#OBS)

* section.code 1..1 MS  
* section.code ^type.profile = "http://hl7.org/fhir/uv/ips/StructureDefinition/CodeableConcept-uv-ips"
* section.title 1..1 MS
* section.text 1..1 MS 
* section ^slicing.discriminator.type = #pattern
* section ^slicing.discriminator.path = "code"
* section ^slicing.rules = #open
* section ^slicing.description = "Sections composing the APS"
* section ^slicing.ordered = false
* section contains 
    sectionMedications 1..1 and
    sectionAllergies 1..1  and
    sectionProblems 1..1  and
    sectionPastIllnessHx 1..1  and
    sectionSocialHistory 0..1  and
    sectionProceduresHx 1..1  and
    sectionPregnancyHx 1..1  and
    sectionPlanOfCare 0..1  and
    sectionImmunizations 1..1  and
    sectionResults 0..1  and
    sectionAdvanceDirectives 0..1  and
    sectionVitalSigns 0..1  and
    ChiefComplaint 0..1  and
    FamilyMedicalHistory 0..1  and
    ReviewOfSystems 0..1  and
    HistoryOfInfection 0..1  and
    PhysicalExams 0..1  and
    AntepartumEducation 0..1  and 
    Payors 0..1 and 
    AntepartumVisitSummaryFlowsheet 0..1  

* section[sectionMedications] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionMedications] ^extension.valueString = "Section"
* section[sectionMedications] ^short = "Medication Summary Section"
* section[sectionMedications] ^definition = "TBD"
* section[sectionMedications].code = $loinc#10160-0
* section[sectionMedications].emptyReason MS 
* section[sectionMedications].entry ^short = "Medications relevant for the scope of the patient summary"
* section[sectionMedications].entry 0..* MS 
* section[sectionMedications].entry only Reference(MedicationStatement or MedicationRequest or MedicationAdministration or MedicationDispense or DocumentReference or http://hl7.org/fhir/uv/ips/StructureDefinition/MedicationStatement-uv-ips or http://hl7.org/fhir/uv/ips/StructureDefinition/MedicationRequest-uv-ips)

* section[sectionAllergies] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionAllergies] ^extension.valueString = "Section"
* section[sectionAllergies] ^short = "Allergies and Intolerances Section"
* section[sectionAllergies] ^definition = "TBD"
* section[sectionAllergies].code = $loinc#48765-2
* section[sectionAllergies].emptyReason MS 
* section[sectionAllergies].entry ^short = "Relevant allergies or intolerances (conditions) for that patient."
* section[sectionAllergies].entry 0..* MS 
* section[sectionAllergies].entry only Reference(AllergyIntolerance or DocumentReference or http://hl7.org/fhir/uv/ips/StructureDefinition/AllergyIntolerance-uv-ips)

* section[sectionProblems] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionProblems] ^extension.valueString = "Section"
* section[sectionProblems] ^short = "Problems Section"
* section[sectionProblems] ^definition = "TBD"
* section[sectionProblems].code = $loinc#11450-4
* section[sectionProblems].emptyReason MS 
* section[sectionProblems].entry ^short = "Clinical problems or conditions currently being monitored for the patient."
* section[sectionProblems].entry 0..* MS 
* section[sectionProblems].entry only Reference(Condition or DocumentReference or http://hl7.org/fhir/uv/ips/StructureDefinition/Condition-uv-ips)

* section[sectionProceduresHx] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionProceduresHx] ^extension.valueString = "Section"
* section[sectionProceduresHx] ^short = "History of Procedures Section"
* section[sectionProceduresHx] ^definition = "TBD"
* section[sectionProceduresHx].code = $loinc#47519-4
* section[sectionProceduresHx].emptyReason MS 
* section[sectionProceduresHx].entry ^short = "Patient past procedures pertinent to the scope of this document."
* section[sectionProceduresHx].entry 0..* MS 
* section[sectionProceduresHx].entry only Reference(Procedure  or DocumentReference or http://hl7.org/fhir/uv/ips/StructureDefinition/Procedure-uv-ips)

* section[sectionPastIllnessHx] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionPastIllnessHx] ^extension.valueString = "Section"
* section[sectionPastIllnessHx] ^short = "History of Past Illness Section"
* section[sectionPastIllnessHx] ^definition = "TBD"
* section[sectionPastIllnessHx].code = $loinc#11348-0
* section[sectionPastIllnessHx].emptyReason MS 
* section[sectionPastIllnessHx].entry ^short = "Conditions the patient suffered in the past."
* section[sectionPastIllnessHx].entry 0..* MS 
* section[sectionPastIllnessHx].entry only Reference(Condition or DocumentReference or http://hl7.org/fhir/uv/ips/StructureDefinition/Condition-uv-ips)

* section[sectionSocialHistory] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionSocialHistory] ^extension.valueString = "Section"
* section[sectionSocialHistory] ^short = "Social History Section"
* section[sectionSocialHistory] ^definition = "TBD"
* section[sectionSocialHistory].code = $loinc#29762-2
* section[sectionSocialHistory].emptyReason MS 
* section[sectionSocialHistory].entry ^short = "Health related 'lifestyle factors' or 'lifestyle observations' (e.g. smoke habits; alcohol consumption; diets, risky habits.)"
* section[sectionSocialHistory].entry 0..* MS
* section[sectionSocialHistory].entry only Reference(Observation or DocumentReference or http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-tobaccouse-uv-ips or http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-alcoholuse-uv-ips or DrugUse or SmokingTobaccoUseFrequency or AlcoholUseFrequency or Exercise or Diet or ToxicExposure or Homelessness or DomesticViolenceRisk or CombatZonePeriod or EmploymentStatus or PastOrPresentJob or RetirementDate or UsualWork)

* section[sectionPregnancyHx] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionPregnancyHx] ^extension.valueString = "Section"
* section[sectionPregnancyHx] ^short = "History of Pregnancy Section"
* section[sectionPregnancyHx] ^definition = "TBD"
* section[sectionPregnancyHx].code = $loinc#10162-6
* section[sectionPregnancyHx].emptyReason MS 
* section[sectionPregnancyHx].entry ^short = "Current pregnancy status and, optionally, information about the outcome of earlier pregnancies."
* section[sectionPregnancyHx].entry 0..* MS
* section[sectionPregnancyHx].entry only Reference(Observation or DocumentReference or http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-pregnancy-status-uv-ips or http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-pregnancy-outcome-uv-ips or MultiplePregnancy or GestationalAge or DateOfLastMenstralPeriod or PregnancyHistory)

* section[sectionImmunizations] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionImmunizations] ^extension.valueString = "Section"
* section[sectionImmunizations] ^short = "Immunization Section"
* section[sectionImmunizations] ^definition = "TBD"
* section[sectionImmunizations].code = $loinc#11369-6
* section[sectionImmunizations].emptyReason MS 
* section[sectionImmunizations].entry ^short = "Patient's immunization status and pertinent history."
* section[sectionImmunizations].entry 0..* MS
* section[sectionImmunizations].entry only Reference(Immunization or DocumentReference or http://hl7.org/fhir/uv/ips/StructureDefinition/Immunization-uv-ips)

* section[sectionPlanOfCare] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionPlanOfCare] ^extension.valueString = "Section"
* section[sectionPlanOfCare] ^short = "Plan of Care Section"
* section[sectionPlanOfCare] ^definition = "TBD"
* section[sectionPlanOfCare].code = $loinc#18776-5
* section[sectionPlanOfCare].emptyReason MS 
* section[sectionPlanOfCare].entry ^short = "entry used to represent structured care plans"
* section[sectionPlanOfCare].entry 0..* MS
* section[sectionPlanOfCare].entry only Reference(CarePlan or DocumentReference)

* section[sectionResults] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionResults] ^extension.valueString = "Section"
* section[sectionResults] ^short = "Results Section"
* section[sectionResults] ^definition = "TBD"
* section[sectionResults].code = $loinc#30954-2
* section[sectionResults].emptyReason MS 
* section[sectionResults].entry ^short = "Relevant observation results collected on the patient or produced on in-vitro biologic specimens collected from the patient."
* section[sectionResults].entry 0..* MS
* section[sectionResults].entry only Reference(Observation or http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-results-uv-ips or DiagnosticReport or DocumentReference or AntepartumLabs or Antepartum_Genetic_Screening)

* section[sectionAdvanceDirectives] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionAdvanceDirectives] ^extension.valueString = "Section"
* section[sectionAdvanceDirectives] ^short = "Advance Directives Section"
* section[sectionAdvanceDirectives] ^definition = "TBD"
* section[sectionAdvanceDirectives].code = $loinc#42348-3
* section[sectionAdvanceDirectives].emptyReason MS 
* section[sectionAdvanceDirectives].entry ^short = "the patient's advance directive."
* section[sectionAdvanceDirectives].entry 0..*
* section[sectionAdvanceDirectives].entry only Reference(Consent or DocumentReference)

* section[sectionVitalSigns] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionVitalSigns] ^extension.valueString = "Section"
* section[sectionVitalSigns] ^short = "Vital Signs Section"
* section[sectionVitalSigns] ^definition = "TBD"
* section[sectionVitalSigns].code = $loinc#8716-3
* section[sectionVitalSigns].emptyReason MS 
* section[sectionVitalSigns].entry ^short = "Notable vital signs or physical findings."
* section[sectionVitalSigns].entry 0..*
* section[sectionVitalSigns].entry only Reference(Observation or DocumentReference or http://hl7.org/fhir/StructureDefinition/vitalsigns)

* section[ChiefComplaint] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[ChiefComplaint] ^extension.valueString = "Section"
* section[ChiefComplaint] ^short = "Cheif Complaint Section"
* section[ChiefComplaint] ^definition = "Chief complaint records the patient's primary complaint (the patient's own description)."
* section[ChiefComplaint].code = $loinc#10154-3
* section[ChiefComplaint].code MS
* section[ChiefComplaint].text 1..1

* section[FamilyMedicalHistory] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[FamilyMedicalHistory] ^extension.valueString = "Section"
* section[FamilyMedicalHistory] ^short = "Family Medical History"
* section[FamilyMedicalHistory] ^definition = "The family history section shall include entries for family history"
* section[FamilyMedicalHistory].code = $loinc#10157-6
* section[FamilyMedicalHistory].entry 0..* 
* section[FamilyMedicalHistory].entry only Reference(FamilyMemberHistory)

* section[ReviewOfSystems] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[ReviewOfSystems] ^extension.valueString = "Section"
* section[ReviewOfSystems] ^short = "Review of Systems"
* section[ReviewOfSystems] ^definition = "The review of systems section shall contain a narrative description of the responses the patient gave to a set of routine questions on the functions of each anatomic body system. "
* section[ReviewOfSystems].code = $loinc#10187-3
* section[ReviewOfSystems].entry 0..* 
* section[ReviewOfSystems].entry only Reference(Observation or IHE.MenstrualStatus)

* section[HistoryOfInfection] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[HistoryOfInfection] ^extension.valueString = "Section"
* section[HistoryOfInfection] ^short = "History of Infection"
* section[HistoryOfInfection] ^definition = "The History of Infection section shall contain a narrative description of any infections the patient may have contracted prior to the patient's current condition."
* section[HistoryOfInfection].code = $loinc#56838-6
* section[HistoryOfInfection].code MS
* section[HistoryOfInfection].entry only Reference(Condition)
// Note:If there is no entry available in this section then a data absent Reason SHALL be provided 

* section[PhysicalExams] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[PhysicalExams] ^extension.valueString = "Section"
* section[PhysicalExams] ^short = "Physical Exams"
* section[PhysicalExams] ^definition = "The coded Detailed Physical Examination section shall contain only the required and optional subsections performed."
* section[PhysicalExams].code = $loinc#29545-1
* section[PhysicalExams].code MS
* section[PhysicalExams].entry only Reference(Observation)
// Note:If there is no entry available in this section then a data absent Reason SHALL be provided 

* section[AntepartumEducation] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[AntepartumEducation] ^extension.valueString = "Section"
* section[AntepartumEducation] ^short = "AntepartumEducation"
* section[AntepartumEducation] ^definition = "The Antepartum Education contains a list of patient education activities that have occured or have been planned to review with the patient."
* section[AntepartumEducation].code = $loinc#34895-3
* section[AntepartumEducation].code MS
* section[AntepartumEducation].entry 0..* 
* section[AntepartumEducation].entry only Reference(Procedure or PregnancyEducationObservation or Observation or DocumentReference)


* section[Payors] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[Payors] ^extension.valueString = "Section"
* section[Payors] ^short = "Payors"
* section[Payors] ^definition = "The Payers section contains data on the patient’s payers, whether a ‘third party’ insurance, self-pay, other payer or guarantor, or some combination. ."
* section[Payors].code = $loinc#48768-6
* section[Payors].code MS
* section[Payors].entry only Reference(Coverage)

* section[AntepartumVisitSummaryFlowsheet] ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[AntepartumVisitSummaryFlowsheet] ^extension.valueString = "Section"
* section[AntepartumVisitSummaryFlowsheet] ^short = "Antepartum Visit Summary Flowsheet"
* section[AntepartumVisitSummaryFlowsheet] ^definition = "This section is a running history of the most important elements noted for a pregnant woman."
* section[AntepartumVisitSummaryFlowsheet].code = $loinc#57059-8
* section[AntepartumVisitSummaryFlowsheet].code MS
* section[AntepartumVisitSummaryFlowsheet].entry only Reference(Observation or AntepartumVisitSummaryFlowsheetBattery)







---

// File: input/fsh/PregnancyEducationObservation.fsh

Profile:        PregnancyEducationObservation
Parent:         Observation
Id:             IHE.PregnancyEducationObservation
Title:          "Pregnancy Education Observation"
Description:    """
Any education provided to a patient relating to their pregnancy or birth plan (e.g. pregnancy risks from tobacco use, breastfeeding)
"""


* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#34895-3
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
* value[x] 1..1
* value[x] only CodeableConcept 
* valueCodeableConcept from Antepartum.Education.VS (extensible)
* subject only Reference(Patient)
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0

Instance: ex-PregnancyEducationObservation
InstanceOf: PregnancyEducationObservation
Usage: #example
Description: "The Example instance for the PregnancyEducationObservation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $sct#54070000
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

---

// File: input/fsh/PregnancyHistoryObservations.fsh

Profile:        PregnancyHistory
Parent:         Observation
Id:             IHE.PregnancyHistory
Title:          "Pregnancy History Observations"
Description:    """
The pregnancy history collects observations relevant to a single pregnancy within the patient’s history. The organizer for a pregnancy event shall either contain subordinate birth event organizers for 
each birth event associated with the pregnancy or shall conform to the birth event organizer template, but not both. 
"""

* status = http://hl7.org/fhir/observation-status#final 
* code = $sct#118185001
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* subject only Reference(Patient)
* hasMember only Reference(NumberOfLiveBirths or NumberOfPretermBirths or NumberOfBirthsStillLiving or NumberOfBirthsToTerm or NumberOfTotalBirths or NumberOfAbortions or NumberOfAbortionsInduced or NumberOfAbortionsSpontanious or NumberOfEctopicPregnancies or NumberOfStillbornBirths)
// Has member slicing may need to take place 
// this is making everything else in observation forbidden.
* category 0..0
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 
// Open Issue: (requesting feedback) on this approach

Instance: ex-PregnancyHistory
InstanceOf: PregnancyHistory
Usage: #example
Description: "The Example instance for the PregnancyHistory observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        NumberOfLiveBirths
Parent:         Observation
Id:             IHE.NumberOfLiveBirths
Title:          "Number of Live Births"
Description:    """
Total number of live births. [Complete expulsion or extraction from the mother if a product of human conception, irrespective of duration of pregnancy, which, after expulsion or extraction, breathes or shows 
any other evidence of life such as heart beat.
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#11636-8
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1
* value[x] only integer
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 

Instance: ex-NumberOfLiveBirths
InstanceOf: NumberOfLiveBirths
Usage: #example
Description: "The Example instance for the NumberOfLiveBirths observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueInteger = 2
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Profile:        NumberOfPretermBirths
Parent:         Observation
Id:             IHE.NumberOfPretermBirths
Title:          "Number of Preterm Births"
Description:    """
Total number of children whose birth occurred through the end of the last day of the 37th week (259th day) following onset of the last menstrual period.
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#11637-6
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1
* value[x] only integer
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 

Instance: ex-NumberOfPretermBirths
InstanceOf: NumberOfPretermBirths
Usage: #example
Description: "The Example instance for the NumberOfPretermBirths observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueInteger = 0
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Profile:        NumberOfBirthsStillLiving
Parent:         Observation
Id:             IHE.NumberOfBirthsStillLiving
Title:          "Births Still Living"
Description:    """
Total number of children still living at time this record is generated.
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#11638-4
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1
* value[x] only integer
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 

Instance: ex-NumberOfBirthsStillLiving
InstanceOf: NumberOfBirthsStillLiving
Usage: #example
Description: "The Example instance for the NumberOfBirthsStillLiving observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueInteger = 2
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Profile:        NumberOfBirthsToTerm
Parent:         Observation
Id:             IHE.NumberOfBirthsToTerm
Title:          "Births to Term"
Description:    """
Total number of children whose birth occurred after the beginning of the first day (259th day) of the 38th week following onset of the last menstrual period.
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#11639-2
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1
* value[x] only integer
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 

Instance: ex-NumberOfBirthsToTerm
InstanceOf: NumberOfBirthsToTerm
Usage: #example
Description: "The Example instance for the NumberOfBirthsToTerm observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueInteger = 2
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        NumberOfTotalBirths
Parent:         Observation
Id:             IHE.NumberOfTotalBirths
Title:          "Number of Total Births"
Description:    """
Total number of births including abortions, stillbirths and live births. [Note: Because of multiple gestation this number may be greater than the number of abortions plus parity, 
the number of times the uterus is emptied of a viable pregnancy.
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#11640-0
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1
* value[x] only integer
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 

Instance: ex-NumberOfTotalBirths
InstanceOf: NumberOfTotalBirths
Usage: #example
Description: "The Example instance for the NumberOfTotalBirths observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueInteger = 2
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Profile:        NumberOfAbortions
Parent:         Observation
Id:             IHE.NumberOfAbortions
Title:          "Number of Abortions"
Description:    """
Number of pregnancies terminated before 20 weeks of gestation calculated from the date of onset of last menses [or equivalent date estimated from ultrasound or other measurement or from 
data derived from assisted fertilization procedure].
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#11612-9
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1
* value[x] only integer
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 

Instance: ex-NumberOfAbortions
InstanceOf: NumberOfAbortions
Usage: #example
Description: "The Example instance for the NumberOfAbortions observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueInteger = 0
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        NumberOfAbortionsInduced
Parent:         Observation
Id:             IHE.NumberOfAbortionsInduced
Title:          "Number of Abortions Induced"
Description:    """
Number of intentional medical or surgical terminations of pregnancies before 20 weeks of gestation. [Includes elective and therapeutic terminations. 
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#11613-7
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1
* value[x] only integer
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 

Instance: ex-NumberOfAbortionsInduced
InstanceOf: NumberOfAbortionsInduced
Usage: #example
Description: "The Example instance for the NumberOfAbortionsInduced observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueInteger = 0
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        NumberOfAbortionsSpontanious
Parent:         Observation
Id:             IHE.NumberOfAbortionsSpontanious
Title:          "Number of Abortions Spontanious"
Description:    """
Number of unintentional terminations of pregnancies before 20 weeks of gestation. [Excludes induced terminations]. 
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#11614-5
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1
* value[x] only integer
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer

Instance: ex-NumberOfAbortionsSpontanious
InstanceOf: NumberOfAbortionsSpontanious
Usage: #example
Description: "The Example instance for the NumberOfAbortionsSpontanious observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueInteger = 0
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        NumberOfEctopicPregnancies
Parent:         Observation
Id:             IHE.NumberOfEctopicPregnancies
Title:          "Number of Ectopic Pregnancy"
Description:    """
Number of Ectopic Pregnancies
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#33065-4
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1
* value[x] only integer
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer

Instance: ex-NumberOfEctopicPregnancies
InstanceOf: NumberOfEctopicPregnancies
Usage: #example
Description: "The Example instance for the NumberOfEctopicPregnancies observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueInteger = 0
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Profile:        NumberOfStillbornBirths
Parent:         Observation
Id:             IHE.NumberOfStillbornBirths
Title:          "Number of Stillborn Births"
Description:    """
Number of Stillborn Births
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#57062-2
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1
* value[x] only integer
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer

// Open issue: why Biths to term and births preterm observations repeated in the current pregnancy section of the APS CDA? How best do we map this into this FHIR model 

Instance: ex-NumberOfStillbornBirths
InstanceOf: NumberOfStillbornBirths
Usage: #example
Description: "The Example instance for the NumberOfStillbornBirths observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueInteger = 0
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Profile:        NumberOfPregnancies
Parent:         Observation
Id:             IHE.NumberOfPregnancies
Title:          "Number of Pregnancies"
Description:    """
Total number of times the patient has been pregnant including the present pregnancy. 
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#11996-6
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1
* value[x] only integer
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer

Instance: ex-NumberOfPregnancies
InstanceOf: NumberOfPregnancies
Usage: #example
Description: "The Example instance for the NumberOfPregnancies observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueInteger = 3
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        MultiplePregnancy
Parent:         Observation
Id:             IHE.MultiplePregnancy
Title:          "Multiple Pregnancy"
Description:    """
To document multiple pregnancy.  
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#45371-2
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1
* value[x] only boolean
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer

Instance: ex-MultiplePregnancy
InstanceOf: MultiplePregnancy
Usage: #example
Description: "The Example instance for the MultiplePregnancy observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueBoolean = false
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        GestationalAge
Parent:         Observation
Id:             IHE.GestationalAge
Title:          "Gestational Age"
Description:    """
Gestational age in weeks. 
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#49051-6 
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1
* value[x] only Quantity
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer

Instance: ex-GestationalAge
InstanceOf: GestationalAge
Usage: #example
Description: "The Example instance for the GestationalAge observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 14 'wk'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        FetusGestationalAge
Parent:         Observation
Id:             IHE.FetusGestationalAge
Title:          "Fetus Gestational Age"
Description:    """
The age of the conceptus, beginning from the time of fertilization. In clinical obstetrics, the gestational age is often estimated as the time from the last day of the last menstruation which is about 2 weeks before ovulation and fertilization.
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#11887-7
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1 
* value[x] only Quantity
* subject only Reference(Patient)
// OPen ISsue: Method to be requireed to be calculated from the estimated delivery date. need for further research 
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer

//Open issue: ANtepartum summary references a number of observations that appear irrelivant to Antepartum care (32396-4	Labor duration, 8339-4	Body weight at birth, 29300-1	Procedure, 8722-1 	Surgical operation note anesthesia, 52829-9	Place of service) Review with comittee 

Instance: ex-FetusGestationalAge
InstanceOf: FetusGestationalAge
Usage: #example
Description: "The Example instance for the FetusGestationalAge observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 14 'wk'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        LaborRisk
Parent:         Observation
Id:             IHE.LaborRisk
Title:          "Labor Risk"
Description:    """
Increased chance of harm during the period supporting the bringing forth of an offspring/child. 
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#42839-1
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1
* value[x] only CodeableConcept
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
* method 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer

Instance: ex-LaborRisk
InstanceOf: LaborRisk
Usage: #example
Description: "The Example instance for the LaborRisk observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $loinc#14510-2
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        DeliveryRisk
Parent:         Observation
Id:             IHE.DeliveryRisk
Title:          "Delivery Risk"
Description:    """
Increased chance of harm during the period supporting the expulsion of an offspring/child. 
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#42840-9
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1
* value[x] only CodeableConcept
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
* method 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer

Instance: ex-DeliveryRisk
InstanceOf: DeliveryRisk
Usage: #example
Description: "The Example instance for the DeliveryRisk observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $loinc#14510-2
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        DateOfLastMenstralPeriod
Parent:         Observation
Id:             IHE.DateOfLastMenstralPeriod
Title:          "Date Of Last Menstral Period"
Description:    """
The date the mother’s last normal menstrual period began.
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#8665-2 
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1 
* value[x] only dateTime
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
* method 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer

Instance: ex-DateOfLastMenstralPeriod
InstanceOf: DateOfLastMenstralPeriod
Usage: #example
Description: "The Example instance for the DateOfLastMenstralPeriod observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueDateTime = "2021-06-12"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        DeliveryDateClinicalEstimate
Parent:         Observation
Id:             IHE.DeliveryDateClinicalEstimate
Title:          "Delivery Date Clinical Estimate"
Description:    """
The final number of weeks should be available in the OB admission H&P as the first source. The final number of weeks may also be obtained from the PNC records as a secondary source if the information is not available in the OB admissions H&P
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#11778-8
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
* value[x] 1..1 
* value[x] only dateTime
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer

Instance: ex-DeliveryDateClinicalEstimate
InstanceOf: DeliveryDateClinicalEstimate
Usage: #example
Description: "The Example instance for the DeliveryDateClinicalEstimate observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueDateTime = "2022-03-24"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        DeliveryDateEstimatedFromLMP
Parent:         Observation
Id:             IHE.DeliveryDateEstimatedFromLMP
Title:          "Delivery Date Clinical Estimated From Last Menstral Period"
Description:    """
The estimated delivery date as determined based on the reported first day of the last menstrual period (LMP), typically estimated as 280 days after the first day of the LMP. 
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#11779-6
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
* value[x] 1..1 
* value[x] only dateTime
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer

Instance: ex-DeliveryDateEstimatedFromLMP
InstanceOf: DeliveryDateEstimatedFromLMP
Usage: #example
Description: "The Example instance for the DeliveryDateEstimatedFromLMP observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueDateTime = "2022-03-24"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Profile:        DeliveryDateEstimatedFromOvulationDate
Parent:         Observation
Id:             IHE.DeliveryDateEstimatedFromOvulationDate
Title:          "Delivery Date Clinical Estimated From Ovulation Date"
Description:    """
The estimated delivery date as determined based on the reported ovulation date. 
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#11780-4
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
* value[x] 1..1 
* value[x] only dateTime
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer

Instance: ex-DeliveryDateEstimatedFromOvulationDate
InstanceOf: DeliveryDateEstimatedFromOvulationDate
Usage: #example
Description: "The Example instance for the DeliveryDateEstimatedFromOvulationDate observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueDateTime = "2022-04-08"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        FetusGestationalAgeClinicalEstimate
Parent:         Observation
Id:             IHE.FetusGestationalAgeClinicalEstimate
Title:          "Fetus Gestational Age Clinical Estimate"
Description:    """
The final number of weeks should be available in the OB admission H&P as the first source. The final number of weeks may also be obtained from the PNC records as a secondary source if the information is not available in the OB admissions H&P 
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#11884-4
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
* value[x] 1..1 
* value[x] only Quantity
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer

Instance: ex-FetusGestationalAgeClinicalEstimate
InstanceOf: FetusGestationalAgeClinicalEstimate
Usage: #example
Description: "The Example instance for the FetusGestationalAgeClinicalEstimate observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 14 'wk'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Profile:        FetusGestationalAgeEstimatedFromLMP
Parent:         Observation
Id:             IHE.FetusGestationalAgeEstimatedFromLMP
Title:          "Fetus Gestational Age Estimated From LMP"
Description:    """
The final number of weeks should be available in the OB admission H&P as the first source. The final number of weeks may also be obtained from the PNC records as a secondary source if the information is not available in the OB admissions H&P 
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#11885-1
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
* value[x] 1..1 
* value[x] only Quantity
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer

Instance: ex-FetusGestationalAgeEstimatedFromLMP
InstanceOf: FetusGestationalAgeEstimatedFromLMP
Usage: #example
Description: "The Example instance for the FetusGestationalAgeEstimatedFromLMP observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 14 'wk'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        FetusGestationalAgeEstimatedFromOvulationDate
Parent:         Observation
Id:             IHE.FetusGestationalAgeEstimatedFromOvulationDate
Title:          "Fetus Gestational Age Estimated From Ovulation Date"
Description:    """
The estimated delivery date as determined based on the reported ovulation date. 
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#11886-9
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
* value[x] 1..1 
* value[x] only Quantity
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer

Instance: ex-FetusGestationalAgeEstimatedFromOvulationDate
InstanceOf: FetusGestationalAgeEstimatedFromOvulationDate
Usage: #example
Description: "The Example instance for the FetusGestationalAgeEstimatedFromOvulationDate observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 14 'wk'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        DateOfFirstPrenatalVisit
Parent:         Observation
Id:             IHE.DateOfFirstPrenatalVisit
Title:          "Date Of First Prenatal Visit"
Description:    """
Date Of First Prenatal Visit 
The date a physician or other health care professional first examined and/or counseled the pregnant woman for the pregnancy. 
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#69044-6
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
* value[x] 1..1 
* value[x] only dateTime
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer

Instance: ex-DateOfFirstPrenatalVisit
InstanceOf: DateOfFirstPrenatalVisit
Usage: #example
Description: "The Example instance for the DateOfFirstPrenatalVisit observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueDateTime = "2021-08-06T10:52:30-07:00"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        NumberOfPrenatalVisitsForThisPregnancy
Parent:         Observation
Id:             IHE.NumberOfPrenatalVisitsForThisPregnancy
Title:          "Number Of Prenatal Visits For This Pregnancy"
Description:    """
Do not include visits for laboratory and other testing in which a physician or health care professional did not examine or counsel the pregnant woman Access the most recent prenatal records available. If up-to-date records are not available, contact the prenatal care provider for the most current information. Count the prenatal visits recorded in the record. Exclude visits for laboratory and other tests or classes in which the mother was not seen by a physician or other health care professional for pregnancy-related care. If it is not clear whether the mother was seen by a physician or other health care professional, include the visit(s) in the total number.
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#68493-6
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1 
* value[x] only integer
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 

Instance: ex-NumberOfPrenatalVisitsForThisPregnancy
InstanceOf: NumberOfPrenatalVisitsForThisPregnancy
Usage: #example
Description: "The Example instance for the NumberOfPrenatalVisitsForThisPregnancy observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueInteger = 2
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        NumberOfPreviousLiveBirthsNowDead
Parent:         Observation
Id:             IHE.NumberOfPreviousLiveBirthsNowDead
Title:          "Number Of Previous Live Births Now Dead"
Description:    """
Previous delivery by extracting the fetus, placenta, and membranes through an incision in the mother’s abdominal and uterine walls.
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#68496-9
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1 
* value[x] only integer
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 

Instance: ex-NumberOfPreviousLiveBirthsNowDead
InstanceOf: NumberOfPreviousLiveBirthsNowDead
Usage: #example
Description: "The Example instance for the NumberOfPreviousLiveBirthsNowDead observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueInteger = 0
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        DateOfLastLiveBirth
Parent:         Observation
Id:             IHE.DateOfLastLiveBirth
Title:          "Date Of Last Live Birth"
Description:    """
The date of birth of the last live-born infant. 
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#68499-3
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
* value[x] 1..1 
* value[x] only dateTime
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer

Instance: ex-DateOfLastLiveBirth
InstanceOf: DateOfLastLiveBirth
Usage: #example
Description: "The Example instance for the DateOfLastLiveBirth observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueDateTime = "2018-04-13T10:52:30-07:00"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        NumberOfPreviousCesareanDeliveries
Parent:         Observation
Id:             IHE.NumberOfPreviousCesareanDeliveries
Title:          "Number Of Previous Cesarean Deliveries"
Description:    """
Previous delivery by extracting the fetus, placenta, and membranes through an incision in the mother’s abdominal and uterine walls.
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#68497-7
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1 
* value[x] only integer
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 

Instance: ex-NumberOfPreviousCesareanDeliveries
InstanceOf: NumberOfPreviousCesareanDeliveries
Usage: #example
Description: "The Example instance for the NumberOfPreviousCesareanDeliveries observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueInteger = 0
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Profile:        NumberOfOtherPregnancyOutcomes
Parent:         Observation
Id:             IHE.NumberOfOtherPregnancyOutcomes
Title:          "Number Of Other Pregnancy Outcomes"
Description:    """
Other pregnancy outcomes # Includes perinatal death, small for gestational age/intrauterine growth restricted birth. History of pregnancies continuing into the 20th week of gestation and resulting in 
any of the listed outcomes. Perinatal death includes fetal and neonatal deaths.
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#69043-8
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1 
* value[x] only integer
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 

Instance: ex-NumberOfOtherPregnancyOutcomes
InstanceOf: NumberOfOtherPregnancyOutcomes
Usage: #example
Description: "The Example instance for the NumberOfOtherPregnancyOutcomes observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueInteger = 1
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        DateOfLastOtherPregnancyOutcome
Parent:         Observation
Id:             IHE.DateOfLastOtherPregnancyOutcome
Title:          "Date Of Last Other Pregnancy Outcome"
Description:    """
The date (year) that the last pregnancy that did not result in a live birth ended. Includes pregnancy losses at any gestation age. Examples: spontaneous or induced losses or ectopic pregnancy. 
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#68500-8
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1 
* value[x] only dateTime
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 

Instance: ex-DateOfLastOtherPregnancyOutcome
InstanceOf: DateOfLastOtherPregnancyOutcome
Usage: #example
Description: "The Example instance for the DateOfLastOtherPregnancyOutcome observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueDateTime = "2015-01-10T10:52:30-07:00"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        BodyWeightMeasuredPrePregnancy
Parent:         Observation
Id:             IHE.BodyWeightMeasuredPrePregnancy
Title:          "Body Weight Measured Pre Pregnancy"
Description:    """
Body Weight Measured before the current pregnancy
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $loinc#8348-5
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x]1..1 
* value[x] only Quantity
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 

//Open Issue: (Seeking input) there were two observations for Date of last menstral period, one with a code from LOINC and one with a code from SNOMED-CT. The Observation with the LOINC code was chosen over the SNOMED-CT, as best practice is to use LIONC for observation codes. 
//Open Issue: seeking Comment -- Menstral status observations have code values from SNOMED-CT. Proper practice with deffining observation is to use LOINC in the code section. Looking for comment to determine if the origional SNOMED code should be retained  or replaced with a LOINC code

Instance: ex-BodyWeightMeasuredPrePregnancy
InstanceOf: BodyWeightMeasuredPrePregnancy
Usage: #example
Description: "The Example instance for the BodyWeightMeasuredPrePregnancy observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 156 '[lb_av]'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Profile:        MenstrualStatus
Parent:         Observation
Id:             IHE.MenstrualStatus
Title:          "Menstrual Status"
Description:    """
MenstrualStatus Reported. 
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $loinc#8678-5
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
* subject only Reference(Patient)
* hasMember only Reference(DateOfLastMenstralPeriod or MensesMonthly or PriorMensesDate or DurationOfMenstrualFlow or FrequencyOfMenstrualCycles or Menarche or HCGPositive)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer

Instance: ex-MenstrualStatus
InstanceOf: MenstrualStatus
Usage: #example
Description: "The Example instance for the MenstrualStatus observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        MensesMonthly
Parent:         Observation
Id:             IHE.MensesMonthly
Title:          "Menses Monthly"
Description:    """
Regularity of menstrual cycle 
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $sct#364307006
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1
* value[x] only boolean
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 


Instance: ex-MensesMonthly
InstanceOf: MensesMonthly
Usage: #example
Description: "The Example instance for the MensesMonthly observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueBoolean = false
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        PriorMensesDate 
Parent:         Observation
Id:             IHE.PriorMensesDate
Title:          "Prior Menses Date"
Description:    """
The date of the last menstral period
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $sct#21840007 
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1 
* value[x] only dateTime
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 

Instance: ex-PriorMensesDate
InstanceOf: PriorMensesDate
Usage: #example
Description: "The Example instance for the PriorMensesDate observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueDateTime = "2021-07-17"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        DurationOfMenstrualFlow 
Parent:         Observation
Id:             IHE.DurationOfMenstrualFlow
Title:          "Duration of Menstrual Flow"
Description:    """
Number of days typical for the patient’s menstrual flow
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $sct#364306002 	
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1 
* value[x] only Quantity
//need confirmation this is the correct 
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 

Instance: ex-DurationOfMenstrualFlow
InstanceOf: DurationOfMenstrualFlow
Usage: #example
Description: "The Example instance for the DurationOfMenstrualFlow observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 6 'd'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Profile:        FrequencyOfMenstrualCycles 
Parent:         Observation
Id:             IHE.FrequencyOfMenstrualCycles
Title:          "Frequency of Menstrual Cycles"
Description:    """
Number of days between menstrual cycle periods.
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $sct#289887006 	 	
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1 
* value[x] only Quantity
* valueQuantity.system = $ucum
* valueQuantity.code = #d
//need confirmation this is the correct 
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 

Instance: ex-FrequencyOfMenstrualCycles
InstanceOf: FrequencyOfMenstrualCycles
Usage: #example
Description: "The Example instance for the FrequencyOfMenstrualCycles observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 24 'd' "days"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Profile:        Menarche 
Parent:         Observation
Id:             IHE.Menarche 	
Title:          "Menarche"
Description:    """
The patient age at the first occurrence of menstruation.
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $sct#398700009 	 	
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1 
* value[x] only Quantity
//need confirmation this is the correct 
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 

Instance: ex-Menarche
InstanceOf: Menarche
Usage: #example
Description: "The Example instance for the Menarche observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 38 'wk'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        HCGPositive 
Parent:         Observation
Id:             IHE.hCGPositive	
Title:          "hCG+"
Description:    """
Positive pregnancy test as determined by the presence of Human Chorionic Gonadotropin (hCG)
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey
* code = $sct#250423000	 	
* effective[x] 1..1
* effective[x] only dateTime 
* performer 1..*
//Confomrance Statment: The effective time element shall be present to indicate the interval of the pregnancy. 
* value[x] 1..1 
* value[x] only boolean
//need confirmation this is the correct 
* subject only Reference(Patient)
// this is making everything else in observation forbidden.
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* method 0..0 
* specimen 0..0
* referenceRange 0..0
* component 0..0
// HasMember open issue this may be relivant and useful for maternal health observations and groupings initially deffined under an organizer 

Instance: ex-HCGPositive 
InstanceOf: HCGPositive 
Usage: #example
Description: "The Example instance for the HCGPlus observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueBoolean = false
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

---

// File: input/fsh/rules.fsh

RuleSet: requireAtLeastOneMatch(path, slice, pattern)
* {path} ^slicing.discriminator.type = #pattern
* {path} ^slicing.discriminator.path = "$this"
* {path} ^slicing.rules = #open
* {path} contains {slice} 1..1 
* {path}[{slice}] = {pattern}  


---

// File: input/fsh/SocialHistoryObservations.fsh

Profile:        SmokingTobaccoUseFrequency
Parent:         Observation
Id:             IHE.SmokingTobaccoUseFrequency
Title:          "Smoking and Tobacco Use Frequency" 
Description:    """
The frequency of tobacco use. This may be measured in packs/day, packs/week, or packs/year.
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#social-history
* code = $sct#229819007	
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only Quantity
* value[x].unit from Smoking.Tabbacco.Use.Frequency.VS (required)
* subject only Reference(Patient)
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
* method 0..0

Instance: ex-SmokingTobaccoUseFrequency
InstanceOf: SmokingTobaccoUseFrequency
Usage: #example
Description: "The Example instance for the SmokingTobaccoUseFrequency observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 0 '/d'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        AlcoholUseFrequency
Parent:         Observation
Id:             IHE.AlcoholUseFrequency
Title:          "alcohol Use"
Description:    """
Alcoholic drinks per day
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#social-history
* code = $loinc#74013-4
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only Quantity
* value[x].unit from Alcohol.USe.Frequency.VS (required)
* subject only Reference(Patient)
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
* method 0..0

Instance: ex-AlcoholUseFrequency
InstanceOf: AlcoholUseFrequency
Usage: #example
Description: "The Example instance for the AlcoholUseFrequency observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 2 '/d'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        DrugUse
Parent:         Observation
Id:             IHE.drugUse
Title:          "Drug Use"
Description:    """
Use of illegal drugs or prescription medications for non-medical purposes.
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#social-history
* code = $sct#363908000
* effective[x] 1..1
* effective[x] only dateTime 
//APSOpenIssue_013:
* subject only Reference(Patient)
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0

Instance: ex-DrugUse
InstanceOf: DrugUse
Usage: #example
Description: "The Example instance for the DrugUse observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        Exercise
Parent:         Observation
Id:             IHE.Exercise
Title:          "Exercise"
Description:    """
Frequency of Physical Activity (days per week) and duration of physical activity (in minutes per day).
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#social-history
* code = $sct#256235009
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only Quantity
* valueQuantity.system = $ucum
* valueQuantity.code = #wk
* subject only Reference(Patient)
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
* method 0..0

Instance: ex-Exercise
InstanceOf: Exercise
Usage: #example
Description: "The Example instance for the Exercise observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 2 'wk'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        Diet
Parent:         Observation
Id:             IHE.Diet
Title:          "Diet"
Description:    """
The customary amount and kind of food and drink taken by a person from day to day.
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#social-history
* code = $sct#364393001
* value[x] 1..1 
* value[x] only CodeableConcept
* subject only Reference(Patient)
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
* method 0..0

Instance: ex-Diet
InstanceOf: Diet
Usage: #example
Description: "The Example instance for the Diet observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $sct#36823005
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        ToxicExposure
Parent:         Observation
Id:             IHE.ToxicExposure
Title:          "Toxic Exposure"
Description:    """
Whether the patient has been exposed to a toxic substance.
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#social-history
* code = $sct#425400000
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only boolean
* subject only Reference(Patient)
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
* method 0..0

Instance: ex-ToxicExposure
InstanceOf: ToxicExposure
Usage: #example
Description: "The Example instance for the ToxicExposure observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueBoolean = false
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        Homelessness
Parent:         Observation
Id:             IHE.Homelessness
Title:          "Homelessness"
Description:    """
The state of having no home or permanent place of residence.
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#social-history
* code = $loinc#98978-0
* effective[x] 1..1
* effective[x] only dateTime 
* value[x] 1..1 
* value[x] only boolean
* subject only Reference(Patient)
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
* method 0..0

Instance: ex-Homelessness
InstanceOf: Homelessness
Usage: #example
Description: "The Example instance for the Homelessness observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueBoolean = false
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Profile:        DomesticViolenceRisk
Parent:         Observation
Id:             IHE.ViolenceRisk
Title:          "At risk of domestic violence"
Description:    """
At increased risk of domestic partner abuse.
"""
* category 1..1
* status = http://hl7.org/fhir/observation-status#final
* category = http://terminology.hl7.org/CodeSystem/observation-category#social-history
* code = $sct#707087005
* effective[x] 1..1
* effective[x] only dateTime 
* subject only Reference(Patient)
* device 0..0
* interpretation 0..0
* focus 0..0
* bodySite 0..0
* specimen 0..0
* referenceRange 0..0
* component 0..0
* method 0..0 

Instance: ex-DomesticViolenceRisk
InstanceOf: DomesticViolenceRisk
Usage: #example
Description: "The Example instance for the DomesticViolenceRisk observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueBoolean = false
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

---

// File: input/images-source/ActorsAndTransactions.plantuml

@startuml
hide footbox
agent "Content\nCreator" as Creator
agent "Content\nConsumer" as Consumer
cloud "Share Content" as cloud
Creator -> cloud : ContentCreator
cloud -> Consumer : ContentConsumer
@enduml


---

// File: input/images-source/docSharing.plantuml

@startuml
hide footbox
agent "Content\nCreator" as Creator
agent "Content\nConsumer" as Consumer
cloud "Share Content" as cloud
Creator -> cloud : IPS
cloud -> Consumer : IPS
@enduml


---

// File: input/images-source/usecase1-processflow.plantuml

@startuml
skinparam svgDimensionStyle false
hide footbox
participant "Client" as Client
participant "Server" as Server
activate "Client"
"Client" -> "Server" : 1. Go Query [domain-YY]
activate "Server"
"Server" --> "Client" : 2. Go Response [domain-YY]
deactivate "Client"
deactivate "Server"
@enduml


---

// File: input/data/features.yml

---
disable_autonumbering: true
feedback:
  - active: true
    dashboard:
      label: New Issue
      url: https://github.com/IHE/PCC.mAPS/issues/new/choose
  - active: true
    dashboard:
      label: Issues
      url: https://github.com/IHE/PCC.mAPS/issues

---

